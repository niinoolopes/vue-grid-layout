if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"p-vue2-grid-layout"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/793.3e0bb3b1.css",revision:null},{url:"css/916.d75ad1a2.css",revision:null},{url:"css/app.72b09c68.css",revision:null},{url:"css/chunk-vendors.ac3212ab.css",revision:null},{url:"fonts/bootstrap-icons.6fdf98f9.woff2",revision:null},{url:"fonts/bootstrap-icons.dba5e3b7.woff",revision:null},{url:"index.html",revision:"d6fe3965c16acdf7d1307e2b09f7dd16"},{url:"js/284.35f2f4f6.js",revision:null},{url:"js/59.ce91a53a.js",revision:null},{url:"js/629.b2904203.js",revision:null},{url:"js/649.886f2330.js",revision:null},{url:"js/670.afbad8fa.js",revision:null},{url:"js/793.70d38a2c.js",revision:null},{url:"js/860.527a9548.js",revision:null},{url:"js/903.44c8a9fd.js",revision:null},{url:"js/916.2907761a.js",revision:null},{url:"js/939.d6cc0d65.js",revision:null},{url:"js/about.14e4bc72.js",revision:null},{url:"js/app.0cac2837.js",revision:null},{url:"js/chunk-vendors.00fc37fa.js",revision:null},{url:"manifest.json",revision:"a983ea6169b23be83b6f4a07e3da4f08"},{url:"media/Double Helix (Sting) - Ethan Meixsell.ddfb0eea.mp3",revision:null},{url:"media/Thor's Hammer (Sting) - Ethan Meixsell.1c07d983.mp3",revision:null},{url:"media/dinner-chimes-the-u.s.-marine-corps-band.e1337098.mp3",revision:null},{url:"media/granite-(sting)-ethan-meixsell.985da42f.mp3",revision:null},{url:"media/into-the-depths-(sting)-jingle-punks.e1d32fdc.mp3",revision:null},{url:"media/leslies-strut-(sting)-john-deley-and-the-41-Players.0977b395.mp3",revision:null},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
