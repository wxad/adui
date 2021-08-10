---
title: Text Transform
---

AD UI 引入了以下功能类，以控制元素内文字的大小写显示。

相关 CSS 属性：`text-transform`

```json classes
{
  "uppercase": "text-transform: uppercase;",
  "lowercase": "text-transform: lowercase;",
  "capitalize": "text-transform: capitalize;",
  "normal-case": "text-transform: none;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-20 bg-tp-gray-50 rounded-6">
    {["upperCase", "lowercase", "capitalize"].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-100 text-tp-gray-600">{o}</span>
        <span
          className="flex-1 min-w-0 truncate"
          style={{ lineHeight: "initial", textTransform: o }}
        >
          AD UI is a UI full of ads.
        </span>
      </div>
    ))}
  </div>
)
```
