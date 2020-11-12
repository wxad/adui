---
order: 3
title:
  zh-CN: 内容自适应宽度
  en-US: contentJustify
---

`contentJustify` 内容自适应宽度：

```jsx
  const [value, setValue] = useState("contentJustify")
  const inputRef = useRef(null)

  useEffect(() => {
    console.log(inputRef.current, "yijie")
  }, [])

  return (
    <Input
      size="large"
      ref={inputRef}
      contentJustify
      rightElement={<Icon icon="edit-outlined" />}
      style={{ minWidth: "100px" }}
      theme="light"
      onChange={({ target: { value: val } }) => setValue(val)}
      value={value}
    />
  )
```