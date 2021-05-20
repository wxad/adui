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
      popup={
        <div className="p-20">
          <div className="mb-4 text-14 leading-24 font-bold">气泡提示</div>
          <div className="text-13 leading-20">
            气泡提示承载了临时的、弹出式的内容，它浮起于其他内容上面。
          </div>
        </div>
      }
      placement="bottom"
    >
      <Button className="mr-20">带标题与正文</Button>
    </Popover>
    <Popover
      popup={
        <div className="pb-20">
          <div className="px-20 py-16 text-14 leading-24 font-bold">标题</div>
          <Table
            dataSource={Array.from(new Array(4), (_, i) => i)}
            getHeadCellClassName={(col, colIndex) =>
              !colIndex ? "pl-12" : null
            }
            getCellClassName={(row, col, rowIndex, colIndex) =>
              !colIndex ? "pl-12" : null
            }
            style={{
              boxShadow:
                "0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)",
            }}
            columns={[
              {
                title: "项目",
                dataIndex: "0",
                render: (row, col, rowIndex) => `项目${rowIndex}`,
              },
              { title: "数据项", dataIndex: "1", render: () => "23,576" },
              { title: "数据项", dataIndex: "2", render: () => "279" },
              { title: "数据项", dataIndex: "3", render: () => "17.02%" },
            ]}
          />
        </div>
      }
      popupStyle={{ maxWidth: "initial" }}
      placement="bottom"
    >
      <Button>内嵌表格</Button>
    </Popover>
  </React.Fragment>
)
```
