---
title: Background Repeat
---

AD UI 引入了以下功能类，以控制背景图片的重复方式。

相关 CSS 属性：`background-repeat`

```json classes
{
  "bg-repeat": "background-repeat: repeat;",
  "bg-no-repeat": "background-repeat: no-repeat;",
  "bg-repeat-x": "background-repeat: repeat-x;",
  "bg-repeat-y": "background-repeat: repeat-y;",
  "bg-repeat-round": "background-repeat: round;",
  "bg-repeat-space": "background-repeat: space;"
}
```

```jsx acss
return (
  <div
    className="inline-flex w-150 h-150 bg-right-top bg-repeat-y rounded-4 shadow-tp-gray-100"
    style={{
      backgroundImage:
        "url(//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png)",
      backgroundSize: "100px auto",
    }}
  />
)
```
