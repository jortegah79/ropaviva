import{a as z}from"./chunk-M45WQZJG.js";import{a as j}from"./chunk-GDFTCIRQ.js";import{g as D}from"./chunk-I4ZRW2B3.js";import{l as I,m as g}from"./chunk-DJ2YMLRA.js";import{$a as o,Fa as s,Hb as P,Ma as S,Ra as k,Ua as p,X as u,Xa as F,Ya as f,Za as C,_a as y,ab as n,ba as m,bb as c,cb as T,db as v,eb as h,ka as x,la as b,mb as _,nb as E,qb as d,sb as O,ua as w,va as M}from"./chunk-BZGWWIDY.js";import"./chunk-KB6NIWCL.js";function N(t,e){if(t&1&&(o(0,"div",2),c(1,"img",3),n()),t&2){let l=e.$implicit;s(),p("srcset",l)}}var B=(()=>{let e=class e{constructor(){this.listImages=S(["assets/carrusel/image1.jpg","assets/carrusel/image2.jpg","assets/carrusel/image3.jpg"]),this.images=P(()=>this.listImages())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-carrusel"]],standalone:!0,features:[d],decls:4,vars:0,consts:[["id","carrusel","data-bs-ride","carousel",1,"carousel","slide","carousel-fade","border","border-2","border-dark"],[1,"carousel-inner"],["data-bs-interval","15000",1,"carousel-item","active"],[1,"image1",3,"srcset"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"div",1),C(2,N,2,1,"div",2,f),n()()),i&2&&(s(2),y(a.images()))},dependencies:[g],styles:[".image1[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .image3[_ngcontent-%COMP%]{width:100vw;height:80vh;background-size:cover;background-position:center}"]});let t=e;return t})();var U=t=>({"background-image":t}),V=(()=>{let e=class e{constructor(){this.category=M(),this.emitCategory=w()}toCategory(r){this.emitCategory.emit(r)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["store-categoria"]],inputs:{category:[1,"category"]},outputs:{emitCategory:"emitCategory"},standalone:!0,features:[d],decls:4,vars:4,consts:[[1,"text-center","my-2",2,"cursor","pointer",3,"click"],[1,"rounded-3","category","mb-3",3,"ngStyle"],[1,"card-title","fs-4","fw-bold","text-indigo"]],template:function(i,a){i&1&&(o(0,"div",0),v("click",function(){return a.toCategory(a.category().id)}),c(1,"div",1),o(2,"h5",2),_(3),n()()),i&2&&(s(),p("ngStyle",O(2,U,"url("+a.category().imagenUrl+")")),s(2),E(a.category().name))},dependencies:[g,I],styles:[".category[_ngcontent-%COMP%]{transition:all .75s ease;width:15vw;height:15vw;background-size:100%;background-position:center}.category[_ngcontent-%COMP%]:hover{border:.25px solid black;box-shadow:0 0 3px 1px #55a,-2px -2px 3px 1px #99a,3px 3px 5px 2px #bbf;background-size:115%}"]});let t=e;return t})();function R(t,e){if(t&1){let l=T();o(0,"div",8)(1,"store-categoria",9),v("emitCategory",function(i){x(l);let a=h(2);return b(a.toCategory(i))}),n()()}if(t&2){let l=h().$implicit;s(),p("category",l)}}function q(t,e){if(t&1&&k(0,R,2,1,"div",8),t&2){let l=e.$implicit;F(l.status?0:-1)}}var se=(()=>{let e=class e{toCategory(r){this.router.navigateByUrl(`store/productos/${r}`)}constructor(){this.categoriesService=u(j),this.router=u(D),this.store=u(z),this.store.loadCategories()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-inicio"]],standalone:!0,features:[d],decls:13,vars:0,consts:[[1,"d-block","d-lg-none","logo-movil"],["src","assets/logo/logo_ropavivaa.png",1,"w-100"],["src","assets/logotipo.png",1,"d-none","d-lg-block","logo-imagen"],[1,"d-none","d-lg-block","inicio"],[1,"container-fluid"],[1,"container","mb-5"],[1,"my-3","text-primary"],[1,"row"],[1,"col-6","col-md-4","col-lg-3"],[3,"emitCategory","category"]],template:function(i,a){i&1&&(o(0,"div",0),c(1,"img",1),n(),c(2,"img",2),o(3,"div",3),c(4,"app-carrusel"),n(),o(5,"div",4)(6,"section",5)(7,"header")(8,"h3",6),_(9,"Nuestras categor\xEDas"),n()(),o(10,"article",7),C(11,q,1,1,null,null,f),n()()()),i&2&&(s(11),y(a.store.categories()))},dependencies:[g,B,V],styles:["img.logo-imagen[_ngcontent-%COMP%]{width:300px;position:absolute;top:0;z-index:97}img[_ngcontent-%COMP%] > .logo-movil[_ngcontent-%COMP%]{width:100vw;position:absolute;top:0}.inicio[_ngcontent-%COMP%]{margin:5px 0}"]});let t=e;return t})();export{se as InicioComponent};
