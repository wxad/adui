---
order: 1
title:
  zh-CN: 示例
  en-US: File
---

简单地模拟 `Upload.File` 所支持的 Props

```jsx
  const str = "文件名称.pdf"
  const link = "http://wxa.wxs.qq.com/wxadtouch/upload/t2/h7bax687_f41d8744.pdf"

  const [progress, setProgress] = useState(null)
  const [src, setSrc] = useState(link)
  const [name, setName] = useState(str)
  const upload = useRef(null)

  useEffect(() => {
    if (upload?.current) {
      console.log(upload.current)
    }
  }, [])

  const handleUpload = () => {
    const x = document.createElement("INPUT")
    x.setAttribute("type", "file")
    x.setAttribute("accept", "application/pdf")
    x.addEventListener("change", () => {
      setName(str)

      // 模拟进度
      setProgress(0)
      setTimeout(() => {
        setProgress(20)
      }, 200)
      setTimeout(() => {
        setProgress(80)
      }, 500)
      setTimeout(() => {
        setProgress(100)
      }, 1000)
      setTimeout(() => {
        setProgress(null)
        setSrc(link)
      }, 1300)
    })
    x.click()
  }

  return (
    <div style={{ width: "240px" }}>
      <Button onClick={handleUpload}>{name ? "替换" : "上传"} pdf</Button>
      <div
        style={{
          padding: "12px 0",
          fontSize: "12px",
          lineHeight: "18px",
          color: "#a3a3a3",
        }}
      >
        支持格式：.pdf
      </div>
      <Upload.File
        style={{ width: "240px" }}
        ref={upload}
        progress={progress}
        src={src}
        onIconClick={() => {
          setName("")
          setSrc("")
        }}
        onUpload={handleUpload}
        name={name}
      />
    </div>
  )
```
