import{K as me,r as n,a as ne,b as c,o,q as y,w as r,e as x,d as b,F as w,x as fe,h as z,s as l,c as u,L as _e,t as f,i as v,z as M,m as V,k as oe,J as ae,u as ve,v as he,H as ge,I as ye,M as ke,p as be,j as we}from"./index-1a628bf0.js";import{u as se}from"./selectes-dca61d51.js";import{f as Ue}from"./actualizarUsuario-3eaca126.js";import"./es-6b790cb3.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{M as xe}from"./MoreOutlined-5292b69b.js";const Ie={class:"grid-profile"},Ce="YYYY-MM-DD",Se={__name:"EditarPerfil.componente",props:["updateUser"],emits:["closeDraw"],setup(A,{emit:q}){me.locale("es");const a=se(),G=JSON.parse(localStorage.getItem("profile")),S=q;a.$patch({genders:a.genders}),a.$patch({cdes:a.cdes}),a.$patch({Offices:a.Offices}),a.$patch({roles:a.roles}),a.$patch({supervisores:a.supervisores}),a.fetchGenders(),a.fetchCdes(),a.fetchOffices(),a.fetchRoles();const I=A,C=n(!1),s=n(Ue),$=n(null),t=ne({name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:G.id}),N=i=>{i&&(t.name=i.profile.name,t.lastname=i.profile.lastname,t.middlename=i.profile.middlename,t.birthday=i.profile.birthday,t.sick=i.profile.sick,t.phone=i.profile.phone,t.gender_id=i.profile.gender_id,t.cde_id=i.profile.cde_id,t.office_id=i.profile.office_id,t.email=i.email)},p=i=>{const U={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(i===2)a.fetchSupervisores(),s.value={...s.value,supervisor_id:U};else{const{supervisor_id:D,...E}=s.value;s.value=E}},h=async()=>{C.value=!0;let i=t;delete i.email;try{const U=await M({url:`user/update/${I.updateUser.profile.id}`,method:"PUT",data:i});V.success(U.message),S("closeDraw",!0)}catch{V.error("No se pudo registrar este usuario")}finally{C.value=!1}},L=()=>{V.error("Debes de completar todos los espacios requeridos")};return(i,U)=>{const D=c("a-select"),E=c("a-form-item"),O=c("a-input"),F=c("a-date-picker"),P=c("a-button"),m=c("a-form");return o(),y(m,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:h,onFinishFailed:L},{default:r(()=>[x("div",Ie,[(o(!0),b(w,null,fe(s.value,(e,R)=>(o(),b(w,{key:R},[e.type==="iSelect"?(o(),y(E,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[e.name=="gender_id"?(o(),y(D,{key:0,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:z(a).genders},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="cde_id"?(o(),y(D,{key:1,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:z(a).cdes},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="office_id"?(o(),y(D,{key:2,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:z(a).Offices},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="role_id"?(o(),y(D,{key:3,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:z(a).roles,onChange:p},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="supervisor_id"?(o(),y(D,{key:4,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:z(a).supervisores},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iText"?(o(),y(E,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:r(()=>[u(O,{value:t[e.name],"onUpdate:value":_=>t[e.name]=_,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iDate"?(o(),y(E,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[u(F,{locale:z(_e),value:$.value,"onUpdate:value":U[0]||(U[0]=_=>$.value=_),style:{width:"100%"},format:Ce},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),x("div",null,f(N(I.updateUser)),1),u(E,null,{default:r(()=>[u(P,{class:"btn-produce",type:"primary","html-type":"submit",loading:C.value},{default:r(()=>[v("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}},De=le(Se,[["__scopeId","data-v-3578053d"]]),Ee=x("br",null,null,-1),Ae=x("br",null,null,-1),$e={__name:"DrawAdministrarVistasUsuario",props:["idUser"],emits:["closeDraw"],setup(A,{emit:q}){const a=A,G=q,S=n(!0),I=n(!1),C=["home","asesorias","asesorias-formalizaciones","solicitudes","solicitantes","notarias","asesores","supervisores","usuarios","usuarios-nuevo","usuarios-lista","drive-mis-archivos","drive-subir-archivo","drive-mis-carpetas"];oe(()=>{a.idUser&&N(a.idUser)});const s=ne({indeterminate:!0,checkAll:!1,checkedList:[]}),$=p=>{Object.assign(s,{checkedList:p.target.checked?C:[],indeterminate:!1})};ae(()=>s.checkedList,p=>{s.indeterminate=!!p.length&&p.length<C.length,s.checkAll=p.length===C.length}),ae(()=>a.idUser,p=>{p&&N()});const t=async()=>{I.value=!0;const p={views:s.checkedList};try{const h=await M({url:`user/views/${a.idUser.id}`,method:"PUT",data:p});if(h.status==403)return V.error(h.message);V.success(h.message),G("closeDraw",!0)}catch{V.error("No se pudo registrar este usuario")}finally{I.value=!1}},N=async()=>{S.value=!0;try{const{data:p}=await M({url:`user/views/${a.idUser.id}`,method:"GET"});s.checkedList=p}catch(p){console.log("Error",p)}finally{S.value=!1}};return(p,h)=>{const L=c("a-checkbox"),i=c("a-divider"),U=c("a-checkbox-group"),D=c("a-spin"),E=c("a-button");return o(),b(w,null,[x("div",null,[u(L,{checked:s.checkAll,"onUpdate:checked":h[0]||(h[0]=O=>s.checkAll=O),indeterminate:s.indeterminate,onChange:$},{default:r(()=>[v(f(s.checkAll?"Desactivar":"Activar")+" todos ",1)]),_:1},8,["checked","indeterminate"])]),u(i),u(D,{spinning:S.value},{default:r(()=>[u(U,{value:s.checkedList,"onUpdate:value":h[1]||(h[1]=O=>s.checkedList=O),options:C,style:{display:"grid","grid-template-columns":"repeat(2,1fr)",gap:".5rem"}},null,8,["value"])]),_:1},8,["spinning"]),Ee,Ae,u(E,{type:"primary","html-type":"submit",loading:I.value,onClick:t},{default:r(()=>[v("GUARDAR")]),_:1},8,["loading"])],64)}}};const ie=A=>(be("data-v-2fc7ac93"),A=A(),we(),A),Le=ie(()=>x("h3",{class:"title-produce"},"USUARIOS",-1)),Oe=ie(()=>x("br",null,null,-1)),ze=["onClick"],qe=["onClick"],Ne={class:"paginator"},te=50,Re={__name:"ListaUsuarios",setup(A){const q=se();q.$patch({cdes:q.cdes});const a=n(!1),G=m=>{console.log("open",m)},S=n(null);n(!1),n(!1),n(!1);const I=n(!1);n(0),n(!1),n(!1),n(!1),n("solicitante"),n(5);const C=n([]),s=n(!1),$=n(0);ve();const t=n({page:1});n("");const N=n("user/list");n([]),n(null);const p=n(1200),h=n(window.innerHeight-100),L=()=>{h.value=window.innerHeight-300};he(()=>{window.removeEventListener("resize",L)});const i=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:120},{title:"Correo",dataIndex:"email",width:200},{title:"Celular",dataIndex:"phone",width:100,align:"center"},{title:"Oficina",dataIndex:"office",width:120,align:"center"},{title:"CDE",dataIndex:"cde",width:140},{title:"ROL",dataIndex:"role",width:160},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],U=()=>{F(),a.value=!1,I.value=!1},D=m=>{t.value.page=m,F()},E=m=>{S.value=m,a.value=!0},O=m=>{S.value=m,I.value=!0},F=async()=>{try{s.value=!0;let m=t.value.page==1?"":t.value;const e=await M({url:N.value,method:"GET",params:m});C.value=e.data,$.value=e.total}catch(m){console.error("Error de red:",m)}finally{s.value=!1}},P=ge(()=>m=>(t.value.page-1)*te+m+1);return oe(()=>{F(),window.addEventListener("resize",L),L()}),(m,e)=>{const R=c("a-tag"),_=c("a-button"),T=c("a-menu-item"),re=c("a-menu"),de=c("a-dropdown"),ue=c("a-table"),ce=c("a-pagination"),B=c("a-drawer");return o(),b(w,null,[x("div",null,[Le,Oe,u(ue,{bordered:"",scroll:{x:p.value,y:h.value},class:"ant-table-striped",columns:i,"data-source":C.value,pagination:!1,loading:s.value,size:"small"},{bodyCell:r(({column:g,record:d,index:pe})=>{var Y,j,H,J,K,X,Q,W,Z,ee;return[g.dataIndex=="idx"?(o(),b(w,{key:0},[v(f(P.value(pe)),1)],64)):l("",!0),g.dataIndex=="lastName"?(o(),b(w,{key:1},[v(f(d.last_name)+" "+f(d.middle_name),1)],64)):l("",!0),g.dataIndex=="documentnumber"?(o(),b(w,{key:2},[v(f((Y=d.profile)==null?void 0:Y.documentnumber),1)],64)):l("",!0),g.dataIndex=="name"?(o(),b(w,{key:3},[v(f((j=d.profile)==null?void 0:j.name),1)],64)):l("",!0),g.dataIndex=="lastname"?(o(),b(w,{key:4},[v(f((H=d.profile)==null?void 0:H.lastname)+" "+f((J=d.profile)==null?void 0:J.middlename),1)],64)):l("",!0),g.dataIndex=="phone"?(o(),b(w,{key:5},[v(f((K=d.profile)==null?void 0:K.phone),1)],64)):l("",!0),g.dataIndex=="office"?(o(),b(w,{key:6},[((X=d.profile)==null?void 0:X.office.name)=="UGSE"?(o(),y(R,{key:0,color:"blue"},{default:r(()=>{var k;return[v(f((k=d.profile)==null?void 0:k.office.name),1)]}),_:2},1024)):l("",!0),((Q=d.profile)==null?void 0:Q.office.name)=="UGO"?(o(),y(R,{key:1,color:"orange"},{default:r(()=>{var k;return[v(f((k=d.profile)==null?void 0:k.office.name),1)]}),_:2},1024)):l("",!0),((W=d.profile)==null?void 0:W.office.name)=="DE"?(o(),y(R,{key:2,color:"green"},{default:r(()=>{var k;return[v(f((k=d.profile)==null?void 0:k.office.name),1)]}),_:2},1024)):l("",!0),((Z=d.profile)==null?void 0:Z.office.name)=="UGEER"?(o(),y(R,{key:3,color:"red"},{default:r(()=>{var k;return[v(f((k=d.profile)==null?void 0:k.office.name),1)]}),_:2},1024)):l("",!0)],64)):l("",!0),g.dataIndex=="cde"?(o(),b(w,{key:7},[v(f((ee=d.profile)==null?void 0:ee.cde.name),1)],64)):l("",!0),g.dataIndex=="role"?(o(),b(w,{key:8},[v(f(d.roles[0].name),1)],64)):l("",!0),g.dataIndex=="actions"?(o(),y(de,{key:9,trigger:["click"]},{overlay:r(()=>[u(re,null,{default:r(()=>[u(T,null,{default:r(()=>[x("a",{onClick:k=>E(d)},"Editar",8,ze)]),_:2},1024),u(T,null,{default:r(()=>[x("a",{onClick:k=>O(d)},"Vistas",8,qe)]),_:2},1024)]),_:2},1024)]),default:r(()=>[x("a",{class:"ant-dropdown-link",onClick:e[0]||(e[0]=ye(()=>{},["prevent"]))},[u(_,{shape:"circle",icon:ke(z(xe)),size:"small"},null,8,["icon"])])]),_:2},1024)):l("",!0)]}),_:1},8,["scroll","data-source","loading"])]),x("div",Ne,[u(ce,{size:"small",total:$.value,pageSize:te,onChange:D,showSizeChanger:!1},null,8,["total"])]),u(B,{open:a.value,"onUpdate:open":e[1]||(e[1]=g=>a.value=g),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:G},{default:r(()=>[u(De,{updateUser:S.value,onCloseDraw:U},null,8,["updateUser"])]),_:1},8,["open"]),u(B,{width:"450",open:I.value,"onUpdate:open":e[2]||(e[2]=g=>I.value=g),class:"draw-notary",title:"Administrar Vistas",placement:"right"},{default:r(()=>[u($e,{idUser:S.value,onCloseDraw:U},null,8,["idUser"])]),_:1},8,["open"])],64)}}},Be=le(Re,[["__scopeId","data-v-2fc7ac93"]]);export{Be as default};
