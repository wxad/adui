---
order: 1
title:
  zh-CN: 确认
  en-US: popconfirm
---

内嵌表单 `<Popconfirm />`：

```jsx
  return (
    <Popconfirm
      popup={(
        <React.Fragment>
          <div style={{ marginBottom: "20px", fontSize: "14px", lineHeight: "24px", fontWeight: 600 }}>
            修改投放时间
          </div>
          <Form
            labelStyle={{ marginRight: "16px" }}
          >
            <Form.Item label="开始投放" style={{ marginBottom: "20px" }}>
              <DatePicker style={{ width: "140px" }} defaultValue={new Date()} />
            </Form.Item>
            <Form.Item label="结束投放" style={{ marginBottom: "8px" }}>
              <DatePicker style={{ width: "140px" }} defaultValue={new Date()} />
            </Form.Item>
          </Form>
        </React.Fragment>
      )}
      placement="bottom"
    >
      <Button>内嵌表单</Button>
    </Popconfirm>
  )
```
## Alert
### Popover 与 Popconfirm 的关系
`Popconfirm` 基于 `Popover` 封装，主要提供了对 取消 与 确认 按钮的 Props，比如 `confirmButton` 这个对象会全部传给确认 `Button` 组件处理；   
另外 `Popconfirm` 对内容区域增加了 `padding: 20px;` 的样式。
 No newline at end of file
