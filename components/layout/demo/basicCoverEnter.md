---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

顶栏-侧边栏布局 (左侧栏可收起，覆盖进入)：

```jsx
const [asideCollapsible, setAsideCollapsible] = useState(true)
const [asideCollapsed, setAsideCollapsed] = useState(false)

return (
  <Layout className="w-full h-420 transform overflow-hidden rounded-t-8">
    <Layout.Header className="pr-16 h-64">
      <div className="flex items-center text-20">
        <div className="flex items-center justify-center mr-28 w-64 h-64 shadow-r-tp-gray-100">
          <Button
            className="w-48 h-48"
            theme="light"
            leftIcon="menu"
            onClick={() => {
              setAsideCollapsible(true)
              setAsideCollapsed(false)
            }}
          />
        </div>
        AD UI
      </div>
      <div className="flex items-center">
        <div className="w-28 h-28 rounded-full bg-tp-gray-700" />
        <div className="ml-8 mr-4">Aragakey</div>
        <Icon icon="triangle-down" color="#c7c7c7" />
      </div>
    </Layout.Header>
    <Grid.Row>
      <Layout.Aside
        collapsible={asideCollapsible}
        collapsed={asideCollapsed}
        onCollapseChange={(bool) => setAsideCollapsed(bool)}
      >
        <Nav defaultSelectedIndex="4">
          <Nav.Item index="1">文件管理</Nav.Item>
          <Nav.Item index="2">数据分析</Nav.Item>
          <Nav.Item index="3">下载管理</Nav.Item>
          <Nav.Divider />
          <Nav.Item index="4" icon="folder-outlined">
            文件管理
          </Nav.Item>
          <Nav.Item index="5" icon="trending-up">
            数据分析
          </Nav.Item>
          <Nav.Item index="6" icon="download">
            下载管理
          </Nav.Item>
          <Nav.Divider />
        </Nav>
      </Layout.Aside>
      <Layout.Main>
        <div className="flex items-center justify-between h-84 px-48 bg-white shadow-b-tp-gray-100">
          <div className="text-16 leading-24 text-tp-gray-900 font-bold">
            页面标题
          </div>
          <Button leftIcon="setting" theme="light">
            设置
          </Button>
        </div>
        <div className="pt-32 px-48">
          <Card elevation={0}>
            <div className="w-full h-240" />
          </Card>
        </div>
      </Layout.Main>
    </Grid.Row>

    <style
      dangerouslySetInnerHTML={{
        __html: `.adui-ComponentDoc-demoWrapper { padding: 0px; background-color: #fafafa; }`,
      }}
    />
  </Layout>
)
```
