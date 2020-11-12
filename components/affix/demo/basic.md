---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

设置 `getContainer`，使元素的位置既固定在页面上，又保持在 container 中。

```jsx
  const wrapperTop = useRef(null)
  const wrapperBottom = useRef(null)

  return (
    <React.Fragment>
      <div
        ref={wrapperTop}
        style={{ padding: "1% 10% 0", height: "200px", backgroundColor: "var(--gray-100)" }}
      >
        <Affix
          getContainer={() => wrapperTop.current}
          offsetTop={80}
        >
          <Button intent="primary">保持在容器内，且使用 offsetTop</Button>
        </Affix>
      </div>
      <div
        ref={wrapperBottom}
        style={{ padding: "19% 10% 0", height: "200px", backgroundColor: "var(--gray-800)" }}
      >
        <Affix
          offsetBottom={20}
          getContainer={() => wrapperBottom.current}
          onChange={affixed => console.log(affixed)}
        >
          <Button>保持在容器内，且使用 offsetBottom</Button>
        </Affix>
      </div>
    </React.Fragment>
  )
```
