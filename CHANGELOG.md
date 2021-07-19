# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.7.1](https://github.com/wxad/adui/compare/v2.7.0...v2.7.1) (2021-07-19)

## [2.7.0](https://github.com/wxad/adui/compare/v2.6.0...v2.7.0) (2021-07-19)


### Features

* **tailwind:** visibility 增加 hover focus ([cfff8a1](https://github.com/wxad/adui/commit/cfff8a1d0d142d908ab90796c439cd05a153c526))

## [2.6.0](https://github.com/wxad/adui/compare/v2.5.0...v2.6.0) (2021-07-13)


### Features

* **Table:** 支持 getRowProps Props ([ee365f3](https://github.com/wxad/adui/commit/ee365f3b7a059ae3de526f13e47c7e89f6b794cd))


### Bug Fixes

* **Tabs:** 修复在 children 变化时 Tabs 不会重新定位的问题 ([916e9fb](https://github.com/wxad/adui/commit/916e9fbbcca5d242ee6f7fbaccdb508b8b592f65))

## [2.5.0](https://github.com/wxad/adui/compare/v2.4.0...v2.5.0) (2021-07-12)


### Features

* **plugin:** 支持 rollup 按需 icon ([bc1395a](https://github.com/wxad/adui/commit/bc1395a8c8898966349d69b0f482cb350dde6839))


### Bug Fixes

* **DatePicker:** 修复 react-day-picker 的 esm build 问题，相关 issue https://github.com/gpbl/react-day-picker/issues/1194 ([300fe57](https://github.com/wxad/adui/commit/300fe573db013b37f0c72f1b45a3efc4d6cef3df))

## [2.4.0](https://github.com/wxad/adui/compare/v2.3.0...v2.4.0) (2021-07-08)


### Features

* **TreeSelect:** 增加 sameValueEnabled Props ([503bece](https://github.com/wxad/adui/commit/503bece3e371382bece92cb7d3cace4143b1239f))
* **Upload.Img:** 支持 icon null；支持 disabled 态 ([ca35e16](https://github.com/wxad/adui/commit/ca35e165a7e0a1f2e7015207a46d82de8471eca7))


### Bug Fixes

* **loader:** 修复没有 icon 情况下，loader 的报错 ([af6d60e](https://github.com/wxad/adui/commit/af6d60ef88a7334bc2d2d621c3b356074df32c0f))

## [2.3.0](https://github.com/wxad/adui/compare/v2.2.0...v2.3.0) (2021-07-02)


### Features

* **Cascader:** 加入动画 ([7f59382](https://github.com/wxad/adui/commit/7f59382e3d207a79087cca4310626be49ca4db11))
* **Icon:** update adui-icon ([6b0af9a](https://github.com/wxad/adui/commit/6b0af9a9e042aa4fa055ba0116ed4e2855e4d64a))
* **Upload:** hoverOperations Props ([551c147](https://github.com/wxad/adui/commit/551c14753d37ec0988546d1eacd15d6315ced139))

## [2.2.0](https://github.com/wxad/adui/compare/v2.1.0...v2.2.0) (2021-06-28)


### Features

* **Button:** iconStyle Props ([b1dfbe4](https://github.com/wxad/adui/commit/b1dfbe4c1f79a6c3739aa908acff4f3a34cb8513))
* **Cascader:** 添加 Cascader 组件 ([15de950](https://github.com/wxad/adui/commit/15de9503896466c5477de735a55bde57681c024c))
* **loader:** icon-loader 添加 cascader 按需 ([00f57be](https://github.com/wxad/adui/commit/00f57be2425b16bfce8c0337b167579208ba00a9))
* **tailwind:** 添加 overflow: overlay; ([02c7caf](https://github.com/wxad/adui/commit/02c7cafcb97141e9bd36ff4b78c2352ae533ea9a))
* **Upload.Img:** 添加 previewDisabled prop ([cc1d004](https://github.com/wxad/adui/commit/cc1d004229c177b9505497e516dfca35858d6672))

## [2.1.0](https://github.com/wxad/adui/compare/v2.0.0...v2.1.0) (2021-06-22)


### Features

* **Dialog:** header body footer 支持 className ([777b05a](https://github.com/wxad/adui/commit/777b05afe901a80ab81e19fa5de40622430ceaa0))
* **Form:** 支持 itemClassName labelClassName ([377991d](https://github.com/wxad/adui/commit/377991dd78c41c6277f14f963f45206ed02df932))


### Bug Fixes

* **Affix:** 修复在 display: none 变为 Block 时的状态问题 ([ff9226a](https://github.com/wxad/adui/commit/ff9226a04d3867da0a731226aa917475ce80f2e4))
* **ColorPicker:** 修复无法重置为 "" 的问题 ([246c5aa](https://github.com/wxad/adui/commit/246c5aaef417f961fec9b0f091d278f4223a4cc3))
* **compile:** 修复 es 编译的 css require 问题 ([0e3a3f4](https://github.com/wxad/adui/commit/0e3a3f4aa7a4f2f5ef48e8bece5926980cb5f392))
* **DatePicker.RangePicker:** 修复 minDate 比 value 大时的导航区域显示问题 ([d28e7cc](https://github.com/wxad/adui/commit/d28e7cc3f0a2855ca77f4475f1038322119cc433))
* **Form:** 修复 itemClassName 和 context 的冲突 ([aac7859](https://github.com/wxad/adui/commit/aac7859793823b127bccf4a99ec97b6526005a48))
* **Form:** 修复 labelClassName 关系 ([ddf08a8](https://github.com/wxad/adui/commit/ddf08a80cbb2e32e1c337c4bf486de15ec0cd2f4))
* **Table:** 修复虚拟滚动 key warning 问题 ([413ee37](https://github.com/wxad/adui/commit/413ee373541c0226116215e5fbe9ae1e98f76b81))
* **TreeSelect:** 尝试修复 getMaxTagPlaceholder 报错 ([453e3bc](https://github.com/wxad/adui/commit/453e3bcd056a039723a1f14b72f19c3b608fa898))
* **TreeSelect:** 修复 children 用法无选项的问题 ([d58c225](https://github.com/wxad/adui/commit/d58c225c6e4714786fae0500eb65e650b18b9742))
* **TreeSelect:** 修复 resultVisible false 时 placeholder 不更新的问题 ([33d5ef0](https://github.com/wxad/adui/commit/33d5ef0d3af5e5788288391aec58775615df1ec3))
* **TreeSelect:** 修复全选数据处理问题 ([7bd767e](https://github.com/wxad/adui/commit/7bd767eebd3c477f5140c262209a0ccf70d59e52))

## [2.0.0](https://github.com/wxad/adui/compare/v1.6.0...v2.0.0) (2021-05-20)


### Features

* **channels-input:** init ([89fe673](https://github.com/wxad/adui/commit/89fe67302c0a391e90407105ba591acc07ddc3be))
* **Dialog, Drawer, Tooltip, Popover:** 支持 zIndex Prop ([f85132d](https://github.com/wxad/adui/commit/f85132d0c1f7566094ff82a006db8db9353fc530))
* **Select:** 支持 searchValue onSearch 的 prop ([7780ba9](https://github.com/wxad/adui/commit/7780ba9e6ce377e803d7a01e4897eb605706f6a2))
* **Select:** placeholderColor prop ([3f23602](https://github.com/wxad/adui/commit/3f23602c6659d4fc124ee267188415eb5ef6143e))
* **TimePicker:** 支持 24:00 选择 ([9a18d90](https://github.com/wxad/adui/commit/9a18d9070427a6b4a33b45952909de0e9c1f73a0))
* **Transition:** init ([ccb5d6c](https://github.com/wxad/adui/commit/ccb5d6ce05103a306cda96a562a16c4792cae1f4))
* **TreeSelect:** 尝试支持 topContent props ([02350d4](https://github.com/wxad/adui/commit/02350d4f6cca8b8a6ee01a40a70192de559553c2))
* **TreeSelect:** 支持 heightFixed Prop ([6a36375](https://github.com/wxad/adui/commit/6a3637540d5ea3f76d2bc8e8ba6022b0d189c1fb))
* **TreeSelect:** 支持全选 ([43d954b](https://github.com/wxad/adui/commit/43d954ba94e82a1b2085053aabfb154f23049f71))


### Bug Fixes

* **Alert:** 修复 icon null 类型错误 ([54ae4e7](https://github.com/wxad/adui/commit/54ae4e77c22676a59d4f7a882bdd4ff7fdb54918))
* **DatePicker:** 尝试修复可能的 toLocaleDateString 报错 ([49e8ac4](https://github.com/wxad/adui/commit/49e8ac47ab359e93c2c753527b1ea9342fdf8f63))
* **DatePicker:** maxDate minDate 支持 Null ([dd7b8c0](https://github.com/wxad/adui/commit/dd7b8c08cc8c2e2d8f7f3f93f55bb75e94c4f7c8))
* **loader:** 修复 Alert 没有传 intent 时的报错 ([6e52bd9](https://github.com/wxad/adui/commit/6e52bd91101c5f3f50e6ce4846f94ede9c602fbc))
* **Radio, Checkbox, Switch:** 修复 string 类型会造成的死循环 ([da8ac70](https://github.com/wxad/adui/commit/da8ac70378493731f5fe922122c73396747cf722))
* **Select:** 修复 options label 不显示在结果区的错误 ([885a7b5](https://github.com/wxad/adui/commit/885a7b51b0cf9e02c5f1bdd94e5f7caebb00d87b))
* **Select:** 修复问题 ([0c56cc0](https://github.com/wxad/adui/commit/0c56cc07842939d705fd077ee0f6b9f49f37952d))
* **Table:** 支持 select 和 expand 同时使用 ([ce5968a](https://github.com/wxad/adui/commit/ce5968a28dc7d20e9e8393dd711e50b08389dced))
* **Table:** 支持展开行+固定列的情景 ([645ba01](https://github.com/wxad/adui/commit/645ba01280a4ebb65073a43a40fd528af9497b86))
* **Transition:** width, height 加入单位 ([79bd2c7](https://github.com/wxad/adui/commit/79bd2c765014ba36c30e6cabe52119ab003471be))
* **TreeSelect:** 防止 topContent 点击时 dropdown 会消失的问题 ([4647f8e](https://github.com/wxad/adui/commit/4647f8eecd5e47aed7b33b511929b15c6790da7a))

## [1.6.0](https://github.com/wxad/adui/compare/v1.5.3...v1.6.0) (2021-03-17)


### Features

* channels ([ab708a2](https://github.com/wxad/adui/commit/ab708a2ef72f058a680663eac41418162a3a2895))


### Bug Fixes

* **Icon:** 修复过多的计算耗时 ([180f5f7](https://github.com/wxad/adui/commit/180f5f7f676386f226239ed6ccc4e616bc100ef1))

### [1.5.2](https://github.com/wxad/adui/compare/v1.5.1...v1.5.2) (2021-03-03)

### Bug Fixes

* **TreeSelect:** 修复 jacky 发现的搜索值和 TreeNode 不对应的问题 ([755a29d](https://github.com/wxad/adui/commit/755a29df01219e49d0e93fef1c38731a5ba8596a))

### [1.5.1](https://github.com/wxad/adui/compare/v1.5.0...v1.5.1) (2021-03-02)

## [1.5.0](https://github.com/wxad/adui/compare/v1.4.0...v1.5.0) (2021-02-23)


### Features

* **TreeSelect:** onChange 增加第二个参数 titleList ([548e0e3](https://github.com/wxad/adui/commit/548e0e3a8f81a5fa7525bc00c60eb4d46378cc37))

## [1.4.0](https://github.com/wxad/adui/compare/v1.2.3...v1.4.0) (2021-01-26)


### Features

* **Table:** 排序首选降序 ([9938c11](https://github.com/wxad/adui/commit/9938c1107a1e04d3a24bacb7775e2b06072e03a8))
* **TreeSelect:** update ([e02f463](https://github.com/wxad/adui/commit/e02f463b9e1a6780e60f6057932e01b03f028123))


### Bug Fixes

* **Input:** 修复 ref undefined 问题 ([e7aa7d7](https://github.com/wxad/adui/commit/e7aa7d75a58509614849a6ab10497d59f4f7be56))
* **ResizeObserver:** interface ([9f9e713](https://github.com/wxad/adui/commit/9f9e7132f879a986bf4088e6d28e2964b5efa90d))
* **Slider:** 兼容传入 string 的情况 ([de54fdc](https://github.com/wxad/adui/commit/de54fdcf3a87a29059275b5973dee4ad5d072958))

## [1.3.0](https://github.com/wxad/adui/compare/v1.2.3...v1.3.0) (2021-01-19)


### Features

* **TreeSelect:** update ([e02f463](https://github.com/wxad/adui/commit/e02f463b9e1a6780e60f6057932e01b03f028123))


### Bug Fixes

* **ResizeObserver:** interface ([9f9e713](https://github.com/wxad/adui/commit/9f9e7132f879a986bf4088e6d28e2964b5efa90d))
* **Slider:** 兼容传入 string 的情况 ([de54fdc](https://github.com/wxad/adui/commit/de54fdcf3a87a29059275b5973dee4ad5d072958))

### [1.2.3](https://github.com/wxad/adui/compare/v1.2.2...v1.2.3) (2020-12-24)


### Bug Fixes

* **Select:** 修复  searchable + 空 options 时的报错 ([17bc6f8](https://github.com/wxad/adui/commit/17bc6f87cfd51bea789cce07d2635b6b1647767d))

### [1.2.2](https://github.com/wxad/adui/compare/v1.2.1...v1.2.2) (2020-12-21)


### Bug Fixes

* **DatePicker:** 默认最大年份 + 1 ([aa5741e](https://github.com/wxad/adui/commit/aa5741eadee6833288d70ecef22a7cabe3d43425))

### [1.2.1](https://github.com/wxad/adui/compare/v1.2.0...v1.2.1) (2020-12-09)


### Bug Fixes

* **Switch:** 修复对 onClick 事件的覆盖 ([0dccf21](https://github.com/wxad/adui/commit/0dccf21aba4c6f6e12b9b2ffd4f6052a2299c1ce))

## [1.2.0](https://github.com/wxad/adui/compare/v1.1.2...v1.2.0) (2020-12-02)


### Features

* **Icon:** update icon ([e04cc54](https://github.com/wxad/adui/commit/e04cc54f971700cfce759de31a3646639934bf5d))

### [1.1.2](https://github.com/wxad/adui/compare/v1.1.1...v1.1.2) (2020-12-02)


### Bug Fixes

* **Table:** 修复合并单元格问题 ([e330ff5](https://github.com/wxad/adui/commit/e330ff5008f1fa70ab555d49e4cee243ccbaffc6))

### 1.1.1 (2020-12-01)

## [1.1.0](http://git.code.oa.com/yijiejiang/adUI/compare/v1.0.5...v1.1.0) (2020-11-12)


### Features

* **Icon:** update ([d1e8510](http://git.code.oa.com/yijiejiang/adUI/commit/d1e8510638f6d5d4579a0d247f45645815054f23))

### [1.0.5](https://git.code.oa.com/yijiejiang/adUI/compare/v1.0.4...v1.0.5) (2020-11-03)


### Bug Fixes

* **Table:** ts ([c7919a9](https://git.code.oa.com/yijiejiang/adUI/commit/c7919a98fcce6aece8707ead6619d3041511819e))

### [1.0.4](https://git.code.oa.com/yijiejiang/adUI/compare/v1.0.3...v1.0.4) (2020-11-03)


### Bug Fixes

* **Table:** 虚拟滚动修复 ([8a73686](https://git.code.oa.com/yijiejiang/adUI/commit/8a73686a01c8b0355e6d86f2f0422910e9fa90d8))

### [1.0.3](http://git.code.oa.com/yijiejiang/adUI/compare/v1.0.1...v1.0.3) (2020-11-03)

### [1.0.2](http://git.code.oa.com/yijiejiang/adUI/compare/v1.0.1...v1.0.2) (2020-10-15)

### [1.0.1](http://git.code.oa.com/yijiejiang/adUI/compare/v1.0.0...v1.0.1) (2020-10-12)


### Bug Fixes

* **Drawer:** 防止 unmount 时的 body 样式错误 ([dc40ee9](http://git.code.oa.com/yijiejiang/adUI/commit/dc40ee999164d7e357a9210ce375865ea596b28b))

## [1.0.0](http://git.code.oa.com/yijiejiang/adUI/compare/v0.11.2...v1.0.0) (2020-10-10)


### Features

* **Checkbox, Radio, Form:** 增加 helperIcon props ([457aa67](http://git.code.oa.com/yijiejiang/adUI/commit/457aa67877cf2ed025f1e60a3ab3c19d03f73ee7))
* **ColorPicker:** transparentEnabled prop ([0f7257e](http://git.code.oa.com/yijiejiang/adUI/commit/0f7257edb339158dc9913612c27fa4af9f09b79e))
* **ConfigConsumer:** init ([1f8379f](http://git.code.oa.com/yijiejiang/adUI/commit/1f8379f743f9f96eecd8d7b814ccd7ba91828837))
* **Dialog:** currentStep, defaultCurrentStep prop ([d3725f6](http://git.code.oa.com/yijiejiang/adUI/commit/d3725f6f24276ab437a55db274079ea0d3556ca2))
* **Drawer:** init ([55e5462](http://git.code.oa.com/yijiejiang/adUI/commit/55e54629198e31ced5933b3556f6cbdd63c4b84c))
* **Form.Item:** labelHelperProps prop ([fddeeba](http://git.code.oa.com/yijiejiang/adUI/commit/fddeeba3af37104c8d7724dd43c4c85f24e34cee))
* **Icon:** icon 改用 adui-icon 独立库，为了保证 submodules 的使用，构建时将会从 node_modules 下将需要的文件拷贝出来。 ([ecbec25](http://git.code.oa.com/yijiejiang/adUI/commit/ecbec253c5dd33fcf76cada9570c498f4987b14c))
* **Icon:** radar-outlined ([11390c3](http://git.code.oa.com/yijiejiang/adUI/commit/11390c37eca56e8c41915ac6614ccc9080664c63))
* **Input:** contentJustify Prop ([fa1a10f](http://git.code.oa.com/yijiejiang/adUI/commit/fa1a10f00069aca75c0a26c84027634a1d6541fc))
* **Input:** forwardRef 加入 focus blur ([0069c0d](http://git.code.oa.com/yijiejiang/adUI/commit/0069c0d597d24fddbb65df75443fc0c852dfc298))
* **Input:** input 添加默认 autoComplete off ([52b319a](http://git.code.oa.com/yijiejiang/adUI/commit/52b319ad9b8442c7a67bde201580b7da2bd42bce))
* **Menu:** Item SubMenu 支持 disabled ([248e5e5](http://git.code.oa.com/yijiejiang/adUI/commit/248e5e5dd9d03dfb891024a6a1425b388878209f))
* **Message:** 支持传入字符串 ([888d10e](http://git.code.oa.com/yijiejiang/adUI/commit/888d10e1b288fab337f32bb4a92e5b668217048c))
* **Portal:** init ([c40e2dd](http://git.code.oa.com/yijiejiang/adUI/commit/c40e2dd984c19e47af5840e891959d906193cc8e))
* **ResizeObserver:** init ([5b473c3](http://git.code.oa.com/yijiejiang/adUI/commit/5b473c348b29bd823a0e8fbf5de1d48bcf6ef420))
* **Select:** virtualScroll ([cb9dba3](http://git.code.oa.com/yijiejiang/adUI/commit/cb9dba3353ba1d365309a3a50280ed8f4c5fdf8a))
* **Select, TreeSelect, Suggest:** 支持 config provider ([f46d05c](http://git.code.oa.com/yijiejiang/adUI/commit/f46d05c8d20d8899a3ebe05d22d91aaa889aea35))
* **Suggest:** styles ([7244d24](http://git.code.oa.com/yijiejiang/adUI/commit/7244d24d4671ce5a752f43ae166a499349acdcf1))
* **Table:** filter 支持更多 props ([5623f91](http://git.code.oa.com/yijiejiang/adUI/commit/5623f9199226cbfd30f99cb9b5ddac7d3b2636b9))
* **Table:** onScroll Prop ([41fb475](http://git.code.oa.com/yijiejiang/adUI/commit/41fb475b2d5c04412fe72c1ccae63e779be2566b))
* **Table:** sticky init ([7c4ebba](http://git.code.oa.com/yijiejiang/adUI/commit/7c4ebba336862e4a2e18ce3a3b8832c9e27c13f7))
* **Table:** virtualScroll ([aa5bb50](http://git.code.oa.com/yijiejiang/adUI/commit/aa5bb505810d6670e39d9e3d184043921021482b))
* **Tag:** theme prop ([75d847f](http://git.code.oa.com/yijiejiang/adUI/commit/75d847fa82004fec8381b395a17676b44fca9df2))
* **TimePicker:** disabledMinutes ([bb93b11](http://git.code.oa.com/yijiejiang/adUI/commit/bb93b119955dec9626c22b9d37b072108d4d1642))
* **TimePicker:** popoverProps ([a86a489](http://git.code.oa.com/yijiejiang/adUI/commit/a86a489d48228944a8d30561cd612dc4f383cd30))
* **TreeSelect:** chore ([92c7fc8](http://git.code.oa.com/yijiejiang/adUI/commit/92c7fc8e5160dc0965b5406be9a77db6ade8bd28))
* **TreeSelect:** feats ([7e44fee](http://git.code.oa.com/yijiejiang/adUI/commit/7e44feea947f6dc6fecca5a407fdcdebe9e0cea1))
* **TreeSelect:** feats ([c386a5a](http://git.code.oa.com/yijiejiang/adUI/commit/c386a5a06fdb38bbdcdfad567624c091eb26aefd))
* **TreeSelect:** resultRender Props，支持自定义结果区域 ([431c991](http://git.code.oa.com/yijiejiang/adUI/commit/431c991566468bac5ad31688bf2df749ef384135))
* **Upload:** Upload.File ([8fe9363](http://git.code.oa.com/yijiejiang/adUI/commit/8fe936346daeca2c61d9f9546b244a9803eb024f))


### Bug Fixes

* **Affix:** 修复 offsetBottom 的问题 ([e80ab84](http://git.code.oa.com/yijiejiang/adUI/commit/e80ab84185a96d8cb5456e36df7258b3edbb30d1))
* **Checkbox:** 修改 onChange 和 value 类型关联 T ([2dbf2e3](http://git.code.oa.com/yijiejiang/adUI/commit/2dbf2e3746f26119cf4a889651aeed7b85e31a63))
* **Checkbox, Radio:** a11ys ([786a0ce](http://git.code.oa.com/yijiejiang/adUI/commit/786a0cea6f7b26f4a0b34033ac94c825b666886f))
* **ColorPicker:** 修复 s 可能为 NaN 的问题 ([e9a5907](http://git.code.oa.com/yijiejiang/adUI/commit/e9a59075a1a5e4459cf19c864c89e21cc731ce54))
* **ColorPicker:** 修复 transparent 和 hsb 调色板问题 ([76e5d61](http://git.code.oa.com/yijiejiang/adUI/commit/76e5d61ac81140532eae3a2f1c3575a6474efc2c))
* **DatePicker:** 修复 maxDate minDate ([198e625](http://git.code.oa.com/yijiejiang/adUI/commit/198e625c5c9780b9ac3881b695f714c9ad68120d))
* **Dialog:** 滚动条时机修复 ([1d15936](http://git.code.oa.com/yijiejiang/adUI/commit/1d1593647c9632c544f04d0c65bd550e7ca55582))
* **Drawer:** 修复样式问题 ([1e60754](http://git.code.oa.com/yijiejiang/adUI/commit/1e60754d8f828dafe48d73e396bb12b8249d7a5a))
* **icon:** fix ([33cc1a9](http://git.code.oa.com/yijiejiang/adUI/commit/33cc1a99216ddea570e4b1729b0dedc7930d49cb))
* **Icon:** 修复 icon 在非 interactive 时的多余样式和类名 ([2b35fe0](http://git.code.oa.com/yijiejiang/adUI/commit/2b35fe0573b1287bd3449486adde8183f7e6b2cb))
* **Icon:** fix ([614dc3c](http://git.code.oa.com/yijiejiang/adUI/commit/614dc3c3daa6da268965d4dd1bd4b0d78f19d1ea))
* **Input:** 修复 text-align 没有继承的问题 ([cd326ea](http://git.code.oa.com/yijiejiang/adUI/commit/cd326ea77814ee3dad8846a98daab67b0b14556c))
* **Input:** 修复错误，补充 focused 测试 ([f7134e6](http://git.code.oa.com/yijiejiang/adUI/commit/f7134e605e8844b3d8877b9e504e2ea60773029c))
* **Radio:** 修改 onChange 和 value 类型关联 T ([a320835](http://git.code.oa.com/yijiejiang/adUI/commit/a3208359417aa957f841fc793b05a5b5a1a5018c))
* **RangePicker:** 修复禁用态 ([3a0d0ab](http://git.code.oa.com/yijiejiang/adUI/commit/3a0d0ab80d4a9d9094de07c8b57c87320a014e45))
* **Sass:** dart 语法 不支持 $type#{-light-color}，debug 时发现有空格，wtf 哪来的空格？！正确：#{$type}#{-light-text-hover}) ([42951da](http://git.code.oa.com/yijiejiang/adUI/commit/42951da4243ec7bed4e35cf6ae1301fe90ba5492))
* **select:** 兼容新版 virtual-list ([4e486a2](http://git.code.oa.com/yijiejiang/adUI/commit/4e486a2d063e5f897d76c961a0f58b5a687f7718))
* **Select:** 升级 rc-select ([16a98f7](http://git.code.oa.com/yijiejiang/adUI/commit/16a98f733cfde80f895dc1414873632c5c763075))
* **Select:** 修复 placeholder ([253979d](http://git.code.oa.com/yijiejiang/adUI/commit/253979dd7d8c38a6ae67c94756def592f5887439))
* **Select:** 修复三角样式、修复 Select 外部控制无法清空的问题，现在传入 value="" 可清空 ([05282db](http://git.code.oa.com/yijiejiang/adUI/commit/05282db79bdaf66d33d7b8f497eca60761611a63))
* **Select:** 支持 "" 完全受外部控制 ([e88314a](http://git.code.oa.com/yijiejiang/adUI/commit/e88314a011c45c3d4c1fb27d4cc7e05c58074aec))
* **Select:** onSelect 在 valueProp 与 value 不相等时触发 ([a08d04a](http://git.code.oa.com/yijiejiang/adUI/commit/a08d04a65293a09edceaffb4e7435cd4a8835105))
* **Select:** style ([03aba60](http://git.code.oa.com/yijiejiang/adUI/commit/03aba60998f63e5d81e1499e56ecd7cc2534b783))
* **Suggest:** chores ([9ee0ea5](http://git.code.oa.com/yijiejiang/adUI/commit/9ee0ea5b392abfed6eb81b20f8b9ced4853af05f))
* **Tab:** 修复潜在问题 ([ea00526](http://git.code.oa.com/yijiejiang/adUI/commit/ea005267db77c6294ed9044068328139d15f4ee4))
* **Tab:** 修复潜在问题 ([f93a127](http://git.code.oa.com/yijiejiang/adUI/commit/f93a127a519981cf213a83455548cdb4902cd3e1))
* **Table:** 计算宽度的方法调整为 offsetWidth，因为 getBoundingClientRect 可能会有小数 ([9d33208](http://git.code.oa.com/yijiejiang/adUI/commit/9d332081dd41609949dc4166e857cc2d24b0c192))
* **Table:** 修复 height 内滚动时， th 错位的问题 ([36fb9c3](http://git.code.oa.com/yijiejiang/adUI/commit/36fb9c33b8ccee1612bba219753ce461c805b742))
* **Table:** 修复 height 内滚动时， th 错位的问题。 ([6bc4b89](http://git.code.oa.com/yijiejiang/adUI/commit/6bc4b8986ed82138a54b7a126c6b39e0f4f1a553))
* **Table:** 修复固定列一开始没有 shadow 的问题 ([feca3e3](http://git.code.oa.com/yijiejiang/adUI/commit/feca3e33c34c6c2fea7eb961b434d8a5e88b5c28))
* **Table:** 右固定列 + sticky ([ce183a5](http://git.code.oa.com/yijiejiang/adUI/commit/ce183a5c740ec4c91bbf493e5b1f6feaa23b85d9))
* **Table:** thead 增加 100% 宽度，这是为了让 affix 状态下宽度依然能够撑满 ([68d3b0b](http://git.code.oa.com/yijiejiang/adUI/commit/68d3b0b2c1f86c1160f92cdd54c0018c1ecadaac))
* **Tabs:** 修复 children 动态改变时，indicator 位置的问题，对比的方式是 prevChildren !== children，因此不支持深对比 ([b882d4d](http://git.code.oa.com/yijiejiang/adUI/commit/b882d4daf598f2c0ec072dd880c3558af9ac5a38))
* **Textarea:** 不应禁止换行符 ([daa098f](http://git.code.oa.com/yijiejiang/adUI/commit/daa098ff9f673f20e32f2dd19c5b4353458afeb0))
* **Textarea:** 不应禁止换行符 ([d95a765](http://git.code.oa.com/yijiejiang/adUI/commit/d95a7653cf96981e587e53649402720c473de9ce))
* **TimePicker:** 修复 disabled ([bb4d5b9](http://git.code.oa.com/yijiejiang/adUI/commit/bb4d5b94ac68ae112816cfe3ebab2285fd7a3d3e))
* **TreeSelect:** 节点 Loading 时的样式 ([bf8a2c8](http://git.code.oa.com/yijiejiang/adUI/commit/bf8a2c814fb7319d1adaed08dd91d6d6a43b79ed))
* **TreeSelect:** 修复 popover 内容无法搜索 ([bc2936e](http://git.code.oa.com/yijiejiang/adUI/commit/bc2936e15a9c94e8bcc6bfbd380b3fdbc9032e4b))
* **TreeSelect:** resultVisible false 时定位问题 ([e3fb74f](http://git.code.oa.com/yijiejiang/adUI/commit/e3fb74facbfcb9300690432d1246a7b5d839e973))

## [1.0.0-alpha](http://git.code.oa.com/yijiejiang/adUI/compare/v0.11.2...v1.0.0) (2020-03-25)

### 组件类型
一部分组件以 `Function Component` + `Hooks` 重新实现。现在，组件一共有类组件（`Class Component`），函数组件（`Function Component`），以及也属于函数组件的`ForwardRef Component`这三种（每个组件的文档标题旁标示着它的类型）。

### 优化
- **Select/TreeSelect**：使用`rc-select` 与 `rc-tree-select` 的新版本封装，使用虚拟滚动支持大数据加载；
- **Table**：将左右固定表格去除，以`position: sticky` 重写固定列的实现，过去同步每个表格的高度、`hover` 态、滚动距离，需要对`scroll` `mouse` 事件监听，因此会产生极多的 render，现在不会了；
- **Dialog**：使用 `Portal` 替代 `ReactDOM.unstable_renderSubtreeIntoContainer`，现在 Dialog 将会保持在组件层级中，如果渲染内容包括依赖 connect 的组件，（应该）不再需要手动包一层 Provider；


### 新增
- **Affix**：固钉，将页面元素钉在可视范围，[查看文档](http://wxad.design/adui/components/affix)；
- **Upload.Img**：图片上传，文件上传的展示容器，[查看文档](http://wxad.design/adui/components/upload)；
- **Motion**：React 动效实现，基于`TransitionGroup`，[查看文档](http://wxad.design/adui/components/motion)；
- **ResizeObserver**：尺寸监听， 基于 [ResizeObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver) 封装，提供了声明式的实现，[查看文档](http://wxad.design/adui/components/resize-observer)；
- **Portal**：节点渲染，将子节点从组件层级（component hierarchy）中分离，基于 `ReactDOM.createPortal`，[查看文档](http://wxad.design/adui/components/portal)；
- **ConfigProvider**：在组件层外层包裹一次，完成所有组件的配置，基于 React 的 [context](https://zh-hans.reactjs.org/docs/context.html) 特性，[查看文档](http://wxad.design/adui/components/config-provider)。

### TypeScript
- **Radio.Group/Checkbox.Group**：`onChange` 的参数类型将会与 `value` 类型一致，而不再是 `React.ReactText`；
- **组件文档**：Props 表格中的“类型”一栏，现在读取的是 TypeScript 类型定义。


## [0.11.2](http://git.code.oa.com/yijiejiang/adUI/compare/v0.11.0...v0.11.2) (2019-11-19)


### Bug Fixes

* **commitlint:** add commitlint dependencies ([fc6870d](http://git.code.oa.com/yijiejiang/adUI/commit/fc6870d))
* **commitlint:** add commitlint dependencies ([a83aa76](http://git.code.oa.com/yijiejiang/adUI/commit/a83aa76))
* **ts:** TS2698: Spread types may only be created from object types. ([8a8acbc](http://git.code.oa.com/yijiejiang/adUI/commit/8a8acbc))
* **typescript:** indicate main declaration in package.json ([700df6a](http://git.code.oa.com/yijiejiang/adUI/commit/700df6a))



## [0.11.0](http://git.code.oa.com/yijiejiang/adUI/compare/v0.10.2...v0.11.0) (2019-11-19)


### Bug Fixes

* **Table:** 修复 Table state ([30ac888](http://git.code.oa.com/yijiejiang/adUI/commit/30ac888))
* **TreeSelect:** 使用双等号判断 value，rc-tree-select 实际不允许 number 类型的 value 值，但是实际上经常会这样使用 ([50a8a94](http://git.code.oa.com/yijiejiang/adUI/commit/50a8a94))
* **TreeSelect:** 修复 title 为 react element 后显示为 [object object] 的问题 ([32484c0](http://git.code.oa.com/yijiejiang/adUI/commit/32484c0))


### Features

* **Input, Input.Textarea:** required prop ([fd0c96c](http://git.code.oa.com/yijiejiang/adUI/commit/fd0c96c))
* **Table:** getHeadStyle + getHeadClassName prop ([1ca2bd8](http://git.code.oa.com/yijiejiang/adUI/commit/1ca2bd8))



### [0.10.2](http://git.code.oa.com/yijiejiang/adUI/compare/v0.10.1...v0.10.2) (2019-10-31)


### Bug Fixes

* **Select:** [#31](http://git.code.oa.com/yijiejiang/adUI/issues/31) ([9a775fc](http://git.code.oa.com/yijiejiang/adUI/commit/9a775fc))
* **Table:** 修复在 sortOrder 为 undefined 时，仍然会显示排序 icon ([8e3fdcd](http://git.code.oa.com/yijiejiang/adUI/commit/8e3fdcd))



### [0.10.1](http://git.code.oa.com/yijiejiang/adUI/compare/v0.10.0...v0.10.1) (2019-10-29)


### Bug Fixes

* **Input.Textarea:** onScroll 事件应挂载到 Textarea 上 ([db4130d](http://git.code.oa.com/yijiejiang/adUI/commit/db4130d))
* **Table:** 修复 left 和 rightTable 最后一列会有双重下边框的问题；修复 ts type ([92aae47](http://git.code.oa.com/yijiejiang/adUI/commit/92aae47))



## [0.10.0](http://git.code.oa.com/yijiejiang/adUI/compare/v0.9.1...v0.10.0) (2019-10-17)