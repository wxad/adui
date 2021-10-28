---
category: Components
type: General
title: Portal
subtitle: 节点渲染
---

`Portal` 将子节点从组件层级（component hierarchy）中分离，并 append 到 document.body（或指定的 container ）中。更适合用于受 `z-index`、`overflow: auto`、`position: absolute` 等约束的情况（组件 `Popover` `Tooltip` `Dialog` 的设计就是如此）。

## Alert

### React 15 与 React 16

在 React 15 与 React 16 中，Portal 分别采用 `ReactDOM.unstable_renderSubtreeIntoContainer` 与 `ReactDOM.createPortal` 的实现。

## Props

### Portal
