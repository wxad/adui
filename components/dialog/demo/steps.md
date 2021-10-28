---
order: 1
title:
  zh-CN: 步骤
  en-US: Steps
---

承载轻量的支线步骤与流程

```jsx
const [visible, setVisible] = useState(false)
const [currentStep, setCurrentStep] = useState(0)

return (
  <React.Fragment>
    <Button onClick={() => setVisible(true)}>弹出步骤</Button>
    <Dialog
      title="标题"
      visible={visible}
      onCancel={() => {
        setVisible(false)
        setCurrentStep(0)
      }}
      currentStep={currentStep}
      steps={[
        {
          onCancel: () => setVisible(false),
          onConfirm: () => {
            setCurrentStep(1)
          },
          children: "第一步",
          cancelText: "取消",
          confirmText: "下一步",
        },
        {
          onConfirm: () => {
            setCurrentStep(2)
          },
          children: "第二步",
          cancelText: "上一步",
          confirmText: "下一步",
        },
        {
          onConfirm: () => console.log("第三步 confirm", "yijie"),
          children: "第三步",
          cancelText: "上一步",
          confirmText: "完成",
        },
      ]}
    />
  </React.Fragment>
)
```

## Alert

### 关于 steps

steps 数组的每一项是一个对象，它目前只支持以下参数：  
`cancelProps` `cancelText` `children` `confirmProps` `confirmText` `onCancel` `onConfirm`
