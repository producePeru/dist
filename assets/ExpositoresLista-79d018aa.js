import{aa as F,r as i,a as B,b as s,o as r,p as m,w as o,c as d,e as c,d as x,v as D,F as N,q as p,h as w,i as h,t as z,y as q,m as S,j as H,a8 as j,X,J,Q}from"./index-33e66e21.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{M as W}from"./MoreOutlined-115fe84e.js";const Y={documentType:{type:"iSelect",label:"Tipo de documento",name:"documentType",required:!0,message:"Seleccionar tipo de documento"},documentNumber:{type:"iText",label:"Número de documento",name:"documentNumber",required:!0,message:"Error en el tipo de documento"},firstName:{type:"iText",label:"Nombres",name:"firstName",required:!0,message:"Escribe el nombre"},lastName:{type:"iText",label:"Apellido paterno",name:"lastName",required:!0,message:"Escribe el apellido paterno"},middleName:{type:"iText",label:"Apellido materno",name:"middleName",required:!0,message:"Escribe el apellido materno"},gender:{type:"iSelect",label:"Género",name:"gender",required:!0,message:"Seleccionar tipo de género"},email:{type:"iText",label:"Correo",name:"email",required:!0,email:"email",message:"Escribe el correo del usuario"},rucNumber:{type:"iText",label:"Número de RUC",name:"rucNumber",required:!1,message:"Registra el Número de RUC"},phoneNumber:{type:"iText",label:"Celular",name:"phoneNumber",required:!1,message:"Escribe el celular del usuario"},specialty:{type:"iText",label:"Especialidad",name:"specialty",required:!1,message:"Registra la especialidad del expositor"},profession:{type:"iText",label:"Profesión",name:"profession",required:!1,message:"Registra la especialidad del expositor"},cvLink:{type:"iText",label:"Link de CV",name:"cvLink",required:!1,message:"Registra la especialidad del expositor"}};const Z={class:"grid-item"},ee={class:"wrapper-form_btn"},ae={__name:"AgregarExpositor",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(R,{emit:I}){const l=R,_=I;F(()=>{l.isIdUpdate?(e.documentType=l.isIdUpdate.document_type,e.documentNumber=l.isIdUpdate.document_number,e.firstName=l.isIdUpdate.first_name,e.lastName=l.isIdUpdate.last_name,e.middleName=l.isIdUpdate.middle_name,e.gender=l.isIdUpdate.gender=="h"?1:2,e.email=l.isIdUpdate.email,e.rucNumber=l.isIdUpdate.ruc_number,e.phoneNumber=l.isIdUpdate.phone_number,e.specialty=l.isIdUpdate.specialty,e.profession=l.isIdUpdate.profession,e.cvLink=l.isIdUpdate.cv_link):U()});const y=i(!0),b=i(!1),e=B({documentType:null,documentNumber:null,firstName:null,lastName:null,middleName:null,gender:null,email:null,rucNumber:null,phoneNumber:null,specialty:null,profession:null,cvLink:null,user_id:1,enabled:1}),A=[{label:"Masculino",value:1},{label:"Femenino",value:2},{label:"...",value:3}],M=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],k=()=>{_("handleCloseModal",!0),y.value=!1},U=()=>{e.documentType=null,e.documentNumber=null,e.firstName=null,e.lastName=null,e.middleName=null,e.gender=null,e.email=null,e.rucNumber=null,e.phoneNumber=null,e.specialty=null,e.profession=null,e.cvLink=null},P=async()=>{const C=e;b.value=!0;let u,n;l.isIdUpdate?(u=`/exponents/${l.isIdUpdate.id}`,n="PUT"):(u="/exponents",n="POST");try{const a=await q({url:u,method:n,data:C});U(),_("refreshTable",!0),S.success(a.message),k()}catch{S.error("No se pudo registrar al exponente")}finally{b.value=!1}};return(C,u)=>{const n=s("a-select"),a=s("a-form-item"),T=s("a-input"),E=s("a-button"),L=s("a-form"),$=s("a-modal");return r(),m($,{open:y.value,"onUpdate:open":u[0]||(u[0]=t=>y.value=t),title:"Agregar expositor",style:{top:"40px"},footer:"",onCancel:k,width:"700px"},{default:o(()=>[d(L,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:P},{default:o(()=>[c("div",Z,[(r(!0),x(N,null,D(w(Y),(t,O)=>(r(),x(N,{key:O},[t.type==="iSelect"?(r(),m(a,{key:0,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[t.name=="documentType"?(r(),m(n,{key:0,value:e[t.name],"onUpdate:value":g=>e[t.name]=g,options:M},null,8,["value","onUpdate:value"])):p("",!0),t.name=="gender"?(r(),m(n,{key:1,value:e[t.name],"onUpdate:value":g=>e[t.name]=g,options:A},null,8,["value","onUpdate:value"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),t.type==="iText"?(r(),m(a,{key:1,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,type:t.email}]},{default:o(()=>[d(T,{value:e[t.name],"onUpdate:value":g=>e[t.name]=g},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):p("",!0)],64))),128))]),c("div",ee,[d(E,{type:"primary","html-type":"submit",loading:b.value},{default:o(()=>[h(z(R.isIdUpdate?"Actualizar":"Registrar")+" expositor",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open"])}}},te=K(ae,[["__scopeId","data-v-4b78db08"]]);const le={class:"filters"},ne=["onClick"],oe={class:"paginator"},ie={__name:"ExpositoresLista",setup(R){const I=i([]),l=i(!1);i(1e3),i(8e4);const _=i(!1),y=i(0),b=i(null);i(!1);const e=i({page:1}),A=[{title:"Nombres",dataIndex:"firstName",fixed:"left",width:40},{title:"Apellidos",dataIndex:"lastNames",fixed:"left",width:50},{title:"RUC",dataIndex:"rucNumber",align:"center",width:40},{title:"Tipo documento",dataIndex:"documentType",align:"center",width:30},{title:"N° documento",dataIndex:"documentNumber",align:"center",width:40},{title:"Correo electrónico",dataIndex:"email",width:60},{title:"Celular",dataIndex:"phoneNumber",align:"center",width:80},{title:"Especialidad",dataIndex:"specialty",align:"center",width:40},{title:"Profesión",dataIndex:"profession",align:"center",width:50},{title:"Género",dataIndex:"sex",align:"center",width:30},{title:"Habilitado",dataIndex:"enabled",align:"center",width:30},{title:"",dataIndex:"actions",align:"center",width:15}],M=n=>{n&&u()},k=n=>{e.value.page=n,u()},U=async n=>{try{const a=await q({url:`/exponents/${n.id}`,method:"GET"});b.value=a.data,_.value=!0}catch(a){console.error("Error de red:",a),S.warning("Error de red")}},P=()=>{b.value=null,_.value=!0},C=async n=>{try{l.value=!0;const a=await q({url:`/enabled-disabled/${n}`,method:"PUT"});S.success(a.message)}catch(a){console.error("Error de red:",a)}finally{l.value=!1}},u=async()=>{try{l.value=!0;const n=await q({url:"/exponents",method:"GET",params:e.value});I.value=n.data,y.value=n.meta.total}catch(n){console.error("Error de red:",n)}finally{l.value=!1}};return H(u),(n,a)=>{const T=s("a-button"),E=s("a-tag"),L=s("a-switch"),$=s("a-menu-item"),t=s("a-menu"),O=s("a-dropdown"),g=s("a-table"),G=s("a-pagination");return r(),x(N,null,[c("div",null,[a[5]||(a[5]=c("h3",null,"EXPOSITORES",-1)),c("div",le,[d(T,{type:"primary",onClick:P},{default:o(()=>a[2]||(a[2]=[h("AGREGAR")])),_:1})]),d(g,{bordered:"",scroll:{x:1800},class:"ant-table-striped",columns:A,"data-source":I.value,pagination:!1,loading:l.value,size:"small"},{bodyCell:o(({column:v,record:f})=>[v.dataIndex=="lastNames"?(r(),x(N,{key:0},[h(z(f.lastName)+" "+z(f.middleName),1)],64)):p("",!0),v.dataIndex=="sex"?(r(),x(N,{key:1},[f.gender=="h"?(r(),m(E,{key:0,color:"blue"},{default:o(()=>a[3]||(a[3]=[h("Hombre")])),_:1})):(r(),m(E,{key:1,color:"pink"},{default:o(()=>a[4]||(a[4]=[h("Mujer")])),_:1}))],64)):p("",!0),v.dataIndex=="enabled"?(r(),m(L,{key:2,checked:f.enabled,"onUpdate:checked":V=>f.enabled=V,onChange:V=>C(f.id),checkedValue:1,unCheckedValue:0},{checkedChildren:o(()=>[d(w(j))]),unCheckedChildren:o(()=>[d(w(X))]),_:2},1032,["checked","onUpdate:checked","onChange"])):p("",!0),v.dataIndex=="actions"?(r(),m(O,{key:3,trigger:["click"]},{overlay:o(()=>[d(t,null,{default:o(()=>[d($,null,{default:o(()=>[c("a",{onClick:V=>U(f)},"Editar",8,ne)]),_:2},1024)]),_:2},1024)]),default:o(()=>[c("a",{class:"ant-dropdown-link",onClick:a[0]||(a[0]=J(()=>{},["prevent"]))},[d(T,{shape:"circle",icon:Q(w(W)),size:"small"},null,8,["icon"])])]),_:2},1024)):p("",!0)]),_:1},8,["data-source","loading"])]),c("div",oe,[d(G,{size:"small",total:y.value,pageSize:20,onChange:k,showSizeChanger:!1},null,8,["total"])]),d(te,{open:_.value,onRefreshTable:M,onHandleCloseModal:a[1]||(a[1]=v=>_.value=!1),isIdUpdate:b.value},null,8,["open","isIdUpdate"])],64)}}};export{ie as default};
