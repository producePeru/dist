import{r as e,u as X,x as Y,I as $,k as J,b as _,o,d as l,e as f,c as m,w as A,F as i,z as K,i as d,t,s as r,p as Q,j as W}from"./index-9e23a720.js";import{u as Z}from"./selectes-b6b28f01.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const P=c=>(Q("data-v-bb797049"),c=c(),W(),c),ae=P(()=>f("h3",null,"USUARIOS",-1)),te=P(()=>f("div",{class:"filters-dig"},null,-1)),ne={class:"paginator"},D=20,se={__name:"SupervisoresLista",setup(c){const g=Z();g.$patch({cdes:g.cdes});const h=e(!1),B=n=>{console.log("open",n)};e(!1),e(!1),e(!1),e(0),e(!1),e(!1),e(!1),e("solicitante"),e(5);const I=e([]),v=e(!1),w=e(0);X();const p=e({page:1});e("");const O=e("supervisores/list");e([]),e(null);const V=e(1200),b=e(window.innerHeight-100),x=()=>{b.value=window.innerHeight-300};Y(()=>{window.removeEventListener("resize",x)});const R=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"DNI",dataIndex:"documentnumber",fixed:"left",align:"center",width:100},{title:"Nombres",dataIndex:"name",width:120},{title:"Apellidos",dataIndex:"lastname",width:200},{title:"Celular",dataIndex:"phone",width:180,align:"center"},{title:"Email",dataIndex:"email",width:180},{title:"Oficina",dataIndex:"office",width:140},{title:"CDE",dataIndex:"cde",width:140},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}];e([{value:1,label:"Aprobado"},{value:2,label:"Desaprobado"},{value:3,label:"Pendiente"}]);const F=n=>{p.value.page=n,y()},y=async()=>{try{v.value=!0;let n=p.value.page==1?"":p.value;const u=await K({url:O.value,method:"GET",params:n});I.value=u.data,w.value=u.total}catch(n){console.error("Error de red:",n)}finally{v.value=!1}},H=$(()=>n=>(p.value.page-1)*D+n+1);return J(()=>{y(),window.addEventListener("resize",x),x()}),(n,u)=>{const T=_("a-table"),j=_("a-pagination"),q=_("EditarProfileUsuario"),G=_("a-drawer");return o(),l(i,null,[f("div",null,[ae,te,m(T,{bordered:"",scroll:{x:V.value,y:b.value},class:"ant-table-striped",columns:R,"data-source":I.value,pagination:!1,loading:v.value,size:"small"},{bodyCell:A(({column:a,record:s,index:M})=>{var S,k,C,E,z,N,L,U;return[a.dataIndex=="idx"?(o(),l(i,{key:0},[d(t(H.value(M)),1)],64)):r("",!0),a.dataIndex=="lastName"?(o(),l(i,{key:1},[d(t(s.last_name)+" "+t(s.middle_name),1)],64)):r("",!0),a.dataIndex=="documentnumber"?(o(),l(i,{key:2},[d(t((S=s.profile)==null?void 0:S.documentnumber),1)],64)):r("",!0),a.dataIndex=="name"?(o(),l(i,{key:3},[d(t((k=s.profile)==null?void 0:k.name),1)],64)):r("",!0),a.dataIndex=="lastname"?(o(),l(i,{key:4},[d(t((C=s.profile)==null?void 0:C.lastname)+" "+t((E=s.profile)==null?void 0:E.middlename),1)],64)):r("",!0),a.dataIndex=="phone"?(o(),l(i,{key:5},[d(t((z=s.profile)==null?void 0:z.phone),1)],64)):r("",!0),a.dataIndex=="office"?(o(),l(i,{key:6},[d(t((N=s.office)==null?void 0:N.name),1)],64)):r("",!0),a.dataIndex=="email"?(o(),l(i,{key:7},[d(t((L=s.user)==null?void 0:L.email),1)],64)):r("",!0),a.dataIndex=="cde"?(o(),l(i,{key:8},[d(t((U=s.cde)==null?void 0:U.name),1)],64)):r("",!0)]}),_:1},8,["scroll","data-source","loading"])]),f("div",ne,[m(j,{size:"small",total:w.value,pageSize:D,onChange:F,showSizeChanger:!1},null,8,["total"])]),m(G,{open:h.value,"onUpdate:open":u[0]||(u[0]=a=>h.value=a),class:"draw-notary",title:"Editar Perfil",placement:"right",onAfterOpenChange:B},{default:A(()=>[m(q)]),_:1},8,["open"])],64)}}},de=ee(se,[["__scopeId","data-v-bb797049"]]);export{de as default};
