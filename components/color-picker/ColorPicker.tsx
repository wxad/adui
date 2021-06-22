/* eslint-disable max-len */
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { color2hsb, hsb2hex } from "../_util/color"
import { ConfigContext, getComputedSize } from "../config-provider"
import Button from "../button"
import Input from "../input"
import Popover, { IPopoverProps } from "../popover"
import Slider from "../slider"
import {
  isLegalHexString,
  addHashTag,
  removeHashTag,
  STANDARDS,
  STANDARDS_TRANSPARENT,
  TRANSPARENT_BG,
} from "./core"
import ColorPickerCollapse from "./ColorPickerCollapse"
import "./style"

const prefix = "adui-cp"

export interface IColorPickerProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 默认的初始值 - 内部驱动
   */
  defaultValue?: string | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 输入框是否显示
   */
  inputVisible?: boolean
  /**
   * 值改变时的 handler
   */
  onChange?: (value: string) => void
  /**
   * 在 visible 变为 false，以及 Input blur 时触发的 handler；
   * 这个 handler 非常特殊，为了配合特殊的 recentColors Prop 使用，请在这个事件触发的时候设置 recentColors。
   */
  onFinishChange?: (value: string) => void
  /**
   * 传入 Popover 的 props
   */
  popoverProps?: IPopoverProps
  /**
   * 弹出框内的结果区域是否显示
   */
  popupResultVisible?: boolean
  /**
   * 最近使用的颜色，此功能非常特殊，需配合 onFinishChange 使用
   */
  recentColors?: string[]
  /**
   * 尺寸大小
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 开启透明色
   */
  transparentEnabled?: boolean
  /**
   * 值 - 外部控制
   */
  value?: string | null
}

/**
 * 颜色选择器
 */
const ColorPicker: React.ForwardRefExoticComponent<
  IColorPickerProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      className,
      defaultValue,
      disabled,
      inputVisible,
      onChange,
      onFinishChange,
      popoverProps,
      popupResultVisible,
      recentColors,
      size: sizeProp,
      transparentEnabled,
      value: valueProp,
      ...otherProps
    }: IColorPickerProps,
    ref
  ) => {
    let prevValue = ""

    const getInitialState = () => {
      let h = 0
      let s = 0
      let b = 0
      let inputValue = ""
      let valueState = ""
      const getState = (val: string) => {
        ;[h, s, b] = color2hsb(val)
        if (val === "transparent") {
          valueState = val
          inputValue = ""
        } else {
          valueState = val.toUpperCase()
          inputValue = removeHashTag(val.toUpperCase())
        }
      }
      if (
        valueProp &&
        (isLegalHexString(removeHashTag(valueProp)) ||
          (transparentEnabled && valueProp === "transparent"))
      ) {
        getState(valueProp)
      } else if (
        defaultValue &&
        (isLegalHexString(removeHashTag(defaultValue)) ||
          (transparentEnabled && defaultValue === "transparent"))
      ) {
        getState(defaultValue)
      }

      prevValue = valueState

      return {
        h,
        s: s * 100,
        b: b * 100,
        inputValue,
        value: valueState,
      }
    }

    const initialState = useMemo(getInitialState, [])

    const [h, setH] = useState(initialState.h)
    const [s, setS] = useState(initialState.s)
    const [b, setB] = useState(initialState.b)
    const [inputValue, setInputValue] = useState(initialState.inputValue)
    const [value, setValue] = useState(initialState.value)
    const [visible, setVisible] = useState(false)
    const [standardCollapsed, setStandardCollapsed] = useState(false)
    const [customCollapsed, setCustomCollapsed] = useState(true)

    // 相当于生命周期 getDerivedStateFromProps
    if (
      valueProp &&
      isLegalHexString(removeHashTag(valueProp)) &&
      valueProp.toUpperCase() !== value
    ) {
      setH(color2hsb(valueProp)[0])
      setS(color2hsb(valueProp)[1] * 100)
      setB(color2hsb(valueProp)[2] * 100)
      setInputValue(removeHashTag(valueProp.toUpperCase()))
      setValue(valueProp.toUpperCase())
    } else if (valueProp === "" && value !== "") {
      setH(0)
      setS(0)
      setB(0)
      setInputValue("")
      setValue("")
    } else if (
      transparentEnabled &&
      valueProp === "transparent" &&
      value !== "transparent"
    ) {
      setH(0)
      setS(0)
      setB(0)
      setInputValue("")
      setValue("transparent")
    }

    const inputRef = useRef<any>(null)
    const popupInputRef = useRef<any>(null)
    const triggerRef = useRef<any>(null)

    const { size: sizeContext } = useContext(ConfigContext)
    const size = getComputedSize(sizeProp, sizeContext)

    let paletteRect: Omit<DOMRect, "toJSON"> = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      x: 0,
      y: 0,
      width: 160,
      height: 90,
    }

    const classSet = classNames(className, `${prefix}`, `${prefix}-${size}`)

    const callChange = (val: string) => {
      if (onChange) {
        onChange(val)
      }
    }

    const handlePrefixClick = () => {
      if (visible && popupInputRef.current?.input) {
        popupInputRef.current.input.focus()
      } else if (inputRef.current?.input) {
        inputRef.current.input.focus()
      }
    }

    const handleVisibleChange = (bool: boolean) => {
      setVisible(bool)
      if (bool) {
        prevValue = value
      } else if (value !== prevValue) {
        prevValue = value

        setTimeout(() => {
          if (onFinishChange) {
            onFinishChange(value)
          }
        }, 200)
      }
    }

    const handleInputBlur = (type?: "popup") => {
      if (transparentEnabled) {
        if (inputValue !== "" && value === "transparent") {
          setInputValue("")
        }
      } else if (addHashTag(inputValue) !== value) {
        setInputValue(removeHashTag(value))
      }
      if (value !== prevValue && !type && onFinishChange) {
        onFinishChange(value)
      }
    }

    const handleInputFocus = ({
      target,
    }: React.FocusEvent<HTMLInputElement>) => {
      target.select()
    }

    const handleValueChange = (val: string) => {
      if (valueProp === null) {
        if (val.toUpperCase() === "TRANSPARENT") {
          setInputValue("")
          setValue("transparent")
        } else {
          const [newH, newS, newB] = color2hsb(val)
          setH(newH)
          setS(newS * 100)
          setB(newB * 100)
          setInputValue(removeHashTag(val))
          setValue(val)
        }
      }
      callChange(val === "TRANSPARENT" ? "transparent" : val)
    }

    const handleInputChange = ({
      target: { value: val },
    }: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = val.split("#").join("")
      setInputValue(inputVal)
      if (isLegalHexString(inputVal)) {
        handleValueChange(addHashTag(inputVal))
      } else if (transparentEnabled && inputVal === "") {
        handleValueChange("transparent")
      }
    }

    const handleCustomChange = (type: "h" | "s" | "b", val: number) => {
      let newValue: string
      if (type === "h") {
        newValue = hsb2hex(val, s / 100, b / 100)
        setH(val)
      } else if (type === "s") {
        newValue = hsb2hex(h, val / 100, b / 100)
        setS(val)
      } else {
        newValue = hsb2hex(h, s / 100, val / 100)
        setB(val)
      }

      setInputValue(removeHashTag(newValue))
      setValue(newValue)

      callChange(newValue)
    }

    const handlePaletteMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = paletteRect

      let newS = (e.pageX - left - window.scrollX) / width
      let newB = (e.pageY - top - window.scrollY) / height

      if (newS < 0) {
        newS = 0
      } else if (newS > 1) {
        newS = 1
      }

      if (newB < 0) {
        newB = 0
      } else if (newB > 1) {
        newB = 1
      }

      newS *= 100
      newB = 100 - newB * 100

      const newColor = hsb2hex(h, newS / 100, newB / 100)

      setS(newS)
      setB(newB)
      setValue(newColor)
      setInputValue(removeHashTag(newColor))

      callChange(newColor)
    }

    const handlePaletteMouseUp = () => {
      window.removeEventListener("mousemove", handlePaletteMouseMove)
      window.removeEventListener("mouseup", handlePaletteMouseUp)
    }

    const handlePaletteMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      const { currentTarget } = e
      paletteRect = currentTarget.getBoundingClientRect()
      const { left, top, width, height } = paletteRect

      const newS = ((e.pageX - left - window.scrollX) / width) * 100
      const newB = 100 - ((e.pageY - top - window.scrollY) / height) * 100

      const newColor = hsb2hex(h, newS / 100, newB / 100)

      setS(newS)
      setB(newB)
      setValue(newColor)
      setInputValue(removeHashTag(newColor))

      callChange(newColor)

      window.addEventListener("mousemove", handlePaletteMouseMove)
      window.addEventListener("mouseup", handlePaletteMouseUp)
    }

    const handleCollapseChange = (
      bool: boolean,
      type: "standard" | "custom"
    ) => {
      if (type === "standard") {
        setStandardCollapsed(bool)
        if (!bool && !customCollapsed) {
          setCustomCollapsed(true)
        }
      } else if (type === "custom") {
        setCustomCollapsed(bool)
        if (!bool && !standardCollapsed) {
          setStandardCollapsed(true)
        }
      }
    }

    const renderInput = (type?: "popup") => (
      <Input
        ref={type ? popupInputRef : inputRef}
        className={`${prefix}-input`}
        cleaveOptions={{ uppercase: true }}
        disabled={disabled}
        leftElement={
          <div
            role="none"
            onClick={handlePrefixClick}
            className={`${prefix}-prefix`}
          >
            #
          </div>
        }
        onBlur={() => handleInputBlur(type)}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder=""
        size={type ? "small" : size}
        theme={type && "light"}
        value={inputValue}
      />
    )

    useImperativeHandle(ref, () => ({
      input: inputRef.current,
      popupInput: popupInputRef.current,
      trigger: triggerRef.current,
    }))

    return (
      <div
        className={classSet}
        data-value={value}
        data-h={h || 0}
        data-s={s || 0}
        data-b={b || 0}
        {...otherProps}
      >
        <Popover
          alignEdge={false}
          placement="bottomLeft"
          popup={
            <div className={`${prefix}-popup`}>
              {popupResultVisible && (
                <div className={`${prefix}-popup-result`}>
                  <i
                    style={{
                      background:
                        value === "transparent" ? TRANSPARENT_BG : value,
                    }}
                  />
                  {renderInput("popup")}
                </div>
              )}
              {recentColors && !!recentColors.length && (
                <ColorPickerCollapse
                  defaultCollapsed={false}
                  header="最近使用"
                  content={
                    <div className={`${prefix}-recent`}>
                      {[...new Set(recentColors.slice(0, 7))].map((color) => (
                        <i
                          key={color}
                          role="none"
                          onClick={() => handleValueChange(color.toUpperCase())}
                          style={{
                            background:
                              color === "transparent" ? TRANSPARENT_BG : color,
                          }}
                        />
                      ))}
                    </div>
                  }
                />
              )}

              <ColorPickerCollapse
                collapsed={standardCollapsed}
                onCollapseChange={(bool) =>
                  handleCollapseChange(bool, "standard")
                }
                header="标准色板"
                content={
                  <div className={`${prefix}-standard`}>
                    {(transparentEnabled
                      ? STANDARDS_TRANSPARENT
                      : STANDARDS
                    ).map((color) => (
                      <i
                        key={color}
                        role="none"
                        onClick={() => handleValueChange(color)}
                        className={
                          color === value
                            ? `${prefix}-standard-item_selected`
                            : ""
                        }
                        style={{
                          background:
                            color === "TRANSPARENT" ? TRANSPARENT_BG : color,
                        }}
                      />
                    ))}
                  </div>
                }
              />
              <ColorPickerCollapse
                collapsed={customCollapsed}
                onCollapseChange={(bool) =>
                  handleCollapseChange(bool, "custom")
                }
                header="自定义"
                content={
                  <div className={`${prefix}-custom`}>
                    <div
                      className={`${prefix}-palette`}
                      role="none"
                      style={{ backgroundColor: `hsl(${h}, 100%, 50%)` }}
                      onMouseDown={handlePaletteMouseDown}
                    >
                      <div className={`${prefix}-palette-s`} />
                      <div className={`${prefix}-palette-b`} />
                      {value && (
                        <i
                          style={{
                            bottom: `calc(${b}% - 7px)`,
                            left: `calc(${s}% - 7px)`,
                            backgroundColor: value,
                          }}
                        />
                      )}
                    </div>
                    <div className={`${prefix}-slider-wrapper`}>
                      <span className={`${prefix}-slider-label`}>H</span>
                      <Slider
                        className={`${prefix}-slider ${prefix}-slider_h`}
                        inputVisible={false}
                        min={0}
                        max={359}
                        value={h}
                        onChange={(param) => {
                          if (param && !Array.isArray(param)) {
                            handleCustomChange("h", param)
                          }
                        }}
                      />
                    </div>
                    <div className={`${prefix}-slider-wrapper`}>
                      <span className={`${prefix}-slider-label`}>S</span>
                      <Slider
                        className={`${prefix}-slider ${prefix}-slider_s`}
                        inputVisible={false}
                        min={0}
                        max={100}
                        value={s}
                        onChange={(param) => {
                          if (param && !Array.isArray(param)) {
                            handleCustomChange("s", param)
                          }
                        }}
                        railStyle={{
                          backgroundImage: `linear-gradient(90deg, #fff 0%, transparent 100%)`,
                          backgroundColor: `hsl(${h}, 100%, 50%)`,
                        }}
                      />
                    </div>
                    <div className={`${prefix}-slider-wrapper`}>
                      <span className={`${prefix}-slider-label`}>B</span>
                      <Slider
                        className={`${prefix}-slider ${prefix}-slider_b`}
                        inputVisible={false}
                        min={0}
                        max={100}
                        value={b}
                        onChange={(param) => {
                          if (param && !Array.isArray(param)) {
                            handleCustomChange("b", param)
                          }
                        }}
                        railStyle={{
                          backgroundImage: `linear-gradient(90deg, #000 0%, transparent 100%)`,
                          backgroundColor: `hsl(${h}, 100%, 50%)`,
                        }}
                      />
                    </div>
                  </div>
                }
              />
            </div>
          }
          ref={triggerRef}
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisibleChange}
          {...popoverProps}
        >
          <Button
            className={`${prefix}-picker`}
            disabled={disabled}
            size={size}
          >
            <i
              style={{
                background: value === "transparent" ? TRANSPARENT_BG : value,
              }}
            />
          </Button>
        </Popover>
        {inputVisible && renderInput()}
      </div>
    )
  }
)

ColorPicker.displayName = "ColorPicker"

ColorPicker.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 默认的初始值 - 内部驱动
   */
  defaultValue: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 输入框是否显示
   */
  inputVisible: PropTypes.bool,
  /**
   * 值改变时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 在 visible 变为 false，以及 Input blur 时触发的 handler；
   * 这个 handler 非常特殊，为了配合特殊的 recentColors Prop 使用，请在这个事件触发的时候设置 recentColors。
   */
  onFinishChange: PropTypes.func,
  /**
   * 传入 Popover 的 props
   */
  popoverProps: PropTypes.object,
  /**
   * 弹出框内的结果区域是否显示
   */
  popupResultVisible: PropTypes.bool,
  /**
   * 最近使用的颜色，此功能非常特殊，需配合 onFinishChange 使用
   */
  recentColors: PropTypes.array,
  /**
   * 尺寸大小
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 开启透明色
   */
  transparentEnabled: PropTypes.bool,
  /**
   * 值 - 外部控制
   */
  value: PropTypes.string,
}

ColorPicker.defaultProps = {
  className: undefined,
  defaultValue: null,
  disabled: false,
  inputVisible: true,
  onChange: undefined,
  onFinishChange: undefined,
  popoverProps: {},
  popupResultVisible: true,
  recentColors: [],
  size: "small",
  transparentEnabled: false,
  value: null,
}

export default ColorPicker
