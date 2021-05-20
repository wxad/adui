---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

开关展开或收起内容：

```jsx
const [checked, setChecked] = useState(true)

return (
  <Form labelSize={6} className="w-2/5">
    <Form.Item label="自动扩量">
      <Switch
        checked={checked}
        onChange={(bool) => setChecked(bool)}
        checkedText="已开启"
        unCheckedText="未开启"
      />
    </Form.Item>
    <Motion transition="zoom">
      {checked && (
        <Form.Item label="不可突破定向">
          <Checkbox.Group>
            <Checkbox>地域</Checkbox>
            <Checkbox>年龄</Checkbox>
            <Checkbox>性别</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      )}
    </Motion>
  </Form>
)
```
