---
order: 0
title:
  zh-CN: 顶部元素
  en-US: Type
---

使用 `topContent` 在树形结构上方增加顶部元素，使用 `bottomContent` 在树形结构下方增加底部元素

```jsx
const treeDatas = [
  [
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
  [
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
]
const [value, setValue] = useState([])
const [treeData, setTreeData] = useState(treeDatas[0])

return (
  <TreeSelect
    placeholder="请选择位置"
    className="w-360"
    onChange={setValue}
    value={value}
    treeData={treeData}
    maxTagCount={1}
    topContent={
      <Tabs
        className="pl-18 shadow-b-tp-gray-100"
        defaultValue={0}
        onChange={(val) => {
          setTreeData(treeDatas[val])
        }}
      >
        <Tabs.Tab title="选项一" value={0} />
        <Tabs.Tab title="选项二" value={1} />
      </Tabs>
    }
    bottomContent={<div>bottomContent</div>}
  />
)
```
