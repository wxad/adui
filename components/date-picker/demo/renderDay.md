---
order: 0
title:
  zh-CN: renderDay
  en-US: renderDay
---

使用 `renderDay` 自定义每个日期的显示：

```jsx
return (
  <DatePicker
    renderDay={(day) => {
      const today = new Date()
      const isToday =
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth() &&
        day.getDate() === today.getDate()
      if (isToday) {
        return <div className="text-12 font-bold">今天</div>
      }
      return day.getDate()
    }}
  />
)
```
