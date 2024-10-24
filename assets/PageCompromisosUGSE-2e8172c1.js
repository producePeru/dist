import{c as n,A as ue,z as H,a as ee,r as k,k as ae,M as le,b as c,o as l,s as g,w as o,d as b,F as Y,y as te,v,i as $,t as x,B as J,m as G,N as Z,g as se,e as _,h as C,O as de,J as re,S as ie,a6 as me,a4 as pe,a8 as K,u as _e,K as fe,L as ve}from"./index-fe1fc57d.js";import"./es-7f9a484e.js";import{C as ye}from"./CloudUploadOutlined-b1e4b59a.js";import{E as be}from"./EnvironmentOutlined-bcfe994f.js";import{T as ge}from"./TeamOutlined-f57e5c61.js";import{M as he}from"./MoreOutlined-10adac99.js";var we={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};const xe=we;function oe(D){for(var f=1;f<arguments.length;f++){var d=arguments[f]!=null?Object(arguments[f]):{},S=Object.keys(d);typeof Object.getOwnPropertySymbols=="function"&&(S=S.concat(Object.getOwnPropertySymbols(d).filter(function(h){return Object.getOwnPropertyDescriptor(d,h).enumerable}))),S.forEach(function(h){ke(D,h,d[h])})}return D}function ke(D,f,d){return f in D?Object.defineProperty(D,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):D[f]=d,D}var ne=function(f,d){var S=oe({},f,d.attrs);return n(ue,oe({},S,{icon:xe}),null)};ne.displayName="SafetyOutlined";ne.inheritAttrs=!1;const De=ne,Se={__name:"DrawCompromisos",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:f}){const d=D,S=f,h=H(),u=ee({title:null,type:null,description:null,meta:null}),P={title:{type:"iText",label:"Título del Compromiso",name:"title",required:!0,message:"Escribir el título",disabled:!0,max:100},type:{type:"iSelect",label:"Tipo compromiso",name:"type",required:!0,message:"Seleccionar una opción",disabled:!0},description:{type:"iTextarea",label:"Descripción del compromiso",name:"description",required:!1,message:"Escribir la descripción",disabled:!1,max:200},meta:{type:"iNumber",label:"Meta",name:"meta",required:!1,message:"Escribir la acción",disabled:!0}},I=k(!1),U=[{label:"Aliado",value:"aliado"},{label:"PNTE",value:"pnte"},{label:"Ambos",value:"ambos"}],a=()=>{u.title=null,u.type=null,u.description=null,u.meta=null},A=async()=>{I.value=!0;const p={title:u.title,type:u.type,description:u.description,meta:u.meta,agreement_id:h.params.id};try{const E=d.dataRow?"PUT":"POST",N=d.dataRow?`agreement/update-commitment/${d.dataRow.id}`:"/agreement/create-commitment",O=await J({url:N,method:E,data:p});O.status==200&&(G.success(O.message),S("closeDraw"),a())}catch{G.error("Se presentó un error, los valores son requeridos")}finally{I.value=!1}},T=p=>{const E=u[p]?u[p].trim():"";u[p]=E};function M(p){u.title=p.title,u.type=p.type,u.description=p.description,u.meta=p.meta}return ae(()=>{d.dataRow&&M(d.dataRow)}),le(()=>d.dataRow,p=>{p?M(p):a()}),(p,E)=>{const N=c("a-input"),O=c("a-form-item"),z=c("a-select"),y=c("a-textarea"),r=c("a-input-number"),w=c("a-button"),F=c("a-form");return l(),g(F,{layout:"vertical",model:u,name:"basic",autocomplete:"off",onFinish:A},{default:o(()=>[(l(),b(Y,null,te(P,(t,i)=>(l(),b(Y,{key:i},[t.type==="iText"?(l(),g(O,{key:0,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,max:t.max}]},{default:o(()=>[n(N,{value:u[t.name],"onUpdate:value":m=>u[t.name]=m,maxlength:t.max,onBlur:m=>T(t.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):v("",!0),t.type==="iSelect"?(l(),g(O,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[t.name=="type"?(l(),g(z,{key:0,value:u[t.name],"onUpdate:value":m=>u[t.name]=m,options:U},null,8,["value","onUpdate:value"])):v("",!0)]),_:2},1032,["name","label","rules"])):v("",!0),t.type==="iTextarea"?(l(),g(O,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[n(y,{value:u[t.name],"onUpdate:value":m=>u[t.name]=m,rows:3,maxlength:t.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):v("",!0),t.type==="iNumber"?(l(),g(O,{key:3,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[n(r,{value:u[t.name],"onUpdate:value":m=>u[t.name]=m,min:1,max:500,style:{width:"120px"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):v("",!0)],64))),64)),n(O,null,{default:o(()=>[n(w,{type:"primary","html-type":"submit",loading:I.value},{default:o(()=>[$(x(D.dataRow?"ACTUALIZAR":"GUARDAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}},Ce={accion:{type:"iText",label:"Nombre de la capacitación",name:"accion",required:!0,message:"Escribir la acción",disabled:!0,max:100,visible:!0},date:{type:"iDate",label:"Fecha",name:"date",required:!0,message:"Seleccionar fecha",disabled:!1},modality:{type:"iSelect",label:"Modalidad",name:"modality",required:!0,message:"Seleccionar una opción",disabled:!0},address:{type:"iText",label:"Lugar",name:"address",required:!1,message:"Escribir la acción",disabled:!0,max:100,visible:!1},participants:{type:"iNumber",label:"Número de participantes",name:"participants",required:!1,message:"Escribir la acción",disabled:!0},files:{type:"iFile",label:"Archivos (máximo 3 archivos)",name:"files",required:!1,message:"Subir archivos",disabled:!0},details:{type:"iTextarea",label:"Descripción",name:"details",required:!1,message:"Escribir la acción",disabled:!0,max:240,rows:3}};const Oe={class:"form-action"},Re="DD/MM/YYYY",Ue=3,qe=".pdf, .doc, .docx, .xls, .xlsx, .jpeg, .jpg, .png",$e={__name:"DrawAccionesUgse",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:f}){Z.locale("es");const d=D,S=se.get("token"),h="https://apituempresa.soporte-pnte.com/api/",u="http://127.0.0.1:8000/api/",P=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?u:h,I=f,U=k(Ce),a=ee({}),A=k(!1),T=H(),M=[{label:"Virtual",value:"v"},{label:"Presencial",value:"p"}],p=i=>{const m=a[i]?a[i].trim():"";a[i]=m},E=()=>{a.accion=null,a.date=null,a.modality=null,a.address=null,a.participants=null,a.file1=null,a.file2=null,a.file3=null,a.details=null,r.value=[]},N=i=>i==="modality"?M:[],O=(i,m)=>{const s=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return m.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(s)},z=i=>{i=="p"?U.value.address.visible=!0:U.value.address.visible=!1,a.address=null},y=async()=>{A.value=!0;const i={accion:a.accion,date:Z(a.date).format("YYYY-MM-DD"),modality:a.modality,address:a.address,participants:a.participants,file1:a.file1,file2:a.file2,file3:a.file3,details:a.details,agreement_id:T.params.id,commitment_id:d.dataRow.id};try{const m=await re.post(`${P}agreement/commitments`,i,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${S}`}});m.data.status==200&&(G.success(m.data.message),U.value.address.visible=!1,I("closeDraw"),E())}catch{G.error("Error al subir")}finally{A.value=!1}},r=k([]),w=({onSuccess:i})=>{setTimeout(()=>{i("ok")},0)},F=i=>r.value.length>=Ue?(G.error("Solo puedes cargar un máximo de 3 archivos"),!1):(a.file1?a.file2?a.file3||(a.file3=i):a.file2=i:a.file1=i,r.value.push({uid:i.uid,name:i.name,status:"done"}),!1),t=i=>{const m=r.value.findIndex(s=>s.uid===i.uid);m===0?a.file1=null:m===1?a.file2=null:m===2&&(a.file3=null),r.value.splice(m,1)};return(i,m)=>{const s=c("a-input"),R=c("a-form-item"),B=c("a-date-picker"),Q=c("a-select"),W=c("a-input-number"),j=c("a-textarea"),q=c("a-button"),V=c("a-upload"),X=c("a-form");return l(),b("section",null,[n(X,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:y},{default:o(()=>[_("div",Oe,[(l(!0),b(Y,null,te(U.value,(e,ce)=>(l(),b(Y,{key:ce},[e.type==="iText"&&e.visible?(l(),g(R,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:o(()=>[n(s,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,maxlength:e.max,onBlur:L=>p(e.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):v("",!0),e.type==="iDate"?(l(),g(R,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(B,{locale:C(de),value:a[e.name],"onUpdate:value":L=>a[e.name]=L,style:{width:"100%"},format:Re,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):v("",!0),e.type==="iSelect"?(l(),g(R,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(Q,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,options:N(e.name),"show-search":"","filter-option":O,onChange:z},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):v("",!0),e.type==="iNumber"?(l(),g(R,{key:3,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(W,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,min:1,max:200},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):v("",!0),e.type==="iTextarea"?(l(),g(R,{key:4,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(j,{value:a[e.name],"onUpdate:value":L=>a[e.name]=L,rows:e.rows,maxlength:e.max},null,8,["value","onUpdate:value","rows","maxlength"])]),_:2},1032,["name","label","rules"])):v("",!0),e.type==="iFile"?(l(),g(R,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(V,{"before-upload":F,"custom-request":w,"file-list":r.value,accept:qe,multiple:!0,"on-remove":t,"show-upload-list":""},{default:o(()=>[n(q,null,{default:o(()=>[n(C(ye)),$(" Cargar archivos ")]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):v("",!0)],64))),128))]),n(R,null,{default:o(()=>[n(q,{type:"primary","html-type":"submit",loading:A.value},{default:o(()=>[$("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Ae={class:"convenios-header"},Te={key:0},Ee={key:"comment-nested-reply-to",class:"ico-delete-comp"},Ne={class:"convenios-description"},Ie={style:{"white-space":"normal"}},Me={key:0,class:"conv-part"},Le={key:1,class:"conv-part const-mod"},Pe=_("span",null," Modalidad: ",-1),ze={class:"conv-files"},Fe=["onClick"],Be=["onClick"],Ye=["onClick"],Ve={__name:"DrawAccionesDetalle",props:["dataRow"],emits:["closeDraw"],setup(D,{emit:f}){Z.locale("es");const d=D,S=JSON.parse(localStorage.getItem("role")),h=JSON.parse(localStorage.getItem("profile")),u=se.get("token"),P="https://apituempresa.soporte-pnte.com/api/",I="http://127.0.0.1:8000/api/",U=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?I:P,a=f;ee({}),k(!1);const A=k(!1);H();const T=k(null),M=k([]),p=ie(me,{style:{fontSize:"18px"},spin:!0}),E=y=>Z(y).format("DD/MM/YYYY"),N=async(y,r)=>{T.value=r;try{const w=await re.get(`${U}agreement/commitment-download/${y}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${u}`}}),F=window.URL.createObjectURL(new Blob([w.data])),t=document.createElement("a");t.href=F,t.setAttribute("download",r),document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(w){console.error("Error al descargar el archivo",w)}finally{T.value=null}},O=async y=>{try{(await J({url:`/agreement/commitment-delete/${y}`,method:"DELETE"})).status==200&&(z(d.dataRow),a("closeDraw"))}catch(r){console.error("Error de red:",r)}},z=async y=>{try{A.value=!0;const r=await J({url:`/agreement/commitments/${y.id}`,method:"GET"});M.value=r.data}catch(r){console.error("Error de red:",r)}finally{A.value=!1}};return k([]),ae(()=>{d.dataRow&&z(d.dataRow)}),le(()=>d.dataRow,y=>{y&&z(y)}),(y,r)=>{const w=c("a-empty"),F=c("a-popconfirm"),t=c("a-avatar"),i=c("a-spin"),m=c("a-comment");return l(),b("section",null,[n(i,{spinning:A.value},{default:o(()=>[M.value.length<1?(l(),g(w,{key:0})):(l(!0),b(Y,{key:1},te(M.value,(s,R)=>(l(),g(m,{key:R},{author:o(()=>[_("div",Ae,[_("span",null,x(s.profile.name)+" "+x(s.profile.lastname)+" "+x(s.profile.middlename),1),C(h).user_id==s.profile.id||C(S).some(B=>B.id===8)?(l(),b("div",Te,[_("span",Ee,[n(F,{placement:"leftTop",title:"¿Estás seguro de que deseas eliminar este ítem?","ok-text":"Si","cancel-text":"No",onConfirm:B=>O(s.id)},{default:o(()=>[n(C(pe))]),_:2},1032,["onConfirm"])])])):v("",!0)])]),avatar:o(()=>[n(t,null,{default:o(()=>[$(x(s.profile.name.charAt(0)),1)]),_:2},1024)]),content:o(()=>[_("div",Ne,[_("div",null,[_("b",null,x(s.accion),1),_("span",null," - "+x(E(s.date)),1)]),_("p",Ie,x(s.details),1),s.address?(l(),b("div",Me,[n(C(be)),$(" "+x(s.address),1)])):v("",!0),s.participants?(l(),b("div",Le,[_("div",null,[n(C(ge)),$(" "+x(s.participants)+" participantes ",1)]),_("div",null,[n(C(De)),Pe,$(x(s.modality=="v"?"Virtual":"Presencial"),1)])])):v("",!0),_("div",ze,[s.file1_name?(l(),b(Y,{key:0},[T.value==s.file1_name?(l(),g(i,{key:0,indicator:C(p)},null,8,["indicator"])):(l(),b("a",{key:1,onClick:B=>N(s.file1_path,s.file1_name)},[n(C(K)),$(" "+x(s.file1_name),1)],8,Fe))],64)):v("",!0),s.file2_name?(l(),b(Y,{key:1},[T.value==s.file2_name?(l(),g(i,{key:0,indicator:C(p)},null,8,["indicator"])):(l(),b("a",{key:1,onClick:B=>N(s.file2_path,s.file2_name)},[n(C(K)),$(" "+x(s.file2_name),1)],8,Be))],64)):v("",!0),s.file3_name?(l(),b(Y,{key:2},[T.value==s.file2_name?(l(),g(i,{key:0,indicator:C(p)},null,8,["indicator"])):(l(),b("a",{key:1,onClick:B=>N(s.file3_path,s.file3_name)},[n(C(K)),$(" "+x(s.file3_name),1)],8,Ye))],64)):v("",!0)])])]),_:2},1024))),128))]),_:1},8,["spinning"])])}}};const je=_("h4",null,"COMPROMISOS",-1),Ge={style:{margin:".5rem 0 1rem 0",color:"var(--secondary)"}},Je=_("br",null,null,-1),Ze=_("br",null,null,-1),He={style:{"text-transform":"uppercase"}},Qe={key:2},We=["onClick"],Xe=["onClick"],Ke=["onClick"],ea=50,ra={__name:"PageCompromisosUGSE",setup(D){const f=k(!1),d=k(!1),S=k(!1),h=k(null),u=H();_e();const P=k(!1),I=k([]),U=k(!1),a=[{title:"#",dataIndex:"idx",align:"center",width:50},{title:"COMPROMISO",dataIndex:"title",width:120},{title:"TIPO",dataIndex:"type",width:100,align:"center"},{title:"META",dataIndex:"meta",width:100,align:"center"},{title:"CATEGORÍA",dataIndex:"description",width:180},{title:"AVANCES",dataIndex:"avances",width:80,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],A=r=>{f.value=!0,h.value=r,d.value=!0},T=r=>{h.value=r,S.value=!0},M=r=>{h.value=r,U.value=!0},p=()=>{y(),d.value=!1,U.value=!1,f.value=!1},E=()=>{console.log("Fresh"),y()},N=()=>{f.value=!1,h.value=null,d.value=!0},O=k({page:1}),z=fe(()=>r=>(O.value.page-1)*ea+r+1),y=async()=>{P.value=!0;try{const r=await J({url:`agreement/all-commitments/${u.params.id}`,method:"GET"});r.status==200&&(I.value=r.data)}catch{}finally{P.value=!1}};return ae(()=>{y()}),(r,w)=>{const F=c("router-link"),t=c("a-breadcrumb-item"),i=c("a-breadcrumb"),m=c("a-button"),s=c("a-tag"),R=c("a-menu-item"),B=c("a-menu"),Q=c("a-dropdown"),W=c("a-table"),j=c("a-drawer");return l(),b("section",null,[n(i,null,{default:o(()=>[n(t,null,{default:o(()=>[n(F,{to:"/admin/convenios/ugse"},{default:o(()=>[$("Lista de convenios")]),_:1})]),_:1}),n(t,null,{default:o(()=>[je]),_:1})]),_:1}),_("h3",Ge,x(r.$router.currentRoute.value.params.name),1),n(m,{type:"primary",onClick:N},{default:o(()=>[$("NUEVO")]),_:1}),Je,Ze,n(W,{bordered:"",scroll:{x:200},class:"table-compromisos",columns:a,"data-source":I.value,pagination:!1,loading:P.value,size:"small"},{bodyCell:o(({column:q,record:V,index:X})=>[q.dataIndex=="idx"?(l(),b(Y,{key:0},[$(x(z.value(X)),1)],64)):v("",!0),q.dataIndex=="type"?(l(),g(s,{key:1},{default:o(()=>[_("span",He,x(V.type),1)]),_:2},1024)):v("",!0),q.dataIndex=="avances"?(l(),b("span",Qe,x(V.commitments.length),1)):v("",!0),q.dataIndex=="actions"?(l(),g(Q,{key:3,trigger:["click"]},{overlay:o(()=>[n(B,null,{default:o(()=>[n(R,null,{default:o(()=>[_("a",{onClick:e=>M(V)},"Nuevo avance",8,We)]),_:2},1024),n(R,null,{default:o(()=>[_("a",{onClick:e=>T(V)},"Ver Avances",8,Xe)]),_:2},1024),n(R,null,{default:o(()=>[_("a",{onClick:e=>A(V)},"Editar",8,Ke)]),_:2},1024)]),_:2},1024)]),default:o(()=>[_("a",{class:"ant-dropdown-link",onClick:w[0]||(w[0]=ve(()=>{},["prevent"]))},[n(m,{shape:"circle",icon:ie(C(he))},null,8,["icon"])])]),_:2},1024)):v("",!0)]),_:1},8,["data-source","loading"]),n(j,{open:d.value,"onUpdate:open":w[1]||(w[1]=q=>d.value=q),title:f.value?"Editar compromiso":"Nuevo compromiso",placement:"right",width:"450px"},{default:o(()=>[n(Se,{onCloseDraw:p,dataRow:h.value},null,8,["dataRow"])]),_:1},8,["open","title"]),n(j,{open:U.value,"onUpdate:open":w[2]||(w[2]=q=>U.value=q),title:"Registrar un Avance",placement:"right",width:"450px"},{default:o(()=>[n($e,{onCloseDraw:p,dataRow:h.value},null,8,["dataRow"])]),_:1},8,["open"]),n(j,{open:S.value,"onUpdate:open":w[3]||(w[3]=q=>S.value=q),title:"Detalles",placement:"right",width:"600px"},{default:o(()=>[n(Ve,{dataRow:h.value,onCloseDraw:E},null,8,["dataRow"])]),_:1},8,["open"])])}}};export{ra as default};
