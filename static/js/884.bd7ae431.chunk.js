"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{1687:function(e,n,r){r.d(n,{Df:function(){return i},Pg:function(){return p},oW:function(){return o},tx:function(){return l},zv:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),u=r(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/";var s="1d9e78535f6a01dcc41594da81e379a7",i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/trending/all/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},2884:function(e,n,r){r.r(n);var t=r(5861),a=r(9439),c=r(7757),u=r.n(c),s=r(7689),i=r(2791),o=r(1087),p=r(1687),f=r(9014),l=r(9126),d=r(184);n.default=function(){var e,n,r=(0,s.UO)().id,c=(0,i.useState)([]),v=(0,a.Z)(c,2),h=v[0],x=v[1],g=(0,s.TH)();(0,i.useEffect)((function(){function e(){return(e=(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Pg)(r);case 3:n=e.sent,x(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.ZP.error("Oops! Something went wrong! Please try again.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var w=h.title,m=h.poster_path,j=h.vote_average,k=h.genres,y=h.overview,b=null!==(e=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.rU,{to:b,children:[(0,d.jsx)(l.i1r,{}),"Go back"]}),(0,d.jsx)("h1",{children:w}),(0,d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(m),alt:"Movie poster"}),(0,d.jsxs)("p",{children:["User Score: ",j]}),(0,d.jsxs)("p",{children:["Overview: ",y]}),(0,d.jsxs)("p",{children:["Genres: ",k&&k.map((function(e){return e.name})).join(", ")]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(s.j3,{})}),(0,d.jsx)(f.x7,{})]})}}}]);
//# sourceMappingURL=884.bd7ae431.chunk.js.map