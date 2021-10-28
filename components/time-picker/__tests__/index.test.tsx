// @ts-nocheck
import * as React from "react"
import TestRenderer from "react-test-renderer"
import { act } from "react-dom/test-utils"
import { mount } from "enzyme"
import async from "async"
import TimePicker from ".."

class TimePickerTest extends React.Component {
  state = {
    value: "09:00",
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <TimePicker
          closeOnSelect
          value={value}
          onChange={(val) => this.setState({ value: val })}
          minTime="08:40"
          maxTime="09:20"
          ref={(node) => {
            if (node) {
              this.picker = node
            }
            return null
          }}
        />
      </div>
    )
  }
}

function timeout(ms: number) {
  return (done: () => void) => {
    setTimeout(done, ms)
  }
}

describe("TimePicker", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it("是否正确渲染", () => {
    const wrapper = TestRenderer.create(<TimePicker />)
    expect(wrapper).toMatchSnapshot()
  })

  it("各种情况快照核对", () => {
    const wrapper0 = TestRenderer.create(
      <TimePicker size="mini" theme="light" onlyHour disabled />
    )
    expect(wrapper0).toMatchSnapshot()
  })

  it("输入事件", () => {
    const wrapper = mount(<TimePicker />)
    const input = wrapper.find("input")
    input.simulate("focus")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
    input.simulate("change", { target: { value: " " } })
    input.simulate("change", { target: { value: "16:07" } })
    expect(wrapper.find("Input").props().value).toEqual("16:07")
    input.simulate("keydown", { keyCode: 13 })
    expect(wrapper.find("Popover").props().visible).toEqual(false)
  })

  it("点击事件", () => {
    const wrapper = mount(<TimePickerTest />)

    expect(wrapper.find("Popover").props().visible).toEqual(false)

    wrapper.find("input").simulate("focus")
    expect(wrapper.find("Popover").props().visible).toEqual(true)

    act(() => {
      wrapper.find(".adui-time-item").at(0).simulate("click")
      jest.advanceTimersByTime(50)
      wrapper.update()
      expect(wrapper.find("Input").props().value).toEqual("08:40")

      wrapper.find(".adui-time-item").at(42).simulate("click")
      wrapper.update()
      jest.advanceTimersByTime(50)
      expect(wrapper.find("Input").props().value).toEqual("08:40")

      wrapper.find("input").simulate("change", { target: { value: "07:40" } })
      wrapper.find("input").simulate("change", { target: { value: "08:4" } })
      wrapper.update()
      expect(wrapper.find("Input").props().value).toEqual("08:40")
    })

    // act(() => {
    //   wrapper
    //     .find(".adui-time-item")
    //     .at(1)
    //     .simulate("click")
    //   wrapper.update()
    //   jest.advanceTimersByTime(350)
    //   expect(wrapper.find("Input").props().value).toEqual("09:20")
    //   done()
    // })

    // act(() => {
    //   wrapper
    //     .find(".adui-time-item")
    //     .at(1)
    //     .simulate("click")
    //   wrapper.update()
    //   expect(wrapper.find("Input").props().value).toEqual("09:20")
    // })

    // act(() => {
    //   wrapper
    //     .find(".adui-time-item")
    //     .at(0)
    //     .simulate("click")
    //   wrapper.update()
    //   expect(wrapper.find("Input").props().value).toEqual("08:40")
    // })
  })

  it("内部驱动", () => {
    const wrapper = mount(<TimePicker defaultValue="09:20" />)
    const input = wrapper.find("input")
    input.simulate("focus")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
    wrapper.find(".adui-time-item").at(0).simulate("click")
    expect(wrapper.find("Input").props().value).toEqual("00:20")
  })

  it("外部控制", () => {
    const wrapper = mount(<TimePicker value="09:00" onlyHour />)
    const input = wrapper.find("input")
    input.simulate("focus")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
    wrapper.find(".adui-time-item").at(0).simulate("click")
    expect(wrapper.find("Input").props().value).toEqual("09:00")
  })

  it("测试禁用", () => {
    const wrapper = mount(<TimePicker disabled />)
    const input = wrapper.find("input")
    input.simulate("click")
    expect(wrapper.find("Popover").props().visible).toEqual(false)
  })

  it("测试最大时间和最小时间", () => {
    const wrapper = mount(
      <TimePicker minTime="09:00" maxTime="09:20" defaultValue="09:10" />
    )
    const input = wrapper.find("input")
    input.simulate("change", { target: { value: "09:30" } })
    input.simulate("focus")
    expect(wrapper.find("Popover").props().visible).toEqual(true)
  })
})
