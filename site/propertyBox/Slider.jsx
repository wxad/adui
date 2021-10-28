import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Switch, Slider } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    inputVisible: true,
    toolTip: true,
  }

  render() {
    const { inputVisible, toolTip } = this.state

    const codes = `<Slider 
  ${inputVisible ? `inputVisible` : ""}
  ${toolTip ? `tipFormatter={value => \`\${value}岁\`}` : ""}
/>
<Slider
  ${inputVisible ? `inputVisible` : ""}
  marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }}
  range
  ${toolTip ? `tipFormatter={value => \`\${value}元\`}` : ""}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left} style={{ padding: "45px 64px" }}>
            <div style={{ flex: 1 }}>
              <Slider
                inputVisible={inputVisible}
                defaultValue={24}
                style={{
                  marginBottom: "16px",
                  marginRight: inputVisible ? 0 : "68px",
                }}
                tipFormatter={toolTip ? (value) => `${value}岁` : null}
              />
              <Slider
                defaultValue={65}
                inputVisible={inputVisible}
                style={{
                  marginBottom: "16px",
                  marginRight: inputVisible ? 0 : "68px",
                }}
                marks={{ 0: 0, 50: 50, 100: 100 }}
                tipFormatter={toolTip ? (value) => `${value}头` : null}
              />
              <Slider
                style={{ marginRight: "68px" }}
                defaultValue={[20, 80]}
                inputVisible={inputVisible}
                marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }}
                step={5}
                range
                tipFormatter={toolTip ? (value) => `${value}亿` : null}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="带输入框"
                  unCheckedText="带输入框"
                  checked={inputVisible}
                  onChange={(param) => this.setState({ inputVisible: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="带工具提示"
                  unCheckedText="带工具提示"
                  checked={toolTip}
                  onChange={(param) => this.setState({ toolTip: param })}
                />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
