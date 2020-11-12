/* eslint-disable */
// @ts-nocheck
import {
  areSameMonth,
  areSameDay,
  isLegalDateString,
  isLegalDateRangeString,
  convertDateToString,
  convertDateRangeToString,
} from "../core"

describe("测试 core 方法的有效性", () => {
  it("areSameMonth", () => {
    expect(areSameMonth(new Date("2020-02-02"), new Date("2020-02-28"))).toBe(true)
    expect(areSameMonth(new Date("2020-02-02"), new Date("2020-03-01"))).toBe(false)
  })

  it("areSameDay", () => {
    expect(areSameDay(new Date("2020-02-02"), new Date("2020-02-02"))).toBe(true)
    expect(areSameDay(new Date("2020-02-02"), new Date("2020-03-01"))).toBe(false)
  })

  it("isLegalDateString", () => {
    expect(isLegalDateString("")).toBe(true)
    expect(isLegalDateString("2019-02-29")).toBe(false)
    expect(isLegalDateString("2020-02-29")).toBe(true)
    expect(isLegalDateString("2019-02-28")).toBe(true)
    expect(isLegalDateString("2019-03-31")).toBe(true)
    expect(isLegalDateString("2019-04-30")).toBe(true)
    expect(isLegalDateString("adui")).toBe(false)
  })

  it("isLegalDateRangeString", () => {
    expect(isLegalDateRangeString("")).toBe(true)
  })

  it("convertDateRangeToString", () => {
    expect(convertDateRangeToString(null)).toBe("")
  })
})
