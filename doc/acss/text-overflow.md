---
title: Text Overflow
---

AD UI 引入了以下功能类，以控制元素内文字溢出时的显示方式。

相关 CSS 属性：`overflow` `text-overflow` `white-space`

```json classes
{
  "truncate": "overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;",
  "overflow-ellipsis": "text-overflow: ellipsis;",
  "overflow-clip": "text-overflow: clip;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 truncate bg-tp-gray-50 rounded-6">
    AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
    Component）组成。
  </div>
)
```
