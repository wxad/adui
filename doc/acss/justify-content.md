---
title: Justify Content
---

AD UI 引入了以下功能类，以控制 `flex` 和 `grid` 容器内的元素是如何在主轴方向布局的。

相关 CSS 属性：`justify-content`

```json classes
{
  "justify-start": "justify-content: flex-start;",
  "justify-end": "justify-content: flex-end;",
  "justify-center": "justify-content: center;",
  "justify-between": "justify-content: space-between;",
  "justify-around": "justify-content: space-around;",
  "justify-evenly": "justify-content: space-evenly;"
}
```

```jsx acss
return (
  <div className="flex justify-center space-x-4 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
