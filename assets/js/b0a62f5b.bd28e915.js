"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6849],{5337:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(3274),d=o(1377);const s={id:"todos",sidebar_position:5},i="\u5b8c\u6210Todo List\u5269\u4e0b\u529f\u80fd",c={id:"todo/frontend/todos",title:"\u5b8c\u6210Todo List\u5269\u4e0b\u529f\u80fd",description:"\u56fe\u6807\u5e93",source:"@site/docs/todo/frontend/todos.md",sourceDirName:"todo/frontend",slug:"/todo/frontend/todos",permalink:"/cs202/todo/frontend/todos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend/todos.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"todos",sidebar_position:5},sidebar:"todoSidebar",previous:{title:"State\u548c\u4e8b\u4ef6\u5904\u7406",permalink:"/cs202/todo/frontend/state-event"},next:{title:"\u8def\u7531",permalink:"/cs202/todo/frontend/router"}},r={},a=[{value:"\u56fe\u6807\u5e93",id:"\u56fe\u6807\u5e93",level:2},{value:"\u5220\u9664\u529f\u80fd",id:"\u5220\u9664\u529f\u80fd",level:2},{value:"\u4fee\u6539&quot;\u662f\u5426\u5b8c\u6210&quot;",id:"\u4fee\u6539\u662f\u5426\u5b8c\u6210",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5b8c\u6210todo-list\u5269\u4e0b\u529f\u80fd",children:"\u5b8c\u6210Todo List\u5269\u4e0b\u529f\u80fd"}),"\n",(0,t.jsx)(e.h2,{id:"\u56fe\u6807\u5e93",children:"\u56fe\u6807\u5e93"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528UI\uff0c\u6211\u4eec\u4f7f\u7528",(0,t.jsx)(e.a,{href:"https://element-plus.org/zh-CN/component/icon.html",children:"element-plus"}),"\u7684\u56fe\u6807\u5e93\uff0c\u5728\u547d\u4ee4\u884c\u91cc\u8f93\u5165\u4e0b\u9762\u7684\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm install @element-plus/icons-vue\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\u5bf9\u5176\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\main.js"}),"\u4e2d\u5199\u5165"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import { createApp } from "vue";\nimport App from "./App.vue";\nimport "./index.css";\nimport { createPinia } from "pinia";\nimport * as ElementPlusIconsVue from "@element-plus/icons-vue";\n\nconst app = createApp(App);\napp.use(createPinia());\nfor (const [key, component] of Object.entries(ElementPlusIconsVue)) {\n  app.component(key, component);\n}\napp.mount("#app");\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5220\u9664\u529f\u80fd",children:"\u5220\u9664\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5220\u9664\u6309\u94ae\uff0c\u7528\u4e8e\u5220\u9664",(0,t.jsx)(e.code,{children:"todoList"}),"\u8fd9\u4e2a\u72b6\u6001\u91cc\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0e\u4e4b\u524d\u4e00\u6837\uff0c\u5148\u6dfb\u52a0\u4e00\u4e2a\u5bf9\u5e94\u7684",(0,t.jsx)(e.code,{children:"action"}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\u5199\u5165"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {\n    addTodo(content) {\n      const newTodo = {\n        id: this.todoList.length + 1,\n        content: content,\n        isDone: false,\n      };\n      this.todoList.push(newTodo);\n    },\n    deleteTodo(id) {\n      // \u67e5\u627e\u5f85\u529e\u4e8b\u9879\u5728 todoList \u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n      const index = this.todoList.findIndex((todo) => todo.id === id);\n\n      // \u68c0\u67e5\u662f\u5426\u627e\u5230\u4e86\u5f85\u529e\u4e8b\u9879\n      if (index !== -1) {\n        // \u5982\u679c\u627e\u5230\u4e86\uff0c\u4f7f\u7528 splice \u65b9\u6cd5\u4ece todoList \u6570\u7ec4\u4e2d\u79fb\u9664\u8be5\u5f85\u529e\u4e8b\u9879\n        this.todoList.splice(index, 1);\n      }\n    }\n  },\n});\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u540e\u9700\u8981\u8c03\u7528\u8fd9\u4e2a",(0,t.jsx)(e.code,{children:"action"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\App.vue"}),"\u4e2d\u5199\u5165"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vue",children:'<script setup>\nimport Todo from "./components/Todo.vue";\nimport { useTodoDataStore } from "./stores/todoData";\nimport { ref } from "vue";\nconst input = ref("");\nconst todoData = useTodoDataStore();\nconst todoList = todoData.allTodos;\nconst addTodo = todoData.addTodo;\nconst deleteTodo = todoData.deleteTodo;\n\nconst AddTodo = () => {\n  addTodo(input.value);\n  input.value = "";\n};\n\nconst DeleteTodo = (id) => {\n  deleteTodo(id);\n};\n<\/script>\n\n<template>\n  <div class="bg-white text-black p-4">\n    <el-row>\n      <el-col :span="6">\n        <el-input v-model="input" placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879" />\n      </el-col>\n      <el-button @click="AddTodo">\u63d0\u4ea4</el-button>\n    </el-row>\n\n    <el-row v-for="todo in todoList" :key="todo.id" class="items-center space-x-3">\n      <Todo :todo="todo" :keys="todo.id" />\n      <el-icon size="16" class="center">\n        <Delete @click="() => DeleteTodo(todo.id)" />\n      </el-icon>\n    </el-row>\n  </div>\n</template>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,t.jsx)(e.code,{children:"<Delete>"})," \u662f\u56fe\u6807\uff0c\u901a\u8fc7\u76d1\u542c ",(0,t.jsx)(e.code,{children:"@click"})," \u4e8b\u4ef6\u89e6\u53d1\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u901a\u8fc7\u533f\u540d\u51fd\u6570\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"DeleteTodo"})," \u65b9\u6cd5\uff0c\u4f20\u9012\u4e86\u4e00\u4e2a\u53c2\u6570 ",(0,t.jsx)(e.code,{children:"todo.id"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:o(4101).A+"",width:"333",height:"255"})}),"\n",(0,t.jsx)(e.p,{children:"\u70b9\u51fbmytodo\u7684\u5220\u9664\u56fe\u6807"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:o(5004).A+"",width:"315",height:"200"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4fee\u6539\u662f\u5426\u5b8c\u6210",children:'\u4fee\u6539"\u662f\u5426\u5b8c\u6210"'}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u70b9\u51fb\u8be5TODO\uff0c\u6539\u53d8\u5176\u662f\u5426\u5b8c\u6210\u7684\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u540c\u6837\u7684\uff0c\u9700\u8981\u589e\u52a0\u5bf9\u5e94\u7684",(0,t.jsx)(e.code,{children:"action"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\u4fee\u6539\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import { defineStore } from "pinia";\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todoList: [\n      {\n        id: 1,\n        content: "\u4e0a\u6d77\u7535\u529b\u5927\u5b66",\n        isDone: false,\n      },\n      {\n        id: 2,\n        content: "\u6570\u7406\u5b66\u9662",\n        isDone: false,\n      },\n      {\n        id: 3,\n        \n        content: "\u73b0\u4ee3Web\u5f00\u53d1",\n        isDone: true,\n      },\n      {\n        id: 4,\n        content: "Web\u524d\u7aef\u5f00\u53d1",\n        isDone: false,\n      },\n      {\n        id: 5,\n        content: "\u5f85\u529e\u6e05\u5355",\n        isDone: true,\n      },\n    ],\n  }),\n  getters: { allTodos: (state) => state.todoList },\n  actions: {\n    addTodo(content) {\n      const newTodo = {\n        id: this.todoList.length + 1,\n        content: content,\n        isDone: false,\n      };\n      this.todoList.push(newTodo);\n    },\n    deleteTodo(id) {\n      const index = this.todoList.findIndex((todo) => todo.id == id);\n      if (index !== -1) {\n        this.todoList.splice(index, 1);\n      }\n    },\n    changeIsDone(id) {\n      // \u67e5\u627e\u5f85\u529e\u4e8b\u9879\u5728 todoList \u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\n      const todo = this.todoList.find((item) => item.id === id);\n\n      // \u68c0\u67e5\u662f\u5426\u627e\u5230\u4e86\u5f85\u529e\u4e8b\u9879\n      if (todo) {\n        // \u5982\u679c\u627e\u5230\u4e86\uff0c\u5207\u6362\u5f85\u529e\u4e8b\u9879\u7684\u5b8c\u6210\u72b6\u6001\n        todo.isDone = !todo.isDone;\n      }\n    }\n  },\n});\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"src\\App.vue"}),"\u4e2d\u4fee\u6539\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vue",children:'<script setup>\nimport Todo from "./components/Todo.vue";\nimport { useTodoDataStore } from "./stores/todoData";\nimport { ref } from "vue";\nconst input = ref("");\nconst todoData = useTodoDataStore();\n\nconst todoList = todoData.allTodos;\nconst addTodo = todoData.addTodo;\nconst deleteTodo = todoData.deleteTodo;\nconst changeIsDone = todoData.changeIsDone;\n\nconst AddTodo = () => {\n  addTodo(input.value);\n  input.value = "";\n};\n\nconst DeleteTodo = (id) => {\n  deleteTodo(id);\n};\n\nconst ChangeIsDone = (id) => {\n  changeIsDone(id);\n};\n<\/script>\n\n<template>\n  <div class="bg-white text-black p-4">\n    <el-row>\n      <el-col :span="6">\n        <el-input v-model="input" placeholder="\u8bf7\u8f93\u5165\u4ee3\u529e\u4e8b\u9879" />\n      </el-col>\n      <el-button @click="AddTodo">\u63d0\u4ea4</el-button>\n    </el-row>\n\n    <el-row v-for="todo in todoList" :key="todo.id" class="items-center space-x-3">\n      <div @click="() => ChangeIsDone(todo.id)">\n        <Todo :todo="todo" />\n      </div>\n      <el-icon size="16" class="center">\n        <Delete @click="() => DeleteTodo(todo.id)" />\n      </el-icon>\n    </el-row>\n  </div>\n</template>\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"<Delete>"}),"\u4e5f\u662f\u4e00\u4e2a\u56fe\u6807\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},4101:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/3_4-1d4c11263a43f98106b924b0a83101d3.png"},5004:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/3_5-a70b6b0b154be00cd4e0faacd51d09fa.png"},1377:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>c});var t=o(9474);const d={},s=t.createContext(d);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);