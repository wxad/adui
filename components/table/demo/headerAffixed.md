---
order: 3
title:
  zh-CN: headerAffixed
  en-US: headerAffixed
---

`headerAffixed` 表格顶部固定：

```jsx
return (
  <Table
    dataSource={Array.from(new Array(5), (_, i) => ({ key: i }))}
    headerAffixed
    headerAffixedOffsetTop={72}
    columns={[
      {
        dataIndex: "0",
        fixed: "left",
        filters: [
          { text: "分类 A", value: 1 },
          { text: "分类 D", value: 2 },
        ],
        filterMultiple: false,
        title: "项目",
        width: 120,
        render: () => "项目一",
      },
      {
        dataIndex: "1",
        width: 300,
        title: "数据项",
        render: () => "6,755,654",
      },
      {
        dataIndex: "2",
        width: 300,
        title: "数据项",
        render: () => "92,435,344",
        onSort: () => {},
      },
      {
        dataIndex: "3",
        width: 300,
        title: "数据项",
        render: () => "3,635",
      },
      {
        dataIndex: "4",
        fixed: "right",
        width: 100,
        title: "数据项",
        render: () => "3,635",
      },
    ]}
  />
)
```
