(this["webpackJsonpricky-and-morty"]=this["webpackJsonpricky-and-morty"]||[]).push([[0],{68:function(e,a,t){e.exports=t.p+"static/media/Cartoon_Network_1992_logo.3c26307a.svg"},83:function(e,a,t){e.exports=t(99)},88:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),l=(t(88),t(89),t(90),t(14)),i=t(20),s=t.n(i),u=t(37);function m(){return(m=Object(u.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,n=t.info,e.abrupt("return",n.count);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(a));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/");case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/?name=".concat(encodeURIComponent(a)));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark((function e(a,t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://rickandmortyapi.com/api/character/?",a&&(n+="gender=".concat(encodeURIComponent(a),"&")),t&&(n+="species=".concat(encodeURIComponent(t),"&")),e.next=5,fetch(n);case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={filterCharacters:function(e,a){return h.apply(this,arguments)},getCharactersByName:function(e){return d.apply(this,arguments)},getCharacterCount:function(){return m.apply(this,arguments)},getCharacterById:function(e){return p.apply(this,arguments)},getAllCharacters:function(){return f.apply(this,arguments)}},g=function(e){var a=e.content,t=a.id,c=a.name,o=a.image,i=Object(n.useState)({}),s=Object(l.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",{key:t,id:t,className:"Card",onClick:function(e){return function(e){E.getCharacterById(e).then((function(e){m(e),console.log(u)}))}(t)}},r.a.createElement("div",{className:"Card-image"},r.a.createElement("figure",null,r.a.createElement("img",{src:o,alt:c}))),r.a.createElement("div",{className:"Card-description"},r.a.createElement("div",{className:"Card-name"},r.a.createElement("h3",null,c))))},v=function(e){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"Cards-container"},e.characters.map((function(e,a){return r.a.createElement(g,{key:a,content:e})})))))},b=(t(92),t(149)),y=t(150),w=t(148),k=t(70),C=t(71),j=t(68),N=t.n(j),x=function(e){var a=Object(n.useState)(void 0),t=Object(l.a)(a,2),c=(t[0],t[1],r.a.createRef());return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{style:O.NavbarContainer,bg:"dark",variant:"dark"},r.a.createElement(b.a.Brand,{href:"#home"},r.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"})),r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{className:"App-link",href:"https://rickandmortyapi.com/",target:"_blank",rel:"noopener noreferrer"},"Rick & Morty character catalog 20 of ",e.count," showing."),r.a.createElement(y.a.Link,{className:"resetbtn",href:"#features",onClick:e.resetAll},"Reset")),r.a.createElement(w.a,{inline:!0,onSubmit:function(){e.filterByName(c.current.value),console.log("yes Im coming",c.current.value)}},r.a.createElement(k.a,{type:"text",placeholder:"Search by name",className:"mr-sm-2",ref:c}),r.a.createElement(C.a,{variant:"outline-info"},"Search"))),r.a.createElement("br",null))},O={NavbarContainer:{width:"100%"}},S=t(135),I=t(154),B=t(146),A=t(139),F=t(137),R=t(140),H=t(141),_=t(143),L=t(142),M=t(152),U=t(153),z=t(151),G=t(144),J=t(147),K=t(145),P=t(61),W=Object(S.a)((function(e){return Object(I.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"#343a40 !important"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto",marginLeft:"24px"},content:{flexGrow:1,padding:e.spacing(3)}})}));var D=function(){var e=W(),a=Object(n.useState)(0),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),d=(f[0],f[1]);Object(n.useEffect)((function(){E.getAllCharacters().then((function(e){var a=e.info,t=e.results;o(a.count),m(t),d(!1)})).catch((function(e){o(0),m([]),d(!0),console.log(e)}))}),[]);var h=r.a.useState(""),g=Object(l.a)(h,2),b=g[0],y=g[1],w=r.a.useState(""),k=Object(l.a)(w,2),C=k[0],j=k[1];Object(n.useEffect)((function(){N()}),[C,b]);var N=function(){E.filterCharacters(b,C).then((function(e){var a=e.info,t=e.results;o(a.count),m(t),d(!1)})).catch((function(e){o(0),m([]),d(!0),console.log(e)}))};return r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.a.createElement(F.a,null),r.a.createElement(A.a,{position:"fixed",className:e.appBar},r.a.createElement(x,{count:c,filterByName:function(e){E.getCharactersByName(e).then((function(e){var a=e.info,t=e.results;d(!1),t&&t.length?m(t):m([]),o(a.count)})).catch((function(){o(0),m([]),d(!0)}))},resetAll:function(){E.getAllCharacters().then((function(e){var a=e.info,t=e.results;o(a.count),m(t),d(!1)})).catch((function(e){o(0),m([]),d(!0),console.log(e)})),y(""),j("")}})),r.a.createElement(B.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement(R.a,null),r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(H.a,null,r.a.createElement(L.a,{primary:"Filters"})),r.a.createElement(_.a,null),r.a.createElement(H.a,null,r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(U.a,{component:"legend"},"Species"),r.a.createElement(z.a,{"aria-label":"gender",name:"gender1",value:C,onChange:function(e){j(e.target.value)}},r.a.createElement(G.a,{value:"Human",control:r.a.createElement(J.a,null),label:"Human"}),r.a.createElement(G.a,{value:"Humanoid",control:r.a.createElement(J.a,null),label:"Humanoid"})))),r.a.createElement(_.a,null),r.a.createElement(H.a,null,r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(U.a,{component:"legend"},"Gender"),r.a.createElement(z.a,{"aria-label":"gender",name:"gender1",value:b,onChange:function(e){y(e.target.value)}},r.a.createElement(G.a,{value:"female",control:r.a.createElement(J.a,null),label:"Female"}),r.a.createElement(G.a,{value:"male",control:r.a.createElement(J.a,null),label:"Male"}),r.a.createElement(G.a,{value:"unknown",control:r.a.createElement(J.a,null),label:"unknown"})))))),r.a.createElement("main",{className:e.content+" App-container"},r.a.createElement(R.a,null),r.a.createElement(K.a,{id:"dropdown-basic-button",title:"Filter by Id",onSelect:function(e){console.log(e);var a=a=u.slice();switch(e){case"ascending":a.sort((function(e,a){return parseFloat(e.id)-parseFloat(a.id)}));break;case"descending":a.sort((function(e,a){return parseFloat(a.id)-parseFloat(e.id)}))}m(a)}},r.a.createElement(P.a.Item,{eventKey:"ascending"},"Ascending"),r.a.createElement(P.a.Item,{eventKey:"descending"},"Descending")),r.a.createElement(v,{characters:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.6e50a5cf.chunk.js.map