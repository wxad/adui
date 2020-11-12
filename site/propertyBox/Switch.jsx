import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Select,
  Switch,
} from '../../components'
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    disabled: false,
    size: "small",
    showText: true,
  }

  render() {
    const {
      disabled,
      size,
      showText,
    } = this.state

    const codes = `<Switch
  ${disabled ? "disabled" : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${showText ? `checkedText="已启用"` : ""}
  ${showText ? `unCheckedText="未启用"` : ""}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Switch
              disabled={disabled}
              size={size}
              unCheckedText={showText ? "未启用" : ""}
              checkedText={showText ? "已启用" : ""}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>尺寸</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {
                    SIZES.map(({ value, text }) => (
                      <Button
                        key={value}
                        active={value === size}
                        onClick={() => this.setState({ size: value })}
                      >
                        { text }
                      </Button>
                    ))
                  }
                </Button.Group>
              </dd>
              <div className={styles.switchControl}>
                <Switch checkedText="禁用态" unCheckedText="禁用态" checked={disabled} onChange={param => this.setState({ disabled: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="带文字注释" unCheckedText="带文字注释" checked={showText} onChange={param => this.setState({ showText: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}