---
title: Place Content
---

AD UI 引入了以下功能类，以同时控制 `flex` 和 `grid` 内内容主轴和交叉轴的对齐方式。

相关 CSS 属性：`place-content`

```json classes
{
  "place-content-center": "place-content: center;",
  "place-content-start": "place-content: start;",
  "place-content-end": "place-content: end;",
  "place-content-between": "place-content: space-between;",
  "place-content-around": "place-content: space-around;",
  "place-content-evenly": "place-content: space-evenly;",
  "place-content-stretch": "place-content: stretch;"
}
```

```jsx acss
return (
  <div className="grid grid-cols-3 place-content-center p-16 w-full h-200 text-white text-center bg-tp-gray-100 rounded-4">
    <div className="p-4 h-40">
      <div className="leading-40 bg-green rounded-4">1</div>
    </div>
    <div className="p-4 h-40">
      <div className="leading-40 bg-green rounded-4">2</div>
    </div>
    <div className="p-4 h-40">
      <div className="leading-40 bg-green rounded-4">3</div>
    </div>
  </div>
)
```
