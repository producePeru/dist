import{u as re}from"./selectes-96cc7503.js";import{c as a,A as we,x as _e,r as y,a as ne,b as c,o as t,d as x,w as n,e as d,F as M,B as ee,h as g,q as _,s as l,X as te,i as N,t as U,Y as ue,y as J,m as K,f as Ue,T as Ce,V as Ie,P as ve,u as De,k as Ae,Z as qe,p as Re,j as Ne}from"./index-7f702c82.js";/* empty css                                                      */import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{S as Fe}from"./DrawerSolicitante.componente-6edd68eb.js";import"./es-f53d9377.js";var $e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const ze=$e;function pe(L){for(var I=1;I<arguments.length;I++){var D=arguments[I]!=null?Object(arguments[I]):{},s=Object.keys(D);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(D).filter(function(E){return Object.getOwnPropertyDescriptor(D,E).enumerable}))),s.forEach(function(E){Oe(L,E,D[E])})}return L}function Oe(L,I,D){return I in L?Object.defineProperty(L,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):L[I]=D,L}var me=function(I,D){var s=pe({},I,D.attrs);return a(we,pe({},s,{icon:ze}),null)};me.displayName="RedoOutlined";me.inheritAttrs=!1;const Te=me,Ee={codesunarp:{type:"iText",label:"Código SID sunarp",name:"codesunarp",required:!1,message:"Escribir el código SID sunarp",disabled:!1},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},regime_id:{type:"iSelect",label:"Tipo de régimen societario",name:"regime_id",required:!0,message:"Seleccionar el régimen societario",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!1,message:"Escribir apellido",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar la modalidad",disabled:!1}},Pe={name:{type:"iText",label:"Nombre empresa",name:"name",required:!0,message:"Escribir nombre de la empresa",disabled:!1},numbernotary:{type:"iText",label:"Número de solicitud de envio a Notaría",name:"numbernotary",required:!0,message:"Escribir número de solicitud de envio a Notaría",disabled:!1},city:{type:"iSelect",label:"Seleciona Provincia",name:"city",required:!1,message:"Buscar por provincia",disabled:!1},notary_id:{type:"iSelect",label:"Notaría",name:"notary_id",required:!0,message:"Seleccionar una notaría",disabled:!1}},Le={ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir número de RUC",disabled:!1,max:9,min:9}},Me={detailprocedure_id:{type:"iSelect",label:"Detalle del trámite",name:"detailprocedure_id",required:!0,message:"Seleccionar detalle del trámite",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad de atención",disabled:!1},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1}},We={component_id:{type:"iSelectWrite",label:"Componente",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!1},theme_id:{type:"iSelectWrite",label:"Tema del componente",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},observations:{type:"iTextarea",label:"Observaciones",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}},Ve={class:"wrapper-booking"},Ge={class:"grid-booking"},Ye={__name:"ReservaNombre",props:["info"],emits:["closeDraw"],setup(L,{emit:I}){const D=ue({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=_e(),E=JSON.parse(localStorage.getItem("profile")),j=L,P=I,z=y(!1),F=y(null),O=y(null),r=y(!0),q=y(!1),e=re();e.$patch({cities:e.cities}),e.$patch({modalities:e.modalities}),e.$patch({economicSectors:e.economicSectors}),e.$patch({comercialActivities:e.comercialActivities}),e.$patch({regimes:e.regimes}),e.fetchEconomicSectors(),e.fetchComercialActivities(),e.fetchRegimes(),e.fetchCities(),e.fetchModalities();const m=ne({task:1,codesunarp:null,economicsector_id:null,comercialactivity_id:null,regime_id:null,city_id:null,province_id:null,district_id:null,address:null,modality_id:null,user_id:E.user_id}),H=()=>{var i;(i=e.regimes)!=null&&i.length&&(r.value=!1)},V=async()=>{try{z.value=!0;const i={name:F.value};(await J({url:"create/comercial-activities",method:"POST",data:i})).status==200&&(F.value=null,e.fetchComercialActivities())}catch(i){console.log(i)}finally{z.value=!1}},o=async()=>{try{z.value=!0;const i={name:O.value};(await J({url:"create/economic-sector",method:"POST",data:i})).status==200&&(O.value=null,e.fetchEconomicSectors())}catch(i){console.log(i)}finally{z.value=!1}},h=i=>{m.province_id=null,m.district_id=null,e.fetchProvinces(i)},b=i=>{m.district_id=null,e.fetchDistricts(i)},w=(i,R)=>{const v=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return R.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(v)},S=async()=>{q.value=!0,m.people_id=j.info.id;try{const i=await J({url:"formalization/ruc20-step1",method:"POST",data:m});if(i.status===200){if(s.query.formalizaciondigital){let R={id:+s.query.formalizaciondigital,documentnumber:s.query.number};await J({url:"formalization/digital/update-attended",method:"PUT",data:R})}K.success(i.message),m.codesunarp=null,m.economicsector_id=null,m.comercialactivity_id=null,m.regime_id=null,m.city_id=null,m.province_id=null,m.district_id=null,m.address=null,m.modality_id=null,P("closeDraw",!0)}}catch(i){console.log("Error: "+i)}finally{q.value=!1}},$=()=>{K.warning("Debes de completar todos los espacios requeridos")};return(i,R)=>{const v=c("a-select"),Y=c("a-form-item"),B=c("a-divider"),Z=c("a-input"),Q=c("a-button"),u=c("a-space"),X=c("a-form"),T=c("a-spin");return t(),x("div",Ve,[a(T,{spinning:r.value},{default:n(()=>[a(X,{layout:"vertical",model:m,name:"basic",autocomplete:"off",onFinish:S,onFinishFailed:$},{default:n(()=>[d("div",Ge,[(t(!0),x(M,null,ee(g(Ee),(p,f)=>(t(),x(M,{key:f},[p.type==="iSelect"?(t(),_(Y,{key:0,class:"item-max",name:p.name,label:p.label,rules:[{required:p.required,message:p.message}]},{default:n(()=>[p.name=="regime_id"?(t(),_(v,{key:0,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,options:g(e).regimes},null,8,["value","onUpdate:value","options"])):l("",!0),p.name=="modality_id"?(t(),_(v,{key:1,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,options:g(e).modalities},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),p.type==="iSelectWrite"?(t(),_(Y,{key:1,class:"item-max",name:p.name,label:p.label,rules:[{required:p.required,message:p.message}]},{default:n(()=>[p.name=="comercialactivity_id"?(t(),_(v,{key:0,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,"show-search":"",options:g(e).comercialActivities,"filter-option":w},{dropdownRender:n(({menuNode:W})=>[a(g(D),{vnodes:W},null,8,["vnodes"]),a(B,{style:{margin:"4px 0"}}),a(u,{style:{padding:"4px 8px"}},{default:n(()=>[a(Z,{ref_for:!0,ref:"inputRef",value:F.value,"onUpdate:value":R[0]||(R[0]=k=>F.value=k),placeholder:"Nueva actividad"},null,8,["value"]),a(Q,{type:"text",onClick:V,loading:z.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),p.name=="economicsector_id"?(t(),_(v,{key:1,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,"show-search":"",options:g(e).economicSectors,"filter-option":w},{dropdownRender:n(({menuNode:W})=>[a(g(D),{vnodes:W},null,8,["vnodes"]),a(B,{style:{margin:"4px 0"}}),a(u,{style:{padding:"4px 8px"}},{default:n(()=>[a(Z,{ref_for:!0,ref:"inputRef",value:O.value,"onUpdate:value":R[1]||(R[1]=k=>O.value=k),placeholder:"Nuevo Sector"},null,8,["value"]),a(Q,{type:"text",onClick:o,loading:z.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),p.name=="city_id"?(t(),_(v,{key:2,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,"show-search":"",options:g(e).cities,"filter-option":w,onChange:h},null,8,["value","onUpdate:value","options"])):l("",!0),p.name=="province_id"?(t(),_(v,{key:3,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,"show-search":"",options:g(e).provinces,"filter-option":w,onChange:b,disabled:!m.city_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),p.name=="district_id"?(t(),_(v,{key:4,value:m[p.name],"onUpdate:value":W=>m[p.name]=W,"show-search":"",options:g(e).districts,"filter-option":w,disabled:!m.province_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),p.type==="iText"?(t(),_(Y,{key:2,name:p.name,label:p.label,rules:[{required:p.required,message:p.message,type:p.email,max:p.max}]},{default:n(()=>[a(Z,{value:m[p.name],"onUpdate:value":W=>m[p.name]=W,disabled:p.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),d("div",null,U(H()),1),a(Y,null,{default:n(()=>[a(Q,{class:"btn-produce",type:"primary","html-type":"submit",loading:q.value},{default:n(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Be=ae(Ye,[["__scopeId","data-v-ff8095ce"]]);const He={class:"wrapper-booking"},je={class:"grid-booking"},Je={class:"select-notaries"},Ke={class:"name"},Ze={class:"city"},Qe={class:"address"},Xe={__name:"ActoConstitutivo",props:["info","itemSelectedF20"],emits:["closeDraw"],setup(L,{emit:I}){const D=JSON.parse(localStorage.getItem("profile")),s=re(),E=L,j=I;s.$patch({notaries:s.notaries}),s.$patch({cities:s.cities}),s.fetchNotaries(),s.fetchCities();const P=y(!0),z=y(!1),F=y(null),O=y(null),r=(o,h)=>{const b=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return h.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},q=ne({task:2,name:null,numbernotary:null,notary_id:null,user_id:D.user_id,userupdated_id:D.id}),e=()=>{var o;(o=s.notaries)!=null&&o.length&&(P.value=!1)},m=async()=>{try{const o={city_id:F.value},{data:h}=await Ue({url:"public/notaries-filters",method:"GET",params:o});O.value=null,q.notary_id=null;const b=h.map(w=>({value:w.id,name:w.name,city:w.city.name,province:w.province.name,district:w.district.name,address:w.address}));O.value=b}catch(o){console.error("Error de red:",o)}},H=async()=>{z.value=!0,q.people_id=E.info.id;try{const o=await J({url:`formalization/ruc20-step2/${E.itemSelectedF20.id}`,method:"POST",data:q});o.status===200&&(K.success(o.message),q.name=null,q.numbernotary=null,q.notary_id=null,j("closeDraw",!0))}catch(o){console.log("Error: "+o)}finally{z.value=!1}},V=()=>{K.error("Debes de completar todos los espacios requeridos")};return(o,h)=>{const b=c("a-select"),w=c("a-form-item"),S=c("a-input"),$=c("a-button"),i=c("a-form"),R=c("a-spin");return t(),x("div",He,[a(R,{spinning:P.value},{default:n(()=>[a(i,{layout:"vertical",model:q,name:"basic",autocomplete:"off",onFinish:H,onFinishFailed:V},{default:n(()=>[d("div",je,[(t(!0),x(M,null,ee(g(Pe),(v,Y)=>(t(),x(M,{key:Y},[v.type==="iSelect"?(t(),_(w,{key:0,class:"item-max",name:v.name,label:v.label,rules:[{required:v.required,message:v.message}]},{default:n(()=>[v.name=="notary_id"?(t(),_(b,{key:0,value:q[v.name],"onUpdate:value":B=>q[v.name]=B,options:O.value,"option-label-prop":"name",disabled:!F.value},{option:n(({value:B,name:Z,city:Q,province:u,district:X,address:T})=>[d("div",Je,[d("span",Ke,U(Z),1),d("span",Ze,U(Q)+" - "+U(u)+" - "+U(X),1),d("span",Qe,U(T),1)])]),_:2},1032,["value","onUpdate:value","options","disabled"])):l("",!0),v.name=="city"?(t(),_(b,{key:1,placeholder:"Seleccionar una provincia para la notaría",style:{width:"350px"},value:F.value,"onUpdate:value":h[0]||(h[0]=B=>F.value=B),"show-search":"",options:g(s).cities,"filter-option":r,onChange:m},null,8,["value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),v.type==="iText"?(t(),_(w,{key:1,name:v.name,label:v.label,rules:[{required:v.required,message:v.message,type:v.email,max:v.max}]},{default:n(()=>[a(S,{value:q[v.name],"onUpdate:value":B=>q[v.name]=B},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),d("div",null,U(e()),1),a(w,null,{default:n(()=>[a($,{class:"btn-produce",type:"primary","html-type":"submit",loading:z.value},{default:n(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},ea=ae(Xe,[["__scopeId","data-v-c26d766c"]]);const aa={class:"wrapper-booking"},ta={class:"grid-booking"},na={class:"emp-20"},oa={__name:"MypeFinal",props:["itemSelectedF20"],emits:["closeDraw"],setup(L,{emit:I}){const D=L,s=I,E=y(!1),j=y(!0),P=ne({task:3,ruc:null}),z=r=>{P[r]=P[r].replace(/\D/g,"")},F=async()=>{E.value=!0,P.mype_id=D.itemSelectedF20.mype.id;try{const r=await J({url:`formalization/ruc20-step3/${D.itemSelectedF20.id}`,method:"POST",data:P});r.status===200&&(K.success(r.message),P.ruc=null,s("closeDraw",!0))}catch(r){console.log("Error: "+r)}finally{E.value=!1}},O=()=>{K.error("Debes de completar todos los espacios requeridos")};return(r,q)=>{const e=c("a-input"),m=c("a-form-item"),H=c("a-button"),V=c("a-form");return t(),x("div",aa,[a(V,{layout:"vertical",model:P,name:"basic",autocomplete:"off",onFinish:F,onFinishFailed:O},{default:n(()=>[d("div",ta,[(t(!0),x(M,null,ee(g(Le),(o,h)=>(t(),x(M,{key:h},[o.type==="iText"?(t(),_(m,{key:0,name:o.name,label:o.label,rules:[{required:o.required,message:o.message,type:o.email,max:o.max,min:o.min}]},{default:n(()=>[a(e,{value:P[o.name],"onUpdate:value":b=>P[o.name]=b,disabled:o.disabled,maxlength:9,onInput:q[0]||(q[0]=b=>z("ruc"))},{prefix:n(()=>[Ce(d("span",na,"20",512),[[Ie,j.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),a(m,null,{default:n(()=>[a(H,{class:"btn-produce",type:"primary","html-type":"submit",loading:E.value},{default:n(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},la=ae(oa,[["__scopeId","data-v-7232ccee"]]);const ia={class:"wrapper-booking"},sa={class:"grid-booking"},ra={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(L,{emit:I}){const D=ue({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=JSON.parse(localStorage.getItem("profile")),E=L,j=I,P=y(!1),z=y(null),F=y(null),O=y(!1),r=re(),q=y(!1);r.$patch({cities:r.cities}),r.$patch({provinces:r.provinces}),r.$patch({districts:r.districts}),r.$patch({modalities:r.modalities}),r.$patch({detailProcedures:r.detailProcedures}),r.$patch({economicSectors:r.economicSectors}),r.$patch({comercialActivities:r.comercialActivities}),r.fetchDetailProcedures(),r.fetchModalities(),r.fetchEconomicSectors(),r.fetchComercialActivities(),r.fetchCities();const e=ne({detailprocedure_id:null,modality_id:null,economicsector_id:null,comercialactivity_id:null,city_id:null,province_id:null,district_id:null,user_id:s.user_id}),m=async()=>{try{q.value=!0;const S={name:z.value};(await J({url:"create/comercial-activities",method:"POST",data:S})).status==200&&(z.value=null,r.fetchComercialActivities())}catch(S){console.log(S)}finally{q.value=!1}},H=S=>{e.province_id=null,e.district_id=null,r.fetchProvinces(S)},V=S=>{e.district_id=null,r.fetchDistricts(S)},o=(S,$)=>{const i=S.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return $.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(i)},h=async()=>{try{O.value=!0;const S={name:F.value};(await J({url:"create/economic-sector",method:"POST",data:S})).status==200&&(F.value=null,r.fetchEconomicSectors())}catch(S){console.log(S)}finally{O.value=!1}},b=async()=>{P.value=!0,e.people_id=E.info.id;try{const S=await J({url:"formalization/create-ruc-10",method:"POST",data:e});S.status===200&&(K.success(S.message),e.detailprocedure_id=null,e.modality_id=null,e.economicsector_id=null,e.comercialactivity_id=null,e.city_id=null,e.province_id=null,e.district_id=null,j("closeDraw",!0))}catch(S){console.log("Error: "+S)}finally{P.value=!1}},w=()=>{K.warning("Debes de completar todos los espacios requeridos")};return(S,$)=>{const i=c("a-select"),R=c("a-form-item"),v=c("a-input"),Y=c("a-divider"),B=c("a-button"),Z=c("a-space"),Q=c("a-form");return t(),x("div",ia,[a(Q,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:b,onFinishFailed:w},{default:n(()=>[d("div",sa,[(t(!0),x(M,null,ee(g(Me),(u,X)=>(t(),x(M,{key:X},[u.type==="iSelect"?(t(),_(R,{key:0,class:"item-max",name:u.name,label:u.label,rules:[{required:u.required,message:u.message}]},{default:n(()=>[u.name=="detailprocedure_id"?(t(),_(i,{key:0,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,options:g(r).detailProcedures},null,8,["value","onUpdate:value","options"])):l("",!0),u.name=="modality_id"?(t(),_(i,{key:1,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,options:g(r).modalities},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),u.type==="iText"?(t(),_(R,{key:1,name:u.name,label:u.label,rules:[{required:u.required,message:u.message,type:u.email,max:u.max}]},{default:n(()=>[a(v,{value:e[u.name],"onUpdate:value":T=>e[u.name]=T,disabled:u.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),u.type==="iSelectWrite"?(t(),_(R,{key:2,class:"item-max",name:u.name,label:u.label,rules:[{required:u.required,message:u.message}]},{default:n(()=>[u.name=="comercialactivity_id"?(t(),_(i,{key:0,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,"show-search":"",options:g(r).comercialActivities,"filter-option":o},{dropdownRender:n(({menuNode:T})=>[a(g(D),{vnodes:T},null,8,["vnodes"]),a(Y,{style:{margin:"4px 0"}}),a(Z,{style:{padding:"4px 8px"}},{default:n(()=>[a(v,{ref_for:!0,ref:"inputRef",value:z.value,"onUpdate:value":$[0]||($[0]=p=>z.value=p),placeholder:"Nueva actividad"},null,8,["value"]),a(B,{type:"text",onClick:m,loading:q.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),u.name=="economicsector_id"?(t(),_(i,{key:1,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,"show-search":"",options:g(r).economicSectors,"filter-option":o},{dropdownRender:n(({menuNode:T})=>[a(g(D),{vnodes:T},null,8,["vnodes"]),a(Y,{style:{margin:"4px 0"}}),a(Z,{style:{padding:"4px 8px"}},{default:n(()=>[a(v,{ref_for:!0,ref:"inputRef",value:F.value,"onUpdate:value":$[1]||($[1]=p=>F.value=p),placeholder:"Nuevo registro"},null,8,["value"]),a(B,{type:"text",onClick:h,loading:O.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),u.name=="city_id"?(t(),_(i,{key:2,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,"show-search":"",options:g(r).cities,"filter-option":o,onChange:H},null,8,["value","onUpdate:value","options"])):l("",!0),u.name=="province_id"?(t(),_(i,{key:3,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,"show-search":"",options:g(r).provinces,"filter-option":o,onChange:V,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),u.name=="district_id"?(t(),_(i,{key:4,value:e[u.name],"onUpdate:value":T=>e[u.name]=T,"show-search":"",options:g(r).districts,"filter-option":o,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),a(R,null,{default:n(()=>[a(B,{type:"primary",class:"btn-produce","html-type":"submit",loading:P.value},{default:n(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},da=ae(ra,[["__scopeId","data-v-2a7bcb87"]]);const ca={class:"wrapper-booking"},ua={class:"grid-booking"},ma={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup(L,{emit:I}){const D=ue({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=re(),E=JSON.parse(localStorage.getItem("profile")),j=y(!1),P=L,z=I,F=y(!1),O=y(null),r=y(null);s.$patch({components:s.components}),s.$patch({componentThemes:s.componentThemes}),s.$patch({modalities:s.modalities}),s.$patch({cities:s.cities}),s.fetchComponents(),s.fetchComponentThemes(),s.fetchModalities(),s.fetchCities(),s.fetchGenders();const q=y(!0),e=ne({observations:null,user_id:E.user_id,people_id:null,component_id:null,theme_id:null,modality_id:null,city_id:null,province_id:null,district_id:null}),m=async()=>{try{F.value=!0;const i={name:O.value};(await J({url:"create/component",method:"POST",data:i})).status==200&&(O.value=null,s.fetchComponents())}catch(i){console.log(i)}finally{F.value=!1}},H=async()=>{try{F.value=!0;const i={component_id:e.component_id,name:r.value};(await J({url:"create/theme",method:"POST",data:i})).status==200&&(r.value=null,s.fetchComponentThemes(e.component_id))}catch(i){console.log(i)}finally{F.value=!1}},V=()=>{s.cities&&(q.value=!1)},o=i=>{e.theme_id=null,s.fetchComponentThemes(i)},h=i=>{e.province_id=null,e.district_id=null,s.fetchProvinces(i)},b=i=>{e.district_id=null,s.fetchDistricts(i)},w=(i,R)=>{const v=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return R.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(v)},S=async()=>{j.value=!0,e.people_id=P.info.id;try{const i=await J({url:"advisory/create",method:"POST",data:e});i.status===200&&(K.success(i.message),e.component_id=null,e.theme_id=null,e.modality_id=null,e.city_id=null,e.province_id=null,e.district_id=null,e.observations=null,z("closeDraw",!0))}catch(i){console.log("Error: "+i)}finally{j.value=!1}},$=()=>{K.warning("Debes de completar todos los espacios requeridos")};return(i,R)=>{const v=c("a-select"),Y=c("a-form-item"),B=c("a-textarea"),Z=c("a-divider"),Q=c("a-input"),u=c("a-button"),X=c("a-space"),T=c("a-form"),p=c("a-spin");return t(),x("div",ca,[a(p,{spinning:q.value},{default:n(()=>[a(T,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:S,onFinishFailed:$},{default:n(()=>[d("div",ua,[(t(!0),x(M,null,ee(g(We),(f,W)=>(t(),x(M,{key:W},[f.type==="iSelect"?(t(),_(Y,{key:0,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:n(()=>[f.name=="modality_id"?(t(),_(v,{key:0,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,options:g(s).modalities},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iTextarea"?(t(),_(Y,{key:1,name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:n(()=>[a(B,{value:e[f.name],"onUpdate:value":k=>e[f.name]=k,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iSelectWrite"?(t(),_(Y,{key:2,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:n(()=>[f.name=="city_id"?(t(),_(v,{key:0,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,"show-search":"",options:g(s).cities,"filter-option":w,onChange:h},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="province_id"?(t(),_(v,{key:1,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,"show-search":"",options:g(s).provinces,"filter-option":w,onChange:b,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),f.name=="district_id"?(t(),_(v,{key:2,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,"show-search":"",options:g(s).districts,"filter-option":w,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),f.name=="component_id"?(t(),_(v,{key:3,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,"show-search":"",options:g(s).components,"filter-option":w,onChange:o},{dropdownRender:n(({menuNode:k})=>[a(g(D),{vnodes:k},null,8,["vnodes"]),a(Z,{style:{margin:"4px 0"}}),a(X,{style:{padding:"4px 8px"}},{default:n(()=>[a(Q,{ref_for:!0,ref:"inputRef",value:O.value,"onUpdate:value":R[0]||(R[0]=C=>O.value=C),placeholder:"Nueva componente"},null,8,["value"]),a(u,{type:"text",onClick:m,loading:F.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),f.name=="theme_id"?(t(),_(v,{key:4,value:e[f.name],"onUpdate:value":k=>e[f.name]=k,"show-search":"",options:g(s).componentThemes,"filter-option":w,disabled:!e.component_id},{dropdownRender:n(({menuNode:k})=>[a(g(D),{vnodes:k},null,8,["vnodes"]),a(Z,{style:{margin:"4px 0"}}),a(X,{style:{padding:"4px 8px"}},{default:n(()=>[a(Q,{ref_for:!0,ref:"inputRef",value:r.value,"onUpdate:value":R[1]||(R[1]=C=>r.value=C),placeholder:"Nueva tema"},null,8,["value"]),a(u,{type:"text",onClick:H,loading:F.value},{icon:n(()=>[a(g(te))]),default:n(()=>[N(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options","disabled"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),d("div",null,U(V()),1),a(Y,null,{default:n(()=>[a(u,{type:"primary",class:"btn-produce","html-type":"submit",loading:j.value},{default:n(()=>[N("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},pa=ae(ma,[["__scopeId","data-v-7734f6f3"]]);const _a={key:0},va={key:0},fa={key:4,class:"steps"},ya={style:{"text-align":"right"}},ga={key:0},ba={__name:"AsesoriasHistorial",props:["info"],setup(L){const I=L,D=y("1"),s=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start",width:160},{title:"Fecha última actualización",dataIndex:"date_last",width:160},{title:"Proceso",dataIndex:"progress"},{title:"Sector económico",dataIndex:"sector"}],E=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Detalle del trámite",dataIndex:"component"},{title:"Sector económico",dataIndex:"sector"},{title:"Modalidad",dataIndex:"modality",align:"center"}],j=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Componente",dataIndex:"component"},{title:"Tema",dataIndex:"tema_compoment"},{title:"Modalidad",dataIndex:"modality",align:"center"}],P=z=>ve(z).format("DD/MM/YYYY HH:mm A");return(z,F)=>{const O=c("a-empty"),r=c("a-table"),q=c("a-card"),e=c("a-tab-pane"),m=c("a-progress"),H=c("a-space"),V=c("a-tabs");return t(),_(V,{activeKey:D.value,"onUpdate:activeKey":F[0]||(F[0]=o=>D.value=o),type:"card",class:"box-hist"},{default:n(()=>[a(e,{key:"1",tab:"ASESORÍAS"},{default:n(()=>[a(q,null,{default:n(()=>{var o,h,b;return[((o=I.info)==null?void 0:o.idadvisory.length)==0?(t(),_(O,{key:0})):l("",!0),((h=I.info)==null?void 0:h.idadvisory.length)>=1?(t(),_(r,{key:1,columns:j,"data-source":(b=I.info)==null?void 0:b.idadvisory,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:w,column:S,record:$})=>{var i,R,v;return[S.dataIndex==="idx"?(t(),x("span",_a,U(w+1),1)):l("",!0),S.dataIndex==="date_start"?(t(),x(M,{key:1},[N(U(P($.created_at)),1)],64)):l("",!0),S.dataIndex==="component"?(t(),x(M,{key:2},[N(U((i=$.component)==null?void 0:i.name),1)],64)):l("",!0),S.dataIndex==="tema_compoment"?(t(),x(M,{key:3},[N(U((R=$.theme)==null?void 0:R.name),1)],64)):l("",!0),S.dataIndex==="modality"?(t(),x(M,{key:4},[N(U((v=$.modality)==null?void 0:v.name),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]}),_:1})]),_:1}),a(e,{key:"2",tab:"RUC 20"},{default:n(()=>[a(q,null,{default:n(()=>[I.info.idformalization20.length==0?(t(),_(O,{key:0})):l("",!0),I.info.idformalization20.length>=1?(t(),_(r,{key:1,columns:s,"data-source":I.info.idformalization20,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:o,column:h,record:b})=>{var w,S,$,i;return[h.dataIndex==="idx"?(t(),x("span",va,U(o+1),1)):l("",!0),h.dataIndex==="date_start"?(t(),x(M,{key:1},[N(U(P(b.created_at)),1)],64)):l("",!0),h.dataIndex==="date_last"?(t(),x(M,{key:2},[N(U(b.updated_at),1)],64)):l("",!0),h.dataIndex==="sector"?(t(),x(M,{key:3},[N(U((w=b.economicsector)==null?void 0:w.name),1)],64)):l("",!0),h.dataIndex==="progress"?(t(),x("div",fa,[d("span",ya,U(b.task==1?"Reserva de nombre":b.task==2?"Proceso de notaría":"Formalizado"),1),a(H,{direction:"vertical",style:{width:"100%"}},{default:n(()=>[a(m,{percent:b.task*33.33,steps:3},null,8,["percent"])]),_:2},1024)])):l("",!0),h.dataIndex==="asesor_update"?(t(),x(M,{key:5},[N(U((S=b.user.profile)==null?void 0:S.name)+" "+U(($=b.userupdater)==null?void 0:$.profile.lastname)+" "+U((i=b.user)==null?void 0:i.profile.middlename),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]),_:1})]),_:1}),a(e,{key:"3",tab:"RUC 10"},{default:n(()=>[a(q,null,{default:n(()=>[I.info.idformalization10.length==0?(t(),_(O,{key:0})):l("",!0),I.info.idformalization10.length>=1?(t(),_(r,{key:1,columns:E,"data-source":I.info.idformalization10,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:o,column:h,record:b})=>{var w,S,$;return[h.dataIndex==="idx"?(t(),x("span",ga,U(o+1),1)):l("",!0),h.dataIndex==="date_start"?(t(),x(M,{key:1},[N(U(P(b.created_at)),1)],64)):l("",!0),h.dataIndex==="component"?(t(),x(M,{key:2},[N(U((w=b.detailprocedure)==null?void 0:w.name),1)],64)):l("",!0),h.dataIndex==="sector"?(t(),x(M,{key:3},[N(U((S=b.economicsector)==null?void 0:S.name),1)],64)):l("",!0),h.dataIndex==="modality"?(t(),x(M,{key:4},[N(U(($=b.modality)==null?void 0:$.name),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]),_:1})]),_:1})]),_:1},8,["activeKey"])}}},ha=ae(ba,[["__scopeId","data-v-ef08d487"]]);const G=L=>(Re("data-v-894be563"),L=L(),Ne(),L),Sa={class:"asesorias"},xa=G(()=>d("h3",null,"REGISTRO DE FORMALIZACIONES Y ASESRÍAS",-1)),ka=G(()=>d("br",null,null,-1)),wa={class:"wrapper-s"},Ua=G(()=>d("label",{class:"label"},"Seleccione el tipo de documento",-1)),Ca=G(()=>d("label",{class:"label"},"Digite el número de documento",-1)),Ia={class:"column-2"},Da={class:"info-update"},Aa=G(()=>d("h4",null,"RESULTADO DE LA BÚSQUEDA",-1)),qa={class:"info-personal"},Ra=G(()=>d("span",null,"Apellidos y nombres: ",-1)),Na=G(()=>d("span",null,"Número de celular:",-1)),Fa=G(()=>d("span",null,"Correo electrónico:",-1)),$a=G(()=>d("span",null,"Asesorías:",-1)),za=G(()=>d("span",null,"Formalizaciones RUC 20:",-1)),Oa={class:"alert-incomplete"},Ta=G(()=>d("span",null,"Formalizaciones RUC 10:",-1)),Ea=G(()=>d("h4",null,"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),Pa={class:"card-as-btn"},La=G(()=>d("h4",null,"HISTORIAL",-1)),Ma={class:"steps-content"},Wa=["onClick"],Va={class:"pendient"},Ga={key:0,class:"info-tag"},Ya=G(()=>d("b",null,"Paso",-1)),Ba={key:1,class:"info-tag"},Ha=G(()=>d("b",null,"Siguiente paso",-1)),ja={key:2,class:"info-tag"},Ja=G(()=>d("b",null,"Siguiente paso",-1)),Ka={class:"info"},Za=G(()=>d("b",null,"Código SID SUNARP",-1)),Qa={class:"code-number"},Xa=G(()=>d("b",null,"Última consulta",-1)),et=G(()=>d("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),at=[et],tt={__name:"AsesoriasFormalizaciones",setup(L){const I=De(),D=_e(),s=y(0),E=y(null),j=y([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]),P=y(null),z=y(!1),F=y(null),O=y(!1),r=y(!1),q=y(!1),e=y(!1),m=y(!1),H=y(!1),V=y(""),o=y([]),h=y(!1),b=y(0),w=y(!1),S=y([]),$=y(null),i=()=>{W(V.value),z.value=!1},R=k=>ve(k).format("DD/MM/YYYY HH:mm A"),v=()=>{B()},Y=()=>{V.value=V.value.replace(/\D/g,"")},B=()=>{V.value="",o.value=[],S.value=[],I.push({name:"asesorias-formalizaciones"})},Z=()=>{if(F.value=null,F.value=o.value,!E.value)return K.warning("Seleccionar un tipo de servicio");E.value=="asesoria"&&(H.value=!0),E.value=="ruc10"&&(m.value=!0),E.value=="ruc20"&&T()},Q=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],u=()=>{P.value=o.value,z.value=!0},X=()=>{b.value=0,e.value=!0,r.value=!1},T=async()=>{try{w.value=!0;const k=await J({url:`formalization/list-ruc-20/${o.value.id}`,method:"GET"});if(k.length<1)return X();q.value=k,r.value=!0}catch(k){console.log(k)}finally{w.value=!1}},p=async k=>{O.value=!0,b.value=k.task,$.value=k,setTimeout(()=>{O.value=!1,e.value=!0,r.value=!1},400)},f=async()=>{h.value=!0;const k=await J({url:`person/found/${s.value}/${V.value}`,method:"GET"});if(k.status==200)return o.value=k.data,h.value=!1},W=async k=>{if(h.value=!0,!k)return K.warning("Ingresa un número de documento"),h.value=!1;if(s.value==0)return K.warning("Seleccionar el tipo de documento"),h.value=!1;if(s.value==1&&V.value.length<8){K.warning("El número de DNI está incompleto"),h.value=!1;return}const C=await J({url:`person/found/${s.value}/${V.value}`,method:"GET"});if(C.status==200)return o.value=C.data,h.value=!1;if(C.status===404){const oe={type:s.value,access:"asesorias",number:V.value};I.push({name:"registrar-persona",query:oe})}};return Ae(()=>{D.query.type&&(console.log("ooaoooaoaa",D.query.type),s.value=D.query.type,V.value=D.query.number)}),(k,C)=>{const oe=c("a-radio"),fe=c("a-radio-group"),ye=c("a-input-search"),le=c("a-card"),ge=c("a-select"),be=c("a-button"),he=c("a-step"),Se=c("a-steps"),ie=c("a-drawer"),de=c("a-tag"),xe=c("a-spin"),ke=c("a-modal");return t(),x(M,null,[d("div",Sa,[xa,ka,a(le,{class:"card-as"},{default:n(()=>[g(D).query.dni?(t(),_(g(Te),{key:0,class:"ico-reload",onClick:v})):l("",!0),d("div",wa,[d("div",null,[Ua,a(fe,{value:s.value,"onUpdate:value":C[0]||(C[0]=A=>s.value=A),onChange:B,class:"radio-produce"},{default:n(()=>[a(oe,{value:"1"},{default:n(()=>[N("DNI")]),_:1}),a(oe,{value:"2"},{default:n(()=>[N("CE")]),_:1})]),_:1},8,["value"])]),d("div",null,[Ca,a(ye,{"enter-button":"BUSCAR",value:V.value,"onUpdate:value":C[1]||(C[1]=A=>V.value=A),placeholder:"",loading:h.value,onSearch:W,onInput:Y,class:"search-produce",maxlength:s.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),d("div",Ia,[o.value.length!=0?(t(),_(le,{key:0,class:"card-as"},{default:n(()=>{var A,se,ce;return[d("div",Da,[Aa,a(g(qe),{class:"ico-edit",onClick:u})]),d("div",qa,[Ra,d("span",null,U(o.value.lastname)+" "+U(o.value.middlename)+", "+U(o.value.name),1),Na,d("span",null,[d("span",null,U(o.value.phone?o.value.phone:"-"),1)]),Fa,d("span",null,U(o.value.email?o.value.email:"-"),1),$a,d("b",null,U((A=o.value)==null?void 0:A.idadvisory.length),1),za,d("div",Oa,[d("b",null,U((se=o.value)==null?void 0:se.idformalization20.length),1)]),Ta,d("b",null,U((ce=o.value)==null?void 0:ce.idformalization10.length),1)])]}),_:1})):l("",!0),o.value.length!=0?(t(),_(le,{key:1,class:"card-as"},{default:n(()=>[Ea,d("div",Pa,[a(ge,{style:{"min-width":"200px"},value:E.value,"onUpdate:value":C[2]||(C[2]=A=>E.value=A),options:j.value},null,8,["value","options"]),a(be,{class:"btn-produce",type:"primary",onClick:Z},{default:n(()=>[N("REGISTRAR")]),_:1})])]),_:1})):l("",!0)]),o.value.length!=0?(t(),_(le,{key:0,class:"card-as"},{default:n(()=>[La,a(ha,{info:o.value},null,8,["info"])]),_:1})):l("",!0)]),d("section",null,[a(ie,{width:"510",title:"Formalización con RUC 20",open:e.value,"onUpdate:open":C[6]||(C[6]=A=>e.value=A),placement:"right"},{default:n(()=>[a(Se,{current:b.value,size:"small",class:"steps"},{default:n(()=>[(t(),x(M,null,ee(Q,A=>a(he,{key:A.title,title:A.title},null,8,["title"])),64))]),_:1},8,["current"]),d("div",Ma,[b.value==0?(t(),_(Be,{key:0,info:F.value,onCloseDraw:C[3]||(C[3]=A=>(e.value=!1,f()))},null,8,["info"])):l("",!0),b.value==1?(t(),_(ea,{key:1,info:F.value,itemSelectedF20:$.value,onCloseDraw:C[4]||(C[4]=A=>(e.value=!1,f()))},null,8,["info","itemSelectedF20"])):l("",!0),b.value==2?(t(),_(la,{key:2,itemSelectedF20:$.value,onCloseDraw:C[5]||(C[5]=A=>(e.value=!1,f()))},null,8,["itemSelectedF20"])):l("",!0)])]),_:1},8,["open"]),a(ie,{title:"Formalización con RUC 10",open:m.value,"onUpdate:open":C[8]||(C[8]=A=>m.value=A),placement:"right"},{default:n(()=>[a(da,{info:o.value,onCloseDraw:C[7]||(C[7]=A=>(m.value=!1,f()))},null,8,["info"])]),_:1},8,["open"]),a(ie,{title:"Nueva asesoría",open:H.value,"onUpdate:open":C[10]||(C[10]=A=>H.value=A),placement:"right"},{default:n(()=>[a(pa,{info:o.value,onCloseDraw:C[9]||(C[9]=A=>(H.value=!1,f()))},null,8,["info"])]),_:1},8,["open"]),a(ke,{open:r.value,"onUpdate:open":C[11]||(C[11]=A=>r.value=A),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:n(()=>[a(xe,{spinning:O.value},{default:n(()=>[(t(!0),x(M,null,ee(q.value,(A,se)=>(t(),x("div",{key:se,onClick:ce=>p(A)},[d("div",Va,[A.task==0?(t(),x("div",Ga,[Ya,N(),a(de,{color:"error"},{default:n(()=>[N("Reserva de nombre")]),_:1})])):l("",!0),A.task==1?(t(),x("div",Ba,[Ha,N(),a(de,{color:"warning"},{default:n(()=>[N("Acto constitutivo")]),_:1})])):l("",!0),A.task==2?(t(),x("div",ja,[Ja,N(),a(de,{color:"success"},{default:n(()=>[N("Formalizar")]),_:1})])):l("",!0),d("div",Ka,[Za,d("span",null,[d("b",Qa,U(A.codesunarp),1)]),Xa,d("span",null,U(R(A.updated_at)),1)])])],8,Wa))),128)),d("div",{class:"pendient pendient-btn btn-produce",onClick:X},at)]),_:1},8,["spinning"])]),_:1},8,["open"]),a(ie,{open:z.value,"onUpdate:open":C[12]||(C[12]=A=>z.value=A),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:n(()=>[a(Fe,{onCloseDraw:i,updateValues:P.value},null,8,["updateValues"])]),_:1},8,["open"])])],64)}}},dt=ae(tt,[["__scopeId","data-v-894be563"]]);export{dt as default};
