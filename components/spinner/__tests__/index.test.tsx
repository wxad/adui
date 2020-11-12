import * as React from "react"
import { render } from "enzyme"
import TestRenderer from "react-test-renderer"
import sinon from "sinon"
import Spinner from ".."

describe("Spinner", () => {
  it("Spinner 是否正确渲染", () => {
    const wrapper = TestRenderer.create(
      <Spinner color="#00bb9c">children</Spinner>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("value Prop 是否能验证 [0, 1] 外的数字", () => {
    const stub = sinon.stub(console, "error")
    render(<Spinner value={2} />)
    expect(stub.calledOnce).toEqual(true)
    stub.restore()
  })

  it("各情况快照核对", () => {
    const wrapper0 = TestRenderer.create(<Spinner size="mini" />)
    const wrapper1 = TestRenderer.create(<Spinner size="small" />)
    const wrapper2 = TestRenderer.create(<Spinner size="medium" />)
    const wrapper3 = TestRenderer.create(<Spinner size="large" />)
    const wrapper4 = TestRenderer.create(
      <Spinner value={0.27} text="指定进度" />
    )

    expect(wrapper0).toMatchSnapshot()
    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
    expect(wrapper3).toMatchSnapshot()
    expect(wrapper4).toMatchSnapshot()
  })
})
