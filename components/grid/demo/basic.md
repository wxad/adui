---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Intent
---

12 栏栅格卡片式布局：

```jsx
  const renderCard = span => (
    <Grid.Col span={span}>
      <Card interactive style={{ height: "100px" }} />
    </Grid.Col>
  )

  return (
    <section style={{ flex: 1 }}>
      <Grid.Row
        gutter={16}
        style={{ marginBottom: "16px" }}
      >
        { renderCard(4) }
        { renderCard(4) }
        { renderCard(4) }
      </Grid.Row>
      <Grid.Row
        gutter={16}
        style={{ marginBottom: "16px" }}
      >
        { renderCard(3) }
        { renderCard(3) }
        { renderCard(3) }
        { renderCard(3) }
      </Grid.Row>
      <Grid.Row
        gutter={16}
      >
        { renderCard(12) }
      </Grid.Row>
      {/** 请忽略这个 style 标签 😊 */}
      <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }` }} />
    </section>
  )
```
