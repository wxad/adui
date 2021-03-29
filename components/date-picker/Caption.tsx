import * as React from "react"
import PropTypes from "prop-types"
import "./style"
import Icon from "../icon"
import { getDefaultMaxDate, getDefaultMinDate } from "./core"

const prefix = "adui-date"

export interface ICaptionProps {
  [key: string]: any
  date: Date
  maxDate: Date
  minDate: Date
  onDateChange: (date: Date, e: React.FormEvent<HTMLSelectElement>) => void
}

/**
 * 日期选择 Caption
 */
const Caption: React.FC<ICaptionProps> = ({
  date,
  maxDate,
  minDate,
  onDateChange,
}: ICaptionProps) => {
  const handleYearChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.currentTarget.value, 10)
    const newDate = new Date(date.getTime())
    newDate.setFullYear(newYear)
    onDateChange(newDate, e)
  }

  const handleMonthChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.currentTarget.value, 10)
    const newDate = new Date(date.getTime())
    newDate.setMonth(newMonth)
    onDateChange(newDate, e)
  }

  const minYear = minDate.getFullYear()
  const maxYear = maxDate.getFullYear()
  const years = [maxYear]
  for (let year = maxYear - 1; year >= minYear; year -= 1) {
    years.push(year)
  }

  const displayMonth = date.getMonth()
  const displayYear = date.getFullYear()
  const startMonth = displayYear === minYear ? minDate.getMonth() : 0
  const endMonth = displayYear === maxYear ? maxDate.getMonth() + 1 : 12
  const months = [startMonth]
  for (let month = startMonth + 1; month < endMonth; month += 1) {
    months.push(month)
  }

  return (
    <div className={`${prefix}-caption`}>
      <div className={`${prefix}-selects`}>
        <div className={`${prefix}-selectYear`}>
          <select name="year" onChange={handleYearChange} value={displayYear}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          <Icon icon="triangle-down" />
        </div>
        <div className={`${prefix}-selectMonth`}>
          <select
            name="month"
            onChange={handleMonthChange}
            value={displayMonth}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month + 1}月
              </option>
            ))}
          </select>
          <Icon icon="triangle-down" />
        </div>
      </div>
    </div>
  )
}

Caption.propTypes = {
  /**
   * 日期
   */
  date: PropTypes.any,
  /**
   * 最大限制日期
   */
  maxDate: PropTypes.any,
  /**
   * 最小限制日期
   */
  minDate: PropTypes.any,
  /**
   * handler
   */
  onDateChange: PropTypes.func.isRequired,
}

Caption.defaultProps = {
  date: new Date(),
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
}

export default Caption
