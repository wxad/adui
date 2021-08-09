/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import JsonML from "jsonml.js/lib/utils"
import LZString from "lz-string"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Alert, Icon, Motion } from "componentPath"
import DemoRenderer from "./DemoRenderer"
import styles from "./ComponentDoc.scss"

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.form = null
    this.state = {
      contents: null,
      pre: null,
      realCode: null,
      expanded: props.defaultExpanded || false,
    }
  }

  componentDidMount = () => {
    const { content } = this.props
    console.log(content, "yijie")
    const contentChildren = JsonML.getChildren(content)
    const preStartIndex = contentChildren.findIndex(
      (node) => JsonML.getTagName(node) === "pre"
    )
    // 只能在 h2 中使用 Alert
    const alertStartIndex = contentChildren.findIndex(
      (node) => JsonML.getTagName(node) === "h2"
    )

    let alert
    let contents
    let pre
    let realCode

    if (preStartIndex > -1) {
      const content = contentChildren.slice(0, preStartIndex)
      contents = ["section"].concat(content)

      const code =
        alertStartIndex > -1
          ? contentChildren.slice(preStartIndex, alertStartIndex)
          : contentChildren.slice(preStartIndex)
      pre = ["section"].concat(code)

      if (pre[1][2][1]) {
        realCode = pre[1][2][1]
      }
    }
    if (alertStartIndex > -1) {
      alert = contentChildren.slice(alertStartIndex + 1)
    }

    this.setState({
      alert,
      contents,
      pre,
      realCode,
    })
  }

  render() {
    const { utils } = this.props
    const { alert, contents, pre, realCode, expanded } = this.state
    // 正则处理代码
    let codeFinal = null
    if (realCode) {
      const codeArrayFirst = new Set(realCode.match(/<[A-Z]\w*/g))
      const codeSecond = [...codeArrayFirst].join("").match(/[a-z-A-Z]+/g)
      if (codeSecond) {
        codeFinal = codeSecond.filter((item) => item !== "React")
      }
    }

    // codeSandBox的html模板
    const html = `<div id="container" style="padding: 24px"></div>`

    function compress(string) {
      return LZString.compressToBase64(string)
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, "") // Remove ending '='
    }
    const codesanboxPrefillConfig = {
      files: {
        "package.json": {
          content: {
            dependencies: {
              react: "latest",
              "react-dom": "latest",
              adui: "latest",
            },
          },
        },
        "index.js": {
          content: `import React, { ${
            codeFinal && realCode.includes("useState") ? "useState," : ""
          } ${
            codeFinal && realCode.includes("useEffect") ? "useEffect," : ""
          } ${
            codeFinal && realCode.includes("useRef") ? "useRef," : ""
          } } from 'react'
import ReactDOM from 'react-dom'
import { ${
            codeFinal
              ? `${codeFinal.join(", ")}${
                  realCode.includes("Dialog") ? ", Dialog" : ""
                }${realCode.includes("Message") ? ", Message" : ""}`
              : ""
          } } from 'adui'
import "adui/adui-tailwind-build.css"

const AduiExample = () => {
${realCode}
}
ReactDOM.render(<AduiExample />, document.getElementById('container'))
`,
        },
        "index.html": {
          content: html,
        },
      },
    }

    let id = ""
    if (contents && contents[1] && contents[1][1] && contents[1][1][1]) {
      id = contents[1][1][1]
    }

    return (
      <section>
        <div className={styles.demo}>
          {contents &&
            utils.toReactComponent(
              ["section", { className: "markdown" }].concat(
                JsonML.getChildren(contents)
              )
            )}
          <div className={styles.showCase} id={id}>
            {pre && (
              <DemoRenderer
                codes={JsonML.getChildren(pre)[0][2][1]}
                className={styles.demoWrapper}
              />
            )}
            <div className={styles.demoCodesButton}>
              <div
                className={styles.lookCode}
                onClick={() => this.setState({ expanded: !expanded })}
              >
                <Icon icon="code" />
                {expanded ? "收起代码" : "查看代码"}
              </div>
              <div className={styles.spacing}></div>
              <form
                action="https://codesandbox.io/api/v1/sandboxes/define"
                method="POST"
                target="_blank"
                ref={(element) => {
                  this.form = element
                }}
              >
                <input
                  type="hidden"
                  name="parameters"
                  value={compress(JSON.stringify(codesanboxPrefillConfig))}
                />
                <div
                  className={styles.codeSandBox}
                  onClick={() => {
                    this.form.submit()
                  }}
                >
                  <Icon icon="code-sand-box" />
                  CodeSandBox
                </div>
              </form>
            </div>
            <Motion transition="slide" component="div">
              {expanded && (
                <div className={styles.demoCodes}>
                  {pre && utils.toReactComponent(pre)}
                </div>
              )}
            </Motion>
          </div>
        </div>
        {alert ? (
          <Alert
            style={{ marginTop: "-20px", marginBottom: "36px" }}
            className={styles.alert}
            title={alert[0][1]}
            text={utils.toReactComponent(
              ["section", { className: "markdown" }].concat(
                JsonML.getChildren(alert[1])
              )
            )}
          />
        ) : null}
      </section>
    )
  }
}
