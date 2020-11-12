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
}

/**
 * 日期选择 Navbar
 */
const Navbar: React.FunctionComponent<INavbarProps> = ({
  maxDate,
  minDate,
  month,
  nextMonth,
  onNextClick,
  onPreviousClick,
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
      disabled={areSameMonth(minDate, month)}
    />
    <Button
      className={`${prefix}-navButtonNext`}
      leftIcon="arrow-down"
      theme="light"
      size="small"
      onClick={() => {
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
}

Navbar.defaultProps = {
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
  month: null,
  nextMonth: null,
  onNextClick: () => {},
  onPreviousClick: () => {},
}

export default Navbar
