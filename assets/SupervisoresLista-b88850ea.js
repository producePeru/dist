import{r as c,u as A,l as G,d as s,o as i,e as u,f as l,c as t,w as a,F as m,m as b,j as p,t as _,v as h,s as $,i as S,R as F,E as L,S as j,h as Q}from"./index-d5bfdd40.js";import{M as X}from"./MoreOutlined-65259225.js";const H=l("h3",null,"SUPERVISORES",-1),J={class:"filters"},K=["onClick"],W=l("a",null,"Eliminar",-1),Y={class:"paginator"},ae={__name:"SupervisoresLista",setup(Z){const f=c([]),r=c(!1),N=c(1e3),g=c(0),x=A(),y=c({page:1}),R=[{title:"Apellidos",dataIndex:"lastName",fixed:"left",width:200},{title:"Nombres",dataIndex:"name",fixed:"left",width:140},{title:"Tipo documento",dataIndex:"document_type",align:"center",width:100},{title:"Num. documento",dataIndex:"number_document",align:"center",width:120},{title:"Departamento",dataIndex:"departamento",align:"center",width:140},{title:"Provincia",dataIndex:"province",align:"center",width:140},{title:"Distrito",dataIndex:"distrite",align:"center",width:140},{title:"Correo",dataIndex:"email",width:180},{title:"Celular",dataIndex:"phone",width:100}],z=e=>{y.value.page=e,v()},D=e=>{const n={rol:"supervisor",dni:e.number_document,access:1};x.push({name:"actualizar-persona",query:n})},M=()=>{const e={rol:"supervisor",access:1};x.push({name:"registrar-persona",query:e})},V=async e=>{try{r.value=!0;const n=await b({url:`person-dni/${e.number_document}/1`,method:"PUT"});v(),Q.success(n.message)}catch(n){console.error("Error de red:",n)}finally{r.value=!1}},v=async()=>{try{r.value=!0;const e=await b({url:"/person/1",method:"GET",params:y.value});f.value=e.data,g.value=e.total}catch(e){console.error("Error de red:",e)}finally{r.value=!1}};return G(v),(e,n)=>{const w=s("a-button"),k=s("a-menu-item"),B=s("a-popconfirm"),O=s("a-menu"),P=s("a-dropdown"),T=s("a-table"),U=s("a-pagination");return i(),u(m,null,[l("div",null,[H,l("div",J,[t(w,{type:"primary",onClick:M},{default:a(()=>[p("AGREGAR")]),_:1})]),t(T,{bordered:"",scroll:{x:N.value},class:"ant-table-striped",columns:R,"data-source":f.value,pagination:!1,loading:r.value,size:"small"},{bodyCell:a(({column:d,record:o})=>{var C,I,E;return[d.dataIndex=="lastName"?(i(),u(m,{key:0},[p(_(o.last_name)+" "+_(o.middle_name),1)],64)):h("",!0),d.dataIndex=="departamento"?(i(),u(m,{key:1},[p(_((C=o.department)==null?void 0:C.descripcion),1)],64)):h("",!0),d.dataIndex=="province"?(i(),u(m,{key:2},[p(_((I=o.province)==null?void 0:I.descripcion),1)],64)):h("",!0),d.dataIndex=="distrite"?(i(),u(m,{key:3},[p(_((E=o.district)==null?void 0:E.descripcion),1)],64)):h("",!0),d.dataIndex=="actions"?(i(),$(P,{key:4,trigger:["click"]},{overlay:a(()=>[t(O,null,{default:a(()=>[t(k,null,{default:a(()=>[l("a",{onClick:q=>D(o)},"Editar",8,K)]),_:2},1024),t(k,null,{default:a(()=>[t(B,{title:"¿Eliminar?",onConfirm:q=>V(o)},{icon:a(()=>[t(S(F),{style:{color:"red"}})]),default:a(()=>[W]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[l("a",{class:"ant-dropdown-link",onClick:n[0]||(n[0]=L(()=>{},["prevent"]))},[t(w,{shape:"circle",icon:j(S(X)),size:"small"},null,8,["icon"])])]),_:2},1024)):h("",!0)]}),_:1},8,["scroll","data-source","loading"])]),l("div",Y,[t(U,{size:"small",total:g.value,pageSize:20,onChange:z,showSizeChanger:!1},null,8,["total"])])],64)}}};export{ae as default};