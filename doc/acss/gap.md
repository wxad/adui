---
title: Gap
---

AD UI 引入了以下功能类，以控制 `grid` 容器内行与列的间隙。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `gap-64`，不支持 `gap-63`。

相关 CSS 属性：`gap`

```json classes
{
  "gap-[0-500]": "gap: [0-500]px;",
  "gap-x-[0-500]": "row-gap: [0-500]px;",
  "gap-y-[0-500]": "column-gap: [0-500]px;"
}
```

```jsx acss
return (
  <div className="grid grid-flow-col grid-rows-3 gap-x-8 gap-y-16 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">
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
