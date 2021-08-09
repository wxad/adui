---
title: Grid Auto Flow
---

AD UI 引入了以下功能类，以控制 `grid` 容器的自动布局算法如何运作，指定在网格中被自动布局的元素怎样排列。

相关 CSS 属性：`grid-auto-flow`

```json classes
{
  "grid-flow-row": "grid-auto-flow: row;",
  "grid-flow-col": "grid-auto-flow: column;",
  "grid-flow-row-dense": "grid-auto-flow: row dense;",
  "grid-flow-col-dense": "grid-auto-flow: column dense;"
}
```

```jsx acss
return (
  <div className="grid grid-flow-col grid-rows-3 gap-8 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
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
