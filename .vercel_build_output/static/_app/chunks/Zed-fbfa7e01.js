import{S as ie,i as re,s as oe,e as b,k as C,c as v,a as p,m as V,d as u,b as c,W as k,g as O,G as m,I as Te,o as Se,p as I,q as Pe,r as L,O as Me,X as Ne,K as Q,L as W,M as Y,N as x,t as M,h as N,j as Be,T as J,U as K,f as H,n as X,D as ae,x as He,y as Ue,z as De,A as Ge,B as Ce,C as Ve,Y as pe,Z as Ze,P as ze,Q as Re}from"./index-09775ba2.js";function ht({items:l,pageSize:e,currentPage:s}){return l.slice((s-1)*e,(s-1)*e+e)}const Z="PREVIOUS_PAGE",z="NEXT_PAGE",B="ELLIPSIS";function Xe({totalItems:l,pageSize:e,currentPage:s,limit:n=null,showStepOptions:t=!1}){const a=Math.ceil(l/e),i=Je({limit:n});let r=n&&a>i?qe({totalPages:a,limit:n,currentPage:s}):je({totalPages:a});return t?Fe({options:r,currentPage:s,totalPages:a}):r}function je({totalPages:l}){return new Array(l).fill(null).map((e,s)=>({type:"number",value:s+1}))}function qe({totalPages:l,limit:e,currentPage:s}){const n=e*2+2,t=1+n,a=l-n,i=t+2;if(s<=t-e)return Array(i).fill(null).map((o,r)=>r===i-1?{type:"number",value:l}:r===i-2?{type:"symbol",symbol:B,value:t+1}:{type:"number",value:r+1});if(s>=a+e)return Array(i).fill(null).map((o,r)=>r===0?{type:"number",value:1}:r===1?{type:"symbol",symbol:B,value:a-1}:{type:"number",value:a+r-2});if(s>=t-e&&s<=a+e)return Array(i).fill(null).map((o,r)=>r===0?{type:"number",value:1}:r===1?{type:"symbol",symbol:B,value:s-e+(r-2)}:r===i-1?{type:"number",value:l}:r===i-2?{type:"symbol",symbol:B,value:s+e+1}:{type:"number",value:s-e+(r-2)})}function Fe({options:l,currentPage:e,totalPages:s}){return[{type:"symbol",symbol:Z,value:e<=1?1:e-1},...l,{type:"symbol",symbol:z,value:e>=s?s:e+1}]}function Je({limit:l}){return l*2+3+2}function ge(l,e,s){const n=l.slice();return n[12]=e[s],n}const Ke=l=>({}),be=l=>({}),Qe=l=>({}),ve=l=>({}),We=l=>({}),ye=l=>({}),Ye=l=>({value:l&4}),de=l=>({value:l[12].value});function xe(l){let e;const s=l[9].next,n=Q(s,l,l[8],be),t=n||lt();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){n&&n.p&&(!e||i&256)&&W(n,s,a,a[8],e?x(s,a[8],i,Ke):Y(a[8]),be)},i(a){e||(L(t,a),e=!0)},o(a){I(t,a),e=!1},d(a){t&&t.d(a)}}}function $e(l){let e;const s=l[9].prev,n=Q(s,l,l[8],ve),t=n||st();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){n&&n.p&&(!e||i&256)&&W(n,s,a,a[8],e?x(s,a[8],i,Qe):Y(a[8]),ve)},i(a){e||(L(t,a),e=!0)},o(a){I(t,a),e=!1},d(a){t&&t.d(a)}}}function et(l){let e;const s=l[9].ellipsis,n=Q(s,l,l[8],ye),t=n||nt();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){n&&n.p&&(!e||i&256)&&W(n,s,a,a[8],e?x(s,a[8],i,We):Y(a[8]),ye)},i(a){e||(L(t,a),e=!0)},o(a){I(t,a),e=!1},d(a){t&&t.d(a)}}}function tt(l){let e;const s=l[9].number,n=Q(s,l,l[8],de),t=n||at(l);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){n?n.p&&(!e||i&260)&&W(n,s,a,a[8],e?x(s,a[8],i,Ye):Y(a[8]),de):t&&t.p&&(!e||i&4)&&t.p(a,e?i:-1)},i(a){e||(L(t,a),e=!0)},o(a){I(t,a),e=!1},d(a){t&&t.d(a)}}}function lt(l){let e,s;return{c(){e=J("svg"),s=J("path"),this.h()},l(n){e=K(n,"svg",{style:!0,viewBox:!0});var t=p(e);s=K(t,"path",{fill:!0,d:!0}),p(s).forEach(u),t.forEach(u),this.h()},h(){c(s,"fill","#000000"),c(s,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),c(e,"viewBox","0 0 24 24")},m(n,t){O(n,e,t),m(e,s)},p:X,d(n){n&&u(e)}}}function st(l){let e,s;return{c(){e=J("svg"),s=J("path"),this.h()},l(n){e=K(n,"svg",{style:!0,viewBox:!0});var t=p(e);s=K(t,"path",{fill:!0,d:!0}),p(s).forEach(u),t.forEach(u),this.h()},h(){c(s,"fill","#000000"),c(s,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),c(e,"viewBox","0 0 24 24")},m(n,t){O(n,e,t),m(e,s)},p:X,d(n){n&&u(e)}}}function nt(l){let e,s;return{c(){e=b("span"),s=M("...")},l(n){e=v(n,"SPAN",{});var t=p(e);s=N(t,"..."),t.forEach(u)},m(n,t){O(n,e,t),m(e,s)},p:X,d(n){n&&u(e)}}}function at(l){let e,s=l[12].value+"",n;return{c(){e=b("span"),n=M(s)},l(t){e=v(t,"SPAN",{});var a=p(e);n=N(a,s),a.forEach(u)},m(t,a){O(t,e,a),m(e,n)},p(t,a){a&4&&s!==(s=t[12].value+"")&&Be(n,s)},d(t){t&&u(e)}}}function ke(l){let e,s,n,t,a,i,o;const r=[tt,et,$e,xe],f=[];function w(_,g){return _[12].type==="number"?0:_[12].type==="symbol"&&_[12].symbol===B?1:_[12].type==="symbol"&&_[12].symbol===Z?2:_[12].type==="symbol"&&_[12].symbol===z?3:-1}~(s=w(l))&&(n=f[s]=r[s](l));function S(){return l[10](l[12])}return{c(){e=b("span"),n&&n.c(),t=C(),this.h()},l(_){e=v(_,"SPAN",{class:!0});var g=p(e);n&&n.l(g),t=V(g),g.forEach(u),this.h()},h(){c(e,"class","option"),k(e,"number",l[12].type==="number"),k(e,"prev",l[12].type==="symbol"&&l[12].symbol===Z),k(e,"next",l[12].type==="symbol"&&l[12].symbol===z),k(e,"disabled",l[12].type==="symbol"&&l[12].symbol===z&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===Z&&l[0]<=1),k(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),k(e,"active",l[12].type==="number"&&l[12].value===l[0])},m(_,g){O(_,e,g),~s&&f[s].m(e,null),m(e,t),a=!0,i||(o=Te(e,"click",S),i=!0)},p(_,g){l=_;let P=s;s=w(l),s===P?~s&&f[s].p(l,g):(n&&(Se(),I(f[P],1,1,()=>{f[P]=null}),Pe()),~s?(n=f[s],n?n.p(l,g):(n=f[s]=r[s](l),n.c()),L(n,1),n.m(e,t)):n=null),g&4&&k(e,"number",l[12].type==="number"),g&4&&k(e,"prev",l[12].type==="symbol"&&l[12].symbol===Z),g&4&&k(e,"next",l[12].type==="symbol"&&l[12].symbol===z),g&7&&k(e,"disabled",l[12].type==="symbol"&&l[12].symbol===z&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===Z&&l[0]<=1),g&4&&k(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),g&5&&k(e,"active",l[12].type==="number"&&l[12].value===l[0])},i(_){a||(L(n),a=!0)},o(_){I(n),a=!1},d(_){_&&u(e),~s&&f[s].d(),i=!1,o()}}}function it(l){let e,s,n=l[2],t=[];for(let i=0;i<n.length;i+=1)t[i]=ke(ge(l,n,i));const a=i=>I(t[i],1,1,()=>{t[i]=null});return{c(){e=b("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var o=p(e);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(u),this.h()},h(){c(e,"class","pagination-nav")},m(i,o){O(i,e,o);for(let r=0;r<t.length;r+=1)t[r].m(e,null);s=!0},p(i,[o]){if(o&271){n=i[2];let r;for(r=0;r<n.length;r+=1){const f=ge(i,n,r);t[r]?(t[r].p(f,o),L(t[r],1)):(t[r]=ke(f),t[r].c(),L(t[r],1),t[r].m(e,null))}for(Se(),r=n.length;r<t.length;r+=1)a(r);Pe()}},i(i){if(!s){for(let o=0;o<n.length;o+=1)L(t[o]);s=!0}},o(i){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)I(t[o]);s=!1},d(i){i&&u(e),Me(t,i)}}}function rt(l,e,s){let n,t,{$$slots:a={},$$scope:i}=e;const o=Ne();let{totalItems:r=0}=e,{pageSize:f=1}=e,{currentPage:w=1}=e,{limit:S=null}=e,{showStepOptions:_=!1}=e;function g(h){o("setPage",{page:h.value})}const P=h=>g(h);return l.$$set=h=>{"totalItems"in h&&s(4,r=h.totalItems),"pageSize"in h&&s(5,f=h.pageSize),"currentPage"in h&&s(0,w=h.currentPage),"limit"in h&&s(6,S=h.limit),"showStepOptions"in h&&s(7,_=h.showStepOptions),"$$scope"in h&&s(8,i=h.$$scope)},l.$$.update=()=>{l.$$.dirty&241&&s(2,n=Xe({totalItems:r,pageSize:f,currentPage:w,limit:S,showStepOptions:_})),l.$$.dirty&48&&s(1,t=Math.ceil(r/f))},[w,t,n,g,r,f,S,_,i,a,P]}class ot extends ie{constructor(e){super(),re(this,e,rt,it,oe,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function ft(l){let e,s,n;const t=[l[0]];let a={};for(let i=0;i<t.length;i+=1)a=ae(a,t[i]);return s=new ot({props:a}),s.$on("setPage",l[1]),{c(){e=b("div"),He(s.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var o=p(e);Ue(s.$$.fragment,o),o.forEach(u),this.h()},h(){c(e,"class","light-pagination-nav svelte-17xnlxp")},m(i,o){O(i,e,o),De(s,e,null),n=!0},p(i,[o]){const r=o&1?Ge(t,[Ce(i[0])]):{};s.$set(r)},i(i){n||(L(s.$$.fragment,i),n=!0)},o(i){I(s.$$.fragment,i),n=!1},d(i){i&&u(e),Ve(s)}}}function ut(l,e,s){function n(t){Ze.call(this,l,t)}return l.$$set=t=>{s(0,e=ae(ae({},e),pe(t)))},e=pe(e),[e,n]}class pt extends ie{constructor(e){super(),re(this,e,ut,ft,oe,{})}}function ct(l){let e,s,n,t,a,i,o,r,f,w=Le(`${l[1]}`)+"",S,_,g,P,h,j=Ee(`${l[2]}`)+"",$,U,A,R,ee,T,D,te,le,G,se;return{c(){e=b("li"),s=b("a"),n=b("figure"),t=b("figurecap"),a=b("time"),i=new ze(!1),o=M(" giorni"),r=C(),f=b("h5"),S=C(),_=b("p"),g=M("Type"),P=C(),h=b("p"),$=C(),U=b("div"),A=b("h6"),R=b("small"),ee=M("\u20AC\xA0"),T=b("span"),D=b("small"),te=M("\xA0p.p"),le=C(),G=b("div"),se=M("Scopri il viaggio"),this.h()},l(y){e=v(y,"LI",{class:!0});var d=p(e);s=v(d,"A",{"sveltekit:prefetch":!0,title:!0,href:!0,class:!0});var fe=p(s);n=v(fe,"FIGURE",{class:!0,style:!0,title:!0});var q=p(n);t=v(q,"FIGURECAP",{class:!0});var E=p(t);a=v(E,"TIME",{class:!0});var ne=p(a);i=Re(ne,!1),o=N(ne," giorni"),ne.forEach(u),r=V(E),f=v(E,"H5",{class:!0});var Ie=p(f);Ie.forEach(u),S=V(E),_=v(E,"P",{class:!0});var ue=p(_);g=N(ue,"Type"),ue.forEach(u),P=V(E),h=v(E,"P",{class:!0});var Ae=p(h);Ae.forEach(u),$=V(E),U=v(E,"DIV",{class:!0});var ce=p(U);A=v(ce,"H6",{class:!0});var F=p(A);R=v(F,"SMALL",{});var _e=p(R);ee=N(_e,"\u20AC\xA0"),_e.forEach(u),T=v(F,"SPAN",{class:!0});var Oe=p(T);Oe.forEach(u),D=v(F,"SMALL",{class:!0});var me=p(D);te=N(me,"\xA0p.p"),me.forEach(u),F.forEach(u),ce.forEach(u),E.forEach(u),le=V(q),G=v(q,"DIV",{class:!0});var he=p(G);se=N(he,"Scopri il viaggio"),he.forEach(u),q.forEach(u),fe.forEach(u),d.forEach(u),this.h()},h(){i.a=o,c(a,"class","f5 f6-ns f7-m f6-l fw7 ttu tracked flex-auto"),c(f,"class","ts fraunces mv0 ttc f1 f1-ns f2-m f1-l fw5 h5 flex-auto"),c(_,"class","mv0 pb4 f5 f6-ns f7-m f6-l fw7 ttu tracked h2 flex-auto"),c(h,"class","h3 mv0 pb0 f4 f5-ns f6-m f5-l fw4 flex-auto"),c(T,"class","pt0 fw5"),c(D,"class","pt0 f6 f5-l system"),c(A,"class","ts mv0 fraunces fw4 f1 f1-ns f2-m f1-l"),c(U,"class","flex items-center h4"),c(t,"class","white ts1-dark-gray flex flex-column lh-solid"),c(G,"class","pointer br-pill ba bw2 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-70 w-100-ns w-90-m w-90-l ts1-dark-gray f5 f5-ns f7-m f5-l svelte-bafr6a"),c(n,"class","ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 pt5 cover shadow-5-hover transition-bs overflow-hidden svelte-bafr6a"),H(n,"background-position","50% 0"),H(n,"background-image","linear-gradient( rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.50) 100%), url("+JSON.stringify(l[4])+")"),c(n,"title",l[1]),c(s,"sveltekit:prefetch",""),c(s,"title",l[1]),c(s,"href",l[3]),c(s,"class","link svelte-bafr6a"),c(e,"class","w-100 w-100-ns w-30-m w5-l pb3")},m(y,d){O(y,e,d),m(e,s),m(s,n),m(n,t),m(t,a),i.m(l[0],a),m(a,o),m(t,r),m(t,f),f.innerHTML=w,m(t,S),m(t,_),m(_,g),m(t,P),m(t,h),h.innerHTML=j,m(t,$),m(t,U),m(U,A),m(A,R),m(R,ee),m(A,T),T.innerHTML=l[5],m(A,D),m(D,te),m(n,le),m(n,G),m(G,se)},p(y,[d]){d&1&&i.p(y[0]),d&2&&w!==(w=Le(`${y[1]}`)+"")&&(f.innerHTML=w),d&4&&j!==(j=Ee(`${y[2]}`)+"")&&(h.innerHTML=j),d&32&&(T.innerHTML=y[5]),d&16&&H(n,"background-image","linear-gradient( rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.50) 100%), url("+JSON.stringify(y[4])+")"),d&2&&c(n,"title",y[1]),d&2&&c(s,"title",y[1]),d&8&&c(s,"href",y[3])},i:X,o:X,d(y){y&&u(e)}}}let we=29;function Ee(l){let e=148;return l.length>e?l.substring(0,e)+"&hellip;":l}function Le(l){return l.length>we?l.toLowerCase().substring(0,we)+"&hellip;":l.toLowerCase()}function _t(l,e,s){let{length:n}=e,{title:t}=e,{excerpt:a}=e,{cta:i}=e,{image:o}=e,{starting_price:r}=e;return l.$$set=f=>{"length"in f&&s(0,n=f.length),"title"in f&&s(1,t=f.title),"excerpt"in f&&s(2,a=f.excerpt),"cta"in f&&s(3,i=f.cta),"image"in f&&s(4,o=f.image),"starting_price"in f&&s(5,r=f.starting_price)},[n,t,a,i,o,r]}class gt extends ie{constructor(e){super(),re(this,e,_t,ct,oe,{length:0,title:1,excerpt:2,cta:3,image:4,starting_price:5})}}export{pt as L,gt as Z,ht as p};
