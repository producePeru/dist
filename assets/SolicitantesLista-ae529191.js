import{B as K,r as c,a as X,n as j,b as d,o as l,z as m,w as r,c as u,e as f,d as w,v as J,F as C,s as _,i as $,j as T,t as F,f as B,h as P,m as z,K as Q,L as W,G as Y,M as Z}from"./index-b4c6ca84.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{M as ae}from"./MoreOutlined-ed5a29f6.js";const te={name:{type:"iText",label:"Nombre notaría",name:"name",required:!0,message:"Ingresa el nombre de la notaría"},department:{type:"iSelect",label:"Departamento",name:"department",required:!0,message:"Seleccionar un tipo"},province:{type:"iSelect",label:"Provincia",name:"province",required:!0,message:"Seleccionar un tipo"},district:{type:"iSelect",label:"Distrito",name:"district",required:!0,message:"Seleccionar un tipo"},address:{type:"iText",label:"Dirección",name:"address",required:!0,message:"Escribe la dirección"},fee:{type:"iText",label:"Tarífa",name:"fee",required:!0,message:"Escribe la tarifa"},saving:{type:"iText",label:"Tarifa social",name:"saving",required:!0,message:"Escribe un monto"}};const ne={class:"grid-item"},le={class:"wrapper-form_btn"},oe={__name:"ModalNotarias",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(E,{emit:S}){const t=E,M=S;K(()=>{t.isIdUpdate?(e.documentType=t.isIdUpdate.document_type,e.documentNumber=t.isIdUpdate.document_number,e.firstName=t.isIdUpdate.first_name,e.lastName=t.isIdUpdate.last_name,e.middleName=t.isIdUpdate.middle_name,e.gender=t.isIdUpdate.gender=="h"?1:2,e.email=t.isIdUpdate.email,e.rucNumber=t.isIdUpdate.ruc_number,e.phoneNumber=t.isIdUpdate.phone_number,e.specialty=t.isIdUpdate.specialty,e.profession=t.isIdUpdate.profession,e.cvLink=t.isIdUpdate.cv_link):U()});const g=c([]),k=c([]),N=c([]),q=async()=>{try{const{data:i}=await B({url:"/departaments",method:"GET"});g.value=i}catch(i){console.log(i)}},A=(i,n)=>{console.log(n),e.province=null,e.district=null,G(n.id)},G=async i=>{try{const{data:n}=await B({url:`/province/${i}`,method:"GET"});k.value=n}catch(n){console.log(n)}},L=(i,n)=>{e.district=null,R(n.id)},R=async i=>{try{const{data:n}=await B({url:`/district/${i}`,method:"GET"});N.value=n}catch(n){console.log(n)}},x=c(!0),I=c(!1),e=X({documentType:null,documentNumber:null,firstName:null,lastName:null,middleName:null,gender:null,email:null,rucNumber:null,phoneNumber:null,specialty:null,profession:null,cvLink:null,user_id:1,enabled:1}),o=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],s=()=>{M("handleCloseModal",!0),x.value=!1},U=()=>{e.documentType=null,e.documentNumber=null,e.firstName=null,e.lastName=null,e.middleName=null,e.gender=null,e.email=null,e.rucNumber=null,e.phoneNumber=null,e.specialty=null,e.profession=null,e.cvLink=null},D=async()=>{const i=e;I.value=!0;let n,p;t.isIdUpdate?(n=`/exponents/${t.isIdUpdate.id}`,p="PUT"):(n="/exponents",p="POST");try{const y=await P({url:n,method:p,data:i});U(),M("refreshTable",!0),z.success(y.message),s()}catch{z.error("No se pudo registrar al exponente")}finally{I.value=!1}};return j(q),(i,n)=>{const p=d("a-select"),y=d("a-form-item"),O=d("a-input"),V=d("a-button"),b=d("a-form"),v=d("a-modal");return l(),m(v,{open:x.value,"onUpdate:open":n[0]||(n[0]=a=>x.value=a),title:`${E.isIdUpdate?"Actualizar":"Registrar"} notaría`,style:{top:"40px"},footer:"",onCancel:s,width:"700px"},{default:r(()=>[u(b,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:D},{default:r(()=>[f("div",ne,[(l(!0),w(C,null,J($(te),(a,H)=>(l(),w(C,{key:H},[a.type==="iSelect"?(l(),m(y,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[a.name=="documentType"?(l(),m(p,{key:0,value:e[a.name],"onUpdate:value":h=>e[a.name]=h,options:o},null,8,["value","onUpdate:value"])):_("",!0),a.name=="department"?(l(),m(p,{key:1,value:e[a.name],"onUpdate:value":h=>e[a.name]=h,options:g.value,onChange:A},null,8,["value","onUpdate:value","options"])):_("",!0),a.name=="province"?(l(),m(p,{key:2,value:e[a.name],"onUpdate:value":h=>e[a.name]=h,options:k.value,onChange:L},null,8,["value","onUpdate:value","options"])):_("",!0),a.name=="district"?(l(),m(p,{key:3,value:e[a.name],"onUpdate:value":h=>e[a.name]=h,options:N.value},null,8,["value","onUpdate:value","options"])):_("",!0)]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iText"?(l(),m(y,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:r(()=>[u(O,{value:e[a.name],"onUpdate:value":h=>e[a.name]=h},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):_("",!0)],64))),128))]),f("div",le,[u(V,{type:"primary","html-type":"submit",loading:I.value},{default:r(()=>[T(F(E.isIdUpdate?"Actualizar":"Registrar")+" notaría",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open","title"])}}},se=ee(oe,[["__scopeId","data-v-d3702010"]]);const re=f("h3",null,"NOTARIAS",-1),ie={class:"filters"},de=["onClick"],ue={class:"paginator"},_e={__name:"SolicitantesLista",setup(E){const S=c([]),t=c(!1),M=c(1e3),g=c(!1),k=c(0),N=c(null),q=c({page:1}),A=[{title:"Nombre",dataIndex:"firstName",fixed:"left",width:100},{title:"Departamento",dataIndex:"documentType",align:"center",width:70},{title:"Provincia",dataIndex:"documentNumber",align:"center",width:70},{title:"Distrito",dataIndex:"rucNumber",align:"center",width:70},{title:"Dirección",dataIndex:"lastNames",width:90},{title:"Tarifa normal",dataIndex:"email",align:"center",width:60},{title:"Ahorro",dataIndex:"phoneNumber",align:"center",width:60},{title:"",dataIndex:"actions",align:"center",width:30}],G=o=>{o&&e()},L=o=>{q.value.page=o,e()},R=async o=>{try{const s=await P({url:`/exponents/${o.id}`,method:"GET"});N.value=s.data,g.value=!0}catch(s){console.error("Error de red:",s),z.warning("Error de red")}},x=()=>{N.value=null,g.value=!0},I=async o=>{try{t.value=!0;const s=await P({url:`/enabled-disabled/${o}`,method:"PUT"});z.success(s.message)}catch(s){console.error("Error de red:",s)}finally{t.value=!1}},e=async()=>{try{t.value=!0;const o=await P({url:"/exponents",method:"GET",params:q.value});S.value=o.data,k.value=o.meta.total}catch(o){console.error("Error de red:",o)}finally{t.value=!1}};return j(e),(o,s)=>{const U=d("a-button"),D=d("a-tag"),i=d("a-switch"),n=d("a-menu-item"),p=d("a-menu"),y=d("a-dropdown"),O=d("a-table"),V=d("a-pagination");return l(),w(C,null,[f("div",null,[re,f("div",ie,[u(U,{type:"primary",onClick:x},{default:r(()=>[T("AGREGAR")]),_:1})]),u(O,{bordered:"",scroll:{x:M.value},class:"ant-table-striped",columns:A,"data-source":S.value,pagination:!1,loading:t.value,size:"small"},{bodyCell:r(({column:b,record:v})=>[b.dataIndex=="lastNames"?(l(),w(C,{key:0},[T(F(v.lastName)+" "+F(v.middleName),1)],64)):_("",!0),b.dataIndex=="sex"?(l(),w(C,{key:1},[v.gender=="h"?(l(),m(D,{key:0,color:"blue"},{default:r(()=>[T("Hombre")]),_:1})):(l(),m(D,{key:1,color:"pink"},{default:r(()=>[T("Mujer")]),_:1}))],64)):_("",!0),b.dataIndex=="enabled"?(l(),m(i,{key:2,checked:v.enabled,"onUpdate:checked":a=>v.enabled=a,onChange:a=>I(v.id),checkedValue:1,unCheckedValue:0},{checkedChildren:r(()=>[u($(Q))]),unCheckedChildren:r(()=>[u($(W))]),_:2},1032,["checked","onUpdate:checked","onChange"])):_("",!0),b.dataIndex=="actions"?(l(),m(y,{key:3,trigger:["click"]},{overlay:r(()=>[u(p,null,{default:r(()=>[u(n,null,{default:r(()=>[f("a",{onClick:a=>R(v)},"Editar",8,de)]),_:2},1024)]),_:2},1024)]),default:r(()=>[f("a",{class:"ant-dropdown-link",onClick:s[0]||(s[0]=Y(()=>{},["prevent"]))},[u(U,{shape:"circle",icon:Z($(ae)),size:"small"},null,8,["icon"])])]),_:2},1024)):_("",!0)]),_:1},8,["scroll","data-source","loading"])]),f("div",ue,[u(V,{size:"small",total:k.value,pageSize:20,onChange:L,showSizeChanger:!1},null,8,["total"])]),u(se,{open:g.value,onRefreshTable:G,onHandleCloseModal:s[1]||(s[1]=b=>g.value=!1),isIdUpdate:N.value},null,8,["open","isIdUpdate"])],64)}}};export{_e as default};
