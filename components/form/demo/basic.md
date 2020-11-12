---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

展开/收起表单信息：

```jsx
  const [data, setData] = useState({
    "名称": "微信广告助手",
    "城市": "深圳市",
    "性别": "男",
    "电子邮箱": "donon@gmail.com",
  })

  const handleClick = expanded => {
    const dataNew = {...data}
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
      itemStyle={{ marginBottom: "12px", fontSize: "13px", color: "#636363" }}
      labelStyle={{ marginRight: "16px" }}
      labelSize={4}
    >
      <Motion transition="zoom">
        {
          Object.keys(data).map(key => (
            <Form.Item key={key} label={key}>{ data[key] }</Form.Item>
          ))
        }
      </Motion>
      <div
        onClick={() => handleClick(expanded)}
        style={{ display: "flex", alignItems: "center", fontSize: "13px", color: "var(--ad-blue)", fontWeight: 500, cursor: "pointer" }}
      >
        {
          expanded ? "收起" : "展开全部信息"
        }
        <Icon icon={`arrow-${expanded ? "up" : "down"}`} color="var(--ad-blue)" />
      </div>
    </Form>
  )
```
