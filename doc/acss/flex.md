---
title: Flex
---

AD UI 引入了以下功能类，以控制 `flex` 容器内的元素如何增大或缩小以适应可用的空间。

相关 CSS 属性：`flex`

```json classes
{
  "flex-1": "flex: 1 1 0%;",
  "flex-auto": "flex: 1 1 auto;",
  "flex-intial": "flex: 0 1 auto;",
  "flex-none": "flex: none"
}
```

```jsx acss
return (
  <div className="flex p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
    <div className="flex-1 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">1</div>
    </div>
    <div className="flex-1 p-4">
      <div className="h-40 leading-40 bg-green rounded-4">2</div>
    </div>
  </div>
)
```
