(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(75),n(76),n(8)),s=n.n(i),l=n(12),u=n(32),d=n(116),j=n(118),h=n(119),b=n(43),f=n(121),p=n(120),x=n(52),g=n.n(x),m=n(3),v=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"}}}));function O(){var e=v();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(j.a,{position:"static",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(m.jsx)(g.a,{})}),Object(m.jsx)(b.a,{variant:"h6",className:e.title,children:"qNote"}),Object(m.jsx)(f.a,{color:"inherit",children:"Login"})]})})})}var w=n(128),N=n(60),k=Object(N.a)("qnotes",1,{upgrade:function(e){return Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.createObjectStore("notes",{keyPath:"id",autoIncrement:!0}).createIndex("date","date");case 2:case"end":return t.stop()}}),t)})))()}});function y(e){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return e.abrupt("return",e.sent.add("notes",t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return W.apply(this,arguments)}function W(){return(W=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return e.abrupt("return",e.sent.getAll("notes"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}k.catch((function(e){console.log({e:e})}));var A=n(53),F=n.n(A),I=n(122),B=n(123),L=n(124),P=n(125),T=n(131),q=n(42),E=n(55),G=n.n(E),R=n(56),U=n.n(R),D=n(54),J=n.n(D),M=Object(d.a)((function(e){return{root:{marginBottom:e.spacing.unit,textAlign:"left"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:q.a[500]}}}));function V(e){var t=e.note,n=M();return Object(m.jsxs)(I.a,{className:n.root,children:[Object(m.jsx)(B.a,{avatar:Object(m.jsx)(T.a,{"aria-label":"recipe",className:n.avatar,children:"R"}),action:Object(m.jsx)(p.a,{"aria-label":"settings",children:Object(m.jsx)(J.a,{})}),title:"Guest",subheader:F()(t.date).from()}),Object(m.jsx)(L.a,{children:Object(m.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:t.body})}),Object(m.jsxs)(P.a,{disableSpacing:!0,children:[Object(m.jsx)(p.a,{"aria-label":"add to favorites",children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(p.a,{"aria-label":"share",children:Object(m.jsx)(U.a,{})})]})]})}var $=n(59),z=n.n($),H=n(127),K=n(58),Q=n.n(K),X=n(130),Y=n(129),Z=n(126),_=n(57),ee=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},title:{flexGrow:"1"},dialogAppbar:{width:"100%"},addNotesForm:{minWidth:"600px"},inputWrapper:{margin:e.spacing(2)},addNotesInput:{border:"none",borderRadius:"0","&:hover":{backgroundColor:"#fff"},"&:focus":{border:"none"}},newNoteFab:{position:"fixed",bottom:"20px",right:"20px"}}}));function te(e){var t=ee(),n=r.a.useState(!1),a=Object(u.a)(n,2),o=a[0],c=a[1],i=Object(_.a)(),d=Object(Z.a)(i.breakpoints.down("sm")),x=function(){c(!1)},g=r.a.useState(""),v=Object(u.a)(g,2),O=v[0],N=v[1],k=function(){var t=Object(l.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),y({body:O,date:Date.now()}).then((function(){console.log("It worked!")})).catch((function(e){return console.log("It failed!",e)})),e.refresh(),c(!1),N("");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(H.a,{color:"primary","aria-label":"add",onClick:function(){c(!0)},children:Object(m.jsx)(Q.a,{})}),Object(m.jsx)(Y.a,{className:t.dialog,maxWidth:"sm",fullScreen:d,open:o,onClose:x,"aria-labelledby":"responsive-dialog-title",children:Object(m.jsxs)("form",{className:t.addNotesForm,noValidate:!0,autoComplete:"off",onSubmit:k,children:[Object(m.jsx)(j.a,{className:t.dialogAppbar,position:"static",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(p.a,{onClick:x,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(m.jsx)(z.a,{})}),Object(m.jsx)(b.a,{variant:"h6",className:t.title,children:"New Note"}),Object(m.jsx)(f.a,{type:"submit",color:"inherit",children:"Save"})]})}),Object(m.jsx)(w.a,{container:!0,children:Object(m.jsx)(w.a,{item:!0,xs:12,children:Object(m.jsx)("div",{className:t.inputWrapper,children:Object(m.jsx)(X.a,{id:"outlined-basic",className:t.addNotesInput,label:"",placeholder:"Start your note...",variant:"standard",multiline:!0,rows:4,fullWidth:!0,disableUnderline:!0,value:O,onChange:function(e){N(e.target.value)}})})})})]})})]})}var ne=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},pageContent:{paddingTop:e.spacing.unit},newNoteFab:{position:"fixed",bottom:"20px",right:"20px"}}}));function ae(){var e=ne(),t=r.a.useState(),n=Object(u.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:(t=e.sent)&&(console.log("saturating data",t),c(t)),t||console.log("no result");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().then((function(e){c(e)})).catch((function(e){console.log(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"homePage",children:[Object(m.jsx)(O,{}),Object(m.jsx)(w.a,{container:!0,justify:"center",className:e.pageContent,children:Object(m.jsx)(w.a,{item:!0,xs:12,md:6,children:o&&Object(m.jsx)("div",{children:0===o.length?Object(m.jsx)("p",{children:"No Note"}):Object(m.jsx)("div",{children:o.slice(0).reverse().map((function(e,t){return Object(m.jsx)(V,{note:e},t)}))})})})}),Object(m.jsx)("div",{className:e.newNoteFab,children:Object(m.jsx)(te,{refresh:i})})]})}var re=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(ae,{})})},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(re,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/qnote",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/qnote","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ce(t,e)}))}}(),ie()}},[[85,1,2]]]);
//# sourceMappingURL=main.14ad7269.chunk.js.map