---
order: 0
title:
  zh-CN: 滚动加载
  en-US: Scroll
---

使用 `onPopupScroll` 滚动加载数据：

```jsx
const getOptions = () => {
  const options = []
  for (let i = 0; i < 10; i++) {
    const value = `${i.toString(36)}${i}`
    options.push({
      value,
    })
  }
  return options
}
const [options, setOptions] = useState(getOptions())
const [loadTimes, setLoadTimes] = useState(0)
const [value, setValue] = useState(undefined)

return (
  <div className="w-2/4">
    <div className="mb-12">已加载次数：{loadTimes}</div>
    <Select
      className="w-full"
      onPopupScroll={(e) => {
        const { scrollHeight, scrollTop, offsetHeight } = e.target
        if (scrollTop + offsetHeight > scrollHeight - 32) {
          setLoadTimes(loadTimes + 1)
          setOptions([...options, ...getOptions()])
        }
      }}
      value={value}
      onChange={setValue}
    >
      {options.map(({ value }) => (
        <Select.Option key={value} value={value}>
          {value}
        </Select.Option>
      ))}
    </Select>
  </div>
)
```
