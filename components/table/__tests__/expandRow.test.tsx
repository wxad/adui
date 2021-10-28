import * as React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Table from ".."

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const { Column } = Table

const dataSource = [
  {
    key: 0,
    one: "第一项",
  },
  {
    key: 1,
    one: "第二项",
  },
  {
    key: 2,
    one: "第三项",
  },
]

class ExpandMounter extends React.Component {
  state = {
    keys: null,
  }

  render() {
    const { keys } = this.state
    return (
      <Table
        dataSource={dataSource}
        expandedRowKeys={keys}
        onExpandChange={(argKeys) => this.setState({ keys: argKeys })}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
  }
}

describe("base", () => {
  it("快照核对", () => {
    const wrapper = TestRenderer.create(
      <Table
        dataSource={dataSource}
        defaultExpandedRowKeys={[1]}
        onExpandChange={() => {}}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否能内部驱动", () => {
    const onExpandChange = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        onExpandChange={onExpandChange}
        defaultExpandedRowKeys={[1]}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper.find("Table").state().expandedRowKeys).toEqual([1])
    wrapper.find("Icon").at(0).simulate("click")
    expect(wrapper.find("Table").state().expandedRowKeys).toEqual([1, 0])
  })

  it("是否能外部控制", () => {
    const onExpandChange = jest.fn()
    const wrapper0 = mount(
      <Table
        dataSource={dataSource}
        onExpandChange={onExpandChange}
        expandedRowKeys={[1]}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper0.find("Table").state().expandedRowKeys).toEqual([1])
    wrapper0.find("Icon").at(0).simulate("click")
    expect(wrapper0.find("Table").state().expandedRowKeys).toEqual([1])

    const wrapper1 = mount(<ExpandMounter />)
    wrapper1.find("Icon").at(0).simulate("click")
    expect(wrapper1.find("Table").state().expandedRowKeys).toEqual([0])
    wrapper1.find("Icon").at(0).simulate("click")
    expect(wrapper1.find("Table").state().expandedRowKeys).toEqual([])
  })

  it("是否支持 expandOnRowClick", () => {
    const onExpandChange = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        defaultExpandedRowKeys={[1]}
        onExpandChange={onExpandChange}
        expandOnRowClick
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    wrapper.find('[role="row"]').at(0).simulate("click")
    expect(onExpandChange).toHaveBeenCalledWith([1, 0])
  })
})
