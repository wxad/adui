---
title: Display
---

AD UI 引入了以下功能类，以控制盒模型的种类。

相关 CSS 属性：`display`

```json classes
{
  "block": "display: block;",
  "inline-block": "display: inline-block;",
  "inline": "display: inline;",
  "flex": "display: flex;",
  "inline-flex": "display: inline-flex;",
  "grid": "display: grid;",
  "inline-grid": "display: inline-grid;",
  "hidden": "display: hidden;"
}
```

```jsx acss
return (
  <div className="inline-flex p-16 bg-tp-gray-100 space-x-4 text-white rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
