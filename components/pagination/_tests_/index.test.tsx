/* eslint-disable */
import React, { useState } from "react"
import { render, mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import sinon from "sinon"
import Pagination from ".."

const PaginationMounter = () => {
  const [current, setCurrent] = useState(1)
  return (
    <Pagination
      pageSize={10}
      current={current}
      total={99}
      onChange={(newCurrent) => setCurrent(newCurrent)}
      showButtonJumper
    />
  )
}

describe("Pagination", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Pagination
        align="right"
        defaultCurrent={1}
        pageSize={10}
        total={99}
        showButtonJumper
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("current Prop 是否能验证非整数", () => {
    const stub = sinon.stub(console, "error")
    render(<Pagination current={3.1} />)
    expect(stub.calledTwice).toEqual(true)
    stub.restore()
  })

  it("内部驱动", () => {
    const wrapper = mount(
      <Pagination
        align="right"
        defaultCurrent={5}
        pageSize={10}
        total={99}
        showButtonJumper
        showInputJumper
      />
    )
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(5)
    wrapper.find("button").at(1).simulate("click")
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(4)

    wrapper.find("button").at(0).simulate("click")
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(1)

    const input = wrapper.find("input")
    input.simulate("change", { target: { value: "3" } })
    input.simulate("keydown", { keyCode: 13 })
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(3)

    input.simulate("change", { target: { value: "你好" } })
    input.simulate("keydown", { keyCode: 13 })
  })

  it("外部驱动", () => {
    const wrapper1 = mount(
      <Pagination
        align="right"
        pageSize={10}
        current={1}
        total={99}
        showButtonJumper
      />
    )
    wrapper1.find("button").at(2).simulate("click")
    expect(wrapper1.find("div").at(0).props()["data-current"]).toEqual(1)

    wrapper1.find("button").at(3).simulate("click")
    expect(wrapper1.find("div").at(0).props()["data-current"]).toEqual(1)
  })

  const wrapper2 = mount(<PaginationMounter />)
  wrapper2.find("button").at(2).simulate("click")
  expect(wrapper2.find("div").at(0).props()["data-current"]).toEqual(2)
})
