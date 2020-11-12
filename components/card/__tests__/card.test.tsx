import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Card from '..'

describe("Card", () => {
  it("Card 是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Card>
        <Card.Header
          title="title"
          subTitle="title"
        >
          children
        </Card.Header>
        children
      </Card>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
