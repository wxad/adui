---
title: Animation
---

AD UI 引入了以下功能类，以控制元素的动画。

相关 CSS 属性：`animation`

```json classes
{
  "animate-none": "animation: none;",
  "animate-spin": "animation: spin 1s linear infinite;\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
  "animate-ping": "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity:0;\n  }\n}",
  "animate-pulse": "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}",
  "animate-bounce": "animation: bounce 1s infinite;\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}"
}
```

```jsx acss
return <Icon icon="down" size={30} className="animate-bounce" />
```
