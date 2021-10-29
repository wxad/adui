---
order: 0
title:
  zh-CN: renderDay
  en-US: renderDay
---

使用 `renderDay` 自定义每个日期的显示；使用 `dropdownRender` 自定义下拉框显示：

```jsx
const [date, setDate] = useState(new Date())

return (
  <DatePicker
    value={date}
    onChange={setDate}
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
    dropdownRender={(popup) => (
      <React.Fragment>
        {popup}
        <div className="flex items-center justify-center p-8 shadow-t-tp-gray-100">
          <Button
            theme="light"
            onClick={() => {
              setDate(new Date())
            }}
          >
            回到今天
          </Button>
        </div>
      </React.Fragment>
    )}
    triggerElement={<Button rightIcon="triangle-down">选择日期</Button>}
  />
)
```
