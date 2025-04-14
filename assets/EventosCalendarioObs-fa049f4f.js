import{c as i,A as me,l as v,r as d,a as ae,j as le,U as fe,a6 as K,o as f,d as _,N as _e,p as ye,q as he,b as O,e as t,h as y,w as S,t as c,L as be,f as ee,i as F,F as ge,s as Ee,v as H,ah as Oe,x as Se,y as C,z as Ce,B as De}from"./index-f2399586.js";import{l as Ae,C as ke}from"./localizedFormat-06292c4d.js";import"./es-b8c7d40c.js";import{u as ne}from"./selectes-c6865bb6.js";import{_ as Me}from"./DrawResultados-2f01968d.js";import{_ as Re}from"./FormComponent-c0246b6d.js";import{H as we}from"./HomeOutlined-2fa1862f.js";import{E as Ne}from"./EnvironmentOutlined-ebb264cc.js";import{T as Te}from"./TeamOutlined-a1d0b86a.js";import{U as Ie}from"./UserOutlined-e67d1120.js";import"./quill.snow-9dde125c.js";var xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"};const Le=xe;function te(h){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?Object(arguments[u]):{},p=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(s).filter(function(b){return Object.getOwnPropertyDescriptor(s,b).enumerable}))),p.forEach(function(b){He(h,b,s[b])})}return h}function He(h,u,s){return u in h?Object.defineProperty(h,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):h[u]=s,h}var z=function(u,s){var p=te({},u,s.attrs);return i(me,te({},p,{icon:Le}),null)};z.displayName="FormOutlined";z.inheritAttrs=!1;const Ue=z;const Ye={class:"f-20"},Ve={__name:"EventosObservaciones",props:["info"],emits:["closeDraw"],setup(h,{emit:u}){v.locale("es");const s=d({obs_id:{type:"iSelect",label:"TIPO DE OBSERVACIÓN",name:"obs_id",required:!0,message:"Seleccionar una opción",disabled:!1}});JSON.parse(localStorage.getItem("profile"));const p=u,b=h,N=d("ACTUALIZAR"),o=ae({}),k=d(!1);ne();const M=d(null),D=d({obs_id:[]}),T=l=>{console.log("handleInputEvent",l)},A=async l=>{l=="dateReception"&&(o.dateTramite&&(o.dateTramite=null),s.value.dateTramite.disabled=!1)},r=async l=>{l=="obs_id"&&(delete s.value.rescheduled,delete s.value.date,delete s.value.hours,delete s.value.canceled,o.obs_id===1?s.value.canceled={type:"iTextArea",label:"ESCRIBIR MOTIVO DE LA CANCELACIÓN",name:"canceled",required:!0,message:"Escribir el motivo",rows:5}:o.obs_id===2&&(s.value.date={type:"iDatePicker",label:"SELECCIONAR FECHA DEL EVENTO",name:"date",message:"Seleccionar una opción"},s.value.hours={type:"iHour",label:"SELECCIONAR HORA DEL EVENTO",name:"hours",message:"Seleccionar la hora",required:!1},s.value.rescheduled={type:"iTextArea",label:"ESCRIBIR MOTIVO DE LA REPROGRAMACIÓN",name:"rescheduled",required:!0,message:"Escribir el motivo",rows:5}))},I=async l=>{l=="obs_id"&&x()},U=l=>{},x=()=>{D.value.obs_id=[{value:1,label:"CANCELADO"},{value:2,label:"REPROGRAMADO"}]},Y=async()=>{let l=null;k.value=!0,o.obs_id===1?l={canceled:o.canceled,dateStart:o.dateStart,dateEnd:o.dateEnd,start:o.start,end:o.end}:o.obs_id===2&&(l={canceled:o.canceled,dateStart:v(o.date.start).format("YYYY-MM-DD"),dateEnd:v(o.date.end).format("YYYY-MM-DD"),...o.hours?{start:v(o.hours[0]).format("HH:mm"),end:v(o.hours[1]).format("HH:mm")}:{start:null,end:null},rescheduled:o.rescheduled});try{(await _e({url:`event/update-obs/${b.info.id}`,method:"PUT",data:l})).status===200&&p("closeDraw",!0)}catch(E){console.error("Error:",E);const w=document.getElementsByClassName("ant-drawer-body")[0];w&&(w.scrollTop=0)}finally{k.value=!1}},L=()=>{o.obs_id=null,s.value={obs_id:{type:"iSelect",label:"TIPO DE OBSERVACIÓN",name:"obs_id",required:!0,message:"Seleccionar una opción",disabled:!1}}},R=async l=>{l&&(console.log("set_info",l),x(),l.canceled?o.obs_id=1:l.rescheduled?o.obs_id=2:o.obs_id=null,r("obs_id"),o.canceled=l.canceled??null,o.date={start:v(l.dateStart).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),end:v(l.dateEnd).format("YYYY-MM-DDTHH:mm:ss.SSSZ")},l.start&&l.end?o.hours=[v(l.start,"HH:mm"),v(l.end,"HH:mm")]:o.hours=[],o.rescheduled=l.rescheduled??null)};return le(()=>{b.info?R(b.info):L()}),fe(()=>b.info,l=>{l?R(l):L()}),K("formState",o),K("loadingState",k),(l,E)=>(f(),_("div",Ye,[i(Re,{fields:s.value,options:D.value,btnSaveName:N.value,onHandleInputEvent:T,resetSelect:M.value,onHandleChangeSelect:r,onHandleFocusSelect:I,onHandleBlurSelect:U,onHandleChangeClock:A,onOnSubmit:Y},null,8,["fields","options","btnSaveName","resetSelect"])]))}};const Fe={class:"container-events"},Pe={class:"filter-calendar-25"},ze={class:"filter-calendar-25-opts"},Be={class:"filter-calendar-check"},$e={class:"schedule"},Ge={class:"schedule-header"},qe={class:"schedule-date"},je={key:0,class:"event-time"},Ze={key:1,class:"event-time"},Je={class:"event-hour-2"},Qe={class:"ugger-options"},We={class:"title"},Xe={class:"event-description"},Ke=["onClick"],et={class:"modal-calendar-detail"},tt={style:{"line-height":"1.3","margin-bottom":".5rem","margin-top":"0"}},at=["innerHTML"],lt={key:0},nt={style:{"margin-left":".5rem"}},st={key:1},ot={style:{"margin-left":".5rem"}},rt={key:2},it={style:{"margin-left":".5rem"}},dt={style:{"margin-left":".5rem"}},ut={key:0},ct={style:{"margin-left":".5rem"}},vt={key:3},pt={style:{"margin-left":".5rem"}},mt={key:4},ft=["href"],_t={key:5},yt=["innerHTML"],ht={style:{"font-size":"13px","margin-bottom":"5px"}},bt={style:{margin:"0"}},gt={class:"filter-modal"},Et={style:{display:"flex","flex-direction":"column"}},It={__name:"EventosCalendarioObs",setup(h){v.locale("es"),v.extend(ye),v.extend(Ae);const u=ne();u.$patch({cities:u.cities}),u.fetchCities();const s=ae({value1:["UGO","UGSE"]}),p=d(null),b=he(be,{style:{fontSize:"24px"},spin:!0}),N=d(null),o=d(null),k=d(null),M=d(!1),D=d(!1),T=d(!1),A=d(null);d(!1);const r=d(null),I=d(!1),U=d(!1),x=d(null),Y=d(null),L=d(new Date),R=d([]),l=d(null),E=d([]),w=d(!1),B=a=>a.canceled?N.value="#ff78755c":a.rescheduled?N.value="#f7b4002b":N.value="#fff",se=a=>{M.value=!0,k.value=a},oe=a=>{const e={id:a.id,resultado:a.resultado};o.value=e,D.value=!0},re=a=>{r.value=a,I.value=!0},$=[{label:"UGO",value:"UGO"},{label:"UGSE",value:"UGSE"}],G=(a,e)=>{const m=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(m)},ie=a=>{if(Array.isArray(a)&&a.length>0&&a[0].id){const e=a[0].id;x.value=e,l.value!==e&&(l.value=e,console.log("onPageChange",a),j(e))}else console.warn("⚠️ No se pudo detectar el cambio de mes.")},P=a=>({1:"#808080",red:"#f06464",3:"#fd9d0f",4:"#ffb74d",5:"#00b522",blue:"#1546b0",7:"#9c27b0",8:"#ff07d8"})[a],de=a=>({1:"Despega tu empresa",2:"Ferias",3:"Fortalece tu Mercado",4:"Mujer Produce",5:"Potencia tu Empresa",6:"Ruta Digital",7:"Otros UGSE",8:"Difusión UGO"})[a],ue=a=>{if(!Array.isArray(a)||a.length===0)return"";const e=v(a[0]).locale("es").format("DD [de] MMMM"),m=a.length>1?v(a[a.length-1]).locale("es").format("DD [de] MMMM"):null;return m?`Desde: ${e} Hasta: ${m}`:`${e}`},q=async()=>{T.value=!0,await j(x.value),await V()},V=async a=>{a&&(A.value=a.id),w.value=!0;const e={},m=v().format("YYYY-MM-DD");s.value1&&(e.office=s.value1),p.value&&(e.city_id=p.value),A.value?e.dateSelected=A.value:e.dateSelected=a?a.id:m,Y.value=A.value?v(A.value).format("dddd D [de] MMMM [de] YYYY"):v(m).format("dddd D [de] MMMM [de] YYYY");try{E.value=[];const g=await ee({url:"pnte/events-day",method:"GET",params:e});g.data&&Array.isArray(g.data)?E.value=g.data:console.warn("⚠️ Respuesta inesperada de la API:",g)}catch(g){console.error("❌ Error al obtener eventos:",g)}finally{w.value=!1,T.value=!1}},j=async a=>{const e={};p.value&&(e.city_id=p.value),s.value1&&(e.office=s.value1),a&&(e.year_month=a);try{const m=await ee({url:"pnte/dots",method:"GET",params:e});R.value=[],m&&Array.isArray(m)?R.value=[{key:"today",highlight:"",dates:[new Date]},...m]:console.warn("⚠️ Respuesta de API inesperada:",m)}catch(m){console.error("❌ Error al obtener eventos:",m)}};return le(async()=>{await V()}),(a,e)=>{const m=O("VCalendar"),g=O("a-checkbox-group"),Z=O("a-select"),J=O("a-button"),ce=O("a-empty"),ve=O("a-spin"),Q=O("a-modal"),W=O("a-drawer");return f(),_("section",Fe,[e[23]||(e[23]=t("h1",{class:"title-pc"},"ADMIN - CALENDARIO 2025",-1)),t("div",null,[i(m,{ref:"calendar",modelValue:L.value,"onUpdate:modelValue":e[0]||(e[0]=n=>L.value=n),attributes:R.value,expanded:"",locale:"es",transparent:"",borderless:"","onUpdate:pages":ie,onDayclick:V},null,8,["modelValue","attributes"]),t("div",Pe,[t("div",null,[e[12]||(e[12]=t("h4",{style:{display:"block"}},"FILTRAR POR",-1)),t("div",ze,[t("div",Be,[i(g,{value:s.value1,"onUpdate:value":e[1]||(e[1]=n=>s.value1=n),name:"checkboxgroup",options:$},null,8,["value"])]),i(Z,{style:{width:"100%"},value:p.value,"onUpdate:value":e[2]||(e[2]=n=>p.value=n),options:y(u).cities,"show-search":"","filter-option":G,placeholder:"SELECCIONAR REGIÓN"},null,8,["value","options"]),i(J,{class:"btn-modal-filter",type:"primary",onClick:q,loading:T.value},{default:S(()=>e[11]||(e[11]=[F("BUSCAR")])),_:1},8,["loading"])])])])]),t("div",$e,[t("div",Ge,[e[13]||(e[13]=t("h4",null,"EVENTOS",-1)),t("span",qe,c(Y.value),1)]),i(ve,{indicator:y(b),spinning:w.value},{default:S(()=>[E.value.length>0?(f(!0),_(ge,{key:0},Ee(E.value,(n,pe)=>(f(),_("div",{key:pe,class:"event",style:H({backgroundColor:B(n)})},[n.start?(f(),_("div",Ze,[t("div",null,c(n.start),1),e[15]||(e[15]=t("br",null,null,-1)),t("div",Je,c(n.end),1)])):(f(),_("div",je,e[14]||(e[14]=[t("div",{style:{"text-align":"center","line-height":"1.2"}},"Todo el día",-1)]))),t("div",{class:"schedule-details",style:H({"border-color":P(n.dot)})},[t("small",{class:"schedule-tag",style:H({"background-color":P(n.dot)})},c(n.id_pnte),5),t("div",Qe,[t("span",null,[i(y(Oe),{onClick:X=>se(n)},null,8,["onClick"])]),t("span",null,[i(y(Ue),{onClick:X=>oe(n)},null,8,["onClick"])])]),t("div",We,c(n.title),1),t("div",Xe,[F(c(n.descriptionparse)+" ",1),t("span",{onClick:X=>re(n),style:{color:"#2196f3",cursor:"pointer"}},"Ver más",8,Ke)])],4)],4))),128)):(f(),Se(ce,{key:1,class:"no-events"},{description:S(()=>e[16]||(e[16]=[t("span",{class:"no-events-span"},"No hay eventos para este día",-1)])),_:1}))]),_:1},8,["indicator","spinning"])]),i(Q,{open:I.value,"onUpdate:open":e[3]||(e[3]=n=>I.value=n),title:"",footer:""},{default:S(()=>[t("div",et,[t("div",null,[t("h3",tt,c(r.value.titleComplete),1),t("small",{class:"modal-calendar-tag",style:H({"background-color":P(r.value.id_pnte)})},c(de(r.value.id_pnte)),5)]),t("div",{style:{"margin-bottom":"1rem",color:"#6c6c6c"},class:"html-format",innerHTML:r.value.descripionAll},null,8,at),r.value.organiza?(f(),_("div",lt,[i(y(we)),t("span",nt,c(r.value.organiza),1)])):C("",!0),r.value.region?(f(),_("div",st,[i(y(Ne)),t("span",ot,c(r.value.region),1)])):C("",!0),r.value.numMypes?(f(),_("div",rt,[t("span",null,[i(y(Te))]),t("span",it,c(r.value.numMypes),1)])):C("",!0),t("div",null,[t("div",null,[i(y(Ce)),t("span",dt,c(ue(r.value.dates)),1)]),r.value.start?(f(),_("div",ut,[i(y(De)),t("span",ct,c(r.value.start),1),e[17]||(e[17]=F(" - ")),t("span",null,c(r.value.end),1)])):C("",!0)]),r.value.nameUser?(f(),_("div",vt,[i(y(Ie)),t("span",pt,[F(c(r.value.nameUser)+" ",1),e[18]||(e[18]=t("small",null,"(Representante)",-1))])])):C("",!0),r.value.link?(f(),_("div",mt,[i(y(ke)),t("a",{style:{"margin-left":".5rem"},href:r.value.link,target:"_blank",rel:"noopener noreferrer"},"Link del evento",8,ft)])):C("",!0),r.value.resultado?(f(),_("div",_t,[e[19]||(e[19]=t("h3",null,"Resultados",-1)),t("div",{style:{color:"#6c6c6c"},class:"html-format",innerHTML:r.value.resultado},null,8,yt)])):C("",!0)]),r.value.canceled||r.value.rescheduled?(f(),_("div",{key:0,style:H({backgroundColor:B(r.value),padding:"5px",marginTop:"10px",borderRadius:"4px"})},[t("h3",ht,c(r.value.canceled?"EVENTO CANCELADO":"EVENTO REPROGRAMADO"),1),t("p",bt,c(r.value.canceled?r.value.canceled:r.value.rescheduled),1)],4)):C("",!0)]),_:1},8,["open"]),i(Q,{open:U.value,"onUpdate:open":e[6]||(e[6]=n=>U.value=n),title:"",footer:"",width:"350px"},{default:S(()=>[t("div",gt,[e[22]||(e[22]=t("h3",null,"FILTRAR POR:",-1)),i(g,{value:s.value1,"onUpdate:value":e[4]||(e[4]=n=>s.value1=n),name:"checkboxgroup",options:$},null,8,["value"]),t("div",Et,[e[20]||(e[20]=t("label",{style:{margin:"10px 0 6px 0","font-size":"13px"}},"REGIÓN",-1)),i(Z,{allowClear:!0,value:p.value,"onUpdate:value":e[5]||(e[5]=n=>p.value=n),options:y(u).cities,"show-search":"","filter-option":G},null,8,["value","options"])]),t("pre",null,c(s.value1),1),i(J,{class:"btn-modal-filter",type:"primary",onClick:q},{default:S(()=>e[21]||(e[21]=[t("b",{style:{"font-weight":"500"}},"BUSCAR",-1)])),_:1})])]),_:1},8,["open"]),i(W,{open:D.value,"onUpdate:open":e[8]||(e[8]=n=>D.value=n),title:"RESULTADOS",placement:"right",width:"550"},{default:S(()=>[i(Me,{dataRow:o.value,onCloseDraw:e[7]||(e[7]=n=>{D.value=!1})},null,8,["dataRow"])]),_:1},8,["open"]),i(W,{open:M.value,"onUpdate:open":e[10]||(e[10]=n=>M.value=n),title:"OBSERVACIONES",placement:"right",width:"550"},{default:S(()=>[i(Ve,{info:k.value,onCloseDraw:e[9]||(e[9]=n=>{M.value=!1,V()})},null,8,["info"])]),_:1},8,["open"])])}}};export{It as default};
