<<<<<<<< HEAD:assets/DriveVerMisArchivos-a842a73a.js
import{g as Z,r as t,H as ee,v as ae,k as te,b as d,o as c,d as g,e as l,U as oe,W as ne,c as n,w as o,i as x,q as C,s as u,F as z,z as D,t as p,h as b,P as se,Q as le,I as ie,M as re,X as de,m as ce,G as ue,R as pe}from"./index-b9a4a8cb.js";import{D as me}from"./DrawDriveUsers.component-1c40f01a.js";import{M as ve}from"./MoreOutlined-bcfb934c.js";import"./_plugin-vue_export-helper-c27b6911.js";const _e=l("h3",null,"MIS ARCHIVOS",-1),he={class:"w-search"},ge={key:1},fe={key:2,class:"uppercase"},we=["onClick"],ye=l("a",null,"Eliminar",-1),ke={class:"paginator-drive"},xe=20,Ae={__name:"DriveVerMisArchivos",setup(Ce){const E=JSON.parse(localStorage.getItem("role"));JSON.parse(localStorage.getItem("profile"));const R="https://apituempresa.soporte-pnte.com/api/",U="http://127.0.0.1:8000/api/",H=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?U:R,V=Z.get("token"),I=t(null),f=t(!1),m=t({}),A=t([]),_=t(!1),w=t(0);t(0);const S=t(null);t(""),t(!1);const B=t([]),$=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:40},{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},...E[0].id===3||E[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],F=ee(()=>e=>(h.value.page-1)*xe+e+1),N=async e=>{var a;I.value=e.id;try{const s=await D({url:`drive/users-selected/${e.id}`,method:"GET"});s.data[0]&&(S.value=(a=s.data[0])==null?void 0:a.user_ids)}catch(s){console.error("Error de red:",s)}f.value=!0},L=()=>{f.value=!1},T=async e=>{try{const a=await D({url:`drive/delete-file/${e.id}`,method:"DELETE"});a.status==500?de.warning({title:"Aviso",content:a.message}):(k(),ce.success(a.message))}catch(a){console.error("Error de red:",a)}},Y=async e=>{m.value={...m.value,[e]:!0};try{const a=await ue.get(`${H}drive/download/${e}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${V}`}}),s=window.URL.createObjectURL(new Blob([a.data])),i=document.createElement("a");i.href=s,i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(a){console.error("Error al descargar el archivo",a)}finally{m.value={...m.value,[e]:!1}}},G=e=>pe(e).format("DD/MM/YYYY HH:mm A"),O=t(window.innerHeight-100),y=()=>{O.value=window.innerHeight-300};ae(()=>{window.removeEventListener("resize",y)});const h=t({page:1}),j=e=>{h.value.page=e,k()},k=async()=>{try{_.value=!0;let e=h.value.page==1?"":h.value;const{data:a}=await D({url:"drive/list-files",method:"GET",params:e});A.value=a.data,w.value=a.total}catch(e){console.error("Error de red:",e)}finally{_.value=!1}};return te(()=>{k(),window.addEventListener("resize",y),y()}),(e,a)=>{const s=d("a-button"),i=d("a-menu-item"),q=d("a-popconfirm"),J=d("a-menu"),P=d("a-dropdown"),Q=d("a-table"),W=d("a-tag"),X=d("a-pagination");return c(),g(z,null,[l("div",null,[_e,oe(l("div",he,null,512),[[ne,!_.value]]),n(Q,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:O.value},columns:$,"data-source":A.value,pagination:!1,loading:_.value,size:"small"},{bodyCell:o(({column:v,record:r,index:K})=>[v.dataIndex=="idx"?(c(),g(z,{key:0},[x(p(F.value(K)),1)],64)):u("",!0),v.dataIndex=="date"?(c(),g("div",ge,p(G(r.created_at)),1)):u("",!0),v.dataIndex=="user"?(c(),g("div",fe,p(r.profile.name)+" "+p(r.profile.lastname)+" "+p(r.profile.middlename),1)):u("",!0),v.dataIndex=="download"?(c(),C(s,{key:3,size:"small",onClick:M=>Y(r.path),type:"primary",ghost:"",loading:m.value[r.path]},{icon:o(()=>[n(b(se))]),default:o(()=>[x(" Descargar ")]),_:2},1032,["onClick","loading"])):u("",!0),v.dataIndex=="actions"?(c(),C(P,{key:4,trigger:["click"]},{overlay:o(()=>[n(J,null,{default:o(()=>[n(i,null,{default:o(()=>[l("a",{onClick:M=>N(r)},"Visible para",8,we)]),_:2},1024),n(i,null,{default:o(()=>[n(q,{title:"¿Seguro de eliminar?",onConfirm:M=>T(r)},{icon:o(()=>[n(b(le),{style:{color:"red"}})]),default:o(()=>[ye]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[l("a",{class:"ant-dropdown-link",onClick:a[0]||(a[0]=ie(()=>{},["prevent"]))},[n(s,{shape:"circle",icon:re(b(ve))},null,8,["icon"])])]),_:2},1024)):u("",!0)]),_:1},8,["scroll","data-source","loading"])]),l("div",ke,[l("span",null,[n(W,{color:"blue"},{default:o(()=>[l("b",null,p(w.value),1)]),_:1}),x(" Archivos Subidos")]),n(X,{size:"small",pageSize:20,total:w.value,onChange:j,showSizeChanger:!1},null,8,["total"])]),f.value?(c(),C(me,{key:0,plainOptions:B.value,idFile:I.value,selectedUsers:S.value,onHandleCloseDrawer:L},null,8,["plainOptions","idFile","selectedUsers"])):u("",!0)],64)}}};export{Ae as default};
========
import{g as Z,r as t,H as ee,v as ae,k as te,b as d,o as c,d as g,e as l,U as oe,W as ne,c as n,w as o,i as x,q as C,s as u,F as z,z as D,t as p,h as b,P as se,Q as le,I as ie,M as re,X as de,m as ce,G as ue,R as pe}from"./index-65e669a4.js";import{D as me}from"./DrawDriveUsers.component-6fa36bc3.js";import{M as ve}from"./MoreOutlined-c763702c.js";import"./_plugin-vue_export-helper-c27b6911.js";const _e=l("h3",null,"MIS ARCHIVOS",-1),he={class:"w-search"},ge={key:1},fe={key:2,class:"uppercase"},we=["onClick"],ye=l("a",null,"Eliminar",-1),ke={class:"paginator-drive"},xe=20,Ae={__name:"DriveVerMisArchivos",setup(Ce){const E=JSON.parse(localStorage.getItem("role"));JSON.parse(localStorage.getItem("profile"));const R="https://apituempresa.soporte-pnte.com/api/",U="http://127.0.0.1:8000/api/",H=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?U:R,V=Z.get("token"),I=t(null),f=t(!1),m=t({}),A=t([]),_=t(!1),w=t(0);t(0);const S=t(null);t(""),t(!1);const B=t([]),$=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:40},{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},...E[0].id===3||E[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],F=ee(()=>e=>(h.value.page-1)*xe+e+1),N=async e=>{var a;I.value=e.id;try{const s=await D({url:`drive/users-selected/${e.id}`,method:"GET"});s.data[0]&&(S.value=(a=s.data[0])==null?void 0:a.user_ids)}catch(s){console.error("Error de red:",s)}f.value=!0},L=()=>{f.value=!1},T=async e=>{try{const a=await D({url:`drive/delete-file/${e.id}`,method:"DELETE"});a.status==500?de.warning({title:"Aviso",content:a.message}):(k(),ce.success(a.message))}catch(a){console.error("Error de red:",a)}},Y=async e=>{m.value={...m.value,[e]:!0};try{const a=await ue.get(`${H}drive/download/${e}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${V}`}}),s=window.URL.createObjectURL(new Blob([a.data])),i=document.createElement("a");i.href=s,i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(a){console.error("Error al descargar el archivo",a)}finally{m.value={...m.value,[e]:!1}}},G=e=>pe(e).format("DD/MM/YYYY HH:mm A"),O=t(window.innerHeight-100),y=()=>{O.value=window.innerHeight-300};ae(()=>{window.removeEventListener("resize",y)});const h=t({page:1}),j=e=>{h.value.page=e,k()},k=async()=>{try{_.value=!0;let e=h.value.page==1?"":h.value;const{data:a}=await D({url:"drive/list-files",method:"GET",params:e});A.value=a.data,w.value=a.total}catch(e){console.error("Error de red:",e)}finally{_.value=!1}};return te(()=>{k(),window.addEventListener("resize",y),y()}),(e,a)=>{const s=d("a-button"),i=d("a-menu-item"),q=d("a-popconfirm"),J=d("a-menu"),P=d("a-dropdown"),Q=d("a-table"),W=d("a-tag"),X=d("a-pagination");return c(),g(z,null,[l("div",null,[_e,oe(l("div",he,null,512),[[ne,!_.value]]),n(Q,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:O.value},columns:$,"data-source":A.value,pagination:!1,loading:_.value,size:"small"},{bodyCell:o(({column:v,record:r,index:K})=>[v.dataIndex=="idx"?(c(),g(z,{key:0},[x(p(F.value(K)),1)],64)):u("",!0),v.dataIndex=="date"?(c(),g("div",ge,p(G(r.created_at)),1)):u("",!0),v.dataIndex=="user"?(c(),g("div",fe,p(r.profile.name)+" "+p(r.profile.lastname)+" "+p(r.profile.middlename),1)):u("",!0),v.dataIndex=="download"?(c(),C(s,{key:3,size:"small",onClick:M=>Y(r.path),type:"primary",ghost:"",loading:m.value[r.path]},{icon:o(()=>[n(b(se))]),default:o(()=>[x(" Descargar ")]),_:2},1032,["onClick","loading"])):u("",!0),v.dataIndex=="actions"?(c(),C(P,{key:4,trigger:["click"]},{overlay:o(()=>[n(J,null,{default:o(()=>[n(i,null,{default:o(()=>[l("a",{onClick:M=>N(r)},"Visible para",8,we)]),_:2},1024),n(i,null,{default:o(()=>[n(q,{title:"¿Seguro de eliminar?",onConfirm:M=>T(r)},{icon:o(()=>[n(b(le),{style:{color:"red"}})]),default:o(()=>[ye]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[l("a",{class:"ant-dropdown-link",onClick:a[0]||(a[0]=ie(()=>{},["prevent"]))},[n(s,{shape:"circle",icon:re(b(ve))},null,8,["icon"])])]),_:2},1024)):u("",!0)]),_:1},8,["scroll","data-source","loading"])]),l("div",ke,[l("span",null,[n(W,{color:"blue"},{default:o(()=>[l("b",null,p(w.value),1)]),_:1}),x(" Archivos Subidos")]),n(X,{size:"small",pageSize:20,total:w.value,onChange:j,showSizeChanger:!1},null,8,["total"])]),f.value?(c(),C(me,{key:0,plainOptions:B.value,idFile:I.value,selectedUsers:S.value,onHandleCloseDrawer:L},null,8,["plainOptions","idFile","selectedUsers"])):u("",!0)],64)}}};export{Ae as default};
>>>>>>>> 5e888923362131c7a0ba71c6069c97a0973130dd:assets/DriveVerMisArchivos-da2b8371.js
