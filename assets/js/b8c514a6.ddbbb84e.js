"use strict";(self.webpackChunkpython_koza=self.webpackChunkpython_koza||[]).push([[994],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return c}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},k=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=m(t),c=l,f=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return t?r.createElement(f,a(a({ref:n},k),{},{components:t})):r.createElement(f,a({ref:n},k))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6506:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return d},default:function(){return c}});var r=t(3117),l=t(102),i=(t(7294),t(3905)),a=t(4996),p=["components"],o={id:"stage_3",title:"\u30b9\u30c6\u30fc\u30b83\uff1a\u30d6\u30fc\u30eb\u5024\u3001\u6761\u4ef6\u5206\u5c90\u3001\u30eb\u30fc\u30d7"},m=void 0,k={unversionedId:"stage_3",id:"stage_3",title:"\u30b9\u30c6\u30fc\u30b83\uff1a\u30d6\u30fc\u30eb\u5024\u3001\u6761\u4ef6\u5206\u5c90\u3001\u30eb\u30fc\u30d7",description:"\u30d6\u30fc\u30eb\u5024(Boolean)",source:"@site/docs/stage_3.md",sourceDirName:".",slug:"/stage_3",permalink:"/python-koza/stage_3",editUrl:"https://github.com/MToyokura/python-koza/tree/master/docs/stage_3.md",tags:[],version:"current",frontMatter:{id:"stage_3",title:"\u30b9\u30c6\u30fc\u30b83\uff1a\u30d6\u30fc\u30eb\u5024\u3001\u6761\u4ef6\u5206\u5c90\u3001\u30eb\u30fc\u30d7"},sidebar:"someSidebar",previous:{title:"\u30b9\u30c6\u30fc\u30b82\uff1a\u95a2\u6570",permalink:"/python-koza/stage_2"},next:{title:"\u5b9f\u8df5 1",permalink:"/python-koza/practice_1"}},d=[{value:"\u30d6\u30fc\u30eb\u5024(Boolean)",id:"\u30d6\u30fc\u30eb\u5024boolean",children:[],level:2},{value:"\u6587(Statement)",id:"\u6587statement",children:[{value:"\u6761\u4ef6\u5206\u5c90",id:"\u6761\u4ef6\u5206\u5c90",children:[],level:3},{value:"\u30eb\u30fc\u30d7",id:"\u30eb\u30fc\u30d7",children:[{value:"<code>while</code>\u6587",id:"while\u6587",children:[],level:4},{value:"<code>for</code>\u6587",id:"for\u6587",children:[],level:4}],level:3}],level:2},{value:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",children:[],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30d6\u30fc\u30eb\u5024boolean"},"\u30d6\u30fc\u30eb\u5024(Boolean)"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u65b0\u305f\u306b\u30d6\u30fc\u30eb\u5024\u3068\u3044\u3046\u30c7\u30fc\u30bf\u578b\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u30d6\u30fc\u30eb\u5024\u3068\u3044\u3046\u540d\u524d\u306f\u805e\u304d\u99b4\u67d3\u307f\u304c\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u4e2d\u8eab\u306f\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001\u300c\u6b63\u8aa4\u300d\u306e\u3053\u3068\u3067\u3059\u3002\u30d6\u30fc\u30eb\u5024\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"(\u6b63\u3057\u3044)\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"(\u6b63\u3057\u304f\u306a\u3044)\u306e2\u3064\u306e\u5024\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002\u5f8c\u3067\u51fa\u3066\u304d\u307e\u3059\u304c\u3001Python\u306f\u3053\u306e\u30d6\u30fc\u30eb\u5024\u3092\u5143\u306b\u3057\u3066\u3001\u3069\u306e\u3088\u3046\u306b\u30c7\u30fc\u30bf\u3092\u51e6\u7406\u3057\u3066\u3044\u304f\u304b\u3092\u5224\u65ad\u3057\u307e\u3059\u3002 "),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/57dad58944",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"print(1==1)\nprint(1==2)\nprint(10>5)\n\nprint('Hello'=='Hello')\nprint('llo' in 'Hello')\nprint('Hi' not in 'Hello')\n")),(0,i.kt)("p",null,"1\u884c\u76ee\u306e\u300c1==1\u300d\u30686\u884c\u76ee\u306e\u300c'llo' in 'Hello'\u300d\u306f\u3001\u898b\u305f\u76ee\u306f\u5168\u304f\u9055\u3044\u307e\u3059\u304c\u3001\u30c7\u30fc\u30bf\u3068\u3057\u3066\u306f\u540c\u3058\u300c",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u300d\u3068\u3044\u3046\u30d6\u30fc\u30eb\u5024\u3067\u3059\u3002 "),(0,i.kt)("p",null,"\u4e0a\u306e\u4f8b\u3067\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"stage_1"},"\u30b9\u30c6\u30fc\u30b81"),"\u3067\u5c11\u3057\u89e6\u308c\u305f\u300c==\u300d\u3084\u3001\u300cin\u300d\u30aa\u30da\u30ec\u30fc\u30bf\u3092\u4f7f\u3063\u3066\u30d6\u30fc\u30eb\u5024\u3092\u307f\u3066\u3044\u307e\u3059\u3002\u300c","<","=\u300d\u3084\u300c",">","=\u300d\u3082\u4f7f\u3063\u3066\u8a66\u3057\u306b\u4e0a\u306e\u753b\u9762\u306b\u30b3\u30fc\u30c9\u3092\u5b9f\u969b\u306b\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,i.kt)("h2",{id:"\u6587statement"},"\u6587(Statement)"),(0,i.kt)("p",null,"\u6587\u3068\u306f\u3001\u8aac\u660e\u304c\u96e3\u3057\u3044\u306e\u3067\u3059\u304c\u3001Python\u306b\u5099\u308f\u3063\u3066\u3044\u308b\u6a5f\u80fd\u3092\u4f7f\u3046\u305f\u3081\u306e\u6307\u793a\u3067\u3042\u308b\u3068\u601d\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u6587\u3092\u4f7f\u3046\u3053\u3068\u3067\u30c7\u30fc\u30bf\u306e\u51e6\u7406\u306e\u9053\u7b4b\u3092\u793a\u3057\u305f\u308a\u3001\u65b0\u305f\u306b\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u305f\u308a\u3001\u5916\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3068\u306e\u3084\u308a\u53d6\u308a\u306a\u3069\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u6700\u521d\u306e\u3046\u3061\u306f\u6587\u306e\u6982\u5ff5\u304c\u3064\u304b\u307f\u306b\u304f\u3044\u3068\u601d\u3044\u307e\u3059\u3002\u4e00\u3064\u305a\u3064\u7406\u89e3\u3057\u3066\u3044\u3063\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,i.kt)("p",null,"\u3053\u306e\u8b1b\u5ea7\u3067\u306f\u4ee5\u4e0b\u306e\u6587\u3092\u6271\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"def"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"return"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"import")),(0,i.kt)("p",null,"\u3053\u306e\u8b1b\u5ea7\u3067\u306f\u6271\u3044\u307e\u305b\u3093\u304c\u4ee5\u4e0b\u306e\u6587\u3082\u6bd4\u8f03\u7684\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"break"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"continue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"try"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"with"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"class")),(0,i.kt)("p",null,"\u66f8\u304d\u65b9\u306f\u6587\u306b\u3088\u3063\u3066\u591a\u5c11\u7570\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u6587\u306b\u3088\u3063\u3066\u306f\u3001\u8907\u6570\u306e\u7bc0(clause)\u304b\u3089\u306a\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\n\u6587\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e",(0,i.kt)("a",{href:"https://docs.python.org/ja/3/reference/simple_stmts.html"},"7. \u5358\u7d14\u6587 (simple statement)"),"\u3084",(0,i.kt)("a",{href:"https://docs.python.org/ja/3/reference/compound_stmts.html"},"8. \u8907\u5408\u6587 (compound statement)"),"\u306b\u3088\u308a\u8a73\u3057\u304f\u89e3\u8aac\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u305d\u3061\u3089\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,i.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u6761\u4ef6\u5206\u5c90\u306e\u6587\u3068\u30eb\u30fc\u30d7\u306e\u6587\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002 "),(0,i.kt)("h3",{id:"\u6761\u4ef6\u5206\u5c90"},"\u6761\u4ef6\u5206\u5c90"),(0,i.kt)("p",null,"\u6761\u4ef6\u5206\u5c90\u3068\u306f\u3001\u300c\u3053\u306e\u6761\u4ef6\u306e\u3068\u304d\u306f\u3053\u3046\u3059\u308b\u300d\u3068\u3044\u3046\u3053\u3068\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u5206\u5c90\u3092\u6307\u5b9a\u3059\u308b\u6587\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u304c\u3042\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u3092\u69cb\u6210\u3059\u308b\u8981\u7d20\u3068\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),"\u7bc0\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"else"),"\u7bc0\u3092\u542b\u3080\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u66f8\u304d\u65b9\u306f "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if \u25cb\u25cb: \n    \u25cb\u25cb\u304c\u5f53\u3066\u306f\u307e\u308b\u5834\u5408\u306e\u51e6\u7406\nelif \u25a1\u25a1:\n    \u25cb\u25cb\u304c\u5f53\u3066\u306f\u307e\u3089\u305a\u3001\u25a1\u25a1\u304c\u5f53\u3066\u306f\u307e\u308b\u5834\u5408\u306e\u51e6\u7406\nelse:\n    if, elif\u306e\u3069\u3061\u3089\u306b\u3082\u5f53\u3066\u306f\u307e\u3089\u306a\u3044\u5834\u5408\u306e\u51e6\u7406\n")),(0,i.kt)("p",null,"\u3067\u3059\u3002 "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u3067\u306f\u3001\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u305f\u5f8c\u306b\u30b3\u30ed\u30f3\u300c:\u300d\u3092\u305d\u306e\u884c\u306e\u6700\u5f8c\u306b\u3064\u3051\u3066\u3001\u6b21\u306e\u884c\u3092\u30a4\u30f3\u30c7\u30f3\u30c8\u3059\u308b(\u884c\u306e\u6700\u521d\u306b\u7a7a\u767d\u3092\u8a2d\u3051\u308b\u3053\u3068)\u306e\u304c\u6c7a\u307e\u308a\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u300c\u25cb\u25cb\u300d\u3084\u300c\u25a1\u25a1\u300d\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u306e\u3044\u305a\u308c\u304b\u306e\u30d6\u30fc\u30eb\u5024\u3092\u3068\u308b\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u306f\u300c\u5f53\u3066\u306f\u307e\u3063\u3066\u3044\u308b\u300d\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u306f\u300c\u5f53\u3066\u306f\u307e\u3063\u3066\u3044\u306a\u3044\u300d\u3068\u89e3\u91c8\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u6761\u4ef6\u5206\u5c90\u306e\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8 "),(0,i.kt)("img",{alt:"\u6761\u4ef6\u5206\u5c90\u306e\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8",src:(0,a.Z)("img/docs/control_flow_flowchart.png")}),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u4f8b\u3067\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u306e\u5f8c\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),"\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u5358\u4f53\u3067\u3082\u6a5f\u80fd\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u5358\u4f53\u306e\u3068\u304d\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u306e\u6761\u4ef6\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u306e\u5834\u5408\u306f\u300c\u4f55\u3082\u3057\u306a\u3044\u300d\u3068\u3044\u3046\u6307\u793a\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u307e\u305f\u3001\u4e0a\u8a18\u306e\u4f8b\u3067\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),"\u306f1\u500b\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u5b9f\u969b\u306f\u3044\u304f\u3064\u3067\u3082\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u305d\u308c\u3067\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u3092\u4f7f\u3063\u305f\u4f8b\u3092\u307f\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/3dbc1a2ba1",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myname = '\u7530\u4e2d'\nif myname == '\u9234\u6728':\n    print('\u9234\u6728\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002')\nelif myname == '\u7530\u4e2d':\n    print('\u7530\u4e2d\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002')\nelif myname == '\u4f50\u85e4':\n    print('\u4f50\u85e4\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002')\nelse:\n    print('\u3069\u3061\u3089\u69d8\u3067\u3059\u304b\uff1f')\n")),(0,i.kt)("p",null,"1\u884c\u76ee\u3067\u306f\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u300c\u7530\u4e2d\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u5165\u308c\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"2\u30013\u884c\u76ee\u3067\u306f\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306e\u4e2d\u8eab\u304c\u300c\u9234\u6728\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3067\u3042\u3063\u305f\u5834\u5408\u306f\u300c\u9234\u6728\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"4\uff0c5\u884c\u76ee\u3067\u306f\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306e\u4e2d\u8eab\u304c\u300c\u7530\u4e2d\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3067\u3042\u3063\u305f\u5834\u5408\u306f\u300c\u7530\u4e2d\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"5\u30016\u884c\u76ee\u3067\u306f\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306e\u4e2d\u8eab\u304c\u300c\u4f50\u85e4\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3067\u3042\u3063\u305f\u5834\u5408\u306f\u300c\u4f50\u85e4\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"7\u30018\u884c\u76ee\u3067\u306f\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306e\u4e2d\u8eab\u304c\u300c\u7530\u4e2d\u300d\u3067\u3082\u300c\u9234\u6728\u300d\u3067\u3082\u306a\u3044\u5834\u5408\u306f\u300c\u3069\u3061\u3089\u69d8\u3067\u3059\u304b\uff1f\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u3053\u306e\u72b6\u614b\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306e\u4e2d\u306b\u300c\u7530\u4e2d\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u304c\u5165\u308b\u306e\u3067\u3001\u300c\u7530\u4e2d\u3055\u3093\u3053\u3093\u306b\u3061\u306f\u3002\u300d\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u305d\u308c\u3067\u306f\u30011\u884c\u76ee\u306e\u300cmyname\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u300c\u658e\u85e4\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u5165\u308c\u305f\u3089\u4f55\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3055\u308c\u308b\u3067\u3057\u3087\u3046\u304b?\u5b9f\u969b\u306b\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,i.kt)("h3",{id:"\u30eb\u30fc\u30d7"},"\u30eb\u30fc\u30d7"),(0,i.kt)("p",null,"\u30eb\u30fc\u30d7\u3068\u306f\u3001\u3042\u308b\u7279\u5b9a\u306e\u51e6\u7406\u3092\u8907\u6570\u56de\u7e70\u308a\u8fd4\u3057\u884c\u3046\u3053\u3068\u3067\u3059\u3002\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3059\u308b\u6587\u306b\u306f\u4e3b\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\u3068",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u304c\u3042\u308a\u307e\u3059\u3002 "),(0,i.kt)("h4",{id:"while\u6587"},(0,i.kt)("inlineCode",{parentName:"h4"},"while"),"\u6587"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\u6587\u306f\u3001\u3042\u308b\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u3066\u3044\u308b\u9650\u308a\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3092\u884c\u3046\u5834\u5408\u306b\u7528\u3044\u3089\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u66f8\u304d\u65b9\u306f\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"while \u25cb\u25cb:\n    \u51e6\u7406\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\u6587\u3082\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u3068\u540c\u69d8\u306b\u3001\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u305f\u5f8c\u306b\u30b3\u30ed\u30f3\u300c:\u300d\u3092\u305d\u306e\u884c\u306e\u6700\u5f8c\u306b\u3064\u3051\u3066\u3001\u6b21\u306e\u884c\u3092\u30a4\u30f3\u30c7\u30f3\u30c8\u3057\u307e\u3059\u3002\u300c\u25cb\u25cb\u300d\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u306e\u3044\u305a\u308c\u304b\u306e\u30d6\u30fc\u30eb\u5024\u3092\u3068\u308b\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059\u3002 "),(0,i.kt)("p",null,"while\u30eb\u30fc\u30d7\u306e\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8 "),(0,i.kt)("img",{alt:"while\u30eb\u30fc\u30d7\u306e\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8",src:(0,a.Z)("img/docs/while_flowchart.png")}),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/7791091710",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"n = 1\nwhile n < 6:\n    print(n)\n    n = n +1\n")),(0,i.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001 "),(0,i.kt)("p",null,"1\u884c\u76ee\u3067\u300cn\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u300c1\u300d\u3068\u3044\u3046\u6574\u6570\u3092\u5165\u308c\u3001 "),(0,i.kt)("p",null,"2\u884c\u76ee\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\u6587\u3092\u4f7f\u3063\u3066\u300cn\u3068\u3044\u3046\u6574\u6570\u304c6\u672a\u6e80\u3067\u3042\u308b\u9593\u306f\u300d\u3068\u3044\u3046\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3001 "),(0,i.kt)("p",null,"3\u884c\u76ee\u3067\u300cn\u3092\u30d7\u30ea\u30f3\u30c8\u3059\u308b\u300d\u3001 "),(0,i.kt)("p",null,"4\u884c\u76ee\u3067\u300cn\u3068\u3044\u3046\u5909\u6570\u3092\u3001n\u306b1\u8db3\u3057\u305f\u5024\u3067\u4e0a\u66f8\u304d\u3059\u308b\u300d\u3068\u3044\u3046\u6307\u793a\u3092\u4e0e\u3048\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"4\u884c\u76ee\u3092\u5b9f\u884c\u3057\u305f\u5f8c\u3001python\u306f\u518d\u5ea62\u884c\u76ee\u306b\u623b\u308a\u30eb\u30fc\u30d7\u306e\u6761\u4ef6\u3092\u78ba\u8a8d\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"\u3067\u3042\u3063\u305f\u5834\u5408\u306f\u518d\u5ea63\u884c\u76ee\u30684\u884c\u76ee\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u300cn\u300d\u306e\u5024\u306f5\u56de\u76ee\u306e\u30eb\u30fc\u30d7\u306e\u6700\u5f8c\u3067\u300c6\u300d\u3068\u3044\u3046\u5024\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u30012\u884c\u76ee\u3067\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u300cn\u3068\u3044\u3046\u6574\u6570\u304c6\u672a\u6e80\u3067\u3042\u308b\u9593\u306f\u300d\u3068\u3044\u3046\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u305a",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"\u3068\u306a\u308b\u306e\u3067\u30eb\u30fc\u30d7\u306f\u7d42\u4e86\u3057\u307e\u3059\u3002 "),(0,i.kt)("h4",{id:"for\u6587"},(0,i.kt)("inlineCode",{parentName:"h4"},"for"),"\u6587"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6587\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u306b\u5bfe\u3057\u3066\u540c\u3058\u51e6\u7406\u3092\u7e70\u308a\u8fd4\u3059\u305f\u3081\u306b\u4f7f\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u66f8\u304d\u65b9\u306f\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"for \u25a1\u25a1 in \u3007\u3007:\n    \u51e6\u7406\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6587\u3082\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u6587\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"\u6587\u3068\u540c\u69d8\u306b\u3001\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u305f\u5f8c\u306b\u30b3\u30ed\u30f3\u300c:\u300d\u3092\u305d\u306e\u884c\u306e\u6700\u5f8c\u306b\u3064\u3051\u3066\u3001\u6b21\u306e\u884c\u3092\u30a4\u30f3\u30c7\u30f3\u30c8\u3057\u307e\u3059\u3002\u25cb\u25cb\u306b\u306f\u51e6\u7406\u3059\u308b\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u3092\u3001\u25a1\u25a1\u306b\u306f\u305d\u306e\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u306e\u4e2d\u306e\u5404\u30c7\u30fc\u30bf\u3092\u5165\u308c\u308b\u305f\u3081\u306e\u5909\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u6307\u5b9a\u3057\u305f\u5909\u6570\u306f\u7e70\u308a\u8fd4\u3057\u4f7f\u308f\u308c\u3001\u25cb\u25cb\u306e\u8981\u7d20\u306e\u6570\u3060\u3051\u3053\u306e\u5909\u6570\u3092\u4f7f\u3063\u3066\u300c\u51e6\u7406\u300d\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u306f\u305d\u308c\u81ea\u4f53\u304c1\u3064\u306e\u30c7\u30fc\u30bf\u3067\u3082\u3042\u308b\u306e\u3067\u3059\u304c\u3001\u3053\u306e\u3053\u3068\u306b\u3064\u3044\u3066\u306f\u30b9\u30c6\u30fc\u30b85\u3067\u8a73\u3057\u304f\u89e3\u8aac\u3057\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u4eca\u306e\u6bb5\u968e\u3067\u77e5\u3063\u3066\u3044\u308b\u30c7\u30fc\u30bf\u578b\u3060\u3068\u3001\u6587\u5b57\u5217\u304c\u305d\u308c\u306b\u3042\u305f\u308a\u307e\u3059\u3002\u6587\u5b57\u5217\u306f\u3001\u8907\u6570\u306e\u6587\u5b57\u306e\u96c6\u307e\u308a\u3060\u3068\u8a00\u3048\u307e\u3059\u3002\u6587\u5b57\u5217\u3092\u4f7f\u3063\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6587\u306e\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/52a4016e39",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"word = 'Hello World'\nfor i in word:\n    print(i)\n")),(0,i.kt)("p",null,"1\u884c\u76ee\u3067\u3001\u300cword\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u300c'Hello World'\u300d\u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u4ee3\u5165\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"2\u884c\u76ee\u3067\u3001\u300c\u300eword\u300f\u306e\u4e2d\u306e\u6587\u5b57\u305d\u308c\u305e\u308c\u306b\u3064\u3044\u3066\u300d\u3068\u3044\u3046\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u300ci\u300d\u306b\u306f\u3001\u30eb\u30fc\u30d7\u3054\u3068\u306b\u300cword\u300d\u306e\u4e2d\u306e\u6587\u5b57\u304c\u4e00\u3064\u305a\u3064\u9806\u756a\u306b\u4ee3\u5165\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"3\u884c\u76ee\u3067\u3001\u5404\u30eb\u30fc\u30d7\u306e\u300ci\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3053\u3068\u3092\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u3092\u898b\u308b\u3068\u3001\u300cword\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u6307\u5b9a\u3057\u305f\u300c'Hello World'\u300d\u306e\u4e2d\u306e\u6587\u5b57\u304c\u4e00\u6587\u5b57\u305a\u3064",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3055\u308c\u3066\u3044\u308b\u306e\u304c\u308f\u304b\u308a\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u3055\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6587\u304c\u6587\u5b57\u5217\u3067\u4f7f\u3048\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3057\u305f\u304c\u3001\u3084\u306f\u308a\u3042\u308b\u56de\u6570\u3092\u6307\u5b9a\u3057\u3066\u30eb\u30fc\u30d7\u3067\u51e6\u7406\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u305d\u3093\u306a\u3068\u304d\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"for \u25a1\u25a1 in \u3007\u3007:"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"\u3007\u3007"),"\u306e\u90e8\u5206\u306b\u6574\u6570\u306e\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u3092\u4e0e\u3048\u307e\u3059\u3002\u3053\u306e\u6574\u6570\u306e\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u3092\u4f5c\u308b\u6642\u306b\u4fbf\u5229\u306a\u306e\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"range()"),"\u95a2\u6570\u3067\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"range()"),"\u95a2\u6570\u306f\u300c\u3042\u308b\u6570\u4ee5\u4e0a\u3001\u3042\u308b\u6570\u672a\u6e80\u300d\u306e\u6574\u6570\u306e\u30c7\u30fc\u30bf\u306e\u96c6\u307e\u308a\u3092\u4f5c\u308a\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"range()"),"\u95a2\u6570\u3092\u4f7f\u3063\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"\u6587\u306e\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/375d0351a3",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my_numbers = range(1, 6)\nfor i in my_numbers:\n    print(i)\n")),(0,i.kt)("p",null,"1\u884c\u76ee\u3067\u3001\u300cmy_numbers\u300d\u3068\u3044\u3046\u5909\u6570\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"range()"),"\u95a2\u6570\u3067\u4f5c\u6210\u3057\u305f\u30011\u304b\u30895\u307e\u3067\u306e\u6574\u6570\u306e\u30c7\u30fc\u30bf\u3092\u4ee3\u5165\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"2\u884c\u76ee\u3067\u3001\u300c\u300emy_numbers\u300f\u306e\u4e2d\u306e\u6574\u6570\u305d\u308c\u305e\u308c\u306b\u3064\u3044\u3066\u300d\u3068\u3044\u3046\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u300ci\u300d\u306b\u306f\u3001\u30eb\u30fc\u30d7\u3054\u3068\u306b\u300cmy_numbers\u300d\u306e\u4e2d\u306e\u6574\u6570\u304c\u4e00\u3064\u305a\u3064\u9806\u756a\u306b\u4ee3\u5165\u3055\u308c\u307e\u3059\u3002 "),(0,i.kt)("p",null,"3\u884c\u76ee\u3067\u3001\u5404\u30eb\u30fc\u30d7\u306e\u300ci\u300d\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3059\u308b\u3053\u3068\u3092\u6307\u793a\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u7d50\u679c\u3092\u898b\u308b\u3068\u30011\u304b\u30895\u307e\u3067\u306e\u6574\u6570\u304c\u4e00\u3064\u305a\u3064",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),"\u3055\u308c\u3066\u3044\u308b\u306e\u304c\u308f\u304b\u308a\u307e\u3059\u3002 "),(0,i.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,i.kt)("p",null,"\u6b21\u306e\u9805\u3067\u5b9f\u969b\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u3044\u304d\u307e\u3059\u304c\u305d\u306e\u524d\u306b\u3082\u3046\u4e00\u3064\u3060\u3051\u3001\u30a8\u30e9\u30fc\u3068\u3044\u3046\u3082\u306e\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u81ea\u5206\u3067\u3044\u308d\u3044\u308d\u5b9f\u9a13\u3057\u3066\u307f\u305f\u4eba\u306f\u3059\u3067\u306b\u898b\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u306a\u306b\u304b\u554f\u984c\u304c\u3042\u3063\u3066\u5b9f\u884c\u304c\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u306bPython\u306f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u4e0b\u306e\u4f8b\u3092\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,i.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/4069409ef6",width:"100%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a + b\n")),(0,i.kt)("p",null,"\u5b9f\u884c\u3057\u305f\u3089\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6587\u7ae0\u304c\u51fa\u3066\u304d\u305f\u3068\u601d\u3044\u307e\u3059\u3002 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Traceback (most recent call last):\n  File \"/tmp/sessions/a3e809c329bf52ad/main.py\", line 1, in <module>\n    a + b\nNameError: name 'a' is not defined\n")),(0,i.kt)("p",null,"\u3053\u308c\u304c\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u3059\u3002 "),(0,i.kt)("p",null,"1\u884c\u76ee\u306f\u30a8\u30e9\u30fc\u306e\u969b\u306e\u304a\u6c7a\u307e\u308a\u306e\u6587\u7ae0\u3067\u3059\u3002 "),(0,i.kt)("p",null,"2\u884c\u76ee\u306f\u5b9f\u884c\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3068\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u884c(line\u3007\u3007)\u3001 "),(0,i.kt)("p",null,"3\u884c\u76ee\u306f\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u884c\u306e\u5177\u4f53\u7684\u306a\u8a18\u8ff0\u3001 "),(0,i.kt)("p",null,"4\u884c\u76ee\u306f\u30a8\u30e9\u30fc\u306e\u7a2e\u985e\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,i.kt)("p",null,"\u3053\u306e\u5834\u5408\u306f\u3001NameError: name 'a' is not defined\u3001\u3064\u307e\u308a\u3001\u300ca\u300d\u3068\u3044\u3046\u5909\u6570\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3001\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3067\u3059\u3002 "),(0,i.kt)("p",null,"\u30a8\u30e9\u30fc\u306e\u5bfe\u51e6\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"try"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"except"),"\u3068\u3044\u3063\u305f\u6587\u3092\u4f7f\u3063\u305f\u308a\u3068\u5965\u304c\u6df1\u3044\u306e\u3067\u3059\u304c\u3001\u4eca\u306f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u898b\u65b9\u3060\u3051\u899a\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"))}c.isMDXComponent=!0}}]);