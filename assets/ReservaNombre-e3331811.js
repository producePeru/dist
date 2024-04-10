import{u as J}from"./selectes-1cf52435.js";import{r as y,a as H,b as u,o as l,d as S,c as s,w as r,e as U,F as D,D as K,h as n,q as d,s as c,U as Q,i as N,t as X,V as Y,z as k,m as C}from"./index-ce034a82.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const ee={codesunarp:{type:"iText",label:"Código SID sunarp",name:"codesunarp",required:!0,message:"Escribir apellido",disabled:!1},economicsector_id:{type:"iSelect",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},regime_id:{type:"iSelect",label:"Tipo de régimen societario",name:"regime_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!1,message:"Escribir apellido",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1}},re={name:{type:"iText",label:"Nombre empresa",name:"name",required:!0,message:"Escribir apellido",disabled:!1},numbernotary:{type:"iText",label:"Número de solicitud de envio a Notaría",name:"numbernotary",required:!1,message:"Seleccionar departamento",disabled:!1},notary_id:{type:"iSelect",label:"Notaría",name:"notary_id",required:!1,message:"Seleccionar notaría",disabled:!1}},ne={ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir número de RUC",disabled:!1,max:9,min:9}},de={detailprocedure_id:{type:"iSelect",label:"Detalle del trámite",name:"detailprocedure_id",required:!0,message:"Escribir número de RUC",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},economicsector_id:{type:"iSelect",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1}},ce={component_id:{type:"iSelect",label:"Componente",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!1},theme_id:{type:"iSelectWrite",label:"Tema del componente",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},observations:{type:"iTextarea",label:"Observaciones",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}};const ae={class:"wrapper-booking"},ie={class:"grid-booking"},te={__name:"ReservaNombre",props:["info"],emits:["closeDraw"],setup(w,{emit:R}){const W=Y({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),T=JSON.parse(localStorage.getItem("profile")),A=w,E=R,f=y(!1),v=y(null),h=y(!0),g=y(!1),i=J();i.$patch({cities:i.cities}),i.$patch({modalities:i.modalities}),i.$patch({economicSectors:i.economicSectors}),i.$patch({comercialActivities:i.comercialActivities}),i.$patch({regimes:i.regimes}),i.fetchEconomicSectors(),i.fetchComercialActivities(),i.fetchRegimes(),i.fetchCities(),i.fetchModalities();const a=H({task:1,codesunarp:null,economicsector_id:null,comercialactivity_id:null,regime_id:null,city_id:null,province_id:null,district_id:null,address:null,modality_id:null,user_id:T.user_id}),F=()=>{var t;(t=i.regimes)!=null&&t.length&&(h.value=!1)},P=async()=>{try{f.value=!0;const t={name:v.value};(await k({url:"create/comercial-activities",method:"POST",data:t})).status==200&&(v.value=null,i.fetchComercialActivities())}catch(t){console.log(t)}finally{f.value=!1}},z=t=>{a.province_id=null,a.district_id=null,i.fetchProvinces(t)},O=t=>{a.district_id=null,i.fetchDistricts(t)},b=(t,p)=>{const m=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return p.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)},I=async()=>{g.value=!0,a.people_id=A.info.id;try{const t=await k({url:"formalization/ruc20-step1",method:"POST",data:a});t.status===200&&(C.success(t.message),a.codesunarp=null,a.economicsector_id=null,a.comercialactivity_id=null,a.regime_id=null,a.city_id=null,a.province_id=null,a.district_id=null,a.address=null,a.modality_id=null,E("closeDraw",!0))}catch(t){console.log("Error: "+t)}finally{g.value=!1}},V=()=>{C.warning("Debes de completar todos los espacios requeridos")};return(t,p)=>{const m=u("a-select"),_=u("a-form-item"),L=u("a-divider"),q=u("a-input"),x=u("a-button"),$=u("a-space"),B=u("a-form"),M=u("a-spin");return l(),S("div",ae,[s(M,{spinning:h.value},{default:r(()=>[s(B,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:I,onFinishFailed:V},{default:r(()=>[U("div",ie,[(l(!0),S(D,null,K(n(ee),(e,j)=>(l(),S(D,{key:j},[e.type==="iSelect"?(l(),d(_,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[e.name=="regime_id"?(l(),d(m,{key:0,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:n(i).regimes},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="economicsector_id"?(l(),d(m,{key:1,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:n(i).economicSectors},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="modality_id"?(l(),d(m,{key:2,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:n(i).modalities},null,8,["value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iSelectWrite"?(l(),d(_,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[e.name=="comercialactivity_id"?(l(),d(m,{key:0,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:n(i).comercialActivities,"filter-option":b},{dropdownRender:r(({menuNode:o})=>[s(n(W),{vnodes:o},null,8,["vnodes"]),s(L,{style:{margin:"4px 0"}}),s($,{style:{padding:"4px 8px"}},{default:r(()=>[s(q,{ref_for:!0,ref:"inputRef",value:v.value,"onUpdate:value":p[0]||(p[0]=G=>v.value=G),placeholder:"Nueva actividad"},null,8,["value"]),s(x,{type:"text",onClick:P,loading:f.value},{icon:r(()=>[s(n(Q))]),default:r(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):c("",!0),e.name=="city_id"?(l(),d(m,{key:1,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:n(i).cities,"filter-option":b,onChange:z},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="province_id"?(l(),d(m,{key:2,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:n(i).provinces,"filter-option":b,onChange:O},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="district_id"?(l(),d(m,{key:3,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:n(i).districts,"filter-option":b},null,8,["value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iText"?(l(),d(_,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email,max:e.max}]},{default:r(()=>[s(q,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,disabled:e.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),U("div",null,X(F()),1),s(_,null,{default:r(()=>[s(x,{class:"btn-produce",type:"primary","html-type":"submit",loading:g.value},{default:r(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},me=Z(te,[["__scopeId","data-v-90b2e185"]]);export{me as R,re as a,ce as b,ne as f,de as r};
