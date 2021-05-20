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
    <div>
      <Tabs 
        value={value}
        ref={tabsRef}
        onChange={val => setValue(val)}
      >
        <Tabs.Tab title="选择项一" value={0} />
        <Tabs.Tab title="选择项二" value={1} />
        <Tabs.Tab title="选择项三" value={2} />
      </Tabs>
      <div className="pt-20">
        { value === 0 && "内容 A" }
        { value === 1 && "内容 B" }
        { value === 2 && "内容 C" }
      </div>
    </div>
  )
```