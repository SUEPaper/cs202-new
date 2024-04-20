"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4316],{563:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var d=n(3274),i=n(1377);const t={id:"debug",sidebar_position:20},c="VS Code Debug FastAPI \u4ee3\u7801",o={id:"todo/backend/debug",title:"VS Code Debug FastAPI \u4ee3\u7801",description:"\u5f53\u60a8\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u8c03\u8bd5\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u67e5\u627e\u548c\u4fee\u590d\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u3002\u5728 Visual Studio Code (VS Code) \u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684\u8c03\u8bd5\u529f\u80fd\u6765\u8c03\u8bd5\u60a8\u7684\u4ee3\u7801\u3002\u4e0b\u9762\u662f\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 VS Code \u4e2d\u8fdb\u884c\u8c03\u8bd5\u7684\u6b65\u9aa4\uff1a",source:"@site/docs/todo/backend/debug.md",sourceDirName:"todo/backend",slug:"/todo/backend/debug",permalink:"/cs202/todo/backend/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/backend/debug.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"debug",sidebar_position:20},sidebar:"todoSidebar",previous:{title:"API \u9274\u6743",permalink:"/cs202/todo/backend/auth_api"},next:{title:"\u4f60\u7684\u7b2c\u4e00\u4e2aVue.js\u7684\u7a0b\u5e8f",permalink:"/cs202/todo/frontend/start"}},r={},l=[];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"vs-code-debug-fastapi-\u4ee3\u7801",children:"VS Code Debug FastAPI \u4ee3\u7801"}),"\n",(0,d.jsxs)(s.admonition,{type:"info",children:[(0,d.jsx)(s.p,{children:"\u5f53\u60a8\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u8c03\u8bd5\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u67e5\u627e\u548c\u4fee\u590d\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u3002\u5728 Visual Studio Code (VS Code) \u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684\u8c03\u8bd5\u529f\u80fd\u6765\u8c03\u8bd5\u60a8\u7684\u4ee3\u7801\u3002\u4e0b\u9762\u662f\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 VS Code \u4e2d\u8fdb\u884c\u8c03\u8bd5\u7684\u6b65\u9aa4\uff1a"}),(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u5b89\u88c5\u6240\u9700\u6269\u5c55\uff1a\u9996\u5148\uff0c\u5728 VS Code \u4e2d\u5b89\u88c5\u9002\u7528\u4e8e\u60a8\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u76f8\u5e94\u6269\u5c55\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u4f7f\u7528 Python \u8fdb\u884c\u5f00\u53d1\uff0c\u5219\u9700\u8981\u5b89\u88c5 Python \u6269\u5c55\u3002"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:'\u914d\u7f6e\u8c03\u8bd5\u5668\uff1a\u5728 VS Code \u4e2d\uff0c\u6253\u5f00\u8981\u8c03\u8bd5\u7684\u9879\u76ee\u6587\u4ef6\u5939\u3002\u7136\u540e\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684\u8c03\u8bd5\u56fe\u6807\uff08\u6216\u6309\u4e0b Ctrl+Shift+D \u5feb\u6377\u952e\uff09\uff0c\u5e76\u70b9\u51fb "\u521b\u5efa launch.json \u6587\u4ef6"\u3002\u9009\u62e9\u4e0e\u60a8\u7684\u7f16\u7a0b\u8bed\u8a00\u76f8\u5bf9\u5e94\u7684\u8c03\u8bd5\u914d\u7f6e\u6a21\u677f\uff0c\u5982 "Python" \u6216 "Node.js"\u3002'}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u914d\u7f6e\u8c03\u8bd5\u4efb\u52a1\uff1a\u5728 launch.json \u6587\u4ef6\u4e2d\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u5305\u542b\u8c03\u8bd5\u914d\u7f6e\u7684\u6a21\u677f\u3002\u6839\u636e\u60a8\u7684\u9879\u76ee\u9700\u6c42\uff0c\u914d\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n"]}),"\n"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:'"name"\uff1a\u8c03\u8bd5\u914d\u7f6e\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002'}),"\n",(0,d.jsx)(s.li,{children:'"type"\uff1a\u8c03\u8bd5\u5668\u7684\u7c7b\u578b\uff0c\u4f8b\u5982 "python"\u3001"node" \u7b49\u3002'}),"\n",(0,d.jsx)(s.li,{children:'"request"\uff1a\u8c03\u8bd5\u5668\u7684\u8bf7\u6c42\u7c7b\u578b\uff0c\u901a\u5e38\u662f "launch"\u3002'}),"\n",(0,d.jsx)(s.li,{children:'"program"\uff1a\u6307\u5b9a\u8981\u8c03\u8bd5\u7684\u4e3b\u7a0b\u5e8f\u6587\u4ef6\u3002'}),"\n",(0,d.jsx)(s.li,{children:"\u5176\u4ed6\u9002\u7528\u4e8e\u7279\u5b9a\u8bed\u8a00\u548c\u6846\u67b6\u7684\u914d\u7f6e\u9009\u9879\u3002"}),"\n"]}),(0,d.jsxs)(s.ol,{start:"4",children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u8bbe\u7f6e\u65ad\u70b9\uff1a\u5728\u60a8\u5e0c\u671b\u5728\u4ee3\u7801\u4e2d\u505c\u6b62\u6267\u884c\u7684\u4f4d\u7f6e\u8bbe\u7f6e\u65ad\u70b9\u3002\u5728 VS Code \u7684\u7f16\u8f91\u5668\u4e2d\uff0c\u5355\u51fb\u884c\u53f7\u533a\u57df\u5de6\u4fa7\u7684\u7a7a\u767d\u5904\uff0c\u4ee5\u5728\u8be5\u884c\u4e0a\u8bbe\u7f6e\u65ad\u70b9\u3002\u65ad\u70b9\u5c06\u663e\u793a\u4e3a\u7ea2\u8272\u5706\u70b9\u3002"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u542f\u52a8\u8c03\u8bd5\u4f1a\u8bdd\uff1a\u70b9\u51fb\u8c03\u8bd5\u9762\u677f\u9876\u90e8\u7684\u7eff\u8272\u64ad\u653e\u6309\u94ae\uff0c\u6216\u6309\u4e0b F5 \u952e\u6765\u542f\u52a8\u8c03\u8bd5\u4f1a\u8bdd\u3002\u8c03\u8bd5\u5668\u5c06\u542f\u52a8\u5e76\u5f00\u59cb\u6267\u884c\u60a8\u7684\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u6267\u884c\u8c03\u8bd5\u64cd\u4f5c\uff1a\u5f53\u4ee3\u7801\u6267\u884c\u5230\u65ad\u70b9\u65f6\uff0c\u8c03\u8bd5\u5668\u5c06\u4f1a\u6682\u505c\u6267\u884c\uff0c\u5e76\u663e\u793a\u8c03\u8bd5\u5668\u7684\u754c\u9762\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8c03\u8bd5\u5668\u63d0\u4f9b\u7684\u5de5\u5177\u6765\u9010\u6b65\u6267\u884c\u4ee3\u7801\u3001\u67e5\u770b\u53d8\u91cf\u7684\u503c\u3001\u89c2\u5bdf\u5806\u6808\u8ddf\u8e2a\u7b49\u3002\u5e38\u7528\u7684\u8c03\u8bd5\u64cd\u4f5c\u5305\u62ec\uff1a"}),"\n"]}),"\n"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\u5355\u6b65\u6267\u884c\uff1a\u9010\u884c\u6267\u884c\u4ee3\u7801\uff0c\u5e76\u89c2\u5bdf\u6267\u884c\u8fc7\u7a0b\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u65ad\u70b9\u8df3\u8fc7\uff1a\u5728\u4e0d\u6267\u884c\u65ad\u70b9\u4e0a\u7684\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u7ee7\u7eed\u6267\u884c\u4ee3\u7801\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u76f4\u63a5\u8df3\u8f6c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff1a\u5728\u5f53\u524d\u65ad\u70b9\u4e4b\u540e\uff0c\u76f4\u63a5\u8df3\u8f6c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u68c0\u67e5\u53d8\u91cf\u503c\uff1a\u89c2\u5bdf\u548c\u8c03\u8bd5\u53d8\u91cf\u7684\u503c\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u53d8\u91cf\u7684\u503c\u6216\u76d1\u89c6\u7279\u5b9a\u53d8\u91cf\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u4fee\u6539\u53d8\u91cf\u503c\uff1a\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u4fee\u6539\u53d8\u91cf\u7684\u503c\u4ee5\u6d4b\u8bd5\u4e0d\u540c\u7684\u4ee3\u7801\u8def\u5f84\u3002"}),"\n"]}),(0,d.jsxs)(s.ol,{start:"7",children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67e5\u770b\u8c03\u8bd5\u8f93\u51fa\uff1a\u5728\u8c03\u8bd5\u4f1a\u8bdd\u671f\u95f4\uff0c\u60a8\u53ef\u4ee5\u5728 VS Code \u7684\u8c03\u8bd5\u63a7\u5236\u53f0\u4e2d\u67e5\u770b\u8c03\u8bd5\u8f93\u51fa\u3002\u63a7\u5236\u53f0\u663e\u793a\u7a0b\u5e8f\u7684\u65e5\u5fd7\u3001\u9519\u8bef\u6d88\u606f\u548c\u5176\u4ed6\u8c03\u8bd5\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u7ed3\u675f\u8c03\u8bd5\u4f1a\u8bdd\uff1a\u5728\u8c03\u8bd5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u70b9\u51fb\u8c03\u8bd5\u9762\u677f\u9876\u90e8\u7684\u505c\u6b62\u6309\u94ae\uff0c\u6216\u6309\u4e0b Shift+F5 \u952e\u6765\u7ed3\u675f\u8c03\u8bd5\u4f1a\u8bdd\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"\u4e0b\u9762\u6211\u4eec\u4ee5\u4e00\u4e2a\u793a\u4f8b\u6765\u770b\u770bDebug\u7684\u5177\u4f53\u64cd\u4f5c"})}),"\n",(0,d.jsx)(s.p,{children:"\u9996\u5148\u6211\u4eec\u5148\u770b\u4e00\u4e0b\u4e00\u4e2a\u5b8c\u6574API\u7684\u5177\u4f53\u8fd0\u884c\u60c5\u51b5\uff0c\u6211\u4eec\u4ee5todoapp\u4ee3\u7801\u4e3a\u4f8b\u5b50\uff0c\u770b\u4e00\u4e0b\u521b\u5efa\u4e00\u4e2atodo\u7684\u5177\u4f53\u8fc7\u7a0b\u3002"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(4968).A+"",width:"1920",height:"1022"})}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\u6253\u5f00",(0,d.jsx)(s.code,{children:"main.py"}),"\u6587\u4ef6\uff0c\u70b9\u5f00\u53f3\u4e0a\u952e\u8fd0\u884c\u83dc\u5355\uff0c\u70b9\u51fb\u8c03\u8bd5python\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(8179).A+"",width:"1920",height:"1020"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(4074).A+"",width:"1920",height:"1021"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(7845).A+"",width:"1920",height:"1018"})}),"\n",(0,d.jsxs)(s.ol,{start:"2",children:["\n",(0,d.jsx)(s.li,{children:"\u7528\u6d4f\u89c8\u5668\u6253\u5f00\u770b\u770b\u6211\u4eec\u7684\u8ddf\u8def\u7531\uff0c\u7136\u540e\u8fdb\u5165API\u7ba1\u7406\u754c\u9762\uff0c\u5982\u679c\u5df2\u7ecf\u9274\u6743\u8bb0\u5f97\u8981\u767b\u5f55root\u6743\u9650\u7684\u8d26\u53f7\u3002"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(1932).A+"",width:"1920",height:"1018"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(4583).A+"",width:"1920",height:"995"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(2094).A+"",width:"1920",height:"1021"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(7961).A+"",width:"1920",height:"985"})}),"\n",(0,d.jsxs)(s.ol,{start:"3",children:["\n",(0,d.jsxs)(s.li,{children:["\u5728\u7ba1\u7406\u754c\u9762\u70b9\u5f00\u6211\u4eec\u8981\u6d4b\u8bd5\u7684API\uff0c\u7136\u540e\u56de\u5230vscode\uff0c\u5728",(0,d.jsx)(s.code,{children:"/crud/todo.py"}),"\u4e2d\u627e\u5230\u6211\u4eec\u8981\u6d4b\u8bd5api\u51fd\u6570\uff0c\u5728\u51fd\u6570\u5b9a\u4e49\u90e8\u5206\u7684\u4e0b\u4e00\u884c\u6253\u4e0a\u65ad\u70b9\uff0c\u7136\u540e\u56de\u5230api\u7ba1\u7406\u754c\u9762\uff0c\u70b9\u51fbtry it out\uff0c\u518d\u70b9\u51fbexecute\uff0c\u7136\u540e\u770b\u5230loading\u4e00\u76f4\u8f6c\u5708\u5708\uff0c\u56de\u5230vscode\uff0c\u6b64\u65f6\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(9840).A+"",width:"1920",height:"1017"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(3990).A+"",width:"258",height:"314"})}),"\n",(0,d.jsxs)(s.ol,{start:"4",children:["\n",(0,d.jsx)(s.li,{children:"\u5148\u70b9\u51fb\u5355\u6b65\u8c03\u8bd5\uff08F11\uff09\u7136\u540e\u70b9\u51fb\u9010\u6b65\u8c03\u8bd5\uff08F10\uff09\uff0c\u65f6\u523b\u6ce8\u610f\u5de6\u4fa7\u7684\u53d8\u91cf\u53d8\u5316\u3002"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(319).A+"",width:"1920",height:"704"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(5668).A+"",width:"1919",height:"1018"})}),"\n",(0,d.jsxs)(s.ol,{start:"5",children:["\n",(0,d.jsxs)(s.li,{children:["\u5728\u51e0\u6b21\u9010\u6b65\u8c03\u8bd5\u4e4b\u540e\u4f1a\u5207\u6362\u5230",(0,d.jsx)(s.code,{children:"/api/todos.py"}),"\u6587\u4ef6\u4e2d,\u5728\u6b64\u9010\u6b65\u8fc7\u7a0b\uff0c\u8fdb\u5165\u5230",(0,d.jsx)(s.code,{children:"/api/deps.py"}),"\u6587\u4ef6\u4e2d\uff0c\u7531\u6b64\u53ef\u89c1api\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e00\u76ee\u4e86\u7136\uff0c\u5728\u6b64\u70b9\u51fb\u9010\u6b65\u8fc7\u7a0b\u8c03\u8bd5\u7ed3\u675f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"\u6b64\u65f6\u6570\u636e\u5e93\u4e2d\u4e5f\u6709\u4e86\u6211\u4eec\u521b\u5efa\u7684\u65b0todo\uff1a"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(5613).A+"",width:"1920",height:"995"})}),"\n",(0,d.jsx)(s.p,{children:"\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u54ea\u4e00\u4e2a\u9010\u6b65\u8fc7\u7a0b\u540e\u6709\u62a5\u9519\uff0c\u8bc1\u660e\u6240\u5728\u884c\u4ee3\u7801\u6709\u95ee\u9898\uff0c\u8fd9\u662f\u5c31\u9700\u8981\u540c\u5b66\u4eec\u901a\u8fc7\u89c2\u5bdf\u53d8\u91cf\uff0c\u67e5\u770b\u62a5\u9519\uff0c\u8c37\u6b4c\u7b49\u65b9\u5f0f\u53bb\u89e3\u51b3\uff0c\u7136\u540e\u5728\u91cd\u590d\u8c03\u8bd5\u64cd\u4f5c\u3002"})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},4968:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_01-fee2edb6035deb998031418bc28c968e.png"},8179:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_02-c058a9348229f89a2d940350cb363dba.png"},4074:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_03-0efb2838c2af5e6eab46699807b06845.png"},7845:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_04-3b10edd23e3e2ec1fbb8e5e035f85da4.png"},1932:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_05-9bb44d7737c13b001d543e86c2d2e5df.png"},4583:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_06-25ab248330fa4037b6966f29dc8880a4.png"},2094:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_07-aba4b68f49eaf5e9367410f56e28ba47.png"},7961:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_08-59b4ef84df4423fa2dd80d83b7c73413.png"},9840:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_09-677eee2946513d439f460ed4acaa4bb6.png"},3990:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_10-b29847f5ba9e2242583f425ddc219bdb.png"},319:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_11-17c854ef5cb8d57390c7721c8319a56b.png"},5668:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_12-33d8c5d7c037c1d8ad7558e35a2f9563.png"},5613:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/debug_13-0cc43495f9b866febb3eda7da3be9a84.png"},1377:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var d=n(9474);const i={},t=d.createContext(i);function c(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);