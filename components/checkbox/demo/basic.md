---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

气泡提示帮助信息：

```jsx
const [value, setValue] = useState([1])
return (
  <Checkbox.Group
    size="mini"
    value={value}
    onChange={(value) => setValue(value)}
  >
    <Checkbox value={1} helper="气泡提示帮助信息">
      多选
    </Checkbox>
    <Checkbox value={2}>多选</Checkbox>
    <Checkbox value={3}>多选</Checkbox>
  </Checkbox.Group>
)
```
