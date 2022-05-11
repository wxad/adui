---
title: Scale
---

AD UI 引入了以下功能类，以 CSS 变量的方式控制元素的 `transform` 属性，可分开控制 `x` 与 `y` 两个方向。

相关 CSS 属性：`--tw-scale-x` `--tw-scale-y`

```json classes
{
  "scale-0": "--tw-scale-x: 0;\n--tw-scale-y: 0;",
  "scale-25": "--tw-scale-x: 0.25;\n--tw-scale-y: 0.25;",
  "scale-50": "--tw-scale-x: .5;\n--tw-scale-y: .5;",
  "scale-75": "--tw-scale-x: .75;\n--tw-scale-y: .75;",
  "scale-90": "--tw-scale-x: .9;\n--tw-scale-y: .9;",
  "scale-95": "--tw-scale-x: .95;\n--tw-scale-y: .95;",
  "scale-100": "--tw-scale-x: 1;\n--tw-scale-y: 1;",
  "scale-105": "--tw-scale-x: 1.05;\n--tw-scale-y: 1.05;",
  "scale-110": "--tw-scale-x: 1.1;\n--tw-scale-y: 1.1;",
  "scale-125": "--tw-scale-x: 1.25;\n--tw-scale-y: 1.25;",
  "scale-150": "--tw-scale-x: 1.5;\n--tw-scale-y: 1.5;",
  "scale-x-0": "--tw-scale-x: 0;",
  "scale-x-25": "--tw-scale-x: 0.25;",
  "scale-x-50": "--tw-scale-x: .5;",
  "scale-x-75": "--tw-scale-x: .75;",
  "scale-x-90": "--tw-scale-x: .9;",
  "scale-x-95": "--tw-scale-x: .95;",
  "scale-x-100": "--tw-scale-x: 1;",
  "scale-x-105": "--tw-scale-x: 1.05;",
  "scale-x-110": "--tw-scale-x: 1.1;",
  "scale-x-125": "--tw-scale-x: 1.25;",
  "scale-x-150": "--tw-scale-x: 1.5;",
  "scale-y-0": "--tw-scale-y: 0;",
  "scale-y-25": "--tw-scale-y: 0.25;",
  "scale-y-50": "--tw-scale-y: .5;",
  "scale-y-75": "--tw-scale-y: .75;",
  "scale-y-90": "--tw-scale-y: .9;",
  "scale-y-95": "--tw-scale-y: .95;",
  "scale-y-100": "--tw-scale-y: 1;",
  "scale-y-105": "--tw-scale-y: 1.05;",
  "scale-y-110": "--tw-scale-y: 1.1;",
  "scale-y-125": "--tw-scale-y: 1.25;",
  "scale-y-150": "--tw-scale-y: 1.5;"
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
