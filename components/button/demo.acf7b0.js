(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1377:function(n,s,a){n.exports={basic:a(1528)}},1528:function(n,s){n.exports={content:["article",["p","点击切换按钮类型 ",["code","intent"],"："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>copied<span class="token punctuation">,</span> setCopied<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n      <span class="token attr-name">leftIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"tick-circle"</span> <span class="token punctuation">:</span> <span class="token string">"copy-outlined"</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">intent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"primary"</span> <span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCopied</span><span class="token punctuation">(</span><span class="token operator">!</span>copied<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>copied <span class="token operator">?</span> <span class="token string">"已复制"</span> <span class="token punctuation">:</span> <span class="token string">"复制代码"</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const [copied, setCopied] = useState(false)\n\nreturn (\n  <div>\n    <Button\n      leftIcon={copied ? "tick-circle" : "copy-outlined"}\n      intent={copied ? "primary" : "normal"}\n      theme="light"\n      onClick={() => setCopied(!copied)}\n    >\n      {copied ? "已复制" : "复制代码"}\n    </Button>\n  </div>\n)']]],meta:{order:0,title:{"zh-CN":"按钮类型","en-US":"Intent"},filename:"components/button/demo/basic.md"}}}}]);