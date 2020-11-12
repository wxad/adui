---
category: Components
type: General
title: Dialog
subtitle: 对话框
---

对话框用于全局性的反馈，通常分为“确认操作”与“告知信息”。确认操作用于询问用户“操作是否继续进行？”，如大部分的二次确认反馈。告知信息则用于知会用户某个及时反馈，如信息提交成功、失败等。

## Alert
### afterClose 与 onCancel / onConfirm 的使用
`onCancel` 与 `onConfirm` 触发于按钮被点击时，这时候应该进行的是：是否可关闭的校验逻辑；  
如果是页面需要在 `Dialog` 关闭后发生一些变化，你应该使用 `afterClose` 这个 Prop。因为这能保证页面在对话框完全关闭后再发生变化。

## Props
### Dialog