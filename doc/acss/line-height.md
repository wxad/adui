---
title: Line Height
---

AD UI 引入了以下功能类，以控制元素内的文字行高。

相关 CSS 属性：`line-height`

```json classes
{
  "leading-none": "line-height: 1;",
  "leading-12": "line-height: 12px;",
  "leading-14": "line-height: 14px;",
  "leading-16": "line-height: 16px;",
  "leading-17": "line-height: 17px;",
  "leading-18": "line-height: 18px;",
  "leading-20": "line-height: 20px;",
  "leading-24": "line-height: 24px;",
  "leading-25": "line-height: 25px;",
  "leading-28": "line-height: 28px;",
  "leading-32": "line-height: 32px;",
  "leading-36": "line-height: 36px;",
  "leading-40": "line-height: 40px;",
  "leading-42": "line-height: 42px;",
  "leading-48": "line-height: 48px;",
  "leading-52": "line-height: 52px;",
  "leading-64": "line-height: 64px;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-30 bg-tp-gray-50 rounded-6">
    {[14, 18, 24, 28, 32, 36, 42, 48, 52, 64].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-100 text-tp-gray-600">{`leading-${o}`}</span>
        <span
          className="flex-1 min-w-0 text-tp-gray-800 truncate"
          style={{ lineHeight: `${o}px` }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
