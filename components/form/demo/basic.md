---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

展开/收起表单信息：

```jsx
const [data, setData] = useState({
  名称: "微信广告助手",
  城市: "深圳市",
  性别: "男",
  电子邮箱: "donon@gmail.com",
})

const handleClick = (expanded) => {
  const dataNew = { ...data }
  if (expanded) {
    delete dataNew["职业"]
    delete dataNew["特长"]
  } else {
    dataNew["职业"] = "视觉设计师"
    dataNew["特长"] = "Brawl Stars"
  }
  setData(dataNew)
}

const expanded = Object.keys(data).length > 4

return (
  <Form
    itemClassName="mb-12 text-13 text-tp-gray-800"
    labelClassName="mr-16"
    labelSize={4}
  >
    <Motion transition="zoom">
      {Object.keys(data).map((key) => (
        <Form.Item key={key} label={key}>
          {data[key]}
        </Form.Item>
      ))}
    </Motion>
    <div
      onClick={() => handleClick(expanded)}
      className="flex items-center text-13 text-blue font-medium cursor-pointer"
    >
      {expanded ? "收起" : "展开全部信息"}
      <Icon icon={`arrow-${expanded ? "up" : "down"}`} color="var(--ad-blue)" />
    </div>
  </Form>
)
```
