---
order: 2
title:
  zh-CN: 自定义结果显示
  en-US: dropdownRender
---

使用 `dropdownRender` 对下拉菜单进行自由扩展。

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
          {
            value: "创意2",
            title: "创意2",
          },
          {
            value: "创意3",
            title: "创意3",
          },
          {
            value: "创意4",
            title: "创意4",
          },
          {
            value: "创意5",
            title: "创意5",
          },
          {
            value: "创意6",
            title: "创意6",
          },
          {
            value: "创意7",
            title: "创意7",
          },
          {
            value: "创意8",
            title: "创意8",
          },
          {
            value: "创意9",
            title: "创意9",
          },
          {
            value: "创意10",
            title: "创意10",
          },
          {
            value: "创意11",
            title: "创意11",
          },
          {
            value: "创意12",
            title: "创意12",
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
    dropdownRender={(menus) => (
      <React.Fragment>
        {menus}
        <div className="p-16 shadow-t-tp-gray-100">添加自定义的 Footer</div>
      </React.Fragment>
    )}
  />
)
```
