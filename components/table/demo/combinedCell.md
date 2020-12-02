---
order: 4
title:
  zh-CN: combinedCells
  en-US: combinedCells
---

利用 `getCellProps` 合并单元格：

```jsx
return (
  <Table
    dataSource={Array.from(new Array(5), (_, i) => ({ key: i }))}
    getCellProps={(_, __, rowIndex, colIndex) => {
      if (!rowIndex && !colIndex) {
        return { rowSpan: 5, colSpan: 1 }
      }
    }}
    getCellStyle={(row, col, rowIndex, colIndex) => {
      if (rowIndex === 0 && colIndex === 2) {
        return { backgroundColor: "#ff0000" }
      }
    }}
  />
)
```

## Alert

### 关于 getCellProps 的设计

在 `getCellProps` 中返回 `{ rowSpan, colSpan }` 的设计来源于原生 `<table />` 的实现。组件会处理这两个数值，然后在相对应的单元格上覆盖一层高宽经过计算的绝对定位元素。<br />  
你还可以利用 `getCellProps` 为特定的单元格传递比如 `onClick` 事件，组件除去会对 `rowSpan` `colSpan` 单独处理以外，其他 Prop 都会透传给那个单元格所属的 `div` 元素。
