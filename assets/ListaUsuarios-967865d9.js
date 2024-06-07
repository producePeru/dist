import{K as re,r as o,a as de,b as m,o as t,q as p,w as r,e as I,d as h,F as g,x as ue,h as D,s,c as y,L as ce,t as u,i as f,z as Z,m as P,u as pe,v as me,H as fe,k as _e,I as ve,M as he,p as ge,j as ye}from"./index-990720bf.js";import{u as ee}from"./selectes-73568308.js";import{f as xe}from"./actualizarUsuario-3eaca126.js";import"./es-4ca361dc.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import{M as be}from"./MoreOutlined-81792b85.js";const ke={class:"grid-profile"},we="YYYY-MM-DD",Ue={__name:"EditarPerfil.componente",props:["updateUser"],emits:["closeDraw"],setup(E,{emit:$}){re.locale("es");const n=ee(),R=JSON.parse(localStorage.getItem("profile")),N=$;n.$patch({genders:n.genders}),n.$patch({cdes:n.cdes}),n.$patch({Offices:n.Offices}),n.$patch({roles:n.roles}),n.$patch({supervisores:n.supervisores}),n.fetchGenders(),n.fetchCdes(),n.fetchOffices(),n.fetchRoles();const q=E,S=o(!1),w=o(xe),C=o(null),a=de({name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:R.id}),F=l=>{l&&(a.name=l.profile.name,a.lastname=l.profile.lastname,a.middlename=l.profile.middlename,a.birthday=l.profile.birthday,a.sick=l.profile.sick,a.phone=l.profile.phone,a.gender_id=l.profile.gender_id,a.cde_id=l.profile.cde_id,a.office_id=l.profile.office_id,a.email=l.email)},L=l=>{const b={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(l===2)n.fetchSupervisores(),w.value={...w.value,supervisor_id:b};else{const{supervisor_id:U,...x}=w.value;w.value=x}},z=async()=>{S.value=!0;let l=a;delete l.email;try{const b=await Z({url:`user/update/${q.updateUser.profile.id}`,method:"PUT",data:l});P.success(b.message),N("closeDraw",!0)}catch{P.error("No se pudo registrar este usuario")}finally{S.value=!1}},M=()=>{P.error("Debes de completar todos los espacios requeridos")};return(l,b)=>{const U=m("a-select"),x=m("a-form-item"),A=m("a-input"),c=m("a-date-picker"),k=m("a-button"),O=m("a-form");return t(),p(O,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:z,onFinishFailed:M},{default:r(()=>[I("div",ke,[(t(!0),h(g,null,ue(w.value,(e,G)=>(t(),h(g,{key:G},[e.type==="iSelect"?(t(),p(x,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[e.name=="gender_id"?(t(),p(U,{key:0,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:D(n).genders},null,8,["value","onUpdate:value","options"])):s("",!0),e.name=="cde_id"?(t(),p(U,{key:1,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:D(n).cdes},null,8,["value","onUpdate:value","options"])):s("",!0),e.name=="office_id"?(t(),p(U,{key:2,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:D(n).Offices},null,8,["value","onUpdate:value","options"])):s("",!0),e.name=="role_id"?(t(),p(U,{key:3,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:D(n).roles,onChange:L},null,8,["value","onUpdate:value","options"])):s("",!0),e.name=="supervisor_id"?(t(),p(U,{key:4,value:a[e.name],"onUpdate:value":d=>a[e.name]=d,options:D(n).supervisores},null,8,["value","onUpdate:value","options"])):s("",!0)]),_:2},1032,["name","label","rules"])):s("",!0),e.type==="iText"?(t(),p(x,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:r(()=>[y(A,{value:a[e.name],"onUpdate:value":d=>a[e.name]=d,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):s("",!0),e.type==="iDate"?(t(),p(x,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:r(()=>[y(c,{locale:D(ce),value:C.value,"onUpdate:value":b[0]||(b[0]=d=>C.value=d),style:{width:"100%"},format:we},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):s("",!0)],64))),128))]),I("div",null,u(F(q.updateUser)),1),y(x,null,{default:r(()=>[y(k,{class:"btn-produce",type:"primary","html-type":"submit",loading:S.value},{default:r(()=>[f("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}},Ie=ae(Ue,[["__scopeId","data-v-3578053d"]]);const te=E=>(ge("data-v-227e2860"),E=E(),ye(),E),Se=te(()=>I("h3",{class:"title-produce"},"USUARIOS",-1)),Ce=te(()=>I("br",null,null,-1)),De=["onClick"],Ee={class:"paginator"},W=20,Oe={__name:"ListaUsuarios",setup(E){const $=ee();$.$patch({cdes:$.cdes});const n=o(!1),R=c=>{console.log("open",c)},N=o(null);o(!1),o(!1),o(!1),o(0),o(!1),o(!1),o(!1),o("solicitante"),o(5);const q=o([]),S=o(!1),w=o(0);pe();const C=o({page:1});o("");const a=o("user/list");o([]),o(null);const F=o(1200),L=o(window.innerHeight-100),z=()=>{L.value=window.innerHeight-300};me(()=>{window.removeEventListener("resize",z)});const M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:120},{title:"Correo",dataIndex:"email",width:200},{title:"Celular",dataIndex:"phone",width:100,align:"center"},{title:"Oficina",dataIndex:"office",width:120,align:"center"},{title:"CDE",dataIndex:"cde",width:140},{title:"ROL",dataIndex:"role",width:160},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],l=()=>{x(),n.value=!1},b=c=>{C.value.page=c,x()},U=c=>{N.value=c,n.value=!0},x=async()=>{try{S.value=!0;let c=C.value.page==1?"":C.value;const k=await Z({url:a.value,method:"GET",params:c});q.value=k.data,w.value=k.total}catch(c){console.error("Error de red:",c)}finally{S.value=!1}},A=fe(()=>c=>(C.value.page-1)*W+c+1);return _e(()=>{x(),window.addEventListener("resize",z),z()}),(c,k)=>{const O=m("a-tag"),e=m("a-button"),G=m("a-menu-item"),d=m("a-menu"),ne=m("a-dropdown"),oe=m("a-table"),se=m("a-pagination"),le=m("a-drawer");return t(),h(g,null,[I("div",null,[Se,Ce,y(oe,{bordered:"",scroll:{x:F.value,y:L.value},class:"ant-table-striped",columns:M,"data-source":q.value,pagination:!1,loading:S.value,size:"small"},{bodyCell:r(({column:_,record:i,index:ie})=>{var B,V,Y,T,H,j,J,K,X,Q;return[_.dataIndex=="idx"?(t(),h(g,{key:0},[f(u(A.value(ie)),1)],64)):s("",!0),_.dataIndex=="lastName"?(t(),h(g,{key:1},[f(u(i.last_name)+" "+u(i.middle_name),1)],64)):s("",!0),_.dataIndex=="documentnumber"?(t(),h(g,{key:2},[f(u((B=i.profile)==null?void 0:B.documentnumber),1)],64)):s("",!0),_.dataIndex=="name"?(t(),h(g,{key:3},[f(u((V=i.profile)==null?void 0:V.name),1)],64)):s("",!0),_.dataIndex=="lastname"?(t(),h(g,{key:4},[f(u((Y=i.profile)==null?void 0:Y.lastname)+" "+u((T=i.profile)==null?void 0:T.middlename),1)],64)):s("",!0),_.dataIndex=="phone"?(t(),h(g,{key:5},[f(u((H=i.profile)==null?void 0:H.phone),1)],64)):s("",!0),_.dataIndex=="office"?(t(),h(g,{key:6},[((j=i.profile)==null?void 0:j.office.name)=="UGSE"?(t(),p(O,{key:0,color:"blue"},{default:r(()=>{var v;return[f(u((v=i.profile)==null?void 0:v.office.name),1)]}),_:2},1024)):s("",!0),((J=i.profile)==null?void 0:J.office.name)=="UGO"?(t(),p(O,{key:1,color:"orange"},{default:r(()=>{var v;return[f(u((v=i.profile)==null?void 0:v.office.name),1)]}),_:2},1024)):s("",!0),((K=i.profile)==null?void 0:K.office.name)=="DE"?(t(),p(O,{key:2,color:"green"},{default:r(()=>{var v;return[f(u((v=i.profile)==null?void 0:v.office.name),1)]}),_:2},1024)):s("",!0),((X=i.profile)==null?void 0:X.office.name)=="UGEER"?(t(),p(O,{key:3,color:"red"},{default:r(()=>{var v;return[f(u((v=i.profile)==null?void 0:v.office.name),1)]}),_:2},1024)):s("",!0)],64)):s("",!0),_.dataIndex=="cde"?(t(),h(g,{key:7},[f(u((Q=i.profile)==null?void 0:Q.cde.name),1)],64)):s("",!0),_.dataIndex=="role"?(t(),h(g,{key:8},[f(u(i.roles[0].name),1)],64)):s("",!0),_.dataIndex=="actions"?(t(),p(ne,{key:9,trigger:["click"]},{overlay:r(()=>[y(d,null,{default:r(()=>[y(G,null,{default:r(()=>[I("a",{onClick:v=>U(i)},"Editar",8,De)]),_:2},1024)]),_:2},1024)]),default:r(()=>[I("a",{class:"ant-dropdown-link",onClick:k[0]||(k[0]=ve(()=>{},["prevent"]))},[y(e,{shape:"circle",icon:he(D(be)),size:"small"},null,8,["icon"])])]),_:2},1024)):s("",!0)]}),_:1},8,["scroll","data-source","loading"])]),I("div",Ee,[y(se,{size:"small",total:w.value,pageSize:W,onChange:b,showSizeChanger:!1},null,8,["total"])]),y(le,{open:n.value,"onUpdate:open":k[1]||(k[1]=_=>n.value=_),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:R},{default:r(()=>[y(Ie,{updateUser:N.value,onCloseDraw:l},null,8,["updateUser"])]),_:1},8,["open"])],64)}}},Fe=ae(Oe,[["__scopeId","data-v-227e2860"]]);export{Fe as default};
