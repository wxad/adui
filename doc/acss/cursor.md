---
title: Cursor
---

AD UI 引入了以下功能类，以设置光标的类型，在鼠标指针悬停在元素上时显示相应样式。

相关 CSS 属性：`cursor`

```json classes
{
  "cursor-auto": "cursor: auto;",
  "cursor-default": "cursor: default;",
  "cursor-pointer": "cursor: pointer;",
  "cursor-wait": "cursor: wait;",
  "cursor-text": "cursor: text;",
  "cursor-move": "cursor: move;",
  "cursor-help": "cursor: help;",
  "cursor-not-allowed": "cursor: not-allowed;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 bg-tp-gray-50 rounded-6 cursor-not-allowed">
    AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
    Component）组成。
  </div>
)
```
