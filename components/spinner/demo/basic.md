---
order: 0
title:
  zh-CN: 示例
  en-US: Type
---

结合卡片使用：

```jsx
const [spinning, setSpinning] = useState(false)

return (
  <section style={{ width: "80%" }}>
    <Spinner size="medium" spinning={spinning}>
      <Card>
        <Card.Header
          title="个人信息"
          topContent={
            <Button
              leftIcon="refresh"
              onClick={() => {
                setSpinning(true)
                setTimeout(() => setSpinning(false), 1000)
              }}
            >
              点击刷新
            </Button>
          }
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.06)" }}
        />
        <Form
          style={{ padding: "32px" }}
          itemStyle={{
            marginBottom: "8px",
            fontSize: "13px",
            color: "#636363",
          }}
          labelSize={4}
          labelStyle={{ marginRight: "16px" }}
        >
          <Form.Item label="名称">微信广告助手</Form.Item>
          <Form.Item label="城市">深圳市</Form.Item>
          <Form.Item label="性别">女</Form.Item>
          <Form.Item label="电子邮箱">donon@gmail.com</Form.Item>
        </Form>
      </Card>

      <style
        dangerouslySetInnerHTML={{
          __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`,
        }}
      />
    </Spinner>
  </section>
)
```
