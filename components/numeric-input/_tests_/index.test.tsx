/* eslint-disable */
import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import NumericInput from '..'

// class Mounter extends React.Component<any, any> {
//   constructor(props) {
//     super(props)

//     this.state = {
//       value: 14,
//     }
//   }

//   render() {
//     const { value } = this.state
//     return (
//       <NumericInput
//         autoFocus
//         style={{ width: "100px" }}
//         value={value}
//         step={.01}
//         max={100}
//         min={0}
//         onChange={value => this.setState({ value })}
//       />
//     )
//   }
// }

describe("NumericInput", () => {

  beforeAll(() => {
    /**
     * https://stackoverflow.com/a/40006663
     * 通过 mock `getBoundingClientRect`，之后运行的所有 `getBoundingClientRect` 都会返回这同一个值。
     */
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      }
    })
  })

  it("快照验证", () => {
    const wrapper = TestRenderer.create(
      <NumericInput />
    )
    expect(wrapper).toMatchSnapshot()
  })
})