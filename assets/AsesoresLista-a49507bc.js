import{r as o,u as F,K as H,l as j,d as l,o as r,e as u,f as i,c as t,w as a,F as m,m as A,j as p,t as _,v,s as K,i as R,R as Q,E as X,S as Y,h as J}from"./index-79c492b1.js";import{M as W}from"./MoreOutlined-f1a82698.js";const Z=i("h3",null,"ASESORES",-1),ee={class:"filters-asesorias"},te=["onClick"],ae=i("a",null,"Eliminar",-1),ne={class:"paginator"},ie={__name:"AsesoresLista",setup(oe){const w=o("asesor"),h=o(2),x=o([]),d=o(!1),y=o(0),k=F(),C=o({page:1}),B=o(1200),I=o(window.innerHeight-100),f=()=>{I.value=window.innerHeight-300};H(()=>{window.removeEventListener("resize",f)});const D=[{title:"Apellidos",dataIndex:"lastName",fixed:"left",width:200},{title:"Nombres",dataIndex:"name",fixed:"left",width:120},{title:"Tipo documento",dataIndex:"document_type",align:"center",width:100},{title:"Num. documento",dataIndex:"number_document",align:"center",width:120},{title:"Departamento",dataIndex:"departamento",align:"center",width:140},{title:"Provincia",dataIndex:"province",align:"center",width:140},{title:"Distrito",dataIndex:"distrite",align:"center",width:140},{title:"Correo",dataIndex:"email",width:180},{title:"Celular",dataIndex:"phone",width:100},{title:"",dataIndex:"actions",align:"center",width:50}],M=e=>{C.value.page=e,g()},$=e=>{const n={rol:w.value,dni:e.number_document,access:h.value};k.push({name:"actualizar-persona",query:n})},L=()=>{const e={rol:w.value,access:h.value};k.push({name:"registrar-persona",query:e})},O=async e=>{try{d.value=!0;const n=await A({url:`person-dni/${e.number_document}/${h.value}`,method:"PUT"});g(),J.success(n.message)}catch(n){console.error("Error de red:",n)}finally{d.value=!1}},g=async()=>{try{d.value=!0;const e=await A({url:`/person/${h.value}`,method:"GET",params:C.value});x.value=e.data,y.value=e.total}catch(e){console.error("Error de red:",e)}finally{d.value=!1}};return j(()=>{g(),window.addEventListener("resize",f),f()}),(e,n)=>{const E=l("a-button"),b=l("a-menu-item"),T=l("a-popconfirm"),U=l("a-menu"),V=l("a-dropdown"),q=l("a-table"),G=l("a-pagination");return r(),u(m,null,[i("div",null,[Z,i("div",ee,[t(E,{type:"primary",onClick:L},{default:a(()=>[p("AGREGAR")]),_:1})]),t(q,{bordered:"",scroll:{x:B.value,y:I.value},class:"ant-table-striped",columns:D,"data-source":x.value,pagination:!1,loading:d.value,size:"small"},{bodyCell:a(({column:c,record:s})=>{var z,N,S;return[c.dataIndex=="lastName"?(r(),u(m,{key:0},[p(_(s.last_name)+" "+_(s.middle_name),1)],64)):v("",!0),c.dataIndex=="departamento"?(r(),u(m,{key:1},[p(_((z=s.department)==null?void 0:z.descripcion),1)],64)):v("",!0),c.dataIndex=="province"?(r(),u(m,{key:2},[p(_((N=s.province)==null?void 0:N.descripcion),1)],64)):v("",!0),c.dataIndex=="distrite"?(r(),u(m,{key:3},[p(_((S=s.district)==null?void 0:S.descripcion),1)],64)):v("",!0),c.dataIndex=="actions"?(r(),K(V,{key:4,trigger:["click"]},{overlay:a(()=>[t(U,null,{default:a(()=>[t(b,null,{default:a(()=>[i("a",{onClick:P=>$(s)},"Editar",8,te)]),_:2},1024),t(b,null,{default:a(()=>[t(T,{title:"¿Eliminar?",onConfirm:P=>O(s)},{icon:a(()=>[t(R(Q),{style:{color:"red"}})]),default:a(()=>[ae]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[i("a",{class:"ant-dropdown-link",onClick:n[0]||(n[0]=X(()=>{},["prevent"]))},[t(E,{shape:"circle",icon:Y(R(W)),size:"small"},null,8,["icon"])])]),_:2},1024)):v("",!0)]}),_:1},8,["scroll","data-source","loading"])]),i("div",ne,[t(G,{size:"small",total:y.value,pageSize:20,onChange:M,showSizeChanger:!1},null,8,["total"])])],64)}}};export{ie as default};