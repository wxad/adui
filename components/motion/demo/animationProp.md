---
order: 3
title:
  zh-CN: animation
  en-US: animation
---

JS：通过 `animation` 自定义地控制每个阶段。

```jsx
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ width: "50%", textAlign: "center" }}>
      <Button onClick={() => setVisible(!visible)}>toggle animation</Button>
      <Motion
        animation={{
          enter(node, done) {
            node.style.opacity = "0"
            node.style.transform = "translateX(50px)"
            node.style.height = "0"
            setTimeout(() => {
              node.style.opacity = "1"
              node.style.transform = "translateX(0)"
              node.style.height = "160px"
            }, 50)
            const promise = new Promise(resolve => setTimeout(resolve, 300))
            promise.then(() => {
              return done()
            })
          },
          leave(node, done) {
            node.style.opacity = "0"
            node.style.transform = "translateX(50px)"
            node.style.height = "0"
            const promise = new Promise(resolve => setTimeout(resolve, 300))
            promise.then(() => {
              return done()
            })
          }
        }}
      >
        {
          visible && (
            <div
              className="adui-custom-example"
            >
            </div>
          )
        }
      </Motion>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .adui-custom-example {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
              height: 160px;
              font-family: SFMono-Semibold;
              font-size: 13px;
              line-height: 20px;
              color: rgb(255, 255, 255);
              font-weight: 600;
              border-radius: 6px;
              background-color: var(--primary-color);
              transition: .3s ease all;
            }
          `,
        }}
      />
    </div>
  )
```
