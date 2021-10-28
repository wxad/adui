/* eslint-disable */
import * as React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import sinon from "sinon"
import Table from ".."

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const dataSource = [
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

export interface IBaseObject {
  [key: string]: any
}

describe("Table", () => {
  beforeAll(() => {
    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getBoundingClientRect`，之后运行的所有 `getBoundingClientRect` 都会返回这同一个值。
     */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 500,
        height: 600,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      }
    })
  })

  it("headerAffixed 检测", () => {
    const wrapper = mount(
      <Table dataSource={dataSource} headerAffixed>
        <Table.Column
          dataIndex="one"
          title="第一项"
          popover="表头提示内容"
          width="100px"
          fixed="left"
        />
        <Table.Column
          fixed="right"
          dataIndex="two"
          title="第er项"
          width={300}
        />
        <Table.Column
          dataIndex="s"
          title="第si项"
          width="10%"
          align="center"
          render={() => "这些撒大声地"}
        />
        <Table.Column dataIndex="three" title="第san项" />
        <Table.Column
          dataIndex="four"
          title="第si项"
          width={300}
          align="right"
        />
      </Table>
    )
    // @ts-ignore
    global.innerWidth = 500
    // @ts-ignore
    global.dispatchEvent(new Event("resize"))
    // @ts-ignore
    global.dispatchEvent(new Event("scroll"))
    wrapper.instance().handleMainTableScroll()
    wrapper.instance().componentWillUnmount()
  })

  // it("height prop 验证", () => {
  //   const stub = sinon.stub(console, 'error')
  //   const wrapper = mount(
  //     <Table
  //       dataSource={dataSource}
  //       height="500px"
  //     >
  //       <Table.Column
  //         dataIndex="one"
  //         title="第一项"
  //         popover="表头提示内容"
  //         width={100}
  //         fixed="left"
  //       />
  //     </Table>
  //   )
  //   expect(stub.calledOnce).toBe(true)
  //   stub.restore()
  // })

  it("height 与 headerAffixed 不能同时使用 验证", () => {
    const stub = sinon.stub(console, "error")
    mount(
      <Table dataSource={dataSource} height={500} headerAffixed>
        <Table.Column
          dataIndex="one"
          title="半角括号外(半角括号内测试)"
          popover="表头提示内容"
          width={100}
          fixed="left"
        />
      </Table>
    )
    expect(stub.calledOnce).toBe(true)
    stub.restore()
  })

  it("height 检测", () => {
    const wrapper = mount(
      <Table dataSource={dataSource} height={200}>
        <Table.Column
          dataIndex="one"
          title="第一项"
          popover="表头提示内容"
          width={100}
          fixed="left"
        />
        <Table.Column
          fixed="right"
          dataIndex="two"
          title="第er项"
          width={300}
        />
        <Table.Column
          dataIndex="s"
          title="第si项"
          width={300}
          align="center"
          render={() => "这些撒大声地"}
        />
        <Table.Column dataIndex="three" title="第san项" />
        <Table.Column
          dataIndex="four"
          title="第si项"
          width={300}
          align="right"
        />
      </Table>
    )
    // @ts-ignore
    global.innerWidth = 500
    // @ts-ignore
    global.innerHeight = 500
    // @ts-ignore
    global.dispatchEvent(new Event("resize"))
    // @ts-ignore
    global.dispatchEvent(new Event("scroll"))
    wrapper.instance().handleMainTableScroll()
  })

  // it("Column width prop 验证", () => {
  //   const stub = sinon.stub(console, 'error')
  //   const wrapper = mount(
  //     <Table
  //       dataSource={dataSource}
  //     >
  //       <Table.Column
  //         dataIndex="one"
  //         title="第一项"
  //         width={[]}
  //       />
  //     </Table>
  //   )
  //   expect(stub.calledOnce).toBe(true)
  //   stub.restore()
  // })

  it("Column width 在 fixed 时必须设置 验证", () => {
    const stub = sinon.stub(console, "error")
    mount(
      <Table dataSource={dataSource}>
        <Table.Column dataIndex="one" title="第一项" fixed="left" />
      </Table>
    )
    expect(stub.calledOnce).toBe(true)
    stub.restore()
  })

  it("loading 快照", () => {
    const wrapper = TestRenderer.create(
      <Table loading dataSource={dataSource}>
        <Table.Column dataIndex="one" title="第一项" fixed="left" />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("合并单元格快照", () => {
    const wrapper = TestRenderer.create(
      <Table
        dataSource={dataSource}
        getCellProps={(_, __, rowIndex, colIndex) => {
          if (rowIndex === 0 && colIndex === 0) {
            return {
              rowSpan: 2,
              colSpan: 2,
            }
          }
          if (rowIndex === 3 && colIndex === 2) {
            return {
              rowSpan: 2,
              colSpan: 1,
            }
          }
          if (rowIndex === 3 && colIndex === 3) {
            return {
              rowSpan: 2,
              colSpan: 1,
            }
          }
          if (rowIndex === 2 && colIndex === 0) {
            return {
              rowSpan: 1,
              colSpan: 1,
            }
          }
          return {}
        }}
      >
        <Table.Column dataIndex="one" title="第一项" fixed />
        <Table.Column dataIndex="two" title="第er项" fixed />
        <Table.Column dataIndex="three" title="第3项" align="center" />
        <Table.Column
          dataIndex="four"
          title="第四项"
          align="center"
          fixed="right"
        />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
