var UC=Object.defineProperty;var FC=(t,n,s)=>n in t?UC(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s;var cn=(t,n,s)=>FC(t,typeof n!="symbol"?n+"":n,s);function IC(t,n){for(var s=0;s<n.length;s++){const r=n[s];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in t)){const u=Object.getOwnPropertyDescriptor(r,c);u&&Object.defineProperty(t,c,u.get?u:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(c){if(c.ep)return;c.ep=!0;const u=s(c);fetch(c.href,u)}})();function Ls(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gh={exports:{}},Ir={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb;function GC(){if(pb)return Ir;pb=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(r,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var f in c)f!=="key"&&(u[f]=c[f])}else u=c;return c=u.ref,{$$typeof:t,type:r,key:d,ref:c!==void 0?c:null,props:u}}return Ir.Fragment=n,Ir.jsx=s,Ir.jsxs=s,Ir}var yb;function WC(){return yb||(yb=1,gh.exports=GC()),gh.exports}var o=WC(),mh={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb;function KC(){if(bb)return we;bb=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=w&&R[w]||R["@@iterator"],typeof R=="function"?R:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function M(R,K,ee){this.props=R,this.context=K,this.refs=N,this.updater=ee||C}M.prototype.isReactComponent={},M.prototype.setState=function(R,K){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,K,"setState")},M.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function E(){}E.prototype=M.prototype;function j(R,K,ee){this.props=R,this.context=K,this.refs=N,this.updater=ee||C}var q=j.prototype=new E;q.constructor=j,T(q,M.prototype),q.isPureReactComponent=!0;var P=Array.isArray;function G(){}var _={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function J(R,K,ee){var te=ee.ref;return{$$typeof:t,type:R,key:K,ref:te!==void 0?te:null,props:ee}}function se(R,K){return J(R.type,K,R.props)}function re(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function he(R){var K={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return K[ee]})}var ve=/\/+/g;function U(R,K){return typeof R=="object"&&R!==null&&R.key!=null?he(""+R.key):K.toString(36)}function z(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(G,G):(R.status="pending",R.then(function(K){R.status==="pending"&&(R.status="fulfilled",R.value=K)},function(K){R.status==="pending"&&(R.status="rejected",R.reason=K)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function A(R,K,ee,te,ge){var pe=typeof R;(pe==="undefined"||pe==="boolean")&&(R=null);var ae=!1;if(R===null)ae=!0;else switch(pe){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(R.$$typeof){case t:case n:ae=!0;break;case y:return ae=R._init,A(ae(R._payload),K,ee,te,ge)}}if(ae)return ge=ge(R),ae=te===""?"."+U(R,0):te,P(ge)?(ee="",ae!=null&&(ee=ae.replace(ve,"$&/")+"/"),A(ge,K,ee,"",function(je){return je})):ge!=null&&(re(ge)&&(ge=se(ge,ee+(ge.key==null||R&&R.key===ge.key?"":(""+ge.key).replace(ve,"$&/")+"/")+ae)),K.push(ge)),1;ae=0;var be=te===""?".":te+":";if(P(R))for(var Se=0;Se<R.length;Se++)te=R[Se],pe=be+U(te,Se),ae+=A(te,K,ee,pe,ge);else if(Se=S(R),typeof Se=="function")for(R=Se.call(R),Se=0;!(te=R.next()).done;)te=te.value,pe=be+U(te,Se++),ae+=A(te,K,ee,pe,ge);else if(pe==="object"){if(typeof R.then=="function")return A(z(R),K,ee,te,ge);throw K=String(R),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ae}function D(R,K,ee){if(R==null)return R;var te=[],ge=0;return A(R,te,"","",function(pe){return K.call(ee,pe,ge++)}),te}function B(R){if(R._status===-1){var K=R._result;K=K(),K.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=K)}if(R._status===1)return R._result.default;throw R._result}var Q=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ne={map:D,forEach:function(R,K,ee){D(R,function(){K.apply(this,arguments)},ee)},count:function(R){var K=0;return D(R,function(){K++}),K},toArray:function(R){return D(R,function(K){return K})||[]},only:function(R){if(!re(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return we.Activity=b,we.Children=ne,we.Component=M,we.Fragment=s,we.Profiler=c,we.PureComponent=j,we.StrictMode=r,we.Suspense=g,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,we.__COMPILER_RUNTIME={__proto__:null,c:function(R){return _.H.useMemoCache(R)}},we.cache=function(R){return function(){return R.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(R,K,ee){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var te=T({},R.props),ge=R.key;if(K!=null)for(pe in K.key!==void 0&&(ge=""+K.key),K)!H.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(te[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)te.children=ee;else if(1<pe){for(var ae=Array(pe),be=0;be<pe;be++)ae[be]=arguments[be+2];te.children=ae}return J(R.type,ge,te)},we.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},we.createElement=function(R,K,ee){var te,ge={},pe=null;if(K!=null)for(te in K.key!==void 0&&(pe=""+K.key),K)H.call(K,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ge[te]=K[te]);var ae=arguments.length-2;if(ae===1)ge.children=ee;else if(1<ae){for(var be=Array(ae),Se=0;Se<ae;Se++)be[Se]=arguments[Se+2];ge.children=be}if(R&&R.defaultProps)for(te in ae=R.defaultProps,ae)ge[te]===void 0&&(ge[te]=ae[te]);return J(R,pe,ge)},we.createRef=function(){return{current:null}},we.forwardRef=function(R){return{$$typeof:f,render:R}},we.isValidElement=re,we.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:B}},we.memo=function(R,K){return{$$typeof:p,type:R,compare:K===void 0?null:K}},we.startTransition=function(R){var K=_.T,ee={};_.T=ee;try{var te=R(),ge=_.S;ge!==null&&ge(ee,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(G,Q)}catch(pe){Q(pe)}finally{K!==null&&ee.types!==null&&(K.types=ee.types),_.T=K}},we.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},we.use=function(R){return _.H.use(R)},we.useActionState=function(R,K,ee){return _.H.useActionState(R,K,ee)},we.useCallback=function(R,K){return _.H.useCallback(R,K)},we.useContext=function(R){return _.H.useContext(R)},we.useDebugValue=function(){},we.useDeferredValue=function(R,K){return _.H.useDeferredValue(R,K)},we.useEffect=function(R,K){return _.H.useEffect(R,K)},we.useEffectEvent=function(R){return _.H.useEffectEvent(R)},we.useId=function(){return _.H.useId()},we.useImperativeHandle=function(R,K,ee){return _.H.useImperativeHandle(R,K,ee)},we.useInsertionEffect=function(R,K){return _.H.useInsertionEffect(R,K)},we.useLayoutEffect=function(R,K){return _.H.useLayoutEffect(R,K)},we.useMemo=function(R,K){return _.H.useMemo(R,K)},we.useOptimistic=function(R,K){return _.H.useOptimistic(R,K)},we.useReducer=function(R,K,ee){return _.H.useReducer(R,K,ee)},we.useRef=function(R){return _.H.useRef(R)},we.useState=function(R){return _.H.useState(R)},we.useSyncExternalStore=function(R,K,ee){return _.H.useSyncExternalStore(R,K,ee)},we.useTransition=function(){return _.H.useTransition()},we.version="19.2.1",we}var xb;function ig(){return xb||(xb=1,mh.exports=KC()),mh.exports}var x=ig();const tt=Ls(x),rg=IC({__proto__:null,default:tt},[x]);var ph={exports:{}},Gr={},yh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function YC(){return vb||(vb=1,(function(t){function n(A,D){var B=A.length;A.push(D);e:for(;0<B;){var Q=B-1>>>1,ne=A[Q];if(0<c(ne,D))A[Q]=D,A[B]=ne,B=Q;else break e}}function s(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],B=A.pop();if(B!==D){A[0]=B;e:for(var Q=0,ne=A.length,R=ne>>>1;Q<R;){var K=2*(Q+1)-1,ee=A[K],te=K+1,ge=A[te];if(0>c(ee,B))te<ne&&0>c(ge,ee)?(A[Q]=ge,A[te]=B,Q=te):(A[Q]=ee,A[K]=B,Q=K);else if(te<ne&&0>c(ge,B))A[Q]=ge,A[te]=B,Q=te;else break e}}return D}function c(A,D){var B=A.sortIndex-D.sortIndex;return B!==0?B:A.id-D.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();t.unstable_now=function(){return d.now()-f}}var g=[],p=[],y=1,b=null,w=3,S=!1,C=!1,T=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function q(A){for(var D=s(p);D!==null;){if(D.callback===null)r(p);else if(D.startTime<=A)r(p),D.sortIndex=D.expirationTime,n(g,D);else break;D=s(p)}}function P(A){if(T=!1,q(A),!C)if(s(g)!==null)C=!0,G||(G=!0,he());else{var D=s(p);D!==null&&z(P,D.startTime-A)}}var G=!1,_=-1,H=5,J=-1;function se(){return N?!0:!(t.unstable_now()-J<H)}function re(){if(N=!1,G){var A=t.unstable_now();J=A;var D=!0;try{e:{C=!1,T&&(T=!1,E(_),_=-1),S=!0;var B=w;try{t:{for(q(A),b=s(g);b!==null&&!(b.expirationTime>A&&se());){var Q=b.callback;if(typeof Q=="function"){b.callback=null,w=b.priorityLevel;var ne=Q(b.expirationTime<=A);if(A=t.unstable_now(),typeof ne=="function"){b.callback=ne,q(A),D=!0;break t}b===s(g)&&r(g),q(A)}else r(g);b=s(g)}if(b!==null)D=!0;else{var R=s(p);R!==null&&z(P,R.startTime-A),D=!1}}break e}finally{b=null,w=B,S=!1}D=void 0}}finally{D?he():G=!1}}}var he;if(typeof j=="function")he=function(){j(re)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,U=ve.port2;ve.port1.onmessage=re,he=function(){U.postMessage(null)}}else he=function(){M(re,0)};function z(A,D){_=M(function(){A(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_next=function(A){switch(w){case 1:case 2:case 3:var D=3;break;default:D=w}var B=w;w=D;try{return A()}finally{w=B}},t.unstable_requestPaint=function(){N=!0},t.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=w;w=A;try{return D()}finally{w=B}},t.unstable_scheduleCallback=function(A,D,B){var Q=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,A){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,A={id:y++,callback:D,priorityLevel:A,startTime:B,expirationTime:ne,sortIndex:-1},B>Q?(A.sortIndex=B,n(p,A),s(g)===null&&A===s(p)&&(T?(E(_),_=-1):T=!0,z(P,B-Q))):(A.sortIndex=ne,n(g,A),C||S||(C=!0,G||(G=!0,he()))),A},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(A){var D=w;return function(){var B=w;w=D;try{return A.apply(this,arguments)}finally{w=B}}}})(bh)),bh}var wb;function QC(){return wb||(wb=1,yh.exports=YC()),yh.exports}var xh={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb;function $C(){if(Sb)return At;Sb=1;var t=ig();function n(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(g,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:g,containerInfo:p,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,At.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return u(g,p,null,y)},At.flushSync=function(g){var p=d.T,y=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=p,r.p=y,r.d.f()}},At.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},At.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},At.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,b=f(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(g,{crossOrigin:b,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},At.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},At.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=f(y,p.crossOrigin);r.d.L(g,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},At.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=f(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},At.requestFormReset=function(g){r.d.r(g)},At.unstable_batchedUpdates=function(g,p){return g(p)},At.useFormState=function(g,p,y){return d.H.useFormState(g,p,y)},At.useFormStatus=function(){return d.H.useHostTransitionStatus()},At.version="19.2.1",At}var Tb;function ew(){if(Tb)return xh.exports;Tb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),xh.exports=$C(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function XC(){if(kb)return Gr;kb=1;var t=QC(),n=ig(),s=ew();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function d(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(r(188))}function p(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(r(188));return a!==e?null:e}for(var i=e,l=a;;){var h=i.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){i=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===i)return g(h),e;if(m===l)return g(h),a;m=m.sibling}throw Error(r(188))}if(i.return!==l.return)i=h,l=m;else{for(var v=!1,k=h.child;k;){if(k===i){v=!0,i=h,l=m;break}if(k===l){v=!0,l=h,i=m;break}k=k.sibling}if(!v){for(k=m.child;k;){if(k===i){v=!0,i=m,l=h;break}if(k===l){v=!0,l=m,i=h;break}k=k.sibling}if(!v)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:a}function y(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=y(e),a!==null)return a;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),j=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function U(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case N:return"StrictMode";case P:return"Suspense";case G:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case j:return e.displayName||"Context";case E:return(e._context.displayName||"Context")+".Consumer";case q:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return a=e.displayName||null,a!==null?a:U(e.type)||"Memo";case H:a=e._payload,e=e._init;try{return U(e(a))}catch{}}return null}var z=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},Q=[],ne=-1;function R(e){return{current:e}}function K(e){0>ne||(e.current=Q[ne],Q[ne]=null,ne--)}function ee(e,a){ne++,Q[ne]=e.current,e.current=a}var te=R(null),ge=R(null),pe=R(null),ae=R(null);function be(e,a){switch(ee(pe,a),ee(ge,e),ee(te,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?q0(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=q0(a),e=V0(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(te),ee(te,e)}function Se(){K(te),K(ge),K(pe)}function je(e){e.memoizedState!==null&&ee(ae,e);var a=te.current,i=V0(a,e.type);a!==i&&(ee(ge,e),ee(te,i))}function Ne(e){ge.current===e&&(K(te),K(ge)),ae.current===e&&(K(ae),Vr._currentValue=B)}var Ae,Nt;function gt(e){if(Ae===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Ae=a&&a[1]||"",Nt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ae+e+Nt}var Ua=!1;function Fa(e,a){if(!e||Ua)return"";Ua=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(Y){var W=Y}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(Y){W=Y}e.call(Z.prototype)}}else{try{throw Error()}catch(Y){W=Y}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(Y){if(Y&&W&&typeof Y.stack=="string")return[Y.stack,W.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],k=m[1];if(v&&k){var O=v.split(`
`),I=k.split(`
`);for(h=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;h<I.length&&!I[h].includes("DetermineComponentFrameRoot");)h++;if(l===O.length||h===I.length)for(l=O.length-1,h=I.length-1;1<=l&&0<=h&&O[l]!==I[h];)h--;for(;1<=l&&0<=h;l--,h--)if(O[l]!==I[h]){if(l!==1||h!==1)do if(l--,h--,0>h||O[l]!==I[h]){var $=`
`+O[l].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=l&&0<=h);break}}}finally{Ua=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?gt(i):""}function ss(e,a){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==a&&a!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Fa(e.type,!1);case 11:return Fa(e.type.render,!1);case 1:return Fa(e.type,!0);case 31:return gt("Activity");default:return""}}function Co(e){try{var a="",i=null;do a+=ss(e,i),i=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var xn=Object.prototype.hasOwnProperty,eu=t.unstable_scheduleCallback,tu=t.unstable_cancelCallback,vT=t.unstable_shouldYield,wT=t.unstable_requestPaint,Ft=t.unstable_now,ST=t.unstable_getCurrentPriorityLevel,ym=t.unstable_ImmediatePriority,bm=t.unstable_UserBlockingPriority,jo=t.unstable_NormalPriority,TT=t.unstable_LowPriority,xm=t.unstable_IdlePriority,kT=t.log,CT=t.unstable_setDisableYieldValue,Ji=null,It=null;function vn(e){if(typeof kT=="function"&&CT(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Ji,e)}catch{}}var Gt=Math.clz32?Math.clz32:AT,jT=Math.log,NT=Math.LN2;function AT(e){return e>>>=0,e===0?32:31-(jT(e)/NT|0)|0}var No=256,Ao=262144,Mo=4194304;function is(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Eo(e,a,i){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var k=l&134217727;return k!==0?(l=k&~m,l!==0?h=is(l):(v&=k,v!==0?h=is(v):i||(i=k&~e,i!==0&&(h=is(i))))):(k=l&~m,k!==0?h=is(k):v!==0?h=is(v):i||(i=l&~e,i!==0&&(h=is(i)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,i=a&-a,m>=i||m===32&&(i&4194048)!==0)?a:h}function Zi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function MT(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(){var e=Mo;return Mo<<=1,(Mo&62914560)===0&&(Mo=4194304),e}function au(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function er(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ET(e,a,i,l,h,m){var v=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var k=e.entanglements,O=e.expirationTimes,I=e.hiddenUpdates;for(i=v&~i;0<i;){var $=31-Gt(i),Z=1<<$;k[$]=0,O[$]=-1;var W=I[$];if(W!==null)for(I[$]=null,$=0;$<W.length;$++){var Y=W[$];Y!==null&&(Y.lane&=-536870913)}i&=~Z}l!==0&&wm(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~a))}function wm(e,a,i){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Gt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function Sm(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var l=31-Gt(i),h=1<<l;h&a|e[l]&a&&(e[l]|=a),i&=~h}}function Tm(e,a){var i=a&-a;return i=(i&42)!==0?1:nu(i),(i&(e.suspendedLanes|a))!==0?0:i}function nu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function km(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:cb(e.type))}function Cm(e,a){var i=D.p;try{return D.p=e,a()}finally{D.p=i}}var wn=Math.random().toString(36).slice(2),yt="__reactFiber$"+wn,Lt="__reactProps$"+wn,_s="__reactContainer$"+wn,iu="__reactEvents$"+wn,DT="__reactListeners$"+wn,RT="__reactHandles$"+wn,jm="__reactResources$"+wn,tr="__reactMarker$"+wn;function ru(e){delete e[yt],delete e[Lt],delete e[iu],delete e[DT],delete e[RT]}function zs(e){var a=e[yt];if(a)return a;for(var i=e.parentNode;i;){if(a=i[_s]||i[yt]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=K0(e);e!==null;){if(i=e[yt])return i;e=K0(e)}return a}e=i,i=e.parentNode}return null}function qs(e){if(e=e[yt]||e[_s]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ar(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function Vs(e){var a=e[jm];return a||(a=e[jm]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function mt(e){e[tr]=!0}var Nm=new Set,Am={};function rs(e,a){Hs(e,a),Hs(e+"Capture",a)}function Hs(e,a){for(Am[e]=a,e=0;e<a.length;e++)Nm.add(a[e])}var BT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mm={},Em={};function OT(e){return xn.call(Em,e)?!0:xn.call(Mm,e)?!1:BT.test(e)?Em[e]=!0:(Mm[e]=!0,!1)}function Do(e,a,i){if(OT(a))if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+i)}}function Ro(e,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+i)}}function Ia(e,a,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(a,i,""+l)}}function na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dm(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function PT(e,a,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return h.call(this)},set:function(v){i=""+v,m.call(this,v)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(v){i=""+v},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ou(e){if(!e._valueTracker){var a=Dm(e)?"checked":"value";e._valueTracker=PT(e,a,""+e[a])}}function Rm(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),l="";return e&&(l=Dm(e)?e.checked?"true":"false":e.value),e=l,e!==i?(a.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var LT=/[\n"\\]/g;function sa(e){return e.replace(LT,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function lu(e,a,i,l,h,m,v,k){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),a!=null?v==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+na(a)):e.value!==""+na(a)&&(e.value=""+na(a)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),a!=null?cu(e,v,na(a)):i!=null?cu(e,v,na(i)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+na(k):e.removeAttribute("name")}function Bm(e,a,i,l,h,m,v,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){ou(e);return}i=i!=null?""+na(i):"",a=a!=null?""+na(a):i,k||a===e.value||(e.value=a),e.defaultValue=a}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=k?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ou(e)}function cu(e,a,i){a==="number"&&Bo(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Us(e,a,i,l){if(e=e.options,a){a={};for(var h=0;h<i.length;h++)a["$"+i[h]]=!0;for(i=0;i<e.length;i++)h=a.hasOwnProperty("$"+e[i].value),e[i].selected!==h&&(e[i].selected=h),h&&l&&(e[i].defaultSelected=!0)}else{for(i=""+na(i),a=null,h=0;h<e.length;h++){if(e[h].value===i){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}a!==null||e[h].disabled||(a=e[h])}a!==null&&(a.selected=!0)}}function Om(e,a,i){if(a!=null&&(a=""+na(a),a!==e.value&&(e.value=a),i==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=i!=null?""+na(i):""}function Pm(e,a,i,l){if(a==null){if(l!=null){if(i!=null)throw Error(r(92));if(z(l)){if(1<l.length)throw Error(r(93));l=l[0]}i=l}i==null&&(i=""),a=i}i=na(a),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),ou(e)}function Fs(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var _T=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lm(e,a,i){var l=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,i):typeof i!="number"||i===0||_T.has(a)?a==="float"?e.cssFloat=i:e[a]=(""+i).trim():e[a]=i+"px"}function _m(e,a,i){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in a)l=a[h],a.hasOwnProperty(h)&&i[h]!==l&&Lm(e,h,l)}else for(var m in a)a.hasOwnProperty(m)&&Lm(e,m,a[m])}function uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(e){return qT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ga(){}var du=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Gs=null;function zm(e){var a=qs(e);if(a&&(e=a.stateNode)){var i=e[Lt]||null;e:switch(e=a.stateNode,a.type){case"input":if(lu(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+sa(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var l=i[a];if(l!==e&&l.form===e.form){var h=l[Lt]||null;if(!h)throw Error(r(90));lu(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<i.length;a++)l=i[a],l.form===e.form&&Rm(l)}break e;case"textarea":Om(e,i.value,i.defaultValue);break e;case"select":a=i.value,a!=null&&Us(e,!!i.multiple,a,!1)}}}var fu=!1;function qm(e,a,i){if(fu)return e(a,i);fu=!0;try{var l=e(a);return l}finally{if(fu=!1,(Is!==null||Gs!==null)&&(wl(),Is&&(a=Is,e=Gs,Gs=Is=null,zm(a),e)))for(a=0;a<e.length;a++)zm(e[a])}}function nr(e,a){var i=e.stateNode;if(i===null)return null;var l=i[Lt]||null;if(l===null)return null;i=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,a,typeof i));return i}var Wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(Wa)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){gu=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{gu=!1}var Sn=null,mu=null,Po=null;function Vm(){if(Po)return Po;var e,a=mu,i=a.length,l,h="value"in Sn?Sn.value:Sn.textContent,m=h.length;for(e=0;e<i&&a[e]===h[e];e++);var v=i-e;for(l=1;l<=v&&a[i-l]===h[m-l];l++);return Po=h.slice(e,1<l?1-l:void 0)}function Lo(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Hm(){return!1}function _t(e){function a(i,l,h,m,v){this._reactName=i,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(i=e[k],this[k]=i?i(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:Hm,this.isPropagationStopped=Hm,this}return b(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),a}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=_t(os),ir=b({},os,{view:0,detail:0}),VT=_t(ir),pu,yu,rr,qo=b({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(pu=e.screenX-rr.screenX,yu=e.screenY-rr.screenY):yu=pu=0,rr=e),pu)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),Um=_t(qo),HT=b({},qo,{dataTransfer:0}),UT=_t(HT),FT=b({},ir,{relatedTarget:0}),bu=_t(FT),IT=b({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),GT=_t(IT),WT=b({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),KT=_t(WT),YT=b({},os,{data:0}),Fm=_t(YT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$T={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JT(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=XT[e])?!!a[e]:!1}function xu(){return JT}var ZT=b({},ir,{key:function(e){if(e.key){var a=QT[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$T[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ek=_t(ZT),tk=b({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=_t(tk),ak=b({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),nk=_t(ak),sk=b({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),ik=_t(sk),rk=b({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ok=_t(rk),lk=b({},os,{newState:0,oldState:0}),ck=_t(lk),uk=[9,13,27,32],vu=Wa&&"CompositionEvent"in window,or=null;Wa&&"documentMode"in document&&(or=document.documentMode);var dk=Wa&&"TextEvent"in window&&!or,Gm=Wa&&(!vu||or&&8<or&&11>=or),Wm=" ",Km=!1;function Ym(e,a){switch(e){case"keyup":return uk.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function hk(e,a){switch(e){case"compositionend":return Qm(a);case"keypress":return a.which!==32?null:(Km=!0,Wm);case"textInput":return e=a.data,e===Wm&&Km?null:e;default:return null}}function fk(e,a){if(Ws)return e==="compositionend"||!vu&&Ym(e,a)?(e=Vm(),Po=mu=Sn=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gm&&a.locale!=="ko"?null:a.data;default:return null}}var gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!gk[e.type]:a==="textarea"}function Xm(e,a,i,l){Is?Gs?Gs.push(l):Gs=[l]:Is=l,a=Al(a,"onChange"),0<a.length&&(i=new zo("onChange","change",null,i,l),e.push({event:i,listeners:a}))}var lr=null,cr=null;function mk(e){B0(e,0)}function Vo(e){var a=ar(e);if(Rm(a))return e}function Jm(e,a){if(e==="change")return a}var Zm=!1;if(Wa){var wu;if(Wa){var Su="oninput"in document;if(!Su){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Su=typeof ep.oninput=="function"}wu=Su}else wu=!1;Zm=wu&&(!document.documentMode||9<document.documentMode)}function tp(){lr&&(lr.detachEvent("onpropertychange",ap),cr=lr=null)}function ap(e){if(e.propertyName==="value"&&Vo(cr)){var a=[];Xm(a,cr,e,hu(e)),qm(mk,a)}}function pk(e,a,i){e==="focusin"?(tp(),lr=a,cr=i,lr.attachEvent("onpropertychange",ap)):e==="focusout"&&tp()}function yk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(cr)}function bk(e,a){if(e==="click")return Vo(a)}function xk(e,a){if(e==="input"||e==="change")return Vo(a)}function vk(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Wt=typeof Object.is=="function"?Object.is:vk;function ur(e,a){if(Wt(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),l=Object.keys(a);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var h=i[l];if(!xn.call(a,h)||!Wt(e[h],a[h]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,a){var i=np(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=a&&l>=a)return{node:i,offset:a-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=np(i)}}function ip(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?ip(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Bo(e.document);a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Bo(e.document)}return a}function Tu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var wk=Wa&&"documentMode"in document&&11>=document.documentMode,Ks=null,ku=null,dr=null,Cu=!1;function op(e,a,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Cu||Ks==null||Ks!==Bo(l)||(l=Ks,"selectionStart"in l&&Tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dr&&ur(dr,l)||(dr=l,l=Al(ku,"onSelect"),0<l.length&&(a=new zo("onSelect","select",null,a,i),e.push({event:a,listeners:l}),a.target=Ks)))}function ls(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var Ys={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},ju={},lp={};Wa&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function cs(e){if(ju[e])return ju[e];if(!Ys[e])return e;var a=Ys[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in lp)return ju[e]=a[i];return e}var cp=cs("animationend"),up=cs("animationiteration"),dp=cs("animationstart"),Sk=cs("transitionrun"),Tk=cs("transitionstart"),kk=cs("transitioncancel"),hp=cs("transitionend"),fp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function ba(e,a){fp.set(e,a),rs(a,[e])}var Ho=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],Qs=0,Au=0;function Uo(){for(var e=Qs,a=Au=Qs=0;a<e;){var i=ia[a];ia[a++]=null;var l=ia[a];ia[a++]=null;var h=ia[a];ia[a++]=null;var m=ia[a];if(ia[a++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}m!==0&&gp(i,h,m)}}function Fo(e,a,i,l){ia[Qs++]=e,ia[Qs++]=a,ia[Qs++]=i,ia[Qs++]=l,Au|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Mu(e,a,i,l){return Fo(e,a,i,l),Io(e)}function us(e,a){return Fo(e,null,null,a),Io(e)}function gp(e,a,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var h=!1,m=e.return;m!==null;)m.childLanes|=i,l=m.alternate,l!==null&&(l.childLanes|=i),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&a!==null&&(h=31-Gt(i),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[a]:l.push(a),a.lane=i|536870912),m):null}function Io(e){if(50<Br)throw Br=0,zd=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var $s={};function Ck(e,a,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,a,i,l){return new Ck(e,a,i,l)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ka(e,a){var i=e.alternate;return i===null?(i=Kt(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function mp(e,a){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,a=i.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Go(e,a,i,l,h,m){var v=0;if(l=e,typeof e=="function")Eu(e)&&(v=1);else if(typeof e=="string")v=EC(e,i,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Kt(31,i,a,h),e.elementType=J,e.lanes=m,e;case T:return ds(i.children,h,m,a);case N:v=8,h|=24;break;case M:return e=Kt(12,i,a,h|2),e.elementType=M,e.lanes=m,e;case P:return e=Kt(13,i,a,h),e.elementType=P,e.lanes=m,e;case G:return e=Kt(19,i,a,h),e.elementType=G,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:v=10;break e;case E:v=9;break e;case q:v=11;break e;case _:v=14;break e;case H:v=16,l=null;break e}v=29,i=Error(r(130,e===null?"null":typeof e,"")),l=null}return a=Kt(v,i,a,h),a.elementType=e,a.type=l,a.lanes=m,a}function ds(e,a,i,l){return e=Kt(7,e,l,a),e.lanes=i,e}function Du(e,a,i){return e=Kt(6,e,null,a),e.lanes=i,e}function pp(e){var a=Kt(18,null,null,0);return a.stateNode=e,a}function Ru(e,a,i){return a=Kt(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var yp=new WeakMap;function ra(e,a){if(typeof e=="object"&&e!==null){var i=yp.get(e);return i!==void 0?i:(a={value:e,source:a,stack:Co(a)},yp.set(e,a),a)}return{value:e,source:a,stack:Co(a)}}var Xs=[],Js=0,Wo=null,hr=0,oa=[],la=0,Tn=null,Da=1,Ra="";function Ya(e,a){Xs[Js++]=hr,Xs[Js++]=Wo,Wo=e,hr=a}function bp(e,a,i){oa[la++]=Da,oa[la++]=Ra,oa[la++]=Tn,Tn=e;var l=Da;e=Ra;var h=32-Gt(l)-1;l&=~(1<<h),i+=1;var m=32-Gt(a)+h;if(30<m){var v=h-h%5;m=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Da=1<<32-Gt(a)+h|i<<h|l,Ra=m+e}else Da=1<<m|i<<h|l,Ra=e}function Bu(e){e.return!==null&&(Ya(e,1),bp(e,1,0))}function Ou(e){for(;e===Wo;)Wo=Xs[--Js],Xs[Js]=null,hr=Xs[--Js],Xs[Js]=null;for(;e===Tn;)Tn=oa[--la],oa[la]=null,Ra=oa[--la],oa[la]=null,Da=oa[--la],oa[la]=null}function xp(e,a){oa[la++]=Da,oa[la++]=Ra,oa[la++]=Tn,Da=a.id,Ra=a.overflow,Tn=e}var bt=null,Fe=null,Be=!1,kn=null,ca=!1,Pu=Error(r(519));function Cn(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fr(ra(a,e)),Pu}function vp(e){var a=e.stateNode,i=e.type,l=e.memoizedProps;switch(a[yt]=e,a[Lt]=l,i){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(i=0;i<Pr.length;i++)Ee(Pr[i],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Ee("invalid",a),Bm(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",a);break;case"textarea":Ee("invalid",a),Pm(a,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||l.suppressHydrationWarning===!0||_0(a.textContent,i)?(l.popover!=null&&(Ee("beforetoggle",a),Ee("toggle",a)),l.onScroll!=null&&Ee("scroll",a),l.onScrollEnd!=null&&Ee("scrollend",a),l.onClick!=null&&(a.onclick=Ga),a=!0):a=!1,a||Cn(e,!0)}function wp(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:bt=bt.return}}function Zs(e){if(e!==bt)return!1;if(!Be)return wp(e),Be=!0,!1;var a=e.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Zd(e.type,e.memoizedProps)),i=!i),i&&Fe&&Cn(e),wp(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Fe=W0(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Fe=W0(e)}else a===27?(a=Fe,qn(e.type)?(e=sh,sh=null,Fe=e):Fe=a):Fe=bt?da(e.stateNode.nextSibling):null;return!0}function hs(){Fe=bt=null,Be=!1}function Lu(){var e=kn;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),kn=null),e}function fr(e){kn===null?kn=[e]:kn.push(e)}var _u=R(null),fs=null,Qa=null;function jn(e,a,i){ee(_u,a._currentValue),a._currentValue=i}function $a(e){e._currentValue=_u.current,K(_u)}function zu(e,a,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===i)break;e=e.return}}function qu(e,a,i,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var v=h.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=h;for(var O=0;O<a.length;O++)if(k.context===a[O]){m.lanes|=i,k=m.alternate,k!==null&&(k.lanes|=i),zu(m.return,i,e),l||(v=null);break e}m=k.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(r(341));v.lanes|=i,m=v.alternate,m!==null&&(m.lanes|=i),zu(v,i,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ei(e,a,i,l){e=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var k=h.type;Wt(h.pendingProps.value,v.value)||(e!==null?e.push(k):e=[k])}}else if(h===ae.current){if(v=h.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Vr):e=[Vr])}h=h.return}e!==null&&qu(a,e,i,l),a.flags|=262144}function Ko(e){for(e=e.firstContext;e!==null;){if(!Wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){fs=e,Qa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Sp(fs,e)}function Yo(e,a){return fs===null&&gs(e),Sp(e,a)}function Sp(e,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},Qa===null){if(e===null)throw Error(r(308));Qa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Qa=Qa.next=a;return i}var jk=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(i){return i()})}},Nk=t.unstable_scheduleCallback,Ak=t.unstable_NormalPriority,it={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new jk,data:new Map,refCount:0}}function gr(e){e.refCount--,e.refCount===0&&Nk(Ak,function(){e.controller.abort()})}var mr=null,Hu=0,ti=0,ai=null;function Mk(e,a){if(mr===null){var i=mr=[];Hu=0,ti=Id(),ai={status:"pending",value:void 0,then:function(l){i.push(l)}}}return Hu++,a.then(Tp,Tp),a}function Tp(){if(--Hu===0&&mr!==null){ai!==null&&(ai.status="fulfilled");var e=mr;mr=null,ti=0,ai=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Ek(e,a){var i=[],l={status:"pending",value:null,reason:null,then:function(h){i.push(h)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var h=0;h<i.length;h++)(0,i[h])(a)},function(h){for(l.status="rejected",l.reason=h,h=0;h<i.length;h++)(0,i[h])(void 0)}),l}var kp=A.S;A.S=function(e,a){o0=Ft(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Mk(e,a),kp!==null&&kp(e,a)};var ms=R(null);function Uu(){var e=ms.current;return e!==null?e:Ue.pooledCache}function Qo(e,a){a===null?ee(ms,ms.current):ee(ms,a.pool)}function Cp(){var e=Uu();return e===null?null:{parent:it._currentValue,pool:e}}var ni=Error(r(460)),Fu=Error(r(474)),$o=Error(r(542)),Xo={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Np(e,a,i){switch(i=e[i],i===void 0?e.push(a):i!==a&&(a.then(Ga,Ga),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Mp(e),e;default:if(typeof a.status=="string")a.then(Ga,Ga);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=l}},function(l){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Mp(e),e}throw ys=a,ni}}function ps(e){try{var a=e._init;return a(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(ys=i,ni):i}}var ys=null;function Ap(){if(ys===null)throw Error(r(459));var e=ys;return ys=null,e}function Mp(e){if(e===ni||e===$o)throw Error(r(483))}var si=null,pr=0;function Jo(e){var a=pr;return pr+=1,si===null&&(si=[]),Np(si,e,a)}function yr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Zo(e,a){throw a.$$typeof===w?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ep(e){function a(V,L){if(e){var F=V.deletions;F===null?(V.deletions=[L],V.flags|=16):F.push(L)}}function i(V,L){if(!e)return null;for(;L!==null;)a(V,L),L=L.sibling;return null}function l(V){for(var L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function h(V,L){return V=Ka(V,L),V.index=0,V.sibling=null,V}function m(V,L,F){return V.index=F,e?(F=V.alternate,F!==null?(F=F.index,F<L?(V.flags|=67108866,L):F):(V.flags|=67108866,L)):(V.flags|=1048576,L)}function v(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function k(V,L,F,X){return L===null||L.tag!==6?(L=Du(F,V.mode,X),L.return=V,L):(L=h(L,F),L.return=V,L)}function O(V,L,F,X){var me=F.type;return me===T?$(V,L,F.props.children,X,F.key):L!==null&&(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===H&&ps(me)===L.type)?(L=h(L,F.props),yr(L,F),L.return=V,L):(L=Go(F.type,F.key,F.props,null,V.mode,X),yr(L,F),L.return=V,L)}function I(V,L,F,X){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=Ru(F,V.mode,X),L.return=V,L):(L=h(L,F.children||[]),L.return=V,L)}function $(V,L,F,X,me){return L===null||L.tag!==7?(L=ds(F,V.mode,X,me),L.return=V,L):(L=h(L,F),L.return=V,L)}function Z(V,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Du(""+L,V.mode,F),L.return=V,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return F=Go(L.type,L.key,L.props,null,V.mode,F),yr(F,L),F.return=V,F;case C:return L=Ru(L,V.mode,F),L.return=V,L;case H:return L=ps(L),Z(V,L,F)}if(z(L)||he(L))return L=ds(L,V.mode,F,null),L.return=V,L;if(typeof L.then=="function")return Z(V,Jo(L),F);if(L.$$typeof===j)return Z(V,Yo(V,L),F);Zo(V,L)}return null}function W(V,L,F,X){var me=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return me!==null?null:k(V,L,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===me?O(V,L,F,X):null;case C:return F.key===me?I(V,L,F,X):null;case H:return F=ps(F),W(V,L,F,X)}if(z(F)||he(F))return me!==null?null:$(V,L,F,X,null);if(typeof F.then=="function")return W(V,L,Jo(F),X);if(F.$$typeof===j)return W(V,L,Yo(V,F),X);Zo(V,F)}return null}function Y(V,L,F,X,me){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return V=V.get(F)||null,k(L,V,""+X,me);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return V=V.get(X.key===null?F:X.key)||null,O(L,V,X,me);case C:return V=V.get(X.key===null?F:X.key)||null,I(L,V,X,me);case H:return X=ps(X),Y(V,L,F,X,me)}if(z(X)||he(X))return V=V.get(F)||null,$(L,V,X,me,null);if(typeof X.then=="function")return Y(V,L,F,Jo(X),me);if(X.$$typeof===j)return Y(V,L,F,Yo(L,X),me);Zo(L,X)}return null}function oe(V,L,F,X){for(var me=null,Oe=null,de=L,ke=L=0,Re=null;de!==null&&ke<F.length;ke++){de.index>ke?(Re=de,de=null):Re=de.sibling;var Pe=W(V,de,F[ke],X);if(Pe===null){de===null&&(de=Re);break}e&&de&&Pe.alternate===null&&a(V,de),L=m(Pe,L,ke),Oe===null?me=Pe:Oe.sibling=Pe,Oe=Pe,de=Re}if(ke===F.length)return i(V,de),Be&&Ya(V,ke),me;if(de===null){for(;ke<F.length;ke++)de=Z(V,F[ke],X),de!==null&&(L=m(de,L,ke),Oe===null?me=de:Oe.sibling=de,Oe=de);return Be&&Ya(V,ke),me}for(de=l(de);ke<F.length;ke++)Re=Y(de,V,ke,F[ke],X),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?ke:Re.key),L=m(Re,L,ke),Oe===null?me=Re:Oe.sibling=Re,Oe=Re);return e&&de.forEach(function(In){return a(V,In)}),Be&&Ya(V,ke),me}function ye(V,L,F,X){if(F==null)throw Error(r(151));for(var me=null,Oe=null,de=L,ke=L=0,Re=null,Pe=F.next();de!==null&&!Pe.done;ke++,Pe=F.next()){de.index>ke?(Re=de,de=null):Re=de.sibling;var In=W(V,de,Pe.value,X);if(In===null){de===null&&(de=Re);break}e&&de&&In.alternate===null&&a(V,de),L=m(In,L,ke),Oe===null?me=In:Oe.sibling=In,Oe=In,de=Re}if(Pe.done)return i(V,de),Be&&Ya(V,ke),me;if(de===null){for(;!Pe.done;ke++,Pe=F.next())Pe=Z(V,Pe.value,X),Pe!==null&&(L=m(Pe,L,ke),Oe===null?me=Pe:Oe.sibling=Pe,Oe=Pe);return Be&&Ya(V,ke),me}for(de=l(de);!Pe.done;ke++,Pe=F.next())Pe=Y(de,V,ke,Pe.value,X),Pe!==null&&(e&&Pe.alternate!==null&&de.delete(Pe.key===null?ke:Pe.key),L=m(Pe,L,ke),Oe===null?me=Pe:Oe.sibling=Pe,Oe=Pe);return e&&de.forEach(function(HC){return a(V,HC)}),Be&&Ya(V,ke),me}function He(V,L,F,X){if(typeof F=="object"&&F!==null&&F.type===T&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var me=F.key;L!==null;){if(L.key===me){if(me=F.type,me===T){if(L.tag===7){i(V,L.sibling),X=h(L,F.props.children),X.return=V,V=X;break e}}else if(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===H&&ps(me)===L.type){i(V,L.sibling),X=h(L,F.props),yr(X,F),X.return=V,V=X;break e}i(V,L);break}else a(V,L);L=L.sibling}F.type===T?(X=ds(F.props.children,V.mode,X,F.key),X.return=V,V=X):(X=Go(F.type,F.key,F.props,null,V.mode,X),yr(X,F),X.return=V,V=X)}return v(V);case C:e:{for(me=F.key;L!==null;){if(L.key===me)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){i(V,L.sibling),X=h(L,F.children||[]),X.return=V,V=X;break e}else{i(V,L);break}else a(V,L);L=L.sibling}X=Ru(F,V.mode,X),X.return=V,V=X}return v(V);case H:return F=ps(F),He(V,L,F,X)}if(z(F))return oe(V,L,F,X);if(he(F)){if(me=he(F),typeof me!="function")throw Error(r(150));return F=me.call(F),ye(V,L,F,X)}if(typeof F.then=="function")return He(V,L,Jo(F),X);if(F.$$typeof===j)return He(V,L,Yo(V,F),X);Zo(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(i(V,L.sibling),X=h(L,F),X.return=V,V=X):(i(V,L),X=Du(F,V.mode,X),X.return=V,V=X),v(V)):i(V,L)}return function(V,L,F,X){try{pr=0;var me=He(V,L,F,X);return si=null,me}catch(de){if(de===ni||de===$o)throw de;var Oe=Kt(29,de,null,V.mode);return Oe.lanes=X,Oe.return=V,Oe}finally{}}}var bs=Ep(!0),Dp=Ep(!1),Nn=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function An(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Mn(e,a,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var h=l.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),l.pending=a,a=Io(e),gp(e,null,i),a}return Fo(e,l,a,i),Io(e)}function br(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,i|=l,a.lanes=i,Sm(e,i)}}function Wu(e,a){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var h=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?h=m=v:m=m.next=v,i=i.next}while(i!==null);m===null?h=m=a:m=m.next=a}else h=m=a;i={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}var Ku=!1;function xr(){if(Ku){var e=ai;if(e!==null)throw e}}function vr(e,a,i,l){Ku=!1;var h=e.updateQueue;Nn=!1;var m=h.firstBaseUpdate,v=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var O=k,I=O.next;O.next=null,v===null?m=I:v.next=I,v=O;var $=e.alternate;$!==null&&($=$.updateQueue,k=$.lastBaseUpdate,k!==v&&(k===null?$.firstBaseUpdate=I:k.next=I,$.lastBaseUpdate=O))}if(m!==null){var Z=h.baseState;v=0,$=I=O=null,k=m;do{var W=k.lane&-536870913,Y=W!==k.lane;if(Y?(De&W)===W:(l&W)===W){W!==0&&W===ti&&(Ku=!0),$!==null&&($=$.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var oe=e,ye=k;W=a;var He=i;switch(ye.tag){case 1:if(oe=ye.payload,typeof oe=="function"){Z=oe.call(He,Z,W);break e}Z=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ye.payload,W=typeof oe=="function"?oe.call(He,Z,W):oe,W==null)break e;Z=b({},Z,W);break e;case 2:Nn=!0}}W=k.callback,W!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[W]:Y.push(W))}else Y={lane:W,tag:k.tag,payload:k.payload,callback:k.callback,next:null},$===null?(I=$=Y,O=Z):$=$.next=Y,v|=W;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Y=k,k=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);$===null&&(O=Z),h.baseState=O,h.firstBaseUpdate=I,h.lastBaseUpdate=$,m===null&&(h.shared.lanes=0),On|=v,e.lanes=v,e.memoizedState=Z}}function Rp(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function Bp(e,a){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Rp(i[e],a)}var ii=R(null),el=R(0);function Op(e,a){e=rn,ee(el,e),ee(ii,a),rn=e|a.baseLanes}function Yu(){ee(el,rn),ee(ii,ii.current)}function Qu(){rn=el.current,K(ii),K(el)}var Yt=R(null),ua=null;function En(e){var a=e.alternate;ee(at,at.current&1),ee(Yt,e),ua===null&&(a===null||ii.current!==null||a.memoizedState!==null)&&(ua=e)}function $u(e){ee(at,at.current),ee(Yt,e),ua===null&&(ua=e)}function Pp(e){e.tag===22?(ee(at,at.current),ee(Yt,e),ua===null&&(ua=e)):Dn()}function Dn(){ee(at,at.current),ee(Yt,Yt.current)}function Qt(e){K(Yt),ua===e&&(ua=null),K(at)}var at=R(0);function tl(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||ah(i)||nh(i)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Xa=0,Te=null,qe=null,rt=null,al=!1,ri=!1,xs=!1,nl=0,wr=0,oi=null,Dk=0;function Xe(){throw Error(r(321))}function Xu(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!Wt(e[i],a[i]))return!1;return!0}function Ju(e,a,i,l,h,m){return Xa=m,Te=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=e===null||e.memoizedState===null?by:fd,xs=!1,m=i(l,h),xs=!1,ri&&(m=_p(a,i,l,h)),Lp(e),m}function Lp(e){A.H=kr;var a=qe!==null&&qe.next!==null;if(Xa=0,rt=qe=Te=null,al=!1,wr=0,oi=null,a)throw Error(r(300));e===null||ot||(e=e.dependencies,e!==null&&Ko(e)&&(ot=!0))}function _p(e,a,i,l){Te=e;var h=0;do{if(ri&&(oi=null),wr=0,ri=!1,25<=h)throw Error(r(301));if(h+=1,rt=qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}A.H=xy,m=a(i,l)}while(ri);return m}function Rk(){var e=A.H,a=e.useState()[0];return a=typeof a.then=="function"?Sr(a):a,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Te.flags|=1024),a}function Zu(){var e=nl!==0;return nl=0,e}function ed(e,a,i){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i}function td(e){if(al){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}al=!1}Xa=0,rt=qe=Te=null,ri=!1,wr=nl=0,oi=null}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Te.memoizedState=rt=e:rt=rt.next=e,rt}function nt(){if(qe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var a=rt===null?Te.memoizedState:rt.next;if(a!==null)rt=a,qe=e;else{if(e===null)throw Te.alternate===null?Error(r(467)):Error(r(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},rt===null?Te.memoizedState=rt=e:rt=rt.next=e}return rt}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sr(e){var a=wr;return wr+=1,oi===null&&(oi=[]),e=Np(oi,e,a),a=Te,(rt===null?a.memoizedState:rt.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?by:fd),e}function il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sr(e);if(e.$$typeof===j)return xt(e)}throw Error(r(438,String(e)))}function ad(e){var a=null,i=Te.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var l=Te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=sl(),Te.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(e),l=0;l<e;l++)i[l]=se;return a.index++,i}function Ja(e,a){return typeof a=="function"?a(e):a}function rl(e){var a=nt();return nd(a,qe,e)}function nd(e,a,i){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var v=h.next;h.next=m.next,m.next=v}a.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{a=h.next;var k=v=null,O=null,I=a,$=!1;do{var Z=I.lane&-536870913;if(Z!==I.lane?(De&Z)===Z:(Xa&Z)===Z){var W=I.revertLane;if(W===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),Z===ti&&($=!0);else if((Xa&W)===W){I=I.next,W===ti&&($=!0);continue}else Z={lane:0,revertLane:I.revertLane,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},O===null?(k=O=Z,v=m):O=O.next=Z,Te.lanes|=W,On|=W;Z=I.action,xs&&i(m,Z),m=I.hasEagerState?I.eagerState:i(m,Z)}else W={lane:Z,revertLane:I.revertLane,gesture:I.gesture,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},O===null?(k=O=W,v=m):O=O.next=W,Te.lanes|=Z,On|=Z;I=I.next}while(I!==null&&I!==a);if(O===null?v=m:O.next=k,!Wt(m,e.memoizedState)&&(ot=!0,$&&(i=ai,i!==null)))throw i;e.memoizedState=m,e.baseState=v,e.baseQueue=O,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sd(e){var a=nt(),i=a.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,h=i.pending,m=a.memoizedState;if(h!==null){i.pending=null;var v=h=h.next;do m=e(m,v.action),v=v.next;while(v!==h);Wt(m,a.memoizedState)||(ot=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),i.lastRenderedState=m}return[m,l]}function zp(e,a,i){var l=Te,h=nt(),m=Be;if(m){if(i===void 0)throw Error(r(407));i=i()}else i=a();var v=!Wt((qe||h).memoizedState,i);if(v&&(h.memoizedState=i,ot=!0),h=h.queue,od(Hp.bind(null,l,h,e),[e]),h.getSnapshot!==a||v||rt!==null&&rt.memoizedState.tag&1){if(l.flags|=2048,li(9,{destroy:void 0},Vp.bind(null,l,h,i,a),null),Ue===null)throw Error(r(349));m||(Xa&127)!==0||qp(l,a,i)}return i}function qp(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=Te.updateQueue,a===null?(a=sl(),Te.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function Vp(e,a,i,l){a.value=i,a.getSnapshot=l,Up(a)&&Fp(e)}function Hp(e,a,i){return i(function(){Up(a)&&Fp(e)})}function Up(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!Wt(e,i)}catch{return!0}}function Fp(e){var a=us(e,2);a!==null&&Ut(a,e,2)}function id(e){var a=Bt();if(typeof e=="function"){var i=e;if(e=i(),xs){vn(!0);try{i()}finally{vn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},a}function Ip(e,a,i,l){return e.baseState=i,nd(e,qe,typeof l=="function"?l:Ja)}function Bk(e,a,i,l,h){if(cl(e))throw Error(r(485));if(e=a.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};A.T!==null?i(!0):m.isTransition=!1,l(m),i=a.pending,i===null?(m.next=a.pending=m,Gp(a,m)):(m.next=i.next,a.pending=i.next=m)}}function Gp(e,a){var i=a.action,l=a.payload,h=e.state;if(a.isTransition){var m=A.T,v={};A.T=v;try{var k=i(h,l),O=A.S;O!==null&&O(v,k),Wp(e,a,k)}catch(I){rd(e,a,I)}finally{m!==null&&v.types!==null&&(m.types=v.types),A.T=m}}else try{m=i(h,l),Wp(e,a,m)}catch(I){rd(e,a,I)}}function Wp(e,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Kp(e,a,l)},function(l){return rd(e,a,l)}):Kp(e,a,i)}function Kp(e,a,i){a.status="fulfilled",a.value=i,Yp(a),e.state=i,a=e.pending,a!==null&&(i=a.next,i===a?e.pending=null:(i=i.next,a.next=i,Gp(e,i)))}function rd(e,a,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=i,Yp(a),a=a.next;while(a!==l)}e.action=null}function Yp(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Qp(e,a){return a}function $p(e,a){if(Be){var i=Ue.formState;if(i!==null){e:{var l=Te;if(Be){if(Fe){t:{for(var h=Fe,m=ca;h.nodeType!==8;){if(!m){h=null;break t}if(h=da(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Fe=da(h.nextSibling),l=h.data==="F!";break e}}Cn(l)}l=!1}l&&(a=i[0])}}return i=Bt(),i.memoizedState=i.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:a},i.queue=l,i=my.bind(null,Te,l),l.dispatch=i,l=id(!1),m=hd.bind(null,Te,!1,l.queue),l=Bt(),h={state:a,dispatch:null,action:e,pending:null},l.queue=h,i=Bk.bind(null,Te,h,m,i),h.dispatch=i,l.memoizedState=e,[a,i,!1]}function Xp(e){var a=nt();return Jp(a,qe,e)}function Jp(e,a,i){if(a=nd(e,a,Qp)[0],e=rl(Ja)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Sr(a)}catch(v){throw v===ni?$o:v}else l=a;a=nt();var h=a.queue,m=h.dispatch;return i!==a.memoizedState&&(Te.flags|=2048,li(9,{destroy:void 0},Ok.bind(null,h,i),null)),[l,m,e]}function Ok(e,a){e.action=a}function Zp(e){var a=nt(),i=qe;if(i!==null)return Jp(a,i,e);nt(),a=a.memoizedState,i=nt();var l=i.queue.dispatch;return i.memoizedState=e,[a,l,!1]}function li(e,a,i,l){return e={tag:e,create:i,deps:l,inst:a,next:null},a=Te.updateQueue,a===null&&(a=sl(),Te.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,a.lastEffect=e),e}function ey(){return nt().memoizedState}function ol(e,a,i,l){var h=Bt();Te.flags|=e,h.memoizedState=li(1|a,{destroy:void 0},i,l===void 0?null:l)}function ll(e,a,i,l){var h=nt();l=l===void 0?null:l;var m=h.memoizedState.inst;qe!==null&&l!==null&&Xu(l,qe.memoizedState.deps)?h.memoizedState=li(a,m,i,l):(Te.flags|=e,h.memoizedState=li(1|a,m,i,l))}function ty(e,a){ol(8390656,8,e,a)}function od(e,a){ll(2048,8,e,a)}function Pk(e){Te.flags|=4;var a=Te.updateQueue;if(a===null)a=sl(),Te.updateQueue=a,a.events=[e];else{var i=a.events;i===null?a.events=[e]:i.push(e)}}function ay(e){var a=nt().memoizedState;return Pk({ref:a,nextImpl:e}),function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function ny(e,a){return ll(4,2,e,a)}function sy(e,a){return ll(4,4,e,a)}function iy(e,a){if(typeof a=="function"){e=e();var i=a(e);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ry(e,a,i){i=i!=null?i.concat([e]):null,ll(4,4,iy.bind(null,a,e),i)}function ld(){}function oy(e,a){var i=nt();a=a===void 0?null:a;var l=i.memoizedState;return a!==null&&Xu(a,l[1])?l[0]:(i.memoizedState=[e,a],e)}function ly(e,a){var i=nt();a=a===void 0?null:a;var l=i.memoizedState;if(a!==null&&Xu(a,l[1]))return l[0];if(l=e(),xs){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,a],l}function cd(e,a,i){return i===void 0||(Xa&1073741824)!==0&&(De&261930)===0?e.memoizedState=a:(e.memoizedState=i,e=c0(),Te.lanes|=e,On|=e,i)}function cy(e,a,i,l){return Wt(i,a)?i:ii.current!==null?(e=cd(e,i,l),Wt(e,a)||(ot=!0),e):(Xa&42)===0||(Xa&1073741824)!==0&&(De&261930)===0?(ot=!0,e.memoizedState=i):(e=c0(),Te.lanes|=e,On|=e,a)}function uy(e,a,i,l,h){var m=D.p;D.p=m!==0&&8>m?m:8;var v=A.T,k={};A.T=k,hd(e,!1,a,i);try{var O=h(),I=A.S;if(I!==null&&I(k,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var $=Ek(O,l);Tr(e,a,$,Jt(e))}else Tr(e,a,l,Jt(e))}catch(Z){Tr(e,a,{then:function(){},status:"rejected",reason:Z},Jt())}finally{D.p=m,v!==null&&k.types!==null&&(v.types=k.types),A.T=v}}function Lk(){}function ud(e,a,i,l){if(e.tag!==5)throw Error(r(476));var h=dy(e).queue;uy(e,h,a,B,i===null?Lk:function(){return hy(e),i(l)})}function dy(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:B},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:i},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function hy(e){var a=dy(e);a.next===null&&(a=e.alternate.memoizedState),Tr(e,a.next.queue,{},Jt())}function dd(){return xt(Vr)}function fy(){return nt().memoizedState}function gy(){return nt().memoizedState}function _k(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var i=Jt();e=An(i);var l=Mn(a,e,i);l!==null&&(Ut(l,a,i),br(l,a,i)),a={cache:Vu()},e.payload=a;return}a=a.return}}function zk(e,a,i){var l=Jt();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cl(e)?py(a,i):(i=Mu(e,a,i,l),i!==null&&(Ut(i,e,l),yy(i,a,l)))}function my(e,a,i){var l=Jt();Tr(e,a,i,l)}function Tr(e,a,i,l){var h={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(cl(e))py(a,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var v=a.lastRenderedState,k=m(v,i);if(h.hasEagerState=!0,h.eagerState=k,Wt(k,v))return Fo(e,a,h,0),Ue===null&&Uo(),!1}catch{}finally{}if(i=Mu(e,a,h,l),i!==null)return Ut(i,e,l),yy(i,a,l),!0}return!1}function hd(e,a,i,l){if(l={lane:2,revertLane:Id(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cl(e)){if(a)throw Error(r(479))}else a=Mu(e,i,l,2),a!==null&&Ut(a,e,2)}function cl(e){var a=e.alternate;return e===Te||a!==null&&a===Te}function py(e,a){ri=al=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function yy(e,a,i){if((i&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,i|=l,a.lanes=i,Sm(e,i)}}var kr={readContext:xt,use:il,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};kr.useEffectEvent=Xe;var by={readContext:xt,use:il,useCallback:function(e,a){return Bt().memoizedState=[e,a===void 0?null:a],e},useContext:xt,useEffect:ty,useImperativeHandle:function(e,a,i){i=i!=null?i.concat([e]):null,ol(4194308,4,iy.bind(null,a,e),i)},useLayoutEffect:function(e,a){return ol(4194308,4,e,a)},useInsertionEffect:function(e,a){ol(4,2,e,a)},useMemo:function(e,a){var i=Bt();a=a===void 0?null:a;var l=e();if(xs){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,a],l},useReducer:function(e,a,i){var l=Bt();if(i!==void 0){var h=i(a);if(xs){vn(!0);try{i(a)}finally{vn(!1)}}}else h=a;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=zk.bind(null,Te,e),[l.memoizedState,e]},useRef:function(e){var a=Bt();return e={current:e},a.memoizedState=e},useState:function(e){e=id(e);var a=e.queue,i=my.bind(null,Te,a);return a.dispatch=i,[e.memoizedState,i]},useDebugValue:ld,useDeferredValue:function(e,a){var i=Bt();return cd(i,e,a)},useTransition:function(){var e=id(!1);return e=uy.bind(null,Te,e.queue,!0,!1),Bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,i){var l=Te,h=Bt();if(Be){if(i===void 0)throw Error(r(407));i=i()}else{if(i=a(),Ue===null)throw Error(r(349));(De&127)!==0||qp(l,a,i)}h.memoizedState=i;var m={value:i,getSnapshot:a};return h.queue=m,ty(Hp.bind(null,l,m,e),[e]),l.flags|=2048,li(9,{destroy:void 0},Vp.bind(null,l,m,i,a),null),i},useId:function(){var e=Bt(),a=Ue.identifierPrefix;if(Be){var i=Ra,l=Da;i=(l&~(1<<32-Gt(l)-1)).toString(32)+i,a="_"+a+"R_"+i,i=nl++,0<i&&(a+="H"+i.toString(32)),a+="_"}else i=Dk++,a="_"+a+"r_"+i.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:dd,useFormState:$p,useActionState:$p,useOptimistic:function(e){var a=Bt();a.memoizedState=a.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=hd.bind(null,Te,!0,i),i.dispatch=a,[e,a]},useMemoCache:ad,useCacheRefresh:function(){return Bt().memoizedState=_k.bind(null,Te)},useEffectEvent:function(e){var a=Bt(),i={impl:e};return a.memoizedState=i,function(){if((Le&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},fd={readContext:xt,use:il,useCallback:oy,useContext:xt,useEffect:od,useImperativeHandle:ry,useInsertionEffect:ny,useLayoutEffect:sy,useMemo:ly,useReducer:rl,useRef:ey,useState:function(){return rl(Ja)},useDebugValue:ld,useDeferredValue:function(e,a){var i=nt();return cy(i,qe.memoizedState,e,a)},useTransition:function(){var e=rl(Ja)[0],a=nt().memoizedState;return[typeof e=="boolean"?e:Sr(e),a]},useSyncExternalStore:zp,useId:fy,useHostTransitionStatus:dd,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,a){var i=nt();return Ip(i,qe,e,a)},useMemoCache:ad,useCacheRefresh:gy};fd.useEffectEvent=ay;var xy={readContext:xt,use:il,useCallback:oy,useContext:xt,useEffect:od,useImperativeHandle:ry,useInsertionEffect:ny,useLayoutEffect:sy,useMemo:ly,useReducer:sd,useRef:ey,useState:function(){return sd(Ja)},useDebugValue:ld,useDeferredValue:function(e,a){var i=nt();return qe===null?cd(i,e,a):cy(i,qe.memoizedState,e,a)},useTransition:function(){var e=sd(Ja)[0],a=nt().memoizedState;return[typeof e=="boolean"?e:Sr(e),a]},useSyncExternalStore:zp,useId:fy,useHostTransitionStatus:dd,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,a){var i=nt();return qe!==null?Ip(i,qe,e,a):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:ad,useCacheRefresh:gy};xy.useEffectEvent=ay;function gd(e,a,i,l){a=e.memoizedState,i=i(l,a),i=i==null?a:b({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var md={enqueueSetState:function(e,a,i){e=e._reactInternals;var l=Jt(),h=An(l);h.payload=a,i!=null&&(h.callback=i),a=Mn(e,h,l),a!==null&&(Ut(a,e,l),br(a,e,l))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var l=Jt(),h=An(l);h.tag=1,h.payload=a,i!=null&&(h.callback=i),a=Mn(e,h,l),a!==null&&(Ut(a,e,l),br(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=Jt(),l=An(i);l.tag=2,a!=null&&(l.callback=a),a=Mn(e,l,i),a!==null&&(Ut(a,e,i),br(a,e,i))}};function vy(e,a,i,l,h,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):a.prototype&&a.prototype.isPureReactComponent?!ur(i,l)||!ur(h,m):!0}function wy(e,a,i,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,l),a.state!==e&&md.enqueueReplaceState(a,a.state,null)}function vs(e,a){var i=a;if("ref"in a){i={};for(var l in a)l!=="ref"&&(i[l]=a[l])}if(e=e.defaultProps){i===a&&(i=b({},i));for(var h in e)i[h]===void 0&&(i[h]=e[h])}return i}function Sy(e){Ho(e)}function Ty(e){console.error(e)}function ky(e){Ho(e)}function ul(e,a){try{var i=e.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Cy(e,a,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function pd(e,a,i){return i=An(i),i.tag=3,i.payload={element:null},i.callback=function(){ul(e,a)},i}function jy(e){return e=An(e),e.tag=3,e}function Ny(e,a,i,l){var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Cy(a,i,l)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Cy(a,i,l),typeof h!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function qk(e,a,i,l,h){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=i.alternate,a!==null&&ei(a,i,h,!0),i=Yt.current,i!==null){switch(i.tag){case 31:case 13:return ua===null?Sl():i.alternate===null&&Je===0&&(Je=3),i.flags&=-257,i.flags|=65536,i.lanes=h,l===Xo?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([l]):a.add(l),Hd(e,l,h)),!1;case 22:return i.flags|=65536,l===Xo?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([l]):i.add(l)),Hd(e,l,h)),!1}throw Error(r(435,i.tag))}return Hd(e,l,h),Sl(),!1}if(Be)return a=Yt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,l!==Pu&&(e=Error(r(422),{cause:l}),fr(ra(e,i)))):(l!==Pu&&(a=Error(r(423),{cause:l}),fr(ra(a,i))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=ra(l,i),h=pd(e.stateNode,l,h),Wu(e,h),Je!==4&&(Je=2)),!1;var m=Error(r(520),{cause:l});if(m=ra(m,i),Rr===null?Rr=[m]:Rr.push(m),Je!==4&&(Je=2),a===null)return!0;l=ra(l,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,e=h&-h,i.lanes|=e,e=pd(i.stateNode,l,e),Wu(i,e),!1;case 1:if(a=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pn===null||!Pn.has(m))))return i.flags|=65536,h&=-h,i.lanes|=h,h=jy(h),Ny(h,e,i,l),Wu(i,h),!1}i=i.return}while(i!==null);return!1}var yd=Error(r(461)),ot=!1;function vt(e,a,i,l){a.child=e===null?Dp(a,null,i,l):bs(a,e.child,i,l)}function Ay(e,a,i,l,h){i=i.render;var m=a.ref;if("ref"in l){var v={};for(var k in l)k!=="ref"&&(v[k]=l[k])}else v=l;return gs(a),l=Ju(e,a,i,v,m,h),k=Zu(),e!==null&&!ot?(ed(e,a,h),Za(e,a,h)):(Be&&k&&Bu(a),a.flags|=1,vt(e,a,l,h),a.child)}function My(e,a,i,l,h){if(e===null){var m=i.type;return typeof m=="function"&&!Eu(m)&&m.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=m,Ey(e,a,m,l,h)):(e=Go(i.type,null,l,a,a.mode,h),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Cd(e,h)){var v=m.memoizedProps;if(i=i.compare,i=i!==null?i:ur,i(v,l)&&e.ref===a.ref)return Za(e,a,h)}return a.flags|=1,e=Ka(m,l),e.ref=a.ref,e.return=a,a.child=e}function Ey(e,a,i,l,h){if(e!==null){var m=e.memoizedProps;if(ur(m,l)&&e.ref===a.ref)if(ot=!1,a.pendingProps=l=m,Cd(e,h))(e.flags&131072)!==0&&(ot=!0);else return a.lanes=e.lanes,Za(e,a,h)}return bd(e,a,i,l,h)}function Dy(e,a,i,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|i:i,e!==null){for(l=a.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,a.child=null;return Ry(e,a,m,i,l)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qo(a,m!==null?m.cachePool:null),m!==null?Op(a,m):Yu(),Pp(a);else return l=a.lanes=536870912,Ry(e,a,m!==null?m.baseLanes|i:i,i,l)}else m!==null?(Qo(a,m.cachePool),Op(a,m),Dn(),a.memoizedState=null):(e!==null&&Qo(a,null),Yu(),Dn());return vt(e,a,h,i),a.child}function Cr(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Ry(e,a,i,l,h){var m=Uu();return m=m===null?null:{parent:it._currentValue,pool:m},a.memoizedState={baseLanes:i,cachePool:m},e!==null&&Qo(a,null),Yu(),Pp(a),e!==null&&ei(e,a,l,!0),a.childLanes=h,null}function dl(e,a){return a=fl({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function By(e,a,i){return bs(a,e.child,null,i),e=dl(a,a.pendingProps),e.flags|=2,Qt(a),a.memoizedState=null,e}function Vk(e,a,i){var l=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Be){if(l.mode==="hidden")return e=dl(a,l),a.lanes=536870912,Cr(null,e);if($u(a),(e=Fe)?(e=G0(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Da,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},i=pp(e),i.return=a,a.child=i,bt=a,Fe=null)):e=null,e===null)throw Cn(a);return a.lanes=536870912,null}return dl(a,l)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if($u(a),h)if(a.flags&256)a.flags&=-257,a=By(e,a,i);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(ot||ei(e,a,i,!1),h=(i&e.childLanes)!==0,ot||h){if(l=Ue,l!==null&&(v=Tm(l,i),v!==0&&v!==m.retryLane))throw m.retryLane=v,us(e,v),Ut(l,e,v),yd;Sl(),a=By(e,a,i)}else e=m.treeContext,Fe=da(v.nextSibling),bt=a,Be=!0,kn=null,ca=!1,e!==null&&xp(a,e),a=dl(a,l),a.flags|=4096;return a}return e=Ka(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function hl(e,a){var i=a.ref;if(i===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(a.flags|=4194816)}}function bd(e,a,i,l,h){return gs(a),i=Ju(e,a,i,l,void 0,h),l=Zu(),e!==null&&!ot?(ed(e,a,h),Za(e,a,h)):(Be&&l&&Bu(a),a.flags|=1,vt(e,a,i,h),a.child)}function Oy(e,a,i,l,h,m){return gs(a),a.updateQueue=null,i=_p(a,l,i,h),Lp(e),l=Zu(),e!==null&&!ot?(ed(e,a,m),Za(e,a,m)):(Be&&l&&Bu(a),a.flags|=1,vt(e,a,i,m),a.child)}function Py(e,a,i,l,h){if(gs(a),a.stateNode===null){var m=$s,v=i.contextType;typeof v=="object"&&v!==null&&(m=xt(v)),m=new i(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=md,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},Iu(a),v=i.contextType,m.context=typeof v=="object"&&v!==null?xt(v):$s,m.state=a.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(gd(a,i,v,l),m.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&md.enqueueReplaceState(m,m.state,null),vr(a,l,m,h),xr(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var k=a.memoizedProps,O=vs(i,k);m.props=O;var I=m.context,$=i.contextType;v=$s,typeof $=="object"&&$!==null&&(v=xt($));var Z=i.getDerivedStateFromProps;$=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=a.pendingProps!==k,$||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||I!==v)&&wy(a,m,l,v),Nn=!1;var W=a.memoizedState;m.state=W,vr(a,l,m,h),xr(),I=a.memoizedState,k||W!==I||Nn?(typeof Z=="function"&&(gd(a,i,Z,l),I=a.memoizedState),(O=Nn||vy(a,i,O,l,W,I,v))?($||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=I),m.props=l,m.state=I,m.context=v,l=O):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Gu(e,a),v=a.memoizedProps,$=vs(i,v),m.props=$,Z=a.pendingProps,W=m.context,I=i.contextType,O=$s,typeof I=="object"&&I!==null&&(O=xt(I)),k=i.getDerivedStateFromProps,(I=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Z||W!==O)&&wy(a,m,l,O),Nn=!1,W=a.memoizedState,m.state=W,vr(a,l,m,h),xr();var Y=a.memoizedState;v!==Z||W!==Y||Nn||e!==null&&e.dependencies!==null&&Ko(e.dependencies)?(typeof k=="function"&&(gd(a,i,k,l),Y=a.memoizedState),($=Nn||vy(a,i,$,l,W,Y,O)||e!==null&&e.dependencies!==null&&Ko(e.dependencies))?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Y,O),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Y,O)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&W===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&W===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=Y),m.props=l,m.state=Y,m.context=O,l=$):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&W===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&W===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,hl(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=bs(a,e.child,null,h),a.child=bs(a,null,i,h)):vt(e,a,i,h),a.memoizedState=m.state,e=a.child):e=Za(e,a,h),e}function Ly(e,a,i,l){return hs(),a.flags|=256,vt(e,a,i,l),a.child}var xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(e){return{baseLanes:e,cachePool:Cp()}}function wd(e,a,i){return e=e!==null?e.childLanes&~i:0,a&&(e|=Xt),e}function _y(e,a,i){var l=a.pendingProps,h=!1,m=(a.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),v&&(h=!0,a.flags&=-129),v=(a.flags&32)!==0,a.flags&=-33,e===null){if(Be){if(h?En(a):Dn(),(e=Fe)?(e=G0(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Da,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},i=pp(e),i.return=a,a.child=i,bt=a,Fe=null)):e=null,e===null)throw Cn(a);return nh(e)?a.lanes=32:a.lanes=536870912,null}var k=l.children;return l=l.fallback,h?(Dn(),h=a.mode,k=fl({mode:"hidden",children:k},h),l=ds(l,h,i,null),k.return=a,l.return=a,k.sibling=l,a.child=k,l=a.child,l.memoizedState=vd(i),l.childLanes=wd(e,v,i),a.memoizedState=xd,Cr(null,l)):(En(a),Sd(a,k))}var O=e.memoizedState;if(O!==null&&(k=O.dehydrated,k!==null)){if(m)a.flags&256?(En(a),a.flags&=-257,a=Td(e,a,i)):a.memoizedState!==null?(Dn(),a.child=e.child,a.flags|=128,a=null):(Dn(),k=l.fallback,h=a.mode,l=fl({mode:"visible",children:l.children},h),k=ds(k,h,i,null),k.flags|=2,l.return=a,k.return=a,l.sibling=k,a.child=l,bs(a,e.child,null,i),l=a.child,l.memoizedState=vd(i),l.childLanes=wd(e,v,i),a.memoizedState=xd,a=Cr(null,l));else if(En(a),nh(k)){if(v=k.nextSibling&&k.nextSibling.dataset,v)var I=v.dgst;v=I,l=Error(r(419)),l.stack="",l.digest=v,fr({value:l,source:null,stack:null}),a=Td(e,a,i)}else if(ot||ei(e,a,i,!1),v=(i&e.childLanes)!==0,ot||v){if(v=Ue,v!==null&&(l=Tm(v,i),l!==0&&l!==O.retryLane))throw O.retryLane=l,us(e,l),Ut(v,e,l),yd;ah(k)||Sl(),a=Td(e,a,i)}else ah(k)?(a.flags|=192,a.child=e.child,a=null):(e=O.treeContext,Fe=da(k.nextSibling),bt=a,Be=!0,kn=null,ca=!1,e!==null&&xp(a,e),a=Sd(a,l.children),a.flags|=4096);return a}return h?(Dn(),k=l.fallback,h=a.mode,O=e.child,I=O.sibling,l=Ka(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,I!==null?k=Ka(I,k):(k=ds(k,h,i,null),k.flags|=2),k.return=a,l.return=a,l.sibling=k,a.child=l,Cr(null,l),l=a.child,k=e.child.memoizedState,k===null?k=vd(i):(h=k.cachePool,h!==null?(O=it._currentValue,h=h.parent!==O?{parent:O,pool:O}:h):h=Cp(),k={baseLanes:k.baseLanes|i,cachePool:h}),l.memoizedState=k,l.childLanes=wd(e,v,i),a.memoizedState=xd,Cr(e.child,l)):(En(a),i=e.child,e=i.sibling,i=Ka(i,{mode:"visible",children:l.children}),i.return=a,i.sibling=null,e!==null&&(v=a.deletions,v===null?(a.deletions=[e],a.flags|=16):v.push(e)),a.child=i,a.memoizedState=null,i)}function Sd(e,a){return a=fl({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function fl(e,a){return e=Kt(22,e,null,a),e.lanes=0,e}function Td(e,a,i){return bs(a,e.child,null,i),e=Sd(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function zy(e,a,i){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),zu(e.return,a,i)}function kd(e,a,i,l,h,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:h,treeForkCount:m}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=i,v.tailMode=h,v.treeForkCount=m)}function qy(e,a,i){var l=a.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var v=at.current,k=(v&2)!==0;if(k?(v=v&1|2,a.flags|=128):v&=1,ee(at,v),vt(e,a,l,i),l=Be?hr:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zy(e,i,a);else if(e.tag===19)zy(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(i=a.child,h=null;i!==null;)e=i.alternate,e!==null&&tl(e)===null&&(h=i),i=i.sibling;i=h,i===null?(h=a.child,a.child=null):(h=i.sibling,i.sibling=null),kd(a,!1,h,i,m,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,h=a.child,a.child=null;h!==null;){if(e=h.alternate,e!==null&&tl(e)===null){a.child=h;break}e=h.sibling,h.sibling=i,i=h,h=e}kd(a,!0,i,null,m,l);break;case"together":kd(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Za(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),On|=a.lanes,(i&a.childLanes)===0)if(e!==null){if(ei(e,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,i=Ka(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=Ka(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function Cd(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ko(e)))}function Hk(e,a,i){switch(a.tag){case 3:be(a,a.stateNode.containerInfo),jn(a,it,e.memoizedState.cache),hs();break;case 27:case 5:je(a);break;case 4:be(a,a.stateNode.containerInfo);break;case 10:jn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,$u(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(En(a),a.flags|=128,null):(i&a.child.childLanes)!==0?_y(e,a,i):(En(a),e=Za(e,a,i),e!==null?e.sibling:null);En(a);break;case 19:var h=(e.flags&128)!==0;if(l=(i&a.childLanes)!==0,l||(ei(e,a,i,!1),l=(i&a.childLanes)!==0),h){if(l)return qy(e,a,i);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(at,at.current),l)break;return null;case 22:return a.lanes=0,Dy(e,a,i,a.pendingProps);case 24:jn(a,it,e.memoizedState.cache)}return Za(e,a,i)}function Vy(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps)ot=!0;else{if(!Cd(e,i)&&(a.flags&128)===0)return ot=!1,Hk(e,a,i);ot=(e.flags&131072)!==0}else ot=!1,Be&&(a.flags&1048576)!==0&&bp(a,hr,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=ps(a.elementType),a.type=e,typeof e=="function")Eu(e)?(l=vs(e,l),a.tag=1,a=Py(null,a,e,l,i)):(a.tag=0,a=bd(null,a,e,l,i));else{if(e!=null){var h=e.$$typeof;if(h===q){a.tag=11,a=Ay(null,a,e,l,i);break e}else if(h===_){a.tag=14,a=My(null,a,e,l,i);break e}}throw a=U(e)||e,Error(r(306,a,""))}}return a;case 0:return bd(e,a,a.type,a.pendingProps,i);case 1:return l=a.type,h=vs(l,a.pendingProps),Py(e,a,l,h,i);case 3:e:{if(be(a,a.stateNode.containerInfo),e===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;h=m.element,Gu(e,a),vr(a,l,null,i);var v=a.memoizedState;if(l=v.cache,jn(a,it,l),l!==m.cache&&qu(a,[it],i,!0),xr(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Ly(e,a,l,i);break e}else if(l!==h){h=ra(Error(r(424)),a),fr(h),a=Ly(e,a,l,i);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=da(e.firstChild),bt=a,Be=!0,kn=null,ca=!0,i=Dp(a,null,l,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(hs(),l===h){a=Za(e,a,i);break e}vt(e,a,l,i)}a=a.child}return a;case 26:return hl(e,a),e===null?(i=X0(a.type,null,a.pendingProps,null))?a.memoizedState=i:Be||(i=a.type,e=a.pendingProps,l=Ml(pe.current).createElement(i),l[yt]=a,l[Lt]=e,wt(l,i,e),mt(l),a.stateNode=l):a.memoizedState=X0(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return je(a),e===null&&Be&&(l=a.stateNode=Y0(a.type,a.pendingProps,pe.current),bt=a,ca=!0,h=Fe,qn(a.type)?(sh=h,Fe=da(l.firstChild)):Fe=h),vt(e,a,a.pendingProps.children,i),hl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Be&&((h=l=Fe)&&(l=yC(l,a.type,a.pendingProps,ca),l!==null?(a.stateNode=l,bt=a,Fe=da(l.firstChild),ca=!1,h=!0):h=!1),h||Cn(a)),je(a),h=a.type,m=a.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,Zd(h,m)?l=null:v!==null&&Zd(h,v)&&(a.flags|=32),a.memoizedState!==null&&(h=Ju(e,a,Rk,null,null,i),Vr._currentValue=h),hl(e,a),vt(e,a,l,i),a.child;case 6:return e===null&&Be&&((e=i=Fe)&&(i=bC(i,a.pendingProps,ca),i!==null?(a.stateNode=i,bt=a,Fe=null,e=!0):e=!1),e||Cn(a)),null;case 13:return _y(e,a,i);case 4:return be(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=bs(a,null,l,i):vt(e,a,l,i),a.child;case 11:return Ay(e,a,a.type,a.pendingProps,i);case 7:return vt(e,a,a.pendingProps,i),a.child;case 8:return vt(e,a,a.pendingProps.children,i),a.child;case 12:return vt(e,a,a.pendingProps.children,i),a.child;case 10:return l=a.pendingProps,jn(a,a.type,l.value),vt(e,a,l.children,i),a.child;case 9:return h=a.type._context,l=a.pendingProps.children,gs(a),h=xt(h),l=l(h),a.flags|=1,vt(e,a,l,i),a.child;case 14:return My(e,a,a.type,a.pendingProps,i);case 15:return Ey(e,a,a.type,a.pendingProps,i);case 19:return qy(e,a,i);case 31:return Vk(e,a,i);case 22:return Dy(e,a,i,a.pendingProps);case 24:return gs(a),l=xt(it),e===null?(h=Uu(),h===null&&(h=Ue,m=Vu(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=i),h=m),a.memoizedState={parent:l,cache:h},Iu(a),jn(a,it,h)):((e.lanes&i)!==0&&(Gu(e,a),vr(a,null,null,i),xr()),h=e.memoizedState,m=a.memoizedState,h.parent!==l?(h={parent:l,cache:l},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),jn(a,it,l)):(l=m.cache,jn(a,it,l),l!==h.cache&&qu(a,[it],i,!0))),vt(e,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function en(e){e.flags|=4}function jd(e,a,i,l,h){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(f0())e.flags|=8192;else throw ys=Xo,Fu}else e.flags&=-16777217}function Hy(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ab(a))if(f0())e.flags|=8192;else throw ys=Xo,Fu}function gl(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?vm():536870912,e.lanes|=a,hi|=a)}function jr(e,a){if(!Be)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ie(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(a)for(var h=e.child;h!==null;)i|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)i|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=i,a}function Uk(e,a,i){var l=a.pendingProps;switch(Ou(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(a),null;case 1:return Ie(a),null;case 3:return i=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),$a(it),Se(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Zs(a)?en(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Lu())),Ie(a),null;case 26:var h=a.type,m=a.memoizedState;return e===null?(en(a),m!==null?(Ie(a),Hy(a,m)):(Ie(a),jd(a,h,null,l,i))):m?m!==e.memoizedState?(en(a),Ie(a),Hy(a,m)):(Ie(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(a),Ie(a),jd(a,h,e,l,i)),null;case 27:if(Ne(a),i=pe.current,h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ie(a),null}e=te.current,Zs(a)?vp(a):(e=Y0(h,l,i),a.stateNode=e,en(a))}return Ie(a),null;case 5:if(Ne(a),h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ie(a),null}if(m=te.current,Zs(a))vp(a);else{var v=Ml(pe.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?v.createElement(h,{is:l.is}):v.createElement(h)}}m[yt]=a,m[Lt]=l;e:for(v=a.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===a)break e;for(;v.sibling===null;){if(v.return===null||v.return===a)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}a.stateNode=m;e:switch(wt(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(a)}}return Ie(a),jd(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,i),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(e=pe.current,Zs(a)){if(e=a.stateNode,i=a.memoizedProps,l=null,h=bt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[yt]=a,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||_0(e.nodeValue,i)),e||Cn(a,!0)}else e=Ml(e).createTextNode(l),e[yt]=a,a.stateNode=e}return Ie(a),null;case 31:if(i=a.memoizedState,e===null||e.memoizedState!==null){if(l=Zs(a),i!==null){if(e===null){if(!l)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[yt]=a}else hs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ie(a),e=!1}else i=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return a.flags&256?(Qt(a),a):(Qt(a),null);if((a.flags&128)!==0)throw Error(r(558))}return Ie(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Zs(a),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[yt]=a}else hs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ie(a),h=!1}else h=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Qt(a),a):(Qt(a),null)}return Qt(a),(a.flags&128)!==0?(a.lanes=i,a):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=a.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),i!==e&&i&&(a.child.flags|=8192),gl(a,a.updateQueue),Ie(a),null);case 4:return Se(),e===null&&Yd(a.stateNode.containerInfo),Ie(a),null;case 10:return $a(a.type),Ie(a),null;case 19:if(K(at),l=a.memoizedState,l===null)return Ie(a),null;if(h=(a.flags&128)!==0,m=l.rendering,m===null)if(h)jr(l,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=tl(e),m!==null){for(a.flags|=128,jr(l,!1),e=m.updateQueue,a.updateQueue=e,gl(a,e),a.subtreeFlags=0,e=i,i=a.child;i!==null;)mp(i,e),i=i.sibling;return ee(at,at.current&1|2),Be&&Ya(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Ft()>xl&&(a.flags|=128,h=!0,jr(l,!1),a.lanes=4194304)}else{if(!h)if(e=tl(m),e!==null){if(a.flags|=128,h=!0,e=e.updateQueue,a.updateQueue=e,gl(a,e),jr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Be)return Ie(a),null}else 2*Ft()-l.renderingStartTime>xl&&i!==536870912&&(a.flags|=128,h=!0,jr(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ft(),e.sibling=null,i=at.current,ee(at,h?i&1|2:i&1),Be&&Ya(a,l.treeForkCount),e):(Ie(a),null);case 22:case 23:return Qt(a),Qu(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(i&536870912)!==0&&(a.flags&128)===0&&(Ie(a),a.subtreeFlags&6&&(a.flags|=8192)):Ie(a),i=a.updateQueue,i!==null&&gl(a,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048),e!==null&&K(ms),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),$a(it),Ie(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function Fk(e,a){switch(Ou(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return $a(it),Se(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ne(a),null;case 31:if(a.memoizedState!==null){if(Qt(a),a.alternate===null)throw Error(r(340));hs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Qt(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));hs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return K(at),null;case 4:return Se(),null;case 10:return $a(a.type),null;case 22:case 23:return Qt(a),Qu(),e!==null&&K(ms),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return $a(it),null;case 25:return null;default:return null}}function Uy(e,a){switch(Ou(a),a.tag){case 3:$a(it),Se();break;case 26:case 27:case 5:Ne(a);break;case 4:Se();break;case 31:a.memoizedState!==null&&Qt(a);break;case 13:Qt(a);break;case 19:K(at);break;case 10:$a(a.type);break;case 22:case 23:Qt(a),Qu(),e!==null&&K(ms);break;case 24:$a(it)}}function Nr(e,a){try{var i=a.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var h=l.next;i=h;do{if((i.tag&e)===e){l=void 0;var m=i.create,v=i.inst;l=m(),v.destroy=l}i=i.next}while(i!==h)}}catch(k){ze(a,a.return,k)}}function Rn(e,a,i){try{var l=a.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var v=l.inst,k=v.destroy;if(k!==void 0){v.destroy=void 0,h=a;var O=i,I=k;try{I()}catch($){ze(h,O,$)}}}l=l.next}while(l!==m)}}catch($){ze(a,a.return,$)}}function Fy(e){var a=e.updateQueue;if(a!==null){var i=e.stateNode;try{Bp(a,i)}catch(l){ze(e,e.return,l)}}}function Iy(e,a,i){i.props=vs(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){ze(e,a,l)}}function Ar(e,a){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(h){ze(e,a,h)}}function Ba(e,a){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(h){ze(e,a,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(h){ze(e,a,h)}else i.current=null}function Gy(e){var a=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(h){ze(e,e.return,h)}}function Nd(e,a,i){try{var l=e.stateNode;dC(l,e.type,i,a),l[Lt]=a}catch(h){ze(e,e.return,h)}}function Wy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qn(e.type)||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,a,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(e),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Ga));else if(l!==4&&(l===27&&qn(e.type)&&(i=e.stateNode,a=null),e=e.child,e!==null))for(Md(e,a,i),e=e.sibling;e!==null;)Md(e,a,i),e=e.sibling}function ml(e,a,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(l!==4&&(l===27&&qn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(ml(e,a,i),e=e.sibling;e!==null;)ml(e,a,i),e=e.sibling}function Ky(e){var a=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);wt(a,l,i),a[yt]=e,a[Lt]=i}catch(m){ze(e,e.return,m)}}var tn=!1,lt=!1,Ed=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,pt=null;function Ik(e,a){if(e=e.containerInfo,Xd=Ll,e=rp(e),Tu(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var v=0,k=-1,O=-1,I=0,$=0,Z=e,W=null;t:for(;;){for(var Y;Z!==i||h!==0&&Z.nodeType!==3||(k=v+h),Z!==m||l!==0&&Z.nodeType!==3||(O=v+l),Z.nodeType===3&&(v+=Z.nodeValue.length),(Y=Z.firstChild)!==null;)W=Z,Z=Y;for(;;){if(Z===e)break t;if(W===i&&++I===h&&(k=v),W===m&&++$===l&&(O=v),(Y=Z.nextSibling)!==null)break;Z=W,W=Z.parentNode}Z=Y}i=k===-1||O===-1?null:{start:k,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Jd={focusedElem:e,selectionRange:i},Ll=!1,pt=a;pt!==null;)if(a=pt,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,pt=e;else for(;pt!==null;){switch(a=pt,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)h=e[i],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,i=a,h=m.memoizedProps,m=m.memoizedState,l=i.stateNode;try{var oe=vs(i.type,h);e=l.getSnapshotBeforeUpdate(oe,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ye){ze(i,i.return,ye)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,i=e.nodeType,i===9)th(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":th(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,pt=e;break}pt=a.return}}function Qy(e,a,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:nn(e,i),l&4&&Nr(5,i);break;case 1:if(nn(e,i),l&4)if(e=i.stateNode,a===null)try{e.componentDidMount()}catch(v){ze(i,i.return,v)}else{var h=vs(i.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(h,a,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(i,i.return,v)}}l&64&&Fy(i),l&512&&Ar(i,i.return);break;case 3:if(nn(e,i),l&64&&(e=i.updateQueue,e!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{Bp(e,a)}catch(v){ze(i,i.return,v)}}break;case 27:a===null&&l&4&&Ky(i);case 26:case 5:nn(e,i),a===null&&l&4&&Gy(i),l&512&&Ar(i,i.return);break;case 12:nn(e,i);break;case 31:nn(e,i),l&4&&Jy(e,i);break;case 13:nn(e,i),l&4&&Zy(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Zk.bind(null,i),xC(e,i))));break;case 22:if(l=i.memoizedState!==null||tn,!l){a=a!==null&&a.memoizedState!==null||lt,h=tn;var m=lt;tn=l,(lt=a)&&!m?sn(e,i,(i.subtreeFlags&8772)!==0):nn(e,i),tn=h,lt=m}break;case 30:break;default:nn(e,i)}}function $y(e){var a=e.alternate;a!==null&&(e.alternate=null,$y(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ru(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,zt=!1;function an(e,a,i){for(i=i.child;i!==null;)Xy(e,a,i),i=i.sibling}function Xy(e,a,i){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ji,i)}catch{}switch(i.tag){case 26:lt||Ba(i,a),an(e,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:lt||Ba(i,a);var l=Ke,h=zt;qn(i.type)&&(Ke=i.stateNode,zt=!1),an(e,a,i),_r(i.stateNode),Ke=l,zt=h;break;case 5:lt||Ba(i,a);case 6:if(l=Ke,h=zt,Ke=null,an(e,a,i),Ke=l,zt=h,Ke!==null)if(zt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(i.stateNode)}catch(m){ze(i,a,m)}else try{Ke.removeChild(i.stateNode)}catch(m){ze(i,a,m)}break;case 18:Ke!==null&&(zt?(e=Ke,F0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),vi(e)):F0(Ke,i.stateNode));break;case 4:l=Ke,h=zt,Ke=i.stateNode.containerInfo,zt=!0,an(e,a,i),Ke=l,zt=h;break;case 0:case 11:case 14:case 15:Rn(2,i,a),lt||Rn(4,i,a),an(e,a,i);break;case 1:lt||(Ba(i,a),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Iy(i,a,l)),an(e,a,i);break;case 21:an(e,a,i);break;case 22:lt=(l=lt)||i.memoizedState!==null,an(e,a,i),lt=l;break;default:an(e,a,i)}}function Jy(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vi(e)}catch(i){ze(a,a.return,i)}}}function Zy(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(i){ze(a,a.return,i)}}function Gk(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Yy),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Yy),a;default:throw Error(r(435,e.tag))}}function pl(e,a){var i=Gk(e);a.forEach(function(l){if(!i.has(l)){i.add(l);var h=eC.bind(null,e,l);l.then(h,h)}})}function qt(e,a){var i=a.deletions;if(i!==null)for(var l=0;l<i.length;l++){var h=i[l],m=e,v=a,k=v;e:for(;k!==null;){switch(k.tag){case 27:if(qn(k.type)){Ke=k.stateNode,zt=!1;break e}break;case 5:Ke=k.stateNode,zt=!1;break e;case 3:case 4:Ke=k.stateNode.containerInfo,zt=!0;break e}k=k.return}if(Ke===null)throw Error(r(160));Xy(m,v,h),Ke=null,zt=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)e0(a,e),a=a.sibling}var xa=null;function e0(e,a){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(a,e),Vt(e),l&4&&(Rn(3,e,e.return),Nr(3,e),Rn(5,e,e.return));break;case 1:qt(a,e),Vt(e),l&512&&(lt||i===null||Ba(i,i.return)),l&64&&tn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var h=xa;if(qt(a,e),Vt(e),l&512&&(lt||i===null||Ba(i,i.return)),l&4){var m=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[tr]||m[yt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),wt(m,l,i),m[yt]=e,mt(m),l=m;break e;case"link":var v=eb("link","href",h).get(l+(i.href||""));if(v){for(var k=0;k<v.length;k++)if(m=v[k],m.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(k,1);break t}}m=h.createElement(l),wt(m,l,i),h.head.appendChild(m);break;case"meta":if(v=eb("meta","content",h).get(l+(i.content||""))){for(k=0;k<v.length;k++)if(m=v[k],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(k,1);break t}}m=h.createElement(l),wt(m,l,i),h.head.appendChild(m);break;default:throw Error(r(468,l))}m[yt]=e,mt(m),l=m}e.stateNode=l}else tb(h,e.type,e.stateNode);else e.stateNode=Z0(h,l,e.memoizedProps);else m!==l?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,l===null?tb(h,e.type,e.stateNode):Z0(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nd(e,e.memoizedProps,i.memoizedProps)}break;case 27:qt(a,e),Vt(e),l&512&&(lt||i===null||Ba(i,i.return)),i!==null&&l&4&&Nd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(qt(a,e),Vt(e),l&512&&(lt||i===null||Ba(i,i.return)),e.flags&32){h=e.stateNode;try{Fs(h,"")}catch(oe){ze(e,e.return,oe)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Nd(e,h,i!==null?i.memoizedProps:h)),l&1024&&(Ed=!0);break;case 6:if(qt(a,e),Vt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(oe){ze(e,e.return,oe)}}break;case 3:if(Rl=null,h=xa,xa=El(a.containerInfo),qt(a,e),xa=h,Vt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{vi(a.containerInfo)}catch(oe){ze(e,e.return,oe)}Ed&&(Ed=!1,t0(e));break;case 4:l=xa,xa=El(e.stateNode.containerInfo),qt(a,e),Vt(e),xa=l;break;case 12:qt(a,e),Vt(e);break;case 31:qt(a,e),Vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pl(e,l)));break;case 13:qt(a,e),Vt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(bl=Ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pl(e,l)));break;case 22:h=e.memoizedState!==null;var O=i!==null&&i.memoizedState!==null,I=tn,$=lt;if(tn=I||h,lt=$||O,qt(a,e),lt=$,tn=I,Vt(e),l&8192)e:for(a=e.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(i===null||O||tn||lt||ws(e)),i=null,a=e;;){if(a.tag===5||a.tag===26){if(i===null){O=i=a;try{if(m=O.stateNode,h)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{k=O.stateNode;var Z=O.memoizedProps.style,W=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;k.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(oe){ze(O,O.return,oe)}}}else if(a.tag===6){if(i===null){O=a;try{O.stateNode.nodeValue=h?"":O.memoizedProps}catch(oe){ze(O,O.return,oe)}}}else if(a.tag===18){if(i===null){O=a;try{var Y=O.stateNode;h?I0(Y,!0):I0(O.stateNode,!1)}catch(oe){ze(O,O.return,oe)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,pl(e,i))));break;case 19:qt(a,e),Vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pl(e,l)));break;case 30:break;case 21:break;default:qt(a,e),Vt(e)}}function Vt(e){var a=e.flags;if(a&2){try{for(var i,l=e.return;l!==null;){if(Wy(l)){i=l;break}l=l.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var h=i.stateNode,m=Ad(e);ml(e,m,h);break;case 5:var v=i.stateNode;i.flags&32&&(Fs(v,""),i.flags&=-33);var k=Ad(e);ml(e,k,v);break;case 3:case 4:var O=i.stateNode.containerInfo,I=Ad(e);Md(e,I,O);break;default:throw Error(r(161))}}catch($){ze(e,e.return,$)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;t0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function nn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Qy(e,a.alternate,a),a=a.sibling}function ws(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Rn(4,a,a.return),ws(a);break;case 1:Ba(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&Iy(a,a.return,i),ws(a);break;case 27:_r(a.stateNode);case 26:case 5:Ba(a,a.return),ws(a);break;case 22:a.memoizedState===null&&ws(a);break;case 30:ws(a);break;default:ws(a)}e=e.sibling}}function sn(e,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,h=e,m=a,v=m.flags;switch(m.tag){case 0:case 11:case 15:sn(h,m,i),Nr(4,m);break;case 1:if(sn(h,m,i),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(I){ze(l,l.return,I)}if(l=m,h=l.updateQueue,h!==null){var k=l.stateNode;try{var O=h.shared.hiddenCallbacks;if(O!==null)for(h.shared.hiddenCallbacks=null,h=0;h<O.length;h++)Rp(O[h],k)}catch(I){ze(l,l.return,I)}}i&&v&64&&Fy(m),Ar(m,m.return);break;case 27:Ky(m);case 26:case 5:sn(h,m,i),i&&l===null&&v&4&&Gy(m),Ar(m,m.return);break;case 12:sn(h,m,i);break;case 31:sn(h,m,i),i&&v&4&&Jy(h,m);break;case 13:sn(h,m,i),i&&v&4&&Zy(h,m);break;case 22:m.memoizedState===null&&sn(h,m,i),Ar(m,m.return);break;case 30:break;default:sn(h,m,i)}a=a.sibling}}function Dd(e,a){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&gr(i))}function Rd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&gr(e))}function va(e,a,i,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)a0(e,a,i,l),a=a.sibling}function a0(e,a,i,l){var h=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a,i,l),h&2048&&Nr(9,a);break;case 1:va(e,a,i,l);break;case 3:va(e,a,i,l),h&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&gr(e)));break;case 12:if(h&2048){va(e,a,i,l),e=a.stateNode;try{var m=a.memoizedProps,v=m.id,k=m.onPostCommit;typeof k=="function"&&k(v,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){ze(a,a.return,O)}}else va(e,a,i,l);break;case 31:va(e,a,i,l);break;case 13:va(e,a,i,l);break;case 23:break;case 22:m=a.stateNode,v=a.alternate,a.memoizedState!==null?m._visibility&2?va(e,a,i,l):Mr(e,a):m._visibility&2?va(e,a,i,l):(m._visibility|=2,ci(e,a,i,l,(a.subtreeFlags&10256)!==0||!1)),h&2048&&Dd(v,a);break;case 24:va(e,a,i,l),h&2048&&Rd(a.alternate,a);break;default:va(e,a,i,l)}}function ci(e,a,i,l,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,v=a,k=i,O=l,I=v.flags;switch(v.tag){case 0:case 11:case 15:ci(m,v,k,O,h),Nr(8,v);break;case 23:break;case 22:var $=v.stateNode;v.memoizedState!==null?$._visibility&2?ci(m,v,k,O,h):Mr(m,v):($._visibility|=2,ci(m,v,k,O,h)),h&&I&2048&&Dd(v.alternate,v);break;case 24:ci(m,v,k,O,h),h&&I&2048&&Rd(v.alternate,v);break;default:ci(m,v,k,O,h)}a=a.sibling}}function Mr(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=e,l=a,h=l.flags;switch(l.tag){case 22:Mr(i,l),h&2048&&Dd(l.alternate,l);break;case 24:Mr(i,l),h&2048&&Rd(l.alternate,l);break;default:Mr(i,l)}a=a.sibling}}var Er=8192;function ui(e,a,i){if(e.subtreeFlags&Er)for(e=e.child;e!==null;)n0(e,a,i),e=e.sibling}function n0(e,a,i){switch(e.tag){case 26:ui(e,a,i),e.flags&Er&&e.memoizedState!==null&&DC(i,xa,e.memoizedState,e.memoizedProps);break;case 5:ui(e,a,i);break;case 3:case 4:var l=xa;xa=El(e.stateNode.containerInfo),ui(e,a,i),xa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Er,Er=16777216,ui(e,a,i),Er=l):ui(e,a,i));break;default:ui(e,a,i)}}function s0(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Dr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];pt=l,r0(l,e)}s0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(e),e=e.sibling}function i0(e){switch(e.tag){case 0:case 11:case 15:Dr(e),e.flags&2048&&Rn(9,e,e.return);break;case 3:Dr(e);break;case 12:Dr(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,yl(e)):Dr(e);break;default:Dr(e)}}function yl(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];pt=l,r0(l,e)}s0(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Rn(8,a,a.return),yl(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,yl(a));break;default:yl(a)}e=e.sibling}}function r0(e,a){for(;pt!==null;){var i=pt;switch(i.tag){case 0:case 11:case 15:Rn(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gr(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,pt=l;else e:for(i=e;pt!==null;){l=pt;var h=l.sibling,m=l.return;if($y(l),l===i){pt=null;break e}if(h!==null){h.return=m,pt=h;break e}pt=m}}}var Wk={getCacheForType:function(e){var a=xt(it),i=a.data.get(e);return i===void 0&&(i=e(),a.data.set(e,i)),i},cacheSignal:function(){return xt(it).controller.signal}},Kk=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ue=null,Me=null,De=0,_e=0,$t=null,Bn=!1,di=!1,Bd=!1,rn=0,Je=0,On=0,Ss=0,Od=0,Xt=0,hi=0,Rr=null,Ht=null,Pd=!1,bl=0,o0=0,xl=1/0,vl=null,Pn=null,ut=0,Ln=null,fi=null,on=0,Ld=0,_d=null,l0=null,Br=0,zd=null;function Jt(){return(Le&2)!==0&&De!==0?De&-De:A.T!==null?Id():km()}function c0(){if(Xt===0)if((De&536870912)===0||Be){var e=Ao;Ao<<=1,(Ao&3932160)===0&&(Ao=262144),Xt=e}else Xt=536870912;return e=Yt.current,e!==null&&(e.flags|=32),Xt}function Ut(e,a,i){(e===Ue&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(gi(e,0),_n(e,De,Xt,!1)),er(e,i),((Le&2)===0||e!==Ue)&&(e===Ue&&((Le&2)===0&&(Ss|=i),Je===4&&_n(e,De,Xt,!1)),Oa(e))}function u0(e,a,i){if((Le&6)!==0)throw Error(r(327));var l=!i&&(a&127)===0&&(a&e.expiredLanes)===0||Zi(e,a),h=l?$k(e,a):Vd(e,a,!0),m=l;do{if(h===0){di&&!l&&_n(e,a,0,!1);break}else{if(i=e.current.alternate,m&&!Yk(i)){h=Vd(e,a,!1),m=!1;continue}if(h===2){if(m=a,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){a=v;e:{var k=e;h=Rr;var O=k.current.memoizedState.isDehydrated;if(O&&(gi(k,v).flags|=256),v=Vd(k,v,!1),v!==2){if(Bd&&!O){k.errorRecoveryDisabledLanes|=m,Ss|=m,h=4;break e}m=Ht,Ht=h,m!==null&&(Ht===null?Ht=m:Ht.push.apply(Ht,m))}h=v}if(m=!1,h!==2)continue}}if(h===1){gi(e,0),_n(e,a,0,!0);break}e:{switch(l=e,m=h,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:_n(l,a,Xt,!Bn);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=bl+300-Ft(),10<h)){if(_n(l,a,Xt,!Bn),Eo(l,0,!0)!==0)break e;on=a,l.timeoutHandle=H0(d0.bind(null,l,i,Ht,vl,Pd,a,Xt,Ss,hi,Bn,m,"Throttled",-0,0),h);break e}d0(l,i,Ht,vl,Pd,a,Xt,Ss,hi,Bn,m,null,-0,0)}}break}while(!0);Oa(e)}function d0(e,a,i,l,h,m,v,k,O,I,$,Z,W,Y){if(e.timeoutHandle=-1,Z=a.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ga},n0(a,m,Z);var oe=(m&62914560)===m?bl-Ft():(m&4194048)===m?o0-Ft():0;if(oe=RC(Z,oe),oe!==null){on=m,e.cancelPendingCommit=oe(x0.bind(null,e,a,m,i,l,h,v,k,O,$,Z,null,W,Y)),_n(e,m,v,!I);return}}x0(e,a,m,i,l,h,v,k,O)}function Yk(e){for(var a=e;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var h=i[l],m=h.getSnapshot;h=h.value;try{if(!Wt(m(),h))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function _n(e,a,i,l){a&=~Od,a&=~Ss,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var h=a;0<h;){var m=31-Gt(h),v=1<<m;l[m]=-1,h&=~v}i!==0&&wm(e,i,a)}function wl(){return(Le&6)===0?(Or(0),!1):!0}function qd(){if(Me!==null){if(_e===0)var e=Me.return;else e=Me,Qa=fs=null,td(e),si=null,pr=0,e=Me;for(;e!==null;)Uy(e.alternate,e),e=e.return;Me=null}}function gi(e,a){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,gC(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),on=0,qd(),Ue=e,Me=i=Ka(e.current,null),De=a,_e=0,$t=null,Bn=!1,di=Zi(e,a),Bd=!1,hi=Xt=Od=Ss=On=Je=0,Ht=Rr=null,Pd=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var h=31-Gt(l),m=1<<h;a|=e[h],l&=~m}return rn=a,Uo(),i}function h0(e,a){Te=null,A.H=kr,a===ni||a===$o?(a=Ap(),_e=3):a===Fu?(a=Ap(),_e=4):_e=a===yd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,$t=a,Me===null&&(Je=1,ul(e,ra(a,e.current)))}function f0(){var e=Yt.current;return e===null?!0:(De&4194048)===De?ua===null:(De&62914560)===De||(De&536870912)!==0?e===ua:!1}function g0(){var e=A.H;return A.H=kr,e===null?kr:e}function m0(){var e=A.A;return A.A=Wk,e}function Sl(){Je=4,Bn||(De&4194048)!==De&&Yt.current!==null||(di=!0),(On&134217727)===0&&(Ss&134217727)===0||Ue===null||_n(Ue,De,Xt,!1)}function Vd(e,a,i){var l=Le;Le|=2;var h=g0(),m=m0();(Ue!==e||De!==a)&&(vl=null,gi(e,a)),a=!1;var v=Je;e:do try{if(_e!==0&&Me!==null){var k=Me,O=$t;switch(_e){case 8:qd(),v=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(a=!0);var I=_e;if(_e=0,$t=null,mi(e,k,O,I),i&&di){v=0;break e}break;default:I=_e,_e=0,$t=null,mi(e,k,O,I)}}Qk(),v=Je;break}catch($){h0(e,$)}while(!0);return a&&e.shellSuspendCounter++,Qa=fs=null,Le=l,A.H=h,A.A=m,Me===null&&(Ue=null,De=0,Uo()),v}function Qk(){for(;Me!==null;)p0(Me)}function $k(e,a){var i=Le;Le|=2;var l=g0(),h=m0();Ue!==e||De!==a?(vl=null,xl=Ft()+500,gi(e,a)):di=Zi(e,a);e:do try{if(_e!==0&&Me!==null){a=Me;var m=$t;t:switch(_e){case 1:_e=0,$t=null,mi(e,a,m,1);break;case 2:case 9:if(jp(m)){_e=0,$t=null,y0(a);break}a=function(){_e!==2&&_e!==9||Ue!==e||(_e=7),Oa(e)},m.then(a,a);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:jp(m)?(_e=0,$t=null,y0(a)):(_e=0,$t=null,mi(e,a,m,7));break;case 5:var v=null;switch(Me.tag){case 26:v=Me.memoizedState;case 5:case 27:var k=Me;if(v?ab(v):k.stateNode.complete){_e=0,$t=null;var O=k.sibling;if(O!==null)Me=O;else{var I=k.return;I!==null?(Me=I,Tl(I)):Me=null}break t}}_e=0,$t=null,mi(e,a,m,5);break;case 6:_e=0,$t=null,mi(e,a,m,6);break;case 8:qd(),Je=6;break e;default:throw Error(r(462))}}Xk();break}catch($){h0(e,$)}while(!0);return Qa=fs=null,A.H=l,A.A=h,Le=i,Me!==null?0:(Ue=null,De=0,Uo(),Je)}function Xk(){for(;Me!==null&&!vT();)p0(Me)}function p0(e){var a=Vy(e.alternate,e,rn);e.memoizedProps=e.pendingProps,a===null?Tl(e):Me=a}function y0(e){var a=e,i=a.alternate;switch(a.tag){case 15:case 0:a=Oy(i,a,a.pendingProps,a.type,void 0,De);break;case 11:a=Oy(i,a,a.pendingProps,a.type.render,a.ref,De);break;case 5:td(a);default:Uy(i,a),a=Me=mp(a,rn),a=Vy(i,a,rn)}e.memoizedProps=e.pendingProps,a===null?Tl(e):Me=a}function mi(e,a,i,l){Qa=fs=null,td(a),si=null,pr=0;var h=a.return;try{if(qk(e,h,a,i,De)){Je=1,ul(e,ra(i,e.current)),Me=null;return}}catch(m){if(h!==null)throw Me=h,m;Je=1,ul(e,ra(i,e.current)),Me=null;return}a.flags&32768?(Be||l===1?e=!0:di||(De&536870912)!==0?e=!1:(Bn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),b0(a,e)):Tl(a)}function Tl(e){var a=e;do{if((a.flags&32768)!==0){b0(a,Bn);return}e=a.return;var i=Uk(a.alternate,a,rn);if(i!==null){Me=i;return}if(a=a.sibling,a!==null){Me=a;return}Me=a=e}while(a!==null);Je===0&&(Je=5)}function b0(e,a){do{var i=Fk(e.alternate,e);if(i!==null){i.flags&=32767,Me=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(e=e.sibling,e!==null)){Me=e;return}Me=e=i}while(e!==null);Je=6,Me=null}function x0(e,a,i,l,h,m,v,k,O){e.cancelPendingCommit=null;do kl();while(ut!==0);if((Le&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=Au,ET(e,i,m,v,k,O),e===Ue&&(Me=Ue=null,De=0),fi=a,Ln=e,on=i,Ld=m,_d=h,l0=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tC(jo,function(){return k0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,h=D.p,D.p=2,v=Le,Le|=4;try{Ik(e,a,i)}finally{Le=v,D.p=h,A.T=l}}ut=1,v0(),w0(),S0()}}function v0(){if(ut===1){ut=0;var e=Ln,a=fi,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=A.T,A.T=null;var l=D.p;D.p=2;var h=Le;Le|=4;try{e0(a,e);var m=Jd,v=rp(e.containerInfo),k=m.focusedElem,O=m.selectionRange;if(v!==k&&k&&k.ownerDocument&&ip(k.ownerDocument.documentElement,k)){if(O!==null&&Tu(k)){var I=O.start,$=O.end;if($===void 0&&($=I),"selectionStart"in k)k.selectionStart=I,k.selectionEnd=Math.min($,k.value.length);else{var Z=k.ownerDocument||document,W=Z&&Z.defaultView||window;if(W.getSelection){var Y=W.getSelection(),oe=k.textContent.length,ye=Math.min(O.start,oe),He=O.end===void 0?ye:Math.min(O.end,oe);!Y.extend&&ye>He&&(v=He,He=ye,ye=v);var V=sp(k,ye),L=sp(k,He);if(V&&L&&(Y.rangeCount!==1||Y.anchorNode!==V.node||Y.anchorOffset!==V.offset||Y.focusNode!==L.node||Y.focusOffset!==L.offset)){var F=Z.createRange();F.setStart(V.node,V.offset),Y.removeAllRanges(),ye>He?(Y.addRange(F),Y.extend(L.node,L.offset)):(F.setEnd(L.node,L.offset),Y.addRange(F))}}}}for(Z=[],Y=k;Y=Y.parentNode;)Y.nodeType===1&&Z.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<Z.length;k++){var X=Z[k];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ll=!!Xd,Jd=Xd=null}finally{Le=h,D.p=l,A.T=i}}e.current=a,ut=2}}function w0(){if(ut===2){ut=0;var e=Ln,a=fi,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=A.T,A.T=null;var l=D.p;D.p=2;var h=Le;Le|=4;try{Qy(e,a.alternate,a)}finally{Le=h,D.p=l,A.T=i}}ut=3}}function S0(){if(ut===4||ut===3){ut=0,wT();var e=Ln,a=fi,i=on,l=l0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ut=5:(ut=0,fi=Ln=null,T0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Pn=null),su(i),a=a.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ji,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=A.T,h=D.p,D.p=2,A.T=null;try{for(var m=e.onRecoverableError,v=0;v<l.length;v++){var k=l[v];m(k.value,{componentStack:k.stack})}}finally{A.T=a,D.p=h}}(on&3)!==0&&kl(),Oa(e),h=e.pendingLanes,(i&261930)!==0&&(h&42)!==0?e===zd?Br++:(Br=0,zd=e):Br=0,Or(0)}}function T0(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,gr(a)))}function kl(){return v0(),w0(),S0(),k0()}function k0(){if(ut!==5)return!1;var e=Ln,a=Ld;Ld=0;var i=su(on),l=A.T,h=D.p;try{D.p=32>i?32:i,A.T=null,i=_d,_d=null;var m=Ln,v=on;if(ut=0,fi=Ln=null,on=0,(Le&6)!==0)throw Error(r(331));var k=Le;if(Le|=4,i0(m.current),a0(m,m.current,v,i),Le=k,Or(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ji,m)}catch{}return!0}finally{D.p=h,A.T=l,T0(e,a)}}function C0(e,a,i){a=ra(i,a),a=pd(e.stateNode,a,2),e=Mn(e,a,2),e!==null&&(er(e,2),Oa(e))}function ze(e,a,i){if(e.tag===3)C0(e,e,i);else for(;a!==null;){if(a.tag===3){C0(a,e,i);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pn===null||!Pn.has(l))){e=ra(i,e),i=jy(2),l=Mn(a,i,2),l!==null&&(Ny(i,l,a,e),er(l,2),Oa(l));break}}a=a.return}}function Hd(e,a,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Kk;var h=new Set;l.set(a,h)}else h=l.get(a),h===void 0&&(h=new Set,l.set(a,h));h.has(i)||(Bd=!0,h.add(i),e=Jk.bind(null,e,a,i),a.then(e,e))}function Jk(e,a,i){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ue===e&&(De&i)===i&&(Je===4||Je===3&&(De&62914560)===De&&300>Ft()-bl?(Le&2)===0&&gi(e,0):Od|=i,hi===De&&(hi=0)),Oa(e)}function j0(e,a){a===0&&(a=vm()),e=us(e,a),e!==null&&(er(e,a),Oa(e))}function Zk(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),j0(e,i)}function eC(e,a){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(i=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),j0(e,i)}function tC(e,a){return eu(e,a)}var Cl=null,pi=null,Ud=!1,jl=!1,Fd=!1,zn=0;function Oa(e){e!==pi&&e.next===null&&(pi===null?Cl=pi=e:pi=pi.next=e),jl=!0,Ud||(Ud=!0,nC())}function Or(e,a){if(!Fd&&jl){Fd=!0;do for(var i=!1,l=Cl;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var v=l.suspendedLanes,k=l.pingedLanes;m=(1<<31-Gt(42|e)+1)-1,m&=h&~(v&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(i=!0,E0(l,m))}else m=De,m=Eo(l,l===Ue?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Zi(l,m)||(i=!0,E0(l,m));l=l.next}while(i);Fd=!1}}function aC(){N0()}function N0(){jl=Ud=!1;var e=0;zn!==0&&fC()&&(e=zn);for(var a=Ft(),i=null,l=Cl;l!==null;){var h=l.next,m=A0(l,a);m===0?(l.next=null,i===null?Cl=h:i.next=h,h===null&&(pi=i)):(i=l,(e!==0||(m&3)!==0)&&(jl=!0)),l=h}ut!==0&&ut!==5||Or(e),zn!==0&&(zn=0)}function A0(e,a){for(var i=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Gt(m),k=1<<v,O=h[v];O===-1?((k&i)===0||(k&l)!==0)&&(h[v]=MT(k,a)):O<=a&&(e.expiredLanes|=k),m&=~k}if(a=Ue,i=De,i=Eo(e,e===a?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===a&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&tu(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Zi(e,i)){if(a=i&-i,a===e.callbackPriority)return a;switch(l!==null&&tu(l),su(i)){case 2:case 8:i=bm;break;case 32:i=jo;break;case 268435456:i=xm;break;default:i=jo}return l=M0.bind(null,e),i=eu(i,l),e.callbackPriority=a,e.callbackNode=i,a}return l!==null&&l!==null&&tu(l),e.callbackPriority=2,e.callbackNode=null,2}function M0(e,a){if(ut!==0&&ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(kl()&&e.callbackNode!==i)return null;var l=De;return l=Eo(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(u0(e,l,a),A0(e,Ft()),e.callbackNode!=null&&e.callbackNode===i?M0.bind(null,e):null)}function E0(e,a){if(kl())return null;u0(e,a,!0)}function nC(){mC(function(){(Le&6)!==0?eu(ym,aC):N0()})}function Id(){if(zn===0){var e=ti;e===0&&(e=No,No<<=1,(No&261888)===0&&(No=256)),zn=e}return zn}function D0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oo(""+e)}function R0(e,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,e.id&&i.setAttribute("form",e.id),a.parentNode.insertBefore(i,a),e=new FormData(e),i.parentNode.removeChild(i),e}function sC(e,a,i,l,h){if(a==="submit"&&i&&i.stateNode===h){var m=D0((h[Lt]||null).action),v=l.submitter;v&&(a=(a=v[Lt]||null)?D0(a.formAction):v.getAttribute("formAction"),a!==null&&(m=a,v=null));var k=new zo("action","action",null,l,h);e.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zn!==0){var O=v?R0(h,v):new FormData(h);ud(i,{pending:!0,data:O,method:h.method,action:m},null,O)}}else typeof m=="function"&&(k.preventDefault(),O=v?R0(h,v):new FormData(h),ud(i,{pending:!0,data:O,method:h.method,action:m},m,O))},currentTarget:h}]})}}for(var Gd=0;Gd<Nu.length;Gd++){var Wd=Nu[Gd],iC=Wd.toLowerCase(),rC=Wd[0].toUpperCase()+Wd.slice(1);ba(iC,"on"+rC)}ba(cp,"onAnimationEnd"),ba(up,"onAnimationIteration"),ba(dp,"onAnimationStart"),ba("dblclick","onDoubleClick"),ba("focusin","onFocus"),ba("focusout","onBlur"),ba(Sk,"onTransitionRun"),ba(Tk,"onTransitionStart"),ba(kk,"onTransitionCancel"),ba(hp,"onTransitionEnd"),Hs("onMouseEnter",["mouseout","mouseover"]),Hs("onMouseLeave",["mouseout","mouseover"]),Hs("onPointerEnter",["pointerout","pointerover"]),Hs("onPointerLeave",["pointerout","pointerover"]),rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rs("onBeforeInput",["compositionend","keypress","textInput","paste"]),rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pr));function B0(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],h=l.event;l=l.listeners;e:{var m=void 0;if(a)for(var v=l.length-1;0<=v;v--){var k=l[v],O=k.instance,I=k.currentTarget;if(k=k.listener,O!==m&&h.isPropagationStopped())break e;m=k,h.currentTarget=I;try{m(h)}catch($){Ho($)}h.currentTarget=null,m=O}else for(v=0;v<l.length;v++){if(k=l[v],O=k.instance,I=k.currentTarget,k=k.listener,O!==m&&h.isPropagationStopped())break e;m=k,h.currentTarget=I;try{m(h)}catch($){Ho($)}h.currentTarget=null,m=O}}}}function Ee(e,a){var i=a[iu];i===void 0&&(i=a[iu]=new Set);var l=e+"__bubble";i.has(l)||(O0(a,e,2,!1),i.add(l))}function Kd(e,a,i){var l=0;a&&(l|=4),O0(i,e,l,a)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Yd(e){if(!e[Nl]){e[Nl]=!0,Nm.forEach(function(i){i!=="selectionchange"&&(oC.has(i)||Kd(i,!1,e),Kd(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Nl]||(a[Nl]=!0,Kd("selectionchange",!1,a))}}function O0(e,a,i,l){switch(cb(a)){case 2:var h=PC;break;case 8:h=LC;break;default:h=ch}i=h.bind(null,a,i,e),h=void 0,!gu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(a,i,{capture:!0,passive:h}):e.addEventListener(a,i,!0):h!==void 0?e.addEventListener(a,i,{passive:h}):e.addEventListener(a,i,!1)}function Qd(e,a,i,l,h){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var k=l.stateNode.containerInfo;if(k===h)break;if(v===4)for(v=l.return;v!==null;){var O=v.tag;if((O===3||O===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;k!==null;){if(v=zs(k),v===null)return;if(O=v.tag,O===5||O===6||O===26||O===27){l=m=v;continue e}k=k.parentNode}}l=l.return}qm(function(){var I=m,$=hu(i),Z=[];e:{var W=fp.get(e);if(W!==void 0){var Y=zo,oe=e;switch(e){case"keypress":if(Lo(i)===0)break e;case"keydown":case"keyup":Y=ek;break;case"focusin":oe="focus",Y=bu;break;case"focusout":oe="blur",Y=bu;break;case"beforeblur":case"afterblur":Y=bu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=UT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=nk;break;case cp:case up:case dp:Y=GT;break;case hp:Y=ik;break;case"scroll":case"scrollend":Y=VT;break;case"wheel":Y=ok;break;case"copy":case"cut":case"paste":Y=KT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Im;break;case"toggle":case"beforetoggle":Y=ck}var ye=(a&4)!==0,He=!ye&&(e==="scroll"||e==="scrollend"),V=ye?W!==null?W+"Capture":null:W;ye=[];for(var L=I,F;L!==null;){var X=L;if(F=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||F===null||V===null||(X=nr(L,V),X!=null&&ye.push(Lr(L,X,F))),He)break;L=L.return}0<ye.length&&(W=new Y(W,oe,null,i,$),Z.push({event:W,listeners:ye}))}}if((a&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",W&&i!==du&&(oe=i.relatedTarget||i.fromElement)&&(zs(oe)||oe[_s]))break e;if((Y||W)&&(W=$.window===$?$:(W=$.ownerDocument)?W.defaultView||W.parentWindow:window,Y?(oe=i.relatedTarget||i.toElement,Y=I,oe=oe?zs(oe):null,oe!==null&&(He=u(oe),ye=oe.tag,oe!==He||ye!==5&&ye!==27&&ye!==6)&&(oe=null)):(Y=null,oe=I),Y!==oe)){if(ye=Um,X="onMouseLeave",V="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Im,X="onPointerLeave",V="onPointerEnter",L="pointer"),He=Y==null?W:ar(Y),F=oe==null?W:ar(oe),W=new ye(X,L+"leave",Y,i,$),W.target=He,W.relatedTarget=F,X=null,zs($)===I&&(ye=new ye(V,L+"enter",oe,i,$),ye.target=F,ye.relatedTarget=He,X=ye),He=X,Y&&oe)t:{for(ye=lC,V=Y,L=oe,F=0,X=V;X;X=ye(X))F++;X=0;for(var me=L;me;me=ye(me))X++;for(;0<F-X;)V=ye(V),F--;for(;0<X-F;)L=ye(L),X--;for(;F--;){if(V===L||L!==null&&V===L.alternate){ye=V;break t}V=ye(V),L=ye(L)}ye=null}else ye=null;Y!==null&&P0(Z,W,Y,ye,!1),oe!==null&&He!==null&&P0(Z,He,oe,ye,!0)}}e:{if(W=I?ar(I):window,Y=W.nodeName&&W.nodeName.toLowerCase(),Y==="select"||Y==="input"&&W.type==="file")var Oe=Jm;else if($m(W))if(Zm)Oe=xk;else{Oe=yk;var de=pk}else Y=W.nodeName,!Y||Y.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?I&&uu(I.elementType)&&(Oe=Jm):Oe=bk;if(Oe&&(Oe=Oe(e,I))){Xm(Z,Oe,i,$);break e}de&&de(e,W,I),e==="focusout"&&I&&W.type==="number"&&I.memoizedProps.value!=null&&cu(W,"number",W.value)}switch(de=I?ar(I):window,e){case"focusin":($m(de)||de.contentEditable==="true")&&(Ks=de,ku=I,dr=null);break;case"focusout":dr=ku=Ks=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,op(Z,i,$);break;case"selectionchange":if(wk)break;case"keydown":case"keyup":op(Z,i,$)}var ke;if(vu)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ws?Ym(e,i)&&(Re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Re="onCompositionStart");Re&&(Gm&&i.locale!=="ko"&&(Ws||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ws&&(ke=Vm()):(Sn=$,mu="value"in Sn?Sn.value:Sn.textContent,Ws=!0)),de=Al(I,Re),0<de.length&&(Re=new Fm(Re,e,null,i,$),Z.push({event:Re,listeners:de}),ke?Re.data=ke:(ke=Qm(i),ke!==null&&(Re.data=ke)))),(ke=dk?hk(e,i):fk(e,i))&&(Re=Al(I,"onBeforeInput"),0<Re.length&&(de=new Fm("onBeforeInput","beforeinput",null,i,$),Z.push({event:de,listeners:Re}),de.data=ke)),sC(Z,e,I,i,$)}B0(Z,a)})}function Lr(e,a,i){return{instance:e,listener:a,currentTarget:i}}function Al(e,a){for(var i=a+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=nr(e,i),h!=null&&l.unshift(Lr(e,h,m)),h=nr(e,a),h!=null&&l.push(Lr(e,h,m))),e.tag===3)return l;e=e.return}return[]}function lC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P0(e,a,i,l,h){for(var m=a._reactName,v=[];i!==null&&i!==l;){var k=i,O=k.alternate,I=k.stateNode;if(k=k.tag,O!==null&&O===l)break;k!==5&&k!==26&&k!==27||I===null||(O=I,h?(I=nr(i,m),I!=null&&v.unshift(Lr(i,I,O))):h||(I=nr(i,m),I!=null&&v.push(Lr(i,I,O)))),i=i.return}v.length!==0&&e.push({event:a,listeners:v})}var cC=/\r\n?/g,uC=/\u0000|\uFFFD/g;function L0(e){return(typeof e=="string"?e:""+e).replace(cC,`
`).replace(uC,"")}function _0(e,a){return a=L0(a),L0(e)===a}function Ve(e,a,i,l,h,m){switch(i){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Fs(e,""+l);break;case"className":Ro(e,"class",l);break;case"tabIndex":Ro(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ro(e,i,l);break;case"style":_m(e,l,m);break;case"data":if(a!=="object"){Ro(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Oo(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(a!=="input"&&Ve(e,a,"name",h.name,h,null),Ve(e,a,"formEncType",h.formEncType,h,null),Ve(e,a,"formMethod",h.formMethod,h,null),Ve(e,a,"formTarget",h.formTarget,h,null)):(Ve(e,a,"encType",h.encType,h,null),Ve(e,a,"method",h.method,h,null),Ve(e,a,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Oo(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=Ga);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=Oo(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Do(e,"popover",l);break;case"xlinkActuate":Ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ia(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ia(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ia(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ia(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Do(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=zT.get(i)||i,Do(e,i,l))}}function $d(e,a,i,l,h,m){switch(i){case"style":_m(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(i=l.__html,i!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof l=="string"?Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&Fs(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Am.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(h=i.endsWith("Capture"),a=i.slice(2,h?i.length-7:void 0),m=e[Lt]||null,m=m!=null?m[i]:null,typeof m=="function"&&e.removeEventListener(a,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(a,l,h);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):Do(e,i,l)}}}function wt(e,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,h=!1,m;for(m in i)if(i.hasOwnProperty(m)){var v=i[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ve(e,a,m,v,i,null)}}h&&Ve(e,a,"srcSet",i.srcSet,i,null),l&&Ve(e,a,"src",i.src,i,null);return;case"input":Ee("invalid",e);var k=m=v=h=null,O=null,I=null;for(l in i)if(i.hasOwnProperty(l)){var $=i[l];if($!=null)switch(l){case"name":h=$;break;case"type":v=$;break;case"checked":O=$;break;case"defaultChecked":I=$;break;case"value":m=$;break;case"defaultValue":k=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,a));break;default:Ve(e,a,l,$,i,null)}}Bm(e,m,k,O,I,v,h,!1);return;case"select":Ee("invalid",e),l=v=m=null;for(h in i)if(i.hasOwnProperty(h)&&(k=i[h],k!=null))switch(h){case"value":m=k;break;case"defaultValue":v=k;break;case"multiple":l=k;default:Ve(e,a,h,k,i,null)}a=m,i=v,e.multiple=!!l,a!=null?Us(e,!!l,a,!1):i!=null&&Us(e,!!l,i,!0);return;case"textarea":Ee("invalid",e),m=h=l=null;for(v in i)if(i.hasOwnProperty(v)&&(k=i[v],k!=null))switch(v){case"value":l=k;break;case"defaultValue":h=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(91));break;default:Ve(e,a,v,k,i,null)}Pm(e,l,h,m);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(l=i[O],l!=null))switch(O){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,a,O,l,i,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<Pr.length;l++)Ee(Pr[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in i)if(i.hasOwnProperty(I)&&(l=i[I],l!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Ve(e,a,I,l,i,null)}return;default:if(uu(a)){for($ in i)i.hasOwnProperty($)&&(l=i[$],l!==void 0&&$d(e,a,$,l,i,void 0));return}}for(k in i)i.hasOwnProperty(k)&&(l=i[k],l!=null&&Ve(e,a,k,l,i,null))}function dC(e,a,i,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,v=null,k=null,O=null,I=null,$=null;for(Y in i){var Z=i[Y];if(i.hasOwnProperty(Y)&&Z!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":O=Z;default:l.hasOwnProperty(Y)||Ve(e,a,Y,null,l,Z)}}for(var W in l){var Y=l[W];if(Z=i[W],l.hasOwnProperty(W)&&(Y!=null||Z!=null))switch(W){case"type":m=Y;break;case"name":h=Y;break;case"checked":I=Y;break;case"defaultChecked":$=Y;break;case"value":v=Y;break;case"defaultValue":k=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,a));break;default:Y!==Z&&Ve(e,a,W,Y,l,Z)}}lu(e,v,k,O,I,$,m,h);return;case"select":Y=v=k=W=null;for(m in i)if(O=i[m],i.hasOwnProperty(m)&&O!=null)switch(m){case"value":break;case"multiple":Y=O;default:l.hasOwnProperty(m)||Ve(e,a,m,null,l,O)}for(h in l)if(m=l[h],O=i[h],l.hasOwnProperty(h)&&(m!=null||O!=null))switch(h){case"value":W=m;break;case"defaultValue":k=m;break;case"multiple":v=m;default:m!==O&&Ve(e,a,h,m,l,O)}a=k,i=v,l=Y,W!=null?Us(e,!!i,W,!1):!!l!=!!i&&(a!=null?Us(e,!!i,a,!0):Us(e,!!i,i?[]:"",!1));return;case"textarea":Y=W=null;for(k in i)if(h=i[k],i.hasOwnProperty(k)&&h!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Ve(e,a,k,null,l,h)}for(v in l)if(h=l[v],m=i[v],l.hasOwnProperty(v)&&(h!=null||m!=null))switch(v){case"value":W=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==m&&Ve(e,a,v,h,l,m)}Om(e,W,Y);return;case"option":for(var oe in i)if(W=i[oe],i.hasOwnProperty(oe)&&W!=null&&!l.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Ve(e,a,oe,null,l,W)}for(O in l)if(W=l[O],Y=i[O],l.hasOwnProperty(O)&&W!==Y&&(W!=null||Y!=null))switch(O){case"selected":e.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Ve(e,a,O,W,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in i)W=i[ye],i.hasOwnProperty(ye)&&W!=null&&!l.hasOwnProperty(ye)&&Ve(e,a,ye,null,l,W);for(I in l)if(W=l[I],Y=i[I],l.hasOwnProperty(I)&&W!==Y&&(W!=null||Y!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,a));break;default:Ve(e,a,I,W,l,Y)}return;default:if(uu(a)){for(var He in i)W=i[He],i.hasOwnProperty(He)&&W!==void 0&&!l.hasOwnProperty(He)&&$d(e,a,He,void 0,l,W);for($ in l)W=l[$],Y=i[$],!l.hasOwnProperty($)||W===Y||W===void 0&&Y===void 0||$d(e,a,$,W,l,Y);return}}for(var V in i)W=i[V],i.hasOwnProperty(V)&&W!=null&&!l.hasOwnProperty(V)&&Ve(e,a,V,null,l,W);for(Z in l)W=l[Z],Y=i[Z],!l.hasOwnProperty(Z)||W===Y||W==null&&Y==null||Ve(e,a,Z,W,l,Y)}function z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var h=i[l],m=h.transferSize,v=h.initiatorType,k=h.duration;if(m&&k&&z0(v)){for(v=0,k=h.responseEnd,l+=1;l<i.length;l++){var O=i[l],I=O.startTime;if(I>k)break;var $=O.transferSize,Z=O.initiatorType;$&&z0(Z)&&(O=O.responseEnd,v+=$*(O<k?1:(k-I)/(O-I)))}if(--l,a+=8*(m+v)/(h.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xd=null,Jd=null;function Ml(e){return e.nodeType===9?e:e.ownerDocument}function q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Zd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var eh=null;function fC(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,gC=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,mC=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(e){return U0.resolve(null).then(e).catch(pC)}:H0;function pC(e){setTimeout(function(){throw e})}function qn(e){return e==="head"}function F0(e,a){var i=a,l=0;do{var h=i.nextSibling;if(e.removeChild(i),h&&h.nodeType===8)if(i=h.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(h),vi(a);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")_r(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,_r(i);for(var m=i.firstChild;m;){var v=m.nextSibling,k=m.nodeName;m[tr]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&m.rel.toLowerCase()==="stylesheet"||i.removeChild(m),m=v}}else i==="body"&&_r(e.ownerDocument.body);i=h}while(i);vi(a)}function I0(e,a){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?a?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(a?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function th(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":th(i),ru(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function yC(e,a,i,l){for(;e.nodeType===1;){var h=i;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tr])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function bC(e,a,i){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=da(e.nextSibling),e===null))return null;return e}function G0(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$?"||e.data==="$~"}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xC(e,a){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||i.readyState!=="loading")a();else{var l=function(){a(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function da(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var sh=null;function W0(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(a===0)return da(e.nextSibling);a--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||a++}e=e.nextSibling}return null}function K0(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(a===0)return e;a--}else i!=="/$"&&i!=="/&"||a++}e=e.previousSibling}return null}function Y0(e,a,i){switch(a=Ml(i),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _r(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ru(e)}var ha=new Map,Q0=new Set;function El(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ln=D.d;D.d={f:vC,r:wC,D:SC,C:TC,L:kC,m:CC,X:NC,S:jC,M:AC};function vC(){var e=ln.f(),a=wl();return e||a}function wC(e){var a=qs(e);a!==null&&a.tag===5&&a.type==="form"?hy(a):ln.r(e)}var yi=typeof document>"u"?null:document;function $0(e,a,i){var l=yi;if(l&&typeof a=="string"&&a){var h=sa(a);h='link[rel="'+e+'"][href="'+h+'"]',typeof i=="string"&&(h+='[crossorigin="'+i+'"]'),Q0.has(h)||(Q0.add(h),e={rel:e,crossOrigin:i,href:a},l.querySelector(h)===null&&(a=l.createElement("link"),wt(a,"link",e),mt(a),l.head.appendChild(a)))}}function SC(e){ln.D(e),$0("dns-prefetch",e,null)}function TC(e,a){ln.C(e,a),$0("preconnect",e,a)}function kC(e,a,i){ln.L(e,a,i);var l=yi;if(l&&e&&a){var h='link[rel="preload"][as="'+sa(a)+'"]';a==="image"&&i&&i.imageSrcSet?(h+='[imagesrcset="'+sa(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(h+='[imagesizes="'+sa(i.imageSizes)+'"]')):h+='[href="'+sa(e)+'"]';var m=h;switch(a){case"style":m=bi(e);break;case"script":m=xi(e)}ha.has(m)||(e=b({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:e,as:a},i),ha.set(m,e),l.querySelector(h)!==null||a==="style"&&l.querySelector(zr(m))||a==="script"&&l.querySelector(qr(m))||(a=l.createElement("link"),wt(a,"link",e),mt(a),l.head.appendChild(a)))}}function CC(e,a){ln.m(e,a);var i=yi;if(i&&e){var l=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+sa(l)+'"][href="'+sa(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xi(e)}if(!ha.has(m)&&(e=b({rel:"modulepreload",href:e},a),ha.set(m,e),i.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(qr(m)))return}l=i.createElement("link"),wt(l,"link",e),mt(l),i.head.appendChild(l)}}}function jC(e,a,i){ln.S(e,a,i);var l=yi;if(l&&e){var h=Vs(l).hoistableStyles,m=bi(e);a=a||"default";var v=h.get(m);if(!v){var k={loading:0,preload:null};if(v=l.querySelector(zr(m)))k.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":a},i),(i=ha.get(m))&&ih(e,i);var O=v=l.createElement("link");mt(O),wt(O,"link",e),O._p=new Promise(function(I,$){O.onload=I,O.onerror=$}),O.addEventListener("load",function(){k.loading|=1}),O.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Dl(v,a,l)}v={type:"stylesheet",instance:v,count:1,state:k},h.set(m,v)}}}function NC(e,a){ln.X(e,a);var i=yi;if(i&&e){var l=Vs(i).hoistableScripts,h=xi(e),m=l.get(h);m||(m=i.querySelector(qr(h)),m||(e=b({src:e,async:!0},a),(a=ha.get(h))&&rh(e,a),m=i.createElement("script"),mt(m),wt(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function AC(e,a){ln.M(e,a);var i=yi;if(i&&e){var l=Vs(i).hoistableScripts,h=xi(e),m=l.get(h);m||(m=i.querySelector(qr(h)),m||(e=b({src:e,async:!0,type:"module"},a),(a=ha.get(h))&&rh(e,a),m=i.createElement("script"),mt(m),wt(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function X0(e,a,i,l){var h=(h=pe.current)?El(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=bi(i.href),i=Vs(h).hoistableStyles,l=i.get(a),l||(l={type:"style",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=bi(i.href);var m=Vs(h).hoistableStyles,v=m.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=h.querySelector(zr(e)))&&!m._p&&(v.instance=m,v.state.loading=5),ha.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ha.set(e,i),m||MC(h,e,i,v.state))),a&&l===null)throw Error(r(528,""));return v}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=xi(i),i=Vs(h).hoistableScripts,l=i.get(a),l||(l={type:"script",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function bi(e){return'href="'+sa(e)+'"'}function zr(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function MC(e,a,i,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),wt(a,"link",i),mt(a),e.head.appendChild(a))}function xi(e){return'[src="'+sa(e)+'"]'}function qr(e){return"script[async]"+e}function Z0(e,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+sa(i.href)+'"]');if(l)return a.instance=l,mt(l),l;var h=b({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),mt(l),wt(l,"style",h),Dl(l,i.precedence,e),a.instance=l;case"stylesheet":h=bi(i.href);var m=e.querySelector(zr(h));if(m)return a.state.loading|=4,a.instance=m,mt(m),m;l=J0(i),(h=ha.get(h))&&ih(l,h),m=(e.ownerDocument||e).createElement("link"),mt(m);var v=m;return v._p=new Promise(function(k,O){v.onload=k,v.onerror=O}),wt(m,"link",l),a.state.loading|=4,Dl(m,i.precedence,e),a.instance=m;case"script":return m=xi(i.src),(h=e.querySelector(qr(m)))?(a.instance=h,mt(h),h):(l=i,(h=ha.get(m))&&(l=b({},i),rh(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),mt(h),wt(h,"link",l),e.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Dl(l,i.precedence,e));return a.instance}function Dl(e,a,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,v=0;v<l.length;v++){var k=l[v];if(k.dataset.precedence===a)m=k;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(e,a.firstChild))}function ih(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function rh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Rl=null;function eb(e,a,i){if(Rl===null){var l=new Map,h=Rl=new Map;h.set(i,l)}else h=Rl,l=h.get(i),l||(l=new Map,h.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),h=0;h<i.length;h++){var m=i[h];if(!(m[tr]||m[yt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(a)||"";v=e+v;var k=l.get(v);k?k.push(m):l.set(v,[m])}}return l}function tb(e,a,i){e=e.ownerDocument||e,e.head.insertBefore(i,a==="title"?e.querySelector("head > title"):null)}function EC(e,a,i){if(i===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ab(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function DC(e,a,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=bi(l.href),m=a.querySelector(zr(h));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Bl.bind(e),a.then(e,e)),i.state.loading|=4,i.instance=m,mt(m);return}m=a.ownerDocument||a,l=J0(l),(h=ha.get(h))&&ih(l,h),m=m.createElement("link"),mt(m);var v=m;v._p=new Promise(function(k,O){v.onload=k,v.onerror=O}),wt(m,"link",l),i.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Bl.bind(e),a.addEventListener("load",i),a.addEventListener("error",i))}}var oh=0;function RC(e,a){return e.stylesheets&&e.count===0&&Pl(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&Pl(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&oh===0&&(oh=62500*hC());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pl(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>oh?50:800)+a);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Bl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ol=null;function Pl(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ol=new Map,a.forEach(BC,e),Ol=null,Bl.call(e))}function BC(e,a){if(!(a.state.loading&4)){var i=Ol.get(e);if(i)var l=i.get(null);else{i=new Map,Ol.set(e,i);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var v=h[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),l=v)}l&&i.set(null,l)}h=a.instance,v=h.getAttribute("data-precedence"),m=i.get(v)||l,m===l&&i.set(null,h),i.set(v,h),this.count++,l=Bl.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),a.state.loading|=4}}var Vr={$$typeof:j,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function OC(e,a,i,l,h,m,v,k,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function nb(e,a,i,l,h,m,v,k,O,I,$,Z){return e=new OC(e,a,i,v,O,I,$,Z,k),a=1,m===!0&&(a|=24),m=Kt(3,null,null,a),e.current=m,m.stateNode=e,a=Vu(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:i,cache:a},Iu(m),e}function sb(e){return e?(e=$s,e):$s}function ib(e,a,i,l,h,m){h=sb(h),l.context===null?l.context=h:l.pendingContext=h,l=An(a),l.payload={element:i},m=m===void 0?null:m,m!==null&&(l.callback=m),i=Mn(e,l,a),i!==null&&(Ut(i,e,a),br(i,e,a))}function rb(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function lh(e,a){rb(e,a),(e=e.alternate)&&rb(e,a)}function ob(e){if(e.tag===13||e.tag===31){var a=us(e,67108864);a!==null&&Ut(a,e,67108864),lh(e,67108864)}}function lb(e){if(e.tag===13||e.tag===31){var a=Jt();a=nu(a);var i=us(e,a);i!==null&&Ut(i,e,a),lh(e,a)}}var Ll=!0;function PC(e,a,i,l){var h=A.T;A.T=null;var m=D.p;try{D.p=2,ch(e,a,i,l)}finally{D.p=m,A.T=h}}function LC(e,a,i,l){var h=A.T;A.T=null;var m=D.p;try{D.p=8,ch(e,a,i,l)}finally{D.p=m,A.T=h}}function ch(e,a,i,l){if(Ll){var h=uh(l);if(h===null)Qd(e,a,l,_l,i),ub(e,l);else if(zC(h,e,a,i,l))l.stopPropagation();else if(ub(e,l),a&4&&-1<_C.indexOf(e)){for(;h!==null;){var m=qs(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=is(m.pendingLanes);if(v!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;v;){var O=1<<31-Gt(v);k.entanglements[1]|=O,v&=~O}Oa(m),(Le&6)===0&&(xl=Ft()+500,Or(0))}}break;case 31:case 13:k=us(m,2),k!==null&&Ut(k,m,2),wl(),lh(m,2)}if(m=uh(l),m===null&&Qd(e,a,l,_l,i),m===h)break;h=m}h!==null&&l.stopPropagation()}else Qd(e,a,l,null,i)}}function uh(e){return e=hu(e),dh(e)}var _l=null;function dh(e){if(_l=null,e=zs(e),e!==null){var a=u(e);if(a===null)e=null;else{var i=a.tag;if(i===13){if(e=d(a),e!==null)return e;e=null}else if(i===31){if(e=f(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return _l=e,null}function cb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ST()){case ym:return 2;case bm:return 8;case jo:case TT:return 32;case xm:return 268435456;default:return 32}default:return 32}}var hh=!1,Vn=null,Hn=null,Un=null,Hr=new Map,Ur=new Map,Fn=[],_C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ub(e,a){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Hr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(a.pointerId)}}function Fr(e,a,i,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:i,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},a!==null&&(a=qs(a),a!==null&&ob(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),e)}function zC(e,a,i,l,h){switch(a){case"focusin":return Vn=Fr(Vn,e,a,i,l,h),!0;case"dragenter":return Hn=Fr(Hn,e,a,i,l,h),!0;case"mouseover":return Un=Fr(Un,e,a,i,l,h),!0;case"pointerover":var m=h.pointerId;return Hr.set(m,Fr(Hr.get(m)||null,e,a,i,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Ur.set(m,Fr(Ur.get(m)||null,e,a,i,l,h)),!0}return!1}function db(e){var a=zs(e.target);if(a!==null){var i=u(a);if(i!==null){if(a=i.tag,a===13){if(a=d(i),a!==null){e.blockedOn=a,Cm(e.priority,function(){lb(i)});return}}else if(a===31){if(a=f(i),a!==null){e.blockedOn=a,Cm(e.priority,function(){lb(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=uh(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);du=l,i.target.dispatchEvent(l),du=null}else return a=qs(i),a!==null&&ob(a),e.blockedOn=i,!1;a.shift()}return!0}function hb(e,a,i){zl(e)&&i.delete(a)}function qC(){hh=!1,Vn!==null&&zl(Vn)&&(Vn=null),Hn!==null&&zl(Hn)&&(Hn=null),Un!==null&&zl(Un)&&(Un=null),Hr.forEach(hb),Ur.forEach(hb)}function ql(e,a){e.blockedOn===a&&(e.blockedOn=null,hh||(hh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,qC)))}var Vl=null;function fb(e){Vl!==e&&(Vl=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var a=0;a<e.length;a+=3){var i=e[a],l=e[a+1],h=e[a+2];if(typeof l!="function"){if(dh(l||i)===null)continue;break}var m=qs(i);m!==null&&(e.splice(a,3),a-=3,ud(m,{pending:!0,data:h,method:i.method,action:l},l,h))}}))}function vi(e){function a(O){return ql(O,e)}Vn!==null&&ql(Vn,e),Hn!==null&&ql(Hn,e),Un!==null&&ql(Un,e),Hr.forEach(a),Ur.forEach(a);for(var i=0;i<Fn.length;i++){var l=Fn[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Fn.length&&(i=Fn[0],i.blockedOn===null);)db(i),i.blockedOn===null&&Fn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var h=i[l],m=i[l+1],v=h[Lt]||null;if(typeof m=="function")v||fb(i);else if(v){var k=null;if(m&&m.hasAttribute("formAction")){if(h=m,v=m[Lt]||null)k=v.formAction;else if(dh(h)!==null)continue}else k=v.action;typeof k=="function"?i[l+1]=k:(i.splice(l,3),l-=3),fb(i)}}}function gb(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return h=v})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function fh(e){this._internalRoot=e}Hl.prototype.render=fh.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var i=a.current,l=Jt();ib(i,l,e,a,null,null)},Hl.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ib(e.current,2,null,e,null,null),wl(),a[_s]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var a=km();e={blockedOn:null,target:e,priority:a};for(var i=0;i<Fn.length&&a!==0&&a<Fn[i].priority;i++);Fn.splice(i,0,e),i===0&&db(e)}};var mb=n.version;if(mb!=="19.2.1")throw Error(r(527,mb,"19.2.1"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(a),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var VC={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Ji=Ul.inject(VC),It=Ul}catch{}}return Gr.createRoot=function(e,a){if(!c(e))throw Error(r(299));var i=!1,l="",h=Sy,m=Ty,v=ky;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),a=nb(e,1,!1,null,null,i,l,null,h,m,v,gb),e[_s]=a.current,Yd(e),new fh(a)},Gr.hydrateRoot=function(e,a,i){if(!c(e))throw Error(r(299));var l=!1,h="",m=Sy,v=Ty,k=ky,O=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(k=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),a=nb(e,1,!0,a,i??null,l,h,O,m,v,k,gb),a.context=sb(null),i=a.current,l=Jt(),l=nu(l),h=An(l),h.callback=null,Mn(i,h,l),i=l,a.current.lanes=i,er(a,i),Oa(a),e[_s]=a.current,Yd(e),new Hl(a)},Gr.version="19.2.1",Gr}var Cb;function JC(){if(Cb)return ph.exports;Cb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),ph.exports=XC(),ph.exports}var ZC=JC();const ej=Ls(ZC);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jb="popstate";function tj(t={}){function n(r,c){let{pathname:u,search:d,hash:f}=r.location;return hf("",{pathname:u,search:d,hash:f},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(r,c){return typeof c=="string"?c:so(c)}return nj(n,s,null,t)}function Ye(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function ya(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function aj(){return Math.random().toString(36).substring(2,10)}function Nb(t,n){return{usr:t.state,key:t.key,idx:n}}function hf(t,n,s=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof n=="string"?Vi(n):n,state:s,key:n&&n.key||r||aj()}}function so({pathname:t="/",search:n="",hash:s=""}){return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Vi(t){let n={};if(t){let s=t.indexOf("#");s>=0&&(n.hash=t.substring(s),t=t.substring(0,s));let r=t.indexOf("?");r>=0&&(n.search=t.substring(r),t=t.substring(0,r)),t&&(n.pathname=t)}return n}function nj(t,n,s,r={}){let{window:c=document.defaultView,v5Compat:u=!1}=r,d=c.history,f="POP",g=null,p=y();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function y(){return(d.state||{idx:null}).idx}function b(){f="POP";let N=y(),M=N==null?null:N-p;p=N,g&&g({action:f,location:T.location,delta:M})}function w(N,M){f="PUSH";let E=hf(T.location,N,M);p=y()+1;let j=Nb(E,p),q=T.createHref(E);try{d.pushState(j,"",q)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;c.location.assign(q)}u&&g&&g({action:f,location:T.location,delta:1})}function S(N,M){f="REPLACE";let E=hf(T.location,N,M);p=y();let j=Nb(E,p),q=T.createHref(E);d.replaceState(j,"",q),u&&g&&g({action:f,location:T.location,delta:0})}function C(N){return sj(N)}let T={get action(){return f},get location(){return t(c,d)},listen(N){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(jb,b),g=N,()=>{c.removeEventListener(jb,b),g=null}},createHref(N){return n(c,N)},createURL:C,encodeLocation(N){let M=C(N);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:S,go(N){return d.go(N)}};return T}function sj(t,n=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(s,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:so(t);return r=r.replace(/ $/,"%20"),!n&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function tw(t,n,s="/"){return ij(t,n,s,!1)}function ij(t,n,s,r){let c=typeof n=="string"?Vi(n):n,u=gn(c.pathname||"/",s);if(u==null)return null;let d=aw(t);rj(d);let f=null;for(let g=0;f==null&&g<d.length;++g){let p=yj(u);f=mj(d[g],p,r)}return f}function aw(t,n=[],s=[],r="",c=!1){let u=(d,f,g=c,p)=>{let y={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&g)return;Ye(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let b=hn([r,y.relativePath]),w=s.concat(y);d.children&&d.children.length>0&&(Ye(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),aw(d.children,n,w,b,g)),!(d.path==null&&!d.index)&&n.push({path:b,score:fj(b,d.index),routesMeta:w})};return t.forEach((d,f)=>{var g;if(d.path===""||!((g=d.path)!=null&&g.includes("?")))u(d,f);else for(let p of nw(d.path))u(d,f,!0,p)}),n}function nw(t){let n=t.split("/");if(n.length===0)return[];let[s,...r]=n,c=s.endsWith("?"),u=s.replace(/\?$/,"");if(r.length===0)return c?[u,""]:[u];let d=nw(r.join("/")),f=[];return f.push(...d.map(g=>g===""?u:[u,g].join("/"))),c&&f.push(...d),f.map(g=>t.startsWith("/")&&g===""?"/":g)}function rj(t){t.sort((n,s)=>n.score!==s.score?s.score-n.score:gj(n.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var oj=/^:[\w-]+$/,lj=3,cj=2,uj=1,dj=10,hj=-2,Ab=t=>t==="*";function fj(t,n){let s=t.split("/"),r=s.length;return s.some(Ab)&&(r+=hj),n&&(r+=cj),s.filter(c=>!Ab(c)).reduce((c,u)=>c+(oj.test(u)?lj:u===""?uj:dj),r)}function gj(t,n){return t.length===n.length&&t.slice(0,-1).every((r,c)=>r===n[c])?t[t.length-1]-n[n.length-1]:0}function mj(t,n,s=!1){let{routesMeta:r}=t,c={},u="/",d=[];for(let f=0;f<r.length;++f){let g=r[f],p=f===r.length-1,y=u==="/"?n:n.slice(u.length)||"/",b=pc({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},y),w=g.route;if(!b&&p&&s&&!r[r.length-1].route.index&&(b=pc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!b)return null;Object.assign(c,b.params),d.push({params:c,pathname:hn([u,b.pathname]),pathnameBase:wj(hn([u,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(u=hn([u,b.pathnameBase]))}return d}function pc(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,r]=pj(t.path,t.caseSensitive,t.end),c=n.match(s);if(!c)return null;let u=c[0],d=u.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:b},w)=>{if(y==="*"){let C=f[w]||"";d=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const S=f[w];return b&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:t}}function pj(t,n=!1,s=!0){ya(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,g)=>(r.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),r]}function yj(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ya(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),t}}function gn(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let s=n.endsWith("/")?n.length-1:n.length,r=t.charAt(s);return r&&r!=="/"?null:t.slice(s)||"/"}var sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bj=t=>sw.test(t);function xj(t,n="/"){let{pathname:s,search:r="",hash:c=""}=typeof t=="string"?Vi(t):t,u;if(s)if(bj(s))u=s;else{if(s.includes("//")){let d=s;s=s.replace(/\/\/+/g,"/"),ya(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${s}`)}s.startsWith("/")?u=Mb(s.substring(1),"/"):u=Mb(s,n)}else u=n;return{pathname:u,search:Sj(r),hash:Tj(c)}}function Mb(t,n){let s=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function vh(t,n,s,r){return`Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vj(t){return t.filter((n,s)=>s===0||n.route.path&&n.route.path.length>0)}function og(t){let n=vj(t);return n.map((s,r)=>r===n.length-1?s.pathname:s.pathnameBase)}function lg(t,n,s,r=!1){let c;typeof t=="string"?c=Vi(t):(c={...t},Ye(!c.pathname||!c.pathname.includes("?"),vh("?","pathname","search",c)),Ye(!c.pathname||!c.pathname.includes("#"),vh("#","pathname","hash",c)),Ye(!c.search||!c.search.includes("#"),vh("#","search","hash",c)));let u=t===""||c.pathname==="",d=u?"/":c.pathname,f;if(d==null)f=s;else{let b=n.length-1;if(!r&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),b-=1;c.pathname=w.join("/")}f=b>=0?n[b]:"/"}let g=xj(c,f),p=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(p||y)&&(g.pathname+="/"),g}var hn=t=>t.join("/").replace(/\/\/+/g,"/"),wj=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sj=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Tj=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,kj=class{constructor(t,n,s,r=!1){this.status=t,this.statusText=n||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Cj(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function jj(t){return t.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function rw(t,n){let s=t;if(typeof s!="string"||!sw.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,c=!1;if(iw)try{let u=new URL(window.location.href),d=s.startsWith("//")?new URL(u.protocol+s):new URL(s),f=gn(d.pathname,n);d.origin===u.origin&&f!=null?s=f+d.search+d.hash:c=!0}catch{ya(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ow=["POST","PUT","PATCH","DELETE"];new Set(ow);var Nj=["GET",...ow];new Set(Nj);var Hi=x.createContext(null);Hi.displayName="DataRouter";var Oc=x.createContext(null);Oc.displayName="DataRouterState";var Aj=x.createContext(!1),lw=x.createContext({isTransitioning:!1});lw.displayName="ViewTransition";var Mj=x.createContext(new Map);Mj.displayName="Fetchers";var Ej=x.createContext(null);Ej.displayName="Await";var aa=x.createContext(null);aa.displayName="Navigation";var go=x.createContext(null);go.displayName="Location";var Aa=x.createContext({outlet:null,matches:[],isDataRoute:!1});Aa.displayName="Route";var cg=x.createContext(null);cg.displayName="RouteError";var cw="REACT_ROUTER_ERROR",Dj="REDIRECT",Rj="ROUTE_ERROR_RESPONSE";function Bj(t){if(t.startsWith(`${cw}:${Dj}:{`))try{let n=JSON.parse(t.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Oj(t){if(t.startsWith(`${cw}:${Rj}:{`))try{let n=JSON.parse(t.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new kj(n.status,n.statusText,n.data)}catch{}}function Pj(t,{relative:n}={}){Ye(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=x.useContext(aa),{hash:c,pathname:u,search:d}=po(t,{relative:n}),f=u;return s!=="/"&&(f=u==="/"?s:hn([s,u])),r.createHref({pathname:f,search:d,hash:c})}function Ui(){return x.useContext(go)!=null}function Ma(){return Ye(Ui(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(go).location}var uw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dw(t){x.useContext(aa).static||x.useLayoutEffect(t)}function mo(){let{isDataRoute:t}=x.useContext(Aa);return t?Yj():Lj()}function Lj(){Ye(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let t=x.useContext(Hi),{basename:n,navigator:s}=x.useContext(aa),{matches:r}=x.useContext(Aa),{pathname:c}=Ma(),u=JSON.stringify(og(r)),d=x.useRef(!1);return dw(()=>{d.current=!0}),x.useCallback((g,p={})=>{if(ya(d.current,uw),!d.current)return;if(typeof g=="number"){s.go(g);return}let y=lg(g,JSON.parse(u),c,p.relative==="path");t==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:hn([n,y.pathname])),(p.replace?s.replace:s.push)(y,p.state,p)},[n,s,u,c,t])}x.createContext(null);function Pc(){let{matches:t}=x.useContext(Aa),n=t[t.length-1];return n?n.params:{}}function po(t,{relative:n}={}){let{matches:s}=x.useContext(Aa),{pathname:r}=Ma(),c=JSON.stringify(og(s));return x.useMemo(()=>lg(t,JSON.parse(c),r,n==="path"),[t,c,r,n])}function _j(t,n){return hw(t,n)}function hw(t,n,s,r,c){var E;Ye(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=x.useContext(aa),{matches:d}=x.useContext(Aa),f=d[d.length-1],g=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",b=f&&f.route;{let j=b&&b.path||"";gw(p,!b||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let w=Ma(),S;if(n){let j=typeof n=="string"?Vi(n):n;Ye(y==="/"||((E=j.pathname)==null?void 0:E.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${j.pathname}" was given in the \`location\` prop.`),S=j}else S=w;let C=S.pathname||"/",T=C;if(y!=="/"){let j=y.replace(/^\//,"").split("/");T="/"+C.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=tw(t,{pathname:T});ya(b||N!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ya(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Uj(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},g,j.params),pathname:hn([y,u.encodeLocation?u.encodeLocation(j.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?y:hn([y,u.encodeLocation?u.encodeLocation(j.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),d,s,r,c);return n&&M?x.createElement(go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},M):M}function zj(){let t=Kj(),n=Cj(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:u},"ErrorBoundary")," or"," ",x.createElement("code",{style:u},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),s?x.createElement("pre",{style:c},s):null,d)}var qj=x.createElement(zj,null),fw=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){this.props.onError?this.props.onError(t,n):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const s=Oj(t.digest);s&&(t=s)}let n=t!==void 0?x.createElement(Aa.Provider,{value:this.props.routeContext},x.createElement(cg.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?x.createElement(Vj,{error:t},n):n}};fw.contextType=Aj;var wh=new WeakMap;function Vj({children:t,error:n}){let{basename:s}=x.useContext(aa);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let r=Bj(n.digest);if(r){let c=wh.get(n);if(c)throw c;let u=rw(r.location,s);if(iw&&!wh.get(n))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw wh.set(n,d),d}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return t}function Hj({routeContext:t,match:n,children:s}){let r=x.useContext(Hi);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Aa.Provider,{value:t},s)}function Uj(t,n=[],s=null,r=null,c=null){if(t==null){if(!s)return null;if(s.errors)t=s.matches;else if(n.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let u=t,d=s==null?void 0:s.errors;if(d!=null){let y=u.findIndex(b=>b.route.id&&(d==null?void 0:d[b.route.id])!==void 0);Ye(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let f=!1,g=-1;if(s)for(let y=0;y<u.length;y++){let b=u[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=y),b.route.id){let{loaderData:w,errors:S}=s,C=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!S||S[b.route.id]===void 0);if(b.route.lazy||C){f=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}let p=s&&r?(y,b)=>{var w,S;r(y,{location:s.location,params:((S=(w=s.matches)==null?void 0:w[0])==null?void 0:S.params)??{},unstable_pattern:jj(s.matches),errorInfo:b})}:void 0;return u.reduceRight((y,b,w)=>{let S,C=!1,T=null,N=null;s&&(S=d&&b.route.id?d[b.route.id]:void 0,T=b.route.errorElement||qj,f&&(g<0&&w===0?(gw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,N=null):g===w&&(C=!0,N=b.route.hydrateFallbackElement||null)));let M=n.concat(u.slice(0,w+1)),E=()=>{let j;return S?j=T:C?j=N:b.route.Component?j=x.createElement(b.route.Component,null):b.route.element?j=b.route.element:j=y,x.createElement(Hj,{match:b,routeContext:{outlet:y,matches:M,isDataRoute:s!=null},children:j})};return s&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?x.createElement(fw,{location:s.location,revalidation:s.revalidation,component:T,error:S,children:E(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):E()},null)}function ug(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fj(t){let n=x.useContext(Hi);return Ye(n,ug(t)),n}function Ij(t){let n=x.useContext(Oc);return Ye(n,ug(t)),n}function Gj(t){let n=x.useContext(Aa);return Ye(n,ug(t)),n}function dg(t){let n=Gj(t),s=n.matches[n.matches.length-1];return Ye(s.route.id,`${t} can only be used on routes that contain a unique "id"`),s.route.id}function Wj(){return dg("useRouteId")}function Kj(){var r;let t=x.useContext(cg),n=Ij("useRouteError"),s=dg("useRouteError");return t!==void 0?t:(r=n.errors)==null?void 0:r[s]}function Yj(){let{router:t}=Fj("useNavigate"),n=dg("useNavigate"),s=x.useRef(!1);return dw(()=>{s.current=!0}),x.useCallback(async(c,u={})=>{ya(s.current,uw),s.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:n,...u}))},[t,n])}var Eb={};function gw(t,n,s){!n&&!Eb[t]&&(Eb[t]=!0,ya(!1,s))}x.memo(Qj);function Qj({routes:t,future:n,state:s,onError:r}){return hw(t,void 0,s,r,n)}function hg({to:t,replace:n,state:s,relative:r}){Ye(Ui(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=x.useContext(aa);ya(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=x.useContext(Aa),{pathname:d}=Ma(),f=mo(),g=lg(t,og(u),d,r==="path"),p=JSON.stringify(g);return x.useEffect(()=>{f(JSON.parse(p),{replace:n,state:s,relative:r})},[f,p,r,n,s]),null}function St(t){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $j({basename:t="/",children:n=null,location:s,navigationType:r="POP",navigator:c,static:u=!1,unstable_useTransitions:d}){Ye(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),g=x.useMemo(()=>({basename:f,navigator:c,static:u,unstable_useTransitions:d,future:{}}),[f,c,u,d]);typeof s=="string"&&(s=Vi(s));let{pathname:p="/",search:y="",hash:b="",state:w=null,key:S="default"}=s,C=x.useMemo(()=>{let T=gn(p,f);return T==null?null:{location:{pathname:T,search:y,hash:b,state:w,key:S},navigationType:r}},[f,p,y,b,w,S,r]);return ya(C!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:x.createElement(aa.Provider,{value:g},x.createElement(go.Provider,{children:n,value:C}))}function Xj({children:t,location:n}){return _j(ff(t),n)}function ff(t,n=[]){let s=[];return x.Children.forEach(t,(r,c)=>{if(!x.isValidElement(r))return;let u=[...n,c];if(r.type===x.Fragment){s.push.apply(s,ff(r.props.children,u));return}Ye(r.type===St,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=ff(r.props.children,u)),s.push(d)}),s}var ic="get",rc="application/x-www-form-urlencoded";function Lc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Jj(t){return Lc(t)&&t.tagName.toLowerCase()==="button"}function Zj(t){return Lc(t)&&t.tagName.toLowerCase()==="form"}function eN(t){return Lc(t)&&t.tagName.toLowerCase()==="input"}function tN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aN(t,n){return t.button===0&&(!n||n==="_self")&&!tN(t)}var Fl=null;function nN(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var sN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sh(t){return t!=null&&!sN.has(t)?(ya(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rc}"`),null):t}function iN(t,n){let s,r,c,u,d;if(Zj(t)){let f=t.getAttribute("action");r=f?gn(f,n):null,s=t.getAttribute("method")||ic,c=Sh(t.getAttribute("enctype"))||rc,u=new FormData(t)}else if(Jj(t)||eN(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=t.getAttribute("formaction")||f.getAttribute("action");if(r=g?gn(g,n):null,s=t.getAttribute("formmethod")||f.getAttribute("method")||ic,c=Sh(t.getAttribute("formenctype"))||Sh(f.getAttribute("enctype"))||rc,u=new FormData(f,t),!nN()){let{name:p,type:y,value:b}=t;if(y==="image"){let w=p?`${p}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else p&&u.append(p,b)}}else{if(Lc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ic,r=null,c=rc,d=t}return u&&c==="text/plain"&&(d=u,u=void 0),{action:r,method:s.toLowerCase(),encType:c,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fg(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function rN(t,n,s){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${s}`:n&&gn(r.pathname,n)==="/"?r.pathname=`${n.replace(/\/$/,"")}/_root.${s}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${s}`,r}async function oN(t,n){if(t.id in n)return n[t.id];try{let s=await import(t.module);return n[t.id]=s,s}catch(s){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lN(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function cN(t,n,s){let r=await Promise.all(t.map(async c=>{let u=n.routes[c.route.id];if(u){let d=await oN(u,s);return d.links?d.links():[]}return[]}));return fN(r.flat(1).filter(lN).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Db(t,n,s,r,c,u){let d=(g,p)=>s[p]?g.route.id!==s[p].route.id:!0,f=(g,p)=>{var y;return s[p].pathname!==g.pathname||((y=s[p].route.path)==null?void 0:y.endsWith("*"))&&s[p].params["*"]!==g.params["*"]};return u==="assets"?n.filter((g,p)=>d(g,p)||f(g,p)):u==="data"?n.filter((g,p)=>{var b;let y=r.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(d(g,p)||f(g,p))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function uN(t,n,{includeHydrateFallback:s}={}){return dN(t.map(r=>{let c=n.routes[r.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function dN(t){return[...new Set(t)]}function hN(t){let n={},s=Object.keys(t).sort();for(let r of s)n[r]=t[r];return n}function fN(t,n){let s=new Set;return new Set(n),t.reduce((r,c)=>{let u=JSON.stringify(hN(c));return s.has(u)||(s.add(u),r.push({key:u,link:c})),r},[])}function mw(){let t=x.useContext(Hi);return fg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function gN(){let t=x.useContext(Oc);return fg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gg=x.createContext(void 0);gg.displayName="FrameworkContext";function pw(){let t=x.useContext(gg);return fg(t,"You must render this element inside a <HydratedRouter> element"),t}function mN(t,n){let s=x.useContext(gg),[r,c]=x.useState(!1),[u,d]=x.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=n,w=x.useRef(null);x.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let T=M=>{M.forEach(E=>{d(E.isIntersecting)})},N=new IntersectionObserver(T,{threshold:.5});return w.current&&N.observe(w.current),()=>{N.disconnect()}}},[t]),x.useEffect(()=>{if(r){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{c(!0)},C=()=>{c(!1),d(!1)};return s?t!=="intent"?[u,w,{}]:[u,w,{onFocus:Wr(f,S),onBlur:Wr(g,C),onMouseEnter:Wr(p,S),onMouseLeave:Wr(y,C),onTouchStart:Wr(b,S)}]:[!1,w,{}]}function Wr(t,n){return s=>{t&&t(s),s.defaultPrevented||n(s)}}function pN({page:t,...n}){let{router:s}=mw(),r=x.useMemo(()=>tw(s.routes,t,s.basename),[s.routes,t,s.basename]);return r?x.createElement(bN,{page:t,matches:r,...n}):null}function yN(t){let{manifest:n,routeModules:s}=pw(),[r,c]=x.useState([]);return x.useEffect(()=>{let u=!1;return cN(t,n,s).then(d=>{u||c(d)}),()=>{u=!0}},[t,n,s]),r}function bN({page:t,matches:n,...s}){let r=Ma(),{manifest:c,routeModules:u}=pw(),{basename:d}=mw(),{loaderData:f,matches:g}=gN(),p=x.useMemo(()=>Db(t,n,g,c,r,"data"),[t,n,g,c,r]),y=x.useMemo(()=>Db(t,n,g,c,r,"assets"),[t,n,g,c,r]),b=x.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let C=new Set,T=!1;if(n.forEach(M=>{var j;let E=c.routes[M.route.id];!E||!E.hasLoader||(!p.some(q=>q.route.id===M.route.id)&&M.route.id in f&&((j=u[M.route.id])!=null&&j.shouldRevalidate)||E.hasClientLoader?T=!0:C.add(M.route.id))}),C.size===0)return[];let N=rN(t,d,"data");return T&&C.size>0&&N.searchParams.set("_routes",n.filter(M=>C.has(M.route.id)).map(M=>M.route.id).join(",")),[N.pathname+N.search]},[d,f,r,c,p,n,t,u]),w=x.useMemo(()=>uN(y,c),[y,c]),S=yN(y);return x.createElement(x.Fragment,null,b.map(C=>x.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...s})),w.map(C=>x.createElement("link",{key:C,rel:"modulepreload",href:C,...s})),S.map(({key:C,link:T})=>x.createElement("link",{key:C,nonce:s.nonce,...T})))}function xN(...t){return n=>{t.forEach(s=>{typeof s=="function"?s(n):s!=null&&(s.current=n)})}}var vN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vN&&(window.__reactRouterVersion="7.11.0")}catch{}function wN({basename:t,children:n,unstable_useTransitions:s,window:r}){let c=x.useRef();c.current==null&&(c.current=tj({window:r,v5Compat:!0}));let u=c.current,[d,f]=x.useState({action:u.action,location:u.location}),g=x.useCallback(p=>{s===!1?f(p):x.startTransition(()=>f(p))},[s]);return x.useLayoutEffect(()=>u.listen(g),[u,g]),x.createElement($j,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:s})}var yw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=x.forwardRef(function({onClick:n,discover:s="render",prefetch:r="none",relative:c,reloadDocument:u,replace:d,state:f,target:g,to:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w,...S},C){let{basename:T,unstable_useTransitions:N}=x.useContext(aa),M=typeof p=="string"&&yw.test(p),E=rw(p,T);p=E.to;let j=Pj(p,{relative:c}),[q,P,G]=mN(r,S),_=CN(p,{replace:d,state:f,target:g,preventScrollReset:y,relative:c,viewTransition:b,unstable_defaultShouldRevalidate:w,unstable_useTransitions:N});function H(se){n&&n(se),se.defaultPrevented||_(se)}let J=x.createElement("a",{...S,...G,href:E.absoluteURL||j,onClick:E.isExternal||u?n:H,ref:xN(C,P),target:g,"data-discover":!M&&s==="render"?"true":void 0});return q&&!M?x.createElement(x.Fragment,null,J,x.createElement(pN,{page:j})):J});fe.displayName="Link";var SN=x.forwardRef(function({"aria-current":n="page",caseSensitive:s=!1,className:r="",end:c=!1,style:u,to:d,viewTransition:f,children:g,...p},y){let b=po(d,{relative:p.relative}),w=Ma(),S=x.useContext(Oc),{navigator:C,basename:T}=x.useContext(aa),N=S!=null&&EN(b)&&f===!0,M=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,E=w.pathname,j=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(E=E.toLowerCase(),j=j?j.toLowerCase():null,M=M.toLowerCase()),j&&T&&(j=gn(j,T)||j);const q=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let P=E===M||!c&&E.startsWith(M)&&E.charAt(q)==="/",G=j!=null&&(j===M||!c&&j.startsWith(M)&&j.charAt(M.length)==="/"),_={isActive:P,isPending:G,isTransitioning:N},H=P?n:void 0,J;typeof r=="function"?J=r(_):J=[r,P?"active":null,G?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let se=typeof u=="function"?u(_):u;return x.createElement(fe,{...p,"aria-current":H,className:J,ref:y,style:se,to:d,viewTransition:f},typeof g=="function"?g(_):g)});SN.displayName="NavLink";var TN=x.forwardRef(({discover:t="render",fetcherKey:n,navigate:s,reloadDocument:r,replace:c,state:u,method:d=ic,action:f,onSubmit:g,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w,...S},C)=>{let{unstable_useTransitions:T}=x.useContext(aa),N=AN(),M=MN(f,{relative:p}),E=d.toLowerCase()==="get"?"get":"post",j=typeof f=="string"&&yw.test(f),q=P=>{if(g&&g(P),P.defaultPrevented)return;P.preventDefault();let G=P.nativeEvent.submitter,_=(G==null?void 0:G.getAttribute("formmethod"))||d,H=()=>N(G||P.currentTarget,{fetcherKey:n,method:_,navigate:s,replace:c,state:u,relative:p,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:w});T&&s!==!1?x.startTransition(()=>H()):H()};return x.createElement("form",{ref:C,method:E,action:M,onSubmit:r?g:q,...S,"data-discover":!j&&t==="render"?"true":void 0})});TN.displayName="Form";function kN(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bw(t){let n=x.useContext(Hi);return Ye(n,kN(t)),n}function CN(t,{target:n,replace:s,state:r,preventScrollReset:c,relative:u,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:g}={}){let p=mo(),y=Ma(),b=po(t,{relative:u});return x.useCallback(w=>{if(aN(w,n)){w.preventDefault();let S=s!==void 0?s:so(y)===so(b),C=()=>p(t,{replace:S,state:r,preventScrollReset:c,relative:u,viewTransition:d,unstable_defaultShouldRevalidate:f});g?x.startTransition(()=>C()):C()}},[y,p,b,s,r,n,t,c,u,d,f,g])}var jN=0,NN=()=>`__${String(++jN)}__`;function AN(){let{router:t}=bw("useSubmit"),{basename:n}=x.useContext(aa),s=Wj(),r=t.fetch,c=t.navigate;return x.useCallback(async(u,d={})=>{let{action:f,method:g,encType:p,formData:y,body:b}=iN(u,n);if(d.navigate===!1){let w=d.fetcherKey||NN();await r(w,s,d.action||f,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||p,flushSync:d.flushSync})}else await c(d.action||f,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:b,formMethod:d.method||g,formEncType:d.encType||p,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,c,n,s])}function MN(t,{relative:n}={}){let{basename:s}=x.useContext(aa),r=x.useContext(Aa);Ye(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),u={...po(t||".",{relative:n})},d=Ma();if(t==null){u.search=d.search;let f=new URLSearchParams(u.search),g=f.getAll("index");if(g.some(y=>y==="")){f.delete("index"),g.filter(b=>b).forEach(b=>f.append("index",b));let y=f.toString();u.search=y?`?${y}`:""}}return(!t||t===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(u.pathname=u.pathname==="/"?s:hn([s,u.pathname])),so(u)}function EN(t,{relative:n}={}){let s=x.useContext(lw);Ye(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bw("useViewTransitionState"),c=po(t,{relative:n});if(!s.isTransitioning)return!1;let u=gn(s.currentLocation.pathname,r)||s.currentLocation.pathname,d=gn(s.nextLocation.pathname,r)||s.nextLocation.pathname;return pc(c.pathname,d)!=null||pc(c.pathname,u)!=null}var yo=ew();const DN=Ls(yo);var Th,Rb;function RN(){if(Rb)return Th;Rb=1;var t=typeof Element<"u",n=typeof Map=="function",s=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function c(u,d){if(u===d)return!0;if(u&&d&&typeof u=="object"&&typeof d=="object"){if(u.constructor!==d.constructor)return!1;var f,g,p;if(Array.isArray(u)){if(f=u.length,f!=d.length)return!1;for(g=f;g--!==0;)if(!c(u[g],d[g]))return!1;return!0}var y;if(n&&u instanceof Map&&d instanceof Map){if(u.size!==d.size)return!1;for(y=u.entries();!(g=y.next()).done;)if(!d.has(g.value[0]))return!1;for(y=u.entries();!(g=y.next()).done;)if(!c(g.value[1],d.get(g.value[0])))return!1;return!0}if(s&&u instanceof Set&&d instanceof Set){if(u.size!==d.size)return!1;for(y=u.entries();!(g=y.next()).done;)if(!d.has(g.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(d)){if(f=u.length,f!=d.length)return!1;for(g=f;g--!==0;)if(u[g]!==d[g])return!1;return!0}if(u.constructor===RegExp)return u.source===d.source&&u.flags===d.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof d.valueOf=="function")return u.valueOf()===d.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof d.toString=="function")return u.toString()===d.toString();if(p=Object.keys(u),f=p.length,f!==Object.keys(d).length)return!1;for(g=f;g--!==0;)if(!Object.prototype.hasOwnProperty.call(d,p[g]))return!1;if(t&&u instanceof Element)return!1;for(g=f;g--!==0;)if(!((p[g]==="_owner"||p[g]==="__v"||p[g]==="__o")&&u.$$typeof)&&!c(u[p[g]],d[p[g]]))return!1;return!0}return u!==u&&d!==d}return Th=function(d,f){try{return c(d,f)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},Th}var BN=RN();const ON=Ls(BN);var kh,Bb;function PN(){if(Bb)return kh;Bb=1;var t=function(n,s,r,c,u,d,f,g){if(!n){var p;if(s===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[r,c,u,d,f,g],b=0;p=new Error(s.replace(/%s/g,function(){return y[b++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return kh=t,kh}var LN=PN();const Ob=Ls(LN);var Ch,Pb;function _N(){return Pb||(Pb=1,Ch=function(n,s,r,c){var u=r?r.call(c,n,s):void 0;if(u!==void 0)return!!u;if(n===s)return!0;if(typeof n!="object"||!n||typeof s!="object"||!s)return!1;var d=Object.keys(n),f=Object.keys(s);if(d.length!==f.length)return!1;for(var g=Object.prototype.hasOwnProperty.bind(s),p=0;p<d.length;p++){var y=d[p];if(!g(y))return!1;var b=n[y],w=s[y];if(u=r?r.call(c,b,w,y):void 0,u===!1||u===void 0&&b!==w)return!1}return!0}),Ch}var zN=_N();const qN=Ls(zN);var xw=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(xw||{}),jh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Lb=Object.values(xw),mg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},VN=Object.entries(mg).reduce((t,[n,s])=>(t[s]=n,t),{}),Ca="data-rh",Ri={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Bi=(t,n)=>{for(let s=t.length-1;s>=0;s-=1){const r=t[s];if(Object.prototype.hasOwnProperty.call(r,n))return r[n]}return null},HN=t=>{let n=Bi(t,"title");const s=Bi(t,Ri.TITLE_TEMPLATE);if(Array.isArray(n)&&(n=n.join("")),s&&n)return s.replace(/%s/g,()=>n);const r=Bi(t,Ri.DEFAULT_TITLE);return n||r||void 0},UN=t=>Bi(t,Ri.ON_CHANGE_CLIENT_STATE)||(()=>{}),Nh=(t,n)=>n.filter(s=>typeof s[t]<"u").map(s=>s[t]).reduce((s,r)=>({...s,...r}),{}),FN=(t,n)=>n.filter(s=>typeof s.base<"u").map(s=>s.base).reverse().reduce((s,r)=>{if(!s.length){const c=Object.keys(r);for(let u=0;u<c.length;u+=1){const f=c[u].toLowerCase();if(t.indexOf(f)!==-1&&r[f])return s.concat(r)}}return s},[]),IN=t=>console&&typeof console.warn=="function"&&console.warn(t),Kr=(t,n,s)=>{const r={};return s.filter(c=>Array.isArray(c[t])?!0:(typeof c[t]<"u"&&IN(`Helmet: ${t} should be of type "Array". Instead found type "${typeof c[t]}"`),!1)).map(c=>c[t]).reverse().reduce((c,u)=>{const d={};u.filter(g=>{let p;const y=Object.keys(g);for(let w=0;w<y.length;w+=1){const S=y[w],C=S.toLowerCase();n.indexOf(C)!==-1&&!(p==="rel"&&g[p].toLowerCase()==="canonical")&&!(C==="rel"&&g[C].toLowerCase()==="stylesheet")&&(p=C),n.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(p=S)}if(!p||!g[p])return!1;const b=g[p].toLowerCase();return r[p]||(r[p]={}),d[p]||(d[p]={}),r[p][b]?!1:(d[p][b]=!0,!0)}).reverse().forEach(g=>c.push(g));const f=Object.keys(d);for(let g=0;g<f.length;g+=1){const p=f[g],y={...r[p],...d[p]};r[p]=y}return c},[]).reverse()},GN=(t,n)=>{if(Array.isArray(t)&&t.length){for(let s=0;s<t.length;s+=1)if(t[s][n])return!0}return!1},WN=t=>({baseTag:FN(["href"],t),bodyAttributes:Nh("bodyAttributes",t),defer:Bi(t,Ri.DEFER),encode:Bi(t,Ri.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Nh("htmlAttributes",t),linkTags:Kr("link",["rel","href"],t),metaTags:Kr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Kr("noscript",["innerHTML"],t),onChangeClientState:UN(t),scriptTags:Kr("script",["src","innerHTML"],t),styleTags:Kr("style",["cssText"],t),title:HN(t),titleAttributes:Nh("titleAttributes",t),prioritizeSeoTags:GN(t,Ri.PRIORITIZE_SEO_TAGS)}),vw=t=>Array.isArray(t)?t.join(""):t,KN=(t,n)=>{const s=Object.keys(t);for(let r=0;r<s.length;r+=1)if(n[s[r]]&&n[s[r]].includes(t[s[r]]))return!0;return!1},Ah=(t,n)=>Array.isArray(t)?t.reduce((s,r)=>(KN(r,n)?s.priority.push(r):s.default.push(r),s),{priority:[],default:[]}):{default:t,priority:[]},_b=(t,n)=>({...t,[n]:void 0}),YN=["noscript","script","style"],gf=(t,n=!0)=>n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ww=t=>Object.keys(t).reduce((n,s)=>{const r=typeof t[s]<"u"?`${s}="${t[s]}"`:`${s}`;return n?`${n} ${r}`:r},""),QN=(t,n,s,r)=>{const c=ww(s),u=vw(n);return c?`<${t} ${Ca}="true" ${c}>${gf(u,r)}</${t}>`:`<${t} ${Ca}="true">${gf(u,r)}</${t}>`},$N=(t,n,s=!0)=>n.reduce((r,c)=>{const u=c,d=Object.keys(u).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,y)=>{const b=typeof u[y]>"u"?y:`${y}="${gf(u[y],s)}"`;return p?`${p} ${b}`:b},""),f=u.innerHTML||u.cssText||"",g=YN.indexOf(t)===-1;return`${r}<${t} ${Ca}="true" ${d}${g?"/>":`>${f}</${t}>`}`},""),Sw=(t,n={})=>Object.keys(t).reduce((s,r)=>{const c=mg[r];return s[c||r]=t[r],s},n),XN=(t,n,s)=>{const r={key:n,[Ca]:!0},c=Sw(s,r);return[tt.createElement("title",c,n)]},oc=(t,n)=>n.map((s,r)=>{const c={key:r,[Ca]:!0};return Object.keys(s).forEach(u=>{const f=mg[u]||u;if(f==="innerHTML"||f==="cssText"){const g=s.innerHTML||s.cssText;c.dangerouslySetInnerHTML={__html:g}}else c[f]=s[u]}),tt.createElement(t,c)}),ga=(t,n,s=!0)=>{switch(t){case"title":return{toComponent:()=>XN(t,n.title,n.titleAttributes),toString:()=>QN(t,n.title,n.titleAttributes,s)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Sw(n),toString:()=>ww(n)};default:return{toComponent:()=>oc(t,n),toString:()=>$N(t,n,s)}}},JN=({metaTags:t,linkTags:n,scriptTags:s,encode:r})=>{const c=Ah(t,jh.meta),u=Ah(n,jh.link),d=Ah(s,jh.script);return{priorityMethods:{toComponent:()=>[...oc("meta",c.priority),...oc("link",u.priority),...oc("script",d.priority)],toString:()=>`${ga("meta",c.priority,r)} ${ga("link",u.priority,r)} ${ga("script",d.priority,r)}`},metaTags:c.default,linkTags:u.default,scriptTags:d.default}},ZN=t=>{const{baseTag:n,bodyAttributes:s,encode:r=!0,htmlAttributes:c,noscriptTags:u,styleTags:d,title:f="",titleAttributes:g,prioritizeSeoTags:p}=t;let{linkTags:y,metaTags:b,scriptTags:w}=t,S={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:S,linkTags:y,metaTags:b,scriptTags:w}=JN(t)),{priority:S,base:ga("base",n,r),bodyAttributes:ga("bodyAttributes",s,r),htmlAttributes:ga("htmlAttributes",c,r),link:ga("link",y,r),meta:ga("meta",b,r),noscript:ga("noscript",u,r),script:ga("script",w,r),style:ga("style",d,r),title:ga("title",{title:f,titleAttributes:g},r)}},mf=ZN,Il=[],Tw=!!(typeof window<"u"&&window.document&&window.document.createElement),pf=class{constructor(t,n){cn(this,"instances",[]);cn(this,"canUseDOM",Tw);cn(this,"context");cn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Il:this.instances,add:t=>{(this.canUseDOM?Il:this.instances).push(t)},remove:t=>{const n=(this.canUseDOM?Il:this.instances).indexOf(t);(this.canUseDOM?Il:this.instances).splice(n,1)}}});this.context=t,this.canUseDOM=n||!1,n||(t.helmet=mf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},e3={},kw=tt.createContext(e3),Ms,Cw=(Ms=class extends x.Component{constructor(s){super(s);cn(this,"helmetData");this.helmetData=new pf(this.props.context||{},Ms.canUseDOM)}render(){return tt.createElement(kw.Provider,{value:this.helmetData.value},this.props.children)}},cn(Ms,"canUseDOM",Tw),Ms),wi=(t,n)=>{const s=document.head||document.querySelector("head"),r=s.querySelectorAll(`${t}[${Ca}]`),c=[].slice.call(r),u=[];let d;return n&&n.length&&n.forEach(f=>{const g=document.createElement(t);for(const p in f)if(Object.prototype.hasOwnProperty.call(f,p))if(p==="innerHTML")g.innerHTML=f.innerHTML;else if(p==="cssText")g.styleSheet?g.styleSheet.cssText=f.cssText:g.appendChild(document.createTextNode(f.cssText));else{const y=p,b=typeof f[y]>"u"?"":f[y];g.setAttribute(p,b)}g.setAttribute(Ca,"true"),c.some((p,y)=>(d=y,g.isEqualNode(p)))?c.splice(d,1):u.push(g)}),c.forEach(f=>{var g;return(g=f.parentNode)==null?void 0:g.removeChild(f)}),u.forEach(f=>s.appendChild(f)),{oldTags:c,newTags:u}},yf=(t,n)=>{const s=document.getElementsByTagName(t)[0];if(!s)return;const r=s.getAttribute(Ca),c=r?r.split(","):[],u=[...c],d=Object.keys(n);for(const f of d){const g=n[f]||"";s.getAttribute(f)!==g&&s.setAttribute(f,g),c.indexOf(f)===-1&&c.push(f);const p=u.indexOf(f);p!==-1&&u.splice(p,1)}for(let f=u.length-1;f>=0;f-=1)s.removeAttribute(u[f]);c.length===u.length?s.removeAttribute(Ca):s.getAttribute(Ca)!==d.join(",")&&s.setAttribute(Ca,d.join(","))},t3=(t,n)=>{typeof t<"u"&&document.title!==t&&(document.title=vw(t)),yf("title",n)},zb=(t,n)=>{const{baseTag:s,bodyAttributes:r,htmlAttributes:c,linkTags:u,metaTags:d,noscriptTags:f,onChangeClientState:g,scriptTags:p,styleTags:y,title:b,titleAttributes:w}=t;yf("body",r),yf("html",c),t3(b,w);const S={baseTag:wi("base",s),linkTags:wi("link",u),metaTags:wi("meta",d),noscriptTags:wi("noscript",f),scriptTags:wi("script",p),styleTags:wi("style",y)},C={},T={};Object.keys(S).forEach(N=>{const{newTags:M,oldTags:E}=S[N];M.length&&(C[N]=M),E.length&&(T[N]=S[N].oldTags)}),n&&n(),g(t,C,T)},Yr=null,a3=t=>{Yr&&cancelAnimationFrame(Yr),t.defer?Yr=requestAnimationFrame(()=>{zb(t,()=>{Yr=null})}):(zb(t),Yr=null)},n3=a3,qb=class extends x.Component{constructor(){super(...arguments);cn(this,"rendered",!1)}shouldComponentUpdate(n){return!qN(n,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:n}=this.props.context;n.remove(this),this.emitChange()}emitChange(){const{helmetInstances:n,setHelmet:s}=this.props.context;let r=null;const c=WN(n.get().map(u=>{const d={...u.props};return delete d.context,d}));Cw.canUseDOM?n3(c):mf&&(r=mf(c)),s(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:n}=this.props.context;n.add(this),this.emitChange()}render(){return this.init(),null}},df,s3=(df=class extends x.Component{shouldComponentUpdate(t){return!ON(_b(this.props,"helmetData"),_b(t,"helmetData"))}mapNestedChildrenToProps(t,n){if(!n)return null;switch(t.type){case"script":case"noscript":return{innerHTML:n};case"style":return{cssText:n};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,n,s,r){return{...n,[t.type]:[...n[t.type]||[],{...s,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,n,s,r){switch(t.type){case"title":return{...n,[t.type]:r,titleAttributes:{...s}};case"body":return{...n,bodyAttributes:{...s}};case"html":return{...n,htmlAttributes:{...s}};default:return{...n,[t.type]:{...s}}}}mapArrayTypeChildrenToProps(t,n){let s={...n};return Object.keys(t).forEach(r=>{s={...s,[r]:t[r]}}),s}warnOnInvalidChildren(t,n){return Ob(Lb.some(s=>t.type===s),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Lb.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Ob(!n||typeof n=="string"||Array.isArray(n)&&!n.some(s=>typeof s!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,n){let s={};return tt.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:c,...u}=r.props,d=Object.keys(u).reduce((g,p)=>(g[VN[p]||p]=u[p],g),{});let{type:f}=r;switch(typeof f=="symbol"?f=f.toString():this.warnOnInvalidChildren(r,c),f){case"Symbol(react.fragment)":n=this.mapChildrenToProps(c,n);break;case"link":case"meta":case"noscript":case"script":case"style":s=this.flattenArrayTypeChildren(r,s,d,c);break;default:n=this.mapObjectTypeChildren(r,n,d,c);break}}),this.mapArrayTypeChildrenToProps(s,n)}render(){const{children:t,...n}=this.props;let s={...n},{helmetData:r}=n;if(t&&(s=this.mapChildrenToProps(t,s)),r&&!(r instanceof pf)){const c=r;r=new pf(c.context,!0),delete s.helmetData}return r?tt.createElement(qb,{...s,context:r.value}):tt.createElement(kw.Consumer,null,c=>tt.createElement(qb,{...s,context:c}))}},cn(df,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),df);const i3="modulepreload",r3=function(t){return"/"+t},Vb={},pg=function(n,s,r){let c=Promise.resolve();if(s&&s.length>0){let d=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));c=d(s.map(p=>{if(p=r3(p),p in Vb)return;Vb[p]=!0;const y=p.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":i3,y||(w.as="script"),w.crossOrigin="",w.href=p,g&&w.setAttribute("nonce",g),document.head.appendChild(w),y)return new Promise((S,C)=>{w.addEventListener("load",S),w.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return c.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return n().catch(u)})};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,r)=>r?r.toUpperCase():s.toLowerCase()),Hb=t=>{const n=l3(t);return n.charAt(0).toUpperCase()+n.slice(1)},jw=(...t)=>t.filter((n,s,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===s).join(" ").trim(),c3=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=x.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:c="",children:u,iconNode:d,...f},g)=>x.createElement("svg",{ref:g,...u3,width:n,height:n,stroke:t,strokeWidth:r?Number(s)*24/Number(n):s,className:jw("lucide",c),...!u&&!c3(f)&&{"aria-hidden":"true"},...f},[...d.map(([p,y])=>x.createElement(p,y)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(t,n)=>{const s=x.forwardRef(({className:r,...c},u)=>x.createElement(d3,{ref:u,iconNode:n,className:jw(`lucide-${o3(Hb(t))}`,`lucide-${t}`,r),...c}));return s.displayName=Hb(t),s};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],bf=ue("arrow-left-right",h3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],g3=ue("arrow-left",f3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bo=ue("arrow-right",m3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],y3=ue("arrow-up",p3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],x3=ue("award",b3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],w3=ue("bell",v3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],T3=ue("book-open",S3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],C3=ue("box",k3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ub=ue("calculator",j3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],A3=ue("calendar",N3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yn=ue("check",M3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yg=ue("chevron-down",E3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Nw=ue("chevron-right",D3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],B3=ue("chevron-left",R3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],P3=ue("chevron-up",O3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_3=ue("circle-alert",L3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dn=ue("circle-check-big",z3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],V3=ue("circle-question-mark",q3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],xf=ue("clipboard-list",H3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],_c=ue("clock",U3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],bg=ue("coffee",F3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],G3=ue("credit-card",I3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Aw=ue("dollar-sign",W3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Mw=ue("droplets",K3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ew=ue("external-link",Y3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Dw=ue("file-text",Q3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],X3=ue("flask-conical",$3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Fb=ue("funnel",J3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],eA=ue("globe",Z3);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aA=ue("house",tA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],Ib=ue("indian-rupee",nA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Rw=ue("info",sA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Ds=ue("leaf",iA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],oA=ue("lightbulb",rA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],cA=ue("mail",lA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],xg=ue("map-pin",uA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],hA=ue("menu",dA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],vg=ue("message-circle",fA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],mA=ue("message-square",gA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],io=ue("package",pA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],wg=ue("phone",yA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gb=ue("plus",bA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],vA=ue("printer",xA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],SA=ue("quote",wA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],kA=ue("save",TA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],jA=ue("scale",CA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Bw=ue("search",NA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],MA=ue("send",AA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],DA=ue("share-2",EA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ow=ue("shield-check",RA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],OA=ue("shopping-bag",BA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],yc=ue("star",PA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],vf=ue("target",LA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Wb=ue("thermometer",_A);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],qA=ue("timer",zA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],HA=ue("trash-2",VA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],FA=ue("trending-down",UA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],GA=ue("trending-up",IA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Sg=ue("truck",WA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],YA=ue("user",KA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$A=ue("users",QA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Pw=ue("wind",XA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],mn=ue("x",JA);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],eM=ue("zap",ZA),et={address:"Ganga Nagar, Mahananda Para, Ward No. 5",city:"Siliguri",state:"West Bengal",zip:"734005",phone:"917001958588",displayPhone:"+91 70019 58588",mapEmbedUrl:"https://maps.google.com/maps?q=Manish+Tea+Traders,26.70445006858671,88.41120717507069&hl=en&z=17&output=embed",whatsappChannel:"https://whatsapp.com/channel/0029Vb7JBW8K5cD8gShxcT33"},kt={gst:"19AHJPR0891G1ZX",proprietor:"Jaleshwar Ray",established:"2004",natureOfBusiness:"Wholesaler / Distributor",employees:"Upto 10 People",paymentMode:"Cash, Credit Card, DD, Cheque, UPI",shipmentMode:"By Road (All India)",indiamartProfile:"https://www.indiamart.com/manishteatraders",justdialProfile:"https://www.justdial.com/Siliguri/Manish-Tea-Traders-Mahananda-Para/9999PX353-X353-241126070451-T2Z7_BZDET"},Lw=({className:t="h-10 w-10"})=>{const n="#8B2E2E",s="#4A5D23",r="#C19A6B",c="#F7F7F2";return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:t,"aria-label":"Manish Tea Traders Logo",children:[o.jsx("rect",{x:"5",y:"5",width:"90",height:"90",fill:c,stroke:n,strokeWidth:"6"}),o.jsx("text",{x:"50",y:"52",textAnchor:"middle",fill:s,fontSize:"38",fontFamily:"'Kaiti', 'SimKai', 'serif', 'Noto Serif SC'",fontWeight:"bold",style:{letterSpacing:"-2px"},children:"茶"}),o.jsx("path",{d:"M 25 65 Q 50 95 75 65 Z",fill:s,stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("line",{x1:"25",y1:"65",x2:"75",y2:"65",stroke:c,strokeWidth:"2"}),o.jsx("path",{d:"M 18 50 Q 12 40 20 30",stroke:r,strokeWidth:"3",fill:"none",strokeLinecap:"round"}),o.jsx("path",{d:"M 25 55 Q 18 45 26 35",stroke:r,strokeWidth:"3",fill:"none",strokeLinecap:"round"})]})},Et=()=>{const[t,n]=x.useState(!1),[s,r]=x.useState(!1);return Ma(),mo(),x.useEffect(()=>{const c=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),o.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${s?"bg-white shadow-md py-2":"bg-white/90 backdrop-blur-md shadow-sm py-4"}`,children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs(fe,{to:"/",className:"flex items-center space-x-3 group",onClick:()=>window.scrollTo(0,0),children:[o.jsx(Lw,{className:"h-12 w-12 transition-transform duration-300 group-hover:scale-110",variant:"dark"}),o.jsxs("span",{className:"text-xl font-bold font-serif text-tea-900 leading-tight",children:["Manish Tea",o.jsx("br",{}),o.jsx("span",{className:"text-tea-600",children:"Traders"})]})]}),o.jsxs("div",{className:"hidden md:flex space-x-8 items-center",children:[o.jsx(fe,{to:"/",className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors",children:"Home"}),o.jsx(fe,{to:"/about-us",className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors",children:"About Us"}),o.jsxs("div",{className:"relative group",children:[o.jsx("button",{className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors flex items-center gap-1",children:"Products"}),o.jsxs("div",{className:"absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-left overflow-hidden z-50 px-0",style:{minWidth:"max-content"},children:[o.jsx(fe,{to:"/products/ctc-tea",className:"block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap",children:"CTC Tea"}),o.jsx(fe,{to:"/products/tea-dust",className:"block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap",children:"Tea Dust"}),o.jsx(fe,{to:"/products/orthodox-leaf",className:"block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap",children:"Orthodox Leaf"}),o.jsx(fe,{to:"/services/private-label-tea",className:"block px-6 py-3 text-sm text-tea-700 bg-tea-50 hover:bg-tea-100 font-bold whitespace-nowrap",children:"Private Label"})]})]}),o.jsxs(fe,{to:"/tea-grades",className:"text-sm font-bold text-tea-600 hover:text-tea-700 transition-colors flex items-center gap-1",children:["Tea Grades",o.jsx("span",{className:"flex h-2 w-2 rounded-full bg-brand-gold"})]}),o.jsx(fe,{to:"/locations",className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors",children:"Locations"}),o.jsx(fe,{to:"/blog",className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors",children:"Blog"}),o.jsx(fe,{to:"/contact-us",className:"text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors",children:"Contact"}),o.jsxs("a",{href:`tel:${et.phone}`,className:"bg-tea-600 hover:bg-tea-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-transform hover:scale-105",children:[o.jsx(wg,{className:"h-4 w-4"}),o.jsx("span",{children:"Call Now"})]})]}),o.jsx("div",{className:"md:hidden flex items-center",children:o.jsx("button",{onClick:()=>n(!t),className:"p-2 rounded-md text-gray-700",children:t?o.jsx(mn,{className:"h-6 w-6"}):o.jsx(hA,{className:"h-6 w-6"})})})]})}),t&&o.jsx("div",{className:"md:hidden bg-white absolute w-full shadow-lg border-t h-screen",children:o.jsxs("div",{className:"px-4 pt-4 pb-20 space-y-2 flex flex-col",children:[o.jsx(fe,{to:"/",onClick:()=>n(!1),className:"block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50",children:"Home"}),o.jsx(fe,{to:"/about-us",onClick:()=>n(!1),className:"block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50",children:"About Us"}),o.jsxs("div",{className:"pl-3 border-l-2 border-tea-100 my-2",children:[o.jsx("span",{className:"block px-3 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider",children:"Products"}),o.jsx(fe,{to:"/products/ctc-tea",onClick:()=>n(!1),className:"block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600",children:"CTC Tea"}),o.jsx(fe,{to:"/products/tea-dust",onClick:()=>n(!1),className:"block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600",children:"Tea Dust"}),o.jsx(fe,{to:"/products/orthodox-leaf",onClick:()=>n(!1),className:"block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600",children:"Orthodox Leaf"}),o.jsx(fe,{to:"/services/private-label-tea",onClick:()=>n(!1),className:"block px-3 py-2 text-base font-bold text-tea-600",children:"Private Label"}),o.jsx(fe,{to:"/tea-grades",onClick:()=>n(!1),className:"block px-3 py-2 text-base font-bold text-brand-gold bg-brand-gold/5 rounded-md mt-1",children:"Tea Grade Explorer"})]}),o.jsx(fe,{to:"/locations",onClick:()=>n(!1),className:"block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50",children:"Locations"}),o.jsx(fe,{to:"/blog",onClick:()=>n(!1),className:"block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50",children:"Blog"}),o.jsx(fe,{to:"/contact-us",onClick:()=>n(!1),className:"block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50",children:"Contact"}),o.jsxs("a",{href:`tel:${et.phone}`,className:"block w-full text-center mt-6 bg-tea-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg",children:["Call Us: ",et.displayPhone]})]})})]})};var Mh={},Eh={},Dh={},Kb;function tM(){return Kb||(Kb=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];if(typeof window<"u"){var f;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(f=window).gtag.apply(f,u)}},s=n;t.default=s})(Dh)),Dh}var Rh={},Yb;function aM(){return Yb||(Yb=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function s(f){return f.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(g,p,y){return p>0&&p+g.length!==y.length&&g.search(n)>-1&&y.charAt(p-2)!==":"&&(y.charAt(p+g.length)!=="-"||y.charAt(p-1)==="-")&&y.charAt(p-1).search(/[^\s-]/)<0?g.toLowerCase():g.substr(1).search(/[A-Z]|\../)>-1?g:g.charAt(0).toUpperCase()+g.substr(1)})}function r(f){return typeof f=="string"&&f.indexOf("@")!==-1}var c="REDACTED (Potential Email Address)";function u(f){return r(f)?(console.warn("This arg looks like an email address, redacting."),c):f}function d(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,y=f||"";return g&&(y=s(f)),p&&(y=u(y)),y}})(Rh)),Rh}var Qb;function nM(){return Qb||(Qb=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var n=d(tM()),s=d(aM()),r=["eventCategory","eventAction","eventLabel","eventValue","hitType"],c=["title","location"],u=["page","hitType"];function d(U){return U&&U.__esModule?U:{default:U}}function f(U,z){if(U==null)return{};var A=g(U,z),D,B;if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(U);for(B=0;B<Q.length;B++)D=Q[B],!(z.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(U,D)&&(A[D]=U[D])}return A}function g(U,z){if(U==null)return{};var A={},D=Object.keys(U),B,Q;for(Q=0;Q<D.length;Q++)B=D[Q],!(z.indexOf(B)>=0)&&(A[B]=U[B]);return A}function p(U){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},p(U)}function y(U){return S(U)||w(U)||E(U)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(U){if(typeof Symbol<"u"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function S(U){if(Array.isArray(U))return j(U)}function C(U,z){var A=Object.keys(U);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(U);z&&(D=D.filter(function(B){return Object.getOwnPropertyDescriptor(U,B).enumerable})),A.push.apply(A,D)}return A}function T(U){for(var z=1;z<arguments.length;z++){var A=arguments[z]!=null?arguments[z]:{};z%2?C(Object(A),!0).forEach(function(D){J(U,D,A[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(A)):C(Object(A)).forEach(function(D){Object.defineProperty(U,D,Object.getOwnPropertyDescriptor(A,D))})}return U}function N(U,z){return P(U)||q(U,z)||E(U,z)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(U,z){if(U){if(typeof U=="string")return j(U,z);var A=Object.prototype.toString.call(U).slice(8,-1);if(A==="Object"&&U.constructor&&(A=U.constructor.name),A==="Map"||A==="Set")return Array.from(U);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return j(U,z)}}function j(U,z){(z==null||z>U.length)&&(z=U.length);for(var A=0,D=new Array(z);A<z;A++)D[A]=U[A];return D}function q(U,z){var A=U==null?null:typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"];if(A!=null){var D,B,Q,ne,R=[],K=!0,ee=!1;try{if(Q=(A=A.call(U)).next,z!==0)for(;!(K=(D=Q.call(A)).done)&&(R.push(D.value),R.length!==z);K=!0);}catch(te){ee=!0,B=te}finally{try{if(!K&&A.return!=null&&(ne=A.return(),Object(ne)!==ne))return}finally{if(ee)throw B}}return R}}function P(U){if(Array.isArray(U))return U}function G(U,z){if(!(U instanceof z))throw new TypeError("Cannot call a class as a function")}function _(U,z){for(var A=0;A<z.length;A++){var D=z[A];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(U,se(D.key),D)}}function H(U,z,A){return z&&_(U.prototype,z),Object.defineProperty(U,"prototype",{writable:!1}),U}function J(U,z,A){return z=se(z),z in U?Object.defineProperty(U,z,{value:A,enumerable:!0,configurable:!0,writable:!0}):U[z]=A,U}function se(U){var z=re(U,"string");return p(z)==="symbol"?z:String(z)}function re(U,z){if(p(U)!=="object"||U===null)return U;var A=U[Symbol.toPrimitive];if(A!==void 0){var D=A.call(U,z);if(p(D)!=="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(U)}var he=(function(){function U(){var z=this;G(this,U),J(this,"reset",function(){z.isInitialized=!1,z._testMode=!1,z._currentMeasurementId,z._hasLoadedGA=!1,z._isQueuing=!1,z._queueGtag=[]}),J(this,"_gtag",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];z._testMode||z._isQueuing?z._queueGtag.push(D):n.default.apply(void 0,D)}),J(this,"_loadGA",function(A,D){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!z._hasLoadedGA){var Q=document.createElement("script");Q.async=!0,Q.src="".concat(B,"?id=").concat(A),D&&Q.setAttribute("nonce",D),document.body.appendChild(Q),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},z._hasLoadedGA=!0}}),J(this,"_toGtagOptions",function(A){if(A){var D={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},B=Object.entries(A).reduce(function(Q,ne){var R=N(ne,2),K=R[0],ee=R[1];return D[K]?Q[D[K]]=ee:Q[K]=ee,Q},{});return B}}),J(this,"initialize",function(A){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!A)throw new Error("Require GA_MEASUREMENT_ID");var B=typeof A=="string"?[{trackingId:A}]:A;z._currentMeasurementId=B[0].trackingId;var Q=D.gaOptions,ne=D.gtagOptions,R=D.nonce,K=D.testMode,ee=K===void 0?!1:K,te=D.gtagUrl;if(z._testMode=ee,ee||z._loadGA(z._currentMeasurementId,R,te),z.isInitialized||(z._gtag("js",new Date),B.forEach(function(ae){var be=T(T(T({},z._toGtagOptions(T(T({},Q),ae.gaOptions))),ne),ae.gtagOptions);Object.keys(be).length?z._gtag("config",ae.trackingId,be):z._gtag("config",ae.trackingId)})),z.isInitialized=!0,!ee){var ge=y(z._queueGtag);for(z._queueGtag=[],z._isQueuing=!1;ge.length;){var pe=ge.shift();z._gtag.apply(z,y(pe)),pe[0]==="get"&&(z._isQueuing=!0)}}}),J(this,"set",function(A){if(!A){console.warn("`fieldsObject` is required in .set()");return}if(p(A)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(A).length===0&&console.warn("empty `fieldsObject` given to .set()"),z._gaCommand("set",A)}),J(this,"_gaCommandSendEvent",function(A,D,B,Q,ne){z._gtag("event",D,T(T({event_category:A,event_label:B,value:Q},ne&&{non_interaction:ne.nonInteraction}),z._toGtagOptions(ne)))}),J(this,"_gaCommandSendEventParameters",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];if(typeof D[0]=="string")z._gaCommandSendEvent.apply(z,y(D.slice(1)));else{var Q=D[0],ne=Q.eventCategory,R=Q.eventAction,K=Q.eventLabel,ee=Q.eventValue;Q.hitType;var te=f(Q,r);z._gaCommandSendEvent(ne,R,K,ee,te)}}),J(this,"_gaCommandSendTiming",function(A,D,B,Q){z._gtag("event","timing_complete",{name:D,value:B,event_category:A,event_label:Q})}),J(this,"_gaCommandSendPageview",function(A,D){if(D&&Object.keys(D).length){var B=z._toGtagOptions(D),Q=B.title,ne=B.location,R=f(B,c);z._gtag("event","page_view",T(T(T(T({},A&&{page_path:A}),Q&&{page_title:Q}),ne&&{page_location:ne}),R))}else A?z._gtag("event","page_view",{page_path:A}):z._gtag("event","page_view")}),J(this,"_gaCommandSendPageviewParameters",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];if(typeof D[0]=="string")z._gaCommandSendPageview.apply(z,y(D.slice(1)));else{var Q=D[0],ne=Q.page;Q.hitType;var R=f(Q,u);z._gaCommandSendPageview(ne,R)}}),J(this,"_gaCommandSend",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];var Q=typeof D[0]=="string"?D[0]:D[0].hitType;switch(Q){case"event":z._gaCommandSendEventParameters.apply(z,D);break;case"pageview":z._gaCommandSendPageviewParameters.apply(z,D);break;case"timing":z._gaCommandSendTiming.apply(z,y(D.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(Q));break;default:console.warn("Send command doesn't exist: ".concat(Q))}}),J(this,"_gaCommandSet",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];typeof D[0]=="string"&&(D[0]=J({},D[0],D[1])),z._gtag("set",z._toGtagOptions(D[0]))}),J(this,"_gaCommand",function(A){for(var D=arguments.length,B=new Array(D>1?D-1:0),Q=1;Q<D;Q++)B[Q-1]=arguments[Q];switch(A){case"send":z._gaCommandSend.apply(z,B);break;case"set":z._gaCommandSet.apply(z,B);break;default:console.warn("Command doesn't exist: ".concat(A))}}),J(this,"ga",function(){for(var A=arguments.length,D=new Array(A),B=0;B<A;B++)D[B]=arguments[B];if(typeof D[0]=="string")z._gaCommand.apply(z,D);else{var Q=D[0];z._gtag("get",z._currentMeasurementId,"client_id",function(ne){z._isQueuing=!1;var R=z._queueGtag;for(Q({get:function(te){return te==="clientId"?ne:te==="trackingId"?z._currentMeasurementId:te==="apiVersion"?"1":void 0}});R.length;){var K=R.shift();z._gtag.apply(z,y(K))}}),z._isQueuing=!0}return z.ga}),J(this,"event",function(A,D){if(typeof A=="string")z._gtag("event",A,z._toGtagOptions(D));else{var B=A.action,Q=A.category,ne=A.label,R=A.value,K=A.nonInteraction,ee=A.transport;if(!Q||!B){console.warn("args.category AND args.action are required in event()");return}var te={hitType:"event",eventCategory:(0,s.default)(Q),eventAction:(0,s.default)(B)};ne&&(te.eventLabel=(0,s.default)(ne)),typeof R<"u"&&(typeof R!="number"?console.warn("Expected `args.value` arg to be a Number."):te.eventValue=R),typeof K<"u"&&(typeof K!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):te.nonInteraction=K),typeof ee<"u"&&(typeof ee!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(ee)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),te.transport=ee)),z._gaCommand("send",te)}}),J(this,"send",function(A){z._gaCommand("send",A)}),this.reset()}return H(U,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),U})();t.GA4=he;var ve=new he;t.default=ve})(Eh)),Eh}var $b;function sM(){return $b||($b=1,(function(t){function n(f){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},n(f)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var s=c(nM());function r(f){if(typeof WeakMap!="function")return null;var g=new WeakMap,p=new WeakMap;return(r=function(b){return b?p:g})(f)}function c(f,g){if(f&&f.__esModule)return f;if(f===null||n(f)!=="object"&&typeof f!="function")return{default:f};var p=r(g);if(p&&p.has(f))return p.get(f);var y={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var S=b?Object.getOwnPropertyDescriptor(f,w):null;S&&(S.get||S.set)?Object.defineProperty(y,w,S):y[w]=f[w]}return y.default=f,p&&p.set(f,y),y}var u=s.GA4;t.ReactGAImplementation=u;var d=s.default;t.default=d})(Mh)),Mh}var iM=sM();const _w=Ls(iM),wf="G-51CXM4KKZ2",rM="https://script.google.com/macros/s/AKfycbzEw_HlIkYpef7B7RziiFWoaFpR_m7jtKRUnwIZUFGKyUZu9nS9zoB74JQLa_GOd17D/exec",oM=()=>{wf.includes("XXX")||_w.initialize(wf)},zc=async t=>{const n=new Date().toLocaleString(),s=window.location.pathname;wf.includes("XXX")||_w.event("whatsapp_click",{click_location:t,page_path:s,timestamp:n});try{fetch(rM,{method:"POST",mode:"no-cors",body:JSON.stringify({event:"WhatsApp Click",location:t,page:s,timestamp:n}),keepalive:!0})}catch(r){console.error("Silent tracking failed",r)}},lM=()=>{const t=n=>{n.preventDefault();const s=document.getElementById("contact");if(s){const u=s.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:u,behavior:"smooth"})}};return o.jsxs("section",{id:"home",className:"relative min-h-screen flex flex-col justify-start pt-24 pb-20 md:pt-32 overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2574&auto=format&fit=crop",srcSet:`
            https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=640&auto=format&fit=crop 640w,
            https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1024&auto=format&fit=crop 1024w,
            https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2574&auto=format&fit=crop 2574w
          `,sizes:"(max-width: 640px) 100vw, 100vw",alt:"Lush Green Tea Garden Landscape in Darjeeling",className:"w-full h-full object-cover",fetchPriority:"high",loading:"eager"}),o.jsx("div",{className:"absolute inset-0 bg-black/60 bg-gradient-to-t from-black/90 via-black/50 to-transparent"})]}),o.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[o.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-tea-500/90 text-white text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg border border-tea-400/30",children:"★ Top Rated Wholesale Supplier"}),o.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-lg",children:["Premium Darjeeling Tea & ",o.jsx("br",{}),o.jsx("span",{className:"text-tea-300",children:"Assam CTC Tea"})]}),o.jsxs("p",{className:"mt-4 max-w-3xl mx-auto text-xl text-gray-100 mb-8 leading-relaxed font-light",children:["We provide high-quality ",o.jsx("strong",{children:"Premium Darjeeling Tea & Assam CTC Tea"})," sourced directly from the best estates in West Bengal. Our tea is perfect for retailers, distributors, hotels, cafés, and bulk buyers looking for authentic taste and competitive wholesale rates. ",o.jsx("br",{className:"hidden md:block"})," CTC • Assam • Nepal • Loose Tea"]}),o.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 mb-10",children:[o.jsxs("a",{href:"#contact",onClick:t,className:"bg-tea-600 hover:bg-tea-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1",children:["Get Today’s Price List ",o.jsx(bo,{className:"h-5 w-5"})]}),o.jsxs("a",{href:`https://wa.me/${et.phone}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>zc("Hero Section"),className:"bg-white hover:bg-gray-100 text-tea-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg",children:["WhatsApp Us Directly ",o.jsx(vg,{className:"h-5 w-5 text-green-600"})]})]}),o.jsxs("div",{className:"flex flex-wrap justify-center gap-4 sm:gap-8 items-center bg-white/10 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/10 inline-flex mx-auto",children:[o.jsxs("a",{href:kt.justdialProfile,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-medium text-sm sm:text-base hover:text-blue-200 transition-colors group",children:[o.jsx(dn,{className:"h-5 w-5 text-blue-400 fill-blue-400/20 group-hover:scale-110 transition-transform"}),o.jsx("span",{className:"drop-shadow-sm",children:"Justdial Verified"})]}),o.jsx("div",{className:"hidden sm:block w-px h-6 bg-white/30"}),o.jsxs("a",{href:kt.indiamartProfile,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-medium text-sm sm:text-base hover:text-green-200 transition-colors group",children:[o.jsx(dn,{className:"h-5 w-5 text-green-400 fill-green-400/20 group-hover:scale-110 transition-transform"}),o.jsx("span",{className:"drop-shadow-sm",children:"IndiaMART Verified"})]}),o.jsx("div",{className:"hidden sm:block w-px h-6 bg-white/30"}),o.jsxs("div",{className:"flex items-center gap-2 text-white font-medium text-sm sm:text-base",children:[o.jsx(dn,{className:"h-5 w-5 text-yellow-400 fill-yellow-400/20"}),o.jsx("span",{className:"drop-shadow-sm",children:"FSSAI Registered"})]})]})]})]})},cM=[{icon:o.jsx(Ds,{className:"h-10 w-10 text-white"}),title:"Direct Sourcing",desc:"We eliminate middlemen by sourcing directly from gardens in Assam, Dooars & Darjeeling, ensuring you get the freshest tea at factory rates.",color:"bg-green-600"},{icon:o.jsx(Aw,{className:"h-10 w-10 text-white"}),title:"Competitive Pricing",desc:"Our volume-based buying allows us to offer unmatched wholesale rates, giving retailers and distributors healthy profit margins.",color:"bg-tea-600"},{icon:o.jsx(bg,{className:"h-10 w-10 text-white"}),title:"Wide Product Range",desc:"From strong CTC dust for hotels to premium Orthodox leaf for cafes, we have a complete portfolio of over 20+ tea varieties.",color:"bg-amber-600"},{icon:o.jsx(Sg,{className:"h-10 w-10 text-white"}),title:"Reliable Delivery",desc:"We have established logistics partners ensuring safe and timely delivery to Bihar, UP, Jharkhand, and all major Indian cities.",color:"bg-blue-600"}],zw=()=>o.jsx("section",{id:"about",className:"py-20 bg-white",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20",children:[o.jsxs("div",{className:"mb-12 lg:mb-0",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 sm:text-4xl mb-6",children:"Who We Are"}),o.jsx("div",{className:"w-20 h-1 bg-tea-500 mb-6"}),o.jsxs("p",{className:"text-lg text-gray-700 mb-6 leading-relaxed font-medium",children:["Manish Tea Traders is a trusted wholesale tea supplier located in Siliguri, West Bengal. Established in ",kt.established,"."]}),o.jsxs("p",{className:"text-lg text-gray-600 mb-8 leading-relaxed",children:["With years of experience in the tea industry, we specialize in providing fresh, high-quality tea at honest and competitive wholesale prices. We work with retailers, distributors, hotels, cafés, and corporate buyers across India to ensure long-term business relationships. Our commitment to quality ensures that every batch of ",o.jsx("strong",{children:"Darjeeling Tea"})," and ",o.jsx("strong",{children:"Assam CTC Tea"})," meets the highest standards of aroma, taste, and color."]}),o.jsx("p",{className:"text-lg text-gray-600 mb-8 leading-relaxed",children:"Located in the heart of the tea region, Siliguri, we have direct access to the best tea gardens in Darjeeling, Dooars, and Assam. This allows us to source the freshest leaves and deliver them to your doorstep without unnecessary middlemen, ensuring you get the best value for your money. Whether you need loose tea, packet tea, or custom blends, Manish Tea Traders is your reliable partner for all bulk tea requirements."}),o.jsxs("div",{className:"mt-8 bg-gradient-to-br from-tea-50 to-white border border-tea-100 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",children:[o.jsx("div",{className:"absolute top-0 right-0 -mt-4 -mr-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500",children:o.jsx(vf,{className:"h-32 w-32 text-tea-600"})}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"bg-tea-600 p-2 rounded-lg shadow-md",children:o.jsx(vf,{className:"h-6 w-6 text-white"})}),o.jsx("h3",{className:"text-xl font-bold text-tea-900 font-serif",children:"Our Mission"})]}),o.jsx("p",{className:"text-gray-700 leading-relaxed text-lg mb-6",children:"To provide fresh, high-quality tea at fair wholesale rates to every business, big or small."}),o.jsx("div",{className:"relative pl-6 border-l-4 border-tea-400",children:o.jsx("span",{className:"block font-serif font-medium italic text-tea-800 text-lg",children:'"Tea is our passion, delivering the right taste is our commitment."'})})]})]})]}),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute -inset-4 bg-tea-100 rounded-xl transform rotate-2"}),o.jsx("img",{src:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2574&auto=format&fit=crop",alt:"Tea tasting and selection at Manish Tea Traders",className:"relative rounded-xl shadow-2xl w-full object-cover h-[500px]"}),o.jsxs("div",{className:"absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-tea-500 z-10",children:[o.jsx("p",{className:"text-4xl font-bold text-tea-600 mb-2",children:"4.8/5"}),o.jsx("p",{className:"text-gray-600 font-medium",children:"Google Rating based on genuine customer reviews."})]})]})]}),o.jsxs("div",{className:"mb-20",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("span",{className:"text-tea-600 font-bold tracking-wider uppercase text-sm",children:"Our Advantage"}),o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mt-2",children:"Why Choose Manish Tea Traders?"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:cM.map((t,n)=>o.jsxs("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 transition-transform duration-300",children:[o.jsx("div",{className:`${t.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3`,children:t.icon}),o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:t.title}),o.jsx("p",{className:"text-gray-600 leading-relaxed text-sm",children:t.desc})]},n))})]}),o.jsxs("div",{className:"bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden",children:[o.jsxs("div",{className:"bg-tea-700 text-white px-8 py-4 flex items-center gap-2",children:[o.jsx(Dw,{className:"h-5 w-5"}),o.jsx("h3",{className:"text-xl font-bold",children:"Company Factsheet"})]}),o.jsxs("div",{className:"p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"Nature of Business"}),o.jsx("span",{className:"text-gray-900 font-semibold text-right",children:kt.natureOfBusiness})]}),o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"Proprietor / CEO"}),o.jsx("span",{className:"text-gray-900 font-semibold text-right",children:kt.proprietor})]}),o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"Year of Establishment"}),o.jsx("span",{className:"text-gray-900 font-semibold text-right",children:kt.established})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"GST No."}),o.jsx("span",{className:"text-gray-900 font-bold text-right font-mono",children:kt.gst})]}),o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"Total Employees"}),o.jsx("span",{className:"text-gray-900 font-semibold text-right",children:kt.employees})]}),o.jsxs("div",{className:"flex justify-between border-b border-gray-200 pb-2",children:[o.jsx("span",{className:"text-gray-500 font-medium",children:"Shipment Mode"}),o.jsx("span",{className:"text-gray-900 font-semibold text-right",children:kt.shipmentMode})]})]})]}),o.jsxs("div",{className:"bg-tea-50 px-8 py-4 border-t border-gray-200 text-sm text-gray-600 text-center",children:["Payment Modes Accepted: ",o.jsx("span",{className:"font-medium text-tea-800",children:kt.paymentMode})]})]})]})}),$n=[{id:"p1",name:"Black CTC Tea (All Grades)",slug:"black-ctc-tea",category:"CTC",description:"Premium Black CTC Tea directly from Assam & Dooars. All grades (BP, OF, Dust) available for wholesale and bulk supply.",longDescription:`
      <section>
        <p>Manish Tea Traders brings you <strong>premium Black CTC Tea</strong> directly from the renowned tea estates of Assam and Dooars. As one of Siliguri's leading tea wholesalers, we supply all commercial grades suitable for tea distributors, retailers, hotels, tea stall owners, and private label manufacturers across India.</p>
      </section>

      <section>
        <h3>Available Grades (Non-Blended, Garden Fresh)</h3>
        <ul>
          <li><strong>OF (Orange Fannings)</strong> - Rapid infusion, strong color</li>
          <li><strong>BP (Broken Pekoe)</strong> - Large grain, balanced flavor</li>
          <li><strong>BOP (Broken Orange Pekoe)</strong> - Premium household grade</li>
          <li><strong>BOPSM (Broken Orange Pekoe Superior Medium)</strong> - Extra fine quality, superior liquor</li>
          <li><strong>PD (Pekoe Dust)</strong> - High strength, commercial use</li>
          <li><strong>RD (Red Dust)</strong> - Instant color, tea stall favorite</li>
          <li><strong>Dust Grade</strong> - Maximum extraction, cost-effective</li>
        </ul>
      </section>

      <section>
        <h3>Why Choose Manish Tea Traders?</h3>
        <div>
          <h4>🌿 Direct Estate Sourcing</h4>
          <p>We procure directly from Assam and Dooars tea estates, eliminating middlemen and ensuring competitive wholesale rates for bulk buyers.</p>
          
          <h4>✅ Quality Assurance</h4>
          <ul>
            <li>Vacuum-tested for moisture content</li>
            <li>Garden-fresh, non-blended stock</li>
            <li>Consistent grade uniformity</li>
            <li>Laboratory tested for quality parameters</li>
          </ul>

          <h4>📦 Flexible Packaging Options</h4>
          <ul>
            <li>Standard: 26kg - 35kg Jute/PP Sacks</li>
            <li>Custom packaging available for bulk orders</li>
            <li>Moisture-resistant packing for long shelf life</li>
          </ul>

          <h4>🚚 Pan India Distribution Network</h4>
          <p>Serving tea traders and wholesalers in Siliguri (HQ), Kolkata, Patna, Bihar, Jaipur, and all major cities across India.</p>
        </div>
      </section>

      <section>
        <h3>Ideal For (B2B Applications)</h3>
        <dl>
          <dt><strong>Tea Distributors & Wholesalers</strong></dt>
          <dd>Perfect for creating proprietary blends and regional variants. Each grade is carefully segregated for consistent quality across batches.</dd>
          
          <dt><strong>Tea Packers & Private Label Manufacturers</strong></dt>
          <dd>Non-blended stock allows you to create custom blends under your brand name. We support white-label partnerships with flexible MOQ.</dd>
          
          <dt><strong>Hotels, Restaurants & Caterers (HoReCa)</strong></dt>
          <dd>BP and BOP grades deliver the perfect balance of flavor and color for commercial use.</dd>
          
          <dt><strong>Tea Stall Owners & Roadside Vendors</strong></dt>
          <dd>OF and Dust grades provide instant color and strong liquor, essential for high-volume tea preparation.</dd>
        </dl>
      </section>

      <section>
        <h3>What Makes Our CTC Tea Special?</h3>
        <p><strong>Authentic Dooars & Assam Character:</strong> Sourced from the fertile alluvial plains where tea cultivation is an art perfected over generations. The unique terroir imparts a distinctive malty sweetness and brisk character.</p>
        
        <h4>Grade-Specific Benefits</h4>
        <ul>
          <li><strong>Orange Fannings (OF):</strong> Fine particles ensure rapid infusion and immediate color development.</li>
          <li><strong>Broken Pekoe (BP):</strong> Larger leaf particles retain essential oils, delivering a fuller flavor profile.</li>
          <li><strong>Broken Orange Pekoe Superior Medium (BOPSM):</strong> Exceptional liquor clarity and smooth mouthfeel.</li>
          <li><strong>Pekoe Dust (PD) & Red Dust (RD):</strong> Maximum surface area ensures powerful extraction for blends.</li>
        </ul>
      </section>

      <section>
        <h3>Wholesale Pricing & Bulk Purchase Benefits</h3>
        <ul>
          <li>Competitive rates starting from ₹130/kg</li>
          <li>Volume-based discounts (1000kg+)</li>
          <li>Monthly contracts for regular buyers</li>
          <li>Transparent pricing with no hidden costs</li>
        </ul>
      </section>

      <section>
        <h3>Quality Control Process</h3>
        <ol>
          <li><strong>Estate Selection</strong> - Partner gardens vetted for consistency</li>
          <li><strong>Harvest Monitoring</strong> - Peak-season flush procurement</li>
          <li><strong>Grade Segregation</strong> - Mechanical and manual sorting</li>
          <li><strong>Moisture Testing</strong> - Vacuum testing before packaging</li>
          <li><strong>Sample Testing</strong> - Liquor, color, and aroma evaluation</li>
          <li><strong>Final Packaging</strong> - Moisture-proof sacks with batch coding</li>
        </ol>
      </section>

      <section>
        <h3>How to Order</h3>
        <p><strong>Step 1:</strong> Choose Your Grade<br/>
        <strong>Step 2:</strong> Request Bulk Quotation<br/>
        <strong>Step 3:</strong> Sample Testing (Optional)<br/>
        <strong>Step 4:</strong> Confirm Order<br/>
        <strong>Step 5:</strong> Delivery (3-7 business days)</p>
      </section>

      <section>
        <h3>Frequently Asked Questions (FAQ)</h3>
        <p><strong>Q: What is the minimum order quantity?</strong><br/>
        A: 500 kg is our standard MOQ for wholesale orders.</p>
        <p><strong>Q: Do you provide samples?</strong><br/>
        A: Yes, we provide chargeable samples (adjustable against bulk orders).</p>
        <p><strong>Q: Do you ship outside West Bengal?</strong><br/>
        A: Yes, we have pan-India delivery capabilities.</p>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit (Verified)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">SEO Coverage</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea wholesaler Siliguri • CTC tea supplier Siliguri • Bulk tea dealer Siliguri • Assam tea wholesale • Dooars tea distributor • Black tea wholesaler West Bengal • Tea traders in Siliguri • Wholesale tea prices Siliguri • CTC tea grades • Tea supplier North Bengal
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | All prices subject to market conditions and GST
        </div>
      </section>
    `,priceRange:"₹130.00 – ₹320.00 / kg",imageUrl:"/images/products/organic_ctc_tea_user.jpg",imageAlt:"CTC Tea Wholesale Supplier India BP OF Grades",badge:"Best Seller",sku:"CTC-BLK-001",moq:"500 kg",stockStatus:"In Stock",specifications:{Origin:"Assam / Dooars",Type:"CTC Granules","Available Grades":"OF, BP, BOP, BOPSM, PD, RD, Dust",Packaging:"Jute/PP Sack (26kg - 35kg)","Shelf Life":"12 Months",GST:"5% (HS Code: 0902)"}},{id:"p2",name:"Rajni Gold",slug:"rajni-gold",category:"Blend",description:"Premium proprietary CTC blend (60% Assam BP / 40% Dooars OF) designed for consistent retail taste and high margins.",longDescription:`
      <section>
        <p><strong>Rajni Gold</strong> is our flagship proprietary blend, engineered specifically for retailers and distributors who demand consistency, quality, and profitability. In the competitive retail tea market, brand loyalty is built on one simple promise: the same great taste, every single time.</p>
      </section>

      <section>
        <h3>The Science Behind the Blend</h3>
        <p>We don't leave taste to chance. Our master blenders have perfected a scientifically calibrated formula that remains unchanged batch after batch:</p>
        <ul>
          <li><strong>60% Assam BP (Broken Pekoe)</strong> - Delivers the deep, malty sweetness and full-bodied character that North Indian consumers expect in their morning chai.</li>
          <li><strong>40% Dooars OF (Orange Fannings)</strong> - Contributes rapid color development, briskness, and that signature reddish-brown liquor strength.</li>
        </ul>
        <p>This ratio isn't arbitrary—it's the result of extensive market testing and feedback from over 200 retail partners across North India.</p>
      </section>

      <section>
        <h3>Perfect for the 'Kadak Chai' Culture</h3>
        <ul>
          <li>✓ <strong>Strong Morning Brew</strong> - Robust enough to cut through milk and sugar</li>
          <li>✓ <strong>No Bitter Aftertaste</strong> - Smooth finish even when brewed longer</li>
          <li>✓ <strong>Consistent Color</strong> - Rich, inviting liquor color that looks premium</li>
          <li>✓ <strong>Aromatic Profile</strong> - Malty notes with subtle floral undertones</li>
          <li>✓ <strong>Multi-Brew Versatility</strong> - Performs equally well in traditional boiling or tea bags</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits Summary</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Benefit</th>
                <th class="p-2 border">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Consistent Blend Formula</td>
                <td class="p-2 border">Zero customer complaints about taste variation</td>
              </tr>
              <tr>
                <td class="p-2 border">Competitive Wholesale Rate</td>
                <td class="p-2 border">30-40% margin potential for retailers</td>
              </tr>
              <tr>
                <td class="p-2 border">Premium Market Positioning</td>
                <td class="p-2 border">Compete with ₹400-500/kg brands</td>
              </tr>
              <tr>
                <td class="p-2 border">Fast Inventory Turnover</td>
                <td class="p-2 border">Proven consumer acceptance = quick sales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Why Retailers Choose Rajni Gold</h3>
        <dl>
          <dt><strong>Unmatched Consistency</strong></dt>
          <dd>Your customers get the exact same taste every month. No surprises, no complaints.</dd>
          
          <dt><strong>High Margin Potential</strong></dt>
          <dd>Offers the taste profile of top brands selling at ₹400-500/kg, but at wholesale prices that allow for 30-40% higher margins.</dd>
          
          <dt><strong>Ready Market Acceptance</strong></dt>
          <dd>The blend profile matches consumer expectations built by leading national brands, ensuring faster inventory turnover.</dd>
        </dl>
      </section>

      <section>
        <h3>Premium Jar Packaging</h3>
        <p>Available in a <strong>premium 3kg PET jar</strong>—perfect for:</p>
        <ul>
          <li>High shelf visibility and retail display</li>
          <li>Moisture protection and extended freshness</li>
          <li>Reusable container that adds perceived value</li>
          <li>Ideal for gifting and bulk household storage</li>
        </ul>
      </section>

      <section>
        <h3>Quality Assurance Promise</h3>
        <p>Every batch of Rajni Gold undergoes rigorous testing:</p>
        <ol>
          <li>Visual grading for correct BP:OF ratio</li>
          <li>Liquor testing for color and strength</li>
          <li>Organoleptic evaluation by certified tasters</li>
          <li>Moisture content verification (below 7%)</li>
          <li>Master sample matching before final packaging</li>
        </ol>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit (Verified)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Market Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Retail Grocery Stores • Kiryana Shops • Tea Wholesalers • Corporate Pantry Suppliers • Hotel Chains • Private Label Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Proprietary Blend #BLEND-RAJ-001
        </div>
      </section>
    `,priceRange:"Contact for Wholesale Price",imageUrl:"/images/products/rajni_gold.png",imageAlt:"Rajni Gold Premium CTC Blend Wholesale Supplier India",badge:"Premium",sku:"BLEND-RAJ-001",moq:"50 kg (Mixed Packs)",stockStatus:"In Stock",specifications:{Type:"Blended CTC",Formula:"60% Assam BP / 40% Dooars OF",Liquor:"Strong & Bright",Usage:"Household / Retail / Hotels",Packaging:"3kg PET Jar / Bulk Bags",MOQ:"50 kg"}},{id:"p3",name:"Begam Gold",slug:"begam-gold",category:"Blend",description:"Deep red 'Lal Ghoda' liquor tea sourced from heavy-liquoring Dooars gardens. Built for traditional boiling methods.",longDescription:`
      <section>
        <p>In the traditional Indian tea market, there's an unspoken rule: <strong>"Chai must look like chai."</strong> Before taste, before aroma, comes color. The deep, rich, inviting red-brown liquor that signals strength and quality at first glance. <strong>Begam Gold</strong> is engineered precisely for this discerning market segment—where visual impact drives purchase decisions and repeat sales.</p>
      </section>

      <section>
        <h3>The "Lal Ghoda" Standard</h3>
        <p>Begam Gold delivers what tea connoisseurs in Bihar, UP, and traditional markets call <strong>"Lal Ghoda" (Red Horse) color</strong>—that intensely dark, reddish-brown liquor that appears instantly when milk is added. This isn't achieved through artificial coloring or dust-heavy blends. It's the result of carefully sourcing from select heavy-liquoring gardens in the Dooars region known for producing high-tannin, color-rich tea.</p>
      </section>

      <section>
        <h3>Regional Market Expertise</h3>
        <p>We understand that India doesn't drink tea the same way everywhere. In Bihar, UP, Jharkhand, and parts of MP, tea culture revolves around the traditional boiling method:</p>
        <ul>
          <li>Tea leaves boiled directly with water for 5-10 minutes</li>
          <li>Milk added and brought to a rolling boil</li>
          <li>Sugar incorporated during the boiling process</li>
          <li>Often re-boiled when serving the second round</li>
        </ul>
        <p>Most blends collapse under this rigorous treatment—losing color, turning bitter, or producing a weak, washed-out cup. <strong>Begam Gold thrives in these conditions.</strong></p>
      </section>

      <section>
        <h3>Built for Boiling: Superior Heat Stability</h3>
        <div>
          <h4>Why Begam Gold Different</h4>
          <ul>
            <li><strong>High Tannin Content:</strong> Sourced from Dooars gardens producing naturally high-polyphenol teas that maintain color intensity even when boiled repeatedly.</li>
            <li><strong>Coarse Particle Selection:</strong> Larger CTC granules release flavor and color gradually, preventing that "burnt" taste that comes from over-extraction.</li>
            <li><strong>Color Retention Technology:</strong> Our blending process prioritizes grades that maintain liquor color even when diluted with milk or boiled repeatedly.</li>
            <li><strong>Consistent Density:</strong> Every batch delivers the same deep color and strength.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Performance Characteristics</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Brewing Method</th>
                <th class="p-2 border">Color Development</th>
                <th class="p-2 border">Strength</th>
                <th class="p-2 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Traditional Boiling (5-10 min)</td>
                <td class="p-2 border">Deep Red-Brown</td>
                <td class="p-2 border">Full-Bodied, Robust</td>
                <td class="p-2 border">Family consumption, roadside stalls</td>
              </tr>
              <tr>
                <td class="p-2 border">Re-boiling/Second Round</td>
                <td class="p-2 border">Maintains 80%+ color</td>
                <td class="p-2 border">Strong, no bitterness</td>
                <td class="p-2 border">Multi-serving scenarios</td>
              </tr>
              <tr>
                <td class="p-2 border">Quick Brew (3 min)</td>
                <td class="p-2 border">Rich Color within minutes</td>
                <td class="p-2 border">Medium-Strong</td>
                <td class="p-2 border">Modern households</td>
              </tr>
              <tr>
                <td class="p-2 border">Pressure Cooker Method</td>
                <td class="p-2 border">Excellent color stability</td>
                <td class="p-2 border">Very Strong</td>
                <td class="p-2 border">Bulk preparation for events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Target Markets & Consumer Segments</h3>
        <p><strong>Primary Markets:</strong> Bihar, Uttar Pradesh, Jharkhand, Madhya Pradesh, North Bengal.</p>
        <h4>Ideal Consumer Profile</h4>
        <ul>
          <li>✓ <strong>Traditional Households</strong> - Multi-generational families who prepare large batches</li>
          <li>✓ <strong>Tea Stall Owners</strong> - Need consistent color across multiple servings</li>
          <li>✓ <strong>Bulk Consumers</strong> - Offices, factories, community kitchens</li>
          <li>✓ <strong>Price-Conscious Buyers</strong> - Want premium appearance without premium pricing</li>
          <li>✓ <strong>Heavy Tea Drinkers</strong> - 4-6 cups daily, need robust flavor that doesn't fade</li>
        </ul>
      </section>

      <section>
        <h3>Why Retailers Stock Begam Gold</h3>
        <ol>
          <li><strong>Immediate Visual Differentiation:</strong> When customers see that deep red color, they perceive value.</li>
          <li><strong>Regional Market Fit:</strong> If you're supplying Bihar or UP, Begam Gold speaks the local tea language.</li>
          <li><strong>Volume Sales Potential:</strong> Traditional consumers use more tea per serving and drink more frequently.</li>
          <li><strong>Competitive Positioning:</strong> Sits between economy dust and premium brands—the "sweet spot" of value.</li>
          <li><strong>Multi-Use Versatility:</strong> Household, tea stalls, catering, and private label potential.</li>
        </ol>
      </section>

      <section>
        <h3>The Dooars Advantage</h3>
        <p>The Dooars region's unique terroir produces teas with higher natural tannin levels, stronger color compounds (theaflavins), and better heat resistance. We source exclusively from gardens that specialize in these characteristics.</p>
      </section>

      <section>
        <h3>Quality Control for Regional Preferences</h3>
        <ul>
          <li>✓ <strong>Boiling Method Simulation:</strong> Tea boiled with water for 10 minutes, then milk added.</li>
          <li>✓ <strong>Color Measurement:</strong> Standardized charts used to ensure "Lal Ghoda" consistency.</li>
          <li>✓ <strong>Re-boil Testing:</strong> Second and third boils evaluated for color retention.</li>
          <li>✓ <strong>Milk Compatibility:</strong> Tested with varying milk-to-tea ratios.</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Distributors</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Advantage</th>
                <th class="p-2 border">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Regional Specialization</td>
                <td class="p-2 border">Dominates in traditional tea-drinking markets</td>
              </tr>
              <tr>
                <td class="p-2 border">High Consumption Rate</td>
                <td class="p-2 border">Customers use more, buy more frequently</td>
              </tr>
              <tr>
                <td class="p-2 border">Visual Satisfaction</td>
                <td class="p-2 border">Fewer complaints, higher repeat purchase</td>
              </tr>
              <tr>
                <td class="p-2 border">Competitive Wholesale Rate</td>
                <td class="p-2 border">Healthy margins even at competitive retail prices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Comparison: Begam Gold vs. Others</h3>
        <ul>
          <li><strong>vs. Dust-Heavy Cheap Blends:</strong> Better taste (not just color) and no bitter aftertaste.</li>
          <li><strong>vs. Premium National Brands:</strong> Comparable color/strength at significantly better wholesale pricing.</li>
          <li><strong>vs. Generic CTC Blends:</strong> Superior color stability specifically for boiling methods.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200 text-center">
        <p class="italic text-stone-600">"Begam Gold isn't just tea. It's your competitive advantage packaged in every pouch."</p>
        <div class="mt-8 flex flex-col md:flex-row justify-between gap-8 text-sm text-left">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> High Volume In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit</li>
            </ul>
          </div>
          <div class="flex-1 text-center self-center">
             <span class="text-[10px] text-stone-400 uppercase tracking-widest">
              Last Updated: January 2026 | Color Grade #BLEND-BEG-001
            </span>
          </div>
        </div>
      </section>
    `,priceRange:"Contact for Wholesale Price",imageUrl:"/images/products/jjj.jpg",imageAlt:"Begam Gold Strong Liquor Tea Wholesale Siliguri",sku:"BLEND-BEG-001",moq:"500 kg",stockStatus:"In Stock",specifications:{Type:"Strong CTC Blend",Origin:"Dooars (Select Gardens)",Liquor:"Deep Red-Brown",Character:"Heat Stable / Color Rich",Packaging:"3kg PET Jar / Bulk Bags",MOQ:"500 kg"}},{id:"p4",name:"Saavan Tea",slug:"saavan-tea",category:"CTC",description:"Premium monsoon harvest tea with distinctive zest & briskness. Bulk-only supply (500kg minimum) for serious distributors and exporters.",longDescription:`
      <section>
        <p><strong>Saavan Tea</strong> is our premium monsoon harvest offering, crafted for distributors and bulk buyers who understand that seasonal character and authentic freshness command loyalty in discerning tea markets. In regions where consumers appreciate the lighter, more nuanced side of tea, Saavan delivers an experience that heavy, muddy blends simply cannot match.</p>
      </section>

      <section>
        <h3>The Monsoon Advantage</h3>
        <p>Harvested exclusively during the peak monsoon months when rainfall and humidity create optimal growing conditions, Saavan Tea captures nature's most vibrant flush. The tea bushes, rejuvenated by consistent rains, produce leaves with:</p>
        <ul>
          <li><strong>Enhanced Chlorophyll Content</strong> - Creates that distinctive grassy freshness</li>
          <li><strong>Lower Tannin Levels</strong> - Results in a lighter, less astringent cup</li>
          <li><strong>Rapid Growth Cycle</strong> - Ensures younger, more tender leaves with delicate flavor profiles</li>
        </ul>
        <p>This isn't just seasonal tea—it's the expression of what monsoon terroir brings to the cup.</p>
      </section>

      <section>
        <h3>Distinctive Flavor Profile</h3>
        <h4>The 'Zest & Briskness' Character</h4>
        <ul>
          <li><strong>Refreshing Grassy Notes</strong> - A clean, vegetal brightness that energizes</li>
          <li><strong>Light-Bodied Elegance</strong> - No heaviness or muddy undertones</li>
          <li><strong>Natural Briskness</strong> - A lively, crisp finish without bitterness</li>
          <li><strong>Clean Liquor</strong> - Bright, clear infusion that looks as fresh as it tastes</li>
          <li><strong>Morning & Afternoon Versatility</strong> - Perfect for lighter consumption moments</li>
        </ul>
      </section>

      <section>
        <h3>Visual Quality Markers</h3>
        <p><strong>What Your Customers Will Notice:</strong></p>
        <p>Our processing standards ensure every 500g pack delivers visual excellence:</p>
        <ul>
          <li>Clean, uniform black granules with consistent particle size</li>
          <li>No dust, no stems, no foreign matter</li>
          <li>Even color distribution indicating proper oxidation</li>
          <li>Premium appearance that justifies higher retail positioning</li>
        </ul>
      </section>

      <section>
        <h3>Business Model: Bulk-Only Supply</h3>
        <p><strong>Minimum Order Quantity: 500 KG</strong></p>
        <p>Saavan Tea is positioned exclusively for serious bulk buyers—distributors, exporters, branded tea companies, and institutional suppliers who:</p>
        <ul>
          <li>Require consistent seasonal character across large volumes</li>
          <li>Serve markets preferring lighter, fresher tea styles</li>
          <li>Need reliable monsoon harvest supply for private labeling</li>
          <li>Value authentic harvest identity over generic blends</li>
        </ul>
        
        <h4>Why 500 KG Minimum?</h4>
        <p>This threshold ensures:</p>
        <ul>
          <li>Price efficiency for bulk operations</li>
          <li>Seasonal batch consistency</li>
          <li>Serious buyer commitment</li>
          <li>Reduced logistics complexity</li>
        </ul>
      </section>

      <section>
        <h3>Packaging Specifications</h3>
        <h4>500 Gram Retail-Ready Units</h4>
        <p>Each case contains individually packed 500g units in durable plastic packaging:</p>
        <ul>
          <li><strong>Material:</strong> Food-grade plastic for moisture barrier protection</li>
          <li><strong>Sealing:</strong> Heat-sealed for tamper evidence and freshness lock</li>
          <li><strong>Shelf Life:</strong> 18 months from packaging date when stored properly</li>
          <li><strong>Labeling:</strong> Customizable for private label requirements</li>
          <li><strong>Case Quantity:</strong> Contact for bulk case configuration</li>
        </ul>
        
        <p><strong>Perfect for:</strong></p>
        <ul>
          <li>Private label tea brands targeting premium segments</li>
          <li>Export markets preferring lighter Indian teas</li>
          <li>Specialty tea retailers and cafés</li>
          <li>Corporate gifting and hamper companies</li>
          <li>Tea blenders seeking monsoon character components</li>
        </ul>
      </section>

      <section>
        <h3>Quality Control Protocol</h3>
        <p>Every production batch undergoes our 5-point verification:</p>
        <ol>
          <li><strong>Visual Sorting</strong> - Manual inspection for color uniformity and cleanliness</li>
          <li><strong>Grading Verification</strong> - Particle size consistency check</li>
          <li><strong>Liquor Analysis</strong> - Color, brightness, and clarity assessment</li>
          <li><strong>Sensory Evaluation</strong> - Professional tasting for characteristic zest and briskness</li>
          <li><strong>Packaging Integrity</strong> - Seal quality and weight verification</li>
        </ol>
      </section>

      <section>
        <h3>Target Market Segments</h3>
        <p><strong>Ideal Buyer Profiles:</strong></p>
        <p>Tea Exporters • Private Label Brands • Specialty Tea Retailers • Hotel & Restaurant Chains • Corporate Bulk Buyers • Tea Blending Houses • E-commerce Tea Brands • International Distributors</p>
      </section>

      <section>
        <h3>Seasonal Availability</h3>
        <p>Saavan Tea represents our monsoon harvest period production. Given the seasonal nature:</p>
        <ul>
          <li><strong>Peak Availability:</strong> July - October</li>
          <li><strong>Limited Production Window:</strong> Weather-dependent harvest</li>
          <li><strong>Annual Volume:</strong> Contact for current season allocation</li>
          <li><strong>Pre-booking:</strong> Recommended for guaranteed supply</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Seasonal - Contact for Current Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 5-10 business days (minimum 500 kg order)</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance payment for first-time buyers / Credit terms for verified accounts</li>
              <li class="flex gap-2"><span>📍</span> <strong>Shipping:</strong> Pan-India; export inquiries welcome</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea Exporters • Private Label Brands • Specialty Retailers • Hotel Chains • Corporate Buyers • Blending Houses • E-commerce Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Product Code: #SEAS-SAV-M500
        </div>
      </section>
    `,priceRange:"Contact for Wholesale Price",imageUrl:"/images/products/savaan_tea.png",imageAlt:"Saavan Monsoon Flush CTC Tea Bulk Wholesale Supplier",badge:"Seasonal",sku:"SEAS-SAV-M500",moq:"500 kg",stockStatus:"Seasonal",specifications:{Type:"Monsoon Flush CTC",Season:"July - October",Character:"Zest & Briskness",Liquor:"Light-Bodied, Bright",Packaging:"500g Retail-Ready Units",MOQ:"500 kg (Bulk Only)"}},{id:"p5",name:"Priya Gold",slug:"priya-gold",category:"Blend",description:"The Economics of Every Cup. Precision-engineered for high-volume commercial tea service with maximum extraction.",longDescription:`
      <section>
        <p>In commercial tea service, the math is simple: cups per kilogram determines profitability. Whether you're running a roadside tea stall serving hundreds of customers daily, managing a factory canteen, or supplying corporate pantries, every gram counts. <strong>Priya Gold</strong> is precision-engineered for exactly this reality—maximum extraction, minimum waste, consistent results, and a price point that keeps your margins healthy.</p>
        <p>This isn't a blend designed for retail shelves or premium positioning. Priya Gold is the workhorse blend created specifically for high-volume, cost-sensitive commercial applications where performance per rupee is the only metric that matters.</p>
      </section>

      <section>
        <h3>The Extraction Advantage</h3>
        <p>Priya Gold uses a carefully calibrated mix of particle sizes designed for rapid, complete extraction:</p>
        <ul>
          <li><strong>Medium-Sized CTC Granules (65%):</strong> Provide body, flavor foundation, and that satisfying depth customers expect.</li>
          <li><strong>High-Strength Dust Grade (35%):</strong> Instant color development and rapid caffeine extraction for the "kick" factor.</li>
        </ul>
        <p>This dual-action formula means you extract more from every gram without needing to increase steeping time.</p>
      </section>

      <section>
        <h3>Performance Metrics That Matter</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Metric</th>
                <th class="p-2 border">Standard CTC</th>
                <th class="p-2 border">Priya Gold</th>
                <th class="p-2 border">Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Cups per kg</td>
                <td class="p-2 border">120-140 cups</td>
                <td class="p-2 border text-green-700 font-bold">160-180 cups</td>
                <td class="p-2 border">+30-40 cups</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Color Dev.</td>
                <td class="p-2 border">3-5 minutes</td>
                <td class="p-2 border">1-2 minutes</td>
                <td class="p-2 border">Faster Service</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Cost per cup</td>
                <td class="p-2 border">₹2.50-3.00</td>
                <td class="p-2 border text-green-700 font-bold">₹1.80-2.20</td>
                <td class="p-2 border">Better Margins</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[10px] text-stone-400 mt-2">*Based on standard brewing ratios and wholesale pricing. Actual results may vary.</p>
      </section>

      <section>
        <h3>The "Kick" Factor: Caffeine & Satisfaction</h3>
        <p>Commercial tea drinkers—truck drivers, factory workers, office employees—want energy and alertness. Priya Gold delivers:</p>
        <ul>
          <li><strong>High Caffeine Release:</strong> Dust particles release caffeine faster and more completely.</li>
          <li><strong>Strong Mouthfeel:</strong> Tannin levels calibrated for "substance" without excessive bitterness.</li>
          <li><strong>Immediate Impact:</strong> Quick extraction means the energizing effect kicks in faster.</li>
        </ul>
      </section>

      <section>
        <h3>Target Commercial Segments</h3>
        <dl>
          <dt><strong>Tea Stalls & Roadside Chaiwalas</strong></dt>
          <dd>Brew time under 2 minutes fits service speed; strong color impresses customers immediately.</dd>
          
          <dt><strong>Factory & Industrial Canteens</strong></dt>
          <dd>Ideal for bulk preparation of 50-100 cup batches where workers appreciate the strong "wake-up" effect.</dd>
          
          <dt><strong>Catering & Event Management</strong></dt>
          <dd>Scales without quality loss, allowing for competitive quote pricing on tight margins.</dd>

          <dt><strong>Small Restaurants & Dhabas</strong></dt>
          <dd>Low per-cup cost makes complimentary chai service viable during rush hours.</dd>
        </dl>
      </section>

      <section>
        <h3>Why Priya Gold Outperforms Alternatives</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Comparison</th>
                <th class="p-2 border">Priya Gold Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">vs. Pure Dust Blends</td>
                <td class="p-2 border">Cleaner cup, doesn't produce muddy taste or turn bitter.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">vs. Standard Economy CTC</td>
                <td class="p-2 border">30-40% better extraction efficiency; faster brewing saves fuel.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">vs. Premium Blends</td>
                <td class="p-2 border">Identical performance in milk-heavy prep without the unnecessary cost.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Commercial Reality Check</h3>
        <div class="bg-tea-50 p-4 rounded-xl border border-tea-100">
          <ul class="!list-none !pl-0 space-y-2 mb-0">
            <li class="flex gap-2"><span>✓</span> <strong>Is it strong enough?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it look like proper chai?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it give me energy?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it cost too much?</strong> No</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Cost Efficiency Analysis</h3>
        <p><strong>Example: Mid-sized Tea Stall (200 cups/day)</strong></p>
        <ul>
          <li><strong>Using Standard CTC:</strong> Monthly tea cost approximately ₹6,750</li>
          <li><strong>Using Priya Gold:</strong> Monthly tea cost approximately ₹5,040</li>
          <li><strong>Annual Savings: ₹20,520</strong></li>
        </ul>
        <p><em>Savings that can fund better cups, improved sugar, or simply boost your profit margins.</em></p>
      </section>

      <section>
        <h3>Operational Advantages</h3>
        <ul>
          <li><strong>Speed of Service:</strong> Higher turnover during peak hours with reduced fuel consumption.</li>
          <li><strong>Consistency Across Shifts:</strong> Forgiving formulation works even if water temp or brew time varies slightly.</li>
          <li><strong>Inventory Management:</strong> Standard 3kg PET jar protects against moisture in busy kitchens.</li>
        </ul>
      </section>

      <section>
        <h3>Quality & Packaging</h3>
        <ul>
          <li><strong>Standards:</strong> Food-safe processing, moisture control, and lab-tested strength consistency.</li>
          <li><strong>3kg PET Jar:</strong> Volume efficiency (500+ cups), moisture protection, and easy stackable handling.</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Wholesalers</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Benefit</th>
                <th class="p-2 border">Commercial Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">High Volume Potential</td>
                <td class="p-2 border">Commercial clients reorder frequently and in larger quantities.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Lower Churn</td>
                <td class="p-2 border">Once established, these clients are extremely "sticky" and loyal.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Predictable Demand</td>
                <td class="p-2 border">Commercial consumption is consistent year-round, regardless of season.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Supply Reliability</h4>
            <p class="text-stone-600 leading-relaxed mb-4">Commercial clients can't afford stockouts. We maintain substantial inventory of Priya Gold specifically to fuel your morning rush. Regular replenishment from garden-fresh batches ensures optimal shelf life.</p>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Continuous Replenishment</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days</li>
              <li class="flex gap-2"><span>🫙</span> <strong>Standard Pack:</strong> 3kg Commercial Jar</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea Stalls • Industrial Canteens • Corporate Pantries • Catering • Roadside Dhabas • Event Managers
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Industry Series #BLEND-PRI-001
        </div>
      </section>
    `,priceRange:"₹130 – ₹220 / kg",imageUrl:"/images/products/priya_gold.png",imageAlt:"Priya Gold Economy Tea Blend Wholesale Price India",sku:"BLEND-PRI-001",moq:"500 kg",stockStatus:"In Stock",specifications:{Category:"Commercial Economy",Yield:"160-180 Cups / kg",Extraction:"Rapid (1-2 mins)","Particle Mix":"CTC + High-Strength Dust","Best For":"High Volume Tea Service",Packaging:"3kg PET Jar (Standard)",MOQ:"500 kg"}},{id:"p6",name:"Sabnam Gold",slug:"sabnam-gold",category:"Blend",description:"The 'Hotel Special' blend. Balanced strength and golden liquor profile favored by mid-range restaurants and cafes.",longDescription:`
      <section>
        <p>In the restaurant and cafe business, tea is where reputation meets margins. Serve poor quality and customers notice—online reviews suffer, repeat visits decline. Over-invest in premium blends and profitability evaporates on a beverage many consider "complimentary." <strong>Sabnam Gold</strong> is engineered for this precise sweet spot—the blend that makes your tea service a quiet competitive advantage rather than a cost center or complaint generator.</p>
      </section>

      <section>
        <h3>The Hotel Special Philosophy</h3>
        <p>We call Sabnam Gold our 'Hotel Special' because it solves the unique challenge faced by mid-range restaurants, cafes, and hospitality businesses:</p>
        <ul>
          <li><strong>The Challenge:</strong> Your customers expect good tea—not artisanal, but good. The kind that complements their meal and doesn't trigger complaints.</li>
          <li><strong>The Solution:</strong> A blend that delivers consistent quality, pleasant flavor, attractive appearance, and rapid preparation—all while maintaining healthy F&B margins.</li>
        </ul>
      </section>

      <section>
        <h3>Why Mid-Range Hospitality Chooses Sabnam Gold</h3>
        
        <h4>1. The Visual Appeal Factor</h4>
        <p>In a restaurant or cafe, tea is often served in glass cups or white ceramic—your beverage is on display. Sabnam Gold produces that appealing <strong>golden-brown liquor</strong> that signals quality to customers before the first sip.</p>
        
        <h4>2. Smooth, Non-Bitter Profile</h4>
        <p>One of the biggest complaints about commercial hotel tea is harshness. Sabnam Gold's formulation specifically addresses this:</p>
        <ul>
          <li><strong>Controlled Tannin Levels:</strong> Strong enough to taste like proper tea, gentle enough to avoid bitterness.</li>
          <li><strong>Smooth Mouthfeel:</strong> Doesn't coat the mouth with unpleasant dryness.</li>
          <li><strong>No Burnt Notes:</strong> Even if accidentally over-brewed, doesn't turn harsh.</li>
          <li><strong>Milk Compatible:</strong> Works beautifully with varying milk quantities.</li>
        </ul>
        
        <h4>3. Rapid Color Release: Kitchen Efficiency</h4>
        <p>Sabnam Gold features a higher percentage of fine fannings that deliver critical operational benefits:</p>
        <ul>
          <li><strong>Faster Brewing:</strong> Color develops within 60-90 seconds, reducing wait times during service rush.</li>
          <li><strong>Fuel Savings:</strong> Less boiling time = lower gas/electricity consumption across hundreds of daily cups.</li>
          <li><strong>Labor Efficiency:</strong> More forgiving if attention shifts to other tasks; consistent results with minimal supervision.</li>
        </ul>
      </section>

      <section>
        <h3>Target Hospitality Segments</h3>
        <dl>
          <dt><strong>Mid-Range Restaurants (₹300-800 per person)</strong></dt>
          <dd>Perfect for complimentary after-meal chai service. Enhances dining experience, encourages lingering, and generates positive review mentions.</dd>
          
          <dt><strong>Cafes & Coffee Shops</strong></dt>
          <dd>Tea menu alternative that respects tea drinkers. Quick preparation, no specialized training needed, attractive in cafe-style glassware.</dd>
          
          <dt><strong>Business Hotels & Conference Centers</strong></dt>
          <dd>Banquet service and meeting room refreshments. Scalable for 20-200 people, performs well in commercial tea urns.</dd>
          
          <dt><strong>Guest Houses & Boutique Properties</strong></dt>
          <dd>In-room tea service that elevates perceived property value. Works for international guests with its smooth, non-aggressive profile.</dd>
          
          <dt><strong>Cloud Kitchens & Food Delivery</strong></dt>
          <dd>Bundled beverages that travel well. Flavor stability during delivery, reheats acceptably, maintains quality during transit.</dd>
        </dl>
      </section>

      <section>
        <h3>Technical Specifications</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Primary Grade</td>
                <td class="p-2 border">Fine Fannings (65%), Medium CTC (35%)</td>
              </tr>
              <tr>
                <td class="p-2 border">Liquor Color</td>
                <td class="p-2 border">Golden-Brown, Clear</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Flavor Profile</td>
                <td class="p-2 border">Smooth, Balanced, Non-Bitter</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Brew Time</td>
                <td class="p-2 border">60-90 seconds (rapid extraction)</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Milk Compatibility</td>
                <td class="p-2 border">Excellent (1:3 to 1:5 ratios)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>The "Between Premium and Commercial" Positioning</h3>
        <div class="bg-tea-50 p-4 rounded-xl border border-tea-100 mb-4">
          <p class="font-bold mb-2">What Sabnam Gold IS:</p>
          <ul class="!list-none !pl-0 space-y-2 mb-0">
            <li class="flex gap-2"><span>✓</span> The Quality Baseline for Customer-Facing Service</li>
            <li class="flex gap-2"><span>✓</span> The Operational Sweet Spot (fast + good)</li>
            <li class="flex gap-2"><span>✓</span> The Margin Optimizer (allows free service)</li>
            <li class="flex gap-2"><span>✓</span> The Reputation Protector (no complaints)</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Cost Analysis: Mid-Range Restaurant Scenario</h3>
        <p><strong>100 customers/day, 60% take tea</strong></p>
        <ul>
          <li><strong>Daily consumption:</strong> 400-450 grams</li>
          <li><strong>Cost per cup:</strong> ₹1.80-2.10 (including milk, sugar, fuel)</li>
          <li><strong>Monthly tea cost:</strong> ₹3,600-4,200</li>
        </ul>
        <p><strong>vs. Premium Blend:</strong> Saves ₹2,400-3,000/month with no noticeable quality difference for most diners.</p>
        <p><strong>vs. Economy Blend:</strong> Invests ₹1,500-1,800 more/month but eliminates bitter taste complaints and protects brand reputation.</p>
      </section>

      <section>
        <h3>The Smoothness Advantage</h3>
        <p>Many commercial hotel blends use high-dust compositions that extract quickly but create unpleasant astringency. Sabnam Gold uses <strong>fine fannings rather than dust</strong>—a critical distinction:</p>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Fine Fannings (Sabnam Gold)</th>
                <th class="p-2 border">Dust-Heavy Blends</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Rapid extraction without over-extraction</td>
                <td class="p-2 border">Over-extracts easily, producing bitterness</td>
              </tr>
              <tr>
                <td class="p-2 border">Clean cup with minimal sediment</td>
                <td class="p-2 border">Muddy appearance with sediment</td>
              </tr>
              <tr>
                <td class="p-2 border">Maintains smoothness even with extended contact</td>
                <td class="p-2 border">Harsh mouthfeel, drying sensation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Brewing Versatility</h3>
        <ul>
          <li><strong>Traditional Boiling:</strong> 60-90 second steep, add milk, brief boil. Result: smooth, golden-brown, aromatic.</li>
          <li><strong>Tea Urn/Bulk Preparation:</strong> Maintains quality for 30-45 minutes, doesn't turn bitter sitting in urn.</li>
          <li><strong>Individual Cup Service:</strong> Portion into strainers, 90-second steep adequate, professional presentation.</li>
          <li><strong>Automated Dispensers:</strong> Compatible with modern commercial machines, consistent batch-to-batch results.</li>
        </ul>
      </section>

      <section>
        <h3>Quality Assurance & Packaging</h3>
        <ul>
          <li><strong>Testing:</strong> Flavor consistency, bitterness threshold, color development speed, milk interaction, sediment control.</li>
          <li><strong>Food Safety:</strong> Processed in food-grade facilities, regular microbial testing, moisture control, batch traceability.</li>
          <li><strong>3kg PET Jar:</strong> Freshness protection, stackable storage, portion control, serves 450-600 cups (1.5-2 weeks for average cafe).</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Distributors</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Advantage</th>
                <th class="p-2 border">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Steady Repeat Orders</td>
                <td class="p-2 border">Restaurants don't switch tea frequently once satisfied</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Referral Potential</td>
                <td class="p-2 border">Chefs and managers recommend to industry peers</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Low Complaint Rate</td>
                <td class="p-2 border">Smooth profile means fewer service issues</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Year-Round Demand</td>
                <td class="p-2 border">Restaurants serve tea consistently, not seasonally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Hospitality Expertise</h4>
            <p class="text-stone-600 leading-relaxed mb-4">We supply numerous restaurants, cafes, and hotels across North India. Sabnam Gold represents our accumulated knowledge of what works in real kitchens serving real customers—practical excellence at sustainable pricing.</p>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Regular Inventory</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>🫙</span> <strong>Packaging:</strong> 3kg PET Jar (Hospitality Standard)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Market Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Mid-Range Hotels • Casual Dining • Office Pantries • High-End Tea Stalls • Banquet Halls • Cafes • Cloud Kitchens
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Hospitality Series #BLEND-SAB-001
        </div>
      </section>
    `,priceRange:"Contact for Wholesale Price",imageUrl:"/images/products/kk2.jpg",imageAlt:"Sabnam Gold Hotel Special Tea Wholesale Supplier",sku:"BLEND-SAB-001",moq:"300 kg",stockStatus:"In Stock",specifications:{Type:"Hotel Special Blend",Color:"Golden Brown",Strength:"Medium-Strong",Packaging:"Loose / Bulk Sacks","Best For":"Restaurants / Cafes",MOQ:"300 kg"}},{id:"p7",name:"Nepal High Grown",slug:"nepal-high-grown",category:"Orthodox",description:"Premium Whole Leaf Tea | Ilam Estate Origin. Darjeeling-quality at Nepal pricing. Floral, fruity, muscatel notes.",longDescription:`
      <section>
        <h3>The Best-Kept Secret in the Tea World</h3>
        <p>Manish Tea Traders proudly presents <strong>Nepal High Grown</strong>, sourced from the misty, high-altitude slopes of Ilam in Eastern Nepal—a region that shares the same geographical DNA, soil composition, and climatic conditions as the legendary Darjeeling tea gardens. This is premium quality at a fraction of the Darjeeling price point, offering your customers exceptional value without compromise.</p>
      </section>

      <section>
        <h3>Why Nepal High Grown Is a Game-Changer for Retailers</h3>
        <p>In a market saturated with CTC dust and standard blends, Nepal High Grown gives you a competitive edge. It's the perfect answer for customers who are evolving beyond 'strength-first' tea and seeking sophistication, aroma, and character in their cup.</p>
        <ul>
          <li><strong>Visual Appeal:</strong> Twisted, wiry whole leaves that look premium and signal quality before the first brew.</li>
          <li><strong>Pale Amber Liquor:</strong> Brews into a delicate, golden-amber infusion that's visually distinct and elegant.</li>
          <li><strong>Aromatic Complexity:</strong> Distinct floral and fruity notes—think muscatel grapes, orchid blossoms, and a hint of stone fruit. This is tea that announces itself before it reaches the lips.</li>
          <li><strong>Self-Drinking Excellence:</strong> Drinks beautifully without milk, sugar, or spices. Perfect for the growing segment of health-conscious and flavor-focused tea drinkers.</li>
        </ul>
      </section>

      <section>
        <h3>The Power of Perception Meets Price</h3>
        <p>Your customers get Darjeeling-adjacent quality at Nepal pricing. This positioning allows you to:</p>
        <ul>
          <li>Introduce a "Premium Leaf Tea" category without alienating price-sensitive buyers</li>
          <li>Attract aspirational customers seeking refined taste experiences</li>
          <li>Build higher margins on a product that feels exclusive but remains accessible</li>
          <li>Differentiate your offering from competitors selling only commodity-grade tea</li>
        </ul>
      </section>

      <section>
        <h3>Who Is This For?</h3>
        <dl>
          <dt><strong>Specialty Tea Retailers & Organic Stores</strong></dt>
          <dd>Perfect for shops targeting wellness-conscious consumers and tea connoisseurs looking for the next discovery.</dd>
          
          <dt><strong>Cafés & Boutique Hotels</strong></dt>
          <dd>An excellent addition to premium tea menus. Pairs beautifully with light meals, desserts, and afternoon tea service.</dd>
          
          <dt><strong>Online Tea Sellers & Subscription Box Curators</strong></dt>
          <dd>A story-rich product with exotic origin appeal and genuine quality credentials.</dd>
          
          <dt><strong>Corporate Gifting & Hamper Businesses</strong></dt>
          <dd>Elevated presentation, unique origin story, and sophisticated taste profile make it ideal for premium gift packaging.</dd>
        </dl>
      </section>

      <section>
        <h3>Brewing Recommendations</h3>
        <ul>
          <li><strong>Quantity:</strong> 2-3 grams per 150ml cup (approx. 1 teaspoon)</li>
          <li><strong>Water Temperature:</strong> 85-90°C (just below boiling)</li>
          <li><strong>Steeping Time:</strong> 3-4 minutes for first infusion</li>
          <li><strong>Re-steeping:</strong> Can be steeped 2-3 times with excellent results</li>
        </ul>
        <p><em>Best enjoyed without milk to fully appreciate the delicate floral and fruity character. Minimal or no sugar recommended.</em></p>
      </section>

      <section>
        <h3>Product Specifications</h3>
        <ul>
          <li><strong>Origin:</strong> Ilam Valley, Eastern Nepal (1,500–2,200m altitude)</li>
          <li><strong>Grade:</strong> High Grown Whole Leaf</li>
          <li><strong>Processing:</strong> Orthodox method (twisted leaf)</li>
          <li><strong>Flavor Profile:</strong> Floral, fruity, muscatel notes with bright finish</li>
          <li><strong>Packaging:</strong> Available in 500g, 1kg, 5kg options (customizable)</li>
          <li><strong>Shelf Life:</strong> 12-18 months when stored in airtight containers</li>
        </ul>
        
        <h4>Storage Recommendations</h4>
        <p>Store in a cool, dry place away from direct sunlight and strong odors. Use airtight containers to preserve aroma and freshness.</p>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Limited Seasonal Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Cash / UPI / Digital</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Specialty Tea Retailers • Premium Cafés • Health & Wellness Stores • Online Tea Merchants • Boutique Hotels • Gift Hamper Businesses • Tea Subscription Services
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Manish Tea Traders, Siliguri - Gateway to Himalayan Tea Excellence<br/>
          Last Updated: January 2026 | Premium Leaf Series #NEP-HG-001
        </div>
      </section>
    `,priceRange:"₹350 – ₹600 / kg",imageUrl:"/images/products/nepal.jpg",imageAlt:"Nepal High Grown Orthodox Whole Leaf Tea Ilam Estate Wholesale",sku:"NEP-HG-001",moq:"100 kg",stockStatus:"In Stock",specifications:{Origin:"Ilam Valley, Nepal (1,500-2,200m)",Type:"Orthodox Whole Leaf",Grade:"High Grown",Flavor:"Floral, Fruity, Muscatel",Processing:"Orthodox (Twisted Leaf)",MOQ:"100 kg"}},{id:"p8",name:"Tea Dust (Hotel Special)",slug:"tea-dust-hotel-special",category:"Dust",description:"Primary Dust Grade | Raw power for high-volume chai service. Maximum extraction, instant color, uncompromising strength.",longDescription:`
      <section>
        <p>This is raw power in a cup. Our <strong>Hotel Special Dust</strong> is not 'leftover' powder—it is premium <strong>Primary Dust (PD)</strong> graded tea designed for maximum extraction and uncompromising strength. Engineered for the high-volume 'Chai' service industry where speed, consistency, and bold flavor are non-negotiable, this is the choice of professionals serving hundreds of cups an hour without losing liquor quality.</p>
      </section>

      <section>
        <h3>The Power of Instant Infusion</h3>
        <p>Upon contact with boiling water, this tea explodes with color and strength. Because the particle size is extremely fine, the surface area for extraction is maximized—delivering full-bodied flavor the moment water hits the leaves.</p>
        <ul>
          <li><strong>Instant Color:</strong> Deep, reddish-brown liquor within seconds that signals quality at first glance.</li>
          <li><strong>Cuts Through Everything:</strong> Specifically curated to hold its strength through the thickest milk and strongest ginger/cardamom spices—the tea taste is never lost.</li>
          <li><strong>Highest Yield:</strong> Delivers the maximum number of cups per kilogram of any product in our range.</li>
          <li><strong>Cost Effective:</strong> The most economical way to serve quality tea at scale without compromise.</li>
        </ul>
      </section>

      <section>
        <h3>B2B Efficiency</h3>
        <dl>
          <dt><strong>Roadside Tea Stalls</strong></dt>
          <dd>The favorite for 'Kadak Chai'. Holds its strength perfectly even with high milk-to-water ratios. Built for the daily grind where consistency equals reputation.</dd>
          
          <dt><strong>Railway & Bus Canteens</strong></dt>
          <dd>Excellent for quick-serving environments where customers demand instant satisfaction and strong flavor.</dd>
          
          <dt><strong>Catering Services & Industrial Units</strong></dt>
          <dd>Ideal for large events, weddings, factory canteens, and industrial mass-brewing where volume meets quality.</dd>
        </dl>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Always In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days across Siliguri and surrounding regions</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Cash / UPI / Digital</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Street Vendors • Railway Canteens • Highway Dhabas • Catering Groups • Low-Cost Eateries • Industrial Canteens • Mess Kitchens
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Manish Tea Traders, Siliguri - Delivering Strength, Cup After Cup<br/>
          Last Updated: January 2026 | Commercial Series #CTC-DST-001
        </div>
      </section>
    `,priceRange:"₹120 – ₹190 / kg",imageUrl:"/images/products/dooars_tea_dust_user.jpg",imageAlt:"Primary Dust Grade Tea Hotel Special Wholesale Siliguri",sku:"CTC-DST-001",moq:"500 kg",stockStatus:"In Stock",specifications:{Type:"Primary Dust (PD) Grade",Infusion:"Instant / Maximum Strength",Color:"Deep Reddish Brown",Yield:"Highest Cups per Kg","Best For":"High-Volume Chai Service",MOQ:"500 kg"}},{id:"p9",name:"Darjeeling Orthodox",slug:"darjeeling-orthodox",category:"Orthodox",description:"The 'Champagne of Teas'. Authentic GI-tagged Darjeeling tea for export and premium retail.",longDescription:`
      <section>
        <p><strong>Manish Tea Traders</strong> offers authentic GI-tagged Darjeeling tea, celebrated worldwide as the "Champagne of Teas". Sourced from the legendary estates of the Darjeeling district, our orthodox selection represents the pinnacle of tea craftsmanship.</p>
      </section>

      <section>
        <h3>Available Flushes</h3>
        <ul>
          <li><strong>First Flush (Spring):</strong> Light, floral, and delicate. Known for its greenish leaf and unique astringency.</li>
          <li><strong>Second Flush (Summer):</strong> The "Muscatel" character. Full-bodied, amber liquor with distinct fruity notes.</li>
          <li><strong>Autumn Flush:</strong> Smooth, round, and coppery. Excellent for self-drinking.</li>
        </ul>
      </section>

      <section>
        <h3>Why Source Darjeeling from Siliguri?</h3>
        <p>Siliguri is the geographic and logistical gateway to Darjeeling. By sourcing from us, you get:</p>
        <ul>
          <li><strong>Freshness:</strong> Tea reaches our warehouse within hours of leaving the estate factory.</li>
          <li><strong>Authenticity:</strong> Direct relationships with garden managers ensure 100% genuine origin.</li>
          <li><strong>Price Advantage:</strong> Minimal transit costs compared to purchasing from Kolkata or Delhi.</li>
        </ul>
      </section>

      <section>
        <h3>Ideal For</h3>
        <ul>
          <li><strong>Export Markets:</strong> Europe, Japan, USA, and Middle East.</li>
          <li><strong>Premium Tea Lounges:</strong> High-ticket items for discerning customers.</li>
          <li><strong>Gifting Sector:</strong> Developing premium gift boxes and corporate hampers.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Seasonal Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> Worldwide Shipping Available</li>
              <li class="flex gap-2"><span>📜</span> <strong>Certifications:</strong> GI Tag, Organic (on request)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Exporters • High-End Retailers • Boutique Tea Shops • Corporate Gifting
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Estate Series #DAR-ORT-001
        </div>
      </section>
    `,priceRange:"₹800 – ₹5,000 / kg",imageUrl:"/images/products/orthodox.jpg",imageAlt:"Authentic Darjeeling Orthodox Tea Wholesale Supplier",badge:"Premium",sku:"DAR-ORT-001",moq:"50 kg",stockStatus:"In Stock",specifications:{Origin:"Darjeeling District",Type:"Orthodox Whole Leaf",Grade:"FTGFOP1 / TGBOP",Flush:"First / Second / Autumn",Certification:"GI Tag Available",MOQ:"50 kg"}},{id:"p10",name:"Premium Assam CTC Tea - All Grades",slug:"premium-assam-ctc-tea",category:"CTC",description:"Strong, malty, and full-bodied CTC tea from Upper Assam. The gold standard for milk tea.",longDescription:`
      <section>
        <p><strong>Premium Assam CTC</strong> is the backbone of the Indian tea industry. Known for its rich, malty flavor and deep ruby-red liquor, this tea is purpose-built to be enjoyed with milk and sugar.</p>
      </section>

      <section>
        <h3>Flavor Profile</h3>
        <p>Unlike Dooars tea which is lighter, Upper Assam CTC offers:</p>
        <ul>
          <li><strong>Maltiness:</strong> A distinct, biscuit-like sweet aroma.</li>
          <li><strong>Body:</strong> Thick, creamy mouthfeel.</li>
          <li><strong>Strength:</strong> A robust cup that wakes you up.</li>
        </ul>
      </section>

      <section>
        <h3>Available Grades</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Grade</th>
                <th class="p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">BP (Broken Pekoe)</td>
                <td class="p-2 border">The primary grade. Large granule, balanced flavor.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">BOP (Broken Orange Pekoe)</td>
                <td class="p-2 border">Slightly smaller, widely used in household packs.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">BOP SM</td>
                <td class="p-2 border">Superior medium grade, excellent color.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Why Choose Our Assam CTC?</h3>
        <ul>
          <li><strong>Second Flush Focus:</strong> We prioritize sourcing from the summer harvest (May-June) which produces the strongest and most quality-rich tea.</li>
          <li><strong>Vacuum Storage:</strong> Stocks are kept in controlled environments to prevent moisture absorption.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> Pan-India</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Packers • Blenders • Wholesalers • Premium Hotels
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Origin Series #ASM-CTC-001
        </div>
      </section>
    `,priceRange:"₹220 – ₹450 / kg",imageUrl:"/images/products/assam.png",imageAlt:"Premium Assam CTC Tea Wholesale Supplier India",sku:"ASM-CTC-001",moq:"500 kg",stockStatus:"In Stock",specifications:{Origin:"Upper Assam",Type:"CTC Granules",Grade:"BP / BOP / BOPSM",Flavor:"Strong, Malty","Best For":"Milk Tea / Chai",MOQ:"500 kg"}},{id:"p11",name:"Private Label Packaging",slug:"private-label-tea",category:"Packaging",description:"Launch your own tea brand. End-to-end solution: Sourcing + Blending + Packaging.",longDescription:`
      <section>
        <p><strong>Manish Tea Traders</strong> enables entrepreneurs to launch their own tea brands without the heavy investment of setting up a factory. Our private label service covers everything from the leaf to the final sealed packet.</p>
      </section>

      <section>
        <h3>How It Works</h3>
        <ol>
          <li><strong>Blend Selection:</strong> Choose from our existing best-sellers or create a custom blend exclusive to your brand.</li>
          <li><strong>Packaging Design:</strong> We assist with pouch design, sourcing printing cylinders, and regulatory compliance (FSSAI basics).</li>
          <li><strong>Production:</strong> We handle blending, weighing, filling, and sealing.</li>
          <li><strong>Delivery:</strong> Finished goods delivered to your warehouse, ready for retail.</li>
        </ol>
      </section>

      <section>
        <h3>Packaging Options</h3>
        <ul>
          <li><strong>Laminated Pouches:</strong> 50g, 100g, 250g, 500g, 1kg.</li>
          <li><strong>Box Packing:</strong> Inner foil + Outer carton.</li>
          <li><strong>PET Jars:</strong> 3kg bulk jars (popular for commercial supply brands).</li>
          <li><strong>Sample Sachets:</strong> 10g - 20g promotional packs.</li>
        </ul>
      </section>

      <section>
        <h3>Why Partner With Us?</h3>
        <ul>
          <li><strong>Low MOQs:</strong> Start with as little as 1000 kg per SKU (industry standard is often 5-10 tons).</li>
          <li><strong>Quality Consistency:</strong> Your brand's reputation is safe with our consistent blending standards.</li>
          <li><strong>Industry Guidance:</strong> We advise on pricing strategies and market trends.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Service Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>🏭</span> <strong>Capacity:</strong> 5 Tons / Day</li>
              <li class="flex gap-2"><span>🎨</span> <strong>Design Support:</strong> Available</li>
              <li class="flex gap-2"><span>🛡️</span> <strong>Compliance:</strong> FSSAI Standards</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Startups • Supermarket Chains • Distributors • Corporate Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Service Series #SVC-PLB-001
        </div>
      </section>
    `,priceRange:"Service Charge + Material Cost",imageUrl:"/images/products/private_label.png",imageAlt:"Private Label Tea Packaging Service India",sku:"SVC-PLB-001",moq:"1000 kg",stockStatus:"Service",specifications:{Service:"End-to-End Private Labeling","Packet Sizes":"50g to 1kg",Material:"Poly / Met-PET / Box","Min Volume":"1000 kg per SKU",Turnaround:"15-20 Days (after material receipt)"}},{id:"p12",name:"Tea Bags (Bulk)",slug:"tea-bags-bulk",category:"Tea Bags",description:"Wholesale supply of dip tea bags. Double chamber with knotted string. Customized branding available.",longDescription:`
      <section>
        <p>For hotels, offices, and institutions requiring convenience, we supply high-quality tea bags in bulk. Available in staple-free, knotted, Double Chamber format for superior infusion.</p>
      </section>

      <section>
        <h3>Product Features</h3>
        <ul>
          <li><strong>Filter Paper:</strong> High porosity paper sourced from top global suppliers ensures excellent infusion without papery taste.</li>
          <li><strong>Double Chamber:</strong> The twin-chamber design allows water to circulate on four sides, providing faster and stronger brewing than single chamber bags.</li>
          <li><strong>Staple-Free:</strong> Food-safe knotted technology (no metal staples).</li>
        </ul>
      </section>

      <section>
        <h3>Customization</h3>
        <ul>
          <li><strong>Tag Branding:</strong> Your logo on the tag (MOQ 100,000 pieces).</li>
          <li><strong>Envelopes:</strong> Individually paper/foil crimped envelopes for hygiene and freshness.</li>
          <li><strong>Tea Selection:</strong> Fill with Assam CTC, Darjeeling, Green Tea, or Masala Chai.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Made to Order</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 10-15 business days</li>
              <li class="flex gap-2"><span>🔢</span> <strong>MOQ:</strong> 5000 Pieces</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Hotels (In-Room) • Corporate Offices • Airlines • Catering
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Service Series #SVC-TBA-001
        </div>
      </section>
    `,priceRange:"₹0.80 – ₹2.50 / piece",imageUrl:"/images/products/tea_bags_bulk.png",imageAlt:"Wholesale Tea Bags Supplier Double Chamber",sku:"SVC-TBA-001",moq:"5000 Pieces",stockStatus:"Made to Order",specifications:{Types:"Single Chamber / Double Chamber",Material:"Non-Woven / Filter Paper","Standard Fill":"2g per bag",Tag:"Customizable with Logo","Outer Envelope":"Optional (Foil/Paper)",MOQ:"5000 Pieces"}}],uM=({productId:t,onClose:n,onRequestSample:s})=>{const r=$n.find(g=>g.id===t),[c,u]=x.useState("description");if(!r)return null;const d=$n.filter(g=>g.category===r.category&&g.id!==r.id).slice(0,3),f=g=>{g.preventDefault(),s(r.name),n()};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:o.jsxs("div",{className:"bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[o.jsxs("div",{className:"flex flex-col md:flex-row flex-grow overflow-hidden",children:[o.jsxs("div",{className:"w-full md:w-2/5 relative h-64 md:h-auto shrink-0",children:[o.jsx("img",{src:r.imageUrl,alt:r.imageAlt,className:"w-full h-full object-cover"}),o.jsx("div",{className:"absolute top-4 left-4",children:o.jsx("span",{className:"bg-tea-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md",children:r.category})})]}),o.jsxs("div",{className:"w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto",children:[o.jsxs("div",{className:"flex justify-between items-start mb-4",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-serif font-bold text-gray-900",children:r.name}),o.jsxs("p",{className:"text-sm text-gray-500 font-mono mt-1",children:["SKU: ",r.sku]})]}),o.jsx("button",{onClick:n,className:"p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500",children:o.jsx(mn,{className:"h-6 w-6"})})]}),o.jsxs("div",{className:"flex gap-2 mb-6 border-b border-gray-100",children:[o.jsx("button",{onClick:()=>u("description"),className:`pb-2 px-1 text-sm font-semibold transition-colors border-b-2 ${c==="description"?"border-tea-600 text-tea-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Description"}),o.jsx("button",{onClick:()=>u("specs"),className:`pb-2 px-1 text-sm font-semibold transition-colors border-b-2 ${c==="specs"?"border-tea-600 text-tea-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Specifications"})]}),o.jsx("div",{className:"flex-grow mb-8",children:c==="description"?o.jsxs("div",{className:"space-y-4 animate-in slide-in-from-right-2 duration-300",children:[o.jsx("div",{className:"text-gray-700 leading-relaxed prose prose-sm max-w-none",dangerouslySetInnerHTML:{__html:r.longDescription||r.description}}),o.jsxs("div",{className:"bg-tea-50 p-4 rounded-lg mt-4",children:[o.jsx("h4",{className:"font-bold text-tea-900 text-sm mb-2",children:"Why this tea?"}),o.jsxs("ul",{className:"space-y-2",children:[o.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-700",children:[o.jsx(Yn,{className:"h-4 w-4 text-tea-600"})," Premium Sourcing"]}),o.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-700",children:[o.jsx(Yn,{className:"h-4 w-4 text-tea-600"})," Wholesale Rates"]}),o.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-700",children:[o.jsx(Yn,{className:"h-4 w-4 text-tea-600"})," ",r.stockStatus]})]})]})]}):o.jsx("div",{className:"animate-in slide-in-from-right-2 duration-300",children:o.jsx("table",{className:"w-full text-sm text-left",children:o.jsxs("tbody",{children:[r.specifications&&Object.entries(r.specifications).map(([g,p])=>o.jsxs("tr",{className:"border-b border-gray-100 last:border-0 border-dashed",children:[o.jsx("td",{className:"py-2 pr-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest w-1/3",children:g}),o.jsx("td",{className:"py-2 text-gray-900 font-semibold",children:p})]},g)),o.jsxs("tr",{className:"border-b border-gray-100 border-dashed last:border-0",children:[o.jsx("td",{className:"py-2 pr-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest",children:"MOQ"}),o.jsx("td",{className:"py-2 text-gray-900 font-semibold",children:r.moq||"Contact for info"})]})]})})})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-gray-100 bg-white sticky bottom-0 z-10",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1",children:"Pricing"}),o.jsx("p",{className:"text-xl font-bold text-tea-800",children:r.priceRange})]}),o.jsxs("button",{onClick:f,className:"flex-1 bg-tea-600 hover:bg-tea-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2",children:["Enquire / Request Sample ",o.jsx(bo,{className:"h-5 w-5"})]})]})]})]}),d.length>0&&o.jsxs("div",{className:"hidden md:block bg-gray-50 p-4 border-t border-gray-200",children:[o.jsx("p",{className:"text-xs font-bold text-gray-500 uppercase mb-3",children:"You might also like"}),o.jsx("div",{className:"grid grid-cols-3 gap-4",children:d.map(g=>o.jsxs("div",{className:"flex items-center gap-3 p-2 bg-white rounded border border-gray-200 cursor-pointer hover:border-tea-400 transition-colors",onClick:()=>{document.createElement("button")},children:[o.jsx("img",{src:g.imageUrl,className:"w-10 h-10 object-cover rounded",alt:g.name}),o.jsxs("div",{className:"overflow-hidden",children:[o.jsx("p",{className:"text-sm font-semibold text-gray-900 truncate",children:g.name}),o.jsx("p",{className:"text-xs text-gray-500",children:g.category})]})]},g.id))})]})]})})},dM=({onProductSelect:t})=>{const[n,s]=x.useState(null),[r,c]=x.useState("All"),u=x.useMemo(()=>["All",...Array.from(new Set($n.map(g=>g.category)))],[]),d=x.useMemo(()=>r==="All"?$n:$n.filter(f=>f.category===r),[r]);return o.jsxs("section",{id:"products",className:"py-20 bg-tea-50",children:[o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 sm:text-4xl",children:"Our Premium Tea Collection"}),o.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"From strong CTC for tea stalls to delicate Orthodox leaves for premium cafes. Available in bulk and retail packs."})]}),o.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:u.map(f=>o.jsx("button",{onClick:()=>c(f),className:`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${r===f?"bg-tea-600 text-white shadow-lg transform scale-105":"bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-tea-300"}`,children:f},f))}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(f=>o.jsxs("div",{className:"group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col animate-in fade-in zoom-in duration-300",children:[o.jsxs("div",{className:"relative h-64 overflow-hidden shrink-0",children:[o.jsx("img",{src:f.imageUrl,alt:f.imageAlt,loading:"lazy",className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"}),f.badge&&o.jsx("div",{className:"absolute top-4 right-4 bg-tea-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md z-10",children:f.badge}),o.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:o.jsx("span",{className:"text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded uppercase tracking-wider border border-white/30",children:f.category})})]}),o.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2 group-hover:text-tea-700 transition-colors",children:f.name}),o.jsx("p",{className:"text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed",children:f.description}),o.jsxs("div",{className:"pt-4 border-t border-gray-100 mt-auto space-y-3",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-xs text-gray-500 font-medium uppercase",children:"Wholesale Rate"}),o.jsx("span",{className:"font-bold text-tea-800",children:f.priceRange})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs(fe,{to:`/product/${f.slug}/`,className:"w-full text-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition-all border border-gray-200 flex items-center justify-center gap-2 text-sm",children:[o.jsx(Rw,{className:"h-4 w-4"})," View Details"]}),o.jsx(fe,{to:"/contact-us",className:"w-full text-center bg-tea-600 hover:bg-tea-700 text-white font-medium py-2 rounded-lg transition-all border border-transparent flex items-center justify-center gap-2 text-sm",children:"Request Sample"})]})]})]})]},f.id))}),d.length===0&&o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-500 text-lg",children:"No products found in this category."})}),o.jsxs("div",{className:"mt-16 bg-white p-8 rounded-2xl shadow-sm border border-tea-100 text-center",children:[o.jsx("h3",{className:"text-2xl font-bold text-tea-900 mb-2",children:"Need a Custom Blend?"}),o.jsx("p",{className:"text-gray-600 mb-6 max-w-2xl mx-auto",children:"We offer blend customization based on liquor strength, colour, aroma, and your budget range."}),o.jsx(fe,{to:"/contact-us",className:"inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tea-800 hover:bg-tea-900 shadow-md transition-all hover:-translate-y-0.5",children:"Contact for Custom Orders"})]}),o.jsx("div",{className:"mt-8 text-center",children:o.jsxs("p",{className:"text-gray-500 text-sm",children:["Want to know more about tea grades? ",o.jsx(fe,{to:"/blog",className:"text-tea-600 hover:underline",children:"Read our Wholesale Tea Guide"})]})})]}),n&&o.jsx(uM,{productId:n,onClose:()=>s(null),onRequestSample:t})]})},qw=({selectedProduct:t})=>{const[n,s]=x.useState({name:"",phone:"",grade:"",quantity:"",location:"",notes:""});x.useEffect(()=>{t&&s(c=>({...c,grade:t}))},[t]);const r=c=>{c.preventDefault(),zc("Contact Form");const u=`*New Price Inquiry* %0A%0AName: ${n.name}%0APhone: ${n.phone}%0AGrade Required: ${n.grade}%0AMonthly Demand: ${n.quantity}%0ALocation: ${n.location}%0ANotes: ${n.notes}`,d=`https://wa.me/${et.phone}?text=${u}`;window.open(d,"_blank")};return o.jsx("section",{id:"contact",className:"py-20 bg-white",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx("span",{className:"text-tea-600 font-semibold tracking-wide uppercase text-sm",children:"Wholesale Inquiries"}),o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 sm:text-4xl mt-2",children:"Get Today’s Updated Price List"}),o.jsx("p",{className:"mt-4 text-lg text-gray-600 max-w-2xl mx-auto",children:"Share your preferred grade and monthly requirement, and we’ll provide the best wholesale rates along with sample options."})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[o.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl border border-gray-100 order-2 lg:order-1",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(Dw,{className:"h-6 w-6 text-tea-600"}),o.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"Request Quote"})]}),o.jsxs("form",{onSubmit:r,className:"space-y-5",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50",placeholder:"Enter full name",value:n.name,onChange:c=>s({...n,name:c.target.value})})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),o.jsx("input",{type:"tel",id:"phone",required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50",placeholder:"e.g. 98765 43210",value:n.phone,onChange:c=>s({...n,phone:c.target.value})})]})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"grade",className:"block text-sm font-medium text-gray-700 mb-1",children:"Tea Grade / Product Interest"}),o.jsx("input",{type:"text",id:"grade",className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50",placeholder:"e.g. CTC Tea, Rajni Gold...",value:n.grade,onChange:c=>s({...n,grade:c.target.value})})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"quantity",className:"block text-sm font-medium text-gray-700 mb-1",children:"Monthly Demand"}),o.jsx("input",{type:"text",id:"quantity",className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50",placeholder:"e.g. 50 kg, 200 kg",value:n.quantity,onChange:c=>s({...n,quantity:c.target.value})})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700 mb-1",children:"Delivery Location"}),o.jsx("input",{type:"text",id:"location",className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50",placeholder:"City / State",value:n.location,onChange:c=>s({...n,location:c.target.value})})]})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"notes",className:"block text-sm font-medium text-gray-700 mb-1",children:"Additional Notes (Optional)"}),o.jsx("textarea",{id:"notes",rows:3,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none",placeholder:"Any specific requirement about taste, colour or budget...",value:n.notes,onChange:c=>s({...n,notes:c.target.value})})]}),o.jsxs("button",{type:"submit",className:"w-full bg-tea-600 hover:bg-tea-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1",children:["Get Price List via WhatsApp ",o.jsx(MA,{className:"h-4 w-4"})]}),o.jsx("p",{className:"text-xs text-center text-gray-500 mt-2",children:"We respect your privacy. No spam."})]})]}),o.jsxs("div",{className:"space-y-8 order-1 lg:order-2",children:[o.jsxs("div",{className:"bg-tea-50 p-8 rounded-2xl border border-tea-100",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Contact Details"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"bg-white p-3 rounded-full shadow-sm text-tea-600",children:o.jsx(xg,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-gray-900",children:"Visit Us"}),o.jsxs("p",{className:"text-gray-600 mt-1",children:[et.address,", ",o.jsx("br",{}),et.city,", ",et.state," - ",et.zip]}),o.jsx("a",{href:et.mapEmbedUrl,target:"_blank",rel:"noreferrer",className:"text-tea-600 text-sm font-medium mt-1 inline-block hover:underline",children:"Get Directions"})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"bg-white p-3 rounded-full shadow-sm text-tea-600",children:o.jsx(wg,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-gray-900",children:"Call / WhatsApp"}),o.jsx("p",{className:"text-gray-800 font-bold mt-1 text-lg font-mono",children:et.displayPhone}),o.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[o.jsx(dn,{className:"h-4 w-4 text-green-600"}),o.jsx("span",{className:"text-sm text-gray-600",children:"Available for orders"})]})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"bg-white p-3 rounded-full shadow-sm text-tea-600",children:o.jsx(G3,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-gray-900",children:"Business Info"}),o.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:[o.jsx("span",{className:"font-semibold",children:"Proprietor:"})," ",kt.proprietor]}),o.jsxs("p",{className:"text-sm text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"GST No:"})," ",kt.gst]})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"bg-white p-3 rounded-full shadow-sm text-tea-600",children:o.jsx(Ew,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-gray-900",children:"Verified Seller On"}),o.jsxs("div",{className:"mt-2 space-y-2",children:[o.jsx("a",{href:kt.indiamartProfile,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-sm text-tea-700 hover:text-tea-900 hover:underline font-medium transition-colors",children:"IndiaMART Profile ↗"}),o.jsx("a",{href:kt.justdialProfile,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-sm text-tea-700 hover:text-tea-900 hover:underline font-medium transition-colors",children:"Justdial Profile ↗"})]})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"bg-white p-3 rounded-full shadow-sm text-tea-600",children:o.jsx(_c,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold text-gray-900",children:"Opening Hours"}),o.jsx("p",{className:"text-gray-600 mt-1",children:"10:00 AM – 8:00 PM"}),o.jsx("p",{className:"text-gray-500 text-sm",children:"Sunday Closed"})]})]})]})]}),o.jsx("div",{className:"h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-gray-200",children:o.jsx("iframe",{src:et.mapEmbedUrl,width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",title:"Manish Tea Traders Location",referrerPolicy:"no-referrer-when-downgrade"})})]})]})]})})},Dt=()=>{const t=new Date().getFullYear();return o.jsx("footer",{className:"bg-tea-900 text-tea-100 pt-16 pb-8 border-t border-tea-800",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 border-b border-tea-800 pb-12",children:[o.jsxs("div",{className:"space-y-4 col-span-1 md:col-span-1",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx(Lw,{className:"h-10 w-10",variant:"light"}),o.jsxs("span",{className:"text-xl font-bold font-serif text-white leading-tight",children:["Manish Tea",o.jsx("br",{}),"Traders"]})]}),o.jsxs("p",{className:"text-sm text-tea-200 leading-relaxed",children:["Your trusted partner for wholesale tea in Siliguri. Providing quality CTC and Orthodox teas since ",kt.established,"."]}),o.jsx("div",{className:"pt-2",children:o.jsxs("span",{className:"text-xs bg-tea-800 px-2 py-1 rounded text-tea-300",children:["GST: ",kt.gst]})})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8",children:"Explore"}),o.jsxs("ul",{className:"space-y-2 text-sm",children:[o.jsx("li",{children:o.jsx(fe,{to:"/",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Home"})}),o.jsx("li",{children:o.jsx(fe,{to:"/about-us",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"About Us"})}),o.jsx("li",{children:o.jsx(fe,{to:"/products/ctc-tea",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Products"})}),o.jsx("li",{children:o.jsx(fe,{to:"/blog",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Tea Blog"})}),o.jsx("li",{children:o.jsx(fe,{to:"/tea-blend-calculator",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Tea Blend Calculator"})}),o.jsx("li",{children:o.jsx(fe,{to:"/tea-grades",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Tea Grades Guide"})}),o.jsx("li",{children:o.jsx(fe,{to:"/locations",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors",children:"Service Areas"})}),o.jsx("li",{children:o.jsx(fe,{to:"/request-free-tea-samples",onClick:()=>window.scrollTo(0,0),className:"hover:text-white transition-colors font-semibold text-yellow-400",children:"Request Free Samples"})}),o.jsx("li",{className:"pt-2 border-t border-tea-800/50 mt-2",children:o.jsx(fe,{to:"/privacy-policy",onClick:()=>window.scrollTo(0,0),className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Privacy Policy"})}),o.jsx("li",{children:o.jsx(fe,{to:"/terms-of-service",onClick:()=>window.scrollTo(0,0),className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Terms of Service"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8",children:"Tea Products"}),o.jsxs("ul",{className:"space-y-2 text-sm",children:[o.jsx("li",{children:o.jsx(fe,{to:"/products/ctc-tea",className:"hover:text-white transition-colors",children:"CTC Tea"})}),o.jsx("li",{children:o.jsx(fe,{to:"/products/tea-dust",className:"hover:text-white transition-colors",children:"Tea Dust"})}),o.jsx("li",{children:o.jsx(fe,{to:"/products/orthodox-leaf",className:"hover:text-white transition-colors",children:"Darjeeling Tea"})}),o.jsx("li",{children:o.jsx(fe,{to:"/services/private-label-tea",className:"hover:text-white transition-colors",children:"Private Label"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8",children:"Supply Network"}),o.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[o.jsx("li",{children:o.jsx(fe,{to:"/wholesale-supply/siliguri-tea-supplier",className:"hover:text-white transition-colors",children:"Siliguri (HQ)"})}),o.jsx("li",{children:o.jsx(fe,{to:"/wholesale-supply/kolkata-tea-supplier",className:"hover:text-white transition-colors",children:"Kolkata"})}),o.jsx("li",{children:o.jsx(fe,{to:"/wholesale-supply/tea-wholesaler-patna-bihar",className:"hover:text-white transition-colors",children:"Patna / Bihar"})}),o.jsx("li",{children:o.jsx(fe,{to:"/wholesale-supply/tea-wholesaler-jaipur-rajasthan",className:"hover:text-white transition-colors",children:"Jaipur"})}),o.jsx("li",{children:o.jsx(fe,{to:"/locations",className:"text-tea-400 hover:text-white transition-colors font-semibold mt-2 inline-block",children:"View All Cities →"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8",children:"Contact Us"}),o.jsxs("address",{className:"not-italic space-y-3 text-sm",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-tea-400",children:"📍"}),o.jsxs("span",{children:[et.address,", ",et.city,", ",et.state]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-tea-400",children:"📞"}),o.jsx("a",{href:`tel:${et.phone}`,className:"hover:text-white",children:et.displayPhone})]}),o.jsx("div",{className:"pt-2",children:o.jsx("a",{href:et.whatsappChannel,target:"_blank",rel:"noreferrer",onClick:()=>zc("Footer"),className:"inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors",children:"Join WhatsApp →"})})]})]})]}),o.jsx("div",{className:"pt-8 text-center text-xs text-tea-400",children:o.jsxs("p",{children:["© ",t," Manish Tea Traders. All rights reserved."]})})]})})},Ea=()=>o.jsxs("a",{href:"https://forms.gle/gpZAjNoz8QAriJMe8",target:"_blank",rel:"noopener noreferrer",onClick:()=>zc("Floating Button"),className:"fixed bottom-6 right-6 z-50 bg-tea-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 group","aria-label":"Request Tea Samples",children:[o.jsx(xf,{className:"h-8 w-8"}),o.jsx("span",{className:"max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium",children:"Request Tea Samples"})]}),Fi=()=>o.jsxs("div",{className:"fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden flex",children:[o.jsxs("a",{href:`tel:${et.phone}`,className:"flex-1 flex items-center justify-center gap-2 py-3 bg-white text-tea-800 font-bold text-sm hover:bg-gray-50 active:bg-gray-100 transition-colors",children:[o.jsx(wg,{className:"h-5 w-5"}),"Call Now"]}),o.jsx("div",{className:"w-px bg-gray-300 my-2"}),o.jsxs("a",{href:`https://wa.me/${et.phone}`,target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] active:bg-[#1da851] transition-colors",children:[o.jsx(vg,{className:"h-5 w-5"}),"WhatsApp"]})]}),Rt=({title:t,description:n,keywords:s,canonicalUrl:r,image:c,noindex:u,schema:d})=>o.jsxs(s3,{children:[o.jsx("title",{children:t}),o.jsx("meta",{name:"description",content:n}),u&&o.jsx("meta",{name:"robots",content:"noindex, follow"}),s&&o.jsx("meta",{name:"keywords",content:s}),r&&o.jsx("link",{rel:"canonical",href:r}),r&&o.jsx("meta",{property:"og:url",content:r}),o.jsx("meta",{property:"og:type",content:"website"}),c&&o.jsx("meta",{property:"og:image",content:c}),o.jsx("meta",{property:"og:title",content:t}),o.jsx("meta",{property:"og:description",content:n}),o.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),o.jsx("meta",{name:"twitter:title",content:t}),o.jsx("meta",{name:"twitter:description",content:n}),c&&o.jsx("meta",{name:"twitter:image",content:c}),d&&o.jsx("script",{type:"application/ld+json",children:JSON.stringify(d)})]}),hM=()=>{const[t,n]=x.useState(!1);x.useEffect(()=>{const r=()=>{window.pageYOffset>300?n(!0):n(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(o.Fragment,{children:t&&o.jsx("button",{onClick:s,className:"fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800","aria-label":"Back to top",children:o.jsx(y3,{className:"h-5 w-5"})})})},fM=()=>{const[t,n]=x.useState(""),[s,r]=x.useState(!1),c=u=>{u.preventDefault(),t&&setTimeout(()=>{r(!0),n("")},500)};return o.jsxs("section",{className:"bg-gradient-to-br from-tea-900 to-tea-800 py-16 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none",children:o.jsxs("svg",{className:"h-full w-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[o.jsx("path",{d:"M0 100 C 30 50 70 50 100 100 Z",fill:"white"}),o.jsx("circle",{cx:"20",cy:"20",r:"10",fill:"white"}),o.jsx("circle",{cx:"80",cy:"30",r:"5",fill:"white"})]})}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h3",{className:"text-3xl font-serif font-bold text-white mb-2",children:"Stay Updated with Market Rates"}),o.jsx("p",{className:"text-tea-100 max-w-2xl mx-auto text-lg",children:"Tea prices fluctuate weekly. Don't miss out on the best deals. Choose how you want to receive updates."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",children:[o.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border-4 border-green-500 transform hover:-translate-y-1 transition-transform relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase",children:"Most Popular"}),o.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[o.jsx("div",{className:"bg-green-100 p-3 rounded-full",children:o.jsx(mA,{className:"h-8 w-8 text-green-600"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xl font-bold text-gray-900",children:"Official WhatsApp Channel"}),o.jsx("p",{className:"text-sm text-gray-500",children:"Join 1000+ traders for instant alerts."})]})]}),o.jsxs("ul",{className:"space-y-3 mb-6",children:[o.jsxs("li",{className:"flex items-center gap-2 text-gray-700 text-sm",children:[o.jsx(Yn,{className:"h-4 w-4 text-green-500"})," Weekly Price Lists"]}),o.jsxs("li",{className:"flex items-center gap-2 text-gray-700 text-sm",children:[o.jsx(Yn,{className:"h-4 w-4 text-green-500"})," New Arrival Notifications"]}),o.jsxs("li",{className:"flex items-center gap-2 text-gray-700 text-sm",children:[o.jsx(Yn,{className:"h-4 w-4 text-green-500"})," Exclusive Deals"]})]}),o.jsxs("a",{href:et.whatsappChannel,target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2",children:["Join Channel Now ",o.jsx(bo,{className:"h-4 w-4"})]}),o.jsx("p",{className:"text-xs text-center text-gray-400 mt-2",children:"One-click join. No spam."})]}),o.jsxs("div",{className:"bg-tea-800/50 backdrop-blur-md rounded-2xl p-8 border border-tea-700/50 flex flex-col justify-center",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"bg-tea-700 p-3 rounded-full",children:o.jsx(cA,{className:"h-6 w-6 text-tea-200"})}),o.jsx("h4",{className:"text-xl font-bold text-white",children:"Weekly Email Digest"})]}),o.jsx("p",{className:"text-tea-100 text-sm mb-6 leading-relaxed",children:"Prefer email? Get a detailed market analysis and rate report delivered to your inbox every Monday morning."}),s?o.jsxs("div",{className:"bg-green-500/20 rounded-lg p-4 flex items-center gap-3 border border-green-400/30 text-white animate-in fade-in",children:[o.jsx("div",{className:"bg-green-500 rounded-full p-1",children:o.jsx(Yn,{className:"h-4 w-4"})}),o.jsx("span",{className:"font-medium",children:"Subscribed successfully!"})]}):o.jsxs("form",{onSubmit:c,className:"space-y-3",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-tea-300",children:o.jsx(w3,{className:"h-5 w-5"})}),o.jsx("input",{type:"email",required:!0,placeholder:"Enter your email address",className:"w-full pl-10 pr-4 py-3 rounded-lg border border-tea-600 bg-tea-900/50 text-white placeholder-tea-400 focus:ring-2 focus:ring-tea-400 focus:border-transparent outline-none",value:t,onChange:u=>n(u.target.value)})]}),o.jsx("button",{type:"submit",className:"w-full bg-tea-100 hover:bg-white text-tea-900 font-bold py-3 px-6 rounded-lg transition-colors shadow-lg",children:"Subscribe via Email"})]})]})]})]})]})},gM=tt.lazy(()=>pg(()=>import("./Gallery-DY61fJKu.js"),[])),mM=tt.lazy(()=>pg(()=>import("./FAQ-OtonttnV.js"),[])),pM=tt.lazy(()=>pg(()=>Promise.resolve().then(()=>RM),void 0)),Xb=()=>o.jsx("div",{className:"py-20 flex justify-center items-center bg-gray-50",children:o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tea-600"})}),yM=()=>{const t=mo(),n=s=>{const r=document.getElementById("contact");r&&r.scrollIntoView({behavior:"smooth"})};return o.jsxs("div",{className:"min-h-screen flex flex-col font-sans pb-16 md:pb-0",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow",children:[o.jsx(Rt,{title:"Manish Tea Traders | Premium Wholesale Tea Supplier Siliguri & Pan India",description:"Buy garden-fresh CTC and Dust tea directly from Siliguri. Serving West Bengal, Bihar & UP since 2004. Get today's wholesale price list.",canonicalUrl:"https://teatraders.info/",schema:{"@context":"https://schema.org","@graph":[{"@type":"WholesaleStore",name:"Manish Tea Traders",image:"https://teatraders.info/logo.png",priceRange:"₹₹",address:{"@type":"PostalAddress",streetAddress:"Ganga Nagar, Mahananda Para",addressLocality:"Siliguri",addressRegion:"WB",postalCode:"734005",addressCountry:"IN"},geo:{"@type":"GeoCoordinates",latitude:26.7271,longitude:88.3953},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"20:00"},telephone:"+917001958588"},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://teatraders.info"}]}]}}),o.jsx(lM,{}),o.jsx(zw,{}),o.jsx(dM,{onProductSelect:n,onNavigateToBlog:()=>t("/blog")}),o.jsx(x.Suspense,{fallback:o.jsx(Xb,{}),children:o.jsx(gM,{})}),o.jsx("div",{id:"contact",children:o.jsx(qw,{selectedProduct:""})}),o.jsxs(x.Suspense,{fallback:o.jsx(Xb,{}),children:[o.jsx(pM,{}),o.jsx(mM,{})]}),o.jsx(fM,{})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(hM,{}),o.jsx(Fi,{})]})},bM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:"About Manish Tea Traders | Heritage & Sourcing | Siliguri Tea Wholesaler",description:"Learn about our journey from a small tea shop to a major wholesale supplier in Siliguri. Direct sourcing from Assam & Darjeeling gardens.",canonicalUrl:"https://teatraders.info/about-us/",image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200",schema:{"@context":"https://schema.org","@graph":[{"@type":"AboutPage",mainEntity:{"@type":"WholesaleStore",name:"Manish Tea Traders",foundingDate:"2004",founder:{"@type":"Person",name:"Jaleshwar Ray"},description:"Premium wholesale tea supplier based in Siliguri, West Bengal.",areaServed:["West Bengal","Bihar","Uttar Pradesh","Jharkhand"],knowsAbout:["Tea Tasting","Tea Blending","Wholesale Distribution"]}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://teatraders.info"},{"@type":"ListItem",position:2,name:"About Us",item:"https://teatraders.info/about-us/"}]}]}}),o.jsx(zw,{})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(Fi,{})]}),xM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:"Contact Us | Wholesale Tea Enquiries | Manish Tea Traders",description:"Contact Manish Tea Traders for bulk tea orders. Phone: +91 70019 58588. Visit us in Siliguri, West Bengal.",canonicalUrl:"https://teatraders.info/contact-us/",image:"https://teatraders.info/logo.png"}),o.jsx(qw,{selectedProduct:""})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(Fi,{})]}),vM={"ctc-tea":{name:"CTC Tea",title:"Wholesale CTC Tea Suppliers | BP, OF & Blends",desc:"Premium Assam and Dooars CTC tea aggregates. Available in loose sacks (30kg). Consistent blend for retailers.",filter:["CTC","Blend"]},"tea-dust":{name:"Tea Dust",title:"Tea Dust Wholesale for Hotels & Canteens",desc:"Strong Red Tea Dust (PD) for hotels, chaiwalas and canteens. Rapid color release and high strength.",filter:["Dust"]},"orthodox-leaf":{name:"Orthodox Leaf",title:"Premium Orthodox & Darjeeling Leaf Tea",desc:"High-grown Himalayan leaf tea. First flush, second flush and green tea for premium cafes and gifting.",filter:["Orthodox"]}},wM=()=>{const{slug:t}=Pc(),n=t?vM[t]:null;if(!n)return o.jsx(hg,{to:"/products/ctc-tea",replace:!0});const s=$n.filter(r=>n.filter.includes(r.category));return o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:n.title,description:n.desc,canonicalUrl:`https://teatraders.info/products/${t}/`,image:`https://teatraders.info/images/products/${t.replace("-","_")}_user.jpg`,schema:[{"@context":"https://schema.org","@type":"CollectionPage",name:n.title,description:n.desc,url:window.location.href},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://teatraders.info/"},{"@type":"ListItem",position:2,name:"Products",item:"https://teatraders.info/home#products"},{"@type":"ListItem",position:3,name:n.name,item:window.location.href}]}]}),o.jsx("div",{className:"bg-tea-50 py-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("span",{className:"text-tea-600 font-bold tracking-wide uppercase text-sm",children:"Wholesale Supply"}),o.jsx("h1",{className:"text-4xl font-serif font-bold text-tea-900 mt-2 mb-6",children:n.title}),o.jsx("p",{className:"text-lg text-gray-700 max-w-3xl leading-relaxed",children:n.desc})]})}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:s.map(r=>o.jsxs("div",{className:"group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",children:[o.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden",children:[o.jsx("img",{src:r.imageUrl,alt:r.imageAlt,loading:"lazy",width:"400",height:"300",className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"}),o.jsx("div",{className:"absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm",children:r.category})]}),o.jsxs("div",{className:"p-6",children:[o.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:r.name}),o.jsx("p",{className:"text-gray-600 mb-4 text-sm line-clamp-3",children:r.description}),o.jsxs("div",{className:"space-y-3 pt-4 border-t border-gray-100",children:[o.jsxs("div",{className:"flex justify-between items-center text-sm",children:[o.jsx("span",{className:"text-gray-500",children:"MOQ"}),o.jsx("span",{className:"font-semibold text-gray-900",children:r.moq})]}),o.jsxs("div",{className:"flex justify-between items-center text-sm",children:[o.jsx("span",{className:"text-gray-500",children:"Price"}),o.jsx("span",{className:"font-bold text-tea-800",children:r.priceRange})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-4",children:[o.jsx(fe,{to:`/product/${r.slug}/`,className:"block w-full text-center bg-white text-gray-700 border border-gray-200 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors",children:"Details"}),o.jsx("a",{href:"/contact-us",className:"block w-full text-center bg-tea-600 text-white font-medium py-3 rounded-lg hover:bg-tea-700 transition-colors",children:"Quote"})]})]})]})]},r.id))}),o.jsxs("div",{className:"mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200",children:[o.jsxs("h2",{className:"text-2xl font-bold font-serif text-tea-900 mb-6",children:["Why Source ",n.name," From Us?"]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-lg mb-2",children:"Direct Garden Access"}),o.jsxs("p",{className:"text-gray-600 text-sm",children:["We buy directly from auctions in Siliguri and Guwahati, ensuring you get fresh ",n.name.toLowerCase()," without middleman margins."]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-lg mb-2",children:"Consistent Blending"}),o.jsx("p",{className:"text-gray-600 text-sm",children:'Our computerized blending ensures that your "Gold Blend" tastes the same in January as it does in June.'})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-lg mb-2",children:"Logistics Support"}),o.jsx("p",{className:"text-gray-600 text-sm",children:"We have tied up with transport carriers to deliver bulk sacks to Bihar, UP, and Jharkhand within 3-5 days."})]})]}),o.jsxs("div",{className:"mt-12 pt-12 border-t border-gray-200",children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Explore Other Tea Categories"}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[o.jsxs("a",{href:"/products/ctc-tea",className:"block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all",children:[o.jsx("span",{className:"block font-bold text-tea-900",children:"CTC Tea"}),o.jsx("span",{className:"text-xs text-gray-500",children:"For Households"})]}),o.jsxs("a",{href:"/products/tea-dust",className:"block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all",children:[o.jsx("span",{className:"block font-bold text-tea-900",children:"Tea Dust"}),o.jsx("span",{className:"text-xs text-gray-500",children:"For Hotels"})]}),o.jsxs("a",{href:"/products/orthodox-leaf",className:"block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all",children:[o.jsx("span",{className:"block font-bold text-tea-900",children:"Orthodox Leaf"}),o.jsx("span",{className:"text-xs text-gray-500",children:"Premium"})]}),o.jsxs("a",{href:"/services/private-label-tea",className:"block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all",children:[o.jsx("span",{className:"block font-bold text-tea-900",children:"Private Label"}),o.jsx("span",{className:"text-xs text-gray-500",children:"Custom Brand"})]})]})]})]})]})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(Fi,{})]})},SM=()=>{const{slug:t}=Pc(),n=mo(),s=$n.find(r=>r.slug===t);return x.useEffect(()=>{window.scrollTo(0,0)},[t]),s?o.jsxs("div",{className:"min-h-screen flex flex-col bg-stone-50 font-sans",children:[o.jsx(Et,{}),o.jsx(Rt,{title:`${s.name} | Wholesale Tea Supplier Siliguri`,description:s.description,canonicalUrl:`https://teatraders.info/product/${s.slug}/`,image:s.imageUrl,schema:{"@context":"https://schema.org","@type":"Product",name:s.name,image:`https://teatraders.info${s.imageUrl}`,description:s.description,sku:s.sku,offers:{"@type":"AggregateOffer",priceCurrency:"INR",lowPrice:s.priceRange.includes("₹")?s.priceRange.split("–")[0].replace(/[^\d.]/g,""):"130",availability:"https://schema.org/InStock",offerCount:"1"}}}),o.jsx("main",{className:"flex-grow pt-24 pb-16",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("nav",{className:"flex mb-8 text-sm text-stone-500",children:[o.jsx(fe,{to:"/",className:"hover:text-tea-600",children:"Home"}),o.jsx("span",{className:"mx-2",children:"/"}),o.jsx(fe,{to:`/products/${s.category.toLowerCase().replace(" ","-")}`,className:"hover:text-tea-600",children:s.category}),o.jsx("span",{className:"mx-2",children:"/"}),o.jsx("span",{className:"text-stone-800 font-medium",children:s.name})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",children:[o.jsxs("div",{className:"relative group",children:[o.jsx("div",{className:"aspect-square overflow-hidden rounded-3xl bg-white shadow-xl border border-stone-100",children:o.jsx("img",{src:s.imageUrl,alt:s.imageAlt,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"})}),s.badge&&o.jsx("div",{className:"absolute top-6 right-6 bg-tea-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10",children:s.badge})]}),o.jsxs("div",{className:"flex flex-col",children:[o.jsx("div",{className:"mb-2",children:o.jsx("span",{className:"inline-block px-3 py-1 bg-tea-100 text-tea-800 text-xs font-bold rounded-full uppercase tracking-wider",children:s.category})}),o.jsx("h1",{className:"text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight",children:s.name}),o.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[o.jsx("span",{className:"text-2xl font-bold text-tea-800",children:s.priceRange}),o.jsx("span",{className:"text-stone-400 text-sm italic",children:"(Wholesale Rates)"})]}),o.jsxs("p",{className:"text-stone-600 text-lg mb-8 leading-relaxed italic border-l-4 border-tea-200 pl-4",children:['"',s.description,'"']}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8",children:[o.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center",children:[o.jsx(io,{className:"text-tea-600 mb-2",size:20}),o.jsx("span",{className:"text-xs text-stone-400 uppercase font-bold tracking-tighter",children:"SKU"}),o.jsx("span",{className:"text-sm font-semibold text-stone-800",children:s.sku})]}),o.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center",children:[o.jsx(OA,{className:"text-tea-600 mb-2",size:20}),o.jsx("span",{className:"text-xs text-stone-400 uppercase font-bold tracking-tighter",children:"MOQ"}),o.jsx("span",{className:"text-sm font-semibold text-stone-800",children:s.moq})]}),o.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center",children:[o.jsx(Ow,{className:"text-tea-600 mb-2",size:20}),o.jsx("span",{className:"text-xs text-stone-400 uppercase font-bold tracking-tighter",children:"Availability"}),o.jsx("span",{className:"text-sm font-semibold text-stone-800",children:s.stockStatus})]})]}),o.jsxs("div",{className:"space-y-4 mb-8",children:[o.jsxs(fe,{to:"/contact-us",className:"w-full flex items-center justify-center gap-2 bg-tea-700 hover:bg-tea-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:translate-y-[-2px] active:translate-y-[0px]",children:["Get Bulk Quotation ",o.jsx(bo,{size:20})]}),o.jsx("button",{onClick:()=>n("/contact-us"),className:"w-full flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 hover:border-tea-600 font-bold py-4 rounded-2xl transition-all",children:"Request Samples"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-t border-stone-200",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"bg-tea-50 p-2 rounded-lg text-tea-700",children:o.jsx(Sg,{size:20})}),o.jsx("span",{className:"text-sm font-medium text-stone-700",children:"Pan India Delivery"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"bg-tea-50 p-2 rounded-lg text-tea-700",children:o.jsx(Rw,{size:20})}),o.jsx("span",{className:"text-sm font-medium text-stone-700",children:"Direct Estate Sourcing"})]})]})]})]}),o.jsxs("div",{className:"mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16",children:[o.jsxs("div",{className:"lg:col-span-2",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-stone-900 mb-6",children:"Detailed Product Overview"}),o.jsx("div",{className:"prose prose-stone max-w-none text-stone-600 leading-relaxed text-lg",dangerouslySetInnerHTML:{__html:s.longDescription||""}})]}),o.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-xl border border-stone-100 lg:sticky lg:top-28",children:[o.jsxs("h3",{className:"text-lg font-bold text-stone-900 mb-4 border-b border-stone-100 pb-3 flex items-center gap-2",children:[o.jsx(io,{className:"text-tea-600",size:20})," Technical Specs"]}),o.jsx("dl",{className:"space-y-2",children:Object.entries(s.specifications).map(([r,c])=>o.jsxs("div",{className:"flex justify-between items-start py-1.5 border-b border-stone-50 last:border-0 border-dashed",children:[o.jsx("dt",{className:"text-[10px] font-bold text-stone-400 uppercase tracking-widest pt-1",children:r}),o.jsx("dd",{className:"text-sm font-semibold text-stone-800 text-right max-w-[60%] leading-tight",children:c})]},r))})]})]}),o.jsxs("div",{className:"mt-24",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-stone-900 mb-8",children:"Related Tea Collections"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:$n.filter(r=>r.id!==s.id&&r.category===s.category).slice(0,4).map(r=>o.jsxs(fe,{to:`/product/${r.slug}`,className:"bg-white p-4 rounded-2xl border border-stone-100 hover:shadow-lg transition-all",children:[o.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full aspect-square object-cover rounded-xl mb-4"}),o.jsx("h4",{className:"font-bold text-stone-800",children:r.name}),o.jsx("p",{className:"text-xs text-stone-400 font-bold uppercase tracking-tighter mt-1",children:r.category})]},r.id))})]})]})}),o.jsx(Dt,{}),o.jsx(Ea,{})]}):o.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center bg-stone-50",children:[o.jsx("h1",{className:"text-2xl font-serif text-stone-800 mb-4",children:"Product Not Found"}),o.jsxs(fe,{to:"/",className:"text-tea-600 hover:underline flex items-center gap-2",children:[o.jsx(B3,{size:20})," Back to Home"]})]})},TM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:"Private Label Tea Packaging Services India | Start Your Tea Brand",description:"Launch your own tea brand with our Private Label services. We handle sourcing, blending, and packaging. Low MOQ for startups.",canonicalUrl:"https://teatraders.info/services/private-label-tea/",image:"https://images.unsplash.com/photo-1567922045116-2a00fae2ed03",schema:{"@context":"https://schema.org","@type":"Service",name:"Private Label Tea Packaging",provider:{"@type":"WholesaleStore",name:"Manish Tea Traders",image:"https://teatraders.info/logo.png"},serviceType:"Co-packing and Private Labeling",areaServed:{"@type":"Country",name:"India"},description:"End-to-end private label tea manufacturing service including sourcing, blending, and custom packaging.",offers:{"@type":"Offer",price:"0",priceCurrency:"INR",availability:"https://schema.org/InStock"}}}),o.jsxs("section",{className:"relative py-24 flex items-center justify-center overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2000&auto=format&fit=crop",alt:"Tea Packaging Factory",className:"w-full h-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"})]}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[o.jsx("span",{className:"inline-block bg-tea-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-lg border border-tea-400",children:"For Startups & Brands"}),o.jsxs("h1",{className:"text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md",children:["Launch Your Own ",o.jsx("span",{className:"text-tea-400",children:"Tea Brand"})]}),o.jsx("p",{className:"text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed",children:"Comprehensive private label tea packaging services. We handle sourcing, blending, and packing—so you can focus on selling."}),o.jsxs("a",{href:"#contact",onClick:t=>{var n;t.preventDefault(),(n=document.getElementById("contact"))==null||n.scrollIntoView({behavior:"smooth"})},className:"bg-white text-tea-900 font-bold px-8 py-4 rounded-xl hover:bg-tea-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2",children:[o.jsx(io,{className:"h-5 w-5 text-tea-600"}),"Get A Quote"]})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mb-6",children:"How It Works"}),o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{className:"flex gap-4",children:[o.jsx("div",{className:"shrink-0 bg-tea-100 p-3 rounded-lg h-fit",children:o.jsx("span",{className:"text-xl font-bold text-tea-800",children:"1"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"Choose Your Blend"}),o.jsx("p",{className:"text-gray-600",children:"Select from our catalogue of CTC, Dust, or Orthodox teas. We can create custom blends (e.g., Hotel Blend, Premium Household Blend) to match your target price."})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx("div",{className:"shrink-0 bg-tea-100 p-3 rounded-lg h-fit",children:o.jsx("span",{className:"text-xl font-bold text-tea-800",children:"2"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"Select Packaging"}),o.jsx("p",{className:"text-gray-600",children:"Identify your packaging format: Stand-up Pouches, Box Pack, or Jars. We support sizes from 50g to 1kg."})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx("div",{className:"shrink-0 bg-tea-100 p-3 rounded-lg h-fit",children:o.jsx("span",{className:"text-xl font-bold text-tea-800",children:"3"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"We Pack & Ship"}),o.jsx("p",{className:"text-gray-600",children:"Once your design is printed, we handle the filling and sealing. The finished product is shipped directly to your warehouse ready for retail."})]})]})]})]}),o.jsxs("div",{className:"bg-gray-50 p-8 rounded-2xl border border-gray-200",children:[o.jsx("h3",{className:"text-xl font-bold mb-6",children:"Why Partner With Us?"}),o.jsx("ul",{className:"space-y-4",children:["Low Minimum Order Quantity (MOQ) for startups","FSSAI Compliant Facility","In-house Blending Expert","Transparent Pricing Model"].map((t,n)=>o.jsxs("li",{className:"flex items-center gap-3",children:[o.jsx(dn,{className:"h-5 w-5 text-green-500"}),o.jsx("span",{className:"text-gray-700 font-medium",children:t})]},n))}),o.jsxs("div",{className:"mt-8 pt-8 border-t border-gray-200",children:[o.jsx("h4",{className:"font-bold text-gray-900 mb-2",children:"Ready to discuss details?"}),o.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"Call us to discuss MOQs and printing costs."}),o.jsx(fe,{to:"/contact-us",className:"text-tea-600 font-bold hover:underline",children:"Contact Sales →"})]})]})]})})]}),o.jsx(Dt,{}),o.jsx(Ea,{})]}),Vw=[{id:"siliguri",city:"Siliguri",slug:"siliguri-tea-supplier",title:"Local Wholesale Tea Supply Siliguri | Direct Garden Fresh CTC & Dust",metaDescription:"Leading wholesale tea supplier in Siliguri. Fresh CTC, Assam, and Darjeeling tea sourced directly from gardens at unbeatable prices. Visit our tasting center.",heading:"Local Wholesale Tea Supply Siliguri | Direct Garden Fresh CTC & Dust",content:`
      <p>Welcome to <strong>Manish Tea Traders</strong>, your trusted wholesale tea partner in Siliguri, West Bengal. As one of the leading tea suppliers in North Bengal, we bring you fresh, authentic teas straight from the gardens of Dooars, Terai, and Darjeeling at wholesale prices that cut out the middleman.</p>
      
      <h3>Why Siliguri is India's Tea Trading Hub</h3>
      <p>Siliguri isn't just another city—it's the beating heart of India's tea industry. Nestled at the foothills of the Himalayas, our city serves as the primary trading center for tea produced across North Bengal and the Northeast. Every week, thousands of kilograms of premium tea pass through the <strong>Siliguri Tea Auction Centre (STAC)</strong>, making this the most important location for anyone serious about quality tea sourcing.</p>

      <h3>The Manish Tea Traders Difference</h3>
      
      <h4>Location, Location, Location</h4>
      <p>Our warehouse and tasting center are strategically located in Mahananda Para, Siliguri—walking distance from STAC. This isn't by accident. Being here means we access freshly auctioned tea before it travels hundreds of kilometers to reach wholesalers in Delhi, Kolkata, or Mumbai. When you buy from us, you're getting tea that was plucked and processed just days ago, not weeks or months.</p>

      <h4>Fresh from Garden to Godown</h4>
      <p>Unlike suppliers who operate from distant cities, we participate directly in weekly auctions. The moment premium lots from renowned gardens hit the auction floor, we're there evaluating, tasting, and bidding. Our buyers have decades of experience identifying the best value-for-money lots across different grades and flush periods.</p>

      <h3>Who We Serve: Our Wholesale Tea Customers</h3>
      
      <h4>Local Tea Retailers in Siliguri</h4>
      <p>If you run a tea shop in Khalpara, Sevoke Road, Hill Cart Road, Pradhan Nagar, or anywhere in Siliguri, we understand your daily needs. We supply loose tea in quantities from 50 kg to 500 kg, perfect for retailers who need consistent quality without tying up working capital in large inventories.</p>

      <h4>Interstate Bulk Tea Buyers</h4>
      <p>We regularly dispatch full truckloads (9-ton to 15-ton capacity) to wholesale markets across Bihar, Uttar Pradesh, Rajasthan, Jharkhand, and Chhattisgarh. Our packaging options include 40 kg jute bags, 50 kg HDPE bags, or custom packaging as per your requirements.</p>

      <h4>Tea Packaging Companies & Brand Owners</h4>
      <p>Starting your own tea brand? We supply unblended raw material—CTC Leaf, CTC Dust, Orthodox Leaf, and specialty teas—that you can blend and package under your label. We work with several emerging brands who trust us for consistent quality and competitive pricing.</p>

      <h4>Tea Exporters & International Traders</h4>
      <p>For buyers looking to export authentic Indian tea, we provide documentation support, quality certificates, and can arrange shipments to ICD Siliguri or directly to Kolkata Port.</p>

      <h3>Our Tea Varieties: Sourced from Premier Gardens</h3>
      
      <h4>CTC Tea (Crush, Tear, Curl)</h4>
      <ul>
        <li><strong>CTC Leaf Grade</strong> (BOP, BOPSM, PF grades)</li>
        <li><strong>CTC Dust Grade</strong> (PD, CD, BP grades)</li>
        <li><strong>Sourced from:</strong> Dooars and Terai gardens</li>
        <li><strong>Best for:</strong> Strong, full-bodied chai</li>
      </ul>

      <h4>Orthodox Tea</h4>
      <ul>
        <li>Whole leaf black tea</li>
        <li>Premium orthodox from Darjeeling and Terai</li>
        <li>Various flush options: First Flush, Second Flush, Monsoon, Autumn</li>
        <li><strong>Best for:</strong> Connoisseurs and specialty tea shops</li>
      </ul>

      <h4>Assam Tea Varieties</h4>
      <p>We maintain steady inventory of Assam CTC and Orthodox teas sourced through direct linkages with Assam gardens and auctions.</p>

      <h4>Darjeeling Tea</h4>
      <p>Limited quantities of authenticated Darjeeling tea available during peak seasons. Perfect for premium retail segments.</p>

      <h3>Visit Our Tasting Center Before You Buy</h3>
      <p>We believe in complete transparency. That's why we invite every potential customer—whether you're buying 50 kg or 5000 kg—to visit our office in Mahananda Para.</p>
      
      <p><strong>What to Expect:</strong></p>
      <ul>
        <li>Taste 50+ varieties of tea across different grades and gardens</li>
        <li>Compare freshness, liquor color, aroma, and strength</li>
        <li>Understand pricing based on current auction rates</li>
        <li>Get expert guidance on which tea suits your market</li>
        <li>No pressure, no obligation—just honest tea talk over cups of chai</li>
      </ul>

      <h3>Competitive Wholesale Pricing in Siliguri</h3>
      <p>Our pricing is simple and transparent. Since we source directly from auctions and eliminate middlemen, we pass those savings to you. Prices vary based on:</p>
      <ul>
        <li>Garden origin and reputation</li>
        <li>Tea grade (leaf vs. dust)</li>
        <li>Flush and season</li>
        <li>Current auction trends</li>
        <li>Order quantity</li>
      </ul>
      <p>We update our rate lists weekly based on fresh auction purchases.</p>

      <h3>How to Order Wholesale Tea from Manish Tea Traders</h3>
      <ol>
        <li><strong>Step 1:</strong> Contact us via phone or visit our Mahananda Para office</li>
        <li><strong>Step 2:</strong> Tell us your requirements (quantity, grade, delivery location)</li>
        <li><strong>Step 3:</strong> Visit for tasting session (recommended) or request samples</li>
        <li><strong>Step 4:</strong> Receive quote based on current stock and auction rates</li>
        <li><strong>Step 5:</strong> Confirm order and payment terms</li>
        <li><strong>Step 6:</strong> We arrange packaging and dispatch within 24-48 hours</li>
      </ol>

      <h3>Delivery & Logistics Across India</h3>
      <ul>
        <li><strong>Local Siliguri delivery:</strong> Same-day or next-day via our own vehicles</li>
        <li><strong>West Bengal:</strong> 2-4 days via trusted transport partners</li>
        <li><strong>Bihar, UP, Jharkhand:</strong> 3-5 days</li>
        <li><strong>Other states:</strong> 5-7 days depending on destination</li>
        <li><strong>Bulk orders:</strong> Full truck dispatch arranged with loading supervision</li>
      </ul>

      <h3>Why Choose Manish Tea Traders as Your Wholesale Tea Supplier?</h3>
      <ul>
        <li>✓ <strong>Direct auction access</strong> – Freshest tea, best prices</li>
        <li>✓ <strong>Decades of experience</strong> – Three generations in tea trading</li>
        <li>✓ <strong>Quality assurance</strong> – Every lot tasted and approved</li>
        <li>✓ <strong>Flexible quantities</strong> – From 10 kg to full truckloads</li>
        <li>✓ <strong>Honest pricing</strong> – No hidden charges, clear invoicing</li>
        <li>✓ <strong>Expert guidance</strong> – We help you choose the right tea for your market</li>
        <li>✓ <strong>Quick dispatch</strong> – Fast turnaround on confirmed orders</li>
      </ul>

      <h3>Contact Manish Tea Traders Today</h3>
      <p><strong>Address:</strong> Manish Tea Traders, Mahananda Para, Siliguri, West Bengal – 734005</p>
      <p>Ready to source premium wholesale tea at unbeatable prices? Visit us for a tasting session or call to discuss your requirements. Whether you need 50 kg for your local shop or 10 tons for interstate distribution, we've got the quality, variety, and pricing to support your business.</p>

      <p><em>Keywords: wholesale tea suppliers Siliguri, CTC tea wholesale, Assam tea suppliers, Darjeeling tea wholesale, bulk tea Siliguri, tea auction Siliguri, Dooars tea wholesale, Terai tea suppliers, North Bengal tea traders, tea wholesalers West Bengal</em></p>
    `},{id:"kolkata",city:"Kolkata",slug:"kolkata-tea-supplier",title:"Wholesale Tea Suppliers in Kolkata | Direct from Siliguri Gardens",metaDescription:"Premium wholesale tea delivery to Kolkata. Fresh CTC, Assam, and Darjeeling tea from Siliguri auctions. Serving Burrabazar, Salt Lake, and all KMC areas.",heading:"Wholesale Tea Suppliers in Kolkata – Fresh from North Bengal to Your Doorstep",content:`
      <p>In Kolkata, tea isn't just a beverage—it's woven into the fabric of daily life. From the iconic roadside "cha" stalls to corporate canteens serving thousands of cups, the City of Joy runs on quality tea. <strong>Manish Tea Traders</strong> connects Kolkata's vibrant tea culture directly to the source: the fresh gardens and auctions of North Bengal.</p>

      <h3>Understanding Kolkata's Unique Tea Market</h3>
      <p>Kolkata consumers are discerning. They know the difference between garden-fresh tea and stale stock that's been sitting in warehouses for months. That's why we've built our reputation on speed and freshness. Our tea reaches Kolkata within 24-48 hours of leaving Siliguri, ensuring you get the same quality that auction buyers in North Bengal enjoy.</p>

      <h3>Serving Every Corner of the Kolkata Metropolitan Area</h3>
      
      <h4>Burrabazar & Posta – The Wholesale Heartland</h4>
      <p>The bustling lanes of Burrabazar have been Kolkata's trading nerve center for generations. We supply established trading houses here with bulk consignments in traditional jute bags (30-35kg) and modern HDPE packaging. Our competitive auction-linked pricing helps you maintain healthy margins while serving your extensive retail network.</p>

      <h4>Corporate Canteens & Office Suppliers</h4>
      <p>From Dalhousie to Salt Lake Sector V, Kolkata's office districts consume massive quantities of tea daily. We've developed special "Office Strength" blends that brew quickly, maintain consistent taste across large batches, and deliver the robust flavor that keeps employees energized throughout the workday.</p>

      <h4>Neighborhood Retailers Across KMC</h4>
      <p>Whether you're running a grocery store in Garia, a tea shop in Dum Dum, or a provisions store in Behala, we understand your challenge: maintaining quality while managing inventory costs. Our flexible order quantities (starting from just 50kg) mean you can stock fresh tea without tying up capital in excessive inventory.</p>

      <h3>What Makes Our Kolkata Service Different</h3>
      <ul>
        <li><strong>Express Logistics:</strong> Dedicated transport routes ensure your tea arrives fresh, not weeks old</li>
        <li><strong>Door Delivery Option:</strong> For orders above 500kg, we deliver directly to your godown—no transport depot hassles</li>
        <li><strong>Kolkata-Specific Blends:</strong> We understand local preferences for color, strength, and aroma</li>
        <li><strong>Flexible Payment Terms:</strong> Credit facilities available for established businesses with trade references</li>
        <li><strong>Quality Consistency:</strong> Same taste, cup after cup, month after month</li>
      </ul>

      <h3>Popular Products for Kolkata Market</h3>
      <p>Based on decades of serving Kolkata customers, these are our most requested varieties:</p>
      <ul>
        <li><strong>Strong CTC Dust:</strong> Perfect for the traditional "kadak cha" that Kolkata loves</li>
        <li><strong>Premium Assam Leaf:</strong> For households and upmarket retailers in South Kolkata</li>
        <li><strong>Darjeeling Orthodox:</strong> Seasonal supplies for gift shops and premium stores</li>
        <li><strong>Family Blend:</strong> Our signature mix that balances strength, aroma, and value</li>
      </ul>

      <h3>Easy Ordering for Kolkata Buyers</h3>
      <p>Getting started is simple. Call us to discuss your requirements, and we'll arrange sample dispatch to Kolkata for your evaluation. Once you're satisfied, we maintain your preferred blend profile in our system, ensuring every subsequent order matches your exact specifications.</p>

      <p>For urgent requirements, we offer same-day dispatch from Siliguri, with goods typically reaching Kolkata transport hubs by the next morning. We work with reliable transporters who understand the importance of timely delivery in the fast-paced Kolkata market.</p>

      <p><strong>Ready to upgrade your tea supply?</strong> Contact Manish Tea Traders today and experience the difference that fresh, auction-quality tea makes to your business.</p>
    `},{id:"assam",city:"Assam",slug:"assam-tea-supplier",title:"Assam Tea Wholesale Supplier | Authentic Malty CTC Direct from Gardens",metaDescription:"Pure Assam tea wholesale supplier. Authentic malty CTC and Orthodox tea from Brahmaputra valley gardens. No mixing, no compromise on quality.",heading:"Assam Tea Wholesale Supplier – The Bold, Malty Character India Loves",content:`
      <p>When tea lovers talk about strength and character, they're talking about Assam. The Brahmaputra valley produces India's most robust tea—that distinctive malty sweetness and full-bodied punch that makes the perfect morning cup. At <strong>Manish Tea Traders</strong>, we've built direct relationships with Assam gardens to bring you authentic, unadulterated Assam tea at true wholesale prices.</p>

      <h3>The Assam Difference: Why Geography Matters</h3>
      <p>Assam's unique terroir—the combination of rich alluvial soil, abundant rainfall, and warm climate—creates tea that's fundamentally different from other regions. The leaves are larger, the oxidation deeper, and the resulting liquor has that signature golden-amber color with a malty aroma you can recognize from across the room.</p>

      <h3>Our Commitment to Purity</h3>
      <p>Here's an uncomfortable truth about the tea trade: many wholesalers blend cheaper Dooars or Terai tea with Assam to increase margins while still claiming "Assam" on the label. We don't play that game. When we say <strong>100% Pure Assam</strong>, we mean it. Every batch comes with garden documentation, and we invite you to taste-test against any competitor.</p>

      <h3>Assam Tea Varieties We Supply</h3>
      
      <h4>Second Flush Assam – The Premium Choice</h4>
      <p>Harvested during May-June, second flush Assam is what connoisseurs seek. The leaves show beautiful golden tips, and the cup delivers that perfect balance of maltiness and sweetness. If you're building a premium retail brand or supplying upmarket hotels, this is your foundation tea.</p>

      <h4>Monsoon Assam CTC – The Workhorse</h4>
      <p>Strong, consistent, and economical. This is the tea that powers millions of chai stalls across India. It brews fast, holds its strength even with heavy milk, and delivers the robust taste that customers expect. Perfect for high-volume operations where reliability matters more than subtlety.</p>

      <h4>Orthodox Assam – For the Discerning Few</h4>
      <p>While CTC dominates the market, Orthodox Assam offers something special: whole leaves that can be brewed multiple times, complex flavor notes, and a drinking experience that appeals to tea enthusiasts. Limited availability, premium positioning.</p>

      <h3>Who Benefits from Our Assam Tea Supply</h3>
      <ul>
        <li><strong>Private Label Manufacturers:</strong> Build your brand on authentic Assam quality without the sourcing headaches</li>
        <li><strong>Hotel & Restaurant Chains:</strong> Consistent taste across all locations, backed by reliable supply</li>
        <li><strong>Export Houses:</strong> International buyers specifically seek Assam tea—we handle documentation and quality certificates</li>
        <li><strong>Retail Distributors:</strong> Stock the tea that customers actively ask for by name</li>
      </ul>

      <h3>Quality Assurance Process</h3>
      <p>Every consignment of Assam tea we dispatch goes through our multi-point quality check: visual inspection for leaf grade consistency, moisture testing (we maintain below 3% for optimal shelf life), liquor tasting for flavor profile, and aroma evaluation. We reject more tea than most suppliers even consider testing.</p>

      <h3>Pricing That Makes Sense</h3>
      <p>Assam tea prices fluctuate based on auction dynamics, seasonal availability, and garden reputation. We don't believe in hiding behind vague "market rates." When you contact us, we'll give you transparent pricing based on current auction trends, with clear explanations of what drives the cost. No surprises, no hidden charges.</p>

      <p><strong>Ready to source authentic Assam tea?</strong> Contact us for current rates and sample dispatch. Experience the difference that genuine garden-direct Assam makes to your business.</p>
    `},{id:"darjeeling",city:"Darjeeling",slug:"darjeeling-tea-supplier",title:"Darjeeling Tea Wholesale | GI-Tagged First & Second Flush Direct from Gardens",metaDescription:"Authentic Darjeeling tea wholesale supplier. GI-certified First Flush, Second Flush, and Autumnal from prestigious gardens. Perfect for export and luxury retail.",heading:"Darjeeling Tea Wholesale – The Champagne of Teas, Direct from the Hills",content:`
      <p>There's a reason Darjeeling tea commands premium prices worldwide: it's irreplaceable. The unique combination of Himalayan altitude, misty climate, and centuries-old cultivation techniques creates a tea that simply cannot be replicated anywhere else on Earth. <strong>Manish Tea Traders</strong> operates just hours from the Darjeeling hills, giving us privileged access to authentic, GI-certified tea from the world's most prestigious gardens.</p>

      <h3>Understanding GI Certification: Why It Matters</h3>
      <p>Darjeeling tea holds Protected Geographical Indication status—the same legal protection afforded to Champagne or Parmigiano-Reggiano. This isn't just a marketing label; it's a guarantee of authenticity backed by the Tea Board of India. When you source through us, every invoice carries proper garden marks and GI certification, protecting both your reputation and your customers' trust.</p>

      <h3>The Flush Calendar: Timing Is Everything</h3>
      
      <h4>First Flush (March-April) – The Connoisseur's Choice</h4>
      <p>These are the first tender leaves after winter dormancy, and they're magical. Light, floral, with a greenish tinge and delicate astringency. First Flush Darjeeling is what serious tea collectors seek—limited production, maximum demand, premium pricing. If you're serving luxury hotels, high-end gift companies, or export markets in Japan and Europe, this is non-negotiable.</p>

      <h4>Second Flush (May-June) – The Classic Muscatel</h4>
      <p>This is what most people imagine when they think "Darjeeling." The mature leaves develop that distinctive muscatel character—hints of grape, stone fruit, and nuts. The liquor deepens to amber, the body becomes fuller, and the complexity increases. Second Flush offers the best balance of quality and commercial viability. It's expensive, yes, but customers understand why and willingly pay the premium.</p>

      <h4>Monsoon Flush (July-September) – The Practical Choice</h4>
      <p>Heavier rains mean faster growth and stronger, darker tea. Monsoon flush lacks the delicacy of earlier harvests but offers authentic Darjeeling character at more accessible price points. Perfect for blends, tea bags, and markets where "Darjeeling" on the label matters more than flush-specific nuances.</p>

      <h4>Autumnal Flush (October-November) – The Hidden Gem</h4>
      <p>Often overlooked, autumn Darjeeling delivers surprising quality. The leaves develop a mellow, smooth character with less astringency than spring harvests. Excellent for customers who find First Flush too sharp but still want that Darjeeling pedigree.</p>

      <h3>Who Needs Authentic Darjeeling Tea</h3>
      <ul>
        <li><strong>Export Houses:</strong> International buyers specifically request GI-certified Darjeeling—we handle all documentation</li>
        <li><strong>Luxury Hotels & Resorts:</strong> Your afternoon tea service deserves the real thing, not a blend masquerading as Darjeeling</li>
        <li><strong>Premium Gift Companies:</strong> Darjeeling's global reputation makes it perfect for corporate gifting and luxury hampers</li>
        <li><strong>Specialty Tea Retailers:</strong> Educate your customers about flush variations and build loyalty through authentic sourcing</li>
        <li><strong>Tea Boutiques & Cafés:</strong> Offer something your competitors can't easily replicate</li>
      </ul>

      <h3>The Siliguri Advantage for Darjeeling Sourcing</h3>
      <p>Being based in Siliguri isn't just convenient—it's strategic. We're close enough to visit gardens personally, attend local auctions, and maintain relationships with estate managers. This proximity means fresher stock, better pricing, and the ability to secure limited-production lots that never make it to distant markets.</p>

      <h3>Pricing Reality: What to Expect</h3>
      <p>Let's be honest: Darjeeling isn't cheap. First Flush can range from ₹1,200 to ₹3,000 per kg depending on garden prestige and quality grade. Second Flush typically runs ₹800 to ₹2,000 per kg. But here's the thing—your customers know this. They expect to pay more for Darjeeling, and they're suspicious when it's too cheap (because it's probably not authentic).</p>

      <h3>Minimum Orders & Seasonal Availability</h3>
      <p>Due to limited production and high demand, we typically require minimum orders of 25-50kg for Darjeeling tea. Availability is strictly seasonal—once a flush sells out, you wait until next year. Smart buyers pre-book their requirements based on projected demand.</p>

      <p><strong>Interested in authentic Darjeeling tea?</strong> Contact us to discuss current flush availability, garden options, and pricing. We'll help you select the right quality grade for your market positioning.</p>
    `},{id:"patna",city:"Patna",slug:"tea-wholesaler-patna-bihar",title:"Tea Wholesaler in Patna, Bihar | Strong CTC for Kadak Chai Lovers",metaDescription:"Leading tea wholesaler supplying Patna and Bihar. Specialized strong CTC blends for Bihar's kadak chai culture. Direct transport from Siliguri.",heading:"Tea Wholesaler in Patna – Understanding Bihar's Love for Strong Tea",content:`
      <p>Bihar's tea culture is unique and uncompromising. From Patna to Gaya, from Muzaffarpur to Bhagalpur, people here don't just drink tea—they demand <strong>"Kadak Chai"</strong> that delivers bold color and powerful taste. <strong>Manish Tea Traders</strong> has spent years perfecting blends specifically for the Bihar market, understanding that what works in Delhi or Mumbai simply won't satisfy Bihar's discerning tea drinkers.</p>

      <h3>Why Bihar Tea Is Different</h3>
      <p>The water quality across Bihar varies significantly from other regions. The mineral content affects how tea brews, which is why generic blends often disappoint. We've developed Bihar-specific formulations that account for local water characteristics, ensuring consistent taste whether you're in Patna's Boring Road area or a village near Darbhanga.</p>

      <h3>Our Bihar-Focused Tea Range</h3>
      
      <h4>Lal Ghoda Style – The Color Champion</h4>
      <p>Bihar consumers judge tea quality by its color first. Our "Lal Ghoda" style blend produces that distinctive reddish-brown liquor that signals strength and quality. It's formulated to maintain color intensity even when re-heated multiple times—a common practice in Bihar households and tea stalls.</p>

      <h4>Mota Dana (Large Granule) – The Traditional Favorite</h4>
      <p>Many Bihar families prefer larger tea granules (BOPL grade) because they believe it indicates better quality. More importantly, these larger particles withstand the traditional boiling method better, releasing flavor gradually rather than all at once. Perfect for the slow-cooked chai that Bihar is famous for.</p>

      <h4>Hotel Dust – For High-Volume Operations</h4>
      <p>The tea stalls near Patna Junction, Gandhi Maidan, and Boring Road serve hundreds of cups daily. They need tea that brews instantly, maintains strength through heavy milk ratios, and costs less per cup. Our Hotel Dust grade delivers exactly that—maximum extraction, minimum waste.</p>

      <h3>Serving Patna's Diverse Tea Market</h3>
      <ul>
        <li><strong>Wholesale Traders in Patna Market:</strong> Bulk supplies in 30-35kg jute bags for redistribution across Bihar</li>
        <li><strong>Retail Shops:</strong> Flexible quantities from 50kg upwards for local grocery stores and tea shops</li>
        <li><strong>Tea Stall Owners:</strong> Economy blends that don't compromise on the strength Bihar demands</li>
        <li><strong>Institutional Buyers:</strong> Consistent supply for schools, colleges, and government canteens</li>
      </ul>

      <h3>Logistics: Siliguri to Patna Made Simple</h3>
      <p>We maintain daily truck dispatches to Patna, with goods typically reaching transport nagars in the zero mile or bypass areas within 3-4 days. Our packaging is designed to withstand the rough handling common in long-distance transport—double-stitched jute bags with moisture-resistant inner lining.</p>

      <p>For bulk orders above 1000kg, we arrange direct delivery to your godown in Patna, saving you the hassle and cost of transport nagar collection. We also provide proper GST billing and transport documentation, making your accounting seamless.</p>

      <h3>Why Patna Buyers Choose Us</h3>
      <ul>
        <li>We understand Bihar's specific taste preferences—not just generic "strong tea"</li>
        <li>Consistent quality that maintains customer loyalty for your business</li>
        <li>Competitive pricing that allows healthy margins for retailers</li>
        <li>Reliable supply even during peak seasons (winters, festivals)</li>
        <li>No minimum order surprises—clear pricing from the first kilogram</li>
      </ul>

      <p><strong>Stop paying middleman margins.</strong> Source directly from Siliguri and improve your profit while maintaining the quality your customers expect. Contact Manish Tea Traders today for current rates and sample dispatch to Patna.</p>
    `},{id:"ranchi",city:"Ranchi",slug:"tea-supplier-ranchi-jharkhand",title:"Wholesale Tea Supplier in Ranchi, Jharkhand | Fresh Garden Stock",metaDescription:"Trusted bulk tea supplier for Ranchi, Jamshedpur, and Dhanbad. Fresh Assam and Dooars tea optimized for Jharkhand's water quality.",heading:"Wholesale Tea Supplier in Ranchi & Jharkhand – Quality That Suits Your Water",content:`
      <p>Jharkhand's tea market has a character all its own. From the industrial townships of Jamshedpur to the administrative hub of Ranchi, tea consumption here is serious business. <strong>Manish Tea Traders</strong> has developed a deep understanding of Jharkhand's unique requirements, particularly the water quality challenges that affect tea brewing across the state.</p>

      <h3>The Water Quality Factor</h3>
      <p>Here's something most tea suppliers won't tell you: Jharkhand's water, particularly in mining and industrial areas, has higher mineral content than many other regions. This affects how tea brews—the same blend that works perfectly in Kolkata might taste flat or bitter in Ranchi. We've spent years testing and adjusting our formulations to work specifically with Jharkhand's water profile.</p>

      <h3>Serving Jharkhand's Major Markets</h3>
      
      <h4>Ranchi – The Capital City</h4>
      <p>Ranchi's diverse population—from government employees to students to business professionals—demands variety. We supply everything from premium Assam leaf for upmarket colonies to strong dust for roadside stalls. Our "Ranchi Special" blend has become a favorite among local retailers because it delivers consistent taste regardless of seasonal water quality variations.</p>

      <h4>Jamshedpur (Tatanagar) – The Steel City</h4>
      <p>Industrial workers need tea that energizes. Jamshedpur's canteens and mess halls require high-volume, high-strength tea that can be brewed in large batches without losing character. Our industrial-grade blends are specifically formulated for mass brewing equipment, maintaining taste consistency from the first cup to the hundredth.</p>

      <h4>Dhanbad & Coal Belt Areas</h4>
      <p>The mining regions demand robust tea that cuts through fatigue. We supply extra-strong CTC dust that delivers maximum caffeine and flavor, perfect for the demanding schedules of colliery workers. Packaging is reinforced to withstand the dusty, rough conditions of mining area transport.</p>

      <h3>What Makes Our Jharkhand Service Unique</h3>
      <ul>
        <li><strong>Water-Optimized Blends:</strong> Formulated specifically for Jharkhand's mineral-rich water</li>
        <li><strong>Consistent Year-Round Quality:</strong> We don't change blend ratios seasonally—your customers get the same taste every month</li>
        <li><strong>Flexible Range:</strong> From ₹140/kg economy blends to ₹300/kg premium Assam leaf</li>
        <li><strong>Credit Facilities:</strong> Established businesses with trade references can access 15-30 day credit terms</li>
        <li><strong>Custom Blending:</strong> Tell us your target price point, and we'll create a blend that fits</li>
      </ul>

      <h3>Popular Products for Jharkhand Market</h3>
      <p>Based on years of serving Jharkhand customers:</p>
      <ul>
        <li><strong>Dooars-Assam Mix (60:40):</strong> Balances strength with affordability</li>
        <li><strong>Pure Assam BP:</strong> For retailers targeting premium segments</li>
        <li><strong>Strong Dust Grade:</strong> Maximum extraction for high-volume operations</li>
        <li><strong>Orthodox Leaf:</strong> Growing demand from health-conscious urban consumers</li>
      </ul>

      <h3>Logistics to Jharkhand</h3>
      <p>We maintain regular transport connections to Ranchi, Jamshedpur, and Dhanbad. Typical transit time is 4-6 days from Siliguri. For orders above 500kg, we arrange direct delivery to your location, eliminating transport depot hassles. All shipments include proper GST documentation and transport insurance.</p>

      <p><strong>Ready to upgrade your tea supply?</strong> Contact us for samples tailored to your specific location in Jharkhand. Experience the difference that water-optimized blending makes.</p>
    `},{id:"delhi",city:"Delhi",slug:"wholesale-tea-supplier-delhi",title:"Wholesale Tea Supplier in Delhi NCR | Direct from Siliguri Auctions",metaDescription:"Premium wholesale tea supplier for Delhi NCR. Serving Khari Baoli traders and Delhi brands with fresh Assam and CTC tea direct from source.",heading:"Wholesale Tea Supplier in Delhi – Bridging North Bengal to the National Capital",content:`
      <p>Delhi isn't just India's capital—it's one of the country's largest tea consumption centers. From the historic trading lanes of Khari Baoli to modern tea brands operating across NCR, Delhi's tea market is sophisticated, demanding, and highly competitive. <strong>Manish Tea Traders</strong> serves as your direct procurement arm in the East, eliminating layers of middlemen between Siliguri auctions and your Delhi business.</p>

      <h3>Understanding Delhi's Sophisticated Tea Palate</h3>
      <p>Delhi consumers are educated about tea. They've been exposed to countless brands, they understand the difference between Assam and Dooars, and they won't settle for stale or inferior quality. This creates both a challenge and an opportunity: supply them with genuinely fresh, high-quality tea, and you build lasting loyalty.</p>

      <h3>Serving Delhi's Diverse Tea Markets</h3>
      
      <h4>Khari Baoli – Asia's Largest Spice Market</h4>
      <p>The narrow lanes of Khari Baoli have been Delhi's trading heartbeat for centuries. We supply established trading houses here with bulk consignments—full truckloads of premium Assam, Dooars, and specialty teas. Our auction-linked pricing helps you maintain competitive margins while serving your extensive distribution network across North India.</p>

      <h4>South Delhi & Gurgaon – The Premium Segment</h4>
      <p>Upmarket retailers in Greater Kailash, Defence Colony, and Gurgaon's residential sectors cater to consumers who willingly pay ₹400-600/kg for quality tea. We supply premium Assam Second Flush, Darjeeling Orthodox, and specialty blends that justify premium positioning. These customers read labels, ask questions, and appreciate authentic sourcing stories.</p>

      <h4>Old Delhi & Noida – The Volume Market</h4>
      <p>Thousands of tea stalls across Old Delhi, Chandni Chowk, and Noida serve millions of cups daily. They need strong CTC blends that brew quickly, maintain flavor through heavy milk ratios, and cost less per cup. Our "Desi Chai" formulations deliver exactly that—robust taste without premium pricing.</p>

      <h4>Corporate Canteens … NCR's Office Belt</h4>
      <p>From Connaught Place to Cyber City, Delhi-NCR's office complexes consume massive quantities of tea. We've developed "Office Blend" varieties that brew consistently in large batches, maintain taste through extended holding periods, and satisfy diverse palates from Punjabi to South Indian employees.</p>

      <h3>Popular Products for Delhi Market</h3>
      <ul>
        <li><strong>Premium Assam Seconds:</strong> For loose tea retailers targeting affluent consumers</li>
        <li><strong>Strong CTC Mix:</strong> The backbone of Delhi's chai culture</li>
        <li><strong>Masala Chai Base:</strong> Robust enough to hold its own against ginger, cardamom, and spices</li>
        <li><strong>Darjeeling First Flush:</strong> Seasonal supplies for premium stores and gift shops</li>
        <li><strong>Green Tea:</strong> Growing demand from health-conscious Delhi consumers</li>
      </ul>

      <h3>Logistics: Siliguri to Delhi NCR</h3>
      <p>We offer both full truckload (FTL) and part-load delivery options to Delhi-NCR. Typical transit time is 4-6 days, with goods reaching major transport hubs in Azadpur, Mundka, or Ghazipur. For bulk orders above 2000kg, we arrange direct delivery to your warehouse location.</p>

      <p>All interstate documentation—E-Way bills, GST invoices, transport receipts—is handled by our experienced team. You focus on selling; we handle the logistics complexity.</p>

      <h3>Why Delhi Businesses Choose Us</h3>
      <ul>
        <li>Direct auction access means fresher tea than Delhi-based wholesalers can offer</li>
        <li>Transparent pricing with clear explanations of what drives costs</li>
        <li>Consistent quality that builds customer loyalty for your brand</li>
        <li>Flexible quantities from 100kg to full truckloads</li>
        <li>Sample dispatch to Delhi for evaluation before bulk orders</li>
      </ul>

      <p><strong>Ready to source premium tea for Delhi's discerning market?</strong> Contact Manish Tea Traders today. Let's discuss how direct Siliguri sourcing can improve your margins while upgrading your quality.</p>
    `},{id:"mumbai",city:"Mumbai",slug:"tea-wholesaler-mumbai",title:"Tea Wholesalers in Mumbai | Cutting Chai & CTC Dust Specialists",metaDescription:"Mumbai cutting chai tea supplier. Specialized PD and RD dust grades for Mumbai's famous tea culture. Bulk delivery to Vashi APMC and retailers.",heading:"Tea Wholesalers in Mumbai – Powering the City That Never Sleeps",content:`
      <p>Mumbai's relationship with tea is legendary. The city runs on "Cutting Chai"—that perfect half-cup of strong, sweet tea that fuels everything from early morning commutes to late-night business discussions. Creating the perfect Cutting requires specific tea characteristics: incredibly strong, fast-brewing, and resistant to bitterness even when boiled hard. <strong>Manish Tea Traders</strong> specializes in supplying exactly these grades to Mumbai's demanding market.</p>

      <h3>The Science Behind Perfect Cutting Chai</h3>
      <p>What makes Cutting Chai special isn't just the serving size—it's the tea itself. Mumbai's iconic tea stalls use specialized dust grades (PD - Pekoe Dust and RD - Red Dust) that most other markets don't even stock. These ultra-fine particles maximize surface area for instant extraction, delivering full flavor and color in the brief boiling time that Cutting Chai demands.</p>

      <h3>Serving Mumbai's Tea Ecosystem</h3>
      
      <h4>Vashi APMC – The Distribution Hub</h4>
      <p>Vashi's Agricultural Produce Market Committee area serves as Mumbai's primary wholesale distribution point. We regularly ship bulk consignments here—full trucks of specialized dust grades, premium Assam leaf, and custom blends. Our packaging is specifically designed to withstand Mumbai's humid coastal climate, with moisture-proof inner linings that keep tea fresh from Siliguri to your warehouse.</p>

      <h4>Dadar, Thane, Kalyan – The Suburban Network</h4>
      <p>Mumbai's suburban belt consumes enormous quantities of tea daily. We supply distributors in these areas with consistent-quality blends that work across diverse customer segments—from railway platform tea stalls to residential society provision stores.</p>

      <h4>Amruttulya & Tea Chain Franchises</h4>
      <p>Mumbai pioneered the tea franchise model with chains like Amruttulya. These businesses live or die on consistency—a cup in Borivali must taste identical to one in Chembur. We provide standardized "Hotel Blend" formulations with strict quality controls, ensuring your franchise maintains its signature taste across all locations.</p>

      <h3>Understanding Mumbai's Diverse Tea Preferences</h3>
      
      <h4>For Gujarati & Marwari Households</h4>
      <p>Mumbai's Gujarati and Marwari communities prefer their morning tea rich, aromatic, and slightly sweet. We supply premium Assam CTC (BP grade) that delivers that characteristic malty sweetness and golden color they expect. This segment willingly pays ₹300-400/kg for quality that meets their standards.</p>

      <h4>For Maharashtrian Families</h4>
      <p>Traditional Maharashtrian households often prefer stronger, more robust tea. Our "Maharashtra Special" blend combines Assam strength with Dooars color, creating a tea that works perfectly with the local preference for well-boiled, milk-heavy preparation.</p>

      <h4>For South Indian Communities</h4>
      <p>Mumbai's large South Indian population brings their own tea traditions. We supply both CTC dust for filter-style preparation and premium leaf grades for those who prefer the traditional decoction method.</p>

      <h3>The Mumbai Humidity Challenge</h3>
      <p>Mumbai's coastal humidity is tea's enemy. Moisture absorption leads to staleness, loss of aroma, and reduced shelf life. Our Mumbai-specific packaging includes:</p>
      <ul>
        <li>Triple-layer moisture barrier in all bulk bags</li>
        <li>Silica gel packets for retail-ready smaller packs</li>
        <li>Hermetically sealed inner linings for long-term storage</li>
        <li>Clear storage instructions to maintain quality in humid conditions</li>
      </ul>

      <h3>Popular Products for Mumbai Market</h3>
      <ul>
        <li><strong>PD & RD Dust:</strong> The secret behind Mumbai's famous Cutting Chai</li>
        <li><strong>Hotel Blend:</strong> Consistent taste for tea chains and franchises</li>
        <li><strong>Premium Assam CTC:</strong> For households and upmarket retailers</li>
        <li><strong>Economy Mix:</strong> Value-focused blend for price-sensitive segments</li>
      </ul>

      <h3>Logistics to Mumbai</h3>
      <p>We ship to Mumbai via both road and rail, depending on order size and urgency. Typical transit time is 5-7 days. For bulk orders, we arrange delivery to Vashi APMC or directly to your warehouse in Mumbai, Thane, or Navi Mumbai areas.</p>

      <p><strong>Ready to source tea that understands Mumbai's unique requirements?</strong> Contact Manish Tea Traders for samples and current pricing. Let's discuss how we can support your Mumbai tea business.</p>
    `},{id:"bangalore",city:"Bangalore",slug:"tea-supplier-bangalore",title:"Bulk Tea Supplier in Bangalore | Premium Leaf, Dust & Green Tea",metaDescription:"Wholesale tea supplier for Bangalore's cafes, Darshinis, and IT campuses. Fresh Assam CTC, Orthodox leaf, and organic green tea in bulk.",heading:"Bulk Tea Supplier in Bangalore – Where Tech Meets Tea Tradition",content:`
      <p>Bangalore's tea culture is fascinatingly dual. On one hand, you have the traditional "By-Two" Darshinis serving quick, strong chai to auto drivers and office workers. On the other, there's a booming specialty tea cafe scene in Indiranagar, Koramangala, and Whitefield catering to the city's cosmopolitan IT crowd. <strong>Manish Tea Traders</strong> supplies both worlds with equal expertise.</p>

      <h3>Understanding Bangalore's Unique Tea Landscape</h3>
      <p>Unlike North Indian cities where tea culture is relatively homogeneous, Bangalore demands variety. The city's diverse population—from traditional South Indian families to North Indian migrants to international expats—creates multiple tea segments, each with distinct preferences.</p>

      <h3>Products Tailored for Bangalore's Markets</h3>
      
      <h4>Strong Dust for Darshinis & Canteens</h4>
      <p>Bangalore's thousands of Darshinis and Udupi restaurants serve filter-style hot tea that needs to brew quickly and maintain strength. We supply specialized CTC dust grades that deliver instant color and robust taste, perfect for the fast-paced service these establishments demand.</p>

      <h4>Orthodox Leaf for Boutique Cafes</h4>
      <p>The specialty tea cafes in Indiranagar, Koramangala, and HSR Layout are introducing Bangalore to the world of premium loose-leaf tea. We supply Darjeeling First Flush, Nepal Orthodox, and specialty Assam grades that these cafes can brew by the pot, offering customers an elevated tea experience.</p>

      <h4>Green Tea for Health-Conscious IT Professionals</h4>
      <p>Bangalore's IT campuses and health-focused cafes have driven massive demand for quality green tea. We source organic green tea from certified gardens, offering both Chinese-style and Japanese-style processing. This segment willingly pays premium prices for authentic, pesticide-free tea.</p>

      <h4>Masala Chai Base for North Indian Migrants</h4>
      <p>The large North Indian population in Bangalore seeks the "ghar ka taste"—strong, spiced chai that reminds them of home. We supply robust Assam-Dooars blends that hold their character against ginger, cardamom, and other spices.</p>

      <h3>Serving Bangalore's Business Segments</h3>
      <ul>
        <li><strong>Darshini & Udupi Restaurant Chains:</strong> Consistent supply of strong dust for high-volume operations</li>
        <li><strong>Corporate Campuses:</strong> Bulk supplies for IT company canteens across Electronic City, Whitefield, and Outer Ring Road</li>
        <li><strong>Specialty Tea Cafes:</strong> Premium Orthodox and green tea for brewing-focused establishments</li>
        <li><strong>Retail Stores:</strong> Packaged tea for supermarkets and organic stores in upmarket neighborhoods</li>
        <li><strong>Catering Companies:</strong> Event-specific blends for Bangalore's active conference and wedding industry</li>
      </ul>

      <h3>Logistics: Efficient Rail & Road to Bangalore</h3>
      <p>We utilize both rail and road transport to Bangalore, depending on order size and urgency. Rail freight keeps costs low for bulk orders, while road transport offers faster delivery for urgent requirements. Typical transit time is 5-7 days, with goods reaching Bangalore's major transport hubs.</p>

      <p>For orders above 500kg, we arrange direct delivery to your location in Bangalore, whether you're in the city center or the outskirts. Our packaging is designed to withstand Bangalore's moderate climate while maintaining tea freshness.</p>

      <p><strong>Ready to serve Bangalore's diverse tea market?</strong> Contact Manish Tea Traders for samples and pricing. We understand Bangalore's unique requirements—from Darshini dust to specialty cafe leaf.</p>
    `},{id:"jaipur",city:"Jaipur",slug:"tea-wholesaler-jaipur-rajasthan",title:"Tea Wholesaler in Jaipur, Rajasthan | Masala Chai & Strong CTC Specialists",metaDescription:"Premium wholesale tea for Jaipur and Rajasthan. Strong CTC blends perfect for traditional Rajasthani masala chai. Serving heritage hotels and local mandis.",heading:"Tea Wholesaler in Jaipur – Honoring Rajasthan's Tea Ritual",content:`
      <p>In Rajasthan, tea isn't just refreshment—it's hospitality, tradition, and social glue. From the royal heritage hotels of Jaipur to roadside dhabas on the Jaipur-Delhi highway, Rajasthani <strong>Masala Chai</strong> demands tea with specific characteristics: deep color, robust strength, and the ability to shine through heavy spices. <strong>Manish Tea Traders</strong> has perfected blends specifically for Rajasthan's unique requirements.</p>

      <h3>The Rajasthani Tea Preference</h3>
      <p>Rajasthani consumers judge tea by its color first—they want that rich, reddish-brown liquor that signals quality. The tea must also withstand prolonged boiling with milk, ginger, cardamom, and sometimes even black pepper, without losing its character. Generic blends simply don't cut it here.</p>

      <h3>Our Rajasthan-Specific Formulations</h3>
      
      <h4>Rajasthan Special Blend – The Color Champion</h4>
      <p>Heavy on Assam BP and OF grades, this blend delivers the deep color Rajasthani buyers expect. It's formulated to maintain its visual appeal and taste even when boiled multiple times—a common practice in Rajasthani households where tea is kept warm throughout the day.</p>

      <h4>Heritage Hotel Grade – Premium Positioning</h4>
      <p>Jaipur's palace hotels and heritage properties serve tea to international tourists who expect quality. We supply premium Assam Second Flush that delivers both the strength locals appreciate and the refined taste that impresses visitors.</p>

      <h4>Dhaba Dust – For Highway Operations</h4>
      <p>The dhabas along NH-8 and other highways need tea that brews instantly and delivers maximum flavor. Our specialized dust grade ensures quick service without compromising the robust taste truckers and travelers demand.</p>

      <h3>Serving the Golden Triangle</h3>
      <p>Our distribution network extends across Rajasthan's major cities:</p>
      <ul>
        <li><strong>Jaipur Wholesale Markets:</strong> Bulk supplies to traders in Johri Bazaar and Bapu Bazaar areas</li>
        <li><strong>Jodhpur & Udaipur:</strong> Regular shipments to western Rajasthan's growing tea markets</li>
        <li><strong>Tourism Sector:</strong> Premium packaging for heritage hotels, resorts, and tourist-focused retailers</li>
        <li><strong>Kirana Networks:</strong> Supplies for local grocery wholesalers serving rural Rajasthan</li>
      </ul>

      <h3>Understanding Seasonal Demand</h3>
      <p>Rajasthan's tea consumption peaks during winter months when the desert cold drives demand for hot, spiced chai. We ensure adequate stock during October-February to meet this seasonal surge. Wedding season also creates spikes in demand—we work with catering companies to ensure they never run short.</p>

      <p><strong>Ready to serve Rajasthan's tea tradition?</strong> Contact us for samples of our Rajasthan-specific blends. Experience tea that understands the Pink City's preferences.</p>
    `},{id:"lucknow",city:"Lucknow",slug:"tea-supplier-lucknow-up",title:"Wholesale Tea Supplier in Lucknow, UP | Economy & Premium Blends",metaDescription:"Bulk tea supplier for Lucknow, Kanpur, and Uttar Pradesh. Economical CTC blends for high-volume sales. Awadh Special blend for traditional slow-boiled chai.",heading:"Wholesale Tea Supplier in Lucknow & Uttar Pradesh – Quality Meets Value",content:`
      <p>Uttar Pradesh represents India's largest tea-consuming state by volume, and Lucknow sits at its cultural heart. The challenge here is unique: consumers want quality tea but at price points that reflect UP's value-conscious market. <strong>Manish Tea Traders</strong> has mastered the art of delivering premium taste at economy pricing—exactly what the UP market demands.</p>

      <h3>Understanding UP's Price-Quality Balance</h3>
      <p>In cities like Lucknow, Kanpur, Varanasi, and Allahabad, tea retailers operate on thin margins. Their customers are discerning but price-sensitive. They'll reject inferior tea, but they also won't pay Delhi or Mumbai prices. We've developed blends specifically engineered for this sweet spot.</p>

      <h3>Our UP-Focused Product Range</h3>
      
      <h4>Awadh Blend – The Lucknow Favorite</h4>
      <p>Named after Lucknow's historical identity, this blend honors the city's tradition of slow-boiled, aromatic chai. It's formulated to release flavor gradually rather than all at once, perfect for the traditional "dum" style of tea preparation popular in Awadhi households. The blend maintains its character even after 10-15 minutes of simmering.</p>

      <h4>Economy Mix – Maximum Value</h4>
      <p>For price-conscious retailers serving working-class neighborhoods and rural areas, we offer an economy blend that delivers surprising quality at rock-bottom pricing. It's not our premium product, but it's honest tea that won't disappoint customers who are watching every rupee.</p>

      <h4>Festival Special – Seasonal Premium</h4>
      <p>During Diwali, Holi, and wedding seasons, UP consumers are willing to splurge slightly on better tea for guests. Our Festival Special blend offers noticeably superior taste at a modest premium, helping retailers capture this seasonal upside.</p>

      <h3>Serving UP's Diverse Markets</h3>
      <ul>
        <li><strong>Lucknow Wholesale Hub:</strong> Bulk supplies to Aminabad and Chowk area traders</li>
        <li><strong>Kanpur Industrial Belt:</strong> High-volume supplies for factory canteens and industrial areas</li>
        <li><strong>Varanasi Religious Tourism:</strong> Quality tea for hotels and guesthouses serving pilgrims</li>
        <li><strong>Rural Distribution:</strong> Economy blends for village-level retailers across eastern UP</li>
      </ul>

      <h3>Seasonal Supply Management</h3>
      <p>UP's tea demand spikes dramatically during winter months (November-February) and festival seasons. We maintain buffer stocks specifically for UP markets to ensure you never face shortages during peak demand periods. Our logistics team coordinates closely with UP transporters to guarantee timely delivery even during festival rush.</p>

      <p><strong>Ready to serve UP's massive tea market?</strong> Contact Manish Tea Traders for samples of our UP-specific blends. We understand the price-quality equation that makes or breaks success in Uttar Pradesh.</p>
    `},{id:"chennai",city:"Chennai",slug:"tea-wholesaler-chennai",title:"Tea Wholesaler in Chennai | Strong Assam Dust & Granules for South India",metaDescription:"Wholesale tea supplier for Chennai's growing tea market. Strong Assam dust and broken grades for ginger tea and dum tea. Humidity-resistant packaging.",heading:"Tea Wholesaler in Chennai – Strong Tea for the Filter Coffee Capital",content:`
      <p>Chennai might be famous for filter coffee, but there's a quiet revolution happening: tea consumption is growing rapidly, especially among the younger generation and North Indian migrant population. <strong>Manish Tea Traders</strong> supplies the strong, flavorful tea that's winning over Chennai's palate, one cup at a time.</p>

      <h3>Chennai's Evolving Tea Culture</h3>
      <p>Traditional Chennai households still prefer coffee, but tea has found its niche: roadside tea stalls serving auto drivers and laborers, North Indian restaurants catering to migrants, and increasingly, young professionals who find tea more convenient than traditional filter coffee. Each segment has specific requirements.</p>

      <h3>Products Tailored for Chennai's Climate & Taste</h3>
      
      <h4>Strong Assam Dust – The Workhorse</h4>
      <p>Chennai's tea stalls need tea that brews quickly in the city's hot, humid climate and delivers robust flavor. We supply high-grade Assam dust that creates the strong, energizing cup Chennai's working population demands. It's specifically selected to work well with the city's water quality.</p>

      <h4>Ginger Tea Base – The Popular Choice</h4>
      <p>"Inji Tea" (ginger tea) is Chennai's favorite variation. We've developed a blend that holds its character against the strong ginger flavor popular here, ensuring the tea taste isn't overwhelmed. This blend has become a favorite among Chennai's tea stall operators.</p>

      <h4>Dum Tea Grade – For Traditional Preparation</h4>
      <p>Some Chennai tea shops still use the traditional "dum" method—slow-boiling tea with milk and spices. We supply broken grades that release flavor gradually, perfect for this extended brewing method.</p>

      <h3>The Coastal Humidity Challenge</h3>
      <p>Chennai's coastal humidity is brutal on tea quality. Moisture absorption leads to rapid staleness and loss of aroma. Our Chennai-specific packaging includes:</p>
      <ul>
        <li>Multi-layer moisture barriers in all packaging</li>
        <li>Hermetically sealed inner linings for bulk bags</li>
        <li>Silica gel packets for smaller retail packs</li>
        <li>Clear storage instructions for Chennai's climate</li>
      </ul>

      <h3>Serving Chennai's Tea Markets</h3>
      <ul>
        <li><strong>Roadside Tea Stalls:</strong> Economy blends for high-volume, low-margin operations</li>
        <li><strong>North Indian Restaurants:</strong> Masala chai bases for restaurants in T. Nagar, Mylapore, and other areas</li>
        <li><strong>Corporate Canteens:</strong> Bulk supplies for IT parks in OMR and other tech corridors</li>
        <li><strong>Retail Stores:</strong> Packaged tea for supermarkets serving North Indian and cosmopolitan neighborhoods</li>
      </ul>

      <p><strong>Ready to tap into Chennai's growing tea market?</strong> Contact Manish Tea Traders for samples optimized for Chennai's climate and taste preferences. We understand what it takes to succeed in the filter coffee capital.</p>
    `},{id:"hyderabad",city:"Hyderabad",slug:"tea-supplier-hyderabad",title:"Irani Chai Tea Supplier Hyderabad | Wholesale Dust & Hotel Blends",metaDescription:"Specialized tea supplier for Hyderabad's legendary Irani Chai. Strong dust and fine fanning grades for decoction-style brewing. Serving Begum Bazar wholesalers.",heading:"Wholesale Tea for Hyderabad – Perfecting the Legendary Irani Chai",content:`
      <p>Hyderabad's <strong>Irani Chai</strong> isn't just tea—it's a cultural institution. From the iconic cafes of Charminar to modern Irani chai franchises across the city, this unique preparation demands tea with very specific characteristics. <strong>Manish Tea Traders</strong> has spent years perfecting blends specifically for Hyderabad's Irani chai culture.</p>

      <h3>Understanding Irani Chai's Unique Requirements</h3>
      <p>Unlike regular chai that's boiled briefly, Irani chai involves prolonged decoction—sometimes for hours. The tea must withstand this extended brewing without turning bitter, while still delivering that thick, creamy liquor that Irani chai is famous for. It's a delicate balance that requires specialized tea grades.</p>

      <h3>Our Hyderabad-Specific Formulations</h3>
      
      <h4>Irani Chai Special – The Signature Blend</h4>
      <p>This is our masterpiece for Hyderabad. Using very fine dust and fanning grades, it's formulated to release flavor slowly over extended brewing periods. The result is that characteristic thick, almost syrupy liquor that pairs perfectly with Osmania biscuits. This blend has become the secret weapon of several successful Irani chai cafes.</p>

      <h4>Hotel Dust – For High-Volume Operations</h4>
      <p>Hyderabad's busy Irani cafes serve hundreds of cups daily. They need tea that maintains consistency across large batches and throughout the day. Our hotel dust grade delivers reliable performance from the first cup in the morning to the last one at midnight.</p>

      <h4>Premium Leaf – For Upmarket Cafes</h4>
      <p>The new-generation Irani chai cafes in Banjara Hills and Jubilee Hills cater to a more upmarket clientele. We supply premium Assam leaf that allows these establishments to offer a refined Irani chai experience while maintaining the traditional character.</p>

      <h3>Serving Hyderabad's Tea Ecosystem</h3>
      <ul>
        <li><strong>Begum Bazar Wholesalers:</strong> Bulk supplies to the traditional wholesale hub that distributes across Hyderabad</li>
        <li><strong>Iconic Irani Cafes:</strong> Specialized blends for heritage cafes maintaining decades-old recipes</li>
        <li><strong>Modern Chai Franchises:</strong> Consistent formulations for chains expanding across the city</li>
        <li><strong>Bakeries & Restaurants:</strong> Tea supplies for establishments offering Irani chai alongside their main business</li>
      </ul>

      <h3>The Decoction Technique</h3>
      <p>We provide detailed brewing guidelines for Irani chai preparation, including optimal tea-to-water ratios, ideal decoction times, and temperature management. Many of our Hyderabad clients credit our technical support with helping them perfect their Irani chai recipe.</p>

      <p><strong>Ready to master Hyderabad's Irani chai tradition?</strong> Contact Manish Tea Traders for samples of our Hyderabad-specific blends. We understand what makes Irani chai legendary.</p>
    `},{id:"pune",city:"Pune",slug:"tea-wholesaler-pune",title:"Tea Wholesalers in Pune | Amruttulya & Franchise Tea Supply",metaDescription:"Wholesale tea supplier for Pune's tea franchises and chains. Consistent year-round blends for Amruttulya model. Contract pricing for bulk annual orders.",heading:"Tea Wholesaler in Pune – Powering the Franchise Revolution",content:`
      <p>Pune pioneered India's modern tea franchise model with the success of Amruttulya and similar chains. These businesses proved that standardized, quality tea could be franchised successfully across multiple locations. <strong>Manish Tea Traders</strong> has become the preferred supplier for Pune's franchise tea businesses because we understand their unique challenge: absolute consistency.</p>

      <h3>The Franchise Consistency Challenge</h3>
      <p>When a customer visits an Amruttulya in Kothrud, they expect the exact same taste they got at the Viman Nagar location. Any variation damages brand trust and franchise value. This requires tea suppliers who can maintain identical blend profiles month after month, year after year—regardless of seasonal variations in tea gardens.</p>

      <h3>Our Franchise-Focused Solutions</h3>
      
      <h4>Pune Special Blend – The Standardized Formula</h4>
      <p>We've developed proprietary blending techniques that compensate for seasonal variations in raw tea. By adjusting blend ratios based on current crop characteristics, we ensure the final product tastes identical whether it's January or July. This blend has become the backbone of several successful Pune franchise operations.</p>

      <h4>Quality Control Protocol</h4>
      <p>Every batch destined for franchise customers goes through additional quality checks:</p>
      <ul>
        <li>Side-by-side tasting against previous batches</li>
        <li>Color consistency verification</li>
        <li>Brewing time standardization</li>
        <li>Aroma profile matching</li>
      </ul>

      <h4>Contract Pricing for Predictability</h4>
      <p>Franchise businesses need predictable costs for financial planning. We offer annual contracts with fixed pricing, protecting you from auction market volatility while ensuring uninterrupted supply.</p>

      <h3>Beyond Franchises: Pune's Broader Tea Market</h3>
      <ul>
        <li><strong>IT Campus Canteens:</strong> Bulk supplies for Hinjewadi, Magarpatta, and other tech parks</li>
        <li><strong>Residential Society Stores:</strong> Retail packs for the thousands of housing societies across Pune</li>
        <li><strong>Restaurants & Cafes:</strong> Custom blends for independent establishments</li>
        <li><strong>Catering Companies:</strong> Event-specific supplies for Pune's active wedding and conference industry</li>
      </ul>

      <h3>Logistics & Support</h3>
      <p>We maintain dedicated stock for our Pune franchise clients, ensuring you never face shortages even during peak demand. Our logistics team coordinates closely with Pune transporters to guarantee timely delivery across all areas—from Pimpri-Chinchwad to Kharadi to Baner.</p>

      <p><strong>Ready to build or expand your tea franchise?</strong> Contact Manish Tea Traders to discuss how our consistency-focused approach can support your growth. We understand what makes franchises successful.</p>
    `},{id:"surat",city:"Surat",slug:"tea-supplier-surat-gujarat",title:"Tea Supplier in Surat, Gujarat | Premium Assam CTC & Gift Pack Quality",metaDescription:"Wholesale tea supplier for Surat and Gujarat. Premium quality Assam CTC for households and Diwali gift packs. Clean bloom appearance guaranteed.",heading:"Tea Supplier in Surat – Where Quality Is Never Compromised",content:`
      <p>Surat and Gujarat's broader market have a reputation: they demand quality and they're willing to pay for it. Whether it's diamond merchants in Surat's Varachha area or textile traders in Ahmedabad, Gujarati consumers know their tea and won't settle for inferior quality. <strong>Manish Tea Traders</strong> supplies the premium-grade tea that meets Gujarat's exacting standards.</p>

      <h3>Understanding Gujarat's Quality Consciousness</h3>
      <p>Gujarati households judge tea by multiple criteria: visual appearance (the "bloom"), aroma before brewing, color of the liquor, and of course, taste. They're educated consumers who can spot adulteration or staleness immediately. This market rewards suppliers who deliver genuine quality.</p>

      <h3>Our Gujarat-Focused Product Range</h3>
      
      <h4>Premium Assam BP – The Gold Standard</h4>
      <p>This is our flagship product for Gujarat. Using only premium Broken Pekoe grades from reputable Assam gardens, it delivers the bold, aromatic, golden liquor that Gujarati consumers expect. The leaves have that characteristic "bloom"—the clean, black appearance that signals freshness and quality.</p>

      <h4>Gift Pack Grade – Festival Special</h4>
      <p>During Diwali, Gujarati New Year, and wedding seasons, tea becomes a popular gift item. We supply specially selected grades with superior visual appeal, perfect for retailers creating premium gift packs. The tea looks as good as it tastes—essential for the gift market.</p>

      <h4>Family Blend – Daily Consumption</h4>
      <p>For everyday household use, we offer a slightly more economical blend that still maintains the quality standards Gujarat demands. It's not our cheapest product, but it delivers the consistent taste that builds customer loyalty.</p>

      <h3>Serving Gujarat's Markets</h3>
      <ul>
        <li><strong>Surat Wholesale Hub:</strong> Bulk supplies to traders in Ring Road and Varachha areas</li>
        <li><strong>Ahmedabad Distributors:</strong> Regular shipments to Gujarat's commercial capital</li>
        <li><strong>Gift Pack Manufacturers:</strong> Premium grades for companies creating Diwali and wedding gift hampers</li>
        <li><strong>Retail Chains:</strong> Consistent supply for supermarket chains across Gujarat</li>
        <li><strong>Export Houses:</strong> Quality tea for Gujarati diaspora markets in US, UK, and East Africa</li>
      </ul>

      <h3>Quality Assurance for Gujarat</h3>
      <p>Every consignment to Gujarat goes through enhanced quality checks. We understand that one bad batch can destroy years of reputation in this market. Our Gujarat-specific quality protocol includes:</p>
      <ul>
        <li>Visual inspection for bloom and leaf appearance</li>
        <li>Aroma verification before dispatch</li>
        <li>Moisture content testing (critical for shelf life)</li>
        <li>Taste testing against Gujarat market standards</li>
      </ul>

      <p><strong>Ready to serve Gujarat's quality-conscious market?</strong> Contact Manish Tea Traders for samples of our premium Gujarat-grade tea. We understand what it takes to succeed where quality is never compromised.</p>
    `},{id:"muzaffarpur",city:"Muzaffarpur",slug:"tea-wholesaler-muzaffarpur",title:"Tea Wholesaler in Muzaffarpur | North Bihar Distribution Hub",metaDescription:"Direct tea supply to Muzaffarpur and North Bihar. Competitive wholesale rates for loose tea. Janata Blend for price-conscious rural markets.",heading:"Tea Wholesaler in Muzaffarpur – Gateway to North Bihar's Villages",content:`
      <p>Muzaffarpur isn't just another city—it's the distribution gateway to North Bihar's vast rural hinterland. From here, tea flows to Sitamarhi, East and West Champaran, Darbhanga, and countless villages across the region. <strong>Manish Tea Traders</strong> understands Muzaffarpur's unique role as a redistribution hub and prices our tea accordingly.</p>

      <h3>The Redistribution Economics</h3>
      <p>Muzaffarpur wholesalers don't just sell to local retailers—they supply smaller traders who then distribute to village-level shops across North Bihar. This multi-tier distribution requires tea priced low enough to allow margins at each level while still delivering acceptable quality to the end consumer.</p>

      <h3>Our Muzaffarpur-Focused Offerings</h3>
      
      <h4>Janata Blend – The Volume Leader</h4>
      <p>Specifically formulated for price-conscious rural markets, this blend delivers drinkable tea at rock-bottom pricing. It's not fancy, but it's honest tea that won't disappoint village consumers who are watching every rupee. The blend maintains basic strength and color—the minimum quality threshold rural Bihar demands.</p>

      <h4>Mandi Special – For Local Consumption</h4>
      <p>Muzaffarpur city itself has different requirements than the rural areas it serves. This blend targets local tea stalls, small restaurants, and household consumption within Muzaffarpur, offering slightly better quality at modest pricing.</p>

      <h4>Bulk Loose Tea (Khula Chai)</h4>
      <p>Many North Bihar retailers still sell loose tea by weight rather than in packets. We supply bulk loose tea in large sacks, allowing maximum flexibility for retailers who serve customers buying 50 grams or 100 grams at a time.</p>

      <h3>Logistics for North Bihar Distribution</h3>
      <p>We ship full trucks to Muzaffarpur mandi, where local wholesalers break down the consignment for redistribution. Our pricing accounts for this redistribution model, ensuring healthy margins for Muzaffarpur traders while keeping final retail prices competitive.</p>

      <p>Packaging is reinforced to withstand multiple handling stages—from our Siliguri warehouse to Muzaffarpur mandi to village shops. Double-stitched jute bags with moisture-resistant linings ensure tea quality survives the journey.</p>

      <p><strong>Ready to serve North Bihar's massive rural market?</strong> Contact Manish Tea Traders for pricing on our Muzaffarpur-specific blends. We understand the redistribution economics that make or break success in this market.</p>
    `},{id:"dhanbad",city:"Dhanbad",slug:"tea-supplier-dhanbad",title:"Tea Supplier in Dhanbad | Coal Belt Industrial Tea Supply",metaDescription:"Strong, high-caffeine tea for Dhanbad and Bokaro's industrial workforce. Bulk 50kg packaging for colliery canteens and mess halls.",heading:"Tea Supplier in Dhanbad – Energizing the Coal Capital",content:`
      <p>Dhanbad and the surrounding coal belt have unique tea requirements. The industrial workforce—miners, factory workers, transport operators—needs tea that does more than refresh. They need tea that energizes, that cuts through fatigue, that provides the caffeine boost to power through demanding physical labor. <strong>Manish Tea Traders</strong> supplies exactly that kind of tea.</p>

      <h3>Understanding Industrial Tea Requirements</h3>
      <p>Colliery canteens and industrial mess halls serve tea differently than retail shops. They brew in large batches, often keeping tea warm for extended periods, and serve it to workers who need maximum energy with minimum fuss. The tea must deliver high caffeine, maintain strength even when diluted, and cost less per cup for budget-conscious institutional buyers.</p>

      <h3>Our Coal Belt Formulations</h3>
      
      <h4>Industrial Strength Blend – Maximum Caffeine</h4>
      <p>This is our strongest formulation, specifically created for the coal belt's demanding workforce. Using high-caffeine Assam grades, it delivers the energizing punch that miners and factory workers need. It brews dark, tastes strong, and provides genuine energy—not just flavor.</p>

      <h4>Canteen Dust – High-Volume Efficiency</h4>
      <p>For mess halls serving hundreds of workers per shift, we supply specialized dust grades that brew instantly in large batches. The tea maintains consistency from the first cup to the last, ensuring every worker gets the same quality regardless of when they take their tea break.</p>

      <h4>Bulk Institutional Packaging</h4>
      <p>We offer 50kg bulk bags specifically for institutional buyers. This larger packaging reduces per-kilogram costs and minimizes the hassle of frequent reordering. The bags are reinforced to withstand the rough handling common in industrial environments.</p>

      <h3>Serving the Coal Belt</h3>
      <ul>
        <li><strong>Colliery Canteens:</strong> Direct supply to coal mine mess halls across Dhanbad district</li>
        <li><strong>Bokaro Steel Plant:</strong> Bulk supplies for one of India's largest industrial complexes</li>
        <li><strong>Transport Operators:</strong> Tea for truck stops and transport company canteens</li>
        <li><strong>Industrial Contractors:</strong> Supplies for companies managing worker mess facilities</li>
      </ul>

      <h3>Logistics for Industrial Buyers</h3>
      <p>We understand that industrial buyers need reliability above all. We maintain dedicated stock for coal belt customers and offer flexible delivery schedules that align with your operational requirements. Payment terms are available for established institutional buyers with proper documentation.</p>

      <p><strong>Ready to energize your workforce?</strong> Contact Manish Tea Traders for samples of our industrial-strength blends. We understand what it takes to keep the coal belt running.</p>
    `},{id:"indore",city:"Indore",slug:"tea-wholesaler-indore-mp",title:"Tea Wholesaler in Indore | Madhya Pradesh Supply",metaDescription:"Leading tea supplier for Indore and MP. Poha-Jalebi needs great tea, and we supply it.",heading:"Tea Wholesaler in Indore – The Heart of Madhya Pradesh",content:`
      <p>Indore isn't just Madhya Pradesh's commercial capital—it's India's street food capital, and tea plays a starring role in that culture. From the legendary Poha-Jalebi breakfast to late-night Sarafa Bazaar snacks, every meal in Indore demands great chai. <strong>Manish Tea Traders</strong> supplies the tea that fuels Indore's vibrant food scene.</p>

      <h3>Understanding Indore's Food-Centric Tea Culture</h3>
      <p>In Indore, tea isn't consumed in isolation—it's always paired with food. This creates unique requirements: the tea must be strong enough to cut through rich, sweet, or spicy flavors, yet smooth enough to complement rather than overpower. Indore consumers are sophisticated about this balance.</p>

      <h3>Our Malwa-Region Formulations</h3>
      
      <h4>Poha-Jalebi Special – The Breakfast Champion</h4>
      <p>Indore's iconic breakfast combination demands tea with specific characteristics: strong enough to balance the sweetness of jalebi, yet aromatic enough to complement the subtle flavors of poha. We've perfected a blend that Indore's breakfast joints swear by.</p>

      <h4>Sarafa Bazaar Blend – For Late-Night Operations</h4>
      <p>Indore's famous night food market runs until dawn, serving thousands of cups of tea alongside chaat, samosas, and sweets. This blend brews quickly, maintains strength through heavy milk ratios, and costs less per cup for high-volume operations.</p>

      <h4>Premium Cafe Grade – For Modern Establishments</h4>
      <p>Indore's growing cafe culture in Palasia, Vijay Nagar, and other upmarket areas demands quality tea. We supply premium Assam leaf and specialty blends that appeal to Indore's educated, affluent consumers.</p>

      <h3>Serving Madhya Pradesh's Markets</h3>
      <ul>
        <li><strong>Indore Wholesale Markets:</strong> Bulk supplies to traders in Cloth Market and wholesale areas</li>
        <li><strong>Street Food Vendors:</strong> Economy blends for Sarafa, Chappan Dukan, and other food hubs</li>
        <li><strong>Restaurant Chains:</strong> Consistent supply for Indore's growing organized food sector</li>
        <li><strong>Retail Distributors:</strong> Supplies for kirana networks across Madhya Pradesh</li>
      </ul>

      <h3>Logistics to Central India</h3>
      <p>We ship directly from Siliguri to Indore transport nagar, with typical transit time of 6-8 days. For bulk orders above 1000kg, we arrange direct delivery to your location in Indore. Our packaging is designed to withstand the long journey while maintaining tea freshness.</p>

      <p><strong>Ready to serve Indore's food-loving population?</strong> Contact Manish Tea Traders for samples of our Malwa-region blends. We understand the tea that complements India's street food capital.</p>
    `},{id:"nagpur",city:"Nagpur",slug:"tea-supplier-nagpur",title:"Tea Supplier in Nagpur | Central India Logistics",metaDescription:"Wholesale tea delivery to Nagpur. Connecting Siliguri tea to Central India.",heading:"Tea Supplier in Nagpur – Central India's Tea Hub",content:`
      <p>Nagpur's location at the geographic center of India isn't just trivia—it's a strategic advantage that makes the city a crucial distribution hub for Central India. <strong>Manish Tea Traders</strong> leverages Nagpur's connectivity to serve Vidarbha, eastern Madhya Pradesh, and parts of Chhattisgarh with fresh tea from North Bengal.</p>

      <h3>The Central India Distribution Advantage</h3>
      <p>Nagpur sits at the intersection of major highways and rail routes connecting North, South, East, and West India. This makes it the ideal redistribution point for tea flowing from Siliguri to Central Indian markets. What takes 8-10 days to reach other Central Indian cities arrives in Nagpur in 6-7 days, giving you a freshness advantage.</p>

      <h3>Understanding Vidarbha's Tea Preferences</h3>
      <p>The Vidarbha region has distinct tea preferences shaped by local water quality and cultural tastes. Consumers here appreciate tea with bright liquor color and a slightly sweet undertone—characteristics that Dooars CTC tea delivers perfectly. Unlike the heavy, malty Assam preference in North India, Vidarbha leans toward lighter, brisk teas.</p>

      <h3>Our Nagpur-Focused Product Range</h3>
      
      <h4>Dooars CTC Special – The Regional Favorite</h4>
      <p>This is our flagship product for Nagpur and Vidarbha. Sourced from premium Dooars gardens, it delivers that characteristic bright, golden liquor with a naturally sweet finish. The tea brews quickly and maintains its pleasant character even with extended boiling—perfect for the traditional preparation methods popular in the region.</p>

      <h4>Vidarbha Blend – Optimized for Local Water</h4>
      <p>Nagpur's water has specific mineral characteristics that affect tea brewing. We've developed a blend specifically adjusted for Vidarbha's water profile, ensuring consistent taste whether you're in Nagpur city, Wardha, Akola, or Amravati.</p>

      <h4>Distribution Grade – For Wholesalers</h4>
      <p>Nagpur wholesalers redistribute tea across smaller towns and rural areas of Vidarbha and eastern MP. We offer economy blends priced to allow healthy margins through multiple distribution tiers while maintaining acceptable quality for end consumers.</p>

      <h3>Serving Central India's Markets</h3>
      <ul>
        <li><strong>Nagpur Wholesale Hub:</strong> Bulk supplies to traders in Sitabuldi and Itwari wholesale markets</li>
        <li><strong>Vidarbha Region:</strong> Distribution to Wardha, Chandrapur, Akola, Amravati, and surrounding areas</li>
        <li><strong>Eastern MP:</strong> Supplies reaching Chhindwara, Seoni, and nearby Madhya Pradesh districts</li>
        <li><strong>Retail Chains:</strong> Consistent supply for supermarket chains expanding across Vidarbha</li>
        <li><strong>Institutional Buyers:</strong> Bulk supplies for educational institutions and corporate canteens</li>
      </ul>

      <h3>Logistics: Leveraging Nagpur's Connectivity</h3>
      <p>We utilize Nagpur's excellent rail and road connectivity to ensure faster delivery than competing suppliers. Our tea reaches Nagpur transport hubs within 6-7 days from Siliguri, giving you a 2-3 day freshness advantage over suppliers routing through other cities.</p>

      <p>For bulk orders above 1000kg, we arrange direct delivery to your location in Nagpur or surrounding Vidarbha areas. Our packaging is designed to withstand Central India's climate while maintaining tea freshness during the journey.</p>

      <h3>Why Nagpur Buyers Choose Us</h3>
      <ul>
        <li>Faster delivery times leveraging Nagpur's central location</li>
        <li>Dooars CTC that matches Vidarbha taste preferences</li>
        <li>Water-optimized blends for consistent brewing</li>
        <li>Competitive pricing for redistribution margins</li>
        <li>Reliable supply for year-round inventory management</li>
      </ul>

      <p><strong>Ready to leverage Nagpur's strategic advantage?</strong> Contact Manish Tea Traders for samples of our Vidarbha-optimized blends. We understand Central India's unique position in the tea distribution network.</p>
    `}],kM=()=>{const{slug:t}=Pc(),n=Vw.find(s=>s.slug===t);return n?o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:n.title,description:n.metaDescription,canonicalUrl:`https://teatraders.info/wholesale-supply/${t}/`,image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9",schema:[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://teatraders.info/"},{"@type":"ListItem",position:2,name:"Service Areas",item:"https://teatraders.info/locations"},{"@type":"ListItem",position:3,name:n.city,item:`https://teatraders.info/wholesale-supply/${t}`}]}]}),o.jsxs("article",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[o.jsxs("div",{className:"mb-8",children:[o.jsx(fe,{to:"/locations",className:"text-tea-600 hover:underline text-sm mb-4 inline-block",children:"← Back to Service Areas"}),o.jsx("h1",{className:"text-3xl md:text-4xl font-serif font-bold text-tea-900 mb-4",children:n.heading}),o.jsx("div",{className:"h-1 w-20 bg-tea-500 rounded"})]}),o.jsx("div",{className:"prose prose-lg prose-tea max-w-none mb-12",dangerouslySetInnerHTML:{__html:n.content}}),o.jsxs("div",{className:"bg-tea-50 border border-tea-100 rounded-xl p-8 text-center",children:[o.jsxs("h2",{className:"text-2xl font-bold text-tea-900 mb-4",children:["Need Tea Supply in ",n.city,"?"]}),o.jsxs("p",{className:"text-gray-700 mb-6",children:["We dispatch regularly to ",n.city,". Contact us for current rates and transport details."]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx("a",{href:"tel:+917001958588",className:"bg-tea-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors",children:"Call Now"}),o.jsx("a",{href:"https://wa.me/917001958588?text=Hi,%20I%20need%20wholesale%20rates%20for%20delivery%20in%20your%20area",className:"bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors",children:"WhatsApp Us"})]})]}),o.jsxs("div",{className:"mb-12 border-t border-gray-100 pt-10",children:[o.jsx("h3",{className:"text-2xl font-serif font-bold text-tea-900 mb-6",children:"Frequently Asked Questions"}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-100 shadow-sm",children:[o.jsxs("h4",{className:"font-bold text-gray-900 mb-2",children:["Do you deliver to ",n.city,"?"]}),o.jsxs("p",{className:"text-gray-600 text-sm",children:["Yes, we deliver to ",n.city," via our network of transport partners (Road/Rail). Delivery usually takes 3-5 days from Siliguri."]})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-100 shadow-sm",children:[o.jsx("h4",{className:"font-bold text-gray-900 mb-2",children:"What is the minimum order quantity (MOQ)?"}),o.jsx("p",{className:"text-gray-600 text-sm",children:"Our MOQ for wholesale orders is just 30 kg (one sack). You can mix different grades in your first order to test quality."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-100 shadow-sm",children:[o.jsx("h4",{className:"font-bold text-gray-900 mb-2",children:"Can I get a GST bill?"}),o.jsxs("p",{className:"text-gray-600 text-sm",children:["Absolutely. We are a registered business and provide full GST billing for all interstate shipments to ",n.city,"."]})]})]})]})]})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(Fi,{})]}):o.jsx(hg,{to:"/locations",replace:!0})},CM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-20",children:[o.jsx(Rt,{title:"Tea Wholesale Supply Network | Major Cities in India",description:"We supply wholesale tea to major cities across West Bengal, Bihar, UP, Jharkhand and beyond. Check our network coverage.",canonicalUrl:"https://teatraders.info/locations/",image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9"}),o.jsx("div",{className:"bg-tea-50 py-16",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[o.jsx("h1",{className:"text-4xl font-serif font-bold text-tea-900 mb-6",children:"Our Supply Network"}),o.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Manish Tea Traders connects the tea gardens of Siliguri to retailers across India. We have established logistics routes for the following regions."})]})}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Vw.map(t=>o.jsxs(fe,{to:`/wholesale-supply/${t.slug}`,className:"block group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-tea-200",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx("div",{className:"bg-tea-100 p-3 rounded-full group-hover:bg-tea-600 transition-colors",children:o.jsx(xg,{className:"h-6 w-6 text-tea-700 group-hover:text-white"})}),o.jsx("h2",{className:"text-xl font-bold text-gray-900 group-hover:text-tea-700",children:t.city})]}),o.jsx("p",{className:"text-gray-600 text-sm mb-4 line-clamp-2",children:t.metaDescription}),o.jsx("span",{className:"text-tea-600 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform",children:"View Supply Details →"})]},t.id))})})]}),o.jsx(Dt,{}),o.jsx(Ea,{})]}),Sf="/assets/tea-dust-B1bLOC6A.jpg",Hw="/assets/tea-ctc-yUNCqMqE.jpg",lc="/assets/tea-orthodox-whole-pZEbvP6F.jpg",Uw=[{id:"b1",title:"Best Wholesale Tea Markets in India (2026 Guide)",slug:"wholesale-tea-markets-india",date:"October 15, 2024",author:"Manish Tea Traders",excerpt:"Looking for the best wholesale tea markets in India? From Siliguri to Kolkata, we rank the top markets for price, variety, and freshness.",content:`
      <p>Tea is the second most consumed beverage in the world, and in India, it's a religion. For a tea business owner, sourcing is everything. If you buy right, you sell right.</p>

      <h2>1. Siliguri Tea Auction Center (West Bengal)</h2>
      <p><strong>The Hub of North Bengal.</strong> Siliguri is the gateway to the Northeast and sits right in the middle of the tea-growing regions (Darjeeling, Dooars, and Terai).</p>
      <ul>
        <li><strong>Best For:</strong> Fresh CTC Leaf, Dust, and basic Darjeeling blends.</li>
        <li><strong>Why Buy Here:</strong> It has the freshest stock because it's closest to the gardens. Logistics are faster to Bihar, UP, and Delhi.</li>
        <li><strong>Insider Tip:</strong> Visit Sevoke Road for local wholesalers who offer better rates than the big auction houses for smaller quantities.</li>
      </ul>

      <h2>2. Kolkata Tea Auction Center (West Bengal)</h2>
      <p><strong>The Historic Giant.</strong> Kolkata handles premium Darjeelings and high-quality Assam orthodox teas.</p>
      <ul>
        <li><strong>Best For:</strong> Premium Darjeeling, Assam Orthodox, and Export-quality blends.</li>
        <li><strong>Why Buy Here:</strong> If you are targeting the premium segment or gift packs, Kolkata is your place.</li>
      </ul>

      <h2>3. Guwahati Tea Auction Center (Assam)</h2>
      <p><strong>The Source of Strength.</strong> This is where the heavy-bodied Assam liquor comes from.</p>
      <ul>
        <li><strong>Best For:</strong> Strong, malty CTC tea that gives a reddish color.</li>
        <li><strong>Why Buy Here:</strong> Ideal for "Kadak Chai" blends popular in Maharashtra and Gujarat.</li>
      </ul>

      <h2>Which One Should You Choose?</h2>
      <p>If you are starting a new brand, you need a balance of <strong>Quality + Price + Consistency</strong>. Traveling to auctions can be expensive. That’s why <strong>Manish Tea Traders</strong> (Siliguri) brings the best of the Siliguri market directly to your doorstep. We source directly from the gardens, saving you the travel and brokerage costs.</p>
    `,keywords:"wholesale tea market India, Siliguri tea market, Kolkata tea auction, buy bulk tea India",imageUrl:"/blog-images/tea_market_india_map.png"},{id:"b2",title:"5 Secrets to Profitable Tea Blending",slug:"tea-blending-secrets",date:"October 20, 2024",author:"Manish Tea Traders",excerpt:"Tea blending is an art and a science. Learn how to mix different grades to create the perfect cup for your customers.",content:`
      <p>Ever wondered why "Tata Tea Gold" or "Taj Mahal" tastes the same every single time, year after year? It's not magic; it's <strong>blending</strong>.</p>

      <h2>1. Consistency is King</h2>
      <p>Tea is a natural agricultural product. A batch plucked in June tastes different from a batch plucked in October. A blender's job is to mix them so the final packet tastes identical.</p>

      <h2>2. The Ratio Rule (Example)</h2>
      <p>A classic household blend often uses:</p>
      <ul>
        <li><strong>50% Dooars CTC (for body/thickness)</strong></li>
        <li><strong>30% Assam CTC (for strength/color)</strong></li>
        <li><strong>20% Darjeeling/Orthodox (for aroma)</strong></li>
      </ul>

      <h2>3. Never Compromise on Base Tea</h2>
      <p>You can hide a weak aroma with additives, but you cannot hide a watery tea. Always ensure your base (usually Dooars or Assam CTC) has good "keeping quality".</p>

      <h2>4. Know Your Customer's Water</h2>
      <p>Yes, water matters! Hard water kills tea flavor. If you sell in an area with hard water, you need a stronger, maltier blend (more Assam).</p>

      <h2>5. Taste Before You Buy</h2>
      <p>Never buy bulk tea based on photos. Always ask for samples. At <strong>Manish Tea Traders</strong>, we send samples of our signature blends so you know exactly what you are paying for.</p>
    `,keywords:"tea blending techniques, how to blend tea, tea tasting guide, profitable tea business",imageUrl:"/blog-images/tea-tasting-lab.png"},{id:"b3",title:"Why Siliguri is India’s Biggest Tea Trading Hub",slug:"siliguri-tea-market",date:"October 25, 2024",author:"Manish Tea Traders",excerpt:"Why do major brands source from Siliguri? Proximity to gardens, better logistics, and the auction center advantage.",content:`
      <p>If you check the back of a Tata Tea or Red Label packet, you might see "Packed in Siliguri" or "Sourced from West Bengal". Why?</p>

      <h2>The Chicken's Neck Corridor</h2>
      <p>Siliguri is strategically located in the narrow strip of land connecting Northeast India to the mainland. It is physically surrounded by tea gardens.</p>
      <ul>
        <li><strong>North:</strong> Darjeeling (The Champagne of Teas)</li>
        <li><strong>East:</strong> Dooars (The heavy-bodied CTC belt)</li>
        <li><strong>Further East:</strong> Assam (The strong malty tea)</li>
      </ul>

      <h2>The Logistics Advantage</h2>
      <p>Because we are at the source, logistics costs are minimal. When you buy from a wholesaler in Delhi, they have already paid for transport from Siliguri to Delhi, plus their margin. When you buy from <strong>Manish Tea Traders</strong> in Siliguri, you cut out that middle leg.</p>

      <h2>Freshness is Currency</h2>
      <p>Tea is hygroscopic—it absorbs moisture. The more it travels and sits in godowns, the more flavor it loses. Buying from Siliguri ensures you get the "New Season" stock while it still smells like the garden.</p>
    `,keywords:"Siliguri tea wholesale, tea suppliers Siliguri, benefits buying tea Siliguri",imageUrl:"/blog-images/tea-business-planning.png"},{id:"b4",title:"Darjeeling Tea Flush Guide – First vs Second Flush",slug:"darjeeling-tea-flush-guide",date:"November 1, 2024",author:"Manish Tea Traders",excerpt:"First Flush is floral, Second Flush is Muscatel. We explain the taste profiles and why prices differ so you can sell better.",content:`
      <p>Darjeeling tea is unique because it tastes completely different depending on <em>when</em> it is plucked. These harvest periods are called "Flushes".</p>

      <h2>First Flush (Spring: Feb - April)</h2>
      <p>This is the very first harvest after the winter dormancy. The leaves are tender and light green.</p>
      <ul>
        <li><strong>Taste:</strong> Very light, floral, grassy, and delicate. The liquor is pale yellow.</li>
        <li><strong>Market:</strong> Highly prized for exports. Sold as premium "Champagne of Teas".</li>
      </ul>

      <h2>Second Flush (Summer: May - June)</h2>
      <p>The sun is stronger, and the leaves mature. This is the most famous Darjeeling tea.</p>
      <ul>
        <li><strong>Taste:</strong> The famous "Muscatel" flavor (tastes like muscat grapes). The liquor is amber/copper.</li>
        <li><strong>Market:</strong> The standard for a good cup of black Darjeeling tea without milk.</li>
      </ul>

      <h2>Autumn Flush (Oct - Nov)</h2>
      <p>Harvested before winter sets in.</p>
      <ul>
        <li><strong>Taste:</strong> Stronger, darker, slightly creamy. Can sometimes take a drop of milk.</li>
        <li><strong>Price:</strong> Generally more affordable than First/Second flush.</li>
      </ul>

      <p>Looking for authentic Darjeeling Leaf? Check our <strong>Products page</strong> for current availability.</p>
    `,keywords:"Darjeeling tea flushes, first flush vs second flush, buy darjeeling tea",imageUrl:lc},{id:"b5",title:"How to Start a Tea Brand in India (Step-by-Step)",slug:"start-tea-brand-india",date:"November 5, 2024",author:"Manish Tea Traders",excerpt:"Dreaming of your own chai brand? Here is the roadmap from FSSAI registration to sourcing and packaging.",content:`
      <p>The tea market in India is huge, but so is the competition. However, there is always room for a quality brand. Here is how you can start.</p>

      <h2>Step 1: Define Your Niche</h2>
      <p>Don't just sell "Tea". Sell "Kadak Chai for Students" or "Premium Orthodox for Health". Define who you are selling to.</p>

      <h2>Step 2: Legal Basics</h2>
      <p><strong>FSSAI License:</strong> Mandatory for any food business. <strong>GST Registration:</strong> Required for buying wholesale.</p>

      <h2>Step 3: Sourcing (The Most Critical Step)</h2>
      <p>You don't need to own a tea garden. You need a reliable partner. This is where <strong>Manish Tea Traders</strong> comes in. We act as your backend supply chain.</p>
      <ul>
        <li>We provide consistent quality (so your packet tastes the same every month).</li>
        <li>We offer loose tea in bulk (30kg sacks).</li>
      </ul>

      <h2>Step 4: Packaging (Private Label)</h2>
      <p>You don't need a factory. We offer <strong>Private Label Packaging</strong>. You choose the blend (e.g., our <em>Rajni Gold</em>), and we pack it in pouches with your brand name and logo. You focus on marketing; we handle the manufacturing.</p>
    `,keywords:"start tea business India, private label tea supplier, FSSAI for tea",imageUrl:"/blog-images/tea-branding-design.png"},{id:"b6",title:"Assam Tea vs Darjeeling Tea – Which Is Better for Wholesale?",slug:"assam-vs-darjeeling",date:"November 10, 2024",author:"Manish Tea Traders",excerpt:"Comparing the strong, malty Assam tea with the delicate, floral Darjeeling tea. Which one suits your customers?",content:`
      <p>As a retailer, you might wonder: should I stock Assam Tea or Darjeeling Tea? The answer depends entirely on <em>how</em> your customers drink their tea.</p>

      <h2>The Milk Test</h2>
      <p>This is the easiest way to decide.</p>
      <ul>
        <li><strong>Assam Tea:</strong> Bold, Malty, Strong. It is designed to be drunk with Milk and Sugar. It cuts through the milk to give a rich color. This is the "Chai" of India.</li>
        <li><strong>Darjeeling Tea:</strong> Delicate, Floral, Astringent. It is usually drunk Black (without milk) or with lemon. Adding milk often ruins the flavor.</li>
      </ul>

      <h2>The Customer Profile</h2>
      <ul>
        <li><strong>Stock Assam (CTC) If:</strong> Your customers are general households, tea stalls, offices, or cafes serving Masala Chai.</li>
        <li><strong>Stock Darjeeling (Orthodox) If:</strong> You cater to health-conscious people, gift buyers, or premium cafes serving "English Breakfast" style tea.</li>
      </ul>

      <p>At Manish Tea Traders, we supply both. Our <strong>Assam Granules</strong> are a bestseller for the milk-tea segment, while our <strong>Darjeeling Orthodox</strong> caters to the premium niche.</p>
    `,keywords:"Assam vs Darjeeling tea, tea difference guide, wholesale tea selection",imageUrl:"/blog-images/assam-vs-darjeeling.png"},{id:"b7",title:"How to Identify Good Quality Tea for Bulk Buying",slug:"identify-quality-tea",date:"November 15, 2024",author:"Manish Tea Traders",excerpt:"Don't get cheated. Learn the 3 sensory tests to judge tea quality like a pro: Appearance, Aroma, and Liquor.",content:`
      <p>When buying 300kg or 500kg of tea, a small difference in quality can ruin your reputation. Here is how professional tea tasters judge quality.</p>

      <h2>1. Visual Test (Leaf Appearance)</h2>
      <ul>
        <li><strong>Blackness:</strong> Good processed black tea should be black or dark brown, not gray or fiber-filled.</li>
        <li><strong>Size Uniformity:</strong> In a specific grade (like BP), all granules should be roughly the same size. Too much dust in a leaf grade is bad.</li>
      </ul>

      <h2>2. Aroma Test (Smell)</h2>
      <p>Take a handful of dry leaves and breathe on them (to warm them up). Then smell deeply. It should smell fresh, sweet, or malty. If it smells like damp cardboard or hay, it's old or moisture-damaged.</p>

      <h2>3. Liquor Test (The Brew)</h2>
      <p>This is the final verdict. Brew 3 grams in 150ml boiling water for 5 minutes.</p>
      <ul>
        <li><strong>Color:</strong> Should be bright red or copper. Dull brown is bad.</li>
        <li><strong>Briskness:</strong> Good tea makes your gums feel "dry" or lively. This "briskness" is the sign of high caffeine and polyphenols.</li>
      </ul>

      <p><strong>Want to train your palate?</strong> Order our <strong>Sample Kit</strong> to taste the difference between premium and standard grades.</p>
    `,keywords:"tea quality check, how to taste tea, bulk tea buying guide",imageUrl:"/blog-images/tea-quality-testing.png"},{id:"b8",title:"Tea Dust vs. Leaf Tea for Indian Market",slug:"tea-dust-vs-leaf",date:"November 20, 2024",author:"Manish Tea Traders",excerpt:"Should you sell Dust or Leaf? Understand the preferences of Tea Stalls vs. Households in India.",content:`
      <p>In the wholesale tea business, "Dust" is not a dirty word. In fact, it's the highest-selling category in many states. But where does it fit?</p>

      <h2>Tea Dust (The Hotel King)</h2>
      <p>"Dust" refers to the smallest particle size of tea.</p>
      <ul>
        <li><strong>Pros:</strong> Brews instantly, gives very strong color, highly affordable.</li>
        <li><strong>Target Audience:</strong> Tea Stalls (Dhabas), Railway Stations, Commercial Canteens, and lower-income households.</li>
        <li><strong>Best Selling Grade:</strong> "Hotel Dust" or "Primary Dust".</li>
      </ul>

      <h2>Leaf Tea (The Household Favorite)</h2>
      <p>"Leaf" usually refers to broken grades like BOP, BP, or BOPSM.</p>
      <ul>
        <li><strong>Pros:</strong> Better flavor, stays fresh longer, less bitterness.</li>
        <li><strong>Target Audience:</strong> Middle-class households, office pantries, premium cafes.</li>
      </ul>

      <h2>The Family Blend</h2>
      <p>Many families prefer a mix. A popular strategy is to sell a "Family Blend" which is 70% Leaf (for taste) and 30% Dust (for strength). We help you create this perfect ratio.</p>
    `,keywords:"tea dust vs leaf tea, hotel tea powder, best tea for tea stall",imageUrl:Sf},{id:"b9",title:"Tea Business Profit Margin Calculator",slug:"tea-business-profit-margin",date:"November 25, 2024",author:"Manish Tea Traders",excerpt:"Is the tea business profitable? We break down the costs: Purchase, Packaging, Transport, and Final Retail Price.",content:`
      <p>Let's talk numbers. Is selling tea profitable? Here is a simple breakdown for a small tea packer.</p>

      <h3>The Cost Breakdown (Per Kg) - Example</h3>
      <ul>
        <li><strong>Loose Tea cost (from Siliguri):</strong> ₹200/kg</li>
        <li><strong>Transport to your City:</strong> ₹10/kg</li>
        <li><strong>Packaging (Pouch + Labor):</strong> ₹30/kg</li>
        <li><strong>Marketing/Distributor Margin:</strong> ₹40/kg</li>
      </ul>
      <p><strong>Total Cost to You:</strong> ₹280/kg</p>

      <h3>The Selling Price</h3>
      <ul>
        <li><strong>Retail Market Price:</strong> ₹400 - ₹450/kg</li>
      </ul>

      <h3>The Profit</h3>
      <ul>
        <li><strong>Your Margin:</strong> ₹120 - ₹170 per kg.</li>
      </ul>

      <p>If you sell just <strong>100 kg per month</strong> (which is very low), you make ₹12,000 - ₹17,000 profit. A successful local brand easily sells 1000kg+ per month.</p>
      <p><em>Note: Prices fluctuate. Contact us for today's live wholesale rates.</em></p>
    `,keywords:"tea business profit margin, tea wholesale price India, is tea business profitable",imageUrl:"/blog-images/tea-profit-calculator.png"},{id:"b10",title:"Understanding Tea Grades: BP, BOP, OF, PD",slug:"tea-grades-explained",date:"December 1, 2024",author:"Manish Tea Traders",excerpt:"Confused by the acronyms? BP, BOP, OF, PD? We decode the grading system of CTC tea.",content:`
      <p>CTC (Crush, Tear, Curl) tea is the engine of the Indian tea industry. It’s what gives our chai its characteristic color and strength. But if you look at our price list, you see terms like BP, OF, PD. What do they mean?</p>

      <h2>Decoding the Jargon</h2>
      <p>Tea is graded by size, not necessarily quality. However, the size determines how the tea brews.</p>

      <h3>For Tea Stalls & Hotels (The Quick Brew)</h3>
      <p>If you run a high-volume tea stall, you need color—fast. Customers won't wait 10 minutes.</p>
      <ul>
        <li><strong>Recommended Grades:</strong> Dust, PD (Pekoe Dust), or OF (Orange Fannings).</li>
        <li><strong>Why:</strong> Smaller granules have more surface area, releasing strong liquor instantly. Check out our <strong>Tea Dust (Hotel Special)</strong>.</li>
      </ul>

      <h3>For Households (The Flavorful Cup)</h3>
      <p>Home consumers prefer a balance of flavor and strength. They don't like the "muddy" texture of pure dust.</p>
      <ul>
        <li><strong>Recommended Grades:</strong> BP (Broken Pekoe) or BOP (Broken Orange Pekoe).</li>
        <li><strong>Why:</strong> These larger granules take 3-4 minutes to brew but provide a richer, smoother taste.</li>
      </ul>

      <h2>The Secret: Blending</h2>
      <p>Most successful brands don't sell just one grade. They blend. A common mix is <strong>60% BP (for flavor) + 40% OF (for color)</strong>. At Manish Tea Traders, we have ready-made blends like <em>Rajni Gold</em> and <em>Begam Gold</em> that are pre-mixed for the perfect cup.</p>
    `,keywords:"CTC tea grades, difference BP OF dust tea, best tea for hotel",imageUrl:Hw},{id:"b11",title:"How to Store Tea in Bulk (Warehouse Tips)",slug:"tea-storage-warehouse-tips",date:"December 5, 2024",author:"Manish Tea Traders",excerpt:"Tea absorbs moisture and odors. Learn how to store your bulk stock to keep it fresh for 12 months.",content:`
      <p>Tea enemies are Moisture, Heat, Light, and Odors. Incorrect storage can turn premium tea into trash in 2 weeks.</p>

      <h2>1. The Warehouse Setup</h2>
      <ul>
        <li><strong>Floor:</strong> Never place tea bags directly on the floor. Use wooden pallets (4 inches high) to prevent ground moisture.</li>
        <li><strong>Walls:</strong> Keep bags 1 foot away from walls to prevent dampness.</li>
        <li><strong>Roof:</strong> Ensure no leaks. High humidity is a killer.</li>
      </ul>

      <h2>2. What NOT to Store Nearby</h2>
      <p>Tea is a sponge. Do not store it near:</p>
      <ul>
        <li>Spices (Cardamom, Clove) - unless you want masala chai!</li>
        <li>Soaps or detergents.</li>
        <li>Petrol or Chemicals.</li>
      </ul>

      <h2>3. Packaging for Storage</h2>
      <ul>
        <li><strong>Original Sacks:</strong> Good for 3-4 months if the erratic inner liner is intact.</li>
        <li><strong>Jars:</strong> For loose retail, transfer to airtight steel or glass jars immediately.</li>
      </ul>
    `,keywords:"how to store tea, bulk tea storage, tea warehouse guide",imageUrl:"/blog-images/tea-warehouse.png"},{id:"b12",title:"Tea Packaging Guide: Pouches vs. Jars vs. Loose",slug:"tea-packaging-guide",date:"December 10, 2024",author:"Manish Tea Traders",excerpt:"Packaging is your silent salesman. We compare costs and benefits of Pouch Packing, Box Packing, and Loose selling.",content:`
      <p>How you sell is as important as what you sell. Here are the 3 common models.</p>

      <h2>1. Loose Tea (The "Khula Chai" Model)</h2>
      <ul>
        <li><strong>Cost:</strong> Zero packaging cost.</li>
        <li><strong>Pros:</strong> Customers can smell and see the tea. High trust factor.</li>
        <li><strong>Cons:</strong> Hygiene concerns. Harder to build a brand.</li>
      </ul>

      <h2>2. Pouch Packing (The Most Popular)</h2>
      <ul>
        <li><strong>Cost:</strong> ₹150 - ₹250 per kg for printed cylinders (one-time) + material cost.</li>
        <li><strong>Pros:</strong> Professional look, preserves freshness, easy to distribute to shops.</li>
        <li><strong>Our Service:</strong> We offer <strong>Private Label Pouching</strong> starting at small quantities.</li>
      </ul>

      <h2>3. Box/Jar Packing (The Premium Look)</h2>
      <ul>
        <li><strong>Cost:</strong> Higher. Requires cardboard boxes or PET jars.</li>
        <li><strong>Pros:</strong> Perceived as "Premium". Excellent for Green Tea or Orthodox Leaf.</li>
      </ul>
    `,keywords:"tea packaging ideas, private label tea packaging, tea pouch design",imageUrl:"/blog-images/tea-pouch-mockups.png"},{id:"b13",title:"License Required for Tea Business in India",slug:"tea-business-license-india",date:"December 15, 2024",author:"Manish Tea Traders",excerpt:"Don't get fined! A checklist of mandatory licenses (FSSAI, GST, Trade License) to run a legal tea business.",content:`
      <p>Starting is easy, but staying legal keeps you safe. Here is your checklist.</p>

      <h2>1. FSSAI (Food License) - Mandatory</h2>
      <ul>
        <li><strong>Registration (Basic):</strong> If turnover < ₹12 Lakhs/year. Cost: ~₹100/year.</li>
        <li><strong>State License:</strong> If turnover > ₹12 Lakhs/year. Cost: ~₹2000/year.</li>
        <li><strong>Why:</strong> You cannot sell food without this. Period.</li>
      </ul>

      <h2>2. GST Registration</h2>
      <ul>
        <li><strong>Mandatory If:</strong> Turnover > ₹40 Lakhs (or ₹20 Lakhs in some states).</li>
        <li><strong>Voluntary:</strong> Highly recommended if you want to buy wholesale from big suppliers (like us) and claim input credit.</li>
        <li><strong>Tea GST Rate:</strong> 5% on Leaf/Dust.</li>
      </ul>

      <h2>3. Trade License</h2>
      <ul>
        <li>Issued by your local municipality/panchayat to operate a commercial shop.</li>
      </ul>

      <h2>4. Udyam Aadhar (MSME)</h2>
      <ul>
        <li><strong>Optional but Good:</strong> Helps in getting bank loans and government subsidies.</li>
      </ul>
    `,keywords:"tea business license, FSSAI for tea, GST on tea, trade license for tea shop",imageUrl:"/blog-images/tea-business-licenses.png"},{id:"b14",title:"How to Approach Tea Stalls for Sales",slug:"sell-tea-to-tea-stalls",date:"December 20, 2024",author:"Manish Tea Traders",excerpt:"Tea stalls are volume drivers. Learn the sales script and strategy to convince a chaiwala to switch to your brand.",content:`
      <p>Tea stalls buy 1-2 kg EVERY DAY. Convert 50 stalls, and you sell 3 tons a year. But they are tough customers.</p>

      <h2>The Chaiwala Mindset</h2>
      <p>They care about 3 things:</p>
      <ol>
        <li><strong>Yield:</strong> How many cups does 1 kg make? (More cups = More profit).</li>
        <li><strong>Color:</strong> Does it turn red quickly? (Saves gas).</li>
        <li><strong>Credit:</strong> Will you give udhaari?</li>
      </ol>

      <h2>The Pitch Strategy</h2>
      <ul>
        <li><strong>Don't Talk Flavor, Talk Strength:</strong> "Bhaiya, iska color dekho."</li>
        <li><strong>The 250g Sample:</strong> Don't give a free cup. Give a 250g packet for ₹50. Ask him to use it for one shift.</li>
        <li><strong>The "Jodi" Offer:</strong> Offer a Glass + Tea set deal for new customers.</li>
      </ul>

      <h2>Recommended Product</h2>
      <p>Pitch our <strong>Hotel Dust</strong> or <strong>Kadak Blend</strong>. It's designed for them.</p>
    `,keywords:"how to sell tea to stalls, tea marketing strategy, tea sales pitch",imageUrl:"/blog-images/tea-wholesale-market-scene.png"},{id:"b15",title:"Digital Marketing for Tea Brands (2026)",slug:"digital-marketing-tea-business",date:"December 25, 2024",author:"Manish Tea Traders",excerpt:"From Instagram Reels to Google My Business. How to sell tea online without spending lakhs on ads.",content:`
      <p>You don't need a big budget. You need a phone and internet.</p>

      <h2>1. Google My Business (GMB)</h2>
      <p><strong>Crucial.</strong> When someone searches "Tea wholesaler near me", you MUST appear. Post photos of your shop and stock weekly. Get reviews from every customer.</p>

      <h2>2. Instagram/Facebook Reels</h2>
      <p>Show the process. Videos of boiling tea, pouring chai, or vast tea gardens go viral. Use trending audio.</p>

      <h2>3. WhatsApp Business API</h2>
      <ul>
        <li>Broadcast latest rates to all your retailers every Monday.</li>
        <li>Take orders directly on WhatsApp.</li>
      </ul>

      <h2>4. Your Own Website</h2>
      <p>Like <strong>ManishTeaTraders.com</strong>. It builds trust. If a wholesale buyer from another city Googles you and finds a professional site, they trust you with their money.</p>
    `,keywords:"marketing ideas for tea business, digital marketing tea, sell tea online",imageUrl:"/blog-images/tea-digital-marketing.png"},{id:"b16",title:"10 Best Tea Business Name Ideas",slug:"tea-business-names",date:"December 30, 2024",author:"Manish Tea Traders",excerpt:"Stuck on naming your brand? Here are 10 catchy, traditional, and modern name ideas to inspire you.",content:`
      <p>A name should be memorable. Here are some templates.</p>

      <h2>Traditional & Trusty</h2>
      <ul>
        <li>[Your Name] Tea Traders (e.g., Manish Tea Traders)</li>
        <li>[City] Tea Depot (e.g., Bihar Tea Depot)</li>
        <li>Royal [City] Tea</li>
      </ul>

      <h2>Modern & Catchy</h2>
      <ul>
        <li>Chai Point</li>
        <li>The Tea Room</li>
        <li>Cup of Joy</li>
        <li>Brew & Sip</li>
      </ul>

      <h2>Vibe-Based</h2>
      <ul>
        <li>Morning Fresh Tea</li>
        <li>Kadak Chai Co.</li>
        <li>Pahadi Chai</li>
      </ul>

      <p><strong>Tip:</strong> Always check if the domain name (.com) is available!</p>
    `,keywords:"tea business name ideas, chai brand names, tea shop names",imageUrl:"/blog-images/tea-business-naming.png"},{id:"b17",title:"Complete Guide to Tea Wholesalers in Siliguri (2026)",slug:"tea-wholesalers-in-siliguri",date:"January 5, 2026",author:"Manish Tea Traders",excerpt:"Everything you need to know about sourcing from Siliguri wholesalers. How to find them, verify them, and negotiate.",content:`
      <p>Siliguri is home to over 500 tea traders. How do you find the right one?</p>

      <h2>Types of Wholesalers</h2>
      <ul>
        <li><strong>Auction Buyers:</strong> Big players (like us) who buy directly from auctions. We have the best variety.</li>
        <li><strong>Garden Agents:</strong> They sell only one garden's tea. Good price, but zero variety.</li>
        <li><strong>Resellers:</strong> They buy from auction buyers and sell to you. Higher price.</li>
      </ul>

      <h2>Red Flags (Scammers)</h2>
      <ul>
        <li>Asking for 100% advance without GST number.</li>
        <li>Refusing to send samples.</li>
        <li>Offering branded tea (like Tata) at half price (it's fake).</li>
      </ul>

      <h2>Why Manish Tea Traders?</h2>
      <p>We are a registered, GST-compliant firm operating since 2004. We are Auction Buyers. We welcome you to visit our office in Siliguri, taste our teas, and then do business.</p>
    `,keywords:"tea wholesalers siliguri list, verify tea supplier, best tea wholesaler siliguri",imageUrl:"/blog-images/siliguri-tea-market.png"},{id:"b18",title:"Best Tea Wholesale Market in Siliguri: Complete Buyer's Guide (2026)",slug:"siliguri-tea-wholesale-market-guide-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Discover Siliguri's major tea wholesale markets, best visiting times, negotiation tips, and how to source fresh tea directly from India's tea capital.",content:`
      <p>Walk into any tea wholesale market in Siliguri on a weekday morning, and you'll witness a scene that has remained largely unchanged for decades: traders examining tea leaves with practiced hands, the aroma of fresh CTC and orthodox teas filling the air, and negotiations happening in rapid-fire Bengali and Hindi. This is the <strong>Siliguri tea wholesale market</strong>—the nerve center of India's tea trade.</p>

      <h2>Why Siliguri Dominates India's Tea Wholesale Trade</h2>
      <p>Siliguri's position as India's premier tea wholesale hub isn't accidental. The city sits at a unique geographical crossroads:</p>
      <ul>
        <li><strong>30 km from Dooars tea gardens</strong> - Home to robust CTC teas</li>
        <li><strong>50 km from Darjeeling</strong> - Source of world-renowned orthodox teas</li>
        <li><strong>Direct highway access to Assam</strong> - India's largest tea-producing state</li>
        <li><strong>Rail and road connectivity</strong> to all major Indian cities</li>
      </ul>

      <h2>Top Tea Wholesale Markets in Siliguri</h2>
      
      <h3>1. Sevoke Road (The Business Hub)</h3>
      <p>Sevoke Road is the legendary heart of Siliguri's tea business. Here, you'll find everything from tiny trading offices to massive corporate warehouses.</p>
      <ul>
        <li><strong>What to Buy:</strong> All grades of CTC, Darjeeling Orthodox, and Green tea.</li>
        <li><strong>Best For:</strong> First-time buyers and those looking for established warehouses.</li>
      </ul>

      <h3>2. Mahananda Para (The Traditional Pulse)</h3>
      <p>If you want to see how tea was traded 50 years ago, Mahananda Para is the place. It's crowded, chaotic, and home to some of the most knowledgeable tea tasters in the country.</p>
      <ul>
        <li><strong>What to Buy:</strong> Primarily CTC teas for the domestic market.</li>
        <li><strong>Best For:</strong> Negotiating for high-volume, standard-grade teas.</li>
      </ul>

      <h3>3. Bidhan Market Area</h3>
      <p>While primarily a general wholesale market, the peripheral areas of Bidhan Market house several specialty tea dealers who focus on retail-ready packaging and regional distribution.</p>

      <h2>The Buying Process: How to Source Like a Pro</h2>
      <ol>
        <li><strong>Sample or "Tasting" Request:</strong> Never buy without seeing the "liquor" (brewed tea). Traders will brew small cups for you to test for strength, color, and aroma.</li>
        <li><strong>Checking the "Dana" (Grip):</strong> Examine the dry leaves. They should be heavy, uniform in color (blackish-brown for CTC), and free from excessive dust or stalks.</li>
        <li><strong>Negotiation:</strong> Prices in the <strong>Siliguri tea wholesale market</strong> fluctuate based on auction rates. Always ask for the current "garden rate."</li>
      </ol>

      <h2>Best Time to Visit</h2>
      <p>The peak season is from <strong>April to November</strong>. If you are looking for premium "Second Flush" Darjeeling tea, June is your best bet. For strong "Monsoon CTC," August and September are ideal.</p>

      <h2>Why Choose Manish Tea Traders?</h2>
      <p>Located in the heart of Siliguri, we've spent two decades building relationships with estates in Darjeeling and Dooars. We skip the middlemen of the <strong>Siliguri tea wholesale market</strong>, offering you garden-fresh prices and quality verification that only an on-ground partner can provide.</p>
      <p>Ready to source? <a href="/contact-us">Contact us today</a> for a current price list of our top-selling blends.</p>
    `,keywords:"siliguri tea wholesale market, tea wholesalers in siliguri, best tea market siliguri, buy tea bulk siliguri",imageUrl:"/blog-images/siliguri-market-entrance.png"},{id:"b19",title:"Tea Wholesale Price in Siliguri (2026): A Realistic Guide for Buyers",slug:"tea-wholesale-price-siliguri-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Understand the factors influencing tea wholesale prices in Siliguri, current market rates for different grades, and how to avoid 'cheap tea' traps.",content:`
      <p>If you're scouring the internet for the exact <strong>tea wholesale price in Siliguri</strong>, you've likely seen numbers ranging from ₹150 to ₹600 per kg. Why such a massive gap? In the tea industry, price is a direct reflection of "liquor" quality, leaf grade, and seasonal demand. This guide breaks down the current market realities for 2026.</p>

      <h2>Current Market Rates (Approximate Wholesale)</h2>
      <p><em>Note: Prices are subject to weekly auction fluctuations.</em></p>
      <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px;">Tea Type/Grade</th>
            <th style="padding: 10px;">Standard Quality (per kg)</th>
            <th style="padding: 10px;">Premium Quality (per kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px;">CTC (Dust/PD)</td>
            <td style="padding: 10px;">₹180 - ₹220</td>
            <td style="padding: 10px;">₹240 - ₹280</td>
          </tr>
          <tr>
            <td style="padding: 10px;">CTC (BP/BOP/OF)</td>
            <td style="padding: 10px;">₹200 - ₹250</td>
            <td style="padding: 10px;">₹280 - ₹350</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Darjeeling Orthodox</td>
            <td style="padding: 10px;">₹350 - ₹500</td>
            <td style="padding: 10px;">₹800 - ₹2500+</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Green Tea</td>
            <td style="padding: 10px;">₹250 - ₹400</td>
            <td style="padding: 10px;">₹500 - ₹900</td>
          </tr>
        </tbody>
      </table>

      <h2>Factors Determining Your Final Price</h2>
      <h3>1. The "Flush" (Season)</h3>
      <p>The <strong>tea wholesale price in Siliguri</strong> hits its peak during the "Second Flush" (June), when the quality is at its finest. Conversely, prices for "Rainy/Monsoon" tea (July-August) are usually lower, but the tea is thinner and less aromatic.</p>

      <h3>2. Garden Reputation</h3>
      <p>Tea from reputable estates in the Dooars or Assam belts naturally commands a premium because they maintain strict FSSAI compliance and use superior processing machinery.</p>

      <h3>3. Purchase Volume</h3>
      <p>Buying a few bags (30kg each) will always cost more per kg than ordering a full truckload (9-10 tons). Most Siliguri wholesalers, including us, offer tiered pricing based on 500kg, 1000kg, and 5000kg thresholds.</p>

      <h2>Avoiding the "Low Price" Trap</h2>
      <p>Be wary of anyone offering "Super Premium" tea at "Budget" prices. Common tactics include:</p>
      <ul>
        <li><strong>Adulteration:</strong> Mixing fresh tea with "spent" (used) tea leaves.</li>
        <li><strong>Old Stock:</strong> Selling last year's tea as fresh (it will have a musty smell).</li>
        <li><strong>High Dust Content:</strong> Adding fine dust to heavier grades to increase weight.</li>
      </ul>

      <h2>Get a Custom Quote</h2>
      <p>At <strong>Manish Tea Traders</strong>, we believe in transparent pricing. Because we source directly from the gardens of North Bengal and Assam, our <strong>tea wholesale price in Siliguri</strong> remains competitive without sacrificing the "punch" your customers expect.</p>
      <p><a href="/contact-us">Click here</a> to request today's garden rates and sample availability.</p>
    `,keywords:"tea wholesale price siliguri, current tea price siliguri, buy tea bulk price, siliguri tea market rates",imageUrl:"/blog-images/tea-auction-bidding.png"},{id:"b20",title:"Top Tea Companies in Siliguri for Wholesale Partnership (2026)",slug:"top-tea-companies-siliguri-wholesale",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Looking for a reliable partner? We list the types of tea companies in Siliguri and how to choose the right one for your wholesale business.",content:`
      <p>Siliguri is the hub of the North Bengal tea trade, hosting hundreds of companies. From auction houses to blenders and exporters, the options are vast. But who should you partner with for your wholesale business? This guide helps you navigate the landscape of <strong>tea companies in Siliguri</strong>.</p>

      <h2>Types of Tea Companies in Siliguri</h2>

      <h3>1. The Blenders and Packeters</h3>
      <p>These companies specialize in creating consistent taste profiles. They buy from various gardens and mix teas (e.g., Assam + Dooars) to create "Family Blends" or "Hotel Mixtures".</p>
      <ul>
        <li><strong>Best For:</strong> Retailers launching their own pouch brands.</li>
        <li><strong>Key Advantage:</strong> Consistency. You get the same taste 365 days a year.</li>
      </ul>

      <h3>2. The Garden-Direct Traders</h3>
      <p>They act as sales arms for specific tea estates. They sell exactly what the garden produces—season by season.</p>
      <ul>
        <li><strong>Best For:</strong> Bulk buyers who understand tea grades well and can manage quality variations.</li>
        <li><strong>Key Advantage:</strong> Lowest possible price points.</li>
      </ul>

      <h3>3. The Export Houses</h3>
      <p>focused on high-value Orthodox and Green teas for international markets (Japan, UK, Dubai).</p>
      <ul>
        <li><strong>Best For:</strong> Buyers looking for premium "Champagne of Teas" (Darjeeling) or organic varieties.</li>
        <li><strong>Key Advantage:</strong> Superior quality certification and packaging.</li>
      </ul>

      <h2>How to Vet a Tea Company</h2>
      <p>Before committing your capital, verify these three pillars:</p>
      <ol>
        <li><strong>Infrastructure:</strong> Do they have a proper warehouse in Siliguri? Proper storage is vital to prevent moisture damage.</li>
        <li><strong>Sampling Policy:</strong> Professional <strong>tea companies in Siliguri</strong> will always courier samples before a bulk deal. If they refuse, it's a red flag.</li>
        <li><strong>GST Compliance:</strong> Ensure they provide proper GST bills. This is crucial for your input tax credit and transport documentation.</li>
      </ol>

      <h2>Manish Tea Traders: Your All-in-One Partner</h2>
      <p>We bridge the gap between a garden-direct trader and a blender. Since 2004, we have operated from Siliguri, sourcing high-quality CTC and Orthodox teas. We offer:</p>
      <ul>
        <li><strong>Custom Blends:</strong> Tailored to your local market's water and taste preference.</li>
        <li><strong>Bulk Supply:</strong> Direct garden sourcing for aggressive pricing.</li>
        <li><strong>Guidance:</strong> We help new entrepreneurs understand the market.</li>
      </ul>
      <p>Partner with one of the most trusted <strong>tea companies in Siliguri</strong>. <a href="/contact-us">Contact us</a> to start your journey.</p>
    `,keywords:"tea companies in siliguri, list of tea wholesalers siliguri, best tea company siliguri",imageUrl:"/blog-images/top-tea-companies-siliguri.png"},{id:"b21",title:"Tea Business Profit Margin Guide (2026)",slug:"tea-business-profit-margin-guide-2025",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Detailed breakdown of profit margins in tea wholesale, retail, and franchise models. Know your numbers before you start.",content:`
      <p>The first question every entrepreneur asks: "How much will I make?" In the tea business, margins depend heavily on your business model. Here is the realistic breakdown for 2026.</p>

      <h2>1. The Retail Pouch Model (B2C)</h2>
      <p>Selling 250g/500g packets directly to households or shops.</p>
      <ul>
        <li><strong>Buying Price (Bulk):</strong> ₹200 - ₹250/kg</li>
        <li><strong>Packaging Cost:</strong> ₹30 - ₹50/kg</li>
        <li><strong>Selling Price (MRP):</strong> ₹400 - ₹500/kg</li>
        <li><strong>Gross Margin:</strong> 40% - 50%</li>
        <li><strong>Net Profit (after marketing/ops):</strong> 20% - 25%</li>
      </ul>

      <h2>2. The Wholesale Supply Model (B2B)</h2>
      <p>Supplying loose tea to tea stalls, hotels, and smaller retailers.</p>
      <ul>
        <li><strong>Buying Price:</strong> ₹180 - ₹200/kg</li>
        <li><strong>Detailed Cost:</strong> Minimal (Gunny bag packing)</li>
        <li><strong>Selling Price:</strong> ₹220 - ₹250/kg</li>
        <li><strong>Gross Margin:</strong> 10% - 15%</li>
        <li><strong>Volume Game:</strong> Margins are low, but you sell 50kg per day instead of 5kg.</li>
      </ul>

      <h2>3. The Premium/Orthodox Model</h2>
      <p>Selling Darjeeling/Green tea online or to cafes.</p>
      <ul>
        <li><strong>Buying Price:</strong> ₹500 - ₹1000/kg</li>
        <li><strong>Selling Price:</strong> ₹1500 - ₹3000/kg</li>
        <li><strong>Gross Margin:</strong> 100% - 200%</li>
        <li><strong>Challenge:</strong> Finding the right customer requires high marketing spend.</li>
      </ul>

      <h2>How to Maximize Profit</h2>
      <ul>
        <li><strong>Source from Siliguri:</strong> Cut out the Kolkata/Delhi middlemen to save ₹30-₹50/kg.</li>
        <li><strong>Create a Blend:</strong> Don't sell straight grades. Create a signature blend that customers can't find elsewhere.</li>
        <li><strong>Hold Stock:</strong> Buy heavy during peak season (June-Oct) when quality is high and prices are stable.</li>
      </ul>
    `,keywords:"tea profit margin, tea business profitability, wholesale tea margin, retail tea margin",imageUrl:"/blog-images/private-label-packaging.png"},{id:"b22",title:"Guide to Sourcing Tea for Wholesale Business",slug:"sourcing-tea-wholesale-guide",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Sourcing is the backbone of your tea business. Learn how to find reliable suppliers, test samples, and negotiate bulk deals.",content:`
      <p>You can have the best packaging and marketing, but if your tea quality varies every month, you will lose customers. Sourcing is not just bought; it's managed.</p>

      <h2>Step 1: Identify Your Region's Taste</h2>
      <p>India doesn't drink the same tea everywhere.</p>
      <ul>
        <li><strong>Bihar/UP/Jharkhand:</strong> Strong, dark liquor (Dooars + Assam Blend).</li>
        <li><strong>Gujarat/Maharashtra:</strong> Very strong, golden liquor (Superior Assam).</li>
        <li><strong>South India:</strong> Often prefers Dust tea or specific local blends.</li>
      </ul>
      <p><em>Action:</em> Send us a sample of the best-selling tea in your area. We will reverse-engineer it.</p>

      <h2>Step 2: Sample Testing</h2>
      <p>Never place a bulk order without testing. When you receive samples from a wholesaler:</p>
      <ol>
        <li><strong>Check Appearance:</strong> Is it black or brown? (Black is better).</li>
        <li><strong>Check Smell:</strong> Is it fresh?</li>
        <li><strong>The Milk Test:</strong> Boil it as your customers would. Does it turn pink/red (good) or gray/muddy (bad)?</li>
      </ol>

      <h2>Step 3: Minimum Order Quantity (MOQ)</h2>
      <p>Don't overbuy. Tea freshness lasts 6-9 months max in sacks. Start with 100-200kg.</p>

      <h2>Step 4: Payment Terms</h2>
      <p>Most wholesale deals in Siliguri are <strong>Advance Payment</strong>. Credit is only given to long-term partners (3+ years). Scammers often offer credit to lure you in—be careful.</p>
    `,keywords:"sourcing tea india, buy tea wholesale, tea supplier verification, tea sample testing",imageUrl:"/blog-images/tea-sourcing-expert.png"},{id:"b23",title:"Tea Wholesale MOQ, Pricing & Logistics: Complete Guide (2026)",slug:"tea-wholesale-moq-pricing-logistics-guide-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Understand minimum order quantities, pricing structures, and logistics in tea wholesale. Learn how to optimize costs and ensure smooth deliveries.",content:`
      <p>Understanding MOQ (Minimum Order Quantity), pricing structures, and logistics is crucial for successful <strong>tea wholesale</strong> operations. This guide breaks down these complex topics into actionable insights.</p>

      <h2>Minimum Order Quantities (MOQ)</h2>

      <h3>Why MOQ Exists</h3>
      <ul>
        <li><strong>Operational Efficiency:</strong> Reduces handling costs</li>
        <li><strong>Logistics Optimization:</strong> Makes delivery economical</li>
        <li><strong>Quality Control:</strong> Ensures proper batch testing</li>
        <li><strong>Inventory Management:</strong> Maintains stock rotation</li>
      </ul>

      <h3>Typical MOQ by Supplier Type</h3>

      <h4>Local Distributors</h4>
      <ul>
        <li><strong>MOQ:</strong> 25-100 kg</li>
        <li><strong>Best For:</strong> Small retailers, tea stalls</li>
        <li><strong>Pricing:</strong> Higher per-kg cost</li>
        <li><strong>Delivery:</strong> Same-day or next-day</li>
      </ul>

      <h4>Siliguri Wholesalers</h4>
      <ul>
        <li><strong>MOQ:</strong> 100-500 kg</li>
        <li><strong>Best For:</strong> Regular buyers, medium retailers</li>
        <li><strong>Pricing:</strong> 15-20% cheaper than local</li>
        <li><strong>Delivery:</strong> 3-7 days</li>
      </ul>

      <h4>Direct Estate Traders</h4>
      <ul>
        <li><strong>MOQ:</strong> 500 kg - 1 ton</li>
        <li><strong>Best For:</strong> Large distributors, exporters</li>
        <li><strong>Pricing:</strong> Best rates, factory-gate pricing</li>
        <li><strong>Delivery:</strong> 5-10 days</li>
      </ul>

      <h4>Blending Houses</h4>
      <ul>
        <li><strong>MOQ:</strong> 1-2 tons</li>
        <li><strong>Best For:</strong> Private label brands</li>
        <li><strong>Pricing:</strong> Premium for custom blends</li>
        <li><strong>Delivery:</strong> 7-14 days (blending time)</li>
      </ul>

      <h2>Pricing Structures Explained</h2>

      <h3>Base Pricing Components</h3>

      <h4>1. Tea Cost (per kg)</h4>
      <p>Varies by grade:</p>
      <ul>
        <li>Dust: ₹180-250</li>
        <li>PD: ₹220-300</li>
        <li>OF: ₹250-350</li>
        <li>BP: ₹280-400</li>
        <li>BOP: ₹320-450</li>
      </ul>

      <h4>2. Packaging Cost</h4>
      <ul>
        <li><strong>Bulk (jute/PP sacks):</strong> ₹5-10 per kg</li>
        <li><strong>Retail pouches:</strong> ₹15-30 per kg</li>
        <li><strong>Custom branded:</strong> ₹25-50 per kg</li>
      </ul>

      <h4>3. Delivery Charges</h4>
      <ul>
        <li><strong>Within state:</strong> ₹2-3 per kg</li>
        <li><strong>Nearby states:</strong> ₹3-5 per kg</li>
        <li><strong>Distant states:</strong> ₹5-8 per kg</li>
      </ul>

      <h3>Volume Discount Structure</h3>

      <h4>Standard Tiers</h4>
      <ul>
        <li><strong>100-500 kg:</strong> Base price</li>
        <li><strong>500 kg - 1 ton:</strong> 5-7% discount</li>
        <li><strong>1-5 tons:</strong> 8-12% discount</li>
        <li><strong>5-10 tons:</strong> 12-15% discount</li>
        <li><strong>10+ tons:</strong> 15-18% discount + negotiable terms</li>
      </ul>

      <h4>Example Calculation</h4>
      <p>BP Grade CTC Tea:</p>
      <ul>
        <li><strong>Base Price:</strong> ₹320/kg</li>
        <li><strong>Order: 1 ton (1,000 kg)</strong></li>
        <li><strong>Discount:</strong> 10%</li>
        <li><strong>Final Price:</strong> ₹288/kg</li>
        <li><strong>Total Savings:</strong> ₹32,000</li>
      </ul>

      <h3>Payment Terms Impact on Pricing</h3>

      <h4>Advance Payment</h4>
      <ul>
        <li><strong>Discount:</strong> 2-3% additional</li>
        <li><strong>Best For:</strong> New customers, small orders</li>
      </ul>

      <h4>Cash on Delivery</h4>
      <ul>
        <li><strong>Discount:</strong> 1-2% additional</li>
        <li><strong>Best For:</strong> Established relationships</li>
      </ul>

      <h4>Credit (15-30 days)</h4>
      <ul>
        <li><strong>Discount:</strong> Standard rates</li>
        <li><strong>Best For:</strong> Regular, high-volume buyers</li>
        <li><strong>Requirements:</strong> Good payment history, references</li>
      </ul>

      <h2>Logistics & Delivery</h2>

      <h3>Delivery Timelines by Distance</h3>

      <h4>From Siliguri to Major Cities</h4>
      <ul>
        <li><strong>Kolkata:</strong> 2-3 days</li>
        <li><strong>Patna:</strong> 2-3 days</li>
        <li><strong>Delhi:</strong> 4-5 days</li>
        <li><strong>Mumbai:</strong> 5-6 days</li>
        <li><strong>Bangalore:</strong> 6-7 days</li>
        <li><strong>Chennai:</strong> 6-7 days</li>
      </ul>

      <h3>Packaging for Transport</h3>

      <h4>Standard Wholesale Packaging</h4>
      <ul>
        <li><strong>26-30 kg jute sacks:</strong> Traditional, breathable</li>
        <li><strong>30-35 kg PP sacks:</strong> Moisture-resistant</li>
        <li><strong>Multi-wall paper bags:</strong> Export-grade</li>
      </ul>

      <h4>Long-Distance Considerations</h4>
      <ul>
        <li>Double-layer packaging for moisture protection</li>
        <li>Proper sealing to prevent aroma loss</li>
        <li>Cushioning for fragile grades</li>
        <li>Clear labeling with grade and weight</li>
      </ul>

      <h3>Tracking & Insurance</h3>

      <h4>GPS Tracking</h4>
      <p>Available for orders above:</p>
      <ul>
        <li>1 ton: Basic tracking</li>
        <li>5 tons: Real-time GPS</li>
        <li>10+ tons: Dedicated vehicle with live tracking</li>
      </ul>

      <h4>Insurance</h4>
      <ul>
        <li><strong>Cost:</strong> 0.5-1% of order value</li>
        <li><strong>Covers:</strong> Theft, damage, moisture</li>
        <li><strong>Recommended For:</strong> Orders above ₹2 lakhs</li>
      </ul>

      <h2>Cost Optimization Strategies</h2>

      <h3>1. Consolidate Orders</h3>
      <ul>
        <li>Order multiple grades together</li>
        <li>Reach higher volume discount tiers</li>
        <li>Reduce per-kg delivery cost</li>
      </ul>

      <h3>2. Plan Seasonal Buying</h3>
      <ul>
        <li><strong>Buy in Monsoon (June-Aug):</strong> Lower prices</li>
        <li><strong>Avoid First Flush (March-May):</strong> Premium pricing</li>
        <li><strong>Stock up in Autumn (Sept-Nov):</strong> Best quality-price ratio</li>
      </ul>

      <h3>3. Negotiate Payment Terms</h3>
      <ul>
        <li>Advance payment for extra discount</li>
        <li>Build credit history for better terms</li>
        <li>Commit to regular orders for preferential pricing</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Can I order less than the MOQ?</h3>
      <p>Some suppliers offer flexibility:</p>
      <ul>
        <li>Pay slightly higher per-kg rate</li>
        <li>Combine with other buyers</li>
        <li>Order samples first (100-250 grams)</li>
      </ul>
      <p>At Manish Tea Traders, we offer 100 kg MOQ for new customers.</p>

      <h3>How are delivery charges calculated?</h3>
      <p>Based on:</p>
      <ul>
        <li><strong>Distance:</strong> Longer distance = higher cost</li>
        <li><strong>Weight:</strong> Per kg rate decreases with volume</li>
        <li><strong>Mode:</strong> Road (cheaper) vs Air (faster, expensive)</li>
        <li><strong>Urgency:</strong> Express delivery costs more</li>
      </ul>

      <h3>What payment methods are accepted?</h3>
      <ul>
        <li>UPI/Digital payments</li>
        <li>NEFT/RTGS bank transfers</li>
        <li>Cheque (for credit customers)</li>
        <li>Cash (for local buyers)</li>
      </ul>

      <h3>How can I reduce logistics costs?</h3>
      <ul>
        <li>Order in bulk to reduce per-kg delivery cost</li>
        <li>Plan orders in advance (avoid express shipping)</li>
        <li>Consolidate with other buyers in your area</li>
        <li>Choose suppliers with good logistics networks</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding MOQ, pricing, and logistics helps you optimize costs in <strong>tea wholesale</strong>. At <strong>Manish Tea Traders</strong>, we offer flexible MOQ (100 kg), transparent pricing, and reliable pan-India delivery. <a href="/contact-us">Contact us</a> for a detailed quotation.</p>
    `,keywords:"tea wholesale, tea moq, tea wholesale pricing, tea logistics, wholesale tea dealers",imageUrl:"/blog-images/tea-logistics-truck.png"},{id:"b24",title:"How to Start a Tea Business with ₹25,000 Investment",slug:"start-tea-business-25000",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Low budget? No problem. A step-by-step plan to start a profitable tea business with just ₹25k. Sourcing, packaging, and sales.",content:`
      <p>You don't need lakhs to start. Many successful tea tycoons started with a bicycle and a few bags. Here is a ₹25,000 budget plan.</p>

      <h2>The Budget Split (₹25,000)</h2>
      <ul>
        <li><strong>Stock Purchase (60%):</strong> ₹15,000 (approx 60-70 kg tea).</li>
        <li><strong>Packaging (20%):</strong> ₹5,000 (Silver pouches + Sealing Machine + Stickers).</li>
        <li><strong>Licensing (5%):</strong> ₹1,500 (FSSAI Basic Registration + Trade License).</li>
        <li><strong>Marketing/Travel (15%):</strong> ₹3,500 (Travel to Siliguri or Samples + Fuel).</li>
      </ul>

      <h2>The Strategy</h2>
      
      <h3>Step 1: Don't Rent a Shop</h3>
      <p>Start from home. Use your spare room as a godown. Rent eats profit.</p>

      <h3>Step 2: Focus on 2 Products Only</h3>
      <p>Don't try to sell Green Tea, Earl Grey, and Masala Chai. Just sell:</p>
      <ul>
        <li><strong>Strong Hotel Dust</strong> (for tea stalls).</li>
        <li><strong>Family Blend</strong> (for neighbors and local shops).</li>
      </ul>

      <h3>Step 3: Packaging Hack</h3>
      <p>Don't print cylinders (costs ₹25k+). Buy plain silver/gold pouches (₹250/kg) and print stickers from a local Xerox shop (₹1 per sticker). It looks professional enough to start.</p>

      <h3>Step 4: The First 100 Customers</h3>
      <ul>
        <li>Give 250g free samples to 20 tea stalls. Conversion rate is usually 20%. If 4 buy, you have recurring revenue.</li>
        <li>Sell to friends and family with a "Launch Discount".</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With ₹25,000, you are buying a job, not a business. But if you reinvest your profits, in 6 months, you will have ₹1 Lakh capital. That's how empires used to be built.</p>
    `,keywords:"start tea business low investment, tea business under 25000, small tea business idea",imageUrl:"/blog-images/low-investment-tea-setup.png"},{id:"b25",title:"5 High-Profit Tea Business Ideas (Beyond Just Selling Loose Tea)",slug:"high-profit-tea-business-ideas",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Think outside the box. Explore subscription boxes, tea gifting, private label, and other creative ways to make money with tea.",content:`
      <p>Selling loose tea is competitive. Here are 5 niche ideas with higher margins.</p>

      <h2>1. Corporate Gifting</h2>
      <p>Companies spend huge amounts on Diwali/New Year gifts. Create "Wellness Tea Sets" (Green Tea + Glass Mug) in a nice wooden box.</p>
      <ul>
        <li><strong>Margin:</strong> 40-50%</li>
        <li><strong>Volume:</strong> High (bulk orders of 50-100 units).</li>
      </ul>

      <h2>2. Tea Subscription Box</h2>
      <p>Curate 3 different exotic teas (Darjeeling, Oolong, White) every month and ship to subscribers.</p>
      <ul>
        <li><strong>Margin:</strong> 60%</li>
        <li><strong>Target:</strong> Premium customers in metros.</li>
      </ul>

      <h2>3. Private Label (White Labeling)</h2>
      <p>Find cafes or hotels that want their own brand name on the packet. You handle the sourcing and packing; they handle the sales.</p>
      <ul>
        <li><strong>Margin:</strong> 20-30%</li>
        <li><strong>Stability:</strong> Long-term contracts.</li>
      </ul>

      <h2>4. The "Chai Premix" Brand</h2>
      <p>Sell ready-to-mix Instant Tea powder (Cardamom/Ginger). Very popular in offices and for travelers.</p>
      <ul>
        <li><strong>Margin:</strong> 50%</li>
        <li><strong>Requirement:</strong> Need a manufacturing partner (we can help).</li>
      </ul>

      <h2>5. Specialized "Health" Teas</h2>
      <p>Blend Green tea with herbs like Tulsi, Ashwagandha, or Hibiscus. Market it for "Weight Loss" or "Immunity".</p>
      <ul>
        <li><strong>Margin:</strong> 100%+</li>
        <li><strong>Marketing:</strong> Needs strong social media presence.</li>
      </ul>

      <h4>Warehouse Requirements</h4>
      <ul>
        <li><strong>Size:</strong> Minimum 500-1000 sq ft to start</li>
        <li><strong>Location:</strong> Good road access, near wholesale markets</li>
        <li><strong>Features:</strong> Dry, cool, well-ventilated, pest-free</li>
        <li><strong>Storage:</strong> Elevated platforms, proper racking</li>
      </ul>

      <h4>Equipment Needed</h4>
      <ul>
        <li>Weighing scales (digital, capacity 50-100 kg)</li>
        <li>Moisture meter (₹5,000-15,000)</li>
        <li>Tea tasting equipment (cups, spoons, kettle)</li>
        <li>Packaging materials (sacks, bags, labels)</li>
        <li>Office equipment (computer, printer, phone)</li>
      </ul>

      <h3>Step 4: Sourcing Strategy</h3>

      <h4>Primary Source: Siliguri</h4>
      <p>Why Siliguri?</p>
      <ul>
        <li>Closest to tea estates (fresh stock)</li>
        <li>Best wholesale prices (15-25% cheaper than metros)</li>
        <li>Wide variety of grades</li>
        <li>Established trading ecosystem</li>
      </ul>

      <h4>Building Supplier Relationships</h4>
      <ul>
        <li>Visit Siliguri market personally</li>
        <li>Establish accounts with 2-3 reliable suppliers</li>
        <li>Negotiate credit terms (15-30 days)</li>
        <li>Start with smaller orders, scale gradually</li>
      </ul>

      <h3>Step 5: Pricing Strategy</h3>

      <h4>Cost Structure</h4>
      <ul>
        <li><strong>Purchase Cost:</strong> 60-70% of selling price</li>
        <li><strong>Transportation:</strong> 3-5% (from Siliguri)</li>
        <li><strong>Storage & Handling:</strong> 2-3%</li>
        <li><strong>Packaging:</strong> 2-4%</li>
        <li><strong>Operating Expenses:</strong> 5-8%</li>
        <li><strong>Profit Margin:</strong> 15-25%</li>
      </ul>

      <h4>Competitive Pricing</h4>
      <ul>
        <li>Research local market rates</li>
        <li>Offer volume discounts</li>
        <li>Provide credit to established customers</li>
        <li>Bundle products for better deals</li>
      </ul>

      <h2>Capital Requirements</h2>

      <h3>Small Scale (₹5-8 Lakhs)</h3>
      <ul>
        <li>Inventory: ₹3-4 lakhs (5-10 tons)</li>
        <li>Warehouse setup: ₹1-2 lakhs</li>
        <li>Equipment: ₹50,000</li>
        <li>Licenses & registration: ₹25,000</li>
        <li>Working capital: ₹75,000-1 lakh</li>
      </ul>

      <h3>Medium Scale (₹15-20 Lakhs)</h3>
      <ul>
        <li>Inventory: ₹8-10 lakhs (20-30 tons)</li>
        <li>Warehouse: ₹3-4 lakhs</li>
        <li>Equipment: ₹1 lakh</li>
        <li>Vehicle: ₹3-4 lakhs</li>
        <li>Working capital: ₹2-3 lakhs</li>
      </ul>

      <h2>Marketing & Customer Acquisition</h2>

      <h3>Initial Customers</h3>
      <ul>
        <li>Local retail shops</li>
        <li>Tea stalls in your area</li>
        <li>Restaurants and cafes</li>
        <li>Referrals from existing contacts</li>
      </ul>

      <h3>Growth Strategies</h3>
      <ul>
        <li>Offer free samples to potential customers</li>
        <li>Provide credit facilities</li>
        <li>Ensure consistent quality</li>
        <li>Maintain competitive pricing</li>
        <li>Build personal relationships</li>
      </ul>

      <h2>Common Challenges & Solutions</h2>

      <h3>Challenge 1: Quality Consistency</h3>
      <p><strong>Solution:</strong> Work with reliable Siliguri suppliers, test every batch, maintain proper storage</p>

      <h3>Challenge 2: Payment Collection</h3>
      <p><strong>Solution:</strong> Start with advance payment, offer credit only to established customers, set clear terms</p>

      <h3>Challenge 3: Competition</h3>
      <p><strong>Solution:</strong> Differentiate through service quality, credit facilities, consistent supply, competitive pricing</p>

      <h2>Frequently Asked Questions</h2>

      <h3>How much profit can I make in tea wholesale?</h3>
      <p>Typical margins:</p>
      <ul>
        <li><strong>Retail wholesale:</strong> 15-20%</li>
        <li><strong>Bulk B2B:</strong> 10-15%</li>
        <li><strong>Private label:</strong> 20-30%</li>
      </ul>
      <p>On ₹10 lakh monthly sales, expect ₹1.5-2 lakh profit.</p>

      <h3>Do I need prior experience in tea?</h3>
      <p>Not mandatory, but helpful. You can:</p>
      <ul>
        <li>Partner with experienced tea traders</li>
        <li>Learn quality parameters through training</li>
        <li>Start small and learn gradually</li>
        <li>Work with established suppliers like Manish Tea Traders</li>
      </ul>

      <h3>What's the best location for a tea wholesale business?</h3>
      <ul>
        <li><strong>Tier 1 Cities:</strong> High demand, high competition</li>
        <li><strong>Tier 2 Cities:</strong> Good balance of demand and competition</li>
        <li><strong>Near Wholesale Markets:</strong> Easy customer access</li>
        <li><strong>Good Road Connectivity:</strong> Essential for delivery</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Starting a <strong>tea wholesale business</strong> in India offers excellent opportunities for entrepreneurs. With proper planning, reliable sourcing, and good customer service, you can build a profitable venture. Partner with <strong>Manish Tea Traders</strong> for reliable sourcing from Siliguri. <a href="/contact-us">Contact us</a> to discuss wholesale supply for your new business.</p>
    `,keywords:"tea business ideas, profitable tea business, tea startup ideas",imageUrl:"/blog-images/tea-business-ideas-concept.png"},{id:"b26",title:"Private Label Tea Packaging: Complete Cost & Process Guide (2026)",slug:"private-label-tea-packaging-cost-process-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Launch your own tea brand with private label packaging. Complete guide to costs, MOQ, process, and choosing the right packaging partner.",content:`
      <p>Want to sell tea under your own brand name without owning a factory? <strong>Private label tea packaging</strong> is your answer. This guide covers everything from costs to choosing the right partner.</p>

      <h2>What is Private Label Tea Packaging?</h2>
      <p>Private labeling means a manufacturer packages tea with YOUR brand name and logo. You focus on sales and marketing while they handle production.</p>

      <h2>Cost Breakdown</h2>
      <h3>Setup Costs</h3>
      <ul>
        <li><strong>Packaging Design:</strong> ₹5,000-₹15,000 (one-time)</li>
        <li><strong>Printing Cylinders:</strong> ₹8,000-₹25,000 (for pouch printing)</li>
        <li><strong>FSSAI License:</strong> ₹2,000-₹5,000/year</li>
      </ul>

      <h3>Per-Kg Costs</h3>
      <ul>
        <li><strong>Tea (bulk):</strong> ₹200-₹350/kg</li>
        <li><strong>Packaging material:</strong> ₹20-₹40/kg</li>
        <li><strong>Labor/packing:</strong> ₹10-₹15/kg</li>
        <li><strong>Total:</strong> ₹230-₹405/kg</li>
      </ul>

      <h2>Minimum Order Quantities</h2>
      <ul>
        <li><strong>Small packers:</strong> 100-500 kg</li>
        <li><strong>Medium manufacturers:</strong> 500-2000 kg</li>
        <li><strong>Large facilities:</strong> 2000+ kg</li>
      </ul>

      <h2>The Process</h2>
      <ol>
        <li><strong>Choose your blend:</strong> Select tea grade and blend ratio</li>
        <li><strong>Design packaging:</strong> Create brand identity</li>
        <li><strong>Sample approval:</strong> Test final product</li>
        <li><strong>Production:</strong> Bulk packing begins</li>
        <li><strong>Delivery:</strong> Receive branded products</li>
      </ol>

      <h2>Manish Tea Traders Private Label Service</h2>
      <p>We offer complete private label solutions:</p>
      <ul>
        <li>MOQ: 100 kg (flexible for new brands)</li>
        <li>Custom blending available</li>
        <li>Quality assurance testing</li>
        <li>Pan-India delivery</li>
      </ul>
      <p><a href="/services/private-label-tea">Learn more about our private label service</a> or <a href="/contact-us">contact us</a> for a quote.</p>
    `,keywords:"private label tea packaging, tea packaging cost, private label tea supplier, tea brand packaging",imageUrl:"/blog-images/private-label-packaging.png"},{id:"b27",title:"Common Mistakes New Tea Wholesalers Make (And How to Avoid Them)",slug:"common-mistakes-new-tea-wholesalers-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Learn from others' mistakes. Discover the top 10 errors new tea wholesalers make and proven strategies to avoid them for business success.",content:`
      <p>Starting a tea wholesale business is exciting, but many newcomers make costly mistakes that could have been easily avoided. Learn from 20 years of industry experience to set your business up for success from day one.</p>

      <h2>Top 10 Mistakes New Tea Wholesalers Make</h2>

      <h3>1. Choosing Price Over Quality</h3>

      <h4>The Mistake</h4>
      <p>Buying the cheapest tea available without proper quality testing.</p>

      <h4>Why It's Costly</h4>
      <ul>
        <li>Customers reject poor quality</li>
        <li>Damaged reputation</li>
        <li>Lost repeat business</li>
        <li>Inventory becomes unsellable</li>
      </ul>

      <h3>2. Freshness Factor</h3>

      <h4>Tea Journey Timeline</h4>
      <p><strong>To Siliguri:</strong></p>
      <ul>
        <li>Day 1: Tea processed at estate</li>
        <li>Day 2: Arrives in Siliguri market</li>
        <li>Day 3: Available for wholesale buyers</li>
      </ul>

      <p><strong>To Kolkata:</strong></p>
      <ul>
        <li>Day 1: Tea processed at estate</li>
        <li>Day 2-3: Arrives in Siliguri</li>
        <li>Day 4-5: Transported to Kolkata (600 km)</li>
        <li>Day 6-7: Available in Kolkata market</li>
      </ul>

      <h4>Impact on Quality</h4>
      <ul>
        <li><strong>Aroma:</strong> Degrades 5-10% during additional transit</li>
        <li><strong>Shelf Life:</strong> 5-7 days shorter for end customers</li>
        <li><strong>Flavor:</strong> Slight reduction in peak freshness</li>
      </ul>

      <h3>3. Variety and Selection</h3>

      <h4>Siliguri Suppliers</h4>
      <ul>
        <li><strong>CTC Grades:</strong> All grades from Dust to BOPSM</li>
        <li><strong>Origins:</strong> Assam, Dooars, Darjeeling, Terai</li>
        <li><strong>Estates:</strong> Direct access to 100+ estates</li>
        <li><strong>Specialty:</strong> Fresh First Flush, Second Flush Darjeeling</li>
        <li><strong>Custom Blends:</strong> Blending houses available</li>
      </ul>

      <h4>Kolkata Suppliers</h4>
      <ul>
        <li><strong>CTC Grades:</strong> Common grades (BP, BOP, OF)</li>
        <li><strong>Origins:</strong> Limited estate-specific options</li>
        <li><strong>Estates:</strong> Mostly blended/mixed lots</li>
        <li><strong>Specialty:</strong> Limited premium Darjeeling</li>
        <li><strong>Custom Blends:</strong> Some suppliers offer</li>
      </ul>

      <h3>4. Minimum Order Quantities</h3>

      <h4>Siliguri</h4>
      <ul>
        <li><strong>General Wholesalers:</strong> 100-500 kg</li>
        <li><strong>Estate Traders:</strong> 500 kg - 1 ton</li>
        <li><strong>Flexibility:</strong> More willing to negotiate for regular buyers</li>
      </ul>

      <h4>Kolkata</h4>
      <ul>
        <li><strong>General Wholesalers:</strong> 50-250 kg (more flexible)</li>
        <li><strong>Distributors:</strong> 100-500 kg</li>
        <li><strong>Flexibility:</strong> Better for very small orders</li>
      </ul>

      <h3>5. Delivery Logistics</h3>

      <h4>From Siliguri</h4>
      <p><strong>To Major Cities:</strong></p>
      <ul>
        <li><strong>Kolkata:</strong> 2-3 days, ₹3-4/kg</li>
        <li><strong>Patna:</strong> 2-3 days, ₹3-4/kg</li>
        <li><strong>Delhi:</strong> 4-5 days, ₹5-6/kg</li>
        <li><strong>Mumbai:</strong> 5-6 days, ₹6-8/kg</li>
      </ul>

      <h4>From Kolkata</h4>
      <p><strong>To Major Cities:</strong></p>
      <ul>
        <li><strong>Local (Kolkata):</strong> Same day, ₹1-2/kg</li>
        <li><strong>Nearby (WB, Odisha):</strong> 1-2 days, ₹2-3/kg</li>
        <li><strong>Delhi:</strong> 3-4 days, ₹4-5/kg</li>
        <li><strong>Mumbai:</strong> 4-5 days, ₹5-7/kg</li>
      </ul>

      <h2>When to Choose Kolkata</h2>

      <h3>Kolkata is Better If:</h3>
      <ul>
        <li>You're based in Kolkata (save on delivery)</li>
        <li>You need very small quantities (25-50 kg)</li>
        <li>You want same-day pickup</li>
        <li>You're testing the market with minimal investment</li>
        <li>You need emergency top-ups</li>
      </ul>

      <h3>Example Scenario</h3>
      <p>Small tea shop in Kolkata needing 50 kg monthly:</p>
      <ul>
        <li><strong>Kolkata Supplier:</strong> ₹340/kg + ₹100 delivery = ₹17,100</li>
        <li><strong>Siliguri Supplier:</strong> ₹300/kg + ₹200 delivery = ₹15,200</li>
        <li><strong>Savings:</strong> ₹1,900/month, but Kolkata offers same-day pickup</li>
      </ul>
      <p><strong>Verdict:</strong> For 50 kg, convenience may outweigh savings</p>

      <h2>When to Choose Siliguri</h2>

      <h3>Siliguri is Better If:</h3>
      <ul>
        <li>You order 100+ kg regularly</li>
        <li>You want maximum freshness</li>
        <li>You need specific estate teas</li>
        <li>You're focused on profit margins</li>
        <li>You want access to premium Darjeeling</li>
        <li>You're building a long-term wholesale business</li>
      </ul>

      <h3>Example Scenario</h3>
      <p>Regional distributor ordering 1 ton monthly:</p>
      <ul>
        <li><strong>Kolkata Supplier:</strong> ₹340/kg = ₹3,40,000</li>
        <li><strong>Siliguri Supplier:</strong> ₹300/kg + ₹3,000 delivery = ₹3,03,000</li>
        <li><strong>Savings:</strong> ₹37,000/month = ₹4,44,000/year</li>
      </ul>
      <p><strong>Verdict:</strong> Siliguri is clearly better for bulk orders</p>

      <h2>The Hybrid Approach</h2>

      <h3>Best of Both Worlds</h3>
      <p>Many successful wholesalers use:</p>
      <ul>
        <li><strong>Primary Source (Siliguri):</strong> 80% of volume, monthly bulk orders</li>
        <li><strong>Backup (Kolkata):</strong> 20% for emergency top-ups, special requests</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Maximize cost savings on bulk orders</li>
        <li>Maintain flexibility for urgent needs</li>
        <li>Build relationships in both markets</li>
        <li>Reduce risk of supply disruption</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Is tea from Kolkata suppliers lower quality?</h3>
      <p>Not necessarily lower quality, but:</p>
      <ul>
        <li>Slightly less fresh (5-7 days older)</li>
        <li>Often blended/mixed lots vs estate-specific</li>
        <li>Limited premium Darjeeling availability</li>
      </ul>
      <p>Quality depends on individual supplier, not just location.</p>

      <h3>Can I get same-day delivery from Siliguri to Kolkata?</h3>
      <p>No, minimum 2-3 days for Siliguri to Kolkata delivery. For same-day needs, Kolkata suppliers are better.</p>

      <h3>Do Siliguri suppliers deliver to Kolkata?</h3>
      <p>Yes, most Siliguri wholesalers have established Kolkata delivery routes. Typical timeline: 2-3 days, cost: ₹3-4/kg.</p>

      <h3>Which location has more reliable suppliers?</h3>
      <p>Both have reliable and unreliable suppliers. Key is to:</p>
      <ul>
        <li>Verify GST and FSSAI registration</li>
        <li>Check references</li>
        <li>Test samples before bulk orders</li>
        <li>Start with smaller orders</li>
      </ul>

      <h3>Can I visit suppliers before ordering?</h3>
      <p>Yes, recommended for first-time buyers:</p>
      <ul>
        <li><strong>Kolkata:</strong> Easier to visit (metro city)</li>
        <li><strong>Siliguri:</strong> Requires travel but worth it for bulk buyers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>For most wholesale buyers ordering 100+ kg regularly, <strong>Siliguri suppliers</strong> offer better value through lower prices, fresher tea, and wider variety. Kolkata suppliers are ideal for local buyers needing small quantities or same-day delivery. At <strong>Manish Tea Traders</strong> in Siliguri, we serve buyers across India including Kolkata with competitive pricing and reliable delivery. <a href="/contact-us">Contact us</a> for samples and pricing comparison.</p>
    `,keywords:"tea suppliers kolkata, tea suppliers siliguri, kolkata vs siliguri tea, tea wholesale kolkata",imageUrl:"/blog-images/tea-business-risk.png"},{id:"b28",title:"Tea Bag Manufacturers Near Me: Wholesaler's Complete Guide (2026)",slug:"tea-bag-manufacturers-wholesalers-guide-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Find reliable tea bag manufacturers for your wholesale business. Learn about types, costs, MOQ, and quality standards for tea bag production.",content:`
      <p>Tea bags represent 40% of India's packaged tea market. Finding the right <strong>tea bag manufacturer</strong> can transform your wholesale business.</p>

      <h2>Types of Tea Bags</h2>
      <h3>1. Paper Tea Bags</h3>
      <ul>
        <li><strong>Cost:</strong> ₹0.30-₹0.50 per bag</li>
        <li><strong>Best for:</strong> Budget brands, hotel supply</li>
        <li><strong>Pros:</strong> Affordable, biodegradable</li>
      </ul>

      <h3>2. Nylon/Silk Tea Bags</h3>
      <ul>
        <li><strong>Cost:</strong> ₹1.50-₹3.00 per bag</li>
        <li><strong>Best for:</strong> Premium brands, specialty tea</li>
        <li><strong>Pros:</strong> Better flavor release, attractive</li>
      </ul>

      <h3>3. Pyramid Tea Bags</h3>
      <ul>
        <li><strong>Cost:</strong> ₹2.00-₹4.00 per bag</li>
        <li><strong>Best for:</strong> Whole leaf tea, luxury segment</li>
        <li><strong>Pros:</strong> Premium positioning, full leaf expansion</li>
      </ul>

      <h2>Finding Tea Bag Manufacturers</h2>
      <h3>Major Manufacturing Hubs</h3>
      <ul>
        <li><strong>Siliguri:</strong> Integrated with tea sourcing</li>
        <li><strong>Kolkata:</strong> Large-scale facilities</li>
        <li><strong>Delhi NCR:</strong> Packaging specialists</li>
        <li><strong>Mumbai:</strong> Export-focused units</li>
      </ul>

      <h2>Minimum Order Quantities</h2>
      <ul>
        <li><strong>Small manufacturers:</strong> 10,000-50,000 bags</li>
        <li><strong>Medium facilities:</strong> 50,000-200,000 bags</li>
        <li><strong>Large units:</strong> 200,000+ bags</li>
      </ul>

      <h2>Quality Checklist</h2>
      <ul>
        <li>Food-grade filter paper/material</li>
        <li>Heat-sealed edges (no glue)</li>
        <li>String and tag quality</li>
        <li>Consistent fill weight</li>
        <li>Proper packaging (moisture-proof)</li>
      </ul>

      <h2>Working with Manish Tea Traders</h2>
      <p>While we specialize in bulk tea supply, we can connect you with trusted tea bag manufacturers in Siliguri. <a href="/contact-us">Contact us</a> for recommendations and integrated solutions.</p>
    `,keywords:"tea bag manufacturers near me, tea bags supplier, tea bag making, wholesale tea bags",imageUrl:"/blog-images/tea-bag-production.png"},{id:"b29",title:"Packet Manufacturers Near Tea Markets: Complete Sourcing Guide (2026)",slug:"packet-manufacturers-near-tea-markets-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Find packaging suppliers near major tea markets. Learn about pouch types, printing costs, MOQ, and choosing the right packet manufacturer.",content:`
      <p>Packaging can make or break your tea brand. Finding <strong>packet manufacturers near tea markets</strong> saves time and reduces logistics costs.</p>

      <h2>Types of Tea Packaging</h2>
      <h3>1. Laminated Pouches</h3>
      <ul>
        <li><strong>Cost:</strong> ₹15-₹30 per kg capacity</li>
        <li><strong>Best for:</strong> Retail brands (100g, 250g, 500g, 1kg)</li>
        <li><strong>Material:</strong> Aluminum foil + polyethylene</li>
      </ul>

      <h3>2. Stand-Up Pouches</h3>
      <ul>
        <li><strong>Cost:</strong> ₹25-₹45 per kg capacity</li>
        <li><strong>Best for:</strong> Premium positioning, shelf display</li>
        <li><strong>Features:</strong> Zip lock, transparent window</li>
      </ul>

      <h3>3. Paper Boxes</h3>
      <ul>
        <li><strong>Cost:</strong> ₹40-₹80 per kg capacity</li>
        <li><strong>Best for:</strong> Gift packaging, export</li>
        <li><strong>Eco-friendly:</strong> Recyclable, premium look</li>
      </ul>

      <h2>Packaging Hubs Near Tea Markets</h2>
      <h3>Siliguri Packaging Suppliers</h3>
      <p>Located near tea wholesale markets:</p>
      <ul>
        <li>Sevoke Road area</li>
        <li>Bidhan Market zone</li>
        <li>Hill Cart Road</li>
      </ul>

      <h3>Kolkata Packaging District</h3>
      <ul>
        <li>Burrabazar (largest variety)</li>
        <li>Posta area</li>
        <li>Canning Street</li>
      </ul>

      <h2>Printing Costs</h2>
      <h3>Setup Charges</h3>
      <ul>
        <li><strong>Cylinder making:</strong> ₹8,000-₹25,000 (one-time)</li>
        <li><strong>Design/artwork:</strong> ₹3,000-₹10,000</li>
        <li><strong>Color separation:</strong> ₹500-₹2,000 per color</li>
      </ul>

      <h3>Printing Costs</h3>
      <ul>
        <li><strong>1-2 colors:</strong> ₹2-₹4 per pouch</li>
        <li><strong>3-4 colors:</strong> ₹4-₹7 per pouch</li>
        <li><strong>Full color (CMYK):</strong> ₹8-₹15 per pouch</li>
      </ul>

      <h2>Minimum Order Quantities</h2>
      <ul>
        <li><strong>Plain pouches:</strong> 1,000-5,000 pieces</li>
        <li><strong>Printed pouches:</strong> 5,000-10,000 pieces</li>
        <li><strong>Custom design:</strong> 10,000+ pieces</li>
      </ul>

      <h2>Choosing the Right Manufacturer</h2>
      <ul>
        <li>Food-grade certification</li>
        <li>Sample quality check</li>
        <li>Delivery timelines</li>
        <li>Payment terms</li>
        <li>Minimum order flexibility</li>
      </ul>

      <p>At <strong>Manish Tea Traders</strong>, we can recommend trusted packaging suppliers in Siliguri. <a href="/contact-us">Contact us</a> for complete tea + packaging solutions.</p>
    `,keywords:"packet manufacturer near me, packaging dealers near me, tea pouch suppliers, tea packaging material",imageUrl:"/blog-images/tea-packaging-rolls.png"},{id:"b30",title:"Starting Your Own Tea Brand: Complete Private Label Guide (2026)",slug:"starting-own-tea-brand-private-label-guide-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Launch your tea brand from scratch. Step-by-step guide covering sourcing, packaging, licensing, branding, and distribution strategies.",content:`
      <p>Dreaming of your own tea brand? You don't need a factory. With <strong>private label partnerships</strong>, you can launch a professional tea brand in 30-45 days.</p>

      <h2>Step 1: Define Your Brand Positioning</h2>
      <h3>Choose Your Niche</h3>
      <ul>
        <li><strong>Budget segment:</strong> ₹300-₹400/kg retail</li>
        <li><strong>Mid-premium:</strong> ₹400-₹600/kg retail</li>
        <li><strong>Premium:</strong> ₹600-₹1500/kg retail</li>
        <li><strong>Specialty:</strong> ₹1500+ /kg retail</li>
      </ul>

      <h2>Step 2: Legal Requirements</h2>
      <h3>Essential Licenses</h3>
      <ul>
        <li><strong>FSSAI Registration:</strong> ₹100-₹2,000 (mandatory)</li>
        <li><strong>GST Registration:</strong> Free (if turnover > ₹40L)</li>
        <li><strong>Trade License:</strong> ₹500-₹2,000 (local municipality)</li>
        <li><strong>Trademark (optional):</strong> ₹5,000-₹10,000</li>
      </ul>

      <h2>Step 3: Product Development</h2>
      <h3>Choose Your Blend</h3>
      <p>Work with your supplier to create signature blends:</p>
      <ul>
        <li><strong>Strong Kadak:</strong> 70% Assam + 30% Dooars</li>
        <li><strong>Balanced Family:</strong> 50% Dooars + 30% Assam + 20% Darjeeling</li>
        <li><strong>Premium Orthodox:</strong> 100% Darjeeling Second Flush</li>
      </ul>

      <h2>Step 4: Branding & Packaging</h2>
      <h3>Budget Breakdown</h3>
      <ul>
        <li><strong>Logo design:</strong> ₹3,000-₹15,000</li>
        <li><strong>Packaging design:</strong> ₹5,000-₹20,000</li>
        <li><strong>Printing cylinders:</strong> ₹8,000-₹25,000</li>
        <li><strong>First batch packaging:</strong> ₹20-₹40/kg</li>
      </ul>

      <h2>Step 5: Initial Investment</h2>
      <h3>Minimum Viable Launch (500 kg)</h3>
      <ul>
        <li><strong>Tea (bulk):</strong> ₹1,00,000-₹1,50,000</li>
        <li><strong>Packaging setup:</strong> ₹20,000-₹40,000</li>
        <li><strong>Packaging material:</strong> ₹10,000-₹20,000</li>
        <li><strong>Licenses:</strong> ₹5,000-₹10,000</li>
        <li><strong>Marketing:</strong> ₹20,000-₹50,000</li>
        <li><strong>Total:</strong> ₹1,55,000-₹2,70,000</li>
      </ul>

      <h2>Step 6: Distribution Strategy</h2>
      <h3>Sales Channels</h3>
      <ul>
        <li><strong>Local retail:</strong> Kirana stores, supermarkets</li>
        <li><strong>Online:</strong> Amazon, Flipkart, own website</li>
        <li><strong>B2B:</strong> Offices, hotels, cafes</li>
        <li><strong>Direct:</strong> WhatsApp Business, social media</li>
      </ul>

      <h2>Step 7: Pricing Strategy</h2>
      <h3>Example (Mid-Premium Brand)</h3>
      <ul>
        <li><strong>Cost price:</strong> ₹250/kg (tea + packaging)</li>
        <li><strong>Distributor price:</strong> ₹350/kg (40% margin)</li>
        <li><strong>Retailer price:</strong> ₹450/kg (29% margin)</li>
        <li><strong>MRP:</strong> ₹500/kg (11% retailer margin)</li>
      </ul>

      <h2>Partner with Manish Tea Traders</h2>
      <p>We offer complete brand launch support:</p>
      <ul>
        <li>Custom blend development</li>
        <li>Private label packaging (MOQ: 100 kg)</li>
        <li>Quality assurance</li>
        <li>Packaging supplier connections</li>
        <li>Business guidance</li>
      </ul>
      <p>Ready to launch your brand? <a href="/services/private-label-tea">Explore our private label service</a> or <a href="/contact-us">contact us</a> for a consultation.</p>
    `,keywords:"private label tea, tea brand, start tea business, own tea brand, tea business startup",imageUrl:"/blog-images/private-label-packaging.png"},{id:"b31",title:"North Bengal Tea Hub: Why Siliguri Dominates India's Tea Trade (2026)",slug:"north-bengal-tea-hub-siliguri-dominance-2026",date:"January 18, 2026",author:"Manish Tea Traders",excerpt:"Discover why Siliguri is North Bengal's tea capital and India's primary tea trading hub. Learn about geographic advantages, market dynamics, and sourcing benefits.",content:`
      <p>Siliguri's position as the <strong>North Bengal tea hub</strong> and India's primary tea trading center isn't accidental—it's the result of unique geographic, economic, and historical factors. Understanding this dominance helps wholesale buyers appreciate the value of sourcing from Siliguri.</p>

      <h2>Geographic Advantage</h2>

      <h3>The Perfect Location</h3>
      <p>Siliguri sits at the convergence of India's major tea-producing regions:</p>
      <ul>
        <li><strong>30 km from Dooars:</strong> Home to 150+ tea estates producing robust CTC teas</li>
        <li><strong>50 km from Darjeeling:</strong> 87 estates producing world-renowned orthodox teas</li>
        <li><strong>15 km from Terai:</strong> High-quality CTC and orthodox production</li>
        <li><strong>Direct highway to Assam:</strong> India's largest tea-producing state (700 million kg annually)</li>
      </ul>

      <h3>The "Chicken's Neck" Corridor</h3>
      <p>Siliguri occupies the narrow Siliguri Corridor (22 km wide) connecting:</p>
      <ul>
        <li>Mainland India to Northeast states</li>
        <li>All tea from Assam, Arunachal Pradesh must pass through Siliguri</li>
        <li>Creates natural consolidation point for tea trade</li>
      </ul>

      <h2>Market Dynamics</h2>

      <h3>Volume Statistics</h3>
      <p>Siliguri handles:</p>
      <ul>
        <li><strong>200+ million kg of tea annually</strong></li>
        <li><strong>60% of North Bengal's tea production</strong></li>
        <li><strong>30% of India's total tea trade</strong></li>
        <li><strong>₹3,000+ crores in annual tea transactions</strong></li>
      </ul>

      <h3>Market Participants</h3>
      <ul>
        <li><strong>500+ registered tea traders</strong></li>
        <li><strong>200+ blending houses</strong></li>
        <li><strong>100+ export-focused companies</strong></li>
        <li><strong>50+ tea auction buyers</strong></li>
      </ul>

      <h2>Infrastructure Advantages</h2>

      <h3>Transportation Network</h3>

      <h4>Road Connectivity</h4>
      <ul>
        <li><strong>NH 31:</strong> Direct route to Kolkata (600 km)</li>
        <li><strong>NH 27:</strong> Connection to Assam and Northeast</li>
        <li><strong>NH 10:</strong> Route to Darjeeling and Sikkim</li>
        <li><strong>Asian Highway 2:</strong> International connectivity</li>
      </ul>

      <h4>Rail Network</h4>
      <ul>
        <li><strong>New Jalpaiguri (NJP) Junction:</strong> Major railway hub</li>
        <li><strong>Direct trains to:</strong> Delhi, Mumbai, Kolkata, Chennai, Bangalore</li>
        <li><strong>Goods trains:</strong> Dedicated tea cargo services</li>
      </ul>

      <h4>Air Connectivity</h4>
      <ul>
        <li><strong>Bagdogra Airport:</strong> 12 km from Siliguri</li>
        <li><strong>Cargo facilities:</strong> For premium tea exports</li>
        <li><strong>Daily flights to:</strong> Delhi, Mumbai, Kolkata, Bangalore</li>
      </ul>

      <h3>Warehousing Facilities</h3>
      <ul>
        <li><strong>500+ private warehouses</strong></li>
        <li><strong>Climate-controlled storage</strong> for premium teas</li>
        <li><strong>Bonded warehouses</strong> for export</li>
        <li><strong>Total capacity:</strong> 50+ million kg</li>
      </ul>

      <h2>Tea Auction System</h2>

      <h3>Siliguri Tea Auction Center</h3>
      <p>One of India's three major tea auction centers (along with Kolkata and Guwahati):</p>
      <ul>
        <li><strong>Weekly auctions:</strong> Every Tuesday and Thursday</li>
        <li><strong>Volume:</strong> 3-5 million kg per auction</li>
        <li><strong>Participants:</strong> 100+ registered buyers</li>
        <li><strong>Transparency:</strong> Price discovery mechanism</li>
      </ul>

      <h3>How Auctions Work</h3>
      <ol>
        <li><strong>Pre-Auction Tasting:</strong> Buyers sample all lots (Monday)</li>
        <li><strong>Catalog Release:</strong> Details of all lots available</li>
        <li><strong>Bidding:</strong> Competitive bidding on Tuesday/Thursday</li>
        <li><strong>Price Setting:</strong> Market rates established</li>
        <li><strong>Delivery:</strong> Tea delivered to winning bidders</li>
      </ol>

      <h2>Ecosystem Benefits</h2>

      <h3>Supporting Services</h3>

      <h4>Quality Testing Labs</h4>
      <ul>
        <li>Moisture testing</li>
        <li>Grade verification</li>
        <li>Pesticide residue testing (MRL compliance)</li>
        <li>Certification for exports</li>
      </ul>

      <h4>Packaging Suppliers</h4>
      <ul>
        <li>Jute sacks manufacturers</li>
        <li>PP bag suppliers</li>
        <li>Custom packaging for private labels</li>
        <li>Printing and labeling services</li>
      </ul>

      <h4>Logistics Partners</h4>
      <ul>
        <li>Dedicated tea transport companies</li>
        <li>GPS-tracked vehicles</li>
        <li>Pan-India delivery networks</li>
        <li>Customs clearance for exports</li>
      </ul>

      <h3>Knowledge Hub</h3>
      <ul>
        <li><strong>Tea Tasting Expertise:</strong> Generations of tasting experience</li>
        <li><strong>Blending Knowledge:</strong> Custom blend creation</li>
        <li><strong>Market Intelligence:</strong> Real-time price and quality information</li>
        <li><strong>Estate Relationships:</strong> Direct connections with 300+ estates</li>
      </ul>

      <h2>Economic Impact</h2>

      <h3>Employment</h3>
      <ul>
        <li><strong>Direct:</strong> 50,000+ people in tea trading</li>
        <li><strong>Indirect:</strong> 200,000+ in supporting services</li>
        <li><strong>Seasonal:</strong> Additional workers during peak flush</li>
      </ul>

      <h3>Revenue Generation</h3>
      <ul>
        <li><strong>Annual Turnover:</strong> ₹3,000+ crores</li>
        <li><strong>GST Revenue:</strong> ₹200+ crores annually</li>
        <li><strong>Export Earnings:</strong> ₹500+ crores</li>
      </ul>

      <h2>Why Buyers Choose Siliguri</h2>

      <h3>1. Unbeatable Freshness</h3>
      <p>Tea reaches Siliguri within 24-48 hours of production:</p>
      <ul>
        <li>Maximum flavor and aroma retention</li>
        <li>Longer shelf life for end customers</li>
        <li>Better quality perception</li>
      </ul>

      <h3>2. Best Pricing</h3>
      <p>Factory-gate rates without middlemen:</p>
      <ul>
        <li>15-25% cheaper than secondary markets</li>
        <li>Direct estate pricing</li>
        <li>Auction-based price discovery</li>
      </ul>

      <h3>3. Maximum Variety</h3>
      <p>Access to all tea types and grades:</p>
      <ul>
        <li>Assam CTC (all grades)</li>
        <li>Darjeeling Orthodox (all flushes)</li>
        <li>Dooars specialty teas</li>
        <li>Terai premium CTC</li>
      </ul>

      <h3>4. Reliable Supply</h3>
      <p>Year-round availability:</p>
      <ul>
        <li>Multiple estate sources</li>
        <li>Large inventory buffers</li>
        <li>Established supply chains</li>
      </ul>

      <h3>5. Expert Guidance</h3>
      <p>Traders with deep knowledge:</p>
      <ul>
        <li>Quality assessment</li>
        <li>Blend creation</li>
        <li>Market trends</li>
        <li>Customer matching</li>
      </ul>

      <h2>Future Outlook</h2>

      <h3>Growth Drivers</h3>
      <ul>
        <li><strong>Infrastructure Development:</strong> New highways, rail upgrades</li>
        <li><strong>Digital Integration:</strong> Online auctions, e-trading platforms</li>
        <li><strong>Export Focus:</strong> Growing international demand</li>
        <li><strong>Organic/Specialty Teas:</strong> Premium segment expansion</li>
      </ul>

      <h3>Challenges</h3>
      <ul>
        <li>Climate change affecting production</li>
        <li>Competition from other origins (Kenya, Sri Lanka)</li>
        <li>Need for modernization</li>
        <li>Quality consistency requirements</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Why is Siliguri called the tea capital of India?</h3>
      <p>Siliguri handles 30% of India's tea trade, sits at the convergence of all major tea-producing regions (Darjeeling, Dooars, Terai, Assam), and hosts one of India's three major tea auction centers. Its strategic location makes it the primary trading hub.</p>

      <h3>Is all North Bengal tea sold through Siliguri?</h3>
      <p>Not all, but majority (60-70%). Some estates sell directly to large buyers, but most tea passes through Siliguri's auction system or private traders for price discovery and distribution.</p>

      <h3>Can small buyers access Siliguri market?</h3>
      <p>Yes! While auctions require large volumes, many Siliguri traders serve small buyers with MOQ as low as 100 kg. At Manish Tea Traders, we welcome buyers of all sizes.</p>

      <h3>How does Siliguri compare to Kolkata for tea trading?</h3>
      <p>Siliguri is the primary market (source), Kolkata is secondary (distribution). Siliguri offers:</p>
      <ul>
        <li>15-20% lower prices</li>
        <li>Fresher tea (5-7 days earlier)</li>
        <li>Better variety and estate access</li>
      </ul>

      <h3>Do I need to visit Siliguri to buy tea?</h3>
      <p>Not mandatory, but recommended for first-time buyers to:</p>
      <ul>
        <li>Meet suppliers face-to-face</li>
        <li>Understand market dynamics</li>
        <li>Test multiple samples</li>
        <li>Build long-term relationships</li>
      </ul>
      <p>Many buyers order remotely after initial visit.</p>

      <h2>Conclusion</h2>
      <p>Siliguri's dominance as the <strong>North Bengal tea hub</strong> is built on geographic advantage, robust infrastructure, and decades of expertise. For wholesale buyers, sourcing from Siliguri means accessing the freshest tea at the best prices with maximum variety. At <strong>Manish Tea Traders</strong>, we've been part of this ecosystem since 2004. <a href="/contact-us">Contact us</a> to experience the Siliguri advantage.</p>
    `,keywords:"north bengal tea hub, siliguri tea, tea hub india, siliguri tea market, north bengal tea",imageUrl:"/blog-images/north-bengal-tea-hub.png"},{id:"b32",title:"सिलीगुड़ी में चाय थोक व्यापारी: संपूर्ण गाइड 2026",slug:"siliguri-chai-thok-vyapari-guide-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"सिलीगुड़ी में चाय के थोक व्यापारियों की पूरी जानकारी। कीमत, गुणवत्ता, और विश्वसनीय आपूर्तिकर्ता कैसे चुनें।",content:`
      <p>सिलीगुड़ी भारत का सबसे बड़ा <strong>चाय थोक बाजार</strong> है। यहाँ से असम, दार्जिलिंग और डूअर्स की ताज़ी चाय सीधे मिलती है।</p>

      <h2>सिलीगुड़ी क्यों चुनें?</h2>
      <ul>
        <li><strong>ताज़गी:</strong> बागानों से 24-48 घंटे में चाय पहुँचती है</li>
        <li><strong>कीमत:</strong> कोलकाता से 15-20% सस्ती</li>
        <li><strong>विविधता:</strong> CTC, Orthodox, Green - सभी प्रकार की चाय</li>
        <li><strong>गुणवत्ता:</strong> सीधे बागानों से खरीद</li>
      </ul>

      <h2>मुख्य थोक बाजार</h2>
      <h3>1. सेवोक रोड</h3>
      <p>सबसे बड़ा चाय बाजार। यहाँ 200+ व्यापारी हैं।</p>
      <ul>
        <li><strong>समय:</strong> सुबह 9 बजे से शाम 6 बजे</li>
        <li><strong>विशेषता:</strong> CTC और Orthodox दोनों</li>
      </ul>

      <h3>2. महानंदा पारा</h3>
      <p>पारंपरिक बाजार, अच्छी कीमतें।</p>
      <ul>
        <li><strong>विशेषता:</strong> CTC चाय</li>
        <li><strong>लाभ:</strong> छोटे ऑर्डर भी स्वीकार</li>
      </ul>

      <h2>चाय की कीमतें (प्रति किलो)</h2>
      <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px;">चाय का प्रकार</th>
            <th style="padding: 10px;">सामान्य गुणवत्ता</th>
            <th style="padding: 10px;">प्रीमियम गुणवत्ता</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px;">CTC डस्ट</td>
            <td style="padding: 10px;">₹180 - ₹220</td>
            <td style="padding: 10px;">₹240 - ₹280</td>
          </tr>
          <tr>
            <td style="padding: 10px;">CTC लीफ (BP/BOP)</td>
            <td style="padding: 10px;">₹200 - ₹250</td>
            <td style="padding: 10px;">₹280 - ₹350</td>
          </tr>
          <tr>
            <td style="padding: 10px;">दार्जिलिंग Orthodox</td>
            <td style="padding: 10px;">₹350 - ₹500</td>
            <td style="padding: 10px;">₹800 - ₹2500</td>
          </tr>
        </tbody>
      </table>

      <h2>व्यापारी कैसे चुनें?</h2>
      <h3>जाँच करें:</h3>
      <ul>
        <li><strong>GST नंबर:</strong> पंजीकृत व्यापारी हो</li>
        <li><strong>FSSAI लाइसेंस:</strong> खाद्य सुरक्षा प्रमाण पत्र</li>
        <li><strong>नमूना परीक्षण:</strong> खरीदने से पहले चखें</li>
        <li><strong>गोदाम:</strong> उचित भंडारण सुविधा</li>
      </ul>

      <h2>मिनिमम ऑर्डर</h2>
      <ul>
        <li><strong>छोटे व्यापारी:</strong> 100-500 किलो</li>
        <li><strong>मध्यम व्यापारी:</strong> 500-2000 किलो</li>
        <li><strong>बड़े वितरक:</strong> 2000+ किलो</li>
      </ul>

      <h2>मनीष टी ट्रेडर्स</h2>
      <p>हम 2004 से सिलीगुड़ी में चाय का थोक व्यापार कर रहे हैं:</p>
      <ul>
        <li>सीधे बागानों से खरीद</li>
        <li>पूरे भारत में डिलीवरी</li>
        <li>गुणवत्ता की गारंटी</li>
        <li>प्रतिस्पर्धी कीमतें</li>
      </ul>
      <p><a href="/contact-us">संपर्क करें</a> नमूने और कीमत के लिए।</p>
    `,keywords:"सिलीगुड़ी में चाय थोक व्यापारी, चाय थोक बाजार, सिलीगुड़ी चाय, थोक चाय",imageUrl:"/blog-images/siliguri-tea-market.png"},{id:"b33",title:"सिलीगुड़ी चाय बाजार: थोक खरीदारों के लिए गाइड 2026",slug:"siliguri-chai-bazaar-guide-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"सिलीगुड़ी चाय बाजार की पूरी जानकारी। कहाँ जाएं, क्या खरीदें, और कैसे सौदा करें।",content:`
      <p><strong>सिलीगुड़ी चाय बाजार</strong> उत्तर बंगाल का सबसे बड़ा व्यापारिक केंद्र है। यहाँ रोज़ाना करोड़ों रुपये का चाय व्यापार होता है।</p>

      <h2>बाजार की विशेषताएं</h2>
      <ul>
        <li><strong>स्थान:</strong> असम, दार्जिलिंग और डूअर्स के बीच</li>
        <li><strong>दूरी:</strong> बागानों से सिर्फ 30-50 किमी</li>
        <li><strong>ताज़गी:</strong> उत्पादन के 24 घंटे बाद बाजार में</li>
        <li><strong>कीमत:</strong> बिचौलियों के बिना सीधी खरीद</li>
      </ul>

      <h2>मुख्य बाजार क्षेत्र</h2>
      <h3>सेवोक रोड बाजार</h3>
      <p>सबसे बड़ा और व्यस्त बाजार:</p>
      <ul>
        <li><strong>व्यापारी:</strong> 200+ पंजीकृत</li>
        <li><strong>विशेषता:</strong> सभी प्रकार की चाय</li>
        <li><strong>सुविधा:</strong> नमूना परीक्षण, तुरंत डिलीवरी</li>
      </ul>

      <h3>बिधान मार्केट</h3>
      <p>मध्यम आकार के व्यापारी:</p>
      <ul>
        <li><strong>विशेषता:</strong> खुदरा पैकिंग</li>
        <li><strong>लाभ:</strong> छोटे ऑर्डर स्वीकार</li>
      </ul>

      <h2>खरीदारी का सही समय</h2>
      <h3>दिन का समय</h3>
      <ul>
        <li><strong>सुबह 9-12 बजे:</strong> सबसे अच्छा समय, ताज़ा स्टॉक</li>
        <li><strong>दोपहर 12-3 बजे:</strong> व्यस्त समय, भीड़ ज्यादा</li>
        <li><strong>शाम 3-6 बजे:</strong> सौदेबाजी का समय</li>
      </ul>

      <h3>महीने का समय</h3>
      <ul>
        <li><strong>अप्रैल-जून:</strong> Second Flush, सर्वश्रेष्ठ गुणवत्ता</li>
        <li><strong>जुलाई-सितंबर:</strong> मानसून चाय, अच्छी कीमत</li>
        <li><strong>अक्टूबर-नवंबर:</strong> Autumn Flush, संतुलित</li>
      </ul>

      <h2>सौदेबाजी कैसे करें?</h2>
      <ol>
        <li><strong>नमूना लें:</strong> पहले चखें, फिर खरीदें</li>
        <li><strong>कीमत पूछें:</strong> 2-3 व्यापारियों से तुलना करें</li>
        <li><strong>मात्रा बताएं:</strong> ज्यादा मात्रा = बेहतर छूट</li>
        <li><strong>नकद भुगतान:</strong> 2-3% अतिरिक्त छूट</li>
      </ol>

      <h2>सावधानियां</h2>
      <ul>
        <li>बिना नमूने के न खरीदें</li>
        <li>GST बिल ज़रूर लें</li>
        <li>पुरानी चाय से बचें (गंध से पहचानें)</li>
        <li>100% अग्रिम भुगतान से सावधान रहें</li>
      </ul>

      <h2>मनीष टी ट्रेडर्स से खरीदें</h2>
      <p>बाजार जाने की ज़रूरत नहीं। हम आपके शहर तक डिलीवर करते हैं:</p>
      <ul>
        <li>ऑनलाइन ऑर्डर</li>
        <li>नमूना पहले, भुगतान बाद में</li>
        <li>पूरे भारत में डिलीवरी</li>
      </ul>
      <p><a href="/contact-us">आज ही संपर्क करें</a></p>
    `,keywords:"सिलीगुड़ी चाय बाजार, चाय बाजार सिलीगुड़ी, थोक चाय खरीदें",imageUrl:"/blog-images/siliguri-tea-market.png"},{id:"b34",title:"चाय की थोक आपूर्ति व्यवसाय कैसे शुरू करें: पूरी गाइड 2026",slug:"chai-thok-vyavsay-kaise-shuru-karen-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"चाय का थोक व्यापार शुरू करने की पूरी जानकारी। लाइसेंस, निवेश, आपूर्तिकर्ता और मुनाफा।",content:`
      <p>चाय का <strong>थोक व्यापार</strong> भारत में सबसे लाभदायक व्यवसायों में से एक है। सही योजना के साथ आप कम निवेश में अच्छा मुनाफा कमा सकते हैं।</p>

      <h2>चरण 1: व्यवसाय योजना</h2>
      <h3>अपना बाजार चुनें</h3>
      <ul>
        <li><strong>स्थानीय खुदरा:</strong> किराना दुकानें, सुपरमार्केट</li>
        <li><strong>चाय की दुकानें:</strong> ढाबे, होटल, रेस्तरां</li>
        <li><strong>B2B:</strong> ऑफिस, कंपनियां</li>
        <li><strong>ऑनलाइन:</strong> Amazon, Flipkart</li>
      </ul>

      <h2>चरण 2: आवश्यक लाइसेंस</h2>
      <h3>अनिवार्य लाइसेंस</h3>
      <ul>
        <li><strong>FSSAI पंजीकरण:</strong> ₹100-₹2,000 (अनिवार्य)</li>
        <li><strong>GST पंजीकरण:</strong> मुफ्त (₹40 लाख+ टर्नओवर पर)</li>
        <li><strong>व्यापार लाइसेंस:</strong> ₹500-₹2,000 (स्थानीय नगर पालिका)</li>
      </ul>

      <h3>वैकल्पिक लेकिन उपयोगी</h3>
      <ul>
        <li><strong>उद्यम आधार:</strong> MSME पंजीकरण (लोन के लिए)</li>
        <li><strong>ट्रेडमार्क:</strong> अपने ब्रांड के लिए</li>
      </ul>

      <h2>चरण 3: प्रारंभिक निवेश</h2>
      <h3>छोटे स्तर पर शुरुआत (₹2-3 लाख)</h3>
      <ul>
        <li><strong>चाय स्टॉक:</strong> ₹1,00,000-₹1,50,000 (500-750 किलो)</li>
        <li><strong>गोदाम किराया:</strong> ₹10,000-₹20,000 (3 महीने अग्रिम)</li>
        <li><strong>पैकिंग सामग्री:</strong> ₹20,000-₹30,000</li>
        <li><strong>लाइसेंस:</strong> ₹5,000-₹10,000</li>
        <li><strong>परिवहन:</strong> ₹10,000-₹15,000</li>
        <li><strong>विविध:</strong> ₹10,000-₹20,000</li>
      </ul>

      <h2>चरण 4: आपूर्तिकर्ता चुनें</h2>
      <h3>सिलीगुड़ी से क्यों खरीदें?</h3>
      <ul>
        <li><strong>ताज़गी:</strong> बागानों के पास</li>
        <li><strong>कीमत:</strong> 15-25% सस्ती</li>
        <li><strong>विविधता:</strong> सभी प्रकार उपलब्ध</li>
        <li><strong>गुणवत्ता:</strong> सीधे बागानों से</li>
      </ul>

      <h2>चरण 5: मूल्य निर्धारण</h2>
      <h3>उदाहरण (मध्यम गुणवत्ता CTC)</h3>
      <ul>
        <li><strong>खरीद मूल्य:</strong> ₹220/किलो</li>
        <li><strong>परिवहन:</strong> ₹5/किलो</li>
        <li><strong>पैकिंग:</strong> ₹15/किलो</li>
        <li><strong>कुल लागत:</strong> ₹240/किलो</li>
        <li><strong>बिक्री मूल्य:</strong> ₹300-₹320/किलो</li>
        <li><strong>लाभ:</strong> ₹60-₹80/किलो (25-33%)</li>
      </ul>

      <h2>चरण 6: ग्राहक कैसे खोजें?</h2>
      <ol>
        <li><strong>स्थानीय दुकानें:</strong> सीधे मिलें, नमूने दें</li>
        <li><strong>WhatsApp Business:</strong> कैटलॉग बनाएं</li>
        <li><strong>Google My Business:</strong> मुफ्त लिस्टिंग</li>
        <li><strong>रेफरल:</strong> मौजूदा ग्राहकों से</li>
      </ol>

      <h2>सामान्य गलतियां (बचें)</h2>
      <ul>
        <li>बिना नमूने के थोक खरीद</li>
        <li>गुणवत्ता से ज्यादा कीमत पर ध्यान</li>
        <li>ज्यादा स्टॉक रखना (6 महीने से ज्यादा नहीं)</li>
        <li>सही भंडारण न करना</li>
      </ul>

      <h2>मनीष टी ट्रेडर्स के साथ शुरू करें</h2>
      <p>हम नए व्यापारियों की मदद करते हैं:</p>
      <ul>
        <li>कम MOQ (100 किलो से शुरू)</li>
        <li>व्यापार सलाह</li>
        <li>गुणवत्ता की गारंटी</li>
        <li>क्रेडिट सुविधा (स्थापित ग्राहकों के लिए)</li>
      </ul>
      <p><a href="/contact-us">आज ही शुरुआत करें</a></p>
    `,keywords:"चाय का व्यवसाय, थोक चाय व्यापार, चाय बिजनेस कैसे शुरू करें",imageUrl:"/blog-images/hindi-tea-business.png"},{id:"b35",title:"असम बनाम दार्जिलिंग चाय: व्यापार के लिए कौन बेहतर?",slug:"assam-vs-darjeeling-chai-comparison-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"असम और दार्जिलिंग चाय की तुलना। स्वाद, कीमत, बाजार और मुनाफा - व्यापारियों के लिए पूरी जानकारी।",content:`
      <p>चाय व्यापार में सबसे बड़ा सवाल: <strong>असम चाय</strong> या <strong>दार्जिलिंग चाय</strong>? दोनों की अपनी विशेषताएं हैं।</p>

      <h2>असम चाय (CTC)</h2>
      <h3>विशेषताएं</h3>
      <ul>
        <li><strong>स्वाद:</strong> मजबूत, माल्टी, गहरा</li>
        <li><strong>रंग:</strong> गहरा लाल/तांबा</li>
        <li><strong>उपयोग:</strong> दूध के साथ</li>
        <li><strong>बाजार:</strong> 90% भारतीय बाजार</li>
      </ul>

      <h3>कीमत (थोक)</h3>
      <ul>
        <li><strong>सामान्य:</strong> ₹200-₹280/किलो</li>
        <li><strong>प्रीमियम:</strong> ₹300-₹400/किलो</li>
      </ul>

      <h3>किसके लिए सही?</h3>
      <ul>
        <li>चाय की दुकानें (ढाबे, होटल)</li>
        <li>घरेलू उपयोग (दूध वाली चाय)</li>
        <li>मसाला चाय</li>
        <li><strong>बिक्री:</strong> तेज़, रोज़ाना मांग</li>
      </ul>

      <h2>दार्जिलिंग चाय (Orthodox)</h2>
      <h3>विशेषताएं</h3>
      <ul>
        <li><strong>स्वाद:</strong> हल्का, फूलों जैसा, नाज़ुक</li>
        <li><strong>रंग:</strong> हल्का पीला/सुनहरा</li>
        <li><strong>उपयोग:</strong> बिना दूध (Black Tea)</li>
        <li><strong>बाजार:</strong> प्रीमियम, निर्यात</li>
      </ul>

      <h3>कीमत (थोक)</h3>
      <ul>
        <li><strong>सामान्य:</strong> ₹350-₹600/किलो</li>
        <li><strong>Second Flush:</strong> ₹800-₹2,500/किलो</li>
        <li><strong>First Flush:</strong> ₹2,000-₹5,000/किलो</li>
      </ul>

      <h3>किसके लिए सही?</h3>
      <ul>
        <li>प्रीमियम कैफे</li>
        <li>उपहार पैकेज</li>
        <li>स्वास्थ्य के प्रति जागरूक ग्राहक</li>
        <li><strong>बिक्री:</strong> धीमी, लेकिन ज्यादा मुनाफा</li>
      </ul>

      <h2>लाभ की तुलना</h2>
      <h3>असम चाय</h3>
      <ul>
        <li><strong>खरीद:</strong> ₹250/किलो</li>
        <li><strong>बिक्री:</strong> ₹350/किलो</li>
        <li><strong>लाभ:</strong> ₹100/किलो (40%)</li>
        <li><strong>बिक्री गति:</strong> तेज़ (100 किलो/सप्ताह)</li>
        <li><strong>मासिक लाभ:</strong> ₹40,000</li>
      </ul>

      <h3>दार्जिलिंग चाय</h3>
      <ul>
        <li><strong>खरीद:</strong> ₹800/किलो</li>
        <li><strong>बिक्री:</strong> ₹1,500/किलो</li>
        <li><strong>लाभ:</strong> ₹700/किलो (87%)</li>
        <li><strong>बिक्री गति:</strong> धीमी (20 किलो/सप्ताह)</li>
        <li><strong>मासिक लाभ:</strong> ₹56,000</li>
      </ul>

      <h2>हमारी सलाह</h2>
      <h3>नए व्यापारियों के लिए</h3>
      <p><strong>असम CTC से शुरू करें:</strong></p>
      <ul>
        <li>तेज़ बिक्री</li>
        <li>कम जोखिम</li>
        <li>आसान बाजार</li>
      </ul>

      <h3>स्थापित व्यापारियों के लिए</h3>
      <p><strong>दोनों रखें:</strong></p>
      <ul>
        <li>80% असम (रोज़ाना बिक्री)</li>
        <li>20% दार्जिलिंग (प्रीमियम ग्राहक)</li>
      </ul>

      <h2>मनीष टी ट्रेडर्स</h2>
      <p>हम दोनों प्रकार की चाय में विशेषज्ञ हैं:</p>
      <ul>
        <li><strong>असम:</strong> सीधे असम बागानों से</li>
        <li><strong>दार्जिलिंग:</strong> प्रमाणित Second Flush</li>
        <li>नमूने उपलब्ध</li>
        <li>मिश्रण सेवा (Custom Blends)</li>
      </ul>
      <p><a href="/products/ctc-tea">असम CTC देखें</a> | <a href="/products/orthodox-leaf">दार्जिलिंग Orthodox देखें</a></p>
    `,keywords:"असम चाय, दार्जिलिंग चाय, असम बनाम दार्जिलिंग, चाय तुलना",imageUrl:"/blog-images/assam-vs-darjeeling.png"},{id:"b36",title:"How Siliguri Became India's Major Tea Trading Hub: Complete History (2026)",slug:"how-siliguri-became-tea-trading-hub-history-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"Discover how Siliguri evolved from a small town to India's largest tea trading center. The complete historical journey.",content:`
      <p>Today, <strong>Siliguri</strong> handles over 30% of India's tea trade. But how did this small town become the nation's tea capital?</p>

      <h2>The Geographic Advantage</h2>
      <h3>The Chicken's Neck Corridor</h3>
      <p>Siliguri sits in the narrow Siliguri Corridor, connecting Northeast India to the mainland:</p>
      <ul>
        <li><strong>North:</strong> Darjeeling hills (30 km)</li>
        <li><strong>East:</strong> Dooars tea belt (20-40 km)</li>
        <li><strong>Further East:</strong> Assam valley (200 km)</li>
        <li><strong>Strategic Position:</strong> Gateway to 3 major tea regions</li>
      </ul>

      <h2>Historical Timeline</h2>
      <h3>1835-1900: The Beginning</h3>
      <ul>
        <li><strong>1835:</strong> First tea planted in Darjeeling</li>
        <li><strong>1856:</strong> Siliguri established as railway junction</li>
        <li><strong>1880s:</strong> Dooars tea gardens developed</li>
        <li><strong>1890s:</strong> First tea warehouses in Siliguri</li>
      </ul>

      <h3>1900-1947: Colonial Era Growth</h3>
      <ul>
        <li><strong>1905:</strong> Siliguri Tea Auction Center established</li>
        <li><strong>1920s:</strong> Railway expansion to Assam</li>
        <li><strong>1930s:</strong> Major trading houses set up offices</li>
        <li><strong>1947:</strong> Partition increases strategic importance</li>
      </ul>

      <h3>1947-2000: Post-Independence Boom</h3>
      <ul>
        <li><strong>1950s:</strong> Government tea auctions regularized</li>
        <li><strong>1970s:</strong> CTC processing revolution</li>
        <li><strong>1980s:</strong> Private traders flourish</li>
        <li><strong>1990s:</strong> Export market expansion</li>
      </ul>

      <h3>2000-Present: Modern Era</h3>
      <ul>
        <li><strong>2000s:</strong> Digital transformation begins</li>
        <li><strong>2010s:</strong> E-auctions introduced</li>
        <li><strong>2020s:</strong> Pan-India distribution networks</li>
      </ul>

      <h2>Why Siliguri Dominates</h2>
      <h3>1. Proximity to Source</h3>
      <p>Tea reaches Siliguri within 24-48 hours of production, ensuring maximum freshness.</p>

      <h3>2. Infrastructure</h3>
      <ul>
        <li>Major railway junction</li>
        <li>NH31 highway connectivity</li>
        <li>Bagdogra Airport (12 km)</li>
        <li>Modern warehousing facilities</li>
      </ul>

      <h3>3. Auction System</h3>
      <p>One of India's 3 major tea auction centers, providing transparent price discovery.</p>

      <h3>4. Expertise Concentration</h3>
      <ul>
        <li>200+ registered tea traders</li>
        <li>Generations of tea tasting expertise</li>
        <li>Established buyer-seller networks</li>
      </ul>

      <h2>Economic Impact Today</h2>
      <ul>
        <li><strong>Annual Turnover:</strong> ₹3,000+ crores</li>
        <li><strong>Direct Employment:</strong> 50,000+ people</li>
        <li><strong>Tea Volume:</strong> 200+ million kg annually</li>
        <li><strong>Export Contribution:</strong> ₹500+ crores</li>
      </ul>

      <h2>Manish Tea Traders Legacy</h2>
      <p>Since 2004, we've been part of Siliguri's tea trading heritage:</p>
      <ul>
        <li>Direct estate relationships</li>
        <li>Quality-first approach</li>
        <li>Pan-India distribution</li>
      </ul>
      <p><a href="/about-us">Learn about our journey</a> or <a href="/contact-us">partner with us</a>.</p>
    `,keywords:"siliguri tea history, tea trading hub, siliguri tea market history",imageUrl:"/blog-images/vintage-tea-train.png"},{id:"b37",title:"How to Verify a Genuine Tea Supplier in India: Complete Checklist (2026)",slug:"verify-genuine-tea-supplier-india-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"Protect your business from fraud. Complete guide to verifying tea suppliers with licenses, quality checks, and red flags.",content:`
      <p>Tea trading fraud costs businesses lakhs annually. Learn how to <strong>verify genuine tea suppliers</strong> before placing orders.</p>

      <h2>Essential Document Verification</h2>
      <h3>1. FSSAI License (Mandatory)</h3>
      <ul>
        <li><strong>What to check:</strong> 14-digit license number</li>
        <li><strong>Verification:</strong> Visit <a href="https://foscos.fssai.gov.in" target="_blank" rel="noopener">FSSAI Portal</a></li>
        <li><strong>Red flag:</strong> Expired or fake license</li>
      </ul>

      <h3>2. GST Registration</h3>
      <ul>
        <li><strong>What to check:</strong> 15-digit GSTIN</li>
        <li><strong>Verification:</strong> GST portal search</li>
        <li><strong>Confirm:</strong> Business name matches</li>
      </ul>

      <h3>3. Trade License</h3>
      <ul>
        <li><strong>Issued by:</strong> Local municipal corporation</li>
        <li><strong>Check:</strong> Valid for current year</li>
        <li><strong>Verify:</strong> Business address matches</li>
      </ul>

      <h2>Physical Verification</h2>
      <h3>Visit the Warehouse</h3>
      <p>Always visit before large orders:</p>
      <ul>
        <li><strong>Storage conditions:</strong> Dry, cool, pest-free</li>
        <li><strong>Stock levels:</strong> Adequate inventory</li>
        <li><strong>Cleanliness:</strong> Professional setup</li>
        <li><strong>Equipment:</strong> Weighing scales, moisture meters</li>
      </ul>

      <h3>Meet the Owner/Manager</h3>
      <ul>
        <li>Ask about sourcing (estate names)</li>
        <li>Request references from existing clients</li>
        <li>Discuss quality assurance process</li>
      </ul>

      <h2>Quality Verification</h2>
      <h3>Sample Testing Protocol</h3>
      <ol>
        <li><strong>Request samples:</strong> 100-200g of each grade</li>
        <li><strong>Visual inspection:</strong> Color, size, uniformity</li>
        <li><strong>Aroma test:</strong> Fresh, no musty smell</li>
        <li><strong>Brewing test:</strong> Taste, color, strength</li>
        <li><strong>Third-party lab:</strong> For large orders (optional)</li>
      </ol>

      <h3>Red Flags in Quality</h3>
      <ul>
        <li>Musty or stale smell</li>
        <li>Excessive dust or broken leaves</li>
        <li>Inconsistent particle size</li>
        <li>Weak liquor despite claims</li>
        <li>Unwilling to provide samples</li>
      </ul>

      <h2>Financial Verification</h2>
      <h3>Payment Terms Red Flags</h3>
      <ul>
        <li><strong>100% advance:</strong> High risk for new suppliers</li>
        <li><strong>Cash only:</strong> No paper trail</li>
        <li><strong>No GST invoice:</strong> Illegal transaction</li>
        <li><strong>Pressure tactics:</strong> "Limited time offer"</li>
      </ul>

      <h3>Safe Payment Practices</h3>
      <ul>
        <li><strong>First order:</strong> 50% advance, 50% on delivery</li>
        <li><strong>Established relationship:</strong> 30-day credit</li>
        <li><strong>Always:</strong> Bank transfer with GST invoice</li>
      </ul>

      <h2>Online Verification</h2>
      <h3>Digital Footprint Check</h3>
      <ul>
        <li><strong>Google My Business:</strong> Reviews and ratings</li>
        <li><strong>Website:</strong> Professional, detailed information</li>
        <li><strong>Social media:</strong> Active presence</li>
        <li><strong>Industry directories:</strong> Listed in tea associations</li>
      </ul>

      <h2>Reference Verification</h2>
      <h3>Ask for Client References</h3>
      <ul>
        <li>Request 3-5 current client contacts</li>
        <li>Call and verify their experience</li>
        <li>Ask about quality consistency</li>
        <li>Inquire about dispute resolution</li>
      </ul>

      <h2>Verification Checklist</h2>
      <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px;">Item</th>
            <th style="padding: 10px;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px;">FSSAI License verified</td><td style="padding: 10px;">☐</td></tr>
          <tr><td style="padding: 10px;">GST Registration confirmed</td><td style="padding: 10px;">☐</td></tr>
          <tr><td style="padding: 10px;">Physical warehouse visited</td><td style="padding: 10px;">☐</td></tr>
          <tr><td style="padding: 10px;">Samples tested</td><td style="padding: 10px;">☐</td></tr>
          <tr><td style="padding: 10px;">References checked</td><td style="padding: 10px;">☐</td></tr>
          <tr><td style="padding: 10px;">Online presence verified</td><td style="padding: 10px;">☐</td></tr>
        </tbody>
      </table>

      <h2>Manish Tea Traders Credentials</h2>
      <p>We welcome verification:</p>
      <ul>
        <li><strong>FSSAI:</strong> Fully licensed and compliant</li>
        <li><strong>GST:</strong> Registered since 2017</li>
        <li><strong>Experience:</strong> Since 2004</li>
        <li><strong>References:</strong> 500+ satisfied clients</li>
      </ul>
      <p><a href="/contact-us">Visit us in Siliguri</a> or request our credentials.</p>
    `,keywords:"verify tea supplier, genuine tea supplier, tea supplier verification, tea business fraud",imageUrl:"/blog-images/tea-quality-testing.png"},{id:"b38",title:"Export Tea from India: Complete Documentation Guide (2026)",slug:"export-tea-from-india-documentation-guide-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"Start tea export business from India. Complete guide to licenses, documentation, MRL compliance, and shipping procedures.",content:`
      <p>India exports 250+ million kg of tea annually. Learn how to <strong>export tea from India</strong> with proper documentation.</p>

      <h2>Essential Licenses & Registrations</h2>
      <h3>1. IEC (Import Export Code)</h3>
      <ul>
        <li><strong>Issued by:</strong> DGFT (Directorate General of Foreign Trade)</li>
        <li><strong>Cost:</strong> ₹500 (online)</li>
        <li><strong>Time:</strong> 2-3 days</li>
        <li><strong>Validity:</strong> Lifetime</li>
      </ul>

      <h3>2. FSSAI License</h3>
      <ul>
        <li><strong>Type needed:</strong> Central License (for export)</li>
        <li><strong>Cost:</strong> ₹7,500/year</li>
        <li><strong>Mandatory:</strong> For all food exports</li>
      </ul>

      <h3>3. Tea Board Registration</h3>
      <ul>
        <li><strong>Required for:</strong> Tea exporters</li>
        <li><strong>Benefits:</strong> Export subsidies, market access</li>
        <li><strong>Contact:</strong> Tea Board of India, Kolkata</li>
      </ul>

      <h3>4. APEDA Registration (Optional)</h3>
      <ul>
        <li><strong>For:</strong> Organic tea exports</li>
        <li><strong>Benefits:</strong> Certification support</li>
      </ul>

      <h2>Quality & Testing Requirements</h2>
      <h3>MRL (Maximum Residue Limits) Compliance</h3>
      <p>Different countries have different pesticide limits:</p>
      <ul>
        <li><strong>EU:</strong> Strictest standards (400+ pesticides tested)</li>
        <li><strong>USA:</strong> FDA regulations</li>
        <li><strong>Japan:</strong> Positive list system</li>
        <li><strong>Middle East:</strong> Moderate standards</li>
      </ul>

      <h3>Testing Labs (NABL Accredited)</h3>
      <ul>
        <li>Tea Research Association, Kolkata</li>
        <li>FSSAI approved labs</li>
        <li><strong>Cost:</strong> ₹15,000-₹30,000 per test</li>
        <li><strong>Time:</strong> 7-10 days</li>
      </ul>

      <h2>Export Documentation</h2>
      <h3>Pre-Shipment Documents</h3>
      <ol>
        <li><strong>Proforma Invoice:</strong> Detailed quotation</li>
        <li><strong>Purchase Order:</strong> From buyer</li>
        <li><strong>Letter of Credit:</strong> Payment guarantee (if applicable)</li>
      </ol>

      <h3>Shipping Documents</h3>
      <ol>
        <li><strong>Commercial Invoice:</strong> Final bill</li>
        <li><strong>Packing List:</strong> Container details</li>
        <li><strong>Bill of Lading:</strong> Shipping receipt</li>
        <li><strong>Certificate of Origin:</strong> India origin proof</li>
        <li><strong>Phytosanitary Certificate:</strong> Plant health certificate</li>
        <li><strong>Test Report:</strong> MRL compliance</li>
        <li><strong>FSSAI Certificate:</strong> Food safety compliance</li>
      </ol>

      <h2>Packaging Requirements</h2>
      <h3>Export-Grade Packaging</h3>
      <ul>
        <li><strong>Material:</strong> Food-grade aluminum foil + PE</li>
        <li><strong>Sizes:</strong> 25kg, 30kg, or 40kg bags</li>
        <li><strong>Labeling:</strong> Country-specific requirements</li>
        <li><strong>Palletization:</strong> For container loading</li>
      </ul>

      <h2>Shipping Process</h2>
      <h3>Container Options</h3>
      <ul>
        <li><strong>20ft Container:</strong> 10-12 tons</li>
        <li><strong>40ft Container:</strong> 20-24 tons</li>
        <li><strong>Cost:</strong> ₹80,000-₹1,50,000 (to major ports)</li>
      </ul>

      <h3>Major Export Ports</h3>
      <ul>
        <li><strong>Kolkata:</strong> Nearest to Siliguri (600 km)</li>
        <li><strong>Mumbai:</strong> For Middle East/Africa</li>
        <li><strong>Chennai:</strong> For Southeast Asia</li>
      </ul>

      <h2>Cost Breakdown (Example: 1 Container to UAE)</h2>
      <ul>
        <li><strong>Tea (20 tons @ ₹250/kg):</strong> ₹50,00,000</li>
        <li><strong>Packaging:</strong> ₹1,00,000</li>
        <li><strong>Testing:</strong> ₹25,000</li>
        <li><strong>Documentation:</strong> ₹15,000</li>
        <li><strong>Freight:</strong> ₹1,20,000</li>
        <li><strong>Insurance:</strong> ₹30,000</li>
        <li><strong>Total:</strong> ₹52,90,000</li>
        <li><strong>Selling Price:</strong> ₹60,00,000+</li>
        <li><strong>Profit:</strong> ₹7,00,000+ (13%)</li>
      </ul>

      <h2>Payment Terms</h2>
      <h3>Common Methods</h3>
      <ul>
        <li><strong>Letter of Credit (LC):</strong> Safest for new buyers</li>
        <li><strong>Advance Payment:</strong> 30-50% upfront</li>
        <li><strong>CAD (Cash Against Documents):</strong> Medium risk</li>
      </ul>

      <h2>Manish Tea Traders Export Support</h2>
      <p>We assist with export orders:</p>
      <ul>
        <li>MRL-compliant tea sourcing</li>
        <li>Export documentation support</li>
        <li>Container stuffing supervision</li>
        <li>Quality certification</li>
      </ul>
      <p><a href="/contact-us">Contact us</a> for export-ready tea.</p>
    `,keywords:"export tea from india, tea export documentation, tea export license, MRL compliance tea",imageUrl:"/blog-images/tea-export-port.png"},{id:"b39",title:"Tea Trading in India: Future Trends & Opportunities (2026-2030)",slug:"tea-trading-india-future-trends-2026",date:"January 19, 2026",author:"Manish Tea Traders",excerpt:"Discover emerging trends in India's tea industry. Digital transformation, specialty teas, and new market opportunities.",content:`
      <p>India's tea industry is evolving rapidly. Explore the <strong>future trends</strong> shaping tea trading in the next 5 years.</p>

      <h2>Digital Transformation</h2>
      <h3>1. E-Auctions</h3>
      <ul>
        <li><strong>Current:</strong> 40% of auctions online</li>
        <li><strong>2030 Target:</strong> 80%+ digital</li>
        <li><strong>Benefits:</strong> Transparency, wider participation</li>
        <li><strong>Challenge:</strong> Digital literacy among small traders</li>
      </ul>

      <h3>2. Blockchain for Traceability</h3>
      <ul>
        <li>Track tea from garden to cup</li>
        <li>Verify authenticity (especially Darjeeling)</li>
        <li>Premium pricing for traceable tea</li>
      </ul>

      <h3>3. AI-Powered Quality Testing</h3>
      <ul>
        <li>Automated tasting using sensors</li>
        <li>Consistent quality grading</li>
        <li>Faster decision-making</li>
      </ul>

      <h2>Market Trends</h2>
      <h3>1. Specialty Tea Boom</h3>
      <p><strong>Growing segments:</strong></p>
      <ul>
        <li><strong>Organic tea:</strong> 25% annual growth</li>
        <li><strong>Single-origin:</strong> Premium positioning</li>
        <li><strong>Flavored tea:</strong> Youth market</li>
        <li><strong>Wellness tea:</strong> Green, white, herbal</li>
      </ul>

      <h3>2. Direct-to-Consumer (D2C)</h3>
      <ul>
        <li>Tea brands selling online</li>
        <li>Subscription models growing</li>
        <li>Higher margins (40-50%)</li>
        <li><strong>Challenge:</strong> Logistics and freshness</li>
      </ul>

      <h3>3. Export Market Expansion</h3>
      <p><strong>Emerging markets:</strong></p>
      <ul>
        <li><strong>USA:</strong> Specialty tea demand</li>
        <li><strong>Germany:</strong> Organic tea preference</li>
        <li><strong>China:</strong> Darjeeling premium market</li>
        <li><strong>Australia:</strong> Growing tea culture</li>
      </ul>

      <h2>Production Innovations</h2>
      <h3>1. Climate-Resilient Varieties</h3>
      <ul>
        <li>Drought-resistant cultivars</li>
        <li>Higher yield varieties</li>
        <li>Better pest resistance</li>
      </ul>

      <h3>2. Sustainable Practices</h3>
      <ul>
        <li><strong>Organic conversion:</strong> 15% of estates by 2030</li>
        <li><strong>Rainforest Alliance:</strong> Certification growth</li>
        <li><strong>Carbon neutral:</strong> Premium pricing</li>
      </ul>

      <h2>Challenges Ahead</h2>
      <h3>1. Climate Change</h3>
      <ul>
        <li>Erratic rainfall affecting yield</li>
        <li>Temperature changes impacting quality</li>
        <li><strong>Solution:</strong> Adaptive farming practices</li>
      </ul>

      <h3>2. Labor Shortage</h3>
      <ul>
        <li>Youth migration to cities</li>
        <li>Rising wage costs</li>
        <li><strong>Solution:</strong> Mechanization, better wages</li>
      </ul>

      <h3>3. International Competition</h3>
      <ul>
        <li><strong>Kenya:</strong> Lower production costs</li>
        <li><strong>Sri Lanka:</strong> Quality competition</li>
        <li><strong>Solution:</strong> Focus on specialty, origin teas</li>
      </ul>

      <h2>Opportunities for Traders</h2>
      <h3>1. Private Label Growth</h3>
      <ul>
        <li>Small brands entering market</li>
        <li>Low MOQ demand increasing</li>
        <li><strong>Opportunity:</strong> Flexible packaging services</li>
      </ul>

      <h3>2. Regional Expansion</h3>
      <ul>
        <li>Tier 2/3 cities growing</li>
        <li>Rural market potential</li>
        <li><strong>Strategy:</strong> Local distribution networks</li>
      </ul>

      <h3>3. Value Addition</h3>
      <ul>
        <li>Ready-to-drink tea</li>
        <li>Tea extracts for cosmetics</li>
        <li>Tea-based supplements</li>
      </ul>

      <h2>Technology Adoption Roadmap</h2>
      <h3>2026-2027</h3>
      <ul>
        <li>WhatsApp Business for orders</li>
        <li>Digital payment integration</li>
        <li>Basic inventory management</li>
      </ul>

      <h3>2028-2029</h3>
      <ul>
        <li>E-commerce platform</li>
        <li>CRM systems</li>
        <li>Automated invoicing</li>
      </ul>

      <h3>2030+</h3>
      <ul>
        <li>AI-powered demand forecasting</li>
        <li>Blockchain traceability</li>
        <li>IoT-enabled warehouses</li>
      </ul>

      <h2>Manish Tea Traders: Future Ready</h2>
      <p>We're adapting to industry changes:</p>
      <ul>
        <li>Digital ordering systems</li>
        <li>Specialty tea sourcing</li>
        <li>Export-ready infrastructure</li>
        <li>Sustainable sourcing partnerships</li>
      </ul>
      <p><a href="/contact-us">Partner with us</a> for future-ready tea trading.</p>
    `,keywords:"tea trading trends, tea industry future, tea business opportunities, india tea market",imageUrl:"/blog-images/future-tea-tech.png"}],jM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsx("main",{className:"flex-grow pt-20",children:o.jsxs("div",{className:"bg-tea-50 min-h-screen pt-12 pb-16",children:[o.jsx(Rt,{title:"Tea Industry Blog | Wholesale Market Insights | Manish Tea Traders",description:"Read our latest insights on the Indian tea market, wholesale guides, and tips for starting a tea brand in India.",canonicalUrl:"https://teatraders.info/blog/",image:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9"}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx("h1",{className:"text-4xl font-serif font-bold text-tea-900 mb-4",children:"Tea Industry Insights"}),o.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Expert guides on wholesale tea buying, market trends, and tips for tea businesses."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Uw.map(t=>o.jsxs("div",{className:"bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col group",children:[o.jsx(fe,{to:`/blog/${t.slug}`,className:"block h-48 overflow-hidden",children:o.jsx("img",{src:t.imageUrl,srcSet:`
                                                ${t.imageUrl.replace("&w=1200","&w=400")} 400w,
                                                ${t.imageUrl.replace("&w=1200","&w=800")} 800w
                                            `,sizes:"(max-width: 768px) 100vw, 400px",alt:t.title,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),o.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[o.jsxs("div",{className:"flex items-center text-xs text-gray-500 mb-3 space-x-2",children:[o.jsx("span",{children:t.date}),o.jsx("span",{children:"•"}),o.jsx("span",{className:"uppercase tracking-wide text-tea-600 font-semibold",children:"Guide"})]}),o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-tea-700 transition-colors",children:o.jsx(fe,{to:`/blog/${t.slug}`,children:t.title})}),o.jsx("p",{className:"text-gray-600 text-sm line-clamp-3 mb-4 flex-grow",children:t.excerpt}),o.jsxs(fe,{to:`/blog/${t.slug}`,className:"flex items-center text-tea-600 font-semibold hover:text-tea-800 mt-auto",children:["Read Article ",o.jsx(bo,{className:"h-4 w-4 ml-1"})]})]})]},t.id))})]})]})}),o.jsx(Dt,{}),o.jsx(Ea,{})]}),NM=()=>{const{slug:t}=Pc(),n=Uw.find(s=>s.slug===t);return n?o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsx("main",{className:"flex-grow pt-20",children:o.jsxs("div",{className:"bg-white min-h-screen pt-8 pb-16",children:[o.jsx(Rt,{title:`${n.title} | Manish Tea Traders Blog`,description:n.excerpt,keywords:n.keywords||"",canonicalUrl:`https://teatraders.info/blog/${n.slug}/`,image:n.imageUrl,schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:n.title,image:n.imageUrl,datePublished:new Date(n.date).toISOString(),dateModified:new Date(n.date).toISOString(),author:{"@type":"Person",name:n.author,url:"https://teatraders.info/about-us"},publisher:{"@type":"Organization",name:"Manish Tea Traders",logo:{"@type":"ImageObject",url:"https://teatraders.info/logo.png"}}}}),o.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs(fe,{to:"/blog",className:"flex items-center text-tea-600 mb-8 hover:underline text-sm font-medium",children:[o.jsx(g3,{className:"h-4 w-4 mr-2"})," Back to Blog"]}),o.jsx("figure",{className:"mb-8",children:o.jsx("img",{src:n.imageUrl,srcSet:`
                                    ${n.imageUrl.replace("&w=1200","&w=600")} 600w,
                                    ${n.imageUrl.replace("&w=1200","&w=1200")} 1200w
                                `,sizes:"(max-width: 768px) 100vw, 800px",alt:n.title,className:"w-full h-64 md:h-[400px] object-cover rounded-2xl shadow-lg",width:"800",height:"400"})}),o.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight",children:n.title}),o.jsxs("div",{className:"flex items-center text-gray-500 text-sm mb-8 space-x-6 border-b border-gray-100 pb-6",children:[o.jsxs("div",{className:"flex items-center text-gray-600 font-medium",children:[o.jsx(A3,{className:"h-4 w-4 mr-2 text-tea-500"}),n.date]}),o.jsxs("div",{className:"flex items-center text-gray-600 font-medium",children:[o.jsx(YA,{className:"h-4 w-4 mr-2 text-tea-500"}),n.author]})]}),o.jsx("article",{className:"prose prose-lg prose-tea max-w-none text-gray-800 leading-normal",dangerouslySetInnerHTML:{__html:n.content}}),o.jsxs("div",{className:"mt-16 p-8 bg-tea-50 rounded-2xl border border-tea-100 text-center",children:[o.jsx("h3",{className:"font-serif font-bold text-2xl text-tea-900 mb-3",children:"Interested in Wholesale Tea?"}),o.jsx("p",{className:"text-gray-700 mb-6 max-w-lg mx-auto",children:"We supply premium quality tea directly from Siliguri. Get a custom quote for your business today."}),o.jsx("a",{href:"/contact-us",className:"inline-block bg-tea-600 text-white px-8 py-3 rounded-full font-bold hover:bg-tea-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",children:"Contact Sales Team"})]})]})]})}),o.jsx(Dt,{}),o.jsx(Ea,{})]}):o.jsx(hg,{to:"/blog",replace:!0})},AM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-32 pb-20 px-4 text-center",children:[o.jsx(Rt,{title:"Page Not Found | Manish Tea Traders",description:"The page you are looking for does not exist. Return to our homepage to browse premium wholesale teas.",noindex:!0,schema:{"@context":"https://schema.org","@type":"WebPage",name:"404 Not Found"}}),o.jsxs("div",{className:"max-w-2xl mx-auto",children:[o.jsx("div",{className:"bg-tea-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce",children:o.jsx(Bw,{className:"h-10 w-10 text-tea-600"})}),o.jsx("h1",{className:"text-4xl md:text-6xl font-serif font-bold text-tea-900 mb-6",children:"404: Page Not Found"}),o.jsx("p",{className:"text-xl text-gray-600 mb-10 leading-relaxed",children:"Oops! It seems the tea you are looking for has been sold out... or never existed. Let's get you back to the fresh stock."}),o.jsxs(fe,{to:"/",className:"inline-flex items-center gap-2 bg-tea-600 hover:bg-tea-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1",children:[o.jsx(aA,{className:"h-5 w-5"}),"Back to Home"]})]})]}),o.jsx(Dt,{})]}),MM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:[o.jsx(Rt,{title:"Privacy Policy | Manish Tea Traders",description:"Privacy Policy for Manish Tea Traders. How we comply with Indian laws and protect your data.",canonicalUrl:"https://teatraders.info/privacy-policy/"}),o.jsxs("div",{className:"max-w-3xl mx-auto prose prose-tea",children:[o.jsx("h1",{children:"Privacy Policy"}),o.jsx("p",{children:"Last Updated: December 28, 2024"}),o.jsx("h2",{children:"1. Introduction"}),o.jsx("p",{children:'Manish Tea Traders ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or order wholesale tea from us.'}),o.jsx("h2",{children:"2. Information We Collect"}),o.jsx("p",{children:"We collect information necessary to process your wholesale orders and improve our service, including:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Name and Business Name"}),o.jsx("li",{children:"Contact Information (Phone Number, Email Address)"}),o.jsx("li",{children:"Shipping and Billing Address"}),o.jsx("li",{children:"GST Number (for tax invoicing)"})]}),o.jsx("h2",{children:"3. How We Use Your Information"}),o.jsx("p",{children:"We use your data to:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Process and deliver your tea orders."}),o.jsx("li",{children:"Generate GST-compliant invoices."}),o.jsx("li",{children:"Communicate with you regarding order status via WhatsApp or Phone."}),o.jsx("li",{children:"Send periodic updates about new tea harvest rates (only if you opt-in)."})]}),o.jsx("h2",{children:"4. Data Sharing"}),o.jsx("p",{children:"We do not sell your personal data. We share data only with:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Logistics Partners (e.g., VRL, Safexpress) for delivery purposes."}),o.jsx("li",{children:"Legal authorities if required by Indian Law."})]}),o.jsx("h2",{children:"5. Contact Us"}),o.jsx("p",{children:"If you have questions about this policy, contact us at +91 70019 58588 or visit our office in Siliguri."})]})]}),o.jsx(Dt,{})]}),EM=()=>o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsxs("main",{className:"flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:[o.jsx(Rt,{title:"Terms of Service | Manish Tea Traders",description:"Terms of Service for wholesale purchases from Manish Tea Traders, Siliguri.",canonicalUrl:"https://teatraders.info/terms-of-service/"}),o.jsxs("div",{className:"max-w-3xl mx-auto prose prose-tea",children:[o.jsx("h1",{children:"Terms of Service"}),o.jsx("p",{children:"Last Updated: December 28, 2024"}),o.jsx("h2",{children:"1. Wholesale Orders"}),o.jsx("p",{children:"Manish Tea Traders primarily deals in B2B wholesale supply. The minimum order quantity (MOQ) typically applies per our current catalog listings (usually 30kg per grade)."}),o.jsx("h2",{children:"2. Pricing and Payment"}),o.jsx("p",{children:"All prices quoted are ex-siliguri warehouse unless stated otherwise. Prices are subject to market fluctuations based on tea auction rates. Payment terms must be agreed upon prior to dispatch. We accept RTGS/NEFT and UPI."}),o.jsx("h2",{children:"3. Shipping and Delivery"}),o.jsx("p",{children:"We ship via standard transport carriers (Road/Rail). Transit times are estimates. We are not liable for delays caused by the transporter or force majeure events. Goods travel at buyer's risk unless insured."}),o.jsx("h2",{children:"4. Returns and Quality Claims"}),o.jsx("p",{children:"Tea is a perishable agricultural commodity. We recommend requesting samples before placing bulk orders. Quality claims must be reported within 24 hours of receipt of goods with photographic evidence."}),o.jsx("h2",{children:"5. Jurisdiction"}),o.jsx("p",{children:"All disputes are subject to the exclusive jurisdiction of the courts in Siliguri, West Bengal."})]})]}),o.jsx(Dt,{})]}),DM=[{text:"Great quality tea at reasonable price. One of the best wholesalers in Siliguri.",author:"Ramesh K.",role:"Retailer",rating:5},{text:"Fresh stock and timely delivery. Highly recommended for retailers. I have been buying from them for 2 years.",author:"Amit Roy",role:"Shop Owner",rating:5},{text:"Excellent blends. Perfect strength and colour. My hotel customers love the tea.",author:"Suresh Das",role:"Hotel Owner",rating:5}],Fw=()=>o.jsx("section",{className:"py-20 bg-white border-t border-gray-100",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 sm:text-4xl",children:"What Our Clients Say"}),o.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[o.jsx("span",{className:"text-2xl font-bold text-gray-900",children:"4.8"}),o.jsx("div",{className:"flex text-yellow-400",children:[...Array(5)].map((t,n)=>o.jsx(yc,{className:"h-5 w-5 fill-current"},n))}),o.jsx("span",{className:"text-gray-500 text-sm",children:"(Google Reviews)"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:DM.map((t,n)=>o.jsxs("div",{className:"bg-tea-50 p-8 rounded-2xl relative",children:[o.jsx(SA,{className:"h-10 w-10 text-tea-200 absolute top-4 right-4"}),o.jsx("div",{className:"flex text-yellow-400 mb-4",children:[...Array(t.rating)].map((s,r)=>o.jsx(yc,{className:"h-4 w-4 fill-current"},r))}),o.jsxs("p",{className:"text-gray-700 mb-6 italic leading-relaxed",children:['"',t.text,'"']}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"h-10 w-10 rounded-full bg-tea-200 flex items-center justify-center font-bold text-tea-700",children:t.author[0]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-gray-900",children:t.author}),o.jsx("p",{className:"text-xs text-gray-500 uppercase",children:t.role})]})]})]},n))}),o.jsx("div",{className:"mt-10 text-center",children:o.jsxs("a",{href:"https://share.google/RmPDu73CPzrNemGUs",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-tea-600 font-semibold hover:text-tea-700 transition-colors",children:["Read all reviews on Google",o.jsx(Ew,{className:"w-4 h-4"})]})})]})}),RM=Object.freeze(Object.defineProperty({__proto__:null,default:Fw},Symbol.toStringTag,{value:"Module"})),BM=()=>{const t="https://forms.gle/gpZAjNoz8QAriJMe8";return o.jsxs("div",{className:"min-h-screen flex flex-col font-sans",children:[o.jsx(Et,{}),o.jsx(Rt,{title:"Request Free Tea Samples | Wholesale Tea Supplier Siliguri | Manish Tea Traders",description:"Experience premium Assam & Darjeeling tea quality before bulk ordering. Trusted by tea traders. Request free samples from Siliguri's leading tea wholesaler.",canonicalUrl:"https://teatraders.info/request-free-tea-samples/"}),o.jsxs("main",{className:"flex-grow bg-white",children:[o.jsxs("section",{className:"bg-tea-900 text-white py-20 lg:py-28 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-black/40 z-10"}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563822249509-cab272d568c8?q=80&w=1600')] bg-cover bg-center opacity-40"}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center",children:[o.jsxs("div",{className:"flex justify-center gap-4 mb-8 text-sm font-semibold tracking-wider text-yellow-300",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(dn,{className:"w-4 h-4"})," Free Samples"]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(dn,{className:"w-4 h-4"})," No Minimum Order"]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(dn,{className:"w-4 h-4"})," Export Quality"]})]}),o.jsxs("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight",children:["Request Free Tea Samples from",o.jsx("br",{}),o.jsx("span",{className:"text-yellow-400",children:"Siliguri's Leading Tea Wholesaler"})]}),o.jsx("p",{className:"text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed",children:"Experience premium Assam and Darjeeling tea quality before bulk ordering. Trusted by tea traders, retailers, and private label brands across India."}),o.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:o.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-yellow-500 text-tea-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]",children:[o.jsx(xf,{className:"w-6 h-6"}),"Request Free Samples"]})}),o.jsxs("div",{className:"mt-12 flex flex-wrap justify-center gap-8 text-gray-300 text-sm",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(x3,{className:"w-5 h-5 text-yellow-400"}),o.jsx("span",{children:"20+ Years in Business"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx($A,{className:"w-5 h-5 text-yellow-400"}),o.jsx("span",{children:"500+ Satisfied Wholesalers"})]})]})]})]}),o.jsx("section",{className:"py-16 bg-white",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg leading-relaxed text-gray-700",children:[o.jsxs("p",{className:"mb-6",children:["At ",o.jsx("strong",{children:"Manish Tea Traders"}),", we understand that seeing is believing—and in the tea business, ",o.jsx("em",{children:"tasting"})," is everything. Before you commit to a bulk order, explore the premium range of our ",o.jsx("strong",{children:"tea wholesale near me"})," collection."]}),o.jsxs("p",{className:"mb-6",children:["Based in the heart of the ",o.jsx("strong",{children:"Siliguri tea wholesale market"}),', we source directly from the finest gardens in Assam and Dooars. Whether you are a retailer looking for "Garden Fresh" quality or a ',o.jsx("strong",{children:"tea bag manufacturer"})," seeking consistent dust grades, our samples will prove why we are the preferred ",o.jsx("strong",{children:"tea suppliers"})," for businesses across India."]})]})}),o.jsx("section",{className:"py-16 bg-tea-50",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 text-center mb-12",children:"Why Choose Our Samples?"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[{icon:Ow,title:"Premium Quality Assurance",desc:"Authentic Assam & Darjeeling tea tested for export-grade quality standards."},{icon:io,title:"Wide Variety",desc:"From Premium CTC Leaf to Red Dust and Hotel Special blends."},{icon:Aw,title:"Competitive Pricing",desc:"Get the best rates directly from the Siliguri tea wholesale market."},{icon:C3,title:"Customization",desc:"Tailored blends and Private Label tea packaging solutions available."}].map((n,s)=>o.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-tea-100",children:[o.jsx("div",{className:"w-12 h-12 bg-tea-100 rounded-lg flex items-center justify-center text-tea-600 mb-4",children:o.jsx(n.icon,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:n.title}),o.jsx("p",{className:"text-gray-600 text-sm",children:n.desc})]},s))})]})}),o.jsx("section",{className:"py-16",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 text-center mb-4",children:"Our Tea Products"}),o.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Select the samples you need for your business"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:["Assam Tea Varieties","Darjeeling Tea Collection","Premium CTC Tea","Bopsm blend","Hotel Special Dust","Premium Tea Bags","Green & Specialty Teas","Custom Blends"].map((n,s)=>o.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 text-center hover:border-tea-500 transition-colors group",children:[o.jsx(Ds,{className:"w-8 h-8 mx-auto text-tea-400 mb-4 group-hover:text-tea-600"}),o.jsx("h3",{className:"font-bold text-gray-900 mb-4",children:n}),o.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"text-sm font-semibold text-tea-600 hover:text-tea-800 underline decoration-2 underline-offset-4",children:"Request Sample"})]},s))})]})}),o.jsx("section",{className:"py-16 bg-tea-900 text-white",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-serif font-bold mb-6",children:"Who We Serve"}),o.jsx("p",{className:"text-tea-100 mb-6",children:"We are the trusted backend partner for businesses of all sizes."}),o.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:["Tea Wholesalers in Siliguri","Tea Traders & Retailers","Export Tea Businesses","Tea Bag Manufacturers","Private Label Packaging","Wholesale Tea Dealers","Chai Patti Distributors","Hotel & Restaurant Suppliers"].map((n,s)=>o.jsxs("li",{className:"flex items-center gap-2 text-tea-200",children:[o.jsx(dn,{className:"w-4 h-4 text-yellow-400 flex-shrink-0"}),n]},s))})]}),o.jsx("div",{className:"relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200",alt:"Tea Warehouse Siliguri",className:"absolute inset-0 w-full h-full object-cover"})})]})})}),o.jsx("section",{className:"py-16 bg-white",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mb-12",children:"Sample Request Process"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 relative",children:[o.jsx("div",{className:"hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10 bg-tea-100"}),[{step:"01",title:"Fill the Form",desc:"Complete our simple sample request form with your business details."},{step:"02",title:"Quality Selection",desc:"Our team selects the exact grades matching your market requirements."},{step:"03",title:"Free Delivery",desc:"Receive samples at your doorstep across India via courier."}].map((n,s)=>o.jsxs("div",{className:"bg-white p-6",children:[o.jsx("div",{className:"w-16 h-16 bg-tea-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10",children:n.step}),o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:n.title}),o.jsx("p",{className:"text-gray-600",children:n.desc})]},s))]}),o.jsx("div",{className:"mt-10",children:o.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-tea-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors",children:["Start Process ",o.jsx(xf,{className:"w-5 h-5"})]})})]})}),o.jsx("section",{className:"py-16 bg-stone-50",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mb-6",children:"About Our Tea Business"}),o.jsxs("div",{className:"prose prose-lg mx-auto text-gray-700",children:[o.jsxs("p",{children:["Established in ",o.jsx("strong",{children:kt.established}),", Manish Tea Traders has grown from a local shop to a powerhouse in the ",o.jsx("strong",{children:"Siliguri tea wholesale market"}),". We are more than just traders; we are curators of the finest Assam and Dooars teas."]}),o.jsxs("p",{children:["Our strategic location in Siliguri—the gateway to the North East—allows us to source fresh tea directly from the gardens, bypassing multiple middlemen. This ensures that our clients receive ",o.jsx("strong",{children:"factory-fresh quality"})," at unbeatable prices."]}),o.jsxs("p",{children:["We are proud to be one of the top ",o.jsx("strong",{children:"tea manufacturers in Siliguri"})," offering end-to-end solutions, including private labeling and export-grade sourcing."]})]})]})}),o.jsx("section",{className:"py-16",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"bg-tea-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mb-6",children:"Service Areas & Delivery"}),o.jsxs("ul",{className:"space-y-4",children:[o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx(xg,{className:"w-6 h-6 text-tea-600 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("strong",{className:"block text-gray-900",children:"Primary Hub"}),o.jsx("span",{className:"text-gray-600",children:"Siliguri, West Bengal (Headquarters)"})]})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx(Sg,{className:"w-6 h-6 text-tea-600 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("strong",{className:"block text-gray-900",children:"Pan-India Delivery"}),o.jsx("span",{className:"text-gray-600",children:"Bihar, UP, Rajasthan, Gujarat, Maharashtra, Punjab, and more."})]})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx(eA,{className:"w-6 h-6 text-tea-600 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("strong",{className:"block text-gray-900",children:"International Export"}),o.jsx("span",{className:"text-gray-600",children:"serving clients globally with export-standard tea."})]})]})]})]}),o.jsx("div",{className:"flex-1 w-full h-64 md:h-auto bg-gray-200 rounded-xl overflow-hidden relative",children:o.jsx("iframe",{src:et.mapEmbedUrl,width:"100%",height:"100%",style:{border:0,minHeight:"300px"},allowFullScreen:!0,loading:"lazy",title:"Service Area Map"})})]})})}),o.jsx("section",{className:"py-16 bg-white",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 text-center mb-12",children:"Pricing & Packaging Options"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"border border-gray-200 p-8 rounded-xl text-center hover:border-tea-500 transition-colors",children:[o.jsx("h3",{className:"text-xl font-bold text-tea-800 mb-4",children:"Bulk Wholesale"}),o.jsx("p",{className:"text-3xl font-bold text-gray-900 mb-2",children:"₹120 - ₹250"}),o.jsx("span",{className:"text-sm text-gray-500",children:"per kg (variable)"}),o.jsxs("ul",{className:"mt-6 space-y-2 text-gray-600 text-sm mb-6",children:[o.jsx("li",{children:"26kg - 35kg Jute Bags"}),o.jsx("li",{children:"Economy to Premium Grades"}),o.jsx("li",{children:"MOQ: 1 Lot"})]}),o.jsx("span",{className:"inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold",children:"Best for Re-sellers"})]}),o.jsxs("div",{className:"border-2 border-yellow-400 p-8 rounded-xl text-center relative transform md:-translate-y-4 bg-white shadow-xl",children:[o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-tea-900 px-4 py-1 rounded-full text-xs font-bold tracking-wide",children:"MOST POPULAR"}),o.jsx("h3",{className:"text-xl font-bold text-tea-800 mb-4",children:"Private Label"}),o.jsx("p",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Custom"}),o.jsx("span",{className:"text-sm text-gray-500",children:"pricing based on blend"}),o.jsxs("ul",{className:"mt-6 space-y-2 text-gray-600 text-sm mb-6",children:[o.jsx("li",{children:"Your Brand Pouch (250g/1kg)"}),o.jsx("li",{children:"Custom Blend Creation"}),o.jsx("li",{children:"MOQ: 500 kg"})]}),o.jsx("span",{className:"inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold",children:"Best for Brands"})]}),o.jsxs("div",{className:"border border-gray-200 p-8 rounded-xl text-center hover:border-tea-500 transition-colors",children:[o.jsx("h3",{className:"text-xl font-bold text-tea-800 mb-4",children:"Premium Export"}),o.jsx("p",{className:"text-3xl font-bold text-gray-900 mb-2",children:"₹400+"}),o.jsx("span",{className:"text-sm text-gray-500",children:"per kg"}),o.jsxs("ul",{className:"mt-6 space-y-2 text-gray-600 text-sm mb-6",children:[o.jsx("li",{children:"Orthodox & High-Grown"}),o.jsx("li",{children:"Vacuum Packed"}),o.jsx("li",{children:"MOQ: 50 kg"})]}),o.jsx("span",{className:"inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold",children:"Best for Exporters"})]})]})]})}),o.jsx("section",{className:"py-16 bg-gray-50",children:o.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("div",{className:"text-center mb-12",children:o.jsx("h2",{className:"text-3xl font-serif font-bold text-tea-900 mb-4",children:"Frequently Asked Questions"})}),o.jsx("div",{className:"space-y-4",children:[{q:"How do I request tea samples?",a:"Simply click the 'Request Free Samples' button and fill out the form. We will contact you to confirm the details."},{q:"Is there any charge for samples?",a:"The tea samples are free. We may charge a nominal courier fee for new clients, which is refundable on your first order."},{q:"What information do I need to provide?",a:"We need your business name, full address with PIN code, and your rough monthly requirement to send the right grades."},{q:"How long does sample delivery take?",a:"Once confirmed, samples are dispatched within 24 hours. Delivery takes 3-7 days depending on your location."},{q:"Do you offer private label tea packaging?",a:"Yes! We specialize in private labeling. We can pack tea in your branded pouches."},{q:"What areas do you deliver to?",a:"We deliver to all states in India. We also have export licenses for international shipment."},{q:"What's your minimum order quantity?",a:"For samples: No minimum. For bulk orders: Usually 1 Lot for loose tea."}].map((n,s)=>o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[o.jsxs("h3",{className:"font-bold text-gray-900 mb-2 flex gap-3 text-lg",children:[o.jsx(V3,{className:"w-5 h-5 text-yellow-500 flex-shrink-0 mt-1"}),n.q]}),o.jsx("p",{className:"text-gray-600 pl-8",children:n.a})]},s))})]})}),o.jsx(Fw,{})]}),o.jsx(Dt,{}),o.jsx(Ea,{}),o.jsx(Fi,{})]})},Tg=x.createContext({});function kg(t){const n=x.useRef(null);return n.current===null&&(n.current=t()),n.current}const Iw=typeof window<"u",Gw=Iw?x.useLayoutEffect:x.useEffect,qc=x.createContext(null);function Cg(t,n){t.indexOf(n)===-1&&t.push(n)}function jg(t,n){const s=t.indexOf(n);s>-1&&t.splice(s,1)}const qa=(t,n,s)=>s>n?n:s<t?t:s;let Ng=()=>{};const pn={},Ww=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Kw(t){return typeof t=="object"&&t!==null}const Yw=t=>/^0[^.\s]+$/u.test(t);function Ag(t){let n;return()=>(n===void 0&&(n=t()),n)}const pa=t=>t,OM=(t,n)=>s=>n(t(s)),xo=(...t)=>t.reduce(OM),ro=(t,n,s)=>{const r=n-t;return r===0?1:(s-t)/r};class Mg{constructor(){this.subscriptions=[]}add(n){return Cg(this.subscriptions,n),()=>jg(this.subscriptions,n)}notify(n,s,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,s,r);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fn=t=>t*1e3,ma=t=>t/1e3;function Qw(t,n){return n?t*(1e3/n):0}const $w=(t,n,s)=>(((1-3*s+3*n)*t+(3*s-6*n))*t+3*n)*t,PM=1e-7,LM=12;function _M(t,n,s,r,c){let u,d,f=0;do d=n+(s-n)/2,u=$w(d,r,c)-t,u>0?s=d:n=d;while(Math.abs(u)>PM&&++f<LM);return d}function vo(t,n,s,r){if(t===n&&s===r)return pa;const c=u=>_M(u,0,1,t,s);return u=>u===0||u===1?u:$w(c(u),n,r)}const Xw=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,Jw=t=>n=>1-t(1-n),Zw=vo(.33,1.53,.69,.99),Eg=Jw(Zw),e1=Xw(Eg),t1=t=>(t*=2)<1?.5*Eg(t):.5*(2-Math.pow(2,-10*(t-1))),Dg=t=>1-Math.sin(Math.acos(t)),a1=Jw(Dg),n1=Xw(Dg),zM=vo(.42,0,1,1),qM=vo(0,0,.58,1),s1=vo(.42,0,.58,1),VM=t=>Array.isArray(t)&&typeof t[0]!="number",i1=t=>Array.isArray(t)&&typeof t[0]=="number",HM={linear:pa,easeIn:zM,easeInOut:s1,easeOut:qM,circIn:Dg,circInOut:n1,circOut:a1,backIn:Eg,backInOut:e1,backOut:Zw,anticipate:t1},UM=t=>typeof t=="string",Jb=t=>{if(i1(t)){Ng(t.length===4);const[n,s,r,c]=t;return vo(n,s,r,c)}else if(UM(t))return HM[t];return t},Gl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function FM(t,n){let s=new Set,r=new Set,c=!1,u=!1;const d=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function g(y){d.has(y)&&(p.schedule(y),t()),y(f)}const p={schedule:(y,b=!1,w=!1)=>{const C=w&&c?s:r;return b&&d.add(y),C.has(y)||C.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(f=y,c){u=!0;return}c=!0,[s,r]=[r,s],s.forEach(g),s.clear(),c=!1,u&&(u=!1,p.process(y))}};return p}const IM=40;function r1(t,n){let s=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>s=!0,d=Gl.reduce((j,q)=>(j[q]=FM(u),j),{}),{setup:f,read:g,resolveKeyframes:p,preUpdate:y,update:b,preRender:w,render:S,postRender:C}=d,T=()=>{const j=pn.useManualTiming?c.timestamp:performance.now();s=!1,pn.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(j-c.timestamp,IM),1)),c.timestamp=j,c.isProcessing=!0,f.process(c),g.process(c),p.process(c),y.process(c),b.process(c),w.process(c),S.process(c),C.process(c),c.isProcessing=!1,s&&n&&(r=!1,t(T))},N=()=>{s=!0,r=!0,c.isProcessing||t(T)};return{schedule:Gl.reduce((j,q)=>{const P=d[q];return j[q]=(G,_=!1,H=!1)=>(s||N(),P.schedule(G,_,H)),j},{}),cancel:j=>{for(let q=0;q<Gl.length;q++)d[Gl[q]].cancel(j)},state:c,steps:d}}const{schedule:We,cancel:Xn,state:Tt,steps:Bh}=r1(typeof requestAnimationFrame<"u"?requestAnimationFrame:pa,!0);let cc;function GM(){cc=void 0}const Ot={now:()=>(cc===void 0&&Ot.set(Tt.isProcessing||pn.useManualTiming?Tt.timestamp:performance.now()),cc),set:t=>{cc=t,queueMicrotask(GM)}},o1=t=>n=>typeof n=="string"&&n.startsWith(t),l1=o1("--"),WM=o1("var(--"),Rg=t=>WM(t)?KM.test(t.split("/*")[0].trim()):!1,KM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Zb(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ii={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},oo={...Ii,transform:t=>qa(0,1,t)},Wl={...Ii,default:1},eo=t=>Math.round(t*1e5)/1e5,Bg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function YM(t){return t==null}const QM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Og=(t,n)=>s=>!!(typeof s=="string"&&QM.test(s)&&s.startsWith(t)||n&&!YM(s)&&Object.prototype.hasOwnProperty.call(s,n)),c1=(t,n,s)=>r=>{if(typeof r!="string")return r;const[c,u,d,f]=r.match(Bg);return{[t]:parseFloat(c),[n]:parseFloat(u),[s]:parseFloat(d),alpha:f!==void 0?parseFloat(f):1}},$M=t=>qa(0,255,t),Oh={...Ii,transform:t=>Math.round($M(t))},Ns={test:Og("rgb","red"),parse:c1("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:r=1})=>"rgba("+Oh.transform(t)+", "+Oh.transform(n)+", "+Oh.transform(s)+", "+eo(oo.transform(r))+")"};function XM(t){let n="",s="",r="",c="";return t.length>5?(n=t.substring(1,3),s=t.substring(3,5),r=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),s=t.substring(2,3),r=t.substring(3,4),c=t.substring(4,5),n+=n,s+=s,r+=r,c+=c),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const Tf={test:Og("#"),parse:XM,transform:Ns.transform},wo=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Wn=wo("deg"),_a=wo("%"),ie=wo("px"),JM=wo("vh"),ZM=wo("vw"),ex={..._a,parse:t=>_a.parse(t)/100,transform:t=>_a.transform(t*100)},Ai={test:Og("hsl","hue"),parse:c1("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:r=1})=>"hsla("+Math.round(t)+", "+_a.transform(eo(n))+", "+_a.transform(eo(s))+", "+eo(oo.transform(r))+")"},ct={test:t=>Ns.test(t)||Tf.test(t)||Ai.test(t),parse:t=>Ns.test(t)?Ns.parse(t):Ai.test(t)?Ai.parse(t):Tf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ns.transform(t):Ai.transform(t),getAnimatableNone:t=>{const n=ct.parse(t);return n.alpha=0,ct.transform(n)}},e4=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function t4(t){var n,s;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Bg))==null?void 0:n.length)||0)+(((s=t.match(e4))==null?void 0:s.length)||0)>0}const u1="number",d1="color",a4="var",n4="var(",tx="${}",s4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function lo(t){const n=t.toString(),s=[],r={color:[],number:[],var:[]},c=[];let u=0;const f=n.replace(s4,g=>(ct.test(g)?(r.color.push(u),c.push(d1),s.push(ct.parse(g))):g.startsWith(n4)?(r.var.push(u),c.push(a4),s.push(g)):(r.number.push(u),c.push(u1),s.push(parseFloat(g))),++u,tx)).split(tx);return{values:s,split:f,indexes:r,types:c}}function h1(t){return lo(t).values}function f1(t){const{split:n,types:s}=lo(t),r=n.length;return c=>{let u="";for(let d=0;d<r;d++)if(u+=n[d],c[d]!==void 0){const f=s[d];f===u1?u+=eo(c[d]):f===d1?u+=ct.transform(c[d]):u+=c[d]}return u}}const i4=t=>typeof t=="number"?0:ct.test(t)?ct.getAnimatableNone(t):t;function r4(t){const n=h1(t);return f1(t)(n.map(i4))}const Jn={test:t4,parse:h1,createTransformer:f1,getAnimatableNone:r4};function Ph(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function o4({hue:t,saturation:n,lightness:s,alpha:r}){t/=360,n/=100,s/=100;let c=0,u=0,d=0;if(!n)c=u=d=s;else{const f=s<.5?s*(1+n):s+n-s*n,g=2*s-f;c=Ph(g,f,t+1/3),u=Ph(g,f,t),d=Ph(g,f,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:r}}function bc(t,n){return s=>s>0?n:t}const $e=(t,n,s)=>t+(n-t)*s,Lh=(t,n,s)=>{const r=t*t,c=s*(n*n-r)+r;return c<0?0:Math.sqrt(c)},l4=[Tf,Ns,Ai],c4=t=>l4.find(n=>n.test(t));function ax(t){const n=c4(t);if(!n)return!1;let s=n.parse(t);return n===Ai&&(s=o4(s)),s}const nx=(t,n)=>{const s=ax(t),r=ax(n);if(!s||!r)return bc(t,n);const c={...s};return u=>(c.red=Lh(s.red,r.red,u),c.green=Lh(s.green,r.green,u),c.blue=Lh(s.blue,r.blue,u),c.alpha=$e(s.alpha,r.alpha,u),Ns.transform(c))},kf=new Set(["none","hidden"]);function u4(t,n){return kf.has(t)?s=>s<=0?t:n:s=>s>=1?n:t}function d4(t,n){return s=>$e(t,n,s)}function Pg(t){return typeof t=="number"?d4:typeof t=="string"?Rg(t)?bc:ct.test(t)?nx:g4:Array.isArray(t)?g1:typeof t=="object"?ct.test(t)?nx:h4:bc}function g1(t,n){const s=[...t],r=s.length,c=t.map((u,d)=>Pg(u)(u,n[d]));return u=>{for(let d=0;d<r;d++)s[d]=c[d](u);return s}}function h4(t,n){const s={...t,...n},r={};for(const c in s)t[c]!==void 0&&n[c]!==void 0&&(r[c]=Pg(t[c])(t[c],n[c]));return c=>{for(const u in r)s[u]=r[u](c);return s}}function f4(t,n){const s=[],r={color:0,var:0,number:0};for(let c=0;c<n.values.length;c++){const u=n.types[c],d=t.indexes[u][r[u]],f=t.values[d]??0;s[c]=f,r[u]++}return s}const g4=(t,n)=>{const s=Jn.createTransformer(n),r=lo(t),c=lo(n);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?kf.has(t)&&!c.values.length||kf.has(n)&&!r.values.length?u4(t,n):xo(g1(f4(r,c),c.values),s):bc(t,n)};function m1(t,n,s){return typeof t=="number"&&typeof n=="number"&&typeof s=="number"?$e(t,n,s):Pg(t)(t,n)}const m4=t=>{const n=({timestamp:s})=>t(s);return{start:(s=!0)=>We.update(n,s),stop:()=>Xn(n),now:()=>Tt.isProcessing?Tt.timestamp:Ot.now()}},p1=(t,n,s=10)=>{let r="";const c=Math.max(Math.round(n/s),2);for(let u=0;u<c;u++)r+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},xc=2e4;function Lg(t){let n=0;const s=50;let r=t.next(n);for(;!r.done&&n<xc;)n+=s,r=t.next(n);return n>=xc?1/0:n}function p4(t,n=100,s){const r=s({...t,keyframes:[0,n]}),c=Math.min(Lg(r),xc);return{type:"keyframes",ease:u=>r.next(c*u).value/n,duration:ma(c)}}const y4=5;function y1(t,n,s){const r=Math.max(n-y4,0);return Qw(s-t(r),n-r)}const Ze={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_h=.001;function b4({duration:t=Ze.duration,bounce:n=Ze.bounce,velocity:s=Ze.velocity,mass:r=Ze.mass}){let c,u,d=1-n;d=qa(Ze.minDamping,Ze.maxDamping,d),t=qa(Ze.minDuration,Ze.maxDuration,ma(t)),d<1?(c=p=>{const y=p*d,b=y*t,w=y-s,S=Cf(p,d),C=Math.exp(-b);return _h-w/S*C},u=p=>{const b=p*d*t,w=b*s+s,S=Math.pow(d,2)*Math.pow(p,2)*t,C=Math.exp(-b),T=Cf(Math.pow(p,2),d);return(-c(p)+_h>0?-1:1)*((w-S)*C)/T}):(c=p=>{const y=Math.exp(-p*t),b=(p-s)*t+1;return-_h+y*b},u=p=>{const y=Math.exp(-p*t),b=(s-p)*(t*t);return y*b});const f=5/t,g=v4(c,u,f);if(t=fn(t),isNaN(g))return{stiffness:Ze.stiffness,damping:Ze.damping,duration:t};{const p=Math.pow(g,2)*r;return{stiffness:p,damping:d*2*Math.sqrt(r*p),duration:t}}}const x4=12;function v4(t,n,s){let r=s;for(let c=1;c<x4;c++)r=r-t(r)/n(r);return r}function Cf(t,n){return t*Math.sqrt(1-n*n)}const w4=["duration","bounce"],S4=["stiffness","damping","mass"];function sx(t,n){return n.some(s=>t[s]!==void 0)}function T4(t){let n={velocity:Ze.velocity,stiffness:Ze.stiffness,damping:Ze.damping,mass:Ze.mass,isResolvedFromDuration:!1,...t};if(!sx(t,S4)&&sx(t,w4))if(t.visualDuration){const s=t.visualDuration,r=2*Math.PI/(s*1.2),c=r*r,u=2*qa(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ze.mass,stiffness:c,damping:u}}else{const s=b4(t);n={...n,...s,mass:Ze.mass},n.isResolvedFromDuration=!0}return n}function vc(t=Ze.visualDuration,n=Ze.bounce){const s=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:r,restDelta:c}=s;const u=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],f={done:!1,value:u},{stiffness:g,damping:p,mass:y,duration:b,velocity:w,isResolvedFromDuration:S}=T4({...s,velocity:-ma(s.velocity||0)}),C=w||0,T=p/(2*Math.sqrt(g*y)),N=d-u,M=ma(Math.sqrt(g/y)),E=Math.abs(N)<5;r||(r=E?Ze.restSpeed.granular:Ze.restSpeed.default),c||(c=E?Ze.restDelta.granular:Ze.restDelta.default);let j;if(T<1){const P=Cf(M,T);j=G=>{const _=Math.exp(-T*M*G);return d-_*((C+T*M*N)/P*Math.sin(P*G)+N*Math.cos(P*G))}}else if(T===1)j=P=>d-Math.exp(-M*P)*(N+(C+M*N)*P);else{const P=M*Math.sqrt(T*T-1);j=G=>{const _=Math.exp(-T*M*G),H=Math.min(P*G,300);return d-_*((C+T*M*N)*Math.sinh(H)+P*N*Math.cosh(H))/P}}const q={calculatedDuration:S&&b||null,next:P=>{const G=j(P);if(S)f.done=P>=b;else{let _=P===0?C:0;T<1&&(_=P===0?fn(C):y1(j,P,G));const H=Math.abs(_)<=r,J=Math.abs(d-G)<=c;f.done=H&&J}return f.value=f.done?d:G,f},toString:()=>{const P=Math.min(Lg(q),xc),G=p1(_=>q.next(P*_).value,P,30);return P+"ms "+G},toTransition:()=>{}};return q}vc.applyToOptions=t=>{const n=p4(t,100,vc);return t.ease=n.ease,t.duration=fn(n.duration),t.type="keyframes",t};function jf({keyframes:t,velocity:n=0,power:s=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:f,max:g,restDelta:p=.5,restSpeed:y}){const b=t[0],w={done:!1,value:b},S=H=>f!==void 0&&H<f||g!==void 0&&H>g,C=H=>f===void 0?g:g===void 0||Math.abs(f-H)<Math.abs(g-H)?f:g;let T=s*n;const N=b+T,M=d===void 0?N:d(N);M!==N&&(T=M-b);const E=H=>-T*Math.exp(-H/r),j=H=>M+E(H),q=H=>{const J=E(H),se=j(H);w.done=Math.abs(J)<=p,w.value=w.done?M:se};let P,G;const _=H=>{S(w.value)&&(P=H,G=vc({keyframes:[w.value,C(w.value)],velocity:y1(j,H,w.value),damping:c,stiffness:u,restDelta:p,restSpeed:y}))};return _(0),{calculatedDuration:null,next:H=>{let J=!1;return!G&&P===void 0&&(J=!0,q(H),_(H)),P!==void 0&&H>=P?G.next(H-P):(!J&&q(H),w)}}}function k4(t,n,s){const r=[],c=s||pn.mix||m1,u=t.length-1;for(let d=0;d<u;d++){let f=c(t[d],t[d+1]);if(n){const g=Array.isArray(n)?n[d]||pa:n;f=xo(g,f)}r.push(f)}return r}function C4(t,n,{clamp:s=!0,ease:r,mixer:c}={}){const u=t.length;if(Ng(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const f=k4(n,r,c),g=f.length,p=y=>{if(d&&y<t[0])return n[0];let b=0;if(g>1)for(;b<t.length-2&&!(y<t[b+1]);b++);const w=ro(t[b],t[b+1],y);return f[b](w)};return s?y=>p(qa(t[0],t[u-1],y)):p}function j4(t,n){const s=t[t.length-1];for(let r=1;r<=n;r++){const c=ro(0,n,r);t.push($e(s,1,c))}}function N4(t){const n=[0];return j4(n,t.length-1),n}function A4(t,n){return t.map(s=>s*n)}function M4(t,n){return t.map(()=>n||s1).splice(0,t.length-1)}function to({duration:t=300,keyframes:n,times:s,ease:r="easeInOut"}){const c=VM(r)?r.map(Jb):Jb(r),u={done:!1,value:n[0]},d=A4(s&&s.length===n.length?s:N4(n),t),f=C4(d,n,{ease:Array.isArray(c)?c:M4(n,c)});return{calculatedDuration:t,next:g=>(u.value=f(g),u.done=g>=t,u)}}const E4=t=>t!==null;function _g(t,{repeat:n,repeatType:s="loop"},r,c=1){const u=t.filter(E4),f=c<0||n&&s!=="loop"&&n%2===1?0:u.length-1;return!f||r===void 0?u[f]:r}const D4={decay:jf,inertia:jf,tween:to,keyframes:to,spring:vc};function b1(t){typeof t.type=="string"&&(t.type=D4[t.type])}class zg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,s){return this.finished.then(n,s)}}const R4=t=>t/100;class qg extends zg{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:s}=this.options;s&&s.updatedAt!==Ot.now()&&this.tick(Ot.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;b1(n);const{type:s=to,repeat:r=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:f}=n;const g=s||to;g!==to&&typeof f[0]!="number"&&(this.mixKeyframes=xo(R4,m1(f[0],f[1])),f=[0,100]);const p=g({...n,keyframes:f});u==="mirror"&&(this.mirroredGenerator=g({...n,keyframes:[...f].reverse(),velocity:-d})),p.calculatedDuration===null&&(p.calculatedDuration=Lg(p));const{calculatedDuration:y}=p;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=p}updateTime(n){const s=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(n,s=!1){const{generator:r,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:f,calculatedDuration:g}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:y,repeat:b,repeatType:w,repeatDelay:S,type:C,onUpdate:T,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),s?this.currentTime=n:this.updateTime(n);const M=this.currentTime-p*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let j=this.currentTime,q=r;if(b){const H=Math.min(this.currentTime,c)/f;let J=Math.floor(H),se=H%1;!se&&H>=1&&(se=1),se===1&&J--,J=Math.min(J,b+1),!!(J%2)&&(w==="reverse"?(se=1-se,S&&(se-=S/f)):w==="mirror"&&(q=d)),j=qa(0,1,se)*f}const P=E?{done:!1,value:y[0]}:q.next(j);u&&(P.value=u(P.value));let{done:G}=P;!E&&g!==null&&(G=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const _=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return _&&C!==jf&&(P.value=_g(y,this.options,N,this.speed)),T&&T(P.value),_&&this.finish(),P}then(n,s){return this.finished.then(n,s)}get duration(){return ma(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ma(n)}get time(){return ma(this.currentTime)}set time(n){var s;n=fn(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(Ot.now());const s=this.playbackSpeed!==n;this.playbackSpeed=n,s&&(this.time=ma(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=m4,startTime:s}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ot.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(n=this.options).onComplete)==null||s.call(n)}cancel(){var n,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(n=this.options).onCancel)==null||s.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),n.observe(this)}}function B4(t){for(let n=1;n<t.length;n++)t[n]??(t[n]=t[n-1])}const As=t=>t*180/Math.PI,Nf=t=>{const n=As(Math.atan2(t[1],t[0]));return Af(n)},O4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Nf,rotateZ:Nf,skewX:t=>As(Math.atan(t[1])),skewY:t=>As(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Af=t=>(t=t%360,t<0&&(t+=360),t),ix=Nf,rx=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ox=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),P4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:rx,scaleY:ox,scale:t=>(rx(t)+ox(t))/2,rotateX:t=>Af(As(Math.atan2(t[6],t[5]))),rotateY:t=>Af(As(Math.atan2(-t[2],t[0]))),rotateZ:ix,rotate:ix,skewX:t=>As(Math.atan(t[4])),skewY:t=>As(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Mf(t){return t.includes("scale")?1:0}function Ef(t,n){if(!t||t==="none")return Mf(n);const s=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(s)r=P4,c=s;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=O4,c=f}if(!c)return Mf(n);const u=r[n],d=c[1].split(",").map(_4);return typeof u=="function"?u(d):d[u]}const L4=(t,n)=>{const{transform:s="none"}=getComputedStyle(t);return Ef(s,n)};function _4(t){return parseFloat(t.trim())}const Gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wi=new Set(Gi),lx=t=>t===Ii||t===ie,z4=new Set(["x","y","z"]),q4=Gi.filter(t=>!z4.has(t));function V4(t){const n=[];return q4.forEach(s=>{const r=t.getValue(s);r!==void 0&&(n.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),n}const Qn={width:({x:t},{paddingLeft:n="0",paddingRight:s="0"})=>t.max-t.min-parseFloat(n)-parseFloat(s),height:({y:t},{paddingTop:n="0",paddingBottom:s="0"})=>t.max-t.min-parseFloat(n)-parseFloat(s),top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ef(n,"x"),y:(t,{transform:n})=>Ef(n,"y")};Qn.translateX=Qn.x;Qn.translateY=Qn.y;const Es=new Set;let Df=!1,Rf=!1,Bf=!1;function x1(){if(Rf){const t=Array.from(Es).filter(r=>r.needsMeasurement),n=new Set(t.map(r=>r.element)),s=new Map;n.forEach(r=>{const c=V4(r);c.length&&(s.set(r,c),r.render())}),t.forEach(r=>r.measureInitialState()),n.forEach(r=>{r.render();const c=s.get(r);c&&c.forEach(([u,d])=>{var f;(f=r.getValue(u))==null||f.set(d)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Rf=!1,Df=!1,Es.forEach(t=>t.complete(Bf)),Es.clear()}function v1(){Es.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Rf=!0)})}function H4(){Bf=!0,v1(),x1(),Bf=!1}class Vg{constructor(n,s,r,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=s,this.name=r,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Es.add(this),Df||(Df=!0,We.read(v1),We.resolveKeyframes(x1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:s,element:r,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(r&&s){const f=r.readValue(s,d);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}B4(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Es.delete(this)}cancel(){this.state==="scheduled"&&(Es.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const U4=t=>t.startsWith("--");function F4(t,n,s){U4(n)?t.style.setProperty(n,s):t.style[n]=s}const I4=Ag(()=>window.ScrollTimeline!==void 0),G4={};function W4(t,n){const s=Ag(t);return()=>G4[n]??s()}const w1=W4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xr=([t,n,s,r])=>`cubic-bezier(${t}, ${n}, ${s}, ${r})`,cx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xr([0,.65,.55,1]),circOut:Xr([.55,0,1,.45]),backIn:Xr([.31,.01,.66,-.59]),backOut:Xr([.33,1.53,.69,.99])};function S1(t,n){if(t)return typeof t=="function"?w1()?p1(t,n):"ease-out":i1(t)?Xr(t):Array.isArray(t)?t.map(s=>S1(s,n)||cx.easeOut):cx[t]}function K4(t,n,s,{delay:r=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:f="easeOut",times:g}={},p=void 0){const y={[n]:s};g&&(y.offset=g);const b=S1(f,c);Array.isArray(b)&&(y.easing=b);const w={delay:r,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),t.animate(y,w)}function T1(t){return typeof t=="function"&&"applyToOptions"in t}function Y4({type:t,...n}){return T1(t)&&w1()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class Q4 extends zg{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:s,name:r,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:f,onComplete:g}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,Ng(typeof n.type!="string");const p=Y4(n);this.animation=K4(s,r,c,p,u),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const y=_g(c,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(y):F4(s,r,y),this.animation.cancel()}g==null||g(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,s;(s=(n=this.animation).finish)==null||s.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s;this.isPseudoElement||(s=(n=this.animation).commitStyles)==null||s.call(n)}get duration(){var s,r;const n=((r=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:r.call(s).duration)||0;return ma(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ma(n)}get time(){return ma(Number(this.animation.currentTime)||0)}set time(n){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=fn(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,observe:s}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&I4()?(this.animation.timeline=n,pa):s(this)}}const k1={anticipate:t1,backInOut:e1,circInOut:n1};function $4(t){return t in k1}function X4(t){typeof t.ease=="string"&&$4(t.ease)&&(t.ease=k1[t.ease])}const zh=10;class J4 extends Q4{constructor(n){X4(n),b1(n),super(n),n.startTime!==void 0&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:s,onUpdate:r,onComplete:c,element:u,...d}=this.options;if(!s)return;if(n!==void 0){s.set(n);return}const f=new qg({...d,autoplay:!1}),g=Math.max(zh,Ot.now()-this.startTime),p=qa(0,zh,g-zh);s.setWithVelocity(f.sample(Math.max(0,g-p)).value,f.sample(g).value,p),f.stop()}}const ux=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Jn.test(t)||t==="0")&&!t.startsWith("url("));function Z4(t){const n=t[0];if(t.length===1)return!0;for(let s=0;s<t.length;s++)if(t[s]!==n)return!0}function eE(t,n,s,r){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=ux(c,n),f=ux(u,n);return!d||!f?!1:Z4(t)||(s==="spring"||T1(s))&&r}function Of(t){t.duration=0,t.type="keyframes"}const tE=new Set(["opacity","clipPath","filter","transform"]),aE=Ag(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nE(t){var y;const{motionValue:n,name:s,repeatDelay:r,repeatType:c,damping:u,type:d}=t;if(!(((y=n==null?void 0:n.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:p}=n.owner.getProps();return aE()&&s&&tE.has(s)&&(s!=="transform"||!p)&&!g&&!r&&c!=="mirror"&&u!==0&&d!=="inertia"}const sE=40;class iE extends zg{constructor({autoplay:n=!0,delay:s=0,type:r="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:f,name:g,motionValue:p,element:y,...b}){var C;super(),this.stop=()=>{var T,N;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(N=this.keyframeResolver)==null||N.cancel()},this.createdAt=Ot.now();const w={autoplay:n,delay:s,type:r,repeat:c,repeatDelay:u,repeatType:d,name:g,motionValue:p,element:y,...b},S=(y==null?void 0:y.KeyframeResolver)||Vg;this.keyframeResolver=new S(f,(T,N,M)=>this.onKeyframesResolved(T,N,w,!M),g,p,y),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(n,s,r,c){this.keyframeResolver=void 0;const{name:u,type:d,velocity:f,delay:g,isHandoff:p,onUpdate:y}=r;this.resolvedAt=Ot.now(),eE(n,u,d,f)||((pn.instantAnimations||!g)&&(y==null||y(_g(n,r,s))),n[0]=n[n.length-1],Of(r),r.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>sE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:n},S=!p&&nE(w)?new J4({...w,element:w.motionValue.owner.current}):new qg(w);S.finished.then(()=>this.notifyFinished()).catch(pa),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(n,s){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),H4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}const rE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oE(t){const n=rE.exec(t);if(!n)return[,];const[,s,r,c]=n;return[`--${s??r}`,c]}function C1(t,n,s=1){const[r,c]=oE(t);if(!r)return;const u=window.getComputedStyle(n).getPropertyValue(r);if(u){const d=u.trim();return Ww(d)?parseFloat(d):d}return Rg(c)?C1(c,n,s+1):c}function Hg(t,n){return(t==null?void 0:t[n])??(t==null?void 0:t.default)??t}const lE={type:"spring",stiffness:500,damping:25,restSpeed:10},cE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),uE={type:"keyframes",duration:.8},dE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hE=(t,{keyframes:n})=>n.length>2?uE:Wi.has(t)?t.startsWith("scale")?cE(n[1]):lE:dE;function fE({when:t,delay:n,delayChildren:s,staggerChildren:r,staggerDirection:c,repeat:u,repeatType:d,repeatDelay:f,from:g,elapsed:p,...y}){return!!Object.keys(y).length}const gE=t=>t!==null;function mE(t,{repeat:n,repeatType:s="loop"},r){const c=t.filter(gE),u=n&&s!=="loop"&&n%2===1?0:c.length-1;return c[u]}function j1(t,n,s,r=0,c=1){const u=Array.from(t).sort((p,y)=>p.sortNodePosition(y)).indexOf(n),d=t.size,f=(d-1)*r;return typeof s=="function"?s(u,d):c===1?u*r:f-u*r}const Ug=(t,n,s,r={},c,u)=>d=>{const f=Hg(r,t)||{},g=f.delay||r.delay||0;let{elapsed:p=0}=r;p=p-fn(g);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:n.getVelocity(),...f,delay:-p,onUpdate:w=>{n.set(w),f.onUpdate&&f.onUpdate(w)},onComplete:()=>{d(),f.onComplete&&f.onComplete()},name:t,motionValue:n,element:u?void 0:c};fE(f)||Object.assign(y,hE(t,y)),y.duration&&(y.duration=fn(y.duration)),y.repeatDelay&&(y.repeatDelay=fn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Of(y),y.delay===0&&(b=!0)),(pn.instantAnimations||pn.skipAnimations)&&(b=!0,Of(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,b&&!u&&n.get()!==void 0){const w=mE(y.keyframes,f);if(w!==void 0){We.update(()=>{y.onUpdate(w),y.onComplete()});return}}return f.isSync?new qg(y):new iE(y)},N1=new Set(["width","height","top","left","right","bottom",...Gi]),dx=30,pE=t=>!isNaN(parseFloat(t));class yE{constructor(n,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var u;const c=Ot.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=s.owner}setCurrent(n){this.current=n,this.updatedAt=Ot.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=pE(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,s){this.events[n]||(this.events[n]=new Mg);const r=this.events[n].add(s);return n==="change"?()=>{r(),We.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,s){this.passiveEffect=n,this.stopPassiveEffect=s}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-r}jump(n,s=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Ot.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>dx)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,dx);return Qw(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(n){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=n(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,s;(n=this.dependents)==null||n.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zi(t,n){return new yE(t,n)}function hx(t){const n=[{},{}];return t==null||t.values.forEach((s,r)=>{n[0][r]=s.get(),n[1][r]=s.getVelocity()}),n}function Fg(t,n,s,r){if(typeof n=="function"){const[c,u]=hx(r);n=n(s!==void 0?s:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=hx(r);n=n(s!==void 0?s:t.custom,c,u)}return n}function Oi(t,n,s){const r=t.getProps();return Fg(r,n,s!==void 0?s:r.custom,t)}const Pf=t=>Array.isArray(t);function bE(t,n,s){t.hasValue(n)?t.getValue(n).set(s):t.addValue(n,zi(s))}function xE(t){return Pf(t)?t[t.length-1]||0:t}function vE(t,n){const s=Oi(t,n);let{transitionEnd:r={},transition:c={},...u}=s||{};u={...u,...r};for(const d in u){const f=xE(u[d]);bE(t,d,f)}}const Mt=t=>!!(t&&t.getVelocity);function wE(t){return!!(Mt(t)&&t.add)}function Lf(t,n){const s=t.getValue("willChange");if(wE(s))return s.add(n);if(!s&&pn.WillChange){const r=new pn.WillChange("auto");t.addValue("willChange",r),r.add(n)}}function Ig(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const SE="framerAppearId",A1="data-"+Ig(SE);function M1(t){return t.props[A1]}function TE({protectedKeys:t,needsAnimating:n},s){const r=t.hasOwnProperty(s)&&n[s]!==!0;return n[s]=!1,r}function E1(t,n,{delay:s=0,transitionOverride:r,type:c}={}){let{transition:u=t.getDefaultTransition(),transitionEnd:d,...f}=n;r&&(u=r);const g=[],p=c&&t.animationState&&t.animationState.getState()[c];for(const y in f){const b=t.getValue(y,t.latestValues[y]??null),w=f[y];if(w===void 0||p&&TE(p,y))continue;const S={delay:s,...Hg(u||{},y)},C=b.get();if(C!==void 0&&!b.isAnimating&&!Array.isArray(w)&&w===C&&!S.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const M=M1(t);if(M){const E=window.MotionHandoffAnimation(M,y,We);E!==null&&(S.startTime=E,T=!0)}}Lf(t,y),b.start(Ug(y,b,w,t.shouldReduceMotion&&N1.has(y)?{type:!1}:S,t,T));const N=b.animation;N&&g.push(N)}return d&&Promise.all(g).then(()=>{We.update(()=>{d&&vE(t,d)})}),g}function _f(t,n,s={}){var g;const r=Oi(t,n,s.type==="exit"?(g=t.presenceContext)==null?void 0:g.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(c=s.transitionOverride);const u=r?()=>Promise.all(E1(t,r,s)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:w}=c;return kE(t,n,p,y,b,w,s)}:()=>Promise.resolve(),{when:f}=c;if(f){const[p,y]=f==="beforeChildren"?[u,d]:[d,u];return p().then(()=>y())}else return Promise.all([u(),d(s.delay)])}function kE(t,n,s=0,r=0,c=0,u=1,d){const f=[];for(const g of t.variantChildren)g.notify("AnimationStart",n),f.push(_f(g,n,{...d,delay:s+(typeof r=="function"?0:r)+j1(t.variantChildren,g,r,c,u)}).then(()=>g.notify("AnimationComplete",n)));return Promise.all(f)}function CE(t,n,s={}){t.notify("AnimationStart",n);let r;if(Array.isArray(n)){const c=n.map(u=>_f(t,u,s));r=Promise.all(c)}else if(typeof n=="string")r=_f(t,n,s);else{const c=typeof n=="function"?Oi(t,n,s.custom):n;r=Promise.all(E1(t,c,s))}return r.then(()=>{t.notify("AnimationComplete",n)})}const jE={test:t=>t==="auto",parse:t=>t},D1=t=>n=>n.test(t),R1=[Ii,ie,_a,Wn,ZM,JM,jE],fx=t=>R1.find(D1(t));function NE(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Yw(t):!0}const AE=new Set(["brightness","contrast","saturate","opacity"]);function ME(t){const[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[r]=s.match(Bg)||[];if(!r)return t;const c=s.replace(r,"");let u=AE.has(n)?1:0;return r!==s&&(u*=100),n+"("+u+c+")"}const EE=/\b([a-z-]*)\(.*?\)/gu,zf={...Jn,getAnimatableNone:t=>{const n=t.match(EE);return n?n.map(ME).join(" "):t}},gx={...Ii,transform:Math.round},DE={rotate:Wn,rotateX:Wn,rotateY:Wn,rotateZ:Wn,scale:Wl,scaleX:Wl,scaleY:Wl,scaleZ:Wl,skew:Wn,skewX:Wn,skewY:Wn,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:oo,originX:ex,originY:ex,originZ:ie},Gg={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,inset:ie,insetBlock:ie,insetBlockStart:ie,insetBlockEnd:ie,insetInline:ie,insetInlineStart:ie,insetInlineEnd:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,paddingBlock:ie,paddingBlockStart:ie,paddingBlockEnd:ie,paddingInline:ie,paddingInlineStart:ie,paddingInlineEnd:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,marginBlock:ie,marginBlockStart:ie,marginBlockEnd:ie,marginInline:ie,marginInlineStart:ie,marginInlineEnd:ie,backgroundPositionX:ie,backgroundPositionY:ie,...DE,zIndex:gx,fillOpacity:oo,strokeOpacity:oo,numOctaves:gx},RE={...Gg,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:zf,WebkitFilter:zf},B1=t=>RE[t];function O1(t,n){let s=B1(t);return s!==zf&&(s=Jn),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const BE=new Set(["auto","none","0"]);function OE(t,n,s){let r=0,c;for(;r<t.length&&!c;){const u=t[r];typeof u=="string"&&!BE.has(u)&&lo(u).values.length&&(c=t[r]),r++}if(c&&s)for(const u of n)t[u]=O1(s,c)}class PE extends Vg{constructor(n,s,r,c,u){super(n,s,r,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<n.length;y++){let b=n[y];if(typeof b=="string"&&(b=b.trim(),Rg(b))){const w=C1(b,s.current);w!==void 0&&(n[y]=w),y===n.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!N1.has(r)||n.length!==2)return;const[c,u]=n,d=fx(c),f=fx(u),g=Zb(c),p=Zb(u);if(g!==p&&Qn[r]){this.needsMeasurement=!0;return}if(d!==f)if(lx(d)&&lx(f))for(let y=0;y<n.length;y++){const b=n[y];typeof b=="string"&&(n[y]=parseFloat(b))}else Qn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:s}=this,r=[];for(let c=0;c<n.length;c++)(n[c]===null||NE(n[c]))&&r.push(c);r.length&&OE(n,r,s)}measureInitialState(){const{element:n,unresolvedKeyframes:s,name:r}=this;if(!n||!n.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qn[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&n.getValue(r,c).jump(c,!1)}measureEndState(){var f;const{element:n,name:s,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const c=n.getValue(s);c&&c.jump(this.measuredOrigin,!1);const u=r.length-1,d=r[u];r[u]=Qn[s](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([g,p])=>{n.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function LE(t,n,s){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const c=(s==null?void 0:s[t])??r.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}const P1=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function L1(t){return Kw(t)&&"offsetHeight"in t}const{schedule:Wg}=r1(queueMicrotask,!1),Sa={x:!1,y:!1};function _1(){return Sa.x||Sa.y}function _E(t){return t==="x"||t==="y"?Sa[t]?null:(Sa[t]=!0,()=>{Sa[t]=!1}):Sa.x||Sa.y?null:(Sa.x=Sa.y=!0,()=>{Sa.x=Sa.y=!1})}function z1(t,n){const s=LE(t),r=new AbortController,c={passive:!0,...n,signal:r.signal};return[s,c,()=>r.abort()]}function mx(t){return!(t.pointerType==="touch"||_1())}function zE(t,n,s={}){const[r,c,u]=z1(t,s),d=f=>{if(!mx(f))return;const{target:g}=f,p=n(g,f);if(typeof p!="function"||!g)return;const y=b=>{mx(b)&&(p(b),g.removeEventListener("pointerleave",y))};g.addEventListener("pointerleave",y,c)};return r.forEach(f=>{f.addEventListener("pointerenter",d,c)}),u}const q1=(t,n)=>n?t===n?!0:q1(t,n.parentElement):!1,Kg=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function V1(t){return qE.has(t.tagName)||t.isContentEditable===!0}const uc=new WeakSet;function px(t){return n=>{n.key==="Enter"&&t(n)}}function qh(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const VE=(t,n)=>{const s=t.currentTarget;if(!s)return;const r=px(()=>{if(uc.has(s))return;qh(s,"down");const c=px(()=>{qh(s,"up")}),u=()=>qh(s,"cancel");s.addEventListener("keyup",c,n),s.addEventListener("blur",u,n)});s.addEventListener("keydown",r,n),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),n)};function yx(t){return Kg(t)&&!_1()}function HE(t,n,s={}){const[r,c,u]=z1(t,s),d=f=>{const g=f.currentTarget;if(!yx(f))return;uc.add(g);const p=n(g,f),y=(S,C)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",w),uc.has(g)&&uc.delete(g),yx(S)&&typeof p=="function"&&p(S,{success:C})},b=S=>{y(S,g===window||g===document||s.useGlobalTarget||q1(g,S.target))},w=S=>{y(S,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",w,c)};return r.forEach(f=>{(s.useGlobalTarget?window:f).addEventListener("pointerdown",d,c),L1(f)&&(f.addEventListener("focus",p=>VE(p,c)),!V1(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}function H1(t){return Kw(t)&&"ownerSVGElement"in t}function UE(t){return H1(t)&&t.tagName==="svg"}const FE=[...R1,ct,Jn],IE=t=>FE.find(D1(t)),bx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mi=()=>({x:bx(),y:bx()}),xx=()=>({min:0,max:0}),ht=()=>({x:xx(),y:xx()}),qf={current:null},U1={current:!1},GE=typeof window<"u";function WE(){if(U1.current=!0,!!GE)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>qf.current=t.matches;t.addEventListener("change",n),n()}else qf.current=!1}const KE=new WeakMap;function Vc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function co(t){return typeof t=="string"||Array.isArray(t)}const Yg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qg=["initial",...Yg];function Hc(t){return Vc(t.animate)||Qg.some(n=>co(t[n]))}function F1(t){return!!(Hc(t)||t.variants)}function YE(t,n,s){for(const r in n){const c=n[r],u=s[r];if(Mt(c))t.addValue(r,c);else if(Mt(u))t.addValue(r,zi(c,{owner:t}));else if(u!==c)if(t.hasValue(r)){const d=t.getValue(r);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(r);t.addValue(r,zi(d!==void 0?d:c,{owner:t}))}}for(const r in s)n[r]===void 0&&t.removeValue(r);return n}const vx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let wc={};function I1(t){wc=t}function QE(){return wc}class $E{scrapeMotionValuesFromProps(n,s,r){return{}}constructor({parent:n,props:s,presenceContext:r,reducedMotionConfig:c,blockInitialAnimation:u,visualState:d},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Ot.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,We.render(this.render,!1,!0))};const{latestValues:g,renderState:p}=d;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=p,this.parent=n,this.props=s,this.presenceContext=r,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.options=f,this.blockInitialAnimation=!!u,this.isControllingVariants=Hc(s),this.isVariantNode=F1(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(s,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&Mt(S)&&S.set(g[w])}}mount(n){var s;this.current=n,KE.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,c)=>this.bindToMotionValue(c,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(U1.current||WE(),this.shouldReduceMotion=qf.current),(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var n;this.projection&&this.projection.unmount(),Xn(this.notifyUpdate),Xn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const r=this.features[s];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,s){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const r=Wi.has(n);r&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&We.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,s)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),s.owner&&s.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in wc){const s=wc[n];if(!s)continue;const{isEnabled:r,Feature:c}=s;if(!this.features[n]&&c&&r(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ht()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,s){this.latestValues[n]=s}update(n,s){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<vx.length;r++){const c=vx[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=YE(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(n),()=>s.variantChildren.delete(n)}addValue(n,s){const r=this.values.get(n);s!==r&&(r&&this.removeValue(n),this.bindToMotionValue(n,s),this.values.set(n,s),this.latestValues[n]=s.get())}removeValue(n){this.values.delete(n);const s=this.valueSubscriptions.get(n);s&&(s(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,s){if(this.props.values&&this.props.values[n])return this.props.values[n];let r=this.values.get(n);return r===void 0&&s!==void 0&&(r=zi(s===null?void 0:s,{owner:this}),this.addValue(n,r)),r}readValue(n,s){let r=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return r!=null&&(typeof r=="string"&&(Ww(r)||Yw(r))?r=parseFloat(r):!IE(r)&&Jn.test(s)&&(r=O1(n,s)),this.setBaseTarget(n,Mt(r)?r.get():r)),Mt(r)?r.get():r}setBaseTarget(n,s){this.baseTarget[n]=s}getBaseTarget(n){var u;const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const d=Fg(this.props,s,(u=this.presenceContext)==null?void 0:u.custom);d&&(r=d[n])}if(s&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!Mt(c)?c:this.initialValues[n]!==void 0&&r===void 0?void 0:this.baseTarget[n]}on(n,s){return this.events[n]||(this.events[n]=new Mg),this.events[n].add(s)}notify(n,...s){this.events[n]&&this.events[n].notify(...s)}scheduleRenderMicrotask(){Wg.render(this.render)}}class ts{constructor(n){this.isMounted=!1,this.node=n}update(){}}class G1 extends $E{constructor(){super(...arguments),this.KeyframeResolver=PE}sortInstanceNodePosition(n,s){return n.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(n,s){const r=n.style;return r?r[s]:void 0}removeValueFromRenderState(n,{vars:s,style:r}){delete s[n],delete r[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Mt(n)&&(this.childSubscription=n.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function W1({top:t,left:n,right:s,bottom:r}){return{x:{min:n,max:s},y:{min:t,max:r}}}function XE({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function JE(t,n){if(!n)return t;const s=n({x:t.left,y:t.top}),r=n({x:t.right,y:t.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function Vh(t){return t===void 0||t===1}function Vf({scale:t,scaleX:n,scaleY:s}){return!Vh(t)||!Vh(n)||!Vh(s)}function Cs(t){return Vf(t)||K1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function K1(t){return wx(t.x)||wx(t.y)}function wx(t){return t&&t!=="0%"}function Sc(t,n,s){const r=t-s,c=n*r;return s+c}function Sx(t,n,s,r,c){return c!==void 0&&(t=Sc(t,c,r)),Sc(t,s,r)+n}function Hf(t,n=0,s=1,r,c){t.min=Sx(t.min,n,s,r,c),t.max=Sx(t.max,n,s,r,c)}function Y1(t,{x:n,y:s}){Hf(t.x,n.translate,n.scale,n.originPoint),Hf(t.y,s.translate,s.scale,s.originPoint)}const Tx=.999999999999,kx=1.0000000000001;function ZE(t,n,s,r=!1){const c=s.length;if(!c)return;n.x=n.y=1;let u,d;for(let f=0;f<c;f++){u=s[f],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(r&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Di(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),d&&(n.x*=d.x.scale,n.y*=d.y.scale,Y1(t,d)),r&&Cs(u.latestValues)&&Di(t,u.latestValues))}n.x<kx&&n.x>Tx&&(n.x=1),n.y<kx&&n.y>Tx&&(n.y=1)}function Ei(t,n){t.min=t.min+n,t.max=t.max+n}function Cx(t,n,s,r,c=.5){const u=$e(t.min,t.max,c);Hf(t,n,s,u,r)}function Di(t,n){Cx(t.x,n.x,n.scaleX,n.scale,n.originX),Cx(t.y,n.y,n.scaleY,n.scale,n.originY)}function Q1(t,n){return W1(JE(t.getBoundingClientRect(),n))}function eD(t,n,s){const r=Q1(t,s),{scroll:c}=n;return c&&(Ei(r.x,c.offset.x),Ei(r.y,c.offset.y)),r}const tD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aD=Gi.length;function nD(t,n,s){let r="",c=!0;for(let u=0;u<aD;u++){const d=Gi[u],f=t[d];if(f===void 0)continue;let g=!0;if(typeof f=="number"?g=f===(d.startsWith("scale")?1:0):g=parseFloat(f)===0,!g||s){const p=P1(f,Gg[d]);if(!g){c=!1;const y=tD[d]||d;r+=`${y}(${p}) `}s&&(n[d]=p)}}return r=r.trim(),s?r=s(n,c?"":r):c&&(r="none"),r}function $g(t,n,s){const{style:r,vars:c,transformOrigin:u}=t;let d=!1,f=!1;for(const g in n){const p=n[g];if(Wi.has(g)){d=!0;continue}else if(l1(g)){c[g]=p;continue}else{const y=P1(p,Gg[g]);g.startsWith("origin")?(f=!0,u[g]=y):r[g]=y}}if(n.transform||(d||s?r.transform=nD(n,t.transform,s):r.transform&&(r.transform="none")),f){const{originX:g="50%",originY:p="50%",originZ:y=0}=u;r.transformOrigin=`${g} ${p} ${y}`}}function $1(t,{style:n,vars:s},r,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,r);for(d in s)u.setProperty(d,s[d])}function jx(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const Qr={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(ie.test(t))t=parseFloat(t);else return t;const s=jx(t,n.target.x),r=jx(t,n.target.y);return`${s}% ${r}%`}},sD={correct:(t,{treeScale:n,projectionDelta:s})=>{const r=t,c=Jn.parse(t);if(c.length>5)return r;const u=Jn.createTransformer(t),d=typeof c[0]!="number"?1:0,f=s.x.scale*n.x,g=s.y.scale*n.y;c[0+d]/=f,c[1+d]/=g;const p=$e(f,g,.5);return typeof c[2+d]=="number"&&(c[2+d]/=p),typeof c[3+d]=="number"&&(c[3+d]/=p),u(c)}},Uf={borderRadius:{...Qr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qr,borderTopRightRadius:Qr,borderBottomLeftRadius:Qr,borderBottomRightRadius:Qr,boxShadow:sD};function X1(t,{layout:n,layoutId:s}){return Wi.has(t)||t.startsWith("origin")||(n||s!==void 0)&&(!!Uf[t]||t==="opacity")}function Xg(t,n,s){var d;const r=t.style,c=n==null?void 0:n.style,u={};if(!r)return u;for(const f in r)(Mt(r[f])||c&&Mt(c[f])||X1(f,t)||((d=s==null?void 0:s.getValue(f))==null?void 0:d.liveStyle)!==void 0)&&(u[f]=r[f]);return u}function iD(t){return window.getComputedStyle(t)}class rD extends G1{constructor(){super(...arguments),this.type="html",this.renderInstance=$1}readValueFromInstance(n,s){var r;if(Wi.has(s))return(r=this.projection)!=null&&r.isProjecting?Mf(s):L4(n,s);{const c=iD(n),u=(l1(s)?c.getPropertyValue(s):c[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:s}){return Q1(n,s)}build(n,s,r){$g(n,s,r.transformTemplate)}scrapeMotionValuesFromProps(n,s,r){return Xg(n,s,r)}}const oD={offset:"stroke-dashoffset",array:"stroke-dasharray"},lD={offset:"strokeDashoffset",array:"strokeDasharray"};function cD(t,n,s=1,r=0,c=!0){t.pathLength=1;const u=c?oD:lD;t[u.offset]=ie.transform(-r);const d=ie.transform(n),f=ie.transform(s);t[u.array]=`${d} ${f}`}const uD=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function J1(t,{attrX:n,attrY:s,attrScale:r,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...f},g,p,y){if($g(t,f,p),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:w}=t;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox);for(const S of uD)b[S]!==void 0&&(w[S]=b[S],delete b[S]);n!==void 0&&(b.x=n),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),c!==void 0&&cD(b,c,u,d,!1)}const Z1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),e2=t=>typeof t=="string"&&t.toLowerCase()==="svg";function dD(t,n,s,r){$1(t,n,void 0,r);for(const c in n.attrs)t.setAttribute(Z1.has(c)?c:Ig(c),n.attrs[c])}function t2(t,n,s){const r=Xg(t,n,s);for(const c in t)if(Mt(t[c])||Mt(n[c])){const u=Gi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[u]=t[c]}return r}class hD extends G1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ht}getBaseTargetFromProps(n,s){return n[s]}readValueFromInstance(n,s){if(Wi.has(s)){const r=B1(s);return r&&r.default||0}return s=Z1.has(s)?s:Ig(s),n.getAttribute(s)}scrapeMotionValuesFromProps(n,s,r){return t2(n,s,r)}build(n,s,r){J1(n,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(n,s,r,c){dD(n,s,r,c)}mount(n){this.isSVGTag=e2(n.tagName),super.mount(n)}}const fD=Qg.length;function a2(t){if(!t)return;if(!t.isControllingVariants){const s=t.parent?a2(t.parent)||{}:{};return t.props.initial!==void 0&&(s.initial=t.props.initial),s}const n={};for(let s=0;s<fD;s++){const r=Qg[s],c=t.props[r];(co(c)||c===!1)&&(n[r]=c)}return n}function n2(t,n){if(!Array.isArray(n))return!1;const s=n.length;if(s!==t.length)return!1;for(let r=0;r<s;r++)if(n[r]!==t[r])return!1;return!0}const gD=[...Yg].reverse(),mD=Yg.length;function pD(t){return n=>Promise.all(n.map(({animation:s,options:r})=>CE(t,s,r)))}function yD(t){let n=pD(t),s=Nx(),r=!0;const c=g=>(p,y)=>{var w;const b=Oi(t,y,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:C,...T}=b;p={...p,...T,...C}}return p};function u(g){n=g(t)}function d(g){const{props:p}=t,y=a2(t.parent)||{},b=[],w=new Set;let S={},C=1/0;for(let N=0;N<mD;N++){const M=gD[N],E=s[M],j=p[M]!==void 0?p[M]:y[M],q=co(j),P=M===g?E.isActive:null;P===!1&&(C=N);let G=j===y[M]&&j!==p[M]&&q;if(G&&r&&t.manuallyAnimateOnMount&&(G=!1),E.protectedKeys={...S},!E.isActive&&P===null||!j&&!E.prevProp||Vc(j)||typeof j=="boolean")continue;const _=bD(E.prevProp,j);let H=_||M===g&&E.isActive&&!G&&q||N>C&&q,J=!1;const se=Array.isArray(j)?j:[j];let re=se.reduce(c(M),{});P===!1&&(re={});const{prevResolvedValues:he={}}=E,ve={...he,...re},U=D=>{H=!0,w.has(D)&&(J=!0,w.delete(D)),E.needsAnimating[D]=!0;const B=t.getValue(D);B&&(B.liveStyle=!1)};for(const D in ve){const B=re[D],Q=he[D];if(S.hasOwnProperty(D))continue;let ne=!1;Pf(B)&&Pf(Q)?ne=!n2(B,Q):ne=B!==Q,ne?B!=null?U(D):w.add(D):B!==void 0&&w.has(D)?U(D):E.protectedKeys[D]=!0}E.prevProp=j,E.prevResolvedValues=re,E.isActive&&(S={...S,...re}),r&&t.blockInitialAnimation&&(H=!1);const z=G&&_;H&&(!z||J)&&b.push(...se.map(D=>{const B={type:M};if(typeof D=="string"&&r&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Q}=t,ne=Oi(Q,D);if(Q.enteringChildren&&ne){const{delayChildren:R}=ne.transition||{};B.delay=j1(Q.enteringChildren,t,R)}}return{animation:D,options:B}}))}if(w.size){const N={};if(typeof p.initial!="boolean"){const M=Oi(t,Array.isArray(p.initial)?p.initial[0]:p.initial);M&&M.transition&&(N.transition=M.transition)}w.forEach(M=>{const E=t.getBaseTarget(M),j=t.getValue(M);j&&(j.liveStyle=!0),N[M]=E??null}),b.push({animation:N})}let T=!!b.length;return r&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(T=!1),r=!1,T?n(b):Promise.resolve()}function f(g,p){var b;if(s[g].isActive===p)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,p)}),s[g].isActive=p;const y=d(g);for(const w in s)s[w].protectedKeys={};return y}return{animateChanges:d,setActive:f,setAnimateFunction:u,getState:()=>s,reset:()=>{s=Nx()}}}function bD(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!n2(n,t):!1}function Ts(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nx(){return{animate:Ts(!0),whileInView:Ts(),whileHover:Ts(),whileTap:Ts(),whileDrag:Ts(),whileFocus:Ts(),exit:Ts()}}const s2=1e-4,xD=1-s2,vD=1+s2,i2=.01,wD=0-i2,SD=0+i2;function Pt(t){return t.max-t.min}function TD(t,n,s){return Math.abs(t-n)<=s}function Ax(t,n,s,r=.5){t.origin=r,t.originPoint=$e(n.min,n.max,t.origin),t.scale=Pt(s)/Pt(n),t.translate=$e(s.min,s.max,t.origin)-t.originPoint,(t.scale>=xD&&t.scale<=vD||isNaN(t.scale))&&(t.scale=1),(t.translate>=wD&&t.translate<=SD||isNaN(t.translate))&&(t.translate=0)}function ao(t,n,s,r){Ax(t.x,n.x,s.x,r?r.originX:void 0),Ax(t.y,n.y,s.y,r?r.originY:void 0)}function Mx(t,n,s){t.min=s.min+n.min,t.max=t.min+Pt(n)}function kD(t,n,s){Mx(t.x,n.x,s.x),Mx(t.y,n.y,s.y)}function Ex(t,n,s){t.min=n.min-s.min,t.max=t.min+Pt(n)}function Tc(t,n,s){Ex(t.x,n.x,s.x),Ex(t.y,n.y,s.y)}function Dx(t,n,s,r,c){return t-=n,t=Sc(t,1/s,r),c!==void 0&&(t=Sc(t,1/c,r)),t}function CD(t,n=0,s=1,r=.5,c,u=t,d=t){if(_a.test(n)&&(n=parseFloat(n),n=$e(d.min,d.max,n/100)-d.min),typeof n!="number")return;let f=$e(u.min,u.max,r);t===u&&(f-=n),t.min=Dx(t.min,n,s,f,c),t.max=Dx(t.max,n,s,f,c)}function Rx(t,n,[s,r,c],u,d){CD(t,n[s],n[r],n[c],n.scale,u,d)}const jD=["x","scaleX","originX"],ND=["y","scaleY","originY"];function Bx(t,n,s,r){Rx(t.x,n,jD,s?s.x:void 0,r?r.x:void 0),Rx(t.y,n,ND,s?s.y:void 0,r?r.y:void 0)}function Ox(t,n){t.min=n.min,t.max=n.max}function wa(t,n){Ox(t.x,n.x),Ox(t.y,n.y)}function Px(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}function Lx(t){return t.translate===0&&t.scale===1}function r2(t){return Lx(t.x)&&Lx(t.y)}function _x(t,n){return t.min===n.min&&t.max===n.max}function AD(t,n){return _x(t.x,n.x)&&_x(t.y,n.y)}function zx(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function o2(t,n){return zx(t.x,n.x)&&zx(t.y,n.y)}function qx(t){return Pt(t.x)/Pt(t.y)}function Vx(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function fa(t){return[t("x"),t("y")]}function MD(t,n,s){let r="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(s==null?void 0:s.z)||0;if((c||u||d)&&(r=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(r+=`scale(${1/n.x}, ${1/n.y}) `),s){const{transformPerspective:p,rotate:y,rotateX:b,rotateY:w,skewX:S,skewY:C}=s;p&&(r=`perspective(${p}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),w&&(r+=`rotateY(${w}deg) `),S&&(r+=`skewX(${S}deg) `),C&&(r+=`skewY(${C}deg) `)}const f=t.x.scale*n.x,g=t.y.scale*n.y;return(f!==1||g!==1)&&(r+=`scale(${f}, ${g})`),r||"none"}const l2=["TopLeft","TopRight","BottomLeft","BottomRight"],ED=l2.length,Hx=t=>typeof t=="string"?parseFloat(t):t,Ux=t=>typeof t=="number"||ie.test(t);function DD(t,n,s,r,c,u){c?(t.opacity=$e(0,s.opacity??1,RD(r)),t.opacityExit=$e(n.opacity??1,0,BD(r))):u&&(t.opacity=$e(n.opacity??1,s.opacity??1,r));for(let d=0;d<ED;d++){const f=`border${l2[d]}Radius`;let g=Fx(n,f),p=Fx(s,f);if(g===void 0&&p===void 0)continue;g||(g=0),p||(p=0),g===0||p===0||Ux(g)===Ux(p)?(t[f]=Math.max($e(Hx(g),Hx(p),r),0),(_a.test(p)||_a.test(g))&&(t[f]+="%")):t[f]=p}(n.rotate||s.rotate)&&(t.rotate=$e(n.rotate||0,s.rotate||0,r))}function Fx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const RD=c2(0,.5,a1),BD=c2(.5,.95,pa);function c2(t,n,s){return r=>r<t?0:r>n?1:s(ro(t,n,r))}function OD(t,n){const s=Ot.now(),r=({timestamp:c})=>{const u=c-s;u>=n&&(Xn(r),t(u-n))};return We.setup(r,!0),()=>Xn(r)}function uo(t,n,s,r={passive:!0}){return t.addEventListener(n,s,r),()=>t.removeEventListener(n,s)}function dc(t){return Mt(t)?t.get():t}function PD(t,n,s){const r=Mt(t)?t:zi(t);return r.start(Ug("",r,n,s)),r.animation}const LD=(t,n)=>t.depth-n.depth;class _D{constructor(){this.children=[],this.isDirty=!1}add(n){Cg(this.children,n),this.isDirty=!0}remove(n){jg(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(LD),this.isDirty=!1,this.children.forEach(n)}}class zD{constructor(){this.members=[]}add(n){Cg(this.members,n),n.scheduleRender()}remove(n){if(jg(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(n){const s=this.members.findIndex(c=>n===c);if(s===0)return!1;let r;for(let c=s;c>=0;c--){const u=this.members[c];if(u.isPresent!==!1){r=u;break}}return r?(this.promote(r),!0):!1}promote(n,s){const r=this.lead;if(n!==r&&(this.prevLead=r,this.lead=n,n.show(),r)){r.instance&&r.scheduleRender(),n.scheduleRender(),n.resumeFrom=r,s&&(n.resumeFrom.preserveOpacity=!0),r.snapshot&&(n.snapshot=r.snapshot,n.snapshot.latestValues=r.animationValues||r.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:c}=n.options;c===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:s,resumingFrom:r}=n;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const hc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Hh=["","X","Y","Z"],qD=1e3;let VD=0;function Uh(t,n,s,r){const{latestValues:c}=n;c[t]&&(s[t]=c[t],n.setStaticValue(t,0),r&&(r[t]=0))}function u2(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const s=M1(n);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(s,"transform",We,!(c||u))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&u2(r)}function d2({attachResizeListener:t,defaultParent:n,measureScroll:s,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(d={},f=n==null?void 0:n()){this.id=VD++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FD),this.nodes.forEach(KD),this.nodes.forEach(YD),this.nodes.forEach(ID)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new _D)}addEventListener(d,f){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Mg),this.eventHandlers.get(d).add(f)}notifyListeners(d,...f){const g=this.eventHandlers.get(d);g&&g.notify(...f)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=H1(d)&&!UE(d),this.instance=d;const{layoutId:f,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||f)&&(this.isLayoutDirty=!0),t){let y,b=0;const w=()=>this.root.updateBlockedByResize=!1;We.read(()=>{b=window.innerWidth}),t(d,()=>{const S=window.innerWidth;S!==b&&(b=S,this.root.updateBlockedByResize=!0,y&&y(),y=OD(w,250),hc.hasAnimatedSinceResize&&(hc.hasAnimatedSinceResize=!1,this.nodes.forEach(Wx)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||g)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||p.getDefaultTransition()||ZD,{onLayoutAnimationStart:T,onLayoutAnimationComplete:N}=p.getProps(),M=!this.targetLayout||!o2(this.targetLayout,S),E=!b&&w;if(this.options.layoutRoot||this.resumeFrom||E||b&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const j={...Hg(C,"layout"),onPlay:T,onComplete:N};(p.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j),this.setAnimationOrigin(y,E)}else b||Wx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Xn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QD),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&u2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:f,layout:g}=this.options;if(f===void 0&&!g)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ix);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Gx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(WD),this.nodes.forEach(HD),this.nodes.forEach(UD)):this.nodes.forEach(Gx),this.clearAllSnapshots();const f=Ot.now();Tt.delta=qa(0,1e3/60,f-Tt.timestamp),Tt.timestamp=f,Tt.isProcessing=!0,Bh.update.process(Tt),Bh.preRender.process(Tt),Bh.render.process(Tt),Tt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GD),this.sharedNodes.forEach($D)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,We.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){We.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Pt(this.snapshot.measuredBox.x)&&!Pt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ht(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(f=!1),f&&this.instance){const g=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:g,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!r2(this.projectionDelta),g=this.getTransformTemplate(),p=g?g(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;d&&this.instance&&(f||Cs(this.latestValues)||y)&&(c(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const f=this.measurePageBox();let g=this.removeElementScroll(f);return d&&(g=this.removeTransform(g)),e5(g),{animationId:this.root.animationId,measuredBox:f,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:d}=this.options;if(!d)return ht();const f=d.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(t5))){const{scroll:y}=this.root;y&&(Ei(f.x,y.offset.x),Ei(f.y,y.offset.y))}return f}removeElementScroll(d){var g;const f=ht();if(wa(f,d),(g=this.scroll)!=null&&g.wasRoot)return f;for(let p=0;p<this.path.length;p++){const y=this.path[p],{scroll:b,options:w}=y;y!==this.root&&b&&w.layoutScroll&&(b.wasRoot&&wa(f,d),Ei(f.x,b.offset.x),Ei(f.y,b.offset.y))}return f}applyTransform(d,f=!1){const g=ht();wa(g,d);for(let p=0;p<this.path.length;p++){const y=this.path[p];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Di(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Cs(y.latestValues)&&Di(g,y.latestValues)}return Cs(this.latestValues)&&Di(g,this.latestValues),g}removeTransform(d){const f=ht();wa(f,d);for(let g=0;g<this.path.length;g++){const p=this.path[g];if(!p.instance||!Cs(p.latestValues))continue;Vf(p.latestValues)&&p.updateSnapshot();const y=ht(),b=p.measurePageBox();wa(y,b),Bx(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return Cs(this.latestValues)&&Bx(f,this.latestValues),f}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==f;if(!(d||g&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=Tt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ht(),this.targetWithTransforms=ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wa(this.target,this.layout.layoutBox),Y1(this.target,this.targetDelta)):wa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Vf(this.parent.latestValues)||K1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,f,g){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),Tc(this.relativeTargetOrigin,f,g),wa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),f=!!this.resumingFrom||this!==d;let g=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(g=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===Tt.timestamp&&(g=!1),g)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;wa(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;ZE(this.layoutCorrected,this.treeScale,this.path,f),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ht());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Px(this.prevProjectionDelta.x,this.projectionDelta.x),Px(this.prevProjectionDelta.y,this.projectionDelta.y)),ao(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!Vx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),d){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mi(),this.projectionDelta=Mi(),this.projectionDeltaWithTransform=Mi()}setAnimationOrigin(d,f=!1){const g=this.snapshot,p=g?g.latestValues:{},y={...this.latestValues},b=Mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const w=ht(),S=g?g.source:void 0,C=this.layout?this.layout.source:void 0,T=S!==C,N=this.getStack(),M=!N||N.members.length<=1,E=!!(T&&!M&&this.options.crossfade===!0&&!this.path.some(JD));this.animationProgress=0;let j;this.mixTargetDelta=q=>{const P=q/1e3;Kx(b.x,d.x,P),Kx(b.y,d.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),XD(this.relativeTarget,this.relativeTargetOrigin,w,P),j&&AD(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=ht()),wa(j,this.relativeTarget)),T&&(this.animationValues=y,DD(y,p,this.latestValues,P,E,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var f,g,p;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(p=(g=this.resumingFrom)==null?void 0:g.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Xn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=We.update(()=>{hc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=zi(0)),this.currentAnimation=PD(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qD),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:f,target:g,layout:p,latestValues:y}=d;if(!(!f||!g||!p)){if(this!==d&&this.layout&&p&&h2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){g=this.target||ht();const b=Pt(this.layout.layoutBox.x);g.x.min=d.target.x.min,g.x.max=g.x.min+b;const w=Pt(this.layout.layoutBox.y);g.y.min=d.target.y.min,g.y.max=g.y.min+w}wa(f,g),Di(f,y),ao(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(d,f){this.sharedNodes.has(d)||this.sharedNodes.set(d,new zD),this.sharedNodes.get(d).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var f;const{layoutId:d}=this.options;return d?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:d}=this.options;return d?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:f,preserveFollowOpacity:g}={}){const p=this.getStack();p&&p.promote(this,g),d&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let f=!1;const{latestValues:g}=d;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(f=!0),!f)return;const p={};g.z&&Uh("z",d,p,this.animationValues);for(let y=0;y<Hh.length;y++)Uh(`rotate${Hh[y]}`,d,p,this.animationValues),Uh(`skew${Hh[y]}`,d,p,this.animationValues);d.render();for(const y in p)d.setStaticValue(y,p[y]),this.animationValues&&(this.animationValues[y]=p[y]);d.scheduleRender()}applyProjectionStyles(d,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=dc(f==null?void 0:f.pointerEvents)||"",d.transform=g?g(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=dc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Cs(this.latestValues)&&(d.transform=g?g({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=p.animationValues||p.latestValues;this.applyTransformsToTarget();let b=MD(this.projectionDeltaWithTransform,this.treeScale,y);g&&(b=g(y,b)),d.transform=b;const{x:w,y:S}=this.projectionDelta;d.transformOrigin=`${w.origin*100}% ${S.origin*100}% 0`,p.animationValues?d.opacity=p===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=p===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const C in Uf){if(y[C]===void 0)continue;const{correct:T,applyTo:N,isCSSVariable:M}=Uf[C],E=b==="none"?y[C]:T(y[C],p);if(N){const j=N.length;for(let q=0;q<j;q++)d[N[q]]=E}else M?this.options.visualElement.renderState.vars[C]=E:d[C]=E}this.options.layoutId&&(d.pointerEvents=p===this?dc(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var f;return(f=d.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Ix),this.root.sharedNodes.clear()}}}function HD(t){t.updateLayout()}function UD(t){var s;const n=((s=t.resumeFrom)==null?void 0:s.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;u==="size"?fa(b=>{const w=d?n.measuredBox[b]:n.layoutBox[b],S=Pt(w);w.min=r[b].min,w.max=w.min+S}):h2(u,n.layoutBox,r)&&fa(b=>{const w=d?n.measuredBox[b]:n.layoutBox[b],S=Pt(r[b]);w.max=w.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+S)});const f=Mi();ao(f,r,n.layoutBox);const g=Mi();d?ao(g,t.applyTransform(c,!0),n.measuredBox):ao(g,r,n.layoutBox);const p=!r2(f);let y=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:w,layout:S}=b;if(w&&S){const C=ht();Tc(C,n.layoutBox,w.layoutBox);const T=ht();Tc(T,r,S.layoutBox),o2(C,T)||(y=!0),b.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=C,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function FD(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ID(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function GD(t){t.clearSnapshot()}function Ix(t){t.clearMeasurements()}function Gx(t){t.isLayoutDirty=!1}function WD(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function Wx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function KD(t){t.resolveTargetDelta()}function YD(t){t.calcProjection()}function QD(t){t.resetSkewAndRotation()}function $D(t){t.removeLeadSnapshot()}function Kx(t,n,s){t.translate=$e(n.translate,0,s),t.scale=$e(n.scale,1,s),t.origin=n.origin,t.originPoint=n.originPoint}function Yx(t,n,s,r){t.min=$e(n.min,s.min,r),t.max=$e(n.max,s.max,r)}function XD(t,n,s,r){Yx(t.x,n.x,s.x,r),Yx(t.y,n.y,s.y,r)}function JD(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ZD={duration:.45,ease:[.4,0,.1,1]},Qx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),$x=Qx("applewebkit/")&&!Qx("chrome/")?Math.round:pa;function Xx(t){t.min=$x(t.min),t.max=$x(t.max)}function e5(t){Xx(t.x),Xx(t.y)}function h2(t,n,s){return t==="position"||t==="preserve-aspect"&&!TD(qx(n),qx(s),.2)}function t5(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const a5=d2({attachResizeListener:(t,n)=>uo(t,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fh={current:void 0},f2=d2({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Fh.current){const t=new a5({});t.mount(window),t.setOptions({layoutScroll:!0}),Fh.current=t}return Fh.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Jg=x.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Jx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function n5(...t){return n=>{let s=!1;const r=t.map(c=>{const u=Jx(c,n);return!s&&typeof u=="function"&&(s=!0),u});if(s)return()=>{for(let c=0;c<r.length;c++){const u=r[c];typeof u=="function"?u():Jx(t[c],null)}}}}function s5(...t){return x.useCallback(n5(...t),t)}class i5 extends x.Component{getSnapshotBeforeUpdate(n){const s=this.props.childRef.current;if(s&&n.isPresent&&!this.props.isPresent){const r=s.offsetParent,c=L1(r)&&r.offsetWidth||0,u=this.props.sizeRef.current;u.height=s.offsetHeight||0,u.width=s.offsetWidth||0,u.top=s.offsetTop,u.left=s.offsetLeft,u.right=c-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function r5({children:t,isPresent:n,anchorX:s,root:r}){var y;const c=x.useId(),u=x.useRef(null),d=x.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=x.useContext(Jg),g=((y=t.props)==null?void 0:y.ref)??(t==null?void 0:t.ref),p=s5(u,g);return x.useInsertionEffect(()=>{const{width:b,height:w,top:S,left:C,right:T}=d.current;if(n||!u.current||!b||!w)return;const N=s==="left"?`left: ${C}`:`right: ${T}`;u.current.dataset.motionPopId=c;const M=document.createElement("style");f&&(M.nonce=f);const E=r??document.head;return E.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${w}px !important;
            ${N}px !important;
            top: ${S}px !important;
          }
        `),()=>{E.contains(M)&&E.removeChild(M)}},[n]),o.jsx(i5,{isPresent:n,childRef:u,sizeRef:d,children:x.cloneElement(t,{ref:p})})}const o5=({children:t,initial:n,isPresent:s,onExitComplete:r,custom:c,presenceAffectsLayout:u,mode:d,anchorX:f,root:g})=>{const p=kg(l5),y=x.useId();let b=!0,w=x.useMemo(()=>(b=!1,{id:y,initial:n,isPresent:s,custom:c,onExitComplete:S=>{p.set(S,!0);for(const C of p.values())if(!C)return;r&&r()},register:S=>(p.set(S,!1),()=>p.delete(S))}),[s,p,r]);return u&&b&&(w={...w}),x.useMemo(()=>{p.forEach((S,C)=>p.set(C,!1))},[s]),x.useEffect(()=>{!s&&!p.size&&r&&r()},[s]),d==="popLayout"&&(t=o.jsx(r5,{isPresent:s,anchorX:f,root:g,children:t})),o.jsx(qc.Provider,{value:w,children:t})};function l5(){return new Map}function g2(t=!0){const n=x.useContext(qc);if(n===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:c}=n,u=x.useId();x.useEffect(()=>{if(t)return c(u)},[t]);const d=x.useCallback(()=>t&&r&&r(u),[u,r,t]);return!s&&r?[!1,d]:[!0]}const Kl=t=>t.key||"";function Zx(t){const n=[];return x.Children.forEach(t,s=>{x.isValidElement(s)&&n.push(s)}),n}const Pi=({children:t,custom:n,initial:s=!0,onExitComplete:r,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:f="left",root:g})=>{const[p,y]=g2(d),b=x.useMemo(()=>Zx(t),[t]),w=d&&!p?[]:b.map(Kl),S=x.useRef(!0),C=x.useRef(b),T=kg(()=>new Map),N=x.useRef(new Set),[M,E]=x.useState(b),[j,q]=x.useState(b);Gw(()=>{S.current=!1,C.current=b;for(let _=0;_<j.length;_++){const H=Kl(j[_]);w.includes(H)?(T.delete(H),N.current.delete(H)):T.get(H)!==!0&&T.set(H,!1)}},[j,w.length,w.join("-")]);const P=[];if(b!==M){let _=[...b];for(let H=0;H<j.length;H++){const J=j[H],se=Kl(J);w.includes(se)||(_.splice(H,0,J),P.push(J))}return u==="wait"&&P.length&&(_=P),q(Zx(_)),E(b),null}const{forceRender:G}=x.useContext(Tg);return o.jsx(o.Fragment,{children:j.map(_=>{const H=Kl(_),J=d&&!p?!1:b===j||w.includes(H),se=()=>{if(N.current.has(H))return;if(N.current.add(H),T.has(H))T.set(H,!0);else return;let re=!0;T.forEach(he=>{he||(re=!1)}),re&&(G==null||G(),q(C.current),d&&(y==null||y()),r&&r())};return o.jsx(o5,{isPresent:J,initial:!S.current||s?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:J?void 0:se,anchorX:f,children:_},H)})})},m2=x.createContext({strict:!1}),ev={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let tv=!1;function c5(){if(tv)return;const t={};for(const n in ev)t[n]={isEnabled:s=>ev[n].some(r=>!!s[r])};I1(t),tv=!0}function p2(){return c5(),QE()}function u5(t){const n=p2();for(const s in t)n[s]={...n[s],...t[s]};I1(n)}const d5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function kc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||d5.has(t)}let y2=t=>!kc(t);function h5(t){typeof t=="function"&&(y2=n=>n.startsWith("on")?!kc(n):t(n))}try{h5(require("@emotion/is-prop-valid").default)}catch{}function f5(t,n,s){const r={};for(const c in t)c==="values"&&typeof t.values=="object"||(y2(c)||s===!0&&kc(c)||!n&&!kc(c)||t.draggable&&c.startsWith("onDrag"))&&(r[c]=t[c]);return r}const Uc=x.createContext({});function g5(t,n){if(Hc(t)){const{initial:s,animate:r}=t;return{initial:s===!1||co(s)?s:void 0,animate:co(r)?r:void 0}}return t.inherit!==!1?n:{}}function m5(t){const{initial:n,animate:s}=g5(t,x.useContext(Uc));return x.useMemo(()=>({initial:n,animate:s}),[av(n),av(s)])}function av(t){return Array.isArray(t)?t.join(" "):t}const Zg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function b2(t,n,s){for(const r in n)!Mt(n[r])&&!X1(r,s)&&(t[r]=n[r])}function p5({transformTemplate:t},n){return x.useMemo(()=>{const s=Zg();return $g(s,n,t),Object.assign({},s.vars,s.style)},[n])}function y5(t,n){const s=t.style||{},r={};return b2(r,s,t),Object.assign(r,p5(t,n)),r}function b5(t,n){const s={},r=y5(t,n);return t.drag&&t.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(s.tabIndex=0),s.style=r,s}const x2=()=>({...Zg(),attrs:{}});function x5(t,n,s,r){const c=x.useMemo(()=>{const u=x2();return J1(u,n,e2(r),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};b2(u,t.style,t),c.style={...u,...c.style}}return c}const v5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function em(t){return typeof t!="string"||t.includes("-")?!1:!!(v5.indexOf(t)>-1||/[A-Z]/u.test(t))}function w5(t,n,s,{latestValues:r},c,u=!1,d){const g=(d??em(t)?x5:b5)(n,r,c,t),p=f5(n,typeof t=="string",u),y=t!==x.Fragment?{...p,...g,ref:s}:{},{children:b}=n,w=x.useMemo(()=>Mt(b)?b.get():b,[b]);return x.createElement(t,{...y,children:w})}function S5({scrapeMotionValuesFromProps:t,createRenderState:n},s,r,c){return{latestValues:T5(s,r,c,t),renderState:n()}}function T5(t,n,s,r){const c={},u=r(t,{});for(const w in u)c[w]=dc(u[w]);let{initial:d,animate:f}=t;const g=Hc(t),p=F1(t);n&&p&&!g&&t.inherit!==!1&&(d===void 0&&(d=n.initial),f===void 0&&(f=n.animate));let y=s?s.initial===!1:!1;y=y||d===!1;const b=y?f:d;if(b&&typeof b!="boolean"&&!Vc(b)){const w=Array.isArray(b)?b:[b];for(let S=0;S<w.length;S++){const C=Fg(t,w[S]);if(C){const{transitionEnd:T,transition:N,...M}=C;for(const E in M){let j=M[E];if(Array.isArray(j)){const q=y?j.length-1:0;j=j[q]}j!==null&&(c[E]=j)}for(const E in T)c[E]=T[E]}}}return c}const v2=t=>(n,s)=>{const r=x.useContext(Uc),c=x.useContext(qc),u=()=>S5(t,n,r,c);return s?u():kg(u)},k5=v2({scrapeMotionValuesFromProps:Xg,createRenderState:Zg}),C5=v2({scrapeMotionValuesFromProps:t2,createRenderState:x2}),j5=Symbol.for("motionComponentSymbol");function N5(t,n,s){const r=x.useRef(s);x.useInsertionEffect(()=>{r.current=s});const c=x.useRef(null);return x.useCallback(u=>{var f;u&&((f=t.onMount)==null||f.call(t,u)),n&&(u?n.mount(u):n.unmount());const d=r.current;if(typeof d=="function")if(u){const g=d(u);typeof g=="function"&&(c.current=g)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u)},[n])}const w2=x.createContext({});function Jr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function A5(t,n,s,r,c,u){var N,M;const{visualElement:d}=x.useContext(Uc),f=x.useContext(m2),g=x.useContext(qc),p=x.useContext(Jg).reducedMotion,y=x.useRef(null);r=r||f.renderer,!y.current&&r&&(y.current=r(t,{visualState:n,parent:d,props:s,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p,isSVG:u}));const b=y.current,w=x.useContext(w2);b&&!b.projection&&c&&(b.type==="html"||b.type==="svg")&&M5(y.current,s,c,w);const S=x.useRef(!1);x.useInsertionEffect(()=>{b&&S.current&&b.update(s,g)});const C=s[A1],T=x.useRef(!!C&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,C))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,C)));return Gw(()=>{b&&(S.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),T.current&&b.animationState&&b.animationState.animateChanges())}),x.useEffect(()=>{b&&(!T.current&&b.animationState&&b.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,C)}),T.current=!1),b.enteringChildren=void 0)}),b}function M5(t,n,s,r){const{layoutId:c,layout:u,drag:d,dragConstraints:f,layoutScroll:g,layoutRoot:p,layoutCrossfade:y}=n;t.projection=new s(t.latestValues,n["data-framer-portal-id"]?void 0:S2(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||f&&Jr(f),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:g,layoutRoot:p})}function S2(t){if(t)return t.options.allowProjection!==!1?t.projection:S2(t.parent)}function Ih(t,{forwardMotionProps:n=!1,type:s}={},r,c){r&&u5(r);const u=s?s==="svg":em(t),d=u?C5:k5;function f(p,y){let b;const w={...x.useContext(Jg),...p,layoutId:E5(p)},{isStatic:S}=w,C=m5(p),T=d(p,S);if(!S&&Iw){D5();const N=R5(w);b=N.MeasureLayout,C.visualElement=A5(t,T,w,c,N.ProjectionNode,u)}return o.jsxs(Uc.Provider,{value:C,children:[b&&C.visualElement?o.jsx(b,{visualElement:C.visualElement,...w}):null,w5(t,p,N5(T,C.visualElement,y),T,S,n,u)]})}f.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const g=x.forwardRef(f);return g[j5]=t,g}function E5({layoutId:t}){const n=x.useContext(Tg).id;return n&&t!==void 0?n+"-"+t:t}function D5(t,n){x.useContext(m2).strict}function R5(t){const n=p2(),{drag:s,layout:r}=n;if(!s&&!r)return{};const c={...s,...r};return{MeasureLayout:s!=null&&s.isEnabled(t)||r!=null&&r.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function B5(t,n){if(typeof Proxy>"u")return Ih;const s=new Map,r=(u,d)=>Ih(u,d,t,n),c=(u,d)=>r(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?r:(s.has(d)||s.set(d,Ih(d,void 0,t,n)),s.get(d))})}const O5=(t,n)=>n.isSVG??em(t)?new hD(n):new rD(n,{allowProjection:t!==x.Fragment});class P5 extends ts{constructor(n){super(n),n.animationState||(n.animationState=yD(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Vc(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:s}=this.node.prevProps||{};n!==s&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let L5=0;class _5 extends ts{constructor(){super(...arguments),this.id=L5++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===r)return;const c=this.node.animationState.setActive("exit",!n);s&&!n&&c.then(()=>{s(this.id)})}mount(){const{register:n,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const z5={animation:{Feature:P5},exit:{Feature:_5}};function So(t){return{point:{x:t.pageX,y:t.pageY}}}const q5=t=>n=>Kg(n)&&t(n,So(n));function no(t,n,s,r){return uo(t,n,q5(s),r)}const T2=({current:t})=>t?t.ownerDocument.defaultView:null,nv=(t,n)=>Math.abs(t-n);function V5(t,n){const s=nv(t.x,n.x),r=nv(t.y,n.y);return Math.sqrt(s**2+r**2)}const sv=new Set(["auto","scroll"]);class k2{constructor(n,s,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Wh(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,T=V5(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!T)return;const{point:N}=S,{timestamp:M}=Tt;this.history.push({...N,timestamp:M});const{onStart:E,onMove:j}=this.handlers;C||(E&&E(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,S)},this.handlePointerMove=(S,C)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Gh(C,this.transformPagePoint),We.update(this.updatePoint,!0)},this.handlePointerUp=(S,C)=>{this.end();const{onEnd:T,onSessionEnd:N,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=Wh(S.type==="pointercancel"?this.lastMoveEventInfo:Gh(C,this.transformPagePoint),this.history);this.startEvent&&T&&T(S,E),N&&N(S,E)},!Kg(n))return;this.dragSnapToOrigin=u,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=c||window;const g=So(n),p=Gh(g,this.transformPagePoint),{point:y}=p,{timestamp:b}=Tt;this.history=[{...y,timestamp:b}];const{onSessionStart:w}=s;w&&w(n,Wh(p,this.history)),this.removeListeners=xo(no(this.contextWindow,"pointermove",this.handlePointerMove),no(this.contextWindow,"pointerup",this.handlePointerUp),no(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(n){let s=n.parentElement;for(;s;){const r=getComputedStyle(s);(sv.has(r.overflowX)||sv.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const s=this.scrollPositions.get(n);if(!s)return;const r=n===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-s.x,y:c.y-s.y};u.x===0&&u.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),We.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Xn(this.updatePoint)}}function Gh(t,n){return n?{point:n(t.point)}:t}function iv(t,n){return{x:t.x-n.x,y:t.y-n.y}}function Wh({point:t},n){return{point:t,delta:iv(t,C2(n)),offset:iv(t,H5(n)),velocity:U5(n,.1)}}function H5(t){return t[0]}function C2(t){return t[t.length-1]}function U5(t,n){if(t.length<2)return{x:0,y:0};let s=t.length-1,r=null;const c=C2(t);for(;s>=0&&(r=t[s],!(c.timestamp-r.timestamp>fn(n)));)s--;if(!r)return{x:0,y:0};const u=ma(c.timestamp-r.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-r.x)/u,y:(c.y-r.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function F5(t,{min:n,max:s},r){return n!==void 0&&t<n?t=r?$e(n,t,r.min):Math.max(t,n):s!==void 0&&t>s&&(t=r?$e(s,t,r.max):Math.min(t,s)),t}function rv(t,n,s){return{min:n!==void 0?t.min+n:void 0,max:s!==void 0?t.max+s-(t.max-t.min):void 0}}function I5(t,{top:n,left:s,bottom:r,right:c}){return{x:rv(t.x,s,c),y:rv(t.y,n,r)}}function ov(t,n){let s=n.min-t.min,r=n.max-t.max;return n.max-n.min<t.max-t.min&&([s,r]=[r,s]),{min:s,max:r}}function G5(t,n){return{x:ov(t.x,n.x),y:ov(t.y,n.y)}}function W5(t,n){let s=.5;const r=Pt(t),c=Pt(n);return c>r?s=ro(n.min,n.max-r,t.min):r>c&&(s=ro(t.min,t.max-c,n.min)),qa(0,1,s)}function K5(t,n){const s={};return n.min!==void 0&&(s.min=n.min-t.min),n.max!==void 0&&(s.max=n.max-t.min),s}const Ff=.35;function Y5(t=Ff){return t===!1?t=0:t===!0&&(t=Ff),{x:lv(t,"left","right"),y:lv(t,"top","bottom")}}function lv(t,n,s){return{min:cv(t,n),max:cv(t,s)}}function cv(t,n){return typeof t=="number"?t:t[n]||0}const Q5=new WeakMap;class $5{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ht(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=b=>{s?(this.stopAnimation(),this.snapToCursor(So(b).point)):this.pauseAnimation()},d=(b,w)=>{this.stopAnimation();const{drag:S,dragPropagation:C,onDragStart:T}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_E(S),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),fa(M=>{let E=this.getAxisMotionValue(M).get()||0;if(_a.test(E)){const{projection:j}=this.visualElement;if(j&&j.layout){const q=j.layout.layoutBox[M];q&&(E=Pt(q)*(parseFloat(E)/100))}}this.originPoint[M]=E}),T&&We.postRender(()=>T(b,w)),Lf(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},f=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w;const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:T,onDrag:N}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:M}=w;if(C&&this.currentDirection===null){this.currentDirection=X5(M),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",w.point,M),this.updateAxis("y",w.point,M),this.visualElement.render(),N&&N(b,w)},g=(b,w)=>{this.latestPointerEvent=b,this.latestPanInfo=w,this.stop(b,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>fa(b=>{var w;return this.getAnimationState(b)==="paused"&&((w=this.getAxisMotionValue(b).animation)==null?void 0:w.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new k2(n,{onSessionStart:u,onStart:d,onMove:f,onSessionEnd:g,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:T2(this.visualElement),element:this.visualElement.current})}stop(n,s){const r=n||this.latestPointerEvent,c=s||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!r)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:f}=this.getProps();f&&We.postRender(()=>f(r,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:s}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(n,s,r){const{drag:c}=this.getProps();if(!r||!Yl(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+r[n];this.constraints&&this.constraints[n]&&(d=F5(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&Jr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=I5(r.layoutBox,n):this.constraints=!1,this.elastic=Y5(s),c!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&fa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=K5(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:s}=this.getProps();if(!n||!Jr(n))return!1;const r=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=eD(r,c.root,this.visualElement.getTransformPagePoint());let d=G5(c.layout.layoutBox,u);if(s){const f=s(XE(d));this.hasMutatedConstraints=!!f,f&&(d=W1(f))}return d}startAnimation(n){const{drag:s,dragMomentum:r,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:f}=this.getProps(),g=this.constraints||{},p=fa(y=>{if(!Yl(y,s,this.currentDirection))return;let b=g&&g[y]||{};d&&(b={min:0,max:0});const w=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:r?n[y]:0,bounceStiffness:w,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(y,C)});return Promise.all(p).then(f)}startAxisValueAnimation(n,s){const r=this.getAxisMotionValue(n);return Lf(this.visualElement,n),r.start(Ug(n,r,0,s,this.visualElement,!1))}stopAnimation(){fa(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){fa(n=>{var s;return(s=this.getAxisMotionValue(n).animation)==null?void 0:s.pause()})}getAnimationState(n){var s;return(s=this.getAxisMotionValue(n).animation)==null?void 0:s.state}getAxisMotionValue(n){const s=`_drag${n.toUpperCase()}`,r=this.visualElement.getProps(),c=r[s];return c||this.visualElement.getValue(n,(r.initial?r.initial[n]:void 0)||0)}snapToCursor(n){fa(s=>{const{drag:r}=this.getProps();if(!Yl(s,r,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:f}=c.layout.layoutBox[s],g=u.get()||0;u.set(n[s]-$e(d,f,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!Jr(s)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};fa(d=>{const f=this.getAxisMotionValue(d);if(f&&this.constraints!==!1){const g=f.get();c[d]=W5({min:g,max:g},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),fa(d=>{if(!Yl(d,n,null))return;const f=this.getAxisMotionValue(d),{min:g,max:p}=this.constraints[d];f.set($e(g,p,c[d]))})}addListeners(){if(!this.visualElement.current)return;Q5.set(this.visualElement,this);const n=this.visualElement.current,s=no(n,"pointerdown",g=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&!V1(g.target)&&this.start(g)}),r=()=>{const{dragConstraints:g}=this.getProps();Jr(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,u=c.addEventListener("measure",r);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),We.read(r);const d=uo(window,"resize",()=>this.scalePositionWithinConstraints()),f=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:p})=>{this.isDragging&&p&&(fa(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=g[y].translate,b.set(b.get()+g[y].translate))}),this.visualElement.render())}));return()=>{d(),s(),u(),f&&f()}}getProps(){const n=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=Ff,dragMomentum:f=!0}=n;return{...n,drag:s,dragDirectionLock:r,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:f}}}function Yl(t,n,s){return(n===!0||n===t)&&(s===null||s===t)}function X5(t,n=10){let s=null;return Math.abs(t.y)>n?s="y":Math.abs(t.x)>n&&(s="x"),s}class J5 extends ts{constructor(n){super(n),this.removeGroupControls=pa,this.removeListeners=pa,this.controls=new $5(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pa}update(){const{dragControls:n}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};n!==s&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const uv=t=>(n,s)=>{t&&We.postRender(()=>t(n,s))};class Z5 extends ts{constructor(){super(...arguments),this.removePointerDownListener=pa}onPointerDown(n){this.session=new k2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:T2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:s,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:uv(n),onStart:uv(s),onMove:r,onEnd:(u,d)=>{delete this.session,c&&We.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=no(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Kh=!1;class eR extends x.Component{componentDidMount(){const{visualElement:n,layoutGroup:s,switchLayoutGroup:r,layoutId:c}=this.props,{projection:u}=n;u&&(s.group&&s.group.add(u),r&&r.register&&c&&r.register(u),Kh&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),hc.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:s,visualElement:r,drag:c,isPresent:u}=this.props,{projection:d}=r;return d&&(d.isPresent=u,Kh=!0,c||n.layoutDependency!==s||s===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||We.postRender(()=>{const f=d.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Wg.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:c}=n;Kh=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function j2(t){const[n,s]=g2(),r=x.useContext(Tg);return o.jsx(eR,{...t,layoutGroup:r,switchLayoutGroup:x.useContext(w2),isPresent:n,safeToRemove:s})}const tR={pan:{Feature:Z5},drag:{Feature:J5,ProjectionNode:f2,MeasureLayout:j2}};function dv(t,n,s){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,u=r[c];u&&We.postRender(()=>u(n,So(n)))}class aR extends ts{mount(){const{current:n}=this.node;n&&(this.unmount=zE(n,(s,r)=>(dv(this.node,r,"Start"),c=>dv(this.node,c,"End"))))}unmount(){}}class nR extends ts{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xo(uo(this.node.current,"focus",()=>this.onFocus()),uo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hv(t,n,s){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),u=r[c];u&&We.postRender(()=>u(n,So(n)))}class sR extends ts{mount(){const{current:n}=this.node;n&&(this.unmount=HE(n,(s,r)=>(hv(this.node,r,"Start"),(c,{success:u})=>hv(this.node,c,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const If=new WeakMap,Yh=new WeakMap,iR=t=>{const n=If.get(t.target);n&&n(t)},rR=t=>{t.forEach(iR)};function oR({root:t,...n}){const s=t||document;Yh.has(s)||Yh.set(s,{});const r=Yh.get(s),c=JSON.stringify(n);return r[c]||(r[c]=new IntersectionObserver(rR,{root:t,...n})),r[c]}function lR(t,n,s){const r=oR(n);return If.set(t,s),r.observe(t),()=>{If.delete(t),r.unobserve(t)}}const cR={some:0,all:1};class uR extends ts{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:s,margin:r,amount:c="some",once:u}=n,d={root:s?s.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:cR[c]},f=g=>{const{isIntersecting:p}=g;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=p?y:b;w&&w(g)};return lR(this.node.current,d,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:s}=this.node;["amount","margin","root"].some(dR(n,s))&&this.startObserver()}unmount(){}}function dR({viewport:t={}},{viewport:n={}}={}){return s=>t[s]!==n[s]}const hR={inView:{Feature:uR},tap:{Feature:sR},focus:{Feature:nR},hover:{Feature:aR}},fR={layout:{ProjectionNode:f2,MeasureLayout:j2}},gR={...z5,...hR,...tR,...fR},Ge=B5(gR,O5),Si=[{id:"orthodox",name:"Orthodox Tea",tagline:"Traditional Whole-Leaf Teas",description:"Traditionally processed teas that preserve the natural leaf shape, offering complex and layered flavors.",bestFor:["Premium drinking","Aroma lovers","Loose-leaf buyers"],taste:"Complex, smooth, layered flavors",icon:"🌿",leafStyles:[{id:"whole-leaf",name:"Whole Leaf",description:"High aroma, low bitterness. Best for pure tasting, gifting, and slow brewing.",icon:"🍃",grades:[{id:"sftgfop1",code:"SFTGFOP1",fullName:"Special Finest Tippy Golden Flowery Orange Pekoe 1",description:"The pinnacle of tea grading. Contains the finest top leaves and abundant golden tips.",leafSize:"Large, full leaves with tips",appearance:"Twisted leaves with golden tips visible",strength:"light",liquorColor:"Pale gold to bright amber",aroma:"Highly aromatic, floral, muscatel",flavorNotes:["Muscatel","Floral","Honey","Stone fruit"],brewTime:"4-5 minutes",brewSpeed:"slow",useCases:["pure-tasting","gifting"],bestFor:"Luxury & specialty teas, connoisseurs",buyerTip:"Ideal for special occasions. Brew without milk to appreciate full complexity.",category:"orthodox",leafStyle:"whole",qualityTier:5},{id:"ftgfop1",code:"FTGFOP1",fullName:"Finest Tippy Golden Flowery Orange Pekoe 1",description:"Premium grade with excellent tip content and superior flavor profile.",leafSize:"Large, well-formed leaves",appearance:"Long twisted leaves with golden tips",strength:"light",liquorColor:"Bright golden amber",aroma:"Aromatic, fruity, delicate",flavorNotes:["Grape","Floral","Citrus","Sweet"],brewTime:"4-5 minutes",brewSpeed:"slow",useCases:["pure-tasting","gifting","daily-premium"],bestFor:"Premium daily drinking, gift giving",buyerTip:"Great balance of quality and value for everyday luxury.",category:"orthodox",leafStyle:"whole",qualityTier:5},{id:"tgfop",code:"TGFOP",fullName:"Tippy Golden Flowery Orange Pekoe",description:"High-quality grade with good tip content, balanced aroma and body.",leafSize:"Medium-large leaves",appearance:"Twisted leaves with some golden tips",strength:"medium",liquorColor:"Rich amber",aroma:"Balanced, malty, sweet",flavorNotes:["Malt","Honey","Floral","Nutty"],brewTime:"3-4 minutes",brewSpeed:"medium",useCases:["daily-premium","pure-tasting"],bestFor:"Daily premium drinking",buyerTip:"Perfect everyday tea that works black or with a splash of milk.",category:"orthodox",leafStyle:"whole",qualityTier:4},{id:"gfop",code:"GFOP",fullName:"Golden Flowery Orange Pekoe",description:"Quality grade with some tip presence, good for regular premium drinking.",leafSize:"Medium leaves",appearance:"Well-rolled leaves with occasional tips",strength:"medium",liquorColor:"Amber to copper",aroma:"Smooth, malty",flavorNotes:["Malt","Bread","Light fruit"],brewTime:"3-4 minutes",brewSpeed:"medium",useCases:["daily-premium"],bestFor:"Regular premium consumption",buyerTip:"Reliable quality for those who drink tea throughout the day.",category:"orthodox",leafStyle:"whole",qualityTier:4},{id:"fop",code:"FOP",fullName:"Flowery Orange Pekoe",description:"Standard whole leaf grade with pleasant, mild characteristics.",leafSize:"Medium leaves",appearance:"Rolled whole leaves",strength:"light",liquorColor:"Light amber",aroma:"Mild, pleasant",flavorNotes:["Light malt","Grass","Sweet"],brewTime:"3-4 minutes",brewSpeed:"medium",useCases:["daily-premium","pure-tasting"],bestFor:"Mild tea lovers",buyerTip:"Great starter tea for those new to orthodox teas.",category:"orthodox",leafStyle:"whole",qualityTier:3},{id:"op",code:"OP",fullName:"Orange Pekoe",description:"Standard grade whole leaf, larger leaves with lighter, cleaner taste.",leafSize:"Larger leaves",appearance:"Long, wiry leaves",strength:"light",liquorColor:"Light to medium amber",aroma:"Clean, subtle",flavorNotes:["Clean","Light","Slightly sweet"],brewTime:"3-5 minutes",brewSpeed:"slow",useCases:["pure-tasting"],bestFor:"Light tea preference, afternoon tea",buyerTip:"Perfect for those who prefer a gentler, less assertive cup.",category:"orthodox",leafStyle:"whole",qualityTier:3},{id:"pekoe",code:"Pekoe",fullName:"Pekoe",description:"Basic whole leaf grade, short leaves with straightforward taste.",leafSize:"Smaller whole leaves",appearance:"Short, rolled leaves",strength:"light",liquorColor:"Light amber",aroma:"Mild, clean",flavorNotes:["Clean","Simple","Light"],brewTime:"3-4 minutes",brewSpeed:"medium",useCases:["daily-premium"],bestFor:"Everyday light drinking",buyerTip:"Good value entry point into orthodox teas.",category:"orthodox",leafStyle:"whole",qualityTier:2}]},{id:"broken-leaf",name:"Broken Leaf",description:"Stronger, fuller body. Best for regular tea drinkers who want strength with aroma.",icon:"🍂",grades:[{id:"tgbop",code:"TGBOP",fullName:"Tippy Golden Broken Orange Pekoe",description:"Premium broken grade with tips, offering strength with refined character.",leafSize:"Broken pieces with tips",appearance:"Small pieces with visible golden tips",strength:"medium",liquorColor:"Rich copper",aroma:"Strong yet aromatic",flavorNotes:["Malt","Brisk","Honey"],brewTime:"2-3 minutes",brewSpeed:"medium",useCases:["daily-premium","milk-tea"],bestFor:"Premium daily tea with or without milk",buyerTip:"Best of both worlds - strength and sophistication.",category:"orthodox",leafStyle:"broken",qualityTier:4},{id:"gfbop",code:"GFBOP",fullName:"Golden Flowery Broken Orange Pekoe",description:"Quality broken leaf with good body and pleasant aroma.",leafSize:"Even broken pieces",appearance:"Uniform broken leaves",strength:"medium",liquorColor:"Bright copper",aroma:"Balanced, malty",flavorNotes:["Malt","Toast","Smooth"],brewTime:"2-3 minutes",brewSpeed:"medium",useCases:["daily-premium","milk-tea"],bestFor:"Daily drinking with character",buyerTip:"Excellent for morning tea ritual.",category:"orthodox",leafStyle:"broken",qualityTier:3},{id:"fbop",code:"FBOP",fullName:"Flowery Broken Orange Pekoe",description:"Strong broken grade with floral notes, great with milk.",leafSize:"Small broken pieces",appearance:"Uniform small particles",strength:"strong",liquorColor:"Deep copper to red",aroma:"Bold, slightly floral",flavorNotes:["Bold","Brisk","Floral hints"],brewTime:"2-3 minutes",brewSpeed:"fast",useCases:["milk-tea","chai"],bestFor:"Milk tea, bold brews",buyerTip:"Add milk to balance the strength.",category:"orthodox",leafStyle:"broken",qualityTier:3},{id:"bop",code:"BOP",fullName:"Broken Orange Pekoe",description:"Standard broken grade, reliable strength and color.",leafSize:"Small broken pieces",appearance:"Even, small particles",strength:"strong",liquorColor:"Deep reddish copper",aroma:"Strong, straightforward",flavorNotes:["Bold","Malty","Astringent"],brewTime:"2-3 minutes",brewSpeed:"fast",useCases:["milk-tea","chai"],bestFor:"Strong tea with milk",buyerTip:"Classic choice for those who like their tea strong.",category:"orthodox",leafStyle:"broken",qualityTier:2},{id:"bop1",code:"BOP1",fullName:"Broken Orange Pekoe 1",description:"Slightly finer BOP grade, faster brewing with consistent strength.",leafSize:"Fine broken pieces",appearance:"Small, uniform particles",strength:"strong",liquorColor:"Deep copper",aroma:"Robust, clean",flavorNotes:["Strong","Clean","Brisk"],brewTime:"2 minutes",brewSpeed:"fast",useCases:["milk-tea","chai"],bestFor:"Quick strong brew",buyerTip:"Fast and reliable when you need a strong cup quickly.",category:"orthodox",leafStyle:"broken",qualityTier:2}]},{id:"fannings",name:"Fannings",description:"Fast brewing, strong cup. Best for quick brewing and robust flavor.",icon:"🌾",grades:[{id:"gof",code:"GOF",fullName:"Golden Orange Fannings",description:"Premium fannings with some golden character, strong but smooth.",leafSize:"Very small particles",appearance:"Fine, even particles",strength:"strong",liquorColor:"Deep amber to copper",aroma:"Strong, slightly sweet",flavorNotes:["Strong","Smooth","Malty"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["tea-bags","chai"],bestFor:"Quality tea bags, strong brew",buyerTip:"Higher quality fannings for better tea bag experience.",category:"orthodox",leafStyle:"fannings",qualityTier:2},{id:"fof",code:"FOF",fullName:"Flowery Orange Fannings",description:"Standard fannings grade with good color extraction.",leafSize:"Fine particles",appearance:"Small, uniform fannings",strength:"strong",liquorColor:"Quick copper color",aroma:"Bold, direct",flavorNotes:["Bold","Quick","Strong"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["tea-bags","commercial"],bestFor:"Commercial tea bags",buyerTip:"Standard grade for everyday tea bags.",category:"orthodox",leafStyle:"fannings",qualityTier:2}]},{id:"dust",name:"Dust",description:"Maximum strength and color. Best for very strong tea and quick preparation.",icon:"💨",grades:[{id:"opd",code:"OPD",fullName:"Orange Pekoe Dust",description:"Fine dust grade with intense color and strength.",leafSize:"Very fine particles",appearance:"Powder-like consistency",strength:"very-strong",liquorColor:"Instant deep color",aroma:"Intense, bold",flavorNotes:["Intense","Bold","Astringent"],brewTime:"Under 1 minute",brewSpeed:"very-fast",useCases:["commercial","chai"],bestFor:"Commercial use, instant color",buyerTip:"Maximum strength in minimum time.",category:"orthodox",leafStyle:"dust",qualityTier:1},{id:"od",code:"OD",fullName:"Orthodox Dust",description:"Standard dust grade for maximum extraction.",leafSize:"Finest particles",appearance:"Fine powder",strength:"very-strong",liquorColor:"Instant dark",aroma:"Very strong",flavorNotes:["Maximum strength","Dark","Bold"],brewTime:"Under 1 minute",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"Bulk commercial use",buyerTip:"Best for high-volume commercial operations.",category:"orthodox",leafStyle:"dust",qualityTier:1}]}]},{id:"ctc",name:"CTC Tea",tagline:"Crush-Tear-Curl",description:"Machine-processed tea designed for bold strength, fast color, and excellent value.",bestFor:["Masala chai","Milk tea","Tea bags"],taste:"Bold, strong, fast color",icon:"☕",leafStyles:[{id:"broken-ctc",name:"Broken CTC",description:"Standard loose CTC tea with balanced strength and color.",icon:"⚫",grades:[{id:"bp",code:"BP",fullName:"Broken Pekoe",description:"Standard CTC broken grade with good balance.",leafSize:"Small granules",appearance:"Round, dark granules",strength:"strong",liquorColor:"Rich copper-red",aroma:"Bold, malty",flavorNotes:["Malty","Strong","Brisk"],brewTime:"2-3 minutes",brewSpeed:"fast",useCases:["chai","milk-tea"],bestFor:"Everyday chai, milk tea",buyerTip:"Most popular grade for Indian households.",category:"ctc",leafStyle:"broken",qualityTier:3},{id:"bp1",code:"BP1",fullName:"Broken Pekoe 1",description:"Slightly finer BP with enhanced color extraction.",leafSize:"Fine granules",appearance:"Uniform dark balls",strength:"strong",liquorColor:"Deep reddish-brown",aroma:"Bold, direct",flavorNotes:["Strong","Quick color","Bold"],brewTime:"2 minutes",brewSpeed:"fast",useCases:["chai","milk-tea"],bestFor:"Quick chai brewing",buyerTip:"Faster color release than standard BP.",category:"ctc",leafStyle:"broken",qualityTier:3},{id:"bp2",code:"BP2",fullName:"Broken Pekoe 2",description:"Economical CTC grade with reliable performance.",leafSize:"Mixed granules",appearance:"Varied size granules",strength:"medium",liquorColor:"Copper-brown",aroma:"Moderate, clean",flavorNotes:["Balanced","Moderate","Clean"],brewTime:"2-3 minutes",brewSpeed:"medium",useCases:["chai","milk-tea"],bestFor:"Budget-friendly daily tea",buyerTip:"Good value for everyday consumption.",category:"ctc",leafStyle:"broken",qualityTier:2},{id:"bop-ctc",code:"BOP",fullName:"Broken Orange Pekoe (CTC)",description:"Quality CTC with orange pekoe characteristics.",leafSize:"Uniform granules",appearance:"Well-formed CTC granules",strength:"strong",liquorColor:"Bright copper",aroma:"Full, rounded",flavorNotes:["Full-bodied","Brisk","Malty"],brewTime:"2-3 minutes",brewSpeed:"fast",useCases:["chai","milk-tea"],bestFor:"Premium CTC tea",buyerTip:"Higher quality CTC for discerning chai drinkers.",category:"ctc",leafStyle:"broken",qualityTier:3},{id:"bopsm",code:"BOPSM",fullName:"Broken Orange Pekoe Small",description:"Smaller BOP with quick infusion properties.",leafSize:"Small uniform granules",appearance:"Tight, small balls",strength:"strong",liquorColor:"Fast, deep color",aroma:"Quick release, bold",flavorNotes:["Fast","Bold","Strong"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["chai","tea-bags"],bestFor:"Quick brewing needs",buyerTip:"Perfect when you need tea in a hurry.",category:"ctc",leafStyle:"broken",qualityTier:2}]},{id:"fannings-ctc",name:"Fannings",description:"Commercial and retail tea bag grade with fast brewing and bright liquor.",icon:"📦",grades:[{id:"pf",code:"PF",fullName:"Pekoe Fannings",description:"Standard fannings for tea bags with good color.",leafSize:"Fine particles",appearance:"Small, flat particles",strength:"strong",liquorColor:"Quick bright color",aroma:"Direct, strong",flavorNotes:["Quick","Bright","Strong"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["tea-bags","commercial"],bestFor:"Commercial tea bags",buyerTip:"Industry standard for retail tea bags.",category:"ctc",leafStyle:"fannings",qualityTier:2},{id:"pf1",code:"PF1",fullName:"Pekoe Fannings 1",description:"Premium fannings with enhanced quality.",leafSize:"Uniform fine particles",appearance:"Consistent small particles",strength:"strong",liquorColor:"Bright, quick release",aroma:"Clean, bold",flavorNotes:["Clean","Quick","Bold"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["tea-bags"],bestFor:"Quality tea bags",buyerTip:"Better quality tea bag experience.",category:"ctc",leafStyle:"fannings",qualityTier:2},{id:"pf2",code:"PF2",fullName:"Pekoe Fannings 2",description:"Economy fannings grade for bulk commercial use.",leafSize:"Mixed fine particles",appearance:"Variable small particles",strength:"medium",liquorColor:"Good color",aroma:"Moderate",flavorNotes:["Moderate","Reliable","Economical"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["commercial","tea-bags"],bestFor:"Bulk commercial orders",buyerTip:"Cost-effective for high volume needs.",category:"ctc",leafStyle:"fannings",qualityTier:1},{id:"bopf",code:"BOPF",fullName:"Broken Orange Pekoe Fannings",description:"Quality fannings with BOP characteristics.",leafSize:"Fine, uniform particles",appearance:"Small, even particles",strength:"strong",liquorColor:"Bright, vibrant",aroma:"Full, rounded",flavorNotes:["Full","Bright","Quality"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["tea-bags"],bestFor:"Premium tea bags",buyerTip:"Premium option for branded tea bags.",category:"ctc",leafStyle:"fannings",qualityTier:2},{id:"of",code:"OF",fullName:"Orange Fannings",description:"Standard orange fannings for commercial applications.",leafSize:"Small particles",appearance:"Fine, consistent",strength:"strong",liquorColor:"Quick extraction",aroma:"Bold, straightforward",flavorNotes:["Bold","Quick","Standard"],brewTime:"1-2 minutes",brewSpeed:"fast",useCases:["commercial","tea-bags"],bestFor:"Commercial blending",buyerTip:"Reliable choice for blending operations.",category:"ctc",leafStyle:"fannings",qualityTier:2}]},{id:"dust-ctc",name:"Dust",description:"Extra strong grades for hotels, catering, and instant chai. Maximum strength and color.",icon:"⚡",grades:[{id:"pd",code:"PD",fullName:"Pekoe Dust",description:"Standard dust grade with intense extraction.",leafSize:"Very fine powder",appearance:"Fine powder-like",strength:"very-strong",liquorColor:"Instant deep color",aroma:"Intense, bold",flavorNotes:["Intense","Maximum color","Bold"],brewTime:"Under 1 minute",brewSpeed:"very-fast",useCases:["commercial","chai"],bestFor:"Hotels, catering",buyerTip:"Designed for commercial kitchen efficiency.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"pd1",code:"PD1",fullName:"Pekoe Dust 1",description:"Premium dust with slightly better quality.",leafSize:"Fine uniform powder",appearance:"Consistent fine powder",strength:"very-strong",liquorColor:"Instant dark",aroma:"Very strong",flavorNotes:["Very strong","Instant","Dark"],brewTime:"Under 1 minute",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"Premium commercial use",buyerTip:"Higher quality dust for better commercial results.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"d",code:"D",fullName:"Dust",description:"Basic dust grade for maximum extraction.",leafSize:"Finest particles",appearance:"Very fine powder",strength:"very-strong",liquorColor:"Immediate dark color",aroma:"Maximum strength",flavorNotes:["Maximum","Instant","Strongest"],brewTime:"Seconds",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"High-volume commercial",buyerTip:"Maximum efficiency for large-scale operations.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"d1",code:"D1",fullName:"Dust 1",description:"Graded dust with consistent performance.",leafSize:"Uniform fine powder",appearance:"Consistent powder",strength:"very-strong",liquorColor:"Very quick, very dark",aroma:"Intense",flavorNotes:["Consistent","Intense","Quick"],brewTime:"Seconds",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"Bulk commercial orders",buyerTip:"Reliable for consistent large-batch brewing.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"cd",code:"CD",fullName:"Churamani Dust",description:"Specialty dust grade known for exceptional strength.",leafSize:"Extra fine",appearance:"Ultra-fine powder",strength:"very-strong",liquorColor:"Darkest, instant",aroma:"Extremely bold",flavorNotes:["Extreme","Dark","Bold"],brewTime:"Seconds",brewSpeed:"very-fast",useCases:["commercial","chai"],bestFor:"Extra strong chai",buyerTip:"When you need the strongest possible chai.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"fd",code:"FD",fullName:"Fine Dust",description:"Finely processed dust for quick extraction.",leafSize:"Very fine",appearance:"Powdery",strength:"very-strong",liquorColor:"Instant color",aroma:"Strong, direct",flavorNotes:["Quick","Strong","Direct"],brewTime:"Seconds",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"Instant tea preparation",buyerTip:"Fastest possible brewing time.",category:"ctc",leafStyle:"dust",qualityTier:1},{id:"sfd",code:"SFD",fullName:"Super Fine Dust",description:"The finest dust grade for instant extraction.",leafSize:"Ultra-fine",appearance:"Finest powder",strength:"very-strong",liquorColor:"Immediate maximum color",aroma:"Maximum intensity",flavorNotes:["Maximum everything","Instant","Intense"],brewTime:"Seconds",brewSpeed:"very-fast",useCases:["commercial"],bestFor:"Industrial tea preparation",buyerTip:"Maximum extraction in minimum time.",category:"ctc",leafStyle:"dust",qualityTier:1}]}]},{id:"specialty",name:"Specialty & Artisan",tagline:"Premium Craft Teas",description:"Handcrafted specialty teas with unique processing methods, offering distinctive flavor profiles.",bestFor:["Health","Gifting","Premium markets"],taste:"Delicate, nuanced, artisanal",icon:"🌸",leafStyles:[{id:"white-tea",name:"White Tea",description:"Light and delicate with very low caffeine and high antioxidants.",icon:"🤍",grades:[{id:"silver-needle",code:"Silver Needle",fullName:"Silver Needle (Bai Hao Yin Zhen)",description:"The most prized white tea, consisting only of young unopened buds.",leafSize:"Single buds",appearance:"Straight needles covered in white down",strength:"light",liquorColor:"Pale ivory",aroma:"Delicate, floral, cucumber",flavorNotes:["Fresh hay","Melon","Sweet"],brewTime:"5-7 minutes",brewSpeed:"slow",useCases:["pure-tasting","gifting","wellness"],bestFor:"True tea connoisseurs",buyerTip:"Use slightly cooler water to avoid burning the delicate buds.",category:"specialty",leafStyle:"white",qualityTier:5}]},{id:"green-tea",name:"Green Tea",description:"Unoxidized tea that retains its natural green color and health benefits.",icon:"🍵",grades:[{id:"long-jing",code:"Long Jing",fullName:"Dragon Well (Long Jing)",description:"Famous pan-roasted green tea with a characteristic flat leaf.",leafSize:"Small flat leaves",appearance:"Flat, spear-like leaves",strength:"medium",liquorColor:"Pale yellow-green",aroma:"Nutty, toasted soybean",flavorNotes:["Chestnut","Spinach","Sweet"],brewTime:"2-3 minutes",brewSpeed:"medium",useCases:["pure-tasting","wellness"],bestFor:"Morning refreshment",buyerTip:'High grades have a distinct "flat" shape from hand-roasting.',category:"specialty",leafStyle:"green",qualityTier:5}]}]}],Cc={light:"Light",medium:"Medium",strong:"Strong","very-strong":"Very Strong"},jc={slow:"Slow (4-5 min)",medium:"Medium (2-3 min)",fast:"Fast (1-2 min)","very-fast":"Very Fast (<1 min)"},N2={"pure-tasting":"Pure Tasting","daily-premium":"Daily Premium","milk-tea":"Milk Tea",chai:"Masala Chai","tea-bags":"Tea Bags",gifting:"Gifting",wellness:"Wellness",commercial:"Commercial"};function mR(t){return{whole:100,broken:75,fannings:50,dust:25,white:100,green:100,oolong:100}[t]}function A2(t){var n,s,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(n=0;n<c;n++)t[n]&&(s=A2(t[n]))&&(r&&(r+=" "),r+=s)}else for(s in t)t[s]&&(r&&(r+=" "),r+=s);return r}function M2(){for(var t,n,s=0,r="",c=arguments.length;s<c;s++)(t=arguments[s])&&(n=A2(t))&&(r&&(r+=" "),r+=n);return r}const pR=(t,n)=>{const s=new Array(t.length+n.length);for(let r=0;r<t.length;r++)s[r]=t[r];for(let r=0;r<n.length;r++)s[t.length+r]=n[r];return s},yR=(t,n)=>({classGroupId:t,validator:n}),E2=(t=new Map,n=null,s)=>({nextPart:t,validators:n,classGroupId:s}),Nc="-",fv=[],bR="arbitrary..",xR=t=>{const n=wR(t),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return vR(d);const f=d.split(Nc),g=f[0]===""&&f.length>1?1:0;return D2(f,g,n)},getConflictingClassGroupIds:(d,f)=>{if(f){const g=r[d],p=s[d];return g?p?pR(p,g):g:p||fv}return s[d]||fv}}},D2=(t,n,s)=>{if(t.length-n===0)return s.classGroupId;const c=t[n],u=s.nextPart.get(c);if(u){const p=D2(t,n+1,u);if(p)return p}const d=s.validators;if(d===null)return;const f=n===0?t.join(Nc):t.slice(n).join(Nc),g=d.length;for(let p=0;p<g;p++){const y=d[p];if(y.validator(f))return y.classGroupId}},vR=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=t.slice(1,-1),s=n.indexOf(":"),r=n.slice(0,s);return r?bR+r:void 0})(),wR=t=>{const{theme:n,classGroups:s}=t;return SR(s,n)},SR=(t,n)=>{const s=E2();for(const r in t){const c=t[r];tm(c,s,r,n)}return s},tm=(t,n,s,r)=>{const c=t.length;for(let u=0;u<c;u++){const d=t[u];TR(d,n,s,r)}},TR=(t,n,s,r)=>{if(typeof t=="string"){kR(t,n,s);return}if(typeof t=="function"){CR(t,n,s,r);return}jR(t,n,s,r)},kR=(t,n,s)=>{const r=t===""?n:R2(n,t);r.classGroupId=s},CR=(t,n,s,r)=>{if(NR(t)){tm(t(r),n,s,r);return}n.validators===null&&(n.validators=[]),n.validators.push(yR(s,t))},jR=(t,n,s,r)=>{const c=Object.entries(t),u=c.length;for(let d=0;d<u;d++){const[f,g]=c[d];tm(g,R2(n,f),s,r)}},R2=(t,n)=>{let s=t;const r=n.split(Nc),c=r.length;for(let u=0;u<c;u++){const d=r[u];let f=s.nextPart.get(d);f||(f=E2(),s.nextPart.set(d,f)),s=f}return s},NR=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,AR=t=>{if(t<1)return{get:()=>{},set:()=>{}};let n=0,s=Object.create(null),r=Object.create(null);const c=(u,d)=>{s[u]=d,n++,n>t&&(n=0,r=s,s=Object.create(null))};return{get(u){let d=s[u];if(d!==void 0)return d;if((d=r[u])!==void 0)return c(u,d),d},set(u,d){u in s?s[u]=d:c(u,d)}}},Gf="!",gv=":",MR=[],mv=(t,n,s,r,c)=>({modifiers:t,hasImportantModifier:n,baseClassName:s,maybePostfixModifierPosition:r,isExternal:c}),ER=t=>{const{prefix:n,experimentalParseClassName:s}=t;let r=c=>{const u=[];let d=0,f=0,g=0,p;const y=c.length;for(let T=0;T<y;T++){const N=c[T];if(d===0&&f===0){if(N===gv){u.push(c.slice(g,T)),g=T+1;continue}if(N==="/"){p=T;continue}}N==="["?d++:N==="]"?d--:N==="("?f++:N===")"&&f--}const b=u.length===0?c:c.slice(g);let w=b,S=!1;b.endsWith(Gf)?(w=b.slice(0,-1),S=!0):b.startsWith(Gf)&&(w=b.slice(1),S=!0);const C=p&&p>g?p-g:void 0;return mv(u,S,w,C)};if(n){const c=n+gv,u=r;r=d=>d.startsWith(c)?u(d.slice(c.length)):mv(MR,!1,d,void 0,!0)}if(s){const c=r;r=u=>s({className:u,parseClassName:c})}return r},DR=t=>{const n=new Map;return t.orderSensitiveModifiers.forEach((s,r)=>{n.set(s,1e6+r)}),s=>{const r=[];let c=[];for(let u=0;u<s.length;u++){const d=s[u],f=d[0]==="[",g=n.has(d);f||g?(c.length>0&&(c.sort(),r.push(...c),c=[]),r.push(d)):c.push(d)}return c.length>0&&(c.sort(),r.push(...c)),r}},RR=t=>({cache:AR(t.cacheSize),parseClassName:ER(t),sortModifiers:DR(t),...xR(t)}),BR=/\s+/,OR=(t,n)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:c,sortModifiers:u}=n,d=[],f=t.trim().split(BR);let g="";for(let p=f.length-1;p>=0;p-=1){const y=f[p],{isExternal:b,modifiers:w,hasImportantModifier:S,baseClassName:C,maybePostfixModifierPosition:T}=s(y);if(b){g=y+(g.length>0?" "+g:g);continue}let N=!!T,M=r(N?C.substring(0,T):C);if(!M){if(!N){g=y+(g.length>0?" "+g:g);continue}if(M=r(C),!M){g=y+(g.length>0?" "+g:g);continue}N=!1}const E=w.length===0?"":w.length===1?w[0]:u(w).join(":"),j=S?E+Gf:E,q=j+M;if(d.indexOf(q)>-1)continue;d.push(q);const P=c(M,N);for(let G=0;G<P.length;++G){const _=P[G];d.push(j+_)}g=y+(g.length>0?" "+g:g)}return g},PR=(...t)=>{let n=0,s,r,c="";for(;n<t.length;)(s=t[n++])&&(r=B2(s))&&(c&&(c+=" "),c+=r);return c},B2=t=>{if(typeof t=="string")return t;let n,s="";for(let r=0;r<t.length;r++)t[r]&&(n=B2(t[r]))&&(s&&(s+=" "),s+=n);return s},LR=(t,...n)=>{let s,r,c,u;const d=g=>{const p=n.reduce((y,b)=>b(y),t());return s=RR(p),r=s.cache.get,c=s.cache.set,u=f,f(g)},f=g=>{const p=r(g);if(p)return p;const y=OR(g,s);return c(g,y),y};return u=d,(...g)=>u(PR(...g))},_R=[],dt=t=>{const n=s=>s[t]||_R;return n.isThemeGetter=!0,n},O2=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,P2=/^\((?:(\w[\w-]*):)?(.+)\)$/i,zR=/^\d+\/\d+$/,qR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,HR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,UR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,FR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=t=>zR.test(t),Ce=t=>!!t&&!Number.isNaN(Number(t)),Gn=t=>!!t&&Number.isInteger(Number(t)),Qh=t=>t.endsWith("%")&&Ce(t.slice(0,-1)),un=t=>qR.test(t),IR=()=>!0,GR=t=>VR.test(t)&&!HR.test(t),L2=()=>!1,WR=t=>UR.test(t),KR=t=>FR.test(t),YR=t=>!le(t)&&!ce(t),QR=t=>Ki(t,q2,L2),le=t=>O2.test(t),ks=t=>Ki(t,V2,GR),$h=t=>Ki(t,eB,Ce),pv=t=>Ki(t,_2,L2),$R=t=>Ki(t,z2,KR),Ql=t=>Ki(t,H2,WR),ce=t=>P2.test(t),$r=t=>Yi(t,V2),XR=t=>Yi(t,tB),yv=t=>Yi(t,_2),JR=t=>Yi(t,q2),ZR=t=>Yi(t,z2),$l=t=>Yi(t,H2,!0),Ki=(t,n,s)=>{const r=O2.exec(t);return r?r[1]?n(r[1]):s(r[2]):!1},Yi=(t,n,s=!1)=>{const r=P2.exec(t);return r?r[1]?n(r[1]):s:!1},_2=t=>t==="position"||t==="percentage",z2=t=>t==="image"||t==="url",q2=t=>t==="length"||t==="size"||t==="bg-size",V2=t=>t==="length",eB=t=>t==="number",tB=t=>t==="family-name",H2=t=>t==="shadow",aB=()=>{const t=dt("color"),n=dt("font"),s=dt("text"),r=dt("font-weight"),c=dt("tracking"),u=dt("leading"),d=dt("breakpoint"),f=dt("container"),g=dt("spacing"),p=dt("radius"),y=dt("shadow"),b=dt("inset-shadow"),w=dt("text-shadow"),S=dt("drop-shadow"),C=dt("blur"),T=dt("perspective"),N=dt("aspect"),M=dt("ease"),E=dt("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...q(),ce,le],G=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],H=()=>[ce,le,g],J=()=>[Ti,"full","auto",...H()],se=()=>[Gn,"none","subgrid",ce,le],re=()=>["auto",{span:["full",Gn,ce,le]},Gn,ce,le],he=()=>[Gn,"auto",ce,le],ve=()=>["auto","min","max","fr",ce,le],U=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],z=()=>["start","end","center","stretch","center-safe","end-safe"],A=()=>["auto",...H()],D=()=>[Ti,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],B=()=>[t,ce,le],Q=()=>[...q(),yv,pv,{position:[ce,le]}],ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",JR,QR,{size:[ce,le]}],K=()=>[Qh,$r,ks],ee=()=>["","none","full",p,ce,le],te=()=>["",Ce,$r,ks],ge=()=>["solid","dashed","dotted","double"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ae=()=>[Ce,Qh,yv,pv],be=()=>["","none",C,ce,le],Se=()=>["none",Ce,ce,le],je=()=>["none",Ce,ce,le],Ne=()=>[Ce,ce,le],Ae=()=>[Ti,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[un],breakpoint:[un],color:[IR],container:[un],"drop-shadow":[un],ease:["in","out","in-out"],font:[YR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[un],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[un],shadow:[un],spacing:["px",Ce],text:[un],"text-shadow":[un],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ti,le,ce,N]}],container:["container"],columns:[{columns:[Ce,le,ce,f]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:J()}],"inset-x":[{"inset-x":J()}],"inset-y":[{"inset-y":J()}],start:[{start:J()}],end:[{end:J()}],top:[{top:J()}],right:[{right:J()}],bottom:[{bottom:J()}],left:[{left:J()}],visibility:["visible","invisible","collapse"],z:[{z:[Gn,"auto",ce,le]}],basis:[{basis:[Ti,"full","auto",f,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ce,Ti,"auto","initial","none",le]}],grow:[{grow:["",Ce,ce,le]}],shrink:[{shrink:["",Ce,ce,le]}],order:[{order:[Gn,"first","last","none",ce,le]}],"grid-cols":[{"grid-cols":se()}],"col-start-end":[{col:re()}],"col-start":[{"col-start":he()}],"col-end":[{"col-end":he()}],"grid-rows":[{"grid-rows":se()}],"row-start-end":[{row:re()}],"row-start":[{"row-start":he()}],"row-end":[{"row-end":he()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ve()}],"auto-rows":[{"auto-rows":ve()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...U(),"normal"]}],"justify-items":[{"justify-items":[...z(),"normal"]}],"justify-self":[{"justify-self":["auto",...z()]}],"align-content":[{content:["normal",...U()]}],"align-items":[{items:[...z(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...z(),{baseline:["","last"]}]}],"place-content":[{"place-content":U()}],"place-items":[{"place-items":[...z(),"baseline"]}],"place-self":[{"place-self":["auto",...z()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],w:[{w:[f,"screen",...D()]}],"min-w":[{"min-w":[f,"screen","none",...D()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[d]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",s,$r,ks]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ce,$h]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Qh,le]}],"font-family":[{font:[XR,le,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ce,le]}],"line-clamp":[{"line-clamp":[Ce,"none",ce,$h]}],leading:[{leading:[u,...H()]}],"list-image":[{"list-image":["none",ce,le]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ce,le]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ge(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ce,"from-font","auto",ce,ks]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[Ce,"auto",ce,le]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ce,le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ce,le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Q()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Gn,ce,le],radial:["",ce,le],conic:[Gn,ce,le]},ZR,$R]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:K()}],"gradient-via-pos":[{via:K()}],"gradient-to-pos":[{to:K()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:ee()}],"rounded-s":[{"rounded-s":ee()}],"rounded-e":[{"rounded-e":ee()}],"rounded-t":[{"rounded-t":ee()}],"rounded-r":[{"rounded-r":ee()}],"rounded-b":[{"rounded-b":ee()}],"rounded-l":[{"rounded-l":ee()}],"rounded-ss":[{"rounded-ss":ee()}],"rounded-se":[{"rounded-se":ee()}],"rounded-ee":[{"rounded-ee":ee()}],"rounded-es":[{"rounded-es":ee()}],"rounded-tl":[{"rounded-tl":ee()}],"rounded-tr":[{"rounded-tr":ee()}],"rounded-br":[{"rounded-br":ee()}],"rounded-bl":[{"rounded-bl":ee()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ge(),"hidden","none"]}],"divide-style":[{divide:[...ge(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...ge(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ce,ce,le]}],"outline-w":[{outline:["",Ce,$r,ks]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",y,$l,Ql]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",b,$l,Ql]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[Ce,ks]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",w,$l,Ql]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[Ce,ce,le]}],"mix-blend":[{"mix-blend":[...pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":ae()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":ae()}],"mask-image-t-to-pos":[{"mask-t-to":ae()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":ae()}],"mask-image-r-to-pos":[{"mask-r-to":ae()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":ae()}],"mask-image-b-to-pos":[{"mask-b-to":ae()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":ae()}],"mask-image-l-to-pos":[{"mask-l-to":ae()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":ae()}],"mask-image-x-to-pos":[{"mask-x-to":ae()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":ae()}],"mask-image-y-to-pos":[{"mask-y-to":ae()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[ce,le]}],"mask-image-radial-from-pos":[{"mask-radial-from":ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":ae()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[Ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":ae()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Q()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ce,le]}],filter:[{filter:["","none",ce,le]}],blur:[{blur:be()}],brightness:[{brightness:[Ce,ce,le]}],contrast:[{contrast:[Ce,ce,le]}],"drop-shadow":[{"drop-shadow":["","none",S,$l,Ql]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",Ce,ce,le]}],"hue-rotate":[{"hue-rotate":[Ce,ce,le]}],invert:[{invert:["",Ce,ce,le]}],saturate:[{saturate:[Ce,ce,le]}],sepia:[{sepia:["",Ce,ce,le]}],"backdrop-filter":[{"backdrop-filter":["","none",ce,le]}],"backdrop-blur":[{"backdrop-blur":be()}],"backdrop-brightness":[{"backdrop-brightness":[Ce,ce,le]}],"backdrop-contrast":[{"backdrop-contrast":[Ce,ce,le]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ce,ce,le]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ce,ce,le]}],"backdrop-invert":[{"backdrop-invert":["",Ce,ce,le]}],"backdrop-opacity":[{"backdrop-opacity":[Ce,ce,le]}],"backdrop-saturate":[{"backdrop-saturate":[Ce,ce,le]}],"backdrop-sepia":[{"backdrop-sepia":["",Ce,ce,le]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ce,le]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ce,"initial",ce,le]}],ease:[{ease:["linear","initial",M,ce,le]}],delay:[{delay:[Ce,ce,le]}],animate:[{animate:["none",E,ce,le]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[T,ce,le]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:Se()}],"rotate-x":[{"rotate-x":Se()}],"rotate-y":[{"rotate-y":Se()}],"rotate-z":[{"rotate-z":Se()}],scale:[{scale:je()}],"scale-x":[{"scale-x":je()}],"scale-y":[{"scale-y":je()}],"scale-z":[{"scale-z":je()}],"scale-3d":["scale-3d"],skew:[{skew:Ne()}],"skew-x":[{"skew-x":Ne()}],"skew-y":[{"skew-y":Ne()}],transform:[{transform:[ce,le,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ae()}],"translate-x":[{"translate-x":Ae()}],"translate-y":[{"translate-y":Ae()}],"translate-z":[{"translate-z":Ae()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ce,le]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ce,le]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[Ce,$r,ks,$h]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},nB=LR(aB);function xe(...t){return nB(M2(t))}const sB={orthodox:{bg:"bg-orthodox",border:"border-orthodox",text:"text-orthodox",lightBg:"bg-orthodox-light"},ctc:{bg:"bg-ctc",border:"border-ctc",text:"text-ctc",lightBg:"bg-ctc-light"},specialty:{bg:"bg-specialty",border:"border-specialty",text:"text-specialty",lightBg:"bg-specialty-light"}};function iB({category:t,onSelectGrade:n,selectedGrade:s,isCompareMode:r,compareGrades:c,onToggleCompare:u}){const[d,f]=x.useState(!1),g=sB[t.id];return o.jsxs("div",{className:"tree-node",children:[o.jsxs(Ge.button,{onClick:()=>f(!d),className:xe("w-full flex items-center gap-4 p-5 rounded-xl transition-all duration-300",g.lightBg,"border-2",d?g.border:"border-transparent","hover:shadow-tea-medium group"),whileHover:{scale:1.01},whileTap:{scale:.99},children:[o.jsx(Ge.div,{animate:{rotate:d?90:0},transition:{duration:.2},className:xe("p-2 rounded-lg",g.bg,"text-white"),children:o.jsx(Nw,{className:"w-5 h-5"})}),o.jsx("span",{className:"text-3xl",children:t.icon}),o.jsxs("div",{className:"flex-1 text-left",children:[o.jsx("h3",{className:xe("text-xl font-serif font-semibold",g.text),children:t.name}),o.jsx("p",{className:"text-sm text-stone-500",children:t.tagline})]}),o.jsx("div",{className:"hidden sm:flex items-center gap-2 text-xs",children:t.bestFor.slice(0,2).map((p,y)=>o.jsx("span",{className:xe("px-2 py-1 rounded-full",g.lightBg,g.text),children:p},y))})]}),o.jsx(Pi,{children:d&&o.jsx(Ge.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:o.jsxs("div",{className:"pt-4 pl-6 sm:pl-12 space-y-4",children:[o.jsxs(Ge.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.1},className:"p-4 bg-white rounded-lg border border-stone-200",children:[o.jsx("p",{className:"text-sm text-stone-600",children:t.description}),o.jsxs("p",{className:"mt-2 text-sm",children:[o.jsx("span",{className:"font-medium text-stone-900",children:"Taste:"})," ",o.jsx("span",{className:"text-stone-700",children:t.taste})]})]}),t.leafStyles.map((p,y)=>o.jsx(rB,{style:p,category:t.id,colors:g,onSelectGrade:n,selectedGrade:s,isCompareMode:r,compareGrades:c,onToggleCompare:u,delay:.15+y*.05},p.id))]})})})]})}function rB({style:t,category:n,colors:s,onSelectGrade:r,selectedGrade:c,isCompareMode:u,compareGrades:d,onToggleCompare:f,delay:g}){const[p,y]=x.useState(!1);return o.jsxs(Ge.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:g},children:[o.jsxs("button",{onClick:()=>y(!p),className:xe("w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-200","bg-white hover:bg-stone-50 border border-stone-200",p&&"border-stone-300 shadow-sm"),children:[o.jsx(Ge.div,{animate:{rotate:p?90:0},transition:{duration:.2},className:"text-stone-400",children:o.jsx(Nw,{className:"w-4 h-4"})}),o.jsx("span",{className:"text-xl",children:t.icon}),o.jsxs("div",{className:"flex-1 text-left",children:[o.jsx("h4",{className:"font-medium text-stone-900",children:t.name}),o.jsx("p",{className:"text-xs text-stone-500 line-clamp-1",children:t.description})]}),o.jsxs("span",{className:"text-xs text-stone-400",children:[t.grades.length," grades"]})]}),o.jsx(Pi,{children:p&&o.jsx(Ge.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden",children:o.jsx("div",{className:"pt-2 pl-6 sm:pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",children:t.grades.map((b,w)=>{const S=(c==null?void 0:c.id)===b.id,C=d.some(T=>T.id===b.id);return o.jsxs(Ge.button,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{delay:w*.03},onClick:()=>{u?f(b):r(b)},className:xe("flex items-center gap-2 p-3 rounded-lg text-left transition-all duration-200","border hover:shadow-tea-card",S&&!u&&xe(s.lightBg,s.border),C&&"ring-2 ring-brand-gold",!S&&!C&&"bg-background border-stone-200 hover:border-stone-300"),children:[o.jsx(Ds,{className:xe("w-4 h-4 flex-shrink-0",s.text)}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("span",{className:"font-mono font-medium text-sm text-stone-900",children:b.code}),o.jsx("div",{className:"flex items-center gap-1 mt-0.5",children:o.jsx(oB,{tier:b.qualityTier,color:s.text})})]}),u&&C&&o.jsx("span",{className:"text-xs bg-brand-gold text-white px-2 py-0.5 rounded-full",children:"✓"})]},b.id)})})})})]})}function oB({tier:t,color:n}){return o.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(s=>o.jsx("div",{className:xe("w-1.5 h-1.5 rounded-full",s<=t?n.replace("text-","bg-"):"bg-stone-200")},s))})}const lB="/assets/tea-orthodox-broken-DEmjT4Ad.jpg",bv="/assets/tea-fannings-vXwJ5IAj.jpg",cB="/assets/tea-white-crSpqgwY.jpg",uB="/assets/tea-green-Dp7mhvAO.jpg",dB="/assets/tea-oolong-C9sH8B-t.jpg";function U2(t,n){if(t==="specialty")switch(n){case"white":return cB;case"green":return uB;case"oolong":return dB;default:return lc}if(t==="ctc")switch(n){case"dust":return Sf;case"fannings":return bv;default:return Hw}switch(n){case"whole":return lc;case"broken":return lB;case"fannings":return bv;case"dust":return Sf;default:return lc}}function xv(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function To(...t){return n=>{let s=!1;const r=t.map(c=>{const u=xv(c,n);return!s&&typeof u=="function"&&(s=!0),u});if(s)return()=>{for(let c=0;c<r.length;c++){const u=r[c];typeof u=="function"?u():xv(t[c],null)}}}}function ft(...t){return x.useCallback(To(...t),t)}var hB=Symbol.for("react.lazy"),Ac=rg[" use ".trim().toString()];function fB(t){return typeof t=="object"&&t!==null&&"then"in t}function F2(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===hB&&"_payload"in t&&fB(t._payload)}function am(t){const n=mB(t),s=x.forwardRef((r,c)=>{let{children:u,...d}=r;F2(u)&&typeof Ac=="function"&&(u=Ac(u._payload));const f=x.Children.toArray(u),g=f.find(yB);if(g){const p=g.props.children,y=f.map(b=>b===g?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:b);return o.jsx(n,{...d,ref:c,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return o.jsx(n,{...d,ref:c,children:u})});return s.displayName=`${t}.Slot`,s}var gB=am("Slot");function mB(t){const n=x.forwardRef((s,r)=>{let{children:c,...u}=s;if(F2(c)&&typeof Ac=="function"&&(c=Ac(c._payload)),x.isValidElement(c)){const d=xB(c),f=bB(u,c.props);return c.type!==x.Fragment&&(f.ref=r?To(r,d):d),x.cloneElement(c,f)}return x.Children.count(c)>1?x.Children.only(null):null});return n.displayName=`${t}.SlotClone`,n}var pB=Symbol("radix.slottable");function yB(t){return x.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===pB}function bB(t,n){const s={...n};for(const r in n){const c=t[r],u=n[r];/^on[A-Z]/.test(r)?c&&u?s[r]=(...f)=>{const g=u(...f);return c(...f),g}:c&&(s[r]=c):r==="style"?s[r]={...c,...u}:r==="className"&&(s[r]=[c,u].filter(Boolean).join(" "))}return{...t,...s}}function xB(t){var r,c;let n=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?t.ref:(n=(c=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:c.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}const vv=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,wv=M2,nm=(t,n)=>s=>{var r;if((n==null?void 0:n.variants)==null)return wv(t,s==null?void 0:s.class,s==null?void 0:s.className);const{variants:c,defaultVariants:u}=n,d=Object.keys(c).map(p=>{const y=s==null?void 0:s[p],b=u==null?void 0:u[p];if(y===null)return null;const w=vv(y)||vv(b);return c[p][w]}),f=s&&Object.entries(s).reduce((p,y)=>{let[b,w]=y;return w===void 0||(p[b]=w),p},{}),g=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((p,y)=>{let{class:b,className:w,...S}=y;return Object.entries(S).every(C=>{let[T,N]=C;return Array.isArray(N)?N.includes({...u,...f}[T]):{...u,...f}[T]===N})?[...p,b,w]:p},[]);return wv(t,d,g,s==null?void 0:s.class,s==null?void 0:s.className)},vB=nm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-tea-600 text-white hover:bg-tea-700",destructive:"bg-red-600 text-white hover:bg-red-700",outline:"border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900",secondary:"bg-stone-100 text-stone-900 hover:bg-stone-200",ghost:"hover:bg-stone-100 hover:text-stone-900",link:"text-tea-600 underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ct=x.forwardRef(({className:t,variant:n,size:s,asChild:r=!1,...c},u)=>{const d=r?gB:"button";return o.jsx(d,{className:xe(vB({variant:n,size:s,className:t})),ref:u,...c})});Ct.displayName="Button";var wB=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],SB=wB.reduce((t,n)=>{const s=am(`Primitive.${n}`),r=x.forwardRef((c,u)=>{const{asChild:d,...f}=c,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(g,{...f,ref:u})});return r.displayName=`Primitive.${n}`,{...t,[n]:r}},{}),TB="Separator",Sv="horizontal",kB=["horizontal","vertical"],I2=x.forwardRef((t,n)=>{const{decorative:s,orientation:r=Sv,...c}=t,u=CB(r)?r:Sv,f=s?{role:"none"}:{"aria-orientation":u==="vertical"?u:void 0,role:"separator"};return o.jsx(SB.div,{"data-orientation":u,...f,...c,ref:n})});I2.displayName=TB;function CB(t){return kB.includes(t)}var G2=I2;const sm=x.forwardRef(({className:t,orientation:n="horizontal",decorative:s=!0,...r},c)=>o.jsx(G2,{ref:c,decorative:s,orientation:n,className:xe("shrink-0 bg-stone-200",n==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...r}));sm.displayName=G2.displayName;const jB={orthodox:{bg:"bg-orthodox",text:"text-orthodox",lightBg:"bg-orthodox-light",gradient:"from-orthodox/20 to-orthodox/5"},ctc:{bg:"bg-ctc",text:"text-ctc",lightBg:"bg-ctc-light",gradient:"from-ctc/20 to-ctc/5"},specialty:{bg:"bg-specialty",text:"text-specialty",lightBg:"bg-specialty-light",gradient:"from-specialty/20 to-specialty/5"}},NB={light:"bg-green-50 text-green-700 border-green-100",medium:"bg-yellow-50 text-yellow-700 border-yellow-100",strong:"bg-orange-50 text-orange-700 border-orange-100","very-strong":"bg-red-50 text-red-700 border-red-100"},Xh={orthodox:{temp:"90-95°C",time:"3-5 mins",ratio:"2g / 150ml"},ctc:{temp:"100°C",time:"2-3 mins",ratio:"2.5g / 150ml"},specialty:{temp:"80-85°C",time:"2-4 mins",ratio:"3g / 150ml"}},W2={Tippy:"High concentration of unopened leaf buds (tips), indicating superior quality.",Brisk:"A lively, refreshing quality in the tea liquor, as opposed to flat or soft.",Muscatel:"A distinctive grape-like flavor found in premium Darjeeling teas.",Body:"The weight and texture of the tea in the mouth.",Liquor:"The liquid resulting from brewing tea.",Aroma:"The fragrance of the brewed tea.",Grainy:"A desirable texture in CTC tea, indicating uniform and well-processed pellets.",Bloom:"A sign of good sorting and manufacturing, giving the dry leaf a healthy luster."};function AB({term:t}){const n=W2[t];return n?o.jsxs("span",{className:"group relative inline-block",children:[o.jsx("span",{className:"cursor-help border-b border-dotted border-brand-gold/50 text-stone-900 font-medium",children:t}),o.jsxs("span",{className:"pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 leading-tight shadow-xl",children:[n,o.jsx("span",{className:"absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-900"})]})]}):o.jsx("span",{children:t})}function MB(t){const n=Object.keys(W2).sort((c,u)=>u.length-c.length),s=new RegExp(`\\b(${n.join("|")})\\b`,"gi");return t.split(s).map((c,u)=>{const d=n.find(f=>f.toLowerCase()===c.toLowerCase());return d?o.jsx(tt.Fragment,{children:o.jsx(AB,{term:d})},u):c})}function Tv({grade:t,onClose:n}){const[s,r]=tt.useState(!1),c=jB[t.category],u=mR(t.leafStyle),d=U2(t.category,t.leafStyle);return o.jsxs(o.Fragment,{children:[o.jsxs(Ge.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},className:"info-panel h-full flex flex-col bg-white",children:[o.jsx("div",{className:"relative group overflow-hidden bg-stone-100 border-b border-stone-200",children:o.jsxs("div",{className:"relative aspect-[4/3] sm:aspect-video overflow-hidden cursor-zoom-in",onClick:()=>r(!0),children:[o.jsx(Ge.img,{initial:{scale:1.1},animate:{scale:1},transition:{duration:1.5},src:d,alt:`${t.fullName} tea leaves`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),o.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100",children:o.jsx("div",{className:"bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2",children:"Full Inspection Mode"})}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"}),o.jsx(Ct,{variant:"ghost",size:"icon",onClick:n,className:"absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white border border-stone-200 z-20 shadow-sm",children:o.jsx(mn,{className:"w-5 h-5"})}),o.jsx("div",{className:"absolute bottom-4 left-4 z-10",children:o.jsxs("span",{className:xe("text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-md",c.bg,"text-white"),children:[t.category," • ",t.leafStyle]})})]})}),o.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:[o.jsxs("div",{className:"px-6 py-8",children:[o.jsxs("div",{className:"flex items-end justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-4xl font-serif font-black text-stone-900 leading-none",children:t.code}),o.jsxs("p",{className:"text-base text-stone-500 font-bold mt-2 flex items-center gap-2",children:[o.jsx(Ds,{className:xe("w-4 h-4",c.text)}),t.fullName]})]}),o.jsxs("div",{className:"flex flex-col items-end gap-1.5",children:[o.jsx("span",{className:"text-[10px] text-stone-400 font-black uppercase tracking-tighter",children:"Quality Tier"}),o.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(f=>o.jsx(yc,{className:xe("w-4 h-4",f<=t.qualityTier?"text-brand-gold fill-brand-gold":"text-stone-200 fill-stone-100")},f))})]})]}),["whole","broken","fannings","dust"].includes(t.leafStyle)&&o.jsxs("div",{className:"mt-8",children:[o.jsxs("div",{className:"flex items-center justify-between text-[10px] text-stone-400 mb-2 font-black uppercase tracking-widest",children:[o.jsx("span",{children:"Leaf Integrity"}),o.jsx("span",{className:xe("px-2 py-0.5 rounded bg-stone-100",c.text),children:t.leafStyle})]}),o.jsx("div",{className:"progression-bar h-2.5 bg-stone-100 rounded-full overflow-hidden",children:o.jsx(Ge.div,{initial:{width:0},animate:{width:`${u}%`},transition:{duration:.8,ease:"circOut"},className:xe("h-full",c.bg)})})]})]}),o.jsx(sm,{className:"bg-stone-100"}),o.jsxs("div",{className:"px-6 py-8 space-y-10",children:[o.jsx("div",{children:o.jsxs("p",{className:"text-sm text-stone-700 leading-relaxed italic",children:['"',MB(t.description),'"']})}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsx(Xl,{icon:o.jsx(Ds,{className:"w-4 h-4"}),label:"Leaf Size",value:t.leafSize}),o.jsx(Xl,{icon:o.jsx(Mw,{className:"w-4 h-4"}),label:"Color",value:t.liquorColor}),o.jsx(Xl,{icon:o.jsx(Pw,{className:"w-4 h-4"}),label:"Aroma",value:t.aroma}),o.jsx(Xl,{icon:o.jsx(_c,{className:"w-4 h-4"}),label:"Brew Time",value:t.brewTime})]}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsxs("span",{className:xe("px-3 py-1.5 rounded-full text-xs font-bold border",NB[t.strength]),children:[Cc[t.strength]," Body"]}),o.jsx("span",{className:"px-3 py-1.5 rounded-full text-xs font-bold bg-stone-100 text-stone-600 border border-stone-200",children:jc[t.brewSpeed]})]}),o.jsxs("div",{children:[o.jsxs("h4",{className:"text-sm font-bold text-stone-900 mb-3 flex items-center gap-2",children:[o.jsx(bg,{className:"w-4 h-4 text-stone-400"}),"Flavor Profile"]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:t.flavorNotes.map((f,g)=>o.jsx("span",{className:xe("px-3 py-1 rounded-full text-xs font-medium",c.lightBg,c.text,"border border-current/10"),children:f},g))})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-bold text-stone-900 mb-3",children:"Usage Recommendation"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:t.useCases.map(f=>o.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-stone-50 text-stone-600 border border-stone-200",children:N2[f]},f))}),o.jsx("p",{className:"text-sm text-stone-500 mt-3 leading-relaxed",children:t.bestFor})]}),o.jsx("div",{className:xe("p-5 rounded-xl border","bg-stone-50 border-stone-200"),children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:xe("p-2 rounded-lg",c.bg,"text-white shadow-sm"),children:o.jsx(oA,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsx("h4",{className:xe("text-xs font-bold uppercase tracking-wider mb-1",c.text),children:"Expert Buyer Tip"}),o.jsx("p",{className:"text-sm text-stone-800 leading-relaxed",children:t.buyerTip})]})]})}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h4",{className:"text-sm font-bold text-stone-900 flex items-center gap-2",children:[o.jsx(Wb,{className:"w-4 h-4 text-stone-400"}),"Professional Brewing Guide"]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsx(Jh,{icon:o.jsx(Wb,{className:"w-3 h-3"}),label:"Temp",value:Xh[t.category].temp}),o.jsx(Jh,{icon:o.jsx(qA,{className:"w-3 h-3"}),label:"Time",value:Xh[t.category].time}),o.jsx(Jh,{icon:o.jsx(X3,{className:"w-3 h-3"}),label:"Ratio",value:Xh[t.category].ratio})]})]})]})]}),o.jsxs("div",{className:"px-6 py-4 bg-white border-t border-stone-100 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]",children:[o.jsxs(Ct,{className:"w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-xl shadow-lg shadow-green-100 flex items-center justify-center gap-2 group transition-all",onClick:()=>{const f=encodeURIComponent(`Hello Manish Tea Traders, I am interested in [${t.code}] - ${t.fullName}. I saw this in your Tea Grade Explorer. Please provide pricing and sample details.`);window.open(`https://wa.me/917001958588?text=${f}`,"_blank")},children:[o.jsx(vg,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),o.jsx("span",{className:"font-bold",children:"Request Expert Sample"})]}),o.jsx("p",{className:"text-[10px] text-center text-stone-400 mt-2 font-medium",children:"Direct connection to our Siliguri quality control team"})]})]}),o.jsx(Pi,{children:s&&o.jsxs(Ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4 sm:p-10",onClick:()=>r(!1),children:[o.jsx(Ct,{variant:"ghost",size:"icon",className:"absolute top-4 right-4 text-white hover:bg-white/10",onClick:()=>r(!1),children:o.jsx(mn,{className:"w-8 h-8"})}),o.jsx(Ge.img,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},src:d,alt:t.fullName,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl"}),o.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 text-center",children:"High-Resolution Master Study"})]})})]})}function Jh({icon:t,label:n,value:s}){return o.jsxs("div",{className:"bg-stone-50 border border-stone-100 rounded-lg p-2 text-center",children:[o.jsxs("div",{className:"flex items-center justify-center gap-1 text-stone-400 mb-1",children:[t,o.jsx("span",{className:"text-[8px] font-bold uppercase tracking-tighter",children:n})]}),o.jsx("p",{className:"text-xs font-bold text-stone-800",children:s})]})}function Xl({icon:t,label:n,value:s}){return o.jsxs("div",{className:"p-3 bg-stone-50 rounded-lg border border-stone-100",children:[o.jsxs("div",{className:"flex items-center gap-2 text-stone-400 mb-1.5",children:[t,o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tight",children:n})]}),o.jsx("p",{className:"text-sm font-semibold text-stone-800 line-clamp-2",children:s})]})}const Jl={orthodox:{bg:"bg-orthodox",text:"text-orthodox",lightBg:"bg-orthodox-light"},ctc:{bg:"bg-ctc",text:"text-ctc",lightBg:"bg-ctc-light"},specialty:{bg:"bg-specialty",text:"text-specialty",lightBg:"bg-specialty-light"}};function kv({grades:t,onClose:n,onRemoveGrade:s}){if(t.length<2)return o.jsxs(Ge.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"info-panel h-full flex flex-col items-center justify-center p-8 text-center bg-white",children:[o.jsx(bf,{className:"w-16 h-16 text-stone-300 mb-4"}),o.jsx("h3",{className:"text-xl font-serif font-bold text-stone-900 mb-2",children:"Compare Selection"}),o.jsxs("p",{className:"text-sm text-stone-500 leading-relaxed",children:["Select two tea grades from the tree to compare their characteristics side by side.",o.jsx("br",{}),o.jsxs("span",{className:"text-brand-gold font-bold mt-2 inline-block",children:[t.length,"/2 selected"]})]}),o.jsx(Ct,{variant:"outline",onClick:n,className:"mt-8 border-stone-200",children:"Exit Comparison"})]});const[r,c]=t;return o.jsxs(Ge.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},className:"info-panel h-full flex flex-col overflow-hidden bg-white",children:[o.jsxs("div",{className:"p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(bf,{className:"w-5 h-5 text-brand-gold"}),o.jsx("h3",{className:"font-serif font-bold text-stone-900",children:"Side-by-Side Comparison"})]}),o.jsx(Ct,{variant:"ghost",size:"icon",onClick:n,className:"rounded-full hover:bg-white border border-stone-100",children:o.jsx(mn,{className:"w-5 h-5"})})]}),o.jsx("div",{className:"grid grid-cols-2 border-b border-stone-100",children:[r,c].map((u,d)=>{const f=Jl[u.category];return o.jsxs("div",{className:xe("relative overflow-hidden",d===0&&"border-r border-stone-100"),children:[o.jsxs("div",{className:"aspect-[4/3] relative overflow-hidden bg-stone-100",children:[o.jsx(Ge.img,{initial:{scale:1.1},animate:{scale:1},src:U2(u.category,u.leafStyle),alt:`${u.fullName} tea leaves`,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-110"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"}),o.jsx("button",{onClick:()=>s(u),className:"absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors border border-stone-100 z-10",children:o.jsx(mn,{className:"w-3 h-3 text-stone-400"})})]}),o.jsxs("div",{className:"p-4 -mt-8 relative z-10",children:[o.jsx("span",{className:xe("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",f.lightBg,f.text,"border border-current/10"),children:u.category}),o.jsx("h4",{className:"text-xl font-serif font-bold text-stone-900 mt-2",children:u.code}),o.jsx("div",{className:"flex gap-0.5 mt-1.5",children:[1,2,3,4,5].map(g=>o.jsx(yc,{className:xe("w-3.5 h-3.5",g<=u.qualityTier?"text-brand-gold fill-brand-gold":"text-stone-200 fill-stone-100")},g))})]})]},u.id)})}),o.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:[o.jsx(ki,{label:"Leaf Size",icon:o.jsx(Ds,{className:"w-4 h-4"}),values:[r.leafSize,c.leafSize]}),o.jsx(ki,{label:"Strength",icon:o.jsx(Pw,{className:"w-4 h-4"}),values:[Cc[r.strength],Cc[c.strength]],highlight:r.strength!==c.strength}),o.jsx(ki,{label:"Brewing Time",icon:o.jsx(_c,{className:"w-4 h-4"}),values:[r.brewTime,c.brewTime]}),o.jsx(ki,{label:"Brew Speed",values:[jc[r.brewSpeed],jc[c.brewSpeed]],highlight:r.brewSpeed!==c.brewSpeed}),o.jsx(ki,{label:"Liquor Color",icon:o.jsx(Mw,{className:"w-4 h-4"}),values:[r.liquorColor,c.liquorColor]}),o.jsx(ki,{label:"Aroma Profile",values:[r.aroma,c.aroma]}),o.jsxs("div",{className:"border-b border-stone-100",children:[o.jsx("div",{className:"px-4 py-2 bg-stone-50",children:o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-400",children:"Flavor Spectrum"})}),o.jsx("div",{className:"grid grid-cols-2",children:[r,c].map((u,d)=>o.jsx("div",{className:xe("p-4",d===0&&"border-r border-stone-100"),children:o.jsx("div",{className:"flex flex-wrap gap-1.5",children:u.flavorNotes.map((f,g)=>o.jsx("span",{className:xe("px-2.5 py-0.5 rounded-full text-xs font-medium border border-current/10",Jl[u.category].lightBg,Jl[u.category].text),children:f},g))})},u.id))})]}),o.jsxs("div",{className:"p-4 bg-stone-50/50",children:[o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-4",children:"Expert Recommendations"}),o.jsx("div",{className:"grid grid-cols-2 gap-4",children:[r,c].map(u=>{const d=Jl[u.category];return o.jsx("div",{className:xe("p-4 rounded-xl text-xs leading-relaxed border border-stone-100",d.lightBg),children:o.jsx("p",{className:"text-stone-800 font-medium",children:u.buyerTip})},u.id)})})]})]})]})}function ki({label:t,icon:n,values:s,highlight:r}){return o.jsxs("div",{className:xe("border-b border-stone-100",r&&"bg-brand-gold/5"),children:[o.jsxs("div",{className:"px-4 py-2 bg-stone-50 flex items-center gap-2",children:[n&&o.jsx("span",{className:"text-stone-400",children:n}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-400",children:t})]}),o.jsx("div",{className:"grid grid-cols-2 divide-x divide-stone-100",children:s.map((c,u)=>o.jsx("div",{className:xe("px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-stone-800"),children:c},u))})]})}function EB({activeFilters:t,onToggleFilter:n,onClearFilters:s,hasActiveFilters:r}){return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsx(Zh,{icon:o.jsx(eM,{className:"w-4 h-4"}),label:"Body & Strength",options:Object.entries(Cc),activeValues:t.strength,onToggle:c=>n("strength",c)}),o.jsx(Zh,{icon:o.jsx(_c,{className:"w-4 h-4"}),label:"Infusion Speed",options:Object.entries(jc),activeValues:t.brewSpeed,onToggle:c=>n("brewSpeed",c)}),o.jsx(Zh,{icon:o.jsx(bg,{className:"w-4 h-4"}),label:"Application",options:Object.entries(N2),activeValues:t.useCase,onToggle:c=>n("useCase",c)})]}),r&&o.jsx(Ge.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"flex justify-end pt-2 border-t border-stone-100",children:o.jsxs(Ct,{variant:"ghost",size:"sm",onClick:s,className:"text-stone-400 hover:text-red-600 hover:bg-red-50 font-bold text-[10px] uppercase tracking-widest",children:[o.jsx(mn,{className:"w-3.5 h-3.5 mr-1.5"}),"Reset all selections"]})})]})}function Zh({icon:t,label:n,options:s,activeValues:r,onToggle:c}){return o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center gap-2 pb-2 border-b border-stone-100",children:[o.jsx("span",{className:"text-brand-gold",children:t}),o.jsx("span",{className:"text-xs font-bold text-stone-900 uppercase tracking-widest",children:n})]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(([u,d])=>{const f=r.includes(u);return o.jsx(Ge.button,{onClick:()=>c(u),className:xe("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border",f?"bg-tea-600 text-white border-tea-600 shadow-sm":"bg-white text-stone-500 border-stone-200 hover:border-tea-400 hover:text-tea-700 hover:bg-tea-50/30"),whileHover:{y:-1},whileTap:{scale:.98},children:d},u)})})]})}function DB(){const[t,n]=x.useState(null),[s,r]=x.useState(!1),[c,u]=x.useState([]),[d,f]=x.useState(!1),[g,p]=x.useState({strength:[],brewSpeed:[],useCase:[]}),[y,b]=x.useState(""),w=g.strength.length>0||g.brewSpeed.length>0||g.useCase.length>0,S=x.useMemo(()=>{const j=y.toLowerCase().trim();return w||j!==""?Si.map(P=>({...P,leafStyles:P.leafStyles.map(G=>({...G,grades:G.grades.filter(_=>{const H=g.strength.length===0||g.strength.includes(_.strength),J=g.brewSpeed.length===0||g.brewSpeed.includes(_.brewSpeed),se=g.useCase.length===0||_.useCases.some(he=>g.useCase.includes(he)),re=j===""||_.code.toLowerCase().includes(j)||_.fullName.toLowerCase().includes(j)||_.description.toLowerCase().includes(j);return H&&J&&se&&re})})).filter(G=>G.grades.length>0)})).filter(P=>P.leafStyles.length>0):Si},[g,w,y]),C=(j,q)=>{p(P=>{const G=P[j],_=G.includes(q)?G.filter(H=>H!==q):[...G,q];return{...P,[j]:_}})},T=()=>{p({strength:[],brewSpeed:[],useCase:[]})},N=j=>{u(q=>q.some(G=>G.id===j.id)?q.filter(G=>G.id!==j.id):q.length>=2?[q[1],j]:[...q,j])},M=()=>{r(!1),u([])},E=Si.reduce((j,q)=>j+q.leafStyles.reduce((P,G)=>P+G.grades.length,0),0);return o.jsxs("div",{className:"min-h-screen bg-white",children:[o.jsxs("header",{className:"relative overflow-hidden bg-stone-50 border-b border-stone-100",children:[o.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCAxMC0xMCAxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHoiIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40"}),o.jsxs("div",{className:"container max-w-7xl mx-auto px-4 py-16 sm:py-20 relative",children:[o.jsxs(Ge.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"max-w-3xl",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[o.jsx("div",{className:"w-10 h-1 bg-brand-gold rounded-full"}),o.jsx("span",{className:"text-xs font-bold text-brand-gold uppercase tracking-[0.2em]",children:"Tea Connoisseur's Guide"})]}),o.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-stone-900 leading-tight mb-6",children:["Indian Tea",o.jsx("span",{className:"block text-tea-600",children:"Grading System"})]}),o.jsxs("p",{className:"text-lg text-stone-600 max-w-2xl leading-relaxed mb-10",children:["Master the art of tea selection. Explore ",E,"+ distinct tea grades across Orthodox, CTC, and Specialty categories to find the perfect profile for your business or personal blend."]}),o.jsxs("div",{className:"flex flex-wrap gap-4",children:[o.jsx(ef,{label:"Orthodox",count:Si[0].leafStyles.reduce((j,q)=>j+q.grades.length,0),color:"bg-orthodox-light text-orthodox border-orthodox/10"}),o.jsx(ef,{label:"CTC",count:Si[1].leafStyles.reduce((j,q)=>j+q.grades.length,0),color:"bg-ctc-light text-ctc border-ctc/10"}),o.jsx(ef,{label:"Specialty",count:Si[2].leafStyles.reduce((j,q)=>j+q.grades.length,0),color:"bg-specialty-light text-specialty border-specialty/10"})]})]}),o.jsxs(Ge.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"absolute bottom-6 right-4 hidden lg:flex items-center gap-3 text-stone-400 rotate-90 origin-right",children:[o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Explore the Tree"}),o.jsx("div",{className:"w-12 h-px bg-stone-200"})]})]})]}),o.jsxs("div",{className:"container max-w-7xl mx-auto px-4 py-12",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-100",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-4 flex-1",children:[o.jsxs("div",{className:"relative flex-1 max-w-md group",children:[o.jsx(Bw,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-tea-600 transition-colors"}),o.jsx("input",{type:"text",placeholder:"Search grades (e.g. BOP, SFTGFOP1)...",value:y,onChange:j=>b(j.target.value),className:"w-full h-10 pl-10 pr-10 bg-stone-50 border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-tea-500/20 focus:border-tea-500 transition-all"}),y&&o.jsx("button",{onClick:()=>b(""),className:"absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-stone-200 rounded-full transition-colors",children:o.jsx(mn,{className:"w-3 h-3 text-stone-500"})})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs(Ct,{variant:d?"default":"outline",size:"sm",onClick:()=>f(!d),className:xe("gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-6",d?"bg-stone-900":"border-stone-200 text-stone-600"),children:[o.jsx(Fb,{className:"w-3.5 h-3.5"}),"Intelligence Filters",w&&o.jsx("span",{className:"ml-2 px-1.5 py-0.5 bg-brand-gold text-white text-[10px] rounded-full",children:g.strength.length+g.brewSpeed.length+g.useCase.length})]}),o.jsxs(Ct,{variant:s?"default":"outline",size:"sm",onClick:()=>{s?M():(r(!0),n(null))},className:xe("gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-6",s?"bg-brand-gold border-brand-gold":"border-stone-200 text-stone-600"),children:[o.jsx(bf,{className:"w-3.5 h-3.5"}),"Compare Mode",s&&c.length>0&&o.jsxs("span",{className:"ml-2 px-1.5 py-0.5 bg-white text-brand-gold text-[10px] rounded-full",children:[c.length,"/2"]})]})]})]}),o.jsxs("div",{className:"flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-stone-400",children:[o.jsx(T3,{className:"w-4 h-4 text-brand-gold"}),o.jsx("span",{children:w?`${S.reduce((j,q)=>j+q.leafStyles.reduce((P,G)=>P+G.grades.length,0),0)} results found`:`${E} grades available`})]})]}),o.jsx(Pi,{children:d&&o.jsx(Ge.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:"circOut"},className:"overflow-hidden",children:o.jsx("div",{className:"p-8 mb-10 bg-stone-50 rounded-2xl border border-stone-100 shadow-inner",children:o.jsx(EB,{activeFilters:g,onToggleFilter:C,onClearFilters:T,hasActiveFilters:w})})})}),o.jsxs("div",{className:"flex gap-12",children:[o.jsxs("div",{className:xe("flex-1 space-y-6 transition-all duration-300",(t||s)&&"lg:pr-0"),children:[S.length>0?S.map((j,q)=>o.jsx(Ge.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:q*.1},children:o.jsx(iB,{category:j,onSelectGrade:n,selectedGrade:t,isCompareMode:s,compareGrades:c,onToggleCompare:N})},j.id)):o.jsxs("div",{className:"text-center py-24 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200",children:[o.jsx(Fb,{className:"w-16 h-16 text-stone-200 mx-auto mb-6"}),o.jsx("h3",{className:"text-2xl font-serif font-bold text-stone-900 mb-2",children:"No Matching Grades"}),o.jsx("p",{className:"text-stone-500 mb-8 max-w-xs mx-auto",children:"Try broadening your search parameters to explore more tea types."}),o.jsx(Ct,{variant:"outline",onClick:T,className:"border-stone-300 text-stone-600 font-bold uppercase tracking-widest text-[10px]",children:"Clear All Intelligence Filters"})]}),o.jsxs(Ge.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mt-16 p-8 bg-stone-900 rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden group",children:[o.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500"}),o.jsxs("div",{className:"flex items-start gap-6 relative z-10",children:[o.jsx("div",{className:"p-4 bg-brand-gold rounded-2xl text-white shadow-lg",children:o.jsx(Ds,{className:"w-8 h-8"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-2xl text-white mb-3",children:"Pro-Buyer Intelligence"}),o.jsxs("p",{className:"text-stone-400 leading-relaxed text-lg",children:[o.jsx("strong",{className:"text-brand-gold",children:"Grade ≠ Strength."})," ",'In the tea industry, a higher grade signifies superior leaf integrity, careful processing, and complex flavor notes. It does not dictate caffeine levels or "punch". Choose based on your intended ',o.jsx("span",{className:"text-white italic",children:"brewing vessel"})," and ",o.jsx("span",{className:"text-white italic",children:"market segment"}),"."]})]})]})]})]}),o.jsx(Pi,{mode:"wait",children:(t||s)&&o.jsx(Ge.div,{initial:{width:0,opacity:0,x:20},animate:{width:420,opacity:1,x:0},exit:{width:0,opacity:0,x:20},transition:{duration:.4,ease:"circOut"},className:"hidden lg:block flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)]",children:s?o.jsx(kv,{grades:c,onClose:M,onRemoveGrade:j=>u(q=>q.filter(P=>P.id!==j.id))}):t?o.jsx(Tv,{grade:t,onClose:()=>n(null)}):null})})]}),o.jsx(Pi,{children:(t||s)&&o.jsx(Ge.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:200},className:"lg:hidden fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-hidden rounded-t-[2.5rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.25)] border-t border-stone-200",children:o.jsxs("div",{className:"bg-white h-full overflow-y-auto",children:[o.jsx("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md pt-5 pb-3 flex justify-center z-20 border-b border-stone-50",children:o.jsx("div",{className:"w-12 h-1.5 rounded-full bg-stone-200"})}),o.jsx("div",{className:"pb-10",children:s?o.jsx(kv,{grades:c,onClose:M,onRemoveGrade:j=>u(q=>q.filter(P=>P.id!==j.id))}):t?o.jsx(Tv,{grade:t,onClose:()=>n(null)}):null})]})})})]})]})}function ef({label:t,count:n,color:s}){return o.jsxs("div",{className:xe("px-5 py-2.5 rounded-2xl flex items-center gap-3 border shadow-sm transition-all hover:shadow-md",s),children:[o.jsx("span",{className:"font-black text-lg",children:n}),o.jsx("span",{className:"text-xs font-bold uppercase tracking-widest",children:t})]})}const RB=()=>o.jsxs("div",{className:"min-h-screen bg-white",children:[o.jsx(Rt,{title:"Tea Grading System Guide - Understanding Indian Tea Grades",description:"Explore our comprehensive guide to Indian tea grading. Learn about Orthodox, CTC, and Specialty tea grades, leaf sizes, and brewing recommendations.",canonicalUrl:"https://teatraders.info/tea-grades/"}),o.jsx(Et,{}),o.jsx("main",{className:"pt-16",children:o.jsx(DB,{})}),o.jsx(Dt,{})]}),BB=nm("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-stone-950",{variants:{variant:{default:"bg-white text-stone-950 border-stone-200",destructive:"border-red-200 text-red-700 bg-red-50 [&>svg]:text-red-700"}},defaultVariants:{variant:"default"}}),K2=x.forwardRef(({className:t,variant:n,...s},r)=>o.jsx("div",{ref:r,role:"alert",className:xe(BB({variant:n}),t),...s}));K2.displayName="Alert";const OB=x.forwardRef(({className:t,...n},s)=>o.jsx("h5",{ref:s,className:xe("mb-1 font-medium leading-none tracking-tight",t),...n}));OB.displayName="AlertTitle";const Y2=x.forwardRef(({className:t,...n},s)=>o.jsx("div",{ref:s,className:xe("text-sm [&_p]:leading-relaxed",t),...n}));Y2.displayName="AlertDescription";const ka=x.forwardRef(({className:t,type:n,...s},r)=>o.jsx("input",{type:n,className:xe("flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tea-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-sm transition-all",t),ref:r,...s}));ka.displayName="Input";var PB=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],LB=PB.reduce((t,n)=>{const s=am(`Primitive.${n}`),r=x.forwardRef((c,u)=>{const{asChild:d,...f}=c,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(g,{...f,ref:u})});return r.displayName=`Primitive.${n}`,{...t,[n]:r}},{}),_B="Label",Q2=x.forwardRef((t,n)=>o.jsx(LB.label,{...t,ref:n,onMouseDown:s=>{var c;s.target.closest("button, input, select, textarea")||((c=t.onMouseDown)==null||c.call(t,s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));Q2.displayName=_B;var $2=Q2;const zB=nm("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-stone-700"),Zt=x.forwardRef(({className:t,...n},s)=>o.jsx($2,{ref:s,className:xe(zB(),t),...n}));Zt.displayName=$2.displayName;const qB=({rows:t,currency:n,onUpdateRow:s,onAddRow:r,onDeleteRow:c,onAddExtraKg:u,onUpdateExtraKg:d,onRemoveExtraKg:f,roundToDecimals:g})=>{const p=w=>w.toFixed(g),y=w=>{const S=w.numberOfBags*w.weightPerBag,C=w.extraKgs.reduce((T,N)=>T+N,0);return S+C},b=w=>y(w)*w.ratePerKg;return o.jsxs("div",{className:"space-y-4",children:[t.map((w,S)=>o.jsxs("div",{className:"bg-white rounded-xl shadow-tea-card p-4 space-y-4 border border-stone-200",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-sm font-medium text-stone-500",children:["Item ",S+1]}),o.jsx(Ct,{variant:"ghost",size:"sm",onClick:()=>c(w.id),className:"text-stone-400 hover:text-red-600 h-8 px-2",disabled:t.length===1,children:o.jsx(HA,{className:"h-4 w-4"})})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Garden / Estate"}),o.jsx(ka,{value:w.gardenName,onChange:C=>s(w.id,"gardenName",C.target.value),placeholder:"e.g. Darjeeling",className:"h-11 border-stone-200 focus:border-tea-600"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Grade"}),o.jsx(ka,{value:w.gradeName,onChange:C=>s(w.id,"gradeName",C.target.value),placeholder:"e.g. BP, BOPSM",className:"h-11 border-stone-200 focus:border-tea-600"})]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Bags"}),o.jsx(ka,{type:"number",min:"0",value:w.numberOfBags||"",onChange:C=>s(w.id,"numberOfBags",parseFloat(C.target.value)||0),placeholder:"0",className:"h-11 text-center border-stone-200"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Wt/Bag (kg)"}),o.jsxs("div",{className:"flex gap-1",children:[o.jsx(ka,{type:"number",min:"0",step:"0.01",value:w.weightPerBag||"",onChange:C=>s(w.id,"weightPerBag",parseFloat(C.target.value)||0),placeholder:"0",className:"h-11 text-center border-stone-200"}),o.jsx(Ct,{type:"button",variant:"outline",size:"icon",onClick:()=>u(w.id),className:"h-11 w-11 shrink-0 border-stone-200 text-tea-600 hover:bg-tea-50",title:"Add loose weight (Extra kg)",children:o.jsx(Gb,{className:"h-4 w-4"})})]})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsxs(Zt,{className:"text-xs text-stone-500",children:["Rate/kg (",n,")"]}),o.jsx(ka,{type:"number",min:"0",step:"0.01",value:w.ratePerKg||"",onChange:C=>s(w.id,"ratePerKg",parseFloat(C.target.value)||0),placeholder:"0",className:"h-11 text-center border-stone-200"})]})]}),w.extraKgs.length>0&&o.jsxs("div",{className:"space-y-2 pl-2 border-l-2 border-tea-200",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Extra kg (Loose weight)"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:w.extraKgs.map((C,T)=>o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(ka,{type:"number",min:"0",step:"0.01",value:C||"",onChange:N=>d(w.id,T,parseFloat(N.target.value)||0),placeholder:"0",className:"h-9 w-20 text-center text-sm border-stone-200"}),o.jsx(Ct,{type:"button",variant:"ghost",size:"icon",onClick:()=>f(w.id,T),className:"h-7 w-7 text-stone-400 hover:text-red-600",children:o.jsx(mn,{className:"h-3 w-3"})})]},T))})]}),o.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-stone-100",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-stone-400",children:"Total Qty"}),o.jsxs("p",{className:"text-lg font-semibold text-tea-800",children:[p(y(w))," kg"]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-stone-400",children:"Total Value"}),o.jsxs("p",{className:"text-lg font-bold text-brand-gold",children:[n,p(b(w))]})]})]})]},w.id)),o.jsxs(Ct,{onClick:r,variant:"outline",className:"w-full h-12 border-dashed border-2 border-tea-200 text-tea-700 hover:bg-tea-50 hover:border-tea-300 transition-all font-bold",children:[o.jsx(Gb,{className:"h-5 w-5 mr-2"}),"Add Next Item"]})]})};function Cv(t,[n,s]){return Math.min(s,Math.max(n,t))}function st(t,n,{checkForDefaultPrevented:s=!0}={}){return function(c){if(t==null||t(c),s===!1||!c.defaultPrevented)return n==null?void 0:n(c)}}function Fc(t,n=[]){let s=[];function r(u,d){const f=x.createContext(d),g=s.length;s=[...s,d];const p=b=>{var M;const{scope:w,children:S,...C}=b,T=((M=w==null?void 0:w[t])==null?void 0:M[g])||f,N=x.useMemo(()=>C,Object.values(C));return o.jsx(T.Provider,{value:N,children:S})};p.displayName=u+"Provider";function y(b,w){var T;const S=((T=w==null?void 0:w[t])==null?void 0:T[g])||f,C=x.useContext(S);if(C)return C;if(d!==void 0)return d;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[p,y]}const c=()=>{const u=s.map(d=>x.createContext(d));return function(f){const g=(f==null?void 0:f[t])||u;return x.useMemo(()=>({[`__scope${t}`]:{...f,[t]:g}}),[f,g])}};return c.scopeName=t,[r,VB(c,...n)]}function VB(...t){const n=t[0];if(t.length===1)return n;const s=()=>{const r=t.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(u){const d=r.reduce((f,{useScope:g,scopeName:p})=>{const b=g(u)[`__scope${p}`];return{...f,...b}},{});return x.useMemo(()=>({[`__scope${n.scopeName}`]:d}),[d])}};return s.scopeName=n.scopeName,s}function jv(t){const n=HB(t),s=x.forwardRef((r,c)=>{const{children:u,...d}=r,f=x.Children.toArray(u),g=f.find(FB);if(g){const p=g.props.children,y=f.map(b=>b===g?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:b);return o.jsx(n,{...d,ref:c,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return o.jsx(n,{...d,ref:c,children:u})});return s.displayName=`${t}.Slot`,s}function HB(t){const n=x.forwardRef((s,r)=>{const{children:c,...u}=s;if(x.isValidElement(c)){const d=GB(c),f=IB(u,c.props);return c.type!==x.Fragment&&(f.ref=r?To(r,d):d),x.cloneElement(c,f)}return x.Children.count(c)>1?x.Children.only(null):null});return n.displayName=`${t}.SlotClone`,n}var UB=Symbol("radix.slottable");function FB(t){return x.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===UB}function IB(t,n){const s={...n};for(const r in n){const c=t[r],u=n[r];/^on[A-Z]/.test(r)?c&&u?s[r]=(...f)=>{const g=u(...f);return c(...f),g}:c&&(s[r]=c):r==="style"?s[r]={...c,...u}:r==="className"&&(s[r]=[c,u].filter(Boolean).join(" "))}return{...t,...s}}function GB(t){var r,c;let n=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?t.ref:(n=(c=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:c.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}function WB(t){const n=t+"CollectionProvider",[s,r]=Fc(n),[c,u]=s(n,{collectionRef:{current:null},itemMap:new Map}),d=T=>{const{scope:N,children:M}=T,E=tt.useRef(null),j=tt.useRef(new Map).current;return o.jsx(c,{scope:N,itemMap:j,collectionRef:E,children:M})};d.displayName=n;const f=t+"CollectionSlot",g=jv(f),p=tt.forwardRef((T,N)=>{const{scope:M,children:E}=T,j=u(f,M),q=ft(N,j.collectionRef);return o.jsx(g,{ref:q,children:E})});p.displayName=f;const y=t+"CollectionItemSlot",b="data-radix-collection-item",w=jv(y),S=tt.forwardRef((T,N)=>{const{scope:M,children:E,...j}=T,q=tt.useRef(null),P=ft(N,q),G=u(y,M);return tt.useEffect(()=>(G.itemMap.set(q,{ref:q,...j}),()=>void G.itemMap.delete(q))),o.jsx(w,{[b]:"",ref:P,children:E})});S.displayName=y;function C(T){const N=u(t+"CollectionConsumer",T);return tt.useCallback(()=>{const E=N.collectionRef.current;if(!E)return[];const j=Array.from(E.querySelectorAll(`[${b}]`));return Array.from(N.itemMap.values()).sort((G,_)=>j.indexOf(G.ref.current)-j.indexOf(_.ref.current))},[N.collectionRef,N.itemMap])}return[{Provider:d,Slot:p,ItemSlot:S},C,r]}var KB=x.createContext(void 0);function YB(t){const n=x.useContext(KB);return t||n||"ltr"}function QB(t){const n=$B(t),s=x.forwardRef((r,c)=>{const{children:u,...d}=r,f=x.Children.toArray(u),g=f.find(JB);if(g){const p=g.props.children,y=f.map(b=>b===g?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:b);return o.jsx(n,{...d,ref:c,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return o.jsx(n,{...d,ref:c,children:u})});return s.displayName=`${t}.Slot`,s}function $B(t){const n=x.forwardRef((s,r)=>{const{children:c,...u}=s;if(x.isValidElement(c)){const d=eO(c),f=ZB(u,c.props);return c.type!==x.Fragment&&(f.ref=r?To(r,d):d),x.cloneElement(c,f)}return x.Children.count(c)>1?x.Children.only(null):null});return n.displayName=`${t}.SlotClone`,n}var XB=Symbol("radix.slottable");function JB(t){return x.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===XB}function ZB(t,n){const s={...n};for(const r in n){const c=t[r],u=n[r];/^on[A-Z]/.test(r)?c&&u?s[r]=(...f)=>{const g=u(...f);return c(...f),g}:c&&(s[r]=c):r==="style"?s[r]={...c,...u}:r==="className"&&(s[r]=[c,u].filter(Boolean).join(" "))}return{...t,...s}}function eO(t){var r,c;let n=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?t.ref:(n=(c=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:c.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}var tO=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Qe=tO.reduce((t,n)=>{const s=QB(`Primitive.${n}`),r=x.forwardRef((c,u)=>{const{asChild:d,...f}=c,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(g,{...f,ref:u})});return r.displayName=`Primitive.${n}`,{...t,[n]:r}},{});function aO(t,n){t&&yo.flushSync(()=>t.dispatchEvent(n))}function Rs(t){const n=x.useRef(t);return x.useEffect(()=>{n.current=t}),x.useMemo(()=>(...s)=>{var r;return(r=n.current)==null?void 0:r.call(n,...s)},[])}function nO(t,n=globalThis==null?void 0:globalThis.document){const s=Rs(t);x.useEffect(()=>{const r=c=>{c.key==="Escape"&&s(c)};return n.addEventListener("keydown",r,{capture:!0}),()=>n.removeEventListener("keydown",r,{capture:!0})},[s,n])}var sO="DismissableLayer",Wf="dismissableLayer.update",iO="dismissableLayer.pointerDownOutside",rO="dismissableLayer.focusOutside",Nv,X2=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),J2=x.forwardRef((t,n)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:r,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:d,onDismiss:f,...g}=t,p=x.useContext(X2),[y,b]=x.useState(null),w=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=x.useState({}),C=ft(n,_=>b(_)),T=Array.from(p.layers),[N]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),M=T.indexOf(N),E=y?T.indexOf(y):-1,j=p.layersWithOutsidePointerEventsDisabled.size>0,q=E>=M,P=cO(_=>{const H=_.target,J=[...p.branches].some(se=>se.contains(H));!q||J||(c==null||c(_),d==null||d(_),_.defaultPrevented||f==null||f())},w),G=uO(_=>{const H=_.target;[...p.branches].some(se=>se.contains(H))||(u==null||u(_),d==null||d(_),_.defaultPrevented||f==null||f())},w);return nO(_=>{E===p.layers.size-1&&(r==null||r(_),!_.defaultPrevented&&f&&(_.preventDefault(),f()))},w),x.useEffect(()=>{if(y)return s&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(Nv=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(y)),p.layers.add(y),Av(),()=>{s&&p.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Nv)}},[y,w,s,p]),x.useEffect(()=>()=>{y&&(p.layers.delete(y),p.layersWithOutsidePointerEventsDisabled.delete(y),Av())},[y,p]),x.useEffect(()=>{const _=()=>S({});return document.addEventListener(Wf,_),()=>document.removeEventListener(Wf,_)},[]),o.jsx(Qe.div,{...g,ref:C,style:{pointerEvents:j?q?"auto":"none":void 0,...t.style},onFocusCapture:st(t.onFocusCapture,G.onFocusCapture),onBlurCapture:st(t.onBlurCapture,G.onBlurCapture),onPointerDownCapture:st(t.onPointerDownCapture,P.onPointerDownCapture)})});J2.displayName=sO;var oO="DismissableLayerBranch",lO=x.forwardRef((t,n)=>{const s=x.useContext(X2),r=x.useRef(null),c=ft(n,r);return x.useEffect(()=>{const u=r.current;if(u)return s.branches.add(u),()=>{s.branches.delete(u)}},[s.branches]),o.jsx(Qe.div,{...t,ref:c})});lO.displayName=oO;function cO(t,n=globalThis==null?void 0:globalThis.document){const s=Rs(t),r=x.useRef(!1),c=x.useRef(()=>{});return x.useEffect(()=>{const u=f=>{if(f.target&&!r.current){let g=function(){Z2(iO,s,p,{discrete:!0})};const p={originalEvent:f};f.pointerType==="touch"?(n.removeEventListener("click",c.current),c.current=g,n.addEventListener("click",c.current,{once:!0})):g()}else n.removeEventListener("click",c.current);r.current=!1},d=window.setTimeout(()=>{n.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(d),n.removeEventListener("pointerdown",u),n.removeEventListener("click",c.current)}},[n,s]),{onPointerDownCapture:()=>r.current=!0}}function uO(t,n=globalThis==null?void 0:globalThis.document){const s=Rs(t),r=x.useRef(!1);return x.useEffect(()=>{const c=u=>{u.target&&!r.current&&Z2(rO,s,{originalEvent:u},{discrete:!1})};return n.addEventListener("focusin",c),()=>n.removeEventListener("focusin",c)},[n,s]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Av(){const t=new CustomEvent(Wf);document.dispatchEvent(t)}function Z2(t,n,s,{discrete:r}){const c=s.originalEvent.target,u=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:s});n&&c.addEventListener(t,n,{once:!0}),r?aO(c,u):c.dispatchEvent(u)}var tf=0;function dO(){x.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Mv()),document.body.insertAdjacentElement("beforeend",t[1]??Mv()),tf++,()=>{tf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),tf--}},[])}function Mv(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var af="focusScope.autoFocusOnMount",nf="focusScope.autoFocusOnUnmount",Ev={bubbles:!1,cancelable:!0},hO="FocusScope",eS=x.forwardRef((t,n)=>{const{loop:s=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:u,...d}=t,[f,g]=x.useState(null),p=Rs(c),y=Rs(u),b=x.useRef(null),w=ft(n,T=>g(T)),S=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(r){let T=function(j){if(S.paused||!f)return;const q=j.target;f.contains(q)?b.current=q:Kn(b.current,{select:!0})},N=function(j){if(S.paused||!f)return;const q=j.relatedTarget;q!==null&&(f.contains(q)||Kn(b.current,{select:!0}))},M=function(j){if(document.activeElement===document.body)for(const P of j)P.removedNodes.length>0&&Kn(f)};document.addEventListener("focusin",T),document.addEventListener("focusout",N);const E=new MutationObserver(M);return f&&E.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",T),document.removeEventListener("focusout",N),E.disconnect()}}},[r,f,S.paused]),x.useEffect(()=>{if(f){Rv.add(S);const T=document.activeElement;if(!f.contains(T)){const M=new CustomEvent(af,Ev);f.addEventListener(af,p),f.dispatchEvent(M),M.defaultPrevented||(fO(bO(tS(f)),{select:!0}),document.activeElement===T&&Kn(f))}return()=>{f.removeEventListener(af,p),setTimeout(()=>{const M=new CustomEvent(nf,Ev);f.addEventListener(nf,y),f.dispatchEvent(M),M.defaultPrevented||Kn(T??document.body,{select:!0}),f.removeEventListener(nf,y),Rv.remove(S)},0)}}},[f,p,y,S]);const C=x.useCallback(T=>{if(!s&&!r||S.paused)return;const N=T.key==="Tab"&&!T.altKey&&!T.ctrlKey&&!T.metaKey,M=document.activeElement;if(N&&M){const E=T.currentTarget,[j,q]=gO(E);j&&q?!T.shiftKey&&M===q?(T.preventDefault(),s&&Kn(j,{select:!0})):T.shiftKey&&M===j&&(T.preventDefault(),s&&Kn(q,{select:!0})):M===E&&T.preventDefault()}},[s,r,S.paused]);return o.jsx(Qe.div,{tabIndex:-1,...d,ref:w,onKeyDown:C})});eS.displayName=hO;function fO(t,{select:n=!1}={}){const s=document.activeElement;for(const r of t)if(Kn(r,{select:n}),document.activeElement!==s)return}function gO(t){const n=tS(t),s=Dv(n,t),r=Dv(n.reverse(),t);return[s,r]}function tS(t){const n=[],s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n}function Dv(t,n){for(const s of t)if(!mO(s,{upTo:n}))return s}function mO(t,{upTo:n}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(n!==void 0&&t===n)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function pO(t){return t instanceof HTMLInputElement&&"select"in t}function Kn(t,{select:n=!1}={}){if(t&&t.focus){const s=document.activeElement;t.focus({preventScroll:!0}),t!==s&&pO(t)&&n&&t.select()}}var Rv=yO();function yO(){let t=[];return{add(n){const s=t[0];n!==s&&(s==null||s.pause()),t=Bv(t,n),t.unshift(n)},remove(n){var s;t=Bv(t,n),(s=t[0])==null||s.resume()}}}function Bv(t,n){const s=[...t],r=s.indexOf(n);return r!==-1&&s.splice(r,1),s}function bO(t){return t.filter(n=>n.tagName!=="A")}var jt=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},xO=rg[" useId ".trim().toString()]||(()=>{}),vO=0;function Ic(t){const[n,s]=x.useState(xO());return jt(()=>{s(r=>r??String(vO++))},[t]),n?`radix-${n}`:""}const wO=["top","right","bottom","left"],Zn=Math.min,ea=Math.max,Mc=Math.round,Zl=Math.floor,za=t=>({x:t,y:t}),SO={left:"right",right:"left",bottom:"top",top:"bottom"},TO={start:"end",end:"start"};function Kf(t,n,s){return ea(t,Zn(n,s))}function yn(t,n){return typeof t=="function"?t(n):t}function bn(t){return t.split("-")[0]}function Qi(t){return t.split("-")[1]}function im(t){return t==="x"?"y":"x"}function rm(t){return t==="y"?"height":"width"}const kO=new Set(["top","bottom"]);function La(t){return kO.has(bn(t))?"y":"x"}function om(t){return im(La(t))}function CO(t,n,s){s===void 0&&(s=!1);const r=Qi(t),c=om(t),u=rm(c);let d=c==="x"?r===(s?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[u]>n.floating[u]&&(d=Ec(d)),[d,Ec(d)]}function jO(t){const n=Ec(t);return[Yf(t),n,Yf(n)]}function Yf(t){return t.replace(/start|end/g,n=>TO[n])}const Ov=["left","right"],Pv=["right","left"],NO=["top","bottom"],AO=["bottom","top"];function MO(t,n,s){switch(t){case"top":case"bottom":return s?n?Pv:Ov:n?Ov:Pv;case"left":case"right":return n?NO:AO;default:return[]}}function EO(t,n,s,r){const c=Qi(t);let u=MO(bn(t),s==="start",r);return c&&(u=u.map(d=>d+"-"+c),n&&(u=u.concat(u.map(Yf)))),u}function Ec(t){return t.replace(/left|right|bottom|top/g,n=>SO[n])}function DO(t){return{top:0,right:0,bottom:0,left:0,...t}}function aS(t){return typeof t!="number"?DO(t):{top:t,right:t,bottom:t,left:t}}function Dc(t){const{x:n,y:s,width:r,height:c}=t;return{width:r,height:c,top:s,left:n,right:n+r,bottom:s+c,x:n,y:s}}function Lv(t,n,s){let{reference:r,floating:c}=t;const u=La(n),d=om(n),f=rm(d),g=bn(n),p=u==="y",y=r.x+r.width/2-c.width/2,b=r.y+r.height/2-c.height/2,w=r[f]/2-c[f]/2;let S;switch(g){case"top":S={x:y,y:r.y-c.height};break;case"bottom":S={x:y,y:r.y+r.height};break;case"right":S={x:r.x+r.width,y:b};break;case"left":S={x:r.x-c.width,y:b};break;default:S={x:r.x,y:r.y}}switch(Qi(n)){case"start":S[d]-=w*(s&&p?-1:1);break;case"end":S[d]+=w*(s&&p?-1:1);break}return S}const RO=async(t,n,s)=>{const{placement:r="bottom",strategy:c="absolute",middleware:u=[],platform:d}=s,f=u.filter(Boolean),g=await(d.isRTL==null?void 0:d.isRTL(n));let p=await d.getElementRects({reference:t,floating:n,strategy:c}),{x:y,y:b}=Lv(p,r,g),w=r,S={},C=0;for(let T=0;T<f.length;T++){const{name:N,fn:M}=f[T],{x:E,y:j,data:q,reset:P}=await M({x:y,y:b,initialPlacement:r,placement:w,strategy:c,middlewareData:S,rects:p,platform:d,elements:{reference:t,floating:n}});y=E??y,b=j??b,S={...S,[N]:{...S[N],...q}},P&&C<=50&&(C++,typeof P=="object"&&(P.placement&&(w=P.placement),P.rects&&(p=P.rects===!0?await d.getElementRects({reference:t,floating:n,strategy:c}):P.rects),{x:y,y:b}=Lv(p,w,g)),T=-1)}return{x:y,y:b,placement:w,strategy:c,middlewareData:S}};async function ho(t,n){var s;n===void 0&&(n={});const{x:r,y:c,platform:u,rects:d,elements:f,strategy:g}=t,{boundary:p="clippingAncestors",rootBoundary:y="viewport",elementContext:b="floating",altBoundary:w=!1,padding:S=0}=yn(n,t),C=aS(S),N=f[w?b==="floating"?"reference":"floating":b],M=Dc(await u.getClippingRect({element:(s=await(u.isElement==null?void 0:u.isElement(N)))==null||s?N:N.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(f.floating)),boundary:p,rootBoundary:y,strategy:g})),E=b==="floating"?{x:r,y:c,width:d.floating.width,height:d.floating.height}:d.reference,j=await(u.getOffsetParent==null?void 0:u.getOffsetParent(f.floating)),q=await(u.isElement==null?void 0:u.isElement(j))?await(u.getScale==null?void 0:u.getScale(j))||{x:1,y:1}:{x:1,y:1},P=Dc(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:E,offsetParent:j,strategy:g}):E);return{top:(M.top-P.top+C.top)/q.y,bottom:(P.bottom-M.bottom+C.bottom)/q.y,left:(M.left-P.left+C.left)/q.x,right:(P.right-M.right+C.right)/q.x}}const BO=t=>({name:"arrow",options:t,async fn(n){const{x:s,y:r,placement:c,rects:u,platform:d,elements:f,middlewareData:g}=n,{element:p,padding:y=0}=yn(t,n)||{};if(p==null)return{};const b=aS(y),w={x:s,y:r},S=om(c),C=rm(S),T=await d.getDimensions(p),N=S==="y",M=N?"top":"left",E=N?"bottom":"right",j=N?"clientHeight":"clientWidth",q=u.reference[C]+u.reference[S]-w[S]-u.floating[C],P=w[S]-u.reference[S],G=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let _=G?G[j]:0;(!_||!await(d.isElement==null?void 0:d.isElement(G)))&&(_=f.floating[j]||u.floating[C]);const H=q/2-P/2,J=_/2-T[C]/2-1,se=Zn(b[M],J),re=Zn(b[E],J),he=se,ve=_-T[C]-re,U=_/2-T[C]/2+H,z=Kf(he,U,ve),A=!g.arrow&&Qi(c)!=null&&U!==z&&u.reference[C]/2-(U<he?se:re)-T[C]/2<0,D=A?U<he?U-he:U-ve:0;return{[S]:w[S]+D,data:{[S]:z,centerOffset:U-z-D,...A&&{alignmentOffset:D}},reset:A}}}),OO=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var s,r;const{placement:c,middlewareData:u,rects:d,initialPlacement:f,platform:g,elements:p}=n,{mainAxis:y=!0,crossAxis:b=!0,fallbackPlacements:w,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:T=!0,...N}=yn(t,n);if((s=u.arrow)!=null&&s.alignmentOffset)return{};const M=bn(c),E=La(f),j=bn(f)===f,q=await(g.isRTL==null?void 0:g.isRTL(p.floating)),P=w||(j||!T?[Ec(f)]:jO(f)),G=C!=="none";!w&&G&&P.push(...EO(f,T,C,q));const _=[f,...P],H=await ho(n,N),J=[];let se=((r=u.flip)==null?void 0:r.overflows)||[];if(y&&J.push(H[M]),b){const U=CO(c,d,q);J.push(H[U[0]],H[U[1]])}if(se=[...se,{placement:c,overflows:J}],!J.every(U=>U<=0)){var re,he;const U=(((re=u.flip)==null?void 0:re.index)||0)+1,z=_[U];if(z&&(!(b==="alignment"?E!==La(z):!1)||se.every(B=>La(B.placement)===E?B.overflows[0]>0:!0)))return{data:{index:U,overflows:se},reset:{placement:z}};let A=(he=se.filter(D=>D.overflows[0]<=0).sort((D,B)=>D.overflows[1]-B.overflows[1])[0])==null?void 0:he.placement;if(!A)switch(S){case"bestFit":{var ve;const D=(ve=se.filter(B=>{if(G){const Q=La(B.placement);return Q===E||Q==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(Q=>Q>0).reduce((Q,ne)=>Q+ne,0)]).sort((B,Q)=>B[1]-Q[1])[0])==null?void 0:ve[0];D&&(A=D);break}case"initialPlacement":A=f;break}if(c!==A)return{reset:{placement:A}}}return{}}}};function _v(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function zv(t){return wO.some(n=>t[n]>=0)}const PO=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:s}=n,{strategy:r="referenceHidden",...c}=yn(t,n);switch(r){case"referenceHidden":{const u=await ho(n,{...c,elementContext:"reference"}),d=_v(u,s.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:zv(d)}}}case"escaped":{const u=await ho(n,{...c,altBoundary:!0}),d=_v(u,s.floating);return{data:{escapedOffsets:d,escaped:zv(d)}}}default:return{}}}}},nS=new Set(["left","top"]);async function LO(t,n){const{placement:s,platform:r,elements:c}=t,u=await(r.isRTL==null?void 0:r.isRTL(c.floating)),d=bn(s),f=Qi(s),g=La(s)==="y",p=nS.has(d)?-1:1,y=u&&g?-1:1,b=yn(n,t);let{mainAxis:w,crossAxis:S,alignmentAxis:C}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return f&&typeof C=="number"&&(S=f==="end"?C*-1:C),g?{x:S*y,y:w*p}:{x:w*p,y:S*y}}const _O=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var s,r;const{x:c,y:u,placement:d,middlewareData:f}=n,g=await LO(n,t);return d===((s=f.offset)==null?void 0:s.placement)&&(r=f.arrow)!=null&&r.alignmentOffset?{}:{x:c+g.x,y:u+g.y,data:{...g,placement:d}}}}},zO=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:s,y:r,placement:c}=n,{mainAxis:u=!0,crossAxis:d=!1,limiter:f={fn:N=>{let{x:M,y:E}=N;return{x:M,y:E}}},...g}=yn(t,n),p={x:s,y:r},y=await ho(n,g),b=La(bn(c)),w=im(b);let S=p[w],C=p[b];if(u){const N=w==="y"?"top":"left",M=w==="y"?"bottom":"right",E=S+y[N],j=S-y[M];S=Kf(E,S,j)}if(d){const N=b==="y"?"top":"left",M=b==="y"?"bottom":"right",E=C+y[N],j=C-y[M];C=Kf(E,C,j)}const T=f.fn({...n,[w]:S,[b]:C});return{...T,data:{x:T.x-s,y:T.y-r,enabled:{[w]:u,[b]:d}}}}}},qO=function(t){return t===void 0&&(t={}),{options:t,fn(n){const{x:s,y:r,placement:c,rects:u,middlewareData:d}=n,{offset:f=0,mainAxis:g=!0,crossAxis:p=!0}=yn(t,n),y={x:s,y:r},b=La(c),w=im(b);let S=y[w],C=y[b];const T=yn(f,n),N=typeof T=="number"?{mainAxis:T,crossAxis:0}:{mainAxis:0,crossAxis:0,...T};if(g){const j=w==="y"?"height":"width",q=u.reference[w]-u.floating[j]+N.mainAxis,P=u.reference[w]+u.reference[j]-N.mainAxis;S<q?S=q:S>P&&(S=P)}if(p){var M,E;const j=w==="y"?"width":"height",q=nS.has(bn(c)),P=u.reference[b]-u.floating[j]+(q&&((M=d.offset)==null?void 0:M[b])||0)+(q?0:N.crossAxis),G=u.reference[b]+u.reference[j]+(q?0:((E=d.offset)==null?void 0:E[b])||0)-(q?N.crossAxis:0);C<P?C=P:C>G&&(C=G)}return{[w]:S,[b]:C}}}},VO=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var s,r;const{placement:c,rects:u,platform:d,elements:f}=n,{apply:g=()=>{},...p}=yn(t,n),y=await ho(n,p),b=bn(c),w=Qi(c),S=La(c)==="y",{width:C,height:T}=u.floating;let N,M;b==="top"||b==="bottom"?(N=b,M=w===(await(d.isRTL==null?void 0:d.isRTL(f.floating))?"start":"end")?"left":"right"):(M=b,N=w==="end"?"top":"bottom");const E=T-y.top-y.bottom,j=C-y.left-y.right,q=Zn(T-y[N],E),P=Zn(C-y[M],j),G=!n.middlewareData.shift;let _=q,H=P;if((s=n.middlewareData.shift)!=null&&s.enabled.x&&(H=j),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(_=E),G&&!w){const se=ea(y.left,0),re=ea(y.right,0),he=ea(y.top,0),ve=ea(y.bottom,0);S?H=C-2*(se!==0||re!==0?se+re:ea(y.left,y.right)):_=T-2*(he!==0||ve!==0?he+ve:ea(y.top,y.bottom))}await g({...n,availableWidth:H,availableHeight:_});const J=await d.getDimensions(f.floating);return C!==J.width||T!==J.height?{reset:{rects:!0}}:{}}}};function Gc(){return typeof window<"u"}function $i(t){return sS(t)?(t.nodeName||"").toLowerCase():"#document"}function ta(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function Ha(t){var n;return(n=(sS(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function sS(t){return Gc()?t instanceof Node||t instanceof ta(t).Node:!1}function ja(t){return Gc()?t instanceof Element||t instanceof ta(t).Element:!1}function Va(t){return Gc()?t instanceof HTMLElement||t instanceof ta(t).HTMLElement:!1}function qv(t){return!Gc()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ta(t).ShadowRoot}const HO=new Set(["inline","contents"]);function ko(t){const{overflow:n,overflowX:s,overflowY:r,display:c}=Na(t);return/auto|scroll|overlay|hidden|clip/.test(n+r+s)&&!HO.has(c)}const UO=new Set(["table","td","th"]);function FO(t){return UO.has($i(t))}const IO=[":popover-open",":modal"];function Wc(t){return IO.some(n=>{try{return t.matches(n)}catch{return!1}})}const GO=["transform","translate","scale","rotate","perspective"],WO=["transform","translate","scale","rotate","perspective","filter"],KO=["paint","layout","strict","content"];function lm(t){const n=cm(),s=ja(t)?Na(t):t;return GO.some(r=>s[r]?s[r]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!n&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!n&&(s.filter?s.filter!=="none":!1)||WO.some(r=>(s.willChange||"").includes(r))||KO.some(r=>(s.contain||"").includes(r))}function YO(t){let n=es(t);for(;Va(n)&&!qi(n);){if(lm(n))return n;if(Wc(n))return null;n=es(n)}return null}function cm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const QO=new Set(["html","body","#document"]);function qi(t){return QO.has($i(t))}function Na(t){return ta(t).getComputedStyle(t)}function Kc(t){return ja(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function es(t){if($i(t)==="html")return t;const n=t.assignedSlot||t.parentNode||qv(t)&&t.host||Ha(t);return qv(n)?n.host:n}function iS(t){const n=es(t);return qi(n)?t.ownerDocument?t.ownerDocument.body:t.body:Va(n)&&ko(n)?n:iS(n)}function fo(t,n,s){var r;n===void 0&&(n=[]),s===void 0&&(s=!0);const c=iS(t),u=c===((r=t.ownerDocument)==null?void 0:r.body),d=ta(c);if(u){const f=Qf(d);return n.concat(d,d.visualViewport||[],ko(c)?c:[],f&&s?fo(f):[])}return n.concat(c,fo(c,[],s))}function Qf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function rS(t){const n=Na(t);let s=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const c=Va(t),u=c?t.offsetWidth:s,d=c?t.offsetHeight:r,f=Mc(s)!==u||Mc(r)!==d;return f&&(s=u,r=d),{width:s,height:r,$:f}}function um(t){return ja(t)?t:t.contextElement}function Li(t){const n=um(t);if(!Va(n))return za(1);const s=n.getBoundingClientRect(),{width:r,height:c,$:u}=rS(n);let d=(u?Mc(s.width):s.width)/r,f=(u?Mc(s.height):s.height)/c;return(!d||!Number.isFinite(d))&&(d=1),(!f||!Number.isFinite(f))&&(f=1),{x:d,y:f}}const $O=za(0);function oS(t){const n=ta(t);return!cm()||!n.visualViewport?$O:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function XO(t,n,s){return n===void 0&&(n=!1),!s||n&&s!==ta(t)?!1:n}function Bs(t,n,s,r){n===void 0&&(n=!1),s===void 0&&(s=!1);const c=t.getBoundingClientRect(),u=um(t);let d=za(1);n&&(r?ja(r)&&(d=Li(r)):d=Li(t));const f=XO(u,s,r)?oS(u):za(0);let g=(c.left+f.x)/d.x,p=(c.top+f.y)/d.y,y=c.width/d.x,b=c.height/d.y;if(u){const w=ta(u),S=r&&ja(r)?ta(r):r;let C=w,T=Qf(C);for(;T&&r&&S!==C;){const N=Li(T),M=T.getBoundingClientRect(),E=Na(T),j=M.left+(T.clientLeft+parseFloat(E.paddingLeft))*N.x,q=M.top+(T.clientTop+parseFloat(E.paddingTop))*N.y;g*=N.x,p*=N.y,y*=N.x,b*=N.y,g+=j,p+=q,C=ta(T),T=Qf(C)}}return Dc({width:y,height:b,x:g,y:p})}function Yc(t,n){const s=Kc(t).scrollLeft;return n?n.left+s:Bs(Ha(t)).left+s}function lS(t,n){const s=t.getBoundingClientRect(),r=s.left+n.scrollLeft-Yc(t,s),c=s.top+n.scrollTop;return{x:r,y:c}}function JO(t){let{elements:n,rect:s,offsetParent:r,strategy:c}=t;const u=c==="fixed",d=Ha(r),f=n?Wc(n.floating):!1;if(r===d||f&&u)return s;let g={scrollLeft:0,scrollTop:0},p=za(1);const y=za(0),b=Va(r);if((b||!b&&!u)&&(($i(r)!=="body"||ko(d))&&(g=Kc(r)),Va(r))){const S=Bs(r);p=Li(r),y.x=S.x+r.clientLeft,y.y=S.y+r.clientTop}const w=d&&!b&&!u?lS(d,g):za(0);return{width:s.width*p.x,height:s.height*p.y,x:s.x*p.x-g.scrollLeft*p.x+y.x+w.x,y:s.y*p.y-g.scrollTop*p.y+y.y+w.y}}function ZO(t){return Array.from(t.getClientRects())}function eP(t){const n=Ha(t),s=Kc(t),r=t.ownerDocument.body,c=ea(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),u=ea(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let d=-s.scrollLeft+Yc(t);const f=-s.scrollTop;return Na(r).direction==="rtl"&&(d+=ea(n.clientWidth,r.clientWidth)-c),{width:c,height:u,x:d,y:f}}const Vv=25;function tP(t,n){const s=ta(t),r=Ha(t),c=s.visualViewport;let u=r.clientWidth,d=r.clientHeight,f=0,g=0;if(c){u=c.width,d=c.height;const y=cm();(!y||y&&n==="fixed")&&(f=c.offsetLeft,g=c.offsetTop)}const p=Yc(r);if(p<=0){const y=r.ownerDocument,b=y.body,w=getComputedStyle(b),S=y.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,C=Math.abs(r.clientWidth-b.clientWidth-S);C<=Vv&&(u-=C)}else p<=Vv&&(u+=p);return{width:u,height:d,x:f,y:g}}const aP=new Set(["absolute","fixed"]);function nP(t,n){const s=Bs(t,!0,n==="fixed"),r=s.top+t.clientTop,c=s.left+t.clientLeft,u=Va(t)?Li(t):za(1),d=t.clientWidth*u.x,f=t.clientHeight*u.y,g=c*u.x,p=r*u.y;return{width:d,height:f,x:g,y:p}}function Hv(t,n,s){let r;if(n==="viewport")r=tP(t,s);else if(n==="document")r=eP(Ha(t));else if(ja(n))r=nP(n,s);else{const c=oS(t);r={x:n.x-c.x,y:n.y-c.y,width:n.width,height:n.height}}return Dc(r)}function cS(t,n){const s=es(t);return s===n||!ja(s)||qi(s)?!1:Na(s).position==="fixed"||cS(s,n)}function sP(t,n){const s=n.get(t);if(s)return s;let r=fo(t,[],!1).filter(f=>ja(f)&&$i(f)!=="body"),c=null;const u=Na(t).position==="fixed";let d=u?es(t):t;for(;ja(d)&&!qi(d);){const f=Na(d),g=lm(d);!g&&f.position==="fixed"&&(c=null),(u?!g&&!c:!g&&f.position==="static"&&!!c&&aP.has(c.position)||ko(d)&&!g&&cS(t,d))?r=r.filter(y=>y!==d):c=f,d=es(d)}return n.set(t,r),r}function iP(t){let{element:n,boundary:s,rootBoundary:r,strategy:c}=t;const d=[...s==="clippingAncestors"?Wc(n)?[]:sP(n,this._c):[].concat(s),r],f=d[0],g=d.reduce((p,y)=>{const b=Hv(n,y,c);return p.top=ea(b.top,p.top),p.right=Zn(b.right,p.right),p.bottom=Zn(b.bottom,p.bottom),p.left=ea(b.left,p.left),p},Hv(n,f,c));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function rP(t){const{width:n,height:s}=rS(t);return{width:n,height:s}}function oP(t,n,s){const r=Va(n),c=Ha(n),u=s==="fixed",d=Bs(t,!0,u,n);let f={scrollLeft:0,scrollTop:0};const g=za(0);function p(){g.x=Yc(c)}if(r||!r&&!u)if(($i(n)!=="body"||ko(c))&&(f=Kc(n)),r){const S=Bs(n,!0,u,n);g.x=S.x+n.clientLeft,g.y=S.y+n.clientTop}else c&&p();u&&!r&&c&&p();const y=c&&!r&&!u?lS(c,f):za(0),b=d.left+f.scrollLeft-g.x-y.x,w=d.top+f.scrollTop-g.y-y.y;return{x:b,y:w,width:d.width,height:d.height}}function sf(t){return Na(t).position==="static"}function Uv(t,n){if(!Va(t)||Na(t).position==="fixed")return null;if(n)return n(t);let s=t.offsetParent;return Ha(t)===s&&(s=s.ownerDocument.body),s}function uS(t,n){const s=ta(t);if(Wc(t))return s;if(!Va(t)){let c=es(t);for(;c&&!qi(c);){if(ja(c)&&!sf(c))return c;c=es(c)}return s}let r=Uv(t,n);for(;r&&FO(r)&&sf(r);)r=Uv(r,n);return r&&qi(r)&&sf(r)&&!lm(r)?s:r||YO(t)||s}const lP=async function(t){const n=this.getOffsetParent||uS,s=this.getDimensions,r=await s(t.floating);return{reference:oP(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function cP(t){return Na(t).direction==="rtl"}const uP={convertOffsetParentRelativeRectToViewportRelativeRect:JO,getDocumentElement:Ha,getClippingRect:iP,getOffsetParent:uS,getElementRects:lP,getClientRects:ZO,getDimensions:rP,getScale:Li,isElement:ja,isRTL:cP};function dS(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height}function dP(t,n){let s=null,r;const c=Ha(t);function u(){var f;clearTimeout(r),(f=s)==null||f.disconnect(),s=null}function d(f,g){f===void 0&&(f=!1),g===void 0&&(g=1),u();const p=t.getBoundingClientRect(),{left:y,top:b,width:w,height:S}=p;if(f||n(),!w||!S)return;const C=Zl(b),T=Zl(c.clientWidth-(y+w)),N=Zl(c.clientHeight-(b+S)),M=Zl(y),j={rootMargin:-C+"px "+-T+"px "+-N+"px "+-M+"px",threshold:ea(0,Zn(1,g))||1};let q=!0;function P(G){const _=G[0].intersectionRatio;if(_!==g){if(!q)return d();_?d(!1,_):r=setTimeout(()=>{d(!1,1e-7)},1e3)}_===1&&!dS(p,t.getBoundingClientRect())&&d(),q=!1}try{s=new IntersectionObserver(P,{...j,root:c.ownerDocument})}catch{s=new IntersectionObserver(P,j)}s.observe(t)}return d(!0),u}function hP(t,n,s,r){r===void 0&&(r={});const{ancestorScroll:c=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:g=!1}=r,p=um(t),y=c||u?[...p?fo(p):[],...fo(n)]:[];y.forEach(M=>{c&&M.addEventListener("scroll",s,{passive:!0}),u&&M.addEventListener("resize",s)});const b=p&&f?dP(p,s):null;let w=-1,S=null;d&&(S=new ResizeObserver(M=>{let[E]=M;E&&E.target===p&&S&&(S.unobserve(n),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var j;(j=S)==null||j.observe(n)})),s()}),p&&!g&&S.observe(p),S.observe(n));let C,T=g?Bs(t):null;g&&N();function N(){const M=Bs(t);T&&!dS(T,M)&&s(),T=M,C=requestAnimationFrame(N)}return s(),()=>{var M;y.forEach(E=>{c&&E.removeEventListener("scroll",s),u&&E.removeEventListener("resize",s)}),b==null||b(),(M=S)==null||M.disconnect(),S=null,g&&cancelAnimationFrame(C)}}const fP=_O,gP=zO,mP=OO,pP=VO,yP=PO,Fv=BO,bP=qO,xP=(t,n,s)=>{const r=new Map,c={platform:uP,...s},u={...c.platform,_c:r};return RO(t,n,{...c,platform:u})};var vP=typeof document<"u",wP=function(){},fc=vP?x.useLayoutEffect:wP;function Rc(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let s,r,c;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(s=t.length,s!==n.length)return!1;for(r=s;r--!==0;)if(!Rc(t[r],n[r]))return!1;return!0}if(c=Object.keys(t),s=c.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!{}.hasOwnProperty.call(n,c[r]))return!1;for(r=s;r--!==0;){const u=c[r];if(!(u==="_owner"&&t.$$typeof)&&!Rc(t[u],n[u]))return!1}return!0}return t!==t&&n!==n}function hS(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Iv(t,n){const s=hS(t);return Math.round(n*s)/s}function rf(t){const n=x.useRef(t);return fc(()=>{n.current=t}),n}function SP(t){t===void 0&&(t={});const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:c,elements:{reference:u,floating:d}={},transform:f=!0,whileElementsMounted:g,open:p}=t,[y,b]=x.useState({x:0,y:0,strategy:s,placement:n,middlewareData:{},isPositioned:!1}),[w,S]=x.useState(r);Rc(w,r)||S(r);const[C,T]=x.useState(null),[N,M]=x.useState(null),E=x.useCallback(B=>{B!==G.current&&(G.current=B,T(B))},[]),j=x.useCallback(B=>{B!==_.current&&(_.current=B,M(B))},[]),q=u||C,P=d||N,G=x.useRef(null),_=x.useRef(null),H=x.useRef(y),J=g!=null,se=rf(g),re=rf(c),he=rf(p),ve=x.useCallback(()=>{if(!G.current||!_.current)return;const B={placement:n,strategy:s,middleware:w};re.current&&(B.platform=re.current),xP(G.current,_.current,B).then(Q=>{const ne={...Q,isPositioned:he.current!==!1};U.current&&!Rc(H.current,ne)&&(H.current=ne,yo.flushSync(()=>{b(ne)}))})},[w,n,s,re,he]);fc(()=>{p===!1&&H.current.isPositioned&&(H.current.isPositioned=!1,b(B=>({...B,isPositioned:!1})))},[p]);const U=x.useRef(!1);fc(()=>(U.current=!0,()=>{U.current=!1}),[]),fc(()=>{if(q&&(G.current=q),P&&(_.current=P),q&&P){if(se.current)return se.current(q,P,ve);ve()}},[q,P,ve,se,J]);const z=x.useMemo(()=>({reference:G,floating:_,setReference:E,setFloating:j}),[E,j]),A=x.useMemo(()=>({reference:q,floating:P}),[q,P]),D=x.useMemo(()=>{const B={position:s,left:0,top:0};if(!A.floating)return B;const Q=Iv(A.floating,y.x),ne=Iv(A.floating,y.y);return f?{...B,transform:"translate("+Q+"px, "+ne+"px)",...hS(A.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:Q,top:ne}},[s,f,A.floating,y.x,y.y]);return x.useMemo(()=>({...y,update:ve,refs:z,elements:A,floatingStyles:D}),[y,ve,z,A,D])}const TP=t=>{function n(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:t,fn(s){const{element:r,padding:c}=typeof t=="function"?t(s):t;return r&&n(r)?r.current!=null?Fv({element:r.current,padding:c}).fn(s):{}:r?Fv({element:r,padding:c}).fn(s):{}}}},kP=(t,n)=>({...fP(t),options:[t,n]}),CP=(t,n)=>({...gP(t),options:[t,n]}),jP=(t,n)=>({...bP(t),options:[t,n]}),NP=(t,n)=>({...mP(t),options:[t,n]}),AP=(t,n)=>({...pP(t),options:[t,n]}),MP=(t,n)=>({...yP(t),options:[t,n]}),EP=(t,n)=>({...TP(t),options:[t,n]});var DP="Arrow",fS=x.forwardRef((t,n)=>{const{children:s,width:r=10,height:c=5,...u}=t;return o.jsx(Qe.svg,{...u,ref:n,width:r,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?s:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});fS.displayName=DP;var RP=fS;function BP(t){const[n,s]=x.useState(void 0);return jt(()=>{if(t){s({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const u=c[0];let d,f;if("borderBoxSize"in u){const g=u.borderBoxSize,p=Array.isArray(g)?g[0]:g;d=p.inlineSize,f=p.blockSize}else d=t.offsetWidth,f=t.offsetHeight;s({width:d,height:f})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else s(void 0)},[t]),n}var dm="Popper",[gS,mS]=Fc(dm),[OP,pS]=gS(dm),yS=t=>{const{__scopePopper:n,children:s}=t,[r,c]=x.useState(null);return o.jsx(OP,{scope:n,anchor:r,onAnchorChange:c,children:s})};yS.displayName=dm;var bS="PopperAnchor",xS=x.forwardRef((t,n)=>{const{__scopePopper:s,virtualRef:r,...c}=t,u=pS(bS,s),d=x.useRef(null),f=ft(n,d),g=x.useRef(null);return x.useEffect(()=>{const p=g.current;g.current=(r==null?void 0:r.current)||d.current,p!==g.current&&u.onAnchorChange(g.current)}),r?null:o.jsx(Qe.div,{...c,ref:f})});xS.displayName=bS;var hm="PopperContent",[PP,LP]=gS(hm),vS=x.forwardRef((t,n)=>{var ae,be,Se,je,Ne,Ae;const{__scopePopper:s,side:r="bottom",sideOffset:c=0,align:u="center",alignOffset:d=0,arrowPadding:f=0,avoidCollisions:g=!0,collisionBoundary:p=[],collisionPadding:y=0,sticky:b="partial",hideWhenDetached:w=!1,updatePositionStrategy:S="optimized",onPlaced:C,...T}=t,N=pS(hm,s),[M,E]=x.useState(null),j=ft(n,Nt=>E(Nt)),[q,P]=x.useState(null),G=BP(q),_=(G==null?void 0:G.width)??0,H=(G==null?void 0:G.height)??0,J=r+(u!=="center"?"-"+u:""),se=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},re=Array.isArray(p)?p:[p],he=re.length>0,ve={padding:se,boundary:re.filter(zP),altBoundary:he},{refs:U,floatingStyles:z,placement:A,isPositioned:D,middlewareData:B}=SP({strategy:"fixed",placement:J,whileElementsMounted:(...Nt)=>hP(...Nt,{animationFrame:S==="always"}),elements:{reference:N.anchor},middleware:[kP({mainAxis:c+H,alignmentAxis:d}),g&&CP({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?jP():void 0,...ve}),g&&NP({...ve}),AP({...ve,apply:({elements:Nt,rects:gt,availableWidth:Ua,availableHeight:Fa})=>{const{width:ss,height:Co}=gt.reference,xn=Nt.floating.style;xn.setProperty("--radix-popper-available-width",`${Ua}px`),xn.setProperty("--radix-popper-available-height",`${Fa}px`),xn.setProperty("--radix-popper-anchor-width",`${ss}px`),xn.setProperty("--radix-popper-anchor-height",`${Co}px`)}}),q&&EP({element:q,padding:f}),qP({arrowWidth:_,arrowHeight:H}),w&&MP({strategy:"referenceHidden",...ve})]}),[Q,ne]=TS(A),R=Rs(C);jt(()=>{D&&(R==null||R())},[D,R]);const K=(ae=B.arrow)==null?void 0:ae.x,ee=(be=B.arrow)==null?void 0:be.y,te=((Se=B.arrow)==null?void 0:Se.centerOffset)!==0,[ge,pe]=x.useState();return jt(()=>{M&&pe(window.getComputedStyle(M).zIndex)},[M]),o.jsx("div",{ref:U.setFloating,"data-radix-popper-content-wrapper":"",style:{...z,transform:D?z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ge,"--radix-popper-transform-origin":[(je=B.transformOrigin)==null?void 0:je.x,(Ne=B.transformOrigin)==null?void 0:Ne.y].join(" "),...((Ae=B.hide)==null?void 0:Ae.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:o.jsx(PP,{scope:s,placedSide:Q,onArrowChange:P,arrowX:K,arrowY:ee,shouldHideArrow:te,children:o.jsx(Qe.div,{"data-side":Q,"data-align":ne,...T,ref:j,style:{...T.style,animation:D?void 0:"none"}})})})});vS.displayName=hm;var wS="PopperArrow",_P={top:"bottom",right:"left",bottom:"top",left:"right"},SS=x.forwardRef(function(n,s){const{__scopePopper:r,...c}=n,u=LP(wS,r),d=_P[u.placedSide];return o.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:o.jsx(RP,{...c,ref:s,style:{...c.style,display:"block"}})})});SS.displayName=wS;function zP(t){return t!==null}var qP=t=>({name:"transformOrigin",options:t,fn(n){var N,M,E;const{placement:s,rects:r,middlewareData:c}=n,d=((N=c.arrow)==null?void 0:N.centerOffset)!==0,f=d?0:t.arrowWidth,g=d?0:t.arrowHeight,[p,y]=TS(s),b={start:"0%",center:"50%",end:"100%"}[y],w=(((M=c.arrow)==null?void 0:M.x)??0)+f/2,S=(((E=c.arrow)==null?void 0:E.y)??0)+g/2;let C="",T="";return p==="bottom"?(C=d?b:`${w}px`,T=`${-g}px`):p==="top"?(C=d?b:`${w}px`,T=`${r.floating.height+g}px`):p==="right"?(C=`${-g}px`,T=d?b:`${S}px`):p==="left"&&(C=`${r.floating.width+g}px`,T=d?b:`${S}px`),{data:{x:C,y:T}}}});function TS(t){const[n,s="center"]=t.split("-");return[n,s]}var VP=yS,HP=xS,UP=vS,FP=SS,IP="Portal",kS=x.forwardRef((t,n)=>{var f;const{container:s,...r}=t,[c,u]=x.useState(!1);jt(()=>u(!0),[]);const d=s||c&&((f=globalThis==null?void 0:globalThis.document)==null?void 0:f.body);return d?DN.createPortal(o.jsx(Qe.div,{...r,ref:n}),d):null});kS.displayName=IP;function GP(t){const n=WP(t),s=x.forwardRef((r,c)=>{const{children:u,...d}=r,f=x.Children.toArray(u),g=f.find(YP);if(g){const p=g.props.children,y=f.map(b=>b===g?x.Children.count(p)>1?x.Children.only(null):x.isValidElement(p)?p.props.children:null:b);return o.jsx(n,{...d,ref:c,children:x.isValidElement(p)?x.cloneElement(p,void 0,y):null})}return o.jsx(n,{...d,ref:c,children:u})});return s.displayName=`${t}.Slot`,s}function WP(t){const n=x.forwardRef((s,r)=>{const{children:c,...u}=s;if(x.isValidElement(c)){const d=$P(c),f=QP(u,c.props);return c.type!==x.Fragment&&(f.ref=r?To(r,d):d),x.cloneElement(c,f)}return x.Children.count(c)>1?x.Children.only(null):null});return n.displayName=`${t}.SlotClone`,n}var KP=Symbol("radix.slottable");function YP(t){return x.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===KP}function QP(t,n){const s={...n};for(const r in n){const c=t[r],u=n[r];/^on[A-Z]/.test(r)?c&&u?s[r]=(...f)=>{const g=u(...f);return c(...f),g}:c&&(s[r]=c):r==="style"?s[r]={...c,...u}:r==="className"&&(s[r]=[c,u].filter(Boolean).join(" "))}return{...t,...s}}function $P(t){var r,c;let n=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?t.ref:(n=(c=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:c.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}var XP=rg[" useInsertionEffect ".trim().toString()]||jt;function $f({prop:t,defaultProp:n,onChange:s=()=>{},caller:r}){const[c,u,d]=JP({defaultProp:n,onChange:s}),f=t!==void 0,g=f?t:c;{const y=x.useRef(t!==void 0);x.useEffect(()=>{const b=y.current;b!==f&&console.warn(`${r} is changing from ${b?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=f},[f,r])}const p=x.useCallback(y=>{var b;if(f){const w=ZP(y)?y(t):y;w!==t&&((b=d.current)==null||b.call(d,w))}else u(y)},[f,t,u,d]);return[g,p]}function JP({defaultProp:t,onChange:n}){const[s,r]=x.useState(t),c=x.useRef(s),u=x.useRef(n);return XP(()=>{u.current=n},[n]),x.useEffect(()=>{var d;c.current!==s&&((d=u.current)==null||d.call(u,s),c.current=s)},[s,c]),[s,r,u]}function ZP(t){return typeof t=="function"}function e6(t){const n=x.useRef({value:t,previous:t});return x.useMemo(()=>(n.current.value!==t&&(n.current.previous=n.current.value,n.current.value=t),n.current.previous),[t])}var CS=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),t6="VisuallyHidden",a6=x.forwardRef((t,n)=>o.jsx(Qe.span,{...t,ref:n,style:{...CS,...t.style}}));a6.displayName=t6;var n6=function(t){if(typeof document>"u")return null;var n=Array.isArray(t)?t[0]:t;return n.ownerDocument.body},Ci=new WeakMap,ec=new WeakMap,tc={},of=0,jS=function(t){return t&&(t.host||jS(t.parentNode))},s6=function(t,n){return n.map(function(s){if(t.contains(s))return s;var r=jS(s);return r&&t.contains(r)?r:(console.error("aria-hidden",s,"in not contained inside",t,". Doing nothing"),null)}).filter(function(s){return!!s})},i6=function(t,n,s,r){var c=s6(n,Array.isArray(t)?t:[t]);tc[s]||(tc[s]=new WeakMap);var u=tc[s],d=[],f=new Set,g=new Set(c),p=function(b){!b||f.has(b)||(f.add(b),p(b.parentNode))};c.forEach(p);var y=function(b){!b||g.has(b)||Array.prototype.forEach.call(b.children,function(w){if(f.has(w))y(w);else try{var S=w.getAttribute(r),C=S!==null&&S!=="false",T=(Ci.get(w)||0)+1,N=(u.get(w)||0)+1;Ci.set(w,T),u.set(w,N),d.push(w),T===1&&C&&ec.set(w,!0),N===1&&w.setAttribute(s,"true"),C||w.setAttribute(r,"true")}catch(M){console.error("aria-hidden: cannot operate on ",w,M)}})};return y(n),f.clear(),of++,function(){d.forEach(function(b){var w=Ci.get(b)-1,S=u.get(b)-1;Ci.set(b,w),u.set(b,S),w||(ec.has(b)||b.removeAttribute(r),ec.delete(b)),S||b.removeAttribute(s)}),of--,of||(Ci=new WeakMap,Ci=new WeakMap,ec=new WeakMap,tc={})}},r6=function(t,n,s){s===void 0&&(s="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),c=n6(t);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live], script"))),i6(r,c,s,"aria-hidden")):function(){return null}},Pa=function(){return Pa=Object.assign||function(n){for(var s,r=1,c=arguments.length;r<c;r++){s=arguments[r];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(n[u]=s[u])}return n},Pa.apply(this,arguments)};function NS(t,n){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)n.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s}function o6(t,n,s){if(s||arguments.length===2)for(var r=0,c=n.length,u;r<c;r++)(u||!(r in n))&&(u||(u=Array.prototype.slice.call(n,0,r)),u[r]=n[r]);return t.concat(u||Array.prototype.slice.call(n))}var gc="right-scroll-bar-position",mc="width-before-scroll-bar",l6="with-scroll-bars-hidden",c6="--removed-body-scroll-bar-size";function lf(t,n){return typeof t=="function"?t(n):t&&(t.current=n),t}function u6(t,n){var s=x.useState(function(){return{value:t,callback:n,facade:{get current(){return s.value},set current(r){var c=s.value;c!==r&&(s.value=r,s.callback(r,c))}}}})[0];return s.callback=n,s.facade}var d6=typeof window<"u"?x.useLayoutEffect:x.useEffect,Gv=new WeakMap;function h6(t,n){var s=u6(null,function(r){return t.forEach(function(c){return lf(c,r)})});return d6(function(){var r=Gv.get(s);if(r){var c=new Set(r),u=new Set(t),d=s.current;c.forEach(function(f){u.has(f)||lf(f,null)}),u.forEach(function(f){c.has(f)||lf(f,d)})}Gv.set(s,t)},[t]),s}function f6(t){return t}function g6(t,n){n===void 0&&(n=f6);var s=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:t},useMedium:function(u){var d=n(u,r);return s.push(d),function(){s=s.filter(function(f){return f!==d})}},assignSyncMedium:function(u){for(r=!0;s.length;){var d=s;s=[],d.forEach(u)}s={push:function(f){return u(f)},filter:function(){return s}}},assignMedium:function(u){r=!0;var d=[];if(s.length){var f=s;s=[],f.forEach(u),d=s}var g=function(){var y=d;d=[],y.forEach(u)},p=function(){return Promise.resolve().then(g)};p(),s={push:function(y){d.push(y),p()},filter:function(y){return d=d.filter(y),s}}}};return c}function m6(t){t===void 0&&(t={});var n=g6(null);return n.options=Pa({async:!0,ssr:!1},t),n}var AS=function(t){var n=t.sideCar,s=NS(t,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return x.createElement(r,Pa({},s))};AS.isSideCarExport=!0;function p6(t,n){return t.useMedium(n),AS}var MS=m6(),cf=function(){},Qc=x.forwardRef(function(t,n){var s=x.useRef(null),r=x.useState({onScrollCapture:cf,onWheelCapture:cf,onTouchMoveCapture:cf}),c=r[0],u=r[1],d=t.forwardProps,f=t.children,g=t.className,p=t.removeScrollBar,y=t.enabled,b=t.shards,w=t.sideCar,S=t.noRelative,C=t.noIsolation,T=t.inert,N=t.allowPinchZoom,M=t.as,E=M===void 0?"div":M,j=t.gapMode,q=NS(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=w,G=h6([s,n]),_=Pa(Pa({},q),c);return x.createElement(x.Fragment,null,y&&x.createElement(P,{sideCar:MS,removeScrollBar:p,shards:b,noRelative:S,noIsolation:C,inert:T,setCallbacks:u,allowPinchZoom:!!N,lockRef:s,gapMode:j}),d?x.cloneElement(x.Children.only(f),Pa(Pa({},_),{ref:G})):x.createElement(E,Pa({},_,{className:g,ref:G}),f))});Qc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Qc.classNames={fullWidth:mc,zeroRight:gc};var y6=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function b6(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var n=y6();return n&&t.setAttribute("nonce",n),t}function x6(t,n){t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}function v6(t){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(t)}var w6=function(){var t=0,n=null;return{add:function(s){t==0&&(n=b6())&&(x6(n,s),v6(n)),t++},remove:function(){t--,!t&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},S6=function(){var t=w6();return function(n,s){x.useEffect(function(){return t.add(n),function(){t.remove()}},[n&&s])}},ES=function(){var t=S6(),n=function(s){var r=s.styles,c=s.dynamic;return t(r,c),null};return n},T6={left:0,top:0,right:0,gap:0},uf=function(t){return parseInt(t||"",10)||0},k6=function(t){var n=window.getComputedStyle(document.body),s=n[t==="padding"?"paddingLeft":"marginLeft"],r=n[t==="padding"?"paddingTop":"marginTop"],c=n[t==="padding"?"paddingRight":"marginRight"];return[uf(s),uf(r),uf(c)]},C6=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return T6;var n=k6(t),s=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-s+n[2]-n[0])}},j6=ES(),_i="data-scroll-locked",N6=function(t,n,s,r){var c=t.left,u=t.top,d=t.right,f=t.gap;return s===void 0&&(s="margin"),`
  .`.concat(l6,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(f,"px ").concat(r,`;
  }
  body[`).concat(_i,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),s==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f,"px ").concat(r,`;
    `),s==="padding"&&"padding-right: ".concat(f,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(gc,` {
    right: `).concat(f,"px ").concat(r,`;
  }
  
  .`).concat(mc,` {
    margin-right: `).concat(f,"px ").concat(r,`;
  }
  
  .`).concat(gc," .").concat(gc,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(mc," .").concat(mc,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(_i,`] {
    `).concat(c6,": ").concat(f,`px;
  }
`)},Wv=function(){var t=parseInt(document.body.getAttribute(_i)||"0",10);return isFinite(t)?t:0},A6=function(){x.useEffect(function(){return document.body.setAttribute(_i,(Wv()+1).toString()),function(){var t=Wv()-1;t<=0?document.body.removeAttribute(_i):document.body.setAttribute(_i,t.toString())}},[])},M6=function(t){var n=t.noRelative,s=t.noImportant,r=t.gapMode,c=r===void 0?"margin":r;A6();var u=x.useMemo(function(){return C6(c)},[c]);return x.createElement(j6,{styles:N6(u,!n,c,s?"":"!important")})},Xf=!1;if(typeof window<"u")try{var ac=Object.defineProperty({},"passive",{get:function(){return Xf=!0,!0}});window.addEventListener("test",ac,ac),window.removeEventListener("test",ac,ac)}catch{Xf=!1}var ji=Xf?{passive:!1}:!1,E6=function(t){return t.tagName==="TEXTAREA"},DS=function(t,n){if(!(t instanceof Element))return!1;var s=window.getComputedStyle(t);return s[n]!=="hidden"&&!(s.overflowY===s.overflowX&&!E6(t)&&s[n]==="visible")},D6=function(t){return DS(t,"overflowY")},R6=function(t){return DS(t,"overflowX")},Kv=function(t,n){var s=n.ownerDocument,r=n;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var c=RS(t,r);if(c){var u=BS(t,r),d=u[1],f=u[2];if(d>f)return!0}r=r.parentNode}while(r&&r!==s.body);return!1},B6=function(t){var n=t.scrollTop,s=t.scrollHeight,r=t.clientHeight;return[n,s,r]},O6=function(t){var n=t.scrollLeft,s=t.scrollWidth,r=t.clientWidth;return[n,s,r]},RS=function(t,n){return t==="v"?D6(n):R6(n)},BS=function(t,n){return t==="v"?B6(n):O6(n)},P6=function(t,n){return t==="h"&&n==="rtl"?-1:1},L6=function(t,n,s,r,c){var u=P6(t,window.getComputedStyle(n).direction),d=u*r,f=s.target,g=n.contains(f),p=!1,y=d>0,b=0,w=0;do{if(!f)break;var S=BS(t,f),C=S[0],T=S[1],N=S[2],M=T-N-u*C;(C||M)&&RS(t,f)&&(b+=M,w+=C);var E=f.parentNode;f=E&&E.nodeType===Node.DOCUMENT_FRAGMENT_NODE?E.host:E}while(!g&&f!==document.body||g&&(n.contains(f)||n===f));return(y&&Math.abs(b)<1||!y&&Math.abs(w)<1)&&(p=!0),p},nc=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Yv=function(t){return[t.deltaX,t.deltaY]},Qv=function(t){return t&&"current"in t?t.current:t},_6=function(t,n){return t[0]===n[0]&&t[1]===n[1]},z6=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},q6=0,Ni=[];function V6(t){var n=x.useRef([]),s=x.useRef([0,0]),r=x.useRef(),c=x.useState(q6++)[0],u=x.useState(ES)[0],d=x.useRef(t);x.useEffect(function(){d.current=t},[t]),x.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(c));var T=o6([t.lockRef.current],(t.shards||[]).map(Qv),!0).filter(Boolean);return T.forEach(function(N){return N.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),T.forEach(function(N){return N.classList.remove("allow-interactivity-".concat(c))})}}},[t.inert,t.lockRef.current,t.shards]);var f=x.useCallback(function(T,N){if("touches"in T&&T.touches.length===2||T.type==="wheel"&&T.ctrlKey)return!d.current.allowPinchZoom;var M=nc(T),E=s.current,j="deltaX"in T?T.deltaX:E[0]-M[0],q="deltaY"in T?T.deltaY:E[1]-M[1],P,G=T.target,_=Math.abs(j)>Math.abs(q)?"h":"v";if("touches"in T&&_==="h"&&G.type==="range")return!1;var H=window.getSelection(),J=H&&H.anchorNode,se=J?J===G||J.contains(G):!1;if(se)return!1;var re=Kv(_,G);if(!re)return!0;if(re?P=_:(P=_==="v"?"h":"v",re=Kv(_,G)),!re)return!1;if(!r.current&&"changedTouches"in T&&(j||q)&&(r.current=P),!P)return!0;var he=r.current||P;return L6(he,N,T,he==="h"?j:q)},[]),g=x.useCallback(function(T){var N=T;if(!(!Ni.length||Ni[Ni.length-1]!==u)){var M="deltaY"in N?Yv(N):nc(N),E=n.current.filter(function(P){return P.name===N.type&&(P.target===N.target||N.target===P.shadowParent)&&_6(P.delta,M)})[0];if(E&&E.should){N.cancelable&&N.preventDefault();return}if(!E){var j=(d.current.shards||[]).map(Qv).filter(Boolean).filter(function(P){return P.contains(N.target)}),q=j.length>0?f(N,j[0]):!d.current.noIsolation;q&&N.cancelable&&N.preventDefault()}}},[]),p=x.useCallback(function(T,N,M,E){var j={name:T,delta:N,target:M,should:E,shadowParent:H6(M)};n.current.push(j),setTimeout(function(){n.current=n.current.filter(function(q){return q!==j})},1)},[]),y=x.useCallback(function(T){s.current=nc(T),r.current=void 0},[]),b=x.useCallback(function(T){p(T.type,Yv(T),T.target,f(T,t.lockRef.current))},[]),w=x.useCallback(function(T){p(T.type,nc(T),T.target,f(T,t.lockRef.current))},[]);x.useEffect(function(){return Ni.push(u),t.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:w}),document.addEventListener("wheel",g,ji),document.addEventListener("touchmove",g,ji),document.addEventListener("touchstart",y,ji),function(){Ni=Ni.filter(function(T){return T!==u}),document.removeEventListener("wheel",g,ji),document.removeEventListener("touchmove",g,ji),document.removeEventListener("touchstart",y,ji)}},[]);var S=t.removeScrollBar,C=t.inert;return x.createElement(x.Fragment,null,C?x.createElement(u,{styles:z6(c)}):null,S?x.createElement(M6,{noRelative:t.noRelative,gapMode:t.gapMode}):null)}function H6(t){for(var n=null;t!==null;)t instanceof ShadowRoot&&(n=t.host,t=t.host),t=t.parentNode;return n}const U6=p6(MS,V6);var OS=x.forwardRef(function(t,n){return x.createElement(Qc,Pa({},t,{ref:n,sideCar:U6}))});OS.classNames=Qc.classNames;var F6=[" ","Enter","ArrowUp","ArrowDown"],I6=[" ","Enter"],Os="Select",[$c,Xc,G6]=WB(Os),[Xi]=Fc(Os,[G6,mS]),Jc=mS(),[W6,as]=Xi(Os),[K6,Y6]=Xi(Os),PS=t=>{const{__scopeSelect:n,children:s,open:r,defaultOpen:c,onOpenChange:u,value:d,defaultValue:f,onValueChange:g,dir:p,name:y,autoComplete:b,disabled:w,required:S,form:C}=t,T=Jc(n),[N,M]=x.useState(null),[E,j]=x.useState(null),[q,P]=x.useState(!1),G=YB(p),[_,H]=$f({prop:r,defaultProp:c??!1,onChange:u,caller:Os}),[J,se]=$f({prop:d,defaultProp:f,onChange:g,caller:Os}),re=x.useRef(null),he=N?C||!!N.closest("form"):!0,[ve,U]=x.useState(new Set),z=Array.from(ve).map(A=>A.props.value).join(";");return o.jsx(VP,{...T,children:o.jsxs(W6,{required:S,scope:n,trigger:N,onTriggerChange:M,valueNode:E,onValueNodeChange:j,valueNodeHasChildren:q,onValueNodeHasChildrenChange:P,contentId:Ic(),value:J,onValueChange:se,open:_,onOpenChange:H,dir:G,triggerPointerDownPosRef:re,disabled:w,children:[o.jsx($c.Provider,{scope:n,children:o.jsx(K6,{scope:t.__scopeSelect,onNativeOptionAdd:x.useCallback(A=>{U(D=>new Set(D).add(A))},[]),onNativeOptionRemove:x.useCallback(A=>{U(D=>{const B=new Set(D);return B.delete(A),B})},[]),children:s})}),he?o.jsxs(nT,{"aria-hidden":!0,required:S,tabIndex:-1,name:y,autoComplete:b,value:J,onChange:A=>se(A.target.value),disabled:w,form:C,children:[J===void 0?o.jsx("option",{value:""}):null,Array.from(ve)]},z):null]})})};PS.displayName=Os;var LS="SelectTrigger",_S=x.forwardRef((t,n)=>{const{__scopeSelect:s,disabled:r=!1,...c}=t,u=Jc(s),d=as(LS,s),f=d.disabled||r,g=ft(n,d.onTriggerChange),p=Xc(s),y=x.useRef("touch"),[b,w,S]=iT(T=>{const N=p().filter(j=>!j.disabled),M=N.find(j=>j.value===d.value),E=rT(N,T,M);E!==void 0&&d.onValueChange(E.value)}),C=T=>{f||(d.onOpenChange(!0),S()),T&&(d.triggerPointerDownPosRef.current={x:Math.round(T.pageX),y:Math.round(T.pageY)})};return o.jsx(HP,{asChild:!0,...u,children:o.jsx(Qe.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:f,"data-disabled":f?"":void 0,"data-placeholder":sT(d.value)?"":void 0,...c,ref:g,onClick:st(c.onClick,T=>{T.currentTarget.focus(),y.current!=="mouse"&&C(T)}),onPointerDown:st(c.onPointerDown,T=>{y.current=T.pointerType;const N=T.target;N.hasPointerCapture(T.pointerId)&&N.releasePointerCapture(T.pointerId),T.button===0&&T.ctrlKey===!1&&T.pointerType==="mouse"&&(C(T),T.preventDefault())}),onKeyDown:st(c.onKeyDown,T=>{const N=b.current!=="";!(T.ctrlKey||T.altKey||T.metaKey)&&T.key.length===1&&w(T.key),!(N&&T.key===" ")&&F6.includes(T.key)&&(C(),T.preventDefault())})})})});_S.displayName=LS;var zS="SelectValue",qS=x.forwardRef((t,n)=>{const{__scopeSelect:s,className:r,style:c,children:u,placeholder:d="",...f}=t,g=as(zS,s),{onValueNodeHasChildrenChange:p}=g,y=u!==void 0,b=ft(n,g.onValueNodeChange);return jt(()=>{p(y)},[p,y]),o.jsx(Qe.span,{...f,ref:b,style:{pointerEvents:"none"},children:sT(g.value)?o.jsx(o.Fragment,{children:d}):u})});qS.displayName=zS;var Q6="SelectIcon",VS=x.forwardRef((t,n)=>{const{__scopeSelect:s,children:r,...c}=t;return o.jsx(Qe.span,{"aria-hidden":!0,...c,ref:n,children:r||"▼"})});VS.displayName=Q6;var $6="SelectPortal",HS=t=>o.jsx(kS,{asChild:!0,...t});HS.displayName=$6;var Ps="SelectContent",US=x.forwardRef((t,n)=>{const s=as(Ps,t.__scopeSelect),[r,c]=x.useState();if(jt(()=>{c(new DocumentFragment)},[]),!s.open){const u=r;return u?yo.createPortal(o.jsx(FS,{scope:t.__scopeSelect,children:o.jsx($c.Slot,{scope:t.__scopeSelect,children:o.jsx("div",{children:t.children})})}),u):null}return o.jsx(IS,{...t,ref:n})});US.displayName=Ps;var Ta=10,[FS,ns]=Xi(Ps),X6="SelectContentImpl",J6=GP("SelectContent.RemoveScroll"),IS=x.forwardRef((t,n)=>{const{__scopeSelect:s,position:r="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:u,onPointerDownOutside:d,side:f,sideOffset:g,align:p,alignOffset:y,arrowPadding:b,collisionBoundary:w,collisionPadding:S,sticky:C,hideWhenDetached:T,avoidCollisions:N,...M}=t,E=as(Ps,s),[j,q]=x.useState(null),[P,G]=x.useState(null),_=ft(n,ae=>q(ae)),[H,J]=x.useState(null),[se,re]=x.useState(null),he=Xc(s),[ve,U]=x.useState(!1),z=x.useRef(!1);x.useEffect(()=>{if(j)return r6(j)},[j]),dO();const A=x.useCallback(ae=>{const[be,...Se]=he().map(Ae=>Ae.ref.current),[je]=Se.slice(-1),Ne=document.activeElement;for(const Ae of ae)if(Ae===Ne||(Ae==null||Ae.scrollIntoView({block:"nearest"}),Ae===be&&P&&(P.scrollTop=0),Ae===je&&P&&(P.scrollTop=P.scrollHeight),Ae==null||Ae.focus(),document.activeElement!==Ne))return},[he,P]),D=x.useCallback(()=>A([H,j]),[A,H,j]);x.useEffect(()=>{ve&&D()},[ve,D]);const{onOpenChange:B,triggerPointerDownPosRef:Q}=E;x.useEffect(()=>{if(j){let ae={x:0,y:0};const be=je=>{var Ne,Ae;ae={x:Math.abs(Math.round(je.pageX)-(((Ne=Q.current)==null?void 0:Ne.x)??0)),y:Math.abs(Math.round(je.pageY)-(((Ae=Q.current)==null?void 0:Ae.y)??0))}},Se=je=>{ae.x<=10&&ae.y<=10?je.preventDefault():j.contains(je.target)||B(!1),document.removeEventListener("pointermove",be),Q.current=null};return Q.current!==null&&(document.addEventListener("pointermove",be),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",be),document.removeEventListener("pointerup",Se,{capture:!0})}}},[j,B,Q]),x.useEffect(()=>{const ae=()=>B(!1);return window.addEventListener("blur",ae),window.addEventListener("resize",ae),()=>{window.removeEventListener("blur",ae),window.removeEventListener("resize",ae)}},[B]);const[ne,R]=iT(ae=>{const be=he().filter(Ne=>!Ne.disabled),Se=be.find(Ne=>Ne.ref.current===document.activeElement),je=rT(be,ae,Se);je&&setTimeout(()=>je.ref.current.focus())}),K=x.useCallback((ae,be,Se)=>{const je=!z.current&&!Se;(E.value!==void 0&&E.value===be||je)&&(J(ae),je&&(z.current=!0))},[E.value]),ee=x.useCallback(()=>j==null?void 0:j.focus(),[j]),te=x.useCallback((ae,be,Se)=>{const je=!z.current&&!Se;(E.value!==void 0&&E.value===be||je)&&re(ae)},[E.value]),ge=r==="popper"?Jf:GS,pe=ge===Jf?{side:f,sideOffset:g,align:p,alignOffset:y,arrowPadding:b,collisionBoundary:w,collisionPadding:S,sticky:C,hideWhenDetached:T,avoidCollisions:N}:{};return o.jsx(FS,{scope:s,content:j,viewport:P,onViewportChange:G,itemRefCallback:K,selectedItem:H,onItemLeave:ee,itemTextRefCallback:te,focusSelectedItem:D,selectedItemText:se,position:r,isPositioned:ve,searchRef:ne,children:o.jsx(OS,{as:J6,allowPinchZoom:!0,children:o.jsx(eS,{asChild:!0,trapped:E.open,onMountAutoFocus:ae=>{ae.preventDefault()},onUnmountAutoFocus:st(c,ae=>{var be;(be=E.trigger)==null||be.focus({preventScroll:!0}),ae.preventDefault()}),children:o.jsx(J2,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:ae=>ae.preventDefault(),onDismiss:()=>E.onOpenChange(!1),children:o.jsx(ge,{role:"listbox",id:E.contentId,"data-state":E.open?"open":"closed",dir:E.dir,onContextMenu:ae=>ae.preventDefault(),...M,...pe,onPlaced:()=>U(!0),ref:_,style:{display:"flex",flexDirection:"column",outline:"none",...M.style},onKeyDown:st(M.onKeyDown,ae=>{const be=ae.ctrlKey||ae.altKey||ae.metaKey;if(ae.key==="Tab"&&ae.preventDefault(),!be&&ae.key.length===1&&R(ae.key),["ArrowUp","ArrowDown","Home","End"].includes(ae.key)){let je=he().filter(Ne=>!Ne.disabled).map(Ne=>Ne.ref.current);if(["ArrowUp","End"].includes(ae.key)&&(je=je.slice().reverse()),["ArrowUp","ArrowDown"].includes(ae.key)){const Ne=ae.target,Ae=je.indexOf(Ne);je=je.slice(Ae+1)}setTimeout(()=>A(je)),ae.preventDefault()}})})})})})})});IS.displayName=X6;var Z6="SelectItemAlignedPosition",GS=x.forwardRef((t,n)=>{const{__scopeSelect:s,onPlaced:r,...c}=t,u=as(Ps,s),d=ns(Ps,s),[f,g]=x.useState(null),[p,y]=x.useState(null),b=ft(n,_=>y(_)),w=Xc(s),S=x.useRef(!1),C=x.useRef(!0),{viewport:T,selectedItem:N,selectedItemText:M,focusSelectedItem:E}=d,j=x.useCallback(()=>{if(u.trigger&&u.valueNode&&f&&p&&T&&N&&M){const _=u.trigger.getBoundingClientRect(),H=p.getBoundingClientRect(),J=u.valueNode.getBoundingClientRect(),se=M.getBoundingClientRect();if(u.dir!=="rtl"){const Ne=se.left-H.left,Ae=J.left-Ne,Nt=_.left-Ae,gt=_.width+Nt,Ua=Math.max(gt,H.width),Fa=window.innerWidth-Ta,ss=Cv(Ae,[Ta,Math.max(Ta,Fa-Ua)]);f.style.minWidth=gt+"px",f.style.left=ss+"px"}else{const Ne=H.right-se.right,Ae=window.innerWidth-J.right-Ne,Nt=window.innerWidth-_.right-Ae,gt=_.width+Nt,Ua=Math.max(gt,H.width),Fa=window.innerWidth-Ta,ss=Cv(Ae,[Ta,Math.max(Ta,Fa-Ua)]);f.style.minWidth=gt+"px",f.style.right=ss+"px"}const re=w(),he=window.innerHeight-Ta*2,ve=T.scrollHeight,U=window.getComputedStyle(p),z=parseInt(U.borderTopWidth,10),A=parseInt(U.paddingTop,10),D=parseInt(U.borderBottomWidth,10),B=parseInt(U.paddingBottom,10),Q=z+A+ve+B+D,ne=Math.min(N.offsetHeight*5,Q),R=window.getComputedStyle(T),K=parseInt(R.paddingTop,10),ee=parseInt(R.paddingBottom,10),te=_.top+_.height/2-Ta,ge=he-te,pe=N.offsetHeight/2,ae=N.offsetTop+pe,be=z+A+ae,Se=Q-be;if(be<=te){const Ne=re.length>0&&N===re[re.length-1].ref.current;f.style.bottom="0px";const Ae=p.clientHeight-T.offsetTop-T.offsetHeight,Nt=Math.max(ge,pe+(Ne?ee:0)+Ae+D),gt=be+Nt;f.style.height=gt+"px"}else{const Ne=re.length>0&&N===re[0].ref.current;f.style.top="0px";const Nt=Math.max(te,z+T.offsetTop+(Ne?K:0)+pe)+Se;f.style.height=Nt+"px",T.scrollTop=be-te+T.offsetTop}f.style.margin=`${Ta}px 0`,f.style.minHeight=ne+"px",f.style.maxHeight=he+"px",r==null||r(),requestAnimationFrame(()=>S.current=!0)}},[w,u.trigger,u.valueNode,f,p,T,N,M,u.dir,r]);jt(()=>j(),[j]);const[q,P]=x.useState();jt(()=>{p&&P(window.getComputedStyle(p).zIndex)},[p]);const G=x.useCallback(_=>{_&&C.current===!0&&(j(),E==null||E(),C.current=!1)},[j,E]);return o.jsx(tL,{scope:s,contentWrapper:f,shouldExpandOnScrollRef:S,onScrollButtonChange:G,children:o.jsx("div",{ref:g,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:q},children:o.jsx(Qe.div,{...c,ref:b,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});GS.displayName=Z6;var eL="SelectPopperPosition",Jf=x.forwardRef((t,n)=>{const{__scopeSelect:s,align:r="start",collisionPadding:c=Ta,...u}=t,d=Jc(s);return o.jsx(UP,{...d,...u,ref:n,align:r,collisionPadding:c,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Jf.displayName=eL;var[tL,fm]=Xi(Ps,{}),Zf="SelectViewport",WS=x.forwardRef((t,n)=>{const{__scopeSelect:s,nonce:r,...c}=t,u=ns(Zf,s),d=fm(Zf,s),f=ft(n,u.onViewportChange),g=x.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),o.jsx($c.Slot,{scope:s,children:o.jsx(Qe.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:f,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:st(c.onScroll,p=>{const y=p.currentTarget,{contentWrapper:b,shouldExpandOnScrollRef:w}=d;if(w!=null&&w.current&&b){const S=Math.abs(g.current-y.scrollTop);if(S>0){const C=window.innerHeight-Ta*2,T=parseFloat(b.style.minHeight),N=parseFloat(b.style.height),M=Math.max(T,N);if(M<C){const E=M+S,j=Math.min(C,E),q=E-j;b.style.height=j+"px",b.style.bottom==="0px"&&(y.scrollTop=q>0?q:0,b.style.justifyContent="flex-end")}}}g.current=y.scrollTop})})})]})});WS.displayName=Zf;var KS="SelectGroup",[aL,nL]=Xi(KS),sL=x.forwardRef((t,n)=>{const{__scopeSelect:s,...r}=t,c=Ic();return o.jsx(aL,{scope:s,id:c,children:o.jsx(Qe.div,{role:"group","aria-labelledby":c,...r,ref:n})})});sL.displayName=KS;var YS="SelectLabel",iL=x.forwardRef((t,n)=>{const{__scopeSelect:s,...r}=t,c=nL(YS,s);return o.jsx(Qe.div,{id:c.id,...r,ref:n})});iL.displayName=YS;var Bc="SelectItem",[rL,QS]=Xi(Bc),$S=x.forwardRef((t,n)=>{const{__scopeSelect:s,value:r,disabled:c=!1,textValue:u,...d}=t,f=as(Bc,s),g=ns(Bc,s),p=f.value===r,[y,b]=x.useState(u??""),[w,S]=x.useState(!1),C=ft(n,E=>{var j;return(j=g.itemRefCallback)==null?void 0:j.call(g,E,r,c)}),T=Ic(),N=x.useRef("touch"),M=()=>{c||(f.onValueChange(r),f.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(rL,{scope:s,value:r,disabled:c,textId:T,isSelected:p,onItemTextChange:x.useCallback(E=>{b(j=>j||((E==null?void 0:E.textContent)??"").trim())},[]),children:o.jsx($c.ItemSlot,{scope:s,value:r,disabled:c,textValue:y,children:o.jsx(Qe.div,{role:"option","aria-labelledby":T,"data-highlighted":w?"":void 0,"aria-selected":p&&w,"data-state":p?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...d,ref:C,onFocus:st(d.onFocus,()=>S(!0)),onBlur:st(d.onBlur,()=>S(!1)),onClick:st(d.onClick,()=>{N.current!=="mouse"&&M()}),onPointerUp:st(d.onPointerUp,()=>{N.current==="mouse"&&M()}),onPointerDown:st(d.onPointerDown,E=>{N.current=E.pointerType}),onPointerMove:st(d.onPointerMove,E=>{var j;N.current=E.pointerType,c?(j=g.onItemLeave)==null||j.call(g):N.current==="mouse"&&E.currentTarget.focus({preventScroll:!0})}),onPointerLeave:st(d.onPointerLeave,E=>{var j;E.currentTarget===document.activeElement&&((j=g.onItemLeave)==null||j.call(g))}),onKeyDown:st(d.onKeyDown,E=>{var q;((q=g.searchRef)==null?void 0:q.current)!==""&&E.key===" "||(I6.includes(E.key)&&M(),E.key===" "&&E.preventDefault())})})})})});$S.displayName=Bc;var Zr="SelectItemText",XS=x.forwardRef((t,n)=>{const{__scopeSelect:s,className:r,style:c,...u}=t,d=as(Zr,s),f=ns(Zr,s),g=QS(Zr,s),p=Y6(Zr,s),[y,b]=x.useState(null),w=ft(n,M=>b(M),g.onItemTextChange,M=>{var E;return(E=f.itemTextRefCallback)==null?void 0:E.call(f,M,g.value,g.disabled)}),S=y==null?void 0:y.textContent,C=x.useMemo(()=>o.jsx("option",{value:g.value,disabled:g.disabled,children:S},g.value),[g.disabled,g.value,S]),{onNativeOptionAdd:T,onNativeOptionRemove:N}=p;return jt(()=>(T(C),()=>N(C)),[T,N,C]),o.jsxs(o.Fragment,{children:[o.jsx(Qe.span,{id:g.textId,...u,ref:w}),g.isSelected&&d.valueNode&&!d.valueNodeHasChildren?yo.createPortal(u.children,d.valueNode):null]})});XS.displayName=Zr;var JS="SelectItemIndicator",ZS=x.forwardRef((t,n)=>{const{__scopeSelect:s,...r}=t;return QS(JS,s).isSelected?o.jsx(Qe.span,{"aria-hidden":!0,...r,ref:n}):null});ZS.displayName=JS;var eg="SelectScrollUpButton",eT=x.forwardRef((t,n)=>{const s=ns(eg,t.__scopeSelect),r=fm(eg,t.__scopeSelect),[c,u]=x.useState(!1),d=ft(n,r.onScrollButtonChange);return jt(()=>{if(s.viewport&&s.isPositioned){let f=function(){const p=g.scrollTop>0;u(p)};const g=s.viewport;return f(),g.addEventListener("scroll",f),()=>g.removeEventListener("scroll",f)}},[s.viewport,s.isPositioned]),c?o.jsx(aT,{...t,ref:d,onAutoScroll:()=>{const{viewport:f,selectedItem:g}=s;f&&g&&(f.scrollTop=f.scrollTop-g.offsetHeight)}}):null});eT.displayName=eg;var tg="SelectScrollDownButton",tT=x.forwardRef((t,n)=>{const s=ns(tg,t.__scopeSelect),r=fm(tg,t.__scopeSelect),[c,u]=x.useState(!1),d=ft(n,r.onScrollButtonChange);return jt(()=>{if(s.viewport&&s.isPositioned){let f=function(){const p=g.scrollHeight-g.clientHeight,y=Math.ceil(g.scrollTop)<p;u(y)};const g=s.viewport;return f(),g.addEventListener("scroll",f),()=>g.removeEventListener("scroll",f)}},[s.viewport,s.isPositioned]),c?o.jsx(aT,{...t,ref:d,onAutoScroll:()=>{const{viewport:f,selectedItem:g}=s;f&&g&&(f.scrollTop=f.scrollTop+g.offsetHeight)}}):null});tT.displayName=tg;var aT=x.forwardRef((t,n)=>{const{__scopeSelect:s,onAutoScroll:r,...c}=t,u=ns("SelectScrollButton",s),d=x.useRef(null),f=Xc(s),g=x.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return x.useEffect(()=>()=>g(),[g]),jt(()=>{var y;const p=f().find(b=>b.ref.current===document.activeElement);(y=p==null?void 0:p.ref.current)==null||y.scrollIntoView({block:"nearest"})},[f]),o.jsx(Qe.div,{"aria-hidden":!0,...c,ref:n,style:{flexShrink:0,...c.style},onPointerDown:st(c.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(r,50))}),onPointerMove:st(c.onPointerMove,()=>{var p;(p=u.onItemLeave)==null||p.call(u),d.current===null&&(d.current=window.setInterval(r,50))}),onPointerLeave:st(c.onPointerLeave,()=>{g()})})}),oL="SelectSeparator",lL=x.forwardRef((t,n)=>{const{__scopeSelect:s,...r}=t;return o.jsx(Qe.div,{"aria-hidden":!0,...r,ref:n})});lL.displayName=oL;var ag="SelectArrow",cL=x.forwardRef((t,n)=>{const{__scopeSelect:s,...r}=t,c=Jc(s),u=as(ag,s),d=ns(ag,s);return u.open&&d.position==="popper"?o.jsx(FP,{...c,...r,ref:n}):null});cL.displayName=ag;var uL="SelectBubbleInput",nT=x.forwardRef(({__scopeSelect:t,value:n,...s},r)=>{const c=x.useRef(null),u=ft(r,c),d=e6(n);return x.useEffect(()=>{const f=c.current;if(!f)return;const g=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(g,"value").set;if(d!==n&&y){const b=new Event("change",{bubbles:!0});y.call(f,n),f.dispatchEvent(b)}},[d,n]),o.jsx(Qe.select,{...s,style:{...CS,...s.style},ref:u,defaultValue:n})});nT.displayName=uL;function sT(t){return t===""||t===void 0}function iT(t){const n=Rs(t),s=x.useRef(""),r=x.useRef(0),c=x.useCallback(d=>{const f=s.current+d;n(f),(function g(p){s.current=p,window.clearTimeout(r.current),p!==""&&(r.current=window.setTimeout(()=>g(""),1e3))})(f)},[n]),u=x.useCallback(()=>{s.current="",window.clearTimeout(r.current)},[]);return x.useEffect(()=>()=>window.clearTimeout(r.current),[]),[s,c,u]}function rT(t,n,s){const c=n.length>1&&Array.from(n).every(p=>p===n[0])?n[0]:n,u=s?t.indexOf(s):-1;let d=dL(t,Math.max(u,0));c.length===1&&(d=d.filter(p=>p!==s));const g=d.find(p=>p.textValue.toLowerCase().startsWith(c.toLowerCase()));return g!==s?g:void 0}function dL(t,n){return t.map((s,r)=>t[(n+r)%t.length])}var hL=PS,oT=_S,fL=qS,gL=VS,mL=HS,lT=US,pL=WS,cT=$S,yL=XS,bL=ZS,uT=eT,dT=tT;const $v=hL,Xv=fL,ng=x.forwardRef(({className:t,children:n,...s},r)=>o.jsxs(oT,{ref:r,className:xe("flex h-10 w-full items-center justify-between rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-tea-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 shadow-sm transition-all",t),...s,children:[n,o.jsx(gL,{asChild:!0,children:o.jsx(yg,{className:"h-4 w-4 opacity-50"})})]}));ng.displayName=oT.displayName;const hT=x.forwardRef(({className:t,...n},s)=>o.jsx(uT,{ref:s,className:xe("flex cursor-default items-center justify-center py-1",t),...n,children:o.jsx(P3,{className:"h-4 w-4"})}));hT.displayName=uT.displayName;const fT=x.forwardRef(({className:t,...n},s)=>o.jsx(dT,{ref:s,className:xe("flex cursor-default items-center justify-center py-1",t),...n,children:o.jsx(yg,{className:"h-4 w-4"})}));fT.displayName=dT.displayName;const sg=x.forwardRef(({className:t,children:n,position:s="popper",...r},c)=>o.jsx(mL,{children:o.jsxs(lT,{ref:c,className:xe("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-stone-200 bg-white text-stone-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s,...r,children:[o.jsx(hT,{}),o.jsx(pL,{className:xe("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),o.jsx(fT,{})]})}));sg.displayName=lT.displayName;const js=x.forwardRef(({className:t,children:n,...s},r)=>o.jsxs(cT,{ref:r,className:xe("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-stone-100 focus:text-stone-900",t),...s,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(bL,{children:o.jsx(Yn,{className:"h-4 w-4"})})}),o.jsx(yL,{children:n})]}));js.displayName=cT.displayName;function xL(t,n){return x.useReducer((s,r)=>n[s][r]??s,t)}var gT=t=>{const{present:n,children:s}=t,r=vL(n),c=typeof s=="function"?s({present:r.isPresent}):x.Children.only(s),u=ft(r.ref,wL(c));return typeof s=="function"||r.isPresent?x.cloneElement(c,{ref:u}):null};gT.displayName="Presence";function vL(t){const[n,s]=x.useState(),r=x.useRef(null),c=x.useRef(t),u=x.useRef("none"),d=t?"mounted":"unmounted",[f,g]=xL(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const p=sc(r.current);u.current=f==="mounted"?p:"none"},[f]),jt(()=>{const p=r.current,y=c.current;if(y!==t){const w=u.current,S=sc(p);t?g("MOUNT"):S==="none"||(p==null?void 0:p.display)==="none"?g("UNMOUNT"):g(y&&w!==S?"ANIMATION_OUT":"UNMOUNT"),c.current=t}},[t,g]),jt(()=>{if(n){let p;const y=n.ownerDocument.defaultView??window,b=S=>{const T=sc(r.current).includes(CSS.escape(S.animationName));if(S.target===n&&T&&(g("ANIMATION_END"),!c.current)){const N=n.style.animationFillMode;n.style.animationFillMode="forwards",p=y.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=N)})}},w=S=>{S.target===n&&(u.current=sc(r.current))};return n.addEventListener("animationstart",w),n.addEventListener("animationcancel",b),n.addEventListener("animationend",b),()=>{y.clearTimeout(p),n.removeEventListener("animationstart",w),n.removeEventListener("animationcancel",b),n.removeEventListener("animationend",b)}}else g("ANIMATION_END")},[n,g]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:x.useCallback(p=>{r.current=p?getComputedStyle(p):null,s(p)},[])}}function sc(t){return(t==null?void 0:t.animationName)||"none"}function wL(t){var r,c;let n=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?t.ref:(n=(c=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:c.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?t.props.ref:t.props.ref||t.ref)}var Zc="Collapsible",[SL]=Fc(Zc),[TL,gm]=SL(Zc),mT=x.forwardRef((t,n)=>{const{__scopeCollapsible:s,open:r,defaultOpen:c,disabled:u,onOpenChange:d,...f}=t,[g,p]=$f({prop:r,defaultProp:c??!1,onChange:d,caller:Zc});return o.jsx(TL,{scope:s,disabled:u,contentId:Ic(),open:g,onOpenToggle:x.useCallback(()=>p(y=>!y),[p]),children:o.jsx(Qe.div,{"data-state":pm(g),"data-disabled":u?"":void 0,...f,ref:n})})});mT.displayName=Zc;var pT="CollapsibleTrigger",yT=x.forwardRef((t,n)=>{const{__scopeCollapsible:s,...r}=t,c=gm(pT,s);return o.jsx(Qe.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":pm(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...r,ref:n,onClick:st(t.onClick,c.onOpenToggle)})});yT.displayName=pT;var mm="CollapsibleContent",bT=x.forwardRef((t,n)=>{const{forceMount:s,...r}=t,c=gm(mm,t.__scopeCollapsible);return o.jsx(gT,{present:s||c.open,children:({present:u})=>o.jsx(kL,{...r,ref:n,present:u})})});bT.displayName=mm;var kL=x.forwardRef((t,n)=>{const{__scopeCollapsible:s,present:r,children:c,...u}=t,d=gm(mm,s),[f,g]=x.useState(r),p=x.useRef(null),y=ft(n,p),b=x.useRef(0),w=b.current,S=x.useRef(0),C=S.current,T=d.open||f,N=x.useRef(T),M=x.useRef(void 0);return x.useEffect(()=>{const E=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(E)},[]),jt(()=>{const E=p.current;if(E){M.current=M.current||{transitionDuration:E.style.transitionDuration,animationName:E.style.animationName},E.style.transitionDuration="0s",E.style.animationName="none";const j=E.getBoundingClientRect();b.current=j.height,S.current=j.width,N.current||(E.style.transitionDuration=M.current.transitionDuration,E.style.animationName=M.current.animationName),g(r)}},[d.open,r]),o.jsx(Qe.div,{"data-state":pm(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!T,...u,ref:y,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":C?`${C}px`:void 0,...t.style},children:T&&c})});function pm(t){return t?"open":"closed"}var CL=mT;const jL=CL,NL=yT,AL=bT,ML=({settings:t,onUpdateSettings:n})=>{const[s,r]=x.useState(!1);return o.jsxs("div",{className:"bg-white rounded-xl shadow-tea-card overflow-hidden border border-stone-200",children:[o.jsx("div",{className:"p-4 space-y-4",children:o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500 font-bold uppercase tracking-wider",children:"Blend Name"}),o.jsx(ka,{value:t.blendName,onChange:c=>n("blendName",c.target.value),placeholder:"e.g. Master Blend",className:"h-11 border-stone-200"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500 font-bold uppercase tracking-wider",children:"Currency"}),o.jsxs($v,{value:t.currency,onValueChange:c=>n("currency",c),children:[o.jsx(ng,{className:"h-11 border-stone-200",children:o.jsx(Xv,{})}),o.jsxs(sg,{children:[o.jsx(js,{value:"₹",children:"₹ INR"}),o.jsx(js,{value:"$",children:"$ USD"}),o.jsx(js,{value:"£",children:"£ GBP"})]})]})]})]})}),o.jsxs(jL,{open:s,onOpenChange:r,children:[o.jsxs(NL,{className:"w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-400 hover:bg-stone-50 border-t border-stone-100 transition-colors",children:[o.jsx("span",{children:"Advanced Batch Controls"}),o.jsx(yg,{className:`h-4 w-4 transition-transform duration-300 ${s?"rotate-180":""}`})]}),o.jsx(AL,{children:o.jsxs("div",{className:"p-4 pt-2 space-y-4 border-t border-stone-100 bg-stone-50/50",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Batch No."}),o.jsx(ka,{value:t.batchNumber,onChange:c=>n("batchNumber",c.target.value),placeholder:"BT-2024-001",className:"h-11 border-stone-200 bg-white"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Wastage allowance %"}),o.jsx(ka,{type:"number",min:"0",max:"100",step:"0.1",value:t.wastagePercent||"",onChange:c=>n("wastagePercent",parseFloat(c.target.value)||0),placeholder:"0",className:"h-11 border-stone-200 bg-white"})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{className:"space-y-1.5",children:[o.jsxs(Zt,{className:"text-xs text-stone-500",children:["Target Purchase Price (",t.currency,")"]}),o.jsx(ka,{type:"number",min:"0",step:"0.01",value:t.targetPricePerKg||"",onChange:c=>n("targetPricePerKg",parseFloat(c.target.value)||0),placeholder:"0",className:"h-11 border-stone-200 bg-white font-bold text-tea-700"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx(Zt,{className:"text-xs text-stone-500",children:"Calculation Decimals"}),o.jsxs($v,{value:t.roundToDecimals.toString(),onValueChange:c=>n("roundToDecimals",parseInt(c)),children:[o.jsx(ng,{className:"h-11 border-stone-200 bg-white",children:o.jsx(Xv,{})}),o.jsxs(sg,{children:[o.jsx(js,{value:"0",children:"Whole (0)"}),o.jsx(js,{value:"1",children:"1 place"}),o.jsx(js,{value:"2",children:"2 places"})]})]})]})]})]})})]})]})},EL=({summary:t,currency:n,roundToDecimals:s,wastagePercent:r,targetPricePerKg:c})=>{const u=b=>b.toFixed(s),d=t.totalQuantityKg*r/100,f=t.totalQuantityKg-d,g=f>0?t.totalCost/f:0,p=c>0?c-g:0,y=p>=0;return o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-gradient-tea text-white rounded-2xl p-6 shadow-tea relative overflow-hidden group",children:[o.jsx("div",{className:"absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-10 group-hover:scale-110 transition-transform duration-700",children:o.jsx(Ib,{className:"w-32 h-32"})}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx(io,{className:"h-5 w-5 text-tea-200"}),o.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-tea-100",children:"Average Master Cost"})]}),o.jsxs("div",{className:"text-4xl font-black flex items-baseline gap-1",children:[o.jsx("span",{className:"text-2xl font-bold opacity-80",children:n}),u(r>0?g:t.avgCostPerKg),o.jsx("span",{className:"text-sm font-medium opacity-70 ml-1",children:"/per kg"})]}),r>0&&o.jsx("div",{className:"inline-block mt-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10",children:o.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-wider",children:["After ",r,"% wastage adjustment"]})})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-tea-card border border-stone-100 hover:border-tea-200 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(jA,{className:"w-3.5 h-3.5 text-tea-600"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-stone-400",children:"Total Weight"})]}),o.jsxs("p",{className:"text-xl font-black text-stone-900",children:[u(t.totalQuantityKg)," kg"]}),r>0&&o.jsxs("p",{className:"text-[10px] font-bold text-red-600 mt-1 uppercase",children:["Net: ",u(f)," kg"]})]}),o.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-tea-card border border-stone-100 hover:border-brand-gold/30 transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx(Ib,{className:"w-3.5 h-3.5 text-brand-gold"}),o.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-stone-400",children:"Total Outlay"})]}),o.jsxs("p",{className:"text-xl font-black text-brand-gold",children:[n,u(t.totalCost)]})]})]}),c>0&&o.jsx("div",{className:`rounded-xl p-4 border shadow-sm transition-all duration-500 ${y?"bg-green-50 border-green-100":"bg-red-50 border-red-100"}`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`p-2 rounded-lg ${y?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:y?o.jsx(GA,{className:"h-5 w-5"}):o.jsx(FA,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-1.5 mb-0.5",children:[o.jsx(vf,{className:"w-3 h-3 text-stone-400"}),o.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-500",children:["Target: ",n,u(c)]})]}),o.jsxs("p",{className:`text-sm font-black uppercase tracking-tight ${y?"text-green-800":"text-red-800"}`,children:[y?"Below":"Above"," Target: ",n,u(Math.abs(p)),"/kg"]})]})]}),o.jsx("div",{className:`text-xs font-black px-3 py-1 rounded-full border ${y?"bg-green-100 border-green-200 text-green-800":"bg-red-100 border-red-200 text-red-800"}`,children:y?"VIABLE":"OVER BUDGET"})]})})]})},Jv=({title:t,data:n,nameKey:s,currency:r,roundToDecimals:c})=>{const u=f=>f.toFixed(c);if(n.length===0)return null;const d=[...n].sort((f,g)=>g.percentage-f.percentage);return o.jsxs("div",{className:"bg-white rounded-xl shadow-tea-card overflow-hidden border border-stone-200",children:[t&&o.jsx("div",{className:"px-4 py-3 border-b border-stone-100 bg-stone-50/50",children:o.jsxs("h3",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-stone-400",children:[t," Analysis"]})}),o.jsx("div",{className:"divide-y divide-stone-100",children:d.map((f,g)=>o.jsxs("div",{className:"p-4 space-y-3 hover:bg-stone-50/50 transition-colors",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-stone-900 text-sm",children:s==="gradeName"?f.gradeName:f.gardenName}),o.jsx("div",{className:"text-right",children:o.jsxs("span",{className:"text-xs font-black text-tea-700 bg-tea-50 px-2 py-0.5 rounded border border-tea-100",children:[u(f.percentage),"%"]})})]}),o.jsx("div",{className:"relative",children:o.jsx("div",{className:"w-full h-1.5 bg-stone-100 rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-tea rounded-full transition-all duration-700 ease-out",style:{width:`${Math.min(f.percentage,100)}%`}})})}),o.jsxs("div",{className:"flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-stone-400",children:[o.jsxs("span",{className:"flex items-center gap-1.5 font-black text-stone-500",children:[u(f.totalKg)," ",o.jsx("span",{className:"opacity-50",children:"kg"})]}),o.jsxs("span",{className:"text-brand-gold font-black",children:[r,u(f.totalValue)]})]})]},g))})]})},DL=()=>Math.random().toString(36).substring(2,9),Zv=()=>({id:DL(),gardenName:"",gradeName:"",numberOfBags:0,weightPerBag:0,extraKgs:[],ratePerKg:0}),RL=()=>{const[t,n]=x.useState([Zv()]),[s,r]=x.useState({currency:"₹",wastagePercent:0,targetPricePerKg:0,blendName:"",batchNumber:"",roundToDecimals:2}),[c,u]=x.useState(!1),[d,f]=x.useState([]),g=x.useCallback((P,G,_)=>{n(H=>H.map(J=>J.id===P?{...J,[G]:_}:J))},[]),p=x.useCallback(P=>{n(G=>G.map(_=>_.id===P?{..._,extraKgs:[..._.extraKgs,0]}:_))},[]),y=x.useCallback((P,G,_)=>{n(H=>H.map(J=>{if(J.id===P){const se=[...J.extraKgs];return se[G]=_,{...J,extraKgs:se}}return J}))},[]),b=x.useCallback((P,G)=>{n(_=>_.map(H=>{if(H.id===P){const J=H.extraKgs.filter((se,re)=>re!==G);return{...H,extraKgs:J}}return H}))},[]),w=x.useCallback(()=>{n(P=>[...P,Zv()])},[]),S=x.useCallback(P=>{n(G=>G.filter(_=>_.id!==P))},[]),C=x.useCallback((P,G)=>{r(_=>({..._,[P]:G}))},[]),T=()=>{const P=[];return t.some(_=>_.gardenName.trim()&&_.gradeName.trim()&&_.numberOfBags>0&&_.weightPerBag>0&&_.ratePerKg>0)||P.push("Add at least one complete item with all values filled."),P},{summary:N,gradeBreakdown:M,gardenBreakdown:E}=x.useMemo(()=>{const P=t.filter(U=>U.gardenName.trim()&&U.gradeName.trim()&&U.numberOfBags>0&&U.weightPerBag>0&&U.ratePerKg>0);if(P.length===0)return{summary:{totalQuantityKg:0,totalCost:0,avgCostPerKg:0,numberOfGardens:0,numberOfGrades:0},gradeBreakdown:[],gardenBreakdown:[]};let G=0,_=0;P.forEach(U=>{const z=U.numberOfBags*U.weightPerBag,A=U.extraKgs.reduce((Q,ne)=>Q+ne,0),D=z+A,B=D*U.ratePerKg;G+=D,_+=B});const H=G>0?_/G:0,J=new Map;P.forEach(U=>{const z=U.numberOfBags*U.weightPerBag,A=U.extraKgs.reduce((ne,R)=>ne+R,0),D=z+A,B=D*U.ratePerKg,Q=J.get(U.gradeName)||{totalKg:0,totalValue:0};J.set(U.gradeName,{totalKg:Q.totalKg+D,totalValue:Q.totalValue+B})});const se=Array.from(J.entries()).map(([U,z])=>({gradeName:U,totalKg:z.totalKg,percentage:G>0?z.totalKg/G*100:0,totalValue:z.totalValue,costContribution:_>0?z.totalValue/_*100:0})),re=new Map;P.forEach(U=>{const z=U.numberOfBags*U.weightPerBag,A=U.extraKgs.reduce((ne,R)=>ne+R,0),D=z+A,B=D*U.ratePerKg,Q=re.get(U.gardenName)||{totalKg:0,totalValue:0};re.set(U.gardenName,{totalKg:Q.totalKg+D,totalValue:Q.totalValue+B})});const he=Array.from(re.entries()).map(([U,z])=>({gardenName:U,totalKg:z.totalKg,percentage:G>0?z.totalKg/G*100:0,totalValue:z.totalValue,costContribution:_>0?z.totalValue/_*100:0}));return{summary:{totalQuantityKg:G,totalCost:_,avgCostPerKg:H,numberOfGardens:re.size,numberOfGrades:J.size},gradeBreakdown:se,gardenBreakdown:he}},[t]),j=()=>{const P=T();f(P),u(P.length===0)},q=()=>{window.print()};return o.jsxs("div",{className:"min-h-screen bg-stone-50 pb-24",children:[o.jsx("header",{className:"bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-20 shadow-sm print:static print:shadow-none",children:o.jsxs("div",{className:"max-w-xl mx-auto flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"p-3 bg-tea-600 rounded-2xl text-white shadow-tea transform -rotate-3 group-hover:rotate-0 transition-transform",children:o.jsx(Ub,{className:"h-6 w-6"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-black text-stone-900 leading-tight",children:"Tea Blend Calculator"}),o.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-tea-600",children:"for tea packers who run their own brand"})]})]}),o.jsx("div",{className:"flex items-center gap-2 print:hidden",children:o.jsx(Ct,{variant:"ghost",size:"icon",className:"rounded-full text-stone-400",children:o.jsx(DA,{className:"w-5 h-5"})})})]})}),o.jsxs("main",{className:"max-w-xl mx-auto px-4 py-8 space-y-8",children:[o.jsx("div",{className:"animate-in slide-in-from-top-4 duration-500",children:o.jsx(ML,{settings:s,onUpdateSettings:C})}),o.jsxs("div",{className:"animate-in slide-in-from-bottom-4 duration-500 delay-100",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[o.jsx("h2",{className:"text-xs font-black uppercase tracking-widest text-stone-400",children:"Inventory Items"}),o.jsxs("span",{className:"text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full",children:[t.length," Total"]})]}),o.jsx(qB,{rows:t,currency:s.currency,onUpdateRow:g,onAddRow:w,onDeleteRow:S,onAddExtraKg:p,onUpdateExtraKg:y,onRemoveExtraKg:b,roundToDecimals:s.roundToDecimals})]}),d.length>0&&o.jsxs(K2,{variant:"destructive",className:"bg-red-50 border-red-100 shadow-sm animate-in shake duration-500",children:[o.jsx(_3,{className:"h-4 w-4"}),o.jsx(Y2,{className:"font-bold text-xs",children:d[0]})]}),c&&N.totalQuantityKg>0&&o.jsxs("div",{className:"space-y-8 animate-in zoom-in-95 duration-500",children:[o.jsx(sm,{className:"bg-stone-200"}),s.blendName&&o.jsxs("div",{className:"text-center py-2",children:[o.jsx("div",{className:"inline-block px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 mb-2",children:o.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold",children:"Master Certificate"})}),o.jsx("h2",{className:"text-3xl font-black text-stone-900",children:s.blendName}),s.batchNumber&&o.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2",children:[o.jsx(kA,{className:"w-3 h-3 text-stone-300"}),o.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-400",children:["Batch Record: ",s.batchNumber]})]})]}),o.jsx(EL,{summary:N,currency:s.currency,roundToDecimals:s.roundToDecimals,wastagePercent:s.wastagePercent,targetPricePerKg:s.targetPricePerKg}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsx(Jv,{title:"Grade",data:M,nameKey:"gradeName",currency:s.currency,roundToDecimals:s.roundToDecimals}),o.jsx(Jv,{title:"Garden",data:E,nameKey:"gardenName",currency:s.currency,roundToDecimals:s.roundToDecimals})]}),o.jsxs(Ct,{onClick:q,variant:"outline",className:"w-full h-14 border-stone-200 shadow-sm hover:bg-stone-50 text-stone-600 font-black text-xs uppercase tracking-widest print:hidden",children:[o.jsx(vA,{className:"h-5 w-5 mr-3"}),"Generate Official Report"]})]})]}),o.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-stone-200 print:hidden z-30",children:o.jsx("div",{className:"max-w-xl mx-auto",children:o.jsxs(Ct,{onClick:j,className:"w-full h-14 bg-tea-600 hover:bg-tea-700 text-white shadow-tea text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98]",children:[o.jsx(Ub,{className:"h-5 w-5 mr-3"}),"Calculate Master Blend"]})})})]})},BL=()=>{const{pathname:t}=Ma();return x.useEffect(()=>{window.scrollTo(0,0)},[t]),o.jsxs("div",{className:"min-h-screen bg-white",children:[o.jsx(Rt,{title:"Tea Blend Cost & Ratio Calculator | Manish Tea Traders B2B Utility",description:"Calculate tea blend ratios, wholesale costs, and margins accurately. An essential tool for tea traders, blenders, and private label brands.",canonicalUrl:"https://teatraders.info/tea-blend-calculator/"}),o.jsx(Et,{}),o.jsx("div",{className:"pt-16",children:o.jsx(RL,{})}),o.jsx(Dt,{})]})},OL=()=>{const{pathname:t}=Ma();return x.useEffect(()=>{oM(),window.location.hash||window.scrollTo(0,0)},[t]),null},PL=()=>o.jsxs(Cw,{children:[o.jsx(OL,{}),o.jsxs(Xj,{children:[o.jsx(St,{path:"/",element:o.jsx(yM,{})}),o.jsx(St,{path:"/about-us",element:o.jsx(bM,{})}),o.jsx(St,{path:"/contact-us",element:o.jsx(xM,{})}),o.jsx(St,{path:"/privacy-policy",element:o.jsx(MM,{})}),o.jsx(St,{path:"/terms-of-service",element:o.jsx(EM,{})}),o.jsx(St,{path:"/request-free-tea-samples",element:o.jsx(BM,{})}),o.jsx(St,{path:"/tea-grades",element:o.jsx(RB,{})}),o.jsx(St,{path:"/tea-blend-calculator",element:o.jsx(BL,{})}),o.jsx(St,{path:"/products/:slug",element:o.jsx(wM,{})}),o.jsx(St,{path:"/product/:slug",element:o.jsx(SM,{})}),o.jsx(St,{path:"/services/private-label-tea",element:o.jsx(TM,{})}),o.jsx(St,{path:"/locations",element:o.jsx(CM,{})}),o.jsx(St,{path:"/wholesale-supply/:slug",element:o.jsx(kM,{})}),o.jsx(St,{path:"/blog",element:o.jsx(jM,{})}),o.jsx(St,{path:"/blog/:slug",element:o.jsx(NM,{})}),o.jsx(St,{path:"*",element:o.jsx(AM,{})})]})]}),xT=document.getElementById("root");if(!xT)throw new Error("Could not find root element to mount to");const LL=ej.createRoot(xT);LL.render(o.jsx(tt.StrictMode,{children:o.jsx(wN,{children:o.jsx(PL,{})})}));export{P3 as C,yg as a,o as j,x as r};
