import{L as $,r as c,a as B,b as s,o as u,p as _,w as r,c as l,e as f,d as I,F as C,v as ae,h as S,q as m,M as te,t as A,i as k,y as P,m as G,I as ne,j as oe,J as le,P as se}from"./index-79af4362.js";import{u as re}from"./selectes-e1532de0.js";import"./es-ec42f3d3.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";import{M as de}from"./MoreOutlined-9822b1f7.js";const ue={email:{type:"iText",label:"Correo",name:"email",required:!1,email:"email",message:"Escribe el correo del usuario",disabled:!0},documentnumber:{type:"iText",label:"Número de DNI",name:"documentnumber",required:!0,message:"Número de DNI",max:8,disabled:!1},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el apellido paterno"},lastname:{type:"iText",label:"Apellido paterno",name:"lastname",required:!0,message:"Escribe el apellido paterno"},middlename:{type:"iText",label:"Apellido materno",name:"middlename",required:!0,message:"Escribe el apellido paterno"},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"año-mes-día",placeholder:"año-mes-día"},phone:{type:"iText",label:"Ingresar número celular",name:"phone",required:!0,message:"Escribe número de documento",disabled:!1,max:9},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},cde_id:{type:"iSelect",label:"CDE",name:"cde_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},office_id:{type:"iSelect",label:"Oficina",name:"office_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0}};const ce={class:"grid-profile"},me="DD/MM/YYYY",pe={__name:"DrawerEditarDatosAsesor",props:["record"],emits:["closeDraw"],setup(L,{emit:E}){$.locale("es");const t=re(),D=JSON.parse(localStorage.getItem("profile")),U=E;t.$patch({genders:t.genders}),t.$patch({cdes:t.cdes}),t.$patch({Offices:t.Offices}),t.$patch({roles:t.roles}),t.$patch({supervisores:t.supervisores}),t.fetchGenders(),t.fetchCdes(),t.fetchOffices(),t.fetchRoles();const y=L,N=c(!0),q=c(!1),g=c(ue),a=B({name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:D.id}),O=n=>{var i;n&&(a.name=n.profile_name,a.lastname=n.profile_lastname,a.middlename=n.profile_middlename,a.documentnumber=n.profile_documentnumber,a.phone=n.profile_phone,a.gender_id=n.gender_id,a.cde_id=n.cde_id,a.office_id=n.office_id,a.email=n.email,n.profile_birthday&&(a.birthday=$(n.profile_birthday,"YYYY-MM-DD"))),(i=t.genders)!=null&&i.length&&(N.value=!1)},M=n=>{const i={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(n===2)t.fetchSupervisores(),g.value={...g.value,supervisor_id:i};else{const{supervisor_id:v,...h}=g.value;g.value=h}},Y=async()=>{q.value=!0;const n={name:a.name,lastname:a.lastname,middlename:a.middlename,birthday:a.birthday?$(a.birthday).format("YYYY-MM-DD"):null,sick:a.sick,phone:a.phone,gender_id:a.gender_id,cde_id:a.cde_id,office_id:a.office_id,user_id:D.id};try{const i=await P({url:`user/update/${y.record._id}`,method:"PUT",data:n});G.success(i.message),U("closeDraw")}catch(i){console.log("NOOo",i)}finally{q.value=!1}},T=()=>{G.error("Debes de completar todos los espacios requeridos")};return(n,i)=>{const v=s("a-select"),h=s("a-form-item"),R=s("a-input"),x=s("a-date-picker"),z=s("a-button"),p=s("a-form"),o=s("a-spin");return u(),_(o,{spinning:N.value},{default:r(()=>[l(p,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:Y,onFinishFailed:T},{default:r(()=>[f("div",ce,[(u(!0),I(C,null,ae(g.value,(e,w)=>(u(),I(C,{key:w},[e.type==="iSelect"?(u(),_(h,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[e.name=="gender_id"?(u(),_(v,{key:0,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:S(t).genders},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="cde_id"?(u(),_(v,{key:1,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:S(t).cdes},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="office_id"?(u(),_(v,{key:2,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:S(t).Offices},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="role_id"?(u(),_(v,{key:3,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:S(t).roles,onChange:M},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="supervisor_id"?(u(),_(v,{key:4,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:S(t).supervisores},null,8,["value","onUpdate:value","options"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iText"?(u(),_(h,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:r(()=>[l(R,{value:a[e.name],"onUpdate:value":d=>a[e.name]=d,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iDate"?(u(),_(h,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[l(x,{locale:S(te),value:a[e.name],"onUpdate:value":d=>a[e.name]=d,style:{width:"100%"},format:me,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),f("div",null,A(O(y.record)),1),l(h,null,{default:r(()=>[l(z,{class:"btn-produce",type:"primary","html-type":"submit",loading:q.value},{default:r(()=>i[0]||(i[0]=[k("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},_e=ie(pe,[["__scopeId","data-v-f5cfd002"]]);const fe=["onClick"],ge={class:"paginator"},Se={__name:"AsesoresLista",setup(L){const E=c(50),t=c([]),D=c(!1),U=c(0),y=c({page:1}),N=c("user/list-asesories"),q=c(1200),g=c(window.innerHeight-100),a=c(!1),O=c(null),M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Nombres",dataIndex:"profile_name",width:120},{title:"Apellidos",dataIndex:"lastname",width:160},{title:"Num. DNI",dataIndex:"profile_documentnumber",width:100,align:"center"},{title:"Celular",dataIndex:"profile_phone",width:100,align:"center"},{title:"CDE",dataIndex:"cde_name",width:160},{title:"Fecha Nac.",dataIndex:"profile_birthday",width:100,align:"center"},{title:"Género",dataIndex:"gender",width:120,align:"center"},{title:"Oficina",dataIndex:"office_name",width:100,align:"center"},{title:"ROL",dataIndex:"role",width:100,align:"center"},{title:"CUENTA",dataIndex:"email",width:180},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],Y=()=>{g.value=window.innerHeight-300},T=p=>{a.value=!0,O.value=p},n=()=>{a.value=!1,x()},i=B({search:""}),v=()=>{x({search:i.search})},h=()=>{i.search||x()},R=p=>{y.value.page=p,x()},x=async p=>{try{D.value=!0;const o=y.value.page===1?"":y.value,e=p?{...o,...p}:o,w=await P({url:N.value,method:"GET",params:e});t.value=w.data,U.value=w.total,E.value=w.per_page}catch(o){console.error("Error de red:",o)}finally{D.value=!1}},z=ne(()=>p=>(y.value.page-1)*E.value+p+1);return oe(()=>{x(),window.addEventListener("resize",Y),Y()}),(p,o)=>{const e=s("a-col"),w=s("a-input"),d=s("a-button"),V=s("a-input-group"),j=s("a-row"),H=s("a-menu-item"),J=s("a-menu"),X=s("a-dropdown"),K=s("a-table"),Q=s("a-tag"),W=s("a-pagination"),Z=s("a-drawer");return u(),I(C,null,[f("div",null,[o[4]||(o[4]=f("h3",{class:"title-produce"},"ASESORES DEL PROGRAMA",-1)),l(j,{style:{margin:"1rem 0"}},{default:r(()=>[l(e,{xs:24,md:12,lg:18}),l(e,{xs:24,md:12,lg:6},{default:r(()=>[l(V,{compact:""},{default:r(()=>[l(w,{value:i.search,"onUpdate:value":o[0]||(o[0]=b=>i.search=b),style:{width:"calc(100% - 80px)"},onInput:h},null,8,["value"]),l(d,{type:"primary",disabled:i.search==="",onClick:v},{default:r(()=>o[3]||(o[3]=[k("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),l(K,{bordered:"",scroll:{x:q.value,y:g.value},class:"table-users",columns:M,"data-source":t.value,pagination:!1,loading:D.value,size:"small"},{bodyCell:r(({column:b,record:F,index:ee})=>[b.dataIndex==="idx"?(u(),I(C,{key:0},[k(A(z.value(ee)),1)],64)):m("",!0),b.dataIndex==="lastname"?(u(),I(C,{key:1},[k(A(F.profile_lastname)+" "+A(F.profile_middlename),1)],64)):m("",!0),b.dataIndex==="role"?(u(),I(C,{key:2},[k(" Asesor ")],64)):m("",!0),b.dataIndex=="actions"?(u(),_(X,{key:3,trigger:["click"]},{overlay:r(()=>[l(J,null,{default:r(()=>[l(H,null,{default:r(()=>[f("a",{onClick:ve=>T(F)},"Editar",8,fe)]),_:2},1024)]),_:2},1024)]),default:r(()=>[f("a",{class:"ant-dropdown-link",onClick:o[1]||(o[1]=le(()=>{},["prevent"]))},[l(d,{shape:"circle",icon:se(S(de)),size:"small"},null,8,["icon"])])]),_:2},1024)):m("",!0)]),_:1},8,["scroll","data-source","loading"])]),f("div",ge,[f("span",null,[l(Q,{color:"blue"},{default:r(()=>[f("b",null,A(U.value),1)]),_:1}),o[5]||(o[5]=k("Usuarios"))]),l(W,{size:"small",total:U.value,pageSize:E.value,onChange:R,showSizeChanger:!1},null,8,["total","pageSize"])]),l(Z,{width:"550",open:a.value,"onUpdate:open":o[2]||(o[2]=b=>a.value=b),class:"draw",title:"Editar datos del asesor",placement:"right"},{default:r(()=>[l(_e,{onCloseDraw:n,record:O.value},null,8,["record"])]),_:1},8,["open"])],64)}}};export{Se as default};
