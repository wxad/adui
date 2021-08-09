---
title: Flex Wrap
---

AD UI 引入了以下功能类，以控制 `flex` 容器内的元素允许换行的方式。

相关 CSS 属性：`flex-wrap`

```json classes
{
  "flex-wrap": "flex-wrap: wrap;",
  "flex-wrap-reverse": "flex-wrap: wrap-reverse;",
  "flex-nowrap": "flex-wrap: nowrap;"
}
```

```jsx acss
return (
  <div className="flex flex-wrap p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
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
