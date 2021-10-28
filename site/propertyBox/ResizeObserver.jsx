import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Switch, ResizeObserver } from "../../components"
import { auto } from "async"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    width: 0,
    height: 0,
  }

  render() {
    const { disabled } = this.state

    const codes = `<ResizeObserver
  onResize={({ width, height }) => {}}    
  ${disabled ? "disabled" : ``}
>
  <div style={{ overflow: "auto", resize: "both" }} />
</ResizeObserver>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div
            className={styles.left}
            style={{ padding: "100px", flexDirection: "column" }}
          >
            <ResizeObserver
              disabled={disabled}
              onResize={({ width, height }) => {
                this.setState({ width, height })
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "160px",
                  height: "160px",
                  fontFamily: "SFMono-Semibold",
                  fontSize: "13px",
                  lineHeight: "20px",
                  fontWeight: "600",
                  border: "2px solid var(--primary-color)",
                  overflow: "auto",
                  resize: "both",
                }}
              >
                width: {this.state.width}
                <br /> height: {this.state.height}
              </div>
            </ResizeObserver>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <div className={styles.switchControl}>
              <Switch
                checkedText="禁用态"
                unCheckedText="禁用态"
                checked={disabled}
                onChange={(param) => this.setState({ disabled: param })}
              />
            </div>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
