import{Q as I,r as N,u as H,a as U,N as O,n as J,b as f,o as l,d as D,c as u,e as y,w as m,i as p,F as C,h as q,m as S,f as K,v as X,z as i,s as d,R as j,j as w,p as ee,k as ae}from"./index-b4c6ca84.js";import"./es-714fef25.js";import{t as te,g as oe,d as se,o as re,b as le}from"./selects-5c97b22d.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";const ue={nickName:{type:"iText",label:"Usuario",name:"nickName",required:!0,message:"Escribe cuenta de usuario"},password:{type:"iText",label:"Contraseña",name:"password",required:!0,message:"Registra la contraseña"},documentType:{type:"iSelect",label:"Tipo de documento",name:"documentType",required:!0,message:"Seleccionar tipo de documento"},documentNumber:{type:"iText",label:"Núm. de documento",name:"documentNumber",required:!0,message:"Error en el tipo de documento"},lastName:{type:"iText",label:"Apellido paterno",name:"lastName",required:!0,message:"Escribe el apellido paterno"},middleName:{type:"iText",label:"Apellido materno",name:"middleName",required:!0,message:"Escribe el apellido materno"},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el nombre"},countryCode:{type:"iSelectWrite",label:"País",name:"countryCode",required:!0,message:"Seleccionar país"},email:{type:"iText",label:"Correo",name:"email",required:!0,email:"email",message:"Escribe el correo del usuario"},officeCode:{type:"iSelect",label:"Oficina",name:"officeCode",required:!0,message:"Seleccionar un tipo"},sedeCode:{type:"iSelect",label:"Sede donde labora",name:"sedeCode",required:!0,message:"Seleccionar un tipo"},role:{type:"iSelect",label:"Tipo de usuario",name:"role",required:!0,message:"Seleccionar un tipo"},birthdate:{type:"iDate",label:"Fecha de nacimiento",name:"birthdate",required:!1,message:"Seleccionar fecha"},gender:{type:"iSelect",label:"Género",name:"gender",required:!1,message:"Seleccionar tipo de documento"},isDisabled:{type:"iSelect",label:"¿Tiene discapacidad?",name:"isDisabled",required:!1,message:"Seleccionar un tipo"},phoneNumber:{type:"iText",label:"Celular",name:"phoneNumber",required:!1,message:"Escribe el celular del usuario"}},ie=[{value:"Nuevo Usuario"},{value:"Lista"}],de=[{value:"Reportes"},{value:"Calendario"},{value:"Talleres"},{value:"MYPE"},{value:"Expositores"},{value:"Test Entrada"},{value:"Editar Test Entrada"},{value:"Test Salida"},{value:"Editar Test Salida"},{value:"Taller Descripcion"}];const x=_=>(ee("data-v-f84bf440"),_=_(),ae(),_),ce=x(()=>y("h3",null,"REGISTRO DE USUARIOS",-1)),me={class:"user"},pe={class:"grid-item"},ve={class:"roles"},fe=x(()=>y("br",null,null,-1)),ye=x(()=>y("br",null,null,-1)),L="YYYY-MM-DD",ge={__name:"NuevoUsuarios",setup(_){I.locale("es");const h=N(!1),E=N([]),A=N([]);H();const a=U({nickName:null,password:null,documentType:1,documentNumber:null,middleName:null,name:null,countryCode:173,birthdate:N(I("2000-01-01T05:00:00.000Z",L)),gender:null,isDisabled:null,email:null,phoneNumber:null,role:null,officeCode:null,sedeCode:1,_id:O}),z=()=>{a.nickName="",a.password="",a.documentType=1,a.documentNumber="",a.lastName="",a.middleName="",a.name="",a.countryCode=173,a.birthdate=null,a.gender="",a.isDisabled=null,a.email="",a.phoneNumber="",a.role=null,a.officeCode=null,a.sedeCode=null,v.usuarios=[],v.rutaDigital=[],c.rutaDigital=!1,c.usuarios=!1},v=U({usuarios:[],rutaDigital:[]}),c=U({rutaDigital:!1,usuarios:!1}),F=t=>{v[t].length>0?c[t]=!0:c[t]=!1},T=t=>{if(typeof t=="string")return t.toLowerCase().replace(/\s+/g,"-");if(Array.isArray(t))return t.map(T);if(typeof t=="object"){const o={};for(const r in t)t.hasOwnProperty(r)&&(o[r]=T(t[r]));return o}else return t},P=t=>Object.keys(t).filter(r=>t[r]===!0).map(r=>r==="rutaDigital"?"ruta-digital":r),V=async t=>{let o=P(c),r=T(v);const n=[r.usuarios,r.rutaDigital],g=[].concat(...o,...n),k={_id:t,created:O,views:g,exclusions:null};try{const b=await q({url:"/permission",method:"POST",data:k});z(),console.log(b),b&&S.success("Usuario registrado con éxito")}catch{S.error("No se pudo registrar este usuario")}finally{h.value=!1}},G=async()=>{const t=a;h.value=!0;try{const o=await q({url:"/register",method:"POST",data:t});V(o.data),console.log("eeeee",o.data)}catch{S.error("No se pudo registrar este usuario")}finally{h.value=!1}},M=()=>{S.error("Debes de completar todos los espacios requeridos")},Y=(t,o)=>{const r=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(r)},B=async()=>{try{const{data:t}=await K({url:"/countries",method:"GET"});E.value=t}catch(t){console.error("Error de red:",t)}},W=async()=>{try{const{data:t}=await q({url:"/sedes",method:"GET"});A.value=t}catch(t){console.error("Error de red:",t)}};return J(()=>{B(),W()}),(t,o)=>{const r=f("a-divider"),n=f("a-select"),g=f("a-form-item"),k=f("a-input"),b=f("a-date-picker"),$=f("a-button"),Q=f("a-form"),R=f("a-checkbox");return l(),D(C,null,[ce,u(r),y("div",me,[u(Q,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:G,onFinishFailed:M},{default:m(()=>[y("div",pe,[(l(!0),D(C,null,X(p(ue),(e,Z)=>(l(),D(C,{key:Z},[e.type==="iSelect"?(l(),i(g,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[e.name=="documentType"?(l(),i(n,{key:0,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:p(te)},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="gender"?(l(),i(n,{key:1,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:p(oe)},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="isDisabled"?(l(),i(n,{key:2,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:p(se)},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="officeCode"?(l(),i(n,{key:3,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:p(re)},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="sedeCode"?(l(),i(n,{key:4,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:A.value},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="role"?(l(),i(n,{key:5,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:p(le)},null,8,["value","onUpdate:value","options"])):d("",!0)]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iText"?(l(),i(g,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:m(()=>[u(k,{value:a[e.name],"onUpdate:value":s=>a[e.name]=s},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iSelectWrite"?(l(),i(g,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[u(n,{value:a[e.name],"onUpdate:value":s=>a[e.name]=s,"show-search":"",options:E.value,"filter-option":Y},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iDate"?(l(),i(g,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[u(b,{locale:p(j),value:a.birthdate,"onUpdate:value":o[0]||(o[0]=s=>a.birthdate=s),style:{width:"100%"},format:L},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):d("",!0)],64))),128))]),u(g,null,{default:m(()=>[u($,{type:"primary","html-type":"submit",loading:h.value},{default:m(()=>[w("Registrar usuario")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),y("section",ve,[y("div",null,[u(R,{checked:c.rutaDigital,"onUpdate:checked":o[1]||(o[1]=e=>c.rutaDigital=e)},{default:m(()=>[w("Ruta Digital")]),_:1},8,["checked"]),u(n,{value:v.rutaDigital,"onUpdate:value":o[2]||(o[2]=e=>v.rutaDigital=e),mode:"multiple",style:{width:"100%"},placeholder:"Agrega vistas para este usuario",onChange:o[3]||(o[3]=e=>F("rutaDigital")),options:p(de)},null,8,["value","options"])]),fe,y("div",null,[u(R,{checked:c.usuarios,"onUpdate:checked":o[4]||(o[4]=e=>c.usuarios=e)},{default:m(()=>[w("Usuarios")]),_:1},8,["checked"]),u(n,{value:v.usuarios,"onUpdate:value":o[5]||(o[5]=e=>v.usuarios=e),mode:"multiple",style:{width:"100%"},placeholder:"Agrega vistas para este usuario",onChange:o[6]||(o[6]=e=>F("usuarios")),options:p(ie)},null,8,["value","options"])]),ye])])],64)}}},Se=ne(ge,[["__scopeId","data-v-f84bf440"]]);export{Se as default};