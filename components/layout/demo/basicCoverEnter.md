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
    <Layout
      style={{
        width: "100%",
        height: "420px",
        transform: "translate(0)",
        overflow: "hidden",
        borderRadius: "8px 8px 0 0",
      }}
    >
        <Layout.Header style={{ paddingRight: "16px", height: "64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "28px",
              width: "64px",
              height: "64px",
              boxShadow: "1px 0 0 0 #f3f3f3, inset 0 0 0 0 #f3f3f3",
            }}
          >
            <Button
              theme="light"
              leftIcon="menu"
              onClick={() => {
                setAsideCollapsible(true)
                setAsideCollapsed(false)
              }}
              style={{ width: "48px", height: "48px" }}
            />
          </div>
          AD UI
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#a3a3a3",
            }}
          />
          <div style={{ marginLeft: "8px", marginRight: "4px" }}>Aragakey</div>
          <Icon icon="triangle-down" color="#c7c7c7" />
        </div>
      </Layout.Header>
      <Grid.Row>
        <Layout.Aside
          collapsible={asideCollapsible}
          collapsed={asideCollapsed}
          onCollapseChange={bool => setAsideCollapsed(bool)}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "86px",
              padding: "0px 46px",
              backgroundColor: "#fff",
              boxShadow: "0 1px 0 0 rgba(223,223,223,0.45)",
              borderRadius: "3px 0px"
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "#1F1F1F",
                letterSpacing: "0",
                fontWeight: "600",
                lineHeight: "24px"
              }}
            >
              页面标题
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                color: "#6B6B6B",
                letterSpacing: "0",
                lineHeight: "20px"
              }}
            >
            <Button
              leftIcon="setting"
              theme="light"
            >
              设置
            </Button>
            </div>
          </div>
          <div style={{ padding: "32px 48px 0px 48px" }}>
            <Card elevation={0}>
              <div
                style={{
                  width: "100%",
                  height: "250px"
                }}
              >
                {" "}
              </div>
            </Card>
          </div>
        </Layout.Main>
      </Grid.Row>
      {/** 请忽略这个 style 标签 😊 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.adui-ComponentDoc-demoWrapper { padding: 0px; background-color: #fafafa; }`
        }}
      />
    </Layout>
  )
```
