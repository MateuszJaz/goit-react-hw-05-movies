"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{68:function(t,e,n){n.d(e,{$L:function(){return o},Hx:function(){return f},Y5:function(){return s},h6:function(){return h},xc:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="338552ddf479699ffa2d32656eaccc70",o=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},597:function(t,e,n){n.r(e);var r=n(439),a=n(689),c=n(791),u=n(68),i=n(184);e.default=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)(""),n=(0,r.Z)(e,2),o=n[0],s=n[1],p=(0,c.useState)(null),f=(0,r.Z)(p,2),h=f[0],d=f[1];return(0,c.useEffect)((function(){(0,u.xc)(t).then((function(t){return s(t.data.cast)})).catch((function(t){return d(t.message)}))}),[t]),(0,i.jsx)(i.Fragment,{children:o&&!h?(0,i.jsx)("ul",{children:o.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/100px-Placeholder_no_text.svg.png",width:100,alt:n}),(0,i.jsx)("h4",{children:n}),(0,i.jsxs)("p",{children:["as: ",r]})]},e)}))}):(0,i.jsx)("p",{children:h})})}}}]);
//# sourceMappingURL=597.18fe5f13.chunk.js.map