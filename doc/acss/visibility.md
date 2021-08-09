---
title: Visibility
---

AD UI 引入了以下功能类，以控制元素的可见与否。

相关 CSS 属性：`visibility`

```json classes
{
  "visible": "visibility: visible;",
  "invisible": "visibility: hidden;"
}
```

```jsx acss
return (
  <div className="inline-flex p-16 bg-tp-gray-100 space-x-4 text-white rounded-4">
    <div className="px-16 py-10 bg-green rounded-4">1</div>
    <div className="px-16 py-10 bg-green rounded-4 invisible">2</div>
    <div className="px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
