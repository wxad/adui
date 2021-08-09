---
title: Top Right Bottom Left
---

AD UI 引入了以下功能类，以控制元素的偏移位置。注意：`px` 单位支持 -500 ~ 500 被 4 整除的数字，例：支持 `top-64`，不支持 `-top-63`。表格仅以 `top` 属性值列举，其他三个方位与之类似。

相关 CSS 属性：`top` `right` `bottom` `left`

```json classes
{
  "top-[0-500]": "top: [0-500]px;",
  "-top-[0-500]": "top: -[0-500]px;",
  "top-full": "top: 100%;",
  "top-1/2": "top: 50%;",
  "top-1/3": "top: 33.333333%;",
  "top-2/3": "top: 66.666667%;",
  "top-1/4": "top: 25%;",
  "top-2/4": "top: 50%;",
  "top-3/4": "top: 75%;",
  "-top-full": "top: -100%",
  "-top-1/2": "top: -50%;",
  "-top-1/3": "top: -33.333333%;",
  "-top-2/3": "top: -66.666667%;",
  "-top-1/4": "top: -25%;",
  "-top-2/4": "top: -50%;",
  "-top-3/4": "top: -75%;"
}
```

```jsx acss
return (
  <div className="relative w-full p-40 h-200 text-white bg-tp-gray-100 rounded-6">
    <div className="absolute top-50 right-50 p-20 bg-green rounded-6">
      top-50 right-50
    </div>
    <div className="absolute top-1/2 left-1/2 p-20 bg-green rounded-6">
      top-1/2 left-1/2
    </div>
  </div>
)
```
