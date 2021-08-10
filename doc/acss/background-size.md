---
title: Background Size
---

AD UI 引入了以下功能类，以控制背景图片的尺寸。

相关 CSS 属性：`background-size`

```json classes
{
  "bg-auto": "background-size: auto;",
  "bg-cover": "background-size: cover;",
  "bg-contain": "background-size: contain;"
}
```

```jsx acss
return (
  <div
    className="inline-flex w-150 h-150 bg-contain bg-center bg-no-repeat rounded-4 shadow-tp-gray-100"
    style={{
      backgroundImage:
        "url(//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png)",
    }}
  />
)
```
