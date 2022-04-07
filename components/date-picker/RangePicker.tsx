/* eslint-disable import/no-duplicates */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import DPR from "day-picker-react"
import {
  CaptionElementProps,
  DateUtils,
  NavbarElementProps,
} from "day-picker-react"
import "./style"
import styles from "./classNames"
import { ConfigContext, getComputedSize } from "../config-provider"
import Icon from "../icon"
import Input from "../input"
import { Placement } from "../pop-trigger"
import Popover, { IPopoverProps } from "../popover"
import Caption from "./Caption"
import Navbar from "./Navbar"
import Shortcuts from "./Shortcuts"
import {
  MONTHS,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
  getDefaultMaxDate,
  getDefaultMinDate,
  isLegalDateRangeString,
  convertDateToString,
  convertDateRangeToString,
  isDayInRange,
} from "./core"

const DayPicker = DPR.__esModule ? DPR.default : DPR
const prefix = "adui-date"
const noop = () => {}

export interface IRangePickerProps {
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
   * 内部驱动：默认日期范围
   */
  defaultValue?: [Date | null | undefined, Date | null | undefined] | null
  /**
   * 内部驱动：默认是否显示下拉
   */
  defaultVisible?: boolean | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 禁止选择的天，day => bool；每一天是的时间为 12:00:00，这一个是由 day-picker-react 决定的；
   * 比较日期的时候小心这一点。
   */
  disabledDays?: (date: Date) => boolean | void
  /**
   * 自定义下拉框内容
   */
  dropdownRender?: (element: JSX.Element) => React.ReactNode
  /**
   * 20220407: 默认的日期时间为 12 点，可以使用此 Prop 修改小时
   */
  hour?: number
  /**
   * 设置输入框类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 最大限制日期
   */
  maxDate?: Date
  /**
   * 最小限制日期
   */
  minDate?: Date
  /**
   * 日期改变时的 handler
   */
  onChange?: (date: [Date | null | undefined, Date | null | undefined]) => void
  /**
   * 第二次点击了日期时的 handler，即结束选择
   */
  onEndDaySelect?: (date: Date) => void
  /**
   * 第一次点击了日期时的 handler，即开始选择（可以在此时设置 maxDate minDate，实现控制日期选择范围的功能）
   */
  onStartDaySelect?: (date: Date) => void
  /**
   * 显示状态发生变化时的handler
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * 占位字符
   */
  placeholder?: string
  /**
   * 弹出层位置
   */
  placement?: Placement
  /**
   * 传入 Popover 的 props
   */
  popoverProps?: IPopoverProps
  /**
   * 自定义如何渲染每个日期
   */
  renderDay?: (day: Date) => React.ReactNode
  /**
   * 快捷选择项，格式：
   * [{
   * label: "祖国母亲生日", value: [new Date("2022-10-01"), new Date("2022-10-07")]
   * }]
   */
  shortcuts?: {
    /**
     * 该项的文字
     */
    label: React.ReactNode
    /**
     * 该项的日期
     */
    value: [Date | null | undefined, Date | null | undefined]
  }[]
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 设置主题
   */
  theme?: null | "light"
  /**
   * 自定义触发下拉的元素
   */
  triggerElement?: JSX.Element
  /**
   * 外部控制：当前日期范围
   */
  value?: [Date | null | undefined, Date | null | undefined] | null
  /**
   * 外部控制：是否显示下拉选择
   */
  visible?: boolean | null
}

/**
 * 日期选择器用于了解当前已选日期，选择或输入需要的日期、日期范围等。
 */
const RangePicker: React.ForwardRefExoticComponent<
  IRangePickerProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      className,
      closeOnSelect,
      defaultValue,
      defaultVisible,
      disabled,
      disabledDays,
      dropdownRender,
      hour = 12,
      intent,
      maxDate,
      minDate,
      onChange,
      onEndDaySelect,
      onStartDaySelect,
      onVisibleChange,
      placeholder,
      placement,
      popoverProps,
      renderDay,
      shortcuts,
      size: sizeProp,
      theme,
      triggerElement,
      value: valueProp,
      visible: visibleProp,
      ...otherProps
    }: IRangePickerProps,
    ref
  ) => {
    /**
     * selectedDay 为传给 DayPicker 的最终 Date Object，
     * value 为 input 的输入 String。
     */
    const getInitialState = () => {
      let rangeValue = ""
      let from
      let to
      if (valueProp !== null && valueProp !== undefined) {
        ;[from, to] = valueProp
        rangeValue = convertDateRangeToString(valueProp)
      } else if (defaultValue !== null && defaultValue !== undefined) {
        ;[from, to] = defaultValue
        rangeValue = convertDateRangeToString(defaultValue)
      }

      return {
        from,
        month: from,
        rangeValue,
        to,
      }
    }

    const initialState = useMemo(getInitialState, [])

    const [enteredTo, setEnteredTo] = useState<Date | null | undefined>(null)
    const [from, setFrom] = useState<Date | null | undefined>(initialState.from)
    const [to, setTo] = useState<Date | null | undefined>(initialState.to)
    const [month, setMonth] = useState<Date | null | undefined>(
      initialState.month
    )
    const [prevValueProp, setPrevValueProp] =
      useState<
        [Date | null | undefined, Date | null | undefined] | null | undefined
      >(valueProp)
    const [rangeValue, setRangeValue] = useState<string>(
      initialState.rangeValue
    )
    const [visible, setVisible] = useState<boolean>(() => {
      if (visibleProp !== null && visibleProp !== undefined) {
        return visibleProp
      }
      if (defaultVisible !== null && defaultVisible !== undefined) {
        return defaultVisible
      }
      return false
    })

    // 相当于生命周期 getDerivedStateFromProps
    if (
      valueProp !== null &&
      valueProp !== undefined &&
      valueProp !== prevValueProp
    ) {
      setFrom(valueProp[0])
      setTo(valueProp[1])
      setRangeValue(convertDateRangeToString(valueProp))
      setPrevValueProp(valueProp)
    }
    if (visibleProp !== null && visible !== !!visibleProp) {
      setVisible(!!visibleProp)
    }

    const inputRef = useRef<any>(null)
    const dayPickerRef = useRef<any>(null)

    const { size: sizeContext } = useContext(ConfigContext)
    const size = getComputedSize(sizeProp, sizeContext)

    const classSet = classNames(
      className,
      `${prefix}-rangeBase`,
      `${prefix}-${size}`
    )

    let fromFinal: Date | null | undefined
    let enteredToFinal = to || enteredTo
    const isReverse =
      from && enteredToFinal && DateUtils.isDayAfter(from, enteredToFinal)
    if (isReverse) {
      fromFinal = enteredToFinal
      enteredToFinal = from
    } else {
      fromFinal = from
    }

    const selectedDays = [
      fromFinal,
      {
        from: fromFinal,
        to: enteredToFinal,
      },
    ]
    const modifiers = {
      [`${prefix}-rangeStart`]: isReverse ? to && fromFinal : fromFinal,
      [`${prefix}-rangeStartHover`]: isReverse && !to && fromFinal,
      [`${prefix}-rangeEnd`]: isReverse ? enteredToFinal : to && enteredToFinal,
      [`${prefix}-rangeEndHover`]: !isReverse && !to && enteredToFinal,
      [`${prefix}-selectedRange`]: (day: Date) =>
        isDayInRange(day, [fromFinal, enteredToFinal], true),
    }

    const shortcutsEnabled = shortcuts && shortcuts.length > 0

    const range: [Date | null | undefined, Date | null | undefined] = [
      fromFinal,
      enteredToFinal,
    ]

    const isDayDisabled = (day: Date) => {
      return disabledDays
        ? disabledDays(day) ||
            DateUtils.isDayBefore(day, minDate) ||
            DateUtils.isDayAfter(day, maxDate)
        : null
    }

    const handleVisibleChange = (bool: boolean) => {
      const { input: inputElement } = inputRef.current || {}
      if (disabled) {
        return
      }
      setTimeout(() => {
        const { activeElement } = document
        if (bool || (!bool && inputElement !== activeElement)) {
          const newVal = convertDateRangeToString([from, to])
          if (!bool) {
            if (!to) {
              if (newVal) {
                const rangeReset = rangeValue.split(" - ")
                setTimeout(() => {
                  setFrom(new Date(rangeReset[0]))
                  setTo(new Date(rangeReset[1]))
                }, 250)
              }
            } else if (rangeValue !== newVal) {
              setRangeValue(newVal)
            }
          }
          if (onVisibleChange) {
            onVisibleChange(bool)
          }
          if (visibleProp === null) {
            setVisible(bool)
          }
        }
      }, 0)
    }

    const isSelectingFirstDay = (
      fromArg?: Date | null,
      toArg?: Date | null
    ) => {
      const isRangeSelected = fromArg && toArg
      return !fromArg || isRangeSelected
    }

    const handleDayClick = (day: Date) => {
      day.setHours(hour, 0, 0, 0)
      if (
        DateUtils.isDayBefore(day, minDate) ||
        DateUtils.isDayAfter(day, maxDate)
      ) {
        return
      }
      if (isSelectingFirstDay(from, to)) {
        if (onStartDaySelect) {
          onStartDaySelect(day)
        }
        setEnteredTo(null)
        setFrom(day)
        setTo(null)
      } else {
        if (onEndDaySelect) {
          onEndDaySelect(day)
        }
        let newRange: [Date | null | undefined, Date | null | undefined]
        const fromStr = convertDateToString(from)
        const toStr = convertDateToString(day)
        let newRangeValue = ""
        if (DateUtils.isDayAfter(day, from)) {
          newRange = [from, day]
          newRangeValue = `${fromStr} - ${toStr}`
        } else {
          newRange = [day, from]
          newRangeValue = `${toStr} - ${fromStr}`
        }
        if (valueProp === null) {
          setEnteredTo(day)
          setRangeValue(newRangeValue)
          setTo(day)
        }
        if (onChange) {
          onChange(newRange)
        }
        if (closeOnSelect) {
          // 延迟是为了让状态的变化在视觉上先被接受
          setTimeout(() => {
            if (onVisibleChange) {
              onVisibleChange(false)
            }
            if (visibleProp === null) {
              setVisible(false)
            }
          }, 100)
        }
      }
    }

    const handleDayMouseEnter = (day: Date) => {
      if (!isSelectingFirstDay(from, to)) {
        setEnteredTo(day)
      }
    }

    const handleDayMouseLeave = () => {
      setEnteredTo(null)
    }

    const handleInputChange = ({
      target,
    }: React.ChangeEvent<HTMLInputElement>) => {
      const { value: val } = target
      setRangeValue(val)
      if (val.trim() === "") {
        if (valueProp === null) {
          setEnteredTo(null)
          setFrom(null)
          setTo(null)
        }
        if (onChange) {
          onChange([undefined, undefined])
        }
      } else if (isLegalDateRangeString(val)) {
        const rangeValueStrs = val.split(" - ")
        const newFrom = new Date(rangeValueStrs[0])
        const newTo = new Date(rangeValueStrs[1])
        newFrom.setHours(hour, 0, 0, 0)
        newTo.setHours(hour, 0, 0, 0)
        if (
          !isDayDisabled(newFrom) &&
          !isDayDisabled(newTo) &&
          !DateUtils.isDayBefore(newTo, newFrom) &&
          !(
            DateUtils.isSameDay(from, newFrom) && DateUtils.isSameDay(to, newTo)
          )
        ) {
          if (valueProp === null) {
            setFrom(newFrom)
            setTo(newTo)
          }
          // 修改日期后的 month 跳转
          if (!DateUtils.isSameDay(from, newFrom)) {
            setMonth(newFrom)
          } else if (!DateUtils.isSameDay(to, newTo)) {
            setMonth(newTo)
          }
          if (onChange) {
            onChange([newFrom, newTo])
          }
        }
      }
    }

    const handleInputFocus = () => {
      if (!visible) {
        if (onVisibleChange) {
          onVisibleChange(true)
        }
        if (visibleProp === null) {
          setVisible(true)
        }
        const { input: inputElement } = inputRef.current || {}
        // get input cursor position when focused
        setTimeout(() => {
          const { selectionStart } = inputElement
          // 小于 12 代表 focus 到的是 from date
          if (selectionStart < 12) {
            setMonth(from)
          } else if (to) {
            setMonth(new Date(to.getFullYear(), to.getMonth() - 1))
          }
        }, 0)
      }
    }

    const handleInputKeyDown = ({
      keyCode,
    }: React.KeyboardEvent<HTMLInputElement>) => {
      const keys = [9, 13, 27]
      if (keys.includes(keyCode)) {
        handleVisibleChange(false)
        inputRef.current?.input.blur()
      }
    }

    const handleMonthChange = (
      date: Date,
      e: React.FormEvent<HTMLSelectElement>
    ) => {
      if (e) {
        const { currentTarget: target } = e
        const targetRect = target && target.getBoundingClientRect()
        const dayPickerRect =
          dayPickerRef.current.dayPicker.getBoundingClientRect()

        if (
          target.name === "month" &&
          (targetRect.left - dayPickerRect.left) * 2 > dayPickerRect.width
        ) {
          date.setMonth(date.getMonth() - 1)
        }
      }
      let newMonth = date
      if (DateUtils.isDayAfter(date, maxDate)) {
        if (maxDate) {
          newMonth = maxDate
        }
      } else if (DateUtils.isDayBefore(date, minDate)) {
        if (minDate) {
          newMonth = minDate
        }
      }
      setMonth(newMonth)
    }

    useImperativeHandle(ref, () => ({
      input: inputRef.current,
      handleDayClick,
      handleVisibleChange,
    }))

    const popupElement = (
      <>
        {shortcutsEnabled && (
          <Shortcuts
            onShortcutClick={(valueShortcut) => {
              if (Array.isArray(valueShortcut)) {
                const fromShortcut = valueShortcut[0]
                const toShortcut = valueShortcut[1]
                setFrom(fromShortcut)
                setMonth(fromShortcut)
                setTo(toShortcut)
                setRangeValue(convertDateRangeToString(valueShortcut))

                if (onChange) {
                  onChange(valueShortcut)
                }

                if (closeOnSelect) {
                  // 延迟是为了让状态的变化在视觉上先被接受
                  setTimeout(() => {
                    setVisible(false)
                  }, 100)
                }
              }
            }}
            selectedDays={range}
            shortcuts={shortcuts}
          />
        )}
        <DayPicker
          ref={dayPickerRef}
          numberOfMonths={2}
          disabledDays={isDayDisabled}
          fromMonth={minDate}
          toMonth={maxDate}
          canChangeMonth
          classNames={styles}
          month={month}
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          selectedDays={selectedDays}
          navbarElement={
            <Navbar
              maxDate={maxDate}
              minDate={minDate}
              onManuallyChangeMonth={() => {
                setMonth(minDate)
              }}
              {...NavbarElementProps}
            />
          }
          captionElement={
            <Caption
              maxDate={maxDate}
              minDate={minDate}
              onDateChange={handleMonthChange}
              {...CaptionElementProps}
            />
          }
          onDayMouseEnter={handleDayMouseEnter}
          onDayMouseLeave={handleDayMouseLeave}
          onDayClick={handleDayClick}
          renderDay={(day: Date) => (
            <div className={`${prefix}-cell`}>
              {renderDay && renderDay(day) ? renderDay(day) : day.getDate()}
            </div>
          )}
          modifiers={modifiers}
        />
      </>
    )

    const inputElement = (
      <Input
        className={classSet}
        disabled={disabled}
        intent={intent}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleInputKeyDown}
        placeholder={placeholder}
        ref={inputRef}
        rightElement={<Icon icon="calendar-outlined" />}
        size={size}
        theme={theme}
        value={rangeValue}
        {...otherProps}
      />
    )

    return (
      <Popover
        arrowed={false}
        onVisibleChange={handleVisibleChange}
        placement={placement}
        popup={
          <div className={`${prefix}-popup`}>
            {dropdownRender && dropdownRender(popupElement)
              ? dropdownRender(popupElement)
              : popupElement}
          </div>
        }
        popupStyle={{
          width: shortcutsEnabled ? "576px" : "476px",
          maxWidth: shortcutsEnabled ? "576px" : "476px",
        }}
        trigger="click"
        visible={visible}
        {...popoverProps}
      >
        {triggerElement || inputElement}
      </Popover>
    )
  }
)

RangePicker.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否在选择后，消失 Popover
   */
  closeOnSelect: PropTypes.bool,
  /**
   * 内部驱动：默认日期范围
   */
  defaultValue: PropTypes.any,
  /**
   * 内部驱动：默认是否显示下拉
   */
  defaultVisible: PropTypes.bool,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 禁止选择的天，day => bool；每一天是的时间为 12:00:00，这一个是由 day-picker-react 决定的；
   * 比较日期的时候小心这一点。
   */
  disabledDays: PropTypes.func,
  /**
   * 自定义下拉框内容
   */
  dropdownRender: PropTypes.any,
  /**
   * 20220407: 默认的日期时间为 12 点，可以使用此 Prop 修改小时
   */
  hour: PropTypes.number,
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
   * 最大限制日期
   */
  maxDate: PropTypes.instanceOf(Date),
  /**
   * 最小限制日期
   */
  minDate: PropTypes.instanceOf(Date),
  /**
   * 日期改变时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 第二次点击了日期时的 handler，即结束选择
   */
  onEndDaySelect: PropTypes.func,
  /**
   * 第一次点击了日期时的 handler，即开始选择（可以在此时设置 maxDate minDate，实现控制日期选择范围的功能）
   */
  onStartDaySelect: PropTypes.func,
  /**
   * 显示状态发生变化时的handler
   */
  onVisibleChange: PropTypes.func,
  /**
   * 占位字符
   */
  placeholder: PropTypes.string,
  /**
   * 弹出层位置
   */
  placement: PropTypes.oneOf([
    "top",
    "left",
    "right",
    "bottom",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]),
  /**
   * 传入 Popover 的 props
   */
  popoverProps: PropTypes.object,
  /**
   * 自定义如何渲染每个日期
   */
  renderDay: PropTypes.any,
  /**
   * 快捷选择项，格式：
   * [{
   * label: "祖国母亲生日", value: [new Date("2022-10-01"), new Date("2022-10-07")]
   * }]
   */
  shortcuts: PropTypes.any,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 设置主题
   */
  theme: PropTypes.oneOf([null, "light"]),
  /**
   * 自定义触发下拉的元素
   */
  triggerElement: PropTypes.any,
  /**
   * 外部控制：当前日期范围
   */
  value: PropTypes.any,
  /**
   * 外部控制：是否显示下拉选择
   */
  visible: PropTypes.bool,
}

RangePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  defaultVisible: null,
  disabled: false,
  disabledDays: noop,
  dropdownRender: undefined,
  hour: 12,
  intent: "normal",
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
  onChange: noop,
  onEndDaySelect: noop,
  onStartDaySelect: noop,
  onVisibleChange: noop,
  placeholder: "选择日期范围",
  placement: "bottomLeft",
  popoverProps: {},
  renderDay: undefined,
  shortcuts: undefined,
  size: "small",
  theme: null,
  triggerElement: undefined,
  value: null,
  visible: null,
}

RangePicker.displayName = "RangePicker"

export default RangePicker
