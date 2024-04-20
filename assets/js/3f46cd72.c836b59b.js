"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[860],{22705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var s=t(13274),i=t(71377);const a={id:"setup",sidebar_position:2},o="\u7b2c\u4e00\u4e2aHTTP\u7684API",d={id:"todo/backend/setup",title:"\u7b2c\u4e00\u4e2aHTTP\u7684API",description:"\u5b89\u88c5FastAPI\u7684\u4f9d\u8d56",source:"@site/docs/todo/backend/setup.md",sourceDirName:"todo/backend",slug:"/todo/backend/setup",permalink:"/cs202/todo/backend/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/backend/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"setup",sidebar_position:2},sidebar:"todoSidebar",previous:{title:"HTTP\u65b9\u6cd5\u548c\u72b6\u6001\u7801",permalink:"/cs202/todo/backend/http"},next:{title:"\u4e00\u4e2a\u7b80\u5355\u7684FastAPI\u6848\u4f8b",permalink:"/cs202/todo/backend/demo"}},c={},r=[{value:"\u5b89\u88c5FastAPI\u7684\u4f9d\u8d56",id:"\u5b89\u88c5fastapi\u7684\u4f9d\u8d56",level:2},{value:"\u5b9e\u73b0HTTP\u7684API\u5e94\u7528",id:"\u5b9e\u73b0http\u7684api\u5e94\u7528",level:2},{value:"\u8fd0\u884c FastAPI \u5e94\u7528\u7a0b\u5e8f",id:"\u8fd0\u884c-fastapi-\u5e94\u7528\u7a0b\u5e8f",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7b2c\u4e00\u4e2ahttp\u7684api",children:"\u7b2c\u4e00\u4e2aHTTP\u7684API"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5fastapi\u7684\u4f9d\u8d56",children:"\u5b89\u88c5FastAPI\u7684\u4f9d\u8d56"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'pip install fastapi\npip install "uvicorn[standard]"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u73b0http\u7684api\u5e94\u7528",children:"\u5b9e\u73b0HTTP\u7684API\u5e94\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u4e8b\u5b9e\u4e0a\u7528FastAPI\u53bb\u5b9e\u73b0\u4e00\u4e2a\u6216\u8005\u591a\u4e2aHTTP APIs\uff0c\u90fd\u53ef\u4ee5\u9075\u5b88\u5982\u4e0b\u6d41\u7a0b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b9a\u4e00\u4e2aFastAPI\u7684API\u5bf9\u8c61\uff0c\u4f8b\u5982: ",(0,s.jsx)(n.code,{children:"app=FastAPI()"}),"\uff1b"]}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528Pydantic\u53bb\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\uff08\u5728\u5f53\u524d\u6848\u4f8b\u4e2d\u4e0d\u4f1a\u4f7f\u7528\u5230\u8fd9\u4e00\u6b65\uff0c\u4f46\u8bf7\u8bb0\u4f4f\u8fd9\u4e00\u6b65\u9aa4\uff0c\u8fd9\u5728\u771f\u6b63\u7684\u9879\u76ee\u5f00\u53d1\u4e2d\u4f1a\u7528\u5230\uff09\uff1b"}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06HTTP\u65b9\u6cd5\u548cURL\u6620\u5c04\u5230\u76f8\u5173\u7684Python\u51fd\u6570\u3002\u524d\u9762\u63d0\u5230\u7684\u4e0d\u540cHTTP\u65b9\u6cd5\u53ef\u4ee5\u5206\u522b\u901a\u8fc7",(0,s.jsx)(n.code,{children:"@app.get()"}),"\uff0c",(0,s.jsx)(n.code,{children:"@app.post()"}),"\uff0c",(0,s.jsx)(n.code,{children:"@app.put()"}),", ",(0,s.jsx)(n.code,{children:"@app.delete()"}),"\u7b49\u88c5\u9970\u5668\u8fdb\u884c\u8c03\u7528\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u88c5\u9970\u5668\u91cc\u9762\u4f20\u5165URL\uff0c\u4f8b\u5982\uff1a",(0,s.jsx)(n.code,{children:'@app.get("/path")'})]}),"\n",(0,s.jsx)(n.li,{children:"\u8fd0\u884c\u8be5API\u5e94\u7528\u3002\u5728\u547d\u4ee4\u884c\u7ec8\u7aef\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uvicorn main:app --reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d main \u6307\u7684\u662f Python \u6587\u4ef6\u540d\uff0capp \u6307\u7684\u662f\u5728\u7b2c\u4e00\u6b65\u521b\u5efa\u7684API\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4e0b\u662f\u4e00\u4e2a\u4ee3\u7801\u5b9e\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'# 0. Import Python Library\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\n# 1. Define an API object\napp = FastAPI()\n\n# 2. Define data type\n# This application is not using this feature\n\n# 3. Map HTTP method and path to Python function\n@app.get("/")\ndef root():\n    return {"message": "Hello World!"}\n\n# 4. Start the API application (on command line)\n# !uvicorn main:app --reload\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u7528 VS Code \u6253\u5f00 ",(0,s.jsx)(n.code,{children:"backend"})," \u76ee\u5f55\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"backend"})," \u76ee\u5f55\u4e2d\u65b0\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"main.py"})," \u6587\u4ef6\uff0c\n\u5c06\u4e0a\u8ff0\u4ee3\u7801\u590d\u5236\u5230 ",(0,s.jsx)(n.code,{children:"main.py"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd0\u884c-fastapi-\u5e94\u7528\u7a0b\u5e8f",children:"\u8fd0\u884c FastAPI \u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"uvicorn main:app --reload"}),"\u547d\u4ee4\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u65e5\u5fd7:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(17246).A+"",width:"2222",height:"634"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5219\u8bf4\u660e\u8be5FastAPI\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u6210\u529f\u8fd0\u884c\u3002\u9ed8\u8ba4\u7684FastAPI\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u5728",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8000"}),",\n\u8bf7\u6253\u5f00Chrome\u6d4f\u89c8\u5668\uff0c\u5e76\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u4e2d\u8f93\u5165\u5982\u4e0bURL\uff1a",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8000"}),"\u3002\u4e0d\u5982\u610f\u5916\u7684\u8bdd\uff0c\n\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u5230\u5982\u4e0b\u5185\u5bb9\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(97072).A+"",width:"1290",height:"536"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u5230\u4e0a\u8bc9\u5185\u5bb9\uff0c\u90a3\u4f60\u5c31\u5b9e\u73b0\u4e86\u4f60\u4eba\u751f\u4e2d\u7b2c\u4e00\u4e2aWeb\u540e\u7aef\u7684API\u3002\u5f53\u7136\u8fd9\u4e2aAPI\u5f88\u7b80\u5355\uff0c\u8fd9\u4e2aAPI\u5b9e\u73b0\u4e86\u7ed9\uff08",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8000"}),"\uff09URL\u53d1\u9001HTTP ",(0,s.jsx)(n.code,{children:"GET"}),"\u8bf7\u6c42\uff0cWeb\u540e\u7aef\u7684\u5e94\u7528\u670d\u52a1\uff08FastAPI\u5e94\u7528\u7a0b\u5e8f\uff09\u8fd4\u56de ",(0,s.jsx)(n.code,{children:'{"message": "Hello World!"}'}),"\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},97072:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/hello_chrome-3106f5b52b6ef17f12e7ce3f91ec2708.png"},17246:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start_log-f51a3fe2709860c6cd1d982107135a56.png"},71377:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(79474);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);