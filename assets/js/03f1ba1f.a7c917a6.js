"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6185],{67250:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=o(13274),t=o(71377);const i={id:"state-event",sidebar_position:4},d="State\u548c\u4e8b\u4ef6\u5904\u7406",c={id:"todo/frontend/state-event",title:"State\u548c\u4e8b\u4ef6\u5904\u7406",description:"pinia",source:"@site/docs/todo/frontend/state_event.md",sourceDirName:"todo/frontend",slug:"/todo/frontend/state-event",permalink:"/cs202/todo/frontend/state-event",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend/state_event.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"state-event",sidebar_position:4},sidebar:"todoSidebar",previous:{title:"Todo List\u5e94\u7528",permalink:"/cs202/todo/frontend/todo-component"},next:{title:"\u5b8c\u6210Todo List\u5269\u4e0b\u529f\u80fd",permalink:"/cs202/todo/frontend/todos"}},l={},r=[{value:"pinia",id:"pinia",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u589e\u52a0\u529f\u80fd",id:"\u589e\u52a0\u529f\u80fd",level:2},{value:"Element Plus",id:"element-plus",level:3},{value:"\u6dfb\u52a0Todo",id:"\u6dfb\u52a0todo",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"state\u548c\u4e8b\u4ef6\u5904\u7406",children:"State\u548c\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,s.jsx)(e.h2,{id:"pinia",children:"pinia"}),"\n",(0,s.jsx)(e.p,{children:"Pinia \u8d77\u59cb\u4e8e 2019 \u5e74 11 \u6708\u5de6\u53f3\u7684\u4e00\u6b21\u5b9e\u9a8c\uff0c\u5176\u76ee\u7684\u662f\u8bbe\u8ba1\u4e00\u4e2a\u62e5\u6709\u7ec4\u5408\u5f0f API \u7684 Vue \u72b6\u6001\u7ba1\u7406\u5e93\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pinia.vuejs.org/zh/introduction.html",children:"pinia\u5b98\u7f51\u5730\u5740"})}),"\n",(0,s.jsx)(e.p,{children:"Pinia\u5b89\u88c5\u5982\u4e0b\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install pinia\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u72b6\u6001",children:"\u72b6\u6001"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://cn.vuejs.org/guide/scaling-up/state-management.html",children:"\u4ec0\u4e48\u662f\u72b6\u6001"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3a\u4e86\u4f7f\u7528",(0,s.jsx)(e.code,{children:"pinia"}),"\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5148\u6302\u8f7d\u5b83"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"src\\main.js"}),"\u4e2d\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { createApp } from "vue";\nimport App from "./App.vue";\nimport "./index.css";\nimport { createPinia } from "pinia";\n\nconst app = createApp(App);\napp.use(createPinia());\napp.mount("#app");\n'})}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"app.use(createPinia())"})," \u521d\u59cb\u5316\u4e86 Pinia \u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\uff0c\u4f7f\u5176\u53ef\u5728Vue\u5e94\u7528\u4e2d\u4f7f\u7528\u3002"]}),(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:'app.mount("#app")'}),' \u5c06\u6574\u4e2aVue\u5e94\u7528\u6302\u8f7d\u5230HTML\u6587\u6863\u4e2dID\u4e3a "app" \u7684\u5143\u7d20\u4e0a\u3002']}),(0,s.jsx)(e.p,{children:"\u8fd9\u786e\u4fdd\u4e86Pinia\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\u80fd\u591f\u7ba1\u7406Vue\u5e94\u7528\u7684\u72b6\u6001\uff0c\u5e76\u4e14Vue\u5e94\u7528\u80fd\u591f\u6b63\u786e\u5730\u5728\u6307\u5b9a\u7684HTML\u5143\u7d20\u4e0a\u542f\u52a8\u3002"}),(0,s.jsxs)(e.p,{children:["\u8fd9\u662f\u5728Vue.js\u5e94\u7528\u4e2d\u4f7f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\u3002\u5728Vue.js\u4e2d\uff0c\u63d2\u4ef6\u662f\u4e00\u79cd\u6269\u5c55\u5e94\u7528\u529f\u80fd\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u5168\u5c40\u6ce8\u518c\u63d2\u4ef6\u4ee5\u63d0\u4f9b\u989d\u5916\u7684\u7279\u6027\u6216\u529f\u80fd\u3002\uff0c",(0,s.jsx)(e.code,{children:"createPinia"})," \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Pinia \u7684\u72b6\u6001\u7ba1\u7406\u5b9e\u4f8b\uff0c\u5e76\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"app.use(createPinia())"})," \u5c06\u5176\u6ce8\u518c\u4e3aVue.js\u5e94\u7528\u7684\u63d2\u4ef6\u3002"]}),(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u5e94\u7528\u5177\u6709\u989d\u5916\u7684\u529f\u80fd\u6216\u80fd\u529b\uff0c\u800c\u4e0d\u5fc5\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u4e2d\u91cd\u590d\u914d\u7f6e\u76f8\u540c\u7684\u903b\u8f91\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u7684\u72b6\u6001\u7ba1\u7406\u5668\uff0c\u7528\u6765\u5728\u6574\u4e2a Vue.js \u5e94\u7528\u4e2d\u4f7f\u7528"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"/src"}),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,s.jsx)(e.code,{children:"stores"}),"\u6587\u4ef6\u5939,\u5728store\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,s.jsx)(e.code,{children:"todoData.js"}),"\u6587\u4ef6"]}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsx)(e.p,{children:"\u5c06\u76f8\u5173\u7684\u4ee3\u7801\u7ec4\u7ec7\u5230\u5355\u72ec\u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u67e5\u627e\u548c\u7ba1\u7406\u76f8\u5173\u7684\u4ee3\u7801\u3002"}),(0,s.jsx)(e.p,{children:"todoData.js \u6587\u4ef6\u88ab\u653e\u7f6e\u5728 stores \u6587\u4ef6\u5939\u4e2d\uff0c\u8868\u660e\u5b83\u5305\u542b\u4e0e\u72b6\u6001\u7ba1\u7406\u6709\u5173\u7684\u4ee3\u7801\u3002"}),(0,s.jsx)(e.p,{children:"Todo.vue \u6587\u4ef6\u88ab\u653e\u7f6e\u5728 components \u6587\u4ef6\u5939\u5185\uff0c\u8868\u660e\u5b83\u662f\u7ec4\u4ef6\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(13544).A+"",width:"474",height:"984"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u5199\u5165\u4ee3\u7801"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {},\n});\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Pinia"}),"\uff0c\u5b83\u662f\u4e00\u4e2a Vue.js \u7684\u72b6\u6001\u7ba1\u7406\u5e93,\u5728\u8fd9\u4e2a\u4ee3\u7801\u4e2d\uff0c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"defineStore"})," \u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"useTodoDataStore"})," \u7684\u72b6\u6001\u7ba1\u7406\u4ed3\u5e93\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"state:"}),"\n\u5728 Pinia \u4e2d\uff0c",(0,s.jsx)(e.code,{children:"state"})," \u662f\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u7684\u5730\u65b9\u3002",(0,s.jsx)(e.code,{children:"state"})," \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"todoList"})," \u7684\u6570\u7ec4\u3002\u8fd9\u4e2a\u6570\u7ec4\u5b58\u50a8\u4e86\u5f85\u529e\u4e8b\u9879\u7684\u4fe1\u606f\uff0c\u6bcf\u4e2a\u4e8b\u9879\u662f\u4e00\u4e2a\u5305\u542b ",(0,s.jsx)(e.code,{children:"id"}),"\u3001",(0,s.jsx)(e.code,{children:"content"})," \u548c ",(0,s.jsx)(e.code,{children:"isDone"})," \u5c5e\u6027\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"state: () => ({\n  todoList: [\n    // ... todo items ...\n  ],\n}),\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"getters:"}),"\n",(0,s.jsx)(e.code,{children:"getters"})," \u5141\u8bb8\u4f60\u5728\u4ed3\u5e93\u4e2d\u8ba1\u7b97\u6d3e\u751f\u72b6\u6001\u6216\u5bf9 ",(0,s.jsx)(e.code,{children:"state"})," \u8fdb\u884c\u4e00\u4e9b\u903b\u8f91\u64cd\u4f5c\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"allTodos"})," \u7684 getter \u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u5f53\u524d\u5b58\u50a8\u5728 ",(0,s.jsx)(e.code,{children:"state"})," \u4e2d\u7684\u6240\u6709\u5f85\u529e\u4e8b\u9879\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"getters: { \n  allTodos: (state) => state.todoList \n},\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"actions:"}),"\n",(0,s.jsx)(e.code,{children:"actions"})," \u662f\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u903b\u8f91\u6216\u5bf9 ",(0,s.jsx)(e.code,{children:"state"})," \u8fdb\u884c\u66f4\u6539\u7684\u5730\u65b9\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"actions"})," \u6ca1\u6709\u88ab\u5b9a\u4e49\uff0c\u56e0\u6b64\u5728\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u6ca1\u6709\u5f02\u6b65\u64cd\u4f5c\u6216\u5bf9 ",(0,s.jsx)(e.code,{children:"state"})," \u7684\u66f4\u6539\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"actions: {},\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e2a ",(0,s.jsx)(e.code,{children:"Pinia"})," \u4ed3\u5e93\u7528\u4e8e\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5f85\u529e\u4e8b\u9879\u6570\u636e\u3002",(0,s.jsx)(e.code,{children:"state"})," \u5b58\u50a8\u6570\u636e\uff0c",(0,s.jsx)(e.code,{children:"getters"})," \u63d0\u4f9b\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\uff0c\u800c ",(0,s.jsx)(e.code,{children:"actions"})," \u53ef\u4ee5\u5728\u9700\u8981\u65f6\u6267\u884c\u4e00\u4e9b\u903b\u8f91\u64cd\u4f5c\u3002\u5728\u5e94\u7528\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"useTodoDataStore"})," \u6765\u8bbf\u95ee\u6216\u66f4\u6539\u5f85\u529e\u4e8b\u9879\u7684\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e86\u72b6\u6001\u7ba1\u7406\u540e\uff0c\u6211\u4eec\u9700\u8981\u6539\u8fdb\u5148\u524d\u7684\u4ee3\u7801\uff0c\u4f7f\u7528pinia\u6765\u7ba1\u7406\u72b6\u6001\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"src\\App.vue"}),"\u4e2d\u5199\u5165\u4ee3\u7801"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-vue",children:'<script setup>\nimport Todo from "./components/Todo.vue";\nimport { useTodoDataStore } from "./stores/todoData";\nconst todoData = useTodoDataStore();\nconst todoList = todoData.allTodos;\n<\/script>\n\n<template>\n  <div className="bg-white text-black p-4">\n    <ul v-for="todo in todoList">\n      <Todo :todo="todo" :keys="todo.id" />\n    </ul>\n  </div>\n</template>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u65f6\u7f51\u9875\u6548\u679c\u6ca1\u6709\u6539\u53d8\uff0c\u8fd9\u8bf4\u660e\u5df2\u7ecf\u6210\u529f\u4f7f\u7528pinia\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(62351).A+"",width:"251",height:"182"})}),"\n",(0,s.jsx)(e.h2,{id:"\u589e\u52a0\u529f\u80fd",children:"\u589e\u52a0\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u53ef\u4ee5\u65b9\u4fbf\u7684\u505a\u4e00\u4e9bUI\u8bbe\u8ba1\uff0c\u6211\u4eec\u4f7f\u7528\u7ec4\u4ef6\u5e93\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"element-plus",children:"Element Plus"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://element-plus.org/zh-CN/guide/installation.html",children:"Element Plus\u5b98\u7f51"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install element-plus --save\nnpm install -D unplugin-vue-components unplugin-auto-import\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5",children:"\u5b89\u88c5\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.p,{children:"Element Plus \u662f\u4e00\u4e2a\u57fa\u4e8e Vue 3 \u7684 UI \u7ec4\u4ef6\u5e93\uff0c\u662f\u5bf9\u539f\u672c Vue 2.x \u7248\u672c\u7684 Element UI \u7684\u5347\u7ea7\u548c\u91cd\u6784\u3002Element Plus \u63d0\u4f9b\u4e86\u4e00\u5957\u4e30\u5bcc\u7684\u3001\u73b0\u4ee3\u5316\u7684 UI \u7ec4\u4ef6\uff0c\u53ef\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u3002\u8be5\u7ec4\u4ef6\u5e93\u4ee5\u6613\u7528\u6027\u548c\u7f8e\u89c2\u4e3a\u76ee\u6807\uff0c\u5e7f\u6cdb\u7528\u4e8e Vue.js \u7684\u9879\u76ee\u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u5e93\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u5b83\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"vite.config.js"}),"\u4e2d\u5199\u5165"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { defineConfig } from "vite";\nimport AutoImport from "unplugin-auto-import/vite";\nimport Components from "unplugin-vue-components/vite";\nimport { ElementPlusResolver } from "unplugin-vue-components/resolvers";\nimport vue from "@vitejs/plugin-vue";\nexport default defineConfig({\n  plugins: [\n    [vue()],\n    AutoImport({\n      resolvers: [ElementPlusResolver()],\n    }),\n    Components({\n      resolvers: [ElementPlusResolver()],\n    }),\n  ],\n});\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u6dfb\u52a0todo",children:"\u6dfb\u52a0Todo"}),"\n",(0,s.jsxs)(e.p,{children:['\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u5b8c\u6210"\u6dfb\u52a0\u529f\u80fd"\uff0c\u9996\u5148\u73b0\u5728pinia\u589e\u52a0',(0,s.jsx)(e.code,{children:"actions"}),",\u8fd9\u662f\u63a5\u4e0b\u6765\u9700\u8981\u8c03\u7528\u7684\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\u5199\u5165\u4ee3\u7801"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {\n    addTodo(content) {\n      const newTodo = {\n        id: this.todoList.length + 1,\n        content: content,\n        isDone: false,\n      };\n      this.todoList.push(newTodo);\n    },\n  },\n});\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u7684\u76ee\u6807\u662f\u5b8c\u6210\u4e00\u4e2a\u8f93\u5165\u6846\uff0c\u4e00\u4e2a\u786e\u8ba4\u6309\u94ae\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u8c03\u7528",(0,s.jsx)(e.code,{children:"addTodo"}),"\u51fd\u6570\uff0c\u5c06\u8f93\u5165\u6846\u8f93\u5165\u7684\u5185\u5bb9\u6dfb\u52a0\u5230",(0,s.jsx)(e.code,{children:"todoList"}),"\u8fd9\u4e2a\u72b6\u6001\u91cc\uff0c\u7136\u540e\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u5185\u5bb9\u4e3a\u7a7a\uff0c\u56e0\u4e3a",(0,s.jsx)(e.code,{children:"todoList"}),"\u8fd9\u4e2a\u72b6\u6001\u66f4\u65b0\u4e86\uff0c\u6240\u4ee5\u7f51\u9875\u7684\u5185\u5bb9\u66f4\u65b0\u4e86\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"src\\App.vue"}),"\u4e2d\u5199\u5165\u4ee3\u7801"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-vue",children:'<script setup>\n// \u5bfc\u5165 Todo \u7ec4\u4ef6\u3001todoData \u6570\u636e\u4ed3\u5e93\u548c ref \u51fd\u6570\nimport Todo from "./components/Todo.vue";\nimport { useTodoDataStore } from "./stores/todoData";\nimport { ref } from "vue";\n\n// \u521b\u5efa\u4e00\u4e2a ref \u5bf9\u8c61\uff0c\u7528\u4e8e\u5b58\u50a8\u8f93\u5165\u6846\u7684\u503c\nconst input = ref("");\n\n// \u83b7\u53d6\u540d\u4e3a todoData \u7684\u6570\u636e\u4ed3\u5e93\u5b9e\u4f8b\nconst todoData = useTodoDataStore();\n\n// \u4ece todoData \u4e2d\u83b7\u53d6\u540d\u4e3a allTodos \u7684\u54cd\u5e94\u5f0f\u6570\u636e\nconst todoList = todoData.allTodos;\n\n// \u83b7\u53d6\u540d\u4e3a addTodo \u7684 action \u51fd\u6570\uff0c\u7528\u4e8e\u6dfb\u52a0\u65b0\u7684 todo\nconst addTodo = todoData.addTodo;\n\n// \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a AddTodo \u7684\u51fd\u6570\uff0c\u7528\u4e8e\u6dfb\u52a0\u65b0\u7684 todo\nconst AddTodo = () => {\n  // \u8c03\u7528 addTodo action\uff0c\u5c06\u8f93\u5165\u6846\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\n  addTodo(input.value);\n  \n  // \u5c06\u8f93\u5165\u6846\u7684\u503c\u91cd\u7f6e\u4e3a\u7a7a\n  input.value = "";\n};\n<\/script>\n\n<template>\n  <div class="bg-white text-black p-4">\n    <el-row>\n      <el-col :span="6">\n        <el-input v-model="input" placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879" />\n      </el-col>\n      <el-button @click="AddTodo">\u63d0\u4ea4</el-button>\n    </el-row>\n    <ul v-for="todo in todoList">\n      <Todo :todo="todo" :keys="todo.id" />\n    </ul>\n  </div>\n</template>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u65f6\u6548\u679c\u5982\u4e0b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(15171).A+"",width:"340",height:"224"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8f93\u5165\u6846\u8f93\u5165",(0,s.jsx)(e.code,{children:"mytodo"}),"\u53ef\u4ee5\u770b\u5230"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(97594).A+"",width:"359",height:"240"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u7684",(0,s.jsx)(e.code,{children:"<el-row>"}),"\uff0c",(0,s.jsx)(e.code,{children:"<el-input>"}),",",(0,s.jsx)(e.code,{children:"<el-button>"}),",\u90fd\u662fElement Plus\u8fd9\u4e2aUI\u7ec4\u4ef6\u5e93\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<el-button @click="AddTodo">\u63d0\u4ea4</el-button>\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'@click="AddTodo"'}),"\u662f\u6307\u5f53\u88ab\u70b9\u51fb\u65f6\uff0c\u89e6\u53d1",(0,s.jsx)(e.code,{children:"AddTodo"}),"\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<el-input v-model="input" placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879" />\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:'v-model="input"'})," \u662f Vue.js \u4e2d\u7684\u8bed\u6cd5\uff0c\u7528\u4e8e\u5b9e\u73b0\u6570\u636e\u7684\u53cc\u5411\u7ed1\u5b9a\u3002\u8fd9\u610f\u5473\u7740 ",(0,s.jsx)(e.code,{children:"input"})," \u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\u5c06\u4e0e\u8f93\u5165\u6846\u7684\u503c\u4fdd\u6301\u540c\u6b65\uff0c\u5982\u679c\u7528\u6237\u5728\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u5185\u5bb9\uff0c",(0,s.jsx)(e.code,{children:"input"})," \u7684\u503c\u4e5f\u4f1a\u66f4\u65b0\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:'placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879"'})," \u662f ",(0,s.jsx)(e.code,{children:"<el-input>"})," \u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u7528\u4e8e\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u5360\u4f4d\u63d0\u793a\u6587\u672c\u3002"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},62351:(n,e,o)=>{o.d(e,{A:()=>s});const s="data:image/png;base64,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"},13544:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/3_1-5fb282ab82d7de0f572e68cee816bfe0.png"},15171:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/3_2-46bca0224918c207e0ff78ec171cf778.png"},97594:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/3_3-4a71f82dd85746b694434303a8dc082c.png"},71377:(n,e,o)=>{o.d(e,{R:()=>d,x:()=>c});var s=o(79474);const t={},i=s.createContext(t);function d(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);