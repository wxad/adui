---
title: Pointer Events
---

AD UI 引入了以下功能类，以指定在什么情况下某个特定的图形元素可以成为鼠标事件的 target。

相关 CSS 属性：`pointer-events`

```json classes
{
  "pointer-events-none": "pointer-events: none;",
  "pointer-events-auto": "pointer-events: auto;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 bg-tp-gray-50 rounded-6 pointer-events-none cursor-not-allowed">
    AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
    Component）组成。
  </div>
)
```
