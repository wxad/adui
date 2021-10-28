---
category: Components
type: General
title: Affix
subtitle: 固钉
---

将页面元素钉在可视范围。

## Alert

### 如果不需要使用 getContainer，你也许可以直接使用 position: sticky;

`Affix` 通过监听滚动事件与 `position: fixed` 实现。如果你有性能上的忧虑，可能你需要的只是 `position: sticky;`，它的 [兼容性](https://caniuse.com/#search=sticky) 并”不差“，特别是当你只需要考虑 webkit 时。<br />相较于 `position: sticky;`，`Affix` 的 `getContainer` Prop 是其最重要的功能。

## Props

### Affix
