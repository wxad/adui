# 开始使用

<div>
<img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/od834zef_52939fc6.png" style="margin:40px 0 0 -8px; background-color: #fcfcfc; box-shadow: none;" />
</div>

---

## 开始使用

**adui** 已经发布于 NPM。你可以通过你的包管理器安装（比如 [Yarn](https://yarnpkg.com)）：

```js
yarn add adui react react-dom
```

**adui** 目前依赖的 `react` 与 `react-dom` 版本为 16.9.0。**adui 2.0** 使用了 `Hooks` 书写组件，请保证你的 React 版本 ^16.9.0。

---

## Import

引入你所需要的 React 组件。

```js
import { Button } from "adui"

<Button intent="primary">开始使用<Button/>
```

你不需要独立地引入样式，因为每个组件都会 import 自己的 `.css` 文件。你只需要保证 webpack 的 `css-loader` 能够作用到 `node_modules/adui` 这个文件夹，就能保证样式的正确。

未来会加入不需要依赖 webpack 配置的编译版本，届时 CSS 文件会完全与 JS 文件分离。

---

## Webpack 按需

### 组件与样式文件

**adui 2.0** 在每个组件中单独引入了该组件的样式。因此，组件和样式的按需打包，通过 webpack 的 tree shaking 会自动得到处理。

### 图标 Icon

由于 **adui 2.0** 的组件设计，在只使用 `<Icon icon="add" />` 时会引入整个图标资源文件，因为所有的路径信息都存放在这同一个文件下。同样，如果只使用了 `<Button leftIcon="add" />` 也会引入所有图标，因为 `<Button />` 使用了 `<Icon />`。

现有的 API 有它的优势。对比业界方案（此处不展开讨论），**adui 2.0** 提供了基于 webpack 的 loader 和 plugin 帮助处理图标的按需提取。

```js
const AduiIconLoader = require.resolve("adui/adui-icon-loader")
const AduiIconPlugin = require("adui/adui-icon-plugin")
```

如果项目使用了 create-react-app 创建，请先 eject 操作，因为我们需要修改 webpack 配置：

```js
// 第一步：对源文件在 babel-loader 后添加 AduiIconLoader
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  use: [
    { loader: AduiIconLoader },
    {
      loader: require.resolve("babel-loader"),
      ...
    }
  ]
}

...

// 第二步：在 plugins 中加入 AduiIconPlugin
plugins: [
  new AduiIconPlugin(),
  ...
]
```

原理与注意事项之后补充。

## Vite 按需

可参考 [AD UI Vite 示例项目](https://git.woa.com/wxad-design/vite-adui-example)，此示例使用 `vite@2.4.0`，`^adui@2.5.0`，提供样式按需解决方案、Icon 按需解决方案及 TailwindCSS 的引入。每一项功能都是非必需的。

---

## 主题色

**adui** 使用了 CSS Variables 实现变量配置。同时配合 [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 解决兼容性问题。  
在引入之后，你的页面上就会有如下的样式：

```css
:root {
  --primary-color: #07c160;
  ...;
}
```

你可以用更高优先级的 CSS 规则覆盖：

```css
html:root {
  --primary-color: #00bb9c;
}
```

**adui** 还设置了许多其他变量比如 `--gray-50` 至 `--gray-900`，请小心修改这些变量。

---

## 兼容性

## Browsers support

| [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                                                                                                                        | last 2 versions                                                                                                                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                                                                                                                |

---

## 关于组件类型

**adui 2.0** 一部分组件以 `Function Component` + `Hooks` 实现。
现在，组件一共有 类组件（`Class Component`），函数组件（`Function Component`），以及也属于函数组件的`ForwardRef Component`这三种。

## 关于内部驱动与外部控制

**adui** 所有包含状态的组件都有两种设计，即 **内部驱动（uncontrolled）** 与 **外部控制（controlled）**。

代表内部驱动的 Prop 是 `defaultValue`，代表外部控制的 Prop 是 `value`。比如 `<Switch />` 组件的 `defaultChecked` 与 `checked`。

`defaultChecked` 只在第一次渲染时生效，之后的状态变化都会完全交给组件自身完成；  
而 `checked` 则代表如果不从外部改变，那么组件的状态就不会变化（代码上由生命周期 `getDerivedStateFromProps` 或 `useEffect` 实现的）。

这样设计的原理来源于 React 对表单的 Controlled/Uncontrolled 的概念。[请阅读学习](https://reactjs.org/docs/forms.html#controlled-components)，并且按照需求选择这两种模式使用。

如果你只是需要设置一个初始值，并且只想要关心这个值的改变情况，比如 `<Switch defaultChecked onChange={xxx} />`，这样你就不需要单独地设置一个 state 保证组件 UI 状态的完整；
如果你想要存储这个值，那么你需要在变化时将这个值回传给组件：`<Switch checked={xxx} onChange={xxx} />`。
