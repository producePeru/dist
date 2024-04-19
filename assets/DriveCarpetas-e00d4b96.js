import{c as a,A as K,g as ee,r as v,x as te,k as j,b as m,o as f,d as w,e as r,i as A,t as g,w as l,s as E,q as L,h as I,N as ae,Q as oe,I as ne,O as le,F as G,z as D,m as P,G as se,P as re,a as ie,v as de,R as ce,S as ue,T as me,U as pe,p as _e,j as ve}from"./index-15e856e3.js";import{M as fe}from"./MoreOutlined-32048fc1.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"}}]},name:"folder",theme:"filled"};const ye=ge;function V(d){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?Object(arguments[o]):{},c=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(e).filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),c.forEach(function(p){we(d,p,e[p])})}return d}function we(d,o,e){return o in d?Object.defineProperty(d,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[o]=e,d}var B=function(o,e){var c=V({},o,e.attrs);return a(K,V({},c,{icon:ye}),null)};B.displayName="FolderFilled";B.inheritAttrs=!1;const be=B;const Fe={style:{color:"#959595","font-weight":"300"}},Ce=r("br",null,null,-1),ke={key:0},Ee={key:1},De=r("a",null,"Eliminar",-1),Se={class:"paginator-drive"},xe={__name:"ArchivosFolder.component",props:["idFile"],emits:["handleDeleteItem"],setup(d,{emit:o}){const e=d,c=o,p="https://apituempresa.soporte-pnte.com/api/",O="http://127.0.0.1:8000/api/",$=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?O:p,u=ee.get("token"),b=v({}),C=v([]),S=v(!1),k=v(0),U=[{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],z=()=>{e.idFile&&(C.value=e.idFile.dataSource,k.value=e.idFile.total)},N=async s=>{try{const _=await D({url:`drive/delete-file/${s.id}`,method:"DELETE"});P.success(_.message);const n={id:e.idFile.id,name:e.idFile.nameFolder};c("handleDeleteItem",n)}catch(_){console.error("Error de red:",_)}},R=async s=>{b.value={...b.value,[s]:!0};try{const _=await se.get(`${$}drive/download/${s}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${u}`}}),n=window.URL.createObjectURL(new Blob([_.data])),h=document.createElement("a");h.href=n,h.setAttribute("download",s),document.body.appendChild(h),h.click(),document.body.removeChild(h)}catch(_){console.error("Error al descargar el archivo",_)}finally{b.value={...b.value,[s]:!1}}},t=s=>re(s).format("DD/MM/YYYY HH:mm A"),i=v(window.innerHeight-100),y=()=>{i.value=window.innerHeight-300};te(()=>{window.removeEventListener("resize",y)});const H=v({page:1}),M=s=>{H.value.page=s,x()},x=async()=>{try{S.value=!0;const{data:s}=await D({url:`drive/data-files/${e.idFile}`,method:"GET"});C.value=s.data,k.value=s.total}catch(s){console.error("Error de red:",s)}finally{S.value=!1}};return j(()=>{window.addEventListener("resize",y),y()}),(s,_)=>{const n=m("a-button"),h=m("a-popconfirm"),Y=m("a-menu-item"),q=m("a-menu"),Q=m("a-dropdown"),Z=m("a-table"),J=m("a-tag"),W=m("a-pagination");return f(),w(G,null,[r("div",null,[r("h3",null,[A("ARCHIVOS "),r("span",Fe,"/ "+g(e.idFile.nameFolder),1)]),Ce,a(Z,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:i.value},columns:U,"data-source":C.value,pagination:!1,loading:S.value,size:"small"},{bodyCell:l(({column:T,record:F})=>[T.dataIndex=="date"?(f(),w("div",ke,g(t(F.created_at)),1)):E("",!0),T.dataIndex=="user"?(f(),w("div",Ee,g(F.profile.name)+" "+g(F.profile.lastname)+" "+g(F.profile.middlename),1)):E("",!0),T.dataIndex=="download"?(f(),L(n,{key:2,size:"small",onClick:X=>R(F.path),type:"primary",ghost:"",loading:b.value[F.path]},{icon:l(()=>[a(I(ae))]),default:l(()=>[A(" Descargar ")]),_:2},1032,["onClick","loading"])):E("",!0),T.dataIndex=="actions"?(f(),L(Q,{key:3,trigger:["click"]},{overlay:l(()=>[a(q,null,{default:l(()=>[a(Y,null,{default:l(()=>[a(h,{title:"¿Seguro de eliminar?",onConfirm:X=>N(F)},{icon:l(()=>[a(I(oe),{style:{color:"red"}})]),default:l(()=>[De]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:l(()=>[r("a",{class:"ant-dropdown-link",onClick:_[0]||(_[0]=ne(()=>{},["prevent"]))},[a(n,{shape:"circle",icon:le(I(fe))},null,8,["icon"])])]),_:2},1024)):E("",!0)]),_:1},8,["scroll","data-source","loading"])]),r("div",null,g(z()),1),r("div",Se,[r("span",null,[a(J,{color:"blue"},{default:l(()=>[r("b",null,g(C.value.length),1)]),_:1}),A(" Archivos Subidos")]),a(W,{size:"small",pageSize:20,total:k.value,onChange:M,showSizeChanger:!1},null,8,["total"])])],64)}}};const Ae=d=>(_e("data-v-3840c391"),d=d(),ve(),d),Ie={key:0},Oe=Ae(()=>r("h3",null,"MIS CARPETAS",-1)),$e={class:"file-wrapper"},Re={class:"file-options"},Te=["onClick"],Ue=["onClick"],ze={class:"text"},Ne={key:1,class:"section-table"},He={__name:"DriveCarpetas",setup(d){const o=v(null),e=v("files"),c=v(!1),p=v(!1),O=v(null),$=v(null),u=ie({name:"",color:"#000000"}),b=()=>{c.value=!1,u.name="",u.color="#000000",o.value=null},C=()=>{c.value=!0},S=t=>{k(t)},k=async t=>{try{p.value=!0;const{data:i}=await D({url:`drive/data-files/${t.id}`,method:"GET"}),y={id:t.id,dataSource:i.data,total:i.total,nameFolder:t.name};$.value=y,e.value="table"}catch(i){console.error("Error de red:",i)}finally{p.value=!1}},U=t=>{u.name=t.name,u.color=t.color,c.value=!0,o.value=t.id},z=async()=>{p.value=!0;try{let t;o.value?t=await D({url:`drive/update-file/${o.value}`,method:"PUT",data:u}):t=await D({url:"drive/create-file",method:"POST",data:u}),t.status==200&&(u.name=null,c.value=!1,P.success(t.message),R(),o.value=null)}catch{P.error("No tienes permisos")}finally{p.value=!1}},N=()=>{console.log("Failed:")},R=async()=>{try{const{data:t}=await D({url:"drive/files",method:"GET"});O.value=t}catch(t){console.error("Error de red:",t)}};return j(()=>{R()}),(t,i)=>{const y=m("a-button"),H=m("a-popover"),M=m("a-input"),x=m("a-form-item"),s=m("a-form"),_=m("a-drawer");return f(),w("div",null,[e.value=="files"?(f(),w("section",Ie,[Oe,a(y,{style:{margin:"1rem 0 1.5rem 0"},class:"btn-produce",type:"primary",onClick:C},{default:l(()=>[A("NUEVO")]),_:1}),r("div",$e,[(f(!0),w(G,null,de(O.value,n=>(f(),w("div",{class:"file",key:n.id},[a(H,{trigger:"click"},{content:l(()=>[r("div",Re,[r("span",{onClick:h=>k(n)},"Abrir",8,Te),r("span",{onClick:h=>U(n)},"Editar",8,Ue)])]),default:l(()=>[a(I(be),{class:"ico",style:ce({color:n.color})},null,8,["style"])]),_:2},1024),r("span",ze,g(n.name),1)]))),128))])])):E("",!0),e.value=="table"?(f(),w("section",Ne,[a(I(ue),{class:"close",onClick:i[0]||(i[0]=n=>e.value="files")}),a(xe,{idFile:$.value,onHandleDeleteItem:S},null,8,["idFile"])])):E("",!0),a(_,{open:c.value,"onUpdate:open":i[3]||(i[3]=n=>c.value=n),title:"Nueva carpeta",placement:"right",onClose:b},{default:l(()=>[a(s,{layout:"vertical",model:u,name:"basic",onFinish:z,onFinishFailed:N},{default:l(()=>[a(x,{label:"Nombre de la carpeta",name:"name",rules:[{required:!0,message:"Escribe un nombre del archivo"}]},{default:l(()=>[a(M,{value:u.name,"onUpdate:value":i[1]||(i[1]=n=>u.name=n)},null,8,["value"])]),_:1}),a(x,{label:"Color de la carpeta",name:"color"},{default:l(()=>[me(r("input",{type:"color","onUpdate:modelValue":i[2]||(i[2]=n=>u.color=n)},null,512),[[pe,u.color]])]),_:1}),a(x,null,{default:l(()=>[a(y,{class:"btn-produce",type:"primary","html-type":"submit",loading:p.value},{default:l(()=>[A(g(o.value?"ACTUALIZAR":"CREAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])])}}},Le=he(He,[["__scopeId","data-v-3840c391"]]);export{Le as default};
