import{r as n,v as m,k as L,b as x,o as r,d as l,F as N,x as b,e,f,c as E,w as O,i as c,t}from"./index-400de86f.js";import{u as S}from"./selectes-0d937319.js";const C={class:"notaries"},w=e("div",{class:"notaries-wrapper"},[e("h1",{class:"notarie-title"},"CATÁLOGO DE NOTARIAS"),e("h3",{class:"notarie-title-2"},"SI EL CAPITAL > 1 UIT (S/.5150) ADICIONAL PAGARÁ GASTOS REGISTRALES EN CUALQUIER NOTARIA")],-1),y=e("br",null,null,-1),g={class:"notaries-box-adrres"},H={class:"notaries-box-name"},M={style:{display:"flex","align-items":"baseline"}},R=e("span",{class:"notaries-box-h4"},"BIOMETRICO: ",-1),D=["innerHTML"],G=e("h4",{class:"notaries-box-h4"},"GASTOS NOTARIALES",-1),k=["innerHTML"],B=e("h4",{class:"notaries-box-h4"},"CONDICIONES",-1),P=["innerHTML"],U=e("h4",{class:"notaries-box-h4"},"SOCIO O INTERVINIENTE ADICIONAL",-1),V=["innerHTML"],Q={__name:"NotariasPage",setup(z){const p=n(window.innerHeight-100),o=S();n(1200);const d=n([]),u=n(!1);n(null);const _=n(null),h=n(null);o.$patch({cities:o.cities}),o.fetchCities();const i=()=>{p.value=window.innerHeight-230},T=async()=>{try{u.value=!0;const a={..._.value&&{name:_.value},...h.value&&{city_id:h.value}},v=await f({url:"public/notaries-filters",method:"GET",params:a});d.value=v.data}catch(a){console.error("Error de red:",a)}finally{u.value=!1}};return m(()=>{window.removeEventListener("resize",i)}),L(()=>{window.addEventListener("resize",i),i(),T()}),(a,v)=>{const A=x("a-tag");return r(),l("div",C,[w,y,(r(!0),l(N,null,b(d.value,(s,I)=>(r(),l("div",{class:"notaries-wrapper notaries-box",key:I},[e("div",null,[E(A,{color:"blue"},{default:O(()=>[c(t(s.city.name),1)]),_:2},1024),e("div",g,[e("span",null,t(s.province.name),1),c(" - "),e("span",null,t(s.district.name),1),c(" - "),e("span",null,t(s.address),1)]),e("h3",H,t(s.name),1),e("div",M,[R,e("span",{class:"notaries-box-html",innerHTML:s.biometrico},null,8,D)])]),e("div",null,[G,e("div",{class:"notaries-box-html",innerHTML:s.price},null,8,k)]),e("div",null,[B,e("div",{class:"notaries-box-html",innerHTML:s.conditions},null,8,P)]),e("div",null,[U,e("div",{class:"notaries-box-html",innerHTML:s.sociointerveniente},null,8,V)])]))),128))])}}};export{Q as default};
