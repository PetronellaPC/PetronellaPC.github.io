(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();var Nu={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function rm(){if(P0)return Cl;P0=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function o(u,f,m){var g=null;if(m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),"key"in f){m={};for(var E in f)E!=="key"&&(m[E]=f[E])}else m=f;return f=m.ref,{$$typeof:r,type:u,key:g,ref:f!==void 0?f:null,props:m}}return Cl.Fragment=d,Cl.jsx=o,Cl.jsxs=o,Cl}var tf;function um(){return tf||(tf=1,Nu.exports=rm()),Nu.exports}var B=um(),zu={exports:{}},Ml={},Cu={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function cm(){return ef||(ef=1,(function(r){function d(C,k){var J=C.length;C.push(k);t:for(;0<J;){var yt=J-1>>>1,bt=C[yt];if(0<f(bt,k))C[yt]=k,C[J]=bt,J=yt;else break t}}function o(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var k=C[0],J=C.pop();if(J!==k){C[0]=J;t:for(var yt=0,bt=C.length,v=bt>>>1;yt<v;){var L=2*(yt+1)-1,H=C[L],Y=L+1,P=C[Y];if(0>f(H,J))Y<bt&&0>f(P,H)?(C[yt]=P,C[Y]=J,yt=Y):(C[yt]=H,C[L]=J,yt=L);else if(Y<bt&&0>f(P,J))C[yt]=P,C[Y]=J,yt=Y;else break t}}return k}function f(C,k){var J=C.sortIndex-k.sortIndex;return J!==0?J:C.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var g=Date,E=g.now();r.unstable_now=function(){return g.now()-E}}var b=[],y=[],N=1,w=null,O=3,Z=!1,X=!1,U=!1,j=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ht(C){for(var k=o(y);k!==null;){if(k.callback===null)u(y);else if(k.startTime<=C)u(y),k.sortIndex=k.expirationTime,d(b,k);else break;k=o(y)}}function ft(C){if(U=!1,ht(C),!X)if(o(b)!==null)X=!0,At||(At=!0,Qt());else{var k=o(y);k!==null&&Wt(ft,k.startTime-C)}}var At=!1,$=-1,zt=5,Vt=-1;function Le(){return j?!0:!(r.unstable_now()-Vt<zt)}function he(){if(j=!1,At){var C=r.unstable_now();Vt=C;var k=!0;try{t:{X=!1,U&&(U=!1,F($),$=-1),Z=!0;var J=O;try{e:{for(ht(C),w=o(b);w!==null&&!(w.expirationTime>C&&Le());){var yt=w.callback;if(typeof yt=="function"){w.callback=null,O=w.priorityLevel;var bt=yt(w.expirationTime<=C);if(C=r.unstable_now(),typeof bt=="function"){w.callback=bt,ht(C),k=!0;break e}w===o(b)&&u(b),ht(C)}else u(b);w=o(b)}if(w!==null)k=!0;else{var v=o(y);v!==null&&Wt(ft,v.startTime-C),k=!1}}break t}finally{w=null,O=J,Z=!1}k=void 0}}finally{k?Qt():At=!1}}}var Qt;if(typeof K=="function")Qt=function(){K(he)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,ye=Oe.port2;Oe.port1.onmessage=he,Qt=function(){ye.postMessage(null)}}else Qt=function(){D(he,0)};function Wt(C,k){$=D(function(){C(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(C){switch(O){case 1:case 2:case 3:var k=3;break;default:k=O}var J=O;O=k;try{return C()}finally{O=J}},r.unstable_requestPaint=function(){j=!0},r.unstable_runWithPriority=function(C,k){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var J=O;O=C;try{return k()}finally{O=J}},r.unstable_scheduleCallback=function(C,k,J){var yt=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?yt+J:yt):J=yt,C){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=J+bt,C={id:N++,callback:k,priorityLevel:C,startTime:J,expirationTime:bt,sortIndex:-1},J>yt?(C.sortIndex=J,d(y,C),o(b)===null&&C===o(y)&&(U?(F($),$=-1):U=!0,Wt(ft,J-yt))):(C.sortIndex=bt,d(b,C),X||Z||(X=!0,At||(At=!0,Qt()))),C},r.unstable_shouldYield=Le,r.unstable_wrapCallback=function(C){var k=O;return function(){var J=O;O=k;try{return C.apply(this,arguments)}finally{O=J}}}})(Mu)),Mu}var nf;function dm(){return nf||(nf=1,Cu.exports=cm()),Cu.exports}var Bu={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function om(){if(af)return I;af=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.iterator;function Z(v){return v===null||typeof v!="object"?null:(v=O&&v[O]||v["@@iterator"],typeof v=="function"?v:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,j={};function D(v,L,H){this.props=v,this.context=L,this.refs=j,this.updater=H||X}D.prototype.isReactComponent={},D.prototype.setState=function(v,L){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,L,"setState")},D.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function F(){}F.prototype=D.prototype;function K(v,L,H){this.props=v,this.context=L,this.refs=j,this.updater=H||X}var ht=K.prototype=new F;ht.constructor=K,U(ht,D.prototype),ht.isPureReactComponent=!0;var ft=Array.isArray;function At(){}var $={H:null,A:null,T:null,S:null},zt=Object.prototype.hasOwnProperty;function Vt(v,L,H){var Y=H.ref;return{$$typeof:r,type:v,key:L,ref:Y!==void 0?Y:null,props:H}}function Le(v,L){return Vt(v.type,L,v.props)}function he(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function Qt(v){var L={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return L[H]})}var Oe=/\/+/g;function ye(v,L){return typeof v=="object"&&v!==null&&v.key!=null?Qt(""+v.key):L.toString(36)}function Wt(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(At,At):(v.status="pending",v.then(function(L){v.status==="pending"&&(v.status="fulfilled",v.value=L)},function(L){v.status==="pending"&&(v.status="rejected",v.reason=L)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function C(v,L,H,Y,P){var nt=typeof v;(nt==="undefined"||nt==="boolean")&&(v=null);var ot=!1;if(v===null)ot=!0;else switch(nt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(v.$$typeof){case r:case d:ot=!0;break;case N:return ot=v._init,C(ot(v._payload),L,H,Y,P)}}if(ot)return P=P(v),ot=Y===""?"."+ye(v,0):Y,ft(P)?(H="",ot!=null&&(H=ot.replace(Oe,"$&/")+"/"),C(P,L,H,"",function(Da){return Da})):P!=null&&(he(P)&&(P=Le(P,H+(P.key==null||v&&v.key===P.key?"":(""+P.key).replace(Oe,"$&/")+"/")+ot)),L.push(P)),1;ot=0;var Jt=Y===""?".":Y+":";if(ft(v))for(var Ct=0;Ct<v.length;Ct++)Y=v[Ct],nt=Jt+ye(Y,Ct),ot+=C(Y,L,H,nt,P);else if(Ct=Z(v),typeof Ct=="function")for(v=Ct.call(v),Ct=0;!(Y=v.next()).done;)Y=Y.value,nt=Jt+ye(Y,Ct++),ot+=C(Y,L,H,nt,P);else if(nt==="object"){if(typeof v.then=="function")return C(Wt(v),L,H,Y,P);throw L=String(v),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ot}function k(v,L,H){if(v==null)return v;var Y=[],P=0;return C(v,Y,"","",function(nt){return L.call(H,nt,P++)}),Y}function J(v){if(v._status===-1){var L=v._result;L=L(),L.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=L)}if(v._status===1)return v._result.default;throw v._result}var yt=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},bt={map:k,forEach:function(v,L,H){k(v,function(){L.apply(this,arguments)},H)},count:function(v){var L=0;return k(v,function(){L++}),L},toArray:function(v){return k(v,function(L){return L})||[]},only:function(v){if(!he(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return I.Activity=w,I.Children=bt,I.Component=D,I.Fragment=o,I.Profiler=f,I.PureComponent=K,I.StrictMode=u,I.Suspense=b,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,I.__COMPILER_RUNTIME={__proto__:null,c:function(v){return $.H.useMemoCache(v)}},I.cache=function(v){return function(){return v.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(v,L,H){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Y=U({},v.props),P=v.key;if(L!=null)for(nt in L.key!==void 0&&(P=""+L.key),L)!zt.call(L,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&L.ref===void 0||(Y[nt]=L[nt]);var nt=arguments.length-2;if(nt===1)Y.children=H;else if(1<nt){for(var ot=Array(nt),Jt=0;Jt<nt;Jt++)ot[Jt]=arguments[Jt+2];Y.children=ot}return Vt(v.type,P,Y)},I.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},I.createElement=function(v,L,H){var Y,P={},nt=null;if(L!=null)for(Y in L.key!==void 0&&(nt=""+L.key),L)zt.call(L,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=L[Y]);var ot=arguments.length-2;if(ot===1)P.children=H;else if(1<ot){for(var Jt=Array(ot),Ct=0;Ct<ot;Ct++)Jt[Ct]=arguments[Ct+2];P.children=Jt}if(v&&v.defaultProps)for(Y in ot=v.defaultProps,ot)P[Y]===void 0&&(P[Y]=ot[Y]);return Vt(v,nt,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(v){return{$$typeof:E,render:v}},I.isValidElement=he,I.lazy=function(v){return{$$typeof:N,_payload:{_status:-1,_result:v},_init:J}},I.memo=function(v,L){return{$$typeof:y,type:v,compare:L===void 0?null:L}},I.startTransition=function(v){var L=$.T,H={};$.T=H;try{var Y=v(),P=$.S;P!==null&&P(H,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(At,yt)}catch(nt){yt(nt)}finally{L!==null&&H.types!==null&&(L.types=H.types),$.T=L}},I.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},I.use=function(v){return $.H.use(v)},I.useActionState=function(v,L,H){return $.H.useActionState(v,L,H)},I.useCallback=function(v,L){return $.H.useCallback(v,L)},I.useContext=function(v){return $.H.useContext(v)},I.useDebugValue=function(){},I.useDeferredValue=function(v,L){return $.H.useDeferredValue(v,L)},I.useEffect=function(v,L){return $.H.useEffect(v,L)},I.useEffectEvent=function(v){return $.H.useEffectEvent(v)},I.useId=function(){return $.H.useId()},I.useImperativeHandle=function(v,L,H){return $.H.useImperativeHandle(v,L,H)},I.useInsertionEffect=function(v,L){return $.H.useInsertionEffect(v,L)},I.useLayoutEffect=function(v,L){return $.H.useLayoutEffect(v,L)},I.useMemo=function(v,L){return $.H.useMemo(v,L)},I.useOptimistic=function(v,L){return $.H.useOptimistic(v,L)},I.useReducer=function(v,L,H){return $.H.useReducer(v,L,H)},I.useRef=function(v){return $.H.useRef(v)},I.useState=function(v){return $.H.useState(v)},I.useSyncExternalStore=function(v,L,H){return $.H.useSyncExternalStore(v,L,H)},I.useTransition=function(){return $.H.useTransition()},I.version="19.2.7",I}var lf;function qu(){return lf||(lf=1,Bu.exports=om()),Bu.exports}var Wu={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function fm(){if(sf)return Kt;sf=1;var r=qu();function d(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)y+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(d(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(b,y,N){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:b,containerInfo:y,implementation:N}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Kt.createPortal=function(b,y){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(d(299));return m(b,y,null,N)},Kt.flushSync=function(b){var y=g.T,N=u.p;try{if(g.T=null,u.p=2,b)return b()}finally{g.T=y,u.p=N,u.d.f()}},Kt.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,u.d.C(b,y))},Kt.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Kt.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var N=y.as,w=E(N,y.crossOrigin),O=typeof y.integrity=="string"?y.integrity:void 0,Z=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;N==="style"?u.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:O,fetchPriority:Z}):N==="script"&&u.d.X(b,{crossOrigin:w,integrity:O,fetchPriority:Z,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kt.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var N=E(y.as,y.crossOrigin);u.d.M(b,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&u.d.M(b)},Kt.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var N=y.as,w=E(N,y.crossOrigin);u.d.L(b,N,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kt.preloadModule=function(b,y){if(typeof b=="string")if(y){var N=E(y.as,y.crossOrigin);u.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else u.d.m(b)},Kt.requestFormReset=function(b){u.d.r(b)},Kt.unstable_batchedUpdates=function(b,y){return b(y)},Kt.useFormState=function(b,y,N){return g.H.useFormState(b,y,N)},Kt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Kt.version="19.2.7",Kt}var rf;function pm(){if(rf)return Wu.exports;rf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Wu.exports=fm(),Wu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function mm(){if(uf)return Ml;uf=1;var r=dm(),d=qu(),o=pm();function u(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b(t){if(m(t)!==t)throw Error(u(188))}function y(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(u(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return b(l),t;if(i===a)return b(l),e;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=i;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,a=i;break}if(c===a){s=!0,a=l,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,a=l;break}if(c===a){s=!0,a=i,n=l;break}c=c.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}var w=Object.assign,O=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Vt=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=he&&t[he]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case D:return"Profiler";case j:return"StrictMode";case ft:return"Suspense";case At:return"SuspenseList";case Vt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case X:return"Portal";case K:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case ht:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:ye(t.type)||"Memo";case zt:e=t._payload,t=t._init;try{return ye(t(e))}catch{}}return null}var Wt=Array.isArray,C=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},yt=[],bt=-1;function v(t){return{current:t}}function L(t){0>bt||(t.current=yt[bt],yt[bt]=null,bt--)}function H(t,e){bt++,yt[bt]=t.current,t.current=e}var Y=v(null),P=v(null),nt=v(null),ot=v(null);function Jt(t,e){switch(H(nt,e),H(P,t),H(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?A0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=A0(e),t=S0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(Y),H(Y,t)}function Ct(){L(Y),L(P),L(nt)}function Da(t){t.memoizedState!==null&&H(ot,t);var e=Y.current,n=S0(e,t.type);e!==n&&(H(P,t),H(Y,n))}function Dl(t){P.current===t&&(L(Y),L(P)),ot.current===t&&(L(ot),wl._currentValue=J)}var ds,Iu;function Mn(t){if(ds===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ds=e&&e[1]||"",Iu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ds+t+Iu}var os=!1;function fs(t,e){if(!t||os)return"";os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(T){var S=T}Reflect.construct(t,[],W)}else{try{W.call()}catch(T){S=T}t.call(W.prototype)}}else{try{throw Error()}catch(T){S=T}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(T){if(T&&S&&typeof T.stack=="string")return[T.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],c=i[1];if(s&&c){var p=s.split(`
`),A=c.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===A.length)for(a=p.length-1,l=A.length-1;1<=a&&0<=l&&p[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==A[l]){var z=`
`+p[a].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=a&&0<=l);break}}}finally{os=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Mn(n):""}function Hf(t,e){switch(t.tag){case 26:case 27:case 5:return Mn(t.type);case 16:return Mn("Lazy");case 13:return t.child!==e&&e!==null?Mn("Suspense Fallback"):Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return fs(t.type,!1);case 11:return fs(t.type.render,!1);case 1:return fs(t.type,!0);case 31:return Mn("Activity");default:return""}}function Fu(t){try{var e="",n=null;do e+=Hf(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ps=Object.prototype.hasOwnProperty,ms=r.unstable_scheduleCallback,hs=r.unstable_cancelCallback,Uf=r.unstable_shouldYield,qf=r.unstable_requestPaint,le=r.unstable_now,jf=r.unstable_getCurrentPriorityLevel,Pu=r.unstable_ImmediatePriority,tc=r.unstable_UserBlockingPriority,Hl=r.unstable_NormalPriority,Yf=r.unstable_LowPriority,ec=r.unstable_IdlePriority,Gf=r.log,Zf=r.unstable_setDisableYieldValue,Ha=null,ie=null;function sn(t){if(typeof Gf=="function"&&Zf(t),ie&&typeof ie.setStrictMode=="function")try{ie.setStrictMode(Ha,t)}catch{}}var se=Math.clz32?Math.clz32:Qf,Xf=Math.log,Vf=Math.LN2;function Qf(t){return t>>>=0,t===0?32:31-(Xf(t)/Vf|0)|0}var Ul=256,ql=262144,jl=4194304;function Bn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?l=Bn(a):(s&=c,s!==0?l=Bn(s):n||(n=c&~t,n!==0&&(l=Bn(n))))):(c=a&~i,c!==0?l=Bn(c):s!==0?l=Bn(s):n||(n=a&~t,n!==0&&(l=Bn(n)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:l}function Ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Kf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(){var t=jl;return jl<<=1,(jl&62914560)===0&&(jl=4194304),t}function ys(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jf(t,e,n,a,l,i){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var c=t.entanglements,p=t.expirationTimes,A=t.hiddenUpdates;for(n=s&~n;0<n;){var z=31-se(n),W=1<<z;c[z]=0,p[z]=-1;var S=A[z];if(S!==null)for(A[z]=null,z=0;z<S.length;z++){var T=S[z];T!==null&&(T.lane&=-536870913)}n&=~W}a!==0&&ac(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function ac(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-se(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function lc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-se(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function ic(t,e){var n=e&-e;return n=(n&42)!==0?1:vs(n),(n&(t.suspendedLanes|e))!==0?0:n}function vs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sc(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:V0(t.type))}function rc(t,e){var n=k.p;try{return k.p=t,e()}finally{k.p=n}}var rn=Math.random().toString(36).slice(2),jt="__reactFiber$"+rn,It="__reactProps$"+rn,$n="__reactContainer$"+rn,gs="__reactEvents$"+rn,$f="__reactListeners$"+rn,If="__reactHandles$"+rn,uc="__reactResources$"+rn,ja="__reactMarker$"+rn;function bs(t){delete t[jt],delete t[It],delete t[gs],delete t[$f],delete t[If]}function In(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=C0(t);t!==null;){if(n=t[jt])return n;t=C0(t)}return e}t=n,n=t.parentNode}return null}function Fn(t){if(t=t[jt]||t[$n]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ya(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(u(33))}function Pn(t){var e=t[uc];return e||(e=t[uc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[ja]=!0}var cc=new Set,dc={};function Wn(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(dc[t]=e,t=0;t<e.length;t++)cc.add(e[t])}var Ff=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},fc={};function Pf(t){return ps.call(fc,t)?!0:ps.call(oc,t)?!1:Ff.test(t)?fc[t]=!0:(oc[t]=!0,!1)}function Gl(t,e,n){if(Pf(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Zl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function qe(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tp(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){if(!t._valueTracker){var e=pc(t)?"checked":"value";t._valueTracker=tp(t,e,""+t[e])}}function mc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=pc(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ep=/[\n"\\]/g;function xe(t){return t.replace(ep,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function As(t,e,n,a,l,i,s,c){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ve(e)):t.value!==""+ve(e)&&(t.value=""+ve(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Ss(t,s,ve(e)):n!=null?Ss(t,s,ve(n)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ve(c):t.removeAttribute("name")}function hc(t,e,n,a,l,i,s,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){_s(t);return}n=n!=null?""+ve(n):"",e=e!=null?""+ve(e):n,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),_s(t)}function Ss(t,e,n){e==="number"&&Xl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ea(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ve(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function yc(t,e,n){if(e!=null&&(e=""+ve(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ve(n):""}function vc(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(u(92));if(Wt(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=ve(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),_s(t)}function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xc(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||np.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function gc(t,e,n){if(e!=null&&typeof e!="object")throw Error(u(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&xc(t,l,a)}else for(var i in e)e.hasOwnProperty(i)&&xc(t,i,e[i])}function Es(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return lp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function je(){}var Ts=null;function ws(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var aa=null,la=null;function bc(t){var e=Fn(t);if(e&&(t=e.stateNode)){var n=t[It]||null;t:switch(t=e.stateNode,e.type){case"input":if(As(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[It]||null;if(!l)throw Error(u(90));As(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&mc(a)}break t;case"textarea":yc(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ea(t,!!n.multiple,e,!1)}}}var Rs=!1;function _c(t,e,n){if(Rs)return t(e,n);Rs=!0;try{var a=t(e);return a}finally{if(Rs=!1,(aa!==null||la!==null)&&(Wi(),aa&&(e=aa,t=la,la=aa=null,bc(e),t)))for(e=0;e<t.length;e++)bc(t[e])}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(u(231,e,typeof n));return n}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=!1;if(Ye)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Ns=!1}var un=null,zs=null,Ql=null;function Ac(){if(Ql)return Ql;var t,e=zs,n=e.length,a,l="value"in un?un.value:un.textContent,i=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[i-a];a++);return Ql=l.slice(t,1<a?1-a:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Sc(){return!1}function Ft(t){function e(n,a,l,i,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jl:Sc,this.isPropagationStopped=Sc,this}return w(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Ft(Ln),Xa=w({},Ln,{view:0,detail:0}),ip=Ft(Xa),Cs,Ms,Va,Il=w({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(Cs=t.screenX-Va.screenX,Ms=t.screenY-Va.screenY):Ms=Cs=0,Va=t),Cs)},movementY:function(t){return"movementY"in t?t.movementY:Ms}}),Ec=Ft(Il),sp=w({},Il,{dataTransfer:0}),rp=Ft(sp),up=w({},Xa,{relatedTarget:0}),Bs=Ft(up),cp=w({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=Ft(cp),op=w({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fp=Ft(op),pp=w({},Ln,{data:0}),Tc=Ft(pp),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yp[t])?!!e[t]:!1}function Ws(){return vp}var xp=w({},Xa,{key:function(t){if(t.key){var e=mp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gp=Ft(xp),bp=w({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Ft(bp),_p=w({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Ap=Ft(_p),Sp=w({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Ft(Sp),Tp=w({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Ft(Tp),Rp=w({},Ln,{newState:0,oldState:0}),Np=Ft(Rp),zp=[9,13,27,32],Ls=Ye&&"CompositionEvent"in window,Qa=null;Ye&&"documentMode"in document&&(Qa=document.documentMode);var Cp=Ye&&"TextEvent"in window&&!Qa,Rc=Ye&&(!Ls||Qa&&8<Qa&&11>=Qa),Nc=" ",zc=!1;function Cc(t,e){switch(t){case"keyup":return zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ia=!1;function Mp(t,e){switch(t){case"compositionend":return Mc(e);case"keypress":return e.which!==32?null:(zc=!0,Nc);case"textInput":return t=e.data,t===Nc&&zc?null:t;default:return null}}function Bp(t,e){if(ia)return t==="compositionend"||!Ls&&Cc(t,e)?(t=Ac(),Ql=zs=un=null,ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rc&&e.locale!=="ko"?null:e.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wp[t.type]:e==="textarea"}function Wc(t,e,n,a){aa?la?la.push(a):la=[a]:aa=a,e=qi(e,"onChange"),0<e.length&&(n=new $l("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Ka=null,Ja=null;function Lp(t){y0(t,0)}function Fl(t){var e=Ya(t);if(mc(e))return t}function Lc(t,e){if(t==="change")return e}var Oc=!1;if(Ye){var Os;if(Ye){var ks="oninput"in document;if(!ks){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),ks=typeof kc.oninput=="function"}Os=ks}else Os=!1;Oc=Os&&(!document.documentMode||9<document.documentMode)}function Dc(){Ka&&(Ka.detachEvent("onpropertychange",Hc),Ja=Ka=null)}function Hc(t){if(t.propertyName==="value"&&Fl(Ja)){var e=[];Wc(e,Ja,t,ws(t)),_c(Lp,e)}}function Op(t,e,n){t==="focusin"?(Dc(),Ka=e,Ja=n,Ka.attachEvent("onpropertychange",Hc)):t==="focusout"&&Dc()}function kp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Ja)}function Dp(t,e){if(t==="click")return Fl(e)}function Hp(t,e){if(t==="input"||t==="change")return Fl(e)}function Up(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Up;function $a(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ps.call(e,l)||!re(t[l],e[l]))return!1}return!0}function Uc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qc(t,e){var n=Uc(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Uc(n)}}function jc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Xl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Ds(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var qp=Ye&&"documentMode"in document&&11>=document.documentMode,sa=null,Hs=null,Ia=null,Us=!1;function Gc(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||sa==null||sa!==Xl(a)||(a=sa,"selectionStart"in a&&Ds(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ia&&$a(Ia,a)||(Ia=a,a=qi(Hs,"onSelect"),0<a.length&&(e=new $l("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=sa)))}function On(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ra={animationend:On("Animation","AnimationEnd"),animationiteration:On("Animation","AnimationIteration"),animationstart:On("Animation","AnimationStart"),transitionrun:On("Transition","TransitionRun"),transitionstart:On("Transition","TransitionStart"),transitioncancel:On("Transition","TransitionCancel"),transitionend:On("Transition","TransitionEnd")},qs={},Zc={};Ye&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function kn(t){if(qs[t])return qs[t];if(!ra[t])return t;var e=ra[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zc)return qs[t]=e[n];return t}var Xc=kn("animationend"),Vc=kn("animationiteration"),Qc=kn("animationstart"),jp=kn("transitionrun"),Yp=kn("transitionstart"),Gp=kn("transitioncancel"),Kc=kn("transitionend"),Jc=new Map,js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");js.push("scrollEnd");function Re(t,e){Jc.set(t,e),Wn(e,[t])}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ge=[],ua=0,Ys=0;function ti(){for(var t=ua,e=Ys=ua=0;e<t;){var n=ge[e];ge[e++]=null;var a=ge[e];ge[e++]=null;var l=ge[e];ge[e++]=null;var i=ge[e];if(ge[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}i!==0&&$c(n,l,i)}}function ei(t,e,n,a){ge[ua++]=t,ge[ua++]=e,ge[ua++]=n,ge[ua++]=a,Ys|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Gs(t,e,n,a){return ei(t,e,n,a),ni(t)}function Dn(t,e){return ei(t,null,null,e),ni(t)}function $c(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=t.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-se(n),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),i):null}function ni(t){if(50<gl)throw gl=0,Fr=null,Error(u(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ca={};function Zp(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ue(t,e,n,a){return new Zp(t,e,n,a)}function Zs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var n=t.alternate;return n===null?(n=ue(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Ic(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ai(t,e,n,a,l,i){var s=0;if(a=t,typeof t=="function")Zs(t)&&(s=1);else if(typeof t=="string")s=J1(t,n,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Vt:return t=ue(31,n,e,l),t.elementType=Vt,t.lanes=i,t;case U:return Hn(n.children,l,i,e);case j:s=8,l|=24;break;case D:return t=ue(12,n,e,l|2),t.elementType=D,t.lanes=i,t;case ft:return t=ue(13,n,e,l),t.elementType=ft,t.lanes=i,t;case At:return t=ue(19,n,e,l),t.elementType=At,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:s=10;break t;case F:s=9;break t;case ht:s=11;break t;case $:s=14;break t;case zt:s=16,a=null;break t}s=29,n=Error(u(130,t===null?"null":typeof t,"")),a=null}return e=ue(s,n,e,l),e.elementType=t,e.type=a,e.lanes=i,e}function Hn(t,e,n,a){return t=ue(7,t,a,e),t.lanes=n,t}function Xs(t,e,n){return t=ue(6,t,null,e),t.lanes=n,t}function Fc(t){var e=ue(18,null,null,0);return e.stateNode=t,e}function Vs(t,e,n){return e=ue(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pc=new WeakMap;function be(t,e){if(typeof t=="object"&&t!==null){var n=Pc.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Fu(e)},Pc.set(t,e),e)}return{value:t,source:e,stack:Fu(e)}}var da=[],oa=0,li=null,Fa=0,_e=[],Ae=0,cn=null,ke=1,De="";function Ze(t,e){da[oa++]=Fa,da[oa++]=li,li=t,Fa=e}function td(t,e,n){_e[Ae++]=ke,_e[Ae++]=De,_e[Ae++]=cn,cn=t;var a=ke;t=De;var l=32-se(a)-1;a&=~(1<<l),n+=1;var i=32-se(e)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,ke=1<<32-se(e)+l|n<<l|a,De=i+t}else ke=1<<i|n<<l|a,De=t}function Qs(t){t.return!==null&&(Ze(t,1),td(t,1,0))}function Ks(t){for(;t===li;)li=da[--oa],da[oa]=null,Fa=da[--oa],da[oa]=null;for(;t===cn;)cn=_e[--Ae],_e[Ae]=null,De=_e[--Ae],_e[Ae]=null,ke=_e[--Ae],_e[Ae]=null}function ed(t,e){_e[Ae++]=ke,_e[Ae++]=De,_e[Ae++]=cn,ke=e.id,De=e.overflow,cn=t}var Yt=null,St=null,rt=!1,dn=null,Se=!1,Js=Error(u(519));function on(t){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(be(e,t)),Js}function nd(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[jt]=t,e[It]=a,n){case"dialog":lt("cancel",e),lt("close",e);break;case"iframe":case"object":case"embed":lt("load",e);break;case"video":case"audio":for(n=0;n<_l.length;n++)lt(_l[n],e);break;case"source":lt("error",e);break;case"img":case"image":case"link":lt("error",e),lt("load",e);break;case"details":lt("toggle",e);break;case"input":lt("invalid",e),hc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":lt("invalid",e);break;case"textarea":lt("invalid",e),vc(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||b0(e.textContent,n)?(a.popover!=null&&(lt("beforetoggle",e),lt("toggle",e)),a.onScroll!=null&&lt("scroll",e),a.onScrollEnd!=null&&lt("scrollend",e),a.onClick!=null&&(e.onclick=je),e=!0):e=!1,e||on(t,!0)}function ad(t){for(Yt=t.return;Yt;)switch(Yt.tag){case 5:case 31:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Yt=Yt.return}}function fa(t){if(t!==Yt)return!1;if(!rt)return ad(t),rt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||pu(t.type,t.memoizedProps)),n=!n),n&&St&&on(t),ad(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));St=z0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));St=z0(t)}else e===27?(e=St,Tn(t.type)?(t=xu,xu=null,St=t):St=e):St=Yt?Te(t.stateNode.nextSibling):null;return!0}function Un(){St=Yt=null,rt=!1}function $s(){var t=dn;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),dn=null),t}function Pa(t){dn===null?dn=[t]:dn.push(t)}var Is=v(null),qn=null,Xe=null;function fn(t,e,n){H(Is,e._currentValue),e._currentValue=n}function Ve(t){t._currentValue=Is.current,L(Is)}function Fs(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=l;for(var p=0;p<e.length;p++)if(c.context===e[p]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Fs(i.return,n,t),a||(s=null);break t}i=c.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Fs(s,n,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function pa(t,e,n,a){t=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=l.type;re(l.pendingProps.value,s.value)||(t!==null?t.push(c):t=[c])}}else if(l===ot.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(wl):t=[wl])}l=l.return}t!==null&&Ps(e,t,n,a),e.flags|=262144}function ii(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jn(t){qn=t,Xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return ld(qn,t)}function si(t,e){return qn===null&&jn(t),ld(t,e)}function ld(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Xe===null){if(t===null)throw Error(u(308));Xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xe=Xe.next=e;return n}var Xp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Vp=r.unstable_scheduleCallback,Qp=r.unstable_NormalPriority,Lt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tr(){return{controller:new Xp,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&Vp(Qp,function(){t.controller.abort()})}var el=null,er=0,ma=0,ha=null;function Kp(t,e){if(el===null){var n=el=[];er=0,ma=lu(),ha={status:"pending",value:void 0,then:function(a){n.push(a)}}}return er++,e.then(id,id),e}function id(){if(--er===0&&el!==null){ha!==null&&(ha.status="fulfilled");var t=el;el=null,ma=0,ha=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Jp(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var sd=C.S;C.S=function(t,e){Zo=le(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Kp(t,e),sd!==null&&sd(t,e)};var Yn=v(null);function nr(){var t=Yn.current;return t!==null?t:_t.pooledCache}function ri(t,e){e===null?H(Yn,Yn.current):H(Yn,e.pool)}function rd(){var t=nr();return t===null?null:{parent:Lt._currentValue,pool:t}}var ya=Error(u(460)),ar=Error(u(474)),ui=Error(u(542)),ci={then:function(){}};function ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(je,je),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t;default:if(typeof e.status=="string")e.then(je,je);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,od(t),t}throw Zn=e,ya}}function Gn(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Zn=n,ya):n}}var Zn=null;function dd(){if(Zn===null)throw Error(u(459));var t=Zn;return Zn=null,t}function od(t){if(t===ya||t===ui)throw Error(u(483))}var va=null,nl=0;function di(t){var e=nl;return nl+=1,va===null&&(va=[]),cd(va,t,e)}function al(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function oi(t,e){throw e.$$typeof===O?Error(u(525)):(t=Object.prototype.toString.call(e),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function fd(t){function e(x,h){if(t){var _=x.deletions;_===null?(x.deletions=[h],x.flags|=16):_.push(h)}}function n(x,h){if(!t)return null;for(;h!==null;)e(x,h),h=h.sibling;return null}function a(x){for(var h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function l(x,h){return x=Ge(x,h),x.index=0,x.sibling=null,x}function i(x,h,_){return x.index=_,t?(_=x.alternate,_!==null?(_=_.index,_<h?(x.flags|=67108866,h):_):(x.flags|=67108866,h)):(x.flags|=1048576,h)}function s(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function c(x,h,_,M){return h===null||h.tag!==6?(h=Xs(_,x.mode,M),h.return=x,h):(h=l(h,_),h.return=x,h)}function p(x,h,_,M){var V=_.type;return V===U?z(x,h,_.props.children,M,_.key):h!==null&&(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zt&&Gn(V)===h.type)?(h=l(h,_.props),al(h,_),h.return=x,h):(h=ai(_.type,_.key,_.props,null,x.mode,M),al(h,_),h.return=x,h)}function A(x,h,_,M){return h===null||h.tag!==4||h.stateNode.containerInfo!==_.containerInfo||h.stateNode.implementation!==_.implementation?(h=Vs(_,x.mode,M),h.return=x,h):(h=l(h,_.children||[]),h.return=x,h)}function z(x,h,_,M,V){return h===null||h.tag!==7?(h=Hn(_,x.mode,M,V),h.return=x,h):(h=l(h,_),h.return=x,h)}function W(x,h,_){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Xs(""+h,x.mode,_),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Z:return _=ai(h.type,h.key,h.props,null,x.mode,_),al(_,h),_.return=x,_;case X:return h=Vs(h,x.mode,_),h.return=x,h;case zt:return h=Gn(h),W(x,h,_)}if(Wt(h)||Qt(h))return h=Hn(h,x.mode,_,null),h.return=x,h;if(typeof h.then=="function")return W(x,di(h),_);if(h.$$typeof===K)return W(x,si(x,h),_);oi(x,h)}return null}function S(x,h,_,M){var V=h!==null?h.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return V!==null?null:c(x,h,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:return _.key===V?p(x,h,_,M):null;case X:return _.key===V?A(x,h,_,M):null;case zt:return _=Gn(_),S(x,h,_,M)}if(Wt(_)||Qt(_))return V!==null?null:z(x,h,_,M,null);if(typeof _.then=="function")return S(x,h,di(_),M);if(_.$$typeof===K)return S(x,h,si(x,_),M);oi(x,_)}return null}function T(x,h,_,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return x=x.get(_)||null,c(h,x,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Z:return x=x.get(M.key===null?_:M.key)||null,p(h,x,M,V);case X:return x=x.get(M.key===null?_:M.key)||null,A(h,x,M,V);case zt:return M=Gn(M),T(x,h,_,M,V)}if(Wt(M)||Qt(M))return x=x.get(_)||null,z(h,x,M,V,null);if(typeof M.then=="function")return T(x,h,_,di(M),V);if(M.$$typeof===K)return T(x,h,_,si(h,M),V);oi(h,M)}return null}function q(x,h,_,M){for(var V=null,ut=null,G=h,et=h=0,st=null;G!==null&&et<_.length;et++){G.index>et?(st=G,G=null):st=G.sibling;var ct=S(x,G,_[et],M);if(ct===null){G===null&&(G=st);break}t&&G&&ct.alternate===null&&e(x,G),h=i(ct,h,et),ut===null?V=ct:ut.sibling=ct,ut=ct,G=st}if(et===_.length)return n(x,G),rt&&Ze(x,et),V;if(G===null){for(;et<_.length;et++)G=W(x,_[et],M),G!==null&&(h=i(G,h,et),ut===null?V=G:ut.sibling=G,ut=G);return rt&&Ze(x,et),V}for(G=a(G);et<_.length;et++)st=T(G,x,et,_[et],M),st!==null&&(t&&st.alternate!==null&&G.delete(st.key===null?et:st.key),h=i(st,h,et),ut===null?V=st:ut.sibling=st,ut=st);return t&&G.forEach(function(Cn){return e(x,Cn)}),rt&&Ze(x,et),V}function Q(x,h,_,M){if(_==null)throw Error(u(151));for(var V=null,ut=null,G=h,et=h=0,st=null,ct=_.next();G!==null&&!ct.done;et++,ct=_.next()){G.index>et?(st=G,G=null):st=G.sibling;var Cn=S(x,G,ct.value,M);if(Cn===null){G===null&&(G=st);break}t&&G&&Cn.alternate===null&&e(x,G),h=i(Cn,h,et),ut===null?V=Cn:ut.sibling=Cn,ut=Cn,G=st}if(ct.done)return n(x,G),rt&&Ze(x,et),V;if(G===null){for(;!ct.done;et++,ct=_.next())ct=W(x,ct.value,M),ct!==null&&(h=i(ct,h,et),ut===null?V=ct:ut.sibling=ct,ut=ct);return rt&&Ze(x,et),V}for(G=a(G);!ct.done;et++,ct=_.next())ct=T(G,x,et,ct.value,M),ct!==null&&(t&&ct.alternate!==null&&G.delete(ct.key===null?et:ct.key),h=i(ct,h,et),ut===null?V=ct:ut.sibling=ct,ut=ct);return t&&G.forEach(function(sm){return e(x,sm)}),rt&&Ze(x,et),V}function gt(x,h,_,M){if(typeof _=="object"&&_!==null&&_.type===U&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:t:{for(var V=_.key;h!==null;){if(h.key===V){if(V=_.type,V===U){if(h.tag===7){n(x,h.sibling),M=l(h,_.props.children),M.return=x,x=M;break t}}else if(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zt&&Gn(V)===h.type){n(x,h.sibling),M=l(h,_.props),al(M,_),M.return=x,x=M;break t}n(x,h);break}else e(x,h);h=h.sibling}_.type===U?(M=Hn(_.props.children,x.mode,M,_.key),M.return=x,x=M):(M=ai(_.type,_.key,_.props,null,x.mode,M),al(M,_),M.return=x,x=M)}return s(x);case X:t:{for(V=_.key;h!==null;){if(h.key===V)if(h.tag===4&&h.stateNode.containerInfo===_.containerInfo&&h.stateNode.implementation===_.implementation){n(x,h.sibling),M=l(h,_.children||[]),M.return=x,x=M;break t}else{n(x,h);break}else e(x,h);h=h.sibling}M=Vs(_,x.mode,M),M.return=x,x=M}return s(x);case zt:return _=Gn(_),gt(x,h,_,M)}if(Wt(_))return q(x,h,_,M);if(Qt(_)){if(V=Qt(_),typeof V!="function")throw Error(u(150));return _=V.call(_),Q(x,h,_,M)}if(typeof _.then=="function")return gt(x,h,di(_),M);if(_.$$typeof===K)return gt(x,h,si(x,_),M);oi(x,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,h!==null&&h.tag===6?(n(x,h.sibling),M=l(h,_),M.return=x,x=M):(n(x,h),M=Xs(_,x.mode,M),M.return=x,x=M),s(x)):n(x,h)}return function(x,h,_,M){try{nl=0;var V=gt(x,h,_,M);return va=null,V}catch(G){if(G===ya||G===ui)throw G;var ut=ue(29,G,null,x.mode);return ut.lanes=M,ut.return=x,ut}finally{}}}var Xn=fd(!0),pd=fd(!1),pn=!1;function lr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ir(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function mn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(dt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=ni(t),$c(t,null,n),e}return ei(t,a,e,n),ni(t)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,lc(t,n)}}function sr(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=e:i=i.next=e}else l=i=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var rr=!1;function il(){if(rr){var t=ha;if(t!==null)throw t}}function sl(t,e,n,a){rr=!1;var l=t.updateQueue;pn=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var p=c,A=p.next;p.next=null,s===null?i=A:s.next=A,s=p;var z=t.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==s&&(c===null?z.firstBaseUpdate=A:c.next=A,z.lastBaseUpdate=p))}if(i!==null){var W=l.baseState;s=0,z=A=p=null,c=i;do{var S=c.lane&-536870913,T=S!==c.lane;if(T?(it&S)===S:(a&S)===S){S!==0&&S===ma&&(rr=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var q=t,Q=c;S=e;var gt=n;switch(Q.tag){case 1:if(q=Q.payload,typeof q=="function"){W=q.call(gt,W,S);break t}W=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Q.payload,S=typeof q=="function"?q.call(gt,W,S):q,S==null)break t;W=w({},W,S);break t;case 2:pn=!0}}S=c.callback,S!==null&&(t.flags|=64,T&&(t.flags|=8192),T=l.callbacks,T===null?l.callbacks=[S]:T.push(S))}else T={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(A=z=T,p=W):z=z.next=T,s|=S;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;T=c,c=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);z===null&&(p=W),l.baseState=p,l.firstBaseUpdate=A,l.lastBaseUpdate=z,i===null&&(l.shared.lanes=0),bn|=s,t.lanes=s,t.memoizedState=W}}function md(t,e){if(typeof t!="function")throw Error(u(191,t));t.call(e)}function hd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)md(n[t],e)}var xa=v(null),fi=v(0);function yd(t,e){t=en,H(fi,t),H(xa,e),en=t|e.baseLanes}function ur(){H(fi,en),H(xa,xa.current)}function cr(){en=fi.current,L(xa),L(fi)}var ce=v(null),Ee=null;function yn(t){var e=t.alternate;H(Mt,Mt.current&1),H(ce,t),Ee===null&&(e===null||xa.current!==null||e.memoizedState!==null)&&(Ee=t)}function dr(t){H(Mt,Mt.current),H(ce,t),Ee===null&&(Ee=t)}function vd(t){t.tag===22?(H(Mt,Mt.current),H(ce,t),Ee===null&&(Ee=t)):vn()}function vn(){H(Mt,Mt.current),H(ce,ce.current)}function de(t){L(ce),Ee===t&&(Ee=null),L(Mt)}var Mt=v(0);function pi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yu(n)||vu(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qe=0,tt=null,vt=null,Ot=null,mi=!1,ga=!1,Vn=!1,hi=0,rl=0,ba=null,$p=0;function Rt(){throw Error(u(321))}function or(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!re(t[n],e[n]))return!1;return!0}function fr(t,e,n,a,l,i){return Qe=i,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?to:Rr,Vn=!1,i=n(a,l),Vn=!1,ga&&(i=gd(e,n,a,l)),xd(t),i}function xd(t){C.H=dl;var e=vt!==null&&vt.next!==null;if(Qe=0,Ot=vt=tt=null,mi=!1,rl=0,ba=null,e)throw Error(u(300));t===null||kt||(t=t.dependencies,t!==null&&ii(t)&&(kt=!0))}function gd(t,e,n,a){tt=t;var l=0;do{if(ga&&(ba=null),rl=0,ga=!1,25<=l)throw Error(u(301));if(l+=1,Ot=vt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=eo,i=e(n,a)}while(ga);return i}function Ip(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?ul(e):e,t=t.useState()[0],(vt!==null?vt.memoizedState:null)!==t&&(tt.flags|=1024),e}function pr(){var t=hi!==0;return hi=0,t}function mr(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function hr(t){if(mi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}mi=!1}Qe=0,Ot=vt=tt=null,ga=!1,rl=hi=0,ba=null}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?tt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Bt(){if(vt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Ot===null?tt.memoizedState:Ot.next;if(e!==null)Ot=e,vt=t;else{if(t===null)throw tt.alternate===null?Error(u(467)):Error(u(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Ot===null?tt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var e=rl;return rl+=1,ba===null&&(ba=[]),t=cd(ba,t,e),e=tt,(Ot===null?e.memoizedState:Ot.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?to:Rr),t}function vi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===K)return Gt(t)}throw Error(u(438,String(t)))}function yr(t){var e=null,n=tt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=tt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=yi(),tt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=Le;return e.index++,n}function Ke(t,e){return typeof e=="function"?e(t):e}function xi(t){var e=Bt();return vr(e,vt,t)}function vr(t,e,n){var a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}e.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var c=s=null,p=null,A=e,z=!1;do{var W=A.lane&-536870913;if(W!==A.lane?(it&W)===W:(Qe&W)===W){var S=A.revertLane;if(S===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),W===ma&&(z=!0);else if((Qe&S)===S){A=A.next,S===ma&&(z=!0);continue}else W={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(c=p=W,s=i):p=p.next=W,tt.lanes|=S,bn|=S;W=A.action,Vn&&n(i,W),i=A.hasEagerState?A.eagerState:n(i,W)}else S={lane:W,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(c=p=S,s=i):p=p.next=S,tt.lanes|=W,bn|=W;A=A.next}while(A!==null&&A!==e);if(p===null?s=i:p.next=c,!re(i,t.memoizedState)&&(kt=!0,z&&(n=ha,n!==null)))throw n;t.memoizedState=i,t.baseState=s,t.baseQueue=p,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function xr(t){var e=Bt(),n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,i=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);re(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,a]}function bd(t,e,n){var a=tt,l=Bt(),i=rt;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=e();var s=!re((vt||l).memoizedState,n);if(s&&(l.memoizedState=n,kt=!0),l=l.queue,_r(Sd.bind(null,a,l,t),[t]),l.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(a.flags|=2048,_a(9,{destroy:void 0},Ad.bind(null,a,l,n,e),null),_t===null)throw Error(u(349));i||(Qe&127)!==0||_d(a,e,n)}return n}function _d(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e=yi(),tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ad(t,e,n,a){e.value=n,e.getSnapshot=a,Ed(e)&&Td(t)}function Sd(t,e,n){return n(function(){Ed(e)&&Td(t)})}function Ed(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!re(t,n)}catch{return!0}}function Td(t){var e=Dn(t,2);e!==null&&ae(e,t,2)}function gr(t){var e=$t();if(typeof t=="function"){var n=t;if(t=n(),Vn){sn(!0);try{n()}finally{sn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:t},e}function wd(t,e,n,a){return t.baseState=n,vr(t,vt,typeof a=="function"?a:Ke)}function Fp(t,e,n,a,l){if(_i(t))throw Error(u(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};C.T!==null?n(!0):i.isTransition=!1,a(i),n=e.pending,n===null?(i.next=e.pending=i,Rd(e,i)):(i.next=n.next,e.pending=n.next=i)}}function Rd(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var i=C.T,s={};C.T=s;try{var c=n(l,a),p=C.S;p!==null&&p(s,c),Nd(t,e,c)}catch(A){br(t,e,A)}finally{i!==null&&s.types!==null&&(i.types=s.types),C.T=i}}else try{i=n(l,a),Nd(t,e,i)}catch(A){br(t,e,A)}}function Nd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){zd(t,e,a)},function(a){return br(t,e,a)}):zd(t,e,n)}function zd(t,e,n){e.status="fulfilled",e.value=n,Cd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Rd(t,n)))}function br(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Cd(e),e=e.next;while(e!==a)}t.action=null}function Cd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Md(t,e){return e}function Bd(t,e){if(rt){var n=_t.formState;if(n!==null){t:{var a=tt;if(rt){if(St){e:{for(var l=St,i=Se;l.nodeType!==8;){if(!i){l=null;break e}if(l=Te(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){St=Te(l.nextSibling),a=l.data==="F!";break t}}on(a)}a=!1}a&&(e=n[0])}}return n=$t(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Md,lastRenderedState:e},n.queue=a,n=Id.bind(null,tt,a),a.dispatch=n,a=gr(!1),i=wr.bind(null,tt,!1,a.queue),a=$t(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=Fp.bind(null,tt,l,i,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function Wd(t){var e=Bt();return Ld(e,vt,t)}function Ld(t,e,n){if(e=vr(t,e,Md)[0],t=xi(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ul(e)}catch(s){throw s===ya?ui:s}else a=e;e=Bt();var l=e.queue,i=l.dispatch;return n!==e.memoizedState&&(tt.flags|=2048,_a(9,{destroy:void 0},Pp.bind(null,l,n),null)),[a,i,t]}function Pp(t,e){t.action=e}function Od(t){var e=Bt(),n=vt;if(n!==null)return Ld(e,n,t);Bt(),e=e.memoizedState,n=Bt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function _a(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=tt.updateQueue,e===null&&(e=yi(),tt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function kd(){return Bt().memoizedState}function gi(t,e,n,a){var l=$t();tt.flags|=t,l.memoizedState=_a(1|e,{destroy:void 0},n,a===void 0?null:a)}function bi(t,e,n,a){var l=Bt();a=a===void 0?null:a;var i=l.memoizedState.inst;vt!==null&&a!==null&&or(a,vt.memoizedState.deps)?l.memoizedState=_a(e,i,n,a):(tt.flags|=t,l.memoizedState=_a(1|e,i,n,a))}function Dd(t,e){gi(8390656,8,t,e)}function _r(t,e){bi(2048,8,t,e)}function t1(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=yi(),tt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Hd(t){var e=Bt().memoizedState;return t1({ref:e,nextImpl:t}),function(){if((dt&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function Ud(t,e){return bi(4,2,t,e)}function qd(t,e){return bi(4,4,t,e)}function jd(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yd(t,e,n){n=n!=null?n.concat([t]):null,bi(4,4,jd.bind(null,e,t),n)}function Ar(){}function Gd(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&or(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Zd(t,e){var n=Bt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&or(e,a[1]))return a[0];if(a=t(),Vn){sn(!0);try{t()}finally{sn(!1)}}return n.memoizedState=[a,e],a}function Sr(t,e,n){return n===void 0||(Qe&1073741824)!==0&&(it&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Vo(),tt.lanes|=t,bn|=t,n)}function Xd(t,e,n,a){return re(n,e)?n:xa.current!==null?(t=Sr(t,n,a),re(t,e)||(kt=!0),t):(Qe&42)===0||(Qe&1073741824)!==0&&(it&261930)===0?(kt=!0,t.memoizedState=n):(t=Vo(),tt.lanes|=t,bn|=t,e)}function Vd(t,e,n,a,l){var i=k.p;k.p=i!==0&&8>i?i:8;var s=C.T,c={};C.T=c,wr(t,!1,e,n);try{var p=l(),A=C.S;if(A!==null&&A(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var z=Jp(p,a);cl(t,e,z,pe(t))}else cl(t,e,a,pe(t))}catch(W){cl(t,e,{then:function(){},status:"rejected",reason:W},pe())}finally{k.p=i,s!==null&&c.types!==null&&(s.types=c.types),C.T=s}}function e1(){}function Er(t,e,n,a){if(t.tag!==5)throw Error(u(476));var l=Qd(t).queue;Vd(t,l,e,J,n===null?e1:function(){return Kd(t),n(a)})}function Qd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:J},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Kd(t){var e=Qd(t);e.next===null&&(e=t.alternate.memoizedState),cl(t,e.next.queue,{},pe())}function Tr(){return Gt(wl)}function Jd(){return Bt().memoizedState}function $d(){return Bt().memoizedState}function n1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=pe();t=mn(n);var a=hn(e,t,n);a!==null&&(ae(a,e,n),ll(a,e,n)),e={cache:tr()},t.payload=e;return}e=e.return}}function a1(t,e,n){var a=pe();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_i(t)?Fd(e,n):(n=Gs(t,e,n,a),n!==null&&(ae(n,t,a),Pd(n,e,a)))}function Id(t,e,n){var a=pe();cl(t,e,n,a)}function cl(t,e,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_i(t))Fd(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,c=i(s,n);if(l.hasEagerState=!0,l.eagerState=c,re(c,s))return ei(t,e,l,0),_t===null&&ti(),!1}catch{}finally{}if(n=Gs(t,e,l,a),n!==null)return ae(n,t,a),Pd(n,e,a),!0}return!1}function wr(t,e,n,a){if(a={lane:2,revertLane:lu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(t)){if(e)throw Error(u(479))}else e=Gs(t,n,a,2),e!==null&&ae(e,t,2)}function _i(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function Fd(t,e){ga=mi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pd(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,lc(t,n)}}var dl={readContext:Gt,use:vi,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt};dl.useEffectEvent=Rt;var to={readContext:Gt,use:vi,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Dd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,gi(4194308,4,jd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gi(4194308,4,t,e)},useInsertionEffect:function(t,e){gi(4,2,t,e)},useMemo:function(t,e){var n=$t();e=e===void 0?null:e;var a=t();if(Vn){sn(!0);try{t()}finally{sn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=$t();if(n!==void 0){var l=n(e);if(Vn){sn(!0);try{n(e)}finally{sn(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=a1.bind(null,tt,t),[a.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:function(t){t=gr(t);var e=t.queue,n=Id.bind(null,tt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ar,useDeferredValue:function(t,e){var n=$t();return Sr(n,t,e)},useTransition:function(){var t=gr(!1);return t=Vd.bind(null,tt,t.queue,!0,!1),$t().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=tt,l=$t();if(rt){if(n===void 0)throw Error(u(407));n=n()}else{if(n=e(),_t===null)throw Error(u(349));(it&127)!==0||_d(a,e,n)}l.memoizedState=n;var i={value:n,getSnapshot:e};return l.queue=i,Dd(Sd.bind(null,a,i,t),[t]),a.flags|=2048,_a(9,{destroy:void 0},Ad.bind(null,a,i,n,e),null),n},useId:function(){var t=$t(),e=_t.identifierPrefix;if(rt){var n=De,a=ke;n=(a&~(1<<32-se(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=hi++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=$p++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Tr,useFormState:Bd,useActionState:Bd,useOptimistic:function(t){var e=$t();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=wr.bind(null,tt,!0,n),n.dispatch=e,[t,e]},useMemoCache:yr,useCacheRefresh:function(){return $t().memoizedState=n1.bind(null,tt)},useEffectEvent:function(t){var e=$t(),n={impl:t};return e.memoizedState=n,function(){if((dt&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Rr={readContext:Gt,use:vi,useCallback:Gd,useContext:Gt,useEffect:_r,useImperativeHandle:Yd,useInsertionEffect:Ud,useLayoutEffect:qd,useMemo:Zd,useReducer:xi,useRef:kd,useState:function(){return xi(Ke)},useDebugValue:Ar,useDeferredValue:function(t,e){var n=Bt();return Xd(n,vt.memoizedState,t,e)},useTransition:function(){var t=xi(Ke)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:ul(t),e]},useSyncExternalStore:bd,useId:Jd,useHostTransitionStatus:Tr,useFormState:Wd,useActionState:Wd,useOptimistic:function(t,e){var n=Bt();return wd(n,vt,t,e)},useMemoCache:yr,useCacheRefresh:$d};Rr.useEffectEvent=Hd;var eo={readContext:Gt,use:vi,useCallback:Gd,useContext:Gt,useEffect:_r,useImperativeHandle:Yd,useInsertionEffect:Ud,useLayoutEffect:qd,useMemo:Zd,useReducer:xr,useRef:kd,useState:function(){return xr(Ke)},useDebugValue:Ar,useDeferredValue:function(t,e){var n=Bt();return vt===null?Sr(n,t,e):Xd(n,vt.memoizedState,t,e)},useTransition:function(){var t=xr(Ke)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:ul(t),e]},useSyncExternalStore:bd,useId:Jd,useHostTransitionStatus:Tr,useFormState:Od,useActionState:Od,useOptimistic:function(t,e){var n=Bt();return vt!==null?wd(n,vt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:yr,useCacheRefresh:$d};eo.useEffectEvent=Hd;function Nr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:w({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=pe(),l=mn(a);l.payload=e,n!=null&&(l.callback=n),e=hn(t,l,a),e!==null&&(ae(e,t,a),ll(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=pe(),l=mn(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=hn(t,l,a),e!==null&&(ae(e,t,a),ll(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pe(),a=mn(n);a.tag=2,e!=null&&(a.callback=e),e=hn(t,a,n),e!==null&&(ae(e,t,n),ll(e,t,n))}};function no(t,e,n,a,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!$a(n,a)||!$a(l,i):!0}function ao(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&zr.enqueueReplaceState(e,e.state,null)}function Qn(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=w({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function lo(t){Pl(t)}function io(t){console.error(t)}function so(t){Pl(t)}function Ai(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ro(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Cr(t,e,n){return n=mn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ai(t,e)},n}function uo(t){return t=mn(t),t.tag=3,t}function co(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){ro(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ro(e,n,a),typeof l!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function l1(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&pa(e,n,l,!0),n=ce.current,n!==null){switch(n.tag){case 31:case 13:return Ee===null?Li():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===ci?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),eu(t,a,l)),!1;case 22:return n.flags|=65536,a===ci?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),eu(t,a,l)),!1}throw Error(u(435,n.tag))}return eu(t,a,l),Li(),!1}if(rt)return e=ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Js&&(t=Error(u(422),{cause:a}),Pa(be(t,n)))):(a!==Js&&(e=Error(u(423),{cause:a}),Pa(be(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=be(a,n),l=Cr(t.stateNode,a,l),sr(t,l),Nt!==4&&(Nt=2)),!1;var i=Error(u(520),{cause:a});if(i=be(i,n),xl===null?xl=[i]:xl.push(i),Nt!==4&&(Nt=2),e===null)return!0;a=be(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Cr(n.stateNode,a,t),sr(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_n===null||!_n.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=uo(l),co(l,t,n,a),sr(n,l),!1}n=n.return}while(n!==null);return!1}var Mr=Error(u(461)),kt=!1;function Zt(t,e,n,a){e.child=t===null?pd(e,null,n,a):Xn(e,t.child,n,a)}function oo(t,e,n,a,l){n=n.render;var i=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return jn(e),a=fr(t,e,n,s,i,l),c=pr(),t!==null&&!kt?(mr(t,e,l),Je(t,e,l)):(rt&&c&&Qs(e),e.flags|=1,Zt(t,e,a,l),e.child)}function fo(t,e,n,a,l){if(t===null){var i=n.type;return typeof i=="function"&&!Zs(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,po(t,e,i,a,l)):(t=ai(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Ur(t,l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(s,a)&&t.ref===e.ref)return Je(t,e,l)}return e.flags|=1,t=Ge(i,a),t.ref=e.ref,t.return=e,e.child=t}function po(t,e,n,a,l){if(t!==null){var i=t.memoizedProps;if($a(i,a)&&t.ref===e.ref)if(kt=!1,e.pendingProps=a=i,Ur(t,l))(t.flags&131072)!==0&&(kt=!0);else return e.lanes=t.lanes,Je(t,e,l)}return Br(t,e,n,a,l)}function mo(t,e,n,a){var l=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,e.child=null;return ho(t,e,i,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ri(e,i!==null?i.cachePool:null),i!==null?yd(e,i):ur(),vd(e);else return a=e.lanes=536870912,ho(t,e,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ri(e,i.cachePool),yd(e,i),vn(),e.memoizedState=null):(t!==null&&ri(e,null),ur(),vn());return Zt(t,e,l,n),e.child}function ol(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ho(t,e,n,a,l){var i=nr();return i=i===null?null:{parent:Lt._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&ri(e,null),ur(),vd(e),t!==null&&pa(t,e,a,!0),e.childLanes=l,null}function Si(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function yo(t,e,n){return Xn(e,t.child,null,n),t=Si(e,e.pendingProps),t.flags|=2,de(e),e.memoizedState=null,t}function i1(t,e,n){var a=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(rt){if(a.mode==="hidden")return t=Si(e,a),e.lanes=536870912,ol(null,t);if(dr(e),(t=St)?(t=N0(t,Se),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:cn!==null?{id:ke,overflow:De}:null,retryLane:536870912,hydrationErrors:null},n=Fc(t),n.return=e,e.child=n,Yt=e,St=null)):t=null,t===null)throw on(e);return e.lanes=536870912,null}return Si(e,a)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(dr(e),l)if(e.flags&256)e.flags&=-257,e=yo(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(u(558));else if(kt||pa(t,e,n,!1),l=(n&t.childLanes)!==0,kt||l){if(a=_t,a!==null&&(s=ic(a,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,Dn(t,s),ae(a,t,s),Mr;Li(),e=yo(t,e,n)}else t=i.treeContext,St=Te(s.nextSibling),Yt=e,rt=!0,dn=null,Se=!1,t!==null&&ed(e,t),e=Si(e,a),e.flags|=4096;return e}return t=Ge(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ei(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Br(t,e,n,a,l){return jn(e),n=fr(t,e,n,a,void 0,l),a=pr(),t!==null&&!kt?(mr(t,e,l),Je(t,e,l)):(rt&&a&&Qs(e),e.flags|=1,Zt(t,e,n,l),e.child)}function vo(t,e,n,a,l,i){return jn(e),e.updateQueue=null,n=gd(e,a,n,l),xd(t),a=pr(),t!==null&&!kt?(mr(t,e,i),Je(t,e,i)):(rt&&a&&Qs(e),e.flags|=1,Zt(t,e,n,i),e.child)}function xo(t,e,n,a,l){if(jn(e),e.stateNode===null){var i=ca,s=n.contextType;typeof s=="object"&&s!==null&&(i=Gt(s)),i=new n(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},lr(e),s=n.contextType,i.context=typeof s=="object"&&s!==null?Gt(s):ca,i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Nr(e,n,s,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&zr.enqueueReplaceState(i,i.state,null),sl(e,a,i,l),il(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,p=Qn(n,c);i.props=p;var A=i.context,z=n.contextType;s=ca,typeof z=="object"&&z!==null&&(s=Gt(z));var W=n.getDerivedStateFromProps;z=typeof W=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||A!==s)&&ao(e,i,a,s),pn=!1;var S=e.memoizedState;i.state=S,sl(e,a,i,l),il(),A=e.memoizedState,c||S!==A||pn?(typeof W=="function"&&(Nr(e,n,W,a),A=e.memoizedState),(p=pn||no(e,n,p,a,S,A,s))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=A),i.props=a,i.state=A,i.context=s,a=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,ir(t,e),s=e.memoizedProps,z=Qn(n,s),i.props=z,W=e.pendingProps,S=i.context,A=n.contextType,p=ca,typeof A=="object"&&A!==null&&(p=Gt(A)),c=n.getDerivedStateFromProps,(A=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==W||S!==p)&&ao(e,i,a,p),pn=!1,S=e.memoizedState,i.state=S,sl(e,a,i,l),il();var T=e.memoizedState;s!==W||S!==T||pn||t!==null&&t.dependencies!==null&&ii(t.dependencies)?(typeof c=="function"&&(Nr(e,n,c,a),T=e.memoizedState),(z=pn||no(e,n,z,a,S,T,p)||t!==null&&t.dependencies!==null&&ii(t.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=p,a=z):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ei(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Xn(e,t.child,null,l),e.child=Xn(e,null,n,l)):Zt(t,e,n,l),e.memoizedState=i.state,t=e.child):t=Je(t,e,l),t}function go(t,e,n,a){return Un(),e.flags|=256,Zt(t,e,n,a),e.child}var Wr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lr(t){return{baseLanes:t,cachePool:rd()}}function Or(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=fe),t}function bo(t,e,n){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(Mt.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(rt){if(l?yn(e):vn(),(t=St)?(t=N0(t,Se),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:cn!==null?{id:ke,overflow:De}:null,retryLane:536870912,hydrationErrors:null},n=Fc(t),n.return=e,e.child=n,Yt=e,St=null)):t=null,t===null)throw on(e);return vu(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,l?(vn(),l=e.mode,c=Ti({mode:"hidden",children:c},l),a=Hn(a,l,n,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=Lr(n),a.childLanes=Or(t,s,n),e.memoizedState=Wr,ol(null,a)):(yn(e),kr(e,c))}var p=t.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(i)e.flags&256?(yn(e),e.flags&=-257,e=Dr(t,e,n)):e.memoizedState!==null?(vn(),e.child=t.child,e.flags|=128,e=null):(vn(),c=a.fallback,l=e.mode,a=Ti({mode:"visible",children:a.children},l),c=Hn(c,l,n,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Xn(e,t.child,null,n),a=e.child,a.memoizedState=Lr(n),a.childLanes=Or(t,s,n),e.memoizedState=Wr,e=ol(null,a));else if(yn(e),vu(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var A=s.dgst;s=A,a=Error(u(419)),a.stack="",a.digest=s,Pa({value:a,source:null,stack:null}),e=Dr(t,e,n)}else if(kt||pa(t,e,n,!1),s=(n&t.childLanes)!==0,kt||s){if(s=_t,s!==null&&(a=ic(s,n),a!==0&&a!==p.retryLane))throw p.retryLane=a,Dn(t,a),ae(s,t,a),Mr;yu(c)||Li(),e=Dr(t,e,n)}else yu(c)?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,St=Te(c.nextSibling),Yt=e,rt=!0,dn=null,Se=!1,t!==null&&ed(e,t),e=kr(e,a.children),e.flags|=4096);return e}return l?(vn(),c=a.fallback,l=e.mode,p=t.child,A=p.sibling,a=Ge(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,A!==null?c=Ge(A,c):(c=Hn(c,l,n,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ol(null,a),a=e.child,c=t.child.memoizedState,c===null?c=Lr(n):(l=c.cachePool,l!==null?(p=Lt._currentValue,l=l.parent!==p?{parent:p,pool:p}:l):l=rd(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Or(t,s,n),e.memoizedState=Wr,ol(t.child,a)):(yn(e),n=t.child,t=n.sibling,n=Ge(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function kr(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ti(t,e){return t=ue(22,t,null,e),t.lanes=0,t}function Dr(t,e,n){return Xn(e,t.child,null,n),t=kr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _o(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Fs(t.return,e,n)}function Hr(t,e,n,a,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l,s.treeForkCount=i)}function Ao(t,e,n){var a=e.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var s=Mt.current,c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,H(Mt,s),Zt(t,e,a,n),a=rt?Fa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_o(t,n,e);else if(t.tag===19)_o(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&pi(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Hr(e,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&pi(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Hr(e,!0,n,null,i,a);break;case"together":Hr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Je(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(pa(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(u(153));if(e.child!==null){for(t=e.child,n=Ge(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ge(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ur(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ii(t)))}function s1(t,e,n){switch(e.tag){case 3:Jt(e,e.stateNode.containerInfo),fn(e,Lt,t.memoizedState.cache),Un();break;case 27:case 5:Da(e);break;case 4:Jt(e,e.stateNode.containerInfo);break;case 10:fn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,dr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(yn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?bo(t,e,n):(yn(e),t=Je(t,e,n),t!==null?t.sibling:null);yn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(pa(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return Ao(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Mt,Mt.current),a)break;return null;case 22:return e.lanes=0,mo(t,e,n,e.pendingProps);case 24:fn(e,Lt,t.memoizedState.cache)}return Je(t,e,n)}function So(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)kt=!0;else{if(!Ur(t,n)&&(e.flags&128)===0)return kt=!1,s1(t,e,n);kt=(t.flags&131072)!==0}else kt=!1,rt&&(e.flags&1048576)!==0&&td(e,Fa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Gn(e.elementType),e.type=t,typeof t=="function")Zs(t)?(a=Qn(t,a),e.tag=1,e=xo(null,e,t,a,n)):(e.tag=0,e=Br(null,e,t,a,n));else{if(t!=null){var l=t.$$typeof;if(l===ht){e.tag=11,e=oo(null,e,t,a,n);break t}else if(l===$){e.tag=14,e=fo(null,e,t,a,n);break t}}throw e=ye(t)||t,Error(u(306,e,""))}}return e;case 0:return Br(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Qn(a,e.pendingProps),xo(t,e,a,l,n);case 3:t:{if(Jt(e,e.stateNode.containerInfo),t===null)throw Error(u(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,ir(t,e),sl(e,a,null,n);var s=e.memoizedState;if(a=s.cache,fn(e,Lt,a),a!==i.cache&&Ps(e,[Lt],n,!0),il(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=go(t,e,a,n);break t}else if(a!==l){l=be(Error(u(424)),e),Pa(l),e=go(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(St=Te(t.firstChild),Yt=e,rt=!0,dn=null,Se=!0,n=pd(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Un(),a===l){e=Je(t,e,n);break t}Zt(t,e,a,n)}e=e.child}return e;case 26:return Ei(t,e),t===null?(n=L0(e.type,null,e.pendingProps,null))?e.memoizedState=n:rt||(n=e.type,t=e.pendingProps,a=ji(nt.current).createElement(n),a[jt]=e,a[It]=t,Xt(a,n,t),Ut(a),e.stateNode=a):e.memoizedState=L0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Da(e),t===null&&rt&&(a=e.stateNode=M0(e.type,e.pendingProps,nt.current),Yt=e,Se=!0,l=St,Tn(e.type)?(xu=l,St=Te(a.firstChild)):St=l),Zt(t,e,e.pendingProps.children,n),Ei(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&rt&&((l=a=St)&&(a=k1(a,e.type,e.pendingProps,Se),a!==null?(e.stateNode=a,Yt=e,St=Te(a.firstChild),Se=!1,l=!0):l=!1),l||on(e)),Da(e),l=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,pu(l,i)?a=null:s!==null&&pu(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=fr(t,e,Ip,null,null,n),wl._currentValue=l),Ei(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&rt&&((t=n=St)&&(n=D1(n,e.pendingProps,Se),n!==null?(e.stateNode=n,Yt=e,St=null,t=!0):t=!1),t||on(e)),null;case 13:return bo(t,e,n);case 4:return Jt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Xn(e,null,a,n):Zt(t,e,a,n),e.child;case 11:return oo(t,e,e.type,e.pendingProps,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,fn(e,e.type,a.value),Zt(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,jn(e),l=Gt(l),a=a(l),e.flags|=1,Zt(t,e,a,n),e.child;case 14:return fo(t,e,e.type,e.pendingProps,n);case 15:return po(t,e,e.type,e.pendingProps,n);case 19:return Ao(t,e,n);case 31:return i1(t,e,n);case 22:return mo(t,e,n,e.pendingProps);case 24:return jn(e),a=Gt(Lt),t===null?(l=nr(),l===null&&(l=_t,i=tr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),e.memoizedState={parent:a,cache:l},lr(e),fn(e,Lt,l)):((t.lanes&n)!==0&&(ir(t,e),sl(e,null,null,n),il()),l=t.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),fn(e,Lt,a)):(a=i.cache,fn(e,Lt,a),a!==l.cache&&Ps(e,[Lt],n,!0))),Zt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function $e(t){t.flags|=4}function qr(t,e,n,a,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if($o())t.flags|=8192;else throw Zn=ci,ar}else t.flags&=-16777217}function Eo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U0(e))if($o())t.flags|=8192;else throw Zn=ci,ar}function wi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?nc():536870912,t.lanes|=e,Ta|=e)}function fl(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function r1(t,e,n){var a=e.pendingProps;switch(Ks(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Et(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ve(Lt),Ct(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(fa(e)?$e(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$s())),Et(e),null;case 26:var l=e.type,i=e.memoizedState;return t===null?($e(e),i!==null?(Et(e),Eo(e,i)):(Et(e),qr(e,l,null,a,n))):i?i!==t.memoizedState?($e(e),Et(e),Eo(e,i)):(Et(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&$e(e),Et(e),qr(e,l,t,a,n)),null;case 27:if(Dl(e),n=nt.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&$e(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Et(e),null}t=Y.current,fa(e)?nd(e):(t=M0(l,a,n),e.stateNode=t,$e(e))}return Et(e),null;case 5:if(Dl(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&$e(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Et(e),null}if(i=Y.current,fa(e))nd(e);else{var s=ji(nt.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}i[jt]=e,i[It]=a;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;t:switch(Xt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&$e(e)}}return Et(e),qr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&$e(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(u(166));if(t=nt.current,fa(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=Yt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[jt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||b0(t.nodeValue,n)),t||on(e,!0)}else t=ji(t).createTextNode(a),t[jt]=e,e.stateNode=t}return Et(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=fa(e),n!==null){if(t===null){if(!a)throw Error(u(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(557));t[jt]=e}else Un(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),t=!1}else n=$s(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(de(e),e):(de(e),null);if((e.flags&128)!==0)throw Error(u(558))}return Et(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=fa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(u(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[jt]=e}else Un(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),l=!1}else l=$s(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(de(e),e):(de(e),null)}return de(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),wi(e,e.updateQueue),Et(e),null);case 4:return Ct(),t===null&&uu(e.stateNode.containerInfo),Et(e),null;case 10:return Ve(e.type),Et(e),null;case 19:if(L(Mt),a=e.memoizedState,a===null)return Et(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)fl(a,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=pi(t),i!==null){for(e.flags|=128,fl(a,!1),t=i.updateQueue,e.updateQueue=t,wi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Ic(n,t),n=n.sibling;return H(Mt,Mt.current&1|2),rt&&Ze(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&le()>Mi&&(e.flags|=128,l=!0,fl(a,!1),e.lanes=4194304)}else{if(!l)if(t=pi(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,wi(e,t),fl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!rt)return Et(e),null}else 2*le()-a.renderingStartTime>Mi&&n!==536870912&&(e.flags|=128,l=!0,fl(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=le(),t.sibling=null,n=Mt.current,H(Mt,l?n&1|2:n&1),rt&&Ze(e,a.treeForkCount),t):(Et(e),null);case 22:case 23:return de(e),cr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),n=e.updateQueue,n!==null&&wi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&L(Yn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ve(Lt),Et(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function u1(t,e){switch(Ks(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ve(Lt),Ct(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Dl(e),null;case 31:if(e.memoizedState!==null){if(de(e),e.alternate===null)throw Error(u(340));Un()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(de(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(u(340));Un()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Mt),null;case 4:return Ct(),null;case 10:return Ve(e.type),null;case 22:case 23:return de(e),cr(),t!==null&&L(Yn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ve(Lt),null;case 25:return null;default:return null}}function To(t,e){switch(Ks(e),e.tag){case 3:Ve(Lt),Ct();break;case 26:case 27:case 5:Dl(e);break;case 4:Ct();break;case 31:e.memoizedState!==null&&de(e);break;case 13:de(e);break;case 19:L(Mt);break;case 10:Ve(e.type);break;case 22:case 23:de(e),cr(),t!==null&&L(Yn);break;case 24:Ve(Lt)}}function pl(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var i=n.create,s=n.inst;a=i(),s.destroy=a}n=n.next}while(n!==l)}}catch(c){mt(e,e.return,c)}}function xn(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,l=e;var p=n,A=c;try{A()}catch(z){mt(l,p,z)}}}a=a.next}while(a!==i)}}catch(z){mt(e,e.return,z)}}function wo(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{hd(e,n)}catch(a){mt(t,t.return,a)}}}function Ro(t,e,n){n.props=Qn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){mt(t,e,a)}}function ml(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(l){mt(t,e,l)}}function He(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){mt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){mt(t,e,l)}else n.current=null}function No(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){mt(t,t.return,l)}}function jr(t,e,n){try{var a=t.stateNode;C1(a,t.type,n,e),a[It]=e}catch(l){mt(t,t.return,l)}}function zo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Tn(t.type)||t.tag===4}function Yr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Tn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gr(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=je));else if(a!==4&&(a===27&&Tn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Gr(t,e,n),t=t.sibling;t!==null;)Gr(t,e,n),t=t.sibling}function Ri(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Tn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ri(t,e,n),t=t.sibling;t!==null;)Ri(t,e,n),t=t.sibling}function Co(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Xt(e,a,n),e[jt]=t,e[It]=n}catch(i){mt(t,t.return,i)}}var Ie=!1,Dt=!1,Zr=!1,Mo=typeof WeakSet=="function"?WeakSet:Set,qt=null;function c1(t,e){if(t=t.containerInfo,ou=Ki,t=Yc(t),Ds(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var s=0,c=-1,p=-1,A=0,z=0,W=t,S=null;e:for(;;){for(var T;W!==n||l!==0&&W.nodeType!==3||(c=s+l),W!==i||a!==0&&W.nodeType!==3||(p=s+a),W.nodeType===3&&(s+=W.nodeValue.length),(T=W.firstChild)!==null;)S=W,W=T;for(;;){if(W===t)break e;if(S===n&&++A===l&&(c=s),S===i&&++z===a&&(p=s),(T=W.nextSibling)!==null)break;W=S,S=W.parentNode}W=T}n=c===-1||p===-1?null:{start:c,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},Ki=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)l=t[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var q=Qn(n.type,l);t=a.getSnapshotBeforeUpdate(q,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(Q){mt(n,n.return,Q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)hu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function Bo(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Pe(t,n),a&4&&pl(5,n);break;case 1:if(Pe(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){mt(n,n.return,s)}else{var l=Qn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){mt(n,n.return,s)}}a&64&&wo(n),a&512&&ml(n,n.return);break;case 3:if(Pe(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{hd(t,e)}catch(s){mt(n,n.return,s)}}break;case 27:e===null&&a&4&&Co(n);case 26:case 5:Pe(t,n),e===null&&a&4&&No(n),a&512&&ml(n,n.return);break;case 12:Pe(t,n);break;case 31:Pe(t,n),a&4&&Oo(t,n);break;case 13:Pe(t,n),a&4&&ko(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=x1.bind(null,n),H1(t,n))));break;case 22:if(a=n.memoizedState!==null||Ie,!a){e=e!==null&&e.memoizedState!==null||Dt,l=Ie;var i=Dt;Ie=a,(Dt=e)&&!i?tn(t,n,(n.subtreeFlags&8772)!==0):Pe(t,n),Ie=l,Dt=i}break;case 30:break;default:Pe(t,n)}}function Wo(t){var e=t.alternate;e!==null&&(t.alternate=null,Wo(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,Pt=!1;function Fe(t,e,n){for(n=n.child;n!==null;)Lo(t,e,n),n=n.sibling}function Lo(t,e,n){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 26:Dt||He(n,e),Fe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Dt||He(n,e);var a=Tt,l=Pt;Tn(n.type)&&(Tt=n.stateNode,Pt=!1),Fe(t,e,n),Sl(n.stateNode),Tt=a,Pt=l;break;case 5:Dt||He(n,e);case 6:if(a=Tt,l=Pt,Tt=null,Fe(t,e,n),Tt=a,Pt=l,Tt!==null)if(Pt)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(i){mt(n,e,i)}else try{Tt.removeChild(n.stateNode)}catch(i){mt(n,e,i)}break;case 18:Tt!==null&&(Pt?(t=Tt,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Wa(t)):w0(Tt,n.stateNode));break;case 4:a=Tt,l=Pt,Tt=n.stateNode.containerInfo,Pt=!0,Fe(t,e,n),Tt=a,Pt=l;break;case 0:case 11:case 14:case 15:xn(2,n,e),Dt||xn(4,n,e),Fe(t,e,n);break;case 1:Dt||(He(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ro(n,e,a)),Fe(t,e,n);break;case 21:Fe(t,e,n);break;case 22:Dt=(a=Dt)||n.memoizedState!==null,Fe(t,e,n),Dt=a;break;default:Fe(t,e,n)}}function Oo(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wa(t)}catch(n){mt(e,e.return,n)}}}function ko(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wa(t)}catch(n){mt(e,e.return,n)}}function d1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Mo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Mo),e;default:throw Error(u(435,t.tag))}}function Ni(t,e){var n=d1(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var l=g1.bind(null,t,a);a.then(l,l)}})}function te(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=t,s=e,c=s;t:for(;c!==null;){switch(c.tag){case 27:if(Tn(c.type)){Tt=c.stateNode,Pt=!1;break t}break;case 5:Tt=c.stateNode,Pt=!1;break t;case 3:case 4:Tt=c.stateNode.containerInfo,Pt=!0;break t}c=c.return}if(Tt===null)throw Error(u(160));Lo(i,s,l),Tt=null,Pt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Do(e,t),e=e.sibling}var Ne=null;function Do(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:te(e,t),ee(t),a&4&&(xn(3,t,t.return),pl(3,t),xn(5,t,t.return));break;case 1:te(e,t),ee(t),a&512&&(Dt||n===null||He(n,n.return)),a&64&&Ie&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ne;if(te(e,t),ee(t),a&512&&(Dt||n===null||He(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ja]||i[jt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Xt(i,a,n),i[jt]=t,Ut(i),a=i;break t;case"link":var s=D0("link","href",l).get(a+(n.href||""));if(s){for(var c=0;c<s.length;c++)if(i=s[c],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break e}}i=l.createElement(a),Xt(i,a,n),l.head.appendChild(i);break;case"meta":if(s=D0("meta","content",l).get(a+(n.content||""))){for(c=0;c<s.length;c++)if(i=s[c],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(c,1);break e}}i=l.createElement(a),Xt(i,a,n),l.head.appendChild(i);break;default:throw Error(u(468,a))}i[jt]=t,Ut(i),a=i}t.stateNode=a}else H0(l,t.type,t.stateNode);else t.stateNode=k0(l,a,t.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?H0(l,t.type,t.stateNode):k0(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&jr(t,t.memoizedProps,n.memoizedProps)}break;case 27:te(e,t),ee(t),a&512&&(Dt||n===null||He(n,n.return)),n!==null&&a&4&&jr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(te(e,t),ee(t),a&512&&(Dt||n===null||He(n,n.return)),t.flags&32){l=t.stateNode;try{na(l,"")}catch(q){mt(t,t.return,q)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,jr(t,l,n!==null?n.memoizedProps:l)),a&1024&&(Zr=!0);break;case 6:if(te(e,t),ee(t),a&4){if(t.stateNode===null)throw Error(u(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(q){mt(t,t.return,q)}}break;case 3:if(Zi=null,l=Ne,Ne=Yi(e.containerInfo),te(e,t),Ne=l,ee(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(q){mt(t,t.return,q)}Zr&&(Zr=!1,Ho(t));break;case 4:a=Ne,Ne=Yi(t.stateNode.containerInfo),te(e,t),ee(t),Ne=a;break;case 12:te(e,t),ee(t);break;case 31:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ni(t,a)));break;case 13:te(e,t),ee(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ci=le()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ni(t,a)));break;case 22:l=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,A=Ie,z=Dt;if(Ie=A||l,Dt=z||p,te(e,t),Dt=z,Ie=A,ee(t),a&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||p||Ie||Dt||Kn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(i=p.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=p.stateNode;var W=p.memoizedProps.style,S=W!=null&&W.hasOwnProperty("display")?W.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(q){mt(p,p.return,q)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(q){mt(p,p.return,q)}}}else if(e.tag===18){if(n===null){p=e;try{var T=p.stateNode;l?R0(T,!0):R0(p.stateNode,!1)}catch(q){mt(p,p.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ni(t,n))));break;case 19:te(e,t),ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ni(t,a)));break;case 30:break;case 21:break;default:te(e,t),ee(t)}}function ee(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(zo(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,i=Yr(t);Ri(t,i,l);break;case 5:var s=n.stateNode;n.flags&32&&(na(s,""),n.flags&=-33);var c=Yr(t);Ri(t,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,A=Yr(t);Gr(t,A,p);break;default:throw Error(u(161))}}catch(z){mt(t,t.return,z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ho(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ho(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Pe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bo(t,e.alternate,e),e=e.sibling}function Kn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:xn(4,e,e.return),Kn(e);break;case 1:He(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ro(e,e.return,n),Kn(e);break;case 27:Sl(e.stateNode);case 26:case 5:He(e,e.return),Kn(e);break;case 22:e.memoizedState===null&&Kn(e);break;case 30:Kn(e);break;default:Kn(e)}t=t.sibling}}function tn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:tn(l,i,n),pl(4,i);break;case 1:if(tn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){mt(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)md(p[l],c)}catch(A){mt(a,a.return,A)}}n&&s&64&&wo(i),ml(i,i.return);break;case 27:Co(i);case 26:case 5:tn(l,i,n),n&&a===null&&s&4&&No(i),ml(i,i.return);break;case 12:tn(l,i,n);break;case 31:tn(l,i,n),n&&s&4&&Oo(l,i);break;case 13:tn(l,i,n),n&&s&4&&ko(l,i);break;case 22:i.memoizedState===null&&tn(l,i,n),ml(i,i.return);break;case 30:break;default:tn(l,i,n)}e=e.sibling}}function Xr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&tl(n))}function Vr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t))}function ze(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uo(t,e,n,a),e=e.sibling}function Uo(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,n,a),l&2048&&pl(9,e);break;case 1:ze(t,e,n,a);break;case 3:ze(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t)));break;case 12:if(l&2048){ze(t,e,n,a),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,c=i.onPostCommit;typeof c=="function"&&c(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){mt(e,e.return,p)}}else ze(t,e,n,a);break;case 31:ze(t,e,n,a);break;case 13:ze(t,e,n,a);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,n,a):hl(t,e):i._visibility&2?ze(t,e,n,a):(i._visibility|=2,Aa(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),l&2048&&Xr(s,e);break;case 24:ze(t,e,n,a),l&2048&&Vr(e.alternate,e);break;default:ze(t,e,n,a)}}function Aa(t,e,n,a,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,s=e,c=n,p=a,A=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(i,s,c,p,l),pl(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?Aa(i,s,c,p,l):hl(i,s):(z._visibility|=2,Aa(i,s,c,p,l)),l&&A&2048&&Xr(s.alternate,s);break;case 24:Aa(i,s,c,p,l),l&&A&2048&&Vr(s.alternate,s);break;default:Aa(i,s,c,p,l)}e=e.sibling}}function hl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:hl(n,a),l&2048&&Xr(a.alternate,a);break;case 24:hl(n,a),l&2048&&Vr(a.alternate,a);break;default:hl(n,a)}e=e.sibling}}var yl=8192;function Sa(t,e,n){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)qo(t,e,n),t=t.sibling}function qo(t,e,n){switch(t.tag){case 26:Sa(t,e,n),t.flags&yl&&t.memoizedState!==null&&$1(n,Ne,t.memoizedState,t.memoizedProps);break;case 5:Sa(t,e,n);break;case 3:case 4:var a=Ne;Ne=Yi(t.stateNode.containerInfo),Sa(t,e,n),Ne=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=yl,yl=16777216,Sa(t,e,n),yl=a):Sa(t,e,n));break;default:Sa(t,e,n)}}function jo(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];qt=a,Go(a,t)}jo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yo(t),t=t.sibling}function Yo(t){switch(t.tag){case 0:case 11:case 15:vl(t),t.flags&2048&&xn(9,t,t.return);break;case 3:vl(t);break;case 12:vl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zi(t)):vl(t);break;default:vl(t)}}function zi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];qt=a,Go(a,t)}jo(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:xn(8,e,e.return),zi(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,zi(e));break;default:zi(e)}t=t.sibling}}function Go(t,e){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:xn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:tl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,qt=a;else t:for(n=t;qt!==null;){a=qt;var l=a.sibling,i=a.return;if(Wo(a),a===n){qt=null;break t}if(l!==null){l.return=i,qt=l;break t}qt=i}}}var o1={getCacheForType:function(t){var e=Gt(Lt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Gt(Lt).controller.signal}},f1=typeof WeakMap=="function"?WeakMap:Map,dt=0,_t=null,at=null,it=0,pt=0,oe=null,gn=!1,Ea=!1,Qr=!1,en=0,Nt=0,bn=0,Jn=0,Kr=0,fe=0,Ta=0,xl=null,ne=null,Jr=!1,Ci=0,Zo=0,Mi=1/0,Bi=null,_n=null,Ht=0,An=null,wa=null,nn=0,$r=0,Ir=null,Xo=null,gl=0,Fr=null;function pe(){return(dt&2)!==0&&it!==0?it&-it:C.T!==null?lu():sc()}function Vo(){if(fe===0)if((it&536870912)===0||rt){var t=ql;ql<<=1,(ql&3932160)===0&&(ql=262144),fe=t}else fe=536870912;return t=ce.current,t!==null&&(t.flags|=32),fe}function ae(t,e,n){(t===_t&&(pt===2||pt===9)||t.cancelPendingCommit!==null)&&(Ra(t,0),Sn(t,it,fe,!1)),qa(t,n),((dt&2)===0||t!==_t)&&(t===_t&&((dt&2)===0&&(Jn|=n),Nt===4&&Sn(t,it,fe,!1)),Ue(t))}function Qo(t,e,n){if((dt&6)!==0)throw Error(u(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ua(t,e),l=a?h1(t,e):tu(t,e,!0),i=a;do{if(l===0){Ea&&!a&&Sn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!p1(n)){l=tu(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var c=t;l=xl;var p=c.current.memoizedState.isDehydrated;if(p&&(Ra(c,s).flags|=256),s=tu(c,s,!1),s!==2){if(Qr&&!p){c.errorRecoveryDisabledLanes|=i,Jn|=i,l=4;break t}i=ne,ne=l,i!==null&&(ne===null?ne=i:ne.push.apply(ne,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Ra(t,0),Sn(t,e,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:Sn(a,e,fe,!gn);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(l=Ci+300-le(),10<l)){if(Sn(a,e,fe,!gn),Yl(a,0,!0)!==0)break t;nn=e,a.timeoutHandle=E0(Ko.bind(null,a,n,ne,Bi,Jr,e,fe,Jn,Ta,gn,i,"Throttled",-0,0),l);break t}Ko(a,n,ne,Bi,Jr,e,fe,Jn,Ta,gn,i,null,-0,0)}}break}while(!0);Ue(t)}function Ko(t,e,n,a,l,i,s,c,p,A,z,W,S,T){if(t.timeoutHandle=-1,W=e.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:je},qo(e,i,W);var q=(i&62914560)===i?Ci-le():(i&4194048)===i?Zo-le():0;if(q=I1(W,q),q!==null){nn=i,t.cancelPendingCommit=q(n0.bind(null,t,e,i,n,a,l,s,c,p,z,W,null,S,T)),Sn(t,i,s,!A);return}}n0(t,e,i,n,a,l,s,c,p)}function p1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!re(i(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e,n,a){e&=~Kr,e&=~Jn,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var i=31-se(l),s=1<<i;a[i]=-1,l&=~s}n!==0&&ac(t,n,e)}function Wi(){return(dt&6)===0?(bl(0),!1):!0}function Pr(){if(at!==null){if(pt===0)var t=at.return;else t=at,Xe=qn=null,hr(t),va=null,nl=0,t=at;for(;t!==null;)To(t.alternate,t),t=t.return;at=null}}function Ra(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,W1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),nn=0,Pr(),_t=t,at=n=Ge(t.current,null),it=e,pt=0,oe=null,gn=!1,Ea=Ua(t,e),Qr=!1,Ta=fe=Kr=Jn=bn=Nt=0,ne=xl=null,Jr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-se(a),i=1<<l;e|=t[l],a&=~i}return en=e,ti(),n}function Jo(t,e){tt=null,C.H=dl,e===ya||e===ui?(e=dd(),pt=3):e===ar?(e=dd(),pt=4):pt=e===Mr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,oe=e,at===null&&(Nt=1,Ai(t,be(e,t.current)))}function $o(){var t=ce.current;return t===null?!0:(it&4194048)===it?Ee===null:(it&62914560)===it||(it&536870912)!==0?t===Ee:!1}function Io(){var t=C.H;return C.H=dl,t===null?dl:t}function Fo(){var t=C.A;return C.A=o1,t}function Li(){Nt=4,gn||(it&4194048)!==it&&ce.current!==null||(Ea=!0),(bn&134217727)===0&&(Jn&134217727)===0||_t===null||Sn(_t,it,fe,!1)}function tu(t,e,n){var a=dt;dt|=2;var l=Io(),i=Fo();(_t!==t||it!==e)&&(Bi=null,Ra(t,e)),e=!1;var s=Nt;t:do try{if(pt!==0&&at!==null){var c=at,p=oe;switch(pt){case 8:Pr(),s=6;break t;case 3:case 2:case 9:case 6:ce.current===null&&(e=!0);var A=pt;if(pt=0,oe=null,Na(t,c,p,A),n&&Ea){s=0;break t}break;default:A=pt,pt=0,oe=null,Na(t,c,p,A)}}m1(),s=Nt;break}catch(z){Jo(t,z)}while(!0);return e&&t.shellSuspendCounter++,Xe=qn=null,dt=a,C.H=l,C.A=i,at===null&&(_t=null,it=0,ti()),s}function m1(){for(;at!==null;)Po(at)}function h1(t,e){var n=dt;dt|=2;var a=Io(),l=Fo();_t!==t||it!==e?(Bi=null,Mi=le()+500,Ra(t,e)):Ea=Ua(t,e);t:do try{if(pt!==0&&at!==null){e=at;var i=oe;e:switch(pt){case 1:pt=0,oe=null,Na(t,e,i,1);break;case 2:case 9:if(ud(i)){pt=0,oe=null,t0(e);break}e=function(){pt!==2&&pt!==9||_t!==t||(pt=7),Ue(t)},i.then(e,e);break t;case 3:pt=7;break t;case 4:pt=5;break t;case 7:ud(i)?(pt=0,oe=null,t0(e)):(pt=0,oe=null,Na(t,e,i,7));break;case 5:var s=null;switch(at.tag){case 26:s=at.memoizedState;case 5:case 27:var c=at;if(s?U0(s):c.stateNode.complete){pt=0,oe=null;var p=c.sibling;if(p!==null)at=p;else{var A=c.return;A!==null?(at=A,Oi(A)):at=null}break e}}pt=0,oe=null,Na(t,e,i,5);break;case 6:pt=0,oe=null,Na(t,e,i,6);break;case 8:Pr(),Nt=6;break t;default:throw Error(u(462))}}y1();break}catch(z){Jo(t,z)}while(!0);return Xe=qn=null,C.H=a,C.A=l,dt=n,at!==null?0:(_t=null,it=0,ti(),Nt)}function y1(){for(;at!==null&&!Uf();)Po(at)}function Po(t){var e=So(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?Oi(t):at=e}function t0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=vo(n,e,e.pendingProps,e.type,void 0,it);break;case 11:e=vo(n,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:hr(e);default:To(n,e),e=at=Ic(e,en),e=So(n,e,en)}t.memoizedProps=t.pendingProps,e===null?Oi(t):at=e}function Na(t,e,n,a){Xe=qn=null,hr(e),va=null,nl=0;var l=e.return;try{if(l1(t,l,e,n,it)){Nt=1,Ai(t,be(n,t.current)),at=null;return}}catch(i){if(l!==null)throw at=l,i;Nt=1,Ai(t,be(n,t.current)),at=null;return}e.flags&32768?(rt||a===1?t=!0:Ea||(it&536870912)!==0?t=!1:(gn=t=!0,(a===2||a===9||a===3||a===6)&&(a=ce.current,a!==null&&a.tag===13&&(a.flags|=16384))),e0(e,t)):Oi(e)}function Oi(t){var e=t;do{if((e.flags&32768)!==0){e0(e,gn);return}t=e.return;var n=r1(e.alternate,e,en);if(n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);Nt===0&&(Nt=5)}function e0(t,e){do{var n=u1(t.alternate,t);if(n!==null){n.flags&=32767,at=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){at=t;return}at=t=n}while(t!==null);Nt=6,at=null}function n0(t,e,n,a,l,i,s,c,p){t.cancelPendingCommit=null;do ki();while(Ht!==0);if((dt&6)!==0)throw Error(u(327));if(e!==null){if(e===t.current)throw Error(u(177));if(i=e.lanes|e.childLanes,i|=Ys,Jf(t,n,i,s,c,p),t===_t&&(at=_t=null,it=0),wa=e,An=t,nn=n,$r=i,Ir=l,Xo=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,b1(Hl,function(){return r0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,l=k.p,k.p=2,s=dt,dt|=4;try{c1(t,e,n)}finally{dt=s,k.p=l,C.T=a}}Ht=1,a0(),l0(),i0()}}function a0(){if(Ht===1){Ht=0;var t=An,e=wa,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=k.p;k.p=2;var l=dt;dt|=4;try{Do(e,t);var i=fu,s=Yc(t.containerInfo),c=i.focusedElem,p=i.selectionRange;if(s!==c&&c&&c.ownerDocument&&jc(c.ownerDocument.documentElement,c)){if(p!==null&&Ds(c)){var A=p.start,z=p.end;if(z===void 0&&(z=A),"selectionStart"in c)c.selectionStart=A,c.selectionEnd=Math.min(z,c.value.length);else{var W=c.ownerDocument||document,S=W&&W.defaultView||window;if(S.getSelection){var T=S.getSelection(),q=c.textContent.length,Q=Math.min(p.start,q),gt=p.end===void 0?Q:Math.min(p.end,q);!T.extend&&Q>gt&&(s=gt,gt=Q,Q=s);var x=qc(c,Q),h=qc(c,gt);if(x&&h&&(T.rangeCount!==1||T.anchorNode!==x.node||T.anchorOffset!==x.offset||T.focusNode!==h.node||T.focusOffset!==h.offset)){var _=W.createRange();_.setStart(x.node,x.offset),T.removeAllRanges(),Q>gt?(T.addRange(_),T.extend(h.node,h.offset)):(_.setEnd(h.node,h.offset),T.addRange(_))}}}}for(W=[],T=c;T=T.parentNode;)T.nodeType===1&&W.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<W.length;c++){var M=W[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Ki=!!ou,fu=ou=null}finally{dt=l,k.p=a,C.T=n}}t.current=e,Ht=2}}function l0(){if(Ht===2){Ht=0;var t=An,e=wa,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=k.p;k.p=2;var l=dt;dt|=4;try{Bo(t,e.alternate,e)}finally{dt=l,k.p=a,C.T=n}}Ht=3}}function i0(){if(Ht===4||Ht===3){Ht=0,qf();var t=An,e=wa,n=nn,a=Xo;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ht=5:(Ht=0,wa=An=null,s0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(_n=null),xs(n),e=e.stateNode,ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,l=k.p,k.p=2,C.T=null;try{for(var i=t.onRecoverableError,s=0;s<a.length;s++){var c=a[s];i(c.value,{componentStack:c.stack})}}finally{C.T=e,k.p=l}}(nn&3)!==0&&ki(),Ue(t),l=t.pendingLanes,(n&261930)!==0&&(l&42)!==0?t===Fr?gl++:(gl=0,Fr=t):gl=0,bl(0)}}function s0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,tl(e)))}function ki(){return a0(),l0(),i0(),r0()}function r0(){if(Ht!==5)return!1;var t=An,e=$r;$r=0;var n=xs(nn),a=C.T,l=k.p;try{k.p=32>n?32:n,C.T=null,n=Ir,Ir=null;var i=An,s=nn;if(Ht=0,wa=An=null,nn=0,(dt&6)!==0)throw Error(u(331));var c=dt;if(dt|=4,Yo(i.current),Uo(i,i.current,s,n),dt=c,bl(0,!1),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(Ha,i)}catch{}return!0}finally{k.p=l,C.T=a,s0(t,e)}}function u0(t,e,n){e=be(n,e),e=Cr(t.stateNode,e,2),t=hn(t,e,2),t!==null&&(qa(t,2),Ue(t))}function mt(t,e,n){if(t.tag===3)u0(t,t,n);else for(;e!==null;){if(e.tag===3){u0(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){t=be(n,t),n=uo(2),a=hn(e,n,2),a!==null&&(co(n,a,e,t),qa(a,2),Ue(a));break}}e=e.return}}function eu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new f1;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Qr=!0,l.add(n),t=v1.bind(null,t,e,n),e.then(t,t))}function v1(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,_t===t&&(it&n)===n&&(Nt===4||Nt===3&&(it&62914560)===it&&300>le()-Ci?(dt&2)===0&&Ra(t,0):Kr|=n,Ta===it&&(Ta=0)),Ue(t)}function c0(t,e){e===0&&(e=nc()),t=Dn(t,e),t!==null&&(qa(t,e),Ue(t))}function x1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function g1(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(e),c0(t,n)}function b1(t,e){return ms(t,e)}var Di=null,za=null,nu=!1,Hi=!1,au=!1,En=0;function Ue(t){t!==za&&t.next===null&&(za===null?Di=za=t:za=za.next=t),Hi=!0,nu||(nu=!0,A1())}function bl(t,e){if(!au&&Hi){au=!0;do for(var n=!1,a=Di;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var s=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-se(42|t)+1)-1,i&=l&~(s&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,p0(a,i))}else i=it,i=Yl(a,a===_t?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ua(a,i)||(n=!0,p0(a,i));a=a.next}while(n);au=!1}}function _1(){d0()}function d0(){Hi=nu=!1;var t=0;En!==0&&B1()&&(t=En);for(var e=le(),n=null,a=Di;a!==null;){var l=a.next,i=o0(a,e);i===0?(a.next=null,n===null?Di=l:n.next=l,l===null&&(za=n)):(n=a,(t!==0||(i&3)!==0)&&(Hi=!0)),a=l}Ht!==0&&Ht!==5||bl(t),En!==0&&(En=0)}function o0(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-se(i),c=1<<s,p=l[s];p===-1?((c&n)===0||(c&a)!==0)&&(l[s]=Kf(c,e)):p<=e&&(t.expiredLanes|=c),i&=~c}if(e=_t,n=it,n=Yl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(pt===2||pt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&hs(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ua(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&hs(a),xs(n)){case 2:case 8:n=tc;break;case 32:n=Hl;break;case 268435456:n=ec;break;default:n=Hl}return a=f0.bind(null,t),n=ms(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&hs(a),t.callbackPriority=2,t.callbackNode=null,2}function f0(t,e){if(Ht!==0&&Ht!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var a=it;return a=Yl(t,t===_t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Qo(t,a,e),o0(t,le()),t.callbackNode!=null&&t.callbackNode===n?f0.bind(null,t):null)}function p0(t,e){if(ki())return null;Qo(t,e,!0)}function A1(){L1(function(){(dt&6)!==0?ms(Pu,_1):d0()})}function lu(){if(En===0){var t=ma;t===0&&(t=Ul,Ul<<=1,(Ul&261888)===0&&(Ul=256)),En=t}return En}function m0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(""+t)}function h0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function S1(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var i=m0((l[It]||null).action),s=a.submitter;s&&(e=(e=s[It]||null)?m0(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var c=new $l("action","action",null,a,l);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(En!==0){var p=s?h0(l,s):new FormData(l);Er(n,{pending:!0,data:p,method:l.method,action:i},null,p)}}else typeof i=="function"&&(c.preventDefault(),p=s?h0(l,s):new FormData(l),Er(n,{pending:!0,data:p,method:l.method,action:i},i,p))},currentTarget:l}]})}}for(var iu=0;iu<js.length;iu++){var su=js[iu],E1=su.toLowerCase(),T1=su[0].toUpperCase()+su.slice(1);Re(E1,"on"+T1)}Re(Xc,"onAnimationEnd"),Re(Vc,"onAnimationIteration"),Re(Qc,"onAnimationStart"),Re("dblclick","onDoubleClick"),Re("focusin","onFocus"),Re("focusout","onBlur"),Re(jp,"onTransitionRun"),Re(Yp,"onTransitionStart"),Re(Gp,"onTransitionCancel"),Re(Kc,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],p=c.instance,A=c.currentTarget;if(c=c.listener,p!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=A;try{i(l)}catch(z){Pl(z)}l.currentTarget=null,i=p}else for(s=0;s<a.length;s++){if(c=a[s],p=c.instance,A=c.currentTarget,c=c.listener,p!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=A;try{i(l)}catch(z){Pl(z)}l.currentTarget=null,i=p}}}}function lt(t,e){var n=e[gs];n===void 0&&(n=e[gs]=new Set);var a=t+"__bubble";n.has(a)||(v0(e,t,2,!1),n.add(a))}function ru(t,e,n){var a=0;e&&(a|=4),v0(n,t,a,e)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function uu(t){if(!t[Ui]){t[Ui]=!0,cc.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||ru(n,!1,t),ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ui]||(e[Ui]=!0,ru("selectionchange",!1,e))}}function v0(t,e,n,a){switch(V0(e)){case 2:var l=tm;break;case 8:l=em;break;default:l=Su}n=l.bind(null,e,n,t),l=void 0,!Ns||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function cu(t,e,n,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===l)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;c!==null;){if(s=In(c),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=i=s;continue t}c=c.parentNode}}a=a.return}_c(function(){var A=i,z=ws(n),W=[];t:{var S=Jc.get(t);if(S!==void 0){var T=$l,q=t;switch(t){case"keypress":if(Kl(n)===0)break t;case"keydown":case"keyup":T=gp;break;case"focusin":q="focus",T=Bs;break;case"focusout":q="blur",T=Bs;break;case"beforeblur":case"afterblur":T=Bs;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Ap;break;case Xc:case Vc:case Qc:T=dp;break;case Kc:T=Ep;break;case"scroll":case"scrollend":T=ip;break;case"wheel":T=wp;break;case"copy":case"cut":case"paste":T=fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=wc;break;case"toggle":case"beforetoggle":T=Np}var Q=(e&4)!==0,gt=!Q&&(t==="scroll"||t==="scrollend"),x=Q?S!==null?S+"Capture":null:S;Q=[];for(var h=A,_;h!==null;){var M=h;if(_=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||_===null||x===null||(M=Ga(h,x),M!=null&&Q.push(Al(h,M,_))),gt)break;h=h.return}0<Q.length&&(S=new T(S,q,null,n,z),W.push({event:S,listeners:Q}))}}if((e&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",S&&n!==Ts&&(q=n.relatedTarget||n.fromElement)&&(In(q)||q[$n]))break t;if((T||S)&&(S=z.window===z?z:(S=z.ownerDocument)?S.defaultView||S.parentWindow:window,T?(q=n.relatedTarget||n.toElement,T=A,q=q?In(q):null,q!==null&&(gt=m(q),Q=q.tag,q!==gt||Q!==5&&Q!==27&&Q!==6)&&(q=null)):(T=null,q=A),T!==q)){if(Q=Ec,M="onMouseLeave",x="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(Q=wc,M="onPointerLeave",x="onPointerEnter",h="pointer"),gt=T==null?S:Ya(T),_=q==null?S:Ya(q),S=new Q(M,h+"leave",T,n,z),S.target=gt,S.relatedTarget=_,M=null,In(z)===A&&(Q=new Q(x,h+"enter",q,n,z),Q.target=_,Q.relatedTarget=gt,M=Q),gt=M,T&&q)e:{for(Q=R1,x=T,h=q,_=0,M=x;M;M=Q(M))_++;M=0;for(var V=h;V;V=Q(V))M++;for(;0<_-M;)x=Q(x),_--;for(;0<M-_;)h=Q(h),M--;for(;_--;){if(x===h||h!==null&&x===h.alternate){Q=x;break e}x=Q(x),h=Q(h)}Q=null}else Q=null;T!==null&&x0(W,S,T,Q,!1),q!==null&&gt!==null&&x0(W,gt,q,Q,!0)}}t:{if(S=A?Ya(A):window,T=S.nodeName&&S.nodeName.toLowerCase(),T==="select"||T==="input"&&S.type==="file")var ut=Lc;else if(Bc(S))if(Oc)ut=Hp;else{ut=kp;var G=Op}else T=S.nodeName,!T||T.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?A&&Es(A.elementType)&&(ut=Lc):ut=Dp;if(ut&&(ut=ut(t,A))){Wc(W,ut,n,z);break t}G&&G(t,S,A),t==="focusout"&&A&&S.type==="number"&&A.memoizedProps.value!=null&&Ss(S,"number",S.value)}switch(G=A?Ya(A):window,t){case"focusin":(Bc(G)||G.contentEditable==="true")&&(sa=G,Hs=A,Ia=null);break;case"focusout":Ia=Hs=sa=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Gc(W,n,z);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":Gc(W,n,z)}var et;if(Ls)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else ia?Cc(t,n)&&(st="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(st="onCompositionStart");st&&(Rc&&n.locale!=="ko"&&(ia||st!=="onCompositionStart"?st==="onCompositionEnd"&&ia&&(et=Ac()):(un=z,zs="value"in un?un.value:un.textContent,ia=!0)),G=qi(A,st),0<G.length&&(st=new Tc(st,t,null,n,z),W.push({event:st,listeners:G}),et?st.data=et:(et=Mc(n),et!==null&&(st.data=et)))),(et=Cp?Mp(t,n):Bp(t,n))&&(st=qi(A,"onBeforeInput"),0<st.length&&(G=new Tc("onBeforeInput","beforeinput",null,n,z),W.push({event:G,listeners:st}),G.data=et)),S1(W,t,A,n,z)}y0(W,e)})}function Al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qi(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ga(t,n),l!=null&&a.unshift(Al(t,l,i)),l=Ga(t,e),l!=null&&a.push(Al(t,l,i))),t.tag===3)return a;t=t.return}return[]}function R1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x0(t,e,n,a,l){for(var i=e._reactName,s=[];n!==null&&n!==a;){var c=n,p=c.alternate,A=c.stateNode;if(c=c.tag,p!==null&&p===a)break;c!==5&&c!==26&&c!==27||A===null||(p=A,l?(A=Ga(n,i),A!=null&&s.unshift(Al(n,A,p))):l||(A=Ga(n,i),A!=null&&s.push(Al(n,A,p)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var N1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function g0(t){return(typeof t=="string"?t:""+t).replace(N1,`
`).replace(z1,"")}function b0(t,e){return e=g0(e),g0(t)===e}function xt(t,e,n,a,l,i){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||na(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&na(t,""+a);break;case"className":Zl(t,"class",a);break;case"tabIndex":Zl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(t,n,a);break;case"style":gc(t,a,i);break;case"data":if(e!=="object"){Zl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Vl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&xt(t,e,"name",l.name,l,null),xt(t,e,"formEncType",l.formEncType,l,null),xt(t,e,"formMethod",l.formMethod,l,null),xt(t,e,"formTarget",l.formTarget,l,null)):(xt(t,e,"encType",l.encType,l,null),xt(t,e,"method",l.method,l,null),xt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Vl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=je);break;case"onScroll":a!=null&&lt("scroll",t);break;case"onScrollEnd":a!=null&&lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Vl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":lt("beforetoggle",t),lt("toggle",t),Gl(t,"popover",a);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ap.get(n)||n,Gl(t,n,a))}}function du(t,e,n,a,l,i){switch(n){case"style":gc(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"children":typeof a=="string"?na(t,a):(typeof a=="number"||typeof a=="bigint")&&na(t,""+a);break;case"onScroll":a!=null&&lt("scroll",t);break;case"onScrollEnd":a!=null&&lt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=je);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),i=t[It]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Gl(t,n,a)}}}function Xt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",t),lt("load",t);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:xt(t,e,i,s,n,null)}}l&&xt(t,e,"srcSet",n.srcSet,n,null),a&&xt(t,e,"src",n.src,n,null);return;case"input":lt("invalid",t);var c=i=s=l=null,p=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var z=n[a];if(z!=null)switch(a){case"name":l=z;break;case"type":s=z;break;case"checked":p=z;break;case"defaultChecked":A=z;break;case"value":i=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,e));break;default:xt(t,e,a,z,n,null)}}hc(t,i,c,p,A,s,l,!1);return;case"select":lt("invalid",t),a=s=i=null;for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:xt(t,e,l,c,n,null)}e=i,n=s,t.multiple=!!a,e!=null?ea(t,!!a,e,!1):n!=null&&ea(t,!!a,n,!0);return;case"textarea":lt("invalid",t),i=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:xt(t,e,s,c,n,null)}vc(t,a,l,i);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xt(t,e,p,a,n,null)}return;case"dialog":lt("beforetoggle",t),lt("toggle",t),lt("cancel",t),lt("close",t);break;case"iframe":case"object":lt("load",t);break;case"video":case"audio":for(a=0;a<_l.length;a++)lt(_l[a],t);break;case"image":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"embed":case"source":case"link":lt("error",t),lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:xt(t,e,A,a,n,null)}return;default:if(Es(e)){for(z in n)n.hasOwnProperty(z)&&(a=n[z],a!==void 0&&du(t,e,z,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&xt(t,e,c,a,n,null))}function C1(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,c=null,p=null,A=null,z=null;for(T in n){var W=n[T];if(n.hasOwnProperty(T)&&W!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":p=W;default:a.hasOwnProperty(T)||xt(t,e,T,null,a,W)}}for(var S in a){var T=a[S];if(W=n[S],a.hasOwnProperty(S)&&(T!=null||W!=null))switch(S){case"type":i=T;break;case"name":l=T;break;case"checked":A=T;break;case"defaultChecked":z=T;break;case"value":s=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,e));break;default:T!==W&&xt(t,e,S,T,a,W)}}As(t,s,c,p,A,z,i,l);return;case"select":T=s=c=S=null;for(i in n)if(p=n[i],n.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":T=p;default:a.hasOwnProperty(i)||xt(t,e,i,null,a,p)}for(l in a)if(i=a[l],p=n[l],a.hasOwnProperty(l)&&(i!=null||p!=null))switch(l){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":s=i;default:i!==p&&xt(t,e,l,i,a,p)}e=c,n=s,a=T,S!=null?ea(t,!!n,S,!1):!!a!=!!n&&(e!=null?ea(t,!!n,e,!0):ea(t,!!n,n?[]:"",!1));return;case"textarea":T=S=null;for(c in n)if(l=n[c],n.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:xt(t,e,c,null,a,l)}for(s in a)if(l=a[s],i=n[s],a.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":S=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&xt(t,e,s,l,a,i)}yc(t,S,T);return;case"option":for(var q in n)if(S=n[q],n.hasOwnProperty(q)&&S!=null&&!a.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:xt(t,e,q,null,a,S)}for(p in a)if(S=a[p],T=n[p],a.hasOwnProperty(p)&&S!==T&&(S!=null||T!=null))switch(p){case"selected":t.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:xt(t,e,p,S,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in n)S=n[Q],n.hasOwnProperty(Q)&&S!=null&&!a.hasOwnProperty(Q)&&xt(t,e,Q,null,a,S);for(A in a)if(S=a[A],T=n[A],a.hasOwnProperty(A)&&S!==T&&(S!=null||T!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,e));break;default:xt(t,e,A,S,a,T)}return;default:if(Es(e)){for(var gt in n)S=n[gt],n.hasOwnProperty(gt)&&S!==void 0&&!a.hasOwnProperty(gt)&&du(t,e,gt,void 0,a,S);for(z in a)S=a[z],T=n[z],!a.hasOwnProperty(z)||S===T||S===void 0&&T===void 0||du(t,e,z,S,a,T);return}}for(var x in n)S=n[x],n.hasOwnProperty(x)&&S!=null&&!a.hasOwnProperty(x)&&xt(t,e,x,null,a,S);for(W in a)S=a[W],T=n[W],!a.hasOwnProperty(W)||S===T||S==null&&T==null||xt(t,e,W,S,a,T)}function _0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,s=l.initiatorType,c=l.duration;if(i&&c&&_0(s)){for(s=0,c=l.responseEnd,a+=1;a<n.length;a++){var p=n[a],A=p.startTime;if(A>c)break;var z=p.transferSize,W=p.initiatorType;z&&_0(W)&&(p=p.responseEnd,s+=z*(p<c?1:(c-A)/(p-A)))}if(--a,e+=8*(i+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ou=null,fu=null;function ji(t){return t.nodeType===9?t:t.ownerDocument}function A0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=null;function B1(){var t=window.event;return t&&t.type==="popstate"?t===mu?!1:(mu=t,!0):(mu=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(t){return T0.resolve(null).then(t).catch(O1)}:E0;function O1(t){setTimeout(function(){throw t})}function Tn(t){return t==="head"}function w0(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(l),Wa(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Sl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Sl(n);for(var i=n.firstChild;i;){var s=i.nextSibling,c=i.nodeName;i[ja]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&Sl(t.ownerDocument.body);n=l}while(n);Wa(e)}function R0(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function hu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hu(n),bs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function k1(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ja])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Te(t.nextSibling),t===null)break}return null}function D1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Te(t.nextSibling),t===null))return null;return t}function N0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Te(t.nextSibling),t===null))return null;return t}function yu(t){return t.data==="$?"||t.data==="$~"}function vu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function H1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Te(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var xu=null;function z0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Te(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function C0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function M0(t,e,n){switch(e=ji(n),t){case"html":if(t=e.documentElement,!t)throw Error(u(452));return t;case"head":if(t=e.head,!t)throw Error(u(453));return t;case"body":if(t=e.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Sl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);bs(t)}var we=new Map,B0=new Set;function Yi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var an=k.d;k.d={f:U1,r:q1,D:j1,C:Y1,L:G1,m:Z1,X:V1,S:X1,M:Q1};function U1(){var t=an.f(),e=Wi();return t||e}function q1(t){var e=Fn(t);e!==null&&e.tag===5&&e.type==="form"?Kd(e):an.r(t)}var Ca=typeof document>"u"?null:document;function W0(t,e,n){var a=Ca;if(a&&typeof e=="string"&&e){var l=xe(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),B0.has(l)||(B0.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Xt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function j1(t){an.D(t),W0("dns-prefetch",t,null)}function Y1(t,e){an.C(t,e),W0("preconnect",t,e)}function G1(t,e,n){an.L(t,e,n);var a=Ca;if(a&&t&&e){var l='link[rel="preload"][as="'+xe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+xe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+xe(n.imageSizes)+'"]')):l+='[href="'+xe(t)+'"]';var i=l;switch(e){case"style":i=Ma(t);break;case"script":i=Ba(t)}we.has(i)||(t=w({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),we.set(i,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(El(i))||e==="script"&&a.querySelector(Tl(i))||(e=a.createElement("link"),Xt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function Z1(t,e){an.m(t,e);var n=Ca;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+xe(a)+'"][href="'+xe(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ba(t)}if(!we.has(i)&&(t=w({rel:"modulepreload",href:t},e),we.set(i,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Tl(i)))return}a=n.createElement("link"),Xt(a,"link",t),Ut(a),n.head.appendChild(a)}}}function X1(t,e,n){an.S(t,e,n);var a=Ca;if(a&&t){var l=Pn(a).hoistableStyles,i=Ma(t);e=e||"default";var s=l.get(i);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(El(i)))c.loading=5;else{t=w({rel:"stylesheet",href:t,"data-precedence":e},n),(n=we.get(i))&&gu(t,n);var p=s=a.createElement("link");Ut(p),Xt(p,"link",t),p._p=new Promise(function(A,z){p.onload=A,p.onerror=z}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Gi(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},l.set(i,s)}}}function V1(t,e){an.X(t,e);var n=Ca;if(n&&t){var a=Pn(n).hoistableScripts,l=Ba(t),i=a.get(l);i||(i=n.querySelector(Tl(l)),i||(t=w({src:t,async:!0},e),(e=we.get(l))&&bu(t,e),i=n.createElement("script"),Ut(i),Xt(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Q1(t,e){an.M(t,e);var n=Ca;if(n&&t){var a=Pn(n).hoistableScripts,l=Ba(t),i=a.get(l);i||(i=n.querySelector(Tl(l)),i||(t=w({src:t,async:!0,type:"module"},e),(e=we.get(l))&&bu(t,e),i=n.createElement("script"),Ut(i),Xt(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function L0(t,e,n,a){var l=(l=nt.current)?Yi(l):null;if(!l)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ma(n.href),n=Pn(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ma(n.href);var i=Pn(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(El(t)))&&!i._p&&(s.instance=i,s.state.loading=5),we.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},we.set(t,n),i||K1(l,t,n,s.state))),e&&a===null)throw Error(u(528,""));return s}if(e&&a!==null)throw Error(u(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ba(n),n=Pn(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function Ma(t){return'href="'+xe(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function O0(t){return w({},t,{"data-precedence":t.precedence,precedence:null})}function K1(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Xt(e,"link",n),Ut(e),t.head.appendChild(e))}function Ba(t){return'[src="'+xe(t)+'"]'}function Tl(t){return"script[async]"+t}function k0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+xe(n.href)+'"]');if(a)return e.instance=a,Ut(a),a;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ut(a),Xt(a,"style",l),Gi(a,n.precedence,t),e.instance=a;case"stylesheet":l=Ma(n.href);var i=t.querySelector(El(l));if(i)return e.state.loading|=4,e.instance=i,Ut(i),i;a=O0(n),(l=we.get(l))&&gu(a,l),i=(t.ownerDocument||t).createElement("link"),Ut(i);var s=i;return s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Xt(i,"link",a),e.state.loading|=4,Gi(i,n.precedence,t),e.instance=i;case"script":return i=Ba(n.src),(l=t.querySelector(Tl(i)))?(e.instance=l,Ut(l),l):(a=n,(l=we.get(i))&&(a=w({},n),bu(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ut(l),Xt(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Gi(a,n.precedence,t));return e.instance}function Gi(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function gu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function bu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zi=null;function D0(t,e,n){if(Zi===null){var a=new Map,l=Zi=new Map;l.set(n,a)}else l=Zi,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var i=n[l];if(!(i[ja]||i[jt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var c=a.get(s);c?c.push(i):a.set(s,[i])}}return a}function H0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function J1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function U0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $1(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ma(a.href),i=e.querySelector(El(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Xi.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=i,Ut(i);return}i=e.ownerDocument||e,a=O0(a),(l=we.get(l))&&gu(a,l),i=i.createElement("link"),Ut(i);var s=i;s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Xt(i,"link",a),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Xi.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var _u=0;function I1(t,e){return t.stylesheets&&t.count===0&&Qi(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Qi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&_u===0&&(_u=62500*M1());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>_u?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vi=null;function Qi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vi=new Map,e.forEach(F1,t),Vi=null,Xi.call(t))}function F1(t,e){if(!(e.state.loading&4)){var n=Vi.get(t);if(n)var a=n.get(null);else{n=new Map,Vi.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),i=n.get(s)||a,i===a&&n.set(null,l),n.set(s,l),this.count++,a=Xi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var wl={$$typeof:K,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function P1(t,e,n,a,l,i,s,c,p){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function q0(t,e,n,a,l,i,s,c,p,A,z,W){return t=new P1(t,e,n,s,p,A,z,W,c),e=1,i===!0&&(e|=24),i=ue(3,null,null,e),t.current=i,i.stateNode=t,e=tr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:e},lr(i),t}function j0(t){return t?(t=ca,t):ca}function Y0(t,e,n,a,l,i){l=j0(l),a.context===null?a.context=l:a.pendingContext=l,a=mn(e),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=hn(t,a,e),n!==null&&(ae(n,t,e),ll(n,t,e))}function G0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Au(t,e){G0(t,e),(t=t.alternate)&&G0(t,e)}function Z0(t){if(t.tag===13||t.tag===31){var e=Dn(t,67108864);e!==null&&ae(e,t,67108864),Au(t,67108864)}}function X0(t){if(t.tag===13||t.tag===31){var e=pe();e=vs(e);var n=Dn(t,e);n!==null&&ae(n,t,e),Au(t,e)}}var Ki=!0;function tm(t,e,n,a){var l=C.T;C.T=null;var i=k.p;try{k.p=2,Su(t,e,n,a)}finally{k.p=i,C.T=l}}function em(t,e,n,a){var l=C.T;C.T=null;var i=k.p;try{k.p=8,Su(t,e,n,a)}finally{k.p=i,C.T=l}}function Su(t,e,n,a){if(Ki){var l=Eu(a);if(l===null)cu(t,e,a,Ji,n),Q0(t,a);else if(am(l,t,e,n,a))a.stopPropagation();else if(Q0(t,a),e&4&&-1<nm.indexOf(t)){for(;l!==null;){var i=Fn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Bn(i.pendingLanes);if(s!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var p=1<<31-se(s);c.entanglements[1]|=p,s&=~p}Ue(i),(dt&6)===0&&(Mi=le()+500,bl(0))}}break;case 31:case 13:c=Dn(i,2),c!==null&&ae(c,i,2),Wi(),Au(i,2)}if(i=Eu(a),i===null&&cu(t,e,a,Ji,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else cu(t,e,a,null,n)}}function Eu(t){return t=ws(t),Tu(t)}var Ji=null;function Tu(t){if(Ji=null,t=In(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===31){if(t=E(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ji=t,null}function V0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jf()){case Pu:return 2;case tc:return 8;case Hl:case Yf:return 32;case ec:return 268435456;default:return 32}default:return 32}}var wu=!1,wn=null,Rn=null,Nn=null,Rl=new Map,Nl=new Map,zn=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(e.pointerId)}}function zl(t,e,n,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Fn(e),e!==null&&Z0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function am(t,e,n,a,l){switch(e){case"focusin":return wn=zl(wn,t,e,n,a,l),!0;case"dragenter":return Rn=zl(Rn,t,e,n,a,l),!0;case"mouseover":return Nn=zl(Nn,t,e,n,a,l),!0;case"pointerover":var i=l.pointerId;return Rl.set(i,zl(Rl.get(i)||null,t,e,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Nl.set(i,zl(Nl.get(i)||null,t,e,n,a,l)),!0}return!1}function K0(t){var e=In(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,rc(t.priority,function(){X0(n)});return}}else if(e===31){if(e=E(n),e!==null){t.blockedOn=e,rc(t.priority,function(){X0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Ts=a,n.target.dispatchEvent(a),Ts=null}else return e=Fn(n),e!==null&&Z0(e),t.blockedOn=n,!1;e.shift()}return!0}function J0(t,e,n){$i(t)&&n.delete(e)}function lm(){wu=!1,wn!==null&&$i(wn)&&(wn=null),Rn!==null&&$i(Rn)&&(Rn=null),Nn!==null&&$i(Nn)&&(Nn=null),Rl.forEach(J0),Nl.forEach(J0)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,wu||(wu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,lm)))}var Fi=null;function $0(t){Fi!==t&&(Fi=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Fi===t&&(Fi=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(Tu(a||n)===null)continue;break}var i=Fn(n);i!==null&&(t.splice(e,3),e-=3,Er(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Wa(t){function e(p){return Ii(p,t)}wn!==null&&Ii(wn,t),Rn!==null&&Ii(Rn,t),Nn!==null&&Ii(Nn,t),Rl.forEach(e),Nl.forEach(e);for(var n=0;n<zn.length;n++){var a=zn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&zn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],s=l[It]||null;if(typeof i=="function")s||$0(n);else if(s){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[It]||null)c=s.formAction;else if(Tu(l)!==null)continue}else c=s.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),$0(n)}}}function I0(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Ru(t){this._internalRoot=t}Pi.prototype.render=Ru.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(u(409));var n=e.current,a=pe();Y0(n,a,t,e,null,null)},Pi.prototype.unmount=Ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Y0(t.current,2,null,t,null,null),Wi(),e[$n]=null}};function Pi(t){this._internalRoot=t}Pi.prototype.unstable_scheduleHydration=function(t){if(t){var e=sc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&K0(t)}};var F0=d.version;if(F0!=="19.2.7")throw Error(u(527,F0,"19.2.7"));k.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=y(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var im={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Ha=ts.inject(im),ie=ts}catch{}}return Ml.createRoot=function(t,e){if(!f(t))throw Error(u(299));var n=!1,a="",l=lo,i=io,s=so;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=q0(t,1,!1,null,null,n,a,null,l,i,s,I0),t[$n]=e.current,uu(t),new Ru(e)},Ml.hydrateRoot=function(t,e,n){if(!f(t))throw Error(u(299));var a=!1,l="",i=lo,s=io,c=so,p=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(p=n.formState)),e=q0(t,1,!0,e,n??null,a,l,p,i,s,c,I0),e.context=j0(null),n=e.current,a=pe(),a=vs(a),l=mn(a),l.callback=null,hn(n,l,a),n=a,e.current.lanes=n,qa(e,n),Ue(e),t[$n]=e.current,uu(t),new Pi(e)},Ml.version="19.2.7",Ml}var cf;function hm(){if(cf)return zu.exports;cf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),zu.exports=mm(),zu.exports}var ym=hm(),R=qu();/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ju=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,vf=/^[\\/]{2}/;function vm(r,d){return d+r.replace(/\\/g,"/")}var df="popstate";function of(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function xm(r={}){function d(u,f){var y;let m=(y=f.state)==null?void 0:y.masked,{pathname:g,search:E,hash:b}=m||u.location;return Du("",{pathname:g,search:E,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function o(u,f){return typeof f=="string"?f:Ll(f)}return bm(d,o,null,r)}function wt(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function Me(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function gm(){return Math.random().toString(36).substring(2,10)}function ff(r,d){return{usr:r.state,key:r.key,idx:d,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Du(r,d,o=null,u,f){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?La(d):d,state:o,key:d&&d.key||u||gm(),mask:f}}function Ll({pathname:r="/",search:d="",hash:o=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function La(r){let d={};if(r){let o=r.indexOf("#");o>=0&&(d.hash=r.substring(o),r=r.substring(0,o));let u=r.indexOf("?");u>=0&&(d.search=r.substring(u),r=r.substring(0,u)),r&&(d.pathname=r)}return d}function bm(r,d,o,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,g=f.history,E="POP",b=null,y=N();y==null&&(y=0,g.replaceState({...g.state,idx:y},""));function N(){return(g.state||{idx:null}).idx}function w(){E="POP";let j=N(),D=j==null?null:j-y;y=j,b&&b({action:E,location:U.location,delta:D})}function O(j,D){E="PUSH";let F=of(j)?j:Du(U.location,j,D);y=N()+1;let K=ff(F,y),ht=U.createHref(F.mask||F);try{g.pushState(K,"",ht)}catch(ft){if(ft instanceof DOMException&&ft.name==="DataCloneError")throw ft;f.location.assign(ht)}m&&b&&b({action:E,location:U.location,delta:1})}function Z(j,D){E="REPLACE";let F=of(j)?j:Du(U.location,j,D);y=N();let K=ff(F,y),ht=U.createHref(F.mask||F);g.replaceState(K,"",ht),m&&b&&b({action:E,location:U.location,delta:0})}function X(j){return _m(f,j)}let U={get action(){return E},get location(){return r(f,g)},listen(j){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(df,w),b=j,()=>{f.removeEventListener(df,w),b=null}},createHref(j){return d(f,j)},createURL:X,encodeLocation(j){let D=X(j);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:O,replace:Z,go(j){return g.go(j)}};return U}function _m(r,d,o=!1){let u="http://localhost";r&&(u=r.location.origin!=="null"?r.location.origin:r.location.href),wt(u,"No window.location.(origin|href) available to create URL");let f=typeof d=="string"?d:Ll(d);return f=f.replace(/ $/,"%20"),!o&&vf.test(f)&&(f=u+f),new URL(f,u)}function xf(r,d,o="/"){return Am(r,d,o,!1)}function Am(r,d,o,u,f){let m=typeof d=="string"?La(d):d,g=ln(m.pathname||"/",o);if(g==null)return null;let E=Sm(r),b=null,y=Lm(g);for(let N=0;b==null&&N<E.length;++N)b=Wm(E[N],y,u);return b}function Sm(r){let d=gf(r);return Em(d),d}function gf(r,d=[],o=[],u="",f=!1){let m=(g,E,b=f,y)=>{let N={relativePath:y===void 0?g.path||"":y,caseSensitive:g.caseSensitive===!0,childrenIndex:E,route:g};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(u)&&b)return;wt(N.relativePath.startsWith(u),`Absolute route path "${N.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(u.length)}let w=Ce([u,N.relativePath]),O=o.concat(N);g.children&&g.children.length>0&&(wt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),gf(g.children,d,O,w,b)),!(g.path==null&&!g.index)&&d.push({path:w,score:Mm(w,g.index),routesMeta:O.map((Z,X)=>{let[U,j]=Af(Z.relativePath,Z.caseSensitive,X===O.length-1);return{...Z,matcher:U,compiledParams:j}})})};return r.forEach((g,E)=>{var b;if(g.path===""||!((b=g.path)!=null&&b.includes("?")))m(g,E);else for(let y of bf(g.path))m(g,E,!0,y)}),d}function bf(r){let d=r.split("/");if(d.length===0)return[];let[o,...u]=d,f=o.endsWith("?"),m=o.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let g=bf(u.join("/")),E=[];return E.push(...g.map(b=>b===""?m:[m,b].join("/"))),f&&E.push(...g),E.map(b=>r.startsWith("/")&&b===""?"/":b)}function Em(r){r.sort((d,o)=>d.score!==o.score?o.score-d.score:Bm(d.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var Tm=/^:[\w-]+$/,wm=3,Rm=2,Nm=1,zm=10,Cm=-2,pf=r=>r==="*";function Mm(r,d){let o=r.split("/"),u=o.length;return o.some(pf)&&(u+=Cm),d&&(u+=Rm),o.filter(f=>!pf(f)).reduce((f,m)=>f+(Tm.test(m)?wm:m===""?Nm:zm),u)}function Bm(r,d){return r.length===d.length&&r.slice(0,-1).every((u,f)=>u===d[f])?r[r.length-1]-d[d.length-1]:0}function Wm(r,d,o=!1){let{routesMeta:u}=r,f={},m="/",g=[];for(let E=0;E<u.length;++E){let b=u[E],y=E===u.length-1,N=m==="/"?d:d.slice(m.length)||"/",w={path:b.relativePath,caseSensitive:b.caseSensitive,end:y},O=b.matcher&&b.compiledParams?_f(w,N,b.matcher,b.compiledParams):ls(w,N),Z=b.route;if(!O&&y&&o&&!u[u.length-1].route.index&&(O=ls({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!O)return null;Object.assign(f,O.params),g.push({params:f,pathname:Ce([m,O.pathname]),pathnameBase:Dm(Ce([m,O.pathnameBase])),route:Z}),O.pathnameBase!=="/"&&(m=Ce([m,O.pathnameBase]))}return g}function ls(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,u]=Af(r.path,r.caseSensitive,r.end);return _f(r,d,o,u)}function _f(r,d,o,u){let f=d.match(o);if(!f)return null;let m=f[0],g=m.replace(/(.)\/+$/,"$1"),E=f.slice(1);return{params:u.reduce((y,{paramName:N,isOptional:w},O)=>{if(N==="*"){let X=E[O]||"";g=m.slice(0,m.length-X.length).replace(/(.)\/+$/,"$1")}const Z=E[O];return w&&!Z?y[N]=void 0:y[N]=(Z||"").replace(/%2F/g,"/"),y},{}),pathname:m,pathnameBase:g,pattern:r}}function Af(r,d=!1,o=!0){Me(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,E,b,y,N)=>{if(u.push({paramName:E,isOptional:b!=null}),b){let w=N.charAt(y+g.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),u]}function Lm(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Me(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function ln(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,u=r.charAt(o);return u&&u!=="/"?null:r.slice(o)||"/"}function Om(r,d="/"){let{pathname:o,search:u="",hash:f=""}=typeof r=="string"?La(r):r,m;return o?(o=Sf(o),o.startsWith("/")?m=mf(o.substring(1),"/"):m=mf(o,d)):m=d,{pathname:m,search:Hm(u),hash:Um(f)}}function mf(r,d){let o=is(d).split("/");return r.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function Lu(r,d,o,u){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function km(r){return r.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function Yu(r){let d=km(r);return d.map((o,u)=>u===d.length-1?o.pathname:o.pathnameBase)}function ss(r,d,o,u=!1){let f;typeof r=="string"?f=La(r):(f={...r},wt(!f.pathname||!f.pathname.includes("?"),Lu("?","pathname","search",f)),wt(!f.pathname||!f.pathname.includes("#"),Lu("#","pathname","hash",f)),wt(!f.search||!f.search.includes("#"),Lu("#","search","hash",f)));let m=r===""||f.pathname==="",g=m?"/":f.pathname,E;if(g==null)E=o;else{let w=d.length-1;if(!u&&g.startsWith("..")){let O=g.split("/");for(;O[0]==="..";)O.shift(),w-=1;f.pathname=O.join("/")}E=w>=0?d[w]:"/"}let b=Om(f,E),y=g&&g!=="/"&&g.endsWith("/"),N=(m||g===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(y||N)&&(b.pathname+="/"),b}var Sf=r=>r.replace(/[\\/]{2,}/g,"/"),Ce=r=>Sf(r.join("/")),is=r=>r.replace(/\/+$/,""),Dm=r=>is(r).replace(/^\/*/,"/"),Hm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Um=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,qm=class{constructor(r,d,o,u=!1){this.status=r,this.statusText=d||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function jm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ym(r){let d=r.map(o=>o.route.path).filter(Boolean);return Ce(d)||"/"}var Ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tf(r,d){let o=r;if(typeof o!="string"||!ju.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let u=o,f=!1;if(Ef)try{let m=new URL(window.location.href),g=vf.test(o)?new URL(vm(o,m.protocol)):new URL(o),E=ln(g.pathname,d);g.origin===m.origin&&E!=null?o=E+g.search+g.hash:f=!0}catch{Me(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wf=["POST","PUT","PATCH","DELETE"];new Set(wf);var Gm=["GET",...wf];new Set(Gm);var Zm=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Xm(r){try{return Zm.includes(new URL(r).protocol)}catch{return!1}}var Oa=R.createContext(null);Oa.displayName="DataRouter";var rs=R.createContext(null);rs.displayName="DataRouterState";var Rf=R.createContext(!1);function Vm(){return R.useContext(Rf)}var Nf=R.createContext({isTransitioning:!1});Nf.displayName="ViewTransition";var Qm=R.createContext(new Map);Qm.displayName="Fetchers";var Km=R.createContext(null);Km.displayName="Await";var me=R.createContext(null);me.displayName="Navigation";var Ol=R.createContext(null);Ol.displayName="Location";var Be=R.createContext({outlet:null,matches:[],isDataRoute:!1});Be.displayName="Route";var Gu=R.createContext(null);Gu.displayName="RouteError";var zf="REACT_ROUTER_ERROR",Jm="REDIRECT",$m="ROUTE_ERROR_RESPONSE";function Im(r){if(r.startsWith(`${zf}:${Jm}:{`))try{let d=JSON.parse(r.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Fm(r){if(r.startsWith(`${zf}:${$m}:{`))try{let d=JSON.parse(r.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new qm(d.status,d.statusText,d.data)}catch{}}function Pm(r,{relative:d}={}){wt(ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=R.useContext(me),{hash:f,pathname:m,search:g}=kl(r,{relative:d}),E=m;return o!=="/"&&(E=m==="/"?o:Ce([o,m])),u.createHref({pathname:E,search:g,hash:f})}function ka(){return R.useContext(Ol)!=null}function We(){return wt(ka(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ol).location}var Cf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mf(r){R.useContext(me).static||R.useLayoutEffect(r)}function Bf(){let{isDataRoute:r}=R.useContext(Be);return r?mh():th()}function th(){wt(ka(),"useNavigate() may be used only in the context of a <Router> component.");let r=R.useContext(Oa),{basename:d,navigator:o}=R.useContext(me),{matches:u}=R.useContext(Be),{pathname:f}=We(),m=JSON.stringify(Yu(u)),g=R.useRef(!1);return Mf(()=>{g.current=!0}),R.useCallback((b,y={})=>{if(Me(g.current,Cf),!g.current)return;if(typeof b=="number"){o.go(b);return}let N=ss(b,JSON.parse(m),f,y.relative==="path");r==null&&d!=="/"&&(N.pathname=N.pathname==="/"?d:Ce([d,N.pathname])),(y.replace?o.replace:o.push)(N,y.state,y)},[d,o,m,f,r])}var eh=R.createContext(null);function nh(r){let d=R.useContext(Be).outlet;return R.useMemo(()=>d&&R.createElement(eh.Provider,{value:r},d),[d,r])}function kl(r,{relative:d}={}){let{matches:o}=R.useContext(Be),{pathname:u}=We(),f=JSON.stringify(Yu(o));return R.useMemo(()=>ss(r,JSON.parse(f),u,d==="path"),[r,f,u,d])}function ah(r,d){return Wf(r,d)}function Wf(r,d,o){var j;wt(ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=R.useContext(me),{matches:f}=R.useContext(Be),m=f[f.length-1],g=m?m.params:{},E=m?m.pathname:"/",b=m?m.pathnameBase:"/",y=m&&m.route;{let D=y&&y.path||"";Of(E,!y||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let N=We(),w;if(d){let D=typeof d=="string"?La(d):d;wt(b==="/"||((j=D.pathname)==null?void 0:j.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${D.pathname}" was given in the \`location\` prop.`),w=D}else w=N;let O=w.pathname||"/",Z=O;if(b!=="/"){let D=b.replace(/^\//,"").split("/");Z="/"+O.replace(/^\//,"").split("/").slice(D.length).join("/")}let X=o&&o.state.matches.length?o.state.matches.map(D=>Object.assign(D,{route:o.manifest[D.route.id]||D.route})):xf(r,{pathname:Z});Me(y||X!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Me(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=uh(X&&X.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:Ce([b,u.encodeLocation?u.encodeLocation(D.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?b:Ce([b,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,o);return d&&U?R.createElement(Ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},U):U}function lh(){let r=ph(),d=jm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),o?R.createElement("pre",{style:f},o):null,g)}var ih=R.createElement(lh,null),Lf=class extends R.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const o=Fm(r.digest);o&&(r=o)}let d=r!==void 0?R.createElement(Be.Provider,{value:this.props.routeContext},R.createElement(Gu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?R.createElement(sh,{error:r},d):d}};Lf.contextType=Rf;var Ou=new WeakMap;function sh({children:r,error:d}){let{basename:o}=R.useContext(me);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Im(d.digest);if(u){let f=Ou.get(d);if(f)throw f;let m=Tf(u.location,o),g=m.absoluteURL||m.to;if(Xm(g))throw new Error("Invalid redirect location");if(Ef&&!Ou.get(d))if(m.isExternal||u.reloadDocument)window.location.href=g;else{const E=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw Ou.set(d,E),E}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return r}function rh({routeContext:r,match:d,children:o}){let u=R.useContext(Oa);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),R.createElement(Be.Provider,{value:r},o)}function uh(r,d=[],o){let u=o==null?void 0:o.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let f=r,m=u==null?void 0:u.errors;if(m!=null){let N=f.findIndex(w=>w.route.id&&(m==null?void 0:m[w.route.id])!==void 0);wt(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,N+1))}let g=!1,E=-1;if(o&&u){g=u.renderFallback;for(let N=0;N<f.length;N++){let w=f[N];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(E=N),w.route.id){let{loaderData:O,errors:Z}=u,X=w.route.loader&&!O.hasOwnProperty(w.route.id)&&(!Z||Z[w.route.id]===void 0);if(w.route.lazy||X){o.isStatic&&(g=!0),E>=0?f=f.slice(0,E+1):f=[f[0]];break}}}}let b=o==null?void 0:o.onError,y=u&&b?(N,w)=>{var O,Z;b(N,{location:u.location,params:((Z=(O=u.matches)==null?void 0:O[0])==null?void 0:Z.params)??{},pattern:Ym(u.matches),errorInfo:w})}:void 0;return f.reduceRight((N,w,O)=>{let Z,X=!1,U=null,j=null;u&&(Z=m&&w.route.id?m[w.route.id]:void 0,U=w.route.errorElement||ih,g&&(E<0&&O===0?(Of("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,j=null):E===O&&(X=!0,j=w.route.hydrateFallbackElement||null)));let D=d.concat(f.slice(0,O+1)),F=()=>{let K;return Z?K=U:X?K=j:w.route.Component?K=R.createElement(w.route.Component,null):w.route.element?K=w.route.element:K=N,R.createElement(rh,{match:w,routeContext:{outlet:N,matches:D,isDataRoute:u!=null},children:K})};return u&&(w.route.ErrorBoundary||w.route.errorElement||O===0)?R.createElement(Lf,{location:u.location,revalidation:u.revalidation,component:U,error:Z,children:F(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:y}):F()},null)}function Zu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ch(r){let d=R.useContext(Oa);return wt(d,Zu(r)),d}function dh(r){let d=R.useContext(rs);return wt(d,Zu(r)),d}function oh(r){let d=R.useContext(Be);return wt(d,Zu(r)),d}function Xu(r){let d=oh(r),o=d.matches[d.matches.length-1];return wt(o.route.id,`${r} can only be used on routes that contain a unique "id"`),o.route.id}function fh(){return Xu("useRouteId")}function ph(){var u;let r=R.useContext(Gu),d=dh("useRouteError"),o=Xu("useRouteError");return r!==void 0?r:(u=d.errors)==null?void 0:u[o]}function mh(){let{router:r}=ch("useNavigate"),d=Xu("useNavigate"),o=R.useRef(!1);return Mf(()=>{o.current=!0}),R.useCallback(async(f,m={})=>{Me(o.current,Cf),o.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:d,...m}))},[r,d])}var hf={};function Of(r,d,o){!d&&!hf[r]&&(hf[r]=!0,Me(!1,o))}R.memo(hh);function hh({routes:r,manifest:d,future:o,state:u,isStatic:f,onError:m}){return Wf(r,void 0,{manifest:d,state:u,isStatic:f,onError:m})}function yh({to:r,replace:d,state:o,relative:u}){wt(ka(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=R.useContext(me);Me(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=R.useContext(Be),{pathname:g}=We(),E=Bf(),b=ss(r,Yu(m),g,u==="path"),y=JSON.stringify(b);return R.useEffect(()=>{E(JSON.parse(y),{replace:d,state:o,relative:u})},[E,y,u,d,o]),null}function vh(r){return nh(r.context)}function Wl(r){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xh({basename:r="/",children:d=null,location:o,navigationType:u="POP",navigator:f,static:m=!1,useTransitions:g}){wt(!ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=r.replace(/^\/*/,"/"),b=R.useMemo(()=>({basename:E,navigator:f,static:m,useTransitions:g,future:{}}),[E,f,m,g]);typeof o=="string"&&(o=La(o));let{pathname:y="/",search:N="",hash:w="",state:O=null,key:Z="default",mask:X}=o,U=R.useMemo(()=>{let j=ln(y,E);return j==null?null:{location:{pathname:j,search:N,hash:w,state:O,key:Z,mask:X},navigationType:u}},[E,y,N,w,O,Z,u,X]);return Me(U!=null,`<Router basename="${E}"> is not able to match the URL "${y}${N}${w}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:R.createElement(me.Provider,{value:b},R.createElement(Ol.Provider,{children:d,value:U}))}function gh({children:r,location:d}){return ah(Hu(r),d)}function Hu(r,d=[]){let o=[];return R.Children.forEach(r,(u,f)=>{if(!R.isValidElement(u))return;let m=[...d,f];if(u.type===R.Fragment){o.push.apply(o,Hu(u.props.children,m));return}wt(u.type===Wl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=Hu(u.props.children,m)),o.push(g)}),o}var ns="get",as="application/x-www-form-urlencoded";function us(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function bh(r){return us(r)&&r.tagName.toLowerCase()==="button"}function _h(r){return us(r)&&r.tagName.toLowerCase()==="form"}function Ah(r){return us(r)&&r.tagName.toLowerCase()==="input"}function Sh(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Eh(r,d){return r.button===0&&(!d||d==="_self")&&!Sh(r)}var es=null;function Th(){if(es===null)try{new FormData(document.createElement("form"),0),es=!1}catch{es=!0}return es}var wh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ku(r){return r!=null&&!wh.has(r)?(Me(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${as}"`),null):r}function Rh(r,d){let o,u,f,m,g;if(_h(r)){let E=r.getAttribute("action");u=E?ln(E,d):null,o=r.getAttribute("method")||ns,f=ku(r.getAttribute("enctype"))||as,m=new FormData(r)}else if(bh(r)||Ah(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||E.getAttribute("action");if(u=b?ln(b,d):null,o=r.getAttribute("formmethod")||E.getAttribute("method")||ns,f=ku(r.getAttribute("formenctype"))||ku(E.getAttribute("enctype"))||as,m=new FormData(E,r),!Th()){let{name:y,type:N,value:w}=r;if(N==="image"){let O=y?`${y}.`:"";m.append(`${O}x`,"0"),m.append(`${O}y`,"0")}else y&&m.append(y,w)}}else{if(us(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ns,u=null,f=as,g=r}return m&&f==="text/plain"&&(g=m,m=void 0),{action:u,method:o.toLowerCase(),encType:f,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vu(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function kf(r,d,o,u){let f=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:d&&ln(f.pathname,d)==="/"?f.pathname=`${is(d)}/_root.${u}`:f.pathname=`${is(f.pathname)}.${u}`,f}async function Nh(r,d){if(r.id in d)return d[r.id];try{let o=await import(r.module);return d[r.id]=o,o}catch(o){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zh(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ch(r,d,o){let u=await Promise.all(r.map(async f=>{let m=d.routes[f.route.id];if(m){let g=await Nh(m,o);return g.links?g.links():[]}return[]}));return Lh(u.flat(1).filter(zh).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function yf(r,d,o,u,f,m){let g=(b,y)=>o[y]?b.route.id!==o[y].route.id:!0,E=(b,y)=>{var N;return o[y].pathname!==b.pathname||((N=o[y].route.path)==null?void 0:N.endsWith("*"))&&o[y].params["*"]!==b.params["*"]};return m==="assets"?d.filter((b,y)=>g(b,y)||E(b,y)):m==="data"?d.filter((b,y)=>{var w;let N=u.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(g(b,y)||E(b,y))return!0;if(b.route.shouldRevalidate){let O=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Mh(r,d,{includeHydrateFallback:o}={}){return Bh(r.map(u=>{let f=d.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Bh(r){return[...new Set(r)]}function Wh(r){let d={},o=Object.keys(r).sort();for(let u of o)d[u]=r[u];return d}function Lh(r,d){let o=new Set;return new Set(d),r.reduce((u,f)=>{let m=JSON.stringify(Wh(f));return o.has(m)||(o.add(m),u.push({key:m,link:f})),u},[])}function Qu(){let r=R.useContext(Oa);return Vu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Oh(){let r=R.useContext(rs);return Vu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ku=R.createContext(void 0);Ku.displayName="FrameworkContext";function cs(){let r=R.useContext(Ku);return Vu(r,"You must render this element inside a <HydratedRouter> element"),r}function kh(r,d){let o=R.useContext(Ku),[u,f]=R.useState(!1),[m,g]=R.useState(!1),{onFocus:E,onBlur:b,onMouseEnter:y,onMouseLeave:N,onTouchStart:w}=d,O=R.useRef(null);R.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let U=D=>{D.forEach(F=>{g(F.isIntersecting)})},j=new IntersectionObserver(U,{threshold:.5});return O.current&&j.observe(O.current),()=>{j.disconnect()}}},[r]),R.useEffect(()=>{if(u){let U=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(U)}}},[u]);let Z=()=>{f(!0)},X=()=>{f(!1),g(!1)};return o?r!=="intent"?[m,O,{}]:[m,O,{onFocus:Bl(E,Z),onBlur:Bl(b,X),onMouseEnter:Bl(y,Z),onMouseLeave:Bl(N,X),onTouchStart:Bl(w,Z)}]:[!1,O,{}]}function Bl(r,d){return o=>{r&&r(o),o.defaultPrevented||d(o)}}function Dh({page:r,...d}){let o=Vm(),{nonce:u}=cs(),{router:f}=Qu(),m=R.useMemo(()=>xf(f.routes,r,f.basename),[f.routes,r,f.basename]);return m?(d.nonce==null&&u&&(d={...d,nonce:u}),o?R.createElement(Uh,{page:r,matches:m,...d}):R.createElement(qh,{page:r,matches:m,...d})):null}function Hh(r){let{manifest:d,routeModules:o}=cs(),[u,f]=R.useState([]);return R.useEffect(()=>{let m=!1;return Ch(r,d,o).then(g=>{m||f(g)}),()=>{m=!0}},[r,d,o]),u}function Uh({page:r,matches:d,...o}){let u=We(),{future:f}=cs(),{basename:m}=Qu(),g=R.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let E=kf(r,m,f.v8_trailingSlashAwareDataRequests,"rsc"),b=!1,y=[];for(let N of d)typeof N.route.shouldRevalidate=="function"?b=!0:y.push(N.route.id);return b&&y.length>0&&E.searchParams.set("_routes",y.join(",")),[E.pathname+E.search]},[m,f.v8_trailingSlashAwareDataRequests,r,u,d]);return R.createElement(R.Fragment,null,g.map(E=>R.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...o})))}function qh({page:r,matches:d,...o}){let u=We(),{future:f,manifest:m,routeModules:g}=cs(),{basename:E}=Qu(),{loaderData:b,matches:y}=Oh(),N=R.useMemo(()=>yf(r,d,y,m,u,"data"),[r,d,y,m,u]),w=R.useMemo(()=>yf(r,d,y,m,u,"assets"),[r,d,y,m,u]),O=R.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let U=new Set,j=!1;if(d.forEach(F=>{var ht;let K=m.routes[F.route.id];!K||!K.hasLoader||(!N.some(ft=>ft.route.id===F.route.id)&&F.route.id in b&&((ht=g[F.route.id])!=null&&ht.shouldRevalidate)||K.hasClientLoader?j=!0:U.add(F.route.id))}),U.size===0)return[];let D=kf(r,E,f.v8_trailingSlashAwareDataRequests,"data");return j&&U.size>0&&D.searchParams.set("_routes",d.filter(F=>U.has(F.route.id)).map(F=>F.route.id).join(",")),[D.pathname+D.search]},[E,f.v8_trailingSlashAwareDataRequests,b,u,m,N,d,r,g]),Z=R.useMemo(()=>Mh(w,m),[w,m]),X=Hh(w);return R.createElement(R.Fragment,null,O.map(U=>R.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...o})),Z.map(U=>R.createElement("link",{key:U,rel:"modulepreload",href:U,...o})),X.map(({key:U,link:j})=>R.createElement("link",{key:U,nonce:o.nonce,...j,crossOrigin:j.crossOrigin??o.crossOrigin})))}function jh(...r){return d=>{r.forEach(o=>{typeof o=="function"?o(d):o!=null&&(o.current=d)})}}var Yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yh&&(window.__reactRouterVersion="7.18.0")}catch{}function Gh({basename:r,children:d,useTransitions:o,window:u}){let f=R.useRef();f.current==null&&(f.current=xm({window:u,v5Compat:!0}));let m=f.current,[g,E]=R.useState({action:m.action,location:m.location}),b=R.useCallback(y=>{o===!1?E(y):R.startTransition(()=>E(y))},[o]);return R.useLayoutEffect(()=>m.listen(b),[m,b]),R.createElement(xh,{basename:r,children:d,location:g.location,navigationType:g.action,navigator:m,useTransitions:o})}var Ju=R.forwardRef(function({onClick:d,discover:o="render",prefetch:u="none",relative:f,reloadDocument:m,replace:g,mask:E,state:b,target:y,to:N,preventScrollReset:w,viewTransition:O,defaultShouldRevalidate:Z,...X},U){let{basename:j,navigator:D,useTransitions:F}=R.useContext(me),K=typeof N=="string"&&ju.test(N),ht=Tf(N,j);N=ht.to;let ft=Pm(N,{relative:f}),At=We(),$=null;if(E){let Wt=ss(E,[],At.mask?At.mask.pathname:"/",!0);j!=="/"&&(Wt.pathname=Wt.pathname==="/"?j:Ce([j,Wt.pathname])),$=D.createHref(Wt)}let[zt,Vt,Le]=kh(u,X),he=Vh(N,{replace:g,mask:E,state:b,target:y,preventScrollReset:w,relative:f,viewTransition:O,defaultShouldRevalidate:Z,useTransitions:F});function Qt(Wt){d&&d(Wt),Wt.defaultPrevented||he(Wt)}let Oe=!(ht.isExternal||m),ye=R.createElement("a",{...X,...Le,href:(Oe?$:void 0)||ht.absoluteURL||ft,onClick:Oe?Qt:d,ref:jh(U,Vt),target:y,"data-discover":!K&&o==="render"?"true":void 0});return zt&&!K?R.createElement(R.Fragment,null,ye,R.createElement(Dh,{page:ft})):ye});Ju.displayName="Link";var Uu=R.forwardRef(function({"aria-current":d="page",caseSensitive:o=!1,className:u="",end:f=!1,style:m,to:g,viewTransition:E,children:b,...y},N){let w=kl(g,{relative:y.relative}),O=We(),Z=R.useContext(rs),{navigator:X,basename:U}=R.useContext(me),j=Z!=null&&Ih(w)&&E===!0,D=X.encodeLocation?X.encodeLocation(w).pathname:w.pathname,F=O.pathname,K=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;o||(F=F.toLowerCase(),K=K?K.toLowerCase():null,D=D.toLowerCase()),K&&U&&(K=ln(K,U)||K);const ht=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let ft=F===D||!f&&F.startsWith(D)&&F.charAt(ht)==="/",At=K!=null&&(K===D||!f&&K.startsWith(D)&&K.charAt(D.length)==="/"),$={isActive:ft,isPending:At,isTransitioning:j},zt=ft?d:void 0,Vt;typeof u=="function"?Vt=u($):Vt=[u,ft?"active":null,At?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Le=typeof m=="function"?m($):m;return R.createElement(Ju,{...y,"aria-current":zt,className:Vt,ref:N,style:Le,to:g,viewTransition:E},typeof b=="function"?b($):b)});Uu.displayName="NavLink";var Zh=R.forwardRef(({discover:r="render",fetcherKey:d,navigate:o,reloadDocument:u,replace:f,state:m,method:g=ns,action:E,onSubmit:b,relative:y,preventScrollReset:N,viewTransition:w,defaultShouldRevalidate:O,...Z},X)=>{let{useTransitions:U}=R.useContext(me),j=Jh(),D=$h(E,{relative:y}),F=g.toLowerCase()==="get"?"get":"post",K=typeof E=="string"&&ju.test(E),ht=ft=>{if(b&&b(ft),ft.defaultPrevented)return;ft.preventDefault();let At=ft.nativeEvent.submitter,$=(At==null?void 0:At.getAttribute("formmethod"))||g,zt=()=>j(At||ft.currentTarget,{fetcherKey:d,method:$,navigate:o,replace:f,state:m,relative:y,preventScrollReset:N,viewTransition:w,defaultShouldRevalidate:O});U&&o!==!1?R.startTransition(()=>zt()):zt()};return R.createElement("form",{ref:X,method:F,action:D,onSubmit:u?b:ht,...Z,"data-discover":!K&&r==="render"?"true":void 0})});Zh.displayName="Form";function Xh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Df(r){let d=R.useContext(Oa);return wt(d,Xh(r)),d}function Vh(r,{target:d,replace:o,mask:u,state:f,preventScrollReset:m,relative:g,viewTransition:E,defaultShouldRevalidate:b,useTransitions:y}={}){let N=Bf(),w=We(),O=kl(r,{relative:g});return R.useCallback(Z=>{if(Eh(Z,d)){Z.preventDefault();let X=o!==void 0?o:Ll(w)===Ll(O),U=()=>N(r,{replace:X,mask:u,state:f,preventScrollReset:m,relative:g,viewTransition:E,defaultShouldRevalidate:b});y?R.startTransition(()=>U()):U()}},[w,N,O,o,u,f,d,r,m,g,E,b,y])}var Qh=0,Kh=()=>`__${String(++Qh)}__`;function Jh(){let{router:r}=Df("useSubmit"),{basename:d}=R.useContext(me),o=fh(),u=r.fetch,f=r.navigate;return R.useCallback(async(m,g={})=>{let{action:E,method:b,encType:y,formData:N,body:w}=Rh(m,d);if(g.navigate===!1){let O=g.fetcherKey||Kh();await u(O,o,g.action||E,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:w,formMethod:g.method||b,formEncType:g.encType||y,flushSync:g.flushSync})}else await f(g.action||E,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:w,formMethod:g.method||b,formEncType:g.encType||y,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,f,d,o])}function $h(r,{relative:d}={}){let{basename:o}=R.useContext(me),u=R.useContext(Be);wt(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...kl(r||".",{relative:d})},g=We();if(r==null){m.search=g.search;let E=new URLSearchParams(m.search),b=E.getAll("index");if(b.some(N=>N==="")){E.delete("index"),b.filter(w=>w).forEach(w=>E.append("index",w));let N=E.toString();m.search=N?`?${N}`:""}}return(!r||r===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:Ce([o,m.pathname])),Ll(m)}function Ih(r,{relative:d}={}){let o=R.useContext(Nf);wt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Df("useViewTransitionState"),f=kl(r,{relative:d});if(!o.isTransitioning)return!1;let m=ln(o.currentLocation.pathname,u)||o.currentLocation.pathname,g=ln(o.nextLocation.pathname,u)||o.nextLocation.pathname;return ls(f.pathname,g)!=null||ls(f.pathname,m)!=null}const Fh=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cosine Similarity — Animated</title>
<link rel="stylesheet" href="theme.css">
<script src="components.js"><\/script>
<style>
  :root { --a: #e05a2f; --b: #0f9b8e; }   /* vector / matrix A & B */
  canvas { width: 100%; border-radius: 12px; background: var(--panel-2); display: block; }

  /* matrix grids (page-specific) */
  .mtx { display: inline-grid; gap: 6px; }
  .cell {
    width: 46px; height: 40px; display: flex; align-items: center; justify-content: center;
    border-radius: 7px; font-family: monospace; font-size: 15px;
    background: var(--panel-2); border: 1px solid var(--border); transition: all .3s;
  }
  .cell.hl-a { background: rgba(255,122,89,0.22); border-color: var(--a); }
  .cell.hl-b { background: rgba(79,209,197,0.22); border-color: var(--b); }
  .mlabel { color: var(--muted); font-size: 13px; margin-bottom: 8px; font-family: monospace; }
  .simgrid { display: inline-grid; gap: 6px; }
  .scell {
    width: 70px; height: 56px; display: flex; align-items: center; justify-content: center;
    border-radius: 8px; font-family: monospace; font-weight: 600; font-size: 16px;
    background: var(--panel-2); border: 1px solid var(--border); transition: all .4s;
    color: #0e1018;
  }
  .scell.empty { color: var(--muted); background: var(--panel-2); }
  .axis-head { color: var(--muted); font-size: 12px; font-family: monospace; text-align:center; }
  .matrices { display: flex; gap: 28px; flex-wrap: wrap; align-items: flex-start; }
  .block-label { font-size: 13px; color: var(--muted); margin: 0 0 6px; }
</style>
</head>
<body>
<div class="wrap">
  <site-nav current="cosine_and_euclidian.html"></site-nav>
  <h1>Comparing vectors with cosine similarity</h1>
  <p class="sub">cos(θ) = (A · B) / (‖A‖ ‖B‖) measures the <em>angle</em> (direction); Euclidean distance measures the straight-line <em>gap</em>. Two different ways to ask "how close are these vectors?"</p>

  <!-- ============ SECTION 1: TWO VECTORS ============ -->
  <div class="card">
    <h2>1 · Two vectors</h2>
    <p class="formula">A = [3, 1]&nbsp;&nbsp;&nbsp;B = [2, 4]&nbsp;&nbsp;&nbsp;(chosen so the angle works out to a clean 45°)</p>
    <div class="row">
      <div class="grow">
        <canvas id="vecCanvas" width="560" height="460"></canvas>
        <div class="legend">
          <span><span class="dot" style="background:var(--a)"></span>Vector A</span>
          <span><span class="dot" style="background:var(--b)"></span>Vector B</span>
          <span><span class="dot" style="background:var(--accent)"></span>angle θ</span>
        </div>
      </div>
      <div class="grow">
        <div class="math" id="vecMath"></div>
        <control-bar prefix="vec"></control-bar>
      </div>
    </div>
  </div>

  <!-- ============ SECTION 2: TWO MATRICES ============ -->
  <div class="card">
    <h2>2 · Two matrices (row-wise similarity)</h2>
    <p class="formula">
      Each row is a 3-D embedding over features [sport, tech, food].
      We compute cos(θ) between every row of A and every row of B → a similarity matrix S.
    </p>
    <div class="row">
      <div class="grow">
        <div class="matrices">
          <div>
            <div class="block-label vA">Matrix A (queries)</div>
            <div class="mtx" id="matA"></div>
          </div>
          <div>
            <div class="block-label vB">Matrix B (documents)</div>
            <div class="mtx" id="matB"></div>
          </div>
        </div>
        <div style="margin-top:24px">
          <div class="block-label res">Similarity matrix S = cos(Aᵢ, Bⱼ)</div>
          <div id="simGrid"></div>
        </div>
      </div>
      <div class="grow">
        <div class="math" id="matMath"></div>
        <control-bar prefix="mat"></control-bar>
      </div>
    </div>
  </div>

  <!-- ============ SECTION 3: EUCLIDEAN DISTANCE ============ -->
  <div class="card">
    <h2>3 · Euclidean distance</h2>
    <p class="formula">
      d(A, B) = √( (A₁−B₁)² + (A₂−B₂)² )&nbsp;&nbsp;&nbsp;same A = [3, 1], B = [2, 4] — straight-line gap, not angle.
    </p>
    <div class="row">
      <div class="grow">
        <canvas id="eucCanvas" width="560" height="460"></canvas>
        <div class="legend">
          <span><span class="dot" style="background:var(--a)"></span>Point A</span>
          <span><span class="dot" style="background:var(--b)"></span>Point B</span>
          <span><span class="dot" style="background:var(--accent)"></span>distance d</span>
        </div>
      </div>
      <div class="grow">
        <div class="math" id="eucMath"></div>
        <control-bar prefix="euc"></control-bar>
      </div>
    </div>
  </div>
</div>

<script>
/* ============================================================
   Shared helpers
============================================================ */
const dot = (u, v) => u.reduce((s, x, i) => s + x * v[i], 0);
const norm = (u) => Math.sqrt(dot(u, u));
const cosine = (u, v) => dot(u, v) / (norm(u) * norm(v));
const fmt = (x, d = 3) => x.toFixed(d);
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;

// map a similarity in [0,1] to a heatmap color (blue -> green -> orange)
function heat(v) {
  const t = Math.max(0, Math.min(1, v));
  // interpolate through a cool->warm ramp
  const stops = [
    [30, 50, 90],     // low
    [79, 209, 197],   // mid (teal)
    [79, 209, 122],   // high-mid (green)
    [255, 200, 70],   // high (amber)
  ];
  const seg = t * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(seg));
  const f = seg - i;
  const c = stops[i].map((a, k) => Math.round(lerp(a, stops[i+1][k], f)));
  return \`rgb(\${c[0]},\${c[1]},\${c[2]})\`;
}

/* ============================================================
   SECTION 1 — two vectors
============================================================ */
(function vectorSection() {
  const A = [3, 1], B = [2, 4];
  const canvas = document.getElementById('vecCanvas');
  const ctx = canvas.getContext('2d');
  const mathEl = document.getElementById('vecMath');
  const W = canvas.width, H = canvas.height;

  const origin = { x: 70, y: H - 70 };
  const scale = 80; // pixels per unit

  const toPx = (v) => ({ x: origin.x + v[0] * scale, y: origin.y - v[1] * scale });

  const angA = Math.atan2(A[1], A[0]);
  const angB = Math.atan2(B[1], B[0]);
  const theta = Math.acos(cosine(A, B)); // radians

  // animation state: progress per element + arc sweep
  let state = { drawA: 0, drawB: 0, arc: 0 };

  function drawGrid() {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = getColor('--grid');
    ctx.lineWidth = 1;
    for (let gx = 0; gx <= 6; gx++) {
      const x = origin.x + gx * scale;
      line(x, 20, x, origin.y);
    }
    for (let gy = 0; gy <= 5; gy++) {
      const y = origin.y - gy * scale;
      line(origin.x, y, W - 20, y);
    }
    // axes
    ctx.strokeStyle = '#9aa3b8'; ctx.lineWidth = 1.5;
    line(origin.x, 20, origin.x, origin.y);
    line(origin.x, origin.y, W - 20, origin.y);
    ctx.fillStyle = getColor('--muted'); ctx.font = '12px monospace';
    ctx.fillText('x', W - 26, origin.y + 18);
    ctx.fillText('y', origin.x - 18, 28);
  }

  function line(x1, y1, x2, y2) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }

  function arrow(vec, t, color, label) {
    const end = toPx([vec[0] * t, vec[1] * t]);
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3.5;
    line(origin.x, origin.y, end.x, end.y);
    // arrowhead
    const ang = Math.atan2(end.y - origin.y, end.x - origin.x);
    const hs = 12;
    ctx.beginPath();
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(end.x - hs * Math.cos(ang - 0.4), end.y - hs * Math.sin(ang - 0.4));
    ctx.lineTo(end.x - hs * Math.cos(ang + 0.4), end.y - hs * Math.sin(ang + 0.4));
    ctx.closePath(); ctx.fill();
    if (t > 0.99) {
      ctx.font = 'bold 15px monospace';
      ctx.fillText(label, end.x + 8, end.y - 6);
    }
  }

  function drawArc(t) {
    if (t <= 0) return;
    const r = 60;
    const sweep = lerp(angA, angB, t);
    ctx.strokeStyle = getColor('--accent'); ctx.lineWidth = 3;
    ctx.beginPath();
    // canvas y is flipped, so negate angles
    ctx.arc(origin.x, origin.y, r, -angA, -sweep, true);
    ctx.stroke();
    if (t > 0.99) {
      const mid = (angA + angB) / 2;
      ctx.fillStyle = getColor('--accent'); ctx.font = 'bold 14px monospace';
      ctx.fillText('θ=45°', origin.x + (r + 14) * Math.cos(mid), origin.y - (r + 14) * Math.sin(mid));
    }
  }

  function render() {
    drawGrid();
    drawArc(state.arc);
    arrow(A, state.drawA, getColor('--a'), 'A');
    arrow(B, state.drawB, getColor('--b'), 'B');
  }

  function getColor(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  // ---- step sequencer ----
  const steps = [
    {
      label: 'Setup',
      anim: ['drawA', 'drawB'],
      html: () => \`
        <div class="step-label">The two vectors</div>
        <div class="line big"><span class="vA">A = [3, 1]</span></div>
        <div class="line big"><span class="vB">B = [2, 4]</span></div>
        <div class="line" style="color:var(--muted)">Cosine similarity asks: how aligned are their directions?</div>\`
    },
    {
      label: 'Dot product',
      anim: ['arc'],
      html: () => \`
        <div class="step-label">Step 1 — dot product</div>
        <div class="line">A · B = (3×2) + (1×4)</div>
        <div class="line big res">A · B = 6 + 4 = \${dot(A,B)}</div>
        <div class="line" style="color:var(--muted)">It grows when the vectors point the same way.</div>\`
    },
    {
      label: 'Magnitudes',
      anim: [],
      html: () => \`
        <div class="step-label">Step 2 — magnitudes (lengths)</div>
        <div class="line vA">‖A‖ = √(3² + 1²) = √10 = \${fmt(norm(A))}</div>
        <div class="line vB">‖B‖ = √(2² + 4²) = √20 = \${fmt(norm(B))}</div>
        <div class="line" style="color:var(--muted)">Dividing by these removes the effect of length.</div>\`
    },
    {
      label: 'Cosine',
      anim: [],
      html: () => \`
        <div class="step-label">Step 3 — divide</div>
        <div class="line">cos(θ) = \${dot(A,B)} / (\${fmt(norm(A))} × \${fmt(norm(B))})</div>
        <div class="line">cos(θ) = \${dot(A,B)} / \${fmt(norm(A)*norm(B))}</div>
        <div class="line big res">cos(θ) = \${fmt(cosine(A,B))}</div>
        <div class="line big res">θ = \${fmt(theta*180/Math.PI,1)}°</div>
        <div class="line" style="color:var(--muted)">0.707 → a moderate 45° angle between them.</div>\`
    },
  ];

  let cur = -1, playing = false, raf = null;

  function showStep(i) {
    mathEl.innerHTML = steps[i].html();
  }

  function animateTo(targets, done) {
    const start = performance.now();
    const dur = 700;
    const from = { ...state };
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const e = easeInOut(t);
      targets.forEach(k => state[k] = lerp(from[k] || 0, 1, e));
      render();
      if (t < 1) raf = requestAnimationFrame(frame);
      else if (done) done();
    }
    raf = requestAnimationFrame(frame);
  }

  function nextStep(auto) {
    if (cur >= steps.length - 1) { playing = false; return; }
    cur++;
    showStep(cur);
    const anim = steps[cur].anim;
    if (anim.length) {
      animateTo(anim, () => { if (auto && playing) setTimeout(() => nextStep(true), 900); });
    } else if (auto && playing) {
      setTimeout(() => nextStep(true), 1300);
    }
  }

  function reset() {
    cancelAnimationFrame(raf); playing = false; cur = -1;
    state = { drawA: 0, drawB: 0, arc: 0 };
    render();
    mathEl.innerHTML = \`<div class="step-label">Ready</div><div class="line" style="color:var(--muted)">Press Play to walk through the calculation.</div>\`;
  }

  function vecRebuild(target) {
    cancelAnimationFrame(raf);
    state = { drawA: 0, drawB: 0, arc: 0 };
    for (let i = 0; i <= target; i++) steps[i].anim.forEach(k => state[k] = 1);
    render(); showStep(target); cur = target;
  }
  function vecPause() { playing = false; cancelAnimationFrame(raf); }
  function vecBack() { vecPause(); if (cur > 0) vecRebuild(cur - 1); else reset(); }

  document.getElementById('vecPlay').onclick = () => {
    if (cur >= steps.length - 1) reset();
    playing = true; nextStep(true);
  };
  document.getElementById('vecPause').onclick = vecPause;
  document.getElementById('vecBack').onclick = vecBack;
  document.getElementById('vecStep').onclick = () => { playing = false; nextStep(false); };
  document.getElementById('vecReset').onclick = reset;

  reset();
})();

/* ============================================================
   SECTION 2 — two matrices, row-wise cosine -> similarity matrix
============================================================ */
(function matrixSection() {
  const features = ['sport', 'tech', 'food'];
  const A = [ [2, 1, 0], [0, 1, 2] ];   // 2 query rows
  const B = [ [2, 0, 1], [1, 1, 1] ];   // 2 document rows
  const aRows = A.length, bRows = B.length;

  const matAEl = document.getElementById('matA');
  const matBEl = document.getElementById('matB');
  const simEl = document.getElementById('simGrid');
  const mathEl = document.getElementById('matMath');

  // build matrix DOM
  function buildMatrix(el, M) {
    el.style.gridTemplateColumns = \`repeat(\${M[0].length}, auto)\`;
    el.innerHTML = '';
    M.forEach((row, r) => row.forEach((val, c) => {
      const d = document.createElement('div');
      d.className = 'cell';
      d.dataset.r = r;
      d.textContent = val;
      el.appendChild(d);
    }));
  }
  buildMatrix(matAEl, A);
  buildMatrix(matBEl, B);

  // build similarity grid with header row/col
  const simCells = [];
  function buildSim() {
    simEl.style.display = 'inline-grid';
    simEl.style.gap = '6px';
    simEl.style.gridTemplateColumns = \`auto repeat(\${bRows}, auto)\`;
    simEl.innerHTML = '';
    // top-left corner
    simEl.appendChild(corner(''));
    for (let j = 0; j < bRows; j++) simEl.appendChild(corner('B' + (j+1)));
    for (let i = 0; i < aRows; i++) {
      simEl.appendChild(corner('A' + (i+1)));
      simCells[i] = [];
      for (let j = 0; j < bRows; j++) {
        const d = document.createElement('div');
        d.className = 'scell empty';
        d.textContent = '·';
        simEl.appendChild(d);
        simCells[i][j] = d;
      }
    }
  }
  function corner(txt) {
    const d = document.createElement('div');
    d.className = 'axis-head';
    d.style.display = 'flex'; d.style.alignItems = 'center'; d.style.justifyContent = 'center';
    d.textContent = txt;
    return d;
  }
  buildSim();

  function clearHighlights() {
    [matAEl, matBEl].forEach(el =>
      el.querySelectorAll('.cell').forEach(c => c.classList.remove('hl-a', 'hl-b')));
  }
  function highlightRow(el, r, cls) {
    el.querySelectorAll(\`.cell[data-r="\${r}"]\`).forEach(c => c.classList.add(cls));
  }

  // sequence: one step per (i,j) cell
  const pairs = [];
  for (let i = 0; i < aRows; i++)
    for (let j = 0; j < bRows; j++) pairs.push([i, j]);

  let cur = -1, playing = false, timer = null;

  function showPair(i, j) {
    clearHighlights();
    highlightRow(matAEl, i, 'hl-a');
    highlightRow(matBEl, j, 'hl-b');

    const a = A[i], b = B[j];
    const dp = dot(a, b), na = norm(a), nb = norm(b), cs = cosine(a, b);

    mathEl.innerHTML = \`
      <div class="step-label">Cell S[\${i+1}][\${j+1}] — cos(A\${i+1}, B\${j+1})</div>
      <div class="line"><span class="vA">A\${i+1} = [\${a.join(', ')}]</span></div>
      <div class="line"><span class="vB">B\${j+1} = [\${b.join(', ')}]</span></div>
      <div class="line">A·B = \${a.map((x,k)=>\`\${x}×\${b[k]}\`).join(' + ')} = \${dp}</div>
      <div class="line vA">‖A\${i+1}‖ = \${fmt(na)}</div>
      <div class="line vB">‖B\${j+1}‖ = \${fmt(nb)}</div>
      <div class="line big res">cos = \${dp} / \${fmt(na*nb)} = \${fmt(cs)}</div>\`;

    // animate the target cell value counting up + color in
    const cell = simCells[i][j];
    cell.classList.remove('empty');
    const start = performance.now();
    const dur = 600;
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const v = cs * easeInOut(t);
      cell.textContent = fmt(v, 2);
      cell.style.background = heat(v);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function nextStep(auto) {
    if (cur >= pairs.length - 1) {
      playing = false;
      clearHighlights();
      finalNote();
      return;
    }
    cur++;
    showPair(...pairs[cur]);
    if (auto && playing) timer = setTimeout(() => nextStep(true), 2200);
  }

  function finalNote() {
    const note = document.createElement('div');
    mathEl.innerHTML += \`<div class="line" style="margin-top:10px;color:var(--good)">
      ✓ Done. Brightest cell = best query→document match. Here A1↔B1 (both "sport"-heavy) scores highest.</div>\`;
  }

  function reset() {
    clearTimeout(timer); playing = false; cur = -1;
    clearHighlights();
    simCells.flat().forEach(c => {
      c.classList.add('empty'); c.textContent = '·'; c.style.background = '';
    });
    mathEl.innerHTML = \`<div class="step-label">Ready</div>
      <div class="line" style="color:var(--muted)">Press Play to fill the similarity matrix one cell at a time.</div>\`;
  }

  function matFillInstant(idx) {
    const [i, j] = pairs[idx];
    const cs = cosine(A[i], B[j]);
    const cell = simCells[i][j];
    cell.classList.remove('empty');
    cell.textContent = fmt(cs, 2);
    cell.style.background = heat(cs);
  }
  function matRebuild(target) {
    clearTimeout(timer); clearHighlights();
    simCells.flat().forEach(c => { c.classList.add('empty'); c.textContent = '·'; c.style.background = ''; });
    for (let i = 0; i < target; i++) matFillInstant(i);
    cur = target;
    showPair(...pairs[target]);
  }
  function matPause() { playing = false; clearTimeout(timer); }
  function matBack() { matPause(); if (cur > 0) matRebuild(cur - 1); else reset(); }

  document.getElementById('matPlay').onclick = () => {
    if (cur >= pairs.length - 1) reset();
    playing = true; nextStep(true);
  };
  document.getElementById('matPause').onclick = matPause;
  document.getElementById('matBack').onclick = matBack;
  document.getElementById('matStep').onclick = () => { playing = false; nextStep(false); };
  document.getElementById('matReset').onclick = reset;

  reset();
})();

/* ============================================================
   SECTION 3 — Euclidean distance (right-triangle / Pythagoras)
============================================================ */
(function euclidSection() {
  const A = [3, 1], B = [2, 4];
  const canvas = document.getElementById('eucCanvas');
  const ctx = canvas.getContext('2d');
  const mathEl = document.getElementById('eucMath');
  const W = canvas.width, H = canvas.height;

  const origin = { x: 70, y: H - 70 };
  const scale = 80;
  const toPx = (v) => ({ x: origin.x + v[0] * scale, y: origin.y - v[1] * scale });

  const dx = A[0] - B[0], dy = A[1] - B[1];
  const dist = Math.sqrt(dx*dx + dy*dy);

  // animation progress for: points, legs, hypotenuse
  let state = { pts: 0, legs: 0, hyp: 0 };

  function getColor(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }
  function line(x1,y1,x2,y2){ ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); }

  function drawGrid() {
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle = getColor('--grid'); ctx.lineWidth = 1;
    for (let gx=0; gx<=6; gx++){ const x=origin.x+gx*scale; line(x,20,x,origin.y); }
    for (let gy=0; gy<=5; gy++){ const y=origin.y-gy*scale; line(origin.x,y,W-20,y); }
    ctx.strokeStyle = '#9aa3b8'; ctx.lineWidth = 1.5;
    line(origin.x,20,origin.x,origin.y); line(origin.x,origin.y,W-20,origin.y);
    ctx.fillStyle = getColor('--muted'); ctx.font = '12px monospace';
    ctx.fillText('x', W-26, origin.y+18); ctx.fillText('y', origin.x-18, 28);
  }

  function dot(p, color, label) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI*2); ctx.fill();
    ctx.font = 'bold 15px monospace';
    ctx.fillText(label, p.x + 10, p.y - 8);
  }

  function render() {
    drawGrid();
    const pa = toPx(A), pb = toPx(B);
    const corner = { x: toPx([A[0], B[1]]).x, y: toPx([A[0], B[1]]).y }; // right-angle corner

    // legs of the right triangle (dashed), animated
    if (state.legs > 0) {
      ctx.save();
      ctx.setLineDash([6, 5]); ctx.lineWidth = 2.5;
      // horizontal leg (Δx) from B to corner
      ctx.strokeStyle = getColor('--a');
      const hx = lerp(pb.x, corner.x, Math.min(1, state.legs));
      line(pb.x, pb.y, hx, pb.y);
      // vertical leg (Δy) from corner to A
      ctx.strokeStyle = getColor('--b');
      const vy = lerp(corner.y, pa.y, Math.min(1, state.legs));
      line(corner.x, corner.y, corner.x, vy);
      ctx.restore();
      if (state.legs > 0.99) {
        ctx.fillStyle = getColor('--a'); ctx.font = '13px monospace';
        ctx.fillText('Δx = ' + Math.abs(dx), (pb.x+corner.x)/2 - 20, pb.y + 18);
        ctx.fillStyle = getColor('--b');
        ctx.fillText('Δy = ' + Math.abs(dy), corner.x + 8, (corner.y+pa.y)/2);
      }
    }

    // hypotenuse = the distance, animated
    if (state.hyp > 0) {
      ctx.strokeStyle = getColor('--accent'); ctx.lineWidth = 3.5;
      const ex = lerp(pb.x, pa.x, state.hyp), ey = lerp(pb.y, pa.y, state.hyp);
      line(pb.x, pb.y, ex, ey);
      if (state.hyp > 0.99) {
        ctx.fillStyle = getColor('--accent'); ctx.font = 'bold 14px monospace';
        ctx.fillText('d = ' + fmt(dist, 2), (pa.x+pb.x)/2 + 8, (pa.y+pb.y)/2 - 8);
      }
    }

    if (state.pts > 0.5) { dot(pa, getColor('--a'), 'A'); dot(pb, getColor('--b'), 'B'); }
  }

  const steps = [
    { anim: ['pts'], html: () => \`
      <div class="step-label">The two points</div>
      <div class="line big"><span class="vA">A = [3, 1]</span></div>
      <div class="line big"><span class="vB">B = [2, 4]</span></div>
      <div class="line" style="color:var(--muted)">Euclidean distance is the length of the straight line between them.</div>\` },
    { anim: ['legs'], html: () => \`
      <div class="step-label">Step 1 — coordinate differences</div>
      <div class="line"><span class="vA">Δx = A₁ − B₁ = 3 − 2 = \${dx}</span></div>
      <div class="line"><span class="vB">Δy = A₂ − B₂ = 1 − 4 = \${dy}</span></div>
      <div class="line" style="color:var(--muted)">These are the two legs of a right triangle.</div>\` },
    { anim: ['hyp'], html: () => \`
      <div class="step-label">Step 2 — Pythagoras</div>
      <div class="line">d² = Δx² + Δy² = \${dx*dx} + \${dy*dy} = \${dx*dx + dy*dy}</div>
      <div class="line big res">d = √\${dx*dx + dy*dy} = \${fmt(dist, 3)}</div>
      <div class="line" style="color:var(--muted)">The distance is just the hypotenuse — the same √(Δx²+Δy²) Pythagoras gives.</div>\` },
    { anim: [], html: () => \`
      <div class="step-label">Distance vs. cosine</div>
      <div class="line">Euclidean d = <span class="res">\${fmt(dist,3)}</span> &nbsp;·&nbsp; cosine = <span class="res">0.707</span> (45°)</div>
      <div class="line" style="color:var(--muted)">Same two vectors: distance cares about how far apart the tips are; cosine cares only about the angle. A long and a short vector pointing the same way have cosine 1 but a large distance.</div>\` },
  ];

  let cur = -1, playing = false, raf = null;

  function animateTo(targets, done) {
    const start = performance.now(), dur = 700, from = { ...state };
    function frame(now) {
      const t = Math.min(1, (now - start)/dur), e = easeInOut(t);
      targets.forEach(k => state[k] = lerp(from[k] || 0, 1, e));
      render();
      if (t < 1) raf = requestAnimationFrame(frame); else if (done) done();
    }
    raf = requestAnimationFrame(frame);
  }

  function nextStep(auto) {
    if (cur >= steps.length - 1) { playing = false; return; }
    cur++;
    mathEl.innerHTML = steps[cur].html();
    const anim = steps[cur].anim;
    if (anim.length) animateTo(anim, () => { if (auto && playing) setTimeout(() => nextStep(true), 1000); });
    else if (auto && playing) setTimeout(() => nextStep(true), 1500);
  }

  function reset() {
    cancelAnimationFrame(raf); playing = false; cur = -1;
    state = { pts: 0, legs: 0, hyp: 0 };
    render();
    mathEl.innerHTML = \`<div class="step-label">Ready</div><div class="line" style="color:var(--muted)">Press Play to measure the straight-line distance.</div>\`;
  }

  function eucRebuild(target) {
    cancelAnimationFrame(raf);
    state = { pts: 0, legs: 0, hyp: 0 };
    for (let i = 0; i <= target; i++) steps[i].anim.forEach(k => state[k] = 1);
    render(); mathEl.innerHTML = steps[target].html(); cur = target;
  }
  function eucPause() { playing = false; cancelAnimationFrame(raf); }
  function eucBack() { eucPause(); if (cur > 0) eucRebuild(cur - 1); else reset(); }

  document.getElementById('eucPlay').onclick = () => { if (cur >= steps.length - 1) reset(); playing = true; nextStep(true); };
  document.getElementById('eucPause').onclick = eucPause;
  document.getElementById('eucBack').onclick = eucBack;
  document.getElementById('eucStep').onclick = () => { playing = false; nextStep(false); };
  document.getElementById('eucReset').onclick = reset;

  reset();
})();
<\/script>
</body>
</html>
`,Ph=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Matrix multiplication animation</title>
    <link rel="stylesheet" href="theme.css">
    <script src="components.js"><\/script>
  <link rel="stylesheet" href="diagram.css">
</head>
<body>
  <div class="wrap">
    <site-nav current="matrix_multiplication_animation.html"></site-nav>
    <h1>Matrix multiplication: A(3x5) x B(5x3) = C(3x3)</h1>
    <p class="sub">
      Matrix B starts as 5x3, so each output cell is one row of A dotted with one column of B.
      The active row is blue, the active column is orange, and the current calculation is written
      inside the matching C cell.
    </p>
    <div class="stage">
      <svg id="scene" viewBox="0 0 1080 720" role="img" aria-label="Animated matrix multiplication visualization"></svg>
      <control-bar prefix="mm"></control-bar>
    </div>
  </div>

  <script>
    const ns = "http://www.w3.org/2000/svg";

    // ---- Shared professional math typesetting (markup -> SVG tspans / HTML) ----
    // Markup: _x or _{xyz} = subscript, ^x or ^{xyz} = superscript.
    function mathTokens(text) {
      const tokens = [];
      let buffer = "";
      let i = 0;
      const flush = () => { if (buffer) { tokens.push({text: buffer, shift: null}); buffer = ""; } };
      while (i < text.length) {
        const ch = text[i];
        if (ch === "_" || ch === "^") {
          flush();
          const shift = ch === "_" ? "sub" : "super";
          i += 1;
          let content;
          if (text[i] === "{") {
            const close = text.indexOf("}", i);
            content = text.slice(i + 1, close);
            i = close + 1;
          } else {
            content = text[i] || "";
            i += 1;
          }
          tokens.push({text: content, shift});
        } else {
          buffer += ch;
          i += 1;
        }
      }
      flush();
      return tokens;
    }

    function mathTypeset(node, markup, centered) {
      while (node.firstChild) node.removeChild(node.firstChild);
      const baseX = node.getAttribute("x");
      String(markup).split("\\n").forEach((line, lineIndex) => {
        const tokens = mathTokens(line);
        tokens.forEach((token, tokenIndex) => {
          const tspan = document.createElementNS(ns, "tspan");
          if (!centered && tokenIndex === 0) {
            tspan.setAttribute("x", baseX);
            tspan.setAttribute("dy", lineIndex === 0 ? "0" : "27");
          }
          if (token.shift) {
            tspan.setAttribute("baseline-shift", token.shift);
            tspan.setAttribute("font-size", "0.7em");
          }
          tspan.textContent = token.text;
          node.appendChild(tspan);
        });
      });
    }

    function mathHtml(markup) {
      const html = mathTokens(String(markup)).map((token) => {
        const escaped = token.text
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (token.shift === "sub") return "<sub>" + escaped + "</sub>";
        if (token.shift === "super") return "<sup>" + escaped + "</sup>";
        return escaped;
      }).join("");
      return '<span class="eq">' + html + "</span>";
    }


    function nnWrapText(text, maxChars) {
      const words = String(text).split(" ");
      const lines = [];
      let current = "";
      words.forEach((word) => {
        const next = current ? current + " " + word : word;
        if (next.length > maxChars && current) {
          lines.push(current);
          current = word;
        } else {
          current = next;
        }
      });
      if (current) lines.push(current);
      return lines;
    }
    const A = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [2, 4, 6, 8, 10]];
    const B = [[1, 4, 3], [0, 1, 5], [2, 0, 1], [1, 2, 0], [3, 1, 2]];
    const C = [[26, 19, 26], [61, 59, 81], [52, 38, 52]];
    const steps = [{row:0, col:0, result:26, aValues:[1, 2, 3, 4, 5], bValues:[1, 0, 2, 1, 3], products:[1, 0, 6, 4, 15], expression:'1x1 + 2x0 + 3x2 + 4x1 + 5x3'}, {row:0, col:1, result:19, aValues:[1, 2, 3, 4, 5], bValues:[4, 1, 0, 2, 1], products:[4, 2, 0, 8, 5], expression:'1x4 + 2x1 + 3x0 + 4x2 + 5x1'}, {row:0, col:2, result:26, aValues:[1, 2, 3, 4, 5], bValues:[3, 5, 1, 0, 2], products:[3, 10, 3, 0, 10], expression:'1x3 + 2x5 + 3x1 + 4x0 + 5x2'}, {row:1, col:0, result:61, aValues:[6, 7, 8, 9, 10], bValues:[1, 0, 2, 1, 3], products:[6, 0, 16, 9, 30], expression:'6x1 + 7x0 + 8x2 + 9x1 + 10x3'}, {row:1, col:1, result:59, aValues:[6, 7, 8, 9, 10], bValues:[4, 1, 0, 2, 1], products:[24, 7, 0, 18, 10], expression:'6x4 + 7x1 + 8x0 + 9x2 + 10x1'}, {row:1, col:2, result:81, aValues:[6, 7, 8, 9, 10], bValues:[3, 5, 1, 0, 2], products:[18, 35, 8, 0, 20], expression:'6x3 + 7x5 + 8x1 + 9x0 + 10x2'}, {row:2, col:0, result:52, aValues:[2, 4, 6, 8, 10], bValues:[1, 0, 2, 1, 3], products:[2, 0, 12, 8, 30], expression:'2x1 + 4x0 + 6x2 + 8x1 + 10x3'}, {row:2, col:1, result:38, aValues:[2, 4, 6, 8, 10], bValues:[4, 1, 0, 2, 1], products:[8, 4, 0, 16, 10], expression:'2x4 + 4x1 + 6x0 + 8x2 + 10x1'}, {row:2, col:2, result:52, aValues:[2, 4, 6, 8, 10], bValues:[3, 5, 1, 0, 2], products:[6, 20, 6, 0, 20], expression:'2x3 + 4x5 + 6x1 + 8x0 + 10x2'}];
    const svg = document.getElementById("scene");
    const mmPlay = document.getElementById("mmPlay");
    const mmPause = document.getElementById("mmPause");
    const mmBack = document.getElementById("mmBack");
    const mmStep = document.getElementById("mmStep");
    const mmReset = document.getElementById("mmReset");
    const cell = 48;
    const gap = 5;
    const cCellW = 250;
    const cCellH = 82;
    const frameMs = 1750;

    let timer = null;
    let playing = true;
    let stepIndex = 0;

    function add(tag, attrs, text) {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
      if (text !== undefined) node.textContent = text;
      svg.appendChild(node);
      return node;
    }

    function drawMatrix(matrix, x, y, label, options) {
      add("text", {x, y: y - 22, class: "label"}, label);
      if (options && options.subtitle) {
        add("text", {x, y: y - 3, class: "small-label"}, options.subtitle);
      }
      matrix.forEach((row, r) => {
        row.forEach((value, c) => {
          const id = options.prefix + "-" + r + "-" + c;
          add("rect", {
            id,
            class: "cell",
            x: x + c * (cell + gap),
            y: y + r * (cell + gap),
            width: cell,
            height: cell
          });
          add("text", {
            id: id + "-text",
            class: "cell-text",
            x: x + c * (cell + gap) + cell / 2,
            y: y + r * (cell + gap) + cell / 2
          }, value === null ? "" : value);
        });
      });
    }

    function drawResultMatrix(x, y) {
      add("text", {x, y: y - 22, class: "label"}, "C");
      add("text", {x, y: y - 3, class: "small-label"}, "3 rows x 3 columns");
      for (let r = 0; r < 3; r += 1) {
        for (let c = 0; c < 3; c += 1) {
          const id = "c-" + r + "-" + c;
          add("rect", {
            id,
            class: "cell",
            x: x + c * (cCellW + gap),
            y: y + r * (cCellH + gap),
            width: cCellW,
            height: cCellH
          });
          add("text", {
            id: id + "-text",
            class: "cell-result",
            x: x + c * (cCellW + gap) + cCellW / 2,
            y: y + r * (cCellH + gap) + cCellH / 2
          }, "");
        }
      }
    }

    function clearNode(node) {
      while (node.firstChild) node.removeChild(node.firstChild);
    }

    function writeFormulaInCell(step) {
      const text = document.getElementById("c-" + step.row + "-" + step.col + "-text");
      text.setAttribute("class", "cell-formula");
      text.setAttribute("y", 0);
      clearNode(text);

      const x = 55 + step.col * (cCellW + gap) + cCellW / 2;
      const y = 365 + step.row * (cCellH + gap) + cCellH / 2 - 10;
      text.setAttribute("x", x);

      const firstLine = document.createElementNS(ns, "tspan");
      firstLine.setAttribute("x", x);
      firstLine.setAttribute("y", y);
      firstLine.setAttribute("class", "black");
      firstLine.textContent = "C[" + (step.row + 1) + "," + (step.col + 1) + "] = ";
      text.appendChild(firstLine);

      step.aValues.forEach((aValue, index) => {
        const aPart = document.createElementNS(ns, "tspan");
        aPart.setAttribute("class", "blue");
        aPart.textContent = aValue;
        text.appendChild(aPart);

        const xPart = document.createElementNS(ns, "tspan");
        xPart.setAttribute("class", "black");
        xPart.textContent = "x";
        text.appendChild(xPart);

        const bPart = document.createElementNS(ns, "tspan");
        bPart.setAttribute("class", "orange");
        bPart.textContent = step.bValues[index];
        text.appendChild(bPart);

        if (index < step.aValues.length - 1) {
          const plus = document.createElementNS(ns, "tspan");
          plus.setAttribute("class", "black");
          plus.textContent = " + ";
          text.appendChild(plus);
        }
      });

      const secondLine = document.createElementNS(ns, "tspan");
      secondLine.setAttribute("x", x);
      secondLine.setAttribute("dy", "22");
      secondLine.setAttribute("class", "black");
      secondLine.textContent = "= " + step.result;
      text.appendChild(secondLine);
    }

    function drawStatic() {
      svg.innerHTML = "";
      drawMatrix(A, 55, 92, "A", {prefix: "a", subtitle: "3 rows x 5 columns"});
      add("text", {x: 350, y: 174, class: "label"}, "x");
      drawMatrix(B, 410, 60, "B", {prefix: "b", subtitle: "5 rows x 3 columns"});
      add("text", {x: 620, y: 174, class: "label"}, "=");
      drawResultMatrix(55, 365);
    }

    function allCells(prefix, rows, cols) {
      const nodes = [];
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          nodes.push(document.getElementById(prefix + "-" + r + "-" + c));
        }
      }
      return nodes;
    }

    function resetHighlights() {
      [...allCells("a", 3, 5), ...allCells("b", 5, 3), ...allCells("c", 3, 3)]
        .forEach((node) => {
          node.setAttribute("class", "cell");
        });
    }

    function showCompletedResults(currentIndex) {
      steps.forEach((step, index) => {
        const text = document.getElementById("c-" + step.row + "-" + step.col + "-text");
        clearNode(text);
        if (index < currentIndex) {
          text.setAttribute("class", "cell-result");
          text.setAttribute("x", 55 + step.col * (cCellW + gap) + cCellW / 2);
          text.setAttribute("y", 365 + step.row * (cCellH + gap) + cCellH / 2);
          text.textContent = step.result;
          document.getElementById("c-" + step.row + "-" + step.col).setAttribute("class", "cell highlight-c");
        } else {
          text.textContent = "";
        }
      });
    }

    function renderStep() {
      resetHighlights();
      showCompletedResults(stepIndex);

      if (stepIndex >= steps.length) {
        return;
      }

      const step = steps[stepIndex];
      for (let k = 0; k < 5; k += 1) {
        document.getElementById("a-" + step.row + "-" + k).setAttribute("class", "cell highlight-a");
        document.getElementById("b-" + k + "-" + step.col).setAttribute("class", "cell highlight-b");
      }

      document.getElementById("c-" + step.row + "-" + step.col).setAttribute("class", "cell highlight-c");
      writeFormulaInCell(step);
    }

    function next() {
      renderStep();
      stepIndex += 1;
      if (stepIndex > steps.length) stepIndex = 0;
    }

    function play() {
      stop();
      timer = setInterval(next, frameMs);
      playing = true;
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
      playing = false;
    }

    function renderSpecificStep(index) {
      const n = steps.length + 1;
      stepIndex = (index + n) % n;
      renderStep();
    }

    mmPlay.addEventListener("click", play);
    mmPause.addEventListener("click", stop);
    mmStep.addEventListener("click", () => { stop(); next(); });
    mmBack.addEventListener("click", () => {
      stop();
      renderSpecificStep(stepIndex - 2);
      stepIndex = (stepIndex + 1) % (steps.length + 1);
    });
    mmReset.addEventListener("click", () => { stop(); stepIndex = 0; next(); });

    drawStatic();
    next();
    play();


  <\/script>
</body>
</html>
`,t2=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Softmax — Animated</title>
<link rel="stylesheet" href="theme.css">
<script src="components.js"><\/script>
<style>
  :root { --a: #e05a2f; --b: #0f9b8e; }
  .mono { font-family:"SF Mono",Menlo,Consolas,monospace; }
  .card { margin-bottom: 18px; }
  .formula { font-family:"SF Mono",Menlo,Consolas,monospace; color:var(--muted); font-size:14px; margin:0 0 4px; }
  .formula .hl { color:var(--accent); }

  .controls { margin: 4px 0 20px; }
  .temp { display:flex; align-items:center; gap:10px; background:var(--panel-2); border:1px solid var(--border);
    border-radius:10px; padding:8px 14px; margin-left:auto; flex-wrap:wrap; }
  .temp label { font-size:13px; color:var(--muted); }
  .temp input[type=range] { width:180px; accent-color:var(--accent); }
  .temp .tval { font-family:monospace; color:var(--accent); min-width:38px; }

  /* the three-stage grid: label | logit | exp | prob */
  .grid { display:grid; grid-template-columns: 84px 96px 1fr 1fr; gap:10px 16px; align-items:center; }
  .head { font-size:12px; color:var(--muted); text-transform:uppercase; letter-spacing:0.6px; padding-bottom:4px; }
  .cls { font-family:monospace; font-size:14px; color:var(--ink); }
  .logit { font-family:monospace; font-size:14px; color:var(--b); }
  .barcell { background:var(--panel-2); border:1px solid var(--border); border-radius:7px; height:30px;
    position:relative; overflow:hidden; }
  .barfill { position:absolute; left:0; top:0; bottom:0; width:0; border-radius:7px; transition:width .6s ease; }
  .barfill.exp { background:var(--accent); }
  .barfill.prob { background:var(--b); }
  .barfill.win { background:var(--gold); }
  .barval { position:absolute; right:8px; top:0; bottom:0; display:flex; align-items:center;
    font-family:monospace; font-size:12px; color:var(--ink); }
  .row-dim .barfill { opacity:0.25; } .row-dim .logit, .row-dim .cls { opacity:0.4; }

  .panel { font-family:"SF Mono",Menlo,Consolas,monospace; background:var(--panel-2); border-radius:12px;
    padding:16px 18px; font-size:14px; margin-top:18px; min-height:96px; }
  .panel .step-label { color:var(--accent); font-size:12px; text-transform:uppercase; letter-spacing:1px; }
  .panel .line { margin:5px 0; }
  .panel .res { color:var(--good); }
  .sumtag { font-family:monospace; font-size:13px; color:var(--muted); margin-top:10px; }
  .sumtag .v { color:var(--accent); }
  .probsum { color:var(--good); }
</style>
</head>
<body>
<div class="wrap">
  <site-nav current="softmax.html"></site-nav>
  <h1>Softmax, step by step</h1>
  <p class="sub">
    Softmax turns a vector of raw scores (logits) into a probability distribution that sums to 1.
    Bigger logit → bigger probability, but every class keeps a non-zero share.
  </p>

  <div class="card">
    <p class="formula">
      softmax(z)<sub>i</sub> = <span class="hl">e<sup>z<sub>i</sub>/T</sup></span> / Σ<sub>j</sub> e<sup>z<sub>j</sub>/T</sup>
      &nbsp;&nbsp;— T is the temperature
    </p>
    <div class="controls">
      <control-bar></control-bar>
      <div class="temp">
        <label>Temperature T</label>
        <input type="range" id="temp" min="0.2" max="3" step="0.05" value="1">
        <span class="tval" id="tval">1.00</span>
      </div>
    </div>

    <div class="grid" id="grid">
      <div class="head">class</div>
      <div class="head">logit z</div>
      <div class="head">e^(z/T)</div>
      <div class="head">probability</div>
    </div>

    <div class="sumtag" id="sumtag"></div>
    <div class="panel" id="panel"></div>
  </div>
</div>

<script>
const CLASSES = ['cat','dog','bird','fish','frog'];
const LOGITS  = [3.2, 2.1, 0.8, -0.4, 1.5];

const fmt = (x,d=2)=>x.toFixed(d);
function expScaled(T){ return LOGITS.map(z=>Math.exp(z/T)); }
function probs(T){ const e=expScaled(T); const s=e.reduce((a,b)=>a+b,0); return e.map(x=>x/s); }

let temperature = 1.0;

// build rows
const grid = document.getElementById('grid');
CLASSES.forEach((c,i)=>{
  const cls=document.createElement('div'); cls.className='cls'; cls.id='cls-'+i; cls.textContent=c;
  const lg=document.createElement('div'); lg.className='logit'; lg.id='lg-'+i; lg.textContent=fmt(LOGITS[i],1);
  const ex=document.createElement('div'); ex.className='barcell';
  ex.innerHTML=\`<div class="barfill exp" id="ef-\${i}"></div><div class="barval" id="ev-\${i}"></div>\`;
  const pr=document.createElement('div'); pr.className='barcell';
  pr.innerHTML=\`<div class="barfill prob" id="pf-\${i}"></div><div class="barval" id="pv-\${i}"></div>\`;
  [cls,lg,ex,pr].forEach(el=>grid.appendChild(el));
});

const panel=document.getElementById('panel');
const sumtag=document.getElementById('sumtag');

function setExpBars(show, animate){
  const e=expScaled(temperature); const max=Math.max(...e);
  CLASSES.forEach((_,i)=>{
    const f=document.getElementById('ef-'+i), v=document.getElementById('ev-'+i);
    if(!animate) f.style.transition='none'; else f.style.transition='';
    f.style.width = show ? (e[i]/max*100)+'%' : '0%';
    v.textContent = show ? fmt(e[i],2) : '';
  });
}
function setProbBars(show, animate){
  const p=probs(temperature); const max=Math.max(...p); const win=p.indexOf(max);
  CLASSES.forEach((_,i)=>{
    const f=document.getElementById('pf-'+i), v=document.getElementById('pv-'+i);
    f.classList.toggle('win', show && i===win);
    if(!animate) f.style.transition='none'; else f.style.transition='';
    f.style.width = show ? (p[i]/max*100)+'%' : '0%';
    v.textContent = show ? (p[i]*100).toFixed(1)+'%' : '';
  });
  if(show){
    sumtag.innerHTML = \`Σ exp = <span class="v">\${expScaled(temperature).reduce((a,b)=>a+b,0).toFixed(2)}</span> &nbsp;·&nbsp; <span class="probsum">probabilities sum to 100%</span>\`;
  }
}

/* ---- guided steps ---- */
const steps = [
  ()=>{ // logits only
    setExpBars(false,false); setProbBars(false,false); sumtag.innerHTML='';
    panel.innerHTML=\`<div class="step-label">Step 0 — raw logits</div>
      <div class="line">The model outputs one unbounded score per class: [\${LOGITS.join(', ')}].</div>
      <div class="line" style="color:var(--muted)">They can be negative and don't sum to anything meaningful yet.</div>\`;
  },
  ()=>{ // divide by T
    panel.innerHTML=\`<div class="step-label">Step 1 — divide by temperature</div>
      <div class="line">Each logit is divided by T = \${fmt(temperature)} before exponentiating.</div>
      <div class="line" style="color:var(--muted)">T &lt; 1 exaggerates differences (sharper); T &gt; 1 evens them out (flatter).</div>\`;
  },
  ()=>{ // exponentiate
    setExpBars(true,true);
    panel.innerHTML=\`<div class="step-label">Step 2 — exponentiate</div>
      <div class="line">e^(z/T) makes every value positive and amplifies the largest logits.</div>
      <div class="line">e.g. cat: e^(\${LOGITS[0]}/\${fmt(temperature)}) = <span class="res">\${Math.exp(LOGITS[0]/temperature).toFixed(2)}</span></div>\`;
  },
  ()=>{ // normalize
    setExpBars(true,false); setProbBars(true,true);
    const p=probs(temperature); const win=p.indexOf(Math.max(...p));
    panel.innerHTML=\`<div class="step-label">Step 3 — normalize</div>
      <div class="line">Divide each e^(z/T) by their sum so the values become probabilities.</div>
      <div class="line">winner: <span class="res">\${CLASSES[win]} at \${(p[win]*100).toFixed(1)}%</span> (T = \${fmt(temperature)})</div>
      <div class="line" style="color:var(--muted)">Drag the temperature slider to watch the distribution sharpen or flatten.</div>\`;
  },
];

let cur=0;
let smTimer=null;
function smShow(i){
  cur = Math.max(0, Math.min(steps.length - 1, i));
  setExpBars(cur >= 2, false);
  setProbBars(cur >= 3, false);
  if (cur < 2) document.getElementById('sumtag').innerHTML = '';
  steps[cur]();
}
function smStop(){ if (smTimer) clearTimeout(smTimer); smTimer = null; }
function smPlay(){
  smStop();
  if (cur >= steps.length - 1) smShow(0);
  const tick = () => {
    if (cur >= steps.length - 1) { smStop(); return; }
    smShow(cur + 1);
    smTimer = setTimeout(tick, 1100);
  };
  smTimer = setTimeout(tick, 800);
}
function reset(){ smStop(); smShow(0); }
document.getElementById('play').onclick = smPlay;
document.getElementById('pause').onclick = smStop;
document.getElementById('back').onclick = () => { smStop(); smShow(cur - 1); };
document.getElementById('step').onclick = () => { smStop(); smShow(cur + 1); };
document.getElementById('reset').onclick = reset;

document.getElementById('temp').addEventListener('input', e=>{
  temperature=parseFloat(e.target.value);
  document.getElementById('tval').textContent=fmt(temperature);
  // live-update whatever is currently shown
  if(cur>=2) setExpBars(true,false);
  if(cur>=3) setProbBars(true,false);
  if(cur>=2) steps[cur]();  // refresh panel text with new T
});

reset();
<\/script>
</body>
</html>
`,e2=`<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Neural network training animation</title>
  <link rel="stylesheet" href="theme.css">
  <script src="components.js"><\/script>
  <link rel="stylesheet" href="diagram.css">
  <style>
    /* Larger, readable text for the merged detail panel (this page only). */
    .nn-title { font-size: 25px; }
    .nn-formula { font-size: 20px; }
    .formula-title { font-size: 18px; }
    .status { font-size: 17px; }
  </style>
</head>

<body>
  <div class="wrap">
      <site-nav current="neural_network_animation.html"></site-nav>
      <h1>Neural network training: forward pass and backpropagation</h1>
      <p class="sub">
        The training mini-batch uses X(3x7): 3 features across 7 examples.
        The expected output is Y(5x7): 5 soft target values for each example, matching the 5 output nodes.
        Hidden layers use ReLU, the final layer uses sigmoid, and the animation runs two training passes.
      </p>
      <div class="stage">
        <svg id="nnScene" viewBox="25 0 1030 480" role="img"
          aria-label="Animated neural network training visualization"></svg>
        <control-bar prefix="nn"></control-bar>
        <div id="nnExpandedPanel" class="network-detail-stage" aria-live="polite"></div>
      </div>

      <section class="reference">
        <h1>Equations for cost, gradients, and parameter updates</h1>
        <p class="sub">
          Here m = 7 examples and L = 5 trainable layers. The output layer uses sigmoid with
          binary cross-entropy, so its error simplifies to <span class="eq">dZ<sup>[L]</sup> = A<sup>[L]</sup> −
            Y</span>.
        </p>
        <p class="sub">Notation: <span class="eq">⊙</span> denotes element-wise (Hadamard) multiplication, <span
            class="eq">(·)<sup>T</sup></span> denotes the transpose, and juxtaposition <span class="eq">(W A)</span>
          denotes matrix multiplication.</p>
        <div class="formula-grid">
          <article class="formula-card">
            <h3>Cost J (binary cross-entropy)</h3>
            <div class="math-formula"><span class="eq">J = − (1/m) Σ<sub>i=1</sub><sup>m</sup> [ y<sup>(i)</sup> log
                a<sup>[L](i)</sup> + (1 − y<sup>(i)</sup>) log(1 − a<sup>[L](i)</sup>) ]</span></div>
          </article>
          <article class="formula-card">
            <h3>Forward propagation</h3>
            <div class="math-formula"><span class="eq">A<sup>[l]</sup> = g( W<sup>[l]</sup> A<sup>[l-1]</sup> +
                b<sup>[l]</sup> )</span></div>
          </article>
          <article class="formula-card">
            <h3>Sigmoid function</h3>
            <div class="math-formula"><span class="eq">σ(z) = 1 / (1 + exp(−z))</span></div>
          </article>
          <article class="formula-card">
            <h3>Weight derivative</h3>
            <div class="math-formula"><span class="eq">∂J / ∂W<sup>[l]</sup> = (1/m) dZ<sup>[l]</sup>
                (A<sup>[l-1]</sup>)<sup>T</sup></span></div>
          </article>
          <article class="formula-card">
            <h3>Bias derivative</h3>
            <div class="math-formula"><span class="eq">∂J / ∂b<sup>[l]</sup> = (1/m) Σ<sub>cols</sub>
                dZ<sup>[l]</sup></span></div>
          </article>
        </div>
        <div class="equation-table-wrap">
          <table class="equation-table">
            <tr>
              <th><span class="eq">Forward, each layer</span></th>
              <td><span class="eq">Z<sup>[l]</sup> = W<sup>[l]</sup> A<sup>[l-1]</sup> + b<sup>[l]</sup></span></td>
            </tr>
            <tr>
              <th><span class="eq">Hidden activation</span></th>
              <td><span class="eq">A<sup>[l]</sup> = ReLU(Z<sup>[l]</sup>) = max(0, Z<sup>[l]</sup>)</span></td>
            </tr>
            <tr>
              <th><span class="eq">Output activation</span></th>
              <td><span class="eq">A<sup>[L]</sup> = σ(Z<sup>[L]</sup>) = 1 / (1 + exp(−Z<sup>[L]</sup>))</span></td>
            </tr>
            <tr>
              <th><span class="eq">Loss, one example</span></th>
              <td><span class="eq">L(ŷ, y) = − Σ<sub>k</sub> [ y<sub>k</sub> log ŷ<sub>k</sub> + (1 − y<sub>k</sub>)
                  log(1 − ŷ<sub>k</sub>) ]</span></td>
            </tr>
            <tr>
              <th><span class="eq">Cost, mini-batch</span></th>
              <td><span class="eq">J = (1/m) Σ<sub>i</sub> L( ŷ<sup>(i)</sup>, y<sup>(i)</sup> )</span></td>
            </tr>
            <tr>
              <th><span class="eq">Output-layer error</span></th>
              <td><span class="eq">dZ<sup>[L]</sup> = A<sup>[L]</sup> − Y</span></td>
            </tr>
            <tr>
              <th><span class="eq">Weight gradient</span></th>
              <td><span class="eq">dW<sup>[l]</sup> = (1/m) dZ<sup>[l]</sup> (A<sup>[l-1]</sup>)<sup>T</sup></span></td>
            </tr>
            <tr>
              <th><span class="eq">Bias gradient</span></th>
              <td><span class="eq">db<sup>[l]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[l]</sup></span></td>
            </tr>
            <tr>
              <th><span class="eq">Backprop to previous activation</span></th>
              <td><span class="eq">dA<sup>[l-1]</sup> = (W<sup>[l]</sup>)<sup>T</sup> dZ<sup>[l]</sup></span></td>
            </tr>
            <tr>
              <th><span class="eq">ReLU hidden error</span></th>
              <td><span class="eq">dZ<sup>[l]</sup> = dA<sup>[l]</sup> ⊙ 1{ Z<sup>[l]</sup> &gt; 0 }</span></td>
            </tr>
            <tr>
              <th><span class="eq">Gradient descent</span></th>
              <td><span class="eq">W<sup>[l]</sup> := W<sup>[l]</sup> − α dW<sup>[l]</sup><br>b<sup>[l]</sup> :=
                  b<sup>[l]</sup> − α db<sup>[l]</sup></span></td>
            </tr>
          </table>
        </div>
        <h2 class="subhead">Backpropagation, layer by layer (L = 5)</h2>
        <div class="equation-table-wrap">
          <table class="equation-table">
            <tr>
              <th><span class="eq">Layer 5 (output, sigmoid)</span></th>
              <td><span class="eq">dZ<sup>[5]</sup> = A<sup>[5]</sup> − Y<br>dW<sup>[5]</sup> = (1/m) dZ<sup>[5]</sup>
                  (A<sup>[4]</sup>)<sup>T</sup><br>db<sup>[5]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[5]</sup></span>
              </td>
            </tr>
            <tr>
              <th><span class="eq">Layer 4 (hidden, ReLU)</span></th>
              <td><span class="eq">dA<sup>[4]</sup> = (W<sup>[5]</sup>)<sup>T</sup> dZ<sup>[5]</sup><br>dZ<sup>[4]</sup>
                  = dA<sup>[4]</sup> ⊙ 1{ Z<sup>[4]</sup> &gt; 0 }<br>dW<sup>[4]</sup> = (1/m) dZ<sup>[4]</sup>
                  (A<sup>[3]</sup>)<sup>T</sup><br>db<sup>[4]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[4]</sup></span>
              </td>
            </tr>
            <tr>
              <th><span class="eq">Layer 3 (hidden, ReLU)</span></th>
              <td><span class="eq">dA<sup>[3]</sup> = (W<sup>[4]</sup>)<sup>T</sup> dZ<sup>[4]</sup><br>dZ<sup>[3]</sup>
                  = dA<sup>[3]</sup> ⊙ 1{ Z<sup>[3]</sup> &gt; 0 }<br>dW<sup>[3]</sup> = (1/m) dZ<sup>[3]</sup>
                  (A<sup>[2]</sup>)<sup>T</sup><br>db<sup>[3]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[3]</sup></span>
              </td>
            </tr>
            <tr>
              <th><span class="eq">Layer 2 (hidden, ReLU)</span></th>
              <td><span class="eq">dA<sup>[2]</sup> = (W<sup>[3]</sup>)<sup>T</sup> dZ<sup>[3]</sup><br>dZ<sup>[2]</sup>
                  = dA<sup>[2]</sup> ⊙ 1{ Z<sup>[2]</sup> &gt; 0 }<br>dW<sup>[2]</sup> = (1/m) dZ<sup>[2]</sup>
                  (A<sup>[1]</sup>)<sup>T</sup><br>db<sup>[2]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[2]</sup></span>
              </td>
            </tr>
            <tr>
              <th><span class="eq">Layer 1 (hidden, ReLU)</span></th>
              <td><span class="eq">dA<sup>[1]</sup> = (W<sup>[2]</sup>)<sup>T</sup> dZ<sup>[2]</sup><br>dZ<sup>[1]</sup>
                  = dA<sup>[1]</sup> ⊙ 1{ Z<sup>[1]</sup> &gt; 0 }<br>dW<sup>[1]</sup> = (1/m) dZ<sup>[1]</sup>
                  (X)<sup>T</sup><br>db<sup>[1]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[1]</sup></span></td>
            </tr>
          </table>
        </div>
        <h2 class="subhead">Recursive backprop pattern (any hidden layer)</h2>
        <div class="equation-table-wrap">
          <table class="equation-table">
            <tr>
              <th><span class="eq">Hidden-layer error</span></th>
              <td><span class="eq">dZ<sup>[l]</sup> = ( (W<sup>[l+1]</sup>)<sup>T</sup> dZ<sup>[l+1]</sup> ) ⊙ 1{
                  Z<sup>[l]</sup> &gt; 0 }</span></td>
            </tr>
            <tr>
              <th><span class="eq">Then its gradients</span></th>
              <td><span class="eq">dW<sup>[l]</sup> = (1/m) dZ<sup>[l]</sup>
                  (A<sup>[l-1]</sup>)<sup>T</sup><br>db<sup>[l]</sup> = (1/m) Σ<sub>cols</sub> dZ<sup>[l]</sup></span>
              </td>
            </tr>
          </table>
        </div>
      </section>


      <section class="reference">
        <h1>Weights, biases, and gradients from the two passes</h1>
        <p class="sub">
          Weights and biases are shown after pass 2. Gradients are shown separately for pass 1
          and pass 2. Values are rounded to 3 decimals.
        </p>
        <div class="matrix-grid">
          <article class="matrix-card summary-card">
            <h3>Pass 1 summary</h3>
            <p>Cost: 3.468</p>
            <p>A5 example 1: [0.462, 0.52, 0.503, 0.47, 0.521]</p>
          </article>
          <article class="matrix-card summary-card">
            <h3>Pass 2 summary</h3>
            <p>Cost: 3.466</p>
            <p>A5 example 1: [0.466, 0.52, 0.505, 0.471, 0.522]</p>
          </article>
          <article class="matrix-card">
            <h3>W1 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.245</td>
                  <td>-0.485</td>
                  <td>0.21</td>
                </tr>
                <tr>
                  <td>-0.593</td>
                  <td>0.05</td>
                  <td>-0.186</td>
                </tr>
                <tr>
                  <td>-0.614</td>
                  <td>0.01</td>
                  <td>-0.642</td>
                </tr>
                <tr>
                  <td>-0.092</td>
                  <td>-0.597</td>
                  <td>-0.568</td>
                </tr>
                <tr>
                  <td>-0.105</td>
                  <td>0.455</td>
                  <td>-0.522</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>b1 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.08</td>
                </tr>
                <tr>
                  <td>0.08</td>
                </tr>
                <tr>
                  <td>0.08</td>
                </tr>
                <tr>
                  <td>0.08</td>
                </tr>
                <tr>
                  <td>0.081</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>W2 <span>(3, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.298</td>
                  <td>0.137</td>
                  <td>0.481</td>
                  <td>0.083</td>
                  <td>-0.112</td>
                </tr>
                <tr>
                  <td>0.512</td>
                  <td>-0.488</td>
                  <td>0.385</td>
                  <td>-0.226</td>
                  <td>-0.382</td>
                </tr>
                <tr>
                  <td>-0.411</td>
                  <td>-0.206</td>
                  <td>0.34</td>
                  <td>-0.343</td>
                  <td>0.089</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>b2 <span>(3, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.079</td>
                </tr>
                <tr>
                  <td>0.081</td>
                </tr>
                <tr>
                  <td>0.081</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>W3 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.193</td>
                  <td>-0.177</td>
                  <td>0.066</td>
                </tr>
                <tr>
                  <td>-0.607</td>
                  <td>-0.611</td>
                  <td>-0.408</td>
                </tr>
                <tr>
                  <td>0.25</td>
                  <td>-0.101</td>
                  <td>-0.258</td>
                </tr>
                <tr>
                  <td>0.119</td>
                  <td>-0.065</td>
                  <td>-0.279</td>
                </tr>
                <tr>
                  <td>0.409</td>
                  <td>0.276</td>
                  <td>-0.355</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>b3 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.082</td>
                </tr>
                <tr>
                  <td>0.081</td>
                </tr>
                <tr>
                  <td>0.077</td>
                </tr>
                <tr>
                  <td>0.075</td>
                </tr>
                <tr>
                  <td>0.082</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>W4 <span>(7, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.079</td>
                  <td>0.027</td>
                  <td>0.403</td>
                  <td>0.247</td>
                  <td>-0.228</td>
                </tr>
                <tr>
                  <td>0.515</td>
                  <td>-0.411</td>
                  <td>-0.088</td>
                  <td>0.276</td>
                  <td>-0.375</td>
                </tr>
                <tr>
                  <td>-0.012</td>
                  <td>-0.495</td>
                  <td>0.181</td>
                  <td>0.284</td>
                  <td>0.079</td>
                </tr>
                <tr>
                  <td>0.405</td>
                  <td>-0.2</td>
                  <td>0.211</td>
                  <td>0.101</td>
                  <td>0.087</td>
                </tr>
                <tr>
                  <td>-0.047</td>
                  <td>0.366</td>
                  <td>0.478</td>
                  <td>-0.028</td>
                  <td>0.176</td>
                </tr>
                <tr>
                  <td>-0.472</td>
                  <td>0.217</td>
                  <td>0.158</td>
                  <td>0.53</td>
                  <td>0.346</td>
                </tr>
                <tr>
                  <td>-0.232</td>
                  <td>-0.123</td>
                  <td>0.181</td>
                  <td>-0.513</td>
                  <td>-0.041</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>b4 <span>(7, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.074</td>
                </tr>
                <tr>
                  <td>0.074</td>
                </tr>
                <tr>
                  <td>0.076</td>
                </tr>
                <tr>
                  <td>0.087</td>
                </tr>
                <tr>
                  <td>0.078</td>
                </tr>
                <tr>
                  <td>0.076</td>
                </tr>
                <tr>
                  <td>0.078</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>W5 <span>(5, 7)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.3</td>
                  <td>-0.346</td>
                  <td>-0.399</td>
                  <td>0.246</td>
                  <td>-0.335</td>
                  <td>-0.227</td>
                  <td>-0.098</td>
                </tr>
                <tr>
                  <td>0.338</td>
                  <td>-0.381</td>
                  <td>-0.046</td>
                  <td>0.045</td>
                  <td>0.348</td>
                  <td>0.29</td>
                  <td>0.331</td>
                </tr>
                <tr>
                  <td>-0.2</td>
                  <td>-0.076</td>
                  <td>-0.127</td>
                  <td>0.35</td>
                  <td>0.417</td>
                  <td>-0.316</td>
                  <td>-0.294</td>
                </tr>
                <tr>
                  <td>-0.244</td>
                  <td>-0.242</td>
                  <td>-0.014</td>
                  <td>0.081</td>
                  <td>-0.216</td>
                  <td>-0.451</td>
                  <td>-0.074</td>
                </tr>
                <tr>
                  <td>-0.118</td>
                  <td>0.061</td>
                  <td>0.413</td>
                  <td>0.174</td>
                  <td>0.015</td>
                  <td>0.108</td>
                  <td>0.16</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>b5 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.016</td>
                </tr>
                <tr>
                  <td>0.002</td>
                </tr>
                <tr>
                  <td>0.006</td>
                </tr>
                <tr>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>0.007</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 dW1 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>-0.002</td>
                  <td>-0.004</td>
                  <td>-0.001</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 db1 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>-0.005</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 dW2 <span>(3, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0.005</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>-0.007</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 db2 <span>(3, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.005</td>
                </tr>
                <tr>
                  <td>-0.007</td>
                </tr>
                <tr>
                  <td>-0.006</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 dW3 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0.002</td>
                  <td>-0.002</td>
                </tr>
                <tr>
                  <td>-0.001</td>
                  <td>0</td>
                  <td>-0.001</td>
                </tr>
                <tr>
                  <td>-0</td>
                  <td>-0.002</td>
                  <td>0.003</td>
                </tr>
                <tr>
                  <td>0.002</td>
                  <td>-0</td>
                  <td>0.004</td>
                </tr>
                <tr>
                  <td>-0.001</td>
                  <td>-0.002</td>
                  <td>-0.001</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 db3 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.011</td>
                </tr>
                <tr>
                  <td>-0.008</td>
                </tr>
                <tr>
                  <td>0.019</td>
                </tr>
                <tr>
                  <td>0.033</td>
                </tr>
                <tr>
                  <td>-0.015</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 dW4 <span>(7, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.004</td>
                  <td>0</td>
                  <td>0.003</td>
                  <td>0.002</td>
                  <td>0.002</td>
                </tr>
                <tr>
                  <td>0.004</td>
                  <td>0</td>
                  <td>0.003</td>
                  <td>0.002</td>
                  <td>0.004</td>
                </tr>
                <tr>
                  <td>0.003</td>
                  <td>0</td>
                  <td>0.002</td>
                  <td>0.002</td>
                  <td>0.002</td>
                </tr>
                <tr>
                  <td>-0.004</td>
                  <td>-0</td>
                  <td>-0.003</td>
                  <td>-0.003</td>
                  <td>-0.004</td>
                </tr>
                <tr>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>0.001</td>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>0.003</td>
                  <td>0</td>
                  <td>0.002</td>
                  <td>0.001</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>0</td>
                  <td>-0</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 db4 <span>(7, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.039</td>
                </tr>
                <tr>
                  <td>0.041</td>
                </tr>
                <tr>
                  <td>0.028</td>
                </tr>
                <tr>
                  <td>-0.047</td>
                </tr>
                <tr>
                  <td>0.012</td>
                </tr>
                <tr>
                  <td>0.027</td>
                </tr>
                <tr>
                  <td>0.01</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 dW5 <span>(5, 7)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.011</td>
                  <td>-0.011</td>
                  <td>-0.012</td>
                  <td>-0.015</td>
                  <td>-0.012</td>
                  <td>-0.011</td>
                  <td>-0.004</td>
                </tr>
                <tr>
                  <td>-0.001</td>
                  <td>-0</td>
                  <td>-0.002</td>
                  <td>-0.002</td>
                  <td>-0.002</td>
                  <td>-0.003</td>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>-0.005</td>
                  <td>-0.005</td>
                  <td>-0.005</td>
                  <td>-0.006</td>
                  <td>-0.005</td>
                  <td>-0.004</td>
                  <td>-0.001</td>
                </tr>
                <tr>
                  <td>-0</td>
                  <td>-0.001</td>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>-0.005</td>
                  <td>-0.004</td>
                  <td>-0.006</td>
                  <td>-0.007</td>
                  <td>-0.006</td>
                  <td>-0.006</td>
                  <td>-0.002</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 1 db5 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.102</td>
                </tr>
                <tr>
                  <td>-0.014</td>
                </tr>
                <tr>
                  <td>-0.04</td>
                </tr>
                <tr>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>-0.044</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 dW1 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>-0.002</td>
                  <td>-0.004</td>
                  <td>-0.001</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 db1 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                </tr>
                <tr>
                  <td>-0.005</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 dW2 <span>(3, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0.004</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>-0.007</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 db2 <span>(3, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.005</td>
                </tr>
                <tr>
                  <td>-0.006</td>
                </tr>
                <tr>
                  <td>-0.006</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 dW3 <span>(5, 3)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0</td>
                  <td>0.002</td>
                  <td>-0.002</td>
                </tr>
                <tr>
                  <td>-0</td>
                  <td>0</td>
                  <td>-0.001</td>
                </tr>
                <tr>
                  <td>-0</td>
                  <td>-0.002</td>
                  <td>0.003</td>
                </tr>
                <tr>
                  <td>0.001</td>
                  <td>-0</td>
                  <td>0.003</td>
                </tr>
                <tr>
                  <td>-0.001</td>
                  <td>-0.002</td>
                  <td>-0.001</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 db3 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.01</td>
                </tr>
                <tr>
                  <td>-0.008</td>
                </tr>
                <tr>
                  <td>0.018</td>
                </tr>
                <tr>
                  <td>0.031</td>
                </tr>
                <tr>
                  <td>-0.015</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 dW4 <span>(7, 5)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.004</td>
                  <td>0</td>
                  <td>0.002</td>
                  <td>0.002</td>
                  <td>0.002</td>
                </tr>
                <tr>
                  <td>0.004</td>
                  <td>0</td>
                  <td>0.003</td>
                  <td>0.002</td>
                  <td>0.003</td>
                </tr>
                <tr>
                  <td>0.003</td>
                  <td>0</td>
                  <td>0.002</td>
                  <td>0.001</td>
                  <td>0.002</td>
                </tr>
                <tr>
                  <td>-0.004</td>
                  <td>-0</td>
                  <td>-0.003</td>
                  <td>-0.003</td>
                  <td>-0.004</td>
                </tr>
                <tr>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>0</td>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>0.003</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>0.001</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>-0.001</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 db4 <span>(7, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>0.037</td>
                </tr>
                <tr>
                  <td>0.039</td>
                </tr>
                <tr>
                  <td>0.027</td>
                </tr>
                <tr>
                  <td>-0.046</td>
                </tr>
                <tr>
                  <td>0.011</td>
                </tr>
                <tr>
                  <td>0.025</td>
                </tr>
                <tr>
                  <td>0.009</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 dW5 <span>(5, 7)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.01</td>
                  <td>-0.01</td>
                  <td>-0.011</td>
                  <td>-0.014</td>
                  <td>-0.012</td>
                  <td>-0.01</td>
                  <td>-0.004</td>
                </tr>
                <tr>
                  <td>-0.001</td>
                  <td>-0</td>
                  <td>-0.002</td>
                  <td>-0.002</td>
                  <td>-0.002</td>
                  <td>-0.003</td>
                  <td>-0</td>
                </tr>
                <tr>
                  <td>-0.004</td>
                  <td>-0.004</td>
                  <td>-0.004</td>
                  <td>-0.006</td>
                  <td>-0.005</td>
                  <td>-0.004</td>
                  <td>-0.001</td>
                </tr>
                <tr>
                  <td>-0</td>
                  <td>-0.001</td>
                  <td>0.001</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0.001</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>-0.004</td>
                  <td>-0.004</td>
                  <td>-0.005</td>
                  <td>-0.007</td>
                  <td>-0.005</td>
                  <td>-0.005</td>
                  <td>-0.002</td>
                </tr>
              </table>
            </div>
          </article>
          <article class="matrix-card">
            <h3>pass 2 db5 <span>(5, 1)</span></h3>
            <div class="matrix-scroll">
              <table>
                <tr>
                  <td>-0.098</td>
                </tr>
                <tr>
                  <td>-0.014</td>
                </tr>
                <tr>
                  <td>-0.038</td>
                </tr>
                <tr>
                  <td>0.001</td>
                </tr>
                <tr>
                  <td>-0.044</td>
                </tr>
              </table>
            </div>
          </article>
        </div>
      </section>

  </div>

  <script>
    const ns = "http://www.w3.org/2000/svg";

    // ---- Shared professional math typesetting (markup -> SVG tspans / HTML) ----
    // Markup: _x or _{xyz} = subscript, ^x or ^{xyz} = superscript.
    function mathTokens(text) {
      const tokens = [];
      let buffer = "";
      let i = 0;
      const flush = () => { if (buffer) { tokens.push({ text: buffer, shift: null }); buffer = ""; } };
      while (i < text.length) {
        const ch = text[i];
        if (ch === "_" || ch === "^") {
          flush();
          const shift = ch === "_" ? "sub" : "super";
          i += 1;
          let content;
          if (text[i] === "{") {
            const close = text.indexOf("}", i);
            content = text.slice(i + 1, close);
            i = close + 1;
          } else {
            content = text[i] || "";
            i += 1;
          }
          tokens.push({ text: content, shift });
        } else {
          buffer += ch;
          i += 1;
        }
      }
      flush();
      return tokens;
    }

    function mathTypeset(node, markup, centered) {
      while (node.firstChild) node.removeChild(node.firstChild);
      const baseX = node.getAttribute("x");
      String(markup).split("\\n").forEach((line, lineIndex) => {
        const tokens = mathTokens(line);
        tokens.forEach((token, tokenIndex) => {
          const tspan = document.createElementNS(ns, "tspan");
          if (!centered && tokenIndex === 0) {
            tspan.setAttribute("x", baseX);
            tspan.setAttribute("dy", lineIndex === 0 ? "0" : "27");
          }
          if (token.shift) {
            tspan.setAttribute("baseline-shift", token.shift);
            tspan.setAttribute("font-size", "0.7em");
          }
          tspan.textContent = token.text;
          node.appendChild(tspan);
        });
      });
    }

    function mathHtml(markup) {
      const html = mathTokens(String(markup)).map((token) => {
        const escaped = token.text
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (token.shift === "sub") return "<sub>" + escaped + "</sub>";
        if (token.shift === "super") return "<sup>" + escaped + "</sup>";
        return escaped;
      }).join("");
      return '<span class="eq">' + html + "</span>";
    }


    function nnWrapText(text, maxChars) {
      const words = String(text).split(" ");
      const lines = [];
      let current = "";
      words.forEach((word) => {
        const next = current ? current + " " + word : word;
        if (next.length > maxChars && current) {
          lines.push(current);
          current = word;
        } else {
          current = next;
        }
      });
      if (current) lines.push(current);
      return lines;
    }
    const NN = { "X": [[0.2, 0.9, 0.4, 0.7, 0.1, 0.8, 0.3], [0.6, 0.1, 0.8, 0.4, 0.9, 0.2, 0.5], [0.3, 0.7, 0.2, 0.9, 0.5, 0.4, 0.6]], "Y": [[0.84, 0.18, 0.76, 0.69, 0.24, 0.91, 0.33], [0.22, 0.73, 0.31, 0.82, 0.66, 0.27, 0.74], [0.68, 0.79, 0.28, 0.36, 0.88, 0.62, 0.19], [0.14, 0.29, 0.81, 0.25, 0.77, 0.34, 0.69], [0.92, 0.21, 0.37, 0.71, 0.28, 0.83, 0.64]], "layerSizes": [3, 5, 3, 5, 7, 5], "weightShapes": [[5, 3], [3, 5], [5, 3], [7, 5], [5, 7]], "biasShapes": [[5, 1], [3, 1], [5, 1], [7, 1], [5, 1]], "weights": [[[-0.245, -0.485, 0.21], [-0.593, 0.05, -0.186], [-0.614, 0.01, -0.642], [-0.092, -0.597, -0.568], [-0.1047425179446814, 0.4545654650676255, -0.5218297385349857]], [[-0.298, 0.137, 0.481, 0.083, -0.11172038981918375], [0.512, -0.488, 0.385, -0.226, -0.38204032879204863], [-0.411, -0.206, 0.34, -0.343, 0.08918093949537013]], [[0.192969674467275, -0.17736550047271346, 0.06626307173170166], [-0.6069203363655474, -0.611, -0.4078855107611141], [0.25001134691314897, -0.10061083346860725, -0.25843811707866965], [0.11876474571315057, -0.06494680812797927, -0.27855826758936386], [0.40923034939147435, 0.27627560498808157, -0.3548399820598533]], [[0.07937990377937251, 0.02696448367259048, 0.4026064777757625, 0.24666329440462065, -0.2283099979802555], [0.5154100377939095, -0.41103116116748284, -0.08843713641061936, 0.2756236327587067, -0.37456496250292975], [-0.01242935812746561, -0.495037745837341, 0.18071755211394017, 0.2837573674130713, 0.07873376631086396], [0.4046961048437622, -0.1999938192634722, 0.21051143256617189, 0.10143810902834395, 0.08661699007843517], [-0.0472019891605113, 0.36596298619914475, 0.47791148674761713, -0.028077617701686132, 0.17601919788428183], [-0.4724698218022699, 0.21693041669897498, 0.15775352709414672, 0.5297902632761713, 0.34597624128627413], [-0.23219846187525559, -0.12302992377227229, 0.1809157973447386, -0.5130703169704882, -0.040916766190449094]], [[-0.3002685250790347, -0.3463329392377403, -0.3992068987735141, 0.24633512977485478, -0.3350655032948507, -0.22730848780957832, -0.0984075583001759], [0.3381817178140235, -0.38092797985736854, -0.0456854586068073, 0.04534421546934493, 0.3483517124808363, 0.2904279159023989, 0.33107877831963045], [-0.2002862480773052, -0.07628808023167406, -0.1272953195425564, 0.34993334580444174, 0.41675046876510663, -0.3163780060968959, -0.2937776930767504], [-0.24394539879367944, -0.2418758697160928, -0.014112429371672603, 0.080955133730154, -0.21606162968386652, -0.4511835354418446, -0.07400257311326812], [-0.1182715275686328, 0.06065589146270052, 0.4128656099180464, 0.17405975751146172, 0.01489133061274877, 0.10786349561447608, 0.16026079833049736]]], "biases": [[[0.08], [0.08], [0.08], [0.08], [0.08073403545223408]], [[0.07918268635282155], [0.08103021122370666], [0.08097154943201763]], [[0.08166403309413403], [0.08123765850303065], [0.07701219243512429], [0.07481202369504412], [0.0823878860423324]], [[0.07385082537336789], [0.0735361064592421], [0.07559919959879073], [0.08742243685410028], [0.07812097156806459], [0.07578675676344811], [0.07845435835853218]], [[0.01599338504078196], [0.0022522662829112454], [0.006270145094477729], [-4.166999667696737e-05], [0.007058302771234471]]], "gradientPasses": [[{ "dW": [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [-0.0016099887583641177, -0.0035407455465730686, -0.0010678787037033185]], "db": [[0.0], [0.0], [0.0], [0.0], [-0.004595357149228083]] }, { "dW": [[0.0, 0.0, 0.0, 0.0, 0.004527531457878368], [0.0, 0.0, 0.0, 0.0, 0.00024664330863426106], [0.0, 0.0, 0.0, 0.0, -0.007407634220434871]], "db": [[0.005331271954336285], [-0.006517658431154918], [-0.006483818398987849]] }, { "dW": [[0.00015794246227699435, 0.0022592457137538824, -0.001669987903527897], [-0.0005030831672420729, 0.0, -0.0007192349901191976], [-7.938058630281735e-06, -0.002389111336382135, 0.0027990698150300794], [0.0015453495103634927, -0.00028681446972599186, 0.0035612684849738886], [-0.0014518843283341794, -0.0017235040310254678, -0.0010095399815420105]], "db": [[-0.01077071109366966], [-0.007795628305309882], [0.019472248763120228], [0.033372585348246796], [-0.015064369274156468]] }, { "dW": [[0.003952477288113346, 0.00021481601784593694, 0.0025667329845214014, 0.002222027354279821, 0.00201634579272336], [0.003754043526657645, 0.00018724849642162334, 0.0028319294656005377, 0.0024650630030821664, 0.0035946567787467102], [0.0027455394617682534, 0.00022679517345713392, 0.0018469636466919583, 0.0016049405173724435, 0.0017270405499455227], [-0.0044065266893202, -3.7927724929833926e-05, -0.0032957455356812998, -0.0028543914163765287, -0.003908819301386229], [0.0013010688454713887, 0.00022586084608825201, 0.0005985301976007251, 0.0005317977143141187, -7.810502771816859e-05], [0.00301649912381758, 0.0004162777609648574, 0.0016365849447257468, 0.001410882330592764, 0.00023620969504633383], [0.0012777726286214292, 0.00017878930337506297, 0.0005683994807824295, 0.0004820103258254578, -0.000478000281006552]], "db": [[0.03944641031405426], [0.041300999611495255], [0.028308648655509305], [-0.047195556202177205], [0.012225384139032819], [0.027346429448976837], [0.010124670147966561]] }, { "dW": [[-0.01127103743429544, -0.010813343740300864, -0.01159779916690848, -0.014699731846133867, -0.012410773241458192, -0.010989338961581179, -0.0037662975199105053], [-0.0011671372010767873, -0.00047689086329803787, -0.0019835195422210614, -0.002120182878410037, -0.0022052254549658153, -0.0026966199116282463, -0.000490094029358695], [-0.004649941903707929, -0.004617991250566486, -0.004575037866969573, -0.005894154046656227, -0.004829645815897502, -0.004064821833863701, -0.0014198505254389906], [-0.00040090572478066925, -0.0008420541507644198, 0.0006200629286544072, 0.00018758718632257439, 0.0003224718941542717, 0.0010846288430806034, -9.35808891158257e-06], [-0.004700824357130404, -0.004219136900793713, -0.005516654835860329, -0.006594487219444391, -0.00565852549034999, -0.005528823423951882, -0.001637653660846769]], "db": [[-0.10188079673723756], [-0.014045395069954003], [-0.04006767318414207], [-0.00032497348415997225], [-0.04447779321769237]] }], [{ "dW": [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [-0.0016085369331184352, -0.003527567798745998, -0.0010603896089756131]], "db": [[0.0], [0.0], [0.0], [0.0], [-0.004580086003697978]] }, { "dW": [[0.0, 0.0, 0.0, 0.0, 0.004477341281918493], [0.0, 0.0, 0.0, 0.0, 0.0002574665919735058], [0.0, 0.0, 0.0, 0.0, -0.007354109471691748]], "db": [[0.004885148635394384], [-0.006359981865178206], [-0.005660549501232642]] }, { "dW": [[0.0002211266967857557, 0.0023095101951644695, -0.0016184087427429644], [-0.0004927122634159878, 0.0, -0.0007118804959533842], [-0.00013389835573135493, -0.0024754703060273484, 0.002677393668340559], [0.0013953290752542048, -0.0003780839305330171, 0.003417076382074454], [-0.001427483065094944, -0.001721558319993937, -0.000990684270292135]], "db": [[-0.010029702583005775], [-0.0076751029825732914], [0.017875345797826077], [0.03147711846370153], [-0.014784206254998442]] }, { "dW": [[0.003798725469730206, 0.00022913807477303302, 0.0023522948184482536, 0.0019867925879618466, 0.0018586289604701814], [0.003620484049473732, 0.0002022660971142712, 0.0026322756671415004, 0.0022395275130840894, 0.0034673745078757203], [0.002621437131551887, 0.00024502779330554765, 0.0016836349290556554, 0.0014279668192359381, 0.0016008805642551437], [-0.0042947838577067875, -3.9331481667681394e-05, -0.003097161541467517, -0.002621971437922879, -0.0038035566790535873], [0.001223795660919797, 0.00023681166460238636, 0.0005078854571849002, 0.0004384235567625282, -0.0001618685258049709], [0.00285627340455641, 0.0004535135018479049, 0.0014443263784404087, 0.0012108267172668834, 6.077422652693069e-05], [0.001203000812073309, 0.00019525785002848418, 0.0004841337099850738, 0.000396951805276786, -0.0005624223383797765]], "db": [[0.037418272518847315], [0.03949766964797831], [0.026701356359606545], [-0.045584904474076246], [0.011262471260159846], [0.025319111007921835], [0.009195850370381219]] }, { "dW": [[-0.010372399077771306, -0.010024915787945938, -0.010815966164165726, -0.014489390339550875, -0.011770435572908914, -0.010154563418689762, -0.0036392237278907494], [-0.0011043354742165134, -0.0004233609195950302, -0.0019482478726876836, -0.0021825104884015847, -0.002191180555487627, -0.002652328868358328, -0.0004946349660216535], [-0.0042719571299773785, -0.004281005853507748, -0.004233467851075249, -0.0057726685088659024, -0.00455121374793607, -0.0037101019549373366, -0.0013589860151812163], [-0.00028160935422628605, -0.0007095743980756146, 0.0007853042172531329, 0.00037324118675240555, 0.0004478991541775121, 0.0012095641799765163, 4.1522004763165245e-05], [-0.00440508103495966, -0.003979506382962741, -0.0053034691397196385, -0.006652481673827325, -0.005483107169009641, -0.005264871756999229, -0.0016223254703700484]], "db": [[-0.09803651627253696], [-0.014107933466436564], [-0.03830914049682955], [0.0008458484426220643], [-0.043750991422738514]] }]], "passSummaries": [{ "pass": 1, "cost": 3.468, "outputSample": [0.462, 0.52, 0.503, 0.47, 0.521] }, { "pass": 2, "cost": 3.466, "outputSample": [0.466, 0.52, 0.505, 0.471, 0.522] }], "outputSample": [0.466, 0.52, 0.505, 0.471, 0.522], "loss": 3.466, "steps": [{ "phase": "input", "layer": 0, "title": "Training data", "formula": "X : (3, 7)\\nY : (5, 7),  m = 7", "expanded": "One example enters as [X1, X2, X3]. Targets are probabilities, not hard 0/1 labels.", "detail": "X(3, 7), Y(5, 7), m = 7", "sample": "first example x=[0.2, 0.6, 0.3], y=[0.84, 0.22, 0.68, 0.14, 0.92]" }, { "phase": "input", "layer": 0, "title": "Pass 1: start", "formula": "uses current W^{[l]}, b^{[l]}", "expanded": "Forward -> cost -> derivatives -> gradient descent update.", "detail": "learning_rate = 0.08", "sample": "Y example 1: [0.84, 0.22, 0.68, 0.14, 0.92]" }, { "phase": "forward", "layer": 1, "title": "Pass 1: forward layer 1", "formula": "Z^{[1]} = W^{[1]} A^{[0]} + b^{[1]}\\nA^{[1]} = ReLU( Z^{[1]} )", "expanded": ["A^{[1]}_{1} = ReLU( W^{[1]}_{1,1} X_{1} + W^{[1]}_{1,2} X_{2} + W^{[1]}_{1,3} X_{3} + b^{[1]}_{1} )", "A^{[1]}_{2} = ReLU( W^{[1]}_{2,1} X_{1} + W^{[1]}_{2,2} X_{2} + W^{[1]}_{2,3} X_{3} + b^{[1]}_{2} )", "A^{[1]}_{3} = ReLU( W^{[1]}_{3,1} X_{1} + W^{[1]}_{3,2} X_{2} + W^{[1]}_{3,3} X_{3} + b^{[1]}_{3} )", "A^{[1]}_{4} = ReLU( W^{[1]}_{4,1} X_{1} + W^{[1]}_{4,2} X_{2} + W^{[1]}_{4,3} X_{3} + b^{[1]}_{4} )", "A^{[1]}_{5} = ReLU( W^{[1]}_{5,1} X_{1} + W^{[1]}_{5,2} X_{2} + W^{[1]}_{5,3} X_{3} + b^{[1]}_{5} )"], "detail": "W1(5, 3) x A0(3, 7) -> Z1(5, 7), A1(5, 7)", "sample": "example 1 activation: [0, 0, 0, 0, 0.175]" }, { "phase": "forward", "layer": 2, "title": "Pass 1: forward layer 2", "formula": "Z^{[2]} = W^{[2]} A^{[1]} + b^{[2]}\\nA^{[2]} = ReLU( Z^{[2]} )", "expanded": ["A^{[2]}_{1} = ReLU( W^{[2]}_{1,1} A^{[1]}_{1} + W^{[2]}_{1,2} A^{[1]}_{2} + W^{[2]}_{1,3} A^{[1]}_{3} + W^{[2]}_{1,4} A^{[1]}_{4} + W^{[2]}_{1,5} A^{[1]}_{5} + b^{[2]}_{1} )", "A^{[2]}_{2} = ReLU( W^{[2]}_{2,1} A^{[1]}_{1} + W^{[2]}_{2,2} A^{[1]}_{2} + W^{[2]}_{2,3} A^{[1]}_{3} + W^{[2]}_{2,4} A^{[1]}_{4} + W^{[2]}_{2,5} A^{[1]}_{5} + b^{[2]}_{2} )", "A^{[2]}_{3} = ReLU( W^{[2]}_{3,1} A^{[1]}_{1} + W^{[2]}_{3,2} A^{[1]}_{2} + W^{[2]}_{3,3} A^{[1]}_{3} + W^{[2]}_{3,4} A^{[1]}_{4} + W^{[2]}_{3,5} A^{[1]}_{5} + b^{[2]}_{3} )"], "detail": "W2(3, 5) x A1(5, 7) -> Z2(3, 7), A2(3, 7)", "sample": "example 1 activation: [0.061, 0.013, 0.095]" }, { "phase": "forward", "layer": 3, "title": "Pass 1: forward layer 3", "formula": "Z^{[3]} = W^{[3]} A^{[2]} + b^{[3]}\\nA^{[3]} = ReLU( Z^{[3]} )", "expanded": ["A^{[3]}_{1} = ReLU( W^{[3]}_{1,1} A^{[2]}_{1} + W^{[3]}_{1,2} A^{[2]}_{2} + W^{[3]}_{1,3} A^{[2]}_{3} + b^{[3]}_{1} )", "A^{[3]}_{2} = ReLU( W^{[3]}_{2,1} A^{[2]}_{1} + W^{[3]}_{2,2} A^{[2]}_{2} + W^{[3]}_{2,3} A^{[2]}_{3} + b^{[3]}_{2} )", "A^{[3]}_{3} = ReLU( W^{[3]}_{3,1} A^{[2]}_{1} + W^{[3]}_{3,2} A^{[2]}_{2} + W^{[3]}_{3,3} A^{[2]}_{3} + b^{[3]}_{3} )", "A^{[3]}_{4} = ReLU( W^{[3]}_{4,1} A^{[2]}_{1} + W^{[3]}_{4,2} A^{[2]}_{2} + W^{[3]}_{4,3} A^{[2]}_{3} + b^{[3]}_{4} )", "A^{[3]}_{5} = ReLU( W^{[3]}_{5,1} A^{[2]}_{1} + W^{[3]}_{5,2} A^{[2]}_{2} + W^{[3]}_{5,3} A^{[2]}_{3} + b^{[3]}_{5} )"], "detail": "W3(5, 3) x A2(3, 7) -> Z3(5, 7), A3(5, 7)", "sample": "example 1 activation: [0.096, 0, 0.069, 0.06, 0.075]" }, { "phase": "forward", "layer": 4, "title": "Pass 1: forward layer 4", "formula": "Z^{[4]} = W^{[4]} A^{[3]} + b^{[4]}\\nA^{[4]} = ReLU( Z^{[4]} )", "expanded": ["A^{[4]}_{1} = ReLU( W^{[4]}_{1,1} A^{[3]}_{1} + W^{[4]}_{1,2} A^{[3]}_{2} + W^{[4]}_{1,3} A^{[3]}_{3} + W^{[4]}_{1,4} A^{[3]}_{4} + W^{[4]}_{1,5} A^{[3]}_{5} + b^{[4]}_{1} )", "A^{[4]}_{2} = ReLU( W^{[4]}_{2,1} A^{[3]}_{1} + W^{[4]}_{2,2} A^{[3]}_{2} + W^{[4]}_{2,3} A^{[3]}_{3} + W^{[4]}_{2,4} A^{[3]}_{4} + W^{[4]}_{2,5} A^{[3]}_{5} + b^{[4]}_{2} )", "A^{[4]}_{3} = ReLU( W^{[4]}_{3,1} A^{[3]}_{1} + W^{[4]}_{3,2} A^{[3]}_{2} + W^{[4]}_{3,3} A^{[3]}_{3} + W^{[4]}_{3,4} A^{[3]}_{4} + W^{[4]}_{3,5} A^{[3]}_{5} + b^{[4]}_{3} )", "A^{[4]}_{4} = ReLU( W^{[4]}_{4,1} A^{[3]}_{1} + W^{[4]}_{4,2} A^{[3]}_{2} + W^{[4]}_{4,3} A^{[3]}_{3} + W^{[4]}_{4,4} A^{[3]}_{4} + W^{[4]}_{4,5} A^{[3]}_{5} + b^{[4]}_{4} )", "A^{[4]}_{5} = ReLU( W^{[4]}_{5,1} A^{[3]}_{1} + W^{[4]}_{5,2} A^{[3]}_{2} + W^{[4]}_{5,3} A^{[3]}_{3} + W^{[4]}_{5,4} A^{[3]}_{4} + W^{[4]}_{5,5} A^{[3]}_{5} + b^{[4]}_{5} )", "A^{[4]}_{6} = ReLU( W^{[4]}_{6,1} A^{[3]}_{1} + W^{[4]}_{6,2} A^{[3]}_{2} + W^{[4]}_{6,3} A^{[3]}_{3} + W^{[4]}_{6,4} A^{[3]}_{4} + W^{[4]}_{6,5} A^{[3]}_{5} + b^{[4]}_{6} )", "A^{[4]}_{7} = ReLU( W^{[4]}_{7,1} A^{[3]}_{1} + W^{[4]}_{7,2} A^{[3]}_{2} + W^{[4]}_{7,3} A^{[3]}_{3} + W^{[4]}_{7,4} A^{[3]}_{4} + W^{[4]}_{7,5} A^{[3]}_{5} + b^{[4]}_{7} )"], "detail": "W4(7, 5) x A3(5, 7) -> Z4(7, 7), A4(7, 7)", "sample": "example 1 activation: [0.113, 0.112, 0.114, 0.146, 0.12, 0.103, 0.037]" }, { "phase": "forward", "layer": 5, "title": "Pass 1: forward layer 5", "formula": "Z^{[5]} = W^{[5]} A^{[4]} + b^{[5]}\\nA^{[5]} = \\u03c3( Z^{[5]} )", "expanded": ["A^{[5]}_{1} = \\u03c3( W^{[5]}_{1,1} A^{[4]}_{1} + W^{[5]}_{1,2} A^{[4]}_{2} + W^{[5]}_{1,3} A^{[4]}_{3} + W^{[5]}_{1,4} A^{[4]}_{4} + W^{[5]}_{1,5} A^{[4]}_{5} + W^{[5]}_{1,6} A^{[4]}_{6} + W^{[5]}_{1,7} A^{[4]}_{7} + b^{[5]}_{1} )", "A^{[5]}_{2} = \\u03c3( W^{[5]}_{2,1} A^{[4]}_{1} + W^{[5]}_{2,2} A^{[4]}_{2} + W^{[5]}_{2,3} A^{[4]}_{3} + W^{[5]}_{2,4} A^{[4]}_{4} + W^{[5]}_{2,5} A^{[4]}_{5} + W^{[5]}_{2,6} A^{[4]}_{6} + W^{[5]}_{2,7} A^{[4]}_{7} + b^{[5]}_{2} )", "A^{[5]}_{3} = \\u03c3( W^{[5]}_{3,1} A^{[4]}_{1} + W^{[5]}_{3,2} A^{[4]}_{2} + W^{[5]}_{3,3} A^{[4]}_{3} + W^{[5]}_{3,4} A^{[4]}_{4} + W^{[5]}_{3,5} A^{[4]}_{5} + W^{[5]}_{3,6} A^{[4]}_{6} + W^{[5]}_{3,7} A^{[4]}_{7} + b^{[5]}_{3} )", "A^{[5]}_{4} = \\u03c3( W^{[5]}_{4,1} A^{[4]}_{1} + W^{[5]}_{4,2} A^{[4]}_{2} + W^{[5]}_{4,3} A^{[4]}_{3} + W^{[5]}_{4,4} A^{[4]}_{4} + W^{[5]}_{4,5} A^{[4]}_{5} + W^{[5]}_{4,6} A^{[4]}_{6} + W^{[5]}_{4,7} A^{[4]}_{7} + b^{[5]}_{4} )", "A^{[5]}_{5} = \\u03c3( W^{[5]}_{5,1} A^{[4]}_{1} + W^{[5]}_{5,2} A^{[4]}_{2} + W^{[5]}_{5,3} A^{[4]}_{3} + W^{[5]}_{5,4} A^{[4]}_{4} + W^{[5]}_{5,5} A^{[4]}_{5} + W^{[5]}_{5,6} A^{[4]}_{6} + W^{[5]}_{5,7} A^{[4]}_{7} + b^{[5]}_{5} )"], "detail": "W5(5, 7) x A4(7, 7) -> Z5(5, 7), A5(5, 7)", "sample": "example 1 activation: [0.462, 0.52, 0.503, 0.47, 0.521]" }, { "phase": "loss", "layer": 5, "title": "Pass 1: cost", "formula": "J = \\u2212 (1/m) \\u03a3 [ y log a^{[L]}\\n+ (1 \\u2212 y) log(1 \\u2212 a^{[L]}) ]", "expanded": "Cost compares prediction A5 with soft targets Y.", "detail": "A5(5, 7) compared with Y(5, 7)", "sample": "cost = 3.468; A5 ex1=[0.462, 0.52, 0.503, 0.47, 0.521]; Y ex1=[0.84, 0.22, 0.68, 0.14, 0.92]" }, { "phase": "backward", "layer": 5, "title": "Pass 1: output derivative", "formula": "dZ^{[5]} = A^{[5]} \\u2212 Y", "expanded": "For sigmoid + BCE, prediction minus target starts backprop.", "detail": "dA_pre5(5, 7)", "sample": "example 1: [-0.378, 0.3, -0.177, 0.33, -0.399]" }, { "phase": "backward", "layer": 5, "title": "Pass 1: backprop layer 5", "formula": "dW^{[5]} = (1/m) dZ^{[5]} (A^{[4]})^T\\ndb^{[5]} = (1/m) \\u03a3_{cols} dZ^{[5]}", "expanded": "db5 = mean(dA_pre5); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW5(5, 7), db5(5, 1)", "sample": "first dW row: [-0.011, -0.011, -0.012, -0.015, -0.012, -0.011, -0.004]" }, { "phase": "backward", "layer": 4, "title": "Pass 1: backprop layer 4", "formula": "dW^{[4]} = (1/m) dZ^{[4]} (A^{[3]})^T\\ndb^{[4]} = (1/m) \\u03a3_{cols} dZ^{[4]}", "expanded": "db4 = mean(dA_pre4); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW4(7, 5), db4(7, 1)", "sample": "first dW row: [0.004, 0.0, 0.003, 0.002, 0.002]" }, { "phase": "backward", "layer": 3, "title": "Pass 1: backprop layer 3", "formula": "dW^{[3]} = (1/m) dZ^{[3]} (A^{[2]})^T\\ndb^{[3]} = (1/m) \\u03a3_{cols} dZ^{[3]}", "expanded": "db3 = mean(dA_pre3); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW3(5, 3), db3(5, 1)", "sample": "first dW row: [0.0, 0.002, -0.002]" }, { "phase": "backward", "layer": 2, "title": "Pass 1: backprop layer 2", "formula": "dW^{[2]} = (1/m) dZ^{[2]} (A^{[1]})^T\\ndb^{[2]} = (1/m) \\u03a3_{cols} dZ^{[2]}", "expanded": "db2 = mean(dA_pre2); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW2(3, 5), db2(3, 1)", "sample": "first dW row: [0.0, 0.0, 0.0, 0.0, 0.005]" }, { "phase": "backward", "layer": 1, "title": "Pass 1: backprop layer 1", "formula": "dW^{[1]} = (1/m) dZ^{[1]} (A^{[0]})^T\\ndb^{[1]} = (1/m) \\u03a3_{cols} dZ^{[1]}", "expanded": "db1 = mean(dA_pre1); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW1(5, 3), db1(5, 1)", "sample": "first dW row: [0.0, 0.0, 0.0]" }, { "phase": "update", "layer": 1, "title": "Pass 1: update parameters", "formula": "W^{[l]} := W^{[l]} \\u2212 \\u03b1 dW^{[l]}\\nb^{[l]} := b^{[l]} \\u2212 \\u03b1 db^{[l]}", "expanded": "The second pass starts from these updated parameters.", "detail": "learning_rate = 0.08", "sample": "W5[1,1]: -0.302 -> -0.301" }, { "phase": "input", "layer": 0, "title": "Pass 2: start", "formula": "uses current W^{[l]}, b^{[l]}", "expanded": "Forward -> cost -> derivatives -> gradient descent update.", "detail": "learning_rate = 0.08", "sample": "Y example 1: [0.84, 0.22, 0.68, 0.14, 0.92]" }, { "phase": "forward", "layer": 1, "title": "Pass 2: forward layer 1", "formula": "Z^{[1]} = W^{[1]} A^{[0]} + b^{[1]}\\nA^{[1]} = ReLU( Z^{[1]} )", "expanded": ["A^{[1]}_{1} = ReLU( W^{[1]}_{1,1} X_{1} + W^{[1]}_{1,2} X_{2} + W^{[1]}_{1,3} X_{3} + b^{[1]}_{1} )", "A^{[1]}_{2} = ReLU( W^{[1]}_{2,1} X_{1} + W^{[1]}_{2,2} X_{2} + W^{[1]}_{2,3} X_{3} + b^{[1]}_{2} )", "A^{[1]}_{3} = ReLU( W^{[1]}_{3,1} X_{1} + W^{[1]}_{3,2} X_{2} + W^{[1]}_{3,3} X_{3} + b^{[1]}_{3} )", "A^{[1]}_{4} = ReLU( W^{[1]}_{4,1} X_{1} + W^{[1]}_{4,2} X_{2} + W^{[1]}_{4,3} X_{3} + b^{[1]}_{4} )", "A^{[1]}_{5} = ReLU( W^{[1]}_{5,1} X_{1} + W^{[1]}_{5,2} X_{2} + W^{[1]}_{5,3} X_{3} + b^{[1]}_{5} )"], "detail": "W1(5, 3) x A0(3, 7) -> Z1(5, 7), A1(5, 7)", "sample": "example 1 activation: [0, 0, 0, 0, 0.175]" }, { "phase": "forward", "layer": 2, "title": "Pass 2: forward layer 2", "formula": "Z^{[2]} = W^{[2]} A^{[1]} + b^{[2]}\\nA^{[2]} = ReLU( Z^{[2]} )", "expanded": ["A^{[2]}_{1} = ReLU( W^{[2]}_{1,1} A^{[1]}_{1} + W^{[2]}_{1,2} A^{[1]}_{2} + W^{[2]}_{1,3} A^{[1]}_{3} + W^{[2]}_{1,4} A^{[1]}_{4} + W^{[2]}_{1,5} A^{[1]}_{5} + b^{[2]}_{1} )", "A^{[2]}_{2} = ReLU( W^{[2]}_{2,1} A^{[1]}_{1} + W^{[2]}_{2,2} A^{[1]}_{2} + W^{[2]}_{2,3} A^{[1]}_{3} + W^{[2]}_{2,4} A^{[1]}_{4} + W^{[2]}_{2,5} A^{[1]}_{5} + b^{[2]}_{2} )", "A^{[2]}_{3} = ReLU( W^{[2]}_{3,1} A^{[1]}_{1} + W^{[2]}_{3,2} A^{[1]}_{2} + W^{[2]}_{3,3} A^{[1]}_{3} + W^{[2]}_{3,4} A^{[1]}_{4} + W^{[2]}_{3,5} A^{[1]}_{5} + b^{[2]}_{3} )"], "detail": "W2(3, 5) x A1(5, 7) -> Z2(3, 7), A2(3, 7)", "sample": "example 1 activation: [0.06, 0.014, 0.096]" }, { "phase": "forward", "layer": 3, "title": "Pass 2: forward layer 3", "formula": "Z^{[3]} = W^{[3]} A^{[2]} + b^{[3]}\\nA^{[3]} = ReLU( Z^{[3]} )", "expanded": ["A^{[3]}_{1} = ReLU( W^{[3]}_{1,1} A^{[2]}_{1} + W^{[3]}_{1,2} A^{[2]}_{2} + W^{[3]}_{1,3} A^{[2]}_{3} + b^{[3]}_{1} )", "A^{[3]}_{2} = ReLU( W^{[3]}_{2,1} A^{[2]}_{1} + W^{[3]}_{2,2} A^{[2]}_{2} + W^{[3]}_{2,3} A^{[2]}_{3} + b^{[3]}_{2} )", "A^{[3]}_{3} = ReLU( W^{[3]}_{3,1} A^{[2]}_{1} + W^{[3]}_{3,2} A^{[2]}_{2} + W^{[3]}_{3,3} A^{[2]}_{3} + b^{[3]}_{3} )", "A^{[3]}_{4} = ReLU( W^{[3]}_{4,1} A^{[2]}_{1} + W^{[3]}_{4,2} A^{[2]}_{2} + W^{[3]}_{4,3} A^{[2]}_{3} + b^{[3]}_{4} )", "A^{[3]}_{5} = ReLU( W^{[3]}_{5,1} A^{[2]}_{1} + W^{[3]}_{5,2} A^{[2]}_{2} + W^{[3]}_{5,3} A^{[2]}_{3} + b^{[3]}_{5} )"], "detail": "W3(5, 3) x A2(3, 7) -> Z3(5, 7), A3(5, 7)", "sample": "example 1 activation: [0.096, 0, 0.067, 0.057, 0.075]" }, { "phase": "forward", "layer": 4, "title": "Pass 2: forward layer 4", "formula": "Z^{[4]} = W^{[4]} A^{[3]} + b^{[4]}\\nA^{[4]} = ReLU( Z^{[4]} )", "expanded": ["A^{[4]}_{1} = ReLU( W^{[4]}_{1,1} A^{[3]}_{1} + W^{[4]}_{1,2} A^{[3]}_{2} + W^{[4]}_{1,3} A^{[3]}_{3} + W^{[4]}_{1,4} A^{[3]}_{4} + W^{[4]}_{1,5} A^{[3]}_{5} + b^{[4]}_{1} )", "A^{[4]}_{2} = ReLU( W^{[4]}_{2,1} A^{[3]}_{1} + W^{[4]}_{2,2} A^{[3]}_{2} + W^{[4]}_{2,3} A^{[3]}_{3} + W^{[4]}_{2,4} A^{[3]}_{4} + W^{[4]}_{2,5} A^{[3]}_{5} + b^{[4]}_{2} )", "A^{[4]}_{3} = ReLU( W^{[4]}_{3,1} A^{[3]}_{1} + W^{[4]}_{3,2} A^{[3]}_{2} + W^{[4]}_{3,3} A^{[3]}_{3} + W^{[4]}_{3,4} A^{[3]}_{4} + W^{[4]}_{3,5} A^{[3]}_{5} + b^{[4]}_{3} )", "A^{[4]}_{4} = ReLU( W^{[4]}_{4,1} A^{[3]}_{1} + W^{[4]}_{4,2} A^{[3]}_{2} + W^{[4]}_{4,3} A^{[3]}_{3} + W^{[4]}_{4,4} A^{[3]}_{4} + W^{[4]}_{4,5} A^{[3]}_{5} + b^{[4]}_{4} )", "A^{[4]}_{5} = ReLU( W^{[4]}_{5,1} A^{[3]}_{1} + W^{[4]}_{5,2} A^{[3]}_{2} + W^{[4]}_{5,3} A^{[3]}_{3} + W^{[4]}_{5,4} A^{[3]}_{4} + W^{[4]}_{5,5} A^{[3]}_{5} + b^{[4]}_{5} )", "A^{[4]}_{6} = ReLU( W^{[4]}_{6,1} A^{[3]}_{1} + W^{[4]}_{6,2} A^{[3]}_{2} + W^{[4]}_{6,3} A^{[3]}_{3} + W^{[4]}_{6,4} A^{[3]}_{4} + W^{[4]}_{6,5} A^{[3]}_{5} + b^{[4]}_{6} )", "A^{[4]}_{7} = ReLU( W^{[4]}_{7,1} A^{[3]}_{1} + W^{[4]}_{7,2} A^{[3]}_{2} + W^{[4]}_{7,3} A^{[3]}_{3} + W^{[4]}_{7,4} A^{[3]}_{4} + W^{[4]}_{7,5} A^{[3]}_{5} + b^{[4]}_{7} )"], "detail": "W4(7, 5) x A3(5, 7) -> Z4(7, 7), A4(7, 7)", "sample": "example 1 activation: [0.108, 0.108, 0.111, 0.149, 0.118, 0.099, 0.037]" }, { "phase": "forward", "layer": 5, "title": "Pass 2: forward layer 5", "formula": "Z^{[5]} = W^{[5]} A^{[4]} + b^{[5]}\\nA^{[5]} = \\u03c3( Z^{[5]} )", "expanded": ["A^{[5]}_{1} = \\u03c3( W^{[5]}_{1,1} A^{[4]}_{1} + W^{[5]}_{1,2} A^{[4]}_{2} + W^{[5]}_{1,3} A^{[4]}_{3} + W^{[5]}_{1,4} A^{[4]}_{4} + W^{[5]}_{1,5} A^{[4]}_{5} + W^{[5]}_{1,6} A^{[4]}_{6} + W^{[5]}_{1,7} A^{[4]}_{7} + b^{[5]}_{1} )", "A^{[5]}_{2} = \\u03c3( W^{[5]}_{2,1} A^{[4]}_{1} + W^{[5]}_{2,2} A^{[4]}_{2} + W^{[5]}_{2,3} A^{[4]}_{3} + W^{[5]}_{2,4} A^{[4]}_{4} + W^{[5]}_{2,5} A^{[4]}_{5} + W^{[5]}_{2,6} A^{[4]}_{6} + W^{[5]}_{2,7} A^{[4]}_{7} + b^{[5]}_{2} )", "A^{[5]}_{3} = \\u03c3( W^{[5]}_{3,1} A^{[4]}_{1} + W^{[5]}_{3,2} A^{[4]}_{2} + W^{[5]}_{3,3} A^{[4]}_{3} + W^{[5]}_{3,4} A^{[4]}_{4} + W^{[5]}_{3,5} A^{[4]}_{5} + W^{[5]}_{3,6} A^{[4]}_{6} + W^{[5]}_{3,7} A^{[4]}_{7} + b^{[5]}_{3} )", "A^{[5]}_{4} = \\u03c3( W^{[5]}_{4,1} A^{[4]}_{1} + W^{[5]}_{4,2} A^{[4]}_{2} + W^{[5]}_{4,3} A^{[4]}_{3} + W^{[5]}_{4,4} A^{[4]}_{4} + W^{[5]}_{4,5} A^{[4]}_{5} + W^{[5]}_{4,6} A^{[4]}_{6} + W^{[5]}_{4,7} A^{[4]}_{7} + b^{[5]}_{4} )", "A^{[5]}_{5} = \\u03c3( W^{[5]}_{5,1} A^{[4]}_{1} + W^{[5]}_{5,2} A^{[4]}_{2} + W^{[5]}_{5,3} A^{[4]}_{3} + W^{[5]}_{5,4} A^{[4]}_{4} + W^{[5]}_{5,5} A^{[4]}_{5} + W^{[5]}_{5,6} A^{[4]}_{6} + W^{[5]}_{5,7} A^{[4]}_{7} + b^{[5]}_{5} )"], "detail": "W5(5, 7) x A4(7, 7) -> Z5(5, 7), A5(5, 7)", "sample": "example 1 activation: [0.466, 0.52, 0.505, 0.471, 0.522]" }, { "phase": "loss", "layer": 5, "title": "Pass 2: cost", "formula": "J = \\u2212 (1/m) \\u03a3 [ y log a^{[L]}\\n+ (1 \\u2212 y) log(1 \\u2212 a^{[L]}) ]", "expanded": "Cost compares prediction A5 with soft targets Y.", "detail": "A5(5, 7) compared with Y(5, 7)", "sample": "cost = 3.466; A5 ex1=[0.466, 0.52, 0.505, 0.471, 0.522]; Y ex1=[0.84, 0.22, 0.68, 0.14, 0.92]" }, { "phase": "backward", "layer": 5, "title": "Pass 2: output derivative", "formula": "dZ^{[5]} = A^{[5]} \\u2212 Y", "expanded": "For sigmoid + BCE, prediction minus target starts backprop.", "detail": "dA_pre5(5, 7)", "sample": "example 1: [-0.374, 0.3, -0.175, 0.331, -0.398]" }, { "phase": "backward", "layer": 5, "title": "Pass 2: backprop layer 5", "formula": "dW^{[5]} = (1/m) dZ^{[5]} (A^{[4]})^T\\ndb^{[5]} = (1/m) \\u03a3_{cols} dZ^{[5]}", "expanded": "db5 = mean(dA_pre5); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW5(5, 7), db5(5, 1)", "sample": "first dW row: [-0.01, -0.01, -0.011, -0.014, -0.012, -0.01, -0.004]" }, { "phase": "backward", "layer": 4, "title": "Pass 2: backprop layer 4", "formula": "dW^{[4]} = (1/m) dZ^{[4]} (A^{[3]})^T\\ndb^{[4]} = (1/m) \\u03a3_{cols} dZ^{[4]}", "expanded": "db4 = mean(dA_pre4); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW4(7, 5), db4(7, 1)", "sample": "first dW row: [0.004, 0.0, 0.002, 0.002, 0.002]" }, { "phase": "backward", "layer": 3, "title": "Pass 2: backprop layer 3", "formula": "dW^{[3]} = (1/m) dZ^{[3]} (A^{[2]})^T\\ndb^{[3]} = (1/m) \\u03a3_{cols} dZ^{[3]}", "expanded": "db3 = mean(dA_pre3); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW3(5, 3), db3(5, 1)", "sample": "first dW row: [0.0, 0.002, -0.002]" }, { "phase": "backward", "layer": 2, "title": "Pass 2: backprop layer 2", "formula": "dW^{[2]} = (1/m) dZ^{[2]} (A^{[1]})^T\\ndb^{[2]} = (1/m) \\u03a3_{cols} dZ^{[2]}", "expanded": "db2 = mean(dA_pre2); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW2(3, 5), db2(3, 1)", "sample": "first dW row: [0.0, 0.0, 0.0, 0.0, 0.004]" }, { "phase": "backward", "layer": 1, "title": "Pass 2: backprop layer 1", "formula": "dW^{[1]} = (1/m) dZ^{[1]} (A^{[0]})^T\\ndb^{[1]} = (1/m) \\u03a3_{cols} dZ^{[1]}", "expanded": "db1 = mean(dA_pre1); dW[i,j] averages dA_pre[i] x A_prev[j]", "detail": "dW1(5, 3), db1(5, 1)", "sample": "first dW row: [0.0, 0.0, 0.0]" }, { "phase": "update", "layer": 1, "title": "Pass 2: update parameters", "formula": "W^{[l]} := W^{[l]} \\u2212 \\u03b1 dW^{[l]}\\nb^{[l]} := b^{[l]} \\u2212 \\u03b1 db^{[l]}", "expanded": "The second pass starts from these updated parameters.", "detail": "learning_rate = 0.08", "sample": "W5[1,1]: -0.301 -> -0.300" }] };

    const nnSvg = document.getElementById("nnScene");
    const nnExpandedPanel = document.getElementById("nnExpandedPanel");
    const nnPlayBtn = document.getElementById("nnPlay");
    const nnPauseBtn = document.getElementById("nnPause");
    const nnPrev = document.getElementById("nnBack");
    const nnNextButton = document.getElementById("nnStep");
    const nnRestart = document.getElementById("nnReset");
    const nnFrameMs = 2200;
    const nnLayers = NN.layerSizes;
    const nnPositions = [];
    let nnTimer = null;
    let nnPlaying = true;
    let nnStepIndex = 0;

    function nnAdd(tag, attrs, text) {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
      if (text !== undefined) node.textContent = text;
      nnSvg.appendChild(node);
      return node;
    }

    function nnLayerName(index) {
      if (index === 0) return "Input";
      if (index === nnLayers.length - 1) return "Output";
      return "Layer " + index;
    }

    function nnWriteWrappedText(id, lines) {
      const node = document.getElementById(id);
      while (node.firstChild) node.removeChild(node.firstChild);
      lines.forEach((line, index) => {
        const tspan = document.createElementNS(ns, "tspan");
        tspan.setAttribute("x", node.getAttribute("x"));
        tspan.setAttribute("dy", index === 0 ? "0" : "22");
        tspan.textContent = line;
        node.appendChild(tspan);
      });
    }

    function nnWriteCompactText(id, lines) {
      const node = document.getElementById(id);
      while (node.firstChild) node.removeChild(node.firstChild);
      lines.forEach((line, index) => {
        const tspan = document.createElementNS(ns, "tspan");
        tspan.setAttribute("x", node.getAttribute("x"));
        tspan.setAttribute("dy", index === 0 ? "0" : "17");
        tspan.textContent = line;
        node.appendChild(tspan);
      });
    }


    function nnDrawNetwork() {
      nnSvg.innerHTML = "";
      nnPositions.length = 0;
      const left = 58;
      const width = 964;
      const layerGap = width / (nnLayers.length - 1);
      const centerY = 220;
      const nodeGap = 42;

      nnLayers.forEach((count, layerIndex) => {
        const x = left + layerIndex * layerGap;
        const layerCenterY = layerIndex === 3 ? centerY - 44 : centerY;
        const startY = layerCenterY - ((count - 1) * nodeGap) / 2;
        const layerPositions = [];
        for (let nodeIndex = 0; nodeIndex < count; nodeIndex += 1) {
          layerPositions.push({ x, y: startY + nodeIndex * nodeGap });
        }
        nnPositions.push(layerPositions);
      });

      for (let layerIndex = 0; layerIndex < nnPositions.length - 1; layerIndex += 1) {
        nnPositions[layerIndex].forEach((from, fromIndex) => {
          nnPositions[layerIndex + 1].forEach((to, toIndex) => {
            nnAdd("line", {
              id: "edge-" + layerIndex + "-" + fromIndex + "-" + toIndex,
              class: "nn-edge",
              x1: from.x + 18,
              y1: from.y,
              x2: to.x - 18,
              y2: to.y
            });
          });
        });
      }

      nnPositions.forEach((layer, layerIndex) => {
        layer.forEach((pos, nodeIndex) => {
          nnAdd("circle", {
            id: "node-" + layerIndex + "-" + nodeIndex,
            class: "nn-node",
            cx: pos.x,
            cy: pos.y,
            r: 18
          });
          nnAdd("text", {
            class: "cell-text",
            x: pos.x,
            y: pos.y,
            "font-size": 10
          }, layerIndex === 0 ? "x" + (nodeIndex + 1) : "a" + layerIndex);
        });
        nnAdd("text", {
          class: "nn-layer-label",
          x: layer[0].x,
          y: 460
        }, nnLayerName(layerIndex) + " (" + nnLayers[layerIndex] + ")");
      });

    }

    function nnAllNodes() {
      const nodes = [];
      nnLayers.forEach((count, layerIndex) => {
        for (let nodeIndex = 0; nodeIndex < count; nodeIndex += 1) {
          nodes.push(document.getElementById("node-" + layerIndex + "-" + nodeIndex));
        }
      });
      return nodes;
    }

    function nnResetHighlights() {
      nnAllNodes().forEach((node) => node.setAttribute("class", "nn-node"));
      for (let layerIndex = 0; layerIndex < nnLayers.length - 1; layerIndex += 1) {
        for (let from = 0; from < nnLayers[layerIndex]; from += 1) {
          for (let to = 0; to < nnLayers[layerIndex + 1]; to += 1) {
            document.getElementById("edge-" + layerIndex + "-" + from + "-" + to)
              .setAttribute("class", "nn-edge");
          }
        }
      }
    }

    function nnHighlightLayer(layerIndex, className) {
      for (let nodeIndex = 0; nodeIndex < nnLayers[layerIndex]; nodeIndex += 1) {
        document.getElementById("node-" + layerIndex + "-" + nodeIndex).setAttribute("class", className);
      }
    }

    function nnHighlightEdgesBetween(leftLayer, className) {
      if (leftLayer < 0 || leftLayer >= nnLayers.length - 1) return;
      for (let from = 0; from < nnLayers[leftLayer]; from += 1) {
        for (let to = 0; to < nnLayers[leftLayer + 1]; to += 1) {
          document.getElementById("edge-" + leftLayer + "-" + from + "-" + to)
            .setAttribute("class", className);
        }
      }
    }

    function nnSetText(id, value) {
      document.getElementById(id).textContent = value;
    }

    function nnRenderStep() {
      nnResetHighlights();
      nnExpandedPanel.innerHTML = "";
      const step = NN.steps[nnStepIndex];
      if (step.phase === "input") {
        nnHighlightLayer(0, "nn-node-active");
      } else if (step.phase === "forward") {
        nnHighlightLayer(step.layer - 1, "nn-node-active");
        nnHighlightLayer(step.layer, "nn-node-active");
        nnHighlightEdgesBetween(step.layer - 1, "nn-edge-active");
      } else if (step.phase === "loss") {
        nnHighlightLayer(nnLayers.length - 1, "nn-node-update");
      } else if (step.phase === "backward") {
        nnHighlightLayer(step.layer, "nn-node-back");
        if (step.layer > 0) nnHighlightLayer(step.layer - 1, "nn-node-back");
        nnHighlightEdgesBetween(step.layer - 1, "nn-edge-back");
      } else if (step.phase === "update") {
        for (let layerIndex = 1; layerIndex < nnLayers.length; layerIndex += 1) {
          nnHighlightLayer(layerIndex, "nn-node-update");
          nnHighlightEdgesBetween(layerIndex - 1, "nn-edge-active");
        }
      }

      const calculations = Array.isArray(step.expanded)
        ? step.expanded.map((line) => "<p>" + mathHtml(line) + "</p>").join("")
        : "<p>" + (step.expanded || "") + "</p>";
      nnExpandedPanel.innerHTML =
        "<h2>" + step.title + "</h2>" +
        "<div class=\\"network-detail-desc\\">" + (step.detail || "") + "</div>" +
        "<div class=\\"network-detail-formula\\">" + mathHtml(step.formula).replaceAll("\\n", "<br>") + "</div>" +
        "<div class=\\"network-detail-body\\">" + calculations + "</div>" +
        "<div class=\\"network-detail-sample\\">" + (step.sample || "") + "</div>";
    }

    function nnNext() {
      nnRenderStep();
      nnStepIndex += 1;
      if (nnStepIndex >= NN.steps.length) nnStepIndex = 0;
    }

    function nnRenderSpecificStep(index) {
      nnStepIndex = (index + NN.steps.length) % NN.steps.length;
      nnRenderStep();
    }

    function nnPlay() {
      nnStop();
      nnTimer = setInterval(nnNext, nnFrameMs);
      nnPlaying = true;
    }

    function nnStop() {
      if (nnTimer) clearInterval(nnTimer);
      nnTimer = null;
      nnPlaying = false;
    }

    nnPlayBtn.addEventListener("click", nnPlay);
    nnPauseBtn.addEventListener("click", nnStop);

    nnPrev.addEventListener("click", () => {
      nnStop();
      nnRenderSpecificStep(nnStepIndex - 2);
      nnStepIndex = (nnStepIndex + 1) % NN.steps.length;
    });

    nnNextButton.addEventListener("click", () => {
      nnStop();
      nnNext();
    });

    nnRestart.addEventListener("click", () => {
      nnStepIndex = 0;
      nnNext();
      if (nnPlaying) nnPlay();
    });

    nnDrawNetwork();
    nnNext();
    nnPlay();


  <\/script>
</body>

</html>
`,n2=`<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Recurrent neural network animation</title>
  <link rel="stylesheet" href="theme.css">
  <script src="components.js"><\/script>
  <link rel="stylesheet" href="diagram.css">
</head>

<body>
  <div class="wrap">
    <site-nav current="recurrent_neural_network_animation.html"></site-nav>
    <h1>Recurrent neural network: 2 stacked layers, sequence training and BPTT</h1>
    <p class="sub">This RNN has <b>2 stacked recurrent layers</b> (each with 5 hidden units), 3 input features per time
      step, 2 softmax outputs, and 4 time steps. Layer 1 reads x<sup>&lt;t&gt;</sup>; layer 2 reads layer 1's hidden
      state a<sup>&lt;t&gt;[1]</sup>. Each layer keeps its own recurrence, and the animation runs two training passes
      with backpropagation through time.</p>

    <div class="architecture-grid">
      <article class="architecture-card">
        <h2>Inside one RNN cell (Figure 2)</h2>
        <svg viewBox="0 0 520 250" role="img" aria-label="Inside one stacked RNN cell">
          <defs>
            <marker id="cArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
              orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#8ca0b3"></path>
            </marker>
          </defs>
          <text class="arch-small" x="60" y="150">a<tspan baseline-shift="super" font-size="0.7em">⟨t-1⟩</tspan></text>
          <circle class="arch-node" cx="118" cy="146" r="13"></circle><text class="arch-label" x="118" y="151">×</text>
          <text class="arch-param" x="118" y="178">W<tspan baseline-shift="sub" font-size="0.7em">aa</tspan></text>
          <text class="arch-small" x="60" y="216">x<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan></text>
          <circle class="arch-node" cx="158" cy="212" r="13"></circle><text class="arch-label" x="158" y="217">×</text>
          <text class="arch-param" x="158" y="244">W<tspan baseline-shift="sub" font-size="0.7em">ax</tspan></text>
          <circle class="arch-node arch-hidden" cx="210" cy="150" r="16"></circle><text class="arch-label" x="210"
            y="156">+</text>
          <text class="arch-param" x="210" y="112">b<tspan baseline-shift="sub" font-size="0.7em">a</tspan></text>
          <rect class="arch-node" x="252" y="132" width="52" height="36" rx="7"></rect><text class="arch-label" x="278"
            y="153">tanh</text>
          <text class="arch-label" x="340" y="140">a<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan></text>
          <circle class="arch-node" cx="340" cy="92" r="13"></circle><text class="arch-label" x="340" y="97">×</text>
          <text class="arch-param" x="372" y="96">W<tspan baseline-shift="sub" font-size="0.7em">ya</tspan></text>
          <circle class="arch-node arch-output" cx="340" cy="50" r="15"></circle><text class="arch-label" x="340"
            y="55">+</text>
          <text class="arch-param" x="372" y="50">b<tspan baseline-shift="sub" font-size="0.7em">y</tspan></text>
          <rect class="arch-node" x="392" y="32" width="74" height="34" rx="7"></rect><text class="arch-label" x="429"
            y="52">softmax</text>
          <text class="arch-label" x="429" y="20">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan></text>
          <line class="arch-line" x1="78" y1="146" x2="103" y2="146" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="78" y1="212" x2="143" y2="212" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="131" y1="146" x2="192" y2="148" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="171" y1="208" x2="198" y2="162" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="226" y1="150" x2="250" y2="150" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="304" y1="150" x2="430" y2="150" marker-end="url(#cArrow)"></line>
          <text class="arch-small" x="470" y="146">a<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan> →</text>
          <line class="arch-line" x1="340" y1="132" x2="340" y2="107" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="340" y1="77" x2="340" y2="67" marker-end="url(#cArrow)"></line>
          <line class="arch-line" x1="340" y1="32" x2="340" y2="22" marker-end="url(#cArrow)"></line>
        </svg>
      </article>
      <article class="architecture-card">
        <h2>Folded 2-layer RNN</h2>
        <svg viewBox="0 0 520 250" role="img" aria-label="Folded 2-layer RNN">
          <defs>
            <marker id="fArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
              orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#8ca0b3"></path>
            </marker>
          </defs>
          <rect class="arch-node arch-input" x="30" y="190" width="74" height="44" rx="9"></rect><text
            class="arch-label" x="67" y="212">x<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan></text><text
            class="arch-small" x="67" y="228">n_x=3</text>
          <rect class="arch-node arch-hidden" x="30" y="120" width="74" height="44" rx="9"></rect><text
            class="arch-label" x="67" y="142">a<tspan baseline-shift="super" font-size="0.7em">⟨t⟩[1]</tspan>
          </text><text class="arch-small" x="67" y="158">n_a=5</text>
          <rect class="arch-node arch-hidden" x="30" y="50" width="74" height="44" rx="9"></rect><text
            class="arch-label" x="67" y="72">a<tspan baseline-shift="super" font-size="0.7em">⟨t⟩[2]</tspan></text><text
            class="arch-small" x="67" y="88">n_a=5</text>
          <rect class="arch-node arch-output" x="220" y="50" width="80" height="44" rx="9"></rect><text
            class="arch-label" x="260" y="72">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨t⟩</tspan></text><text
            class="arch-small" x="260" y="88">n_y=2</text>
          <line class="arch-line" x1="67" y1="190" x2="67" y2="166" marker-end="url(#fArrow)"></line><text
            class="arch-param" x="100" y="182">W<tspan baseline-shift="sub" font-size="0.7em">ax</tspan>
            <tspan baseline-shift="super" font-size="0.7em">[1]</tspan>
          </text>
          <line class="arch-line" x1="67" y1="120" x2="67" y2="96" marker-end="url(#fArrow)"></line><text
            class="arch-param" x="100" y="112">W<tspan baseline-shift="sub" font-size="0.7em">ax</tspan>
            <tspan baseline-shift="super" font-size="0.7em">[2]</tspan>
          </text>
          <line class="arch-line" x1="104" y1="72" x2="216" y2="72" marker-end="url(#fArrow)"></line><text
            class="arch-param" x="160" y="60">W<tspan baseline-shift="sub" font-size="0.7em">ya</tspan></text>
          <path class="arch-line" d="M86 120 C150 96, 150 118, 92 137" marker-end="url(#fArrow)"></path><text
            class="arch-param" x="150" y="128">W<tspan baseline-shift="sub" font-size="0.7em">aa</tspan>
            <tspan baseline-shift="super" font-size="0.7em">[1]</tspan>
          </text>
          <path class="arch-line" d="M86 50 C150 26, 150 48, 92 67" marker-end="url(#fArrow)"></path><text
            class="arch-param" x="150" y="40">W<tspan baseline-shift="sub" font-size="0.7em">aa</tspan>
            <tspan baseline-shift="super" font-size="0.7em">[2]</tspan>
          </text>
        </svg>
      </article>
      <article class="architecture-card">
        <h2>Unfolded through time (2 layers)</h2>
        <svg viewBox="0 0 700 360" role="img" aria-label="Unfolded 2-layer RNN">
          <defs>
            <marker id="uArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
              orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#8ca0b3"></path>
            </marker>
          </defs>
          <rect class="arch-node arch-hidden" x="8" y="170" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="31" y="194" font-size="12">a<tspan baseline-shift="super" font-size="0.7em">⟨0⟩[1]
            </tspan></text>
          <rect class="arch-node arch-hidden" x="8" y="90" width="46" height="40" rx="7"></rect><text class="arch-label"
            x="31" y="114" font-size="12">a<tspan baseline-shift="super" font-size="0.7em">⟨0⟩[2]</tspan></text>
          <rect class="arch-node arch-input" x="97" y="250" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="120" y="274" font-size="13">x<tspan baseline-shift="super" font-size="0.7em">⟨1⟩
            </tspan></text>
          <rect class="arch-node arch-hidden" x="97" y="170" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="120" y="194" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨1⟩[1]
            </tspan></text>
          <rect class="arch-node arch-hidden" x="97" y="90" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="120" y="114" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨1⟩[2]
            </tspan></text>
          <rect class="arch-node arch-output" x="97" y="10" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="120" y="34" font-size="13">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨1⟩
            </tspan></text>
          <line class="arch-line" x1="120" y1="250" x2="120" y2="210" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="120" y1="170" x2="120" y2="130" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="120" y1="90" x2="120" y2="50" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="54" y1="190" x2="97" y2="190" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="54" y1="110" x2="97" y2="110" marker-end="url(#uArrow)"></line><text
            class="arch-small" x="120" y="314">t = 1</text>
          <rect class="arch-node arch-input" x="227" y="250" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="250" y="274" font-size="13">x<tspan baseline-shift="super" font-size="0.7em">⟨2⟩
            </tspan></text>
          <rect class="arch-node arch-hidden" x="227" y="170" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="250" y="194" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨2⟩[1]
            </tspan></text>
          <rect class="arch-node arch-hidden" x="227" y="90" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="250" y="114" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨2⟩[2]
            </tspan></text>
          <rect class="arch-node arch-output" x="227" y="10" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="250" y="34" font-size="13">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨2⟩
            </tspan></text>
          <line class="arch-line" x1="250" y1="250" x2="250" y2="210" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="250" y1="170" x2="250" y2="130" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="250" y1="90" x2="250" y2="50" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="143" y1="190" x2="227" y2="190" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="143" y1="110" x2="227" y2="110" marker-end="url(#uArrow)"></line><text
            class="arch-small" x="250" y="314">t = 2</text>
          <rect class="arch-node arch-input" x="357" y="250" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="380" y="274" font-size="13">x<tspan baseline-shift="super" font-size="0.7em">⟨3⟩
            </tspan></text>
          <rect class="arch-node arch-hidden" x="357" y="170" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="380" y="194" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨3⟩[1]
            </tspan></text>
          <rect class="arch-node arch-hidden" x="357" y="90" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="380" y="114" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨3⟩[2]
            </tspan></text>
          <rect class="arch-node arch-output" x="357" y="10" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="380" y="34" font-size="13">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨3⟩
            </tspan></text>
          <line class="arch-line" x1="380" y1="250" x2="380" y2="210" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="380" y1="170" x2="380" y2="130" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="380" y1="90" x2="380" y2="50" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="273" y1="190" x2="357" y2="190" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="273" y1="110" x2="357" y2="110" marker-end="url(#uArrow)"></line><text
            class="arch-small" x="380" y="314">t = 3</text>
          <rect class="arch-node arch-input" x="487" y="250" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="510" y="274" font-size="13">x<tspan baseline-shift="super" font-size="0.7em">⟨4⟩
            </tspan></text>
          <rect class="arch-node arch-hidden" x="487" y="170" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="510" y="194" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨4⟩[1]
            </tspan></text>
          <rect class="arch-node arch-hidden" x="487" y="90" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="510" y="114" font-size="13">a<tspan baseline-shift="super" font-size="0.7em">⟨4⟩[2]
            </tspan></text>
          <rect class="arch-node arch-output" x="487" y="10" width="46" height="40" rx="7"></rect><text
            class="arch-label" x="510" y="34" font-size="13">ŷ<tspan baseline-shift="super" font-size="0.7em">⟨4⟩
            </tspan></text>
          <line class="arch-line" x1="510" y1="250" x2="510" y2="210" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="510" y1="170" x2="510" y2="130" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="510" y1="90" x2="510" y2="50" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="403" y1="190" x2="487" y2="190" marker-end="url(#uArrow)"></line>
          <line class="arch-line" x1="403" y1="110" x2="487" y2="110" marker-end="url(#uArrow)"></line><text
            class="arch-small" x="510" y="314">t = 4</text>
        </svg>
      </article>
    </div>

    <div class="stage">
      <svg id="rnnScene" viewBox="0 0 1080 455" role="img"
        aria-label="Animated 2-layer recurrent neural network training visualization"></svg>
      <control-bar prefix="rnn"></control-bar>
      <div id="rnnExpandedPanel" class="network-detail-stage" aria-live="polite"></div>
    </div>

    <section class="reference">
      <h1>Stacked RNN equations</h1>

      <p class="sub">
        Notation: superscript <span class="eq"><sup>&lt;t&gt;</sup></span> is the time step,
        <span class="eq"><sup>[l]</sup></span> is the layer, subscripts name the parameter.
        Each layer reuses its own shared parameters
        <span class="eq">( W<sub>ax</sub><sup>[l]</sup>, W<sub>aa</sub><sup>[l]</sup>, b<sub>a</sub><sup>[l]</sup>
          )</span>;
        only the top layer feeds <span class="eq">( W<sub>ya</sub>, b<sub>y</sub> )</span>.
        <span class="eq">⊙</span> is element-wise multiplication.
      </p>
      <h2 class="subhead">Forward propagation — two stacked cells</h2>
      <div class="equation-table-wrap">
        <table class="equation-table">
          <tr>
            <th><span class="eq">Tanh function</span></th>
            <td><span class="eq">tanh(z) = (e<sup>z</sup> − e<sup>−z</sup>) / (e<sup>z</sup> + e<sup>−z</sup>)</span>
            </td>
          </tr>
          <tr>
            <th><span class="eq">Layer 1 hidden a<sup>&lt;t&gt;[1]</sup></span></th>
            <td><span class="eq">a<sup>&lt;t&gt;[1]</sup> = tanh( W<sub>aa</sub><sup>[1]</sup>
                a<sup>&lt;t-1&gt;[1]</sup> + W<sub>ax</sub><sup>[1]</sup> x<sup>&lt;t&gt;</sup> +
                b<sub>a</sub><sup>[1]</sup> )</span></td>
          </tr>
          <tr>
            <th><span class="eq">Layer 2 hidden a<sup>&lt;t&gt;[2]</sup></span></th>
            <td><span class="eq">a<sup>&lt;t&gt;[2]</sup> = tanh( W<sub>aa</sub><sup>[2]</sup>
                a<sup>&lt;t-1&gt;[2]</sup> + W<sub>ax</sub><sup>[2]</sup> a<sup>&lt;t&gt;[1]</sup> +
                b<sub>a</sub><sup>[2]</sup> )</span></td>
          </tr>
          <tr>
            <th><span class="eq">Prediction ŷ<sup>&lt;t&gt;</sup></span></th>
            <td><span class="eq">ŷ<sup>&lt;t&gt;</sup> = <a class="equation-link"
                  href="/ml-animations/softmax">softmax</a>( W<sub>ya</sub> a<sup>&lt;t&gt;[2]</sup> +
                b<sub>y</sub> )</span></td>
          </tr>
          <tr>
            <th><span class="eq">Forward loop</span></th>
            <td><span class="eq">for t = 1 … T<sub>x</sub> : layer 1, then layer 2, then output</span></td>
          </tr>
        </table>
      </div>
      <h2 class="subhead">Tensor shapes</h2>
      <div class="equation-table-wrap">
        <table class="equation-table">
          <tr>
            <th><span class="eq">Layer 1 params</span></th>
            <td><span class="eq">W<sub>ax</sub><sup>[1]</sup> : (n<sub>a</sub>, n<sub>x</sub>) = (5,3),
                W<sub>aa</sub><sup>[1]</sup> : (5,5), b<sub>a</sub><sup>[1]</sup> : (5,1)</span></td>
          </tr>
          <tr>
            <th><span class="eq">Layer 2 params</span></th>
            <td><span class="eq">W<sub>ax</sub><sup>[2]</sup> : (n<sub>a</sub>, n<sub>a</sub>) = (5,5),
                W<sub>aa</sub><sup>[2]</sup> : (5,5), b<sub>a</sub><sup>[2]</sup> : (5,1)</span></td>
          </tr>
          <tr>
            <th><span class="eq">Output params</span></th>
            <td><span class="eq">W<sub>ya</sub> : (n<sub>y</sub>, n<sub>a</sub>) = (2,5), b<sub>y</sub> : (2,1)</span>
            </td>
          </tr>
        </table>
      </div>
      <h2 class="subhead">Backward propagation through time (stacked)</h2>
      <div class="equation-table-wrap">
        <table class="equation-table">
          <tr>
            <th><span class="eq">Output gradient</span></th>
            <td><span class="eq">dy<sup>&lt;t&gt;</sup> = ŷ<sup>&lt;t&gt;</sup> − y<sup>&lt;t&gt;</sup></span></td>
          </tr>
          <tr>
            <th><span class="eq">Layer 2 hidden grad</span></th>
            <td><span class="eq">da<sup>&lt;t&gt;[2]</sup> = W<sub>ya</sub><sup>T</sup> dy<sup>&lt;t&gt;</sup> +
                da<sub>prev</sub><sup>[2]</sup></span></td>
          </tr>
          <tr>
            <th><span class="eq">Layer 2 tanh grad</span></th>
            <td><span class="eq">dtanh<sup>[2]</sup> = da<sup>&lt;t&gt;[2]</sup> ⊙ ( 1 −
                (a<sup>&lt;t&gt;[2]</sup>)<sup>2</sup> )</span></td>
          </tr>
          <tr>
            <th><span class="eq">Into layer 1</span></th>
            <td><span class="eq">da<sup>&lt;t&gt;[1]</sup> = (W<sub>ax</sub><sup>[2]</sup>)<sup>T</sup>
                dtanh<sup>[2]</sup> + da<sub>prev</sub><sup>[1]</sup></span></td>
          </tr>
          <tr>
            <th><span class="eq">Layer 1 tanh grad</span></th>
            <td><span class="eq">dtanh<sup>[1]</sup> = da<sup>&lt;t&gt;[1]</sup> ⊙ ( 1 −
                (a<sup>&lt;t&gt;[1]</sup>)<sup>2</sup> )</span></td>
          </tr>
          <tr>
            <th><span class="eq">Weight grads</span></th>
            <td><span class="eq">dW<sub>ax</sub><sup>[l]</sup> += dtanh<sup>[l]</sup> (input<sup>[l]</sup>)<sup>T</sup>,
                dW<sub>aa</sub><sup>[l]</sup> += dtanh<sup>[l]</sup> (a<sup>&lt;t-1&gt;[l]</sup>)<sup>T</sup></span>
            </td>
          </tr>
        </table>
      </div>

    </section>

    <section class="reference">
      <h1>Parameters and gradients from the two passes</h1>
      <p class="sub">Parameters are shown after pass 2. Gradients are accumulated across all time steps during BPTT, per
        layer.</p>
      <div class="matrix-grid">
        <article class="matrix-card summary-card">
          <h3>RNN pass 1 summary</h3>
          <p>Cost: 0.693</p>
          <p>ŷ&lt;1&gt;: [0.5, 0.5]</p>
        </article>
        <article class="matrix-card summary-card">
          <h3>RNN pass 2 summary</h3>
          <p>Cost: 0.693</p>
          <p>ŷ&lt;1&gt;: [0.5, 0.5]</p>
        </article>
        <article class="matrix-card">
          <h3>Wax[1] <span>(5, 3)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.162</td>
                <td>-0.061</td>
                <td>-0.053</td>
              </tr>
              <tr>
                <td>-0.107</td>
                <td>0.086</td>
                <td>-0.23</td>
              </tr>
              <tr>
                <td>0.175</td>
                <td>-0.076</td>
                <td>0.032</td>
              </tr>
              <tr>
                <td>-0.024</td>
                <td>0.147</td>
                <td>-0.207</td>
              </tr>
              <tr>
                <td>-0.032</td>
                <td>-0.038</td>
                <td>0.113</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>Waa[1] <span>(5, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.11</td>
                <td>-0.017</td>
                <td>-0.088</td>
                <td>0.004</td>
                <td>0.058</td>
              </tr>
              <tr>
                <td>-0.11</td>
                <td>0.114</td>
                <td>0.09</td>
                <td>0.05</td>
                <td>0.09</td>
              </tr>
              <tr>
                <td>-0.068</td>
                <td>-0.012</td>
                <td>-0.094</td>
                <td>-0.027</td>
                <td>0.053</td>
              </tr>
              <tr>
                <td>-0.069</td>
                <td>-0.04</td>
                <td>-0.069</td>
                <td>-0.085</td>
                <td>-0.067</td>
              </tr>
              <tr>
                <td>-0.001</td>
                <td>-0.112</td>
                <td>0.023</td>
                <td>0.166</td>
                <td>0.074</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>ba[1] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>Wax[2] <span>(5, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.019</td>
                <td>-0.088</td>
                <td>-0.074</td>
                <td>0.171</td>
                <td>0.004</td>
              </tr>
              <tr>
                <td>-0.063</td>
                <td>0.02</td>
                <td>0.21</td>
                <td>0.013</td>
                <td>0.061</td>
              </tr>
              <tr>
                <td>0.03</td>
                <td>-0.036</td>
                <td>-0.114</td>
                <td>-0.036</td>
                <td>-0.02</td>
              </tr>
              <tr>
                <td>0.059</td>
                <td>0.084</td>
                <td>0.093</td>
                <td>0.028</td>
                <td>0.089</td>
              </tr>
              <tr>
                <td>-0.076</td>
                <td>0.125</td>
                <td>0.051</td>
                <td>-0.03</td>
                <td>0.049</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>Waa[2] <span>(5, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.008</td>
                <td>0.113</td>
                <td>0.152</td>
                <td>0.219</td>
                <td>-0.14</td>
              </tr>
              <tr>
                <td>-0.144</td>
                <td>-0.05</td>
                <td>0.016</td>
                <td>0.088</td>
                <td>0.032</td>
              </tr>
              <tr>
                <td>-0.202</td>
                <td>-0.031</td>
                <td>0.083</td>
                <td>0.023</td>
                <td>0.076</td>
              </tr>
              <tr>
                <td>-0.022</td>
                <td>-0.02</td>
                <td>0.019</td>
                <td>0.041</td>
                <td>0.02</td>
              </tr>
              <tr>
                <td>0.012</td>
                <td>-0.067</td>
                <td>0.038</td>
                <td>0.012</td>
                <td>0.113</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>ba[2] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>-0.002</td>
              </tr>
              <tr>
                <td>0.002</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>Wya <span>(2, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.121</td>
                <td>0.019</td>
                <td>-0.038</td>
                <td>-0.063</td>
                <td>0.042</td>
              </tr>
              <tr>
                <td>0.006</td>
                <td>-0.035</td>
                <td>0.005</td>
                <td>-0.063</td>
                <td>0.07</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>by <span>(2, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dWax[1] <span>(5, 3)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
                <td>0.002</td>
                <td>-0.002</td>
              </tr>
              <tr>
                <td>0.001</td>
                <td>0.001</td>
                <td>-0.003</td>
              </tr>
              <tr>
                <td>-0.001</td>
                <td>-0.001</td>
                <td>0.002</td>
              </tr>
              <tr>
                <td>-0.004</td>
                <td>-0.004</td>
                <td>0.006</td>
              </tr>
              <tr>
                <td>-0.001</td>
                <td>-0.001</td>
                <td>0.001</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dWaa[1] <span>(5, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>0.0</td>
                <td>-0.001</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>-0.001</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.001</td>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.001</td>
                <td>0.0</td>
                <td>0.002</td>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>-0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dWya <span>(2, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.008</td>
                <td>-0.001</td>
                <td>0.002</td>
                <td>-0.007</td>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.008</td>
                <td>0.001</td>
                <td>-0.002</td>
                <td>0.007</td>
                <td>0.001</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dba[1] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>-0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dba[2] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.006</td>
              </tr>
              <tr>
                <td>0.006</td>
              </tr>
              <tr>
                <td>0.013</td>
              </tr>
              <tr>
                <td>-0.01</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 1 dby <span>(2, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dWax[1] <span>(5, 3)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
                <td>0.002</td>
                <td>-0.002</td>
              </tr>
              <tr>
                <td>0.001</td>
                <td>0.001</td>
                <td>-0.003</td>
              </tr>
              <tr>
                <td>-0.001</td>
                <td>-0.001</td>
                <td>0.002</td>
              </tr>
              <tr>
                <td>-0.004</td>
                <td>-0.005</td>
                <td>0.007</td>
              </tr>
              <tr>
                <td>-0.001</td>
                <td>-0.001</td>
                <td>0.001</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dWaa[1] <span>(5, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>0.0</td>
                <td>-0.001</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>-0.0</td>
                <td>-0.001</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.001</td>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.001</td>
                <td>0.0</td>
                <td>0.002</td>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>-0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dWya <span>(2, 5)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.008</td>
                <td>-0.001</td>
                <td>0.002</td>
                <td>-0.007</td>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.008</td>
                <td>0.001</td>
                <td>-0.002</td>
                <td>0.007</td>
                <td>0.001</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dba[1] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>0.0</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
              <tr>
                <td>-0.0</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dba[2] <span>(5, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>-0.0</td>
              </tr>
              <tr>
                <td>0.006</td>
              </tr>
              <tr>
                <td>0.006</td>
              </tr>
              <tr>
                <td>0.013</td>
              </tr>
              <tr>
                <td>-0.01</td>
              </tr>
            </table>
          </div>
        </article>
        <article class="matrix-card">
          <h3>pass 2 dby <span>(2, 1)</span></h3>
          <div class="matrix-scroll">
            <table>
              <tr>
                <td>0.001</td>
              </tr>
              <tr>
                <td>-0.001</td>
              </tr>
            </table>
          </div>
        </article>
      </div>
    </section>
  </div>

  <script>

    const ns = "http://www.w3.org/2000/svg";

    function mathTokens(text) {
      const tokens = []; let buffer = ""; let i = 0;
      const flush = () => { if (buffer) { tokens.push({ text: buffer, shift: null }); buffer = ""; } };
      while (i < text.length) {
        const ch = text[i];
        if (ch === "_" || ch === "^") {
          flush(); const shift = ch === "_" ? "sub" : "super"; i += 1; let content;
          if (text[i] === "{") { const close = text.indexOf("}", i); content = text.slice(i + 1, close); i = close + 1; }
          else { content = text[i] || ""; i += 1; }
          tokens.push({ text: content, shift });
        } else { buffer += ch; i += 1; }
      }
      flush(); return tokens;
    }
    function mathTypeset(node, markup, centered) {
      while (node.firstChild) node.removeChild(node.firstChild);
      const baseX = node.getAttribute("x");
      String(markup).split("\\n").forEach((line, lineIndex) => {
        const tokens = mathTokens(line);
        tokens.forEach((token, tokenIndex) => {
          const tspan = document.createElementNS(ns, "tspan");
          if (!centered && tokenIndex === 0) { tspan.setAttribute("x", baseX); tspan.setAttribute("dy", lineIndex === 0 ? "0" : "27"); }
          if (token.shift) { tspan.setAttribute("baseline-shift", token.shift); tspan.setAttribute("font-size", "0.7em"); }
          tspan.textContent = token.text; node.appendChild(tspan);
        });
      });
    }
    function mathHtml(markup) {
      const html = mathTokens(String(markup)).map((token) => {
        const escaped = token.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (token.shift === "sub") return "<sub>" + escaped + "</sub>";
        if (token.shift === "super") return "<sup>" + escaped + "</sup>";
        return escaped;
      }).join("");
      return '<span class="eq">' + html + "</span>";
    }
    function nnWrapText(text, maxChars) {
      const words = String(text).split(" "); const lines = []; let current = "";
      words.forEach((word) => {
        const next = current ? current + " " + word : word;
        if (next.length > maxChars && current) { lines.push(current); current = word; } else { current = next; }
      });
      if (current) lines.push(current); return lines;
    }

    const RNN = { "inputSize": 3, "hiddenSize": 5, "hiddenLayers": 2, "outputSize": 2, "timeSteps": 4, "steps": [{ "phase": "input", "time": 0, "title": "Stacked RNN sequence data", "formula": "x : (n_x, m, T_x)\\nn_x=3,  n_a=5 per layer,  L=2,  T_x=4", "expanded": "Two recurrent layers are stacked: layer 1 reads x, layer 2 reads layer 1's hidden state.", "detail": "Same per-layer parameters are reused at every time step.", "sample": "x<1>=[0.25, 0.7, 0.1], y<1>=[1.0, 0.0]" }, { "phase": "input", "time": 0, "title": "RNN pass 1: start", "formula": "a^{⟨0⟩[1]} = 0,  a^{⟨0⟩[2]} = 0\\nshape (n_a, m)", "expanded": "Forward propagation loops t = 1 … T_x and reuses both stacked cells.", "detail": "learning_rate = 0.08", "sample": "target y<1>=[1.0, 0.0]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 1, "title": "RNN pass 1: t=1, layer 1 hidden state", "formula": "a^{⟨1⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨0⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨1⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨1⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨0⟩[1]} + W_{ax}^{[1]} x^{⟨1⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨0⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨1⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<1>=[-0.007, 0.011, -0.006, 0.075, -0.024]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 1, "title": "RNN pass 1: t=1, layer 2 hidden state", "formula": "a^{⟨1⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨0⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨1⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨1⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨0⟩[2]} + W_{ax}^{[2]} a^{⟨1⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨0⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨1⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<1>=[0.012, -0.001, -0.002, -0.0, -0.002]" }, { "phase": "forward", "subphase": "y", "time": 1, "title": "RNN pass 1: t=1, prediction", "formula": "ŷ^{⟨1⟩} = softmax( W_{ya} a^{⟨1⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨1⟩} = softmax( W_{ya} a^{⟨1⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨1⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<1>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 2, "title": "RNN pass 1: t=2, layer 1 hidden state", "formula": "a^{⟨2⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨1⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨2⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨2⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨1⟩[1]} + W_{ax}^{[1]} x^{⟨2⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨1⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨2⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<2>=[0.03, -0.156, 0.077, -0.112, 0.055]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 2, "title": "RNN pass 1: t=2, layer 2 hidden state", "formula": "a^{⟨2⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨1⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨2⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨2⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨1⟩[2]} + W_{ax}^{[2]} a^{⟨2⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨1⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨2⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<2>=[-0.012, 0.012, -0.002, -0.003, -0.012]" }, { "phase": "forward", "subphase": "y", "time": 2, "title": "RNN pass 1: t=2, prediction", "formula": "ŷ^{⟨2⟩} = softmax( W_{ya} a^{⟨2⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨2⟩} = softmax( W_{ya} a^{⟨2⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨2⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<2>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 3, "title": "RNN pass 1: t=3, layer 1 hidden state", "formula": "a^{⟨3⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨2⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨3⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨3⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨2⟩[1]} + W_{ax}^{[1]} x^{⟨3⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨2⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨3⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<3>=[0.072, -0.104, 0.095, -0.009, -0.005]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 3, "title": "RNN pass 1: t=3, layer 2 hidden state", "formula": "a^{⟨3⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨2⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨3⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨3⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨2⟩[2]} + W_{ax}^{[2]} a^{⟨3⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨2⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨3⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<3>=[0.001, 0.013, -0.004, 0.003, -0.016]" }, { "phase": "forward", "subphase": "y", "time": 3, "title": "RNN pass 1: t=3, prediction", "formula": "ŷ^{⟨3⟩} = softmax( W_{ya} a^{⟨3⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨3⟩} = softmax( W_{ya} a^{⟨3⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨3⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<3>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 4, "title": "RNN pass 1: t=4, layer 1 hidden state", "formula": "a^{⟨4⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨3⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨4⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨4⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨3⟩[1]} + W_{ax}^{[1]} x^{⟨4⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨3⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨4⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<4>=[-0.039, -0.065, -0.013, -0.009, 0.028]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 4, "title": "RNN pass 1: t=4, layer 2 hidden state", "formula": "a^{⟨4⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨3⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨4⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨4⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨3⟩[2]} + W_{ax}^{[2]} a^{⟨4⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨3⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨4⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<4>=[0.01, -0.001, 0.0, -0.007, -0.007]" }, { "phase": "forward", "subphase": "y", "time": 4, "title": "RNN pass 1: t=4, prediction", "formula": "ŷ^{⟨4⟩} = softmax( W_{ya} a^{⟨4⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨4⟩} = softmax( W_{ya} a^{⟨4⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨4⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<4>=[0.5, 0.5]" }, { "phase": "loss", "time": 4, "title": "RNN pass 1: sequence cost", "formula": "J = − (1/T_x) Σ_t Σ_k\\ny_k^{⟨t⟩} log ŷ_k^{⟨t⟩}", "expanded": "Softmax cross-entropy summed over all time steps.", "detail": "T=4, outputs per step=2", "sample": "cost = 0.693" }, { "phase": "backward", "time": 4, "title": "RNN pass 1: BPTT t=4", "formula": "dtanh^{[l]} = da^{⟨4⟩[l]} ⊙\\n( 1 − (a^{⟨4⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨4⟩} = ŷ^{⟨4⟩} − y^{⟨4⟩}", "da^{⟨4⟩[2]} = W_{ya}^T · dy^{⟨4⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨4⟩[2]} ⊙ ( 1 − (a^{⟨4⟩[2]})^2 )", "da^{⟨4⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨4⟩[1]} ⊙ ( 1 − (a^{⟨4⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨4⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨3⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<4>=[0.5, -0.5]; da1_prev=[-0.0, -0.001, -0.001, -0.001, -0.001]" }, { "phase": "backward", "time": 3, "title": "RNN pass 1: BPTT t=3", "formula": "dtanh^{[l]} = da^{⟨3⟩[l]} ⊙\\n( 1 − (a^{⟨3⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨3⟩} = ŷ^{⟨3⟩} − y^{⟨3⟩}", "da^{⟨3⟩[2]} = W_{ya}^T · dy^{⟨3⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨3⟩[2]} ⊙ ( 1 − (a^{⟨3⟩[2]})^2 )", "da^{⟨3⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨3⟩[1]} ⊙ ( 1 − (a^{⟨3⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨3⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨2⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<3>=[-0.5, 0.5]; da1_prev=[0.0, 0.001, 0.001, 0.001, 0.001]" }, { "phase": "backward", "time": 2, "title": "RNN pass 1: BPTT t=2", "formula": "dtanh^{[l]} = da^{⟨2⟩[l]} ⊙\\n( 1 − (a^{⟨2⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨2⟩} = ŷ^{⟨2⟩} − y^{⟨2⟩}", "da^{⟨2⟩[2]} = W_{ya}^T · dy^{⟨2⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨2⟩[2]} ⊙ ( 1 − (a^{⟨2⟩[2]})^2 )", "da^{⟨2⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨2⟩[1]} ⊙ ( 1 − (a^{⟨2⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨2⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨1⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<2>=[0.5, -0.5]; da1_prev=[-0.0, -0.001, -0.001, -0.001, -0.001]" }, { "phase": "backward", "time": 1, "title": "RNN pass 1: BPTT t=1", "formula": "dtanh^{[l]} = da^{⟨1⟩[l]} ⊙\\n( 1 − (a^{⟨1⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨1⟩} = ŷ^{⟨1⟩} − y^{⟨1⟩}", "da^{⟨1⟩[2]} = W_{ya}^T · dy^{⟨1⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨1⟩[2]} ⊙ ( 1 − (a^{⟨1⟩[2]})^2 )", "da^{⟨1⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨1⟩[1]} ⊙ ( 1 − (a^{⟨1⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨1⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨0⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<1>=[-0.5, 0.5]; da1_prev=[0.0, 0.001, 0.001, 0.001, 0.001]" }, { "phase": "update", "time": 0, "title": "RNN pass 1: update", "formula": "θ := θ − α · dθ\\nθ ∈ { W_{ax}^{[l]}, W_{aa}^{[l]}, W_{ya}, b_a^{[l]}, b_y }", "expanded": "Both layers' parameters are updated by gradient descent; the next pass starts from these.", "detail": "learning_rate = 0.08", "sample": "Wax1[1,1]: 0.162 -> 0.162" }, { "phase": "input", "time": 0, "title": "RNN pass 2: start", "formula": "a^{⟨0⟩[1]} = 0,  a^{⟨0⟩[2]} = 0\\nshape (n_a, m)", "expanded": "Forward propagation loops t = 1 … T_x and reuses both stacked cells.", "detail": "learning_rate = 0.08", "sample": "target y<1>=[1.0, 0.0]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 1, "title": "RNN pass 2: t=1, layer 1 hidden state", "formula": "a^{⟨1⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨0⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨1⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨1⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨0⟩[1]} + W_{ax}^{[1]} x^{⟨1⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨0⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨1⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<1>=[-0.008, 0.011, -0.006, 0.076, -0.024]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 1, "title": "RNN pass 2: t=1, layer 2 hidden state", "formula": "a^{⟨1⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨0⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨1⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨1⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨0⟩[2]} + W_{ax}^{[2]} a^{⟨1⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨0⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨1⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<1>=[0.012, -0.002, -0.003, -0.001, -0.001]" }, { "phase": "forward", "subphase": "y", "time": 1, "title": "RNN pass 2: t=1, prediction", "formula": "ŷ^{⟨1⟩} = softmax( W_{ya} a^{⟨1⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨1⟩} = softmax( W_{ya} a^{⟨1⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨1⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<1>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 2, "title": "RNN pass 2: t=2, layer 1 hidden state", "formula": "a^{⟨2⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨1⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨2⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨2⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨1⟩[1]} + W_{ax}^{[1]} x^{⟨2⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨1⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨2⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<2>=[0.03, -0.156, 0.077, -0.113, 0.055]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 2, "title": "RNN pass 2: t=2, layer 2 hidden state", "formula": "a^{⟨2⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨1⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨2⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨2⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨1⟩[2]} + W_{ax}^{[2]} a^{⟨2⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨1⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨2⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<2>=[-0.012, 0.011, -0.003, -0.004, -0.011]" }, { "phase": "forward", "subphase": "y", "time": 2, "title": "RNN pass 2: t=2, prediction", "formula": "ŷ^{⟨2⟩} = softmax( W_{ya} a^{⟨2⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨2⟩} = softmax( W_{ya} a^{⟨2⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨2⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<2>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 3, "title": "RNN pass 2: t=3, layer 1 hidden state", "formula": "a^{⟨3⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨2⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨3⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨3⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨2⟩[1]} + W_{ax}^{[1]} x^{⟨3⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨2⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨3⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<3>=[0.072, -0.104, 0.095, -0.009, -0.005]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 3, "title": "RNN pass 2: t=3, layer 2 hidden state", "formula": "a^{⟨3⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨2⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨3⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨3⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨2⟩[2]} + W_{ax}^{[2]} a^{⟨3⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨2⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨3⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<3>=[0.001, 0.013, -0.004, 0.002, -0.015]" }, { "phase": "forward", "subphase": "y", "time": 3, "title": "RNN pass 2: t=3, prediction", "formula": "ŷ^{⟨3⟩} = softmax( W_{ya} a^{⟨3⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨3⟩} = softmax( W_{ya} a^{⟨3⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨3⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<3>=[0.5, 0.5]" }, { "phase": "forward", "subphase": "a1", "layer": 1, "time": 4, "title": "RNN pass 2: t=4, layer 1 hidden state", "formula": "a^{⟨4⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨3⟩[1]}\\n+ W_{ax}^{[1]} x^{⟨4⟩} + b_a^{[1]} )", "expanded": "Layer 1 reads the input x^{⟨t⟩} and its own previous hidden state.", "calculations": ["a^{⟨4⟩[1]} = tanh( W_{aa}^{[1]} a^{⟨3⟩[1]} + W_{ax}^{[1]} x^{⟨4⟩} + b_a^{[1]} )", "W_{aa}^{[1]} (5×5) · a^{⟨3⟩[1]} (5×1)", "W_{ax}^{[1]} (5×3) · x^{⟨4⟩} (3×1)"], "detail": "xt(3, 1), a1_prev(5, 1) -> a1(5, 1)", "sample": "a1<4>=[-0.04, -0.065, -0.013, -0.009, 0.028]" }, { "phase": "forward", "subphase": "a2", "layer": 2, "time": 4, "title": "RNN pass 2: t=4, layer 2 hidden state", "formula": "a^{⟨4⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨3⟩[2]}\\n+ W_{ax}^{[2]} a^{⟨4⟩[1]} + b_a^{[2]} )", "expanded": "Layer 2's input is layer 1's hidden state a^{⟨t⟩[1]} (not x).", "calculations": ["a^{⟨4⟩[2]} = tanh( W_{aa}^{[2]} a^{⟨3⟩[2]} + W_{ax}^{[2]} a^{⟨4⟩[1]} + b_a^{[2]} )", "W_{aa}^{[2]} (5×5) · a^{⟨3⟩[2]} (5×1)", "W_{ax}^{[2]} (5×5) · a^{⟨4⟩[1]} (5×1)"], "detail": "a1(5, 1), a2_prev(5, 1) -> a2(5, 1)", "sample": "a2<4>=[0.01, -0.002, -0.0, -0.008, -0.006]" }, { "phase": "forward", "subphase": "y", "time": 4, "title": "RNN pass 2: t=4, prediction", "formula": "ŷ^{⟨4⟩} = softmax( W_{ya} a^{⟨4⟩[2]} + b_y )", "expanded": "Only the top layer's hidden state feeds the output softmax.", "calculations": ["ŷ^{⟨4⟩} = softmax( W_{ya} a^{⟨4⟩[2]} + b_y )", "W_{ya} (2×5) · a^{⟨4⟩[2]} (5×1)"], "detail": "a2(5, 1) -> yt_pred(2, 1)", "sample": "ŷ<4>=[0.5, 0.5]" }, { "phase": "loss", "time": 4, "title": "RNN pass 2: sequence cost", "formula": "J = − (1/T_x) Σ_t Σ_k\\ny_k^{⟨t⟩} log ŷ_k^{⟨t⟩}", "expanded": "Softmax cross-entropy summed over all time steps.", "detail": "T=4, outputs per step=2", "sample": "cost = 0.693" }, { "phase": "backward", "time": 4, "title": "RNN pass 2: BPTT t=4", "formula": "dtanh^{[l]} = da^{⟨4⟩[l]} ⊙\\n( 1 − (a^{⟨4⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨4⟩} = ŷ^{⟨4⟩} − y^{⟨4⟩}", "da^{⟨4⟩[2]} = W_{ya}^T · dy^{⟨4⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨4⟩[2]} ⊙ ( 1 − (a^{⟨4⟩[2]})^2 )", "da^{⟨4⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨4⟩[1]} ⊙ ( 1 − (a^{⟨4⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨4⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨3⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<4>=[0.5, -0.5]; da1_prev=[-0.0, -0.001, -0.001, -0.001, -0.001]" }, { "phase": "backward", "time": 3, "title": "RNN pass 2: BPTT t=3", "formula": "dtanh^{[l]} = da^{⟨3⟩[l]} ⊙\\n( 1 − (a^{⟨3⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨3⟩} = ŷ^{⟨3⟩} − y^{⟨3⟩}", "da^{⟨3⟩[2]} = W_{ya}^T · dy^{⟨3⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨3⟩[2]} ⊙ ( 1 − (a^{⟨3⟩[2]})^2 )", "da^{⟨3⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨3⟩[1]} ⊙ ( 1 − (a^{⟨3⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨3⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨2⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<3>=[-0.5, 0.5]; da1_prev=[0.0, 0.001, 0.001, 0.001, 0.001]" }, { "phase": "backward", "time": 2, "title": "RNN pass 2: BPTT t=2", "formula": "dtanh^{[l]} = da^{⟨2⟩[l]} ⊙\\n( 1 − (a^{⟨2⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨2⟩} = ŷ^{⟨2⟩} − y^{⟨2⟩}", "da^{⟨2⟩[2]} = W_{ya}^T · dy^{⟨2⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨2⟩[2]} ⊙ ( 1 − (a^{⟨2⟩[2]})^2 )", "da^{⟨2⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨2⟩[1]} ⊙ ( 1 − (a^{⟨2⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨2⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨1⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<2>=[0.5, -0.5]; da1_prev=[-0.0, -0.001, -0.001, -0.001, -0.001]" }, { "phase": "backward", "time": 1, "title": "RNN pass 2: BPTT t=1", "formula": "dtanh^{[l]} = da^{⟨1⟩[l]} ⊙\\n( 1 − (a^{⟨1⟩[l]})^2 )", "expanded": "Gradient flows down through layer 2 into layer 1, and back through time in each layer.", "calculations": ["dy^{⟨1⟩} = ŷ^{⟨1⟩} − y^{⟨1⟩}", "da^{⟨1⟩[2]} = W_{ya}^T · dy^{⟨1⟩} + da_{prev}^{[2]}", "dtanh^{[2]} = da^{⟨1⟩[2]} ⊙ ( 1 − (a^{⟨1⟩[2]})^2 )", "da^{⟨1⟩[1]} = W_{ax}^{[2]T} · dtanh^{[2]} + da_{prev}^{[1]}", "dtanh^{[1]} = da^{⟨1⟩[1]} ⊙ ( 1 − (a^{⟨1⟩[1]})^2 )", "dW_{ax}^{[2]} += dtanh^{[2]} · (a^{⟨1⟩[1]})^T", "dW_{aa}^{[l]} += dtanh^{[l]} · (a^{⟨0⟩[l]})^T"], "detail": "Layer-2 gradient becomes layer-1's upstream gradient.", "sample": "dy<1>=[-0.5, 0.5]; da1_prev=[0.0, 0.001, 0.001, 0.001, 0.001]" }, { "phase": "update", "time": 0, "title": "RNN pass 2: update", "formula": "θ := θ − α · dθ\\nθ ∈ { W_{ax}^{[l]}, W_{aa}^{[l]}, W_{ya}, b_a^{[l]}, b_y }", "expanded": "Both layers' parameters are updated by gradient descent; the next pass starts from these.", "detail": "learning_rate = 0.08", "sample": "Wax1[1,1]: 0.162 -> 0.162" }], "passSummaries": [{ "pass": 1, "cost": 0.693, "outputSample": [0.5, 0.5] }, { "pass": 2, "cost": 0.693, "outputSample": [0.5, 0.5] }] };

    const rnnSvg = document.getElementById("rnnScene");
    const rnnExpandedPanel = document.getElementById("rnnExpandedPanel");
    const rnnPlayBtn = document.getElementById("rnnPlay");
    const rnnPauseBtn = document.getElementById("rnnPause");
    const rnnPrev = document.getElementById("rnnBack");
    const rnnNextButton = document.getElementById("rnnStep");
    const rnnRestart = document.getElementById("rnnReset");
    const rnnFrameMs = 2200;
    let rnnTimer = null, rnnPlaying = true, rnnStepIndex = 0;

    function rnnAdd(tag, attrs, text) {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs || {}).forEach(([k, v]) => node.setAttribute(k, v));
      if (text !== undefined) node.textContent = text;
      rnnSvg.appendChild(node); return node;
    }

    const RNN_NODE_W = 58, RNN_NODE_H = 42;
    const RNN_Y_PRED = 92, RNN_Y_A2 = 190, RNN_Y_A1 = 288, RNN_Y_IN = 386;

    function rnnSquare(id, cx, cy, label) {
      rnnAdd("rect", { id, class: "rnn-node-box", x: cx - RNN_NODE_W / 2, y: cy - RNN_NODE_H / 2, width: RNN_NODE_W, height: RNN_NODE_H, rx: 7 });
      const text = rnnAdd("text", { class: "rnn-node-label", x: cx, y: cy }, "");
      mathTypeset(text, label, true);
    }
    function rnnEdge(id, x1, y1, x2, y2) {
      rnnAdd("line", { id, class: "nn-edge", x1, y1, x2, y2, "marker-end": "url(#rnnArrow)" });
    }
    function rnnParam(markup, x, y, className) {
      const text = rnnAdd("text", { class: className || "rnn-param", x, y }, "");
      mathTypeset(text, markup, true);
    }
    function rnnColX(t) { return 160 + (t - 1) * 190; }

    function rnnDrawStatic() {
      rnnSvg.innerHTML = '<defs><marker id="rnnArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7c8a99"></path></marker></defs>';
      const a0x = 60;
      rnnSquare("rnn-a1-0", a0x, RNN_Y_A1, "a^{⟨0⟩[1]}");
      rnnSquare("rnn-a2-0", a0x, RNN_Y_A2, "a^{⟨0⟩[2]}");
      rnnAdd("text", { class: "nn-layer-label", x: a0x, y: RNN_Y_IN + 46 }, "init");

      for (let t = 1; t <= RNN.timeSteps; t += 1) {
        const x = rnnColX(t);
        rnnAdd("rect", { id: "rnn-frame-" + t, class: "rnn-cell-frame", x: x - 45, y: RNN_Y_PRED - 30, width: 90, height: (RNN_Y_IN + 30) - (RNN_Y_PRED - 30), rx: 10 });
        rnnSquare("rnn-x-" + t, x, RNN_Y_IN, "x^{⟨" + t + "⟩}");
        rnnSquare("rnn-a1-" + t, x, RNN_Y_A1, "a^{⟨" + t + "⟩[1]}");
        rnnSquare("rnn-a2-" + t, x, RNN_Y_A2, "a^{⟨" + t + "⟩[2]}");
        rnnSquare("rnn-y-" + t, x, RNN_Y_PRED, "ŷ^{⟨" + t + "⟩}");

        rnnEdge("rnn-in1-" + t, x, RNN_Y_IN - RNN_NODE_H / 2, x, RNN_Y_A1 + RNN_NODE_H / 2 + 4);
        rnnParam("W_{ax}^{[1]}", x + 34, (RNN_Y_IN + RNN_Y_A1) / 2 - 2);

        rnnEdge("rnn-in2-" + t, x, RNN_Y_A1 - RNN_NODE_H / 2, x, RNN_Y_A2 + RNN_NODE_H / 2 + 4);
        rnnParam("W_{ax}^{[2]}", x + 34, (RNN_Y_A1 + RNN_Y_A2) / 2 - 2);

        rnnEdge("rnn-out-" + t, x, RNN_Y_A2 - RNN_NODE_H / 2, x, RNN_Y_PRED + RNN_NODE_H / 2 + 4);
        rnnParam("W_{ya}", x + 30, (RNN_Y_A2 + RNN_Y_PRED) / 2 - 2);

        const prevRight = (t === 1 ? a0x : rnnColX(t - 1)) + RNN_NODE_W / 2;
        rnnEdge("rnn-rec1-" + t, prevRight, RNN_Y_A1, x - RNN_NODE_W / 2 - 4, RNN_Y_A1);
        rnnParam("W_{aa}^{[1]}", (prevRight + x - RNN_NODE_W / 2) / 2, RNN_Y_A1 - 10);
        rnnEdge("rnn-rec2-" + t, prevRight, RNN_Y_A2, x - RNN_NODE_W / 2 - 4, RNN_Y_A2);
        rnnParam("W_{aa}^{[2]}", (prevRight + x - RNN_NODE_W / 2) / 2, RNN_Y_A2 - 10);

        rnnAdd("text", { class: "nn-layer-label", x, y: RNN_Y_IN + 46 }, "t = " + t);
      }

      rnnAdd("text", { class: "nn-layer-label", x: 870, y: RNN_Y_PRED }, "output");
      rnnAdd("text", { class: "nn-layer-label", x: 870, y: RNN_Y_A2 }, "layer 2");
      rnnAdd("text", { class: "nn-layer-label", x: 870, y: RNN_Y_A1 }, "layer 1");
      rnnAdd("text", { class: "nn-layer-label", x: 870, y: RNN_Y_IN }, "input");

    }

    function setCls(id, cls) { const el = document.getElementById(id); if (el) el.setAttribute("class", cls); }

    function rnnResetHighlights() {
      setCls("rnn-a1-0", "rnn-node-box"); setCls("rnn-a2-0", "rnn-node-box");
      for (let t = 1; t <= RNN.timeSteps; t += 1) {
        ["x", "a1", "a2", "y"].forEach((p) => setCls("rnn-" + p + "-" + t, "rnn-node-box"));
        ["in1", "in2", "out", "rec1", "rec2"].forEach((e) => setCls("rnn-" + e + "-" + t, "nn-edge"));
      }
    }
    function rnnWrite(id, lines) {
      const node = document.getElementById(id);
      while (node.firstChild) node.removeChild(node.firstChild);
      lines.forEach((line, index) => {
        const tspan = document.createElementNS(ns, "tspan");
        tspan.setAttribute("x", node.getAttribute("x"));
        tspan.setAttribute("dy", index === 0 ? "0" : "22");
        tspan.textContent = line; node.appendChild(tspan);
      });
    }

    function rnnRenderStep() {
      rnnResetHighlights();
      rnnExpandedPanel.innerHTML = "";
      const step = RNN.steps[rnnStepIndex];
      const t = step.time;
      const prev1 = (k) => (k <= 1 ? "rnn-a1-0" : "rnn-a1-" + (k - 1));
      const prev2 = (k) => (k <= 1 ? "rnn-a2-0" : "rnn-a2-" + (k - 1));

      if (step.phase === "input") {
        setCls("rnn-a1-0", "nn-node-active"); setCls("rnn-a2-0", "nn-node-active");
      } else if (step.phase === "forward" && t > 0) {
        if (step.subphase === "a1") {
          setCls("rnn-x-" + t, "nn-node-active"); setCls(prev1(t), "nn-node-active");
          setCls("rnn-a1-" + t, "nn-node-active");
          setCls("rnn-in1-" + t, "nn-edge-active"); setCls("rnn-rec1-" + t, "nn-edge-active");
        } else if (step.subphase === "a2") {
          setCls("rnn-a1-" + t, "nn-node-active"); setCls(prev2(t), "nn-node-active");
          setCls("rnn-a2-" + t, "nn-node-active");
          setCls("rnn-in2-" + t, "nn-edge-active"); setCls("rnn-rec2-" + t, "nn-edge-active");
        } else {
          setCls("rnn-a2-" + t, "nn-node-active"); setCls("rnn-y-" + t, "nn-node-active");
          setCls("rnn-out-" + t, "nn-edge-active");
        }
      } else if (step.phase === "backward" && t > 0) {
        ["rnn-y-" + t, "rnn-a2-" + t, "rnn-a1-" + t, prev1(t), prev2(t)].forEach((id) => setCls(id, "nn-node-back"));
        ["out", "in2", "in1", "rec1", "rec2"].forEach((e) => setCls("rnn-" + e + "-" + t, "nn-edge-back"));
      } else if (step.phase === "loss") {
        for (let i = 1; i <= RNN.timeSteps; i += 1) setCls("rnn-y-" + i, "nn-node-update");
      } else if (step.phase === "update") {
        for (let i = 1; i <= RNN.timeSteps; i += 1) { setCls("rnn-a1-" + i, "nn-node-update"); setCls("rnn-a2-" + i, "nn-node-update"); }
      }

      const calculations = Array.isArray(step.calculations)
        ? step.calculations.map((line) => "<p>" + mathHtml(line) + "</p>").join("")
        : "<p>" + (step.expanded || "") + "</p>";
      rnnExpandedPanel.innerHTML =
        "<h2>" + step.title + "</h2>" +
        "<div class=\\"network-detail-desc\\">" + (step.detail || "") + "</div>" +
        "<div class=\\"network-detail-formula\\">" + mathHtml(step.formula).replaceAll("\\n", "<br>") + "</div>" +
        "<div class=\\"network-detail-body\\">" + calculations + "</div>" +
        "<div class=\\"network-detail-sample\\">" + (step.sample || "") + "</div>";
    }

    function rnnNext() { rnnRenderStep(); rnnStepIndex += 1; if (rnnStepIndex >= RNN.steps.length) rnnStepIndex = 0; }
    function rnnRenderSpecificStep(index) { rnnStepIndex = (index + RNN.steps.length) % RNN.steps.length; rnnRenderStep(); }
    function rnnPlay() { rnnStop(); rnnTimer = setInterval(rnnNext, rnnFrameMs); rnnPlaying = true; }
    function rnnStop() { if (rnnTimer) clearInterval(rnnTimer); rnnTimer = null; rnnPlaying = false; }

    rnnPlayBtn.addEventListener("click", rnnPlay);
    rnnPauseBtn.addEventListener("click", rnnStop);
    rnnPrev.addEventListener("click", () => { rnnStop(); rnnRenderSpecificStep(rnnStepIndex - 2); rnnStepIndex = (rnnStepIndex + 1) % RNN.steps.length; });
    rnnNextButton.addEventListener("click", () => { rnnStop(); rnnNext(); });
    rnnRestart.addEventListener("click", () => { rnnStepIndex = 0; rnnNext(); if (rnnPlaying) rnnPlay(); });

    rnnDrawStatic(); rnnNext(); rnnPlay();

  <\/script>
</body>

</html>`,a2=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>How LLM Inference Works — Animated</title>
<link rel="stylesheet" href="theme.css">
<script src="components.js"><\/script>
<style>
  :root { --a: #e05a2f; --b: #0f9b8e; }   /* tokens/queries & embeddings/keys */
  /* base layout, body, h1, .wrap and .sub come from theme.css */
  .no-anim, .no-anim * { transition: none !important; animation: none !important; }
  .mono { font-family: "SF Mono", "Cascadia Code", Menlo, Consolas, monospace; }

  .bar {
    position: sticky; top: 0; z-index: 20; display: flex; gap: 9px; align-items: center;
    background: rgba(245,247,251,0.9); backdrop-filter: blur(8px);
    padding: 12px 0; margin-bottom: 18px; flex-wrap: wrap;
    border-bottom: 1px solid var(--border);
  }
  button:disabled { opacity: 0.4; cursor: default; }
  .progress { color: var(--muted); font-size: 13px; margin-left: auto; }
  .narr {
    flex-basis: 100%; color: var(--ink); font-size: 14.5px; min-height: 22px;
    background: var(--panel-2); border: 1px solid var(--border); border-radius: 10px;
    padding: 10px 14px;
  }
  .narr b { color: var(--accent); }

  .stage {
    background: var(--panel); border: 1px solid #e3e8f2; border-radius: 16px;
    padding: 20px 22px; margin-bottom: 16px; opacity: 0.38; filter: saturate(0.5);
    transition: opacity .4s, box-shadow .4s, filter .4s, border-color .4s;
  }
  .stage.active { opacity: 1; filter: none; border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent), 0 14px 44px rgba(20,30,60,0.12); }
  .stage.done { opacity: 0.92; filter: none; }
  .stage h2 { font-size: 17px; margin: 0 0 2px; display: flex; align-items: center; gap: 10px; }
  .stage .num {
    width: 26px; height: 26px; border-radius: 50%; background: var(--panel-2);
    border: 1px solid var(--border); display: inline-flex; align-items: center;
    justify-content: center; font-size: 13px; color: var(--muted); flex: none;
  }
  .stage.active .num, .stage.done .num { background: var(--accent); color: #fff; border-color: var(--accent); }
  .stage .desc { color: var(--muted); font-size: 13.5px; margin: 2px 0 14px 36px; }
  .body { margin-left: 36px; }

  .chips { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  .chip {
    padding: 6px 12px; border-radius: 8px; background: var(--panel-2);
    border: 1px solid var(--border); font-family: monospace; font-size: 14px;
    transition: all .3s; white-space: nowrap;
  }
  .chip.tok { border-color: var(--a); color: var(--a); }
  .chip.id  { border-color: var(--b); color: var(--b); }
  .chip .id-sub { color: var(--muted); font-size: 11px; }
  .arrow { color: var(--muted); font-size: 18px; }
  .pulse { animation: pulse .6s ease; }
  @keyframes pulse { 0%{ transform: scale(1);} 40%{ transform: scale(1.12);} 100%{ transform: scale(1);} }

  .vocab { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px,1fr)); gap: 6px; }
  .vrow { display: flex; gap: 8px; align-items: center; font-family: monospace; font-size: 13px;
    background: var(--panel-2); border: 1px solid var(--border); border-radius: 7px; padding: 5px 9px; }
  .vrow .vid { color: var(--muted); width: 22px; }
  .vrow .vw  { color: var(--ink); }

  .emb-wrap { display: flex; gap: 22px; flex-wrap: wrap; align-items: flex-start; }
  .emtx { display: inline-grid; gap: 4px; }
  .emrow { display: grid; grid-template-columns: 64px repeat(4, 44px); gap: 4px; align-items: center; transition: all .3s; }
  .emrow .rlab { font-family: monospace; font-size: 12px; color: var(--muted); text-align: right; padding-right: 4px; }
  .ev {
    height: 30px; display: flex; align-items: center; justify-content: center;
    border-radius: 5px; font-family: monospace; font-size: 12px;
    background: var(--panel-2); border: 1px solid var(--border); transition: all .3s;
  }
  .emrow.hot .ev { border-color: var(--b); background: rgba(79,209,197,0.16); color: var(--b); }
  .emrow.hot .rlab { color: var(--a); }
  .seq-vecs { display: flex; flex-direction: column; gap: 6px; }
  .svec { display: flex; gap: 8px; align-items: center; opacity: 0; transform: translateX(-8px); transition: all .4s; }
  .svec.show { opacity: 1; transform: none; }
  .svec .slab { font-family: monospace; font-size: 12px; color: var(--a); width: 46px; }
  .svec .vbox { display: flex; gap: 4px; }
  .vcell { width: 44px; height: 30px; display:flex; align-items:center; justify-content:center;
    border-radius: 5px; font-family: monospace; font-size: 12px; background: var(--panel-2);
    border: 1px solid var(--b); color: var(--b); }
  .vcell.pos { border-color: var(--accent); color: var(--accent); }
  .vcell.sum { border-color: var(--good); color: var(--good); }
  .plus { color: var(--muted); }

  .formula-box {
    background: var(--panel-2); border: 1px solid var(--border); border-radius: 10px;
    padding: 12px 14px; font-family: monospace; font-size: 13px; margin-bottom: 14px; line-height: 1.8;
  }
  .formula-box .lbl { color: var(--accent); }
  .formula-box .q { color: var(--a); }
  .formula-box .k { color: var(--b); }
  .formula-box .r { color: var(--good); }
  .formula-box .tie { color: var(--muted); font-size: 12px; }

  .attn-row { display: flex; gap: 10px; align-items: flex-end; height: 150px; margin-top: 8px; }
  .attn-col { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; height: 100%; justify-content: flex-end; }
  .attn-bar { width: 70%; max-width: 60px; background: var(--accent); border-radius: 6px 6px 0 0; height: 0; transition: height .6s ease; }
  .attn-bar.peak { background: var(--gold); }
  .attn-label { font-family: monospace; font-size: 12px; color: var(--muted); }
  .attn-pct { font-family: monospace; font-size: 11px; color: var(--accent); }

  .layers { display: flex; flex-direction: column; gap: 6px; }
  .layer { background: var(--panel-2); border: 1px solid var(--border); border-radius: 8px;
    padding: 8px 14px; font-size: 13px; color: var(--muted); display: flex; justify-content: space-between;
    opacity: 0.5; transition: all .35s; }
  .layer.lit { opacity: 1; border-color: var(--accent); color: var(--ink); }
  .layer .ltag { font-family: monospace; color: var(--accent); }

  .dist { display: flex; flex-direction: column; gap: 5px; }
  .drow { display: grid; grid-template-columns: 70px 1fr 64px; gap: 10px; align-items: center; }
  .dword { font-family: monospace; font-size: 13px; color: var(--ink); text-align: right; }
  .dtrack { background: var(--panel-2); border-radius: 6px; height: 22px; overflow: hidden; border: 1px solid var(--border); }
  .dfill { height: 100%; width: 0; background: var(--b); border-radius: 6px; transition: width .6s ease; }
  .dval { font-family: monospace; font-size: 12px; color: var(--muted); }
  .drow.winner .dword { color: var(--gold); font-weight: 700; }
  .drow.winner .dfill { background: var(--gold); }
  .drow.winner .dval { color: var(--gold); }

  /* temperature slider */
  .temp { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;
    background: var(--panel-2); border: 1px solid var(--border); border-radius: 10px; padding: 10px 14px; }
  .temp label { font-size: 13px; color: var(--muted); }
  .temp input[type=range] { width: 220px; accent-color: var(--accent); }
  .temp .tval { font-family: monospace; color: var(--accent); font-size: 14px; min-width: 38px; }
  .temp .readout { font-family: monospace; font-size: 12px; color: var(--muted); }
  .temp .readout .hi { color: var(--gold); }

  .result { font-size: 18px; margin-top: 4px; }
  .result .pred { color: var(--gold); font-weight: 700; font-family: monospace; }

  .gen-seq { font-family: monospace; font-size: 17px; margin: 6px 0; line-height: 1.9; }
  .gw { color: var(--ink); }
  .gw.real { color: var(--good); font-weight: 700; }
  .gw.toy  { color: var(--gold); font-weight: 700; }
  .gprob { font-size: 12px; color: var(--accent); margin-left: 8px; }
  .gen-legend { display: flex; gap: 20px; font-size: 12px; color: var(--muted); margin-bottom: 10px; flex-wrap: wrap; }
  .src-dot { display: inline-block; width: 9px; height: 9px; border-radius: 50%; margin-right: 6px; vertical-align: middle; }
  .src-dot.real { background: var(--good); }
  .src-dot.toy  { background: var(--gold); }
  .genlog { display: flex; flex-direction: column; gap: 4px; margin: 10px 0 4px; }
  .glrow { font-family: monospace; font-size: 13px; display: flex; gap: 10px; align-items: center;
    opacity: 0; transform: translateX(-6px); transition: all .35s; }
  .glrow.show { opacity: 1; transform: none; }
  .glrow .gltok { color: var(--ink); min-width: 70px; }
  .glrow .glprob { color: var(--accent); min-width: 56px; }
  .glrow .glsrc { font-size: 11px; padding: 1px 7px; border-radius: 5px; }
  .glrow .glsrc.real { color: var(--good); border: 1px solid var(--good); background: rgba(79,209,122,0.1); }
  .glrow .glsrc.toy  { color: var(--gold); border: 1px solid var(--gold); background: rgba(255,200,70,0.1); }
  .note { color: var(--muted); font-size: 13px; margin-top: 12px; }
  .note b { color: var(--good); }
</style>
</head>
<body>
<div class="wrap">
  <site-nav current="llm_inference.html"></site-nav>
  <h1>How an LLM generates the next word</h1>
  <p class="sub">
    A toy run with a 10-word vocabulary and 4-dimensional vectors. The prompt is
    <span class="mono" style="color:var(--a)">"the cat sat on the"</span>, and we follow every component until the model predicts — then keeps generating — text.
  </p>

  <div class="bar">
    <control-bar></control-bar>
    <span class="progress" id="progress">stage 0 / 10</span>
    <div class="narr" id="narr">Press <b>Play</b> for the full pipeline, <b>Step</b>/<b>Back</b> to move one component at a time, <b>Pause</b> to stop auto-play.</div>
  </div>

  <!-- 0 Vocabulary -->
  <div class="stage" id="s0">
    <h2><span class="num">0</span> Build the vocabulary</h2>
    <div class="desc">Before training, all text is broken into tokens. Every unique token gets a fixed integer ID. This table never changes during inference.</div>
    <div class="body"><div class="vocab" id="vocab"></div></div>
  </div>

  <!-- 1 Tokenize -->
  <div class="stage" id="s1">
    <h2><span class="num">1</span> Tokenize the input</h2>
    <div class="desc">The prompt string is split into known tokens and each is replaced by its vocabulary ID. The model only ever sees integers.</div>
    <div class="body"><div class="chips" id="tokenize"></div></div>
  </div>

  <!-- 2 Embedding matrix -->
  <div class="stage" id="s2">
    <h2><span class="num">2</span> Look up embeddings</h2>
    <div class="desc">A trained embedding matrix has one row per vocabulary word (here 10 rows × 4 dims). Each token ID selects its row — a dense vector that encodes meaning learned during training.</div>
    <div class="body">
      <div class="emb-wrap">
        <div>
          <div class="mono" style="color:var(--muted);font-size:12px;margin-bottom:6px">Embedding matrix E&nbsp;(10 × 4)</div>
          <div class="emtx" id="embMatrix"></div>
        </div>
        <div>
          <div class="mono" style="color:var(--muted);font-size:12px;margin-bottom:6px">Sequence of embeddings</div>
          <div class="seq-vecs" id="seqVecs"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 3 Positional encoding -->
  <div class="stage" id="s3">
    <h2><span class="num">3</span> Add positional encoding</h2>
    <div class="desc">Embeddings carry no order information. A positional vector is added to each so the model knows token 1 came before token 2. Note the two "the" tokens now differ — same word, different positions.</div>
    <div class="body"><div class="seq-vecs" id="posVecs"></div></div>
  </div>

  <!-- 4 Attention -->
  <div class="stage" id="s4">
    <h2><span class="num">4</span> Self-attention</h2>
    <div class="desc">Each token builds a Query and compares it (scaled dot product) with every token's Key to decide how much to attend to it. Below: the explicit Q·K for one pair, then the full attention weights of the <b>last</b> token over all positions.</div>
    <div class="body">
      <div class="formula-box" id="attnMath"></div>
      <div class="attn-row" id="attn"></div>
    </div>
  </div>

  <!-- 5 Layers -->
  <div class="stage" id="s5">
    <h2><span class="num">5</span> Stack of transformer blocks</h2>
    <div class="desc">Attention + a feed-forward network make one block. Real models stack dozens. Each block refines every token's vector into a context-aware representation.</div>
    <div class="body"><div class="layers" id="layers"></div></div>
  </div>

  <!-- 6 Final hidden state -->
  <div class="stage" id="s6">
    <h2><span class="num">6</span> Take the last position's vector</h2>
    <div class="desc">To predict the next word, only the final token's output vector h is used. It summarizes the whole context so far.</div>
    <div class="body"><div class="seq-vecs" id="finalVec"></div></div>
  </div>

  <!-- 7 Logits -->
  <div class="stage" id="s7">
    <h2><span class="num">7</span> Project to vocabulary logits</h2>
    <div class="desc">The hidden vector h is multiplied by the output (unembedding) matrix W<sub>U</sub>, shape [vocab × d]. Each logit is the dot product of h with one row of W<sub>U</sub> — i.e. how well h matches each word's output direction.</div>
    <div class="body">
      <div class="formula-box" id="logitMath"></div>
      <div class="dist" id="logits"></div>
    </div>
  </div>

  <!-- 8 Softmax + temperature -->
  <div class="stage" id="s8">
    <h2><span class="num">8</span> Softmax → probabilities</h2>
    <div class="desc">Softmax turns the logits into a probability distribution that sums to 1. <b>Temperature T</b> divides the logits first: low T sharpens toward the top word (greedy), high T flattens it (more random). Drag the slider to watch it reshape.</div>
    <div class="body">
      <div class="temp">
        <label>Temperature T</label>
        <input type="range" id="tempSlider" min="0.1" max="2" step="0.05" value="1">
        <span class="tval" id="tempVal">1.00</span>
        <span class="readout" id="tempReadout"></span>
      </div>
      <div class="dist" id="probs"></div>
    </div>
  </div>

  <!-- 9 Pick -->
  <div class="stage" id="s9">
    <h2><span class="num">9</span> Pick the next token</h2>
    <div class="desc">Greedy decoding takes the highest-probability word (argmax). Sampling instead draws randomly from the distribution above — that's where temperature matters.</div>
    <div class="body"><div class="result" id="result"></div></div>
  </div>

  <!-- 10 Autoregressive generation -->
  <div class="stage" id="s10">
    <h2><span class="num">10</span> Loop: autoregressive generation</h2>
    <div class="desc">The chosen token is appended to the input, and steps 2–9 run again to predict the next word. Repeating this grows the text one token at a time, until an end token or a length limit.</div>
    <div class="body">
      <div class="gen-legend">
        <span><span class="src-dot real"></span>computed by the real pipeline (steps 2–9)</span>
        <span><span class="src-dot toy"></span>illustrative continuation</span>
      </div>
      <div class="gen-seq" id="genSeq"></div>
      <div class="genlog" id="genLog"></div>
      <div class="note" id="genNote"></div>
    </div>
  </div>
</div>

<script>
/* ---------- toy model data ---------- */
const VOCAB = ['the','cat','sat','on','mat','dog','rug','ran','floor','slept'];
const PROMPT = ['the','cat','sat','on','the'];
const wid = w => VOCAB.indexOf(w);

const E = {
  the:  [ 0.9,-0.2, 0.1, 0.4], cat:  [ 0.2, 0.8,-0.3, 0.5],
  sat:  [-0.1, 0.4, 0.7, 0.2], on:   [ 0.5,-0.6, 0.2, 0.3],
  mat:  [ 0.3, 0.7,-0.2, 0.6], dog:  [ 0.1, 0.9,-0.4, 0.4],
  rug:  [ 0.4, 0.6,-0.1, 0.5], ran:  [-0.3, 0.2, 0.8,-0.1],
  floor:[ 0.6, 0.5, 0.0, 0.4], slept:[-0.2, 0.3, 0.6, 0.1],
};
const POS = [
  [ 0.00, 1.00, 0.00, 1.00],[ 0.84, 0.54, 0.10, 0.99],
  [ 0.91,-0.42, 0.20, 0.98],[ 0.14,-0.99, 0.30, 0.96],
  [-0.76,-0.65, 0.39, 0.92],
];

// attention: query of last token + a key per position
const Q_LAST = [0.5, 0.9, 0.2, 0.7];
const K = [ [0.4,0.3,0.5,0.6], [0.7,0.9,0.1,0.6], [0.6,0.8,0.3,0.4], [0.5,0.6,0.4,0.5], [0.3,0.4,0.5,0.5] ];
const D_K = 4;

// final hidden state + output (unembedding) matrix -> logits are real dot products
const HIDDEN = [0.9, 1.4, -0.6, 1.2];
const WOUT = {
  mat:[0.6,1.3,-0.4,1.1], the:[0.8,-0.2,0.3,0.4], cat:[0.3,0.9,-0.2,0.5],
  sat:[-0.2,0.3,0.6,0.1], on:[0.4,-0.5,0.2,0.3], dog:[0.2,0.8,-0.3,0.4],
  rug:[0.5,1.0,-0.2,0.7], ran:[-0.3,0.2,0.7,-0.1], floor:[0.6,0.7,0.0,0.6], slept:[-0.1,0.4,0.5,0.2],
};

/* ---------- helpers ---------- */
const dot = (u,v) => u.reduce((s,x,i)=>s+x*v[i],0);
const fmt = (x,d=2) => (x>=0?' ':'') + x.toFixed(d);
const softmax = (arr,T=1) => { const z=arr.map(x=>x/T); const m=Math.max(...z); const e=z.map(x=>Math.exp(x-m)); const s=e.reduce((a,b)=>a+b,0); return e.map(x=>x/s); };

const LOGITS = {}; VOCAB.forEach(w => LOGITS[w] = dot(HIDDEN, WOUT[w]));
const LOGIT_ARR = VOCAB.map(w => LOGITS[w]);

let temperature = 1.0;

let navToken = 0;
function sleep(ms){ const my = navToken; return new Promise((res,rej)=>setTimeout(()=> my===navToken ? res() : rej('aborted'), ms)); }

/* ---------- build static DOM ---------- */
const vocabEl = document.getElementById('vocab');
VOCAB.forEach((w,i)=>{
  const d=document.createElement('div'); d.className='vrow'; d.id='v-'+i;
  d.innerHTML=\`<span class="vid">\${i}</span><span class="vw">\${w}</span>\`;
  vocabEl.appendChild(d);
});
const embEl=document.getElementById('embMatrix');
VOCAB.forEach((w)=>{
  const r=document.createElement('div'); r.className='emrow'; r.id='em-'+w;
  r.innerHTML=\`<div class="rlab">\${w}</div>\`+E[w].map(v=>\`<div class="ev">\${fmt(v)}</div>\`).join('');
  embEl.appendChild(r);
});

/* ---------- probability rendering (shared by stage 8 + slider) ---------- */
function renderProbs(animate){
  const probs = softmax(LOGIT_ARR, temperature);
  const win = probs.indexOf(Math.max(...probs));
  const maxP = Math.max(...probs);
  const el = document.getElementById('probs');
  if (!el.children.length) {
    el.innerHTML = VOCAB.map((w,i)=>
      \`<div class="drow" id="pb-\${w}"><span class="dword">\${w}</span><div class="dtrack"><div class="dfill" id="pf-\${w}"></div></div><span class="dval" id="pv-\${w}"></span></div>\`
    ).join('');
  }
  VOCAB.forEach((w,i)=>{
    const row=document.getElementById('pb-'+w);
    row.classList.toggle('winner', i===win);
    const fill=document.getElementById('pf-'+w);
    if(!animate) fill.style.transition='none'; else fill.style.transition='';
    fill.style.width=(probs[i]/maxP*100)+'%';
    document.getElementById('pv-'+w).textContent=(probs[i]*100).toFixed(1)+'%';
  });
  const ro=document.getElementById('tempReadout');
  if(ro) ro.innerHTML=\`top token: <span class="hi">\${VOCAB[win]} \${(maxP*100).toFixed(1)}%</span>\`;
}
document.getElementById('tempSlider').addEventListener('input', e=>{
  temperature=parseFloat(e.target.value);
  document.getElementById('tempVal').textContent=temperature.toFixed(2);
  if(document.getElementById('probs').children.length) renderProbs(false);
});

/* ---------- multi-step generation script ---------- */
function genLogits(target, distractor){
  const o={}; VOCAB.forEach(w=>o[w]=0.2); o[target]=3.4; if(distractor) o[distractor]=1.8; return o;
}
const GEN = [
  {t:'the',  d:'mat'}, {t:'dog', d:'cat'}, {t:'ran', d:'sat'},
  {t:'on',   d:'the'}, {t:'the', d:'on'},  {t:'floor', d:'rug'},
];

/* ---------- stages: each takes (animate) ---------- */
const stages = [
  // 0 vocabulary
  async (animate)=>{ /* already rendered; nothing dynamic */ },

  // 1 tokenize
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const el=document.getElementById('tokenize'); el.innerHTML='';
    for(const w of PROMPT){
      const c=document.createElement('div'); c.className='chip tok'+(animate?' pulse':''); c.textContent=\`"\${w}"\`;
      el.appendChild(c); await nap(150);
    }
    const ar=document.createElement('span'); ar.className='arrow'; ar.textContent='→'; el.appendChild(ar);
    for(const w of PROMPT){
      const c=document.createElement('div'); c.className='chip id'+(animate?' pulse':'');
      c.innerHTML=\`\${wid(w)} <span class="id-sub">(\${w})</span>\`;
      el.appendChild(c); await nap(150);
    }
  },

  // 2 embedding lookup
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const seq=document.getElementById('seqVecs'); seq.innerHTML='';
    for(let p=0;p<PROMPT.length;p++){
      const w=PROMPT[p];
      const row=document.getElementById('em-'+w); row.classList.add('hot');
      const sv=document.createElement('div'); sv.className='svec';
      sv.innerHTML=\`<span class="slab">\${w}</span><div class="vbox">\`+
        E[w].map(v=>\`<div class="vcell">\${fmt(v)}</div>\`).join('')+\`</div>\`;
      seq.appendChild(sv); requestAnimationFrame(()=>sv.classList.add('show'));
      await nap(420); row.classList.remove('hot');
    }
    if(!animate) seq.querySelectorAll('.svec').forEach(s=>s.classList.add('show'));
  },

  // 3 positional encoding
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const pe=document.getElementById('posVecs'); pe.innerHTML='';
    for(let p=0;p<PROMPT.length;p++){
      const w=PROMPT[p], emb=E[w], pos=POS[p], sum=emb.map((v,i)=>v+pos[i]);
      const sv=document.createElement('div'); sv.className='svec';
      sv.innerHTML=\`<span class="slab">\${w}₍\${p}₎</span><div class="vbox">\`+
        emb.map(v=>\`<div class="vcell">\${fmt(v)}</div>\`).join('')+\`</div>\`+
        \`<span class="plus">+</span><div class="vbox">\`+
        pos.map(v=>\`<div class="vcell pos">\${fmt(v)}</div>\`).join('')+\`</div>\`+
        \`<span class="plus">=</span><div class="vbox">\`+
        sum.map(v=>\`<div class="vcell sum">\${fmt(v)}</div>\`).join('')+\`</div>\`;
      pe.appendChild(sv); requestAnimationFrame(()=>sv.classList.add('show'));
      await nap(360);
    }
    if(!animate) pe.querySelectorAll('.svec').forEach(s=>s.classList.add('show'));
  },

  // 4 attention (explicit Q·K + softmax bars)
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const scores = K.map(k => dot(Q_LAST,k)/Math.sqrt(D_K));
    const weights = softmax(scores);
    // explicit example: last token query vs "cat" key (position 1)
    const ki=1, raw=dot(Q_LAST,K[ki]);
    const terms = Q_LAST.map((q,i)=>\`(\${q}×\${K[ki][i]})\`).join(' + ');
    document.getElementById('attnMath').innerHTML =
      \`<div><span class="lbl">one pair —</span> <span class="q">Q(last "the")</span> · <span class="k">K("cat")</span> = \${terms} = <span class="r">\${raw.toFixed(2)}</span></div>\`+
      \`<div>scaled score = \${raw.toFixed(2)} ÷ √\${D_K} = <span class="r">\${(raw/Math.sqrt(D_K)).toFixed(2)}</span></div>\`+
      \`<div class="tie">all 5 scaled scores → softmax → the attention weights below (they sum to 100%)</div>\`;
    const el=document.getElementById('attn'); el.innerHTML='';
    const win = weights.indexOf(Math.max(...weights));
    PROMPT.forEach((tok,i)=>{
      const col=document.createElement('div'); col.className='attn-col';
      col.innerHTML=\`<span class="attn-pct" id="ap-\${i}">\${Math.round(weights[i]*100)}%</span>\`+
        \`<div class="attn-bar\${i===win?' peak':''}" id="ab-\${i}"></div>\`+
        \`<span class="attn-label">\${tok}</span>\`;
      el.appendChild(col);
    });
    await nap(60);
    PROMPT.forEach((_,i)=>{
      const bar=document.getElementById('ab-'+i);
      if(!animate) bar.style.transition='none';
      bar.style.height=(weights[i]*100)+'%';
    });
    await nap(650);
  },

  // 5 layer stack
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const el=document.getElementById('layers'); el.innerHTML='';
    const N=6;
    for(let i=1;i<=N;i++){
      const d=document.createElement('div'); d.className='layer'+(animate?'':' lit'); d.id='ly-'+i;
      d.innerHTML=\`<span>Transformer block \${i}</span><span class="ltag">self-attention + feed-forward</span>\`;
      el.appendChild(d);
    }
    if(animate) for(let i=1;i<=N;i++){ document.getElementById('ly-'+i).classList.add('lit'); await nap(200); }
  },

  // 6 final hidden state
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const el=document.getElementById('finalVec'); el.innerHTML='';
    const sv=document.createElement('div'); sv.className='svec';
    sv.innerHTML=\`<span class="slab">h (pos 4)</span><div class="vbox">\`+
      HIDDEN.map(v=>\`<div class="vcell sum">\${fmt(v)}</div>\`).join('')+\`</div>\`;
    el.appendChild(sv); requestAnimationFrame(()=>sv.classList.add('show'));
    if(!animate) sv.classList.add('show');
    await nap(280);
  },

  // 7 logits (explicit unembedding matmul)
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const terms = HIDDEN.map((h,i)=>\`(\${h}×\${WOUT.mat[i]})\`).join(' + ');
    document.getElementById('logitMath').innerHTML =
      \`<div><span class="lbl">one row —</span> logit("mat") = <span class="q">h</span> · <span class="k">W<sub>U</sub>["mat"]</span> = \${terms} = <span class="r">\${LOGITS.mat.toFixed(2)}</span></div>\`+
      \`<div class="tie">repeat for all \${VOCAB.length} rows → a length-\${VOCAB.length} vector of logits (one score per word)</div>\`+
      \`<div class="tie">often W<sub>U</sub> is <b>tied</b> to the embedding matrix E from step 2 — the same weights, reused.</div>\`;
    const el=document.getElementById('logits'); el.innerHTML='';
    const max=Math.max(...LOGIT_ARR);
    const min=Math.min(...LOGIT_ARR);
    VOCAB.forEach(w=>{
      const row=document.createElement('div'); row.className='drow';
      row.innerHTML=\`<span class="dword">\${w}</span><div class="dtrack"><div class="dfill" id="lf-\${w}"></div></div><span class="dval">\${LOGITS[w].toFixed(2)}</span>\`;
      el.appendChild(row);
    });
    await nap(60);
    VOCAB.forEach(w=>{
      const fill=document.getElementById('lf-'+w);
      if(!animate) fill.style.transition='none';
      // map logits (which can be negative) into a 0..100 bar
      fill.style.width=((LOGITS[w]-min)/(max-min)*100)+'%';
    });
    await nap(600);
  },

  // 8 softmax + temperature
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    document.getElementById('probs').innerHTML='';
    document.getElementById('tempVal').textContent=temperature.toFixed(2);
    document.getElementById('tempSlider').value=temperature;
    renderProbs(animate);
    await nap(650);
  },

  // 9 pick next token
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const probs=softmax(LOGIT_ARR, temperature);
    const win=probs.indexOf(Math.max(...probs)); const word=VOCAB[win];
    document.getElementById('result').innerHTML=
      \`argmax → predicted next token: <span class="pred">"\${word}"</span> &nbsp;(\${(probs[win]*100).toFixed(1)}% at T=\${temperature.toFixed(2)})\`;
    await nap(250);
  },

  // 10 autoregressive multi-step generation
  async (animate)=>{
    const nap=animate?sleep:()=>Promise.resolve();
    const box=document.getElementById('genSeq');
    const log=document.getElementById('genLog');
    const note=document.getElementById('genNote');
    note.innerHTML=''; log.innerHTML='';

    const startNew = PROMPT.length;   // index from which tokens are "generated"
    let words=[...PROMPT];

    // --- token 1: the REAL pipeline result (honest logits + temperature) ---
    const realProbs = softmax(LOGIT_ARR, temperature);
    const realWord = VOCAB[realProbs.indexOf(Math.max(...realProbs))];
    const realP = Math.max(...realProbs);
    const picks = [ { t: realWord, p: realP, src: 'real' } ];

    // --- tokens 2..N: illustrative continuation ---
    for(const {t,d} of GEN){
      const probs=softmax(VOCAB.map(w=>genLogits(t,d)[w]), temperature);
      picks.push({ t, p: probs[wid(t)], src: 'toy' });
    }

    const draw = (badge='') => {
      box.innerHTML = words.map((w,i)=>{
        const cls = i<startNew ? '' : (i===startNew ? ' real' : ' toy');
        return \`<span class="gw\${cls}">\${w}</span>\`;
      }).join(' ') + badge;
    };
    draw(); await nap(350);

    for(const {t,p,src} of picks){
      words.push(t);
      draw(\`<span class="gprob">+ "\${t}"</span>\`);
      const row=document.createElement('div'); row.className='glrow';
      row.innerHTML=\`<span class="gltok">→ "\${t}"</span>\`+
        \`<span class="glprob">\${(p*100).toFixed(1)}%</span>\`+
        \`<span class="glsrc \${src}">\${src==='real'?'real pipeline':'illustrative'}</span>\`;
      log.appendChild(row); requestAnimationFrame(()=>row.classList.add('show'));
      await nap(650);
    }
    draw();
    log.querySelectorAll('.glrow').forEach(r=>r.classList.add('show'));
    note.innerHTML=\`<b>✓ Autoregressive decoding:</b> the first token <span style="color:var(--good)">"\${realWord}"</span> is the genuine output of steps 2–9 (and responds to your temperature setting). The rest are illustrative — modeling them honestly would mean re-running the full transformer for each new context. Every real model does exactly that: append, re-run, repeat.\`;
  },
];

const LAST = stages.length - 1;
const narration = [
  'A fixed <b>vocabulary</b> maps every possible token to an integer ID — created once, before training.',
  'The prompt is <b>tokenized</b>: text → known tokens → integer IDs. The network only consumes numbers.',
  'Each ID indexes a row of the trained <b>embedding matrix</b>, giving every token a dense meaning vector.',
  '<b>Positional encodings</b> are added so order matters — watch the two "the" tokens diverge.',
  '<b>Self-attention</b>: a scaled dot product (Q·K) scores relevance; softmax turns scores into weights. Here the last token attends most to "cat".',
  'These attention + feed-forward <b>blocks are stacked</b>; each one builds richer, context-aware vectors.',
  'For next-word prediction we keep only the <b>last position\\'s</b> output vector h.',
  'The <b>unembedding</b> matrix turns h into one <b>logit</b> per word — each logit is a dot product of h with a row of W<sub>U</sub>.',
  '<b>Softmax</b> normalizes logits into probabilities. Drag <b>temperature</b> to sharpen or flatten the distribution.',
  'Greedy decoding picks the <b>argmax</b>; sampling would draw from the distribution instead.',
  'Append the token and <b>loop</b> — that autoregressive cycle generates text one word at a time.',
];

/* ---------- controller ---------- */
const stageEls = stages.map((_,i)=>document.getElementById('s'+i));
let cur=-1, playing=false, busy=false;

const progress=document.getElementById('progress');
const narr=document.getElementById('narr');

function setActive(i){
  stageEls.forEach((el,idx)=>{
    el.classList.toggle('active', idx===i);
    el.classList.toggle('done', idx<i);
  });
  progress.textContent=\`stage \${Math.max(0,i)} / \${LAST}\`;
  if(i>=0){ narr.innerHTML=narration[i]; stageEls[i].scrollIntoView({behavior:'smooth', block:'center'}); }
}

function clearAll(){
  ['tokenize','seqVecs','posVecs','attn','layers','finalVec','logits','probs','genSeq','genLog'].forEach(idn=>{ const e=document.getElementById(idn); if(e) e.innerHTML=''; });
  document.getElementById('attnMath').innerHTML='';
  document.getElementById('logitMath').innerHTML='';
  document.getElementById('result').innerHTML='';
  document.getElementById('genNote').innerHTML='';
  document.getElementById('tempReadout').innerHTML='';
  document.querySelectorAll('.emrow').forEach(r=>r.classList.remove('hot'));
}

async function forward(){
  if(busy) return;
  if(cur>=LAST){ playing=false; return; }
  busy=true; navToken++; const my=navToken;
  cur++; setActive(cur);
  try { await stages[cur](true); }
  catch(e){ if(e!=='aborted') console.error(e); busy=false; return; }
  busy=false;
  if(playing && my===navToken && cur<LAST){
    try { await sleep(600); } catch(e){ return; }
    if(playing) forward();
  } else if(cur>=LAST){ playing=false; }
}

async function rebuildTo(target){
  busy=true; navToken++;
  document.body.classList.add('no-anim');
  clearAll();
  for(let i=0;i<=target;i++){ await stages[i](false); }
  cur=target; setActive(target);
  void document.body.offsetWidth;
  document.body.classList.remove('no-anim');
  busy=false;
}

function reset(){
  playing=false; busy=false; navToken++; cur=-1;
  clearAll();
  stageEls.forEach(e=>e.classList.remove('active','done'));
  progress.textContent=\`stage 0 / \${LAST}\`;
  narr.innerHTML='Press <b>Play</b> for the full pipeline, <b>Step</b>/<b>Back</b> to move one component at a time, <b>Pause</b> to stop auto-play.';
  window.scrollTo({top:0, behavior:'smooth'});
}

document.getElementById('play').onclick = ()=>{ if(cur>=LAST) reset(); playing=true; forward(); };
document.getElementById('pause').onclick = ()=>{ playing=false; };
document.getElementById('step').onclick = ()=>{ playing=false; if(!busy) forward(); };
document.getElementById('back').onclick = ()=>{ playing=false; if(busy) return; if(cur<=0){ reset(); } else rebuildTo(cur-1); };
document.getElementById('reset').onclick = reset;

reset();
<\/script>
</body>
</html>
`,l2=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Debiasing Word Embeddings — Animated</title>
<link rel="stylesheet" href="theme.css">
<script src="components.js"><\/script>
<style>
  :root { --a: #e05a2f; --b: #0f9b8e; }
  .formula { font-family:"SF Mono",Menlo,Consolas,monospace; color:var(--muted); font-size:13.5px; margin:0 0 16px; }
  .formula .hl { color:var(--accent); }
  canvas { width:100%; border-radius:12px; background:var(--panel-2); display:block; }
  .math { min-height:240px; }
  .big { font-size:20px; }
  .vE { color:var(--a); }       /* word embedding e */
  .vG { color:var(--gold); }    /* bias direction g */
  .vB2 { color:var(--accent); } /* bias component */
</style>
</head>
<body>
<div class="wrap">
  <site-nav current="debiasing.html"></site-nav>
  <h1>Debiasing word embeddings (neutralization)</h1>
  <p class="sub">
    A word like <em>"receptionist"</em> shouldn't carry a gender signal. We remove the component of its
    embedding that lies along a learned <b>bias direction g</b> (e.g. g = e<sub>woman</sub> − e<sub>man</sub>),
    leaving a vector orthogonal to g.
  </p>

  <div class="card">
    <p class="formula">
      e<sub>bias</sub> = <span class="hl">(e · g / ‖g‖₂²)</span> · g &nbsp;&nbsp;→&nbsp;&nbsp;
      e<sub>debiased</sub> = e − e<sub>bias</sub>&nbsp;&nbsp;&nbsp;(2-D toy: g = [2, 1], e = [1, 2])
    </p>
    <div class="row">
      <div class="grow">
        <canvas id="cv" width="560" height="480"></canvas>
        <div class="legend">
          <span><span class="dot" style="background:var(--gold)"></span>bias direction g</span>
          <span><span class="dot" style="background:var(--a)"></span>word embedding e</span>
          <span><span class="dot" style="background:var(--accent)"></span>bias component</span>
          <span><span class="dot" style="background:var(--good)"></span>e debiased</span>
        </div>
      </div>
      <div class="grow">
        <div class="math" id="math"></div>
        <control-bar></control-bar>
      </div>
    </div>
  </div>
</div>

<script>
const G = [2, 1];   // bias direction
const Ev = [1, 2];  // word embedding "receptionist"

const dot = (u,v) => u.reduce((s,x,i)=>s+x*v[i],0);
const fmt = (x,d=2) => x.toFixed(d);
const lerp = (a,b,t)=>a+(b-a)*t;
const easeInOut = t => t<0.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2;

const g2 = dot(G,G);                 // ||g||^2 = 5
const scalar = dot(Ev,G) / g2;       // (e·g)/||g||^2 = 0.8
const bias = G.map(x => scalar*x);   // [1.6, 0.8]
const deb  = Ev.map((x,i)=>x-bias[i]); // [-0.6, 1.2]

const cv = document.getElementById('cv'), ctx = cv.getContext('2d');
const mathEl = document.getElementById('math');
const W = cv.width, H = cv.height;
const origin = { x: W/2, y: H/2 + 40 };
const scale = 95;
const toPx = v => ({ x: origin.x + v[0]*scale, y: origin.y - v[1]*scale });
const C = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
function line(a,b){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }

function arrow(vec, t, color, label, lw=3.5) {
  const end = toPx([vec[0]*t, vec[1]*t]);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = lw;
  line(origin, end);
  const ang = Math.atan2(end.y-origin.y, end.x-origin.x), hs=12;
  ctx.beginPath(); ctx.moveTo(end.x,end.y);
  ctx.lineTo(end.x-hs*Math.cos(ang-0.4), end.y-hs*Math.sin(ang-0.4));
  ctx.lineTo(end.x-hs*Math.cos(ang+0.4), end.y-hs*Math.sin(ang+0.4));
  ctx.closePath(); ctx.fill();
  if (t>0.99 && label){ ctx.font='bold 14px monospace'; ctx.fillText(label, end.x+8, end.y-6); }
}

let state = { axis:0, e:0, bias:0, perp:0, deb:0 };

function grid() {
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle = C('--grid'); ctx.lineWidth = 1;
  for (let x=origin.x%scale; x<W; x+=scale) line({x,y:0},{x,y:H});
  for (let y=origin.y%scale; y<H; y+=scale) line({x:0,y},{x:W,y});
  ctx.strokeStyle = '#9aa3b8'; ctx.lineWidth = 1.5;
  line({x:0,y:origin.y},{x:W,y:origin.y});
  line({x:origin.x,y:0},{x:origin.x,y:H});
}

function render() {
  grid();
  // bias axis g (dashed, both directions)
  if (state.axis>0) {
    ctx.save(); ctx.setLineDash([7,6]); ctx.strokeStyle = C('--gold'); ctx.lineWidth = 1.8;
    const f = state.axis;
    line(toPx([-G[0]*1.6*f,-G[1]*1.6*f]), toPx([G[0]*1.9*f,G[1]*1.9*f]));
    ctx.restore();
    arrow(G, Math.min(1,state.axis), C('--gold'), state.axis>0.99?'g':'', 2.5);
  }
  // word embedding e
  if (state.e>0) arrow(Ev, state.e, C('--a'), state.e>0.99?'e':'');
  // bias component (projection along g)
  if (state.bias>0) arrow(bias, state.bias, C('--accent'), state.bias>0.99?'e_bias':'', 3);
  // perpendicular drop from e tip to bias tip
  if (state.perp>0) {
    ctx.save(); ctx.setLineDash([4,4]); ctx.strokeStyle = C('--muted'); ctx.lineWidth = 1.5;
    const pe = toPx(Ev), pb = toPx(bias);
    line(pe, { x: lerp(pe.x,pb.x,state.perp), y: lerp(pe.y,pb.y,state.perp) });
    ctx.restore();
  }
  // debiased vector
  if (state.deb>0) {
    arrow(deb, state.deb, C('--good'), state.deb>0.99?'e_debiased':'');
    // right-angle marker between deb and g at origin
    if (state.deb>0.99) {
      ctx.fillStyle = C('--good'); ctx.font='12px monospace';
      ctx.fillText('⊥ g', toPx([deb[0]*0.5,deb[1]*0.5]).x - 30, toPx([deb[0]*0.5,deb[1]*0.5]).y);
    }
  }
}

const steps = [
  { anim:['axis','e'], html:()=>\`
    <div class="step-label">The setup</div>
    <div class="line vG">bias direction&nbsp; g = [2, 1]</div>
    <div class="line vE">word embedding&nbsp; e = [1, 2]&nbsp; ("receptionist")</div>
    <div class="line" style="color:var(--muted)">e leans partly along g — that's the gender signal we want to remove.</div>\` },
  { anim:[], html:()=>\`
    <div class="step-label">Step 1 — projection scalar</div>
    <div class="line">e · g = (1×2)+(2×1) = \${dot(Ev,G)}</div>
    <div class="line">‖g‖₂² = 2²+1² = \${g2}</div>
    <div class="line big">(e·g)/‖g‖₂² = \${dot(Ev,G)}/\${g2} = <span class="res">\${fmt(scalar)}</span></div>\` },
  { anim:['bias','perp'], html:()=>\`
    <div class="step-label">Step 2 — bias component</div>
    <div class="line vB2">e_bias = \${fmt(scalar)} · g = \${fmt(scalar)}·[2,1] = [\${fmt(bias[0])}, \${fmt(bias[1])}]</div>
    <div class="line" style="color:var(--muted)">This is e's shadow on the g-axis (drop a perpendicular from e's tip).</div>\` },
  { anim:['deb'], html:()=>\`
    <div class="step-label">Step 3 — subtract it off</div>
    <div class="line">e_debiased = e − e_bias = [1−\${fmt(bias[0])}, 2−\${fmt(bias[1])}]</div>
    <div class="line big res">e_debiased = [\${fmt(deb[0])}, \${fmt(deb[1])}]</div>
    <div class="line">check: e_debiased · g = \${fmt(dot(deb,G))} → orthogonal to g ✓</div>
    <div class="line" style="color:var(--muted)">No component left along the bias axis — the word is neutralized.</div>\` },
  { anim:[], html:()=>\`
    <div class="step-label">In the course</div>
    <div class="line" style="color:var(--muted)">This is the <span class="vE">neutralize()</span> step from "Operations on Word Vectors".
    Gender-defining pairs (e.g. <em>actor/actress</em>) are then handled by <span class="res">equalize()</span>,
    which makes them symmetric about this same g-axis.</div>\` },
];

let cur=-1, playing=false, raf=null;
function animateTo(targets, done){
  const start=performance.now(), dur=700, from={...state};
  (function frame(now){
    const t=Math.min(1,(now-start)/dur), e=easeInOut(t);
    targets.forEach(k=>state[k]=lerp(from[k]||0,1,e));
    render();
    if(t<1) raf=requestAnimationFrame(frame); else if(done) done();
  })(performance.now());
}
function nextStep(auto){
  if(cur>=steps.length-1){ playing=false; return; }
  cur++; mathEl.innerHTML=steps[cur].html();
  const a=steps[cur].anim;
  if(a.length) animateTo(a, ()=>{ if(auto&&playing) setTimeout(()=>nextStep(true),1000); });
  else if(auto&&playing) setTimeout(()=>nextStep(true),1500);
}
function reset(){
  cancelAnimationFrame(raf); playing=false; cur=-1;
  state={ axis:0, e:0, bias:0, perp:0, deb:0 };
  render();
  mathEl.innerHTML=\`<div class="step-label">Ready</div><div class="line" style="color:var(--muted)">Press Play to project e onto g and remove the bias component.</div>\`;
}
function rebuildTo(target){
  cancelAnimationFrame(raf);
  state={ axis:0, e:0, bias:0, perp:0, deb:0 };
  for(let i=0;i<=target;i++) steps[i].anim.forEach(k=>state[k]=1);
  render(); mathEl.innerHTML=steps[target].html(); cur=target;
}
function pause(){ playing=false; cancelAnimationFrame(raf); }
function back(){ pause(); if(cur>0) rebuildTo(cur-1); else reset(); }
document.getElementById('play').onclick=()=>{ if(cur>=steps.length-1) reset(); playing=true; nextStep(true); };
document.getElementById('pause').onclick=pause;
document.getElementById('back').onclick=back;
document.getElementById('step').onclick=()=>{ playing=false; nextStep(false); };
document.getElementById('reset').onclick=reset;
reset();
<\/script>
</body>
</html>
`,$u=[{slug:"comparing-vectors",title:`Cosine similarity,
Euclidian distance`,shortTitle:"Similarity",description:"Cosine similarity (the angle) for two vectors and two matrices, plus Euclidean distance (the straight-line gap).",tag:"cosine · distance",symbol:"∠",source:Fh},{slug:"matrix-multiplication",title:"Matrix multiplication",shortTitle:"Matrices",description:"Row-by-column dot products building the product matrix, cell by cell — A(3×5) × B(5×3) = C(3×3).",tag:"linear algebra",symbol:"A×B",source:Ph},{slug:"softmax",title:"Softmax",shortTitle:"Softmax",description:"Logits → exponentiate → normalize into a probability distribution, with a live temperature slider to sharpen or flatten it.",tag:"probabilities · temperature",symbol:"σ",source:t2},{slug:"neural-network",title:"Neural network training",shortTitle:"Neural network",description:"A small network's forward pass and backpropagation — activations flowing forward, gradients flowing back.",tag:"forward · backprop",symbol:"→",source:e2},{slug:"recurrent-neural-network",title:"Recurrent neural network",shortTitle:"RNN",description:"A 2-layer stacked RNN unrolled over a sequence — hidden state carried across time steps in each layer, trained with backprop-through-time.",tag:"2 layers · BPTT",symbol:"↻",source:n2},{slug:"llm-inference",title:"LLM inference",shortTitle:"LLM inference",description:"The full next-word pipeline: vocabulary, embeddings, positional encoding, attention, logits, softmax + temperature, and autoregressive generation.",tag:"transformers · generation",symbol:"T",source:a2},{slug:"debiasing",title:"Debiasing embeddings",shortTitle:"Debiasing",description:"Neutralizing a word vector: project onto the bias direction g and subtract it, leaving a vector orthogonal to g.",tag:"projection · fairness",symbol:"⊥",source:l2}],i2=[112,99,64,112,101,116,114,111,110,101,108,108,97,46,97,116].map(r=>String.fromCharCode(r)).join("");function s2(){const[r,d]=R.useState(!1),o=We();return R.useEffect(()=>{d(!1)},[o.pathname]),B.jsxs("div",{className:"app-shell",children:[B.jsx("header",{className:"app-header",children:B.jsxs("nav",{className:"app-nav","aria-label":"Animations",children:[B.jsx(Uu,{className:"brand",to:"/",children:"ML animations"}),B.jsxs("button",{className:"menu-toggle",type:"button","aria-label":r?"Close navigation menu":"Open navigation menu","aria-controls":"main-navigation","aria-expanded":r,onClick:()=>d(u=>!u),children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]}),B.jsx("div",{id:"main-navigation",className:`nav-links${r?" open":""}`,children:$u.map(({slug:u,shortTitle:f})=>B.jsx(Uu,{to:`/${u}`,children:f},u))})]})}),B.jsx(vh,{}),B.jsxs("footer",{className:"catalog-footer",children:[B.jsx("span",{children:"CONTACT"}),B.jsx("a",{className:"email-link",href:`mailto:${i2}`,"aria-label":"Send an email",title:"Send an email",children:B.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[B.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"3"}),B.jsx("path",{d:"m5 8 7 5 7-5"})]})})]})]})}function r2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("line",{x1:"20",y1:"80",x2:"170",y2:"80",stroke:"#9aa3b8",strokeWidth:"1.5"}),B.jsx("line",{x1:"20",y1:"80",x2:"20",y2:"10",stroke:"#9aa3b8",strokeWidth:"1.5"}),B.jsx("line",{x1:"20",y1:"80",x2:"140",y2:"50",stroke:"#ff7a59",strokeWidth:"3"}),B.jsx("line",{x1:"20",y1:"80",x2:"90",y2:"15",stroke:"#4fd1c5",strokeWidth:"3"}),B.jsx("path",{d:"M 70 65 A 32 32 0 0 1 52 42",fill:"none",stroke:"#8b7bff",strokeWidth:"2.5"})]})}function u2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("rect",{x:"18",y:"28",width:"44",height:"44",rx:"4",fill:"#eef1f7",stroke:"#ff7a59"}),B.jsx("line",{x1:"32.7",y1:"28",x2:"32.7",y2:"72",stroke:"#ff7a59",strokeWidth:".8"}),B.jsx("line",{x1:"47.3",y1:"28",x2:"47.3",y2:"72",stroke:"#ff7a59",strokeWidth:".8"}),B.jsx("line",{x1:"18",y1:"42.7",x2:"62",y2:"42.7",stroke:"#ff7a59",strokeWidth:".8"}),B.jsx("line",{x1:"18",y1:"57.3",x2:"62",y2:"57.3",stroke:"#ff7a59",strokeWidth:".8"}),B.jsx("text",{x:"68",y:"55",fill:"#8a93a8",fontFamily:"monospace",fontSize:"16",children:"×"}),B.jsx("rect",{x:"82",y:"28",width:"44",height:"44",rx:"4",fill:"#eef1f7",stroke:"#4fd1c5"}),B.jsx("line",{x1:"96.7",y1:"28",x2:"96.7",y2:"72",stroke:"#4fd1c5",strokeWidth:".8"}),B.jsx("line",{x1:"111.3",y1:"28",x2:"111.3",y2:"72",stroke:"#4fd1c5",strokeWidth:".8"}),B.jsx("line",{x1:"82",y1:"42.7",x2:"126",y2:"42.7",stroke:"#4fd1c5",strokeWidth:".8"}),B.jsx("line",{x1:"82",y1:"57.3",x2:"126",y2:"57.3",stroke:"#4fd1c5",strokeWidth:".8"}),B.jsx("text",{x:"132",y:"55",fill:"#8a93a8",fontFamily:"monospace",fontSize:"16",children:"="}),B.jsx("rect",{x:"146",y:"34",width:"30",height:"30",rx:"4",fill:"#8b7bff"})]})}function c2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("rect",{x:"20",y:"20",width:"20",height:"60",rx:"3",fill:"#eef1f7",stroke:"#4fd1c5"}),B.jsx("rect",{x:"48",y:"40",width:"20",height:"40",rx:"3",fill:"#eef1f7",stroke:"#4fd1c5"}),B.jsx("text",{x:"74",y:"56",fill:"#8a93a8",fontFamily:"monospace",fontSize:"20",children:"→"}),B.jsx("rect",{x:"100",y:"26",width:"20",height:"54",rx:"3",fill:"#ffc846"}),B.jsx("rect",{x:"128",y:"50",width:"20",height:"30",rx:"3",fill:"#4fd1c5"}),B.jsx("rect",{x:"156",y:"64",width:"16",height:"16",rx:"3",fill:"#4fd1c5"})]})}function d2(){const r=[[40,30,90,22],[40,30,90,50],[40,30,90,78],[40,70,90,22],[40,70,90,50],[40,70,90,78],[90,22,140,50],[90,50,140,50],[90,78,140,50]];return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("g",{stroke:"#d8deea",strokeWidth:"1",children:r.map((d,o)=>B.jsx("line",{x1:d[0],y1:d[1],x2:d[2],y2:d[3]},o))}),B.jsxs("g",{fill:"#eef1f7",stroke:"#ff7a59",strokeWidth:"2",children:[B.jsx("circle",{cx:"40",cy:"30",r:"8"}),B.jsx("circle",{cx:"40",cy:"70",r:"8"})]}),B.jsxs("g",{fill:"#eef1f7",stroke:"#8b7bff",strokeWidth:"2",children:[B.jsx("circle",{cx:"90",cy:"22",r:"8"}),B.jsx("circle",{cx:"90",cy:"50",r:"8"}),B.jsx("circle",{cx:"90",cy:"78",r:"8"})]}),B.jsx("circle",{cx:"140",cy:"50",r:"8",fill:"#4fd1c5"})]})}function o2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("defs",{children:B.jsx("marker",{id:"rnnThumbArrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:B.jsx("path",{d:"M0,0 L6,3 L0,6 Z",fill:"#4fd1c5"})})}),B.jsxs("g",{fill:"#eef1f7",stroke:"#8b7bff",strokeWidth:"2",children:[B.jsx("rect",{x:"20",y:"16",width:"30",height:"24",rx:"5"}),B.jsx("rect",{x:"75",y:"16",width:"30",height:"24",rx:"5"}),B.jsx("rect",{x:"130",y:"16",width:"30",height:"24",rx:"5"}),B.jsx("rect",{x:"20",y:"58",width:"30",height:"24",rx:"5"}),B.jsx("rect",{x:"75",y:"58",width:"30",height:"24",rx:"5"}),B.jsx("rect",{x:"130",y:"58",width:"30",height:"24",rx:"5"})]}),B.jsxs("g",{stroke:"#4fd1c5",strokeWidth:"2",fill:"none",markerEnd:"url(#rnnThumbArrow)",children:[B.jsx("line",{x1:"50",y1:"28",x2:"73",y2:"28"}),B.jsx("line",{x1:"105",y1:"28",x2:"128",y2:"28"}),B.jsx("line",{x1:"50",y1:"70",x2:"73",y2:"70"}),B.jsx("line",{x1:"105",y1:"70",x2:"128",y2:"70"})]}),B.jsxs("g",{stroke:"#ff7a59",strokeWidth:"2",fill:"none",children:[B.jsx("line",{x1:"35",y1:"58",x2:"35",y2:"42"}),B.jsx("line",{x1:"90",y1:"58",x2:"90",y2:"42"}),B.jsx("line",{x1:"145",y1:"58",x2:"145",y2:"42"})]})]})}function f2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("rect",{x:"14",y:"20",width:"26",height:"60",rx:"4",fill:"#eef1f7",stroke:"#ff7a59"}),B.jsx("rect",{x:"50",y:"20",width:"26",height:"60",rx:"4",fill:"#eef1f7",stroke:"#4fd1c5"}),B.jsx("rect",{x:"86",y:"20",width:"26",height:"60",rx:"4",fill:"#eef1f7",stroke:"#8b7bff"}),B.jsx("rect",{x:"128",y:"58",width:"14",height:"22",rx:"2",fill:"#4fd1c5"}),B.jsx("rect",{x:"146",y:"30",width:"14",height:"50",rx:"2",fill:"#ffc846"}),B.jsx("rect",{x:"164",y:"64",width:"10",height:"16",rx:"2",fill:"#4fd1c5"})]})}function p2(){return B.jsxs("svg",{viewBox:"0 0 180 100",role:"img","aria-hidden":"true",children:[B.jsx("line",{x1:"20",y1:"78",x2:"160",y2:"38",stroke:"#ffc846",strokeWidth:"2",strokeDasharray:"6 5"}),B.jsx("line",{x1:"60",y1:"80",x2:"120",y2:"22",stroke:"#ff7a59",strokeWidth:"3"}),B.jsx("line",{x1:"60",y1:"80",x2:"98",y2:"52",stroke:"#8b7bff",strokeWidth:"3"}),B.jsx("line",{x1:"60",y1:"80",x2:"78",y2:"34",stroke:"#4fd17a",strokeWidth:"3"}),B.jsx("line",{x1:"120",y1:"22",x2:"98",y2:"52",stroke:"#8a93a8",strokeWidth:"1.4",strokeDasharray:"4 4"})]})}const m2={"comparing-vectors":r2,"matrix-multiplication":u2,softmax:c2,"neural-network":d2,"recurrent-neural-network":o2,"llm-inference":f2,debiasing:p2};function h2({slug:r}){const d=m2[r];return B.jsx("div",{className:"thumbnail","aria-hidden":"true",children:B.jsx(d,{})})}function y2({animation:r}){return B.jsxs(Ju,{className:"catalog-card",to:`/${r.slug}`,children:[B.jsx(h2,{slug:r.slug}),B.jsx("h2",{children:r.title}),B.jsx("p",{children:r.description}),B.jsx("span",{className:"tag",children:r.tag})]})}function v2(){return B.jsxs("main",{className:"page home-page",children:[B.jsxs("header",{className:"hero",children:[B.jsx("h1",{children:"Machine-learning animations"}),B.jsx("p",{className:"intro",children:"Small, self-contained, interactive explainers for core machine-learning concepts."})]}),B.jsx("section",{className:"grid","aria-label":"Available animations",children:$u.map(r=>B.jsx(y2,{animation:r},r.slug))})]})}function x2(r){const d=new DOMParser().parseFromString(r,"text/html"),o=[...d.querySelectorAll("style")].map(N=>N.textContent),u=[...d.body.querySelectorAll("script")].filter(N=>!N.src).map(N=>N.textContent);d.querySelectorAll("site-nav, script").forEach(N=>N.remove());const m=d.body.querySelector(":scope > .wrap")||d.body,g=m.querySelector(":scope > h1"),E=m.querySelector(":scope > p.sub"),b=(g==null?void 0:g.textContent.trim())||"",y=(E==null?void 0:E.innerHTML)||"";return g==null||g.remove(),E==null||E.remove(),{intro:y,markup:m.innerHTML,scripts:u,styles:o,title:b}}function g2({animation:r}){const d=R.useRef(null),o=R.useMemo(()=>x2(r.source),[r.source]);return R.useEffect(()=>{document.title=`${r.title} | ML Animations`;const u=[],f=window.setInterval,m=window.setTimeout;window.setInterval=(...g)=>{const E=f(...g);return u.push(()=>clearInterval(E)),E},window.setTimeout=(...g)=>{const E=m(...g);return u.push(()=>clearTimeout(E)),E};try{o.scripts.forEach(g=>{Function(g)()})}finally{window.setInterval=f,window.setTimeout=m}return()=>u.forEach(g=>g())},[r.title,o.scripts]),B.jsxs("main",{className:"animation-page",children:[o.styles.map((u,f)=>B.jsx("style",{children:u},f)),B.jsxs("header",{className:"animation-header",children:[B.jsx("h1",{children:o.title}),o.intro&&B.jsx("p",{className:"animation-intro",dangerouslySetInnerHTML:{__html:o.intro}})]}),B.jsx("div",{ref:d,className:"animation-content",dangerouslySetInnerHTML:{__html:o.markup}})]})}function b2(){return B.jsx(gh,{children:B.jsxs(Wl,{element:B.jsx(s2,{}),children:[B.jsx(Wl,{index:!0,element:B.jsx(v2,{})}),$u.map(r=>B.jsx(Wl,{path:r.slug,element:B.jsx(g2,{animation:r})},r.slug)),B.jsx(Wl,{path:"*",element:B.jsx(yh,{replace:!0,to:"/"})})]})})}ym.createRoot(document.getElementById("root")).render(B.jsx(Gh,{children:B.jsx(b2,{})}));
