import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, Tooltip, Select } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    place: "bottom",
    trigger: "hover",
    alignEdge: false,
    activeButton: 0,
    visible: false,
    showExample: true,
  }

  render() {
    const { place, trigger, alignEdge, activeButton, visible, showExample } =
      this.state

    const codes = `<Tooltip
  placement="${place}"
  ${trigger === "hover" ? "" : 'trigger="click"'}
  ${alignEdge ? "alignEdge" : "alignEdge={false}"}
>
  <Button leftIcon="copy-outlined" />
</Tooltip>`
    const placement = [
      "top",
      "left",
      "right",
      "bottom",
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight",
      "leftTop",
      "leftBottom",
      "rightTop",
      "rightBottom",
    ]
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            {showExample && (
              <Tooltip
                visible={visible}
                onVisibleChange={(bool) => this.setState({ visible: bool })}
                placement={place}
                trigger={trigger}
                alignEdge={alignEdge}
              >
                <Button leftIcon="copy-outlined" />
              </Tooltip>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>触发方式</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  <Button
                    active={activeButton === 0}
                    onClick={() => {
                      this.setState({
                        activeButton: 0,
                        trigger: "hover",
                      })
                    }}
                  >
                    鼠标上移
                  </Button>
                  <Button
                    active={activeButton === 1}
                    onClick={() => {
                      this.setState({
                        activeButton: 1,
                        trigger: "click",
                      })
                    }}
                  >
                    鼠标点击
                  </Button>
                </Button.Group>
              </dd>
            </dl>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>弹出位置</dt>
              <dd className={styles.controlContent}>
                <Select
                  defaultValue={place}
                  onSelect={(value) => {
                    this.setState({ place: value, showExample: false }, () => {
                      this.setState({
                        showExample: true,
                        visible: true,
                      })
                    })
                  }}
                >
                  {placement.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </dd>
            </dl>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="边缘对齐"
                  unCheckedText="边缘对齐"
                  checked={alignEdge}
                  onChange={(param) =>
                    this.setState({ alignEdge: param, visible: true })
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
