"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5285],{455:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=o(13274),i=o(71377);const r={id:"backend-project-structure",sidebar_position:6},t="Web\u540e\u7aef\uff1a\u5b9e\u9645\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",d={id:"todo/backend-project-structure",title:"Web\u540e\u7aef\uff1a\u5b9e\u9645\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/todo/backend_project_structure.md",sourceDirName:"todo",slug:"/todo/backend-project-structure",permalink:"/cs202/todo/backend-project-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/backend_project_structure.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"backend-project-structure",sidebar_position:6},sidebar:"todoSidebar",previous:{title:"Web\u540e\u7aef\uff1aHTTP POST \u8bf7\u6c42",permalink:"/cs202/todo/backend_http_post"},next:{title:"Web\u540e\u7aef\uff1a\u6570\u636e\u5e93\u8fc1\u79fb",permalink:"/cs202/todo/backend-db-migration"}},c={},l=[{value:"\u65b0\u5efa\u6587\u4ef6\u5939",id:"\u65b0\u5efa\u6587\u4ef6\u5939",level:2},{value:"\u6539\u9020 Pydantic \u90e8\u5206\u4ee3\u7801",id:"\u6539\u9020-pydantic-\u90e8\u5206\u4ee3\u7801",level:2},{value:"\u6539\u9020 API \u90e8\u5206\u4ee3\u7801",id:"\u6539\u9020-api-\u90e8\u5206\u4ee3\u7801",level:2},{value:"\u6539\u9020 <code>main.py</code> \u4ee3\u7801",id:"\u6539\u9020-mainpy-\u4ee3\u7801",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"web\u540e\u7aef\u5b9e\u9645\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",children:"Web\u540e\u7aef\uff1a\u5b9e\u9645\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,s.jsxs)(n.p,{children:["\u8bf7\u5207\u6362\u5230 ",(0,s.jsx)(n.code,{children:"backend_project_structure_start"})," \u5206\u652f\uff0c\u5f00\u59cb\u6b64\u6559\u7a0b\u4ee3\u7801\u7684\u7f16\u5199\u3002"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u968f\u7740\u9879\u76ee\u7684\u589e\u957f\uff0c\u6211\u4eec\u4e0d\u53ef\u80fd\u628a\u6240\u6709\u7684\u4ee3\u7801\u90fd\u5199\u5728\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"main.py"})," \u6587\u4ef6\u91cc\u9762\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9\u9879\u76ee\u4ee3\u7801\u8fdb\u884c\u62c6\u5206\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u7ed3\u6784\u5b9e\u73b0\u4ee3\u7801\u5408\u7406\u6709\u5e8f\u7684\u7ec4\u7ec7\u3002\u5982\u4f55\u7ec4\u7ec7\u4ee3\u7801\u5404\u6709\u5404\u7684\u504f\u597d\uff0c\u672c\u6559\u7a0b\u63d0\u4f9b\u4e00\u4e2a\u5927\u5bb6\u6bd4\u8f83\u901a\u7528\u7684\u6700\u4f73\u5b9e\u8df5\u7684\u65b9\u6848\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\nE:.\n\u2502  .gitignore\n\u2502  main.py\n\u2502  requirements.txt\n\u2502  __init__.py\n\u2502\n\u251c\u2500api\n\u2502      __init__.py\n\u2502\n\u251c\u2500core\n\u2502      __init__.py\n\u2502\n\u251c\u2500crud\n\u2502      __init__.py\n\u2502\n\u251c\u2500db\n\u2502     __init__.py\n\u2502  \n\u251c\u2500models\n\u2502      __init__.py\n\u2502\n\u2514\u2500schemas\n        __init__.py\n\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{children:(0,s.jsx)(n.code,{children:"__init__.py"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"__init__.py"})," \u6587\u4ef6\u5728 Python \u4e2d\u5177\u6709\u7279\u6b8a\u7684\u4f5c\u7528\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u6807\u8bc6\u4e00\u4e2a\u76ee\u5f55\u662f\u4e00\u4e2a Python \u5305\u3002"]}),(0,s.jsx)(n.p,{children:"\u5176\u5728 Python \u5305\u4e2d\u5177\u6709\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u5b83\u5b9a\u4e49\u4e86\u5305\u7684\u521d\u59cb\u5316\u884c\u4e3a\uff0c\u4e3a\u5305\u63d0\u4f9b\u4e86\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u53ef\u4ee5\u5305\u542b\u5305\u7ea7\u522b\u7684\u4ee3\u7801\u548c\u5b9a\u4e49\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u89e3\u91ca\u6700\u4f73\u5b9e\u8df5\u4e2d\u5404\u4e2a\u6587\u4ef6\u5939\u548c\u6587\u4ef6\u7684\u542b\u4e49:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".gitignore"}),": \u7528\u6765\u6307\u5b9a Git \u7248\u672c\u63a7\u5236\u7cfb\u7edf\u5ffd\u7565\u54ea\u4e9b\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5177\u4f53\u5982\u4f55\u4f7f\u7528\u8bf7\u67e5\u770b Git \u7684\u76f8\u5173\u5185\u5bb9\u8fdb\u884c\u5b66\u4e60\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"main.py"}),"\uff1a \u662f\u6574\u4e2aFastAPI\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"main.py"})," \u5c06\u4ee3\u7801\u7ec4\u7ec7\u5728\u4e00\u8d77\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"requirements.txt"}),": \u662f\u4e00\u79cd\u5e38\u89c1\u7684\u7528\u4e8e\u8bb0\u5f55Python\u9879\u76ee\u6240\u4f9d\u8d56\u7684\u8f6f\u4ef6\u5305\u53ca\u5176\u7248\u672c\u7684\u6587\u672c\u6587\u4ef6\u3002(\u5efa\u8bae\u5148\u4e0d\u8003\u8651\u8be5\u6587\u4ef6)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api"}),": \u5b58\u653e\u6240\u6709API\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"core"}),": \u5b58\u653e\u5b89\u5168\u3001\u5bc6\u7801\u6821\u9a8c\u7b49\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"curd"}),": \u5b58\u653e\u6240\u6709\u6570\u636e\u5e93\u589e\u5220\u6539\u67e5\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": \u5b58\u653e\u6570\u636e\u5e93\u8bbe\u7f6e\u548c\u6570\u636e\u5e93\u8fc1\u79fb\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u3002\uff08\u540e\u9762\u4f1a\u8bb2\u89e3\u6570\u636e\u5e93\u8fc1\u79fb\u5185\u5bb9\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"models"}),": \u5b58\u653e\u6240\u6709ORM\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u3002\uff08\u540e\u9762\u4f1a\u8bb2\u89e3ORM\u5185\u5bb9\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schemas"}),": \u5b58\u653e\u6240\u6709Pydantic\u6821\u9a8c\u7c7b\u7684\u6587\u4ef6\u5939\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u65b0\u5efa\u6587\u4ef6\u5939",children:"\u65b0\u5efa\u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6839\u636e\u6700\u4f73\u5b9e\u8df5\uff0c\u65b0\u5efa\u5bf9\u5e94\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(48129).A+"",width:"1036",height:"946"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6539\u9020-pydantic-\u90e8\u5206\u4ee3\u7801",children:"\u6539\u9020 Pydantic \u90e8\u5206\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"schemas"})," \u6587\u4ef6\u5939\u4e2d\u65b0\u5efa ",(0,s.jsx)(n.code,{children:"todo.py"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"E:.\n\u2502  .gitignore\n\u2502  main.py\n...\n\u2502\n\u2514\u2500schemas\n        __init__.py\n        todo.py\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7528 VS Code \u6253\u5f00 ",(0,s.jsx)(n.code,{children:"schemas/todo.py"})," \u6587\u4ef6\uff0c\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from pydantic import BaseModel\n\nclass TodoCreate(BaseModel):\n    content: str\n    is_done: bool\n\nclass Todo(TodoCreate):\n    id: int\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6539\u9020-api-\u90e8\u5206\u4ee3\u7801",children:"\u6539\u9020 API \u90e8\u5206\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"api"})," \u6587\u4ef6\u5939\u4e2d\u65b0\u5efa ",(0,s.jsx)(n.code,{children:"todos.py"})," \u548c ",(0,s.jsx)(n.code,{children:"api.py"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"E:.\n\u2502  .gitignore\n\u2502  main.py\n...\n\u2502\n\u251c\u2500api\n\u2502      __init__.py\n\u2502      api.py\n\u2502      todos.py\n\u2502\n...\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7528 VS Code \u6253\u5f00 ",(0,s.jsx)(n.code,{children:"api/todos.py"})," \u6587\u4ef6\uff0c\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'from fastapi import APIRouter\nfrom schemas import todo as schemas_todo\n\nfrom typing import Optional\n\nrouter = APIRouter()\n\nTODOS = [\n    {\n        "id": 1,\n        "content": "Init todo1",\n        "is_done": False\n    },\n    {\n        "id": 2,\n        "content": "Init todo2",\n        "is_done": False\n    },\n]\n\n\n@router.get("/todos", response_model=list[schemas_todo.Todo])\ndef get_all_todos():\n    return TODOS\n\n\n@router.get("/todos/{todo_id}", response_model=schemas_todo.Todo)\ndef get_todo_by_id(todo_id: int):\n    result = None\n    for todo in TODOS:\n        if todo["id"] == todo_id:\n            result = todo\n\n    if result:\n        return result\n    \n@router.get("/todos/search/",  response_model=list[schemas_todo.Todo])\ndef search_todos(\n    keyword: Optional[str] = None, max_results: Optional[int] = 10  \n):\n    """\n    Search for todos based on keyword\n    """\n    if not keyword:\n        # we use Python list slicing to limit results\n        # based on the max_results query parameter\n        return {"results": TODOS[:max_results]} \n\n    results = filter(lambda todo: keyword.lower() in todo["content"].lower(), TODOS)  \n    return {"results": list(results)[:max_results]}\n\n@router.post("/todos", response_model=schemas_todo.Todo)\ndef create_todo(*, todo_in: schemas_todo.TodoCreate):  # 2\n    """\n    Create a new todo (in memory only)\n    """\n    new_entry_id = len(TODOS) + 1\n    todo_entry = schemas_todo.Todo(\n        id=new_entry_id,\n        content=todo_in.content,\n        is_done=todo_in.is_done\n    )\n    TODOS.append(todo_entry.dict())  # 3\n\n    return todo_entry\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from schemas import todo as schemas_todo"}),": \u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"schemas/todo.py"}),"\u4ee3\u7801\u6587\u4ef6\uff0c\u5e76\u4e14\u7ed9\u5b83\u4e00\u4e2a\u522b\u540d ",(0,s.jsx)(n.code,{children:"schemas_todo"}),"\u3002\u522b\u540d\u7684\u4f5c\u7528\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u533a\u522b\u4e0d\u540c\u6a21\u5757\u53ef\u80fd\u5b58\u5728\u540c\u540d\u7684\u5185\u5bb9\uff0c\u5982\u679c\u4e0d\u505a\u5374\u522b\u4ee3\u7801\u4f1a\u62a5\u9519\u3002\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"schemas"})," \u6587\u4ef6\u5939\u91cc\u9762\u6709 ",(0,s.jsx)(n.code,{children:"__init__.py"}),"\uff0c\u6240\u6709 ",(0,s.jsx)(n.code,{children:"schemas"})," \u53d8\u6210\u4e86 Python \u7684\u4e00\u4e2a\u5305\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u4e0a\u8ff0\u65b9\u5f0f\u5bfc\u5165\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"router = APIRouter()"}),": \u5728 FastAPI \u4e2d\uff0cAPIRouter() \u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa\u72ec\u7acb\u8def\u7531\u5668\u7684\u7c7b\u3002\u5b83\u7684\u4f5c\u7528\u662f\u5c06\u76f8\u5173\u7684 API \u8def\u7531\u548c\u5904\u7406\u7a0b\u5e8f\u7ec4\u7ec7\u5728\u4e00\u8d77\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u7ba1\u7406\u548c\u7ec4\u7ec7\u4ee3\u7801\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"@router.get"})," \u548c  ",(0,s.jsx)(n.code,{children:"@router.post"})," \u4e0e\u4e4b\u524d\u7684  ",(0,s.jsx)(n.code,{children:"@app.get"})," \u548c ",(0,s.jsx)(n.code,{children:"@app.post"}),"\u4f5c\u7528\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7528 VS Code \u6253\u5f00 ",(0,s.jsx)(n.code,{children:"api/api.py"})," \u6587\u4ef6\uff0c\u8f93\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'from fastapi import APIRouter\nfrom api.todos import router as todos_router\n\napi_router = APIRouter()\napi_router.include_router(todos_router, tags=["todos"])\n\n@api_router.get("/")\ndef hello_world():\n    return {"message": "Hello world"}\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from api.todos import router as todos_router"}),": \u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"api/todos.py"})," \u4ee3\u7801\u4e2d\u5b9a\u4e49\u7684 ",(0,s.jsx)(n.code,{children:"router"})," \u5b9e\u4f8b\uff0c\u5e76\u4e14\u7ed9\u5b83\u4e00\u4e2a\u522b\u540d ",(0,s.jsx)(n.code,{children:"todos_router"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'api_router.include_router(todos_router, tags=["todos"])'}),": \u5c06 ",(0,s.jsx)(n.code,{children:"api/todos.py"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"router"})," \u6302\u5728\u5230 ",(0,s.jsx)(n.code,{children:"api_router"}),"\u5b9e\u4f8b\u4e0a\u3002\u5728 FastAPI \u4e2d\uff0c",(0,s.jsx)(n.code,{children:"include_router"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u5c06 ",(0,s.jsx)(n.code,{children:"APIRouter"})," \u5b9e\u4f8b\u6dfb\u52a0\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u65b9\u6cd5\u3002\u5b83\u5141\u8bb8\u5c06\u4e0d\u540c\u7684\u8def\u7531\u5668\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u4ee5\u4fbf\u7edf\u4e00\u6ce8\u518c\u548c\u7ba1\u7406\u8def\u7531\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u6539\u9020-mainpy-\u4ee3\u7801",children:["\u6539\u9020 ",(0,s.jsx)(n.code,{children:"main.py"})," \u4ee3\u7801"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7528 VS Code \u6253\u5f00 ",(0,s.jsx)(n.code,{children:"main.py"})," \u6587\u4ef6\uff0c\u5c06\u4ee3\u7801\u66f4\u6539\u6210\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\n\nfrom api.api import api_router\n\napp = FastAPI()\napp.include_router(api_router, prefix="/api")\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["*"],\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\nif __name__ == "__main__":\n    uvicorn.run("main:app", reload=True, host="127.0.0.1", port=8000)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'app.include_router(api_router, prefix="/api")'}),": \u5c06 ",(0,s.jsx)(n.code,{children:"api/api.py"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"api_router"})," \u6302\u5728\u5230 FastAPI ",(0,s.jsx)(n.code,{children:"app"}),'\u5b9e\u4f8b\u4e0a, \u540c\u65f6\u589e\u52a0\u4e00\u4e2a "/api" \u524d\u7f00\u3002\u589e\u52a0\u524d\u7f00\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u548c Web \u524d\u7aef\u7684URL\u505a\u533a\u522b\uff0c\u6240\u6709Web\u540e\u7aef\u63d0\u4f9b\u7684API\u7684URL\u90fd\u662f\u4ee5 ',(0,s.jsx)(n.code,{children:"/api/xxx"}),"\u7684\u5f62\u5f0f\u63d0\u4f9b\u7684\u3002\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"GET Todos"})," \u7684API \u7684URL\u53d8\u6210\u4e86: ",(0,s.jsx)(n.code,{children:"http://localhost:8000/api/todos"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(99146).A+"",width:"1528",height:"554"})}),"\n",(0,s.jsxs)(n.admonition,{title:"CORS(\u8de8\u57df\u8d44\u6e90\u5171\u4eab)",type:"tip",children:[(0,s.jsx)(n.p,{children:"CORS\uff0c\u5373\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff08Cross-Origin Resource Sharing\uff09\uff0c\u662f\u4e00\u79cd\u7528\u4e8e\u89e3\u51b3\u6d4f\u89c8\u5668\u8de8\u57df\u8bbf\u95ee\u9650\u5236\u7684\u673a\u5236\u3002\u540c\u6e90\u7b56\u7565\uff08Same-Origin Policy\uff09\u662f\u6d4f\u89c8\u5668\u7684\u4e00\u79cd\u5b89\u5168\u7279\u6027\uff0c\u5b83\u9650\u5236\u4e86\u5728\u4e0d\u540c\u6e90\uff08\u57df\u540d\u3001\u534f\u8bae\u6216\u7aef\u53e3\uff09\u4e4b\u95f4\u7684\u8d44\u6e90\u5171\u4eab\u3002"}),(0,s.jsx)(n.p,{children:"\u540c\u6e90\u7b56\u7565\u7684\u9650\u5236\u610f\u5473\u7740\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u52a0\u8f7d\u7684\u7f51\u9875\u53ea\u80fd\u8bbf\u95ee\u540c\u4e00\u6e90\uff08\u57df\u540d\u3001\u534f\u8bae\u548c\u7aef\u53e3\uff09\u4e0b\u7684\u8d44\u6e90\uff0c\u800c\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u5176\u4ed6\u6e90\u7684\u8d44\u6e90\u3002\u8fd9\u79cd\u9650\u5236\u662f\u4e3a\u4e86\u4fdd\u62a4\u7528\u6237\u9690\u79c1\u548c\u5b89\u5168\uff0c\u9632\u6b62\u6076\u610f\u7f51\u7ad9\u901a\u8fc7\u811a\u672c\u7b49\u65b9\u5f0f\u7a83\u53d6\u7528\u6237\u7684\u654f\u611f\u4fe1\u606f\u3002"}),(0,s.jsx)(n.p,{children:"\u7136\u800c\uff0c\u8de8\u57df\u8bbf\u95ee\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u662f\u5fc5\u8981\u7684\uff0c\u4f8b\u5982\uff0c\u5f53\u7f51\u9875\u9700\u8981\u8bbf\u95ee\u5176\u4ed6\u57df\u540d\u4e0b\u7684 API \u6216\u8d44\u6e90\u65f6\u3002\u8fd9\u5c31\u9700\u8981\u4f7f\u7528 CORS \u673a\u5236\u6765\u5141\u8bb8\u8de8\u57df\u8d44\u6e90\u5171\u4eab\u3002"}),(0,s.jsx)(n.p,{children:"CORS \u5141\u8bb8\u670d\u52a1\u5668\u5728\u54cd\u5e94\u4e2d\u8bbe\u7f6e\u7279\u5b9a\u7684 HTTP \u5934\u90e8\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u5141\u8bb8\u6765\u81ea\u5176\u4ed6\u6e90\u7684\u7f51\u9875\u8bbf\u95ee\u8d44\u6e90\u3002\u6d4f\u89c8\u5668\u5728\u53d1\u9001\u8de8\u57df\u8bf7\u6c42\u65f6\u4f1a\u5148\u53d1\u9001\u4e00\u4e2a\u9884\u68c0\u8bf7\u6c42\uff08OPTIONS \u8bf7\u6c42\uff09\uff0c\u670d\u52a1\u5668\u5728\u9884\u68c0\u8bf7\u6c42\u7684\u54cd\u5e94\u4e2d\u6307\u5b9a\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\uff0c\u5e76\u8bbe\u7f6e\u5141\u8bb8\u7684 HTTP \u65b9\u6cd5\u3001\u5934\u90e8\u7b49\u3002"}),(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528 CORS\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u7075\u6d3b\u5730\u914d\u7f6e\u5141\u8bb8\u8bbf\u95ee\u7684\u6765\u6e90\u3001\u5141\u8bb8\u7684 HTTP \u65b9\u6cd5\u548c\u5934\u90e8\uff0c\u4ee5\u6ee1\u8db3\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u548c\u5b89\u5168\u7b56\u7565\u3002\u8fd9\u6837\uff0c\u6d4f\u89c8\u5668\u5c31\u53ef\u4ee5\u5b89\u5168\u5730\u4ece\u5176\u4ed6\u6e90\u52a0\u8f7d\u8d44\u6e90\uff0c\u5e76\u5c06\u5176\u5c55\u793a\u7ed9\u7528\u6237\u3002"}),(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d FastAPI \u81ea\u5e26\u7684 CORS \u65b9\u6848\u5bfc\u81f4\u6211\u4eec Web \u524d\u7aef\u4e0d\u80fd\u8bbf\u95ee Web \u540e\u7aef\u7684 API\uff0c\u6211\u4eec\u5bf9\u589e\u52a0\u4e86\u5982\u4e0b\u4ee3\u7801\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from fastapi.middleware.cors import CORSMiddleware\n\n# skiping...\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["*"],  # \u652f\u6301\u6240\u6709\u6e90\n    allow_credentials=True,  # \u652f\u6301Cookie\n    allow_methods=["*"],  # \u652f\u6301\u6240\u6709HTTP\u65b9\u6cd5\n    allow_headers=["*"],   # \u652f\u6301\u6240\u6709HTTP\u5934\n)\n\n# skiping...\n'})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5b9e\u9645\u9879\u76ee\u4e2d\u5173\u4e8eCORS\u65b9\u6848\uff0c\u8bf7\u6839\u636e\u5177\u4f53\u7684\u9700\u6c42\u6765\u8fdb\u884c\u5bf9\u5e94\u9650\u5236\uff0c\u800c\u4e0d\u662f\u5b8c\u5168\u4ee3\u5f00"}),"\u3002\u8be6\u7ec6\u5185\u5bb9\u8bf7\u67e5\u770b\uff1a",(0,s.jsx)(n.a,{href:"https://fastapi.tiangolo.com/tutorial/cors/",children:"https://fastapi.tiangolo.com/tutorial/cors/"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u662f\u6d4b\u8bd5\u9636\u6bb5\uff0c\u8bf7\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,s.jsx)(n.a,{href:"http://localhost:8000/docs(%E6%89%93%E5%BC%80",children:"http://localhost:8000/docs(\u6253\u5f00"})," URL \u524d\u8bf7\u786e\u4fdd\u6211\u4eec\u7684FastAPI \u5e94\u7528\u662f\u8fd0\u884c\u8d77\u6765\u7684)\u5bf9\u6211\u4eec\u6539\u9020\u540e\u7684\u6240\u6709API\u8fdb\u884c\u6d4b\u8bd5\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u5207\u6362 ",(0,s.jsx)(n.code,{children:"backend_project_structure_finished"})," \u5206\u652f\uff0c\u67e5\u770b\u6700\u7ec8\u6b63\u786e\u5b9e\u73b0\u7684\u4ee3\u7801\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},48129:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/project_01-8cc40953d37aba47e4b4a3a15d575886.png"},99146:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/project_02-f4ff57aec7a09623a404338dc3a03a8f.png"},71377:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(79474);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);