var Y=e=>{throw TypeError(e)};var X=(e,t,s)=>t.has(e)||Y("Cannot "+s);var a=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s,i)=>(X(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),M=(e,t,s)=>(X(e,t,"access private method"),s);var J=(e,t,s,i)=>({set _(r){o(e,t,r,s)},get _(){return a(e,t,i)}});import{e as mt,a as lt,t as gt}from"../chunks/disclose-version.BWwIYbep.js";import{au as vt,p as ct,f as Pt,a as dt,c as bt,r as Qt}from"../chunks/utils.D_ZagUSB.js";import{s as wt,a as Ot}from"../chunks/snippet.QKTiVmVV.js";import{S as ft,h as yt,Q as Mt,n as y,m as Z,R as Ct,c as Dt,a as $,b as Q,e as qt,d as At,f as Ft,g as St,o as tt,r as et,i as Et,j as st,p as it,s as Rt,k as Tt}from"../chunks/context.D9o0r_8h.js";import{i as Kt}from"../chunks/lifecycle.YOtKKRBG.js";import{p as kt}from"../chunks/props.D1IrFqFA.js";import{o as xt,a as It}from"../chunks/index-client.BhfrBNjO.js";const _t=vt,Ht=!1,ee=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ht},Symbol.toStringTag,{value:"Module"}));var g,nt,jt=(nt=class extends ft{constructor(t={}){super();l(this,g);this.config=t,o(this,g,new Map)}build(t,s,i){const r=s.queryKey,u=s.queryHash??yt(r,s);let c=this.get(u);return c||(c=new Mt({cache:this,queryKey:r,queryHash:u,options:t.defaultQueryOptions(s),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(c)),c}add(t){a(this,g).has(t.queryHash)||(a(this,g).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=a(this,g).get(t.queryHash);s&&(t.destroy(),s===t&&a(this,g).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){y.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return a(this,g).get(t)}getAll(){return[...a(this,g).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(i=>Z(s,i))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(i=>Z(t,i)):s}notify(t){y.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){y.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){y.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},g=new WeakMap,nt),v,d,T,P,C,ut,Bt=(ut=class extends Ct{constructor(t){super();l(this,P);l(this,v);l(this,d);l(this,T);this.mutationId=t.mutationId,o(this,d,t.mutationCache),o(this,v,[]),this.state=t.state||Gt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){a(this,v).includes(t)||(a(this,v).push(t),this.clearGcTimeout(),a(this,d).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){o(this,v,a(this,v).filter(s=>s!==t)),this.scheduleGc(),a(this,d).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){a(this,v).length||(this.state.status==="pending"?this.scheduleGc():a(this,d).remove(this))}continue(){var t;return((t=a(this,T))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var r,u,c,w,F,_,H,j,B,G,N,b,S,L,U,f,m,O,E,W;o(this,T,Dt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(h,R)=>{M(this,P,C).call(this,{type:"failed",failureCount:h,error:R})},onPause:()=>{M(this,P,C).call(this,{type:"pause"})},onContinue:()=>{M(this,P,C).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>a(this,d).canRun(this)}));const s=this.state.status==="pending",i=!a(this,T).canStart();try{if(!s){M(this,P,C).call(this,{type:"pending",variables:t,isPaused:i}),await((u=(r=a(this,d).config).onMutate)==null?void 0:u.call(r,t,this));const R=await((w=(c=this.options).onMutate)==null?void 0:w.call(c,t));R!==this.state.context&&M(this,P,C).call(this,{type:"pending",context:R,variables:t,isPaused:i})}const h=await a(this,T).start();return await((_=(F=a(this,d).config).onSuccess)==null?void 0:_.call(F,h,t,this.state.context,this)),await((j=(H=this.options).onSuccess)==null?void 0:j.call(H,h,t,this.state.context)),await((G=(B=a(this,d).config).onSettled)==null?void 0:G.call(B,h,null,this.state.variables,this.state.context,this)),await((b=(N=this.options).onSettled)==null?void 0:b.call(N,h,null,t,this.state.context)),M(this,P,C).call(this,{type:"success",data:h}),h}catch(h){try{throw await((L=(S=a(this,d).config).onError)==null?void 0:L.call(S,h,t,this.state.context,this)),await((f=(U=this.options).onError)==null?void 0:f.call(U,h,t,this.state.context)),await((O=(m=a(this,d).config).onSettled)==null?void 0:O.call(m,void 0,h,this.state.variables,this.state.context,this)),await((W=(E=this.options).onSettled)==null?void 0:W.call(E,void 0,h,t,this.state.context)),h}finally{M(this,P,C).call(this,{type:"error",error:h})}}finally{a(this,d).runNext(this)}}},v=new WeakMap,d=new WeakMap,T=new WeakMap,P=new WeakSet,C=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),y.batch(()=>{a(this,v).forEach(i=>{i.onMutationUpdate(t)}),a(this,d).notify({mutation:this,type:"updated",action:t})})},ut);function Gt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var p,z,ot,Nt=(ot=class extends ft{constructor(t={}){super();l(this,p);l(this,z);this.config=t,o(this,p,new Map),o(this,z,Date.now())}build(t,s,i){const r=new Bt({mutationCache:this,mutationId:++J(this,z)._,options:t.defaultMutationOptions(s),state:i});return this.add(r),r}add(t){const s=V(t),i=a(this,p).get(s)??[];i.push(t),a(this,p).set(s,i),this.notify({type:"added",mutation:t})}remove(t){var i;const s=V(t);if(a(this,p).has(s)){const r=(i=a(this,p).get(s))==null?void 0:i.filter(u=>u!==t);r&&(r.length===0?a(this,p).delete(s):a(this,p).set(s,r))}this.notify({type:"removed",mutation:t})}canRun(t){var i;const s=(i=a(this,p).get(V(t)))==null?void 0:i.find(r=>r.state.status==="pending");return!s||s===t}runNext(t){var i;const s=(i=a(this,p).get(V(t)))==null?void 0:i.find(r=>r!==t&&r.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){y.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...a(this,p).values()].flat()}find(t){const s={exact:!0,...t};return this.getAll().find(i=>$(s,i))}findAll(t={}){return this.getAll().filter(s=>$(t,s))}notify(t){y.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){const t=this.getAll().filter(s=>s.state.isPaused);return y.batch(()=>Promise.all(t.map(s=>s.continue().catch(Q))))}},p=new WeakMap,z=new WeakMap,ot);function V(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function at(e){return{onFetch:(t,s)=>{var H,j,B,G,N;const i=t.options,r=(B=(j=(H=t.fetchOptions)==null?void 0:H.meta)==null?void 0:j.fetchMore)==null?void 0:B.direction,u=((G=t.state.data)==null?void 0:G.pages)||[],c=((N=t.state.data)==null?void 0:N.pageParams)||[];let w={pages:[],pageParams:[]},F=0;const _=async()=>{let b=!1;const S=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},L=qt(t.options,t.fetchOptions),U=async(f,m,O)=>{if(b)return Promise.reject();if(m==null&&f.pages.length)return Promise.resolve(f);const E={queryKey:t.queryKey,pageParam:m,direction:O?"backward":"forward",meta:t.options.meta};S(E);const W=await L(E),{maxPages:h}=t.options,R=O?At:Ft;return{pages:R(f.pages,W,h),pageParams:R(f.pageParams,m,h)}};if(r&&u.length){const f=r==="backward",m=f?Ut:rt,O={pages:u,pageParams:c},E=m(i,O);w=await U(O,E,f)}else{const f=e??u.length;do{const m=F===0?c[0]??i.initialPageParam:rt(i,w);if(F>0&&m==null)break;w=await U(w,m),F++}while(F<f)}return w};t.options.persister?t.fetchFn=()=>{var b,S;return(S=(b=t.options).persister)==null?void 0:S.call(b,_,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=_}}}function rt(e,{pages:t,pageParams:s}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,s[i],s):void 0}function Ut(e,{pages:t,pageParams:s}){var i;return t.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,s[0],s):void 0}var n,D,q,K,k,A,x,I,ht,pt=(ht=class{constructor(e={}){l(this,n);l(this,D);l(this,q);l(this,K);l(this,k);l(this,A);l(this,x);l(this,I);o(this,n,e.queryCache||new jt),o(this,D,e.mutationCache||new Nt),o(this,q,e.defaultOptions||{}),o(this,K,new Map),o(this,k,new Map),o(this,A,0)}mount(){J(this,A)._++,a(this,A)===1&&(o(this,x,St.subscribe(async e=>{e&&(await this.resumePausedMutations(),a(this,n).onFocus())})),o(this,I,tt.subscribe(async e=>{e&&(await this.resumePausedMutations(),a(this,n).onOnline())})))}unmount(){var e,t;J(this,A)._--,a(this,A)===0&&((e=a(this,x))==null||e.call(this),o(this,x,void 0),(t=a(this,I))==null||t.call(this),o(this,I,void 0))}isFetching(e){return a(this,n).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return a(this,D).findAll({...e,status:"pending"}).length}getQueryData(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=a(this,n).get(t.queryHash))==null?void 0:s.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const s=this.defaultQueryOptions(e),i=a(this,n).build(this,s);return e.revalidateIfStale&&i.isStaleByTime(et(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(t)}}getQueriesData(e){return a(this,n).findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=this.defaultQueryOptions({queryKey:e}),r=a(this,n).get(i.queryHash),u=r==null?void 0:r.state.data,c=Et(t,u);if(c!==void 0)return a(this,n).build(this,i).setData(c,{...s,manual:!0})}setQueriesData(e,t,s){return y.batch(()=>a(this,n).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=a(this,n).get(t.queryHash))==null?void 0:s.state}removeQueries(e){const t=a(this,n);y.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=a(this,n),i={type:"active",...e};return y.batch(()=>(s.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},i=y.batch(()=>a(this,n).findAll(e).map(r=>r.cancel(s)));return Promise.all(i).then(Q).catch(Q)}invalidateQueries(e={},t={}){return y.batch(()=>{if(a(this,n).findAll(e).forEach(i=>{i.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){const s={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},i=y.batch(()=>a(this,n).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let u=r.fetch(void 0,s);return s.throwOnError||(u=u.catch(Q)),r.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(i).then(Q)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=a(this,n).build(this,t);return s.isStaleByTime(et(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Q).catch(Q)}fetchInfiniteQuery(e){return e.behavior=at(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Q).catch(Q)}ensureInfiniteQueryData(e){return e.behavior=at(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return tt.isOnline()?a(this,D).resumePausedMutations():Promise.resolve()}getQueryCache(){return a(this,n)}getMutationCache(){return a(this,D)}getDefaultOptions(){return a(this,q)}setDefaultOptions(e){o(this,q,e)}setQueryDefaults(e,t){a(this,K).set(st(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...a(this,K).values()];let s={};return t.forEach(i=>{it(e,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(e,t){a(this,k).set(st(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...a(this,k).values()];let s={};return t.forEach(i=>{it(e,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...a(this,q).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=yt(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Rt&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...a(this,q).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){a(this,n).clear(),a(this,D).clear()}},n=new WeakMap,D=new WeakMap,q=new WeakMap,K=new WeakMap,k=new WeakMap,A=new WeakMap,x=new WeakMap,I=new WeakMap,ht);function zt(e,t){ct(t,!1);let s=kt(t,"client",24,()=>new pt);xt(()=>{s().mount()}),Tt(s()),It(()=>{s().unmount()}),Kt();var i=mt(),r=Pt(i);wt(r,t,"default",{}),lt(e,i),dt()}var Lt=gt('<div class="mx-auto w-full lg:w-3/4"><!></div>');function se(e,t){ct(t,!0);const s=new pt({defaultOptions:{queries:{enabled:_t}}});zt(e,{client:s,children:(i,r)=>{var u=Lt(),c=bt(u);Ot(c,()=>t.children),Qt(u),lt(i,u)},$$slots:{default:!0}}),dt()}export{se as component,ee as universal};