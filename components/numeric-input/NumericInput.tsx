import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  memo,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Input, { IInputProps, IInputRef } from "../input"
import Icon from "../icon"
import "./style"
import { isLegal, stringToNumber, getDecimalNumber } from "./core"

const prefix = "adui-numeric-input"

export interface INumericInputProps
  extends Omit<IInputProps, "defaultValue" | "onChange" | "value"> {
  [key: string]: any
  /**
   * 默认的初始值 - 内部驱动
   */
  defaultValue?: number | null
  /**
   * 设置最大值
   */
  max?: number
  /**
   * 设置最小值
   */
  min?: number
  /**
   * 值改变时的 handler
   */
  onChange?: (value?: number) => void
  /**
   * 设置精度
   */
  precision?: number
  /**
   * 设置增加的幅度
   */
  step?: number
  /**
   * 值 - 外部控制
   */
  value?: number | null
}

/**
 * 数字输入框。
 */
const NumericInput: React.ForwardRefExoticComponent<
  INumericInputProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      className,
      defaultValue,
      disabled,
      max,
      min,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      precision: precisionProp,
      step,
      value: valueProp,
      ...otherProps
    }: INumericInputProps,
    ref
  ) => {
    const precision =
      precisionProp === undefined ? getDecimalNumber(step || 1) : precisionProp

    const [value, setValue] = useState<number | string>(() => {
      let valueState: React.ReactText | null | undefined =
        valueProp !== null ? valueProp : defaultValue
      if (typeof valueState !== "number") {
        valueState = ""
      }
      return valueState
    })
    const [inputValue, setInputValue] = useState<string>(
      typeof value === "number" ? value.toFixed(precision) : ""
    )
    const inputRef = useRef<IInputRef>(null)

    // 相当于生命周期 getDerivedStateFromProps
    if (valueProp !== null && value !== valueProp) {
      setValue(typeof valueProp === "number" ? valueProp : "")
      if (document.activeElement !== inputRef.current?.input) {
        setInputValue(
          typeof valueProp === "number" ? valueProp.toFixed(precision) : ""
        )
      }
    }

    useImperativeHandle(ref, () => ({
      current: inputRef.current,
    }))

    const handleValueStepChange = (
      type: "plus" | "minus",
      stp: number,
      inputVal?: string
    ) => {
      // 将 inputVal 转成数字，如果是空字符串，则认为从 0 开始加减
      const val = stringToNumber(inputVal)
      const decimal = getDecimalNumber(stp)
      if (type === "plus") {
        return (val * 10 ** decimal + stp * 10 ** decimal) / 10 ** decimal
      }
      return (val * 10 ** decimal - stp * 10 ** decimal) / 10 ** decimal
    }

    const handleButtonClick = (type: "plus" | "minus") => {
      let valueStepChanged = handleValueStepChange(type, step || 1, inputValue)
      if (min !== undefined && valueStepChanged < min) {
        valueStepChanged = min
      } else if (max !== undefined && valueStepChanged > max) {
        valueStepChanged = max
      }
      if (valueProp === null) {
        setValue(valueStepChanged)
        setInputValue(valueStepChanged.toFixed(precision))
      }
      if (onChange) {
        onChange(valueStepChanged)
      }
    }

    const handleInputChange = ({
      target: { value: val },
    }: React.ChangeEvent<HTMLInputElement>) => {
      if (isLegal(step || 1, val, min, max)) {
        if (valueProp === null) {
          setValue(stringToNumber(val))
        }
        if (onChange) {
          onChange(stringToNumber(val))
        }
      }
      if (valueProp === null) {
        setInputValue(val)
      }
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const {
        target: { value: val },
      } = e
      if (typeof value !== "number") {
        setInputValue("")
      } else {
        const valueFixed = value.toFixed(precision)
        if (!isLegal(step || 1, val, min, max) || val !== valueFixed) {
          setInputValue(valueFixed)
        }
      }
      if (onBlur) {
        onBlur(e)
      }
    }

    const handleMouseDown = (type: "plus" | "minus") => {
      handleButtonClick(type)
      setTimeout(() => {
        if (
          inputRef.current &&
          document.activeElement !== inputRef.current.input
        ) {
          const { input } = inputRef.current
          const end = input.value.length
          input.setSelectionRange(end, end)
          input.focus()
        }
      }, 100)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = e
      if (key === "ArrowUp") {
        e.preventDefault()
        e.stopPropagation()
        handleButtonClick("plus")
      }
      if (key === "ArrowDown") {
        e.preventDefault()
        e.stopPropagation()
        handleButtonClick("minus")
      }
    }

    return (
      <Input
        className={classNames(className, `${prefix}`, {
          [`${prefix}-disabled`]: disabled,
        })}
        cleaveOptions={{
          numeral: true,
          numeralDecimalScale: precision,
          delimiter: "",
        }}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        value={inputValue}
        ref={inputRef}
        rightElement={
          <div className={`${prefix}-buttons`}>
            <div
              className={`${prefix}-button`}
              onClick={() => handleMouseDown("plus")}
              role="none"
            >
              <Icon icon="arrow-up" interactive={!disabled} size={12} />
            </div>
            <div
              className={`${prefix}-button`}
              onClick={() => handleMouseDown("minus")}
              role="none"
            >
              <Icon icon="arrow-down" interactive={!disabled} size={12} />
            </div>
          </div>
        }
        {...otherProps}
      />
    )
  }
)

NumericInput.displayName = "NumericInput"

NumericInput.propTypes = {
  /**
   * 默认的初始值 - 内部驱动
   */
  defaultValue: PropTypes.number,
  /**
   * 设置最大值
   */
  max: PropTypes.number,
  /**
   * 设置最小值
   */
  min: PropTypes.number,
  /**
   * 值改变时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 设置精度
   */
  precision: PropTypes.number,
  /**
   * 增减的幅度
   */
  step: PropTypes.number,
  /**
   * 值 - 外部控制
   */
  value: PropTypes.number,
}

NumericInput.defaultProps = {
  defaultValue: null,
  max: undefined,
  min: undefined,
  onChange: () => {},
  precision: undefined,
  step: 1,
  value: null,
}

const MemoNumericInput = memo(
  NumericInput,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
)

MemoNumericInput.displayName = "NumericInput"

export default MemoNumericInput
