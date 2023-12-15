import{r as y,a as L,l as R,b as c,o as n,d as h,e as _,c as m,w as d,F as U,n as S,g as p,v as W,B as r,s,h as H,i as K,p as Q,j as X}from"./index-722d26ff.js";import{f as k}from"./nuevoUsuario-8627bd47.js";import{i as Z}from"./storage-69784238.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const q=v=>(Q("data-v-b79e0d62"),v=v(),X(),v),ee=q(()=>_("h3",null,"Mis datos",-1)),ae={class:"user"},oe={class:"grid-item"},te=q(()=>_("div",null,[_("h1")],-1)),ne={__name:"MiPerfil",setup(v){const b=y(!1),f=y([]),g=y([]),e=L({usuario:"",clave:"",tipo_documento:"",nro_documento:"",apellido_paterno:"",apellido_materno:"",nombres:"",pais:"",fecha_nacimiento:null,genero:"",discapacidad:null,correo:"",celular:"",tipo_usuario:null,idOficina:null,idSede:null}),D=[{label:"DNI",value:1},{label:"CE",value:2},{label:"PAS",value:3},{label:"PTP",value:4}],I=[{label:"Masculino",value:1},{label:"Femenino",value:2},{label:"...",value:3}],N=[{label:"Si",value:2},{label:"No",value:1}],w=[{label:"Administrador",value:"1"},{label:"Usuario",value:"2"},{label:"Invitado",value:"3"}],x=[{label:"Dirección ejecutiva",value:1},{label:"Unidad de gestión de servicios empresariales",value:2},{label:"Unidad de gestión de operaciones",value:3},{label:"Unidad de gestión estratégica y entrega de resultados",value:4}],F=()=>{e.usuario="",e.clave="",e.tipo_documento="",e.nro_documento="",e.apellido_paterno="",e.apellido_materno="",e.nombres="",e.pais="",e.fecha_nacimiento=null,e.genero="",e.discapacidad=null,e.correo="",e.celular="",e.tipo_usuario=null,e.idOficina=null,e.idSede=null},M=async o=>{const l={...o,id_registrador:Z};b.value=!0;try{const i=await S({url:"/register",method:"POST",data:l});F(),p.success(i.message)}catch{p.error("No se pudo registrar este usuario")}finally{b.value=!1}},O=()=>{p.error("Debes de completar todos los espacios requeridos")},P=async o=>{if(!e.tipo_documento)return p.error("Selecciona el tipo de documento");if(!o)return p.error("El campo número de documento esta vacío");console.log(typeof o)},E=()=>{e.nro_documento=e.nro_documento.replace(/\D/g,"")},T=(o,u)=>{},B=async()=>{try{(await S({url:"/countries",method:"GET"})).map(u=>{const l={value:u.idPais,label:u.nombre};f.value=[...f.value,l]})}catch(o){console.error("Error de red:",o)}},C=async()=>{try{(await S({url:"/sedes",method:"GET"})).map(u=>{const l={label:u.nombre,value:u.idSede};g.value=[...g.value,l]})}catch(o){console.error("Error de red:",o)}},j=()=>{const o=JSON.parse(localStorage.getItem("user"));console.log("uauauauua",k.usuario),e.usuario=o.usuario,e.tipo_documento=o.tipo_documento,e.nro_documento=o.nro_documento,e.apellido_paterno=o.apellido_paterno,e.apellido_materno=o.apellido_materno,e.nombres=o.nombres,e.pais=o.pais,e.genero=o.genero,e.discapacidad=o.discapacidad,e.correo=o.correo,e.celular=o.celular,e.idOficina=o.idOficina,e.idSede=o.idSede};return R(B(),C(),j()),(o,u)=>{const l=c("a-select"),i=c("a-form-item"),Y=c("a-input-search"),A=c("a-input"),V=c("a-date-picker"),G=c("a-button"),z=c("a-form");return n(),h(U,null,[ee,_("div",ae,[m(z,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:M,onFinishFailed:O},{default:d(()=>[_("div",oe,[(n(!0),h(U,null,W(H(k),(a,J)=>(n(),h(U,{key:J},[a.type==="iSelect"?(n(),r(i,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[a.name=="tipo_documento"?(n(),r(l,{key:0,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:D},null,8,["value","onUpdate:value"])):s("",!0),a.name=="genero"?(n(),r(l,{key:1,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:I},null,8,["value","onUpdate:value"])):s("",!0),a.name=="discapacidad"?(n(),r(l,{key:2,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:N},null,8,["value","onUpdate:value"])):s("",!0),a.name=="idOficina"?(n(),r(l,{key:3,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:x},null,8,["value","onUpdate:value"])):s("",!0),a.name=="idSede"?(n(),r(l,{key:4,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:g.value},null,8,["value","onUpdate:value","options"])):s("",!0),a.name=="tipo_usuario"?(n(),r(l,{key:5,value:e[a.name],"onUpdate:value":t=>e[a.name]=t,options:w},null,8,["value","onUpdate:value"])):s("",!0)]),_:2},1032,["name","label","rules"])):s("",!0),a.type==="iSearch"?(n(),r(i,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,len:8}]},{default:d(()=>[m(Y,{value:e[a.name],"onUpdate:value":t=>e[a.name]=t,"enter-button":"",onSearch:P,onInput:E},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):s("",!0),a.type==="iText"?(n(),r(i,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:d(()=>[m(A,{value:e[a.name],"onUpdate:value":t=>e[a.name]=t},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):s("",!0),a.type==="iSelectWrite"?(n(),r(i,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[m(l,{value:e[a.name],"onUpdate:value":t=>e[a.name]=t,"show-search":"",options:f.value,"filter-option":T},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):s("",!0),a.type==="iDate"?(n(),r(i,{key:4,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[m(V,{value:e.fecha_nacimiento,"onUpdate:value":u[0]||(u[0]=t=>e.fecha_nacimiento=t),style:{width:"100%"},format:"YYYY-MM-DD"},null,8,["value"])]),_:2},1032,["name","label","rules"])):s("",!0)],64))),128))]),m(i,null,{default:d(()=>[m(G,{type:"primary","html-type":"submit",loading:b.value},{default:d(()=>[K("Actualizar mis datos")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),te])],64)}}},ie=$(ne,[["__scopeId","data-v-b79e0d62"]]);export{ie as default};
