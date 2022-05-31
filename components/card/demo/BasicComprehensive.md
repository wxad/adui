---
order: 2
title:
  zh-CN: 按钮类型
  en-US: Type
---

```jsx
const dataSource = Array.from(new Array(2), (_, i) => i)

return (
  <React.Fragment>
    <Card>
      <Card.Header
        title="广告数据"
        topContent={
          <React.Fragment>
            <Button leftIcon="filter-outlined" className="mr-12">
              筛选
            </Button>
            <Button leftIcon="download">下载</Button>
          </React.Fragment>
        }
      >
        <Input leftElement={<Icon icon="search" />} className="mr-12" />
        <Select defaultValue="0">
          <Select.Option value="0">全部广告</Select.Option>
          <Select.Option value="1.5">朋友圈广告</Select.Option>
          <Select.Option value="1">公众号广告</Select.Option>
          <Select.Option value="2">小程序广告</Select.Option>
        </Select>
      </Card.Header>
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
  </React.Fragment>
)
```
