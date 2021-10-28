import * as React from "react"
import TestRenderer from "react-test-renderer"
import Grid from ".."

describe("Grid", () => {
  it("是否正确渲染", () => {
    // @ts-ignore
    const grid = <Grid />
    const wrapper = TestRenderer.create(
      <div>
        {grid}
        <Grid.Row gutter={16}>
          <Grid.Col span={4} />
          <Grid.Col span={6} />
          <Grid.Col span={2} />
        </Grid.Row>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
