---
order: 1
title:
  zh-CN: getPopupContainer
  en-US: getPopupContainer
---

全局配置 `getPopupContainer` 为父元素，以使得 popup 跟随内滚动：

```jsx
return (
  <ConfigProvider getPopupContainer={(trigger) => trigger.parentNode}>
    <div
      style={{
        position: "relative",
        width: "50%",
        padding: "50px 100px",
        overflowY: "auto",
      }}
    >
      <Tooltip visible popup="复制" placement="top">
        <Button leftIcon="copy-outlined" />
      </Tooltip>
      <br />
      <Popover
        visible
        placement="bottom"
        popup={
          <div style={{ padding: "20px" }}>
            <div
              style={{
                marginBottom: "4px",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 600,
              }}
            >
              气泡提示
            </div>
            <div style={{ fontSize: "13px", lineHeight: "20px" }}>
              气泡提示承载了临时的、弹出式的内容，它浮起于其他内容上面。
            </div>
          </div>
        }
        placement="bottom"
      >
        <Button style={{ marginTop: "20px" }}>带标题与正文</Button>
      </Popover>
    </div>
  </ConfigProvider>
)
```
