---
order: 0
title:
  zh-CN: 四种类型的轻量提示：
  en-US: Type
---

四种类型的轻量提示：

```jsx
const handleClick = (intent) => {
  const dialog = Dialog[intent]({
    type: "confirm",
    confirmProps: { disabled: true },
    contentTitle: "是否确认提交你的修改？",
    contentText: (
      <div>
        <Checkbox
          onChange={(bool) => {
            dialog.update({ confirmProps: { disabled: !bool } })
          }}
        >
          我已阅读《广告投放规则》
        </Checkbox>
      </div>
    ),
  })
}

return (
  <section className="flex gap-16" style={{ padding: '1000px 0' }}>
    <Button onClick={() => handleClick("info")}>信息类</Button>
    <Button onClick={() => handleClick("success")} intent="success">
      成功类
    </Button>
    <Button onClick={() => handleClick("warning")} intent="warning">
      警示类
    </Button>
    <Button onClick={() => handleClick("danger")} intent="danger">
      危险类
    </Button>
  </section>
)
```

## Alert

### 关于声明式使用、函数式调用、轻量 这 3 种模式

1.声明式使用是推荐的使用方法，因为这符合 React 哲学 —— 应当将 UI 作为显示的运算结果；  
2.函数式调用是基于 `<Dialog />` 组件的函数式封装；  
3.轻量提示则是函数式调用的一种特殊情况，提供了特别的 `contentTitle` `contentText` Prop。  
事实上，函数式调用和声明式可以实现完全相同的功能。但是推荐只在相对简单的场景中使用函数式调用。 <br /><br />
**函数式更新 Prop 的方法**  
首先创建一个实例 `const dialog = Dialog.inform({...})`，继而调用组件提供的 `dialog.update({...})` 方法，比如上面例子所演示的 `<Checkbox />` 对 `confirmProps` 的改变，体现出了函数式不必添加多个 `state` 就能完成任务的优势。<br />  
尽管如此，函数式不符合 “React UI 组件”的核心思路，声明式使用是推荐的使用方法。
