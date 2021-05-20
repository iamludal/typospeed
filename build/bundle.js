!function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function a(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=u(e,n,r,c);t.p(o,i)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const $="undefined"!=typeof window;let d=$?()=>window.performance.now():()=>Date.now(),m=$?t=>requestAnimationFrame(t):t;const p=new Set;function g(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&m(g)}function h(t){let e;return 0===p.size&&m(g),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function S(){return _("")}function I(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function M(t,e,n){t.classList[n?"add":"remove"](e)}function z(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const W=new Set;let j,A=0;function B(t,e,n,r,o,s,c,i=0){const l=16.666/r;let u="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*s(t);u+=100*t+`%{${c(r,1-r)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,$=t.ownerDocument;W.add($);const d=$.__svelte_stylesheet||($.__svelte_stylesheet=$.head.appendChild(x("style")).sheet),m=$.__svelte_rules||($.__svelte_rules={});m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,A+=1,f}function D(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),A-=o,A||m((()=>{A||(W.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),W.clear())})))}function N(t){j=t}function O(){if(!j)throw new Error("Function called outside component initialization");return j}function P(){const t=O();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=z(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const H=[],V=[],F=[],R=[],T=Promise.resolve();let G=!1;function U(t){F.push(t)}let Y=!1;const q=new Set;function J(){if(!Y){Y=!0;do{for(let t=0;t<H.length;t+=1){const e=H[t];N(e),X(e.$$)}for(N(null),H.length=0;V.length;)V.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];q.has(e)||(q.add(e),e())}F.length=0}while(H.length);for(;R.length;)R.pop()();G=!1,Y=!1,q.clear()}}function X(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}let K;function Q(){return K||(K=Promise.resolve(),K.then((()=>{K=null}))),K}function Z(t,e,n){t.dispatchEvent(z(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function rt(){et.r||s(et.c),et=et.p}function ot(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const ct={duration:0};function it(n,r,o){let i,l=r(n,o),u=!0;const a=et;function f(){const{delay:r=0,duration:o=300,easing:c=e,tick:f=t,css:$}=l||ct;$&&(i=B(n,1,0,o,r,c,$));const m=d()+r,p=m+o;U((()=>Z(n,!1,"start"))),h((t=>{if(u){if(t>=p)return f(0,1),Z(n,!1,"end"),--a.r||s(a.c),!1;if(t>=m){const e=c((t-m)/o);f(1-e,e)}}return u}))}return a.r+=1,c(l)?Q().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(i&&D(n,i),u=!1)}}}function lt(n,r,o,i){let l=r(n,o),u=i?0:1,a=null,f=null,$=null;function m(){$&&D(n,$)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:c=300,easing:i=e,tick:g=t,css:v}=l||ct,y={start:d()+o,b:r};r||(y.group=et,et.r+=1),a||f?f=y:(v&&(m(),$=B(n,u,r,c,o,i,v)),r&&g(0,1),a=p(y,c),U((()=>Z(n,r,"start"))),h((t=>{if(f&&t>f.start&&(a=p(f,c),f=null,Z(n,a.b,"start"),v&&(m(),$=B(n,u,a.b,a.duration,0,i,l.css))),a)if(t>=a.end)g(u=a.b,1-u),Z(n,a.b,"end"),f||(a.b?m():--a.group.r||s(a.group.c)),a=null;else if(t>=a.start){const e=t-a.start;u=a.a+a.d*i(e/a.duration),g(u,1-u)}return!(!a&&!f)})))}return{run(t){c(l)?Q().then((()=>{l=l(),g(t)})):g(t)},end(){m(),a=f=null}}}function ut(t,e){st(t,1,1,(()=>{e.delete(t.key)}))}function at(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ft(t){return"object"==typeof t&&null!==t?t:{}}function $t(t){t&&t.c()}function dt(t,e,n,o){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,n),o||U((()=>{const e=l.map(r).filter(c);u?u.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(U)}function mt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(H.push(t),G||(G=!0,T.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,r,c,i,l,u=[-1]){const a=j;N(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let $=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),$&&pt(e,t)),n})):[],f.update(),$=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&ot(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),J()}N(a)}class ht{$destroy(){mt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function vt(t){const e=t-1;return e*e*e+1}function yt(t,{delay:n=0,duration:r=400,easing:o=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}function wt(t,{delay:e=0,duration:n=400,easing:r=vt,x:o=0,y:s=0,opacity:c=0}={}){const i=getComputedStyle(t),l=+i.opacity,u="none"===i.transform?"":i.transform,a=l*(1-c);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*s}px);\n\t\t\topacity: ${l-a*e}`}}function xt(e){let n,r,o;return{c(){n=x("div"),L(n,"id","spinner"),L(n,"class","svelte-wk8mx8")},m(t,e){y(t,n,e),o=!0},p:t,i(t){o||(r&&r.end(1),o=!0)},o(t){r=it(n,yt,{}),o=!1},d(t){t&&w(n),t&&r&&r.end()}}}class bt extends ht{constructor(t){super(),gt(this,t,null,xt,i,{})}}var _t,kt=new Uint8Array(16);function St(){if(!_t&&!(_t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _t(kt)}var It=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Lt(t){return"string"==typeof t&&It.test(t)}for(var Et=[],Ct=0;Ct<256;++Ct)Et.push((Ct+256).toString(16).substr(1));function Mt(t,e,n){var r=(t=t||{}).random||(t.rng||St)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Et[t[e+0]]+Et[t[e+1]]+Et[t[e+2]]+Et[t[e+3]]+"-"+Et[t[e+4]]+Et[t[e+5]]+"-"+Et[t[e+6]]+Et[t[e+7]]+"-"+Et[t[e+8]]+Et[t[e+9]]+"-"+Et[t[e+10]]+Et[t[e+11]]+Et[t[e+12]]+Et[t[e+13]]+Et[t[e+14]]+Et[t[e+15]]).toLowerCase();if(!Lt(n))throw TypeError("Stringified UUID is invalid");return n}(r)}const zt="assets/data/words.json";async function Wt(){let t=JSON.parse(localStorage.getItem("words"));return t||(t=await async function(){return fetch(zt).then((t=>t.json()))}(),localStorage.setItem("words",JSON.stringify(t))),t}function jt(){const t=parseInt(localStorage.getItem("last"))||0;return{best:parseInt(localStorage.getItem("best"))||t,last:t}}function At(e){let n,r,o,s,c;return{c(){n=x("div"),r=x("div"),o=_(e[0]),L(r,"class","word svelte-p34olb"),L(r,"style",e[1])},m(t,e){y(t,n,e),v(n,r),v(r,o),c=!0},p:t,i(t){c||(s&&s.end(1),c=!0)},o(t){s=it(n,yt,{duration:100}),c=!1},d(t){t&&w(n),t&&s&&s.end()}}}function Bt(t,e,n){let{props:r}=e;const{value:o,x:s,duration:c}=r,i=(s+100)/2,l=`\n        left: ${i}%;\n        animation-duration: ${c}s;\n        --transX: translateX(${-i}%);\n    `;return t.$$set=t=>{"props"in t&&n(2,r=t.props)},[o,l,r]}class Dt extends ht{constructor(t){super(),gt(this,t,Bt,At,i,{props:2})}}function Nt(t){let e,n;return{c(){e=b("title"),n=_(t[0])},m(t,r){y(t,e,r),v(e,n)},p(t,e){1&e&&E(n,t[0])},d(t){t&&w(e)}}}function Ot(t){let e,n,r,o=t[0]&&Nt(t);const s=t[3].default,c=l(s,t,t[2],null);return{c(){e=b("svg"),o&&o.c(),n=S(),c&&c.c(),L(e,"xmlns","http://www.w3.org/2000/svg"),L(e,"viewBox",t[1]),L(e,"class","svelte-c8tyih")},m(t,s){y(t,e,s),o&&o.m(e,null),v(e,n),c&&c.m(e,null),r=!0},p(t,[i]){t[0]?o?o.p(t,i):(o=Nt(t),o.c(),o.m(e,n)):o&&(o.d(1),o=null),c&&c.p&&(!r||4&i)&&a(c,s,t,t[2],i,null,null),(!r||2&i)&&L(e,"viewBox",t[1])},i(t){r||(ot(c,t),r=!0)},o(t){st(c,t),r=!1},d(t){t&&w(e),o&&o.d(),c&&c.d(t)}}}function Pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:s=null}=e,{viewBox:c}=e;return t.$$set=t=>{"title"in t&&n(0,s=t.title),"viewBox"in t&&n(1,c=t.viewBox),"$$scope"in t&&n(2,o=t.$$scope)},[s,c,o,r]}class Ht extends ht{constructor(t){super(),gt(this,t,Pt,Ot,i,{title:0,viewBox:1})}}function Vt(t){let e;return{c(){e=b("path"),L(e,"d","M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ft(t){let e,r;const o=[{viewBox:"0 0 24 24"},t[0]];let s={$$slots:{default:[Vt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function Rt(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class Tt extends ht{constructor(t){super(),gt(this,t,Rt,Ft,i,{})}}function Gt(t){let e,n;const r=t[1].default,o=l(r,t,t[0],null);return{c(){e=x("div"),o&&o.c(),L(e,"class","icon svelte-6xq53p")},m(t,r){y(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&a(o,r,t,t[0],e,null,null)},i(t){n||(ot(o,t),n=!0)},o(t){st(o,t),n=!1},d(t){t&&w(e),o&&o.d(t)}}}function Ut(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Yt extends ht{constructor(t){super(),gt(this,t,Ut,Gt,i,{})}}function qt(t,e,n){const r=t.slice();return r[12]=e[n],r}function Jt(t,e){let n,r,o;return r=new Dt({props:{props:e[12]}}),{key:t,first:null,c(){n=S(),$t(r.$$.fragment),this.first=n},m(t,e){y(t,n,e),dt(r,t,e),o=!0},p(t,n){e=t;const o={};16&n&&(o.props=e[12]),r.$set(o)},i(t){o||(ot(r.$$.fragment,t),o=!0)},o(t){st(r.$$.fragment,t),o=!1},d(t){t&&w(n),mt(r,t)}}}function Xt(t){let e,n;return e=new Tt({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Kt(t){let e,n,r,o,c,i,l,u,a,f,$,d,m,p,g=[],h=new Map,b=t[4];const S=t=>t[12].id;for(let e=0;e<b.length;e+=1){let n=qt(t,b,e),r=S(n);h.set(r,g[e]=Jt(r,n))}return i=new Yt({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){e=x("div"),n=x("div");for(let t=0;t<g.length;t+=1)g[t].c();r=k(),o=x("div"),c=x("div"),$t(i.$$.fragment),l=_("\n            Score:\n            "),u=_(t[0]),a=k(),f=x("input"),L(n,"class","words-container svelte-fuuohg"),L(c,"class","score svelte-fuuohg"),L(f,"class","input svelte-fuuohg"),L(f,"type","text"),L(f,"spellcheck",!1),L(o,"class","bottom-bar svelte-fuuohg"),L(e,"class","playground svelte-fuuohg"),M(e,"invalid",t[3])},m(s,$){y(s,e,$),v(e,n);for(let t=0;t<g.length;t+=1)g[t].m(n,null);v(e,r),v(e,o),v(o,c),dt(i,c,null),v(c,l),v(c,u),v(o,a),v(o,f),C(f,t[1]),t[9](f),d=!0,m||(p=[I(f,"input",t[8]),I(f,"keyup",t[6]),I(f,"blur",t[5])],m=!0)},p(t,[r]){16&r&&(b=t[4],nt(),g=function(t,e,n,r,o,s,c,i,l,u,a,f){let $=t.length,d=s.length,m=$;const p={};for(;m--;)p[t[m].key]=m;const g=[],h=new Map,v=new Map;for(m=d;m--;){const t=f(o,s,m),i=n(t);let l=c.get(i);l?r&&l.p(t,e):(l=u(i,t),l.c()),h.set(i,g[m]=l),i in p&&v.set(i,Math.abs(m-p[i]))}const y=new Set,w=new Set;function x(t){ot(t,1),t.m(i,a),c.set(t.key,t),a=t.first,d--}for(;$&&d;){const e=g[d-1],n=t[$-1],r=e.key,o=n.key;e===n?(a=e.first,$--,d--):h.has(o)?!c.has(r)||y.has(r)?x(e):w.has(o)?$--:v.get(r)>v.get(o)?(w.add(r),x(e)):(y.add(o),$--):(l(n,c),$--)}for(;$--;){const e=t[$];h.has(e.key)||l(e,c)}for(;d;)x(g[d-1]);return g}(g,r,S,1,t,b,h,n,ut,Jt,null,qt),rt());const o={};32768&r&&(o.$$scope={dirty:r,ctx:t}),i.$set(o),(!d||1&r)&&E(u,t[0]),2&r&&f.value!==t[1]&&C(f,t[1]),8&r&&M(e,"invalid",t[3])},i(t){if(!d){for(let t=0;t<b.length;t+=1)ot(g[t]);ot(i.$$.fragment,t),U((()=>{$||($=lt(e,yt,{duration:400},!0)),$.run(1)})),d=!0}},o(t){for(let t=0;t<g.length;t+=1)st(g[t]);st(i.$$.fragment,t),$||($=lt(e,yt,{duration:400},!1)),$.run(0),d=!1},d(n){n&&w(e);for(let t=0;t<g.length;t+=1)g[t].d();mt(i),t[9](null),n&&$&&$.end(),m=!1,s(p)}}}function Qt(t,e,n){let r,{game:o}=e,s=0,c="",i=!1,l=[];var u;o.registerWordsListener((t=>{n(4,l=t)})),o.registerScoreListener((t=>{n(0,s=t)})),u=()=>a(),O().$$.on_mount.push(u);const a=()=>r.focus(),f=()=>n(1,c="");return t.$$set=t=>{"game"in t&&n(7,o=t.game)},[s,c,r,i,l,a,t=>{if(n(3,i=!1),"Enter"==t.key)return n(3,i=!o.handle(c)),void f();o.handle(c)&&f()},o,function(){c=this.value,n(1,c)},function(t){V[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}class Zt extends ht{constructor(t){super(),gt(this,t,Qt,Kt,i,{game:7})}}function te(t){let e;return{c(){e=b("path"),L(e,"d","M8 5v14l11-7z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function ee(t){let e,r;const o=[{viewBox:"0 0 24 24"},t[0]];let s={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function ne(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class re extends ht{constructor(t){super(),gt(this,t,ne,ee,i,{})}}function oe(t){let e;return{c(){e=b("path"),L(e,"d","M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function se(t){let e,r;const o=[{viewBox:"0 0 512 512"},t[0]];let s={$$slots:{default:[oe]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function ce(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class ie extends ht{constructor(t){super(),gt(this,t,ce,se,i,{})}}function le(t){let e;return{c(){e=b("path"),L(e,"d","M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function ue(t){let e,r;const o=[{viewBox:"0 0 512 512"},t[0]];let s={$$slots:{default:[le]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function ae(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class fe extends ht{constructor(t){super(),gt(this,t,ae,ue,i,{})}}function $e(t){let e;return{c(){e=b("path"),L(e,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function de(t){let e,r;const o=[{viewBox:"0 0 24 24"},t[0]];let s={$$slots:{default:[$e]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function me(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class pe extends ht{constructor(t){super(),gt(this,t,me,de,i,{})}}function ge(t){let e,n;return e=new fe({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function he(t){let e,n,r,o,s,c,i,l,u,a,f,$,d,m;return o=new Yt({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),l=new pe({}),{c(){e=x("div"),n=x("div"),r=x("h1"),$t(o.$$.fragment),s=_("\n            How to play?"),c=k(),i=x("button"),$t(l.$$.fragment),u=k(),a=x("p"),a.textContent="As soon as you'll start the game, words are going to fall out. Type them\n        as fast as possible to remove them. If a word reaches the bottom of the\n        screen, you'll loose the game. Good luck!",L(r,"class","svelte-yim29g"),L(i,"class","close svelte-yim29g"),L(n,"class","header svelte-yim29g"),L(a,"class","svelte-yim29g"),L(e,"class","container svelte-yim29g")},m(f,p){y(f,e,p),v(e,n),v(n,r),dt(o,r,null),v(r,s),v(n,c),v(n,i),dt(l,i,null),v(e,u),v(e,a),$=!0,d||(m=I(i,"click",t[0]),d=!0)},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){$||(ot(o.$$.fragment,t),ot(l.$$.fragment,t),U((()=>{f||(f=lt(e,wt,{x:40,duration:400},!0)),f.run(1)})),$=!0)},o(t){st(o.$$.fragment,t),st(l.$$.fragment,t),f||(f=lt(e,wt,{x:40,duration:400},!1)),f.run(0),$=!1},d(t){t&&w(e),mt(o),mt(l),t&&f&&f.end(),d=!1,m()}}}function ve(t){return[function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}]}class ye extends ht{constructor(t){super(),gt(this,t,ve,he,i,{})}}function we(t){let e;return{c(){e=b("path"),L(e,"d","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function xe(t){let e,r;const o=[{viewBox:"0 0 480 512"},t[0]];let s={$$slots:{default:[we]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function be(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class _e extends ht{constructor(t){super(),gt(this,t,be,xe,i,{})}}function ke(t){let e,n;return e=new ie({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Se(t){let e,n;return e=new re({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Ie(t){let e,n,r,o,s,c,i,l,u,a;return r=new Yt({props:{$$slots:{default:[Ee]},$$scope:{ctx:t}}}),c=new Yt({props:{$$slots:{default:[Ce]},$$scope:{ctx:t}}}),{c(){e=x("div"),n=x("a"),$t(r.$$.fragment),o=k(),s=x("button"),$t(c.$$.fragment),L(n,"href",ze),L(n,"target","_blank"),L(n,"rel","noreferrer noopener"),L(n,"title","Star me on GitHub"),L(n,"class","btn svelte-5rrj5i"),L(s,"class","help btn svelte-5rrj5i"),L(s,"title","Click me for help"),L(e,"class","buttons svelte-5rrj5i")},m(i,f){y(i,e,f),v(e,n),dt(r,n,null),v(e,o),v(e,s),dt(c,s,null),l=!0,u||(a=I(s,"click",t[7]),u=!0)},p(t,e){const n={};256&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};256&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){l||(ot(r.$$.fragment,t),ot(c.$$.fragment,t),U((()=>{i||(i=lt(e,yt,{duration:200},!0)),i.run(1)})),l=!0)},o(t){st(r.$$.fragment,t),st(c.$$.fragment,t),i||(i=lt(e,yt,{duration:200},!1)),i.run(0),l=!1},d(t){t&&w(e),mt(r),mt(c),t&&i&&i.end(),u=!1,a()}}}function Le(e){let n,r;return n=new ye({}),n.$on("click",e[6]),{c(){$t(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){st(n.$$.fragment,t),r=!1},d(t){mt(n,t)}}}function Ee(t){let e,n;return e=new _e({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Ce(t){let e,n;return e=new fe({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Me(t){let e,n,r,o,s,c,i,l,u,a,f,$,d,m,p,g,h,b,S,E;o=new Yt({props:{$$slots:{default:[ke]},$$scope:{ctx:t}}}),d=new Yt({props:{$$slots:{default:[Se]},$$scope:{ctx:t}}});const C=[Le,Ie],z=[];function W(t,e){return t[0]?0:1}return p=W(t),g=z[p]=C[p](t),{c(){e=x("div"),n=x("div"),r=x("div"),$t(o.$$.fragment),s=_("\n            Best score:\n            "),c=x("strong"),c.textContent=`${t[1]}`,i=k(),l=x("div"),u=_("Last score: "),a=x("strong"),a.textContent=`${t[2]}`,f=k(),$=x("button"),$t(d.$$.fragment),m=k(),g.c(),L(n,"id","scores"),L(n,"class","svelte-5rrj5i"),L($,"id","play"),L($,"class","svelte-5rrj5i"),L(e,"id","start-menu"),L(e,"class","svelte-5rrj5i"),M(e,"hidden",We)},m(g,h){y(g,e,h),v(e,n),v(n,r),dt(o,r,null),v(r,s),v(r,c),v(n,i),v(n,l),v(l,u),v(l,a),v(e,f),v(e,$),dt(d,$,null),v(e,m),z[p].m(e,null),b=!0,S||(E=I($,"click",t[5]),S=!0)},p(t,[n]){const r={};256&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r);const s={};256&n&&(s.$$scope={dirty:n,ctx:t}),d.$set(s);let c=p;p=W(t),p===c?z[p].p(t,n):(nt(),st(z[c],1,1,(()=>{z[c]=null})),rt(),g=z[p],g?g.p(t,n):(g=z[p]=C[p](t),g.c()),ot(g,1),g.m(e,null))},i(t){b||(ot(o.$$.fragment,t),ot(d.$$.fragment,t),ot(g),U((()=>{h||(h=lt(e,yt,{duration:400},!0)),h.run(1)})),b=!0)},o(t){st(o.$$.fragment,t),st(d.$$.fragment,t),st(g),h||(h=lt(e,yt,{duration:400},!1)),h.run(0),b=!1},d(t){t&&w(e),mt(o),mt(d),z[p].d(),t&&h&&h.end(),S=!1,E()}}}const ze="https://github.com/iamludal/typospeed";let We=!1;function je(t,e,n){let{scores:r=jt()}=e,o=!Lt(localStorage.getItem("uuid")||"");const{best:s,last:c}=r,i=P();return t.$$set=t=>{"scores"in t&&n(4,r=t.scores)},[o,s,c,i,r,()=>i("start"),()=>{localStorage.setItem("uuid",Mt()),n(0,o=!1)},()=>n(0,o=!0)]}class Ae extends ht{constructor(t){super(),gt(this,t,je,Me,i,{scores:4})}}function Be(t){let e;return{c(){e=b("path"),L(e,"d","M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function De(t){let e,r;const o=[{viewBox:"0 0 24 24"},t[0]];let s={$$slots:{default:[Be]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function Ne(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class Oe extends ht{constructor(t){super(),gt(this,t,Ne,De,i,{})}}function Pe(t){let e;return{c(){e=b("path"),L(e,"d","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function He(t){let e,r;const o=[{viewBox:"0 0 496 512"},t[0]];let s={$$slots:{default:[Pe]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Ht({props:s}),{c(){$t(e.$$.fragment)},m(t,n){dt(e,t,n),r=!0},p(t,[n]){const r=1&n?at(o,[o[0],ft(t[0])]):{};2&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ot(e.$$.fragment,t),r=!0)},o(t){st(e.$$.fragment,t),r=!1},d(t){mt(e,t)}}}function Ve(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),f(t)))},[e=f(e)]}class Fe extends ht{constructor(t){super(),gt(this,t,Ve,He,i,{})}}function Re(t){let e,n;return e=new Fe({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Te(t){let e,n;return e=new Oe({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Ge(t){let e,n;return e=new re({}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Ue(n){let r,o,i,l,u,a,f,$,m,p,g,b,S,E,C,M,z,W,j,A,N,O;return i=new Yt({props:{$$slots:{default:[Re]},$$scope:{ctx:n}}}),b=new Yt({props:{$$slots:{default:[Te]},$$scope:{ctx:n}}}),M=new Yt({props:{$$slots:{default:[Ge]},$$scope:{ctx:n}}}),{c(){r=x("div"),o=x("h1"),$t(i.$$.fragment),l=_("\n        Game Over!"),u=k(),a=x("h2"),a.textContent=`Your score: ${n[0]}`,f=k(),$=x("p"),$.textContent=`Best score: ${n[1]}`,m=k(),p=x("div"),g=x("button"),$t(b.$$.fragment),S=_("\n            Menu"),E=k(),C=x("button"),$t(M.$$.fragment),z=_("\n            Play again"),L(g,"class","btn svelte-1ols91t"),L(C,"class","btn svelte-1ols91t"),L(r,"class","wrapper svelte-1ols91t")},m(t,e){y(t,r,e),v(r,o),dt(i,o,null),v(o,l),v(r,u),v(r,a),v(r,f),v(r,$),v(r,m),v(r,p),v(p,g),dt(b,g,null),v(g,S),v(p,E),v(p,C),dt(M,C,null),v(C,z),A=!0,N||(O=[I(g,"click",n[4]),I(C,"click",n[5])],N=!0)},p(t,[e]){const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),b.$set(r);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),M.$set(o)},i(n){A||(ot(i.$$.fragment,n),ot(b.$$.fragment,n),ot(M.$$.fragment,n),U((()=>{j&&j.end(1),W||(W=function(n,r,o){let s,i,l=r(n,o),u=!1,a=0;function f(){s&&D(n,s)}function $(){const{delay:r=0,duration:o=300,easing:c=e,tick:$=t,css:m}=l||ct;m&&(s=B(n,0,1,o,r,c,m,a++)),$(0,1);const p=d()+r,g=p+o;i&&i.abort(),u=!0,U((()=>Z(n,!0,"start"))),i=h((t=>{if(u){if(t>=g)return $(1,0),Z(n,!0,"end"),f(),u=!1;if(t>=p){const e=c((t-p)/o);$(e,1-e)}}return u}))}let m=!1;return{start(){m||(D(n),c(l)?(l=l(),Q().then($)):$())},invalidate(){m=!1},end(){u&&(f(),u=!1)}}}(r,yt,{duration:800})),W.start()})),A=!0)},o(t){st(i.$$.fragment,t),st(b.$$.fragment,t),st(M.$$.fragment,t),W&&W.invalidate(),j=it(r,yt,{duration:200}),A=!1},d(t){t&&w(r),mt(i),mt(b),mt(M),t&&j&&j.end(),N=!1,s(O)}}}function Ye(t,e,n){let{scores:r}=e;const{last:o,best:s}=r,c=P();return t.$$set=t=>{"scores"in t&&n(3,r=t.scores)},[o,s,c,r,()=>c("menu"),()=>c("playagain")]}class qe extends ht{constructor(t){super(),gt(this,t,Ye,Ue,i,{scores:3})}}function Je(t){return{enumerable:!0,value:t}}function Xe(t){return{enumerable:!0,writable:!0,value:t}}let Ke={},Qe=()=>!0,Ze=()=>({}),tn=t=>t,en=(t,e,n,r)=>t.apply(n,r)&&e.apply(n,r),nn=(t,e,n,[r,o])=>e.call(n,t.call(n,r,o),o),rn=(t,e)=>Object.freeze(Object.create(t,e));function on(t,e,n){return t.reduce(((t,e)=>function(...r){return n(t,e,this,r)}),e)}function sn(t){return rn(this,{fn:Je(t)})}let cn={};sn.bind(cn);let ln={};function un(t,e){return e.filter((e=>t.isPrototypeOf(e)))}function an(t,e,...n){let r=on(un(ln,n).map((t=>t.fn)),Qe,en),o=on(un(cn,n).map((t=>t.fn)),tn,nn);return rn(this,{from:Je(t),to:Je(e),guards:Je(r),reducers:Je(o)})}sn.bind(ln);let fn={},$n={},dn=an.bind(fn);function mn(t,e,n){return yn(e,t,n,this.immediates)||t}function pn(t){let e=new Map;for(let n of t)e.has(n.from)||e.set(n.from,[]),e.get(n.from).push(n);return e}an.bind($n,null);let gn={enter:tn};function hn(...t){let e=un(fn,t),n=un($n,t),r={final:Je(0===t.length),transitions:Je(pn(e))};return n.length&&(r.immediates=Je(n),r.enter=Je(mn)),rn(gn,r)}let vn={get state(){return{name:this.current,value:this.states[this.current]}}};function yn(t,e,n,r){let{context:o}=t;for(let{to:s,guards:c,reducers:i}of r)if(c(o,n)){t.context=i.call(t,o,n);let r=e.original||e,c=rn(r,{current:Je(s),original:{value:r}});return c.state.value.enter(c,t,n)}}let wn={send(t){this.machine=function(t,e){let n=e.type||e,{machine:r}=t,{value:o}=r.state;return o.transitions.has(n)&&yn(t,r,e,o.transitions.get(n))||r}(this,t),this.onChange(this)}};const xn=function(t,e,n=Ze){return"string"!=typeof t&&(n=e||Ze,e=t,t=Object.keys(e)[0]),Ke._create&&Ke._create(t,e),rn(vn,{context:Je(n),current:Je(t),states:Je(e)})}("IDLE",{IDLE:hn(dn("start","PLAYING")),PLAYING:hn(dn("pause","PAUSED"),dn("end","FINISHED")),PAUSED:hn(dn("resume","PLAY")),FINISHED:hn()});class bn{constructor(t,e){this._fallTime=2e3,this._duration=10,this._score=0,this._fallingWords=[],this._intervals={},this._wordsList=t,this._pointSound=new Audio("assets/point.mp3"),this.state=function(t,e,n,r){let o=Object.create(wn,{machine:Xe(t),context:Xe(t.context(n,r)),onChange:Je(e)});return o.send=o.send.bind(o),o.machine=o.machine.state.value.enter(o.machine,o,r),o}(xn,e)}start(){this.state.send("start"),this.updateFallInterval(),this._intervals.difficulty=setInterval((()=>{this.increaseDifficulty()}),2e4)}increaseDifficulty(){this._fallTime-=200,this._duration-=.5,this.updateFallInterval()}updateFallInterval(){clearInterval(this._intervals.fall),this._intervals.fall=setInterval((()=>{this.addWord()}),this._fallTime)}get fallingWords(){return this._fallingWords}set fallingWords(t){this._fallingWords=t,this._wordsListener(t)}get score(){return this._score}set score(t){this._score=t,this._scoreListener(t)}handle(t){const e=t.toLocaleLowerCase(),n=this.isValid(e);if(n){const t=this.removeWord(e);this.applyScore(t),this._pointSound.play(),clearInterval(t.timeout)}return n}isValid(t){return this.fallingWords.some((e=>e.value==t))}removeWord(t){const e=this.fallingWords.findIndex((e=>e.value==t)),n=this.fallingWords[e];return this.fallingWords=this.fallingWords.filter(((t,n)=>n!=e)),clearInterval(n.timeout),n}applyScore(t){this.score+=Math.round(t.value.length*(100/t.duration))}addWord(){const t=this.generateWord();this.fallingWords=[...this.fallingWords,t]}generateWord(){const t=Math.floor(Math.random()*this._wordsList.length),e=this._wordsList[t],n=this.randomPos(),r=this._duration;return{x:n,value:e,duration:r,id:e+n,timeout:setTimeout((()=>this.loose()),1e3*r)}}loose(){this.state.send("end");for(let t of Object.values(this._intervals))clearInterval(t);for(let t of this.fallingWords)this.removeWord(t.value)}randomPos(){return this.randint(-100,100)}randint(t,e){const n=e-t;return Math.round(Math.random()*n)+t}registerWordsListener(t){this._wordsListener=t}registerScoreListener(t){this._scoreListener=t}}function _n(e){let n,r;return n=new qe({props:{scores:jt()}}),n.$on("menu",e[5]),n.$on("playagain",e[3]),{c(){$t(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){st(n.$$.fragment,t),r=!1},d(t){mt(n,t)}}}function kn(t){let e,n;return e=new Zt({props:{game:t[1]}}),{c(){$t(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.game=t[1]),e.$set(r)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Sn(e){let n,r;return n=new Ae({}),n.$on("start",e[3]),{c(){$t(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){st(n.$$.fragment,t),r=!1},d(t){mt(n,t)}}}function In(t){let e,n,r,o;const s=[Sn,kn,_n],c=[];function i(t,e){return"IDLE"==t[0]?0:"PLAYING"==t[0]?1:"FINISHED"==t[0]?2:-1}return~(e=i(t))&&(n=c[e]=s[e](t)),{c(){n&&n.c(),r=S()},m(t,n){~e&&c[e].m(t,n),y(t,r,n),o=!0},p(t,[o]){let l=e;e=i(t),e===l?~e&&c[e].p(t,o):(n&&(nt(),st(c[l],1,1,(()=>{c[l]=null})),rt()),~e?(n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),ot(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(ot(n),o=!0)},o(t){st(n),o=!1},d(t){~e&&c[e].d(t),t&&w(r)}}}function Ln(t,e,n){let{wordsList:r}=e,o="IDLE";const s=t=>{n(0,o=t.machine.current),"FINISHED"==o&&function(t){const e=parseInt(localStorage.getItem("best"))||0,n=Math.max(t,e);localStorage.setItem("best",n.toString()),localStorage.setItem("last",t.toString())}(c.score)};let c;const i=t=>n(0,o=t);return t.$$set=t=>{"wordsList"in t&&n(4,r=t.wordsList)},[o,c,i,()=>{n(1,c=new bn(r,s)),c.start()},r,()=>i("IDLE")]}class En extends ht{constructor(t){super(),gt(this,t,Ln,In,i,{wordsList:4})}}function Cn(e){let n,r,o,s=e[2].message+"";return{c(){n=x("p"),r=_("An error occurred: "),o=_(s),L(n,"class","error svelte-1lpbqce")},m(t,e){y(t,n,e),v(n,r),v(n,o)},p:t,i:t,o:t,d(t){t&&w(n)}}}function Mn(e){let n,r;return n=new En({props:{wordsList:e[1]}}),{c(){$t(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){st(n.$$.fragment,t),r=!1},d(t){mt(n,t)}}}function zn(e){let n,r;return n=new bt({}),{c(){$t(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){st(n.$$.fragment,t),r=!1},d(t){mt(n,t)}}}function Wn(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:zn,then:Mn,catch:Cn,value:1,error:2,blocks:[,,,]};return function(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const i=t&&(e.current=t)(c);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(nt(),st(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),rt())})):e.block.d(1),i.c(),ot(i,1),i.m(e.mount(),e.anchor),l=!0),e.block=i,e.blocks&&(e.blocks[r]=i),l&&J()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=O();if(t.then((t=>{N(n),r(e.then,1,e.value,t),N(null)}),(t=>{if(N(n),r(e.catch,2,e.error,t),N(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}(t[0],r),{c(){e=S(),r.block.c()},m(t,o){y(t,e,o),r.block.m(t,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,[n]){!function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(r,t=e,n)},i(t){n||(ot(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){st(r.blocks[t])}n=!1},d(t){t&&w(e),r.block.d(t),r.token=null,r=null}}}function jn(t){return[Wt()]}new class extends ht{constructor(t){super(),gt(this,t,jn,Wn,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map