import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Menu } from "../../components"
import { SIZES, INTENTS } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    disabled: false,
    size: "small",
    showText: false,
  }

  render() {
    const { disabled, size, showText } = this.state

    const codes = `<Menu>
  <Menu.Item index="1">新建</Menu.Item>
  <Menu.SubMenu index="2" title="编辑">
    <Menu.Item index="2-1">编辑选项1</Menu.Item>
    <Menu.Item index="2-2">编辑选项2</Menu.Item>
  </Menu.SubMenu>
  ...
</Menu>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div
            className={styles.left}
            style={{
              paddingTop: "40px",
              paddingBottom: "40px",
              alignItems: "flex-start",
            }}
          >
            <Menu
              style={{
                marginRight: "20px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "6px",
                boxShadow: "var(--box-shadow-elevation-2)",
              }}
            >
              <Menu.Item index="1">编辑广告</Menu.Item>
              <Menu.Item index="2">复制广告</Menu.Item>
              <Menu.Item index="3">删除广告</Menu.Item>
            </Menu>
            <Menu
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "6px",
                boxShadow: "var(--box-shadow-elevation-2)",
              }}
            >
              <Menu.Item index="1">新建</Menu.Item>
              <Menu.SubMenu index="2" title="编辑">
                <Menu.Item index="2-1">编辑选项1</Menu.Item>
                <Menu.Item index="2-2">编辑选项2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu index="3" title="另存为">
                <Menu.Item index="3-1">另存为选项1</Menu.Item>
                <Menu.Item index="3-2">另存为选项2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu index="4" title="下载">
                <Menu.Item index="4-1">下载选项1</Menu.Item>
                <Menu.Item index="4-2">下载选项2</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
