var D=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ye(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),e}var ve={},ne={exports:{}};(function(t,e){var r=typeof self!="undefined"?self:D,a=function(){function l(){this.fetch=!1,this.DOMException=r.DOMException}return l.prototype=r,new l}();(function(l){(function(h){var b={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function v(n){return n&&DataView.prototype.isPrototypeOf(n)}if(b.arrayBuffer)var A=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],T=ArrayBuffer.isView||function(n){return n&&A.indexOf(Object.prototype.toString.call(n))>-1};function w(n){if(typeof n!="string"&&(n=String(n)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(n))throw new TypeError("Invalid character in header field name");return n.toLowerCase()}function j(n){return typeof n!="string"&&(n=String(n)),n}function R(n){var i={next:function(){var s=n.shift();return{done:s===void 0,value:s}}};return b.iterable&&(i[Symbol.iterator]=function(){return i}),i}function g(n){this.map={},n instanceof g?n.forEach(function(i,s){this.append(s,i)},this):Array.isArray(n)?n.forEach(function(i){this.append(i[0],i[1])},this):n&&Object.getOwnPropertyNames(n).forEach(function(i){this.append(i,n[i])},this)}g.prototype.append=function(n,i){n=w(n),i=j(i);var s=this.map[n];this.map[n]=s?s+", "+i:i},g.prototype.delete=function(n){delete this.map[w(n)]},g.prototype.get=function(n){return n=w(n),this.has(n)?this.map[n]:null},g.prototype.has=function(n){return this.map.hasOwnProperty(w(n))},g.prototype.set=function(n,i){this.map[w(n)]=j(i)},g.prototype.forEach=function(n,i){for(var s in this.map)this.map.hasOwnProperty(s)&&n.call(i,this.map[s],s,this)},g.prototype.keys=function(){var n=[];return this.forEach(function(i,s){n.push(s)}),R(n)},g.prototype.values=function(){var n=[];return this.forEach(function(i){n.push(i)}),R(n)},g.prototype.entries=function(){var n=[];return this.forEach(function(i,s){n.push([s,i])}),R(n)},b.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function I(n){if(n.bodyUsed)return Promise.reject(new TypeError("Already read"));n.bodyUsed=!0}function J(n){return new Promise(function(i,s){n.onload=function(){i(n.result)},n.onerror=function(){s(n.error)}})}function G(n){var i=new FileReader,s=J(i);return i.readAsArrayBuffer(n),s}function X(n){var i=new FileReader,s=J(i);return i.readAsText(n),s}function C(n){for(var i=new Uint8Array(n),s=new Array(i.length),f=0;f<i.length;f++)s[f]=String.fromCharCode(i[f]);return s.join("")}function V(n){if(n.slice)return n.slice(0);var i=new Uint8Array(n.byteLength);return i.set(new Uint8Array(n)),i.buffer}function M(){return this.bodyUsed=!1,this._initBody=function(n){this._bodyInit=n,n?typeof n=="string"?this._bodyText=n:b.blob&&Blob.prototype.isPrototypeOf(n)?this._bodyBlob=n:b.formData&&FormData.prototype.isPrototypeOf(n)?this._bodyFormData=n:b.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)?this._bodyText=n.toString():b.arrayBuffer&&b.blob&&v(n)?(this._bodyArrayBuffer=V(n.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):b.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(n)||T(n))?this._bodyArrayBuffer=V(n):this._bodyText=n=Object.prototype.toString.call(n):this._bodyText="",this.headers.get("content-type")||(typeof n=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var n=I(this);if(n)return n;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?I(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(G)}),this.text=function(){var n=I(this);if(n)return n;if(this._bodyBlob)return X(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(C(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(Q)}),this.json=function(){return this.text().then(JSON.parse)},this}var H=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function $(n){var i=n.toUpperCase();return H.indexOf(i)>-1?i:n}function x(n,i){i=i||{};var s=i.body;if(n instanceof x){if(n.bodyUsed)throw new TypeError("Already read");this.url=n.url,this.credentials=n.credentials,i.headers||(this.headers=new g(n.headers)),this.method=n.method,this.mode=n.mode,this.signal=n.signal,!s&&n._bodyInit!=null&&(s=n._bodyInit,n.bodyUsed=!0)}else this.url=String(n);if(this.credentials=i.credentials||this.credentials||"same-origin",(i.headers||!this.headers)&&(this.headers=new g(i.headers)),this.method=$(i.method||this.method||"GET"),this.mode=i.mode||this.mode||null,this.signal=i.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&s)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(s)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})};function Q(n){var i=new FormData;return n.trim().split("&").forEach(function(s){if(s){var f=s.split("="),m=f.shift().replace(/\+/g," "),y=f.join("=").replace(/\+/g," ");i.append(decodeURIComponent(m),decodeURIComponent(y))}}),i}function z(n){var i=new g,s=n.replace(/\r?\n[\t ]+/g," ");return s.split(/\r?\n/).forEach(function(f){var m=f.split(":"),y=m.shift().trim();if(y){var O=m.join(":").trim();i.append(y,O)}}),i}M.call(x.prototype);function _(n,i){i||(i={}),this.type="default",this.status=i.status===void 0?200:i.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in i?i.statusText:"OK",this.headers=new g(i.headers),this.url=i.url||"",this._initBody(n)}M.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},_.error=function(){var n=new _(null,{status:0,statusText:""});return n.type="error",n};var o=[301,302,303,307,308];_.redirect=function(n,i){if(o.indexOf(i)===-1)throw new RangeError("Invalid status code");return new _(null,{status:i,headers:{location:n}})},h.DOMException=l.DOMException;try{new h.DOMException}catch{h.DOMException=function(i,s){this.message=i,this.name=s;var f=Error(i);this.stack=f.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function c(n,i){return new Promise(function(s,f){var m=new x(n,i);if(m.signal&&m.signal.aborted)return f(new h.DOMException("Aborted","AbortError"));var y=new XMLHttpRequest;function O(){y.abort()}y.onload=function(){var p={status:y.status,statusText:y.statusText,headers:z(y.getAllResponseHeaders()||"")};p.url="responseURL"in y?y.responseURL:p.headers.get("X-Request-URL");var E="response"in y?y.response:y.responseText;s(new _(E,p))},y.onerror=function(){f(new TypeError("Network request failed"))},y.ontimeout=function(){f(new TypeError("Network request failed"))},y.onabort=function(){f(new h.DOMException("Aborted","AbortError"))},y.open(m.method,m.url,!0),m.credentials==="include"?y.withCredentials=!0:m.credentials==="omit"&&(y.withCredentials=!1),"responseType"in y&&b.blob&&(y.responseType="blob"),m.headers.forEach(function(p,E){y.setRequestHeader(E,p)}),m.signal&&(m.signal.addEventListener("abort",O),y.onreadystatechange=function(){y.readyState===4&&m.signal.removeEventListener("abort",O)}),y.send(typeof m._bodyInit=="undefined"?null:m._bodyInit)})}return c.polyfill=!0,l.fetch||(l.fetch=c,l.Headers=g,l.Request=x,l.Response=_),h.Headers=g,h.Request=x,h.Response=_,h.fetch=c,Object.defineProperty(h,"__esModule",{value:!0}),h})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var u=a;e=u.fetch,e.default=u.fetch,e.fetch=u.fetch,e.Headers=u.Headers,e.Request=u.Request,e.Response=u.Response,t.exports=e})(ne,ne.exports);var me=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):void 0,re=me;function W(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(r){return typeof r}:W=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(t)}var be=10,ue=2;function ge(t){return Z(t,[])}function Z(t,e){switch(W(t)){case"string":return JSON.stringify(t);case"function":return t.name?"[function ".concat(t.name,"]"):"[function]";case"object":return t===null?"null":Oe(t,e);default:return String(t)}}function Oe(t,e){if(e.indexOf(t)!==-1)return"[Circular]";var r=[].concat(e,[t]),a=Te(t);if(a!==void 0){var u=a.call(t);if(u!==t)return typeof u=="string"?u:Z(u,r)}else if(Array.isArray(t))return Ee(t,r);return we(t,r)}function we(t,e){var r=Object.keys(t);if(r.length===0)return"{}";if(e.length>ue)return"["+Se(t)+"]";var a=r.map(function(u){var l=Z(t[u],e);return u+": "+l});return"{ "+a.join(", ")+" }"}function Ee(t,e){if(t.length===0)return"[]";if(e.length>ue)return"[Array]";for(var r=Math.min(be,t.length),a=t.length-r,u=[],l=0;l<r;++l)u.push(Z(t[l],e));return a===1?u.push("... 1 more item"):a>1&&u.push("... ".concat(a," more items")),"["+u.join(", ")+"]"}function Te(t){var e=t[String(re)];if(typeof e=="function")return e;if(typeof t.inspect=="function")return t.inspect}function Se(t){var e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){var r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return e}function De(t,e){var r=Boolean(t);if(!r)throw new Error(e!=null?e:"Unexpected invariant triggered.")}function ce(t){var e=t.prototype.toJSON;typeof e=="function"||De(0),t.prototype.inspect=e,re&&(t.prototype[re]=e)}var Ae=function(){function t(r,a,u){this.start=r.start,this.end=a.end,this.startToken=r,this.endToken=a,this.source=u}var e=t.prototype;return e.toJSON=function(){return{start:this.start,end:this.end}},t}();ce(Ae);var je=function(){function t(r,a,u,l,h,b,v){this.kind=r,this.start=a,this.end=u,this.line=l,this.column=h,this.value=v,this.prev=b,this.next=null}var e=t.prototype;return e.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},t}();ce(je);function oe(t){return t!=null&&typeof t.kind=="string"}var xe={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},qe=Object.freeze({});function Ne(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xe,a=void 0,u=Array.isArray(t),l=[t],h=-1,b=[],v=void 0,A=void 0,T=void 0,w=[],j=[],R=t;do{h++;var g=h===l.length,I=g&&b.length!==0;if(g){if(A=j.length===0?void 0:w[w.length-1],v=T,T=j.pop(),I){if(u)v=v.slice();else{for(var J={},G=0,X=Object.keys(v);G<X.length;G++){var C=X[G];J[C]=v[C]}v=J}for(var V=0,M=0;M<b.length;M++){var H=b[M][0],$=b[M][1];u&&(H-=V),u&&$===null?(v.splice(H,1),V++):v[H]=$}}h=a.index,l=a.keys,b=a.edits,u=a.inArray,a=a.prev}else{if(A=T?u?h:l[h]:void 0,v=T?T[A]:R,v==null)continue;T&&w.push(A)}var x=void 0;if(!Array.isArray(v)){if(!oe(v))throw new Error("Invalid AST Node: ".concat(ge(v),"."));var Q=Fe(e,v.kind,g);if(Q){if(x=Q.call(e,v,A,T,w,j),x===qe)break;if(x===!1){if(!g){w.pop();continue}}else if(x!==void 0&&(b.push([A,x]),!g))if(oe(x))v=x;else{w.pop();continue}}}if(x===void 0&&I&&b.push([A,v]),g)w.pop();else{var z;a={inArray:u,index:h,keys:l,edits:b,prev:a},u=Array.isArray(v),l=u?v:(z=r[v.kind])!==null&&z!==void 0?z:[],h=-1,b=[],T&&j.push(T),T=v}}while(a!==void 0);return b.length!==0&&(R=b[b.length-1][1]),R}function Fe(t,e,r){var a=t[e];if(a){if(!r&&typeof a=="function")return a;var u=r?a.leave:a.enter;if(typeof u=="function")return u}else{var l=r?t.leave:t.enter;if(l){if(typeof l=="function")return l;var h=l[e];if(typeof h=="function")return h}}}function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=t.indexOf(`
`)===-1,u=t[0]===" "||t[0]==="	",l=t[t.length-1]==='"',h=t[t.length-1]==="\\",b=!a||l||h||r,v="";return b&&!(a&&u)&&(v+=`
`+e),v+=e?t.replace(/\n/g,`
`+e):t,b&&(v+=`
`),'"""'+v.replace(/"""/g,'\\"""')+'"""'}function _e(t){return Ne(t,{leave:Be})}var Pe=80,Be={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return d(e.definitions,`

`)+`
`},OperationDefinition:function(e){var r=e.operation,a=e.name,u=S("(",d(e.variableDefinitions,", "),")"),l=d(e.directives," "),h=e.selectionSet;return!a&&!l&&!u&&r==="query"?h:d([r,d([a,u]),l,h]," ")},VariableDefinition:function(e){var r=e.variable,a=e.type,u=e.defaultValue,l=e.directives;return r+": "+a+S(" = ",u)+S(" ",d(l," "))},SelectionSet:function(e){var r=e.selections;return B(r)},Field:function(e){var r=e.alias,a=e.name,u=e.arguments,l=e.directives,h=e.selectionSet,b=S("",r,": ")+a,v=b+S("(",d(u,", "),")");return v.length>Pe&&(v=b+S(`(
`,Y(d(u,`
`)),`
)`)),d([v,d(l," "),h]," ")},Argument:function(e){var r=e.name,a=e.value;return r+": "+a},FragmentSpread:function(e){var r=e.name,a=e.directives;return"..."+r+S(" ",d(a," "))},InlineFragment:function(e){var r=e.typeCondition,a=e.directives,u=e.selectionSet;return d(["...",S("on ",r),d(a," "),u]," ")},FragmentDefinition:function(e){var r=e.name,a=e.typeCondition,u=e.variableDefinitions,l=e.directives,h=e.selectionSet;return"fragment ".concat(r).concat(S("(",d(u,", "),")")," ")+"on ".concat(a," ").concat(S("",d(l," ")," "))+h},IntValue:function(e){var r=e.value;return r},FloatValue:function(e){var r=e.value;return r},StringValue:function(e,r){var a=e.value,u=e.block;return u?Re(a,r==="description"?"":"  "):JSON.stringify(a)},BooleanValue:function(e){var r=e.value;return r?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){var r=e.value;return r},ListValue:function(e){var r=e.values;return"["+d(r,", ")+"]"},ObjectValue:function(e){var r=e.fields;return"{"+d(r,", ")+"}"},ObjectField:function(e){var r=e.name,a=e.value;return r+": "+a},Directive:function(e){var r=e.name,a=e.arguments;return"@"+r+S("(",d(a,", "),")")},NamedType:function(e){var r=e.name;return r},ListType:function(e){var r=e.type;return"["+r+"]"},NonNullType:function(e){var r=e.type;return r+"!"},SchemaDefinition:P(function(t){var e=t.directives,r=t.operationTypes;return d(["schema",d(e," "),B(r)]," ")}),OperationTypeDefinition:function(e){var r=e.operation,a=e.type;return r+": "+a},ScalarTypeDefinition:P(function(t){var e=t.name,r=t.directives;return d(["scalar",e,d(r," ")]," ")}),ObjectTypeDefinition:P(function(t){var e=t.name,r=t.interfaces,a=t.directives,u=t.fields;return d(["type",e,S("implements ",d(r," & ")),d(a," "),B(u)]," ")}),FieldDefinition:P(function(t){var e=t.name,r=t.arguments,a=t.type,u=t.directives;return e+(se(r)?S(`(
`,Y(d(r,`
`)),`
)`):S("(",d(r,", "),")"))+": "+a+S(" ",d(u," "))}),InputValueDefinition:P(function(t){var e=t.name,r=t.type,a=t.defaultValue,u=t.directives;return d([e+": "+r,S("= ",a),d(u," ")]," ")}),InterfaceTypeDefinition:P(function(t){var e=t.name,r=t.interfaces,a=t.directives,u=t.fields;return d(["interface",e,S("implements ",d(r," & ")),d(a," "),B(u)]," ")}),UnionTypeDefinition:P(function(t){var e=t.name,r=t.directives,a=t.types;return d(["union",e,d(r," "),a&&a.length!==0?"= "+d(a," | "):""]," ")}),EnumTypeDefinition:P(function(t){var e=t.name,r=t.directives,a=t.values;return d(["enum",e,d(r," "),B(a)]," ")}),EnumValueDefinition:P(function(t){var e=t.name,r=t.directives;return d([e,d(r," ")]," ")}),InputObjectTypeDefinition:P(function(t){var e=t.name,r=t.directives,a=t.fields;return d(["input",e,d(r," "),B(a)]," ")}),DirectiveDefinition:P(function(t){var e=t.name,r=t.arguments,a=t.repeatable,u=t.locations;return"directive @"+e+(se(r)?S(`(
`,Y(d(r,`
`)),`
)`):S("(",d(r,", "),")"))+(a?" repeatable":"")+" on "+d(u," | ")}),SchemaExtension:function(e){var r=e.directives,a=e.operationTypes;return d(["extend schema",d(r," "),B(a)]," ")},ScalarTypeExtension:function(e){var r=e.name,a=e.directives;return d(["extend scalar",r,d(a," ")]," ")},ObjectTypeExtension:function(e){var r=e.name,a=e.interfaces,u=e.directives,l=e.fields;return d(["extend type",r,S("implements ",d(a," & ")),d(u," "),B(l)]," ")},InterfaceTypeExtension:function(e){var r=e.name,a=e.interfaces,u=e.directives,l=e.fields;return d(["extend interface",r,S("implements ",d(a," & ")),d(u," "),B(l)]," ")},UnionTypeExtension:function(e){var r=e.name,a=e.directives,u=e.types;return d(["extend union",r,d(a," "),u&&u.length!==0?"= "+d(u," | "):""]," ")},EnumTypeExtension:function(e){var r=e.name,a=e.directives,u=e.values;return d(["extend enum",r,d(a," "),B(u)]," ")},InputObjectTypeExtension:function(e){var r=e.name,a=e.directives,u=e.fields;return d(["extend input",r,d(a," "),B(u)]," ")}};function P(t){return function(e){return d([e.description,t(e)],`
`)}}function d(t){var e,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(e=t==null?void 0:t.filter(function(a){return a}).join(r))!==null&&e!==void 0?e:""}function B(t){return S(`{
`,Y(d(t,`
`)),`
}`)}function S(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return e!=null&&e!==""?t+e+r:""}function Y(t){return S("  ",t.replace(/\n/g,`
  `))}function Ie(t){return t.indexOf(`
`)!==-1}function se(t){return t!=null&&t.some(Ie)}var Ce=Object.freeze(Object.defineProperty({__proto__:null,print:_e},Symbol.toStringTag,{value:"Module"})),Ve=ye(Ce),ie={},K={},fe=function(e){var r=e.uri,a=e.name,u=e.type;this.uri=r,this.name=a,this.type=u},Me=fe,le=function(e){return typeof File!="undefined"&&e instanceof File||typeof Blob!="undefined"&&e instanceof Blob||e instanceof Me},Ue=le,Le=function t(e,r,a){r===void 0&&(r=""),a===void 0&&(a=Ue);var u,l=new Map;function h(T,w){var j=l.get(w);j?j.push.apply(j,T):l.set(w,T)}if(a(e))u=null,h([r],e);else{var b=r?r+".":"";if(typeof FileList!="undefined"&&e instanceof FileList)u=Array.prototype.map.call(e,function(T,w){return h([""+b+w],T),null});else if(Array.isArray(e))u=e.map(function(T,w){var j=t(T,""+b+w,a);return j.files.forEach(h),j.clone});else if(e&&e.constructor===Object){u={};for(var v in e){var A=t(e[v],""+b+v,a);A.files.forEach(h),u[v]=A.clone}}else u=e}return{clone:u,files:l}};K.ReactNativeFile=fe;K.extractFiles=Le;K.isExtractableFile=le;var He=typeof self=="object"?self.FormData:window.FormData,ke=D&&D.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ie,"__esModule",{value:!0});var de=K,Je=ke(He),Ge=function(t){return de.isExtractableFile(t)||t!==null&&typeof t=="object"&&typeof t.pipe=="function"};function Qe(t,e,r){var a=de.extractFiles({query:t,variables:e,operationName:r},"",Ge),u=a.clone,l=a.files;if(l.size===0){if(!Array.isArray(t))return JSON.stringify(u);if(typeof e!="undefined"&&!Array.isArray(e))throw new Error("Cannot create request body with given variable type, array expected");var h=t.reduce(function(w,j,R){return w.push({query:j,variables:e?e[R]:void 0}),w},[]);return JSON.stringify(h)}var b=typeof FormData=="undefined"?Je.default:FormData,v=new b;v.append("operations",JSON.stringify(u));var A={},T=0;return l.forEach(function(w){A[++T]=w}),v.append("map",JSON.stringify(A)),T=0,l.forEach(function(w,j){v.append(""+ ++T,j)}),v}ie.default=Qe;var ee={},ze=D&&D.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,u){a.__proto__=u}||function(a,u){for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(a[l]=u[l])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function a(){this.constructor=e}e.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)}}();Object.defineProperty(ee,"__esModule",{value:!0});ee.ClientError=void 0;var Xe=function(t){ze(e,t);function e(r,a){var u=this,l=e.extractMessage(r)+": "+JSON.stringify({response:r,request:a});return u=t.call(this,l)||this,Object.setPrototypeOf(u,e.prototype),u.response=r,u.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(u,e),u}return e.extractMessage=function(r){try{return r.errors[0].message}catch{return"GraphQL Error (Code: "+r.status+")"}},e}(Error);ee.ClientError=Xe;(function(t){var e=D&&D.__assign||function(){return e=Object.assign||function(o){for(var c,n=1,i=arguments.length;n<i;n++){c=arguments[n];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(o[s]=c[s])}return o},e.apply(this,arguments)},r=D&&D.__createBinding||(Object.create?function(o,c,n,i){i===void 0&&(i=n),Object.defineProperty(o,i,{enumerable:!0,get:function(){return c[n]}})}:function(o,c,n,i){i===void 0&&(i=n),o[i]=c[n]}),a=D&&D.__setModuleDefault||(Object.create?function(o,c){Object.defineProperty(o,"default",{enumerable:!0,value:c})}:function(o,c){o.default=c}),u=D&&D.__importStar||function(o){if(o&&o.__esModule)return o;var c={};if(o!=null)for(var n in o)n!=="default"&&Object.prototype.hasOwnProperty.call(o,n)&&r(c,o,n);return a(c,o),c},l=D&&D.__awaiter||function(o,c,n,i){function s(f){return f instanceof n?f:new n(function(m){m(f)})}return new(n||(n=Promise))(function(f,m){function y(E){try{p(i.next(E))}catch(N){m(N)}}function O(E){try{p(i.throw(E))}catch(N){m(N)}}function p(E){E.done?f(E.value):s(E.value).then(y,O)}p((i=i.apply(o,c||[])).next())})},h=D&&D.__generator||function(o,c){var n={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},i,s,f,m;return m={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function y(p){return function(E){return O([p,E])}}function O(p){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,s&&(f=p[0]&2?s.return:p[0]?s.throw||((f=s.return)&&f.call(s),0):s.next)&&!(f=f.call(s,p[1])).done)return f;switch(s=0,f&&(p=[p[0]&2,f.value]),p[0]){case 0:case 1:f=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,s=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(f=n.trys,!(f=f.length>0&&f[f.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!f||p[1]>f[0]&&p[1]<f[3])){n.label=p[1];break}if(p[0]===6&&n.label<f[1]){n.label=f[1],f=p;break}if(f&&n.label<f[2]){n.label=f[2],n.ops.push(p);break}f[2]&&n.ops.pop(),n.trys.pop();continue}p=c.call(o,n)}catch(E){p=[6,E],s=0}finally{i=f=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},b=D&&D.__rest||function(o,c){var n={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&c.indexOf(i)<0&&(n[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(o);s<i.length;s++)c.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(o,i[s])&&(n[i[s]]=o[i[s]]);return n},v=D&&D.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.gql=t.batchRequests=t.request=t.rawRequest=t.GraphQLClient=t.ClientError=void 0;var A=u(ne.exports),T=A,w=Ve,j=v(ie),R=ee;Object.defineProperty(t,"ClientError",{enumerable:!0,get:function(){return R.ClientError}});var g=function(o){var c={};return o&&(typeof Headers!="undefined"&&o instanceof Headers||o instanceof T.Headers?c=_(o):Array.isArray(o)?o.forEach(function(n){var i=n[0],s=n[1];c[i]=s}):c=o),c},I=function(o){return o.replace(/([\s,]|#[^\n\r]+)+/g," ").trim()},J=function(o){var c=o.query,n=o.variables,i=o.operationName;if(!Array.isArray(c)){var s=["query="+encodeURIComponent(I(c))];return n&&s.push("variables="+encodeURIComponent(JSON.stringify(n))),i&&s.push("operationName="+encodeURIComponent(i)),s.join("&")}if(typeof n!="undefined"&&!Array.isArray(n))throw new Error("Cannot create query with given variable type, array expected");var f=c.reduce(function(m,y,O){return m.push({query:I(y),variables:n?JSON.stringify(n[O]):void 0}),m},[]);return"query="+encodeURIComponent(JSON.stringify(f))},G=function(o){var c=o.url,n=o.query,i=o.variables,s=o.operationName,f=o.headers,m=o.fetch,y=o.fetchOptions;return l(void 0,void 0,void 0,function(){var O;return h(this,function(p){switch(p.label){case 0:return O=j.default(n,i,s),[4,m(c,e({method:"POST",headers:e(e({},typeof O=="string"?{"Content-Type":"application/json"}:{}),f),body:O},y))];case 1:return[2,p.sent()]}})})},X=function(o){var c=o.url,n=o.query,i=o.variables,s=o.operationName,f=o.headers,m=o.fetch,y=o.fetchOptions;return l(void 0,void 0,void 0,function(){var O;return h(this,function(p){switch(p.label){case 0:return O=J({query:n,variables:i,operationName:s}),[4,m(c+"?"+O,e({method:"GET",headers:f},y))];case 1:return[2,p.sent()]}})})},C=function(){function o(c,n){this.url=c,this.options=n||{}}return o.prototype.rawRequest=function(c,n,i){var s=this.options,f=s.headers,m=s.fetch,y=m===void 0?A.default:m,O=s.method,p=O===void 0?"POST":O,E=b(s,["headers","fetch","method"]),N=this.url;return V({url:N,query:c,variables:n,headers:e(e({},g(f)),g(i)),operationName:void 0,fetch:y,method:p,fetchOptions:E})},o.prototype.request=function(c,n,i){return l(this,void 0,void 0,function(){var s,f,m,y,O,p,E,N,F,q,k,U;return h(this,function(L){switch(L.label){case 0:return s=this.options,f=s.headers,m=s.fetch,y=m===void 0?A.default:m,O=s.method,p=O===void 0?"POST":O,E=b(s,["headers","fetch","method"]),N=this.url,F=Q(c),q=F.query,k=F.operationName,[4,V({url:N,query:q,variables:n,headers:e(e({},g(f)),g(i)),operationName:k,fetch:y,method:p,fetchOptions:E})];case 1:return U=L.sent().data,[2,U]}})})},o.prototype.batchRequests=function(c,n){return l(this,void 0,void 0,function(){var i,s,f,m,y,O,p,E,N,F,q;return h(this,function(k){switch(k.label){case 0:return i=this.options,s=i.headers,f=i.fetch,m=f===void 0?A.default:f,y=i.method,O=y===void 0?"POST":y,p=b(i,["headers","fetch","method"]),E=this.url,N=c.map(function(U){var L=U.document;return Q(L).query}),F=c.map(function(U){var L=U.variables;return L}),[4,V({url:E,query:N,variables:F,headers:e(e({},g(s)),g(n)),operationName:void 0,fetch:m,method:O,fetchOptions:p})];case 1:return q=k.sent().data,[2,q]}})})},o.prototype.setHeaders=function(c){return this.options.headers=c,this},o.prototype.setHeader=function(c,n){var i,s=this.options.headers;return s?s[c]=n:this.options.headers=(i={},i[c]=n,i),this},o.prototype.setEndpoint=function(c){return this.url=c,this},o}();t.GraphQLClient=C;function V(o){var c=o.url,n=o.query,i=o.variables,s=o.headers,f=o.operationName,m=o.fetch,y=o.method,O=y===void 0?"POST":y,p=o.fetchOptions;return l(this,void 0,void 0,function(){var E,N,F,q,k,U,L,ae;return h(this,function(te){switch(te.label){case 0:return E=O.toUpperCase()==="POST"?G:X,N=Array.isArray(n),[4,E({url:c,query:n,variables:i,operationName:f,headers:s,fetch:m,fetchOptions:p})];case 1:return F=te.sent(),[4,x(F)];case 2:if(q=te.sent(),k=N&&Array.isArray(q)?!q.some(function(pe){var he=pe.data;return!he}):!!q.data,F.ok&&!q.errors&&k)return U=F.headers,L=F.status,[2,e(e({},N?{data:q}:q),{headers:U,status:L})];throw ae=typeof q=="string"?{error:q}:q,new R.ClientError(e(e({},ae),{status:F.status,headers:F.headers}),{query:n,variables:i})}})})}function M(o,c,n,i){return l(this,void 0,void 0,function(){var s;return h(this,function(f){return s=new C(o),[2,s.rawRequest(c,n,i)]})})}t.rawRequest=M;function H(o,c,n,i){return l(this,void 0,void 0,function(){var s;return h(this,function(f){return s=new C(o),[2,s.request(c,n,i)]})})}t.request=H;function $(o,c,n){return l(this,void 0,void 0,function(){var i;return h(this,function(s){return i=new C(o),[2,i.batchRequests(c,n)]})})}t.batchRequests=$,t.default=H;function x(o){var c=o.headers.get("Content-Type");return c&&c.startsWith("application/json")?o.json():o.text()}function Q(o){var c;if(typeof o=="string")return{query:o};var n=void 0,i=o.definitions.filter(function(s){return s.kind==="OperationDefinition"});return i.length===1&&(n=(c=i[0].name)===null||c===void 0?void 0:c.value),{query:w.print(o),operationName:n}}function z(o){for(var c=[],n=1;n<arguments.length;n++)c[n-1]=arguments[n];return o.reduce(function(i,s,f){return""+i+s+(f in c?c[f]:"")},"")}t.gql=z;function _(o){var c={};return o.forEach(function(n,i){c[i]=n}),c}})(ve);export{ve as d};
