/* eslint-disable */
import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Alert, Button, Switch } from "../../components"
import { INTENTS, SIZES } from "./consts"

// Alert 没有 large size
const SIZES_ALERT = [...SIZES]
SIZES_ALERT.shift()

// Alert 增多了 info intent
const INTENTS_ALERT = [...INTENTS]
INTENTS_ALERT.splice(3, 0, {
  text: "信息",
  value: "info",
})

export default class PropertyBox extends React.Component {
  state = {
    closable: false,
    expand: false,
    icon: false,
    intent: "normal",
    size: "small",
    theme: false,
    title: true,
  }

  render() {
    const { expand, icon, intent, closable, size, theme, title } = this.state

    const alertProps = {}
    if (icon) {
      alertProps.icon = "game"
    }

    const codes = `<Alert
  ${closable ? `closable` : ""}
  ${expand ? `expandContent="这里是展开内容。"` : ""}
  ${icon ? `icon="game"` : ""}
  ${intent === "normal" ? "" : `intent="${intent}"`}
  ${size === "small" ? "" : `size="${size}"`}  
  ${theme ? `theme="light"` : ""}
  text="这是一条提示信息"
  ${title ? `title="提醒标题"` : "title={null}"}  
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Alert
              closable={closable}
              expandContent={expand ? "这里是展开内容。" : null}
              intent={intent}
              title={title ? "提醒标题" : null}
              text="这是一条提示信息。"
              size={size}
              style={{ minWidth: "400px" }}
              theme={theme ? "light" : null}
              {...alertProps}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>尺寸</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {SIZES_ALERT.map(({ value, text }) => (
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
                  {INTENTS_ALERT.map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === intent}
                      onClick={() => {
                        this.setState({ intent: value }, () => {
                          // 这里有一个很神奇的 bug，就是 color 明明变换了，但是由于背景使用的是 currentColor，颜色居然不会更新
                          // 原因就是在这种情况下 Chrome 监测不到元素的 repaint。
                          // 因此，在这里强行 repaint 一下
                          const theAlert = document
                            .getElementsByClassName("adui-propertyBox-left")[0]
                            .getElementsByClassName("adui-alert-base")[0]
                          // theAlert.style.display = "none"
                          // 这一行也蛮牛逼的
                          // https://martinwolf.org/before-2018/blog/2014/06/force-repaint-of-an-element-with-javascript/
                          theAlert.offsetHeight
                          // theAlert.style.display = "block"
                        })
                      }}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="带标题"
                  unCheckedText="带标题"
                  checked={title}
                  onChange={(param) => this.setState({ title: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可关闭"
                  unCheckedText="可关闭"
                  checked={closable}
                  onChange={(param) => {
                    this.setState({ closable: param })
                    if (param) {
                      this.setState({
                        expand: false,
                      })
                    }
                  }}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可展开"
                  unCheckedText="可展开"
                  checked={expand}
                  onChange={(param) => {
                    this.setState({ expand: param })
                    if (param) {
                      this.setState({
                        closable: false,
                      })
                    }
                  }}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="自定义图标"
                  unCheckedText="自定义图标"
                  checked={icon}
                  onChange={(param) => this.setState({ icon: param })}
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
