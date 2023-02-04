"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,p=m["".concat(d,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(p,s(s({ref:t},u),{},{components:n})):a.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},s="4.2 Use WasmEdge Library",o={unversionedId:"embed-guide/c/library",id:"embed-guide/c/library",title:"4.2 Use WasmEdge Library",description:"When programming with WasmEdge C API, developers should include the required headers and link with the WasmEdge Library.",source:"@site/docs/embed-guide/c/library.md",sourceDirName:"embed-guide/c",slug:"/embed-guide/c/library",permalink:"/book/embed-guide/c/library",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/embed-guide/c/library.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"embedSidebar",previous:{title:"4.1 WasmEdge C SDK Introduction",permalink:"/book/embed-guide/c/intro"},next:{title:"4.3 Host Functions",permalink:"/book/embed-guide/c/host_function"}},d={},l=[{value:"Link with WasmEdge Shared Library",id:"link-with-wasmedge-shared-library",level:2},{value:"Link with WasmEdge Static Library",id:"link-with-wasmedge-static-library",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"42-use-wasmedge-library"},"4.2 Use WasmEdge Library"),(0,r.kt)("h1",{id:"use-the-wasmedge-library"},"Use the WasmEdge Library"),(0,r.kt)("p",null,"When programming with WasmEdge C API, developers should include the required headers and link with the WasmEdge Library.\nBesides ",(0,r.kt)("a",{parentName:"p",href:"/book/develop-guide/build-and-run/install"},"install WasmEdge")," with the WasmEdge shared library, developers can also ",(0,r.kt)("a",{parentName:"p",href:"/book/contribute/source/build_from_src"},"build WasmEdge")," to generate the WasmEdge static library."),(0,r.kt)("p",null,"Assume the example ",(0,r.kt)("inlineCode",{parentName:"p"},"test.c"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wasmedge/wasmedge.h>\n\n/* Host function body definition. */\nWasmEdge_Result Add(void *Data,\n                    const WasmEdge_CallingFrameContext *CallFrameCxt,\n                    const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  int32_t Val1 = WasmEdge_ValueGetI32(In[0]);\n  int32_t Val2 = WasmEdge_ValueGetI32(In[1]);\n  printf("Host function \\"Add\\": %d + %d\\n", Val1, Val2);\n  Out[0] = WasmEdge_ValueGenI32(Val1 + Val2);\n  return WasmEdge_Result_Success;\n}\n\nint main() {\n  /* Create the VM context. */\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(NULL, NULL);\n\n  /* The WASM module buffer. */\n  uint8_t WASM[] = {/* WASM header */\n                    0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00,\n                    /* Type section */\n                    0x01, 0x07, 0x01,\n                    /* function type {i32, i32} -> {i32} */\n                    0x60, 0x02, 0x7F, 0x7F, 0x01, 0x7F,\n                    /* Import section */\n                    0x02, 0x13, 0x01,\n                    /* module name: "extern" */\n                    0x06, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6E,\n                    /* extern name: "func-add" */\n                    0x08, 0x66, 0x75, 0x6E, 0x63, 0x2D, 0x61, 0x64, 0x64,\n                    /* import desc: func 0 */\n                    0x00, 0x00,\n                    /* Function section */\n                    0x03, 0x02, 0x01, 0x00,\n                    /* Export section */\n                    0x07, 0x0A, 0x01,\n                    /* export name: "addTwo" */\n                    0x06, 0x61, 0x64, 0x64, 0x54, 0x77, 0x6F,\n                    /* export desc: func 0 */\n                    0x00, 0x01,\n                    /* Code section */\n                    0x0A, 0x0A, 0x01,\n                    /* code body */\n                    0x08, 0x00, 0x20, 0x00, 0x20, 0x01, 0x10, 0x00, 0x0B};\n\n  /* Create the module instance. */\n  WasmEdge_String ExportName = WasmEdge_StringCreateByCString("extern");\n  WasmEdge_ModuleInstanceContext *HostModCxt =\n      WasmEdge_ModuleInstanceCreate(ExportName);\n  enum WasmEdge_ValType ParamList[2] = {WasmEdge_ValType_I32,\n                                        WasmEdge_ValType_I32};\n  enum WasmEdge_ValType ReturnList[1] = {WasmEdge_ValType_I32};\n  WasmEdge_FunctionTypeContext *HostFType =\n      WasmEdge_FunctionTypeCreate(ParamList, 2, ReturnList, 1);\n  WasmEdge_FunctionInstanceContext *HostFunc =\n      WasmEdge_FunctionInstanceCreate(HostFType, Add, NULL, 0);\n  WasmEdge_FunctionTypeDelete(HostFType);\n  WasmEdge_String HostFuncName = WasmEdge_StringCreateByCString("func-add");\n  WasmEdge_ModuleInstanceAddFunction(HostModCxt, HostFuncName, HostFunc);\n  WasmEdge_StringDelete(HostFuncName);\n\n  WasmEdge_VMRegisterModuleFromImport(VMCxt, HostModCxt);\n\n  /* The parameters and returns arrays. */\n  WasmEdge_Value Params[2] = {WasmEdge_ValueGenI32(1234),\n                              WasmEdge_ValueGenI32(5678)};\n  WasmEdge_Value Returns[1];\n  /* Function name. */\n  WasmEdge_String FuncName = WasmEdge_StringCreateByCString("addTwo");\n  /* Run the WASM function from file. */\n  WasmEdge_Result Res = WasmEdge_VMRunWasmFromBuffer(\n      VMCxt, WASM, sizeof(WASM), FuncName, Params, 2, Returns, 1);\n\n  if (WasmEdge_ResultOK(Res)) {\n    printf("Get the result: %d\\n", WasmEdge_ValueGetI32(Returns[0]));\n  } else {\n    printf("Error message: %s\\n", WasmEdge_ResultGetMessage(Res));\n  }\n\n  /* Resources deallocations. */\n  WasmEdge_VMDelete(VMCxt);\n  WasmEdge_StringDelete(FuncName);\n  WasmEdge_ModuleInstanceDelete(HostModCxt);\n  return 0;\n}\n')),(0,r.kt)("p",null,"This example will execute a WASM which call into a host function to add 2 numbers."),(0,r.kt)("h2",{id:"link-with-wasmedge-shared-library"},"Link with WasmEdge Shared Library"),(0,r.kt)("p",null,"To link the executable with the WasmEdge shared library is easy. Just compile the example file after installation of WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ gcc test.c -lwasmedge -o test\n$ ./test\nHost function "Add": 1234 + 5678\nGet the result: 6912\n')),(0,r.kt)("h2",{id:"link-with-wasmedge-static-library"},"Link with WasmEdge Static Library"),(0,r.kt)("p",null,"For preparing the WasmEdge static library, developers should ",(0,r.kt)("a",{parentName:"p",href:"/book/contribute/source/build_from_src#cmake-building-options"},"build WasmEdge from source")," with the options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Recommend to use the `wasmedge/wasmedge:latest` docker image. This will provide the required packages.\n# In the WasmEdge source directory\ncmake -Bbuild -GNinja -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_LINK_LLVM_STATIC=ON -DWASMEDGE_BUILD_SHARED_LIB=Off -DWASMEDGE_BUILD_STATIC_LIB=On -DWASMEDGE_LINK_TOOLS_STATIC=On -DWASMEDGE_BUILD_PLUGINS=Off\ncmake --build build\ncmake --install build\n")),(0,r.kt)("p",null,"The cmake option ",(0,r.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_LINK_LLVM_STATIC=ON")," will turn on the static library building, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_BUILD_SHARED_LIB=Off")," will turn off the shared library building."),(0,r.kt)("p",null,"After installation, developers can compile the example file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Note: only the Linux platforms need the `-lrt`. The MacOS platforms not need this linker flag.\n$ gcc test.c -lwasmedge -lrt -ldl -pthread -lm -lstdc++ -o test\n$ ./test\nHost function "Add": 1234 + 5678\nGet the result: 6912\n')))}m.isMDXComponent=!0}}]);