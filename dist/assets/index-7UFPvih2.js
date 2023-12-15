(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Fa(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const dt={},Jn=[],Ve=()=>{},dg=()=>!1,Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$a=t=>t.startsWith("onUpdate:"),Mt=Object.assign,Ba=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pg=Object.prototype.hasOwnProperty,Y=(t,e)=>pg.call(t,e),z=Array.isArray,Zn=t=>Si(t)==="[object Map]",ph=t=>Si(t)==="[object Set]",q=t=>typeof t=="function",Rt=t=>typeof t=="string",yr=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",gh=t=>(gt(t)||q(t))&&q(t.then)&&q(t.catch),mh=Object.prototype.toString,Si=t=>mh.call(t),gg=t=>Si(t).slice(8,-1),_h=t=>Si(t)==="[object Object]",Ua=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mg=/-(\w)/g,ir=Pi(t=>t.replace(mg,(e,n)=>n?n.toUpperCase():"")),_g=/\B([A-Z])/g,vr=Pi(t=>t.replace(_g,"-$1").toLowerCase()),yh=Pi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ho=Pi(t=>t?`on${yh(t)}`:""),Vn=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},yg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uc;const Qo=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Rt(r)?Ig(r):ja(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Rt(t)||gt(t))return t}const vg=/;(?![^(]*\))/g,Eg=/:([^]+)/,wg=/\/\*[^]*?\*\//g;function Ig(t){const e={};return t.replace(wg,"").split(vg).forEach(n=>{if(n){const r=n.split(Eg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function za(t){let e="";if(Rt(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=za(t[n]);r&&(e+=r+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ag=Fa(Tg);function vh(t){return!!t||t===""}const bg=t=>Rt(t)?t:t==null?"":z(t)||gt(t)&&(t.toString===mh||!q(t.toString))?JSON.stringify(t,Eh,2):String(t),Eh=(t,e)=>e&&e.__v_isRef?Eh(t,e.value):Zn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[po(r,i)+" =>"]=s,n),{})}:ph(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>po(n))}:yr(e)?po(e):gt(e)&&!z(e)&&!_h(e)?String(e):e,po=(t,e="")=>{var n;return yr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let fe;class wh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fe,!e&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=fe;try{return fe=this,e()}finally{fe=n}}}on(){fe=this}off(){fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rg(t){return new wh(t)}function Sg(t,e=fe){e&&e.active&&e.effects.push(t)}function Pg(){return fe}const Ha=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ih=t=>(t.w&ln)>0,Th=t=>(t.n&ln)>0,Cg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ln},Dg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ih(s)&&!Th(s)?s.delete(t):e[n++]=s,s.w&=~ln,s.n&=~ln}e.length=n}},Xo=new WeakMap;let Mr=0,ln=1;const Yo=30;let pe;const Sn=Symbol(""),Jo=Symbol("");class Ka{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sg(this,r)}run(){if(!this.active)return this.fn();let e=pe,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pe,pe=this,rn=!0,ln=1<<++Mr,Mr<=Yo?Cg(this):hc(this),this.fn()}finally{Mr<=Yo&&Dg(this),ln=1<<--Mr,pe=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pe===this?this.deferStop=!0:this.active&&(hc(this),this.onStop&&this.onStop(),this.active=!1)}}function hc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const Ah=[];function Er(){Ah.push(rn),rn=!1}function wr(){const t=Ah.pop();rn=t===void 0?!0:t}function ee(t,e,n){if(rn&&pe){let r=Xo.get(t);r||Xo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ha()),bh(s)}}function bh(t,e){let n=!1;Mr<=Yo?Th(t)||(t.n|=ln,n=!Ih(t)):n=!t.has(pe),n&&(t.add(pe),pe.deps.push(t))}function je(t,e,n,r,s,i){const o=Xo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!yr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Ua(n)&&a.push(o.get("length")):(a.push(o.get(Sn)),Zn(t)&&a.push(o.get(Jo)));break;case"delete":z(t)||(a.push(o.get(Sn)),Zn(t)&&a.push(o.get(Jo)));break;case"set":Zn(t)&&a.push(o.get(Sn));break}if(a.length===1)a[0]&&Zo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Zo(Ha(l))}}function Zo(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&fc(r);for(const r of n)r.computed||fc(r)}function fc(t,e){(t!==pe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Og=Fa("__proto__,__v_isRef,__isVue"),Rh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yr)),dc=Vg();function Vg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=tt(this);for(let i=0,o=this.length;i<o;i++)ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Er();const r=tt(this)[e].apply(this,n);return wr(),r}}),t}function kg(t){const e=tt(this);return ee(e,"has",t),e.hasOwnProperty(t)}class Sh{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?qg:Oh:i?Dh:Ch).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&Y(dc,n))return Reflect.get(dc,n,r);if(n==="hasOwnProperty")return kg}const a=Reflect.get(e,n,r);return(yr(n)?Rh.has(n):Og(n))||(s||ee(e,"get",n),i)?a:zt(a)?o&&Ua(n)?a:a.value:gt(a)?s?kh(a):Di(a):a}}class Ph extends Sh{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(or(i)&&zt(i)&&!zt(r))return!1;if(!this._shallow&&(!ei(r)&&!or(r)&&(i=tt(i),r=tt(r)),!z(e)&&zt(i)&&!zt(r)))return i.value=r,!0;const o=z(e)&&Ua(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,r,s);return e===tt(s)&&(o?Vn(r,i)&&je(e,"set",n,r):je(e,"add",n,r)),a}deleteProperty(e,n){const r=Y(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&je(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!yr(n)||!Rh.has(n))&&ee(e,"has",n),r}ownKeys(e){return ee(e,"iterate",z(e)?"length":Sn),Reflect.ownKeys(e)}}class xg extends Sh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mg=new Ph,Ng=new xg,Lg=new Ph(!0),qa=t=>t,Ci=t=>Reflect.getPrototypeOf(t);function ks(t,e,n=!1,r=!1){t=t.__v_raw;const s=tt(t),i=tt(e);n||(Vn(e,i)&&ee(s,"get",e),ee(s,"get",i));const{has:o}=Ci(s),a=r?qa:n?Xa:Xr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xs(t,e=!1){const n=this.__v_raw,r=tt(n),s=tt(t);return e||(Vn(t,s)&&ee(r,"has",t),ee(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ms(t,e=!1){return t=t.__v_raw,!e&&ee(tt(t),"iterate",Sn),Reflect.get(t,"size",t)}function pc(t){t=tt(t);const e=tt(this);return Ci(e).has.call(e,t)||(e.add(t),je(e,"add",t,t)),this}function gc(t,e){e=tt(e);const n=tt(this),{has:r,get:s}=Ci(n);let i=r.call(n,t);i||(t=tt(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Vn(e,o)&&je(n,"set",t,e):je(n,"add",t,e),this}function mc(t){const e=tt(this),{has:n,get:r}=Ci(e);let s=n.call(e,t);s||(t=tt(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&je(e,"delete",t,void 0),i}function _c(){const t=tt(this),e=t.size!==0,n=t.clear();return e&&je(t,"clear",void 0,void 0),n}function Ns(t,e){return function(r,s){const i=this,o=i.__v_raw,a=tt(o),l=e?qa:t?Xa:Xr;return!t&&ee(a,"iterate",Sn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ls(t,e,n){return function(...r){const s=this.__v_raw,i=tt(s),o=Zn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?qa:e?Xa:Xr;return!e&&ee(i,"iterate",l?Jo:Sn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Fg(){const t={get(i){return ks(this,i)},get size(){return Ms(this)},has:xs,add:pc,set:gc,delete:mc,clear:_c,forEach:Ns(!1,!1)},e={get(i){return ks(this,i,!1,!0)},get size(){return Ms(this)},has:xs,add:pc,set:gc,delete:mc,clear:_c,forEach:Ns(!1,!0)},n={get(i){return ks(this,i,!0)},get size(){return Ms(this,!0)},has(i){return xs.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Ns(!0,!1)},r={get(i){return ks(this,i,!0,!0)},get size(){return Ms(this,!0)},has(i){return xs.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ls(i,!1,!1),n[i]=Ls(i,!0,!1),e[i]=Ls(i,!1,!0),r[i]=Ls(i,!0,!0)}),[t,n,e,r]}const[$g,Bg,Ug,jg]=Fg();function Wa(t,e){const n=e?t?jg:Ug:t?Bg:$g;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const zg={get:Wa(!1,!1)},Hg={get:Wa(!1,!0)},Kg={get:Wa(!0,!1)},Ch=new WeakMap,Dh=new WeakMap,Oh=new WeakMap,qg=new WeakMap;function Wg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gg(t){return t.__v_skip||!Object.isExtensible(t)?0:Wg(gg(t))}function Di(t){return or(t)?t:Ga(t,!1,Mg,zg,Ch)}function Vh(t){return Ga(t,!1,Lg,Hg,Dh)}function kh(t){return Ga(t,!0,Ng,Kg,Oh)}function Ga(t,e,n,r,s){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gg(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return or(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function ei(t){return!!(t&&t.__v_isShallow)}function xh(t){return tr(t)||or(t)}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function Qa(t){return ti(t,"__v_skip",!0),t}const Xr=t=>gt(t)?Di(t):t,Xa=t=>gt(t)?kh(t):t;function Mh(t){rn&&pe&&(t=tt(t),bh(t.dep||(t.dep=Ha())))}function Nh(t,e){t=tt(t);const n=t.dep;n&&Zo(n)}function zt(t){return!!(t&&t.__v_isRef===!0)}function Lh(t){return Fh(t,!1)}function Qg(t){return Fh(t,!0)}function Fh(t,e){return zt(t)?t:new Xg(t,e)}class Xg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:tt(e),this._value=n?e:Xr(e)}get value(){return Mh(this),this._value}set value(e){const n=this.__v_isShallow||ei(e)||or(e);e=n?e:tt(e),Vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xr(e),Nh(this))}}function er(t){return zt(t)?t.value:t}const Yg={get:(t,e,n)=>er(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return zt(s)&&!zt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $h(t){return tr(t)?t:new Proxy(t,Yg)}class Jg{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ka(e,()=>{this._dirty||(this._dirty=!0,Nh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=tt(this);return Mh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zg(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=Ve):(r=t.get,s=t.set),new Jg(r,s,i||!s,n)}function sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Oi(i,e,n)}return s}function ve(t,e,n,r){if(q(t)){const i=sn(t,e,n,r);return i&&gh(i)&&i.catch(o=>{Oi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ve(t[i],e,n,r));return s}function Oi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){sn(l,null,10,[t,o,a]);return}}tm(t,n,s,r)}function tm(t,e,n,r=!0){console.error(t)}let Yr=!1,ta=!1;const Ut=[];let Pe=0;const nr=[];let $e=null,wn=0;const Bh=Promise.resolve();let Ya=null;function Uh(t){const e=Ya||Bh;return t?e.then(this?t.bind(this):t):e}function em(t){let e=Pe+1,n=Ut.length;for(;e<n;){const r=e+n>>>1,s=Ut[r],i=Jr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ja(t){(!Ut.length||!Ut.includes(t,Yr&&t.allowRecurse?Pe+1:Pe))&&(t.id==null?Ut.push(t):Ut.splice(em(t.id),0,t),jh())}function jh(){!Yr&&!ta&&(ta=!0,Ya=Bh.then(Hh))}function nm(t){const e=Ut.indexOf(t);e>Pe&&Ut.splice(e,1)}function rm(t){z(t)?nr.push(...t):(!$e||!$e.includes(t,t.allowRecurse?wn+1:wn))&&nr.push(t),jh()}function yc(t,e,n=Yr?Pe+1:0){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r()}}}function zh(t){if(nr.length){const e=[...new Set(nr)];if(nr.length=0,$e){$e.push(...e);return}for($e=e,$e.sort((n,r)=>Jr(n)-Jr(r)),wn=0;wn<$e.length;wn++)$e[wn]();$e=null,wn=0}}const Jr=t=>t.id==null?1/0:t.id,sm=(t,e)=>{const n=Jr(t)-Jr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hh(t){ta=!1,Yr=!0,Ut.sort(sm);try{for(Pe=0;Pe<Ut.length;Pe++){const e=Ut[Pe];e&&e.active!==!1&&sn(e,null,14)}}finally{Pe=0,Ut.length=0,zh(),Yr=!1,Ya=null,(Ut.length||nr.length)&&Hh()}}function im(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||dt;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||dt;d&&(s=n.map(m=>Rt(m)?m.trim():m)),h&&(s=n.map(yg))}let a,l=r[a=ho(e)]||r[a=ho(ir(e))];!l&&i&&(l=r[a=ho(vr(e))]),l&&ve(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ve(c,t,6,s)}}function Kh(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Kh(c,e,!0);u&&(a=!0,Mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(gt(t)&&r.set(t,null),null):(z(i)?i.forEach(l=>o[l]=null):Mt(o,i),gt(t)&&r.set(t,o),o)}function Vi(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,vr(e))||Y(t,e))}let Zt=null,ki=null;function ni(t){const e=Zt;return Zt=t,ki=t&&t.type.__scopeId||null,e}function qh(t){ki=t}function Wh(){ki=null}function Ft(t,e=Zt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pc(-1);const i=ni(e);let o;try{o=t(...s)}finally{ni(i),r._d&&Pc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function go(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:A,inheritAttrs:R}=t;let D,V;const x=ni(t);try{if(n.shapeFlag&4){const N=s||r,_t=N;D=Se(u.call(_t,N,h,i,m,d,A)),V=l}else{const N=e;D=Se(N.length>1?N(i,{attrs:l,slots:a,emit:c}):N(i,null)),V=e.props?l:om(l)}}catch(N){Ur.length=0,Oi(N,t,1),D=ut(ar)}let K=D;if(V&&R!==!1){const N=Object.keys(V),{shapeFlag:_t}=K;N.length&&_t&7&&(o&&N.some($a)&&(V=am(V,o)),K=lr(K,V))}return n.dirs&&(K=lr(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),D=K,ni(x),D}const om=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},am=(t,e)=>{const n={};for(const r in t)(!$a(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lm(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Vi(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vc(r,o,c):!0:!!o;return!1}function vc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Vi(n,i))return!0}return!1}function cm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const um=Symbol.for("v-ndc"),hm=t=>t.__isSuspense;function fm(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):rm(t)}const Fs={};function Qs(t,e,n){return Gh(t,e,n)}function Gh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=dt){var a;const l=Pg()===((a=jt)==null?void 0:a.scope)?jt:null;let c,u=!1,h=!1;if(zt(t)?(c=()=>t.value,u=ei(t)):tr(t)?(c=()=>t,r=!0):z(t)?(h=!0,u=t.some(N=>tr(N)||ei(N)),c=()=>t.map(N=>{if(zt(N))return N.value;if(tr(N))return Xn(N);if(q(N))return sn(N,l,2)})):q(t)?e?c=()=>sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),ve(t,l,3,[m])}:c=Ve,e&&r){const N=c;c=()=>Xn(N())}let d,m=N=>{d=x.onStop=()=>{sn(N,l,4),d=x.onStop=void 0}},A;if(ts)if(m=Ve,e?n&&ve(e,l,3,[c(),h?[]:void 0,m]):c(),s==="sync"){const N=s_();A=N.__watcherHandles||(N.__watcherHandles=[])}else return Ve;let R=h?new Array(t.length).fill(Fs):Fs;const D=()=>{if(x.active)if(e){const N=x.run();(r||u||(h?N.some((_t,yt)=>Vn(_t,R[yt])):Vn(N,R)))&&(d&&d(),ve(e,l,3,[N,R===Fs?void 0:h&&R[0]===Fs?[]:R,m]),R=N)}else x.run()};D.allowRecurse=!!e;let V;s==="sync"?V=D:s==="post"?V=()=>Jt(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),V=()=>Ja(D));const x=new Ka(c,V);e?n?D():R=x.run():s==="post"?Jt(x.run.bind(x),l&&l.suspense):x.run();const K=()=>{x.stop(),l&&l.scope&&Ba(l.scope.effects,x)};return A&&A.push(K),K}function dm(t,e,n){const r=this.proxy,s=Rt(t)?t.includes(".")?Qh(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=jt;cr(this);const a=Gh(s,i.bind(r),n);return o?cr(o):Pn(),a}function Qh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xn(t,e){if(!gt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),zt(t))Xn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(ph(t)||Zn(t))t.forEach(n=>{Xn(n,e)});else if(_h(t))for(const n in t)Xn(t[n],e);return t}function yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Er(),ve(l,n,8,[t.el,a,t,e]),wr())}}/*! #__NO_SIDE_EFFECTS__ */function Xh(t,e){return q(t)?Mt({name:t.name},e,{setup:t}):t}const $r=t=>!!t.type.__asyncLoader,Yh=t=>t.type.__isKeepAlive;function pm(t,e){Jh(t,"a",e)}function gm(t,e){Jh(t,"da",e)}function Jh(t,e,n=jt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yh(s.parent.vnode)&&mm(r,e,n,s),s=s.parent}}function mm(t,e,n,r){const s=xi(e,t,r,!0);Zh(()=>{Ba(r[e],s)},n)}function xi(t,e,n=jt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Er(),cr(n);const a=ve(e,n,t,o);return Pn(),wr(),a});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=jt)=>(!ts||t==="sp")&&xi(t,(...r)=>e(...r),n),_m=Qe("bm"),ym=Qe("m"),vm=Qe("bu"),Em=Qe("u"),wm=Qe("bum"),Zh=Qe("um"),Im=Qe("sp"),Tm=Qe("rtg"),Am=Qe("rtc");function bm(t,e=jt){xi("ec",t,e)}function mo(t,e,n={},r,s){if(Zt.isCE||Zt.parent&&$r(Zt.parent)&&Zt.parent.isCE)return e!=="default"&&(n.name=e),ut("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ie();const o=i&&tf(i(n)),a=Km(oe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tf(t){return t.some(e=>ii(e)?!(e.type===ar||e.type===oe&&!tf(e.children)):!0)?t:null}const ea=t=>t?ff(t)?rl(t)||t.proxy:ea(t.parent):null,Br=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ea(t.parent),$root:t=>ea(t.root),$emit:t=>t.emit,$options:t=>Za(t),$forceUpdate:t=>t.f||(t.f=()=>Ja(t.update)),$nextTick:t=>t.n||(t.n=Uh.bind(t.proxy)),$watch:t=>dm.bind(t)}),_o=(t,e)=>t!==dt&&!t.__isScriptSetup&&Y(t,e),Rm={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_o(r,e))return o[e]=1,r[e];if(s!==dt&&Y(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,i[e];if(n!==dt&&Y(n,e))return o[e]=4,n[e];na&&(o[e]=0)}}const u=Br[e];let h,d;if(u)return e==="$attrs"&&ee(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==dt&&Y(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Y(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _o(s,e)?(s[e]=n,!0):r!==dt&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==dt&&Y(t,o)||_o(e,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(Br,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ec(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let na=!0;function Sm(t){const e=Za(t),n=t.proxy,r=t.ctx;na=!1,e.beforeCreate&&wc(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:A,activated:R,deactivated:D,beforeDestroy:V,beforeUnmount:x,destroyed:K,unmounted:N,render:_t,renderTracked:yt,renderTriggered:Xt,errorCaptured:ue,serverPrefetch:Xe,expose:re,inheritAttrs:Ye,components:_n,directives:Te,filters:Rr}=e;if(c&&Pm(c,r,null),o)for(const at in o){const et=o[at];q(et)&&(r[at]=et.bind(n))}if(s){const at=s.call(n,n);gt(at)&&(t.data=Di(at))}if(na=!0,i)for(const at in i){const et=i[at],Le=q(et)?et.bind(n,n):q(et.get)?et.get.bind(n,n):Ve,Je=!q(et)&&q(et.set)?et.set.bind(n):Ve,Ae=ge({get:Le,set:Je});Object.defineProperty(r,at,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Yt=>Ae.value=Yt})}if(a)for(const at in a)ef(a[at],r,n,at);if(l){const at=q(l)?l.call(n):l;Reflect.ownKeys(at).forEach(et=>{Xs(et,at[et])})}u&&wc(u,t,"c");function It(at,et){z(et)?et.forEach(Le=>at(Le.bind(n))):et&&at(et.bind(n))}if(It(_m,h),It(ym,d),It(vm,m),It(Em,A),It(pm,R),It(gm,D),It(bm,ue),It(Am,yt),It(Tm,Xt),It(wm,x),It(Zh,N),It(Im,Xe),z(re))if(re.length){const at=t.exposed||(t.exposed={});re.forEach(et=>{Object.defineProperty(at,et,{get:()=>n[et],set:Le=>n[et]=Le})})}else t.exposed||(t.exposed={});_t&&t.render===Ve&&(t.render=_t),Ye!=null&&(t.inheritAttrs=Ye),_n&&(t.components=_n),Te&&(t.directives=Te)}function Pm(t,e,n=Ve){z(t)&&(t=ra(t));for(const r in t){const s=t[r];let i;gt(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),zt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wc(t,e,n){ve(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ef(t,e,n,r){const s=r.includes(".")?Qh(n,r):()=>n[r];if(Rt(t)){const i=e[t];q(i)&&Qs(s,i)}else if(q(t))Qs(s,t.bind(n));else if(gt(t))if(z(t))t.forEach(i=>ef(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Qs(s,i,t)}}function Za(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ri(l,c,o,!0)),ri(l,e,o)),gt(e)&&i.set(e,l),l}function ri(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ri(t,i,n,!0),s&&s.forEach(o=>ri(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cm={data:Ic,props:Tc,emits:Tc,methods:Nr,computed:Nr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Nr,directives:Nr,watch:Om,provide:Ic,inject:Dm};function Ic(t,e){return e?t?function(){return Mt(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Dm(t,e){return Nr(ra(t),ra(e))}function ra(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Mt(Object.create(null),t,e):e}function Tc(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Mt(Object.create(null),Ec(t),Ec(e??{})):e}function Om(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const r in e)n[r]=Gt(t[r],e[r]);return n}function nf(){return{app:null,config:{isNativeTag:dg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vm=0;function km(t,e){return function(r,s=null){q(r)||(r=Mt({},r)),s!=null&&!gt(s)&&(s=null);const i=nf(),o=new WeakSet;let a=!1;const l=i.app={_uid:Vm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:i_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=ut(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,rl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){si=l;try{return c()}finally{si=null}}};return l}}let si=null;function Xs(t,e){if(jt){let n=jt.provides;const r=jt.parent&&jt.parent.provides;r===n&&(n=jt.provides=Object.create(r)),n[t]=e}}function ze(t,e,n=!1){const r=jt||Zt;if(r||si){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:si._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function xm(t,e,n,r=!1){const s={},i={};ti(i,Ni,1),t.propsDefaults=Object.create(null),rf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mm(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=tt(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Vi(t.emitsOptions,d))continue;const m=e[d];if(l)if(Y(i,d))m!==i[d]&&(i[d]=m,c=!0);else{const A=ir(d);s[A]=sa(l,a,A,m,t,!1)}else m!==i[d]&&(i[d]=m,c=!0)}}}else{rf(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Y(e,h)&&((u=vr(h))===h||!Y(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=sa(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Y(e,h))&&(delete i[h],c=!0)}c&&je(t,"set","$attrs")}function rf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;s&&Y(s,u=ir(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vi(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=tt(n),c=a||dt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=sa(s,l,h,c[h],t,!Y(c,h))}}return o}function sa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(cr(s),r=c[n]=l.call(null,e),Pn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===vr(n))&&(r=!0))}return r}function sf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!q(t)){const u=h=>{l=!0;const[d,m]=sf(h,e,!0);Mt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return gt(t)&&r.set(t,Jn),Jn;if(z(i))for(let u=0;u<i.length;u++){const h=ir(i[u]);Ac(h)&&(o[h]=dt)}else if(i)for(const u in i){const h=ir(u);if(Ac(h)){const d=i[u],m=o[h]=z(d)||q(d)?{type:d}:Mt({},d);if(m){const A=Sc(Boolean,m.type),R=Sc(String,m.type);m[0]=A>-1,m[1]=R<0||A<R,(A>-1||Y(m,"default"))&&a.push(h)}}}const c=[o,a];return gt(t)&&r.set(t,c),c}function Ac(t){return t[0]!=="$"}function bc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Rc(t,e){return bc(t)===bc(e)}function Sc(t,e){return z(e)?e.findIndex(n=>Rc(n,t)):q(e)&&Rc(e,t)?0:-1}const of=t=>t[0]==="_"||t==="$stable",tl=t=>z(t)?t.map(Se):[Se(t)],Nm=(t,e,n)=>{if(e._n)return e;const r=Ft((...s)=>tl(e(...s)),n);return r._c=!1,r},af=(t,e,n)=>{const r=t._ctx;for(const s in t){if(of(s))continue;const i=t[s];if(q(i))e[s]=Nm(s,i,r);else if(i!=null){const o=tl(i);e[s]=()=>o}}},lf=(t,e)=>{const n=tl(e);t.slots.default=()=>n},Lm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=tt(e),ti(e,"_",n)):af(e,t.slots={})}else t.slots={},e&&lf(t,e);ti(t.slots,Ni,1)},Fm=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=dt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Mt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,af(e,s)),o=e}else e&&(lf(t,e),o={default:1});if(i)for(const a in s)!of(a)&&o[a]==null&&delete s[a]};function ia(t,e,n,r,s=!1){if(z(t)){t.forEach((d,m)=>ia(d,e&&(z(e)?e[m]:e),n,r,s));return}if($r(r)&&!s)return;const i=r.shapeFlag&4?rl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,Y(h,c)&&(h[c]=null)):zt(c)&&(c.value=null)),q(l))sn(l,a,12,[o,u]);else{const d=Rt(l),m=zt(l);if(d||m){const A=()=>{if(t.f){const R=d?Y(h,l)?h[l]:u[l]:l.value;s?z(R)&&Ba(R,i):z(R)?R.includes(i)||R.push(i):d?(u[l]=[i],Y(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Y(h,l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,Jt(A,n)):A()}}}const Jt=fm;function $m(t){return Bm(t)}function Bm(t,e){const n=Qo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Ve,insertStaticContent:A}=t,R=(f,p,g,_=null,v=null,E=null,O=!1,b=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Pr(f,p)&&(_=y(f),Yt(f,v,E,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:$,shapeFlag:M}=p;switch(w){case Mi:D(f,p,g,_);break;case ar:V(f,p,g,_);break;case yo:f==null&&x(p,g,_,O);break;case oe:_n(f,p,g,_,v,E,O,b,S);break;default:M&1?_t(f,p,g,_,v,E,O,b,S):M&6?Te(f,p,g,_,v,E,O,b,S):(M&64||M&128)&&w.process(f,p,g,_,v,E,O,b,S,P)}$!=null&&v&&ia($,f&&f.ref,E,p||f,!p)},D=(f,p,g,_)=>{if(f==null)r(p.el=a(p.children),g,_);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},V=(f,p,g,_)=>{f==null?r(p.el=l(p.children||""),g,_):p.el=f.el},x=(f,p,g,_)=>{[f.el,f.anchor]=A(f.children,p,g,_,f.el,f.anchor)},K=({el:f,anchor:p},g,_)=>{let v;for(;f&&f!==p;)v=d(f),r(f,g,_),f=v;r(p,g,_)},N=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),s(f),f=g;s(p)},_t=(f,p,g,_,v,E,O,b,S)=>{O=O||p.type==="svg",f==null?yt(p,g,_,v,E,O,b,S):Xe(f,p,v,E,O,b,S)},yt=(f,p,g,_,v,E,O,b)=>{let S,w;const{type:$,props:M,shapeFlag:B,transition:H,dirs:G}=f;if(S=f.el=o(f.type,E,M&&M.is,M),B&8?u(S,f.children):B&16&&ue(f.children,S,null,_,v,E&&$!=="foreignObject",O,b),G&&yn(f,null,_,"created"),Xt(S,f,f.scopeId,O,_),M){for(const ot in M)ot!=="value"&&!Gs(ot)&&i(S,ot,null,M[ot],E,f.children,_,v,Nt);"value"in M&&i(S,"value",null,M.value),(w=M.onVnodeBeforeMount)&&Re(w,_,f)}G&&yn(f,null,_,"beforeMount");const lt=Um(v,H);lt&&H.beforeEnter(S),r(S,p,g),((w=M&&M.onVnodeMounted)||lt||G)&&Jt(()=>{w&&Re(w,_,f),lt&&H.enter(S),G&&yn(f,null,_,"mounted")},v)},Xt=(f,p,g,_,v)=>{if(g&&m(f,g),_)for(let E=0;E<_.length;E++)m(f,_[E]);if(v){let E=v.subTree;if(p===E){const O=v.vnode;Xt(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},ue=(f,p,g,_,v,E,O,b,S=0)=>{for(let w=S;w<f.length;w++){const $=f[w]=b?en(f[w]):Se(f[w]);R(null,$,p,g,_,v,E,O,b)}},Xe=(f,p,g,_,v,E,O)=>{const b=p.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:$}=p;S|=f.patchFlag&16;const M=f.props||dt,B=p.props||dt;let H;g&&vn(g,!1),(H=B.onVnodeBeforeUpdate)&&Re(H,g,p,f),$&&yn(p,f,g,"beforeUpdate"),g&&vn(g,!0);const G=v&&p.type!=="foreignObject";if(w?re(f.dynamicChildren,w,b,g,_,G,E):O||et(f,p,b,null,g,_,G,E,!1),S>0){if(S&16)Ye(b,p,M,B,g,_,v);else if(S&2&&M.class!==B.class&&i(b,"class",null,B.class,v),S&4&&i(b,"style",M.style,B.style,v),S&8){const lt=p.dynamicProps;for(let ot=0;ot<lt.length;ot++){const vt=lt[ot],he=M[vt],Kn=B[vt];(Kn!==he||vt==="value")&&i(b,vt,he,Kn,v,f.children,g,_,Nt)}}S&1&&f.children!==p.children&&u(b,p.children)}else!O&&w==null&&Ye(b,p,M,B,g,_,v);((H=B.onVnodeUpdated)||$)&&Jt(()=>{H&&Re(H,g,p,f),$&&yn(p,f,g,"updated")},_)},re=(f,p,g,_,v,E,O)=>{for(let b=0;b<p.length;b++){const S=f[b],w=p[b],$=S.el&&(S.type===oe||!Pr(S,w)||S.shapeFlag&70)?h(S.el):g;R(S,w,$,null,_,v,E,O,!0)}},Ye=(f,p,g,_,v,E,O)=>{if(g!==_){if(g!==dt)for(const b in g)!Gs(b)&&!(b in _)&&i(f,b,g[b],null,O,p.children,v,E,Nt);for(const b in _){if(Gs(b))continue;const S=_[b],w=g[b];S!==w&&b!=="value"&&i(f,b,w,S,O,p.children,v,E,Nt)}"value"in _&&i(f,"value",g.value,_.value)}},_n=(f,p,g,_,v,E,O,b,S)=>{const w=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:H}=p;H&&(b=b?b.concat(H):H),f==null?(r(w,g,_),r($,g,_),ue(p.children,g,$,v,E,O,b,S)):M>0&&M&64&&B&&f.dynamicChildren?(re(f.dynamicChildren,B,g,v,E,O,b),(p.key!=null||v&&p===v.subTree)&&cf(f,p,!0)):et(f,p,g,$,v,E,O,b,S)},Te=(f,p,g,_,v,E,O,b,S)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?v.ctx.activate(p,g,_,O,S):Rr(p,g,_,v,E,O,S):jn(f,p,S)},Rr=(f,p,g,_,v,E,O)=>{const b=f.component=Ym(f,_,v);if(Yh(f)&&(b.ctx.renderer=P),Jm(b),b.asyncDep){if(v&&v.registerDep(b,It),!f.el){const S=b.subTree=ut(ar);V(null,S,p,g)}return}It(b,f,p,g,v,E,O)},jn=(f,p,g)=>{const _=p.component=f.component;if(lm(f,p,g))if(_.asyncDep&&!_.asyncResolved){at(_,p,g);return}else _.next=p,nm(_.update),_.update();else p.el=f.el,_.vnode=p},It=(f,p,g,_,v,E,O)=>{const b=()=>{if(f.isMounted){let{next:$,bu:M,u:B,parent:H,vnode:G}=f,lt=$,ot;vn(f,!1),$?($.el=G.el,at(f,$,O)):$=G,M&&fo(M),(ot=$.props&&$.props.onVnodeBeforeUpdate)&&Re(ot,H,$,G),vn(f,!0);const vt=go(f),he=f.subTree;f.subTree=vt,R(he,vt,h(he.el),y(he),f,v,E),$.el=vt.el,lt===null&&cm(f,vt.el),B&&Jt(B,v),(ot=$.props&&$.props.onVnodeUpdated)&&Jt(()=>Re(ot,H,$,G),v)}else{let $;const{el:M,props:B}=p,{bm:H,m:G,parent:lt}=f,ot=$r(p);if(vn(f,!1),H&&fo(H),!ot&&($=B&&B.onVnodeBeforeMount)&&Re($,lt,p),vn(f,!0),M&&nt){const vt=()=>{f.subTree=go(f),nt(M,f.subTree,f,v,null)};ot?p.type.__asyncLoader().then(()=>!f.isUnmounted&&vt()):vt()}else{const vt=f.subTree=go(f);R(null,vt,g,_,f,v,E),p.el=vt.el}if(G&&Jt(G,v),!ot&&($=B&&B.onVnodeMounted)){const vt=p;Jt(()=>Re($,lt,vt),v)}(p.shapeFlag&256||lt&&$r(lt.vnode)&&lt.vnode.shapeFlag&256)&&f.a&&Jt(f.a,v),f.isMounted=!0,p=g=_=null}},S=f.effect=new Ka(b,()=>Ja(w),f.scope),w=f.update=()=>S.run();w.id=f.uid,vn(f,!0),w()},at=(f,p,g)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Mm(f,p.props,_,g),Fm(f,p.children,g),Er(),yc(f),wr()},et=(f,p,g,_,v,E,O,b,S=!1)=>{const w=f&&f.children,$=f?f.shapeFlag:0,M=p.children,{patchFlag:B,shapeFlag:H}=p;if(B>0){if(B&128){Je(w,M,g,_,v,E,O,b,S);return}else if(B&256){Le(w,M,g,_,v,E,O,b,S);return}}H&8?($&16&&Nt(w,v,E),M!==w&&u(g,M)):$&16?H&16?Je(w,M,g,_,v,E,O,b,S):Nt(w,v,E,!0):($&8&&u(g,""),H&16&&ue(M,g,_,v,E,O,b,S))},Le=(f,p,g,_,v,E,O,b,S)=>{f=f||Jn,p=p||Jn;const w=f.length,$=p.length,M=Math.min(w,$);let B;for(B=0;B<M;B++){const H=p[B]=S?en(p[B]):Se(p[B]);R(f[B],H,g,null,v,E,O,b,S)}w>$?Nt(f,v,E,!0,!1,M):ue(p,g,_,v,E,O,b,S,M)},Je=(f,p,g,_,v,E,O,b,S)=>{let w=0;const $=p.length;let M=f.length-1,B=$-1;for(;w<=M&&w<=B;){const H=f[w],G=p[w]=S?en(p[w]):Se(p[w]);if(Pr(H,G))R(H,G,g,null,v,E,O,b,S);else break;w++}for(;w<=M&&w<=B;){const H=f[M],G=p[B]=S?en(p[B]):Se(p[B]);if(Pr(H,G))R(H,G,g,null,v,E,O,b,S);else break;M--,B--}if(w>M){if(w<=B){const H=B+1,G=H<$?p[H].el:_;for(;w<=B;)R(null,p[w]=S?en(p[w]):Se(p[w]),g,G,v,E,O,b,S),w++}}else if(w>B)for(;w<=M;)Yt(f[w],v,E,!0),w++;else{const H=w,G=w,lt=new Map;for(w=G;w<=B;w++){const se=p[w]=S?en(p[w]):Se(p[w]);se.key!=null&&lt.set(se.key,w)}let ot,vt=0;const he=B-G+1;let Kn=!1,ac=0;const Sr=new Array(he);for(w=0;w<he;w++)Sr[w]=0;for(w=H;w<=M;w++){const se=f[w];if(vt>=he){Yt(se,v,E,!0);continue}let be;if(se.key!=null)be=lt.get(se.key);else for(ot=G;ot<=B;ot++)if(Sr[ot-G]===0&&Pr(se,p[ot])){be=ot;break}be===void 0?Yt(se,v,E,!0):(Sr[be-G]=w+1,be>=ac?ac=be:Kn=!0,R(se,p[be],g,null,v,E,O,b,S),vt++)}const lc=Kn?jm(Sr):Jn;for(ot=lc.length-1,w=he-1;w>=0;w--){const se=G+w,be=p[se],cc=se+1<$?p[se+1].el:_;Sr[w]===0?R(null,be,g,cc,v,E,O,b,S):Kn&&(ot<0||w!==lc[ot]?Ae(be,g,cc,2):ot--)}}},Ae=(f,p,g,_,v=null)=>{const{el:E,type:O,transition:b,children:S,shapeFlag:w}=f;if(w&6){Ae(f.component.subTree,p,g,_);return}if(w&128){f.suspense.move(p,g,_);return}if(w&64){O.move(f,p,g,P);return}if(O===oe){r(E,p,g);for(let M=0;M<S.length;M++)Ae(S[M],p,g,_);r(f.anchor,p,g);return}if(O===yo){K(f,p,g);return}if(_!==2&&w&1&&b)if(_===0)b.beforeEnter(E),r(E,p,g),Jt(()=>b.enter(E),v);else{const{leave:M,delayLeave:B,afterLeave:H}=b,G=()=>r(E,p,g),lt=()=>{M(E,()=>{G(),H&&H()})};B?B(E,G,lt):lt()}else r(E,p,g)},Yt=(f,p,g,_=!1,v=!1)=>{const{type:E,props:O,ref:b,children:S,dynamicChildren:w,shapeFlag:$,patchFlag:M,dirs:B}=f;if(b!=null&&ia(b,null,g,f,!0),$&256){p.ctx.deactivate(f);return}const H=$&1&&B,G=!$r(f);let lt;if(G&&(lt=O&&O.onVnodeBeforeUnmount)&&Re(lt,p,f),$&6)Vs(f.component,g,_);else{if($&128){f.suspense.unmount(g,_);return}H&&yn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,g,v,P,_):w&&(E!==oe||M>0&&M&64)?Nt(w,p,g,!1,!0):(E===oe&&M&384||!v&&$&16)&&Nt(S,p,g),_&&zn(f)}(G&&(lt=O&&O.onVnodeUnmounted)||H)&&Jt(()=>{lt&&Re(lt,p,f),H&&yn(f,null,p,"unmounted")},g)},zn=f=>{const{type:p,el:g,anchor:_,transition:v}=f;if(p===oe){Hn(g,_);return}if(p===yo){N(f);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:b}=v,S=()=>O(g,E);b?b(f.el,E,S):S()}else E()},Hn=(f,p)=>{let g;for(;f!==p;)g=d(f),s(f),f=g;s(p)},Vs=(f,p,g)=>{const{bum:_,scope:v,update:E,subTree:O,um:b}=f;_&&fo(_),v.stop(),E&&(E.active=!1,Yt(O,f,p,g)),b&&Jt(b,p),Jt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Nt=(f,p,g,_=!1,v=!1,E=0)=>{for(let O=E;O<f.length;O++)Yt(f[O],p,g,_,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),k=(f,p,g)=>{f==null?p._vnode&&Yt(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),yc(),zh(),p._vnode=f},P={p:R,um:Yt,m:Ae,r:zn,mt:Rr,mc:ue,pc:et,pbc:re,n:y,o:t};let L,nt;return e&&([L,nt]=e(P)),{render:k,hydrate:L,createApp:km(k,L)}}function vn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Um(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cf(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=en(s[i]),a.el=o.el),n||cf(o,a)),a.type===Mi&&(a.el=o.el)}}function jm(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zm=t=>t.__isTeleport,oe=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),yo=Symbol.for("v-stc"),Ur=[];let _e=null;function Ie(t=!1){Ur.push(_e=t?null:[])}function Hm(){Ur.pop(),_e=Ur[Ur.length-1]||null}let Zr=1;function Pc(t){Zr+=t}function uf(t){return t.dynamicChildren=Zr>0?_e||Jn:null,Hm(),Zr>0&&_e&&_e.push(t),t}function Ne(t,e,n,r,s,i){return uf(Z(t,e,n,r,s,i,!0))}function Km(t,e,n,r,s){return uf(ut(t,e,n,r,s,!0))}function ii(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const Ni="__vInternal",hf=({key:t})=>t??null,Ys=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||zt(t)||q(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hf(e),ref:e&&Ys(e),scopeId:ki,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return a?(el(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),Zr>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ut=qm;function qm(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===um)&&(t=ar),ii(t)){const a=lr(t,e,!0);return n&&el(a,n),Zr>0&&!i&&_e&&(a.shapeFlag&6?_e[_e.indexOf(t)]=a:_e.push(a)),a.patchFlag|=-2,a}if(n_(t)&&(t=t.__vccOpts),e){e=Wm(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=za(a)),gt(l)&&(xh(l)&&!z(l)&&(l=Mt({},l)),e.style=ja(l))}const o=Rt(t)?1:hm(t)?128:zm(t)?64:gt(t)?4:q(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function Wm(t){return t?xh(t)||Ni in t?Mt({},t):t:null}function lr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gm(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hf(a),ref:e&&e.ref?n&&s?z(s)?s.concat(Ys(e)):[s,Ys(e)]:Ys(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==oe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rt(t=" ",e=0){return ut(Mi,null,t,e)}function Se(t){return t==null||typeof t=="boolean"?ut(ar):z(t)?ut(oe,null,t.slice()):typeof t=="object"?en(t):ut(Mi,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lr(t)}function el(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),el(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ni in e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),r&64?(n=16,e=[rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=za([e.class,r.class]));else if(s==="style")e.style=ja([e.style,r.style]);else if(Ri(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Re(t,e,n,r=null){ve(t,e,7,[n,r])}const Qm=nf();let Xm=0;function Ym(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qm,i={uid:Xm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(r,s),emitsOptions:Kh(r,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:r.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=im.bind(null,i),t.ce&&t.ce(i),i}let jt=null,nl,qn,Cc="__VUE_INSTANCE_SETTERS__";(qn=Qo()[Cc])||(qn=Qo()[Cc]=[]),qn.push(t=>jt=t),nl=t=>{qn.length>1?qn.forEach(e=>e(t)):qn[0](t)};const cr=t=>{nl(t),t.scope.on()},Pn=()=>{jt&&jt.scope.off(),nl(null)};function ff(t){return t.vnode.shapeFlag&4}let ts=!1;function Jm(t,e=!1){ts=e;const{props:n,children:r}=t.vnode,s=ff(t);xm(t,n,s,e),Lm(t,r);const i=s?Zm(t,e):void 0;return ts=!1,i}function Zm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qa(new Proxy(t.ctx,Rm));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?e_(t):null;cr(t),Er();const i=sn(r,t,0,[t.props,s]);if(wr(),Pn(),gh(i)){if(i.then(Pn,Pn),e)return i.then(o=>{Dc(t,o,e)}).catch(o=>{Oi(o,t,0)});t.asyncDep=i}else Dc(t,i,e)}else df(t,e)}function Dc(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=$h(e)),df(t,n)}let Oc;function df(t,e,n){const r=t.type;if(!t.render){if(!e&&Oc&&!r.render){const s=r.template||Za(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Mt(Mt({isCustomElement:i,delimiters:a},o),l);r.render=Oc(s,c)}}t.render=r.render||Ve}{cr(t),Er();try{Sm(t)}finally{wr(),Pn()}}}function t_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ee(t,"get","$attrs"),e[n]}}))}function e_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return t_(t)},slots:t.slots,emit:t.emit,expose:e}}function rl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($h(Qa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Br)return Br[n](t)},has(e,n){return n in e||n in Br}}))}function n_(t){return q(t)&&"__vccOpts"in t}const ge=(t,e)=>Zg(t,e,ts);function pf(t,e,n){const r=arguments.length;return r===2?gt(e)&&!z(e)?ii(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ii(n)&&(n=[n]),ut(t,e,n))}const r_=Symbol.for("v-scx"),s_=()=>ze(r_),i_="3.3.11",o_="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,Vc=In&&In.createElement("template"),a_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?In.createElementNS(o_,t):In.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vc.innerHTML=r?`<svg>${t}</svg>`:t;const a=Vc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},l_=Symbol("_vtc");function c_(t,e,n){const r=t[l_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const u_=Symbol("_vod");function h_(t,e,n){const r=t.style,s=Rt(n);if(n&&!s){if(e&&!Rt(e))for(const i in e)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),u_ in t&&(r.display=i)}}const kc=/\s*!important$/;function oa(t,e,n){if(z(n))n.forEach(r=>oa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=f_(t,e);kc.test(n)?t.setProperty(vr(r),n.replace(kc,""),"important"):t[r]=n}}const xc=["Webkit","Moz","ms"],vo={};function f_(t,e){const n=vo[e];if(n)return n;let r=ir(e);if(r!=="filter"&&r in t)return vo[e]=r;r=yh(r);for(let s=0;s<xc.length;s++){const i=xc[s]+r;if(i in t)return vo[e]=i}return e}const Mc="http://www.w3.org/1999/xlink";function d_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mc,e.slice(6,e.length)):t.setAttributeNS(Mc,e,n);else{const i=Ag(e);n==null||i&&!vh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function p_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function g_(t,e,n,r){t.addEventListener(e,n,r)}function m_(t,e,n,r){t.removeEventListener(e,n,r)}const Nc=Symbol("_vei");function __(t,e,n,r,s=null){const i=t[Nc]||(t[Nc]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=y_(e);if(r){const c=i[e]=w_(r,s);g_(t,a,c,l)}else o&&(m_(t,a,o,l),i[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function y_(t){let e;if(Lc.test(t)){e={};let r;for(;r=t.match(Lc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let Eo=0;const v_=Promise.resolve(),E_=()=>Eo||(v_.then(()=>Eo=0),Eo=Date.now());function w_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ve(I_(r,n.value),e,5,[r])};return n.value=t,n.attached=E_(),n}function I_(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Fc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,T_=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?c_(t,r,s):e==="style"?h_(t,n,r):Ri(e)?$a(e)||__(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,r,s))?p_(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),d_(t,e,r,s))};function A_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fc(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fc(e)&&Rt(n)?!1:e in t}const b_=Mt({patchProp:T_},a_);let $c;function R_(){return $c||($c=$m(b_))}const S_=(...t)=>{const e=R_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=P_(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function P_(t){return Rt(t)?document.querySelector(t):t}var C_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const D_=Symbol();var Bc;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bc||(Bc={}));function O_(){const t=Rg(!0),e=t.run(()=>Lh({}));let n=[],r=[];const s=Qa({install(i){s._a=i,i.provide(D_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!C_?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const V_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gn=typeof window<"u";function k_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const st=Object.assign;function wo(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ee(s)?s.map(t):t(s)}return n}const jr=()=>{},Ee=Array.isArray,x_=/\/$/,M_=t=>t.replace(x_,"");function Io(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function N_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function L_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ur(e.matched[r],n.matched[s])&&gf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!F_(t[n],e[n]))return!1;return!0}function F_(t,e){return Ee(t)?jc(t,e):Ee(e)?jc(e,t):t===e}function jc(t,e){return Ee(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var es;(function(t){t.pop="pop",t.push="push"})(es||(es={}));var zr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zr||(zr={}));function B_(t){if(!t)if(Gn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),M_(t)}const U_=/^[^#]+#/;function j_(t,e){return t.replace(U_,"#")+e}function z_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Li=()=>({left:window.pageXOffset,top:window.pageYOffset});function H_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=z_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zc(t,e){return(history.state?history.state.position-e:-1)+t}const aa=new Map;function K_(t,e){aa.set(t,e)}function q_(t){const e=aa.get(t);return aa.delete(t),e}let W_=()=>location.protocol+"//"+location.host;function mf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Uc(l,"")}return Uc(n,t)+r+s}function G_(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=mf(t,location),A=n.value,R=e.value;let D=0;if(d){if(n.value=m,e.value=d,o&&o===A){o=null;return}D=R?d.position-R.position:0}else r(m);s.forEach(V=>{V(n.value,A,{delta:D,type:es.pop,direction:D?D>0?zr.forward:zr.back:zr.unknown})})};function l(){o=n.value}function c(d){s.push(d);const m=()=>{const A=s.indexOf(d);A>-1&&s.splice(A,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:Li()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Hc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Li():null}}function Q_(t){const{history:e,location:n}=window,r={value:mf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:W_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){const u=st({},e.state,Hc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=st({},s.value,e.state,{forward:l,scroll:Li()});i(u.current,u,!0);const h=st({},Hc(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function X_(t){t=B_(t);const e=Q_(t),n=G_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=st({location:"",base:t,go:r,createHref:j_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Y_(t){return typeof t=="string"||t&&typeof t=="object"}function _f(t){return typeof t=="string"||typeof t=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yf=Symbol("");var Kc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kc||(Kc={}));function hr(t,e){return st(new Error,{type:t,[yf]:!0},e)}function Fe(t,e){return t instanceof Error&&yf in t&&(e==null||!!(t.type&e))}const qc="[^/]+?",J_={sensitive:!1,strict:!1,start:!0,end:!0},Z_=/[.+*?^${}()[\]/\\]/g;function ty(t,e){const n=st({},J_,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Z_,"\\$&"),m+=40;else if(d.type===1){const{value:A,repeatable:R,optional:D,regexp:V}=d;i.push({name:A,repeatable:R,optional:D});const x=V||qc;if(x!==qc){m+=10;try{new RegExp(`(${x})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+N.message)}}let K=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(K=D&&c.length<2?`(?:/${K})`:"/"+K),D&&(K+="?"),s+=K,m+=20,D&&(m+=-8),R&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",A=i[d-1];h[A.name]=m&&A.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:A,repeatable:R,optional:D}=m,V=A in c?c[A]:"";if(Ee(V)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=Ee(V)?V.join("/"):V;if(!x)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function ey(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ny(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ey(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wc(r))return 1;if(Wc(s))return-1}return s.length-r.length}function Wc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ry={type:0,value:""},sy=/[a-zA-Z0-9_]/;function iy(t){if(!t)return[[]];if(t==="/")return[[ry]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:sy.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function oy(t,e,n){const r=ty(iy(t.path),n),s=st(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ay(t,e){const n=[],r=new Map;e=Xc({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,A=ly(u);A.aliasOf=d&&d.record;const R=Xc(e,u),D=[A];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of K)D.push(st({},A,{components:d?d.record.components:A.components,path:N,aliasOf:d?d.record:A}))}let V,x;for(const K of D){const{path:N}=K;if(h&&N[0]!=="/"){const _t=h.record.path,yt=_t[_t.length-1]==="/"?"":"/";K.path=h.record.path+(N&&yt+N)}if(V=oy(K,h,R),d?d.alias.push(V):(x=x||V,x!==V&&x.alias.push(V),m&&u.name&&!Qc(V)&&o(u.name)),A.children){const _t=A.children;for(let yt=0;yt<_t.length;yt++)i(_t[yt],V,d&&d.children[yt])}d=d||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return x?()=>{o(x)}:jr}function o(u){if(_f(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ny(u,n[h])>=0&&(u.record.path!==n[h].record.path||!vf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Qc(u)&&r.set(u.record.name,u)}function c(u,h){let d,m={},A,R;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw hr(1,{location:u});R=d.record.name,m=st(Gc(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Gc(u.params,d.keys.map(x=>x.name))),A=d.stringify(m)}else if("path"in u)A=u.path,d=n.find(x=>x.re.test(A)),d&&(m=d.parse(A),R=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw hr(1,{location:u,currentLocation:h});R=d.record.name,m=st({},h.params,u.params),A=d.stringify(m)}const D=[];let V=d;for(;V;)D.unshift(V.record),V=V.parent;return{name:R,path:A,params:m,matched:D,meta:uy(D)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Gc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ly(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uy(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Xc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vf(t,e){return e.children.some(n=>n===t||vf(t,n))}const Ef=/#/g,hy=/&/g,fy=/\//g,dy=/=/g,py=/\?/g,wf=/\+/g,gy=/%5B/g,my=/%5D/g,If=/%5E/g,_y=/%60/g,Tf=/%7B/g,yy=/%7C/g,Af=/%7D/g,vy=/%20/g;function sl(t){return encodeURI(""+t).replace(yy,"|").replace(gy,"[").replace(my,"]")}function Ey(t){return sl(t).replace(Tf,"{").replace(Af,"}").replace(If,"^")}function la(t){return sl(t).replace(wf,"%2B").replace(vy,"+").replace(Ef,"%23").replace(hy,"%26").replace(_y,"`").replace(Tf,"{").replace(Af,"}").replace(If,"^")}function wy(t){return la(t).replace(dy,"%3D")}function Iy(t){return sl(t).replace(Ef,"%23").replace(py,"%3F")}function Ty(t){return t==null?"":Iy(t).replace(fy,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ay(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(wf," "),o=i.indexOf("="),a=oi(o<0?i:i.slice(0,o)),l=o<0?null:oi(i.slice(o+1));if(a in e){let c=e[a];Ee(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yc(t){let e="";for(let n in t){const r=t[n];if(n=wy(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ee(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function by(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ee(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ry=Symbol(""),Jc=Symbol(""),il=Symbol(""),bf=Symbol(""),ca=Symbol("");function Cr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Y_(h)?a(hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function To(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sy(a)){const c=(a.__vccOpts||a)[e];c&&s.push(nn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=k_(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&nn(d,n,r,i,o)()}))}}return s}function Sy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zc(t){const e=ze(il),n=ze(bf),r=ge(()=>e.resolve(er(t.to))),s=ge(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ur.bind(null,u));if(d>-1)return d;const m=tu(l[c-2]);return c>1&&tu(u)===m&&h[h.length-1].path!==m?h.findIndex(ur.bind(null,l[c-2])):d}),i=ge(()=>s.value>-1&&Oy(n.params,r.value.params)),o=ge(()=>s.value>-1&&s.value===n.matched.length-1&&gf(n.params,r.value.params));function a(l={}){return Dy(l)?e[er(t.replace)?"replace":"push"](er(t.to)).catch(jr):Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Py=Xh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zc,setup(t,{slots:e}){const n=Di(Zc(t)),{options:r}=ze(il),s=ge(()=>({[eu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Cy=Py;function Dy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Oy(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ee(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eu=(t,e,n)=>t??e??n,Vy=Xh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ze(ca),s=ge(()=>t.route||r.value),i=ze(Jc,0),o=ge(()=>{let c=er(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ge(()=>s.value.matched[o.value]);Xs(Jc,ge(()=>o.value+1)),Xs(Ry,a),Xs(ca,s);const l=Lh();return Qs(()=>[l.value,a.value,t.name],([c,u,h],[d,m,A])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!ur(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return nu(n.default,{Component:d,route:c});const m=h.props[u],A=m?m===!0?c.params:typeof m=="function"?m(c):m:null,D=pf(d,st({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return nu(n.default,{Component:D,route:c})||D}}});function nu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ky=Vy;function xy(t){const e=ay(t.routes,t),n=t.parseQuery||Ay,r=t.stringifyQuery||Yc,s=t.history,i=Cr(),o=Cr(),a=Cr(),l=Qg(tn);let c=tn;Gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wo.bind(null,y=>""+y),h=wo.bind(null,Ty),d=wo.bind(null,oi);function m(y,k){let P,L;return _f(y)?(P=e.getRecordMatcher(y),L=k):L=y,e.addRoute(L,P)}function A(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function R(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function V(y,k){if(k=st({},k||l.value),typeof y=="string"){const g=Io(n,y,k.path),_=e.resolve({path:g.path},k),v=s.createHref(g.fullPath);return st(g,_,{params:d(_.params),hash:oi(g.hash),redirectedFrom:void 0,href:v})}let P;if("path"in y)P=st({},y,{path:Io(n,y.path,k.path).path});else{const g=st({},y.params);for(const _ in g)g[_]==null&&delete g[_];P=st({},y,{params:h(g)}),k.params=h(k.params)}const L=e.resolve(P,k),nt=y.hash||"";L.params=u(d(L.params));const f=N_(r,st({},y,{hash:Ey(nt),path:L.path})),p=s.createHref(f);return st({fullPath:f,hash:nt,query:r===Yc?by(y.query):y.query||{}},L,{redirectedFrom:void 0,href:p})}function x(y){return typeof y=="string"?Io(n,y,l.value.path):st({},y)}function K(y,k){if(c!==y)return hr(8,{from:k,to:y})}function N(y){return Xt(y)}function _t(y){return N(st(x(y),{replace:!0}))}function yt(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:P}=k;let L=typeof P=="function"?P(y):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),st({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function Xt(y,k){const P=c=V(y),L=l.value,nt=y.state,f=y.force,p=y.replace===!0,g=yt(P);if(g)return Xt(st(x(g),{state:typeof g=="object"?st({},nt,g.state):nt,force:f,replace:p}),k||P);const _=P;_.redirectedFrom=k;let v;return!f&&L_(r,L,P)&&(v=hr(16,{to:_,from:L}),Ae(L,L,!0,!1)),(v?Promise.resolve(v):re(_,L)).catch(E=>Fe(E)?Fe(E,2)?E:Je(E):et(E,_,L)).then(E=>{if(E){if(Fe(E,2))return Xt(st({replace:p},x(E.to),{state:typeof E.to=="object"?st({},nt,E.to.state):nt,force:f}),k||_)}else E=_n(_,L,!0,p,nt);return Ye(_,L,E),E})}function ue(y,k){const P=K(y,k);return P?Promise.reject(P):Promise.resolve()}function Xe(y){const k=Hn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function re(y,k){let P;const[L,nt,f]=My(y,k);P=To(L.reverse(),"beforeRouteLeave",y,k);for(const g of L)g.leaveGuards.forEach(_=>{P.push(nn(_,y,k))});const p=ue.bind(null,y,k);return P.push(p),Nt(P).then(()=>{P=[];for(const g of i.list())P.push(nn(g,y,k));return P.push(p),Nt(P)}).then(()=>{P=To(nt,"beforeRouteUpdate",y,k);for(const g of nt)g.updateGuards.forEach(_=>{P.push(nn(_,y,k))});return P.push(p),Nt(P)}).then(()=>{P=[];for(const g of f)if(g.beforeEnter)if(Ee(g.beforeEnter))for(const _ of g.beforeEnter)P.push(nn(_,y,k));else P.push(nn(g.beforeEnter,y,k));return P.push(p),Nt(P)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),P=To(f,"beforeRouteEnter",y,k),P.push(p),Nt(P))).then(()=>{P=[];for(const g of o.list())P.push(nn(g,y,k));return P.push(p),Nt(P)}).catch(g=>Fe(g,8)?g:Promise.reject(g))}function Ye(y,k,P){a.list().forEach(L=>Xe(()=>L(y,k,P)))}function _n(y,k,P,L,nt){const f=K(y,k);if(f)return f;const p=k===tn,g=Gn?history.state:{};P&&(L||p?s.replace(y.fullPath,st({scroll:p&&g&&g.scroll},nt)):s.push(y.fullPath,nt)),l.value=y,Ae(y,k,P,p),Je()}let Te;function Rr(){Te||(Te=s.listen((y,k,P)=>{if(!Vs.listening)return;const L=V(y),nt=yt(L);if(nt){Xt(st(nt,{replace:!0}),L).catch(jr);return}c=L;const f=l.value;Gn&&K_(zc(f.fullPath,P.delta),Li()),re(L,f).catch(p=>Fe(p,12)?p:Fe(p,2)?(Xt(p.to,L).then(g=>{Fe(g,20)&&!P.delta&&P.type===es.pop&&s.go(-1,!1)}).catch(jr),Promise.reject()):(P.delta&&s.go(-P.delta,!1),et(p,L,f))).then(p=>{p=p||_n(L,f,!1),p&&(P.delta&&!Fe(p,8)?s.go(-P.delta,!1):P.type===es.pop&&Fe(p,20)&&s.go(-1,!1)),Ye(L,f,p)}).catch(jr)}))}let jn=Cr(),It=Cr(),at;function et(y,k,P){Je(y);const L=It.list();return L.length?L.forEach(nt=>nt(y,k,P)):console.error(y),Promise.reject(y)}function Le(){return at&&l.value!==tn?Promise.resolve():new Promise((y,k)=>{jn.add([y,k])})}function Je(y){return at||(at=!y,Rr(),jn.list().forEach(([k,P])=>y?P(y):k()),jn.reset()),y}function Ae(y,k,P,L){const{scrollBehavior:nt}=t;if(!Gn||!nt)return Promise.resolve();const f=!P&&q_(zc(y.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Uh().then(()=>nt(y,k,f)).then(p=>p&&H_(p)).catch(p=>et(p,y,k))}const Yt=y=>s.go(y);let zn;const Hn=new Set,Vs={currentRoute:l,listening:!0,addRoute:m,removeRoute:A,hasRoute:D,getRoutes:R,resolve:V,options:t,push:N,replace:_t,go:Yt,back:()=>Yt(-1),forward:()=>Yt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:It.add,isReady:Le,install(y){const k=this;y.component("RouterLink",Cy),y.component("RouterView",ky),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>er(l)}),Gn&&!zn&&l.value===tn&&(zn=!0,N(s.location).catch(nt=>{}));const P={};for(const nt in tn)Object.defineProperty(P,nt,{get:()=>l.value[nt],enumerable:!0});y.provide(il,k),y.provide(bf,Vh(P)),y.provide(ca,l);const L=y.unmount;Hn.add(y),y.unmount=function(){Hn.delete(y),Hn.size<1&&(c=tn,Te&&Te(),Te=null,l.value=tn,zn=!1,at=!1),L()}}};function Nt(y){return y.reduce((k,P)=>k.then(()=>Xe(P)),Promise.resolve())}return Vs}function My(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ur(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ur(c,l))||s.push(l))}return[n,r,s]}const dn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ny=t=>(qh("data-v-5ea04957"),t=t(),Wh(),t),Ly={class:"greetings"},Fy={class:"green"},$y=Ny(()=>Z("h3",null," You’ve successfully created a FCM EXample ",-1)),By={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(Ie(),Ne("div",Ly,[Z("h1",Fy,bg(t.msg),1),$y]))}},Uy=dn(By,[["__scopeId","data-v-5ea04957"]]);var ru={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new zy;const d=i<<2|a>>4;if(r.push(d),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const A=c<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hy=function(t){const e=Rf(t);return Sf.encodeByteArray(e,!0)},ai=function(t){return Hy(t).replace(/\./g,"")},Ky=function(t){try{return Sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=()=>qy().__FIREBASE_DEFAULTS__,Gy=()=>{if(typeof process>"u"||typeof ru>"u")return;const t=ru.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ky(t[1]);return e&&JSON.parse(e)},Pf=()=>{try{return Wy()||Gy()||Qy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xy=t=>{var e,n;return(n=(e=Pf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yy=t=>{const e=Xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cf=()=>{var t;return(t=Pf())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ai(JSON.stringify(n)),ai(JSON.stringify(o)),a].join(".")}function tv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ol(){try{return typeof indexedDB=="object"}catch{return!1}}function al(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Df(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ev,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pn(s,a,r)}}function nv(t,e){return t.replace(rv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rv=/\{\$([^}]+)}/g;function ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(su(i)&&su(o)){if(!ua(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function su(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=1e3,iv=2,ov=4*60*60*1e3,av=.5;function iu(t,e=sv,n=iv){const r=e*Math.pow(n,t),s=Math.round(av*r*(Math.random()-.5)*2);return Math.min(ov,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uv(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cv(t){return t===En?void 0:t}function uv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const fv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},dv=J.INFO,pv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},gv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=dv,this._logHandler=gv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const mv=(t,e)=>e.some(n=>t instanceof n);let ou,au;function _v(){return ou||(ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yv(){return au||(au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Of=new WeakMap,ha=new WeakMap,Vf=new WeakMap,Ao=new WeakMap,cl=new WeakMap;function vv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(He(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Of.set(n,t)}).catch(()=>{}),cl.set(e,t),e}function Ev(t){if(ha.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ha.set(t,e)}let fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return He(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wv(t){fa=t(fa)}function Iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bo(this),e,...n);return Vf.set(r,e.sort?e.sort():[e]),He(r)}:yv().includes(t)?function(...e){return t.apply(bo(this),e),He(Of.get(this))}:function(...e){return He(t.apply(bo(this),e))}}function Tv(t){return typeof t=="function"?Iv(t):(t instanceof IDBTransaction&&Ev(t),mv(t,_v())?new Proxy(t,fa):t)}function He(t){if(t instanceof IDBRequest)return vv(t);if(Ao.has(t))return Ao.get(t);const e=Tv(t);return e!==t&&(Ao.set(t,e),cl.set(e,t)),e}const bo=t=>cl.get(t);function ul(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=He(o);return r&&o.addEventListener("upgradeneeded",l=>{r(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Ro(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),He(n).then(()=>{})}const Av=["get","getKey","getAll","getAllKeys","count"],bv=["put","add","delete","clear"],So=new Map;function lu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Av.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return So.set(e,i),i}wv(t=>({...t,get:(e,n,r)=>lu(e,n)||t.get(e,n,r),has:(e,n)=>!!lu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",cu="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new ll("@firebase/app"),Pv="@firebase/app-compat",Cv="@firebase/analytics-compat",Dv="@firebase/analytics",Ov="@firebase/app-check-compat",Vv="@firebase/app-check",kv="@firebase/auth",xv="@firebase/auth-compat",Mv="@firebase/database",Nv="@firebase/database-compat",Lv="@firebase/functions",Fv="@firebase/functions-compat",$v="@firebase/installations",Bv="@firebase/installations-compat",Uv="@firebase/messaging",jv="@firebase/messaging-compat",zv="@firebase/performance",Hv="@firebase/performance-compat",Kv="@firebase/remote-config",qv="@firebase/remote-config-compat",Wv="@firebase/storage",Gv="@firebase/storage-compat",Qv="@firebase/firestore",Xv="@firebase/firestore-compat",Yv="firebase",Jv="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]",Zv={[da]:"fire-core",[Pv]:"fire-core-compat",[Dv]:"fire-analytics",[Cv]:"fire-analytics-compat",[Vv]:"fire-app-check",[Ov]:"fire-app-check-compat",[kv]:"fire-auth",[xv]:"fire-auth-compat",[Mv]:"fire-rtdb",[Nv]:"fire-rtdb-compat",[Lv]:"fire-fn",[Fv]:"fire-fn-compat",[$v]:"fire-iid",[Bv]:"fire-iid-compat",[Uv]:"fire-fcm",[jv]:"fire-fcm-compat",[zv]:"fire-perf",[Hv]:"fire-perf-compat",[Kv]:"fire-rc",[qv]:"fire-rc-compat",[Wv]:"fire-gcs",[Gv]:"fire-gcs-compat",[Qv]:"fire-fst",[Xv]:"fire-fst-compat","fire-js":"fire-js",[Yv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map,ga=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ke(t){const e=t.name;if(ga.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;ga.set(e,t);for(const n of li.values())tE(n,t);return!0}function Fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new vs("app","Firebase",eE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=Jv;function kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=Cf()),!n)throw on.create("no-options");const i=li.get(s);if(i){if(ua(n,i.options)&&ua(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new hv(s);for(const l of ga.values())o.addComponent(l);const a=new nE(n,r,o);return li.set(s,a),a}function xf(t=pa){const e=li.get(t);if(!e&&t===pa&&Cf())return kf();if(!e)throw on.create("no-app",{appName:t});return e}function le(t,e,n){var r;let s=(r=Zv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}ke(new we(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebase-heartbeat-database",iE=1,ns="firebase-heartbeat-store";let Po=null;function Mf(){return Po||(Po=ul(sE,iE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Po}async function oE(t){try{return await(await Mf()).transaction(ns).objectStore(ns).get(Nf(t))}catch(e){if(e instanceof pn)kn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function uu(t,e){try{const r=(await Mf()).transaction(ns,"readwrite");await r.objectStore(ns).put(e,Nf(t)),await r.done}catch(n){if(n instanceof pn)kn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Nf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1024,lE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hu(),{heartbeatsToSend:r,unsentEntries:s}=uE(this._heartbeatsCache.heartbeats),i=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hu(){return new Date().toISOString().substring(0,10)}function uE(t,e=aE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ol()?al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fu(t){return ai(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){ke(new we("platform-logger",e=>new Rv(e),"PRIVATE")),ke(new we("heartbeat",e=>new cE(e),"PRIVATE")),le(da,cu,t),le(da,cu,"esm2017"),le("fire-js","")}fE("");var dE="firebase",pE="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(dE,pE,"app");const gE=(t,e)=>e.some(n=>t instanceof n);let du,pu;function mE(){return du||(du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _E(){return pu||(pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,ma=new WeakMap,Ff=new WeakMap,Co=new WeakMap,hl=new WeakMap;function yE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(an(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lf.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function vE(t){if(ma.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ma.set(t,e)}let _a={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ma.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ff.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EE(t){_a=t(_a)}function wE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Do(this),e,...n);return Ff.set(r,e.sort?e.sort():[e]),an(r)}:_E().includes(t)?function(...e){return t.apply(Do(this),e),an(Lf.get(this))}:function(...e){return an(t.apply(Do(this),e))}}function IE(t){return typeof t=="function"?wE(t):(t instanceof IDBTransaction&&vE(t),gE(t,mE())?new Proxy(t,_a):t)}function an(t){if(t instanceof IDBRequest)return yE(t);if(Co.has(t))return Co.get(t);const e=IE(t);return e!==t&&(Co.set(t,e),hl.set(e,t)),e}const Do=t=>hl.get(t);function TE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",l=>{r(an(o.result),l.oldVersion,l.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const AE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],Oo=new Map;function gu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Oo.set(e,i),i}EE(t=>({...t,get:(e,n,r)=>gu(e,n)||t.get(e,n,r),has:(e,n)=>!!gu(e,n)||t.has(e,n)}));const $f="@firebase/installations",fl="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1e4,Uf=`w:${fl}`,jf="FIS_v2",RE="https://firebaseinstallations.googleapis.com/v1",SE=60*60*1e3,PE="installations",CE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xn=new vs(PE,CE,DE);function zf(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf({projectId:t}){return`${RE}/projects/${t}/installations`}function Kf(t){return{token:t.token,requestStatus:2,expiresIn:VE(t.expiresIn),creationTime:Date.now()}}async function qf(t,e){const r=(await e.json()).error;return xn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OE(t,{refreshToken:e}){const n=Wf(t);return n.append("Authorization",kE(e)),n}async function Gf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function VE(t){return Number(t.replace("s","000"))}function kE(t){return`${jf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hf(t),s=Wf(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:jf,appId:t.appId,sdkVersion:Uf},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Gf(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Kf(c.authToken)}}else throw await qf("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^[cdef][\w-]{21}$/,ya="";function LE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FE(t);return NE.test(n)?n:ya}catch{return ya}}function FE(t){return ME(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function Yf(t,e){const n=$i(t);Jf(n,e),$E(n,e)}function Jf(t,e){const n=Xf.get(t);if(n)for(const r of n)r(e)}function $E(t,e){const n=BE();n&&n.postMessage({key:t,fid:e}),UE()}let Tn=null;function BE(){return!Tn&&"BroadcastChannel"in self&&(Tn=new BroadcastChannel("[Firebase] FID Change"),Tn.onmessage=t=>{Jf(t.data.key,t.data.fid)}),Tn}function UE(){Xf.size===0&&Tn&&(Tn.close(),Tn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firebase-installations-database",zE=1,Mn="firebase-installations-store";let Vo=null;function dl(){return Vo||(Vo=TE(jE,zE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mn)}}})),Vo}async function ci(t,e){const n=$i(t),s=(await dl()).transaction(Mn,"readwrite"),i=s.objectStore(Mn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Yf(t,e.fid),e}async function Zf(t){const e=$i(t),r=(await dl()).transaction(Mn,"readwrite");await r.objectStore(Mn).delete(e),await r.done}async function Bi(t,e){const n=$i(t),s=(await dl()).transaction(Mn,"readwrite"),i=s.objectStore(Mn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Yf(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){let e;const n=await Bi(t.appConfig,r=>{const s=HE(r),i=KE(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ya?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HE(t){const e=t||{fid:LE(),registrationStatus:0};return td(e)}function KE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qE(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WE(t)}:{installationEntry:e}}async function qE(t,e){try{const n=await xE(t,e);return ci(t.appConfig,n)}catch(n){throw zf(n)&&n.customData.serverCode===409?await Zf(t.appConfig):await ci(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WE(t){let e=await mu(t.appConfig);for(;e.registrationStatus===1;)await Qf(100),e=await mu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pl(t);return r||n}return e}function mu(t){return Bi(t,e=>{if(!e)throw xn.create("installation-not-found");return td(e)})}function td(t){return GE(t)?{fid:t.fid,registrationStatus:0}:t}function GE(t){return t.registrationStatus===1&&t.registrationTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE({appConfig:t,heartbeatServiceProvider:e},n){const r=XE(t,n),s=OE(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Uf,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Gf(()=>fetch(r,a));if(l.ok){const c=await l.json();return Kf(c)}else throw await qf("Generate Auth Token",l)}function XE(t,{fid:e}){return`${Hf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t,e=!1){let n;const r=await Bi(t.appConfig,i=>{if(!ed(i))throw xn.create("not-registered");const o=i.authToken;if(!e&&ZE(o))return i;if(o.requestStatus===1)return n=YE(t,e),i;{if(!navigator.onLine)throw xn.create("app-offline");const a=e0(i);return n=JE(t,a),a}});return n?await n:r.authToken}async function YE(t,e){let n=await _u(t.appConfig);for(;n.authToken.requestStatus===1;)await Qf(100),n=await _u(t.appConfig);const r=n.authToken;return r.requestStatus===0?gl(t,e):r}function _u(t){return Bi(t,e=>{if(!ed(e))throw xn.create("not-registered");const n=e.authToken;return n0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JE(t,e){try{const n=await QE(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ci(t.appConfig,r),n}catch(n){if(zf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zf(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ci(t.appConfig,r)}throw n}}function ed(t){return t!==void 0&&t.registrationStatus===2}function ZE(t){return t.requestStatus===2&&!t0(t)}function t0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SE}function e0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function n0(t){return t.requestStatus===1&&t.requestTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t){const e=t,{installationEntry:n,registrationPromise:r}=await pl(e);return r?r.catch(console.error):gl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e=!1){const n=t;return await i0(n),(await gl(n,e)).token}async function i0(t){const{registrationPromise:e}=await pl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){if(!t||!t.options)throw ko("App Configuration");if(!t.name)throw ko("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ko(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ko(t){return xn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="installations",a0="installations-internal",l0=t=>{const e=t.getProvider("app").getImmediate(),n=o0(e),r=Fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},c0=t=>{const e=t.getProvider("app").getImmediate(),n=Fi(e,nd).getImmediate();return{getId:()=>r0(n),getToken:s=>s0(n,s)}};function u0(){ke(new we(nd,l0,"PUBLIC")),ke(new we(a0,c0,"PRIVATE"))}u0();le($f,fl);le($f,fl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="analytics",h0="firebase_id",f0="origin",d0=60*1e3,p0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ml="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new ll("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new vs("analytics","Analytics",g0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){if(!t.startsWith(ml)){const e=ce.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function rd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function y0(t,e){const n=_0("firebase-js-sdk-policy",{createScriptURL:m0}),r=document.createElement("script"),s=`${ml}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function v0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function E0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await rd(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){te.error(a)}t("config",s,i)}async function w0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await rd(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){te.error(i)}}function I0(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await w0(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await E0(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){te.error(a)}}return s}function T0(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=I0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function A0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ml)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=30,R0=1e3;class S0{constructor(e={},n=R0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sd=new S0;function P0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function C0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:P0(r)},i=p0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function D0(t,e=sd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw ce.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ce.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new k0;return setTimeout(async()=>{a.abort()},n!==void 0?n:d0),id({appId:r,apiKey:s,measurementId:i},o,a,e)}async function id(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=sd){var i;const{appId:o,measurementId:a}=t;try{await O0(r,e)}catch(l){if(a)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await C0(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!V0(c)){if(s.deleteThrottleMetadata(o),a)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?iu(n,s.intervalMillis,b0):iu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),te.debug(`Calling attemptFetch again in ${u} millis`),id(t,h,r,s)}}function O0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function V0(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class k0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function x0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(){if(ol())try{await al()}catch(t){return te.warn(ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return te.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function N0(t,e,n,r,s,i,o){var a;const l=D0(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>te.error(m)),e.push(l);const c=M0().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([l,c]);A0(i)||y0(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[f0]="firebase",d.update=!0,h!=null&&(d[h0]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.app=e}_delete(){return delete Hr[this.app.options.appId],Promise.resolve()}}let Hr={},vu=[];const Eu={};let xo="dataLayer",F0="gtag",wu,od,Iu=!1;function $0(){const t=[];if(tv()&&t.push("This is a browser extension environment."),Df()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function B0(t,e,n){$0();const r=t.options.appId;if(!r)throw ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(Hr[r]!=null)throw ce.create("already-exists",{id:r});if(!Iu){v0(xo);const{wrappedGtag:i,gtagCore:o}=T0(Hr,vu,Eu,xo,F0);od=i,wu=o,Iu=!0}return Hr[r]=N0(t,vu,Eu,e,wu,xo,n),new L0(t)}function U0(t,e,n,r){t=cn(t),x0(od,Hr[t.app.options.appId],e,n,r).catch(s=>te.error(s))}const Tu="@firebase/analytics",Au="0.10.0";function j0(){ke(new we(yu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return B0(r,s,n)},"PUBLIC")),ke(new we("analytics-internal",t,"PRIVATE")),le(Tu,Au),le(Tu,Au,"esm2017");function t(e){try{const n=e.getProvider(yu).getImmediate();return{logEvent:(r,s,i)=>U0(n,r,s,i)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}j0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="/firebase-messaging-sw.js",H0="/firebase-cloud-messaging-push-scope",ad="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",K0="https://fcmregistrations.googleapis.com/v1",ld="google.c.a.c_id",q0="google.c.a.c_l",W0="google.c.a.ts",G0="google.c.a.e";var bu;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(bu||(bu={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var rs;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(rs||(rs={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Q0(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="fcm_token_details_db",X0=5,Ru="fcm_token_object_Store";async function Y0(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Mo))return null;let e=null;return(await ul(Mo,X0,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(Ru))return;const l=o.objectStore(Ru),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(s===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Be(u.vapidKey)}}}else if(s===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Be(u.auth),p256dh:Be(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Be(u.vapidKey)}}}else if(s===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Be(u.auth),p256dh:Be(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Be(u.vapidKey)}}}}}})).close(),await Ro(Mo),await Ro("fcm_vapid_details_db"),await Ro("undefined"),J0(e)?e:null}function J0(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-messaging-database",tw=1,Nn="firebase-messaging-store";let No=null;function _l(){return No||(No=ul(Z0,tw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}})),No}async function cd(t){const e=vl(t),r=await(await _l()).transaction(Nn).objectStore(Nn).get(e);if(r)return r;{const s=await Y0(t.appConfig.senderId);if(s)return await yl(t,s),s}}async function yl(t,e){const n=vl(t),s=(await _l()).transaction(Nn,"readwrite");return await s.objectStore(Nn).put(e,n),await s.done,e}async function ew(t){const e=vl(t),r=(await _l()).transaction(Nn,"readwrite");await r.objectStore(Nn).delete(e),await r.done}function vl({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ht=new vs("messaging","Messaging",nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e){const n=await wl(t),r=hd(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(El(t.appConfig),s)).json()}catch(o){throw Ht.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ht.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Ht.create("token-subscribe-no-token");return i.token}async function sw(t,e){const n=await wl(t),r=hd(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${El(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Ht.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ht.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Ht.create("token-update-no-token");return i.token}async function ud(t,e){const r={method:"DELETE",headers:await wl(t)};try{const i=await(await fetch(`${El(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Ht.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Ht.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function El({projectId:t}){return`${K0}/projects/${t}/registrations`}async function wl({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function hd({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==ad&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=7*24*60*60*1e3;async function ow(t){const e=await cw(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Be(e.getKey("auth")),p256dh:Be(e.getKey("p256dh"))},r=await cd(t.firebaseDependencies);if(r){if(uw(r.subscriptionOptions,n))return Date.now()>=r.createTime+iw?lw(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ud(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Su(t.firebaseDependencies,n)}else return Su(t.firebaseDependencies,n)}async function aw(t){const e=await cd(t.firebaseDependencies);e&&(await ud(t.firebaseDependencies,e.token),await ew(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function lw(t,e){try{const n=await sw(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await yl(t.firebaseDependencies,r),n}catch(n){throw await aw(t),n}}async function Su(t,e){const r={token:await rw(t,e),createTime:Date.now(),subscriptionOptions:e};return await yl(t,r),r.token}async function cw(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Q0(e)})}function uw(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return hw(e,t),fw(e,t),dw(e,t),e}function hw(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function fw(t,e){e.data&&(t.data=e.data)}function dw(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){return typeof t=="object"&&!!t&&ld in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fd("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");fd("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function fd(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){if(!t||!t.options)throw Lo("App Configuration Object");if(!t.name)throw Lo("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Lo(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Lo(t){return Ht.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=gw(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t){try{t.swRegistration=await navigator.serviceWorker.register(z0,{scope:H0}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ht.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e){if(!e&&!t.swRegistration&&await _w(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ht.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ad)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t,e){if(!navigator)throw Ht.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ht.create("permission-blocked");return await vw(t,e==null?void 0:e.vapidKey),await yw(t,e==null?void 0:e.serviceWorkerRegistration),ow(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e,n){const r=ww(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ld],message_name:n[q0],message_time:n[W0],message_device_time:Math.floor(Date.now()/1e3)})}function ww(t){switch(t){case rs.NOTIFICATION_CLICKED:return"notification_open";case rs.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===rs.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Pu(n)):t.onMessageHandler.next(Pu(n)));const r=n.data;pw(r)&&r[G0]==="1"&&await Ew(t,n.messageType,r)}const Cu="@firebase/messaging",Du="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=t=>{const e=new mw(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Iw(e,n)),e},Aw=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>dd(e,r)}};function bw(){ke(new we("messaging",Tw,"PUBLIC")),ke(new we("messaging-internal",Aw,"PRIVATE")),le(Cu,Du),le(Cu,Du,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(){try{await al()}catch{return!1}return typeof window<"u"&&ol()&&Df()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){if(!navigator)throw Ht.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t=xf()){return Rw().then(e=>{if(!e)throw Ht.create("unsupported-browser")},e=>{throw Ht.create("indexed-db-unsupported")}),Fi(cn(t),"messaging").getImmediate()}async function Cw(t,e){return t=cn(t),dd(t,e)}function Dw(t,e){return t=cn(t),Sw(t,e)}bw();var Ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Il=Il||{},U=Ow||self;function Ui(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Es(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vw(t){return Object.prototype.hasOwnProperty.call(t,Fo)&&t[Fo]||(t[Fo]=++kw)}var Fo="closure_uid_"+(1e9*Math.random()>>>0),kw=0;function xw(t,e,n){return t.call.apply(t.bind,arguments)}function Mw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Kt=xw:Kt=Mw,Kt.apply(null,arguments)}function $s(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function gn(){this.s=this.s,this.o=this.o}var Nw=0;gn.prototype.s=!1;gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nw!=0)&&Vw(this)};gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ou(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ui(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function qt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qt.prototype.h=function(){this.defaultPrevented=!0};var Lw=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};U.addEventListener("test",n,e),U.removeEventListener("test",n,e)}catch{}return t}();function ss(t){return/^[\s\xa0]*$/.test(t)}function ji(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Ce(t){return ji().indexOf(t)!=-1}function Al(t){return Al[" "](t),t}Al[" "]=function(){};function Fw(t,e){var n=D1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $w=Ce("Opera"),fr=Ce("Trident")||Ce("MSIE"),gd=Ce("Edge"),va=gd||fr,md=Ce("Gecko")&&!(ji().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge"))&&!(Ce("Trident")||Ce("MSIE"))&&!Ce("Edge"),Bw=ji().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge");function _d(){var t=U.document;return t?t.documentMode:void 0}var Ea;t:{var $o="",Bo=function(){var t=ji();if(md)return/rv:([^\);]+)(\)|;)/.exec(t);if(gd)return/Edge\/([\d\.]+)/.exec(t);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Bw)return/WebKit\/(\S+)/.exec(t);if($w)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bo&&($o=Bo?Bo[1]:""),fr){var Uo=_d();if(Uo!=null&&Uo>parseFloat($o)){Ea=String(Uo);break t}}Ea=$o}var wa;if(U.document&&fr){var Vu=_d();wa=Vu||parseInt(Ea,10)||void 0}else wa=void 0;var Uw=wa;function is(t,e){if(qt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(md){t:{try{Al(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&is.$.h.call(this)}}Ct(is,qt);var jw={2:"touch",3:"pen",4:"mouse"};is.prototype.h=function(){is.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ws="closure_listenable_"+(1e6*Math.random()|0),zw=0;function Hw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++zw,this.fa=this.ia=!1}function zi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Kw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yd(t){const e={};for(const n in t)e[n]=t[n];return e}const ku="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ku.length;i++)n=ku[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hi(t){this.src=t,this.g={},this.h=0}Hi.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ta(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Hw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ia(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=pd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(zi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ta(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Rl="closure_lm_"+(1e6*Math.random()|0),jo={};function Ed(t,e,n,r,s){if(r&&r.once)return Id(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ed(t,e[i],n,r,s);return null}return n=Cl(n),t&&t[ws]?t.O(e,n,Es(r)?!!r.capture:!!r,s):wd(t,e,n,!1,r,s)}function wd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Es(s)?!!s.capture:!!s,a=Pl(t);if(a||(t[Rl]=a=new Hi(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=qw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Lw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ad(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qw(){function t(n){return e.call(t.src,t.listener,n)}const e=Ww;return t}function Id(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Id(t,e[i],n,r,s);return null}return n=Cl(n),t&&t[ws]?t.P(e,n,Es(r)?!!r.capture:!!r,s):wd(t,e,n,!0,r,s)}function Td(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Td(t,e[i],n,r,s);else r=Es(r)?!!r.capture:!!r,n=Cl(n),t&&t[ws]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ta(i,n,r,s),-1<n&&(zi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ta(e,n,r,s)),(n=-1<t?e[t]:null)&&Sl(n))}function Sl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ws])Ia(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ad(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pl(e))?(Ia(n,t),n.h==0&&(n.src=null,e[Rl]=null)):zi(t)}}}function Ad(t){return t in jo?jo[t]:jo[t]="on"+t}function Ww(t,e){if(t.fa)t=!0;else{e=new is(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sl(t),t=n.call(r,e)}return t}function Pl(t){return t=t[Rl],t instanceof Hi?t:null}var zo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cl(t){return typeof t=="function"?t:(t[zo]||(t[zo]=function(e){return t.handleEvent(e)}),t[zo])}function St(){gn.call(this),this.i=new Hi(this),this.S=this,this.J=null}Ct(St,gn);St.prototype[ws]=!0;St.prototype.removeEventListener=function(t,e,n,r){Td(this,t,e,n,r)};function xt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new qt(e,t);else if(e instanceof qt)e.target=e.target||t;else{var s=e;e=new qt(r,t),vd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Bs(o,r,!0,e)&&s}if(o=e.g=t,s=Bs(o,r,!0,e)&&s,s=Bs(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Bs(o,r,!1,e)&&s}St.prototype.N=function(){if(St.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zi(n[r]);delete t.g[e],t.h--}}this.J=null};St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};St.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ia(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Dl=U.JSON.stringify;class Gw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Qw(){var t=Ol;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xw{constructor(){this.h=this.g=null}add(e,n){const r=bd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bd=new Gw(()=>new Yw,t=>t.reset());class Yw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jw(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Zw(t){U.setTimeout(()=>{throw t},0)}let os,as=!1,Ol=new Xw,Rd=()=>{const t=U.Promise.resolve(void 0);os=()=>{t.then(t1)}};var t1=()=>{for(var t;t=Qw();){try{t.h.call(t.g)}catch(n){Zw(n)}var e=bd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}as=!1};function Ki(t,e){St.call(this),this.h=t||1,this.g=e||U,this.j=Kt(this.qb,this),this.l=Date.now()}Ct(Ki,St);C=Ki.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(Vl(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){Ki.$.N.call(this),Vl(this),delete this.g};function kl(t,e,n){if(typeof t=="function")n&&(t=Kt(t,n));else if(t&&typeof t.handleEvent=="function")t=Kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function Sd(t){t.g=kl(()=>{t.g=null,t.i&&(t.i=!1,Sd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class e1 extends gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sd(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){gn.call(this),this.h=t,this.g={}}Ct(ls,gn);var xu=[];function Pd(t,e,n,r){Array.isArray(n)||(n&&(xu[0]=n.toString()),n=xu);for(var s=0;s<n.length;s++){var i=Ed(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Cd(t){bl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sl(e)},t),t.g={}}ls.prototype.N=function(){ls.$.N.call(this),Cd(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qi(){this.g=!0}qi.prototype.Ea=function(){this.g=!1};function n1(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function r1(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Yn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+i1(t,n)+(r?" "+r:"")})}function s1(t,e){t.info(function(){return"TIMEOUT: "+e})}qi.prototype.info=function(){};function i1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Dl(n)}catch{return e}}var Bn={},Mu=null;function Wi(){return Mu=Mu||new St}Bn.Ta="serverreachability";function Dd(t){qt.call(this,Bn.Ta,t)}Ct(Dd,qt);function cs(t){const e=Wi();xt(e,new Dd(e))}Bn.STAT_EVENT="statevent";function Od(t,e){qt.call(this,Bn.STAT_EVENT,t),this.stat=e}Ct(Od,qt);function Qt(t){const e=Wi();xt(e,new Od(e,t))}Bn.Ua="timingevent";function Vd(t,e){qt.call(this,Bn.Ua,t),this.size=e}Ct(Vd,qt);function Is(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Gi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xl(){}xl.prototype.h=null;function Nu(t){return t.h||(t.h=t.i())}function xd(){}var Ts={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ml(){qt.call(this,"d")}Ct(Ml,qt);function Nl(){qt.call(this,"c")}Ct(Nl,qt);var Aa;function Qi(){}Ct(Qi,xl);Qi.prototype.g=function(){return new XMLHttpRequest};Qi.prototype.i=function(){return{}};Aa=new Qi;function As(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ls(this),this.P=o1,t=va?125:void 0,this.V=new Ki(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Md}function Md(){this.i=null,this.g="",this.h=!1}var o1=45e3,Nd={},ba={};C=As.prototype;C.setTimeout=function(t){this.P=t};function Ra(t,e,n){t.L=1,t.A=Yi(We(e)),t.u=n,t.S=!0,Ld(t,null)}function Ld(t,e){t.G=Date.now(),bs(t),t.B=We(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Kd(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Md,t.g=fp(t.l,n?e:null,!t.u),0<t.O&&(t.M=new e1(Kt(t.Pa,t,t.g),t.O)),Pd(t.U,t.g,"readystatechange",t.nb),e=t.I?yd(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),cs(),n1(t.j,t.v,t.B,t.m,t.W,t.u)}C.nb=function(t){t=t.target;const e=this.M;e&&De(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)t:{const u=De(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||va||this.g&&(this.h.h||this.g.ja()||Bu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?cs(3):cs(2)),Xi(this);var n=this.g.da();this.ca=n;e:if(Fd(this)){var r=Bu(this.g);t="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),Kr(this);var o="";break e}this.h.i=new U.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,r1(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ss(a)){var c=a;break e}}c=null}if(n=c)Yn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sa(this,n);else{this.i=!1,this.s=3,Qt(12),An(this),Kr(this);break t}}this.S?($d(this,u,o),va&&this.i&&u==3&&(Pd(this.U,this.V,"tick",this.mb),this.V.start())):(Yn(this.j,this.m,o,null),Sa(this,o)),u==4&&An(this),this.i&&!this.J&&(u==4?lp(this.l,this):(this.i=!1,bs(this)))}else S1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),An(this),Kr(this)}}}catch{}finally{}};function Fd(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function $d(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=a1(t,n),s==ba){e==4&&(t.s=4,Qt(14),r=!1),Yn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Nd){t.s=4,Qt(15),Yn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yn(t.j,t.m,s,null),Sa(t,s);Fd(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),jl(e),e.M=!0,Qt(11))):(Yn(t.j,t.m,n,"[Invalid Chunked Response]"),An(t),Kr(t))}C.mb=function(){if(this.g){var t=De(this.g),e=this.g.ja();this.o<e.length&&(Xi(this),$d(this,t,e),this.i&&t!=4&&bs(this))}};function a1(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ba:(n=Number(e.substring(n,r)),isNaN(n)?Nd:(r+=1,r+n>e.length?ba:(e=e.slice(r,r+n),t.o=r+n,e)))}C.cancel=function(){this.J=!0,An(this)};function bs(t){t.Y=Date.now()+t.P,Bd(t,t.P)}function Bd(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Is(Kt(t.lb,t),e)}function Xi(t){t.C&&(U.clearTimeout(t.C),t.C=null)}C.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(s1(this.j,this.B),this.L!=2&&(cs(),Qt(17)),An(this),this.s=2,Kr(this)):Bd(this,this.Y-t)};function Kr(t){t.l.H==0||t.J||lp(t.l,t)}function An(t){Xi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vl(t.V),Cd(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pa(n.i,t))){if(!t.K&&Pa(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fi(n),eo(n);else break t;Ul(n),Qt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Is(Kt(n.ib,n),6e3));if(1>=Gd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bn(n,11)}else if((t.K||n.g==t)&&fi(n),!ss(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=r.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ll(i,i.h),i.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,ht(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hp(r,r.J?r.pa:null,r.Y),o.K){Qd(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Xi(a),bs(a)),r.g=o}else op(r);0<n.j.length&&no(n)}else c[0]!="stop"&&c[0]!="close"||bn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?bn(n,7):Bl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}cs(4)}catch{}}function l1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ui(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function c1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ui(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ud(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ui(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=c1(t),r=l1(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var jd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Cn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cn){this.h=t.h,ui(this,t.j),this.s=t.s,this.g=t.g,hi(this,t.m),this.l=t.l;var e=t.i,n=new us;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lu(this,n),this.o=t.o}else t&&(e=String(t).match(jd))?(this.h=!1,ui(this,e[1]||"",!0),this.s=Lr(e[2]||""),this.g=Lr(e[3]||"",!0),hi(this,e[4]),this.l=Lr(e[5]||"",!0),Lu(this,e[6]||"",!0),this.o=Lr(e[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fr(e,Fu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fr(e,Fu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fr(n,n.charAt(0)=="/"?d1:f1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fr(n,g1)),t.join("")};function We(t){return new Cn(t)}function ui(t,e,n){t.j=n?Lr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lu(t,e,n){e instanceof us?(t.i=e,m1(t.i,t.h)):(n||(e=Fr(e,p1)),t.i=new us(e,t.h))}function ht(t,e,n){t.i.set(e,n)}function Yi(t){return ht(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,h1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function h1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fu=/[#\/\?@]/g,f1=/[#\?:]/g,d1=/[#\?]/g,p1=/[#\?@]/g,g1=/#/g;function us(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mn(t){t.g||(t.g=new Map,t.h=0,t.i&&u1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=us.prototype;C.add=function(t,e){mn(this),this.i=null,t=Ir(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zd(t,e){mn(t),e=Ir(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hd(t,e){return mn(t),e=Ir(t,e),t.g.has(e)}C.forEach=function(t,e){mn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};C.ta=function(){mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};C.Z=function(t){mn(this);let e=[];if(typeof t=="string")Hd(this,t)&&(e=e.concat(this.g.get(Ir(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return mn(this),this.i=null,t=Ir(this,t),Hd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kd(t,e,n){zd(t,e),0<n.length&&(t.i=null,t.g.set(Ir(t,e),Tl(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ir(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function m1(t,e){e&&!t.j&&(mn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(zd(this,r),Kd(this,s,n))},t)),t.j=e}var _1=class{constructor(t,e){this.g=t,this.map=e}};function qd(t){this.l=t||y1,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var y1=10;function Wd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gd(t){return t.h?1:t.g?t.g.size:0}function Pa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ll(t,e){t.g?t.g.add(e):t.h=e}function Qd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qd.prototype.cancel=function(){if(this.i=Xd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xd(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tl(t.i)}var v1=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function E1(){this.g=new v1}function w1(t,e,n){const r=n||"";try{Ud(t,function(s,i){let o=s;Es(s)&&(o=Dl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function I1(t,e){const n=new qi;if(U.Image){const r=new Image;r.onload=$s(Us,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$s(Us,n,r,"TestLoadImage: error",!1,e),r.onabort=$s(Us,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$s(Us,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Us(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ji(t){this.l=t.ec||null,this.j=t.ob||!1}Ct(Ji,xl);Ji.prototype.g=function(){return new Zi(this.l,this.j)};Ji.prototype.i=function(t){return function(){return t}}({});function Zi(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ct(Zi,St);var Fl=0;C=Zi.prototype;C.open=function(t,e){if(this.readyState!=Fl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=Fl};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Yd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rs(this):hs(this),this.readyState==3&&Yd(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,Rs(this))};C.Ya=function(t){this.g&&(this.response=t,Rs(this))};C.ka=function(){this.g&&Rs(this)};function Rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var T1=U.JSON.parse;function mt(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jd,this.L=this.M=!1}Ct(mt,St);var Jd="",A1=/^https?$/i,b1=["POST","PUT"];C=mt.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Aa.g(),this.C=this.u?Nu(this.u):Nu(Aa),this.g.onreadystatechange=Kt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){$u(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=U.FormData&&t instanceof U.FormData,!(0<=pd(b1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ep(this),0<this.B&&((this.L=R1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Kt(this.ua,this)):this.A=kl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$u(this,i)}};function R1(t){return fr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof Il<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function $u(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zd(t),to(t)}function Zd(t){t.F||(t.F=!0,xt(t,"complete"),xt(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),to(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),to(this,!0)),mt.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?tp(this):this.kb())};C.kb=function(){tp(this)};function tp(t){if(t.h&&typeof Il<"u"&&(!t.C[1]||De(t)!=4||t.da()!=2)){if(t.v&&De(t)==4)kl(t.La,0,t);else if(xt(t,"readystatechange"),De(t)==4){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(jd)[1]||null;!s&&U.self&&U.self.location&&(s=U.self.location.protocol.slice(0,-1)),r=!A1.test(s?s.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var i=2<De(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Zd(t)}}finally{to(t)}}}}function to(t,e){if(t.g){ep(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ep(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function De(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),T1(e)}};function Bu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Jd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function S1(t){const e={};t=(t.g&&2<=De(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ss(t[r]))continue;var n=Jw(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Kw(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function np(t){let e="";return bl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $l(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=np(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ht(t,e,n))}function Dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rp(t){this.Ga=0,this.j=[],this.l=new qi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dr("baseRetryDelayMs",5e3,t),this.hb=Dr("retryDelaySeedMs",1e4,t),this.eb=Dr("forwardChannelMaxRetries",2,t),this.xa=Dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qd(t&&t.concurrentRequestLimit),this.Ja=new E1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=rp.prototype;C.ra=8;C.H=1;function Bl(t){if(sp(t),t.H==3){var e=t.W++,n=We(t.I);if(ht(n,"SID",t.K),ht(n,"RID",e),ht(n,"TYPE","terminate"),Ss(t,n),e=new As(t,t.l,e),e.L=2,e.A=Yi(We(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.A,n=!0),n||(e.g=fp(e.l,null),e.g.ha(e.A)),e.G=Date.now(),bs(e)}up(t)}function eo(t){t.g&&(jl(t),t.g.cancel(),t.g=null)}function sp(t){eo(t),t.u&&(U.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function no(t){if(!Wd(t.i)&&!t.m){t.m=!0;var e=t.Na;os||Rd(),as||(os(),as=!0),Ol.add(e,t),t.C=0}}function P1(t,e){return Gd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Is(Kt(t.Na,t,e),cp(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new As(this,this.l,t);let i=this.s;if(this.U&&(i?(i=yd(i),vd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break t}if(e===4096||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ip(this,s,e),n=We(this.I),ht(n,"RID",t),ht(n,"CVER",22),this.F&&ht(n,"X-HTTP-Session-Id",this.F),Ss(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(np(i)))+"&"+e:this.o&&$l(n,this.o,i)),Ll(this.i,s),this.bb&&ht(n,"TYPE","init"),this.P?(ht(n,"$req",e),ht(n,"SID","null"),s.aa=!0,Ra(s,n,null)):Ra(s,n,e),this.H=2}}else this.H==3&&(t?Uu(this,t):this.j.length==0||Wd(this.i)||Uu(this))};function Uu(t,e){var n;e?n=e.m:n=t.W++;const r=We(t.I);ht(r,"SID",t.K),ht(r,"RID",n),ht(r,"AID",t.V),Ss(t,r),t.o&&t.s&&$l(r,t.o,t.s),n=new As(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ip(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ll(t.i,n),Ra(n,r,e)}function Ss(t,e){t.na&&bl(t.na,function(n,r){ht(e,r,n)}),t.h&&Ud({},function(n,r){ht(e,r,n)})}function ip(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Kt(t.h.Va,t.h,t):null;t:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{w1(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function op(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;os||Rd(),as||(os(),as=!0),Ol.add(e,t),t.A=0}}function Ul(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Is(Kt(t.Ma,t),cp(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,ap(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Is(Kt(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qt(10),eo(this),ap(this))};function jl(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function ap(t){t.g=new As(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=We(t.wa);ht(e,"RID","rpc"),ht(e,"SID",t.K),ht(e,"AID",t.V),ht(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ht(e,"TO",t.qa),ht(e,"TYPE","xmlhttp"),Ss(t,e),t.o&&t.s&&$l(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Yi(We(e)),n.u=null,n.S=!0,Ld(n,t)}C.ib=function(){this.v!=null&&(this.v=null,eo(this),Ul(this),Qt(19))};function fi(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function lp(t,e){var n=null;if(t.g==e){fi(t),jl(t),t.g=null;var r=2}else if(Pa(t.i,e))n=e.F,Qd(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Wi(),xt(r,new Vd(r,n)),no(t)}else op(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&P1(t,e)||r==2&&Ul(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:bn(t,5);break;case 4:bn(t,10);break;case 3:bn(t,6);break;default:bn(t,2)}}}function cp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Kt(t.pb,t);n||(n=new Cn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||ui(n,"https"),Yi(n)),I1(n.toString(),r)}else Qt(2);t.H=0,t.h&&t.h.za(e),up(t),sp(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qt(2)):(this.l.info("Failed to ping google.com"),Qt(1))};function up(t){if(t.H=0,t.ma=[],t.h){const e=Xd(t.i);(e.length!=0||t.j.length!=0)&&(Ou(t.ma,e),Ou(t.ma,t.j),t.i.i.length=0,Tl(t.j),t.j.length=0),t.h.ya()}}function hp(t,e,n){var r=n instanceof Cn?We(n):new Cn(n);if(r.g!="")e&&(r.g=e+"."+r.g),hi(r,r.m);else{var s=U.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Cn(null);r&&ui(i,r),e&&(i.g=e),s&&hi(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ht(r,n,e),ht(r,"VER",t.ra),Ss(t,r),r}function fp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new mt(new Ji({ob:n})):new mt(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function dp(){}C=dp.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function di(){if(fr&&!(10<=Number(Uw)))throw Error("Environmental error: no available transport.")}di.prototype.g=function(t,e){return new ie(t,e)};function ie(t,e){St.call(this),this.g=new rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ss(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ss(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tr(this)}Ct(ie,St);ie.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hp(t,null,t.Y),no(t)};ie.prototype.close=function(){Bl(this.g)};ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dl(t),t=n);e.j.push(new _1(e.fb++,t)),e.H==3&&no(e)};ie.prototype.N=function(){this.g.h=null,delete this.j,Bl(this.g),delete this.g,ie.$.N.call(this)};function pp(t){Ml.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ct(pp,Ml);function gp(){Nl.call(this),this.status=1}Ct(gp,Nl);function Tr(t){this.g=t}Ct(Tr,dp);Tr.prototype.Ba=function(){xt(this.g,"a")};Tr.prototype.Aa=function(t){xt(this.g,new pp(t))};Tr.prototype.za=function(t){xt(this.g,new gp)};Tr.prototype.ya=function(){xt(this.g,"b")};function C1(){this.blockSize=-1}function xe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ct(xe,C1);xe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ho(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}xe.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ho(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ho(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ho(this,r),s=0;break}}this.h=s,this.i+=e};xe.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function it(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var D1={};function zl(t){return-128<=t&&128>t?Fw(t,function(e){return new it([e|0],0>e?-1:0)}):new it([t|0],0>t?-1:0)}function Oe(t){if(isNaN(t)||!isFinite(t))return rr;if(0>t)return Vt(Oe(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ca;return new it(e,0)}function mp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Vt(mp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Oe(Math.pow(e,8)),r=rr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Oe(Math.pow(e,i)),r=r.R(i).add(Oe(o))):(r=r.R(n),r=r.add(Oe(o)))}return r}var Ca=4294967296,rr=zl(0),Da=zl(1),ju=zl(16777216);C=it.prototype;C.ea=function(){if(ae(this))return-Vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ca+r)*e,e*=Ca}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ue(this))return"0";if(ae(this))return"-"+Vt(this).toString(t);for(var e=Oe(Math.pow(t,6)),n=this,r="";;){var s=gi(n,e).g;n=pi(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Ue(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ue(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ae(t){return t.h==-1}C.X=function(t){return t=pi(this,t),ae(t)?-1:Ue(t)?0:1};function Vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new it(n,~t.h).add(Da)}C.abs=function(){return ae(this)?Vt(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new it(n,n[n.length-1]&-2147483648?-1:0)};function pi(t,e){return t.add(Vt(e))}C.R=function(t){if(Ue(this)||Ue(t))return rr;if(ae(this))return ae(t)?Vt(this).R(Vt(t)):Vt(Vt(this).R(t));if(ae(t))return Vt(this.R(Vt(t)));if(0>this.X(ju)&&0>t.X(ju))return Oe(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,js(n,2*r+2*s),n[2*r+2*s+1]+=i*l,js(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,js(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,js(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new it(n,0)};function js(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Or(t,e){this.g=t,this.h=e}function gi(t,e){if(Ue(e))throw Error("division by zero");if(Ue(t))return new Or(rr,rr);if(ae(t))return e=gi(Vt(t),e),new Or(Vt(e.g),Vt(e.h));if(ae(e))return e=gi(t,Vt(e)),new Or(Vt(e.g),e.h);if(30<t.g.length){if(ae(t)||ae(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Da,r=e;0>=r.X(t);)n=zu(n),r=zu(r);var s=Wn(n,1),i=Wn(r,1);for(r=Wn(r,2),n=Wn(n,2);!Ue(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Wn(r,1),n=Wn(n,1)}return e=pi(t,s.R(e)),new Or(s,e)}for(s=rr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Oe(n),o=i.R(e);ae(o)||0<o.X(t);)n-=r,i=Oe(n),o=i.R(e);Ue(i)&&(i=Da),s=s.add(i),t=pi(t,o)}return new Or(s,t)}C.gb=function(t){return gi(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new it(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new it(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new it(n,this.h^t.h)};function zu(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new it(n,t.h)}function Wn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new it(s,t.h)}di.prototype.createWebChannel=di.prototype.g;ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;Gi.NO_ERROR=0;Gi.TIMEOUT=8;Gi.HTTP_ERROR=6;kd.COMPLETE="complete";xd.EventType=Ts;Ts.OPEN="a";Ts.CLOSE="b";Ts.ERROR="c";Ts.MESSAGE="d";St.prototype.listen=St.prototype.O;mt.prototype.listenOnce=mt.prototype.P;mt.prototype.getLastError=mt.prototype.Sa;mt.prototype.getLastErrorCode=mt.prototype.Ia;mt.prototype.getStatus=mt.prototype.da;mt.prototype.getResponseJson=mt.prototype.Wa;mt.prototype.getResponseText=mt.prototype.ja;mt.prototype.send=mt.prototype.ha;mt.prototype.setWithCredentials=mt.prototype.Oa;xe.prototype.digest=xe.prototype.l;xe.prototype.reset=xe.prototype.reset;xe.prototype.update=xe.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=Oe;it.fromString=mp;var O1=function(){return new di},V1=function(){return Wi()},Ko=Gi,k1=kd,x1=Bn,Hu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zs=xd,M1=mt,N1=it;const Ku="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new ll("@firebase/firestore");function Vr(){return Ln.logLevel}function F(t,...e){if(Ln.logLevel<=J.DEBUG){const n=e.map(Hl);Ln.debug(`Firestore (${Ar}): ${t}`,...n)}}function Fn(t,...e){if(Ln.logLevel<=J.ERROR){const n=e.map(Hl);Ln.error(`Firestore (${Ar}): ${t}`,...n)}}function mi(t,...e){if(Ln.logLevel<=J.WARN){const n=e.map(Hl);Ln.warn(`Firestore (${Ar}): ${t}`,...n)}}function Hl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Pt(t,e){t||Q()}function ft(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class F1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $1{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pt(typeof r.accessToken=="string"),new _p(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pt(e===null||typeof e=="string"),new $t(e)}}class B1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class U1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new B1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pt(typeof n.token=="string"),this.R=n.token,new j1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=H1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ct(t,e){return t<e?-1:t>e?1:0}function dr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ct(this.nanoseconds,e.nanoseconds):ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pt(e)}static min(){return new pt(new bt(0,0))}static max(){return new pt(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class wt extends fs{construct(e,n,r){return new wt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const K1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends fs{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return K1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(wt.fromString(e))}static fromName(e){return new W(wt.fromString(e).popFirst(5))}static empty(){return new W(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return wt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new wt(e.slice()))}}function q1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pt.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new un(s,W.empty(),e)}function W1(t){return new un(t.readTime,t.key,-1)}class un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new un(pt.min(),W.empty(),-1)}static max(){return new un(pt.max(),W.empty(),-1)}}function G1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ct(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Q1)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ep._e=-1;function Kl(t){return t==null}function _i(t){return t===0&&1/t==-1/0}function Y1(t){return typeof t=="number"&&Number.isInteger(t)&&!_i(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.comparator=e,this.root=n||Dt.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Dt.RED,this.left=s??Dt.EMPTY,this.right=i??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wu(this.data.getIterator())}getIteratorFrom(e){return new Wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Wt(this.comparator);return n.data=e,n}}class Wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new ye([])}unionWith(e){let n=new Wt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ye(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J1("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Pt(!!t),typeof t=="string"){let e=0;const n=Z1.exec(t);if(Pt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ot(t.seconds),nanos:Ot(t.nanos)}}function Ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ip(t){const e=t.mapValue.fields.__previous_value__;return ql(e)?Ip(e):e}function yi(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ql(t)?4:eI(t)?9007199254740991:10:Q()}function Me(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yi(t).isEqual(yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$n(s.timestampValue),a=$n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ds(s.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ot(s.geoPointValue.latitude)===Ot(i.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ot(s.integerValue)===Ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ot(s.doubleValue),a=Ot(i.doubleValue);return o===a?_i(o)===_i(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return dr(t.arrayValue.values||[],e.arrayValue.values||[],Me);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(qu(o)!==qu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Me(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function ps(t,e){return(t.values||[]).find(n=>Me(n,e))!==void 0}function gr(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ot(i.integerValue||i.doubleValue),l=Ot(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Gu(t.timestampValue,e.timestampValue);case 4:return Gu(yi(t),yi(e));case 5:return ct(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ds(i),l=ds(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ct(a[c],l[c]);if(u!==0)return u}return ct(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ct(Ot(i.latitude),Ot(o.latitude));return a!==0?a:ct(Ot(i.longitude),Ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=gr(a[c],l[c]);if(u)return u}return ct(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ks.mapValue&&o===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(o===Ks.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ct(l[h],u[h]);if(d!==0)return d;const m=gr(a[l[h]],c[u[h]]);if(m!==0)return m}return ct(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Gu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ct(t,e);const n=$n(t),r=$n(e),s=ct(n.seconds,r.seconds);return s!==0?s:ct(n.nanos,r.nanos)}function mr(t){return Oa(t)}function Oa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Oa(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Oa(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function Va(t){return!!t&&"integerValue"in t}function Wl(t){return!!t&&"arrayValue"in t}function Js(t){return!!t&&"mapValue"in t}function qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.value=e}static empty(){return new me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Js(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Js(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Me(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new me(qr(this.value))}}function Tp(t){const e=[];return Ps(t.fields,(n,r)=>{const s=new kt([n]);if(Js(r)){const i=Tp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new de(e,0,pt.min(),pt.min(),pt.min(),me.empty(),0)}static newFoundDocument(e,n,r,s){return new de(e,1,n,pt.min(),r,s,0)}static newNoDocument(e,n){return new de(e,2,n,pt.min(),pt.min(),me.empty(),0)}static newUnknownDocument(e,n){return new de(e,3,n,pt.min(),pt.min(),me.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.position=e,this.inclusive=n}}function Qu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=gr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Me(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n="asc"){this.field=e,this.dir=n}}function nI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{}class At extends Ap{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sI(e,n,r):n==="array-contains"?new aI(e,r):n==="in"?new lI(e,r):n==="not-in"?new cI(e,r):n==="array-contains-any"?new uI(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iI(e,r):new oI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gr(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Ap{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new hn(e,n)}matches(e){return bp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function bp(t){return t.op==="and"}function Rp(t){return rI(t)&&bp(t)}function rI(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function ka(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+mr(t.value);if(Rp(t))return t.filters.map(e=>ka(e)).join(",");{const e=t.filters.map(n=>ka(n)).join(",");return`${t.op}(${e})`}}function Sp(t,e){return t instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&Me(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Sp(o,s.filters[a]),!0):!1}(t,e):void Q()}function Pp(t){return t instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${mr(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pp).join(" ,")+"}"}(t):"Filter"}class sI extends At{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class iI extends At{constructor(e,n){super(e,"in",n),this.keys=Cp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oI extends At{constructor(e,n){super(e,"not-in",n),this.keys=Cp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class aI extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wl(n)&&ps(n.arrayValue,this.value)}}class lI extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ps(this.value.arrayValue,n)}}class cI extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ps(this.value.arrayValue,n)}}class uI extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Yu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hI(t,e,n,r,s,i,o)}function Gl(t){const e=ft(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ka(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mr(r)).join(",")),e.ce=n}return e.ce}function Ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xu(t.startAt,e.startAt)&&Xu(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function fI(t,e,n,r,s,i,o,a){return new so(t,e,n,r,s,i,o,a)}function dI(t){return new so(t)}function Ju(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pI(t){return t.collectionGroup!==null}function Wr(t){const e=ft(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Wt(kt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new wi(i,r))}),n.has(kt.keyField().canonicalString())||e.le.push(new wi(kt.keyField(),r))}return e.le}function On(t){const e=ft(t);return e.he||(e.he=gI(e,Wr(t))),e.he}function gI(t,e){if(t.limitType==="F")return Yu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wi(s.field,i)});const n=t.endAt?new Ei(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ei(t.startAt.position,t.startAt.inclusive):null;return Yu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xa(t,e,n){return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dp(t,e){return Ql(On(t),On(e))&&t.limitType===e.limitType}function Op(t){return`${Gl(On(t))}|lt:${t.limitType}`}function kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pp(s)).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mr(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Qu(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Wr(r),s)||r.endAt&&!function(o,a,l){const c=Qu(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Wr(r),s))}(t,e)}function mI(t){return(e,n)=>{let r=!1;for(const s of Wr(t)){const i=_I(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _I(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?gr(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new ne(W.comparator);function Ii(){return yI}const Vp=new ne(W.comparator);function qs(...t){let e=Vp;for(const n of t)e=e.insert(n.key,n);return e}function kp(t){let e=Vp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rn(){return Gr()}function xp(){return Gr()}function Gr(){return new br(t=>t.toString(),(t,e)=>t.isEqual(e))}const vI=new ne(W.comparator),EI=new Wt(W.comparator);function Bt(...t){let e=EI;for(const n of t)e=e.add(n);return e}const wI=new Wt(ct);function II(){return wI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function Np(t){return{integerValue:""+t}}function TI(t,e){return Y1(e)?Np(e):Mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this._=void 0}}function AI(t,e,n){return t instanceof Ti?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ql(i)&&(i=Ip(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof gs?Fp(t,e):t instanceof ms?$p(t,e):function(s,i){const o=Lp(s,i),a=Zu(o)+Zu(s.Ie);return Va(o)&&Va(s.Ie)?Np(a):Mp(s.serializer,a)}(t,e)}function bI(t,e,n){return t instanceof gs?Fp(t,e):t instanceof ms?$p(t,e):n}function Lp(t,e){return t instanceof Ai?function(r){return Va(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ti extends io{}class gs extends io{constructor(e){super(),this.elements=e}}function Fp(t,e){const n=Bp(e);for(const r of t.elements)n.some(s=>Me(s,r))||n.push(r);return{arrayValue:{values:n}}}class ms extends io{constructor(e){super(),this.elements=e}}function $p(t,e){let n=Bp(e);for(const r of t.elements)n=n.filter(s=>!Me(s,r));return{arrayValue:{values:n}}}class Ai extends io{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Zu(t){return Ot(t.integerValue||t.doubleValue)}function Bp(t){return Wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gs&&s instanceof gs||r instanceof ms&&s instanceof ms?dr(r.elements,s.elements,Me):r instanceof Ai&&s instanceof Ai?Me(r.Ie,s.Ie):r instanceof Ti&&s instanceof Ti}(t.transform,e.transform)}class SI{constructor(e,n){this.version=e,this.transformResults=n}}class Ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oo{}function Up(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zp(t.key,Ke.none()):new Cs(t.key,t.data,Ke.none());{const n=t.data,r=me.empty();let s=new Wt(kt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Un(t.key,r,new ye(s.toArray()),Ke.none())}}function PI(t,e,n){t instanceof Cs?function(s,i,o){const a=s.value.clone(),l=eh(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Un?function(s,i,o){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=eh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(jp(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n,r){return t instanceof Cs?function(i,o,a,l){if(!Zs(i.precondition,o))return a;const c=i.value.clone(),u=nh(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Un?function(i,o,a,l){if(!Zs(i.precondition,o))return a;const c=nh(i.fieldTransforms,l,o),u=o.data;return u.setAll(jp(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Zs(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lp(r.transform,s||null);i!=null&&(n===null&&(n=me.empty()),n.set(r.field,i))}return n||null}function th(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(i,o)=>RI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cs extends oo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Un extends oo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eh(t,e,n){const r=new Map;Pt(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,bI(o,a,n[s]))}return r}function nh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AI(i,o,e))}return r}class zp extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DI extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Up(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pt.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Bt())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(n,r)=>th(n,r))&&dr(this.baseMutations,e.baseMutations,(n,r)=>th(n,r))}}class Yl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pt(e.mutations.length===r.length);let s=function(){return vI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,X;function kI(t){switch(t){default:return Q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function xI(t){if(t===void 0)return Fn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Et.OK:return T.OK;case Et.CANCELLED:return T.CANCELLED;case Et.UNKNOWN:return T.UNKNOWN;case Et.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Et.INTERNAL:return T.INTERNAL;case Et.UNAVAILABLE:return T.UNAVAILABLE;case Et.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Et.NOT_FOUND:return T.NOT_FOUND;case Et.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Et.ABORTED:return T.ABORTED;case Et.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Et.DATA_LOSS:return T.DATA_LOSS;default:return Q()}}(X=Et||(Et={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new N1([4294967295,4294967295],0);class MI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LI(t,e){return Ma(t,e.toTimestamp())}function sr(t){return Pt(!!t),pt.fromTimestamp(function(n){const r=$n(n);return new bt(r.seconds,r.nanos)}(t))}function Hp(t,e){return function(r){return new wt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function FI(t){const e=wt.fromString(t);return Pt(qI(e)),e}function Na(t,e){return Hp(t.databaseId,e.path)}function $I(t){const e=FI(t);return e.length===4?wt.emptyPath():UI(e)}function BI(t){return new wt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function UI(t){return Pt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rh(t,e,n){return{name:Na(t,e),fields:n.value.mapValue.fields}}function jI(t,e){let n;if(e instanceof Cs)n={update:rh(t,e.key,e.value)};else if(e instanceof zp)n={delete:Na(t,e.key)};else if(e instanceof Un)n={update:rh(t,e.key,e.data),updateMask:KI(e.fieldMask)};else{if(!(e instanceof DI))return Q();n={verify:Na(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ms)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ai)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function zI(t,e){return t&&t.length>0?(Pt(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?sr(s.updateTime):sr(i);return o.isEqual(pt.min())&&(o=sr(i)),new SI(o,s.transformResults||[])}(n,e))):[]}function HI(t){let e=$I(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Kp(h);return d instanceof hn&&Rp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(A){return new wi(Qn(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Kl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Ei(m,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,m=h.values||[];return new Ei(m,d)}(n.endAt)),fI(e,s,o,i,a,"F",l,c)}function Kp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qn(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qn(n.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qn(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qn(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return At.create(Qn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Kp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Qn(t){return kt.fromServerFormat(t.fieldPath)}function KI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.ut=e}}function GI(t){const e=HI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.on=new XI}addToCollectionParentIndex(e,n){return this.on.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(un.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(un.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class XI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Wt(wt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Wt(wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new _r(0)}static Nn(){return new _r(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.changes=new br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qr(r.mutation,s,ye.empty(),bt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Bt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Bt()){const s=Rn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Bt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ii();const o=Gr(),a=function(){return Gr()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Un)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Qr(u.mutation,c,u.mutation.getFieldMask(),bt.now())):o.set(c.key,ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new JI(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gr();let s=new ne((o,a)=>o-a),i=Bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ye.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Bt()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=xp();u.forEach(d=>{if(!i.has(d)){const m=Up(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(Rn());let a=-1,l=i;return o.next(c=>I.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Bt())).next(u=>({batchId:a,changes:kp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(a=>I.forEach(a,l=>{const c=function(h,d){return new so(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,de.newInvalidDocument(u)))});let a=qs();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Qr(u.mutation,c,ye.empty(),bt.now()),Xl(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return I.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sr(s.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:GI(s.bundledQuery),readTime:sr(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.overlays=new ne(W.comparator),this.lr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rn();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=Rn(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ne((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Rn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return I.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VI(n,r));let i=this.lr.get(n);i===void 0&&(i=Bt(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.hr=new Wt(Tt.Pr),this.Ir=new Wt(Tt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Tt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new W(new wt([])),r=new Tt(n,e),s=new Tt(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new wt([])),r=new Tt(n,e),s=new Tt(n,e+1);let i=Bt();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Tt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||ct(e.gr,n.gr)}static Tr(e,n){return ct(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Wt(Tt.Pr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OI(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),s=new Tt(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Wt(ct);return n.forEach(s=>{const i=new Tt(s,0),o=new Tt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),I.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Tt(new W(i),0);let a=new Wt(ct);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),I.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return I.forEach(n.mutations,s=>{const i=new Tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Tt(n,0),s=this.yr.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.Cr=e,this.docs=function(){return new ne(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():de.newInvalidDocument(n))}getEntries(e,n){let r=Ii();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():de.newInvalidDocument(s))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ii();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||G1(W1(u),r)<=0||(s.has(u.key)||Xl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}vr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sT(this)}getSize(e){return I.resolve(this.size)}}class sT extends YI{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.persistence=e,this.Fr=new br(n=>Gl(n),Ql),this.lastRemoteSnapshotVersion=pt.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Jl,this.targetCount=0,this.Nr=_r.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),I.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new _r(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.kn(n),I.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ep(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iT(this),this.indexManager=new QI,this.remoteDocumentCache=function(s){return new rT(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new WI(n),this.Kr=new tT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new nT(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new aT(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return I.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class aT extends X1{constructor(e){super(),this.currentSequenceNumber=e}}class Zl{constructor(e){this.persistence=e,this.Gr=new Jl,this.zr=null}static jr(e){return new Zl(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),I.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hr,r=>{const s=W.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,pt.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return I.or([()=>I.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=Bt(),s=Bt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lT;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Vr()<=J.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),I.resolve()):(Vr()<=J.DEBUG&&F("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Vr()<=J.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):I.resolve())}zi(e,n){if(Ju(n))return I.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xa(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Bt(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,xa(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return Ju(n)||s.isEqual(pt.min())?I.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?I.resolve(null):(Vr()<=J.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(n)),this.Xi(e,o,n,q1(s,-1)).next(a=>a))})}Yi(e,n){let r=new Wt(mI(e));return n.forEach((s,i)=>{Xl(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Vr()<=J.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",kr(n)),this.Gi.getDocumentsMatchingQuery(e,n,un.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new ne(ct),this.ns=new br(i=>Gl(i),Ql),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZI(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function hT(t,e,n,r){return new uT(t,e,n,r)}async function qp(t,e){const n=ft(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Bt();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function fT(t,e){const n=ft(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let m=I.resolve();return d.forEach(A=>{m=m.next(()=>u.getEntry(l,A)).next(R=>{const D=c.docVersions.get(A);Pt(D!==null),R.version.compareTo(D)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),u.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Bt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dT(t){const e=ft(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function pT(t,e){const n=ft(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class sh{constructor(){this.activeTargetIds=II()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gT{constructor(){this.eo=new sh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new sh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws=null;function qo(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class vT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=qo(),l=this.So(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw mi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ar}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=_T[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=qo();return new Promise((o,a)=>{const l=new M1;l.setWithCredentials(!0),l.listenOnce(k1.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ko.NO_ERROR:const u=l.getResponseJson();F(Lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ko.TIMEOUT:F(Lt,`RPC '${e}' ${i} timed out`),a(new j(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const h=l.getStatus();if(F(Lt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const A=function(D){const V=D.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(V)>=0?V:T.UNKNOWN}(m.status);a(new j(A,m.message))}else a(new j(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(T.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(Lt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);F(Lt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=qo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=O1(),a=V1(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");F(Lt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,m=!1;const A=new yT({co:D=>{m?F(Lt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(d||(F(Lt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),F(Lt,`RPC '${e}' stream ${s} sending:`,D),h.send(D))},lo:()=>h.close()}),R=(D,V,x)=>{D.listen(V,K=>{try{x(K)}catch(N){setTimeout(()=>{throw N},0)}})};return R(h,zs.EventType.OPEN,()=>{m||F(Lt,`RPC '${e}' stream ${s} transport opened.`)}),R(h,zs.EventType.CLOSE,()=>{m||(m=!0,F(Lt,`RPC '${e}' stream ${s} transport closed`),A.Ro())}),R(h,zs.EventType.ERROR,D=>{m||(m=!0,mi(Lt,`RPC '${e}' stream ${s} transport errored:`,D),A.Ro(new j(T.UNAVAILABLE,"The operation could not be completed")))}),R(h,zs.EventType.MESSAGE,D=>{var V;if(!m){const x=D.data[0];Pt(!!x);const K=x,N=K.error||((V=K[0])===null||V===void 0?void 0:V.error);if(N){F(Lt,`RPC '${e}' stream ${s} received error:`,N);const _t=N.status;let yt=function(Xe){const re=Et[Xe];if(re!==void 0)return xI(re)}(_t),Xt=N.message;yt===void 0&&(yt=T.INTERNAL,Xt="Unknown error status: "+_t+" with message "+N.message),m=!0,A.Ro(new j(yt,Xt)),h.close()}else F(Lt,`RPC '${e}' stream ${s} received:`,x),A.Vo(x)}}),R(a,x1.STAT_EVENT,D=>{D.stat===Hu.PROXY?F(Lt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Hu.NOPROXY&&F(Lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.Ao()},0),A}}function Wo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){return new MI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Wp(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new j(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wT extends ET{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Pt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=zI(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.I_(r,n)}return Pt(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=BI(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jI(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(T.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(T.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class TT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Fn(n),this.f_=!1):F("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Os(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ft(l);c.C_.add(4),await Ds(c),c.M_.set("Unknown"),c.C_.delete(4),await lo(c)}(this))})}),this.M_=new TT(r,s)}}async function lo(t){if(Os(t))for(const e of t.v_)await e(!0)}async function Ds(t){for(const e of t.v_)await e(!1)}function Os(t){return ft(t).C_.size===0}async function Gp(t,e,n){if(!ro(e))throw e;t.C_.add(1),await Ds(t),t.M_.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await lo(t)})}function Qp(t,e){return e().catch(n=>Gp(t,n,e))}async function co(t){const e=ft(t),n=fn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;bT(e);)try{const s=await pT(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,RT(e,s)}catch(s){await Gp(e,s)}Xp(e)&&Yp(e)}function bT(t){return Os(t)&&t.b_.length<10}function RT(t,e){t.b_.push(e);const n=fn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Xp(t){return Os(t)&&!fn(t).jo()&&t.b_.length>0}function Yp(t){fn(t).start()}async function ST(t){fn(t).E_()}async function PT(t){const e=fn(t);for(const n of t.b_)e.P_(n.mutations)}async function CT(t,e,n){const r=t.b_.shift(),s=Yl.from(r,e,n);await Qp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await co(t)}async function DT(t,e){e&&fn(t).h_&&await async function(r,s){if(function(o){return kI(o)&&o!==T.ABORTED}(s.code)){const i=r.b_.shift();fn(r).Yo(),await Qp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await co(r)}}(t,e),Xp(t)&&Yp(t)}async function oh(t,e){const n=ft(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.C_.add(3),await Ds(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await lo(n)}async function OT(t,e){const n=ft(t);e?(n.C_.delete(2),await lo(n)):e||(n.C_.add(2),await Ds(n),n.M_.set("Unknown"))}function fn(t){return t.N_||(t.N_=function(n,r,s){const i=ft(n);return i.A_(),new wT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:ST.bind(null,t),Io:DT.bind(null,t),T_:PT.bind(null,t),I_:CT.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await co(t)):(await t.N_.stop(),t.b_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ec(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),ro(t))return new j(T.UNAVAILABLE,`${e}: ${t}`);throw t}class VT{constructor(){this.queries=new br(e=>Op(e),Dp),this.onlineState="Unknown",this.q_=new Set}}function kT(t){t.q_.forEach(e=>{e.next()})}class xT{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new br(a=>Op(a),Dp),this.fa=new Map,this.ga=new Set,this.pa=new ne(W.comparator),this.ya=new Map,this.wa=new Jl,this.Sa={},this.ba=new Map,this.Da=_r.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function MT(t,e,n){const r=$T(t);try{const s=await function(o,a){const l=ft(o),c=bt.now(),u=a.reduce((m,A)=>m.add(A.key),Bt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=Ii(),R=Bt();return l.ss.getEntries(m,u).next(D=>{A=D,A.forEach((V,x)=>{x.isValidDocument()||(R=R.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,A)).next(D=>{h=D;const V=[];for(const x of a){const K=CI(x,h.get(x.key).overlayedDocument);K!=null&&V.push(new Un(x.key,K,Tp(K.value.mapValue),Ke.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,V,a)}).next(D=>{d=D;const V=D.applyToLocalDocumentSet(h,R);return l.documentOverlayCache.saveOverlays(m,D.batchId,V)})}).then(()=>({batchId:d.batchId,changes:kp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new ne(ct)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await uo(r,s.changes),await co(r.remoteStore)}catch(s){const i=Jp(s,"Failed to persist write");n.reject(i)}}function ah(t,e,n){const r=ft(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ft(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&kT(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NT(t,e){const n=ft(t),r=e.batch.batchId;try{const s=await fT(n.localStore,e);tg(n,r,null),Zp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await vp(s)}}async function LT(t,e,n){const r=ft(t);try{const s=await function(o,a){const l=ft(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Pt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);tg(r,e,n),Zp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await vp(s)}}function Zp(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function tg(t,e,n){const r=ft(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}async function uo(t,e,n){const r=ft(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=tc.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=ft(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(c,d=>I.forEach(d.ki,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>I.forEach(d.qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ro(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const m=u.ts.get(d),A=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(A);u.ts=u.ts.insert(d,R)}}}(r.localStore,i))}async function FT(t,e){const n=ft(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await qp(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new j(T.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r._s)}}function $T(t){const e=ft(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LT.bind(null,e),e}class lh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ao(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hT(this.persistence,new cT,e.initialUser,this.serializer)}createPersistence(e){return new oT(Zl.jr,this.serializer)}createSharedClientState(e){return new gT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FT.bind(null,this.syncEngine),await OT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VT}()}createDatastore(e){const n=ao(e.databaseInfo.databaseId),r=function(i){return new vT(i)}(e.databaseInfo);return function(i,o,a,l){return new IT(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new AT(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ah(this.syncEngine,n,0),function(){return ih.D()?new ih:new mT}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new xT(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ft(n);F("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ds(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Go(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ch(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zT(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>oh(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>oh(e.remoteStore,i)),t._onlineComponents=e}function jT(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jT(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await Go(t,new lh)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Go(t,new lh);return t._offlineComponents}async function HT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await ch(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await ch(t,new BT))),t._onlineComponents}function KT(t){return HT(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e,n){if(!n)throw new j(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WT(t,e,n,r){if(e===!0&&r===!0)throw new j(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hh(t){if(!W.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function La(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new j(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L1;switch(r.type){case"firstParty":return new U1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uh.get(n);r&&(F("ComponentProvider","Removing Datastore"),uh.delete(n),r.terminate())}(this),Promise.resolve()}}function GT(t,e,n,r={}){var s;const i=(t=La(t,rc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=Zy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(c)}t._authCredentials=new F1(new _p(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sc(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class _s extends sc{constructor(e,n,r){super(e,n,dI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new W(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function QT(t,e,...n){if(t=cn(t),arguments.length===1&&(e=yp.newId()),qT("doc","path",e),t instanceof rc){const r=wt.fromString(e,...n);return hh(r),new qe(t,null,new W(r))}{if(!(t instanceof qe||t instanceof _s))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wt.fromString(e,...n));return hh(r),new qe(t.firestore,t instanceof _s?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Wp(this,"async_queue_retry"),this.iu=()=>{const n=Wo();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Wo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Wo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Dn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ro(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=ec.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&Q()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ng extends rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new XT}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rg(this),this._firestoreClient.terminate()}}function YT(t,e){const n=typeof t=="object"?t:xf(),r=typeof t=="string"?t:e||"(default)",s=Fi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yy("firestore");i&&GT(s,...i)}return s}function JT(t){return t._firestoreClient||rg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rg(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new tI(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,eg(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new UT(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(Ge.fromBase64String(e))}catch(n){throw new j(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ct(this._lat,e._lat)||ct(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=/^__.*__$/;class tA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cs(e,this.data,n,this.fieldTransforms)}}function ag(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ic{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return bi(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ag(this.Iu)&&ZT.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class eA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ao(e)}pu(e,n,r,s=!1){return new ic({Iu:e,methodName:n,gu:r,path:kt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nA(t){const e=t._freezeSettings(),n=ao(t._databaseId);return new eA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rA(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);hg("Data must be an object, but it was:",o,r);const a=cg(r,o);let l,c;if(i.merge)l=new ye(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=sA(e,h,n);if(!o.contains(d))throw new j(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aA(u,d)||u.push(d)}l=new ye(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new tA(new me(a),l,c)}function lg(t,e){if(ug(t=cn(t)))return hg("Unsupported field value:",e,t),cg(t,e);if(t instanceof ig)return function(r,s){if(!ag(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=lg(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:Ma(s.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,i)}}if(r instanceof og)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ys)return{bytesValue:NI(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${nc(r)}`)}(t,e)}function cg(t,e){const n={};return wp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,s)=>{const i=lg(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ug(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof og||t instanceof ys||t instanceof qe||t instanceof ig)}function hg(t,e,n){if(!ug(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=nc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function sA(t,e,n){if((e=cn(e))instanceof sg)return e._internalPath;if(typeof e=="string")return oA(t,e);throw bi("Field path arguments must be of type string or ",t,!1,void 0,n)}const iA=new RegExp("[~\\*/\\[\\]]");function oA(t,e,n){if(e.search(iA)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sg(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(T.INVALID_ARGUMENT,a+t+l)}function aA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function cA(t,e,n){t=La(t,qe);const r=La(t.firestore,ng),s=lA(t.converter,e,n);return uA(r,[rA(nA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ke.none())])}function uA(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>MT(await KT(r),s,i)),i.promise}(JT(t),e)}(function(e,n=!0){(function(s){Ar=s})(rE),ke(new we("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ng(new $1(r.getProvider("auth-internal")),new z1(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),le(Ku,"4.4.0",e),le(Ku,"4.4.0","esm2017")})();const fg=t=>(qh("data-v-8024d9ac"),t=t(),Wh(),t),hA=fg(()=>Z("img",{alt:"Vue logo",class:"logo",src:V_,width:"125",height:"125"},null,-1)),fA={class:"wrapper"},dA=fg(()=>Z("nav",null,null,-1)),pA={__name:"App",setup(t){const n=kf({apiKey:"AIzaSyD-UpcuJYqS75Nw2_nATZ-i6z9OdpQ3ETE",authDomain:"cydas-member-stg-ee2e7.firebaseapp.com",databaseURL:"https://cydas-member-stg-ee2e7-default-rtdb.firebaseio.com",projectId:"cydas-member-stg-ee2e7",storageBucket:"cydas-member-stg-ee2e7.appspot.com",messagingSenderId:"458758423846",appId:"1:458758423846:web:ca952d1116efb5f43dade7",measurementId:"G-JHR9H7BLDK"}),r=YT(n),s=Pw();return Dw(s,i=>{console.log("Message received. ",i)}),Cw(s,{vapidKey:"BOhTvkYJEjRnEqfatXNfyeaJs97BEUWsxxEXpnb0rEqxmazn2HVGwoZDamJZTrQxK7Vc_qwewrdCE0DECX8LU_k"}).then(async i=>{i?(console.info("Web Token: ",i),await cA(QT(r,"cydas/919fcfb3-ac6c-11ea-8d08-0a51e6767a16"),{web:i,mobile:"fKnbGC4cSE_enTdcwzDyDL:APA91bHcvCkOsS_ZZAhLCg0Y2SgjIGOX0Hw_ayCg5xLBlQMHy-HtUertopm9JIZOkF-6Bkiy2oyPTo0SYe9TK6s9JbxEDc-iWXtEH-10KlXGp4wMB3_0BNTJpVLug53HipiBxSuXDDlu"})):console.info("No registration token available. Request permission to generate one.")}).catch(i=>{console.info("An error occurred while retrieving token. ",i)}),(i,o)=>(Ie(),Ne("header",null,[hA,Z("div",fA,[ut(Uy,{msg:"FCM Notification!"}),dA])]))}},gA=dn(pA,[["__scopeId","data-v-8024d9ac"]]),mA="modulepreload",_A=function(t){return"/"+t},dh={},yA=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=_A(o),o in dh)return;dh[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":mA,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},vA={},EA={class:"item"},wA={class:"details"};function IA(t,e){return Ie(),Ne("div",EA,[Z("i",null,[mo(t.$slots,"icon",{},void 0,!0)]),Z("div",wA,[Z("h3",null,[mo(t.$slots,"heading",{},void 0,!0)]),mo(t.$slots,"default",{},void 0,!0)])])}const xr=dn(vA,[["render",IA],["__scopeId","data-v-40a5c0e5"]]),TA={},AA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},bA=Z("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),RA=[bA];function SA(t,e){return Ie(),Ne("svg",AA,RA)}const PA=dn(TA,[["render",SA]]),CA={},DA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},OA=Z("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),VA=[OA];function kA(t,e){return Ie(),Ne("svg",DA,VA)}const xA=dn(CA,[["render",kA]]),MA={},NA={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},LA=Z("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),FA=[LA];function $A(t,e){return Ie(),Ne("svg",NA,FA)}const BA=dn(MA,[["render",$A]]),UA={},jA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},zA=Z("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),HA=[zA];function KA(t,e){return Ie(),Ne("svg",jA,HA)}const qA=dn(UA,[["render",KA]]),WA={},GA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},QA=Z("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),XA=[QA];function YA(t,e){return Ie(),Ne("svg",GA,XA)}const JA=dn(WA,[["render",YA]]),ZA=Z("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),tb=Z("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),eb=Z("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),nb=Z("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),rb=Z("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),sb=Z("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),ib=Z("br",null,null,-1),ob=Z("code",null,"README.md",-1),ab=Z("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),lb=Z("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),cb=Z("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),ub=Z("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),hb=Z("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),fb=Z("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),db=Z("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),pb=Z("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),gb=Z("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),mb=Z("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),_b={__name:"TheWelcome",setup(t){return(e,n)=>(Ie(),Ne(oe,null,[ut(xr,null,{icon:Ft(()=>[ut(PA)]),heading:Ft(()=>[rt("Documentation")]),default:Ft(()=>[rt(" Vue’s "),ZA,rt(" provides you with all information you need to get started. ")]),_:1}),ut(xr,null,{icon:Ft(()=>[ut(xA)]),heading:Ft(()=>[rt("Tooling")]),default:Ft(()=>[rt(" This project is served and bundled with "),tb,rt(". The recommended IDE setup is "),eb,rt(" + "),nb,rt(". If you need to test your components and web pages, check out "),rb,rt(" and "),sb,rt(". "),ib,rt(" More instructions are available in "),ob,rt(". ")]),_:1}),ut(xr,null,{icon:Ft(()=>[ut(BA)]),heading:Ft(()=>[rt("Ecosystem")]),default:Ft(()=>[rt(" Get official tools and libraries for your project: "),ab,rt(", "),lb,rt(", "),cb,rt(", and "),ub,rt(". If you need more resources, we suggest paying "),hb,rt(" a visit. ")]),_:1}),ut(xr,null,{icon:Ft(()=>[ut(qA)]),heading:Ft(()=>[rt("Community")]),default:Ft(()=>[rt(" Got stuck? Ask your question on "),fb,rt(", our official Discord server, or "),db,rt(". You should also subscribe to "),pb,rt(" and follow the official "),gb,rt(" twitter account for latest news in the Vue world. ")]),_:1}),ut(xr,null,{icon:Ft(()=>[ut(JA)]),heading:Ft(()=>[rt("Support Vue")]),default:Ft(()=>[rt(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),mb,rt(". ")]),_:1})],64))}},yb={__name:"HomeView",setup(t){return(e,n)=>(Ie(),Ne("main",null,[ut(_b)]))}},vb=xy({history:X_("/"),routes:[{path:"/",name:"home",component:yb},{path:"/about",name:"about",component:()=>yA(()=>import("./AboutView-dPdlKnec.js"),__vite__mapDeps([0,1]))}]}),oc=S_(gA);oc.use(O_());oc.use(vb);oc.mount("#app");export{dn as _,Z as a,Ne as c,Ie as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-dPdlKnec.js","assets/AboutView-ug8e6cRs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}