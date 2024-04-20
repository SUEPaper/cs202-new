"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7112],{96214:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=e(13274),s=e(71377);const o={id:"ubuntu",sidebar_position:2},l="Ubuntu Linux \u5b89\u88c5",a={id:"install/python_install/ubuntu",title:"Ubuntu Linux \u5b89\u88c5",description:"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/install/python_install/Ubuntu.md",sourceDirName:"install/python_install",slug:"/install/python_install/ubuntu",permalink:"/cs202/install/python_install/ubuntu",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install/python_install/Ubuntu.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ubuntu",sidebar_position:2},sidebar:"installSidebar",previous:{title:"Windows \u5b89\u88c5",permalink:"/cs202/install/python_install/windows"},next:{title:"MacOS \u5b89\u88c5",permalink:"/cs202/install/python_install/macos"}},u={},r=[{value:"Ubuntu \u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5",id:"ubuntu-\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5",level:2},{value:"\u8fd0\u884c Python \u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668(REPL)",id:"\u8fd0\u884c-python-\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668repl",level:2}];function c(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ubuntu-linux-\u5b89\u88c5",children:"Ubuntu Linux \u5b89\u88c5"}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"\u4f5c\u4e3a\u4e00\u4e2a\u6210\u719f\u7684Linux\u7528\u6237\uff0c\u5176\u5b9e\u4f60\u5e94\u8be5\u77e5\u9053\u600e\u4e48\u5b89\u88c5Python\u3002"})})]}),"\n",(0,i.jsx)(t.h2,{id:"ubuntu-\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5",children:"Ubuntu \u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo apt install python3 python3-pip\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u8fd0\u884c-python-\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668repl",children:"\u8fd0\u884c Python \u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668(REPL)"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["\u201c\u8bfb\u53d6-\u6c42\u503c-\u8f93\u51fa\u201d\u5faa\u73af\uff08\u82f1\u8bed\uff1aRead-Eval-Print Loop\uff0c\u7b80\u79f0 REPL\uff09\uff0c\u4e5f\u88ab\u79f0\u505a\u4ea4\u4e92\u5f0f\u9876\u5c42\u6784\u4ef6\uff08\u82f1\u8bed\uff1ainteractive toplevel\uff09\uff0c\u662f\u4e00\u4e2a\u7b80\u5355\u7684\uff0c\u4ea4\u4e92\u5f0f\u7684\u7f16\u7a0b\u73af\u5883\u3002\u8fd9\u4e2a\u8bcd\u5e38\u5e38\u7528\u4e8e\u6307\u4ee3\u4e00\u4e2a Lisp \u7684\u4ea4\u4e92\u5f0f\u5f00\u53d1\u73af\u5883\uff0c\u4e5f\u80fd\u6307\u4ee3\u547d\u4ee4\u884c\u7684\u6a21\u5f0f\u3002\u2014\u2014\u2014",(0,i.jsx)(t.a,{href:"https://zh.m.wikipedia.org/zh-hans/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF",children:"\u7ef4\u57fa\u767e\u79d1"})]})}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff0c\u4fbf\u53ef\u8fdb\u5165 Python \u7684 REPL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python3\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u89c1\u5230\u5982\u4e0b\u754c\u9762\u4fbf\u8bf4\u660e Python \u5b89\u88c5\u6210\u529f\u4e86\uff1a"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:e(95174).A+"",width:"1426",height:"1180"})})]})}function d(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},95174:(n,t,e)=>{e.d(t,{A:()=>i});const i=e.p+"assets/images/ubuntu_python_repl-91766f3efc87590d84d1d921bccac1fc.png"},71377:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>a});var i=e(79474);const s={},o=i.createContext(s);function l(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);