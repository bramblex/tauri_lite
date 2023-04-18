"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5322],{3905:(e,i,r)=>{r.d(i,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function t(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach((function(i){n(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function o(e,i){if(null==e)return{};var r,a,n=function(e,i){if(null==e)return{};var r,a,n={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],i.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var i=a.useContext(s),r=i;return e&&(r="function"==typeof e?e(i):l(l({},i),e)),r},c=function(e){var i=p(e.components);return a.createElement(s.Provider,{value:i},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},g=a.forwardRef((function(e,i){var r=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||t;return r?a.createElement(m,l(l({ref:i},c),{},{components:r})):a.createElement(m,l({ref:i},c))}));function m(e,i){var r=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var t=r.length,l=new Array(t);l[0]=g;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<t;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2223:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const t={},l="\u6d88\u606f\u6846 dialog",o={unversionedId:"api/dialog",id:"api/dialog",title:"\u6d88\u606f\u6846 dialog",description:"Niva.api.dialog.showMessage",source:"@site/docs/api/dialog.md",sourceDirName:"api",slug:"/api/dialog",permalink:"/niva/en/docs/api/dialog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"\u526a\u5207\u677f clipboard",permalink:"/niva/en/docs/api/clipboard"},next:{title:"\u7cfb\u7edf\u989d\u5916 extra",permalink:"/niva/en/docs/api/extra"}},s={},p=[{value:"Niva.api.dialog.showMessage",id:"nivaapidialogshowmessage",level:2},{value:"Niva.api.dialog.pickFile",id:"nivaapidialogpickfile",level:2},{value:"Niva.api.dialog.pickFiles",id:"nivaapidialogpickfiles",level:2},{value:"Niva.api.dialog.pickDir",id:"nivaapidialogpickdir",level:2},{value:"Niva.api.dialog.pickDirs",id:"nivaapidialogpickdirs",level:2},{value:"Niva.api.dialog.saveFile",id:"nivaapidialogsavefile",level:2}],c={toc:p},d="wrapper";function u(e){let{components:i,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6d88\u606f\u6846-dialog"},"\u6d88\u606f\u6846 dialog"),(0,n.kt)("h2",{id:"nivaapidialogshowmessage"},"Niva.api.dialog.showMessage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u663e\u793a\u4e00\u4e2a\u72ec\u7acb\u6d88\u606f\u6846\u3002\n * @param title \u6d88\u606f\u6846\u7684\u6807\u9898\u3002\n * @param content \u6d88\u606f\u6846\u7684\u5185\u5bb9\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\n * @param level \u6d88\u606f\u6846\u7684\u7ea7\u522b\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u6d88\u606f\u6846\u5173\u95ed\u65f6\u89e3\u6790\u8be5 Promise\uff0c\u6216\u5728\u53d1\u751f\u9519\u8bef\u65f6\u62d2\u7edd\u8be5 Promise\u3002\n */\nexport function showMessage(title: string, content?: string, level?: 'info' | 'warning' | 'error'): Promise<void>;\n")),(0,n.kt)("h2",{id:"nivaapidialogpickfile"},"Niva.api.dialog.pickFile"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\uff0c\u652f\u6301\u8fc7\u6ee4\u5668\u548c\u8d77\u59cb\u76ee\u5f55\u3002\n * @param filters \u6587\u4ef6\u7c7b\u578b\u7b5b\u9009\u5668\u3002\n * @param start_dir \u6587\u4ef6\u9009\u62e9\u5bf9\u8bdd\u6846\u7684\u8d77\u59cb\u76ee\u5f55\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9009\u62e9\u6587\u4ef6\u65f6\u89e3\u6790\u8be5 Promise \u4ee5\u8fd4\u56de\u6587\u4ef6\u540d\u6216\u6587\u4ef6\u8def\u5f84\uff0c\u6216\u89e3\u6790 `null`\uff08\u5982\u679c\u6ca1\u6709\u9009\u62e9\u6587\u4ef6\uff09\u3002\n */\nexport function pickFile(filters?: string[], start_dir?: string): Promise<string | null>;\n")),(0,n.kt)("h2",{id:"nivaapidialogpickfiles"},"Niva.api.dialog.pickFiles"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\uff0c\u652f\u6301\u8fc7\u6ee4\u5668\u548c\u8d77\u59cb\u76ee\u5f55\u3002\n * @param filters \u6587\u4ef6\u7c7b\u578b\u7b5b\u9009\u5668\u3002\n * @param start_dir \u6587\u4ef6\u9009\u62e9\u5bf9\u8bdd\u6846\u7684\u8d77\u59cb\u76ee\u5f55\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9009\u62e9\u6587\u4ef6\u65f6\u89e3\u6790\u8be5 Promise \u4ee5\u8fd4\u56de\u6587\u4ef6\u540d\u6570\u7ec4\u6216\u6587\u4ef6\u8def\u5f84\u6570\u7ec4\uff0c\u6216\u89e3\u6790 `null`\uff08\u5982\u679c\u6ca1\u6709\u9009\u62e9\u6587\u4ef6\uff09\u3002\n */\nexport function pickFiles(filters?: string[], start_dir?: string): Promise<string[] | null>;\n")),(0,n.kt)("h2",{id:"nivaapidialogpickdir"},"Niva.api.dialog.pickDir"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u652f\u6301\u8d77\u59cb\u76ee\u5f55\u3002\n * @param start_dir \u6587\u4ef6\u5939\u9009\u62e9\u5bf9\u8bdd\u6846\u7684\u8d77\u59cb\u76ee\u5f55\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9009\u62e9\u6587\u4ef6\u5939\u65f6\u89e3\u6790\u8be5 Promise \u4ee5\u8fd4\u56de\u6587\u4ef6\u5939\u8def\u5f84\uff0c\u6216\u89e3\u6790 `null`\uff08\u5982\u679c\u6ca1\u6709\u9009\u62e9\u6587\u4ef6\u5939\uff09\u3002\n */\nexport function pickDir(start_dir?: string): Promise<string | null>;\n")),(0,n.kt)("h2",{id:"nivaapidialogpickdirs"},"Niva.api.dialog.pickDirs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\u5939\uff0c\u652f\u6301\u8d77\u59cb\u76ee\u5f55\u3002\n * @param start_dir \u6587\u4ef6\u5939\u9009\u62e9\u5bf9\u8bdd\u6846\u7684\u8d77\u59cb\u76ee\u5f55\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u9009\u62e9\u6587\u4ef6\u5939\u65f6\u89e3\u6790\u8be5 Promise \u4ee5\u8fd4\u56de\u6587\u4ef6\u5939\u8def\u5f84\u6570\u7ec4\uff0c\u6216\u89e3\u6790 `null`\uff08\u5982\u679c\u6ca1\u6709\u9009\u62e9\u6587\u4ef6\u5939\uff09\u3002\n */\nexport function pickDirs(start_dir?: string): Promise<string[] | null>;\n\n")),(0,n.kt)("h2",{id:"nivaapidialogsavefile"},"Niva.api.dialog.saveFile"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u4fdd\u5b58\u4e00\u4e2a\u6587\u4ef6\uff0c\u652f\u6301\u8fc7\u6ee4\u5668\u548c\u8d77\u59cb\u76ee\u5f55\u3002\n * @param filters \u6587\u4ef6\u7c7b\u578b\u7b5b\u9009\u5668\u3002\n * @param start_dir \u6587\u4ef6\u4fdd\u5b58\u5bf9\u8bdd\u6846\u7684\u8d77\u59cb\u76ee\u5f55\u3002\n * @returns \u4e00\u4e2a Promise\uff0c\u5728\u4fdd\u5b58\u6587\u4ef6\u65f6\u89e3\u6790\u8be5 Promise \u4ee5\u8fd4\u56de\u6587\u4ef6\u540d\u6216\u6587\u4ef6\u8def\u5f84\uff0c\u6216\u89e3\u6790 `null`\uff08\u5982\u679c\u6ca1\u6709\u4fdd\u5b58\u6587\u4ef6\uff09\u3002\n */\nexport function saveFile(filters?: string[], start_dir?: string): Promise<string | null>;\n")))}u.isMDXComponent=!0}}]);