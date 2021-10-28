/* eslint-disable */
import React, { Component } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
// import { act } from "react-dom/test-utils"
import ColorPicker from ".."
import { act } from "react-dom/test-utils"

class ColorPickerMounter extends Component {
  state = {
    value: "#07C160",
  }

  render() {
    const { value } = this.state
    return (
      <ColorPicker
        value={value}
        onChange={(val) => this.setState({ value: val })}
        {...this.props}
      />
    )
  }
}

describe("ColorPicker", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(<ColorPicker defaultValue="#07C160" />)
    expect(wrapper).toMatchSnapshot()
  })

  it("是否能处理小写值的情况", () => {
    const wrapper = mount(<ColorPicker defaultValue="#07c160" />)
    const value = wrapper.find(".adui-cp").at(0).props()["data-value"]
    const inputValue = wrapper.find("Input").at(0).props().value
    expect(inputValue === "07C160" && value === "#07C160").toBe(true)
  })

  it("内部驱动", () => {
    const wrapper = mount(<ColorPicker defaultValue="#07C160" />)
    wrapper.find("button").simulate("click")
    wrapper.find(".adui-cp-standard i").at(0).simulate("click")
    const value = wrapper.find(".adui-cp").at(0).props()["data-value"]
    const inputValue = wrapper.find("Input").at(0).props().value
    expect(inputValue === "FFFFFF" && value === "#FFFFFF").toBe(true)

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "F0F0F0" } })

    const value1 = wrapper.find(".adui-cp").at(0).props()["data-value"]
    const inputValue1 = wrapper.find("Input").at(0).props().value
    expect(inputValue1 === "F0F0F0" && value1 === "#F0F0F0").toBe(true)
  })

  it("外部控制", () => {
    const wrapper = mount(<ColorPickerMounter />)

    wrapper.find("button").simulate("click")
    act(() => {
      wrapper.find(".adui-cp-standard i").at(0).simulate("click")
      jest.runAllTimers()
      wrapper.update()
      const value = wrapper.find(".adui-cp").at(0).props()["data-value"]
      const inputValue = wrapper.find("Input").at(0).props().value
      expect(
        inputValue === "FFFFFF" &&
          value === "#FFFFFF" &&
          wrapper.state().value === "#FFFFFF"
      ).toBe(true)
    })
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "F0F0F0" } })
    const value1 = wrapper.find(".adui-cp").at(0).props()["data-value"]
    const inputValue1 = wrapper.find("Input").at(0).props().value
    expect(
      inputValue1 === "F0F0F0" &&
        value1 === "#F0F0F0" &&
        wrapper.state().value === "#F0F0F0"
    ).toBe(true)
  })

  it("禁用态", () => {
    const wrapper = mount(<ColorPicker defaultValue="#07C160" disabled />)
    wrapper.find("button").simulate("click")
    expect(wrapper.find("Popover").props().visible).toBe(false)
  })

  it("popupResultVisible", () => {
    const wrapper0 = mount(<ColorPicker defaultValue="#07C160" />)
    const wrapper1 = mount(
      <ColorPicker defaultValue="#07C160" popupResultVisible={false} />
    )
    wrapper0.find("button").simulate("click")
    wrapper1.find("button").simulate("click")
    expect(wrapper0.find("input")).toHaveLength(2)
    expect(wrapper1.find("input")).toHaveLength(1)
  })

  it("handlePrefixClick 验证", () => {
    const wrapper = mount(<ColorPicker defaultValue="#07C160" />)
    wrapper.find(".adui-cp-prefix").simulate("click")
    wrapper.find("button").simulate("click")
    jest.advanceTimersByTime(50)
    wrapper.find(".adui-cp-prefix").at(1).simulate("click")
  })
})
