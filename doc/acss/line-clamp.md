---
title: Line Clamp
---

AD UI 引入了以下功能类，以控制元素内多行文字溢出时的显示方式。

相关 CSS 属性：`overflow` `display` `-webkit-box-orient` `-webkit-line-clamp`

```json classes
{
  "line-clamp-none": "-webkit-line-clamp: unset;",
  "line-clamp-1": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 1;",
  "line-clamp-2": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 2;",
  "line-clamp-3": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 3;",
  "line-clamp-4": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 4;",
  "line-clamp-5": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 5;",
  "line-clamp-6": "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 6;"
}
```

```jsx acss
return (
  <div className="p-16 w-1/2 bg-tp-gray-50 rounded-6">
    <div className="line-clamp-3">
      AD UI 的大部分组件支持四种尺寸 size
      选择：大、中、小、迷你。为达到更高效的空间利用率、有秩序的环境，AD UI
      默认使用小尺寸，以保证在不同场景下，用户仍然能高效地掌握页面结构、内容，不至于迷失。同时，小尺寸也能以更低成本保证界面在多种尺寸屏幕中的表现。
    </div>
  </div>
)
```
