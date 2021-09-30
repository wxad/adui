---
order: 1
title:
  zh-CN: basic
  en-US: Type
---

可气泡提示 `Popover` 或行动菜单 `Menu` ：

```jsx
// Menu 的使用必须配合 Popover 的 visible 状态
const [editVisible, setEditVisible] = useState(false)

return (
  <section>
    <Table
      dataSource={Array.from(new Array(1), (_, i) => ({ key: i }))}
      expandedRowRender={() => (
        <div className="pl-24 py-16">这是要展示的内容</div>
      )}
      onExpandChange={() => {}}
      onSelectChange={() => {}}
      getRowProps={(row, rowIndex) => ({
        popover: {
          popup: "getRowProps",
          placement: "left",
          mouseEnterDelay: 0.1,
        },
      })}
      columns={[
        {
          dataIndex: "0",
          title: "项目",
          render: () => "项目一",
        },
        {
          dataIndex: "1",
          width: 120,
          title: "投放时间",
          render: () => (
            <div className="adui-componentDoc-table-time">
              2017-08-18
              <Popconfirm
                popupClassName="max-w-initial"
                alignEdge={false}
                placement="bottom"
                popup={
                  <div>
                    <div className="adui-componentDoc-table-time-title">
                      修改投放时间
                    </div>
                    <Form itemClassName="mb-20">
                      <Form.Item label="开始投放">
                        <DatePicker
                          closeOnSelect
                          defaultValue={new Date()}
                          className="mr-12"
                        />
                        <TimePicker
                          closeOnSelect
                          defaultValue="00:00"
                          onlyHour
                        />
                      </Form.Item>
                      <Form.Item label="结束投放">
                        <DatePicker
                          closeOnSelect
                          defaultValue={new Date()}
                          className="mr-12"
                        />
                        <TimePicker
                          closeOnSelect
                          defaultValue="00:00"
                          onlyHour
                        />
                      </Form.Item>
                    </Form>
                  </div>
                }
              >
                <Icon icon="edit-outlined" interactive />
              </Popconfirm>
            </div>
          ),
        },
        {
          dataIndex: "2",
          title: "数据项",
          render: () => "92,435,344",
          onSort: () => {},
        },
        {
          dataIndex: "3",
          title: "数据项",
          render: () => "3,635",
        },
        {
          dataIndex: "4",
          title: "编辑",
          render: () => (
            <Popover
              arrowed={false}
              popup={
                <Menu onItemClick={(index) => setEditVisible(false)}>
                  <Menu.Item index="0">停止投放</Menu.Item>
                  <Menu.Item index="1">删除广告</Menu.Item>
                </Menu>
              }
              visible={editVisible}
              onVisibleChange={(bool) => setEditVisible(bool)}
              trigger="click"
            >
              <div className="adui-componentDoc-table-edit">
                编辑
                <Icon icon="triangle-down" />
              </div>
            </Popover>
          ),
        },
      ]}
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .adui-componentDoc-table-time-title { margin-bottom: 16px;font-size: 14px;line-height: 24px;color: #1f1f1f;font-weight: 600; }
        .adui-componentDoc-table-edit { display: flex;align-items: center;cursor: pointer; }
        .adui-componentDoc-table-edit::after { content: "";position: absolute;top: 0;left: 0;width: 100%; height: 100%; }
        .adui-componentDoc-table-time { display: flex;align-items: center; }
        .adui-componentDoc-table-time svg { margin-left: 12px; }
      `,
      }}
    />
  </section>
)
```
