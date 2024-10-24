import{N as F,z as de,r as b,u as oe,a as ue,k as ce,b as m,o as r,d as U,c as _,w as p,e as k,F as C,y as me,s as o,h as S,v as u,O as pe,t as be,i as ve,p as _e,j as ye,m as y,B as $,T as he,f as Y}from"./index-fe1fc57d.js";import{u as fe}from"./selectes-a7bd4124.js";import"./es-7f9a484e.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";const Se={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},documentnumber:{type:"iSearch",label:"Ingresar número",name:"documentnumber",required:!0,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido paterno",disabled:!0},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido materno",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!0},country_id:{type:"iSelect",label:"País Origen",name:"country_id",required:!0,message:"Seleccionar país de origen",disabled:!1},city_id:{type:"iSelect",label:"Región residente",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelect",label:"Provincia residente",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito residente",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"Dirección",name:"address",required:!0,message:"Escribir dirección",disabled:!1},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!0,message:"Seleccionar fecha",disabled:!0},phone:{type:"iText",label:"Número Telefónico del contacto",name:"phone",required:!0,message:"Número de celular",min:9,max:9,disabled:!0},email:{type:"iText",label:"Correo electrónico",name:"email",required:!1,message:"Ingresar email",email:"email",disabled:!0},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"¿Tiene discapacidad?",disabled:!0},hasSoon:{type:"iSelect",label:"¿Tiene hijos? (Opcional)",name:"hasSoon",required:!1,message:"¿Tiene hijos?",disabled:!1}};const L=q=>(_e("data-v-f2266d27"),q=q(),ye(),q),qe={class:"agreement-wrapper"},De=L(()=>k("h3",null,"Formulario de registro",-1)),ke=L(()=>k("br",null,null,-1)),xe={class:"grid-item"},Te="DD/MM/YYYY",Ue={__name:"NuevaPersona",setup(q){F.locale("es");const v=de(),s=fe();s.$patch({typeDocuments:s.typeDocuments}),s.$patch({cities:s.countries}),s.$patch({cities:s.cities}),s.$patch({provinces:s.provinces}),s.$patch({districts:s.districts}),s.$patch({genders:s.genders}),s.fetchTypeDocuments(),s.fetchCountries(),s.fetchCities(),s.fetchGenders();const N=b(null),w=b(null),M=oe(),x=JSON.parse(localStorage.getItem("profile")),n=b(Se),h=b(!0),O=b(null),T=b(!1),z=b(!0),B=[{value:"si",label:"SI"},{value:"no",label:"NO"}],R=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}],e=ue({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,country_id:v.query.type==1?155:null,city_id:null,address:null,province_id:null,district_id:null,phone:null,email:null,birthday:null,gender_id:null,sick:null,people_id:x.user_id,from_id:1}),j=l=>{const t=e[l]?e[l].trim():"";e[l]=t},G=(l,t)=>{if(!t)return Promise.reject("La fecha es requerida");const d=new Date,c=new Date(t);let f=d.getFullYear()-c.getFullYear();const g=d.getMonth()-c.getMonth();return(g<0||g===0&&d.getDate()<c.getDate())&&f--,f<18||f>99?Promise.reject("La edad debe estar entre 18 y 99 años"):Promise.resolve()},A=async l=>{try{const{data:t}=await Y({url:`select/provinces/${l}`,method:"GET"});N.value=t}catch(t){console.error("Error de red:",t)}},V=async l=>{try{const{data:t}=await Y({url:`select/districts/${l}`,method:"GET"});w.value=t}catch(t){console.error("Error de red:",t)}},D=(l,t)=>{const d=l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(d)},J=()=>{s.typeDocuments&&(z.value=!1)},H=()=>{n.value.lastname.disabled=!1,n.value.middlename.disabled=!1,n.value.name.disabled=!1,n.value.city_id.disabled=!1,n.value.province_id.disabled=!1,n.value.district_id.disabled=!1,n.value.address.disabled=!1,n.value.phone.disabled=!1,n.value.email.disabled=!1,n.value.birthday.disabled=!1,n.value.gender_id.disabled=!1,n.value.sick.disabled=!1},I=l=>{l&&(n.value.documentnumber.disabled=!1,e.documentnumber=null)},P=async l=>{if(h.value=!0,!l)return y.warning("Ingresa un número de documento"),h.value=!1;try{if(e.typedocument_id==1){const t=await $({url:`user/only-dni/${e.documentnumber}`,method:"GET"});t.status===404&&he.open({message:"Notificación",description:"Se superó el número de consultas, comentale a tu supervisor"}),t.status==200&&(e.lastname=t.data.apellidoPaterno,e.middlename=t.data.apellidoMaterno,e.name=t.data.nombres)}}catch(t){console.log("err",t)}finally{return H(),h.value=!1}},K=()=>{e.documentnumber=e.documentnumber.replace(/\D/g,"")},Q=()=>{e.phone=e.phone.replace(/\D/g,"")},W=l=>{e.province_id=null,e.district_id=null,A(l)},X=l=>{e.district_id=null,V(l)},Z=()=>{e.lastname=null,e.middlename=null,e.name=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.phone=null,e.email=null,e.birthday=null,e.gender_id=null,e.sick=null,e.typedocument_id=null,e.documentnumber=null,e.from_id=1,e.people_id=x.id,O.value=null,E()},E=()=>{n.value.documentnumber.disabled=!0,n.value.lastname.disabled=!0,n.value.middlename.disabled=!0,n.value.name.disabled=!0,n.value.city_id.disabled=!0,n.value.city_id.disabled=!0,n.value.province_id.disabled=!0,n.value.address.disabled=!0,n.value.phone.disabled=!0,n.value.email.disabled=!0,n.value.birthday.disabled=!0,n.value.gender_id.disabled=!0,n.value.sick.disabled=!0},ee=async()=>{T.value=!0;const l={documentnumber:e.documentnumber,lastname:e.lastname,middlename:e.middlename,name:e.name,country_id:e.country_id,phone:e.phone,email:e.email,birthday:F(e.birthday).format("YYYY-MM-DD"),sick:e.sick,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,typedocument_id:e.typedocument_id,gender_id:e.gender_id,hasSoon:e.hasSoon,people_id:x.user_id,from_id:1};try{const t=await $({url:"person/create",method:"POST",data:l});if(t.status==400)return y.error("El correo electrónico ya está registrado. Por favor, ingresa uno válido.");if(t.status==401)return y.error("El número de DNI ya está registrado. Por favor, ingresa uno válido.");if(t.status==200){const d={type:e.typedocument_id,number:e.documentnumber};return M.push({name:"asesorias-formalizaciones",query:d}),y.success(t.message),Z()}}catch{y.error("No se pudo registrar este usuario")}finally{T.value=!1}},ae=()=>{y.error("Debes de completar todos los espacios requeridos")},te=async()=>{E(),v.query&&(e.typedocument_id=+v.query.type,I(v.query.type),e.documentnumber=v.query.number,await s.fetchCities(),await P(v.query.number))};return ce(()=>{te()}),(l,t)=>{const d=m("a-select"),c=m("a-form-item"),f=m("a-input-search"),g=m("a-input"),ne=m("a-date-picker"),ie=m("a-button"),se=m("a-form"),le=m("a-spin");return r(),U("div",qe,[De,ke,_(le,{spinning:h.value},{default:p(()=>[_(se,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:ee,onFinishFailed:ae},{default:p(()=>[k("div",xe,[(r(!0),U(C,null,me(n.value,(a,re)=>(r(),U(C,{key:re},[a.type==="iSelect"?(r(),o(c,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:p(()=>[a.name=="typedocument_id"?(r(),o(d,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).typeDocuments,disabled:a.disabled,onChange:I},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="country_id"?(r(),o(d,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).countries,"show-search":"","filter-option":D},null,8,["value","onUpdate:value","options"])):u("",!0),a.name=="city_id"?(r(),o(d,{key:2,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).cities,"show-search":"","filter-option":D,onChange:W,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="province_id"?(r(),o(d,{key:3,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:N.value,"show-search":"","filter-option":D,onChange:X,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="district_id"?(r(),o(d,{key:4,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:w.value,"show-search":"","filter-option":D,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="gender_id"?(r(),o(d,{key:5,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).genders,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="sick"?(r(),o(d,{key:6,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:B,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])):u("",!0),a.name=="hasSoon"?(r(),o(d,{key:7,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:R,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])):u("",!0)]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iSearch"?(r(),o(c,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:p(()=>[_(f,{loading:h.value,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,onSearch:P,onInput:K,maxlength:e.typedocument_id==1?8:20,disabled:""},null,8,["loading","value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iText"?(r(),o(c,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max,min:a.min}]},{default:p(()=>[a.name=="phone"?(r(),o(g,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,disabled:a.disabled,maxlength:a.max,onInput:Q},null,8,["value","onUpdate:value","disabled","maxlength"])):(r(),o(g,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,disabled:a.disabled,maxlength:a.max,onBlur:i=>j(a.name)},null,8,["value","onUpdate:value","disabled","maxlength","onBlur"]))]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iDate"?(r(),o(c,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message},{validator:G,message:"La edad debe estar entre 18 y 99 años"}]},{default:p(()=>[_(ne,{locale:S(pe),value:e[a.name],"onUpdate:value":i=>e[a.name]=i,style:{width:"100%"},format:Te,placeholder:"día/mes/año",disabled:a.disabled},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):u("",!0)],64))),128))]),k("div",null,be(J()),1),_(c,null,{default:p(()=>[_(ie,{class:"btn-produce",type:"primary","html-type":"submit",loading:T.value},{default:p(()=>[ve("REGISTRAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Ee=ge(Ue,[["__scopeId","data-v-f2266d27"]]);export{Ee as default};
