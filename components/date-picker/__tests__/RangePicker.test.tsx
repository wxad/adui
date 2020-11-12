/* eslint-disable */
// @ts-nocheck
import React, { Component } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import DatePicker from ".."
import { convertDateRangeToString, convertDateToString } from "../core"
import { act } from "react-dom/test-utils"

const RangePicker = DatePicker.RangePicker

class RangePickerMounter extends Component {
  state = {
    component: null,
    value: [new Date(), new Date()],
    visible: true,
  }

  render() {
    const { value, visible } = this.state
    return (
      <RangePicker
        shortcuts={[
          {
            label: "祖国生日",
            value: [new Date("2020-10-01"), new Date("2020-10-07")],
          },
        ]}
        ref={component => {
          if (!this.state.component) {
            this.setState({ component })
          }
        }}
        closeOnSelect
        value={value}
        visible={visible}
        onChange={val => this.setState({ value: val })}
        onVisibleChange={bool => this.setState({ visible: bool })}
        {...this.props}
      />
    )
  }
}

describe("RangePicker", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(<RangePicker />)
    expect(wrapper).toMatchSnapshot()
  })

  it("内部驱动", () => {
    const val = [new Date("2020-02-02"), new Date("2020-03-01")]
    const wrapper = mount(
      <RangePicker defaultValue={val} defaultVisible={false} closeOnSelect />
    )
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe(convertDateRangeToString(val))

    wrapper.find("input").simulate("focus")

    expect(
      wrapper
        .find("Popover")
        .at(0)
        .props().visible
    ).toBe(true)

    wrapper.find("input").simulate("change", { target: { value: "" } })
    expect(wrapper.find("input").props().value).toBe("")

    wrapper
      .find("input")
      .simulate("change", { target: { value: "2020-02-22 - 2020-02-28" } })
    expect(wrapper.find("input").props().value).toBe("2020-02-22 - 2020-02-28")

    act(() => {
      wrapper.find("input").simulate("keydown", { key: "enter", keyCode: 13 })
      jest.runAllTimers()
      wrapper.update()
      expect(
        wrapper
          .find("Popover")
          .at(0)
          .props().visible
      ).toBe(false)
    })

    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(14)
        .simulate("click")
      wrapper
        .find(".adui-date-day")
        .at(15)
        .simulate("click")
      const expectedVal = convertDateRangeToString([
        new Date(
          wrapper
            .find(".adui-date-day")
            .at(14)
            .props()["aria-label"] + " 12:00"
        ),
        new Date(
          wrapper
            .find(".adui-date-day")
            .at(15)
            .props()["aria-label"] + " 12:00"
        ),
      ])
      // 等待 350ms
      jest.advanceTimersByTime(350)
      wrapper.update()
      expect(
        wrapper
          .find("Popover")
          .at(0)
          .props().visible
      ).toBe(false)
    })
  })

  it("外部控制", () => {
    /**
     * 以下都是验证外部控制时内部的失效
     */
    const val = [new Date(), new Date()]
    const wrapper = mount(
      <RangePicker value={[new Date(), new Date()]} visible closeOnSelect />
    )
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe(convertDateRangeToString(val))

    expect(
      wrapper
        .find("Popover")
        .at(0)
        .props().visible
    ).toBe(true)

    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(14)
        .simulate("click")
      wrapper
        .find(".adui-date-day")
        .at(15)
        .simulate("click")
      // 等待 350ms
      jest.advanceTimersByTime(350)
      wrapper.update()
      expect(
        wrapper
          .find("input")
          .at(0)
          .props().value
      ).toBe(convertDateRangeToString(val))
    })

    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(15)
        .simulate("click")
      wrapper
        .find(".adui-date-day")
        .at(16)
        .simulate("click")
      // 等待 350ms
      jest.advanceTimersByTime(350)
      wrapper.update()
      expect(
        wrapper
          .find("input")
          .at(0)
          .props().value
      ).toBe(convertDateRangeToString(val))
      expect(
        wrapper
          .find("Popover")
          .at(0)
          .props().visible
      ).toBe(true)
    })

    /**
     * 以下是验证外部控制时 getDerivedStateFromProps 的有效
     */
    const mounter = mount(<RangePickerMounter />)
    const today = convertDateRangeToString(new Date())
    mounter
      .find("input")
      .simulate("change", { target: { value: "2020-02-22 - 2020-02-26" } })
    expect(convertDateRangeToString(mounter.state().value)).toBe(
      "2020-02-22 - 2020-02-26"
    )
    mounter
      .find("input")
      .simulate("change", { target: { value: "2020-02-25 - 2020-02-26" } })
    expect(convertDateRangeToString(mounter.state().value)).toBe(
      "2020-02-25 - 2020-02-26"
    )
    mounter.find("input").simulate("change", { target: { value: "" } })
    expect(convertDateRangeToString(mounter.state().value)).toBe("")
    expect(
      mounter
        .find("Popover")
        .at(0)
        .props().visible
    ).toBe(true)
    act(() => {
      mounter
        .find(".adui-date-day")
        .at(15)
        .simulate("click")
      mounter
        .find(".adui-date-day")
        .at(16)
        .simulate("click")
      jest.runAllTimers()
      mounter.update()
    })
  })

  it("DayPicker 操作", () => {
    const today = new Date()
    const wrapper = mount(<RangePickerMounter />)
    const expectedRange = []
    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(10)
        .simulate("click")
      expectedRange[0] = new Date(
        wrapper
          .find(".adui-date-day")
          .at(10)
          .props()["aria-label"] + " 12:00"
      )
      wrapper
        .find("button")
        .at(1)
        .simulate("click")
      wrapper
        .find("button")
        .at(1)
        .simulate("click")
      jest.runAllTimers()
      wrapper.update()
    })

    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(10)
        .simulate("click")
      expectedRange[1] = new Date(
        wrapper
          .find(".adui-date-day")
          .at(10)
          .props()["aria-label"] + " 12:00"
      )
      jest.runAllTimers()
      wrapper.update()
      expect(
        convertDateRangeToString(wrapper.state().value) ===
          convertDateRangeToString(expectedRange)
      ).toBe(true)
    })

    act(() => {
      wrapper
        .find(".adui-date-shortcut")
        .at(0)
        .simulate("keydown", { key: "enter", keyCode: 13 })
      jest.runAllTimers()
      wrapper.update()
      expect(convertDateRangeToString(wrapper.state().value)).toBe(
        "2020-10-01 - 2020-10-07"
      )
    })

    const wrapperForCoverage0 = mount(<RangePickerMounter disabled />)
    wrapperForCoverage0.state().component.handleVisibleChange(false)
    wrapperForCoverage0
      .find(".adui-date-day")
      .at(14)
      .simulate("mouseenter")
    wrapperForCoverage0
      .find(".adui-date-day")
      .at(14)
      .simulate("mouseleave")
    jest.runAllTimers()
  })

  it("测试 min max", () => {
    const wrapper = mount(
      <RangePickerMounter
        minDate={new Date("2018-12-31")}
        maxDate={new Date("2020-01-01")}
      />
    )
    act(() => {
      wrapper
        .find("select")
        .at(0)
        .simulate("change", { target: { value: "2019" } })
      wrapper
        .find("select")
        .at(1)
        .simulate("change", { target: { value: "1" } })
      jest.runAllTimers()
      wrapper.update()
      wrapper
        .find(".adui-date-day")
        .at(14)
        .simulate("click")
      jest.runAllTimers()
      wrapper.update()
      wrapper
        .find("select")
        .at(1)
        .simulate("change", { target: { value: "11" } })
      wrapper
        .find("select")
        .at(0)
        .simulate("change", { target: { value: "2020" } })
      jest.runAllTimers()
      wrapper.update()
      wrapper
        .find(".adui-date-day")
        .at(14)
        .simulate("click")
      jest.runAllTimers()
      wrapper.update()
    })
  })
})
