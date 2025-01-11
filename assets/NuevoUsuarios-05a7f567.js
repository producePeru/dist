import{B as V,r as g,E as ee,a as ae,b as f,o,d as y,e as F,c as i,w as m,F as h,J as A,M as ne,G as N,m as L,x as te,p as u,h as c,q as d,P as le,i as Y,D as oe,a4 as se}from"./index-ff7b135e.js";import{f as re}from"./nuevoUsuario-39eedf3b.js";import{u as ue}from"./selectes-2e4334fd.js";import"./es-2011e178.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";const ie={class:"user"},me={class:"grid-item"},ce="DD/MM/YYYY",pe={__name:"NuevoUsuarios",setup(ve){V.locale("es");const $=se({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),M=JSON.parse(localStorage.getItem("profile")),w=JSON.parse(localStorage.getItem("role")),t=ue();t.$patch({genders:t.genders}),t.$patch({cdes:t.cdes}),t.$patch({Offices:t.Offices}),t.$patch({roles:t.roles}),t.$patch({supervisores:t.supervisores}),t.fetchGenders(),t.fetchCdes(),t.fetchOffices(),t.fetchRoles();const r=g(re),x=g(null);ee();const q=g(!1),P=g(!1),z=g(!1),C=g(!1),U=g(null),B=[{label:"Supervisor",value:1},{label:"Asesor",value:2},{label:"Notario",value:7}],E=[{label:"Drive Administrador",value:3},{label:"Drive Usuario",value:4}],a=ae({name:null,lastname:null,middlename:null,documentnumber:null,birthday:null,sick:2,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:M.user_id,email:null,password:null}),G=()=>{a.name=null,a.lastname=null,a.middlename=null,a.documentnumber=null,x.value=null,a.phone=null,a.gender_id=null,a.cde_id=null,a.office_id=null,a.email=null,a.password=null,a.role_id=null},T=s=>{a[s]=a[s].replace(/\D/g,"")},J=async()=>{try{C.value=!0;const s={name:U.value};(await A({url:"create/office",method:"POST",data:s})).status==200&&(U.value=null,t.fetchOffices())}catch(s){console.log(s)}finally{C.value=!1}},j=(s,l)=>{const _=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return l.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(_)},O=s=>{const l={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},_={type:"iText",label:"Ciudad de la notaría",name:"city",required:!0,message:"Ciudad de la notaría",disabled:!1},p={type:"iText",label:"Provincia de la de la notaría",name:"province",required:!0,message:"Provincia de la de la notaría",disabled:!1},b={type:"iText",label:"Distrito de la notaría",name:"district",required:!0,message:"Distrito de la notaría",disabled:!1},k={type:"iText",label:"Dirección de la notaría",name:"address",required:!1,message:"Dirección de la notaría",disabled:!1};if(s===2){t.fetchSupervisores(),r.value={...r.value,supervisor_id:l};const{city:D,province:v,district:I,address:R,...S}=r.value;r.value=S}else if(s===7){r.value={...r.value,city:_,province:p,district:b,address:k};const{supervisor_id:D,...v}=r.value;r.value=v,r.value.cde_id.required=!1}else{let{city:D,province:v,district:I,address:R,supervisor_id:S,...e}=r.value;r.value=e}},H=async()=>{q.value=!0,a.email=a.name.replace(/\s/g,"").toLowerCase()+a.lastname.replace(/\s/g,"").toLowerCase()+"@pnte.com",a.password=a.documentnumber,a.birthday=x.value?V(x.value).format("YYYY-MM-DD"):null;try{const s=await A({url:"user/create",method:"POST",data:a});ne.success({title:"La cuenta ha sido registrada",content:N("div",{},[N("br"),N("p",`Correo: ${a.email}`),N("p","Contraseña es el número de DNI ingresado")]),onOk(){G(),L.success(s.message);const{supervisor_id:l,..._}=r.value;r.value=_}})}catch{L.error("No se pudo registrar este usuario")}finally{q.value=!1}},K=()=>{L.error("Debes de completar todos los espacios requeridos")},Q=async s=>{console.log("Hello",s)},W=()=>{a.document_number=a.document_number.replace(/\D/g,"")};return(s,l)=>{const _=f("a-divider"),p=f("a-select"),b=f("a-input"),k=f("a-button"),D=f("a-space"),v=f("a-form-item"),I=f("a-input-search"),R=f("a-date-picker"),S=f("a-form");return o(),y(h,null,[l[6]||(l[6]=F("h3",{class:"title-produce"},"REGISTRO DE USUARIO",-1)),i(_),F("div",ie,[i(S,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:H,onFinishFailed:K},{default:m(()=>[F("div",me,[(o(!0),y(h,null,te(r.value,(e,X)=>(o(),y(h,{key:X},[e.type==="iSelect"?(o(),u(v,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[e.name=="gender_id"?(o(),u(p,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:c(t).genders},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="cde_id"?(o(),u(p,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:c(t).cdes},null,8,["value","onUpdate:value","options"])):d("",!0),c(w)[0].id==1?(o(),y(h,{key:2},[e.name=="role_id"?(o(),u(p,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:B,onChange:O},null,8,["value","onUpdate:value"])):d("",!0)],64)):d("",!0),c(w)[0].id==3?(o(),y(h,{key:3},[e.name=="role_id"?(o(),u(p,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:E,onChange:O},null,8,["value","onUpdate:value"])):d("",!0)],64)):d("",!0),c(w)[0].id==5?(o(),y(h,{key:4},[e.name=="role_id"?(o(),u(p,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:c(t).roles,onChange:O},null,8,["value","onUpdate:value","options"])):d("",!0)],64)):d("",!0),e.name=="supervisor_id"?(o(),u(p,{key:5,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,options:c(t).supervisores},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="office_id"?(o(),u(p,{key:6,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,"show-search":"",options:c(t).Offices,"filter-option":j},{dropdownRender:m(({menuNode:n})=>[i(c($),{vnodes:n},null,8,["vnodes"]),i(_,{style:{margin:"4px 0"}}),i(D,{style:{padding:"4px 8px"}},{default:m(()=>[i(b,{ref_for:!0,ref:"inputRef",value:U.value,"onUpdate:value":l[0]||(l[0]=Z=>U.value=Z),placeholder:"Nueva actividad"},null,8,["value"]),i(k,{type:"text",onClick:J,loading:C.value},{icon:m(()=>[i(c(le))]),default:m(()=>[l[4]||(l[4]=Y(" Agregar "))]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):d("",!0)]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iSearch"?(o(),u(v,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:m(()=>[i(I,{maxlength:15,loading:P.value,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,onSearch:Q,onInput:W,disabled:z.value},null,8,["loading","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iText"?(o(),u(v,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:m(()=>[e.name=="documentnumber"?(o(),u(b,{key:0,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:l[1]||(l[1]=n=>T("documentnumber"))},null,8,["value","onUpdate:value","maxlength"])):e.name=="phone"?(o(),u(b,{key:1,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,onInput:l[2]||(l[2]=n=>T("phone"))},null,8,["value","onUpdate:value","maxlength"])):(o(),u(b,{key:2,value:a[e.name],"onUpdate:value":n=>a[e.name]=n,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"]))]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iDate"?(o(),u(v,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:m(()=>[i(R,{locale:c(oe),value:x.value,"onUpdate:value":l[3]||(l[3]=n=>x.value=n),style:{width:"100%"},format:ce},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):d("",!0)],64))),128))]),i(v,null,{default:m(()=>[i(k,{class:"btn-produce",type:"primary","html-type":"submit",loading:q.value},{default:m(()=>l[5]||(l[5]=[Y("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},he=de(pe,[["__scopeId","data-v-cb6d7783"]]);export{he as default};
