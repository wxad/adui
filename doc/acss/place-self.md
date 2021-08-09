---
title: Place Self
---

AD UI 引入了以下功能类，以同时控制 `flex` 和 `grid` 内单个元素主轴和交叉轴的对齐方式。

相关 CSS 属性：`place-self`

```json classes
{
  "place-self-auto": "place-self: auto;",
  "place-self-start": "place-self: start;",
  "place-self-end": "place-self: end;",
  "place-self-center": "place-self: center;",
  "place-self-stretch": "place-self: stretch;"
}
```

```jsx acss
return (
  <div className="grid grid-cols-3 place-items-start p-16 w-full h-200 text-white text-center bg-tp-gray-100 rounded-4">
    <div className="place-self-center w-40 h-40 leading-40 bg-green rounded-4">
      1
    </div>
    <div className="w-40 h-40 leading-40 bg-green rounded-4">2</div>
    <div className="w-40 h-40 leading-40 bg-green rounded-4">3</div>
  </div>
)
```
