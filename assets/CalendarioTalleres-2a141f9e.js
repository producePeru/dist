import{r as u,l as B,b as p,o as s,d as r,e as t,c as v,w as m,F as g,n as I,v as L,t as d,s as N,i,B as R,p as $,j as V,f as A}from"./index-663e7fda.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const l=c=>($("data-v-0629bbb2"),c=c(),V(),c),q=l(()=>t("h3",null,"CALENDARIO DE TALLERES",-1)),G=l(()=>t("br",null,null,-1)),M={style:{width:"100%",border:"1px solid #d9d9d9",borderRadius:"4px",padding:"1rem"}},P={class:"events"},U={key:0,class:"notes-month"},j=l(()=>t("span",null,"Backlog number",-1)),K={key:0,class:"details-modal"},O=l(()=>t("b",null,"Tema",-1)),W=l(()=>t("b",null,"Fecha y hora del taller: ",-1)),z=l(()=>t("b",null,"Exponente: ",-1)),H=l(()=>t("b",null,"LInk:",-1)),J=["href"],Q={__name:"CalendarioTalleres",setup(c){const h=u(!1),k=u(),b=u({}),o=u(),f=e=>{const a=`${e.year()}-${e.month()+1}-${e.date()}`;return b.value[a]||[]},y=e=>({8:"20 talleres",9:"10 talleres"})[e.month()],x=(e,a)=>{console.log(e,a)},C=e=>{D(e.slug),h.value=!0},D=async e=>{o.value=null;try{const a=await A({url:`/get-workshop-slug/${e}`,method:"GET"});o.value=a.workshop}catch(a){console.error("Error de red:",a)}};return B(async()=>{try{const e=await I({url:"/workshop/bydate",method:"GET"});b.value=e}catch(e){console.error("Error de red:",e)}}),(e,a)=>{const w=p("a-badge"),E=p("a-calendar"),T=p("a-skeleton"),S=p("a-modal");return s(),r(g,null,[q,G,t("div",M,[v(E,{value:k.value,"onUpdate:value":a[0]||(a[0]=n=>k.value=n),onPanelChange:x},{dateCellRender:m(({current:n})=>[t("ul",P,[(s(!0),r(g,null,L(f(n),_=>(s(),r("li",{key:_.content},[v(w,{class:"hover-workshop",status:_.type,text:_.content,onClick:Y=>C(_)},null,8,["status","text","onClick"])]))),128))])]),monthCellRender:m(({current:n})=>[y(n)?(s(),r("div",U,[t("section",null,d(y(n)),1),j])):N("",!0)]),_:1},8,["value"])]),v(S,{open:h.value,"onUpdate:open":a[1]||(a[1]=n=>h.value=n),title:"Detalles del taller",width:"400px",footer:null},{default:m(()=>[o.value?(s(),r("div",K,[O,i(),t("span",null,d(o.value.title),1),W,i(),t("span",null,d(o.value.workshop_date),1),z,i(),t("span",null,d(o.value.exponent_name),1),H,i(),t("a",{href:o.value.link,target:"_blank"},d(o.value.link),9,J)])):(s(),R(T,{key:1}))]),_:1},8,["open"])],64)}}},te=F(Q,[["__scopeId","data-v-0629bbb2"]]);export{te as default};
