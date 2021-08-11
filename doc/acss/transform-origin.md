---
title: Transform Origin
---

AD UI 引入了以下功能类，以控制元素变形的原点。

相关 CSS 属性：`transform-origin`

```json classes
{
  "origin-center": "transform-origin: center;",
  "origin-top": "transform-origin: top;",
  "origin-top-right": "transform-origin: top right;",
  "origin-right": "transform-origin: right;",
  "origin-bottom-right": "transform-origin: bottom right;",
  "origin-bottom": "transform-origin: bottom;",
  "origin-bottom-left": "transform-origin: bottom left;",
  "origin-left": "transform-origin: left;",
  "origin-top-left": "transform-origin: top left;"
}
```

```jsx acss
return (
  <div className="inline-flex p-16 bg-tp-gray-100 space-x-50 text-white rounded-6">
    <div className="flex items-center justify-center w-80 h-80 bg-green rounded-6 origin-center transform-gpu rotate-45">
      center
    </div>
    <div className="flex items-center justify-center w-80 h-80 bg-green rounded-6 origin-bottom transform-gpu rotate-45">
      bottom
    </div>
  </div>
)
```
