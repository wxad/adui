---
order: 0
title:
  zh-CN: size
  en-US: size
---

全局配置 `size`：

```jsx
return (
  <ConfigProvider size="mini">
    <div>
      <Alert className="mb-20" text="以下组件将都会表现为 size mini" />
      <Form labelSize={4}>
        <Form.Item label="名称">
          <Input className="w-140" placeholder="请输入名称" />
        </Form.Item>
        <Form.Item label="性别">
          <Radio.Group defaultValue={0}>
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button intent="primary">确认</Button>
        </Form.Item>
      </Form>
    </div>
  </ConfigProvider>
)
```
