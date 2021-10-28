import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, Tabs } from "../../components"
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    banner: false,
    size: "small",
  }

  handleUpdate = () => {
    /**
     * Tabs 组件为了防止性能消耗，只会在 value 变化时触发方法重新计算
     * 这里 Propertybox 有点特殊，因此以这样的方式强制调用
     * 并非组件 bug
     */
    setTimeout(() => {
      this.tabs.updateIndicatorStyle()
    }, 150)
  }

  render() {
    const { banner, size } = this.state

    const codes = `<Tabs 
  ${banner ? `banner` : ""}
  defaultValue={0} 
  ${size === "small" ? "" : `size="${size}"`}
>
  <Tabs.Tab title="选项一" value={0} />
  <Tabs.Tab title="选项二" value={1} />
  <Tabs.Tab title="选项三" value={2} />
  <Tabs.Tab title="禁用选项" value={3} disabled />
</Tabs>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Tabs
              defaultValue={0}
              size={size}
              banner={banner}
              style={banner ? { flex: 1 } : null}
              ref={(tabs) => {
                this.tabs = tabs
              }}
            >
              <Tabs.Tab title="选项一" value={0} />
              <Tabs.Tab title="选项二" value={1} />
              <Tabs.Tab title="选项三" value={2} />
              <Tabs.Tab title="禁用选项" value={3} disabled />
            </Tabs>
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
                      onClick={() =>
                        this.setState({ size: value }, this.handleUpdate)
                      }
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
            </dl>
            <div className={styles.switchControl} style={{ marginTop: "20px" }}>
              <Switch
                checkedText="填满宽度 (banner)"
                unCheckedText="填满宽度 (banner)"
                checked={banner}
                onChange={(param) =>
                  this.setState({ banner: param }, this.handleUpdate)
                }
              />
            </div>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
