import{S as b,i as k,s as y,e as v,k as S,c as w,m as B,b as u,N as E,f as d,g as f,d as m,a as I,P as R,Q as h,n as g,W as V,R as G}from"./index-a2b011d9.js";import{v as M}from"./useViewportAction-c4bd98f4.js";function A(r,e,s){const i=r.slice();return i[5]=e[s],i}function p(r){let e,s,i,o,n;return{c(){e=v("img"),n=S(),this.h()},l(t){e=w(t,"IMG",{alt:!0,title:!0,src:!0,class:!0,style:!0}),n=B(t),this.h()},h(){u(e,"alt",s=r[5]),u(e,"title",i=r[5]),E(e.src,o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")||u(e,"src",o),u(e,"class","shadow-5 mr-auto ml-auto svelte-bvi8mn"),d(e,"background-image","url('https://viaggilevi.vercel.app/images/king-lewanika-lodge-liuwa-plain-national-park.webp')")},m(t,l){f(t,e,l),f(t,n,l)},p(t,l){l&1&&s!==(s=t[5])&&u(e,"alt",s),l&1&&i!==(i=t[5])&&u(e,"title",i)},d(t){t&&m(e),t&&m(n)}}}function q(r){let e,s,i,o,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=p(A(r,n,l));return{c(){e=v("figure");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=w(l,"FIGURE",{class:!0,style:!0});var c=I(e);for(let a=0;a<t.length;a+=1)t[a].l(c);c.forEach(m),this.h()},h(){u(e,"class",s="w-100 swap "+(r[1]?"visible":"")+" cf relative top-0 mr-auto ml-auto svelte-bvi8mn"),d(e,"height","100vh")},m(l,c){f(l,e,c);for(let a=0;a<t.length;a+=1)t[a].m(e,null);i||(o=[R(M.call(null,e)),h(e,"enterViewport",r[2]),h(e,"exitViewport",r[3])],i=!0)},p(l,[c]){if(c&1){n=l[0];let a;for(a=0;a<n.length;a+=1){const _=A(l,n,a);t[a]?t[a].p(_,c):(t[a]=p(_),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}c&2&&s!==(s="w-100 swap "+(l[1]?"visible":"")+" cf relative top-0 mr-auto ml-auto svelte-bvi8mn")&&u(e,"class",s)},i:g,o:g,d(l){l&&m(e),V(t,l),i=!1,G(o)}}}function P(r,e,s){let{images:i}=e,o;const n=()=>s(1,o=!0),t=()=>s(1,o=!1);return r.$$set=l=>{"images"in l&&s(0,i=l.images)},[i,o,n,t]}class D extends b{constructor(e){super(),k(this,e,P,q,y,{images:0})}}export{D as S};
