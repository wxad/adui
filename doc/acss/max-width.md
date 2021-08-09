---
title: Max Width
---

AD UI 引入了以下功能类，以控制容器最大宽度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `max-w-64`，不支持 `max-w-63`。

相关 CSS 属性：`max-width`

```json classes
{
  "max-w-[0-500]": "max-width: [0-500]px;",
  "max-w-screen": "max-width: 100vw;",
  "max-w-full": "max-width: 100%;",
  "max-w-initial": "max-width: initial;"
}
```

```jsx acss
return <div className="w-200 max-w-100 h-100 bg-green rounded-6" />
```
