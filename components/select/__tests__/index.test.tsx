/* eslint-disable */
// @ts-nocheck
import * as React from "react"
import { mount } from "enzyme"
import Select from ".."
import { act } from "react-dom/test-utils"

const { Option } = Select

export interface IElementProto {
  [key: string]: any
}

describe("Select", () => {
  beforeEach(() => {
    jest.useFakeTimers()

    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getPopupDOMNode`，之后运行的所有 `getPopupDOMNode` 都会返回这同一个值。
     */
    // Element.prototype.getPopupDOMNode = jest.fn(() => {
    // return "asd"
    // })
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("Select 是否正确渲染", () => {
    const wrapper = mount(<Select />)
    expect(wrapper).toMatchSnapshot()
  })

  it("Select 是否能内部驱动", () => {
    const wrapper = mount(
      <Select defaultOpen defaultValue={2} style={{ width: "120px" }}>
        <Option value={1}>朋友圈</Option>
        <Option value={2}>公众号</Option>
      </Select>
    )
    let dropdownWrapper = mount(
      wrapper
        .find("Trigger")
        .instance()
        .getComponent()
    )
    expect(dropdownWrapper.props().visible).toBe(true)
    dropdownWrapper
      .find(".adui-select-item-option")
      .at(0)
      .simulate("click")
    // 需要重新获取
    dropdownWrapper = mount(
      wrapper
        .find("Trigger")
        .instance()
        .getComponent()
    )
    expect(wrapper.state().value).toBe(1)
    expect(dropdownWrapper.props().visible).toBe(false)
  })

  it("Select 是否受外部控制", () => {
    const onSelect = jest.fn()
    const wrapper = mount(
      <Select open value={2} style={{ width: "120px" }} onSelect={onSelect}>
        <Option value={1}>朋友圈</Option>
        <Option value={2}>公众号</Option>
      </Select>
    )
    let dropdownWrapper = mount(
      wrapper
        .find("Trigger")
        .instance()
        .getComponent()
    )
    expect(wrapper.state().value).toBe(2)
    expect(dropdownWrapper.props().visible).toBe(true)
    dropdownWrapper
      .find(".adui-select-item-option")
      .at(0)
      .simulate("click")
    // 需要重新获取
    dropdownWrapper = mount(
      wrapper
        .find("Trigger")
        .instance()
        .getComponent()
    )
    expect(wrapper.state().value).toBe(2)
    expect(dropdownWrapper.props().visible).toBe(true)
  })

  // it("封装的搜索是否可用", () => {
  //   document.body.innerHTML = '<div id="mounter" />'
  //   const onSelect = jest.fn()
  //   const wrapper = mount(
  //     <Select
  //       open
  //       value={null}
  //       style={{ width: "120px" }}
  //       onSelect={onSelect}
  //       searchable
  //     >
  //       <Option value={1}>pengyouquan</Option>
  //       <Option value={2}>gongzhonghao</Option>
  //     </Select>,
  //     { attachTo: document.getElementById("mounter") }
  //   )
  //   let dropdownWrapper = mount(
  //     wrapper
  //       .find("Trigger")
  //       .instance()
  //       .getComponent()
  //   )
  //   const input = dropdownWrapper.find("input")
  //   act(() => {
  //     input.simulate("mousedown")
  //     input.simulate("mouseup")
  //     input.simulate("keydown", { key: "z", keyCode: 90 })
  //     input.simulate("change", { target: { value: "z" } })
  //     /**
  //      * runAllTimers 测试 Select.preventVisibleChange
  //      */
  //     jest.runAllTimers()
  //     wrapper.update()
  //     // 需要重新获取
  //     dropdownWrapper = mount(
  //       wrapper
  //         .find("Trigger")
  //         .instance()
  //         .getComponent()
  //     )
  //     console.log(dropdownWrapper.find("input").at(0).props(), "yijie")
  //     expect(
  //       dropdownWrapper
  //         .find(".adui-select-item-option")
  //         .at(0)
  //         .text()
  //     ).toBe("gongzhonghao")
  //     dropdownWrapper
  //       .find(".adui-select-item-option")
  //       .at(0)
  //       .simulate("click")
  //   })
  // })
})
