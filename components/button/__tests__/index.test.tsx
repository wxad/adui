import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Button from '..'

describe("Button", () => {
  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Button
        leftIcon="add"
        rightIcon="tick"
      >
        按钮
      </Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否支持 link button", () => {
    const wrapper = TestRenderer.create(
      <Button
        target="_blank"
        href="https://ad.weixin.qq.com"
      >
        link button
      </Button>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
