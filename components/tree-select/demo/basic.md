---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

选项数量多时，使用结果收集器展示已选结果

```jsx
const [value, setValue] = useState([
  "核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市",
])

const treeData = [
  {
    title:
      "核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市",
    value:
      "核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市",
    key:
      "核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市",
    children: [
      {
        title: "北京",
        value: "北京",
        key: "北京",
        children: [
          {
            title: "东城区",
            value: "东城区",
            key: "东城区",
          },
          {
            title: "朝阳区",
            value: "朝阳区",
            key: "朝阳区",
          },
        ],
      },
      {
        title: "上海",
        value: "上海",
        key: "上海",
        children: [
          {
            title: "黄浦区",
            value: "黄浦区",
            key: "黄浦区",
          },
          {
            title: "徐汇区",
            value: "徐汇区",
            key: "徐汇区",
          },
        ],
      },
    ],
  },
  {
    title: "重点城市",
    value: "重点城市",
    key: "重点城市",
    children: [
      {
        title: "天津",
        value: "天津",
        key: "天津",
        children: [
          {
            title: "和平区",
            value: "和平区",
            key: "和平区",
          },
          {
            title: "河东区",
            value: "河东区",
            key: "河东区",
          },
        ],
      },
      {
        title: "沈阳市",
        value: "沈阳市",
        key: "沈阳市",
        children: [
          {
            title: "沈河区",
            value: "沈河区",
            key: "沈河区",
          },
          {
            title: "铁西区",
            value: "铁西区",
            key: "铁西区",
          },
        ],
      },
    ],
  },
  {
    title: "其他城市",
    value: "其他城市",
    key: "其他城市",
    children: [
      {
        title: "河北",
        value: "河北",
        key: "河北",
        children: [
          {
            title: "石家庄市",
            value: "石家庄市",
            key: "石家庄市",
            children: [
              {
                title: "长安区",
                value: "长安区",
                key: "长安区",
              },
              {
                title: "新华区",
                value: "新华区",
                key: "新华区",
              },
            ],
          },
          {
            title: "唐山市",
            value: "唐山市",
            key: "唐山市",
            children: [
              {
                title: "开平区",
                value: "开平区",
                key: "开平区",
              },
              {
                title: "丰南区",
                value: "丰南区",
                key: "丰南区",
              },
            ],
          },
        ],
      },
      {
        title: "山西",
        value: "山西",
        key: "山西",
        children: [
          {
            title: "太原市",
            value: "太原市",
            key: "太原市",
            children: [
              {
                title: "小店区",
                value: "小店区",
                key: "小店区",
              },
              {
                title: "迎泽区",
                value: "迎泽区",
                key: "迎泽区",
              },
            ],
          },
          {
            title: "大同市",
            value: "大同市",
            key: "大同市",
            children: [
              {
                title: "城区",
                value: "城区",
                key: "城区",
              },
              {
                title: "矿区",
                value: "矿区",
                key: "矿区",
              },
            ],
          },
        ],
      },
    ],
  },
]

return (
  <div>
    <div
      style={{
        width: "360px",
        marginBottom: "8px",
        border: "1px solid #E6E6E6",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2px 0 8px",
          height: "32px",
          boxShadow: "0 1px 0 rgba(0, 0, 0, 0.06)",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            lineHeight: "20px",
            color: "#a3a3a3",
          }}
        >
          已选结果
        </span>
        <Button
          leftIcon="delete-outlined"
          size="mini"
          theme="light"
          onClick={() => {
            setValue([])
          }}
        >
          清空
        </Button>
      </div>
      <div style={{ padding: "8px", minHeight: "108px" }}>
        {value.map((o) => (
          <Tag
            key={o}
            size="mini"
            onRemove={() => {
              const valueDuplicated = [...value]
              valueDuplicated.splice(value.indexOf(o), 1)
              setValue(valueDuplicated)
            }}
            style={{ marginRight: "4px", marginBottom: "4px" }}
          >
            {o}
          </Tag>
        ))}
      </div>
    </div>
    <TreeSelect
      selectAll
      resultVisible
      placeholder="请选择位置请选择位置请选择位置请选择位置请选择位置请选择位置"
      style={{ width: "360px" }}
      onChange={(val) => {
        console.log(val, "onchange")
        setValue(val)
      }}
      value={value}
      treeData={treeData}
      heightFixed
    />
  </div>
)
```
