import{r as e,u as j,X as G,E as K,j as M,b as c,o as s,d as o,e as m,c as f,w as A,F as i,K as Y,i as r,t,q as u}from"./index-61e3a352.js";import{u as $}from"./selectes-1c4d74af.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"paginator"},D=20,W={__name:"SupervisoresLista",setup(Z){const g=$();g.$patch({cdes:g.cdes});const x=e(!1),L=n=>{console.log("open",n)};e(!1),e(!1),e(!1),e(0),e(!1),e(!1),e(!1),e("solicitante"),e(5);const h=e([]),v=e(!1),w=e(0);j();const p=e({page:1});e("");const P=e("supervisores/list");e([]),e(null);const B=e(1200),I=e(window.innerHeight-100),_=()=>{I.value=window.innerHeight-300};G(()=>{window.removeEventListener("resize",_)});const O=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",align:"center",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:200},{title:"Celular",dataIndex:"phone",width:180,align:"center"},{title:"Email",dataIndex:"email",width:180},{title:"Oficina",dataIndex:"office",width:140},{title:"CDE",dataIndex:"cde",width:140},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}];e([{value:1,label:"Aprobado"},{value:2,label:"Desaprobado"},{value:3,label:"Pendiente"}]);const V=n=>{p.value.page=n,y()},y=async()=>{try{v.value=!0;let n=p.value.page==1?"":p.value;const d=await Y({url:P.value,method:"GET",params:n});h.value=d.data,w.value=d.total}catch(n){console.error("Error de red:",n)}finally{v.value=!1}},R=K(()=>n=>(p.value.page-1)*D+n+1);return M(()=>{y(),window.addEventListener("resize",_),_()}),(n,d)=>{const q=c("a-table"),F=c("a-pagination"),H=c("EditarProfileUsuario"),T=c("a-drawer");return s(),o(i,null,[m("div",null,[d[1]||(d[1]=m("h3",null,"USUARIOS",-1)),d[2]||(d[2]=m("div",{class:"filters-dig"},null,-1)),f(q,{bordered:"",scroll:{x:B.value,y:I.value},class:"ant-table-striped",columns:O,"data-source":h.value,pagination:!1,loading:v.value,size:"small"},{bodyCell:A(({column:a,record:l,index:X})=>{var b,k,C,E,S,z,N,U;return[a.dataIndex=="idx"?(s(),o(i,{key:0},[r(t(R.value(X)),1)],64)):u("",!0),a.dataIndex=="lastName"?(s(),o(i,{key:1},[r(t(l.last_name)+" "+t(l.middle_name),1)],64)):u("",!0),a.dataIndex=="documentnumber"?(s(),o(i,{key:2},[r(t((b=l.profile)==null?void 0:b.documentnumber),1)],64)):u("",!0),a.dataIndex=="name"?(s(),o(i,{key:3},[r(t((k=l.profile)==null?void 0:k.name),1)],64)):u("",!0),a.dataIndex=="lastname"?(s(),o(i,{key:4},[r(t((C=l.profile)==null?void 0:C.lastname)+" "+t((E=l.profile)==null?void 0:E.middlename),1)],64)):u("",!0),a.dataIndex=="phone"?(s(),o(i,{key:5},[r(t((S=l.profile)==null?void 0:S.phone),1)],64)):u("",!0),a.dataIndex=="office"?(s(),o(i,{key:6},[r(t((z=l.office)==null?void 0:z.name),1)],64)):u("",!0),a.dataIndex=="email"?(s(),o(i,{key:7},[r(t((N=l.user)==null?void 0:N.email),1)],64)):u("",!0),a.dataIndex=="cde"?(s(),o(i,{key:8},[r(t((U=l.cde)==null?void 0:U.name),1)],64)):u("",!0)]}),_:1},8,["scroll","data-source","loading"])]),m("div",Q,[f(F,{size:"small",total:w.value,pageSize:D,onChange:V,showSizeChanger:!1},null,8,["total"])]),f(T,{open:x.value,"onUpdate:open":d[0]||(d[0]=a=>x.value=a),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:L},{default:A(()=>[f(H)]),_:1},8,["open"])],64)}}},ne=J(W,[["__scopeId","data-v-2d6451a0"]]);export{ne as default};
