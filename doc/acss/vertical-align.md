---
title: Vertical Align
---

AD UI 引入了以下功能类，以控制 `inline` 或 `table-cell` 元素的垂直对齐方式。

相关 CSS 属性：`vertical-align`

```json classes
{
  "align-baseline": "vertical-align: baseline;",
  "align-top": "vertical-align: top;",
  "align-middle": "vertical-align: middle;",
  "align-bottom": "vertical-align: bottom;",
  "align-text-top": "vertical-align: text-top;",
  "align-text-bottom": "vertical-align: text-bottom;"
}
```

```jsx acss
return (
  <div className="p-16 bg-tp-gray-100 space-x-4 text-white rounded-4">
    <div className="inline-block align-top px-16 py-10 bg-green rounded-4">
      1
    </div>
    <div className="inline-block align-top px-16 py-20 bg-green rounded-4">
      2
    </div>
    <div className="inline-block align-top px-16 py-30 bg-green rounded-4">
      3
    </div>
  </div>
)
```
