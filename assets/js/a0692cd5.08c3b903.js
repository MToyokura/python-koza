(self.webpackChunkpython_koza=self.webpackChunkpython_koza||[]).push([[320],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return c},kt:function(){return h}});var r=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=r.createContext({}),p=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},c=function(t){var n=p(t.components);return r.createElement(u.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),y=p(e),h=o,d=y["".concat(u,".").concat(h)]||y[h]||s[h]||i;return e?r.createElement(d,l(l({ref:n},c),{},{components:e})):r.createElement(d,l({ref:n},c))}));function h(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,l=new Array(i);l[0]=y;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var p=2;p<i;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},3919:function(t,n,e){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}e.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(t,n,e){"use strict";e.d(n,{C:function(){return i},Z:function(){return l}});var r=e(2263),o=e(3919);function i(){var t=(0,r.Z)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,e=void 0===n?"/":n,i=t.url;return{withBaseUrl:function(t,n){return function(t,n,e,r){var i=void 0===r?{}:r,l=i.forcePrependBaseUrl,a=void 0!==l&&l,u=i.absolute,p=void 0!==u&&u;if(!e)return e;if(e.startsWith("#"))return e;if((0,o.b)(e))return e;if(a)return n+e;var c=e.startsWith(n)?e:n+e.replace(/^\//,"");return p?t+c:c}(i,e,t,n)}}}function l(t,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(t,n)}},3411:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var r=e(2122),o=e(9756),i=(e(7294),e(3905)),l=e(4996),a=["components"],u={id:"installing_python",title:"Python\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5 "},p=void 0,c={unversionedId:"installing_python",id:"installing_python",isDocsHomePage:!1,title:"Python\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5 ",description:"\u3053\u3053\u3067\u306fPython\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30d1\u30bd\u30b3\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u969b\u306e\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/installing_python.md",sourceDirName:".",slug:"/installing_python",permalink:"/python-koza/installing_python",editUrl:"https://github.com/MToyokura/python-koza/tree/master/docs/installing_python.md",version:"current",frontMatter:{id:"installing_python",title:"Python\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5 "},sidebar:"someSidebar",previous:{title:"\u8f9e\u66f8\u578b\u30c7\u30fc\u30bf",permalink:"/python-koza/dictionary"},next:{title:"trinket\u3068IDLE",permalink:"/python-koza/trinket_and_idle"}},s=[{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",children:[]},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"Python\u306e\u5b9f\u884c",id:"python\u306e\u5b9f\u884c",children:[]}],y={toc:s};function h(t){var n=t.components,e=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306fPython\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30d1\u30bd\u30b3\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u969b\u306e\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002 "),(0,i.kt)("p",null,"Python\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308b",(0,i.kt)("a",{href:"https://docs.python.org/ja/3/using/windows.html"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3082\u3042\u308b\u306e\u3067\u3001\u3082\u3063\u3068\u8a73\u3057\u3044\u3053\u3068\u304c\u77e5\u308a\u305f\u3044\u4eba\u306f\u305d\u3061\u3089\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,i.kt)("h2",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,i.kt)("p",null,"Python\u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306b\u884c\u304d\u307e\u3059\u3002 "),(0,i.kt)("p",null,"Python\u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8: ",(0,i.kt)("a",{href:"https://www.python.org/"},(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/"},"https://www.python.org/"))),(0,i.kt)("p",null,"\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306eDownloads\u3068\u66f8\u304b\u308c\u305f\u90e8\u5206\u306b\u30de\u30a6\u30b9\u3092\u79fb\u52d5\u3055\u305b\u307e\u3059\u3002 "),(0,i.kt)("img",{alt:"Types of Programming Languages",src:(0,l.Z)("img/docs/installing_python/home_downloads_1.png")}),(0,i.kt)("p",null,"\u3059\u308b\u3068\u3001Download for Windows\u3068\u3044\u3046\u30bf\u30a4\u30c8\u30eb\u306e\u753b\u9762\u3068\u3001\u305d\u306e\u4e0b\u306b\u300cPython 3.7.0\u300d\u3068\u66f8\u304b\u308c\u305f\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059(\u30dc\u30bf\u30f3\u306b\u66f8\u304b\u308c\u305f3.7.0\u3068\u3044\u3046\u6570\u5b57\u306f2018\u5e747\u6708\u6642\u70b9\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3067\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u66f4\u65b0\u3055\u308c\u6570\u5b57\u304c\u5909\u308f\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002)\u3002\u305d\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Python\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002 "),(0,i.kt)("img",{alt:"Types of Programming Languages",src:(0,l.Z)("img/docs/installing_python/home_downloads_2.png")}),(0,i.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,i.kt)("p",null,"\u5148\u7a0b\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,i.kt)("p",null,"\u5b9f\u884c\u3059\u308b\u3068\u4e0b\u306e\u3088\u3046\u306a\u753b\u9762\u304c\u3067\u3066\u304d\u307e\u3059\u3002\u3053\u306e\u753b\u9762\u3067\u3001",(0,i.kt)("b",null,"Add Python 3.7 to PATH"),"\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3001\u4e0a\u306b\u3042\u308b",(0,i.kt)("b",null,"Install Now"),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3059\u308b\u3068\u3001\u300c\u3053\u306e\u30a2\u30d7\u30ea\u304c\u30c7\u30d0\u30a4\u30b9\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u3053\u3068\u3092\u8a31\u53ef\u3057\u307e\u3059\u304b?\u300d\u3068\u3044\u3046\u753b\u9762\u304c\u51fa\u3066\u304f\u308b\u306e\u3067\u300c\u306f\u3044\u300d\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3061\u306a\u307f\u306b",(0,i.kt)("b",null,"Add Python 3.7 to PATH"),"\u306f\u3001Windows\u306e\u30b3\u30de\u30f3\u30c9\u30d7\u30ed\u30f3\u30d7\u30c8\u4e0a\u3067Python\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u306e\u9805\u76ee\u3067\u3059\u3002\u3053\u308c\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u304a\u304f\u3068pip\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u697d\u306b\u306a\u3063\u305f\u308a\u3057\u307e\u3059\u3002 "),(0,i.kt)("img",{alt:"Python setup 1",src:(0,l.Z)("img/docs/installing_python/python_setup_1.png")}),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3059\u308b\u3068\u4e0b\u306e\u3088\u3046\u306a\u753b\u9762\u304c\u51fa\u3066\u304d\u307e\u3059\u3002Close\u30dc\u30bf\u30f3\u306e\u4e0a\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b",(0,i.kt)("b",null,"Disable path length limit"),"\u306f\u73fe\u6642\u70b9\u3067\u306f\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304a\u304f\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u5c06\u6765\u7684\u306b\u5de8\u5927\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u5834\u5408\u306f\u5fc5\u8981\u306b\u306a\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u306e\u3067\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304a\u304f\u3068\u5b89\u5fc3\u3067\u3057\u3087\u3046\u3002 "),(0,i.kt)("img",{alt:"Python setup 2",src:(0,l.Z)("img/docs/installing_python/python_setup_2.png")}),(0,i.kt)("p",null,"\u3053\u308c\u3067Python\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u5b8c\u4e86\u3067\u3059\u3002 "),(0,i.kt)("h2",{id:"python\u306e\u5b9f\u884c"},"Python\u306e\u5b9f\u884c"),(0,i.kt)("p",null,"Windows10\u3067\u3042\u308c\u3070\u3001\u753b\u9762\u4e0b\u306e\u691c\u7d22\u753b\u9762\u3067Python\u3092\u691c\u7d22\u3059\u308b\u3068\u3001\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff08\u753b\u50cf\u306f\u4e00\u3064\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u3042\u308bPython3.6\u306e\u3082\u306e\u3067\u3059\u3002\uff09"),(0,i.kt)("img",{alt:"Windows10\u306ePython\u691c\u7d22",src:(0,l.Z)("img/docs/installing_python/python_search.png")}),(0,i.kt)("p",null,"1\u756a\u76ee\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308bPython 3.6 (32-bit) \u3068\u3044\u3046\u306e\u306fWindows\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u4e0a\u3067\u52d5\u4f5c\u3059\u308b\u5bfe\u8a71\u30e2\u30fc\u30c9\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u3067\u3059\u3002 "),(0,i.kt)("p",null,"2\u756a\u76ee\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306e\u306fPython\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u4e00\u89a7\u3067\u3059\u3002 "),(0,i.kt)("p",null,"3\u756a\u76ee\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306e\u306fIDLE\u3068\u547c\u3070\u308c\u308bPython\u7528\u306e\u7d71\u5408\u958b\u767a\u74b0\u5883\u3067\u3059\u3002 "),(0,i.kt)("p",null,"\u6700\u521d\u306f\u57fa\u672c\u7684\u306bIDLE\u4ee5\u5916\u306f\u4f7f\u308f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002IDLE\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("a",{parentName:"p",href:"trinket_and_idle"},"\u3053\u3061\u3089"),"\u3067\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"))}h.isMDXComponent=!0}}]);