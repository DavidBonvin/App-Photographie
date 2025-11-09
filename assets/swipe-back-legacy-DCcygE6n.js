System.register(["./ionic-legacy-B0Vtf4Oh.js","./vendor-legacy-DlWHlmu-.js","./router-legacy-B1dQCoL3.js"],function(e,t){"use strict";var n,r,o;return{setters:[e=>{n=e.R,r=e.S,o=e.T},null,null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("createSwipeBackGesture",(e,t,s,c,i)=>{const a=e.ownerDocument.defaultView;let l=n(e);const u=e=>l?-e.deltaX:e.deltaX;return r({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(e),(e=>{const{startX:t}=e;return l?t>=a.innerWidth-50:t<=50})(r)&&t()),onStart:s,onMove:e=>{const t=u(e)/a.innerWidth;c(t)},onEnd:e=>{const t=u(e),n=a.innerWidth,r=t/n,s=(e=>l?-e.velocityX:e.velocityX)(e),c=s>=0&&(s>.2||t>n/2),d=(c?1-r:r)*n;let g=0;if(d>5){const e=d/Math.abs(s);g=Math.min(e,540)}i(c,r<=0?.01:o(0,r,.9999),g)}})})}}});
