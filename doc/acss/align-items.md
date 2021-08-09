---
title: Align Items
---

AD UI 引入了以下功能类，以控制 `flex` 和 `grid` 在交叉轴方向上的默认对齐方式。

相关 CSS 属性：`align-items`

```json classes
{
  "items-start": "align-items: flex-start;",
  "items-end": "align-items: flex-end;",
  "items-center": "align-items: center;",
  "items-baseline": "align-items: baseline;",
  "items-stretch": "align-items: stretch;"
}
```

```jsx acss
return (
  <div className="flex items-center p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="w-1/3 p-4">
      <div className="h-20 leading-20 bg-green rounded-4">1</div>
    </div>
    <div className="w-1/3 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">2</div>
    </div>
    <div className="w-1/3 p-4">
      <div className="h-64 leading-64 bg-green rounded-4">3</div>
    </div>
  </div>
)
```
