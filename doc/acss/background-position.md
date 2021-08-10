---
title: Background Position
---

AD UI 引入了以下功能类，以控制背景图片的初始位置。

相关 CSS 属性：`background-position`

```json classes
{
  "bg-bottom": "background-position: bottom;",
  "bg-center": "background-position: center;",
  "bg-left": "background-position: left;",
  "bg-left-bottom": "background-position: left bottom;",
  "bg-left-top": "background-position: left top;",
  "bg-right": "background-position: right;",
  "bg-right-bottom": "background-position: right bottom;",
  "bg-right-top": "background-position: right top;",
  "bg-top": "background-position: top;"
}
```

```jsx acss
return (
  <div
    className="inline-flex w-150 h-150 bg-right-top bg-no-repeat rounded-4 shadow-tp-gray-100"
    style={{
      backgroundImage:
        "url(//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png)",
      backgroundSize: "100px auto",
    }}
  />
)
```
