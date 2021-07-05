---
order: 2
title:
  zh-CN: 允许相同值
  en-US: sameValueEnabled
---

允许相同值

```jsx
const [value, setValue] = useState([])

const treeData = [
  {
    title: "张三",
    value: "张三",
    key: "张三",
  },
  {
    title: "财务部",
    value: "财务部",
    key: "财务部",
    isLeaf: false,
    checkable: false,
    children: [
      {
        title: "张三",
        value: "张三",
        key: "张三",
      },
      {
        title: "李四",
        value: "李四",
        key: "李四",
      },
    ],
  },
  {
    title: "人事部",
    value: "人事部",
    key: "人事部",
    isLeaf: false,
    checkable: false,
    children: [
      {
        title: "李四",
        value: "李四",
        key: "李四",
      },
      {
        title: "赵六",
        value: "赵六",
        key: "赵六",
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
      resultVisible={false}
      placeholder="请选择位置请选择位置请选择位置请选择位置请选择位置请选择位置"
      className="w-360"
      onChange={(val) => {
        console.log(val, "onchange")
        setValue(val)
      }}
      value={value}
      treeData={treeData}
      heightFixed
      sameValueEnabled
    />
  </div>
)
```
