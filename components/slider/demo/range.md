---
order: 1
title:
  zh-CN: 按钮类型
  en-US: Type
---

双滑块 Tooltip 合并设计：

```jsx
return (
  <Slider
    defaultValue={[25, 50]}
    range
    inputVisible
    tooltipVisible
    marks={{ 0: 0, 25: 25, 50: 50, 75: 75, 100: 100 }}
    className="flex-1"
    tipFormatter={(value) => value}
  />
)
```
