---
title: Shadow
---

AD UI 引入了以下功能类，以控制元素框架上的阴影效果。颜色色值除了派生自色彩规范的部分以外，还提供 `shadow-0` `shadow-1` `shadow-2` `shadow-3` `shadow-4` 五个层级。

在种类上，提供了 `1px` `2px` `1px inset` `2px inset` 四种类型。  
对应类名为：`shadow-tp-gray-200` `shadow-2-tp-gray-200` `shadow-inset-tp-gray-200` `shadow-2-inset-tp-gray-200`

相关 CSS 属性：`box-shadow`

<div>
<div class="flex mt-40">
  <div class="w-100 mr-16 font-medium">Elevation</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-0"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-0</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-1"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-1</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-3"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-3</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-4"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-4</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-40">
  <div class="w-100 mr-16 font-medium">色相系<br />1px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-green"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-green</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-green"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-green</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-blue"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-blue</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-orange"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-orange</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-red"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-red</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-48">
  <div class="w-100 mr-16 font-medium">无色系<br />1px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-50"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-50</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-100"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-100</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-200"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-200</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-300"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-300</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-400"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-400</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-500"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-500</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-600"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-600</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-700"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-700</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-800"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-800</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-gray-900"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-gray-900</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-48">
  <div class="w-100 mr-16 font-medium">无色系 (透明)<br />1px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-50"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-50</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-100"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-100</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-200"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-200</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-300"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-300</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-400"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-400</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-500"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-500</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-600"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-600</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-700"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-700</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-800"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-800</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-tp-gray-900"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow(-inset?)-tp-gray-900</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-40">
  <div class="w-100 mr-16 font-medium">色相系<br />2px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-green"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-green</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-green"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-green</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-blue"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-blue</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-orange"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-orange</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-red"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-red</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-48">
  <div class="w-100 mr-16 font-medium">无色系<br />2px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-50"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-50</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-100"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-100</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-200"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-200</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-300"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-300</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-400"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-400</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-500"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-500</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-600"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-600</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-700"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-700</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-800"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-800</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-gray-900"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-gray-900</div>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-48">
  <div class="w-100 mr-16 font-medium">无色系 (透明)<br />2px</div>
  <div class="flex-1 grid grid-cols-5 gap-16 text-12">
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-50"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-50</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-100"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-100</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-200"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-200</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-300"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-300</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-400"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-400</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-500"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-500</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-600"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-600</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-700"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-700</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-800"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-800</div>
      </div>
    </div>
    <div>
      <div class="rounded-6 mb-4 h-40 bg-tp-gray-50 shadow-2-tp-gray-900"></div>
      <div class="flex items-center justify-between px-2">
        <div class="text-tp-gray-700">shadow-2(-inset?)-tp-gray-900</div>
      </div>
    </div>
  </div>
</div>
</div>

```jsx acss
return (
  <div className="p-16 w-full space-y-20 bg-tp-gray-50 rounded-6">
    {["shadow-0", "shadow-1", "shadow-2", "shadow-3", "shadow-4"].map((o) => (
      <div key={o} className="flex items-center text-14">
        <span className="flex-none mr-16 w-140 text-tp-gray-600">{o}</span>
        <div
          className={`flex-1 flex items-center justify-center h-40 bg-white rounded-6 ${o}`}
        />
      </div>
    ))}
  </div>
)
```
