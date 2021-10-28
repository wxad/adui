import React, { useState } from "react"
import { render, mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import * as sinon from "sinon"
import Table from ".."

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const { Column } = Table

const filters = [
  {
    text: "朋友圈广告",
    value: "1",
  },
  {
    text: "公众号广告",
    value: "2",
  },
]

const FilterMounter = () => {
  const [filteredValue, set] = useState<any>(null)

  return (
    <Table
      dataSource={[
        {
          filter: "filter",
        },
      ]}
    >
      <Column
        title="筛选"
        dataIndex="filter"
        filters={filters}
        filteredValue={filteredValue}
        onFilter={(argFilteredValue) => set(argFilteredValue)}
      />
    </Table>
  )
}

describe("筛选功能", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  // it("onFilter Prop 是否能验证 function", () => {
  //   const stub = sinon.stub(console, 'error')
  //   const wrapper = render(
  //     <Table>
  //       <Table.Column
  //         title="title"
  //         onFilter="string"
  //       />
  //     </Table>
  //   )
  //   expect(stub.callCount).toBe(1)
  //   (console as IConsole).error.restore()
  // })

  it("onFilter 不能与 onSort 共用", () => {
    const stub = sinon.stub(console, "error")
    render(
      <Table>
        <Table.Column title="title" onFilter={() => {}} onSort={() => {}} />
      </Table>
    )
    expect(stub.calledOnce).toEqual(true)
    stub.restore()
  })

  it("是否正确渲染", () => {
    const onFilter = jest.fn()
    const wrapper = TestRenderer.create(
      <Table
        dataSource={[
          {
            filter: "filter",
          },
        ]}
      >
        <Column
          title="筛选"
          dataIndex="filter"
          filters={filters}
          onFilter={onFilter}
        />
      </Table>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("是否能够内部驱动", () => {
    const onFilter = jest.fn()
    const wrapper = mount(
      <Table
        dataSource={[
          {
            filter: "filter",
          },
        ]}
      >
        <Column
          title="筛选"
          dataIndex="filter"
          filters={filters}
          onFilter={onFilter}
        />
      </Table>
    )
    const th = wrapper.find("[role='columnheader']").at(0)
    th.simulate("click")
    const dropdownWrapper = mount(
      wrapper.find("Trigger").instance().getComponent()
    )
    dropdownWrapper.find("label").at(1).simulate("click")
    // expect(
    //   wrapper
    //     .find(".adui-table-filter")
    //     .at(0)
    //     .props()["data-value"]
    // ).toEqual(["1"])
    expect(onFilter).toHaveBeenCalledWith(["1"])
    dropdownWrapper.find("label").at(2).simulate("click")
    // expect(
    //   wrapper
    //     .find(".adui-table-filter")
    //     .at(0)
    //     .props()["data-value"]
    // ).toEqual(["2"])
    expect(onFilter).toHaveBeenCalledWith(["2"])
    /**
     * 不知道为什么进不到这个逻辑里，导致 TableFilter 的 Statements 不能 100%
     * if (filteredValue === "all") {
     *      onFilter([])
     * }
     */
    dropdownWrapper.find("label").at(0).simulate("click")
    // jest.runAllTimers()
  })

  it("是否能够外部控制", () => {
    const wrapper = mount(<FilterMounter />)
    const th = wrapper.find("[role='columnheader']").at(0)
    th.simulate("click")
    const dropdownWrapper = mount(
      wrapper.find("Trigger").instance().getComponent()
    )
    dropdownWrapper.find("label").at(0).simulate("click")
    expect(
      wrapper.find(".adui-table-filter").at(0).props()["data-value"]
    ).toEqual(["all"])
    // dropdownWrapper
    //   .find("label")
    //   .at(2)
    //   .simulate("click")
    // expect(
    //   wrapper
    //     .find(".adui-table-filter")
    //     .at(0)
    //     .props()["data-value"]
    // ).toEqual(["2"])
  })
})
