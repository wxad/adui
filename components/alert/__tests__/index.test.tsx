/* eslint-disable */
import React, { useState } from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import async from "async"
import Alert from ".."

const AlertMounter = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <Alert
      expanded={expanded}
      expandContent="1"
      onExpandChange={(bool) => setExpanded(bool)}
      text="2"
      title="3"
    />
  )
}

function timeout(ms: number) {
  return (done: () => void) => {
    setTimeout(done, ms)
  }
}

describe("Alert", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Alert text="这是一条提示信息" title="提醒标题" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("展开内部驱动", () => {
    const wrapper = mount(
      <Alert defaultExpanded expandContent="1" text="2" title="3" />
    )
    expect(wrapper.text().includes("收起")).toBe(true)
    wrapper.find(".adui-alert-expand").simulate("click")
    expect(wrapper.text().includes("收起")).toBe(false)
  })

  it("展开外部控制", () => {
    const wrapper = mount(<AlertMounter />)
    expect(wrapper.text().includes("收起")).toBe(true)
    wrapper.find(".adui-alert-expand").simulate("click")
    expect(wrapper.text().includes("收起")).toBe(false)
  })

  it("验证关闭", (done) => {
    const wrapper = mount(
      <Alert closable text="这是一条提示信息" title="提醒标题" />
    )
    wrapper.find(".adui-alert-closeIcon").at(0).simulate("click")
    async.series(
      [
        timeout(350),
        (next: () => void) => {
          expect(wrapper.text()).toBe("")
          next()
        },
      ],
      done
    )
  })
})
