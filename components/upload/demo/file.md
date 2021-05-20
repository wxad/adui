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
    <div className="w-240">
      <Button onClick={handleUpload}>{name ? "替换" : "上传"} pdf</Button>
      <div
        className="py-12 text-12 leading-18 text-tp-gray-700"
      >
        支持格式：.pdf
      </div>
      <Upload.File
        className="w-240"
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
