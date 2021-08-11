---
title: 间距 Spacing
---

AD UI 规范了间距的数字必须被 4 整除，默认的配置中包含了 -500 ~ 500 内的数字。

相关 CSS 属性：`margin` `padding` `width` `height` 及这四个属性的子属性

---

完整的 `spacing` 配置：

```javascript
const spacing = {}
for (let index = 0; index <= 500; index += 4) {
  spacing[index] = `${index}${index === 0 ? "" : "px"}`
}

// tailwind.config.js
module.exports = { theme: { spacing } }
```

```jsx acss
const spacing = {}
for (let index = 0; index <= 200; index += 4) {
  spacing[index] = `${index}${index === 0 ? "" : "px"}`
}

return (
  <Table
    className="w-full"
    dataSource={Object.keys(spacing).map((o) => ({
      value: o,
    }))}
    columns={[
      {
        dataIndex: "class",
        title: "类名",
        width: 200,
        render: ({ value }) => `w-${value}`,
      },
      {
        dataIndex: "value",
        title: "值",
        width: 200,
        render: ({ value }) => `${value}px`,
      },
      {
        dataIndex: "length",
        title: "",
        render: ({ value }) => (
          <div className={`h-20 bg-tp-gray-300 rounded-6 w-${value}`} />
        ),
      },
    ]}
  />
)
```
