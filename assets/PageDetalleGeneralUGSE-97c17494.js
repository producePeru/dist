import{c as n,A as le,z as Y,g as ae,r as w,D as oe,E as re,j as ie,b as y,o as i,d as c,w as o,L as se,I as de,i as s,e as r,t,h as b,F as C,v as N,a9 as F,p as L,q as D,y as G}from"./index-80dd7c4c.js";import"./es-9c794631.js";import{E as ue}from"./EnvironmentOutlined-ffd45b38.js";import{T as ce}from"./TeamOutlined-bcdeb6b1.js";var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"}}]},name:"vertical-align-bottom",theme:"outlined"};const me=pe;function X(g){for(var f=1;f<arguments.length;f++){var _=arguments[f]!=null?Object(arguments[f]):{},$=Object.keys(_);typeof Object.getOwnPropertySymbols=="function"&&($=$.concat(Object.getOwnPropertySymbols(_).filter(function(h){return Object.getOwnPropertyDescriptor(_,h).enumerable}))),$.forEach(function(h){fe(g,h,_[h])})}return g}function fe(g,f,_){return f in g?Object.defineProperty(g,f,{value:_,enumerable:!0,configurable:!0,writable:!0}):g[f]=_,g}var I=function(f,_){var $=X({},f,_.attrs);return n(le,X({},$,{icon:me}),null)};I.displayName="VerticalAlignBottomOutlined";I.inheritAttrs=!1;const ve=I;const _e={class:"info-h1"},be={style:{"text-transform":"uppercase"}},ye={style:{display:"flex","flex-wrap":"wrap"}},ge=["onClick"],he={key:0},ke={style:{width:"100%"}},we={style:{"margin-bottom":"6px"}},De={style:{"text-transform":"capitalize"}},$e={key:0},Ae={key:1},Ce={key:2,class:"acciones"},Oe={style:{width:"20px"}},xe={style:{width:"100%"}},Re={key:0},Be={key:1},Ee={class:"conv-files"},Pe=["onClick"],Ye=["onClick"],Fe=["onClick"],Le="DD/MM/YYYY",Te={__name:"PageDetalleGeneralUGSE",setup(g){Y.locale("es");const f=ae.get("token"),_="https://apituempresa.soporte-pnte.com/api/",$="http://127.0.0.1:8000/api/",h=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?$:_,O=w(null),q=w(),M=w(null),U=w(!1),j=w(!1),H=oe();w([]);const B=re(se,{style:{fontSize:"18px"},spin:!0});w(null);const x=w(null),u=w([]),V=d=>{if(d)return Y(d).format("DD-MM-YYYY")},T=async(d,e)=>{x.value=e;try{const p=await G.get(`${h}agreement/commitment-download/${d}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${f}`}}),v=window.URL.createObjectURL(new Blob([p.data])),k=document.createElement("a");k.href=v,k.setAttribute("download",e),document.body.appendChild(k),k.click(),document.body.removeChild(k)}catch(p){console.error("Error al descargar el archivo",p)}finally{x.value=null}},Z=async d=>{M.value=d.id;try{const e=await G({url:`${h}agreement/file-download/${d.id}`,method:"POST",responseType:"blob",headers:{Authorization:`Bearer ${f}`}}),p=window.URL.createObjectURL(new Blob([e.data])),v=document.createElement("a");v.href=p,v.setAttribute("download",d.name),document.body.appendChild(v),v.click(),window.URL.revokeObjectURL(p),document.body.removeChild(v)}catch(e){console.error("Error downloading file:",e)}finally{M.value=null}},K=async(d,e)=>{try{j.value=!0;const p=H.params.id,v=O.value?`${h}pdf/agreements-general/${p}?start=${O.value.start}&end=${O.value.end}`:`${h}pdf/agreements-general/${p}`,k=await G.get(v,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${f}`}}),S=window.URL.createObjectURL(new Blob([k.data])),A=document.createElement("a");A.href=S,A.setAttribute("download",`${d}.pdf`),document.body.appendChild(A),A.click()}catch(p){console.error("Error descargando el PDF:",p)}finally{j.value=!1}},ee=async d=>{if(!Array.isArray(d)||d===null){console.warn("Invalid date array provided."),await z(),O.value=null;return}if(d.length===2){const e={start:Y(d[0]).format("YYYY/MM/DD"),end:Y(d[1]).format("YYYY/MM/DD")};await z(e),O.value=e}},z=async d=>{try{U.value=!0;const e=H.params.id,p=d?`/agreement/general/${e}?start=${d.start}&end=${d.end}`:`/agreement/general/${e}`,v=await de({url:p,method:"GET"});u.value=v}catch(e){console.error("Error de red:",e)}finally{U.value=!1}};return ie(()=>{z()}),(d,e)=>{const p=y("router-link"),v=y("a-breadcrumb-item"),k=y("a-breadcrumb"),S=y("a-range-picker"),A=y("a-button"),te=y("a-tooltip"),E=y("a-flex"),m=y("a-descriptions-item"),R=y("a-spin"),ne=y("a-descriptions");return i(),c("section",null,[n(k,null,{default:o(()=>[n(v,null,{default:o(()=>[n(p,{to:"/admin/convenios/ugse"},{default:o(()=>e[2]||(e[2]=[s("Lista de convenios")])),_:1})]),_:1}),n(v,null,{default:o(()=>e[3]||(e[3]=[r("h4",null,"Resumen General del convenio",-1)])),_:1})]),_:1}),n(R,{spinning:U.value},{default:o(()=>{var J;return[n(E,{justify:"space-between"},{default:o(()=>[r("h1",_e,t(u.value.alliedEntity),1),n(E,{align:"center",gap:10},{default:o(()=>[r("div",null,[n(S,{value:q.value,"onUpdate:value":e[0]||(e[0]=l=>q.value=l),onChange:ee,format:Le},null,8,["value"])]),n(te,{placement:"topLeft",title:"Descargar reporte en PDF"},{default:o(()=>[n(A,{class:"btn-pdf",onClick:e[1]||(e[1]=l=>K(u.value.alliedEntity)),loading:j.value,type:"primary"},{default:o(()=>[r("b",null,[n(b(ve)),e[4]||(e[4]=s(" PDF "))])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),e[10]||(e[10]=r("br",null,null,-1)),n(ne,{bordered:"",size:"small"},{default:o(()=>[n(m,{label:"Región"},{default:o(()=>{var l;return[s(t((l=u.value.region)==null?void 0:l.name),1)]}),_:1}),n(m,{label:"Provincia"},{default:o(()=>{var l;return[s(t((l=u.value.provincia)==null?void 0:l.name),1)]}),_:1}),n(m,{label:"Distrito"},{default:o(()=>{var l;return[s(t((l=u.value.distrito)==null?void 0:l.name),1)]}),_:1}),n(m,{label:"RUC"},{default:o(()=>[s(t(u.value.ruc),1)]),_:1}),n(m,{label:"Componente",span:2},{default:o(()=>[r("span",be,t(u.value.components),1)]),_:1}),n(m,{label:"Inicio convenio"},{default:o(()=>[s(t(V(u.value.startDate)),1)]),_:1}),n(m,{label:"Fin convenio"},{default:o(()=>[s(t(V(u.value.endDate)),1)]),_:1}),n(m,{label:"Renovación Automática",style:{width:"200px"}},{default:o(()=>[s(t(u.value.renovation),1)]),_:1}),n(m,{label:"Punto Focal"},{default:o(()=>[s(t(u.value.focal),1)]),_:1}),n(m,{label:"Focal cargo"},{default:o(()=>[s(t(u.value.focalCargo),1)]),_:1}),n(m,{label:"Focal Num. celular"},{default:o(()=>[s(t(u.value.focalPhone),1)]),_:1}),n(m,{label:"Representante Legal"},{default:o(()=>[s(t(u.value.aliado),1)]),_:1}),n(m,{label:"Num. celular",span:2},{default:o(()=>[s(t(u.value.aliadoPhone),1)]),_:1}),n(m,{label:"Comentarios",span:3},{default:o(()=>[r("p",null,t(u.value.observations),1)]),_:1}),n(m,{label:"Archivos",span:3},{default:o(()=>[r("div",ye,[(i(!0),c(C,null,N(u.value.files_agreements,(l,P)=>(i(),c("div",{class:"conv-files",key:P},[M.value!=l.id?(i(),c("a",{key:0,onClick:a=>Z(l)},[n(b(F)),s(" "+t(l.name),1)],8,ge)):(i(),L(R,{key:1,indicator:b(B),style:{"min-width":"100px"}},null,8,["indicator"]))]))),128))])]),_:1})]),_:1}),e[11]||(e[11]=r("br",null,null,-1)),((J=u.value.compromisos)==null?void 0:J.length)>=1?(i(),c("div",he,[e[8]||(e[8]=r("br",null,null,-1)),e[9]||(e[9]=r("h4",null,"Compromisos",-1)),(i(!0),c(C,null,N(u.value.compromisos,(l,P)=>(i(),c("div",{class:"acciones-box",key:P,style:{margin:"1rem 0"}},[n(E,{gap:10},{default:o(()=>[r("b",null,t(P+1),1),r("div",ke,[r("div",we,[e[5]||(e[5]=s("Título: ")),r("b",null,t(l.title),1)]),r("div",null,[e[6]||(e[6]=s("Tipo: ")),r("span",De,t(l.type),1)]),l.meta?(i(),c("div",$e,"Meta: "+t(l.meta),1)):D("",!0),l.description?(i(),c("div",Ae,"Descripción: "+t(l.description),1)):D("",!0),r("div",null,"Registrado por: "+t(l.profile.name)+" "+t(l.profile.lastname)+" "+t(l.profile.middlename),1),l.acciones.length>=1?(i(),c("div",Ce,[e[7]||(e[7]=r("h4",null,"Acciones",-1)),(i(!0),c(C,null,N(l.acciones,(a,Q)=>(i(),c("div",{class:"acciones-box acciones-bg",key:Q},[n(E,null,{default:o(()=>[r("div",Oe,t(Q+1),1),r("div",xe,[r("div",null,"Conferencia: "+t(a.accion),1),r("div",null,"Fecha: "+t(V(a.date)),1),r("div",null,"Modalidad: "+t(a.modality=="v"?"Virtual":"Presencial"),1),a.address?(i(),c("div",Re,[n(b(ue)),s(" "+t(a.address),1)])):D("",!0),r("div",null,[n(b(ce)),s(" "+t(a.participants)+" participantes ",1)]),a.details?(i(),c("div",Be,"Detalle: "+t(a.details),1)):D("",!0),r("div",null,"Registrado por: "+t(a.profile.name)+" "+t(a.profile.lastname)+" "+t(a.profile.middlename),1),r("div",Ee,[a.file1_name?(i(),c(C,{key:0},[x.value==a.file1_name?(i(),L(R,{key:0,indicator:b(B)},null,8,["indicator"])):(i(),c("a",{key:1,onClick:W=>T(a.file1_path,a.file1_name)},[n(b(F)),s(" "+t(a.file1_name),1)],8,Pe))],64)):D("",!0),a.file2_name?(i(),c(C,{key:1},[x.value==a.file2_name?(i(),L(R,{key:0,indicator:b(B)},null,8,["indicator"])):(i(),c("a",{key:1,onClick:W=>T(a.file2_path,a.file2_name)},[n(b(F)),s(" "+t(a.file2_name),1)],8,Ye))],64)):D("",!0),a.file3_name?(i(),c(C,{key:2},[x.value==a.file3_name?(i(),L(R,{key:0,indicator:b(B)},null,8,["indicator"])):(i(),c("a",{key:1,onClick:W=>T(a.file3_path,a.file3_name)},[n(b(F)),s(" "+t(a.file3_name),1)],8,Fe))],64)):D("",!0)])])]),_:2},1024)]))),128))])):D("",!0)])]),_:2},1024)]))),128))])):D("",!0)]}),_:1},8,["spinning"])])}}};export{Te as default};