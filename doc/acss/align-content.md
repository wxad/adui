---
title: Align Content
---

AD UI 引入了以下功能类，以控制 `flex` 和 `grid` 主轴在内容项之间和周围如何分配空间。

相关 CSS 属性：`align-content`

```json classes
{
  "content-center": "align-content: center;",
  "content-start": "align-content: flex-start;",
  "content-end": "align-content: flex-end;",
  "content-between": "align-content: space-between;",
  "content-around": "align-content: space-around;",
  "content-evenly": "align-content: space-evenly;"
}
```

```jsx acss
return (
  <div className="flex flex-wrap content-between p-16 h-200 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="w-1/2 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">1</div>
    </div>
    <div className="w-1/2 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">2</div>
    </div>
    <div className="w-1/2 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">3</div>
    </div>
  </div>
)
```
