import{_ as W}from"./TableComponent-13d32b98.js";import{l as y,r as o,a as Y,j as q,T as B,a5 as C,o as M,x as H,h as z,L as k,d as U,c as f,f as V,K as F,b as J,w as L,e as Z}from"./index-d49c1594.js";import{d as K}from"./downloadExcel-2ada0fea.js";import{_ as $}from"./FormComponent-0d191a5d.js";import{u as j}from"./selectes-18b1377c.js";import"./es-44a71c27.js";import"./icoexcel-1b303edf.js";import"./MoreOutlined-151df727.js";const Q={key:1,class:"f-20"},X={__name:"EditarAsesoria",props:["info"],emits:["closeDraw"],setup(P,{emit:w}){y.locale("es");const s=o({economicsector_id:{type:"iSelect",label:"SECTOR ECONÓMICO",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelect",label:"ACTIVIDAD COMERCIAL",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},component_id:{type:"iSelect",label:"COMPONENTE",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!1},theme_id:{type:"iSelect",label:"TEMA DEL COMPONENTE",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!0},modality_id:{type:"iSelect",label:"MODALIDAD DE ATENCIÓN",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},ruc:{type:"iNumber",label:"RUC",name:"ruc",message:"Escribir número de RUC",disabled:!1,maxlength:11,rules:[{validator:(i,r)=>{if(!r)return Promise.resolve();const d=r.toString();return d.length!==11?Promise.reject(new Error("El número debe tener exactamente 11 dígitos")):["10","15","20"].includes(d.substring(0,2))?Promise.resolve():Promise.reject(new Error("El RUC debe empezar con 10, 15 o 20"))},trigger:"change"}]},city_id:{type:"iSelect",label:"REGIÓN DEL NEGOCIO",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelect",label:"PROVINCIA DEL NEGOCIO",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"DISTRITO DEL NEGOCIO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},observations:{type:"iText",label:"NRO DE RESERVA / OBSERVACIONES",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}}),D=JSON.parse(localStorage.getItem("profile")),I=w,u=P,_=o(!0),h=o("ACTUALIZAR"),e=Y({}),p=o(!1),t=j(),l=o(null),a=o({city_id:[],province_id:[],district_id:[],modality_id:[],comercialactivity_id:[],isbic:[],typecapital_id:[],component_id:[],theme_id:[]}),g=i=>{console.log("handleInputEvent",i)},b=async i=>{i=="dateReception"&&(e.dateTramite&&(e.dateTramite=null),s.value.dateTramite.disabled=!1)},T=async i=>{i=="city_id"&&(await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1),i=="province_id"&&(await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1),i=="component_id"&&(await t.fetchComponentThemes(e.component_id),a.value.theme_id=t.componentThemes,e.theme_id=null,s.value.theme_id.disabled=!1)},N=async i=>{console.log("handleFocusSelect",i),i=="city_id"&&(await t.fetchCities(),e.city_id=null,e.province_id=null,e.district_id=null,a.value.province_id=[],a.value.city_id=t.cities),i=="province_id"&&(e.province_id=null,e.district_id=null,a.value.district_id=[]),i=="modality_id"&&(await t.fetchModalities(),a.value.modality_id=t.modalities),i=="regime_id"&&(await t.fetchRegimes(),a.value.regime_id=t.regimes),i=="economicsector_id"&&(await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors),i=="comercialactivity_id"&&(await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities),i=="notary_id"&&O(),i=="isbic"&&x(),i=="typecapital_id"&&(await t.fetchTypeCapital(),a.value.typecapital_id=t.typeCapital),i=="component_id"&&(await t.fetchComponents(),a.value.component_id=t.components)},R=i=>{},x=()=>{a.value.isbic=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}]},O=async()=>{try{const{data:i}=await V({url:"public/notaries-filters",method:"GET"}),r=i.map(d=>({value:d.id,name:d.name,city:d.city.name,province:d.province.name,district:d.district.name,address:d.address}));a.value.notary_id=r}catch(i){console.error("Error de red:",i)}},A=async()=>{p.value=!0;const i={economicsector_id:e.economicsector_id,comercialactivity_id:e.comercialactivity_id,component_id:e.component_id,theme_id:e.theme_id,modality_id:e.modality_id,ruc:e.ruc,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,observations:e.observations,updated_by:D.user_id};try{(await F({url:`advisory/update/${u.info.id}`,method:"PUT",data:i})).status===200&&(c(),I("closeDraw",!0))}catch(r){console.error("Error:",r);const d=document.getElementsByClassName("ant-drawer-body")[0];d&&(d.scrollTop=0)}finally{p.value=!1}},c=()=>{e.economicsector_id=null,e.comercialactivity_id=null,e.component_id=null,e.theme_id=null,e.modality_id=null,e.ruc=null,e.city_id=null,e.province_id=null,e.district_id=null,e.observations=null},v=async i=>{_.value=!0;try{i&&(await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors,e.economicsector_id=i.econimic_sector_id,await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities,e.comercialactivity_id=i.activity_comercial_id,await t.fetchComponents(),a.value.component_id=t.components,s.value.theme_id.disabled=!1,e.component_id=i.component_id,await t.fetchComponentThemes(e.component_id),a.value.theme_id=t.componentThemes,e.theme_id=i.theme_id,await t.fetchModalities(),a.value.modality_id=t.modalities,e.modality_id=i.modality_id,e.ruc=i.ruc,e.observations=i.observations,await t.fetchCities(),a.value.city_id=t.cities,e.city_id=i.city_id,await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1,e.province_id=i.province_id,await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1,e.district_id=i.district_id)}catch(r){console.error("Error al cargar la información:",r)}finally{_.value=!1}};return q(()=>{u.info&&v(u.info)}),B(()=>u.info,i=>{i&&v(i)}),C("formState",e),C("loadingState",p),(i,r)=>_.value?(M(),H(z(k),{key:0,style:{color:"#00a6db"}})):(M(),U("div",Q,[f($,{fields:s.value,options:a.value,btnSaveName:h.value,onHandleInputEvent:g,resetSelect:l.value,onHandleChangeSelect:T,onHandleFocusSelect:N,onHandleBlurSelect:R,onHandleChangeClock:b,onOnSubmit:A},null,8,["fields","options","btnSaveName","resetSelect"])]))}},ee={key:1,class:"f-20"},ie={__name:"EditarFormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(P,{emit:w}){y.locale("es");const s=o({economicsector_id:{type:"iSelect",label:"SECTOR ECONÓMICO",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelect",label:"ACTIVIDAD COMERCIAL",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},detailprocedure_id:{type:"iSelect",label:"DETALLE DEL TRÁMITE",name:"detailprocedure_id",required:!0,message:"Seleccionar el detalle del trámite",disabled:!1},modality_id:{type:"iSelect",label:"MODALIDAD DE ATENCIÓN",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!1},ruc:{type:"iNumber",label:"RUC",name:"ruc",message:"Escribir número de RUC",disabled:!1,maxlength:11,rules:[{validator:(c,v)=>{if(!v)return Promise.resolve();const i=v.toString();return i.length!==11?Promise.reject(new Error("El número debe tener exactamente 11 dígitos")):["10","15"].includes(i.substring(0,2))?Promise.resolve():Promise.reject(new Error("El RUC debe empezar con 10 o 15"))},trigger:"change"}]},city_id:{type:"iSelect",label:"REGIÓN DEL NEGOCIO",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelect",label:"PROVINCIA DEL NEGOCIO",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"DISTRITO DEL NEGOCIO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"DIRECCIÓN DEL NEGOCIO",name:"address",required:!1,message:"Seleccionar tipo de documento",disabled:!1}}),D=JSON.parse(localStorage.getItem("profile")),I=w,u=P,_=o(!0),h=o("ACTUALIZAR"),e=Y({}),p=o(!1),t=j(),l=o(null),a=o({city_id:[],province_id:[],district_id:[],modality_id:[],comercialactivity_id:[],isbic:[],typecapital_id:[],component_id:[],theme_id:[],detailprocedure_id:[]}),g=c=>{console.log("handleInputEvent",c)},b=async c=>{c=="dateReception"&&(e.dateTramite&&(e.dateTramite=null),s.value.dateTramite.disabled=!1)},T=async c=>{c=="city_id"&&(await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1),c=="province_id"&&(await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1)},N=async c=>{console.log("handleFocusSelect",c),c=="city_id"&&(await t.fetchCities(),e.city_id=null,e.province_id=null,e.district_id=null,a.value.province_id=[],a.value.city_id=t.cities),c=="province_id"&&(e.province_id=null,e.district_id=null,a.value.district_id=[]),c=="regime_id"&&(await t.fetchRegimes(),a.value.regime_id=t.regimes),c=="economicsector_id"&&(await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors),c=="comercialactivity_id"&&(await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities),c=="detailprocedure_id"&&(await t.fetchDetailProcedures(),a.value.detailprocedure_id=t.detailProcedures)},R=c=>{},x=async()=>{p.value=!0;const c={economicsector_id:e.economicsector_id,comercialactivity_id:e.comercialactivity_id,detailprocedure_id:e.detailprocedure_id,modality_id:e.modality_id,ruc:e.ruc,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,updated_by:D.user_id};try{(await F({url:`formalization/update-ruc-10/${u.info.id}`,method:"PUT",data:c})).status===200&&(O(),I("closeDraw",!0))}catch(v){console.error("Error:",v);const i=document.getElementsByClassName("ant-drawer-body")[0];i&&(i.scrollTop=0)}finally{p.value=!1}},O=()=>{e.economicsector_id=null,e.comercialactivity_id=null,e.detailprocedure_id=null,e.modality_id=null,e.ruc=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null},A=async c=>{_.value=!0;try{c&&(await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors,e.economicsector_id=c.econimic_sector_id,await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities,e.comercialactivity_id=c.activity_comercial_id,await t.fetchDetailProcedures(),a.value.detailprocedure_id=t.detailProcedures,e.detailprocedure_id=c.detailprocedure_id,await t.fetchModalities(),a.value.modality_id=t.modalities,e.modality_id=c.modality_id,e.ruc=c.ruc,e.address=c.address,await t.fetchCities(),a.value.city_id=t.cities,e.city_id=c.city_id,await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1,e.province_id=c.province_id,await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1,e.district_id=c.district_id)}catch(v){console.error("Error al cargar la información:",v)}finally{_.value=!1}};return q(()=>{u.info&&A(u.info)}),B(()=>u.info,c=>{c&&A(c)}),C("formState",e),C("loadingState",p),(c,v)=>_.value?(M(),H(z(k),{key:0,style:{color:"#00a6db"}})):(M(),U("div",ee,[f($,{fields:s.value,options:a.value,btnSaveName:h.value,onHandleInputEvent:g,resetSelect:l.value,onHandleChangeSelect:T,onHandleFocusSelect:N,onHandleBlurSelect:R,onHandleChangeClock:b,onOnSubmit:x},null,8,["fields","options","btnSaveName","resetSelect"])]))}},te={key:1,class:"f-20"},ae={__name:"EditarFormalizacionRUC20",props:["info"],emits:["closeDraw"],setup(P,{emit:w}){y.locale("es");const s=o({ruc:{type:"iNumber",label:"RUC",name:"ruc",message:"Escribir número de RUC",disabled:!1,maxlength:11,rules:[{validator:(i,r)=>{if(!r)return Promise.resolve();const d=r.toString();return d.length!==11?Promise.reject(new Error("El número debe tener exactamente 11 dígitos")):d.startsWith("20")?Promise.resolve():Promise.reject(new Error('El número de RUC debe comenzar con "20"'))},trigger:"change"}]},nameMype:{type:"iText",label:"NOMBRE EMPRESA",name:"nameMype",required:!0,message:"Escribir nombre de la empresa",disabled:!1},city_id:{type:"iSelect",label:"REGIÓN DEL NEGOCIO",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelect",label:"PROVINCIA DEL NEGOCIO",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"DISTRITO DEL NEGOCIO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"DIRECCIÓN DEL NEGOCIO",name:"address",required:!0,message:"Escribir la dirección del negocio",disabled:!1},modality_id:{type:"iSelect",label:"MODALIDAD DE ATENCIÓN",name:"modality_id",required:!0,message:"Seleccionar la modalidad",disabled:!1},regime_id:{type:"iSelect",label:"RÉGIMEN SOCIETARIO",name:"regime_id",required:!0,message:"Seleccionar el régimen societario",disabled:!1},economicsector_id:{type:"iSelect",label:"SECTOR ECONÓMICO",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},numbernotary:{type:"iNumber",label:"NÚM. SOLICITUD CONSTANCIA",name:"numbernotary",required:!0,message:"Escribir número de solicitud de constancia",disabled:!1,maxlength:8,rules:[{validator:(i,r)=>r?r.toString().length!==8?Promise.reject(new Error("El número debe tener exactamente 8 dígitos")):Promise.resolve():Promise.reject(new Error("El número de notaría es requerido")),trigger:"change"}]},comercialactivity_id:{type:"iSelect",label:"ACTIVIDAD COMERCIAL",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},notary_id:{type:"iSelectNotary",label:"NOTARÍA",name:"notary_id",required:!0,message:"Seleccionar una notaría",disabled:!1},dateReception:{type:"iDate",label:"FECHA DE RECEPCION PNTE",name:"dateReception",required:!0,disabled:!1,disabledDate:i=>!1},dateTramite:{type:"iDate",label:"FEC. TRÁMITE SID SUNARP-SUNAT",name:"dateTramite",required:!0,disabled:!1,disabledDate:i=>e.dateReception&&i&&y(i).isBefore(y(e.dateReception))},isbic:{type:"iSelect",label:"¿ES UNA SOCIEDAD BIC?",name:"isbic",required:!1,message:"Buscar BIC",disabled:!1},montocapital:{type:"iMoney",label:"MONTO DE CAPITAL SOCIAL",name:"montocapital",required:!1,message:"Escribir el Monto de capital social",disabled:!1},typecapital_id:{type:"iSelect",label:"TIPO DE APORTE DE CAPITAL",name:"typecapital_id",required:!1,message:"Seleccionar BIC",disabled:!1}}),D=JSON.parse(localStorage.getItem("profile")),I=w,u=P,_=o(!0),h=o("REGISTRAR"),e=Y({}),p=o(!1),t=j(),l=o(null),a=o({city_id:[],province_id:[],district_id:[],modality_id:[],comercialactivity_id:[],isbic:[],typecapital_id:[]}),g=i=>{console.log("handleInputEvent",i)},b=async i=>{i=="dateReception"&&(e.dateTramite&&(e.dateTramite=null),s.value.dateTramite.disabled=!1)},T=async i=>{i=="city_id"&&(await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1),i=="province_id"&&(await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1)},N=async i=>{console.log("handleFocusSelect",i),i=="city_id"&&(await t.fetchCities(),e.city_id=null,e.province_id=null,e.district_id=null,a.value.province_id=[],a.value.city_id=t.cities),i=="province_id"&&(e.province_id=null,e.district_id=null,a.value.district_id=[]),i=="modality_id"&&(await t.fetchModalities(),a.value.modality_id=t.modalities),i=="regime_id"&&(await t.fetchRegimes(),a.value.regime_id=t.regimes),i=="economicsector_id"&&(await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors),i=="comercialactivity_id"&&(await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities),i=="notary_id"&&O(),i=="isbic"&&x(),i=="typecapital_id"&&(await t.fetchTypeCapital(),a.value.typecapital_id=t.typeCapital)},R=i=>{},x=()=>{a.value.isbic=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}]},O=async()=>{try{const{data:i}=await V({url:"public/notaries-filters",method:"GET"}),r=i.map(d=>({value:d.id,name:d.name,city:d.city.name,province:d.province.name,district:d.district.name,address:d.address}));a.value.notary_id=r}catch(i){console.error("Error de red:",i)}},A=async()=>{p.value=!0;const i={ruc:e.ruc,nameMype:e.nameMype,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,modality_id:e.modality_id,regime_id:e.regime_id,economicsector_id:e.economicsector_id,numbernotary:e.numbernotary,comercialactivity_id:e.comercialactivity_id,notary_id:e.notary_id,dateReception:y(e.dateReception).format("YYYY-MM-DD"),dateTramite:y(e.dateTramite).format("YYYY-MM-DD"),isbic:e.isbic,montocapital:e.montocapital,typecapital_id:e.typecapital_id,user_id:e.user_id,people_id:e.people_id,dni:e.dni,userupdated_id:D.user_id};try{(await F({url:`formalization/update-ruc-20/${u.info.id}`,method:"PUT",data:i})).status===200&&(c(),I("closeDraw",!0))}catch(r){console.error("Error:",r);const d=document.getElementsByClassName("ant-drawer-body")[0];d&&(d.scrollTop=0)}finally{p.value=!1}},c=()=>{e.ruc=null,e.nameMype=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.modality_id=null,e.regime_id=null,e.economicsector_id=null,e.numbernotary=null,e.comercialactivity_id=null,e.notary_id=null,e.dateReception=null,e.dateTramite=null,e.isbic=null,e.montocapital=null,e.typecapital_id=null},v=async i=>{_.value=!0;try{i&&(e.ruc=i.ruc,e.nameMype=i.name_mype,await t.fetchCities(),a.value.city_id=t.cities,e.city_id=i.city_id,await t.fetchProvinces(e.city_id),a.value.province_id=t.provinces,s.value.province_id.disabled=!1,e.province_id=i.province_id,await t.fetchDistricts(e.province_id),a.value.district_id=t.districts,s.value.district_id.disabled=!1,e.district_id=i.district_id,e.address=i.address,await t.fetchModalities(),a.value.modality_id=t.modalities,e.modality_id=i.modality_id,await t.fetchRegimes(),a.value.regime_id=t.regimes,e.regime_id=i.regime_id,await t.fetchEconomicSectors(),a.value.economicsector_id=t.economicSectors,e.economicsector_id=i.econimic_sector_id,e.numbernotary=i.num_solicitud,await t.fetchComercialActivities(),a.value.comercialactivity_id=t.comercialActivities,e.comercialactivity_id=i.activity_comercial_id,O(),e.notary_id=i.notary_id,e.dateReception=i.date_reception?y(i.date_reception,"DD/MM/YYYY"):null,e.dateTramite=i.date_tramite?y(i.date_tramite,"DD/MM/YYYY"):null,e.isbic=i.bic,e.montocapital=i.monto_capital,await t.fetchTypeCapital(),a.value.typecapital_id=t.typeCapital,e.typecapital_id=i.typecapital_id)}catch(r){console.error("Error al cargar la información:",r)}finally{_.value=!1}};return q(()=>{u.info&&v(u.info)}),B(()=>u.info,i=>{i&&v(i)}),C("formState",e),C("loadingState",p),(i,r)=>_.value?(M(),H(z(k),{key:0,style:{color:"#00a6db"}})):(M(),U("div",te,[f($,{fields:s.value,options:a.value,btnSaveName:h.value,onHandleInputEvent:g,resetSelect:l.value,onHandleChangeSelect:T,onHandleFocusSelect:N,onHandleBlurSelect:R,onHandleChangeClock:b,onOnSubmit:A},null,8,["fields","options","btnSaveName","resetSelect"])]))}};const le={class:"advisory-table"},ce=["onClick"],ve={__name:"AsesoriasLista",setup(P){JSON.parse(localStorage.getItem("role"));const w=o([]),s=o(0),D=o(150),I=o(!1),u=o(!1),_=o("Asesorías"),h=o(!1),e=o(!1),p=o(!1),t=o(null),l=Y({year:y("2025","YYYY"),range:null,asesor:null,name:null,page:1,type:1}),a=o([]),g=o([]),b=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:80},{title:"FECHA",fixed:"left",dataIndex:"date",width:100,align:"center"},{title:"ASESOR",dataIndex:"asesor",width:200},{title:"SOLICITANTE APELLIDO PATERNO",dataIndex:"emp_lastname",width:150},{title:"SOLICITANTE APELLIDO MATERNO",dataIndex:"emp_middlename",width:150},{title:"SOLICITANTE NONBRE",dataIndex:"emp_name",width:150},{title:"TIPO DOCUMENTO",dataIndex:"emp_document_type",width:100,align:"center"},{title:"NÚMERO DE DOCUMENTO",dataIndex:"emp_document_number",align:"center",width:140},{title:"PAÍS",dataIndex:"emp_country",align:"center",width:120},{title:"FEC. NAC",dataIndex:"emp_birth",align:"center",width:120},{title:"EDAD",dataIndex:"emp_age",align:"center",width:80},{title:"GÉNERO",dataIndex:"emp_gender",width:80,align:"center"},{title:"DISCAPACIDAD",dataIndex:"emp_discapabilities",width:120,align:"center"},{title:"HIJOS",dataIndex:"emp_soons",width:80,align:"center"},{title:"CELULAR",dataIndex:"emp_phone",width:120,align:"center"},{title:"EMAIL",dataIndex:"emp_email",width:200},{title:"CIUDAD",dataIndex:"city",width:120,align:"center"},{title:"PROVINCIA",dataIndex:"province",width:140,align:"center"},{title:"DISTRITO",dataIndex:"district",width:140,align:"center"},{title:"RUC",dataIndex:"ruc",width:120,align:"center"}],T=[{title:"SECTOR ECONÓMICO",dataIndex:"econimic_service",width:120,align:"center"},{title:"ACTIVIDAD COMERCIAL",dataIndex:"activity_comercial",width:200},{title:"COMPONENTE",dataIndex:"component",width:140,align:"center"},{title:"TEMA",dataIndex:"theme",width:200},{title:"NODALIDAD",dataIndex:"modality",width:100,align:"center"},{title:"OBSERVACIONES",dataIndex:"observations",width:200},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],N=[{title:"SECTOR ECONÓMICO",dataIndex:"econimic_sector",width:120,align:"center"},{title:"ACTIVIDAD COMERCIAL",dataIndex:"activity_comercial",width:200},{title:"DETALLE DEL TRÁMITE",dataIndex:"detail_tramit",width:180},{title:"NODALIDAD",dataIndex:"modality",width:100,align:"center"},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],R=[{title:"SECTOR ECONÓMICO",dataIndex:"econimic_sector",width:120,align:"center"},{title:"ACTIVIDAD COMERCIAL",dataIndex:"activity_comercial",width:200},{title:"FECHA DE RECEPCIÓN",dataIndex:"date_reception",width:160,align:"center"},{title:"FECHA DE TRÁMITE",dataIndex:"date_tramite",width:160,align:"center"},{title:"TIPO DE RÉGIMEN",dataIndex:"type_regimen",width:150,align:"center"},{title:"BIC",dataIndex:"bic",width:50,align:"center"},{title:"NÚMERO DE SOLICITUD",dataIndex:"num_solicitud",width:160,align:"center"},{title:"NOTARÍA",dataIndex:"notaria",width:200},{title:"TIPO DE APORTE",dataIndex:"type_aporte",width:160,align:"center"},{title:"MONTO CAPITAL",dataIndex:"monto_capital",width:160,align:"center"},{title:"NODALIDAD",dataIndex:"modality",width:100,align:"center"},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],x=()=>{console.log("handleNew...")},O=async()=>{u.value=!0;try{const n={};l.year&&(n.year=y(l.year).format("YYYY")),l.range&&(n.dateStart=l.range[0].format("YYYY/MM/DD"),n.dateEnd=l.range[1].format("YYYY/MM/DD")),l.asesor&&(n.asesor=l.asesor),l.name&&(n.name=l.name);let m=null,E=null;l.type==1&&(m="download/asesories",E="Asesorías"),l.type==2&&(m="download/formalizations-ruc10",E="Formalizaciones 10"),l.type==3&&(m="download/formalizations-ruc20",E="Formalizaciones 20"),await K(m,E,n)}catch(n){console.error("Error de red:",n)}finally{u.value=!1}},A=async n=>{l.page=n,await r()},c=async n=>{n&&(l.page=1,await r())},v=n=>{t.value=n,l.type==1&&(h.value=!0),l.type==2&&(e.value=!0),l.type==3&&(p.value=!0)},i=()=>{l.type==1&&(g.value=[...b,...T],_.value="Asesorias"),l.type==2&&(g.value=[...b,...N],_.value="Formalizaciones RUC 10"),l.type==3&&(g.value=[...b,...R],_.value="Formalizaciones RUC 20")},r=async()=>{I.value=!0,i();try{const n={page:l.page};l.year&&(n.year=y(l.year).format("YYYY")),l.range&&(n.dateStart=l.range[0].format("YYYY/MM/DD"),n.dateEnd=l.range[1].format("YYYY/MM/DD")),l.asesor&&(n.asesor=l.asesor),l.name&&(n.name=l.name);let m=null;l.type==1&&(m="historial/advisories/filters"),l.type==2&&(m="historial/formalizations-10/filters"),l.type==3&&(m="historial/formalizations-20/filters");const E=await F({url:m,method:"GET",params:n});w.value=E.data.data,s.value=E.data.total,D.value=E.data.per_page}catch(n){console.error("Error de red:",n)}finally{I.value=!1}},d=async()=>{try{const n=await V({url:"select/asesores-report",method:"GET"});n.status==200&&(a.value=n.data)}catch{console.log("Failed to delete")}};return q(async()=>{await r(),await d()}),C("search",l),C("loading",I),C("loadingFile",u),(n,m)=>{const E=J("a-menu-item"),G=J("a-drawer");return M(),U("div",le,[f(W,{title:`REPORTE GENERAL - ${_.value}`,new:!1,textNuevo:"NUEVO EVENTO",placeholderSearch:"Buscar",tipoformalizacion:!0,searchYear:!0,rangeDate:!0,columns:g.value,titleSearch:"NÚMERO DE DOCUMENTO",pageSize:D.value,nameTotal:_.value,asesoresList:a.value,dataSource:w.value,total:s.value,onHandleNew:x,onHandleDownloadExcel:O,onHandleSearch:c,onHandlePaginator:A},{"custom-options":L(({record:S})=>[f(E,null,{default:L(()=>[Z("a",{onClick:re=>v(S)},"Editar",8,ce)]),_:2},1024)]),_:1},8,["title","columns","pageSize","nameTotal","asesoresList","dataSource","total"]),f(G,{width:"500",title:"EDITAR ASESORÍA",open:h.value,"onUpdate:open":m[1]||(m[1]=S=>h.value=S),placement:"right"},{default:L(()=>[f(X,{info:t.value,onCloseDraw:m[0]||(m[0]=S=>(h.value=!1,r()))},null,8,["info"])]),_:1},8,["open"]),f(G,{width:"550",title:"Editar Formalización RUC 10",open:e.value,"onUpdate:open":m[3]||(m[3]=S=>e.value=S),placement:"right"},{default:L(()=>[f(ie,{info:t.value,onCloseDraw:m[2]||(m[2]=S=>(e.value=!1,r()))},null,8,["info"])]),_:1},8,["open"]),f(G,{width:"550",title:"Editar Formalización RUC 20",open:p.value,"onUpdate:open":m[5]||(m[5]=S=>p.value=S),placement:"right"},{default:L(()=>[f(ae,{info:t.value,onCloseDraw:m[4]||(m[4]=S=>(p.value=!1,r()))},null,8,["info"])]),_:1},8,["open"])])}}};export{ve as default};
