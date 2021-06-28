import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Switch, Button, Cascader } from "../../components"
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    changeOnSelect: false,
    disabled: false,
    size: "small",
    theme: null,
  }

  render() {
    const { changeOnSelect, disabled, size, theme } = this.state

    const codes = `<Cascader
  options={[...]}
  ${changeOnSelect ? "changeOnSelect" : ""}
  ${disabled ? "disabled" : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Cascader
              style={{ width: "200px" }}
              options={[
                {
                  value: "计划1",
                  title: "计划1",
                  children: [
                    {
                      value: "广告1",
                      title: "广告1",
                      children: [
                        {
                          value: "创意1",
                          title: "创意1",
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "计划2",
                  title: "计划2",
                  children: [
                    {
                      value: "广告2",
                      title: "广告2",
                      children: [
                        {
                          value: "创意2",
                          title: "创意2",
                        },
                      ],
                    },
                  ],
                },
              ]}
              {...this.state}
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
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可选择父层级"
                  unCheckedText="可选择父层级"
                  checked={changeOnSelect}
                  onChange={(param) => this.setState({ changeOnSelect: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="轻量风格"
                  unCheckedText="轻量风格"
                  checked={!!theme}
                  onChange={(param) =>
                    this.setState({ theme: param ? "light" : undefined })
                  }
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
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
