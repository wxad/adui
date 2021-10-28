import * as React from "react"
import TestRenderer from "react-test-renderer"
import Breadcrumb from ".."

describe("Breadcrumb", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Breadcrumb>
        <Breadcrumb.Item href="https://ad.weixin.qq.com">
          页面一
        </Breadcrumb.Item>
        <Breadcrumb.Item>页面二</Breadcrumb.Item>
        <Breadcrumb.Item>页面三</Breadcrumb.Item>
      </Breadcrumb>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
