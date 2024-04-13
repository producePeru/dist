import{K as R,r as f,z as ee,a as ae,b as c,o as l,d as y,c as u,e as w,w as d,F as h,B as F,a4 as ne,S as k,m as D,v as te,q as r,h as p,s as i,U as le,i as T,L as oe,p as se,j as re,V as ue}from"./index-2ccea500.js";import{u as de}from"./selectes-03b44817.js";import"./es-bd346ad5.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";const me={email:{type:"iText",label:"Correo",name:"email",required:!1,email:"email",message:"Escribe el correo del usuario",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el apellido paterno"},lastname:{type:"iText",label:"Apellido paterno",name:"lastname",required:!0,message:"Escribe el apellido paterno"},middlename:{type:"iText",label:"Apellido materno",name:"middlename",required:!0,message:"Escribe el apellido paterno"},documentnumber:{type:"iText",label:"Número de DNI",name:"documentnumber",required:!0,message:"Escribe el apellido paterno",max:8},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"año-mes-día"},phone:{type:"iText",label:"Ingresar número celular",name:"phone",required:!0,message:"Escribe número de documento",disabled:!1,max:9},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},cde_id:{type:"iSelect",label:"CDE",name:"cde_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},office_id:{type:"iSelect",label:"Oficina",name:"office_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},role_id:{type:"iSelect",label:"Rol",name:"role_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0}};const ce=x=>(se("data-v-d0901132"),x=x(),re(),x),pe=ce(()=>w("h3",null,"REGISTRO DE USUARIO",-1)),ve={class:"user"},_e={class:"grid-item"},fe="YYYY-MM-DD",be={__name:"NuevoUsuarios",setup(x){R.locale("es");const E=ue({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),L=JSON.parse(localStorage.getItem("profile")),A=JSON.parse(localStorage.getItem("role")),t=de();t.$patch({genders:t.genders}),t.$patch({cdes:t.cdes}),t.$patch({Offices:t.Offices}),t.$patch({roles:t.roles}),t.$patch({supervisores:t.supervisores}),t.fetchGenders(),t.fetchCdes(),t.fetchOffices(),t.fetchRoles();const v=f(me),b=f(null);ee();const q=f(!1),V=f(!1),Y=f(!1),N=f(!1),S=f(null),$=[{label:"Drive Administrador",value:3},{label:"Drive Usuario",value:4}],a=ae({name:null,lastname:null,middlename:null,documentnumber:null,birthday:null,sick:2,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:L.user_id,email:null,password:null}),z=()=>{a.name=null,a.lastname=null,a.middlename=null,a.documentnumber=null,b.value=null,a.phone=null,a.gender_id=null,a.cde_id=null,a.office_id=null,a.email=null,a.password=null,a.role_id=null},I=o=>{a[o]=a[o].replace(/\D/g,"")},B=async()=>{try{N.value=!0;const o={name:S.value};(await F({url:"create/office",method:"POST",data:o})).status==200&&(S.value=null,t.fetchOffices())}catch(o){console.log(o)}finally{N.value=!1}},M=(o,s)=>{const _=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(_)},C=o=>{const s={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(o===2)t.fetchSupervisores(),v.value={...v.value,supervisor_id:s};else{const{supervisor_id:_,...m}=v.value;v.value=m}},G=async()=>{q.value=!0,a.email=a.name.substring(0,2).toLowerCase()+a.lastname.toLowerCase()+"@pnte.com",a.password=a.documentnumber,a.birthday=b.value?R(b.value).format("YYYY-MM-DD"):null;try{const o=await F({url:"user/create",method:"POST",data:a});ne.success({title:"La cuenta ha sido registrada",content:k("div",{},[k("br"),k("p",`Correo: ${a.email}`),k("p","Contraseña es el número de DNI ingresado")]),onOk(){z(),D.success(o.message);const{supervisor_id:s,..._}=v.value;v.value=_}})}catch{D.error("No se pudo registrar este usuario")}finally{q.value=!1}},j=()=>{D.error("Debes de completar todos los espacios requeridos")},P=async o=>{console.log("Hello",o)},J=()=>{a.document_number=a.document_number.replace(/\D/g,"")};return(o,s)=>{const _=c("a-divider"),m=c("a-select"),U=c("a-input"),O=c("a-button"),K=c("a-space"),g=c("a-form-item"),H=c("a-input-search"),Q=c("a-date-picker"),W=c("a-form");return l(),y(h,null,[pe,u(_),w("div",ve,[u(W,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:G,onFinishFailed:j},{default:d(()=>[w("div",_e,[(l(!0),y(h,null,te(v.value,(e,X)=>(l(),y(h,{key:X},[e.type==="iSelect"?(l(),r(g,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[e.name=="gender_id"?(l(),r(m,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).genders},null,8,["value","onUpdate:value","options"])):i("",!0),e.name=="cde_id"?(l(),r(m,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).cdes},null,8,["value","onUpdate:value","options"])):i("",!0),p(A)[0].id==3?(l(),y(h,{key:2},[e.name=="role_id"?(l(),r(m,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:$,onChange:C},null,8,["value","onUpdate:value"])):i("",!0)],64)):(l(),y(h,{key:3},[e.name=="role_id"?(l(),r(m,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).roles,onChange:C},null,8,["value","onUpdate:value","options"])):i("",!0)],64)),e.name=="supervisor_id"?(l(),r(m,{key:4,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).supervisores},null,8,["value","onUpdate:value","options"])):i("",!0),e.name=="office_id"?(l(),r(m,{key:5,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,"show-search":"",options:p(t).Offices,"filter-option":M},{dropdownRender:d(({menuNode:n})=>[u(p(E),{vnodes:n},null,8,["vnodes"]),u(_,{style:{margin:"4px 0"}}),u(K,{style:{padding:"4px 8px"}},{default:d(()=>[u(U,{ref_for:!0,ref:"inputRef",value:S.value,"onUpdate:value":s[0]||(s[0]=Z=>S.value=Z),placeholder:"Nueva actividad"},null,8,["value"]),u(O,{type:"text",onClick:B,loading:N.value},{icon:d(()=>[u(p(le))]),default:d(()=>[T(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),e.type==="iSearch"?(l(),r(g,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:d(()=>[u(H,{maxlength:15,loading:V.value,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,onSearch:P,onInput:J,disabled:Y.value},null,8,["loading","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0),e.type==="iText"?(l(),r(g,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:d(()=>[e.name=="documentnumber"?(l(),r(U,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:s[1]||(s[1]=n=>I("documentnumber"))},null,8,["value","onUpdate:value","maxlength"])):e.name=="phone"?(l(),r(U,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:s[2]||(s[2]=n=>I("phone"))},null,8,["value","onUpdate:value","maxlength"])):(l(),r(U,{key:2,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"]))]),_:2},1032,["name","label","rules"])):i("",!0),e.type==="iDate"?(l(),r(g,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[u(Q,{locale:p(oe),value:b.value,"onUpdate:value":s[3]||(s[3]=n=>b.value=n),style:{width:"100%"},format:fe},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),u(g,null,{default:d(()=>[u(O,{class:"btn-produce",type:"primary","html-type":"submit",loading:q.value},{default:d(()=>[T("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},Se=ie(be,[["__scopeId","data-v-d0901132"]]);export{Se as default};