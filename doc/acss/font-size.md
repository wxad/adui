---
title: Font Size
---

AD UI 引入了以下功能类，以控制元素内的文字字号。

相关 CSS 属性：`font-size`

```json classes
{
  "text-12": "font-size: 12px;",
  "text-13": "font-size: 13px;",
  "text-14": "font-size: 14px;",
  "text-16": "font-size: 16px;",
  "text-17": "font-size: 17px;",
  "text-18": "font-size: 18px;",
  "text-20": "font-size: 20px;",
  "text-22": "font-size: 22px;",
  "text-24": "font-size: 24px;",
  "text-28": "font-size: 28px;",
  "text-30": "font-size: 30px;",
  "text-32": "font-size: 32px;",
  "text-36": "font-size: 36px;",
  "text-40": "font-size: 40px;",
  "text-42": "font-size: 42px;",
  "text-48": "font-size: 48px;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-30 bg-tp-gray-50 rounded-6">
    {[12, 13, 14, 16, 18, 20, 22, 24, 28, 30, 32, 36].map((o) => (
      <div key={o} className="flex items-center">
        <span className="flex-none mr-16 text-tp-gray-600">{o}px</span>
        <span
          className="flex-1 min-w-0 text-tp-gray-800 truncate"
          style={{ fontSize: `${o}px`, lineHeight: "initial" }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
