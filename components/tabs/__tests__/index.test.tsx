import * as React from "react"
import { act } from "react-dom/test-utils"
import TestRenderer from "react-test-renderer"
import { mount } from "enzyme"
import Tabs from ".."

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const { Tab } = Tabs

describe("Tabs", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("验证快照", () => {
    const wrapper0 = TestRenderer.create(
      <Tabs gutter={10}>
        <Tab title="1" value="1" />
      </Tabs>
    )
    const wrapper1 = TestRenderer.create(<Tabs>string</Tabs>)
    expect(wrapper0).toMatchSnapshot()
    expect(wrapper1).toMatchSnapshot()
  })

  it("验证 setIndicatorStyle 快照", () => {
    const wrapper0 = mount(
      <Tabs value="2">
        <Tab title="1" value="1" />
        <Tab title="2" value="2" />
      </Tabs>
    )
    const wrapper1 = mount(
      <Tabs>
        <Tab title="1" value="1" />
        <Tab title="2" value="2" />
      </Tabs>
    )
    act(() => {
      // 等待 0ms，这样才能触发 setIndicatorStyle 方法
      jest.advanceTimersByTime(0)
    })
    expect(wrapper0).toMatchSnapshot()
    expect(wrapper1).toMatchSnapshot()
  })

  it("是否能够内部驱动", () => {
    const wrapper = mount(
      <Tabs defaultValue="1">
        <Tab title="1" value="1" />
        <Tab title="2" value="2" />
      </Tabs>
    )
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual("1")
    wrapper.find("[role='tab']").at(1).simulate("click")
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual("2")
  })

  it("是否能受外部控制", () => {
    const wrapper0 = mount(
      <Tabs value="1">
        <Tab title="1" value="1" />
        <Tab title="2" value="2" />
      </Tabs>
    )
    expect(wrapper0.find("div").at(0).props()["data-value"]).toEqual("1")
    wrapper0.find("[role='tab']").at(1).simulate("click")
    expect(wrapper0.find("div").at(0).props()["data-value"]).toEqual("1")
  })
})
