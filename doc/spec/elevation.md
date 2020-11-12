# 投影&nbsp; Elevation

投影是划分结构、引导注意力的常用方式。投影以 z 轴的距离 `elevation`，来表示模块之间的关系，告知用户哪些内容是当前需要关注的。在卡片式布局中，投影也用于增强“卡片感”，来表现更明确的功能分区，让用户更轻易地理解页面。

<section class="headerSection">
  <div class="headerBox" style="background-color: var(--gray-50);">
    <div class="elevationBox">
      <div class="elevationCard" style="box-shadow: var(--box-shadow-elevation-0);">
      </div>
      <p style="margin-bottom: 0; text-align: center;">
      层级 0
      </p>
      <p style="margin-bottom: 0; line-height: 20px; font-size: 13px; text-align: center; opacity: .6;">
      elevation-0
      </p>
    </div>
    <div class="elevationBox">
      <div class="elevationCard" style="box-shadow: var(--box-shadow-elevation-1);">
      </div>
      <p style="margin-bottom: 0; text-align: center;">
      层级 1
      </p>
      <p style="margin-bottom: 0; line-height: 20px; font-size: 13px; text-align: center; opacity: .6;">
      elevation-1
      </p>
    </div>
    <div class="elevationBox">
      <div class="elevationCard" style="box-shadow: var(--box-shadow-elevation-2);">
      </div>
      <p style="margin-bottom: 0; text-align: center;">
      层级 2
      </p>
      <p style="margin-bottom: 0; line-height: 20px; font-size: 13px; text-align: center; opacity: .6;">
      elevation-2
      </p>
    </div>
    <div class="elevationBox">
      <div class="elevationCard" style="box-shadow: var(--box-shadow-elevation-3);">
      </div>
      <p style="margin-bottom: 0; text-align: center;">
      层级 3
      </p>
      <p style="margin-bottom: 0; line-height: 20px; font-size: 13px; text-align: center; opacity: .6;">
      elevation-3
      </p>
    </div>
    <div class="elevationBox">
      <div class="elevationCard" style="box-shadow: var(--box-shadow-elevation-4);">
      </div>
      <p style="margin-bottom: 0; text-align: center;">
      层级 4
      </p>
      <p style="margin-bottom: 0; line-height: 20px; font-size: 13px; text-align: center; opacity: .6;">
      elevation-4
      </p>
    </div>
  </div>
</section>

---

## 实践指南

<article>
  <section class="articleInner">
    <h3 class="articleH3">
        层级 0
    </h3>
    <p class="articleP">
    层级 0 用于 <strong>信息模块的排布</strong>。层级 0 无投影，表现为线框形态，是简单、扁平划分模块的方式。
    </p>
        <p class="articleP">
    例如：选项卡、用户信息卡、订阅项目等。
    </p>
  </section>
  <div display="block" style="flex: 1;">
  <img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/mvdsbj2e_4c30105f.png" style="margin: 0; width: 430px;  background-color: #fcfcfc;" />
  </div>
</article>

---

<article>
  <section class="articleInner">
    <h3 class="articleH3">
        层级 1
    </h3>
    <p class="articleP">
    层级 1 用于 <strong>页面功能区划分</strong>（如卡片式布局）。层级 1 可加强“卡片感”，对区分页面模块有更明确的效果，但轻量的投影样式不会过度引起注意力。
    </p>
    <p class="articleP">
    例如：卡片、顶部导航栏等。
    </p>
    <p class="articleP">
    <a href="/components/card">查看层级1组件示例</a>
    </p>
  </section>
  <div display="block" style="flex: 1;">
  <img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/69cgowho_e27b2a82.png" style="margin: 0; width: 430px;  background-color: #fcfcfc;" />
  </div>
</article>

---

<article>
  <section class="articleInner">
    <h3 class="articleH3">
        层级 2
    </h3>
    <p class="articleP">
    层级 2 用于 <strong>临时弹出、承载内容的模块</strong>。它引导用户的注意力，引导关注当前内容，同时投影样式保持了弹出模块与底层模块的关系，不会距离太远，过于割裂。
    </p>
    <p class="articleP">
    例如：选择器、行动菜单、气泡提示等。
    </p>
    <p class="articleP">
    <a href="/components/select">查看层级2组件示例</a>
    </p>
  </section>
  <div display="block" style="flex: 1;">
  <img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/1t6bp8v6_f1fa415a.png" style="margin: 0; width: 430px;  background-color: #fcfcfc;" />
  </div>
</article>

---

<article>
  <section class="articleInner">
    <h3 class="articleH3">
        层级 3
    </h3>
    <p class="articleP">
    层级 3 用于 <strong>强引导的操作</strong>，主要出现在模块与用户操作强相关的情景。操作时，将达到层级 3，操作结束后，返回原本层级。
    </p>
    <p class="articleP">
    例如：拖拽、移动、鼠标上移表示可点击等。
    </p>
    <p class="articleP">
    <a href="/components/card">查看层级3组件示例</a>
    </p>
  </section>
  <div display="block" style="flex: 1;">
  <img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/xfvozp9m_940b6b6f.png" style="margin: 0; width: 430px;  background-color: #fcfcfc;" />
  </div>
</article>

---

<article>
  <section class="articleInner">
    <h3 class="articleH3">
        层级 4
    </h3>
    <p class="articleP">
    层级 4 用于 <strong>全局覆盖、承载较多内容的模块</strong>。它将明确区分模块之间的关系，让用户脱离底层场景，专注于当前浮起的窗口。
    </p>
    <p class="articleP">
    例如：侧边的浮层、对话框等。
    </p>
    <p class="articleP">
    <a href="/components/dialog">查看层级4组件示例</a>
    </p>
  </section>
  <div display="block" style="flex: 1;">
  <img src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/wxadtouch/upload/t1/6iscdme0_4a55227c.png" style="margin: 0; width: 430px;  background-color: #fcfcfc;" />
  </div>
</article>
