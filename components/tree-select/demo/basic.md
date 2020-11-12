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
        onChange={param => {
          console.log(param, "onChange")
          setValue(param)
        }}
        onSelect={val => console.log("onSelect", val)}
        defaultValue={["click_id (点击ID)", "click_id (推广ID)"]}
        multiple
        maxTagCount={2}
      >
      <TreeSelect.TreeNode value="click_id (点击ID)" title={<span>click_id (点击ID)<span resulthidden="true" style={{ marginLeft: " 4px", color: "#07c160" }}>推荐</span></span>} key="click_id (点击ID)" popover="asd" disabled />
        <TreeSelect.TreeNode value="click_id (推广ID)" title={<span>click_id (推广ID)<span resulthidden="true" style={{ marginLeft: " 4px", color: "#07c160" }}>推荐</span></span>} key="click_id (推广ID)" popover="asd" disabled />
        <TreeSelect.TreeNode value="3123" title="3123" key="3123" popover="asd" />
        <TreeSelect.TreeNode value="4123" title="12312" key="4123" />
        <TreeSelect.TreeNode value="5123" title="5123" key="5123" />
        <TreeSelect.TreeNode value="6value" title="333" key="6value">
          <TreeSelect.TreeNode value="3" title="3title" key="3" />
          <TreeSelect.TreeNode value="4" title="4title" key="4" />
          <TreeSelect.TreeNode value="5" title="5title" key="5" />
        </TreeSelect.TreeNode>
        <TreeSelect.TreeNode value="16value" title="16title" key="16value">
          <TreeSelect.TreeNode value="13" title="13title" key="13" />
          <TreeSelect.TreeNode value="14" title="14title" key="14" />
          <TreeSelect.TreeNode value="15" title="15title" key="15">
            <TreeSelect.TreeNode value="a3123" title="a3123" key="a3123" />
            <TreeSelect.TreeNode value="a4123" title="a12312" key="a4123" />
            <TreeSelect.TreeNode value="a5123" title="a5123" key="a5123" />
            <TreeSelect.TreeNode value="a13" title="a13title" key="a13">
              <TreeSelect.TreeNode value="a14" title="a14title" key="a14" />
              <TreeSelect.TreeNode value="a15" title="a15title" key="a15" />
              <TreeSelect.TreeNode value="a3" title="a3title" key="a3" />
              <TreeSelect.TreeNode value="a4" title="a4title" key="a4" />
              <TreeSelect.TreeNode value="a5" title="a5title" key="a5" />
            </TreeSelect.TreeNode>
          </TreeSelect.TreeNode>
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
    </section>
  )
```
