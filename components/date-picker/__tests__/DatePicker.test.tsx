/* eslint-disable */
// @ts-nocheck
import React, { Component } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import DatePicker from ".."
import { convertDateToString } from "../core"
import { act } from "react-dom/test-utils"

class DatePickerMounter extends Component {
  state = {
    component: null,
    value: new Date(),
    visible: true,
  }

  render() {
    const { value, visible } = this.state
    return (
      <DatePicker
        shortcuts={[
          {
            label: "祖国生日",
            value: new Date("2020-10-01"),
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

describe("DatePicker", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(<DatePicker />)
    expect(wrapper).toMatchSnapshot()
  })

  it("内部驱动", () => {
    const val = new Date()
    const wrapper = mount(
      <DatePicker defaultValue={val} defaultVisible={false} closeOnSelect />
    )
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe(convertDateToString(val))

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
      .simulate("change", { target: { value: "2020-02-22" } })
    expect(wrapper.find("input").props().value).toBe("2020-02-22")

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
      const expectedVal = convertDateToString(
        new Date(
          wrapper
            .find(".adui-date-day")
            .at(14)
            .props()["aria-label"]
        )
      )
      // 等待 350ms
      jest.advanceTimersByTime(350)
      wrapper.update()
      expect(
        wrapper
          .find("input")
          .at(0)
          .props().value
      ).toBe(expectedVal)
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
    const val = new Date()
    const wrapper = mount(
      <DatePicker value={new Date()} visible closeOnSelect />
    )
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe(convertDateToString(val))

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
      // 等待 350ms
      jest.advanceTimersByTime(350)
      wrapper.update()
      expect(
        wrapper
          .find("input")
          .at(0)
          .props().value
      ).toBe(convertDateToString(val))
    })

    act(() => {
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
      ).toBe(convertDateToString(val))
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
    const mounter = mount(<DatePickerMounter />)
    const today = convertDateToString(new Date())
    mounter
      .find("input")
      .simulate("change", { target: { value: "2020-02-22" } })
    expect(convertDateToString(mounter.state().value)).toBe("2020-02-22")
    mounter
      .find("input")
      .simulate("change", { target: { value: "2020-02-31" } })
    expect(convertDateToString(mounter.state().value)).toBe("2020-02-22")
    mounter.find("input").simulate("change", { target: { value: "" } })
    expect(convertDateToString(mounter.state().value)).toBe("")
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
      jest.runAllTimers()
      mounter.update()
      expect(
        mounter
          .find("Popover")
          .at(0)
          .props().visible
      ).toBe(false)
    })
  })

  it("DayPicker 操作", () => {
    const today = new Date()
    const wrapper = mount(<DatePickerMounter />)
    wrapper
      .find("button")
      .at(0)
      .simulate("click")
    act(() => {
      wrapper
        .find(".adui-date-day")
        .at(15)
        .simulate("click")
      jest.runAllTimers()
      wrapper.update()
      expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(1)
    })

    act(() => {
      wrapper
        .find(".adui-date-shortcut")
        .at(0)
        .simulate("click")
      jest.runAllTimers()
      wrapper.update()
      expect(convertDateToString(wrapper.state().value)).toBe("2020-10-01")
    })

    const wrapperForCoverage0 = mount(<DatePickerMounter disabled />)
    wrapperForCoverage0.state().component.handleVisibleChange(false)
    jest.runAllTimers()
  })

  it("DayPicker 年月切换", () => {
    const wrapper = mount(<DatePickerMounter />)
    act(() => {
      wrapper
        .find("select")
        .at(0)
        .simulate("change", { target: { value: "2018" } })
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
    })
  })
})
