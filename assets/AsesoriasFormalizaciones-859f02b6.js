import{u as ue}from"./selectes-a5f9f5eb.js";import{c as a,A as Ae,x as he,r as _,a as ie,b as u,o,d as C,w as t,e as r,F as J,B as ae,h as y,q as f,s as m,Y as oe,i as M,t as T,Z as _e,y as j,m as Z,f as Re,U as qe,W as Ne,R as ge,u as ze,k as Fe,_ as $e,p as Oe,j as Te}from"./index-aeef91b7.js";/* empty css                                                      */import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{S as Ee}from"./DrawerSolicitante.componente-419a41b3.js";import"./es-e8b85dd7.js";var Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const Le=Pe;function ye($){for(var I=1;I<arguments.length;I++){var b=arguments[I]!=null?Object(arguments[I]):{},n=Object.keys(b);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(b).filter(function(z){return Object.getOwnPropertyDescriptor(b,z).enumerable}))),n.forEach(function(z){Me($,z,b[z])})}return $}function Me($,I,b){return I in $?Object.defineProperty($,I,{value:b,enumerable:!0,configurable:!0,writable:!0}):$[I]=b,$}var ve=function(I,b){var n=ye({},I,b.attrs);return a(Ae,ye({},n,{icon:Le}),null)};ve.displayName="RedoOutlined";ve.inheritAttrs=!1;const We=ve,Ve={codesunarp:{type:"iText",label:"Código SID sunarp",name:"codesunarp",required:!1,message:"Escribir el código SID sunarp",disabled:!1},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},regime_id:{type:"iSelect",label:"Tipo de régimen societario",name:"regime_id",required:!0,message:"Seleccionar el régimen societario",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!1,message:"Escribir apellido",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar la modalidad",disabled:!1}},Ge={name:{type:"iText",label:"Nombre empresa",name:"name",required:!0,message:"Escribir nombre de la empresa",disabled:!1},numbernotary:{type:"iText",label:"Número de solicitud de envio a Notaría",name:"numbernotary",required:!0,message:"Escribir número de solicitud de envio a Notaría",disabled:!1},city:{type:"iSelect",label:"Seleciona Provincia",name:"city",required:!1,message:"Buscar por provincia",disabled:!1},notary_id:{type:"iSelect",label:"Notaría",name:"notary_id",required:!0,message:"Seleccionar una notaría",disabled:!1}},Ye={ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir número de RUC",disabled:!1,max:9,min:9}},He={detailprocedure_id:{type:"iSelect",label:"Detalle del trámite",name:"detailprocedure_id",required:!0,message:"Seleccionar detalle del trámite",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad de atención",disabled:!1},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1}},Be={component_id:{type:"iSelectWrite",label:"Componente",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!1},theme_id:{type:"iSelectWrite",label:"Tema del componente",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},city_id:{type:"iSelectWrite",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},observations:{type:"iTextarea",label:"Observaciones",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}},je={class:"wrapper-booking"},Je={class:"grid-booking"},Ke={__name:"ReservaNombre",props:["info"],emits:["closeDraw"],setup($,{emit:I}){const b=_e({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),n=he(),z=JSON.parse(localStorage.getItem("profile")),K=$,F=I,D=_(!1),x=_(null),A=_(null),l=_(!0),w=_(!1),e=ue();e.$patch({cities:e.cities}),e.$patch({modalities:e.modalities}),e.$patch({economicSectors:e.economicSectors}),e.$patch({comercialActivities:e.comercialActivities}),e.$patch({regimes:e.regimes}),e.fetchEconomicSectors(),e.fetchComercialActivities(),e.fetchRegimes(),e.fetchCities(),e.fetchModalities();const d=ie({task:1,codesunarp:null,economicsector_id:null,comercialactivity_id:null,regime_id:null,city_id:null,province_id:null,district_id:null,address:null,modality_id:null,user_id:z.user_id}),E=()=>{var i;(i=e.regimes)!=null&&i.length&&(l.value=!1)},R=async()=>{try{D.value=!0;const i={name:x.value};(await j({url:"create/comercial-activities",method:"POST",data:i})).status==200&&(x.value=null,e.fetchComercialActivities())}catch(i){console.log(i)}finally{D.value=!1}},s=async()=>{try{D.value=!0;const i={name:A.value};(await j({url:"create/economic-sector",method:"POST",data:i})).status==200&&(A.value=null,e.fetchEconomicSectors())}catch(i){console.log(i)}finally{D.value=!1}},P=i=>{d.province_id=null,d.district_id=null,e.fetchProvinces(i)},W=i=>{d.district_id=null,e.fetchDistricts(i)},k=(i,U)=>{const v=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return U.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(v)},q=async()=>{w.value=!0,d.people_id=K.info.id;try{const i=await j({url:"formalization/ruc20-step1",method:"POST",data:d});if(i.status===200){if(n.query.formalizaciondigital){let U={id:+n.query.formalizaciondigital,documentnumber:n.query.number};await j({url:"formalization/digital/update-attended",method:"PUT",data:U})}Z.success(i.message),d.codesunarp=null,d.economicsector_id=null,d.comercialactivity_id=null,d.regime_id=null,d.city_id=null,d.province_id=null,d.district_id=null,d.address=null,d.modality_id=null,F("closeDraw",!0)}}catch(i){console.log("Error: "+i)}finally{w.value=!1}},Y=()=>{Z.warning("Debes de completar todos los espacios requeridos")};return(i,U)=>{const v=u("a-select"),V=u("a-form-item"),H=u("a-divider"),Q=u("a-input"),X=u("a-button"),c=u("a-space"),ee=u("a-form"),N=u("a-spin");return o(),C("div",je,[a(N,{spinning:l.value},{default:t(()=>[a(ee,{layout:"vertical",model:d,name:"basic",autocomplete:"off",onFinish:q,onFinishFailed:Y},{default:t(()=>[r("div",Je,[(o(!0),C(J,null,ae(y(Ve),(p,h)=>(o(),C(J,{key:h},[p.type==="iSelect"?(o(),f(V,{key:0,class:"item-max",name:p.name,label:p.label,rules:[{required:p.required,message:p.message}]},{default:t(()=>[p.name=="regime_id"?(o(),f(v,{key:0,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,options:y(e).regimes},null,8,["value","onUpdate:value","options"])):m("",!0),p.name=="modality_id"?(o(),f(v,{key:1,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,options:y(e).modalities},null,8,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),p.type==="iSelectWrite"?(o(),f(V,{key:1,class:"item-max",name:p.name,label:p.label,rules:[{required:p.required,message:p.message}]},{default:t(()=>[p.name=="comercialactivity_id"?(o(),f(v,{key:0,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,"show-search":"",options:y(e).comercialActivities,"filter-option":k},{dropdownRender:t(({menuNode:O})=>[a(y(b),{vnodes:O},null,8,["vnodes"]),a(H,{style:{margin:"4px 0"}}),a(c,{style:{padding:"4px 8px"}},{default:t(()=>[a(Q,{ref_for:!0,ref:"inputRef",value:x.value,"onUpdate:value":U[0]||(U[0]=L=>x.value=L),placeholder:"Nueva actividad"},null,8,["value"]),a(X,{type:"text",onClick:R,loading:D.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),p.name=="economicsector_id"?(o(),f(v,{key:1,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,"show-search":"",options:y(e).economicSectors,"filter-option":k},{dropdownRender:t(({menuNode:O})=>[a(y(b),{vnodes:O},null,8,["vnodes"]),a(H,{style:{margin:"4px 0"}}),a(c,{style:{padding:"4px 8px"}},{default:t(()=>[a(Q,{ref_for:!0,ref:"inputRef",value:A.value,"onUpdate:value":U[1]||(U[1]=L=>A.value=L),placeholder:"Nuevo Sector"},null,8,["value"]),a(X,{type:"text",onClick:s,loading:D.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),p.name=="city_id"?(o(),f(v,{key:2,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,"show-search":"",options:y(e).cities,"filter-option":k,onChange:P},null,8,["value","onUpdate:value","options"])):m("",!0),p.name=="province_id"?(o(),f(v,{key:3,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,"show-search":"",options:y(e).provinces,"filter-option":k,onChange:W,disabled:!d.city_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),p.name=="district_id"?(o(),f(v,{key:4,value:d[p.name],"onUpdate:value":O=>d[p.name]=O,"show-search":"",options:y(e).districts,"filter-option":k,disabled:!d.province_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),p.type==="iText"?(o(),f(V,{key:2,name:p.name,label:p.label,rules:[{required:p.required,message:p.message,type:p.email,max:p.max}]},{default:t(()=>[a(Q,{value:d[p.name],"onUpdate:value":O=>d[p.name]=O,disabled:p.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),r("div",null,T(E()),1),a(V,null,{default:t(()=>[a(X,{class:"btn-produce",type:"primary","html-type":"submit",loading:w.value},{default:t(()=>[M("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Ze=te(Ke,[["__scopeId","data-v-7775003f"]]);const Qe={class:"wrapper-booking"},Xe={class:"grid-booking"},ea={class:"select-notaries"},aa={class:"name"},ta={class:"city"},oa={class:"address"},na={__name:"ActoConstitutivo",props:["info","itemSelectedF20"],emits:["closeDraw"],setup($,{emit:I}){const b=JSON.parse(localStorage.getItem("profile")),n=ue(),z=$,K=I;n.$patch({notaries:n.notaries}),n.$patch({cities:n.cities}),n.fetchNotaries(),n.fetchCities();const F=_(!0),D=_(!1),x=_(null),A=_(null),l=(s,P)=>{const W=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return P.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(W)},w=ie({task:2,name:null,numbernotary:null,notary_id:null,user_id:b.user_id,userupdated_id:b.id}),e=()=>{var s;(s=n.notaries)!=null&&s.length&&(F.value=!1)},d=async()=>{try{const s={city_id:x.value},{data:P}=await Re({url:"public/notaries-filters",method:"GET",params:s});A.value=null,w.notary_id=null;const W=P.map(k=>({value:k.id,name:k.name,city:k.city.name,province:k.province.name,district:k.district.name,address:k.address}));A.value=W}catch(s){console.error("Error de red:",s)}},E=async()=>{D.value=!0,w.people_id=z.info.id;try{const s=await j({url:`formalization/ruc20-step2/${z.itemSelectedF20.id}`,method:"POST",data:w});s.status===200&&(Z.success(s.message),w.name=null,w.numbernotary=null,w.notary_id=null,K("closeDraw",!0))}catch(s){console.log("Error: "+s)}finally{D.value=!1}},R=()=>{Z.error("Debes de completar todos los espacios requeridos")};return(s,P)=>{const W=u("a-select"),k=u("a-form-item"),q=u("a-input"),Y=u("a-button"),i=u("a-form"),U=u("a-spin");return o(),C("div",Qe,[a(U,{spinning:F.value},{default:t(()=>[a(i,{layout:"vertical",model:w,name:"basic",autocomplete:"off",onFinish:E,onFinishFailed:R},{default:t(()=>[r("div",Xe,[(o(!0),C(J,null,ae(y(Ge),(v,V)=>(o(),C(J,{key:V},[v.type==="iSelect"?(o(),f(k,{key:0,class:"item-max",name:v.name,label:v.label,rules:[{required:v.required,message:v.message}]},{default:t(()=>[v.name=="notary_id"?(o(),f(W,{key:0,value:w[v.name],"onUpdate:value":H=>w[v.name]=H,options:A.value,"option-label-prop":"name",disabled:!x.value},{option:t(({value:H,name:Q,city:X,province:c,district:ee,address:N})=>[r("div",ea,[r("span",aa,T(Q),1),r("span",ta,T(X)+" - "+T(c)+" - "+T(ee),1),r("span",oa,T(N),1)])]),_:2},1032,["value","onUpdate:value","options","disabled"])):m("",!0),v.name=="city"?(o(),f(W,{key:1,placeholder:"Seleccionar una provincia para la notaría",style:{width:"350px"},value:x.value,"onUpdate:value":P[0]||(P[0]=H=>x.value=H),"show-search":"",options:y(n).cities,"filter-option":l,onChange:d},null,8,["value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),v.type==="iText"?(o(),f(k,{key:1,name:v.name,label:v.label,rules:[{required:v.required,message:v.message,type:v.email,max:v.max}]},{default:t(()=>[a(q,{value:w[v.name],"onUpdate:value":H=>w[v.name]=H},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),r("div",null,T(e()),1),a(k,null,{default:t(()=>[a(Y,{class:"btn-produce",type:"primary","html-type":"submit",loading:D.value},{default:t(()=>[M("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},la=te(na,[["__scopeId","data-v-c26d766c"]]);const ia={class:"wrapper-booking"},sa={class:"grid-booking"},ra={class:"emp-20"},da={__name:"MypeFinal",props:["itemSelectedF20"],emits:["closeDraw"],setup($,{emit:I}){const b=$,n=I,z=_(!1),K=_(!0),F=ie({task:3,ruc:null}),D=l=>{F[l]=F[l].replace(/\D/g,"")},x=async()=>{z.value=!0,F.mype_id=b.itemSelectedF20.mype.id;try{const l=await j({url:`formalization/ruc20-step3/${b.itemSelectedF20.id}`,method:"POST",data:F});l.status===200&&(Z.success(l.message),F.ruc=null,n("closeDraw",!0))}catch(l){console.log("Error: "+l)}finally{z.value=!1}},A=()=>{Z.error("Debes de completar todos los espacios requeridos")};return(l,w)=>{const e=u("a-input"),d=u("a-form-item"),E=u("a-button"),R=u("a-form");return o(),C("div",ia,[a(R,{layout:"vertical",model:F,name:"basic",autocomplete:"off",onFinish:x,onFinishFailed:A},{default:t(()=>[r("div",sa,[(o(!0),C(J,null,ae(y(Ye),(s,P)=>(o(),C(J,{key:P},[s.type==="iText"?(o(),f(d,{key:0,name:s.name,label:s.label,rules:[{required:s.required,message:s.message,type:s.email,max:s.max,min:s.min}]},{default:t(()=>[a(e,{value:F[s.name],"onUpdate:value":W=>F[s.name]=W,disabled:s.disabled,maxlength:9,onInput:w[0]||(w[0]=W=>D("ruc"))},{prefix:t(()=>[qe(r("span",ra,"20",512),[[Ne,K.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),a(d,null,{default:t(()=>[a(E,{class:"btn-produce",type:"primary","html-type":"submit",loading:z.value},{default:t(()=>[M("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},ca=te(da,[["__scopeId","data-v-7232ccee"]]);const ua={class:"wrapper-booking"},ma={class:"grid-booking"},pa={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup($,{emit:I}){const b=_e({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),n=JSON.parse(localStorage.getItem("profile")),z=$,K=I,F=_(!1),D=_(null),x=_(null),A=_(!1),l=ue(),w=_(!1);l.$patch({cities:l.cities}),l.$patch({provinces:l.provinces}),l.$patch({districts:l.districts}),l.$patch({modalities:l.modalities}),l.$patch({detailProcedures:l.detailProcedures}),l.$patch({economicSectors:l.economicSectors}),l.$patch({comercialActivities:l.comercialActivities}),l.fetchDetailProcedures(),l.fetchModalities(),l.fetchEconomicSectors(),l.fetchComercialActivities(),l.fetchCities();const e=ie({detailprocedure_id:null,modality_id:null,economicsector_id:null,comercialactivity_id:null,city_id:null,province_id:null,district_id:null,user_id:n.user_id}),d=async()=>{try{w.value=!0;const q={name:D.value};(await j({url:"create/comercial-activities",method:"POST",data:q})).status==200&&(D.value=null,l.fetchComercialActivities())}catch(q){console.log(q)}finally{w.value=!1}},E=q=>{e.province_id=null,e.district_id=null,l.fetchProvinces(q)},R=q=>{e.district_id=null,l.fetchDistricts(q)},s=(q,Y)=>{const i=q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return Y.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(i)},P=async()=>{try{A.value=!0;const q={name:x.value};(await j({url:"create/economic-sector",method:"POST",data:q})).status==200&&(x.value=null,l.fetchEconomicSectors())}catch(q){console.log(q)}finally{A.value=!1}},W=async()=>{F.value=!0,e.people_id=z.info.id;try{const q=await j({url:"formalization/create-ruc-10",method:"POST",data:e});q.status===200&&(Z.success(q.message),e.detailprocedure_id=null,e.modality_id=null,e.economicsector_id=null,e.comercialactivity_id=null,e.city_id=null,e.province_id=null,e.district_id=null,K("closeDraw",!0))}catch(q){console.log("Error: "+q)}finally{F.value=!1}},k=()=>{Z.warning("Debes de completar todos los espacios requeridos")};return(q,Y)=>{const i=u("a-select"),U=u("a-form-item"),v=u("a-input"),V=u("a-divider"),H=u("a-button"),Q=u("a-space"),X=u("a-form");return o(),C("div",ua,[a(X,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:W,onFinishFailed:k},{default:t(()=>[r("div",ma,[(o(!0),C(J,null,ae(y(He),(c,ee)=>(o(),C(J,{key:ee},[c.type==="iSelect"?(o(),f(U,{key:0,class:"item-max",name:c.name,label:c.label,rules:[{required:c.required,message:c.message}]},{default:t(()=>[c.name=="detailprocedure_id"?(o(),f(i,{key:0,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,options:y(l).detailProcedures},null,8,["value","onUpdate:value","options"])):m("",!0),c.name=="modality_id"?(o(),f(i,{key:1,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,options:y(l).modalities},null,8,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),c.type==="iText"?(o(),f(U,{key:1,name:c.name,label:c.label,rules:[{required:c.required,message:c.message,type:c.email,max:c.max}]},{default:t(()=>[a(v,{value:e[c.name],"onUpdate:value":N=>e[c.name]=N,disabled:c.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0),c.type==="iSelectWrite"?(o(),f(U,{key:2,class:"item-max",name:c.name,label:c.label,rules:[{required:c.required,message:c.message}]},{default:t(()=>[c.name=="comercialactivity_id"?(o(),f(i,{key:0,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,"show-search":"",options:y(l).comercialActivities,"filter-option":s},{dropdownRender:t(({menuNode:N})=>[a(y(b),{vnodes:N},null,8,["vnodes"]),a(V,{style:{margin:"4px 0"}}),a(Q,{style:{padding:"4px 8px"}},{default:t(()=>[a(v,{ref_for:!0,ref:"inputRef",value:D.value,"onUpdate:value":Y[0]||(Y[0]=p=>D.value=p),placeholder:"Nueva actividad"},null,8,["value"]),a(H,{type:"text",onClick:d,loading:w.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),c.name=="economicsector_id"?(o(),f(i,{key:1,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,"show-search":"",options:y(l).economicSectors,"filter-option":s},{dropdownRender:t(({menuNode:N})=>[a(y(b),{vnodes:N},null,8,["vnodes"]),a(V,{style:{margin:"4px 0"}}),a(Q,{style:{padding:"4px 8px"}},{default:t(()=>[a(v,{ref_for:!0,ref:"inputRef",value:x.value,"onUpdate:value":Y[1]||(Y[1]=p=>x.value=p),placeholder:"Nuevo registro"},null,8,["value"]),a(H,{type:"text",onClick:P,loading:A.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),c.name=="city_id"?(o(),f(i,{key:2,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,"show-search":"",options:y(l).cities,"filter-option":s,onChange:E},null,8,["value","onUpdate:value","options"])):m("",!0),c.name=="province_id"?(o(),f(i,{key:3,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,"show-search":"",options:y(l).provinces,"filter-option":s,onChange:R,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),c.name=="district_id"?(o(),f(i,{key:4,value:e[c.name],"onUpdate:value":N=>e[c.name]=N,"show-search":"",options:y(l).districts,"filter-option":s,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),a(U,null,{default:t(()=>[a(H,{type:"primary",class:"btn-produce","html-type":"submit",loading:F.value},{default:t(()=>[M("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},_a=te(pa,[["__scopeId","data-v-2a7bcb87"]]);const va={class:"wrapper-booking"},fa={class:"grid-booking"},ya={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup($,{emit:I}){const b=_e({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),n=ue(),z=JSON.parse(localStorage.getItem("profile")),K=_(!1),F=$,D=I,x=_(!1),A=_(null),l=_(null);n.$patch({components:n.components}),n.$patch({componentThemes:n.componentThemes}),n.$patch({modalities:n.modalities}),n.$patch({cities:n.cities}),n.fetchComponents(),n.fetchComponentThemes(),n.fetchModalities(),n.fetchCities(),n.fetchGenders();const w=_(!0),e=ie({observations:null,user_id:z.user_id,people_id:null,component_id:null,theme_id:null,modality_id:null,city_id:null,province_id:null,district_id:null}),d=async()=>{try{x.value=!0;const i={name:A.value};(await j({url:"create/component",method:"POST",data:i})).status==200&&(A.value=null,n.fetchComponents())}catch(i){console.log(i)}finally{x.value=!1}},E=async()=>{try{x.value=!0;const i={component_id:e.component_id,name:l.value};(await j({url:"create/theme",method:"POST",data:i})).status==200&&(l.value=null,n.fetchComponentThemes(e.component_id))}catch(i){console.log(i)}finally{x.value=!1}},R=()=>{n.cities&&(w.value=!1)},s=i=>{e.theme_id=null,n.fetchComponentThemes(i)},P=i=>{e.province_id=null,e.district_id=null,n.fetchProvinces(i)},W=i=>{e.district_id=null,n.fetchDistricts(i)},k=(i,U)=>{const v=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return U.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(v)},q=async()=>{K.value=!0,e.people_id=F.info.id;try{const i=await j({url:"advisory/create",method:"POST",data:e});i.status===200&&(Z.success(i.message),e.component_id=null,e.theme_id=null,e.modality_id=null,e.city_id=null,e.province_id=null,e.district_id=null,e.observations=null,D("closeDraw",!0))}catch(i){console.log("Error: "+i)}finally{K.value=!1}},Y=()=>{Z.warning("Debes de completar todos los espacios requeridos")};return(i,U)=>{const v=u("a-select"),V=u("a-form-item"),H=u("a-textarea"),Q=u("a-divider"),X=u("a-input"),c=u("a-button"),ee=u("a-space"),N=u("a-form"),p=u("a-spin");return o(),C("div",va,[a(p,{spinning:w.value},{default:t(()=>[a(N,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:q,onFinishFailed:Y},{default:t(()=>[r("div",fa,[(o(!0),C(J,null,ae(y(Be),(h,O)=>(o(),C(J,{key:O},[h.type==="iSelect"?(o(),f(V,{key:0,class:"item-max",name:h.name,label:h.label,rules:[{required:h.required,message:h.message}]},{default:t(()=>[h.name=="modality_id"?(o(),f(v,{key:0,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,options:y(n).modalities},null,8,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),h.type==="iTextarea"?(o(),f(V,{key:1,name:h.name,label:h.label,rules:[{required:h.required,message:h.message}]},{default:t(()=>[a(H,{value:e[h.name],"onUpdate:value":L=>e[h.name]=L,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):m("",!0),h.type==="iSelectWrite"?(o(),f(V,{key:2,class:"item-max",name:h.name,label:h.label,rules:[{required:h.required,message:h.message}]},{default:t(()=>[h.name=="city_id"?(o(),f(v,{key:0,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,"show-search":"",options:y(n).cities,"filter-option":k,onChange:P},null,8,["value","onUpdate:value","options"])):m("",!0),h.name=="province_id"?(o(),f(v,{key:1,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,"show-search":"",options:y(n).provinces,"filter-option":k,onChange:W,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),h.name=="district_id"?(o(),f(v,{key:2,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,"show-search":"",options:y(n).districts,"filter-option":k,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),h.name=="component_id"?(o(),f(v,{key:3,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,"show-search":"",options:y(n).components,"filter-option":k,onChange:s},{dropdownRender:t(({menuNode:L})=>[a(y(b),{vnodes:L},null,8,["vnodes"]),a(Q,{style:{margin:"4px 0"}}),a(ee,{style:{padding:"4px 8px"}},{default:t(()=>[a(X,{ref_for:!0,ref:"inputRef",value:A.value,"onUpdate:value":U[0]||(U[0]=ne=>A.value=ne),placeholder:"Nueva componente"},null,8,["value"]),a(c,{type:"text",onClick:d,loading:x.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),h.name=="theme_id"?(o(),f(v,{key:4,value:e[h.name],"onUpdate:value":L=>e[h.name]=L,"show-search":"",options:y(n).componentThemes,"filter-option":k,disabled:!e.component_id},{dropdownRender:t(({menuNode:L})=>[a(y(b),{vnodes:L},null,8,["vnodes"]),a(Q,{style:{margin:"4px 0"}}),a(ee,{style:{padding:"4px 8px"}},{default:t(()=>[a(X,{ref_for:!0,ref:"inputRef",value:l.value,"onUpdate:value":U[1]||(U[1]=ne=>l.value=ne),placeholder:"Nueva tema"},null,8,["value"]),a(c,{type:"text",onClick:E,loading:x.value},{icon:t(()=>[a(y(oe))]),default:t(()=>[M(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options","disabled"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),r("div",null,T(R()),1),a(V,null,{default:t(()=>[a(c,{type:"primary",class:"btn-produce","html-type":"submit",loading:K.value},{default:t(()=>[M("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},ha=te(ya,[["__scopeId","data-v-7734f6f3"]]);const ga={key:0},ba={key:0},Sa={key:0},wa={__name:"AsesoriasHistorial",props:["totaladvisories","totalformalization10","totalformalization20"],setup($){const I=$,b=_("1"),n=[{title:"#",dataIndex:"idx",width:50,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:40},{title:"Asesor",dataIndex:"asesor",width:100},{title:"Componente",dataIndex:"component",width:100},{title:"Tema",dataIndex:"theme",width:100},{title:"Modalidad",dataIndex:"modality",align:"center",width:100},{title:"Ciudad",dataIndex:"city",width:40},{title:"Provincia",dataIndex:"province",width:40},{title:"Distrito",dataIndex:"district",width:40}],z=[{title:"#",dataIndex:"idx",width:50,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:40},{title:"Asesor",dataIndex:"asesor",width:100},{title:"Detalle del trámite",dataIndex:"detailprocedure",width:100},{title:"Sector económico",dataIndex:"economicsector",width:100},{title:"Actividad comercial",dataIndex:"comercialactivity",width:100},{title:"Modalidad",dataIndex:"modality",align:"center",width:100},{title:"Ciudad",dataIndex:"city",width:40},{title:"Provincia",dataIndex:"province",width:40},{title:"Distrito",dataIndex:"district",width:40}],K=[{title:"#",dataIndex:"idx",width:50,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:120},{title:"Asesor",dataIndex:"asesor",width:150},{title:"Paso",dataIndex:"task",width:50},{title:"Código SUNARP",dataIndex:"codesunarp",width:100},{title:"Sector económico",dataIndex:"economicsector",width:100},{title:"Actividad comercial",dataIndex:"comercialactivity",width:100},{title:"Notaría",dataIndex:"numbernotary",width:100},{title:"Régimen",dataIndex:"regime",width:80,align:"center"},{title:"MYPE",dataIndex:"mypename",width:100},{title:"MYPE RUC",dataIndex:"myperuc",width:80},{title:"Modalidad",dataIndex:"modality",align:"center",width:80},{title:"Ciudad",dataIndex:"city",width:30},{title:"Provincia",dataIndex:"province",width:30},{title:"Distrito",dataIndex:"district",width:30},{title:"Dirección",dataIndex:"address",width:100}],F=D=>ge(D).format("DD/MM/YYYY HH:mm A");return(D,x)=>{const A=u("a-table"),l=u("a-card"),w=u("a-tab-pane"),e=u("a-tabs");return o(),f(e,{activeKey:b.value,"onUpdate:activeKey":x[0]||(x[0]=d=>b.value=d),type:"card",class:"box-hist"},{default:t(()=>[a(w,{key:"1",tab:"ASESORÍAS"},{default:t(()=>[a(l,null,{default:t(()=>[a(A,{columns:n,"data-source":I.totaladvisories,bordered:"",pagination:!1,size:"small",scroll:{x:1600},"expand-column-width":100},{bodyCell:t(({index:d,column:E,record:R})=>[E.dataIndex==="idx"?(o(),C("span",ga,T(d+1),1)):m("",!0),E.dataIndex==="date_start"?(o(),C(J,{key:1},[M(T(F(R.createDate)),1)],64)):m("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1}),a(w,{key:"2",tab:"RUC 10"},{default:t(()=>[a(l,null,{default:t(()=>[a(A,{columns:z,"data-source":I.totalformalization10,bordered:"",pagination:!1,size:"small",scroll:{x:1800},"expand-column-width":100},{bodyCell:t(({index:d,column:E,record:R})=>[E.dataIndex==="idx"?(o(),C("span",ba,T(d+1),1)):m("",!0),E.dataIndex==="date_start"?(o(),C(J,{key:1},[M(T(F(R.createDate)),1)],64)):m("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1}),a(w,{key:"3",tab:"RUC 20"},{default:t(()=>[a(l,null,{default:t(()=>[a(A,{columns:K,"data-source":I.totalformalization20,bordered:"",pagination:!1,size:"small",scroll:{x:2200},"expand-column-width":100},{bodyCell:t(({index:d,column:E,record:R})=>[E.dataIndex==="idx"?(o(),C("span",Sa,T(d+1),1)):m("",!0),E.dataIndex==="date_start"?(o(),C(J,{key:1},[M(T(F(R.createDate)),1)],64)):m("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1})]),_:1},8,["activeKey"])}}},xa=te(wa,[["__scopeId","data-v-9962d363"]]);const G=$=>(Oe("data-v-042c5171"),$=$(),Te(),$),Ua={class:"asesorias"},ka=G(()=>r("h3",null,"REGISTRO DE FORMALIZACIONES Y ASESRÍAS",-1)),Ca=G(()=>r("br",null,null,-1)),Ia={class:"wrapper-s"},Da=G(()=>r("label",{class:"label"},"Seleccione el tipo de documento",-1)),Aa=G(()=>r("label",{class:"label"},"Digite el número de documento",-1)),Ra={class:"column-2"},qa={class:"info-update"},Na=G(()=>r("h4",null,"RESULTADO DE LA BÚSQUEDA",-1)),za={class:"info-personal"},Fa=G(()=>r("span",null,"Apellidos y nombres: ",-1)),$a=G(()=>r("span",null,"Número de celular:",-1)),Oa=G(()=>r("span",null,"Correo electrónico:",-1)),Ta=G(()=>r("span",null,"Asesorías:",-1)),Ea=G(()=>r("span",null,"Formalizaciones RUC 20:",-1)),Pa={class:"alert-incomplete"},La=G(()=>r("span",null,"Formalizaciones RUC 10:",-1)),Ma=G(()=>r("h4",null,"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),Wa={class:"card-as-btn"},Va=G(()=>r("h4",null,"HISTORIAL",-1)),Ga={class:"steps-content"},Ya=["onClick"],Ha={class:"pendient"},Ba={key:0,class:"info-tag"},ja=G(()=>r("b",null,"Paso",-1)),Ja={key:1,class:"info-tag"},Ka=G(()=>r("b",null,"Siguiente paso",-1)),Za={key:2,class:"info-tag"},Qa=G(()=>r("b",null,"Siguiente paso",-1)),Xa={class:"info"},et=G(()=>r("b",null,"Código SID SUNARP",-1)),at={class:"code-number"},tt=G(()=>r("b",null,"Última consulta",-1)),ot=G(()=>r("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),nt=[ot],lt={__name:"AsesoriasFormalizaciones",setup($){const I=ze(),b=he(),n=_(0),z=_(null),K=_([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]),F=_(null),D=_(!1),x=_(null),A=_(!1),l=_(!1),w=_(!1),e=_(!1),d=_(!1),E=_(!1),R=_(""),s=_([]),P=_(!1),W=_(0),k=_(!1),q=_([]),Y=_(null),i=_([]),U=_([]),v=_([]),V=_(!1),H=()=>{fe(R.value),D.value=!1},Q=B=>ge(B).format("DD/MM/YYYY HH:mm A"),X=()=>{ee()},c=()=>{R.value=R.value.replace(/\D/g,"")},ee=()=>{R.value="",s.value=[],q.value=[],I.push({name:"asesorias-formalizaciones"})},N=()=>{if(x.value=null,x.value=s.value,!z.value)return Z.warning("Seleccionar un tipo de servicio");z.value=="asesoria"&&(E.value=!0),z.value=="ruc10"&&(d.value=!0),z.value=="ruc20"&&L()},p=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],h=()=>{F.value=s.value,D.value=!0},O=()=>{W.value=0,e.value=!0,l.value=!1},L=async()=>{try{k.value=!0;const B=await j({url:`formalization/list-ruc-20/${s.value.id}`,method:"GET"});if(B.length<1)return O();w.value=B,l.value=!0}catch(B){console.log(B)}finally{k.value=!1}},ne=async B=>{A.value=!0,W.value=B.task,Y.value=B,setTimeout(()=>{A.value=!1,e.value=!0,l.value=!1},400)},le=async()=>{P.value=!0;const B=await j({url:`person/found/${n.value}/${R.value}`,method:"GET"});if(B.status==200)return s.value=B.data,P.value=!1},fe=async B=>{if(P.value=!0,!B)return Z.warning("Ingresa un número de documento"),P.value=!1;if(n.value==0)return Z.warning("Seleccionar el tipo de documento"),P.value=!1;if(n.value==1&&R.value.length<8){Z.warning("El número de DNI está incompleto"),P.value=!1;return}const g=await j({url:`person/found/${n.value}/${R.value}`,method:"GET"});if(g.status==200)return s.value=g.data,be(g.data.id),P.value=!1;if(g.status===404){const se={type:n.value,access:"asesorias",number:R.value};I.push({name:"registrar-persona",query:se})}},be=async B=>{try{const{data:g}=await j({url:`historial/registers/${B}`,method:"GET"});i.value=g.advisories,U.value=g.formalization10,v.value=g.formalization20,V.value=!0}catch(g){console.error("Error de red:",g)}};return Fe(()=>{b.query.type&&(console.log("ooaoooaoaa",b.query.type),n.value=b.query.type,R.value=b.query.number)}),(B,g)=>{const se=u("a-radio"),Se=u("a-radio-group"),we=u("a-input-search"),re=u("a-card"),xe=u("a-select"),Ue=u("a-button"),ke=u("a-step"),Ce=u("a-steps"),de=u("a-drawer"),me=u("a-tag"),Ie=u("a-spin"),De=u("a-modal");return o(),C(J,null,[r("div",Ua,[ka,Ca,a(re,{class:"card-as"},{default:t(()=>[y(b).query.dni?(o(),f(y(We),{key:0,class:"ico-reload",onClick:X})):m("",!0),r("div",Ia,[r("div",null,[Da,a(Se,{value:n.value,"onUpdate:value":g[0]||(g[0]=S=>n.value=S),onChange:ee,class:"radio-produce"},{default:t(()=>[a(se,{value:"1"},{default:t(()=>[M("DNI")]),_:1}),a(se,{value:"2"},{default:t(()=>[M("CE")]),_:1})]),_:1},8,["value"])]),r("div",null,[Aa,a(we,{"enter-button":"BUSCAR",value:R.value,"onUpdate:value":g[1]||(g[1]=S=>R.value=S),placeholder:"",loading:P.value,onSearch:fe,onInput:c,class:"search-produce",maxlength:n.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),r("div",Ra,[s.value.length!=0?(o(),f(re,{key:0,class:"card-as"},{default:t(()=>{var S,ce,pe;return[r("div",qa,[Na,a(y($e),{class:"ico-edit",onClick:h})]),r("div",za,[Fa,r("span",null,T(s.value.lastname)+" "+T(s.value.middlename)+", "+T(s.value.name),1),$a,r("span",null,[r("span",null,T(s.value.phone?s.value.phone:"-"),1)]),Oa,r("span",null,T(s.value.email?s.value.email:"-"),1),Ta,r("b",null,T((S=s.value)==null?void 0:S.idadvisory.length),1),Ea,r("div",Pa,[r("b",null,T((ce=s.value)==null?void 0:ce.idformalization20.length),1)]),La,r("b",null,T((pe=s.value)==null?void 0:pe.idformalization10.length),1)])]}),_:1})):m("",!0),s.value.length!=0?(o(),f(re,{key:1,class:"card-as"},{default:t(()=>[Ma,r("div",Wa,[a(xe,{style:{"min-width":"200px"},value:z.value,"onUpdate:value":g[2]||(g[2]=S=>z.value=S),options:K.value},null,8,["value","options"]),a(Ue,{class:"btn-produce",type:"primary",onClick:N},{default:t(()=>[M("REGISTRAR")]),_:1})])]),_:1})):m("",!0)]),V.value?(o(),f(re,{key:0,class:"card-as"},{default:t(()=>[Va,a(xa,{totaladvisories:i.value,totalformalization10:U.value,totalformalization20:v.value},null,8,["totaladvisories","totalformalization10","totalformalization20"])]),_:1})):m("",!0)]),r("section",null,[a(de,{width:"510",title:"Formalización con RUC 20",open:e.value,"onUpdate:open":g[6]||(g[6]=S=>e.value=S),placement:"right"},{default:t(()=>[a(Ce,{current:W.value,size:"small",class:"steps"},{default:t(()=>[(o(),C(J,null,ae(p,S=>a(ke,{key:S.title,title:S.title},null,8,["title"])),64))]),_:1},8,["current"]),r("div",Ga,[W.value==0?(o(),f(Ze,{key:0,info:x.value,onCloseDraw:g[3]||(g[3]=S=>(e.value=!1,le()))},null,8,["info"])):m("",!0),W.value==1?(o(),f(la,{key:1,info:x.value,itemSelectedF20:Y.value,onCloseDraw:g[4]||(g[4]=S=>(e.value=!1,le()))},null,8,["info","itemSelectedF20"])):m("",!0),W.value==2?(o(),f(ca,{key:2,itemSelectedF20:Y.value,onCloseDraw:g[5]||(g[5]=S=>(e.value=!1,le()))},null,8,["itemSelectedF20"])):m("",!0)])]),_:1},8,["open"]),a(de,{title:"Formalización con RUC 10",open:d.value,"onUpdate:open":g[8]||(g[8]=S=>d.value=S),placement:"right"},{default:t(()=>[a(_a,{info:s.value,onCloseDraw:g[7]||(g[7]=S=>(d.value=!1,le()))},null,8,["info"])]),_:1},8,["open"]),a(de,{title:"Nueva asesoría",open:E.value,"onUpdate:open":g[10]||(g[10]=S=>E.value=S),placement:"right"},{default:t(()=>[a(ha,{info:s.value,onCloseDraw:g[9]||(g[9]=S=>(E.value=!1,le()))},null,8,["info"])]),_:1},8,["open"]),a(De,{open:l.value,"onUpdate:open":g[11]||(g[11]=S=>l.value=S),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:t(()=>[a(Ie,{spinning:A.value},{default:t(()=>[(o(!0),C(J,null,ae(w.value,(S,ce)=>(o(),C("div",{key:ce,onClick:pe=>ne(S)},[r("div",Ha,[S.task==0?(o(),C("div",Ba,[ja,M(),a(me,{color:"error"},{default:t(()=>[M("Reserva de nombre")]),_:1})])):m("",!0),S.task==1?(o(),C("div",Ja,[Ka,M(),a(me,{color:"warning"},{default:t(()=>[M("Acto constitutivo")]),_:1})])):m("",!0),S.task==2?(o(),C("div",Za,[Qa,M(),a(me,{color:"success"},{default:t(()=>[M("Formalizar")]),_:1})])):m("",!0),r("div",Xa,[et,r("span",null,[r("b",at,T(S.codesunarp),1)]),tt,r("span",null,T(Q(S.updated_at)),1)])])],8,Ya))),128)),r("div",{class:"pendient pendient-btn btn-produce",onClick:O},nt)]),_:1},8,["spinning"])]),_:1},8,["open"]),a(de,{open:D.value,"onUpdate:open":g[12]||(g[12]=S=>D.value=S),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:t(()=>[a(Ee,{onCloseDraw:H,updateValues:F.value},null,8,["updateValues"])]),_:1},8,["open"])])],64)}}},mt=te(lt,[["__scopeId","data-v-042c5171"]]);export{mt as default};
