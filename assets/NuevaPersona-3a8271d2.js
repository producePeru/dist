import{B as F,E as re,r as b,u as le,a as de,j as oe,b as m,o as l,d as U,e as k,c as y,w as p,F as I,x as ue,p as o,h as S,q as u,D as ce,t as me,i as pe,m as v,J as C,X as be,f as $}from"./index-cd25fe32.js";import{u as ve}from"./selectes-8cd40d6b.js";import"./es-5cab9a1b.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";import"./quill-blot-formatter-0b7ee680.js";const ye={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},documentnumber:{type:"iSearch",label:"Ingresar número",name:"documentnumber",required:!0,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido paterno",disabled:!0},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido materno",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!0},country_id:{type:"iSelect",label:"País Origen",name:"country_id",required:!0,message:"Seleccionar país de origen",disabled:!1},city_id:{type:"iSelect",label:"Región residente",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelect",label:"Provincia residente",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito residente",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"Dirección",name:"address",required:!0,message:"Escribir dirección",disabled:!1},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!0,message:"Seleccionar fecha",disabled:!0},phone:{type:"iText",label:"Número Telefónico del contacto",name:"phone",required:!0,message:"Número de celular",min:9,max:9,disabled:!0},email:{type:"iText",label:"Correo electrónico",name:"email",required:!1,message:"Ingresar email",email:"email",disabled:!0},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"¿Tiene discapacidad?",disabled:!0},hasSoon:{type:"iSelect",label:"¿Tiene hijos? (Opcional)",name:"hasSoon",required:!1,message:"¿Tiene hijos?",disabled:!1}};const fe={class:"agreement-wrapper"},ge={class:"grid-item"},he="DD/MM/YYYY",Se={__name:"NuevaPersona",setup(qe){F.locale("es");const _=re(),s=ve();s.$patch({typeDocuments:s.typeDocuments}),s.$patch({cities:s.countries}),s.$patch({cities:s.cities}),s.$patch({provinces:s.provinces}),s.$patch({districts:s.districts}),s.$patch({genders:s.genders}),s.fetchTypeDocuments(),s.fetchCountries(),s.fetchCities(),s.fetchGenders();const T=b(null),N=b(null),Y=le(),x=JSON.parse(localStorage.getItem("profile")),n=b(ye),f=b(!0),L=b(null),q=b(!1),M=b(!0),O=[{value:"yes",label:"SI"},{value:"no",label:"NO"}],B=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}],e=de({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,country_id:_.query.type==1?155:null,city_id:null,address:null,province_id:null,district_id:null,phone:null,email:null,birthday:null,gender_id:null,sick:null,people_id:x.user_id,from_id:1}),G=r=>{const t=e[r]?e[r].trim():"";e[r]=t},R=(r,t)=>{if(!t)return Promise.reject("La fecha es requerida");const d=new Date,c=new Date(t);let g=d.getFullYear()-c.getFullYear();const h=d.getMonth()-c.getMonth();return(h<0||h===0&&d.getDate()<c.getDate())&&g--,g<18||g>99?Promise.reject("La edad debe estar entre 18 y 99 años"):Promise.resolve()},j=async r=>{try{const{data:t}=await $({url:`select/provinces/${r}`,method:"GET"});T.value=t}catch(t){console.error("Error de red:",t)}},z=async r=>{try{const{data:t}=await $({url:`select/districts/${r}`,method:"GET"});N.value=t}catch(t){console.error("Error de red:",t)}},D=(r,t)=>{const d=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(d)},A=()=>{s.typeDocuments&&(M.value=!1)},V=()=>{n.value.lastname.disabled=!1,n.value.middlename.disabled=!1,n.value.name.disabled=!1,n.value.city_id.disabled=!1,n.value.province_id.disabled=!1,n.value.district_id.disabled=!1,n.value.address.disabled=!1,n.value.phone.disabled=!1,n.value.email.disabled=!1,n.value.birthday.disabled=!1,n.value.gender_id.disabled=!1,n.value.sick.disabled=!1},w=r=>{r&&(n.value.documentnumber.disabled=!1,e.documentnumber=null)},P=async r=>{if(f.value=!0,!r)return v.warning("Ingresa un número de documento"),f.value=!1;try{if(e.typedocument_id==1){const t=await C({url:`user/only-dni/${e.documentnumber}`,method:"GET"});t.status===404&&be.open({message:"Notificación",description:"Se superó el número de consultas, comentale a tu supervisor"}),t.status==200&&(e.lastname=t.data.apellidoPaterno,e.middlename=t.data.apellidoMaterno,e.name=t.data.nombres)}}catch(t){console.log("err",t)}finally{return V(),f.value=!1}},J=()=>{e.documentnumber=e.documentnumber.replace(/\D/g,"")},X=()=>{e.phone=e.phone.replace(/\D/g,"")},H=r=>{e.province_id=null,e.district_id=null,j(r)},K=r=>{e.district_id=null,z(r)},Q=()=>{e.lastname=null,e.middlename=null,e.name=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.phone=null,e.email=null,e.birthday=null,e.gender_id=null,e.sick=null,e.typedocument_id=null,e.documentnumber=null,e.from_id=1,e.people_id=x.id,L.value=null,E()},E=()=>{n.value.documentnumber.disabled=!0,n.value.lastname.disabled=!0,n.value.middlename.disabled=!0,n.value.name.disabled=!0,n.value.city_id.disabled=!0,n.value.city_id.disabled=!0,n.value.province_id.disabled=!0,n.value.address.disabled=!0,n.value.phone.disabled=!0,n.value.email.disabled=!0,n.value.birthday.disabled=!0,n.value.gender_id.disabled=!0,n.value.sick.disabled=!0},W=async()=>{if(q.value=!0,e.typedocument_id!==1&&e.country_id==155)return q.value=!1,v.error("Por favor cambiar el país, no está permitido para esta opción, Gracias");const r={documentnumber:e.documentnumber,lastname:e.lastname,middlename:e.middlename,name:e.name,country_id:e.country_id,phone:e.phone,email:e.email,birthday:F(e.birthday).format("YYYY-MM-DD"),sick:e.sick,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,typedocument_id:e.typedocument_id,gender_id:e.gender_id,hasSoon:e.hasSoon,people_id:x.user_id,from_id:1};try{const t=await C({url:"person/create",method:"POST",data:r});if(t.status==400)return v.error("El correo electrónico ya está registrado. Por favor, ingresa uno válido.");if(t.status==401)return v.error("El número de DNI ya está registrado. Por favor, ingresa uno válido.");if(t.status==200){const d={type:e.typedocument_id,number:e.documentnumber};return Y.push({name:"asesorias-formalizaciones",query:d}),v.success(t.message),Q()}}catch{v.error("No se pudo registrar este usuario")}finally{q.value=!1}},Z=()=>{v.error("Debes de completar todos los espacios requeridos")},ee=async()=>{E(),_.query&&(e.typedocument_id=+_.query.type,w(_.query.type),e.documentnumber=_.query.number,await s.fetchCities(),await P(_.query.number))};return oe(()=>{ee()}),(r,t)=>{const d=m("a-select"),c=m("a-form-item"),g=m("a-input-search"),h=m("a-input"),ae=m("a-date-picker"),te=m("a-button"),ne=m("a-form"),ie=m("a-spin");return l(),U("div",fe,[t[1]||(t[1]=k("h3",null,"Formulario de registro",-1)),t[2]||(t[2]=k("br",null,null,-1)),y(ie,{spinning:f.value},{default:p(()=>[y(ne,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:W,onFinishFailed:Z},{default:p(()=>[k("div",ge,[(l(!0),U(I,null,ue(n.value,(a,se)=>(l(),U(I,{key:se},[a.type==="iSelect"?(l(),o(c,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:p(()=>[a.name=="typedocument_id"?(l(),o(d,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).typeDocuments,disabled:a.disabled,onChange:w},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="country_id"?(l(),o(d,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).countries,"show-search":"","filter-option":D},null,8,["value","onUpdate:value","options"])):u("",!0),a.name=="city_id"?(l(),o(d,{key:2,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).cities,"show-search":"","filter-option":D,onChange:H,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="province_id"?(l(),o(d,{key:3,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:T.value,"show-search":"","filter-option":D,onChange:K,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="district_id"?(l(),o(d,{key:4,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:N.value,"show-search":"","filter-option":D,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="gender_id"?(l(),o(d,{key:5,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:S(s).genders,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),a.name=="sick"?(l(),o(d,{key:6,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:O,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])):u("",!0),a.name=="hasSoon"?(l(),o(d,{key:7,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:B,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])):u("",!0)]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iSearch"?(l(),o(c,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:p(()=>[y(g,{loading:f.value,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,onSearch:P,onInput:J,maxlength:e.typedocument_id==1?8:20,disabled:""},null,8,["loading","value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iText"?(l(),o(c,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max,min:a.min}]},{default:p(()=>[a.name=="phone"?(l(),o(h,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,disabled:a.disabled,maxlength:a.max,onInput:X},null,8,["value","onUpdate:value","disabled","maxlength"])):(l(),o(h,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,disabled:a.disabled,maxlength:a.max,onBlur:i=>G(a.name)},null,8,["value","onUpdate:value","disabled","maxlength","onBlur"]))]),_:2},1032,["name","label","rules"])):u("",!0),a.type==="iDate"?(l(),o(c,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message},{validator:R,message:"La edad debe estar entre 18 y 99 años"}]},{default:p(()=>[y(ae,{locale:S(ce),value:e[a.name],"onUpdate:value":i=>e[a.name]=i,style:{width:"100%"},format:he,placeholder:"día/mes/año",disabled:a.disabled},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):u("",!0)],64))),128))]),k("div",null,me(A()),1),y(c,null,{default:p(()=>[y(te,{class:"btn-produce",type:"primary","html-type":"submit",loading:q.value},{default:p(()=>t[0]||(t[0]=[pe("REGISTRAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Ne=_e(Se,[["__scopeId","data-v-4145e18c"]]);export{Ne as default};
