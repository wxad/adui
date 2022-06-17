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
  <div>
    <Input.Textarea
      limit={15}
      onChange={({ target: { value: val } }) => setValue(val)}
      value={value}
      inputStyle={{ width: "240px", height: "120px" }}
      resize="both"
    />
  </div>
)
```
