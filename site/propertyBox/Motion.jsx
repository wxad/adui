import React, { useState } from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Breadcrumb, Form, Motion, Icon } from "../../components"
import { SIZES } from "./consts"

const ZoomExample = () => {
  const [data, setData] = useState({
    名称: "微信广告助手",
    城市: "深圳市",
    性别: "男",
    电子邮箱: "donon@gmail.com",
  })

  const handleClick = (expanded) => {
    const dataNew = { ...data }
    if (expanded) {
      delete dataNew["职业"]
      delete dataNew["特长"]
    } else {
      dataNew["职业"] = "视觉设计师"
      dataNew["特长"] = "Brawl Stars"
    }
    setData(dataNew)
  }

  const expanded = Object.keys(data).length > 4

  return (
    <Form
      itemStyle={{ marginBottom: "12px", fontSize: "13px", color: "#636363" }}
      labelStyle={{ marginRight: "16px" }}
      labelSize={4}
    >
      <Motion transition="zoom">
        {Object.keys(data).map((key) => (
          <Form.Item key={key} label={key}>
            {data[key]}
          </Form.Item>
        ))}
      </Motion>
      <div
        onClick={() => handleClick(expanded)}
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "13px",
          color: "var(--ad-blue)",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {expanded ? "收起" : "展开全部信息"}
        <Icon
          icon={`arrow-${expanded ? "up" : "down"}`}
          color="var(--ad-blue)"
        />
      </div>
    </Form>
  )
}

export default class PropertyBox extends React.Component {
  state = {
    size: "small",
  }

  render() {
    const { size } = this.state

    const codes = `<Breadcrumb${size === "small" ? "" : ` size="${size}" `}>
  <Breadcrumb.Item href="https://ad.weixin.qq.com">页面一</Breadcrumb.Item>
  <Breadcrumb.Item>页面二</Breadcrumb.Item>
  <Breadcrumb.Item>页面三</Breadcrumb.Item>
</Breadcrumb>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <ZoomExample />
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
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
