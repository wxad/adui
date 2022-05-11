# 开始使用

AD UI 2.0 引入了原子类，及 `tailwindcss` 作为实现工具，从设计规范中衍生出一套 **原子类规范**，解决实际的 PC 端业务问题。

AD UI 2.0 的组件自身并没有使用原子类开发，而是定义了一套如何更好应用 AD UI 的桌面端原子类规范。

选择原子类不仅是在选择一种书写 CSS 的方式，选择 `tailwindcss` 也不仅是在选择一个技术栈。我希望我选择的应当是对业务有益处的、符合我们思维方式的，以及影响 AD UI 未来的一种开发模式。

## Vite

如果你的构建工具是 Vite，那么可以参考 [adui-vite-starter](https://github.com/wxad/adui-vite-starter) 这个项目，其中包含了样式按需、Icon 按需及 `tailwindcss` 的应用。

## 安装

`tailwindcss` 本质是一个 `postcss` 插件，可参考 [官方文档](https://tailwindcss.com/docs/installation) 安装 `tailwindcss` `postcss` `autoprefixer`。安装后导入 AD UI 配置即可：

```javascript
// tailwind.config.js
module.exports = {
  presets: [require("adui/adui-tailwind-config")],
}
```
