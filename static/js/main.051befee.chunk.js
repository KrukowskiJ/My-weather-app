(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(58),s=a.n(r),i=a(51),o=a.n(i),j=a(152),d=a(17),l=a(105),b=a.n(l),h=a(12);var u=function(e){var t=e.data;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{children:["Current weather in  ",t.name]}),Object(h.jsxs)("h2",{children:["temperature: ",Object(h.jsxs)("strong",{class:"temp_number",children:[t.main&&t.main.temp,"\xb0C"]})]}),Object(h.jsxs)("h2",{children:["feels like: ",Object(h.jsxs)("strong",{class:"temp_number",children:[t.main&&t.main.feels_like,"\xb0C"]})]}),Object(h.jsxs)("h2",{children:["probably: ",Object(h.jsx)("strong",{class:"temp_number",children:t.weather&&t.weather[0].description})]})]})},m=a(337),p=a(338),O=a(342),f=a(167),x=a(168),g=a(68),v=a(65),w=a(170);var y=function(e){var t=e.data,a=new Date,n=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(a);return console.log(n),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"5 days forecast chart"}),Object(h.jsx)(m.a,{width:"100%",height:300,children:Object(h.jsxs)(p.a,{data:t.list,margin:{top:0,left:0,right:0,bottom:0},children:[Object(h.jsx)(O.a,{strokeDasharray:"15 30"}),Object(h.jsx)(f.a,{dataKey:"dt_txt"}),Object(h.jsx)(x.a,{width:25}),Object(h.jsx)(g.a,{}),Object(h.jsx)(v.a,{}),Object(h.jsx)(w.a,{name:t&&t.city.name+" temperature",type:"monotone",dataKey:"main.temp",stroke:"#8884d8",activeDot:{r:5},dot:{r:2}}),Object(h.jsx)(w.a,{name:t&&t.city.name+" feels like",type:"monotone",dataKey:"main.feels_like",stroke:"rgb(65, 176, 255)",activeDot:{r:5},dot:{r:2}})]})})]})};a(334);var k=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(d.a)(r,2),i=s[0],l=s[1],m=Object(n.useState)(0),p=Object(d.a)(m,2),O=p[0],f=p[1],x=Object(n.useState)(0),g=Object(d.a)(x,2),v=g[0],w=g[1],k=function(e){c(e.coords.latitude),l(e.coords.longitude)},C=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,window.navigator.geolocation.getCurrentPosition(k),e.next=4,b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(i,"&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric"));case 4:return t=e.sent,f(t.data),e.next=8,b.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(a,"&lon=").concat(i,"&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric"));case 8:n=e.sent,w(n.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C()}),[a,i]),Object(h.jsx)("div",{className:"main-component",children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{data:O}),Object(h.jsx)(y,{data:v})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,344)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[335,1,2]]]);
//# sourceMappingURL=main.051befee.chunk.js.map