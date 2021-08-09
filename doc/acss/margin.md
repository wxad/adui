---
title: Margin
---

AD UI 引入了以下功能类，以控制容器外边距。注意：支持 -500 ~ 500 被 4 整除的数字，例：支持 `m-64`，不支持 `-m-63`。

相关 CSS 属性：`margin` `margin-top` `margin-right` `margin-bottom` `margin-left`

```json classes
{
  "m-[0-500]": "margin: [0-500]px;",
  "mx-[0-500]": "margin-left: [0-500]px;\nmargin-right: [0-500]px;",
  "my-[0-500]": "margin-top: [0-500]px;\nmargin-bottom: [0-500]px;",
  "mt-[0-500]": "margin-top: [0-500]px;",
  "mr-[0-500]": "margin-right: [0-500]px;",
  "mb-[0-500]": "margin-bottom: [0-500]px;",
  "ml-[0-500]": "margin-left: [0-500]px;",
  "-m-[0-500]": "margin: -[0-500]px;",
  "-mx-[0-500]": "margin-left: -[0-500]px;\nmargin-right: -[0-500]px;",
  "-my-[0-500]": "margin-top: -[0-500]px;\nmargin-bottom: -[0-500]px;",
  "-mt-[0-500]": "margin-top: -[0-500]px;",
  "-mr-[0-500]": "margin-right: -[0-500]px;",
  "-mb-[0-500]": "margin-bottom: -[0-500]px;",
  "-ml-[0-500]": "margin-left: -[0-500]px;"
}
```

```jsx acss
return (
  <div className="bg-tp-gray-100">
    <div className="flex items-center justify-center mx-32 my-16 w-100 h-100 text-white bg-green">
      mx-32 my-16
    </div>
  </div>
)
```
