import React, { useState } from "react"
import TestRenderer from "react-test-renderer"
import { mount } from "enzyme"
import Checkbox from ".."

const CheckboxMounter = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={(bool) => setChecked(bool)} />
}

describe("Checkbox", () => {
  it("Checkbox 是否正确渲染", () => {
    const wrapper = TestRenderer.create(<Checkbox>children</Checkbox>)
    expect(wrapper).toMatchSnapshot()
  })

  it("Checkbox 是否能内部驱动", () => {
    const onChange = jest.fn()
    const wrapper = mount(<Checkbox onChange={onChange} />)
    wrapper.find("label").at(0).simulate("click")
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it("Checkbox 是否能受外部控制", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(<Checkbox checked={false} onChange={onChange} />)
    const wrapper1 = mount(<Checkbox checked onChange={onChange} />)

    const wrapper2 = mount(<CheckboxMounter />)
    const firstCheckbox = wrapper0.find("label").at(0)
    const secondCheckbox = wrapper1.find("label").at(0)
    const thirdCheckbox = wrapper2.find("label").at(0)
    /**
     * 1. 确定 onChange 还是会传回应该变化的值；
     * 2. 但是由于 Checkbox 完全受外部控制，所以要确定内部状态不会改变。
     */
    firstCheckbox.simulate("click")
    expect(onChange).toHaveBeenCalledWith(true)
    expect(
      wrapper0.find("label").at(0).props().className.includes("checked")
    ).toEqual(false)

    secondCheckbox.simulate("click")
    expect(onChange).toHaveBeenCalledWith(false)
    expect(
      wrapper1.find("label").at(0).props().className.includes("checked")
    ).toEqual(true)

    thirdCheckbox.simulate("click")
    expect(
      wrapper2.find("label").at(0).props().className.includes("checked")
    ).toEqual(true)
    thirdCheckbox.simulate("click")
    expect(
      wrapper2.find("label").at(0).props().className.includes("checked")
    ).toEqual(false)
  })

  it("Checkbox 禁用状态是否可用", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(<Checkbox disabled onChange={onChange} />)
    /**
     * group.test.js 中没有对 Checkbox.Group disabled 的测试，
     * 因为 disabled 逻辑都是在 Checkbox.js 处理的。
     */
    const wrapper1 = mount(
      <Checkbox.Group disabled onChange={onChange}>
        <Checkbox />
      </Checkbox.Group>
    )
    wrapper0.find("label").at(0).simulate("click")
    expect(onChange).not.toHaveBeenCalled()

    wrapper1.find("label").at(0).simulate("click")
    expect(onChange).not.toHaveBeenCalled()
  })

  it("Checkbox 是否能响应 onClick", () => {
    const onClick = jest.fn()
    const wrapper = mount(<Checkbox onClick={onClick} />)
    wrapper.find("label").at(0).simulate("click")
    expect(onClick).toHaveBeenCalled()
  })

  it("Checkbox 是否能响应 enter", () => {
    const onChange = jest.fn()
    const wrapper = mount(<Checkbox onChange={onChange} />)
    wrapper
      .find("label")
      .at(0)
      .simulate("keydown", { key: "enter", keyCode: 13 })
    expect(
      wrapper.find("label").at(0).props().className.includes("checked")
    ).toEqual(true)
    expect(onChange).toHaveBeenCalledWith(true)
  })
})
