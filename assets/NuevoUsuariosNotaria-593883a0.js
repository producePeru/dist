import{L as C,r as N,x as j,a as J,j as Q,b as c,o as n,d as D,e as p,c as b,w as _,F as k,f as X,y as f,Z,Q as x,m as F,v as H,p as l,t as h,q as m,h as w,M as K,i as W}from"./index-f9efa549.js";import{u as ee}from"./selectes-90b6a3b2.js";import"./es-ea5d2240.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const te={notary_id:{type:"iSelect",label:"Selecciona la notaría",name:"notary_id",required:!0,message:"Seleccionar una notaría",disabled:!1},name:{type:"iText",label:"Nombres del encargado externo",name:"name",required:!0,message:"Ingresar los nombres"},lastname:{type:"iText",label:"Apellido paterno del encargado externo",name:"lastname",required:!0,message:"Escribe el apellido paterno"},middlename:{type:"iText",label:"Apellido materno del encargado externo",name:"middlename",required:!0,message:"Escribe el apellido paterno"},documentnumber:{type:"iText",label:"Número de DNI del encargado externo",name:"documentnumber",required:!0,message:"Ingresa el número de DNI",max:8},birthday:{type:"iDate",label:"Fecha de nacimiento - día/mes/año",name:"birthday",required:!1,message:"año-mes-día"},phone:{type:"iText",label:"Ingresar número celular",name:"phone",required:!0,message:"Escribe número de documento",disabled:!1,max:9},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},role_id:{type:"iSelect",label:"Rol",name:"role_id",required:!0,message:"Seleccionar un rol de usuario",disabled:!0}};const oe={class:"user"},ne={class:"grid-item"},re={class:"select-notaries"},se={class:"name"},le={class:"city"},de={class:"address"},ie="DD/MM/YYYY",ue={__name:"NuevoUsuariosNotaria",setup(me){C.locale("es");const i=ee();JSON.parse(localStorage.getItem("profile")),i.$patch({genders:i.genders}),i.$patch({cdes:i.cdes}),i.fetchGenders(),i.fetchCdes();const q=N([]),R=N(te),g=N(null);j();const U=N(!1),O=[{label:"Notaria",value:7}],e=J({}),I=(s,t)=>{const d=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),r=t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),u=t.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),v=t.province.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),y=t.district.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r.includes(d)||u.includes(d)||v.includes(d)||y.includes(d)},z=async()=>{try{const{data:s}=await X({url:"public/notaries-filters",method:"GET"});q.value=s.map(t=>({value:t.id,name:t.name,city:t.city.name,province:t.province.name,district:t.district.name,address:t.address}))}catch(s){console.error("Error de red:",s)}},L=()=>{e.name=null,e.lastname=null,e.middlename=null,e.documentnumber=null,g.value=null,e.phone=null,e.gender_id=null,e.cde_id=null,e.office_id=null,e.email=null,e.password=null,e.role_id=null,e.notary_id=null},T=s=>{e[s]=e[s].replace(/\D/g,"")},P=async()=>{U.value=!0,e.email=`${e.name.replace(/\s/g,"").toLowerCase()}${e.lastname.replace(/\s/g,"").toLowerCase()}@pnte.com`,e.password=e.documentnumber,e.birthday=g.value?C(g.value).format("YYYY-MM-DD"):null;const s={notary_id:e.notary_id},t=await f({url:"create/cde-notary",method:"POST",data:s});console.log("😄😁",t);try{const d={email:e.email,documentnumber:e.documentnumber,password:e.documentnumber},r=await f({url:"user/register-user",method:"POST",data:d});if(r.status!==200)throw new Error("User registration failed");const u={name:e.name,lastname:e.lastname,middlename:e.middlename,documentnumber:e.documentnumber,birthday:e.birthday,phone:e.phone,gender_id:e.gender_id,cde_id:t,office_id:5,user_id:r.data.id,notary_id:e.notary_id};if((await f({url:"user/register-profile",method:"POST",data:u})).status!==200)throw new Error("Profile registration failed");const y={role_id:e.role_id,user_id:r.data.id,documentnumber:e.documentnumber};if((await f({url:"user/register-roles",method:"POST",data:y})).status!==200)throw new Error("Role registration failed");const S={user_id:r.data.id},a=await f({url:"user/register-views",method:"POST",data:S});Z.success({title:"La cuenta ha sido registrada",content:x("div",{},[x("br"),x("p",`Correo: ${e.documentnumber} o ${e.email}`),x("p","Contraseña es el número de DNI ingresado")]),onOk(){L()}})}catch(d){F.error("No se pudo registrar este usuario"),console.log("error",d)}finally{U.value=!1}},Y=()=>{F.error("Debes de completar todos los espacios requeridos")};return Q(()=>{z()}),(s,t)=>{const d=c("a-divider"),r=c("a-select"),u=c("a-form-item"),v=c("a-input"),y=c("a-date-picker"),E=c("a-button"),S=c("a-form");return n(),D(k,null,[t[4]||(t[4]=p("h3",{class:"title-produce"},"REGISTRO DE NUEVO ASESOR EXTERNO - NOTARÍA",-1)),b(d),p("div",oe,[b(S,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:P,onFinishFailed:Y},{default:_(()=>[p("div",ne,[(n(!0),D(k,null,H(R.value,(a,$)=>(n(),D(k,{key:$},[a.type==="iSelect"?(n(),l(u,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:_(()=>[a.name=="notary_id"?(n(),l(r,{key:0,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:q.value,"option-label-prop":"name","show-search":"","filter-option":I},{option:_(({value:o,name:A,city:M,province:V,district:G,address:B})=>[p("div",re,[p("span",se,h(A),1),p("span",le,h(M)+" - "+h(V)+" - "+h(G),1),p("span",de,h(B),1)])]),_:2},1032,["value","onUpdate:value","options"])):m("",!0),a.name=="gender_id"?(n(),l(r,{key:1,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:w(i).genders},null,8,["value","onUpdate:value","options"])):m("",!0),a.name=="cde_id"?(n(),l(r,{key:2,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:w(i).cdes},null,8,["value","onUpdate:value","options"])):m("",!0),a.name=="role_id"?(n(),l(r,{key:3,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:O},null,8,["value","onUpdate:value"])):m("",!0),a.name=="supervisor_id"?(n(),l(r,{key:4,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:w(i).supervisores},null,8,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),a.type==="iText"?(n(),l(u,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:_(()=>[a.name=="documentnumber"?(n(),l(v,{key:0,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,maxlength:a.max,onInput:t[0]||(t[0]=o=>T("documentnumber"))},null,8,["value","onUpdate:value","maxlength"])):a.name=="phone"?(n(),l(v,{key:1,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,maxlength:a.max,onInput:t[1]||(t[1]=o=>T("phone"))},null,8,["value","onUpdate:value","maxlength"])):(n(),l(v,{key:2,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"]))]),_:2},1032,["name","label","rules"])):m("",!0),a.type==="iDate"?(n(),l(u,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:_(()=>[b(y,{locale:w(K),value:g.value,"onUpdate:value":t[2]||(t[2]=o=>g.value=o),style:{width:"100%"},format:ie},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),b(u,null,{default:_(()=>[b(E,{class:"btn-produce",type:"primary","html-type":"submit",loading:U.value},{default:_(()=>t[3]||(t[3]=[W("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},ge=ae(ue,[["__scopeId","data-v-6a594fce"]]);export{ge as default};
