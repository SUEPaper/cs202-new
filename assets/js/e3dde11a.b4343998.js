"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8883],{93663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var d=s(13274),i=s(71377);const c={id:"debug",sidebar_position:3},r="\u5728Chrome\u6d4f\u89c8\u5668\u8c03\u8bd5\u4ee3\u7801",l={id:"todo/frontend/debug",title:"\u5728Chrome\u6d4f\u89c8\u5668\u8c03\u8bd5\u4ee3\u7801",description:"\u5728\u7f16\u5199\u66f4\u590d\u6742\u7684\u4ee3\u7801\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u804a\u804a\u8c03\u8bd5\u5427\u3002",source:"@site/docs/todo/frontend/debug.md",sourceDirName:"todo/frontend",slug:"/todo/frontend/debug",permalink:"/cs202/todo/frontend/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend/debug.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"debug",sidebar_position:3},sidebar:"todoSidebar",previous:{title:"\u7a0b\u5e8f\u4ee3\u7801\u89e3\u6790",permalink:"/cs202/todo/frontend/component"},next:{title:"\u4f7f\u7528 Tailwind CSS",permalink:"/cs202/todo/frontend/tailwind"}},t={},o=[{value:"\u201c\u8d44\u6e90\uff08Sources\uff09\u201d\u9762\u677f",id:"\u8d44\u6e90sources\u9762\u677f",level:2},{value:"\u63a7\u5236\u53f0\uff08Console\uff09",id:"\u63a7\u5236\u53f0console",level:2},{value:"\u65ad\u70b9\uff08Breakpoints\uff09",id:"\u65ad\u70b9breakpoints",level:2},{value:"\u6682\u505c\u5e76\u67e5\u770b",id:"\u6682\u505c\u5e76\u67e5\u770b",level:2},{value:"\u8ddf\u8e2a\u6267\u884c",id:"\u8ddf\u8e2a\u6267\u884c",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u5728chrome\u6d4f\u89c8\u5668\u8c03\u8bd5\u4ee3\u7801",children:"\u5728Chrome\u6d4f\u89c8\u5668\u8c03\u8bd5\u4ee3\u7801"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7f16\u5199\u66f4\u590d\u6742\u7684\u4ee3\u7801\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u804a\u804a\u8c03\u8bd5\u5427\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u8c03\u8bd5 \u662f\u6307\u5728\u4e00\u4e2a\u811a\u672c\u4e2d\u627e\u51fa\u5e76\u4fee\u590d\u9519\u8bef\u7684\u8fc7\u7a0b\u3002\u6240\u6709\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c\u5927\u591a\u6570\u5176\u4ed6\u73af\u5883\u90fd\u652f\u6301\u8c03\u8bd5\u5de5\u5177 \u2014\u2014 \u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u7684\u4e00\u4e2a\u4ee4\u8c03\u8bd5\u66f4\u52a0\u5bb9\u6613\u7684\u7279\u6b8a\u7528\u6237\u754c\u9762\u3002\u5b83\u4e5f\u53ef\u4ee5\u8ba9\u6211\u4eec\u4e00\u6b65\u6b65\u5730\u8ddf\u8e2a\u4ee3\u7801\u4ee5\u67e5\u770b\u5f53\u524d\u5b9e\u9645\u8fd0\u884c\u60c5\u51b5\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\u6211\u4eec\u5c06\u4f1a\u4f7f\u7528 ",(0,d.jsx)(n.a,{href:"https://www.google.cn/intl/zh-CN/chrome/",children:"Chrome\uff08\u8c37\u6b4c\u6d4f\u89c8\u5668\uff09"}),"\uff0c\u56e0\u4e3a\u5b83\u62e5\u6709\u8db3\u591f\u591a\u7684\u529f\u80fd\uff0c\u5176\u4ed6\u5927\u90e8\u5206\u6d4f\u89c8\u5668\u7684\u529f\u80fd\u4e5f\u4e0e\u4e4b\u7c7b\u4f3c\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8d44\u6e90sources\u9762\u677f",children:"\u201c\u8d44\u6e90\uff08Sources\uff09\u201d\u9762\u677f"}),"\n",(0,d.jsx)(n.p,{children:"\u4f60\u7684 Chrome \u7248\u672c\u53ef\u80fd\u770b\u8d77\u6765\u6709\u4e00\u70b9\u4e0d\u540c\uff0c\u4f46\u662f\u5b83\u5e94\u8be5\u8fd8\u662f\u5904\u4e8e\u5f88\u660e\u663e\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"F12\uff08Mac\uff1aCmd+Opt+I\uff09"}),"\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u9009\u62e9 Sources\uff08\u8d44\u6e90\uff09\u9762\u677f\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u8fd9\u4e48\u505a\uff0c\u90a3\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u4e0b\u9762\u8fd9\u4e2a\u6837\u5b50\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(3338).A+"",width:"1440",height:"472"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u5728\u9884\u89c8\u6811\u4e2d\u70b9\u51fb\u548c\u9009\u62e9 ",(0,d.jsx)(n.code,{children:"HelloWorld.vue"}),"\u3002\u8fd9\u91cc\u5e94\u8be5\u4f1a\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(44417).A+"",width:"1478",height:"672"})}),"\n",(0,d.jsxs)(n.admonition,{title:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u4e24\u4e2a\u540c\u540d\u7684vue\u7ec4\u4ef6\uff1f",type:"tip",children:[(0,d.jsxs)(n.p,{children:["\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u4e2d\uff0c\u6d4f\u89c8\u5668\u5e76\u4e0d\u80fd\u76f4\u63a5\u89e3\u6790 ",(0,d.jsx)(n.code,{children:".vue"})," \u6587\u4ef6\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u53ea\u80fd\u89e3\u6790 HTML\u3001CSS \u548c JavaScript \u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u5728\u6784\u5efa Vue \u9879\u76ee\u65f6\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528\u6784\u5efa\u5de5\u5177\uff08\u5982 Vue CLI\u3001Vite \u7b49\uff09\u5c06 ",(0,d.jsx)(n.code,{children:".vue"})," \u6587\u4ef6\u8f6c\u6362\u4e3a\u6d4f\u89c8\u5668\u53ef\u4ee5\u7406\u89e3\u7684\u683c\u5f0f\u3002\n\u56e0\u6b64\uff0c\u5728 Chrome \u7684\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\uff0c\u4f60\u4f1a\u770b\u5230\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u4e24\u4e2a\u6587\u4ef6\uff0c\u4e00\u4e2a\u662f\u8f6c\u6362\u540e\u7684 JavaScript \u6587\u4ef6\uff0c\n\u53e6\u4e00\u4e2a\u662f\u8f6c\u6362\u540e\u7684 CSS \u6587\u4ef6\u3002\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u65b9\u4fbf\u5730\u8c03\u8bd5\u548c\u67e5\u770b\u7ec4\u4ef6\u7684\u4ee3\u7801\u3002"]}),(0,d.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u6848\u4f8b\u4e2d\u5b57\u4f53\u662f\u503e\u659c ",(0,d.jsx)(n.em,{children:"HelloWorld.vue"})," \u7684\u6587\u4ef6\u662fVue\u539f\u59cb\u4ee3\u7801\uff0c\u800c\u5b57\u4f53\u4e3a\u503e\u659c\u7684 HelloWorld.vue \u4e3a\u8f6c\u6362\u540e\u7684\u6587\u4ef6\u3002"]})]}),"\n",(0,d.jsx)(n.p,{children:"\u8d44\u6e90\uff08Sources\uff09\u9762\u677f\u5305\u542b\u4e09\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6587\u4ef6\u5bfc\u822a\uff08File Navigator\uff09 \u533a\u57df\u5217\u51fa\u4e86 HTML\u3001JavaScript\u3001CSS \u548c\u5305\u62ec\u56fe\u7247\u5728\u5185\u7684\u5176\u4ed6\u4f9d\u9644\u4e8e\u6b64\u9875\u9762\u7684\u6587\u4ef6\u3002Chrome \u6269\u5c55\u7a0b\u5e8f \u4e5f\u4f1a\u663e\u793a\u5728\u8fd9\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u7f16\u8f91\uff08Code Editor\uff09 \u533a\u57df\u5c55\u793a\u6e90\u7801\u3002"}),"\n",(0,d.jsx)(n.li,{children:"JavaScript \u8c03\u8bd5\uff08JavaScript Debugging\uff09 \u533a\u57df\u662f\u7528\u4e8e\u8c03\u8bd5\u7684\uff0c\u6211\u4eec\u5f88\u5feb\u5c31\u4f1a\u6765\u63a2\u7d22\u5b83\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u63a7\u5236\u53f0console",children:"\u63a7\u5236\u53f0\uff08Console\uff09"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u6309\u4e0b ",(0,d.jsx)(n.code,{children:"Esc"}),"\uff0c\u4e0b\u9762\u4f1a\u51fa\u73b0\u4e00\u4e2a\u63a7\u5236\u53f0\uff0c\u6211\u4eec\u53ef\u4ee5\u8f93\u5165\u4e00\u4e9b\u547d\u4ee4\u7136\u540e\u6309\u4e0b ",(0,d.jsx)(n.code,{children:"Enter"})," \u6765\u6267\u884c\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8bed\u53e5\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\uff0c\u5176\u6267\u884c\u7ed3\u679c\u4f1a\u663e\u793a\u5728\u4e0b\u9762\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c",(0,d.jsx)(n.code,{children:"1+2"})," \u5c06\u4f1a\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"3"}),"\uff0c\u800c ",(0,d.jsx)(n.code,{children:'hello("debugger")'})," \u51fd\u6570\u8c03\u7528\u4ec0\u4e48\u4e5f\u6ca1\u8fd4\u56de\uff0c\u6240\u4ee5\u7ed3\u679c\u662f ",(0,d.jsx)(n.code,{children:"undefined"}),"\uff1a"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(23288).A+"",width:"1386",height:"312"})}),"\n",(0,d.jsx)(n.h2,{id:"\u65ad\u70b9breakpoints",children:"\u65ad\u70b9\uff08Breakpoints\uff09"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"HelloWorld.vue"}),' \u4e2d\uff0c\u70b9\u51fb\u7b2c 8 \u884c\u3002\u662f\u7684\uff0c\u5c31\u70b9\u51fb\u6570\u5b57 "8" \u4e0a\uff0c\u4e0d\u662f\u70b9\u51fb\u4ee3\u7801\u3002']}),"\n",(0,d.jsx)(n.p,{children:"\u606d\u559c\u4f60\uff01\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u65ad\u70b9\u3002\u73b0\u5728\uff0c\u8bf7\u5728\u7b2c 18 \u884c\u7684\u6570\u5b57\u4e0a\u4e5f\u70b9\u51fb\u4e00\u4e0b\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u770b\u8d77\u6765\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff08\u84dd\u8272\u662f\u4f60\u5e94\u8be5\u70b9\u51fb\u7684\u5730\u65b9\uff09\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(45431).A+"",width:"1436",height:"666"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u65ad\u70b9"})," \u662f\u8c03\u8bd5\u5668\u4f1a\u81ea\u52a8\u6682\u505c JavaScript \u6267\u884c\u7684\u5730\u65b9\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5f53\u4ee3\u7801\u88ab\u6682\u505c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u5f53\u524d\u7684\u53d8\u91cf\uff0c\u5728\u63a7\u5236\u53f0\u6267\u884c\u547d\u4ee4\u7b49\u7b49\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u8bd5\u5b83\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4eec\u603b\u662f\u53ef\u4ee5\u5728\u53f3\u4fa7\u7684\u9762\u677f\u4e2d\u627e\u5230\u65ad\u70b9\u7684\u5217\u8868\u3002\u5f53\u6211\u4eec\u5728\u6570\u4e2a\u6587\u4ef6\u4e2d\u6709\u8bb8\u591a\u65ad\u70b9\u65f6\uff0c\u8fd9\u662f\u975e\u5e38\u6709\u7528\u7684\u3002\u5b83\u5141\u8bb8\u6211\u4eec\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5feb\u901f\u8df3\u8f6c\u81f3\u4ee3\u7801\u4e2d\u7684\u65ad\u70b9\uff08\u901a\u8fc7\u70b9\u51fb\u53f3\u4fa7\u9762\u677f\u4e2d\u7684\u5bf9\u5e94\u7684\u65ad\u70b9\uff09\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u901a\u8fc7\u53d6\u6d88\u9009\u4e2d\u65ad\u70b9\u6765\u4e34\u65f6\u7981\u7528\u5bf9\u5e94\u7684\u65ad\u70b9\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u5e76\u9009\u62e9\u79fb\u9664\u6765\u5220\u9664\u4e00\u4e2a\u65ad\u70b9\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u2026\u2026\u7b49\u7b49\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{title:"\u6761\u4ef6\u65ad\u70b9",type:"note",children:[(0,d.jsxs)(n.p,{children:["\u5728\u884c\u53f7\u4e0a ",(0,d.jsx)(n.strong,{children:"\u53f3\u952e\u5355\u51fb"})," \u5141\u8bb8\u4f60\u521b\u5efa\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"\u6761\u4ef6"})," \u65ad\u70b9\u3002\u53ea\u6709\u5f53\u7ed9\u5b9a\u7684\u8868\u8fbe\u5f0f\uff08\u4f60\u521b\u5efa\u6761\u4ef6\u65ad\u70b9\u65f6\u63d0\u4f9b\u7684\u8868\u8fbe\u5f0f\uff09\u4e3a\u771f\u65f6\u624d\u4f1a\u88ab\u89e6\u53d1\u3002"]}),(0,d.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u9700\u8981\u5728\u7279\u5b9a\u7684\u53d8\u91cf\u503c\u6216\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\u6682\u505c\u7a0b\u5e8f\u6267\u884c\u65f6\uff0c\u8fd9\u79cd\u8c03\u8bd5\u65b9\u6cd5\u5c31\u5f88\u6709\u7528\u4e86\u3002"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6682\u505c\u5e76\u67e5\u770b",children:"\u6682\u505c\u5e76\u67e5\u770b"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"HelloWorld.vue"}),"\u7ec4\u4ef6\u5728\u9875\u9762\u52a0\u8f7d\u671f\u95f4\u88ab\u8c03\u7528\uff0c\u56e0\u6b64\u6fc0\u6d3b\u8c03\u8bd5\u5668\u7684\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff08\u5728\u6211\u4eec\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u65ad\u70b9\u540e\uff09\u5c31\u662f \u2014\u2014 \u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002\u56e0\u6b64\u8ba9\u6211\u4eec\u6309\u4e0b ",(0,d.jsx)(n.code,{children:"F5\uff08Windows\uff0cLinux\uff09"}),"\u6216 ",(0,d.jsx)(n.code,{children:"Cmd+R\uff08Mac\uff09"}),"\u5427\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8bbe\u7f6e\u65ad\u70b9\u4e4b\u540e\uff0c\u7a0b\u5e8f\u4f1a\u5728\u7b2c 8 \u884c\u6682\u505c\u6267\u884c\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(45934).A+"",width:"1424",height:"1148"})}),"\n",(0,d.jsx)(n.p,{children:"\u8bf7\u6253\u5f00\u53f3\u4fa7\u7684\u4fe1\u606f\u4e0b\u62c9\u5217\u8868\uff08\u7bad\u5934\u6307\u793a\u51fa\u7684\u5730\u65b9\uff09\u3002\u8fd9\u91cc\u5141\u8bb8\u4f60\u67e5\u770b\u5f53\u524d\u7684\u4ee3\u7801\u72b6\u6001\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u5bdf\u770b\uff08Watch\uff09 \u2014\u2014 \u663e\u793a\u4efb\u610f\u8868\u8fbe\u5f0f\u7684\u5f53\u524d\u503c\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u70b9\u51fb\u52a0\u53f7 ",(0,d.jsx)(n.code,{children:"+"})," \u7136\u540e\u8f93\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u8c03\u8bd5\u5668\u5c06\u663e\u793a\u5b83\u7684\u503c\uff0c\u5e76\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u91cd\u65b0\u8ba1\u7b97\u8be5\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"\u8c03\u7528\u6808\uff08Call Stack\uff09 \u2014\u2014 \u663e\u793a\u5d4c\u5957\u7684\u8c03\u7528\u94fe\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6b64\u65f6\uff0c\u8c03\u8bd5\u5668\u6b63\u5728 ",(0,d.jsx)(n.code,{children:"HelloWorld.vue"})," \u7684\u8c03\u7528\u94fe\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u70b9\u51fb\u4e86\u4e00\u4e2a\u5806\u6808\u9879\uff0c\u8c03\u8bd5\u5668\u5c06\u8df3\u5230\u5bf9\u5e94\u7684\u4ee3\u7801\u5904\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u67e5\u770b\u5176\u6240\u6709\u53d8\u91cf\u3002"}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\u4f5c\u7528\u57df\uff08Scope\uff09 \u2014\u2014 \u663e\u793a\u5f53\u524d\u7684\u53d8\u91cf\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Module"})," \u663e\u793a\u5f53\u7ec4\u4ef6\u4e2d\u7684\u53d8\u91cf\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u6e90\u4ee3\u7801\u4e2d\u770b\u5230\u5b83\u4eec\u7684\u503c\u9ad8\u4eae\u663e\u793a\u4e86\u51fa\u6765\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Global"})," \u663e\u793a\u5168\u5c40\u53d8\u91cf\uff08\u4e0d\u5728\u4efb\u4f55\u51fd\u6570\u4e2d\uff09\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8ddf\u8e2a\u6267\u884c",children:"\u8ddf\u8e2a\u6267\u884c"}),"\n",(0,d.jsxs)(n.p,{children:["\u73b0\u5728\u662f ",(0,d.jsx)(n.strong,{children:"\u8ddf\u8e2a"})," \u811a\u672c\u7684\u65f6\u5019\u4e86\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u53f3\u4fa7\u9762\u677f\u7684\u9876\u90e8\u662f\u4e00\u4e9b\u5173\u4e8e\u8ddf\u8e2a\u811a\u672c\u7684\u6309\u94ae\u3002\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u5b83\u4eec\u5427\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(73765).A+"",width:"1390",height:"594"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u201c\u6062\u590d\uff08Resume\uff09\u201d\uff1a\u7ee7\u7eed\u6267\u884c\uff0c\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"F8"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7ee7\u7eed\u6267\u884c\u3002\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u7684\u65ad\u70b9\uff0c\u90a3\u4e48\u7a0b\u5e8f\u5c31\u4f1a\u7ee7\u7eed\u6267\u884c\uff0c\u5e76\u4e14\u8c03\u8bd5\u5668\u4e0d\u4f1a\u518d\u63a7\u5236\u7a0b\u5e8f\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u8bf7\u5728\u7b2c11\u884c\u548c18\u884c\u6253\u4e00\u4e2a\u65ad\u70b9\uff0c\u7136\u540e\u5728\u7f51\u9875\u4e0a\u70b9\u51fb",(0,d.jsx)(n.code,{children:"Calculate"}),"\u6309\u94ae\uff0c\u7a0b\u5e8f\u4f1a\u5361\u5728\u7b2c\u5341\u516b\u884c\u5904\uff0c\u4e4b\u540e\u6309\u5feb\u6377\u952e",(0,d.jsx)(n.code,{children:"F8"}),"\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u8fd9\u6837\u7684\u60c5\u51b5\uff1a"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(21500).A+"",width:"2818",height:"2070"})}),"\n",(0,d.jsxs)(n.p,{children:["\u7a0b\u5e8f\u6062\u590d\u6267\u884c\u4e86\uff0c\u6267\u884c\u5230\u7b2c11\u884c ",(0,d.jsx)(n.code,{children:"add()"})," \u51fd\u6570\u4e2d\u7684",(0,d.jsx)(n.code,{children:"let value = x + y"}),"\u53e6\u5916\u4e00\u4e2a\u65ad\u70b9\u540e\u6682\u505c\u5728\u4e86\u90a3\u91cc\u3002\u770b\u4e00\u4e0b\u53f3\u8fb9\u7684 \u201cCall stack\u201d\u3002\u5b83\u5df2\u7ecf\u589e\u52a0\u4e86\u4e00\u4e2a\u8c03\u7528\u4fe1\u606f\u3002\u6211\u4eec\u73b0\u5728\u5728 ",(0,d.jsx)(n.code,{children:"add()"})," \u91cc\u9762\u3002"]}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["\u201c\u4e0b\u4e00\u6b65\uff08Step\uff09\u201d\uff1a\u8fd0\u884c\u4e0b\u4e00\u6761\uff08\u5373\u5f53\u524d\u884c\uff09\u6307\u4ee4\uff0c\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"F9"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u8fd0\u884c\u4e0b\u4e00\u6761\u8bed\u53e5\u3002\u5982\u679c\u6211\u4eec\u73b0\u5728\u70b9\u51fb\u5b83\uff0calert \u4f1a\u88ab\u663e\u793a\u51fa\u6765\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u6b21\u63a5\u4e00\u6b21\u5730\u70b9\u51fb\u6b64\u6309\u94ae\uff0c\u6574\u4e2a\u811a\u672c\u7684\u6240\u6709\u8bed\u53e5\u4f1a\u88ab\u9010\u4e2a\u6267\u884c\u3002"}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["\u201c\u8de8\u6b65\uff08Step over\uff09\u201d\uff1a\u8fd0\u884c\u4e0b\u4e00\u6761\uff08\u5373\u5f53\u524d\u884c\uff09\u6307\u4ee4\uff0c\u4f46 \u4e0d\u4f1a\u8fdb\u5165\u5230\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"F10"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u8ddf\u4e0a\u4e00\u6761\u547d\u4ee4\u201c\u4e0b\u4e00\u6b65\uff08Step\uff09\u201d\u7c7b\u4f3c\uff0c\u4f46\u5982\u679c\u4e0b\u4e00\u6761\u8bed\u53e5\u662f\u51fd\u6570\u8c03\u7528\u5219\u8868\u73b0\u4e0d\u540c\u3002\u8fd9\u91cc\u7684\u51fd\u6570\u6307\u7684\u662f\uff1a\u4e0d\u662f\u5185\u5efa\u7684\u5982 alert \u51fd\u6570\u7b49\uff0c\u800c\u662f\u6211\u4eec\u81ea\u5df1\u5199\u7684\u51fd\u6570\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5bf9\u6bd4\u4e00\u4e0b\uff0c\u201c\u4e0b\u4e00\u6b65\uff08Step\uff09\u201d\u547d\u4ee4\u4f1a\u8fdb\u5165\u5d4c\u5957\u51fd\u6570\u8c03\u7528\u5e76\u5728\u5176\u7b2c\u4e00\u884c\u6682\u505c\u6267\u884c\uff0c\u800c\u201c\u8de8\u6b65\uff08Step over\uff09\u201d\u5bf9\u6211\u4eec\u4e0d\u53ef\u89c1\u5730\u6267\u884c\u5d4c\u5957\u51fd\u6570\u8c03\u7528\uff0c\u8df3\u8fc7\u4e86\u51fd\u6570\u5185\u90e8\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6267\u884c\u4f1a\u5728\u8be5\u51fd\u6570\u8c03\u7528\u540e\u7acb\u5373\u6682\u505c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5bf9\u8be5\u51fd\u6570\u7684\u5185\u90e8\u6267\u884c\u4e0d\u611f\u5174\u8da3\uff0c\u8fd9\u547d\u4ee4\u4f1a\u5f88\u6709\u7528\u3002"}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsxs)(n.li,{children:["\u201c\u6b65\u5165\uff08Step into\uff09\u201d\uff0c\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"F11"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u548c\u201c\u4e0b\u4e00\u6b65\uff08Step\uff09\u201d\u7c7b\u4f3c\uff0c\u4f46\u5728\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u60c5\u51b5\u4e0b\u8868\u73b0\u4e0d\u540c\u3002\u5982\u679c\u4f60\u521a\u521a\u624d\u5f00\u59cb\u5b66 JavaScript\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5148\u5ffd\u7565\u6b64\u5dee\u5f02\uff0c\u56e0\u4e3a\u6211\u4eec\u8fd8\u6ca1\u6709\u7528\u5230\u5f02\u6b65\u8c03\u7528\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u81f3\u4e8e\u4e4b\u540e\uff0c\u53ea\u9700\u8981\u8bb0\u4f4f\u201c\u4e0b\u4e00\u6b65\uff08Step\uff09\u201d\u547d\u4ee4\u4f1a\u5ffd\u7565\u5f02\u6b65\u884c\u4e3a\uff0c\u4f8b\u5982 setTimeout\uff08\u8ba1\u5212\u7684\u51fd\u6570\u8c03\u7528\uff09\uff0c\u5b83\u4f1a\u8fc7\u4e00\u6bb5\u65f6\u95f4\u518d\u6267\u884c\u3002\u800c\u201c\u6b65\u5165\uff08Step into\uff09\u201d\u4f1a\u8fdb\u5165\u5230\u4ee3\u7801\u4e2d\u5e76\u7b49\u5f85\uff08\u5982\u679c\u9700\u8981\uff09\u3002\u8be6\u89c1 DevTools \u624b\u518c\u3002"}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsxs)(n.li,{children:["\u201c\u6b65\u51fa\uff08Step out\uff09\u201d\uff1a\u7ee7\u7eed\u6267\u884c\u5230\u5f53\u524d\u51fd\u6570\u7684\u672b\u5c3e\uff0c\u5feb\u6377\u952e ",(0,d.jsx)(n.code,{children:"Shift+F11"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7ee7\u7eed\u6267\u884c\u5f53\u524d\u51fd\u6570\u5185\u7684\u5269\u4f59\u4ee3\u7801\uff0c\u5e76\u6682\u505c\u5728\u8c03\u7528\u5f53\u524d\u51fd\u6570\u7684\u4e0b\u4e00\u884c\u4ee3\u7801\u5904\u3002\u5f53\u6211\u4eec\u4f7f\u7528  \u5076\u7136\u5730\u8fdb\u5165\u5230\u4e00\u4e2a\u5d4c\u5957\u8c03\u7528\uff0c\u4f46\u662f\u6211\u4eec\u53c8\u5bf9\u8fd9\u4e2a\u51fd\u6570\u4e0d\u611f\u5174\u8da3\u65f6\uff0c\u6211\u4eec\u60f3\u8981\u5c3d\u53ef\u80fd\u7684\u7ee7\u7eed\u6267\u884c\u5230\u6700\u540e\u7684\u65f6\u5019\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u3002"}),"\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsx)(n.li,{children:"\u542f\u7528/\u7981\u7528\u6240\u6709\u7684\u65ad\u70b9\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e2a\u6309\u94ae\u4e0d\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u7684\u6267\u884c\u3002\u53ea\u662f\u4e00\u4e2a\u6279\u91cf\u64cd\u4f5c\u65ad\u70b9\u7684\u5f00/\u5173\u3002"}),"\n",(0,d.jsxs)(n.admonition,{title:"Continue to here",type:"note",children:[(0,d.jsx)(n.p,{children:"\u5728\u4ee3\u7801\u4e2d\u7684\u67d0\u4e00\u884c\u4e0a\u53f3\u952e\uff0c\u5728\u663e\u793a\u7684\u5173\u8054\u83dc\u5355\uff08context menu\uff09\u4e2d\u70b9\u51fb\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u540d\u4e3a \u201cContinue to here\u201d \u7684\u9009\u9879\u3002"}),(0,d.jsx)(n.p,{children:"\u5f53\u4f60\u60f3\u8981\u5411\u524d\u79fb\u52a8\u5f88\u591a\u6b65\u5230\u67d0\u4e00\u884c\u4e3a\u6b62\uff0c\u4f46\u662f\u53c8\u61d2\u5f97\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\u65f6\u975e\u5e38\u7684\u65b9\u4fbf\u3002"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},3338:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_01-41ed33a66a551325bcbe737725f05b11.png"},44417:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_02-35850488a5697c77f7a3b62016cc99c0.png"},23288:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_03-2aea1c93a2a177436c10282c69b5e4d1.png"},45431:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_04-e94556c05b9d4a3d4997013f68d5b0b7.png"},45934:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_05-754d4d60a5e24d6edc23311e0b8806c6.png"},73765:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_06-73cc339fe11dc1298fcf84f670787334.png"},21500:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/debug_07-9a3836a8497dfc39969da2af8bc5bb1b.png"},71377:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var d=s(79474);const i={},c=d.createContext(i);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);