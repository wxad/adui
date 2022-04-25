import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Select, Switch, Icon, Button, NumericInput } from "../../components"
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    intent: "normal",
    size: "small",
    min: 0,
    max: 100,
    value: 27,
  }

  render() {
    const { disabled, intent, size, min, max, value } = this.state

    const codes = `<NumericInput
  ${disabled ? "disabled" : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
  ${size === "small" ? "" : `size="${size}"`}
  defaultValue={27}
  min={${min}}
  max={${max}}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <NumericInput
              autoFocus
              style={{ width: "240px" }}
              disabled={disabled}
              intent={intent}
              size={size}
              value={value}
              onChange={(val) => {
                console.log("yijie", val)
                this.setState({
                  value: val,
                })
              }}
              // min={min === "none" ? null : Number(min)}
              // max={max === "none" ? null : Number(max)}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>尺寸</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {SIZES.map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === size}
                      onClick={() => this.setState({ size: value })}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <dt className={styles.controlTitle}>类型</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {INTENTS.map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === intent}
                      onClick={() => this.setState({ intent: value })}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <dt className={styles.controlTitle}>最小值</dt>
              <dd className={styles.controlContent}>
                <Select
                  value={min}
                  onChange={(param) => this.setState({ min: param })}
                >
                  <Select.Option value="none">无</Select.Option>
                  <Select.Option value="-10">-10</Select.Option>
                  <Select.Option value="0">0</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                </Select>
              </dd>
              <dt className={styles.controlTitle}>最大值</dt>
              <dd className={styles.controlContent}>
                <Select
                  value={max}
                  onChange={(param) => this.setState({ max: param })}
                >
                  <Select.Option value="none">无</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                  <Select.Option value="50">50</Select.Option>
                  <Select.Option value="100">100</Select.Option>
                </Select>
              </dd>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="禁用态"
                  unCheckedText="禁用态"
                  checked={disabled}
                  onChange={(param) => this.setState({ disabled: param })}
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
