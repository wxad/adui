import React, { useState } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Radio from ".."

const RadioMounter = () => {
  const [checked, setChecked] = useState(false)
  return <Radio checked={checked} onChange={bool => setChecked(bool)} />
}

describe("Radio", () => {
  it("Radio 是否正确渲染", () => {
    const wrapper = TestRenderer.create(<Radio>children</Radio>)
    expect(wrapper).toMatchSnapshot()
  })

  it("Radio 是否能内部驱动", () => {
    const onChange = jest.fn()
    const wrapper = mount(<Radio onChange={onChange} />)
    wrapper
      .find("label")
      .at(0)
      .simulate("click")
    expect(
      wrapper
        .find("label")
        .at(0)
        .props()
        .className.includes("checked")
    ).toEqual(true)
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it("Radio 是否能受外部控制", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(<Radio checked={false} onChange={onChange} />)
    const wrapper1 = mount(<RadioMounter />)
    /**
     * 1. 确定 onChange 还是会传回应该变化的值；
     * 2. 但是由于 Radio 完全受外部控制，所以要确定内部状态不会改变。
     */
    wrapper0
      .find("label")
      .at(0)
      .simulate("click")
    expect(onChange).toHaveBeenCalledWith(true)
    expect(
      wrapper0
        .find("label")
        .at(0)
        .props()
        .className.includes("checked")
    ).toEqual(false)

    wrapper1
      .find("label")
      .at(0)
      .simulate("click")
    expect(
      wrapper1
        .find("label")
        .at(0)
        .props()
        .className.includes("checked")
    ).toEqual(true)
    wrapper1
      .find("label")
      .at(0)
      .simulate("click")
    expect(
      wrapper1
        .find("label")
        .at(0)
        .props()
        .className.includes("checked")
    ).toEqual(true)
  })

  it("Radio 是否能响应 onClick", () => {
    const onClick = jest.fn()
    const wrapper = mount(<Radio onClick={onClick} />)
    wrapper
      .find("label")
      .at(0)
      .simulate("click")
    expect(onClick).toHaveBeenCalled()
  })
})
