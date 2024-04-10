import{u as I}from"./selectes-b6b28f01.js";import{K as h,r as y,a as R,b as c,o,q as l,w as u,c as b,e as x,d as U,F as w,D as O,h as m,s as r,L as j,t as J,i as K,z as H,m as f}from"./index-9e23a720.js";import"./es-d88c0ee9.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const W={typedocument_id:{type:"iSelect",label:"Tipo de documento",name:"typedocument_id",required:!1,message:"Seleccionar tipo de documento",disabled:!0},documentnumber:{type:"iText",label:"Número de documento",name:"documentnumber",required:!1,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"Apellido Paterno",name:"lastname",required:!0,message:"Escribir apellido",disabled:!1},middlename:{type:"iText",label:"Apellido Materno",name:"middlename",required:!0,message:"Escribir apellido",disabled:!1},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribir nombre",disabled:!1},city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!1,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!1,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!1,message:"Seleccionar distrito",disabled:!1},phone:{type:"iText",label:"Número de celular",name:"phone",required:!1,message:"Número de contacto y 9 max",max:9,disabled:!1},email:{type:"iText",label:"Correo electrónico",name:"email",required:!1,message:"Número de contacto y 9 max",email:"email",disabled:!1},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"Seleccionar fecha",disabled:!1},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!1,message:"Seleccionar tipo de documento"},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!1,message:"Seleccionar un tipo"}};const X={class:"grid-profile"},N="YYYY-MM-DD",Z={__name:"DrawerSolicitante.componente",props:["updateValues"],emits:["closeDraw"],setup(T,{emit:C}){h.locale("es");const n=I();JSON.parse(localStorage.getItem("profile"));const F=C,S=T;n.$patch({typeDocuments:n.typeDocuments}),n.$patch({cities:n.cities}),n.$patch({genders:n.genders}),n.fetchTypeDocuments(),n.fetchCities(),n.fetchGenders();const D=y(!0),g=y(!1),E=y(W),p=y(null),a=R({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,city_id:null,province_id:null,district_id:null,phone:null,email:null,gender_id:null,birthday:null,sick:null}),Y=[{label:"Si",value:"yes"},{label:"No",value:"no"}],V=t=>{var s;(s=n.genders)!=null&&s.length&&(D.value=!1),t&&(a.typedocument_id=t.typedocument_id,a.documentnumber=t.documentnumber,a.lastname=t.lastname,a.middlename=t.middlename,a.name=t.name,a.city_id=t.city_id,k(t.city_id),q(t.province_id),a.province_id=t.province_id,a.district_id=t.district_id,a.phone=t.phone,a.email=t.email,a.gender_id=t.gender_id,a.birthday=t.birthday,a.sick=t.sick,t.birthday&&(p.value=h(t.birthday,N)))},k=t=>{a.province_id=null,a.district_id=null,n.fetchProvinces(t)},q=t=>{a.district_id=null,n.fetchDistricts(t)},v=(t,s)=>{const d=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(d)},z=async()=>{a.birthday=p.value?h(p.value).format("YYYY-MM-DD"):null;let t=a;delete t.documentnumber,delete t.typedocument_id,g.value=!0;try{const s=await H({url:`person/update/${S.updateValues.id}`,method:"PUT",data:t});f.success(s.message),F("closeDraw",!0)}catch(s){if(s.response.status==550)return f.error("El usuario ya se encuentra registrado");f.error("Error al registrar")}finally{g.value=!1}},L=()=>{f.error("Debes de completar todos los espacios requeridos")};return(t,s)=>{const d=c("a-select"),_=c("a-form-item"),M=c("a-input"),P=c("a-date-picker"),A=c("a-button"),B=c("a-form"),$=c("a-spin");return o(),l($,{spinning:D.value},{default:u(()=>[b(B,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:z,onFinishFailed:L},{default:u(()=>[x("div",X,[(o(!0),U(w,null,O(E.value,(e,G)=>(o(),U(w,{key:G},[e.type==="iSelect"?(o(),l(_,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:u(()=>[e.name=="typedocument_id"?(o(),l(d,{key:0,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,options:m(n).typeDocuments,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="city_id"?(o(),l(d,{key:1,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,"show-search":"",options:m(n).cities,"filter-option":v,onChange:k},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="province_id"?(o(),l(d,{key:2,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,"show-search":"",options:m(n).provinces,"filter-option":v,onChange:q},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="district_id"?(o(),l(d,{key:3,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,"show-search":"",options:m(n).districts,"filter-option":v},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="gender_id"?(o(),l(d,{key:4,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,options:m(n).genders},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="sick"?(o(),l(d,{key:5,value:a[e.name],"onUpdate:value":i=>a[e.name]=i,options:Y},null,8,["value","onUpdate:value"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iText"?(o(),l(_,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:u(()=>[b(M,{value:a[e.name],"onUpdate:value":i=>a[e.name]=i,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iDate"?(o(),l(_,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:u(()=>[b(P,{locale:m(j),value:p.value,"onUpdate:value":s[0]||(s[0]=i=>p.value=i),style:{width:"100%"},format:N},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),x("div",null,J(V(S.updateValues)),1),b(_,null,{default:u(()=>[b(A,{class:"btn-produce",type:"primary","html-type":"submit",loading:g.value},{default:u(()=>[K("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},ie=Q(Z,[["__scopeId","data-v-9c40952b"]]);export{ie as S};
