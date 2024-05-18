"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6641],{21576:(o,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var e=t(13274),s=t(71377);const r={id:"frontend-todos-other",sidebar_position:28},d="Web\u524d\u7aef\uff1a\u5b8c\u6210Todo\u5269\u4e0b\u7684\u5220\u9664\u548c\u4fee\u6539",a={id:"todo/frontend-todos-other",title:"Web\u524d\u7aef\uff1a\u5b8c\u6210Todo\u5269\u4e0b\u7684\u5220\u9664\u548c\u4fee\u6539",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/todo/frontend_todos_other.md",sourceDirName:"todo",slug:"/todo/frontend-todos-other",permalink:"/cs202/todo/frontend-todos-other",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/frontend_todos_other.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{id:"frontend-todos-other",sidebar_position:28},sidebar:"todoSidebar",previous:{title:"Web\u524d\u7aef\uff1aaxios\u5e93\u53d1\u9001HTTP\u8bf7\u6c42",permalink:"/cs202/todo/frontend-axios"},next:{title:"Web\u540e\u7aef\uff1a\u7528\u6237\u767b\u9646",permalink:"/cs202/todo/backend-auth"}},i={},c=[{value:"\u5220\u9664\u529f\u80fd",id:"\u5220\u9664\u529f\u80fd",level:2},{value:"\u4fee\u6539\u529f\u80fd",id:"\u4fee\u6539\u529f\u80fd",level:2}];function l(o){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"web\u524d\u7aef\u5b8c\u6210todo\u5269\u4e0b\u7684\u5220\u9664\u548c\u4fee\u6539",children:"Web\u524d\u7aef\uff1a\u5b8c\u6210Todo\u5269\u4e0b\u7684\u5220\u9664\u548c\u4fee\u6539"}),"\n",(0,e.jsxs)(n.admonition,{type:"tip",children:[(0,e.jsx)(n.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,e.jsx)(n.h2,{id:"\u5220\u9664\u529f\u80fd",children:"\u5220\u9664\u529f\u80fd"}),"\n",(0,e.jsxs)(n.p,{children:["\u5728",(0,e.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\uff0c\u4fee\u6539\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-js",metastring:'showLineNumbers title="src\\stores\\todoData.js"',children:'import { defineStore } from "pinia";\nimport axios from \'axios\';\n\nimport { FASTAPI_BASE_URL } from "../constant";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todos: []\n  }),\n  getters: { allTodos: (state) => state.todos },\n  actions: {\n    async fetchTodos() {\n      try {\n        const response = await axios.get(`${FASTAPI_BASE_URL}/api/todos`);\n        this.todos = response.data;\n        console.log(this.todos);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n    async addTodo(content) {\n      const newTodo = { content, is_done: false };\n      try {\n        const response = await axios.post(`${FASTAPI_BASE_URL}/api/todos`, newTodo);\n        this.todos.push(response.data);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n    async deleteTodo(id) {\n      try {\n        const response = await axios.delete(`${FASTAPI_BASE_URL}/api/todos/${id}`);\n        this.todos.filter(todo => todo.id !== id);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n  }\n});\n'})}),"\n",(0,e.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,e.jsx)(n.code,{children:"src/components/TodoItem.vue"})," \u7684\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-html",metastring:'showLineNumbers title="src/components/TodoItem.vue"',children:'<script setup>\nimport { toRefs } from "vue";\nimport { useTodoDataStore } from "../stores/todoData";\nconst todoData = useTodoDataStore();\nimport XMark from "./icons/XMark.vue";\nconst props = defineProps({\n  todo: { id: Number, content: String, is_done: Boolean },\n});\n\nconst { id, content, is_done } = toRefs(props.todo);\n\nconst deleteTodo = (id) => {\n  todoData.deleteTodo(id);\n}\n<\/script>\n<template>\n  <article class="flex gap-4 border-b border-gray-200 p-4">\n    <button\n      class="h-5 w-5 rounded-full border-2 transition-all duration-700"\n    ></button>\n    <p :class=" is_done? \n    \'flex-auto text-gray-300 line-through transition-all duration-700 \' :\n    \'flex-auto text-gray-500 transition-all duration-700\'\n    " >\n      {{ content }}\n    </p>\n    <button @click="() => deleteTodo(id)">\n      <XMark />\n    </button>\n  </article>\n</template>\n'})}),"\n",(0,e.jsx)(n.h2,{id:"\u4fee\u6539\u529f\u80fd",children:"\u4fee\u6539\u529f\u80fd"}),"\n",(0,e.jsxs)(n.p,{children:["\u5728",(0,e.jsx)(n.code,{children:"src\\stores\\todoData.js"}),"\u4e2d\uff0c\u4fee\u6539\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-js",metastring:'showLineNumbers title="src\\stores\\todoData.js"',children:'import { defineStore } from "pinia";\nimport axios from \'axios\';\n\nimport { FASTAPI_BASE_URL } from "../constant";\n\nexport const useTodoDataStore = defineStore("todoData", {\n  state: () => ({\n    todos: []\n  }),\n  getters: { allTodos: (state) => state.todos },\n  actions: {\n    async fetchTodos() {\n      try {\n        const response = await axios.get(`${FASTAPI_BASE_URL}/api/todos`);\n        this.todos = response.data;\n        console.log(this.todos);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n    async addTodo(content) {\n      const newTodo = { content, is_done: false };\n      try {\n        const response = await axios.post(`${FASTAPI_BASE_URL}/api/todos`, newTodo);\n        this.todos.push(response.data);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n    async deleteTodo(id) {\n      try {\n        const response = await axios.delete(`${FASTAPI_BASE_URL}/api/todos/${id}`);\n        this.todos.filter(todo => todo.id !== id);\n      } catch (error) {\n        console.error(error);\n      }\n    },\n    async changeIsDone(id) {\n      const todo = this.todos.find(todo => todo.id === id);\n      todo.is_done = !todo.is_done;\n      try {\n        const response = await axios.put(`${FASTAPI_BASE_URL}/api/todos/${id}`, todo);\n      } catch (error) {\n        console.error(error);\n      }\n\n      this.todos = this.todos.map(todo => {\n        if (todo.id === idToModify) {\n          return { ...todo, is_done: newIsDoneStatus };\n        }\n        return todo;\n      });\n    }\n  }\n});\n'})}),"\n",(0,e.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,e.jsx)(n.code,{children:"src/components/TodoItem.vue"})," \u7684\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-html",metastring:'showLineNumbers title="src/components/TodoItem.vue"',children:'<script setup>\nimport { toRefs } from "vue";\nimport { useTodoDataStore } from "../stores/todoData";\nconst todoData = useTodoDataStore();\nimport XMark from "./icons/XMark.vue";\nconst props = defineProps({\n  todo: { id: Number, content: String, is_done: Boolean },\n});\n\nconst { id, content, is_done } = toRefs(props.todo);\n\nconst deleteTodo = (id) => {\n  todoData.deleteTodo(id);\n}\n\nconst changeIsDone = (id) => {\n  todoData.changeIsDone(id);\n}\n<\/script>\n<template>\n  <article class="flex gap-4 border-b border-gray-200 p-4">\n    <button\n      @click="() => changeIsDone(id)"\n      class="h-5 w-5 rounded-full border-2 transition-all duration-700"\n    ></button>\n    <p :class=" is_done? \n    \'flex-auto text-gray-300 line-through transition-all duration-700 \' :\n    \'flex-auto text-gray-500 transition-all duration-700\'\n    " >\n      {{ content }}\n    </p>\n    <button @click="() => deleteTodo(id)">\n      <XMark />\n    </button>\n  </article>\n</template>\n'})})]})}function p(o={}){const{wrapper:n}={...(0,s.R)(),...o.components};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(l,{...o})}):l(o)}},71377:(o,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var e=t(79474);const s={},r=e.createContext(s);function d(o){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function a(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:d(o.components),e.createElement(r.Provider,{value:n},o.children)}}}]);