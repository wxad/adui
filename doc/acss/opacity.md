---
title: Opacity
---

AD UI 引入了以下功能类，以控制元素的透明度。

相关 CSS 属性：`opacity`

```json classes
{
  "opacity-0": "opacity: 0;",
  "opacity-5": "opacity: 0.05;",
  "opacity-10": "opacity: 0.1;",
  "opacity-20": "opacity: 0.2;",
  "opacity-25": "opacity: 0.25;",
  "opacity-30": "opacity: 0.3;",
  "opacity-40": "opacity: 0.4;",
  "opacity-50": "opacity: 0.5;",
  "opacity-60": "opacity: 0.6;",
  "opacity-70": "opacity: 0.7;",
  "opacity-75": "opacity: 0.75;",
  "opacity-80": "opacity: 0.8;",
  "opacity-90": "opacity: 0.9;",
  "opacity-95": "opacity: 0.95;",
  "opacity-100": "opacity: 1;"
}
```

```jsx acss
return (
  <div className="inline-flex p-20 bg-tp-gray-100 space-x-8 text-white rounded-4">
    <div className="p-16 bg-green opacity-100 rounded-4">opacity-100</div>
    <div className="p-16 bg-green opacity-75 rounded-4">opacity-75</div>
    <div className="p-16 bg-green opacity-50 rounded-4">opacity-50</div>
    <div className="p-16 bg-green opacity-25 rounded-4">opacity-25</div>
  </div>
)
```
