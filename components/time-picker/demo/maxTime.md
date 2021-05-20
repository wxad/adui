---
order: 0
title:
  zh-CN: 限制选择
  en-US: DisabledTimes
---

使用 `maxTime`，`minTime`，`disabledHours` 限制可选择的时间：

```jsx
  /**
   * 示例限制：06:27 - 23:45，且 12 点不能选。
   */

  const [value, setValue] = useState("19:00")

  return (
    <React.Fragment>
      <TimePicker
        key={0}
        minTime="06:27"
        maxTime="23:45"
        disabledHours={hour => hour === "12"}
        className="mr-16"
        value={value}
        onChange={val => setValue(val)}
      />
      <TimePicker
        key={1}
        onlyHour
        minTime="06:00"
        maxTime="21:00"
        disabledHours={hour => hour === "12"}
        placeholder="整点"
      />
    </React.Fragment>
  )
```
