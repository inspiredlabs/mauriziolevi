import{S as G,i as I,s as Q,e as _,t as g,k as L,c as m,a as b,h as E,d as r,m as N,b as P,g as O,G as f,j as F,n as q,Q as U}from"../../chunks/index-4f674e2a.js";function A(h,l,s){const t=h.slice();return t[1]=l[s],t}function B(h){let l,s,t=h[1].title+"",d,u,v;return{c(){l=_("li"),s=_("a"),d=g(t),v=L(),this.h()},l(o){l=m(o,"LI",{});var n=b(l);s=m(n,"A",{href:!0});var p=b(s);d=E(p,t),p.forEach(r),v=N(n),n.forEach(r),this.h()},h(){P(s,"href",u=h[1].id)},m(o,n){O(o,l,n),f(l,s),f(s,d),f(l,v)},p(o,n){n&1&&t!==(t=o[1].title+"")&&F(d,t),n&1&&u!==(u=o[1].id)&&P(s,"href",u)},d(o){o&&r(l)}}}function z(h){let l,s,t,d,u,v,o,n,p,C,D,k,y,S=JSON.stringify(h[0],null,2)+"",x,w=h[0],i=[];for(let e=0;e<w.length;e+=1)i[e]=B(A(h,w,e));return{c(){l=_("ul");for(let e=0;e<i.length;e+=1)i[e].c();s=L(),t=_("p"),d=g("This route is served from "),u=_("code"),v=g("`src/static/...`"),o=g(", it's fragile because the data can be written in a non-valid way too easily on the local filesystem: "),n=_("br"),p=_("code"),C=g("`https://viaggilevi.vercel.app/data/destinations.json`"),D=g(", can cause the repo to crash the server if comments are added for example."),k=L(),y=_("pre"),x=g(S),this.h()},l(e){l=m(e,"UL",{});var c=b(l);for(let J=0;J<i.length;J+=1)i[J].l(c);c.forEach(r),s=N(e),t=m(e,"P",{class:!0});var a=b(t);d=E(a,"This route is served from "),u=m(a,"CODE",{});var j=b(u);v=E(j,"`src/static/...`"),j.forEach(r),o=E(a,", it's fragile because the data can be written in a non-valid way too easily on the local filesystem: "),n=m(a,"BR",{}),p=m(a,"CODE",{});var R=b(p);C=E(R,"`https://viaggilevi.vercel.app/data/destinations.json`"),R.forEach(r),D=E(a,", can cause the repo to crash the server if comments are added for example."),a.forEach(r),k=N(e),y=m(e,"PRE",{});var T=b(y);x=E(T,S),T.forEach(r),this.h()},h(){P(t,"class","pa3 measure")},m(e,c){O(e,l,c);for(let a=0;a<i.length;a+=1)i[a].m(l,null);O(e,s,c),O(e,t,c),f(t,d),f(t,u),f(u,v),f(t,o),f(t,n),f(t,p),f(p,C),f(t,D),O(e,k,c),O(e,y,c),f(y,x)},p(e,[c]){if(c&1){w=e[0];let a;for(a=0;a<w.length;a+=1){const j=A(e,w,a);i[a]?i[a].p(j,c):(i[a]=B(j),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=w.length}c&1&&S!==(S=JSON.stringify(e[0],null,2)+"")&&F(x,S)},i:q,o:q,d(e){e&&r(l),U(i,e),e&&r(s),e&&r(t),e&&r(k),e&&r(y)}}}const M=!0;function H(h,l,s){let{posts:t}=l;return h.$$set=d=>{"posts"in d&&s(0,t=d.posts)},[t]}class V extends G{constructor(l){super(),I(this,l,H,z,Q,{posts:0})}}export{V as default,M as prerender};