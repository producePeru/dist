import{a9 as F,r as i,a as B,b as s,o as r,q as c,w as o,c as d,e as m,d as x,x as D,F as N,s as p,h as w,i as v,t as V,z as q,m as S,k as H,aa as X,X as j,J,P as K}from"./index-cad29f5b.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{M as W}from"./MoreOutlined-1154145f.js";const Y={documentType:{type:"iSelect",label:"Tipo de documento",name:"documentType",required:!0,message:"Seleccionar tipo de documento"},documentNumber:{type:"iText",label:"Número de documento",name:"documentNumber",required:!0,message:"Error en el tipo de documento"},firstName:{type:"iText",label:"Nombres",name:"firstName",required:!0,message:"Escribe el nombre"},lastName:{type:"iText",label:"Apellido paterno",name:"lastName",required:!0,message:"Escribe el apellido paterno"},middleName:{type:"iText",label:"Apellido materno",name:"middleName",required:!0,message:"Escribe el apellido materno"},gender:{type:"iSelect",label:"Género",name:"gender",required:!0,message:"Seleccionar tipo de género"},email:{type:"iText",label:"Correo",name:"email",required:!0,email:"email",message:"Escribe el correo del usuario"},rucNumber:{type:"iText",label:"Número de RUC",name:"rucNumber",required:!1,message:"Registra el Número de RUC"},phoneNumber:{type:"iText",label:"Celular",name:"phoneNumber",required:!1,message:"Escribe el celular del usuario"},specialty:{type:"iText",label:"Especialidad",name:"specialty",required:!1,message:"Registra la especialidad del expositor"},profession:{type:"iText",label:"Profesión",name:"profession",required:!1,message:"Registra la especialidad del expositor"},cvLink:{type:"iText",label:"Link de CV",name:"cvLink",required:!1,message:"Registra la especialidad del expositor"}};const Z={class:"grid-item"},ee={class:"wrapper-form_btn"},ae={__name:"AgregarExpositor",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(R,{emit:k}){const t=R,_=k;F(()=>{t.isIdUpdate?(e.documentType=t.isIdUpdate.document_type,e.documentNumber=t.isIdUpdate.document_number,e.firstName=t.isIdUpdate.first_name,e.lastName=t.isIdUpdate.last_name,e.middleName=t.isIdUpdate.middle_name,e.gender=t.isIdUpdate.gender=="h"?1:2,e.email=t.isIdUpdate.email,e.rucNumber=t.isIdUpdate.ruc_number,e.phoneNumber=t.isIdUpdate.phone_number,e.specialty=t.isIdUpdate.specialty,e.profession=t.isIdUpdate.profession,e.cvLink=t.isIdUpdate.cv_link):U()});const h=i(!0),b=i(!1),e=B({documentType:null,documentNumber:null,firstName:null,lastName:null,middleName:null,gender:null,email:null,rucNumber:null,phoneNumber:null,specialty:null,profession:null,cvLink:null,user_id:1,enabled:1}),A=[{label:"Masculino",value:1},{label:"Femenino",value:2},{label:"...",value:3}],M=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],I=()=>{_("handleCloseModal",!0),h.value=!1},U=()=>{e.documentType=null,e.documentNumber=null,e.firstName=null,e.lastName=null,e.middleName=null,e.gender=null,e.email=null,e.rucNumber=null,e.phoneNumber=null,e.specialty=null,e.profession=null,e.cvLink=null},P=async()=>{const C=e;b.value=!0;let u,l;t.isIdUpdate?(u=`/exponents/${t.isIdUpdate.id}`,l="PUT"):(u="/exponents",l="POST");try{const n=await q({url:u,method:l,data:C});U(),_("refreshTable",!0),S.success(n.message),I()}catch{S.error("No se pudo registrar al exponente")}finally{b.value=!1}};return(C,u)=>{const l=s("a-select"),n=s("a-form-item"),T=s("a-input"),E=s("a-button"),L=s("a-form"),$=s("a-modal");return r(),c($,{open:h.value,"onUpdate:open":u[0]||(u[0]=a=>h.value=a),title:"Agregar expositor",style:{top:"40px"},footer:"",onCancel:I,width:"700px"},{default:o(()=>[d(L,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:P},{default:o(()=>[m("div",Z,[(r(!0),x(N,null,D(w(Y),(a,z)=>(r(),x(N,{key:z},[a.type==="iSelect"?(r(),c(n,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:o(()=>[a.name=="documentType"?(r(),c(l,{key:0,value:e[a.name],"onUpdate:value":g=>e[a.name]=g,options:M},null,8,["value","onUpdate:value"])):p("",!0),a.name=="gender"?(r(),c(l,{key:1,value:e[a.name],"onUpdate:value":g=>e[a.name]=g,options:A},null,8,["value","onUpdate:value"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),a.type==="iText"?(r(),c(n,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:o(()=>[d(T,{value:e[a.name],"onUpdate:value":g=>e[a.name]=g},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):p("",!0)],64))),128))]),m("div",ee,[d(E,{type:"primary","html-type":"submit",loading:b.value},{default:o(()=>[v(V(R.isIdUpdate?"Actualizar":"Registrar")+" expositor",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open"])}}},te=Q(ae,[["__scopeId","data-v-4b78db08"]]);const le=m("h3",null,"EXPOSITORES",-1),ne={class:"filters"},oe=["onClick"],se={class:"paginator"},ue={__name:"ExpositoresLista",setup(R){const k=i([]),t=i(!1);i(1e3),i(8e4);const _=i(!1),h=i(0),b=i(null);i(!1);const e=i({page:1}),A=[{title:"Nombres",dataIndex:"firstName",fixed:"left",width:40},{title:"Apellidos",dataIndex:"lastNames",fixed:"left",width:50},{title:"RUC",dataIndex:"rucNumber",align:"center",width:40},{title:"Tipo documento",dataIndex:"documentType",align:"center",width:30},{title:"N° documento",dataIndex:"documentNumber",align:"center",width:40},{title:"Correo electrónico",dataIndex:"email",width:60},{title:"Celular",dataIndex:"phoneNumber",align:"center",width:80},{title:"Especialidad",dataIndex:"specialty",align:"center",width:40},{title:"Profesión",dataIndex:"profession",align:"center",width:50},{title:"Género",dataIndex:"sex",align:"center",width:30},{title:"Habilitado",dataIndex:"enabled",align:"center",width:30},{title:"",dataIndex:"actions",align:"center",width:15}],M=l=>{l&&u()},I=l=>{e.value.page=l,u()},U=async l=>{try{const n=await q({url:`/exponents/${l.id}`,method:"GET"});b.value=n.data,_.value=!0}catch(n){console.error("Error de red:",n),S.warning("Error de red")}},P=()=>{b.value=null,_.value=!0},C=async l=>{try{t.value=!0;const n=await q({url:`/enabled-disabled/${l}`,method:"PUT"});S.success(n.message)}catch(n){console.error("Error de red:",n)}finally{t.value=!1}},u=async()=>{try{t.value=!0;const l=await q({url:"/exponents",method:"GET",params:e.value});k.value=l.data,h.value=l.meta.total}catch(l){console.error("Error de red:",l)}finally{t.value=!1}};return H(u),(l,n)=>{const T=s("a-button"),E=s("a-tag"),L=s("a-switch"),$=s("a-menu-item"),a=s("a-menu"),z=s("a-dropdown"),g=s("a-table"),G=s("a-pagination");return r(),x(N,null,[m("div",null,[le,m("div",ne,[d(T,{type:"primary",onClick:P},{default:o(()=>[v("AGREGAR")]),_:1})]),d(g,{bordered:"",scroll:{x:1800},class:"ant-table-striped",columns:A,"data-source":k.value,pagination:!1,loading:t.value,size:"small"},{bodyCell:o(({column:y,record:f})=>[y.dataIndex=="lastNames"?(r(),x(N,{key:0},[v(V(f.lastName)+" "+V(f.middleName),1)],64)):p("",!0),y.dataIndex=="sex"?(r(),x(N,{key:1},[f.gender=="h"?(r(),c(E,{key:0,color:"blue"},{default:o(()=>[v("Hombre")]),_:1})):(r(),c(E,{key:1,color:"pink"},{default:o(()=>[v("Mujer")]),_:1}))],64)):p("",!0),y.dataIndex=="enabled"?(r(),c(L,{key:2,checked:f.enabled,"onUpdate:checked":O=>f.enabled=O,onChange:O=>C(f.id),checkedValue:1,unCheckedValue:0},{checkedChildren:o(()=>[d(w(X))]),unCheckedChildren:o(()=>[d(w(j))]),_:2},1032,["checked","onUpdate:checked","onChange"])):p("",!0),y.dataIndex=="actions"?(r(),c(z,{key:3,trigger:["click"]},{overlay:o(()=>[d(a,null,{default:o(()=>[d($,null,{default:o(()=>[m("a",{onClick:O=>U(f)},"Editar",8,oe)]),_:2},1024)]),_:2},1024)]),default:o(()=>[m("a",{class:"ant-dropdown-link",onClick:n[0]||(n[0]=J(()=>{},["prevent"]))},[d(T,{shape:"circle",icon:K(w(W)),size:"small"},null,8,["icon"])])]),_:2},1024)):p("",!0)]),_:1},8,["data-source","loading"])]),m("div",se,[d(G,{size:"small",total:h.value,pageSize:20,onChange:I,showSizeChanger:!1},null,8,["total"])]),d(te,{open:_.value,onRefreshTable:M,onHandleCloseModal:n[1]||(n[1]=y=>_.value=!1),isIdUpdate:b.value},null,8,["open","isIdUpdate"])],64)}}};export{ue as default};
