import{r as t,u as se,v as ie,H as de,k as re,b as u,o as l,d,e as _,c as s,h as b,w as p,F as r,y as S,i as m,t as c,s as i,q as U,Q as ce,I as ue,J as pe,p as me,j as _e,m as ve}from"./index-31e350f7.js";import{u as he}from"./selectes-1b41ab78.js";/* empty css                                                      */import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import{S as ge}from"./DrawerSolicitante.componente-eea024ed.js";import{M as xe}from"./MoreOutlined-1a8e67b4.js";import"./es-15bcfa42.js";const R=f=>(me("data-v-69e04d44"),f=f(),_e(),f),Ie=R(()=>_("h3",null,"SOLICITUDES DE FORMALIZACIÓN DIGITAL",-1)),we={class:"filters-dig"},ye=["onClick"],ke=["onClick"],Ce=["onClick"],be=R(()=>_("a",null,"Quitar de la lista",-1)),Se={class:"paginator"},V=20,ze={__name:"SolicitudesLista",setup(f){const g=he();g.$patch({cdes:g.cdes}),g.fetchCdes();const x=t(!1),z=t(null);t(!1),t(!1),t(!1),t(0),t(!1);const E=t(!1);t(!1),t("solicitante"),t(5);const D=t([]),w=t(!1),N=t(0),T=se(),I=t({page:1});t("");const y=t("formalization/digital-list");t([]);const A=t(null),B=t(1200),L=t(window.innerHeight-100),k=()=>{L.value=window.innerHeight-300};ie(()=>{window.removeEventListener("resize",k)});const M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Apellidos",dataIndex:"lastName",fixed:"left",width:150},{title:"Nombres",dataIndex:"name",fixed:"left",width:150},{title:"DNI",dataIndex:"number_document",align:"center",width:90},{title:"Departamento",dataIndex:"department",width:140},{title:"Provincia",dataIndex:"province",width:140},{title:"Distrito",dataIndex:"district",width:140},{title:"CDE Atención",dataIndex:"cde",width:140},{title:"Celular",dataIndex:"phone",width:100},{title:"Correo",dataIndex:"email",width:200},{title:"Atendido",dataIndex:"statu",align:"center",width:100},{title:"Reserva de nombre",dataIndex:"reserva",align:"center",width:160},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],H=e=>{z.value=e.people,x.value=!0},O=()=>{v(),x.value=!1},P=t([{value:1,label:"Aprobado"},{value:2,label:"Desaprobado"},{value:3,label:"Pendiente"}]),q=e=>{I.value.page=e,v()},Q=async e=>{const a={type:e.people.typedocument_id,number:e.people.documentnumber,formalizaciondigital:e.id};T.push({name:"asesorias-formalizaciones",query:a})},G=e=>{if(e!=1e3){y.value=`/formalization-digital?department=${e}`,v();return}y.value="/formalization-digital",v()},j=async e=>{const a={booking:e};await S({url:`/formalization-digital-status/${E.value.documentnumber}`,method:"PATCH",data:a})},J=e=>{E.value=e},X=async e=>{try{const a=await S({url:`formalization/delete/${e.id}`,method:"DELETE"});a.status==200&&(v(),ve.success(a.message))}catch(a){console.error("Error de red:",a)}},v=async()=>{try{w.value=!0;let e=I.value.page==1?"":I.value;const{data:a}=await S({url:y.value,method:"GET",params:e});D.value=a.data,N.value=a.total}catch(e){console.error("Error de red:",e)}finally{w.value=!1}},Y=de(()=>e=>(I.value.page-1)*V+e+1);return re(()=>{v(),window.addEventListener("resize",k),k()}),(e,a)=>{const $=u("a-select"),Z=u("a-checkbox"),K=u("a-button"),C=u("a-menu-item"),W=u("a-popconfirm"),ee=u("a-menu"),te=u("a-dropdown"),ae=u("a-table"),ne=u("a-pagination"),oe=u("a-drawer");return l(),d(r,null,[_("div",null,[Ie,_("div",we,[s($,{value:A.value,"onUpdate:value":a[0]||(a[0]=o=>A.value=o),placeholder:"Filtrar por CDES",options:b(g).cdes,onChange:G},null,8,["value","options"])]),s(ae,{bordered:"",scroll:{x:B.value,y:L.value},class:"ant-table-striped",columns:M,"data-source":D.value,pagination:!1,loading:w.value,size:"small"},{bodyCell:p(({column:o,record:n,index:le})=>{var F;return[o.dataIndex=="idx"?(l(),d(r,{key:0},[m(c(Y.value(le)),1)],64)):i("",!0),o.dataIndex=="lastName"?(l(),d(r,{key:1},[m(c(n.people.lastname)+" "+c(n.people.middle),1)],64)):i("",!0),o.dataIndex=="name"?(l(),d(r,{key:2},[m(c(n.people.name),1)],64)):i("",!0),o.dataIndex=="number_document"?(l(),d(r,{key:3},[m(c(n.people.documentnumber),1)],64)):i("",!0),o.dataIndex=="department"?(l(),d(r,{key:4},[m(c(n.people.city.name),1)],64)):i("",!0),o.dataIndex=="province"?(l(),d(r,{key:5},[m(c(n.people.province.name),1)],64)):i("",!0),o.dataIndex=="district"?(l(),d(r,{key:6},[m(c(n.people.district.name),1)],64)):i("",!0),o.dataIndex=="phone"?(l(),d(r,{key:7},[m(c(n.people.phone),1)],64)):i("",!0),o.dataIndex=="email"?(l(),d(r,{key:8},[m(c(n.people.email),1)],64)):i("",!0),o.dataIndex=="cde"?(l(),d(r,{key:9},[m(c((F=n.cde)==null?void 0:F.name),1)],64)):i("",!0),o.dataIndex=="statu"?(l(),U(Z,{key:10,checked:n.attended!=0,disabled:""},null,8,["checked"])):i("",!0),o.dataIndex=="reserva"?(l(),d("div",{key:11,onClick:h=>J(n)},[s($,{disabled:n.attended==0,value:n.status,"onUpdate:value":h=>n.status=h,placeholder:"Escoger el proceso",style:{width:"90%"},options:P.value,onChange:j},null,8,["disabled","value","onUpdate:value","options"])],8,ye)):i("",!0),o.dataIndex=="actions"?(l(),U(te,{key:12,trigger:["click"]},{overlay:p(()=>[s(ee,null,{default:p(()=>[s(C,null,{default:p(()=>[_("a",{onClick:h=>Q(n)},"Formalizar",8,ke)]),_:2},1024),s(C,null,{default:p(()=>[_("a",{onClick:h=>H(n)},"Editar datos",8,Ce)]),_:2},1024),s(C,null,{default:p(()=>[s(W,{title:"¿Eliminar?",onConfirm:h=>X(n)},{icon:p(()=>[s(b(ce),{style:{color:"red"}})]),default:p(()=>[be]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:p(()=>[_("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=ue(()=>{},["prevent"]))},[s(K,{shape:"circle",icon:pe(b(xe)),size:"small"},null,8,["icon"])])]),_:2},1024)):i("",!0)]}),_:1},8,["scroll","data-source","loading"])]),_("div",Se,[s(ne,{size:"small",total:N.value,pageSize:V,onChange:q,showSizeChanger:!1},null,8,["total"])]),s(oe,{open:x.value,"onUpdate:open":a[2]||(a[2]=o=>x.value=o),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:p(()=>[s(ge,{onCloseDraw:O,updateValues:z.value},null,8,["updateValues"])]),_:1},8,["open"])],64)}}},Ue=fe(ze,[["__scopeId","data-v-69e04d44"]]);export{Ue as default};
