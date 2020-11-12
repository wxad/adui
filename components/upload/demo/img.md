---
order: 0
title:
  zh-CN: 示例
  en-US: Img
---

简单地模拟 `Upload.Img` 所支持的 Props

```jsx
  const link = "http://wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png"

  const [progress, setProgress] = useState(null)
  const [src, setSrc] = useState(link)
  const upload = useRef(null)

  useEffect(() => {
    if (upload?.current) {
      const { uploadElement } = upload.current
      console.log(uploadElement)
      uploadElement.addEventListener("click", () => {
        console.log("click")
      })
    }
  }, [])

  const handleUpload = () => {
    const x = document.createElement("INPUT")
    x.setAttribute("type", "file")
    x.setAttribute("accept", "image/x-png,image/gif,image/jpeg")
    x.addEventListener("change", () => {
      // 模拟进度
      setProgress(0)
      setTimeout(() => { setProgress(20) }, 200)
      setTimeout(() => { setProgress(80) }, 500)
      setTimeout(() => { setProgress(100) }, 1000)
      setTimeout(() => {
        setProgress(null)
        setSrc(link)
      }, 1300)
    })
    x.click()
  }

  return (
    <Upload.Img
      ref={upload}
      progress={progress}
      src={src}
      onIconClick={() => {
        setSrc("")
      }}
      onUpload={handleUpload}
      icon="replace"
    />
  )
```
