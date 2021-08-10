# 色彩&nbsp; Color

在中后台系统中，色彩服务于功能。AD UI 主要以无色系（黑白灰）搭建整体的后台环境，让用户更关注信息和内容本身。色相仅用于表示功能、语义和倾向，如成功、提醒、警示、危险等，或表示可跳转的链接、强引导的行动、强引导关注的区域等。

以下的颜色变量会使用在 `color` `background-color` `shadow` 等不同属性上，具体内容可阅读对应原子规范文档。

<section class="headerSection">
<div class="headerBox" style="flex: .45;">
  <div class="colorBox">
    <div class="headerBoxTitle" style="margin-left: 10px;">
      色相系
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--primary-color);"></div>
      <div>
      <div class="colorTitle"> 主题色 </div>
      <div class="colorSubTitle">primary-color</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--ad-green);"></div>
      <div>
      <div class="colorTitle"> 绿 </div>
      <div class="colorSubTitle">#07C160</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--ad-blue);"></div>
      <div>
      <div class="colorTitle"> 蓝 </div>
      <div class="colorSubTitle">#2B7BD6</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--ad-orange);"></div>
      <div>
      <div class="colorTitle"> 橙 </div>
      <div class="colorSubTitle">#F6B940</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--ad-red);"></div>
      <div>
      <div class="colorTitle"> 红 </div>
      <div class="colorSubTitle">#D9514C</div>
      </div>
    </div>
  </div>
</div>
<div class="headerBox" style="align-items: flex-end;">
  <div class="colorBox">
    <div class="headerBoxTitle" style="margin-left: 10px;">
    无色系
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-50);"></div>
      <div>
      <div class="colorTitle"> 50 </div>
      <div class="colorSubTitle">#FDFDFD</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-100);"></div>
      <div>
      <div class="colorTitle"> 100 </div>
      <div class="colorSubTitle">#FAFAFA</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-200);"></div>
      <div>
      <div class="colorTitle"> 200 </div>
      <div class="colorSubTitle">#F3F3F3</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-300);"></div>
      <div>
      <div class="colorTitle"> 300 </div>
      <div class="colorSubTitle">#EBEBEB</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-400);"></div>
      <div>
      <div class="colorTitle"> 400 </div>
      <div class="colorSubTitle">#E3E3E3</div>
      </div>
    </div>
  </div>
  <div class="colorBox">
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-500);"></div>
      <div>
      <div class="colorTitle"> 500 </div>
      <div class="colorSubTitle">#D6D6D6</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-600);"></div>
      <div>
      <div class="colorTitle"> 600 </div>
      <div class="colorSubTitle">#C7C7C7</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-700);"></div>
      <div>
      <div class="colorTitle"> 700 </div>
      <div class="colorSubTitle">#A3A3A3</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-800);"></div>
      <div>
      <div class="colorTitle"> 800 </div>
      <div class="colorSubTitle">#6B6B6B</div>
      </div>
    </div>
    <div class="colorPalette">
      <div class="colorSwatch" style="background-color: var(--gray-900);"></div>
      <div>
      <div class="colorTitle"> 900 </div>
      <div class="colorSubTitle">#1F1F1F</div>
      </div>
    </div>
</div>
</section>

---

完整的  配置列表：

```json
{
  "transparent": "transparent",
  "current": "currentColor",
  "black": "#000",
  "white": "#fff",
  "green": "#07c160",
  "orange": "#eda20c",
  "blue": "#2b7bd6",
  "red": "#d9514c",
  "gray": {
    "0": "#ffffff",
    "50": "#fafafa",
    "100": "#f2f2f2",
    "200": "#ebebeb",
    "300": "#e6e6e6",
    "400": "#e0e0e0",
    "500": "#d6d6d6",
    "600": "#c7c7c7",
    "700": "#a3a3a3",
    "800": "#6b6b6b",
    "900": "#1f1f1f"
  },
  "tp-gray": {
    "0": "rgba(0, 0, 0, 0)",
    "50": "rgba(0, 0, 0, 0.02)",
    "100": "rgba(0, 0, 0, 0.06)",
    "200": "rgba(0, 0, 0, 0.08)",
    "300": "rgba(0, 0, 0, 0.1)",
    "400": "rgba(0, 0, 0, 0.12)",
    "500": "rgba(0, 0, 0, 0.16)",
    "600": "rgba(0, 0, 0, 0.22)",
    "700": "rgba(0, 0, 0, 0.36)",
    "800": "rgba(0, 0, 0, 0.58)",
    "900": "rgba(0, 0, 0, 0.88)"
  }
}
```
