import{r as n,H as j,x as q,l as J,b as l,o,d as s,e as c,c as r,i as S,w as _,F as i,z as k,j as m,t as d,f as u,s as X,I as Y,R as K}from"./index-eb53301a.js";import{S as Q}from"./DrawerSolicitante.componente-c275321c.js";import{u as W}from"./selectes-a96ef3ab.js";import{M as Z}from"./MoreOutlined-35b614dc.js";import"./es-c8941617.js";import"./_plugin-vue_export-helper-c27b6911.js";const ee=c("h3",null,"ASESORES",-1),ae={class:"filters-notary"},te=c("div",null,null,-1),ne={class:"paginator"},L=20,ce={__name:"AsesoresLista",setup(oe){JSON.parse(localStorage.getItem("profile"));const h=W();h.$patch({cities:h.cities}),h.fetchCities();const C=n(window.innerHeight-100),N=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"EMAIL",dataIndex:"email",fixed:"left",width:200},{title:"NOMBRES",dataIndex:"name",width:140},{title:"APELLIDOS",dataIndex:"apellidos",width:140},{title:"NUM. DOC",dataIndex:"documentnumber",align:"center",width:120},{title:"CELULAR",dataIndex:"phone",align:"center",width:150},{title:"F.NACIMIENTO",dataIndex:"birthday",align:"center",width:150},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],z=n(0),v=n({page:0}),D=n(1200),g=n([]),f=n(!1),w=n(!1),O=n(null),x=n(null),A=e=>{v.value.page=e,I()},M=async()=>{try{f.value=!0;const e=await k({url:`notary/list/${x.value}`,method:"GET"});g.value=e.data}catch(e){console.error("Error de red:",e)}finally{f.value=!1}},B=(e,a)=>{const b=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return a.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},y=()=>{C.value=window.innerHeight-280},V=e=>{console.log("open",e)},F=()=>{I(),w.value=!1},R=j(()=>e=>((v.value.page==0?1:v.value.page)-1)*L+e+1),I=async()=>{try{f.value=!0;let e=v.value.page==0?"":v.value;const a=await k({url:"user/list-asesories",method:"GET",params:e});g.value=a.data,z.value=a.total}catch(e){console.error("Error de red:",e)}finally{f.value=!1}};return q(()=>{window.removeEventListener("resize",y)}),J(()=>{window.addEventListener("resize",y),y(),I()}),(e,a)=>{const b=l("a-select"),E=l("a-button"),U=l("a-menu"),T=l("a-dropdown"),H=l("a-table"),P=l("a-pagination"),G=l("a-drawer");return o(),s(i,null,[c("div",null,[ee,c("div",ae,[te,c("div",null,[r(b,{placeholder:"Buscar por Provincia",style:{width:"200px"},value:x.value,"onUpdate:value":a[0]||(a[0]=t=>x.value=t),"show-search":"",options:S(h).cities,"filter-option":B,onChange:M},null,8,["value","options"])])]),r(H,{bordered:"",scroll:{x:D.value,y:C.value},class:"ant-table-striped",columns:N,"data-source":g.value,pagination:!1,loading:f.value,size:"small"},{bodyCell:_(({column:t,record:p,index:$})=>[t.dataIndex=="idx"?(o(),s(i,{key:0},[m(d(R.value($)),1)],64)):u("",!0),t.dataIndex=="name"?(o(),s(i,{key:1},[m(d(p.asesores.profile.name),1)],64)):u("",!0),t.dataIndex=="apellidos"?(o(),s(i,{key:2},[m(d(p.asesores.profile.lastname)+" "+d(p.asesores.profile.middlename),1)],64)):u("",!0),t.dataIndex=="documentnumber"?(o(),s(i,{key:3},[m(d(p.asesores.profile.documentnumber),1)],64)):u("",!0),t.dataIndex=="phone"?(o(),s(i,{key:4},[m(d(p.asesores.profile.phone),1)],64)):u("",!0),t.dataIndex=="birthday"?(o(),s(i,{key:5},[m(d(p.asesores.profile.birthday),1)],64)):u("",!0),t.dataIndex=="actions"?(o(),X(T,{key:6,trigger:["click"]},{overlay:_(()=>[r(U)]),default:_(()=>[c("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=Y(()=>{},["prevent"]))},[r(E,{shape:"circle",icon:K(S(Z)),size:"small"},null,8,["icon"])])]),_:1})):u("",!0)]),_:1},8,["scroll","data-source","loading"])]),c("div",ne,[r(P,{size:"small",total:z.value,pageSize:L,onChange:A,showSizeChanger:!1},null,8,["total"])]),r(G,{open:w.value,"onUpdate:open":a[2]||(a[2]=t=>w.value=t),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right",onAfterOpenChange:V},{default:_(()=>[r(Q,{onCloseDraw:F,updateValues:O.value},null,8,["updateValues"])]),_:1},8,["open"])],64)}}};export{ce as default};
