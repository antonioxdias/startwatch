(this.webpackJsonpstartwatch=this.webpackJsonpstartwatch||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(6),u=n.n(i),l=(n(13),n(1));!function(e){e.Two="2x2x2",e.Three="3x3x3",e.Four="4x4x4",e.Five="5x5x5",e.Six="6x6x6",e.Seven="7x7x7",e.Clock="Clock",e.Mega="Megaminx",e.Pyra="Pyraminx",e.SQ1="Square-1",e.Skewb="Skewb"}(a||(a={}));var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("00"+e).slice(-t)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e,a=n%1e3,r=(n=(n-a)/1e3)%60,c=(n=(n-r)/60)%60;return t&&0===c?o(r)+"."+o(a,3):o(c)+":"+o(r)+"."+o(a,3)},m=n(4),f=function(e){var t=localStorage.getItem(e);return t?t.split(";").map((function(e){return parseInt(e)})):[]},b=function(e,t){if(e.length<t)return null;var n=e.slice(e.length-t),a=n.indexOf(Math.max.apply(Math,Object(m.a)(n)));n.splice(a,1);var r=n.indexOf(Math.min.apply(Math,Object(m.a)(n)));return n.splice(r,1),n.reduce((function(e,t){return e+t}))/(t-2)},d=function(e){return e.length?e.reduce((function(e,t){return e+t}))/e.length:null},p=function(e){return{of5:b(e,5),of12:b(e,12),of100:b(e,100),allTime:d(e)}},v=function(e){var t=Object(r.useState)(f(e)||[]),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(p(a)),u=Object(l.a)(i,2),o=u[0],s=u[1];return Object(r.useEffect)((function(){return c(f(e))}),[e]),Object(r.useEffect)((function(){return function(e,t){localStorage.setItem(e,t.join(";"))}(e,a)}),[a,e]),Object(r.useEffect)((function(){return s(p(a))}),[a]),{times:a,addTime:function(e){return c((function(t){return[].concat(Object(m.a)(t),[e])}))},clearTimes:function(){return c([])},average:o}},g=n(7),y=new(n.n(g).a),k=function(e,t){var n=Object(r.useState)(y.get(1)),c=Object(l.a)(n,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){!function(e,t){switch(t){case a.Two:e.type("222");break;case a.Three:e.type("333");break;case a.Four:e.type("444");break;case a.Five:e.type("555");break;case a.Six:e.type("666");break;case a.Seven:e.type("777");break;case a.Clock:e.type("clock");break;case a.Mega:e.type("minx");break;case a.Pyra:e.type("pyram");break;case a.SQ1:e.type("sq1");break;case a.Skewb:e.type("skewb")}}(y,e),u(y.get(1))}),[e]),Object(r.useEffect)((function(){return u(y.get(1))}),[t]),{scramble:i}},h=function(e){var t=e.timeoutRunning,n=e.canStart,a=e.isActive,r="transparent",i="transparent";return n||!t||a||(r="darkred",i="red"),n&&t&&!a&&(r="limegreen",i="green"),c.a.createElement("div",{style:{height:"2rem",width:"2rem",margin:"1rem",backgroundColor:r,borderRadius:"50%",border:"solid 2px ".concat(i)}})},E=function(e){var t=e.saveTime,n=Object(r.useState)(null),a=Object(l.a)(n,2),i=a[0],u=a[1],o=Object(r.useState)(0),m=Object(l.a)(o,2),f=m[0],b=m[1],d=Object(r.useState)(!1),p=Object(l.a)(d,2),v=p[0],g=p[1],y=Object(r.useState)(!1),k=Object(l.a)(y,2),E=k[0],O=k[1],j=Object(r.useState)(!1),x=Object(l.a)(j,2),S=x[0],w=x[1],T=Object(r.useCallback)((function(e){w(!1),O(!1),t(e)}),[t]),C=Object(r.useCallback)((function(e){S&&T(e),b(0)}),[S,T]);return Object(r.useEffect)((function(){if(S&&i&&f>=36e5&&(clearInterval(i),u(null),T(f)),S&&!i&&0===f){var e=Date.now();u(setInterval((function(){return b(Date.now()-e)}),1))}else!S&&0!==f&&i&&(clearInterval(i),u(null));return function(){i&&!S&&(clearInterval(i),u(null))}}),[S,T,i,f]),Object(r.useEffect)((function(){var e=null,t=function(t){32!==t.keyCode||v||S||(O(!1),g(!0),e=setTimeout((function(){O(!0)}),1e3)),82===t.keyCode&&C(f)},n=function(t){32===t.keyCode&&(g(!1),e&&clearTimeout(e),S&&0!==f&&T(f),!S&&E&&(b(0),w(!0)))};return document.addEventListener("keydown",t),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",t),document.removeEventListener("keyup",n)}}),[v,E,S,f,C,T]),c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement(h,{timeoutRunning:v,canStart:E,isActive:S}),c.a.createElement("h1",{style:{color:"wheat",fontSize:"min(calc(100vw * 0.15), 140px)",fontFamily:"monospace, monospace",letterSpacing:"-0.5rem",margin:0}},s(f)),c.a.createElement(h,{timeoutRunning:v,canStart:E,isActive:S}))},O=function(e){var t=e.times;return c.a.createElement("div",{style:{margin:"0 1rem",padding:"1rem",border:"solid 1px wheat",borderRadius:"8px",overflow:"hidden auto"}},c.a.createElement("ol",{style:{display:"flex",flexDirection:"column",margin:0,width:320,maxHeight:338}},t.map((function(e,t){return c.a.createElement("li",{key:t,style:{fontFamily:"monospace, monospace"}},s(e,!0))}))))};var j=function(){var e=Object(r.useState)(a.Three),t=Object(l.a)(e,2),n=t[0],i=t[1],u=v(n),o=u.times,m=u.addTime,f=u.clearTimes,b=u.average,d=k(n,o).scramble;return c.a.createElement("main",{style:{display:"grid",gridTemplateRows:"120px 30% 1fr",placeItems:"center",backgroundColor:"#282c34",height:"100vh",fontSize:"calc(10px + 2vmin)",color:"white"}},c.a.createElement("div",null,c.a.createElement("select",{value:n,onChange:function(e){return i(e.target.value)}},Object.values(a).map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))),c.a.createElement("p",null,d)),c.a.createElement(E,{saveTime:m}),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(O,{times:o}),c.a.createElement("div",null,c.a.createElement("p",null,"avg5: ",b.of5?s(b.of5):"---"),c.a.createElement("p",null,"avg12: ",b.of12?s(b.of12):"---"),c.a.createElement("button",{onClick:f},"clear times"))))};u.a.render(c.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(21)}},[[8,1,2]]]);
//# sourceMappingURL=main.c31502fa.chunk.js.map