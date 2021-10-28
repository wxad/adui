import * as React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Icon from ".."

describe("Icon", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Icon size={20} icon="add" color="#00bb9c" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否正确回调 onClick", () => {
    const onClick = jest.fn()
    const wrapper = mount(<Icon icon="delete" onClick={onClick} />)
    wrapper.find("svg").at(0).simulate("click")
    expect(onClick).toHaveBeenCalled()
  })
})
