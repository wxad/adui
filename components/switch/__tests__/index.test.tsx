import React from "react"
import { mount } from "enzyme"
import TestRenderer from "react-test-renderer"
import Switch from ".."

// const SwitchMounter = () => {
//   const [checked, setChecked] = useState(true)
//   return <Switch checked={checked} onChange={bool => setChecked(bool)} />
// }

describe("Switch", () => {
  it("Switch 是否正确渲染", () => {
    const wrapper = TestRenderer.create(<Switch>children</Switch>)
    expect(wrapper).toMatchSnapshot()
  })
})

it("Switch 是否能内部驱动", () => {
  const onChange = jest.fn()
  const wrapper0 = mount(<Switch onChange={onChange} />)
  const wrapper1 = mount(<Switch defaultChecked onChange={onChange} />)
  wrapper0
    .find("span")
    .at(1)
    .simulate("click")
  expect(onChange).toHaveBeenCalledWith(true)

  expect(
    wrapper1
      .find("span")
      .at(0)
      .props()["aria-checked"]
  ).toEqual(true)
  wrapper1
    .find("span")
    .at(1)
    .simulate("click")
  expect(
    wrapper1
      .find("span")
      .at(0)
      .props()["aria-checked"]
  ).toEqual(false)
  expect(onChange).toHaveBeenCalledWith(false)
})
