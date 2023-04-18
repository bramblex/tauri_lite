"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},p="\u4ece React \u9879\u76ee\u4e2d\u5bfc\u5165",i={unversionedId:"tutorial/import-project-from-react",id:"tutorial/import-project-from-react",title:"\u4ece React \u9879\u76ee\u4e2d\u5bfc\u5165",description:"\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5230\u4e0b\u8f7d\u9875\u9762\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Niva \u5f00\u53d1\u8005\u5de5\u5177\u3002",source:"@site/docs/tutorial/import-project-from-react.md",sourceDirName:"tutorial",slug:"/tutorial/import-project-from-react",permalink:"/niva/en/docs/tutorial/import-project-from-react",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"\u4ece Vue \u9879\u76ee\u4e2d\u5bfc\u5165",permalink:"/niva/en/docs/tutorial/import-project-from-vue"},next:{title:"\u5bfc\u5165\u5176\u4ed6\u524d\u7aef\u9879\u76ee",permalink:"/niva/en/docs/tutorial/import-project"}},l={},c=[{value:"\u521b\u5efa\u4e00\u4e2a React \u9879\u76ee\uff08\u53ef\u9009\uff09",id:"\u521b\u5efa\u4e00\u4e2a-react-\u9879\u76ee\u53ef\u9009",level:2},{value:"\u5bfc\u5165\u9879\u76ee",id:"\u5bfc\u5165\u9879\u76ee",level:2},{value:"\u6253\u5f00\u8c03\u8bd5\u7a97\u53e3",id:"\u6253\u5f00\u8c03\u8bd5\u7a97\u53e3",level:2},{value:"\u6784\u5efa\u5e94\u7528",id:"\u6784\u5efa\u5e94\u7528",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ece-react-\u9879\u76ee\u4e2d\u5bfc\u5165"},"\u4ece React \u9879\u76ee\u4e2d\u5bfc\u5165"),(0,a.kt)("p",null,"\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5230",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bramblex/niva/releases"},"\u4e0b\u8f7d\u9875\u9762"),"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Niva \u5f00\u53d1\u8005\u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a-react-\u9879\u76ee\u53ef\u9009"},"\u521b\u5efa\u4e00\u4e2a React \u9879\u76ee\uff08\u53ef\u9009\uff09"),(0,a.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u73b0\u6210 React \u9879\u76ee\u53ef\u4ee5\u8df3\u8fc7\u672c\u6b65\u9aa4\u3002\u6211\u4eec\u5047\u8bbe\u60a8\u5df2\u7ecf\u6709 React \u7684\u4f7f\u7528\u7ecf\u9a8c\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Create React App \u9879\u76ee\u521b\u5efa\u4e00\u4e2a React \u9879\u76ee ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/getting-started"},"https://create-react-app.dev/docs/getting-started")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-react-app\n")),(0,a.kt)("h2",{id:"\u5bfc\u5165\u9879\u76ee"},"\u5bfc\u5165\u9879\u76ee"),(0,a.kt)("p",null,"\u901a\u8fc7 Niva \u5f00\u7740\u5de5\u5177\u5bfc\u5165\u6211\u4eec\u7684 React \u9879\u76ee\uff0c\u9700\u8981\u5bfc\u5165\u7684\u662f\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u7684\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"[\u56fe\u7247]"),(0,a.kt)("p",null,"\u6253\u5f00 Vue \u9879\u76ee\u540e\u4f1a\u8be2\u95ee\u662f\u5426\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"niva.json")," \u9879\u76ee\u6587\u4ef6\uff0c\u786e\u8ba4\u540e\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"niva.json")," \u914d\u7f6e\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "<\u9879\u76ee\u540d>",\n    "uuid": "<\u9879\u76eeuuid\uff08\u968f\u673a\u751f\u6210\uff0c\u4e0d\u5efa\u8bae\u6539\u52a8\uff09>",\n\n    "debug": {\n        "resource": "public",\n        "entry": "http://127.0.0.1:3000/",\n    },\n\n    "build": {\n        "resource": "build",\n    },\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u662f\u60a8\u662f\u4f7f\u7528 Create React App \u5de5\u5177\u521b\u521b\u5efa\u7684 React \u9879\u76ee\uff0c\u5e76\u4e14\u6ca1\u6709\u6539\u52a8\u57fa\u7840\u914d\u7f6e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e5f\u4e0d\u9700\u8981\u4fee\u6539\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u5982\u679c\u4fee\u6539\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u6587\u4ef6\u5939\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939\u4ee5\u53ca\u9879\u76ee\u8c03\u8bd5\u7aef\u53e3\u7b49\u5219\u9700\u8981\u5bf9\u5e94\u4fee\u6539\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/options/project"},"\u914d\u7f6e\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u6253\u5f00\u8c03\u8bd5\u7a97\u53e3"},"\u6253\u5f00\u8c03\u8bd5\u7a97\u53e3"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u542f\u52a8 React \u5f00\u53d1\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,a.kt)("p",null,"\u7136\u540e\u518d\u901a\u8fc7 Niva \u5f00\u53d1\u8005\u5de5\u5177\u542f\u52a8\u8c03\u8bd5\uff1a"),(0,a.kt)("p",null,"[\u56fe\u7247]"),(0,a.kt)("p",null,"\u5728 Niva \u4e2d\u542f\u52a8\u8c03\u8bd5\u9762\u677f\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u8ddf\u6b63\u5e38\u5f00\u53d1 Vue \u5e94\u7528\u4e00\u6837\u8fdb\u884c\u5f00\u53d1\u548c\u8c03\u8bd5\u3002"),(0,a.kt)("h2",{id:"\u6784\u5efa\u5e94\u7528"},"\u6784\u5efa\u5e94\u7528"),(0,a.kt)("p",null,"Niva \u9879\u76ee\u6784\u5efa\u53ef\u4ee5\u901a\u8fc7 Niva \u5f00\u53d1\u8005\u5de5\u5177\u7684\u6784\u5efa\u6309\u94ae\u8fdb\u884c\u6784\u5efa\uff1a"),(0,a.kt)("p",null,"[\u56fe\u7247]"),(0,a.kt)("p",null,"\u6784\u5efa\u597d\u540e\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u53ef\u6267\u884c\u6587\u4ef6\u6253\u5f00\u6784\u5efa\u597d\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6253\u5f00\u4f60\u7684\u5e94\u7528\u3002"))}m.isMDXComponent=!0}}]);