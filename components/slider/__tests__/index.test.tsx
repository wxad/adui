import React, { Component } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Slider from ".."

class SliderMounter extends Component {
  state = {
    value: 30,
  }

  render() {
    const { value } = this.state
    return (
      <Slider
        value={value}
        onChange={(param) => this.setState({ value: param })}
      />
    )
  }
}

describe("Slider", () => {
  it("Slider 是否正确渲染", () => {
    const wrapper = TestRenderer.create(<Slider />)
    expect(wrapper).toMatchSnapshot()
  })

  it("Slider 是否能内部驱动", () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Slider min={0} max={100} defaultValue={30} onChange={onChange} />
    )
    // wrapper.instance().handleBeforeChange()
    // wrapper.instance().handleAfterChange()
    expect(
      wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")
    ).toBe(30)
    wrapper.find("input").simulate("change", { target: { value: "50" } })
    expect(
      wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")
    ).toBe(50)
  })

  it("Slider 是否能受外部控制", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(
      <Slider min={0} max={100} value={30} step={0.1} onChange={onChange} />
    )
    const wrapper1 = mount(<SliderMounter />)

    wrapper0.find("input").simulate("change", { target: { value: "50" } })
    expect(
      wrapper0.find(".adui-slider-handle").at(1).prop("aria-valuenow")
    ).toBe(30)
    wrapper1.find("input").simulate("change", { target: { value: "50" } })
    expect(
      wrapper1.find(".adui-slider-handle").at(1).prop("aria-valuenow")
    ).toBe(50)
  })
})
