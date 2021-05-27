# 开始使用

<div>
<img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/od834zef_52939fc6.png" style="margin:40px 0 0 -8px; background-color: #fcfcfc; box-shadow: none;" />
</div>

[https://wxad.design/adui](https://wxad.design/adui)

---

## 使用 Package

**adui** 已经发布于 NPM。你可以通过你的包管理器安装（比如 [Yarn](https://yarnpkg.com)）：
```js
yarn add adui react react-dom
```
**adui** 目前依赖的 `react` 与 `react-dom` 版本为 16.13.1。**adui 2.0** 使用了 `Hooks` 书写组件，请保证你的 React 版本 ^16.8。

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

## 主题色

**adui** 使用了 CSS Variables 实现变量配置。同时配合 [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 解决兼容性问题。  
在引入之后，你的页面上就会有如下的样式：
```css
:root {
  --primary-color: #07c160;
}
```
你可以用更高优先级的 CSS 规则覆盖：
```css
html:root { --primary-color: #00bb9c; }
```
**adui** 还设置了许多其他变量比如 `--gray-50` 至 `--gray-900`，但请不要去修改这些变量。

---

## 兼容性

## Browsers support

| [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img style="display: inline-block;margin: 0;width: 24px;height: 24px; border-radius: 0;box-shadow: none;" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

---

## 关于组件类型

**adui 2.0** 一部分组件以 `Function Component` + `Hooks` 实现。
现在，组件一共有 类组件（`Class Component`），函数组件（`Function Component`），以及也属于函数组件的`ForwardRef Component`这三种。

## 关于内部驱动与外部控制
**adui** 所有包含状态的组件都有两种设计，即 **内部驱动（uncontrolled）** 与 **外部控制（controlled）**。

代表内部驱动的 Prop 是 `defaultValue`，代表外部控制的 Prop 是 `value`。比如 `<Switch />` 组件的 `defaultChecked` 与 `checked`。

`defaultChecked` 只在第一次渲染（constructor）时生效，之后的状态变化都会完全交给组件自身完成；  
而 `checked` 则代表如果不从外部改变，那么组件的状态就不会变化（代码上由生命周期 `getDerivedStateFromProps` 实现的）。

这样设计的原理来源于 React 对表单的 Controlled/Uncontrolled 的概念。[请阅读学习](https://reactjs.org/docs/forms.html#controlled-components)，并且按照需求选择这两种模式使用。

如果你只是需要设置一个初始值，并且只想要关心这个值的改变情况，比如 `<Switch defaultChecked onChange={xxx} />`，这样你就不需要单独地设置一个 state 保证组件 UI 状态的完整；
如果你想要存储这个变化的值，并且之后会用这个值回传给 `<Switch />`，那么你需要自己存储这个 state `<Switch checked={xxx} onChange={xxx} />`。

---

## ⌨️ 本地开发说明

adUI 的开发任务：
1. 建立 adUI 站点和组件文档；
2. 书写 components 代码；
3. 测试；
4. 编译与发布。

### IDE 相关
Vscode
插件需要：ESlint + styleint。

### 建立 adUI 站点和组件文档
adUI 的文档生成工具是 [bisheng](https://github.com/benjycui/bisheng)。

文档发布命令 `npm run site`，现在没有将此 repo 与 github page 关联，采用手动复制到 github 项目中发布。

### 书写 components 代码
以 button 为例：
```
button
│   index.tsx                   组件出口    
│   Button.tsx                  组件文件
└───__tests__                   enzyme + jest 单元测试
│   │   ...
└───demo
│   │   basic.md                md 会被 bisheng 解析，可在 md 中定义 order/title，以及书写 jsx 代码
│   │   others.md               
└───style
    │   index.scss              scss 出口
    │   _button.scss            组件样式
```

#### 组件的书写规范由以下方面限制
1. .tsx - eslint
2. .scss - stylelint
3. 为了方便组件文档的建立（如 API 表格），使用了 react-docgen 读取组件源代码。因此，组件必须有一句 title，以及每一个 prop 必须有文字说明。
  ```
  export interface IButtonProps {
    /**
    * 类型
    */
    intent?: "normal" | "primary" | "success" | "warning" | "danger"
  }
  ...
  Button.propTypes = {
    /**
    * 类型
    */
    intent: PropTypes.oneOf([
      "normal",
      "primary",
      "success",
      "warning",
      "danger",
    ]),
  }
  ```
  react-docgen 实际读取 tsType，所以可以说 prop-types 也并没有实际的用处了。保留 prop-types 库是为了保留这种偏原生的实现。在组件的不断更新迭代下，这让我更有安全感。

#### 内部驱动与外部控制
Class Component 会使用 `getDerivedStatesFromProp` 生命周期实现，在 `FC` 中，我们直接在 render 中判断：
```
  // 相当于生命周期 getDerivedStateFromProps
  if (checkedProp !== null && checked !== checkedProp) {
    setChecked(!!checkedProp)
  }
```


###  测试
enzyme + jest 书写测试用例。正在学习。
关于测试：
1. 必须包含：最基本的快照 `expect(<Button />).toMatchSnapshot()`；
2. 必须包含：对内部驱动（defaultValue）和外部控制（value）的功能测试；
3. `npm run test` 是跑全部测试，并生成 coverage，本地查看：`adUI/coverage/lcov-report/index.html`，请尽力提高 statements 的覆盖率；
4. 跑单一组件测试，如`jest components/button`，请确保全局安装了 `jest`。

### 编译与发布
`npm run compile` 编译版本，每次修改提交到 master，因为 mpweb 的使用方式是 submodule

发布与 Changelog 使用 `standard-version`。

## 多人维护
1. 透明的开发：前期的开发模式仍待规范，我自己都重复 refactor 过几次；
2. Pull Request Review：为了更好地进行 review，需要将 jest snapshot 一并 request。

## 分支名称规范
待规范

## 提交规范

提交规范现在使用了 [commitlint](https://github.com/conventional-changelog/commitlint) + `husky` 自动在 git pre-commit hook 时检测。同样在这时候会执行 stylelint 和 eslint。

未来会使用 commitlint 做自动化 changelog。此处感谢 charlieyin 推荐此工具。

现在推荐的 commit 示例：

### 新组件、功能（feature）
feat(Button): 添加 focus prop。
### 修复（bugfix）
fix(Button): 修复 focus 问题。
### 重构，无 feature & bugfix
refactor(Button): 调整 scss 结构。
### 文档相关
docs(Button): 添加 demo。
### 测试相关
test(Button): 添加快照。