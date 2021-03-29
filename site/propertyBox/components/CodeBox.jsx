import React from "react"
import PropTypes from "prop-types"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import styles from "./propertyBox.scss"
import { Button } from "../../../components"

export default class CodeBox extends React.Component {
  static timer = null

  static propTypes = {
    /**
     * 代码
     */
    codes: PropTypes.node.isRequired,
  }

  state = {
    copied: false,
  }

  handleCopy = () => {
    this.textArea.select()
    document.execCommand("copy")
    this.setState({ copied: true })
  }

  handleMouseEnter = () => {
    clearTimeout(this.timer)
  }

  handleMouseLeave = () => {
    this.timer = setTimeout(() => {
      this.setState({
        copied: false,
      })
    }, 1000)
  }

  render() {
    const { codes } = this.props

    const { copied } = this.state

    const replacedCodes = codes.replace(/\n\s*\n/g, "\n")

    return (
      <div className={styles.codes}>
        <SyntaxHighlighter
          wrapLines
          customStyle={{ backgroundColor: "transparent" }}
          linenumberstyle={{ color: "#bab6b6" }}
          className={styles.highlight}
          language="jsx"
        >
          {replacedCodes}
        </SyntaxHighlighter>
        <textarea
          ref={(textarea) => {
            this.textArea = textarea
          }}
          value={replacedCodes}
          readOnly
          style={{
            position: "absolute",
            top: "-9999px",
          }}
        />
        <Button
          className={styles.copyBtn}
          leftIcon={copied ? "tick-circle" : "copy-outlined"}
          intent={copied ? "primary" : "normal"}
          theme="light"
          onClick={this.handleCopy}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {copied ? "已复制" : "复制代码"}
        </Button>
      </div>
    )
  }
}
