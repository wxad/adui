import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import RcHandle from "rc-slider/lib/Handle"
import RcRange from "rc-slider/lib/Range"
import RcSlider from "rc-slider/lib/Slider"
import NumericInput from "../numeric-input"
import Tooltip, { ITooltipProps } from "../tooltip"
import "./style"

const noop = () => {}

const prefix = "adui-slider"

interface IHandleGeneratorInfo {
  [key: string]: any
  dragging: boolean
  index: number
  value: number
}

interface IValue {
  defaultValue?: SliderValue
  value?: SliderValue
}

interface INumericInputValue {
  defaultValue?: number | undefined | null
  value?: number | undefined | null
}

export interface ISliderMarks {
  [key: number]:
    | React.ReactNode
    | {
        style: React.CSSProperties
        label: React.ReactNode
      }
}

export type SliderValue = number | [number, number] | undefined | null

export type ChangeHandler = (value: SliderValue) => void

export interface ISliderProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 初始的默认值
   */
  defaultValue?: SliderValue
  /**
   * 是否支持输入框，此 prop 与双滑块模式互斥
   */
  inputVisible?: boolean
  /**
   * 刻度标记，例如：{25: "25%", 50: "50℃"}
   */
  marks?: ISliderMarks
  /**
   * 最大值
   */
  max?: number
  /**
   * 最小值
   */
  min?: number
  /**
   * 在 `onmouseup` 时触发的 handler
   */
  onAfterChange?: ChangeHandler
  /**
   * 在 `onmousedown` 时触发的 handler
   */
  onBeforeChange?: ChangeHandler
  /**
   * 在值发生变化时触发的 handler
   */
  onChange?: ChangeHandler
  /**
   * 双滑块模式
   */
  range?: boolean
  /**
   * 步长，必须大于 0
   */
  step?: number
  /**
   * 附加样式
   */
  style?: React.CSSProperties
  /**
   * 对于 Tooltip 内容进行编辑，如：tipFormatter={value => `${value}元`}
   */
  tipFormatter?: null | ((value: number) => React.ReactNode)
  /**
   * 开启 tipFormatter 后，对于 Tooltip 的 props
   */
  tooltipProps?: ITooltipProps
  /**
   * 设置当前的值
   */
  value?: SliderValue
}

/**
 * 滑动条用于以拖拽的方式，更人性化地完成输入数据、选择数据区间等目的。
 */
const Slider: React.FunctionComponent<ISliderProps> = ({
  className,
  defaultValue,
  inputVisible,
  marks,
  max,
  min,
  onAfterChange,
  onBeforeChange,
  onChange,
  range,
  step,
  style,
  tipFormatter,
  tooltipProps,
  value: valueProp,
  ...otherProps
}: ISliderProps) => {
  const [active, setActive] = useState(false)
  const [tooltipVisibleArray, setTooltipVisibleArray] = useState<{
    [index: number]: boolean
  }>([])
  /**
   * 初始化 Slider 的值
   * 1. 优先判断 Prop value，如果存在 Prop value，则 Slider 完全交由外部控制，内部状态无效；
   * 2. 再判断 Prop defaultValue，如果存在默认值，则 Slider 值为此默认值。
   */
  const [value, setValue] = useState(
    (): SliderValue => {
      let val
      if (valueProp !== null) {
        val = valueProp
      } else if (defaultValue !== null) {
        val = defaultValue
      }
      if (val === undefined) {
        return val
      }
      return range ? val : Number(val)
    }
  )

  // 相当于生命周期 getDerivedStateFromProps
  if (
    valueProp !== null &&
    valueProp !== undefined &&
    (typeof valueProp === "object" || !isNaN(valueProp)) &&
    valueProp !== value
  ) {
    setValue(range ? valueProp : Number(valueProp))
  }

  const valuePropsObject: IValue = {}
  const numericInputPropsObject: INumericInputValue = {}

  if (defaultValue !== null) {
    valuePropsObject.defaultValue = defaultValue
  }
  if (value !== null) {
    valuePropsObject.value = value
  }

  if (defaultValue !== null && !Array.isArray(defaultValue)) {
    numericInputPropsObject.defaultValue = defaultValue
  }
  if (value !== null && !Array.isArray(value)) {
    numericInputPropsObject.value = value
  }

  const classSet = classNames(className, `${prefix}-wrapper`, {
    [`${prefix}-active`]: active,
    [`${prefix}-hasMarks`]: marks && Object.keys(marks).length,
  })

  const stepString = step ? step.toString() : "1"
  let precision = 0
  if (stepString.includes(".")) {
    precision = stepString.length - stepString.indexOf(".") - 1
  }

  const setTooltipVisible = (index: number, bool: boolean) => {
    setTooltipVisibleArray({
      ...tooltipVisibleArray,
      [index]: bool,
    })
  }

  const handleWithTooltip = ({
    dragging,
    index,
    value: val,
    ...restProps
  }: IHandleGeneratorInfo) => {
    if (tipFormatter) {
      return (
        <Tooltip
          key={index}
          popup={tipFormatter(val)}
          placement={(tooltipProps && tooltipProps.placement) || "top"}
          visible={tooltipVisibleArray[index] || dragging}
        >
          <RcHandle
            value={val}
            onMouseEnter={() => setTooltipVisible(index, true)}
            onMouseLeave={() => setTooltipVisible(index, false)}
            {...restProps}
          />
        </Tooltip>
      )
    }

    return <RcHandle key={index} value={val} {...restProps} />
  }

  const handleBeforeChange = (val: SliderValue) => {
    setActive(true)
    // 拖拽开始，此时保证过程中鼠标移动到哪里手势都不变
    document.documentElement.style.cursor = "pointer"
    if (onBeforeChange) {
      onBeforeChange(val)
    }
  }

  const handleAfterChange = (val: SliderValue) => {
    setActive(false)
    // 拖拽结束，样式重置
    document.documentElement.style.cursor = ""
    if (onAfterChange) {
      onAfterChange(val)
    }
  }

  const checkValueIsValid = (val: SliderValue) => {
    return (
      val !== value &&
      val !== null &&
      val !== undefined &&
      min !== undefined &&
      max !== undefined &&
      val >= min &&
      val <= max
    )
  }

  const handleChange = (val: SliderValue) => {
    const newValue = range ? val : Number(val)
    if (range || checkValueIsValid(newValue)) {
      if (valueProp === null) {
        setValue(newValue)
      }
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  const sliderProps = {
    handle: (info: IHandleGeneratorInfo) => handleWithTooltip(info),
    marks,
    min,
    max,
    onAfterChange: handleAfterChange,
    onBeforeChange: handleBeforeChange,
    onChange: handleChange,
    prefixCls: prefix,
    step,
    ...valuePropsObject,
    ...otherProps,
  }

  const slider = range ? (
    <RcRange {...sliderProps} />
  ) : (
    <RcSlider {...sliderProps} />
  )

  return (
    <div className={classSet} style={style}>
      {slider}
      {inputVisible && !range && (
        <NumericInput
          placeholder=""
          precision={precision}
          onChange={val => {
            handleChange(typeof val === "string" ? 0 : val)
          }}
          step={step}
          style={{
            marginLeft: "12px",
            width: "56px",
            height: "22px",
          }}
          {...numericInputPropsObject}
          {...otherProps}
        />
      )}
    </div>
  )
}

Slider.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 初始的默认值
   */
  defaultValue: PropTypes.any,
  /**
   * 是否支持输入框，此 prop 与双滑块模式互斥
   */
  inputVisible: PropTypes.bool,
  /**
   * 刻度标记，例如：{25: "25%", 50: "50℃"}
   */
  marks: PropTypes.any,
  /**
   * 最大值
   */
  max: PropTypes.number,
  /**
   * 最小值
   */
  min: PropTypes.number,
  /**
   * 在 `onmouseup` 时触发的 handler
   */
  onAfterChange: PropTypes.func,
  /**
   * 在 `onmousedown` 时触发的 handler
   */
  onBeforeChange: PropTypes.func,
  /**
   * 在值发生变化时触发的 handler
   */
  onChange: PropTypes.func,
  /**
   * 双滑块模式
   */
  range: PropTypes.bool,
  /**
   * 步长，必须大于 0
   */
  step: PropTypes.number,
  /**
   * 附加样式
   */
  style: PropTypes.object,
  /**
   * 对于 Tooltip 内容进行编辑，如：tipFormatter={value => `${value}元`}
   */
  tipFormatter: PropTypes.func,
  /**
   * 开启 tipFormatter 后，对于 Tooltip 的 props
   */
  tooltipProps: PropTypes.object,
  /**
   * 设置当前的值
   */
  value: PropTypes.any,
}

Slider.defaultProps = {
  className: undefined,
  defaultValue: null,
  inputVisible: true,
  marks: {},
  max: 100,
  min: 0,
  onAfterChange: noop,
  onBeforeChange: noop,
  onChange: noop,
  range: false,
  step: 1,
  style: {},
  tipFormatter: null,
  tooltipProps: {},
  value: null,
}

export default Slider
