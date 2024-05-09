import{u as X}from"./selectes-b02c034e.js";import{d as Z}from"./selects-56d2dd8e.js";import{K as P,x as ee,u as ae,r as h,a as te,k as ne,b as u,o as d,d as D,c as v,w as m,e as S,F as C,B as le,q as s,h as c,s as r,L as de,t as se,i as ie,p as re,j as oe,m as _,y as E}from"./index-37e9f6da.js";import"./es-47cd2544.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";const me={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},documentnumber:{type:"iSearch",label:"Ingresar número",name:"documentnumber",required:!0,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido paterno",disabled:!0},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido materno",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!0},city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},phone:{type:"iText",label:"Número Telefónico del contacto",name:"phone",required:!0,message:"Número de celular",max:9,disabled:!0},email:{type:"iText",label:"Correo electrónico",name:"email",required:!0,message:"Ingresar email",email:"email",disabled:!0},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"Seleccionar fecha",disabled:!0},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},lession:{type:"iSelect",label:"¿Tiene discapacidad?",name:"lession",required:!0,message:"¿Tiene discapacidad?",disabled:!0}};const Y=q=>(re("data-v-5b74d2dc"),q=q(),oe(),q),ce={class:"agreement-wrapper"},pe=Y(()=>S("h3",null,"Formulario de registro",-1)),be=Y(()=>S("br",null,null,-1)),ve={class:"grid-item"},_e="YYYY-MM-DD",ye={__name:"NuevaPersona",setup(q){P.locale("es");const y=ee(),n=X();n.$patch({typeDocuments:n.typeDocuments}),n.$patch({cities:n.cities}),n.$patch({provinces:n.provinces}),n.$patch({districts:n.districts}),n.$patch({genders:n.genders}),n.fetchTypeDocuments(),n.fetchCities(),n.fetchGenders();const M=ae(),k=JSON.parse(localStorage.getItem("profile")),t=h(me),p=h(!1),g=h(null),x=h(!1),U=h(!0),a=te({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,city_id:null,province_id:null,district_id:null,phone:null,email:null,birthday:null,gender_id:null,lession:null,people_id:k.user_id,from_id:1}),$=()=>{n.typeDocuments&&(U.value=!1)},N=()=>{t.value.lastname.disabled=!1,t.value.middlename.disabled=!1,t.value.name.disabled=!1,t.value.city_id.disabled=!1,t.value.province_id.disabled=!1,t.value.district_id.disabled=!1,t.value.phone.disabled=!1,t.value.email.disabled=!1,t.value.birthday.disabled=!1,t.value.gender_id.disabled=!1,t.value.lession.disabled=!1},T=i=>{i&&(t.value.documentnumber.disabled=!1,a.documentnumber=null)},I=async i=>{if(p.value=!0,!i)return _.warning("Ingresa un número de documento"),p.value=!1;if(a.typedocument_id==1){if(a.documentnumber.length<8)return _.warning("El número de DNI está incompleto");{const o=await E({url:`user/dni-data/${a.documentnumber}`,method:"GET"});if(o.status===404)return _.warning("Este número de DNI no se pudo encontrar, igual se desabilitará"),N(),p.value=!1;a.lastname=o.data.apellidoPaterno,a.middlename=o.data.apellidoMaterno,a.name=o.data.nombres,p.value=!1}}N(),p.value=!1},R=()=>{a.documentnumber=a.documentnumber.replace(/\D/g,"")},B=()=>{a.phone=a.phone.replace(/\D/g,"")},A=i=>{a.province_id=null,a.district_id=null,n.fetchProvinces(i)},G=i=>{a.district_id=null,n.fetchDistricts(i)},V=()=>{a.lastname=null,a.middlename=null,a.name=null,a.city_id=null,a.province_id=null,a.district_id=null,a.phone=null,a.email=null,a.birthday=null,a.gender_id=null,a.lession=null,a.typedocument_id=null,a.documentnumber=null,a.from_id=1,a.people_id=k.id,g.value=null,w()},w=()=>{t.value.documentnumber.disabled=!0,t.value.lastname.disabled=!0,t.value.middlename.disabled=!0,t.value.name.disabled=!0,t.value.city_id.disabled=!0,t.value.province_id.disabled=!0,t.value.district_id.disabled=!0,t.value.phone.disabled=!0,t.value.email.disabled=!0,t.value.birthday.disabled=!0,t.value.gender_id.disabled=!0,t.value.lession.disabled=!0},L=async()=>{x.value=!0,a.birthday=g.value?P(g.value).format("YYYY-MM-DD"):null;try{const i=await E({url:"person/create",method:"POST",data:a}),o={type:a.typedocument_id,number:a.documentnumber};M.push({name:"asesorias-formalizaciones",query:o}),_.success(i.message),V()}catch{_.error("No se pudo registrar este usuario")}finally{x.value=!1}},j=()=>{_.error("Debes de completar todos los espacios requeridos")},O=()=>{w(),y.query&&(a.typedocument_id=+y.query.type,T(y.query.type),a.documentnumber=y.query.number,I(y.query.number))};return ne(()=>{O()}),(i,o)=>{const b=u("a-select"),f=u("a-form-item"),z=u("a-input-search"),F=u("a-input"),J=u("a-date-picker"),K=u("a-button"),H=u("a-form"),Q=u("a-spin");return d(),D("div",ce,[pe,be,v(Q,{spinning:U.value},{default:m(()=>[v(H,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:L,onFinishFailed:j},{default:m(()=>[S("div",ve,[(d(!0),D(C,null,le(t.value,(e,W)=>(d(),D(C,{key:W},[e.type==="iSelect"?(d(),s(f,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[e.name=="typedocument_id"?(d(),s(b,{key:0,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(n).typeDocuments,disabled:e.disabled,onChange:T},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="city_id"?(d(),s(b,{key:1,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(n).cities,onChange:A,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="province_id"?(d(),s(b,{key:2,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(n).provinces,onChange:G,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="district_id"?(d(),s(b,{key:3,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(n).districts,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="gender_id"?(d(),s(b,{key:4,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(n).genders,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="lession"?(d(),s(b,{key:5,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,options:c(Z),disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iSearch"?(d(),s(f,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[v(z,{loading:p.value,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,onSearch:I,onInput:R,maxlength:a.typedocument_id==1?8:20,disabled:e.disabled},null,8,["loading","value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iText"?(d(),s(f,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email,max:e.max}]},{default:m(()=>[e.name=="phone"?(d(),s(F,{key:0,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,disabled:e.disabled,maxlength:e.max,onInput:B},null,8,["value","onUpdate:value","disabled","maxlength"])):(d(),s(F,{key:1,value:a[e.name],"onUpdate:value":l=>a[e.name]=l,disabled:e.disabled,maxlength:e.max},null,8,["value","onUpdate:value","disabled","maxlength"]))]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iDate"?(d(),s(f,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[v(J,{locale:c(de),value:g.value,"onUpdate:value":o[0]||(o[0]=l=>g.value=l),style:{width:"100%"},format:_e,disabled:e.disabled},null,8,["locale","value","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),S("div",null,se($()),1),v(f,null,{default:m(()=>[v(K,{class:"btn-produce",type:"primary","html-type":"submit",loading:x.value},{default:m(()=>[ie("REGISTRAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},xe=ue(ye,[["__scopeId","data-v-5b74d2dc"]]);export{xe as default};
