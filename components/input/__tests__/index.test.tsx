/* eslint-disable */
// @ts-nocheck
import React, { Component } from "react"
import sinon from "sinon"
import { mount, render } from "enzyme"
import TestRenderer from "react-test-renderer"
import Input from ".."
import Icon from "../../icon"

const stub = sinon.stub(console, "error")

class InputMounter extends Component<any, any> {
  state = {
    value: "中文abc",
    leftElement: <Icon icon="add" />,
  }

  render() {
    const { countHanzi, ...others } = this.props
    const { leftElement, value } = this.state
    return (
      <Input
        countHanzi={countHanzi}
        leftElement={leftElement}
        limit={10}
        value={value}
        onChange={({ target: { value: val } }) => this.setState({ value: val })}
        {...others}
      />
    )
  }
}

class TextareaMounter extends Component<any, any> {
  state = {
    value: "中文abc",
  }

  render() {
    const { countHanzi, ...others } = this.props
    const { value } = this.state
    return (
      <Input.Textarea
        countHanzi={countHanzi}
        limit={10}
        value={value}
        onChange={({ target: { value: val } }) => this.setState({ value: val })}
        {...others}
      />
    )
  }
}

describe("Input", () => {
  beforeAll(() => {
    Object.defineProperty(Element.prototype, "clientWidth", {
      writable: true,
      configurable: true,
      value: 200,
    })
  })

  it("快照验证", () => {
    const wrapper = TestRenderer.create(<Input />)
    expect(wrapper).toMatchSnapshot()
  })
  it("是否正确渲染文本框", () => {
    const wrapper = TestRenderer.create(<Input.Textarea />)
    expect(wrapper).toMatchSnapshot()
  })
  it("是否能验证 contentJustify", () => {
    render(<Input contentJustify />)
    render(<Input contentJustify value="111中文" />)
    expect(stub.calledOnce).toEqual(true)
    stub.restore()
  })
  it("是否能验证 limit", () => {
    render(<Input limit={10} rightElement={<div>string</div>} />)
    expect(stub.calledOnce).toEqual(true)
    stub.restore()
  })
  it("是否支持 limit 功能", () => {
    const wrapper0 = mount(<InputMounter countHanzi />)
    const wrapper1 = mount(<InputMounter countHanzi={false} />)
    wrapper0.find("input").simulate("change", { target: { value: "111中文" } })
    wrapper1.find("input").simulate("change", { target: { value: "111中文" } })
    expect(wrapper0.find(".adui-input-limit").text()).toEqual("4/10")
    expect(wrapper1.find(".adui-input-limit").text()).toEqual("5/10")
  })
  it("是否显示正确的 leftElement rightElement", () => {
    const wrapper = mount(
      <Input
        leftElement={<Icon icon="search" />}
        rightElement={<Icon icon="search" />}
      />
    )
    const left = wrapper.find(".adui-input-left")
    const right = wrapper.find(".adui-input-right")
    left.simulate("click")
    right.simulate("click")
  })
  it("是否能正确处理 leftElement 宽度", () => {
    const wrapper = mount(<InputMounter />)
    wrapper.setState({ leftElement: null })
    wrapper.setProps({ rightElement: <Icon icon="add" /> })
    wrapper.setProps({ rightElement: null })
  })
  it("事件验证", () => {
    const onPressEnter = jest.fn()
    const onKeyDown = jest.fn()
    const onBlur = jest.fn()
    const onFocus = jest.fn()

    const wrapper = mount(
      <Input
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )
    wrapper.find("input").simulate("keydown", { key: "enter", keyCode: 13 })
    wrapper.find("input").simulate("focus")
    wrapper.find("input").simulate("blur")
    expect(onPressEnter).toHaveBeenCalledTimes(1)
    expect(onKeyDown).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(onFocus).toHaveBeenCalledTimes(1)
  })
  it("验证 Cleave.js", () => {
    const wrapper = mount(<InputMounter cleaveOptions={{ uppercase: true }} />)
    wrapper.setState({ value: "abc" })
    wrapper.update()
    expect(wrapper.find("input").get(0).props.value).toBe("ABC")
  })

  it("Textarea: 快照验证", () => {
    const wrapper = TestRenderer.create(<Input.Textarea />)
    expect(wrapper).toMatchSnapshot()
  })
  it("Textarea: 是否能正确验证 limit", () => {
    render(<Input.Textarea limit={10} resize="both" />)
    expect(stub.calledOnce).toEqual(true)
  })
  it("Textarea: 是否支持 limit 功能", () => {
    const wrapper0 = mount(<TextareaMounter countHanzi />)
    const wrapper1 = mount(<TextareaMounter countHanzi={false} />)
    wrapper0
      .find("textarea")
      .simulate("change", { target: { value: "111中文" } })
    wrapper1
      .find("textarea")
      .simulate("change", { target: { value: "111中文" } })
    expect(wrapper0.find(".adui-input-limit").text()).toEqual("4/10")
    expect(wrapper1.find(".adui-input-limit").text()).toEqual("5/10")
  })
  it("Textarea: 事件验证", () => {
    const onPressEnter = jest.fn()
    const onKeyDown = jest.fn()
    const onBlur = jest.fn()
    const onFocus = jest.fn()

    const wrapper = mount(
      <Input.Textarea
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )
    wrapper.find("textarea").simulate("keydown", { key: "enter", keyCode: 13 })
    wrapper.find("textarea").simulate("focus")
    expect(
      wrapper
        .find(".adui-input-wrapper")
        .at(0)
        .props()
        .className.includes("adui-input-focused")
    ).toBe(true)
    wrapper.find("textarea").simulate("blur")
    expect(
      wrapper
        .find(".adui-input-wrapper")
        .at(0)
        .props()
        .className.includes("adui-input-focused")
    ).toBe(false)
    expect(onPressEnter).toHaveBeenCalledTimes(1)
    expect(onKeyDown).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(onFocus).toHaveBeenCalledTimes(1)
  })
})
