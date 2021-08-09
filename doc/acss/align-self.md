---
title: Align Self
---

AD UI 引入了以下功能类，以控制 `flex` 和 `grid` 内单一元素在交叉轴方向上的对齐方式。

相关 CSS 属性：`align-self`

```json classes
{
  "self-auto": "align-self: auto;",
  "self-start": "align-self: flex-start;",
  "self-end": "align-self: flex-end;",
  "self-center": "align-self: center;",
  "self-stretch": "align-self: stretch;"
}
```

```jsx acss
return (
  <div className="flex p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="self-end w-1/3 p-4">
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
