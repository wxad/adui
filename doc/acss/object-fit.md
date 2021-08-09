---
title: Object Fit
---

AD UI 引入了以下功能类，以控制元素的可替换内容会被怎样调整大小。

相关 CSS 属性：`object-fit`

```json classes
{
  "object-contain": "object-fit: contain;",
  "object-cover": "object-fit: cover;",
  "object-fill": "object-fit: fill;",
  "object-none": "object-fit: none;"
}
```

```jsx acss
return (
  <>
    <img
      className="block w-100 h-100 object-contain demoImg"
      src="//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png"
    />

    <style
      dangerouslySetInnerHTML={{
        __html: `.demoImg{ margin: 0!important;width:100px!important;height:100px!important; }`,
      }}
    />
  </>
)
```
