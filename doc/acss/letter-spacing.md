---
title: Letter Spacing
---

AD UI 引入了以下功能类，以控制元素内的文字间距。

相关 CSS 属性：`letter-spacing`

```json classes
{
  "tracking-0": "letter-spacing: 0;",
  "tracking-0.5": "letter-spacing: 0.5px;",
  "tracking-1": "letter-spacing: 1px;",
  "tracking-2": "letter-spacing: 2px;",
  "tracking-4": "letter-spacing: 4px;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-30 bg-tp-gray-50 rounded-6">
    {[0, 0.5, 1, 2, 4].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-100 text-tp-gray-600">{`tracking-${o}`}</span>
        <span
          className="flex-1 min-w-0 text-tp-gray-800 truncate"
          style={{ letterSpacing: `${o}px`, lineHeight: "initial" }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
