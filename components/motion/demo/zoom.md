---
order: 0
title:
  zh-CN: zoom
  en-US: zoom
---

`zoom` 用于元素的 **移除与添加**。

```jsx
  const [cards, setCards] = useState(["1"])
  const cardDuplicated = [...cards]

  const handleRemove = id => {
    cardDuplicated.splice(cardDuplicated.indexOf(id), 1)
    setCards(cardDuplicated)
  }

  const handleAdd = () => {
    cardDuplicated.push(Math.random().toString(36).substring(3, 8))
    setCards(cardDuplicated)
  }

  return (
    <div style={{ width: "80%" }}>
      <Motion transition="zoomHorizontal">
        {cards.map((c, i) => (
          <div key={c} style={{ paddingBottom: "20px", display: "inline-block", verticalAlign: "top" }}>
            <Card className="adui-motion-card" style={{ width: "200px" }}>
              <Card.Header title={`卡片${i}`} />
              <Icon icon="cancel" size={24} onClick={() => handleRemove(c)} />
            </Card>
          </div>
        ))}
      </Motion>
      <div className="adui-motion-example-add" onClick={handleAdd}>
        <Icon icon="add" interactive />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .adui-motion-example-add {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 70px;
              text-align: center;
              cursor: pointer;
              background-color: rgb(253, 253, 253);
              border: 2px dashed rgb(227, 227, 227);
              border-radius: 4px;
            }
            .adui-motion-card {
              position: relative;
              padding-bottom: 20px;
            }
            .adui-motion-card svg {
              position: absolute;
              top: 12px;
              right: 12px;
            }
          `,
        }}
      />
    </div>
  )
```
