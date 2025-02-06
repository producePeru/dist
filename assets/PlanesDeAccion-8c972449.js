import{q as I,r as p,a as se,j as re,S as ye,b as u,o as i,d as h,c as l,w as c,e as U,F as T,z as be,v as y,p as _,h as C,E as De,i as q,m as E,l as R,y as we,t as B,G as ie,$ as xe,I as Ie}from"./index-587361df.js";import{_ as Ee}from"./icoexcel-1b303edf.js";import{u as de}from"./selectes-93fee602.js";import"./es-51023a2b.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import{d as Se}from"./downloadExcel-7615f072.js";import{S as Ne}from"./SaveOutlined-54f24835.js";import{M as ke}from"./MoreOutlined-9a7a17f8.js";const Ue={numberDocument:{type:"iSearch",label:"Número de documento",name:"numberDocument",required:!0,message:"Ingresar Número de documento",disabled:!1,max:11},namePerson:{type:"iText",label:"Nombre",name:"namePerson",required:!0,message:"Escribe nombre",disabled:!0},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelectWrite",label:"Provincia del negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelectWrite",label:"Distrito del negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"Seleccionar estado",disabled:!0},divider:{type:"iDivider"},ruc:{type:"iSearch",label:"Número de RUC",name:"ruc",required:!1,message:"Escribe el número de RUC",disabled:!1,max:11},component_1:{type:"iSelectWrite",is:"component",label:"Componente 1",name:"component_1",required:!0,message:"Seleccionar componente 1",disabled:!1},component_2:{type:"iSelectWrite",is:"component",label:"Componente 2",name:"component_2",required:!0,message:"Seleccionar componente 2",disabled:!1},component_3:{type:"iSelectWrite",is:"component",label:"Componente 3",name:"component_3",required:!1,message:"Seleccionar componente 3",disabled:!1},startDate:{type:"iDate",label:"Día Inicio",name:"startDate",required:!0,message:"Seleccionar fecha de inicio",placeholder:"año-mes-día"},endDate:{type:"iDate",label:"Día Fin",name:"endDate",required:!0,message:"Seleccionar fecha de fin",placeholder:"año-mes-día"}};const Oe={class:"grid-planes"},Ae="DD/MM/YYYY",Pe={__name:"NuevoPlanAccion",props:["info"],emits:["closeDraw"],setup(ne,{emit:S}){I.locale("es");const w=JSON.parse(localStorage.getItem("profile")),D=de(),F=S,N=ne;D.$patch({cities:D.cities}),D.fetchCities();const G=p(Ue),Y=p(!1),k=p(null),O=[{label:"DESARROLLO PRODUCTIVO",value:1},{label:"DIGITALIZACIÓN",value:2},{label:"FINANZAS",value:3},{label:"FORMALIZACIÓN",value:4},{label:"GESTIÓN EMPRESARIAL",value:5}],H=[{value:1,label:"DNI"},{value:2,label:"RUC"}],j=[{label:"Si",value:"yes"},{label:"No",value:"no"}],e=se({component_1:null,component_2:null,component_3:null}),M=()=>{e.numberDocument=null,e.component_1=null,e.component_2=null,e.component_3=null,e.ruc=null,e.idPerson=null,e.namePerson=null,e.city_id=null,e.province_id=null,e.district_id=null,e.gender_id=null,e.sick=null,e.startDate=null,e.endDate=null},V=t=>{const o=["component_1","component_2","component_3"].reduce((m,s)=>(s!==t&&e[s]!==null&&m.push(e[s]),m),[]);return O.filter(m=>!o.includes(m.value))},J=()=>{const t=e.ruc;return t&&!/^\d{11}$/.test(t)?(E.error("El número de RUC debe contener exactamente 11 dígitos numéricos."),{valid:!1}):t&&!/^(10|15|20)/.test(t)?(E.error("El número de RUC debe comenzar con 10, 15 o 20."),{valid:!1}):{valid:!0}},Q=t=>{if(!t)return!1;const o=e.startDate?I(e.startDate):null;return o&&t.isBefore(o,"day")||t.isAfter(I().endOf("day"),"day")},X=t=>{e[t]=e[t].replace(/\D/g,"")},L=(t,o)=>{const m=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)},$=async t=>{if(!e.numberDocument)return E.warning("Ingrese un número a buscar...");try{if(t=="numberDocument"){k.value=t;const o=await R({url:`person/data/${e.numberDocument}`,method:"GET"});if(o.status==404)return k.value=null,e.numberDocument=null,E.warning("Este usuario no fue registrado");o.status==200&&(e.idPerson=o.data.id,e.namePerson=o.data.namePerson,e.city_id=o.data.city_id,W(o.data.city_id),e.province_id=o.data.province_id,z(o.data.province_id),e.district_id=o.data.district_id,console.log("FormState",o.data.gender_id),e.sick=o.data.sick)}if(t=="ruc"){k.value=t;const o=await R({url:`plans-action/components/${e.ruc}`,method:"GET"});if(o.status==200){const m=o.data;m.component_1&&(e.component_1=m.component_1),m.component_2&&(e.component_2=m.component_2),m.component_3&&(e.component_3=m.component_3),m.endDate&&(e.endDate=I(m.endDate,"YYYY-MM-DD"))}else return k.value=null,e.ruc=null,E.warning("No se han registrado datos con ese número de RUC")}}catch{console.log("Failed to update record")}finally{k.value=null}},W=t=>{e.province_id=null,e.district_id=null,D.fetchProvinces(t)},z=t=>{e.district_id=null,D.fetchDistricts(t)},Z=(t,o)=>{},K=async()=>{Y.value=!0;const t=J();if(e.ruc&&t.valid===!1){Y.value=!1;return}const o={people_id:e.idPerson,cde_id:w.cde_id,component_1:e.component_1,component_2:e.component_2,component_3:e.component_3,ruc:e.ruc,startDate:I(e.startDate).format("YYYY-MM-DD"),endDate:I(e.endDate).format("YYYY-MM-DD"),...N.info&&{idItem:N.info.id}};let m=null;N.info?m="plans-action/update":m="plans-action/create";try{const s=await R({url:`${m}`,method:"POST",data:o});s.status==200&&(E.success(s.message),M(),F("closeDraw")),s.status==400&&E.warning(s.message)}catch{console.log("Failed to update record")}finally{Y.value=!1}};function x(t){t?(e.numberDocument=t.emprendedor_dni,$("numberDocument"),e.ruc=t.ruc,e.component_1=t.component_1_id,e.component_2=t.component_2_id,e.component_3=t.component_3_id,e.startDate=t.startDate?I(t.startDate,"DD/MM/YYYY"):null,e.endDate=t.endDate?I(t.endDate,"DD/MM/YYYY"):null):M()}return re(()=>{N.info&&x(N.info)}),ye(()=>N.info,t=>{t&&x(t)}),(t,o)=>{const m=u("a-input"),s=u("a-form-item"),A=u("a-select"),ee=u("a-input-search"),r=u("a-divider"),n=u("a-date-picker"),g=u("a-button"),P=u("a-form");return i(),h("div",null,[l(P,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:K},{default:c(()=>[U("div",Oe,[(i(!0),h(T,null,be(G.value,(a,ae)=>(i(),h(T,{key:ae},[a.type==="iText"?(i(),y(s,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:c(()=>[l(m,{value:e[a.name],"onUpdate:value":d=>e[a.name]=d,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iSelect"?(i(),y(s,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[a.name=="typeDocument"?(i(),y(A,{key:0,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:H},null,8,["value","onUpdate:value"])):_("",!0),a.name=="gender_id"?(i(),y(A,{key:1,disabled:a.disabled,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:C(D).genders},null,8,["disabled","value","onUpdate:value","options"])):_("",!0),a.name=="sick"?(i(),y(A,{key:2,disabled:a.disabled,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,options:j},null,8,["disabled","value","onUpdate:value"])):_("",!0)]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iSearch"?(i(),y(s,{key:2,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[l(ee,{loading:k.value==a.name,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,onSearch:d=>$(a.name),onInput:d=>X(a.name),onEnterButton:d=>$(a.name),maxlength:a.max},null,8,["loading","value","onUpdate:value","onSearch","onInput","onEnterButton","maxlength"])]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iDivider"?(i(),y(r,{key:3,dashed:"",style:{"grid-column":"1/3",margin:".5rem 0 1rem 0"}})):_("",!0),a.type==="iSelectWrite"?(i(),y(s,{key:4,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[a.name=="city_id"?(i(),y(A,{key:0,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,"show-search":"",options:C(D).cities,"filter-option":L,onChange:W},null,8,["value","onUpdate:value","options"])):_("",!0),a.name=="province_id"?(i(),y(A,{key:1,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,"show-search":"",options:C(D).provinces,"filter-option":L,onChange:z,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):_("",!0),a.name=="district_id"?(i(),y(A,{key:2,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,"show-search":"",options:C(D).districts,"filter-option":L,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):_("",!0),a.is=="component"?(i(),y(A,{key:3,value:e[a.name],"onUpdate:value":d=>e[a.name]=d,"show-search":"",options:V(a.name),"filter-option":L,onChange:d=>Z(d,a.name)},null,8,["value","onUpdate:value","options","onChange"])):_("",!0)]),_:2},1032,["name","label","rules"])):_("",!0),a.type==="iDate"?(i(),y(s,{key:5,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[l(n,{"disabled-date":Q,locale:C(De),value:e[a.name],"onUpdate:value":d=>e[a.name]=d,style:{width:"100%"},format:Ae,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):_("",!0)],64))),128))]),l(s,null,{default:c(()=>[l(g,{class:"btn-produce",type:"primary","html-type":"submit",loading:Y.value},{default:c(()=>o[0]||(o[0]=[q("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Re=Ce(Pe,[["__scopeId","data-v-104877f4"]]);const Ye={key:0},Me={key:1,style:{color:"#00c98a"}},Te={key:0},Le={key:1},qe={key:0,class:"details-plans"},Fe={key:1},$e={key:0},ze=["onClick"],Be={class:"paginator"},Xe={__name:"PlanesDeAccion",setup(ne){I.locale("es");const S=JSON.parse(localStorage.getItem("role"));de();const w=p(I("2025","YYYY"));p(null);const D=p(null);p(null);const F=p(!1);p();const N=p(50),G=p([]),Y=p(!1),k=p(0),O=p({page:1}),H=p("plans-action/list"),j=p(1200),e=p(window.innerHeight-100),M=p(!1);p(null);const V=p([{value:"si",label:"SI"},{value:"no",label:"NO"}]),J=p([{value:"aprobado",label:"Aprobado ✔"},{value:"observado",label:"Observado ⚠"}]),Q=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},...S[0].id!=2?[{title:"CENTRO TU EMPRESA",dataIndex:"centro_empresa",fixed:"left",width:150}]:[],...S[0].id!=2?[{title:"ASESOR",dataIndex:"asesor",fixed:"left",width:180}]:[],...S[0].id!=2?[{title:"DNI ASESOR",dataIndex:"asesor_dni",fixed:"left",width:100,align:"center"}]:[],{title:"RUC",dataIndex:"ruc",width:100,fixed:"left",align:"center"},{title:"NOMBRE DEL EMPRENDEDOR O MYPE",fixed:"left",dataIndex:"emprendedor_nombres",width:170},{title:"REGIÓN DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_region",width:170},{title:"PROVINCIA DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_provincia",width:170},{title:"DISTRITO DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_distrito",width:170},{title:"Genero",dataIndex:"genero",width:60,align:"center"},{title:"Tiene alguna Discapacidad ? (SI / NO)",dataIndex:"discapacidad",width:110,align:"center"},{title:"COMPONENTE 1",dataIndex:"component_1",width:190,align:"center"},{title:"COMPONENTE 2",dataIndex:"component_2",width:190,align:"center"},{title:"COMPONENTE 3",dataIndex:"component_3",width:190,align:"center"},{title:"NÚMERO DE SESIONES",dataIndex:"numberSessions",width:100,align:"center"},{title:"DÍA INICIO",dataIndex:"startDate",width:100,align:"center"},{title:"DÍA FIN",dataIndex:"endDate",width:100,align:"center"},{title:"TOTAL DE DÍAS",dataIndex:"totalDate",width:100,align:"center"},...S[0].id!=2?[{title:"ACTA DE COMPROMISO",dataIndex:"acta",width:160,align:"center"}]:[],...S[0].id!=2?[{title:"CULMINÓ EL PLAN Y ENVIÓ CORREO",dataIndex:"envioCorreo",width:160,align:"center"}]:[],{title:"FECHA ACTUALIZACIÓN",dataIndex:"updated_at",width:140,align:"center"},{title:"ESTADO",dataIndex:"status",width:160,align:"center"},{title:"DETALLES",dataIndex:"detalle",width:220,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],X=async(r,n)=>{try{const g={id:n.id,details:n.details},P=await R({url:"plans-action/details",method:"PUT",data:g});P.status==200&&(E.success(P.message),s())}catch{console.log("Failed to delete")}},L=async(r,n)=>{try{const g=await R({url:`plans-action/status/${n.id}/${r}`,method:"PUT"});g.status==200&&(E.success(g.message),s())}catch{console.log("Failed to delete")}},$=async r=>{try{const n=await R({url:`plans-action/delete/${r.id}`,method:"DELETE"});n.status==200&&(E.success(n.message),s())}catch{console.log("Failed to delete")}},W=r=>{D.value=r,M.value=!0},z=async(r,n,g)=>{const P={idPlan:n.id,type:g,value:r},a=await R({url:"plans-action/edit-yes-no",method:"PUT",data:P});a.status==200&&s(),a.status==400&&(E.warning(a.message),s())},Z=()=>{e.value=window.innerHeight-315},K=()=>{D.value=null,M.value=!1,s()},x=se({search:""}),t=()=>{O.value.page=1,s({search:x.search})},o=()=>{x.search||s()},m=r=>{O.value.page=r,s()},s=async()=>{Y.value=!0;const r={};w!=null&&w.value&&(r.year=I(w.value).format("YYYY")),x.search&&(r.search=x.search),O.value.page&&(r.page=O.value.page);try{const{data:n}=await R({url:H.value,method:"GET",params:r});G.value=n.data,k.value=n.total,N.value=n.per_page}catch(n){console.error("Error de red:",n)}finally{Y.value=!1}},A=async()=>{try{F.value=!0;const r={};w!=null&&w.value&&(r.year=I(w.value).format("YYYY")),x.search&&(r.search=x.search),O.value.page&&(r.page=O.value.page);const{data:n}=await R({url:"plans-action/list-all",method:"GET",params:r});await Se("download/actions-plans","planes-acción",n)}catch(r){console.error("Error de red:",r)}finally{F.value=!1}},ee=we(()=>r=>(O.value.page-1)*N.value+r+1);return re(()=>{s(),window.addEventListener("resize",Z),Z()}),(r,n)=>{const g=u("a-button"),P=u("a-date-picker"),a=u("a-col"),ae=u("a-input"),d=u("a-input-group"),ce=u("a-row"),te=u("a-select"),oe=u("a-tag"),ue=u("a-textarea"),le=u("a-menu-item"),me=u("a-popconfirm"),pe=u("a-menu"),_e=u("a-dropdown"),ve=u("a-table"),ge=u("a-pagination"),fe=u("a-drawer");return i(),h("div",null,[n[10]||(n[10]=U("h3",{class:"title-produce"},"PLANES DE ACCIÓN",-1)),l(ce,{style:{margin:"1rem 0"}},{default:c(()=>[l(a,{xs:24,md:12,lg:18},{default:c(()=>[l(g,{onClick:n[0]||(n[0]=b=>M.value=!0),type:"primary"},{default:c(()=>n[5]||(n[5]=[q("NUEVO")])),_:1}),l(g,{class:"btn-excel",loading:F.value,type:"primary",style:{"margin-left":".6rem"},onClick:A},{default:c(()=>n[6]||(n[6]=[U("img",{width:"20",style:{margin:"-2px 4px 0 0"},src:Ee},null,-1)])),_:1},8,["loading"]),l(P,{allowClear:!1,value:w.value,"onUpdate:value":n[1]||(n[1]=b=>w.value=b),picker:"year",placeholder:"Año 0",onChange:s,style:{width:"80px",margin:"0 0 0 8px"}},null,8,["value"])]),_:1}),l(a,{xs:24,md:12,lg:6},{default:c(()=>[l(d,{compact:""},{default:c(()=>[l(ae,{value:x.search,"onUpdate:value":n[2]||(n[2]=b=>x.search=b),style:{width:"calc(100% - 80px)"},onInput:o,placeholder:"Buscar por Asesor, DNI o RUC"},null,8,["value"]),l(g,{type:"primary",disabled:x.search==="",onClick:t},{default:c(()=>n[7]||(n[7]=[q("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),l(ve,{bordered:"",scroll:{x:j.value,y:e.value},class:"table-actions",columns:Q,"data-source":G.value,pagination:!1,loading:Y.value,size:"small"},{bodyCell:c(({column:b,record:v,index:he})=>[b.dataIndex==="idx"?(i(),h(T,{key:0},[q(B(ee.value(he)),1)],64)):_("",!0),b.dataIndex==="ruc"?(i(),h(T,{key:1},[v.ruc?(i(),h("span",Ye,B(v.ruc),1)):(i(),h("span",Me,"En trámite"))],64)):_("",!0),b.dataIndex==="acta"?(i(),y(te,{key:2,value:v.actaCompromiso,"onUpdate:value":f=>v.actaCompromiso=f,style:{width:"70%"},options:V.value,onChange:f=>z(f,v,"actaCompromiso")},null,8,["value","onUpdate:value","options","onChange"])):_("",!0),b.dataIndex==="envioCorreo"?(i(),y(te,{key:3,value:v.envioCorreo,"onUpdate:value":f=>v.envioCorreo=f,style:{width:"70%"},options:V.value,onChange:f=>z(f,v,"envioCorreo")},null,8,["value","onUpdate:value","options","onChange"])):_("",!0),b.dataIndex==="status"?(i(),h(T,{key:4},[C(S)[0].id!=2?(i(),h("div",Te,[l(te,{value:v.status,"onUpdate:value":f=>v.status=f,options:J.value,style:{width:"90%"},onChange:f=>L(f,v)},null,8,["value","onUpdate:value","options","onChange"])])):(i(),h("div",Le,[l(oe,{color:v.status=="observado"?"orange":"green"},{default:c(()=>[q(B(v.status),1)]),_:2},1032,["color"])]))],64)):_("",!0),b.dataIndex==="detalle"?(i(),h(T,{key:5},[C(S)[0].id!=2?(i(),h("div",qe,[l(ue,{value:v.details,"onUpdate:value":f=>v.details=f,rows:1,maxlength:255},null,8,["value","onUpdate:value"]),l(g,{class:"details-plans-btn",type:"text",icon:ie(C(Ne)),onClick:f=>X(f,v)},null,8,["icon","onClick"])])):(i(),h("div",Fe,[U("p",null,B(v.details),1)]))],64)):_("",!0),b.dataIndex=="actions"?(i(),h(T,{key:6},[v.status=="observado"||C(S)[0].id!=2?(i(),h("div",$e,[l(_e,{trigger:["click"]},{overlay:c(()=>[l(pe,null,{default:c(()=>[l(le,null,{default:c(()=>[U("a",{onClick:f=>W(v)},"Editar",8,ze)]),_:2},1024),l(le,null,{default:c(()=>[l(me,{title:"¿Seguro de eliminar?",onConfirm:f=>$(v)},{icon:c(()=>[l(C(xe),{style:{color:"red"}})]),default:c(()=>[n[8]||(n[8]=U("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:c(()=>[U("a",{class:"ant-dropdown-link",onClick:n[3]||(n[3]=Ie(()=>{},["prevent"]))},[l(g,{shape:"circle",icon:ie(C(ke)),size:"small"},null,8,["icon"])])]),_:2},1024)])):_("",!0)],64)):_("",!0)]),_:1},8,["scroll","data-source","loading"]),U("div",Be,[U("span",null,[l(oe,{color:"blue"},{default:c(()=>[U("b",null,B(k.value),1)]),_:1}),n[9]||(n[9]=q("Registros"))]),l(ge,{size:"small",total:k.value,pageSize:N.value,onChange:m,showSizeChanger:!1},null,8,["total","pageSize"])]),l(fe,{open:M.value,"onUpdate:open":n[4]||(n[4]=b=>M.value=b),title:"Agregar Plan de Acción",placement:"right",width:"650"},{default:c(()=>[l(Re,{onCloseDraw:K,info:D.value},null,8,["info"])]),_:1},8,["open"])])}}};export{Xe as default};
