import * as React from "react"
import TestRenderer from "react-test-renderer"
import Form from ".."

describe("Form", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Form>
        <Form.Item label="名称" labelHelper="名称" labelAlign="left">
          dondondong
          <Form.Tip>这表示名称</Form.Tip>
        </Form.Item>
        <Form.Item label="性别" labelAlign="right">
          男
        </Form.Item>
        <Form.Item label="职业" labelAlign="center">
          设计师
        </Form.Item>
      </Form>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
