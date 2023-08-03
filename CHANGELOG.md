# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.44.8](https://github.com/wxad/adui/compare/v2.44.7...v2.44.8) (2023-08-03)

### [2.44.7](https://github.com/wxad/adui/compare/v2.44.6...v2.44.7) (2023-08-03)

### [2.44.6](https://github.com/wxad/adui/compare/v2.44.5...v2.44.6) (2023-06-28)


### Bug Fixes

* **DatePicker, RangePicker:** 修复 click 事件覆盖 ([e8a1d8f](https://github.com/wxad/adui/commit/e8a1d8f7f40dc82eb7cd9f063ce4bb4d9d97b14a))

### [2.44.5](https://github.com/wxad/adui/compare/v2.44.4...v2.44.5) (2023-06-28)


### Bug Fixes

* **DatePicker, RangePicker:** [#38](https://github.com/wxad/adui/issues/38) ([b578940](https://github.com/wxad/adui/commit/b57894084b7ff05720cf19f165b9efea5a22ec23))
* **DatePicker:** 尝试修复 DatePicker visible 问题 ([7ce6634](https://github.com/wxad/adui/commit/7ce66346727c3710fbcef38db77a4567c95860ee))

### [2.44.4](https://github.com/wxad/adui/compare/v2.44.3...v2.44.4) (2023-06-16)


### Bug Fixes

* **Table:** 修复 Chrome 新版支持 popover 原生 Prop 造成的 Bug ([5d80116](https://github.com/wxad/adui/commit/5d801162716f5a0f8f215b9f08e8e9792fc466be))

### [2.44.3](https://github.com/wxad/adui/compare/v2.44.2...v2.44.3) (2023-06-02)


### Bug Fixes

* **Input:** 修正Input在NumbericInput中使用时光标位置不稳定的问题 ([95671c3](https://github.com/wxad/adui/commit/95671c3eac59506d500894a9ff6e3741a5d6701f))

### [2.44.2](https://github.com/wxad/adui/compare/v2.44.1...v2.44.2) (2023-04-06)


### Bug Fixes

* **DatePicker:** 修复 disabledDays 无效，在样式放弃 cursor 先 ([4fe0226](https://github.com/wxad/adui/commit/4fe022683065732f0338ff37bb96a8eb1ccb527a))

### [2.44.1](https://github.com/wxad/adui/compare/v2.44.0...v2.44.1) (2023-03-29)


### Bug Fixes

* **TreeSelect:** 修复 inline-block 内部高度 34px，外层 30px 的问题 ([f69066c](https://github.com/wxad/adui/commit/f69066c66195237c5863e27316cf6dbc0f5ee0a3))

## [2.44.0](https://github.com/wxad/adui/compare/v2.43.2...v2.44.0) (2022-12-19)


### Features

* **TimePicker:** 支持秒的选择 ([2d4efa5](https://github.com/wxad/adui/commit/2d4efa59bf230bcf1c22caf7bb6c2bb09e534cf5))

### [2.43.2](https://github.com/wxad/adui/compare/v2.43.1...v2.43.2) (2022-11-23)


### Bug Fixes

* **TimePicker:** 修复 intent 失效 ([2473743](https://github.com/wxad/adui/commit/24737432aa774a05e0ff9655b9cee6af04cbd1ac))

### [2.43.1](https://github.com/wxad/adui/compare/v2.43.0...v2.43.1) (2022-11-22)


### Bug Fixes

* **Drawer:** 补充 maskMotionName getMotionName ([020524e](https://github.com/wxad/adui/commit/020524ee857601ebc50a4ae6543f083b9adabc63))

## [2.43.0](https://github.com/wxad/adui/compare/v2.42.1...v2.43.0) (2022-11-22)


### Features

* **Dialog:** 支持 motionName 定义 ([a8c1a1b](https://github.com/wxad/adui/commit/a8c1a1b28dee9d24af67f9bf4ba21e4dd8c6d8f7))

### [2.42.1](https://github.com/wxad/adui/compare/v2.42.0...v2.42.1) (2022-09-13)


### Bug Fixes

* **rollup:** 修复 portal 在 vite 下打包错误 ([de81288](https://github.com/wxad/adui/commit/de812885cdd0ae0cf525d0c6e5311ac5acdef462))

## [2.42.0](https://github.com/wxad/adui/compare/v2.41.0...v2.42.0) (2022-09-06)


### Features

* **Select:** 增加 topContent / bottomContent Prop ([28e6544](https://github.com/wxad/adui/commit/28e654499f636a0d74abdb5739b4e22aef66effd))
* **TreeSelect:** 以 topContent 相同的实现增加 bottomContent Prop ([5542a02](https://github.com/wxad/adui/commit/5542a02b0906d3984578da5611d1fdcee4338ef6))

## [2.41.0](https://github.com/wxad/adui/compare/v2.40.4...v2.41.0) (2022-08-30)


### Features

* **DatePicker, RangePicker:** allowClear Prop ([11a0217](https://github.com/wxad/adui/commit/11a02176a896c27382e7c1c8ea786812d2e4abb0))


### Bug Fixes

* **Input:** 修复 Safari disabled 文字颜色问题 ([8a815a3](https://github.com/wxad/adui/commit/8a815a3d9ee24949c440eb2b10ae6d80fa20eea3))

### [2.40.4](https://github.com/wxad/adui/compare/v2.40.3...v2.40.4) (2022-08-23)


### Bug Fixes

* **Table:** 1. 修复表头不可选中的问题，去除了 user-select; 2. 空状态下表头无法滚动，这里因结构问题 placeholder 是写在 table 外的，移到 table 内后，又可能因为 table 的横向滚动造成问题，因此加入了 sticky ([3f81ca6](https://github.com/wxad/adui/commit/3f81ca641488c5a690141ba5bf208afb6ad7bd16))

### [2.40.3](https://github.com/wxad/adui/compare/v2.40.2...v2.40.3) (2022-08-19)


### Bug Fixes

* **DatePicker:** disabledDays cursor style ([9512e14](https://github.com/wxad/adui/commit/9512e147922af4c103c1362269fbdc216c6a1cc3))

### [2.40.2](https://github.com/wxad/adui/compare/v2.40.1...v2.40.2) (2022-08-18)


### Bug Fixes

* 回退 loader-utils 版本 ([fc17cbd](https://github.com/wxad/adui/commit/fc17cbd18d53730acd6ee8ffbb4a59cf368b342c))

### [2.40.1](https://github.com/wxad/adui/compare/v2.40.0...v2.40.1) (2022-08-16)


### Bug Fixes

* **ChannelsDialog:** 修复 onleave 生命周期问题，props 对齐 dialog ([601af75](https://github.com/wxad/adui/commit/601af754dc7c3480d5fdbd62103f5662017c9c91))
* **Table:** [#32](https://github.com/wxad/adui/issues/32) ([7e343f4](https://github.com/wxad/adui/commit/7e343f4efb88907db4957688dfde0f6f3a0eb876))

## [2.40.0](https://github.com/wxad/adui/compare/v2.39.1...v2.40.0) (2022-08-12)


### Features

* **Select:** composition Props & searchInputProps ([9bf1d16](https://github.com/wxad/adui/commit/9bf1d16e62da17bd05bb8d5a53df540aaa47dbf9))

### [2.39.1](https://github.com/wxad/adui/compare/v2.39.0...v2.39.1) (2022-08-08)


### Bug Fixes

* **adui-icon-loader:** 根据 loaderUtils@3 的 api 修复 ([09807e1](https://github.com/wxad/adui/commit/09807e1705c9cf6df5f2ba24fc083ea86195f55d))

## [2.39.0](https://github.com/wxad/adui/compare/v2.38.0...v2.39.0) (2022-07-27)


### Features

* **Icon:** update adui-icon@1.8.30 ([cc6a548](https://github.com/wxad/adui/commit/cc6a548eec40e025c2ee5872c9389c681093128a))

## [2.38.0](https://github.com/wxad/adui/compare/v2.37.4...v2.38.0) (2022-07-26)


### Features

* **Icon:** 更新 adui-icon@1.8.29 ([eac4507](https://github.com/wxad/adui/commit/eac450737745abd12c4abe38cafcc99d47296b21))

### [2.37.4](https://github.com/wxad/adui/compare/v2.37.3...v2.37.4) (2022-07-25)


### Bug Fixes

* **Affix:** [#31](https://github.com/wxad/adui/issues/31) ([11b03c4](https://github.com/wxad/adui/commit/11b03c49c549fe1a4ca887ee375bc74816a8493c))

### [2.37.3](https://github.com/wxad/adui/compare/v2.37.2...v2.37.3) (2022-07-21)


### Bug Fixes

* **Textarea:** 修复 style 和 inputStyle bug ([7a5e178](https://github.com/wxad/adui/commit/7a5e17842ae4bdbc4b1abfb356130b8f06f71d3e))

### [2.37.2](https://github.com/wxad/adui/compare/v2.37.1...v2.37.2) (2022-07-14)


### Bug Fixes

* **Table:** 修复 Column title 为 node 时 resize 失效的问题，给一个 100px 的兜底 ([501ecc5](https://github.com/wxad/adui/commit/501ecc53e27b2bd3ad9e947e2774b32df4d21359))

### [2.37.1](https://github.com/wxad/adui/compare/v2.37.0...v2.37.1) (2022-07-13)


### Bug Fixes

* [#29](https://github.com/wxad/adui/issues/29) ([ce84c3f](https://github.com/wxad/adui/commit/ce84c3fa21580acd6d331d692ae60e3e752a3d81))
* **Table:** [#30](https://github.com/wxad/adui/issues/30) ([af2f4a5](https://github.com/wxad/adui/commit/af2f4a50fbc8abc3fef5264a3716f5a869f993da))

## [2.37.0](https://github.com/wxad/adui/compare/v2.36.3...v2.37.0) (2022-07-12)


### Features

* 支持列同时使用筛选和排序 [#27](https://github.com/wxad/adui/issues/27) ([f04b587](https://github.com/wxad/adui/commit/f04b587bfab381cb92312b6936d83d8d801dbcf8))
* **TableFilter:** 支持搜索筛选 [#28](https://github.com/wxad/adui/issues/28) ([0694db0](https://github.com/wxad/adui/commit/0694db052e100d3617c0359b6eaf2e807bb3a05b))


### Bug Fixes

* **Input:** 修复 left/right element 宽度计算可能为 0 的问题 ([aa4da2d](https://github.com/wxad/adui/commit/aa4da2d945ca3d77853b001989211d1c557b6111))
* **TableFilter:** 修复多选时没有选中态的样式错误 ([958329e](https://github.com/wxad/adui/commit/958329e190b5f6e630d6e116febd39edc82fb366))

### [2.36.3](https://github.com/wxad/adui/compare/v2.36.1...v2.36.3) (2022-06-21)


### Bug Fixes

* **Drawer:** 修复可能的报错 ([b086b1f](https://github.com/wxad/adui/commit/b086b1f4557dfdf3995e222419f52bce0fabe8a2))

### [2.36.1](https://github.com/wxad/adui/compare/v2.36.0...v2.36.1) (2022-06-17)


### Bug Fixes

* **Checkbox, Radio:** [#26](https://github.com/wxad/adui/issues/26) 提示信息帮助 点击后 触发勾选 ([b15073d](https://github.com/wxad/adui/commit/b15073df6c20d270a170db20249b41981c98afae))
* **Select:** 修复空字符串时，出现 clearIcon 的问题 ([cd161bc](https://github.com/wxad/adui/commit/cd161bcff3bd71e52d2c5e566fe9505de1d5a0ec))
* **Textarea:** 修复一些表现问题 ([aa57351](https://github.com/wxad/adui/commit/aa573515f45da2dcb81f15eff4e294aa64e0fbe7))

## [2.36.0](https://github.com/wxad/adui/compare/v2.35.0...v2.36.0) (2022-06-10)


### Features

* **Button.Group:** 拆分 button group 为自有主页 ([d50095e](https://github.com/wxad/adui/commit/d50095ee9392e748ac5f40ac3d320b6e993e2848))
* **Input:** inputClassName, inputStyle Prop ([b09f45c](https://github.com/wxad/adui/commit/b09f45c805f87b14eb28dea3061ed350fea75980))
* **Transition:** 增加一些 Props ([361c488](https://github.com/wxad/adui/commit/361c488e4deb18141c701fc6e90acd47fba0ba31))


### Bug Fixes

* **rollup:** 修复 <Transition /> 的打包 ([8ad19fb](https://github.com/wxad/adui/commit/8ad19fb9ee41c0cb7c24f4438722b2c6a389d298))
* **Transition:** 修复一些表现问题 ([6edbf80](https://github.com/wxad/adui/commit/6edbf8081a7cc0519bcf9dd0f3559c6abc1da735))
* **Transition:** 修复一些表现问题 ([aee3bd0](https://github.com/wxad/adui/commit/aee3bd08613a53a31cf22e084e28842dd1724d43))

## [2.35.0](https://github.com/wxad/adui/compare/v2.34.0...v2.35.0) (2022-06-07)


### Features

* **Table:** onSelectChange 增加第二个参数 options，具体解释请参见文档 ([dca8d63](https://github.com/wxad/adui/commit/dca8d6334c69754f44a9f717fbe6d02147bb8aa3))


### Bug Fixes

* **Select:** 修复搜索时，值为空白的问题；修复 [#23](https://github.com/wxad/adui/issues/23) ([c94754c](https://github.com/wxad/adui/commit/c94754c5e69940ee02e438ea003ad04eb3d3d1a2))
* **Table:** 修复 scrollXAffixedOffsetBottom warning ([5566ec2](https://github.com/wxad/adui/commit/5566ec27230f5623c965d795f09140e094841aca))

## [2.34.0](https://github.com/wxad/adui/compare/v2.33.0...v2.34.0) (2022-05-30)


### Features

* **Button.Group:** 更新 Group 样式 ([b6cb893](https://github.com/wxad/adui/commit/b6cb893aea0c589e5a0da2880212bd2e2388e3d0))

## [2.33.0](https://github.com/wxad/adui/compare/v2.32.2...v2.33.0) (2022-05-26)


### Features

* **Table:** 支持在表头页面固定时，自定义横向滚动条距离底部的触发距离 ([b473620](https://github.com/wxad/adui/commit/b473620df8c2af5886bea734da45eff3e5867bed))

### [2.32.2](https://github.com/wxad/adui/compare/v2.32.1...v2.32.2) (2022-05-23)


### Bug Fixes

* **Checkbox:** 修复 value 为 0 时的错误 ([aa31c25](https://github.com/wxad/adui/commit/aa31c255392ae8313fb01339b2430f2f150f9147))

### [2.32.1](https://github.com/wxad/adui/compare/v2.32.0...v2.32.1) (2022-05-17)


### Bug Fixes

* **TreeSelect:** 回退 rc-tree-select 为 4 版本，以支持 multiple={false} 时 value 可以传一个 reactnode，5 之后不行了 ([f3d30f4](https://github.com/wxad/adui/commit/f3d30f46eadf1f9b0be6247bae54bfebf761a548))

## [2.32.0](https://github.com/wxad/adui/compare/v2.31.0...v2.32.0) (2022-05-12)


### Features

* **Suggest:** onInputKeyDown prop ([98bd57f](https://github.com/wxad/adui/commit/98bd57f7ef5e234a609865f2e2b105d2c38d5213))


### Bug Fixes

* **Table:** 修复表格行未全选时，表头checkbox不是半选中状态的问题 ([be2db78](https://github.com/wxad/adui/commit/be2db784d26aab038af70f90cee006571994b359))

## [2.31.0](https://github.com/wxad/adui/compare/v2.30.3...v2.31.0) (2022-05-11)


### Features

* **Suggest:** 添加 filterOption Prop ([425b640](https://github.com/wxad/adui/commit/425b6400ed60c4646bab045559051b0c5b60a17e))

### [2.30.3](https://github.com/wxad/adui/compare/v2.30.2...v2.30.3) (2022-05-11)


### Bug Fixes

* **Table:** fixed 列可调整列宽 ([9c4a9d1](https://github.com/wxad/adui/commit/9c4a9d1e2f3f6f13bcd0b7a9edca4986e44aeea6))

### [2.30.2](https://github.com/wxad/adui/compare/v2.30.1...v2.30.2) (2022-05-10)


### Bug Fixes

* **TableFilter:** 修复 [] 空数组的显示错误 ([65d0b4e](https://github.com/wxad/adui/commit/65d0b4ecf65d57fae57ad820972a5e3c0d0f470a))
* **TreeSelect:** 修复 maxTagCount 在 disabled 情况下的报错 ([9671689](https://github.com/wxad/adui/commit/9671689fde992923c5132542b1f767e02d7e8b45))

## [2.30.0](https://github.com/wxad/adui/compare/v2.29.3...v2.30.0) (2022-05-07)


### Features

* **Dialog:** 函数式调用 onConfirm onCancel 添加 return false 不关闭功能 ([b741431](https://github.com/wxad/adui/commit/b741431e2816cf34e5401837157070574ecb8cc3))
* **Icon:** 添加 link icon ([d23ce7c](https://github.com/wxad/adui/commit/d23ce7c88ea629fcab4e0c9084febfc2b8696ef2))

### [2.29.3](https://github.com/wxad/adui/compare/v2.29.2...v2.29.3) (2022-05-06)


### Bug Fixes

* **Affix:** 修复有 getTarget Prop 时的显示错误 ([b68c49a](https://github.com/wxad/adui/commit/b68c49a794a391d5ae2adb2519a31719200d486d))
* **Table:** 修复在 headerAffixGetTarget 时，滚动条及头部的显示问题 ([916572e](https://github.com/wxad/adui/commit/916572e5a4d29661bc932fccd66107dde1855801))

### [2.29.2](https://github.com/wxad/adui/compare/v2.29.1...v2.29.2) (2022-04-27)


### Bug Fixes

* **Dialog:** 修复 dialog getContainer 无效的问题 ([aa8ea33](https://github.com/wxad/adui/commit/aa8ea33f27399882cf6d07e1257cf2f5838a8164))

### [2.29.1](https://github.com/wxad/adui/compare/v2.29.0...v2.29.1) (2022-04-25)


### Bug Fixes

* **NumericInput:** 修复输入 . - 时引发的 NaN 错误 ([672e694](https://github.com/wxad/adui/commit/672e6948059e958fe4693e91935e1718fed8a49f))

## [2.29.0](https://github.com/wxad/adui/compare/v2.28.0...v2.29.0) (2022-04-20)


### Features

* **Icon:** 更新 icon ([c759146](https://github.com/wxad/adui/commit/c759146fea8ac15632a35a5b97b396a7477fb31d))

## [2.28.0](https://github.com/wxad/adui/compare/v2.27.0...v2.28.0) (2022-04-18)


### Features

* **Select:** 增加 allowClear Prop [#17](https://github.com/wxad/adui/issues/17) ([5725fcf](https://github.com/wxad/adui/commit/5725fcf6ab81d3b771be1b7e6ccc19bf645b3333))

## [2.27.0](https://github.com/wxad/adui/compare/v2.26.0...v2.27.0) (2022-04-07)


### Features

* **DatePicker, RangePicker:** 增加 hour Prop，对选中日期的小时进行调整 ([46c79d4](https://github.com/wxad/adui/commit/46c79d42c063bf2cff60ea1b2d424b85495f98eb))
* **Drawer:** 增加 maskClassName maskStyle Prop ([bc69e32](https://github.com/wxad/adui/commit/bc69e3241464d1280eae355f95e9aec07368229a))


### Bug Fixes

* **NumericInput:** 修复 icon 点击不生效的问题 ([8129a9f](https://github.com/wxad/adui/commit/8129a9f4079427e28a7689cd34d7a5ba85237409))
* **Tooltip:** autoAdjustPlacement 为 false 时，不再自动更换位置 ([4b3a830](https://github.com/wxad/adui/commit/4b3a83008d4838fd54f0674436ecde9c71a9de04))

## [2.26.0](https://github.com/wxad/adui/compare/v2.25.0...v2.26.0) (2022-03-10)


### Features

* **DatePicker.RangePicker:** 根据 input focus 的位置，显示不同的月份 ([b55ff1f](https://github.com/wxad/adui/commit/b55ff1f105d40aada2fcbd9dd137dc29284e6a2a))

## [2.25.0](https://github.com/wxad/adui/compare/v2.24.1...v2.25.0) (2022-03-07)


### Features

* **TreeSelect:** 默认支持大小写搜索，也加入了 filterCaseSensitive 开关以关闭这个功能 ([d9a8f28](https://github.com/wxad/adui/commit/d9a8f28b3ca3c2e520f06db95bc21cf462ae618d))


### Bug Fixes

* **Input:** 修复 cleave controlled 状态，保证 Blur 时可以重置 value ([45ffcb4](https://github.com/wxad/adui/commit/45ffcb4378dd82cf3ae2dce9668ecb9bc2f95f78))
* **TreeSelect:** 将 sameValueSplitter 复杂化，避免冲突 ([bd5d3de](https://github.com/wxad/adui/commit/bd5d3de46d35e23074697445ada22699155a2870))

### [2.24.1](https://github.com/wxad/adui/compare/v2.24.0...v2.24.1) (2022-02-18)


### Bug Fixes

* **ResizeObserver:** 加回 Polyfill ([7deab1b](https://github.com/wxad/adui/commit/7deab1b7006669924f71124e9880cd8d7b08b164))

## [2.24.0](https://github.com/wxad/adui/compare/v2.23.0...v2.24.0) (2022-02-16)


### Features

* **Upload:** 导出 IUpload 类型 ([d497a97](https://github.com/wxad/adui/commit/d497a971709c63f9d920d6950a62bd406649e014))


### Bug Fixes

* **TreeSelect:** 修复 dropdownPopupAlign 和 全选的 warning，其中 dropdownPopupAlign 不再被支持 ([54f41fa](https://github.com/wxad/adui/commit/54f41fa28d8c6e2a4c8458dc3e8db9c78ae32ee5))

## [2.23.0](https://github.com/wxad/adui/compare/v2.22.0...v2.23.0) (2022-01-20)


### Features

* **TreeSelect:** onSearch 增加第二个参数，返回筛选后的 treeNodes ([483a9e2](https://github.com/wxad/adui/commit/483a9e22f80cc8614b3314a8b4f206f6c853f18c))


### Bug Fixes

* **popmotion:** 修复由于 popmotion 版本问题导致 cra 报错，定版本到 v9 ([e305f16](https://github.com/wxad/adui/commit/e305f166357023605f2ec14ce3009a5cd5045267))
* **Tabs:** 修复 Tabs 在 banner 模式时，导致的 indicator 不对齐问题 ([2e648eb](https://github.com/wxad/adui/commit/2e648ebe72c29256f3b1d5722509d897f87dc1db))

## [2.22.0](https://github.com/wxad/adui/compare/v2.21.1...v2.22.0) (2022-01-14)


### Features

* **Icon:** 更新 icon 至 1.8.23 ([269a195](https://github.com/wxad/adui/commit/269a195a746255025970e4c63598a72e5a806077))


### Bug Fixes

* **TreeSelect:** 修复单选时 icon 无法点击的问题 ([30d697d](https://github.com/wxad/adui/commit/30d697d2fb3f859e533a3c18dca0954ae25f9897))

## [2.21.0](https://github.com/wxad/adui/compare/v2.20.1...v2.21.0) (2021-12-28)


### Features

* **Table:** Column 增加 getHeadCellClassName 和 getHeadCellStyle Prop ([613d7c5](https://github.com/wxad/adui/commit/613d7c59bc8b3fdaadcc1286b6e0df56ec1f5c38))

### [2.20.1](https://github.com/wxad/adui/compare/v2.20.0...v2.20.1) (2021-12-20)


### Bug Fixes

* **Table:** 尝试修复 columns 变化后，固定列不会变化的问题 [#13](https://github.com/wxad/adui/issues/13) ([0d19d23](https://github.com/wxad/adui/commit/0d19d23648050d8c4fe26c8c09f45048c5bcbd47))
* **TreeSelect:** 修复潜在的可能错误 ([5fa2504](https://github.com/wxad/adui/commit/5fa250410e1d576ccd38b18518566e29e4c93141))

## [2.20.0](https://github.com/wxad/adui/compare/v2.19.0...v2.20.0) (2021-11-23)


### Features

* **Select:** 增加针对 value 的泛型判断 ([939bf0a](https://github.com/wxad/adui/commit/939bf0a7f9f48746a163a28bdfc9dd6551342c23))
* **Table:** 更换 react-window 实现虚拟滚动 ([8b01d5a](https://github.com/wxad/adui/commit/8b01d5a303bcf6b0443fb3d0e27f0da1e0b225f6))
* **Table:** IColumnProps exported [#9](https://github.com/wxad/adui/issues/9) ([13400a1](https://github.com/wxad/adui/commit/13400a1ee17aeb64526178790f92920a9c30b464))


### Bug Fixes

* **Table:** 修复 Column 上 getCellxxx 不生效 [#11](https://github.com/wxad/adui/issues/11) ([ee35a6c](https://github.com/wxad/adui/commit/ee35a6c15776ec4a9c9bba55784260eeac766bef))
* **Table:** 移除多余层级造成的 expandedRow 宽度无法撑满 ([d3d6b96](https://github.com/wxad/adui/commit/d3d6b96a6df02cae8fd9423e75b935c626f67b99))

## [2.19.0](https://github.com/wxad/adui/compare/v2.18.0...v2.19.0) (2021-11-05)


### Features

* **Icon:** 支持传入自定义 paths Prop ([aa1d238](https://github.com/wxad/adui/commit/aa1d2386da2c41c7c01c92ae8d64f5e2d144fd07))
* **TreeSelect:** intent Prop Featured ([1e99377](https://github.com/wxad/adui/commit/1e9937702426312a1168fdf69e5d34d4b4c24f0f))
* **TreeSelect:** onSearchEnter Prop featured ([1d83334](https://github.com/wxad/adui/commit/1d83334bd172209a6717e490684aea967a1fe58a))


### Bug Fixes

* **DatePicker:** 修复 shortcuts 样式错误 ([f64a32f](https://github.com/wxad/adui/commit/f64a32fa240704c6c9a0431fcf45dddcceed21f6))
* **Table:** 修复宽度计算问题 ([3620e59](https://github.com/wxad/adui/commit/3620e595694ada4ff3856373e45f774c900f2aad))
* **TreeSelect:** 修复 showCheckedStrategy 和 selectAll 交叉产生的 bug [#8](https://github.com/wxad/adui/issues/8) ([b05c986](https://github.com/wxad/adui/commit/b05c9863af311fe181c55cd25e561a3d29b47bd0))

## [2.18.0](https://github.com/wxad/adui/compare/v2.17.0...v2.18.0) (2021-10-29)


### Features

* **DatePicker:** dropdownRender Props featured ([d747b1c](https://github.com/wxad/adui/commit/d747b1cd292c9b19a72442814dc9027edc3615bd))
* **DatePicker:** renderDay Props featured ([6e364a3](https://github.com/wxad/adui/commit/6e364a3f266d44f12ec4711091206f9face8692b))
* **DatePicker:** triggerElement Prop featured ([ac4ada6](https://github.com/wxad/adui/commit/ac4ada6e2f7f9dbb9dbf8e965bac099865850212))


### Bug Fixes

* **Table:** 试图修复 column 变化时的宽度问题 ([da231e8](https://github.com/wxad/adui/commit/da231e843350b20c2137ef274704a43f5b435652))

## [2.17.0](https://github.com/wxad/adui/compare/v2.16.0...v2.17.0) (2021-10-27)


### Features

* **Input:** 增加 ref 类型 ([1a9b2dc](https://github.com/wxad/adui/commit/1a9b2dc640033570dbadebb3329aa5ee0c1981f7))

## [2.16.0](https://github.com/wxad/adui/compare/v2.15.0...v2.16.0) (2021-10-19)


### Features

* **Table:** drag demo ([9790625](https://github.com/wxad/adui/commit/97906253767d97f4c0add68044b46566332fa10a))


### Bug Fixes

* **Table:** 修复 rowKey 使用 index 的一系列问题 ([35cfdf0](https://github.com/wxad/adui/commit/35cfdf093ff846f35471a0896198cd514cf21923))

## [2.15.0](https://github.com/wxad/adui/compare/v2.14.0...v2.15.0) (2021-09-29)


### Features

* **rollup:** 增加 initIcons ([2882270](https://github.com/wxad/adui/commit/2882270095783674e26aae4533d03c0d9a72f1e4))
* **Table:** grow prop ([7ff8194](https://github.com/wxad/adui/commit/7ff819472114e167427b5f50362383472dcaef3a))


### Bug Fixes

* **rollup:** 修复 motion resize-observer 组件打包问题 ([cda7d95](https://github.com/wxad/adui/commit/cda7d9573051842c04dee7550f909337ed319166))

## [2.14.0](https://github.com/wxad/adui/compare/v2.13.0...v2.14.0) (2021-09-15)


### Features

* **Nav:** subNav 添加 disabled Prop ([479735a](https://github.com/wxad/adui/commit/479735a3f7dd9cd29faddb4dca098ad254e523ed))

## [2.13.0](https://github.com/wxad/adui/compare/v2.12.2...v2.13.0) (2021-09-13)


### Features

* **Icon:** 增加 minigame moments offiaccount ([f404ed1](https://github.com/wxad/adui/commit/f404ed13c15a54eddca39d2de64dee4ae92db5ee))

### [2.12.2](https://github.com/wxad/adui/compare/v2.12.1...v2.12.2) (2021-09-06)


### Bug Fixes

* **Table:** 修复在多级表头下，loading 样式的错误 ([32011b0](https://github.com/wxad/adui/commit/32011b069987489dfbdf854035e71f034ec4944d))

### [2.12.1](https://github.com/wxad/adui/compare/v2.12.0...v2.12.1) (2021-09-03)


### Bug Fixes

* **Select:** 修复 onSearch Prop 不在类型定义的问题 ([9407a37](https://github.com/wxad/adui/commit/9407a3764d5d471200eaa21ba10e6e4591fb5a8c))
* **TreeSelect:** 修复 isArrayIncludes 可能的报错 ([38c8ba7](https://github.com/wxad/adui/commit/38c8ba7f5eb615a0e9ce83f00954e016b2833e93))
* **TreeSelect:** 修复值为 0 的 node 在全选时无法被选中的问题 ([7f49657](https://github.com/wxad/adui/commit/7f49657c6a558fead4973bd67542a90d5414b55a))

## [2.12.0](https://github.com/wxad/adui/compare/v2.11.0...v2.12.0) (2021-08-30)


### Features

* **Popconfirm:** onConfirm onCancel 增加参数 e ([878184c](https://github.com/wxad/adui/commit/878184cf56cd372a1479d945990e2bb211060931))


### Bug Fixes

* **Cascader:** className Props ([ce3de82](https://github.com/wxad/adui/commit/ce3de8270797b7eb28f7704cfbef4037647dd4ab))
* **TreeSelect:** 修复 sameValueEnabled 表现错误 ([9789f7c](https://github.com/wxad/adui/commit/9789f7cf20271ef6b20fd184d12b99acc2c43af4))

## [2.11.0](https://github.com/wxad/adui/compare/v2.10.4...v2.11.0) (2021-08-12)


### Features

* **rollup, vite:** rollup-plugin-adui 支持组件按需及 icon 按需 ([b736d85](https://github.com/wxad/adui/commit/b736d856a9bbf00d97a81ba41f8c9b9ac45b4237))

## [2.10.4](https://github.com/wxad/adui/compare/v2.10.0...v2.10.4) (2021-08-12)

### 原子类规范
原子类规范文档已上线。


### Bug Fixes

* **Affix:** 精简代码，使用 resize-observer 同步占位元素的宽高 ([26f81c7](https://github.com/wxad/adui/commit/26f81c71e5306a73104dea253df0b0f6d539c2e5))
* **Table:** 修复 columns length 变化后 fixed 列不会重新计算的问题 ([d4beaee](https://github.com/wxad/adui/commit/d4beaee34f1e2818f353acb4e0b360aa3e89f1c5))
* **Table:** 修复 title 为空时，resize 的报错 [#4](https://github.com/wxad/adui/issues/4) ([a175a5f](https://github.com/wxad/adui/commit/a175a5fd5b9ae70ed2cde89a20a7065834e978cf))

## [2.10.0](https://github.com/wxad/adui/compare/v2.9.0...v2.10.0) (2021-07-28)


### Features

* **tailwind:** 添加 line-clamp ([11dfc17](https://github.com/wxad/adui/commit/11dfc17285264df55ebb107545eb9658e498051a))


### Bug Fixes

* **strictMode:** 去除 Motion 的使用，部分组件使用 CSSMotion 替代 ([3a1a902](https://github.com/wxad/adui/commit/3a1a902c9c667ef8f15c54a1adce0a40b034f269))
* **TreeSelect:** icon 从默认的 menu 改为 list ([269b73e](https://github.com/wxad/adui/commit/269b73e9bb50706b2b9044ffe1eda6f7a9595237))

## [2.9.0](https://github.com/wxad/adui/compare/v2.8.1...v2.9.0) (2021-07-23)


### Features

* **Menu:** 增加 minWidth Prop ([db7e12b](https://github.com/wxad/adui/commit/db7e12b0267271569c6a38006eebfbdb73b53f8b))
* **types:** 所有组件增加相关类型的导出 ([0f79b77](https://github.com/wxad/adui/commit/0f79b77774d19b3958880377e2c49546ac455fce))


### Bug Fixes

* **TreeSelect:** 修复单选时， value 字符串会被 new Set 的问题 ([f7b9a2c](https://github.com/wxad/adui/commit/f7b9a2c49946d6775db0952f7699a2caa1863f82))

## [2.8.1](https://github.com/wxad/adui/compare/v2.7.1...v2.8.1) (2021-07-19)


### Bug Fixes

* **TreeSelect:** 修复 title 高度高于 32px 时， isLeaf false 不生效的问题 ([ab1c846](https://github.com/wxad/adui/commit/ab1c846d26fff3a40a512d5200b8a58f83d0d41e))

## [2.8.0](https://github.com/wxad/adui/compare/v2.7.1...v2.8.0) (2021-07-19)


### Bug Fixes

* **TreeSelect:** 修复 title 高度高于 32px 时， isLeaf false 不生效的问题 ([ab1c846](https://github.com/wxad/adui/commit/ab1c846d26fff3a40a512d5200b8a58f83d0d41e))

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

## [1.5.2](https://github.com/wxad/adui/compare/v1.5.1...v1.5.2) (2021-03-03)

### Bug Fixes

* **TreeSelect:** 修复 jacky 发现的搜索值和 TreeNode 不对应的问题 ([755a29d](https://github.com/wxad/adui/commit/755a29df01219e49d0e93fef1c38731a5ba8596a))

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

## [1.2.3](https://github.com/wxad/adui/compare/v1.2.2...v1.2.3) (2020-12-24)


### Bug Fixes

* **Select:** 修复  searchable + 空 options 时的报错 ([17bc6f8](https://github.com/wxad/adui/commit/17bc6f87cfd51bea789cce07d2635b6b1647767d))

## [1.2.2](https://github.com/wxad/adui/compare/v1.2.1...v1.2.2) (2020-12-21)


### Bug Fixes

* **DatePicker:** 默认最大年份 + 1 ([aa5741e](https://github.com/wxad/adui/commit/aa5741eadee6833288d70ecef22a7cabe3d43425))

## [1.2.1](https://github.com/wxad/adui/compare/v1.2.0...v1.2.1) (2020-12-09)


### Bug Fixes

* **Switch:** 修复对 onClick 事件的覆盖 ([0dccf21](https://github.com/wxad/adui/commit/0dccf21aba4c6f6e12b9b2ffd4f6052a2299c1ce))

## [1.2.0](https://github.com/wxad/adui/compare/v1.1.2...v1.2.0) (2020-12-02)


### Features

* **Icon:** update icon ([e04cc54](https://github.com/wxad/adui/commit/e04cc54f971700cfce759de31a3646639934bf5d))

## [1.1.2](https://github.com/wxad/adui/compare/v1.1.1...v1.1.2) (2020-12-02)


### Bug Fixes

* **Table:** 修复合并单元格问题 ([e330ff5](https://github.com/wxad/adui/commit/e330ff5008f1fa70ab555d49e4cee243ccbaffc6))

## [1.1.0](http://git.code.oa.com/yijiejiang/adUI/compare/v1.0.5...v1.1.0) (2020-11-12)


### Features

* **Icon:** update ([d1e8510](http://git.code.oa.com/yijiejiang/adUI/commit/d1e8510638f6d5d4579a0d247f45645815054f23))

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



## [0.10.2](http://git.code.oa.com/yijiejiang/adUI/compare/v0.10.1...v0.10.2) (2019-10-31)


### Bug Fixes

* **Select:** [#31](http://git.code.oa.com/yijiejiang/adUI/issues/31) ([9a775fc](http://git.code.oa.com/yijiejiang/adUI/commit/9a775fc))
* **Table:** 修复在 sortOrder 为 undefined 时，仍然会显示排序 icon ([8e3fdcd](http://git.code.oa.com/yijiejiang/adUI/commit/8e3fdcd))