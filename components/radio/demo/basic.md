---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

气泡提示帮助信息：

```jsx
  const [value, setValue] = useState(1)

  return (
    <Radio.Group
      value={value}
      onChange={value => setValue(value)}
    >
      <Radio value={1} helper="气泡提示帮助信息">单选</Radio>
      <Radio value={2}>单选</Radio>
      <Radio value={3}>单选</Radio>
    </Radio.Group>
  )
```
