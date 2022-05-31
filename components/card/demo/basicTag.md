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
        className="pb-0"
        title={
          <Tabs defaultValue={1} className="pt-8">
            <Tabs.Tab title="广告主" value={1} className="pb-18" />
            <Tabs.Tab title="流量主" value={2} className="pb-18" />
            <Tabs.Tab title="服务商" value={3} className="pb-18" />
          </Tabs>
        }
        topContent={
          <div className="grid grid-flow-col gap-12">
            <Input leftElement={<Icon icon="search" />} />
            <Button leftIcon="download">下载</Button>
          </div>
        }
      />
      <Table
        dataSource={dataSource}
        getHeadCellClassName={(col, colIndex) => !colIndex && "pl-24"}
        getCellClassName={(row, col, rowIndex, colIndex) =>
          !colIndex && "pl-24"
        }
        className="shadow-y-tp-gray-200"
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
        className="pr-16 py-16"
      />
    </Card>

    <style
      dangerouslySetInnerHTML={{
        __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`,
      }}
    />
  </div>
)
```
