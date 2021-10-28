---
order: 1
title:
  zh-CN: slide
  en-US: slide
---

`slide` 用于元素的 **隐藏与显示**。

```jsx
const [collapsed, setCollapsed] = useState(false)

return (
  <div style={{ width: "50%" }}>
    <div
      className={`adui-motion-collapse ${
        collapsed ? "adui-motion-collapse_collapsed" : ""
      }`}
    >
      <div
        className="adui-motion-collapse-header"
        onClick={() => setCollapsed(!collapsed)}
      >
        下拉展开
        <Icon icon="arrow-down" />
      </div>
      <Motion transition="slide">
        {!collapsed && (
          <div
            style={{ padding: "0 16px", boxShadow: "0 1px 0 0 #f3f3f3 inset" }}
          >
            <div style={{ padding: "12px 0" }}>下拉展开的内容</div>
          </div>
        )}
      </Motion>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
            .adui-motion-collapse {
              box-shadow: 0 0 0 1px #f3f3f3 inset;
              border-radius: 4px;
            }
            .adui-motion-collapse-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 12px 16px;
              cursor: pointer;
            }
            .adui-motion-collapse-header svg {
              transform: rotate(-180deg);
              transition: var(--motion-duration-base) var(--ease-in-out) all;
            }
            .adui-motion-collapse_collapsed svg {
              transform: rotate(0deg);
            }
          `,
      }}
    />
  </div>
)
```
