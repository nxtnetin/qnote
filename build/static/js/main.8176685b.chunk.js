(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[0],{57:function(e,n,t){},58:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(10),c=t.n(r),a=(t(57),t(58),t(42)),s=t(102),l=t(105),u=t(107),d=t(109),h=t(110),f=t(108),g=t(41),j=t.n(g),v=t(9),b=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"}}}));function p(){var e=b();return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(l.a,{position:"static",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(v.jsx)(j.a,{})}),Object(v.jsx)(d.a,{variant:"h6",className:e.title,children:"qNote"}),Object(v.jsx)(h.a,{color:"inherit",children:"Login"})]})})})}var w=t(111),m=Object(s.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function x(){var e=m(),n=i.a.useState(""),t=Object(a.a)(n,2),o=t[0],r=t[1];return Object(v.jsxs)("div",{className:"homePage",children:[Object(v.jsx)(p,{}),Object(v.jsx)("h1",{children:"Hello World"}),Object(v.jsx)("h2",{children:"Start editing to see some magic happen!"}),Object(v.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),console.log({status:o}),r("")},children:[Object(v.jsx)(w.a,{id:"outlined-basic",label:"",placeholder:"Enter a log",variant:"outlined",fullWidth:!0,value:o,onChange:function(e){r(e.target.value)}}),Object(v.jsx)(h.a,{type:"submit",variant:"contained",children:"Log"})]}),Object(v.jsx)("div",{children:o})]})}var O=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(x,{})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/qnote",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/qnote","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(n,e)}))}}(),N()}},[[69,1,2]]]);
//# sourceMappingURL=main.8176685b.chunk.js.map