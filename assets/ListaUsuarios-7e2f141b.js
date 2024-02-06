import{u as j,r as m,n as q,b as u,o as e,d,e as g,B as c,w as t,s as l,c as r,F as p,h as U,C as h,a1 as F,j as i,t as f,i as z,Q as G,E as J,N as P,m as v,D as Q}from"./index-ed35c821.js";import{M as H}from"./MoreOutlined-d94f44a5.js";const K=g("h3",null,"USUARIOS",-1),W={key:0,class:"filters"},X={key:1},Y={key:0},Z=["onClick"],ee=g("a",null,"Eliminar",-1),te={class:"paginator"},le={__name:"ListaUsuarios",setup(ae){const A=j(),C=m([]),k=m(!1),S=m(0),E=m({page:1}),w=m(null),x=m([{title:"Nombres",dataIndex:"name",fixed:"left",width:60},{title:"Apellidos",dataIndex:"apellidos",fixed:"left",width:50},{title:"N° documento",dataIndex:"document_number",align:"center",width:40},{title:"ROL",dataIndex:"rol",align:"center",width:35},{title:"Correo electrónico",dataIndex:"email",width:60},{title:"Celular",dataIndex:"phone_number",align:"center",width:20},{title:"Género",dataIndex:"gender",align:"center",width:20}]),O=o=>{E.value.page=o,b()},B=async o=>{const s={dni:o.document_number};A.push({name:"nuevo-usuario",query:s})},M=async o=>{const s=o.document_number,_=JSON.parse(localStorage.getItem("user")),I=h.AES.decrypt(_.rol,"rol").toString(h.enc.Utf8);if(s===_.dni)return v.warning("Amiwito no te puedes autoeliminar");if(I==="super")try{const n=await U({url:`/delete-user/${Q}/${s}`,method:"PUT"});v.success(n.message),b()}catch{v.error("No se puede eliminar a este usuario")}else v.warning("No estas autorizado")},b=async()=>{try{k.value=!0;const o=await U({url:"/users",method:"GET",params:E.value});C.value=o.data,S.value=o.total;const s=h.AES.decrypt(F,"rol").toString(h.enc.Utf8);if(s!="invitado"){const _={title:"",dataIndex:"actions",align:"center",width:30};x.value=[...x.value,_]}w.value=s}catch(o){console.error("Error de red:",o)}finally{k.value=!1}};return q(b),(o,s)=>{const _=u("a-button"),I=u("router-link"),n=u("a-tag"),N=u("a-menu-item"),R=u("a-popconfirm"),V=u("a-menu"),D=u("a-dropdown"),$=u("a-table"),L=u("a-pagination");return e(),d(p,null,[g("div",null,[K,w.value=="super"?(e(),d("div",W,[w.value==""?(e(),c(I,{key:0,to:"nuevo-usuario"},{default:t(()=>[r(_,{type:"primary"},{default:t(()=>[i(" NUEVO ")]),_:1})]),_:1})):l("",!0)])):(e(),d("br",X)),r($,{bordered:"",class:"ant-table-striped",columns:x.value,"data-source":C.value,pagination:!1,loading:k.value,size:"small"},{bodyCell:t(({column:y,record:a})=>[y.dataIndex=="apellidos"?(e(),d(p,{key:0},[i(f(a.last_name)+" "+f(a.middle_name),1)],64)):l("",!0),y.dataIndex=="gender"?(e(),d(p,{key:1},[a.gender=="h"?(e(),c(n,{key:0,color:"blue"},{default:t(()=>[i("Hombre")]),_:1})):(e(),c(n,{key:1,color:"pink"},{default:t(()=>[i("Mujer")]),_:1}))],64)):l("",!0),y.dataIndex=="is_disabled"?(e(),d(p,{key:2},[a.activo!=1?(e(),c(n,{key:0,color:"success"},{default:t(()=>[i("Activo")]),_:1})):(e(),c(n,{key:1,color:"error"},{default:t(()=>[i("Inactivo")]),_:1}))],64)):l("",!0),y.dataIndex=="rol"?(e(),d(p,{key:3},[a.role=="super"?(e(),c(n,{key:0,color:"default"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)):l("",!0),a.role=="admin"?(e(),c(n,{key:1,color:"processing"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)):l("",!0),a.role=="usuario"?(e(),c(n,{key:2,color:"success"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)):l("",!0),a.role=="invitado"?(e(),c(n,{key:3,color:"warning"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)):l("",!0)],64)):l("",!0),y.dataIndex=="actions"?(e(),d(p,{key:4},[a.role!="super"?(e(),d("div",Y,[r(D,{trigger:["click"]},{overlay:t(()=>[r(V,null,{default:t(()=>[r(N,null,{default:t(()=>[g("a",{onClick:T=>B(a)},"Editar",8,Z)]),_:2},1024),r(N,null,{default:t(()=>[r(R,{title:"¿Eliminar?",onConfirm:T=>M(a)},{icon:t(()=>[r(z(G),{style:{color:"red"}})]),default:t(()=>[ee]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:t(()=>[g("a",{class:"ant-dropdown-link",onClick:s[0]||(s[0]=J(()=>{},["prevent"]))},[r(_,{shape:"circle",icon:P(z(H)),size:"small"},null,8,["icon"])])]),_:2},1024)])):l("",!0)],64)):l("",!0)]),_:1},8,["columns","data-source","loading"])]),g("div",te,[r(L,{size:"small",total:S.value,pageSize:20,onChange:O,showSizeChanger:!1},null,8,["total"])])],64)}}};export{le as default};
