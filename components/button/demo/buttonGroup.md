---
order: 1
title:
  zh-CN: 按钮组
  en-US: Group
---

按钮组 `Button.Group` ：

```jsx
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <React.Fragment>
      <Button.Group style={{ marginRight: "20px" }}>
        {
          ["选项一", "选项二", "选项三"].map((text, index) => (
            <Button
              key={text}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              { text }
            </Button>
          ))
        }
      </Button.Group>
      <Button.Group>
        {
          [
            "format-align-left",
            "format-align-center",
            "format-align-right",
            "format-align-justify",
          ].map((icon, index) => (
            <Button
              key={icon}
              leftIcon={icon}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))
        }
      </Button.Group>
    </React.Fragment>
  )
```
