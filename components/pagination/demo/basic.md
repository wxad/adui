---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

配合 `Table` 的 `loading` Prop 实现翻页并加载数据：

```jsx
  const [loading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const dataSource = Array.from(new Array(2), (_, i) => i)

  return (
    <React.Fragment>
      <Card style={{ flex: 1 }}>
        <Card.Header title="广告数据" />
        <Table
          loading={loading}
          dataSource={dataSource}
          getHeadCellStyle={(col, colIndex) => (!colIndex ? { paddingLeft: "24px" } : null)}
          getCellStyle={(row, col, rowIndex, colIndex) => (!colIndex && { paddingLeft: "24px" })}
          style={{ boxShadow: "0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)" }}
        >
          <Table.Column
            dataIndex="one"
            title="项目"
            render={(row, col, rowIndex) => `项目${rowIndex}`}
          />
          <Table.Column
            dataIndex="two"
            title="数据项"
            render={() => "6,534,785"}
            onSort={() => {}}
          />
          <Table.Column
            dataIndex="three"
            title="数据项"
            render={() => "4,463,346"}
          />
        </Table>
        <Pagination
          align="right"
          defaultCurrent={1}
          pageSize={10}
          total={99}
          showButtonJumper
          style={{ padding: "16px 16px 16px 0px" }}
          disabled={loading}
          onChange={handleChange}
        />
      </Card>
      {/** 请忽略这个 style 标签 😊 */}
      <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }` }} />
    </React.Fragment>
  )
```