!function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),a=c?t=>requestAnimationFrame(t):t;const u=new Set;function f(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&a(f)}function d(t){let e;return 0===u.size&&a(f),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function b(){return $("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){t.value=null==e?"":e}function k(t,e,n){t.classList[n?"add":"remove"](e)}function x(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const L=new Set;let I,E=0;function S(t,e,n,r,s,o,i,c=0){const l=16.666/r;let a="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*o(t);a+=100*t+`%{${i(r,1-r)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=t.ownerDocument;L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${s}ms 1 both`,E+=1,f}function W(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),E-=s,E||a((()=>{E||(L.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),L.clear())})))}function C(t){I=t}function j(){if(!I)throw new Error("Function called outside component initialization");return I}const A=[],M=[],N=[],P=[],D=Promise.resolve();let O=!1;function F(t){N.push(t)}let Y=!1;const T=new Set;function z(){if(!Y){Y=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];C(e),G(e.$$)}for(C(null),A.length=0;M.length;)M.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];T.has(e)||(T.add(e),e())}N.length=0}while(A.length);for(;P.length;)P.pop()();O=!1,Y=!1,T.clear()}}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let H;function R(){return H||(H=Promise.resolve(),H.then((()=>{H=null}))),H}function q(t,e,n){t.dispatchEvent(x(`${e?"intro":"outro"}${n}`))}const B=new Set;let J;function U(){J={r:0,c:[],p:J}}function V(){J.r||s(J.c),J=J.p}function X(t,e){t&&t.i&&(B.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),J.c.push((()=>{B.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const Q={duration:0};function Z(n,r,i){let c,a=r(n,i),u=!0;const f=J;function h(){const{delay:r=0,duration:o=300,easing:i=e,tick:h=t,css:p}=a||Q;p&&(c=S(n,1,0,o,r,i,p));const m=l()+r,g=m+o;F((()=>q(n,!1,"start"))),d((t=>{if(u){if(t>=g)return h(0,1),q(n,!1,"end"),--f.r||s(f.c),!1;if(t>=m){const e=i((t-m)/o);h(1-e,e)}}return u}))}return f.r+=1,o(a)?R().then((()=>{a=a(),h()})):h(),{end(t){t&&a.tick&&a.tick(1,0),u&&(c&&W(n,c),u=!1)}}}function tt(n,r,i,c){let a=r(n,i),u=c?0:1,f=null,h=null,p=null;function m(){p&&W(n,p)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(r){const{delay:o=0,duration:i=300,easing:c=e,tick:$=t,css:v}=a||Q,b={start:l()+o,b:r};r||(b.group=J,J.r+=1),f||h?h=b:(v&&(m(),p=S(n,u,r,i,o,c,v)),r&&$(0,1),f=g(b,i),F((()=>q(n,r,"start"))),d((t=>{if(h&&t>h.start&&(f=g(h,i),h=null,q(n,f.b,"start"),v&&(m(),p=S(n,u,f.b,f.duration,0,c,a.css))),f)if(t>=f.end)$(u=f.b,1-u),q(n,f.b,"end"),h||(f.b?m():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*c(e/f.duration),$(u,1-u)}return!(!f&&!h)})))}return{run(t){o(a)?R().then((()=>{a=a(),$(t)})):$(t)},end(){m(),f=h=null}}}function et(t,e){K(t,1,1,(()=>{e.delete(t.key)}))}function nt(t){t&&t.c()}function rt(t,e,r){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(e,r),F((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(F)}function st(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(A.push(t),O||(O=!0,D.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,o,i,c,l,a=[-1]){const u=I;C(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=o?o(e,f,((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&ot(e,t)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&X(e.$$.fragment),rt(e,n.target,n.anchor),z()}C(u)}class ct{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function lt(t,{delay:n=0,duration:r=400,easing:s=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function at(e){let n,r,s;return{c(){n=g("div"),_(n,"id","spinner"),_(n,"class","svelte-wk8mx8")},m(t,e){p(t,n,e),s=!0},p:t,i(t){s||(r&&r.end(1),s=!0)},o(t){r=Z(n,lt,{}),s=!1},d(t){t&&m(n),t&&r&&r.end()}}}class ut extends ct{constructor(t){super(),it(this,t,null,at,i,{})}}const ft="assets/data/words.json";async function dt(){let t=JSON.parse(localStorage.getItem("words"));return t||(t=await async function(){return fetch(ft).then((t=>t.json()))}(),localStorage.setItem("words",JSON.stringify(t))),t}function ht(){const t=parseInt(localStorage.getItem("last"))||0;return{best:parseInt(localStorage.getItem("best"))||t,last:t}}function pt(e){let n,r,s,o,i;return{c(){n=g("div"),r=g("div"),s=$(e[0]),_(r,"class","word svelte-p34olb"),_(r,"style",e[1])},m(t,e){p(t,n,e),h(n,r),h(r,s),i=!0},p:t,i(t){i||(o&&o.end(1),i=!0)},o(t){o=Z(n,lt,{}),i=!1},d(t){t&&m(n),t&&o&&o.end()}}}function mt(t,e,n){let{props:r}=e;const{value:s,x:o,duration:i}=r,c=(o+100)/2,l=`\n        left: ${c}%;\n        animation-duration: ${i}s;\n        --transX: translateX(${-c}%);\n    `;return t.$$set=t=>{"props"in t&&n(2,r=t.props)},[s,l,r]}class gt extends ct{constructor(t){super(),it(this,t,mt,pt,i,{props:2})}}function $t(t,e,n){const r=t.slice();return r[10]=e[n],r}function vt(t,e){let n,r,s;return r=new gt({props:{props:e[10]}}),{key:t,first:null,c(){n=b(),nt(r.$$.fragment),this.first=n},m(t,e){p(t,n,e),rt(r,t,e),s=!0},p(t,e){const n={};16&e&&(n.props=t[10]),r.$set(n)},i(t){s||(X(r.$$.fragment,t),s=!0)},o(t){K(r.$$.fragment,t),s=!1},d(t){t&&m(n),st(r,t)}}}function bt(t){let e,n,r,o,i,c,l,a,u,f,d,b,x,L,I=[],E=new Map,S=t[4];const W=t=>t[10].id;for(let e=0;e<S.length;e+=1){let n=$t(t,S,e),r=W(n);E.set(r,I[e]=vt(r,n))}return{c(){e=g("div"),n=g("div");for(let t=0;t<I.length;t+=1)I[t].c();r=v(),o=g("div"),i=g("div"),c=$("Score: "),l=$(t[0]),a=v(),u=g("input"),_(n,"class","words-container svelte-jv2s15"),_(i,"class","score svelte-jv2s15"),_(u,"class","input svelte-jv2s15"),_(u,"type","text"),_(u,"spellcheck",f=!1),k(u,"invalid",t[3]),_(o,"class","bottom-bar svelte-jv2s15"),_(e,"class","playground svelte-jv2s15")},m(s,f){p(s,e,f),h(e,n);for(let t=0;t<I.length;t+=1)I[t].m(n,null);h(e,r),h(e,o),h(o,i),h(i,c),h(i,l),h(o,a),h(o,u),w(u,t[1]),t[9](u),b=!0,x||(L=[y(u,"input",t[8]),y(u,"keyup",t[6]),y(u,"blur",t[5])],x=!0)},p(t,[e]){if(16&e){const r=t[4];U(),I=function(t,e,n,r,s,o,i,c,l,a,u,f){let d=t.length,h=o.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],$=new Map,v=new Map;for(p=h;p--;){const t=f(s,o,p),c=n(t);let l=i.get(c);l?r&&l.p(t,e):(l=a(c,t),l.c()),$.set(c,g[p]=l),c in m&&v.set(c,Math.abs(p-m[c]))}const b=new Set,y=new Set;function _(t){X(t,1),t.m(c,u),i.set(t.key,t),u=t.first,h--}for(;d&&h;){const e=g[h-1],n=t[d-1],r=e.key,s=n.key;e===n?(u=e.first,d--,h--):$.has(s)?!i.has(r)||b.has(r)?_(e):y.has(s)?d--:v.get(r)>v.get(s)?(y.add(r),_(e)):(b.add(s),d--):(l(n,i),d--)}for(;d--;){const e=t[d];$.has(e.key)||l(e,i)}for(;h;)_(g[h-1]);return g}(I,e,W,1,t,r,E,n,et,vt,null,$t),V()}(!b||1&e)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(l,t[0]),2&e&&u.value!==t[1]&&w(u,t[1]),8&e&&k(u,"invalid",t[3])},i(t){if(!b){for(let t=0;t<S.length;t+=1)X(I[t]);F((()=>{d||(d=tt(e,lt,{duration:500},!0)),d.run(1)})),b=!0}},o(t){for(let t=0;t<I.length;t+=1)K(I[t]);d||(d=tt(e,lt,{duration:500},!1)),d.run(0),b=!1},d(n){n&&m(e);for(let t=0;t<I.length;t+=1)I[t].d();t[9](null),n&&d&&d.end(),x=!1,s(L)}}}function yt(t,e,n){let r,{game:s}=e,o=0,i="",c=!1,l=[];var a;s.registerWordsListener((t=>{n(4,l=t)})),s.registerScoreListener((t=>{n(0,o=t)})),a=()=>u(),j().$$.on_mount.push(a);const u=()=>r.focus();return t.$$set=t=>{"game"in t&&n(7,s=t.game)},[o,i,r,c,l,u,t=>{n(3,c=!1),"Enter"==t.key&&(s.handle(i)?n(1,i=""):n(3,c=!0))},s,function(){i=this.value,n(1,i)},function(t){M[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}class _t extends ct{constructor(t){super(),it(this,t,yt,bt,i,{game:7})}}function wt(t){let e,n,r,s,o,i,c,l,a,u,f;return{c(){e=g("div"),n=g("div"),r=g("div"),r.textContent="Best score: "+t[0],s=v(),o=g("div"),o.textContent="Last score: "+t[1],i=v(),c=g("button"),c.textContent="PLAY",_(n,"id","scores"),_(n,"class","svelte-i7glck"),_(c,"id","play"),_(c,"class","svelte-i7glck"),_(e,"id","start-menu"),_(e,"class","svelte-i7glck"),k(e,"hidden",kt)},m(l,d){p(l,e,d),h(e,n),h(n,r),h(n,s),h(n,o),h(e,i),h(e,c),a=!0,u||(f=y(c,"click",t[3]),u=!0)},p(t,[n]){0&n&&k(e,"hidden",kt)},i(t){a||(F((()=>{l||(l=tt(e,lt,{duration:500},!0)),l.run(1)})),a=!0)},o(t){l||(l=tt(e,lt,{duration:500},!1)),l.run(0),a=!1},d(t){t&&m(e),t&&l&&l.end(),u=!1,f()}}}let kt=!1;function xt(t,e,n){let{scores:r=ht()}=e;const{best:s,last:o}=r;return t.$$set=t=>{"scores"in t&&n(2,r=t.scores)},[s,o,r,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}]}class Lt extends ct{constructor(t){super(),it(this,t,xt,wt,i,{scores:2})}}function It(e){let n,r,o,i,c,l,a,u,f,d,$,b,w;return{c(){n=g("div"),r=g("h1"),r.textContent="Game Over!",o=v(),i=g("h2"),i.textContent="Your score: "+e[0],c=v(),l=g("p"),l.textContent="Best score: "+e[1],a=v(),u=g("div"),f=g("button"),f.textContent="Menu",d=v(),$=g("button"),$.textContent="Play again",_(f,"class","btn svelte-1ols91t"),_($,"class","btn svelte-1ols91t"),_(n,"class","wrapper svelte-1ols91t")},m(t,s){p(t,n,s),h(n,r),h(n,o),h(n,i),h(n,c),h(n,l),h(n,a),h(n,u),h(u,f),h(u,d),h(u,$),b||(w=[y(f,"click",e[4]),y($,"click",e[5])],b=!0)},p:t,i:t,o:t,d(t){t&&m(n),b=!1,s(w)}}}function Et(t,e,n){let{scores:r}=e;const{last:s,best:o}=r,i=function(){const t=j();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=x(e,n);r.slice().forEach((e=>{e.call(t,s)}))}}}();return t.$$set=t=>{"scores"in t&&n(3,r=t.scores)},[s,o,i,r,()=>i("menu"),()=>i("playagain")]}class St extends ct{constructor(t){super(),it(this,t,Et,It,i,{scores:3})}}function Wt(t){return{enumerable:!0,value:t}}function Ct(t){return{enumerable:!0,writable:!0,value:t}}let jt={},At=()=>!0,Mt=()=>({}),Nt=t=>t,Pt=(t,e,n,r)=>t.apply(n,r)&&e.apply(n,r),Dt=(t,e,n,[r,s])=>e.call(n,t.call(n,r,s),s),Ot=(t,e)=>Object.freeze(Object.create(t,e));function Ft(t,e,n){return t.reduce(((t,e)=>function(...r){return n(t,e,this,r)}),e)}function Yt(t){return Ot(this,{fn:Wt(t)})}let Tt={},zt=(Yt.bind(Tt),{});Yt.bind(zt);function Gt(t,e){return e.filter((e=>t.isPrototypeOf(e)))}function Ht(t,e,...n){let r=Ft(Gt(zt,n).map((t=>t.fn)),At,Pt),s=Ft(Gt(Tt,n).map((t=>t.fn)),Nt,Dt);return Ot(this,{from:Wt(t),to:Wt(e),guards:Wt(r),reducers:Wt(s)})}let Rt={},qt={},Bt=Ht.bind(Rt);Ht.bind(qt,null);function Jt(t,e,n){return Qt(e,t,n,this.immediates)||t}function Ut(t){let e=new Map;for(let n of t)e.has(n.from)||e.set(n.from,[]),e.get(n.from).push(n);return e}let Vt={enter:Nt};function Xt(...t){let e=Gt(Rt,t),n=Gt(qt,t),r={final:Wt(0===t.length),transitions:Wt(Ut(e))};return n.length&&(r.immediates=Wt(n),r.enter=Wt(Jt)),Ot(Vt,r)}let Kt={get state(){return{name:this.current,value:this.states[this.current]}}};function Qt(t,e,n,r){let{context:s}=t;for(let{to:o,guards:i,reducers:c}of r)if(i(s,n)){t.context=c.call(t,s,n);let r=e.original||e,i=Ot(r,{current:Wt(o),original:{value:r}});return i.state.value.enter(i,t,n)}}let Zt={send(t){this.machine=function(t,e){let n=e.type||e,{machine:r}=t,{value:s}=r.state;return s.transitions.has(n)&&Qt(t,r,e,s.transitions.get(n))||r}(this,t),this.onChange(this)}};const te=function(t,e,n=Mt){return"string"!=typeof t&&(n=e||Mt,e=t,t=Object.keys(e)[0]),jt._create&&jt._create(t,e),Ot(Kt,{context:Wt(n),current:Wt(t),states:Wt(e)})}("IDLE",{IDLE:Xt(Bt("start","PLAYING")),PLAYING:Xt(Bt("pause","PAUSED"),Bt("end","FINISHED")),PAUSED:Xt(Bt("resume","PLAY")),FINISHED:Xt()});class ee{constructor(t,e){this._fallTime=2e3,this._score=0,this._fallingWords=[],this._wordsList=t,this.state=function(t,e,n,r){let s=Object.create(Zt,{machine:Ct(t),context:Ct(t.context(n,r)),onChange:Wt(e)});return s.send=s.send.bind(s),s.machine=s.machine.state.value.enter(s.machine,s,r),s}(te,e)}start(){this.state.send("start"),this._interval=setInterval(this.addWord.bind(this),this._fallTime)}get fallingWords(){return this._fallingWords}set fallingWords(t){this._fallingWords=t,this._wordsListener(t)}get score(){return this._score}set score(t){this._score=t,this._scoreListener(t)}handle(t){const e=t.toLocaleLowerCase(),n=this.isValid(e);if(n){const t=this.removeWord(e);this.applyScore(t),clearInterval(t.timeout)}return n}isValid(t){return this.fallingWords.some((e=>e.value==t))}removeWord(t){const e=this.fallingWords.findIndex((e=>e.value==t)),n=this.fallingWords[e];return this.fallingWords=this.fallingWords.filter(((t,n)=>n!=e)),n}applyScore(t){this.score+=Math.round(t.value.length*(100/t.duration))}addWord(){const t=this.generateWord();this.fallingWords=[...this.fallingWords,t]}generateWord(){const t=Math.floor(Math.random()*this._wordsList.length),e=this._wordsList[t],n=this.randomPos();return{x:n,value:e,duration:10,id:e+n,timeout:setTimeout(this.loose.bind(this),1e4)}}loose(){this.state.send("end"),clearInterval(this._interval);for(let t of this.fallingWords)this.removeWord(t.value)}randomPos(){return this.randint(-100,100)}randint(t,e){const n=e-t;return Math.round(Math.random()*n)+t}registerWordsListener(t){this._wordsListener=t}registerScoreListener(t){this._scoreListener=t}}function ne(e){let n,r;return n=new St({props:{scores:ht()}}),n.$on("menu",e[2]),n.$on("playagain",e[3]),{c(){nt(n.$$.fragment)},m(t,e){rt(n,t,e),r=!0},p:t,i(t){r||(X(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){st(n,t)}}}function re(t){let e,n;return e=new _t({props:{game:t[1]}}),{c(){nt(e.$$.fragment)},m(t,r){rt(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.game=t[1]),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function se(e){let n,r;return n=new Lt({}),n.$on("click",e[5]),{c(){nt(n.$$.fragment)},m(t,e){rt(n,t,e),r=!0},p:t,i(t){r||(X(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){st(n,t)}}}function oe(t){let e,n,r,s;const o=[se,re,ne],i=[];function c(t,e){return"IDLE"==t[0]?0:"PLAYING"==t[0]?1:"FINISHED"==t[0]?2:-1}return~(e=c(t))&&(n=i[e]=o[e](t)),{c(){n&&n.c(),r=b()},m(t,n){~e&&i[e].m(t,n),p(t,r,n),s=!0},p(t,[s]){let l=e;e=c(t),e===l?~e&&i[e].p(t,s):(n&&(U(),K(i[l],1,1,(()=>{i[l]=null})),V()),~e?(n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),X(n,1),n.m(r.parentNode,r)):n=null)},i(t){s||(X(n),s=!0)},o(t){K(n),s=!1},d(t){~e&&i[e].d(t),t&&m(r)}}}function ie(t,e,n){let{wordsList:r}=e,s="IDLE";const o=t=>{n(0,s=t.machine.current),"FINISHED"==s&&function(t){const e=parseInt(localStorage.getItem("best"))||0,n=Math.max(t,e);localStorage.setItem("best",n.toString()),localStorage.setItem("last",t.toString())}(i.score)};let i=new ee(r,o);return t.$$set=t=>{"wordsList"in t&&n(4,r=t.wordsList)},[s,i,()=>{n(0,s="IDLE"),n(1,i=new ee(r,o))},()=>{n(1,i=new ee(r,o)),i.start()},r,()=>i.start()]}class ce extends ct{constructor(t){super(),it(this,t,ie,oe,i,{wordsList:4})}}function le(e){let n,r,s,o=e[2].message+"";return{c(){n=g("p"),r=$("An error occurred: "),s=$(o),_(n,"class","error svelte-1lpbqce")},m(t,e){p(t,n,e),h(n,r),h(n,s)},p:t,i:t,o:t,d(t){t&&m(n)}}}function ae(e){let n,r;return n=new ce({props:{wordsList:e[1]}}),{c(){nt(n.$$.fragment)},m(t,e){rt(n,t,e),r=!0},p:t,i(t){r||(X(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){st(n,t)}}}function ue(e){let n,r;return n=new ut({}),{c(){nt(n.$$.fragment)},m(t,e){rt(n,t,e),r=!0},p:t,i(t){r||(X(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){st(n,t)}}}function fe(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!0,pending:ue,then:ae,catch:le,value:1,error:2,blocks:[,,,]};return function(t,e){const n=e.token={};function r(t,r,s,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;void 0!==s&&(i=i.slice(),i[s]=o);const c=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(U(),K(t,1,1,(()=>{e.blocks[n]=null})),V())})):e.block.d(1),c.c(),X(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[r]=c),l&&z()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=j();if(t.then((t=>{C(n),r(e.then,1,e.value,t),C(null)}),(t=>{if(C(n),r(e.catch,2,e.error,t),C(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var s}(n=t[0],s),{c(){e=b(),s.block.c()},m(t,n){p(t,e,n),s.block.m(t,s.anchor=n),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(e,[n]){{const r=(t=e).slice();r[1]=r[2]=s.resolved,s.block.p(r,n)}},i(t){r||(X(s.block),r=!0)},o(t){for(let t=0;t<3;t+=1){K(s.blocks[t])}r=!1},d(t){t&&m(e),s.block.d(t),s.token=null,s=null}}}function de(t){return[dt()]}new class extends ct{constructor(t){super(),it(this,t,de,fe,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
