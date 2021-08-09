---
title: Grid Template Columns
---

AD UI 引入了以下功能类，以控制 `grid` 容器的列布局。

相关 CSS 属性：`grid-template-columns`

```json classes
{
  "grid-cols-1": "grid-template-columns: repeat(1, minmax(0, 1fr));",
  "grid-cols-2": "grid-template-columns: repeat(2, minmax(0, 1fr));",
  "grid-cols-3": "grid-template-columns: repeat(3, minmax(0, 1fr));",
  "grid-cols-4": "grid-template-columns: repeat(4, minmax(0, 1fr));",
  "grid-cols-5": "grid-template-columns: repeat(5, minmax(0, 1fr));",
  "grid-cols-6": "grid-template-columns: repeat(6, minmax(0, 1fr));",
  "grid-cols-7": "grid-template-columns: repeat(7, minmax(0, 1fr));",
  "grid-cols-8": "grid-template-columns: repeat(8, minmax(0, 1fr));",
  "grid-cols-9": "grid-template-columns: repeat(9, minmax(0, 1fr));",
  "grid-cols-10": "grid-template-columns: repeat(10, minmax(0, 1fr));",
  "grid-cols-11": "grid-template-columns: repeat(11, minmax(0, 1fr));",
  "grid-cols-12": "grid-template-columns: repeat(12, minmax(0, 1fr));",
  "grid-cols-none": "grid-template-columns: none;"
}
```

```jsx acss
return (
  <div className="grid grid-cols-3 gap-8 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
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
