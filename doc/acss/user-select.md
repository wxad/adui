---
title: User Select
---

AD UI 引入了以下功能类，以控制用户能否选中文本。

相关 CSS 属性：`user-select`

```json classes
{
  "select-none": "user-select: none;",
  "select-text": "user-select: text;",
  "select-all": "user-select: all;",
  "select-auto": "user-select: auto;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 bg-tp-gray-50 rounded-6 select-none cursor-not-allowed">
    AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
    Component）组成。
  </div>
)
```
