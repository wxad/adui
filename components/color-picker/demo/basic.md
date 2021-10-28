---
order: 0
title:
  zh-CN: 最近使用
  en-US: recentColors
---

配合 `localstorage` 记录最近使用的颜色：

```jsx
const storage = localStorage["adui-recent-colors"]
const [recentColors, setRecentColors] = useState(
  storage ? storage.split(",") : ["#07C160"]
)
const colorPickerRef = useRef(null)

return (
  <ColorPicker
    ref={colorPickerRef}
    defaultValue="#07C160"
    recentColors={recentColors}
    onFinishChange={(val) => {
      const colors = [...recentColors]
      colors.unshift(val)
      localStorage.setItem("adui-recent-colors", colors)
      setRecentColors(colors)
    }}
  />
)
```

## Alert

### 关于 recentColors 与 onFinishChange

你需要配合使用这两个特殊的 Prop 完成对”最近使用“的记录。组件本身不负责也无法记录最近使用，因此你需要在 `onFinishChange` 的时候设置 `recentColors`，继而将 `recentColors` 传递给组件完成展示。  
你可以选择 `localStorage` **简单地**实现本地存储的方案。
