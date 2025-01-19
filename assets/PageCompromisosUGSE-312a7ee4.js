import{c as n,A as ce,H as Z,a as ee,r as k,j as ae,y as oe,b as c,o,v as h,w as l,d as g,F as Y,z as te,q as y,i as A,t as x,N as J,m as G,E as H,g as se,e as f,h as C,G as de,D as re,I as ie,L as me,a9 as pe,aa as K,u as _e,U as fe,K as ve}from"./index-06bacd17.js";import"./es-29a55ec9.js";import{C as ye}from"./CloudUploadOutlined-f5d3389d.js";import{E as be}from"./EnvironmentOutlined-864ebba6.js";import{T as ge}from"./TeamOutlined-07bf1944.js";import{M as he}from"./MoreOutlined-2ba6d8d6.js";var we={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};const xe=we;function le(D){for(var v=1;v<arguments.length;v++){var m=arguments[v]!=null?Object(arguments[v]):{},S=Object.keys(m);typeof Object.getOwnPropertySymbols=="function"&&(S=S.concat(Object.getOwnPropertySymbols(m).filter(function(w){return Object.getOwnPropertyDescriptor(m,w).enumerable}))),S.forEach(function(w){ke(D,w,m[w])})}return D}function ke(D,v,m){return v in D?Object.defineProperty(D,v,{value:m,enumerable:!0,configurable:!0,writable:!0}):D[v]=m,D}var ne=function(v,m){var S=le({},v,m.attrs);return n(ce,le({},S,{icon:xe}),null)};ne.displayName="SafetyOutlined";ne.inheritAttrs=!1;const De=ne,Se={__name:"DrawCompromisos",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:v}){const m=D,S=v,w=Z(),d=ee({title:null,type:null,description:null,meta:null}),P={title:{type:"iText",label:"Título del Compromiso",name:"title",required:!0,message:"Escribir el título",disabled:!0,max:100},type:{type:"iSelect",label:"Tipo compromiso",name:"type",required:!0,message:"Seleccionar una opción",disabled:!0},description:{type:"iTextarea",label:"Descripción del compromiso",name:"description",required:!1,message:"Escribir la descripción",disabled:!1,max:200},meta:{type:"iNumber",label:"Meta",name:"meta",required:!1,message:"Escribir la acción",disabled:!0}},N=k(!1),U=[{label:"Aliado",value:"aliado"},{label:"PNTE",value:"pnte"},{label:"Ambos",value:"ambos"}],a=()=>{d.title=null,d.type=null,d.description=null,d.meta=null},E=async()=>{N.value=!0;const _={title:d.title,type:d.type,description:d.description,meta:d.meta,agreement_id:w.params.id};try{const $=m.dataRow?"PUT":"POST",I=m.dataRow?`agreement/update-commitment/${m.dataRow.id}`:"/agreement/create-commitment",O=await J({url:I,method:$,data:_});O.status==200&&(G.success(O.message),S("closeDraw"),a())}catch{G.error("Se presentó un error, los valores son requeridos")}finally{N.value=!1}},T=_=>{const $=d[_]?d[_].trim():"";d[_]=$};function M(_){d.title=_.title,d.type=_.type,d.description=_.description,d.meta=_.meta}return ae(()=>{m.dataRow&&M(m.dataRow)}),oe(()=>m.dataRow,_=>{_?M(_):a()}),(_,$)=>{const I=c("a-input"),O=c("a-form-item"),z=c("a-select"),b=c("a-textarea"),r=c("a-input-number"),p=c("a-button"),F=c("a-form");return o(),h(F,{layout:"vertical",model:d,name:"basic",autocomplete:"off",onFinish:E},{default:l(()=>[(o(),g(Y,null,te(P,(t,i)=>(o(),g(Y,{key:i},[t.type==="iText"?(o(),h(O,{key:0,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,max:t.max}]},{default:l(()=>[n(I,{value:d[t.name],"onUpdate:value":u=>d[t.name]=u,maxlength:t.max,onBlur:u=>T(t.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):y("",!0),t.type==="iSelect"?(o(),h(O,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[t.name=="type"?(o(),h(z,{key:0,value:d[t.name],"onUpdate:value":u=>d[t.name]=u,options:U},null,8,["value","onUpdate:value"])):y("",!0)]),_:2},1032,["name","label","rules"])):y("",!0),t.type==="iTextarea"?(o(),h(O,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[n(b,{value:d[t.name],"onUpdate:value":u=>d[t.name]=u,rows:3,maxlength:t.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):y("",!0),t.type==="iNumber"?(o(),h(O,{key:3,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[n(r,{value:d[t.name],"onUpdate:value":u=>d[t.name]=u,min:1,max:500,style:{width:"120px"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):y("",!0)],64))),64)),n(O,null,{default:l(()=>[n(p,{type:"primary","html-type":"submit",loading:N.value},{default:l(()=>[A(x(D.dataRow?"ACTUALIZAR":"GUARDAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}},Ce={accion:{type:"iText",label:"Nombre de la capacitación",name:"accion",required:!0,message:"Escribir la acción",disabled:!0,max:100,visible:!0},date:{type:"iDate",label:"Fecha",name:"date",required:!0,message:"Seleccionar fecha",disabled:!1},modality:{type:"iSelect",label:"Modalidad",name:"modality",required:!0,message:"Seleccionar una opción",disabled:!0},address:{type:"iText",label:"Lugar",name:"address",required:!1,message:"Escribir la acción",disabled:!0,max:100,visible:!1},participants:{type:"iNumber",label:"Número de participantes",name:"participants",required:!1,message:"Escribir la acción",disabled:!0},files:{type:"iFile",label:"Archivos (máximo 3 archivos)",name:"files",required:!1,message:"Subir archivos",disabled:!0},details:{type:"iTextarea",label:"Descripción",name:"details",required:!1,message:"Escribir la acción",disabled:!0,max:240,rows:3}};const Oe={class:"form-action"},Re="DD/MM/YYYY",Ue=3,qe=".pdf, .doc, .docx, .xls, .xlsx, .jpeg, .jpg, .png",Ae={__name:"DrawAccionesUgse",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:v}){H.locale("es");const m=D,S=se.get("token"),w="https://apituempresa.soporte-pnte.com/api/",d="http://127.0.0.1:8000/api/",P=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?d:w,N=v,U=k(Ce),a=ee({}),E=k(!1),T=Z(),M=[{label:"Virtual",value:"v"},{label:"Presencial",value:"p"}],_=i=>{const u=a[i]?a[i].trim():"";a[i]=u},$=()=>{a.accion=null,a.date=null,a.modality=null,a.address=null,a.participants=null,a.file1=null,a.file2=null,a.file3=null,a.details=null,r.value=[]},I=i=>i==="modality"?M:[],O=(i,u)=>{const s=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return u.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(s)},z=i=>{i=="p"?U.value.address.visible=!0:U.value.address.visible=!1,a.address=null},b=async()=>{E.value=!0;const i={accion:a.accion,date:H(a.date).format("YYYY-MM-DD"),modality:a.modality,address:a.address,participants:a.participants,file1:a.file1,file2:a.file2,file3:a.file3,details:a.details,agreement_id:T.params.id,commitment_id:m.dataRow.id};try{const u=await re.post(`${P}agreement/commitments`,i,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${S}`}});u.data.status==200&&(G.success(u.data.message),U.value.address.visible=!1,N("closeDraw"),$())}catch{G.error("Error al subir")}finally{E.value=!1}},r=k([]),p=({onSuccess:i})=>{setTimeout(()=>{i("ok")},0)},F=i=>r.value.length>=Ue?(G.error("Solo puedes cargar un máximo de 3 archivos"),!1):(a.file1?a.file2?a.file3||(a.file3=i):a.file2=i:a.file1=i,r.value.push({uid:i.uid,name:i.name,status:"done"}),!1),t=i=>{const u=r.value.findIndex(s=>s.uid===i.uid);u===0?a.file1=null:u===1?a.file2=null:u===2&&(a.file3=null),r.value.splice(u,1)};return(i,u)=>{const s=c("a-input"),R=c("a-form-item"),B=c("a-date-picker"),Q=c("a-select"),W=c("a-input-number"),j=c("a-textarea"),q=c("a-button"),V=c("a-upload"),X=c("a-form");return o(),g("section",null,[n(X,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:b},{default:l(()=>[f("div",Oe,[(o(!0),g(Y,null,te(U.value,(e,ue)=>(o(),g(Y,{key:ue},[e.type==="iText"&&e.visible?(o(),h(R,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:l(()=>[n(s,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,maxlength:e.max,onBlur:L=>_(e.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iDate"?(o(),h(R,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[n(B,{locale:C(de),value:a[e.name],"onUpdate:value":L=>a[e.name]=L,style:{width:"100%"},format:Re,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iSelect"?(o(),h(R,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[n(Q,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,options:I(e.name),"show-search":"","filter-option":O,onChange:z},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iNumber"?(o(),h(R,{key:3,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[n(W,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,min:1,max:200},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iTextarea"?(o(),h(R,{key:4,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[n(j,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,rows:e.rows,maxlength:e.max},null,8,["value","onUpdate:value","rows","maxlength"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iFile"?(o(),h(R,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[n(V,{"before-upload":F,"custom-request":p,"file-list":r.value,accept:qe,multiple:!0,"on-remove":t,"show-upload-list":""},{default:l(()=>[n(q,null,{default:l(()=>[n(C(ye)),u[0]||(u[0]=A(" Cargar archivos "))]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):y("",!0)],64))),128))]),n(R,null,{default:l(()=>[n(q,{type:"primary","html-type":"submit",loading:E.value},{default:l(()=>u[1]||(u[1]=[A("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Ee={class:"convenios-header"},Te={key:0},$e={key:"comment-nested-reply-to",class:"ico-delete-comp"},Ie={class:"convenios-description"},Ne={style:{"white-space":"normal"}},Me={key:0,class:"conv-part"},Le={key:1,class:"conv-part const-mod"},Pe={class:"conv-files"},ze=["onClick"],Fe=["onClick"],Be=["onClick"],Ye={__name:"DrawAccionesDetalle",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:v}){H.locale("es");const m=D,S=JSON.parse(localStorage.getItem("role")),w=JSON.parse(localStorage.getItem("profile")),d=se.get("token"),P="https://apituempresa.soporte-pnte.com/api/",N="http://127.0.0.1:8000/api/",U=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?N:P,a=v;ee({}),k(!1);const E=k(!1);Z();const T=k(null),M=k([]),_=ie(me,{style:{fontSize:"18px"},spin:!0}),$=b=>H(b).format("DD/MM/YYYY"),I=async(b,r)=>{T.value=r;try{const p=await re.get(`${U}agreement/commitment-download/${b}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${d}`}}),F=window.URL.createObjectURL(new Blob([p.data])),t=document.createElement("a");t.href=F,t.setAttribute("download",r),document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(p){console.error("Error al descargar el archivo",p)}finally{T.value=null}},O=async b=>{try{(await J({url:`/agreement/commitment-delete/${b}`,method:"DELETE"})).status==200&&(z(m.dataRow),a("closeDraw"))}catch(r){console.error("Error de red:",r)}},z=async b=>{try{E.value=!0;const r=await J({url:`/agreement/commitments/${b.id}`,method:"GET"});M.value=r.data}catch(r){console.error("Error de red:",r)}finally{E.value=!1}};return k([]),ae(()=>{m.dataRow&&z(m.dataRow)}),oe(()=>m.dataRow,b=>{b&&z(b)}),(b,r)=>{const p=c("a-empty"),F=c("a-popconfirm"),t=c("a-avatar"),i=c("a-spin"),u=c("a-comment");return o(),g("section",null,[n(i,{spinning:E.value},{default:l(()=>[M.value.length<1?(o(),h(p,{key:0})):(o(!0),g(Y,{key:1},te(M.value,(s,R)=>(o(),h(u,{key:R},{author:l(()=>[f("div",Ee,[f("span",null,x(s.profile.name)+" "+x(s.profile.lastname)+" "+x(s.profile.middlename),1),C(w).user_id==s.profile.id||C(S).some(B=>B.id===8)?(o(),g("div",Te,[f("span",$e,[n(F,{placement:"leftTop",title:"¿Estás seguro de que deseas eliminar este ítem?","ok-text":"Si","cancel-text":"No",onConfirm:B=>O(s.id)},{default:l(()=>[n(C(pe))]),_:2},1032,["onConfirm"])])])):y("",!0)])]),avatar:l(()=>[n(t,null,{default:l(()=>[A(x(s.profile.name.charAt(0)),1)]),_:2},1024)]),content:l(()=>[f("div",Ie,[f("div",null,[f("b",null,x(s.accion),1),f("span",null," - "+x($(s.date)),1)]),f("p",Ne,x(s.details),1),s.address?(o(),g("div",Me,[n(C(be)),A(" "+x(s.address),1)])):y("",!0),s.participants?(o(),g("div",Le,[f("div",null,[n(C(ge)),A(" "+x(s.participants)+" participantes ",1)]),f("div",null,[n(C(De)),r[0]||(r[0]=f("span",null," Modalidad: ",-1)),A(x(s.modality=="v"?"Virtual":"Presencial"),1)])])):y("",!0),f("div",Pe,[s.file1_name?(o(),g(Y,{key:0},[T.value==s.file1_name?(o(),h(i,{key:0,indicator:C(_)},null,8,["indicator"])):(o(),g("a",{key:1,onClick:B=>I(s.file1_path,s.file1_name)},[n(C(K)),A(" "+x(s.file1_name),1)],8,ze))],64)):y("",!0),s.file2_name?(o(),g(Y,{key:1},[T.value==s.file2_name?(o(),h(i,{key:0,indicator:C(_)},null,8,["indicator"])):(o(),g("a",{key:1,onClick:B=>I(s.file2_path,s.file2_name)},[n(C(K)),A(" "+x(s.file2_name),1)],8,Fe))],64)):y("",!0),s.file3_name?(o(),g(Y,{key:2},[T.value==s.file2_name?(o(),h(i,{key:0,indicator:C(_)},null,8,["indicator"])):(o(),g("a",{key:1,onClick:B=>I(s.file3_path,s.file3_name)},[n(C(K)),A(" "+x(s.file3_name),1)],8,Be))],64)):y("",!0)])])]),_:2},1024))),128))]),_:1},8,["spinning"])])}}};const Ve={style:{margin:".5rem 0 1rem 0",color:"var(--secondary)"}},je={style:{"text-transform":"uppercase"}},Ge={key:2},Je=["onClick"],He=["onClick"],Ze=["onClick"],Qe=50,na={__name:"PageCompromisosUGSE",setup(D){const v=k(!1),m=k(!1),S=k(!1),w=k(null),d=Z();_e();const P=k(!1),N=k([]),U=k(!1),a=[{title:"#",dataIndex:"idx",align:"center",width:50},{title:"COMPROMISO",dataIndex:"title",width:120},{title:"TIPO",dataIndex:"type",width:100,align:"center"},{title:"META",dataIndex:"meta",width:100,align:"center"},{title:"CATEGORÍA",dataIndex:"description",width:180},{title:"AVANCES",dataIndex:"avances",width:80,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],E=r=>{v.value=!0,w.value=r,m.value=!0},T=r=>{w.value=r,S.value=!0},M=r=>{w.value=r,U.value=!0},_=()=>{b(),m.value=!1,U.value=!1,v.value=!1},$=()=>{console.log("Fresh"),b()},I=()=>{v.value=!1,w.value=null,m.value=!0},O=k({page:1}),z=fe(()=>r=>(O.value.page-1)*Qe+r+1),b=async()=>{P.value=!0;try{const r=await J({url:`agreement/all-commitments/${d.params.id}`,method:"GET"});r.status==200&&(N.value=r.data)}catch{}finally{P.value=!1}};return ae(()=>{b()}),(r,p)=>{const F=c("router-link"),t=c("a-breadcrumb-item"),i=c("a-breadcrumb"),u=c("a-button"),s=c("a-tag"),R=c("a-menu-item"),B=c("a-menu"),Q=c("a-dropdown"),W=c("a-table"),j=c("a-drawer");return o(),g("section",null,[n(i,null,{default:l(()=>[n(t,null,{default:l(()=>[n(F,{to:"/admin/convenios/ugse"},{default:l(()=>p[4]||(p[4]=[A("Lista de convenios")])),_:1})]),_:1}),n(t,null,{default:l(()=>p[5]||(p[5]=[f("h4",null,"COMPROMISOS",-1)])),_:1})]),_:1}),f("h3",Ve,x(r.$router.currentRoute.value.params.name),1),n(u,{type:"primary",onClick:I},{default:l(()=>p[6]||(p[6]=[A("NUEVO")])),_:1}),p[7]||(p[7]=f("br",null,null,-1)),p[8]||(p[8]=f("br",null,null,-1)),n(W,{bordered:"",scroll:{x:200},class:"table-compromisos",columns:a,"data-source":N.value,pagination:!1,loading:P.value,size:"small"},{bodyCell:l(({column:q,record:V,index:X})=>[q.dataIndex=="idx"?(o(),g(Y,{key:0},[A(x(z.value(X)),1)],64)):y("",!0),q.dataIndex=="type"?(o(),h(s,{key:1},{default:l(()=>[f("span",je,x(V.type),1)]),_:2},1024)):y("",!0),q.dataIndex=="avances"?(o(),g("span",Ge,x(V.commitments.length),1)):y("",!0),q.dataIndex=="actions"?(o(),h(Q,{key:3,trigger:["click"]},{overlay:l(()=>[n(B,null,{default:l(()=>[n(R,null,{default:l(()=>[f("a",{onClick:e=>M(V)},"Nuevo avance",8,Je)]),_:2},1024),n(R,null,{default:l(()=>[f("a",{onClick:e=>T(V)},"Ver Avances",8,He)]),_:2},1024),n(R,null,{default:l(()=>[f("a",{onClick:e=>E(V)},"Editar",8,Ze)]),_:2},1024)]),_:2},1024)]),default:l(()=>[f("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=ve(()=>{},["prevent"]))},[n(u,{shape:"circle",icon:ie(C(he))},null,8,["icon"])])]),_:2},1024)):y("",!0)]),_:1},8,["data-source","loading"]),n(j,{open:m.value,"onUpdate:open":p[1]||(p[1]=q=>m.value=q),title:v.value?"Editar compromiso":"Nuevo compromiso",placement:"right",width:"450px"},{default:l(()=>[n(Se,{onCloseDraw:_,dataRow:w.value},null,8,["dataRow"])]),_:1},8,["open","title"]),n(j,{open:U.value,"onUpdate:open":p[2]||(p[2]=q=>U.value=q),title:"Registrar un Avance",placement:"right",width:"450px"},{default:l(()=>[n(Ae,{onCloseDraw:_,dataRow:w.value},null,8,["dataRow"])]),_:1},8,["open"]),n(j,{open:S.value,"onUpdate:open":p[3]||(p[3]=q=>S.value=q),title:"Detalles",placement:"right",width:"600px"},{default:l(()=>[n(Ye,{dataRow:w.value,onCloseDraw:$},null,8,["dataRow"])]),_:1},8,["open"])])}}};export{na as default};
