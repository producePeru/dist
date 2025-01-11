import{c as n,A as re,g as ie,r as s,s as de,j as le,b as p,o as v,d as y,e as u,i as z,t as w,w as r,q as F,p as Q,h as L,_ as ue,$ as ce,I as ne,G as me,F as X,J as x,m as Z,z as pe,a0 as ve,a as fe,x as ee,y as te,a1 as _e,V as he,a2 as ge}from"./index-ff7b135e.js";import{D as ye}from"./DrawDriveUsers.component-1fac3b16.js";import{M as we}from"./MoreOutlined-675ec443.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";var Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"}}]},name:"folder",theme:"filled"};const Fe=Ce;function ae(g){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?Object(arguments[c]):{},m=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(o).filter(function(_){return Object.getOwnPropertyDescriptor(o,_).enumerable}))),m.forEach(function(_){ke(g,_,o[_])})}return g}function ke(g,c,o){return c in g?Object.defineProperty(g,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):g[c]=o,g}var W=function(c,o){var m=ae({},c,o.attrs);return n(re,ae({},m,{icon:Fe}),null)};W.displayName="FolderFilled";W.inheritAttrs=!1;const xe=W;const Ee={style:{color:"#959595","font-weight":"300"}},De={key:0},Ae={key:1,class:"uppercase"},Oe=["onClick"],$e={class:"paginator-drive"},Se={__name:"ArchivosFolder.component",props:["idFile"],emits:["handleDeleteItem"],setup(g,{emit:c}){const o=g,m=c,_="https://apituempresa.soporte-pnte.com/api/",b="http://127.0.0.1:8000/api/",O=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?b:_,H=ie.get("token"),E=s(!1),k=s([]),$=s(null),S=s(null),i=s({}),D=s([]),I=s(!1),A=s(0),B=[{title:"AUTOR",dataIndex:"user",fixed:"left",width:180},{title:"NOMBRE DEL ARCHIVO",dataIndex:"name",width:140},{title:"FECHA",dataIndex:"date",width:120,align:"center"},{title:"DESCARGAR",dataIndex:"download",width:120,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],P=async a=>{var t;$.value=a.id;try{const f=await x({url:`drive/users-selected/${a.id}`,method:"GET"});f.data[0]&&(S.value=(t=f.data[0])==null?void 0:t.user_ids)}catch(f){console.error("Error de red:",f)}E.value=!0},j=()=>{o.idFile&&(D.value=o.idFile.dataSource,A.value=o.idFile.total)},G=async a=>{try{const t=await x({url:`drive/delete-file/${a.id}`,method:"DELETE"});Z.success(t.message);const f={id:o.idFile.id,name:o.idFile.nameFolder};m("handleDeleteItem",f)}catch(t){console.error("Error de red:",t)}},U=async a=>{i.value={...i.value,[a]:!0};try{const t=await pe.get(`${O}drive/download/${a}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${H}`}}),f=window.URL.createObjectURL(new Blob([t.data])),h=document.createElement("a");h.href=f,h.setAttribute("download",a),document.body.appendChild(h),h.click(),document.body.removeChild(h)}catch(t){console.error("Error al descargar el archivo",t)}finally{i.value={...i.value,[a]:!1}}},Y=a=>ve(a).format("DD/MM/YYYY HH:mm A"),V=s(window.innerHeight-100),T=()=>{V.value=window.innerHeight-300};de(()=>{window.removeEventListener("resize",T)});const N=s({page:1}),e=a=>{N.value.page=a,l()},l=async()=>{try{I.value=!0;const{data:a}=await x({url:`drive/data-files/${o.idFile}`,method:"GET"});D.value=a.data,A.value=a.total}catch(a){console.error("Error de red:",a)}finally{I.value=!1}};return le(()=>{window.addEventListener("resize",T),T()}),(a,t)=>{const f=p("a-button"),h=p("a-menu-item"),q=p("a-popconfirm"),J=p("a-menu"),d=p("a-dropdown"),M=p("a-table"),oe=p("a-tag"),se=p("a-pagination");return v(),y(X,null,[u("div",null,[u("h3",null,[t[2]||(t[2]=z("ARCHIVOS ")),u("span",Ee,"/ "+w(o.idFile.nameFolder),1)]),t[5]||(t[5]=u("br",null,null,-1)),n(M,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{y:V.value},columns:B,"data-source":D.value,pagination:!1,loading:I.value,size:"small"},{bodyCell:r(({column:R,record:C})=>[R.dataIndex=="date"?(v(),y("div",De,w(Y(C.created_at)),1)):F("",!0),R.dataIndex=="user"?(v(),y("div",Ae,w(C.profile.name)+" "+w(C.profile.lastname)+" "+w(C.profile.middlename),1)):F("",!0),R.dataIndex=="download"?(v(),Q(f,{key:2,size:"small",onClick:K=>U(C.path),type:"primary",ghost:"",loading:i.value[C.path]},{icon:r(()=>[n(L(ue))]),default:r(()=>[t[3]||(t[3]=z(" Descargar "))]),_:2},1032,["onClick","loading"])):F("",!0),R.dataIndex=="actions"?(v(),Q(d,{key:3,trigger:["click"]},{overlay:r(()=>[n(J,null,{default:r(()=>[n(h,null,{default:r(()=>[u("a",{onClick:K=>P(C)},"Visible para",8,Oe)]),_:2},1024),n(h,null,{default:r(()=>[n(q,{title:"¿Seguro de eliminar?",onConfirm:K=>G(C)},{icon:r(()=>[n(L(ce),{style:{color:"red"}})]),default:r(()=>[t[4]||(t[4]=u("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:r(()=>[u("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=ne(()=>{},["prevent"]))},[n(f,{shape:"circle",icon:me(L(we))},null,8,["icon"])])]),_:2},1024)):F("",!0)]),_:1},8,["scroll","data-source","loading"])]),u("div",null,w(j()),1),u("div",$e,[u("span",null,[n(oe,{color:"blue"},{default:r(()=>[u("b",null,w(D.value.length),1)]),_:1}),t[6]||(t[6]=z(" Archivos Subidos"))]),n(se,{size:"small",pageSize:20,total:A.value,onChange:e,showSizeChanger:!1},null,8,["total"])]),E.value?(v(),Q(ye,{key:0,plainOptions:k.value,idFile:$.value,selectedUsers:S.value,onHandleCloseDrawer:t[1]||(t[1]=R=>E.value=!1)},null,8,["plainOptions","idFile","selectedUsers"])):F("",!0)],64)}}};const Ie={key:0},Ue={class:"file-wrapper"},Te=["onContextmenu"],Me={class:"text"},Re={key:0,class:"section-table"},ze=["onClick"],Le={__name:"DriveCarpetas",setup(g){const c=s(!1),o=s(null),m=s(null),_=s("files"),b=s(!1),O=s(!1),H=s(null),E=s(null),k=s(null),$=s(0),S=s(0),i=fe({name:"",color:"#000000"}),D={customMenu:{items:[{label:"Abrir"},{label:"Editar"},{label:"Eliminar"}]}},I=(e,l,a)=>{l.preventDefault(),k.value=D[e],$.value=l.clientX,S.value=l.clientY,window.addEventListener("click",A),o.value=a},A=e=>{e.target.closest(".context-menu")||(k.value=null,window.removeEventListener("click",A))},B=e=>{k.value=null,e.label=="Abrir"&&U(o.value),e.label=="Editar"&&Y(o.value)},P=()=>{b.value=!1,i.name="",i.color="#000000",m.value=null},j=()=>{b.value=!0},G=e=>{U(e)},U=async e=>{c.value=!0,_.value=null;try{const{data:l}=await x({url:`drive/data-files/${e.id}`,method:"GET"}),a={id:e.id,dataSource:l.data,total:l.total,nameFolder:e.name};E.value=a,_.value="table"}catch(l){console.error("Error de red:",l)}finally{c.value=!1}},Y=e=>{i.name=e.name,i.color=e.color,b.value=!0,m.value=e.id},V=async()=>{O.value=!0;try{let e;m.value?e=await x({url:`drive/update-file/${m.value}`,method:"PUT",data:i}):e=await x({url:"drive/create-file",method:"POST",data:i}),e.status==200&&(i.name=null,b.value=!1,Z.success(e.message),N(),m.value=null)}catch{Z.error("No tienes permisos")}finally{O.value=!1}},T=()=>{console.log("Failed:")},N=async()=>{try{const{data:e}=await x({url:"drive/files",method:"GET"});H.value=e}catch(e){console.error("Error de red:",e)}};return le(()=>{N()}),(e,l)=>{const a=p("a-button"),t=p("a-spin"),f=p("a-input"),h=p("a-form-item"),q=p("a-form"),J=p("a-drawer");return v(),y("div",null,[_.value=="files"?(v(),y("section",Ie,[l[5]||(l[5]=u("h3",null,"MIS CARPETAS",-1)),n(a,{style:{margin:"1rem 0 1.5rem 0"},class:"btn-produce",type:"primary",onClick:j},{default:r(()=>l[4]||(l[4]=[z("NUEVO")])),_:1}),u("div",Ue,[(v(!0),y(X,null,ee(H.value,d=>(v(),y("div",{key:d.id},[u("div",{class:"file",onContextmenu:ne(M=>I("customMenu",M,d),["prevent"])},[n(L(xe),{class:"ico",style:te({color:d.color}),onClick:M=>U(d)},null,8,["style","onClick"]),u("span",Me,w(d.name),1)],40,Te)]))),128))])])):F("",!0),n(t,{spinning:c.value},{default:r(()=>[_.value=="table"?(v(),y("section",Re,[n(L(_e),{class:"close",onClick:l[0]||(l[0]=d=>_.value="files")}),n(Se,{idFile:E.value,onHandleDeleteItem:G},null,8,["idFile"])])):F("",!0)]),_:1},8,["spinning"]),k.value?(v(),y("div",{key:1,class:"context-menu",style:te({top:S.value+"px",left:$.value+"px"})},[u("ul",null,[(v(!0),y(X,null,ee(k.value.items,d=>(v(),y("li",{key:d.label,onClick:M=>B(d)},w(d.label),9,ze))),128))])],4)):F("",!0),n(J,{open:b.value,"onUpdate:open":l[3]||(l[3]=d=>b.value=d),title:"Nueva carpeta",placement:"right",onClose:P},{default:r(()=>[n(q,{layout:"vertical",model:i,name:"basic",onFinish:V,onFinishFailed:T},{default:r(()=>[n(h,{label:"Nombre de la carpeta",name:"name",rules:[{required:!0,message:"Escribe un nombre del archivo"}]},{default:r(()=>[n(f,{value:i.name,"onUpdate:value":l[1]||(l[1]=d=>i.name=d)},null,8,["value"])]),_:1}),n(h,{label:"Color de la carpeta",name:"color"},{default:r(()=>[he(u("input",{type:"color","onUpdate:modelValue":l[2]||(l[2]=d=>i.color=d)},null,512),[[ge,i.color]])]),_:1}),n(h,null,{default:r(()=>[n(a,{class:"btn-produce",type:"primary","html-type":"submit",loading:O.value},{default:r(()=>[z(w(m.value?"ACTUALIZAR":"CREAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])])}}},Pe=be(Le,[["__scopeId","data-v-50e0977c"]]);export{Pe as default};
