import{b as d,o as b,d as $,c as e,e as t,w as a,t as v,p as z,h as B,r as x,j as E,k as D,g as u}from"./index-ba4cf725.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const J={props:{title:{type:String,default:""},categories:{type:Array,default:[]},values:{type:Array,default:[]},height:{type:Number,default:300}},data(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!0,tools:{download:!0}}},xaxis:{categories:this.categories},title:{text:this.title,align:"center",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"18px",color:"#333"}}},series:this.values}}};function R(p,m,n,g,s,o){const r=d("apexchart");return b(),$("div",null,[e(r,{height:n.height,type:"bar",options:s.chartOptions,series:s.series},null,8,["height","options","series"])])}const C=A(J,[["render",R]]);const k={props:{meta:{type:Number,default:0},avance:{type:Number,default:0},porcentage:{type:Array,default:[]},title:{type:String,default:""}},data(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},plotOptions:{radialBar:{hollow:{size:"70%"}}},labels:["Total"],title:{text:this.title,align:"center",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"18px",color:"#333"}}},series:this.porcentage}}},O=p=>(z("data-v-65ab1a16"),p=p(),B(),p),I={class:"progress-info"},Y={class:"info-item"},G=O(()=>t("span",null,"Meta al 2024",-1)),P=O(()=>t("span",null,"100 %",-1)),U={class:"info-item"},V=O(()=>t("span",null,"Avance",-1)),F={class:"info-item"},W=O(()=>t("span",null,"Brecha",-1));function X(p,m,n,g,s,o){const r=d("apexchart"),y=d("a-tag");return b(),$("div",null,[e(r,{height:"250",type:"radialBar",options:s.chartOptions,series:s.series},null,8,["options","series"]),t("div",I,[t("div",Y,[G,e(y,{class:"porcentage-tag",color:"success"},{default:a(()=>[t("h3",null,v(n.meta),1)]),_:1}),P]),t("div",U,[V,e(y,{class:"porcentage-tag",color:"processing"},{default:a(()=>[t("h3",null,v(n.avance),1)]),_:1}),t("span",null,v(n.porcentage[0])+" % ",1)]),t("div",F,[W,e(y,{class:"porcentage-tag",color:"warning"},{default:a(()=>[t("h3",null,v(n.meta-n.avance),1)]),_:1}),t("span",null,v(100-n.porcentage[0])+" %",1)])])])}const j=A(k,[["render",X],["__scopeId","data-v-65ab1a16"]]);const q={data(){return{series:[44,55,13,43,22],chartOptions:{chart:{width:450,type:"pie",toolbar:{show:!0,tools:{download:!0}}},labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}}},L={id:"chart",class:"pie-pie"};function H(p,m,n,g,s,o){const r=d("apexchart");return b(),$("div",L,[e(r,{type:"pie",height:"290px",width:"100%",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const K=A(q,[["render",H]]),Q={props:{colors:{type:Array,default:[]}},data(){return{series:[{data:[21,22,10]}],chartOptions:{chart:{height:350,type:"bar"},colors:this.colors,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:[["John","Doe"],["Joe","Smith"],["Jake","Williams"]],labels:{style:{fontSize:"12px"}}}}}}},Z={id:"chart"};function ee(p,m,n,g,s,o){const r=d("apexchart");return b(),$("div",Z,[e(r,{type:"bar",height:"280",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const te=A(Q,[["render",ee]]);const ae={class:"reports"},se=t("h3",null,"Indicadores de Ruta Digital",-1),oe=t("br",null,null,-1),ne={class:"wrapper-chart"},le=t("div",{class:"head-chars"},[t("text",{class:"title"},"Avance de MYPE registrados")],-1),re={class:"wrapper-chart"},ce=t("div",{class:"head-chars"},[t("text",{class:"title"},"Avance Anual")],-1),ie={class:"wrapper-chart"},ue={class:"head-chars"},de={class:"title"},pe={class:"wrapper-chart"},_e={class:"head-chars"},he={class:"title"},ve={class:"wrapper-chart"},fe={class:"head-chars"},me={class:"title"},ge=5e4,we={__name:"ReportesRD",setup(p){const m=x(null),n=x([]),g=x([]),s=x([{name:"Avance anual",data:[]}]),o=x("2023"),r=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],y=x([{name:"Avance mensual",data:[]}]),N=["#ffe58f","#1677ff","#E46651"],S=async()=>{try{const i=(await D({url:"/digital-route/report-months",method:"GET"})).reports_years[o.value],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(_=>{const h=i[_];return h!==null?h:0});y.value[0].data=l}catch(c){console.error("Error de red:",c)}},M=()=>{S()},T=async()=>{try{const c=await D({url:"/digital-route/reports",method:"GET"});m.value=c.total_mypes;const l=c.total_mypes/5e4*100;n.value.push(Math.round(l*100)/100);const _=c.count_years;_.map(h=>{g.value.push(h.anio)}),s.value[0].data=_.map(h=>h.total||0)}catch(c){console.error("Error de red:",c)}};return E(S(),T()),(c,i)=>{const f=d("a-col"),l=d("a-select-option"),_=d("a-select"),h=d("a-row");return b(),$("div",ae,[se,oe,e(h,{gutter:16},{default:a(()=>[e(f,{class:"years-report",xs:24,sm:24,md:24,lg:12,xl:8},{default:a(()=>[t("div",ne,[le,e(j,{meta:ge,avance:m.value,porcentage:n.value},null,8,["avance","porcentage"])])]),_:1}),e(f,{class:"years-report",xs:24,sm:24,md:24,lg:12,xl:8},{default:a(()=>[t("div",re,[ce,e(C,{categories:g.value,values:s.value,height:294},null,8,["categories","values"])])]),_:1}),e(f,{class:"years-report",xs:24,sm:24,md:24,lg:24,xl:8},{default:a(()=>[t("div",ie,[t("div",ue,[t("text",de,"Avance mensual del año "+v(o.value),1),e(_,{ref:"select",value:o.value,"onUpdate:value":i[0]||(i[0]=w=>o.value=w),style:{width:"80px"},onChange:M},{default:a(()=>[e(l,{value:"2023"},{default:a(()=>[u("2023")]),_:1}),e(l,{value:"2022"},{default:a(()=>[u("2022")]),_:1}),e(l,{value:"2021"},{default:a(()=>[u("2021")]),_:1})]),_:1},8,["value"])]),e(C,{categories:r,values:y.value,height:280},null,8,["values"])])]),_:1}),e(f,{class:"years-report",xs:24,sm:24,md:24,lg:24,xl:8},{default:a(()=>[t("div",pe,[t("div",_e,[t("text",he,"Nivel digitalización del año "+v(o.value),1),e(_,{ref:"select",value:o.value,"onUpdate:value":i[1]||(i[1]=w=>o.value=w),style:{width:"80px"},onChange:M},{default:a(()=>[e(l,{value:"2023"},{default:a(()=>[u("2023")]),_:1}),e(l,{value:"2022"},{default:a(()=>[u("2022")]),_:1}),e(l,{value:"2021"},{default:a(()=>[u("2021")]),_:1})]),_:1},8,["value"])]),e(te,{colors:N})])]),_:1}),e(f,{class:"years-report",xs:24,sm:24,md:24,lg:24,xl:8},{default:a(()=>[t("div",ve,[t("div",fe,[t("text",me,"Nivel digitalización del año "+v(o.value),1),e(_,{ref:"select",value:o.value,"onUpdate:value":i[2]||(i[2]=w=>o.value=w),style:{width:"80px"},onChange:M},{default:a(()=>[e(l,{value:"2023"},{default:a(()=>[u("2023")]),_:1}),e(l,{value:"2022"},{default:a(()=>[u("2022")]),_:1}),e(l,{value:"2021"},{default:a(()=>[u("2021")]),_:1})]),_:1},8,["value"])]),e(K)])]),_:1})]),_:1})])}}};export{we as default};
