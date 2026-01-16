(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function Sw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bf={exports:{}},eo={};var kg;function ww(){if(kg)return eo;kg=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var p in c)p!=="key"&&(f[p]=c[p])}else f=c;return c=f.ref,{$$typeof:n,type:l,key:d,ref:c!==void 0?c:null,props:f}}return eo.Fragment=a,eo.jsx=o,eo.jsxs=o,eo}var Bg;function Tw(){return Bg||(Bg=1,bf.exports=ww()),bf.exports}var h=Tw(),Sf={exports:{}},ft={};var Ng;function jw(){if(Ng)return ft;Ng=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),T=Symbol.iterator;function C(A){return A===null||typeof A!="object"?null:(A=T&&A[T]||A["@@iterator"],typeof A=="function"?A:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,R={};function N(A,G,W){this.props=A,this.context=G,this.refs=R,this.updater=W||D}N.prototype.isReactComponent={},N.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function k(){}k.prototype=N.prototype;function O(A,G,W){this.props=A,this.context=G,this.refs=R,this.updater=W||D}var K=O.prototype=new k;K.constructor=O,$(K,N.prototype),K.isPureReactComponent=!0;var P=Array.isArray;function Q(){}var U={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function lt(A,G,W){var et=W.ref;return{$$typeof:n,type:A,key:G,ref:et!==void 0?et:null,props:W}}function Ct(A,G){return lt(A.type,G,A.props)}function Gt(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Kt(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(W){return G[W]})}var an=/\/+/g;function Se(A,G){return typeof A=="object"&&A!==null&&A.key!=null?Kt(""+A.key):G.toString(36)}function pe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Q,Q):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Y(A,G,W,et,st){var ut=typeof A;(ut==="undefined"||ut==="boolean")&&(A=null);var bt=!1;if(A===null)bt=!0;else switch(ut){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(A.$$typeof){case n:case a:bt=!0;break;case v:return bt=A._init,Y(bt(A._payload),G,W,et,st)}}if(bt)return st=st(A),bt=et===""?"."+Se(A,0):et,P(st)?(W="",bt!=null&&(W=bt.replace(an,"$&/")+"/"),Y(st,G,W,"",function(bn){return bn})):st!=null&&(Gt(st)&&(st=Ct(st,W+(st.key==null||A&&A.key===st.key?"":(""+st.key).replace(an,"$&/")+"/")+bt)),G.push(st)),1;bt=0;var Qt=et===""?".":et+":";if(P(A))for(var Et=0;Et<A.length;Et++)et=A[Et],ut=Qt+Se(et,Et),bt+=Y(et,G,W,ut,st);else if(Et=C(A),typeof Et=="function")for(A=Et.call(A),Et=0;!(et=A.next()).done;)et=et.value,ut=Qt+Se(et,Et++),bt+=Y(et,G,W,ut,st);else if(ut==="object"){if(typeof A.then=="function")return Y(pe(A),G,W,et,st);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return bt}function Z(A,G,W){if(A==null)return A;var et=[],st=0;return Y(A,et,"","",function(ut){return G.call(W,ut,st++)}),et}function it(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(W){(A._status===0||A._status===-1)&&(A._status=1,A._result=W)},function(W){(A._status===0||A._status===-1)&&(A._status=2,A._result=W)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var ct=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},mt={map:Z,forEach:function(A,G,W){Z(A,function(){G.apply(this,arguments)},W)},count:function(A){var G=0;return Z(A,function(){G++}),G},toArray:function(A){return Z(A,function(G){return G})||[]},only:function(A){if(!Gt(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ft.Activity=x,ft.Children=mt,ft.Component=N,ft.Fragment=o,ft.Profiler=c,ft.PureComponent=O,ft.StrictMode=l,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ft.__COMPILER_RUNTIME={__proto__:null,c:function(A){return U.H.useMemoCache(A)}},ft.cache=function(A){return function(){return A.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(A,G,W){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var et=$({},A.props),st=A.key;if(G!=null)for(ut in G.key!==void 0&&(st=""+G.key),G)!F.call(G,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&G.ref===void 0||(et[ut]=G[ut]);var ut=arguments.length-2;if(ut===1)et.children=W;else if(1<ut){for(var bt=Array(ut),Qt=0;Qt<ut;Qt++)bt[Qt]=arguments[Qt+2];et.children=bt}return lt(A.type,st,et)},ft.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ft.createElement=function(A,G,W){var et,st={},ut=null;if(G!=null)for(et in G.key!==void 0&&(ut=""+G.key),G)F.call(G,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(st[et]=G[et]);var bt=arguments.length-2;if(bt===1)st.children=W;else if(1<bt){for(var Qt=Array(bt),Et=0;Et<bt;Et++)Qt[Et]=arguments[Et+2];st.children=Qt}if(A&&A.defaultProps)for(et in bt=A.defaultProps,bt)st[et]===void 0&&(st[et]=bt[et]);return lt(A,ut,st)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(A){return{$$typeof:p,render:A}},ft.isValidElement=Gt,ft.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:it}},ft.memo=function(A,G){return{$$typeof:g,type:A,compare:G===void 0?null:G}},ft.startTransition=function(A){var G=U.T,W={};U.T=W;try{var et=A(),st=U.S;st!==null&&st(W,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(Q,ct)}catch(ut){ct(ut)}finally{G!==null&&W.types!==null&&(G.types=W.types),U.T=G}},ft.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ft.use=function(A){return U.H.use(A)},ft.useActionState=function(A,G,W){return U.H.useActionState(A,G,W)},ft.useCallback=function(A,G){return U.H.useCallback(A,G)},ft.useContext=function(A){return U.H.useContext(A)},ft.useDebugValue=function(){},ft.useDeferredValue=function(A,G){return U.H.useDeferredValue(A,G)},ft.useEffect=function(A,G){return U.H.useEffect(A,G)},ft.useEffectEvent=function(A){return U.H.useEffectEvent(A)},ft.useId=function(){return U.H.useId()},ft.useImperativeHandle=function(A,G,W){return U.H.useImperativeHandle(A,G,W)},ft.useInsertionEffect=function(A,G){return U.H.useInsertionEffect(A,G)},ft.useLayoutEffect=function(A,G){return U.H.useLayoutEffect(A,G)},ft.useMemo=function(A,G){return U.H.useMemo(A,G)},ft.useOptimistic=function(A,G){return U.H.useOptimistic(A,G)},ft.useReducer=function(A,G,W){return U.H.useReducer(A,G,W)},ft.useRef=function(A){return U.H.useRef(A)},ft.useState=function(A){return U.H.useState(A)},ft.useSyncExternalStore=function(A,G,W){return U.H.useSyncExternalStore(A,G,W)},ft.useTransition=function(){return U.H.useTransition()},ft.version="19.2.3",ft}var Lg;function _d(){return Lg||(Lg=1,Sf.exports=jw()),Sf.exports}var j=_d();const Hn=Sw(j);var wf={exports:{}},no={},Tf={exports:{}},jf={};var _g;function Cw(){return _g||(_g=1,(function(n){function a(Y,Z){var it=Y.length;Y.push(Z);t:for(;0<it;){var ct=it-1>>>1,mt=Y[ct];if(0<c(mt,Z))Y[ct]=Z,Y[it]=mt,it=ct;else break t}}function o(Y){return Y.length===0?null:Y[0]}function l(Y){if(Y.length===0)return null;var Z=Y[0],it=Y.pop();if(it!==Z){Y[0]=it;t:for(var ct=0,mt=Y.length,A=mt>>>1;ct<A;){var G=2*(ct+1)-1,W=Y[G],et=G+1,st=Y[et];if(0>c(W,it))et<mt&&0>c(st,W)?(Y[ct]=st,Y[et]=it,ct=et):(Y[ct]=W,Y[G]=it,ct=G);else if(et<mt&&0>c(st,it))Y[ct]=st,Y[et]=it,ct=et;else break t}}return Z}function c(Y,Z){var it=Y.sortIndex-Z.sortIndex;return it!==0?it:Y.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,x=null,T=3,C=!1,D=!1,$=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function K(Y){for(var Z=o(g);Z!==null;){if(Z.callback===null)l(g);else if(Z.startTime<=Y)l(g),Z.sortIndex=Z.expirationTime,a(m,Z);else break;Z=o(g)}}function P(Y){if($=!1,K(Y),!D)if(o(m)!==null)D=!0,Q||(Q=!0,Kt());else{var Z=o(g);Z!==null&&pe(P,Z.startTime-Y)}}var Q=!1,U=-1,F=5,lt=-1;function Ct(){return R?!0:!(n.unstable_now()-lt<F)}function Gt(){if(R=!1,Q){var Y=n.unstable_now();lt=Y;var Z=!0;try{t:{D=!1,$&&($=!1,k(U),U=-1),C=!0;var it=T;try{e:{for(K(Y),x=o(m);x!==null&&!(x.expirationTime>Y&&Ct());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,T=x.priorityLevel;var mt=ct(x.expirationTime<=Y);if(Y=n.unstable_now(),typeof mt=="function"){x.callback=mt,K(Y),Z=!0;break e}x===o(m)&&l(m),K(Y)}else l(m);x=o(m)}if(x!==null)Z=!0;else{var A=o(g);A!==null&&pe(P,A.startTime-Y),Z=!1}}break t}finally{x=null,T=it,C=!1}Z=void 0}}finally{Z?Kt():Q=!1}}}var Kt;if(typeof O=="function")Kt=function(){O(Gt)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Se=an.port2;an.port1.onmessage=Gt,Kt=function(){Se.postMessage(null)}}else Kt=function(){N(Gt,0)};function pe(Y,Z){U=N(function(){Y(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var it=T;T=Z;try{return Y()}finally{T=it}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var it=T;T=Y;try{return Z()}finally{T=it}},n.unstable_scheduleCallback=function(Y,Z,it){var ct=n.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ct+it:ct):it=ct,Y){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=it+mt,Y={id:v++,callback:Z,priorityLevel:Y,startTime:it,expirationTime:mt,sortIndex:-1},it>ct?(Y.sortIndex=it,a(g,Y),o(m)===null&&Y===o(g)&&($?(k(U),U=-1):$=!0,pe(P,it-ct))):(Y.sortIndex=mt,a(m,Y),D||C||(D=!0,Q||(Q=!0,Kt()))),Y},n.unstable_shouldYield=Ct,n.unstable_wrapCallback=function(Y){var Z=T;return function(){var it=T;T=Z;try{return Y.apply(this,arguments)}finally{T=it}}}})(jf)),jf}var Vg;function Ew(){return Vg||(Vg=1,Tf.exports=Cw()),Tf.exports}var Cf={exports:{}},me={};var Ug;function Aw(){if(Ug)return me;Ug=1;var n=_d();function a(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(m,g,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,me.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return f(m,g,null,v)},me.flushSync=function(m){var g=d.T,v=l.p;try{if(d.T=null,l.p=2,m)return m()}finally{d.T=g,l.p=v,l.d.f()}},me.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},me.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},me.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,x=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:T,fetchPriority:C}):v==="script"&&l.d.X(m,{crossOrigin:x,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},me.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},me.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,x=p(v,g.crossOrigin);l.d.L(m,v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},me.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},me.requestFormReset=function(m){l.d.r(m)},me.unstable_batchedUpdates=function(m,g){return m(g)},me.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},me.useFormStatus=function(){return d.H.useHostTransitionStatus()},me.version="19.2.3",me}var Hg;function Mw(){if(Hg)return Cf.exports;Hg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Cf.exports=Aw(),Cf.exports}var Yg;function $w(){if(Yg)return no;Yg=1;var n=Ew(),a=_d(),o=Mw();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(l(188))}function g(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(l(188));return e!==t?null:t}for(var i=t,r=e;;){var s=i.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){i=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===i)return m(s),t;if(u===r)return m(s),e;u=u.sibling}throw Error(l(188))}if(i.return!==r.return)i=s,r=u;else{for(var y=!1,S=s.child;S;){if(S===i){y=!0,i=s,r=u;break}if(S===r){y=!0,r=s,i=u;break}S=S.sibling}if(!y){for(S=u.child;S;){if(S===i){y=!0,i=u,r=s;break}if(S===r){y=!0,r=u,i=s;break}S=S.sibling}if(!y)throw Error(l(189))}}if(i.alternate!==r)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,T=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),Ct=Symbol.for("react.memo_cache_sentinel"),Gt=Symbol.iterator;function Kt(t){return t===null||typeof t!="object"?null:(t=Gt&&t[Gt]||t["@@iterator"],typeof t=="function"?t:null)}var an=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===an?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $:return"Fragment";case N:return"Profiler";case R:return"StrictMode";case P:return"Suspense";case Q:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case O:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return e=t.displayName||null,e!==null?e:Se(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return Se(t(e))}catch{}}return null}var pe=Array.isArray,Y=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},ct=[],mt=-1;function A(t){return{current:t}}function G(t){0>mt||(t.current=ct[mt],ct[mt]=null,mt--)}function W(t,e){mt++,ct[mt]=t.current,t.current=e}var et=A(null),st=A(null),ut=A(null),bt=A(null);function Qt(t,e){switch(W(ut,e),W(st,t),W(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ig(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ig(e),t=ag(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(et),W(et,t)}function Et(){G(et),G(st),G(ut)}function bn(t){t.memoizedState!==null&&W(bt,t);var e=et.current,i=ag(e,t.type);e!==i&&(W(st,t),W(et,i))}function Sn(t){st.current===t&&(G(et),G(st)),bt.current===t&&(G(bt),Jr._currentValue=it)}var hn,Oh;function Ai(t){if(hn===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);hn=e&&e[1]||"",Oh=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+t+Oh}var nc=!1;function ic(t,e){if(!t||nc)return"";nc=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(V){var _=V}Reflect.construct(t,[],X)}else{try{X.call()}catch(V){_=V}t.call(X.prototype)}}else{try{throw Error()}catch(V){_=V}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(V){if(V&&_&&typeof V.stack=="string")return[V.stack,_.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),y=u[0],S=u[1];if(y&&S){var E=y.split(`
`),L=S.split(`
`);for(s=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(r===E.length||s===L.length)for(r=E.length-1,s=L.length-1;1<=r&&0<=s&&E[r]!==L[s];)s--;for(;1<=r&&0<=s;r--,s--)if(E[r]!==L[s]){if(r!==1||s!==1)do if(r--,s--,0>s||E[r]!==L[s]){var H=`
`+E[r].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=r&&0<=s);break}}}finally{nc=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Ai(i):""}function Wb(t,e){switch(t.tag){case 26:case 27:case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return t.child!==e&&e!==null?Ai("Suspense Fallback"):Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return ic(t.type,!1);case 11:return ic(t.type.render,!1);case 1:return ic(t.type,!0);case 31:return Ai("Activity");default:return""}}function kh(t){try{var e="",i=null;do e+=Wb(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ac=Object.prototype.hasOwnProperty,rc=n.unstable_scheduleCallback,oc=n.unstable_cancelCallback,Ib=n.unstable_shouldYield,t2=n.unstable_requestPaint,$e=n.unstable_now,e2=n.unstable_getCurrentPriorityLevel,Bh=n.unstable_ImmediatePriority,Nh=n.unstable_UserBlockingPriority,ko=n.unstable_NormalPriority,n2=n.unstable_LowPriority,Lh=n.unstable_IdlePriority,i2=n.log,a2=n.unstable_setDisableYieldValue,cr=null,De=null;function Kn(t){if(typeof i2=="function"&&a2(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(cr,t)}catch{}}var ze=Math.clz32?Math.clz32:l2,r2=Math.log,o2=Math.LN2;function l2(t){return t>>>=0,t===0?32:31-(r2(t)/o2|0)|0}var Bo=256,No=262144,Lo=4194304;function Mi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _o(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var s=0,u=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var S=r&134217727;return S!==0?(r=S&~u,r!==0?s=Mi(r):(y&=S,y!==0?s=Mi(y):i||(i=S&~t,i!==0&&(s=Mi(i))))):(S=r&~u,S!==0?s=Mi(S):y!==0?s=Mi(y):i||(i=r&~t,i!==0&&(s=Mi(i)))),s===0?0:e!==0&&e!==s&&(e&u)===0&&(u=s&-s,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:s}function ur(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function s2(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(){var t=Lo;return Lo<<=1,(Lo&62914560)===0&&(Lo=4194304),t}function lc(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function fr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function c2(t,e,i,r,s,u){var y=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var S=t.entanglements,E=t.expirationTimes,L=t.hiddenUpdates;for(i=y&~i;0<i;){var H=31-ze(i),X=1<<H;S[H]=0,E[H]=-1;var _=L[H];if(_!==null)for(L[H]=null,H=0;H<_.length;H++){var V=_[H];V!==null&&(V.lane&=-536870913)}i&=~X}r!==0&&Vh(t,r,0),u!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=u&~(y&~e))}function Vh(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ze(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Uh(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-ze(i),s=1<<r;s&e|t[r]&e&&(t[r]|=e),i&=~s}}function Hh(t,e){var i=e&-e;return i=(i&42)!==0?1:sc(i),(i&(t.suspendedLanes|e))!==0?0:i}function sc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yh(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Ag(t.type))}function Gh(t,e){var i=Z.p;try{return Z.p=t,e()}finally{Z.p=i}}var Qn=Math.random().toString(36).slice(2),se="__reactFiber$"+Qn,we="__reactProps$"+Qn,ta="__reactContainer$"+Qn,uc="__reactEvents$"+Qn,u2="__reactListeners$"+Qn,f2="__reactHandles$"+Qn,qh="__reactResources$"+Qn,dr="__reactMarker$"+Qn;function fc(t){delete t[se],delete t[we],delete t[uc],delete t[u2],delete t[f2]}function ea(t){var e=t[se];if(e)return e;for(var i=t.parentNode;i;){if(e=i[ta]||i[se]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=fg(t);t!==null;){if(i=t[se])return i;t=fg(t)}return e}t=i,i=t.parentNode}return null}function na(t){if(t=t[se]||t[ta]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function hr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function ia(t){var e=t[qh];return e||(e=t[qh]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[dr]=!0}var Xh=new Set,Ph={};function $i(t,e){aa(t,e),aa(t+"Capture",e)}function aa(t,e){for(Ph[t]=e,t=0;t<e.length;t++)Xh.add(e[t])}var d2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kh={},Qh={};function h2(t){return ac.call(Qh,t)?!0:ac.call(Kh,t)?!1:d2.test(t)?Qh[t]=!0:(Kh[t]=!0,!1)}function Vo(t,e,i){if(h2(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function Uo(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function wn(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+r)}}function Ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p2(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,u=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(y){i=""+y,u.call(this,y)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dc(t){if(!t._valueTracker){var e=Zh(t)?"checked":"value";t._valueTracker=p2(t,e,""+t[e])}}function Fh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Zh(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var m2=/[\n"\\]/g;function He(t){return t.replace(m2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function hc(t,e,i,r,s,u,y,S){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ue(e)):t.value!==""+Ue(e)&&(t.value=""+Ue(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?pc(t,y,Ue(e)):i!=null?pc(t,y,Ue(i)):r!=null&&t.removeAttribute("value"),s==null&&u!=null&&(t.defaultChecked=!!u),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+Ue(S):t.removeAttribute("name")}function Jh(t,e,i,r,s,u,y,S){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){dc(t);return}i=i!=null?""+Ue(i):"",e=e!=null?""+Ue(e):i,S||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=S?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),dc(t)}function pc(t,e,i){e==="number"&&Ho(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function ra(t,e,i,r){if(t=t.options,e){e={};for(var s=0;s<i.length;s++)e["$"+i[s]]=!0;for(i=0;i<t.length;i++)s=e.hasOwnProperty("$"+t[i].value),t[i].selected!==s&&(t[i].selected=s),s&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Ue(i),e=null,s=0;s<t.length;s++){if(t[s].value===i){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wh(t,e,i){if(e!=null&&(e=""+Ue(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Ue(i):""}function Ih(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(l(92));if(pe(r)){if(1<r.length)throw Error(l(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Ue(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),dc(t)}function oa(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var g2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||g2.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function ep(t,e,i){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&i[s]!==r&&tp(t,s,r)}else for(var u in e)e.hasOwnProperty(u)&&tp(t,u,e[u])}function mc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return x2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Tn(){}var gc=null;function yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var la=null,sa=null;function np(t){var e=na(t);if(e&&(t=e.stateNode)){var i=t[we]||null;t:switch(t=e.stateNode,e.type){case"input":if(hc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+He(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var s=r[we]||null;if(!s)throw Error(l(90));hc(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Fh(r)}break t;case"textarea":Wh(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&ra(t,!!i.multiple,e,!1)}}}var xc=!1;function ip(t,e,i){if(xc)return t(e,i);xc=!0;try{var r=t(e);return r}finally{if(xc=!1,(la!==null||sa!==null)&&($l(),la&&(e=la,t=sa,sa=la=null,np(e),t)))for(e=0;e<t.length;e++)np(t[e])}}function pr(t,e){var i=t.stateNode;if(i===null)return null;var r=i[we]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(l(231,e,typeof i));return i}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(jn)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){vc=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{vc=!1}var Zn=null,bc=null,Go=null;function ap(){if(Go)return Go;var t,e=bc,i=e.length,r,s="value"in Zn?Zn.value:Zn.textContent,u=s.length;for(t=0;t<i&&e[t]===s[t];t++);var y=i-t;for(r=1;r<=y&&e[i-r]===s[u-r];r++);return Go=s.slice(t,1<r?1-r:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function rp(){return!1}function Te(t){function e(i,r,s,u,y){this._reactName=i,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=y,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(i=t[S],this[S]=i?i(u):u[S]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xo:rp,this.isPropagationStopped=rp,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Te(Di),gr=x({},Di,{view:0,detail:0}),v2=Te(gr),Sc,wc,yr,Ko=x({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yr&&(yr&&t.type==="mousemove"?(Sc=t.screenX-yr.screenX,wc=t.screenY-yr.screenY):wc=Sc=0,yr=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),op=Te(Ko),b2=x({},Ko,{dataTransfer:0}),S2=Te(b2),w2=x({},gr,{relatedTarget:0}),Tc=Te(w2),T2=x({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),j2=Te(T2),C2=x({},Di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E2=Te(C2),A2=x({},Di,{data:0}),lp=Te(A2),M2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D2[t])?!!e[t]:!1}function jc(){return z2}var R2=x({},gr,{key:function(t){if(t.key){var e=M2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O2=Te(R2),k2=x({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Te(k2),B2=x({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),N2=Te(B2),L2=x({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),_2=Te(L2),V2=x({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U2=Te(V2),H2=x({},Di,{newState:0,oldState:0}),Y2=Te(H2),G2=[9,13,27,32],Cc=jn&&"CompositionEvent"in window,xr=null;jn&&"documentMode"in document&&(xr=document.documentMode);var q2=jn&&"TextEvent"in window&&!xr,cp=jn&&(!Cc||xr&&8<xr&&11>=xr),up=" ",fp=!1;function dp(t,e){switch(t){case"keyup":return G2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ca=!1;function X2(t,e){switch(t){case"compositionend":return hp(e);case"keypress":return e.which!==32?null:(fp=!0,up);case"textInput":return t=e.data,t===up&&fp?null:t;default:return null}}function P2(t,e){if(ca)return t==="compositionend"||!Cc&&dp(t,e)?(t=ap(),Go=bc=Zn=null,ca=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cp&&e.locale!=="ko"?null:e.data;default:return null}}var K2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K2[t.type]:e==="textarea"}function mp(t,e,i,r){la?sa?sa.push(r):sa=[r]:la=r,e=Nl(e,"onChange"),0<e.length&&(i=new Po("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var vr=null,br=null;function Q2(t){J0(t,0)}function Qo(t){var e=hr(t);if(Fh(e))return t}function gp(t,e){if(t==="change")return e}var yp=!1;if(jn){var Ec;if(jn){var Ac="oninput"in document;if(!Ac){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),Ac=typeof xp.oninput=="function"}Ec=Ac}else Ec=!1;yp=Ec&&(!document.documentMode||9<document.documentMode)}function vp(){vr&&(vr.detachEvent("onpropertychange",bp),br=vr=null)}function bp(t){if(t.propertyName==="value"&&Qo(br)){var e=[];mp(e,br,t,yc(t)),ip(Q2,e)}}function Z2(t,e,i){t==="focusin"?(vp(),vr=e,br=i,vr.attachEvent("onpropertychange",bp)):t==="focusout"&&vp()}function F2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(br)}function J2(t,e){if(t==="click")return Qo(e)}function W2(t,e){if(t==="input"||t==="change")return Qo(e)}function I2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Re=typeof Object.is=="function"?Object.is:I2;function Sr(t,e){if(Re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var s=i[r];if(!ac.call(e,s)||!Re(t[s],e[s]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var i=Sp(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Sp(i)}}function Tp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ho(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Ho(t.document)}return e}function Mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var tS=jn&&"documentMode"in document&&11>=document.documentMode,ua=null,$c=null,wr=null,Dc=!1;function Cp(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Dc||ua==null||ua!==Ho(r)||(r=ua,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Sr(wr,r)||(wr=r,r=Nl($c,"onSelect"),0<r.length&&(e=new Po("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=ua)))}function zi(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var fa={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},zc={},Ep={};jn&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function Ri(t){if(zc[t])return zc[t];if(!fa[t])return t;var e=fa[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Ep)return zc[t]=e[i];return t}var Ap=Ri("animationend"),Mp=Ri("animationiteration"),$p=Ri("animationstart"),eS=Ri("transitionrun"),nS=Ri("transitionstart"),iS=Ri("transitioncancel"),Dp=Ri("transitionend"),zp=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function rn(t,e){zp.set(t,e),$i(e,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ye=[],da=0,Oc=0;function Fo(){for(var t=da,e=Oc=da=0;e<t;){var i=Ye[e];Ye[e++]=null;var r=Ye[e];Ye[e++]=null;var s=Ye[e];Ye[e++]=null;var u=Ye[e];if(Ye[e++]=null,r!==null&&s!==null){var y=r.pending;y===null?s.next=s:(s.next=y.next,y.next=s),r.pending=s}u!==0&&Rp(i,s,u)}}function Jo(t,e,i,r){Ye[da++]=t,Ye[da++]=e,Ye[da++]=i,Ye[da++]=r,Oc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function kc(t,e,i,r){return Jo(t,e,i,r),Wo(t)}function Oi(t,e){return Jo(t,null,null,e),Wo(t)}function Rp(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var s=!1,u=t.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(s=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,s&&e!==null&&(s=31-ze(i),t=u.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=i|536870912),u):null}function Wo(t){if(50<qr)throw qr=0,Gu=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ha={};function aS(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,e,i,r){return new aS(t,e,i,r)}function Bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cn(t,e){var i=t.alternate;return i===null?(i=Oe(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Op(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Io(t,e,i,r,s,u){var y=0;if(r=t,typeof t=="function")Bc(t)&&(y=1);else if(typeof t=="string")y=cw(t,i,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=Oe(31,i,e,s),t.elementType=lt,t.lanes=u,t;case $:return ki(i.children,s,u,e);case R:y=8,s|=24;break;case N:return t=Oe(12,i,e,s|2),t.elementType=N,t.lanes=u,t;case P:return t=Oe(13,i,e,s),t.elementType=P,t.lanes=u,t;case Q:return t=Oe(19,i,e,s),t.elementType=Q,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:y=10;break t;case k:y=9;break t;case K:y=11;break t;case U:y=14;break t;case F:y=16,r=null;break t}y=29,i=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=Oe(y,i,e,s),e.elementType=t,e.type=r,e.lanes=u,e}function ki(t,e,i,r){return t=Oe(7,t,r,e),t.lanes=i,t}function Nc(t,e,i){return t=Oe(6,t,null,e),t.lanes=i,t}function kp(t){var e=Oe(18,null,null,0);return e.stateNode=t,e}function Lc(t,e,i){return e=Oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Bp=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var i=Bp.get(t);return i!==void 0?i:(e={value:t,source:e,stack:kh(e)},Bp.set(t,e),e)}return{value:t,source:e,stack:kh(e)}}var pa=[],ma=0,tl=null,Tr=0,qe=[],Xe=0,Fn=null,pn=1,mn="";function En(t,e){pa[ma++]=Tr,pa[ma++]=tl,tl=t,Tr=e}function Np(t,e,i){qe[Xe++]=pn,qe[Xe++]=mn,qe[Xe++]=Fn,Fn=t;var r=pn;t=mn;var s=32-ze(r)-1;r&=~(1<<s),i+=1;var u=32-ze(e)+s;if(30<u){var y=s-s%5;u=(r&(1<<y)-1).toString(32),r>>=y,s-=y,pn=1<<32-ze(e)+s|i<<s|r,mn=u+t}else pn=1<<u|i<<s|r,mn=t}function _c(t){t.return!==null&&(En(t,1),Np(t,1,0))}function Vc(t){for(;t===tl;)tl=pa[--ma],pa[ma]=null,Tr=pa[--ma],pa[ma]=null;for(;t===Fn;)Fn=qe[--Xe],qe[Xe]=null,mn=qe[--Xe],qe[Xe]=null,pn=qe[--Xe],qe[Xe]=null}function Lp(t,e){qe[Xe++]=pn,qe[Xe++]=mn,qe[Xe++]=Fn,pn=e.id,mn=e.overflow,Fn=t}var ce=null,Nt=null,St=!1,Jn=null,Pe=!1,Uc=Error(l(519));function Wn(t){var e=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(Ge(e,t)),Uc}function _p(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[se]=t,e[we]=r,i){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(i=0;i<Pr.length;i++)yt(Pr[i],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),Jh(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),Ih(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||eg(e.textContent,i)?(r.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),r.onScroll!=null&&yt("scroll",e),r.onScrollEnd!=null&&yt("scrollend",e),r.onClick!=null&&(e.onclick=Tn),e=!0):e=!1,e||Wn(t,!0)}function Vp(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 31:case 13:Pe=!1;return;case 27:case 3:Pe=!0;return;default:ce=ce.return}}function ga(t){if(t!==ce)return!1;if(!St)return Vp(t),St=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||rf(t.type,t.memoizedProps)),i=!i),i&&Nt&&Wn(t),Vp(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Nt=ug(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Nt=ug(t)}else e===27?(e=Nt,di(t.type)?(t=uf,uf=null,Nt=t):Nt=e):Nt=ce?Qe(t.stateNode.nextSibling):null;return!0}function Bi(){Nt=ce=null,St=!1}function Hc(){var t=Jn;return t!==null&&(Ae===null?Ae=t:Ae.push.apply(Ae,t),Jn=null),t}function jr(t){Jn===null?Jn=[t]:Jn.push(t)}var Yc=A(null),Ni=null,An=null;function In(t,e,i){W(Yc,e._currentValue),e._currentValue=i}function Mn(t){t._currentValue=Yc.current,G(Yc)}function Gc(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function qc(t,e,i,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){var y=s.child;u=u.firstContext;t:for(;u!==null;){var S=u;u=s;for(var E=0;E<e.length;E++)if(S.context===e[E]){u.lanes|=i,S=u.alternate,S!==null&&(S.lanes|=i),Gc(u.return,i,t),r||(y=null);break t}u=S.next}}else if(s.tag===18){if(y=s.return,y===null)throw Error(l(341));y.lanes|=i,u=y.alternate,u!==null&&(u.lanes|=i),Gc(y,i,t),y=null}else y=s.child;if(y!==null)y.return=s;else for(y=s;y!==null;){if(y===t){y=null;break}if(s=y.sibling,s!==null){s.return=y.return,y=s;break}y=y.return}s=y}}function ya(t,e,i,r){t=null;for(var s=e,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var y=s.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var S=s.type;Re(s.pendingProps.value,y.value)||(t!==null?t.push(S):t=[S])}}else if(s===bt.current){if(y=s.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Jr):t=[Jr])}s=s.return}t!==null&&qc(e,t,i,r),e.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Li(t){Ni=t,An=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ue(t){return Up(Ni,t)}function nl(t,e){return Ni===null&&Li(t),Up(t,e)}function Up(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},An===null){if(t===null)throw Error(l(308));An=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else An=An.next=e;return i}var rS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},oS=n.unstable_scheduleCallback,lS=n.unstable_NormalPriority,Jt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new rS,data:new Map,refCount:0}}function Cr(t){t.refCount--,t.refCount===0&&oS(lS,function(){t.controller.abort()})}var Er=null,Pc=0,xa=0,va=null;function sS(t,e){if(Er===null){var i=Er=[];Pc=0,xa=Zu(),va={status:"pending",value:void 0,then:function(r){i.push(r)}}}return Pc++,e.then(Hp,Hp),e}function Hp(){if(--Pc===0&&Er!==null){va!==null&&(va.status="fulfilled");var t=Er;Er=null,xa=0,va=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function cS(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(s){i.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<i.length;s++)(0,i[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<i.length;s++)(0,i[s])(void 0)}),r}var Yp=Y.S;Y.S=function(t,e){C0=$e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&sS(t,e),Yp!==null&&Yp(t,e)};var _i=A(null);function Kc(){var t=_i.current;return t!==null?t:kt.pooledCache}function il(t,e){e===null?W(_i,_i.current):W(_i,e.pool)}function Gp(){var t=Kc();return t===null?null:{parent:Jt._currentValue,pool:t}}var ba=Error(l(460)),Qc=Error(l(474)),al=Error(l(542)),rl={then:function(){}};function qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xp(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Tn,Tn),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Kp(t),t;default:if(typeof e.status=="string")e.then(Tn,Tn);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Kp(t),t}throw Ui=e,ba}}function Vi(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ui=i,ba):i}}var Ui=null;function Pp(){if(Ui===null)throw Error(l(459));var t=Ui;return Ui=null,t}function Kp(t){if(t===ba||t===al)throw Error(l(483))}var Sa=null,Ar=0;function ol(t){var e=Ar;return Ar+=1,Sa===null&&(Sa=[]),Xp(Sa,t,e)}function Mr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ll(t,e){throw e.$$typeof===T?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qp(t){function e(z,M){if(t){var B=z.deletions;B===null?(z.deletions=[M],z.flags|=16):B.push(M)}}function i(z,M){if(!t)return null;for(;M!==null;)e(z,M),M=M.sibling;return null}function r(z){for(var M=new Map;z!==null;)z.key!==null?M.set(z.key,z):M.set(z.index,z),z=z.sibling;return M}function s(z,M){return z=Cn(z,M),z.index=0,z.sibling=null,z}function u(z,M,B){return z.index=B,t?(B=z.alternate,B!==null?(B=B.index,B<M?(z.flags|=67108866,M):B):(z.flags|=67108866,M)):(z.flags|=1048576,M)}function y(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function S(z,M,B,q){return M===null||M.tag!==6?(M=Nc(B,z.mode,q),M.return=z,M):(M=s(M,B),M.return=z,M)}function E(z,M,B,q){var rt=B.type;return rt===$?H(z,M,B.props.children,q,B.key):M!==null&&(M.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===F&&Vi(rt)===M.type)?(M=s(M,B.props),Mr(M,B),M.return=z,M):(M=Io(B.type,B.key,B.props,null,z.mode,q),Mr(M,B),M.return=z,M)}function L(z,M,B,q){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Lc(B,z.mode,q),M.return=z,M):(M=s(M,B.children||[]),M.return=z,M)}function H(z,M,B,q,rt){return M===null||M.tag!==7?(M=ki(B,z.mode,q,rt),M.return=z,M):(M=s(M,B),M.return=z,M)}function X(z,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Nc(""+M,z.mode,B),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case C:return B=Io(M.type,M.key,M.props,null,z.mode,B),Mr(B,M),B.return=z,B;case D:return M=Lc(M,z.mode,B),M.return=z,M;case F:return M=Vi(M),X(z,M,B)}if(pe(M)||Kt(M))return M=ki(M,z.mode,B,null),M.return=z,M;if(typeof M.then=="function")return X(z,ol(M),B);if(M.$$typeof===O)return X(z,nl(z,M),B);ll(z,M)}return null}function _(z,M,B,q){var rt=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return rt!==null?null:S(z,M,""+B,q);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case C:return B.key===rt?E(z,M,B,q):null;case D:return B.key===rt?L(z,M,B,q):null;case F:return B=Vi(B),_(z,M,B,q)}if(pe(B)||Kt(B))return rt!==null?null:H(z,M,B,q,null);if(typeof B.then=="function")return _(z,M,ol(B),q);if(B.$$typeof===O)return _(z,M,nl(z,B),q);ll(z,B)}return null}function V(z,M,B,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(B)||null,S(M,z,""+q,rt);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case C:return z=z.get(q.key===null?B:q.key)||null,E(M,z,q,rt);case D:return z=z.get(q.key===null?B:q.key)||null,L(M,z,q,rt);case F:return q=Vi(q),V(z,M,B,q,rt)}if(pe(q)||Kt(q))return z=z.get(B)||null,H(M,z,q,rt,null);if(typeof q.then=="function")return V(z,M,B,ol(q),rt);if(q.$$typeof===O)return V(z,M,B,nl(M,q),rt);ll(M,q)}return null}function nt(z,M,B,q){for(var rt=null,Tt=null,at=M,ht=M=0,vt=null;at!==null&&ht<B.length;ht++){at.index>ht?(vt=at,at=null):vt=at.sibling;var jt=_(z,at,B[ht],q);if(jt===null){at===null&&(at=vt);break}t&&at&&jt.alternate===null&&e(z,at),M=u(jt,M,ht),Tt===null?rt=jt:Tt.sibling=jt,Tt=jt,at=vt}if(ht===B.length)return i(z,at),St&&En(z,ht),rt;if(at===null){for(;ht<B.length;ht++)at=X(z,B[ht],q),at!==null&&(M=u(at,M,ht),Tt===null?rt=at:Tt.sibling=at,Tt=at);return St&&En(z,ht),rt}for(at=r(at);ht<B.length;ht++)vt=V(at,z,ht,B[ht],q),vt!==null&&(t&&vt.alternate!==null&&at.delete(vt.key===null?ht:vt.key),M=u(vt,M,ht),Tt===null?rt=vt:Tt.sibling=vt,Tt=vt);return t&&at.forEach(function(yi){return e(z,yi)}),St&&En(z,ht),rt}function ot(z,M,B,q){if(B==null)throw Error(l(151));for(var rt=null,Tt=null,at=M,ht=M=0,vt=null,jt=B.next();at!==null&&!jt.done;ht++,jt=B.next()){at.index>ht?(vt=at,at=null):vt=at.sibling;var yi=_(z,at,jt.value,q);if(yi===null){at===null&&(at=vt);break}t&&at&&yi.alternate===null&&e(z,at),M=u(yi,M,ht),Tt===null?rt=yi:Tt.sibling=yi,Tt=yi,at=vt}if(jt.done)return i(z,at),St&&En(z,ht),rt;if(at===null){for(;!jt.done;ht++,jt=B.next())jt=X(z,jt.value,q),jt!==null&&(M=u(jt,M,ht),Tt===null?rt=jt:Tt.sibling=jt,Tt=jt);return St&&En(z,ht),rt}for(at=r(at);!jt.done;ht++,jt=B.next())jt=V(at,z,ht,jt.value,q),jt!==null&&(t&&jt.alternate!==null&&at.delete(jt.key===null?ht:jt.key),M=u(jt,M,ht),Tt===null?rt=jt:Tt.sibling=jt,Tt=jt);return t&&at.forEach(function(bw){return e(z,bw)}),St&&En(z,ht),rt}function Ot(z,M,B,q){if(typeof B=="object"&&B!==null&&B.type===$&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case C:t:{for(var rt=B.key;M!==null;){if(M.key===rt){if(rt=B.type,rt===$){if(M.tag===7){i(z,M.sibling),q=s(M,B.props.children),q.return=z,z=q;break t}}else if(M.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===F&&Vi(rt)===M.type){i(z,M.sibling),q=s(M,B.props),Mr(q,B),q.return=z,z=q;break t}i(z,M);break}else e(z,M);M=M.sibling}B.type===$?(q=ki(B.props.children,z.mode,q,B.key),q.return=z,z=q):(q=Io(B.type,B.key,B.props,null,z.mode,q),Mr(q,B),q.return=z,z=q)}return y(z);case D:t:{for(rt=B.key;M!==null;){if(M.key===rt)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){i(z,M.sibling),q=s(M,B.children||[]),q.return=z,z=q;break t}else{i(z,M);break}else e(z,M);M=M.sibling}q=Lc(B,z.mode,q),q.return=z,z=q}return y(z);case F:return B=Vi(B),Ot(z,M,B,q)}if(pe(B))return nt(z,M,B,q);if(Kt(B)){if(rt=Kt(B),typeof rt!="function")throw Error(l(150));return B=rt.call(B),ot(z,M,B,q)}if(typeof B.then=="function")return Ot(z,M,ol(B),q);if(B.$$typeof===O)return Ot(z,M,nl(z,B),q);ll(z,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(i(z,M.sibling),q=s(M,B),q.return=z,z=q):(i(z,M),q=Nc(B,z.mode,q),q.return=z,z=q),y(z)):i(z,M)}return function(z,M,B,q){try{Ar=0;var rt=Ot(z,M,B,q);return Sa=null,rt}catch(at){if(at===ba||at===al)throw at;var Tt=Oe(29,at,null,z.mode);return Tt.lanes=q,Tt.return=z,Tt}}}var Hi=Qp(!0),Zp=Qp(!1),ti=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ei(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ni(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(At&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=Wo(t),Rp(t,null,i),e}return Jo(t,r,e,i),Wo(t)}function $r(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Uh(t,i)}}function Jc(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var s=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?s=u=y:u=u.next=y,i=i.next}while(i!==null);u===null?s=u=e:u=u.next=e}else s=u=e;i={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Wc=!1;function Dr(){if(Wc){var t=va;if(t!==null)throw t}}function zr(t,e,i,r){Wc=!1;var s=t.updateQueue;ti=!1;var u=s.firstBaseUpdate,y=s.lastBaseUpdate,S=s.shared.pending;if(S!==null){s.shared.pending=null;var E=S,L=E.next;E.next=null,y===null?u=L:y.next=L,y=E;var H=t.alternate;H!==null&&(H=H.updateQueue,S=H.lastBaseUpdate,S!==y&&(S===null?H.firstBaseUpdate=L:S.next=L,H.lastBaseUpdate=E))}if(u!==null){var X=s.baseState;y=0,H=L=E=null,S=u;do{var _=S.lane&-536870913,V=_!==S.lane;if(V?(xt&_)===_:(r&_)===_){_!==0&&_===xa&&(Wc=!0),H!==null&&(H=H.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});t:{var nt=t,ot=S;_=e;var Ot=i;switch(ot.tag){case 1:if(nt=ot.payload,typeof nt=="function"){X=nt.call(Ot,X,_);break t}X=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=ot.payload,_=typeof nt=="function"?nt.call(Ot,X,_):nt,_==null)break t;X=x({},X,_);break t;case 2:ti=!0}}_=S.callback,_!==null&&(t.flags|=64,V&&(t.flags|=8192),V=s.callbacks,V===null?s.callbacks=[_]:V.push(_))}else V={lane:_,tag:S.tag,payload:S.payload,callback:S.callback,next:null},H===null?(L=H=V,E=X):H=H.next=V,y|=_;if(S=S.next,S===null){if(S=s.shared.pending,S===null)break;V=S,S=V.next,V.next=null,s.lastBaseUpdate=V,s.shared.pending=null}}while(!0);H===null&&(E=X),s.baseState=E,s.firstBaseUpdate=L,s.lastBaseUpdate=H,u===null&&(s.shared.lanes=0),li|=y,t.lanes=y,t.memoizedState=X}}function Fp(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function Jp(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Fp(i[t],e)}var wa=A(null),sl=A(0);function Wp(t,e){t=Ln,W(sl,t),W(wa,e),Ln=t|e.baseLanes}function Ic(){W(sl,Ln),W(wa,wa.current)}function tu(){Ln=sl.current,G(wa),G(sl)}var ke=A(null),Ke=null;function ii(t){var e=t.alternate;W(Zt,Zt.current&1),W(ke,t),Ke===null&&(e===null||wa.current!==null||e.memoizedState!==null)&&(Ke=t)}function eu(t){W(Zt,Zt.current),W(ke,t),Ke===null&&(Ke=t)}function Ip(t){t.tag===22?(W(Zt,Zt.current),W(ke,t),Ke===null&&(Ke=t)):ai()}function ai(){W(Zt,Zt.current),W(ke,ke.current)}function Be(t){G(ke),Ke===t&&(Ke=null),G(Zt)}var Zt=A(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||sf(i)||cf(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $n=0,dt=null,zt=null,Wt=null,ul=!1,Ta=!1,Yi=!1,fl=0,Rr=0,ja=null,uS=0;function qt(){throw Error(l(321))}function nu(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Re(t[i],e[i]))return!1;return!0}function iu(t,e,i,r,s,u){return $n=u,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Y.H=t===null||t.memoizedState===null?Nm:xu,Yi=!1,u=i(r,s),Yi=!1,Ta&&(u=em(e,i,r,s)),tm(t),u}function tm(t){Y.H=Br;var e=zt!==null&&zt.next!==null;if($n=0,Wt=zt=dt=null,ul=!1,Rr=0,ja=null,e)throw Error(l(300));t===null||It||(t=t.dependencies,t!==null&&el(t)&&(It=!0))}function em(t,e,i,r){dt=t;var s=0;do{if(Ta&&(ja=null),Rr=0,Ta=!1,25<=s)throw Error(l(301));if(s+=1,Wt=zt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Y.H=Lm,u=e(i,r)}while(Ta);return u}function fS(){var t=Y.H,e=t.useState()[0];return e=typeof e.then=="function"?Or(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(dt.flags|=1024),e}function au(){var t=fl!==0;return fl=0,t}function ru(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function ou(t){if(ul){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ul=!1}$n=0,Wt=zt=dt=null,Ta=!1,Rr=fl=0,ja=null}function xe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?dt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Ft(){if(zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?dt.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw dt.alternate===null?Error(l(467)):Error(l(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?dt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Or(t){var e=Rr;return Rr+=1,ja===null&&(ja=[]),t=Xp(ja,t,e),e=dt,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,Y.H=e===null||e.memoizedState===null?Nm:xu),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Or(t);if(t.$$typeof===O)return ue(t)}throw Error(l(438,String(t)))}function lu(t){var e=null,i=dt.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=dl(),dt.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Ct;return e.index++,i}function Dn(t,e){return typeof e=="function"?e(t):e}function pl(t){var e=Ft();return su(e,zt,t)}function su(t,e,i){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=i;var s=t.baseQueue,u=r.pending;if(u!==null){if(s!==null){var y=s.next;s.next=u.next,u.next=y}e.baseQueue=s=u,r.pending=null}if(u=t.baseState,s===null)t.memoizedState=u;else{e=s.next;var S=y=null,E=null,L=e,H=!1;do{var X=L.lane&-536870913;if(X!==L.lane?(xt&X)===X:($n&X)===X){var _=L.revertLane;if(_===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),X===xa&&(H=!0);else if(($n&_)===_){L=L.next,_===xa&&(H=!0);continue}else X={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(S=E=X,y=u):E=E.next=X,dt.lanes|=_,li|=_;X=L.action,Yi&&i(u,X),u=L.hasEagerState?L.eagerState:i(u,X)}else _={lane:X,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(S=E=_,y=u):E=E.next=_,dt.lanes|=X,li|=X;L=L.next}while(L!==null&&L!==e);if(E===null?y=u:E.next=S,!Re(u,t.memoizedState)&&(It=!0,H&&(i=va,i!==null)))throw i;t.memoizedState=u,t.baseState=y,t.baseQueue=E,r.lastRenderedState=u}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function cu(t){var e=Ft(),i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=t;var r=i.dispatch,s=i.pending,u=e.memoizedState;if(s!==null){i.pending=null;var y=s=s.next;do u=t(u,y.action),y=y.next;while(y!==s);Re(u,e.memoizedState)||(It=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,r]}function nm(t,e,i){var r=dt,s=Ft(),u=St;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=e();var y=!Re((zt||s).memoizedState,i);if(y&&(s.memoizedState=i,It=!0),s=s.queue,du(rm.bind(null,r,s,t),[t]),s.getSnapshot!==e||y||Wt!==null&&Wt.memoizedState.tag&1){if(r.flags|=2048,Ca(9,{destroy:void 0},am.bind(null,r,s,i,e),null),kt===null)throw Error(l(349));u||($n&127)!==0||im(r,e,i)}return i}function im(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=dt.updateQueue,e===null?(e=dl(),dt.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function am(t,e,i,r){e.value=i,e.getSnapshot=r,om(e)&&lm(t)}function rm(t,e,i){return i(function(){om(e)&&lm(t)})}function om(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Re(t,i)}catch{return!0}}function lm(t){var e=Oi(t,2);e!==null&&Me(e,t,2)}function uu(t){var e=xe();if(typeof t=="function"){var i=t;if(t=i(),Yi){Kn(!0);try{i()}finally{Kn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:t},e}function sm(t,e,i,r){return t.baseState=i,su(t,zt,typeof r=="function"?r:Dn)}function dS(t,e,i,r,s){if(yl(t))throw Error(l(485));if(t=e.action,t!==null){var u={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){u.listeners.push(y)}};Y.T!==null?i(!0):u.isTransition=!1,r(u),i=e.pending,i===null?(u.next=e.pending=u,cm(e,u)):(u.next=i.next,e.pending=i.next=u)}}function cm(t,e){var i=e.action,r=e.payload,s=t.state;if(e.isTransition){var u=Y.T,y={};Y.T=y;try{var S=i(s,r),E=Y.S;E!==null&&E(y,S),um(t,e,S)}catch(L){fu(t,e,L)}finally{u!==null&&y.types!==null&&(u.types=y.types),Y.T=u}}else try{u=i(s,r),um(t,e,u)}catch(L){fu(t,e,L)}}function um(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){fm(t,e,r)},function(r){return fu(t,e,r)}):fm(t,e,i)}function fm(t,e,i){e.status="fulfilled",e.value=i,dm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,cm(t,i)))}function fu(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,dm(e),e=e.next;while(e!==r)}t.action=null}function dm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function hm(t,e){return e}function pm(t,e){if(St){var i=kt.formState;if(i!==null){t:{var r=dt;if(St){if(Nt){e:{for(var s=Nt,u=Pe;s.nodeType!==8;){if(!u){s=null;break e}if(s=Qe(s.nextSibling),s===null){s=null;break e}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Nt=Qe(s.nextSibling),r=s.data==="F!";break t}}Wn(r)}r=!1}r&&(e=i[0])}}return i=xe(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:e},i.queue=r,i=Om.bind(null,dt,r),r.dispatch=i,r=uu(!1),u=yu.bind(null,dt,!1,r.queue),r=xe(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,i=dS.bind(null,dt,s,u,i),s.dispatch=i,r.memoizedState=t,[e,i,!1]}function mm(t){var e=Ft();return gm(e,zt,t)}function gm(t,e,i){if(e=su(t,e,hm)[0],t=pl(Dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Or(e)}catch(y){throw y===ba?al:y}else r=e;e=Ft();var s=e.queue,u=s.dispatch;return i!==e.memoizedState&&(dt.flags|=2048,Ca(9,{destroy:void 0},hS.bind(null,s,i),null)),[r,u,t]}function hS(t,e){t.action=e}function ym(t){var e=Ft(),i=zt;if(i!==null)return gm(e,i,t);Ft(),e=e.memoizedState,i=Ft();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function Ca(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=dt.updateQueue,e===null&&(e=dl(),dt.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function xm(){return Ft().memoizedState}function ml(t,e,i,r){var s=xe();dt.flags|=t,s.memoizedState=Ca(1|e,{destroy:void 0},i,r===void 0?null:r)}function gl(t,e,i,r){var s=Ft();r=r===void 0?null:r;var u=s.memoizedState.inst;zt!==null&&r!==null&&nu(r,zt.memoizedState.deps)?s.memoizedState=Ca(e,u,i,r):(dt.flags|=t,s.memoizedState=Ca(1|e,u,i,r))}function vm(t,e){ml(8390656,8,t,e)}function du(t,e){gl(2048,8,t,e)}function pS(t){dt.flags|=4;var e=dt.updateQueue;if(e===null)e=dl(),dt.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function bm(t){var e=Ft().memoizedState;return pS({ref:e,nextImpl:t}),function(){if((At&2)!==0)throw Error(l(440));return e.impl.apply(void 0,arguments)}}function Sm(t,e){return gl(4,2,t,e)}function wm(t,e){return gl(4,4,t,e)}function Tm(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jm(t,e,i){i=i!=null?i.concat([t]):null,gl(4,4,Tm.bind(null,e,t),i)}function hu(){}function Cm(t,e){var i=Ft();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&nu(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function Em(t,e){var i=Ft();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&nu(e,r[1]))return r[0];if(r=t(),Yi){Kn(!0);try{t()}finally{Kn(!1)}}return i.memoizedState=[r,e],r}function pu(t,e,i){return i===void 0||($n&1073741824)!==0&&(xt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=A0(),dt.lanes|=t,li|=t,i)}function Am(t,e,i,r){return Re(i,e)?i:wa.current!==null?(t=pu(t,i,r),Re(t,e)||(It=!0),t):($n&42)===0||($n&1073741824)!==0&&(xt&261930)===0?(It=!0,t.memoizedState=i):(t=A0(),dt.lanes|=t,li|=t,e)}function Mm(t,e,i,r,s){var u=Z.p;Z.p=u!==0&&8>u?u:8;var y=Y.T,S={};Y.T=S,yu(t,!1,e,i);try{var E=s(),L=Y.S;if(L!==null&&L(S,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var H=cS(E,r);kr(t,e,H,_e(t))}else kr(t,e,r,_e(t))}catch(X){kr(t,e,{then:function(){},status:"rejected",reason:X},_e())}finally{Z.p=u,y!==null&&S.types!==null&&(y.types=S.types),Y.T=y}}function mS(){}function mu(t,e,i,r){if(t.tag!==5)throw Error(l(476));var s=$m(t).queue;Mm(t,s,e,it,i===null?mS:function(){return Dm(t),i(r)})}function $m(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:it},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Dm(t){var e=$m(t);e.next===null&&(e=t.alternate.memoizedState),kr(t,e.next.queue,{},_e())}function gu(){return ue(Jr)}function zm(){return Ft().memoizedState}function Rm(){return Ft().memoizedState}function gS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=_e();t=ei(i);var r=ni(e,t,i);r!==null&&(Me(r,e,i),$r(r,e,i)),e={cache:Xc()},t.payload=e;return}e=e.return}}function yS(t,e,i){var r=_e();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},yl(t)?km(e,i):(i=kc(t,e,i,r),i!==null&&(Me(i,t,r),Bm(i,e,r)))}function Om(t,e,i){var r=_e();kr(t,e,i,r)}function kr(t,e,i,r){var s={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(yl(t))km(e,s);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var y=e.lastRenderedState,S=u(y,i);if(s.hasEagerState=!0,s.eagerState=S,Re(S,y))return Jo(t,e,s,0),kt===null&&Fo(),!1}catch{}if(i=kc(t,e,s,r),i!==null)return Me(i,t,r),Bm(i,e,r),!0}return!1}function yu(t,e,i,r){if(r={lane:2,revertLane:Zu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yl(t)){if(e)throw Error(l(479))}else e=kc(t,i,r,2),e!==null&&Me(e,t,2)}function yl(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function km(t,e){Ta=ul=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Bm(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Uh(t,i)}}var Br={readContext:ue,use:hl,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};Br.useEffectEvent=qt;var Nm={readContext:ue,use:hl,useCallback:function(t,e){return xe().memoizedState=[t,e===void 0?null:e],t},useContext:ue,useEffect:vm,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,ml(4194308,4,Tm.bind(null,e,t),i)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){ml(4,2,t,e)},useMemo:function(t,e){var i=xe();e=e===void 0?null:e;var r=t();if(Yi){Kn(!0);try{t()}finally{Kn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=xe();if(i!==void 0){var s=i(e);if(Yi){Kn(!0);try{i(e)}finally{Kn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=yS.bind(null,dt,t),[r.memoizedState,t]},useRef:function(t){var e=xe();return t={current:t},e.memoizedState=t},useState:function(t){t=uu(t);var e=t.queue,i=Om.bind(null,dt,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:hu,useDeferredValue:function(t,e){var i=xe();return pu(i,t,e)},useTransition:function(){var t=uu(!1);return t=Mm.bind(null,dt,t.queue,!0,!1),xe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=dt,s=xe();if(St){if(i===void 0)throw Error(l(407));i=i()}else{if(i=e(),kt===null)throw Error(l(349));(xt&127)!==0||im(r,e,i)}s.memoizedState=i;var u={value:i,getSnapshot:e};return s.queue=u,vm(rm.bind(null,r,u,t),[t]),r.flags|=2048,Ca(9,{destroy:void 0},am.bind(null,r,u,i,e),null),i},useId:function(){var t=xe(),e=kt.identifierPrefix;if(St){var i=mn,r=pn;i=(r&~(1<<32-ze(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=fl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=uS++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:gu,useFormState:pm,useActionState:pm,useOptimistic:function(t){var e=xe();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=yu.bind(null,dt,!0,i),i.dispatch=e,[t,e]},useMemoCache:lu,useCacheRefresh:function(){return xe().memoizedState=gS.bind(null,dt)},useEffectEvent:function(t){var e=xe(),i={impl:t};return e.memoizedState=i,function(){if((At&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},xu={readContext:ue,use:hl,useCallback:Cm,useContext:ue,useEffect:du,useImperativeHandle:jm,useInsertionEffect:Sm,useLayoutEffect:wm,useMemo:Em,useReducer:pl,useRef:xm,useState:function(){return pl(Dn)},useDebugValue:hu,useDeferredValue:function(t,e){var i=Ft();return Am(i,zt.memoizedState,t,e)},useTransition:function(){var t=pl(Dn)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Or(t),e]},useSyncExternalStore:nm,useId:zm,useHostTransitionStatus:gu,useFormState:mm,useActionState:mm,useOptimistic:function(t,e){var i=Ft();return sm(i,zt,t,e)},useMemoCache:lu,useCacheRefresh:Rm};xu.useEffectEvent=bm;var Lm={readContext:ue,use:hl,useCallback:Cm,useContext:ue,useEffect:du,useImperativeHandle:jm,useInsertionEffect:Sm,useLayoutEffect:wm,useMemo:Em,useReducer:cu,useRef:xm,useState:function(){return cu(Dn)},useDebugValue:hu,useDeferredValue:function(t,e){var i=Ft();return zt===null?pu(i,t,e):Am(i,zt.memoizedState,t,e)},useTransition:function(){var t=cu(Dn)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Or(t),e]},useSyncExternalStore:nm,useId:zm,useHostTransitionStatus:gu,useFormState:ym,useActionState:ym,useOptimistic:function(t,e){var i=Ft();return zt!==null?sm(i,zt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:lu,useCacheRefresh:Rm};Lm.useEffectEvent=bm;function vu(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:x({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var bu={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=_e(),s=ei(r);s.payload=e,i!=null&&(s.callback=i),e=ni(t,s,r),e!==null&&(Me(e,t,r),$r(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=_e(),s=ei(r);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=ni(t,s,r),e!==null&&(Me(e,t,r),$r(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=_e(),r=ei(i);r.tag=2,e!=null&&(r.callback=e),e=ni(t,r,i),e!==null&&(Me(e,t,i),$r(e,t,i))}};function _m(t,e,i,r,s,u,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,y):e.prototype&&e.prototype.isPureReactComponent?!Sr(i,r)||!Sr(s,u):!0}function Vm(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function Gi(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=x({},i));for(var s in t)i[s]===void 0&&(i[s]=t[s])}return i}function Um(t){Zo(t)}function Hm(t){console.error(t)}function Ym(t){Zo(t)}function xl(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Gm(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Su(t,e,i){return i=ei(i),i.tag=3,i.payload={element:null},i.callback=function(){xl(t,e)},i}function qm(t){return t=ei(t),t.tag=3,t}function Xm(t,e,i,r){var s=i.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;t.payload=function(){return s(u)},t.callback=function(){Gm(e,i,r)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Gm(e,i,r),typeof s!="function"&&(si===null?si=new Set([this]):si.add(this));var S=r.stack;this.componentDidCatch(r.value,{componentStack:S!==null?S:""})})}function xS(t,e,i,r,s){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&ya(e,i,s,!0),i=ke.current,i!==null){switch(i.tag){case 31:case 13:return Ke===null?Dl():i.alternate===null&&Xt===0&&(Xt=3),i.flags&=-257,i.flags|=65536,i.lanes=s,r===rl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),Pu(t,r,s)),!1;case 22:return i.flags|=65536,r===rl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),Pu(t,r,s)),!1}throw Error(l(435,i.tag))}return Pu(t,r,s),Dl(),!1}if(St)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==Uc&&(t=Error(l(422),{cause:r}),jr(Ge(t,i)))):(r!==Uc&&(e=Error(l(423),{cause:r}),jr(Ge(e,i))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=Ge(r,i),s=Su(t.stateNode,r,s),Jc(t,s),Xt!==4&&(Xt=2)),!1;var u=Error(l(520),{cause:r});if(u=Ge(u,i),Gr===null?Gr=[u]:Gr.push(u),Xt!==4&&(Xt=2),e===null)return!0;r=Ge(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=s&-s,i.lanes|=t,t=Su(i.stateNode,r,t),Jc(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(si===null||!si.has(u))))return i.flags|=65536,s&=-s,i.lanes|=s,s=qm(s),Xm(s,t,i,r),Jc(i,s),!1}i=i.return}while(i!==null);return!1}var wu=Error(l(461)),It=!1;function fe(t,e,i,r){e.child=t===null?Zp(e,null,i,r):Hi(e,t.child,i,r)}function Pm(t,e,i,r,s){i=i.render;var u=e.ref;if("ref"in r){var y={};for(var S in r)S!=="ref"&&(y[S]=r[S])}else y=r;return Li(e),r=iu(t,e,i,y,u,s),S=au(),t!==null&&!It?(ru(t,e,s),zn(t,e,s)):(St&&S&&_c(e),e.flags|=1,fe(t,e,r,s),e.child)}function Km(t,e,i,r,s){if(t===null){var u=i.type;return typeof u=="function"&&!Bc(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Qm(t,e,u,r,s)):(t=Io(i.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Du(t,s)){var y=u.memoizedProps;if(i=i.compare,i=i!==null?i:Sr,i(y,r)&&t.ref===e.ref)return zn(t,e,s)}return e.flags|=1,t=Cn(u,r),t.ref=e.ref,t.return=e,e.child=t}function Qm(t,e,i,r,s){if(t!==null){var u=t.memoizedProps;if(Sr(u,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=u,Du(t,s))(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,zn(t,e,s)}return Tu(t,e,i,r,s)}function Zm(t,e,i,r){var s=r.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(r=e.child=t.child,s=0;r!==null;)s=s|r.lanes|r.childLanes,r=r.sibling;r=s&~u}else r=0,e.child=null;return Fm(t,e,u,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(e,u!==null?u.cachePool:null),u!==null?Wp(e,u):Ic(),Ip(e);else return r=e.lanes=536870912,Fm(t,e,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(il(e,u.cachePool),Wp(e,u),ai(),e.memoizedState=null):(t!==null&&il(e,null),Ic(),ai());return fe(t,e,s,i),e.child}function Nr(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Fm(t,e,i,r,s){var u=Kc();return u=u===null?null:{parent:Jt._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&il(e,null),Ic(),Ip(e),t!==null&&ya(t,e,r,!0),e.childLanes=s,null}function vl(t,e){return e=Sl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Jm(t,e,i){return Hi(e,t.child,null,i),t=vl(e,e.pendingProps),t.flags|=2,Be(e),e.memoizedState=null,t}function vS(t,e,i){var r=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(St){if(r.mode==="hidden")return t=vl(e,r),e.lanes=536870912,Nr(null,t);if(eu(e),(t=Nt)?(t=cg(t,Pe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fn!==null?{id:pn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},i=kp(t),i.return=e,e.child=i,ce=e,Nt=null)):t=null,t===null)throw Wn(e);return e.lanes=536870912,null}return vl(e,r)}var u=t.memoizedState;if(u!==null){var y=u.dehydrated;if(eu(e),s)if(e.flags&256)e.flags&=-257,e=Jm(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(l(558));else if(It||ya(t,e,i,!1),s=(i&t.childLanes)!==0,It||s){if(r=kt,r!==null&&(y=Hh(r,i),y!==0&&y!==u.retryLane))throw u.retryLane=y,Oi(t,y),Me(r,t,y),wu;Dl(),e=Jm(t,e,i)}else t=u.treeContext,Nt=Qe(y.nextSibling),ce=e,St=!0,Jn=null,Pe=!1,t!==null&&Lp(e,t),e=vl(e,r),e.flags|=4096;return e}return t=Cn(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function bl(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Tu(t,e,i,r,s){return Li(e),i=iu(t,e,i,r,void 0,s),r=au(),t!==null&&!It?(ru(t,e,s),zn(t,e,s)):(St&&r&&_c(e),e.flags|=1,fe(t,e,i,s),e.child)}function Wm(t,e,i,r,s,u){return Li(e),e.updateQueue=null,i=em(e,r,i,s),tm(t),r=au(),t!==null&&!It?(ru(t,e,u),zn(t,e,u)):(St&&r&&_c(e),e.flags|=1,fe(t,e,i,u),e.child)}function Im(t,e,i,r,s){if(Li(e),e.stateNode===null){var u=ha,y=i.contextType;typeof y=="object"&&y!==null&&(u=ue(y)),u=new i(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=bu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},Zc(e),y=i.contextType,u.context=typeof y=="object"&&y!==null?ue(y):ha,u.state=e.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(vu(e,i,y,r),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(y=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),y!==u.state&&bu.enqueueReplaceState(u,u.state,null),zr(e,r,u,s),Dr(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var S=e.memoizedProps,E=Gi(i,S);u.props=E;var L=u.context,H=i.contextType;y=ha,typeof H=="object"&&H!==null&&(y=ue(H));var X=i.getDerivedStateFromProps;H=typeof X=="function"||typeof u.getSnapshotBeforeUpdate=="function",S=e.pendingProps!==S,H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S||L!==y)&&Vm(e,u,r,y),ti=!1;var _=e.memoizedState;u.state=_,zr(e,r,u,s),Dr(),L=e.memoizedState,S||_!==L||ti?(typeof X=="function"&&(vu(e,i,X,r),L=e.memoizedState),(E=ti||_m(e,i,E,r,_,L,y))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=L),u.props=r,u.state=L,u.context=y,r=E):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,Fc(t,e),y=e.memoizedProps,H=Gi(i,y),u.props=H,X=e.pendingProps,_=u.context,L=i.contextType,E=ha,typeof L=="object"&&L!==null&&(E=ue(L)),S=i.getDerivedStateFromProps,(L=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y!==X||_!==E)&&Vm(e,u,r,E),ti=!1,_=e.memoizedState,u.state=_,zr(e,r,u,s),Dr();var V=e.memoizedState;y!==X||_!==V||ti||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof S=="function"&&(vu(e,i,S,r),V=e.memoizedState),(H=ti||_m(e,i,H,r,_,V,E)||t!==null&&t.dependencies!==null&&el(t.dependencies))?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,V,E),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,V,E)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=V),u.props=r,u.state=V,u.context=E,r=H):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,bl(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Hi(e,t.child,null,s),e.child=Hi(e,null,i,s)):fe(t,e,i,s),e.memoizedState=u.state,t=e.child):t=zn(t,e,s),t}function t0(t,e,i,r){return Bi(),e.flags|=256,fe(t,e,i,r),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(t){return{baseLanes:t,cachePool:Gp()}}function Eu(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Le),t}function e0(t,e,i){var r=e.pendingProps,s=!1,u=(e.flags&128)!==0,y;if((y=u)||(y=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),y&&(s=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(s?ii(e):ai(),(t=Nt)?(t=cg(t,Pe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fn!==null?{id:pn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},i=kp(t),i.return=e,e.child=i,ce=e,Nt=null)):t=null,t===null)throw Wn(e);return cf(t)?e.lanes=32:e.lanes=536870912,null}var S=r.children;return r=r.fallback,s?(ai(),s=e.mode,S=Sl({mode:"hidden",children:S},s),r=ki(r,s,i,null),S.return=e,r.return=e,S.sibling=r,e.child=S,r=e.child,r.memoizedState=Cu(i),r.childLanes=Eu(t,y,i),e.memoizedState=ju,Nr(null,r)):(ii(e),Au(e,S))}var E=t.memoizedState;if(E!==null&&(S=E.dehydrated,S!==null)){if(u)e.flags&256?(ii(e),e.flags&=-257,e=Mu(t,e,i)):e.memoizedState!==null?(ai(),e.child=t.child,e.flags|=128,e=null):(ai(),S=r.fallback,s=e.mode,r=Sl({mode:"visible",children:r.children},s),S=ki(S,s,i,null),S.flags|=2,r.return=e,S.return=e,r.sibling=S,e.child=r,Hi(e,t.child,null,i),r=e.child,r.memoizedState=Cu(i),r.childLanes=Eu(t,y,i),e.memoizedState=ju,e=Nr(null,r));else if(ii(e),cf(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var L=y.dgst;y=L,r=Error(l(419)),r.stack="",r.digest=y,jr({value:r,source:null,stack:null}),e=Mu(t,e,i)}else if(It||ya(t,e,i,!1),y=(i&t.childLanes)!==0,It||y){if(y=kt,y!==null&&(r=Hh(y,i),r!==0&&r!==E.retryLane))throw E.retryLane=r,Oi(t,r),Me(y,t,r),wu;sf(S)||Dl(),e=Mu(t,e,i)}else sf(S)?(e.flags|=192,e.child=t.child,e=null):(t=E.treeContext,Nt=Qe(S.nextSibling),ce=e,St=!0,Jn=null,Pe=!1,t!==null&&Lp(e,t),e=Au(e,r.children),e.flags|=4096);return e}return s?(ai(),S=r.fallback,s=e.mode,E=t.child,L=E.sibling,r=Cn(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,L!==null?S=Cn(L,S):(S=ki(S,s,i,null),S.flags|=2),S.return=e,r.return=e,r.sibling=S,e.child=r,Nr(null,r),r=e.child,S=t.child.memoizedState,S===null?S=Cu(i):(s=S.cachePool,s!==null?(E=Jt._currentValue,s=s.parent!==E?{parent:E,pool:E}:s):s=Gp(),S={baseLanes:S.baseLanes|i,cachePool:s}),r.memoizedState=S,r.childLanes=Eu(t,y,i),e.memoizedState=ju,Nr(t.child,r)):(ii(e),i=t.child,t=i.sibling,i=Cn(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=i,e.memoizedState=null,i)}function Au(t,e){return e=Sl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Sl(t,e){return t=Oe(22,t,null,e),t.lanes=0,t}function Mu(t,e,i){return Hi(e,t.child,null,i),t=Au(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n0(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gc(t.return,e,i)}function $u(t,e,i,r,s,u){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:s,treeForkCount:u}:(y.isBackwards=e,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=i,y.tailMode=s,y.treeForkCount=u)}function i0(t,e,i){var r=e.pendingProps,s=r.revealOrder,u=r.tail;r=r.children;var y=Zt.current,S=(y&2)!==0;if(S?(y=y&1|2,e.flags|=128):y&=1,W(Zt,y),fe(t,e,r,i),r=St?Tr:0,!S&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n0(t,i,e);else if(t.tag===19)n0(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(i=e.child,s=null;i!==null;)t=i.alternate,t!==null&&cl(t)===null&&(s=i),i=i.sibling;i=s,i===null?(s=e.child,e.child=null):(s=i.sibling,i.sibling=null),$u(e,!1,s,i,u,r);break;case"backwards":case"unstable_legacy-backwards":for(i=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cl(t)===null){e.child=s;break}t=s.sibling,s.sibling=i,i=s,s=t}$u(e,!0,i,null,u,r);break;case"together":$u(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function zn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(ya(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,i=Cn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=Cn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Du(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function bS(t,e,i){switch(e.tag){case 3:Qt(e,e.stateNode.containerInfo),In(e,Jt,t.memoizedState.cache),Bi();break;case 27:case 5:bn(e);break;case 4:Qt(e,e.stateNode.containerInfo);break;case 10:In(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,eu(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(ii(e),e.flags|=128,null):(i&e.child.childLanes)!==0?e0(t,e,i):(ii(e),t=zn(t,e,i),t!==null?t.sibling:null);ii(e);break;case 19:var s=(t.flags&128)!==0;if(r=(i&e.childLanes)!==0,r||(ya(t,e,i,!1),r=(i&e.childLanes)!==0),s){if(r)return i0(t,e,i);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(Zt,Zt.current),r)break;return null;case 22:return e.lanes=0,Zm(t,e,i,e.pendingProps);case 24:In(e,Jt,t.memoizedState.cache)}return zn(t,e,i)}function a0(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)It=!0;else{if(!Du(t,i)&&(e.flags&128)===0)return It=!1,bS(t,e,i);It=(t.flags&131072)!==0}else It=!1,St&&(e.flags&1048576)!==0&&Np(e,Tr,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Vi(e.elementType),e.type=t,typeof t=="function")Bc(t)?(r=Gi(t,r),e.tag=1,e=Im(null,e,t,r,i)):(e.tag=0,e=Tu(null,e,t,r,i));else{if(t!=null){var s=t.$$typeof;if(s===K){e.tag=11,e=Pm(null,e,t,r,i);break t}else if(s===U){e.tag=14,e=Km(null,e,t,r,i);break t}}throw e=Se(t)||t,Error(l(306,e,""))}}return e;case 0:return Tu(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,s=Gi(r,e.pendingProps),Im(t,e,r,s,i);case 3:t:{if(Qt(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var u=e.memoizedState;s=u.element,Fc(t,e),zr(e,r,null,i);var y=e.memoizedState;if(r=y.cache,In(e,Jt,r),r!==u.cache&&qc(e,[Jt],i,!0),Dr(),r=y.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=t0(t,e,r,i);break t}else if(r!==s){s=Ge(Error(l(424)),e),jr(s),e=t0(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Nt=Qe(t.firstChild),ce=e,St=!0,Jn=null,Pe=!0,i=Zp(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Bi(),r===s){e=zn(t,e,i);break t}fe(t,e,r,i)}e=e.child}return e;case 26:return bl(t,e),t===null?(i=mg(e.type,null,e.pendingProps,null))?e.memoizedState=i:St||(i=e.type,t=e.pendingProps,r=Ll(ut.current).createElement(i),r[se]=e,r[we]=t,de(r,i,t),oe(r),e.stateNode=r):e.memoizedState=mg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return bn(e),t===null&&St&&(r=e.stateNode=dg(e.type,e.pendingProps,ut.current),ce=e,Pe=!0,s=Nt,di(e.type)?(uf=s,Nt=Qe(r.firstChild)):Nt=s),fe(t,e,e.pendingProps.children,i),bl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((s=r=Nt)&&(r=FS(r,e.type,e.pendingProps,Pe),r!==null?(e.stateNode=r,ce=e,Nt=Qe(r.firstChild),Pe=!1,s=!0):s=!1),s||Wn(e)),bn(e),s=e.type,u=e.pendingProps,y=t!==null?t.memoizedProps:null,r=u.children,rf(s,u)?r=null:y!==null&&rf(s,y)&&(e.flags|=32),e.memoizedState!==null&&(s=iu(t,e,fS,null,null,i),Jr._currentValue=s),bl(t,e),fe(t,e,r,i),e.child;case 6:return t===null&&St&&((t=i=Nt)&&(i=JS(i,e.pendingProps,Pe),i!==null?(e.stateNode=i,ce=e,Nt=null,t=!0):t=!1),t||Wn(e)),null;case 13:return e0(t,e,i);case 4:return Qt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hi(e,null,r,i):fe(t,e,r,i),e.child;case 11:return Pm(t,e,e.type,e.pendingProps,i);case 7:return fe(t,e,e.pendingProps,i),e.child;case 8:return fe(t,e,e.pendingProps.children,i),e.child;case 12:return fe(t,e,e.pendingProps.children,i),e.child;case 10:return r=e.pendingProps,In(e,e.type,r.value),fe(t,e,r.children,i),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,Li(e),s=ue(s),r=r(s),e.flags|=1,fe(t,e,r,i),e.child;case 14:return Km(t,e,e.type,e.pendingProps,i);case 15:return Qm(t,e,e.type,e.pendingProps,i);case 19:return i0(t,e,i);case 31:return vS(t,e,i);case 22:return Zm(t,e,i,e.pendingProps);case 24:return Li(e),r=ue(Jt),t===null?(s=Kc(),s===null&&(s=kt,u=Xc(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=i),s=u),e.memoizedState={parent:r,cache:s},Zc(e),In(e,Jt,s)):((t.lanes&i)!==0&&(Fc(t,e),zr(e,null,null,i),Dr()),s=t.memoizedState,u=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),In(e,Jt,r)):(r=u.cache,In(e,Jt,r),r!==s.cache&&qc(e,[Jt],i,!0))),fe(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function Rn(t){t.flags|=4}function zu(t,e,i,r,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(z0())t.flags|=8192;else throw Ui=rl,Qc}else t.flags&=-16777217}function r0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bg(e))if(z0())t.flags|=8192;else throw Ui=rl,Qc}function wl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?_h():536870912,t.lanes|=e,$a|=e)}function Lr(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var s=t.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function SS(t,e,i){var r=e.pendingProps;switch(Vc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Lt(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Mn(Jt),Et(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ga(e)?Rn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hc())),Lt(e),null;case 26:var s=e.type,u=e.memoizedState;return t===null?(Rn(e),u!==null?(Lt(e),r0(e,u)):(Lt(e),zu(e,s,null,r,i))):u?u!==t.memoizedState?(Rn(e),Lt(e),r0(e,u)):(Lt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Rn(e),Lt(e),zu(e,s,t,r,i)),null;case 27:if(Sn(e),i=ut.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Rn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Lt(e),null}t=et.current,ga(e)?_p(e):(t=dg(s,r,i),e.stateNode=t,Rn(e))}return Lt(e),null;case 5:if(Sn(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Rn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Lt(e),null}if(u=et.current,ga(e))_p(e);else{var y=Ll(ut.current);switch(u){case 1:u=y.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=y.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=y.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=y.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=y.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?y.createElement(s,{is:r.is}):y.createElement(s)}}u[se]=e,u[we]=r;t:for(y=e.child;y!==null;){if(y.tag===5||y.tag===6)u.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break t;for(;y.sibling===null;){if(y.return===null||y.return===e)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}e.stateNode=u;t:switch(de(u,s,r),s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Rn(e)}}return Lt(e),zu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Rn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=ut.current,ga(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,s=ce,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[se]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||eg(t.nodeValue,i)),t||Wn(e,!0)}else t=Ll(t).createTextNode(r),t[se]=e,e.stateNode=t}return Lt(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=ga(e),i!==null){if(t===null){if(!r)throw Error(l(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[se]=e}else Bi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),t=!1}else i=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Be(e),e):(Be(e),null);if((e.flags&128)!==0)throw Error(l(558))}return Lt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[se]=e}else Bi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else s=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Be(e),e):(Be(e),null)}return Be(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),wl(e,e.updateQueue),Lt(e),null);case 4:return Et(),t===null&&Iu(e.stateNode.containerInfo),Lt(e),null;case 10:return Mn(e.type),Lt(e),null;case 19:if(G(Zt),r=e.memoizedState,r===null)return Lt(e),null;if(s=(e.flags&128)!==0,u=r.rendering,u===null)if(s)Lr(r,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=cl(t),u!==null){for(e.flags|=128,Lr(r,!1),t=u.updateQueue,e.updateQueue=t,wl(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Op(i,t),i=i.sibling;return W(Zt,Zt.current&1|2),St&&En(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&$e()>Al&&(e.flags|=128,s=!0,Lr(r,!1),e.lanes=4194304)}else{if(!s)if(t=cl(u),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,wl(e,t),Lr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!St)return Lt(e),null}else 2*$e()-r.renderingStartTime>Al&&i!==536870912&&(e.flags|=128,s=!0,Lr(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=$e(),t.sibling=null,i=Zt.current,W(Zt,s?i&1|2:i&1),St&&En(e,r.treeForkCount),t):(Lt(e),null);case 22:case 23:return Be(e),tu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),i=e.updateQueue,i!==null&&wl(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&G(_i),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Mn(Jt),Lt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function wS(t,e){switch(Vc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mn(Jt),Et(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Sn(e),null;case 31:if(e.memoizedState!==null){if(Be(e),e.alternate===null)throw Error(l(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Be(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Zt),null;case 4:return Et(),null;case 10:return Mn(e.type),null;case 22:case 23:return Be(e),tu(),t!==null&&G(_i),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Mn(Jt),null;case 25:return null;default:return null}}function o0(t,e){switch(Vc(e),e.tag){case 3:Mn(Jt),Et();break;case 26:case 27:case 5:Sn(e);break;case 4:Et();break;case 31:e.memoizedState!==null&&Be(e);break;case 13:Be(e);break;case 19:G(Zt);break;case 10:Mn(e.type);break;case 22:case 23:Be(e),tu(),t!==null&&G(_i);break;case 24:Mn(Jt)}}function _r(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&t)===t){r=void 0;var u=i.create,y=i.inst;r=u(),y.destroy=r}i=i.next}while(i!==s)}}catch(S){Dt(e,e.return,S)}}function ri(t,e,i){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){var y=r.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,s=e;var E=i,L=S;try{L()}catch(H){Dt(s,E,H)}}}r=r.next}while(r!==u)}}catch(H){Dt(e,e.return,H)}}function l0(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Jp(e,i)}catch(r){Dt(t,t.return,r)}}}function s0(t,e,i){i.props=Gi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Dt(t,e,r)}}function Vr(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(s){Dt(t,e,s)}}function gn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(s){Dt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(s){Dt(t,e,s)}else i.current=null}function c0(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(s){Dt(t,t.return,s)}}function Ru(t,e,i){try{var r=t.stateNode;qS(r,t.type,i,e),r[we]=e}catch(s){Dt(t,t.return,s)}}function u0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&di(t.type)||t.tag===4}function Ou(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&di(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Tn));else if(r!==4&&(r===27&&di(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(ku(t,e,i),t=t.sibling;t!==null;)ku(t,e,i),t=t.sibling}function Tl(t,e,i){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(r!==4&&(r===27&&di(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Tl(t,e,i),t=t.sibling;t!==null;)Tl(t,e,i),t=t.sibling}function f0(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);de(e,r,i),e[se]=t,e[we]=i}catch(u){Dt(t,t.return,u)}}var On=!1,te=!1,Bu=!1,d0=typeof WeakSet=="function"?WeakSet:Set,le=null;function TS(t,e){if(t=t.containerInfo,nf=ql,t=jp(t),Mc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var y=0,S=-1,E=-1,L=0,H=0,X=t,_=null;e:for(;;){for(var V;X!==i||s!==0&&X.nodeType!==3||(S=y+s),X!==u||r!==0&&X.nodeType!==3||(E=y+r),X.nodeType===3&&(y+=X.nodeValue.length),(V=X.firstChild)!==null;)_=X,X=V;for(;;){if(X===t)break e;if(_===i&&++L===s&&(S=y),_===u&&++H===r&&(E=y),(V=X.nextSibling)!==null)break;X=_,_=X.parentNode}X=V}i=S===-1||E===-1?null:{start:S,end:E}}else i=null}i=i||{start:0,end:0}}else i=null;for(af={focusedElem:t,selectionRange:i},ql=!1,le=e;le!==null;)if(e=le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,le=t;else for(;le!==null;){switch(e=le,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)s=t[i],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,s=u.memoizedProps,u=u.memoizedState,r=i.stateNode;try{var nt=Gi(i.type,s);t=r.getSnapshotBeforeUpdate(nt,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Dt(i,i.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)lf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function h0(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Bn(t,i),r&4&&_r(5,i);break;case 1:if(Bn(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(y){Dt(i,i.return,y)}else{var s=Gi(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Dt(i,i.return,y)}}r&64&&l0(i),r&512&&Vr(i,i.return);break;case 3:if(Bn(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Jp(t,e)}catch(y){Dt(i,i.return,y)}}break;case 27:e===null&&r&4&&f0(i);case 26:case 5:Bn(t,i),e===null&&r&4&&c0(i),r&512&&Vr(i,i.return);break;case 12:Bn(t,i);break;case 31:Bn(t,i),r&4&&g0(t,i);break;case 13:Bn(t,i),r&4&&y0(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=RS.bind(null,i),WS(t,i))));break;case 22:if(r=i.memoizedState!==null||On,!r){e=e!==null&&e.memoizedState!==null||te,s=On;var u=te;On=r,(te=e)&&!u?Nn(t,i,(i.subtreeFlags&8772)!==0):Bn(t,i),On=s,te=u}break;case 30:break;default:Bn(t,i)}}function p0(t){var e=t.alternate;e!==null&&(t.alternate=null,p0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&fc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,je=!1;function kn(t,e,i){for(i=i.child;i!==null;)m0(t,e,i),i=i.sibling}function m0(t,e,i){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(cr,i)}catch{}switch(i.tag){case 26:te||gn(i,e),kn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:te||gn(i,e);var r=Ut,s=je;di(i.type)&&(Ut=i.stateNode,je=!1),kn(t,e,i),Qr(i.stateNode),Ut=r,je=s;break;case 5:te||gn(i,e);case 6:if(r=Ut,s=je,Ut=null,kn(t,e,i),Ut=r,je=s,Ut!==null)if(je)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(i.stateNode)}catch(u){Dt(i,e,u)}else try{Ut.removeChild(i.stateNode)}catch(u){Dt(i,e,u)}break;case 18:Ut!==null&&(je?(t=Ut,lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),La(t)):lg(Ut,i.stateNode));break;case 4:r=Ut,s=je,Ut=i.stateNode.containerInfo,je=!0,kn(t,e,i),Ut=r,je=s;break;case 0:case 11:case 14:case 15:ri(2,i,e),te||ri(4,i,e),kn(t,e,i);break;case 1:te||(gn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&s0(i,e,r)),kn(t,e,i);break;case 21:kn(t,e,i);break;case 22:te=(r=te)||i.memoizedState!==null,kn(t,e,i),te=r;break;default:kn(t,e,i)}}function g0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{La(t)}catch(i){Dt(e,e.return,i)}}}function y0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{La(t)}catch(i){Dt(e,e.return,i)}}function jS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new d0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new d0),e;default:throw Error(l(435,t.tag))}}function jl(t,e){var i=jS(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var s=OS.bind(null,t,r);r.then(s,s)}})}function Ce(t,e){var i=e.deletions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r],u=t,y=e,S=y;t:for(;S!==null;){switch(S.tag){case 27:if(di(S.type)){Ut=S.stateNode,je=!1;break t}break;case 5:Ut=S.stateNode,je=!1;break t;case 3:case 4:Ut=S.stateNode.containerInfo,je=!0;break t}S=S.return}if(Ut===null)throw Error(l(160));m0(u,y,s),Ut=null,je=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}var on=null;function x0(t,e){var i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ce(e,t),Ee(t),r&4&&(ri(3,t,t.return),_r(3,t),ri(5,t,t.return));break;case 1:Ce(e,t),Ee(t),r&512&&(te||i===null||gn(i,i.return)),r&64&&On&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var s=on;if(Ce(e,t),Ee(t),r&512&&(te||i===null||gn(i,i.return)),r&4){var u=i!==null?i.memoizedState:null;if(r=t.memoizedState,i===null)if(r===null)if(t.stateNode===null){t:{r=t.type,i=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[dr]||u[se]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),de(u,r,i),u[se]=t,oe(u),r=u;break t;case"link":var y=xg("link","href",s).get(r+(i.href||""));if(y){for(var S=0;S<y.length;S++)if(u=y[S],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(S,1);break e}}u=s.createElement(r),de(u,r,i),s.head.appendChild(u);break;case"meta":if(y=xg("meta","content",s).get(r+(i.content||""))){for(S=0;S<y.length;S++)if(u=y[S],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(S,1);break e}}u=s.createElement(r),de(u,r,i),s.head.appendChild(u);break;default:throw Error(l(468,r))}u[se]=t,oe(u),r=u}t.stateNode=r}else vg(s,t.type,t.stateNode);else t.stateNode=yg(s,r,t.memoizedProps);else u!==r?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,r===null?vg(s,t.type,t.stateNode):yg(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ru(t,t.memoizedProps,i.memoizedProps)}break;case 27:Ce(e,t),Ee(t),r&512&&(te||i===null||gn(i,i.return)),i!==null&&r&4&&Ru(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Ce(e,t),Ee(t),r&512&&(te||i===null||gn(i,i.return)),t.flags&32){s=t.stateNode;try{oa(s,"")}catch(nt){Dt(t,t.return,nt)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,Ru(t,s,i!==null?i.memoizedProps:s)),r&1024&&(Bu=!0);break;case 6:if(Ce(e,t),Ee(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,i=t.stateNode;try{i.nodeValue=r}catch(nt){Dt(t,t.return,nt)}}break;case 3:if(Ul=null,s=on,on=_l(e.containerInfo),Ce(e,t),on=s,Ee(t),r&4&&i!==null&&i.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(nt){Dt(t,t.return,nt)}Bu&&(Bu=!1,v0(t));break;case 4:r=on,on=_l(t.stateNode.containerInfo),Ce(e,t),Ee(t),on=r;break;case 12:Ce(e,t),Ee(t);break;case 31:Ce(e,t),Ee(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,jl(t,r)));break;case 13:Ce(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(El=$e()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,jl(t,r)));break;case 22:s=t.memoizedState!==null;var E=i!==null&&i.memoizedState!==null,L=On,H=te;if(On=L||s,te=H||E,Ce(e,t),te=H,On=L,Ee(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(i===null||E||On||te||qi(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){E=i=e;try{if(u=E.stateNode,s)y=u.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=E.stateNode;var X=E.memoizedProps.style,_=X!=null&&X.hasOwnProperty("display")?X.display:null;S.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(nt){Dt(E,E.return,nt)}}}else if(e.tag===6){if(i===null){E=e;try{E.stateNode.nodeValue=s?"":E.memoizedProps}catch(nt){Dt(E,E.return,nt)}}}else if(e.tag===18){if(i===null){E=e;try{var V=E.stateNode;s?sg(V,!0):sg(E.stateNode,!1)}catch(nt){Dt(E,E.return,nt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,jl(t,i))));break;case 19:Ce(e,t),Ee(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,jl(t,r)));break;case 30:break;case 21:break;default:Ce(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(u0(r)){i=r;break}r=r.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var s=i.stateNode,u=Ou(t);Tl(t,u,s);break;case 5:var y=i.stateNode;i.flags&32&&(oa(y,""),i.flags&=-33);var S=Ou(t);Tl(t,S,y);break;case 3:case 4:var E=i.stateNode.containerInfo,L=Ou(t);ku(t,L,E);break;default:throw Error(l(161))}}catch(H){Dt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;v0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Bn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)h0(t,e.alternate,e),e=e.sibling}function qi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ri(4,e,e.return),qi(e);break;case 1:gn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&s0(e,e.return,i),qi(e);break;case 27:Qr(e.stateNode);case 26:case 5:gn(e,e.return),qi(e);break;case 22:e.memoizedState===null&&qi(e);break;case 30:qi(e);break;default:qi(e)}t=t.sibling}}function Nn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,u=e,y=u.flags;switch(u.tag){case 0:case 11:case 15:Nn(s,u,i),_r(4,u);break;case 1:if(Nn(s,u,i),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Dt(r,r.return,L)}if(r=u,s=r.updateQueue,s!==null){var S=r.stateNode;try{var E=s.shared.hiddenCallbacks;if(E!==null)for(s.shared.hiddenCallbacks=null,s=0;s<E.length;s++)Fp(E[s],S)}catch(L){Dt(r,r.return,L)}}i&&y&64&&l0(u),Vr(u,u.return);break;case 27:f0(u);case 26:case 5:Nn(s,u,i),i&&r===null&&y&4&&c0(u),Vr(u,u.return);break;case 12:Nn(s,u,i);break;case 31:Nn(s,u,i),i&&y&4&&g0(s,u);break;case 13:Nn(s,u,i),i&&y&4&&y0(s,u);break;case 22:u.memoizedState===null&&Nn(s,u,i),Vr(u,u.return);break;case 30:break;default:Nn(s,u,i)}e=e.sibling}}function Nu(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Cr(i))}function Lu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Cr(t))}function ln(t,e,i,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)b0(t,e,i,r),e=e.sibling}function b0(t,e,i,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:ln(t,e,i,r),s&2048&&_r(9,e);break;case 1:ln(t,e,i,r);break;case 3:ln(t,e,i,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Cr(t)));break;case 12:if(s&2048){ln(t,e,i,r),t=e.stateNode;try{var u=e.memoizedProps,y=u.id,S=u.onPostCommit;typeof S=="function"&&S(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(E){Dt(e,e.return,E)}}else ln(t,e,i,r);break;case 31:ln(t,e,i,r);break;case 13:ln(t,e,i,r);break;case 23:break;case 22:u=e.stateNode,y=e.alternate,e.memoizedState!==null?u._visibility&2?ln(t,e,i,r):Ur(t,e):u._visibility&2?ln(t,e,i,r):(u._visibility|=2,Ea(t,e,i,r,(e.subtreeFlags&10256)!==0||!1)),s&2048&&Nu(y,e);break;case 24:ln(t,e,i,r),s&2048&&Lu(e.alternate,e);break;default:ln(t,e,i,r)}}function Ea(t,e,i,r,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,y=e,S=i,E=r,L=y.flags;switch(y.tag){case 0:case 11:case 15:Ea(u,y,S,E,s),_r(8,y);break;case 23:break;case 22:var H=y.stateNode;y.memoizedState!==null?H._visibility&2?Ea(u,y,S,E,s):Ur(u,y):(H._visibility|=2,Ea(u,y,S,E,s)),s&&L&2048&&Nu(y.alternate,y);break;case 24:Ea(u,y,S,E,s),s&&L&2048&&Lu(y.alternate,y);break;default:Ea(u,y,S,E,s)}e=e.sibling}}function Ur(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,s=r.flags;switch(r.tag){case 22:Ur(i,r),s&2048&&Nu(r.alternate,r);break;case 24:Ur(i,r),s&2048&&Lu(r.alternate,r);break;default:Ur(i,r)}e=e.sibling}}var Hr=8192;function Aa(t,e,i){if(t.subtreeFlags&Hr)for(t=t.child;t!==null;)S0(t,e,i),t=t.sibling}function S0(t,e,i){switch(t.tag){case 26:Aa(t,e,i),t.flags&Hr&&t.memoizedState!==null&&uw(i,on,t.memoizedState,t.memoizedProps);break;case 5:Aa(t,e,i);break;case 3:case 4:var r=on;on=_l(t.stateNode.containerInfo),Aa(t,e,i),on=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Hr,Hr=16777216,Aa(t,e,i),Hr=r):Aa(t,e,i));break;default:Aa(t,e,i)}}function w0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Yr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];le=r,j0(r,t)}w0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T0(t),t=t.sibling}function T0(t){switch(t.tag){case 0:case 11:case 15:Yr(t),t.flags&2048&&ri(9,t,t.return);break;case 3:Yr(t);break;case 12:Yr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Cl(t)):Yr(t);break;default:Yr(t)}}function Cl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];le=r,j0(r,t)}w0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ri(8,e,e.return),Cl(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Cl(e));break;default:Cl(e)}t=t.sibling}}function j0(t,e){for(;le!==null;){var i=le;switch(i.tag){case 0:case 11:case 15:ri(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Cr(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,le=r;else t:for(i=t;le!==null;){r=le;var s=r.sibling,u=r.return;if(p0(r),r===i){le=null;break t}if(s!==null){s.return=u,le=s;break t}le=u}}}var CS={getCacheForType:function(t){var e=ue(Jt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return ue(Jt).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,At=0,kt=null,gt=null,xt=0,$t=0,Ne=null,oi=!1,Ma=!1,_u=!1,Ln=0,Xt=0,li=0,Xi=0,Vu=0,Le=0,$a=0,Gr=null,Ae=null,Uu=!1,El=0,C0=0,Al=1/0,Ml=null,si=null,ie=0,ci=null,Da=null,_n=0,Hu=0,Yu=null,E0=null,qr=0,Gu=null;function _e(){return(At&2)!==0&&xt!==0?xt&-xt:Y.T!==null?Zu():Yh()}function A0(){if(Le===0)if((xt&536870912)===0||St){var t=No;No<<=1,(No&3932160)===0&&(No=262144),Le=t}else Le=536870912;return t=ke.current,t!==null&&(t.flags|=32),Le}function Me(t,e,i){(t===kt&&($t===2||$t===9)||t.cancelPendingCommit!==null)&&(za(t,0),ui(t,xt,Le,!1)),fr(t,i),((At&2)===0||t!==kt)&&(t===kt&&((At&2)===0&&(Xi|=i),Xt===4&&ui(t,xt,Le,!1)),yn(t))}function M0(t,e,i){if((At&6)!==0)throw Error(l(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||ur(t,e),s=r?$S(t,e):Xu(t,e,!0),u=r;do{if(s===0){Ma&&!r&&ui(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!AS(i)){s=Xu(t,e,!1),u=!1;continue}if(s===2){if(u=e,t.errorRecoveryDisabledLanes&u)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var S=t;s=Gr;var E=S.current.memoizedState.isDehydrated;if(E&&(za(S,y).flags|=256),y=Xu(S,y,!1),y!==2){if(_u&&!E){S.errorRecoveryDisabledLanes|=u,Xi|=u,s=4;break t}u=Ae,Ae=s,u!==null&&(Ae===null?Ae=u:Ae.push.apply(Ae,u))}s=y}if(u=!1,s!==2)continue}}if(s===1){za(t,0),ui(t,e,0,!0);break}t:{switch(r=t,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:ui(r,e,Le,!oi);break t;case 2:Ae=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(s=El+300-$e(),10<s)){if(ui(r,e,Le,!oi),_o(r,0,!0)!==0)break t;_n=e,r.timeoutHandle=rg($0.bind(null,r,i,Ae,Ml,Uu,e,Le,Xi,$a,oi,u,"Throttled",-0,0),s);break t}$0(r,i,Ae,Ml,Uu,e,Le,Xi,$a,oi,u,null,-0,0)}}break}while(!0);yn(t)}function $0(t,e,i,r,s,u,y,S,E,L,H,X,_,V){if(t.timeoutHandle=-1,X=e.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},S0(e,u,X);var nt=(u&62914560)===u?El-$e():(u&4194048)===u?C0-$e():0;if(nt=fw(X,nt),nt!==null){_n=u,t.cancelPendingCommit=nt(L0.bind(null,t,e,u,i,r,s,y,S,E,H,X,null,_,V)),ui(t,u,y,!L);return}}L0(t,e,u,i,r,s,y,S,E)}function AS(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var s=i[r],u=s.getSnapshot;s=s.value;try{if(!Re(u(),s))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ui(t,e,i,r){e&=~Vu,e&=~Xi,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var u=31-ze(s),y=1<<u;r[u]=-1,s&=~y}i!==0&&Vh(t,i,e)}function $l(){return(At&6)===0?(Xr(0),!1):!0}function qu(){if(gt!==null){if($t===0)var t=gt.return;else t=gt,An=Ni=null,ou(t),Sa=null,Ar=0,t=gt;for(;t!==null;)o0(t.alternate,t),t=t.return;gt=null}}function za(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,KS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),_n=0,qu(),kt=t,gt=i=Cn(t.current,null),xt=e,$t=0,Ne=null,oi=!1,Ma=ur(t,e),_u=!1,$a=Le=Vu=Xi=li=Xt=0,Ae=Gr=null,Uu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-ze(r),u=1<<s;e|=t[s],r&=~u}return Ln=e,Fo(),i}function D0(t,e){dt=null,Y.H=Br,e===ba||e===al?(e=Pp(),$t=3):e===Qc?(e=Pp(),$t=4):$t=e===wu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,gt===null&&(Xt=1,xl(t,Ge(e,t.current)))}function z0(){var t=ke.current;return t===null?!0:(xt&4194048)===xt?Ke===null:(xt&62914560)===xt||(xt&536870912)!==0?t===Ke:!1}function R0(){var t=Y.H;return Y.H=Br,t===null?Br:t}function O0(){var t=Y.A;return Y.A=CS,t}function Dl(){Xt=4,oi||(xt&4194048)!==xt&&ke.current!==null||(Ma=!0),(li&134217727)===0&&(Xi&134217727)===0||kt===null||ui(kt,xt,Le,!1)}function Xu(t,e,i){var r=At;At|=2;var s=R0(),u=O0();(kt!==t||xt!==e)&&(Ml=null,za(t,e)),e=!1;var y=Xt;t:do try{if($t!==0&&gt!==null){var S=gt,E=Ne;switch($t){case 8:qu(),y=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(e=!0);var L=$t;if($t=0,Ne=null,Ra(t,S,E,L),i&&Ma){y=0;break t}break;default:L=$t,$t=0,Ne=null,Ra(t,S,E,L)}}MS(),y=Xt;break}catch(H){D0(t,H)}while(!0);return e&&t.shellSuspendCounter++,An=Ni=null,At=r,Y.H=s,Y.A=u,gt===null&&(kt=null,xt=0,Fo()),y}function MS(){for(;gt!==null;)k0(gt)}function $S(t,e){var i=At;At|=2;var r=R0(),s=O0();kt!==t||xt!==e?(Ml=null,Al=$e()+500,za(t,e)):Ma=ur(t,e);t:do try{if($t!==0&&gt!==null){e=gt;var u=Ne;e:switch($t){case 1:$t=0,Ne=null,Ra(t,e,u,1);break;case 2:case 9:if(qp(u)){$t=0,Ne=null,B0(e);break}e=function(){$t!==2&&$t!==9||kt!==t||($t=7),yn(t)},u.then(e,e);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:qp(u)?($t=0,Ne=null,B0(e)):($t=0,Ne=null,Ra(t,e,u,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var S=gt;if(y?bg(y):S.stateNode.complete){$t=0,Ne=null;var E=S.sibling;if(E!==null)gt=E;else{var L=S.return;L!==null?(gt=L,zl(L)):gt=null}break e}}$t=0,Ne=null,Ra(t,e,u,5);break;case 6:$t=0,Ne=null,Ra(t,e,u,6);break;case 8:qu(),Xt=6;break t;default:throw Error(l(462))}}DS();break}catch(H){D0(t,H)}while(!0);return An=Ni=null,Y.H=r,Y.A=s,At=i,gt!==null?0:(kt=null,xt=0,Fo(),Xt)}function DS(){for(;gt!==null&&!Ib();)k0(gt)}function k0(t){var e=a0(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?zl(t):gt=e}function B0(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Wm(i,e,e.pendingProps,e.type,void 0,xt);break;case 11:e=Wm(i,e,e.pendingProps,e.type.render,e.ref,xt);break;case 5:ou(e);default:o0(i,e),e=gt=Op(e,Ln),e=a0(i,e,Ln)}t.memoizedProps=t.pendingProps,e===null?zl(t):gt=e}function Ra(t,e,i,r){An=Ni=null,ou(e),Sa=null,Ar=0;var s=e.return;try{if(xS(t,s,e,i,xt)){Xt=1,xl(t,Ge(i,t.current)),gt=null;return}}catch(u){if(s!==null)throw gt=s,u;Xt=1,xl(t,Ge(i,t.current)),gt=null;return}e.flags&32768?(St||r===1?t=!0:Ma||(xt&536870912)!==0?t=!1:(oi=t=!0,(r===2||r===9||r===3||r===6)&&(r=ke.current,r!==null&&r.tag===13&&(r.flags|=16384))),N0(e,t)):zl(e)}function zl(t){var e=t;do{if((e.flags&32768)!==0){N0(e,oi);return}t=e.return;var i=SS(e.alternate,e,Ln);if(i!==null){gt=i;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Xt===0&&(Xt=5)}function N0(t,e){do{var i=wS(t.alternate,t);if(i!==null){i.flags&=32767,gt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=i}while(t!==null);Xt=6,gt=null}function L0(t,e,i,r,s,u,y,S,E){t.cancelPendingCommit=null;do Rl();while(ie!==0);if((At&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(u=e.lanes|e.childLanes,u|=Oc,c2(t,i,u,y,S,E),t===kt&&(gt=kt=null,xt=0),Da=e,ci=t,_n=i,Hu=u,Yu=s,E0=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kS(ko,function(){return Y0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Y.T,Y.T=null,s=Z.p,Z.p=2,y=At,At|=4;try{TS(t,e,i)}finally{At=y,Z.p=s,Y.T=r}}ie=1,_0(),V0(),U0()}}function _0(){if(ie===1){ie=0;var t=ci,e=Da,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=Y.T,Y.T=null;var r=Z.p;Z.p=2;var s=At;At|=4;try{x0(e,t);var u=af,y=jp(t.containerInfo),S=u.focusedElem,E=u.selectionRange;if(y!==S&&S&&S.ownerDocument&&Tp(S.ownerDocument.documentElement,S)){if(E!==null&&Mc(S)){var L=E.start,H=E.end;if(H===void 0&&(H=L),"selectionStart"in S)S.selectionStart=L,S.selectionEnd=Math.min(H,S.value.length);else{var X=S.ownerDocument||document,_=X&&X.defaultView||window;if(_.getSelection){var V=_.getSelection(),nt=S.textContent.length,ot=Math.min(E.start,nt),Ot=E.end===void 0?ot:Math.min(E.end,nt);!V.extend&&ot>Ot&&(y=Ot,Ot=ot,ot=y);var z=wp(S,ot),M=wp(S,Ot);if(z&&M&&(V.rangeCount!==1||V.anchorNode!==z.node||V.anchorOffset!==z.offset||V.focusNode!==M.node||V.focusOffset!==M.offset)){var B=X.createRange();B.setStart(z.node,z.offset),V.removeAllRanges(),ot>Ot?(V.addRange(B),V.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),V.addRange(B))}}}}for(X=[],V=S;V=V.parentNode;)V.nodeType===1&&X.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<X.length;S++){var q=X[S];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}ql=!!nf,af=nf=null}finally{At=s,Z.p=r,Y.T=i}}t.current=e,ie=2}}function V0(){if(ie===2){ie=0;var t=ci,e=Da,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Y.T,Y.T=null;var r=Z.p;Z.p=2;var s=At;At|=4;try{h0(t,e.alternate,e)}finally{At=s,Z.p=r,Y.T=i}}ie=3}}function U0(){if(ie===4||ie===3){ie=0,t2();var t=ci,e=Da,i=_n,r=E0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ie=5:(ie=0,Da=ci=null,H0(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(si=null),cc(i),e=e.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(cr,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=Y.T,s=Z.p,Z.p=2,Y.T=null;try{for(var u=t.onRecoverableError,y=0;y<r.length;y++){var S=r[y];u(S.value,{componentStack:S.stack})}}finally{Y.T=e,Z.p=s}}(_n&3)!==0&&Rl(),yn(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===Gu?qr++:(qr=0,Gu=t):qr=0,Xr(0)}}function H0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Cr(e)))}function Rl(){return _0(),V0(),U0(),Y0()}function Y0(){if(ie!==5)return!1;var t=ci,e=Hu;Hu=0;var i=cc(_n),r=Y.T,s=Z.p;try{Z.p=32>i?32:i,Y.T=null,i=Yu,Yu=null;var u=ci,y=_n;if(ie=0,Da=ci=null,_n=0,(At&6)!==0)throw Error(l(331));var S=At;if(At|=4,T0(u.current),b0(u,u.current,y,i),At=S,Xr(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(cr,u)}catch{}return!0}finally{Z.p=s,Y.T=r,H0(t,e)}}function G0(t,e,i){e=Ge(i,e),e=Su(t.stateNode,e,2),t=ni(t,e,2),t!==null&&(fr(t,2),yn(t))}function Dt(t,e,i){if(t.tag===3)G0(t,t,i);else for(;e!==null;){if(e.tag===3){G0(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=Ge(i,t),i=qm(2),r=ni(e,i,2),r!==null&&(Xm(i,r,e,t),fr(r,2),yn(r));break}}e=e.return}}function Pu(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new ES;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(i)||(_u=!0,s.add(i),t=zS.bind(null,t,e,i),e.then(t,t))}function zS(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,kt===t&&(xt&i)===i&&(Xt===4||Xt===3&&(xt&62914560)===xt&&300>$e()-El?(At&2)===0&&za(t,0):Vu|=i,$a===xt&&($a=0)),yn(t)}function q0(t,e){e===0&&(e=_h()),t=Oi(t,e),t!==null&&(fr(t,e),yn(t))}function RS(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),q0(t,i)}function OS(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(i=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),q0(t,i)}function kS(t,e){return rc(t,e)}var Ol=null,Oa=null,Ku=!1,kl=!1,Qu=!1,fi=0;function yn(t){t!==Oa&&t.next===null&&(Oa===null?Ol=Oa=t:Oa=Oa.next=t),kl=!0,Ku||(Ku=!0,NS())}function Xr(t,e){if(!Qu&&kl){Qu=!0;do for(var i=!1,r=Ol;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var y=r.suspendedLanes,S=r.pingedLanes;u=(1<<31-ze(42|t)+1)-1,u&=s&~(y&~S),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Q0(r,u))}else u=xt,u=_o(r,r===kt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||ur(r,u)||(i=!0,Q0(r,u));r=r.next}while(i);Qu=!1}}function BS(){X0()}function X0(){kl=Ku=!1;var t=0;fi!==0&&PS()&&(t=fi);for(var e=$e(),i=null,r=Ol;r!==null;){var s=r.next,u=P0(r,e);u===0?(r.next=null,i===null?Ol=s:i.next=s,s===null&&(Oa=i)):(i=r,(t!==0||(u&3)!==0)&&(kl=!0)),r=s}ie!==0&&ie!==5||Xr(t),fi!==0&&(fi=0)}function P0(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var y=31-ze(u),S=1<<y,E=s[y];E===-1?((S&i)===0||(S&r)!==0)&&(s[y]=s2(S,e)):E<=e&&(t.expiredLanes|=S),u&=~S}if(e=kt,i=xt,i=_o(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&($t===2||$t===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&oc(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ur(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&oc(r),cc(i)){case 2:case 8:i=Nh;break;case 32:i=ko;break;case 268435456:i=Lh;break;default:i=ko}return r=K0.bind(null,t),i=rc(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&oc(r),t.callbackPriority=2,t.callbackNode=null,2}function K0(t,e){if(ie!==0&&ie!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Rl()&&t.callbackNode!==i)return null;var r=xt;return r=_o(t,t===kt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(M0(t,r,e),P0(t,$e()),t.callbackNode!=null&&t.callbackNode===i?K0.bind(null,t):null)}function Q0(t,e){if(Rl())return null;M0(t,e,!0)}function NS(){QS(function(){(At&6)!==0?rc(Bh,BS):X0()})}function Zu(){if(fi===0){var t=xa;t===0&&(t=Bo,Bo<<=1,(Bo&261888)===0&&(Bo=256)),fi=t}return fi}function Z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function F0(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function LS(t,e,i,r,s){if(e==="submit"&&i&&i.stateNode===s){var u=Z0((s[we]||null).action),y=r.submitter;y&&(e=(e=y[we]||null)?Z0(e.formAction):y.getAttribute("formAction"),e!==null&&(u=e,y=null));var S=new Po("action","action",null,r,s);t.push({event:S,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(fi!==0){var E=y?F0(s,y):new FormData(s);mu(i,{pending:!0,data:E,method:s.method,action:u},null,E)}}else typeof u=="function"&&(S.preventDefault(),E=y?F0(s,y):new FormData(s),mu(i,{pending:!0,data:E,method:s.method,action:u},u,E))},currentTarget:s}]})}}for(var Fu=0;Fu<Rc.length;Fu++){var Ju=Rc[Fu],_S=Ju.toLowerCase(),VS=Ju[0].toUpperCase()+Ju.slice(1);rn(_S,"on"+VS)}rn(Ap,"onAnimationEnd"),rn(Mp,"onAnimationIteration"),rn($p,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(eS,"onTransitionRun"),rn(nS,"onTransitionStart"),rn(iS,"onTransitionCancel"),rn(Dp,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$i("onBeforeInput",["compositionend","keypress","textInput","paste"]),$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pr));function J0(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],s=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var y=r.length-1;0<=y;y--){var S=r[y],E=S.instance,L=S.currentTarget;if(S=S.listener,E!==u&&s.isPropagationStopped())break t;u=S,s.currentTarget=L;try{u(s)}catch(H){Zo(H)}s.currentTarget=null,u=E}else for(y=0;y<r.length;y++){if(S=r[y],E=S.instance,L=S.currentTarget,S=S.listener,E!==u&&s.isPropagationStopped())break t;u=S,s.currentTarget=L;try{u(s)}catch(H){Zo(H)}s.currentTarget=null,u=E}}}}function yt(t,e){var i=e[uc];i===void 0&&(i=e[uc]=new Set);var r=t+"__bubble";i.has(r)||(W0(e,t,2,!1),i.add(r))}function Wu(t,e,i){var r=0;e&&(r|=4),W0(i,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Iu(t){if(!t[Bl]){t[Bl]=!0,Xh.forEach(function(i){i!=="selectionchange"&&(US.has(i)||Wu(i,!1,t),Wu(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,Wu("selectionchange",!1,e))}}function W0(t,e,i,r){switch(Ag(e)){case 2:var s=pw;break;case 8:s=mw;break;default:s=mf}i=s.bind(null,e,i,t),s=void 0,!vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,i,{capture:!0,passive:s}):t.addEventListener(e,i,!0):s!==void 0?t.addEventListener(e,i,{passive:s}):t.addEventListener(e,i,!1)}function tf(t,e,i,r,s){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var S=r.stateNode.containerInfo;if(S===s)break;if(y===4)for(y=r.return;y!==null;){var E=y.tag;if((E===3||E===4)&&y.stateNode.containerInfo===s)return;y=y.return}for(;S!==null;){if(y=ea(S),y===null)return;if(E=y.tag,E===5||E===6||E===26||E===27){r=u=y;continue t}S=S.parentNode}}r=r.return}ip(function(){var L=u,H=yc(i),X=[];t:{var _=zp.get(t);if(_!==void 0){var V=Po,nt=t;switch(t){case"keypress":if(qo(i)===0)break t;case"keydown":case"keyup":V=O2;break;case"focusin":nt="focus",V=Tc;break;case"focusout":nt="blur",V=Tc;break;case"beforeblur":case"afterblur":V=Tc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=S2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=N2;break;case Ap:case Mp:case $p:V=j2;break;case Dp:V=_2;break;case"scroll":case"scrollend":V=v2;break;case"wheel":V=U2;break;case"copy":case"cut":case"paste":V=E2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=sp;break;case"toggle":case"beforetoggle":V=Y2}var ot=(e&4)!==0,Ot=!ot&&(t==="scroll"||t==="scrollend"),z=ot?_!==null?_+"Capture":null:_;ot=[];for(var M=L,B;M!==null;){var q=M;if(B=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||B===null||z===null||(q=pr(M,z),q!=null&&ot.push(Kr(M,q,B))),Ot)break;M=M.return}0<ot.length&&(_=new V(_,nt,null,i,H),X.push({event:_,listeners:ot}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",_&&i!==gc&&(nt=i.relatedTarget||i.fromElement)&&(ea(nt)||nt[ta]))break t;if((V||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,V?(nt=i.relatedTarget||i.toElement,V=L,nt=nt?ea(nt):null,nt!==null&&(Ot=f(nt),ot=nt.tag,nt!==Ot||ot!==5&&ot!==27&&ot!==6)&&(nt=null)):(V=null,nt=L),V!==nt)){if(ot=op,q="onMouseLeave",z="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(ot=sp,q="onPointerLeave",z="onPointerEnter",M="pointer"),Ot=V==null?_:hr(V),B=nt==null?_:hr(nt),_=new ot(q,M+"leave",V,i,H),_.target=Ot,_.relatedTarget=B,q=null,ea(H)===L&&(ot=new ot(z,M+"enter",nt,i,H),ot.target=B,ot.relatedTarget=Ot,q=ot),Ot=q,V&&nt)e:{for(ot=HS,z=V,M=nt,B=0,q=z;q;q=ot(q))B++;q=0;for(var rt=M;rt;rt=ot(rt))q++;for(;0<B-q;)z=ot(z),B--;for(;0<q-B;)M=ot(M),q--;for(;B--;){if(z===M||M!==null&&z===M.alternate){ot=z;break e}z=ot(z),M=ot(M)}ot=null}else ot=null;V!==null&&I0(X,_,V,ot,!1),nt!==null&&Ot!==null&&I0(X,Ot,nt,ot,!0)}}t:{if(_=L?hr(L):window,V=_.nodeName&&_.nodeName.toLowerCase(),V==="select"||V==="input"&&_.type==="file")var Tt=gp;else if(pp(_))if(yp)Tt=W2;else{Tt=F2;var at=Z2}else V=_.nodeName,!V||V.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?L&&mc(L.elementType)&&(Tt=gp):Tt=J2;if(Tt&&(Tt=Tt(t,L))){mp(X,Tt,i,H);break t}at&&at(t,_,L),t==="focusout"&&L&&_.type==="number"&&L.memoizedProps.value!=null&&pc(_,"number",_.value)}switch(at=L?hr(L):window,t){case"focusin":(pp(at)||at.contentEditable==="true")&&(ua=at,$c=L,wr=null);break;case"focusout":wr=$c=ua=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Cp(X,i,H);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":Cp(X,i,H)}var ht;if(Cc)t:{switch(t){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else ca?dp(t,i)&&(vt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(vt="onCompositionStart");vt&&(cp&&i.locale!=="ko"&&(ca||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&ca&&(ht=ap()):(Zn=H,bc="value"in Zn?Zn.value:Zn.textContent,ca=!0)),at=Nl(L,vt),0<at.length&&(vt=new lp(vt,t,null,i,H),X.push({event:vt,listeners:at}),ht?vt.data=ht:(ht=hp(i),ht!==null&&(vt.data=ht)))),(ht=q2?X2(t,i):P2(t,i))&&(vt=Nl(L,"onBeforeInput"),0<vt.length&&(at=new lp("onBeforeInput","beforeinput",null,i,H),X.push({event:at,listeners:vt}),at.data=ht)),LS(X,t,L,i,H)}J0(X,e)})}function Kr(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Nl(t,e){for(var i=e+"Capture",r=[];t!==null;){var s=t,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=pr(t,i),s!=null&&r.unshift(Kr(t,s,u)),s=pr(t,e),s!=null&&r.push(Kr(t,s,u))),t.tag===3)return r;t=t.return}return[]}function HS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,e,i,r,s){for(var u=e._reactName,y=[];i!==null&&i!==r;){var S=i,E=S.alternate,L=S.stateNode;if(S=S.tag,E!==null&&E===r)break;S!==5&&S!==26&&S!==27||L===null||(E=L,s?(L=pr(i,u),L!=null&&y.unshift(Kr(i,L,E))):s||(L=pr(i,u),L!=null&&y.push(Kr(i,L,E)))),i=i.return}y.length!==0&&t.push({event:e,listeners:y})}var YS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(YS,`
`).replace(GS,"")}function eg(t,e){return e=tg(e),tg(t)===e}function Rt(t,e,i,r,s,u){switch(i){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||oa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&oa(t,""+r);break;case"className":Uo(t,"class",r);break;case"tabIndex":Uo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(t,i,r);break;case"style":ep(t,r,u);break;case"data":if(e!=="object"){Uo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Yo(""+r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Rt(t,e,"name",s.name,s,null),Rt(t,e,"formEncType",s.formEncType,s,null),Rt(t,e,"formMethod",s.formMethod,s,null),Rt(t,e,"formTarget",s.formTarget,s,null)):(Rt(t,e,"encType",s.encType,s,null),Rt(t,e,"method",s.method,s,null),Rt(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Yo(""+r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Tn);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Yo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""+r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Vo(t,"popover",r);break;case"xlinkActuate":wn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Vo(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=y2.get(i)||i,Vo(t,i,r))}}function ef(t,e,i,r,s,u){switch(i){case"style":ep(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"children":typeof r=="string"?oa(t,r):(typeof r=="number"||typeof r=="bigint")&&oa(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ph.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(s=i.endsWith("Capture"),e=i.slice(2,s?i.length-7:void 0),u=t[we]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,r,s);break t}i in t?t[i]=r:r===!0?t.setAttribute(i,""):Vo(t,i,r)}}}function de(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,s=!1,u;for(u in i)if(i.hasOwnProperty(u)){var y=i[u];if(y!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Rt(t,e,u,y,i,null)}}s&&Rt(t,e,"srcSet",i.srcSet,i,null),r&&Rt(t,e,"src",i.src,i,null);return;case"input":yt("invalid",t);var S=u=y=s=null,E=null,L=null;for(r in i)if(i.hasOwnProperty(r)){var H=i[r];if(H!=null)switch(r){case"name":s=H;break;case"type":y=H;break;case"checked":E=H;break;case"defaultChecked":L=H;break;case"value":u=H;break;case"defaultValue":S=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:Rt(t,e,r,H,i,null)}}Jh(t,u,S,E,L,y,s,!1);return;case"select":yt("invalid",t),r=y=u=null;for(s in i)if(i.hasOwnProperty(s)&&(S=i[s],S!=null))switch(s){case"value":u=S;break;case"defaultValue":y=S;break;case"multiple":r=S;default:Rt(t,e,s,S,i,null)}e=u,i=y,t.multiple=!!r,e!=null?ra(t,!!r,e,!1):i!=null&&ra(t,!!r,i,!0);return;case"textarea":yt("invalid",t),u=s=r=null;for(y in i)if(i.hasOwnProperty(y)&&(S=i[y],S!=null))switch(y){case"value":r=S;break;case"defaultValue":s=S;break;case"children":u=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(l(91));break;default:Rt(t,e,y,S,i,null)}Ih(t,r,s,u);return;case"option":for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null)&&(E==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Rt(t,e,E,r,i,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<Pr.length;r++)yt(Pr[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in i)if(i.hasOwnProperty(L)&&(r=i[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Rt(t,e,L,r,i,null)}return;default:if(mc(e)){for(H in i)i.hasOwnProperty(H)&&(r=i[H],r!==void 0&&ef(t,e,H,r,i,void 0));return}}for(S in i)i.hasOwnProperty(S)&&(r=i[S],r!=null&&Rt(t,e,S,r,i,null))}function qS(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,y=null,S=null,E=null,L=null,H=null;for(V in i){var X=i[V];if(i.hasOwnProperty(V)&&X!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=X;default:r.hasOwnProperty(V)||Rt(t,e,V,null,r,X)}}for(var _ in r){var V=r[_];if(X=i[_],r.hasOwnProperty(_)&&(V!=null||X!=null))switch(_){case"type":u=V;break;case"name":s=V;break;case"checked":L=V;break;case"defaultChecked":H=V;break;case"value":y=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,e));break;default:V!==X&&Rt(t,e,_,V,r,X)}}hc(t,y,S,E,L,H,u,s);return;case"select":V=y=S=_=null;for(u in i)if(E=i[u],i.hasOwnProperty(u)&&E!=null)switch(u){case"value":break;case"multiple":V=E;default:r.hasOwnProperty(u)||Rt(t,e,u,null,r,E)}for(s in r)if(u=r[s],E=i[s],r.hasOwnProperty(s)&&(u!=null||E!=null))switch(s){case"value":_=u;break;case"defaultValue":S=u;break;case"multiple":y=u;default:u!==E&&Rt(t,e,s,u,r,E)}e=S,i=y,r=V,_!=null?ra(t,!!i,_,!1):!!r!=!!i&&(e!=null?ra(t,!!i,e,!0):ra(t,!!i,i?[]:"",!1));return;case"textarea":V=_=null;for(S in i)if(s=i[S],i.hasOwnProperty(S)&&s!=null&&!r.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Rt(t,e,S,null,r,s)}for(y in r)if(s=r[y],u=i[y],r.hasOwnProperty(y)&&(s!=null||u!=null))switch(y){case"value":_=s;break;case"defaultValue":V=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Rt(t,e,y,s,r,u)}Wh(t,_,V);return;case"option":for(var nt in i)_=i[nt],i.hasOwnProperty(nt)&&_!=null&&!r.hasOwnProperty(nt)&&(nt==="selected"?t.selected=!1:Rt(t,e,nt,null,r,_));for(E in r)_=r[E],V=i[E],r.hasOwnProperty(E)&&_!==V&&(_!=null||V!=null)&&(E==="selected"?t.selected=_&&typeof _!="function"&&typeof _!="symbol":Rt(t,e,E,_,r,V));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in i)_=i[ot],i.hasOwnProperty(ot)&&_!=null&&!r.hasOwnProperty(ot)&&Rt(t,e,ot,null,r,_);for(L in r)if(_=r[L],V=i[L],r.hasOwnProperty(L)&&_!==V&&(_!=null||V!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(137,e));break;default:Rt(t,e,L,_,r,V)}return;default:if(mc(e)){for(var Ot in i)_=i[Ot],i.hasOwnProperty(Ot)&&_!==void 0&&!r.hasOwnProperty(Ot)&&ef(t,e,Ot,void 0,r,_);for(H in r)_=r[H],V=i[H],!r.hasOwnProperty(H)||_===V||_===void 0&&V===void 0||ef(t,e,H,_,r,V);return}}for(var z in i)_=i[z],i.hasOwnProperty(z)&&_!=null&&!r.hasOwnProperty(z)&&Rt(t,e,z,null,r,_);for(X in r)_=r[X],V=i[X],!r.hasOwnProperty(X)||_===V||_==null&&V==null||Rt(t,e,X,_,r,V)}function ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var s=i[r],u=s.transferSize,y=s.initiatorType,S=s.duration;if(u&&S&&ng(y)){for(y=0,S=s.responseEnd,r+=1;r<i.length;r++){var E=i[r],L=E.startTime;if(L>S)break;var H=E.transferSize,X=E.initiatorType;H&&ng(X)&&(E=E.responseEnd,y+=H*(E<S?1:(S-L)/(E-L)))}if(--r,e+=8*(u+y)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nf=null,af=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function ig(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var of=null;function PS(){var t=window.event;return t&&t.type==="popstate"?t===of?!1:(of=t,!0):(of=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(ZS)}:rg;function ZS(t){setTimeout(function(){throw t})}function di(t){return t==="head"}function lg(t,e){var i=e,r=0;do{var s=i.nextSibling;if(t.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(s),La(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Qr(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Qr(i);for(var u=i.firstChild;u;){var y=u.nextSibling,S=u.nodeName;u[dr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=y}}else i==="body"&&Qr(t.ownerDocument.body);i=s}while(i);La(e)}function sg(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function lf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":lf(i),fc(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function FS(t,e,i,r){for(;t.nodeType===1;){var s=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[dr])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Qe(t.nextSibling),t===null)break}return null}function JS(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Qe(t.nextSibling),t===null))return null;return t}function cg(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qe(t.nextSibling),t===null))return null;return t}function sf(t){return t.data==="$?"||t.data==="$~"}function cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function WS(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var uf=null;function ug(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return Qe(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function dg(t,e,i){switch(e=Ll(i),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Qr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);fc(t)}var Ze=new Map,hg=new Set;function _l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vn=Z.d;Z.d={f:IS,r:tw,D:ew,C:nw,L:iw,m:aw,X:ow,S:rw,M:lw};function IS(){var t=Vn.f(),e=$l();return t||e}function tw(t){var e=na(t);e!==null&&e.tag===5&&e.type==="form"?Dm(e):Vn.r(t)}var ka=typeof document>"u"?null:document;function pg(t,e,i){var r=ka;if(r&&typeof e=="string"&&e){var s=He(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof i=="string"&&(s+='[crossorigin="'+i+'"]'),hg.has(s)||(hg.add(s),t={rel:t,crossOrigin:i,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),de(e,"link",t),oe(e),r.head.appendChild(e)))}}function ew(t){Vn.D(t),pg("dns-prefetch",t,null)}function nw(t,e){Vn.C(t,e),pg("preconnect",t,e)}function iw(t,e,i){Vn.L(t,e,i);var r=ka;if(r&&t&&e){var s='link[rel="preload"][as="'+He(e)+'"]';e==="image"&&i&&i.imageSrcSet?(s+='[imagesrcset="'+He(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(s+='[imagesizes="'+He(i.imageSizes)+'"]')):s+='[href="'+He(t)+'"]';var u=s;switch(e){case"style":u=Ba(t);break;case"script":u=Na(t)}Ze.has(u)||(t=x({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Ze.set(u,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(Zr(u))||e==="script"&&r.querySelector(Fr(u))||(e=r.createElement("link"),de(e,"link",t),oe(e),r.head.appendChild(e)))}}function aw(t,e){Vn.m(t,e);var i=ka;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+He(r)+'"][href="'+He(t)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Na(t)}if(!Ze.has(u)&&(t=x({rel:"modulepreload",href:t},e),Ze.set(u,t),i.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Fr(u)))return}r=i.createElement("link"),de(r,"link",t),oe(r),i.head.appendChild(r)}}}function rw(t,e,i){Vn.S(t,e,i);var r=ka;if(r&&t){var s=ia(r).hoistableStyles,u=Ba(t);e=e||"default";var y=s.get(u);if(!y){var S={loading:0,preload:null};if(y=r.querySelector(Zr(u)))S.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Ze.get(u))&&ff(t,i);var E=y=r.createElement("link");oe(E),de(E,"link",t),E._p=new Promise(function(L,H){E.onload=L,E.onerror=H}),E.addEventListener("load",function(){S.loading|=1}),E.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Vl(y,e,r)}y={type:"stylesheet",instance:y,count:1,state:S},s.set(u,y)}}}function ow(t,e){Vn.X(t,e);var i=ka;if(i&&t){var r=ia(i).hoistableScripts,s=Na(t),u=r.get(s);u||(u=i.querySelector(Fr(s)),u||(t=x({src:t,async:!0},e),(e=Ze.get(s))&&df(t,e),u=i.createElement("script"),oe(u),de(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function lw(t,e){Vn.M(t,e);var i=ka;if(i&&t){var r=ia(i).hoistableScripts,s=Na(t),u=r.get(s);u||(u=i.querySelector(Fr(s)),u||(t=x({src:t,async:!0,type:"module"},e),(e=Ze.get(s))&&df(t,e),u=i.createElement("script"),oe(u),de(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function mg(t,e,i,r){var s=(s=ut.current)?_l(s):null;if(!s)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=Ba(i.href),i=ia(s).hoistableStyles,r=i.get(e),r||(r={type:"style",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ba(i.href);var u=ia(s).hoistableStyles,y=u.get(t);if(y||(s=s.ownerDocument||s,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,y),(u=s.querySelector(Zr(t)))&&!u._p&&(y.instance=u,y.state.loading=5),Ze.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ze.set(t,i),u||sw(s,t,i,y.state))),e&&r===null)throw Error(l(528,""));return y}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Na(i),i=ia(s).hoistableScripts,r=i.get(e),r||(r={type:"script",instance:null,count:0,state:null},i.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Ba(t){return'href="'+He(t)+'"'}function Zr(t){return'link[rel="stylesheet"]['+t+"]"}function gg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function sw(t,e,i,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),de(e,"link",i),oe(e),t.head.appendChild(e))}function Na(t){return'[src="'+He(t)+'"]'}function Fr(t){return"script[async]"+t}function yg(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+He(i.href)+'"]');if(r)return e.instance=r,oe(r),r;var s=x({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),oe(r),de(r,"style",s),Vl(r,i.precedence,t),e.instance=r;case"stylesheet":s=Ba(i.href);var u=t.querySelector(Zr(s));if(u)return e.state.loading|=4,e.instance=u,oe(u),u;r=gg(i),(s=Ze.get(s))&&ff(r,s),u=(t.ownerDocument||t).createElement("link"),oe(u);var y=u;return y._p=new Promise(function(S,E){y.onload=S,y.onerror=E}),de(u,"link",r),e.state.loading|=4,Vl(u,i.precedence,t),e.instance=u;case"script":return u=Na(i.src),(s=t.querySelector(Fr(u)))?(e.instance=s,oe(s),s):(r=i,(s=Ze.get(u))&&(r=x({},i),df(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),oe(s),de(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Vl(r,i.precedence,t));return e.instance}function Vl(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,y=0;y<r.length;y++){var S=r[y];if(S.dataset.precedence===e)u=S;else if(u!==s)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function ff(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function df(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ul=null;function xg(t,e,i){if(Ul===null){var r=new Map,s=Ul=new Map;s.set(i,r)}else s=Ul,r=s.get(i),r||(r=new Map,s.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),s=0;s<i.length;s++){var u=i[s];if(!(u[dr]||u[se]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var y=u.getAttribute(e)||"";y=t+y;var S=r.get(y);S?S.push(u):r.set(y,[u])}}return r}function vg(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function cw(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uw(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var s=Ba(r.href),u=e.querySelector(Zr(s));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Hl.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,oe(u);return}u=e.ownerDocument||e,r=gg(r),(s=Ze.get(s))&&ff(r,s),u=u.createElement("link"),oe(u);var y=u;y._p=new Promise(function(S,E){y.onload=S,y.onerror=E}),de(u,"link",r),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Hl.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var hf=0;function fw(t,e){return t.stylesheets&&t.count===0&&Gl(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&hf===0&&(hf=62500*XS());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>hf?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(s)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function Gl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,e.forEach(dw,t),Yl=null,Hl.call(t))}function dw(t,e){if(!(e.state.loading&4)){var i=Yl.get(t);if(i)var r=i.get(null);else{i=new Map,Yl.set(t,i);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var y=s[u];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),r=y)}r&&i.set(null,r)}s=e.instance,y=s.getAttribute("data-precedence"),u=i.get(y)||r,u===r&&i.set(null,s),i.set(y,s),this.count++,r=Hl.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Jr={$$typeof:O,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function hw(t,e,i,r,s,u,y,S,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.hiddenUpdates=lc(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Sg(t,e,i,r,s,u,y,S,E,L,H,X){return t=new hw(t,e,i,y,E,L,H,X,S),e=1,u===!0&&(e|=24),u=Oe(3,null,null,e),t.current=u,u.stateNode=t,e=Xc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:e},Zc(u),t}function wg(t){return t?(t=ha,t):ha}function Tg(t,e,i,r,s,u){s=wg(s),r.context===null?r.context=s:r.pendingContext=s,r=ei(e),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=ni(t,r,e),i!==null&&(Me(i,t,e),$r(i,t,e))}function jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function pf(t,e){jg(t,e),(t=t.alternate)&&jg(t,e)}function Cg(t){if(t.tag===13||t.tag===31){var e=Oi(t,67108864);e!==null&&Me(e,t,67108864),pf(t,67108864)}}function Eg(t){if(t.tag===13||t.tag===31){var e=_e();e=sc(e);var i=Oi(t,e);i!==null&&Me(i,t,e),pf(t,e)}}var ql=!0;function pw(t,e,i,r){var s=Y.T;Y.T=null;var u=Z.p;try{Z.p=2,mf(t,e,i,r)}finally{Z.p=u,Y.T=s}}function mw(t,e,i,r){var s=Y.T;Y.T=null;var u=Z.p;try{Z.p=8,mf(t,e,i,r)}finally{Z.p=u,Y.T=s}}function mf(t,e,i,r){if(ql){var s=gf(r);if(s===null)tf(t,e,r,Xl,i),Mg(t,r);else if(yw(s,t,e,i,r))r.stopPropagation();else if(Mg(t,r),e&4&&-1<gw.indexOf(t)){for(;s!==null;){var u=na(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var y=Mi(u.pendingLanes);if(y!==0){var S=u;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var E=1<<31-ze(y);S.entanglements[1]|=E,y&=~E}yn(u),(At&6)===0&&(Al=$e()+500,Xr(0))}}break;case 31:case 13:S=Oi(u,2),S!==null&&Me(S,u,2),$l(),pf(u,2)}if(u=gf(r),u===null&&tf(t,e,r,Xl,i),u===s)break;s=u}s!==null&&r.stopPropagation()}else tf(t,e,r,null,i)}}function gf(t){return t=yc(t),yf(t)}var Xl=null;function yf(t){if(Xl=null,t=ea(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===31){if(t=p(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xl=t,null}function Ag(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e2()){case Bh:return 2;case Nh:return 8;case ko:case n2:return 32;case Lh:return 268435456;default:return 32}default:return 32}}var xf=!1,hi=null,pi=null,mi=null,Wr=new Map,Ir=new Map,gi=[],gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Wr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(e.pointerId)}}function to(t,e,i,r,s,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},e!==null&&(e=na(e),e!==null&&Cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function yw(t,e,i,r,s){switch(e){case"focusin":return hi=to(hi,t,e,i,r,s),!0;case"dragenter":return pi=to(pi,t,e,i,r,s),!0;case"mouseover":return mi=to(mi,t,e,i,r,s),!0;case"pointerover":var u=s.pointerId;return Wr.set(u,to(Wr.get(u)||null,t,e,i,r,s)),!0;case"gotpointercapture":return u=s.pointerId,Ir.set(u,to(Ir.get(u)||null,t,e,i,r,s)),!0}return!1}function $g(t){var e=ea(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,Gh(t.priority,function(){Eg(i)});return}}else if(e===31){if(e=p(i),e!==null){t.blockedOn=e,Gh(t.priority,function(){Eg(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=gf(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);gc=r,i.target.dispatchEvent(r),gc=null}else return e=na(i),e!==null&&Cg(e),t.blockedOn=i,!1;e.shift()}return!0}function Dg(t,e,i){Pl(t)&&i.delete(e)}function xw(){xf=!1,hi!==null&&Pl(hi)&&(hi=null),pi!==null&&Pl(pi)&&(pi=null),mi!==null&&Pl(mi)&&(mi=null),Wr.forEach(Dg),Ir.forEach(Dg)}function Kl(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xw)))}var Ql=null;function zg(t){Ql!==t&&(Ql=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ql===t&&(Ql=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(yf(r||i)===null)continue;break}var u=na(i);u!==null&&(t.splice(e,3),e-=3,mu(u,{pending:!0,data:s,method:i.method,action:r},r,s))}}))}function La(t){function e(E){return Kl(E,t)}hi!==null&&Kl(hi,t),pi!==null&&Kl(pi,t),mi!==null&&Kl(mi,t),Wr.forEach(e),Ir.forEach(e);for(var i=0;i<gi.length;i++){var r=gi[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<gi.length&&(i=gi[0],i.blockedOn===null);)$g(i),i.blockedOn===null&&gi.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var s=i[r],u=i[r+1],y=s[we]||null;if(typeof u=="function")y||zg(i);else if(y){var S=null;if(u&&u.hasAttribute("formAction")){if(s=u,y=u[we]||null)S=y.formAction;else if(yf(s)!==null)continue}else S=y.action;typeof S=="function"?i[r+1]=S:(i.splice(r,3),r-=3),zg(i)}}}function Rg(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(y){return s=y})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function vf(t){this._internalRoot=t}Zl.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var i=e.current,r=_e();Tg(i,r,t,e,null,null)},Zl.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tg(t.current,2,null,t,null,null),$l(),e[ta]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yh();t={blockedOn:null,target:t,priority:e};for(var i=0;i<gi.length&&e!==0&&e<gi[i].priority;i++);gi.splice(i,0,t),i===0&&$g(t)}};var Og=a.version;if(Og!=="19.2.3")throw Error(l(527,Og,"19.2.3"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=g(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var vw={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{cr=Fl.inject(vw),De=Fl}catch{}}return no.createRoot=function(t,e){if(!c(t))throw Error(l(299));var i=!1,r="",s=Um,u=Hm,y=Ym;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError)),e=Sg(t,1,!1,null,null,i,r,null,s,u,y,Rg),t[ta]=e.current,Iu(t),new vf(e)},no.hydrateRoot=function(t,e,i){if(!c(t))throw Error(l(299));var r=!1,s="",u=Um,y=Hm,S=Ym,E=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.formState!==void 0&&(E=i.formState)),e=Sg(t,1,!0,e,i??null,r,s,E,u,y,S,Rg),e.context=wg(null),i=e.current,r=_e(),r=sc(r),s=ei(r),s.callback=null,ni(i,s,r),i=r,e.current.lanes=i,fr(e,i),yn(e),t[ta]=e.current,Iu(t),new Zl(e)},no.version="19.2.3",no}var Gg;function Dw(){if(Gg)return wf.exports;Gg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),wf.exports=$w(),wf.exports}var zw=Dw();var qg="popstate";function Rw(n={}){function a(l,c){let{pathname:f,search:d,hash:p}=l.location;return od("",{pathname:f,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(l,c){return typeof c=="string"?c:xo(c)}return kw(a,o,null,n)}function Yt(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function dn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Ow(){return Math.random().toString(36).substring(2,10)}function Xg(n,a){return{usr:n.state,key:n.key,idx:a}}function od(n,a,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?er(a):a,state:o,key:a&&a.key||l||Ow()}}function xo({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function er(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function kw(n,a,o,l={}){let{window:c=document.defaultView,v5Compat:f=!1}=l,d=c.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function x(){p="POP";let R=v(),N=R==null?null:R-g;g=R,m&&m({action:p,location:$.location,delta:N})}function T(R,N){p="PUSH";let k=od($.location,R,N);g=v()+1;let O=Xg(k,g),K=$.createHref(k);try{d.pushState(O,"",K)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;c.location.assign(K)}f&&m&&m({action:p,location:$.location,delta:1})}function C(R,N){p="REPLACE";let k=od($.location,R,N);g=v();let O=Xg(k,g),K=$.createHref(k);d.replaceState(O,"",K),f&&m&&m({action:p,location:$.location,delta:0})}function D(R){return Bw(R)}let $={get action(){return p},get location(){return n(c,d)},listen(R){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(qg,x),m=R,()=>{c.removeEventListener(qg,x),m=null}},createHref(R){return a(c,R)},createURL:D,encodeLocation(R){let N=D(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:T,replace:C,go(R){return d.go(R)}};return $}function Bw(n,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:xo(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function ix(n,a,o="/"){return Nw(n,a,o,!1)}function Nw(n,a,o,l){let c=typeof a=="string"?er(a):a,f=qn(c.pathname||"/",o);if(f==null)return null;let d=ax(n);Lw(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=Qw(f);p=Pw(d[m],g,l)}return p}function ax(n,a=[],o=[],l="",c=!1){let f=(d,p,m=c,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(l)&&m)return;Yt(v.relativePath.startsWith(l),`Absolute route path "${v.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(l.length)}let x=Yn([l,v.relativePath]),T=o.concat(v);d.children&&d.children.length>0&&(Yt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),ax(d.children,a,T,x,m)),!(d.path==null&&!d.index)&&a.push({path:x,score:qw(x,d.index),routesMeta:T})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))f(d,p);else for(let m of rx(d.path))f(d,p,!0,m)}),a}function rx(n){let a=n.split("/");if(a.length===0)return[];let[o,...l]=a,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(l.length===0)return c?[f,""]:[f];let d=rx(l.join("/")),p=[];return p.push(...d.map(m=>m===""?f:[f,m].join("/"))),c&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function Lw(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:Xw(a.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var _w=/^:[\w-]+$/,Vw=3,Uw=2,Hw=1,Yw=10,Gw=-2,Pg=n=>n==="*";function qw(n,a){let o=n.split("/"),l=o.length;return o.some(Pg)&&(l+=Gw),a&&(l+=Uw),o.filter(c=>!Pg(c)).reduce((c,f)=>c+(_w.test(f)?Vw:f===""?Hw:Yw),l)}function Xw(n,a){return n.length===a.length&&n.slice(0,-1).every((l,c)=>l===a[c])?n[n.length-1]-a[a.length-1]:0}function Pw(n,a,o=!1){let{routesMeta:l}=n,c={},f="/",d=[];for(let p=0;p<l.length;++p){let m=l[p],g=p===l.length-1,v=f==="/"?a:a.slice(f.length)||"/",x=ws({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),T=m.route;if(!x&&g&&o&&!l[l.length-1].route.index&&(x=ws({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!x)return null;Object.assign(c,x.params),d.push({params:c,pathname:Yn([f,x.pathname]),pathnameBase:Ww(Yn([f,x.pathnameBase])),route:T}),x.pathnameBase!=="/"&&(f=Yn([f,x.pathnameBase]))}return d}function ws(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=Kw(n.path,n.caseSensitive,n.end),c=a.match(o);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:l.reduce((g,{paramName:v,isOptional:x},T)=>{if(v==="*"){let D=p[T]||"";d=f.slice(0,f.length-D.length).replace(/(.)\/+$/,"$1")}const C=p[T];return x&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:d,pattern:n}}function Kw(n,a=!1,o=!0){dn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(l.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),l]}function Qw(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return dn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function qn(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}var ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zw=n=>ox.test(n);function Fw(n,a="/"){let{pathname:o,search:l="",hash:c=""}=typeof n=="string"?er(n):n,f;if(o)if(Zw(o))f=o;else{if(o.includes("//")){let d=o;o=o.replace(/\/\/+/g,"/"),dn(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${o}`)}o.startsWith("/")?f=Kg(o.substring(1),"/"):f=Kg(o,a)}else f=a;return{pathname:f,search:Iw(l),hash:t3(c)}}function Kg(n,a){let o=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Ef(n,a,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jw(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function lx(n){let a=Jw(n);return a.map((o,l)=>l===a.length-1?o.pathname:o.pathnameBase)}function sx(n,a,o,l=!1){let c;typeof n=="string"?c=er(n):(c={...n},Yt(!c.pathname||!c.pathname.includes("?"),Ef("?","pathname","search",c)),Yt(!c.pathname||!c.pathname.includes("#"),Ef("#","pathname","hash",c)),Yt(!c.search||!c.search.includes("#"),Ef("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,p;if(d==null)p=o;else{let x=a.length-1;if(!l&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),x-=1;c.pathname=T.join("/")}p=x>=0?a[x]:"/"}let m=Fw(c,p),g=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var Yn=n=>n.join("/").replace(/\/\/+/g,"/"),Ww=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Iw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,t3=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,e3=class{constructor(n,a,o,l=!1){this.status=n,this.statusText=a||"",this.internal=l,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function n3(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function i3(n){return n.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ux(n,a){let o=n;if(typeof o!="string"||!ox.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let l=o,c=!1;if(cx)try{let f=new URL(window.location.href),d=o.startsWith("//")?new URL(f.protocol+o):new URL(o),p=qn(d.pathname,a);d.origin===f.origin&&p!=null?o=p+d.search+d.hash:c=!0}catch{dn(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fx=["POST","PUT","PATCH","DELETE"];new Set(fx);var a3=["GET",...fx];new Set(a3);var nr=j.createContext(null);nr.displayName="DataRouter";var ks=j.createContext(null);ks.displayName="DataRouterState";var r3=j.createContext(!1),dx=j.createContext({isTransitioning:!1});dx.displayName="ViewTransition";var o3=j.createContext(new Map);o3.displayName="Fetchers";var l3=j.createContext(null);l3.displayName="Await";var tn=j.createContext(null);tn.displayName="Navigation";var Eo=j.createContext(null);Eo.displayName="Location";var Pn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var Vd=j.createContext(null);Vd.displayName="RouteError";var hx="REACT_ROUTER_ERROR",s3="REDIRECT",c3="ROUTE_ERROR_RESPONSE";function u3(n){if(n.startsWith(`${hx}:${s3}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function f3(n){if(n.startsWith(`${hx}:${c3}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new e3(a.status,a.statusText,a.data)}catch{}}function d3(n,{relative:a}={}){Yt(Ao(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=j.useContext(tn),{hash:c,pathname:f,search:d}=Mo(n,{relative:a}),p=f;return o!=="/"&&(p=f==="/"?o:Yn([o,f])),l.createHref({pathname:p,search:d,hash:c})}function Ao(){return j.useContext(Eo)!=null}function Ii(){return Yt(Ao(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Eo).location}var px="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mx(n){j.useContext(tn).static||j.useLayoutEffect(n)}function ir(){let{isDataRoute:n}=j.useContext(Pn);return n?C3():h3()}function h3(){Yt(Ao(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(nr),{basename:a,navigator:o}=j.useContext(tn),{matches:l}=j.useContext(Pn),{pathname:c}=Ii(),f=JSON.stringify(lx(l)),d=j.useRef(!1);return mx(()=>{d.current=!0}),j.useCallback((m,g={})=>{if(dn(d.current,px),!d.current)return;if(typeof m=="number"){o.go(m);return}let v=sx(m,JSON.parse(f),c,g.relative==="path");n==null&&a!=="/"&&(v.pathname=v.pathname==="/"?a:Yn([a,v.pathname])),(g.replace?o.replace:o.push)(v,g.state,g)},[a,o,f,c,n])}j.createContext(null);function Mo(n,{relative:a}={}){let{matches:o}=j.useContext(Pn),{pathname:l}=Ii(),c=JSON.stringify(lx(o));return j.useMemo(()=>sx(n,JSON.parse(c),l,a==="path"),[n,c,l,a])}function p3(n,a){return gx(n,a)}function gx(n,a,o,l,c){Yt(Ao(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(tn),{matches:d}=j.useContext(Pn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",x=p&&p.route;{let k=x&&x.path||"";xx(g,!x||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let T=Ii(),C;if(a){let k=typeof a=="string"?er(a):a;Yt(v==="/"||k.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${k.pathname}" was given in the \`location\` prop.`),C=k}else C=T;let D=C.pathname||"/",$=D;if(v!=="/"){let k=v.replace(/^\//,"").split("/");$="/"+D.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=ix(n,{pathname:$});dn(x||R!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),dn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=v3(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},m,k.params),pathname:Yn([v,f.encodeLocation?f.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?v:Yn([v,f.encodeLocation?f.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),d,o,l,c);return a&&N?j.createElement(Eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},N):N}function m3(){let n=j3(),a=n3(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:f},"ErrorBoundary")," or"," ",j.createElement("code",{style:f},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},a),o?j.createElement("pre",{style:c},o):null,d)}var g3=j.createElement(m3,null),yx=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=f3(n.digest);o&&(n=o)}let a=n!==void 0?j.createElement(Pn.Provider,{value:this.props.routeContext},j.createElement(Vd.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?j.createElement(y3,{error:n},a):a}};yx.contextType=r3;var Af=new WeakMap;function y3({children:n,error:a}){let{basename:o}=j.useContext(tn);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let l=u3(a.digest);if(l){let c=Af.get(a);if(c)throw c;let f=ux(l.location,o);if(cx&&!Af.get(a))if(f.isExternal||l.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw Af.set(a,d),d}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return n}function x3({routeContext:n,match:a,children:o}){let l=j.useContext(nr);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),j.createElement(Pn.Provider,{value:n},o)}function v3(n,a=[],o=null,l=null,c=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let f=n,d=o?.errors;if(d!=null){let v=f.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);Yt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let p=!1,m=-1;if(o)for(let v=0;v<f.length;v++){let x=f[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=v),x.route.id){let{loaderData:T,errors:C}=o,D=x.route.loader&&!T.hasOwnProperty(x.route.id)&&(!C||C[x.route.id]===void 0);if(x.route.lazy||D){p=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}let g=o&&l?(v,x)=>{l(v,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:i3(o.matches),errorInfo:x})}:void 0;return f.reduceRight((v,x,T)=>{let C,D=!1,$=null,R=null;o&&(C=d&&x.route.id?d[x.route.id]:void 0,$=x.route.errorElement||g3,p&&(m<0&&T===0?(xx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,R=null):m===T&&(D=!0,R=x.route.hydrateFallbackElement||null)));let N=a.concat(f.slice(0,T+1)),k=()=>{let O;return C?O=$:D?O=R:x.route.Component?O=j.createElement(x.route.Component,null):x.route.element?O=x.route.element:O=v,j.createElement(x3,{match:x,routeContext:{outlet:v,matches:N,isDataRoute:o!=null},children:O})};return o&&(x.route.ErrorBoundary||x.route.errorElement||T===0)?j.createElement(yx,{location:o.location,revalidation:o.revalidation,component:$,error:C,children:k(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:g}):k()},null)}function Ud(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b3(n){let a=j.useContext(nr);return Yt(a,Ud(n)),a}function S3(n){let a=j.useContext(ks);return Yt(a,Ud(n)),a}function w3(n){let a=j.useContext(Pn);return Yt(a,Ud(n)),a}function Hd(n){let a=w3(n),o=a.matches[a.matches.length-1];return Yt(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function T3(){return Hd("useRouteId")}function j3(){let n=j.useContext(Vd),a=S3("useRouteError"),o=Hd("useRouteError");return n!==void 0?n:a.errors?.[o]}function C3(){let{router:n}=b3("useNavigate"),a=Hd("useNavigate"),o=j.useRef(!1);return mx(()=>{o.current=!0}),j.useCallback(async(c,f={})=>{dn(o.current,px),o.current&&(typeof c=="number"?await n.navigate(c):await n.navigate(c,{fromRouteId:a,...f}))},[n,a])}var Qg={};function xx(n,a,o){!a&&!Qg[n]&&(Qg[n]=!0,dn(!1,o))}j.memo(E3);function E3({routes:n,future:a,state:o,onError:l}){return gx(n,void 0,o,l,a)}function ld(n){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function A3({basename:n="/",children:a=null,location:o,navigationType:l="POP",navigator:c,static:f=!1,unstable_useTransitions:d}){Yt(!Ao(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:p,navigator:c,static:f,unstable_useTransitions:d,future:{}}),[p,c,f,d]);typeof o=="string"&&(o=er(o));let{pathname:g="/",search:v="",hash:x="",state:T=null,key:C="default"}=o,D=j.useMemo(()=>{let $=qn(g,p);return $==null?null:{location:{pathname:$,search:v,hash:x,state:T,key:C},navigationType:l}},[p,g,v,x,T,C,l]);return dn(D!=null,`<Router basename="${p}"> is not able to match the URL "${g}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:j.createElement(tn.Provider,{value:m},j.createElement(Eo.Provider,{children:a,value:D}))}function M3({children:n,location:a}){return p3(sd(n),a)}function sd(n,a=[]){let o=[];return j.Children.forEach(n,(l,c)=>{if(!j.isValidElement(l))return;let f=[...a,c];if(l.type===j.Fragment){o.push.apply(o,sd(l.props.children,f));return}Yt(l.type===ld,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=sd(l.props.children,f)),o.push(d)}),o}var fs="get",ds="application/x-www-form-urlencoded";function Bs(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function $3(n){return Bs(n)&&n.tagName.toLowerCase()==="button"}function D3(n){return Bs(n)&&n.tagName.toLowerCase()==="form"}function z3(n){return Bs(n)&&n.tagName.toLowerCase()==="input"}function R3(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function O3(n,a){return n.button===0&&(!a||a==="_self")&&!R3(n)}var Jl=null;function k3(){if(Jl===null)try{new FormData(document.createElement("form"),0),Jl=!1}catch{Jl=!0}return Jl}var B3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mf(n){return n!=null&&!B3.has(n)?(dn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ds}"`),null):n}function N3(n,a){let o,l,c,f,d;if(D3(n)){let p=n.getAttribute("action");l=p?qn(p,a):null,o=n.getAttribute("method")||fs,c=Mf(n.getAttribute("enctype"))||ds,f=new FormData(n)}else if($3(n)||z3(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(l=m?qn(m,a):null,o=n.getAttribute("formmethod")||p.getAttribute("method")||fs,c=Mf(n.getAttribute("formenctype"))||Mf(p.getAttribute("enctype"))||ds,f=new FormData(p,n),!k3()){let{name:g,type:v,value:x}=n;if(v==="image"){let T=g?`${g}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else g&&f.append(g,x)}}else{if(Bs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=fs,l=null,c=ds,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:l,method:o.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yd(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function L3(n,a,o,l){let c=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:a&&qn(c.pathname,a)==="/"?c.pathname=`${a.replace(/\/$/,"")}/_root.${l}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${l}`,c}async function _3(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function V3(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function U3(n,a,o){let l=await Promise.all(n.map(async c=>{let f=a.routes[c.route.id];if(f){let d=await _3(f,o);return d.links?d.links():[]}return[]}));return q3(l.flat(1).filter(V3).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Zg(n,a,o,l,c,f){let d=(m,g)=>o[g]?m.route.id!==o[g].route.id:!0,p=(m,g)=>o[g].pathname!==m.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==m.params["*"];return f==="assets"?a.filter((m,g)=>d(m,g)||p(m,g)):f==="data"?a.filter((m,g)=>{let v=l.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function H3(n,a,{includeHydrateFallback:o}={}){return Y3(n.map(l=>{let c=a.routes[l.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Y3(n){return[...new Set(n)]}function G3(n){let a={},o=Object.keys(n).sort();for(let l of o)a[l]=n[l];return a}function q3(n,a){let o=new Set;return new Set(a),n.reduce((l,c)=>{let f=JSON.stringify(G3(c));return o.has(f)||(o.add(f),l.push({key:f,link:c})),l},[])}function vx(){let n=j.useContext(nr);return Yd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function X3(){let n=j.useContext(ks);return Yd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gd=j.createContext(void 0);Gd.displayName="FrameworkContext";function bx(){let n=j.useContext(Gd);return Yd(n,"You must render this element inside a <HydratedRouter> element"),n}function P3(n,a){let o=j.useContext(Gd),[l,c]=j.useState(!1),[f,d]=j.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:x}=a,T=j.useRef(null);j.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let $=N=>{N.forEach(k=>{d(k.isIntersecting)})},R=new IntersectionObserver($,{threshold:.5});return T.current&&R.observe(T.current),()=>{R.disconnect()}}},[n]),j.useEffect(()=>{if(l){let $=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout($)}}},[l]);let C=()=>{c(!0)},D=()=>{c(!1),d(!1)};return o?n!=="intent"?[f,T,{}]:[f,T,{onFocus:io(p,C),onBlur:io(m,D),onMouseEnter:io(g,C),onMouseLeave:io(v,D),onTouchStart:io(x,C)}]:[!1,T,{}]}function io(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function K3({page:n,...a}){let{router:o}=vx(),l=j.useMemo(()=>ix(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?j.createElement(Z3,{page:n,matches:l,...a}):null}function Q3(n){let{manifest:a,routeModules:o}=bx(),[l,c]=j.useState([]);return j.useEffect(()=>{let f=!1;return U3(n,a,o).then(d=>{f||c(d)}),()=>{f=!0}},[n,a,o]),l}function Z3({page:n,matches:a,...o}){let l=Ii(),{future:c,manifest:f,routeModules:d}=bx(),{basename:p}=vx(),{loaderData:m,matches:g}=X3(),v=j.useMemo(()=>Zg(n,a,g,f,l,"data"),[n,a,g,f,l]),x=j.useMemo(()=>Zg(n,a,g,f,l,"assets"),[n,a,g,f,l]),T=j.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let $=new Set,R=!1;if(a.forEach(k=>{let O=f.routes[k.route.id];!O||!O.hasLoader||(!v.some(K=>K.route.id===k.route.id)&&k.route.id in m&&d[k.route.id]?.shouldRevalidate||O.hasClientLoader?R=!0:$.add(k.route.id))}),$.size===0)return[];let N=L3(n,p,c.unstable_trailingSlashAwareDataRequests,"data");return R&&$.size>0&&N.searchParams.set("_routes",a.filter(k=>$.has(k.route.id)).map(k=>k.route.id).join(",")),[N.pathname+N.search]},[p,c.unstable_trailingSlashAwareDataRequests,m,l,f,v,a,n,d]),C=j.useMemo(()=>H3(x,f),[x,f]),D=Q3(x);return j.createElement(j.Fragment,null,T.map($=>j.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...o})),C.map($=>j.createElement("link",{key:$,rel:"modulepreload",href:$,...o})),D.map(({key:$,link:R})=>j.createElement("link",{key:$,nonce:o.nonce,...R})))}function F3(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var J3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J3&&(window.__reactRouterVersion="7.12.0")}catch{}function W3({basename:n,children:a,unstable_useTransitions:o,window:l}){let c=j.useRef();c.current==null&&(c.current=Rw({window:l,v5Compat:!0}));let f=c.current,[d,p]=j.useState({action:f.action,location:f.location}),m=j.useCallback(g=>{o===!1?p(g):j.startTransition(()=>p(g))},[o]);return j.useLayoutEffect(()=>f.listen(m),[f,m]),j.createElement(A3,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:o})}var Sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ns=j.forwardRef(function({onClick:a,discover:o="render",prefetch:l="none",relative:c,reloadDocument:f,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:T,...C},D){let{basename:$,unstable_useTransitions:R}=j.useContext(tn),N=typeof g=="string"&&Sx.test(g),k=ux(g,$);g=k.to;let O=d3(g,{relative:c}),[K,P,Q]=P3(l,C),U=n5(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:c,viewTransition:x,unstable_defaultShouldRevalidate:T,unstable_useTransitions:R});function F(Ct){a&&a(Ct),Ct.defaultPrevented||U(Ct)}let lt=j.createElement("a",{...C,...Q,href:k.absoluteURL||O,onClick:k.isExternal||f?a:F,ref:F3(D,P),target:m,"data-discover":!N&&o==="render"?"true":void 0});return K&&!N?j.createElement(j.Fragment,null,lt,j.createElement(K3,{page:O})):lt});Ns.displayName="Link";var I3=j.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:d,viewTransition:p,children:m,...g},v){let x=Mo(d,{relative:g.relative}),T=Ii(),C=j.useContext(ks),{navigator:D,basename:$}=j.useContext(tn),R=C!=null&&l5(x)&&p===!0,N=D.encodeLocation?D.encodeLocation(x).pathname:x.pathname,k=T.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;o||(k=k.toLowerCase(),O=O?O.toLowerCase():null,N=N.toLowerCase()),O&&$&&(O=qn(O,$)||O);const K=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let P=k===N||!c&&k.startsWith(N)&&k.charAt(K)==="/",Q=O!=null&&(O===N||!c&&O.startsWith(N)&&O.charAt(N.length)==="/"),U={isActive:P,isPending:Q,isTransitioning:R},F=P?a:void 0,lt;typeof l=="function"?lt=l(U):lt=[l,P?"active":null,Q?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Ct=typeof f=="function"?f(U):f;return j.createElement(Ns,{...g,"aria-current":F,className:lt,ref:v,style:Ct,to:d,viewTransition:p},typeof m=="function"?m(U):m)});I3.displayName="NavLink";var t5=j.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:c,state:f,method:d=fs,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:T,...C},D)=>{let{unstable_useTransitions:$}=j.useContext(tn),R=r5(),N=o5(p,{relative:g}),k=d.toLowerCase()==="get"?"get":"post",O=typeof p=="string"&&Sx.test(p),K=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let Q=P.nativeEvent.submitter,U=Q?.getAttribute("formmethod")||d,F=()=>R(Q||P.currentTarget,{fetcherKey:a,method:U,navigate:o,replace:c,state:f,relative:g,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:T});$&&o!==!1?j.startTransition(()=>F()):F()};return j.createElement("form",{ref:D,method:k,action:N,onSubmit:l?m:K,...C,"data-discover":!O&&n==="render"?"true":void 0})});t5.displayName="Form";function e5(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wx(n){let a=j.useContext(nr);return Yt(a,e5(n)),a}function n5(n,{target:a,replace:o,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let g=ir(),v=Ii(),x=Mo(n,{relative:f});return j.useCallback(T=>{if(O3(T,a)){T.preventDefault();let C=o!==void 0?o:xo(v)===xo(x),D=()=>g(n,{replace:C,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:p});m?j.startTransition(()=>D()):D()}},[v,g,x,o,l,a,n,c,f,d,p,m])}var i5=0,a5=()=>`__${String(++i5)}__`;function r5(){let{router:n}=wx("useSubmit"),{basename:a}=j.useContext(tn),o=T3(),l=n.fetch,c=n.navigate;return j.useCallback(async(f,d={})=>{let{action:p,method:m,encType:g,formData:v,body:x}=N3(f,a);if(d.navigate===!1){let T=d.fetcherKey||a5();await l(T,o,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:v,body:x,formMethod:d.method||m,formEncType:d.encType||g,flushSync:d.flushSync})}else await c(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:v,body:x,formMethod:d.method||m,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,c,a,o])}function o5(n,{relative:a}={}){let{basename:o}=j.useContext(tn),l=j.useContext(Pn);Yt(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),f={...Mo(n||".",{relative:a})},d=Ii();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Yn([o,f.pathname])),xo(f)}function l5(n,{relative:a}={}){let o=j.useContext(dx);Yt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=wx("useViewTransitionState"),c=Mo(n,{relative:a});if(!o.isTransitioning)return!1;let f=qn(o.currentLocation.pathname,l)||o.currentLocation.pathname,d=qn(o.nextLocation.pathname,l)||o.nextLocation.pathname;return ws(c.pathname,d)!=null||ws(c.pathname,f)!=null}const Tx=j.createContext(),Ls=()=>{const n=j.useContext(Tx);if(!n)throw new Error("useApp must be used within an AppProvider");return n},s5=({children:n})=>{const[a,o]=j.useState(5e4),[l,c]=j.useState(!1),[f,d]=j.useState(!1);j.useEffect(()=>{const C=setInterval(()=>{const D=Math.floor(Math.random()*5)+1;o($=>$+D)},Math.random()*3e3+2e3);return()=>clearInterval(C)},[]);const p=j.useCallback(()=>{c(!0)},[]),m=j.useCallback(()=>{c(!1)},[]),g=j.useCallback(()=>{d(!0)},[]),v=j.useCallback(()=>{d(!1)},[]),T={playerCount:a,jackpot:a,isSignUpModalOpen:l,isLoginModalOpen:f,openSignUpModal:p,closeSignUpModal:m,openLoginModal:g,closeLoginModal:v};return h.jsx(Tx.Provider,{value:T,children:n})};var ge=function(){return ge=Object.assign||function(a){for(var o,l=1,c=arguments.length;l<c;l++){o=arguments[l];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(a[f]=o[f])}return a},ge.apply(this,arguments)};function Pa(n,a,o){if(o||arguments.length===2)for(var l=0,c=a.length,f;l<c;l++)(f||!(l in a))&&(f||(f=Array.prototype.slice.call(a,0,l)),f[l]=a[l]);return n.concat(f||Array.prototype.slice.call(a))}var _t="-ms-",so="-moz-",Mt="-webkit-",jx="comm",_s="rule",qd="decl",c5="@import",u5="@namespace",Cx="@keyframes",f5="@layer",Ex=Math.abs,Xd=String.fromCharCode,cd=Object.assign;function d5(n,a){return re(n,0)^45?(((a<<2^re(n,0))<<2^re(n,1))<<2^re(n,2))<<2^re(n,3):0}function Ax(n){return n.trim()}function Un(n,a){return(n=a.exec(n))?n[0]:n}function pt(n,a,o){return n.replace(a,o)}function hs(n,a,o){return n.indexOf(a,o)}function re(n,a){return n.charCodeAt(a)|0}function Wi(n,a,o){return n.slice(a,o)}function un(n){return n.length}function Mx(n){return n.length}function ro(n,a){return a.push(n),n}function h5(n,a){return n.map(a).join("")}function Fg(n,a){return n.filter(function(o){return!Un(o,a)})}var Vs=1,Ka=1,$x=0,Ie=0,ne=0,ar="";function Us(n,a,o,l,c,f,d,p){return{value:n,root:a,parent:o,type:l,props:c,children:f,line:Vs,column:Ka,length:d,return:"",siblings:p}}function xi(n,a){return cd(Us("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function _a(n){for(;n.root;)n=xi(n.root,{children:[n]});ro(n,n.siblings)}function p5(){return ne}function m5(){return ne=Ie>0?re(ar,--Ie):0,Ka--,ne===10&&(Ka=1,Vs--),ne}function fn(){return ne=Ie<$x?re(ar,Ie++):0,Ka++,ne===10&&(Ka=1,Vs++),ne}function bi(){return re(ar,Ie)}function ps(){return Ie}function Hs(n,a){return Wi(ar,n,a)}function vo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g5(n){return Vs=Ka=1,$x=un(ar=n),Ie=0,[]}function y5(n){return ar="",n}function $f(n){return Ax(Hs(Ie-1,ud(n===91?n+2:n===40?n+1:n)))}function x5(n){for(;(ne=bi())&&ne<33;)fn();return vo(n)>2||vo(ne)>3?"":" "}function v5(n,a){for(;--a&&fn()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Hs(n,ps()+(a<6&&bi()==32&&fn()==32))}function ud(n){for(;fn();)switch(ne){case n:return Ie;case 34:case 39:n!==34&&n!==39&&ud(ne);break;case 40:n===41&&ud(n);break;case 92:fn();break}return Ie}function b5(n,a){for(;fn()&&n+ne!==57;)if(n+ne===84&&bi()===47)break;return"/*"+Hs(a,Ie-1)+"*"+Xd(n===47?n:fn())}function S5(n){for(;!vo(bi());)fn();return Hs(n,Ie)}function w5(n){return y5(ms("",null,null,null,[""],n=g5(n),0,[0],n))}function ms(n,a,o,l,c,f,d,p,m){for(var g=0,v=0,x=d,T=0,C=0,D=0,$=1,R=1,N=1,k=0,O="",K=c,P=f,Q=l,U=O;R;)switch(D=k,k=fn()){case 40:if(D!=108&&re(U,x-1)==58){hs(U+=pt($f(k),"&","&\f"),"&\f",Ex(g?p[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:U+=$f(k);break;case 9:case 10:case 13:case 32:U+=x5(D);break;case 92:U+=v5(ps()-1,7);continue;case 47:switch(bi()){case 42:case 47:ro(T5(b5(fn(),ps()),a,o,m),m),(vo(D||1)==5||vo(bi()||1)==5)&&un(U)&&Wi(U,-1,void 0)!==" "&&(U+=" ");break;default:U+="/"}break;case 123*$:p[g++]=un(U)*N;case 125*$:case 59:case 0:switch(k){case 0:case 125:R=0;case 59+v:N==-1&&(U=pt(U,/\f/g,"")),C>0&&(un(U)-x||$===0&&D===47)&&ro(C>32?Wg(U+";",l,o,x-1,m):Wg(pt(U," ","")+";",l,o,x-2,m),m);break;case 59:U+=";";default:if(ro(Q=Jg(U,a,o,g,v,c,p,O,K=[],P=[],x,f),f),k===123)if(v===0)ms(U,a,Q,Q,K,f,x,p,P);else{switch(T){case 99:if(re(U,3)===110)break;case 108:if(re(U,2)===97)break;default:v=0;case 100:case 109:case 115:}v?ms(n,Q,Q,l&&ro(Jg(n,Q,Q,0,0,c,p,O,c,K=[],x,P),P),c,P,x,p,l?K:P):ms(U,Q,Q,Q,[""],P,0,p,P)}}g=v=C=0,$=N=1,O=U="",x=d;break;case 58:x=1+un(U),C=D;default:if($<1){if(k==123)--$;else if(k==125&&$++==0&&m5()==125)continue}switch(U+=Xd(k),k*$){case 38:N=v>0?1:(U+="\f",-1);break;case 44:p[g++]=(un(U)-1)*N,N=1;break;case 64:bi()===45&&(U+=$f(fn())),T=bi(),v=x=un(O=U+=S5(ps())),k++;break;case 45:D===45&&un(U)==2&&($=0)}}return f}function Jg(n,a,o,l,c,f,d,p,m,g,v,x){for(var T=c-1,C=c===0?f:[""],D=Mx(C),$=0,R=0,N=0;$<l;++$)for(var k=0,O=Wi(n,T+1,T=Ex(R=d[$])),K=n;k<D;++k)(K=Ax(R>0?C[k]+" "+O:pt(O,/&\f/g,C[k])))&&(m[N++]=K);return Us(n,a,o,c===0?_s:p,m,g,v,x)}function T5(n,a,o,l){return Us(n,a,o,jx,Xd(p5()),Wi(n,2,-2),0,l)}function Wg(n,a,o,l,c){return Us(n,a,o,qd,Wi(n,0,l),Wi(n,l+1,-1),l,c)}function Dx(n,a,o){switch(d5(n,a)){case 5103:return Mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Mt+n+n;case 4855:return Mt+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return so+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+n+so+n+_t+n+n;case 5936:switch(re(n,a+11)){case 114:return Mt+n+_t+pt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Mt+n+_t+pt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Mt+n+_t+pt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Mt+n+_t+n+n;case 6165:return Mt+n+_t+"flex-"+n+n;case 5187:return Mt+n+pt(n,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+_t+"flex-$1$2")+n;case 5443:return Mt+n+_t+"flex-item-"+pt(n,/flex-|-self/g,"")+(Un(n,/flex-|baseline/)?"":_t+"grid-row-"+pt(n,/flex-|-self/g,""))+n;case 4675:return Mt+n+_t+"flex-line-pack"+pt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Mt+n+_t+pt(n,"shrink","negative")+n;case 5292:return Mt+n+_t+pt(n,"basis","preferred-size")+n;case 6060:return Mt+"box-"+pt(n,"-grow","")+Mt+n+_t+pt(n,"grow","positive")+n;case 4554:return Mt+pt(n,/([^-])(transform)/g,"$1"+Mt+"$2")+n;case 6187:return pt(pt(pt(n,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),n,"")+n;case 5495:case 3959:return pt(n,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return pt(pt(n,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+_t+"flex-pack:$3"),/space-between/,"justify")+Mt+n+n;case 4200:if(!Un(n,/flex-|baseline/))return _t+"grid-column-align"+Wi(n,a)+n;break;case 2592:case 3360:return _t+pt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(l,c){return a=c,Un(l.props,/grid-\w+-end/)})?~hs(n+(o=o[a].value),"span",0)?n:_t+pt(n,"-start","")+n+_t+"grid-row-span:"+(~hs(o,"span",0)?Un(o,/\d+/):+Un(o,/\d+/)-+Un(n,/\d+/))+";":_t+pt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(l){return Un(l.props,/grid-\w+-start/)})?n:_t+pt(pt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return pt(n,/(.+)-inline(.+)/,Mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(n)-1-a>6)switch(re(n,a+1)){case 109:if(re(n,a+4)!==45)break;case 102:return pt(n,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+so+(re(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~hs(n,"stretch",0)?Dx(pt(n,"stretch","fill-available"),a,o)+n:n}break;case 5152:case 5920:return pt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,f,d,p,m,g){return _t+c+":"+f+g+(d?_t+c+"-span:"+(p?m:+m-+f)+g:"")+n});case 4949:if(re(n,a+6)===121)return pt(n,":",":"+Mt)+n;break;case 6444:switch(re(n,re(n,14)===45?18:11)){case 120:return pt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(re(n,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+_t+"$2box$3")+n;case 100:return pt(n,":",":"+_t)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pt(n,"scroll-","scroll-snap-")+n}return n}function Ts(n,a){for(var o="",l=0;l<n.length;l++)o+=a(n[l],l,n,a)||"";return o}function j5(n,a,o,l){switch(n.type){case f5:if(n.children.length)break;case c5:case u5:case qd:return n.return=n.return||n.value;case jx:return"";case Cx:return n.return=n.value+"{"+Ts(n.children,l)+"}";case _s:if(!un(n.value=n.props.join(",")))return""}return un(o=Ts(n.children,l))?n.return=n.value+"{"+o+"}":""}function C5(n){var a=Mx(n);return function(o,l,c,f){for(var d="",p=0;p<a;p++)d+=n[p](o,l,c,f)||"";return d}}function E5(n){return function(a){a.root||(a=a.return)&&n(a)}}function A5(n,a,o,l){if(n.length>-1&&!n.return)switch(n.type){case qd:n.return=Dx(n.value,n.length,o);return;case Cx:return Ts([xi(n,{value:pt(n.value,"@","@"+Mt)})],l);case _s:if(n.length)return h5(o=n.props,function(c){switch(Un(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_a(xi(n,{props:[pt(c,/:(read-\w+)/,":"+so+"$1")]})),_a(xi(n,{props:[c]})),cd(n,{props:Fg(o,l)});break;case"::placeholder":_a(xi(n,{props:[pt(c,/:(plac\w+)/,":"+Mt+"input-$1")]})),_a(xi(n,{props:[pt(c,/:(plac\w+)/,":"+so+"$1")]})),_a(xi(n,{props:[pt(c,/:(plac\w+)/,_t+"input-$1")]})),_a(xi(n,{props:[c]})),cd(n,{props:Fg(o,l)});break}return""})}}var M5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ve={},Qa=typeof process<"u"&&Ve!==void 0&&(Ve.REACT_APP_SC_ATTR||Ve.SC_ATTR)||"data-styled",zx="active",Rx="data-styled-version",Ys="6.2.0",Pd=`/*!sc*/
`,js=typeof window<"u"&&typeof document<"u",$5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==""?Ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.SC_DISABLE_SPEEDY!==void 0&&Ve.SC_DISABLE_SPEEDY!==""&&Ve.SC_DISABLE_SPEEDY!=="false"&&Ve.SC_DISABLE_SPEEDY),D5={},Gs=Object.freeze([]),Za=Object.freeze({});function Ox(n,a,o){return o===void 0&&(o=Za),n.theme!==o.theme&&n.theme||a||o.theme}var kx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),z5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,R5=/(^-|-$)/g;function Ig(n){return n.replace(z5,"-").replace(R5,"")}var O5=/(a)(d)/gi,Wl=52,ty=function(n){return String.fromCharCode(n+(n>25?39:97))};function fd(n){var a,o="";for(a=Math.abs(n);a>Wl;a=a/Wl|0)o=ty(a%Wl)+o;return(ty(a%Wl)+o).replace(O5,"$1-$2")}var Df,Bx=5381,Va=function(n,a){for(var o=a.length;o;)n=33*n^a.charCodeAt(--o);return n},Nx=function(n){return Va(Bx,n)};function Kd(n){return fd(Nx(n)>>>0)}function k5(n){return n.displayName||n.name||"Component"}function zf(n){return typeof n=="string"&&!0}var Lx=typeof Symbol=="function"&&Symbol.for,_x=Lx?Symbol.for("react.memo"):60115,B5=Lx?Symbol.for("react.forward_ref"):60112,N5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_5=((Df={})[B5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Df[_x]=Vx,Df);function ey(n){return("type"in(a=n)&&a.type.$$typeof)===_x?Vx:"$$typeof"in n?_5[n.$$typeof]:N5;var a}var V5=Object.defineProperty,U5=Object.getOwnPropertyNames,ny=Object.getOwnPropertySymbols,H5=Object.getOwnPropertyDescriptor,Y5=Object.getPrototypeOf,iy=Object.prototype;function Ux(n,a,o){if(typeof a!="string"){if(iy){var l=Y5(a);l&&l!==iy&&Ux(n,l,o)}var c=U5(a);ny&&(c=c.concat(ny(a)));for(var f=ey(n),d=ey(a),p=0;p<c.length;++p){var m=c[p];if(!(m in L5||o&&o[m]||d&&m in d||f&&m in f)){var g=H5(a,m);try{V5(n,m,g)}catch{}}}}return n}function Fa(n){return typeof n=="function"}function Qd(n){return typeof n=="object"&&"styledComponentId"in n}function Qi(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function Cs(n,a){if(n.length===0)return"";for(var o=n[0],l=1;l<n.length;l++)o+=n[l];return o}function bo(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function dd(n,a,o){if(o===void 0&&(o=!1),!o&&!bo(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)n[l]=dd(n[l],a[l]);else if(bo(a))for(var l in a)n[l]=dd(n[l],a[l]);return n}function Zd(n,a){Object.defineProperty(n,"toString",{value:a})}function $o(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var G5=(function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var o=0,l=0;l<a;l++)o+=this.groupSizes[l];return o},n.prototype.insertRules=function(a,o){if(a>=this.groupSizes.length){for(var l=this.groupSizes,c=l.length,f=c;a>=f;)if((f<<=1)<0)throw $o(16,"".concat(a));this.groupSizes=new Uint32Array(f),this.groupSizes.set(l),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(a+1),m=(d=0,o.length);d<m;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[a]++,p++)},n.prototype.clearGroup=function(a){if(a<this.length){var o=this.groupSizes[a],l=this.indexOfGroup(a),c=l+o;this.groupSizes[a]=0;for(var f=l;f<c;f++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(a){var o="";if(a>=this.length||this.groupSizes[a]===0)return o;for(var l=this.groupSizes[a],c=this.indexOfGroup(a),f=c+l,d=c;d<f;d++)o+="".concat(this.tag.getRule(d)).concat(Pd);return o},n})(),gs=new Map,Es=new Map,ys=1,Il=function(n){if(gs.has(n))return gs.get(n);for(;Es.has(ys);)ys++;var a=ys++;return gs.set(n,a),Es.set(a,n),a},q5=function(n,a){ys=a+1,gs.set(n,a),Es.set(a,n)},X5="style[".concat(Qa,"][").concat(Rx,'="').concat(Ys,'"]'),P5=new RegExp("^".concat(Qa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),K5=function(n,a,o){for(var l,c=o.split(","),f=0,d=c.length;f<d;f++)(l=c[f])&&n.registerName(a,l)},Q5=function(n,a){for(var o,l=((o=a.textContent)!==null&&o!==void 0?o:"").split(Pd),c=[],f=0,d=l.length;f<d;f++){var p=l[f].trim();if(p){var m=p.match(P5);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(q5(v,g),K5(n,v,m[3]),n.getTag().insertRules(g,c)),c.length=0}else c.push(p)}}},ay=function(n){for(var a=document.querySelectorAll(X5),o=0,l=a.length;o<l;o++){var c=a[o];c&&c.getAttribute(Qa)!==zx&&(Q5(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function Z5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hx=function(n){var a=document.head,o=n||a,l=document.createElement("style"),c=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(Qa,"]")));return m[m.length-1]})(o),f=c!==void 0?c.nextSibling:null;l.setAttribute(Qa,zx),l.setAttribute(Rx,Ys);var d=Z5();return d&&l.setAttribute("nonce",d),o.insertBefore(l,f),l},F5=(function(){function n(a){this.element=Hx(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,c=0,f=l.length;c<f;c++){var d=l[c];if(d.ownerNode===o)return d}throw $o(17)})(this.element),this.length=0}return n.prototype.insertRule=function(a,o){try{return this.sheet.insertRule(o,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var o=this.sheet.cssRules[a];return o&&o.cssText?o.cssText:""},n})(),J5=(function(){function n(a){this.element=Hx(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,o){if(a<=this.length&&a>=0){var l=document.createTextNode(o);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n})(),W5=(function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,o){return a<=this.length&&(this.rules.splice(a,0,o),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n})(),ry=js,I5={isServer:!js,useCSSOMInjection:!$5},As=(function(){function n(a,o,l){a===void 0&&(a=Za),o===void 0&&(o={});var c=this;this.options=ge(ge({},I5),a),this.gs=o,this.names=new Map(l),this.server=!!a.isServer,!this.server&&js&&ry&&(ry=!1,ay(this)),Zd(this,function(){return(function(f){for(var d=f.getTag(),p=d.length,m="",g=function(x){var T=(function(N){return Es.get(N)})(x);if(T===void 0)return"continue";var C=f.names.get(T),D=d.getGroup(x);if(C===void 0||!C.size||D.length===0)return"continue";var $="".concat(Qa,".g").concat(x,'[id="').concat(T,'"]'),R="";C!==void 0&&C.forEach(function(N){N.length>0&&(R+="".concat(N,","))}),m+="".concat(D).concat($,'{content:"').concat(R,'"}').concat(Pd)},v=0;v<p;v++)g(v);return m})(c)})}return n.registerId=function(a){return Il(a)},n.prototype.rehydrate=function(){!this.server&&js&&ay(this)},n.prototype.reconstructWithOptions=function(a,o){return o===void 0&&(o=!0),new n(ge(ge({},this.options),a),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(o){var l=o.useCSSOMInjection,c=o.target;return o.isServer?new W5(c):l?new F5(c):new J5(c)})(this.options),new G5(a)));var a},n.prototype.hasNameForId=function(a,o){return this.names.has(a)&&this.names.get(a).has(o)},n.prototype.registerName=function(a,o){if(Il(a),this.names.has(a))this.names.get(a).add(o);else{var l=new Set;l.add(o),this.names.set(a,l)}},n.prototype.insertRules=function(a,o,l){this.registerName(a,o),this.getTag().insertRules(Il(a),l)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(Il(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n})(),tT=/&/g,eT=/^\s*\/\/.*$/gm;function Yx(n,a){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(a," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(a," ")),o.props=o.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Yx(o.children,a)),o})}function nT(n){var a,o,l,c=Za,f=c.options,d=f===void 0?Za:f,p=c.plugins,m=p===void 0?Gs:p,g=function(T,C,D){return D.startsWith(o)&&D.endsWith(o)&&D.replaceAll(o,"").length>0?".".concat(a):T},v=m.slice();v.push(function(T){T.type===_s&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(tT,o).replace(l,g))}),d.prefix&&v.push(A5),v.push(j5);var x=function(T,C,D,$){C===void 0&&(C=""),D===void 0&&(D=""),$===void 0&&($="&"),a=$,o=C,l=new RegExp("\\".concat(o,"\\b"),"g");var R=T.replace(eT,""),N=w5(D||C?"".concat(D," ").concat(C," { ").concat(R," }"):R);d.namespace&&(N=Yx(N,d.namespace));var k=[];return Ts(N,C5(v.concat(E5(function(O){return k.push(O)})))),k};return x.hash=m.length?m.reduce(function(T,C){return C.name||$o(15),Va(T,C.name)},Bx).toString():"",x}var iT=new As,hd=nT(),Gx=Hn.createContext({shouldForwardProp:void 0,styleSheet:iT,stylis:hd});Gx.Consumer;Hn.createContext(void 0);function pd(){return j.useContext(Gx)}var qx=(function(){function n(a,o){var l=this;this.inject=function(c,f){f===void 0&&(f=hd);var d=l.name+f.hash;c.hasNameForId(l.id,d)||c.insertRules(l.id,d,f(l.rules,d,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=o,Zd(this,function(){throw $o(12,String(l.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=hd),this.name+a.hash},n})(),aT=function(n){return n>="A"&&n<="Z"};function oy(n){for(var a="",o=0;o<n.length;o++){var l=n[o];if(o===1&&l==="-"&&n[0]==="-")return n;aT(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var Xx=function(n){return n==null||n===!1||n===""},Px=function(n){var a,o,l=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!Xx(f)&&(Array.isArray(f)&&f.isCss||Fa(f)?l.push("".concat(oy(c),":"),f,";"):bo(f)?l.push.apply(l,Pa(Pa(["".concat(c," {")],Px(f),!1),["}"],!1)):l.push("".concat(oy(c),": ").concat((a=c,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||a in M5||a.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return l};function wi(n,a,o,l){if(Xx(n))return[];if(Qd(n))return[".".concat(n.styledComponentId)];if(Fa(n)){if(!Fa(f=n)||f.prototype&&f.prototype.isReactComponent||!a)return[n];var c=n(a);return wi(c,a,o,l)}var f;return n instanceof qx?o?(n.inject(o,l),[n.getName(l)]):[n]:bo(n)?Px(n):Array.isArray(n)?Array.prototype.concat.apply(Gs,n.map(function(d){return wi(d,a,o,l)})):[n.toString()]}function Kx(n){for(var a=0;a<n.length;a+=1){var o=n[a];if(Fa(o)&&!Qd(o))return!1}return!0}var rT=Nx(Ys),oT=(function(){function n(a,o,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Kx(a),this.componentId=o,this.baseHash=Va(rT,o),this.baseStyle=l,As.registerId(o)}return n.prototype.generateAndInjectStyles=function(a,o,l){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,o,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Qi(c,this.staticRulesId);else{var f=Cs(wi(this.rules,a,o,l)),d=fd(Va(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=l(f,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}c=Qi(c,d),this.staticRulesId=d}else{for(var m=Va(this.baseHash,l.hash),g="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")g+=x;else if(x){var T=Cs(wi(x,a,o,l));m=Va(m,T+v),g+=T}}if(g){var C=fd(m>>>0);o.hasNameForId(this.componentId,C)||o.insertRules(this.componentId,C,l(g,".".concat(C),void 0,this.componentId)),c=Qi(c,C)}}return c},n})(),Fd=Hn.createContext(void 0);Fd.Consumer;var Rf={};function lT(n,a,o){var l=Qd(n),c=n,f=!zf(n),d=a.attrs,p=d===void 0?Gs:d,m=a.componentId,g=m===void 0?(function(K,P){var Q=typeof K!="string"?"sc":Ig(K);Rf[Q]=(Rf[Q]||0)+1;var U="".concat(Q,"-").concat(Kd(Ys+Q+Rf[Q]));return P?"".concat(P,"-").concat(U):U})(a.displayName,a.parentComponentId):m,v=a.displayName,x=v===void 0?(function(K){return zf(K)?"styled.".concat(K):"Styled(".concat(k5(K),")")})(n):v,T=a.displayName&&a.componentId?"".concat(Ig(a.displayName),"-").concat(a.componentId):a.componentId||g,C=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p,D=a.shouldForwardProp;if(l&&c.shouldForwardProp){var $=c.shouldForwardProp;if(a.shouldForwardProp){var R=a.shouldForwardProp;D=function(K,P){return $(K,P)&&R(K,P)}}else D=$}var N=new oT(o,T,l?c.componentStyle:void 0);function k(K,P){return(function(Q,U,F){var lt=Q.attrs,Ct=Q.componentStyle,Gt=Q.defaultProps,Kt=Q.foldedComponentIds,an=Q.styledComponentId,Se=Q.target,pe=Hn.useContext(Fd),Y=pd(),Z=Q.shouldForwardProp||Y.shouldForwardProp,it=Ox(U,pe,Gt)||Za,ct=(function(st,ut,bt){for(var Qt,Et=ge(ge({},ut),{className:void 0,theme:bt}),bn=0;bn<st.length;bn+=1){var Sn=Fa(Qt=st[bn])?Qt(Et):Qt;for(var hn in Sn)hn==="className"?Et.className=Qi(Et.className,Sn[hn]):hn==="style"?Et.style=ge(ge({},Et.style),Sn[hn]):Et[hn]=Sn[hn]}return"className"in ut&&typeof ut.className=="string"&&(Et.className=Qi(Et.className,ut.className)),Et})(lt,U,it),mt=ct.as||Se,A={};for(var G in ct)ct[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ct.theme===it||(G==="forwardedAs"?A.as=ct.forwardedAs:Z&&!Z(G,mt)||(A[G]=ct[G]));var W=(function(st,ut){var bt=pd(),Qt=st.generateAndInjectStyles(ut,bt.styleSheet,bt.stylis);return Qt})(Ct,ct),et=Qi(Kt,an);return W&&(et+=" "+W),ct.className&&(et+=" "+ct.className),A[zf(mt)&&!kx.has(mt)?"class":"className"]=et,F&&(A.ref=F),j.createElement(mt,A)})(O,K,P)}k.displayName=x;var O=Hn.forwardRef(k);return O.attrs=C,O.componentStyle=N,O.displayName=x,O.shouldForwardProp=D,O.foldedComponentIds=l?Qi(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=T,O.target=l?c.target:n,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=l?(function(P){for(var Q=[],U=1;U<arguments.length;U++)Q[U-1]=arguments[U];for(var F=0,lt=Q;F<lt.length;F++)dd(P,lt[F],!0);return P})({},c.defaultProps,K):K}}),Zd(O,function(){return".".concat(O.styledComponentId)}),f&&Ux(O,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function ly(n,a){for(var o=[n[0]],l=0,c=a.length;l<c;l+=1)o.push(a[l],n[l+1]);return o}var sy=function(n){return Object.assign(n,{isCss:!0})};function Ti(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(Fa(n)||bo(n))return sy(wi(ly(Gs,Pa([n],a,!0))));var l=n;return a.length===0&&l.length===1&&typeof l[0]=="string"?wi(l):sy(wi(ly(l,a)))}function md(n,a,o){if(o===void 0&&(o=Za),!a)throw $o(1,a);var l=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(a,o,Ti.apply(void 0,Pa([c],f,!1)))};return l.attrs=function(c){return md(n,a,ge(ge({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},l.withConfig=function(c){return md(n,a,ge(ge({},o),c))},l}var Qx=function(n){return md(lT,n)},w=Qx;kx.forEach(function(n){w[n]=Qx(n)});var sT=(function(){function n(a,o){this.rules=a,this.componentId=o,this.isStatic=Kx(a),As.registerId(this.componentId+1)}return n.prototype.createStyles=function(a,o,l,c){var f=c(Cs(wi(this.rules,o,l,c)),""),d=this.componentId+a;l.insertRules(d,d,f)},n.prototype.removeStyles=function(a,o){o.clearRules(this.componentId+a)},n.prototype.renderStyles=function(a,o,l,c){a>2&&As.registerId(this.componentId+a),this.removeStyles(a,l),this.createStyles(a,o,l,c)},n})();function cT(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var l=Ti.apply(void 0,Pa([n],a,!1)),c="sc-global-".concat(Kd(JSON.stringify(l))),f=new sT(l,c),d=function(m){var g=pd(),v=Hn.useContext(Fd),x=Hn.useRef(g.styleSheet.allocateGSInstance(c)).current;return g.styleSheet.server&&p(x,m,g.styleSheet,v,g.stylis),Hn.useLayoutEffect(function(){if(!g.styleSheet.server)return p(x,m,g.styleSheet,v,g.stylis),function(){return f.removeStyles(x,g.styleSheet)}},[x,m,g.styleSheet,v,g.stylis]),null};function p(m,g,v,x,T){if(f.isStatic)f.renderStyles(m,D5,v,T);else{var C=ge(ge({},g),{theme:Ox(g,x,d.defaultProps)});f.renderStyles(m,C,v,T)}}return Hn.memo(d)}function wt(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var l=Cs(Ti.apply(void 0,Pa([n],a,!1))),c=Kd(l);return new qx(c,l)}const b={cream:"#FDF9EE",red:"#CB3332",redDark:"#A82928",darkBrown:"#150100",gold:"#E6C956",coral:"#FF7B6C",white:"#FFFFFF",gradientGoldCoral:"linear-gradient(135deg, #E6C956 0%, #FF7B6C 100%)"},Of={heading:"'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",body:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},J={mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1200px"},Ja={large:"0 8px 32px rgba(21, 1, 0, 0.2)",glow:"0 0 20px rgba(230, 201, 86, 0.4)",glowRed:"0 0 20px rgba(203, 51, 50, 0.4)"},Bt={fast:"0.15s ease",normal:"0.3s ease"},uT=cT`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${Of.body};
    background-color: ${b.cream};
    color: ${b.darkBrown};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Of.heading};
    font-weight: 700;
    line-height: 1.2;
    color: ${b.darkBrown};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: ${Of.body};
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${b.gold};
    color: ${b.darkBrown};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${b.cream};
  }

  ::-webkit-scrollbar-thumb {
    background: ${b.coral};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${b.red};
  }
`,Jd=j.createContext({});function Wd(n){const a=j.useRef(null);return a.current===null&&(a.current=n()),a.current}const Id=typeof window<"u",Zx=Id?j.useLayoutEffect:j.useEffect,qs=j.createContext(null);function th(n,a){n.indexOf(a)===-1&&n.push(a)}function eh(n,a){const o=n.indexOf(a);o>-1&&n.splice(o,1)}const vn=(n,a,o)=>o>a?a:o<n?n:o;let nh=()=>{};const Xn={},Fx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Jx(n){return typeof n=="object"&&n!==null}const Wx=n=>/^0[^.\s]+$/u.test(n);function ih(n){let a;return()=>(a===void 0&&(a=n()),a)}const We=n=>n,fT=(n,a)=>o=>a(n(o)),Do=(...n)=>n.reduce(fT),So=(n,a,o)=>{const l=a-n;return l===0?1:(o-n)/l};class ah{constructor(){this.subscriptions=[]}add(a){return th(this.subscriptions,a),()=>eh(this.subscriptions,a)}notify(a,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](a,o,l);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(a,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gn=n=>n*1e3,Je=n=>n/1e3;function Ix(n,a){return a?n*(1e3/a):0}const tv=(n,a,o)=>(((1-3*o+3*a)*n+(3*o-6*a))*n+3*a)*n,dT=1e-7,hT=12;function pT(n,a,o,l,c){let f,d,p=0;do d=a+(o-a)/2,f=tv(d,l,c)-n,f>0?o=d:a=d;while(Math.abs(f)>dT&&++p<hT);return d}function zo(n,a,o,l){if(n===a&&o===l)return We;const c=f=>pT(f,0,1,n,o);return f=>f===0||f===1?f:tv(c(f),a,l)}const ev=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,nv=n=>a=>1-n(1-a),iv=zo(.33,1.53,.69,.99),rh=nv(iv),av=ev(rh),rv=n=>(n*=2)<1?.5*rh(n):.5*(2-Math.pow(2,-10*(n-1))),oh=n=>1-Math.sin(Math.acos(n)),ov=nv(oh),lv=ev(oh),mT=zo(.42,0,1,1),gT=zo(0,0,.58,1),sv=zo(.42,0,.58,1),yT=n=>Array.isArray(n)&&typeof n[0]!="number",cv=n=>Array.isArray(n)&&typeof n[0]=="number",xT={linear:We,easeIn:mT,easeInOut:sv,easeOut:gT,circIn:oh,circInOut:lv,circOut:ov,backIn:rh,backInOut:av,backOut:iv,anticipate:rv},vT=n=>typeof n=="string",cy=n=>{if(cv(n)){nh(n.length===4);const[a,o,l,c]=n;return zo(a,o,l,c)}else if(vT(n))return xT[n];return n},ts=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function bT(n,a){let o=new Set,l=new Set,c=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(v){d.has(v)&&(g.schedule(v),n()),v(p)}const g={schedule:(v,x=!1,T=!1)=>{const D=T&&c?o:l;return x&&d.add(v),D.has(v)||D.add(v),v},cancel:v=>{l.delete(v),d.delete(v)},process:v=>{if(p=v,c){f=!0;return}c=!0,[o,l]=[l,o],o.forEach(m),o.clear(),c=!1,f&&(f=!1,g.process(v))}};return g}const ST=40;function uv(n,a){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=ts.reduce((O,K)=>(O[K]=bT(f),O),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:v,update:x,preRender:T,render:C,postRender:D}=d,$=()=>{const O=Xn.useManualTiming?c.timestamp:performance.now();o=!1,Xn.useManualTiming||(c.delta=l?1e3/60:Math.max(Math.min(O-c.timestamp,ST),1)),c.timestamp=O,c.isProcessing=!0,p.process(c),m.process(c),g.process(c),v.process(c),x.process(c),T.process(c),C.process(c),D.process(c),c.isProcessing=!1,o&&a&&(l=!1,n($))},R=()=>{o=!0,l=!0,c.isProcessing||n($)};return{schedule:ts.reduce((O,K)=>{const P=d[K];return O[K]=(Q,U=!1,F=!1)=>(o||R(),P.schedule(Q,U,F)),O},{}),cancel:O=>{for(let K=0;K<ts.length;K++)d[ts[K]].cancel(O)},state:c,steps:d}}const{schedule:Vt,cancel:ji,state:he,steps:kf}=uv(typeof requestAnimationFrame<"u"?requestAnimationFrame:We,!0);let xs;function wT(){xs=void 0}const ve={now:()=>(xs===void 0&&ve.set(he.isProcessing||Xn.useManualTiming?he.timestamp:performance.now()),xs),set:n=>{xs=n,queueMicrotask(wT)}},fv=n=>a=>typeof a=="string"&&a.startsWith(n),dv=fv("--"),TT=fv("var(--"),lh=n=>TT(n)?jT.test(n.split("/*")[0].trim()):!1,jT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function uy(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const rr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},wo={...rr,transform:n=>vn(0,1,n)},es={...rr,default:1},co=n=>Math.round(n*1e5)/1e5,sh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CT(n){return n==null}const ET=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ch=(n,a)=>o=>!!(typeof o=="string"&&ET.test(o)&&o.startsWith(n)||a&&!CT(o)&&Object.prototype.hasOwnProperty.call(o,a)),hv=(n,a,o)=>l=>{if(typeof l!="string")return l;const[c,f,d,p]=l.match(sh);return{[n]:parseFloat(c),[a]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},AT=n=>vn(0,255,n),Bf={...rr,transform:n=>Math.round(AT(n))},Zi={test:ch("rgb","red"),parse:hv("red","green","blue"),transform:({red:n,green:a,blue:o,alpha:l=1})=>"rgba("+Bf.transform(n)+", "+Bf.transform(a)+", "+Bf.transform(o)+", "+co(wo.transform(l))+")"};function MT(n){let a="",o="",l="",c="";return n.length>5?(a=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(a=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),a+=a,o+=o,l+=l,c+=c),{red:parseInt(a,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const gd={test:ch("#"),parse:MT,transform:Zi.transform},Ro=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),vi=Ro("deg"),xn=Ro("%"),tt=Ro("px"),$T=Ro("vh"),DT=Ro("vw"),fy={...xn,parse:n=>xn.parse(n)/100,transform:n=>xn.transform(n*100)},Ua={test:ch("hsl","hue"),parse:hv("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+xn.transform(co(a))+", "+xn.transform(co(o))+", "+co(wo.transform(l))+")"},ee={test:n=>Zi.test(n)||gd.test(n)||Ua.test(n),parse:n=>Zi.test(n)?Zi.parse(n):Ua.test(n)?Ua.parse(n):gd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Zi.transform(n):Ua.transform(n),getAnimatableNone:n=>{const a=ee.parse(n);return a.alpha=0,ee.transform(a)}},zT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function RT(n){return isNaN(n)&&typeof n=="string"&&(n.match(sh)?.length||0)+(n.match(zT)?.length||0)>0}const pv="number",mv="color",OT="var",kT="var(",dy="${}",BT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function To(n){const a=n.toString(),o=[],l={color:[],number:[],var:[]},c=[];let f=0;const p=a.replace(BT,m=>(ee.test(m)?(l.color.push(f),c.push(mv),o.push(ee.parse(m))):m.startsWith(kT)?(l.var.push(f),c.push(OT),o.push(m)):(l.number.push(f),c.push(pv),o.push(parseFloat(m))),++f,dy)).split(dy);return{values:o,split:p,indexes:l,types:c}}function gv(n){return To(n).values}function yv(n){const{split:a,types:o}=To(n),l=a.length;return c=>{let f="";for(let d=0;d<l;d++)if(f+=a[d],c[d]!==void 0){const p=o[d];p===pv?f+=co(c[d]):p===mv?f+=ee.transform(c[d]):f+=c[d]}return f}}const NT=n=>typeof n=="number"?0:ee.test(n)?ee.getAnimatableNone(n):n;function LT(n){const a=gv(n);return yv(n)(a.map(NT))}const Ci={test:RT,parse:gv,createTransformer:yv,getAnimatableNone:LT};function Nf(n,a,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(a-n)*6*o:o<1/2?a:o<2/3?n+(a-n)*(2/3-o)*6:n}function _T({hue:n,saturation:a,lightness:o,alpha:l}){n/=360,a/=100,o/=100;let c=0,f=0,d=0;if(!a)c=f=d=o;else{const p=o<.5?o*(1+a):o+a-o*a,m=2*o-p;c=Nf(m,p,n+1/3),f=Nf(m,p,n),d=Nf(m,p,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function Ms(n,a){return o=>o>0?a:n}const Ht=(n,a,o)=>n+(a-n)*o,Lf=(n,a,o)=>{const l=n*n,c=o*(a*a-l)+l;return c<0?0:Math.sqrt(c)},VT=[gd,Zi,Ua],UT=n=>VT.find(a=>a.test(n));function hy(n){const a=UT(n);if(!a)return!1;let o=a.parse(n);return a===Ua&&(o=_T(o)),o}const py=(n,a)=>{const o=hy(n),l=hy(a);if(!o||!l)return Ms(n,a);const c={...o};return f=>(c.red=Lf(o.red,l.red,f),c.green=Lf(o.green,l.green,f),c.blue=Lf(o.blue,l.blue,f),c.alpha=Ht(o.alpha,l.alpha,f),Zi.transform(c))},yd=new Set(["none","hidden"]);function HT(n,a){return yd.has(n)?o=>o<=0?n:a:o=>o>=1?a:n}function YT(n,a){return o=>Ht(n,a,o)}function uh(n){return typeof n=="number"?YT:typeof n=="string"?lh(n)?Ms:ee.test(n)?py:XT:Array.isArray(n)?xv:typeof n=="object"?ee.test(n)?py:GT:Ms}function xv(n,a){const o=[...n],l=o.length,c=n.map((f,d)=>uh(f)(f,a[d]));return f=>{for(let d=0;d<l;d++)o[d]=c[d](f);return o}}function GT(n,a){const o={...n,...a},l={};for(const c in o)n[c]!==void 0&&a[c]!==void 0&&(l[c]=uh(n[c])(n[c],a[c]));return c=>{for(const f in l)o[f]=l[f](c);return o}}function qT(n,a){const o=[],l={color:0,var:0,number:0};for(let c=0;c<a.values.length;c++){const f=a.types[c],d=n.indexes[f][l[f]],p=n.values[d]??0;o[c]=p,l[f]++}return o}const XT=(n,a)=>{const o=Ci.createTransformer(a),l=To(n),c=To(a);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?yd.has(n)&&!c.values.length||yd.has(a)&&!l.values.length?HT(n,a):Do(xv(qT(l,c),c.values),o):Ms(n,a)};function vv(n,a,o){return typeof n=="number"&&typeof a=="number"&&typeof o=="number"?Ht(n,a,o):uh(n)(n,a)}const PT=n=>{const a=({timestamp:o})=>n(o);return{start:(o=!0)=>Vt.update(a,o),stop:()=>ji(a),now:()=>he.isProcessing?he.timestamp:ve.now()}},bv=(n,a,o=10)=>{let l="";const c=Math.max(Math.round(a/o),2);for(let f=0;f<c;f++)l+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},$s=2e4;function fh(n){let a=0;const o=50;let l=n.next(a);for(;!l.done&&a<$s;)a+=o,l=n.next(a);return a>=$s?1/0:a}function KT(n,a=100,o){const l=o({...n,keyframes:[0,a]}),c=Math.min(fh(l),$s);return{type:"keyframes",ease:f=>l.next(c*f).value/a,duration:Je(c)}}const QT=5;function Sv(n,a,o){const l=Math.max(a-QT,0);return Ix(o-n(l),a-l)}const Pt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_f=.001;function ZT({duration:n=Pt.duration,bounce:a=Pt.bounce,velocity:o=Pt.velocity,mass:l=Pt.mass}){let c,f,d=1-a;d=vn(Pt.minDamping,Pt.maxDamping,d),n=vn(Pt.minDuration,Pt.maxDuration,Je(n)),d<1?(c=g=>{const v=g*d,x=v*n,T=v-o,C=xd(g,d),D=Math.exp(-x);return _f-T/C*D},f=g=>{const x=g*d*n,T=x*o+o,C=Math.pow(d,2)*Math.pow(g,2)*n,D=Math.exp(-x),$=xd(Math.pow(g,2),d);return(-c(g)+_f>0?-1:1)*((T-C)*D)/$}):(c=g=>{const v=Math.exp(-g*n),x=(g-o)*n+1;return-_f+v*x},f=g=>{const v=Math.exp(-g*n),x=(o-g)*(n*n);return v*x});const p=5/n,m=JT(c,f,p);if(n=Gn(n),isNaN(m))return{stiffness:Pt.stiffness,damping:Pt.damping,duration:n};{const g=Math.pow(m,2)*l;return{stiffness:g,damping:d*2*Math.sqrt(l*g),duration:n}}}const FT=12;function JT(n,a,o){let l=o;for(let c=1;c<FT;c++)l=l-n(l)/a(l);return l}function xd(n,a){return n*Math.sqrt(1-a*a)}const WT=["duration","bounce"],IT=["stiffness","damping","mass"];function my(n,a){return a.some(o=>n[o]!==void 0)}function t4(n){let a={velocity:Pt.velocity,stiffness:Pt.stiffness,damping:Pt.damping,mass:Pt.mass,isResolvedFromDuration:!1,...n};if(!my(n,IT)&&my(n,WT))if(n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,f=2*vn(.05,1,1-(n.bounce||0))*Math.sqrt(c);a={...a,mass:Pt.mass,stiffness:c,damping:f}}else{const o=ZT(n);a={...a,...o,mass:Pt.mass},a.isResolvedFromDuration=!0}return a}function Ds(n=Pt.visualDuration,a=Pt.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:l,restDelta:c}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:m,damping:g,mass:v,duration:x,velocity:T,isResolvedFromDuration:C}=t4({...o,velocity:-Je(o.velocity||0)}),D=T||0,$=g/(2*Math.sqrt(m*v)),R=d-f,N=Je(Math.sqrt(m/v)),k=Math.abs(R)<5;l||(l=k?Pt.restSpeed.granular:Pt.restSpeed.default),c||(c=k?Pt.restDelta.granular:Pt.restDelta.default);let O;if($<1){const P=xd(N,$);O=Q=>{const U=Math.exp(-$*N*Q);return d-U*((D+$*N*R)/P*Math.sin(P*Q)+R*Math.cos(P*Q))}}else if($===1)O=P=>d-Math.exp(-N*P)*(R+(D+N*R)*P);else{const P=N*Math.sqrt($*$-1);O=Q=>{const U=Math.exp(-$*N*Q),F=Math.min(P*Q,300);return d-U*((D+$*N*R)*Math.sinh(F)+P*R*Math.cosh(F))/P}}const K={calculatedDuration:C&&x||null,next:P=>{const Q=O(P);if(C)p.done=P>=x;else{let U=P===0?D:0;$<1&&(U=P===0?Gn(D):Sv(O,P,Q));const F=Math.abs(U)<=l,lt=Math.abs(d-Q)<=c;p.done=F&&lt}return p.value=p.done?d:Q,p},toString:()=>{const P=Math.min(fh(K),$s),Q=bv(U=>K.next(P*U).value,P,30);return P+"ms "+Q},toTransition:()=>{}};return K}Ds.applyToOptions=n=>{const a=KT(n,100,Ds);return n.ease=a.ease,n.duration=Gn(a.duration),n.type="keyframes",n};function vd({keyframes:n,velocity:a=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:m,restDelta:g=.5,restSpeed:v}){const x=n[0],T={done:!1,value:x},C=F=>p!==void 0&&F<p||m!==void 0&&F>m,D=F=>p===void 0?m:m===void 0||Math.abs(p-F)<Math.abs(m-F)?p:m;let $=o*a;const R=x+$,N=d===void 0?R:d(R);N!==R&&($=N-x);const k=F=>-$*Math.exp(-F/l),O=F=>N+k(F),K=F=>{const lt=k(F),Ct=O(F);T.done=Math.abs(lt)<=g,T.value=T.done?N:Ct};let P,Q;const U=F=>{C(T.value)&&(P=F,Q=Ds({keyframes:[T.value,D(T.value)],velocity:Sv(O,F,T.value),damping:c,stiffness:f,restDelta:g,restSpeed:v}))};return U(0),{calculatedDuration:null,next:F=>{let lt=!1;return!Q&&P===void 0&&(lt=!0,K(F),U(F)),P!==void 0&&F>=P?Q.next(F-P):(!lt&&K(F),T)}}}function e4(n,a,o){const l=[],c=o||Xn.mix||vv,f=n.length-1;for(let d=0;d<f;d++){let p=c(n[d],n[d+1]);if(a){const m=Array.isArray(a)?a[d]||We:a;p=Do(m,p)}l.push(p)}return l}function n4(n,a,{clamp:o=!0,ease:l,mixer:c}={}){const f=n.length;if(nh(f===a.length),f===1)return()=>a[0];if(f===2&&a[0]===a[1])return()=>a[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),a=[...a].reverse());const p=e4(a,l,c),m=p.length,g=v=>{if(d&&v<n[0])return a[0];let x=0;if(m>1)for(;x<n.length-2&&!(v<n[x+1]);x++);const T=So(n[x],n[x+1],v);return p[x](T)};return o?v=>g(vn(n[0],n[f-1],v)):g}function i4(n,a){const o=n[n.length-1];for(let l=1;l<=a;l++){const c=So(0,a,l);n.push(Ht(o,1,c))}}function a4(n){const a=[0];return i4(a,n.length-1),a}function r4(n,a){return n.map(o=>o*a)}function o4(n,a){return n.map(()=>a||sv).splice(0,n.length-1)}function uo({duration:n=300,keyframes:a,times:o,ease:l="easeInOut"}){const c=yT(l)?l.map(cy):cy(l),f={done:!1,value:a[0]},d=r4(o&&o.length===a.length?o:a4(a),n),p=n4(d,a,{ease:Array.isArray(c)?c:o4(a,c)});return{calculatedDuration:n,next:m=>(f.value=p(m),f.done=m>=n,f)}}const l4=n=>n!==null;function dh(n,{repeat:a,repeatType:o="loop"},l,c=1){const f=n.filter(l4),p=c<0||a&&o!=="loop"&&a%2===1?0:f.length-1;return!p||l===void 0?f[p]:l}const s4={decay:vd,inertia:vd,tween:uo,keyframes:uo,spring:Ds};function wv(n){typeof n.type=="string"&&(n.type=s4[n.type])}class hh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,o){return this.finished.then(a,o)}}const c4=n=>n/100;class ph extends hh{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==ve.now()&&this.tick(ve.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;wv(a);const{type:o=uo,repeat:l=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=a;let{keyframes:p}=a;const m=o||uo;m!==uo&&typeof p[0]!="number"&&(this.mixKeyframes=Do(c4,vv(p[0],p[1])),p=[0,100]);const g=m({...a,keyframes:p});f==="mirror"&&(this.mirroredGenerator=m({...a,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=fh(g));const{calculatedDuration:v}=g;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=g}updateTime(a){const o=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(a,o=!1){const{generator:l,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:v,repeat:x,repeatType:T,repeatDelay:C,type:D,onUpdate:$,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-c/this.speed,this.startTime)),o?this.currentTime=a:this.updateTime(a);const N=this.currentTime-g*(this.playbackSpeed>=0?1:-1),k=this.playbackSpeed>=0?N<0:N>c;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,K=l;if(x){const F=Math.min(this.currentTime,c)/p;let lt=Math.floor(F),Ct=F%1;!Ct&&F>=1&&(Ct=1),Ct===1&&lt--,lt=Math.min(lt,x+1),lt%2&&(T==="reverse"?(Ct=1-Ct,C&&(Ct-=C/p)):T==="mirror"&&(K=d)),O=vn(0,1,Ct)*p}const P=k?{done:!1,value:v[0]}:K.next(O);f&&(P.value=f(P.value));let{done:Q}=P;!k&&m!==null&&(Q=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Q);return U&&D!==vd&&(P.value=dh(v,this.options,R,this.speed)),$&&$(P.value),U&&this.finish(),P}then(a,o){return this.finished.then(a,o)}get duration(){return Je(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Je(a)}get time(){return Je(this.currentTime)}set time(a){a=Gn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(ve.now());const o=this.playbackSpeed!==a;this.playbackSpeed=a,o&&(this.time=Je(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=PT,startTime:o}=this.options;this.driver||(this.driver=a(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ve.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function u4(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const Fi=n=>n*180/Math.PI,bd=n=>{const a=Fi(Math.atan2(n[1],n[0]));return Sd(a)},f4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:bd,rotateZ:bd,skewX:n=>Fi(Math.atan(n[1])),skewY:n=>Fi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Sd=n=>(n=n%360,n<0&&(n+=360),n),gy=bd,yy=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),xy=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),d4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yy,scaleY:xy,scale:n=>(yy(n)+xy(n))/2,rotateX:n=>Sd(Fi(Math.atan2(n[6],n[5]))),rotateY:n=>Sd(Fi(Math.atan2(-n[2],n[0]))),rotateZ:gy,rotate:gy,skewX:n=>Fi(Math.atan(n[4])),skewY:n=>Fi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function wd(n){return n.includes("scale")?1:0}function Td(n,a){if(!n||n==="none")return wd(a);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=d4,c=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=f4,c=p}if(!c)return wd(a);const f=l[a],d=c[1].split(",").map(p4);return typeof f=="function"?f(d):d[f]}const h4=(n,a)=>{const{transform:o="none"}=getComputedStyle(n);return Td(o,a)};function p4(n){return parseFloat(n.trim())}const or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lr=new Set(or),vy=n=>n===rr||n===tt,m4=new Set(["x","y","z"]),g4=or.filter(n=>!m4.has(n));function y4(n){const a=[];return g4.forEach(o=>{const l=n.getValue(o);l!==void 0&&(a.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),a}const Si={width:({x:n},{paddingLeft:a="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(a)-parseFloat(o),height:({y:n},{paddingTop:a="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(a)-parseFloat(o),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Td(a,"x"),y:(n,{transform:a})=>Td(a,"y")};Si.translateX=Si.x;Si.translateY=Si.y;const Ji=new Set;let jd=!1,Cd=!1,Ed=!1;function Tv(){if(Cd){const n=Array.from(Ji).filter(l=>l.needsMeasurement),a=new Set(n.map(l=>l.element)),o=new Map;a.forEach(l=>{const c=y4(l);c.length&&(o.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),a.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([f,d])=>{l.getValue(f)?.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Cd=!1,jd=!1,Ji.forEach(n=>n.complete(Ed)),Ji.clear()}function jv(){Ji.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Cd=!0)})}function x4(){Ed=!0,jv(),Tv(),Ed=!1}class mh{constructor(a,o,l,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=o,this.name=l,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ji.add(this),jd||(jd=!0,Vt.read(jv),Vt.resolveKeyframes(Tv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:o,element:l,motionValue:c}=this;if(a[0]===null){const f=c?.get(),d=a[a.length-1];if(f!==void 0)a[0]=f;else if(l&&o){const p=l.readValue(o,d);p!=null&&(a[0]=p)}a[0]===void 0&&(a[0]=d),c&&f===void 0&&c.set(a[0])}u4(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Ji.delete(this)}cancel(){this.state==="scheduled"&&(Ji.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const v4=n=>n.startsWith("--");function b4(n,a,o){v4(a)?n.style.setProperty(a,o):n.style[a]=o}const S4=ih(()=>window.ScrollTimeline!==void 0),w4={};function T4(n,a){const o=ih(n);return()=>w4[a]??o()}const Cv=T4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),oo=([n,a,o,l])=>`cubic-bezier(${n}, ${a}, ${o}, ${l})`,by={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oo([0,.65,.55,1]),circOut:oo([.55,0,1,.45]),backIn:oo([.31,.01,.66,-.59]),backOut:oo([.33,1.53,.69,.99])};function Ev(n,a){if(n)return typeof n=="function"?Cv()?bv(n,a):"ease-out":cv(n)?oo(n):Array.isArray(n)?n.map(o=>Ev(o,a)||by.easeOut):by[n]}function j4(n,a,o,{delay:l=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:m}={},g=void 0){const v={[a]:o};m&&(v.offset=m);const x=Ev(p,c);Array.isArray(x)&&(v.easing=x);const T={delay:l,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(T.pseudoElement=g),n.animate(v,T)}function Av(n){return typeof n=="function"&&"applyToOptions"in n}function C4({type:n,...a}){return Av(n)&&Cv()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class E4 extends hh{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!a)return;const{element:o,name:l,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:m}=a;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=a,nh(typeof a.type!="string");const g=C4(a);this.animation=j4(o,l,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const v=dh(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(v):b4(o,l,v),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return Je(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Je(a)}get time(){return Je(Number(this.animation.currentTime)||0)}set time(a){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Gn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(a){this.manualStartTime=this.animation.startTime=a}attachTimeline({timeline:a,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&S4()?(this.animation.timeline=a,We):o(this)}}const Mv={anticipate:rv,backInOut:av,circInOut:lv};function A4(n){return n in Mv}function M4(n){typeof n.ease=="string"&&A4(n.ease)&&(n.ease=Mv[n.ease])}const Vf=10;class $4 extends E4{constructor(a){M4(a),wv(a),super(a),a.startTime!==void 0&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:o,onUpdate:l,onComplete:c,element:f,...d}=this.options;if(!o)return;if(a!==void 0){o.set(a);return}const p=new ph({...d,autoplay:!1}),m=Math.max(Vf,ve.now()-this.startTime),g=vn(0,Vf,m-Vf);o.setWithVelocity(p.sample(Math.max(0,m-g)).value,p.sample(m).value,g),p.stop()}}const Sy=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ci.test(n)||n==="0")&&!n.startsWith("url("));function D4(n){const a=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==a)return!0}function z4(n,a,o,l){const c=n[0];if(c===null)return!1;if(a==="display"||a==="visibility")return!0;const f=n[n.length-1],d=Sy(c,a),p=Sy(f,a);return!d||!p?!1:D4(n)||(o==="spring"||Av(o))&&l}function Ad(n){n.duration=0,n.type="keyframes"}const R4=new Set(["opacity","clipPath","filter","transform"]),O4=ih(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function k4(n){const{motionValue:a,name:o,repeatDelay:l,repeatType:c,damping:f,type:d}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=a.owner.getProps();return O4()&&o&&R4.has(o)&&(o!=="transform"||!g)&&!m&&!l&&c!=="mirror"&&f!==0&&d!=="inertia"}const B4=40;class N4 extends hh{constructor({autoplay:a=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:m,motionValue:g,element:v,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ve.now();const T={autoplay:a,delay:o,type:l,repeat:c,repeatDelay:f,repeatType:d,name:m,motionValue:g,element:v,...x},C=v?.KeyframeResolver||mh;this.keyframeResolver=new C(p,(D,$,R)=>this.onKeyframesResolved(D,$,T,!R),m,g,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,o,l,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:m,isHandoff:g,onUpdate:v}=l;this.resolvedAt=ve.now(),z4(a,f,d,p)||((Xn.instantAnimations||!m)&&v?.(dh(a,l,o)),a[0]=a[a.length-1],Ad(l),l.repeat=0);const T={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>B4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:a},C=!g&&k4(T)?new $4({...T,element:T.motionValue.owner.current}):new ph(T);C.finished.then(()=>this.notifyFinished()).catch(We),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(a,o){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),x4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const L4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _4(n){const a=L4.exec(n);if(!a)return[,];const[,o,l,c]=a;return[`--${o??l}`,c]}function $v(n,a,o=1){const[l,c]=_4(n);if(!l)return;const f=window.getComputedStyle(a).getPropertyValue(l);if(f){const d=f.trim();return Fx(d)?parseFloat(d):d}return lh(c)?$v(c,a,o+1):c}function gh(n,a){return n?.[a]??n?.default??n}const Dv=new Set(["width","height","top","left","right","bottom",...or]),V4={test:n=>n==="auto",parse:n=>n},zv=n=>a=>a.test(n),Rv=[rr,tt,xn,vi,DT,$T,V4],wy=n=>Rv.find(zv(n));function U4(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Wx(n):!0}const H4=new Set(["brightness","contrast","saturate","opacity"]);function Y4(n){const[a,o]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[l]=o.match(sh)||[];if(!l)return n;const c=o.replace(l,"");let f=H4.has(a)?1:0;return l!==o&&(f*=100),a+"("+f+c+")"}const G4=/\b([a-z-]*)\(.*?\)/gu,Md={...Ci,getAnimatableNone:n=>{const a=n.match(G4);return a?a.map(Y4).join(" "):n}},Ty={...rr,transform:Math.round},q4={rotate:vi,rotateX:vi,rotateY:vi,rotateZ:vi,scale:es,scaleX:es,scaleY:es,scaleZ:es,skew:vi,skewX:vi,skewY:vi,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:wo,originX:fy,originY:fy,originZ:tt},yh={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,radius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,inset:tt,insetBlock:tt,insetBlockStart:tt,insetBlockEnd:tt,insetInline:tt,insetInlineStart:tt,insetInlineEnd:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,paddingBlock:tt,paddingBlockStart:tt,paddingBlockEnd:tt,paddingInline:tt,paddingInlineStart:tt,paddingInlineEnd:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,marginBlock:tt,marginBlockStart:tt,marginBlockEnd:tt,marginInline:tt,marginInlineStart:tt,marginInlineEnd:tt,backgroundPositionX:tt,backgroundPositionY:tt,...q4,zIndex:Ty,fillOpacity:wo,strokeOpacity:wo,numOctaves:Ty},X4={...yh,color:ee,backgroundColor:ee,outlineColor:ee,fill:ee,stroke:ee,borderColor:ee,borderTopColor:ee,borderRightColor:ee,borderBottomColor:ee,borderLeftColor:ee,filter:Md,WebkitFilter:Md},Ov=n=>X4[n];function kv(n,a){let o=Ov(n);return o!==Md&&(o=Ci),o.getAnimatableNone?o.getAnimatableNone(a):void 0}const P4=new Set(["auto","none","0"]);function K4(n,a,o){let l=0,c;for(;l<n.length&&!c;){const f=n[l];typeof f=="string"&&!P4.has(f)&&To(f).values.length&&(c=n[l]),l++}if(c&&o)for(const f of a)n[f]=kv(o,c)}class Q4 extends mh{constructor(a,o,l,c,f){super(a,o,l,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let v=0;v<a.length;v++){let x=a[v];if(typeof x=="string"&&(x=x.trim(),lh(x))){const T=$v(x,o.current);T!==void 0&&(a[v]=T),v===a.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Dv.has(l)||a.length!==2)return;const[c,f]=a,d=wy(c),p=wy(f),m=uy(c),g=uy(f);if(m!==g&&Si[l]){this.needsMeasurement=!0;return}if(d!==p)if(vy(d)&&vy(p))for(let v=0;v<a.length;v++){const x=a[v];typeof x=="string"&&(a[v]=parseFloat(x))}else Si[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:o}=this,l=[];for(let c=0;c<a.length;c++)(a[c]===null||U4(a[c]))&&l.push(c);l.length&&K4(a,l,o)}measureInitialState(){const{element:a,unresolvedKeyframes:o,name:l}=this;if(!a||!a.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Si[l](a.measureViewportBox(),window.getComputedStyle(a.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&a.getValue(l,c).jump(c,!1)}measureEndState(){const{element:a,name:o,unresolvedKeyframes:l}=this;if(!a||!a.current)return;const c=a.getValue(o);c&&c.jump(this.measuredOrigin,!1);const f=l.length-1,d=l[f];l[f]=Si[o](a.measureViewportBox(),window.getComputedStyle(a.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,m])=>{a.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function Bv(n,a,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const c=document.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const Nv=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function Lv(n){return Jx(n)&&"offsetHeight"in n}const jy=30,Z4=n=>!isNaN(parseFloat(n));class F4{constructor(a,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=ve.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=o.owner}setCurrent(a){this.current=a,this.updatedAt=ve.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=Z4(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,o){this.events[a]||(this.events[a]=new ah);const l=this.events[a].add(o);return a==="change"?()=>{l(),Vt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,o){this.passiveEffect=a,this.stopPassiveEffect=o}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-l}jump(a,o=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=ve.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>jy)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,jy);return Ix(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(a){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=a(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wa(n,a){return new F4(n,a)}const{schedule:xh}=uv(queueMicrotask,!1),cn={x:!1,y:!1};function _v(){return cn.x||cn.y}function J4(n){return n==="x"||n==="y"?cn[n]?null:(cn[n]=!0,()=>{cn[n]=!1}):cn.x||cn.y?null:(cn.x=cn.y=!0,()=>{cn.x=cn.y=!1})}function Vv(n,a){const o=Bv(n),l=new AbortController,c={passive:!0,...a,signal:l.signal};return[o,c,()=>l.abort()]}function Cy(n){return!(n.pointerType==="touch"||_v())}function W4(n,a,o={}){const[l,c,f]=Vv(n,o),d=p=>{if(!Cy(p))return;const{target:m}=p,g=a(m,p);if(typeof g!="function"||!m)return;const v=x=>{Cy(x)&&(g(x),m.removeEventListener("pointerleave",v))};m.addEventListener("pointerleave",v,c)};return l.forEach(p=>{p.addEventListener("pointerenter",d,c)}),f}const Uv=(n,a)=>a?n===a?!0:Uv(n,a.parentElement):!1,vh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,I4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Hv(n){return I4.has(n.tagName)||n.isContentEditable===!0}const vs=new WeakSet;function Ey(n){return a=>{a.key==="Enter"&&n(a)}}function Uf(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const tj=(n,a)=>{const o=n.currentTarget;if(!o)return;const l=Ey(()=>{if(vs.has(o))return;Uf(o,"down");const c=Ey(()=>{Uf(o,"up")}),f=()=>Uf(o,"cancel");o.addEventListener("keyup",c,a),o.addEventListener("blur",f,a)});o.addEventListener("keydown",l,a),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),a)};function Ay(n){return vh(n)&&!_v()}function ej(n,a,o={}){const[l,c,f]=Vv(n,o),d=p=>{const m=p.currentTarget;if(!Ay(p))return;vs.add(m);const g=a(m,p),v=(C,D)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",T),vs.has(m)&&vs.delete(m),Ay(C)&&typeof g=="function"&&g(C,{success:D})},x=C=>{v(C,m===window||m===document||o.useGlobalTarget||Uv(m,C.target))},T=C=>{v(C,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",T,c)};return l.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),Lv(p)&&(p.addEventListener("focus",g=>tj(g,c)),!Hv(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Yv(n){return Jx(n)&&"ownerSVGElement"in n}function nj(n){return Yv(n)&&n.tagName==="svg"}const ye=n=>!!(n&&n.getVelocity),ij=[...Rv,ee,Ci],aj=n=>ij.find(zv(n)),bh=j.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function My(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function rj(...n){return a=>{let o=!1;const l=n.map(c=>{const f=My(c,a);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let c=0;c<l.length;c++){const f=l[c];typeof f=="function"?f():My(n[c],null)}}}}function oj(...n){return j.useCallback(rj(...n),n)}class lj extends j.Component{getSnapshotBeforeUpdate(a){const o=this.props.childRef.current;if(o&&a.isPresent&&!this.props.isPresent){const l=o.offsetParent,c=Lv(l)&&l.offsetWidth||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=c-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function sj({children:n,isPresent:a,anchorX:o,root:l}){const c=j.useId(),f=j.useRef(null),d=j.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=j.useContext(bh),m=n.props?.ref??n?.ref,g=oj(f,m);return j.useInsertionEffect(()=>{const{width:v,height:x,top:T,left:C,right:D}=d.current;if(a||!f.current||!v||!x)return;const $=o==="left"?`left: ${C}`:`right: ${D}`;f.current.dataset.motionPopId=c;const R=document.createElement("style");p&&(R.nonce=p);const N=l??document.head;return N.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${x}px !important;
            ${$}px !important;
            top: ${T}px !important;
          }
        `),()=>{N.contains(R)&&N.removeChild(R)}},[a]),h.jsx(lj,{isPresent:a,childRef:f,sizeRef:d,children:j.cloneElement(n,{ref:g})})}const cj=({children:n,initial:a,isPresent:o,onExitComplete:l,custom:c,presenceAffectsLayout:f,mode:d,anchorX:p,root:m})=>{const g=Wd(uj),v=j.useId();let x=!0,T=j.useMemo(()=>(x=!1,{id:v,initial:a,isPresent:o,custom:c,onExitComplete:C=>{g.set(C,!0);for(const D of g.values())if(!D)return;l&&l()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[o,g,l]);return f&&x&&(T={...T}),j.useMemo(()=>{g.forEach((C,D)=>g.set(D,!1))},[o]),j.useEffect(()=>{!o&&!g.size&&l&&l()},[o]),d==="popLayout"&&(n=h.jsx(sj,{isPresent:o,anchorX:p,root:m,children:n})),h.jsx(qs.Provider,{value:T,children:n})};function uj(){return new Map}function Gv(n=!0){const a=j.useContext(qs);if(a===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=a,f=j.useId();j.useEffect(()=>{if(n)return c(f)},[n]);const d=j.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}const ns=n=>n.key||"";function $y(n){const a=[];return j.Children.forEach(n,o=>{j.isValidElement(o)&&a.push(o)}),a}const en=({children:n,custom:a,initial:o=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",root:m})=>{const[g,v]=Gv(d),x=j.useMemo(()=>$y(n),[n]),T=d&&!g?[]:x.map(ns),C=j.useRef(!0),D=j.useRef(x),$=Wd(()=>new Map),R=j.useRef(new Set),[N,k]=j.useState(x),[O,K]=j.useState(x);Zx(()=>{C.current=!1,D.current=x;for(let U=0;U<O.length;U++){const F=ns(O[U]);T.includes(F)?($.delete(F),R.current.delete(F)):$.get(F)!==!0&&$.set(F,!1)}},[O,T.length,T.join("-")]);const P=[];if(x!==N){let U=[...x];for(let F=0;F<O.length;F++){const lt=O[F],Ct=ns(lt);T.includes(Ct)||(U.splice(F,0,lt),P.push(lt))}return f==="wait"&&P.length&&(U=P),K($y(U)),k(x),null}const{forceRender:Q}=j.useContext(Jd);return h.jsx(h.Fragment,{children:O.map(U=>{const F=ns(U),lt=d&&!g?!1:x===O||T.includes(F),Ct=()=>{if(R.current.has(F))return;if(R.current.add(F),$.has(F))$.set(F,!0);else return;let Gt=!0;$.forEach(Kt=>{Kt||(Gt=!1)}),Gt&&(Q?.(),K(D.current),d&&v?.(),l&&l())};return h.jsx(cj,{isPresent:lt,initial:!C.current||o?void 0:!1,custom:a,presenceAffectsLayout:c,mode:f,root:m,onExitComplete:lt?void 0:Ct,anchorX:p,children:U},F)})})},qv=j.createContext({strict:!1}),Dy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ia={};for(const n in Dy)Ia[n]={isEnabled:a=>Dy[n].some(o=>!!a[o])};function fj(n){for(const a in n)Ia[a]={...Ia[a],...n[a]}}const dj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zs(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||dj.has(n)}let Xv=n=>!zs(n);function hj(n){typeof n=="function"&&(Xv=a=>a.startsWith("on")?!zs(a):n(a))}try{hj(require("@emotion/is-prop-valid").default)}catch{}function pj(n,a,o){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(Xv(c)||o===!0&&zs(c)||!a&&!zs(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}const Xs=j.createContext({});function Ps(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function jo(n){return typeof n=="string"||Array.isArray(n)}const Sh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wh=["initial",...Sh];function Ks(n){return Ps(n.animate)||wh.some(a=>jo(n[a]))}function Pv(n){return!!(Ks(n)||n.variants)}function mj(n,a){if(Ks(n)){const{initial:o,animate:l}=n;return{initial:o===!1||jo(o)?o:void 0,animate:jo(l)?l:void 0}}return n.inherit!==!1?a:{}}function gj(n){const{initial:a,animate:o}=mj(n,j.useContext(Xs));return j.useMemo(()=>({initial:a,animate:o}),[zy(a),zy(o)])}function zy(n){return Array.isArray(n)?n.join(" "):n}function Ry(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const ao={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(tt.test(n))n=parseFloat(n);else return n;const o=Ry(n,a.target.x),l=Ry(n,a.target.y);return`${o}% ${l}%`}},yj={correct:(n,{treeScale:a,projectionDelta:o})=>{const l=n,c=Ci.parse(n);if(c.length>5)return l;const f=Ci.createTransformer(n),d=typeof c[0]!="number"?1:0,p=o.x.scale*a.x,m=o.y.scale*a.y;c[0+d]/=p,c[1+d]/=m;const g=Ht(p,m,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}},$d={borderRadius:{...ao,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ao,borderTopRightRadius:ao,borderBottomLeftRadius:ao,borderBottomRightRadius:ao,boxShadow:yj};function Kv(n,{layout:a,layoutId:o}){return lr.has(n)||n.startsWith("origin")||(a||o!==void 0)&&(!!$d[n]||n==="opacity")}const xj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vj=or.length;function bj(n,a,o){let l="",c=!0;for(let f=0;f<vj;f++){const d=or[f],p=n[d];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(d.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||o){const g=Nv(p,yh[d]);if(!m){c=!1;const v=xj[d]||d;l+=`${v}(${g}) `}o&&(a[d]=g)}}return l=l.trim(),o?l=o(a,c?"":l):c&&(l="none"),l}function Th(n,a,o){const{style:l,vars:c,transformOrigin:f}=n;let d=!1,p=!1;for(const m in a){const g=a[m];if(lr.has(m)){d=!0;continue}else if(dv(m)){c[m]=g;continue}else{const v=Nv(g,yh[m]);m.startsWith("origin")?(p=!0,f[m]=v):l[m]=v}}if(a.transform||(d||o?l.transform=bj(a,n.transform,o):l.transform&&(l.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:v=0}=f;l.transformOrigin=`${m} ${g} ${v}`}}const jh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Qv(n,a,o){for(const l in a)!ye(a[l])&&!Kv(l,o)&&(n[l]=a[l])}function Sj({transformTemplate:n},a){return j.useMemo(()=>{const o=jh();return Th(o,a,n),Object.assign({},o.vars,o.style)},[a])}function wj(n,a){const o=n.style||{},l={};return Qv(l,o,n),Object.assign(l,Sj(n,a)),l}function Tj(n,a){const o={},l=wj(n,a);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const jj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cj={offset:"strokeDashoffset",array:"strokeDasharray"};function Ej(n,a,o=1,l=0,c=!0){n.pathLength=1;const f=c?jj:Cj;n[f.offset]=tt.transform(-l);const d=tt.transform(a),p=tt.transform(o);n[f.array]=`${d} ${p}`}const Aj=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Zv(n,{attrX:a,attrY:o,attrScale:l,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...p},m,g,v){if(Th(n,p,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:T}=n;x.transform&&(T.transform=x.transform,delete x.transform),(T.transform||x.transformOrigin)&&(T.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),T.transform&&(T.transformBox=v?.transformBox??"fill-box",delete x.transformBox);for(const C of Aj)x[C]!==void 0&&(T[C]=x[C],delete x[C]);a!==void 0&&(x.x=a),o!==void 0&&(x.y=o),l!==void 0&&(x.scale=l),c!==void 0&&Ej(x,c,f,d,!1)}const Fv=()=>({...jh(),attrs:{}}),Jv=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Mj(n,a,o,l){const c=j.useMemo(()=>{const f=Fv();return Zv(f,a,Jv(l),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[a]);if(n.style){const f={};Qv(f,n.style,n),c.style={...f,...c.style}}return c}const $j=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ch(n){return typeof n!="string"||n.includes("-")?!1:!!($j.indexOf(n)>-1||/[A-Z]/u.test(n))}function Dj(n,a,o,{latestValues:l},c,f=!1,d){const m=(d??Ch(n)?Mj:Tj)(a,l,c,n),g=pj(a,typeof n=="string",f),v=n!==j.Fragment?{...g,...m,ref:o}:{},{children:x}=a,T=j.useMemo(()=>ye(x)?x.get():x,[x]);return j.createElement(n,{...v,children:T})}function Oy(n){const a=[{},{}];return n?.values.forEach((o,l)=>{a[0][l]=o.get(),a[1][l]=o.getVelocity()}),a}function Eh(n,a,o,l){if(typeof a=="function"){const[c,f]=Oy(l);a=a(o!==void 0?o:n.custom,c,f)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[c,f]=Oy(l);a=a(o!==void 0?o:n.custom,c,f)}return a}function bs(n){return ye(n)?n.get():n}function zj({scrapeMotionValuesFromProps:n,createRenderState:a},o,l,c){return{latestValues:Rj(o,l,c,n),renderState:a()}}function Rj(n,a,o,l){const c={},f=l(n,{});for(const T in f)c[T]=bs(f[T]);let{initial:d,animate:p}=n;const m=Ks(n),g=Pv(n);a&&g&&!m&&n.inherit!==!1&&(d===void 0&&(d=a.initial),p===void 0&&(p=a.animate));let v=o?o.initial===!1:!1;v=v||d===!1;const x=v?p:d;if(x&&typeof x!="boolean"&&!Ps(x)){const T=Array.isArray(x)?x:[x];for(let C=0;C<T.length;C++){const D=Eh(n,T[C]);if(D){const{transitionEnd:$,transition:R,...N}=D;for(const k in N){let O=N[k];if(Array.isArray(O)){const K=v?O.length-1:0;O=O[K]}O!==null&&(c[k]=O)}for(const k in $)c[k]=$[k]}}}return c}const Wv=n=>(a,o)=>{const l=j.useContext(Xs),c=j.useContext(qs),f=()=>zj(n,a,l,c);return o?f():Wd(f)};function Ah(n,a,o){const{style:l}=n,c={};for(const f in l)(ye(l[f])||a.style&&ye(a.style[f])||Kv(f,n)||o?.getValue(f)?.liveStyle!==void 0)&&(c[f]=l[f]);return c}const Oj=Wv({scrapeMotionValuesFromProps:Ah,createRenderState:jh});function Iv(n,a,o){const l=Ah(n,a,o);for(const c in n)if(ye(n[c])||ye(a[c])){const f=or.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[f]=n[c]}return l}const kj=Wv({scrapeMotionValuesFromProps:Iv,createRenderState:Fv}),Bj=Symbol.for("motionComponentSymbol");function Nj(n,a,o){const l=j.useRef(o);j.useInsertionEffect(()=>{l.current=o});const c=j.useRef(null);return j.useCallback(f=>{f&&n.onMount?.(f),a&&(f?a.mount(f):a.unmount());const d=l.current;if(typeof d=="function")if(f){const p=d(f);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(f);else d&&(d.current=f)},[a])}const Mh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Lj="framerAppearId",tb="data-"+Mh(Lj),eb=j.createContext({});function lo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _j(n,a,o,l,c,f){const{visualElement:d}=j.useContext(Xs),p=j.useContext(qv),m=j.useContext(qs),g=j.useContext(bh).reducedMotion,v=j.useRef(null);l=l||p.renderer,!v.current&&l&&(v.current=l(n,{visualState:a,parent:d,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,isSVG:f}));const x=v.current,T=j.useContext(eb);x&&!x.projection&&c&&(x.type==="html"||x.type==="svg")&&Vj(v.current,o,c,T);const C=j.useRef(!1);j.useInsertionEffect(()=>{x&&C.current&&x.update(o,m)});const D=o[tb],$=j.useRef(!!D&&!window.MotionHandoffIsComplete?.(D)&&window.MotionHasOptimisedAnimation?.(D));return Zx(()=>{x&&(C.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),$.current&&x.animationState&&x.animationState.animateChanges())}),j.useEffect(()=>{x&&(!$.current&&x.animationState&&x.animationState.animateChanges(),$.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(D)}),$.current=!1),x.enteringChildren=void 0)}),x}function Vj(n,a,o,l){const{layoutId:c,layout:f,drag:d,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:v}=a;n.projection=new o(n.latestValues,a["data-framer-portal-id"]?void 0:nb(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||p&&lo(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:v,layoutScroll:m,layoutRoot:g})}function nb(n){if(n)return n.options.allowProjection!==!1?n.projection:nb(n.parent)}function Hf(n,{forwardMotionProps:a=!1,type:o}={},l,c){l&&fj(l);const f=o?o==="svg":Ch(n),d=f?kj:Oj;function p(g,v){let x;const T={...j.useContext(bh),...g,layoutId:Uj(g)},{isStatic:C}=T,D=gj(g),$=d(g,C);if(!C&&Id){Hj();const R=Yj(T);x=R.MeasureLayout,D.visualElement=_j(n,$,T,c,R.ProjectionNode,f)}return h.jsxs(Xs.Provider,{value:D,children:[x&&D.visualElement?h.jsx(x,{visualElement:D.visualElement,...T}):null,Dj(n,g,Nj($,D.visualElement,v),$,C,a,f)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const m=j.forwardRef(p);return m[Bj]=n,m}function Uj({layoutId:n}){const a=j.useContext(Jd).id;return a&&n!==void 0?a+"-"+n:n}function Hj(n,a){j.useContext(qv).strict}function Yj(n){const{drag:a,layout:o}=Ia;if(!a&&!o)return{};const l={...a,...o};return{MeasureLayout:a?.isEnabled(n)||o?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function Gj(n,a){if(typeof Proxy>"u")return Hf;const o=new Map,l=(f,d)=>Hf(f,d,n,a),c=(f,d)=>l(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?l:(o.has(d)||o.set(d,Hf(d,void 0,n,a)),o.get(d))})}function ib({top:n,left:a,right:o,bottom:l}){return{x:{min:a,max:o},y:{min:n,max:l}}}function qj({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function Xj(n,a){if(!a)return n;const o=a({x:n.left,y:n.top}),l=a({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Yf(n){return n===void 0||n===1}function Dd({scale:n,scaleX:a,scaleY:o}){return!Yf(n)||!Yf(a)||!Yf(o)}function Ki(n){return Dd(n)||ab(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ab(n){return ky(n.x)||ky(n.y)}function ky(n){return n&&n!=="0%"}function Rs(n,a,o){const l=n-o,c=a*l;return o+c}function By(n,a,o,l,c){return c!==void 0&&(n=Rs(n,c,l)),Rs(n,o,l)+a}function zd(n,a=0,o=1,l,c){n.min=By(n.min,a,o,l,c),n.max=By(n.max,a,o,l,c)}function rb(n,{x:a,y:o}){zd(n.x,a.translate,a.scale,a.originPoint),zd(n.y,o.translate,o.scale,o.originPoint)}const Ny=.999999999999,Ly=1.0000000000001;function Pj(n,a,o,l=!1){const c=o.length;if(!c)return;a.x=a.y=1;let f,d;for(let p=0;p<c;p++){f=o[p],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ya(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(a.x*=d.x.scale,a.y*=d.y.scale,rb(n,d)),l&&Ki(f.latestValues)&&Ya(n,f.latestValues))}a.x<Ly&&a.x>Ny&&(a.x=1),a.y<Ly&&a.y>Ny&&(a.y=1)}function Ha(n,a){n.min=n.min+a,n.max=n.max+a}function _y(n,a,o,l,c=.5){const f=Ht(n.min,n.max,c);zd(n,a,o,f,l)}function Ya(n,a){_y(n.x,a.x,a.scaleX,a.scale,a.originX),_y(n.y,a.y,a.scaleY,a.scale,a.originY)}function ob(n,a){return ib(Xj(n.getBoundingClientRect(),a))}function Kj(n,a,o){const l=ob(n,o),{scroll:c}=a;return c&&(Ha(l.x,c.offset.x),Ha(l.y,c.offset.y)),l}const Vy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ga=()=>({x:Vy(),y:Vy()}),Uy=()=>({min:0,max:0}),ae=()=>({x:Uy(),y:Uy()}),Rd={current:null},lb={current:!1};function Qj(){if(lb.current=!0,!!Id)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Rd.current=n.matches;n.addEventListener("change",a),a()}else Rd.current=!1}const Zj=new WeakMap;function Fj(n,a,o){for(const l in a){const c=a[l],f=o[l];if(ye(c))n.addValue(l,c);else if(ye(f))n.addValue(l,Wa(c,{owner:n}));else if(f!==c)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(l);n.addValue(l,Wa(d!==void 0?d:c,{owner:n}))}}for(const l in o)a[l]===void 0&&n.removeValue(l);return a}const Hy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Jj{scrapeMotionValuesFromProps(a,o,l){return{}}constructor({parent:a,props:o,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=ve.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Vt.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=d;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=g,this.parent=a,this.props=o,this.presenceContext=l,this.depth=a?a.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Ks(o),this.isVariantNode=Pv(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const T in x){const C=x[T];m[T]!==void 0&&ye(C)&&C.set(m[T])}}mount(a){this.current=a,Zj.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(lb.current||Qj(),this.shouldReduceMotion=Rd.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ji(this.notifyUpdate),ji(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const o=this.features[a];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,o){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const l=lr.has(a);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",d=>{this.latestValues[a]=d,this.props.onUpdate&&Vt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,o)),this.valueSubscriptions.set(a,()=>{c(),f&&f(),o.owner&&o.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Ia){const o=Ia[a];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[a]&&c&&l(this.props)&&(this.features[a]=new c(this)),this.features[a]){const f=this.features[a];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,o){this.latestValues[a]=o}update(a,o){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Hy.length;l++){const c=Hy[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=a[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Fj(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(a),()=>o.variantChildren.delete(a)}addValue(a,o){const l=this.values.get(a);o!==l&&(l&&this.removeValue(a),this.bindToMotionValue(a,o),this.values.set(a,o),this.latestValues[a]=o.get())}removeValue(a){this.values.delete(a);const o=this.valueSubscriptions.get(a);o&&(o(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,o){if(this.props.values&&this.props.values[a])return this.props.values[a];let l=this.values.get(a);return l===void 0&&o!==void 0&&(l=Wa(o===null?void 0:o,{owner:this}),this.addValue(a,l)),l}readValue(a,o){let l=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return l!=null&&(typeof l=="string"&&(Fx(l)||Wx(l))?l=parseFloat(l):!aj(l)&&Ci.test(o)&&(l=kv(a,o)),this.setBaseTarget(a,ye(l)?l.get():l)),ye(l)?l.get():l}setBaseTarget(a,o){this.baseTarget[a]=o}getBaseTarget(a){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const f=Eh(this.props,o,this.presenceContext?.custom);f&&(l=f[a])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,a);return c!==void 0&&!ye(c)?c:this.initialValues[a]!==void 0&&l===void 0?void 0:this.baseTarget[a]}on(a,o){return this.events[a]||(this.events[a]=new ah),this.events[a].add(o)}notify(a,...o){this.events[a]&&this.events[a].notify(...o)}scheduleRenderMicrotask(){xh.render(this.render)}}class sb extends Jj{constructor(){super(...arguments),this.KeyframeResolver=Q4}sortInstanceNodePosition(a,o){return a.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(a,o){return a.style?a.style[o]:void 0}removeValueFromRenderState(a,{vars:o,style:l}){delete o[a],delete l[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;ye(a)&&(this.childSubscription=a.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function cb(n,{style:a,vars:o},l,c){const f=n.style;let d;for(d in a)f[d]=a[d];c?.applyProjectionStyles(f,l);for(d in o)f.setProperty(d,o[d])}function Wj(n){return window.getComputedStyle(n)}class Ij extends sb{constructor(){super(...arguments),this.type="html",this.renderInstance=cb}readValueFromInstance(a,o){if(lr.has(o))return this.projection?.isProjecting?wd(o):h4(a,o);{const l=Wj(a),c=(dv(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(a,{transformPagePoint:o}){return ob(a,o)}build(a,o,l){Th(a,o,l.transformTemplate)}scrapeMotionValuesFromProps(a,o,l){return Ah(a,o,l)}}const ub=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tC(n,a,o,l){cb(n,a,void 0,l);for(const c in a.attrs)n.setAttribute(ub.has(c)?c:Mh(c),a.attrs[c])}class eC extends sb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ae}getBaseTargetFromProps(a,o){return a[o]}readValueFromInstance(a,o){if(lr.has(o)){const l=Ov(o);return l&&l.default||0}return o=ub.has(o)?o:Mh(o),a.getAttribute(o)}scrapeMotionValuesFromProps(a,o,l){return Iv(a,o,l)}build(a,o,l){Zv(a,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(a,o,l,c){tC(a,o,l,c)}mount(a){this.isSVGTag=Jv(a.tagName),super.mount(a)}}const nC=(n,a)=>a.isSVG??Ch(n)?new eC(a):new Ij(a,{allowProjection:n!==j.Fragment});function Xa(n,a,o){const l=n.getProps();return Eh(l,a,o!==void 0?o:l.custom,n)}const Od=n=>Array.isArray(n);function iC(n,a,o){n.hasValue(a)?n.getValue(a).set(o):n.addValue(a,Wa(o))}function aC(n){return Od(n)?n[n.length-1]||0:n}function rC(n,a){const o=Xa(n,a);let{transitionEnd:l={},transition:c={},...f}=o||{};f={...f,...l};for(const d in f){const p=aC(f[d]);iC(n,d,p)}}function oC(n){return!!(ye(n)&&n.add)}function kd(n,a){const o=n.getValue("willChange");if(oC(o))return o.add(a);if(!o&&Xn.WillChange){const l=new Xn.WillChange("auto");n.addValue("willChange",l),l.add(a)}}function fb(n){return n.props[tb]}const lC=n=>n!==null;function sC(n,{repeat:a,repeatType:o="loop"},l){const c=n.filter(lC),f=a&&o!=="loop"&&a%2===1?0:c.length-1;return c[f]}const cC={type:"spring",stiffness:500,damping:25,restSpeed:10},uC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),fC={type:"keyframes",duration:.8},dC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hC=(n,{keyframes:a})=>a.length>2?fC:lr.has(n)?n.startsWith("scale")?uC(a[1]):cC:dC;function pC({when:n,delay:a,delayChildren:o,staggerChildren:l,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:p,from:m,elapsed:g,...v}){return!!Object.keys(v).length}const $h=(n,a,o,l={},c,f)=>d=>{const p=gh(l,n)||{},m=p.delay||l.delay||0;let{elapsed:g=0}=l;g=g-Gn(m);const v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:a.getVelocity(),...p,delay:-g,onUpdate:T=>{a.set(T),p.onUpdate&&p.onUpdate(T)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:a,element:f?void 0:c};pC(p)||Object.assign(v,hC(n,v)),v.duration&&(v.duration=Gn(v.duration)),v.repeatDelay&&(v.repeatDelay=Gn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Ad(v),v.delay===0&&(x=!0)),(Xn.instantAnimations||Xn.skipAnimations)&&(x=!0,Ad(v),v.delay=0),v.allowFlatten=!p.type&&!p.ease,x&&!f&&a.get()!==void 0){const T=sC(v.keyframes,p);if(T!==void 0){Vt.update(()=>{v.onUpdate(T),v.onComplete()});return}}return p.isSync?new ph(v):new N4(v)};function mC({protectedKeys:n,needsAnimating:a},o){const l=n.hasOwnProperty(o)&&a[o]!==!0;return a[o]=!1,l}function db(n,a,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...p}=a;l&&(f=l);const m=[],g=c&&n.animationState&&n.animationState.getState()[c];for(const v in p){const x=n.getValue(v,n.latestValues[v]??null),T=p[v];if(T===void 0||g&&mC(g,v))continue;const C={delay:o,...gh(f||{},v)},D=x.get();if(D!==void 0&&!x.isAnimating&&!Array.isArray(T)&&T===D&&!C.velocity)continue;let $=!1;if(window.MotionHandoffAnimation){const N=fb(n);if(N){const k=window.MotionHandoffAnimation(N,v,Vt);k!==null&&(C.startTime=k,$=!0)}}kd(n,v),x.start($h(v,x,T,n.shouldReduceMotion&&Dv.has(v)?{type:!1}:C,n,$));const R=x.animation;R&&m.push(R)}return d&&Promise.all(m).then(()=>{Vt.update(()=>{d&&rC(n,d)})}),m}function hb(n,a,o,l=0,c=1){const f=Array.from(n).sort((g,v)=>g.sortNodePosition(v)).indexOf(a),d=n.size,p=(d-1)*l;return typeof o=="function"?o(f,d):c===1?f*l:p-f*l}function Bd(n,a,o={}){const l=Xa(n,a,o.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const f=l?()=>Promise.all(db(n,l,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:x}=c;return gC(n,a,m,g,v,x,o)}:()=>Promise.resolve(),{when:p}=c;if(p){const[m,g]=p==="beforeChildren"?[f,d]:[d,f];return m().then(()=>g())}else return Promise.all([f(),d(o.delay)])}function gC(n,a,o=0,l=0,c=0,f=1,d){const p=[];for(const m of n.variantChildren)m.notify("AnimationStart",a),p.push(Bd(m,a,{...d,delay:o+(typeof l=="function"?0:l)+hb(n.variantChildren,m,l,c,f)}).then(()=>m.notify("AnimationComplete",a)));return Promise.all(p)}function yC(n,a,o={}){n.notify("AnimationStart",a);let l;if(Array.isArray(a)){const c=a.map(f=>Bd(n,f,o));l=Promise.all(c)}else if(typeof a=="string")l=Bd(n,a,o);else{const c=typeof a=="function"?Xa(n,a,o.custom):a;l=Promise.all(db(n,c,o))}return l.then(()=>{n.notify("AnimationComplete",a)})}function pb(n,a){if(!Array.isArray(a))return!1;const o=a.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(a[l]!==n[l])return!1;return!0}const xC=wh.length;function mb(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?mb(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const a={};for(let o=0;o<xC;o++){const l=wh[o],c=n.props[l];(jo(c)||c===!1)&&(a[l]=c)}return a}const vC=[...Sh].reverse(),bC=Sh.length;function SC(n){return a=>Promise.all(a.map(({animation:o,options:l})=>yC(n,o,l)))}function wC(n){let a=SC(n),o=Yy(),l=!0;const c=m=>(g,v)=>{const x=Xa(n,v,m==="exit"?n.presenceContext?.custom:void 0);if(x){const{transition:T,transitionEnd:C,...D}=x;g={...g,...D,...C}}return g};function f(m){a=m(n)}function d(m){const{props:g}=n,v=mb(n.parent)||{},x=[],T=new Set;let C={},D=1/0;for(let R=0;R<bC;R++){const N=vC[R],k=o[N],O=g[N]!==void 0?g[N]:v[N],K=jo(O),P=N===m?k.isActive:null;P===!1&&(D=R);let Q=O===v[N]&&O!==g[N]&&K;if(Q&&l&&n.manuallyAnimateOnMount&&(Q=!1),k.protectedKeys={...C},!k.isActive&&P===null||!O&&!k.prevProp||Ps(O)||typeof O=="boolean")continue;const U=TC(k.prevProp,O);let F=U||N===m&&k.isActive&&!Q&&K||R>D&&K,lt=!1;const Ct=Array.isArray(O)?O:[O];let Gt=Ct.reduce(c(N),{});P===!1&&(Gt={});const{prevResolvedValues:Kt={}}=k,an={...Kt,...Gt},Se=Z=>{F=!0,T.has(Z)&&(lt=!0,T.delete(Z)),k.needsAnimating[Z]=!0;const it=n.getValue(Z);it&&(it.liveStyle=!1)};for(const Z in an){const it=Gt[Z],ct=Kt[Z];if(C.hasOwnProperty(Z))continue;let mt=!1;Od(it)&&Od(ct)?mt=!pb(it,ct):mt=it!==ct,mt?it!=null?Se(Z):T.add(Z):it!==void 0&&T.has(Z)?Se(Z):k.protectedKeys[Z]=!0}k.prevProp=O,k.prevResolvedValues=Gt,k.isActive&&(C={...C,...Gt}),l&&n.blockInitialAnimation&&(F=!1);const pe=Q&&U;F&&(!pe||lt)&&x.push(...Ct.map(Z=>{const it={type:N};if(typeof Z=="string"&&l&&!pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:ct}=n,mt=Xa(ct,Z);if(ct.enteringChildren&&mt){const{delayChildren:A}=mt.transition||{};it.delay=hb(ct.enteringChildren,n,A)}}return{animation:Z,options:it}}))}if(T.size){const R={};if(typeof g.initial!="boolean"){const N=Xa(n,Array.isArray(g.initial)?g.initial[0]:g.initial);N&&N.transition&&(R.transition=N.transition)}T.forEach(N=>{const k=n.getBaseTarget(N),O=n.getValue(N);O&&(O.liveStyle=!0),R[N]=k??null}),x.push({animation:R})}let $=!!x.length;return l&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&($=!1),l=!1,$?a(x):Promise.resolve()}function p(m,g){if(o[m].isActive===g)return Promise.resolve();n.variantChildren?.forEach(x=>x.animationState?.setActive(m,g)),o[m].isActive=g;const v=d(m);for(const x in o)o[x].protectedKeys={};return v}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>o,reset:()=>{o=Yy()}}}function TC(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!pb(a,n):!1}function Pi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yy(){return{animate:Pi(!0),whileInView:Pi(),whileHover:Pi(),whileTap:Pi(),whileDrag:Pi(),whileFocus:Pi(),exit:Pi()}}class Ei{constructor(a){this.isMounted=!1,this.node=a}update(){}}class jC extends Ei{constructor(a){super(a),a.animationState||(a.animationState=wC(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();Ps(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:o}=this.node.prevProps||{};a!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let CC=0;class EC extends Ei{constructor(){super(...arguments),this.id=CC++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===l)return;const c=this.node.animationState.setActive("exit",!a);o&&!a&&c.then(()=>{o(this.id)})}mount(){const{register:a,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const AC={animation:{Feature:jC},exit:{Feature:EC}};function Co(n,a,o,l={passive:!0}){return n.addEventListener(a,o,l),()=>n.removeEventListener(a,o)}function Oo(n){return{point:{x:n.pageX,y:n.pageY}}}const MC=n=>a=>vh(a)&&n(a,Oo(a));function fo(n,a,o,l){return Co(n,a,MC(o),l)}const gb=1e-4,$C=1-gb,DC=1+gb,yb=.01,zC=0-yb,RC=0+yb;function be(n){return n.max-n.min}function OC(n,a,o){return Math.abs(n-a)<=o}function Gy(n,a,o,l=.5){n.origin=l,n.originPoint=Ht(a.min,a.max,n.origin),n.scale=be(o)/be(a),n.translate=Ht(o.min,o.max,n.origin)-n.originPoint,(n.scale>=$C&&n.scale<=DC||isNaN(n.scale))&&(n.scale=1),(n.translate>=zC&&n.translate<=RC||isNaN(n.translate))&&(n.translate=0)}function ho(n,a,o,l){Gy(n.x,a.x,o.x,l?l.originX:void 0),Gy(n.y,a.y,o.y,l?l.originY:void 0)}function qy(n,a,o){n.min=o.min+a.min,n.max=n.min+be(a)}function kC(n,a,o){qy(n.x,a.x,o.x),qy(n.y,a.y,o.y)}function Xy(n,a,o){n.min=a.min-o.min,n.max=n.min+be(a)}function Os(n,a,o){Xy(n.x,a.x,o.x),Xy(n.y,a.y,o.y)}function Fe(n){return[n("x"),n("y")]}const xb=({current:n})=>n?n.ownerDocument.defaultView:null,Py=(n,a)=>Math.abs(n-a);function BC(n,a){const o=Py(n.x,a.x),l=Py(n.y,a.y);return Math.sqrt(o**2+l**2)}const Ky=new Set(["auto","scroll"]);class vb{constructor(a,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=qf(this.lastMoveEventInfo,this.history),D=this.startEvent!==null,$=BC(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!D&&!$)return;const{point:R}=C,{timestamp:N}=he;this.history.push({...R,timestamp:N});const{onStart:k,onMove:O}=this.handlers;D||(k&&k(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,C)},this.handlePointerMove=(C,D)=>{this.lastMoveEvent=C,this.lastMoveEventInfo=Gf(D,this.transformPagePoint),Vt.update(this.updatePoint,!0)},this.handlePointerUp=(C,D)=>{this.end();const{onEnd:$,onSessionEnd:R,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=qf(C.type==="pointercancel"?this.lastMoveEventInfo:Gf(D,this.transformPagePoint),this.history);this.startEvent&&$&&$(C,k),R&&R(C,k)},!vh(a))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=c||window;const m=Oo(a),g=Gf(m,this.transformPagePoint),{point:v}=g,{timestamp:x}=he;this.history=[{...v,timestamp:x}];const{onSessionStart:T}=o;T&&T(a,qf(g,this.history)),this.removeListeners=Do(fo(this.contextWindow,"pointermove",this.handlePointerMove),fo(this.contextWindow,"pointerup",this.handlePointerUp),fo(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(a){let o=a.parentElement;for(;o;){const l=getComputedStyle(o);(Ky.has(l.overflowX)||Ky.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(a){const o=this.scrollPositions.get(a);if(!o)return;const l=a===window,c=l?{x:window.scrollX,y:window.scrollY}:{x:a.scrollLeft,y:a.scrollTop},f={x:c.x-o.x,y:c.y-o.y};f.x===0&&f.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(a,c),Vt.update(this.updatePoint,!0))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ji(this.updatePoint)}}function Gf(n,a){return a?{point:a(n.point)}:n}function Qy(n,a){return{x:n.x-a.x,y:n.y-a.y}}function qf({point:n},a){return{point:n,delta:Qy(n,bb(a)),offset:Qy(n,NC(a)),velocity:LC(a,.1)}}function NC(n){return n[0]}function bb(n){return n[n.length-1]}function LC(n,a){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const c=bb(n);for(;o>=0&&(l=n[o],!(c.timestamp-l.timestamp>Gn(a)));)o--;if(!l)return{x:0,y:0};const f=Je(c.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-l.x)/f,y:(c.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function _C(n,{min:a,max:o},l){return a!==void 0&&n<a?n=l?Ht(a,n,l.min):Math.max(n,a):o!==void 0&&n>o&&(n=l?Ht(o,n,l.max):Math.min(n,o)),n}function Zy(n,a,o){return{min:a!==void 0?n.min+a:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function VC(n,{top:a,left:o,bottom:l,right:c}){return{x:Zy(n.x,o,c),y:Zy(n.y,a,l)}}function Fy(n,a){let o=a.min-n.min,l=a.max-n.max;return a.max-a.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function UC(n,a){return{x:Fy(n.x,a.x),y:Fy(n.y,a.y)}}function HC(n,a){let o=.5;const l=be(n),c=be(a);return c>l?o=So(a.min,a.max-l,n.min):l>c&&(o=So(n.min,n.max-c,a.min)),vn(0,1,o)}function YC(n,a){const o={};return a.min!==void 0&&(o.min=a.min-n.min),a.max!==void 0&&(o.max=a.max-n.min),o}const Nd=.35;function GC(n=Nd){return n===!1?n=0:n===!0&&(n=Nd),{x:Jy(n,"left","right"),y:Jy(n,"top","bottom")}}function Jy(n,a,o){return{min:Wy(n,a),max:Wy(n,o)}}function Wy(n,a){return typeof n=="number"?n:n[a]||0}const qC=new WeakMap;class XC{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=x=>{o?(this.stopAnimation(),this.snapToCursor(Oo(x).point)):this.pauseAnimation()},d=(x,T)=>{this.stopAnimation();const{drag:C,dragPropagation:D,onDragStart:$}=this.getProps();if(C&&!D&&(this.openDragLock&&this.openDragLock(),this.openDragLock=J4(C),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=T,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(N=>{let k=this.getAxisMotionValue(N).get()||0;if(xn.test(k)){const{projection:O}=this.visualElement;if(O&&O.layout){const K=O.layout.layoutBox[N];K&&(k=be(K)*(parseFloat(k)/100))}}this.originPoint[N]=k}),$&&Vt.postRender(()=>$(x,T)),kd(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},p=(x,T)=>{this.latestPointerEvent=x,this.latestPanInfo=T;const{dragPropagation:C,dragDirectionLock:D,onDirectionLock:$,onDrag:R}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:N}=T;if(D&&this.currentDirection===null){this.currentDirection=PC(N),this.currentDirection!==null&&$&&$(this.currentDirection);return}this.updateAxis("x",T.point,N),this.updateAxis("y",T.point,N),this.visualElement.render(),R&&R(x,T)},m=(x,T)=>{this.latestPointerEvent=x,this.latestPanInfo=T,this.stop(x,T),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Fe(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:v}=this.getProps();this.panSession=new vb(a,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:l,contextWindow:xb(this.visualElement),element:this.visualElement.current})}stop(a,o){const l=a||this.latestPointerEvent,c=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!l)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Vt.postRender(()=>p(l,c))}cancel(){this.isDragging=!1;const{projection:a,animationState:o}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(a,o,l){const{drag:c}=this.getProps();if(!l||!is(a,c,this.currentDirection))return;const f=this.getAxisMotionValue(a);let d=this.originPoint[a]+l[a];this.constraints&&this.constraints[a]&&(d=_C(d,this.constraints[a],this.elastic[a])),f.set(d)}resolveConstraints(){const{dragConstraints:a,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;a&&lo(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&l?this.constraints=VC(l.layoutBox,a):this.constraints=!1,this.elastic=GC(o),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Fe(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=YC(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:o}=this.getProps();if(!a||!lo(a))return!1;const l=a.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Kj(l,c.root,this.visualElement.getTransformPagePoint());let d=UC(c.layout.layoutBox,f);if(o){const p=o(qj(d));this.hasMutatedConstraints=!!p,p&&(d=ib(p))}return d}startAnimation(a){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=Fe(v=>{if(!is(v,o,this.currentDirection))return;let x=m&&m[v]||{};d&&(x={min:0,max:0});const T=c?200:1e6,C=c?40:1e7,D={type:"inertia",velocity:l?a[v]:0,bounceStiffness:T,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(v,D)});return Promise.all(g).then(p)}startAxisValueAnimation(a,o){const l=this.getAxisMotionValue(a);return kd(this.visualElement,a),l.start($h(a,l,0,o,this.visualElement,!1))}stopAnimation(){Fe(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Fe(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const o=`_drag${a.toUpperCase()}`,l=this.visualElement.getProps(),c=l[o];return c||this.visualElement.getValue(a,(l.initial?l.initial[a]:void 0)||0)}snapToCursor(a){Fe(o=>{const{drag:l}=this.getProps();if(!is(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[o],m=f.get()||0;f.set(a[o]-Ht(d,p,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!lo(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Fe(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const m=p.get();c[d]=HC({min:m,max:m},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Fe(d=>{if(!is(d,a,null))return;const p=this.getAxisMotionValue(d),{min:m,max:g}=this.constraints[d];p.set(Ht(m,g,c[d]))})}addListeners(){if(!this.visualElement.current)return;qC.set(this.visualElement,this);const a=this.visualElement.current,o=fo(a,"pointerdown",m=>{const{drag:g,dragListener:v=!0}=this.getProps();g&&v&&!Hv(m.target)&&this.start(m)}),l=()=>{const{dragConstraints:m}=this.getProps();lo(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Vt.read(l);const d=Co(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Fe(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=m[v].translate,x.set(x.get()+m[v].translate))}),this.visualElement.render())}));return()=>{d(),o(),f(),p&&p()}}getProps(){const a=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Nd,dragMomentum:p=!0}=a;return{...a,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function is(n,a,o){return(a===!0||a===n)&&(o===null||o===n)}function PC(n,a=10){let o=null;return Math.abs(n.y)>a?o="y":Math.abs(n.x)>a&&(o="x"),o}class KC extends Ei{constructor(a){super(a),this.removeGroupControls=We,this.removeListeners=We,this.controls=new XC(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We}update(){const{dragControls:a}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};a!==o&&(this.removeGroupControls(),a&&(this.removeGroupControls=a.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Iy=n=>(a,o)=>{n&&Vt.postRender(()=>n(a,o))};class QC extends Ei{constructor(){super(...arguments),this.removePointerDownListener=We}onPointerDown(a){this.session=new vb(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xb(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:Iy(a),onStart:Iy(o),onMove:l,onEnd:(f,d)=>{delete this.session,c&&Vt.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=fo(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ss={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Xf=!1;class ZC extends j.Component{componentDidMount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:f}=a;f&&(o.group&&o.group.add(f),l&&l.register&&c&&l.register(f),Xf&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Ss.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:o,visualElement:l,drag:c,isPresent:f}=this.props,{projection:d}=l;return d&&(d.isPresent=f,Xf=!0,c||a.layoutDependency!==o||o===void 0||a.isPresent!==f?d.willUpdate():this.safeToRemove(),a.isPresent!==f&&(f?d.promote():d.relegate()||Vt.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),xh.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=a;Xf=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function Sb(n){const[a,o]=Gv(),l=j.useContext(Jd);return h.jsx(ZC,{...n,layoutGroup:l,switchLayoutGroup:j.useContext(eb),isPresent:a,safeToRemove:o})}function FC(n,a,o){const l=ye(n)?n:Wa(n);return l.start($h("",l,a,o)),l.animation}const JC=(n,a)=>n.depth-a.depth;class WC{constructor(){this.children=[],this.isDirty=!1}add(a){th(this.children,a),this.isDirty=!0}remove(a){eh(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(JC),this.isDirty=!1,this.children.forEach(a)}}function IC(n,a){const o=ve.now(),l=({timestamp:c})=>{const f=c-o;f>=a&&(ji(l),n(f-a))};return Vt.setup(l,!0),()=>ji(l)}const wb=["TopLeft","TopRight","BottomLeft","BottomRight"],tE=wb.length,t1=n=>typeof n=="string"?parseFloat(n):n,e1=n=>typeof n=="number"||tt.test(n);function eE(n,a,o,l,c,f){c?(n.opacity=Ht(0,o.opacity??1,nE(l)),n.opacityExit=Ht(a.opacity??1,0,iE(l))):f&&(n.opacity=Ht(a.opacity??1,o.opacity??1,l));for(let d=0;d<tE;d++){const p=`border${wb[d]}Radius`;let m=n1(a,p),g=n1(o,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||e1(m)===e1(g)?(n[p]=Math.max(Ht(t1(m),t1(g),l),0),(xn.test(g)||xn.test(m))&&(n[p]+="%")):n[p]=g}(a.rotate||o.rotate)&&(n.rotate=Ht(a.rotate||0,o.rotate||0,l))}function n1(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const nE=Tb(0,.5,ov),iE=Tb(.5,.95,We);function Tb(n,a,o){return l=>l<n?0:l>a?1:o(So(n,a,l))}function i1(n,a){n.min=a.min,n.max=a.max}function sn(n,a){i1(n.x,a.x),i1(n.y,a.y)}function a1(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function r1(n,a,o,l,c){return n-=a,n=Rs(n,1/o,l),c!==void 0&&(n=Rs(n,1/c,l)),n}function aE(n,a=0,o=1,l=.5,c,f=n,d=n){if(xn.test(a)&&(a=parseFloat(a),a=Ht(d.min,d.max,a/100)-d.min),typeof a!="number")return;let p=Ht(f.min,f.max,l);n===f&&(p-=a),n.min=r1(n.min,a,o,p,c),n.max=r1(n.max,a,o,p,c)}function o1(n,a,[o,l,c],f,d){aE(n,a[o],a[l],a[c],a.scale,f,d)}const rE=["x","scaleX","originX"],oE=["y","scaleY","originY"];function l1(n,a,o,l){o1(n.x,a,rE,o?o.x:void 0,l?l.x:void 0),o1(n.y,a,oE,o?o.y:void 0,l?l.y:void 0)}function s1(n){return n.translate===0&&n.scale===1}function jb(n){return s1(n.x)&&s1(n.y)}function c1(n,a){return n.min===a.min&&n.max===a.max}function lE(n,a){return c1(n.x,a.x)&&c1(n.y,a.y)}function u1(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function Cb(n,a){return u1(n.x,a.x)&&u1(n.y,a.y)}function f1(n){return be(n.x)/be(n.y)}function d1(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class sE{constructor(){this.members=[]}add(a){th(this.members,a),a.scheduleRender()}remove(a){if(eh(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(a){const o=this.members.findIndex(c=>a===c);if(o===0)return!1;let l;for(let c=o;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(a,o){const l=this.lead;if(a!==l&&(this.prevLead=l,this.lead=a,a.show(),l)){l.instance&&l.scheduleRender(),a.scheduleRender(),a.resumeFrom=l,o&&(a.resumeFrom.preserveOpacity=!0),l.snapshot&&(a.snapshot=l.snapshot,a.snapshot.latestValues=l.animationValues||l.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:c}=a.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:o,resumingFrom:l}=a;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cE(n,a,o){let l="";const c=n.x.translate/a.x,f=n.y.translate/a.y,d=o?.z||0;if((c||f||d)&&(l=`translate3d(${c}px, ${f}px, ${d}px) `),(a.x!==1||a.y!==1)&&(l+=`scale(${1/a.x}, ${1/a.y}) `),o){const{transformPerspective:g,rotate:v,rotateX:x,rotateY:T,skewX:C,skewY:D}=o;g&&(l=`perspective(${g}px) ${l}`),v&&(l+=`rotate(${v}deg) `),x&&(l+=`rotateX(${x}deg) `),T&&(l+=`rotateY(${T}deg) `),C&&(l+=`skewX(${C}deg) `),D&&(l+=`skewY(${D}deg) `)}const p=n.x.scale*a.x,m=n.y.scale*a.y;return(p!==1||m!==1)&&(l+=`scale(${p}, ${m})`),l||"none"}const Pf=["","X","Y","Z"],uE=1e3;let fE=0;function Kf(n,a,o,l){const{latestValues:c}=a;c[n]&&(o[n]=c[n],a.setStaticValue(n,0),l&&(l[n]=0))}function Eb(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const o=fb(a);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Vt,!(c||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Eb(l)}function Ab({attachResizeListener:n,defaultParent:a,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},p=a?.()){this.id=fE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pE),this.nodes.forEach(xE),this.nodes.forEach(vE),this.nodes.forEach(mE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new WC)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new ah),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const m=this.eventHandlers.get(d);m&&m.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Yv(d)&&!nj(d),this.instance=d;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),n){let v,x=0;const T=()=>this.root.updateBlockedByResize=!1;Vt.read(()=>{x=window.innerWidth}),n(d,()=>{const C=window.innerWidth;C!==x&&(x=C,this.root.updateBlockedByResize=!0,v&&v(),v=IC(T,250),Ss.hasAnimatedSinceResize&&(Ss.hasAnimatedSinceResize=!1,this.nodes.forEach(m1)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:T,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const D=this.options.transition||g.getDefaultTransition()||jE,{onLayoutAnimationStart:$,onLayoutAnimationComplete:R}=g.getProps(),N=!this.targetLayout||!Cb(this.targetLayout,C),k=!x&&T;if(this.options.layoutRoot||this.resumeFrom||k||x&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...gh(D,"layout"),onPlay:$,onComplete:R};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(v,k)}else x||m1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ji(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Eb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(h1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(p1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yE),this.nodes.forEach(dE),this.nodes.forEach(hE)):this.nodes.forEach(p1),this.clearAllSnapshots();const p=ve.now();he.delta=vn(0,1e3/60,p-he.timestamp),he.timestamp=p,he.isProcessing=!0,kf.update.process(he),kf.preRender.process(he),kf.render.process(he),he.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gE),this.sharedNodes.forEach(SE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!be(this.snapshot.measuredBox.x)&&!be(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const m=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!jb(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,v=g!==this.prevTransformTemplateValue;d&&this.instance&&(p||Ki(this.latestValues)||v)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return d&&(m=this.removeTransform(m)),CE(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return ae();const p=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(EE))){const{scroll:g}=this.root;g&&(Ha(p.x,g.offset.x),Ha(p.y,g.offset.y))}return p}removeElementScroll(d){const p=ae();if(sn(p,d),this.scroll?.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:v,options:x}=g;g!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&sn(p,d),Ha(p.x,v.offset.x),Ha(p.y,v.offset.y))}return p}applyTransform(d,p=!1){const m=ae();sn(m,d);for(let g=0;g<this.path.length;g++){const v=this.path[g];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Ya(m,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Ki(v.latestValues)&&Ya(m,v.latestValues)}return Ki(this.latestValues)&&Ya(m,this.latestValues),m}removeTransform(d){const p=ae();sn(p,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!Ki(g.latestValues))continue;Dd(g.latestValues)&&g.updateSnapshot();const v=ae(),x=g.measurePageBox();sn(v,x),l1(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,v)}return Ki(this.latestValues)&&l1(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==he.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!this.layout||!(v||x))return;this.resolvedRelativeTargetAt=he.timestamp;const T=this.getClosestProjectingParent();T&&this.linkedParentVersion!==T.layoutVersion&&!T.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(T&&T.layout?this.createRelativeTarget(T,this.layout.layoutBox,T.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sn(this.target,this.layout.layoutBox),rb(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?this.createRelativeTarget(T,this.target,T.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dd(this.parent.latestValues)||ab(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,m){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Os(this.relativeTargetOrigin,p,m),sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===he.timestamp&&(m=!1),m)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;sn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,T=this.treeScale.y;Pj(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ae());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(a1(this.prevProjectionDelta.x,this.projectionDelta.x),a1(this.prevProjectionDelta.y,this.projectionDelta.y)),ho(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==T||!d1(this.projectionDelta.x,this.prevProjectionDelta.x)||!d1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ga(),this.projectionDelta=Ga(),this.projectionDeltaWithTransform=Ga()}setAnimationOrigin(d,p=!1){const m=this.snapshot,g=m?m.latestValues:{},v={...this.latestValues},x=Ga();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const T=ae(),C=m?m.source:void 0,D=this.layout?this.layout.source:void 0,$=C!==D,R=this.getStack(),N=!R||R.members.length<=1,k=!!($&&!N&&this.options.crossfade===!0&&!this.path.some(TE));this.animationProgress=0;let O;this.mixTargetDelta=K=>{const P=K/1e3;g1(x.x,d.x,P),g1(x.y,d.y,P),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Os(T,this.layout.layoutBox,this.relativeParent.layout.layoutBox),wE(this.relativeTarget,this.relativeTargetOrigin,T,P),O&&lE(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=ae()),sn(O,this.relativeTarget)),$&&(this.animationValues=v,eE(v,g,this.latestValues,P,k,N)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ji(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Vt.update(()=>{Ss.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Wa(0)),this.currentAnimation=FC(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:v}=d;if(!(!p||!m||!g)){if(this!==d&&this.layout&&g&&Mb(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||ae();const x=be(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+x;const T=be(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+T}sn(p,m),Ya(p,v),ho(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new sE),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&Kf("z",d,g,this.animationValues);for(let v=0;v<Pf.length;v++)Kf(`rotate${Pf[v]}`,d,g,this.animationValues),Kf(`skew${Pf[v]}`,d,g,this.animationValues);d.render();for(const v in g)d.setStaticValue(v,g[v]),this.animationValues&&(this.animationValues[v]=g[v]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=bs(p?.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=bs(p?.pointerEvents)||""),this.hasProjected&&!Ki(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const v=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=cE(this.projectionDeltaWithTransform,this.treeScale,v);m&&(x=m(v,x)),d.transform=x;const{x:T,y:C}=this.projectionDelta;d.transformOrigin=`${T.origin*100}% ${C.origin*100}% 0`,g.animationValues?d.opacity=g===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:d.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const D in $d){if(v[D]===void 0)continue;const{correct:$,applyTo:R,isCSSVariable:N}=$d[D],k=x==="none"?v[D]:$(v[D],g);if(R){const O=R.length;for(let K=0;K<O;K++)d[R[K]]=k}else N?this.options.visualElement.renderState.vars[D]=k:d[D]=k}this.options.layoutId&&(d.pointerEvents=g===this?bs(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(h1),this.root.sharedNodes.clear()}}}function dE(n){n.updateLayout()}function hE(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=n.layout,{animationType:c}=n.options,f=a.source!==n.layout.source;c==="size"?Fe(v=>{const x=f?a.measuredBox[v]:a.layoutBox[v],T=be(x);x.min=o[v].min,x.max=x.min+T}):Mb(c,a.layoutBox,o)&&Fe(v=>{const x=f?a.measuredBox[v]:a.layoutBox[v],T=be(o[v]);x.max=x.min+T,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+T)});const d=Ga();ho(d,o,a.layoutBox);const p=Ga();f?ho(p,n.applyTransform(l,!0),a.measuredBox):ho(p,o,a.layoutBox);const m=!jb(d);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:T}=v;if(x&&T){const C=ae();Os(C,a.layoutBox,x.layoutBox);const D=ae();Os(D,o,T.layoutBox),Cb(C,D)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=D,n.relativeTargetOrigin=C,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:a,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function pE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function mE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function gE(n){n.clearSnapshot()}function h1(n){n.clearMeasurements()}function p1(n){n.isLayoutDirty=!1}function yE(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function m1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function xE(n){n.resolveTargetDelta()}function vE(n){n.calcProjection()}function bE(n){n.resetSkewAndRotation()}function SE(n){n.removeLeadSnapshot()}function g1(n,a,o){n.translate=Ht(a.translate,0,o),n.scale=Ht(a.scale,1,o),n.origin=a.origin,n.originPoint=a.originPoint}function y1(n,a,o,l){n.min=Ht(a.min,o.min,l),n.max=Ht(a.max,o.max,l)}function wE(n,a,o,l){y1(n.x,a.x,o.x,l),y1(n.y,a.y,o.y,l)}function TE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const jE={duration:.45,ease:[.4,0,.1,1]},x1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),v1=x1("applewebkit/")&&!x1("chrome/")?Math.round:We;function b1(n){n.min=v1(n.min),n.max=v1(n.max)}function CE(n){b1(n.x),b1(n.y)}function Mb(n,a,o){return n==="position"||n==="preserve-aspect"&&!OC(f1(a),f1(o),.2)}function EE(n){return n!==n.root&&n.scroll?.wasRoot}const AE=Ab({attachResizeListener:(n,a)=>Co(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qf={current:void 0},$b=Ab({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Qf.current){const n=new AE({});n.mount(window),n.setOptions({layoutScroll:!0}),Qf.current=n}return Qf.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ME={pan:{Feature:QC},drag:{Feature:KC,ProjectionNode:$b,MeasureLayout:Sb}};function S1(n,a,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,f=l[c];f&&Vt.postRender(()=>f(a,Oo(a)))}class $E extends Ei{mount(){const{current:a}=this.node;a&&(this.unmount=W4(a,(o,l)=>(S1(this.node,l,"Start"),c=>S1(this.node,c,"End"))))}unmount(){}}class DE extends Ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Do(Co(this.node.current,"focus",()=>this.onFocus()),Co(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function w1(n,a,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),f=l[c];f&&Vt.postRender(()=>f(a,Oo(a)))}class zE extends Ei{mount(){const{current:a}=this.node;a&&(this.unmount=ej(a,(o,l)=>(w1(this.node,l,"Start"),(c,{success:f})=>w1(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ld=new WeakMap,Zf=new WeakMap,RE=n=>{const a=Ld.get(n.target);a&&a(n)},OE=n=>{n.forEach(RE)};function kE({root:n,...a}){const o=n||document;Zf.has(o)||Zf.set(o,{});const l=Zf.get(o),c=JSON.stringify(a);return l[c]||(l[c]=new IntersectionObserver(OE,{root:n,...a})),l[c]}function BE(n,a,o){const l=kE(a);return Ld.set(n,o),l.observe(n),()=>{Ld.delete(n),l.unobserve(n)}}const NE={some:0,all:1};class LE extends Ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:f}=a,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:NE[c]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),T=g?v:x;T&&T(m)};return BE(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:o}=this.node;["amount","margin","root"].some(_E(a,o))&&this.startObserver()}unmount(){}}function _E({viewport:n={}},{viewport:a={}}={}){return o=>n[o]!==a[o]}const VE={inView:{Feature:LE},tap:{Feature:zE},focus:{Feature:DE},hover:{Feature:$E}},UE={layout:{ProjectionNode:$b,MeasureLayout:Sb}},HE={...AC,...VE,...ME,...UE},I=Gj(HE,nC),YE={some:0,all:1};function GE(n,a,{root:o,margin:l,amount:c="some"}={}){const f=Bv(n),d=new WeakMap,p=g=>{g.forEach(v=>{const x=d.get(v.target);if(v.isIntersecting!==!!x)if(v.isIntersecting){const T=a(v.target,v);typeof T=="function"?d.set(v.target,T):m.unobserve(v.target)}else typeof x=="function"&&(x(v),d.delete(v.target))})},m=new IntersectionObserver(p,{root:o,rootMargin:l,threshold:typeof c=="number"?c:YE[c]});return f.forEach(g=>m.observe(g)),()=>m.disconnect()}function sr(n,{root:a,margin:o,amount:l,once:c=!1,initial:f=!1}={}){const[d,p]=j.useState(f);return j.useEffect(()=>{if(!n.current||c&&d)return;const m=()=>(p(!0),c?void 0:()=>p(!1)),g={root:a&&a.current||void 0,margin:o,amount:l};return GE(n.current,m,g)},[a,n,o,c,l]),d}const qE=w(I.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 24px;
  background: rgba(253, 249, 238, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(253, 249, 238, 0.15);
  transition: all ${Bt.normal};
`,XE=w.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,PE=w.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 32px;
    width: auto;

    @media (min-width: ${J.tablet}) {
      height: 44px;
    }
  }
`,KE=w.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${J.desktop}) {
    display: flex;
  }
`,QE=w.a`
  color: ${b.cream};
  font-weight: 500;
  font-size: 15px;
  transition: color ${Bt.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${b.gold};
    transition: width ${Bt.normal};
  }

  &:hover {
    color: ${b.gold};

    &::after {
      width: 100%;
    }
  }
`,ZE=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,FE=w.div`
  display: none;
  align-items: center;
  gap: 12px;

  @media (min-width: ${J.desktop}) {
    display: flex;
  }
`,Dh=w(I.button)`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all ${Bt.fast};

  @media (min-width: ${J.tablet}) {
    padding: 12px 24px;
    font-size: 15px;
  }
`,JE=w(Dh)`
  background: transparent;
  color: ${b.cream};
  border: 2px solid ${b.cream};

  &:hover {
    background: ${b.cream};
    color: ${b.darkBrown};
  }
`,T1=w(Dh)`
  background: ${b.red};
  color: ${b.cream};
  border: none;

  &:hover {
    background: ${b.redDark};
    transform: translateY(-2px);
    box-shadow: ${Ja.glowRed};
  }
`,WE=w.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (min-width: ${J.desktop}) {
    display: none;
  }

  span {
    width: 100%;
    height: 3px;
    background: ${b.cream};
    border-radius: 2px;
    transition: all ${Bt.normal};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${n=>n.$isOpen?"rotate(45deg) translateY(10px)":"rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${n=>n.$isOpen?0:1};
    }

    &:nth-child(3) {
      transform: ${n=>n.$isOpen?"rotate(-45deg) translateY(-10px)":"rotate(0)"};
    }
  }
`,IE=w(I.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${b.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 999;
`,t6=w(I.a)`
  color: ${b.darkBrown};
  font-size: 24px;
  font-weight: 600;
  transition: color ${Bt.fast};

  &:hover {
    color: ${b.red};
  }
`,e6=w(I.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`,n6=w(Dh)`
  background: transparent;
  color: ${b.darkBrown};
  border: 2px solid ${b.darkBrown};

  &:hover {
    background: ${b.darkBrown};
    color: ${b.cream};
  }
`,i6=()=>{const[n,a]=j.useState(!1),o=ir(),l=()=>{a(!1),o("/dashboard")},c=()=>{a(!1),o("/dashboard")};j.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""},[n]);const f=(p,m)=>{p.preventDefault(),a(!1);const g=document.querySelector(m);g&&g.scrollIntoView({behavior:"smooth"})},d=[{label:"How It Works",href:"#how-it-works"},{label:"Prizes",href:"#prizes"},{label:"Collectibles",href:"#collectibles"},{label:"Pricing",href:"#pricing"}];return h.jsxs(h.Fragment,{children:[h.jsx(qE,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:h.jsxs(XE,{children:[h.jsx(PE,{href:"#",onClick:p=>f(p,"#hero"),children:h.jsx("img",{src:"/moneypools-landing/images/logo_desktop.png",alt:"MoneyPools"})}),h.jsx(KE,{children:d.map(p=>h.jsx(QE,{href:p.href,onClick:m=>f(m,p.href),children:p.label},p.href))}),h.jsxs(ZE,{children:[h.jsxs(FE,{children:[h.jsx(JE,{onClick:l,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Login"}),h.jsx(T1,{onClick:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Join Now"})]}),h.jsxs(WE,{$isOpen:n,onClick:()=>a(!n),children:[h.jsx("span",{}),h.jsx("span",{}),h.jsx("span",{})]})]})]})}),h.jsx(en,{children:n&&h.jsxs(IE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.map((p,m)=>h.jsx(t6,{href:p.href,onClick:g=>f(g,p.href),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},children:p.label},p.href)),h.jsxs(e6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[h.jsx(n6,{onClick:l,children:"Login"}),h.jsx(T1,{onClick:c,children:"Join Now"})]})]})})]})},a6=wt`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`,r6=wt`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(-360deg);
    opacity: 0;
  }
`,o6=w.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,l6=w.span`
  position: absolute;
  font-size: ${n=>n.$size}px;
  color: ${n=>n.$color};
  opacity: 0;
  animation: ${n=>n.$clockwise?a6:r6} ${n=>n.$duration}s linear infinite;
  animation-delay: ${n=>n.$delay}s;
  left: ${n=>n.$left}%;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 0 30px ${n=>n.$color}50;
  user-select: none;
`,j1=["$","€","¥"],s6=()=>{const n=j.useMemo(()=>{const o=[];for(let l=0;l<18;l++)o.push({id:l,size:Math.random()*50+40,left:Math.random()*90+5,duration:Math.random()*6+12,delay:Math.random()*12,color:Math.random()>.4?b.gold:b.coral,clockwise:Math.random()>.5,symbol:j1[Math.floor(Math.random()*j1.length)]});return o},[]);return h.jsx(o6,{children:n.map(a=>h.jsx(l6,{$size:a.size,$left:a.left,$duration:a.duration,$delay:a.delay,$color:a.color,$clockwise:a.clockwise,children:a.symbol},a.id))})},c6=wt`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-150px) rotate(720deg);
    opacity: 0;
  }
`,u6=wt`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-150px) rotate(-720deg);
    opacity: 0;
  }
`,f6=w.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,d6=w.img`
  position: absolute;
  width: ${n=>n.$size}px;
  height: ${n=>n.$size}px;
  object-fit: contain;
  opacity: 0;
  animation: ${n=>n.$clockwise?c6:u6} ${n=>n.$duration}s linear infinite;
  animation-delay: ${n=>n.$delay}s;
  left: ${n=>n.$left}%;
  user-select: none;
  filter: grayscale(20%) brightness(1.1);
`,C1=["/moneypools-landing/images/01.png","/moneypools-landing/images/03.png","/moneypools-landing/images/04.png","/moneypools-landing/images/05.png","/moneypools-landing/images/06.png","/moneypools-landing/images/07.png","/moneypools-landing/images/08.png","/moneypools-landing/images/09.png"],h6=()=>{const n=j.useMemo(()=>{const o=[];for(let l=0;l<8;l++)o.push({id:l,size:Math.random()*100+80,left:Math.random()*85+5,duration:Math.random()*8+16,delay:Math.random()*15,image:C1[Math.floor(Math.random()*C1.length)],clockwise:Math.random()>.5});return o},[]);return h.jsx(f6,{children:n.map(a=>h.jsx(d6,{src:a.image,alt:"","aria-hidden":"true",$size:a.size,$left:a.left,$duration:a.duration,$delay:a.delay,$clockwise:a.clockwise},a.id))})},p6=wt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(203, 51, 50, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(203, 51, 50, 0.7), 0 0 60px rgba(203, 51, 50, 0.3);
  }
`,m6=wt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,g6=w.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 60px;
  background: ${b.darkBrown};
  overflow: hidden;

  @media (min-width: ${J.tablet}) {
    padding: 120px 24px 80px;
  }
`,y6=w.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(230, 201, 86, 0.12) 0%, transparent 60%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`,x6=w(I.div)`
  position: relative;
  z-index: 10;
  width: 95%;
  max-width: 1012px;
  text-align: center;
  background: rgba(253, 249, 238, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 32px;
  padding: 48px 40px;
  overflow: hidden;

  @media (min-width: ${J.tablet}) {
    padding: 80px 64px;
    width: 1100px;
  }
`,v6=w.img`
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  object-fit: contain;
  opacity: 1;
  right: -80px;
  bottom: -40px;
  pointer-events: none;
  transform: rotate(-15deg);

  @media (min-width: ${J.tablet}) {
    width: 350px;
    height: 350px;
    right: -80px;
    bottom: -60px;
  }
`,b6=w(I.h1)`
  font-size: clamp(2.2rem, 7vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  color: ${b.cream};
`,S6=w(I.span)`
  display: inline-block;
  color: ${b.gold};
`,w6=w.br`
  display: block;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,T6=w(I.p)`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: ${b.cream};
  margin-bottom: 36px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
`,j6=w(I.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: ${J.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 48px;
  }
`,E1=w.div`
  text-align: center;
`,A1=w.div`
  font-size: 14px;
  color: ${b.cream};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
  opacity: 0.7;
`,C6=w.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${b.gold};
  font-family: 'Poppins', sans-serif;
`,M1=w(C6)`
  font-size: clamp(2.5rem, 6vw, 3.2rem);
  text-shadow: 0 0 30px ${b.gold}60, 0 0 60px ${b.gold}30;
`,E6=w(I.div)`
  margin-top: 32px;
  z-index: 10;
  text-align: center;
`,A6=w.div`
  font-size: 12px;
  color: ${b.cream};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  opacity: 0.7;
`,M6=w.div`
  display: inline-flex;
  align-items: center;
  background: ${b.red};
  padding: 10px 19px;
  border-radius: 10px;
`,$6=w.div`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 800;
  color: ${b.cream};
  font-family: 'Poppins', monospace;
  letter-spacing: 2px;
  animation: ${m6} 1s infinite;

  span {
    font-size: 1em;
    font-weight: 800;
    margin-left: 2px;
    margin-right: 8px;
    letter-spacing: 0;
  }
`,D6=w(I.button)`
  position: relative;
  z-index: 1;
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  background: ${b.red};
  color: ${b.cream};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${p6} 2s infinite;

  &:hover {
    background: ${b.redDark};
    transform: translateY(-3px);
    box-shadow: ${Ja.glowRed};
  }

  @media (min-width: ${J.tablet}) {
    padding: 20px 56px;
    font-size: 20px;
  }
`,Ff=["Community","Movement","Family","Network"],z6=()=>{const n=ir(),{playerCount:a,jackpot:o}=Ls(),[l,c]=j.useState(a),[f,d]=j.useState(o),[p,m]=j.useState(0);j.useEffect(()=>{const R=setInterval(()=>{m(N=>(N+1)%Ff.length)},3e3);return()=>clearInterval(R)},[]);const[g]=j.useState(()=>{const R=new Date;return R.setDate(R.getDate()+2),R.setHours(20,0,0,0),R}),[v,x]=j.useState({hours:0,minutes:0,seconds:0});j.useEffect(()=>{const N=l,k=f,O=a-N,K=o-k,P=Date.now(),Q=()=>{const U=Date.now()-P,F=Math.min(U/400,1),lt=1-Math.pow(1-F,3);c(Math.round(N+O*lt)),d(Math.round(k+K*lt)),F<1&&requestAnimationFrame(Q)};requestAnimationFrame(Q)},[a,o]),j.useEffect(()=>{const R=()=>{const O=g-new Date;if(O>0){const K=Math.floor(O/36e5),P=Math.floor(O%(1e3*60*60)/(1e3*60)),Q=Math.floor(O%(1e3*60)/1e3);x({hours:K,minutes:P,seconds:Q})}};R();const N=setInterval(()=>{R()},1e3);return()=>clearInterval(N)},[g]);const T=R=>R.toString().padStart(2,"0"),C=R=>R.toLocaleString(),D=R=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(R),$=()=>{n("/dashboard")};return h.jsxs(g6,{id:"hero",children:[h.jsx(y6,{}),h.jsx(s6,{}),h.jsx(h6,{}),h.jsxs(x6,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},children:[h.jsx(v6,{src:"/moneypools-landing/images/05.png",alt:"","aria-hidden":"true"}),h.jsxs(b6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:["The First"," ",h.jsx(en,{mode:"wait",children:h.jsx(S6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:Ff[p]},Ff[p])}),h.jsx(w6,{})," That Makes",h.jsx("br",{}),"Millionaires"]}),h.jsx(T6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:"No numbers to pick. No luck needed. Every draw has guaranteed winners, powered by a community that wins together. It's your turn."}),h.jsxs(j6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[h.jsxs(E1,{children:[h.jsx(A1,{children:"Players in Pool"}),h.jsx(M1,{children:C(l)})]}),h.jsxs(E1,{children:[h.jsx(A1,{children:"Current Jackpot"}),h.jsx(M1,{children:D(f)})]})]}),h.jsx(I.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:h.jsx(D6,{onClick:$,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Join Now"})})]}),h.jsxs(E6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[h.jsx(A6,{children:"Next Draw In"}),h.jsx(M6,{children:h.jsxs($6,{children:[T(v.hours),h.jsx("span",{children:"h"})," : ",T(v.minutes),h.jsx("span",{children:"min"})," : ",T(v.seconds),h.jsx("span",{children:"sec"})]})})]})]})},R6=w.section`
  padding: 100px 24px;
  background: ${b.darkBrown};
  position: relative;
  overflow: hidden;
`,O6=w.div`
  max-width: 1100px;
  margin: 0 auto;
`,k6=w(I.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${b.cream};
  text-align: center;
  margin-bottom: 64px;
`,B6=w.div`
  display: none;

  @media (min-width: ${J.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`,N6=w.div`
  display: block;
  overflow: hidden;
  position: relative;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,L6=w(I.div)`
  display: flex;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`,_6=w.div`
  min-width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
`,V6=w.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`,U6=w.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${n=>n.$active?b.gold:"rgba(253, 249, 238, 0.3)"};
  cursor: pointer;
  transition: background 0.3s ease;
  padding: 0;
`,$1=w(I.div)`
  text-align: center;
  padding: 32px 24px;
  background: rgba(253, 249, 238, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`,H6=wt`
  0% { transform: translateY(0); }
  100% { transform: translateY(-1232px); }
`,D1=w.div`
  width: 154px;
  height: 154px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 3px solid ${b.gold};
  box-shadow: 0 0 30px ${b.gold}40;
  background: ${b.darkBrown};
`,z1=w.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -77px;
  animation: ${n=>n.$isSpinning?H6:"none"} 0.35s linear infinite;
  transform: translateY(${n=>n.$finalPosition}px);
  transition: ${n=>n.$isSpinning?"none":"transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)"};
`,as=w(I.img)`
  width: 154px;
  height: 154px;
  border-radius: 17px;
  object-fit: cover;
  flex-shrink: 0;
`,R1=w(I.div)`
  font-size: 2rem;
  font-weight: 900;
  color: #00FF00;
  text-shadow: 0 0 20px #00FF00, 0 0 40px #00FF00;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,O1=w.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: ${b.gold};
  color: ${b.darkBrown};
  font-weight: 700;
  font-size: 14px;
  border-radius: 30px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,k1=w.h3`
  font-size: 1.4rem;
  color: ${b.cream};
  margin-bottom: 12px;
`,B1=w.p`
  font-size: 1rem;
  color: ${b.cream};
  opacity: 0.8;
  line-height: 1.6;
`,Y6=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),[o,l]=j.useState(!1),[c,f]=j.useState([!1,!1,!1]),[d,p]=j.useState([!1,!1,!1]),[m,g]=j.useState(0),v=["/moneypools-landing/images/01.png","/moneypools-landing/images/03.png","/moneypools-landing/images/04.png","/moneypools-landing/images/05.png","/moneypools-landing/images/06.png","/moneypools-landing/images/07.png","/moneypools-landing/images/08.png","/moneypools-landing/images/09.png"],x=[{number:1,title:"Subscribe",description:"Pick a pool, subscribe, and you're in every draw. No tickets, no numbers to pick.",avatar:"/moneypools-landing/images/01.png",targetIndex:0},{number:2,title:"Watch Jackpots Grow",description:"Every new player increases the prize. More players = bigger winnings for you.",avatar:"/moneypools-landing/images/03.png",targetIndex:1},{number:3,title:"Start Winning!",description:"Every 3 days, one player wins the entire jackpot. No rollovers. 50K players = €50K prize.",avatar:"/moneypools-landing/images/05.png",targetIndex:3}],T=k=>-(k*154),C=()=>{l(!0),f([!0,!0,!0]),p([!1,!1,!1]),setTimeout(()=>{f([!1,!0,!0]),p([!0,!1,!1])},500),setTimeout(()=>{f([!1,!1,!0]),p([!0,!0,!1])},750),setTimeout(()=>{f([!1,!1,!1]),p([!0,!0,!0])},1e3)},D=()=>{l(!1),p([!1,!1,!1])},$={hidden:{},visible:{transition:{staggerChildren:.2}}},R={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},N=(k,O)=>{O.offset.x<-50&&m<x.length-1?g(m+1):O.offset.x>50&&m>0&&g(m-1)};return h.jsx(R6,{id:"how-it-works",ref:n,children:h.jsxs(O6,{onMouseEnter:C,onMouseLeave:D,children:[h.jsx(k6,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"How It Works"}),h.jsx(B6,{as:I.div,variants:$,initial:"hidden",animate:a?"visible":"hidden",children:x.map((k,O)=>h.jsxs($1,{variants:R,children:[h.jsx(D1,{children:d[O]?h.jsx(R1,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:20},children:"WIN!"}):h.jsxs(z1,{$isSpinning:c[O],$finalPosition:T(k.targetIndex),children:[v.map((K,P)=>h.jsx(as,{src:K,alt:k.title},P)),v.map((K,P)=>h.jsx(as,{src:K,alt:k.title},`duplicate-${P}`))]})}),h.jsxs(O1,{children:["Step ",k.number]}),h.jsx(k1,{children:k.title}),h.jsx(B1,{children:k.description})]},k.number))}),h.jsxs(N6,{onTouchStart:C,onTouchEnd:D,children:[h.jsx(L6,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,onDragEnd:N,animate:{x:`-${m*100}%`},transition:{type:"spring",stiffness:300,damping:30},children:x.map((k,O)=>h.jsx(_6,{children:h.jsxs($1,{as:I.div,initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},children:[h.jsx(D1,{children:d[O]?h.jsx(R1,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:20},children:"WIN!"}):h.jsxs(z1,{$isSpinning:c[O],$finalPosition:T(k.targetIndex),children:[v.map((K,P)=>h.jsx(as,{src:K,alt:k.title},P)),v.map((K,P)=>h.jsx(as,{src:K,alt:k.title},`duplicate-${P}`))]})}),h.jsxs(O1,{children:["Step ",k.number]}),h.jsx(k1,{children:k.title}),h.jsx(B1,{children:k.description})]})},k.number))}),h.jsx(V6,{children:x.map((k,O)=>h.jsx(U6,{$active:m===O,onClick:()=>g(O)},O))})]})]})})},G6=wt`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,q6=wt`
  0%, 100% { box-shadow: 0 0 20px ${b.gold}40; }
  50% { box-shadow: 0 0 40px ${b.gold}60; }
`;wt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const X6=wt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`,P6=w.section`
  padding: 100px 24px;
  background: ${b.cream};
  position: relative;
  overflow: hidden;
`,K6=w.div`
  max-width: 1100px;
  margin: 0 auto;
`,Q6=w(I.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-align: center;
  margin-bottom: 20px;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: ${b.darkBrown};
  line-height: 1.2;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${b.gold}, transparent);
    border-radius: 2px;

    @media (min-width: ${J.tablet}) {
      width: 600px;
      height: 4px;
    }
  }
`,Z6=w(I.p)`
  font-size: 0.95rem;
  color: ${b.darkBrown};
  text-align: center;
  max-width: 900px;
  margin: 0 auto 56px;
  font-weight: 500;
  line-height: 1.6;
  animation: ${X6} 3s ease-in-out infinite;

  span {
    color: ${b.red};
    font-weight: 700;
  }
`,F6=w(I.div)`
  background: ${b.darkBrown};
  border-radius: 24px;
  padding: 48px 32px;
  text-align: center;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(230, 201, 86, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }
`,J6=w.div`
  font-size: 14px;
  color: ${b.cream};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  opacity: 0.8;
`,W6=w.div`
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  color: ${b.gold};
  font-family: 'Poppins', sans-serif;
  line-height: 1;
  margin-bottom: 12px;
  text-shadow: ${Ja.glow};
`,I6=w.div`
  font-size: 1rem;
  color: ${b.cream};
  opacity: 0.7;
`,tA=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${J.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,N1=w(I.div)`
  background: ${b.darkBrown};
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid ${n=>n.$variant==="gold"?b.gold:b.coral};
  animation: ${q6} 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      ${n=>n.$variant==="gold"?`${b.gold}20`:`${b.coral}20`} 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`,L1=w.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  position: relative;
`,_1=w(I.img)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid ${n=>n.$color||b.gold};
  box-shadow: 0 0 30px ${n=>n.$color||b.gold}40;
`,V1=w.div`
  display: inline-block;
  background: ${n=>n.$variant==="gold"?`linear-gradient(135deg, ${b.gold}, #FFE566)`:`linear-gradient(135deg, ${b.coral}, ${b.red})`};
  color: ${b.darkBrown};
  font-size: 14px;
  font-weight: 800;
  padding: 8px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`,U1=w.h3`
  font-size: 1.8rem;
  color: ${b.cream};
  margin-bottom: 16px;
  font-weight: 700;

  @media (min-width: ${J.tablet}) {
    font-size: 2rem;
  }
`,H1=w.div`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  color: ${n=>n.$color||b.gold};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 16px;
  animation: ${G6} 2s ease-in-out infinite;
`,Y1=w.p`
  font-size: 1rem;
  color: ${b.cream};
  opacity: 0.8;
  line-height: 1.7;
  max-width: 280px;
  margin: 0 auto;
`,eA=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),{playerCount:o,jackpot:l}=Ls(),c=d=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:0}).format(d),f={hidden:{opacity:0,y:40,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6}}};return h.jsx(P6,{id:"prizes",ref:n,children:h.jsxs(K6,{children:[h.jsx(Q6,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"The Jackpot Grows With You"}),h.jsxs(Z6,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},children:["More players means ",h.jsx("span",{children:"bigger prizes"}),". The jackpot equals the total number of players in your pool. For every new million players, a new pool gets started."]}),h.jsxs(F6,{initial:{opacity:0,scale:.95},animate:a?{opacity:1,scale:1}:{},transition:{duration:.6,delay:.2},children:[h.jsx(J6,{children:"Current Jackpot"}),h.jsx(W6,{children:c(l)}),h.jsx(I6,{children:"Growing with every new player"})]}),h.jsxs(tA,{children:[h.jsxs(N1,{$variant:"gold",variants:f,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[h.jsx(L1,{children:h.jsx(_1,{src:"/moneypools-landing/images/06.png",alt:"Fair Odds",$color:b.gold,whileHover:{scale:1.05,rotate:3},transition:{type:"spring",stiffness:300}})}),h.jsx(V1,{$variant:"gold",children:"Transparent"}),h.jsx(U1,{children:"Fair Odds for Everyone"}),h.jsxs(H1,{$color:b.gold,children:["1 in ",o.toLocaleString()]}),h.jsx(Y1,{children:"Your odds are always equal to the number of players in the pool. Simple, transparent, and fair for everyone."})]}),h.jsxs(N1,{$variant:"coral",variants:f,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.4},children:[h.jsx(L1,{children:h.jsx(_1,{src:"/moneypools-landing/images/04.png",alt:"Guaranteed Winner",$color:b.coral,whileHover:{scale:1.05,rotate:-3},transition:{type:"spring",stiffness:300}})}),h.jsx(V1,{$variant:"coral",children:"Every Draw"}),h.jsx(U1,{children:"Guaranteed Winner"}),h.jsx(H1,{$color:b.coral,children:"100%"}),h.jsx(Y1,{children:"Every single draw produces a winner. No rollovers, no empty rounds. Someone always wins the jackpot."})]})]})]})})},nA=w.section`
  padding: 100px 24px;
  background: ${b.darkBrown};
  position: relative;
  overflow: hidden;
`,iA=w.div`
  max-width: 1200px;
  margin: 0 auto;
`,aA=w(I.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${b.cream};
  text-align: center;
  margin-bottom: 16px;
`,rA=w(I.p)`
  font-size: 1.1rem;
  color: ${b.cream};
  text-align: center;
  opacity: 0.8;
  max-width: 550px;
  margin: 0 auto 48px;
`,oA=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 64px;

  @media (min-width: ${J.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (min-width: ${J.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Db=w(I.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 12px;
  cursor: pointer;
  transition: all ${Bt.normal};
  border: 2px solid ${n=>n.$highlighted?b.gold:"transparent"};
  overflow: hidden;
  transform: ${n=>n.$highlighted?"translateY(-8px)":"none"};
  box-shadow: ${n=>n.$highlighted?Ja.glow:"none"};

  &:hover {
    border-color: ${b.gold};
    transform: translateY(-8px);
    box-shadow: ${Ja.glow};

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    transition: transform ${Bt.normal};
    transform: ${n=>n.$highlighted?"scale(1.05)":"none"};
  }
`,lA=w.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(21, 1, 0, 0.8);
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  opacity: ${n=>n.$highlighted?1:0};
  transform: ${n=>n.$highlighted?"translateY(0)":"translateY(10px)"};
  transition: all ${Bt.normal};

  ${Db}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`,sA=w.span`
  color: ${b.cream};
  font-weight: 600;
  font-size: 13px;
`,cA=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${J.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,uA=w(I.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${Bt.normal};

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: ${b.coral};
  }
`,fA=w.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: ${b.gradientGoldCoral};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
    fill: ${b.darkBrown};
  }
`,dA=w.h3`
  font-size: 1.2rem;
  color: ${b.cream};
  margin-bottom: 8px;
`,hA=w.p`
  font-size: 0.9rem;
  color: ${b.cream};
  opacity: 0.7;
  line-height: 1.5;
`,pA=w.span`
  display: inline-block;
  background: ${b.gold};
  color: ${b.darkBrown};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,mA=()=>h.jsx("svg",{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})}),gA=()=>h.jsx("svg",{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"})}),yA=()=>h.jsx("svg",{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7h2l-4 9 1-9h-2l2-6h-.83zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}),xA=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),[o,l]=j.useState(0);j.useEffect(()=>{const m=setInterval(()=>{l(g=>(g+1)%8)},2e3);return()=>clearInterval(m)},[]);const c=[{id:"01",name:"Tiger Tech"},{id:"03",name:"Lucky Cat"},{id:"04",name:"Fortune Paw"},{id:"05",name:"Golden Bear"},{id:"06",name:"Neon Cat"},{id:"07",name:"Fire Tiger"},{id:"08",name:"Money Mouse"},{id:"09",name:"Prosperity"}],f=[{Icon:mA,title:"Form Syndicates",description:"Team up with up to 10 friends. Win together, share together.",badge:null},{Icon:gA,title:"Gift Tickets",description:"Send tickets to friends and family. Spread the luck around.",badge:null},{Icon:yA,title:"10x Your Odds",description:"Buy up to 9 extra tickets and multiply your chances.",badge:"Power Up"}],d={hidden:{},visible:{transition:{staggerChildren:.1}}},p={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4}}};return h.jsx(nA,{id:"collectibles",ref:n,children:h.jsxs(iA,{children:[h.jsx(aA,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"Collect Unique Avatars"}),h.jsx(rA,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},children:"Every player gets a unique 3D collectible. Build your collection as you play."}),h.jsx(oA,{as:I.div,variants:d,initial:"hidden",animate:a?"visible":"hidden",children:c.map((m,g)=>h.jsxs(Db,{variants:p,$highlighted:g===o,children:[h.jsx("img",{src:`/moneypools-landing/images/${m.id}.png`,alt:m.name}),h.jsx(lA,{$highlighted:g===o,children:h.jsx(sA,{children:m.name})})]},m.id))}),h.jsx(cA,{as:I.div,variants:d,initial:"hidden",animate:a?"visible":"hidden",children:f.map(m=>h.jsxs(uA,{variants:p,children:[h.jsx(fA,{children:h.jsx(m.Icon,{})}),h.jsx(dA,{children:m.title}),h.jsx(hA,{children:m.description}),m.badge&&h.jsx(pA,{children:m.badge})]},m.title))})]})})},vA=w.section`
  padding: 100px 0;
  background: ${b.cream};
  position: relative;
  overflow: hidden;
`,bA=w.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`,SA=w(I.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${b.darkBrown};
  text-align: center;
  margin-bottom: 48px;
`,wA=w.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 60px;

  @media (max-width: ${J.tablet}) {
    padding: 0 40px;
  }
`,TA=w.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`,jA=w(I.div)`
  display: flex;
  gap: 24px;
`,CA=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
`,G1=w.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${b.darkBrown};
  border: none;
  color: ${b.cream};
  font-size: 20px;
  cursor: pointer;
  transition: all ${Bt.normal};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${b.red};
    transform: scale(1.1);
  }
`,EA=w.div`
  display: flex;
  gap: 8px;
`,AA=w.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${n=>n.$active?b.gold:b.darkBrown};
  opacity: ${n=>n.$active?1:.3};
  cursor: pointer;
  transition: all ${Bt.normal};

  &:hover {
    opacity: 0.7;
  }
`,MA=w(I.div)`
  background: ${b.white};
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(21, 1, 0, 0.08);
  transition: all ${Bt.normal};
  border: 1px solid rgba(21, 1, 0, 0.08);
  flex-shrink: 0;
  width: 340px;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(21, 1, 0, 0.12);
  }
`,$A=w.div`
  font-size: 2rem;
  font-weight: 900;
  color: ${b.darkBrown};
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`,DA=w.p`
  font-size: 0.95rem;
  color: ${b.darkBrown};
  line-height: 1.8;
  margin-bottom: 24px;
  font-weight: 400;
`,zA=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(21, 1, 0, 0.1);
`,RA=w.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${b.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${b.darkBrown};
  border: 2px solid rgba(21, 1, 0, 0.1);
`,OA=w.div``,kA=w.div`
  font-weight: 600;
  color: ${b.darkBrown};
  font-size: 0.9rem;
`,BA=w.div`
  font-size: 0.8rem;
  color: ${b.darkBrown};
  opacity: 0.6;
`,NA=w.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`,LA=w.span`
  color: ${b.gold};
  font-size: 16px;
`,_A=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),[o,l]=j.useState(0),[c,f]=j.useState(4),d=[{amount:"€47,230",text:"Could not believe it when I got the notification. Three weeks in and I am paying off my loans.",name:"Sarah M.",location:"Dublin, Ireland",initials:"SM"},{amount:"€52,100",text:"My coworkers and I formed a syndicate. We won and split it five ways. Still life-changing.",name:"Marcus J.",location:"Cork, Ireland",initials:"MJ"},{amount:"€31,500",text:"Way better odds than anything else out there. Won on my second month of playing.",name:"Emily R.",location:"Galway, Ireland",initials:"ER"},{amount:"€49,800",text:"My wife gifted me a subscription. Best gift ever. I won the very next draw.",name:"David K.",location:"Limerick, Ireland",initials:"DK"},{amount:"€38,900",text:"Joined with my friends from college. We're all winners now. Such a fair system!",name:"Lisa O.",location:"Waterford, Ireland",initials:"LO"},{amount:"€45,600",text:"The multiplier feature really works! Got 3x tickets and won on the fourth draw.",name:"Tom H.",location:"Drogheda, Ireland",initials:"TH"},{amount:"€58,200",text:"Best decision ever. The odds are transparent and fair. Won after 2 months.",name:"Rachel B.",location:"Dundalk, Ireland",initials:"RB"},{amount:"€41,300",text:"Invited 5 friends and my odds multiplied. Won in my third draw. Unbelievable!",name:"James P.",location:"Sligo, Ireland",initials:"JP"},{amount:"€53,700",text:"The guaranteed winner per draw sold me. No fake promises. Won after a month!",name:"Anna K.",location:"Kilkenny, Ireland",initials:"AK"},{amount:"€36,400",text:"My sister recommended it. I thought why not. Won €36k three weeks later!",name:"Michael D.",location:"Wexford, Ireland",initials:"MD"},{amount:"€50,900",text:"The fact that the jackpot equals the players makes it so fair. Best platform ever.",name:"Sophie L.",location:"Carlow, Ireland",initials:"SL"},{amount:"€44,100",text:"Formed a syndicate with 8 people. We won and everyone got a nice share. Amazing!",name:"Kevin W.",location:"Athlone, Ireland",initials:"KW"}];j.useEffect(()=>{const x=()=>{window.innerWidth<640?f(1):window.innerWidth<900?f(2):window.innerWidth<1200?f(3):f(4)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),j.useEffect(()=>{const x=setInterval(()=>{l(T=>T>=d.length-1?0:T+1)},4e3);return()=>clearInterval(x)},[c,d.length]);const p=()=>{l(x=>x<=0?d.length-1:x-1)},m=()=>{l(x=>x>=d.length-1?0:x+1)},g=x=>{l(x)},v=[...d,...d,...d];return h.jsxs(vA,{ref:n,children:[h.jsx(bA,{children:h.jsx(SA,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"Real Winners, Real Winnings"})}),h.jsx(wA,{children:h.jsx(jA,{animate:{x:-(o+d.length)*364},transition:{type:"spring",stiffness:300,damping:30},children:v.map((x,T)=>h.jsxs(MA,{children:[h.jsx(NA,{children:[...Array(5)].map((C,D)=>h.jsx(LA,{children:"★"},D))}),h.jsx($A,{children:x.amount}),h.jsx(DA,{children:x.text}),h.jsxs(zA,{children:[h.jsx(RA,{children:x.initials}),h.jsxs(OA,{children:[h.jsx(kA,{children:x.name}),h.jsx(BA,{children:x.location})]})]})]},T))})}),h.jsx(TA,{children:h.jsxs(CA,{children:[h.jsx(G1,{onClick:p,children:"‹"}),h.jsx(EA,{children:Array.from({length:d.length}).map((x,T)=>h.jsx(AA,{$active:T===o,onClick:()=>g(T)},T))}),h.jsx(G1,{onClick:m,children:"›"})]})})]})},VA=wt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,UA=wt`
  0%, 100% { box-shadow: 0 0 30px rgba(230, 201, 86, 0.2); }
  50% { box-shadow: 0 0 50px rgba(230, 201, 86, 0.4); }
`,HA=w.section`
  padding: 120px 24px;
  background: ${b.darkBrown};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(230, 201, 86, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(203, 51, 50, 0.06) 0%, transparent 40%);
    pointer-events: none;
  }
`,YA=w.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,GA=w(I.h2)`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: ${b.cream};
  text-align: center;
  margin-bottom: 16px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
`,qA=w(I.p)`
  font-size: 1.1rem;
  color: ${b.cream};
  text-align: center;
  opacity: 0.7;
  max-width: 500px;
  margin: 0 auto 56px;
  line-height: 1.6;
`,XA=w.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;

  @media (min-width: ${J.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`,PA=w(I.div)`
  background: ${n=>n.$featured?b.cream:"rgba(253, 249, 238, 0.05)"};
  border-radius: 20px;
  padding: 40px 32px;
  position: relative;
  border: ${n=>n.$featured?"none":"1px solid rgba(253, 249, 238, 0.1)"};
  transition: all ${Bt.normal};
  animation: ${n=>n.$featured?UA:"none"} 3s ease-in-out infinite;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${n=>n.$featured?"0 25px 60px rgba(230, 201, 86, 0.4)":"0 20px 50px rgba(0, 0, 0, 0.3)"};
  }
`,KA=w.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: ${b.gold};
  color: ${b.darkBrown};
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`,QA=w.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  border: 3px solid ${n=>n.$featured?b.gold:"rgba(253, 249, 238, 0.3)"};
  animation: ${VA} 3s ease-in-out infinite;
  animation-delay: ${n=>n.$featured?"0s":"0.5s"};
`,ZA=w.h3`
  font-size: 2.2rem;
  color: ${n=>n.$featured?b.darkBrown:b.cream};
  margin-bottom: 8px;
  text-align: center;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
`,FA=w.p`
  font-size: 0.9rem;
  color: ${n=>n.$featured?b.darkBrown:b.cream};
  opacity: 0.6;
  text-align: center;
  margin-bottom: 28px;
`,JA=w.div`
  text-align: center;
  margin-bottom: 28px;
`,WA=w.span`
  font-size: 3rem;
  font-weight: 800;
  color: ${n=>n.$featured?b.darkBrown:b.gold};
  font-family: 'Poppins', sans-serif;
`,IA=w.span`
  font-size: 1rem;
  color: ${n=>n.$featured?b.darkBrown:b.cream};
  opacity: 0.5;
`,t8=w.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
`,e8=w.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: ${n=>n.$featured?b.darkBrown:b.cream};
  font-size: 0.95rem;
`,n8=w.span`
  width: 20px;
  height: 20px;
  background: ${n=>n.$featured?b.gold:"rgba(230, 201, 86, 0.2)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '✓';
    font-size: 12px;
    color: ${n=>n.$featured?b.darkBrown:b.gold};
    font-weight: 700;
  }
`,i8=w(I.button)`
  width: 100%;
  padding: 16px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all ${Bt.normal};

  ${n=>n.$featured?`
    background: ${b.red};
    color: ${b.cream};
    border: none;

    &:hover {
      background: #b52d2c;
    }
  `:`
    background: transparent;
    color: ${b.cream};
    border: 2px solid rgba(253, 249, 238, 0.3);

    &:hover {
      background: rgba(253, 249, 238, 0.1);
      border-color: rgba(253, 249, 238, 0.5);
    }
  `}
`,a8=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),o=ir(),l=()=>{o("/dashboard")},c=[{name:"Silver",description:"Perfect for casual players",price:7,avatar:"/moneypools-landing/images/07.png",featured:!1,features:["4 draws per month","1 unique collectible","Join syndicates","Gift tickets"]},{name:"Gold",description:"For serious winners",price:14,avatar:"/moneypools-landing/images/09.png",featured:!0,features:["10 draws per month","3 unique collectibles","Create syndicates","Unlimited gifting","Priority support"]}],f={hidden:{},visible:{transition:{staggerChildren:.15}}},d={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}};return h.jsx(HA,{id:"pricing",ref:n,children:h.jsxs(YA,{children:[h.jsx(GA,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"Start Winning Today"}),h.jsx(qA,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},children:"Pick the plan that fits your style. Cancel anytime."}),h.jsx(XA,{as:I.div,variants:f,initial:"hidden",animate:a?"visible":"hidden",children:c.map(p=>h.jsxs(PA,{$featured:p.featured,variants:d,children:[p.featured&&h.jsx(KA,{children:"Best Value"}),h.jsx(QA,{src:p.avatar,alt:p.name,$featured:p.featured}),h.jsx(ZA,{$featured:p.featured,children:p.name}),h.jsx(FA,{$featured:p.featured,children:p.description}),h.jsxs(JA,{children:[h.jsxs(WA,{$featured:p.featured,children:["€",p.price]}),h.jsx(IA,{$featured:p.featured,children:"/month"})]}),h.jsx(t8,{children:p.features.map(m=>h.jsxs(e8,{$featured:p.featured,children:[h.jsx(n8,{$featured:p.featured}),m]},m))}),h.jsx(i8,{$featured:p.featured,onClick:l,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Get Started"})]},p.name))})]})})},r8=wt`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
`,o8=wt`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`,l8=wt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,s8=w.section`
  padding: 120px 24px;
  background: ${b.darkBrown};
  position: relative;
  overflow: hidden;
  min-height: 60vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(230, 201, 86, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(203, 51, 50, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(203, 51, 50, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`,c8=w.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,u8=w(I.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${b.red}, ${b.coral});
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  animation: ${o8} 2s ease-in-out infinite;
`,f8=w.span`
  width: 8px;
  height: 8px;
  background: ${b.cream};
  border-radius: 50%;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`,d8=w.span`
  color: ${b.cream};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`,h8=w(I.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${b.cream};
  margin-bottom: 16px;
  line-height: 1.1;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
`,p8=w(I.p)`
  font-size: 1.1rem;
  color: ${b.cream};
  opacity: 0.8;
  margin-bottom: 40px;
  white-space: nowrap;

  @media (max-width: ${J.mobile}) {
    white-space: normal;
    font-size: 1rem;
  }
`,m8=w(I.div)`
  position: relative;
  display: inline-block;
`,g8=w(I.button)`
  padding: 22px 64px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 16px;
  background: linear-gradient(135deg, ${b.red}, ${b.coral});
  color: ${b.cream};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${r8} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${l8} 3s infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(203, 51, 50, 0.5);
  }

  @media (max-width: ${J.mobile}) {
    padding: 18px 48px;
    font-size: 18px;
  }
`,y8=w(I.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  padding: 12px 24px;
  background: rgba(203, 51, 50, 0.2);
  border: 1px solid ${b.red}40;
  border-radius: 50px;
  display: inline-flex;
`,x8=w.span`
  font-size: 16px;
`,v8=w.span`
  color: ${b.coral};
  font-size: 14px;
  font-weight: 600;
`,b8=w(I.div)`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: ${J.mobile}) {
    gap: 20px;
  }
`,Jf=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${b.cream};
  opacity: 0.6;
  font-size: 13px;
`,Wf=w.span`
  font-size: 16px;
`,q1=w.img`
  position: absolute;
  width: 460px;
  height: 460px;
  object-fit: contain;
  opacity: 1;
  pointer-events: none;
  z-index: 0;

  &.left {
    left: 420px;
    bottom: -107px;
    transform: rotate(-10deg);
  }

  &.right {
    right: 420px;
    bottom: -107px;
    transform: rotate(10deg);
  }

  @media (max-width: ${J.tablet}) {
    width: 280px;
    height: 280px;

    &.left {
      left: 150px;
      bottom: -60px;
    }

    &.right {
      right: 150px;
      bottom: -60px;
    }
  }

  @media (max-width: ${J.mobile}) {
    display: none;
  }
`,S8=()=>{const n=j.useRef(null),a=sr(n,{once:!0,margin:"-100px"}),o=ir(),[l,c]=j.useState(47);j.useEffect(()=>{if(a){const d=setInterval(()=>{c(p=>p+Math.floor(Math.random()*2))},3e3);return()=>clearInterval(d)}},[a]);const f=()=>{o("/dashboard")};return h.jsxs(s8,{ref:n,children:[h.jsx(q1,{className:"left",src:"/moneypools-landing/images/03.png",alt:""}),h.jsx(q1,{className:"right",src:"/moneypools-landing/images/05.png",alt:""}),h.jsxs(c8,{children:[h.jsxs(u8,{initial:{opacity:0,y:-20},animate:a?{opacity:1,y:0}:{},transition:{duration:.5},children:[h.jsx(f8,{}),h.jsx(d8,{children:"Next Draw Closing Soon"})]}),h.jsx(h8,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:"Don't Miss Your Chance"}),h.jsx(p8,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},children:"The jackpot is climbing. Join now before it's too late."}),h.jsx(m8,{initial:{opacity:0,scale:.9},animate:a?{opacity:1,scale:1}:{},transition:{duration:.6,delay:.4},children:h.jsx(g8,{onClick:f,whileHover:{scale:1.05},whileTap:{scale:.98},children:"Join MoneyPools Now!"})}),h.jsx(I.div,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.6,delay:.5},children:h.jsxs(y8,{children:[h.jsx(x8,{children:"⚡"}),h.jsxs(v8,{children:[l," people joined in the last hour"]})]})}),h.jsxs(b8,{initial:{opacity:0},animate:a?{opacity:1}:{},transition:{duration:.6,delay:.6},children:[h.jsxs(Jf,{children:[h.jsx(Wf,{children:"🔒"}),"Secure Payments"]}),h.jsxs(Jf,{children:[h.jsx(Wf,{children:"✓"}),"Cancel Anytime"]}),h.jsxs(Jf,{children:[h.jsx(Wf,{children:"💳"}),"No Hidden Fees"]})]})]})]})},w8=w.footer`
  padding: 48px 24px 32px;
  background: ${b.darkBrown};
  border-top: 1px solid rgba(253, 249, 238, 0.1);
`,T8=w.div`
  max-width: 1000px;
  margin: 0 auto;
`,j8=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;

  @media (min-width: ${J.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,C8=w.div`
  text-align: center;

  @media (min-width: ${J.tablet}) {
    text-align: left;
  }
`,E8=w.img`
  height: 36px;
  width: auto;
`,A8=w.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media (min-width: ${J.tablet}) {
    gap: 32px;
  }
`,M8=w.a`
  color: ${b.cream};
  font-size: 14px;
  opacity: 0.7;
  transition: opacity ${Bt.fast};

  &:hover {
    opacity: 1;
    color: ${b.coral};
  }
`,$8=w.div`
  height: 1px;
  background: rgba(253, 249, 238, 0.1);
  margin-bottom: 24px;
`,D8=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  @media (min-width: ${J.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`,z8=w.p`
  color: ${b.cream};
  font-size: 13px;
  opacity: 0.5;
`,R8=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,O8=w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${b.red};
  color: ${b.cream};
  font-weight: 700;
  font-size: 11px;
  border-radius: 50%;
`,k8=w.p`
  color: ${b.cream};
  font-size: 12px;
  opacity: 0.5;
  max-width: 350px;

  @media (min-width: ${J.tablet}) {
    text-align: right;
  }
`,B8=()=>{const n=new Date().getFullYear(),a=[{label:"Terms & Conditions",href:"#"},{label:"Privacy Policy",href:"#"},{label:"Responsible Gaming",href:"#"},{label:"Contact",href:"#"}];return h.jsx(w8,{children:h.jsxs(T8,{children:[h.jsxs(j8,{children:[h.jsx(C8,{children:h.jsx(E8,{src:"/moneypools-landing/images/logo_desktop.png",alt:"MoneyPools"})}),h.jsx(A8,{children:a.map(o=>h.jsx(M8,{href:o.href,children:o.label},o.label))})]}),h.jsx($8,{}),h.jsxs(D8,{children:[h.jsxs(z8,{children:[n," MoneyPools Ltd. All rights reserved."]}),h.jsxs(R8,{children:[h.jsx(O8,{children:"18+"}),h.jsx(k8,{children:"Must be 18 or older to participate. Please play responsibly."})]})]})]})})},zb=w(I.div)`
  position: fixed;
  inset: 0;
  background: rgba(21, 1, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 24px;
  backdrop-filter: blur(4px);
`,Rb=w(I.div)`
  background: ${b.cream};
  border-radius: 20px;
  padding: 36px 28px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: ${Ja.large};
`,Ob=w.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${b.darkBrown};
  font-size: 24px;
  transition: color ${Bt.fast};
  border-radius: 50%;

  &:hover {
    color: ${b.red};
    background: rgba(21, 1, 0, 0.05);
  }
`,kb=w.h2`
  font-size: 1.6rem;
  color: ${b.darkBrown};
  text-align: center;
  margin-bottom: 24px;
`,Bb=w.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,po=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,mo=w.label`
  font-size: 13px;
  font-weight: 600;
  color: ${b.darkBrown};
`,go=w.input`
  padding: 12px 14px;
  font-size: 15px;
  border: 2px solid rgba(21, 1, 0, 0.15);
  border-radius: 10px;
  background: ${b.white};
  color: ${b.darkBrown};
  transition: border-color ${Bt.fast};

  &:focus {
    outline: none;
    border-color: ${b.red};
  }

  &::placeholder {
    color: ${b.darkBrown};
    opacity: 0.4;
  }
`,Nb=w(I.button)`
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  background: ${b.red};
  color: ${b.cream};
  border: none;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: ${b.redDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Lb=w.p`
  text-align: center;
  font-size: 14px;
  color: ${b.darkBrown};
  margin-top: 20px;

  button {
    background: none;
    border: none;
    color: ${b.red};
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`,_b=w(I.div)`
  text-align: center;
  padding: 16px;
`,Vb=w.div`
  width: 70px;
  height: 70px;
  background: ${b.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  color: ${b.darkBrown};

  &::after {
    content: '';
    width: 20px;
    height: 32px;
    border: solid ${b.darkBrown};
    border-width: 0 4px 4px 0;
    transform: rotate(45deg) translateY(-3px);
  }
`,Ub=w.h3`
  font-size: 1.4rem;
  color: ${b.darkBrown};
  margin-bottom: 8px;
`,Hb=w.p`
  color: ${b.darkBrown};
  opacity: 0.7;
  font-size: 0.95rem;
`,N8=()=>{const{isSignUpModalOpen:n,closeSignUpModal:a,openLoginModal:o,playClick:l,playSuccess:c}=Ls(),[f,d]=j.useState(""),[p,m]=j.useState(""),[g,v]=j.useState(""),[x,T]=j.useState(!1);j.useEffect(()=>{n||(d(""),m(""),v(""),T(!1))},[n]);const C=$=>{$.preventDefault(),c(),T(!0),setTimeout(()=>{a()},2e3)},D=()=>{l(),a(),o()};return h.jsx(en,{children:n&&h.jsx(zb,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a,children:h.jsxs(Rb,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:$=>$.stopPropagation(),children:[h.jsx(Ob,{onClick:a,children:"×"}),x?h.jsxs(_b,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[h.jsx(Vb,{}),h.jsx(Ub,{children:"Welcome to MoneyPools"}),h.jsx(Hb,{children:"Your account has been created."})]}):h.jsxs(h.Fragment,{children:[h.jsx(kb,{children:"Join the Pool"}),h.jsxs(Bb,{onSubmit:C,children:[h.jsxs(po,{children:[h.jsx(mo,{children:"Email"}),h.jsx(go,{type:"email",placeholder:"you@example.com",value:f,onChange:$=>d($.target.value),required:!0})]}),h.jsxs(po,{children:[h.jsx(mo,{children:"Password"}),h.jsx(go,{type:"password",placeholder:"Create a password",value:p,onChange:$=>m($.target.value),required:!0,minLength:8})]}),h.jsxs(po,{children:[h.jsx(mo,{children:"Confirm Password"}),h.jsx(go,{type:"password",placeholder:"Confirm password",value:g,onChange:$=>v($.target.value),required:!0})]}),h.jsx(Nb,{type:"submit",whileHover:{scale:1.01},whileTap:{scale:.99},children:"Create Account"})]}),h.jsxs(Lb,{children:["Already have an account?"," ",h.jsx("button",{type:"button",onClick:D,children:"Log in"})]})]})]})})})},L8=()=>{const{isLoginModalOpen:n,closeLoginModal:a,openSignUpModal:o,playClick:l,playSuccess:c}=Ls(),[f,d]=j.useState(""),[p,m]=j.useState(""),[g,v]=j.useState(!1);j.useEffect(()=>{n||(d(""),m(""),v(!1))},[n]);const x=C=>{C.preventDefault(),c(),v(!0),setTimeout(()=>{a()},2e3)},T=()=>{l(),a(),o()};return h.jsx(en,{children:n&&h.jsx(zb,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a,children:h.jsxs(Rb,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:C=>C.stopPropagation(),children:[h.jsx(Ob,{onClick:a,children:"×"}),g?h.jsxs(_b,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[h.jsx(Vb,{}),h.jsx(Ub,{children:"Welcome Back"}),h.jsx(Hb,{children:"Good luck in the next draw."})]}):h.jsxs(h.Fragment,{children:[h.jsx(kb,{children:"Welcome Back"}),h.jsxs(Bb,{onSubmit:x,children:[h.jsxs(po,{children:[h.jsx(mo,{children:"Email"}),h.jsx(go,{type:"email",placeholder:"you@example.com",value:f,onChange:C=>d(C.target.value),required:!0})]}),h.jsxs(po,{children:[h.jsx(mo,{children:"Password"}),h.jsx(go,{type:"password",placeholder:"Enter password",value:p,onChange:C=>m(C.target.value),required:!0})]}),h.jsx(Nb,{type:"submit",whileHover:{scale:1.01},whileTap:{scale:.99},children:"Log In"})]}),h.jsxs(Lb,{children:["New here?"," ",h.jsx("button",{type:"button",onClick:T,children:"Sign up"})]})]})]})})})},Yb=j.createContext(),_8={username:"LuckyMax",avatar:"/moneypools-landing/images/05.png",level:12,memberSince:"Oct 2025",totalWinnings:0,currentPool:1,drawsParticipated:23,drawsWon:0,subscriptionTier:"Pro",nextBilling:"Feb 15, 2026",ticketMultiplier:1,syndicate:null,referralCode:"LUCKYMAX2025"},V8={jackpot:52847,activePlayers:52847,currentDrawNumber:48},U8=[{id:1,text:"You joined Pool #1",time:"2 days ago",type:"join"},{id:2,text:"Draw #47 completed — Player X won €51,203",time:"3 days ago",type:"draw"},{id:3,text:"You received a ticket from Sarah",time:"5 days ago",type:"gift"}],H8=({children:n})=>{const[a,o]=j.useState(_8),[l,c]=j.useState(V8),[f,d]=j.useState(U8),[p,m]=j.useState([]),[g,v]=j.useState(!1),[x,T]=j.useState(!1),[C,D]=j.useState(!1),[$,R]=j.useState(!1),[N]=j.useState(()=>{const Q=new Date;return Q.setDate(Q.getDate()+2),Q.setHours(20,0,0,0),Q});j.useEffect(()=>{const Q=setInterval(()=>{const U=Math.floor(Math.random()*3)+1;c(F=>({...F,jackpot:F.jackpot+U,activePlayers:F.activePlayers+U}))},3e3);return()=>clearInterval(Q)},[]);const P={player:a,setPlayer:o,pool:l,activity:f,notifications:p,addNotification:Q=>{m(U=>[{id:Date.now(),...Q},...U])},nextDraw:N,calculateOdds:()=>{const Q=l.activePlayers,U=a.ticketMultiplier;return Math.ceil(Q/U)},updateMultiplier:Q=>{o(U=>({...U,ticketMultiplier:Q}))},syndicateModalOpen:g,setSyndicateModalOpen:v,giftModalOpen:x,setGiftModalOpen:T,multiplierModalOpen:C,setMultiplierModalOpen:D,inviteModalOpen:$,setInviteModalOpen:R};return h.jsx(Yb.Provider,{value:P,children:n})},nn=()=>{const n=j.useContext(Yb);if(!n)throw new Error("useDashboard must be used within a DashboardProvider");return n},Y8=w.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 12px 24px;
  background: rgba(21, 1, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(253, 249, 238, 0.1);
`,G8=w.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,q8=w(Ns)`
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: auto;

    @media (min-width: ${J.tablet}) {
      height: 32px;
    }
  }
`,X8=w.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${J.tablet}) {
    display: flex;
  }
`,If=w(Ns)`
  color: ${n=>n.$active?b.gold:b.cream};
  font-weight: ${n=>n.$active?"600":"500"};
  font-size: 14px;
  transition: color ${Bt.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${n=>n.$active?"100%":"0"};
    height: 2px;
    background: ${b.gold};
    transition: width ${Bt.normal};
  }

  &:hover {
    color: ${b.gold};
    &::after {
      width: 100%;
    }
  }
`,P8=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,X1=w(I.button)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.1);
  color: ${b.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all ${Bt.fast};

  &:hover {
    background: rgba(253, 249, 238, 0.15);
    border-color: rgba(253, 249, 238, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,K8=w.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  background: ${b.red};
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,Q8=w.div`
  display: none;

  @media (min-width: ${J.tablet}) {
    display: block;
  }
`,Z8=w(I.button)`
  padding: 8px 16px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(253, 249, 238, 0.2);
  color: ${b.cream};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${Bt.fast};

  &:hover {
    background: rgba(203, 51, 50, 0.2);
    border-color: ${b.red};
    color: ${b.coral};
  }
`,F8=w.div`
  display: none;
  align-items: center;
  gap: 10px;

  @media (min-width: ${J.tablet}) {
    display: flex;
  }
`,J8=w.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid ${b.gold};
`,W8=w.span`
  color: ${b.cream};
  font-weight: 600;
  font-size: 14px;
`,I8=()=>{const n=ir(),{player:a,notifications:o}=nn(),l=o.filter(f=>!f.read).length,c=()=>{n("/")};return h.jsx(Y8,{children:h.jsxs(G8,{children:[h.jsx(q8,{to:"/",children:h.jsx("img",{src:"/moneypools-landing/images/logo_desktop.png",alt:"MoneyPools"})}),h.jsxs(X8,{children:[h.jsx(If,{to:"/dashboard",$active:!0,children:"Dashboard"}),h.jsx(If,{to:"/dashboard",children:"History"}),h.jsx(If,{to:"/dashboard",children:"Syndicate"})]}),h.jsxs(P8,{children:[h.jsx(Q8,{children:h.jsxs(X1,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),h.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),l>0&&h.jsx(K8,{children:l})]})}),h.jsx(X1,{whileHover:{scale:1.05},whileTap:{scale:.95},children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("circle",{cx:"12",cy:"12",r:"3"}),h.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),h.jsxs(F8,{children:[h.jsx(J8,{src:a.avatar,alt:a.username}),h.jsx(W8,{children:a.username})]}),h.jsx(Z8,{onClick:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Logout"})]})]})})},tM=wt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,eM=wt`
  0%, 100% { box-shadow: 0 0 20px ${b.gold}40; }
  50% { box-shadow: 0 0 40px ${b.gold}60; }
`,nM=wt`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px ${b.coral}60, 0 0 40px ${b.coral}30;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 30px ${b.coral}80, 0 0 60px ${b.coral}50;
  }
`,iM=wt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,aM=wt`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`,rM=wt`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
`,oM=w(I.div)`
  background: rgba(253, 249, 238, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(253, 249, 238, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,lM=w.div`
  position: relative;
  margin-bottom: 20px;
`,sM=w.img`
  width: 280px;
  height: 280px;
  border-radius: 28px;
  object-fit: cover;
  border: 5px solid ${b.gold};
  animation: ${tM} 3s ease-in-out infinite, ${eM} 2s ease-in-out infinite;
  cursor: pointer;

  @media (min-width: ${J.tablet}) {
    width: 140px;
    height: 140px;
    border-radius: 20px;
    border: 3px solid ${b.gold};
    cursor: default;
  }

  @media (min-width: ${J.desktop}) {
    width: 160px;
    height: 160px;
  }
`,cM=w(I.div)`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: ${b.gold};
  color: ${b.darkBrown};
  font-weight: 700;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  animation: ${rM} 1s ease-in-out infinite;
  box-shadow: 0 4px 15px ${b.gold}50;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${b.gold};
  }

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,uM=w.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${b.gold}, #D4A84B);
  color: ${b.darkBrown};
  font-weight: 800;
  font-size: 12px;
  padding: 6px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 15px ${b.gold}50;
`,fM=w.h2`
  color: ${b.cream};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4px;
  text-align: center;

  @media (min-width: ${J.tablet}) {
    font-size: 1.5rem;
  }
`,dM=w.div`
  background: ${n=>n.$tier==="Pro"?`linear-gradient(135deg, ${b.gold}, #D4A84B)`:`linear-gradient(135deg, ${b.coral}, ${b.red})`};
  color: ${n=>n.$tier==="Pro"?b.darkBrown:b.cream};
  font-weight: 700;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`,hM=w.div`
  width: 100%;
  display: grid;
  gap: 12px;
`,rs=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(253, 249, 238, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(253, 249, 238, 0.05);
`,os=w.span`
  color: ${b.cream};
  opacity: 0.6;
  font-size: 13px;
`,ls=w.span`
  color: ${n=>n.$highlight?b.gold:b.cream};
  font-weight: 600;
  font-size: 14px;
`,pM=w.div`
  width: 100%;
  height: 1px;
  background: rgba(253, 249, 238, 0.1);
  margin: 16px 0;
`,mM=w(I.button)`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, ${b.gold}, #D4A84B);
  color: ${b.darkBrown};
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: auto;
  display: ${n=>n.$show?"block":"none"};
`,gM=w.div`
  text-align: center;
  margin-top: 12px;
`,yM=w.p`
  color: ${b.cream};
  opacity: 0.5;
  font-size: 11px;
`,xM=w(I.div)`
  width: 100%;
  background: linear-gradient(135deg, ${b.red}, ${b.coral});
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  animation: ${nM} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${iM} 2s infinite;
  }
`,vM=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`,bM=w.div`
  display: flex;
  flex-direction: column;
`,SM=w.span`
  font-size: 11px;
  color: ${b.cream};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
`,wM=w.span`
  font-size: 13px;
  color: ${b.cream};
  font-weight: 600;
`,TM=w.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${b.cream};
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  position: relative;
`,jM=w.span`
  font-size: 1.5rem;
  margin-left: 2px;
  opacity: 0.9;
`,td=w.span`
  position: absolute;
  font-size: 14px;
  animation: ${aM} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    top: -8px;
    right: -5px;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: -5px;
    left: -8px;
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    bottom: -5px;
    right: -8px;
    animation-delay: 1s;
  }
`,CM=w.div`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`,EM=w.span`
  font-size: 12px;
  color: ${b.cream};
  opacity: 0.9;

  strong {
    color: ${b.gold};
    font-weight: 700;
  }
`,AM=()=>{const{player:n,pool:a,calculateOdds:o}=nn(),[l,c]=j.useState(!0),f=g=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:0}).format(g),d=n.ticketMultiplier>1,p=o(),m=()=>{c(!1)};return h.jsxs(oM,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[h.jsxs(lM,{children:[h.jsx(en,{children:l&&h.jsx(cM,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:"Click me!"})}),h.jsx(sM,{src:n.avatar,alt:n.username,onClick:m}),h.jsxs(uM,{children:["LVL ",n.level]})]}),h.jsx(fM,{children:n.username}),h.jsxs(dM,{$tier:n.subscriptionTier,children:[n.subscriptionTier," Member"]}),d&&h.jsxs(xM,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:300,damping:20},children:[h.jsxs(vM,{children:[h.jsxs(bM,{children:[h.jsx(SM,{children:"Active Boost"}),h.jsxs(wM,{children:[n.ticketMultiplier," tickets this draw"]})]}),h.jsxs(TM,{children:[h.jsx(td,{children:"✨"}),h.jsx(td,{children:"⚡"}),h.jsx(td,{children:"✨"}),n.ticketMultiplier,h.jsx(jM,{children:"X"})]})]}),h.jsx(CM,{children:h.jsxs(EM,{children:["Your odds: ",h.jsxs("strong",{children:["1 in ",p.toLocaleString()]})]})})]}),h.jsxs(hM,{children:[h.jsxs(rs,{children:[h.jsx(os,{children:"Member Since"}),h.jsx(ls,{children:n.memberSince})]}),h.jsxs(rs,{children:[h.jsx(os,{children:"Total Winnings"}),h.jsx(ls,{$highlight:!0,children:f(n.totalWinnings)})]}),h.jsxs(rs,{children:[h.jsx(os,{children:"Draws Entered"}),h.jsx(ls,{children:n.drawsParticipated})]}),h.jsxs(rs,{children:[h.jsx(os,{children:"Draws Won"}),h.jsx(ls,{$highlight:!0,children:n.drawsWon})]})]}),h.jsx(pM,{}),h.jsx(mM,{$show:n.subscriptionTier==="Starter",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Upgrade to Pro"}),h.jsx(gM,{children:h.jsxs(yM,{children:["Next billing: ",n.nextBilling]})})]})},MM=wt`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
`,$M=wt`
  0%, 100% {
    text-shadow: 0 0 30px ${b.gold}60, 0 0 60px ${b.gold}30;
  }
  50% {
    text-shadow: 0 0 50px ${b.gold}80, 0 0 100px ${b.gold}50;
  }
`,DM=wt`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;wt`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;const zM=wt`
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-400px) rotate(720deg) scale(0);
    opacity: 0;
  }
`,RM=w.span`
  position: absolute;
  font-size: ${n=>n.$size}px;
  color: ${n=>n.$color};
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  animation: ${zM} ${n=>n.$duration}s ease-out forwards;
  left: ${n=>n.$x}%;
  top: ${n=>n.$y}%;
  text-shadow: 0 0 10px ${n=>n.$color};
  pointer-events: none;
  z-index: 10;
`,OM=wt`
  0%, 100% { box-shadow: 0 0 30px ${b.gold}50; }
  50% { box-shadow: 0 0 50px ${b.gold}70; }
`,kM=wt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,BM=w(I.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 14px;
  background: rgba(253, 249, 238, 0.03);
  border: 2px solid ${b.gold};
  border-radius: 20px;
  animation: ${OM} 2s ease-in-out infinite;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: ${J.tablet}) {
    padding: 30px;
    border: 3px solid ${b.gold};
    border-radius: 24px;
    justify-content: center;
    gap: 0;
  }
`,NM=w(I.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  @media (min-width: ${J.tablet}) {
    flex: 1;
    gap: 16px;
  }
`,Gb=w.div`
  perspective: 1000px;
  animation: ${DM} 3s ease-in-out infinite;
  position: relative;
`,LM=w(I.div)`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: ${b.gold};
  color: ${b.darkBrown};
  font-weight: 700;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  animation: ${MM} 1s ease-in-out infinite;
  box-shadow: 0 4px 15px ${b.gold}50;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${b.gold};
  }

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,_M=w.h2`
  color: ${b.cream};
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: -4px;

  @media (min-width: ${J.tablet}) {
    font-size: 1.5rem;
    margin-top: 0;
  }

  @media (min-width: ${J.desktop}) {
    font-size: 2rem;
  }
`,VM=w.img`
  width: 240px;
  height: 240px;
  border-radius: 24px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 1.2s ease-in-out;

  ${Gb}:hover & {
    transform: rotateY(720deg);
  }

  @media (min-width: ${J.tablet}) {
    width: 340px;
    height: 340px;
  }

  @media (min-width: ${J.desktop}) {
    width: 500px;
    height: 500px;
  }
`,UM=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
  width: 100%;

  @media (min-width: ${J.tablet}) {
    margin-top: auto;
    padding-bottom: 10px;
    width: auto;
  }
`,HM=w.div`
  color: ${b.cream};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.7;
  margin-bottom: 6px;

  @media (min-width: ${J.tablet}) {
    font-size: 14px;
    letter-spacing: 4px;
    margin-bottom: 8px;
  }
`,YM=w.div`
  font-size: clamp(2.2rem, 12vw, 5rem);
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(
    90deg,
    ${b.gold} 0%,
    #FFE566 25%,
    ${b.gold} 50%,
    #FFE566 75%,
    ${b.gold} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${kM} 3s linear infinite, ${$M} 2s ease-in-out infinite;
  line-height: 1;
  margin-bottom: 8px;

  @media (min-width: ${J.tablet}) {
    margin-bottom: 24px;
  }
`,GM=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  width: 100%;

  @media (min-width: ${J.tablet}) {
    flex-direction: row;
    gap: 40px;
    width: auto;
  }

  @media (max-width: ${J.desktop}) and (min-width: ${J.tablet}) {
    gap: 24px;
  }
`,ed=w(I.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(253, 249, 238, 0.06);
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(253, 249, 238, 0.08);

  @media (min-width: ${J.tablet}) {
    flex-direction: column;
    text-align: center;
    background: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
  }
`,nd=w.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${n=>n.$color||b.cream};
  margin-bottom: 0;
  order: 2;

  @media (min-width: ${J.tablet}) {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 4px;
    order: 1;
  }
`,id=w.div`
  font-size: 12px;
  color: ${b.cream};
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  order: 1;

  @media (min-width: ${J.tablet}) {
    font-size: 12px;
    letter-spacing: 1px;
    order: 2;
  }
`,qM=w.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.15);
  padding: 8px 14px;
  border-radius: 30px;
  margin-top: 10px;

  @media (min-width: ${J.tablet}) {
    padding: 8px 20px;
    margin-top: 24px;
  }
`,XM=w.div`
  width: 8px;
  height: 8px;
  background: ${b.coral};
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }
`,PM=w.span`
  color: ${b.cream};
  font-size: 13px;
  font-weight: 500;

  @media (min-width: ${J.tablet}) {
    font-size: 14px;
  }
`,KM=w.div`
  background: linear-gradient(135deg, ${b.red}, ${b.coral});
  color: ${b.cream};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  margin-left: 6px;

  @media (min-width: ${J.tablet}) {
    font-size: 12px;
    margin-left: 8px;
  }
`,P1=["$","€","¥"],K1=[b.gold,b.coral,b.red,"#FFE566"],Q1=()=>{const{pool:n,player:a,calculateOdds:o}=nn(),[l,c]=j.useState(n.jackpot),[f,d]=j.useState(n.activePlayers),[p,m]=j.useState([]),[g,v]=j.useState(!0),x=j.useCallback(()=>{const $=[];for(let R=0;R<60;R++)$.push({id:Date.now()+R,symbol:P1[Math.floor(Math.random()*P1.length)],x:Math.random()*90+5,y:Math.random()*80+10,size:Math.random()*30+20,duration:Math.random()*1.5+2.5,color:K1[Math.floor(Math.random()*K1.length)]});m($),setTimeout(()=>m([]),4500)},[]);j.useEffect(()=>{const R=l,N=f,k=n.jackpot-R,O=n.activePlayers-N,K=Date.now(),P=()=>{const Q=Date.now()-K,U=Math.min(Q/500,1),F=1-Math.pow(1-U,3);c(Math.round(R+k*F)),d(Math.round(N+O*F)),U<1&&requestAnimationFrame(P)};requestAnimationFrame(P)},[n.jackpot,n.activePlayers]);const T=$=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:0}).format($),C=$=>$.toLocaleString(),D=o();return h.jsxs(BM,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},children:[p.map($=>h.jsx(RM,{$x:$.x,$y:$.y,$size:$.size,$duration:$.duration,$color:$.color,children:$.symbol},$.id)),h.jsxs(NM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[h.jsxs(Gb,{onMouseEnter:x,onClick:()=>{v(!1),x()},children:[h.jsx(en,{children:g&&h.jsx(LM,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:"Click me!"})}),h.jsx(VM,{src:a.avatar,alt:a.username})]}),h.jsx(_M,{children:a.username})]}),h.jsxs(UM,{children:[h.jsx(HM,{children:"Current Jackpot"}),h.jsx(YM,{children:T(l)}),h.jsxs(GM,{children:[h.jsxs(ed,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[h.jsx(nd,{$color:b.coral,children:C(f)}),h.jsx(id,{children:"Active Players"})]}),h.jsxs(ed,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[h.jsxs(nd,{$color:b.gold,children:["1 in ",C(D)]}),h.jsx(id,{children:"Your Odds"})]}),h.jsxs(ed,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[h.jsxs(nd,{children:["#",n.currentDrawNumber]}),h.jsx(id,{children:"Draw Number"})]})]}),h.jsxs(qM,{children:[h.jsx(XM,{}),h.jsxs(PM,{children:["You're in Pool #",a.currentPool]}),a.ticketMultiplier>1&&h.jsxs(KM,{children:[a.ticketMultiplier,"x Tickets"]})]})]})]})},QM=wt`
  0%, 100% {
    box-shadow: 0 0 20px ${b.red}40;
    border-color: ${b.red}60;
  }
  50% {
    box-shadow: 0 0 40px ${b.red}70;
    border-color: ${b.red};
  }
`,ZM=w(I.div)`
  background: rgba(253, 249, 238, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(253, 249, 238, 0.1);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${n=>n.$urgent&&Ti`
    animation: ${QM} 1.5s ease-in-out infinite;
  `}
`,FM=w.div`
  color: ${b.cream};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.7;
  margin-bottom: 20px;
`,JM=w.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`,ss=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`,cs=w.div`
  background: rgba(21, 1, 0, 0.6);
  border: 1px solid ${n=>n.$urgent?b.red:"rgba(253, 249, 238, 0.15)"};
  border-radius: 14px;
  padding: 14px 20px;
  width: 84px;

  span {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${n=>n.$urgent?b.red:b.cream};
    font-family: 'Poppins', monospace;
    display: block;
    text-align: center;
  }
`,us=w.div`
  color: ${b.cream};
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  font-weight: 500;
`;w.span`
  display: none;
`;const WM=w.div`
  margin-top: 24px;
  text-align: center;
`,IM=w.div`
  color: ${b.gold};
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 5px;
`,t$=w.div`
  color: ${b.cream};
  opacity: 0.5;
  font-size: 14px;
`,e$=w(I.div)`
  margin-top: 16px;
  padding: 8px 16px;
  background: ${b.red}20;
  border: 1px solid ${b.red}40;
  border-radius: 8px;
  color: ${b.coral};
  font-size: 12px;
  font-weight: 600;
`,n$=()=>{const{nextDraw:n,pool:a}=nn(),[o,l]=j.useState({days:0,hours:0,minutes:0,seconds:0}),[c,f]=j.useState(!1);j.useEffect(()=>{const g=()=>{const T=n-new Date;if(T>0){const C=Math.floor(T/864e5),D=Math.floor(T%(1e3*60*60*24)/(1e3*60*60)),$=Math.floor(T%(1e3*60*60)/(1e3*60)),R=Math.floor(T%(1e3*60)/1e3);l({days:C,hours:D,minutes:$,seconds:R})}};g();const v=setInterval(()=>{g(),f(x=>!x)},1e3);return()=>clearInterval(v)},[n]);const d=g=>g.toString().padStart(2,"0"),p=o.days===0&&o.hours<24;o.days*24+o.hours;const m=g=>g.toLocaleDateString("en-IE",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return h.jsxs(ZM,{$urgent:p,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[h.jsx(FM,{children:"Next Draw In"}),h.jsxs(JM,{children:[h.jsxs(ss,{children:[h.jsx(cs,{$urgent:p,children:h.jsx("span",{children:d(o.days)})}),h.jsx(us,{children:"Days"})]}),h.jsxs(ss,{children:[h.jsx(cs,{$urgent:p,children:h.jsx("span",{children:d(o.hours)})}),h.jsx(us,{children:"Hours"})]}),h.jsxs(ss,{children:[h.jsx(cs,{$urgent:p,children:h.jsx("span",{children:d(o.minutes)})}),h.jsx(us,{children:"Mins"})]}),h.jsxs(ss,{children:[h.jsx(cs,{$urgent:p,children:h.jsx("span",{children:d(o.seconds)})}),h.jsx(us,{children:"Secs"})]})]}),h.jsxs(WM,{children:[h.jsxs(IM,{children:["Draw #",a.currentDrawNumber]}),h.jsx(t$,{children:m(n)})]}),p&&h.jsx(e$,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:"Draw closing soon!"})]})},i$=wt`
  0%, 100% {
    box-shadow: 0 0 10px ${b.gold}, 0 0 20px ${b.gold}80, 0 0 30px ${b.gold}60;
  }
  50% {
    box-shadow: 0 0 15px ${b.gold}, 0 0 30px ${b.gold}, 0 0 45px ${b.gold}80;
  }
`,qb=wt`
  0%, 100% {
    box-shadow: 0 0 15px ${b.gold}60, 0 0 30px ${b.gold}40;
  }
  50% {
    box-shadow: 0 0 25px ${b.gold}80, 0 0 50px ${b.gold}60;
  }
`,Xb=wt`
  0%, 100% {
    box-shadow: 0 0 15px ${b.red}50, 0 0 25px ${b.red}30;
  }
  50% {
    box-shadow: 0 0 25px ${b.red}70, 0 0 40px ${b.red}50;
  }
`,Pb=wt`
  0%, 90%, 100% {
    transform: rotate(0deg);
  }
  92% {
    transform: rotate(-3deg);
  }
  94% {
    transform: rotate(3deg);
  }
  96% {
    transform: rotate(-3deg);
  }
  98% {
    transform: rotate(3deg);
  }
`,a$=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${J.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${J.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`,r$=w.div`
  display: flex;
  gap: 12px;
  width: 100%;
`,o$=w(I.button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background: ${n=>n.$active?`linear-gradient(135deg, ${b.gold}, #D4A84B)`:n.$variant==="primary"?`linear-gradient(135deg, ${b.red}, ${b.coral})`:"rgba(253, 249, 238, 0.08)"};
  border: 1px solid ${n=>n.$variant==="primary"||n.$active?"transparent":"rgba(253, 249, 238, 0.15)"};
  border-radius: 16px;
  cursor: pointer;
  transition: all ${Bt.normal};
  ${n=>n.$active&&Ti`
    animation: ${qb} 2s ease-in-out infinite;
  `}
  ${n=>n.$variant==="primary"&&!n.$active&&Ti`
    animation: ${Xb} 2s ease-in-out infinite, ${Pb} 3s ease-in-out infinite;
  `}

  svg {
    width: 26px;
    height: 26px;
    color: ${n=>n.$active?b.darkBrown:n.$variant==="primary"?b.cream:b.gold};
  }
`,Z1=w(I.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${n=>n.$active?`linear-gradient(135deg, ${b.gold}, #D4A84B)`:n.$variant==="primary"?`linear-gradient(135deg, ${b.red}, ${b.coral})`:"rgba(253, 249, 238, 0.05)"};
  border: 1px solid ${n=>n.$variant==="primary"||n.$active?"transparent":"rgba(253, 249, 238, 0.1)"};
  border-radius: 16px;
  cursor: pointer;
  transition: all ${Bt.normal};
  ${n=>n.$active&&Ti`
    animation: ${qb} 2s ease-in-out infinite;
  `}
  ${n=>n.$variant==="primary"&&!n.$active&&Ti`
    animation: ${Xb} 2s ease-in-out infinite, ${Pb} 3s ease-in-out infinite;
  `}

  &:hover {
    background: ${n=>n.$active?`linear-gradient(135deg, #D4A84B, ${b.gold})`:n.$variant==="primary"?`linear-gradient(135deg, ${b.coral}, ${b.red})`:"rgba(253, 249, 238, 0.1)"};
    border-color: ${n=>n.$variant==="primary"||n.$active?"transparent":"rgba(253, 249, 238, 0.2)"};
    transform: translateY(-2px);
  }

  @media (max-width: ${J.mobile}) {
    padding: 16px 12px;
    gap: 8px;
  }
`,F1=w.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${n=>n.$variant==="primary"||n.$active?"rgba(255, 255, 255, 0.25)":"rgba(230, 201, 86, 0.15)"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${n=>n.$active?b.darkBrown:n.$variant==="primary"?b.cream:b.gold};
  }

  @media (max-width: ${J.mobile}) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,J1=w.span`
  color: ${n=>n.$active?b.darkBrown:b.cream};
  font-size: ${n=>n.$active?"15px":"14px"};
  font-weight: ${n=>n.$active?800:600};
  text-align: center;

  @media (max-width: ${J.mobile}) {
    font-size: ${n=>n.$active?"13px":"12px"};
  }
`,W1=w.span`
  color: ${n=>n.$active?b.darkBrown:b.cream};
  opacity: ${n=>n.$active?.7:.5};
  font-size: 11px;
  text-align: center;
  display: none;

  @media (min-width: ${J.tablet}) {
    display: block;
  }
`,l$=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,s$=w(I.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  background: linear-gradient(135deg, ${b.gold}, #FFE566);
  color: ${b.darkBrown};
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  animation: ${i$} 1.5s ease-in-out infinite;
  z-index: 10;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: ${b.gold};
  }

  @media (max-width: ${J.tablet}) {
    font-size: 10px;
    padding: 8px 12px;
  }
`,c$=w.span`
  margin-left: 8px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`,u$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"9",cy:"7",r:"4"}),h.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),h.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),f$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("polyline",{points:"20 12 20 22 4 22 4 12"}),h.jsx("rect",{x:"2",y:"7",width:"20",height:"5"}),h.jsx("line",{x1:"12",y1:"22",x2:"12",y2:"7"}),h.jsx("path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}),h.jsx("path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"})]}),d$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),h.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),h.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"})]}),I1=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"18",cy:"5",r:"3"}),h.jsx("circle",{cx:"6",cy:"12",r:"3"}),h.jsx("circle",{cx:"18",cy:"19",r:"3"}),h.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),h.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),tx=({isMobile:n=!1})=>{const{player:a,setSyndicateModalOpen:o,setGiftModalOpen:l,setMultiplierModalOpen:c,setInviteModalOpen:f}=nn(),[d,p]=j.useState(!1),m=a.ticketMultiplier>1;j.useEffect(()=>{const x=setTimeout(()=>{p(!0)},5e3);return()=>clearTimeout(x)},[]);const g=()=>{p(!1),f(!0)},v=[{label:"Start Syndicate",description:"Team up with friends",icon:h.jsx(u$,{}),onClick:()=>o(!0),variant:"secondary"},{label:"Gift Ticket",description:"Send to a friend",icon:h.jsx(f$,{}),onClick:()=>l(!0),variant:"secondary"},{label:"Multiplier",description:"Boost your odds",icon:h.jsx(d$,{}),onClick:()=>c(!0),variant:"primary"},{label:"Invite Friends",description:"Multiply your odds",icon:h.jsx(I1,{}),onClick:g,variant:"secondary"}];return n?h.jsx(r$,{children:v.map((x,T)=>{const D=x.label==="Multiplier"&&m;return h.jsx(o$,{$variant:x.variant,$active:D,onClick:x.onClick,whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1+T*.05},children:x.icon},x.label)})}):h.jsxs(a$,{children:[v.slice(0,3).map((x,T)=>{const C=x.label==="Multiplier",D=C&&m;return h.jsxs(Z1,{$variant:x.variant,$active:D,onClick:x.onClick,whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4+T*.1},children:[h.jsx(F1,{$variant:x.variant,$active:D,children:x.icon}),h.jsx(J1,{$active:D,children:D?"Multiplier Active":C?"Activate Multiplier":x.label}),h.jsx(W1,{$active:D,children:D?"Tap to change":x.description})]},x.label)}),h.jsxs(l$,{children:[h.jsx(en,{children:d&&h.jsxs(s$,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:-10,x:"-50%"},onClick:g,children:["Increase Winning Chances by up to 10X NOW!",h.jsx(c$,{onClick:x=>{x.stopPropagation(),p(!1)},children:"✕"})]})}),h.jsxs(Z1,{$variant:"secondary",onClick:g,whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},style:{flex:1},children:[h.jsx(F1,{$variant:"secondary",children:h.jsx(I1,{})}),h.jsx(J1,{children:"Invite Friends"}),h.jsx(W1,{children:"Multiply your odds"})]})]})]})},h$=w(I.div)`
  background: rgba(253, 249, 238, 0.03);
  border: 1px solid rgba(253, 249, 238, 0.08);
  border-radius: 16px;
  padding: 16px 20px;
  max-height: 280px;
  overflow: hidden;
`,p$=w(I.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: ${n=>n.$isNew?`linear-gradient(135deg, ${b.gold}20, ${b.gold}10)`:"rgba(253, 249, 238, 0.03)"};
  border-radius: 10px;
  border: 1px solid ${n=>n.$isNew?`${b.gold}40`:"rgba(253, 249, 238, 0.05)"};
`,m$=w.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${n=>n.$isNew?`${b.gold}30`:"rgba(253, 249, 238, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`,g$=w.div`
  flex: 1;
  min-width: 0;
`,y$=w.p`
  color: ${n=>n.$isNew?b.gold:b.cream};
  font-size: 13px;
  font-weight: ${n=>n.$isNew?600:400};
`,x$=w.span`
  color: ${n=>n.$isNew?b.gold:b.cream};
  opacity: ${n=>n.$isNew?.7:.4};
  font-size: 11px;
  white-space: nowrap;
`,v$=w.h3`
  color: ${b.cream};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.6;
  margin-bottom: 12px;
`,b$=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,S$=w(I.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(253, 249, 238, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(253, 249, 238, 0.05);
`,w$=w.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${n=>{switch(n.$type){case"join":return`${b.gold}20`;case"draw":return`${b.coral}20`;case"gift":return`${b.red}20`;case"win":return`${b.gold}30`;default:return"rgba(253, 249, 238, 0.1)"}}};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: ${n=>{switch(n.$type){case"join":return b.gold;case"draw":return b.coral;case"gift":return b.red;case"win":return b.gold;default:return b.cream}}};
  }
`,T$=w.div`
  flex: 1;
  min-width: 0;
`,j$=w.p`
  color: ${b.cream};
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C$=w.span`
  color: ${b.cream};
  opacity: 0.4;
  font-size: 11px;
  white-space: nowrap;
`,E$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),h.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),h.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),ex=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("polyline",{points:"12 6 12 12 16 14"})]}),A$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("polyline",{points:"20 12 20 22 4 22 4 12"}),h.jsx("rect",{x:"2",y:"7",width:"20",height:"5"}),h.jsx("line",{x1:"12",y1:"22",x2:"12",y2:"7"}),h.jsx("path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"})]}),M$=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("circle",{cx:"12",cy:"8",r:"7"}),h.jsx("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"})]}),$$=n=>{switch(n){case"join":return h.jsx(E$,{});case"draw":return h.jsx(ex,{});case"gift":return h.jsx(A$,{});case"win":return h.jsx(M$,{});default:return h.jsx(ex,{})}},ad=[{icon:"💬",text:"New message from Sarah!"},{icon:"🎉",text:"James just won €250!"},{icon:"🎁",text:"Emma gifted you a ticket!"},{icon:"👥",text:"Mike invited you to a syndicate!"},{icon:"💰",text:"Lisa won the weekly draw!"},{icon:"🎫",text:"Tom sent you a bonus ticket!"},{icon:"🏆",text:"Your syndicate won €500!"},{icon:"📩",text:"You have 3 unread messages"}],D$=()=>{const{activity:n}=nn(),[a,o]=j.useState([]),[l,c]=j.useState(0);j.useEffect(()=>{const p=setTimeout(()=>{o([{...ad[0],id:Date.now()}])},5e3);return()=>clearTimeout(p)},[]),j.useEffect(()=>{const p=setInterval(()=>{const m=(l+1)%ad.length;c(m),o(g=>[{...ad[m],id:Date.now()},...g])},15e3);return()=>clearInterval(p)},[l]);const f=a.length>0?a[0].id:null,d=[...a.map(p=>({...p,type:"notification",time:"Just now"})),...n].slice(0,6);return h.jsxs(h$,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.6},children:[h.jsx(v$,{children:"Recent Activity"}),h.jsx(b$,{children:h.jsx(en,{initial:!1,children:d.map((p,m)=>{const g=p.type==="notification"&&p.id===f;return p.type==="notification"?h.jsxs(p$,{$isNew:g,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{type:"spring",stiffness:300,damping:25},layout:!0,children:[h.jsx(m$,{$isNew:g,children:p.icon}),h.jsx(g$,{children:h.jsx(y$,{$isNew:g,children:p.text})}),h.jsx(x$,{$isNew:g,children:p.time})]},p.id):h.jsxs(S$,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.05},layout:!0,children:[h.jsx(w$,{$type:p.type,children:$$(p.type)}),h.jsx(T$,{children:h.jsx(j$,{children:p.text})}),h.jsx(C$,{children:p.time})]},p.id)})})})]})},Qs=w(I.div)`
  position: fixed;
  inset: 0;
  background: rgba(21, 1, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Zs=w(I.div)`
  background: linear-gradient(180deg, #1a0a05 0%, #150100 100%);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
`,Fs=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Js=w.h2`
  color: ${b.cream};
  font-size: 1.5rem;
  font-weight: 700;
`,Ws=w.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.1);
  color: ${b.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${Bt.fast};

  &:hover {
    background: rgba(203, 51, 50, 0.2);
    border-color: ${b.red};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,nx=w.input`
  width: 100%;
  padding: 14px 18px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 12px;
  color: ${b.cream};
  font-size: 15px;
  margin-bottom: 16px;
  transition: all ${Bt.fast};

  &::placeholder {
    color: rgba(253, 249, 238, 0.4);
  }

  &:focus {
    outline: none;
    border-color: ${b.gold};
    background: rgba(253, 249, 238, 0.08);
  }
`,z$=w.textarea`
  width: 100%;
  padding: 14px 18px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 12px;
  color: ${b.cream};
  font-size: 15px;
  margin-bottom: 16px;
  min-height: 80px;
  resize: none;

  &::placeholder {
    color: rgba(253, 249, 238, 0.4);
  }

  &:focus {
    outline: none;
    border-color: ${b.gold};
  }
`,zh=w(I.button)`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, ${b.red}, ${b.coral});
  color: ${b.cream};
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 8px;
`;w(I.button)`
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 1px solid rgba(253, 249, 238, 0.2);
  color: ${b.cream};
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: rgba(253, 249, 238, 0.05);
  }
`;const tr=w.label`
  display: block;
  color: ${b.cream};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  opacity: 0.8;
`,Is=w.div`
  background: rgba(230, 201, 86, 0.1);
  border: 1px solid rgba(230, 201, 86, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`,tc=w.p`
  color: ${b.gold};
  font-size: 14px;
  line-height: 1.5;
`,R$=w.div`
  margin: 20px 0;
`,O$=w.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: rgba(253, 249, 238, 0.1);
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${b.gold};
    cursor: pointer;
  }
`,k$=w.div`
  text-align: center;
  margin-top: 12px;
`,B$=w.span`
  font-size: 3rem;
  font-weight: 800;
  color: ${b.gold};
`,N$=w.span`
  display: block;
  color: ${b.cream};
  opacity: 0.6;
  font-size: 13px;
  margin-top: 4px;
`,Rh=w.div`
  background: rgba(253, 249, 238, 0.05);
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
  text-align: center;
`,qa=w.div`
  color: ${b.cream};
  opacity: 0.6;
  font-size: 12px;
  margin-bottom: 4px;
`,yo=w.div`
  color: ${b.coral};
  font-size: 1.2rem;
  font-weight: 700;
`,L$=w.span`
  color: ${b.cream};
  opacity: 0.5;
  margin: 0 12px;
`,_$=w.span`
  color: ${b.gold};
`,V$=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;
`,rd=w(I.button)`
  padding: 12px;
  border-radius: 12px;
  background: ${n=>n.$bg||"rgba(253, 249, 238, 0.08)"};
  border: none;
  color: ${b.cream};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  svg {
    width: 20px;
    height: 20px;
  }
`,U$=w.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`,H$=w.input`
  flex: 1;
  padding: 12px 16px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 10px;
  color: ${b.gold};
  font-size: 13px;
  font-family: monospace;
`,Y$=w(I.button)`
  padding: 12px 20px;
  background: ${b.gold};
  color: ${b.darkBrown};
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`,Kb=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 16px;
`,Qb=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${n=>n.$selected?`${b.gold}20`:"rgba(253, 249, 238, 0.03)"};
  border: 1px solid ${n=>n.$selected?b.gold:"rgba(253, 249, 238, 0.08)"};
  border-radius: 12px;
  cursor: pointer;
  transition: all ${Bt.fast};

  &:hover {
    background: rgba(253, 249, 238, 0.08);
  }
`,Zb=w.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
`,Fb=w.span`
  color: ${b.cream};
  font-weight: 500;
`,G$=w.div`
  text-align: center;
  margin: 16px 0;
`,q$=w.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${b.cream};
`,X$=w.span`
  display: block;
  color: ${b.cream};
  opacity: 0.5;
  font-size: 12px;
  margin-top: 4px;
`,ec=()=>h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Jb=[{id:1,name:"Sarah_Winner",avatar:"/moneypools-landing/images/01.png"},{id:2,name:"JackpotJoe",avatar:"/moneypools-landing/images/03.png"},{id:3,name:"LuckyLisa",avatar:"/moneypools-landing/images/04.png"}],P$=()=>{const{syndicateModalOpen:n,setSyndicateModalOpen:a,pool:o}=nn(),[l,c]=j.useState("");return n?h.jsx(en,{children:h.jsx(Qs,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),children:h.jsxs(Zs,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:f=>f.stopPropagation(),children:[h.jsxs(Fs,{children:[h.jsx(Js,{children:"Start a Syndicate"}),h.jsx(Ws,{onClick:()=>a(!1),children:h.jsx(ec,{})})]}),h.jsx(Is,{children:h.jsx(tc,{children:"Team up with up to 9 friends. If anyone wins, the prize is split equally!"})}),h.jsx(tr,{children:"Syndicate Name"}),h.jsx(nx,{type:"text",placeholder:"e.g., The Lucky Tigers",value:l,onChange:f=>c(f.target.value)}),h.jsx(tr,{children:"Invite Members"}),h.jsx(nx,{type:"text",placeholder:"Search by username..."}),h.jsx(Kb,{children:Jb.map(f=>h.jsxs(Qb,{children:[h.jsx(Zb,{src:f.avatar,alt:f.name}),h.jsx(Fb,{children:f.name})]},f.id))}),h.jsxs(Rh,{children:[h.jsx(qa,{children:"Combined Odds (with 3 members)"}),h.jsxs(yo,{children:["1 in ",Math.ceil(o.activePlayers/3).toLocaleString()]})]}),h.jsx(zh,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Create Syndicate"})]})})}):null},K$=()=>{const{giftModalOpen:n,setGiftModalOpen:a}=nn(),[o,l]=j.useState(null),[c,f]=j.useState("");return n?h.jsx(en,{children:h.jsx(Qs,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),children:h.jsxs(Zs,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:d=>d.stopPropagation(),children:[h.jsxs(Fs,{children:[h.jsx(Js,{children:"Gift a Ticket"}),h.jsx(Ws,{onClick:()=>a(!1),children:h.jsx(ec,{})})]}),h.jsx(Is,{children:h.jsx(tc,{children:"Send a ticket to a friend and they'll be entered in the next draw!"})}),h.jsx(tr,{children:"Select Friend"}),h.jsx(Kb,{children:Jb.map(d=>h.jsxs(Qb,{$selected:o===d.id,onClick:()=>l(d.id),children:[h.jsx(Zb,{src:d.avatar,alt:d.name}),h.jsx(Fb,{children:d.name})]},d.id))}),h.jsx(tr,{children:"Add a Message (optional)"}),h.jsx(z$,{placeholder:"Good luck! 🍀",value:c,onChange:d=>f(d.target.value)}),h.jsx(zh,{whileHover:{scale:1.02},whileTap:{scale:.98},disabled:!o,children:"Send Gift"})]})})}):null},Q$=()=>{const{multiplierModalOpen:n,setMultiplierModalOpen:a,player:o,pool:l,updateMultiplier:c,calculateOdds:f}=nn(),[d,p]=j.useState(o.ticketMultiplier);if(!n)return null;const m=l.activePlayers,g=Math.ceil(m/d),v=(d-1)*7,x=()=>{c(d),a(!1)};return h.jsx(en,{children:h.jsx(Qs,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),children:h.jsxs(Zs,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:T=>T.stopPropagation(),children:[h.jsxs(Fs,{children:[h.jsx(Js,{children:"Ticket Multiplier"}),h.jsx(Ws,{onClick:()=>a(!1),children:h.jsx(ec,{})})]}),h.jsx(Is,{children:h.jsx(tc,{children:"More tickets = better odds! Each ticket is another chance to win."})}),h.jsxs(R$,{children:[h.jsx(O$,{type:"range",min:"1",max:"10",value:d,onChange:T=>p(parseInt(T.target.value))}),h.jsxs(k$,{children:[h.jsx(B$,{children:d}),h.jsx(N$,{children:"tickets this draw"})]})]}),h.jsxs(Rh,{children:[h.jsx(qa,{children:"Your Odds"}),h.jsxs(yo,{children:["1 in ",m.toLocaleString(),h.jsx(L$,{children:"→"}),h.jsxs(_$,{children:["1 in ",g.toLocaleString()]})]})]}),v>0&&h.jsxs(G$,{children:[h.jsxs(q$,{children:["€",v]}),h.jsxs(X$,{children:["for ",d-1," extra ticket",d>2?"s":""]})]}),h.jsx(zh,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:x,children:v>0?`Confirm (€${v})`:"Confirm"})]})})})},Z$=()=>{const{inviteModalOpen:n,setInviteModalOpen:a,player:o}=nn(),[l,c]=j.useState(!1),f=`https://moneypools.com/ref/${o.referralCode}`,d=()=>{navigator.clipboard.writeText(f),c(!0),setTimeout(()=>c(!1),2e3)};return n?h.jsx(en,{children:h.jsx(Qs,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),children:h.jsxs(Zs,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:p=>p.stopPropagation(),children:[h.jsxs(Fs,{children:[h.jsx(Js,{children:"Invite Friends"}),h.jsx(Ws,{onClick:()=>a(!1),children:h.jsx(ec,{})})]}),h.jsx(Is,{children:h.jsx(tc,{children:"Multiply your winning chances! For each friend you invite, your odds are multiplied for the next 3 draws. Invite 10 friends = 10X winning chances!"})}),h.jsx(tr,{children:"Your Referral Link"}),h.jsxs(U$,{children:[h.jsx(H$,{type:"text",value:f,readOnly:!0}),h.jsx(Y$,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,children:l?"Copied!":"Copy"})]}),h.jsx(tr,{children:"Share via"}),h.jsxs(V$,{children:[h.jsxs(rd,{$bg:"#25D366",whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]}),h.jsxs(rd,{$bg:"#0088cc",whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"})}),"Telegram"]}),h.jsxs(rd,{$bg:"#1DA1F2",whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})}),"Twitter"]})]}),h.jsxs(Rh,{children:[h.jsx(qa,{children:"Your Referral Stats"}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",marginTop:12},children:[h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx(yo,{style:{fontSize:"1.5rem"},children:"3"}),h.jsx(qa,{children:"Invited"})]}),h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx(yo,{style:{fontSize:"1.5rem"},children:"2"}),h.jsx(qa,{children:"Active"})]}),h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx(yo,{style:{fontSize:"1.5rem",color:b.gold},children:"€10"}),h.jsx(qa,{children:"Earned"})]})]})]})]})})}):null},F$=w.div`
  min-height: 100vh;
  width: 100%;
  background: ${b.darkBrown};
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  @media (min-width: ${J.tablet}) {
    height: auto;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, ${b.gold}08 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, ${b.coral}06 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }
`,J$=w.main`
  min-height: 100vh;
  padding: 70px 12px 24px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: ${J.tablet}) {
    padding: 80px 24px 24px;
  }

  @media (min-width: ${J.desktop}) {
    padding: 90px 40px 30px;
  }
`,W$=w.div`
  display: none;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: ${J.tablet}) {
    display: grid;
    grid-template-columns: 260px 1fr 260px;
  }

  @media (min-width: ${J.desktop}) {
    grid-template-columns: 280px 1fr 300px;
    gap: 24px;
  }

  @media (min-width: ${J.wide}) {
    grid-template-columns: 300px 1fr 320px;
  }
`,I$=w.div`
  display: none;

  @media (min-width: ${J.tablet}) {
    display: block;
  }
`,tD=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,eD=w.div`
  display: none;

  @media (min-width: ${J.tablet}) {
    display: block;
  }
`,nD=w.div`
  margin-top: 20px;
  display: none;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${J.tablet}) {
    display: flex;
  }

  @media (min-width: ${J.desktop}) {
    margin-top: 24px;
    flex-direction: row;
    gap: 24px;
  }
`,iD=w.div`
  flex: 2;
`,aD=w.div`
  flex: 1;
  display: none;

  @media (min-width: ${J.desktop}) {
    display: block;
  }
`,rD=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin: 16px 0;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,oD=w.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${b.gold};
  flex-shrink: 0;
`,lD=w.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(253, 249, 238, 0.05);
  border-radius: 12px;
  padding: 8px 12px;
`,sD=w.span`
  color: ${b.cream};
  font-size: 10px;
  opacity: 0.6;
  margin-right: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,cD=w.span`
  color: ${b.gold};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`,uD=w.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 12px 0;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,fD=w.div`
  display: flex;
  gap: 10px;
  padding: 6px 0;
  flex-shrink: 0;
  margin-top: 6px;
  position: relative;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,dD=w.div`
  display: none;

  @media (min-width: ${J.tablet}) {
    display: block;
  }
`,hD=w.div`
  position: absolute;
  bottom: 100%;
  right: calc(12.5% - 50px);
  margin-bottom: 6px;
  z-index: 200;

  @media (min-width: ${J.tablet}) {
    display: none;
  }
`,pD=w.div`
  position: relative;
  background: linear-gradient(135deg, ${b.gold}, #D4A84B);
  color: ${b.darkBrown};
  padding: 6px 10px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 9px;
  box-shadow: 0 3px 12px rgba(230, 201, 86, 0.5);
  cursor: pointer;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #D4A84B;
  }
`,mD=()=>{const[n,a]=j.useState(!0),{setInviteModalOpen:o}=nn(),l=()=>{a(!1),o(!0)};return h.jsxs(F$,{children:[h.jsx(I8,{}),h.jsxs(J$,{children:[h.jsx(gD,{}),h.jsx(uD,{children:h.jsx(Q1,{})}),h.jsxs(fD,{children:[h.jsx(tx,{isMobile:!0}),n&&h.jsx(hD,{children:h.jsx(pD,{onClick:l,children:"Increase Winning Chances!"})})]}),h.jsxs(W$,{children:[h.jsx(I$,{children:h.jsx(AM,{})}),h.jsx(tD,{children:h.jsx(Q1,{})}),h.jsx(eD,{children:h.jsx(dD,{children:h.jsx(n$,{})})})]}),h.jsxs(nD,{children:[h.jsx(iD,{children:h.jsx(tx,{})}),h.jsx(aD,{children:h.jsx(D$,{})})]})]}),h.jsx(P$,{}),h.jsx(K$,{}),h.jsx(Q$,{}),h.jsx(Z$,{})]})},gD=()=>{const{player:n,pool:a}=nn(),[o,l]=j.useState({hours:0,minutes:0,seconds:0});j.useEffect(()=>{const f=new Date;f.setDate(f.getDate()+2),f.setHours(20,0,0,0);const d=()=>{const g=f-new Date;if(g>0){const v=Math.floor(g/36e5),x=Math.floor(g%(1e3*60*60)/(1e3*60)),T=Math.floor(g%(1e3*60)/1e3);l({hours:v,minutes:x,seconds:T})}};d();const p=setInterval(d,1e3);return()=>clearInterval(p)},[]);const c=f=>f.toString().padStart(2,"0");return h.jsxs(rD,{children:[h.jsx(oD,{src:n.avatar,alt:n.username}),h.jsxs(lD,{children:[h.jsx(sD,{children:"Next Draw"}),h.jsxs(cD,{children:[c(o.hours),":",c(o.minutes),":",c(o.seconds)]})]})]})},yD=()=>h.jsx(H8,{children:h.jsx(mD,{})}),xD=()=>h.jsxs(h.Fragment,{children:[h.jsx(i6,{}),h.jsxs("main",{children:[h.jsx(z6,{}),h.jsx(Y6,{}),h.jsx(eA,{}),h.jsx(xA,{}),h.jsx(_A,{}),h.jsx(a8,{}),h.jsx(S8,{})]}),h.jsx(B8,{}),h.jsx(N8,{}),h.jsx(L8,{})]});function vD(){return h.jsx(W3,{basename:"/moneypools-landing",children:h.jsxs(s5,{children:[h.jsx(uT,{}),h.jsxs(M3,{children:[h.jsx(ld,{path:"/",element:h.jsx(xD,{})}),h.jsx(ld,{path:"/dashboard",element:h.jsx(yD,{})})]})]})})}zw.createRoot(document.getElementById("root")).render(h.jsx(j.StrictMode,{children:h.jsx(vD,{})}));
