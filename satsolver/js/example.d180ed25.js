(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["example"],{"152d":function(t,e,n){"use strict";n.r(e);var r=n("7af0"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"1b51":function(t,e,n){"use strict";n.r(e);var r=n("dc71"),a=n("31d3");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"31d3":function(t,e,n){"use strict";n.r(e);var r=n("b509"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"386d":function(t,e,n){"use strict";var r=n("cb7c"),a=n("83a1"),i=n("5f1b");n("214f")("search",1,function(t,e,n,u){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=u(n,t,this);if(e.done)return e.value;var o=r(t),s=String(this),f=o.lastIndex;a(f,0)||(o.lastIndex=0);var c=i(o,s);return a(o.lastIndex,f)||(o.lastIndex=f),null===c?-1:c.index}]})},"42c5":function(t,e,n){"use strict";n.r(e);var r=n("dc8b"),a=n("152d");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"60f6":function(t,e,n){"use strict";n.r(e);var r=n("8224"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"7af0":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("d225")),i=r(n("308d")),u=r(n("6bb5")),o=r(n("4e2b")),s=n("9ab4"),f=n("60a3"),c=r(n("1b51")),l=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,o.default)(e,t),e}(f.Vue);l=(0,s.__decorate)([(0,f.Component)({components:{SatSolver:c.default}})],l);var d=l;e.default=d},8224:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a=r(n("d225")),i=r(n("b0b4")),u=r(n("308d")),o=r(n("6bb5")),s=r(n("4e2b")),f=n("9ab4"),c=n("60a3"),l=r(n("0fc2")),d=r(n("c1fb")),v=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(0,o.default)(e).apply(this,arguments))}return(0,s.default)(e,t),(0,i.default)(e,[{key:"example",get:function(){var t=Number(this.$route.params.id)-1;return d.default[t]}},{key:"text",get:function(){return this.example.text}}]),e}(c.Vue);v=(0,f.__decorate)([(0,c.Component)({components:{SatSolver:l.default}})],v);var p=v;e.default=p},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),u=n("fdef"),o="["+u+"]",s="​",f=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var a={},o=i(function(){return!!u[t]()||s[t]()!=s}),f=a[t]=o?e(d):u[t];n&&(a[n]=f),r(r.P+r.F*o,"String",a)},d=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},b509:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("d225")),i=r(n("308d")),u=r(n("6bb5")),o=r(n("4e2b"));n("386d");var s=n("9ab4"),f=n("60a3"),c=r(n("0fc2"));function l(t){return t.search("\n")<0}var d=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,o.default)(e,t),e}(c.default);(0,s.__decorate)([(0,f.Prop)({type:String,required:!0,validator:l})],d.prototype,"initial",void 0),(0,s.__decorate)([(0,f.Prop)({type:String,required:!0})],d.prototype,"name",void 0),d=(0,s.__decorate)([f.Component],d);var v=d;e.default=v},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),u=n("5dbc"),o=n("6a99"),s=n("79e5"),f=n("9093").f,c=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,v="Number",p=r[v],b=p,_=p.prototype,m=i(n("2aeb")(_))==v,h="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():d(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var u,s=e.slice(2),f=0,c=s.length;f<c;f++)if(u=s.charCodeAt(f),u<48||u>a)return NaN;return parseInt(s,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(m?s(function(){_.valueOf.call(n)}):i(n)!=v)?u(new b(x(e)),n,p):x(e)};for(var I,g=n("9e1e")?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;g.length>N;N++)a(b,I=g[N])&&!a(p,I)&&l(p,I,c(b,I));p.prototype=_,_.constructor=p,n("2aba")(r,v,p)}},c6d1:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sat-solver",{attrs:{initial:t.text}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},dc71:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-col",{staticClass:"sat-solver-compact"},[n("p",{staticClass:"title"},[t._v(t._s(t.name))]),n("v-text-field",{attrs:{outlined:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t.error?n("p",{staticClass:"error--text"},[t._v(t._s(t.error))]):t._e(),n("v-list",[n("v-subheader",[t._v("滿足解")]),n("v-list-item-group",t._l(t.answers,function(e,r){return n("v-list-item",{key:e},[n("span",{staticClass:"mr-3"},[t._v("可能性"+t._s(r+1)+":")]),n("span",e?[t._v(t._s(e))]:[t._v("全偽")])])}),1)],1)],1)],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},dc8b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("p",{staticClass:"display-1"},[t._v("文法表")]),n("sat-solver",{attrs:{name:"變數",initial:"a"}}),n("sat-solver",{attrs:{name:"蘊涵 / a => b",initial:"a implies b"}}),n("sat-solver",{attrs:{name:"若且唯若 / a <=> b ",initial:"a iff b"}}),n("sat-solver",{attrs:{name:"邏輯(與)",initial:"a and b"}}),n("sat-solver",{attrs:{name:"邏輯(或)",initial:"a or b"}}),n("sat-solver",{attrs:{name:"邏輯(非)",initial:"not b"}}),n("sat-solver",{attrs:{name:"字函數",initial:"a and (b or c)"}}),n("sat-solver",{attrs:{name:"至少一個",initial:"at least 1 of { a, b, c }"}}),n("sat-solver",{attrs:{name:"最多一個",initial:"at most 1 of { a, b, c }"}}),n("sat-solver",{attrs:{name:"只有一個",initial:"only 1 of { a, b, c }"}})],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},f3c2:function(t,e,n){"use strict";n.r(e);var r=n("c6d1"),a=n("60f6");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=example.d180ed25.js.map