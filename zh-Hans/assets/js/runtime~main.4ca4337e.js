(()=>{"use strict";var e,a,c,b,d,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=f,r.c=t,e=[],r.O=(a,c,b,d)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&d||f>=d)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,d<f&&(f=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,b,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var f={};a=a||[null,c({}),c([]),c(c)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(d,f),d},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({21:"db04083b",53:"935f2afb",281:"7d55b5e2",367:"3f08a2b3",375:"3a206099",446:"9189d665",498:"ff75fcec",522:"0402b1c7",661:"6422441f",666:"de47024b",876:"1fabf6b0",975:"e659317d",1090:"eacb4fc3",1413:"787dd9f7",1522:"c3e89b9d",1580:"b836a66e",1655:"cbc6039d",1656:"2192f54b",1714:"d9cdd8d2",1855:"56b44d07",1879:"3b153090",1891:"7198433e",1903:"2ef44695",1930:"2ec20889",2166:"455b5324",2365:"b1fd7cb4",2470:"aae5bef1",2487:"39a34709",2531:"a9a005c2",2676:"739db9ec",2743:"19152c3d",2762:"b977c364",2764:"a2cfed72",2776:"9cc6718f",2810:"6a634139",2882:"46797304",2945:"452ace2c",3085:"1f391b9e",3099:"c9bf898e",3122:"4b698f6f",3256:"63dea259",3285:"f8ba4f42",3310:"4db4a19b",3354:"cc6c513a",3365:"9c953695",3458:"c663a53c",3490:"f757d4f5",3558:"58842413",3591:"0ca7c6d9",3592:"397f901d",3732:"cd6318fb",3811:"6590f045",3843:"deb2d497",4130:"e4fba534",4181:"40becb22",4195:"c4f5d8e4",4506:"1e18241d",4541:"bfc76bad",4686:"906db0ed",4844:"560baf7e",4921:"794e8f9f",5020:"8e0cd2ff",5022:"30f88508",5058:"4a5e354f",5076:"70c0a137",5096:"e19da909",5158:"6d40a6e9",5167:"e7de89bd",5173:"4b7d277b",5228:"f9323c1c",5241:"9b13b163",5255:"3b435a04",5353:"0bb02649",5426:"6faf095d",5470:"0e2445a8",5524:"b78e7789",5668:"338d3fa8",5688:"4298c4f5",5785:"1f84e766",5820:"e3ceb4f4",5918:"42d3ccd1",5945:"89ea910b",6026:"d44c9043",6062:"9ce85510",6126:"e440ae75",6201:"fb6d84aa",6449:"a2fe9a4b",6468:"ccfe00fb",6530:"85648bee",6541:"649c46e9",6591:"816162fc",6602:"17e07b88",6666:"6e7071d1",6681:"34c250fd",6718:"639a8f02",6719:"b663776b",6768:"32027ce3",7012:"4a6e8eae",7023:"33beb692",7050:"3713057f",7171:"1b37b865",7269:"a0f00cde",7297:"5b436485",7321:"91ed4af6",7376:"7a4e8abe",7414:"393be207",7478:"1818ce99",7484:"bbb12fca",7493:"b1eea551",7517:"1655867d",7545:"aeb7c24a",7590:"e579b1f4",7644:"833d543f",7713:"2611c91e",7728:"f4a8f7dd",7887:"0a64acd0",7889:"ae3dce49",7918:"17896441",7970:"019e8c32",8016:"7c88a8c9",8018:"c3f48c01",8020:"5ddf4091",8077:"fd2102c8",8148:"ad77907d",8165:"4c731f24",8182:"13d48269",8210:"12a938b1",8216:"2fa3be3f",8223:"68b9935b",8247:"bdc41217",8298:"078b943a",8492:"8d8ccdca",8506:"958750e3",8576:"345c05f4",8745:"adaa5c0b",8823:"54a7b32e",8838:"49331eed",8860:"7c717e4f",8863:"a2936dad",8937:"1029b3d4",8991:"84b88873",8999:"f10e14a0",9153:"b8ca1fd4",9166:"829c07d5",9185:"53e86c4a",9242:"db3c9d75",9250:"7660780d",9286:"c142228a",9468:"b5ada569",9483:"617c7cfe",9514:"1be78505",9516:"eb6ebf3c",9702:"74c0a308",9792:"b660a197",9817:"14eb3368",9862:"52d1891a",9887:"956db902",9923:"1262e16f",9943:"3ec41a7f",9976:"fefc1257"}[e]||e)+"."+{21:"60cefb3d",53:"ed2270c0",281:"290573f7",367:"039926fa",375:"1f572e8d",446:"2f23622e",498:"795b9eec",522:"6326a5cf",661:"bf7d82f2",666:"222ecd09",876:"28528cef",975:"54b911bd",1090:"7d88e429",1413:"efb5040f",1522:"c2b06fa8",1580:"2a58fd1b",1655:"124be1e2",1656:"1fdf47bf",1714:"2a4a656c",1855:"009e937d",1879:"4c594622",1891:"280df961",1903:"7563fbb0",1930:"fb892d27",2166:"34932ce3",2365:"dcf240c1",2470:"d90905a5",2487:"a5aaa71b",2531:"8eca9fd1",2666:"a14a3352",2676:"1f7e9bdc",2743:"476ef5f3",2762:"1b22bd24",2764:"2512c84a",2776:"59ea9faf",2810:"9c8c5769",2882:"eb734281",2945:"762fa37d",3085:"da85b74c",3099:"719a6111",3122:"92ddaf35",3256:"06f12aad",3285:"d82b6941",3310:"85bbe1e2",3354:"4247a16a",3365:"8052bca7",3458:"3605ca57",3490:"ad590d98",3558:"f8028f01",3591:"d9397c94",3592:"999dcd1d",3732:"50681a56",3811:"e2f31a62",3843:"76d8c4fe",4130:"010ce53d",4181:"e76220cf",4195:"2b5cfd8d",4506:"27d51a87",4541:"ddae1df2",4686:"e26bd1b1",4844:"38d2064c",4921:"991ad66d",4972:"b6ce05fe",5020:"71499643",5022:"a6c64e61",5058:"63900ee3",5076:"81076765",5096:"422e3edc",5158:"c6911865",5167:"c19df12b",5173:"ec43ee78",5228:"9e3ee9f5",5241:"a895c168",5255:"d5b83f24",5353:"ae3dafda",5426:"1bc9e708",5470:"f5ae8c6a",5524:"40ae35ba",5668:"f0f6abf2",5688:"916f8930",5785:"12f5a939",5820:"53ea0ca1",5918:"815a80f0",5945:"43aea341",6026:"be9ad459",6062:"a8cc1b3d",6126:"acc261b4",6201:"9e9994ce",6449:"29caee4c",6468:"73f6aafe",6530:"3fd3e8d2",6541:"d4deec5f",6591:"ab1c9399",6602:"8520c945",6666:"8e3da7c0",6681:"cb1395da",6718:"c2699f5d",6719:"7bc505ec",6768:"d70c22ab",7012:"973a2b22",7023:"6df1c222",7050:"89a5ed9f",7171:"0f9d9c88",7269:"164ad2ab",7297:"25e64aed",7321:"4f324d83",7376:"f35068d8",7414:"bd3a82a7",7478:"900ae845",7484:"9d16f041",7493:"06c6da67",7517:"c2d13e49",7545:"0aeabbbd",7590:"a55cd91f",7644:"84e40652",7713:"3eaddde4",7728:"7e7f4530",7887:"ff452e36",7889:"c912ae14",7918:"1355db49",7970:"2f82dc1a",8016:"74e33cb7",8018:"37dc3f0e",8020:"35e71755",8077:"e278cc55",8148:"6ff3d022",8165:"1cd0398e",8182:"4379df0b",8210:"72417e73",8216:"3121d2ae",8223:"99cd094b",8247:"52920920",8298:"6dcd3615",8492:"af32b193",8506:"6e5c9e84",8576:"780c1ab5",8745:"8e936424",8823:"805500b3",8838:"f412e688",8860:"f30c1496",8863:"1d606bc8",8937:"ec4c1e48",8991:"d2a755f0",8999:"9747c005",9153:"3c71ca46",9166:"8321bf25",9185:"01092430",9242:"ee15ad8f",9250:"fb71067d",9286:"1053e7b0",9468:"ac677151",9483:"f6af70e1",9514:"bc32eeb9",9516:"86ee1484",9702:"2e3bbd32",9792:"0be9eca6",9817:"d83986bf",9862:"b5087612",9887:"f1161bb9",9923:"3ad924b6",9943:"09c94b83",9976:"4136d1dd"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},d="book:",r.l=(e,a,c,f)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+c),t.src=e),b[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/book/zh-Hans/",r.gca=function(e){return e={17896441:"7918",46797304:"2882",58842413:"3558",db04083b:"21","935f2afb":"53","7d55b5e2":"281","3f08a2b3":"367","3a206099":"375","9189d665":"446",ff75fcec:"498","0402b1c7":"522","6422441f":"661",de47024b:"666","1fabf6b0":"876",e659317d:"975",eacb4fc3:"1090","787dd9f7":"1413",c3e89b9d:"1522",b836a66e:"1580",cbc6039d:"1655","2192f54b":"1656",d9cdd8d2:"1714","56b44d07":"1855","3b153090":"1879","7198433e":"1891","2ef44695":"1903","2ec20889":"1930","455b5324":"2166",b1fd7cb4:"2365",aae5bef1:"2470","39a34709":"2487",a9a005c2:"2531","739db9ec":"2676","19152c3d":"2743",b977c364:"2762",a2cfed72:"2764","9cc6718f":"2776","6a634139":"2810","452ace2c":"2945","1f391b9e":"3085",c9bf898e:"3099","4b698f6f":"3122","63dea259":"3256",f8ba4f42:"3285","4db4a19b":"3310",cc6c513a:"3354","9c953695":"3365",c663a53c:"3458",f757d4f5:"3490","0ca7c6d9":"3591","397f901d":"3592",cd6318fb:"3732","6590f045":"3811",deb2d497:"3843",e4fba534:"4130","40becb22":"4181",c4f5d8e4:"4195","1e18241d":"4506",bfc76bad:"4541","906db0ed":"4686","560baf7e":"4844","794e8f9f":"4921","8e0cd2ff":"5020","30f88508":"5022","4a5e354f":"5058","70c0a137":"5076",e19da909:"5096","6d40a6e9":"5158",e7de89bd:"5167","4b7d277b":"5173",f9323c1c:"5228","9b13b163":"5241","3b435a04":"5255","0bb02649":"5353","6faf095d":"5426","0e2445a8":"5470",b78e7789:"5524","338d3fa8":"5668","4298c4f5":"5688","1f84e766":"5785",e3ceb4f4:"5820","42d3ccd1":"5918","89ea910b":"5945",d44c9043:"6026","9ce85510":"6062",e440ae75:"6126",fb6d84aa:"6201",a2fe9a4b:"6449",ccfe00fb:"6468","85648bee":"6530","649c46e9":"6541","816162fc":"6591","17e07b88":"6602","6e7071d1":"6666","34c250fd":"6681","639a8f02":"6718",b663776b:"6719","32027ce3":"6768","4a6e8eae":"7012","33beb692":"7023","3713057f":"7050","1b37b865":"7171",a0f00cde:"7269","5b436485":"7297","91ed4af6":"7321","7a4e8abe":"7376","393be207":"7414","1818ce99":"7478",bbb12fca:"7484",b1eea551:"7493","1655867d":"7517",aeb7c24a:"7545",e579b1f4:"7590","833d543f":"7644","2611c91e":"7713",f4a8f7dd:"7728","0a64acd0":"7887",ae3dce49:"7889","019e8c32":"7970","7c88a8c9":"8016",c3f48c01:"8018","5ddf4091":"8020",fd2102c8:"8077",ad77907d:"8148","4c731f24":"8165","13d48269":"8182","12a938b1":"8210","2fa3be3f":"8216","68b9935b":"8223",bdc41217:"8247","078b943a":"8298","8d8ccdca":"8492","958750e3":"8506","345c05f4":"8576",adaa5c0b:"8745","54a7b32e":"8823","49331eed":"8838","7c717e4f":"8860",a2936dad:"8863","1029b3d4":"8937","84b88873":"8991",f10e14a0:"8999",b8ca1fd4:"9153","829c07d5":"9166","53e86c4a":"9185",db3c9d75:"9242","7660780d":"9250",c142228a:"9286",b5ada569:"9468","617c7cfe":"9483","1be78505":"9514",eb6ebf3c:"9516","74c0a308":"9702",b660a197:"9792","14eb3368":"9817","52d1891a":"9862","956db902":"9887","1262e16f":"9923","3ec41a7f":"9943",fefc1257:"9976"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,c)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>b=e[a]=[c,d]));c.push(b[2]=d);var f=r.p+r.u(a),t=new Error;r.l(f,(c=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var d=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+f+")",t.name="ChunkLoadError",t.type=d,t.request=f,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var b,d,f=c[0],t=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(c);n<f.length;n++)d=f[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},c=self.webpackChunkbook=self.webpackChunkbook||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();