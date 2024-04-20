"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3520],{9452:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=s(13274),i=s(71377);const l={id:"css_basic",sidebar_position:8},c="CSS\u57fa\u7840",r={id:"frontend/basic_html_css/css_basic",title:"CSS\u57fa\u7840",description:"CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u63a7\u5236\u7f51\u9875\u6837\u5f0f\u548c\u5e03\u5c40\u7684\u6807\u8bb0\u8bed\u8a00\u3002",source:"@site/docs/frontend/basic_html_css/css_basic.md",sourceDirName:"frontend/basic_html_css",slug:"/frontend/basic_html_css/css_basic",permalink:"/cs202/frontend/basic_html_css/css_basic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/basic_html_css/css_basic.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"css_basic",sidebar_position:8},sidebar:"frontendSidebar",previous:{title:"HTML\u8868\u683c",permalink:"/cs202/frontend/basic_html_css/html_table"},next:{title:"CSS\u9009\u62e9\u5668",permalink:"/cs202/frontend/basic_html_css/css_selector"}},d={},o=[{value:"HTML \u5982\u4f55\u4f7f\u7528CSS",id:"html-\u5982\u4f55\u4f7f\u7528css",level:2},{value:"\u5185\u8054\u6837\u5f0f\uff08Inline Styles\uff09",id:"\u5185\u8054\u6837\u5f0finline-styles",level:3},{value:"\u5185\u90e8\u6837\u5f0f\u8868\uff08Internal Style Sheet\uff09",id:"\u5185\u90e8\u6837\u5f0f\u8868internal-style-sheet",level:3},{value:"\u5916\u90e8\u6837\u5f0f\u8868\uff08External Style Sheet\uff09",id:"\u5916\u90e8\u6837\u5f0f\u8868external-style-sheet",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"css\u57fa\u7840",children:"CSS\u57fa\u7840"}),"\n",(0,t.jsx)(n.p,{children:"CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u63a7\u5236\u7f51\u9875\u6837\u5f0f\u548c\u5e03\u5c40\u7684\u6807\u8bb0\u8bed\u8a00\u3002\n\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u7f51\u9875\u4e2d\u5143\u7d20\u7684\u5916\u89c2\u3001\u6392\u7248\u3001\u989c\u8272\u548c\u5176\u4ed6\u65b9\u9762\u7684\u6837\u5f0f\uff0c\u4ece\u800c\u4f7f\u7f51\u9875\u5448\u73b0\u51fa\u7f8e\u89c2\u3001\u4e00\u81f4\u548c\u53ef\u8bfb\u6027\u5f3a\u7684\u5916\u89c2\u3002\nCSS3 \u662f CSS \u7684\u6700\u65b0\u7248\u672c\uff0c\u5b83\u5f15\u5165\u4e86\u8bb8\u591a\u65b0\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5f3a\u5927\u3001\u66f4\u7075\u6d3b\u7684\u6837\u5f0f\u8bbe\u8ba1\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662fCSS\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\u548c\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u9009\u62e9\u5668\uff08Selectors\uff09"}),"\uff1aCSS \u4f7f\u7528\u9009\u62e9\u5668\u6765\u9009\u62e9\u8981\u5e94\u7528\u6837\u5f0f\u7684 HTML \u5143\u7d20\u3002\u9009\u62e9\u5668\u53ef\u4ee5\u57fa\u4e8e\u5143\u7d20\u7684\u6807\u7b7e\u540d\u3001\u7c7b\u540d\u3001ID\u3001\u5c5e\u6027\u7b49\u6765\u8fdb\u884c\u9009\u62e9\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5c5e\u6027\uff08Properties\uff09"}),"\uff1aCSS \u5c5e\u6027\u662f\u7528\u4e8e\u5b9a\u4e49\u5143\u7d20\u6837\u5f0f\u7684\u5177\u4f53\u89c4\u5219\u3002\u4f8b\u5982\uff0ccolor \u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u6587\u672c\u989c\u8272\uff0cfont-size \u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u5b57\u4f53\u5927\u5c0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u503c\uff08Values"}),'\uff09\uff1a\u6bcf\u4e2a\u5c5e\u6027\u90fd\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u80fd\u7684\u503c\uff0c\u7528\u4e8e\u6307\u5b9a\u8be5\u5c5e\u6027\u7684\u5177\u4f53\u6837\u5f0f\u3002\u4f8b\u5982\uff0ccolor \u5c5e\u6027\u7684\u503c\u53ef\u4ee5\u662f\u989c\u8272\u7684\u540d\u79f0\uff08\u5982 "red"\uff09\u3001\u5341\u516d\u8fdb\u5236\u503c\uff08\u5982 "#FF0000"\uff09\u6216 RGB \u503c\uff08\u5982 "rgb(255, 0, 0)"\uff09\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76d2\u6a21\u578b\uff08Box Model\uff09"}),"\uff1a\u5728 CSS \u4e2d\uff0c\u6bcf\u4e2a HTML \u5143\u7d20\u90fd\u88ab\u89c6\u4e3a\u4e00\u4e2a\u77e9\u5f62\u7684\u76d2\u5b50\uff0c\u5177\u6709\u5185\u5bb9\u533a\u57df\u3001\u5185\u8fb9\u8ddd\u3001\u8fb9\u6846\u548c\u5916\u8fb9\u8ddd\u3002\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528 CSS \u6765\u63a7\u5236\u8fd9\u4e9b\u76d2\u5b50\u7684\u5927\u5c0f\u3001\u95f4\u8ddd\u548c\u8fb9\u6846\u6837\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5c42\u53e0\u548c\u7ee7\u627f\uff08Cascading and Inheritance\uff09"}),"\uff1aCSS \u6837\u5f0f\u53ef\u4ee5\u5c42\u53e0\u5728\u4e00\u8d77\uff0c\u591a\u4e2a\u6837\u5f0f\u89c4\u5219\u53ef\u80fd\u4f1a\u540c\u65f6\u5e94\u7528\u5230\u540c\u4e00\u4e2a\u5143\u7d20\u4e0a\u3002\u6b64\u5916\uff0c\u67d0\u4e9b\u6837\u5f0f\u5c5e\u6027\u53ef\u4ee5\u88ab\u5b50\u5143\u7d20\u7ee7\u627f\uff0c\u4ece\u800c\u4f7f\u5f97\u5728\u7236\u5143\u7d20\u4e0a\u8bbe\u7f6e\u7684\u6837\u5f0f\u53ef\u4ee5\u81ea\u52a8\u5e94\u7528\u5230\u5176\u5b50\u5143\u7d20\u4e0a\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40\uff08Flexbox\uff09"}),"\uff1a\u662f\u4e00\u79cd\u7528\u4e8e\u4e00\u7ef4\u5e03\u5c40\u7684\u5e03\u5c40\u6a21\u578b\uff0c\u5b83\u53ef\u4ee5\u6cbf\u7740\u4e00\u4e2a\u65b9\u5411\uff08\u6c34\u5e73\u6216\u5782\u76f4\uff09\u5bf9\u5143\u7d20\u8fdb\u884c\u5e03\u5c40\u3002\u4e3b\u8981\u7528\u4e8e\u6392\u5217\u4e00\u7ec4\u5143\u7d20\uff08\u901a\u5e38\u662f\u5728\u540c\u4e00\u4e2a\u8f74\u7ebf\u4e0a\uff09\uff0c\u5e76\u8ba9\u5b83\u4eec\u5728\u7236\u5bb9\u5668\u4e2d\u8fdb\u884c\u7075\u6d3b\u7684\u4f38\u7f29\u548c\u5bf9\u9f50\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f51\u683c\u5e03\u5c40\uff08Grid\uff09"}),"\uff1aGrid \u662f\u4e00\u79cd\u7528\u4e8e\u4e8c\u7ef4\u5e03\u5c40\u7684\u5e03\u5c40\u6a21\u578b\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u540c\u65f6\u5bf9\u5143\u7d20\u8fdb\u884c\u5e03\u5c40\u3002\u4e3b\u8981\u7528\u4e8e\u521b\u5efa\u590d\u6742\u7684\u7f51\u683c\u7ed3\u6784\uff0c\u4f7f\u5f97\u7f51\u9875\u5e03\u5c40\u66f4\u52a0\u7075\u6d3b\u548c\u7cbe\u786e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff08Responsive Design\uff09"}),"\uff1aCSS \u53ef\u4ee5\u901a\u8fc7\u5a92\u4f53\u67e5\u8be2\u548c\u5176\u4ed6\u6280\u672f\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff0c\u4f7f\u7f51\u9875\u53ef\u4ee5\u9002\u5e94\u4e0d\u540c\u5c3a\u5bf8\u548c\u8bbe\u5907\u7684\u5c4f\u5e55\uff0c\u5e76\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"\u9009\u62e9\u4f7f\u7528 Flexbox \u8fd8\u662f Grid\uff1f",type:"tip",children:[(0,t.jsx)(n.p,{children:"\u4f7f\u7528 Flexbox\uff1a\u5f53\u5e03\u5c40\u662f\u4e00\u7ef4\u7684\uff0c\u5e76\u4e14\u5143\u7d20\u5728\u540c\u4e00\u4e2a\u8f74\u7ebf\u4e0a\u6392\u5217\u65f6\uff0cFlexbox \u662f\u4e00\u4e2a\u66f4\u597d\u7684\u9009\u62e9\uff0c\u4f8b\u5982\u5bfc\u822a\u83dc\u5355\u3001\u5de5\u5177\u680f\u7b49\u3002"}),(0,t.jsx)(n.p,{children:"\u4f7f\u7528 Grid\uff1a\u5f53\u5e03\u5c40\u9700\u8981\u4e8c\u7ef4\u7ed3\u6784\uff0c\u5e76\u4e14\u9700\u8981\u66f4\u7cbe\u786e\u5730\u63a7\u5236\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u65f6\uff0cGrid \u662f\u4e00\u4e2a\u66f4\u597d\u7684\u9009\u62e9\uff0c\u4f8b\u5982\u7f51\u9875\u4e3b\u4f53\u5e03\u5c40\u3001\u590d\u6742\u7684\u8868\u683c\u7b49\u3002"})]}),"\n",(0,t.jsx)(n.h2,{id:"html-\u5982\u4f55\u4f7f\u7528css",children:"HTML \u5982\u4f55\u4f7f\u7528CSS"}),"\n",(0,t.jsx)(n.h3,{id:"\u5185\u8054\u6837\u5f0finline-styles",children:"\u5185\u8054\u6837\u5f0f\uff08Inline Styles\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["\u76f4\u63a5\u5728 HTML \u5143\u7d20\u7684 ",(0,t.jsx)(n.code,{children:"style"})," \u5c5e\u6027\u4e2d\u6307\u5b9a CSS \u6837\u5f0f\u3002\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5c06\u6837\u5f0f\u4e0e\u5143\u7d20\u76f4\u63a5\u7ed1\u5b9a\uff0c\u9002\u7528\u4e8e\u5355\u4e2a\u5143\u7d20\u6216\u7279\u5b9a\u6837\u5f0f\u4e0d\u4f1a\u5728\u5176\u4ed6\u5730\u65b9\u91cd\u590d\u4f7f\u7528\u7684\u60c5\u51b5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7528 VS Code\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"html_css_basic/index.html"}),"\u7684 HTML \u6587\u4ef6\u4ee3\u7801\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title> \u6848\u4f8b01 </title>\n  </head>\n\n  <body>\n    <p style="color: red; font-size: 16px;">\u8fd9\u662f\u4e00\u6bb5\u7ea2\u8272\u7684\u6587\u672c\u3002</p>\n  </body>\n<html>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5185\u90e8\u6837\u5f0f\u8868internal-style-sheet",children:"\u5185\u90e8\u6837\u5f0f\u8868\uff08Internal Style Sheet\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 HTML \u6587\u4ef6\u7684 ",(0,t.jsx)(n.code,{children:"<head>"})," \u6807\u7b7e\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"<style>"})," \u6807\u7b7e\u5b9a\u4e49 CSS \u6837\u5f0f\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u5355\u4e2a HTML \u6587\u4ef6\u6216\u9875\u9762\uff0c\u4f46\u6837\u5f0f\u53ef\u4ee5\u5728\u591a\u4e2a\u5143\u7d20\u4e2d\u5171\u4eab\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7528 VS Code\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"html_css_basic/index.html"}),"\u7684 HTML \u6587\u4ef6\u4ee3\u7801\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title> \u6848\u4f8b01 </title>\n    <style>\n        p {\n            color: blue;\n            font-size: 14px;\n        }\n    </style>\n  </head>\n\n  <body>\n    <p>\u8fd9\u662f\u4e00\u6bb5\u84dd\u8272\u7684\u6587\u672c\u3002</p>\n  </body>\n<html>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5916\u90e8\u6837\u5f0f\u8868external-style-sheet",children:"\u5916\u90e8\u6837\u5f0f\u8868\uff08External Style Sheet\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06 CSS \u6837\u5f0f\u5355\u72ec\u5b58\u50a8\u5728\u4e00\u4e2a\u6216\u591a\u4e2a\u5916\u90e8 ",(0,t.jsx)(n.code,{children:".css"})," \u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u5728 HTML \u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"<link>"})," \u6807\u7b7e\u5f15\u5165\u3002\n\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u591a\u4e2a HTML \u6587\u4ef6\u5171\u4eab\u76f8\u540c\u6837\u5f0f\u7684\u60c5\u51b5\uff0c\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u590d\u7528\u6027\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6",(0,t.jsx)(n.code,{children:"html_css_basic/style.css"}),"\uff0c\u8bf7\u7528VS Code\u7ed9\u8be5\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:"p {\n    color: green;\n    font-size: 18px;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7528 VS Code\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"html_css_basic/index.html"}),"\u7684 HTML \u6587\u4ef6\u4ee3\u7801\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title> \u6848\u4f8b01 </title>\n    <link rel="stylesheet" href="styles.css">   \n  </head>\n\n  <body>\n    <p>\u8fd9\u662f\u4e00\u6bb5\u6837\u5f0f\u6765\u81ea\u5916\u90e8\u6837\u5f0f\u8868\u7684\u6587\u672c\u3002</p>\n  </body>\n<html>\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71377:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(79474);const i={},l=t.createContext(i);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);