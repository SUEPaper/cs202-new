"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4636],{83322:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=s(13274),r=s(71377);const t={id:"axios",sidebar_position:7},i="axios\u5e93\u53d1\u9001HTTP\u8bf7\u6c42",d={id:"todo/frontend/axios",title:"axios\u5e93\u53d1\u9001HTTP\u8bf7\u6c42",description:"\u76ee\u524d\u6211\u4eec\u64cd\u4f5c\u7684\u6570\u636e\u90fd\u662f\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u53ea\u8981\u6d4f\u89c8\u5668\u5173\u95ed\uff0c\u6570\u636e\u5c31\u6ca1\u4e86\u3002",source:"@site/docs/todo/frontend/axios.md",sourceDirName:"todo/frontend",slug:"/todo/frontend/axios",permalink:"/cs202/todo/frontend/axios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend/axios.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"axios",sidebar_position:7},sidebar:"todoSidebar",previous:{title:"\u72b6\u6001\u7ba1\u7406\u548c\u4e8b\u4ef6\u5904\u7406",permalink:"/cs202/todo/frontend/pina"},next:{title:"\u8def\u7531",permalink:"/cs202/todo/frontend/router"}},c={},a=[{value:"\u8bbe\u7f6e FastAPI\u540e\u7aef\u670d\u52a1\u5730\u5740",id:"\u8bbe\u7f6e-fastapi\u540e\u7aef\u670d\u52a1\u5730\u5740",level:2},{value:"axios \u5e93\u5b89\u88c5",id:"axios-\u5e93\u5b89\u88c5",level:2},{value:"axios \u53d1\u9001\u4e00\u4e2aHTTP GET \u8bf7\u6c42",id:"axios-\u53d1\u9001\u4e00\u4e2ahttp-get-\u8bf7\u6c42",level:2},{value:"axios\u4e0epinia\u7ed3\u5408",id:"axios\u4e0epinia\u7ed3\u5408",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:2},{value:"\u6ce8\u518c",id:"\u6ce8\u518c",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u83b7\u53d6\u6570\u636e",id:"\u83b7\u53d6\u6570\u636e",level:2},{value:"\u5269\u4f59\u529f\u80fd",id:"\u5269\u4f59\u529f\u80fd",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"axios\u5e93\u53d1\u9001http\u8bf7\u6c42",children:"axios\u5e93\u53d1\u9001HTTP\u8bf7\u6c42"}),"\n",(0,o.jsx)(n.p,{children:"\u76ee\u524d\u6211\u4eec\u64cd\u4f5c\u7684\u6570\u636e\u90fd\u662f\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u53ea\u8981\u6d4f\u89c8\u5668\u5173\u95ed\uff0c\u6570\u636e\u5c31\u6ca1\u4e86\u3002\n\u800c\u6211\u4eec\u524d\u9762\u5229\u7528FastAPI\u5b9e\u73b0\u4e86Todo\u7684\u589e\u5220\u6539\u67e5\u7684HTTP API\u3002\n\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001HTTP\u8bf7\u6c42\u7684\u65b9\u5f0f\u5230\u540e\u7aef\uff0c\n\u5c06\u6211\u4eecWeb\u9875\u9762\u64cd\u4f5c\u7684\u6570\u636e\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u4e2d\u3002\n\u8fd9\u6837\u6570\u636e\u4e0d\u4f1a\u56e0\u4e3a\u6d4f\u89c8\u5668\u7684\u5173\u95ed\u800c\u4e22\u5931\uff0c\n\u540c\u65f6\u4e5f\u53ef\u4ee5\u8bfb\u53d6\u4e4b\u524d\u8bbe\u7f6e\u7684Todo\u6570\u636e\uff0c\n\u5448\u73b0\u5230Web\u9875\u9762\u4e2d\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u8bbe\u7f6e-fastapi\u540e\u7aef\u670d\u52a1\u5730\u5740",children:"\u8bbe\u7f6e FastAPI\u540e\u7aef\u670d\u52a1\u5730\u5740"}),"\n",(0,o.jsx)(n.p,{children:"\u7531\u4e8e\u4e0d\u540c\u5f00\u53d1\u8005\u73af\u5883\u4e0d\u4e00\u6837\uff0cFastAPI\u7684\u540e\u7aef\u5728\u672c\u673a\u8fd0\u884c\u7684\u7aef\u53e3\u4e0d\u4e00\u6837\u3002\n\u4ea6\u6216\u8bb8\u4f60\u5df2\u7ecf\u5c06FastAPI\u7684\u540e\u7aef\u7a0b\u5e8f\u90e8\u7f72\u5230\u4e86\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u3002\n\u800c\u6bcf\u4e00\u4e2aAPI\u90fd\u8981\u7528\u5230 FastAPI\u7684\u540e\u7aef\u670d\u52a1\u7684\u5730\u5740\uff0c\n\u56e0\u6b64\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5e38\u91cf\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u66f4\u6539\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u5efa\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"src/constant.js"})," \u6587\u4ef6\uff0c\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'export const FASTAPI_BASE_URL="http://127.0.0.1:8001/api/";\n'})}),"\n",(0,o.jsx)(n.h2,{id:"axios-\u5e93\u5b89\u88c5",children:"axios \u5e93\u5b89\u88c5"}),"\n",(0,o.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u5982\u4e66\u5982\u4e0b\u660e\u4eae\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i axios\n"})}),"\n",(0,o.jsx)(n.h2,{id:"axios-\u53d1\u9001\u4e00\u4e2ahttp-get-\u8bf7\u6c42",children:"axios \u53d1\u9001\u4e00\u4e2aHTTP GET \u8bf7\u6c42"}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u5728FastAPI\u7684\u540e\u7aef\u4ee3\u7801\u4e2d\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6700\u7b80\u5355\u7684API\n",(0,o.jsx)(n.code,{children:"http://localhost:8000/api/"}),"\n\u8fd9\u4e2aAPI\u4f1a\u8fd4\u56de\u5982\u4e0b\u6570\u636e\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{"message":"Hello world"}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6700\u7b80\u5355\u7684API\u6765\u6d4b\u8bd5\u6211\u4eecaxios\u662f\u5426\u6709\u7528\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,o.jsx)(n.code,{children:"src/App.vue"})," \u7684\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'showLineNumbers title="src/App.vue"',children:'<script setup>\nimport TodoView from "./views/TodoView.vue";\nimport axios from "axios";\nimport { FASTAPI_BASE_URL } from "./constant";\n\nconst fetchData = async() => {\n  try {\n    const response = await axios.get(`${FASTAPI_BASE_URL}/api/`);\n    console.log(response);\n  } catch (error) {\n    console.error(error);\n  }\n}\nfetchData();\n<\/script>\n\n<template>\n  <TodoView />\n</template>\n\n<style scoped></style>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Chrome\u6d4f\u89c8\u5668\u4e2d\u5728 ",(0,o.jsx)(n.code,{children:"src/App.vue"}),"\u7684\u7b2c\u516b\u884c\u6253\u4e2a\u65ad\u70b9\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(92508).A+"",width:"2796",height:"1660"})}),"\n",(0,o.jsx)(n.p,{children:"\u5237\u65b0\u9875\u9762\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684\u4ee3\u7801\u5361\u5728\u4e86\u5982\u4e0b\u9875\u9762\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(76791).A+"",width:"1410",height:"849"})}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u4e00\u6b65\uff0c\u7136\u540e\u5728Network\u4e2d\u67e5\u770b\u6240\u53d1\u9001\u7684HTTP\u8bf7\u6c42\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(33774).A+"",width:"1670",height:"990"})}),"\n",(0,o.jsx)(n.p,{children:"\u70b9\u51fbresponse\u4fbf\u53ef\u770b\u5230\u8fd9\u4e2aAPI\u8fd4\u56de\u7684\u503c\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(86241).A+"",width:"1362",height:"800"})}),"\n",(0,o.jsxs)(n.p,{children:["\u56de\u5230\u4ee3\u7801\u9875\u9762\uff0c\u5c06\u9f20\u6807\u60ac\u505c\u5230 ",(0,o.jsx)(n.code,{children:"response"})," \u53d8\u91cf\uff0c\n\u53ef\u4ee5\u770b\u5230 ",(0,o.jsx)(n.code,{children:"response"}),"\u7684 ",(0,o.jsx)(n.code,{children:"data"}),"\u5c5e\u6027\u91cc\u9762\u6709\u6211\u4eecFastAPI\u540e\u7aefAPI\u8fd4\u56de\u7684\u503c",(0,o.jsx)(n.code,{children:'{"message":"Hello world"}'}),"\uff0c\n\u5982\u4e0b\u56fe\u6240\u793a\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(1624).A+"",width:"1182",height:"1162"})}),"\n",(0,o.jsx)(n.h2,{id:"axios\u4e0epinia\u7ed3\u5408",children:"axios\u4e0epinia\u7ed3\u5408"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\uff0c\u5c06\u539f\u672c",(0,o.jsx)(n.code,{children:"state"}),"\uff0c\u66ff\u6362\u6210"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'  state: () => ({\n    todoList: [],\n    isLoggedIn: false,\n    userName: "",\n    url: "http://127.0.0.1:8001/api/",\n    token: "",\n  }),\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,o.jsx)(n.code,{children:"url"}),"\u6307\u7684\u662f\u540e\u7aef\u5bf9\u5e94\u7684",(0,o.jsx)(n.code,{children:"url"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,o.jsx)(n.h2,{id:"\u4fee\u6539",children:"\u4fee\u6539"}),"\n",(0,o.jsx)(n.h2,{id:"\u6ce8\u518c",children:"\u6ce8\u518c"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\uff0c\u5c06\u539f\u672c",(0,o.jsx)(n.code,{children:"createUser"}),"\u51fd\u6570\uff0c\u66ff\u6362\u6210"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:' createUser({ username, password }) {\n      const email = username;\n\n      return new Promise((resolve, reject) => {\n        fetch(this.url + "users/", {\n          method: "POST",\n          headers: {\n            Accept: "application/json",\n            "Content-Type": "application/json",\n          },\n          body: JSON.stringify({\n            name: username,\n            email: email,\n            password: password,\n          }),\n        })\n          .then((response) => {\n            if (!response.ok) {\n              throw new Error("Network response was not ok");\n            }\n            return response.json(); // \u8fd4\u56de\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e\n          })\n          .then((data) => {\n            resolve(true); // \u6ce8\u518c\u6210\u529f\uff0c\u8fd4\u56de true\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false); // \u6ce8\u518c\u5931\u8d25\uff0c\u8fd4\u56de false\n          });\n      });\n    },\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa\u7528\u6237\u7684\u51fd\u6570\uff0c\u5b83\u4f7f\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"fetch"})," \u6765\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a POST \u8bf7\u6c42\uff0c\u4ee5\u521b\u5efa\u65b0\u7528\u6237\u3002"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"return new Promise((resolve, reject) => { ... })"}),": \u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u7528\u4e8e\u5f02\u6b65\u5904\u7406\u521b\u5efa\u7528\u6237\u7684\u8bf7\u6c42\u3002",(0,o.jsx)(n.code,{children:"resolve"})," \u548c ",(0,o.jsx)(n.code,{children:"reject"})," \u662f\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u7528\u4e8e\u8868\u793a Promise \u7684\u6267\u884c\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'fetch(this.url + "users/", { ... })'}),": \u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528 Fetch API \u53d1\u9001 HTTP \u8bf7\u6c42\u7684\u8bed\u53e5\u3002\u5b83\u5411\u670d\u52a1\u5668\u7aef\u7684 ",(0,o.jsx)(n.code,{children:"/users/"})," \u8def\u5f84\u53d1\u9001\u4e86\u4e00\u4e2a POST \u8bf7\u6c42\uff0c\u4ee5\u521b\u5efa\u65b0\u7528\u6237\u3002\u8bf7\u6c42\u4e2d\u5305\u542b\u4e86\u5fc5\u8981\u7684\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u4f53\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".then((response) => { ... })"}),": \u8fd9\u662f\u5bf9\u8bf7\u6c42\u7684\u54cd\u5e94\u8fdb\u884c\u5904\u7406\u7684\u90e8\u5206\u3002\u5f53\u6536\u5230\u670d\u52a1\u5668\u7684\u54cd\u5e94\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u54cd\u5e94\u662f\u5426\u6210\u529f\u3002\u5982\u679c\u54cd\u5e94\u4e0d\u6210\u529f\uff08\u5373\u72b6\u6001\u7801\u4e0d\u5728 200~299 \u8303\u56f4\u5185\uff09\uff0c\u5219\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".then((data) => { ... })"}),": \u5982\u679c\u54cd\u5e94\u6210\u529f\uff0c\u8fd9\u4e00\u6b65\u5c06\u5bf9\u54cd\u5e94\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u4e00\u4e9b\u6570\u636e\u4f5c\u4e3a\u54cd\u5e94\uff0c\u8fd9\u4e9b\u6570\u636e\u5728\u8fd9\u91cc\u88ab\u89e3\u6790\u5e76\u4f20\u9012\u7ed9 ",(0,o.jsx)(n.code,{children:"resolve"})," \u51fd\u6570\uff0c\u4ee5\u8868\u793a\u6ce8\u518c\u6210\u529f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".catch((error) => { ... })"}),": \u5982\u679c\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u9519\u8bef\uff0c\u6bd4\u5982\u7f51\u7edc\u9519\u8bef\u6216\u670d\u52a1\u5668\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u8fd9\u4e00\u6b65\u5c06\u6355\u83b7\u5230\u8fd9\u4e9b\u9519\u8bef\uff0c\u5e76\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"reject"})," \u51fd\u6570\u6765\u8868\u793a\u6ce8\u518c\u5931\u8d25\uff0c\u5e76\u8f93\u51fa\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u5230\u63a7\u5236\u53f0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u529f\u80fd\u662f\u53d1\u9001\u4e00\u4e2a\u521b\u5efa\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u5e76\u6839\u636e\u670d\u52a1\u5668\u8fd4\u56de\u7684\u7ed3\u679c\u6765\u5224\u65ad\u6ce8\u518c\u662f\u5426\u6210\u529f\u3002\u5982\u679c\u6ce8\u518c\u6210\u529f\uff0c\u5219\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"resolve"})," \u51fd\u6570\u8fd4\u56de ",(0,o.jsx)(n.code,{children:"true"}),"\uff0c\u5426\u5219\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"reject"})," \u51fd\u6570\u8fd4\u56de ",(0,o.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u767b\u5f55",children:"\u767b\u5f55"}),"\n",(0,o.jsxs)(n.p,{children:["\u9996\u5148\u6211\u4eec\u9700\u8981\u767b\u5f55\uff0c\u4ece\u540e\u7aef\u83b7\u53d6",(0,o.jsx)(n.code,{children:"token"}),",\u5728",(0,o.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\uff0c\u5c06\u539f\u672c",(0,o.jsx)(n.code,{children:"login"}),"\u51fd\u6570\uff0c\u66ff\u6362\u6210"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'    login({ username, password }) {\n      return new Promise((resolve, reject) => {\n        const formData = new URLSearchParams();\n        formData.append("username", username);\n        formData.append("password", password);\n\n        fetch(this.url + "login/access_token", {\n          method: "POST",\n          headers: {\n            Accept: "application/json",\n            "Content-Type": "application/x-www-form-urlencoded",\n          },\n          body: formData,\n        })\n          .then((response) => {\n            if (!response.ok) {\n              reject(false);\n              throw new Error("Network response was not ok");\n            }\n            return response.json(); // \u89e3\u6790 JSON \u6570\u636e\n          })\n          .then((data) => {\n            // \u83b7\u53d6 access_token \u5e76\u5b58\u50a8\n            this.token = `Bearer ${data.access_token}`;\n\n            // \u767b\u5f55\u6210\u529f\uff0c\u66f4\u65b0 Vuex state \u4e2d\u7684\u7528\u6237\u4fe1\u606f\n            this.isLoggedIn = true;\n            this.userName = username;\n            this.fetchTodos();\n\n            // \u8fd4\u56de\u767b\u5f55\u7ed3\u679c\n            resolve(true);\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false);\n          });\n      });\n    },\n'})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"const formData = new URLSearchParams();"}),": \u521b\u5efa\u4e86\u4e00\u4e2a URLSearchParams \u5bf9\u8c61\uff0c\u7528\u4e8e\u6784\u5efa POST \u8bf7\u6c42\u7684\u8868\u5355\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'formData.append("username", username);'})," \u548c ",(0,o.jsx)(n.code,{children:'formData.append("password", password);'}),": \u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u6dfb\u52a0\u5230\u8868\u5355\u6570\u636e\u4e2d\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'fetch(this.url + "login/access_token", { ... })'}),": \u4f7f\u7528 Fetch API \u53d1\u9001\u4e00\u4e2a POST \u8bf7\u6c42\u5230\u670d\u52a1\u5668\u7684 ",(0,o.jsx)(n.code,{children:"/login/access_token"})," \u8def\u5f84\uff0c\u4ee5\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".then((response) => { ... })"}),": \u5bf9\u670d\u52a1\u5668\u54cd\u5e94\u7684\u5904\u7406\u90e8\u5206\u3002\u5982\u679c\u54cd\u5e94\u4e0d\u6210\u529f\uff08\u5373\u72b6\u6001\u7801\u4e0d\u5728 200~299 \u8303\u56f4\u5185\uff09\uff0c\u5219\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"reject"})," \u51fd\u6570\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".then((data) => { ... })"}),": \u5982\u679c\u54cd\u5e94\u6210\u529f\uff0c\u89e3\u6790\u54cd\u5e94\u4e2d\u7684 JSON \u6570\u636e\uff0c\u5e76\u5c06\u8bbf\u95ee\u4ee4\u724c\u5b58\u50a8\u5728\u5ba2\u6237\u7aef\uff08\u901a\u5e38\u662f\u5728\u6d4f\u89c8\u5668\u7684 localStorage \u6216 sessionStorage \u4e2d\uff09\uff0c\u540c\u65f6\u66f4\u65b0\u7528\u6237\u7684\u767b\u5f55\u72b6\u6001\u548c\u7528\u6237\u540d\uff0c\u5e76\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"fetchTodos"})," \u65b9\u6cd5\u83b7\u53d6\u7528\u6237\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".catch((error) => { ... })"}),": \u5982\u679c\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f8b\u5982\u7f51\u7edc\u9519\u8bef\u6216\u670d\u52a1\u5668\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"reject"})," \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\uff0c\u5e76\u5728\u63a7\u5236\u53f0\u6253\u5370\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u529f\u80fd\u662f\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a\u767b\u5f55\u8bf7\u6c42\uff0c\u5982\u679c\u767b\u5f55\u6210\u529f\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u767b\u5f55\u7ed3\u679c\u7684 Promise \u5bf9\u8c61\uff0c\u5982\u679c\u767b\u5f55\u5931\u8d25\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u62d2\u7edd\u7684 Promise \u5bf9\u8c61\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u83b7\u53d6\u6570\u636e",children:"\u83b7\u53d6\u6570\u636e"}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u589e",(0,o.jsx)(n.code,{children:"action"}),"\uff0c",(0,o.jsx)(n.code,{children:"fetchTodos()"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'    fetchTodos() {\n      fetch(this.url + "todos/", {\n        method: "GET",\n        headers: {\n          Accept: "application/json",\n          Authorization: this.token,\n        },\n      })\n        .then((response) => {\n          if (!response.ok) {\n            throw new Error("Network response was not ok");\n          }\n          return response.json(); // \u89e3\u6790 JSON \u6570\u636e\n        })\n        .then((data) => {\n          // \u5904\u7406\u8fd4\u56de\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u6570\u636e\n          this.todoList = [];\n          data.forEach((item) => {\n            const { is_done, content, id } = item;\n            this.todoList.push({ id: id, content: content, isDone: is_done });\n          });\n        })\n        .catch((error) => {\n          console.error("Error:", error);\n        });\n    },\n'})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:'fetch(this.url + "todos/", { ... })'}),": \u4f7f\u7528 Fetch API \u53d1\u9001\u4e00\u4e2a GET \u8bf7\u6c42\u5230\u670d\u52a1\u5668\u7684 ",(0,o.jsx)(n.code,{children:"/todos/"})," \u8def\u5f84\uff0c\u4ee5\u83b7\u53d6\u7528\u6237\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".then((data) => { ... })"}),": \u5982\u679c\u54cd\u5e94\u6210\u529f\uff0c\u89e3\u6790\u54cd\u5e94\u4e2d\u7684 JSON \u6570\u636e\uff0c\u5e76\u5bf9\u6bcf\u4e2a\u5f85\u529e\u4e8b\u9879\u8fdb\u884c\u5904\u7406\u3002\u5728\u8fd9\u91cc\uff0c\u6e05\u7a7a\u5f53\u524d\u7684 ",(0,o.jsx)(n.code,{children:"todoList"})," \u6570\u7ec4\uff0c\u7136\u540e\u904d\u5386\u8fd4\u56de\u7684\u6570\u636e\u6570\u7ec4\uff0c\u63d0\u53d6\u6bcf\u4e2a\u5f85\u529e\u4e8b\u9879\u7684 ",(0,o.jsx)(n.code,{children:"is_done"}),"\u3001",(0,o.jsx)(n.code,{children:"content"})," \u548c ",(0,o.jsx)(n.code,{children:"id"})," \u5c5e\u6027\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,o.jsx)(n.code,{children:"todoList"})," \u6570\u7ec4\u4e2d\u3002\u8fd9\u91cc\u7684 ",(0,o.jsx)(n.code,{children:"isDone"})," \u662f JavaScript \u5bf9\u8c61\u7684\u5c5e\u6027\u540d\uff0c\u7528\u4e8e\u8868\u793a\u5f85\u529e\u4e8b\u9879\u662f\u5426\u5df2\u5b8c\u6210\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"src\\components\\Todos.vue"}),"\u4e2d\u5199\u5165"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vue",children:'<script setup>\nimport Todo from "./Todo.vue";\nimport { useTodoDataStore } from "../stores/todoData";\nimport { ref, toRefs } from "vue";\nimport { storeToRefs } from "pinia";\nconst input = ref("");\nconst todoData = useTodoDataStore();\nconst { todoList, isLoggedIn } = storeToRefs(todoData); \nconst addTodo = todoData.addTodo;\nconst deleteTodo = todoData.deleteTodo;\nconst changeIsDone = todoData.changeIsDone;\n\nconst AddTodo = () => {\n  addTodo(input.value);\n  input.value = "";\n};\n\nconst DeleteTodo = (id) => {\n  deleteTodo(id);\n};\n\nconst ChangeIsDone = (id) => {\n  changeIsDone(id);\n};\n<\/script>\n\n<template>\n  <div class="bg-white text-black p-4">\n    <div v-if="isLoggedIn">\n      <el-row>\n        <el-col :span="6">\n          <el-input v-model="input" placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879" />\n        </el-col>\n        <el-button @click="AddTodo">\u63d0\u4ea4</el-button>\n      </el-row>\n\n      <el-row v-for="todo in todoList" :key="todo.id" class="items-center space-x-3">\n        <div @click="() => ChangeIsDone(todo.id)">\n          <a :class="todo.isDone ? \'text-red-600 line-through\' : \'text-blue-600\'">\n            Hello, {{ todo.content }}\n          </a>\n          \x3c!-- <Todo :todo="todo" /> --\x3e\n        </div>\n        <el-icon size="16" class="center">\n          <Delete @click="() => DeleteTodo(todo.id)" />\n        </el-icon>\n      </el-row>\n    </div>\n    <div v-else>\u8bf7\u5148\u767b\u5f55</div>\n  </div>\n</template>\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"const { todoList, isLoggedIn } = storeToRefs(todoData);"}),"\n\u8fd9\u884c\u4ee3\u7801\u4f7f\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"storeToRefs"})," \u51fd\u6570\u4ece ",(0,o.jsx)(n.code,{children:"todoData"})," store \u4e2d\u63d0\u53d6 ",(0,o.jsx)(n.code,{children:"todoList"})," \u548c ",(0,o.jsx)(n.code,{children:"isLoggedIn"})," \u8fd9\u4e24\u4e2a\u5c5e\u6027\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u7684\u5f15\u7528\u3002\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u786e\u4fdd\u5728 ",(0,o.jsx)(n.code,{children:"todoList"})," \u548c ",(0,o.jsx)(n.code,{children:"isLoggedIn"})," \u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u76f8\u5173\u7684\u89c6\u56fe\u4f1a\u53ca\u65f6\u66f4\u65b0\u3002\u901a\u5e38\u5728 Vue.js \u4e2d\uff0c\u5f53\u72b6\u6001\u6539\u53d8\u65f6\uff0c\u76f8\u5173\u89c6\u56fe\u4f1a\u81ea\u52a8\u91cd\u65b0\u6e32\u67d3\uff0c\u4f46\u662f\u5728 Composition API \u4e2d\uff0c\u6211\u4eec\u9700\u8981\u624b\u52a8\u5c06\u6570\u636e\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u7684\u5f15\u7528\u4ee5\u786e\u4fdd\u8fd9\u79cd\u54cd\u5e94\u6027\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5269\u4f59\u529f\u80fd",children:"\u5269\u4f59\u529f\u80fd"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\u5199\u5165"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { defineStore } from "pinia";\nimport { ref } from "vue";\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [],\n    isLoggedIn: false,\n    userName: "",\n    url: "http://127.0.0.1:8001/api/",\n    token: "",\n  }),\n  getters: { allTodos: (state) => state.todoList.value },\n  actions: {\n    addTodo(content) {\n      const newTodo = {\n        content: content,\n        is_done: false,\n      };\n      fetch(this.url + "todos/", {\n        method: "POST",\n        headers: {\n          Accept: "application/json",\n          "Content-Type": "application/json",\n          Authorization: this.token,\n        },\n        body: JSON.stringify(newTodo),\n      })\n        .then((response) => {\n          if (!response.ok) {\n            throw new Error("add response was not ok");\n          }\n          this.fetchTodos();\n          return response.json();\n        })\n        .catch((error) => {\n          console.error("Error:", error);\n        });\n    },\n    deleteTodo(id) {\n      return new Promise((resolve, reject) => {\n        fetch(`http://localhost:8001/api/todos/${id}`, {\n          method: "DELETE",\n          headers: {\n            Accept: "application/json",\n            Authorization: this.token,\n          },\n        })\n          .then((response) => {\n            if (!response.ok) {\n              throw new Error("Network response was not ok");\n            }\n            this.fetchTodos();\n            resolve(true); // \u6210\u529f\u5220\u9664\u8fd4\u56de true\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false); // \u5220\u9664\u5931\u8d25\u8fd4\u56de false\n          });\n      });\n    },\n    changeIsDone(id) {\n      const todo = this.todoList.find((item) => item.id === id);\n      const body = {\n        is_done: !todo.isDone,\n        content: todo.content,\n      };\n      return new Promise((resolve, reject) => {\n        fetch(`http://localhost:8001/api/todos/${id}`, {\n          method: "PUT",\n          headers: {\n            Accept: "application/json",\n            "Content-Type": "application/json",\n            Authorization: this.token,\n          },\n          body: JSON.stringify(body),\n        })\n          .then((response) => {\n            if (!response.ok) {\n              throw new Error("Network response was not ok");\n            }\n            this.fetchTodos();\n            resolve(true); // \u6210\u529f\u66f4\u65b0\u8fd4\u56de true\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false); // \u66f4\u65b0\u5931\u8d25\u8fd4\u56de false\n          });\n      });\n    },\n    createUser({ username, password }) {\n      const email = username;\n\n      return new Promise((resolve, reject) => {\n        fetch(this.url + "users/", {\n          method: "POST",\n          headers: {\n            Accept: "application/json",\n            "Content-Type": "application/json",\n          },\n          body: JSON.stringify({\n            name: username,\n            email: email,\n            password: password,\n          }),\n        })\n          .then((response) => {\n            if (!response.ok) {\n              throw new Error("Network response was not ok");\n            }\n            return response.json(); // \u8fd4\u56de\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e\n          })\n          .then((data) => {\n            resolve(true); // \u6ce8\u518c\u6210\u529f\uff0c\u8fd4\u56de true\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false); // \u6ce8\u518c\u5931\u8d25\uff0c\u8fd4\u56de false\n          });\n      });\n    },\n\n    login({ username, password }) {\n      return new Promise((resolve, reject) => {\n        const formData = new URLSearchParams();\n        formData.append("username", username);\n        formData.append("password", password);\n\n        fetch(this.url + "login/access_token", {\n          method: "POST",\n          headers: {\n            Accept: "application/json",\n            "Content-Type": "application/x-www-form-urlencoded",\n          },\n          body: formData,\n        })\n          .then((response) => {\n            if (!response.ok) {\n              reject(false);\n              throw new Error("Network response was not ok");\n            }\n            return response.json(); // \u89e3\u6790 JSON \u6570\u636e\n          })\n          .then((data) => {\n            // \u83b7\u53d6 access_token \u5e76\u5b58\u50a8\n            this.token = `Bearer ${data.access_token}`;\n\n            // \u767b\u5f55\u6210\u529f\uff0c\u66f4\u65b0 Vuex state \u4e2d\u7684\u7528\u6237\u4fe1\u606f\n            this.isLoggedIn = true;\n            this.userName = username;\n            this.fetchTodos();\n\n            // \u8fd4\u56de\u767b\u5f55\u7ed3\u679c\n            resolve(true);\n          })\n          .catch((error) => {\n            console.error("Error:", error);\n            reject(false);\n          });\n      });\n    },\n    fetchTodos() {\n      fetch(this.url + "todos/", {\n        method: "GET",\n        headers: {\n          Accept: "application/json",\n          Authorization: this.token,\n        },\n      })\n        .then((response) => {\n          if (!response.ok) {\n            throw new Error("Network response was not ok");\n          }\n          return response.json(); // \u89e3\u6790 JSON \u6570\u636e\n        })\n        .then((data) => {\n          // \u5904\u7406\u8fd4\u56de\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u6570\u636e\n          this.todoList = [];\n          data.forEach((item) => {\n            const { is_done, content, id } = item;\n            this.todoList.push({ id: id, content: content, isDone: is_done });\n          });\n        })\n        .catch((error) => {\n          console.error("Error:", error);\n        });\n    },\n    logOut() {\n      if (this.isLoggedIn == false) alert("\u8bf7\u5148\u767b\u5f55");\n      else {\n        this.isLoggedIn = false;\n        this.token = "";\n        alert("\u6ce8\u9500\u6210\u529f");\n      }\n    },\n  },\n});\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},92508:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/web-debug-axios-01-679bb748d72a44eb1a8711e7883d4967.png"},76791:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/web-debug-axios-02-1ed2abd1158ff12870445482487bc6e5.png"},33774:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/web-debug-axios-03-dc5c436e2a60ec1b4569e01cddb94a85.png"},86241:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/web-debug-axios-04-3b4ea53ecdcc6e7d74071429b4bf8b8e.png"},1624:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/web-debug-axios-05-f846d3307c1cf4bfd9ef75b25504b440.png"},71377:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var o=s(79474);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);