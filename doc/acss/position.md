---
title: Position
---

AD UI 引入了以下功能类，以控制元素的定位方式。

相关 CSS 属性：`position`

```json classes
{
  "static": "position: static;",
  "fixed": "position: fixed;",
  "absolute": "position: absolute;",
  "relative": "position: relative;",
  "sticky": "position: sticky;"
}
```

```jsx acss
return (
  <div className="relative w-full p-40 h-200 text-16 text-white bg-green bg-opacity-20 rounded-6">
    <div className="p-20 h-120 bg-green bg-opacity-30 rounded-6">
      static
      <div className="absolute left-0 bottom-0 p-20 bg-green rounded-6">
        absolute
      </div>
    </div>
  </div>
)
```
