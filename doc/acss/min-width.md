---
title: Min Width
---

AD UI 引入了以下功能类，以控制容器最小宽度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `min-w-64`，不支持 `min-w-63`。

相关 CSS 属性：`min-width`

```json classes
{
  "min-w-[0-500]": "min-width: [0-500]px;",
  "min-w-screen": "min-width: 100vw;",
  "min-w-full": "min-width: 100%;"
}
```

```jsx acss
return <div className="min-w-100 h-100 bg-green rounded-6" />
```
