import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  Tag,
} from '../../components'
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    disabled: false,
    intent: "normal",
    interactive: false,
    radius: false,
    removable: false,
    round: false,
    size: "small",
    theme: null,
  }

  render() {
    const {
      disabled,
      intent,
      interactive,
      radius,
      removable,
      round,
      size,
      theme,
    } = this.state

    const codes = `<Tag
  ${disabled ? "disabled" : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
  ${interactive ? "interactive" : ""}
  ${removable ? `removable` : ""}
  ${round ? `round` : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="${theme}"` : ""}
>
  标签
</Tag>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            {
              ["标签一", "标签二", "标签三"].map(o => (
                <Tag
                  key={o}
                  disabled={disabled}
                  intent={intent}
                  interactive={interactive}
                  removable={removable}
                  round={round}
                  size={size}
                  theme={theme}
                >
                  {o}
                </Tag>
              ))
            }
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
              <dt className={styles.controlTitle}>类型</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {
                    INTENTS.map(({ value, text }) => (
                      <Button
                        key={value}
                        active={value === intent}
                        onClick={() => this.setState({ intent: value })}
                      >
                        { text }
                      </Button>
                    ))
                  }
                </Button.Group>
              </dd>
              <div className={styles.switchControl}>
                <Switch checkedText="可删除" unCheckedText="可删除" checked={removable} onChange={param => this.setState({ removable: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="轻量风格" unCheckedText="轻量风格" checked={!!theme} onChange={param => this.setState({ theme: param ? "light" : null }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="可交互" unCheckedText="可交互" checked={!!interactive} onChange={param => this.setState({ interactive: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="圆角" unCheckedText="圆角" checked={round} onChange={param => this.setState({ round: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}