---
title: Justify Items
---

AD UI 引入了以下功能类，以控制 `grid` 容器内所有元素默认在适当轴中的对齐方式。

相关 CSS 属性：`justify-items`

```json classes
{
  "justify-items-start": "justify-items: start;",
  "justify-items-end": "justify-items: end;",
  "justify-items-center": "justify-items: center;",
  "justify-items-stretch": "justify-items: stretch;"
}
```

```jsx acss
return (
  <div className="grid grid-flow-col grid-rows-3 gap-8 justify-items-start p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
    <div className="px-16 py-10 bg-green rounded-4">4</div>
    <div className="px-16 py-10 bg-green rounded-4">5</div>
    <div className="px-16 py-10 bg-green rounded-4">6</div>
    <div className="px-16 py-10 bg-green rounded-4">7</div>
    <div className="px-16 py-10 bg-green rounded-4">8</div>
    <div className="px-16 py-10 bg-green rounded-4">9</div>
  </div>
)
```
