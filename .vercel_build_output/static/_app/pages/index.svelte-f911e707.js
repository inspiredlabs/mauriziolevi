import{S as G,i as N,s as Q,e as S,t as R,P as V,k as L,c as k,a as E,h as j,Q as A,m as b,d as _,g as $,G as w,x as z,y as H,R as F,b as Z,z as I,r as v,p as P,C as O,O as B,o as J,q as K}from"../chunks/index-09775ba2.js";import{S as W}from"../chunks/Snapper-87feb552.js";import{p as X,L as Y,Z as y}from"../chunks/Zed-fbfa7e01.js";import{R as x}from"../chunks/Row-8b6dafdf.js";function q(f,t,s){const e=f.slice();return e[8]=t[s],e[10]=s,e}function M(f,t,s){const e=f.slice();return e[11]=t[s].cta,e[12]=t[s].excerpt,e[13]=t[s].image,e[14]=t[s].length,e[15]=t[s].starting_price,e[16]=t[s].title,e[10]=s,e}function T(f){let t,s;return t=new y({props:{length:f[14],title:f[16],excerpt:f[12],cta:f[11],image:f[13],starting_price:f[15]}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,g){I(t,e,g),s=!0},p(e,g){const i={};g&4&&(i.length=e[14]),g&4&&(i.title=e[16]),g&4&&(i.excerpt=e[12]),g&4&&(i.cta=e[11]),g&4&&(i.image=e[13]),g&4&&(i.starting_price=e[15]),t.$set(i)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){P(t.$$.fragment,e),s=!1},d(e){O(t,e)}}}function ee(f){let t,s,e,g,i=f[2],r=[];for(let l=0;l<i.length;l+=1)r[l]=T(M(f,i,l));const p=l=>P(r[l],1,1,()=>{r[l]=null});return e=new Y({props:{totalItems:f[3].length,pageSize:D,currentPage:f[1],limit:1,showStepOptions:!0}}),e.$on("setPage",f[5]),{c(){t=S("ul");for(let l=0;l<r.length;l+=1)r[l].c();s=L(),z(e.$$.fragment),this.h()},l(l){t=k(l,"UL",{class:!0});var c=E(t);for(let o=0;o<r.length;o+=1)r[o].l(c);c.forEach(_),s=b(l),H(e.$$.fragment,l),this.h()},h(){Z(t,"class","items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l")},m(l,c){$(l,t,c);for(let o=0;o<r.length;o+=1)r[o].m(t,null);$(l,s,c),I(e,l,c),g=!0},p(l,c){if(c&4){i=l[2];let a;for(a=0;a<i.length;a+=1){const n=M(l,i,a);r[a]?(r[a].p(n,c),v(r[a],1)):(r[a]=T(n),r[a].c(),v(r[a],1),r[a].m(t,null))}for(J(),a=i.length;a<r.length;a+=1)p(a);K()}const o={};c&2&&(o.currentPage=l[1]),e.$set(o)},i(l){if(!g){for(let c=0;c<i.length;c+=1)v(r[c]);v(e.$$.fragment,l),g=!0}},o(l){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)P(r[c]);P(e.$$.fragment,l),g=!1},d(l){l&&_(t),B(r,l),l&&_(s),O(e,l)}}}function C(f){let t,s,e,g,i=f[8].titolo_viaggio.replace(/\\r/g,"").replace(/\\n/g,"").replace(/\\"/g,"")+"",r,p,l=f[8].testo_per_sito.replace(/\\r/g,"").replace(/\\n/g,"").replace(/\\"/g,"")+"",c;return{c(){t=S("li"),s=R(f[10]),e=R(`:
        `),g=new V(!1),r=L(),p=S("p"),c=L(),this.h()},l(o){t=k(o,"LI",{});var a=E(t);s=j(a,f[10]),e=j(a,`:
        `),g=A(a,!1),r=b(a),p=k(a,"P",{});var n=E(p);n.forEach(_),c=b(a),a.forEach(_),this.h()},h(){g.a=r},m(o,a){$(o,t,a),w(t,s),w(t,e),g.m(i,t),w(t,r),w(t,p),p.innerHTML=l,w(t,c)},p(o,a){a&1&&i!==(i=o[8].titolo_viaggio.replace(/\\r/g,"").replace(/\\n/g,"").replace(/\\"/g,"")+"")&&g.p(i),a&1&&l!==(l=o[8].testo_per_sito.replace(/\\r/g,"").replace(/\\n/g,"").replace(/\\"/g,"")+"")&&(p.innerHTML=l)},d(o){o&&_(t)}}}function te(f){let t,s,e,g,i,r,p,l,c;t=new W({}),e=new x({props:{bg:"bg-linen",$$slots:{default:[ee]},$$scope:{ctx:f}}});let o=f[0],a=[];for(let n=0;n<o.length;n+=1)a[n]=C(q(f,o,n));return document.title=l=U,{c(){z(t.$$.fragment),s=L(),z(e.$$.fragment),g=L(),i=S("div"),r=S("ul");for(let n=0;n<a.length;n+=1)a[n].c();p=L(),this.h()},l(n){H(t.$$.fragment,n),s=b(n),H(e.$$.fragment,n),g=b(n),i=k(n,"DIV",{class:!0});var u=E(i);r=k(u,"UL",{});var h=E(r);for(let d=0;d<a.length;d+=1)a[d].l(h);h.forEach(_),u.forEach(_),p=b(n),F('[data-svelte="svelte-1258swp"]',document.head).forEach(_),this.h()},h(){Z(i,"class","measure-wide")},m(n,u){I(t,n,u),$(n,s,u),I(e,n,u),$(n,g,u),$(n,i,u),w(i,r);for(let h=0;h<a.length;h+=1)a[h].m(r,null);$(n,p,u),c=!0},p(n,[u]){const h={};if(u&262150&&(h.$$scope={dirty:u,ctx:n}),e.$set(h),u&1){o=n[0];let m;for(m=0;m<o.length;m+=1){const d=q(n,o,m);a[m]?a[m].p(d,u):(a[m]=C(d),a[m].c(),a[m].m(r,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=o.length}(!c||u&65536)&&l!==(l=U)&&(document.title=l)},i(n){c||(v(t.$$.fragment,n),v(e.$$.fragment,n),c=!0)},o(n){P(t.$$.fragment,n),P(e.$$.fragment,n),c=!1},d(n){O(t,n),n&&_(s),O(e,n),n&&_(g),n&&_(i),B(a,n),n&&_(p)}}}const oe=!0;let U="Maurizio Levi",D=3;function le(f,t,s){let e,{homepage:g}=t,{spotLight:i}=t;Object.values(g.travels_in_evidence.travels);let p=Object.values(g.departing_travels.travels),l=1;const c=o=>s(1,l=o.detail.page);return f.$$set=o=>{"homepage"in o&&s(4,g=o.homepage),"spotLight"in o&&s(0,i=o.spotLight)},f.$$.update=()=>{f.$$.dirty&2&&s(2,e=X({items:p,pageSize:D,currentPage:l}))},[i,l,e,p,g,c]}class ie extends G{constructor(t){super(),N(this,t,le,te,Q,{homepage:4,spotLight:0})}}export{ie as default,oe as prerender};