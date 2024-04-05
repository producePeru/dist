import{r as o,u as F,L as H,k as Q,b as l,o as r,d as u,e as i,c as t,w as a,F as m,m as L,i as p,t as _,s as v,q as X,h as T,R as Y,G as j,S as J,g as K}from"./index-35a7835d.js";import{M as W}from"./MoreOutlined-a90e8d58.js";const Z=i("h3",null,"SOLICITANTES",-1),ee={class:"filters"},te=["onClick"],ae=i("a",null,"Eliminar",-1),ne={class:"paginator"},ie={__name:"SolicitantesLista",setup(oe){const w=o("solicitante"),h=o(3),x=o([]),d=o(!1),y=o(0),I=F(),k=o({page:1}),A=o(1200),C=o(window.innerHeight-100),f=()=>{C.value=window.innerHeight-300};H(()=>{window.removeEventListener("resize",f)});const B=[{title:"Apellidos",dataIndex:"lastName",fixed:"left",width:200},{title:"Nombres",dataIndex:"name",fixed:"left",width:120},{title:"Tipo documento",dataIndex:"document_type",align:"center",width:100},{title:"Num. documento",dataIndex:"number_document",align:"center",width:120},{title:"Departamento",dataIndex:"departamento",align:"center",width:140},{title:"Provincia",dataIndex:"province",align:"center",width:140},{title:"Distrito",dataIndex:"distrite",align:"center",width:140},{title:"Correo",dataIndex:"email",width:180},{title:"Celular",dataIndex:"phone",width:100},{title:"",dataIndex:"actions",align:"center",width:50}],D=e=>{k.value.page=e,g()},M=e=>{const n={rol:w.value,dni:e.number_document,access:h.value};I.push({name:"actualizar-persona",query:n})},R=()=>{const e={rol:w.value,access:h.value};I.push({name:"registrar-persona",query:e})},$=async e=>{try{d.value=!0;const n=await L({url:`person-dni/${e.number_document}/${h.value}`,method:"PUT"});g(),K.success(n.message)}catch(n){console.error("Error de red:",n)}finally{d.value=!1}},g=async()=>{try{d.value=!0;const e=await L({url:`/person/${h.value}`,method:"GET",params:k.value});x.value=e.data,y.value=e.total}catch(e){console.error("Error de red:",e)}finally{d.value=!1}};return Q(()=>{g(),window.addEventListener("resize",f),f()}),(e,n)=>{const b=l("a-button"),E=l("a-menu-item"),q=l("a-popconfirm"),G=l("a-menu"),O=l("a-dropdown"),U=l("a-table"),V=l("a-pagination");return r(),u(m,null,[i("div",null,[Z,i("div",ee,[t(b,{type:"primary",onClick:R},{default:a(()=>[p("AGREGAR")]),_:1})]),t(U,{bordered:"",scroll:{x:A.value,y:C.value},class:"ant-table-striped",columns:B,"data-source":x.value,pagination:!1,loading:d.value,size:"small"},{bodyCell:a(({column:c,record:s})=>{var z,N,S;return[c.dataIndex=="lastName"?(r(),u(m,{key:0},[p(_(s.last_name)+" "+_(s.middle_name),1)],64)):v("",!0),c.dataIndex=="departamento"?(r(),u(m,{key:1},[p(_((z=s.department)==null?void 0:z.descripcion),1)],64)):v("",!0),c.dataIndex=="province"?(r(),u(m,{key:2},[p(_((N=s.province)==null?void 0:N.descripcion),1)],64)):v("",!0),c.dataIndex=="distrite"?(r(),u(m,{key:3},[p(_((S=s.district)==null?void 0:S.descripcion),1)],64)):v("",!0),c.dataIndex=="actions"?(r(),X(O,{key:4,trigger:["click"]},{overlay:a(()=>[t(G,null,{default:a(()=>[t(E,null,{default:a(()=>[i("a",{onClick:P=>M(s)},"Editar",8,te)]),_:2},1024),t(E,null,{default:a(()=>[t(q,{title:"¿Eliminar?",onConfirm:P=>$(s)},{icon:a(()=>[t(T(Y),{style:{color:"red"}})]),default:a(()=>[ae]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[i("a",{class:"ant-dropdown-link",onClick:n[0]||(n[0]=j(()=>{},["prevent"]))},[t(b,{shape:"circle",icon:J(T(W)),size:"small"},null,8,["icon"])])]),_:2},1024)):v("",!0)]}),_:1},8,["scroll","data-source","loading"])]),i("div",ne,[t(V,{size:"small",total:y.value,pageSize:20,onChange:D,showSizeChanger:!1},null,8,["total"])])],64)}}};export{ie as default};
