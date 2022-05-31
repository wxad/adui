---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

纯图标按钮组应用，建议使用时同时使用工具提示 `Tooltip`，保证按钮功能的可见性。

```jsx
const [activeIndex, setActiveIndex] = useState(0)

return (
  <React.Fragment>
    <Button.Group>
      {[
        { icon: "format-align-left", tooltip: "左对齐" },
        { icon: "format-align-center", tooltip: "居中" },
        { icon: "format-align-right", tooltip: "右对齐" },
        { icon: "format-align-justify", tooltip: "两端对齐" },
      ].map(({ icon, tooltip }, index) => (
        <Tooltip
          popup={tooltip}
          placement="top"
          popupClassName="tbg-demo"
          mouseEnterDelay={0.3}
        >
          <Button
            style={{ width: "38px" }}
            key={icon}
            leftIcon={icon}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        </Tooltip>
      ))}
    </Button.Group>
    <style
      dangerouslySetInnerHTML={{
        __html: `.tbg-demo .adui-tooltip-content { padding: 4px; border-radius: 4px; }`,
      }}
    />
  </React.Fragment>
)
```
