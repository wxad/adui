/* eslint-disable */
import * as React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Popconfirm from ".."

class PopconfirmMounter extends React.Component {
  state = {
    visible: true,
  }

  private popconfirm: any

  render() {
    const { visible } = this.state
    return (
      <Popconfirm
        visible={visible}
        onVisibleChange={(bool, options) => {
          if (options.target !== "confirm" && !bool) {
            this.setState({ visible: false })
          } else {
            this.setState({ visible: true })
          }
        }}
        popup="popup"
        ref={(popconfirm: any) => {
          if (popconfirm) {
            this.popconfirm = popconfirm
            return this.popconfirm
          }
          return null
        }}
      >
        <div id="children">children</div>
      </Popconfirm>
    )
  }
}

describe("Popconfirm", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Popconfirm popup="1">children</Popconfirm>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否能内部驱动", () => {
    const onVisibleChange = jest.fn()
    const wrapper = mount(
      <Popconfirm onVisibleChange={onVisibleChange}>
        <div id="child">child</div>
      </Popconfirm>
    )
    wrapper
      .find("#child")
      .at(0)
      .simulate("click")
    expect(onVisibleChange).toHaveBeenCalledWith(true, {})
    expect(wrapper.find("Popover").props().visible).toBe(true)
    const buttons = wrapper.find("button")
    buttons.at(0).simulate("click")
    expect(onVisibleChange).toHaveBeenCalledWith(false, { target: "cancel" })
    expect(wrapper.find("Popover").props().visible).toBe(false)
    wrapper
      .find("#child")
      .at(0)
      .simulate("click")
    buttons.at(1).simulate("click")
    expect(onVisibleChange).toHaveBeenCalledWith(false, { target: "confirm" })
    expect(wrapper.find("Popover").props().visible).toBe(false)
  })

  it("是否能外部控制", () => {
    const wrapper = mount(<PopconfirmMounter />)
    const buttons = wrapper.find("button")
    buttons.at(0).simulate("click")
    expect(wrapper.find("Popover").props().visible).toEqual(false)
    wrapper
      .find("#children")
      .at(0)
      .simulate("click")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
    buttons.at(1).simulate("click")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
  })
})
