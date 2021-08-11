---
title: Translate
---

AD UI 引入了以下功能类，以  CSS 变量的方式控制元素的 `transform` 属性，可分开控制 `x` 与 `y` 两个方向。

相关 CSS 属性：`--tw-translate-x` `--tw-translate-y`

```json classes
{
  "translate-x-[0-500]": "--tw-translate-x: [0-500]px;",
  "translate-y-[0-500]": "--tw-translate-y: [0-500]px;",
  "-translate-x-[0-500]": "--tw-translate-x: -[0-500]px;",
  "-translate-y-[0-500]": "--tw-translate-y: -[0-500]px;",
  "translate-x-1/2": "--tw-translate-x: 50%",
  "translate-x-1/3": "--tw-translate-x: 33.333333%",
  "translate-x-2/3": "--tw-translate-x: 66.666667%",
  "translate-x-1/4": "--tw-translate-x: 25%",
  "translate-x-2/4": "--tw-translate-x: 50%",
  "translate-x-3/4": "--tw-translate-x: 75%",
  "translate-x-full": "--tw-translate-x: 100%",
  "...": "..."
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transform-gpu transition-all cursor-pointer hover:-translate-y-8">
      Hover Transform
    </div>
  </div>
)
```
