---
title: Transition Delay
---

AD UI 引入了以下功能类，以控制元素属性的过渡延时。

相关 CSS 属性：`transition-delay`

```json classes
{
  "delay-100": "100ms",
  "delay-150": "150ms",
  "delay-200": "200ms",
  "delay-300": "300ms",
  "delay-450": "450ms",
  "delay-500": "500ms",
  "delay-600": "600ms",
  "delay-1000": "1000ms"
}
```

```jsx acss
return (
  <div className="flex space-x-16 p-16 text-center rounded-4">
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green delay-150">
      Hover 150
    </div>
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green delay-300">
      Hover 300
    </div>
    <div className="p-16 bg-tp-gray-100 rounded-4 transition-colors cursor-pointer hover:text-white hover:bg-green delay-500">
      Hover 500
    </div>
  </div>
)
```
