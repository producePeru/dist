<<<<<<<< HEAD:assets/SupervisoresLista-8a2fe78f.js
import{r as e,u as X,v as Y,H as $,k as J,b as m,o,d as l,e as _,c as f,w as D,F as i,z as K,i as d,t,s as r,p as Q,j as W}from"./index-b9a4a8cb.js";import{u as Z}from"./selectes-39ccac6b.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const P=c=>(Q("data-v-2d6451a0"),c=c(),W(),c),ae=P(()=>_("h3",null,"USUARIOS",-1)),te=P(()=>_("div",{class:"filters-dig"},null,-1)),ne={class:"paginator"},L=20,se={__name:"SupervisoresLista",setup(c){const g=Z();g.$patch({cdes:g.cdes});const x=e(!1),B=n=>{console.log("open",n)};e(!1),e(!1),e(!1),e(0),e(!1),e(!1),e(!1),e("solicitante"),e(5);const w=e([]),v=e(!1),I=e(0);X();const p=e({page:1});e("");const O=e("supervisores/list");e([]),e(null);const V=e(1200),y=e(window.innerHeight-100),h=()=>{y.value=window.innerHeight-300};Y(()=>{window.removeEventListener("resize",h)});const H=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",align:"center",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:200},{title:"Celular",dataIndex:"phone",width:180,align:"center"},{title:"Email",dataIndex:"email",width:180},{title:"Oficina",dataIndex:"office",width:140},{title:"CDE",dataIndex:"cde",width:140},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}];e([{value:1,label:"Aprobado"},{value:2,label:"Desaprobado"},{value:3,label:"Pendiente"}]);const R=n=>{p.value.page=n,b()},b=async()=>{try{v.value=!0;let n=p.value.page==1?"":p.value;const u=await K({url:O.value,method:"GET",params:n});w.value=u.data,I.value=u.total}catch(n){console.error("Error de red:",n)}finally{v.value=!1}},F=$(()=>n=>(p.value.page-1)*L+n+1);return J(()=>{b(),window.addEventListener("resize",h),h()}),(n,u)=>{const T=m("a-table"),j=m("a-pagination"),q=m("EditarProfileUsuario"),G=m("a-drawer");return o(),l(i,null,[_("div",null,[ae,te,f(T,{bordered:"",scroll:{x:V.value,y:y.value},class:"ant-table-striped",columns:H,"data-source":w.value,pagination:!1,loading:v.value,size:"small"},{bodyCell:D(({column:a,record:s,index:M})=>{var S,k,C,E,z,N,U,A;return[a.dataIndex=="idx"?(o(),l(i,{key:0},[d(t(F.value(M)),1)],64)):r("",!0),a.dataIndex=="lastName"?(o(),l(i,{key:1},[d(t(s.last_name)+" "+t(s.middle_name),1)],64)):r("",!0),a.dataIndex=="documentnumber"?(o(),l(i,{key:2},[d(t((S=s.profile)==null?void 0:S.documentnumber),1)],64)):r("",!0),a.dataIndex=="name"?(o(),l(i,{key:3},[d(t((k=s.profile)==null?void 0:k.name),1)],64)):r("",!0),a.dataIndex=="lastname"?(o(),l(i,{key:4},[d(t((C=s.profile)==null?void 0:C.lastname)+" "+t((E=s.profile)==null?void 0:E.middlename),1)],64)):r("",!0),a.dataIndex=="phone"?(o(),l(i,{key:5},[d(t((z=s.profile)==null?void 0:z.phone),1)],64)):r("",!0),a.dataIndex=="office"?(o(),l(i,{key:6},[d(t((N=s.office)==null?void 0:N.name),1)],64)):r("",!0),a.dataIndex=="email"?(o(),l(i,{key:7},[d(t((U=s.user)==null?void 0:U.email),1)],64)):r("",!0),a.dataIndex=="cde"?(o(),l(i,{key:8},[d(t((A=s.cde)==null?void 0:A.name),1)],64)):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),_("div",ne,[f(j,{size:"small",total:I.value,pageSize:L,onChange:R,showSizeChanger:!1},null,8,["total"])]),f(G,{open:x.value,"onUpdate:open":u[0]||(u[0]=a=>x.value=a),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:B},{default:D(()=>[f(q)]),_:1},8,["open"])],64)}}},de=ee(se,[["__scopeId","data-v-2d6451a0"]]);export{de as default};
========
import{r as e,u as X,v as Y,H as $,k as J,b as m,o,d as l,e as _,c as f,w as D,F as i,z as K,i as d,t,s as r,p as Q,j as W}from"./index-65e669a4.js";import{u as Z}from"./selectes-f74fa27c.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const P=c=>(Q("data-v-2d6451a0"),c=c(),W(),c),ae=P(()=>_("h3",null,"USUARIOS",-1)),te=P(()=>_("div",{class:"filters-dig"},null,-1)),ne={class:"paginator"},L=20,se={__name:"SupervisoresLista",setup(c){const g=Z();g.$patch({cdes:g.cdes});const x=e(!1),B=n=>{console.log("open",n)};e(!1),e(!1),e(!1),e(0),e(!1),e(!1),e(!1),e("solicitante"),e(5);const w=e([]),v=e(!1),I=e(0);X();const p=e({page:1});e("");const O=e("supervisores/list");e([]),e(null);const V=e(1200),y=e(window.innerHeight-100),h=()=>{y.value=window.innerHeight-300};Y(()=>{window.removeEventListener("resize",h)});const H=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",align:"center",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:200},{title:"Celular",dataIndex:"phone",width:180,align:"center"},{title:"Email",dataIndex:"email",width:180},{title:"Oficina",dataIndex:"office",width:140},{title:"CDE",dataIndex:"cde",width:140},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}];e([{value:1,label:"Aprobado"},{value:2,label:"Desaprobado"},{value:3,label:"Pendiente"}]);const R=n=>{p.value.page=n,b()},b=async()=>{try{v.value=!0;let n=p.value.page==1?"":p.value;const u=await K({url:O.value,method:"GET",params:n});w.value=u.data,I.value=u.total}catch(n){console.error("Error de red:",n)}finally{v.value=!1}},F=$(()=>n=>(p.value.page-1)*L+n+1);return J(()=>{b(),window.addEventListener("resize",h),h()}),(n,u)=>{const T=m("a-table"),j=m("a-pagination"),q=m("EditarProfileUsuario"),G=m("a-drawer");return o(),l(i,null,[_("div",null,[ae,te,f(T,{bordered:"",scroll:{x:V.value,y:y.value},class:"ant-table-striped",columns:H,"data-source":w.value,pagination:!1,loading:v.value,size:"small"},{bodyCell:D(({column:a,record:s,index:M})=>{var S,k,C,E,z,N,U,A;return[a.dataIndex=="idx"?(o(),l(i,{key:0},[d(t(F.value(M)),1)],64)):r("",!0),a.dataIndex=="lastName"?(o(),l(i,{key:1},[d(t(s.last_name)+" "+t(s.middle_name),1)],64)):r("",!0),a.dataIndex=="documentnumber"?(o(),l(i,{key:2},[d(t((S=s.profile)==null?void 0:S.documentnumber),1)],64)):r("",!0),a.dataIndex=="name"?(o(),l(i,{key:3},[d(t((k=s.profile)==null?void 0:k.name),1)],64)):r("",!0),a.dataIndex=="lastname"?(o(),l(i,{key:4},[d(t((C=s.profile)==null?void 0:C.lastname)+" "+t((E=s.profile)==null?void 0:E.middlename),1)],64)):r("",!0),a.dataIndex=="phone"?(o(),l(i,{key:5},[d(t((z=s.profile)==null?void 0:z.phone),1)],64)):r("",!0),a.dataIndex=="office"?(o(),l(i,{key:6},[d(t((N=s.office)==null?void 0:N.name),1)],64)):r("",!0),a.dataIndex=="email"?(o(),l(i,{key:7},[d(t((U=s.user)==null?void 0:U.email),1)],64)):r("",!0),a.dataIndex=="cde"?(o(),l(i,{key:8},[d(t((A=s.cde)==null?void 0:A.name),1)],64)):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),_("div",ne,[f(j,{size:"small",total:I.value,pageSize:L,onChange:R,showSizeChanger:!1},null,8,["total"])]),f(G,{open:x.value,"onUpdate:open":u[0]||(u[0]=a=>x.value=a),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:B},{default:D(()=>[f(q)]),_:1},8,["open"])],64)}}},de=ee(se,[["__scopeId","data-v-2d6451a0"]]);export{de as default};
>>>>>>>> 5e888923362131c7a0ba71c6069c97a0973130dd:assets/SupervisoresLista-311de510.js
