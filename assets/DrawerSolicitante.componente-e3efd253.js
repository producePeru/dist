import{u as $}from"./selectes-639f74bd.js";import{N as v,r as f,a as A,k as I,M as R,b as d,o,s,w as u,c as _,e as j,d as U,F as x,y as G,h as c,v as r,O as J,i as H,B as K,m as h}from"./index-b7e174ec.js";import"./es-cb05a220.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const W={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!1,message:"Seleccionar tipo de documento",disabled:!0},documentnumber:{type:"iText",label:"Número de documento",name:"documentnumber",required:!1,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido",disabled:!1},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido",disabled:!1},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!1},country_id:{type:"iSelect",label:"País Origen",name:"country_id",required:!0,message:"Escribir nombre",disabled:!1},city_id:{type:"iSelect",label:"Región",name:"city_id",required:!0,message:"Seleccionar una región",disabled:!1},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección",name:"address",required:!0,message:"Escribir dirección",disabled:!1},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!0,message:"Seleccionar fecha",disabled:!1},phone:{type:"iText",label:"Número de celular",name:"phone",required:!0,message:"Número de contacto y 9 max",max:9,disabled:!1},email:{type:"iText",label:"Correo electrónico",name:"email",required:!1,message:"Escribir un email",email:"email",disabled:!1},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar tipo de documento"},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"Seleccionar"},hasSoon:{type:"iSelect",label:"¿Tiene hijos?",name:"hasSoon",required:!0,message:"¿Tiene hijos?",disabled:!1}};const X={class:"grid-profile"},Z="DD/MM/YYYY",ee={__name:"DrawerSolicitante.componente",props:["updateValues"],emits:["closeDraw"],setup(T,{emit:N}){v.locale("es");const n=$();JSON.parse(localStorage.getItem("profile"));const w=N,b=T;n.$patch({typeDocuments:n.typeDocuments}),n.$patch({cities:n.countries}),n.$patch({cities:n.cities}),n.$patch({genders:n.genders}),n.fetchTypeDocuments(),n.fetchCountries(),n.fetchCities(),n.fetchGenders();const S=f(!0),g=f(!1),Y=f(W);f(null);const e=A({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,city_id:null,province_id:null,district_id:null,phone:null,email:null,gender_id:null,birthday:null,sick:null,country_id:null});I(()=>{b.updateValues&&k(b.updateValues)}),R(()=>b.updateValues,t=>{t&&k(t)});const k=t=>{e.typedocument_id=t.typedocument_id,e.documentnumber=t.documentnumber,e.lastname=t.lastname,e.middlename=t.middlename,e.name=t.name,e.city_id=t.city_id,D(t.city_id),q(t.province_id),e.province_id=t.province_id,e.district_id=t.district_id,e.phone=t.phone,e.email=t.email,e.gender_id=t.gender_id,e.sick=t.sick,e.country_id=t.country_id?t.country_id:155,e.address=t.address,e.hasSoon=t.hasSoon,t.birthday&&(e.birthday=v(t.birthday,"YYYY-MM-DD")),setTimeout(()=>{S.value=!1},2e3)},C=[{value:"SI",label:"Si"},{value:"NO",label:"No"}],E=[{label:"Si",value:"yes"},{label:"No",value:"no"}],D=t=>{e.province_id=null,e.district_id=null,n.fetchProvinces(t)},q=t=>{e.district_id=null,n.fetchDistricts(t)},y=(t,m)=>{const l=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return m.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(l)},F=async()=>{let t={lastname:e.lastname,middlename:e.middlename,name:e.name,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,phone:e.phone,email:e.email,gender_id:e.gender_id,birthday:e.birthday?v(e.birthday).format("YYYY-MM-DD"):null,sick:e.sick,hasSoon:e.hasSoon,country_id:e.country_id};g.value=!0;try{const m=await K({url:`person/update/${b.updateValues.id}`,method:"PUT",data:t});h.success(m.message),w("closeDraw",!0)}catch(m){if(m.response.status==550)return h.error("El usuario ya se encuentra registrado");h.error("Error al registrar")}finally{g.value=!1}},M=()=>{h.error("Debes de completar todos los espacios requeridos")};return(t,m)=>{const l=d("a-select"),p=d("a-form-item"),V=d("a-input"),P=d("a-date-picker"),z=d("a-button"),B=d("a-form"),L=d("a-spin");return o(),s(L,{spinning:S.value},{default:u(()=>[_(B,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:F,onFinishFailed:M},{default:u(()=>[j("div",X,[(o(!0),U(x,null,G(Y.value,(a,O)=>(o(),U(x,{key:O},[a.type==="iSelect"?(o(),s(p,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[a.name=="typedocument_id"?(o(),s(l,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:c(n).typeDocuments,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),a.name=="city_id"?(o(),s(l,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:c(n).cities,"filter-option":y,onChange:D},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="province_id"?(o(),s(l,{key:2,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:c(n).provinces,"filter-option":y,onChange:q},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="district_id"?(o(),s(l,{key:3,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:c(n).districts,"filter-option":y},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="gender_id"?(o(),s(l,{key:4,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:c(n).genders},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="sick"?(o(),s(l,{key:5,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:E},null,8,["value","onUpdate:value"])):r("",!0),a.name=="hasSoon"?(o(),s(l,{key:6,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:C},null,8,["value","onUpdate:value"])):r("",!0),a.name=="country_id"?(o(),s(l,{key:7,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:c(n).countries,"show-search":"","filter-option":y},null,8,["value","onUpdate:value","options"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),a.type==="iText"?(o(),s(p,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:u(()=>[_(V,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),a.type==="iDate"?(o(),s(p,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[_(P,{locale:c(J),value:e[a.name],"onUpdate:value":i=>e[a.name]=i,style:{width:"100%"},format:Z,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),_(p,null,{default:u(()=>[_(z,{class:"btn-produce",type:"primary","html-type":"submit",loading:g.value},{default:u(()=>[H("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},oe=Q(ee,[["__scopeId","data-v-13b8c7ad"]]);export{oe as S};
