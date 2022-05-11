---
title: Text Align
---

AD UI 引入了以下功能类，以控制元素内文字 的对齐方式。

相关 CSS 属性：`text-align`

```json classes
{
  "text-left": "text-align: left;",
  "text-center": "text-align: center;",
  "text-right": "text-align: right;",
  "text-justify": "text-align: justify;"
}
```

```jsx acss
return (
  <div className="p-16 w-full text-right bg-tp-gray-100 space-x-4 text-white rounded-4">
    <div className="inline-block px-16 py-10 bg-green rounded-4">1</div>
    <div className="inline-block px-16 py-10 bg-green rounded-4">2</div>
    <div className="inline-block px-16 py-10 bg-green rounded-4">3</div>
  </div>
)
```
