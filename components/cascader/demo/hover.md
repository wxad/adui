---
order: 1
title:
  zh-CN: 移入展开
  en-US: hover
---

通过移入展开下级菜单，点击完成选择：

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
    expandTrigger="hover"
  />
)
```
