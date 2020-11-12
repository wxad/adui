---
order: 0
title:
  zh-CN: 字数限制
  en-US: Limit
---

字符数限制：

```jsx
  const [value, setValue] = useState("")

  return (
    <Input
      limit={10}
      onChange={({ target: { value: val } }) => setValue(val)}
      value={value}
      style={{ width: "28%" }}
    />
  )
```
## Alert
### 关于字符数限制
1.默认开启 `countHanzi`，一个汉字计算为 **1** 字数，数字与英文计算为 **0.5** 字数；你可以关闭此 Prop，那样所有字符都计算为 **1** 字数；  
2.使用 `limit` Prop 时，`Input` 必须是外部控制的（即传入 `value` ），否则 `defaultValue` 会透传给原生 `<input />` 元素处理，在这样的设计下组件内部并没有存储当前的值，因此也没有办法去计算 `limit` 了。  