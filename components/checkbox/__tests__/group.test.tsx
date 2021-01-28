import * as React from "react"
import TestRenderer from "react-test-renderer"
import { mount } from "enzyme"
import Checkbox from ".."

const { Group } = Checkbox

const GroupMounter = () => {
  const [value, setValue] = React.useState([])
  return (
    <Group value={value} onChange={setValue}>
      <Checkbox>children0</Checkbox>
      <Checkbox>children1</Checkbox>
    </Group>
  )
}

describe("Checkbox", () => {
  it("Group 是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Group>
        <Checkbox>children0</Checkbox>
        <Checkbox>children1</Checkbox>
      </Group>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("Group 是否能内部驱动", () => {
    const onChange = jest.fn()
    const wrapper0 = mount(
      <Group onChange={onChange}>
        <Checkbox>children0</Checkbox>
        <Checkbox>children1</Checkbox>
      </Group>
    )
    const wrapper1 = mount(
      <Group defaultValue={["children0"]} onChange={onChange}>
        <Checkbox>children0</Checkbox>
        <Checkbox>children1</Checkbox>
      </Group>
    )
    wrapper0.find("label").at(0).simulate("click")
    expect(onChange).toHaveBeenCalledWith(["children0"])
    wrapper0.find("label").at(1).simulate("click")
    expect(onChange).toHaveBeenCalledWith(["children0", "children1"])

    wrapper1.find("label").at(0).simulate("click")
    expect(onChange).toHaveBeenCalledWith([])
    wrapper1.find("label").at(1).simulate("click")
    expect(onChange).toHaveBeenCalledWith(["children1"])
  })

  it("Group 是否能外部控制", () => {
    const wrapper = mount(<GroupMounter />)
    wrapper.find("label").at(0).simulate("click")
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual([
      "children0",
    ])
  })

  it("Group 是否正确处理 value State", () => {
    // 确保优先判断 Prop defaultValue，如果存在默认值，则 Group 状态为此默认值
    const wrapper1 = mount(
      <Group defaultValue={["children0"]}>
        <Checkbox disabled>children0</Checkbox>
        <Checkbox value={27}>children1</Checkbox>
        <Checkbox checked>children2</Checkbox>
        <Checkbox checked value={3}>
          children3
        </Checkbox>
      </Group>
    )
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual([
      "children0",
    ])
    wrapper1.find("label").at(3).simulate("click")
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual([
      "children0",
      3,
    ])

    // 确保最优先判断 Prop value，如果存在 Prop value，则 Group 完全交由外部控制，内部状态无效。
    const wrapper2 = mount(
      <Group defaultValue={[123]} value={[27]}>
        <Checkbox disabled value={123}>
          children0
        </Checkbox>
        <Checkbox value={27}>children1</Checkbox>
        <Checkbox checked>children2</Checkbox>
        <Checkbox checked value={3}>
          children3
        </Checkbox>
      </Group>
    )
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27])
    wrapper2.find("label").at(3).simulate("click")
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27])
  })
})
