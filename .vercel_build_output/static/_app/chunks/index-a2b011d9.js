function g(){}const X=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(Y)}function q(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function zt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Gt(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,l){if(r){const s=Z(e,n,i,l);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qt(t){return t&&q(t.destroy)?t.destroy:g}const tt=typeof window!="undefined";let et=tt?()=>window.performance.now():()=>Date.now(),F=tt?t=>requestAnimationFrame(t):g;const x=new Set;function nt(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(nt)}function it(t){let e;return x.size===0&&F(nt),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let D=!1;function xt(){D=!0}function bt(){D=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:$t(1,r,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,r=Math.max(u,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(s[c],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=G("style");return Et(rt(t),e),e.sheet}function Et(t,e){vt(t.head||t,e)}function At(t,e){if(D){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function Tt(t,e,n){D&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Vt(){return I(" ")}function Xt(){return I("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function St(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,r=!1){ct(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return lt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ee(t,e,n){return ot(t,e,n,G)}function ne(t,e,n){return ot(t,e,n,st)}function Ct(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function ie(t){return Ct(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function re(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);ct(t);const r=t.splice(n,i-n+1);M(r[0]),M(r[r.length-1]);const l=r.slice(1,r.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(l,e)}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e=document.body){return Array.from(e.querySelectorAll(t))}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class Q extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}}const H=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:kt(e),rules:{}};return H.set(t,n),n}function ut(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const N=e+(n-e)*l(m);a+=m*100+`%{${s(N,1-N)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Mt(f)}_${o}`,_=rt(t),{stylesheet:d,rules:h}=H.get(_)||Ht(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,L+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Lt())}function Lt(){F(()=>{L||(H.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),H.clear())})}let k;function v(t){k=t}function A(){if(!k)throw new Error("Function called outside component initialization");return k}function ae(t){A().$$.on_mount.push(t)}function ue(t){A().$$.after_update.push(t)}function fe(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function _e(t,e){return A().$$.context.set(t,e),e}function de(t){return A().$$.context.get(t)}function he(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],U=[],C=[],V=[],ft=Promise.resolve();let z=!1;function _t(){z||(z=!0,ft.then(dt))}function me(){return _t(),ft}function E(t){C.push(t)}const O=new Set;let S=0;function dt(){const t=k;do{for(;S<w.length;){const e=w[S];S++,v(e),Rt(e.$$)}for(v(null),w.length=0,S=0;U.length;)U.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(w.length);for(;V.length;)V.pop()();z=!1,O.clear(),v(t)}function Rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function ht(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function pe(){y={r:0,c:[],p:y}}function ye(){y.r||b(y.c),y=y.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ge(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const mt={duration:0};function xe(t,e,n){let i=e(t,n),r=!1,l,s,o=0;function c(){l&&B(t,l)}function a(){const{delay:u=0,duration:_=300,easing:d=X,tick:h=g,css:p}=i||mt;p&&(l=ut(t,0,1,_,u,d,p,o++)),h(0,1);const m=et()+u,N=m+_;s&&s.abort(),r=!0,E(()=>R(t,!0,"start")),s=it(P=>{if(r){if(P>=N)return h(1,0),R(t,!0,"end"),c(),r=!1;if(P>=m){const W=d((P-m)/_);h(W,1-W)}}return r})}let f=!1;return{start(){f||(f=!0,B(t),q(i)?(i=i(),ht().then(a)):a())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function be(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function o(){const{delay:c=0,duration:a=300,easing:f=X,tick:u=g,css:_}=i||mt;_&&(l=ut(t,1,0,a,c,f,_));const d=et()+c,h=d+a;E(()=>R(t,!1,"start")),it(p=>{if(r){if(p>=h)return u(0,1),R(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/a);u(1-m,m)}}return r})}return q(i)?ht().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&B(t,l),r=!1)}}}function $e(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function we(t){return typeof t=="object"&&t!==null?t:{}}function ve(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||E(()=>{const c=l.map(Y).filter(q);s?s.push(...c):b(c),t.$$.on_mount=[]}),o.forEach(E)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,r,l,s,o=[-1]){const c=k;v(t);const a=t.$$={fragment:null,ctx:null,props:l,update:g,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Ot(t,u)),_}):[],a.update(),f=!0,b(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){xt();const u=St(e.target);a.fragment&&a.fragment.l(u),u.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),bt(),dt()}v(c)}class Ae{$destroy(){Pt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,$e as A,we as B,Pt as C,pt as D,me as E,X as F,Wt as G,Jt as H,It as I,E as J,xe as K,be as L,Gt as M,zt as N,At as O,Qt as P,Yt as Q,b as R,Ae as S,st as T,ne as U,te as V,Ut as W,le as X,Ft as Y,de as Z,oe as _,St as a,Kt as a0,he as a1,Q as a2,re as a3,U as a4,Zt as b,ee as c,M as d,G as e,ce as f,Tt as g,Ct as h,Ee as i,se as j,Vt as k,Xt as l,ie as m,g as n,pe as o,ge as p,ye as q,qt as r,Bt as s,I as t,_e as u,ue as v,ae as w,ve as x,ke as y,Dt as z};