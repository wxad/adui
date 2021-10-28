import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, Checkbox } from "../../components"
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    size: "small",
  }

  render() {
    const { disabled, size } = this.state

    const codes = `<Checkbox.Group
  defaultValue={[1]}
  ${disabled ? "disabled" : ""}
  ${size === "small" ? "" : `size="${size}"`}
>
  <Checkbox value={1}>勾选</Checkbox>
  <Checkbox value={2}>勾选</Checkbox>
  <Checkbox value={3}>勾选</Checkbox>
</Checkbox.Group>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Checkbox.Group defaultValue={[1]} {...this.state}>
              <Checkbox value={1}>勾选</Checkbox>
              <Checkbox value={2}>勾选</Checkbox>
              <Checkbox value={3}>勾选</Checkbox>
            </Checkbox.Group>
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
