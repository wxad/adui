---
order: 0
title:
  zh-CN: 自定义结果显示
  en-US: displayRender
---

使用 `displayRender` 只显示最后一项：

```jsx
const options = [
  {
    value: "计划1",
    title: "计划1",
    children: [
      {
        value: "广告1",
        title: "广告1",
        children: [
          {
            value: "创意1",
            title: "创意1",
          },
        ],
      },
    ],
  },
  {
    value: "计划2",
    title: "计划2",
    children: [
      {
        value: "广告2",
        title: "广告2",
        children: [
          {
            value: "创意2",
            title: "创意2",
          },
        ],
      },
    ],
  },
]

return (
  <Cascader
    defaultValue={["计划1", "广告1", "创意1"]}
    options={options}
    style={{ width: "200px" }}
    changeOnSelect
    displayRender={(titles) => titles[titles.length - 1]}
  />
)
```
