"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},s="2.2.5 Build on OpenWRT",i={unversionedId:"contribute/source/os/openwrt",id:"contribute/source/os/openwrt",title:"2.2.5 Build on OpenWRT",description:"Please follow this tutorial to build and test WasmEdge in OpenWrt(x86_64) from source code.",source:"@site/docs/contribute/source/os/openwrt.md",sourceDirName:"contribute/source/os",slug:"/contribute/source/os/openwrt",permalink:"/book/zh-Hans/contribute/source/os/openwrt",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/source/os/openwrt.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"contributeSidebar",previous:{title:"2.2.4.4 Call WasmEdge functions from an Android APK app",permalink:"/book/zh-Hans/contribute/source/os/android/apk"},next:{title:"2.2.6 Build on RISC-V",permalink:"/book/zh-Hans/contribute/source/os/riscv"}},l={},p=[{value:"Prepare the Environment",id:"prepare-the-environment",level:2},{value:"OpenWrt",id:"openwrt",level:3},{value:"Build WasmEdge",id:"build-wasmedge",level:2},{value:"Get WasmEdge source code",id:"get-wasmedge-source-code",level:3},{value:"Run the build script",id:"run-the-build-script",level:3},{value:"Test",id:"test",level:2},{value:"Deploy OpenWrt in VMware",id:"deploy-openwrt-in-vmware",level:3},{value:"upload the test files",id:"upload-the-test-files",level:3},{value:"Test the wasmedge program",id:"test-the-wasmedge-program",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"225-build-on-openwrt"},"2.2.5 Build on OpenWRT"),(0,a.kt)("p",null,"Please follow this tutorial to build and test WasmEdge in OpenWrt(x86_64) from source code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently, we only support the runtime for the interpreter mode.")),(0,a.kt)("h2",{id:"prepare-the-environment"},"Prepare the Environment"),(0,a.kt)("h3",{id:"openwrt"},"OpenWrt"),(0,a.kt)("p",null,"First, we need to obtain the source code of OpenWrt and install the relevant tools to compile OpenWrt. The following commands take Debian / Ubuntu system as an example. For commands to install OpenWrt compilation tools in other host systems, see ",(0,a.kt)("a",{parentName:"p",href:"https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem"},"Building OpenWrt System Settings"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/openwrt/openwrt\n$ sudo apt update\n$ sudo apt install build-essential ccache ecj fastjar file g++ gawk \\\ngettext git java-propose-classpath libelf-dev libncurses5-dev \\\nlibncursesw5-dev libssl-dev python python2.7-dev python3 unzip wget \\\npython-distutils-extra python3-setuptools python3-dev rsync subversion \\\nswig time xsltproc zlib1g-dev \n")),(0,a.kt)("p",null,"Then, obtain all the latest package definitions of OpenWrt and install the symlinks for all obtained packages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd openwrt\n./scripts/feeds update -a\n./scripts/feeds install -a\n")),(0,a.kt)("h2",{id:"build-wasmedge"},"Build WasmEdge"),(0,a.kt)("h3",{id:"get-wasmedge-source-code"},"Get WasmEdge source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/WasmEdge.git\ncd WasmEdge\n")),(0,a.kt)("h3",{id:"run-the-build-script"},"Run the build script"),(0,a.kt)("p",null,"Run the build script ",(0,a.kt)("inlineCode",{parentName:"p"},"build_for_openwrt.sh")," in WasmEdge source code, and input the path of the OpenWrt source code as parameter. This script will automatically add the WasmEdge into the packages list which will be built of OpenWrt, and build the OpenWrt firmware. The generated OpenWrt images are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"openwrt/bin/targets/x86/64")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./utils/openwrt/build_for_openwrt.sh ~/openwrt\n")),(0,a.kt)("p",null,"When running the build script, the OpenWrt configuration interface will appear. In this interface, we need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"Target System")," to x86, ",(0,a.kt)("inlineCode",{parentName:"p"},"Target Profile")," to Generic x86/64, and find ",(0,a.kt)("inlineCode",{parentName:"p"},"WasmEdge")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," column and check it . Once set up, the script automatically builds WasmEdge and compiles the OpenWrt system."),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("h3",{id:"deploy-openwrt-in-vmware"},"Deploy OpenWrt in VMware"),(0,a.kt)("p",null,"In order to verify the availability of WasmEdge, we use a VMware virtual machine to install the compiled OpenWrt image. Before creating a virtual machine, we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"QEMU")," command to convert the OpenWrt image to vmdk format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/openwrt/bin/targets/x86/64\nsudo apt install qemu\ngunzip openwrt-x86-64-generic-squashfs-combined.img.gz\nqemu-img convert -f raw -O vmdk openwrt-x86-64-generic-squashfs-combined.img Openwrt.vmdk\n")),(0,a.kt)("p",null,"After that, create a virtual machine in VMware and install the OpenWrt system."),(0,a.kt)("h3",{id:"upload-the-test-files"},"upload the test files"),(0,a.kt)("p",null,"After setting the IP address of OpenWrt according to the gateway of the host, use ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," to transfer the wasm file on the host to the OpenWrt system."),(0,a.kt)("p",null,"For example, we set the ip address of OpenWrt as 192.168.0.111, then we use the following commands to upload ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/hello.wasm"},"hello.wasm")," and ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/examples/wasm/add.wasm"},"add.wasm")," these two test files to OpenWrt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scp hello.wasm root@192.168.0.111:/\nscp add.wasm root@192.168.0.111:/\n")),(0,a.kt)("h3",{id:"test-the-wasmedge-program"},"Test the wasmedge program"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge hello.wasm second state\nhello\nsecond\nstate\n$ wasmedge --reactor add.wasm add 2 2\n4\n")))}c.isMDXComponent=!0}}]);