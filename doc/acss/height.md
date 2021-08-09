---
title: Height
---

AD UI 引入了以下功能类，以控制容器高度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `h-64`，不支持 `h-63`。

相关 CSS 属性：`height`

```json classes
{
  "h-[0-500]": "height: [0-500]px;",
  "h-auto": "height: auto;",
  "h-full": "height: 100%;",
  "h-screen": "height: 100vh;",
  "h-1/2": "height: 50%;",
  "h-1/3": "height: 33.333333%;",
  "h-2/3": "height: 66.666667%;",
  "h-1/4": "height: 25%;",
  "h-2/4": "height: 50%;",
  "h-3/4": "height: 75%;",
  "h-1/5": "height: 20%;",
  "h-2/5": "height: 40%;",
  "h-3/5": "height: 60%;",
  "h-4/5": "height: 80%;",
  "h-1/6": "height: 16.666667%;",
  "h-2/6": "height: 33.333333%;",
  "h-3/6": "height: 50%;",
  "h-4/6": "height: 66.666667%;",
  "h-5/6": "height: 83.333333;%"
}
```

```jsx acss
return <div className="w-100 h-100 bg-green rounded-6" />
```
