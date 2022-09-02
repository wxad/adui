---
order: 1
title:
  zh-CN: optionLabelProp
  en-US: optionLabelProp
---

使用 `optionLabelProp` 自定义渲染到 Select 中的结果：

```jsx
const getOptions = () => {
  const options = []
  for (let i = 0; i < 10; i++) {
    const value = `${i.toString(36)}${i}`
    options.push({
      value,
      whateverTitleULike: <div className="bg-tp-gray-400">自定义结果渲染 {value}</div>,
    })
  }
  return options
}
const [options, setOptions] = useState(getOptions())
const [loadTimes, setLoadTimes] = useState(0)
const [value, setValue] = useState(undefined)

return (
  <div className="w-2/4">
    <Select
      className="w-full"
      value={value}
      onChange={setValue}
      optionLabelProp="whateverTitleULike"
    >
      {options.map(({ value, whateverTitleULike }) => (
        <Select.Option
          key={value}
          value={value}
          whateverTitleULike={whateverTitleULike}
        >
          {value}
        </Select.Option>
      ))}
    </Select>
  </div>
)
```
