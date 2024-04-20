"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9363],{56884:(A,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=e(13274),d=e(71377);const s={id:"http_get",sidebar_position:4},o="HTTP GET \u8bf7\u6c42",r={id:"todo/backend/http_get",title:"HTTP GET \u8bf7\u6c42",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/todo/backend/get.md",sourceDirName:"todo/backend",slug:"/todo/backend/http_get",permalink:"/cs202/todo/backend/http_get",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/backend/get.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"http_get",sidebar_position:4},sidebar:"todoSidebar",previous:{title:"\u4e00\u4e2a\u7b80\u5355\u7684FastAPI\u6848\u4f8b",permalink:"/cs202/todo/backend/demo"},next:{title:"HTTP POST \u8bf7\u6c42",permalink:"/cs202/todo/backend/http_post"}},i={},l=[{value:"\u6700\u7b80\u5355\u7684 <code>HTTP GET</code> \u8bf7\u6c42",id:"\u6700\u7b80\u5355\u7684-http-get-\u8bf7\u6c42",level:2},{value:"\u4e00\u4e2a\u5e26\u6709\u8def\u5f84\u53c2\u6570\u7684URL",id:"\u4e00\u4e2a\u5e26\u6709\u8def\u5f84\u53c2\u6570\u7684url",level:2},{value:"URL\u4e2d\u5305\u542b\u67e5\u8be2\u53c2\u6570",id:"url\u4e2d\u5305\u542b\u67e5\u8be2\u53c2\u6570",level:2}];function c(A){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"http-get-\u8bf7\u6c42",children:"HTTP GET \u8bf7\u6c42"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTTP GET"})," \u8bf7\u6c42\u662f\u4e00\u79cd\u7528\u4e8e\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6570\u636e\u7684\u65b9\u6cd5\u3002\u5b83\u662f HTTP \u534f\u8bae\u4e2d\u7684\u4e00\u79cd\u8bf7\u6c42\u65b9\u6cd5\uff0c\u7528\u4e8e\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u7279\u5b9a\u8d44\u6e90\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u7684\u7279\u70b9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6570\u636e\u4f20\u8f93\u901a\u8fc7 URL \u7684\u67e5\u8be2\u53c2\u6570\u8fdb\u884c\uff0c\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u9644\u52a0\u5728 URL \u672b\u5c3e\u3002"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u901a\u5e38\u7528\u4e8e\u83b7\u53d6\u6570\u636e\uff0c\u800c\u4e0d\u5bf9\u670d\u52a1\u5668\u7aef\u7684\u6570\u636e\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u662f\u5e42\u7b49\u7684\uff0c\u5373\u591a\u6b21\u91cd\u590d\u76f8\u540c\u7684 ",(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u4e0d\u4f1a\u5bf9\u670d\u52a1\u5668\u7aef\u7684\u6570\u636e\u4ea7\u751f\u5f71\u54cd\uff0c\u53ea\u662f\u83b7\u53d6\u76f8\u540c\u7684\u54cd\u5e94\u7ed3\u679c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u7684\u6570\u636e\u901a\u5e38\u4f1a\u88ab\u7f13\u5b58\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u548c\u6548\u7387\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5f53\u5ba2\u6237\u7aef\u53d1\u9001 ",(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u65f6\uff0c\u4f1a\u5728\u8bf7\u6c42\u5934\u4e2d\u6307\u5b9a\u8bf7\u6c42\u7684\u76ee\u6807 URL\uff0c\u4ee5\u53ca\u5176\u4ed6\u5fc5\u8981\u7684\u5934\u90e8\u4fe1\u606f\uff0c\u5982 Host\uff08\u6307\u5b9a\u670d\u52a1\u5668\u7684\u57df\u540d\u6216 IP \u5730\u5740\uff09\u3001User-Agent\uff08\u6307\u5b9a\u5ba2\u6237\u7aef\u7684\u4fe1\u606f\uff09\u7b49\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728 URL \u4e2d\u4f7f\u7528\u67e5\u8be2\u53c2\u6570\uff0c\u901a\u8fc7\u952e\u503c\u5bf9\u7684\u65b9\u5f0f\u4f20\u9012\u989d\u5916\u7684\u6570\u636e\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"?key1=value1&key2=value2"}),"\u3002\u670d\u52a1\u5668\u7aef\u53ef\u4ee5\u6839\u636e\u8fd9\u4e9b\u67e5\u8be2\u53c2\u6570\u7684\u503c\u6765\u8fd4\u56de\u76f8\u5e94\u7684\u6570\u636e\u3002",(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u901a\u5e38\u7528\u4e8e\u83b7\u53d6\u7279\u5b9a\u8d44\u6e90\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u83b7\u53d6\u6587\u7ae0\u5217\u8868\u3001\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u6700\u7b80\u5355\u7684-http-get-\u8bf7\u6c42",children:["\u6700\u7b80\u5355\u7684 ",(0,t.jsx)(n.code,{children:"HTTP GET"})," \u8bf7\u6c42"]}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from fastapi import FastAPI\n\n# skipping...\n\nTODOS = [\n    {\n        "id": 1,\n        "content": "Init todo1",\n        "is_done": False\n    },\n    {\n        "id": 2,\n        "content": "Init todo2",\n        "is_done": False\n    },\n]\n\n# skipping...\n\n@app.get("/todos")\ndef get_all_todos():\n    return TODOS\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u89e3\u91ca\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u4e00\u4e2a\u5b57\u5178\u5217\u8868\u7684 TODOS \u4e2d\u521b\u5efa\u4e86\u4e00\u4e9b\u793a\u4f8b\u7684\u4ee3\u529e\u6e05\u5355\u6570\u636e\u3002\u76ee\u524d\uff0c\u8fd9\u4e9b\u6570\u636e\u5f88\u57fa\u7840\u548c\u7b80\u5355\uff0c\u4f46\u5bf9\u4e8e\u5b66\u4e60\u6765\u8bf4\u5df2\u7ecf\u8db3\u591f\u3002\u5728\u6559\u7a0b\u7cfb\u5217\u7684\u540e\u9762\uff0c\u6211\u4eec\u5c06\u6269\u5c55\u8fd9\u4e2a\u6570\u636e\u96c6\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u4e00\u4e2aMySQL\u7684\u6570\u636e\u5e93\u4e2d\u3002\uff08",(0,t.jsx)(n.em,{children:"\u540e\u7eed\u5185\u5bb9\u5c06\u4e0d\u5728\u89e3\u91ca\u8fd9\u6bb5\u4ee3\u7801"}),"\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@app.get"})," \u662f FastAPI \u6846\u67b6\u4e2d\u7684\u4e00\u4e2a\u88c5\u9970\u5668\uff0c\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"HTTP GET"})," \u8bf7\u6c42\u7684\u5904\u7406\u5668\u51fd\u6570\u3002\u800c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5f53\u4f60\u53d1\u9001\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u5230 ",(0,t.jsx)(n.code,{children:"/todos"})," \u8def\u5f84\u65f6\uff0cFastAPI \u5c06\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"get_all_todos"})," \u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709 TODOS \u6570\u636e\u5e8f\u5217\u5316\u540e\u7684JSON Array \u7684\u54cd\u5e94\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7ed3\u4e0b\u6765\u8ba9\u6211\u4eec\u7528\u6d4f\u89c8\u5668\u6253\u5f00URL ",(0,t.jsx)(n.code,{children:"http://localhost:8000/docs"}),"(",(0,t.jsx)(n.strong,{children:"\u6253\u5f00 URL \u524d\u8bf7\u786e\u4fdd\u6211\u4eec\u7684FastAPI \u5e94\u7528\u662f\u8fd0\u884c\u8d77\u6765\u7684"}),")\uff0c\u5f00\u59cb\u505a\u4e00\u4e2a\u5b9e\u9a8c\uff0c\u770b\u770b\u8fd9\u4e2aAPI \u8fd4\u56de\u7684\u6570\u636e\u662f\u4e0d\u662f\u4e00\u7ec4 TODOS \u7684 JSON Array\u3002(\u76f8\u5173\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/cs202/todo/backend/demo",children:"\u4e00\u4e2a\u7b80\u5355\u7684FastAPI\u6848\u4f8b"})," \u4e2d\u7684\u6d4b\u8bd5 API \u5185\u5bb9)\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0b\u662f FastAPI \u7684Swagger UI \u4e2d\u7684\u5b9e\u9a8c\u7ed3\u679c\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:e(30532).A+"",width:"1544",height:"1304"})}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u5b9e\u9a8c\u7ed3\u679c\u6211\u4eec\u53ef\u4ee5\u77e5\uff0c\u901a\u8fc7\u4e0a\u8ff0\u4ee3\u7801\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"HTTP GET"})," \u8bf7\u6c42\u7684API\uff0c\u8be5API\u7684 URL \u662f\uff1a",(0,t.jsx)(n.code,{children:"http://localhost:8000/todos"}),"\u3002\u53ea\u8981\u5f80\u8be5API\u53d1\u9001 ",(0,t.jsx)(n.code,{children:"HTTP GET"})," \u8bf7\u6c42\uff0c \u4fbf\u53ef\u5f97\u5230\u4e00\u7ec4 TODO \u7684 JSON Array\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e00\u4e2a\u5e26\u6709\u8def\u5f84\u53c2\u6570\u7684url",children:"\u4e00\u4e2a\u5e26\u6709\u8def\u5f84\u53c2\u6570\u7684URL"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u60f3\u5f97\u5230\u6240\u6709\u7684 TODOS \uff0c\u800c\u662f\u53ea\u60f3\u5f97\u5230\u5177\u4f53\u67d0\u4e00\u4e2a TODO \u7684\u6240\u6709\u4fe1\u606f\uff0c\u90a3\u4e48\u6709\u6ca1\u6709\u529e\u6cd5\u5728\u53d1\u9001 ",(0,t.jsx)(n.code,{children:"HTTP GET"})," \u7684\u65f6\u5019\u544a\u8bc9 FastAPI Web \u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\u60f3\u8981\u54ea\u4e00\u4e2a TODO \u3002\u7b54\u6848\u662f\u6709\u8fd9\u6837\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5982\u4f55\u5728URL\u91cc\u9762\u52a0\u5165\u8def\u5f84\u53c2\u6570\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from fastapi import FastAPI\n\n# skipping...\n\nTODOS = [\n    {\n        "id": 1,\n        "content": "Init todo1",\n        "is_done": False\n    },\n    {\n        "id": 2,\n        "content": "Init todo2",\n        "is_done": False\n    },\n]\n\n# skipping...\n\n@app.get("/todos/{todo_id}")\ndef get_todo_by_id(todo_id: int):\n    result = None\n    for todo in TODOS:\n        if todo["id"] == todo_id:\n            result = todo\n\n    if result:\n        return result\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u89e3\u91ca\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,t.jsx)(n.code,{children:"GET"})," API, \u5176\u8def\u5f84\u662f\uff1a",(0,t.jsx)(n.code,{children:"/todos/{todo_id}"}),"\u3002\u8fd9\u91cc\u7684\u82b1\u62ec\u53f7\u8868\u793a\u53c2\u6570\u503c\uff0c\u5b83\u9700\u8981\u4e0e\u7aef\u70b9\u51fd\u6570 ",(0,t.jsx)(n.code,{children:"get_todo_by_id"})," \u63a5\u53d7\u7684\u53c2\u6570\u4e4b\u4e00\u5339\u914d\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e24\u5904\u5730\u65b9\u7684\u540d\u5b57\u90fd\u5f97\u4e00\u6837\uff0c\u793a\u4f8b\u4ee3\u7801\u4e2d\u5c31\u662f ",(0,t.jsx)(n.code,{children:"todo_id"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u51fd\u6570\u5b9a\u4e49\u4e86API\u7684\u903b\u8f91\u3002\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u63d0\u793a\u4e0e URL \u8def\u5f84\u53c2\u6570\u5339\u914d\uff0cFastAPI \u4f7f\u7528\u5b83\u4eec\u6765\u6267\u884c\u81ea\u52a8\u9a8c\u8bc1\u548c\u8f6c\u6362\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5173\u7cfbURL \u8def\u5f84\u53c2\u6570\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"todo_id"})," \u5982\u4f55\u8f6c\u6362\u6210\u51fd\u6570 ",(0,t.jsx)(n.code,{children:"get_todo_by_id"})," \u4e2d\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"todo_id"}),"\u7684\u3002\u5f53\u7136\u5982\u679c\u4f60\u5b9e\u5728\u662f\u60f3\u77e5\u9053\u8f6c\u5316\u7684\u539f\u7406\uff0c\u53ef\u4ee5\u53bb\u770b FastAPI \u7684\u6e90\u4ee3\u7801\u3002\uff08",(0,t.jsx)(n.em,{children:"\u8fd9\u5c31\u662f\u5f00\u6e90\u793e\u533a\u7684\u597d\u5904\uff0c\u53ea\u8981\u662f\u5f00\u6e90\u7684\u9879\u76ee\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u6e90\u4ee3\u7801\u77e5\u9053\u5176\u5e95\u5c42\u5b9e\u73b0\u7684\u539f\u7406\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u53ef\u4ee5\u5b66\u4e60\u4e16\u754c\u4e0a\u6700\u597d\u7684\u7a0b\u5e8f\u5458\u4e4b\u4e00\u662f\u5982\u4f55\u5199\u4ee3\u7801\u7684"}),"\uff09"]}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684for\u5faa\u73af\u548c\u4e00\u4e2a ID \u6761\u4ef6\u68c0\u67e5\u6765\u6a21\u62df\u4ece\u6570\u636e\u5e93\u6309 ID \u83b7\u53d6\u6570\u636e\u7684\u8fc7\u7a0b\u3002\u7136\u540e\uff0cFastAPI \u5c06\u6570\u636e\u5e8f\u5217\u5316\u5e76\u4ee5 JSON \u683c\u5f0f\u8fd4\u56de\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u6253\u5f00\uff1a",(0,t.jsx)(n.code,{children:"http://localhost:8000/docs"}),"(",(0,t.jsx)(n.strong,{children:"\u6253\u5f00 URL \u524d\u8bf7\u786e\u4fdd\u6211\u4eec\u7684FastAPI \u5e94\u7528\u662f\u8fd0\u884c\u8d77\u6765\u7684"}),")"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\uff0c\u5c55\u5f00 ",(0,t.jsx)(n.code,{children:"GET /todos/{todo_id}"})," API\uff1b\n",(0,t.jsx)(n.img,{src:e(83743).A+"",width:"1218",height:"81"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,t.jsx)(n.code,{children:"Try it Out"})," \u6309\u94ae;"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"todo_id"})," \u91cc\u8f93\u5165\u503c: 1;"]}),"\n",(0,t.jsxs)(n.li,{children:["\u70b9\u51fb\u5927\u5927\u7684 ",(0,t.jsx)(n.code,{children:"Execute"})," \u6309\u94ae\uff1b"]}),"\n",(0,t.jsxs)(n.li,{children:["\u70b9\u51fb\u5c0f\u7684 ",(0,t.jsx)(n.code,{children:"Execute"})," \u6309\u94ae\u53ef\u4ee5\u91cd\u590d\u5b9e\u9a8c\uff1b"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:e(70454).A+"",width:"1542",height:"960"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684 ",(0,t.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\u7684 URL \u53d8\u6210\u4e86 ",(0,t.jsx)(n.code,{children:"http://localhost:8000/todos/1"}),"\uff0c\u4f60\u53ef\u4ee5\u505a\u4e00\u4e2a\u5b9e\u9a8c\u628a\u8f93\u5165\u7684\u503c\u53d8\u6210 ",(0,t.jsx)(n.code,{children:"2"}),", \u8fd9\u6837 URL \u4f1a\u53d8\u6210 ",(0,t.jsx)(n.code,{children:"http://localhost:8000/todos/2"}),"\u3002 \u5b8c\u7f8e\uff01\uff01\uff01\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u6211\u4eec\u5c31\u53ef\u4ee5\u628a\u6211\u4eec\u60f3\u8981\u7684\u5177\u4f53\u67d0\u4e00\u4e2a TODO \u901a\u8fc7URL\u4e2d\u4f20\u5165\u5b83\u7684 ID \u65b9\u6cd5\u5b9e\u73b0\u3002 (",(0,t.jsx)(n.strong,{children:"\u6b64\u5904\u91c7\u7528\u4f20\u5165ID\u7684\u65b9\u5f0f\uff0c\u662f\u56e0\u4e3a\u4e00\u822c\u6211\u4eec\u4f1a\u8ba9\u6bcf\u4e2aTODO\u7684ID\u662f\u5168\u5c40\u552f\u4e00\uff0c\u4e0d\u4f1a\u51fa\u73b0\u4e24\u4e2aTODO\u7684ID\u662f\u4e00\u6837\u7684"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"url\u4e2d\u5305\u542b\u67e5\u8be2\u53c2\u6570",children:"URL\u4e2d\u5305\u542b\u67e5\u8be2\u53c2\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u4e86\u4e0a\u8ff0\u6211\u4eec\u60f3\u83b7\u53d6\u4e00\u4e2a\u5177\u4f53TODO\u7684\u8be6\u7ec6\u4fe1\u606f\u7684\u9700\u6c42\uff0c\u6211\u4eec\u53ef\u80fd\u8fd8\u4f1a\u641c\u7d22\u5305\u542b\u67d0\u4e00\u4e2a\u5173\u952e\u5b57\u7684Todo\u3002\u8fd9\u8be5\u5982\u4f55\u5b9e\u73b0\u5462\uff0c\u8bf7\u770b\u5982\u4e0b\u4ee3\u7801\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'# 0. Import Python Library\nimport uvicorn\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\nfrom typing import Optional\n\n# 1. Define an API object\napp = FastAPI()\n\n# 2. Define data type\n\n# 3. Map HTTP method and path to Python function\n\nTODOS = [\n    {\n        "id": 1,\n        "content": "Init todo1",\n        "is_done": False\n    },\n    {\n        "id": 2,\n        "content": "Init todo2",\n        "is_done": False\n    },\n    {\n        "id": 3,\n        "content": "Test Search",\n        "is_done": False\n    },\n]\n\n@app.get("/")\ndef hello_world():\n    return {"message": "Hello world"}\n\n@app.get("/todos")\ndef get_all_todos():\n    return TODOS\n\n@app.get("/todos/{todo_id}")\ndef get_todo_by_id(todo_id: int):\n    result = None\n    for todo in TODOS:\n        if todo["id"] == todo_id:\n            result = todo\n\n    if result:\n        return result\n    \n@app.get("/todos/search/")\ndef search_todos(\n    keyword: Optional[str] = None, max_results: Optional[int] = 10  \n) -> dict:\n    """\n    Search for todos based on keyword\n    """\n    if not keyword:\n        # we use Python list slicing to limit results\n        # based on the max_results query parameter\n        return {"results": TODOS[:max_results]} \n\n    results = filter(lambda todo: keyword.lower() in todo["content"].lower(), TODOS)  \n    return {"results": list(results)[:max_results]}\n\nif __name__ == "__main__":\n    uvicorn.run("main:app", reload=True, host="127.0.0.1", port=8000)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u65b0\u589e\u4ee3\u7801\u7684\u4e3b\u8981\u662f\u5982\u4e0b\u90e8\u5206\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@app.get("/todos/search/")\ndef search_todos(\n    keyword: Optional[str] = None, max_results: Optional[int] = 10  \n):\n    """\n    Search for todos based on keyword\n    """\n    if not keyword:\n        # we use Python list slicing to limit results\n        # based on the max_results query parameter\n        return {"results": TODOS[:max_results]} \n\n    results = filter(lambda todo: keyword.lower() in todo["content"].lower(), TODOS)  \n    return {"results": list(results)[:max_results]}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u89e3\u91ca\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6211\u4eec\u65b0\u5efa\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"GET"})," API\uff0c\u5b83\u7684\u8def\u5f84\u662f\uff1a",(0,t.jsx)(n.code,{children:"/todos/search"}),"\u3002\u8bf7\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u4e0d\u5e26\u8def\u5f84\u53c2\u6570\u7684URL\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["search_todos \u51fd\u6570\u5b9a\u4e49\u4e86\u65b0API \u7684\u903b\u8f91\u3002\u5b83\u7684\u53c2\u6570\u8868\u793a\u7aef\u70b9\u7684\u67e5\u8be2\u53c2\u6570\u3002\u6709\u4e24\u4e2a\u53c2\u6570\uff1akeyword \u548c max_results\u3002\u8fd9\u610f\u5473\u7740\u4f7f\u7528\u8fd9\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\u7684\u67e5\u8be2\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a",(0,t.jsx)(n.code,{children:"http://localhost:8000/todos/search/?keyword=init&max_results=3"})]}),"\n",(0,t.jsx)(n.li,{children:"\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u53c2\u6570\uff0c\u6211\u4eec\u6307\u5b9a\u4e86\u5b83\u7684\u7c7b\u578b\u548c\u9ed8\u8ba4\u503c\u3002\u8fd9\u4e24\u8005\u90fd\u662f Optional\uff0c\u6765\u81ea\u4e8e Python \u6807\u51c6\u5e93\u7684 typing \u6a21\u5757\u3002FastAPI \u80fd\u591f\u4f7f\u7528\u8fd9\u4e9b\u539f\u751f\u7684 Python \u7c7b\u578b\u58f0\u660e\u6765\u7406\u89e3\u53c2\u6570\u4e0d\u9700\u8981\u88ab\u8bbe\u7f6e\uff08\u5982\u679c\u6211\u4eec\u5e0c\u671b\u53c2\u6570\u662f\u5fc5\u9700\u7684\uff0c\u6211\u4eec\u5c06\u7701\u7565 Optional\uff09\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd9\u4e24\u4e2a\u53c2\u6570\u8fd8\u6709\u4e00\u4e2a\u9ed8\u8ba4\u503c\uff0c\u901a\u8fc7 = \u7b26\u53f7\u6307\u5b9a\u3002\u4f8b\u5982\uff0cmax_result \u67e5\u8be2\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u662f 10\u3002\u5982\u679c\u8bf7\u6c42\u4e2d\u6ca1\u6709\u6307\u5b9a\u8fd9\u4e9b\u53c2\u6570\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u4f7f\u7528 Python \u7684\u5217\u8868\u5207\u7247\u529f\u80fd\u6765\u5b9e\u73b0\u4e00\u4e9b\u57fa\u672c\u7684\u641c\u7d22\u529f\u80fd\uff0c\u9650\u5236\u7ed3\u679c\u6570\u91cf\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u4f7f\u7528 Python \u7684\u8fc7\u6ee4\u5668\u529f\u80fd\u5728\u6211\u4eec\u7684\u793a\u4f8b\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u4e86\u4e00\u4e2a\u975e\u5e38\u57fa\u672c\u7684\u5173\u952e\u5b57\u641c\u7d22\u3002\u641c\u7d22\u5b8c\u6210\u540e\uff0c\u6570\u636e\u7531\u6846\u67b6\u5e8f\u5217\u5316\u4e3a JSON\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u662f\u5b9e\u9a8c\u9636\u6bb5\uff0c\u8bf7\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"http://localhost:8000/docs"}),"(",(0,t.jsx)(n.strong,{children:"\u6253\u5f00 URL \u524d\u8bf7\u786e\u4fdd\u6211\u4eec\u7684FastAPI \u5e94\u7528\u662f\u8fd0\u884c\u8d77\u6765\u7684"}),")"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:e(10537).A+"",width:"1540",height:"1286"})}),"\n",(0,t.jsx)(n.p,{children:'\u8bf7\u6c42\u8fd4\u56de\u4e86\u4e24\u4e2a\u5185\u5bb9\u4e2d\u5305\u542b "init" \u7684todo\u3002\u518d\u6b21\u5c1d\u8bd5\u4f7f\u7528\u5173\u952e\u8bcd "test" \u6765\u67e5\u770b\u8fd4\u56de\u7684\u5185\u5bb9\u5305\u542b "test"\u7684 todo\u3002\u7136\u540e\u5c1d\u8bd5\u8c03\u6574 max_results \u53c2\u6570\u3002'})]})}function g(A={}){const{wrapper:n}={...(0,d.R)(),...A.components};return n?(0,t.jsx)(n,{...A,children:(0,t.jsx)(c,{...A})}):c(A)}},30532:(A,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/http_get_01-c071c57046fe1a8a28cc3e7d5da5098e.png"},83743:(A,n,e)=>{e.d(n,{A:()=>t});const t="data:image/png;base64,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7X9A+2g/PdDxI1962b7//nu3X9MKzzn3bDv4kIOi/XJycm30m6NdtU/ISyHbtds3+lrsA03/evH5l+yrr2a4SilV76ja6LSuXaJBgqqo3vrnaDdNTBU3qtCpUydSNaSQLV57859vud1nnn1GvJfdvtzcXLctXvGjaXvff/dD9LhPP5nuna+Ou5792rcrUp0T5Po10KSJH7q1upYvX+FVV+1r69aWDBuDjhW9sFIeKMy8b9BgW1m4BtwB3md4+ZWXlThi6dJl9s833rSffvzZGjVq6CqXSnQq3OFXainMSrZ9PHWaq0YcdP890RBMYymw7H71lUWG/d//PrNX/vGq/T7/D9vrr3+xK7tfbjvsuEM0qHvskcet13U9S3w/iwwS80TfyedHvGCTJnxoObk5dthhh7pz6n2rjRv7rr33r3+7xx2OOtJt/V/6zqvSS/9+dt55J7vgovPt6GOO8l8udbtbq92ir3898xt75qln7e577opOPx716uumKZX9b7oh2i/egyVexd5TTzzjAtTd99jd+/+a9z8vGgIIIIAAAggggAACCCCwjQkowOpyQkdrXCvswrDDOxwd6B0qBNNx6l9ZIZgupNoHYVr3S+3L33NsQ41Gllb4x+M3qzdZ56fne68UWI1aDSycsXnqW80aYbu5YyTkcgd7v2Z5a4qN+THf0mtFpjalZ20OznRsuhcYpUIb/ebb7jK7ecFVbLu+9w3RCqiVK1faPXcPir484oVnXQChHVMmT3VrSUVf9B588/U37qfntdfY6V6ApUqt/n1vdKGB30+VRsWb/vi//NLuRXa7qWVPPmNfe2P6lTyvvDzKTXNUYKWQbOrUj23l/JVuSmORgwufzPMqljT9s0WL7dzUtnh9tG9D4bREVa3FtueeGeGmTPr7Hhr+iP/QVXOdcOLx7nnQ63/Kez8K8vwmr+It6FjFj0v0fI0XtH32v8+jL2sdruLtjz8W2DVX94p+7sVfL/48PT1S6bi+sFKu+OtBns+d86sL2xRoqanyzg/WTjv91Gi4oyDytlvucAHrld2vcAFVr5697ZVRI+3iSy5y7+2UU0+21q1bBTmt6/PcM383rRt38aUXujXhtE6e1kUb/tADrlrr0Uces27nnO1VELayl14YGR1XAWXf6/vZkd4UxWt6Xe2+1/fdO9jq169vCkbjtfffG29hbzFChbj6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"},70454:(A,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/http_get_03-a13f7bc267db63ee2ca6d22a8f520e28.png"},10537:(A,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/http_get_04-91caa92b184bdd57d4b05d7762c6b87c.png"},71377:(A,n,e)=>{e.d(n,{R:()=>o,x:()=>r});var t=e(79474);const d={},s=t.createContext(d);function o(A){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function r(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(d):A.components||d:o(A.components),t.createElement(s.Provider,{value:n},A.children)}}}]);