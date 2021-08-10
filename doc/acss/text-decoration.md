---
title: Text Decoration
---

AD UI 引入了以下功能类，以控制元素内文字的修饰线外观。

相关 CSS 属性：`text-decoration`

```json classes
{
  "underline": "text-decoration: underline;",
  "line-through": "text-decoration: line-through;",
  "no-underline": "text-decoration: none;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-20 bg-tp-gray-50 rounded-6">
    {["underline", "line-through"].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-140 text-tp-gray-600">{o}</span>
        <span
          className="flex-1 min-w-0 truncate"
          style={{ lineHeight: "initial", textDecoration: o }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
