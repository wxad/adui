---
title: Flex Direction
---

AD UI 引入了以下功能类，以控制 `flex` 容器内的元素是如何布局的，定义了主轴的方向。

相关 CSS 属性：`flex-direction`

```json classes
{
  "flex-row": "flex-direction: row;",
  "flex-row-reverse": "flex-direction: row-reverse;",
  "flex-col": "flex-direction: column;",
  "flex-col-reverse": "flex-direction: column-reverse;"
}
```

```jsx acss
return (
  <div className="flex flex-col space-y-4 p-16 w-1/2 text-white text-center bg-tp-gray-100 rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
