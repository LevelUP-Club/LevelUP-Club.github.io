(this.webpackJsonpLevelUP=this.webpackJsonpLevelUP||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/logolevelup.8599e532.png"},62:function(e,a,t){e.exports=t(97)},67:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),i=t.n(l),c=(t(67),t(40)),s=t(6),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Level UP",middleName:"",lastName:"",message:" Let's level UP together ",icons:[{image:"fa-github",url:"#"},{image:"fa-facebook",url:"#"},{image:"fa-instagram",url:"#"},{image:"fa-twitter",url:"#"}]},u={show:!0,heading:"About US",imageLink:t(38),imageSize:375,message:"club presentation "},d={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:t(38),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:t(38),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},f=!0,g="Get In Touch",b="",p="",h=t(56),v=t.n(h),E=t(20),w=t(31),N=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,i=e.icons;return r.a.createElement(w.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(E.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(v.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},i.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),y=t(13),k=t.n(y),x=t(21),L=t(9),P=t(18),S=t.n(P),j=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),z=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,i=r.a.useState(""),c=Object(L.a)(i,2),s=c[0],o=c[1],m=r.a.useState(Boolean(n)),u=Object(L.a)(m,2),d=u[0],f=u[1];r.a.useEffect((function(){n&&!j.test(n)?g():o(n)}),[n]);var g=function(){var e=Object(x.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,S.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,o(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),f(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},d&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:s,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(d?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t)))))},C=(t(57),t(61),t(59),t(58),t(30),t(25),function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(E.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/LevelUP-Club/","aria-label":"My GitHub"},"Level UP")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source. Feel free to fork and make your own version."))))}),O="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,R="undefined"!==typeof window;function U(e){var a=e.element,t=e.useWindow;if(!R)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function _(e,a,t,r,l){var i=Object(n.useRef)(U({useWindow:r})),c=null,s=function(){var a=U({element:t,useWindow:r});e({prevPos:i.current,currPos:a}),i.current=a,c=null};O((function(){if(R){var e=function(){l?null===c&&(c=setTimeout(s,l)):s()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),c&&clearTimeout(c)}}}),a)}_.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var I=function(e){var a=r.a.useState(null),t=Object(L.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},T=t(29),W=t(43),A=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(L.a)(t,2),i=l[0],c=l[1],s=Object(n.useState)(0),o=Object(L.a)(s,2),d=o[0],f=o[1],g=r.a.useRef(),b=I(g),p=b?b.bottom:0;return _((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?c(!0):c(!1),f(t.y))}),[p]),r.a.useEffect((function(){b&&(p-d>=a.current.offsetTop?c(!1):c(!0))}),[p,b,a,d]),r.a.createElement(T.a,{ref:g,className:" fixed-top  ".concat(i?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(T.a.Brand,{className:"brand",href:"/LevelUP-Club.github.io/#home"},"<".concat(m.firstName," />")),r.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(T.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(W.a,{className:"mr-auto"},u.show&&r.a.createElement(W.a.Link,{className:"nav-link lead",href:"/LevelUP-Club.github.io/#aboutme"},"About"))))})),B=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},F=t(36),q=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(F.a,null,n.map((function(e,a){return r.a.createElement(F.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(F.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},M=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(z,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),d.show&&r.a.createElement(q,{heading:d.heading,message:d.message,img:d.images,imageSize:d.imageSize}))})),G=function(){var e=r.a.useRef();return r.a.createElement(c.a,{basename:"/LevelUP-Club.github.io/"},o&&r.a.createElement(A,{ref:e}),r.a.createElement(s.a,{path:"/",exact:!0,component:function(){return r.a.createElement(M,{ref:e})}}),r.a.createElement(C,null,f&&r.a.createElement(B,{heading:g,message:b,email:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.62696d52.chunk.js.map