import{S as O,i as F,s as J,x as C,k as A,y as G,m as H,z as I,g as k,r as N,p as R,C as T,d as u,e as h,t as E,c as d,a as $,h as y,b as v,G as p,j as L,n as K}from"../../chunks/index-09775ba2.js";import{R as M}from"../../chunks/Row-8b6dafdf.js";import{H as Q}from"../../chunks/index-7edf2c45.js";import{p as V}from"../../chunks/Zed.svelte_svelte_type_style_lang-f1dac0c9.js";function W(n){let e=n[0].suggested_trips.title+"",a;return{c(){a=E(e)},l(t){a=y(t,e)},m(t,i){k(t,a,i)},p(t,i){i&1&&e!==(e=t[0].suggested_trips.title+"")&&L(a,e)},d(t){t&&u(a)}}}function X(n){let e=n[0].suggested_trips.title.replace(/di viaggio/g,"")+"",a,t,i;return{c(){a=E(e),t=h("span"),i=E("di\xA0viaggio"),this.h()},l(s){a=y(s,e),t=d(s,"SPAN",{class:!0});var l=$(t);i=y(l,"di\xA0viaggio"),l.forEach(u),this.h()},h(){v(t,"class","fraunces-i")},m(s,l){k(s,a,l),k(s,t,l),p(t,i)},p(s,l){l&1&&e!==(e=s[0].suggested_trips.title.replace(/di viaggio/g,"")+"")&&L(a,e)},d(s){s&&u(a),s&&u(t)}}}function Y(n){let e,a;return{c(){e=h("ul"),a=E("ZED"),this.h()},l(t){e=d(t,"UL",{class:!0});var i=$(e);a=y(i,"ZED"),i.forEach(u),this.h()},h(){v(e,"class","items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l")},m(t,i){k(t,e,i),p(e,a)},p:K,d(t){t&&u(e)}}}function x(n){let e,a,t,i=n[0].suggested_trips.payoff+"",s,l,f,_,P,w,S=n[0].suggested_trips.text+"",D,z,g,b;function U(r,o){return o&1&&(_=null),_==null&&(_=!!r[0].suggested_trips.title.includes("di viaggio")),_?X:W}let j=U(n,-1),c=j(n);return g=new M({props:{bg:"bg-linen",$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){e=h("aside"),a=h("heading"),t=h("small"),s=E(i),l=A(),f=h("h4"),c.c(),P=A(),w=h("p"),D=E(S),z=A(),C(g.$$.fragment),this.h()},l(r){e=d(r,"ASIDE",{class:!0});var o=$(e);a=d(o,"HEADING",{class:!0});var m=$(a);t=d(m,"SMALL",{class:!0});var Z=$(t);s=y(Z,i),Z.forEach(u),l=H(m),f=d(m,"H4",{class:!0});var q=$(f);c.l(q),q.forEach(u),P=H(m),w=d(m,"P",{class:!0});var B=$(w);D=y(B,S),B.forEach(u),m.forEach(u),z=H(o),G(g.$$.fragment,o),o.forEach(u),this.h()},h(){v(t,"class","golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"),v(f,"class","fraunces"),v(w,"class","charcoal o-80 db f7 f7-ns f5-m f4-l fw4 mv0 pb2 lh-copy"),v(a,"class","mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"),v(e,"class","highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto")},m(r,o){k(r,e,o),p(e,a),p(a,t),p(t,s),p(a,l),p(a,f),c.m(f,null),p(a,P),p(a,w),p(w,D),p(e,z),I(g,e,null),b=!0},p(r,o){(!b||o&1)&&i!==(i=r[0].suggested_trips.payoff+"")&&L(s,i),j===(j=U(r,o))&&c?c.p(r,o):(c.d(1),c=j(r),c&&(c.c(),c.m(f,null))),(!b||o&1)&&S!==(S=r[0].suggested_trips.text+"")&&L(D,S);const m={};o&16&&(m.$$scope={dirty:o,ctx:r}),g.$set(m)},i(r){b||(N(g.$$.fragment,r),b=!0)},o(r){R(g.$$.fragment,r),b=!1},d(r){r&&u(e),c.d(),T(g)}}}function ee(n){let e,a,t,i;return e=new Q({props:{image:n[0].hero.image,payoff:n[0].hero.payoff,title:n[0].hero.title,location:n[0].hero.location,overlay_image:n[0].hero.overlay_image}}),t=new M({props:{bg:"bg-linen",$$slots:{default:[x]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),a=A(),C(t.$$.fragment)},l(s){G(e.$$.fragment,s),a=H(s),G(t.$$.fragment,s)},m(s,l){I(e,s,l),k(s,a,l),I(t,s,l),i=!0},p(s,[l]){const f={};l&1&&(f.image=s[0].hero.image),l&1&&(f.payoff=s[0].hero.payoff),l&1&&(f.title=s[0].hero.title),l&1&&(f.location=s[0].hero.location),l&1&&(f.overlay_image=s[0].hero.overlay_image),e.$set(f);const _={};l&17&&(_.$$scope={dirty:l,ctx:s}),t.$set(_)},i(s){i||(N(e.$$.fragment,s),N(t.$$.fragment,s),i=!0)},o(s){R(e.$$.fragment,s),R(t.$$.fragment,s),i=!1},d(s){T(e,s),s&&u(a),T(t,s)}}}const oe=async({params:n,fetch:e})=>{let a=n.id;return{props:{destinations:await(await e(`http://kel12.therebelwatchtower.net/levi-destinations/${a}`)).json()}}};let te=1,se=3;function ae(n,e,a){let{destinations:t}=e,s=Object.values(t.suggested_trips.trips);return n.$$set=l=>{"destinations"in l&&a(0,t=l.destinations)},V({items:s,pageSize:se,currentPage:te}),[t]}class fe extends O{constructor(e){super(),F(this,e,ae,ee,J,{destinations:0})}}export{fe as default,oe as load};
