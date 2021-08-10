---
title: Font Weight
---

AD UI 引入了以下功能类，以控制元素内的文字字重。

相关 CSS 属性：`font-weight`

```json classes
{
  "font-normal": "font-weight: 400;",
  "font-medium": "font-weight: 500;",
  "font-bold": "font-weight: 600;"
}
```

```jsx acss
const jsonClasses = {
  normal: 400,
  medium: 500,
  bold: 600,
}

return (
  <div className="p-16 space-y-30 bg-tp-gray-50 rounded-6">
    {Object.keys(jsonClasses).map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-60 text-tp-gray-600">{o}</span>
        <span
          className="flex-1 min-w-0 text-tp-gray-800 truncate"
          style={{ fontWeight: jsonClasses[o], lineHeight: "initial" }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
