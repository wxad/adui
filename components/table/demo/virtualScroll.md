---
order: 6
title:
  zh-CN: virtualScroll
  en-US: virtualScroll
---

开启 `virtualScroll` 实现 10000 行渲染：

```jsx
const [value, setValue] = useState([])
return (
  <Table
    dataSource={Array.from(new Array(100), (_, i) => ({ key: i }))}
    selectOnRowClick
    virtualScroll
    virtualListStyle={{ width: "1530px" }}
    height={500}
    columns={[
      {
        dataIndex: "0",
        filters: [
          { text: "分类 A", value: 1 },
          { text: "分类 D", value: 2 },
        ],
        filterMultiple: false,
        title: "项目",
        width: 120,
        render: (row, col, rowIndex) => `项目${rowIndex}`,
      },
      {
        dataIndex: "1",
        width: 900,
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
        width: 110,
        title: "数据项",
        render: () => "3,635",
      },
      {
        dataIndex: "4",
        width: 100,
        title: "数据项",
        render: () => "3,635",
      },
    ]}
  />
)
```
