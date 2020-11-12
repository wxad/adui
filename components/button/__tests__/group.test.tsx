import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Button from '..'

describe("Button.Group", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Button.Group
        size="large"
      >
        <Button>按钮一</Button>
        <Button>按钮二</Button>
      </Button.Group>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
