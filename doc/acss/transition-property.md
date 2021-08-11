---
title: Transition Property
---

AD UI 引入了以下功能类，以控制元素的哪些属性需要过渡。

相关 CSS 属性：`transition-property`

```json classes
{
  "transition-none": "transition-property: none;",
  "transition-all": "transition-property: all;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition": "transition-property: background-color, border-color, box-shadow, color, fill, stroke, opacity, box-shadow, transform;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-colors": "transition-property: background-color, border-color, box-shadow, color, fill, stroke;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-opacity": "transition-property: opacity;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-shadow": "transition-property: box-shadow;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-transform": "transition-property: transform;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-width": "transition-property: width;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;",
  "transition-height": "transition-property: height;\ntransition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\ntransition-duration: 150ms;"
}
```

```jsx acss
return (
  <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green">
    Hover
  </div>
)
```
