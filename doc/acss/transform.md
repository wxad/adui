---
title: Transform
---

AD UI 引入了以下功能类，以 CSS 变量的方式控制元素的 `transform` 属性。

相关 CSS 属性：`transform`

```json classes
{
  "transform": "--tw-translate-x: 0;\n--tw-translate-y: 0;\n--tw-rotate: 0;\n--tw-skew-x: 0;\n--tw-skew-y: 0;\n--tw-scale-x: 1;\n--tw-scale-y: 1;\ntransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
  "transform-gpu": "--tw-translate-x: 0;\n--tw-translate-y: 0;\n--tw-rotate: 0;\n--tw-skew-x: 0;\n--tw-skew-y: 0;\n--tw-scale-x: 1;\n--tw-scale-y: 1;\ntransform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
  "transform-none": "transform: none;"
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transform-gpu transition-all cursor-pointer hover:scale-150">
      Hover Transform
    </div>
  </div>
)
```
