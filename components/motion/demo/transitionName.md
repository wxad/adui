---
order: 2
title:
  zh-CN: transitionName
  en-US: transitionName
---

CSS：通过 `transitionName` 自定义 css animation。

```jsx
const [visible, setVisible] = useState(false)

return (
  <div className="w-2/4 text-center">
    <Button onClick={() => setVisible(!visible)}>toggle animation</Button>
    <Motion transitionName="custom">
      {visible && <div className="adui-custom-example"></div>}
    </Motion>
    <style
      dangerouslySetInnerHTML={{
        __html: `
            .adui-custom-example {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
              height: 160px;
              font-family: SFMono-Semibold;
              font-size: 13px;
              line-height: 20px;
              color: rgb(255, 255, 255);
              font-weight: 600;
              border-radius: 6px;
              background-color: var(--primary-color);
            }
            .custom-enter {
              opacity: 0;
              transform: translateX(50px);
              animation-play-state: paused;
              animation-duration: .3s;
              animation-fill-mode: both;
            }
            .custom-leave {
              opacity: 1;
              transform: translateX(0);
              animation-play-state: paused;
              animation-duration: .3s;
              animation-fill-mode: both;
            }
            .custom-enter.custom-enter-active {
              animation-name: customAnimationIn;
              animation-play-state: running;
            }
            .custom-leave.custom-leave-active {
              animation-name: customAnimationIn;
              animation-direction: reverse;
              animation-play-state: running;
            }
            @keyframes customAnimationIn {
              0% { opacity: 0; transform: translateX(50px); }
              100% { opacity: 1; transform: translateX(0); }
            }
          `,
      }}
    />
  </div>
)
```
