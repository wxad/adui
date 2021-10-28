---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

下拉展开行动菜单：

```jsx
const [visible, setVisible] = useState(false)

return (
  <Popover
    visible={visible}
    onVisibleChange={(bool) => setVisible(bool)}
    arrowed={false}
    popup={
      <Menu onItemClick={(index) => setVisible(false)}>
        <Menu.Item index="1">修改</Menu.Item>
        <Menu.Item index="2">复制</Menu.Item>
        <Menu.Item index="2">删除</Menu.Item>
        <Menu.SubMenu index="sub-1" title="下载">
          <Menu.Item index="0-0">PDF</Menu.Item>
          <Menu.Item index="0-1">网页</Menu.Item>
          <Menu.SubMenu index="sub-0-2" title="图片">
            <Menu.Item index="0-2">Jpeg</Menu.Item>
            <Menu.Item index="0-3">Png</Menu.Item>
            <Menu.Item index="0-4">Webp</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    }
    trigger="click"
  >
    <Button leftIcon="edit-outlined" rightIcon="triangle-down" active={visible}>
      编辑广告
    </Button>
  </Popover>
)
```
