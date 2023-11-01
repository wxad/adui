---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

收起与展开：

```jsx
const [collapsed, setCollapsed] = useState(false)
const tabsRef = useRef(null)

return (
  <div className="flex-1 p-40" style={{ background: "#eee" }}>
    <Nav
      className="overflow-hidden"
      style={{
        width: collapsed ? "64px" : "232px",
        transition:
          "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
      }}
    >
      <div className="adui-nav-group">
        <div className="adui-nav-group-title">
          <i
            className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gray-300"
            style={{
              opacity: collapsed ? 1 : 0,
              transform: "translate3d(-50%, -50%, 0)",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          />
          <span
            className="inline-block whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? "translate3d(-17px, 0, 0)" : "none",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            主导航
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="storage-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            仪表盘
          </span>
        </div>
      </div>
      <div className="adui-nav-group">
        <div className="adui-nav-group-title">
          <i
            className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gray-300"
            style={{
              opacity: collapsed ? 1 : 0,
              transform: "translate3d(-50%, -50%, 0)",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          />
          <span
            className="inline-block whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? "translate3d(-17px, 0, 0)" : "none",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            组件
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="folder-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            列表项
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="mail-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            表单项
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="edit-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            详情项
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="finance-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            结果项
          </span>
        </div>
      </div>
      <div className="adui-nav-group">
        <div className="adui-nav-group-title">
          <i
            className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gray-300"
            style={{
              opacity: collapsed ? 1 : 0,
              transform: "translate3d(-50%, -50%, 0)",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          />
          <span
            className="inline-block whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? "translate3d(-17px, 0, 0)" : "none",
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            更多
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="person-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            个人页
          </span>
        </div>
        <div
          className="adui-nav-item"
          style={{ paddingLeft: collapsed ? "23px" : "40px" }}
        >
          <Icon className="adui-nav-icon" icon="star-outlined" />
          <span
            className="whitespace-nowrap"
            style={{
              opacity: collapsed ? 0 : 1,
              transition:
                "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)",
            }}
          >
            登录页
          </span>
        </div>
      </div>
      <Nav.Divider className="mb-0" />
      <div
        className="flex items-center h-40"
        style={{ padding: "0 17px" }}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <Button leftIcon="menu" theme="light" />
      </div>
    </Nav>
  </div>
)
```
