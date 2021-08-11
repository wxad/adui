---
title: Rotate
---

AD UI 引入了以下功能类，以 CSS 变量的方式控制元素的 `transform` 属性。

相关 CSS 属性：`--tw-rotate`

```json classes
{
  "rotate-0": "--tw-rotate: 0;",
  "-rotate-180": "--tw-rotate: -180deg;",
  "-rotate-90": "--tw-rotate: -90deg;",
  "-rotate-45": "--tw-rotate: -45deg;",
  "rotate-45": "--tw-rotate: 45deg;",
  "rotate-90": "--tw-rotate: 90deg;",
  "rotate-180": "--tw-rotate: 180deg;"
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transform-gpu transition-all cursor-pointer hover:rotate-45">
      Hover Transform
    </div>
  </div>
)
```
