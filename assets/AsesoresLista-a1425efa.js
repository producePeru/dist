import{r as t,H as J,v as X,k as Y,b as d,o as n,d as o,e as p,c,w as h,F as u,y as $,i as _,t as l,s as r,q as j,I as K,M as Q,h as W}from"./index-080fa3f6.js";import{S as Z}from"./DrawerSolicitante.componente-aedf426d.js";import{u as ee}from"./selectes-9c0bf513.js";import{M as ae}from"./MoreOutlined-b710274b.js";import"./es-0bfb18f2.js";import"./_plugin-vue_export-helper-c27b6911.js";const te=p("h3",{class:"title-produce"},"ASESORES",-1),ne=p("div",{class:"filters-notary"},[p("div")],-1),se={key:1,class:"uppercase"},oe={key:2,class:"uppercase"},le={class:"paginator"},L=20,_e={__name:"AsesoresLista",setup(re){JSON.parse(localStorage.getItem("profile"));const f=ee();f.$patch({cities:f.cities}),f.fetchCities();const y=t(window.innerHeight-100),M=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"EMAIL",dataIndex:"email",fixed:"left",width:200},{title:"NOMBRES",dataIndex:"name",width:140},{title:"APELLIDOS",dataIndex:"apellidos",width:170},{title:"NUM. DOC",dataIndex:"documentnumber",align:"center",width:120},{title:"CELULAR",dataIndex:"phone",align:"center",width:150},{title:"F.NACIMIENTO",dataIndex:"birthday",align:"center",width:150},{title:"SEDE",dataIndex:"sede",align:"center",width:150}],I=t(0),m=t({page:0}),N=t(1200),b=t([]),g=t(!1),v=t(!1),O=t(null);t(null);const D=e=>{m.value.page=e,x()},w=()=>{y.value=window.innerHeight-280},V=e=>{console.log("open",e)},B=()=>{x(),v.value=!1},R=J(()=>e=>((m.value.page==0?1:m.value.page)-1)*L+e+1),x=async()=>{try{g.value=!0;let e=m.value.page==0?"":m.value;const s=await $({url:"user/list-asesories",method:"GET",params:e});b.value=s.data,I.value=s.total}catch(e){console.error("Error de red:",e)}finally{g.value=!1}};return X(()=>{window.removeEventListener("resize",w)}),Y(()=>{window.addEventListener("resize",w),w(),x()}),(e,s)=>{const U=d("a-button"),F=d("a-menu"),H=d("a-dropdown"),T=d("a-table"),q=d("a-pagination"),P=d("a-drawer");return n(),o(u,null,[p("div",null,[te,ne,c(T,{bordered:"",scroll:{x:N.value,y:y.value},class:"asesores-table",columns:M,"data-source":b.value,pagination:!1,loading:g.value,size:"small"},{bodyCell:h(({column:a,record:i,index:G})=>{var k,C,S,E,z,A;return[a.dataIndex=="idx"?(n(),o(u,{key:0},[_(l(R.value(G)),1)],64)):r("",!0),a.dataIndex=="name"?(n(),o("span",se,l((k=i.asesores.profile)==null?void 0:k.name),1)):r("",!0),a.dataIndex=="apellidos"?(n(),o("span",oe,l((C=i.asesores.profile)==null?void 0:C.lastname)+" "+l((S=i.asesores.profile)==null?void 0:S.middlename),1)):r("",!0),a.dataIndex=="documentnumber"?(n(),o(u,{key:3},[_(l(i.asesores.profile.documentnumber),1)],64)):r("",!0),a.dataIndex=="phone"?(n(),o(u,{key:4},[_(l((E=i.asesores.profile)==null?void 0:E.phone),1)],64)):r("",!0),a.dataIndex=="birthday"?(n(),o(u,{key:5},[_(l((z=i.asesores.profile)==null?void 0:z.birthday),1)],64)):r("",!0),a.dataIndex=="sede"?(n(),o(u,{key:6},[_(l((A=i.asesores.profile)==null?void 0:A.cde.name),1)],64)):r("",!0),a.dataIndex=="actions"?(n(),j(H,{key:7,trigger:["click"]},{overlay:h(()=>[c(F)]),default:h(()=>[p("a",{class:"ant-dropdown-link",onClick:s[0]||(s[0]=K(()=>{},["prevent"]))},[c(U,{shape:"circle",icon:Q(W(ae)),size:"small"},null,8,["icon"])])]),_:1})):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),p("div",le,[c(q,{size:"small",total:I.value,pageSize:L,onChange:D,showSizeChanger:!1},null,8,["total"])]),c(P,{width:"600",open:v.value,"onUpdate:open":s[1]||(s[1]=a=>v.value=a),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right",onAfterOpenChange:V},{default:h(()=>[c(Z,{onCloseDraw:B,updateValues:O.value},null,8,["updateValues"])]),_:1},8,["open"])],64)}}};export{_e as default};
