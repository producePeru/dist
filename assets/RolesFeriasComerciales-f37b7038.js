import{B as C,r as _,a as H,b as m,o,d as g,e as D,t as K,c as r,w as d,F as b,J as w,M as Q,G as I,m as O,x as W,p as u,h as c,q as i,P as X,i as F,D as ee,a4 as ae}from"./index-abe79955.js";import{f as te}from"./nuevoUsuario-39eedf3b.js";import{u as ne}from"./selectes-4b72d399.js";import"./es-14971b91.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";const oe={class:"title-produce"},se={class:"user"},re={class:"grid-item"},ue="DD/MM/YYYY",de={__name:"RolesFeriasComerciales",setup(ie){C.locale("es");const A=ae({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),q=JSON.parse(localStorage.getItem("profile")),y=JSON.parse(localStorage.getItem("role")),n=ne();n.$patch({genders:n.genders}),n.$patch({cdes:n.cdes}),n.$patch({Offices:n.Offices}),n.$patch({roles:n.roles}),n.$patch({supervisores:n.supervisores}),n.fetchGenders(),n.fetchCdes(),n.fetchOffices(),n.fetchRoles();const N=_(te),f=_(null),k=_(!1),x=_(!1),h=_(null),V=()=>{if(y[0].id==8)return"REGISTRO DE USUARIO EN CONVENIOS UGSE";if(y[0].id==10)return"REGISTRO DE USUARIO EN FERIAS"},L=[{label:"ADMIN DE CONVENIOS UGSE",value:8},{label:"USUARIO DE CONVENIOS UGSE",value:9}],$=[{label:"👑 ADMIN DE FERIAS",value:10},{label:"⛏ USUARIO",value:11},{label:"👀 VISUALIZADOR DE FERIAS",value:12}],a=H({name:null,lastname:null,middlename:null,documentnumber:null,birthday:null,sick:2,phone:null,gender_id:null,cde_id:12,office_id:2,user_id:q.user_id,email:null,password:null}),G=()=>{a.name=null,a.lastname=null,a.middlename=null,a.documentnumber=null,f.value=null,a.phone=null,a.gender_id=null,a.cde_id=null,a.office_id=null,a.email=null,a.password=null,a.role_id=null},R=s=>{a[s]=a[s].replace(/\D/g,"")},M=async()=>{try{x.value=!0;const s={name:h.value};(await w({url:"create/office",method:"POST",data:s})).status==200&&(h.value=null,n.fetchOffices())}catch(s){console.log(s)}finally{x.value=!1}},T=(s,l)=>{const p=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return l.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(p)},Y=async()=>{k.value=!0,a.email=a.name.replace(/\s/g,"").toLowerCase()+a.lastname.replace(/\s/g,"").toLowerCase()+"@pnte.com",a.password=a.documentnumber,a.birthday=f.value?C(f.value).format("YYYY-MM-DD"):null;try{const s=await w({url:"user/new-user-views",method:"POST",data:a});s.status==200&&Q.success({title:"La cuenta ha sido creada",content:I("div",{},[I("br"),I("p",`Correo: ${a.documentnumber} o ${a.email}`),I("p","Contraseña es el número de DNI ingresado")]),onOk(){G(),O.success(s.message);const{supervisor_id:l,...p}=N.value;N.value=p}}),s.status==400&&O.error(s.message)}catch{O.error("No se pudo registrar este usuario")}finally{k.value=!1}},z=()=>{O.error("Debes de completar todos los espacios requeridos")};return(s,l)=>{const p=m("a-divider"),v=m("a-select"),U=m("a-input"),E=m("a-button"),B=m("a-space"),S=m("a-form-item"),P=m("a-date-picker"),J=m("a-form");return o(),g(b,null,[D("h3",oe,K(V()),1),r(p),D("div",se,[r(J,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:Y,onFinishFailed:z},{default:d(()=>[D("div",re,[(o(!0),g(b,null,W(N.value,(e,j)=>(o(),g(b,{key:j},[e.type==="iSelect"?(o(),u(S,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[e.name=="gender_id"?(o(),u(v,{key:0,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:c(n).genders},null,8,["value","onUpdate:value","options"])):i("",!0),e.name=="cde_id"?(o(),u(v,{key:1,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:c(n).cdes},null,8,["value","onUpdate:value","options"])):i("",!0),c(y)[0].id==8?(o(),g(b,{key:2},[e.name=="role_id"?(o(),u(v,{key:0,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:L},null,8,["value","onUpdate:value"])):i("",!0)],64)):i("",!0),c(y)[0].id==10?(o(),g(b,{key:3},[e.name=="role_id"?(o(),u(v,{key:0,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,options:$},null,8,["value","onUpdate:value"])):i("",!0)],64)):i("",!0),e.name=="office_id"?(o(),u(v,{key:4,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,"show-search":"",options:c(n).Offices,"filter-option":T},{dropdownRender:d(({menuNode:t})=>[r(c(A),{vnodes:t},null,8,["vnodes"]),r(p,{style:{margin:"4px 0"}}),r(B,{style:{padding:"4px 8px"}},{default:d(()=>[r(U,{ref_for:!0,ref:"inputRef",value:h.value,"onUpdate:value":l[0]||(l[0]=Z=>h.value=Z),placeholder:"Nueva actividad"},null,8,["value"]),r(E,{type:"text",onClick:M,loading:x.value},{icon:d(()=>[r(c(X))]),default:d(()=>[l[4]||(l[4]=F(" Agregar "))]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),e.type==="iText"?(o(),u(S,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:d(()=>[e.name=="documentnumber"?(o(),u(U,{key:0,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,maxlength:e.max,onInput:l[1]||(l[1]=t=>R("documentnumber"))},null,8,["value","onUpdate:value","maxlength"])):e.name=="phone"?(o(),u(U,{key:1,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,maxlength:e.max,onInput:l[2]||(l[2]=t=>R("phone"))},null,8,["value","onUpdate:value","maxlength"])):(o(),u(U,{key:2,value:a[e.name],"onUpdate:value":t=>a[e.name]=t,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"]))]),_:2},1032,["name","label","rules"])):i("",!0),e.type==="iDate"?(o(),u(S,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[r(P,{locale:c(ee),value:f.value,"onUpdate:value":l[3]||(l[3]=t=>f.value=t),style:{width:"100%"},format:ue},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),r(S,null,{default:d(()=>[r(E,{class:"btn-produce",type:"primary","html-type":"submit",loading:k.value},{default:d(()=>l[5]||(l[5]=[F("REGISTRAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},_e=le(de,[["__scopeId","data-v-2327d7bc"]]);export{_e as default};
