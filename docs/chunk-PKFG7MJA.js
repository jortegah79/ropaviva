import{c as h}from"./chunk-F4JUOM6K.js";import{Da as d,L as a,M as p,S as u,ba as f,ia as l,lb as g}from"./chunk-4Q5WTUPO.js";function y(n,e){let i=!e?.manualCleanup;i&&!e?.injector&&f(y);let r=i?e?.injector?.get(l)??u(l):null,o=m(e?.equal),s;e?.requireSync?s=d({kind:0},{equal:o}):s=d({kind:1,value:e?.initialValue},{equal:o});let b=n.subscribe({next:t=>s.set({kind:1,value:t}),error:t=>{if(e?.rejectErrors)throw t;s.set({kind:2,error:t})}});if(e?.requireSync&&s().kind===0)throw new a(601,!1);return r?.onDestroy(b.unsubscribe.bind(b)),g(()=>{let t=s();switch(t.kind){case 1:return t.value;case 2:throw t.error;case 0:throw new a(601,!1)}},{equal:e?.equal})}function m(n=Object.is){return(e,i)=>e.kind===1&&i.kind===1&&n(e.value,i.value)}var c={production:!1,baseurl:"https://api.escuelajs.co/api/v1/",categories:"categories",products:"products"};var $=(()=>{let e=class e{constructor(){this.http=u(h)}getCategories(){let r=`${c.baseurl}${c.categories} `;return this.http.get(`${r}`)}getCategory(r){let o=`${c.baseurl}${c.categories}/${r} `;return this.http.get(o)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{y as a,c as b,$ as c};
