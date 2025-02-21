import{l as P,r as c,a as ae,j as W,T as ne,b as u,o as n,x as k,w as r,c as i,e as E,d,F as L,s as fe,q as h,h as T,H as me,K as X,m as z,a6 as Ae,ac as ye,t as V,i as j,a9 as ve,g as ge,p as he,L as $e,G as te,E as Te,X as Ne,a0 as Re,J as Ye}from"./index-61e3a352.js";import{_ as qe}from"./icoexcel-1b303edf.js";import{u as be}from"./selectes-1c4d74af.js";import"./es-ae8d7cd7.js";import{_ as De}from"./_plugin-vue_export-helper-c27b6911.js";import{S as Le}from"./SaveOutlined-894beb04.js";import{C as ze}from"./CloudUploadOutlined-0f8e77d9.js";import{M as Fe}from"./MessageOutlined-ba9a30b6.js";import{M as Me}from"./MoreOutlined-bb011813.js";const Pe={class:"grid-convenios"},Be={key:5},Ve={key:0},Ge={key:1},_e="DD/MM/YYYY",He={__name:"DrawConvenioUGO",props:["idConvenio"],emits:["closeDraw"],setup(H,{emit:B}){P.locale("es");const b=JSON.parse(localStorage.getItem("profile")),w=be(),Y=B,C=H;w.$patch({cities:w.cities}),w.$patch({provinces:w.provinces}),w.$patch({districts:w.districts}),w.fetchCities();const _=c(!1),O=c(!1),e=ae({}),D=[{value:1,label:"1 Año"},{value:2,label:"2 Años"},{value:3,label:"3 Años"},{value:4,label:"4 Años"},{value:5,label:"5 Años"},{value:6,label:"6 Años"},{value:7,label:"7 Años"},{value:8,label:"8 Años"},{value:9,label:"9 Años"},{value:10,label:"10 Años"}],S=(l,y)=>{l=="external"&&(y==1?(s.value.homeOperations.required=!1,s.value.homeOperations.label="Fecha de suscripción del convenio (OPCIONAL)",s.value.startDate.required=!1,s.value.startDate.label="Inicio Convenio Vigente (OPCIONAL)",s.value.years.required=!1,s.value.years.label="Número de años vigente (OPCIONAL)"):(s.value.homeOperations.required=!0,s.value.homeOperations.label="Fecha de suscripción del convenio",s.value.startDate.required=!0,s.value.startDate.label="Inicio Convenio Vigente",s.value.years.required=!0,s.value.years.label="Número de años vigente"))},G=l=>{const y=P(e.startDate).add(1,"day").startOf("day");return P(l).startOf("day").isBefore(y,"day")},q=l=>{e.province_id=null,e.district_id=null,w.fetchProvinces(l)},$=l=>{e.district_id=null,w.fetchDistricts(l)},N=(l,y)=>{const M=l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return y.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(M)},U=()=>{e.city_id=null,e.province_id=null,e.district_id=null,e.alliedEntity=null,e.homeOperations=null,e.startDate=null,e.external=null,e.years=null,e.endDate=null,e.observations=null,e.created_id=b.user_id},F=async()=>{_.value=!0;const l={city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,alliedEntity:e.alliedEntity,homeOperations:e.homeOperations?P(e.homeOperations).format("YYYY-MM-DD"):null,startDate:e.startDate?P(e.startDate).format("YYYY-MM-DD"):null,external:e.external==null?0:1,years:e.years,endDate:e.startDate?P(e.startDate).add(e.years,"year").format("YYYY-MM-DD"):null,observations:e.observations,created_id:b.user_id,entity:"ugo"};try{const y=C.idConvenio?"PUT":"POST",M=C.idConvenio?`agreement/update-values/${C.idConvenio.id}`:"agreement/create",A=await X({url:M,method:y,data:l});A.status==200&&(z.success(A.message),Y("closeDraw",!0),U())}catch(y){z.error("Se originó un error: "+y.message)}finally{_.value=!1}},p=()=>{z.error("Debes de completar todos los espacios requeridos")},o=async l=>{l.id&&(e.city_id=l.city_id,q(l.city_id),e.province_id=l.province_id,$(l.province_id),e.district_id=l.district_id,e.external=l.external,e.homeOperations=l.startOperations?P(l.startOperations,"YYYY-MM-DD"):null,e.startDate=l.startDate?P(l.startDate,"YYYY-MM-DD"):null,e.years=l.years,e.observations=l.observations,e.alliedEntity=l.entity,S("external",l.external))};W(()=>{C.idConvenio&&o(C.idConvenio)}),ne(()=>C.idConvenio,l=>{l?o(l):U()});const s=c({city_id:{type:"iSelect",label:"Región",name:"city_id",required:!0,message:"Seleccionar una región",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},alliedEntity:{type:"iText",label:"Entidad Aliada",name:"alliedEntity",required:!0,message:"Escribir la entidad aliada",disabled:!0,max:100},external:{type:"iSwitch",label:"CDE AGENTE EXTERNO",name:"external",required:!1,message:"Seleccionar",disabled:!0},homeOperations:{type:"iDate",label:"Fecha de suscripción del convenio",name:"homeOperations",required:!0,message:"Seleccionar fecha",disabled:!0},startDate:{type:"iDate",label:"Inicio Convenio Vigente",name:"startDate",required:!0,message:"Seleccionar fecha de convenio vigente",disabled:!0},years:{type:"iSelect",label:"Número de años vigente",name:"years",required:!0,message:"Seleccionar años",disabled:!1},observations:{type:"iTextarea",label:"Observaciones",name:"observations",required:!1,message:"Seleccionar",disabled:!1}});return(l,y)=>{const M=u("a-input"),A=u("a-form-item"),g=u("a-select"),Z=u("a-date-picker"),R=u("a-switch"),oe=u("a-textarea"),se=u("a-button"),Q=u("a-form"),ie=u("a-spin");return n(),k(ie,{spinning:O.value},{default:r(()=>[i(Q,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:F,onFinishFailed:p},{default:r(()=>[E("div",Pe,[(n(!0),d(L,null,fe(s.value,(a,le)=>(n(),d(L,{key:le},[a.type==="iText"?(n(),k(A,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,max:a.max}]},{default:r(()=>[i(M,{value:e[a.name],"onUpdate:value":x=>e[a.name]=x,maxlength:a.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iSelect"?(n(),k(A,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[a.name=="city_id"?(n(),k(g,{key:0,value:e[a.name],"onUpdate:value":x=>e[a.name]=x,options:T(w).cities,"show-search":"","filter-option":N,onChange:q},null,8,["value","onUpdate:value","options"])):h("",!0),a.name=="province_id"?(n(),k(g,{key:1,value:e[a.name],"onUpdate:value":x=>e[a.name]=x,options:T(w).provinces,"show-search":"","filter-option":N,onChange:$,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="district_id"?(n(),k(g,{key:2,value:e[a.name],"onUpdate:value":x=>e[a.name]=x,options:T(w).districts,"show-search":"","filter-option":N,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="years"?(n(),k(g,{key:3,value:e[a.name],"onUpdate:value":x=>e[a.name]=x,options:D,"show-search":"","filter-option":N},null,8,["value","onUpdate:value"])):h("",!0)]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iDate"?(n(),k(A,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[a.name=="endDate"?(n(),k(Z,{key:0,"disabled-date":G,locale:T(me),disabled:!e.startDate,value:e[a.name],"onUpdate:value":x=>e[a.name]=x,style:{width:"100%"},format:_e,placeholder:"día/mes/año"},null,8,["locale","disabled","value","onUpdate:value"])):(n(),k(Z,{key:1,locale:T(me),value:e[a.name],"onUpdate:value":x=>e[a.name]=x,style:{width:"100%"},format:_e,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"]))]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iSwitch"?(n(),k(A,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[i(R,{checked:e[a.name],"onUpdate:checked":x=>e[a.name]=x,"checked-children":"si","un-checked-children":"",checkedValue:1,unCheckedValue:0,onChange:x=>S(a.name,x)},null,8,["checked","onUpdate:checked","onChange"])]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iTextarea"?(n(),k(A,{key:4,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[i(oe,{value:e[a.name],"onUpdate:value":x=>e[a.name]=x,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iSpace"?(n(),d("span",Be)):h("",!0)],64))),128))]),i(A,null,{default:r(()=>[i(se,{type:"primary","html-type":"submit",loading:_.value},{default:r(()=>[H.idConvenio?(n(),d("span",Ve,"ACTUALIZAR")):(n(),d("span",Ge,"GUARDAR"))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},je=De(He,[["__scopeId","data-v-569dcf53"]]);const Xe={class:"accion-icons"},Je={key:0},Ze={key:1},Ke={__name:"DrawAcciones",props:["idConvenio"],emits:["refreshTable"],setup(H,{emit:B}){const b=H,w=B,Y=c([]),C=c(!0),_=c(null),O=c(""),e=c(!1);c(null);const D=ae({description:null});W(()=>{b.idConvenio&&U(b.idConvenio)}),ne(()=>b.idConvenio,p=>{p&&U()});function S(p){_.value=p.id,O.value=p.description,ve(()=>{F()})}function G(p){const o=Y.value.findIndex(s=>s.id===p.id);o!==-1&&(Y.value[o].description=O.value),_.value=null,$(p.id)}const q=async p=>{try{const o=await X({url:`agreement/delete-acction/${p.id}`,method:"DELETE"});o.status==200&&(U(),z.success(o.message),w("refreshTable",!0))}catch(o){console.error("Error de red:",o)}},$=async p=>{try{const o={description:O.value},s=await X({url:`agreement/update/${p}`,method:"PUT",data:o});s.status==200&&(z.success(s.message),U())}catch(o){console.error("Error de red:",o)}},N=async()=>{try{const p={description:D.description,agreements_id:b.idConvenio},o=await X({url:"agreement/create-acction",method:"POST",data:p});o.status==200&&(z.success(o.message),w("refreshTable",!0),U(),D.description=null)}catch(p){console.error("Error de red:",p)}},U=async()=>{C.value=!0;try{const p=await X({url:`agreement/list/${b.idConvenio}`,method:"GET"});p.status==200&&(Y.value=p.data)}catch{}finally{C.value=!1}},F=()=>{ve(()=>{const p=document.getElementById("auto-resize");p.style.height="auto",p.style.height=p.scrollHeight+"px"})};return(p,o)=>{const s=u("a-textarea"),l=u("a-spin"),y=u("a-form-item"),M=u("a-button"),A=u("a-form");return n(),d("div",null,[i(l,{spinning:C.value},{default:r(()=>[(n(!0),d(L,null,fe(Y.value,(g,Z)=>(n(),d("div",{class:"acciones",key:Z},[E("div",Xe,[i(T(Ae),{class:"pointer ico-acc",onClick:R=>S(g)},null,8,["onClick"]),_.value===g.id?(n(),k(T(Le),{key:0,class:"pointer ico-save",onClick:R=>G(g)},null,8,["onClick"])):h("",!0),i(T(ye),{class:"pointer ico-acc",onClick:R=>q(g)},null,8,["onClick"])]),_.value===g.id?(n(),d("div",Je,[i(s,{value:O.value,"onUpdate:value":o[0]||(o[0]=R=>O.value=R),onInput:F,id:"auto-resize"},null,8,["value"])])):(n(),d("p",Ze,V(g.description),1))]))),128))]),_:1},8,["spinning"]),i(A,{layout:"vertical",model:D,name:"basic",autocomplete:"off",onFinish:N},{default:r(()=>[i(y,{name:"description",label:"Registra una acción",rules:[{required:!0,message:"Escribir la descripción"}]},{default:r(()=>[i(s,{value:D.description,"onUpdate:value":o[1]||(o[1]=g=>D.description=g),maxlength:250,rows:4},null,8,["value"])]),_:1}),i(y,null,{default:r(()=>[i(M,{type:"primary","html-type":"submit",loading:e.value},{default:r(()=>o[2]||(o[2]=[j("CREAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Qe={__name:"DrawObservations",props:["idConvenio"],emits:["refreshTable"],setup(H,{emit:B}){const b=H,w=B;c([]);const Y=c(!0);c(null),c("");const C=c(!1);c(null);const _=ae({description:null});W(()=>{b.idConvenio&&e(b.idConvenio)}),ne(()=>b.idConvenio,D=>{D&&e()});const O=async()=>{C.value=!0;try{const D={observations:_.description},S=await X({url:`agreement/update-values/${b.idConvenio.id}`,method:"PUT",data:D});S.status==200&&(z.success(S.message),w("refreshTable",!0))}catch(D){console.error("Error de red:",D)}finally{C.value=!1}},e=async()=>{_.description=b.idConvenio.observations,_.description!=null&&(Y.value=!1)};return(D,S)=>{const G=u("a-textarea"),q=u("a-form-item"),$=u("a-button"),N=u("a-form"),U=u("a-spin");return n(),d("div",null,[i(U,{spinning:Y.value},{default:r(()=>[i(N,{layout:"vertical",model:_,name:"basic",autocomplete:"off",onFinish:O},{default:r(()=>[i(q,{name:"description",label:"Orbservaciones",rules:[{required:!0,message:"Escribir la descripción"}]},{default:r(()=>[i(G,{value:_.description,"onUpdate:value":S[0]||(S[0]=F=>_.description=F),rows:6},null,8,["value"])]),_:1}),i(q,null,{default:r(()=>[i($,{type:"primary","html-type":"submit",loading:C.value},{default:r(()=>S[1]||(S[1]=[j("ACTUALIZAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}};const We={class:"file-options"},et={style:{"line-height":"1.3"}},tt=["onClick"],at=["onClick"],nt={__name:"DrawFiles",props:["idConvenio"],setup(H){P.locale("es");const B=ge.get("token"),b=H,w="https://apituempresa.soporte-pnte.com/api/",Y="http://127.0.0.1:8000/api/",C=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?Y:w,_=c(!1),O=c([]),e=c(null),D=c(null),S=he($e,{style:{fontSize:"20px"},spin:!0});W(()=>{b.idConvenio&&p(b.idConvenio)}),ne(()=>b.idConvenio,o=>{o&&p(o)});const G=o=>P(o).format("DD-MM-YYYY HH:mm"),q=o=>($(o),!1),$=async o=>{const s=new FormData;s.append("file",o),s.append("agreements_id",b.idConvenio),_.value=!0;try{const{data:l}=await te.post(`${C}agreement/file`,s,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${B}`}});l.status==200&&(z.success(l.message),p(b.idConvenio))}catch{z.error("Error al subir este tipo de archivo")}finally{_.value=!1}},N=async o=>{e.value=o.uid;try{const s=await te({url:`${C}agreement/file-download/${o.uid}`,method:"POST",responseType:"blob",headers:{Authorization:`Bearer ${B}`}}),l=window.URL.createObjectURL(new Blob([s.data])),y=document.createElement("a");y.href=l,y.setAttribute("download",o.name),document.body.appendChild(y),y.click(),window.URL.revokeObjectURL(l),document.body.removeChild(y)}catch(s){console.error("Error downloading file:",s)}finally{e.value=null}},U=o=>{o.file.status!=="uploading"&&console.log(o.file,o.fileList),o.file.status==="done"?(z.success(`${o.file.name} file uploaded successfully`),O.value=o.fileList.filter(s=>s.status!=="error")):o.file.status==="error"&&(z.error(`${o.file.name} file upload failed.`),O.value=o.fileList.filter(s=>s.uid!==o.file.uid))},F=async o=>{D.value=o.uid;try{const s=await X({url:`agreement/delete/file/${o.uid}`,method:"DELETE"});s.status==200&&(p(b.idConvenio),z.success(s.message))}catch(s){console.error("Error de red:",s)}finally{D.value=null}},p=async o=>{try{const{data:s}=await te.get(`${C}agreement/list-files/${o}`,{headers:{Authorization:`Bearer ${B}`}});s.status===200&&(O.value=s.data.map(l=>({uid:l.id,name:l.name,status:"done",url:l.path,date:l.created_at})))}catch(s){console.error("Error fetching files:",s)}};return(o,s)=>{const l=u("a-button"),y=u("a-spin"),M=u("a-space"),A=u("a-upload");return n(),d("div",null,[s[1]||(s[1]=E("div",{class:"agreements-file"},[E("b",null,"Formatos a subir"),E("span",null,"pdf, doc, docx, xls, xlsx, ppt, pptx"),E("span",null,"*(Máximo 20MB)")],-1)),i(A,{"file-list":O.value,name:"file",onChange:U,"custom-request":$,"before-upload":q},{itemRender:r(({file:g,actions:Z})=>[i(M,{style:{margin:"0rem 0","font-size":"13px",width:"100%"}},{default:r(()=>[E("div",We,[E("span",et,V(g.name),1),E("span",null,V(G(g.date)),1),e.value!=g.uid?(n(),d("a",{key:0,onClick:R=>N(g)},"Descargar",8,tt)):(n(),k(y,{key:1,indicator:T(S)},null,8,["indicator"])),D.value==g.uid?(n(),k(y,{key:2,indicator:T(S)},null,8,["indicator"])):(n(),d("a",{key:3,onClick:R=>F(g),style:{color:"var(--error)"}},[i(T(ye))],8,at))])]),_:2},1024)]),default:r(()=>[i(l,{style:{"margin-bottom":".6rem"},loading:_.value},{default:r(()=>[i(T(ze)),s[0]||(s[0]=j(" SUBIR ARCHIVO "))]),_:1},8,["loading"])]),_:1},8,["file-list"])])}}};const ot={key:0},st={key:1},it={key:0},lt={key:1},rt={key:0},dt={key:1},ut={key:0},ct={key:1},pt={key:0},mt={key:1},vt={key:0,class:"list-days"},_t={key:1,class:"list-days"},ft={key:0},yt=["onClick"],gt=["onClick"],ht={class:"paginator"},bt={__name:"ConvenioEstado",props:["idConvenio"],setup(H){P.locale("es"),JSON.parse(localStorage.getItem("profile")),be();const B=ge.get("token"),b="https://apituempresa.soporte-pnte.com/api/",w="http://127.0.0.1:8000/api/",Y=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?w:b;c(null),c(null);const C=c(!1),_=c(null),O=c(0),e=c(50),D=c({page:0}),S=c(1200),G=c([]),q=c(!1),$=c(!1),N=c(!1),U=c(!1),F=c(!1);c(null),c(null);const p=c(window.innerHeight-100),o=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"REGIÓN",dataIndex:"city",fixed:"left",width:120},{title:"PROVINCIA",dataIndex:"province",fixed:"left",width:120},{title:"DISTRITO",dataIndex:"district",fixed:"left",width:140},{title:"ENTIDAD ALIADA",dataIndex:"entity",width:300},{title:"CDE AGENTE",dataIndex:"externo",width:120,align:"center"},{title:"FECHA DE SUSCRIPCIÓN DE CONVENIO",dataIndex:"startOperations",align:"center",width:180},{title:"INICIO DE CONVENIO VIGENTE",dataIndex:"startDate",align:"center",width:180},{title:"N° DE AÑOS VIGENTE",dataIndex:"years",width:120,align:"center"},{title:"FIN DEL CONVENIO",dataIndex:"endDate",align:"center",width:180},{title:"ESTADO",dataIndex:"status",align:"center",width:150},{title:"FECHA RESTANTE",dataIndex:"numbrestantes",align:"center",width:140},{title:"OBSERVACIONES",dataIndex:"observations",align:"center",width:140},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],s=ae({search:""}),l=()=>{let m={search:s.search};J(m)},y=()=>{s.search||J()},M=m=>{_.value=m,$.value=!0},A=m=>{_.value=m,U.value=!0},g=m=>P(m).format("DD/MM/YYYY"),Z=m=>{_.value=m.id,F.value=!0},R=(m,t)=>{const I=new Date(m),K=new Date,re=I.getTime()-K.getTime();return Math.floor(re/(1e3*3600*24))+1},oe=m=>m<=0||m<20?"red":m<40?"#f9e717":"#11d811",se=m=>{D.value.page=m,J()},Q=()=>{p.value=window.innerHeight-320},ie=()=>{_.value=null,$.value=!0},a=m=>{J(),m==1&&($.value=!1,_.value=null),m==2&&(N.value=!1),m==4&&(U.value=!1),_.value=null},le=async m=>{try{const t=await X({url:`agreement/delete/${m.id}`,method:"DELETE"});t.status==200&&(J(),z.success(t.message))}catch(t){console.error("Error de red:",t)}},x=Te(()=>m=>D.value.page*e.value+m+1),J=async m=>{try{q.value=!0;let t;t=D.value.page==0?"":D.value,t=m?{...t,...m}:t;const{data:I}=await X({url:"agreement/list/ugo",method:"GET",params:t});G.value=I==null?void 0:I.data,O.value=I.total,e.value=I.per_page}catch(t){console.error("Error de red:",t)}finally{q.value=!1}},Ce=async()=>{C.value=!0;try{const m=await te({url:`${Y}agreement/download`,method:"GET",responseType:"blob",headers:{Authorization:`Bearer ${B}`}}),t=window.URL.createObjectURL(new Blob([m.data])),I=document.createElement("a"),K="convenios.xlsx";I.href=t,I.setAttribute("download",K),document.body.appendChild(I),I.click(),window.URL.revokeObjectURL(t),document.body.removeChild(I)}catch(m){console.error("Error downloading file:",m)}finally{C.value=!1}};return Ne(()=>{window.removeEventListener("resize",Q)}),W(()=>{window.addEventListener("resize",Q),Q(),J()}),(m,t)=>{const I=u("a-button"),K=u("a-col"),re=u("a-input"),pe=u("a-input-group"),we=u("a-row"),de=u("a-tag"),xe=u("a-progress"),ue=u("a-menu-item"),ke=u("a-popconfirm"),Ee=u("a-menu"),Oe=u("a-dropdown"),Ie=u("a-table"),Se=u("a-pagination"),ee=u("a-drawer");return n(),d(L,null,[E("div",null,[t[19]||(t[19]=E("h3",{class:"title-produce"},"CONVENIOS UGO",-1)),i(we,{style:{margin:"1rem 0"}},{default:r(()=>[i(K,{xs:24,md:12,lg:18},{default:r(()=>[i(I,{type:"primary",onClick:ie,style:{"margin-right":".5rem"}},{default:r(()=>t[12]||(t[12]=[j("NUEVO")])),_:1}),i(I,{class:"btn-excel",onClick:Ce,loading:C.value,type:"primary"},{default:r(()=>t[13]||(t[13]=[E("img",{width:"20",style:{margin:"-2px 0 0 0"},src:qe},null,-1)])),_:1},8,["loading"])]),_:1}),i(K,{xs:24,md:12,lg:6},{default:r(()=>[i(pe,{compact:""},{default:r(()=>[i(re,{value:s.search,"onUpdate:value":t[0]||(t[0]=f=>s.search=f),style:{width:"calc(100% - 80px)"},onInput:y,onPressEnter:l},null,8,["value"]),i(I,{type:"primary",disabled:s.search==="",onClick:l},{default:r(()=>t[14]||(t[14]=[j("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),i(Ie,{bordered:"",scroll:{x:S.value,y:p.value},class:"table-agreements",columns:o,"data-source":G.value,pagination:!1,loading:q.value,size:"small"},{headerCell:r(({column:f})=>t[15]||(t[15]=[])),bodyCell:r(({column:f,record:v,index:Ue})=>[f.dataIndex=="idx"?(n(),d(L,{key:0},[j(V(x.value(Ue)),1)],64)):h("",!0),f.dataIndex=="externo"?(n(),d(L,{key:1},[v.external==1?(n(),k(de,{key:0,color:"blue"},{default:r(()=>t[16]||(t[16]=[j("EXTERNO")])),_:1})):h("",!0),v.external==0?(n(),k(de,{key:1,color:"red"},{default:r(()=>t[17]||(t[17]=[j("PNTE")])),_:1})):h("",!0)],64)):h("",!0),f.dataIndex=="startOperations"?(n(),d(L,{key:2},[v.startOperations?(n(),d("span",ot,V(g(v.startOperations)),1)):(n(),d("span",st,"-"))],64)):h("",!0),f.dataIndex=="years"?(n(),d(L,{key:3},[v.years?(n(),d("span",lt,V(v.years),1)):(n(),d("span",it,"-"))],64)):h("",!0),f.dataIndex=="startDate"?(n(),d(L,{key:4},[v.startDate?(n(),d("span",rt,V(g(v==null?void 0:v.startDate)),1)):(n(),d("span",dt,"-"))],64)):h("",!0),f.dataIndex=="endDate"?(n(),d(L,{key:5},[v.endDate?(n(),d("span",ct,V(g(v==null?void 0:v.endDate)),1)):(n(),d("span",ut,"-"))],64)):h("",!0),f.dataIndex=="numbrestantes"?(n(),d(L,{key:6},[v.endDate?(n(),d("div",mt,[R(v.endDate,v.startDate)>=1?(n(),d("p",vt,V(R(v.endDate,v.startDate))+" días faltantes",1)):(n(),d("p",_t,V(R(v.endDate,v.startDate))+" días vencidos",1))])):(n(),d("span",pt,"-"))],64)):h("",!0),f.dataIndex=="status"?(n(),d(L,{key:7},[v.endDate?(n(),k(xe,{key:1,style:{margin:"0"},percent:R(v.endDate,v.startDate),size:4,showInfo:!1,strokeColor:oe(R(v.endDate,v.startDate))},null,8,["percent","strokeColor"])):(n(),d("span",ft,"-"))],64)):h("",!0),f.dataIndex=="observations"?(n(),d(L,{key:8},[v!=null&&v.observations?(n(),k(T(Fe),{key:0,class:"observation-icon",onClick:ce=>A(v)},null,8,["onClick"])):h("",!0)],64)):h("",!0),f.dataIndex=="actions"?(n(),k(Oe,{key:9,trigger:["click"]},{overlay:r(()=>[i(Ee,null,{default:r(()=>[i(ue,null,{default:r(()=>[E("a",{onClick:ce=>Z(v)},"Archivos",8,yt)]),_:2},1024),i(ue,null,{default:r(()=>[E("a",{onClick:ce=>M(v)},"Editar",8,gt)]),_:2},1024),i(ue,null,{default:r(()=>[i(ke,{title:"¿Seguro de eliminar?",onConfirm:ce=>le(v)},{icon:r(()=>[i(T(Re),{style:{color:"red"}})]),default:r(()=>[t[18]||(t[18]=E("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:r(()=>[E("a",{class:"ant-dropdown-link",onClick:t[1]||(t[1]=Ye(()=>{},["prevent"]))},[i(I,{shape:"circle",icon:he(T(Me)),size:"small"},null,8,["icon"])])]),_:2},1024)):h("",!0)]),_:1},8,["scroll","data-source","loading"])]),E("div",ht,[E("span",null,[i(de,{color:"blue"},{default:r(()=>[E("b",null,V(O.value),1)]),_:1}),t[20]||(t[20]=j("Convenios"))]),i(Se,{size:"small",total:O.value,pageSize:e.value,onChange:se,showSizeChanger:!1},null,8,["total","pageSize"])]),i(ee,{open:$.value,"onUpdate:open":t[3]||(t[3]=f=>$.value=f),"root-class-name":"root-class-name",title:"Convenios",placement:"right",width:"650"},{default:r(()=>[i(je,{idConvenio:_.value,onCloseDraw:t[2]||(t[2]=f=>a(1))},null,8,["idConvenio"])]),_:1},8,["open"]),i(ee,{open:N.value,"onUpdate:open":t[6]||(t[6]=f=>N.value=f),title:"Acciones",placement:"right",width:"550"},{default:r(()=>[i(Ke,{idConvenio:_.value,onCloseDraw:t[4]||(t[4]=f=>a(2)),onRefreshTable:t[5]||(t[5]=f=>J())},null,8,["idConvenio"])]),_:1},8,["open"]),i(ee,{open:F.value,"onUpdate:open":t[8]||(t[8]=f=>F.value=f),title:"Cargar Archivos",placement:"right",width:"550"},{default:r(()=>[i(nt,{idConvenio:_.value,onCloseDraw:t[7]||(t[7]=f=>a(3))},null,8,["idConvenio"])]),_:1},8,["open"]),i(ee,{open:U.value,"onUpdate:open":t[11]||(t[11]=f=>U.value=f),title:"Observaciones",placement:"right",width:"550"},{default:r(()=>[i(Qe,{idConvenio:_.value,onCloseDraw:t[9]||(t[9]=f=>a(4)),onRefreshTable:t[10]||(t[10]=f=>J())},null,8,["idConvenio"])]),_:1},8,["open"])],64)}}},Ut=De(bt,[["__scopeId","data-v-e449ebc7"]]);export{Ut as default};
