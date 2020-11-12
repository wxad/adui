import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Switch,
  Button,
} from '../../components'
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    disabled: false,
    href: null,
    intent: "normal",
    leftIcon: "file-outlined",
    loading: false,
    rightIcon: "arrow-forward",
    size: "small",
    theme: null,
  }

  render() {
    const {
      disabled,
      href,
      intent,
      leftIcon,
      loading,
      rightIcon,
      size,
      theme,
    } = this.state

    const codes = `<Button
  ${disabled ? "disabled" : ""}
  ${href ? `href="${href}"` : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
  ${leftIcon === null ? "" : `leftIcon="${leftIcon}"`}
  ${loading ? "loading" : ""}
  ${rightIcon === null ? "" : `rightIcon="${rightIcon}"`}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="${theme}"` : ""}
>
  点击按钮
</Button>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Button
              {...this.state}
            >
              点击按钮
            </Button>
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
              <dt className={styles.controlTitle}>倾向</dt>
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
                <Switch checkedText="左图标" unCheckedText="左图标" checked={!!leftIcon} onChange={param => this.setState({ leftIcon: param ? "file-outlined" : null }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="右图标" unCheckedText="右图标" checked={!!rightIcon} onChange={param => this.setState({ rightIcon: param ? "arrow-forward" : null }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="加载态" unCheckedText="加载态" checked={loading} onChange={param => this.setState({ loading: param }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="禁用态" unCheckedText="禁用态" checked={disabled} onChange={param => this.setState({ disabled: param }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="轻量风格" unCheckedText="轻量风格" checked={!!theme} onChange={param => this.setState({ theme: param ? "light" : null }) } />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="跳转链接" unCheckedText="跳转链接" checked={!!href} onChange={param => this.setState({ href: param ? "https://ad.weixin.qq.com" : null }) } />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}