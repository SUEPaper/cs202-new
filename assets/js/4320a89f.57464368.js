"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6536],{3748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var d=s(13274),i=s(71377);const l={id:"db_migration",sidebar_position:7},o="\u6570\u636e\u5e93\u8fc1\u79fb",c={id:"todo/backend/db_migration",title:"\u6570\u636e\u5e93\u8fc1\u79fb",description:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/todo/backend/datamigration.md",sourceDirName:"todo/backend",slug:"/todo/backend/db_migration",permalink:"/cs202/todo/backend/db_migration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo/backend/datamigration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"db_migration",sidebar_position:7},sidebar:"todoSidebar",previous:{title:"\u5b9e\u9645\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",permalink:"/cs202/todo/backend/project_structure"},next:{title:"\u4e0e MySQL \u6570\u636e\u5e93\u8fde\u63a5",permalink:"/cs202/todo/backend/db"}},r={},a=[{value:"\u5b89\u88c5\u548c\u914d\u7f6e Alembic",id:"\u5b89\u88c5\u548c\u914d\u7f6e-alembic",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521d\u59cb\u5316\u73af\u5883",id:"\u521d\u59cb\u5316\u73af\u5883",level:3},{value:"\u4e3a Todo \u65b0\u5efa\u4e00\u5f20\u6570\u636e\u5e93\u8868",id:"\u4e3a-todo-\u65b0\u5efa\u4e00\u5f20\u6570\u636e\u5e93\u8868",level:2},{value:"\u5b9e\u73b0\u65b0\u5efa<code>todos</code>\u8868\u7684\u8fc1\u79fb\u4ee3\u7801",id:"\u5b9e\u73b0\u65b0\u5efatodos\u8868\u7684\u8fc1\u79fb\u4ee3\u7801",level:3},{value:"\u521b\u5efa <code>todos</code> \u8868",id:"\u521b\u5efa-todos-\u8868",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u6570\u636e\u5e93\u8fc1\u79fb",children:"\u6570\u636e\u5e93\u8fc1\u79fb"}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsx)(n.p,{children:"\u672c\u8bfe\u7a0b\u7f51\u7ad9\u5185\u5bb9\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u540e\u518d\u8fdb\u884c\u5b9e\u64cd\u3002\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5185\u5bb9\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff08\u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"}),(0,d.jsxs)(n.p,{children:["\u8bf7\u5207\u6362\u5230 ",(0,d.jsx)(n.code,{children:"backend_db_migration_start"})," \u5206\u652f\uff0c\u5f00\u59cb\u6b64\u6559\u7a0b\u4ee3\u7801\u7684\u7f16\u5199\u3002"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6240\u6709\u7684\u4ee3\u7801\u8bf7\u4e0d\u8981\u590d\u5236\u7c98\u8d34\uff0c\u8bf7\u624b\u6572\u6bcf\u4e00\u884c\u4ee3\u7801\u3002\u590d\u5236\u7c98\u8d34\u4e0d\u4f1a\u8ba9\u4f60\u52a8\u8111\u5b50\uff0c\u800c\u624b\u6572\u6bcf\u4e00\u4e2a\u884c\u4ee3\u7801\u4f1a\u8ba9\u4f60\u81ea\u7136\u800c\u7136\u5730\u53bb\u52a8\u8111\u5b50\u4f1a\u60f3\u6bcf\u4e00\u884c\u4ee3\u7801\u7684\u542b\u4e49\u548c\u539f\u7406"})})]}),"\n",(0,d.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8fc1\u79fb\uff08Database Migration\uff09\u662f\u4e00\u79cd\u7ba1\u7406\u6570\u636e\u5e93\u6a21\u5f0f\uff08Schema\uff09\u548c\u7ed3\u6784\u53d8\u5316\u7684\u6280\u672f\u3002\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728\u6570\u636e\u5e93\u6a21\u5f0f\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u901a\u8fc7\u7f16\u7a0b\u65b9\u5f0f\u81ea\u52a8\u5730\u8fc1\u79fb\u548c\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u800c\u65e0\u9700\u624b\u52a8\u6267\u884c\u7e41\u7410\u7684\u811a\u672c\u6216\u624b\u52a8\u4fee\u6539\u6570\u636e\u5e93\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8fc1\u79fb\u901a\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6a21\u5f0f\u6f14\u5316\uff1a\u5f53\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u5411\u6570\u636e\u5e93\u6dfb\u52a0\u65b0\u7684\u8868\u3001\u5217\u3001\u7d22\u5f15\u7b49\u3002\u6570\u636e\u5e93\u8fc1\u79fb\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u521b\u5efa\u8fc1\u79fb\u811a\u672c\u6765\u81ea\u52a8\u6267\u884c\u8fd9\u4e9b\u7ed3\u6784\u53d8\u5316\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u4e0e\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u65b0\u7248\u672c\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u56e2\u961f\u534f\u4f5c\uff1a\u5728\u56e2\u961f\u5f00\u53d1\u4e2d\uff0c\u591a\u4e2a\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u540c\u65f6\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u4fee\u6539\u3002\u4f7f\u7528\u6570\u636e\u5e93\u8fc1\u79fb\u53ef\u4ee5\u5e2e\u52a9\u56e2\u961f\u534f\u4f5c\uff0c\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u521b\u5efa\u548c\u5e94\u7528\u81ea\u5df1\u7684\u8fc1\u79fb\u811a\u672c\uff0c\u4fdd\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\u7684\u4e00\u81f4\u6027\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7248\u672c\u63a7\u5236\uff1a\u6570\u636e\u5e93\u8fc1\u79fb\u5de5\u5177\u901a\u5e38\u4e0e\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u5982Git\uff09\u96c6\u6210\uff0c\u53ef\u4ee5\u8ddf\u8e2a\u548c\u7ba1\u7406\u6570\u636e\u5e93\u7ed3\u6784\u7684\u53d8\u5316\u3002\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u5730\u56de\u6eda\u5230\u5148\u524d\u7684\u6570\u636e\u5e93\u7248\u672c\uff0c\u6216\u8005\u5728\u4e0d\u540c\u7684\u73af\u5883\uff08\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u751f\u4ea7\uff09\u4e4b\u95f4\u540c\u6b65\u6570\u636e\u5e93\u7ed3\u6784\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8fc1\u79fb\u901a\u5e38\u7531\u4e00\u4e2a\u6570\u636e\u5e93\u8fc1\u79fb\u5de5\u5177\u6765\u7ba1\u7406\uff0c\u5982Alembic\u3001Flyway\u3001Liquibase\u7b49\u3002\u8fd9\u4e9b\u5de5\u5177\u63d0\u4f9b\u4e86\u521b\u5efa\u3001\u5e94\u7528\u548c\u56de\u6eda\u8fc1\u79fb\u811a\u672c\u7684\u529f\u80fd\uff0c\u5e76\u4e0e\u4e3b\u6d41\u6570\u636e\u5e93\u7cfb\u7edf\uff08\u5982MySQL\u3001PostgreSQL\u3001SQLite\uff09\u517c\u5bb9\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6570\u636e\u5e93\u8fc1\u79fb\u65f6\uff0c\u901a\u5e38\u4f1a\u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u8fc1\u79fb\u811a\u672c\uff0c\u7528\u4e8e\u521d\u59cb\u5316\u6570\u636e\u5e93\u6a21\u5f0f\u3002\u968f\u540e\u7684\u6bcf\u4e2a\u8fc1\u79fb\u811a\u672c\u4f1a\u63cf\u8ff0\u6570\u636e\u5e93\u7ed3\u6784\u7684\u53d8\u5316\uff0c\u5305\u62ec\u521b\u5efa\u65b0\u8868\u3001\u4fee\u6539\u8868\u7ed3\u6784\u3001\u6dfb\u52a0\u7d22\u5f15\u7b49\u3002\u6bcf\u6b21\u5e94\u7528\u8fc1\u79fb\u811a\u672c\u65f6\uff0c\u6570\u636e\u5e93\u8fc1\u79fb\u5de5\u5177\u4f1a\u81ea\u52a8\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\uff0c\u4f7f\u6570\u636e\u5e93\u8fbe\u5230\u6240\u9700\u7684\u7ed3\u6784\u72b6\u6001\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u4e2d\u4f7f\u7528\u7684\u662f Alembic \u4f5c\u4e3a\u6570\u636e\u5e93\u8fc1\u79fb\u7684\u5de5\u5177\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5\u548c\u914d\u7f6e-alembic",children:"\u5b89\u88c5\u548c\u914d\u7f6e Alembic"}),"\n",(0,d.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 Alembic"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pip install alembic sqlalchemy mysqlclient\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u521d\u59cb\u5316\u73af\u5883",children:"\u521d\u59cb\u5316\u73af\u5883"}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5e76\u4e14\u8fdb\u5165 ",(0,d.jsx)(n.code,{children:"db/"})," \u6587\u4ef6\u5939\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"alembic init migrations\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5219\u4f1a\u4ea7\u751f\u5982\u4e0b\u6240\u793a\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"E:\ndb\n\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 alembic.ini\n\u2514\u2500\u2500 migrations\n    \u251c\u2500\u2500 README\n    \u251c\u2500\u2500 env.py\n    \u251c\u2500\u2500 script.py.mako\n    \u2514\u2500\u2500 versions\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u7528 VS Code \u6253\u5f00 ",(0,d.jsx)(n.code,{children:"alembic.ini"})," \u6587\u4ef6\uff0c\u5c06\u7b2c63\u884c\u4ee3\u7801\u6539\u6210\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yml",children:"sqlalchemy.url = mysql://root:password@localhost:3306/todoapp\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(58806).A+"",width:"1467",height:"536"})}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsxs)(n.p,{children:["\u6b64\u64cd\u4f5c\u524d\u63d0\u6761\u4ef6\u662f\uff0cMySQL\u6570\u636e\u5e93\u4e2droot\u8d26\u6237\u4e0b\u6709",(0,d.jsx)(n.code,{children:"todoapp"}),"\u8fd9\u4e2a\u6570\u636e\u5e93\uff0c\u5982\u679c\u6ca1\u6709\u8bf7\u65b0\u5efa\u4e00\u4e2a\uff0c\u5e76\u4e14\u4f60MySQL\u7684root\u8d26\u6237\u5bc6\u7801\u9700\u4e3a ",(0,d.jsx)(n.code,{children:"password"}),"\u3002\uff08",(0,d.jsxs)(n.strong,{children:["MySQL root \u7528\u6237\u5bc6\u7801\u5df2\u5728MySQL\u5b89\u88c5\u6559\u7a0b\u4e2d\u5f3a\u70c8\u8981\u6c42\u5927\u5bb6\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"password"})]}),"\uff09"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u4e3a-todo-\u65b0\u5efa\u4e00\u5f20\u6570\u636e\u5e93\u8868",children:"\u4e3a Todo \u65b0\u5efa\u4e00\u5f20\u6570\u636e\u5e93\u8868"}),"\n",(0,d.jsxs)(n.p,{children:["\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u7684 TODOS \u90fd\u5b58\u5728\u5185\u5b58\u91cc\u9762\uff0c\u5f53 FastAPI \u7a0b\u5e8f\u91cd\u542f\u4ee5\u540e\uff0cTODOS\u91cc\u9762\u7684\u6570\u636e\u90fd\u4e22\u5931\u4e86\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u5c06 TODOS \u7684\u6570\u636e\u5b58\u5230\u6570\u636e\u5e93\u91cc\u9762\uff0c\u5728\u5b9e\u73b0\u6570\u636e\u5e93\u64cd\u4f5c\u4e4b\u524d\u6211\u4eec\u9700\u8981\u5728 MySQL \u6570\u636e\u5e93\u4e2d\u65b0\u5efa\u4e00\u5f20 ",(0,d.jsx)(n.code,{children:"todos"})," \u8868\uff0c\u7528\u6765\u5b58\u50a8 TODOS \u7684\u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5e76\u4e14\u8fdb\u5165 ",(0,d.jsx)(n.code,{children:"db/"})," \u6587\u4ef6\u5939\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'alembic revision -m "create_todos_table"\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5219\u4f1a\u4ea7\u751f\u5982\u4e0b\u6240\u793a\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"E:\ndb\n\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 alembic.ini\n\u2514\u2500\u2500 migrations\n    \u251c\u2500\u2500 README\n    \u251c\u2500\u2500 env.py\n    \u251c\u2500\u2500 script.py.mako\n    \u2514\u2500\u2500 versions\n        \u2514\u2500\u2500 0f54f99f8360_create_todos_table.py\n"})}),"\n",(0,d.jsx)(n.admonition,{title:"\u89c1\u540d\u77e5\u4e49",type:"tip",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"create_todos_table"})," \u4e00\u770b\u5c31\u77e5\u9053\u65b0\u5efa\u4e00\u5f20 ",(0,d.jsx)(n.code,{children:"todos"})," \u8868\uff0c\u5e76\u4e14 alembic \u81ea\u52a8\u751f\u6210\u7684\u8fc1\u79fb\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e2d\u4e5f\u6709  ",(0,d.jsx)(n.code,{children:"create_todos_table"}),"\uff0c \u65b9\u4fbf\u56e2\u961f\u5408\u4f5c\u4e2d\u5176\u4ed6\u5de5\u7a0b\u5e08\u9605\u8bfb\u548c\u7ef4\u62a4\u4ee3\u7801\u3002"]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"0f54f99f8360_create_todos_table.py"}),"\u662f\u6211\u4eec\u7b2c\u4e00\u4e2a\u6570\u636e\u5e93\u8fc1\u79fb\u6587\u4ef6\uff0c\u8bf7\u7528VS Code \u6253\u5f00\u4ee3\u7801\u6587\u4ef6\u3002(",(0,d.jsxs)(n.strong,{children:["\u4e5f\u8bb8\u5728\u4f60\u7684\u7535\u8111\u91cc\u9762\u6587\u4ef6\u540d\u4e0d\u662f",(0,d.jsx)(n.code,{children:"0f54f99f8360_"}),"\u5f00\u5934\u7684\uff0c\u8fd9\u4e2a\u53d6\u51b3\u4e8e\u4f60\u7684\u7535\u8111\u968f\u673a\u751f\u6210\u7684\u6570\u5b57\u548c\u5b57\u6bcd\u7684\u7ec4\u5408\uff0c \u672c\u6559\u7a0b\u7528",(0,d.jsx)(n.code,{children:"xxx_create_todos_table.py"}),"\u6307\u4ee3\u4f60\u672c\u5730\u5bf9\u5e94\u7684\u6587\u4ef6"]}),")"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'"""create_todos_table\n\nRevision ID: 0f54f99f8360\nRevises: \nCreate Date: 2023-07-01 14:37:56.539116\n\n"""\nfrom alembic import op\nimport sqlalchemy as sa\n\n\n# revision identifiers, used by Alembic.\nrevision = \'0f54f99f8360\'\ndown_revision = None\nbranch_labels = None\ndepends_on = None\n\n\ndef upgrade() -> None:\n    pass\n\n\ndef downgrade() -> None:\n    pass\n\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"revision = '0f54f99f8360'"})," \u662f\u8bb0\u5f55\u5f53\u524dmigration\u6587\u4ef6\u7684\u7248\u672c\u53f7\uff0calembic \u5c31\u662f\u57fa\u4e8e\u8fd9\u4e2a\u7248\u672c\u53f7\u6765\u7ba1\u7406\u6570\u636e\u5e93\u53d8\u66f4\u7684\u7248\u672c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u51fd\u6570 ",(0,d.jsx)(n.code,{children:"upgrade"})," \u7f16\u5199\u6570\u636e\u5e93\u5f80\u524d\u6eda\u7684\u53d8\u66f4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u51fd\u6570 ",(0,d.jsx)(n.code,{children:"downgrade"})," \u7f16\u5199\u6570\u636e\u5e93\u5f80\u56de\u6eda\u7684\u53d8\u66f4\uff0c\u7528\u6237\u5220\u9664",(0,d.jsx)(n.code,{children:"upgrade"}),"\u7684\u53d8\u66f4\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u5b9e\u73b0\u65b0\u5efatodos\u8868\u7684\u8fc1\u79fb\u4ee3\u7801",children:["\u5b9e\u73b0\u65b0\u5efa",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u7684\u8fc1\u79fb\u4ee3\u7801"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5c06",(0,d.jsx)(n.code,{children:"xxx_create_todos_table.py"}),"\u4e2d\u7684",(0,d.jsx)(n.code,{children:"upgrade"}),"\u3001",(0,d.jsx)(n.code,{children:"downgrade"})," \u51fd\u6570\u66ff\u6362\u6210\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'def upgrade() -> None:\n    op.create_table(\n        "todos",\n        sa.Column("id", sa.Integer, primary_key=True, index=True),\n        sa.Column("is_done", sa.Boolean, default=False, nullable=False),\n        sa.Column("content", sa.Text, nullable=False),\n        sa.Column("created_at", sa.TIMESTAMP, nullable=False),\n        sa.Column("updated_at", sa.TIMESTAMP, nullable=False)\n    )\n\ndef downgrade() -> None:\n    op.drop_table("todos")\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"op.create_table"}),': \u65b0\u5efa\u4e00\u5f20\u8868\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8868\u7684\u540d\u5b57\uff0c\u6b64\u5904\u4e3a\uff1a"todos"\u3002']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"op.drop_table"}),': \u5220\u9664\u8868\uff0c\u6b64\u5904\u5220\u9664\u7684\u8868\u662f: "todos"\u3002']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:'sa.Column("id", sa.Integer, primary_key=True, index=True)'}),": ",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"id"})," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f ",(0,d.jsx)(n.code,{children:"Integer"})," \u578b\uff0c\u662f\u4e3b\u952e\uff0c\u91c7\u7528MySQL\u81ea\u589e\u7684\u65b9\u5f0f\u81ea\u52a8\u751f\u6210\uff0c\u5e76\u4e14\u6709\u7d22\u5f15\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:'sa.Column("is_done", sa.Boolean, default=False, nullable=False)'}),": ",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"is_done"})," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f ",(0,d.jsx)(n.code,{children:"Boolean"})," \u578b\uff0c\u9ed8\u8ba4\u503c\u662f",(0,d.jsx)(n.code,{children:"False"}),", \u975e\u7a7a\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:'sa.Column("content", sa.Boolean, default=False, nullable=False)'}),": ",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"content"})," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f ",(0,d.jsx)(n.code,{children:"Text"})," \u578b\uff0c\u65e0\u9ed8\u8ba4\u503c\uff0c\u975e\u7a7a\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:'sa.Column("created_at", sa.TIMESTAMP, nullable=False)'}),": ",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"created_at"})," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f ",(0,d.jsx)(n.code,{children:"TIMESTAMP"})," \u578b\uff0c\u65e0\u9ed8\u8ba4\u503c\uff0c\u975e\u7a7a\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:'sa.Column("updated_at", sa.TIMESTAMP, nullable=False)'}),": ",(0,d.jsx)(n.code,{children:"todos"}),"\u8868\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"updated_at"})," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f ",(0,d.jsx)(n.code,{children:"TIMESTAMP"})," \u578b\uff0c\u65e0\u9ed8\u8ba4\u503c\uff0c\u975e\u7a7a\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsxs)(n.p,{children:["\u5173\u4e8e alembic \u53ef\u4ee5\u8fdb\u884c\u54ea\u4e9b\u64cd\u4f5c\u8bf7\u67e5\u9605\u5b98\u65b9\u6587\u6863\uff1a ",(0,d.jsx)(n.a,{href:"https://alembic.sqlalchemy.org/en/latest/ops.html",children:"https://alembic.sqlalchemy.org/en/latest/ops.html"})]}),(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230 alembic \u4f7f\u7528 SQLAchemy \u7684\u63d0\u4f9b\u7684\u6570\u636e\u5e93\u5b57\u6bb5\u7c7b\u578b\uff0c\u56e0\u6b64\u66f4\u591a\u7684\u8868\u5b57\u6bb5\u7c7b\u578b\u8bf7\u67e5\u9605\u5b98\u65b9\u6587\u6863\uff1a",(0,d.jsx)(n.a,{href:"https://docs-sqlalchemy.readthedocs.io/ko/latest/core/type_basics.html",children:"https://docs-sqlalchemy.readthedocs.io/ko/latest/core/type_basics.html"})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"\u521b\u5efa-todos-\u8868",children:["\u521b\u5efa ",(0,d.jsx)(n.code,{children:"todos"})," \u8868"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00\u7ec8\u7aef\uff0c\u5e76\u4e14\u8fdb\u5165 ",(0,d.jsx)(n.code,{children:"db/"})," \u6587\u4ef6\u5939\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"alembic upgrade head\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fdb\u5165\u6570\u636e\u5e93\u4fbf\u53ef\u770b\u5230\u65b0\u5efa\u7684 ",(0,d.jsx)(n.code,{children:"todos"})," \u8868\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(40429).A+"",width:"1696",height:"1040"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["alembic \u8be6\u7ec6\u6559\u7a0b\u8bf7\u770b\u5b98\u65b9\u6587\u6863\uff1a",(0,d.jsx)(n.a,{href:"https://alembic.sqlalchemy.org/en/latest/tutorial.html",children:"https://alembic.sqlalchemy.org/en/latest/tutorial.html"})]})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u5207\u6362 ",(0,d.jsx)(n.code,{children:"backend_db_migration_finished"})," \u5206\u652f\uff0c\u67e5\u770b\u6700\u7ec8\u6b63\u786e\u5b9e\u73b0\u7684\u4ee3\u7801\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},58806:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/db_migration_01-e91cb8f95eb4260dff981d91264fa7fc.png"},40429:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/db_migration_02-ea73c9b49647e3d602d28dcedaec97af.png"},71377:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var d=s(79474);const i={},l=d.createContext(i);function o(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);