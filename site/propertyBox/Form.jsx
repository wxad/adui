import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Form, Input, Select, Radio } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    labelAlign: "left",
    labelMargin: "16px",
    itemMargin: "24px",
    itemTextMargin: "8px",
    labelSize: 4,
    sizeActiveIndex: 2,
    alignActiveIndex: 0,
  }

  render() {
    const {
      labelAlign,
      labelMargin,
      itemMargin,
      itemTextMargin,
      alignActiveIndex,
      labelSize,
      sizeActiveIndex,
    } = this.state

    const codes = `<Form
  itemStyle={{ marginBottom: "${itemMargin}" }}
  labelStyle={{ marginRight: "${labelMargin}" }}
  labelSize={${labelSize}}
  ${labelAlign === "left" ? "" : `labelAlign="${labelAlign}"`}
>
  <Form.Item label="名称">
    <Input />
  </Form.Item>
  <Form.Item label="城市" labelHelper="这里是解释文案">
    <Select>...</Select>
  </Form.Item>
  <Form.Item label="性别">
    <Radio.Group>...</Radio.Group>
  </Form.Item>
  <Form.Item label="电子邮箱">
    <Input />
  </Form.Item>
</Form>

-----

<Form
  itemStyle={{ marginBottom: "${itemTextMargin}" }}
  labelStyle={{ marginRight: "${labelMargin}" }}
  labelSize={${labelSize}}
  ${labelAlign === "left" ? "" : `labelAlign="${labelAlign}"`}
>
  <Form.Item label="名称">微信广告助手</Form.Item>
  <Form.Item label="城市">深圳市</Form.Item>
  <Form.Item label="性别">男</Form.Item>
  <Form.Item label="电子邮箱">donon@gmail.com</Form.Item>
</Form>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <div
              style={{
                display: "flex",
                margin: "64px 0 36px 0",
              }}
            >
              <Form
                itemStyle={{ marginBottom: itemMargin }}
                labelSize={labelSize}
                labelAlign={labelAlign}
                style={{ marginRight: "56px" }}
              >
                <Form.Item label="名称">
                  <Input style={{ width: "140px" }} placeholder="请输入名称" />
                </Form.Item>
                <Form.Item label="城市" labelHelper="这里是解释文案">
                  <Select defaultValue="深圳市">
                    <Select.Option value="广州市">广州市</Select.Option>
                    <Select.Option value="深圳市">深圳市</Select.Option>
                    <Select.Option value="东莞市">东莞市</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="性别">
                  <Radio.Group defaultValue={0}>
                    <Radio value={0}>男</Radio>
                    <Radio value={1}>女</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="电子邮箱">
                  <Input
                    style={{ width: "140px" }}
                    placeholder="请输入名称"
                    defaultValue="donon@gmail.com"
                  />
                  <Form.Tip>确认信息将发送到你的邮箱</Form.Tip>
                </Form.Item>
              </Form>
              <Form
                itemStyle={{ marginBottom: itemTextMargin, color: "#636363" }}
                labelStyle={{ marginRight: labelMargin, fontSize: "13px" }}
                labelSize={labelSize}
                labelAlign={labelAlign}
              >
                <Form.Item label="名称">微信广告助手</Form.Item>
                <Form.Item label="城市">深圳市</Form.Item>
                <Form.Item label="性别">男</Form.Item>
                <Form.Item label="电子邮箱">donon@gmail.com</Form.Item>
              </Form>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>间距</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  <Button
                    active={sizeActiveIndex === 0}
                    onClick={() => {
                      this.setState({
                        labelMargin: "24px",
                        itemMargin: "32px",
                        itemTextMargin: "16px",
                        sizeActiveIndex: 0,
                      })
                    }}
                  >
                    大
                  </Button>
                  <Button
                    active={sizeActiveIndex === 1}
                    onClick={() => {
                      this.setState({
                        labelMargin: "20px",
                        itemMargin: "28px",
                        itemTextMargin: "12px",
                        sizeActiveIndex: 1,
                      })
                    }}
                  >
                    中
                  </Button>
                  <Button
                    active={sizeActiveIndex === 2}
                    onClick={() => {
                      this.setState({
                        labelMargin: "16px",
                        itemMargin: "24px",
                        itemTextMargin: "8px",
                        sizeActiveIndex: 2,
                      })
                    }}
                  >
                    小
                  </Button>
                  <Button
                    active={sizeActiveIndex === 3}
                    onClick={() => {
                      this.setState({
                        labelMargin: "12px",
                        itemMargin: "20px",
                        itemTextMargin: "4px",
                        sizeActiveIndex: 3,
                      })
                    }}
                  >
                    迷你
                  </Button>
                </Button.Group>
              </dd>
              <dt className={styles.controlTitle}>标题对齐方式</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  <Button
                    active={alignActiveIndex === 0}
                    onClick={() => {
                      this.setState({
                        labelAlign: "left",
                        alignActiveIndex: 0,
                      })
                    }}
                  >
                    左对齐
                  </Button>
                  <Button
                    active={alignActiveIndex === 1}
                    onClick={() => {
                      this.setState({
                        labelAlign: "right",
                        alignActiveIndex: 1,
                      })
                    }}
                  >
                    右对齐
                  </Button>
                </Button.Group>
              </dd>
              <dt className={styles.controlTitle}>标题最大字符数</dt>
              <dd className={styles.controlContent}>
                <Select
                  defaultValue={4}
                  onSelect={(value) => {
                    this.setState({ labelSize: value })
                  }}
                >
                  <Select.Option value={4}>4</Select.Option>
                  <Select.Option value={5}>5</Select.Option>
                  <Select.Option value={6}>6</Select.Option>
                </Select>
              </dd>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
