---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

```jsx
const dataSource = Array.from(new Array(2), (_, i) => i)

return (
  <React.Fragment>
    <Card>
      <Table
        dataSource={dataSource}
        getHeadCellClassName={(col, colIndex) => !colIndex && "pl-24"}
        getCellClassName={(row, col, rowIndex, colIndex) =>
          !colIndex && "pl-24"
        }
        className="shadow-b-tp-gray-200"
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
    {/** 请忽略这个 style 标签 😊 */}
    <style
      dangerouslySetInnerHTML={{
        __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`,
      }}
    />
  </React.Fragment>
)
```
