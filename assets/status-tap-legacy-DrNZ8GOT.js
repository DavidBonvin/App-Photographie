System.register(["./ionic-legacy-B0Vtf4Oh.js","./vendor-legacy-DlWHlmu-.js","./router-legacy-B1dQCoL3.js"],function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.W,r=e.X,s=e.Y,o=e.Z,i=e.$},null,null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",()=>{const e=window;e.addEventListener("statusTap",()=>{n(()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=r(a);c&&new Promise(e=>s(c,e)).then(()=>{o(async()=>{c.style.setProperty("--overflow","hidden"),await i(c,300),c.style.removeProperty("--overflow")})})})})})}}});
