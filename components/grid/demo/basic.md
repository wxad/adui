---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Intent
---

12 栏栅格卡片式布局：

```jsx
const renderCard = (span) => (
  <Grid.Col span={span}>
    <Card interactive className="h-100" />
  </Grid.Col>
)

return (
  <section className="flex-1">
    <Grid.Row gutter={16} className="mb-16">
      {renderCard(4)}
      {renderCard(4)}
      {renderCard(4)}
    </Grid.Row>
    <Grid.Row gutter={16} className="mb-16">
      {renderCard(3)}
      {renderCard(3)}
      {renderCard(3)}
      {renderCard(3)}
    </Grid.Row>
    <Grid.Row gutter={16}>{renderCard(12)}</Grid.Row>

    <style
      dangerouslySetInnerHTML={{
        __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`,
      }}
    />
  </section>
)
```
