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
  transformTimeWithSeconds,
  extractHMSFromTime,
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
   * 禁止选择的秒
   */
  disabledSeconds?: (second?: string | null) => boolean | void
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
   * 20221216: 支持秒的选择
   */
  secondsAvailable?: boolean
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 外部控制：当前时间
   */
  value?: null | string
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
      disabledSeconds,
      maxTime,
      minTime,
      onChange,
      onlyHour,
      placeholder,
      popoverProps,
      secondsAvailable = false,
      size: sizeProp,
      value,
      ...otherProps
    }: ITimePickerProps,
    ref
  ) => {
    const getInitialState = () => {
      const valueState = value !== null ? value : defaultValue
      const { hour, minute, second } = extractHMSFromTime(valueState)
      return {
        hour,
        inputValue: valueState || "",
        minute: onlyHour ? "00" : minute,
        second: secondsAvailable ? second : "00",
        prevValueProp: valueState || "",
        visible: false,
      }
    }
    const initialState = useMemo(getInitialState, [])
    const [inputValue, setInputValue] = useState(initialState.inputValue)
    const [hour, setHour] = useState(initialState.hour)
    const [minute, setMinute] = useState(initialState.minute)
    const [second, setSecond] = useState(initialState.second)
    const [prevValueProp, setPrevValueProp] = useState(
      initialState.prevValueProp
    )
    const [visible, setVisible] = useState(initialState.visible)

    if (value !== null && prevValueProp !== value) {
      const {
        hour: newHour,
        minute: newMinute,
        second: newSecond,
      } = extractHMSFromTime(value)

      setInputValue(value || "")
      setHour(newHour)
      setMinute(onlyHour ? "00" : newMinute)
      setSecond(secondsAvailable ? newSecond : "00")
      setPrevValueProp(value || "")
    }

    const inputRef = useRef<any>(null)

    const { size: sizeContext } = useContext(ConfigContext)

    const size = getComputedSize(sizeProp, sizeContext)

    const handleClick = (valueNew: string, type: "hour" | "minute") => {
      const valueProp = value

      let inputValueNow = ""
      if (secondsAvailable) {
        if (type === "hour") {
          inputValueNow = `${valueNew}:${minute || ""}:${second || ""}`
        } else if (type === "minute") {
          inputValueNow = `${hour || ""}:${valueNew}:${second || ""}`
        } else {
          inputValueNow = `${hour || ""}:${minute || ""}:${valueNew}`
        }
      } else {
        inputValueNow =
          type === "hour"
            ? `${valueNew}:${minute || ""}`
            : `${hour || ""}:${valueNew}`
      }

      if (maxTime && isTimeAfter(inputValueNow, maxTime)) {
        inputValueNow = secondsAvailable
          ? transformTimeWithSeconds(maxTime)
          : maxTime
      } else if (minTime && isTimeBefore(inputValueNow, minTime)) {
        inputValueNow = secondsAvailable
          ? transformTimeWithSeconds(minTime)
          : minTime
      }

      if (valueProp === null) {
        const valueFinal = {
          inputValueNow,
          ...extractHMSFromTime(inputValueNow),
        }
        setHour(valueFinal.hour)
        setMinute(valueFinal.minute)
        setSecond(valueFinal.second)
        setInputValue(valueFinal.inputValueNow)
      }

      if (isLegalTimeString({ time: inputValue, onlyHour })) {
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
          const withSeconds =
            hour && minute && second ? `${hour}:${minute}:${second}` : ""
          const noSeconds = hour && minute ? `${hour}:${minute}` : ""
          const newInputValue = secondsAvailable ? withSeconds : noSeconds
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
        (isLegalTimeString({
          time: inputValueNew,
          onlyHour,
        }) &&
          !isTimeAfter(inputValueNew, maxTime) &&
          !isTimeBefore(inputValueNew, minTime))
      ) {
        const {
          hour: hourNew,
          minute: minuteNew,
          second: secondNew,
        } = extractHMSFromTime(inputValueNew)
        if (
          !(disabledHours && disabledHours(hourNew)) &&
          !(disabledMinutes && disabledMinutes(minuteNew)) &&
          !(disabledSeconds && disabledSeconds(secondNew))
        ) {
          if (onChange) {
            onChange(inputValueNew)
          }
          if (value === null) {
            setHour(hourNew)
            setMinute(onlyHour ? "00" : minuteNew)
            setSecond(secondsAvailable ? secondNew : "00")
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
      key,
    }: React.KeyboardEvent<HTMLInputElement>) => {
      const keys = ["Tab", "Escape", "Enter"]
      if (keys.includes(key)) {
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
      `${prefix}-${size}`,
      {
        [`${prefix}-secondsAvailable`]: secondsAvailable,
      }
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
            {secondsAvailable && (
              <TimeSelect
                disabledSeconds={disabledSeconds}
                onChange={handleClick}
                currentHour={hour ? parseInt(hour, 10) : null}
                currentMinute={minute ? parseInt(minute, 10) : null}
                maxTime={maxTime}
                minTime={minTime}
                selectedValue={second}
                size={size}
                type="second"
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
            blocks: secondsAvailable ? [2, 2, 2] : [2, 2],
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
   * 禁止选择的秒
   */
  disabledSeconds: PropTypes.func,
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
  disabledSeconds: noop,
  intent: "normal",
  maxTime: "24:00",
  minTime: null,
  onChange: noop,
  onlyHour: false,
  placeholder: "请选择",
  secondsAvailable: false,
  size: "small",
  value: null,
}

export default TimePicker
