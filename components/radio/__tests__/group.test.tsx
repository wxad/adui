import * as React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Radio from ".."

const { Group } = Radio

describe("Radio", () => {
  it("Group 是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Group size="large">
        <Radio>children0</Radio>
        <Radio>children1</Radio>
      </Group>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("Group 是否能内部驱动", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(
      <Group onChange={onChange}>
        <Radio>children0</Radio>
        <Radio>children1</Radio>
      </Group>
    )
    const wrapper1 = mount(
      <Group defaultValue="children0" onChange={onChange}>
        <Radio>children0</Radio>
        <Radio>children1</Radio>
      </Group>
    )
    wrapper0.find("label").at(0).simulate("click")
    expect(onChange).toHaveBeenCalledWith("children0")
    wrapper0.find("label").at(1).simulate("click")
    expect(onChange).toHaveBeenCalledWith("children1")

    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(
      "children0"
    )
    wrapper1.find("label").at(1).simulate("click")
    expect(onChange).toHaveBeenCalledWith("children1")
  })

  it("Group 是否正确处理 value State", () => {
    // 确保优先判断 Prop defaultValue，如果存在默认值，则 Group 状态为此默认值
    const wrapper1 = mount(
      <Group defaultValue="children0">
        <Radio disabled>children0</Radio>
        <Radio value={27}>children1</Radio>
        <Radio checked value={3}>
          children2
        </Radio>
      </Group>
    )
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(
      "children0"
    )
    wrapper1.find("label").at(2).simulate("click")
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(3)

    // 确保最优先判断 Prop value，如果存在 Prop value，则 Group 完全交由外部控制，内部状态无效。
    const wrapper2 = mount(
      <Group defaultValue={123} value={27}>
        <Radio disabled value={123}>
          children0
        </Radio>
        <Radio value={27}>children1</Radio>
        <Radio checked value={3}>
          children2
        </Radio>
      </Group>
    )
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual(27)
    wrapper2.find("label").at(2).simulate("click")
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual(27)
  })
})
