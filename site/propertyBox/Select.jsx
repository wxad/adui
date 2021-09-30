import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, Select } from "../../components"
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    search: false,
    size: "small",
    theme: false,
  }

  render() {
    const { disabled, search, size, theme } = this.state

    const codes = `<Select
  onSelect={(value, option) => {}}
  ${disabled ? `disabled` : ""}
  ${search ? `searchable` : ""}
  ${search ? `searchPlaceholder="请输入要选择的项"` : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
>
  <Select.OptGroup label="广告位">
    <Select.Option value="朋友圈广告">朋友圈</Select.Option>
    <Select.Option value="公众号广告">公众号</Select.Option>
  </Select.OptGroup>
  <Select.OptGroup label="行业">
    <Select.Option value="行业一">行业一</Select.Option>
    <Select.Option value="行业二">行业二</Select.Option>
    <Select.Option value="行业三">行业三</Select.Option>
  </Select.OptGroup>
</Select>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Select
              disabled={disabled}
              searchable={search}
              searchPlaceholder="请输入要选择的项"
              size={size}
              theme={theme ? "light" : null}
              style={{ width: "160px" }}
            >
              <Select.OptGroup label="广告位">
                <Select.Option value="朋友圈广告">朋友圈</Select.Option>
                <Select.Option value="公众号广告">公众号</Select.Option>
              </Select.OptGroup>
              <Select.OptGroup label="行业">
                <Select.Option value="行业一">行业一</Select.Option>
                <Select.Option value="行业二">行业二</Select.Option>
                <Select.Option value="行业三">行业三</Select.Option>
              </Select.OptGroup>
            </Select>
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
            </dl>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可搜索"
                  unCheckedText="可搜索"
                  checked={search}
                  onChange={(param) => this.setState({ search: param })}
                />
              </div>
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
                  checked={theme}
                  onChange={(param) => this.setState({ theme: param })}
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
