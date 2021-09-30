---
order: 0
title:
  zh-CN: grow
  en-US: grow
---

`adui@2.15.0` 支持 `grow` Prop 将表格列填充宽度：

```jsx
return (
  <Table
    className="w-full"
    dataSource={Array.from(new Array(5), (_, i) => ({ key: i }))}
    columns={[
      {
        dataIndex: "0",
        title: "100px 定宽",
        render: () => "100px",
        width: 100,
      },
      {
        dataIndex: "1",
        title: "最小 100px 宽度，在宽度有剩余时填充",
        render: () => "100 填充",
        width: 100,
        grow: true,
      },
      {
        dataIndex: "2",
        title: "最小 200px 宽度，在宽度有剩余时填充",
        render: () => "200 填充",
        width: 200,
        grow: true,
      },
    ]}
  />
)
```
