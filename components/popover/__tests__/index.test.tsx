/**
 * Popover 是基于 Tooltip 进行封装的。
 * 除非与 Popover 相关，否则测试用例都应在 Tooltip 下。
 */

import * as React from "react"
import { mount } from "enzyme"
import Popover from ".."

describe("Popover", () => {
  it("Motion 类名是否正确", () => {
    const wrapper0 = mount(<Popover popup="popup">popover</Popover>)
    const wrapper1 = mount(
      <Popover arrowed={false} placement="top" popup="popup">
        popover
      </Popover>
    )
    const wrapper2 = mount(
      <Popover arrowed={false} placement="right" popup="popup">
        popover
      </Popover>
    )
    const wrapper3 = mount(
      <Popover arrowed={false} placement="bottom" popup="popup">
        popover
      </Popover>
    )
    const wrapper4 = mount(
      <Popover arrowed={false} placement="left" popup="popup">
        popover
      </Popover>
    )
    expect(wrapper0.find("Tooltip").props().popupTransitionName).toBe(
      "zoom-big"
    )
    expect(wrapper1.find("Tooltip").props().popupTransitionName).toBe(
      "slide-down"
    )
    expect(wrapper2.find("Tooltip").props().popupTransitionName).toBe(
      "slide-left"
    )
    expect(wrapper3.find("Tooltip").props().popupTransitionName).toBe(
      "slide-up"
    )
    expect(wrapper4.find("Tooltip").props().popupTransitionName).toBe(
      "slide-right"
    )
  })
})
