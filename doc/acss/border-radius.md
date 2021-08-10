---
title: Border Radius
---

AD UI 引入了以下功能类，以控制元素的外边框圆角。支持多方位： `rounded-2` `rounded-t-2` `rounded-b-2` `rounded-tl-2` `rounded-tr-2` `rounded-bl-2` `rounded-br-2`

相关 CSS 属性：`border-radius` `border-top-left-radius` `border-top-right-radius` `border-bottom-left-radius` `border-bottom-right-radius`

```json classes
{
  "rounded-none": "border-radius: 0px;",
  "rounded-2": "border-radius: 2px;",
  "rounded-4": "border-radius: 4px;",
  "rounded-6": "border-radius: 6px;",
  "rounded-8": "border-radius: 8px;",
  "rounded-10": "border-radius: 10px;",
  "rounded-12": "border-radius: 12px;",
  "rounded-24": "border-radius: 24px;",
  "rounded-52": "border-radius: 52px;",
  "rounded-full": "border-radius: 9999px;",
  "rounded-t-none": "border-top-left-radius: 0px;\nborder-top-right-radius: 0px;",
  "rounded-t-2": "border-top-left-radius: 2px;\nborder-top-right-radius: 2px;",
  "rounded-t-4": "border-top-left-radius: 4px;\nborder-top-right-radius: 4px;",
  "rounded-t-6": "border-top-left-radius: 6px;\nborder-top-right-radius: 6px;",
  "rounded-t-8": "border-top-left-radius: 8px;\nborder-top-right-radius: 8px;",
  "rounded-t-10": "border-top-left-radius: 10px;\nborder-top-right-radius: 10px;",
  "rounded-t-12": "border-top-left-radius: 12px;\nborder-top-right-radius: 12px;",
  "rounded-t-24": "border-top-left-radius: 24px;\nborder-top-right-radius: 24px;",
  "rounded-t-52": "border-top-left-radius: 52px;\nborder-top-right-radius: 52px;",
  "rounded-t-full": "border-top-left-radius: 9999px;\nborder-top-right-radius: 9999px;",
  "rounded-b-none": "border-bottom-left-radius: 0px;\nborder-bottom-right-radius: 0px;",
  "rounded-b-2": "border-bottom-left-radius: 2px;\nborder-bottom-right-radius: 2px;",
  "rounded-b-4": "border-bottom-left-radius: 4px;\nborder-bottom-right-radius: 4px;",
  "rounded-b-6": "border-bottom-left-radius: 6px;\nborder-bottom-right-radius: 6px;",
  "rounded-b-8": "border-bottom-left-radius: 8px;\nborder-bottom-right-radius: 8px;",
  "rounded-b-10": "border-bottom-left-radius: 10px;\nborder-bottom-right-radius: 10px;",
  "rounded-b-12": "border-bottom-left-radius: 12px;\nborder-bottom-right-radius: 12px;",
  "rounded-b-24": "border-bottom-left-radius: 24px;\nborder-bottom-right-radius: 24px;",
  "rounded-b-52": "border-bottom-left-radius: 52px;\nborder-bottom-right-radius: 52px;",
  "rounded-b-full": "border-bottom-left-radius: 9999px;\nborder-bottom-right-radius: 9999px;",
  "...": "..."
}
```

```jsx acss
return (
  <div className="inline-flex p-20 bg-tp-gray-100 space-x-8 text-white rounded-4">
    <div className="p-16 bg-green rounded-4">rounded-4</div>
    <div className="p-16 bg-green rounded-12">rounded-12</div>
    <div className="p-16 bg-green rounded-24">rounded-24</div>
  </div>
)
```
