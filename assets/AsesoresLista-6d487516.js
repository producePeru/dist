import{B as H,r as u,a as j,b as s,o as i,p as _,w as n,c as o,e as v,d as A,F as q,x as de,h as D,q as c,D as ue,t as N,i as g,J,m as K,T as ce,j as me,H as pe,I as _e,G as fe}from"./index-4571068f.js";import{u as ve}from"./selectes-a9c482bc.js";import"./es-c6afac90.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";import{M as he}from"./MoreOutlined-3fd13fd9.js";const be={email:{type:"iText",label:"Correo",name:"email",required:!1,email:"email",message:"Escribe el correo del usuario",disabled:!0},documentnumber:{type:"iText",label:"Número de DNI",name:"documentnumber",required:!0,message:"Número de DNI",max:8,disabled:!1},name:{type:"iText",label:"Nombres",name:"name",required:!0,message:"Escribe el apellido paterno"},lastname:{type:"iText",label:"Apellido paterno",name:"lastname",required:!0,message:"Escribe el apellido paterno"},middlename:{type:"iText",label:"Apellido materno",name:"middlename",required:!0,message:"Escribe el apellido paterno"},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!1,message:"año-mes-día",placeholder:"año-mes-día"},phone:{type:"iText",label:"Ingresar número celular",name:"phone",required:!0,message:"Escribe número de documento",disabled:!1,max:9},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},cde_id:{type:"iSelect",label:"CDE",name:"cde_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0},office_id:{type:"iSelect",label:"Oficina",name:"office_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0}};const ye={class:"grid-profile"},we="DD/MM/YYYY",xe={__name:"DrawerEditarDatosAsesor",props:["record"],emits:["closeDraw"],setup(X,{emit:O}){H.locale("es");const l=ve(),C=JSON.parse(localStorage.getItem("profile")),R=O;l.$patch({genders:l.genders}),l.$patch({cdes:l.cdes}),l.$patch({Offices:l.Offices}),l.$patch({roles:l.roles}),l.$patch({supervisores:l.supervisores}),l.fetchGenders(),l.fetchCdes(),l.fetchOffices(),l.fetchRoles();const w=X,T=u(!0),F=u(!1),h=u(be),e=j({name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:C.id}),E=r=>{var p;r&&(e.name=r.profile_name,e.lastname=r.profile_lastname,e.middlename=r.profile_middlename,e.documentnumber=r.profile_documentnumber,e.phone=r.profile_phone,e.gender_id=r.gender_id,e.cde_id=r.cde_id,e.office_id=r.office_id,e.email=r.email,r.profile_birthday&&(e.birthday=H(r.profile_birthday,"YYYY-MM-DD"))),(p=l.genders)!=null&&p.length&&(T.value=!1)},Y=r=>{const p={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(r===2)l.fetchSupervisores(),h.value={...h.value,supervisor_id:p};else{const{supervisor_id:b,...y}=h.value;h.value=y}},M=async()=>{F.value=!0;const r={name:e.name,lastname:e.lastname,middlename:e.middlename,birthday:e.birthday?H(e.birthday).format("YYYY-MM-DD"):null,sick:e.sick,phone:e.phone,gender_id:e.gender_id,cde_id:e.cde_id,office_id:e.office_id,user_id:C.id};try{const p=await J({url:`user/update/${w.record._id}`,method:"PUT",data:r});K.success(p.message),R("closeDraw")}catch(p){console.log("NOOo",p)}finally{F.value=!1}},P=()=>{K.error("Debes de completar todos los espacios requeridos")};return(r,p)=>{const b=s("a-select"),y=s("a-form-item"),x=s("a-input"),S=s("a-date-picker"),B=s("a-button"),L=s("a-form"),G=s("a-spin");return i(),_(G,{spinning:T.value},{default:n(()=>[o(L,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:M,onFinishFailed:P},{default:n(()=>[v("div",ye,[(i(!0),A(q,null,de(h.value,(a,I)=>(i(),A(q,{key:I},[a.type==="iSelect"?(i(),_(y,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:n(()=>[a.name=="gender_id"?(i(),_(b,{key:0,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:D(l).genders},null,8,["value","onUpdate:value","options"])):c("",!0),a.name=="cde_id"?(i(),_(b,{key:1,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:D(l).cdes},null,8,["value","onUpdate:value","options"])):c("",!0),a.name=="office_id"?(i(),_(b,{key:2,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:D(l).Offices},null,8,["value","onUpdate:value","options"])):c("",!0),a.name=="role_id"?(i(),_(b,{key:3,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:D(l).roles,onChange:Y},null,8,["value","onUpdate:value","options"])):c("",!0),a.name=="supervisor_id"?(i(),_(b,{key:4,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:D(l).supervisores},null,8,["value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),a.type==="iText"?(i(),_(y,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:n(()=>[o(x,{value:e[a.name],"onUpdate:value":d=>e[a.name]=d,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):c("",!0),a.type==="iDate"?(i(),_(y,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:n(()=>[o(S,{locale:D(ue),value:e[a.name],"onUpdate:value":d=>e[a.name]=d,style:{width:"100%"},format:we,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),v("div",null,N(E(w.record)),1),o(y,null,{default:n(()=>[o(B,{class:"btn-produce",type:"primary","html-type":"submit",loading:F.value},{default:n(()=>p[0]||(p[0]=[g("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},Se=ge(xe,[["__scopeId","data-v-f5cfd002"]]);const Ie=["onClick"],ke=["onClick"],De={class:"paginator"},Oe={__name:"AsesoresLista",setup(X){const O=u(50),l=u([]),C=u(!1),R=u(0),w=u({page:1}),T=u("user/list-asesories"),F=u(1200),h=u(window.innerHeight-100),e=u(!1),E=u(!1),Y=u(null),M=u(null),P=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"NOMBRES",dataIndex:"profile_name",width:160},{title:"APELLIDOS",dataIndex:"lastname",width:160},{title:"DNI",dataIndex:"profile_documentnumber",width:100,align:"center"},{title:"CELULAR",dataIndex:"profile_phone",width:100,align:"center"},{title:"CDE",dataIndex:"cde_name",width:160},{title:"FECHA NAC.",dataIndex:"profile_birthday",width:100,align:"center"},{title:"GÉNERO",dataIndex:"gender",width:120,align:"center"},{title:"OFICINA",dataIndex:"office_name",width:100,align:"center"},{title:"ROL",dataIndex:"role",width:140,align:"center"},{title:"CUENTA",dataIndex:"email",width:180},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],r=()=>{h.value=window.innerHeight-300},p=m=>{e.value=!0,Y.value=m},b=m=>{E.value=!0,M.value=m},y=()=>{e.value=!1,I()},x=j({search:""}),S=j({password:""}),B=async()=>{const m={id:M.value.user_id,password:S.password};try{const t=await J({url:"user/update-password",method:"POST",data:m});t.status===200&&(K.success(t.message),S.password=null,E.value=!1)}catch(t){console.error("Failed to update record",t)}},L=()=>{I({search:x.search})},G=()=>{x.search||I()},a=m=>{w.value.page=m,I()},I=async m=>{try{C.value=!0;const t=w.value.page===1?"":w.value,$=m?{...t,...m}:t,U=await J({url:T.value,method:"GET",params:$});l.value=U.data,R.value=U.total,O.value=U.per_page}catch(t){console.error("Error de red:",t)}finally{C.value=!1}},d=ce(()=>m=>(w.value.page-1)*O.value+m+1);return me(()=>{I(),window.addEventListener("resize",r),r()}),(m,t)=>{const $=s("a-col"),U=s("a-input"),V=s("a-button"),ee=s("a-input-group"),ae=s("a-row"),z=s("a-tag"),Q=s("a-menu-item"),te=s("a-menu"),ne=s("a-dropdown"),oe=s("a-table"),le=s("a-pagination"),W=s("a-drawer"),Z=s("a-form-item"),se=s("a-form");return i(),A(q,null,[v("div",null,[t[9]||(t[9]=v("h3",{class:"title-produce"},"LISTA DE USUARIOS - UGO",-1)),o(ae,{style:{margin:"1rem 0"}},{default:n(()=>[o($,{xs:24,md:12,lg:18}),o($,{xs:24,md:12,lg:6},{default:n(()=>[o(ee,{compact:""},{default:n(()=>[o(U,{value:x.search,"onUpdate:value":t[0]||(t[0]=f=>x.search=f),style:{width:"calc(100% - 80px)"},onInput:G,onKeyup:pe(L,["enter"])},null,8,["value"]),o(V,{type:"primary",disabled:x.search==="",onClick:L},{default:n(()=>t[5]||(t[5]=[g("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),o(oe,{bordered:"",scroll:{x:F.value,y:h.value},class:"table-users",columns:P,"data-source":l.value,pagination:!1,loading:C.value,size:"small"},{bodyCell:n(({column:f,record:k,index:re})=>[f.dataIndex==="idx"?(i(),A(q,{key:0},[g(N(d.value(re)),1)],64)):c("",!0),f.dataIndex==="lastname"?(i(),A(q,{key:1},[g(N(k.profile_lastname)+" "+N(k.profile_middlename),1)],64)):c("",!0),f.dataIndex==="role"?(i(),A(q,{key:2},[k.role_user==1?(i(),_(z,{key:0,color:"blue"},{default:n(()=>t[6]||(t[6]=[g("SUPERVISOR")])),_:1})):c("",!0),k.role_user==2?(i(),_(z,{key:1,color:"red"},{default:n(()=>t[7]||(t[7]=[g("ASESOR PNTE")])),_:1})):c("",!0),k.role_user==7?(i(),_(z,{key:2,color:"purple"},{default:n(()=>t[8]||(t[8]=[g("ASESOR - NOTARÍA")])),_:1})):c("",!0)],64)):c("",!0),f.dataIndex=="actions"?(i(),_(ne,{key:3,trigger:["click"]},{overlay:n(()=>[o(te,null,{default:n(()=>[o(Q,null,{default:n(()=>[v("a",{onClick:ie=>p(k)},"Editar datos",8,Ie)]),_:2},1024),o(Q,null,{default:n(()=>[v("a",{onClick:ie=>b(k)},"Resetear contraseña",8,ke)]),_:2},1024)]),_:2},1024)]),default:n(()=>[v("a",{class:"ant-dropdown-link",onClick:t[1]||(t[1]=_e(()=>{},["prevent"]))},[o(V,{shape:"circle",icon:fe(D(he)),size:"small"},null,8,["icon"])])]),_:2},1024)):c("",!0)]),_:1},8,["scroll","data-source","loading"])]),v("div",De,[v("span",null,[o(z,{color:"blue"},{default:n(()=>[v("b",null,N(R.value),1)]),_:1}),t[10]||(t[10]=g("Usuarios"))]),o(le,{size:"small",total:R.value,pageSize:O.value,onChange:a,showSizeChanger:!1},null,8,["total","pageSize"])]),o(W,{width:"550",open:e.value,"onUpdate:open":t[2]||(t[2]=f=>e.value=f),class:"draw",title:"Editar datos del asesor",placement:"right"},{default:n(()=>[o(Se,{onCloseDraw:y,record:Y.value},null,8,["record"])]),_:1},8,["open"]),o(W,{width:"350",open:E.value,"onUpdate:open":t[4]||(t[4]=f=>E.value=f),class:"draw",title:"Cambiar contraseña",placement:"right"},{default:n(()=>[o(se,{layout:"vertical",model:S,name:"basic",autocomplete:"off",onFinish:B,onFinishFailed:m.onFinishFailed},{default:n(()=>[o(Z,{label:"Contraseña",name:"password",rules:[{required:!0,message:"Escribir contraseña"}]},{default:n(()=>[o(U,{value:S.password,"onUpdate:value":t[3]||(t[3]=f=>S.password=f)},null,8,["value"])]),_:1}),o(Z,null,{default:n(()=>[o(V,{type:"primary","html-type":"submit"},{default:n(()=>t[11]||(t[11]=[g("CAMBIAR")])),_:1})]),_:1})]),_:1},8,["model","onFinishFailed"])]),_:1},8,["open"])],64)}}};export{Oe as default};
