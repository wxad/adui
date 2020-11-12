---
order: 1
title:
  zh-CN: onRowEvents
  en-US: onRowEvents
---

`onRowMouseEnter` `onRowMouseLeave` 实现鼠标上移触发变化：

```jsx
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <section>
      <Table
        columnsResizable={false}
        dataSource={Array.from(new Array(2), (_, i) => ({ key: i }))}
        getRowClassName={(_, rowIndex) => (hoverIndex === rowIndex && "adui-componentDoc-table-row_hovered")}
        onRowMouseEnter={(_, rowIndex) => setHoverIndex(rowIndex)}
        onRowMouseLeave={() => setHoverIndex(null)}
        headerEmphasized
        columns={[
          {
            dataIndex: "0",
            title: "项目",
            width: 300,
            align: "center",
            children: [
              {
                dataIndex: "asd1",
                title: "项目asd1",
                render: () => "项目一asd1",
                width: 150,
                onSort: () => {},
              },
              {
                dataIndex: "asd2",
                title: "项目asd2",
                render: () => "项目一asd2",
                width: 150,
                onSort: () => {},
              }
            ]
          },
          {
            dataIndex: "1",
            width: 120,
            title: "投放时间",
            render: (row, col, rowIndex) => (
              <div className="adui-componentDoc-table-time1">
                2017-08-18
                <Icon
                  icon="edit-outlined"
                  interactive
                />
              </div>
            ),
          },
          { dataIndex: "2", title: "数据项", render: () => "92,435,344", onSort: () => {}},
          { dataIndex: "3", title: "数据项", render: () => "3,635"},
          { dataIndex: "4", title: "数据项", render: () => "3,635"},
        ]}
      />
      <style dangerouslySetInnerHTML={{ __html:`
        .adui-componentDoc-table-row_hovered .adui-componentDoc-table-time1 svg { opacity: 1;visibility: visible; }
        .adui-componentDoc-table-time1 { display: flex;align-items: center; }
        .adui-componentDoc-table-time1 svg { margin-left: 12px; opacity: 0; visibility: hidden;transition: all var(--motion-duration-fast) var(--ease-in-out); }
      `}} />
    </section>
  )
```