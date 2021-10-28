---
order: 4
title:
  zh-CN: height
  en-US: height
---

`height` 表格内滚动：

```jsx
return (
  <Table
    dataSource={Array.from(new Array(8), (_, i) => ({ key: i }))}
    height={200}
    columns={[
      {
        dataIndex: "0",
        fixed: "left",
        filters: [
          { text: "分类 A", value: 1 },
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
        fixed: "right",
        width: 110,
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

## Alert

### 关于 headerAffixed 与 height 两个 Prop 的选择

`headerAffixed` 与 `height` 是互斥的。因为这两个 Prop 要实现的功能是类似的，都是在表格内容过多的时候“固定表头”。  
如果是在卡片内，你可能需要的是用 `height` 实现表格内滚动，这样卡片区域作为一个整体得以不被滚动；  
如果是在页面上，你可能需要的是 `headerAffixed` 在整个页面滚动时固定表头，它对比 `height` 的优势在于可以充分利用页面的高度展示表格内容。
