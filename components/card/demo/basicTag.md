---
order: 1
title:
  zh-CN: 按钮类型
  en-US: Type
---

```jsx
  const dataSource = Array.from(new Array(2), (_, i) => i)

  const ref = useRef(null)

  return (
    <div>
      <Card ref={ref}>
        <Card.Header
          style={{ paddingBottom: 0 }}
          title={(
            <Tabs defaultValue={1} style={{ paddingTop: "8px" }}>
              <Tabs.Tab title="广告主" value={1} style={{ paddingBottom: "18px" }} />
              <Tabs.Tab title="流量主" value={2} style={{ paddingBottom: "18px" }} />
              <Tabs.Tab title="服务商" value={3} style={{ paddingBottom: "18px" }} />
            </Tabs>
          )}
          topContent={(
            <div>
              <Input
                leftElement={(<Icon icon="search" />)}
                style={{ marginRight: "12px" }}
              />
              <Button leftIcon="download">下载</Button>
            </div>
          )}
        />
        <Table
          dataSource={dataSource}
          getHeadCellStyle={(col, colIndex) => !colIndex && { paddingLeft: "24px" }}
          getCellStyle={(row, col, rowIndex, colIndex) => !colIndex && { paddingLeft: "24px" }}
          style={{ boxShadow: "0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)" }}
          columns={[
            {
              dataIndex: "one",
              title: "项目",
              render: (row, col, rowIndex) => `项目${rowIndex}`,
            },
            {
              dataIndex: "two",
              title: "数据项",
              render: () => "6,534,785",
              onSort: () => {},
            },
            {
              dataIndex: "three",
              title: "数据项",
              render: () => "4,463,346",
            },
            {
              dataIndex: "four",
              title: "数据项",
              render: () => "5,786",
            },
            {
              dataIndex: "five",
              title: "数据项",
              render: () => "5,786",
            },
            {
              dataIndex: "six",
              title: "数据项",
              render: () => "5,786",
            },
            {
              dataIndex: "seven",
              title: "数据项",
              render: () => "5,786",
            },
          ]}
        />
        <Pagination
          align="right"
          defaultCurrent={1}
          pageSize={10}
          total={99}
          showButtonJumper
          style={{ padding: "16px 16px 16px 0px" }}
        />
      </Card>
      {/** 请忽略这个 style 标签 😊 */}
      <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }` }} />
    </div>
  )
```