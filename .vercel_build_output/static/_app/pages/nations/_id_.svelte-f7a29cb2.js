import{S as _e,i as ve,s as $e,x as Y,k as z,e as h,y as x,m as C,T as be,c as _,d as f,b as o,z as ee,g as j,G as u,r as F,p as J,C as te,U as we,t as U,a as L,h as V,j as K,N as de,o as Ee,q as ke}from"../../chunks/index-28618d1b.js";import{p as Ae}from"../../chunks/stores-825508c4.js";import{R as se}from"../../chunks/Row-ebd373c3.js";import{H as Me}from"../../chunks/index-e1173e28.js";import{S as Te}from"../../chunks/SwapMontage-bd7cd169.js";import{p as Le,L as Ie,Z as Pe}from"../../chunks/Zed-7c2a33e2.js";import"../../chunks/useViewportAction-c4bd98f4.js";function fe(l,e,n){const t=l.slice();return t[8]=e[n].cta,t[9]=e[n].excerpt,t[10]=e[n].image,t[11]=e[n].length,t[12]=e[n].startingPrice,t[13]=e[n].title,t[15]=n,t}function pe(l,e,n){const t=l.slice();return t[16]=e[n],t}function Se(l){let e=l[0].infos.title+"",n;return{c(){n=U(e)},l(t){n=V(t,e)},m(t,i){j(t,n,i)},p(t,i){i&1&&e!==(e=t[0].infos.title+"")&&K(n,e)},d(t){t&&f(n)}}}function Ne(l){let e=l[0].infos.title.replace(/utili/g,"")+"",n,t,i;return{c(){n=U(e),t=h("span"),i=U("utili"),this.h()},l(r){n=V(r,e),t=_(r,"SPAN",{class:!0});var g=L(t);i=V(g,"utili"),g.forEach(f),this.h()},h(){o(t,"class","fraunces-i")},m(r,g){j(r,n,g),j(r,t,g),u(t,i)},p(r,g){g&1&&e!==(e=r[0].infos.title.replace(/utili/g,"")+"")&&K(n,e)},d(r){r&&f(n),r&&f(t)}}}function me(l){let e,n,t=l[16].title+"",i,r,g,m,b,c=l[16].text+"",d,v;return{c(){e=h("div"),n=h("small"),i=U(t),r=z(),g=h("hr"),m=z(),b=h("p"),d=U(c),v=z(),this.h()},l(p){e=_(p,"DIV",{class:!0});var $=L(e);n=_($,"SMALL",{class:!0});var M=L(n);i=V(M,t),M.forEach(f),r=C($),g=_($,"HR",{class:!0}),m=C($),b=_($,"P",{class:!0});var S=L(b);d=V(S,c),S.forEach(f),v=C($),$.forEach(f),this.h()},h(){o(n,"class","golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2"),o(g,"class","inherit b--golden-brown"),o(b,"class","pr4"),o(e,"class","fl w-100 w-third-m w-third-l f6 lh-copy measure pb4")},m(p,$){j(p,e,$),u(e,n),u(n,i),u(e,r),u(e,g),u(e,m),u(e,b),u(b,d),u(e,v)},p(p,$){$&1&&t!==(t=p[16].title+"")&&K(i,t),$&1&&c!==(c=p[16].text+"")&&K(d,c)},d(p){p&&f(e)}}}function He(l){let e,n,t,i=l[0].description.nation+"",r,g,m,b=l[0].description.title+"",c,d,v,p,$,M,S,P,B,A,w,k=l[0].description.text+"",T,Z,D,H,G,Q,R;P=new Te({props:{images:l[0].description.images}});function W(a,E){return E&1&&(G=null),G==null&&(G=!!a[0].infos.title.includes("utili")),G?Ne:Se}let O=W(l,-1),q=O(l),I=l[0].infos.info,s=[];for(let a=0;a<I.length;a+=1)s[a]=me(pe(l,I,a));return{c(){e=h("article"),n=h("h4"),t=h("small"),r=U(i),g=z(),m=h("span"),c=U(b),d=h("br"),v=z(),p=h("aside"),$=h("p"),M=U("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\xA0aliqua."),S=z(),Y(P.$$.fragment),B=z(),A=h("div"),w=h("p"),T=U(k),Z=z(),D=h("h5"),H=h("span"),q.c(),Q=z();for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=_(a,"ARTICLE",{class:!0});var E=L(e);n=_(E,"H4",{class:!0});var y=L(n);t=_(y,"SMALL",{class:!0});var N=L(t);r=V(N,i),N.forEach(f),g=C(y),m=_(y,"SPAN",{class:!0});var ne=L(m);c=V(ne,b),ne.forEach(f),d=_(y,"BR",{}),y.forEach(f),v=C(E),p=_(E,"ASIDE",{class:!0});var le=L(p);$=_(le,"P",{class:!0});var re=L($);M=V(re,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\xA0aliqua."),re.forEach(f),S=C(le),x(P.$$.fragment,le),le.forEach(f),B=C(E),A=_(E,"DIV",{class:!0});var ie=L(A);w=_(ie,"P",{class:!0});var oe=L(w);T=V(oe,k),oe.forEach(f),ie.forEach(f),Z=C(E),D=_(E,"H5",{class:!0});var ce=L(D);H=_(ce,"SPAN",{class:!0});var ue=L(H);q.l(ue),ue.forEach(f),ce.forEach(f),Q=C(E);for(let ae=0;ae<s.length;ae+=1)s[ae].l(E);E.forEach(f),this.h()},h(){o(t,"class","golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"),o(m,"class","fraunces"),o(n,"class","mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"),o($,"class","pr4 fw5"),o(p,"class","fl w-100 w-50-m w-50-l lh-copy measure "),o(w,"class","pb3"),o(A,"class","fw4 fl w-100 w-50-m w-50-l lh-copy measure"),o(H,"class","fraunces"),o(D,"class","f3 f2-ns f2-m f2-l fw5"),o(e,"class","ph2 ph0-ns ph0-m ph0-l")},m(a,E){j(a,e,E),u(e,n),u(n,t),u(t,r),u(n,g),u(n,m),u(m,c),u(n,d),u(e,v),u(e,p),u(p,$),u($,M),u(p,S),ee(P,p,null),u(e,B),u(e,A),u(A,w),u(w,T),u(e,Z),u(e,D),u(D,H),q.m(H,null),u(e,Q);for(let y=0;y<s.length;y+=1)s[y].m(e,null);R=!0},p(a,E){(!R||E&1)&&i!==(i=a[0].description.nation+"")&&K(r,i),(!R||E&1)&&b!==(b=a[0].description.title+"")&&K(c,b);const y={};if(E&1&&(y.images=a[0].description.images),P.$set(y),(!R||E&1)&&k!==(k=a[0].description.text+"")&&K(T,k),O===(O=W(a,E))&&q?q.p(a,E):(q.d(1),q=O(a),q&&(q.c(),q.m(H,null))),E&1){I=a[0].infos.info;let N;for(N=0;N<I.length;N+=1){const ne=pe(a,I,N);s[N]?s[N].p(ne,E):(s[N]=me(ne),s[N].c(),s[N].m(e,null))}for(;N<s.length;N+=1)s[N].d(1);s.length=I.length}},i(a){R||(F(P.$$.fragment,a),R=!0)},o(a){J(P.$$.fragment,a),R=!1},d(a){a&&f(e),te(P),q.d(),de(s,a)}}}function De(l){let e=l[0].suggested.title+"",n;return{c(){n=U(e)},l(t){n=V(t,e)},m(t,i){j(t,n,i)},p(t,i){i&1&&e!==(e=t[0].suggested.title+"")&&K(n,e)},d(t){t&&f(n)}}}function qe(l){let e=l[0].suggested.title.replace(/di viaggio/g,"")+"",n,t,i;return{c(){n=U(e),t=h("span"),i=U("di\xA0viaggio"),this.h()},l(r){n=V(r,e),t=_(r,"SPAN",{class:!0});var g=L(t);i=V(g,"di\xA0viaggio"),g.forEach(f),this.h()},h(){o(t,"class","fraunces-i")},m(r,g){j(r,n,g),j(r,t,g),u(t,i)},p(r,g){g&1&&e!==(e=r[0].suggested.title.replace(/di viaggio/g,"")+"")&&K(n,e)},d(r){r&&f(n),r&&f(t)}}}function ge(l){let e,n;return e=new Pe({props:{length:l[11],title:l[13],excerpt:l[9],cta:l[8],image:l[10],starting_price:l[12]}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){ee(e,t,i),n=!0},p(t,i){const r={};i&4&&(r.length=t[11]),i&4&&(r.title=t[13]),i&4&&(r.excerpt=t[9]),i&4&&(r.cta=t[8]),i&4&&(r.image=t[10]),i&4&&(r.starting_price=t[12]),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){te(e,t)}}}function ye(l){let e,n,t,i,r,g=l[2],m=[];for(let c=0;c<g.length;c+=1)m[c]=ge(fe(l,g,c));const b=c=>J(m[c],1,1,()=>{m[c]=null});return i=new Ie({props:{totalItems:l[4].length,pageSize:he,currentPage:l[1],limit:1,showStepOptions:!0}}),i.$on("setPage",l[6]),{c(){e=h("ul");for(let c=0;c<m.length;c+=1)m[c].c();n=z(),t=h("nav"),Y(i.$$.fragment),this.h()},l(c){e=_(c,"UL",{class:!0});var d=L(e);for(let p=0;p<m.length;p+=1)m[p].l(d);d.forEach(f),n=C(c),t=_(c,"NAV",{});var v=L(t);x(i.$$.fragment,v),v.forEach(f),this.h()},h(){o(e,"class","items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l")},m(c,d){j(c,e,d);for(let v=0;v<m.length;v+=1)m[v].m(e,null);j(c,n,d),j(c,t,d),ee(i,t,null),r=!0},p(c,d){if(d&4){g=c[2];let p;for(p=0;p<g.length;p+=1){const $=fe(c,g,p);m[p]?(m[p].p($,d),F(m[p],1)):(m[p]=ge($),m[p].c(),F(m[p],1),m[p].m(e,null))}for(Ee(),p=g.length;p<m.length;p+=1)b(p);ke()}const v={};d&2&&(v.currentPage=c[1]),i.$set(v)},i(c){if(!r){for(let d=0;d<g.length;d+=1)F(m[d]);F(i.$$.fragment,c),r=!0}},o(c){m=m.filter(Boolean);for(let d=0;d<m.length;d+=1)J(m[d]);J(i.$$.fragment,c),r=!1},d(c){c&&f(e),de(m,c),c&&f(n),c&&f(t),te(i)}}}function ze(l){let e,n,t,i=l[0].suggested.payoff+"",r,g,m,b,c,d,v=l[0].suggested.text+"",p,$,M,S;function P(w,k){return k&1&&(b=null),b==null&&(b=!!w[0].suggested.title.includes("di viaggio")),b?qe:De}let B=P(l,-1),A=B(l);return M=new se({props:{bg:"bg-linen",$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){e=h("aside"),n=h("heading"),t=h("small"),r=U(i),g=z(),m=h("h4"),A.c(),c=z(),d=h("p"),p=U(v),$=z(),Y(M.$$.fragment),this.h()},l(w){e=_(w,"ASIDE",{class:!0});var k=L(e);n=_(k,"HEADING",{class:!0});var T=L(n);t=_(T,"SMALL",{class:!0});var Z=L(t);r=V(Z,i),Z.forEach(f),g=C(T),m=_(T,"H4",{class:!0});var D=L(m);A.l(D),D.forEach(f),c=C(T),d=_(T,"P",{class:!0});var H=L(d);p=V(H,v),H.forEach(f),T.forEach(f),$=C(k),x(M.$$.fragment,k),k.forEach(f),this.h()},h(){o(t,"class","golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"),o(m,"class","fraunces"),o(d,"class","charcoal o-80 db f7 f7-ns f5-m f4-l fw4 mv0 pb2 lh-copy"),o(n,"class","mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"),o(e,"class","highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto")},m(w,k){j(w,e,k),u(e,n),u(n,t),u(t,r),u(n,g),u(n,m),A.m(m,null),u(n,c),u(n,d),u(d,p),u(e,$),ee(M,e,null),S=!0},p(w,k){(!S||k&1)&&i!==(i=w[0].suggested.payoff+"")&&K(r,i),B===(B=P(w,k))&&A?A.p(w,k):(A.d(1),A=B(w),A&&(A.c(),A.m(m,null))),(!S||k&1)&&v!==(v=w[0].suggested.text+"")&&K(p,v);const T={};k&524294&&(T.$$scope={dirty:k,ctx:w}),M.$set(T)},i(w){S||(F(M.$$.fragment,w),S=!0)},o(w){J(M.$$.fragment,w),S=!1},d(w){w&&f(e),A.d(),te(M)}}}function Ce(l){let e,n,t,i,r,g,m,b,c,d,v,p,$,M,S,P,B,A,w,k,T,Z,D,H,G,Q,R,W,O,q,I;return e=new Me({props:{image:l[0].hero.image,payoff:l[0].hero.payoff,title:l[0].hero.title,location:l[0].hero.location,overlayImage:l[0].hero.overlayImage}}),t=new se({props:{bg:"bg-solitaire",id:`${l[0].description.title.toLowerCase().replace(/&amp;/g,"").replace(/&nbsp;/g,"-").replace(/\s/g,"-").replace(/\,/g,"").replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g,"$1$2").replace(/--/g,"-")}`,$$slots:{default:[He]},$$scope:{ctx:l}}}),r=new se({props:{bg:"bg-linen",$$slots:{default:[ze]},$$scope:{ctx:l}}}),document.title=m=l[0].description.title+", "+l[0].description.nation+" | "+X,{c(){Y(e.$$.fragment),n=z(),Y(t.$$.fragment),i=z(),Y(r.$$.fragment),g=z(),b=h("meta"),d=h("link"),p=h("meta"),$=h("meta"),M=h("meta"),P=h("meta"),A=h("meta"),k=h("meta"),T=h("meta"),D=h("meta"),H=h("meta"),G=h("meta"),R=h("meta"),O=h("meta"),this.h()},l(s){x(e.$$.fragment,s),n=C(s),x(t.$$.fragment,s),i=C(s),x(r.$$.fragment,s),g=C(s);const a=be('[data-svelte="svelte-lo3fr9"]',document.head);b=_(a,"META",{name:!0,content:!0}),d=_(a,"LINK",{rel:!0,href:!0}),p=_(a,"META",{property:!0,content:!0}),$=_(a,"META",{property:!0,content:!0}),M=_(a,"META",{property:!0,content:!0}),P=_(a,"META",{property:!0,content:!0}),A=_(a,"META",{property:!0,content:!0}),k=_(a,"META",{property:!0,content:!0}),T=_(a,"META",{property:!0,content:!0}),D=_(a,"META",{name:!0,content:!0}),H=_(a,"META",{name:!0,content:!0}),G=_(a,"META",{name:!0,content:!0}),R=_(a,"META",{name:!0,content:!0}),O=_(a,"META",{name:!0,content:!0}),a.forEach(f),this.h()},h(){o(b,"name","description"),o(b,"content",c=l[0].description.introduction?l[0].description.introduction.substring(0,80):l[0].description.text.substring(0,80)),o(d,"rel","canonical"),o(d,"href",v="https://viaggilevi.vercel.app"+l[3]),o(p,"property","og:locale"),o(p,"content","it_IT"),o($,"property","og:type"),o($,"content","article"),o(M,"property","og:title"),o(M,"content",S=l[0].description.title+", "+l[0].description.nation+" | "+X),o(P,"property","og:description"),o(P,"content",B=l[0].description.introduction?l[0].description.introduction.substring(0,80):l[0].description.text.substring(0,80)),o(A,"property","og:url"),o(A,"content",w="https://viaggilevi.vercel.app"+l[3]),o(k,"property","og:site_name"),o(k,"content",X),o(T,"property","og:image"),o(T,"content",Z=l[0].hero.image),o(D,"name","twitter:card"),o(D,"content","summary_large_image"),o(H,"name","twitter:site"),o(H,"content","@viaggilevi"),o(G,"name","twitter:image"),o(G,"content",Q=l[0].hero.image),o(R,"name","twitter:description"),o(R,"content",W=l[0].description.introduction?l[0].description.introduction.substring(0,80):l[0].description.text.substring(0,80)),o(O,"name","twitter:title"),o(O,"content",q=l[0].description.title+", "+l[0].description.nation+" | "+X)},m(s,a){ee(e,s,a),j(s,n,a),ee(t,s,a),j(s,i,a),ee(r,s,a),j(s,g,a),u(document.head,b),u(document.head,d),u(document.head,p),u(document.head,$),u(document.head,M),u(document.head,P),u(document.head,A),u(document.head,k),u(document.head,T),u(document.head,D),u(document.head,H),u(document.head,G),u(document.head,R),u(document.head,O),I=!0},p(s,[a]){const E={};a&1&&(E.image=s[0].hero.image),a&1&&(E.payoff=s[0].hero.payoff),a&1&&(E.title=s[0].hero.title),a&1&&(E.location=s[0].hero.location),a&1&&(E.overlayImage=s[0].hero.overlayImage),e.$set(E);const y={};a&1&&(y.id=`${s[0].description.title.toLowerCase().replace(/&amp;/g,"").replace(/&nbsp;/g,"-").replace(/\s/g,"-").replace(/\,/g,"").replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g,"$1$2").replace(/--/g,"-")}`),a&524289&&(y.$$scope={dirty:a,ctx:s}),t.$set(y);const N={};a&524295&&(N.$$scope={dirty:a,ctx:s}),r.$set(N),(!I||a&8193)&&m!==(m=s[0].description.title+", "+s[0].description.nation+" | "+X)&&(document.title=m),(!I||a&1&&c!==(c=s[0].description.introduction?s[0].description.introduction.substring(0,80):s[0].description.text.substring(0,80)))&&o(b,"content",c),(!I||a&8&&v!==(v="https://viaggilevi.vercel.app"+s[3]))&&o(d,"href",v),(!I||a&1&&S!==(S=s[0].description.title+", "+s[0].description.nation+" | "+X))&&o(M,"content",S),(!I||a&1&&B!==(B=s[0].description.introduction?s[0].description.introduction.substring(0,80):s[0].description.text.substring(0,80)))&&o(P,"content",B),(!I||a&8&&w!==(w="https://viaggilevi.vercel.app"+s[3]))&&o(A,"content",w),(!I||a&1&&Z!==(Z=s[0].hero.image))&&o(T,"content",Z),(!I||a&1&&Q!==(Q=s[0].hero.image))&&o(G,"content",Q),(!I||a&1&&W!==(W=s[0].description.introduction?s[0].description.introduction.substring(0,80):s[0].description.text.substring(0,80)))&&o(R,"content",W),(!I||a&1&&q!==(q=s[0].description.title+", "+s[0].description.nation+" | "+X))&&o(O,"content",q)},i(s){I||(F(e.$$.fragment,s),F(t.$$.fragment,s),F(r.$$.fragment,s),I=!0)},o(s){J(e.$$.fragment,s),J(t.$$.fragment,s),J(r.$$.fragment,s),I=!1},d(s){te(e,s),s&&f(n),te(t,s),s&&f(i),te(r,s),s&&f(g),f(b),f(d),f(p),f($),f(M),f(P),f(A),f(k),f(T),f(D),f(H),f(G),f(R),f(O)}}}const Ke=async({params:l,fetch:e})=>{let n=l.id;return{props:{nations:await(await e(`http://kel12.therebelwatchtower.net/levi-nations/${n}`)).json()}}};let X="I Viaggi di Maurizio Levi",he=3;function Re(l,e,n){let t,i,r;we(l,Ae,v=>n(5,r=v));let{nations:g}=e,b=Object.values(g.suggested.trips),c=1;const d=v=>n(1,c=v.detail.page);return l.$$set=v=>{"nations"in v&&n(0,g=v.nations)},l.$$.update=()=>{l.$$.dirty&32&&n(3,t=r.url.pathname),l.$$.dirty&2&&n(2,i=Le({items:b,pageSize:he,currentPage:c}))},[g,c,i,t,b,r,d]}class Fe extends _e{constructor(e){super(),ve(this,e,Re,Ce,$e,{nations:0})}}export{Fe as default,Ke as load};
