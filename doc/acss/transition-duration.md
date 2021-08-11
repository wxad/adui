---
title: Transition Duration
---

AD UI 引入了以下功能类，以控制元素属性的过渡时间。

相关 CSS 属性：`transition-duration`

```json classes
{
  "duration-100": "100ms",
  "duration-150": "150ms",
  "duration-200": "200ms",
  "duration-300": "300ms",
  "duration-450": "450ms",
  "duration-500": "500ms",
  "duration-600": "600ms",
  "duration-1000": "1000ms"
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green duration-150">
      Hover 150
    </div>
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green duration-300">
      Hover 300
    </div>
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green duration-500">
      Hover 500
    </div>
  </div>
)
```
