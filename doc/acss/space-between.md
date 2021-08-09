---
title: Space Between
---

AD UI 引入了以下功能类，以统一控制容器内元素之间的间距。注意：支持 -500 ~ 500 被 4 整除的数字，例：支持 `space-x-64`，不支持 `-space-y-63`。

相关 CSS 属性：`margin` `margin-top` `margin-right` `margin-bottom` `margin-left`

```json classes
{
  "space-x-[0-500]": "子元素：\nmargin-left: [0-500]px;\nmargin-right: [0-500]px;",
  "space-y-[0-500]": "子元素：\nmargin-top: [0-500]px;\nmargin-bottom: [0-500]px;",
  "-space-x-[0-500]": "子元素：\nmargin-left: -[0-500]px;\nmargin-right: -[0-500]px;",
  "-space-y-[0-500]": "子元素：\nmargin-top: -[0-500]px;\nmargin-bottom: -[0-500]px;"
}
```

```jsx acss
return (
  <div className="inline-flex p-16 bg-tp-gray-100 space-x-4 text-white rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
