import{r as o,v as C,k as E,b as c,o as h,d as p,e,c as u,h as O,w as f,F as S,x as w,f as g,i as d,t as a}from"./index-a89c85d3.js";import{u as H}from"./selectes-f79054a0.js";const M={class:"notaries"},R={class:"sticky"},k=e("h1",{class:"notarie-title"},"CATÁLOGO DE NOTARIAS",-1),z=e("h3",{class:"notarie-title-2"}," SI EL CAPITAL > 1 UIT (S/.5150) ADICIONAL PAGARÁ GASTOS REGISTRALES EN CUALQUIER NOTARIA ",-1),B={class:"notaries-filter"},D={class:"notary-div"},U=e("label",null,"Buscar por nombre de notaria",-1),G={class:"notary-div"},P=e("label",null,"Por provincia",-1),F={class:"notaries-box-adrres"},V={class:"notaries-box-name"},q=["innerHTML"],Q=e("h4",{class:"notaries-box-h4"},"GASTOS NOTARIALES",-1),Y=["innerHTML"],$=e("h4",{class:"notaries-box-h4"},"CONDICIONES",-1),j=["innerHTML"],J=e("h4",{class:"notaries-box-h4"},"SOCIO O INTERVINIENTE ADICIONAL",-1),K=["innerHTML"],W=e("h4",{class:"notaries-box-h4",style:{display:"block"}},"BIOMETRICO: ",-1),X=["innerHTML"],Z=e("br",null,null,-1),ee=e("br",null,null,-1),se={__name:"NotariasPage",setup(ne){const A=o(window.innerHeight-100),l=H();o(1200);const m=o([]),b=o(!1);o(null);const i=o(null),r=o(null);l.$patch({cities:l.cities}),l.fetchCities();const _=()=>{A.value=window.innerHeight-230},I=(s,t)=>{const v=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(v)},L=async()=>{try{b.value=!0;const s={...i.value&&{name:i.value},...r.value&&{city_id:r.value}},t=await g({url:"public/notaries-filters",method:"GET",params:s});m.value=t.data}catch(s){console.error("Error de red:",s)}finally{b.value=!1}};return C(()=>{window.removeEventListener("resize",_)}),E(()=>{window.addEventListener("resize",_),_(),L()}),(s,t)=>{const v=c("a-input"),T=c("a-select"),N=c("a-button"),x=c("a-tag");return h(),p("div",M,[e("div",R,[k,z,e("div",B,[e("div",D,[U,u(v,{value:i.value,"onUpdate:value":t[0]||(t[0]=n=>i.value=n)},null,8,["value"])]),e("div",G,[P,u(T,{placeholder:"Buscar por Provincia",value:r.value,"onUpdate:value":t[1]||(t[1]=n=>r.value=n),"show-search":"",options:O(l).cities,"filter-option":I},null,8,["value","options"])]),u(N,{type:"primary",class:"btn-produce",onClick:L},{default:f(()=>[d("BUSCAR")]),_:1})])]),(h(!0),p(S,null,w(m.value,(n,y)=>(h(),p("div",{class:"notaries-wrapper notaries-box",key:y},[e("div",null,[u(x,{color:"blue",style:{"margin-bottom":"6px"}},{default:f(()=>[d(a(n.city.name),1)]),_:2},1024),e("div",F,[e("span",null,a(n.province.name),1),d(" - "),e("span",null,a(n.district.name),1),d(" - "),e("span",null,a(n.address),1)]),e("h3",V,a(n.name),1),e("div",{class:"notaries-box-html-2",innerHTML:n.infocontacto},null,8,q)]),e("div",null,[Q,e("div",{class:"notaries-box-html",innerHTML:n.price},null,8,Y)]),e("div",null,[$,e("div",{class:"notaries-box-html",innerHTML:n.conditions},null,8,j)]),e("div",null,[J,e("div",{class:"notaries-box-html",innerHTML:n.sociointerveniente},null,8,K),e("div",null,[W,e("span",{class:"notaries-box-html",innerHTML:n.biometrico},null,8,X)])])]))),128)),Z,ee])}}};export{se as default};