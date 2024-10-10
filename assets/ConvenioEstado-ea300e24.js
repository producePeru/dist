import{L as G,r as d,a as ee,j as X,K as te,b as r,o as i,p as x,w as s,c as o,e as A,d as b,F as M,v as me,h as $,q as h,M as ue,y as J,m as R,a1 as Ie,a2 as ve,t as V,i as L,a3 as ce,g as fe,P as _e,a4 as Ue,H as ie,I as Se,s as Ae,U as Te,J as Oe}from"./index-7992612a.js";import{u as ge}from"./selectes-6874d696.js";import"./es-6ddf0d13.js";import{_ as ye}from"./_plugin-vue_export-helper-c27b6911.js";import{S as $e}from"./SaveOutlined-422c868a.js";import{C as Pe}from"./CloudUploadOutlined-dfc0b686.js";import{M as Le}from"./MessageOutlined-69d73b00.js";import{M as Re}from"./MoreOutlined-7ec6a947.js";const Ne={alliedEntity:{type:"iText",label:"Entidad Aliada",name:"alliedEntity",required:!0,message:"Escribir la entidad aliada",disabled:!0,max:100},ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"El RUC debe tener exactamente 11 caracteres.",disabled:!0,min:11,max:11},component:{type:"iSelect",label:"Componente",name:"components",required:!0,message:"Seleccionar un componente",disabled:!0},city_id:{type:"iSelect",label:"Región",name:"city_id",required:!0,message:"Seleccionar una región",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},startDate:{type:"iDate",label:"Inicio Convenio Vigente",name:"startDate",required:!0,message:"Seleccionar fecha de convenio vigente",disabled:!0},years:{type:"iSelect",label:"Años del convenio",name:"years",required:!0,message:"Seleccionar años",disabled:!1},aliado:{type:"iText",label:"Representante Legal (Nombres Apellidos)",name:"aliado",required:!0,message:"Escribir los nombres y apellidos",disabled:!0,max:100},aliadoPhone:{type:"iText",label:"Representante Legal (número telf.)",name:"aliadoPhone",required:!0,message:"Escribir el número",disabled:!0,max:9},focal:{type:"iText",label:"PUNTO FOCAL - nombres",name:"focal",required:!0,message:"Escribir datos del punto focal",disabled:!0,max:100},focalCargo:{type:"iText",label:"PUNTO FOCAL - cargo",name:"focalCargo",required:!0,message:"Escribir cargo del Punto Focal",disabled:!0,max:50},focalPhone:{type:"iText",label:"PUNTO FOCAL (número de telf.)",name:"focalPhone",required:!0,message:"Escribir el número de telf.",disabled:!0,max:9},renovation:{type:"iSwitch",label:"Renovación Automática",name:"renovation",required:!1,message:"Seleccionar",disabled:!0},observations:{type:"iTextarea",label:"Comentarios",name:"observations",required:!1,message:"Seleccionar",disabled:!1}};const qe={class:"grid-convenios"},Fe={key:5},ze={key:0},Ye={key:1},pe="DD/MM/YYYY",Me={__name:"DrawConvenioUGSE",props:["idConvenio"],emits:["closeDraw"],setup(H,{emit:k}){G.locale("es");const _=JSON.parse(localStorage.getItem("profile")),y=ge(),T=k,E=H;y.$patch({cities:y.cities}),y.$patch({provinces:y.provinces}),y.$patch({districts:y.districts}),y.fetchCities();const C=d(!1),U=d(!1),t=ee({}),D=[{value:1,label:"1 Año"},{value:2,label:"2 Años"},{value:3,label:"3 Años"},{value:4,label:"4 Años"},{value:5,label:"5 Años"},{value:6,label:"6 Años"},{value:7,label:"7 Años"},{value:8,label:"8 Años"},{value:9,label:"9 Años"},{value:10,label:"10 Años"}],I=[{value:"financiamiento",label:"Acceso en Financiamiento"},{value:"desarrollo",label:"Desarrollo Productivo"},{value:"digitalizacion",label:"Digitalización"},{value:"formalizacion",label:"Formalización"},{value:"gestion",label:"Gestión Empresarial"}],N=a=>{const c=t[a]?t[a].trim():"";t[a]=c},F=a=>{const c=G(t.startDate).add(1,"day").startOf("day");return G(a).startOf("day").isBefore(c,"day")},q=a=>{t.province_id=null,t.district_id=null,y.fetchProvinces(a)},z=a=>{t.district_id=null,y.fetchDistricts(a)},w=(a,c)=>{const g=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return c.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(g)},Y=()=>{["city_id","province_id","district_id","alliedEntity","ruc","components","startDate","years","aliado","aliadoPhone","focal","focalCargo","focalPhone","endDate","observations"].forEach(c=>{t[c]=null}),t.created_id=_.user_id},p=async()=>{C.value=!0;const a={city_id:t.city_id,province_id:t.province_id,district_id:t.district_id,alliedEntity:t.alliedEntity,ruc:t.ruc,components:t.components,startDate:G(t.startDate).format("YYYY-MM-DD"),years:t.years,aliado:t.aliado,aliadoPhone:t.aliadoPhone,focal:t.focal,focalCargo:t.focalCargo,focalPhone:t.focalPhone,renovation:t.renovation,endDate:G(t.startDate).add(t.years,"year").format("YYYY-MM-DD"),observations:t.observations,created_id:_.user_id,entity:"ugse"};try{const c=E.idConvenio?"PUT":"POST",g=E.idConvenio?`agreement/update-values/${E.idConvenio.id}`:"agreement/create-ugse",O=await J({url:g,method:c,data:a});O.status==200&&(R.success(O.message),T("closeDraw",!0),Y())}catch(c){R.error("Se originó un error: "+c.message)}finally{C.value=!1}},m=()=>{R.error("Por favor corrige los valores con errores")},l=async a=>{a.id&&(t.city_id=a.city_id,q(a.city_id),t.province_id=a.province_id,z(a.province_id),t.district_id=a.district_id,t.ruc=a.ruc,t.components=a.components,t.startDate=G(a.startDate,"YYYY-MM-DD"),t.years=a.years,t.aliado=a.aliado,t.aliadoPhone=a.aliadoPhone,t.focal=a.focal,t.focalCargo=a.focalCargo,t.focalPhone=a.focalPhone,t.observations=a.observations,t.alliedEntity=a.entity)};return X(()=>{E.idConvenio?l(E.idConvenio):(t.city_id=15,q(15))}),te(()=>E.idConvenio,a=>{a?l(a):Y()}),(a,c)=>{const g=r("a-input"),O=r("a-form-item"),S=r("a-select"),P=r("a-date-picker"),j=r("a-switch"),Z=r("a-textarea"),ae=r("a-button"),ne=r("a-form"),B=r("a-spin");return i(),x(B,{spinning:U.value},{default:s(()=>[o(ne,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:p,onFinishFailed:m},{default:s(()=>[A("div",qe,[(i(!0),b(M,null,me($(Ne),(e,n)=>(i(),b(M,{key:n},[e.type==="iText"?(i(),x(O,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max},...e.name==="ruc"?[{type:"string",len:11,message:e.message},{pattern:/^\d{11}$/,message:"El RUC debe ser numérico."}]:[]]},{default:s(()=>[o(g,{value:t[e.name],"onUpdate:value":u=>t[e.name]=u,maxlength:e.max,onBlur:u=>N(e.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iSelect"?(i(),x(O,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[e.name=="city_id"?(i(),x(S,{key:0,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:$(y).cities,"show-search":"","filter-option":w,onChange:q},null,8,["value","onUpdate:value","options"])):h("",!0),e.name=="province_id"?(i(),x(S,{key:1,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:$(y).provinces,"show-search":"","filter-option":w,onChange:z,disabled:!t.city_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),e.name=="district_id"?(i(),x(S,{key:2,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:$(y).districts,"show-search":"","filter-option":w,disabled:!t.province_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),e.name=="years"?(i(),x(S,{key:3,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:D,"show-search":"","filter-option":w},null,8,["value","onUpdate:value"])):h("",!0),e.name=="components"?(i(),x(S,{key:4,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:I,"show-search":"","filter-option":w},null,8,["value","onUpdate:value"])):h("",!0)]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iDate"?(i(),x(O,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[e.name=="endDate"?(i(),x(P,{key:0,"disabled-date":F,locale:$(ue),disabled:!t.startDate,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,style:{width:"100%"},format:pe,placeholder:"día/mes/año"},null,8,["locale","disabled","value","onUpdate:value"])):(i(),x(P,{key:1,locale:$(ue),value:t[e.name],"onUpdate:value":u=>t[e.name]=u,style:{width:"100%"},format:pe,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"]))]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iSwitch"?(i(),x(O,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[o(j,{checked:t[e.name],"onUpdate:checked":u=>t[e.name]=u,"checked-children":"si","un-checked-children":"",checkedValue:1,unCheckedValue:0},null,8,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iTextarea"?(i(),x(O,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[o(Z,{value:t[e.name],"onUpdate:value":u=>t[e.name]=u,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iSpace"?(i(),b("span",Fe)):h("",!0)],64))),128))]),o(O,null,{default:s(()=>[o(ae,{type:"primary","html-type":"submit",loading:C.value},{default:s(()=>[H.idConvenio?(i(),b("span",ze,"ACTUALIZAR")):(i(),b("span",Ye,"GUARDAR"))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},Be=ye(Me,[["__scopeId","data-v-18b66260"]]);const Ve={class:"accion-icons"},Ge={key:0},He={key:1},je={__name:"DrawAcciones",props:["idConvenio"],emits:["refreshTable"],setup(H,{emit:k}){const _=H,y=k,T=d([]),E=d(!0),C=d(null),U=d(""),t=d(!1);d(null);const D=ee({description:null});X(()=>{_.idConvenio&&w(_.idConvenio)}),te(()=>_.idConvenio,p=>{p&&w()});function I(p){C.value=p.id,U.value=p.description,ce(()=>{Y()})}function N(p){const m=T.value.findIndex(l=>l.id===p.id);m!==-1&&(T.value[m].description=U.value),C.value=null,q(p.id)}const F=async p=>{try{const m=await J({url:`agreement/delete-acction/${p.id}`,method:"DELETE"});m.status==200&&(w(),R.success(m.message),y("refreshTable",!0))}catch(m){console.error("Error de red:",m)}},q=async p=>{try{const m={description:U.value},l=await J({url:`agreement/update/${p}`,method:"PUT",data:m});l.status==200&&(R.success(l.message),w())}catch(m){console.error("Error de red:",m)}},z=async()=>{try{const p={description:D.description,agreements_id:_.idConvenio},m=await J({url:"agreement/create-acction",method:"POST",data:p});m.status==200&&(R.success(m.message),y("refreshTable",!0),w(),D.description=null)}catch(p){console.error("Error de red:",p)}},w=async()=>{E.value=!0;try{const p=await J({url:`agreement/list/${_.idConvenio}`,method:"GET"});p.status==200&&(T.value=p.data)}catch{}finally{E.value=!1}},Y=()=>{ce(()=>{const p=document.getElementById("auto-resize");p.style.height="auto",p.style.height=p.scrollHeight+"px"})};return(p,m)=>{const l=r("a-textarea"),a=r("a-spin"),c=r("a-form-item"),g=r("a-button"),O=r("a-form");return i(),b("div",null,[o(a,{spinning:E.value},{default:s(()=>[(i(!0),b(M,null,me(T.value,(S,P)=>(i(),b("div",{class:"acciones",key:P},[A("div",Ve,[o($(Ie),{class:"pointer ico-acc",onClick:j=>I(S)},null,8,["onClick"]),C.value===S.id?(i(),x($($e),{key:0,class:"pointer ico-save",onClick:j=>N(S)},null,8,["onClick"])):h("",!0),o($(ve),{class:"pointer ico-acc",onClick:j=>F(S)},null,8,["onClick"])]),C.value===S.id?(i(),b("div",Ge,[o(l,{value:U.value,"onUpdate:value":m[0]||(m[0]=j=>U.value=j),onInput:Y,id:"auto-resize"},null,8,["value"])])):(i(),b("p",He,V(S.description),1))]))),128))]),_:1},8,["spinning"]),o(O,{layout:"vertical",model:D,name:"basic",autocomplete:"off",onFinish:z},{default:s(()=>[o(c,{name:"description",label:"Registra una acción",rules:[{required:!0,message:"Escribir la descripción"}]},{default:s(()=>[o(l,{value:D.description,"onUpdate:value":m[1]||(m[1]=S=>D.description=S),maxlength:250,rows:4},null,8,["value"])]),_:1}),o(c,null,{default:s(()=>[o(g,{type:"primary","html-type":"submit",loading:t.value},{default:s(()=>m[2]||(m[2]=[L("CREAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Je={__name:"DrawObservations",props:["idConvenio"],emits:["refreshTable"],setup(H,{emit:k}){const _=H,y=k;d([]);const T=d(!0);d(null),d("");const E=d(!1);d(null);const C=ee({description:null});X(()=>{_.idConvenio&&t(_.idConvenio)}),te(()=>_.idConvenio,D=>{D&&t()});const U=async()=>{E.value=!0;try{const D={observations:C.description},I=await J({url:`agreement/update-values/${_.idConvenio.id}`,method:"PUT",data:D});I.status==200&&(R.success(I.message),y("refreshTable",!0))}catch(D){console.error("Error de red:",D)}finally{E.value=!1}},t=async()=>{C.description=_.idConvenio.observations,C.description!=null&&(T.value=!1)};return(D,I)=>{const N=r("a-textarea"),F=r("a-form-item"),q=r("a-button"),z=r("a-form"),w=r("a-spin");return i(),b("div",null,[o(w,{spinning:T.value},{default:s(()=>[o(z,{layout:"vertical",model:C,name:"basic",autocomplete:"off",onFinish:U},{default:s(()=>[o(F,{name:"description",label:"Orbservaciones",rules:[{required:!0,message:"Escribir la descripción"}]},{default:s(()=>[o(N,{value:C.description,"onUpdate:value":I[0]||(I[0]=Y=>C.description=Y),rows:6},null,8,["value"])]),_:1}),o(F,null,{default:s(()=>[o(q,{type:"primary","html-type":"submit",loading:E.value},{default:s(()=>I[1]||(I[1]=[L("ACTUALIZAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}};const Ze={class:"file-options"},Ke={style:{"line-height":"1.3"}},Qe=["onClick"],Xe=["onClick"],We={__name:"DrawFiles",props:["idConvenio"],setup(H){G.locale("es");const k=fe.get("token"),_=H,y="https://apituempresa.soporte-pnte.com/api/",T="http://127.0.0.1:8000/api/",E=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?T:y,C=d(!1),U=d([]),t=d(null),D=d(null),I=d(!1),N=_e(Ue,{style:{fontSize:"20px"},spin:!0});X(()=>{_.idConvenio&&m(_.idConvenio)}),te(()=>_.idConvenio,l=>{l&&m(l)});const F=l=>G(l).format("DD-MM-YYYY HH:mm"),q=l=>(z(l),!1),z=async l=>{const a=new FormData;a.append("file",l),a.append("agreements_id",_.idConvenio),C.value=!0;try{const{data:c}=await ie.post(`${E}agreement/file`,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${k}`}});c.status==200&&(R.success(c.message),m(_.idConvenio))}catch{R.error("Error al subir este tipo de archivo")}finally{C.value=!1}},w=async l=>{t.value=l.uid;try{const a=await ie({url:`${E}agreement/file-download/${l.uid}`,method:"POST",responseType:"blob",headers:{Authorization:`Bearer ${k}`}}),c=window.URL.createObjectURL(new Blob([a.data])),g=document.createElement("a");g.href=c,g.setAttribute("download",l.name),document.body.appendChild(g),g.click(),window.URL.revokeObjectURL(c),document.body.removeChild(g)}catch(a){console.error("Error downloading file:",a)}finally{t.value=null}},Y=l=>{l.file.status!=="uploading"&&console.log(l.file,l.fileList),l.file.status==="done"?(R.success(`${l.file.name} file uploaded successfully`),U.value=l.fileList.filter(a=>a.status!=="error")):l.file.status==="error"&&(R.error(`${l.file.name} file upload failed.`),U.value=l.fileList.filter(a=>a.uid!==l.file.uid))},p=async l=>{D.value=l.uid;try{const a=await J({url:`agreement/delete/file/${l.uid}`,method:"DELETE"});a.status==200&&(m(_.idConvenio),R.success(a.message))}catch(a){console.error("Error de red:",a)}finally{D.value=null}},m=async l=>{I.value=!0;try{const{data:a}=await ie.get(`${E}agreement/list-files/${l}`,{headers:{Authorization:`Bearer ${k}`}});a.status===200&&(U.value=a.data.map(c=>({uid:c.id,name:c.name,status:"done",url:c.path,date:c.created_at})))}catch(a){console.error("Error fetching files:",a)}finally{I.value=!1}};return(l,a)=>{const c=r("a-button"),g=r("a-spin"),O=r("a-space"),S=r("a-upload");return i(),x(g,{spinning:I.value},{default:s(()=>[a[1]||(a[1]=A("div",{class:"agreements-file"},[A("b",null,"Formatos a subir"),A("span",null,"pdf, doc, docx, xls, xlsx, ppt, pptx"),A("span",null,"*(Máximo 20MB)")],-1)),o(S,{"file-list":U.value,name:"file",onChange:Y,"custom-request":z,"before-upload":q},{itemRender:s(({file:P,actions:j})=>[o(O,{style:{margin:"0rem 0","font-size":"13px",width:"100%"}},{default:s(()=>[A("div",Ze,[A("span",Ke,V(P.name),1),A("span",null,V(F(P.date)),1),t.value!=P.uid?(i(),b("a",{key:0,onClick:Z=>w(P)},"Descargar",8,Qe)):(i(),x(g,{key:1,indicator:$(N)},null,8,["indicator"])),D.value==P.uid?(i(),x(g,{key:2,indicator:$(N)},null,8,["indicator"])):(i(),b("a",{key:3,onClick:Z=>p(P),style:{color:"var(--error)"}},[o($(ve))],8,Xe))])]),_:2},1024)]),default:s(()=>[o(c,{style:{"margin-bottom":".6rem"},loading:C.value},{default:s(()=>[o($(Pe)),a[0]||(a[0]=L(" SUBIR ARCHIVO "))]),_:1},8,["loading"])]),_:1},8,["file-list"])]),_:1},8,["spinning"])}}};const et={key:0,class:"list-days"},tt={key:1,class:"list-days"},at=["onClick"],nt=["onClick"],ot={class:"paginator"},st={__name:"ConvenioEstado",props:["idConvenio"],setup(H){G.locale("es"),JSON.parse(localStorage.getItem("profile")),ge(),fe.get("token"),d(null),d(null),d(!1);const k=d(null),_=d(0),y=d(50),T=d({page:0}),E=d(1200),C=d([]),U=d(!1),t=d(!1),D=d(!1),I=d(!1),N=d(!1),F=d(!1);d(null),d(null);const q=d(window.innerHeight-100),z=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"ENTIDAD ALIADA",dataIndex:"entity",fixed:"left",width:220},{title:"RUC",dataIndex:"ruc",width:100},{title:"INICIO DE CONVENIO VIGENTE",dataIndex:"startDate",align:"center",width:180},{title:"N° DE AÑOS VIGENTE",dataIndex:"years",width:120,align:"center"},{title:"FIN DEL CONVENIO",dataIndex:"endDate",align:"center",width:180},{title:"ESTADO",dataIndex:"status",align:"center",width:150},{title:"FECHA RESTANTE",dataIndex:"numbrestantes",align:"center",width:140},{title:"OBSERVACIONES",dataIndex:"observations",align:"center",width:140},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:150},{title:"DISTRITO",dataIndex:"district",width:150},{title:"COMPONENTE",dataIndex:"components",align:"center",width:120},{title:"PUNTO FOCAL",dataIndex:"focal",align:"center",width:150},{title:"PUNTO FOCAL TELF.",dataIndex:"focalPhone",align:"center",width:140},{title:"ALIADO",dataIndex:"aliado",align:"center",width:150},{title:"ALIADO TELF.",dataIndex:"aliadoPhone",align:"center",width:120},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],w=ee({search:""}),Y=()=>{let e={search:w.search};B(e)},p=()=>{w.search||B()},m=e=>{k.value=e,t.value=!0},l=e=>{k.value=e,I.value=!0},a=e=>G(e).format("DD/MM/YYYY"),c=e=>{k.value=e.id,N.value=!0},g=(e,n)=>{const u=new Date(e),W=new Date,oe=u.getTime()-W.getTime();return Math.floor(oe/(1e3*3600*24))+1},O=e=>e<=0||e<20?"red":e<40?"#f9e717":"#11d811",S=e=>{T.value.page=e,B()},P=()=>{q.value=window.innerHeight-320},j=()=>{k.value=null,t.value=!0},Z=e=>{B(),e==1&&(t.value=!1,k.value=null),e==2&&(D.value=!1),e==4&&(I.value=!1),k.value=null},ae=async e=>{try{const n=await J({url:`agreement/delete/${e.id}`,method:"DELETE"});n.status==200&&(B(),R.success(n.message))}catch(n){console.error("Error de red:",n)}},ne=Se(()=>e=>T.value.page*y.value+e+1),B=async e=>{try{U.value=!0;let n;n=T.value.page==0?"":T.value,n=e?{...n,...e}:n;const{data:u}=await J({url:"agreement/list/ugse",method:"GET",params:n});C.value=u==null?void 0:u.data,_.value=u.total,y.value=u.per_page}catch(n){console.error("Error de red:",n)}finally{U.value=!1}};return Ae(()=>{window.removeEventListener("resize",P)}),X(()=>{window.addEventListener("resize",P),P(),B()}),(e,n)=>{const u=r("a-button"),W=r("a-col"),oe=r("a-input"),le=r("a-input-group"),he=r("a-row"),re=r("a-tag"),be=r("a-progress"),K=r("a-menu-item"),de=r("router-link"),Ce=r("a-popconfirm"),De=r("a-menu"),we=r("a-dropdown"),xe=r("a-table"),ke=r("a-pagination"),Q=r("a-drawer");return i(),b(M,null,[A("div",null,[n[20]||(n[20]=A("h3",{class:"title-produce"},"CONVENIOS UGSE",-1)),o(he,{style:{margin:"1rem 0"}},{default:s(()=>[o(W,{xs:24,md:12,lg:18},{default:s(()=>[o(u,{type:"primary",onClick:j,style:{"margin-right":".5rem"}},{default:s(()=>n[13]||(n[13]=[L("NUEVO")])),_:1})]),_:1}),o(W,{xs:24,md:12,lg:6},{default:s(()=>[o(le,{compact:""},{default:s(()=>[o(oe,{value:w.search,"onUpdate:value":n[0]||(n[0]=v=>w.search=v),style:{width:"calc(100% - 80px)"},onInput:p},null,8,["value"]),o(u,{type:"primary",disabled:w.search==="",onClick:Y},{default:s(()=>n[14]||(n[14]=[L("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),o(xe,{bordered:"",scroll:{x:E.value,y:q.value},class:"table-agreements-ugse",columns:z,"data-source":C.value,pagination:!1,loading:U.value,size:"small"},{headerCell:s(({column:v})=>n[15]||(n[15]=[])),bodyCell:s(({column:v,record:f,index:Ee})=>[v.dataIndex=="idx"?(i(),b(M,{key:0},[L(V(ne.value(Ee)),1)],64)):h("",!0),v.dataIndex=="externo"?(i(),b(M,{key:1},[f.external==1?(i(),x(re,{key:0,color:"cyan"},{default:s(()=>n[16]||(n[16]=[L("Externo")])),_:1})):h("",!0)],64)):h("",!0),v.dataIndex=="startOperations"?(i(),b(M,{key:2},[L(V(a(f.startOperations)),1)],64)):h("",!0),v.dataIndex=="startDate"?(i(),b(M,{key:3},[L(V(a(f==null?void 0:f.startDate)),1)],64)):h("",!0),v.dataIndex=="endDate"?(i(),b(M,{key:4},[L(V(a(f==null?void 0:f.endDate)),1)],64)):h("",!0),v.dataIndex=="numbrestantes"?(i(),b(M,{key:5},[g(f.endDate,f.startDate)>=1?(i(),b("p",et,V(g(f.endDate,f.startDate))+" días faltantes",1)):(i(),b("p",tt,V(g(f.endDate,f.startDate))+" días vencidos",1))],64)):h("",!0),v.dataIndex=="status"?(i(),x(be,{key:6,style:{margin:"0"},percent:g(f.endDate,f.startDate),size:4,showInfo:!1,strokeColor:O(g(f.endDate,f.startDate))},null,8,["percent","strokeColor"])):h("",!0),v.dataIndex=="observations"?(i(),b(M,{key:7},[f!=null&&f.observations?(i(),x($(Le),{key:0,class:"observation-icon",onClick:se=>l(f)},null,8,["onClick"])):h("",!0)],64)):h("",!0),v.dataIndex=="actions"?(i(),x(we,{key:8,trigger:["click"]},{overlay:s(()=>[o(De,null,{default:s(()=>[o(K,null,{default:s(()=>[A("a",{onClick:se=>c(f)},"Archivos",8,at)]),_:2},1024),o(K,null,{default:s(()=>[o(de,{to:`/admin/convenios/ugse/compromisos/${f.id}/${f.entity}`},{default:s(()=>n[17]||(n[17]=[L("Compromisos")])),_:2},1032,["to"])]),_:2},1024),o(K,null,{default:s(()=>[o(de,{to:`/admin/convenios/ugse/detalle-general/${f.id}`},{default:s(()=>n[18]||(n[18]=[L("Resumen")])),_:2},1032,["to"])]),_:2},1024),o(K,null,{default:s(()=>[A("a",{onClick:se=>m(f)},"Editar",8,nt)]),_:2},1024),o(K,null,{default:s(()=>[o(Ce,{title:"¿Seguro de eliminar?",onConfirm:se=>ae(f)},{icon:s(()=>[o($(Te),{style:{color:"red"}})]),default:s(()=>[n[19]||(n[19]=A("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:s(()=>[A("a",{class:"ant-dropdown-link",onClick:n[1]||(n[1]=Oe(()=>{},["prevent"]))},[o(u,{shape:"circle",icon:_e($(Re)),size:"small"},null,8,["icon"])])]),_:2},1024)):h("",!0)]),_:1},8,["scroll","data-source","loading"])]),A("div",ot,[A("span",null,[o(re,{color:"blue"},{default:s(()=>[A("b",null,V(_.value),1)]),_:1}),n[21]||(n[21]=L("Convenios"))]),o(ke,{size:"small",total:_.value,pageSize:y.value,onChange:S,showSizeChanger:!1},null,8,["total","pageSize"])]),o(Q,{open:t.value,"onUpdate:open":n[3]||(n[3]=v=>t.value=v),"root-class-name":"root-class-name",title:"Convenios",placement:"right",width:"650"},{default:s(()=>[o(Be,{idConvenio:k.value,onCloseDraw:n[2]||(n[2]=v=>Z(1))},null,8,["idConvenio"])]),_:1},8,["open"]),o(Q,{open:D.value,"onUpdate:open":n[6]||(n[6]=v=>D.value=v),title:"Acciones",placement:"right",width:"550"},{default:s(()=>[o(je,{idConvenio:k.value,onCloseDraw:n[4]||(n[4]=v=>Z(2)),onRefreshTable:n[5]||(n[5]=v=>B())},null,8,["idConvenio"])]),_:1},8,["open"]),o(Q,{open:N.value,"onUpdate:open":n[8]||(n[8]=v=>N.value=v),title:"Cargar Archivos",placement:"right",width:"550"},{default:s(()=>[o(We,{idConvenio:k.value,onCloseDraw:n[7]||(n[7]=v=>Z(3))},null,8,["idConvenio"])]),_:1},8,["open"]),o(Q,{open:I.value,"onUpdate:open":n[11]||(n[11]=v=>I.value=v),title:"Observaciones",placement:"right",width:"550"},{default:s(()=>[o(Je,{idConvenio:k.value,onCloseDraw:n[9]||(n[9]=v=>Z(4)),onRefreshTable:n[10]||(n[10]=v=>B())},null,8,["idConvenio"])]),_:1},8,["open"]),o(Q,{open:F.value,"onUpdate:open":n[12]||(n[12]=v=>F.value=v),title:"Compromisos",placement:"right",width:"90%"},null,8,["open"])],64)}}},vt=ye(st,[["__scopeId","data-v-aa613e3f"]]);export{vt as default};
