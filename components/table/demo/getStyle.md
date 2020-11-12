---
order: 5
title:
  zh-CN: style
  en-US: style
---

通过 `style` `getHeadStyle` `getHeadCellStyle` `getRowStyle` `getCellStyle` 自定义表格、单元格样式：

```jsx
  const cols = [
    { key: "0", dataIndex: "0", title: "项目", render: () => "项目一" },
    { key: "1", dataIndex: "1", title: "数据项", render: () => "6,755,654" },
    { key: "2", dataIndex: "2", title: "数据项", render: () => "92,435,344" },
    { key: "3", dataIndex: "3", title: "数据项", render: () => "3,635" },
    { key: "4", dataIndex: "4", title: "数据项", render: () => "3,635" },
  ]
  return (
    <section>
      <div className="adui-ComponentDoc-table-example-title">去除表格左右边框</div>
      <Table
        dataSource={Array.from(new Array(2), (_, i) => ({ key: i }))}
        style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.08), 0 -1px 0 0 rgba(0, 0, 0, 0.08)" }}
        columns={cols}
      />

      <div className="adui-ComponentDoc-table-example-title">自定义单元格样式</div>
      <Table
        dataSource={Array.from(new Array(2), (_, i) => ({ key: i }))}
        getRowStyle={(row, rowIndex) => (!rowIndex && { fontWeight: 600 })}
        getCellStyle={(row, col, rowIndex, colIndex) => {
          if (rowIndex === 0) {
            if (colIndex === 2) {
              return { color: "var(--ad-green)", backgroundColor: "#f1f9f1" }
            }
            if (colIndex === 3) {
              return { color: "var(--ad-red)", backgroundColor: "#fff3f3" }
            }
          }
        }}
        columns={cols}
      />

      <div className="adui-ComponentDoc-table-example-title">自定义单元格间距</div>
      <Table
        dataSource={Array.from(new Array(2), (_, i) => ({ key: i }))}
        getHeadStyle={() => ({ fontWeight: 700 })}
        getHeadCellStyle={(col, colIndex) => (!colIndex && { paddingLeft: "44px" })}
        getCellStyle={(row, col, rowIndex, colIndex) => (!colIndex && { paddingLeft: "44px" })}
        columns={cols}
      />

      {/** 请忽略这个 style 标签 😊 */}
      <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-table-example-title { margin-top: 36px;margin-bottom: 8px;font-size: 13px;line-height: 20px;color: #636363; }.adui-ComponentDoc-table-example-title:first-child{margin-top: 0;}` }} />
    </section>
  )
```

## Alert
### 自定义样式的所有方法
除了 `get...Style` 家族，如果你不想书写内联样式，组件也提供了 `get...ClassName` 家族，比如 `getCellClassName`。<br />  
**为什么设置样式这么麻烦，而且可读性极差？**  
因为 `<Table />` 的 Prop 设计是基于数据的，在外层只暴露了 `Table`（及 `Table.Column`，后者甚至只是形同虚设）。因此，所有的 Prop 设计都只能放在 `Table` 上。以 `function` 方式设置样式，是为了满足灵活与自由度，因此可读性上就无法兼顾了。  