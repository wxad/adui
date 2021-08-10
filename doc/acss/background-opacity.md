---
title: Background Opacity
---

AD UI 引入了以下功能类，以控制背景颜色的透明度。

相关 CSS 属性：`--tw-bg-opacity`

```json classes
{
  "bg-opacity-0": "--tw-bg-opacity: 0;",
  "bg-opacity-5": "--tw-bg-opacity: 0.05;",
  "bg-opacity-10": "--tw-bg-opacity: 0.1;",
  "bg-opacity-20": "--tw-bg-opacity: 0.2;",
  "bg-opacity-25": "--tw-bg-opacity: 0.25;",
  "bg-opacity-30": "--tw-bg-opacity: 0.3;",
  "bg-opacity-40": "--tw-bg-opacity: 0.4;",
  "bg-opacity-50": "--tw-bg-opacity: 0.5;",
  "bg-opacity-60": "--tw-bg-opacity: 0.6;",
  "bg-opacity-70": "--tw-bg-opacity: 0.7;",
  "bg-opacity-75": "--tw-bg-opacity: 0.75;",
  "bg-opacity-80": "--tw-bg-opacity: 0.8;",
  "bg-opacity-90": "--tw-bg-opacity: 0.9;",
  "bg-opacity-95": "--tw-bg-opacity: 0.95;",
  "bg-opacity-100": "--tw-bg-opacity: 1;"
}
```

```jsx acss
return (
  <div className="inline-flex p-20 bg-tp-gray-100 space-x-8 text-white rounded-4">
    <div className="p-16 bg-green bg-opacity-100 rounded-4">bg-opacity-100</div>
    <div className="p-16 bg-green bg-opacity-75 rounded-4">bg-opacity-75</div>
    <div className="p-16 bg-green bg-opacity-50 rounded-4">bg-opacity-50</div>
    <div className="p-16 bg-green bg-opacity-25 rounded-4">bg-opacity-25</div>
  </div>
)
```
