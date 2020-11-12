import * as React from "react"
import { mount } from "enzyme"
import Table from ".."

const { Column } = Table

class SortMounter extends React.Component {
  state = {
    sortOrder: undefined,
  }

  render() {
    const { sortOrder } = this.state
    return (
      <Table
        dataSource={[
          {
            order: "order",
          },
        ]}
      >
        <Column
          title="排序"
          dataIndex="order"
          sortOrder={sortOrder}
          onSort={argSortOrder => this.setState({ sortOrder: argSortOrder })}
        />
      </Table>
    )
  }
}

describe("排序功能", () => {
  it("是否能够内部驱动", () => {
    const onSort = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={[
          {
            order: "order",
          },
        ]}
      >
        <Column title="排序" dataIndex="order" onSort={onSort} />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
    const th = wrapper.find("[role='columnheader']").at(0)
    th.simulate("click")
    expect(onSort).toHaveBeenCalledWith("asc")
    th.simulate("click")
    expect(onSort).toHaveBeenCalledWith("desc")
    th.simulate("click")
    expect(onSort).toHaveBeenCalledWith("")
  })

  // it("onSort Prop 是否能验证 function", () => {
  //   const stub = sinon.stub(console, 'error')
  //   const wrapper = render(
  //     <Table>
  //       <Table.Column
  //         title="title"
  //         onSort="string"
  //       />
  //     </Table>
  //   )
  //   expect(stub.callCount).toBe(1)
  //   stub.restore()
  // })

  it("是否能够外部控制", () => {
    const wrapper = mount(<SortMounter />)
    const th = wrapper.find("[role='columnheader']").at(0)
    th.simulate("click")
    expect(
      wrapper
        .find(".adui-table-sort")
        .at(0)
        .props()["data-sort"]
    ).toBe("asc")
    th.simulate("click")
    expect(
      wrapper
        .find(".adui-table-sort")
        .at(0)
        .props()["data-sort"]
    ).toBe("desc")
    th.simulate("click")
    expect(
      wrapper
        .find(".adui-table-sort")
        .at(0)
        .props()["data-sort"]
    ).toBe("")
  })

  it("是否支持键盘操作", () => {
    const onSort = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={[
          {
            order: "order",
          },
        ]}
      >
        <Column title="排序" dataIndex="order" onSort={onSort} />
      </Table>
    )
    wrapper
      .find("[role='columnheader']")
      .at(0)
      .simulate("keyPress", { key: "Enter", keyCode: 13 })
    expect(onSort).toHaveBeenCalled()
  })
})
