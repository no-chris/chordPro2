if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const l=e=>n(e,i),c={module:{uri:i},exports:r,require:l};s[i]=Promise.all(t.map((e=>c[e]||l(e)))).then((e=>(o(...e),r)))}}define(["./workbox-f6d27052"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D-AW_nO6.js",revision:null},{url:"assets/index-qH_J_xcx.css",revision:null},{url:"assets/logo-D2B3txiq.svg",revision:null},{url:"assets/vendor-BPGk5lTF.js",revision:null},{url:"assets/vendor-D780UWrd.css",revision:null},{url:"icon.svg",revision:"22be856a58b037f4d448a78f2fc6dee6"},{url:"index.html",revision:"bf24e591785efbfc7f3fe1697c3b13d0"},{url:"registerSW.js",revision:"6a7126f4909d378979bca200ff77879d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]}),"GET")}));
