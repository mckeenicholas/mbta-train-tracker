import{S as T,A as Y,B as Z,C as w,D as $,F as h,U as v,G as R,i as b,H as K,I as G,J as H,K as V,L as z,M as J,P as q,N as Q,d as B,O as C,Q as D,R as W,T as X,V as F,W as k,X as ee,Y as re,k as M,Z as ne,_ as te,$ as ie}from"./utils.D_ZagUSB.js";import{c as se}from"./disclose-version.BWwIYbep.js";function I(e,r=null,u){if(typeof e!="object"||e===null||T in e)return e;const f=H(e);if(f!==Y&&f!==Z)return e;var i=new Map,d=V(e),x=w(0);d&&i.set("length",w(e.length));var P;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&$();var s=i.get(n);return s===void 0?(s=w(t.value),i.set(n,s)):h(s,I(t.value,P)),!0},deleteProperty(l,n){var t=i.get(n);if(t===void 0)n in l&&i.set(n,w(v));else{if(d&&typeof n=="string"){var s=i.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&h(s,a)}h(t,v),U(x)}return!0},get(l,n,t){var _;if(n===T)return e;var s=i.get(n),a=n in l;if(s===void 0&&(!a||(_=R(l,n))!=null&&_.writable)&&(s=w(I(a?l[n]:v,P)),i.set(n,s)),s!==void 0){var o=b(s);return o===v?void 0:o}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var s=i.get(n);s&&(t.value=b(s))}else if(t===void 0){var a=i.get(n),o=a==null?void 0:a.v;if(a!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(l,n){var o;if(n===T)return!0;var t=i.get(n),s=t!==void 0&&t.v!==v||Reflect.has(l,n);if(t!==void 0||K!==null&&(!s||(o=R(l,n))!=null&&o.writable)){t===void 0&&(t=w(s?I(l[n],P):v),i.set(n,t));var a=b(t);if(a===v)return!1}return s},set(l,n,t,s){var O;var a=i.get(n),o=n in l;if(d&&n==="length")for(var _=t;_<a.v;_+=1){var p=i.get(_+"");p!==void 0?h(p,v):_ in l&&(p=w(v),i.set(_+"",p))}a===void 0?(!o||(O=R(l,n))!=null&&O.writable)&&(a=w(void 0),h(a,I(t,P)),i.set(n,a)):(o=a.v!==v,h(a,I(t,P)));var y=Reflect.getOwnPropertyDescriptor(l,n);if(y!=null&&y.set&&y.set.call(s,t),!o){if(d&&typeof n=="string"){var E=i.get("length"),m=Number(n);Number.isInteger(m)&&m>=E.v&&h(E,m+1)}U(x)}return!0},ownKeys(l){b(x);var n=Reflect.ownKeys(l).filter(a=>{var o=i.get(a);return o===void 0||o.v!==v});for(var[t,s]of i)s.v!==v&&!(t in l)&&n.push(t);return n},setPrototypeOf(){G()}})}function U(e,r=1){h(e,e.v+r)}const ue={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function de(e,r,u){return new Proxy({props:e,exclude:r},ue)}const fe={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=le({get[r](){return e.props[r]}},r,q)),e.special[r](u),C(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),C(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ve(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},fe)}const ae={get(e,r){let u=e.props.length;for(;u--;){let f=e.props[u];if(D(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f)return f[r]}},set(e,r,u){let f=e.props.length;for(;f--;){let i=e.props[f];D(i)&&(i=i());const d=R(i,r);if(d&&d.set)return d.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let f=e.props[u];if(D(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f){const i=R(f,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){for(let u of e.props)if(D(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){D(u)&&(u=u());for(const f in u)r.includes(f)||r.push(f)}return r}};function _e(...e){return new Proxy({props:e},ae)}function j(e){for(var r=K,u=K;r!==null&&!(r.f&(W|X));)r=r.parent;try{return F(r),e()}finally{F(u)}}function le(e,r,u,f){var L;var i=(u&k)!==0,d=(u&ee)!==0,x=(u&re)!==0,P=(u&te)!==0,l=!1,n;x?[n,l]=se(()=>e[r]):n=e[r];var t=(L=R(e,r))==null?void 0:L.set,s=f,a=!0,o=!1,_=()=>(o=!0,a&&(a=!1,P?s=B(f):s=f),s);n===void 0&&f!==void 0&&(t&&d&&z(),n=_(),t&&t(n));var p;if(d)p=()=>{var c=e[r];return c===void 0?_():(a=!0,o=!1,c)};else{var y=j(()=>(i?M:ne)(()=>e[r]));y.f|=J,p=()=>{var c=b(y);return c!==void 0&&(s=void 0),c===void 0?s:c}}if(!(u&q))return p;if(t){var E=e.$$legacy;return function(c,g){return arguments.length>0?((!d||!g||E||l)&&t(g?p():c),c):p()}}var m=!1,O=!1,N=ie(n),S=j(()=>M(()=>{var c=p(),g=b(N);return m?(m=!1,O=!0,g):(O=!1,N.v=c)}));return i||(S.equals=Q),function(c,g){if(arguments.length>0){const A=g?b(S):d&&x?I(c):c;return S.equals(A)||(m=!0,h(N,A),o&&s!==void 0&&(s=A),B(()=>b(S))),c}return b(S)}}export{I as a,ve as l,le as p,de as r,_e as s};