import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Select, Switch, Icon, Button, Suggest } from "../../components"
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    intent: "normal",
    leftElement: "select",
    rightElement: "icon",
    size: "small",
    theme: null,
  }

  render() {
    const { disabled, intent, leftElement, rightElement, size, theme } =
      this.state

    let realLeftElement
    let realRightElement

    if (leftElement === "none") {
      realLeftElement = null
    } else if (leftElement === "icon") {
      realLeftElement = <Icon icon="help-circle" />
    } else if (leftElement === "button") {
      realLeftElement = (
        <Button disabled={disabled} theme="light" leftIcon="setting" />
      )
    } else {
      realLeftElement = (
        <Select theme="light" disabled={disabled} defaultValue="0">
          <Select.Option value="0">朋友圈</Select.Option>
          <Select.Option value="1">公众号</Select.Option>
          <Select.Option value="2">小程序</Select.Option>
        </Select>
      )
    }

    if (rightElement === "none") {
      realRightElement = null
    } else if (rightElement === "icon") {
      realRightElement = <Icon icon="help-circle" />
    } else if (rightElement === "button") {
      realRightElement = (
        <Button disabled={disabled} theme="light" leftIcon="setting" />
      )
    } else {
      realRightElement = (
        <Select theme="light" disabled={disabled}>
          <Select.Option value="0">朋友圈</Select.Option>
          <Select.Option value="1">公众号</Select.Option>
          <Select.Option value="2">小程序</Select.Option>
        </Select>
      )
    }

    const codes = `<Suggest
  autoHidePopup={false}
  dataSource={[
    "广告计划-01",
    "广告计划-02",
    "广告计划-03",
    "广告计划-04",
  ]}
  ${disabled ? "disabled" : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
  ${leftElement === "icon" ? 'leftElement={(<Icon icon="search" />)}' : ""}
  ${
    leftElement === "button"
      ? 'leftElement={(<Button theme="light" leftIcon="lock" />)}'
      : ""
  }
  ${
    leftElement === "select"
      ? `leftElement={(
    <Select defaultValue="0" theme="light">
      <Select.Option value="0">朋友圈</Select.Option>
      <Select.Option value="1">公众号</Select.Option>
      <Select.Option value="2">小程序</Select.Option>
    </Select>
  )}
  placeholder="请输入"`
      : ""
  }
  ${rightElement === "icon" ? 'rightElement={(<Icon icon="search" />)}' : ""}
  ${
    rightElement === "button"
      ? 'rightElement={(<Button theme="light" leftIcon="lock" />)}'
      : ""
  }
  ${
    rightElement === "select"
      ? `rightElement={(
    <Select defaultValue="0" theme="light">
      <Select.Option value="0">朋友圈</Select.Option>
      <Select.Option value="1">公众号</Select.Option>
      <Select.Option value="2">小程序</Select.Option>
    </Select>
  )}`
      : ""
  }
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="${theme}"` : ""}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Suggest
              autoFocus
              autoHidePopup={false}
              dataSource={[
                "广告计划-01",
                "广告计划-02",
                "广告计划-03",
                "广告计划-04",
              ]}
              placeholder="请输入"
              style={{ width: "240px" }}
              leftElement={realLeftElement}
              rightElement={realRightElement}
              disabled={disabled}
              intent={intent}
              size={size}
              theme={theme}
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
              <dt className={styles.controlTitle}>左元素</dt>
              <dd className={styles.controlContent}>
                <Select
                  value={leftElement}
                  onChange={(param) => this.setState({ leftElement: param })}
                >
                  <Select.Option value="none">无</Select.Option>
                  <Select.Option value="icon">图标</Select.Option>
                  <Select.Option value="button">按钮</Select.Option>
                  <Select.Option value="select">选择器</Select.Option>
                </Select>
              </dd>
              <dt className={styles.controlTitle}>右元素</dt>
              <dd className={styles.controlContent}>
                <Select
                  value={rightElement}
                  onChange={(param) => this.setState({ rightElement: param })}
                >
                  <Select.Option value="none">无</Select.Option>
                  <Select.Option value="icon">图标</Select.Option>
                  <Select.Option value="button">按钮</Select.Option>
                  <Select.Option value="select">选择器</Select.Option>
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
              <div className={styles.switchControl}>
                <Switch
                  checkedText="轻量风格"
                  unCheckedText="轻量风格"
                  checked={!!theme}
                  onChange={(param) =>
                    this.setState({ theme: param ? "light" : null })
                  }
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
