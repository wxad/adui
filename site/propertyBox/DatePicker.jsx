import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, DatePicker, Radio } from "../../components"
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    date: true,
    disabled: false,
    shortcuts: false,
    size: "small",
    theme: false,
    intent: "normal",
  }

  render() {
    const { date, disabled, shortcuts, size, theme, intent } = this.state

    const codes = `${
      date
        ? `<DatePicker
  defaultValue={new Date()}
  ${disabled ? `disabled` : ""}
  ${
    shortcuts
      ? `shortcuts={[
    { label: "祖国母亲生日", value: new Date("2022-10-01") },
  ]}`
      : ""
  }
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
/>`
        : `<DatePicker.RangePicker
  ${disabled ? `disabled` : ""}
  ${
    shortcuts
      ? `shortcuts={[
    {
      label: "祖国母亲生日",
      value: [
        new Date("2022-10-01"),
        new Date("2022-10-07"),
      ] 
    }
  ]}`
      : ""
  }
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
/>`
    }`

    const dateRangeFirst = new Date()
    const oneMonthAgo = dateRangeFirst.getDate() - 30
    dateRangeFirst.setDate(oneMonthAgo)
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            {date ? (
              <DatePicker
                defaultValue={new Date()}
                theme={theme ? "light" : null}
                intent={intent}
                closeOnSelect
                disabled={disabled}
                shortcuts={
                  shortcuts
                    ? [
                        {
                          label: "祖国母亲生日",
                          value: new Date("2022-10-01"),
                        },
                      ]
                    : null
                }
                size={size}
              />
            ) : (
              <DatePicker.RangePicker
                defaultValue={[dateRangeFirst, new Date()]}
                theme={theme ? "light" : null}
                intent={intent}
                closeOnSelect
                disabled={disabled}
                onStartDaySelect={() => {}}
                onEndDaySelect={() => {}}
                shortcuts={
                  shortcuts
                    ? [
                        {
                          label: "祖国母亲生日",
                          value: [
                            new Date("2022-10-01"),
                            new Date("2022-10-07"),
                          ],
                        },
                      ]
                    : null
                }
                size={size}
              />
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>组件类型</div>
            <dl
              className={styles.controls}
              style={{
                paddingBottom: "20px",
                borderBottom: "1px solid #EBEBEB",
                marginBottom: "20px",
              }}
            >
              <Radio.Group defaultValue={0}>
                <Radio
                  value={0}
                  onClick={() => {
                    this.setState({ date: true })
                  }}
                >
                  选日期
                </Radio>
                <Radio
                  value={1}
                  onClick={() => {
                    this.setState({ date: false })
                  }}
                >
                  选日期范围
                </Radio>
              </Radio.Group>
            </dl>
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
              <dt className={styles.controlTitle}>倾向</dt>
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
            </dl>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可快捷选择日期"
                  unCheckedText="可快捷选择日期"
                  checked={shortcuts}
                  onChange={(param) => this.setState({ shortcuts: param })}
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
