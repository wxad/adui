---
title: Grid Template Rows
---

AD UI 引入了以下功能类，以控制 `grid` 容器的行布局。

相关 CSS 属性：`grid-template-rows`

```json classes
{
  "grid-rows-1": "grid-template-rows: repeat(1, minmax(0, 1fr));",
  "grid-rows-2": "grid-template-rows: repeat(2, minmax(0, 1fr));",
  "grid-rows-3": "grid-template-rows: repeat(3, minmax(0, 1fr));",
  "grid-rows-4": "grid-template-rows: repeat(4, minmax(0, 1fr));",
  "grid-rows-5": "grid-template-rows: repeat(5, minmax(0, 1fr));",
  "grid-rows-6": "grid-template-rows: repeat(6, minmax(0, 1fr));",
  "grid-rows-none": "grid-template-rows: none;"
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
