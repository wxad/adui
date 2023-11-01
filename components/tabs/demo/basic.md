---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

导航页签切换内容：

```jsx
const [value, setValue] = useState(0)
const tabsRef = useRef(null)

return (
  <div style={{ padding: "100px" }}>
    <Tabs
      value={value}
      ref={tabsRef}
      onChange={(val) => setValue(val)}
      size="medium"
    >
      <Tabs.Tab title="朋友圈广告" value={0} />
      <Tabs.Tab title="公众号广告" value={1} />
      <Tabs.Tab title="视频号广告" value={2} />
      <Tabs.Tab title="小程序广告" value={3} />
      <Tabs.Tab title="搜一搜广告" value={4} />
      <Tabs.Tab title="看一看广告" value={5} />
    </Tabs>
  </div>
)
```
