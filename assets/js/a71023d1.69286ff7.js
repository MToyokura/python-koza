"use strict";(self.webpackChunkpython_koza=self.webpackChunkpython_koza||[]).push([[737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,k=f["".concat(p,".").concat(d)]||f[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={id:"practice_2",title:"\u5b9f\u8df5 2"},p=void 0,c={unversionedId:"practice_2",id:"practice_2",title:"\u5b9f\u8df5 2",description:"\u30ea\u30b9\u30c8\u578b\u30c7\u30fc\u30bf\u3068\u30e1\u30bd\u30c3\u30c9\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u7d20\u6570\u3092\u5224\u5225\u3059\u308bprime_function()\u95a2\u6570\u3092\u4f5c\u308a\u307e\u3059\u3002",source:"@site/docs/practice_2.md",sourceDirName:".",slug:"/practice_2",permalink:"/python-koza/practice_2",editUrl:"https://github.com/MToyokura/python-koza/tree/master/docs/practice_2.md",tags:[],version:"current",frontMatter:{id:"practice_2",title:"\u5b9f\u8df5 2"},sidebar:"someSidebar",previous:{title:"\u30b9\u30c6\u30fc\u30b85\uff1a\u30ea\u30b9\u30c8\u3001\u30e1\u30bd\u30c3\u30c9",permalink:"/python-koza/stage_5"},next:{title:"\u5b9f\u8df5 3",permalink:"/python-koza/practice_3"}},u=[{value:"\u6750\u6599",id:"\u6750\u6599",children:[],level:3},{value:"\u7b54\u3048",id:"\u7b54\u3048",children:[],level:3}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30ea\u30b9\u30c8\u578b\u30c7\u30fc\u30bf\u3068\u30e1\u30bd\u30c3\u30c9\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u7d20\u6570\u3092\u5224\u5225\u3059\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"prime_function()"),"\u95a2\u6570\u3092\u4f5c\u308a\u307e\u3059\u3002 "),(0,a.kt)("p",null,"\u5bfe\u8a71\u30e2\u30fc\u30c9\u3067\u3042\u308c\u3070\u4e0b\u306e\u3088\u3046\u306a\u6319\u52d5\u3092\u793a\u3057\u307e\u3059\u3002 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> prime_function(456)\n456 \u306f\u30011\u3068456\u4ee5\u5916\u306b\u4ee5\u4e0b\u306e\u7d04\u6570\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\n[2, 3, 4, 6, 8, 12, 19, 24, 38, 57, 76, 114, 152, 228]\n>>> prime_function(4567)\n4567 \u306f\u7d20\u6570\u3067\u3059!\n")),(0,a.kt)("p",null,"\u95a2\u6570\u306e\u4e2d\u8eab\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5185\u5bb9\u306b\u306a\u308a\u307e\u3059\u3002 "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7a7a\u306e\u30ea\u30b9\u30c8\u3092\u7528\u610f\u3059\u308b\u3002 "),(0,a.kt)("li",{parentName:"ol"},"\u5f15\u6570\u3068\u3057\u3066\u4e0e\u3048\u3089\u308c\u305f\u6570\u307e\u30672\u304b\u3089\u9806\u306b\u5272\u3063\u3066\u3001\u4f59\u308a\u304c0\u306e\u5834\u5408\u306f\u305d\u306e\u6570\u3092\u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3002 "),(0,a.kt)("li",{parentName:"ol"},"\u6700\u7d42\u7684\u306b\u7d04\u6570\u306e\u30ea\u30b9\u30c8\u304c\u7a7a\u306e\u5834\u5408\u306f\u300c\u7d20\u6570\u3067\u3042\u308b\u300d\u3068",(0,a.kt)("inlineCode",{parentName:"li"},"print()"),"\u3059\u308b\u3002 "),(0,a.kt)("li",{parentName:"ol"},"\u7d04\u6570\u306e\u30ea\u30b9\u30c8\u304c\u7a7a\u3067\u306f\u306a\u3044\u5834\u5408\u306f\u30ea\u30b9\u30c8\u3092",(0,a.kt)("inlineCode",{parentName:"li"},"print()"),"\u3059\u308b\u3002 ")),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u4e0a\u306e\u624b\u9806\u3092\u53c2\u8003\u306b\u3057\u3001\u4ee5\u4e0b\u306e\u6750\u6599\u3092\u4f7f\u3063\u3066\u4e0b\u306eIDE\u306e3\u884c\u76ee\u4ee5\u964d\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002 "),(0,a.kt)("h3",{id:"\u6750\u6599"},"\u6750\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"=="),", \u306a\u3069\u306e\u30aa\u30da\u30ec\u30fc\u30bf\u30fc "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"for")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"range()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"else")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u30ea\u30b9\u30c8.append(i)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len()"))),(0,a.kt)("iframe",{allowfullscreen:"",frameborder:"0",height:"356",marginheight:"0",marginwidth:"0",src:"https://trinket.io/embed/python3/b6f6e7ffcc?runOption=run",width:"100%"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def prime_function():\n    \u7d04\u6570\u30ea\u30b9\u30c8 = []\n")),(0,a.kt)("h3",{id:"\u7b54\u3048"},"\u7b54\u3048"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trinket\u7248\u306e\u7b54\u3048: ",(0,a.kt)("a",{href:"https://trinket.io/python3/5fdd6e3e1a",target:"_blank"},(0,a.kt)("a",{parentName:"li",href:"https://trinket.io/python3/5fdd6e3e1a"},"https://trinket.io/python3/5fdd6e3e1a"))),(0,a.kt)("li",{parentName:"ul"},"\u30c6\u30ad\u30b9\u30c8\u7248\u306e\u7b54\u3048: ",(0,a.kt)("a",{parentName:"li",href:"practice_2_answer"},"\u3053\u3061\u3089"))),(0,a.kt)("p",null,"\u203b\u3053\u306e\u5b9f\u8df5\u3067\u306f\u6570\u5b66\u7684\u306a\u6b63\u78ba\u3055\u306f\u6c42\u3081\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u300c1\u300d\u3084\u300c0\u300d\u3001\u8ca0\u306e\u6570\u306e\u53d6\u308a\u6271\u3044\u65b9\u306b\u3064\u3044\u3066\u306f\u7121\u8996\u3057\u3066\u3044\u307e\u3059\u3002 "),(0,a.kt)("p",null,"\u3068\u3053\u308d\u3067\u3001\u5b9f\u8df5\u306e\u4e2d\u8eab\u3068\u306f\u95a2\u4fc2\u306e\u306a\u3044\u4f59\u8ac7\u3067\u3059\u304c\u3001\u7b54\u3048\u306e\u30b3\u30fc\u30c9\u306e\u4e2d\u306b\u300c#\u300d\u304c\u3042\u308a\u307e\u3059\u306d\u3002\u3053\u306e\u8a18\u53f7\u306f\u30b3\u30e1\u30f3\u30c8\u3092\u633f\u5165\u3059\u308b\u969b\u306b\u4f7f\u308f\u308c\u308b\u3082\u306e\u3067\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u5185\u5bb9\u3092\u30e1\u30e2\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002\u3042\u308b\u884c\u306e\u3053\u306e\u8a18\u53f7\u4ee5\u964d\u306e\u6587\u5b57\u306f\u300c\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8\u300d\u3055\u308c\u3001Python\u306f\u3053\u308c\u3092\u7121\u8996\u3057\u3066\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);