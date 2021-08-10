---
title: Whitespace
---

AD UI 引入了以下功能类，以处理元素中的空白。

相关 CSS 属性：`white-space`

```json classes
{
  "whitespace-normal": "white-space: normal;",
  "whitespace-nowrap": "white-space: nowrap;",
  "whitespace-pre": "white-space: pre;",
  "whitespace-pre-line": "white-space: pre-line;",
  "whitespace-pre-wrap": "white-space: pre-wrap;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 whitespace-nowrap bg-tp-gray-50 rounded-6">
    AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
    Component）组成。
  </div>
)
```
