---
order: 3
title:
  zh-CN: 内容自适应宽度
  en-US: contentJustify
---

`contentJustify` 内容自适应宽度：

```jsx
const [value, setValue] = useState("contentJustify")

return (
  <Input
    size="large"
    contentJustify
    rightElement={<Icon icon="edit-outlined" />}
    className="min-w-100"
    theme="light"
    onChange={({ target: { value: val } }) => setValue(val)}
    value={value}
  />
)
```
