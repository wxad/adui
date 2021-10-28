import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
  useMemo,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext, getComputedSize } from "../config-provider"
import Icon from "../icon"
import Input from "../input"
import Popover, { IPopoverProps } from "../popover"
import TimeSelect from "./TimeSelect"
import "./style"
import {
  extractHourAndMinuteFromTime,
  isLegalTimeString,
  isTimeAfter,
  isTimeBefore,
} from "./core"

const prefix = "adui-time"
const noop = () => {}

export interface ITimePickerProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否在选择后，消失 Popover
   */
  closeOnSelect?: boolean
  /**
   * 内部驱动，默认选择时间
   */
  defaultValue?: null | string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 禁止选择的小时
   */
  disabledHours?: (hour?: string | null) => boolean | void
  /**
   * 禁止选择的分钟
   */
  disabledMinutes?: (minute?: string | null) => boolean | void
  /**
   * 设置输入框类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 可选时间的最大值
   */
  maxTime?: string | null
  /**
   * 可选时间的最小值
   */
  minTime?: string | null
  /**
   * 时间改变的 handler
   */
  onChange?: (value: string) => void
  /**
   * 判断是否是整数
   */
  onlyHour?: boolean
  /**
   * 占位字符
   */
  placeholder?: string
  /**
   * 传入 Popover 的 props
   */
  popoverProps?: IPopoverProps
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 外部控制：当前时间
   */
  value?: null | string
}

export interface ITimePickerState {
  hour: string | null
  minute: string | null
  inputValue?: string | null
  visible: boolean
  prevValueProp: null | string
}

/**
 * 时间选择器用于了解当前已选时间，选择或输入需要的时间、时间范围等。
 */
const TimePicker: React.ForwardRefExoticComponent<
  ITimePickerProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      className,
      closeOnSelect,
      defaultValue,
      disabled,
      disabledHours,
      disabledMinutes,
      intent,
      maxTime,
      minTime,
      onChange,
      onlyHour,
      placeholder,
      popoverProps,
      size: sizeProp,
      value,
      ...otherProps
    }: ITimePickerProps,
    ref
  ) => {
    const getInitialState = () => {
      const valueState = value !== null ? value : defaultValue
      const { hour, minute } = extractHourAndMinuteFromTime(valueState)
      return {
        hour,
        inputValue: valueState || "",
        minute: onlyHour ? "00" : minute,
        prevValueProp: valueState || "",
        visible: false,
      }
    }
    const initialState = useMemo(getInitialState, [])
    const [hour, setHour] = useState(initialState.hour)
    const [inputValue, setInputValue] = useState(initialState.inputValue)
    const [minute, setMinute] = useState(initialState.minute)
    const [prevValueProp, setPrevValueProp] = useState(
      initialState.prevValueProp
    )
    const [visible, setVisible] = useState(initialState.visible)

    if (value !== null && prevValueProp !== value) {
      const { hour: newHour, minute: newMinute } =
        extractHourAndMinuteFromTime(value)
      setHour(newHour)
      setInputValue(value || "")
      setMinute(onlyHour ? "00" : newMinute)
      setPrevValueProp(value || "")
    }

    const inputRef = useRef<any>(null)

    const { size: sizeContext } = useContext(ConfigContext)

    const size = getComputedSize(sizeProp, sizeContext)

    const handleClick = (valueNew: string, type: "hour" | "minute") => {
      const valueProp = value

      let inputValueNow =
        type === "hour"
          ? `${valueNew}:${minute || ""}`
          : `${hour || ""}:${valueNew}`

      if (maxTime && isTimeAfter(inputValueNow, maxTime)) {
        inputValueNow = maxTime
      } else if (minTime && isTimeBefore(inputValueNow, minTime)) {
        inputValueNow = minTime
      }
      if (valueProp === null) {
        const valueFinal = {
          inputValueNow,
          ...extractHourAndMinuteFromTime(inputValueNow),
        }
        setHour(valueFinal.hour)
        setMinute(valueFinal.minute)
        setInputValue(valueFinal.inputValueNow)
      }
      if (isLegalTimeString(inputValue, onlyHour)) {
        if (onChange) {
          onChange(inputValueNow)
        }
        if (closeOnSelect) {
          setTimeout(() => {
            setVisible(false)
          }, 120)
        }
      }
    }

    const handleVisibleChange = (visibleNew: boolean) => {
      const { input: inputElement } = inputRef.current
      if (disabled) {
        return
      }
      setTimeout(() => {
        const { activeElement } = document
        if (visibleNew || (!visibleNew && inputElement !== activeElement)) {
          const newInputValue = hour && minute ? `${hour}:${minute}` : ""
          if (!visibleNew && inputValue !== newInputValue) {
            setInputValue(newInputValue)
          }
          setVisible(visibleNew)
        }
      }, 0)
    }

    const handleInputChange = ({
      target: { value: inputValueNew },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(inputValueNew)
      if (
        inputValueNew === "" ||
        (isLegalTimeString(inputValueNew, onlyHour) &&
          !isTimeAfter(inputValueNew, maxTime) &&
          !isTimeBefore(inputValueNew, minTime))
      ) {
        const { hour: hourNew, minute: minuteNew } =
          extractHourAndMinuteFromTime(inputValueNew)
        if (
          !(disabledHours && disabledHours(hourNew)) &&
          !(disabledMinutes && disabledMinutes(minuteNew))
        ) {
          if (onChange) {
            onChange(inputValueNew)
          }
          if (value === null) {
            setHour(hourNew)
            setMinute(onlyHour ? "00" : minuteNew)
          }
        }
      }
    }

    const handleInputFocus = () => {
      if (!visible) {
        setVisible(true)
      }
    }

    const handleInputKeyDown = ({
      keyCode,
    }: React.KeyboardEvent<HTMLInputElement>) => {
      const keys = [9, 13, 27]
      if (keys.includes(keyCode)) {
        setVisible(false)
        inputRef.current.input.blur()
      }
    }

    useImperativeHandle(ref, () => ({
      input: inputRef.current,
      handleVisibleChange,
    }))

    const classSet = classNames(
      className,
      `${prefix}-input`,
      `${prefix}-${size}`
    )

    return (
      <Popover
        arrowed={false}
        onVisibleChange={handleVisibleChange}
        popup={
          <div>
            <TimeSelect
              onChange={handleClick}
              currentHour={hour ? parseInt(hour, 10) : null}
              disabledHours={disabledHours}
              maxTime={maxTime}
              minTime={minTime}
              onlyHour={onlyHour}
              selectedValue={hour}
              size={size}
              type="hour"
            />
            {!onlyHour && (
              <TimeSelect
                disabledMinutes={disabledMinutes}
                onChange={handleClick}
                currentHour={hour ? parseInt(hour, 10) : null}
                maxTime={maxTime}
                minTime={minTime}
                selectedValue={minute}
                size={size}
                type="minute"
              />
            )}
          </div>
        }
        trigger="click"
        visible={visible}
        {...popoverProps}
      >
        <Input
          className={classSet}
          cleaveOptions={{
            blocks: [2, 2],
            delimiter: ":",
          }}
          disabled={disabled}
          rightElement={<Icon icon="time-outlined" />}
          size={size}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
          ref={inputRef}
          {...otherProps}
        />
      </Popover>
    )
  }
)

TimePicker.displayName = "TimePicker"

TimePicker.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否在选择后，消失 Popover
   */
  closeOnSelect: PropTypes.bool,
  /**
   * 内部驱动，默认选择时间
   */
  defaultValue: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 禁止选择的小时
   */
  disabledHours: PropTypes.func,
  /**
   * 禁止选择的分钟
   */
  disabledMinutes: PropTypes.func,
  /**
   * 设置输入框类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 可选时间的最大值
   */
  maxTime: PropTypes.string,
  /**
   * 可选时间的最小值
   */
  minTime: PropTypes.string,
  /**
   * 时间改变的 handler
   */
  onChange: PropTypes.func,
  /**
   * 判断是否是整数
   */
  onlyHour: PropTypes.bool,
  /**
   * 占位字符
   */
  placeholder: PropTypes.string,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 外部控制：当前时间
   */
  value: PropTypes.string,
}

TimePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  disabled: false,
  disabledHours: noop,
  disabledMinutes: noop,
  intent: "normal",
  maxTime: "24:00",
  minTime: null,
  onChange: noop,
  onlyHour: false,
  placeholder: "请选择",
  size: "small",
  value: null,
}

export default TimePicker
