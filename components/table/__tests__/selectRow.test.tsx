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

class RadioMounter extends React.Component {
  state = {
    keys: null,
  }

  render() {
    const { keys } = this.state
    return (
      <Table
        dataSource={dataSource}
        selectedRowKeys={keys}
        selectMultiple={false}
        onSelectChange={(args) => this.setState({ keys: args })}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
  }
}

describe("disabled 验证", () => {
  it("单选", () => {
    const onSelectChange = jest.fn()
    /**
     * 模拟前两项禁止，其中一个为未选中，另一个为已选中
     */
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        onSelectChange={onSelectChange}
        defaultSelectedRowKeys={[1]}
        selectMultiple={false}
        getSelectProps={(row) => {
          if (row) {
            if (row.key === 0 || row.key === 1) {
              return {
                disabled: true,
              }
            }
          }
          return {}
        }}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    wrapper.find(".adui-radio-indicator").at(0).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1])
    wrapper.find(".adui-radio-indicator").at(1).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1])
    wrapper.find(".adui-radio-indicator").at(2).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([2])
  })

  it("多选", () => {
    const onSelectChange = jest.fn()
    /**
     * 模拟前两项禁止，其中一个为未选中，另一个为已选中
     */
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        onSelectChange={onSelectChange}
        defaultSelectedRowKeys={[1, "多余项"]}
        selectMultiple
        getSelectProps={(row) => {
          if (row) {
            if (row.key === 0 || row.key === 1) {
              return {
                disabled: true,
              }
            }
          }
          return {}
        }}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    // 多选时找到的第一个元素是全选框
    wrapper.find(".adui-checkbox-indicator").at(0).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([
      1,
      "多余项",
      2,
    ])
    wrapper.find(".adui-checkbox-indicator").at(0).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项"])
    wrapper.find(".adui-checkbox-indicator").at(3).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([
      1,
      "多余项",
      2,
    ])
    wrapper.find(".adui-checkbox-indicator").at(3).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项"])
  })
})

describe("base", () => {
  it("快照核对", () => {
    const wrapper = TestRenderer.create(
      <Table
        dataSource={dataSource}
        defaultSelectedRowKeys={[1]}
        selectMultiple={false}
        onSelectChange={() => {}}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否能内部驱动", () => {
    const onSelectChange = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        onSelectChange={onSelectChange}
        defaultSelectedRowKeys={[1]}
        selectMultiple={false}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1])
    wrapper.find(".adui-radio-indicator").at(0).simulate("click")
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([0])
  })

  it("是否能外部控制", () => {
    const onSelectChange = jest.fn()
    const wrapper0 = mount(
      <Table
        dataSource={dataSource}
        onSelectChange={onSelectChange}
        selectedRowKeys={[1]}
        selectMultiple={false}
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    expect(wrapper0.find("Table").state().selectedRowKeys).toEqual([1])
    wrapper0.find(".adui-radio-indicator").at(0).simulate("click")
    expect(wrapper0.find("Table").state().selectedRowKeys).toEqual([1])

    const wrapper1 = mount(<RadioMounter />)
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([])
    wrapper1.find(".adui-radio-indicator").at(0).simulate("click")
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([0])
  })

  it("是否支持 selectOnRowClick", () => {
    const onSelectChange = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={dataSource}
        defaultSelectedRowKeys={[1]}
        onSelectChange={onSelectChange}
        selectOnRowClick
      >
        <Column title="one" dataIndex="one" />
      </Table>
    )
    wrapper.find('[role="row"]').at(0).simulate("click")
    expect(onSelectChange).toHaveBeenCalledWith([1, 0])
  })
})
