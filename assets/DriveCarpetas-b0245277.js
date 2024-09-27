import{c as n,A as re,g as ie,r as s,s as de,j as le,b as p,o as v,d as y,e as u,i as H,t as w,w as r,q as F,p as J,h as L,T as ue,U as ce,J as ne,P as me,F as Q,y as E,m as W,H as pe,V as ve,a as fe,v as ee,W as te,X as _e,N as he,Y as ge}from"./index-19dbe2bd.js";import{D as ye}from"./DrawDriveUsers.component-0bafc4ff.js";import{M as we}from"./MoreOutlined-f02a377a.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";var Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"}}]},name:"folder",theme:"filled"};const Fe=Ce;function ae(g){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?Object(arguments[c]):{},m=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(o).filter(function(_){return Object.getOwnPropertyDescriptor(o,_).enumerable}))),m.forEach(function(_){ke(g,_,o[_])})}return g}function ke(g,c,o){return c in g?Object.defineProperty(g,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):g[c]=o,g}var Z=function(c,o){var m=ae({},c,o.attrs);return n(re,ae({},m,{icon:Fe}),null)};Z.displayName="FolderFilled";Z.inheritAttrs=!1;const Ee=Z;const xe={style:{color:"#959595","font-weight":"300"}},De={key:0},Ae={key:1,class:"uppercase"},Oe=["onClick"],Se={class:"paginator-drive"},$e={__name:"ArchivosFolder.component",props:["idFile"],emits:["handleDeleteItem"],setup(g,{emit:c}){const o=g,m=c,_="https://apituempresa.soporte-pnte.com/api/",b="http://127.0.0.1:8000/api/",O=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?b:_,z=ie.get("token"),x=s(!1),k=s([]),S=s(null),$=s(null),i=s({}),D=s([]),I=s(!1),A=s(0),P=[{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],B=async a=>{var t;S.value=a.id;try{const f=await E({url:`drive/users-selected/${a.id}`,method:"GET"});f.data[0]&&($.value=(t=f.data[0])==null?void 0:t.user_ids)}catch(f){console.error("Error de red:",f)}x.value=!0},j=()=>{o.idFile&&(D.value=o.idFile.dataSource,A.value=o.idFile.total)},Y=async a=>{try{const t=await E({url:`drive/delete-file/${a.id}`,method:"DELETE"});W.success(t.message);const f={id:o.idFile.id,name:o.idFile.nameFolder};m("handleDeleteItem",f)}catch(t){console.error("Error de red:",t)}},U=async a=>{i.value={...i.value,[a]:!0};try{const t=await pe.get(`${O}drive/download/${a}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${z}`}}),f=window.URL.createObjectURL(new Blob([t.data])),h=document.createElement("a");h.href=f,h.setAttribute("download",a),document.body.appendChild(h),h.click(),document.body.removeChild(h)}catch(t){console.error("Error al descargar el archivo",t)}finally{i.value={...i.value,[a]:!1}}},G=a=>ve(a).format("DD/MM/YYYY HH:mm A"),N=s(window.innerHeight-100),T=()=>{N.value=window.innerHeight-300};de(()=>{window.removeEventListener("resize",T)});const V=s({page:1}),e=a=>{V.value.page=a,l()},l=async()=>{try{I.value=!0;const{data:a}=await E({url:`drive/data-files/${o.idFile}`,method:"GET"});D.value=a.data,A.value=a.total}catch(a){console.error("Error de red:",a)}finally{I.value=!1}};return le(()=>{window.addEventListener("resize",T),T()}),(a,t)=>{const f=p("a-button"),h=p("a-menu-item"),q=p("a-popconfirm"),X=p("a-menu"),d=p("a-dropdown"),M=p("a-table"),oe=p("a-tag"),se=p("a-pagination");return v(),y(Q,null,[u("div",null,[u("h3",null,[t[2]||(t[2]=H("ARCHIVOS ")),u("span",xe,"/ "+w(o.idFile.nameFolder),1)]),t[5]||(t[5]=u("br",null,null,-1)),n(M,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:N.value},columns:P,"data-source":D.value,pagination:!1,loading:I.value,size:"small"},{bodyCell:r(({column:R,record:C})=>[R.dataIndex=="date"?(v(),y("div",De,w(G(C.created_at)),1)):F("",!0),R.dataIndex=="user"?(v(),y("div",Ae,w(C.profile.name)+" "+w(C.profile.lastname)+" "+w(C.profile.middlename),1)):F("",!0),R.dataIndex=="download"?(v(),J(f,{key:2,size:"small",onClick:K=>U(C.path),type:"primary",ghost:"",loading:i.value[C.path]},{icon:r(()=>[n(L(ue))]),default:r(()=>[t[3]||(t[3]=H(" Descargar "))]),_:2},1032,["onClick","loading"])):F("",!0),R.dataIndex=="actions"?(v(),J(d,{key:3,trigger:["click"]},{overlay:r(()=>[n(X,null,{default:r(()=>[n(h,null,{default:r(()=>[u("a",{onClick:K=>B(C)},"Visible para",8,Oe)]),_:2},1024),n(h,null,{default:r(()=>[n(q,{title:"¿Seguro de eliminar?",onConfirm:K=>Y(C)},{icon:r(()=>[n(L(ce),{style:{color:"red"}})]),default:r(()=>[t[4]||(t[4]=u("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:r(()=>[u("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=ne(()=>{},["prevent"]))},[n(f,{shape:"circle",icon:me(L(we))},null,8,["icon"])])]),_:2},1024)):F("",!0)]),_:1},8,["scroll","data-source","loading"])]),u("div",null,w(j()),1),u("div",Se,[u("span",null,[n(oe,{color:"blue"},{default:r(()=>[u("b",null,w(D.value.length),1)]),_:1}),t[6]||(t[6]=H(" Archivos Subidos"))]),n(se,{size:"small",pageSize:20,total:A.value,onChange:e,showSizeChanger:!1},null,8,["total"])]),x.value?(v(),J(ye,{key:0,plainOptions:k.value,idFile:S.value,selectedUsers:$.value,onHandleCloseDrawer:t[1]||(t[1]=R=>x.value=!1)},null,8,["plainOptions","idFile","selectedUsers"])):F("",!0)],64)}}};const Ie={key:0},Ue={class:"file-wrapper"},Te=["onContextmenu"],Me={class:"text"},Re={key:0,class:"section-table"},He=["onClick"],Le={__name:"DriveCarpetas",setup(g){const c=s(!1),o=s(null),m=s(null),_=s("files"),b=s(!1),O=s(!1),z=s(null),x=s(null),k=s(null),S=s(0),$=s(0),i=fe({name:"",color:"#000000"}),D={customMenu:{items:[{label:"Abrir"},{label:"Editar"},{label:"Eliminar"}]}},I=(e,l,a)=>{l.preventDefault(),k.value=D[e],S.value=l.clientX,$.value=l.clientY,window.addEventListener("click",A),o.value=a},A=e=>{e.target.closest(".context-menu")||(k.value=null,window.removeEventListener("click",A))},P=e=>{k.value=null,e.label=="Abrir"&&U(o.value),e.label=="Editar"&&G(o.value)},B=()=>{b.value=!1,i.name="",i.color="#000000",m.value=null},j=()=>{b.value=!0},Y=e=>{U(e)},U=async e=>{c.value=!0,_.value=null;try{const{data:l}=await E({url:`drive/data-files/${e.id}`,method:"GET"}),a={id:e.id,dataSource:l.data,total:l.total,nameFolder:e.name};x.value=a,_.value="table"}catch(l){console.error("Error de red:",l)}finally{c.value=!1}},G=e=>{i.name=e.name,i.color=e.color,b.value=!0,m.value=e.id},N=async()=>{O.value=!0;try{let e;m.value?e=await E({url:`drive/update-file/${m.value}`,method:"PUT",data:i}):e=await E({url:"drive/create-file",method:"POST",data:i}),e.status==200&&(i.name=null,b.value=!1,W.success(e.message),V(),m.value=null)}catch{W.error("No tienes permisos")}finally{O.value=!1}},T=()=>{console.log("Failed:")},V=async()=>{try{const{data:e}=await E({url:"drive/files",method:"GET"});z.value=e}catch(e){console.error("Error de red:",e)}};return le(()=>{V()}),(e,l)=>{const a=p("a-button"),t=p("a-spin"),f=p("a-input"),h=p("a-form-item"),q=p("a-form"),X=p("a-drawer");return v(),y("div",null,[_.value=="files"?(v(),y("section",Ie,[l[5]||(l[5]=u("h3",null,"MIS CARPETAS",-1)),n(a,{style:{margin:"1rem 0 1.5rem 0"},class:"btn-produce",type:"primary",onClick:j},{default:r(()=>l[4]||(l[4]=[H("NUEVO")])),_:1}),u("div",Ue,[(v(!0),y(Q,null,ee(z.value,d=>(v(),y("div",{key:d.id},[u("div",{class:"file",onContextmenu:ne(M=>I("customMenu",M,d),["prevent"])},[n(L(Ee),{class:"ico",style:te({color:d.color}),onClick:M=>U(d)},null,8,["style","onClick"]),u("span",Me,w(d.name),1)],40,Te)]))),128))])])):F("",!0),n(t,{spinning:c.value},{default:r(()=>[_.value=="table"?(v(),y("section",Re,[n(L(_e),{class:"close",onClick:l[0]||(l[0]=d=>_.value="files")}),n($e,{idFile:x.value,onHandleDeleteItem:Y},null,8,["idFile"])])):F("",!0)]),_:1},8,["spinning"]),k.value?(v(),y("div",{key:1,class:"context-menu",style:te({top:$.value+"px",left:S.value+"px"})},[u("ul",null,[(v(!0),y(Q,null,ee(k.value.items,d=>(v(),y("li",{key:d.label,onClick:M=>P(d)},w(d.label),9,He))),128))])],4)):F("",!0),n(X,{open:b.value,"onUpdate:open":l[3]||(l[3]=d=>b.value=d),title:"Nueva carpeta",placement:"right",onClose:B},{default:r(()=>[n(q,{layout:"vertical",model:i,name:"basic",onFinish:N,onFinishFailed:T},{default:r(()=>[n(h,{label:"Nombre de la carpeta",name:"name",rules:[{required:!0,message:"Escribe un nombre del archivo"}]},{default:r(()=>[n(f,{value:i.name,"onUpdate:value":l[1]||(l[1]=d=>i.name=d)},null,8,["value"])]),_:1}),n(h,{label:"Color de la carpeta",name:"color"},{default:r(()=>[he(u("input",{type:"color","onUpdate:modelValue":l[2]||(l[2]=d=>i.color=d)},null,512),[[ge,i.color]])]),_:1}),n(h,null,{default:r(()=>[n(a,{class:"btn-produce",type:"primary","html-type":"submit",loading:O.value},{default:r(()=>[H(w(m.value?"ACTUALIZAR":"CREAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])])}}},Be=be(Le,[["__scopeId","data-v-50e0977c"]]);export{Be as default};
