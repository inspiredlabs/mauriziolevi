var rt=Object.defineProperty,st=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Ce=(n,e,t)=>e in n?rt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,T=(n,e)=>{for(var t in e||(e={}))je.call(e,t)&&Ce(n,t,e[t]);if(de)for(var t of de(e))qe.call(e,t)&&Ce(n,t,e[t]);return n},se=(n,e)=>st(n,it(e));var ze=(n,e)=>{var t={};for(var s in n)je.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&de)for(var s of de(n))e.indexOf(s)<0&&qe.call(n,s)&&(t[s]=n[s]);return t};import{n as ye,s as et,S as ot,i as at,e as ct,c as lt,a as ft,d as q,b as ve,f as W,g as z,t as ut,h as dt,j as pt,k as _t,l as D,m as ht,o as F,p as N,q as G,r as V,u as mt,v as gt,w as ke,x as J,y as oe,z as K,A as ae,B as ce,C as B,D as le,E as Je}from"./chunks/index-61dfd0c0.js";import{i as wt}from"./chunks/singletons-d1fb5791.js";const H=[];function pe(n,e=ye){let t;const s=new Set;function l(r){if(et(n,r)&&(n=r,t)){const i=!H.length;for(const o of s)o[1](),H.push(o,n);if(i){for(let o=0;o<H.length;o+=2)H[o][0](H[o+1]);H.length=0}}}function a(r){l(r(n))}function f(r,i=ye){const o=[r,i];return s.add(o),s.size===1&&(t=e(l)||ye),r(n),()=>{s.delete(o),s.size===0&&(t(),t=null)}}return{set:l,update:a,subscribe:f}}let Ke="",tt="";function bt(n){Ke=n.base,tt=n.assets||Ke}function yt(n){let e,t,s;const l=[n[1]||{}];var a=n[0][0];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&J(e.$$.fragment),t=D()},l(r){e&&oe(e.$$.fragment,r),t=D()},m(r,i){e&&K(e,r,i),z(r,t,i),s=!0},p(r,i){const o=i&2?ae(l,[ce(r[1]||{})]):{};if(a!==(a=r[0][0])){if(e){F();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),G()}a?(e=new a(f()),J(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&V(e.$$.fragment,r),s=!0)},o(r){e&&N(e.$$.fragment,r),s=!1},d(r){r&&q(t),e&&B(e,r)}}}function vt(n){let e,t,s;const l=[n[1]||{}];var a=n[0][0];function f(r){let i={$$slots:{default:[Rt]},$$scope:{ctx:r}};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f(n))),{c(){e&&J(e.$$.fragment),t=D()},l(r){e&&oe(e.$$.fragment,r),t=D()},m(r,i){e&&K(e,r,i),z(r,t,i),s=!0},p(r,i){const o=i&2?ae(l,[ce(r[1]||{})]):{};if(i&525&&(o.$$scope={dirty:i,ctx:r}),a!==(a=r[0][0])){if(e){F();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),G()}a?(e=new a(f(r)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&V(e.$$.fragment,r),s=!0)},o(r){e&&N(e.$$.fragment,r),s=!1},d(r){r&&q(t),e&&B(e,r)}}}function Et(n){let e,t,s;const l=[n[2]||{}];var a=n[0][1];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&J(e.$$.fragment),t=D()},l(r){e&&oe(e.$$.fragment,r),t=D()},m(r,i){e&&K(e,r,i),z(r,t,i),s=!0},p(r,i){const o=i&4?ae(l,[ce(r[2]||{})]):{};if(a!==(a=r[0][1])){if(e){F();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),G()}a?(e=new a(f()),J(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&V(e.$$.fragment,r),s=!0)},o(r){e&&N(e.$$.fragment,r),s=!1},d(r){r&&q(t),e&&B(e,r)}}}function $t(n){let e,t,s;const l=[n[2]||{}];var a=n[0][1];function f(r){let i={$$slots:{default:[kt]},$$scope:{ctx:r}};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f(n))),{c(){e&&J(e.$$.fragment),t=D()},l(r){e&&oe(e.$$.fragment,r),t=D()},m(r,i){e&&K(e,r,i),z(r,t,i),s=!0},p(r,i){const o=i&4?ae(l,[ce(r[2]||{})]):{};if(i&521&&(o.$$scope={dirty:i,ctx:r}),a!==(a=r[0][1])){if(e){F();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),G()}a?(e=new a(f(r)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&V(e.$$.fragment,r),s=!0)},o(r){e&&N(e.$$.fragment,r),s=!1},d(r){r&&q(t),e&&B(e,r)}}}function kt(n){let e,t,s;const l=[n[3]||{}];var a=n[0][2];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&J(e.$$.fragment),t=D()},l(r){e&&oe(e.$$.fragment,r),t=D()},m(r,i){e&&K(e,r,i),z(r,t,i),s=!0},p(r,i){const o=i&8?ae(l,[ce(r[3]||{})]):{};if(a!==(a=r[0][2])){if(e){F();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),G()}a?(e=new a(f()),J(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&V(e.$$.fragment,r),s=!0)},o(r){e&&N(e.$$.fragment,r),s=!1},d(r){r&&q(t),e&&B(e,r)}}}function Rt(n){let e,t,s,l;const a=[$t,Et],f=[];function r(i,o){return i[0][2]?0:1}return e=r(n),t=f[e]=a[e](n),{c(){t.c(),s=D()},l(i){t.l(i),s=D()},m(i,o){f[e].m(i,o),z(i,s,o),l=!0},p(i,o){let d=e;e=r(i),e===d?f[e].p(i,o):(F(),N(f[d],1,1,()=>{f[d]=null}),G(),t=f[e],t?t.p(i,o):(t=f[e]=a[e](i),t.c()),V(t,1),t.m(s.parentNode,s))},i(i){l||(V(t),l=!0)},o(i){N(t),l=!1},d(i){f[e].d(i),i&&q(s)}}}function Be(n){let e,t=n[5]&&We(n);return{c(){e=ct("div"),t&&t.c(),this.h()},l(s){e=lt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ft(e);t&&t.l(l),l.forEach(q),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(s,l){z(s,e,l),t&&t.m(e,null)},p(s,l){s[5]?t?t.p(s,l):(t=We(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&q(e),t&&t.d()}}}function We(n){let e;return{c(){e=ut(n[6])},l(t){e=dt(t,n[6])},m(t,s){z(t,e,s)},p(t,s){s&64&&pt(e,t[6])},d(t){t&&q(e)}}}function Lt(n){let e,t,s,l,a;const f=[vt,yt],r=[];function i(d,R){return d[0][1]?0:1}e=i(n),t=r[e]=f[e](n);let o=n[4]&&Be(n);return{c(){t.c(),s=_t(),o&&o.c(),l=D()},l(d){t.l(d),s=ht(d),o&&o.l(d),l=D()},m(d,R){r[e].m(d,R),z(d,s,R),o&&o.m(d,R),z(d,l,R),a=!0},p(d,[R]){let y=e;e=i(d),e===y?r[e].p(d,R):(F(),N(r[y],1,1,()=>{r[y]=null}),G(),t=r[e],t?t.p(d,R):(t=r[e]=f[e](d),t.c()),V(t,1),t.m(s.parentNode,s)),d[4]?o?o.p(d,R):(o=Be(d),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i(d){a||(V(t),a=!0)},o(d){N(t),a=!1},d(d){r[e].d(d),d&&q(s),o&&o.d(d),d&&q(l)}}}function St(n,e,t){let{stores:s}=e,{page:l}=e,{components:a}=e,{props_0:f=null}=e,{props_1:r=null}=e,{props_2:i=null}=e;mt("__svelte__",s),gt(s.page.notify);let o=!1,d=!1,R=null;return ke(()=>{const y=s.page.subscribe(()=>{o&&(t(5,d=!0),t(6,R=document.title||"untitled page"))});return t(4,o=!0),y}),n.$$set=y=>{"stores"in y&&t(7,s=y.stores),"page"in y&&t(8,l=y.page),"components"in y&&t(0,a=y.components),"props_0"in y&&t(1,f=y.props_0),"props_1"in y&&t(2,r=y.props_1),"props_2"in y&&t(3,i=y.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(l)},[a,f,r,i,o,d,R,s,l]}class At extends ot{constructor(e){super(),at(this,e,St,Lt,et,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Ot="modulepreload",Ye={},Ut="/_app/",j=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Ut}${s}`,s in Ye)return;Ye[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Ot,l||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),l)return new Promise((r,i)=>{f.addEventListener("load",r),f.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Pt={},Le=[()=>j(()=>import("./pages/__layout.svelte-defee512.js"),["pages/__layout.svelte-defee512.js","assets/pages/__layout.svelte-9885a0f9.css","chunks/index-61dfd0c0.js","chunks/useViewportAction-c4bd98f4.js","chunks/Row-29e34956.js","chunks/Defs-998264ba.js","chunks/singletons-d1fb5791.js","chunks/stores-fd14d657.js"]),()=>j(()=>import("./error.svelte-ba3f8839.js"),["error.svelte-ba3f8839.js","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/_slug_.svelte-d5374bf7.js"),["pages/_slug_.svelte-d5374bf7.js","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/destinations/_id_.svelte-ff877ad5.js"),["pages/destinations/_id_.svelte-ff877ad5.js","chunks/index-61dfd0c0.js","chunks/stores-fd14d657.js","chunks/Row-29e34956.js","chunks/index-c5b594f4.js","assets/index-b12d75c8.css","chunks/Zed-49e614ae.js","assets/Zed-a33945b5.css"]),()=>j(()=>import("./pages/index.svelte-93fb2bd6.js"),["pages/index.svelte-93fb2bd6.js","assets/pages/index.svelte-1175413d.css","chunks/index-61dfd0c0.js","chunks/Defs-998264ba.js","chunks/Zed-49e614ae.js","assets/Zed-a33945b5.css","chunks/Row-29e34956.js","chunks/index-c5b594f4.js","assets/index-b12d75c8.css","chunks/SwapMontage-09e5b77b.js","assets/SwapMontage-f6943ba6.css","chunks/useViewportAction-c4bd98f4.js"]),()=>j(()=>import("./pages/nations/_id_.svelte-267d3de2.js"),["pages/nations/_id_.svelte-267d3de2.js","chunks/index-61dfd0c0.js","chunks/stores-fd14d657.js","chunks/Row-29e34956.js","chunks/index-c5b594f4.js","assets/index-b12d75c8.css","chunks/SwapMontage-09e5b77b.js","assets/SwapMontage-f6943ba6.css","chunks/useViewportAction-c4bd98f4.js","chunks/Zed-49e614ae.js","assets/Zed-a33945b5.css"]),()=>j(()=>import("./pages/sirv/_slug_.svelte-58f87d49.js"),["pages/sirv/_slug_.svelte-58f87d49.js","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/sirv/index.svelte-6d5d2db7.js"),["pages/sirv/index.svelte-6d5d2db7.js","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/table/index.svelte-3e90c343.js"),["pages/table/index.svelte-3e90c343.js","assets/pages/table/index.svelte-2b54e02e.css","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/terms/index.svelte-15bb20bf.js"),["pages/terms/index.svelte-15bb20bf.js","chunks/index-61dfd0c0.js"]),()=>j(()=>import("./pages/trip/_id_.svelte-61112bb5.js"),["pages/trip/_id_.svelte-61112bb5.js","assets/pages/trip/_id_.svelte-079c3aee.css","chunks/index-61dfd0c0.js","chunks/index-c5b594f4.js","assets/index-b12d75c8.css"])],It={"":[[0,4],[1],1],sirv:[[0,7],[1]],table:[[0,8],[1]],terms:[[0,9],[1],1],"destinations/[id]":[[0,3],[1]],"nations/[id]":[[0,5],[1]],"sirv/[slug]":[[0,6],[1]],"trip/[id]":[[0,10],[1]],"[slug]":[[0,2],[1]]};function Me(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Fe(n){if(n.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in n)throw new Error("maxage should be replaced with cache: { maxage }");const e=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||e){const t=n.status;if(!n.error&&e)return{status:t||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:t,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.dependencies&&(!Array.isArray(n.dependencies)||n.dependencies.some(t=>typeof t!="string")))return{status:500,error:new Error('"dependencies" property returned from load() must be of type string[]')};if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Tt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function Dt(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}function Ge(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Xe(n){return n.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function Ze(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}function He(n){const e=pe(n);let t=!0;function s(){t=!0,e.update(f=>f)}function l(f){t=!1,e.set(f)}function a(f){let r;return e.subscribe(i=>{(r===void 0||t&&i!==r)&&f(r=i)})}return{notify:s,set:l,subscribe:a}}function Nt(){const{set:n,subscribe:e}=pe(!1),t="1655755073345";let s;async function l(){clearTimeout(s);const f=await fetch(`${tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(f.ok){const{version:r}=await f.json(),i=r!==t;return i&&(n(!0),clearTimeout(s)),i}else throw new Error(`Version check failed: ${f.status}`)}return{subscribe:e,check:l}}function Vt(n,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${Dt(e.body)}"]`);const l=document.querySelector(s);if(l&&l.textContent){const a=JSON.parse(l.textContent),{body:f}=a,r=ze(a,["body"]);return Promise.resolve(new Response(f,r))}return fetch(n,e)}const xt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function Ct(n){const e=[],t=[];let s=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${decodeURIComponent(n).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((a,f,r)=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return e.push(i[1]),t.push(i[2]),"(?:/(.*))?";const o=f===r.length-1;return a&&"/"+a.split(/\[(.+?)\]/).map((d,R)=>{if(R%2){const[,y,Q,X]=xt.exec(d);return e.push(Q),t.push(X),y?"(.*?)":"([^/]+?)"}return o&&d.includes(".")&&(s=!1),d.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:t}}function jt(n,e,t,s){const l={};for(let a=0;a<e.length;a+=1){const f=e[a],r=t[a],i=n[a+1]||"";if(r){const o=s[r];if(!o)throw new Error(`Missing "${r}" param matcher`);if(!o(i))return}l[f]=i}return l}function qt(n,e,t){return Object.entries(e).map(([l,[a,f,r]])=>{const{pattern:i,names:o,types:d}=Ct(l);return{id:l,exec:R=>{const y=i.exec(R);if(y)return jt(y,o,d,t)},a:a.map(R=>n[R]),b:f.map(R=>n[R]),has_shadow:!!r}})}const nt="sveltekit:scroll",Y="sveltekit:index",Ee=qt(Le,It,Pt),zt=Le[0](),Jt=Le[1](),Qe={};let ie={};try{ie=JSON.parse(sessionStorage[nt])}catch{}function $e(n){ie[n]=Re()}function Kt({target:n,session:e,base:t,trailing_slash:s}){var Ve;const l=new Map,a=[],f={url:He({}),page:He({}),navigating:pe(null),session:pe(e),updated:Nt()},r={id:null,promise:null},i={before_navigate:[],after_navigate:[]};let o={branch:[],error:null,session_id:0,stuff:Qe,url:null},d=!1,R=!0,y=!1,Q=1,X=null,Se,Ae,Oe=!1;f.session.subscribe(async c=>{Ae=c,Oe&&(Q+=1,ge(new URL(location.href),[],!0))}),Oe=!0;let Z=!0,x=(Ve=history.state)==null?void 0:Ve[Y];x||(x=Date.now(),history.replaceState(se(T({},history.state),{[Y]:x}),"",location.href));const _e=ie[x];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let he=!1,me,Ue;async function Pe(c,{noscroll:p=!1,replaceState:w=!1,keepfocus:u=!1,state:_={}},b){const h=new URL(c,Ge(document));if(Z)return be({url:h,scroll:p?Re():null,keepfocus:u,redirect_chain:b,details:{state:_,replaceState:w},accepted:()=>{},blocked:()=>{}});await ne(h)}async function Ie(c){const p=Ne(c);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=De(p,!1),r.id=p.id,r.promise}async function ge(c,p,w,u){var g,E,L;const _=Ne(c),b=Ue={};let h=_&&await De(_,w);if(!h&&c.origin===location.origin&&c.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!h)return await ne(c),!1;if(Ue!==b)return!1;if(a.length=0,h.redirect)if(p.length>10||p.includes(c.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return Z?Pe(new URL(h.redirect,c).href,{},[...p,c.pathname]):await ne(new URL(h.redirect,location.href)),!1;else((E=(g=h.props)==null?void 0:g.page)==null?void 0:E.status)>=400&&await f.updated.check()&&await ne(c);if(y=!0,u&&u.details){const{details:$}=u,k=$.replaceState?0:1;$.state[Y]=x+=k,history[$.replaceState?"replaceState":"pushState"]($.state,"",c)}if(d?(o=h.state,Se.$set(h.props)):Te(h),u){const{scroll:$,keepfocus:k}=u;if(!k){const m=document.body,O=m.getAttribute("tabindex");(L=getSelection())==null||L.removeAllRanges(),m.tabIndex=-1,m.focus(),O!==null?m.setAttribute("tabindex",O):m.removeAttribute("tabindex")}if(await Je(),R){const m=c.hash&&document.getElementById(c.hash.slice(1));$?scrollTo($.x,$.y):m?m.scrollIntoView():scrollTo(0,0)}}else await Je();r.promise=null,r.id=null,R=!0,y=!1,h.props.page&&(me=h.props.page);const v=h.state.branch[h.state.branch.length-1];return Z=(v==null?void 0:v.module.router)!==!1,!0}function Te(c){o=c.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),me=c.props.page,Se=new At({target:n,props:se(T({},c.props),{stores:f}),hydrate:!0}),d=!0,Z){const w={from:null,to:new URL(location.href)};i.after_navigate.forEach(u=>u(w))}}async function we({url:c,params:p,stuff:w,branch:u,status:_,error:b,routeId:h}){var m,O;const v=u.filter(Boolean),g=v.find(A=>{var P;return(P=A.loaded)==null?void 0:P.redirect}),E={redirect:(m=g==null?void 0:g.loaded)==null?void 0:m.redirect,state:{url:c,params:p,branch:u,error:b,stuff:w,session_id:Q},props:{components:v.map(A=>A.module.default)}};for(let A=0;A<v.length;A+=1){const P=v[A].loaded;E.props[`props_${A}`]=P?await P.props:null}if(!o.url||c.href!==o.url.href||o.error!==b||o.stuff!==w){E.props.page={error:b,params:p,routeId:h,status:_,stuff:w,url:c};const A=(P,S)=>{Object.defineProperty(E.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${S}`)}})};A("origin","origin"),A("path","pathname"),A("query","searchParams")}const $=v[v.length-1],k=(O=$==null?void 0:$.loaded)==null?void 0:O.cache;if(k){const A=c.pathname+c.search;let P=!1;const S=()=>{l.get(A)===E&&l.delete(A),I(),clearTimeout(U)},U=setTimeout(S,k.maxage*1e3),I=f.session.subscribe(()=>{P&&S()});P=!0,l.set(A,E)}return E}async function ee({status:c,error:p,module:w,url:u,params:_,stuff:b,props:h,routeId:v}){const g={module:w,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:b};function E(k){const{href:m}=new URL(k,u);g.uses.dependencies.add(m)}h&&g.uses.dependencies.add(u.href);const L={};for(const k in _)Object.defineProperty(L,k,{get(){return g.uses.params.add(k),_[k]},enumerable:!0});const $=Ae;if(w.load){const k={routeId:v,params:L,props:h||{},get url(){return g.uses.url=!0,u},get session(){return g.uses.session=!0,$},get stuff(){return g.uses.stuff=!0,T({},b)},fetch(O,A){const P=typeof O=="string"?O:O.url;return E(P),d?fetch(O,A):Vt(O,A)},status:c!=null?c:null,error:p!=null?p:null},m=await w.load.call(null,k);if(!m)throw new Error("load function must return a value");g.loaded=Fe(m),g.loaded.stuff&&(g.stuff=g.loaded.stuff),g.loaded.dependencies&&g.loaded.dependencies.forEach(E)}else h&&(g.loaded=Fe({props:h}));return g}async function De({id:c,url:p,params:w,route:u},_){var O,A,P;if(r.id===c&&r.promise)return r.promise;if(!_){const S=l.get(c);if(S)return S}const{a:b,b:h,has_shadow:v}=u,g=o.url&&{url:c!==o.url.pathname+o.url.search,params:Object.keys(w).filter(S=>o.params[S]!==w[S]),session:Q!==o.session_id};let E=[],L=Qe,$=!1,k=200,m=null;b.forEach(S=>S());e:for(let S=0;S<b.length;S+=1){let U;try{if(!b[S])continue;const I=await b[S](),C=o.branch[S];if(!C||I!==C.module||g.url&&C.uses.url||g.params.some(M=>C.uses.params.has(M))||g.session&&C.uses.session||Array.from(C.uses.dependencies).some(M=>a.some(ue=>ue(M)))||$&&C.uses.stuff){let M={};const ue=v&&S===b.length-1;if(ue){const re=await fetch(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-load":"true"}});if(re.ok){const xe=re.headers.get("x-sveltekit-location");if(xe)return{redirect:xe,props:{},state:o};M=re.status===204?{}:await re.json()}else k=re.status,m=new Error("Failed to load data")}if(m||(U=await ee({module:I,url:p,params:w,props:M,stuff:L,routeId:u.id})),U&&(ue&&(U.uses.url=!0),U.loaded)){if(U.loaded.error&&(k=U.loaded.status,m=U.loaded.error),U.loaded.redirect)return{redirect:U.loaded.redirect,props:{},state:o};U.loaded.stuff&&($=!0)}}else U=C}catch(I){k=500,m=Me(I)}if(m){for(;S--;)if(h[S]){let I,C,fe=S;for(;!(C=E[fe]);)fe-=1;try{if(I=await ee({status:k,error:m,module:await h[S](),url:p,params:w,stuff:C.stuff,routeId:u.id}),(O=I==null?void 0:I.loaded)!=null&&O.error)continue;(A=I==null?void 0:I.loaded)!=null&&A.stuff&&(L=T(T({},L),I.loaded.stuff)),E=E.slice(0,fe+1).concat(I);break e}catch{continue}}return await te({status:k,error:m,url:p,routeId:u.id})}else(P=U==null?void 0:U.loaded)!=null&&P.stuff&&(L=T(T({},L),U.loaded.stuff)),E.push(U)}return await we({url:p,params:w,stuff:L,branch:E,status:k,error:m,routeId:u.id})}async function te({status:c,error:p,url:w,routeId:u}){var v,g;const _={},b=await ee({module:await zt,url:w,params:_,stuff:{},routeId:u}),h=await ee({status:c,error:p,module:await Jt,url:w,params:_,stuff:b&&b.loaded&&b.loaded.stuff||{},routeId:u});return await we({url:w,params:_,stuff:T(T({},(v=b==null?void 0:b.loaded)==null?void 0:v.stuff),(g=h==null?void 0:h.loaded)==null?void 0:g.stuff),branch:[b,h],status:c,error:p,routeId:u})}function Ne(c){if(c.origin!==location.origin||!c.pathname.startsWith(t))return;const p=decodeURI(c.pathname.slice(t.length)||"/");for(const w of Ee){const u=w.exec(p);if(u)return{id:c.pathname+c.search,route:w,params:u,url:c}}}async function be({url:c,scroll:p,keepfocus:w,redirect_chain:u,details:_,accepted:b,blocked:h}){const v=o.url;let g=!1;const E={from:v,to:c,cancel:()=>g=!0};if(i.before_navigate.forEach(m=>m(E)),g){h();return}const L=Tt(c.pathname,s),$=new URL(c.origin+L+c.search+c.hash);if($e(x),b(),d&&f.navigating.set({from:o.url,to:$}),await ge($,u,!1,{scroll:p,keepfocus:w,details:_})){const m={from:v,to:$};i.after_navigate.forEach(O=>O(m)),f.navigating.set(null)}}function ne(c){return location.href=c.href,new Promise(()=>{})}return{after_navigate:c=>{ke(()=>(i.after_navigate.push(c),()=>{const p=i.after_navigate.indexOf(c);i.after_navigate.splice(p,1)}))},before_navigate:c=>{ke(()=>(i.before_navigate.push(c),()=>{const p=i.before_navigate.indexOf(c);i.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(y||!d)&&(R=!1)},goto:(c,p={})=>Pe(c,p,[]),invalidate:c=>{if(typeof c=="function")a.push(c);else{const{href:p}=new URL(c,location.href);a.push(w=>w===p)}return X||(X=Promise.resolve().then(async()=>{await ge(new URL(location.href),[],!0),X=null})),X},prefetch:async c=>{const p=new URL(c,Ge(document));await Ie(p)},prefetch_routes:async c=>{const w=(c?Ee.filter(u=>c.some(_=>u.exec(_))):Ee).map(u=>Promise.all(u.a.map(_=>_())));await Promise.all(w)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let _=!1;const b={from:o.url,to:null,cancel:()=>_=!0};i.before_navigate.forEach(h=>h(b)),_?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(x);try{sessionStorage[nt]=JSON.stringify(ie)}catch{}}});const c=u=>{const _=Xe(u);_&&_.href&&_.hasAttribute("sveltekit:prefetch")&&Ie(Ze(_))};let p;const w=u=>{clearTimeout(p),p=setTimeout(()=>{var _;(_=u.target)==null||_.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",c),addEventListener("mousemove",w),addEventListener("sveltekit:trigger_prefetch",c),addEventListener("click",u=>{if(!Z||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const _=Xe(u);if(!_||!_.href)return;const b=_ instanceof SVGAElement,h=Ze(_);if(!b&&h.origin==="null")return;const v=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||v.includes("external")||_.hasAttribute("sveltekit:reload")||(b?_.target.baseVal:_.target))return;const[g,E]=h.href.split("#");if(E!==void 0&&g===location.href.split("#")[0]){he=!0,$e(x),f.page.set(se(T({},me),{url:h})),f.page.notify();return}be({url:h,scroll:_.hasAttribute("sveltekit:noscroll")?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&Z){if(u.state[Y]===x)return;be({url:new URL(location.href),scroll:ie[u.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=u.state[Y]},blocked:()=>{const _=x-u.state[Y];history.go(_)}})}}),addEventListener("hashchange",()=>{he&&(he=!1,history.replaceState(se(T({},history.state),{[Y]:++x}),"",location.href))})},_hydrate:async({status:c,error:p,nodes:w,params:u,routeId:_})=>{const b=new URL(location.href),h=[];let v={},g,E;try{for(let L=0;L<w.length;L+=1){const $=L===w.length-1;let k;if($){const O=document.querySelector('script[sveltekit\\:data-type="props"]');O&&(k=JSON.parse(O.textContent))}const m=await ee({module:await w[L],url:b,params:u,stuff:v,status:$?c:void 0,error:$?p:void 0,props:k,routeId:_});if(k&&(m.uses.dependencies.add(b.href),m.uses.url=!0),h.push(m),m&&m.loaded)if(m.loaded.error){if(p)throw m.loaded.error;E={status:m.loaded.status,error:m.loaded.error,url:b,routeId:_}}else m.loaded.stuff&&(v=T(T({},v),m.loaded.stuff))}g=E?await te(E):await we({url:b,params:u,stuff:v,branch:h,status:c,error:p,routeId:_})}catch(L){if(p)throw L;g=await te({status:500,error:Me(L),url:b,routeId:_})}g.redirect&&await ne(new URL(g.redirect,location.href)),Te(g)}}}async function Mt({paths:n,target:e,session:t,route:s,spa:l,trailing_slash:a,hydrate:f}){const r=Kt({target:e,session:t,base:n.base,trailing_slash:a});wt({client:r}),bt(n),f&&await r._hydrate(f),s&&(l&&r.goto(location.href,{replaceState:!0}),r._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Mt as start};
