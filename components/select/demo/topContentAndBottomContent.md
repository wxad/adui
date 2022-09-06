---
order: 3
title:
  zh-CN: topContent & bottomContent
  en-US: topContent & bottomContent
---

20220906: topContent & bottomContent：

```jsx
return (
  <Select
    className="w-2/4"
    searchable
    topContent={<div>topContent</div>}
    bottomContent={<div>bottomContent</div>}
  >
    <Select.OptGroup label="广告位">
      <Select.Option value="朋友圈广告">朋友圈</Select.Option>
      <Select.Option value="公众号广告">公众号</Select.Option>
    </Select.OptGroup>
    <Select.OptGroup label="行业">
      <Select.Option value="行业一">行业一</Select.Option>
      <Select.Option value="行业二">行业二</Select.Option>
      <Select.Option value="行业三">行业三</Select.Option>
      <Select.Option value="行业四">行业四</Select.Option>
      <Select.Option value="行业五">行业五</Select.Option>
      <Select.Option value="行业六">行业六</Select.Option>
      <Select.Option value="行业七">行业七</Select.Option>
      <Select.Option value="行业八">行业八</Select.Option>
    </Select.OptGroup>
  </Select>
)
```

## Alert

### 虚拟滚动与 dropdownMatchSelectWidth Prop

当 `dropdownMatchSelectWidth` 为 `false` 时，虚拟滚动将失效。在 adui 2.0 前，此 Prop 默认为 `false`，现在改为 `true`，请注意对样式的影响。
