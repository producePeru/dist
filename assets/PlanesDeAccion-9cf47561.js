import{L as F,r as g,a as ae,k as oe,K as ge,b as c,o as s,d as B,c as l,w as i,e as S,F as ee,x as he,q as _,s as m,h as C,M as fe,i as q,m as O,z as P,g as ye,H as be,I as De,t as te,U as we,P as Ce,J as xe}from"./index-090759fc.js";import{_ as Ee}from"./icoexcel-1b303edf.js";import{u as le}from"./selectes-7bd6d905.js";import"./es-4dffa42a.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{M as Se}from"./MoreOutlined-7b10ca0b.js";const Ue={numberDocument:{type:"iSearch",label:"Número de documento",name:"numberDocument",required:!0,message:"Ingresar Número de documento",disabled:!1},namePerson:{type:"iText",label:"Nombre",name:"namePerson",required:!0,message:"Escribe nombre",disabled:!0},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelectWrite",label:"Provincia del negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelectWrite",label:"Distrito del negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},gender_id:{type:"iSelect",label:"Género",name:"gender_id",required:!0,message:"Seleccionar género",disabled:!0},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"Seleccionar estado",disabled:!0},ruc:{type:"iSearch",label:"Número de RUC",name:"ruc",required:!0,message:"Escribe el número de RUC",disabled:!1},divider:{type:"iDivider"},component_1:{type:"iSelectWrite",is:"component",label:"Componente 1",name:"component_1",required:!0,message:"Seleccionar componente 1",disabled:!1},component_2:{type:"iSelectWrite",is:"component",label:"Componente 2",name:"component_2",required:!1,message:"Seleccionar componente 2",disabled:!1},component_3:{type:"iSelectWrite",is:"component",label:"Componente 3",name:"component_3",required:!1,message:"Seleccionar componente 3",disabled:!1},startDate:{type:"iDate",label:"Día Inicio",name:"startDate",required:!0,message:"Seleccionar fecha de inicio",placeholder:"año-mes-día"},endDate:{type:"iDate",label:"Día Fin",name:"endDate",required:!0,message:"Seleccionar fecha de fin",placeholder:"año-mes-día"}};const Ne={class:"grid-planes"},ke="DD/MM/YYYY",Oe={__name:"NuevoPlanAccion",props:["info"],emits:["closeDraw"],setup(G,{emit:U}){F.locale("es");const y=JSON.parse(localStorage.getItem("profile")),r=le(),x=U,b=G;r.$patch({cities:r.cities}),r.$patch({genders:r.genders}),r.$patch({components:r.components}),r.fetchCities(),r.fetchGenders(),r.fetchComponents();const R=g(Ue),N=g(!1),E=g(null),A=[{value:1,label:"DNI"},{value:2,label:"RUC"}],J=[{label:"Si",value:"yes"},{label:"No",value:"no"}],n=ae({numberDocument:null,component_1:null,component_2:null,component_3:null}),W=()=>{n.numberDocument=null,n.component_1=null,n.component_2=null,n.component_3=null,n.ruc=null,n.idPerson=null,n.namePerson=null,n.city_id=null,n.province_id=null,n.district_id=null,n.gender_id=null,n.sick=null},k=t=>t&&t>F().endOf("day"),V=t=>{n[t]=n[t].replace(/\D/g,"")},M=(t,o)=>{const u=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(u)},L=async t=>{if(!n.numberDocument)return O.warning("Ingrese un número a buscar...");try{if(t=="numberDocument"){E.value=t;const o=await P({url:`person/data/${n.numberDocument}`,method:"GET"});if(o.status==404)return E.value=null,n.numberDocument=null,O.warning("Este usuario no fue registrado");o.status==200&&(n.idPerson=o.data.id,n.namePerson=o.data.namePerson,n.city_id=o.data.city_id,H(o.data.city_id),n.province_id=o.data.province_id,j(o.data.province_id),n.district_id=o.data.district_id,n.gender_id=o.data.gender_id,n.sick=o.data.sick)}if(t=="ruc"){E.value=t;const o=await P({url:`plans-action/components/${n.ruc}`,method:"GET"});if(o.status==200){const u=o.data;u.component_1&&(n.component_1=u.component_1),u.component_2&&(n.component_2=u.component_2),u.component_3&&(n.component_3=u.component_3),u.endDate&&(n.endDate=F(u.endDate,"YYYY-MM-DD"))}else return E.value=null,n.ruc=null,O.warning("No se han registrado datos con ese número de RUC")}}catch{console.log("Failed to update record")}finally{E.value=null}},H=t=>{n.province_id=null,n.district_id=null,r.fetchProvinces(t)},j=t=>{n.district_id=null,r.fetchDistricts(t)},K=(t,o)=>{Object.keys(n).filter(v=>v!==o&&v.startsWith("component_")).some(v=>n[v]===t)?(n[o]=null,console.error("Opción ya seleccionada en otro campo")):n[o]=t},Y=async()=>{N.value=!0;const t={people_id:n.idPerson,cde_id:y.cde_id,component_1:n.component_1,component_2:n.component_2,component_3:n.component_3,ruc:n.ruc,startDate:F(n.startDate).format("YYYY-MM-DD"),endDate:F(n.endDate).format("YYYY-MM-DD"),...b.info&&{idItem:b.info.id}};let o=null;b.info?o="plans-action/update":o="plans-action/create";try{const u=await P({url:`${o}`,method:"POST",data:t});u.status==200&&(O.success(u.message),x("closeDraw")),u.status==400&&O.warning(u.message)}catch{console.log("Failed to update record")}finally{N.value=!1}};function z(t){t?(n.numberDocument=t.emprendedor_dni,L("numberDocument"),n.ruc=t.ruc,n.component_1=t.component_1,n.component_2=t.component_2,n.component_3=t.component_3):W()}return oe(()=>{b.info&&z(b.info)}),ge(()=>b.info,t=>{t&&z(t)}),(t,o)=>{const u=c("a-input"),v=c("a-form-item"),I=c("a-select"),Q=c("a-input-search"),X=c("a-divider"),w=c("a-date-picker"),Z=c("a-button"),d=c("a-form");return s(),B("div",null,[l(d,{layout:"vertical",model:n,name:"basic",autocomplete:"off",onFinish:Y},{default:i(()=>[S("div",Ne,[(s(!0),B(ee,null,he(R.value,(e,f)=>(s(),B(ee,{key:f},[e.type==="iText"?(s(),_(v,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:i(()=>[l(u,{value:n[e.name],"onUpdate:value":a=>n[e.name]=a,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iSelect"?(s(),_(v,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[e.name=="typeDocument"?(s(),_(I,{key:0,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,options:A},null,8,["value","onUpdate:value"])):m("",!0),e.name=="gender_id"?(s(),_(I,{key:1,disabled:e.disabled,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,options:C(r).genders},null,8,["disabled","value","onUpdate:value","options"])):m("",!0),e.name=="sick"?(s(),_(I,{key:2,disabled:e.disabled,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,options:J},null,8,["disabled","value","onUpdate:value"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iSearch"?(s(),_(v,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[l(Q,{loading:E.value==e.name,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,onSearch:a=>L(e.name),onInput:a=>V(e.name),onEnterButton:a=>L(e.name),maxlength:11},null,8,["loading","value","onUpdate:value","onSearch","onInput","onEnterButton"])]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iDivider"?(s(),_(X,{key:3,dashed:"",style:{"grid-column":"1/3",margin:".5rem 0 1rem 0"}})):m("",!0),e.type==="iSelectWrite"?(s(),_(v,{key:4,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[e.name=="city_id"?(s(),_(I,{key:0,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,"show-search":"",options:C(r).cities,"filter-option":M,onChange:H},null,8,["value","onUpdate:value","options"])):m("",!0),e.name=="province_id"?(s(),_(I,{key:1,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,"show-search":"",options:C(r).provinces,"filter-option":M,onChange:j,disabled:!n.city_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),e.name=="district_id"?(s(),_(I,{key:2,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,"show-search":"",options:C(r).districts,"filter-option":M,disabled:!n.province_id},null,8,["value","onUpdate:value","options","disabled"])):m("",!0),e.is=="component"?(s(),_(I,{key:3,value:n[e.name],"onUpdate:value":a=>n[e.name]=a,"show-search":"",options:C(r).components,"filter-option":M,onChange:a=>K(a,e.name)},null,8,["value","onUpdate:value","options","onChange"])):m("",!0)]),_:2},1032,["name","label","rules"])):m("",!0),e.type==="iDate"?(s(),_(v,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[l(w,{"disabled-date":k,locale:C(fe),value:n[e.name],"onUpdate:value":a=>n[e.name]=a,style:{width:"100%"},format:ke,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):m("",!0)],64))),128))]),l(v,null,{default:i(()=>[l(Z,{class:"btn-produce",type:"primary","html-type":"submit",loading:N.value},{default:i(()=>[q("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Pe=Ie(Oe,[["__scopeId","data-v-e86437d7"]]),Re=ye.get("token"),Ae="https://apituempresa.soporte-pnte.com/api/",Me="http://127.0.0.1:8000/api/",Te=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?Me:Ae;async function qe(G,U){try{U(!0);const y=await be({url:`${Te}${G}`,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${Re}`},method:"GET",responseType:"blob"}),r=window.URL.createObjectURL(new Blob([y.data])),x=document.createElement("a");x.href=r;const b=y.headers["content-disposition"],R=b?b.split("filename=")[1].split(";")[0]:"reporte.xlsx";x.setAttribute("download",R),document.body.appendChild(x),x.click(),document.body.removeChild(x)}catch(y){console.error("Error al descargar el archivo:",y)}finally{U(!1)}}const Le=S("h3",{class:"title-produce"},"PLANES DE ACCIÓN",-1),Ye=S("img",{width:"20",style:{margin:"-2px 4px 0 0"},src:Ee},null,-1),ze=["onClick"],$e=S("a",null,"Eliminar",-1),Fe={class:"paginator"},Je={__name:"PlanesDeAccion",setup(G){const U=JSON.parse(localStorage.getItem("role")),y=le();y.$patch({components:y.components}),y.fetchComponents();const r=g(null);g(null);const x=g(!1);g();const b=g(50),R=g([]),N=g(!1),E=g(0),A=g({page:1}),J=g("plans-action/list"),n=g(1200),W=g(window.innerHeight-100),k=g(!1);g(null);const V=g([{value:"si",label:"SI"},{value:"no",label:"NO"}]),M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},...U[0].id!=2?[{title:"CENTRO TU EMPRESA",dataIndex:"centro_empresa",fixed:"left",width:150}]:[],...U[0].id!=2?[{title:"ASESOR",dataIndex:"asesor",fixed:"left",width:180}]:[],{title:"RUC",dataIndex:"ruc",width:100,fixed:"left",align:"center"},{title:"NOMBRE DEL EMPRENDEDOR O MYPE",fixed:"left",dataIndex:"emprendedor_nombres",width:170},{title:"REGIÓN DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_region",width:170},{title:"PROVINCIA DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_provincia",width:170},{title:"DISTRITO DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_distrito",width:170},{title:"Genero",dataIndex:"genero",width:60,align:"center"},{title:"Tiene alguna Discapacidad ? (SI / NO)",dataIndex:"discapacidad",width:110,align:"center"},{title:"COMPONENTE 1",dataIndex:"component1",width:190,align:"center"},{title:"COMPONENTE 2",dataIndex:"component2",width:190,align:"center"},{title:"COMPONENTE 3",dataIndex:"component3",width:190,align:"center"},{title:"NÚMERO DE SESIONES",dataIndex:"numberSessions",width:100,align:"center"},{title:"DÍA INICIO",dataIndex:"startDate",width:100,align:"center"},{title:"DÍA FIN",dataIndex:"endDate",width:100,align:"center"},{title:"TOTAL DE DÍAS",dataIndex:"totalDate",width:100,align:"center"},{title:"ACTA DE COMPROMISO",dataIndex:"acta",width:160,align:"center"},{title:"CULMINÓ EL PLAN Y ENVIÓ CORREO",dataIndex:"envioCorreo",width:160,align:"center"},{title:"FECHA ACTUALIZACIÓN",dataIndex:"updated_at",width:140,align:"center"},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],L=async d=>{try{const e=await P({url:`plans-action/delete/${d.id}`,method:"DELETE"});e.status==200&&(O.success(e.message),w())}catch{console.log("Failed to delete")}},H=d=>{r.value=d,k.value=!0},j=d=>{x.value=d},K=async()=>{qe("download/actions-plans",j)},Y=async(d,e,f)=>{const a={idPlan:e.id,nameComponent:f,valueComponent:d},T=await P({url:"plans-action/edit-component",method:"PUT",data:a});T.status==200&&w(),T.status==400&&(O.warning(T.message),w())},z=async(d,e,f)=>{const a={idPlan:e.id,type:f,value:d};(await P({url:"plans-action/edit-yes-no",method:"PUT",data:a})).status==200&&w()},t=(d,e)=>{const f=d.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)},o=()=>{W.value=window.innerHeight-315},u=()=>{r.value=null,k.value=!1,w()},v=ae({search:""}),I=()=>{w({search:v.search})},Q=()=>{v.search||w()},X=d=>{A.value.page=d,w()},w=async d=>{try{N.value=!0;const e=A.value.page===1?"":A.value,f=d?{...e,...d}:e,a=await P({url:J.value,method:"GET",params:f});R.value=a.data,E.value=a.pagination.total,b.value=a.pagination.per_page}catch(e){console.error("Error de red:",e)}finally{N.value=!1}},Z=De(()=>d=>(A.value.page-1)*b.value+d+1);return oe(()=>{w(),window.addEventListener("resize",o),o()}),(d,e)=>{const f=c("a-button"),a=c("a-col"),T=c("a-input"),ie=c("a-input-group"),se=c("a-row"),$=c("a-select"),ne=c("a-menu-item"),re=c("a-popconfirm"),de=c("a-menu"),ce=c("a-dropdown"),ue=c("a-table"),pe=c("a-tag"),me=c("a-pagination"),_e=c("a-drawer");return s(),B("div",null,[Le,l(se,{style:{margin:"1rem 0"}},{default:i(()=>[l(a,{xs:24,md:12,lg:18},{default:i(()=>[l(f,{onClick:e[0]||(e[0]=D=>k.value=!0),type:"primary"},{default:i(()=>[q("NUEVO")]),_:1}),l(f,{class:"btn-excel",loading:x.value,type:"primary",style:{"margin-left":".6rem"},onClick:K},{default:i(()=>[Ye,q(" DESCARGAR ")]),_:1},8,["loading"])]),_:1}),l(a,{xs:24,md:12,lg:6},{default:i(()=>[l(ie,{compact:""},{default:i(()=>[l(T,{value:v.search,"onUpdate:value":e[1]||(e[1]=D=>v.search=D),style:{width:"calc(100% - 80px)"},onInput:Q},null,8,["value"]),l(f,{type:"primary",disabled:v.search==="",onClick:I},{default:i(()=>[q("BUSCAR")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),l(ue,{bordered:"",scroll:{x:n.value,y:W.value},class:"table-actions",columns:M,"data-source":R.value,pagination:!1,loading:N.value,size:"small"},{bodyCell:i(({column:D,record:h,index:ve})=>[D.dataIndex==="idx"?(s(),B(ee,{key:0},[q(te(Z.value(ve)),1)],64)):m("",!0),D.dataIndex==="component1"?(s(),_($,{key:1,style:{width:"170px"},value:h.component_1,"onUpdate:value":p=>h.component_1=p,options:C(y).components,"filter-option":t,onChange:p=>Y(p,h,"component_1")},null,8,["value","onUpdate:value","options","onChange"])):m("",!0),D.dataIndex==="component2"?(s(),_($,{key:2,style:{width:"170px"},value:h.component_2,"onUpdate:value":p=>h.component_2=p,options:C(y).components,"filter-option":t,onChange:p=>Y(p,h,"component_2")},null,8,["value","onUpdate:value","options","onChange"])):m("",!0),D.dataIndex==="component3"?(s(),_($,{key:3,style:{width:"170px"},value:h.component_3,"onUpdate:value":p=>h.component_3=p,options:C(y).components,"filter-option":t,onChange:p=>Y(p,h,"component_3")},null,8,["value","onUpdate:value","options","onChange"])):m("",!0),D.dataIndex==="acta"?(s(),_($,{key:4,value:h.actaCompromiso,"onUpdate:value":p=>h.actaCompromiso=p,style:{width:"70%"},options:V.value,onChange:p=>z(p,h,"actaCompromiso")},null,8,["value","onUpdate:value","options","onChange"])):m("",!0),D.dataIndex==="envioCorreo"?(s(),_($,{key:5,value:h.envioCorreo,"onUpdate:value":p=>h.envioCorreo=p,style:{width:"70%"},options:V.value,onChange:p=>z(p,h,"envioCorreo")},null,8,["value","onUpdate:value","options","onChange"])):m("",!0),D.dataIndex=="actions"?(s(),_(ce,{key:6,trigger:["click"]},{overlay:i(()=>[l(de,null,{default:i(()=>[l(ne,null,{default:i(()=>[S("a",{onClick:p=>H(h)},"Editar",8,ze)]),_:2},1024),l(ne,null,{default:i(()=>[l(re,{title:"¿Seguro de eliminar?",onConfirm:p=>L(h)},{icon:i(()=>[l(C(we),{style:{color:"red"}})]),default:i(()=>[$e]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:i(()=>[S("a",{class:"ant-dropdown-link",onClick:e[2]||(e[2]=xe(()=>{},["prevent"]))},[l(f,{shape:"circle",icon:Ce(C(Se)),size:"small"},null,8,["icon"])])]),_:2},1024)):m("",!0)]),_:1},8,["scroll","data-source","loading"]),S("div",Fe,[S("span",null,[l(pe,{color:"blue"},{default:i(()=>[S("b",null,te(E.value),1)]),_:1}),q("Registros")]),l(me,{size:"small",total:E.value,pageSize:b.value,onChange:X,showSizeChanger:!1},null,8,["total","pageSize"])]),l(_e,{open:k.value,"onUpdate:open":e[3]||(e[3]=D=>k.value=D),title:"Agregar un nuevo Plan de Acción",placement:"right",width:"650"},{default:i(()=>[l(Pe,{onCloseDraw:u,info:r.value},null,8,["info"])]),_:1},8,["open"])])}}};export{Je as default};
