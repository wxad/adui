import * as React from "react"
import TestRenderer from "react-test-renderer"
import Suggest from ".."

const { Option } = Suggest

describe("Suggest", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("Suggest 是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Suggest value="1" onSearch={() => {}}>
        <Option value="1">pengyouquan</Option>
        <Option value="2">gongzhonghao</Option>
      </Suggest>
    )
    expect(wrapper).toMatchSnapshot()
  })

  // it("Suggest 搜索功能", () => {
  //   const wrapper = mount(
  //     <Suggest
  //       onSearch={val => {}}
  //     >
  //       <Option value={1}>pengyouquan</Option>
  //       <Option value={2}>gongzhonghao</Option>
  //     </Suggest>
  //   )
  //   const input = wrapper.find(".adui-suggest-search__field")
  //   input.simulate("mousedown")
  //   input.simulate("mouseup")
  //   input.simulate("keydown", {key: "z", keyCode: 90 })
  //   input.simulate("change", { target: { value: "z" } })
  //   jest.runAllTimers()
  // })
})
