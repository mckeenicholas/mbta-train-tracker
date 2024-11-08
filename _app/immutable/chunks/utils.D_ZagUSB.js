const bn=!0;var Nn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,Qt=Object.getPrototypeOf;function Ln(t){return typeof t=="function"}const Xt=()=>{};function Hn(t){return t()}function ht(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,dt=4,Y=8,et=16,w=32,Z=64,R=128,V=256,p=512,g=1024,N=2048,b=4096,j=8192,tn=16384,Et=32768,Yn=65536,nn=1<<18,yt=1<<19,_t=Symbol("$state"),jn=Symbol("");function wt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!rn(t,this.v)}function en(t){throw new Error("effect_in_teardown")}function sn(){throw new Error("effect_in_unowned_derived")}function an(t){throw new Error("effect_orphan")}function un(){throw new Error("effect_update_depth_exceeded")}function Bn(){throw new Error("hydration_failed")}function Un(t){throw new Error("props_invalid_value")}function Vn(){throw new Error("state_descriptors_fixed")}function Gn(){throw new Error("state_prototype_fixed")}function on(){throw new Error("state_unsafe_local_read")}function ln(){throw new Error("state_unsafe_mutation")}function st(t){return{f:0,v:t,reactions:null,equals:wt,version:0}}function Kn(t){return Tt(st(t))}function fn(t,n=!1){var e;const r=st(t);return n||(r.equals=mt),i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function $n(t,n=!1){return Tt(fn(t,n))}function Tt(t){return l!==null&&l.f&T&&(y===null?gn([t]):y.push(t)),t}function At(t,n){return l!==null&&lt()&&l.f&(T|et)&&(y===null||!y.includes(t))&&ln(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),xt(t,g),lt()&&o!==null&&o.f&p&&!(o.f&w)&&(_!==null&&_.includes(t)?(E(o,g),z(o)):x===null?Sn([t]):x.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,a=0;a<s;a++){var u=r[a],f=u.f;f&g||!e&&u===o||(E(u,n),f&(p|R)&&(f&T?xt(u,N):z(u)))}}const Wn=1,Zn=2,zn=4,Jn=8,Qn=16,Xn=1,tr=2,nr=4,rr=8,er=16,sr=1,ar=2,cn="[",vn="[!",pn="]",gt={},ur=Symbol(),or="http://www.w3.org/2000/svg";function St(t){console.warn("hydration_mismatch")}let I=!1;function lr(t){I=t}let d;function M(t){if(t===null)throw St(),gt;return d=t}function ir(){return M(C(d))}function fr(t){if(I){if(C(d)!==null)throw St(),gt;d=t}}function _r(t=1){if(I){for(var n=t,r=d;n--;)r=C(r);d=r}}function cr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===cn||r===vn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ct,kt,It;function vr(){if(ct===void 0){ct=window;var t=Element.prototype,n=Node.prototype;kt=ft(n,"firstChild").get,It=ft(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Q(t=""){return document.createTextNode(t)}function X(t){return kt.call(t)}function C(t){return It.call(t)}function pr(t,n){if(!I)return X(t);var r=X(d);if(r===null)r=d.appendChild(Q());else if(n&&r.nodeType!==3){var e=Q();return r==null||r.before(e),M(e),e}return M(r),r}function hr(t,n){if(!I){var r=X(t);return r instanceof Comment&&r.data===""?C(r):r}return d}function dr(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=C(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var a=Q();return e==null||e.before(a),M(a),a}return M(e),e}function Er(t){t.textContent=""}function hn(t){var n=T|g;o===null?n|=R:o.f|=yt;const r={children:null,ctx:i,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(l!==null&&l.f&T){var e=l;(e.children??(e.children=[])).push(r)}return r}function yr(t){const n=hn(t);return n.equals=mt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?at(e):P(e)}}}function Ct(t){var n,r=o;W(t.parent);try{Rt(t),n=Vt(t)}finally{W(r)}return n}function Dt(t){var n=Ct(t),r=(k||t.f&R)&&t.deps!==null?N:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function at(t){Rt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){o===null&&l===null&&an(),l!==null&&l.f&R&&sn(),ot&&en()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,a=o,u={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{vt(!0),B(u),u.f|=tn}catch(c){throw P(u),c}finally{vt(f)}}else n!==null&&z(u);var m=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&yt)===0;if(!m&&!s&&e&&(a!==null&&dn(u,a),l!==null&&l.f&T)){var A=l;(A.children??(A.children=[])).push(u)}return u}function wr(){return l===null?!1:!k}function mr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Tr(t){Ot();var n=o!==null&&(o.f&w)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:l})}else{var e=bt(t);return e}}function Ar(t){return Ot(),ut(t)}function xr(t){const n=q(Z,t,!0);return()=>{P(n)}}function bt(t){return q(dt,t,!1)}function gr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ut(()=>{t(),!e.ran&&(e.ran=!0,At(r.l.r2,!0),zt(n))})}function Sr(){var t=i;ut(()=>{if(Zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,N),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ut(t){return q(Y,t,!0)}function kr(t){return En(t)}function En(t,n=0){return q(Y|et|n,t,!0)}function Ir(t,n=!0){return q(Y|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=l;pt(!0),$(null);try{n.call(null)}finally{pt(r),$(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:C(e);e.remove(),e=a}r=!0}Pt(t,n&&!r),qt(t),H(t,0),E(t,j);var u=t.transitions;if(u!==null)for(const m of u)m.stop();Nt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rr(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{P(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Mt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&Et)!==0||(e.f&w)!==0;Mt(e,n,a?r:!1),e=s}}}function Cr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){t.f^=b,F(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&w)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const mn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,tt=[],nt=[];function Ht(){G=!1;const t=tt.slice();tt=[],ht(t)}function Yt(){K=!1;const t=nt.slice();nt=[],ht(t)}function Dr(t){G||(G=!0,queueMicrotask(Ht)),tt.push(t)}function Or(t){K||(K=!0,mn(Yt)),nt.push(t)}function Tn(){G&&Ht(),K&&Yt()}function An(t){throw new Error("lifecycle_outside_component")}const jt=0,xn=1;let U=jt,L=!1,D=!1,ot=!1;function vt(t){D=t}function pt(t){ot=t}let S=[],O=0;let l=null;function $(t){l=t}let o=null;function W(t){o=t}let y=null;function gn(t){y=t}let _=null,h=0,x=null;function Sn(t){x=t}let Bt=0,k=!1,i=null;function Ut(){return++Bt}function lt(){return i!==null&&i.l===null}function F(t){var u,f;var n=t.f;if(n&g)return!0;if(n&N){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&Dt(a),e&&o!==null&&!k&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function kn(t,n,r){throw t}function Vt(t){var it;var n=_,r=h,e=x,s=l,a=k,u=y,f=i,m=t.f;_=null,h=0,x=null,l=m&(w|Z)?null:t,k=!D&&(m&R)!==0,y=null,i=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((it=c[v]).reactions??(it.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,x=e,l=s,k=a,y=u,i=f}}function In(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,N),n.f&(R|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=o;o=t;try{n&et?yn(t):Pt(t),qt(t),Nt(t);var e=Vt(t);t.teardown=typeof e=="function"?e:null,t.version=Bt}catch(s){kn(s)}finally{o=r}}}function Gt(){O>1e3&&(O=0,un()),O++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];$t(s,a),Rn(a)}}finally{D=r}}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|b))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}}function Cn(){if(L=!1,O>1001)return;const t=S;S=[],Kt(t),L||(O=0)}function z(t){U===jt&&(L||(L=!0,queueMicrotask(Cn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,u=a&&(s&p)!==0;if(!u&&!(s&b))if(s&Y){a?r.f^=p:F(r)&&B(r);var f=r.first;if(f!==null){r=f;continue}}else s&dt&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)f=e[c],n.push(f),$t(f,n)}function Wt(t){var n=U,r=S;try{Gt();const s=[];U=xn,S=s,L=!1,Kt(r);var e=t==null?void 0:t();return Tn(),(S.length>0||s.length>0)&&Wt(),O=0,e}finally{U=n,S=r}}async function br(){await Promise.resolve(),Wt()}function Zt(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Ct(t);return at(t),e}if(l!==null){y!==null&&y.includes(t)&&on();var s=l.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),x!==null&&o!==null&&o.f&p&&!(o.f&w)&&x.includes(t)&&(E(o,g),z(o))}else if(r&&t.deps===null){var a=t,u=a.parent;u!==null&&!((f=u.deriveds)!=null&&f.includes(a))&&(u.deriveds??(u.deriveds=[])).push(a)}return r&&(a=t,F(a)&&Dt(a)),t.v}function zt(t){const n=l;try{return l=null,t()}finally{l=n}}const Dn=~(g|N|p);function E(t,n){t.f=t.f&Dn|n}function Nr(t){return J().get(t)}function qr(t,n){return J().set(t,n),n}function Pr(t){return J().has(t)}function Fr(){return J()}function J(t){return i===null&&An(),i.c??(i.c=new Map(On(i)||void 0))}function On(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Mr(t,n=1){var r=+Zt(t);return At(t,r+n),r}function Lr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:st(!1)})}function Hr(t){const n=i;if(n!==null){const u=n.e;if(u!==null){var r=o,e=l;n.e=null;try{for(var s=0;s<u.length;s++){var a=u[s];W(a.effect),$(a.reaction),bt(a.fn)}}finally{W(r),$(e)}}i=n.p,n.m=!0}return{}}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(_t in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&_t in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}function jr(t,n,r){if(t==null)return n(void 0),r&&r(void 0),Xt;const e=zt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{fn as $,Fn as A,Mn as B,st as C,Vn as D,Et as E,At as F,ft as G,o as H,Gn as I,Qt as J,Nn as K,Un as L,Yn as M,mt as N,Mr as O,nr as P,Ln as Q,w as R,_t as S,Z as T,ur as U,W as V,Xn as W,tr as X,rr as Y,yr as Z,er as _,Hr as a,Cr as a0,Rr as a1,vn as a2,cr as a3,M as a4,lr as a5,bt as a6,ut as a7,Dr as a8,mr as a9,Wn as aA,_n as aB,Zn as aC,Qn as aD,Mt as aE,wn as aF,zn as aG,Jn as aH,or as aI,Or as aJ,jn as aK,Jt as aL,Pr as aM,wr as aN,Fr as aO,gr as aP,Sr as aQ,$n as aR,_r as aS,$ as aa,Pn as ab,l as ac,vr as ad,X as ae,cn as af,C as ag,gt as ah,pn as ai,St as aj,Bn as ak,Er as al,qn as am,xr as an,Q as ao,sr as ap,ar as aq,Wt as ar,br as as,Kn as at,bn as au,qr as av,Nr as aw,lt as ax,ct as ay,b as az,i as b,pr as c,zt as d,Ar as e,hr as f,Hn as g,ht as h,Zt as i,Yr as j,hn as k,An as l,jr as m,Xt as n,rn as o,Lr as p,I as q,fr as r,dr as s,kr as t,Tr as u,ir as v,En as w,Ir as x,P as y,d as z};
