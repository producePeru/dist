import{u as ie}from"./selectes-d57e3a24.js";import{c as n,A as xe,x as pe,r as S,a as ae,b as m,o as e,d as h,w as o,e as s,F as E,B as X,h as U,q as v,s as l,X as ce,i as R,t as x,Y as _e,y as J,m as j,f as Ue,T as we,V as Ce,u as De,k as Ie,Z as qe,p as Ae,j as Re,P as Fe}from"./index-e42182f0.js";/* empty css                                                      */import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{S as $e}from"./DrawerSolicitante.componente-93d32be4.js";import"./es-e308d13c.js";var ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const Ne=ze;function me(O){for(var w=1;w<arguments.length;w++){var c=arguments[w]!=null?Object(arguments[w]):{},k=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(k=k.concat(Object.getOwnPropertySymbols(c).filter(function(F){return Object.getOwnPropertyDescriptor(c,F).enumerable}))),k.forEach(function(F){Oe(O,F,c[F])})}return O}function Oe(O,w,c){return w in O?Object.defineProperty(O,w,{value:c,enumerable:!0,configurable:!0,writable:!0}):O[w]=c,O}var de=function(w,c){var k=me({},w,c.attrs);return n(xe,me({},k,{icon:Ne}),null)};de.displayName="RedoOutlined";de.inheritAttrs=!1;const Te=de,Ee={codesunarp:{type:"iText",label:"Código SID sunarp",name:"codesunarp",required:!0,message:"Escribir apellido",disabled:!1},economicsector_id:{type:"iSelect",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},regime_id:{type:"iSelect",label:"Tipo de régimen societario",name:"regime_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!1,message:"Escribir apellido",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1}},Pe={name:{type:"iText",label:"Nombre empresa",name:"name",required:!0,message:"Escribir apellido",disabled:!1},numbernotary:{type:"iText",label:"Número de solicitud de envio a Notaría",name:"numbernotary",required:!0,message:"Seleccionar departamento",disabled:!1},city:{type:"iSelect",label:"Seleciona Provincia",name:"city",required:!1,message:"Seleccionar modalidad",disabled:!1},notary_id:{type:"iSelect",label:"Notaría",name:"notary_id",required:!0,message:"Seleccionar notaría",disabled:!1}},Le={ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir número de RUC",disabled:!1,max:9,min:9}},Me={detailprocedure_id:{type:"iSelect",label:"Detalle del trámite",name:"detailprocedure_id",required:!0,message:"Escribir número de RUC",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},economicsector_id:{type:"iSelect",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1}},Ve={component_id:{type:"iSelect",label:"Componente",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!1},theme_id:{type:"iSelectWrite",label:"Tema del componente",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},observations:{type:"iTextarea",label:"Observaciones",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}},We={class:"wrapper-booking"},Ge={class:"grid-booking"},Be={__name:"ReservaNombre",props:["info"],emits:["closeDraw"],setup(O,{emit:w}){const c=_e({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),k=pe(),F=JSON.parse(localStorage.getItem("profile")),H=O,L=w,z=S(!1),d=S(null),N=S(!0),p=S(!1),u=ie();u.$patch({cities:u.cities}),u.$patch({modalities:u.modalities}),u.$patch({economicSectors:u.economicSectors}),u.$patch({comercialActivities:u.comercialActivities}),u.$patch({regimes:u.regimes}),u.fetchEconomicSectors(),u.fetchComercialActivities(),u.fetchRegimes(),u.fetchCities(),u.fetchModalities();const a=ae({task:1,codesunarp:null,economicsector_id:null,comercialactivity_id:null,regime_id:null,city_id:null,province_id:null,district_id:null,address:null,modality_id:null,user_id:F.user_id}),M=()=>{var r;(r=u.regimes)!=null&&r.length&&(N.value=!1)},G=async()=>{try{z.value=!0;const r={name:d.value};(await J({url:"create/comercial-activities",method:"POST",data:r})).status==200&&(d.value=null,u.fetchComercialActivities())}catch(r){console.log(r)}finally{z.value=!1}},g=r=>{a.province_id=null,a.district_id=null,u.fetchProvinces(r)},t=r=>{a.district_id=null,u.fetchDistricts(r)},y=(r,D)=>{const $=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return D.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes($)},b=async()=>{p.value=!0,a.people_id=H.info.id;try{const r=await J({url:"formalization/ruc20-step1",method:"POST",data:a});if(r.status===200){if(k.query.formalizaciondigital){let D={id:+k.query.formalizaciondigital,documentnumber:k.query.number};await J({url:"formalization/digital/update-attended",method:"PUT",data:D})}j.success(r.message),a.codesunarp=null,a.economicsector_id=null,a.comercialactivity_id=null,a.regime_id=null,a.city_id=null,a.province_id=null,a.district_id=null,a.address=null,a.modality_id=null,L("closeDraw",!0)}}catch(r){console.log("Error: "+r)}finally{p.value=!1}},q=()=>{j.warning("Debes de completar todos los espacios requeridos")};return(r,D)=>{const $=m("a-select"),W=m("a-form-item"),i=m("a-divider"),Y=m("a-input"),A=m("a-button"),K=m("a-space"),Z=m("a-form"),f=m("a-spin");return e(),h("div",We,[n(f,{spinning:N.value},{default:o(()=>[n(Z,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:b,onFinishFailed:q},{default:o(()=>[s("div",Ge,[(e(!0),h(E,null,X(U(Ee),(_,T)=>(e(),h(E,{key:T},[_.type==="iSelect"?(e(),v(W,{key:0,class:"item-max",name:_.name,label:_.label,rules:[{required:_.required,message:_.message}]},{default:o(()=>[_.name=="regime_id"?(e(),v($,{key:0,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,options:U(u).regimes},null,8,["value","onUpdate:value","options"])):l("",!0),_.name=="economicsector_id"?(e(),v($,{key:1,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,options:U(u).economicSectors},null,8,["value","onUpdate:value","options"])):l("",!0),_.name=="modality_id"?(e(),v($,{key:2,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,options:U(u).modalities},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),_.type==="iSelectWrite"?(e(),v(W,{key:1,class:"item-max",name:_.name,label:_.label,rules:[{required:_.required,message:_.message}]},{default:o(()=>[_.name=="comercialactivity_id"?(e(),v($,{key:0,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,"show-search":"",options:U(u).comercialActivities,"filter-option":y},{dropdownRender:o(({menuNode:P})=>[n(U(c),{vnodes:P},null,8,["vnodes"]),n(i,{style:{margin:"4px 0"}}),n(K,{style:{padding:"4px 8px"}},{default:o(()=>[n(Y,{ref_for:!0,ref:"inputRef",value:d.value,"onUpdate:value":D[0]||(D[0]=Q=>d.value=Q),placeholder:"Nueva actividad"},null,8,["value"]),n(A,{type:"text",onClick:G,loading:z.value},{icon:o(()=>[n(U(ce))]),default:o(()=>[R(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),_.name=="city_id"?(e(),v($,{key:1,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,"show-search":"",options:U(u).cities,"filter-option":y,onChange:g},null,8,["value","onUpdate:value","options"])):l("",!0),_.name=="province_id"?(e(),v($,{key:2,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,"show-search":"",options:U(u).provinces,"filter-option":y,onChange:t},null,8,["value","onUpdate:value","options"])):l("",!0),_.name=="district_id"?(e(),v($,{key:3,value:a[_.name],"onUpdate:value":P=>a[_.name]=P,"show-search":"",options:U(u).districts,"filter-option":y},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),_.type==="iText"?(e(),v(W,{key:2,name:_.name,label:_.label,rules:[{required:_.required,message:_.message,type:_.email,max:_.max}]},{default:o(()=>[n(Y,{value:a[_.name],"onUpdate:value":P=>a[_.name]=P,disabled:_.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),s("div",null,x(M()),1),n(W,null,{default:o(()=>[n(A,{class:"btn-produce",type:"primary","html-type":"submit",loading:p.value},{default:o(()=>[R("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},je=ee(Be,[["__scopeId","data-v-2535c4cf"]]);const He={class:"wrapper-booking"},Ye={class:"grid-booking"},Je={class:"select-notaries"},Ke={class:"name"},Ze={class:"city"},Qe={class:"address"},Xe={__name:"ActoConstitutivo",props:["info","itemSelectedF20"],emits:["closeDraw"],setup(O,{emit:w}){const c=JSON.parse(localStorage.getItem("profile")),k=ie(),F=O,H=w;k.$patch({notaries:k.notaries}),k.$patch({cities:k.cities}),k.fetchNotaries(),k.fetchCities();const L=S(!0),z=S(!1),d=S(null),N=S(null),p=(t,y)=>{const b=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return y.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},u=ae({task:2,name:null,numbernotary:null,notary_id:null,user_id:c.user_id,userupdated_id:c.id}),a=()=>{var t;(t=k.notaries)!=null&&t.length&&(L.value=!1)},M=async()=>{try{z.value=!0;const{data:t}=await Ue({url:`public/notaries/${d.value}`,method:"GET"});N.value=null,u.notary_id=null;const y=t.map(b=>({value:b.id,name:b.name,city:b.city.name,province:b.province.name,district:b.district.name,address:b.address}));N.value=y}catch(t){console.error("Error de red:",t)}finally{z.value=!1}},G=async()=>{z.value=!0,u.people_id=F.info.id;try{const t=await J({url:`formalization/ruc20-step2/${F.itemSelectedF20.codesunarp}`,method:"POST",data:u});t.status===200&&(j.success(t.message),u.name=null,u.numbernotary=null,u.notary_id=null,H("closeDraw",!0))}catch(t){console.log("Error: "+t)}finally{z.value=!1}},g=()=>{j.error("Debes de completar todos los espacios requeridos")};return(t,y)=>{const b=m("a-select"),q=m("a-form-item"),r=m("a-input"),D=m("a-button"),$=m("a-form"),W=m("a-spin");return e(),h("div",He,[n(W,{spinning:L.value},{default:o(()=>[n($,{layout:"vertical",model:u,name:"basic",autocomplete:"off",onFinish:G,onFinishFailed:g},{default:o(()=>[s("div",Ye,[(e(!0),h(E,null,X(U(Pe),(i,Y)=>(e(),h(E,{key:Y},[i.type==="iSelect"?(e(),v(q,{key:0,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:o(()=>[i.name=="notary_id"?(e(),v(b,{key:0,value:u[i.name],"onUpdate:value":A=>u[i.name]=A,options:N.value,"option-label-prop":"name"},{option:o(({value:A,name:K,city:Z,province:f,district:_,address:T})=>[s("div",Je,[s("span",Ke,x(K),1),s("span",Ze,x(Z)+" - "+x(f)+" - "+x(_),1),s("span",Qe,x(T),1)])]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),i.name=="city"?(e(),v(b,{key:1,placeholder:"Buscar por Provincia",style:{width:"300px"},value:d.value,"onUpdate:value":y[0]||(y[0]=A=>d.value=A),"show-search":"",options:U(k).cities,"filter-option":p,onChange:M},null,8,["value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),i.type==="iText"?(e(),v(q,{key:1,name:i.name,label:i.label,rules:[{required:i.required,message:i.message,type:i.email,max:i.max}]},{default:o(()=>[n(r,{value:u[i.name],"onUpdate:value":A=>u[i.name]=A},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),s("div",null,x(a()),1),n(q,null,{default:o(()=>[n(D,{class:"btn-produce",type:"primary","html-type":"submit",loading:z.value},{default:o(()=>[R("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},ea=ee(Xe,[["__scopeId","data-v-53ab567f"]]);const aa={class:"wrapper-booking"},ta={class:"grid-booking"},na={class:"emp-20"},oa={__name:"MypeFinal",props:["itemSelectedF20"],emits:["closeDraw"],setup(O,{emit:w}){const c=O,k=w,F=S(!1),H=S(!0),L=ae({task:3,ruc:null}),z=async()=>{F.value=!0,L.mype_id=c.itemSelectedF20.mype.id;try{const N=await J({url:`formalization/ruc20-step3/${c.itemSelectedF20.codesunarp}`,method:"POST",data:L});N.status===200&&(j.success(N.message),L.ruc=null,k("closeDraw",!0))}catch(N){console.log("Error: "+N)}finally{F.value=!1}},d=()=>{j.error("Debes de completar todos los espacios requeridos")};return(N,p)=>{const u=m("a-input"),a=m("a-form-item"),M=m("a-button"),G=m("a-form");return e(),h("div",aa,[n(G,{layout:"vertical",model:L,name:"basic",autocomplete:"off",onFinish:z,onFinishFailed:d},{default:o(()=>[s("div",ta,[(e(!0),h(E,null,X(U(Le),(g,t)=>(e(),h(E,{key:t},[g.type==="iText"?(e(),v(a,{key:0,name:g.name,label:g.label,rules:[{required:g.required,message:g.message,type:g.email,max:g.max,min:g.min}]},{default:o(()=>[n(u,{value:L[g.name],"onUpdate:value":y=>L[g.name]=y,disabled:g.disabled,maxlength:9},{prefix:o(()=>[we(s("span",na,"20",512),[[Ce,H.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),n(a,null,{default:o(()=>[n(M,{class:"btn-produce",type:"primary","html-type":"submit",loading:F.value},{default:o(()=>[R("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},la=ee(oa,[["__scopeId","data-v-9faa4d7d"]]);const ia={class:"wrapper-booking"},sa={class:"grid-booking"},ra={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(O,{emit:w}){const c=_e({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),k=JSON.parse(localStorage.getItem("profile")),F=O,H=w,L=S(!1),z=S(null),d=S(null),N=S(!1),p=ie(),u=S(!1);p.$patch({cities:p.cities}),p.$patch({provinces:p.provinces}),p.$patch({districts:p.districts}),p.$patch({modalities:p.modalities}),p.$patch({detailProcedures:p.detailProcedures}),p.$patch({economicSectors:p.economicSectors}),p.$patch({comercialActivities:p.comercialActivities}),p.fetchDetailProcedures(),p.fetchModalities(),p.fetchEconomicSectors(),p.fetchComercialActivities(),p.fetchCities();const a=ae({detailprocedure_id:null,modality_id:null,economicsector_id:null,comercialactivity_id:null,city_id:null,province_id:null,district_id:null,user_id:k.user_id}),M=async()=>{try{u.value=!0;const r={name:z.value};(await J({url:"create/comercial-activities",method:"POST",data:r})).status==200&&(z.value=null,p.fetchComercialActivities())}catch(r){console.log(r)}finally{u.value=!1}},G=r=>{a.province_id=null,a.district_id=null,p.fetchProvinces(r)},g=r=>{a.district_id=null,p.fetchDistricts(r)},t=(r,D)=>{const $=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return D.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes($)},y=async()=>{try{N.value=!0;const r={name:d.value};(await J({url:"create/economic-sector",method:"POST",data:r})).status==200&&(d.value=null,p.fetchEconomicSectors())}catch(r){console.log(r)}finally{N.value=!1}},b=async()=>{L.value=!0,a.people_id=F.info.id;try{const r=await J({url:"formalization/create-ruc-10",method:"POST",data:a});r.status===200&&(j.success(r.message),a.detailprocedure_id=null,a.modality_id=null,a.economicsector_id=null,a.comercialactivity_id=null,a.city_id=null,a.province_id=null,a.district_id=null,H("closeDraw",!0))}catch(r){console.log("Error: "+r)}finally{L.value=!1}},q=()=>{j.warning("Debes de completar todos los espacios requeridos")};return(r,D)=>{const $=m("a-select"),W=m("a-divider"),i=m("a-input"),Y=m("a-button"),A=m("a-space"),K=m("a-form-item"),Z=m("a-form");return e(),h("div",ia,[n(Z,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:b,onFinishFailed:q},{default:o(()=>[s("div",sa,[(e(!0),h(E,null,X(U(Me),(f,_)=>(e(),h(E,{key:_},[f.type==="iSelect"?(e(),v(K,{key:0,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:o(()=>[f.name=="detailprocedure_id"?(e(),v($,{key:0,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,options:U(p).detailProcedures},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="modality_id"?(e(),v($,{key:1,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,options:U(p).modalities},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="economicsector_id"?(e(),v($,{key:2,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,"show-search":"",options:U(p).economicSectors,"filter-option":t},{dropdownRender:o(({menuNode:T})=>[n(U(c),{vnodes:T},null,8,["vnodes"]),n(W,{style:{margin:"4px 0"}}),n(A,{style:{padding:"4px 8px"}},{default:o(()=>[n(i,{ref_for:!0,ref:"inputRef",value:d.value,"onUpdate:value":D[0]||(D[0]=P=>d.value=P),placeholder:"Nuevo registro"},null,8,["value"]),n(Y,{type:"text",onClick:y,loading:N.value},{icon:o(()=>[n(U(ce))]),default:o(()=>[R(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iText"?(e(),v(K,{key:1,name:f.name,label:f.label,rules:[{required:f.required,message:f.message,type:f.email,max:f.max}]},{default:o(()=>[n(i,{value:a[f.name],"onUpdate:value":T=>a[f.name]=T,disabled:f.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iSelectWrite"?(e(),v(K,{key:2,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:o(()=>[f.name=="comercialactivity_id"?(e(),v($,{key:0,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,"show-search":"",options:U(p).comercialActivities,"filter-option":t},{dropdownRender:o(({menuNode:T})=>[n(U(c),{vnodes:T},null,8,["vnodes"]),n(W,{style:{margin:"4px 0"}}),n(A,{style:{padding:"4px 8px"}},{default:o(()=>[n(i,{ref_for:!0,ref:"inputRef",value:z.value,"onUpdate:value":D[1]||(D[1]=P=>z.value=P),placeholder:"Nueva actividad"},null,8,["value"]),n(Y,{type:"text",onClick:M,loading:u.value},{icon:o(()=>[n(U(ce))]),default:o(()=>[R(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),f.name=="city_id"?(e(),v($,{key:1,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,"show-search":"",options:U(p).cities,"filter-option":t,onChange:G},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="province_id"?(e(),v($,{key:2,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,"show-search":"",options:U(p).provinces,"filter-option":t,onChange:g},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="district_id"?(e(),v($,{key:3,value:a[f.name],"onUpdate:value":T=>a[f.name]=T,"show-search":"",options:U(p).districts,"filter-option":t},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),n(K,null,{default:o(()=>[n(Y,{type:"primary",class:"btn-produce","html-type":"submit",loading:L.value},{default:o(()=>[R("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},ca=ee(ra,[["__scopeId","data-v-67c2634c"]]);const da={class:"wrapper-booking"},ua={class:"grid-booking"},ma={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup(O,{emit:w}){const c=ie(),k=JSON.parse(localStorage.getItem("profile")),F=S(!1),H=O,L=w;c.$patch({components:c.components}),c.$patch({componentThemes:c.componentThemes}),c.$patch({modalities:c.modalities}),c.$patch({cities:c.cities}),c.fetchComponents(),c.fetchComponentThemes(),c.fetchModalities(),c.fetchCities(),c.fetchGenders();const z=S(!0),d=ae({observations:null,user_id:k.user_id,people_id:null,component_id:null,theme_id:null,modality_id:null,city_id:null,province_id:null,district_id:null}),N=()=>{c.cities&&(z.value=!1)},p=t=>{d.theme_id=null,c.fetchComponentThemes(t)},u=t=>{d.province_id=null,d.district_id=null,c.fetchProvinces(t)},a=t=>{d.district_id=null,c.fetchDistricts(t)},M=(t,y)=>{const b=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return y.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},G=async()=>{F.value=!0,d.people_id=H.info.id;try{const t=await J({url:"advisory/create",method:"POST",data:d});t.status===200&&(j.success(t.message),d.component_id=null,d.theme_id=null,d.modality_id=null,d.city_id=null,d.province_id=null,d.district_id=null,d.observations=null,L("closeDraw",!0))}catch(t){console.log("Error: "+t)}finally{F.value=!1}},g=()=>{j.warning("Debes de completar todos los espacios requeridos")};return(t,y)=>{const b=m("a-select"),q=m("a-form-item"),r=m("a-textarea"),D=m("a-button"),$=m("a-form"),W=m("a-spin");return e(),h("div",da,[n(W,{spinning:z.value},{default:o(()=>[n($,{layout:"vertical",model:d,name:"basic",autocomplete:"off",onFinish:G,onFinishFailed:g},{default:o(()=>[s("div",ua,[(e(!0),h(E,null,X(U(Ve),(i,Y)=>(e(),h(E,{key:Y},[i.type==="iSelect"?(e(),v(q,{key:0,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:o(()=>[i.name=="component_id"?(e(),v(b,{key:0,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,options:U(c).components,onChange:p},null,8,["value","onUpdate:value","options"])):l("",!0),i.name=="modality_id"?(e(),v(b,{key:1,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,options:U(c).modalities},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),i.type==="iTextarea"?(e(),v(q,{key:1,name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:o(()=>[n(r,{value:d[i.name],"onUpdate:value":A=>d[i.name]=A,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0),i.type==="iSelectWrite"?(e(),v(q,{key:2,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:o(()=>[i.name=="theme_id"?(e(),v(b,{key:0,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,"show-search":"",options:U(c).componentThemes,"filter-option":M},null,8,["value","onUpdate:value","options"])):l("",!0),i.name=="city_id"?(e(),v(b,{key:1,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,"show-search":"",options:U(c).cities,"filter-option":M,onChange:u},null,8,["value","onUpdate:value","options"])):l("",!0),i.name=="province_id"?(e(),v(b,{key:2,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,"show-search":"",options:U(c).provinces,"filter-option":M,onChange:a},null,8,["value","onUpdate:value","options"])):l("",!0),i.name=="district_id"?(e(),v(b,{key:3,value:d[i.name],"onUpdate:value":A=>d[i.name]=A,"show-search":"",options:U(c).districts,"filter-option":M},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),s("div",null,x(N()),1),n(q,null,{default:o(()=>[n(D,{type:"primary",class:"btn-produce","html-type":"submit",loading:F.value},{default:o(()=>[R("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},pa=ee(ma,[["__scopeId","data-v-73bb453f"]]);const _a={key:0},va={key:0},fa={key:4,class:"steps"},ya={style:{"text-align":"right"}},ga={key:0},ba={__name:"AsesoriasHistorial",props:["info"],setup(O){const w=O,c=S("1"),k=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start",width:160},{title:"Fecha última actualización",dataIndex:"date_last",width:160},{title:"Proceso",dataIndex:"progress"},{title:"Sector económico",dataIndex:"sector"}],F=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Detalle del trámite",dataIndex:"component"},{title:"Sector económico",dataIndex:"sector"},{title:"Modalidad",dataIndex:"modality",align:"center"}],H=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Componente",dataIndex:"component"},{title:"Tema",dataIndex:"tema_compoment"},{title:"Modalidad",dataIndex:"modality",align:"center"}];return(L,z)=>{const d=m("a-empty"),N=m("a-table"),p=m("a-card"),u=m("a-tab-pane"),a=m("a-progress"),M=m("a-space"),G=m("a-tabs");return e(),v(G,{activeKey:c.value,"onUpdate:activeKey":z[0]||(z[0]=g=>c.value=g),type:"card",class:"box-hist"},{default:o(()=>[n(u,{key:"1",tab:"ASESORÍAS"},{default:o(()=>[n(p,null,{default:o(()=>{var g,t,y;return[((g=w.info)==null?void 0:g.idadvisory.length)==0?(e(),v(d,{key:0})):l("",!0),((t=w.info)==null?void 0:t.idadvisory.length)>=1?(e(),v(N,{key:1,columns:H,"data-source":(y=w.info)==null?void 0:y.idadvisory,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:b,column:q,record:r})=>{var D,$,W;return[q.dataIndex==="idx"?(e(),h("span",_a,x(b+1),1)):l("",!0),q.dataIndex==="date_start"?(e(),h(E,{key:1},[R(x(r.created_at),1)],64)):l("",!0),q.dataIndex==="component"?(e(),h(E,{key:2},[R(x((D=r.component)==null?void 0:D.name),1)],64)):l("",!0),q.dataIndex==="tema_compoment"?(e(),h(E,{key:3},[R(x(($=r.theme)==null?void 0:$.name),1)],64)):l("",!0),q.dataIndex==="modality"?(e(),h(E,{key:4},[R(x((W=r.modality)==null?void 0:W.name),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]}),_:1})]),_:1}),n(u,{key:"2",tab:"RUC 20"},{default:o(()=>[n(p,null,{default:o(()=>[w.info.idformalization20.length==0?(e(),v(d,{key:0})):l("",!0),w.info.idformalization20.length>=1?(e(),v(N,{key:1,columns:k,"data-source":w.info.idformalization20,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:g,column:t,record:y})=>{var b,q,r,D;return[t.dataIndex==="idx"?(e(),h("span",va,x(g+1),1)):l("",!0),t.dataIndex==="date_start"?(e(),h(E,{key:1},[R(x(y.created_at),1)],64)):l("",!0),t.dataIndex==="date_last"?(e(),h(E,{key:2},[R(x(y.updated_at),1)],64)):l("",!0),t.dataIndex==="sector"?(e(),h(E,{key:3},[R(x((b=y.economicsector)==null?void 0:b.name),1)],64)):l("",!0),t.dataIndex==="progress"?(e(),h("div",fa,[s("span",ya,x(y.task==1?"Reserva de nombre":y.task==2?"Proceso de notaría":"Formalizado"),1),n(M,{direction:"vertical",style:{width:"100%"}},{default:o(()=>[n(a,{percent:y.task*33.33,steps:3,title:"hi"},null,8,["percent"])]),_:2},1024)])):l("",!0),t.dataIndex==="asesor_update"?(e(),h(E,{key:5},[R(x((q=y.user.profile)==null?void 0:q.name)+" "+x((r=y.userupdater)==null?void 0:r.profile.lastname)+" "+x((D=y.user)==null?void 0:D.profile.middlename),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]),_:1})]),_:1}),n(u,{key:"3",tab:"RUC 10"},{default:o(()=>[n(p,null,{default:o(()=>[w.info.idformalization10.length==0?(e(),v(d,{key:0})):l("",!0),w.info.idformalization10.length>=1?(e(),v(N,{key:1,columns:F,"data-source":w.info.idformalization10,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:g,column:t,record:y})=>{var b,q,r;return[t.dataIndex==="idx"?(e(),h("span",ga,x(g+1),1)):l("",!0),t.dataIndex==="date_start"?(e(),h(E,{key:1},[R(x(y.created_at),1)],64)):l("",!0),t.dataIndex==="component"?(e(),h(E,{key:2},[R(x((b=y.detailprocedure)==null?void 0:b.name),1)],64)):l("",!0),t.dataIndex==="sector"?(e(),h(E,{key:3},[R(x((q=y.economicsector)==null?void 0:q.name),1)],64)):l("",!0),t.dataIndex==="modality"?(e(),h(E,{key:4},[R(x((r=y.modality)==null?void 0:r.name),1)],64)):l("",!0)]}),_:1},8,["data-source"])):l("",!0)]),_:1})]),_:1})]),_:1},8,["activeKey"])}}},ha=ee(ba,[["__scopeId","data-v-beaf5b43"]]);const V=O=>(Ae("data-v-64988591"),O=O(),Re(),O),Sa={class:"asesorias"},ka=V(()=>s("h3",null,"REGISTRO DE FORMALIZACIONES Y ASESRÍAS",-1)),xa=V(()=>s("br",null,null,-1)),Ua={class:"wrapper-s"},wa=V(()=>s("label",{class:"label"},"Seleccione el tipo de documento",-1)),Ca=V(()=>s("label",{class:"label"},"Digite el número de documento",-1)),Da={class:"column-2"},Ia={class:"info-update"},qa=V(()=>s("h4",null,"RESULTADO DE LA BÚSQUEDA",-1)),Aa={class:"info-personal"},Ra=V(()=>s("span",null,"Apellidos y nombres: ",-1)),Fa=V(()=>s("span",null,"Número de celular:",-1)),$a=V(()=>s("span",null,"Correo electrónico:",-1)),za=V(()=>s("span",null,"Asesorías:",-1)),Na=V(()=>s("span",null,"Formalizaciones RUC 20:",-1)),Oa={class:"alert-incomplete"},Ta=V(()=>s("span",null,"Formalizaciones RUC 10:",-1)),Ea=V(()=>s("h4",null,"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),Pa={class:"card-as-btn"},La=V(()=>s("h4",null,"HISTORIAL",-1)),Ma={class:"steps-content"},Va=["onClick"],Wa={class:"pendient"},Ga={key:0,class:"info-tag"},Ba=V(()=>s("b",null,"Paso",-1)),ja={key:1,class:"info-tag"},Ha=V(()=>s("b",null,"Siguiente paso",-1)),Ya={key:2,class:"info-tag"},Ja=V(()=>s("b",null,"Siguiente paso",-1)),Ka={class:"info"},Za=V(()=>s("b",null,"Código SID SUNARP",-1)),Qa={class:"code-number"},Xa=V(()=>s("b",null,"Última consulta",-1)),et=V(()=>s("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),at=[et],tt={__name:"AsesoriasFormalizaciones",setup(O){const w=De(),c=pe(),k=S(0),F=S(null),H=S([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]),L=S(null),z=S(!1),d=S(null),N=S(!1),p=S(!1),u=S(!1),a=S(!1),M=S(!1),G=S(!1),g=S(""),t=S([]),y=S(!1),b=S(0),q=S(!1),r=S([]),D=S(null),$=()=>{ue(g.value),z.value=!1},W=B=>Fe(B).format("DD/MM/YYYY HH:mm A"),i=()=>{A()},Y=()=>{g.value=g.value.replace(/\D/g,"")},A=()=>{g.value="",t.value=[],r.value=[],w.push({name:"asesorias-formalizaciones"})},K=()=>{if(d.value=null,d.value=t.value,!F.value)return j.warning("Seleccionar un tipo de servicio");F.value=="asesoria"&&(G.value=!0),F.value=="ruc10"&&(M.value=!0),F.value=="ruc20"&&T()},Z=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],f=()=>{L.value=t.value,z.value=!0},_=()=>{b.value=0,a.value=!0,p.value=!1},T=async()=>{try{q.value=!0;const B=await J({url:`formalization/list-ruc-20/${t.value.id}`,method:"GET"});if(B.length<1)return _();u.value=B,p.value=!0}catch(B){console.log(B)}finally{q.value=!1}},P=async B=>{N.value=!0,b.value=B.task,D.value=B,setTimeout(()=>{N.value=!1,a.value=!0,p.value=!1},400)},Q=async()=>{y.value=!0;const B=await J({url:`person/found/${k.value}/${g.value}`,method:"GET"});if(B.status==200)return t.value=B.data,y.value=!1},ue=async B=>{if(y.value=!0,!B)return j.warning("Ingresa un número de documento"),y.value=!1;if(k.value==0)return j.warning("Seleccionar el tipo de documento"),y.value=!1;if(k.value==1&&g.value.length<8){j.warning("El número de DNI está incompleto"),y.value=!1;return}const I=await J({url:`person/found/${k.value}/${g.value}`,method:"GET"});if(I.status==200)return t.value=I.data,y.value=!1;if(I.status===404){const te={type:k.value,access:"asesorias",number:g.value};w.push({name:"registrar-persona",query:te})}};return Ie(()=>{c.query.type&&(console.log("ooaoooaoaa",c.query.type),k.value=c.query.type,g.value=c.query.number)}),(B,I)=>{const te=m("a-radio"),ve=m("a-radio-group"),fe=m("a-input-search"),ne=m("a-card"),ye=m("a-select"),ge=m("a-button"),be=m("a-step"),he=m("a-steps"),oe=m("a-drawer"),se=m("a-tag"),Se=m("a-spin"),ke=m("a-modal");return e(),h(E,null,[s("div",Sa,[ka,xa,n(ne,{class:"card-as"},{default:o(()=>[U(c).query.dni?(e(),v(U(Te),{key:0,class:"ico-reload",onClick:i})):l("",!0),s("div",Ua,[s("div",null,[wa,n(ve,{value:k.value,"onUpdate:value":I[0]||(I[0]=C=>k.value=C),onChange:A,class:"radio-produce"},{default:o(()=>[n(te,{value:"1"},{default:o(()=>[R("DNI")]),_:1}),n(te,{value:"2"},{default:o(()=>[R("CE")]),_:1})]),_:1},8,["value"])]),s("div",null,[Ca,n(fe,{"enter-button":"BUSCAR",value:g.value,"onUpdate:value":I[1]||(I[1]=C=>g.value=C),placeholder:"",loading:y.value,onSearch:ue,onInput:Y,class:"search-produce",maxlength:k.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),s("div",Da,[t.value.length!=0?(e(),v(ne,{key:0,class:"card-as"},{default:o(()=>{var C,le,re;return[s("div",Ia,[qa,n(U(qe),{class:"ico-edit",onClick:f})]),s("div",Aa,[Ra,s("span",null,x(t.value.lastname)+" "+x(t.value.middlename)+", "+x(t.value.name),1),Fa,s("span",null,[s("span",null,x(t.value.phone?t.value.phone:"-"),1)]),$a,s("span",null,x(t.value.email?t.value.email:"-"),1),za,s("b",null,x((C=t.value)==null?void 0:C.idadvisory.length),1),Na,s("div",Oa,[s("b",null,x((le=t.value)==null?void 0:le.idformalization20.length),1)]),Ta,s("b",null,x((re=t.value)==null?void 0:re.idformalization10.length),1)])]}),_:1})):l("",!0),t.value.length!=0?(e(),v(ne,{key:1,class:"card-as"},{default:o(()=>[Ea,s("div",Pa,[n(ye,{style:{"min-width":"200px"},value:F.value,"onUpdate:value":I[2]||(I[2]=C=>F.value=C),options:H.value},null,8,["value","options"]),n(ge,{class:"btn-produce",type:"primary",onClick:K},{default:o(()=>[R("REGISTRAR")]),_:1})])]),_:1})):l("",!0)]),t.value.length!=0?(e(),v(ne,{key:0,class:"card-as"},{default:o(()=>[La,n(ha,{info:t.value},null,8,["info"])]),_:1})):l("",!0)]),s("section",null,[n(oe,{width:"510",title:"Formalización con RUC 20",open:a.value,"onUpdate:open":I[6]||(I[6]=C=>a.value=C),placement:"right"},{default:o(()=>[n(he,{current:b.value,size:"small",class:"steps"},{default:o(()=>[(e(),h(E,null,X(Z,C=>n(be,{key:C.title,title:C.title},null,8,["title"])),64))]),_:1},8,["current"]),s("div",Ma,[b.value==0?(e(),v(je,{key:0,info:d.value,onCloseDraw:I[3]||(I[3]=C=>(a.value=!1,Q()))},null,8,["info"])):l("",!0),b.value==1?(e(),v(ea,{key:1,info:d.value,itemSelectedF20:D.value,onCloseDraw:I[4]||(I[4]=C=>(a.value=!1,Q()))},null,8,["info","itemSelectedF20"])):l("",!0),b.value==2?(e(),v(la,{key:2,itemSelectedF20:D.value,onCloseDraw:I[5]||(I[5]=C=>(a.value=!1,Q()))},null,8,["itemSelectedF20"])):l("",!0)])]),_:1},8,["open"]),n(oe,{title:"Formalización con RUC 10",open:M.value,"onUpdate:open":I[8]||(I[8]=C=>M.value=C),placement:"right"},{default:o(()=>[n(ca,{info:t.value,onCloseDraw:I[7]||(I[7]=C=>(M.value=!1,Q()))},null,8,["info"])]),_:1},8,["open"]),n(oe,{title:"Nueva asesoría",open:G.value,"onUpdate:open":I[10]||(I[10]=C=>G.value=C),placement:"right"},{default:o(()=>[n(pa,{info:t.value,onCloseDraw:I[9]||(I[9]=C=>(G.value=!1,Q()))},null,8,["info"])]),_:1},8,["open"]),n(ke,{open:p.value,"onUpdate:open":I[11]||(I[11]=C=>p.value=C),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:o(()=>[n(Se,{spinning:N.value},{default:o(()=>[(e(!0),h(E,null,X(u.value,(C,le)=>(e(),h("div",{key:le,onClick:re=>P(C)},[s("div",Wa,[C.task==0?(e(),h("div",Ga,[Ba,R(),n(se,{color:"error"},{default:o(()=>[R("Reserva de nombre")]),_:1})])):l("",!0),C.task==1?(e(),h("div",ja,[Ha,R(),n(se,{color:"warning"},{default:o(()=>[R("Acto constitutivo")]),_:1})])):l("",!0),C.task==2?(e(),h("div",Ya,[Ja,R(),n(se,{color:"success"},{default:o(()=>[R("Formalizar")]),_:1})])):l("",!0),s("div",Ka,[Za,s("span",null,[s("b",Qa,x(C.codesunarp),1)]),Xa,s("span",null,x(W(C.updated_at)),1)])])],8,Va))),128)),s("div",{class:"pendient pendient-btn btn-produce",onClick:_},at)]),_:1},8,["spinning"])]),_:1},8,["open"]),n(oe,{open:z.value,"onUpdate:open":I[12]||(I[12]=C=>z.value=C),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:o(()=>[n($e,{onCloseDraw:$,updateValues:L.value},null,8,["updateValues"])]),_:1},8,["open"])])],64)}}},ct=ee(tt,[["__scopeId","data-v-64988591"]]);export{ct as default};
