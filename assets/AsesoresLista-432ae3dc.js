import{r as t,H as X,v as Y,k as $,b as d,o as n,d as o,e as p,c,w as h,F as u,z as j,i as _,t as l,s as r,q as K,I as Q,M as W,h as Z}from"./index-990720bf.js";import{S as ee}from"./DrawerSolicitante.componente-eca18dc3.js";import{u as ae}from"./selectes-73568308.js";import{M as te}from"./MoreOutlined-81792b85.js";import"./es-4ca361dc.js";import"./_plugin-vue_export-helper-c27b6911.js";const ne=p("h3",{class:"title-produce"},"ASESORES",-1),se=p("div",{class:"filters-notary"},[p("div")],-1),oe={key:1,class:"uppercase"},le={key:2,class:"uppercase"},re={class:"paginator"},M=20,he={__name:"AsesoresLista",setup(ie){JSON.parse(localStorage.getItem("profile"));const f=ae();f.$patch({cities:f.cities}),f.fetchCities();const I=t(window.innerHeight-100),N=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"EMAIL",dataIndex:"email",fixed:"left",width:200},{title:"NOMBRES",dataIndex:"name",width:140},{title:"APELLIDOS",dataIndex:"apellidos",width:170},{title:"NUM. DOC",dataIndex:"documentnumber",align:"center",width:120},{title:"CELULAR",dataIndex:"phone",align:"center",width:150},{title:"F.NACIMIENTO",dataIndex:"birthday",align:"center",width:150},{title:"SEDE",dataIndex:"sede",align:"center",width:150}],y=t(0),m=t({page:0}),O=t(1200),b=t([]),g=t(!1),v=t(!1),D=t(null);t(null);const V=e=>{m.value.page=e,x()},w=()=>{I.value=window.innerHeight-280},B=e=>{console.log("open",e)},R=()=>{x(),v.value=!1},U=X(()=>e=>((m.value.page==0?1:m.value.page)-1)*M+e+1),x=async()=>{try{g.value=!0;let e=m.value.page==0?"":m.value;const s=await j({url:"user/list-asesories",method:"GET",params:e});b.value=s.data,y.value=s.total}catch(e){console.error("Error de red:",e)}finally{g.value=!1}};return Y(()=>{window.removeEventListener("resize",w)}),$(()=>{window.addEventListener("resize",w),w(),x()}),(e,s)=>{const F=d("a-button"),H=d("a-menu"),T=d("a-dropdown"),q=d("a-table"),P=d("a-pagination"),G=d("a-drawer");return n(),o(u,null,[p("div",null,[ne,se,c(q,{bordered:"",scroll:{x:O.value,y:I.value},class:"asesores-table",columns:N,"data-source":b.value,pagination:!1,loading:g.value,size:"small"},{bodyCell:h(({column:a,record:i,index:J})=>{var k,C,S,E,z,A,L;return[a.dataIndex=="idx"?(n(),o(u,{key:0},[_(l(U.value(J)),1)],64)):r("",!0),a.dataIndex=="name"?(n(),o("span",oe,l((k=i.asesores.profile)==null?void 0:k.name),1)):r("",!0),a.dataIndex=="apellidos"?(n(),o("span",le,l((C=i.asesores.profile)==null?void 0:C.lastname)+" "+l((S=i.asesores.profile)==null?void 0:S.middlename),1)):r("",!0),a.dataIndex=="documentnumber"?(n(),o(u,{key:3},[_(l((E=i.asesores.profile)==null?void 0:E.documentnumber),1)],64)):r("",!0),a.dataIndex=="phone"?(n(),o(u,{key:4},[_(l((z=i.asesores.profile)==null?void 0:z.phone),1)],64)):r("",!0),a.dataIndex=="birthday"?(n(),o(u,{key:5},[_(l((A=i.asesores.profile)==null?void 0:A.birthday),1)],64)):r("",!0),a.dataIndex=="sede"?(n(),o(u,{key:6},[_(l((L=i.asesores.profile)==null?void 0:L.cde.name),1)],64)):r("",!0),a.dataIndex=="actions"?(n(),K(T,{key:7,trigger:["click"]},{overlay:h(()=>[c(H)]),default:h(()=>[p("a",{class:"ant-dropdown-link",onClick:s[0]||(s[0]=Q(()=>{},["prevent"]))},[c(F,{shape:"circle",icon:W(Z(te)),size:"small"},null,8,["icon"])])]),_:1})):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),p("div",re,[c(P,{size:"small",total:y.value,pageSize:M,onChange:V,showSizeChanger:!1},null,8,["total"])]),c(G,{width:"600",open:v.value,"onUpdate:open":s[1]||(s[1]=a=>v.value=a),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right",onAfterOpenChange:B},{default:h(()=>[c(ee,{onCloseDraw:R,updateValues:D.value},null,8,["updateValues"])]),_:1},8,["open"])],64)}}};export{he as default};
