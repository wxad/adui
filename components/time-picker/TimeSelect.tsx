/* eslint-disable max-len */
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useEffect,
  memo,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { getRequestAnimationFrame } from "../_util/raf"
import "./style"
import { extractHourAndMinuteFromTime, hours, minutes } from "./core"
import { ConfigContext, getComputedSize } from "../config-provider"

const prefix = "adui-time"
const noop = () => {}

export interface ITimeSelectProps {
  [key: string]: any
  currentHour?: number | null
  disabledHours?: (hour?: string | null) => boolean | void
  disabledMinutes?: (minute?: string | null) => boolean | void
  maxTime?: string | null
  minTime?: string | null
  onChange: (value: string, type: "hour" | "minute") => void
  onlyHour?: boolean
  size?: "mini" | "small" | "medium" | "large"
  selectedValue?: null | string
  type: "hour" | "minute"
}

const scrollTo = (element: HTMLDivElement, to: number, duration: number) => {
  const reqAnimFrame = getRequestAnimationFrame()

  if (duration <= 0) {
    element.scrollTop = to
    return
  }
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10

  reqAnimFrame(() => {
    element.scrollTop += perTick
    if (element.scrollTop === to) {
      return
    }
    scrollTo(element, to, duration - 10)
  })
}

const TimeSelect: React.ForwardRefExoticComponent<
  ITimeSelectProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      currentHour,
      disabledHours,
      disabledMinutes,
      maxTime,
      minTime,
      onChange,
      onlyHour,
      size,
      selectedValue,
      type,
      ...otherProps
    }: ITimeSelectProps,
    ref
  ) => {
    const selectRef = useRef<any>(null)
    useImperativeHandle(ref, () => ({
      select: selectRef,
    }))

    const handleClick = (item: string) => {
      onChange(item, type)
    }

    const { size: sizeContext } = useContext(ConfigContext)

    const isDisabled = (
      value: number,
      minHour: number,
      minMinute: number,
      maxHour: number,
      maxMinute: number,
      isOnlyHour?: boolean
    ) => {
      if (type === "hour") {
        // 这里要注意把整点选择 24:00 的情况特殊处理
        return (
          value < minHour ||
          value > (isOnlyHour && !maxTime ? "24:00" : maxHour)
        )
      }
      // 在同一个小时内
      if (minHour === maxHour) {
        return value < minMinute || value > maxMinute
      }
      // 在最小的小时内时，这时候要把 minMinute 以下的 disabled
      if (minHour === currentHour) {
        return value < minMinute
      }
      // 在最大的小时内时，这时候要把 maxMinute 以上的 disabled
      if (maxHour === currentHour) {
        return value > maxMinute
      }

      return false
    }

    const updateScrollTop = (duration: number) => {
      if (selectRef?.current) {
        const activeItem: Partial<HTMLDivElement> =
          selectRef.current.getElementsByClassName(`${prefix}-active`)[0]
        if (activeItem) {
          const { offsetTop } = activeItem
          if (offsetTop !== undefined) {
            if (duration) {
              scrollTo(selectRef.current, offsetTop, duration)
            } else {
              selectRef.current.scrollTop = offsetTop
            }
          }
        }
      }
    }

    useEffect(() => {
      updateScrollTop(0)
    }, [])

    useEffect(() => {
      updateScrollTop(120)
    }, [selectedValue])

    const classSet = classNames(
      `${prefix}-timeSelect`,
      `${prefix}-${getComputedSize(size, sizeContext)}`,
      {
        [`${prefix}-integerTimeSelect`]: onlyHour,
      }
    )

    const { hour: minHour, minute: minMinute } =
      extractHourAndMinuteFromTime(minTime)
    const { hour: maxHour, minute: maxMinute } =
      extractHourAndMinuteFromTime(maxTime)

    let items: string[] = []
    if (type === "minute") {
      items = minutes
    } else {
      items = hours
    }

    return (
      <div className={classSet} ref={selectRef} {...otherProps}>
        {items.map((value) => {
          const disabled = isDisabled(
            parseInt(value, 10),
            parseInt(minHour || "00", 10),
            parseInt(minMinute || "00", 10),
            parseInt(maxHour || "24", 10),
            parseInt(maxMinute || "59", 10),
            onlyHour
          )
          if (
            ((disabled || (disabledHours && disabledHours(value))) &&
              type === "hour") ||
            (disabledMinutes && disabledMinutes(value) && type === "minute")
          ) {
            // 小时的 disabled 直接不显示，而不是做 disabled 处理
            // 分钟的 disabled 显示，如果传入了 disabledMinutes 则不显示
            return null
          }

          const itemClassSet = classNames(`${prefix}-item`, {
            [`${prefix}-active`]: selectedValue === value,
            [`${prefix}-disabled`]: disabled,
          })
          return (
            <div
              role="none"
              className={itemClassSet}
              key={value}
              onClick={() => {
                if (!disabled) {
                  handleClick(value)
                }
              }}
            >
              {onlyHour ? `${value}:00` : value}
            </div>
          )
        })}
      </div>
    )
  }
)

TimeSelect.propTypes = {
  /**
   * 当前小时值
   */
  currentHour: PropTypes.number,
  /**
   * 不可选的小时
   */
  disabledHours: PropTypes.func,
  /**
   * 不可选的分钟
   */
  disabledMinutes: PropTypes.func,
  /**
   * 可选时间段的最大值
   */
  maxTime: PropTypes.string,
  /**
   * 可选时间段的最小值
   */
  minTime: PropTypes.string,
  /**
   * 改变选择的值
   */
  onChange: PropTypes.any,
  /**
   * 判断是否是整点
   */
  onlyHour: PropTypes.bool,
  /**
   * 已经选择的值
   */
  selectedValue: PropTypes.string,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 判断选择框的类型
   */
  type: PropTypes.any,
}

TimeSelect.defaultProps = {
  currentHour: null,
  disabledHours: noop,
  disabledMinutes: noop,
  maxTime: "24:00",
  minTime: "00:00",
  onChange: noop,
  onlyHour: false,
  selectedValue: null,
  size: "small",
  type: "hour",
}

export default memo(TimeSelect)
