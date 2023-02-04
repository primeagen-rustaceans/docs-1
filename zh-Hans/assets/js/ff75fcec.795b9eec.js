"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="6 WasmEdge Internal",c={unversionedId:"contribute/internal",id:"contribute/internal",title:"6 WasmEdge Internal",description:"Overview of WasmEdge Execution Flow",source:"@site/docs/contribute/internal.md",sourceDirName:"contribute",slug:"/contribute/internal",permalink:"/book/zh-Hans/contribute/internal",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/internal.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"contributeSidebar",previous:{title:"5 Fuzzing",permalink:"/book/zh-Hans/contribute/fuzzing"},next:{title:"7 Installer System explanation",permalink:"/book/zh-Hans/contribute/installer"}},l={},s=[{value:"Overview of WasmEdge Execution Flow",id:"overview-of-wasmedge-execution-flow",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-wasmedge-internal"},"6 WasmEdge Internal"),(0,o.kt)("h2",{id:"overview-of-wasmedge-execution-flow"},"Overview of WasmEdge Execution Flow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\n    A[Wasm] --\x3e|From files or buffers| B(Loader)\n    B --\x3e|Create Wasm AST| C(Validator)\n    C --\x3e|Validate Wasm Module| D[Instantiator]\n    D --\x3e|Create Wasm instances| E{AOT section found?}\n    E --\x3e|Yes| F[AOT Engine]\n    E --\x3e|No| G[Interpreter Engine]\n    F <--\x3e|Execute Wasm| H[WasmEdge Engine]\n    G <--\x3e|Execute Wasm| H[WasmEdge Engine]\n    H --\x3e|Host Function Call / Access Runtime Data| H1[WasmEdge Runtime]\n    H1 <--\x3e|Call Host Functions| I[Host Functions]\n    H1 <--\x3e|Access Runtime Data| J[Runtime Data Manager]\n    I <--\x3e|System Call| I1[Wasm System Interface, WASI]\n    I <--\x3e|AI-related Function Call| I2[WASI-NN]\n    I <--\x3e|Crypto-related Function Call| I3[WASI-Crypto]\n    I <--\x3e|Socket-related Function Call| I4[WasmEdge-WASI-Socket]\n    J <--\x3e|Access Memory| J1[Memory Manager]\n    J <--\x3e|Access Stack| J2[Stack Manager]\n    J <--\x3e|Access Cross Module| J3[Registered Module/Function Manager]\n")))}m.isMDXComponent=!0}}]);