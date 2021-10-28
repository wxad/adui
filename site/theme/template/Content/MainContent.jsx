/* eslint-disable */
import React from "react"
import ComponentDoc from "./ComponentDoc"
import JsonML from "jsonml.js/lib/utils"

export default class MainContent extends React.Component {
  render() {
    const { localizedPageData, demos } = this.props

    const contentChildren = JsonML.getChildren(localizedPageData.content)
    const propsStartIndex = contentChildren.findIndex(
      (node) =>
        JsonML.getTagName(node) === "h2" &&
        /^Props/.test(JsonML.getChildren(node)[0])
    )

    const alertStartIndex = contentChildren.findIndex(
      (node) =>
        JsonML.getTagName(node) === "h2" &&
        /^Alert/.test(JsonML.getChildren(node)[0])
    )

    if (alertStartIndex > -1 && propsStartIndex > -1) {
      const alert = contentChildren.slice(alertStartIndex + 1, propsStartIndex)
      localizedPageData.alert = alert
      const content = contentChildren.slice(0, alertStartIndex)
      localizedPageData.content = ["section"].concat(content)

      const props = contentChildren.slice(propsStartIndex + 1)
      localizedPageData.props = ["section"].concat(props)
    } else if (propsStartIndex > -1) {
      const content = contentChildren.slice(0, propsStartIndex)
      localizedPageData.content = ["section"].concat(content)

      const props = contentChildren.slice(propsStartIndex + 1)
      localizedPageData.props = ["section"].concat(props)
    }

    // ComponentDoc key 要解决的问题是：让组件在 url 变化时，重置 state
    return (
      <ComponentDoc
        key={this.props.params.children}
        doc={localizedPageData}
        demos={demos}
        {...this.props}
      />
    )
  }
}
