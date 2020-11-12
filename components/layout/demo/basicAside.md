---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

上中下布局：

```jsx
  return (
    <Layout
      style={{
        width: "100%",
        height: "420px",
        transform: "translate(0px)",
        overflow: "hidden",
        borderRadius: "8px 8px 0px 0px"
      }}
    >
      <Layout.Header
        style={{
          height: "64px",
          paddingRight: "16px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            marginLeft: "28px"
          }}
        >
          AD UI
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "#A3A3A3"
            }}
          />
          <div
            style={{
              marginRight: "4px",
              marginLeft: "8px"
            }}
          >
            Aragakey
          </div>
          <Icon icon="triangle-down" color="#C7C7C7" />
        </div>
      </Layout.Header>
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
        <div
          style={{
            padding: "32px 48px 0px 48px"
          }}
        >
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
      {/** 请忽略这个 style 标签 😊 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.adui-ComponentDoc-demoWrapper { padding: 0px; }`
        }}
      />
    </Layout>
  )
```
