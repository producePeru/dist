import{B as K,r as p,f as L,a as X,N as J,n as H,b as c,o,z as f,w as u,c as m,e as x,d as U,v as Q,F as k,s as _,i as A,j as w,t as C,h as G,m as z,K as W,L as Y,G as Z,M as ee}from"./index-b4c6ca84.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{M as te}from"./MoreOutlined-ed5a29f6.js";const ne={document_type:{type:"iSelect",label:"Tipo de documento",name:"document_type",required:!0,message:"Seleccionar tipo de documento"},number_document:{type:"iText",label:"Número de documento",name:"number_document",required:!0,message:"Error en el tipo de documento"},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el nombre"},last_name:{type:"iText",label:"Apellido Paterno",name:"last_name",required:!0,message:"Escribe el apellidos"},middle_name:{type:"iText",label:"Apellido Materno",name:"middle_name",required:!0,message:"Escribe el apellidos"},department:{type:"iSelect",label:"Departamento",name:"department",required:!1,message:"Seleccionar un tipo"},province:{type:"iSelect",label:"Provincia",name:"province",required:!1,message:"Seleccionar un tipo"},district:{type:"iSelect",label:"Distrito",name:"district",required:!1,message:"Seleccionar un tipo"},email:{type:"iText",label:"Correo",name:"email",required:!1,email:"email",message:"Escribe el correo del usuario"},phone:{type:"iText",label:"Num. Celular",name:"phone",required:!1,message:"Escribe el celular del usuario",max:9}};const le={class:"grid-item"},oe={class:"wrapper-form_btn"},se={__name:"ModalSupervisor",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(R,{emit:N}){const n=R,M=N;K(()=>{n.isIdUpdate?(e.document_type=n.isIdUpdate.document_type,e.number_document=n.isIdUpdate.number_document,e.name=n.isIdUpdate.name,e.last_name=n.isIdUpdate.last_name,e.middle_name=n.isIdUpdate.middle_name,e.department=n.isIdUpdate.department,D(n.isIdUpdate.department),e.province=n.isIdUpdate.province,$(n.isIdUpdate.province),e.district=n.isIdUpdate.district,e.email=n.isIdUpdate.email,e.phone=n.isIdUpdate.phone):T()});const g=p([]),I=p([]),h=p([]),P=async()=>{try{const{data:d}=await L({url:"/departaments",method:"GET"});let t=d.map(l=>({label:l.label,value:l.id}));g.value=[...g.value,...t]}catch(d){console.log(d)}},V=(d,t)=>{e.province=null,e.district=null,I.value=[],h.value=[],D(t.value)},D=async d=>{try{const{data:t}=await L({url:`/province/${d}`,method:"GET"});let l=t.map(i=>({label:i.label,value:i.id}));I.value=[...I.value,...l]}catch(t){console.log(t)}},O=(d,t)=>{e.district=null,h.value=[],$(t.value)},$=async d=>{try{const{data:t}=await L({url:`/district/${d}`,method:"GET"});let l=t.map(i=>({label:i.label,value:i.id}));h.value=[...h.value,...l]}catch(t){console.log(t)}},S=p(!0),E=p(!1),e=X({document_type:null,number_document:null,last_name:null,middle_name:null,name:null,department:null,province:null,district:null,email:null,phone:null,created_by:J}),s=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],r=()=>{M("handleCloseModal",!0),S.value=!1},T=()=>{e.document_type=null,e.number_document=null,e.last_name=null,e.middle_name=null,e.name=null,e.department=null,e.province=null,e.district=null,e.email=null,e.phone=null},B=async()=>{const d=e;E.value=!0;let t,l;n.isIdUpdate?(t=`/supervisors/${n.isIdUpdate.id}`,l="PUT"):(t="/supervisors",l="POST");try{const i=await G({url:t,method:l,data:d});T(),M("refreshTable",!0),z.success(i.message),r()}catch{z.error("No se pudo registrar al exponente")}finally{E.value=!1}};return H(P),(d,t)=>{const l=c("a-select"),i=c("a-form-item"),F=c("a-input"),y=c("a-button"),v=c("a-form"),q=c("a-modal");return o(),f(q,{open:S.value,"onUpdate:open":t[0]||(t[0]=a=>S.value=a),title:"Agregar Supervisor",style:{top:"40px"},footer:"",onCancel:r,width:"700px"},{default:u(()=>[m(v,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:B},{default:u(()=>[x("div",le,[(o(!0),U(k,null,Q(A(ne),(a,j)=>(o(),U(k,{key:j},[a.type==="iSelect"?(o(),f(i,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[a.name=="document_type"?(o(),f(l,{key:0,value:e[a.name],"onUpdate:value":b=>e[a.name]=b,options:s},null,8,["value","onUpdate:value"])):_("",!0),a.name=="department"?(o(),f(l,{key:1,value:e[a.name],"onUpdate:value":b=>e[a.name]=b,options:g.value,onChange:V},null,8,["value","onUpdate:value","options"])):_("",!0),a.name=="province"?(o(),f(l,{key:2,value:e[a.name],"onUpdate:value":b=>e[a.name]=b,options:I.value,onChange:O},null,8,["value","onUpdate:value","options"])):_("",!0),a.name=="district"?(o(),f(l,{key:3,value:e[a.name],"onUpdate:value":b=>e[a.name]=b,options:h.value},null,8,["value","onUpdate:value","options"])):_("",!0)]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iText"?(o(),f(i,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:u(()=>[m(F,{value:e[a.name],"onUpdate:value":b=>e[a.name]=b},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):_("",!0)],64))),128))]),x("div",oe,[m(y,{type:"primary","html-type":"submit",loading:E.value},{default:u(()=>[w(C(R.isIdUpdate?"Actualizar":"Registrar")+" supervisor",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open"])}}},re=ae(se,[["__scopeId","data-v-d6f869d4"]]);const de=x("h3",null,"SUPERVISORES",-1),ie={class:"filters"},ue=["onClick"],ce={class:"paginator"},ve={__name:"SupervisoresLista",setup(R){const N=p([]),n=p(!1),M=p(1e3),g=p(!1),I=p(0),h=p(null),P=p({page:1}),V=[{title:"Apellidos",dataIndex:"lastName",fixed:"left",width:150},{title:"Nombres",dataIndex:"name",fixed:"left",width:120},{title:"Tipo documento",dataIndex:"document_type",align:"center",width:100},{title:"Num. documento",dataIndex:"number_document",align:"center",width:120},{title:"Departamento",dataIndex:"departament",align:"center",width:120},{title:"Provincia",dataIndex:"province",align:"center",width:120},{title:"Distrito",dataIndex:"distrite",align:"center",width:120},{title:"Correo",dataIndex:"email",width:160},{title:"Celular",dataIndex:"phone",width:90},{title:"Habilitado",dataIndex:"enabled",align:"center",width:90},{title:"",dataIndex:"actions",align:"center",width:50}],D=s=>{s&&e()},O=s=>{P.value.page=s,e()},$=async s=>{try{const r=await G({url:`/supervisors/${s.id}`,method:"GET"});h.value=r.data,g.value=!0}catch(r){console.error("Error de red:",r),z.warning("Error de red")}},S=()=>{h.value=null,g.value=!0},E=async s=>{try{n.value=!0;const r=await G({url:`/enabled-disabled/${s}`,method:"PUT"});z.success(r.message)}catch(r){console.error("Error de red:",r)}finally{n.value=!1}},e=async()=>{try{n.value=!0;const s=await G({url:"/supervisors",method:"GET",params:P.value});N.value=s.data,I.value=s.total}catch(s){console.error("Error de red:",s)}finally{n.value=!1}};return H(e),(s,r)=>{const T=c("a-button"),B=c("a-switch"),d=c("a-menu-item"),t=c("a-menu"),l=c("a-dropdown"),i=c("a-table"),F=c("a-pagination");return o(),U(k,null,[x("div",null,[de,x("div",ie,[m(T,{type:"primary",onClick:S},{default:u(()=>[w("AGREGAR")]),_:1})]),m(i,{bordered:"",scroll:{x:M.value},class:"ant-table-striped",columns:V,"data-source":N.value,pagination:!1,loading:n.value,size:"small"},{bodyCell:u(({column:y,record:v})=>[y.dataIndex=="lastName"?(o(),U(k,{key:0},[w(C(v.last_name)+" "+C(v.middle_name),1)],64)):_("",!0),y.dataIndex=="departament"?(o(),U(k,{key:1},[w(C(v.departament.descripcion),1)],64)):_("",!0),y.dataIndex=="province"?(o(),U(k,{key:2},[w(C(v.province.descripcion),1)],64)):_("",!0),y.dataIndex=="distrite"?(o(),U(k,{key:3},[w(C(v.district.descripcion),1)],64)):_("",!0),y.dataIndex=="enabled"?(o(),f(B,{key:4,checked:v.status,"onUpdate:checked":q=>v.status=q,onChange:q=>E(v.id),checkedValue:1,unCheckedValue:0},{checkedChildren:u(()=>[m(A(W))]),unCheckedChildren:u(()=>[m(A(Y))]),_:2},1032,["checked","onUpdate:checked","onChange"])):_("",!0),y.dataIndex=="actions"?(o(),f(l,{key:5,trigger:["click"]},{overlay:u(()=>[m(t,null,{default:u(()=>[m(d,null,{default:u(()=>[x("a",{onClick:q=>$(v)},"Editar",8,ue)]),_:2},1024)]),_:2},1024)]),default:u(()=>[x("a",{class:"ant-dropdown-link",onClick:r[0]||(r[0]=Z(()=>{},["prevent"]))},[m(T,{shape:"circle",icon:ee(A(te)),size:"small"},null,8,["icon"])])]),_:2},1024)):_("",!0)]),_:1},8,["scroll","data-source","loading"])]),x("div",ce,[m(F,{size:"small",total:I.value,pageSize:20,onChange:O,showSizeChanger:!1},null,8,["total"])]),m(re,{open:g.value,onRefreshTable:D,onHandleCloseModal:r[1]||(r[1]=y=>g.value=!1),isIdUpdate:h.value},null,8,["open","isIdUpdate"])],64)}}};export{ve as default};