/* eslint-disable */
import React, { Component } from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import keyCode from "rc-util/lib/KeyCode"
import ColorPicker from ".."

class ColorPickerMounter extends Component {
  state = {
    value: "#07C160",
  }

  render() {
    const { value } = this.state
    return (
      <ColorPicker
        value={value}
        onChange={val => this.setState({ value: val })}
        {...this.props}
      />
    )
  }
}

describe("ColorPicker", () => {
  beforeAll(() => {
    jest.useFakeTimers()

    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getBoundingClientRect`，之后运行的所有 `getBoundingClientRect` 都会返回这同一个值。
     */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 160,
        height: 90,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      }
    })
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("其他事件验证", () => {
    const onFinishChange = jest.fn()
    const wrapper = mount(
      <ColorPicker
        defaultValue="#07C160"
        onFinishChange={onFinishChange}
        recentColors={["#00BB9C"]}
      />
    )
    const input = wrapper.find("input").at(0)

    // 验证 input 修改为非法值后，在 blur 时会重置
    input.simulate("change", { target: { value: "11" } })
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe("11")
    input.simulate("blur")
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).toBe("07C160")

    input.simulate("change", { target: { value: "00BB9C" } })
    input.simulate("blur")
    expect(onFinishChange).toHaveBeenCalledWith("#00BB9C")

    wrapper.find("button").simulate("click")
    wrapper
      .find(".adui-cp-recent i")
      .at(0)
      .simulate("click")
    wrapper
      .find(".adui-cp-standard i")
      .at(11)
      .simulate("click")
    wrapper.find("button").simulate("click")
    // 等待 200ms
    jest.advanceTimersByTime(200)
    expect(onFinishChange).toHaveBeenCalledWith("#5BDEC8")

    // 测试 Collapse
    wrapper.find("button").simulate("click")
    // 等待 350ms
    jest.advanceTimersByTime(350)
    const head0 = wrapper.find(".adui-cp-collapse-header").at(0)
    const head1 = wrapper.find(".adui-cp-collapse-header").at(1)
    const head2 = wrapper.find(".adui-cp-collapse-header").at(2)
    expect(wrapper.find(".adui-cp-collapse-content")).toHaveLength(2)
    head0.simulate("click")
    head2.simulate("click")
    head1.simulate("click")
    head2.simulate("click")

    wrapper
      .find("Slider")
      .at(0)
      .simulate("focus")
    wrapper
      .find("Slider")
      .at(0)
      .find(".adui-slider-handle")
      .at(0)
      .simulate("keyDown", { keyCode: keyCode.RIGHT })
    expect(
      wrapper
        .find(".adui-cp")
        .at(0)
        .props()["data-value"]
    ).toBe("#5BDECA")
    wrapper
      .find("Slider")
      .at(1)
      .simulate("focus")
    wrapper
      .find("Slider")
      .at(1)
      .find(".adui-slider-handle")
      .at(0)
      .simulate("keyDown", { keyCode: keyCode.RIGHT })
    expect(
      wrapper
        .find(".adui-cp")
        .at(0)
        .props()["data-value"]
    ).toBe("#59DECA")
    wrapper
      .find("Slider")
      .at(2)
      .simulate("focus")
    wrapper
      .find("Slider")
      .at(2)
      .find(".adui-slider-handle")
      .at(0)
      .simulate("keyDown", { keyCode: keyCode.RIGHT })
    expect(
      wrapper
        .find(".adui-cp")
        .at(0)
        .props()["data-value"]
    ).toBe("#5AE0CC")

    const map = {}
    // @ts-ignore
    window.addEventListener = jest.fn((event, cb) => {
      // @ts-ignore
      map[event] = cb
    })

    const classWrapper = mount(<ColorPickerMounter />)

    classWrapper.find("button").simulate("click")
    jest.advanceTimersByTime(10)

    act(() => {
      classWrapper
        .find(".adui-cp-collapse-header")
        .at(1)
        .simulate("click")
      jest.runAllTimers()
      classWrapper.update()
    })

    act(() => {
      classWrapper
        .find(".adui-cp-palette")
        .at(0)
        .simulate("mouseDown")

      // @ts-ignore
      map.mousemove({})
      // @ts-ignore
      map.mousemove({ pageX: 10000, pageY: 0 })

      jest.runAllTimers()
      classWrapper.update()
      expect(
        classWrapper
          .find(".adui-cp")
          .at(0)
          .props()["data-s"]
      ).toBe(100)
      // @ts-ignore
      map.mousemove({ pageX: -10000, pageY: 0 })
      jest.runAllTimers()
      classWrapper.update()
      expect(
        classWrapper
          .find(".adui-cp")
          .at(0)
          .props()["data-s"]
      ).toBe(0)
      // @ts-ignore
      map.mousemove({ pageY: 10000, pageX: 0 })
      jest.runAllTimers()
      classWrapper.update()
      expect(
        classWrapper
          .find(".adui-cp")
          .at(0)
          .props()["data-b"]
      ).toBe(0)
      // @ts-ignore
      map.mousemove({ pageY: -10000, pageX: 0 })
      jest.runAllTimers()
      classWrapper.update()
      expect(
        classWrapper
          .find(".adui-cp")
          .at(0)
          .props()["data-b"]
      ).toBe(100)
      // @ts-ignore
      map.mouseup({})
    })
  })
})
