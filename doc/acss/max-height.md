---
title: Max Height
---

AD UI 引入了以下功能类，以控制容器最大高度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `max-h-64`，不支持 `max-h-63`。

相关 CSS 属性：`max-height`

```json classes
{
  "max-h-[0-500]": "max-height: [0-500]px;",
  "max-h-screen": "max-height: 100vh;",
  "max-h-full": "max-height: 100%;",
  "max-h-initial": "max-height: initial;"
}
```

```jsx acss
return <div className="w-100 max-h-100 h-200 bg-green rounded-6" />
```
