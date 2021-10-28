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
    key: "核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市核心城市",
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
    <div className="mb-8 w-360 rounded-4 shadow-tp-gray-300">
      <div className="flex items-center justify-between pl-8 pr-2 h-32 shadow-b-tp-gray-100">
        <span className="text-13 leading-20 text-tp-gray-700">已选结果</span>
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
      <div className="p-8 min-h-108">
        {value.map((o) => (
          <Tag
            key={o}
            size="mini"
            onRemove={() => {
              const valueDuplicated = [...value]
              valueDuplicated.splice(value.indexOf(o), 1)
              setValue(valueDuplicated)
            }}
            className="mr-4 mb-4"
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
      className="w-360"
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
