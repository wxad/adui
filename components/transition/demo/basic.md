---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Intent
---

点击切换按钮类型 `intent`：

```jsx
const [show, setShow] = useState(true)

return (
  <div>
    <div style={{ width: 128, height: 128 }}>
      <Transition
        appear={false}
        tag="section"
        show={show}

        enterDelay={0}
        enterDuration={300}
        enterTension={140}
        enterFriction={15}
        enterEase="ease"
        enterFrom={["opacity-0", "-rotate-120", "scale-50"]}
        enterTo={["opacity-100", "rotate-0", "scale-100"]}

        // leaveDelay={[0, ]}
        leaveDuration={300}
        leaveTension={140}
        leaveFriction={15}
        leaveEase="ease"
        leaveFrom={["opacity-100", "rotate-0", "scale-100"]}
        leaveTo={["opacity-0", "scale-95"]}

        beforeEnter={() => { console.log("before Enter") }}
        afterEnter={() => { console.log("after Enter") }}
        beforeLeave={() => { console.log("before Leave") }}
        afterLeave={() => { console.log("after Leave") }}

        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          backgroundColor: "#000",
          boxShadow: "0 4px 6px -2px rgba(0,0,0,0.05)",
        }}
      >
        <Form.Tip style={{ margin: 0 }}>发撒打算大</Form.Tip>
      </Transition>
    </div>

    <br />
    <br />
    <Button onClick={() => setShow(!show)}>点击</Button>
  </div>
)
```
