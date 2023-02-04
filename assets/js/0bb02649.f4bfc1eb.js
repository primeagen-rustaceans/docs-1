"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="2.3.3 Build with WasmEdge-httpsReq Plugin",l={unversionedId:"contribute/source/plugin/httpsreq",id:"contribute/source/plugin/httpsreq",title:"2.3.3 Build with WasmEdge-httpsReq Plugin",description:"Prerequisites",source:"@site/docs/contribute/source/plugin/httpsreq.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/httpsreq",permalink:"/book/contribute/source/plugin/httpsreq",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/source/plugin/httpsreq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"contributeSidebar",previous:{title:"2.3.2 Build with WASI-nn Plugin",permalink:"/book/contribute/source/plugin/was_nn"},next:{title:"WasmEdge Plugin System",permalink:"/book/category/wasmedge-plugin-system"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WasmEdge-HttpsReq Plug-in",id:"build-wasmedge-with-wasmedge-httpsreq-plug-in",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"233-build-with-wasmedge-httpsreq-plugin"},"2.3.3 Build with WasmEdge-httpsReq Plugin"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Currently, WasmEdge used ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0")," for the the dependency of WasmEdge-HttpsReq."),(0,o.kt)("p",null,"For installing ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," development package on ",(0,o.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04"),", we recommend the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y libssl-dev\n")),(0,o.kt)("p",null,"For legacy systems such as ",(0,o.kt)("inlineCode",{parentName:"p"},"CensOS 7.6"),", or if you want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 1.1")," from source, you can refer to the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Download and extract the OpenSSL source to the current directory.\ncurl -s -L -O --remote-name-all https://www.openssl.org/source/openssl-1.1.1n.tar.gz\necho "40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a openssl-1.1.1n.tar.gz" | sha256sum -c\ntar -xf openssl-1.1.1n.tar.gz\ncd ./openssl-1.1.1n\n# OpenSSL configure need newer perl.\ncurl -s -L -O --remote-name-all https://www.cpan.org/src/5.0/perl-5.34.0.tar.gz\ntar -xf perl-5.34.0.tar.gz\ncd perl-5.34.0\nmkdir localperl\n./Configure -des -Dprefix=$(pwd)/localperl/\nmake -j\nmake install\nexport PATH="$(pwd)/localperl/bin/:$PATH"\ncd ..\n# Configure by previous perl.\nmkdir openssl\n./perl-5.34.0/localperl/bin/perl ./config --prefix=$(pwd)/openssl --openssldir=$(pwd)/openssl\nmake -j\nmake test\nmake install\ncd ..\n# The OpenSSL installation directory is at `$(pwd)/openssl-1.1.1n/openssl`.\n# Then you can use the `-DOPENSSL_ROOT_DIR=` option of cmake to assign the directory.\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We'll soon update this chapter to use ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSL 3.0"),".")),(0,o.kt)("h2",{id:"build-wasmedge-with-wasmedge-httpsreq-plug-in"},"Build WasmEdge with WasmEdge-HttpsReq Plug-in"),(0,o.kt)("p",null,"To enable the WasmEdge WasmEdge-HttpsReq, developers need to ",(0,o.kt)("a",{parentName:"p",href:"/book/contribute/source/os/linux"},"building the WasmEdge from source")," with the cmake option ",(0,o.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_HTTPSREQ=On"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\nmkdir -p build && cd build\n# For using self-get OpenSSL, you can assign the cmake option `-DOPENSSL_ROOT_DIR=<path/to/openssl>`.\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_HTTPSREQ=On .. && make -j\n# For the WasmEdge-HttpsReq plugin, you should install this project.\ncmake --install .\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the built ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WasmEdge-HttpsReq plug-in, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,o.kt)("inlineCode",{parentName:"p"},"build/plugins/wasmedge_httpsreq/"),") to try to fix this issue.")),(0,o.kt)("p",null,"Then you will have an executable ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WasmEdge-HttpsReq plug-in under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginHttpsReq.so")," after installation."))}c.isMDXComponent=!0}}]);