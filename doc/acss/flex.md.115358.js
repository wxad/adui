(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1352:function(n,s){n.exports={content:["article",["p","AD UI 引入了以下功能类，以控制 ",["code","flex"]," 容器内的元素如何增大或缩小以适应可用的空间。"],["p","相关 CSS 属性：",["code","flex"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"flex-1"</span><span class="token punctuation">:</span> "flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">0</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-auto"</span><span class="token punctuation">:</span> "flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token number">1</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-intial"</span><span class="token punctuation">:</span> "flex<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-none"</span><span class="token punctuation">:</span> <span class="token string">"flex: none"</span>\n}'},["code",'{\n  "flex-1": "flex: 1 1 0%;",\n  "flex-auto": "flex: 1 1 auto;",\n  "flex-intial": "flex: 0 1 auto;",\n  "flex-none": "flex: none"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex p-16 w-full text-white text-center bg-tp-gray-100 rounded-4"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex-1 p-4"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-40 leading-40 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex-1 p-4"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-40 leading-40 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="flex p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">\n    <div className="flex-1 p-4">\n      <div className="h-40 leading-40 bg-green rounded-4">1</div>\n    </div>\n    <div className="flex-1 p-4">\n      <div className="h-40 leading-40 bg-green rounded-4">2</div>\n    </div>\n  </div>\n)']]],meta:{title:"Flex",filename:"doc/acss/flex.md"}}}}]);