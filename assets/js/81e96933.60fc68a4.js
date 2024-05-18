"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9681],{70564:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(13274),o=s(71377);const i={id:"frontend-pina",sidebar_position:26},d="Web\u524d\u7aef\uff1a\u72b6\u6001\u7ba1\u7406\u548c\u4e8b\u4ef6\u5904\u7406",c={id:"todo/frontend-pina",title:"Web\u524d\u7aef\uff1a\u72b6\u6001\u7ba1\u7406\u548c\u4e8b\u4ef6\u5904\u7406",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/todo/frontend_pina.md",sourceDirName:"todo",slug:"/todo/frontend-pina",permalink:"/cs202/todo/frontend-pina",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend_pina.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{id:"frontend-pina",sidebar_position:26},sidebar:"todoSidebar",previous:{title:"Web\u524d\u7aef\uff1aTodo List\u5e94\u7528",permalink:"/cs202/todo/frontend-todo-component"},next:{title:"Web\u524d\u7aef\uff1aaxios\u5e93\u53d1\u9001HTTP\u8bf7\u6c42",permalink:"/cs202/todo/frontend-axios"}},r={},a=[{value:"\u4ec0\u4e48\u662f\u72b6\u6001\uff1f",id:"\u4ec0\u4e48\u662f\u72b6\u6001",level:2},{value:"pinia",id:"pinia",level:2},{value:"\u5982\u4f55\u4f7f\u7528 <code>pinia</code>",id:"\u5982\u4f55\u4f7f\u7528-pinia",level:2},{value:"Web\u9875\u9762\u65b0\u589e\u4e00\u4e2aTodo",id:"web\u9875\u9762\u65b0\u589e\u4e00\u4e2atodo",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"web\u524d\u7aef\u72b6\u6001\u7ba1\u7406\u548c\u4e8b\u4ef6\u5904\u7406",children:"Web\u524d\u7aef\uff1a\u72b6\u6001\u7ba1\u7406\u548c\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u72b6\u6001",children:"\u4ec0\u4e48\u662f\u72b6\u6001\uff1f"}),"\n",(0,t.jsx)(e.p,{children:"\u7406\u8bba\u4e0a\u6765\u8bf4\uff0c\u6bcf\u4e00\u4e2a Vue \u7ec4\u4ef6\u5b9e\u4f8b\u90fd\u5df2\u7ecf\u5728\u201c\u7ba1\u7406\u201d\u5b83\u81ea\u5df1\u7684\u54cd\u5e94\u5f0f\u72b6\u6001\u4e86\u3002\n\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u8ba1\u6570\u5668\u7ec4\u4ef6\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"<script setup>\nimport { ref } from 'vue'\n\n// \u72b6\u6001\nconst count = ref(0)\n\n// \u52a8\u4f5c\nfunction increment() {\n  count.value++\n}\n<\/script>\n\n\x3c!-- \u89c6\u56fe --\x3e\n<template>{{ count }}</template>\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5b83\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5355\u5143\uff0c\u7531\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u72b6\u6001\uff1a\u9a71\u52a8\u6574\u4e2a\u5e94\u7528\u7684\u6570\u636e\u6e90\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u89c6\u56fe\uff1a\u5bf9\u72b6\u6001\u7684\u4e00\u79cd\u58f0\u660e\u5f0f\u6620\u5c04\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u4ea4\u4e92\uff1a\u72b6\u6001\u6839\u636e\u7528\u6237\u5728\u89c6\u56fe\u4e2d\u7684\u8f93\u5165\u800c\u4f5c\u51fa\u76f8\u5e94\u53d8\u66f4\u7684\u53ef\u80fd\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u201c\u5355\u5411\u6570\u636e\u6d41\u201d\u8fd9\u4e00\u6982\u5ff5\u7684\u7b80\u5355\u56fe\u793a\uff1a"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(90692).A+"",width:"504",height:"463"})}),"\n",(0,t.jsx)(e.p,{children:"\u7136\u800c\uff0c\u5f53\u6211\u4eec\u6709\u591a\u4e2a\u7ec4\u4ef6\u5171\u4eab\u4e00\u4e2a\u5171\u540c\u7684\u72b6\u6001\u65f6\uff0c\u5c31\u6ca1\u6709\u8fd9\u4e48\u7b80\u5355\u4e86\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u591a\u4e2a\u89c6\u56fe\u53ef\u80fd\u90fd\u4f9d\u8d56\u4e8e\u540c\u4e00\u4efd\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u6765\u81ea\u4e0d\u540c\u89c6\u56fe\u7684\u4ea4\u4e92\u4e5f\u53ef\u80fd\u9700\u8981\u66f4\u6539\u540c\u4e00\u4efd\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8e\u60c5\u666f 1\uff0c\u4e00\u4e2a\u53ef\u884c\u7684\u529e\u6cd5\u662f\u5c06\u5171\u4eab\u72b6\u6001\u201c\u63d0\u5347\u201d\u5230\u5171\u540c\u7684\u7956\u5148\u7ec4\u4ef6\u4e0a\u53bb\uff0c\u518d\u901a\u8fc7 props \u4f20\u9012\u4e0b\u6765\u3002\n\u7136\u800c\u5728\u6df1\u5c42\u6b21\u7684\u7ec4\u4ef6\u6811\u7ed3\u6784\u4e2d\u8fd9\u4e48\u505a\u7684\u8bdd\uff0c\u5f88\u5feb\u5c31\u4f1a\u4f7f\u5f97\u4ee3\u7801\u53d8\u5f97\u7e41\u7410\u5197\u957f\u3002\n\u8fd9\u4f1a\u5bfc\u81f4\u53e6\u4e00\u4e2a\u95ee\u9898\uff1aProp \u9010\u7ea7\u900f\u4f20\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8e\u60c5\u666f 2\uff0c\u6211\u4eec\u7ecf\u5e38\u53d1\u73b0\u81ea\u5df1\u4f1a\u76f4\u63a5\u901a\u8fc7\u6a21\u677f\u5f15\u7528\u83b7\u53d6\u7236/\u5b50\u5b9e\u4f8b\uff0c\n\u6216\u8005\u901a\u8fc7\u89e6\u53d1\u7684\u4e8b\u4ef6\u5c1d\u8bd5\u6539\u53d8\u548c\u540c\u6b65\u591a\u4e2a\u72b6\u6001\u7684\u526f\u672c\u3002\n\u4f46\u8fd9\u4e9b\u6a21\u5f0f\u7684\u5065\u58ee\u6027\u90fd\u4e0d\u751a\u7406\u60f3\uff0c\u5f88\u5bb9\u6613\u5c31\u4f1a\u5bfc\u81f4\u4ee3\u7801\u96be\u4ee5\u7ef4\u62a4\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u4e2a\u66f4\u7b80\u5355\u76f4\u63a5\u7684\u89e3\u51b3\u65b9\u6848\u662f\u62bd\u53d6\u51fa\u7ec4\u4ef6\u95f4\u7684\u5171\u4eab\u72b6\u6001\uff0c\u653e\u5728\u4e00\u4e2a\u5168\u5c40\u5355\u4f8b\u4e2d\u6765\u7ba1\u7406\u3002\u8fd9\u6837\u6211\u4eec\u7684\u7ec4\u4ef6\u6811\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u5927\u7684\u201c\u89c6\u56fe\u201d\uff0c\u800c\u4efb\u4f55\u4f4d\u7f6e\u4e0a\u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5176\u4e2d\u7684\u72b6\u6001\u6216\u89e6\u53d1\u52a8\u4f5c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"pinia",children:"pinia"}),"\n",(0,t.jsx)(e.p,{children:"Pinia \u5c31\u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86\u4e0a\u8ff0\u9700\u6c42\u7684\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u7531 Vue \u6838\u5fc3\u56e2\u961f\u7ef4\u62a4\uff0c\u5bf9 Vue 2 \u548c Vue 3 \u90fd\u53ef\u7528\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u73b0\u6709\u7528\u6237\u53ef\u80fd\u5bf9 Vuex \u66f4\u719f\u6089\uff0c\u5b83\u662f Vue \u4e4b\u524d\u7684\u5b98\u65b9\u72b6\u6001\u7ba1\u7406\u5e93\u3002\u7531\u4e8e Pinia \u5728\u751f\u6001\u7cfb\u7edf\u4e2d\u80fd\u591f\u627f\u62c5\u76f8\u540c\u7684\u804c\u8d23\u4e14\u80fd\u505a\u5f97\u66f4\u597d\uff0c\u56e0\u6b64 Vuex \u73b0\u5728\u5904\u4e8e\u7ef4\u62a4\u6a21\u5f0f\u3002\u5b83\u4ecd\u7136\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u4e0d\u518d\u63a5\u53d7\u65b0\u7684\u529f\u80fd\u3002\u5bf9\u4e8e\u65b0\u7684\u5e94\u7528\uff0c\u5efa\u8bae\u4f7f\u7528 Pinia\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pinia.vuejs.org/zh/introduction.html",children:"pinia\u5b98\u7f51\u5730\u5740"})}),"\n",(0,t.jsx)(e.p,{children:"Pinia\u5b89\u88c5\u5982\u4e0b\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm install pinia\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"\u5982\u4f55\u4f7f\u7528-pinia",children:["\u5982\u4f55\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"pinia"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u4e86\u4f7f\u7528",(0,t.jsx)(e.code,{children:"pinia"}),"\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5148\u6302\u8f7d\u5b83"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\main.js"}),"\u4e2d\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import { createApp } from 'vue'\nimport './style.css'\nimport App from './App.vue'\nimport { createPinia } from \"pinia\"\n\nconst app = createApp(App);\napp.use(createPinia());\napp.mount('#app');\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"app.use(createPinia())"})," \u521d\u59cb\u5316\u4e86 Pinia \u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\uff0c\u4f7f\u5176\u53ef\u5728Vue\u5e94\u7528\u4e2d\u4f7f\u7528\u3002"]}),(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:'app.mount("#app")'}),' \u5c06\u6574\u4e2aVue\u5e94\u7528\u6302\u8f7d\u5230HTML\u6587\u6863\u4e2dID\u4e3a "app" \u7684\u5143\u7d20\u4e0a\u3002']}),(0,t.jsx)(e.p,{children:"\u8fd9\u786e\u4fdd\u4e86Pinia\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\u80fd\u591f\u7ba1\u7406Vue\u5e94\u7528\u7684\u72b6\u6001\uff0c\u5e76\u4e14Vue\u5e94\u7528\u80fd\u591f\u6b63\u786e\u5730\u5728\u6307\u5b9a\u7684HTML\u5143\u7d20\u4e0a\u542f\u52a8\u3002"}),(0,t.jsxs)(e.p,{children:["\u8fd9\u662f\u5728Vue.js\u5e94\u7528\u4e2d\u4f7f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\u3002\u5728Vue.js\u4e2d\uff0c\u63d2\u4ef6\u662f\u4e00\u79cd\u6269\u5c55\u5e94\u7528\u529f\u80fd\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u5168\u5c40\u6ce8\u518c\u63d2\u4ef6\u4ee5\u63d0\u4f9b\u989d\u5916\u7684\u7279\u6027\u6216\u529f\u80fd\u3002\uff0c",(0,t.jsx)(e.code,{children:"createPinia"})," \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Pinia \u7684\u72b6\u6001\u7ba1\u7406\u5b9e\u4f8b\uff0c\u5e76\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"app.use(createPinia())"})," \u5c06\u5176\u6ce8\u518c\u4e3aVue.js\u5e94\u7528\u7684\u63d2\u4ef6\u3002"]}),(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u5e94\u7528\u5177\u6709\u989d\u5916\u7684\u529f\u80fd\u6216\u80fd\u529b\uff0c\u800c\u4e0d\u5fc5\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u4e2d\u91cd\u590d\u914d\u7f6e\u76f8\u540c\u7684\u903b\u8f91\u3002"})]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u7684\u72b6\u6001\u7ba1\u7406\u5668\uff0c\u7528\u6765\u5728\u6574\u4e2a Vue.js \u5e94\u7528\u4e2d\u4f7f\u7528"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"/src"}),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,t.jsx)(e.code,{children:"stores"}),"\u6587\u4ef6\u5939,\u5728store\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,t.jsx)(e.code,{children:"todoData.js"}),"\u6587\u4ef6"]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:"\u5c06\u76f8\u5173\u7684\u4ee3\u7801\u7ec4\u7ec7\u5230\u5355\u72ec\u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u67e5\u627e\u548c\u7ba1\u7406\u76f8\u5173\u7684\u4ee3\u7801\u3002"}),(0,t.jsx)(e.p,{children:"todoData.js \u6587\u4ef6\u88ab\u653e\u7f6e\u5728 stores \u6587\u4ef6\u5939\u4e2d\uff0c\u8868\u660e\u5b83\u5305\u542b\u4e0e\u72b6\u6001\u7ba1\u7406\u6709\u5173\u7684\u4ee3\u7801\u3002"}),(0,t.jsx)(e.p,{children:"Todo.vue \u6587\u4ef6\u88ab\u653e\u7f6e\u5728 components \u6587\u4ef6\u5939\u5185\uff0c\u8868\u660e\u5b83\u662f\u7ec4\u4ef6\u3002"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(60987).A+"",width:"474",height:"984"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u5199\u5165\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {},\n});\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Pinia"}),"\uff0c\u5b83\u662f\u4e00\u4e2a Vue.js \u7684\u72b6\u6001\u7ba1\u7406\u5e93,\u5728\u8fd9\u4e2a\u4ee3\u7801\u4e2d\uff0c\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"defineStore"})," \u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(e.code,{children:"useTodoDataStore"})," \u7684\u72b6\u6001\u7ba1\u7406\u4ed3\u5e93\u3002"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"state:"}),"\n\u5728 Pinia \u4e2d\uff0c",(0,t.jsx)(e.code,{children:"state"})," \u662f\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u7684\u5730\u65b9\u3002",(0,t.jsx)(e.code,{children:"state"})," \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(e.code,{children:"todoList"})," \u7684\u6570\u7ec4\u3002\u8fd9\u4e2a\u6570\u7ec4\u5b58\u50a8\u4e86\u5f85\u529e\u4e8b\u9879\u7684\u4fe1\u606f\uff0c\u6bcf\u4e2a\u4e8b\u9879\u662f\u4e00\u4e2a\u5305\u542b ",(0,t.jsx)(e.code,{children:"id"}),"\u3001",(0,t.jsx)(e.code,{children:"content"})," \u548c ",(0,t.jsx)(e.code,{children:"isDone"})," \u5c5e\u6027\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"state: () => ({\n  todoList: [\n    // ... todo items ...\n  ],\n}),\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"getters:"}),"\n",(0,t.jsx)(e.code,{children:"getters"})," \u5141\u8bb8\u4f60\u5728\u4ed3\u5e93\u4e2d\u8ba1\u7b97\u6d3e\u751f\u72b6\u6001\u6216\u5bf9 ",(0,t.jsx)(e.code,{children:"state"})," \u8fdb\u884c\u4e00\u4e9b\u903b\u8f91\u64cd\u4f5c\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(e.code,{children:"allTodos"})," \u7684 getter \u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u5f53\u524d\u5b58\u50a8\u5728 ",(0,t.jsx)(e.code,{children:"state"})," \u4e2d\u7684\u6240\u6709\u5f85\u529e\u4e8b\u9879\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"getters: { \n  allTodos: (state) => state.todoList \n},\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"actions:"}),"\n",(0,t.jsx)(e.code,{children:"actions"})," \u662f\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u903b\u8f91\u6216\u5bf9 ",(0,t.jsx)(e.code,{children:"state"})," \u8fdb\u884c\u66f4\u6539\u7684\u5730\u65b9\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,t.jsx)(e.code,{children:"actions"})," \u6ca1\u6709\u88ab\u5b9a\u4e49\uff0c\u56e0\u6b64\u5728\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u6ca1\u6709\u5f02\u6b65\u64cd\u4f5c\u6216\u5bf9 ",(0,t.jsx)(e.code,{children:"state"})," \u7684\u66f4\u6539\u903b\u8f91\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"actions: {},\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u4e2a ",(0,t.jsx)(e.code,{children:"Pinia"})," \u4ed3\u5e93\u7528\u4e8e\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5f85\u529e\u4e8b\u9879\u6570\u636e\u3002",(0,t.jsx)(e.code,{children:"state"})," \u5b58\u50a8\u6570\u636e\uff0c\n",(0,t.jsx)(e.code,{children:"getters"})," \u63d0\u4f9b\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\uff0c\u800c ",(0,t.jsx)(e.code,{children:"actions"})," \u53ef\u4ee5\u5728\u9700\u8981\u65f6\u6267\u884c\u4e00\u4e9b\u903b\u8f91\u64cd\u4f5c\u3002\n\u5728\u5e94\u7528\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"useTodoDataStore"})," \u6765\u8bbf\u95ee\u6216\u66f4\u6539\u5f85\u529e\u4e8b\u9879\u7684\u72b6\u6001\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u4e86\u72b6\u6001\u7ba1\u7406\u540e\uff0c\u6211\u4eec\u9700\u8981\u6539\u8fdb\u5148\u524d\u7684\u4ee3\u7801\uff0c\u4f7f\u7528pinia\u6765\u7ba1\u7406\u72b6\u6001\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,t.jsx)(e.code,{children:"src/components/TodoList.vue"})," \u7684\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",metastring:'showLineNumbers title="src/components/TodoList.vue"',children:'<script setup>\nimport TodoItem from "./TodoItem.vue";\nimport { useTodoDataStore } from "../stores/todoData";\nconst todoData = useTodoDataStore();\nconst todos = todoData.allTodos;\n<\/script>\n<template>\n  <div \n    class="mt-4 rounded-t-md bg-white transition-all duration-75"\n  >\n    <div v-for="todo in todos" :key="todo.id">\n      <TodoItem :todo="todo"/>\n    </div>\n  </div>\n</template>\n<style></style>\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u65f6\u7f51\u9875\u6548\u679c\u6ca1\u6709\u6539\u53d8\uff0c\u8fd9\u8bf4\u660e\u5df2\u7ecf\u6210\u529f\u4f7f\u7528pinia\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(53431).A+"",width:"1396",height:"1028"})}),"\n",(0,t.jsx)(e.h2,{id:"web\u9875\u9762\u65b0\u589e\u4e00\u4e2atodo",children:"Web\u9875\u9762\u65b0\u589e\u4e00\u4e2aTodo"}),"\n",(0,t.jsxs)(e.p,{children:['\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u5b8c\u6210"\u6dfb\u52a0Todo\u7684\u529f\u80fd"\uff0c\u9996\u5148\u73b0\u5728pinia\u589e\u52a0',(0,t.jsx)(e.code,{children:"actions"}),",\u8fd9\u662f\u63a5\u4e0b\u6765\u9700\u8981\u8c03\u7528\u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\u5199\u5165\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {\n    addTodo(content) {\n      const newTodo = {\n        id: this.todoList.length + 1,\n        content: content,\n        isDone: false,\n      };\n      this.todoList.push(newTodo);\n    },\n  },\n});\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u7684\u76ee\u6807\u662f\u5b8c\u6210\u4e00\u4e2a\u8f93\u5165\u6846\uff0c\u4e00\u4e2a\u786e\u8ba4\u6309\u94ae\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u8c03\u7528",(0,t.jsx)(e.code,{children:"addTodo"}),"\u51fd\u6570\uff0c\n\u5c06\u8f93\u5165\u6846\u8f93\u5165\u7684\u5185\u5bb9\u6dfb\u52a0\u5230",(0,t.jsx)(e.code,{children:"todoList"}),"\u8fd9\u4e2a\u72b6\u6001\u91cc\uff0c\u7136\u540e\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u5185\u5bb9\u4e3a\u7a7a\uff0c\n\u56e0\u4e3a",(0,t.jsx)(e.code,{children:"todoList"}),"\u8fd9\u4e2a\u72b6\u6001\u66f4\u65b0\u4e86\uff0c\n\u6240\u4ee5\u7f51\u9875\u7684\u5185\u5bb9\u66f4\u65b0\u4e86\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,t.jsx)(e.code,{children:"src/components/TodoCreate.vue"})," \u7684\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",metastring:'showLineNumbers title="src/components/TodoCreate.vue"',children:'<script setup>\nimport { useTodoDataStore } from \'../stores/todoData\';\nimport { ref } from \'vue\';\n\nconst inputValue = ref("");\n\nconst todoData = useTodoDataStore();\n\nconst addTodo = () => {\n  todoData.addTodo(inputValue.value);\n  inputValue.value = ""\n}\n\n<\/script>\n<template>\n  <form\n    v-on:submit.prevent="addTodo"\n    class="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 transition-all duration-700"\n  >\n    <span\n      class="inline-block h-7 w-7 rounded-full border-2 transition-all duration-700"\n    ></span>\n\n    <input\n      v-model="inputValue"\n      type="text"\n      placeholder="\u65b0\u5efa\u4e00\u4e2aTodo..."\n      class="input input-bordered input-md w-96"\n    />\n    <button class="btn">\u589e\u52a0</button>\n  </form>\n</template>\n<style></style>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u8f93\u5165\u6846\u8f93\u5165",(0,t.jsx)(e.code,{children:"mytodo"}),"\u53ef\u4ee5\u770b\u5230"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(64955).A+"",width:"1250",height:"1112"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'v-on:submit.prevent="addTodo"'})," \u6307\u4ee4\u5728\u8c03\u7528 addTodo \u51fd\u6570\u7684\u540c\u65f6\uff0c\u963b\u6b62\u8868\u5355\u7684\u9ed8\u8ba4\u63d0\u4ea4\u884c\u4e3a\uff08\u9ed8\u8ba4\u884c\u4e3a\u4f1a\u5237\u65b0\u9875\u9762\uff09"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:'v-model="inputValue'})," \u8fd9\u4e2a\u8f93\u5165\u6846\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"v-model"})," \u7ed1\u5b9a\u5230 ",(0,t.jsx)(e.code,{children:"inputValue"}),"\uff0c\u6240\u4ee5\u5b83\u7684\u503c\u4f1a\u59cb\u7ec8\u4e0e ",(0,t.jsx)(e.code,{children:"inputValue"})," \u540c\u6b65"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},60987:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/3_1-5fb282ab82d7de0f572e68cee816bfe0.png"},90692:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/state-flow.Cd6No79V-3fbaaf1ec9d8878dd3ab7845ba5a8c1a.png"},64955:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/web-add-todo-cc883cdc871cf3652dbac2e926de27d1.png"},53431:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/web_todo_list_02-c89a7b63f28b0903d001ff7a1b7a9aa9.png"},71377:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var t=s(79474);const o={},i=t.createContext(o);function d(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);