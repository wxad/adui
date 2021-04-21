/* eslint-disable */
/**
 * Tooltip 是基于 PopTrigger 进行封装的。
 * 除非与 Tooltip 相关，否则测试用例都应在 PopTrigger 下。
 */
import * as React from "react"
import { act } from "react-dom/test-utils"
import { mount } from "enzyme"
import Tooltip from ".."

describe("Tooltip", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("是否能内部驱动", () => {
    const wrapper = mount(
      <Tooltip
        alignEdge
        placement="top"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        popup={<div id="popup">popup</div>}
      >
        <div id="children">children</div>
      </Tooltip>
    )
    const child = wrapper.find("#children").at(0)
    child.simulate("mouseenter")
    expect(
      wrapper
        .find("Trigger")
        .at(0)
        .props().popupVisible
    ).toBe(true)
    child.simulate("mouseleave")
    expect(
      wrapper
        .find("Trigger")
        .at(0)
        .props().popupVisible
    ).toBe(false)
  })
})

describe("Tooltip 测试 handlePopupAlign - Top", () => {
  beforeEach(() => {
    jest.useFakeTimers()

    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getBoundingClientRect`，之后运行的所有 `getBoundingClientRect` 都会返回这同一个值。
     */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 120,
        height: 120,
        top: -10,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: -10,
        toJSON: () => {},
      }
    })
  })

  it("是否处理 PopupAlign", () => {
    document.body.innerHTML = '<div id="mounter" />'
    const wrapper = mount(
      <Tooltip
        test
        visible
        placement="top"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        popup="popup"
      >
        <div id="children">children</div>
      </Tooltip>,
      { attachTo: document.getElementById("mounter") }
    )
    document.body.scrollTop = 0
    const child = wrapper.find("#children").at(0)
    act(() => {
      child.simulate("mouseenter")
      // jest runAllTimers 是为了触发 Tooltip 内的 setTimeout 0
      jest.runAllTimers()
      // 必须执行 wrapper.update 否则拿到的 prop 还是旧的
      // https://github.com/enzymejs/enzyme#react-hooks-support
      // 血的教训
      wrapper.update()
    })

    expect(
      wrapper
        .find("PopTrigger")
        .at(0)
        .props().popupPlacement
    ).toBe("bottom")
  })
})

describe("Tooltip 测试 handlePopupAlign - Bottom", () => {
  beforeEach(() => {
    jest.useFakeTimers()

    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getBoundingClientRect`，之后运行的所有 `getBoundingClientRect` 都会返回这同一个值。
     */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 120,
        height: 120,
        top: 1000,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 1000,
        toJSON: () => {},
      }
    })
  })

  it("是否处理 PopupAlign", () => {
    document.body.innerHTML = '<div id="mounter" />'
    const wrapper = mount(
      <Tooltip
        test
        visible
        placement="bottom"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        popup="popup"
      >
        <div id="children">children</div>
      </Tooltip>,
      { attachTo: document.getElementById("mounter") }
    )
    document.body.scrollTop = 0
    const child = wrapper.find("#children").at(0)
    act(() => {
      child.simulate("mouseenter")
      // jest runAllTimers 是为了触发 Tooltip 内的 setTimeout 0
      jest.runAllTimers()
      // 必须执行 wrapper.update 否则拿到的 prop 还是旧的
      // https://github.com/enzymejs/enzyme#react-hooks-support
      // 血的教训
      wrapper.update()
    })

    expect(
      wrapper
        .find("PopTrigger")
        .at(0)
        .props().popupPlacement
    ).toBe("top")
  })
})
