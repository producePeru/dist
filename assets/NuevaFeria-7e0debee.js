import{d as y,c as H,l as Q,e as j,m as h}from"./index-c50fff99.js";import{g as G,e as J,j as w,l as Z,r as m,o as r,c as o,w as d,a6 as K,a5 as M,F as R,ab as X,a as p,aa as u,u as _,af as ee,L as ae,a8 as te}from"./quill-blot-formatter-d287386b.js";import{u as ie}from"./selectes-cab0842d.js";import"./es-29bc297e.js";const le={class:"form-fair"},se="DD/MM/YYYY",ue={__name:"NuevaFeria",props:["dataRow"],emits:["closeDraw"],setup(S,{emit:E}){y.locale("es");const n=ie();n.$patch({cities:n.cities}),n.$patch({provinces:n.provinces}),n.$patch({districts:n.districts}),n.fetchCities();const D=G(!1),Y={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},b=S,F=E;H();const e=J({}),P={title:{type:"iText",label:"Nombre de la Feria",name:"title",required:!0,message:"Escribir el nombre de la Feria",disabled:!0,max:100},subTitle:{type:"iText",label:"Subtítulo de la Feria",name:"subTitle",required:!0,message:"Escribir un sub título a la Feria",disabled:!0,max:100},description:{type:"iQuillEditor",label:"Descripción de la Feria",name:"description",required:!1,message:"Escribir la descripción",disabled:!1},modality:{type:"iSelect",label:"Modalidad",name:"modality",required:!0,message:"Seleccionar una opción",disabled:!0},metaMypes:{type:"iNumber",label:"Meta MYPEs Participantes",name:"metaMypes",required:!0,message:"Meta MYPEs Participantes",disabled:!0},startDate:{type:"iDate",label:"Fecha Inicio de la Feria",name:"startDate",required:!0,message:"Seleccionar fecha de Inicio",disabled:!1},endDate:{type:"iDate",label:"Fecha Fin de la Feria",name:"endDate",required:!0,message:"Seleccionar fecha de Fin",disabled:!1},powerBy:{type:"iSelect",label:"Pertenece al",name:"powerBy",required:!0,message:"Seleccionar una opción",disabled:!0},fairtype_id:{type:"iSelect",label:"Tipo de Feria",name:"fairtype_id",required:!0,message:"Seleccionar una opción",disabled:!0},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia del negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito del negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1}},T=[{label:"PRESENCIAL",value:"p"},{label:"VIRTUAL",value:"v"}],k=[{label:"PP093",value:"pp093"},{label:"PUNCHE",value:"punche"},{label:"APNOP",value:"apnop"}],C=[{label:"PERÚ PRODUCE EN MACROEVENTO",value:1},{label:"CYBER WOW",value:2},{label:"MUJER PRODUCE ",value:3},{label:"PERÚ PRODUCE REGIONAL",value:4}],N=t=>s=>{const c=new Date().setHours(0,0,0,0);if(t==="startDate")return s&&s.valueOf()<c;if(t==="endDate"){const l=e.startDate?new Date(e.startDate).setHours(0,0,0,0):null;return s&&(s.valueOf()<c||l&&s.valueOf()<l)}return s&&s.valueOf()<c};w(()=>e.startDate,t=>{e.endDate&&new Date(t)>new Date(e.endDate)&&(e.endDate=null)}),w(()=>e.endDate,t=>{e.startDate&&new Date(t)<new Date(e.startDate)&&(e.startDate=null)});const f=(t,s)=>{const c=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(c)},B=t=>{if(t=="modality")return T;if(t=="powerBy")return k;if(t=="fairtype_id")return C},q=t=>{e.province_id=null,e.district_id=null,n.fetchProvinces(t)},U=t=>{e.district_id=null,n.fetchDistricts(t)},g=()=>{e.title=null,e.subTitle=null,e.description="</span>",e.metaMypes=null,e.metaSales=null,e.startDate=null,e.endDate=null,e.modality=null,e.powerBy=null,e.fairtype_id=null,e.city_id=null,e.province_id=null,e.district_id=null},O=async()=>{D.value=!0;const t={title:e.title,subTitle:e.subTitle,description:e.description,metaMypes:e.metaMypes,metaSales:e.metaSales,startDate:y(e.startDate).format("YYYY-MM-DD"),endDate:y(e.endDate).format("YYYY-MM-DD"),modality:e.modality,powerBy:e.powerBy,fairtype_id:e.fairtype_id,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id};try{const s=b.dataRow?"PUT":"POST",c=b.dataRow?`fair/update/${b.dataRow.id}`:"fair/create",l=await j({url:c,method:s,data:t});l.status==200&&(h.success(l.message),F("closeDraw"),g()),l.status==500&&(h.error(l.message),g())}catch{h.error("Se presentó un error, los valores son requeridos")}finally{D.value=!1}},A=t=>{const s=e[t]?e[t].trim():"";e[t]=s};function x(t){e.title=t.title,e.subTitle=t.subTitle,e.description=t.description,e.metaMypes=t.metaMypes,e.metaSales=t.metaSales,e.startDate=t.startDate?y(t.startDate,"DD/MM/YYYY"):null,e.endDate=t.endDate?y(t.endDate,"DD/MM/YYYY"):null,e.modality=t.modality,e.powerBy=t.powerBy,e.fairtype_id=t.fairtype_id,e.city_id=t.city_id,q(t.city_id),e.province_id=t.province_id,U(t.province_id),e.district_id=t.district_id}return Z(()=>{b.dataRow&&x(b.dataRow)}),w(()=>b.dataRow,t=>{t?x(t):g()}),(t,s)=>{const c=m("a-input"),l=m("a-form-item"),v=m("a-select"),L=m("a-textarea"),I=m("a-input-number"),V=m("a-date-picker"),W=m("a-button"),z=m("a-form");return r(),o(z,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:O},{default:d(()=>[K("div",le,[(r(),M(R,null,X(P,(a,$)=>(r(),M(R,{key:$},[a.type==="iText"?(r(),o(l,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,max:a.max}]},{default:d(()=>[p(c,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,maxlength:a.max,onBlur:i=>A(a.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iSelect"?(r(),o(l,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[p(v,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:B(a.name)},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iTextarea"?(r(),o(l,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[p(L,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,rows:3,maxlength:a.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iNumber"?(r(),o(l,{key:3,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[p(I,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,min:1,max:500,style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iQuillEditor"?(r(),o(l,{key:4,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[p(_(ee),{class:"quill-height-200",content:e[a.name],"onUpdate:content":i=>e[a.name]=i,options:Y,contentType:"html"},null,8,["content","onUpdate:content"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iDate"?(r(),o(l,{key:5,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[p(V,{locale:_(Q),value:e[a.name],"onUpdate:value":i=>e[a.name]=i,style:{width:"100%"},format:se,placeholder:"día/mes/año","disabled-date":N(a.name)},null,8,["locale","value","onUpdate:value","disabled-date"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iSelectWrite"?(r(),o(l,{key:6,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[a.name=="city_id"?(r(),o(v,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:_(n).cities,"show-search":"","filter-option":f,onChange:q},null,8,["value","onUpdate:value","options"])):u("",!0),a.name=="province_id"?(r(),o(v,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:_(n).provinces,"show-search":"","filter-option":f,onChange:U,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="district_id"?(r(),o(v,{key:2,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:_(n).districts,"show-search":"","filter-option":f,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0)]),_:2},1032,["name","label","rules"])):u("",!0)],64))),64))]),p(l,null,{default:d(()=>[p(W,{type:"primary","html-type":"submit",loading:D.value},{default:d(()=>[ae(te(S.dataRow?"ACTUALIZAR":"GUARDAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};export{ue as _};
