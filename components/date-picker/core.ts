import { DateUtils } from "day-picker-react"

export const MONTHS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
]
export const WEEKDAYS_LONG = [
  "周日",
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
]
export const WEEKDAYS_SHORT = ["日", "一", "二", "三", "四", "五", "六"]

export const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const WEEKDAYS_LONG_EN = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
export const WEEKDAYS_SHORT_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export const getDefaultMaxDate = () => {
  const date = new Date()
  date.setFullYear(date.getFullYear())
  date.setMonth(11, 31)
  return date
}

export const getDefaultMinDate = () => {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 4)
  date.setMonth(0, 1)
  return date
}

export const areSameMonth = (date1?: Date | null, date2?: Date | null) =>
  date1 != null &&
  date2 != null &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear()

export const areSameDay = (date1: Date, date2: Date) =>
  areSameMonth(date1, date2) && date1.getDate() === date2.getDate()

export const isLegalDateString = (date: string) => {
  if (date.trim() === "") {
    return true
  }
  const strings = date.split("-")
  if (
    strings.length === 3 &&
    strings[0].length === 4 &&
    strings[1].length === 2 &&
    strings[2].length === 2 &&
    !isNaN(Number(strings[0])) &&
    !isNaN(Number(strings[1])) &&
    !isNaN(Number(strings[2]))
  ) {
    const checkLeapYear = (str: number) =>
      (str % 4 === 0 && str % 100 !== 0) || str % 400 === 0
    const solar = [1, 3, 5, 7, 8, 10, 12]
    const lunar = [4, 6, 9, 11]
    const year = parseInt(strings[0], 10)
    const month = parseInt(strings[1], 10)
    const day = parseInt(strings[2], 10)
    if (month > 0 && month < 13) {
      if (solar.includes(month)) {
        if (day > 0 && day < 32) {
          return true
        }
      } else if (lunar.includes(month)) {
        if (day > 0 && day < 31) {
          return true
        }
      } else {
        if (checkLeapYear(year) && day > 0 && day < 30) {
          return true
        }
        if (!checkLeapYear(year) && day > 0 && day < 29) {
          return true
        }
      }
    }
    return false
  }
  return false
}

export const isLegalDateRangeString = (date: string) => {
  if (date.trim() === "") {
    return true
  }
  const strings = date.split(" - ")
  return (
    strings.length === 2 &&
    strings[0].length &&
    strings[1].length &&
    isLegalDateString(strings[0]) &&
    isLegalDateString(strings[1])
  )
}

export const convertDateToString = (date?: Date | "" | null) => {
  if (!date) {
    return ""
  }
  const dateString = date.toLocaleDateString("zh-Hans-CN")
  const strings = dateString.split("/")
  const addZero = (s: string) => {
    if (parseInt(s, 10) < 10) {
      return `0${s}`
    }
    return s
  }
  return `${strings[0]}-${addZero(strings[1])}-${addZero(strings[2])}`
}

export const convertDateRangeToString = (
  range?: [Date | undefined | null, Date | undefined | null]
) => {
  if (!range) {
    return ""
  }
  const from = range[0]
  const to = range[1]
  if (!(from && to)) {
    return ""
  }
  if (DateUtils.isDayAfter(to, from)) {
    return `${convertDateToString(from)} - ${convertDateToString(to)}`
  }
  return `${convertDateToString(to)} - ${convertDateToString(from)}`
}

export const clone = (d: Date | null | undefined) =>
  d ? new Date(d.getTime()) : null

export const isDayInRange = (
  date: Date,
  dateRange: [Date | null | undefined, Date | null | undefined],
  exclusive: boolean = false
) => {
  if (date === null || dateRange[0] === null || dateRange[1] === null) {
    return false
  }

  const day = clone(date)
  const start = clone(dateRange[0])
  const end = clone(dateRange[1])

  if (day) {
    day.setHours(0, 0, 0, 0)
  }
  if (start) {
    start.setHours(0, 0, 0, 0)
  }
  if (end) {
    end.setHours(0, 0, 0, 0)
  }

  return start && day && end
    ? start <= day &&
        day <= end &&
        (!exclusive || (!areSameDay(start, day) && !areSameDay(day, end)))
    : null
}
