---
title: Fill
---

AD UI 引入了以下功能类，以控制 `svg` 元素的填充色。

相关 CSS 属性：`fill`

```json classes
{
  "fill-current": "fill: currentColor;"
}
```

```jsx acss
return (
  <div className="flex items-center p-16 text-green bg-tp-gray-50 rounded-6">
    <Icon icon="game" className="mr-8 fill-current" />
    <span className="text-current">AD UI</span>
  </div>
)
```
