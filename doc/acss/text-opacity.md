---
title: Text Opacity
---

AD UI 引入了以下功能类，以控制元素内文字的不透明度。

相关 CSS 属性：`--tw-text-opacity`

```json classes
{
  "text-opacity-0": "--tw-text-opacity: 0;",
  "text-opacity-5": "--tw-text-opacity: 0.05;",
  "text-opacity-10": "--tw-text-opacity: 0.1;",
  "text-opacity-20": "--tw-text-opacity: 0.2;",
  "text-opacity-25": "--tw-text-opacity: 0.25;",
  "text-opacity-30": "--tw-text-opacity: 0.3;",
  "text-opacity-40": "--tw-text-opacity: 0.4;",
  "text-opacity-50": "--tw-text-opacity: 0.5;",
  "text-opacity-60": "--tw-text-opacity: 0.6;",
  "text-opacity-70": "--tw-text-opacity: 0.7;",
  "text-opacity-75": "--tw-text-opacity: 0.75;",
  "text-opacity-80": "--tw-text-opacity: 0.8;",
  "text-opacity-90": "--tw-text-opacity: 0.9;",
  "text-opacity-95": "--tw-text-opacity: 0.95;",
  "text-opacity-100": "--tw-text-opacity: 1;"
}
```

```jsx acss
return (
  <div className="p-16 space-y-20 bg-tp-gray-50 rounded-6">
    {[0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-140 text-tp-gray-600">{`text-opacity-${o}`}</span>
        <span
          className="flex-1 min-w-0 truncate"
          style={{ lineHeight: "initial", opacity: o / 100 }}
        >
          AD UI 的组件由有状态组件（Class Component），函数式组件（Functional
          Component）组成。
        </span>
      </div>
    ))}
  </div>
)
```
