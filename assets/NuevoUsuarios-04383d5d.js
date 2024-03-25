import{G as Y,y as j,r as _,b as H,l as W,d as r,o as n,e as b,f as D,t as J,i as u,c as d,s,w as i,F as g,m as N,h as f,g as Z,B as K,v as l,M as Q,N as X,H as $,j as ee}from"./index-79c492b1.js";import"./es-3ce5d4e1.js";import{i as ae,g as te,d as ne,o as oe,j as se}from"./selects-0fbcf7fc.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";const re={document_type:{type:"iSelect",label:"Tipo de documento",name:"document_type",required:!0,message:"Seleccionar tipo de documento",disabled:!0},document_number:{type:"iText",label:"Ingresar número",name:"document_number",required:!0,message:"Escribe número de documento",disabled:!1,max:8},last_name:{type:"iText",label:"Apellido paterno",name:"last_name",required:!0,message:"Escribe el apellido paterno"},middle_name:{type:"iText",label:"Apellido materno",name:"middle_name",required:!0,message:"Escribe el apellido materno"},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el nombre"},country_code:{type:"iSelectWrite",label:"País",name:"country_code",required:!0,message:"Seleccionar país"},email:{type:"iText",label:"Correo",name:"email",required:!0,email:"email",message:"Escribe el correo del usuario"},password:{type:"iPassword",label:"Contraseña",name:"password",required:!1,message:"Registra la contraseña"},office_code:{type:"iSelect",label:"Oficina",name:"office_code",required:!0,message:"Seleccionar un tipo"},sede_code:{type:"iSelect",label:"Sede donde labora",name:"sede_code",required:!0,message:"Seleccionar un tipo"},gender:{type:"iSelect",label:"Género",name:"gender",required:!1,message:"Seleccionar tipo de documento"}};const ue={key:1,class:"user"},de={class:"grid-item"},ie="YYYY-MM-DD",me={__name:"NuevoUsuarios",setup(ce){Y.locale("es");const h=JSON.parse(localStorage.getItem("user")),U=j(),q=_(!0),v=_(!1),S=_([]),k=_([]),T=_(!1),E=_(!1),a=H({birthdate:null,gender:null,lession:0,phone_number:null,document_type:1,document_number:null,last_name:null,middle_name:null,name:null,country_code:173,email:null,password:null,office_code:null,sede_code:1,role:2,created_by:h.id,updated_by:h.id}),F=()=>{a.birthdate=null,a.gender=null,a.lession=0,a.phone_number=null,a.document_type=1,a.document_number=null,a.last_name=null,a.middle_name=null,a.name=null,a.country_code=173,a.email=null,a.password=null,a.office_code=null,a.sede_code=1,a.role=2},A=async()=>{const o=a;v.value=!0;try{const m=await N({url:"/new-user",method:"POST",data:o});F(),f.success(m.message)}catch{f.error("No se pudo registrar este usuario")}finally{v.value=!1}},C=()=>{f.error("Debes de completar todos los espacios requeridos")},R=async o=>{console.log("Hello",o)},I=()=>{a.document_number=a.document_number.replace(/\D/g,"")},L=(o,m)=>{const y=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return m.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(y)},G=async()=>{try{const{data:o}=await Z({url:"/countries",method:"GET"});S.value=o}catch(o){console.error("Error de red:",o)}},O=async()=>{try{const{data:o}=await N({url:"/sedes",method:"GET"});k.value=o,q.value=!1}catch(o){console.error("Error de red:",o)}};return W(()=>{G(),O()}),(o,m)=>{const y=r("a-divider"),w=r("a-spin"),c=r("a-select"),p=r("a-form-item"),z=r("a-input-search"),x=r("a-input"),B=r("a-date-picker"),M=r("a-button"),P=r("a-form");return n(),b(g,null,[D("h3",null,J(u(U).query.dni?"ACTUALIZAR":"REGISTRO DE")+" USUARIO",1),d(y),q.value?(n(),s(w,{key:0})):(n(),b("div",ue,[d(P,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:A,onFinishFailed:C},{default:i(()=>[D("div",de,[(n(!0),b(g,null,K(u(re),(e,V)=>(n(),b(g,{key:V},[e.type==="iSelect"?(n(),s(p,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[e.name=="document_type"?(n(),s(c,{key:0,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:u(ae),disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),e.name=="gender"?(n(),s(c,{key:1,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:u(te)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="isDisabled"?(n(),s(c,{key:2,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:u(ne)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="office_code"?(n(),s(c,{key:3,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:u(oe)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="sede_code"?(n(),s(c,{key:4,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:k.value},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="role"?(n(),s(c,{key:5,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:u(se)},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iSearch"?(n(),s(p,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:i(()=>[d(z,{maxlength:15,loading:T.value,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,onSearch:R,onInput:I,disabled:E.value},null,8,["loading","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iText"?(n(),s(p,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:i(()=>[d(x,{value:a[e.name],"onUpdate:value":t=>a[e.name]=t},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iPassword"?Q((n(),s(p,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(x,{value:a[e.name],"onUpdate:value":t=>a[e.name]=t},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])),[[X,!u(U).query.dni]]):l("",!0),e.type==="iSelectWrite"?(n(),s(p,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(c,{value:a[e.name],"onUpdate:value":t=>a[e.name]=t,"show-search":"",options:S.value,"filter-option":L},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iDate"?(n(),s(p,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(B,{locale:u($),value:a.birthdate,"onUpdate:value":m[0]||(m[0]=t=>a.birthdate=t),style:{width:"100%"},format:ie},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),d(p,null,{default:i(()=>[d(M,{type:"primary","html-type":"submit",loading:v.value},{default:i(()=>[ee("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]))],64)}}},ye=le(me,[["__scopeId","data-v-8378e6e7"]]);export{ye as default};