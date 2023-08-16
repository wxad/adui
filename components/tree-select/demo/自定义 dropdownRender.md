---
order: 3
title:
  zh-CN: 自定义
  en-US: dropdownRender
---

通过 `dropdownRender` 展示搜索后的全选

```jsx
const treeData = [
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
]

const [value, setValue] = useState([])
const [searchValue, setSearchValue] = useState("")
const handleSearch = (v) => {
  setSearchValue(v)
}

const handleSearchSelectAll = (nodes) => {
  // 筛选出的 options
  const { options } = nodes.props
  const newValue = [...value]
  options.forEach((o) => {
    if (!newValue.includes(o.value)) {
      newValue.push(o.value)
    }
  })
  setValue(newValue)
}

return (
  <TreeSelect
    placeholder="请选择位置"
    className="w-360"
    onChange={setValue}
    value={value}
    treeData={treeData}
    onSearch={handleSearch}
    dropdownRender={(nodes) => {
      return (
        <>
          {!!searchValue && (
            <div
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleSearchSelectAll(nodes)
              }}
            >
              点击搜索后全选
            </div>
          )}
          {nodes}
        </>
      )
    }}
  />
)
```
