---
order: 1
title:
  zh-CN: 内部驱动
  en-US: Type
---

虚拟滚动，处理 `10000` 行数据：

```jsx
const options = []
for (let i = 0; i < 10000; i++) {
  const value = `${i.toString(36)}${i}`
  options.push({
    value,
  })
}

return (
  <Select
    className="w-2/4"
    searchable
    filterOption={(inputValue, option) => {
      if (inputValue.includes(option.props.value)) {
        return true
      }
      return false
    }}
  >
    {options.map(({ value }) => (
      <Select.Option value={value} key={value}>
        <div className="flex items-center">
          <img
            className="mr-8 w-24 h-24"
            src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/moment-preview/placeholder/vid.png"
            alt=""
          />
          {value}
        </div>
      </Select.Option>
    ))}
  </Select>
)
```

## Alert

### 虚拟滚动与 dropdownMatchSelectWidth Prop

当 `dropdownMatchSelectWidth` 为 `false` 时，虚拟滚动将失效。在 adui 2.0 前，此 Prop 默认为 `false`，现在改为 `true`，请注意对样式的影响。
