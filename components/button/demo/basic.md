---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Intent
---

点击切换按钮类型 `intent`：

```jsx
const [copied, setCopied] = useState(false)

return (
  <div>
    <Button
      leftIcon={copied ? "tick-circle" : "copy-outlined"}
      intent={copied ? "primary" : "normal"}
      theme="light"
      onClick={() => setCopied(!copied)}
    >
      {copied ? "已复制" : "复制代码"}
    </Button>
  </div>
)
```
