import{b as u,o as n,d as i,c as l,e as t,i as p,t as h,w as f,p as x,j as b,r as m,k,q as g,F as A,z as y}from"./index-990720bf.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const $=a=>(x("data-v-a1893c98"),a=a(),b(),a),C={class:"report-box"},M=$(()=>t("div",{class:"title"},[t("h4",null,"Avance de MYPE registrados")],-1)),B={class:"info"},E={class:"info-head"},R={class:"info-head"},D={class:"info-head"},I={__name:"ChartMeta",props:["total"],setup(a){const e=a,s={chart:{id:"radial-bar-chart"},plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return`${e.total.porcAvance}%`}}}}},labels:["Categoria 1"]},c=[e.total.porcAvance];return(v,r)=>{const _=u("apexchart"),o=u("a-tag");return n(),i("div",C,[M,l(_,{type:"radialBar",height:"200",options:s,series:c}),t("div",B,[t("div",null,[t("span",E,[p("Meta al "),t("b",null,h(a.total.year),1)]),l(o,{color:"success",class:"info-tag"},{default:f(()=>[p(h(a.total.meta),1)]),_:1})]),t("div",null,[t("span",R,[p("Avance "),t("b",null,h(a.total.porcAvance)+"%",1)]),t("h3",null,h(a.total.avance),1)]),t("div",null,[t("span",D,[p("Brecha "),t("b",null,h(a.total.porcBrecha)+"%",1)]),l(o,{color:"warning",class:"info-tag"},{default:f(()=>[p(h(a.total.brecha),1)]),_:1})])])])}}},S=w(I,[["__scopeId","data-v-a1893c98"]]);const T={class:"report-box"},O=t("div",{class:"title"},[t("h4",null,"Avance Anual")],-1),z={__name:"ChartPorAnios",props:["total"],setup(a){const e=a,s={chart:{id:"basic-bar",toolbar:{show:!1}},xaxis:{categories:e.total.categories}},c=[{name:"Cantidad",data:e.total.data}];return(v,r)=>{const _=u("apexchart");return n(),i("div",T,[O,l(_,{type:"bar",height:"240",options:s,series:c})])}}};const G={class:"report-box"},L=t("div",{class:"title"},[t("h4",null,"Avance mensual del año 2023")],-1),P={__name:"ChartAvanceMensual",props:["total"],setup(a){const e=a,s=m("2023"),c={chart:{id:"basic-bar",toolbar:{show:!1}},xaxis:{categories:e.total[s.value].categories}},v=[{name:"Cantidad",data:e.total[s.value].data}];return(r,_)=>{const o=u("apexchart");return n(),i("div",G,[L,l(o,{type:"bar",height:"240",options:c,series:v})])}}};const d=a=>(x("data-v-b32a83cf"),a=a(),b(),a),Y=d(()=>t("h3",null,"TALLERES DE RUTA DIGITAL",-1)),N=d(()=>t("br",null,null,-1)),V={class:"reports"},q={class:"wrapper"},F={key:0,class:"skeleton-charging"},j={class:"wrapper"},U={key:0,class:"skeleton-charging"},H={class:"wrapper"},J={key:0,class:"skeleton-charging"},K=d(()=>t("div",null,null,-1)),Q=d(()=>t("div",null,null,-1)),W=d(()=>t("div",null,null,-1)),X=d(()=>t("div",null,null,-1)),Z=d(()=>t("div",null,null,-1)),tt={__name:"ReportesRD",setup(a){const e=m(null),s=m(null),c=m(null);return k(async()=>{try{const r=await y({url:"/mype-registered",method:"GET"});e.value=r.data;const _=await y({url:"/mype-anual-progress",method:"GET"});s.value=_;const o=await y({url:"/mype-month-progress",method:"GET"});c.value=o}catch(r){console.error("Error de red:",r)}}),(r,_)=>{const o=u("a-skeleton");return n(),i(A,null,[Y,N,t("div",V,[t("div",q,[e.value?(n(),g(S,{key:1,total:e.value},null,8,["total"])):(n(),i("div",F,[l(o,{active:"",paragraph:{rows:6}})]))]),t("div",j,[s.value?(n(),g(z,{key:1,total:s.value},null,8,["total"])):(n(),i("div",U,[l(o,{active:"",paragraph:{rows:6}})]))]),t("div",H,[c.value?(n(),g(P,{key:1,total:c.value},null,8,["total"])):(n(),i("div",J,[l(o,{active:"",paragraph:{rows:6}})]))]),K,Q,W,X,Z])],64)}}},st=w(tt,[["__scopeId","data-v-b32a83cf"]]);export{st as default};
