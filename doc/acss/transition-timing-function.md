---
title: Transition Timing Function
---

AD UI 引入了以下功能类，以控制元素属性的过渡曲线。

AD UI 为 `in` `out` `in-out` 定义了三种曲线，此外也有 `linear` 和品牌曲线 `brand`。

相关 CSS 属性：`transition-timing-function`

```json classes
{
  "ease-linear": "transition-timing-function: linear;",
  "ease-in": "transition-timing-function: cubic-bezier(0.42, 0, 1, 1);",
  "ease-in-cubic": "transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.53);",
  "ease-in-quint": "transition-timing-function: cubic-bezier(0.52, 0, 0.74, 0.5);",
  "ease-out": "transition-timing-function: cubic-bezier(0, 0, 0.58, 1);",
  "ease-out-cubic": "transition-timing-function: cubic-bezier(0.32, 0.47, 0.6, 1);",
  "ease-out-quint": "transition-timing-function: cubic-bezier(0.22, 0.5, 0.36, 1);",
  "ease-in-out": "transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);",
  "ease-in-out-cubic": "transition-timing-function: cubic-bezier(0.66, 0, 0.34, 1);",
  "ease-in-out-quint": "transition-timing-function: cubic-bezier(0.84, 0, 0.16, 1);",
  "ease-brand": "transition-timing-function: cubic-bezier(0.4, 0, 0.15, 1);"
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transform-gpu transition-transform ease-brand duration-500 cursor-pointer hover:scale-150">
      Hover Transform
    </div>
  </div>
)
```
