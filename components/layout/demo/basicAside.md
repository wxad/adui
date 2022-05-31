---
order: 0
title:
  zh-CN: 内部驱动
  en-US: Type
---

上中下布局：

```jsx
return (
  <Layout className="w-full h-420 transform overflow-hidden rounded-t-8">
    <Layout.Header className="pr-16 h-64">
      <div className="flex items-center ml-28 text-20">AD UI</div>
      <div className="flex items-center">
        <div className="w-28 h-28 rounded-full bg-tp-gray-700" />
        <div className="ml-8 mr-4">Aragakey.</div>
        <Icon icon="triangle-down" color="#C7C7C7" />
      </div>
    </Layout.Header>
    <Layout.Main>
      <div className="flex items-center justify-between h-84 px-48 bg-white shadow-b-tp-gray-100">
        <div className="text-16 leading-24 text-tp-gray-900 font-bold">
          页面标题
        </div>
        <Button leftIcon="setting" theme="light">
          设置
        </Button>
      </div>
      <div className="pt-32 px-48">
        <Card elevation={0}>
          <div className="w-full h-240" />
        </Card>
      </div>
    </Layout.Main>

    <style
      dangerouslySetInnerHTML={{
        __html: `.adui-ComponentDoc-demoWrapper { padding: 0px; }`,
      }}
    />
  </Layout>
)
```
