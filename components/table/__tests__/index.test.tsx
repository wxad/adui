import * as React from "react"
import TestRenderer from "react-test-renderer"
import Table from ".."

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const ds = [
  {
    one: "阿萨德",
    two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    three: "阿萨德阿萨德阿萨德阿萨德阿萨德",
  },
  {
    one: "阿萨德",
    two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    three: "阿萨德阿萨德阿萨德阿萨德阿萨德",
  },
  {
    one: "阿萨德",
    two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    three: "阿萨德阿萨德阿萨德阿萨德阿萨德",
  },
  {
    one: "阿萨德",
    two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    three: "阿萨德阿萨德阿萨德阿萨德阿萨德",
  },
  {
    one: "阿萨德",
    two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
    three: "阿萨德阿萨德阿萨德阿萨德阿萨德",
  },
]

describe("Table", () => {
  it("快照核对", () => {
    const wrapper = TestRenderer.create(
      <Table
        dataSource={ds}
        columns={[
          {
            title: "分组好",
            dataIndex: "asd",
            render: (row) => row.four,
          },
        ]}
        getCellClassName={() => "asd"}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
