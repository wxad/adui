---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

透明度 Transition 时长测试

```jsx
const [show, setShow] = useState(false)

useEffect(() => {
  setInterval(() => {
    setShow((prev) => !prev)
  }, 3000)
}, [])

return (
  <div>
    <div className="flex flex-col gap-20">
      <div className="w-48 h-48">
        <Transition
          show={show}
          className="flex items-center justify-center w-48 h-48 text-white bg-gray-700"
          from="opacity-0"
          to="opacity-100"
          duration={200}
        >
          48px
        </Transition>
      </div>
      <div className="w-100 h-100">
        <Transition
          show={show}
          className="flex items-center justify-center w-100 h-100 text-white bg-gray-700"
          from="opacity-0"
          to="opacity-100"
          duration={200}
        >
          100px
        </Transition>
      </div>
      <div className="w-200 h-200">
        <Transition
          show={show}
          className="flex items-center justify-center w-200 h-200 text-white bg-gray-700"
          from="opacity-0"
          to="opacity-100"
          duration={200}
        >
          200px
        </Transition>
      </div>
      <div className="w-400 h-400">
        <Transition
          show={show}
          className="flex items-center justify-center w-400 h-400 text-white bg-gray-700"
          from="opacity-0"
          to="opacity-100"
          duration={200}
        >
          400px
        </Transition>
      </div>
      <div style={{ width: "1000px", height: "1000px" }}>
        <Transition
          style={{ width: "1000px", height: "1000px" }}
          show={show}
          className="flex items-center justify-center text-white bg-gray-700"
          from="opacity-0"
          to="opacity-100"
          duration={200}
        >
          1000px
        </Transition>
      </div>
    </div>
  </div>
)
```
