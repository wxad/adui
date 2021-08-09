---
title: Padding
---

AD UI 引入了以下功能类，以控制容器内边距。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 `p-64`，不支持 `p-63`。

相关 CSS 属性：`padding` `padding-top` `padding-right` `padding-bottom` `padding-left`

```json classes
{
  "p-[0-500]": "padding: [0-500]px;",
  "px-[0-500]": "padding-left: [0-500]px;\npadding-right: [0-500]px;",
  "py-[0-500]": "padding-top: [0-500]px;\npadding-bottom: [0-500]px;",
  "pt-[0-500]": "padding-top: [0-500]px;",
  "pr-[0-500]": "padding-right: [0-500]px;",
  "pb-[0-500]": "padding-bottom: [0-500]px;",
  "pl-[0-500]": "padding-left: [0-500]px;"
}
```

```jsx acss
return (
  <div className="px-32 py-16 bg-tp-gray-100">
    <div className="flex items-center justify-center w-100 h-100 text-white bg-green">
      px-32 py-16
    </div>
  </div>
)
```
