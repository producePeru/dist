<<<<<<<< HEAD:assets/DriveVerMisArchivos-d5a54055.js
import{g as G,r as t,v as j,k as q,b as s,o as c,d as f,e as l,T as J,V as P,c as n,w as o,i as x,F as Q,y as D,t as u,s as h,q as E,h as y,O as W,Q as K,I as X,J as Z,W as ee,m as ae,G as te,P as oe}from"./index-7f702c82.js";import{M as ne}from"./MoreOutlined-04d871a0.js";const se=l("h3",null,"MIS ARCHIVOS",-1),le={class:"w-search"},ie={key:0},re={key:1},de=l("a",null,"Eliminar",-1),ce={class:"paginator-drive"},_e={__name:"DriveVerMisArchivos",setup(ue){const k=JSON.parse(localStorage.getItem("role")),A="https://apituempresa.soporte-pnte.com/api/",I="http://127.0.0.1:8000/api/",S=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?I:A,M=G.get("token"),d=t({}),v=t([]),m=t(!1),b=t(0);t(0),t([]),t(""),t(!1);const O=[{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},...k[0].id===3||k[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],R=async e=>{try{const a=await D({url:`drive/delete-file/${e.id}`,method:"DELETE"});a.status==500?ee.warning({title:"Aviso",content:a.message}):(w(),ae.success(a.message))}catch(a){console.error("Error de red:",a)}},z=async e=>{d.value={...d.value,[e]:!0};try{const a=await te.get(`${S}drive/download/${e}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),p=window.URL.createObjectURL(new Blob([a.data])),i=document.createElement("a");i.href=p,i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(a){console.error("Error al descargar el archivo",a)}finally{d.value={...d.value,[e]:!1}}},V=e=>oe(e).format("DD/MM/YYYY HH:mm A"),C=t(window.innerHeight-100),g=()=>{C.value=window.innerHeight-300};j(()=>{window.removeEventListener("resize",g)});const B=t({page:1}),H=e=>{B.value.page=e,w()},w=async()=>{try{m.value=!0;const{data:e}=await D({url:"drive/list-files",method:"GET"});v.value=e.data,b.value=e.total}catch(e){console.error("Error de red:",e)}finally{m.value=!1}};return q(()=>{w(),window.addEventListener("resize",g),g()}),(e,a)=>{const p=s("a-button"),i=s("a-popconfirm"),L=s("a-menu-item"),N=s("a-menu"),T=s("a-dropdown"),$=s("a-table"),U=s("a-tag"),Y=s("a-pagination");return c(),f(Q,null,[l("div",null,[se,J(l("div",le,null,512),[[P,!m.value]]),n($,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:C.value},columns:O,"data-source":v.value,pagination:!1,loading:m.value,size:"small"},{bodyCell:o(({column:_,record:r})=>[_.dataIndex=="date"?(c(),f("div",ie,u(V(r.created_at)),1)):h("",!0),_.dataIndex=="user"?(c(),f("div",re,u(r.profile.name)+" "+u(r.profile.lastname)+" "+u(r.profile.middlename),1)):h("",!0),_.dataIndex=="download"?(c(),E(p,{key:2,size:"small",onClick:F=>z(r.path),type:"primary",ghost:"",loading:d.value[r.path]},{icon:o(()=>[n(y(W))]),default:o(()=>[x(" Descargar ")]),_:2},1032,["onClick","loading"])):h("",!0),_.dataIndex=="actions"?(c(),E(T,{key:3,trigger:["click"]},{overlay:o(()=>[n(N,null,{default:o(()=>[n(L,null,{default:o(()=>[n(i,{title:"¿Seguro de eliminar?",onConfirm:F=>R(r)},{icon:o(()=>[n(y(K),{style:{color:"red"}})]),default:o(()=>[de]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[l("a",{class:"ant-dropdown-link",onClick:a[0]||(a[0]=X(()=>{},["prevent"]))},[n(p,{shape:"circle",icon:Z(y(ne))},null,8,["icon"])])]),_:2},1024)):h("",!0)]),_:1},8,["scroll","data-source","loading"])]),l("div",ce,[l("span",null,[n(U,{color:"blue"},{default:o(()=>[l("b",null,u(v.value.length),1)]),_:1}),x(" Archivos Subidos")]),n(Y,{size:"small",pageSize:20,total:b.value,onChange:H,showSizeChanger:!1},null,8,["total"])])],64)}}};export{_e as default};
========
import{g as G,r as t,v as j,k as q,b as s,o as c,d as f,e as l,T as J,V as P,c as n,w as o,i as x,F as Q,y as D,t as u,s as h,q as E,h as y,O as W,Q as K,I as X,J as Z,W as ee,m as ae,G as te,P as oe}from"./index-37e9f6da.js";import{M as ne}from"./MoreOutlined-162c813f.js";const se=l("h3",null,"MIS ARCHIVOS",-1),le={class:"w-search"},ie={key:0},re={key:1},de=l("a",null,"Eliminar",-1),ce={class:"paginator-drive"},_e={__name:"DriveVerMisArchivos",setup(ue){const k=JSON.parse(localStorage.getItem("role")),A="https://apituempresa.soporte-pnte.com/api/",I="http://127.0.0.1:8000/api/",S=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?I:A,M=G.get("token"),d=t({}),v=t([]),m=t(!1),b=t(0);t(0),t([]),t(""),t(!1);const O=[{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},...k[0].id===3||k[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],R=async e=>{try{const a=await D({url:`drive/delete-file/${e.id}`,method:"DELETE"});a.status==500?ee.warning({title:"Aviso",content:a.message}):(w(),ae.success(a.message))}catch(a){console.error("Error de red:",a)}},z=async e=>{d.value={...d.value,[e]:!0};try{const a=await te.get(`${S}drive/download/${e}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),p=window.URL.createObjectURL(new Blob([a.data])),i=document.createElement("a");i.href=p,i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(a){console.error("Error al descargar el archivo",a)}finally{d.value={...d.value,[e]:!1}}},V=e=>oe(e).format("DD/MM/YYYY HH:mm A"),C=t(window.innerHeight-100),g=()=>{C.value=window.innerHeight-300};j(()=>{window.removeEventListener("resize",g)});const B=t({page:1}),H=e=>{B.value.page=e,w()},w=async()=>{try{m.value=!0;const{data:e}=await D({url:"drive/list-files",method:"GET"});v.value=e.data,b.value=e.total}catch(e){console.error("Error de red:",e)}finally{m.value=!1}};return q(()=>{w(),window.addEventListener("resize",g),g()}),(e,a)=>{const p=s("a-button"),i=s("a-popconfirm"),L=s("a-menu-item"),N=s("a-menu"),T=s("a-dropdown"),$=s("a-table"),U=s("a-tag"),Y=s("a-pagination");return c(),f(Q,null,[l("div",null,[se,J(l("div",le,null,512),[[P,!m.value]]),n($,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:C.value},columns:O,"data-source":v.value,pagination:!1,loading:m.value,size:"small"},{bodyCell:o(({column:_,record:r})=>[_.dataIndex=="date"?(c(),f("div",ie,u(V(r.created_at)),1)):h("",!0),_.dataIndex=="user"?(c(),f("div",re,u(r.profile.name)+" "+u(r.profile.lastname)+" "+u(r.profile.middlename),1)):h("",!0),_.dataIndex=="download"?(c(),E(p,{key:2,size:"small",onClick:F=>z(r.path),type:"primary",ghost:"",loading:d.value[r.path]},{icon:o(()=>[n(y(W))]),default:o(()=>[x(" Descargar ")]),_:2},1032,["onClick","loading"])):h("",!0),_.dataIndex=="actions"?(c(),E(T,{key:3,trigger:["click"]},{overlay:o(()=>[n(N,null,{default:o(()=>[n(L,null,{default:o(()=>[n(i,{title:"¿Seguro de eliminar?",onConfirm:F=>R(r)},{icon:o(()=>[n(y(K),{style:{color:"red"}})]),default:o(()=>[de]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[l("a",{class:"ant-dropdown-link",onClick:a[0]||(a[0]=X(()=>{},["prevent"]))},[n(p,{shape:"circle",icon:Z(y(ne))},null,8,["icon"])])]),_:2},1024)):h("",!0)]),_:1},8,["scroll","data-source","loading"])]),l("div",ce,[l("span",null,[n(U,{color:"blue"},{default:o(()=>[l("b",null,u(v.value.length),1)]),_:1}),x(" Archivos Subidos")]),n(Y,{size:"small",pageSize:20,total:b.value,onChange:H,showSizeChanger:!1},null,8,["total"])])],64)}}};export{_e as default};
>>>>>>>> 6e77e012ecbf1c9c28f9e0e6e9b066d93881e51e:assets/DriveVerMisArchivos-751281d8.js
