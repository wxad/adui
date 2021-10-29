---
order: 1
title:
  zh-CN: 限制选择
  en-US: DisabledDays
---

使用 `maxDate`，`minDate` 及 `disabledDays` 限制可选择的日期：

```jsx
const [value, setValue] = useState(new Date())
/**
 * 示例限制：一个月前，一个月后，所有星期天，所有 6 号
 */
const oneMonthBefore = new Date()
const oneMonthLater = new Date()
oneMonthBefore.setMonth(new Date().getMonth() - 1)
oneMonthLater.setMonth(new Date().getMonth() + 1)

return (
  <DatePicker
    value={value}
    maxDate={oneMonthLater}
    minDate={oneMonthBefore}
    disabledDays={(day) => day.getDay() === 0 || day.getDate() === 6}
    onChange={(val) => setValue(val)}
  />
)
```
