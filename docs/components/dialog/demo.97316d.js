;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    1522: function (n, a, s) {
      n.exports = { basic: s(1594), steps: s(1595) }
    },
    1594: function (n, a) {
      n.exports = {
        content: [
          "article",
          ["p", "四种类型的轻量提示："],
          [
            "pre",
            {
              lang: "jsx",
              highlighted:
                '  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> intent <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dialog <span class="token operator">=</span> Dialog<span class="token punctuation">[</span>intent<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">"confirm"</span><span class="token punctuation">,</span>\n      confirmProps<span class="token punctuation">:</span> <span class="token punctuation">{</span> disabled<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      contentTitle<span class="token punctuation">:</span> <span class="token string">"是否确认提交你的修改？"</span><span class="token punctuation">,</span>\n      contentText<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bool <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              dialog<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> confirmProps<span class="token punctuation">:</span> <span class="token punctuation">{</span> disabled<span class="token punctuation">:</span> <span class="token operator">!</span>bool <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span>\n            <span class="token attr-name">}}</span>\n          <span class="token punctuation">></span></span>\n            我已阅读《广告投放规则》\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>adui-dialog-demoWrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token string">"info"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>信息类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token string">"success"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">intent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token string">"warning"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">intent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>警示类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token string">"danger"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">intent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>危险类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/** 请忽略这个 style 标签 😊 */</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`.adui-dialog-demoWrapper button:not(:last-of-type) { margin-right: 16px; }`</span></span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>',
            },
            [
              "code",
              '  const handleClick = intent => {\n    const dialog = Dialog[intent]({\n      type: "confirm",\n      confirmProps: { disabled: true },\n      contentTitle: "是否确认提交你的修改？",\n      contentText: (\n        <div>\n          <Checkbox\n            onChange={bool => {\n              dialog.update({ confirmProps: { disabled: !bool } })\n            }}\n          >\n            我已阅读《广告投放规则》\n          </Checkbox>\n        </div>\n      ),\n    })\n  }\n\n  return (\n    <section className="adui-dialog-demoWrapper">\n      <Button onClick={() => handleClick("info")}>信息类</Button>\n      <Button onClick={() => handleClick("success")} intent="success">成功类</Button>\n      <Button onClick={() => handleClick("warning")} intent="warning">警示类</Button>\n      <Button onClick={() => handleClick("danger")} intent="danger">危险类</Button>\n      \n      <style dangerouslySetInnerHTML={{ __html: `.adui-dialog-demoWrapper button:not(:last-of-type) { margin-right: 16px; }` }} />\n    </section>\n  )',
            ],
          ],
          ["h2", "Alert"],
          ["h3", "关于声明式使用、函数式调用、轻量 这 3 种模式"],
          [
            "p",
            "1.声明式使用是推荐的使用方法，因为这符合 React 哲学 —— 显示地维护 UI 更加直观安全；",
            ["br"],
            "2.函数式调用是基于 ",
            ["code", "<Dialog />"],
            " 组件的函数式封装；",
            ["br"],
            "3.轻量提示则是函数式调用的一种特殊情况，提供了特别的 ",
            ["code", "contentTitle"],
            " ",
            ["code", "contentText"],
            " Prop。",
            ["br"],
            "事实上，函数式调用和声明式可以实现完全相同的功能。但是推荐只在相对简单的场景中使用函数式调用。  ",
            ["br"],
            ["br"],
            "\n",
            ["strong", "函数式更新 Prop 的方法"],
            ["br"],
            "首先创建一个实例 ",
            ["code", "const dialog = Dialog.inform({...})"],
            "，继而调用组件提供的 ",
            ["code", "dialog.update({...})"],
            " 方法，比如上面例子所演示的 ",
            ["code", "<Checkbox />"],
            " 对 ",
            ["code", "confirmProps"],
            " 的改变，体现出了函数式不必添加多个 ",
            ["code", "state"],
            " 就能完成任务的优势。",
            ["br"],
            ["br"],
            "尽管如此，函数式不符合 “React UI 组件”的核心思路，声明式使用是推荐的使用方法。",
          ],
        ],
        meta: {
          order: 0,
          title: { "zh-CN": "四种类型的轻量提示：", "en-US": "Type" },
          filename: "components/dialog/demo/basic.md",
        },
      }
    },
    1595: function (n, a) {
      n.exports = {
        content: [
          "article",
          ["p", "承载轻量的支线步骤与流程"],
          [
            "pre",
            {
              lang: "jsx",
              highlighted:
                '  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentStep<span class="token punctuation">,</span> setCurrentStep<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>弹出步骤<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>\n        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n          <span class="token function">setCurrentStep</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">currentStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>currentStep<span class="token punctuation">}</span></span>\n        <span class="token attr-name">steps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            onCancel<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            onConfirm<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token function">setCurrentStep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            children<span class="token punctuation">:</span> <span class="token string">"第一步"</span><span class="token punctuation">,</span>\n            cancelText<span class="token punctuation">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span>\n            confirmText<span class="token punctuation">:</span> <span class="token string">"下一步"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n          <span class="token attr-name">{</span>\n            <span class="token attr-name"><span class="token namespace">onConfirm:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">{</span>\n              <span class="token attr-name">setCurrentStep(2)</span>\n            <span class="token attr-name">},</span>\n            <span class="token attr-name"><span class="token namespace">children:</span></span> <span class="token attr-name">"第二步",</span>\n            <span class="token attr-name"><span class="token namespace">cancelText:</span></span> <span class="token attr-name">"上一步",</span>\n            <span class="token attr-name"><span class="token namespace">confirmText:</span></span> <span class="token attr-name">"下一步",</span>\n          <span class="token attr-name">},</span>\n          <span class="token attr-name">{</span>\n            <span class="token attr-name"><span class="token namespace">onConfirm:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log("第三步</span> <span class="token attr-name">confirm",</span> <span class="token attr-name">"yijie"),</span>\n            <span class="token attr-name"><span class="token namespace">children:</span></span> <span class="token attr-name">"第三步",</span>\n            <span class="token attr-name"><span class="token namespace">cancelText:</span></span> <span class="token attr-name">"上一步",</span>\n            <span class="token attr-name"><span class="token namespace">confirmText:</span></span> <span class="token attr-name">"完成",</span>\n          <span class="token attr-name">},</span>\n        <span class="token attr-name">]}</span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>',
            },
            [
              "code",
              '  const [visible, setVisible] = useState(false)\n  const [currentStep, setCurrentStep] = useState(0)\n\n  return (\n    <React.Fragment>\n      <Button onClick={() => setVisible(true)}>弹出步骤</Button>\n      <Dialog\n        title="标题"\n        visible={visible}\n        onCancel={() => {\n          setVisible(false)\n          setCurrentStep(0)\n        }}\n        currentStep={currentStep}\n        steps={[\n          {\n            onCancel: () => setVisible(false),\n            onConfirm: () => {\n              setCurrentStep(1)\n            },\n            children: "第一步",\n            cancelText: "取消",\n            confirmText: "下一步",\n          },\n          {\n            onConfirm: () => {\n              setCurrentStep(2)\n            },\n            children: "第二步",\n            cancelText: "上一步",\n            confirmText: "下一步",\n          },\n          {\n            onConfirm: () => console.log("第三步 confirm", "yijie"),\n            children: "第三步",\n            cancelText: "上一步",\n            confirmText: "完成",\n          },\n        ]}\n      />\n    </React.Fragment>\n  )',
            ],
          ],
          ["h2", "Alert"],
          ["h3", "关于 steps"],
          [
            "p",
            "steps 数组的每一项是一个对象，它目前只支持以下参数：",
            ["br"],
            ["code", "cancelProps"],
            " ",
            ["code", "cancelText"],
            " ",
            ["code", "children"],
            " ",
            ["code", "confirmProps"],
            " ",
            ["code", "confirmText"],
            " ",
            ["code", "onCancel"],
            " ",
            ["code", "onConfirm"],
          ],
        ],
        meta: {
          order: 1,
          title: { "zh-CN": "步骤", "en-US": "Steps" },
          filename: "components/dialog/demo/steps.md",
        },
      }
    },
  },
])
