import{z as ye,r as g,a as j,b as c,o as l,p as b,w as s,e as x,d as w,F as k,v as Ue,h as R,q as r,c as i,B as we,t as h,i as f,I as T,m as G,j as pe,T as ce,S as ke,H as xe,E as Ce}from"./index-08d187e2.js";import{f as Ae}from"./actualizarUsuario-3eaca126.js";import{u as Ie}from"./selectes-c8cb3b68.js";import"./es-91d4c0fb.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";import{M as De}from"./MoreOutlined-42b858e3.js";const Ee={class:"grid-profile"},Pe="YYYY-MM-DD",Fe={__name:"EditarPerfil.componente",props:["updateUser"],emits:["closeDraw"],setup(q,{emit:E}){ye.locale("es");const a=Ie(),P=JSON.parse(localStorage.getItem("profile")),A=E;a.$patch({genders:a.genders}),a.$patch({cdes:a.cdes}),a.$patch({Offices:a.Offices}),a.$patch({roles:a.roles}),a.$patch({supervisores:a.supervisores}),a.fetchGenders(),a.fetchCdes(),a.fetchOffices(),a.fetchRoles();const I=q,C=g(!1),m=g(Ae),S=g(null),t=j({name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:P.id}),v=o=>{o&&(t.name=o.profile.name,t.lastname=o.profile.lastname,t.middlename=o.profile.middlename,t.birthday=o.profile.birthday,t.sick=o.profile.sick,t.phone=o.profile.phone,t.gender_id=o.profile.gender_id,t.cde_id=o.profile.cde_id,t.office_id=o.profile.office_id,t.email=o.email)},p=o=>{const y={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(o===2)a.fetchSupervisores(),m.value={...m.value,supervisor_id:y};else{const{supervisor_id:F,...D}=m.value;m.value=D}},$=async()=>{C.value=!0;let o=t;delete o.email;try{const y=await T({url:`user/update/${I.updateUser.profile.id}`,method:"PUT",data:o});G.success(y.message),A("closeDraw",!0)}catch{G.error("No se pudo registrar este usuario")}finally{C.value=!1}},L=()=>{G.error("Debes de completar todos los espacios requeridos")};return(o,y)=>{const F=c("a-select"),D=c("a-form-item"),M=c("a-input"),B=c("a-date-picker"),Y=c("a-button"),O=c("a-form");return l(),b(O,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:$,onFinishFailed:L},{default:s(()=>[x("div",Ee,[(l(!0),w(k,null,Ue(m.value,(e,H)=>(l(),w(k,{key:H},[e.type==="iSelect"?(l(),b(D,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[e.name=="gender_id"?(l(),b(F,{key:0,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:R(a).genders},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="cde_id"?(l(),b(F,{key:1,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:R(a).cdes},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="office_id"?(l(),b(F,{key:2,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:R(a).Offices},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="role_id"?(l(),b(F,{key:3,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:R(a).roles,onChange:p},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="supervisor_id"?(l(),b(F,{key:4,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:R(a).supervisores},null,8,["value","onUpdate:value","options"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iText"?(l(),b(D,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:s(()=>[i(M,{value:t[e.name],"onUpdate:value":n=>t[e.name]=n,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iDate"?(l(),b(D,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[i(B,{locale:R(we),value:S.value,"onUpdate:value":y[0]||(y[0]=n=>S.value=n),style:{width:"100%"},format:Pe},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),x("div",null,h(v(I.updateUser)),1),i(D,null,{default:s(()=>[i(Y,{class:"btn-produce",type:"primary","html-type":"submit",loading:C.value},{default:s(()=>y[1]||(y[1]=[f("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}},Oe=Se(Fe,[["__scopeId","data-v-3578053d"]]);const Re={__name:"DrawAdministrarVistasUsuario",props:["idUser"],emits:["closeDraw"],setup(q,{emit:E}){const a=q,P=E,A=g(!0),I=g(!1),C=[{label:"Inicio",value:"inicio"},{label:"Drive Principal",value:"drive"},{label:"Drive Carpetas",value:"drive-mis-carpetas"},{label:"Drive Archivos",value:"drive-mis-archivos"},{label:"Drive Subir Archivo",value:"drive-subir-archivo"},{label:"AF - Principal",value:"asesorias"},{label:"AF - Registro",value:"asesorias-formalizaciones"},{label:"AF - Reportes",value:"asesorias"},{label:"AF - Planes de Acción",value:"planes-accion"},{label:"AF - Solicitantes",value:"solicitantes"},{label:"AF - Notarias",value:"notarias"},{label:"AF - Asesores",value:"asesores"},{label:"Convenios Principal",value:"convenios"},{label:"Convenios UGO",value:"estado-convenio-ugo"},{label:"Convenios UGSE",value:"estado-convenio-ugse"},{label:"Ferias Principal",value:"ferias"},{label:"Ferias Empresariales",value:"ferias-empresariales"},{label:"Ferias Participantes",value:"ferias-inscritos"},{label:"Asistencias Principal",value:"asistencia"},{label:"Asistencias UGO Listas",value:"asistencia-lista"},{label:"Asistencias UGO Usuarios",value:"asistencia-inscritos"},{label:"Calendario Principal",value:"calendario"},{label:"Eventos Lista",value:"eventos-calendario-google"},{label:"Calendario - Reserva de sala",value:"calendario-salas"},{label:"Usuarios Principal",value:"usuarios"},{label:"Usuarios Registrar",value:"usuarios-nuevo"},{label:"Usuarios - Notarios",value:"asesor-externo-notario"},{label:"Usuarios Lista",value:"usuarios-lista"},{label:"Creación de usuarios",value:"nuevo-registro"},{label:"Config. Principal",value:"configuraciones"},{label:"Config. Token API",value:"tokens"}];pe(()=>{a.idUser&&t(a.idUser)});const m=j({indeterminate:!0,checkAll:!1,checkedList:[]});ce(()=>m.checkedList,v=>{m.indeterminate=!!v.length&&v.length<C.length,m.checkAll=v.length===C.length}),ce(()=>a.idUser,v=>{v&&t()});const S=async()=>{I.value=!0;const v={views:m.checkedList};try{const p=await T({url:`user/views/${a.idUser.id}`,method:"PUT",data:v});if(p.status==403)return G.error(p.message);G.success(p.message),P("closeDraw",!0)}catch{G.error("No se pudo registrar este usuario")}finally{I.value=!1}},t=async()=>{A.value=!0;try{const{data:v}=await T({url:`user/views/${a.idUser.id}`,method:"GET"});m.checkedList=v}catch(v){console.log("Error",v)}finally{A.value=!1}};return(v,p)=>{const $=c("a-checkbox-group"),L=c("a-spin"),o=c("a-button");return l(),w(k,null,[i(L,{spinning:A.value},{default:s(()=>[i($,{value:m.checkedList,"onUpdate:value":p[0]||(p[0]=y=>m.checkedList=y),options:C,class:"views-list"},null,8,["value"])]),_:1},8,["spinning"]),p[2]||(p[2]=x("br",null,null,-1)),p[3]||(p[3]=x("br",null,null,-1)),i(o,{type:"primary","html-type":"submit",loading:I.value,onClick:S},{default:s(()=>p[1]||(p[1]=[f("GUARDAR")])),_:1},8,["loading"])],64)}}};const Le=["onClick"],Ne=["onClick"],Ge={class:"paginator"},Be={__name:"ListaUsuarios",setup(q){const E=g(null),a=g(!1),P=g(!1),A=g(50),I=g([]),C=g(!1),m=g(0),S=g({page:1}),t=g("user/list"),v=g(1200),p=g(window.innerHeight-100),$=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",width:80},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:120},{title:"Correo",dataIndex:"email",width:200},{title:"Celular",dataIndex:"phone",width:100,align:"center"},{title:"Fecha Nac.",dataIndex:"birthday",width:100,align:"center"},{title:"Oficina",dataIndex:"office",width:120,align:"center"},{title:"CDE",dataIndex:"cde",width:140},{title:"ROL",dataIndex:"role",width:160},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],L=()=>{p.value=window.innerHeight-300},o=j({search:""}),y=()=>{let n={search:o.search};O(n)},F=()=>{o.search||O()},D=()=>{O(),a.value=!1,P.value=!1},M=n=>{S.value.page=n,O()},B=n=>{E.value=n,a.value=!0},Y=n=>{E.value=n,P.value=!0},O=async n=>{try{C.value=!0;const u=S.value.page===1?"":S.value,V=n?{...u,...n}:u,{data:z}=await T({url:t.value,method:"GET",params:V});I.value=z.data,m.value=z.total,A.value=z.per_page}catch(u){console.error("Error de red:",u)}finally{C.value=!1}},e=ke(()=>n=>(S.value.page-1)*A.value+n+1);pe(()=>{O(),window.addEventListener("resize",L),L()});const H=()=>{console.log("Drawer state changed")};return(n,u)=>{const V=c("a-col"),z=c("a-input"),J=c("a-button"),me=c("a-input-group"),fe=c("a-row"),N=c("a-tag"),X=c("a-menu-item"),ve=c("a-menu"),_e=c("a-dropdown"),ge=c("a-table"),he=c("a-pagination"),K=c("a-drawer");return l(),w(k,null,[x("div",null,[u[6]||(u[6]=x("h3",{class:"title-produce"},"USUARIOS DEL PROGRAMA PNTE",-1)),i(fe,{style:{margin:"1rem 0"}},{default:s(()=>[i(V,{xs:24,md:12,lg:18}),i(V,{xs:24,md:12,lg:6},{default:s(()=>[i(me,{compact:""},{default:s(()=>[i(z,{value:o.search,"onUpdate:value":u[0]||(u[0]=_=>o.search=_),style:{width:"calc(100% - 80px)"},onInput:F},null,8,["value"]),i(J,{type:"primary",disabled:o.search==="",onClick:y},{default:s(()=>u[4]||(u[4]=[f("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),i(ge,{bordered:"",scroll:{x:v.value,y:p.value},class:"table-users",columns:$,"data-source":I.value,pagination:!1,loading:C.value,size:"small"},{bodyCell:s(({column:_,record:d,index:be})=>{var Q,W,Z,ee,ae,te,le,ne,se,oe,ie,re,ue,de;return[_.dataIndex==="idx"?(l(),w(k,{key:0},[f(h(e.value(be)),1)],64)):r("",!0),_.dataIndex=="documentnumber"?(l(),w(k,{key:1},[f(h((Q=d.profile)==null?void 0:Q.documentnumber),1)],64)):r("",!0),_.dataIndex=="name"?(l(),w(k,{key:2},[f(h((W=d.profile)==null?void 0:W.name),1)],64)):r("",!0),_.dataIndex=="lastname"?(l(),w(k,{key:3},[f(h((Z=d.profile)==null?void 0:Z.lastname)+" "+h((ee=d.profile)==null?void 0:ee.middlename),1)],64)):r("",!0),_.dataIndex=="phone"?(l(),w(k,{key:4},[f(h((ae=d.profile)!=null&&ae.phone?(te=d.profile)==null?void 0:te.phone:"🔒"),1)],64)):r("",!0),_.dataIndex=="birthday"?(l(),w(k,{key:5},[f(h((le=d.profile)!=null&&le.birthday?(ne=d.profile)==null?void 0:ne.birthday:"🔒"),1)],64)):r("",!0),_.dataIndex=="office"?(l(),w(k,{key:6},[((se=d.profile.office)==null?void 0:se.name)=="UGSE"?(l(),b(N,{key:0,color:"blue"},{default:s(()=>{var U;return[f(h((U=d.profile)==null?void 0:U.office.name),1)]}),_:2},1024)):r("",!0),((oe=d.profile.office)==null?void 0:oe.name)=="UGO"?(l(),b(N,{key:1,color:"orange"},{default:s(()=>{var U;return[f(h((U=d.profile)==null?void 0:U.office.name),1)]}),_:2},1024)):r("",!0),((ie=d.profile.office)==null?void 0:ie.name)=="DE"?(l(),b(N,{key:2,color:"green"},{default:s(()=>{var U;return[f(h((U=d.profile)==null?void 0:U.office.name),1)]}),_:2},1024)):r("",!0),((re=d.profile.office)==null?void 0:re.name)=="UGEER"?(l(),b(N,{key:3,color:"gray"},{default:s(()=>{var U;return[f(h((U=d.profile)==null?void 0:U.office.name),1)]}),_:2},1024)):r("",!0),((ue=d.profile.office)==null?void 0:ue.id)==5?(l(),b(N,{key:4,color:"blue"},{default:s(()=>u[5]||(u[5]=[f("Asesor Notaría ")])),_:1})):r("",!0)],64)):r("",!0),_.dataIndex=="cde"?(l(),w(k,{key:7},[f(h((de=d.profile)==null?void 0:de.cde.name),1)],64)):r("",!0),_.dataIndex=="role"?(l(),w(k,{key:8},[f(h(d.roles[0].name),1)],64)):r("",!0),_.dataIndex=="actions"?(l(),b(_e,{key:9,trigger:["click"]},{overlay:s(()=>[i(ve,null,{default:s(()=>[i(X,null,{default:s(()=>[x("a",{onClick:U=>B(d)},"Editar",8,Le)]),_:2},1024),i(X,null,{default:s(()=>[x("a",{onClick:U=>Y(d)},"Vistas",8,Ne)]),_:2},1024)]),_:2},1024)]),default:s(()=>[x("a",{class:"ant-dropdown-link",onClick:u[1]||(u[1]=xe(()=>{},["prevent"]))},[i(J,{shape:"circle",icon:Ce(R(De)),size:"small"},null,8,["icon"])])]),_:2},1024)):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),x("div",Ge,[x("span",null,[i(N,{color:"blue"},{default:s(()=>[x("b",null,h(m.value),1)]),_:1}),u[7]||(u[7]=f("Usuarios"))]),i(he,{size:"small",total:m.value,pageSize:A.value,onChange:M,showSizeChanger:!1},null,8,["total","pageSize"])]),i(K,{width:"550",open:a.value,"onUpdate:open":u[2]||(u[2]=_=>a.value=_),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:H},{default:s(()=>[i(Oe,{updateUser:E.value,onCloseDraw:D},null,8,["updateUser"])]),_:1},8,["open"]),i(K,{width:"450",open:P.value,"onUpdate:open":u[3]||(u[3]=_=>P.value=_),class:"draw-notary",title:"Administrar Vistas",placement:"right"},{default:s(()=>[i(Re,{idUser:E.value,onCloseDraw:D},null,8,["idUser"])]),_:1},8,["open"])],64)}}};export{Be as default};
