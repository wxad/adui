---
order: 1
title:
  zh-CN: Second
  en-US: Second
---

使用 `secondsAvailable` 增加秒的选择：

```jsx
/**
 * 示例限制：06:27 - 23:45，且 12 点不能选。
 */

const [value, setValue] = useState("19:00:05")

return (
  <React.Fragment>
    <TimePicker
      key={0}
      minTime="06:27:27"
      maxTime="23:45:45"
      disabledHours={(hour) => hour === "12"}
      disabledSeconds={(second) => second !== "00" && second !== "30"}
      className="mr-16"
      value={value}
      onChange={(val) => setValue(val)}
      secondsAvailable
    />
  </React.Fragment>
)
```
