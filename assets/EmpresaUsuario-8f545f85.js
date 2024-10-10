import{f as Z}from"./nuevaPersonaCompany-ed7b2d3e.js";import{r as p,x as ee,u as ae,a as ne,B as P,j as te,b as v,o as r,d as k,c as f,w as _,e as le,F as D,v as oe,p as u,q as i,h as N,i as se,f as m,m as S}from"./index-7992612a.js";import{t as re,c as de}from"./selects-c77e0024.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";const ie={class:"agreement-wrapper"},ce={class:"grid-item"},me={__name:"EmpresaUsuario",props:["idWorkshop"],emits:["handleCreateItem"],setup(C,{emit:q}){const I=C,c=JSON.parse(localStorage.getItem("user")),$=q,l=p(Z);ee(),ae(),p(null);const b=p(!1),g=p(!1),U=p([]),h=p([]),y=p([]),F=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],e=ne({id_workshop:I.idWorkshop,ruc:null,social_reason:null,category:null,person_type:null,document_type:"dni",number_document:null,last_name:null,middle_name:null,name:null,department:null,province:null,district:null,phone:null,email:null,created_by:P,update_by:P,post:4}),B=()=>{e.ruc=null,e.social_reason=null,e.category=null,e.person_type=null,e.document_type=null,e.number_document=null,e.last_name=null,e.middle_name=null,e.name=null,e.department=null,e.province=null,e.district=null,e.phone=null,e.email=null},G=()=>{l.value.category.disabled=!1,l.value.person_type.disabled=!1,l.value.document_type.disabled=!1,l.value.number_document.disabled=!1},w=()=>{l.value.last_name.disabled=!1,l.value.middle_name.disabled=!1,l.value.name.disabled=!1,l.value.department.disabled=!1,l.value.province.disabled=!1,l.value.district.disabled=!1,l.value.phone.disabled=!1,l.value.email.disabled=!1},E=()=>{l.value.social_reason.disabled=!0,l.value.category.disabled=!0,l.value.person_type.disabled=!0,l.value.document_type.disabled=!0,l.value.number_document.disabled=!0,l.value.last_name.disabled=!0,l.value.middle_name.disabled=!0,l.value.name.disabled=!0,l.value.department.disabled=!0,l.value.province.disabled=!0,l.value.district.disabled=!0,l.value.phone.disabled=!0,l.value.email.disabled=!0},O=t=>{e[t]=e[t].replace(/\D/g,"")},A=async()=>{b.value=!0;try{const t=e.ruc,{data:n}=await m({url:`/public/company/${t}`,method:"GET"});n&&(e.social_reason=n.razonSocial,G()),n.social_reason&&(e.social_reason=n.social_reason,e.category=n.category,e.person_type=n.person_type)}catch(t){console.log(t),S.error("El número ingresado no es válido"),e.ruc=null}finally{b.value=!1}},R=async()=>{if(!e.document_type)return S.warning("Debes escoger un tipo de documento");b.value=!0;try{const t=await m({url:`/public/person/${e.document_type}/${e.number_document}`,method:"GET"});if(t.status===404)return w();const n=t.data;e.name=n.nombres,e.last_name=n.apellidoPaterno,e.middle_name=n.apellidoMaterno,n.department&&(e.department=n.department,T(n.department)),n.province&&(e.province=n.province,x(n.province)),n.document_type&&(e.document_type=n.document_type),n.district&&(e.district=n.district),n.email&&(e.email=n.email),n.phone&&(e.phone=n.phone),w()}catch(t){console.log("You have an error",t)}finally{b.value=!1}},V=async t=>{if(t=="ruc")return A();if(t=="number_document")return R()},M=t=>{B(),E(),e.document_type=t},L=(t,n)=>{e.province=null,e.district=null,h.value=[],y.value=[],T(n.value)},W=(t,n)=>{e.district=null,y.value=[],x(n.value)},Y=async()=>{try{const{data:t}=await m({url:"/departaments",method:"GET"});let n=t.map(s=>({label:s.label,value:s.id}));U.value=[...U.value,...n],E()}catch(t){console.log(t)}},T=async t=>{try{const{data:n}=await m({url:`/province/${t}`,method:"GET"});let s=n.map(d=>({label:d.label,value:d.id}));h.value=[...h.value,...s]}catch(n){console.log(n)}},x=async t=>{try{const{data:n}=await m({url:`/district/${t}`,method:"GET"});let s=n.map(d=>({label:d.label,value:d.id}));y.value=[...y.value,...s]}catch(n){console.log(n)}},j=async()=>{g.value=!0;try{const t={ruc:e.ruc,social_reason:e.social_reason,category:e.category,person_type:e.person_type,department:e.department,province:e.province,district:e.district,email:e.email,phone:e.phone,created_by:c?c.id:null,update_by:c?c.id:null},n={document_type:e.document_type,number_document:e.number_document,last_name:e.last_name,middle_name:e.middle_name,name:e.name,department:e.department,province:e.province,district:e.district,email:e.email,phone:e.phone,created_by:c?c.id:null,update_by:c?c.id:null,post:4},s={ruc:e.ruc,number_document:e.number_document};await m({url:"/public/company",method:"POST",data:t}),await m({url:"/public/new-person",method:"POST",data:n}),await m({url:"/public/company-user",method:"POST",data:s}),$("registerMYPE",s)}catch{}finally{g.value=!1}},z=()=>{S.error("Debes de completar todos los espacios requeridos")};return te(Y),(t,n)=>{const s=v("a-select"),d=v("a-form-item"),J=v("a-input-search"),H=v("a-input"),K=v("a-button"),Q=v("a-form");return r(),k("div",ie,[f(Q,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:j,onFinishFailed:z},{default:_(()=>[le("div",ce,[(r(!0),k(D,null,oe(l.value,(a,X)=>(r(),k(D,{key:X},[a.type==="iSelect"?(r(),u(d,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:_(()=>[a.name=="document_type"?(r(),u(s,{key:0,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:F,disabled:a.disabled,onChange:M},null,8,["value","onUpdate:value","disabled"])):i("",!0),a.name=="department"?(r(),u(s,{key:1,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:U.value,onChange:L,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0),a.name=="province"?(r(),u(s,{key:2,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:h.value,onChange:W,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0),a.name=="district"?(r(),u(s,{key:3,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:y.value,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0),a.name=="person_type"?(r(),u(s,{key:4,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:N(re),disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0),a.name=="category"?(r(),u(s,{key:5,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:N(de),disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),a.type==="iSearch"?(r(),u(d,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:_(()=>[f(J,{maxlength:15,loading:b.value,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,disabled:a.disabled,onSearch:o=>V(a.name),onInput:o=>O(a.name)},null,8,["loading","value","onUpdate:value","disabled","onSearch","onInput"])]),_:2},1032,["name","label","rules"])):i("",!0),a.type==="iText"?(r(),u(d,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max}]},{default:_(()=>[f(H,{value:e[a.name],"onUpdate:value":o=>e[a.name]=o,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128)),f(d,{class:"btn-send"},{default:_(()=>[f(K,{type:"primary","html-type":"submit",loading:g.value},{default:_(()=>n[0]||(n[0]=[se("CONTINUAR")])),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])}}},ye=ue(me,[["__scopeId","data-v-69e272a8"]]);export{ye as E};
