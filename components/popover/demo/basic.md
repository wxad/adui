---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

带标题与正文，内嵌表格：

```jsx
  return (
    <React.Fragment>
      <Popover
        popup={(
          <div style={{ padding: "20px" }}>
            <div style={{ marginBottom: "4px", fontSize: "14px", lineHeight: "24px", fontWeight: 600 }}>
              气泡提示
            </div>
            <div style={{ fontSize: "13px", lineHeight: "20px" }}>
              气泡提示承载了临时的、弹出式的内容，它浮起于其他内容上面。
            </div>
          </div>
        )}
        placement="bottom"
      >
        <Button style={{ marginRight: "20px" }}>带标题与正文</Button>
      </Popover>
      <Popover
        popup={(
          <div style={{ paddingBottom: "20px" }}>
            <div style={{ padding: "16px 20px", fontSize: "14px", lineHeight: "24px", fontWeight: 600 }}>
              标题
            </div>
            <Table
              dataSource={Array.from(new Array(4), (_, i) => i)}
              getHeadCellStyle={(col, colIndex) => (!colIndex ? { paddingLeft: "12px" } : null)}
              getCellStyle={(row, col, rowIndex, colIndex) => (!colIndex ? { paddingLeft: "12px" } : null)}
              style={{ boxShadow: "0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)" }}
              columns={[
                { title: "项目", dataIndex: "0", render: (row, col, rowIndex) => `项目${rowIndex}` },
                { title: "数据项", dataIndex: "1", render: () => "23,576"},
                { title: "数据项", dataIndex: "2", render: () => "279"},
                { title: "数据项", dataIndex: "3", render: () => "17.02%"},
              ]}
            />
          </div>
        )}
        popupStyle={{ maxWidth: "initial" }}
        placement="bottom"
      >
        <Button>内嵌表格</Button>
      </Popover>
    </React.Fragment>
  )
```
