---
order: 0
title:
  zh-CN: 交互
  en-US: interactive
---

点击改变标签类型 `intent` ：

```jsx
  const [actives, setActives] = useState([])

  const handleClick = key => {
    const activesNext = [...actives]
    const index = activesNext.indexOf(key)
    if (index > -1) {
      activesNext.splice(index, 1)
    } else {
      activesNext.push(key)
    }
    setActives(activesNext)
  }

  return (
    <React.Fragment>
      {
        ["一", "二", "三"].map((o, i) => (
          <Tag
            key={o}
            intent={actives.includes(i) ? "primary" : "normal"}
            interactive
            onClick={() => handleClick(i)}
          >
            { `标签${o}` }
          </Tag>
        ))
      }
    </React.Fragment>
  )
```
