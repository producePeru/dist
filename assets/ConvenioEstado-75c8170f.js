import{l as j,r,a as ee,j as W,T as te,b as l,o as s,x as w,w as o,c as n,e as S,d as b,F as B,s as pe,h as $,q as y,H as ue,K as X,m as P,a6 as Ie,ac as ve,t as H,i as L,a9 as ce,g as _e,p as fe,L as Ue,G as ie,E as Ae,X as Se,a0 as Te,J as Oe}from"./index-61e3a352.js";import{u as ge}from"./selectes-1c4d74af.js";import"./es-ae8d7cd7.js";import{_ as ye}from"./_plugin-vue_export-helper-c27b6911.js";import{S as $e}from"./SaveOutlined-894beb04.js";import{C as Ne}from"./CloudUploadOutlined-0f8e77d9.js";import{M as Re}from"./MessageOutlined-ba9a30b6.js";import{M as Le}from"./MoreOutlined-bb011813.js";const Pe={alliedEntity:{type:"iText",label:"Entidad Aliada",name:"alliedEntity",required:!0,message:"Escribir la entidad aliada",disabled:!0,max:100},ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"El RUC debe tener exactamente 11 caracteres.",disabled:!0,min:11,max:11},component:{type:"iSelect",label:"Componente",name:"components",required:!0,message:"Seleccionar un componente",disabled:!0},city_id:{type:"iSelect",label:"Región",name:"city_id",required:!0,message:"Seleccionar una región",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},startDate:{type:"iDate",label:"Inicio Convenio Vigente",name:"startDate",required:!0,message:"Seleccionar fecha de convenio vigente",disabled:!0},years:{type:"iSelect",label:"Años del convenio",name:"years",required:!0,message:"Seleccionar años",disabled:!1},aliado:{type:"iText",label:"REPRESENTANTE LEGAL - NOMBRES",name:"aliado",required:!0,message:"Escribir los nombres y apellidos",disabled:!0,max:100},aliadoPhone:{type:"iNumber",label:"REPRESENTANTE LEGAL - CELULAR",name:"aliadoPhone",required:!0,message:"Escribir el número",disabled:!0,max:9},focal:{type:"iText",label:"PUNTO FOCAL - NOMBRES",name:"focal",required:!0,message:"Escribir datos del punto focal",disabled:!0,max:100},focalCargo:{type:"iText",label:"PUNTO FOCAL - CARGO",name:"focalCargo",required:!0,message:"Escribir cargo del Punto Focal",disabled:!0,max:50},focalPhone:{type:"iNumber",label:"PUNTO FOCAL - NUM. CELULAR",name:"focalPhone",required:!0,message:"Escribir el número de telf.",disabled:!0,max:9},renovation:{type:"iSwitch",label:"Renovación Automática",name:"renovation",required:!1,message:"Seleccionar",disabled:!0},observations:{type:"iTextarea",label:"Comentarios",name:"observations",required:!1,message:"Seleccionar",disabled:!1}};const qe={class:"grid-convenios"},ze={key:6},Fe={key:0},Me={key:1},me="DD/MM/YYYY",Ye={__name:"DrawConvenioUGSE",props:["idConvenio"],emits:["closeDraw"],setup(J,{emit:E}){j.locale("es");const f=JSON.parse(localStorage.getItem("profile")),h=ge(),O=E,k=J;h.$patch({cities:h.cities}),h.$patch({provinces:h.provinces}),h.$patch({districts:h.districts}),h.fetchCities();const C=r(!1),U=r(!1),t=ee({}),D=[{value:1,label:"1 Año"},{value:2,label:"2 Años"},{value:3,label:"3 Años"},{value:4,label:"4 Años"},{value:5,label:"5 Años"},{value:6,label:"6 Años"},{value:7,label:"7 Años"},{value:8,label:"8 Años"},{value:9,label:"9 Años"},{value:10,label:"10 Años"}],I=[{value:"financiamiento",label:"Acceso en Financiamiento"},{value:"desarrollo",label:"Desarrollo Productivo"},{value:"digitalizacion",label:"Digitalización"},{value:"formalizacion",label:"Formalización"},{value:"gestion",label:"Gestión Empresarial"}],q=a=>{const d=t[a]?t[a].trim():"";t[a]=d},F=a=>{const d=j(t.startDate).add(1,"day").startOf("day");return j(a).startOf("day").isBefore(d,"day")},z=a=>{t.province_id=null,t.district_id=null,h.fetchProvinces(a)},M=a=>{t.district_id=null,h.fetchDistricts(a)},x=(a,d)=>{const g=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return d.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(g)},Y=()=>{["city_id","province_id","district_id","alliedEntity","ruc","components","startDate","years","aliado","aliadoPhone","focal","focalCargo","focalPhone","endDate","observations"].forEach(d=>{t[d]=null}),t.created_id=f.user_id},c=async()=>{C.value=!0;const a={city_id:t.city_id,province_id:t.province_id,district_id:t.district_id,alliedEntity:t.alliedEntity,ruc:t.ruc,components:t.components,startDate:j(t.startDate).format("YYYY-MM-DD"),years:t.years,aliado:t.aliado,aliadoPhone:t.aliadoPhone,focal:t.focal,focalCargo:t.focalCargo,focalPhone:t.focalPhone,renovation:t.renovation,endDate:j(t.startDate).add(t.years,"year").format("YYYY-MM-DD"),observations:t.observations,created_id:f.user_id,entity:"ugse"};try{const d=k.idConvenio?"PUT":"POST",g=k.idConvenio?`agreement/update-values/${k.idConvenio.id}`:"agreement/create-ugse",T=await X({url:g,method:d,data:a});T.status==200&&(P.success(T.message),O("closeDraw",!0),Y())}catch(d){P.error("Se originó un error: "+d.message)}finally{C.value=!1}},m=()=>{P.error("Por favor corrige los valores con errores")},i=async a=>{a.id&&(t.city_id=a.city_id,z(a.city_id),t.province_id=a.province_id,M(a.province_id),t.district_id=a.district_id,t.ruc=a.ruc,t.components=a.components,t.startDate=j(a.startDate,"YYYY-MM-DD"),t.years=a.years,t.aliado=a.aliado,t.aliadoPhone=a.aliadoPhone,t.focal=a.focal,t.focalCargo=a.focalCargo,t.focalPhone=a.focalPhone,t.observations=a.observations,t.alliedEntity=a.entity)};return W(()=>{k.idConvenio?i(k.idConvenio):(t.city_id=15,z(15))}),te(()=>k.idConvenio,a=>{a?i(a):Y()}),(a,d)=>{const g=l("a-input"),T=l("a-form-item"),N=l("a-input-number"),A=l("a-select"),V=l("a-date-picker"),Z=l("a-switch"),ae=l("a-textarea"),ne=l("a-button"),G=l("a-form"),u=l("a-spin");return s(),w(u,{spinning:U.value},{default:o(()=>[n(G,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:c,onFinishFailed:m},{default:o(()=>[S("div",qe,[(s(!0),b(B,null,pe($(Pe),(e,R)=>(s(),b(B,{key:R},[e.type==="iText"?(s(),w(T,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max},...e.name==="ruc"?[{type:"string",len:11,message:e.message},{pattern:/^\d{11}$/,message:"El RUC debe ser numérico."},{pattern:/^(10|15|20)\d{9}$/,message:"El RUC debe empezar con 10, 15 o 20."}]:[]]},{default:o(()=>[n(g,{value:t[e.name],"onUpdate:value":_=>t[e.name]=_,maxlength:e.max,onBlur:_=>q(e.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iNumber"?(s(),w(T,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(N,{value:t[e.name],"onUpdate:value":_=>t[e.name]=_,maxlength:e.max,style:{width:"100%"}},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iSelect"?(s(),w(T,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[e.name=="city_id"?(s(),w(A,{key:0,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:$(h).cities,"show-search":"","filter-option":x,onChange:z},null,8,["value","onUpdate:value","options"])):y("",!0),e.name=="province_id"?(s(),w(A,{key:1,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:$(h).provinces,"show-search":"","filter-option":x,onChange:M,disabled:!t.city_id},null,8,["value","onUpdate:value","options","disabled"])):y("",!0),e.name=="district_id"?(s(),w(A,{key:2,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:$(h).districts,"show-search":"","filter-option":x,disabled:!t.province_id},null,8,["value","onUpdate:value","options","disabled"])):y("",!0),e.name=="years"?(s(),w(A,{key:3,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:D,"show-search":"","filter-option":x},null,8,["value","onUpdate:value"])):y("",!0),e.name=="components"?(s(),w(A,{key:4,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,options:I,"show-search":"","filter-option":x},null,8,["value","onUpdate:value"])):y("",!0)]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iDate"?(s(),w(T,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[e.name=="endDate"?(s(),w(V,{key:0,"disabled-date":F,locale:$(ue),disabled:!t.startDate,value:t[e.name],"onUpdate:value":_=>t[e.name]=_,style:{width:"100%"},format:me,placeholder:"día/mes/año"},null,8,["locale","disabled","value","onUpdate:value"])):(s(),w(V,{key:1,locale:$(ue),value:t[e.name],"onUpdate:value":_=>t[e.name]=_,style:{width:"100%"},format:me,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"]))]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iSwitch"?(s(),w(T,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(Z,{checked:t[e.name],"onUpdate:checked":_=>t[e.name]=_,"checked-children":"si","un-checked-children":"",checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iTextarea"?(s(),w(T,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:o(()=>[n(ae,{value:t[e.name],"onUpdate:value":_=>t[e.name]=_,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):y("",!0),e.type==="iSpace"?(s(),b("span",ze)):y("",!0)],64))),128))]),n(T,null,{default:o(()=>[n(ne,{type:"primary","html-type":"submit",loading:C.value},{default:o(()=>[J.idConvenio?(s(),b("span",Fe,"ACTUALIZAR")):(s(),b("span",Me,"GUARDAR"))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},Be=ye(Ye,[["__scopeId","data-v-e60b5333"]]);const Ve={class:"accion-icons"},Ge={key:0},He={key:1},je={__name:"DrawAcciones",props:["idConvenio"],emits:["refreshTable"],setup(J,{emit:E}){const f=J,h=E,O=r([]),k=r(!0),C=r(null),U=r(""),t=r(!1);r(null);const D=ee({description:null});W(()=>{f.idConvenio&&x(f.idConvenio)}),te(()=>f.idConvenio,c=>{c&&x()});function I(c){C.value=c.id,U.value=c.description,ce(()=>{Y()})}function q(c){const m=O.value.findIndex(i=>i.id===c.id);m!==-1&&(O.value[m].description=U.value),C.value=null,z(c.id)}const F=async c=>{try{const m=await X({url:`agreement/delete-acction/${c.id}`,method:"DELETE"});m.status==200&&(x(),P.success(m.message),h("refreshTable",!0))}catch(m){console.error("Error de red:",m)}},z=async c=>{try{const m={description:U.value},i=await X({url:`agreement/update/${c}`,method:"PUT",data:m});i.status==200&&(P.success(i.message),x())}catch(m){console.error("Error de red:",m)}},M=async()=>{try{const c={description:D.description,agreements_id:f.idConvenio},m=await X({url:"agreement/create-acction",method:"POST",data:c});m.status==200&&(P.success(m.message),h("refreshTable",!0),x(),D.description=null)}catch(c){console.error("Error de red:",c)}},x=async()=>{k.value=!0;try{const c=await X({url:`agreement/list/${f.idConvenio}`,method:"GET"});c.status==200&&(O.value=c.data)}catch{}finally{k.value=!1}},Y=()=>{ce(()=>{const c=document.getElementById("auto-resize");c.style.height="auto",c.style.height=c.scrollHeight+"px"})};return(c,m)=>{const i=l("a-textarea"),a=l("a-spin"),d=l("a-form-item"),g=l("a-button"),T=l("a-form");return s(),b("div",null,[n(a,{spinning:k.value},{default:o(()=>[(s(!0),b(B,null,pe(O.value,(N,A)=>(s(),b("div",{class:"acciones",key:A},[S("div",Ve,[n($(Ie),{class:"pointer ico-acc",onClick:V=>I(N)},null,8,["onClick"]),C.value===N.id?(s(),w($($e),{key:0,class:"pointer ico-save",onClick:V=>q(N)},null,8,["onClick"])):y("",!0),n($(ve),{class:"pointer ico-acc",onClick:V=>F(N)},null,8,["onClick"])]),C.value===N.id?(s(),b("div",Ge,[n(i,{value:U.value,"onUpdate:value":m[0]||(m[0]=V=>U.value=V),onInput:Y,id:"auto-resize"},null,8,["value"])])):(s(),b("p",He,H(N.description),1))]))),128))]),_:1},8,["spinning"]),n(T,{layout:"vertical",model:D,name:"basic",autocomplete:"off",onFinish:M},{default:o(()=>[n(d,{name:"description",label:"Registra una acción",rules:[{required:!0,message:"Escribir la descripción"}]},{default:o(()=>[n(i,{value:D.description,"onUpdate:value":m[1]||(m[1]=N=>D.description=N),maxlength:250,rows:4},null,8,["value"])]),_:1}),n(d,null,{default:o(()=>[n(g,{type:"primary","html-type":"submit",loading:t.value},{default:o(()=>m[2]||(m[2]=[L("CREAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Je={__name:"DrawObservations",props:["idConvenio"],emits:["refreshTable"],setup(J,{emit:E}){const f=J,h=E;r([]);const O=r(!0);r(null),r("");const k=r(!1);r(null);const C=ee({description:null});W(()=>{f.idConvenio&&t(f.idConvenio)}),te(()=>f.idConvenio,D=>{D&&t()});const U=async()=>{k.value=!0;try{const D={observations:C.description},I=await X({url:`agreement/update-values/${f.idConvenio.id}`,method:"PUT",data:D});I.status==200&&(P.success(I.message),h("refreshTable",!0))}catch(D){console.error("Error de red:",D)}finally{k.value=!1}},t=async()=>{C.description=f.idConvenio.observations,C.description!=null&&(O.value=!1)};return(D,I)=>{const q=l("a-textarea"),F=l("a-form-item"),z=l("a-button"),M=l("a-form"),x=l("a-spin");return s(),b("div",null,[n(x,{spinning:O.value},{default:o(()=>[n(M,{layout:"vertical",model:C,name:"basic",autocomplete:"off",onFinish:U},{default:o(()=>[n(F,{name:"description",label:"Orbservaciones",rules:[{required:!0,message:"Escribir la descripción"}]},{default:o(()=>[n(q,{value:C.description,"onUpdate:value":I[0]||(I[0]=Y=>C.description=Y),rows:6},null,8,["value"])]),_:1}),n(F,null,{default:o(()=>[n(z,{type:"primary","html-type":"submit",loading:k.value},{default:o(()=>I[1]||(I[1]=[L("ACTUALIZAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}};const Xe={class:"file-options"},Ze={style:{"line-height":"1.3"}},Ke=["onClick"],Qe=["onClick"],We={__name:"DrawFiles",props:["idConvenio"],setup(J){j.locale("es");const E=_e.get("token"),f=J,h="https://apituempresa.soporte-pnte.com/api/",O="http://127.0.0.1:8000/api/",k=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?O:h,C=r(!1),U=r([]),t=r(null),D=r(null),I=r(!1),q=fe(Ue,{style:{fontSize:"20px"},spin:!0});W(()=>{f.idConvenio&&m(f.idConvenio)}),te(()=>f.idConvenio,i=>{i&&m(i)});const F=i=>j(i).format("DD-MM-YYYY HH:mm"),z=i=>(M(i),!1),M=async i=>{const a=new FormData;a.append("file",i),a.append("agreements_id",f.idConvenio),C.value=!0;try{const{data:d}=await ie.post(`${k}agreement/file`,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${E}`}});d.status==200&&(P.success(d.message),m(f.idConvenio))}catch{P.error("Error al subir este tipo de archivo")}finally{C.value=!1}},x=async i=>{t.value=i.uid;try{const a=await ie({url:`${k}agreement/file-download/${i.uid}`,method:"POST",responseType:"blob",headers:{Authorization:`Bearer ${E}`}}),d=window.URL.createObjectURL(new Blob([a.data])),g=document.createElement("a");g.href=d,g.setAttribute("download",i.name),document.body.appendChild(g),g.click(),window.URL.revokeObjectURL(d),document.body.removeChild(g)}catch(a){console.error("Error downloading file:",a)}finally{t.value=null}},Y=i=>{i.file.status!=="uploading"&&console.log(i.file,i.fileList),i.file.status==="done"?(P.success(`${i.file.name} file uploaded successfully`),U.value=i.fileList.filter(a=>a.status!=="error")):i.file.status==="error"&&(P.error(`${i.file.name} file upload failed.`),U.value=i.fileList.filter(a=>a.uid!==i.file.uid))},c=async i=>{D.value=i.uid;try{const a=await X({url:`agreement/delete/file/${i.uid}`,method:"DELETE"});a.status==200&&(m(f.idConvenio),P.success(a.message))}catch(a){console.error("Error de red:",a)}finally{D.value=null}},m=async i=>{I.value=!0;try{const{data:a}=await ie.get(`${k}agreement/list-files/${i}`,{headers:{Authorization:`Bearer ${E}`}});a.status===200&&(U.value=a.data.map(d=>({uid:d.id,name:d.name,status:"done",url:d.path,date:d.created_at})))}catch(a){console.error("Error fetching files:",a)}finally{I.value=!1}};return(i,a)=>{const d=l("a-button"),g=l("a-spin"),T=l("a-space"),N=l("a-upload");return s(),w(g,{spinning:I.value},{default:o(()=>[a[1]||(a[1]=S("div",{class:"agreements-file"},[S("b",null,"Formatos a subir"),S("span",null,"pdf, doc, docx, xls, xlsx, ppt, pptx"),S("span",null,"*(Máximo 20MB)")],-1)),n(N,{"file-list":U.value,name:"file",onChange:Y,"custom-request":M,"before-upload":z},{itemRender:o(({file:A,actions:V})=>[n(T,{style:{margin:"0rem 0","font-size":"13px",width:"100%"}},{default:o(()=>[S("div",Xe,[S("span",Ze,H(A.name),1),S("span",null,H(F(A.date)),1),t.value!=A.uid?(s(),b("a",{key:0,onClick:Z=>x(A)},"Descargar",8,Ke)):(s(),w(g,{key:1,indicator:$(q)},null,8,["indicator"])),D.value==A.uid?(s(),w(g,{key:2,indicator:$(q)},null,8,["indicator"])):(s(),b("a",{key:3,onClick:Z=>c(A),style:{color:"var(--error)"}},[n($(ve))],8,Qe))])]),_:2},1024)]),default:o(()=>[n(d,{style:{"margin-bottom":".6rem"},loading:C.value},{default:o(()=>[n($(Ne)),a[0]||(a[0]=L(" SUBIR ARCHIVO "))]),_:1},8,["loading"])]),_:1},8,["file-list"])]),_:1},8,["spinning"])}}};const et={key:0,class:"list-days"},tt={key:1,class:"list-days"},at=["onClick"],nt=["onClick"],ot={class:"paginator"},st={__name:"ConvenioEstado",props:["idConvenio"],setup(J){j.locale("es"),JSON.parse(localStorage.getItem("profile")),ge(),_e.get("token"),r(null),r(null),r(!1);const E=r(null),f=r(0),h=r(50),O=r({page:0}),k=r(1200),C=r([]),U=r(!1),t=r(!1),D=r(!1),I=r(!1),q=r(!1),F=r(!1);r(null),r(null);const z=r(window.innerHeight-100),M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"ENTIDAD ALIADA",dataIndex:"entity",fixed:"left",width:220},{title:"RUC",dataIndex:"ruc",width:100},{title:"INICIO DE CONVENIO VIGENTE",dataIndex:"startDate",align:"center",width:180},{title:"N° DE AÑOS VIGENTE",dataIndex:"years",width:120,align:"center"},{title:"FIN DEL CONVENIO",dataIndex:"endDate",align:"center",width:180},{title:"ESTADO",dataIndex:"status",align:"center",width:150},{title:"FECHA RESTANTE",dataIndex:"numbrestantes",align:"center",width:140},{title:"OBSERVACIONES",dataIndex:"observations",align:"center",width:140},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:150},{title:"DISTRITO",dataIndex:"district",width:150},{title:"COMPONENTE",dataIndex:"components",align:"center",width:120},{title:"PUNTO FOCAL",dataIndex:"focal",align:"center",width:150},{title:"PUNTO FOCAL TELF.",dataIndex:"focalPhone",align:"center",width:140},{title:"ALIADO",dataIndex:"aliado",align:"center",width:150},{title:"ALIADO TELF.",dataIndex:"aliadoPhone",align:"center",width:120},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],x=ee({search:""}),Y=()=>{let u={search:x.search};G(u)},c=()=>{x.search||G()},m=u=>{E.value=u,t.value=!0},i=u=>{E.value=u,I.value=!0},a=u=>j(u).format("DD/MM/YYYY"),d=u=>{E.value=u.id,q.value=!0},g=(u,e)=>{const R=new Date(u),_=new Date,oe=R.getTime()-_.getTime();return Math.floor(oe/(1e3*3600*24))+1},T=u=>u<=0||u<20?"red":u<40?"#f9e717":"#11d811",N=u=>{O.value.page=u,G()},A=()=>{z.value=window.innerHeight-320},V=()=>{E.value=null,t.value=!0},Z=u=>{G(),u==1&&(t.value=!1,E.value=null),u==2&&(D.value=!1),u==4&&(I.value=!1),E.value=null},ae=async u=>{try{const e=await X({url:`agreement/delete/${u.id}`,method:"DELETE"});e.status==200&&(G(),P.success(e.message))}catch(e){console.error("Error de red:",e)}},ne=Ae(()=>u=>O.value.page*h.value+u+1),G=async u=>{try{U.value=!0;let e;e=O.value.page==0?"":O.value,e=u?{...e,...u}:e;const{data:R}=await X({url:"agreement/list/ugse",method:"GET",params:e});C.value=R==null?void 0:R.data,f.value=R.total,h.value=R.per_page}catch(e){console.error("Error de red:",e)}finally{U.value=!1}};return Se(()=>{window.removeEventListener("resize",A)}),W(()=>{window.addEventListener("resize",A),A(),G()}),(u,e)=>{const R=l("a-button"),_=l("a-col"),oe=l("a-input"),le=l("a-input-group"),he=l("a-row"),re=l("a-tag"),be=l("a-progress"),K=l("a-menu-item"),de=l("router-link"),Ce=l("a-popconfirm"),De=l("a-menu"),we=l("a-dropdown"),xe=l("a-table"),Ee=l("a-pagination"),Q=l("a-drawer");return s(),b(B,null,[S("div",null,[e[20]||(e[20]=S("h3",{class:"title-produce"},"CONVENIOS UGSE",-1)),n(he,{style:{margin:"1rem 0"}},{default:o(()=>[n(_,{xs:24,md:12,lg:18},{default:o(()=>[n(R,{type:"primary",onClick:V,style:{"margin-right":".5rem"}},{default:o(()=>e[13]||(e[13]=[L("NUEVO")])),_:1})]),_:1}),n(_,{xs:24,md:12,lg:6},{default:o(()=>[n(le,{compact:""},{default:o(()=>[n(oe,{value:x.search,"onUpdate:value":e[0]||(e[0]=p=>x.search=p),style:{width:"calc(100% - 80px)"},onInput:c},null,8,["value"]),n(R,{type:"primary",disabled:x.search==="",onClick:Y},{default:o(()=>e[14]||(e[14]=[L("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),n(xe,{bordered:"",scroll:{x:k.value,y:z.value},class:"table-agreements-ugse",columns:M,"data-source":C.value,pagination:!1,loading:U.value,size:"small"},{headerCell:o(({column:p})=>e[15]||(e[15]=[])),bodyCell:o(({column:p,record:v,index:ke})=>[p.dataIndex=="idx"?(s(),b(B,{key:0},[L(H(ne.value(ke)),1)],64)):y("",!0),p.dataIndex=="externo"?(s(),b(B,{key:1},[v.external==1?(s(),w(re,{key:0,color:"cyan"},{default:o(()=>e[16]||(e[16]=[L("Externo")])),_:1})):y("",!0)],64)):y("",!0),p.dataIndex=="startOperations"?(s(),b(B,{key:2},[L(H(a(v.startOperations)),1)],64)):y("",!0),p.dataIndex=="startDate"?(s(),b(B,{key:3},[L(H(a(v==null?void 0:v.startDate)),1)],64)):y("",!0),p.dataIndex=="endDate"?(s(),b(B,{key:4},[L(H(a(v==null?void 0:v.endDate)),1)],64)):y("",!0),p.dataIndex=="numbrestantes"?(s(),b(B,{key:5},[g(v.endDate,v.startDate)>=1?(s(),b("p",et,H(g(v.endDate,v.startDate))+" días faltantes",1)):(s(),b("p",tt,H(g(v.endDate,v.startDate))+" días vencidos",1))],64)):y("",!0),p.dataIndex=="status"?(s(),w(be,{key:6,style:{margin:"0"},percent:g(v.endDate,v.startDate),size:4,showInfo:!1,strokeColor:T(g(v.endDate,v.startDate))},null,8,["percent","strokeColor"])):y("",!0),p.dataIndex=="observations"?(s(),b(B,{key:7},[v!=null&&v.observations?(s(),w($(Re),{key:0,class:"observation-icon",onClick:se=>i(v)},null,8,["onClick"])):y("",!0)],64)):y("",!0),p.dataIndex=="actions"?(s(),w(we,{key:8,trigger:["click"]},{overlay:o(()=>[n(De,null,{default:o(()=>[n(K,null,{default:o(()=>[S("a",{onClick:se=>d(v)},"Archivos",8,at)]),_:2},1024),n(K,null,{default:o(()=>[n(de,{to:`/admin/convenios/ugse/compromisos/${v.id}/${v.entity}`},{default:o(()=>e[17]||(e[17]=[L("Compromisos")])),_:2},1032,["to"])]),_:2},1024),n(K,null,{default:o(()=>[n(de,{to:`/admin/convenios/ugse/detalle-general/${v.id}`},{default:o(()=>e[18]||(e[18]=[L("Resumen")])),_:2},1032,["to"])]),_:2},1024),n(K,null,{default:o(()=>[S("a",{onClick:se=>m(v)},"Editar",8,nt)]),_:2},1024),n(K,null,{default:o(()=>[n(Ce,{title:"¿Seguro de eliminar?",onConfirm:se=>ae(v)},{icon:o(()=>[n($(Te),{style:{color:"red"}})]),default:o(()=>[e[19]||(e[19]=S("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[S("a",{class:"ant-dropdown-link",onClick:e[1]||(e[1]=Oe(()=>{},["prevent"]))},[n(R,{shape:"circle",icon:fe($(Le)),size:"small"},null,8,["icon"])])]),_:2},1024)):y("",!0)]),_:1},8,["scroll","data-source","loading"])]),S("div",ot,[S("span",null,[n(re,{color:"blue"},{default:o(()=>[S("b",null,H(f.value),1)]),_:1}),e[21]||(e[21]=L("Convenios"))]),n(Ee,{size:"small",total:f.value,pageSize:h.value,onChange:N,showSizeChanger:!1},null,8,["total","pageSize"])]),n(Q,{open:t.value,"onUpdate:open":e[3]||(e[3]=p=>t.value=p),"root-class-name":"root-class-name",title:"Convenios",placement:"right",width:"650"},{default:o(()=>[n(Be,{idConvenio:E.value,onCloseDraw:e[2]||(e[2]=p=>Z(1))},null,8,["idConvenio"])]),_:1},8,["open"]),n(Q,{open:D.value,"onUpdate:open":e[6]||(e[6]=p=>D.value=p),title:"Acciones",placement:"right",width:"550"},{default:o(()=>[n(je,{idConvenio:E.value,onCloseDraw:e[4]||(e[4]=p=>Z(2)),onRefreshTable:e[5]||(e[5]=p=>G())},null,8,["idConvenio"])]),_:1},8,["open"]),n(Q,{open:q.value,"onUpdate:open":e[8]||(e[8]=p=>q.value=p),title:"Cargar Archivos",placement:"right",width:"550"},{default:o(()=>[n(We,{idConvenio:E.value,onCloseDraw:e[7]||(e[7]=p=>Z(3))},null,8,["idConvenio"])]),_:1},8,["open"]),n(Q,{open:I.value,"onUpdate:open":e[11]||(e[11]=p=>I.value=p),title:"Observaciones",placement:"right",width:"550"},{default:o(()=>[n(Je,{idConvenio:E.value,onCloseDraw:e[9]||(e[9]=p=>Z(4)),onRefreshTable:e[10]||(e[10]=p=>G())},null,8,["idConvenio"])]),_:1},8,["open"]),n(Q,{open:F.value,"onUpdate:open":e[12]||(e[12]=p=>F.value=p),title:"Compromisos",placement:"right",width:"90%"},null,8,["open"])],64)}}},vt=ye(st,[["__scopeId","data-v-c865d371"]]);export{vt as default};
