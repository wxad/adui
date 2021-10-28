/* eslint-disable */
import * as React from "react"
import { render, mount } from "enzyme"
import PopTrigger from ".."

class TriggerMounter extends React.Component {
  state = {
    trigger: null,
  }

  private trigger: any

  componentDidMount = () => {
    if (this.trigger) {
      this.setState({
        trigger: this.trigger,
      })
    }
  }

  render() {
    return (
      <PopTrigger
        onPopupAlign={() => {}}
        onPopupVisibleChange={() => {}}
        ref={(node) => {
          if (node) {
            this.trigger = node
          }
          return null
        }}
        popup="asd"
      >
        按钮
      </PopTrigger>
    )
  }
}

describe("PopTrigger", () => {
  it("是否正确渲染", () => {
    const wrapper0 = render(
      <PopTrigger
        onPopupAlign={() => {}}
        onPopupVisibleChange={() => {}}
        popup="asd"
      >
        按钮
      </PopTrigger>
    )
    expect(wrapper0).toMatchSnapshot()
  })

  it("是否能拿到 trigger", () => {
    const wrapper = mount(<TriggerMounter />)
    expect(typeof wrapper.instance().state.trigger).toEqual("object")
  })
})
