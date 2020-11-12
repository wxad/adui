---
order: 1
title:
  zh-CN: 范围
  en-US: maxRange
---

使用 `onStartDaySelect` 与 `onEndDaySelect` 限制最多选连续 7 天：

```jsx
  const [startDay, setStartDay] = useState(null)
  let oneWeekBefore
  let oneWeekLater
  if (startDay) {
    oneWeekBefore = new Date(startDay.getTime() - (7 * 24 * 60 * 60 * 1000))
    oneWeekLater = new Date(startDay.getTime() + (7 * 24 * 60 * 60 * 1000))
  }

  return (
    <DatePicker.RangePicker
      disabledDays={day => startDay && (day < oneWeekBefore || day > oneWeekLater)}
      onStartDaySelect={day => setStartDay(day)}
      onEndDaySelect={() => setStartDay(null)}
    />
  )
```