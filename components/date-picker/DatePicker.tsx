/* eslint-disable import/no-duplicates */
/* eslint-disable no-underscore-dangle */
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
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
import RangePicker from "./RangePicker"
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
  isLegalDateString,
  convertDateToString,
} from "./core"

const DayPicker = DPR.__esModule ? DPR.default : DPR
const prefix = "adui-date"
const noop = () => {}

export interface IDatePickerProps {
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
   * 内部驱动：默认日期
   */
  defaultValue?: Date | "" | null
  /**
   * 内部驱动：默认是否显示下拉
   */
  defaultVisible?: boolean | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 禁止选择的天，day => bool，每一天是的时间为 12:00:00，这一个是由 day-picker-react 决定的；
   * 比较日期的时候小心这一点。
   */
  disabledDays?: (date: Date) => boolean | void
  /**
   * 设置输入框类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 最大限制日期
   */
  maxDate?: Date | null
  /**
   * 最小限制日期
   */
  minDate?: Date | null
  /**
   * 日期改变时的 handler
   */
  onChange?: (date?: Date | "" | null) => void
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
   * 快捷选择项，格式：[{ label: "祖国生日", value: new Date("2020-10-01") }]
   */
  shortcuts?: {
    /**
     * 该项的文字
     */
    label: React.ReactNode
    /**
     * 该项的日期
     */
    value: Date
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
   * 外部控制：当前日期
   */
  value?: Date | "" | null
  /**
   * 外部控制：是否显示下拉选择
   */
  visible?: boolean | null
}

export interface IDatePicker
  extends React.ForwardRefExoticComponent<
    IDatePickerProps & React.RefAttributes<any>
  > {
  RangePicker: typeof RangePicker
}

/**
 * 日期选择器用于了解当前已选日期，选择或输入需要的日期、日期范围等。
 */
// @ts-ignore
const DatePicker: IDatePicker = forwardRef(
  (
    {
      className,
      closeOnSelect,
      defaultValue,
      defaultVisible,
      disabled,
      disabledDays,
      intent,
      maxDate,
      minDate,
      onChange,
      onVisibleChange,
      placeholder,
      placement,
      popoverProps,
      renderDay,
      shortcuts,
      size: sizeProp,
      theme,
      value: valueProp,
      visible: visibleProp,
      ...otherProps
    }: IDatePickerProps,
    ref
  ) => {
    const [month, setMonth] = useState<Date | "" | undefined>(() => {
      if (valueProp !== null) {
        return valueProp
      }
      if (defaultValue !== null) {
        return defaultValue
      }
      return undefined
    })
    const [selectedDay, setSelectedDay] = useState<
      Date | "" | null | undefined
    >(() => {
      if (valueProp !== null) {
        return valueProp
      }
      if (defaultValue !== null) {
        return defaultValue
      }
      return undefined
    })
    const [value, setValue] = useState<string>(() => {
      if (valueProp !== null) {
        return convertDateToString(valueProp)
      }
      if (defaultValue !== null) {
        return convertDateToString(defaultValue)
      }
      return ""
    })
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
    if (valueProp !== null && selectedDay !== valueProp) {
      setMonth(valueProp)
      setSelectedDay(valueProp)
      setValue(convertDateToString(valueProp))
    }
    if (visibleProp !== null && visible !== !!visibleProp) {
      setVisible(!!visibleProp)
    }

    const inputRef = useRef<any>(null)

    const { size: sizeContext } = useContext(ConfigContext)
    const size = getComputedSize(sizeProp, sizeContext)

    const classSet = classNames(
      className,
      `${prefix}-dateBase`,
      `${prefix}-${size}`
    )

    const shortcutsEnabled = shortcuts && shortcuts.length > 0

    const isDayDisabled = (day: Date) => {
      return (
        (disabledDays && disabledDays(day)) ||
        DateUtils.isDayBefore(day, minDate) ||
        DateUtils.isDayAfter(day, maxDate)
      )
    }

    const handleVisibleChange = (bool: boolean) => {
      const { input: inputElement } = inputRef.current
      if (disabled) {
        return
      }
      setTimeout(() => {
        const { activeElement } = document
        if (bool || (!bool && inputElement !== activeElement)) {
          const newVal = convertDateToString(selectedDay)
          if (!bool && value !== newVal) {
            setValue(newVal)
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

    const handleDayClick = (
      selectedDayNew: Date,
      { disabled: bool }: { [key: string]: any }
    ) => {
      if (!bool) {
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

        if (!DateUtils.isSameDay(selectedDayNew, selectedDay)) {
          if (valueProp === null) {
            setSelectedDay(selectedDayNew)
            setValue(convertDateToString(selectedDayNew))
          }
          if (onChange) {
            onChange(selectedDayNew)
          }
        }
      }
    }

    const handleInputChange = ({
      target: { value: val },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(val)
      if (val.trim() === "") {
        if (valueProp === null) {
          setSelectedDay(null)
        }
        if (onChange) {
          onChange("")
        }
      } else if (isLegalDateString(val)) {
        const newDate = new Date(val)
        if (
          !isDayDisabled(newDate) &&
          !DateUtils.isSameDay(newDate, selectedDay)
        ) {
          if (valueProp === null) {
            setSelectedDay(newDate)
            setValue(convertDateToString(newDate))
            if (!DateUtils.isSameMonth(newDate, selectedDay)) {
              setMonth(newDate)
            }
          }
          if (onChange) {
            onChange(newDate)
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
      }
    }

    const handleInputKeyDown = ({
      keyCode,
    }: React.KeyboardEvent<HTMLInputElement>) => {
      const keys = [9, 13, 27]
      if (keys.includes(keyCode)) {
        handleVisibleChange(false)
        inputRef.current.input.blur()
      }
    }

    const handleMonthChange = (date: Date) => {
      const newDate = date
      if (minDate && DateUtils.isDayBefore(date, minDate)) {
        newDate.setMonth(minDate.getMonth())
      } else if (maxDate && DateUtils.isDayAfter(date, maxDate)) {
        newDate.setMonth(maxDate.getMonth())
      }
      setMonth(newDate)
    }

    useImperativeHandle(ref, () => ({
      input: inputRef.current,
      handleDayClick,
      handleVisibleChange,
    }))

    return (
      <Popover
        arrowed={false}
        onVisibleChange={handleVisibleChange}
        placement={placement}
        popup={
          <div className={`${prefix}-popup`}>
            {shortcutsEnabled && (
              <Shortcuts
                onShortcutClick={(valueShortcut: Date) => {
                  handleDayClick(valueShortcut, {})
                  setMonth(valueShortcut)
                }}
                selectedDay={selectedDay}
                shortcuts={shortcuts}
              />
            )}
            <DayPicker
              disabledDays={isDayDisabled}
              fromMonth={minDate}
              toMonth={maxDate}
              canChangeMonth
              classNames={styles}
              month={month || undefined}
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              selectedDays={selectedDay || undefined}
              navbarElement={
                <Navbar
                  maxDate={maxDate}
                  minDate={minDate}
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
              onDayClick={handleDayClick}
              onMonthChange={handleMonthChange}
              renderDay={(day: Date) => (
                <div className={`${prefix}-cell`}>
                  {renderDay && renderDay(day) ? renderDay(day) : day.getDate()}
                </div>
              )}
            />
          </div>
        }
        popupStyle={{
          maxWidth: shortcutsEnabled ? "342px" : "242px",
          width: shortcutsEnabled ? "342px" : "242px",
        }}
        trigger="click"
        visible={visible}
        {...popoverProps}
      >
        <Input
          className={classSet}
          cleaveOptions={{
            blocks: [4, 2, 2],
            delimiter: "-",
          }}
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
          value={value}
          {...otherProps}
        />
      </Popover>
    )
  }
)

DatePicker.displayName = "DatePicker"

DatePicker.RangePicker = RangePicker

DatePicker.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否在选择后，消失 Popover
   */
  closeOnSelect: PropTypes.bool,
  /**
   * 内部驱动：默认日期
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
   * 禁止选择的天，day => bool，每一天是的时间为 12:00:00，这一个是由 day-picker-react 决定的；
   * 比较日期的时候小心这一点。
   */
  disabledDays: PropTypes.func,
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
   * 快捷选择项，格式：[{ label: "祖国生日", value: new Date("2020-10-01") }]
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
   * 外部控制：当前日期
   */
  value: PropTypes.any,
  /**
   * 外部控制：是否显示下拉选择
   */
  visible: PropTypes.bool,
}

DatePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  defaultVisible: null,
  disabled: false,
  disabledDays: noop,
  intent: "normal",
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
  onChange: noop,
  onVisibleChange: noop,
  placeholder: "选择日期",
  placement: "bottomLeft",
  popoverProps: {},
  renderDay: undefined,
  shortcuts: undefined,
  size: "small",
  theme: null,
  value: null,
  visible: null,
}

export default DatePicker
