import{a as C}from"./chunk-GDFTCIRQ.js";import{Hb as s,Ib as p,La as k,Ma as I,R as v,X as S,a as b,pa as w}from"./chunk-BZGWWIDY.js";import{a as e,b as g,e as f}from"./chunk-KB6NIWCL.js";var O=new WeakMap,a=Symbol("STATE_SOURCE");function d(t,...n){t[a].update(o=>n.reduce((i,r)=>e(e({},i),typeof r=="function"?r(i):r),o)),q(t)}function U(t){return t[a]()}function K(t){return O.get(t[a][b])||[]}function q(t){let n=K(t);for(let o of n){let i=p(()=>U(t));o(i)}}function D(t){let n=p(()=>t());return G(n)?new Proxy(t,{get(o,i){return i in n?(k(o[i])||Object.defineProperty(o,i,{value:s(()=>o()[i]),configurable:!0}),D(o[i])):o[i]}}):t}function G(t){return t?.constructor===Object}function M(...t){let n=[...t],o=typeof n[0]=="function"?{}:n.shift(),i=n;return(()=>{class c{constructor(){let u=i.reduce((l,H)=>H(l),L()),{stateSignals:m,computedSignals:E,methods:W,hooks:x}=u,y=e(e(e({},m),E),W);this[a]=o.protectedState===!1?u[a]:u[a].asReadonly();for(let l in y)this[l]=y[l];let{onInit:P,onDestroy:j}=x;P&&P(),j&&S(w).onDestroy(j)}static \u0275fac=function(m){return new(m||c)};static \u0275prov=v({token:c,factory:c.\u0275fac,providedIn:o.providedIn||null})}return c})()}function L(){return{[a]:I({}),stateSignals:{},computedSignals:{},methods:{},hooks:{}}}function R(t){return n=>{let o=t(e(e({},n.stateSignals),n.computedSignals));return Object.keys(o),g(e({},n),{computedSignals:e(e({},n.computedSignals),o)})}}function T(t){return n=>{let o=t(e(e(e({[a]:n[a]},n.stateSignals),n.computedSignals),n.methods));return Object.keys(o),g(e({},n),{methods:e(e({},n.methods),o)})}}function A(t){return n=>{let o=typeof t=="function"?t():t,i=Object.keys(o);n[a].update(c=>e(e({},c),o));let r=i.reduce((c,h)=>{let u=s(()=>n[a]()[h]);return g(e({},c),{[h]:D(u)})},{});return g(e({},n),{stateSignals:e(e({},n.stateSignals),r)})}}var N={categories:[],pagePagination:0},tt=M({providedIn:"root"},A(N),R(({categories:t,pagePagination:n})=>({categories:s(()=>t()),categoriesCount:s(()=>t().length),categoriesPaginate:s(()=>t().length/4),pagePagination:s(()=>n())})),T((t,n=S(C))=>({loadCategories(){return f(this,null,function*(){d(t,{categories:yield n.getCategorias()})})},nextPagePaginator(){return f(this,null,function*(){t.pagePagination()+1<=t.categoriesPaginate()&&d(t,{pagePagination:t.pagePagination()+1})})},previousPagePaginator(){return f(this,null,function*(){t.pagePagination()-1>=0&&d(t,{pagePagination:t.pagePagination()-1})})},resetPagePaginator(){return f(this,null,function*(){d(t,{pagePagination:0})})}})));export{tt as a};