import{c as a,A as Y,i as c,r as Q,C as W,a as s,o as l,b as k,g as w,w as e,G as O,H as E,m as P,d as U,e as r,j as p,J as _,l as Z,E as K,L as ee}from"./index-7e3f5d0f.js";var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const te=ae;function N(i){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},m=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(o).filter(function(g){return Object.getOwnPropertyDescriptor(o,g).enumerable}))),m.forEach(function(g){oe(i,g,o[g])})}return i}function oe(i,t,o){return t in i?Object.defineProperty(i,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[t]=o,i}var C=function(t,o){var m=N({},t,o.attrs);return a(Y,N({},m,{icon:te}),null)};C.displayName="MoreOutlined";C.inheritAttrs=!1;const ne=C;const se={id:"components-table-demo-size"},le=w("h3",null,"Lista de usuarios",-1),re={class:"wrapper-search"},ue=w("span",null,null,-1),ie={class:"paginator"},pe={__name:"ListaUsuarios",setup(i){const t=c([]),o=c(!1),m=c(1e3),g=c("60vh"),I=c(""),y=c(!1),S=c(0),z=c(null),h=Q({password:""}),M=c({page:1}),j=[{title:"Nombres",dataIndex:"nombres",fixed:"left",width:180},{title:"Apellidos",dataIndex:"apellidos",fixed:"left",width:180},{title:"N° documento",dataIndex:"nro_documento",align:"center"},{title:"Usuario",dataIndex:"usuario",align:"center"},{title:"Correo",dataIndex:"correo",width:180},{title:"Celular",dataIndex:"celular",align:"center"},{title:"Tipo de usuario",dataIndex:"tipo_usuario",align:"center"},{title:"Estado",dataIndex:"estado",align:"center"},{title:"",dataIndex:"actions",width:"55px"}],B=n=>{console.log(n)},T=n=>{M.value.page=n,A()},A=async()=>{try{o.value=!0;const n=await E({url:"/users",method:"GET",params:M.value});t.value=n.data,S.value=n.total}catch(n){console.error("Error de red:",n)}finally{o.value=!1}},D=n=>{y.value=!0,z.value=n},L=async()=>{if(!h.password)return P.error("El campo contraseña esta vacío");const n=z.value,u={new_password:h.password},b=await E({url:`/user/change-password/${n}`,method:"POST",data:u});b.message&&(h.password="",P.success(b.message)),y.value=!1};return W(A),(n,u)=>{const b=s("a-button"),V=s("a-input-search"),f=s("a-tag"),x=s("a-menu-item"),$=s("a-menu"),G=s("a-dropdown"),q=s("a-table"),F=s("a-pagination"),H=s("a-input"),J=s("a-form-item"),R=s("a-form"),X=s("a-modal");return l(),k(O,null,[w("div",se,[le,w("div",re,[a(b,null,{icon:e(()=>[a(U(ee))]),default:e(()=>[r(" Exportar en excel ")]),_:1}),ue,a(V,{value:I.value,"onUpdate:value":u[0]||(u[0]=d=>I.value=d),placeholder:"Buscar","enter-button":"",onSearch:B},null,8,["value"])]),a(q,{bordered:"",class:"ant-table-striped",scroll:{x:m.value,y:g.value},columns:j,"data-source":t.value,pagination:!1,loading:o.value,size:"small"},{bodyCell:e(({column:d,record:v})=>[d.dataIndex=="tipo_usuario"?(l(),k(O,{key:0},[v.tipo_usuario===1?(l(),p(f,{key:0,bordered:!1,color:"processing"},{default:e(()=>[r("Administrador")]),_:1})):_("",!0),v.tipo_usuario===2?(l(),p(f,{key:1,bordered:!1,color:"magenta"},{default:e(()=>[r("Común")]),_:1})):_("",!0),v.tipo_usuario===3?(l(),p(f,{key:2,bordered:!1,color:"purple"},{default:e(()=>[r("3")]),_:1})):_("",!0),v.tipo_usuario===4?(l(),p(f,{key:3,bordered:!1,color:"warning"},{default:e(()=>[r("4")]),_:1})):_("",!0),v.tipo_usuario===5?(l(),p(f,{key:4,bordered:!1,color:"cyan"},{default:e(()=>[r("5")]),_:1})):_("",!0)],64)):_("",!0),d.dataIndex=="estado"?(l(),k(O,{key:1},[v.estado===1?(l(),p(f,{key:0,color:"success"},{default:e(()=>[r("Activo")]),_:1})):(l(),p(f,{key:1,color:"error"},{default:e(()=>[r("Inactivo")]),_:1}))],64)):_("",!0),d.dataIndex=="actions"?(l(),p(G,{key:2,trigger:["click"]},{overlay:e(()=>[a($,null,{default:e(()=>[a(x,{key:"1"},{default:e(()=>[r("Editar")]),_:1}),a(x,{key:"2"},{default:e(()=>[r("Dar de baja / Activar")]),_:1}),a(x,{key:"3",onClick:de=>D(v.idUsuario)},{default:e(()=>[r(" Actualizar clave")]),_:2},1032,["onClick"])]),_:2},1024)]),default:e(()=>[a(b,{onClick:u[1]||(u[1]=Z(()=>{},["prevent"])),shape:"circle",size:"small",icon:K(U(ne))},null,8,["icon"])]),_:2},1024)):_("",!0)]),_:1},8,["scroll","data-source","loading"])]),w("div",ie,[a(F,{size:"small",total:S.value,pageSize:20,onChange:T,showSizeChanger:!1},null,8,["total"])]),a(X,{"ok-text":"Cambiar contraseña",open:y.value,"onUpdate:open":u[3]||(u[3]=d=>y.value=d),title:"Actualizar contraseña",onOk:L},{default:e(()=>[a(R,{layout:"vertical",model:h,name:"basic",autocomplete:"off"},{default:e(()=>[a(J,{label:"Contraseña",name:"password"},{default:e(()=>[a(H,{value:h.password,"onUpdate:value":u[2]||(u[2]=d=>h.password=d)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}};export{pe as default};
