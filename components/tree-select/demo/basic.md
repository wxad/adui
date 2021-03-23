---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

内部驱动

```jsx
const [value, setValue] = useState([])

return (
  <div>
    {value.map(o => (
      <div>{o}</div>
    ))}
    <TreeSelect
      placeholder="asdasdasd"
      className="tree-select-example"
      style={{ width: "350px" }}
      onChange={(param) => {
        console.log(param, "onChange")
        setValue(param)
      }}
      onSearch={(val) => {
        console.log(val, "search")
      }}
      onSelect={(val) => console.log("onSelect", val)}
      value={value}
      multiple
      maxTagCount={2}
      filterTreeNode={(input, treeNode) => {
        const { key, title, value, dataTitle } = treeNode
        if (value === "adui_example_test") {
          return true
        }
        if (!key || !value) {
          return false
        }
        return String(dataTitle || title).includes(input)
      }}
      topContent={
        <div>
          <Tabs defaultValue={0}>
            <Tabs.Tab title="境内" value={0} />
            <Tabs.Tab title="境外" value={1} />
          </Tabs>
          <Radio.Group defaultValue={1}>
            <Radio value={1}>按价格区间选择</Radio>
            <Radio value={2}>按省市选择</Radio>
          </Radio.Group>
        </div>
      }
      resultVisible={false}
    >
      <TreeSelect.TreeNode value="5123" title="父节点可选择" key="5123">
        <TreeSelect.TreeNode value="3123" title="选项一" key="3123" />
        <TreeSelect.TreeNode value="4123" title="选项二" key="4123" />
      </TreeSelect.TreeNode>
      <TreeSelect.TreeNode value="113123" title="选项三" key="113123" />
      <TreeSelect.TreeNode value="124123" title="选项四" key="124123" />
      <TreeSelect.TreeNode value="133123" title="选项三" key="133123" />
      <TreeSelect.TreeNode value="141243" title="选项四" key="141243" />
      <TreeSelect.TreeNode
        value="asdasd"
        key="asdasd"
        title="父节点不可选择"
        checkable={false}
      >
        <TreeSelect.TreeNode value="13123" title="选项三" key="13123" />
        <TreeSelect.TreeNode value="14123" title="选项四" key="14123" />
      </TreeSelect.TreeNode>
    </TreeSelect>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .tree-select-example [resulthidden],
          .adui-tree-select-max-popover-item [resulthidden] { display: none; }
        `,
      }}
    />
  </div>
)
```
