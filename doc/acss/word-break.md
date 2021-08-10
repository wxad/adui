---
title: Word Break
---

AD UI 引入了以下功能类，以指定怎样在单词内断行。

相关 CSS 属性：`word-break` `overflow-wrap`

```json classes
{
  "break-normal": "overflow-wrap: normal;\nword-break: normal;",
  "break-words": "overflow-wrap: break-word;",
  "break-all": "word-break: break-all;"
}
```

```jsx acss
return (
  <div className="p-16 w-280 break-normal bg-tp-gray-50 rounded-6">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed
    dolorum ratione dolorem nisi velit cum.
  </div>
)
```
