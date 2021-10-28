---
category: Components
type: General
title: Popover
subtitle: 气泡提示
---

气泡提示用于触发、操作某项信息临时性弹出的内容，高于当前页面层级，为内容的轻量延伸。

## Alert

### 关于 alignEdge（是否边缘对齐）与 arrowed（是否带箭头）这两个 Prop

`alignEdge` 与 `arrowed` 这两个 Prop 往往要同时考虑。  
`Popover` 默认是边缘对齐的，比如 `Select` `DatePicker` 这样的选择类组件都是边缘对齐的，它们的另一个共同点就是都不带箭头。  
如果 `Popover` 包裹着 `Icon` 时发生了箭头没有指向 `Icon` 的情况，是因为你还需要设置 `alignEdge={false}`。

## Props

### Popover

### Popconfirm
