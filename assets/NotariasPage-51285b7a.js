import{r as R}from"./index-c50fff99.js";import{u as b}from"./selectes-cab0842d.js";import{g as s,x as H,l as M,j as h,r as l,o as m,a5 as A,a6 as n,a,u as B,w as d,L as c,F as z,ab as D,c as U,a8 as v}from"./quill-blot-formatter-d287386b.js";const k={class:"notary-container"},G={class:"notary-filter"},x={class:"notary-stiky"},P={class:"nt-input-filter"},F={style:{"margin-top":"1rem"}},K={class:"list-notaries"},V={class:"notaries-wrapper"},$=["innerHTML"],j={class:"notary-info-2"},q=["innerHTML"],Q={class:"notary-info-2",style:{"margin-top":"1.5rem"}},Y=["innerHTML"],J={class:"notary-info-2"},W=["innerHTML"],X={class:"notary-info-2",style:{"margin-top":"1.5rem"}},Z=["innerHTML"],sn={__name:"NotariasPage",setup(nn){const p=s(["0"]),N=s(window.innerHeight-100),i=b(),y=s([]),L=s(!1);s(null);const r=s(null),u=s(null);i.$patch({cities:i.cities}),i.fetchCities();const _=()=>{N.value=window.innerHeight-230},g=(o,e)=>{const f=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)},T=async()=>{try{L.value=!0;const o={...r.value&&{name:r.value},...u.value&&{city_id:u.value}},e=await R({url:"public/notaries-filters",method:"GET",params:o});y.value=e.data}catch(o){console.error("Error de red:",o)}finally{L.value=!1}};return H(()=>{window.removeEventListener("resize",_)}),M(()=>{window.addEventListener("resize",_),_(),T()}),h(p,o=>{console.log(o)}),(o,e)=>{const f=l("a-input"),I=l("a-select"),w=l("a-button"),C=l("a-tag"),E=l("a-collapse-panel"),O=l("a-collapse");return m(),A("section",k,[n("div",G,[n("div",x,[e[6]||(e[6]=n("h1",null,"CATÁLOGO DE NOTARIAS 2025",-1)),e[7]||(e[7]=n("h3",null," SI EL CAPITAL > 1 UIT (S/.5150) ADICIONAL PAGARÁ GASTOS REGISTRALES EN CUALQUIER NOTARIA ",-1)),n("div",P,[n("div",null,[e[3]||(e[3]=n("label",null,"Buscar por nombre de notaria",-1)),a(f,{value:r.value,"onUpdate:value":e[0]||(e[0]=t=>r.value=t)},null,8,["value"])]),n("div",F,[e[4]||(e[4]=n("label",null,"FILTRAR POR REGIÓN",-1)),a(I,{style:{width:"100%"},placeholder:"Buscar por Provincia",value:u.value,"onUpdate:value":e[1]||(e[1]=t=>u.value=t),"show-search":"",options:B(i).cities,"filter-option":g},null,8,["value","options"])]),a(w,{type:"primary",class:"btn-produce",style:{width:"100%","margin-top":"1.5rem"},onClick:T},{default:d(()=>e[5]||(e[5]=[c("BUSCAR")])),_:1})])])]),n("div",K,[a(O,{activeKey:p.value,"onUpdate:activeKey":e[2]||(e[2]=t=>p.value=t)},{default:d(()=>[(m(!0),A(z,null,D(y.value,(t,S)=>(m(),U(E,{key:S,header:`${t.name}`},{default:d(()=>[n("div",V,[n("div",null,[n("div",null,[a(C,{color:"blue"},{default:d(()=>[c(v(t.city.name),1)]),_:2},1024),n("span",null,v(t.province.name),1),e[8]||(e[8]=c(" - ")),n("span",null,v(t.district.name),1),e[9]||(e[9]=c(" - ")),n("span",null,v(t.address),1)]),n("div",null,[n("div",{class:"notary-info",innerHTML:t.infocontacto},null,8,$)])]),n("div",null,[n("div",j,[e[10]||(e[10]=n("h4",{class:"n-info-title"},"GASTOS NOTARIALES",-1)),n("div",{innerHTML:t.price},null,8,q)]),n("div",Q,[e[11]||(e[11]=n("h4",{class:"n-info-title"},"CONDICIONES",-1)),n("div",{innerHTML:t.conditions},null,8,Y)])]),n("div",null,[n("div",J,[e[12]||(e[12]=n("h4",{class:"n-info-title"},"SOCIO O INTERVINIENTE ADICIONAL",-1)),n("div",{innerHTML:t.sociointerveniente},null,8,W)]),n("div",null,[n("div",X,[e[13]||(e[13]=n("h4",{class:"n-info-title"},"BIOMETRICO",-1)),n("div",{innerHTML:t.biometrico},null,8,Z)])])])])]),_:2},1032,["header"]))),128))]),_:1},8,["activeKey"])])])}}};export{sn as default};
