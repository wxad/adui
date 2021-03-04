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
  <section>
    <TreeSelect
      placeholder="asdasdasd"
      className="tree-select-example"
      style={{ width: "350px" }}
      onChange={(param) => {
        console.log(param, "onChange")
        setValue(param)
      }}
      onSelect={(val) => console.log("onSelect", val)}
      value={value}
      multiple
      maxTagCount={2}
    >
      <TreeSelect.TreeNode value="3123" title="3123" key="3123" />
      <TreeSelect.TreeNode value="4123" title="12312" key="4123" />
      <TreeSelect.TreeNode value="5123" title="5123" key="5123" />
    </TreeSelect>
    <style
      dangerouslySetInnerHTML={{
        __html: `
              .tree-select-example [resulthidden],
              .adui-tree-select-max-popover-item [resulthidden] { display: none; }
            `,
      }}
    />
  </section>
)
```
