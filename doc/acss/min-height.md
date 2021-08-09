---
title: Min Height
---

AD UI 引入了以下功能类，以控制容器最小高度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `min-h-64`，不支持 `min-h-63`。

相关 CSS 属性：`min-height`

```json classes
{
  "min-h-[0-500]": "min-height: [0-500]px;",
  "min-h-screen": "min-height: 100vh;",
  "min-h-full": "min-height: 100%;"
}
```

```jsx acss
return <div className="w-100 min-h-100 bg-green rounded-6" />
```
