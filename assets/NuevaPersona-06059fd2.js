import{u as Z}from"./selectes-a5f9f5eb.js";import{d as ee}from"./selects-56d2dd8e.js";import{K as E,x as ae,u as te,r as h,a as ne,k as le,b as m,o as s,d as k,c as _,w as c,e as S,F as P,B as se,q as d,h as p,s as o,L as ie,t as de,i as re,p as oe,j as ue,m as y,y as Y}from"./index-aeef91b7.js";import"./es-e8b85dd7.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";const ce={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},documentnumber:{type:"iSearch",label:"Ingresar número",name:"documentnumber",required:!0,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido paterno",disabled:!0},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido materno",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!0},city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"Dirección",name:"address",required:!1,message:"Escribir dirección",disabled:!1},phone:{type:"iText",label:"Número Telefónico del contacto",name:"phone",required:!0,message:"Número de celular",max:9,disabled:!0},email:{type:"iText",label:"Correo electrónico",name:"email",required:!0,message:"Ingresar email",email:"email",disabled:!0},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"Seleccionar fecha",disabled:!0},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},lession:{type:"iSelect",label:"¿Tiene discapacidad?",name:"lession",required:!0,message:"¿Tiene discapacidad?",disabled:!0}};const L=q=>(oe("data-v-6560ba14"),q=q(),ue(),q),pe={class:"agreement-wrapper"},be=L(()=>S("h3",null,"Formulario de registro",-1)),ve=L(()=>S("br",null,null,-1)),_e={class:"grid-item"},ye="YYYY-MM-DD",fe={__name:"NuevaPersona",setup(q){E.locale("es");const f=ae(),n=Z();n.$patch({typeDocuments:n.typeDocuments}),n.$patch({cities:n.cities}),n.$patch({provinces:n.provinces}),n.$patch({districts:n.districts}),n.$patch({genders:n.genders}),n.fetchTypeDocuments(),n.fetchCities(),n.fetchGenders();const M=te(),U=JSON.parse(localStorage.getItem("profile")),t=h(ce),b=h(!1),g=h(null),D=h(!1),N=h(!0),e=ne({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,city_id:null,address:null,province_id:null,district_id:null,phone:null,email:null,birthday:null,gender_id:null,lession:null,people_id:U.user_id,from_id:1}),x=(i,r)=>{const u=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(u)},$=()=>{n.typeDocuments&&(N.value=!1)},T=()=>{t.value.lastname.disabled=!1,t.value.middlename.disabled=!1,t.value.name.disabled=!1,t.value.city_id.disabled=!1,t.value.province_id.disabled=!1,t.value.district_id.disabled=!1,t.value.address.disabled=!1,t.value.phone.disabled=!1,t.value.email.disabled=!1,t.value.birthday.disabled=!1,t.value.gender_id.disabled=!1,t.value.lession.disabled=!1},w=i=>{i&&(t.value.documentnumber.disabled=!1,e.documentnumber=null)},I=async i=>{if(b.value=!0,!i)return y.warning("Ingresa un número de documento"),b.value=!1;if(e.typedocument_id==1){if(e.documentnumber.length<8)return y.warning("El número de DNI está incompleto");{const r=await Y({url:`user/dni-data/${e.documentnumber}`,method:"GET"});if(r.status===404)return y.warning("Este número de DNI no se pudo encontrar, igual se desabilitará"),T(),b.value=!1;e.lastname=r.data.apellidoPaterno,e.middlename=r.data.apellidoMaterno,e.name=r.data.nombres,b.value=!1}}T(),b.value=!1},z=()=>{e.documentnumber=e.documentnumber.replace(/\D/g,"")},R=()=>{e.phone=e.phone.replace(/\D/g,"")},B=i=>{e.province_id=null,e.district_id=null,n.fetchProvinces(i)},A=i=>{e.district_id=null,n.fetchDistricts(i)},G=()=>{e.lastname=null,e.middlename=null,e.name=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.phone=null,e.email=null,e.birthday=null,e.gender_id=null,e.lession=null,e.typedocument_id=null,e.documentnumber=null,e.from_id=1,e.people_id=U.id,g.value=null,F()},F=()=>{t.value.documentnumber.disabled=!0,t.value.lastname.disabled=!0,t.value.middlename.disabled=!0,t.value.name.disabled=!0,t.value.city_id.disabled=!0,t.value.city_id.disabled=!0,t.value.province_id.disabled=!0,t.value.address.disabled=!0,t.value.phone.disabled=!0,t.value.email.disabled=!0,t.value.birthday.disabled=!0,t.value.gender_id.disabled=!0,t.value.lession.disabled=!0},V=async()=>{D.value=!0,e.birthday=g.value?E(g.value).format("YYYY-MM-DD"):null;try{const i=await Y({url:"person/create",method:"POST",data:e}),r={type:e.typedocument_id,number:e.documentnumber};M.push({name:"asesorias-formalizaciones",query:r}),y.success(i.message),G()}catch{y.error("No se pudo registrar este usuario")}finally{D.value=!1}},O=()=>{y.error("Debes de completar todos los espacios requeridos")},j=()=>{F(),f.query&&(e.typedocument_id=+f.query.type,w(f.query.type),e.documentnumber=f.query.number,I(f.query.number))};return le(()=>{j()}),(i,r)=>{const u=m("a-select"),v=m("a-form-item"),J=m("a-input-search"),C=m("a-input"),K=m("a-date-picker"),H=m("a-button"),Q=m("a-form"),W=m("a-spin");return s(),k("div",pe,[be,ve,_(W,{spinning:N.value},{default:c(()=>[_(Q,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:V,onFinishFailed:O},{default:c(()=>[S("div",_e,[(s(!0),k(P,null,se(t.value,(a,X)=>(s(),k(P,{key:X},[a.type==="iSelect"?(s(),d(v,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[a.name=="typedocument_id"?(s(),d(u,{key:0,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(n).typeDocuments,disabled:a.disabled,onChange:w},null,8,["value","onUpdate:value","options","disabled"])):o("",!0),a.name=="city_id"?(s(),d(u,{key:1,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(n).cities,"show-search":"","filter-option":x,onChange:B,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):o("",!0),a.name=="province_id"?(s(),d(u,{key:2,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(n).provinces,"show-search":"","filter-option":x,onChange:A,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):o("",!0),a.name=="district_id"?(s(),d(u,{key:3,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(n).districts,"show-search":"","filter-option":x,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):o("",!0),a.name=="gender_id"?(s(),d(u,{key:4,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(n).genders,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):o("",!0),a.name=="lession"?(s(),d(u,{key:5,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:p(ee),disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0),a.type==="iSearch"?(s(),d(v,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[_(J,{loading:b.value,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,onSearch:I,onInput:z,maxlength:e.typedocument_id==1?8:20,disabled:a.disabled},null,8,["loading","value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):o("",!0),a.type==="iText"?(s(),d(v,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max}]},{default:c(()=>[a.name=="phone"?(s(),d(C,{key:0,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,disabled:a.disabled,maxlength:a.max,onInput:R},null,8,["value","onUpdate:value","disabled","maxlength"])):(s(),d(C,{key:1,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,disabled:a.disabled,maxlength:a.max},null,8,["value","onUpdate:value","disabled","maxlength"]))]),_:2},1032,["name","label","rules"])):o("",!0),a.type==="iDate"?(s(),d(v,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[_(K,{locale:p(ie),value:g.value,"onUpdate:value":r[0]||(r[0]=l=>g.value=l),style:{width:"100%"},format:ye,disabled:a.disabled},null,8,["locale","value","disabled"])]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),S("div",null,de($()),1),_(v,null,{default:c(()=>[_(H,{class:"btn-produce",type:"primary","html-type":"submit",loading:D.value},{default:c(()=>[re("REGISTRAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},xe=me(fe,[["__scopeId","data-v-6560ba14"]]);export{xe as default};
