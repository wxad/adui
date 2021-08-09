---
title: Z Index
---

AD UI 引入了以下功能类，以控制元素在层叠上下文中的优先级。

相关 CSS 属性：`z-index`

```json classes
{
  "z-auto": "z-index: auto;",
  "z-0": "z-index: 0;",
  "z-1": "z-index: 1;",
  "z-2": "z-index: 2;",
  "z-10": "z-index: 10;",
  "z-20": "z-index: 20;",
  "z-30": "z-index: 30;",
  "z-40": "z-index: 40;",
  "z-50": "z-index: 50;",
  "z-1029": "z-index: 1029;",
  "z-1030": "z-index: 1030;",
  "z-1031": "z-index: 1031;",
  "z-1040": "z-index: 1040;",
  "z-1060": "z-index: 1060;",
  "z-1080": "z-index: 1080;",
  "z-1090": "z-index: 1090;"
}
```

```jsx acss
return (
  <div className="relative h-200 text-white text-16">
    <div className="absolute z-10 top-32 left-0 flex items-center justify-center w-48 h-48 py-10 bg-green rounded-4">
      1
    </div>
    <div className="absolute z-1 top-64 left-32 flex items-center justify-center w-48 h-48 py-10 bg-gray-200 rounded-4">
      2
    </div>
    <div className="absolute z-2 top-96 left-64 flex items-center justify-center w-48 h-48 py-10 bg-gray-600 rounded-4">
      3
    </div>
  </div>
)
```
