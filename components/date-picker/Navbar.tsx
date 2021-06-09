import * as React from "react"
import PropTypes from "prop-types"
import { DateUtils } from "day-picker-react"
import "./style"
import Button from "../button"
import { areSameMonth, getDefaultMaxDate, getDefaultMinDate } from "./core"

const prefix = "adui-date"

export interface INavbarProps {
  [key: string]: any
  maxDate: Date
  minDate: Date
  month: Date | null
  nextMonth: Date | null
  onNextClick: () => void
  onPreviousClick: () => void
  onManuallyChangeMonth?: () => void
}

/**
 * 日期选择 Navbar
 */
const Navbar: React.FC<INavbarProps> = ({
  maxDate,
  minDate,
  month,
  nextMonth,
  onNextClick,
  onPreviousClick,
  onManuallyChangeMonth,
}: INavbarProps) => (
  <div className={`${prefix}-navBar`}>
    <Button
      className={`${prefix}-navButtonPrev`}
      leftIcon="arrow-down"
      theme="light"
      size="small"
      onClick={() => {
        onPreviousClick()
      }}
      disabled={
        areSameMonth(minDate, month) || DateUtils.isDayBefore(month, minDate)
      }
    />
    <Button
      className={`${prefix}-navButtonNext`}
      leftIcon="arrow-down"
      theme="light"
      size="small"
      onClick={() => {
        if (DateUtils.isDayBefore(month, minDate) && onManuallyChangeMonth) {
          onManuallyChangeMonth()
        }
        onNextClick()
      }}
      disabled={
        areSameMonth(maxDate, month) || DateUtils.isDayAfter(nextMonth, maxDate)
      }
    />
  </div>
)

Navbar.propTypes = {
  /**
   * 最大限制日期
   */
  maxDate: PropTypes.any,
  /**
   * 最小限制日期
   */
  minDate: PropTypes.any,
  /**
   * 当前月的日期
   */
  month: PropTypes.instanceOf(Date),
  /**
   * 下个月的日期
   */
  nextMonth: PropTypes.instanceOf(Date),
  /**
   * next click handler
   */
  onNextClick: PropTypes.any,
  /**
   * previous click handler
   */
  onPreviousClick: PropTypes.any,
  /**
   * previous click handler
   */
  onManuallyChangeMonth: PropTypes.any,
}

Navbar.defaultProps = {
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
  month: null,
  nextMonth: null,
  onNextClick: () => {},
  onPreviousClick: () => {},
  onManuallyChangeMonth: () => {},
}

export default Navbar
