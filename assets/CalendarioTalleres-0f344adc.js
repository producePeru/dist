import{L as T,r as u,j as L,b as p,o as n,d as s,e as a,c as m,w as _,h as N,F as g,y as R,v as B,t as r,q as $,M as S,i,p as V,f as q}from"./index-79af4362.js";import"./es-ec42f3d3.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const F={style:{width:"100%",border:"1px solid #d9d9d9",borderRadius:"4px",padding:"1rem"}},I={class:"events"},M={key:0,class:"notes-month"},j={key:0,class:"details-modal"},G=["href"],P={__name:"CalendarioTalleres",setup(U){T.locale("es");const v=u(!1),k=u(),c=u({}),l=u(),f=t=>{const e=`${t.year()}-${t.month()+1}-${t.date()}`;return c.value[e]||[]},y=t=>({8:"20 talleres",9:"10 talleres"})[t.month()],h=(t,e)=>{console.log(t,e)},x=t=>{C(t.slug),v.value=!0},C=async t=>{l.value=null;try{const e=await q({url:`/get-workshop-slug/${t}`,method:"GET"});l.value=e.workshop}catch(e){console.error("Error de red:",e)}};return L(async()=>{try{const t=await R({url:"/workshop/bydate",method:"GET"});c.value=t}catch(t){console.error("Error de red:",t)}}),(t,e)=>{const D=p("a-badge"),b=p("a-calendar"),w=p("a-skeleton"),E=p("a-modal");return n(),s(g,null,[e[11]||(e[11]=a("h3",null,"CALENDARIO DE TALLERES",-1)),e[12]||(e[12]=a("br",null,null,-1)),a("div",F,[m(b,{locale:N(S),value:k.value,"onUpdate:value":e[0]||(e[0]=o=>k.value=o),onPanelChange:h},{dateCellRender:_(({current:o})=>[a("ul",I,[(n(!0),s(g,null,B(f(o),d=>(n(),s("li",{key:d.content},[m(D,{class:"hover-workshop",status:d.type,text:d.content,onClick:O=>x(d)},null,8,["status","text","onClick"])]))),128))])]),monthCellRender:_(({current:o})=>[y(o)?(n(),s("div",M,[a("section",null,r(y(o)),1),e[2]||(e[2]=a("span",null,"Backlog number",-1))])):$("",!0)]),_:1},8,["locale","value"])]),m(E,{open:v.value,"onUpdate:open":e[1]||(e[1]=o=>v.value=o),title:"Detalles del taller",width:"400px",footer:null},{default:_(()=>[l.value?(n(),s("div",j,[e[3]||(e[3]=a("b",null,"Tema",-1)),e[4]||(e[4]=i()),a("span",null,r(l.value.title),1),e[5]||(e[5]=a("b",null,"Fecha y hora del taller: ",-1)),e[6]||(e[6]=i()),a("span",null,r(l.value.workshop_date),1),e[7]||(e[7]=a("b",null,"Exponente: ",-1)),e[8]||(e[8]=i()),a("span",null,r(l.value.exponent_name),1),e[9]||(e[9]=a("b",null,"LInk:",-1)),e[10]||(e[10]=i()),a("a",{href:l.value.link,target:"_blank"},r(l.value.link),9,G)])):(n(),V(w,{key:1}))]),_:1},8,["open"])],64)}}},J=A(P,[["__scopeId","data-v-304e5a3e"]]);export{J as default};
