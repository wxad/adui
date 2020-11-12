import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Affix, Button, NumericInput, Select } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    value: 80,
    type: "offsetTop",
  }

  render() {
    const { value, type } = this.state

    const codes = `<Affix
  ${type === "offsetTop" ? `offsetTop={${value}}` : `offsetBottom={${value}}`}
>
  <Button>Affix</Button>
</Affix>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Affix
              offsetTop={type === "offsetTop" ? value : null}
              offsetBottom={type === "offsetBottom" ? value : null}
            >
              <Button style={{ width: "200px" }}>Affix</Button>
            </Affix>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>模式</dt>
              <dd className={styles.controlContent}>
                <Select
                  value={type}
                  onChange={val => this.setState({ type: val })}
                >
                  <Select.Option value="offsetTop">向上固定</Select.Option>
                  <Select.Option value="offsetBottom">向下固定</Select.Option>
                </Select>
              </dd>
              <dt className={styles.controlTitle}>偏移量</dt>
              <dd className={styles.controlContent}>
                <NumericInput
                  style={{ width: "100%" }}
                  value={value}
                  step={1}
                  max={500}
                  min={0}
                  onChange={val => this.setState({ value: val })}
                />
              </dd>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
