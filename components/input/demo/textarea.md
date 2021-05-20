---
order: 1
title:
  zh-CN: 段落文本
  en-US: Textarea
---

段落文本输入 `Input.Textarea`：

```jsx
const [value, setValue] = useState("")
return (
  <Input.Textarea
    limit={15}
    onChange={({ target: { value: val } }) => setValue(val)}
    value={value}
    className="w-240 h-120"
  />
)
```
