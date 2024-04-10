import{K as O,r as f,y as X,a as Z,b as i,o,d as k,c as r,e as w,w as d,F as N,z as T,a4 as ee,T as S,m as D,D as ae,q as u,h as p,s as m,U as ne,i as F,L as te,p as le,j as oe,V as se}from"./index-baf99455.js";import{u as re}from"./selectes-9890a566.js";import"./es-920acf37.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";const de={email:{type:"iText",label:"Correo",name:"email",required:!1,email:"email",message:"Escribe el correo del usuario",disabled:!0},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el apellido paterno"},lastname:{type:"iText",label:"Apellido paterno",name:"lastname",required:!0,message:"Escribe el apellido paterno"},middlename:{type:"iText",label:"Apellido materno",name:"middlename",required:!0,message:"Escribe el apellido paterno"},documentnumber:{type:"iText",label:"Número de DNI",name:"documentnumber",required:!0,message:"Escribe el apellido paterno",max:8},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"año-mes-día"},phone:{type:"iText",label:"Ingresar número celular",name:"phone",required:!0,message:"Escribe número de documento",disabled:!1,max:9},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},cde_id:{type:"iSelect",label:"CDE",name:"cde_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},office_id:{type:"iSelect",label:"Oficina",name:"office_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},role_id:{type:"iSelect",label:"Rol",name:"role_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0}};const ie=y=>(le("data-v-48e8043b"),y=y(),oe(),y),me=ie(()=>w("h3",null,"REGISTRO DE USUARIO",-1)),ce={class:"user"},pe={class:"grid-item"},ve="YYYY-MM-DD",_e={__name:"NuevoUsuarios",setup(y){O.locale("es");const R=se({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),E=JSON.parse(localStorage.getItem("profile")),t=re();t.$patch({genders:t.genders}),t.$patch({cdes:t.cdes}),t.$patch({Offices:t.Offices}),t.$patch({roles:t.roles}),t.$patch({supervisores:t.supervisores}),t.fetchGenders(),t.fetchCdes(),t.fetchOffices(),t.fetchRoles();const v=f(de),b=f(null);X();const U=f(!1),L=f(!1),A=f(!1),q=f(!1),h=f(null),a=Z({name:null,lastname:null,middlename:null,documentnumber:null,birthday:null,sick:2,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:E.user_id,email:null,password:null}),V=()=>{a.name=null,a.lastname=null,a.middlename=null,a.documentnumber=null,b.value=null,a.phone=null,a.gender_id=null,a.cde_id=null,a.office_id=null,a.email=null,a.password=null,a.role_id=null},I=l=>{a[l]=a[l].replace(/\D/g,"")},Y=async()=>{try{q.value=!0;const l={name:h.value};(await T({url:"create/office",method:"POST",data:l})).status==200&&(h.value=null,t.fetchOffices())}catch(l){console.log(l)}finally{q.value=!1}},$=(l,s)=>{const _=l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(_)},z=l=>{const s={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(l===2)t.fetchSupervisores(),v.value={...v.value,supervisor_id:s};else{const{supervisor_id:_,...c}=v.value;v.value=c}},M=async()=>{U.value=!0,a.email=a.name.substring(0,2).toLowerCase()+a.lastname.toLowerCase()+"@pnte.com",a.password=a.documentnumber,a.birthday=b.value?O(b.value).format("YYYY-MM-DD"):null;try{const l=await T({url:"user/create",method:"POST",data:a});ee.success({title:"La cuenta ha sido registrada",content:S("div",{},[S("br"),S("p",`Correo: ${a.email}`),S("p","Contraseña es el número de DNI ingresado")]),onOk(){V(),D.success(l.message);const{supervisor_id:s,..._}=v.value;v.value=_}})}catch{D.error("No se pudo registrar este usuario")}finally{U.value=!1}},B=()=>{D.error("Debes de completar todos los espacios requeridos")},G=async l=>{console.log("Hello",l)},j=()=>{a.document_number=a.document_number.replace(/\D/g,"")};return(l,s)=>{const _=i("a-divider"),c=i("a-select"),x=i("a-input"),C=i("a-button"),P=i("a-space"),g=i("a-form-item"),H=i("a-input-search"),J=i("a-date-picker"),K=i("a-form");return o(),k(N,null,[me,r(_),w("div",ce,[r(K,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:M,onFinishFailed:B},{default:d(()=>[w("div",pe,[(o(!0),k(N,null,ae(v.value,(e,Q)=>(o(),k(N,{key:Q},[e.type==="iSelect"?(o(),u(g,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[e.name=="gender_id"?(o(),u(c,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).genders},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="cde_id"?(o(),u(c,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).cdes},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="role_id"?(o(),u(c,{key:2,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).roles,onChange:z},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="supervisor_id"?(o(),u(c,{key:3,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:p(t).supervisores},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="office_id"?(o(),u(c,{key:4,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,"show-search":"",options:p(t).Offices,"filter-option":$},{dropdownRender:d(({menuNode:n})=>[r(p(R),{vnodes:n},null,8,["vnodes"]),r(_,{style:{margin:"4px 0"}}),r(P,{style:{padding:"4px 8px"}},{default:d(()=>[r(x,{ref_for:!0,ref:"inputRef",value:h.value,"onUpdate:value":s[0]||(s[0]=W=>h.value=W),placeholder:"Nueva actividad"},null,8,["value"]),r(C,{type:"text",onClick:Y,loading:q.value},{icon:d(()=>[r(p(ne))]),default:d(()=>[F(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iSearch"?(o(),u(g,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:d(()=>[r(H,{maxlength:15,loading:L.value,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,onSearch:G,onInput:j,disabled:A.value},null,8,["loading","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iText"?(o(),u(g,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:d(()=>[e.name=="documentnumber"?(o(),u(x,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:s[1]||(s[1]=n=>I("documentnumber"))},null,8,["value","onUpdate:value","maxlength"])):e.name=="phone"?(o(),u(x,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:s[2]||(s[2]=n=>I("phone"))},null,8,["value","onUpdate:value","maxlength"])):(o(),u(x,{key:2,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"]))]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iDate"?(o(),u(g,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[r(J,{locale:p(te),value:b.value,"onUpdate:value":s[3]||(s[3]=n=>b.value=n),style:{width:"100%"},format:ve},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),r(g,null,{default:d(()=>[r(C,{class:"btn-produce",type:"primary","html-type":"submit",loading:U.value},{default:d(()=>[F("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},he=ue(_e,[["__scopeId","data-v-48e8043b"]]);export{he as default};
