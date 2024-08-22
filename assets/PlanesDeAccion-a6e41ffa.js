import{L as T,r as m,a as ne,k as oe,K as pe,b as u,o as d,d as U,c as s,w as r,e as I,F as W,x as _e,q as _,s as p,h as R,M as ve,i as L,m as C,z as q,g as fe,H as ge,I as he,t as te,U as be,P as ye,J as De}from"./index-6362222c.js";import{_ as we}from"./icoexcel-1b303edf.js";import{u as le}from"./selectes-bf919936.js";import"./es-e67a45aa.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";import{M as xe}from"./MoreOutlined-3cdc5c05.js";const Ce={numberDocument:{type:"iSearch",label:"Número de documento",name:"numberDocument",required:!0,message:"Ingresar Número de documento",disabled:!1,max:11},namePerson:{type:"iText",label:"Nombre",name:"namePerson",required:!0,message:"Escribe nombre",disabled:!0},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelectWrite",label:"Provincia del negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelectWrite",label:"Distrito del negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},sick:{type:"iSelect",label:"¿Tiene discapacidad?",name:"sick",required:!0,message:"Seleccionar estado",disabled:!0},divider:{type:"iDivider"},ruc:{type:"iSearch",label:"Número de RUC",name:"ruc",required:!1,message:"Escribe el número de RUC",disabled:!1,max:11},component_1:{type:"iSelectWrite",is:"component",label:"Componente 1",name:"component_1",required:!0,message:"Seleccionar componente 1",disabled:!1},component_2:{type:"iSelectWrite",is:"component",label:"Componente 2",name:"component_2",required:!0,message:"Seleccionar componente 2",disabled:!1},component_3:{type:"iSelectWrite",is:"component",label:"Componente 3",name:"component_3",required:!1,message:"Seleccionar componente 3",disabled:!1},startDate:{type:"iDate",label:"Día Inicio",name:"startDate",required:!0,message:"Seleccionar fecha de inicio",placeholder:"año-mes-día"},endDate:{type:"iDate",label:"Día Fin",name:"endDate",required:!0,message:"Seleccionar fecha de fin",placeholder:"año-mes-día"}};const Ie={class:"grid-planes"},Se="DD/MM/YYYY",Ne={__name:"NuevoPlanAccion",props:["info"],emits:["closeDraw"],setup(z,{emit:S}){T.locale("es");const b=JSON.parse(localStorage.getItem("profile")),v=le(),g=S,f=z;v.$patch({cities:v.cities}),v.fetchCities();const O=m(Ce),N=m(!1),h=m(null),H=[{label:"DESARROLLO PRODUCTIVO",value:1},{label:"DIGITALIZACIÓN",value:2},{label:"FINANZAS",value:3},{label:"FORMALIZACIÓN",value:4},{label:"GESTIÓN EMPRESARIAL",value:5}],Z=[{value:1,label:"DNI"},{value:2,label:"RUC"}],F=[{label:"Si",value:"yes"},{label:"No",value:"no"}],e=ne({numberDocument:null,component_1:null,component_2:null,component_3:null,ruc:null}),Y=()=>{e.numberDocument=null,e.component_1=null,e.component_2=null,e.component_3=null,e.ruc=null,e.idPerson=null,e.namePerson=null,e.city_id=null,e.province_id=null,e.district_id=null,e.gender_id=null,e.sick=null,e.startDate=null,e.endDate=null},j=t=>{const n=Object.keys(e).reduce((c,o)=>(o!==t&&e[o]!==null&&c.push(e[o]),c),[]);return H.filter(c=>!n.includes(c.value))},J=()=>{const t=e.ruc;return t&&!/^\d{11}$/.test(t)?(C.error("El número de RUC debe contener exactamente 11 dígitos numéricos."),{valid:!1}):t&&!/^(10|15|20)/.test(t)?(C.error("El número de RUC debe comenzar con 10, 15 o 20."),{valid:!1}):{valid:!0}},K=t=>{if(!t)return!1;const n=e.startDate?T(e.startDate):null;return n&&t.isBefore(n,"day")||t.isAfter(T().endOf("day"),"day")},Q=t=>{e[t]=e[t].replace(/\D/g,"")},A=(t,n)=>{const c=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(c)},M=async t=>{if(!e.numberDocument)return C.warning("Ingrese un número a buscar...");try{if(t=="numberDocument"){h.value=t;const n=await q({url:`person/data/${e.numberDocument}`,method:"GET"});if(n.status==404)return h.value=null,e.numberDocument=null,C.warning("Este usuario no fue registrado");n.status==200&&(e.idPerson=n.data.id,e.namePerson=n.data.namePerson,e.city_id=n.data.city_id,$(n.data.city_id),e.province_id=n.data.province_id,B(n.data.province_id),e.district_id=n.data.district_id,console.log("FormState",n.data.gender_id),e.sick=n.data.sick)}if(t=="ruc"){h.value=t;const n=await q({url:`plans-action/components/${e.ruc}`,method:"GET"});if(n.status==200){const c=n.data;c.component_1&&(e.component_1=c.component_1),c.component_2&&(e.component_2=c.component_2),c.component_3&&(e.component_3=c.component_3),c.endDate&&(e.endDate=T(c.endDate,"YYYY-MM-DD"))}else return h.value=null,e.ruc=null,C.warning("No se han registrado datos con ese número de RUC")}}catch{console.log("Failed to update record")}finally{h.value=null}},$=t=>{e.province_id=null,e.district_id=null,v.fetchProvinces(t)},B=t=>{e.district_id=null,v.fetchDistricts(t)},k=(t,n)=>{},X=async()=>{N.value=!0;const t=J();if(e.ruc&&t.valid===!1){N.value=!1;return}const n={people_id:e.idPerson,cde_id:b.cde_id,component_1:e.component_1,component_2:e.component_2,component_3:e.component_3,ruc:e.ruc,startDate:T(e.startDate).format("YYYY-MM-DD"),endDate:T(e.endDate).format("YYYY-MM-DD"),...f.info&&{idItem:f.info.id}};let c=null;f.info?c="plans-action/update":c="plans-action/create";try{const o=await q({url:`${c}`,method:"POST",data:n});o.status==200&&(C.success(o.message),Y(),g("closeDraw")),o.status==400&&C.warning(o.message)}catch{console.log("Failed to update record")}finally{N.value=!1}};function G(t){t?(e.numberDocument=t.emprendedor_dni,M("numberDocument"),e.ruc=t.ruc,e.component_1=t.component_1,e.component_2=t.component_2,e.component_3=t.component_3):Y()}return oe(()=>{f.info&&G(f.info)}),pe(()=>f.info,t=>{t&&G(t)}),(t,n)=>{const c=u("a-input"),o=u("a-form-item"),l=u("a-select"),y=u("a-input-search"),D=u("a-divider"),P=u("a-date-picker"),ee=u("a-button"),ae=u("a-form");return d(),U("div",null,[s(ae,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:X},{default:r(()=>[I("div",Ie,[(d(!0),U(W,null,_e(O.value,(a,V)=>(d(),U(W,{key:V},[a.type==="iText"?(d(),_(o,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:r(()=>[s(c,{value:e[a.name],"onUpdate:value":i=>e[a.name]=i,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),a.type==="iSelect"?(d(),_(o,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[a.name=="typeDocument"?(d(),_(l,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:Z},null,8,["value","onUpdate:value"])):p("",!0),a.name=="gender_id"?(d(),_(l,{key:1,disabled:a.disabled,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:R(v).genders},null,8,["disabled","value","onUpdate:value","options"])):p("",!0),a.name=="sick"?(d(),_(l,{key:2,disabled:a.disabled,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,options:F},null,8,["disabled","value","onUpdate:value"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),a.type==="iSearch"?(d(),_(o,{key:2,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[s(y,{loading:h.value==a.name,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,onSearch:i=>M(a.name),onInput:i=>Q(a.name),onEnterButton:i=>M(a.name),maxlength:a.max},null,8,["loading","value","onUpdate:value","onSearch","onInput","onEnterButton","maxlength"])]),_:2},1032,["name","label","rules"])):p("",!0),a.type==="iDivider"?(d(),_(D,{key:3,dashed:"",style:{"grid-column":"1/3",margin:".5rem 0 1rem 0"}})):p("",!0),a.type==="iSelectWrite"?(d(),_(o,{key:4,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[a.name=="city_id"?(d(),_(l,{key:0,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:R(v).cities,"filter-option":A,onChange:$},null,8,["value","onUpdate:value","options"])):p("",!0),a.name=="province_id"?(d(),_(l,{key:1,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:R(v).provinces,"filter-option":A,onChange:B,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),a.name=="district_id"?(d(),_(l,{key:2,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:R(v).districts,"filter-option":A,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),a.is=="component"?(d(),_(l,{key:3,value:e[a.name],"onUpdate:value":i=>e[a.name]=i,"show-search":"",options:j(a.name),"filter-option":A,onChange:i=>k(i,a.name)},null,8,["value","onUpdate:value","options","onChange"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),a.type==="iDate"?(d(),_(o,{key:5,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[s(P,{"disabled-date":K,locale:R(ve),value:e[a.name],"onUpdate:value":i=>e[a.name]=i,style:{width:"100%"},format:Se,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):p("",!0)],64))),128))]),s(o,null,{default:r(()=>[s(ee,{class:"btn-produce",type:"primary","html-type":"submit",loading:N.value},{default:r(()=>[L("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Ue=Ee(Ne,[["__scopeId","data-v-f3d08954"]]),Oe=fe.get("token"),ke="https://apituempresa.soporte-pnte.com/api/",Pe="http://127.0.0.1:8000/api/",Re=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?Pe:ke;async function Ae(z,S){try{S(!0);const b=await ge({url:`${Re}${z}`,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${Oe}`},method:"GET",responseType:"blob"}),v=window.URL.createObjectURL(new Blob([b.data])),g=document.createElement("a");g.href=v;const f=b.headers["content-disposition"],O=f?f.split("filename=")[1].split(";")[0]:"reporte.xlsx";g.setAttribute("download",O),document.body.appendChild(g),g.click(),document.body.removeChild(g)}catch(b){console.error("Error al descargar el archivo:",b)}finally{S(!1)}}const Me=I("h3",{class:"title-produce"},"PLANES DE ACCIÓN",-1),Te=I("img",{width:"20",style:{margin:"-2px 4px 0 0"},src:we},null,-1),Le={key:0},qe={key:1,style:{color:"#1677ff"}},Ye=["onClick"],$e=I("a",null,"Eliminar",-1),ze={class:"paginator"},Ze={__name:"PlanesDeAccion",setup(z){const S=JSON.parse(localStorage.getItem("role"));le();const b=m(null);m(null);const v=m(!1);m();const g=m(50),f=m([]),O=m(!1),N=m(0),h=m({page:1}),H=m("plans-action/list"),Z=m(1200),F=m(window.innerHeight-100),e=m(!1);m(null);const Y=m([{value:"si",label:"SI"},{value:"no",label:"NO"}]),j=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},...S[0].id!=2?[{title:"CENTRO TU EMPRESA",dataIndex:"centro_empresa",fixed:"left",width:150}]:[],...S[0].id!=2?[{title:"ASESOR",dataIndex:"asesor",fixed:"left",width:180}]:[],{title:"RUC",dataIndex:"ruc",width:100,fixed:"left",align:"center"},{title:"NOMBRE DEL EMPRENDEDOR O MYPE",fixed:"left",dataIndex:"emprendedor_nombres",width:170},{title:"REGIÓN DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_region",width:170},{title:"PROVINCIA DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_provincia",width:170},{title:"DISTRITO DEL EMPRENDEDOR O MYPE",dataIndex:"emprendedor_distrito",width:170},{title:"Genero",dataIndex:"genero",width:60,align:"center"},{title:"Tiene alguna Discapacidad ? (SI / NO)",dataIndex:"discapacidad",width:110,align:"center"},{title:"COMPONENTE 1",dataIndex:"component_1",width:190,align:"center"},{title:"COMPONENTE 2",dataIndex:"component_2",width:190,align:"center"},{title:"COMPONENTE 3",dataIndex:"component_3",width:190,align:"center"},{title:"NÚMERO DE SESIONES",dataIndex:"numberSessions",width:100,align:"center"},{title:"DÍA INICIO",dataIndex:"startDate",width:100,align:"center"},{title:"DÍA FIN",dataIndex:"endDate",width:100,align:"center"},{title:"TOTAL DE DÍAS",dataIndex:"totalDate",width:100,align:"center"},{title:"ACTA DE COMPROMISO",dataIndex:"acta",width:160,align:"center"},{title:"CULMINÓ EL PLAN Y ENVIÓ CORREO",dataIndex:"envioCorreo",width:160,align:"center"},{title:"FECHA ACTUALIZACIÓN",dataIndex:"updated_at",width:140,align:"center"},...S[0].id!=2?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],J=async o=>{try{const l=await q({url:`plans-action/delete/${o.id}`,method:"DELETE"});l.status==200&&(C.success(l.message),n())}catch{console.log("Failed to delete")}},K=o=>{b.value=o,e.value=!0},Q=o=>{v.value=o},A=async()=>{Ae("download/actions-plans",Q)},M=async(o,l,y)=>{const D={idPlan:l.id,type:y,value:o},P=await q({url:"plans-action/edit-yes-no",method:"PUT",data:D});P.status==200&&n(),P.status==400&&(C.warning(P.message),n())},$=()=>{F.value=window.innerHeight-315},B=()=>{b.value=null,e.value=!1,n()},k=ne({search:""}),X=()=>{n({search:k.search})},G=()=>{k.search||n()},t=o=>{h.value.page=o,n()},n=async o=>{try{O.value=!0;const l=h.value.page===1?"":h.value,y=o?{...l,...o}:l,D=await q({url:H.value,method:"GET",params:y});f.value=D.data,N.value=D.pagination.total,g.value=D.pagination.per_page}catch(l){console.error("Error de red:",l)}finally{O.value=!1}},c=he(()=>o=>(h.value.page-1)*g.value+o+1);return oe(()=>{n(),window.addEventListener("resize",$),$()}),(o,l)=>{const y=u("a-button"),D=u("a-col"),P=u("a-input"),ee=u("a-input-group"),ae=u("a-row"),a=u("a-select"),V=u("a-menu-item"),i=u("a-popconfirm"),ie=u("a-menu"),se=u("a-dropdown"),re=u("a-table"),de=u("a-tag"),ce=u("a-pagination"),ue=u("a-drawer");return d(),U("div",null,[Me,s(ae,{style:{margin:"1rem 0"}},{default:r(()=>[s(D,{xs:24,md:12,lg:18},{default:r(()=>[s(y,{onClick:l[0]||(l[0]=w=>e.value=!0),type:"primary"},{default:r(()=>[L("NUEVO")]),_:1}),s(y,{class:"btn-excel",loading:v.value,type:"primary",style:{"margin-left":".6rem"},onClick:A},{default:r(()=>[Te,L(" DESCARGAR ")]),_:1},8,["loading"])]),_:1}),s(D,{xs:24,md:12,lg:6},{default:r(()=>[s(ee,{compact:""},{default:r(()=>[s(P,{value:k.search,"onUpdate:value":l[1]||(l[1]=w=>k.search=w),style:{width:"calc(100% - 80px)"},onInput:G},null,8,["value"]),s(y,{type:"primary",disabled:k.search==="",onClick:X},{default:r(()=>[L("BUSCAR")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),s(re,{bordered:"",scroll:{x:Z.value,y:F.value},class:"table-actions",columns:j,"data-source":f.value,pagination:!1,loading:O.value,size:"small"},{bodyCell:r(({column:w,record:E,index:me})=>[w.dataIndex==="idx"?(d(),U(W,{key:0},[L(te(c.value(me)),1)],64)):p("",!0),w.dataIndex==="ruc"?(d(),U(W,{key:1},[E.ruc?(d(),U("span",Le,te(E.ruc),1)):(d(),U("span",qe,"En trámite"))],64)):p("",!0),w.dataIndex==="acta"?(d(),_(a,{key:2,value:E.actaCompromiso,"onUpdate:value":x=>E.actaCompromiso=x,style:{width:"70%"},options:Y.value,onChange:x=>M(x,E,"actaCompromiso")},null,8,["value","onUpdate:value","options","onChange"])):p("",!0),w.dataIndex==="envioCorreo"?(d(),_(a,{key:3,value:E.envioCorreo,"onUpdate:value":x=>E.envioCorreo=x,style:{width:"70%"},options:Y.value,onChange:x=>M(x,E,"envioCorreo")},null,8,["value","onUpdate:value","options","onChange"])):p("",!0),w.dataIndex=="actions"?(d(),_(se,{key:4,trigger:["click"]},{overlay:r(()=>[s(ie,null,{default:r(()=>[s(V,null,{default:r(()=>[I("a",{onClick:x=>K(E)},"Editar",8,Ye)]),_:2},1024),s(V,null,{default:r(()=>[s(i,{title:"¿Seguro de eliminar?",onConfirm:x=>J(E)},{icon:r(()=>[s(R(be),{style:{color:"red"}})]),default:r(()=>[$e]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:r(()=>[I("a",{class:"ant-dropdown-link",onClick:l[2]||(l[2]=De(()=>{},["prevent"]))},[s(y,{shape:"circle",icon:ye(R(xe)),size:"small"},null,8,["icon"])])]),_:2},1024)):p("",!0)]),_:1},8,["scroll","data-source","loading"]),I("div",ze,[I("span",null,[s(de,{color:"blue"},{default:r(()=>[I("b",null,te(N.value),1)]),_:1}),L("Registros")]),s(ce,{size:"small",total:N.value,pageSize:g.value,onChange:t,showSizeChanger:!1},null,8,["total","pageSize"])]),s(ue,{open:e.value,"onUpdate:open":l[3]||(l[3]=w=>e.value=w),title:"Agregar un nuevo Plan de Acción",placement:"right",width:"650"},{default:r(()=>[s(Ue,{onCloseDraw:B,info:b.value},null,8,["info"])]),_:1},8,["open"])])}}};export{Ze as default};
