(this["webpackJsonpherpa-tracker"]=this["webpackJsonpherpa-tracker"]||[]).push([[0],{41:function(e,a,t){e.exports={bigblue:"navbar_bigblue__1MGOu",topnav:"navbar_topnav__2Z-zD"}},67:function(e,a,t){e.exports=t(92)},72:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=t(19),i=(t(72),t(7)),m=t(111),s=t(10);t(76),t(77),t(78);var u=function(e){return r.a.createElement("div",{className:"card col-sm-12"},r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{className:"edit-btn btn",href:"/"},r.a.createElement("i",{className:"fas fa-edit"})),r.a.createElement("h5",{className:"card-title"},e.petName),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement("a",{href:"/",className:"btn btn-primary"},"click - modal pop-up???")))},d=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading"}))},E=function(e){return r.a.createElement("div",{className:"App container-fluid"},e.children)},p=t(116),f=t(114),b=t(41),v=t.n(b),g=t(110),h=function(){var e=Object(s.b)().loginWithRedirect;return r.a.createElement(g.a,{onClick:function(){return e()},varient:"primary",className:"btn-margin"},"Log In")},N=function(){var e=Object(s.b)().logout;return r.a.createElement(g.a,{onClick:function(){return e({returnTo:window.location.origin})},variant:"danger",className:"btn-margin"},"Log Out")},_=function(){return r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{as:o.b,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home"),r.a.createElement(p.a.Link,{as:o.b,to:"/profile",exact:!0,activeClassName:"router-link-exact-active"},"Profile"))},O=function(){var e=Object(s.b)().isAuthenticated;return r.a.createElement(p.a,{className:"justify-content-end"},e?r.a.createElement(N,null):r.a.createElement(h,null))},k=function(){return r.a.createElement(f.a,{bg:"light",expand:"md",className:v.a.topnav},r.a.createElement(m.a,{className:"d-flex justify-content-start"+v.a.topnav,fluid:!0},r.a.createElement(f.a.Brand,{as:o.b,className:"logo",to:"/"},r.a.createElement("img",{src:"./placeholder-logo.svg",width:"100",height:"100",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),r.a.createElement("h1",{className:v.a.bigblue},"Herp-Tracker"),r.a.createElement(_,null),r.a.createElement(O,null)))},T=t(117),S=t(62),C=t(63);T.a.registerLanguage("json",S.a);var w=function(e){var a=e.children;return r.a.createElement(T.a,{language:"json",style:C.a},a)},x=t(64),j=t(65),D=t(115),y=t(45),A=t.n(y),L=function(e){var a=Object(n.useState)([{name:"Zelda"},{name:"Ted"},{name:"Gimli"},{name:"Dharma"},{name:"Bun-Bun"}]),t=Object(j.a)(a,2),l=t[0],c=t[1],o=function(e){e.preventDefault(),console.log("plus button clicked");var a=Object(x.a)(l);a.push({name:"Snek"}),c(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"pet-container",fluid:!0},r.a.createElement("div",{className:"card"},r.a.createElement("p",null,"Add new pet"),r.a.createElement("a",{href:"/",className:"btn",onClick:o},r.a.createElement("i",{className:"fas fa-plus fa-4x"}))),l.map((function(e,a){return r.a.createElement(u,{petName:e.name,key:a})})),r.a.createElement(D.a,{color:"secondary","aria-label":"add",onClick:o},r.a.createElement(A.a,null)),r.a.createElement(g.a,{className:"my-float-button",variant:"warning"},r.a.createElement(A.a,null))))},P=t(112),R=t(113),W=function(){var e=Object(s.b)().user,a=e.name,t=e.picture,n=e.email;return r.a.createElement(m.a,{className:"mb-5"},r.a.createElement(P.a,{className:"align-items-center profile-header mb-5 text-center text-md-left"},r.a.createElement(R.a,{md:2},r.a.createElement("img",{src:t,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement(R.a,{md:!0},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"lead text-muted"},n))),r.a.createElement(P.a,null,r.a.createElement(w,null,JSON.stringify(e,null,2))))};var B=function(){return Object(s.b)().isLoading?r.a.createElement(d,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(E,null,r.a.createElement(m.a,{className:""},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:L}),r.a.createElement(i.a,{path:"/profile",exact:!0,component:W})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){var a=e.children,t=Object({NODE_ENV:"production",PUBLIC_URL:"/herp-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_DOMAIN,n=Object({NODE_ENV:"production",PUBLIC_URL:"/herp-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_CLIENT_ID,l=Object(i.f)();return r.a.createElement(s.a,{domain:t,clientId:n,redirectUri:window.location.origin,onRedirectCallback:function(e){l.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},a)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(H,null,r.a.createElement(B,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,225,226]]]);
//# sourceMappingURL=main.f90566ba.chunk.js.map