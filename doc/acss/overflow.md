---
title: Overflow
---

AD UI 引入了以下功能类，以控制元素内容超过其容器时的表现。

相关 CSS 属性：`overflow` `::-webkit-scrollbar`

```json classes
{
  "overflow-overlay": "overflow: overlay;\n::-webkit-scrollbar{\n  width: 14px;\n  height: 14px;\n}\n...",
  "overflow-auto": "overflow: auto;",
  "overflow-hidden": "overflow: hidden;",
  "overflow-visible": "overflow: visible;",
  "overflow-scroll": "overflow: scroll;",
  "overflow-x-auto": "overflow-x: auto;",
  "overflow-y-auto": "overflow-y: auto;",
  "overflow-x-hidden": "overflow-x: hidden;",
  "overflow-y-hidden": "overflow-y: hidden;",
  "overflox-x-visible": "overflow-x: visible;",
  "overflow-y-visible": "overflow-y: visible;",
  "overflow-x-scroll": "overflow-x: scroll;",
  "overflow-y-scroll": "overflow-y: scroll;"
}
```

```jsx acss
return (
  <div className="w-3/4 h-300 overflow-overlay text-16 text-white text-center rounded-6">
    <div className="p-20 bg-green bg-opacity-10">1</div>
    <div className="p-20 bg-green bg-opacity-20">2</div>
    <div className="p-20 bg-green bg-opacity-30">3</div>
    <div className="p-20 bg-green bg-opacity-40">4</div>
    <div className="p-20 bg-green bg-opacity-50">5</div>
    <div className="p-20 bg-green bg-opacity-60">6</div>
  </div>
)
```
