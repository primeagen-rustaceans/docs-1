"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return t?a.createElement(g,d(d({ref:n},m),{},{components:t})):a.createElement(g,d({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,d[1]=i;for(var l=2;l<r;l++)d[l]=t[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},d="2.2.4.3 Call WasmEdge functions from an NDK native app",i={unversionedId:"contribute/source/os/android/ndk",id:"contribute/source/os/android/ndk",title:"2.2.4.3 Call WasmEdge functions from an NDK native app",description:"In this section, we will demonstrate how to build an Android native application using C and the Android SDK. The native application uses the WasmEdge C SDK to embed the WasmEdge Runtime, and call WASM functions through WasmEdge.",source:"@site/docs/contribute/source/os/android/ndk.md",sourceDirName:"contribute/source/os/android",slug:"/contribute/source/os/android/ndk",permalink:"/book/zh-Hans/contribute/source/os/android/ndk",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/source/os/android/ndk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"contributeSidebar",previous:{title:"2.2.4.2 CLI Tools",permalink:"/book/zh-Hans/contribute/source/os/android/cli"},next:{title:"2.2.4.4 Call WasmEdge functions from an Android APK app",permalink:"/book/zh-Hans/contribute/source/os/android/apk"}},s={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Android",id:"android",level:3},{value:"Android development CLI",id:"android-development-cli",level:3},{value:"Android NDK",id:"android-ndk",level:3},{value:"Review of source code",id:"review-of-source-code",level:2},{value:"Build",id:"build",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Compile",id:"compile",level:3},{value:"Run",id:"run",level:2},{value:"Push files onto Android",id:"push-files-onto-android",level:3},{value:"Run the example",id:"run-the-example",level:3}],m={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2243-call-wasmedge-functions-from-an-ndk-native-app"},"2.2.4.3 Call WasmEdge functions from an NDK native app"),(0,o.kt)("p",null,"In this section, we will demonstrate how to build an Android native application using C and the Android SDK. The native application uses the WasmEdge C SDK to embed the WasmEdge Runtime, and call WASM functions through WasmEdge."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"Currently, WasmEdge only supports the arm64-v8a architecture on Android devices. You need an arm64-v8a Android simulator or a physical device with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"developer options turned on"),". WasmEdge requires Android 6.0 and above."),(0,o.kt)("h3",{id:"android-development-cli"},"Android development CLI"),(0,o.kt)("p",null,"In Ubuntu Linux, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get")," command to install Android debugging and testing tool ",(0,o.kt)("inlineCode",{parentName:"p"},"adb"),". Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"adb shell")," command on the Ubuntu dev machine, you can open a CLI shell to execute commands on the connected Android device."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install adb\n")),(0,o.kt)("h3",{id:"android-ndk"},"Android NDK"),(0,o.kt)("p",null,"To compile programs with the wasmedge-tensorflow c api, you need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.google.cn/ndk/downloads"},"Android NDK"),". In this example, we use the latest LTS version (r23b)."),(0,o.kt)("h2",{id:"review-of-source-code"},"Review of source code"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/blob/master/android/test.c"},(0,o.kt)("inlineCode",{parentName:"a"},"test.c"))," uses the wasmedge-tensorflow c api to run a WebAssembly function. The WebAssembly file ",(0,o.kt)("inlineCode",{parentName:"p"},"birds_v1.wasm")," is compiled from Rust source code and ",(0,o.kt)("a",{parentName:"p",href:"/book/zh-Hans/develop-guide/rust/ai_inference/tensorflow"},"explained here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include <wasmedge/wasmedge.h>\n#include <wasmedge/wasmedge-image.h>\n#include <wasmedge/wasmedge-tensorflowlite.h>\n\n#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n  /*\n   * argv[0]: ./a.out\n   * argv[1]: WASM file\n   * argv[2]: tflite model file\n   * argv[3]: image file\n   * Usage: ./a.out birds_v1.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n   */\n\n  /* Create the VM context. */\n  WasmEdge_ConfigureContext *ConfCxt = WasmEdge_ConfigureCreate();\n  WasmEdge_ConfigureAddHostRegistration(ConfCxt, WasmEdge_HostRegistration_Wasi);\n  WasmEdge_VMContext *VMCxt = WasmEdge_VMCreate(ConfCxt, NULL);\n  WasmEdge_ConfigureDelete(ConfCxt);\n  \n  /* Create the image and TFLite import objects. */\n  WasmEdge_ModuleInstanceContext *ImageImpObj = WasmEdge_Image_ModuleInstanceCreate();\n  WasmEdge_ModuleInstanceContext *TFLiteImpObj = WasmEdge_TensorflowLite_ModuleInstanceCreate();\n  WasmEdge_ModuleInstanceContext *TFDummyImpObj = WasmEdge_Tensorflow_ModuleInstanceCreateDummy();\n\n  /* Register into VM. */\n  WasmEdge_VMRegisterModuleFromImport(VMCxt, ImageImpObj);\n  WasmEdge_VMRegisterModuleFromImport(VMCxt, TFLiteImpObj);\n  WasmEdge_VMRegisterModuleFromImport(VMCxt, TFDummyImpObj);\n\n  /* Init WASI. */\n  const char *Preopens[] = {".:."};\n  const char *Args[] = {argv[1], argv[2], argv[3]};\n  WasmEdge_ModuleInstanceContext *WASIImpObj = WasmEdge_VMGetImportModuleContext(VMCxt, WasmEdge_HostRegistration_Wasi);\n  WasmEdge_ModuleInstanceInitWASI(WASIImpObj, Args, 3, NULL, 0, Preopens, 1);\n\n  /* Run WASM file. */\n  WasmEdge_String FuncName = WasmEdge_StringCreateByCString("_start");\n  WasmEdge_Result Res = WasmEdge_VMRunWasmFromFile(VMCxt, argv[1], FuncName, NULL, 0, NULL, 0);\n  WasmEdge_StringDelete(FuncName);\n\n  /* Check the result. */\n  if (!WasmEdge_ResultOK(Res)) {\n    printf("Run WASM failed: %s\\n", WasmEdge_ResultGetMessage(Res));\n    return -1;\n  }\n\n  WasmEdge_ModuleInstanceDelete(ImageImpObj);\n  WasmEdge_ModuleInstanceDelete(TFLiteImpObj);\n  WasmEdge_ModuleInstanceDelete(TFDummyImpObj);\n  WasmEdge_VMDelete(VMCxt);\n  return 0;\n}\n')),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Use the following commands to download WasmEdge for Android on your Ubuntu dev machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/WasmEdge/WasmEdge/releases/download/{{ wasmedge_version }}/WasmEdge-{{ wasmedge_version }}-android_aarch64.tar.gz\nwget https://github.com/second-state/WasmEdge-image/releases/download/{{ wasmedge_version }}/WasmEdge-image-{{ wasmedge_version }}-android_aarch64.tar.gz\nwget https://github.com/second-state/WasmEdge-tensorflow/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflowlite-{{ wasmedge_version }}-android_aarch64.tar.gz\nwget https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/{{ wasmedge_version }}/WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-android_aarch64.tar.gz\ntar -zxf WasmEdge-{{ wasmedge_version }}-android_aarch64.tar.gz\ntar -zxf WasmEdge-image-{{ wasmedge_version }}-android_aarch64.tar.gz -C WasmEdge-{{ wasmedge_version }}-Android/\ntar -zxf WasmEdge-tensorflowlite-{{ wasmedge_version }}-android_aarch64.tar.gz -C WasmEdge-{{ wasmedge_version }}-Android/\ntar -zxf WasmEdge-tensorflow-deps-TFLite-{{ wasmedge_version }}-android_aarch64.tar.gz -C WasmEdge-{{ wasmedge_version }}-Android/lib/\n")),(0,o.kt)("h3",{id:"compile"},"Compile"),(0,o.kt)("p",null,"The following command compiles the C program to ",(0,o.kt)("inlineCode",{parentName:"p"},"a.out")," on your Ubunu dev machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(/path/to/ndk)/toolchains/llvm/prebuilt/(HostPlatform)/bin/aarch64-linux-(AndroidApiVersion)-clang test.c -I./WasmEdge-{{ wasmedge_version }}-Android/include -L./WasmEdge-{{ wasmedge_version }}-Android/lib -lwasmedge-image_c -lwasmedge-tensorflowlite_c -ltensorflowlite_c -lwasmedge\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("h3",{id:"push-files-onto-android"},"Push files onto Android"),(0,o.kt)("p",null,"Install the compiled program, Tensorflow Lite model file, test image file, as well as WasmEdge shared library files for Android, onto the Android device using ",(0,o.kt)("inlineCode",{parentName:"p"},"adb")," from your Ubuntu dev machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adb push a.out /data/local/tmp\nadb push birds_v1.wasm /data/local/tmp\nadb push lite-model_aiy_vision_classifier_birds_V1_3.tflite /data/local/tmp\nadb push bird.jpg /data/local/tmp\nadb push ./WasmEdge-{{ wasmedge_version }}-Android/lib /data/local/tmp\n")),(0,o.kt)("h3",{id:"run-the-example"},"Run the example"),(0,o.kt)("p",null,"Now you can run the compiled C program on the Android device via a remote shell command. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"adb shell")," from your Ubuntu dev machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ adb shell\nsirius:/ $ cd /data/local/tmp\nsirius:/data/local/tmp $ export LD_LIBRARY_PATH=/data/local/tmp/lib:$LD_LIBRARY_PATH\nsirius:/data/local/tmp $ ./a.out birds_v1.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\nINFO: Initialized TensorFlow Lite runtime.\n166 : 0.84705883\n")))}u.isMDXComponent=!0}}]);