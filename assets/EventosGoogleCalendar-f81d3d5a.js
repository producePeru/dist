import{l as X,p as ee,q as _,s as te,a as oe,r as i,v as ae,j as le,b as g,o as u,d as c,e as t,c as s,h as m,w as k,t as r,L as se,f as $,i as O,F as ne,x as re,y as z,z as ie,B as M,D as de,E as ue}from"./index-2159adcd.js";import"./es-39366bd6.js";import{u as ce}from"./selectes-02852a28.js";import{H as pe}from"./HomeOutlined-592250d0.js";import{T as ve}from"./TeamOutlined-a2800ec7.js";import{C as me}from"./ChromeOutlined-077c3230.js";import{E as fe}from"./EnvironmentOutlined-5f224f85.js";import{U as ye}from"./UserOutlined-1629978f.js";var j={exports:{}};(function(N,b){(function(d,p){N.exports=p()})(X,function(){var d={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(p,S,D){var f=S.prototype,a=f.format;D.en.formats=d,f.format=function(h){h===void 0&&(h="YYYY-MM-DDTHH:mm:ssZ");var C=this.$locale().formats,E=function(x,Y){return x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(T,U,y){var L=y&&y.toUpperCase();return U||Y[y]||d[y]||Y[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,A,w){return A||w.slice(1)})})}(h,C===void 0?{}:C);return a.call(this,E)}}})})(j);var _e=j.exports;const he=ee(_e);const ge={class:"container-events"},Me={class:"filter-calendar-25"},be={class:"filter-calendar-25-opts"},ke={class:"filter-calendar-check"},De={class:"schedule"},Ce={class:"schedule-header"},Ye={class:"schedule-date"},Le={key:0,class:"event-time"},Ee={key:1,class:"event-time"},xe={class:"event-hour-2"},Ue={class:"title"},Ae={class:"event-description"},we=["onClick"],Oe={class:"modal-calendar-detail"},Se={style:{"line-height":"1.3","margin-bottom":".5rem","margin-top":"0"}},Te=["innerHTML"],Re={key:0},Ge={style:{"margin-left":".5rem"}},ze={key:1},Ne={style:{"margin-left":".5rem"}},Fe={key:2},Ve={style:{"margin-left":".5rem"}},He={style:{"margin-left":".5rem"}},Be={key:0},Ie={style:{"margin-left":".5rem"}},Pe={key:3},$e={style:{"margin-left":".5rem"}},je={key:4},qe=["href"],Ze={key:5},Je=["innerHTML"],Ke={class:"filter-modal"},Qe={style:{display:"flex","flex-direction":"column"}},rt={__name:"EventosGoogleCalendar",setup(N){_.locale("es"),_.extend(te),_.extend(he);const b=ce();b.$patch({cities:b.cities}),b.fetchCities();const d=oe({value1:["UGO","UGSE"]}),p=i(null),S=ae(se,{style:{fontSize:"24px"},spin:!0}),D=i(!1),f=i(null);i(!1);const a=i(null),h=i(!1),C=i(!1),E=i(null),x=i(null),Y=i(new Date),T=i([]),U=i(null),y=i([]),L=i(!1),F=o=>{a.value=o,h.value=!0},A=[{label:"UGO",value:"UGO"},{label:"UGSE",value:"UGSE"}],w=(o,e)=>{const n=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(n)},q=o=>{if(Array.isArray(o)&&o.length>0&&o[0].id){const e=o[0].id;E.value=e,U.value!==e&&(U.value=e,console.log("onPageChange",o),H(e))}else console.warn("⚠️ No se pudo detectar el cambio de mes.")},R=o=>({1:"#808080",red:"#f06464",3:"#fd9d0f",4:"#ffb74d",5:"#00b522",blue:"#1546b0",7:"#9c27b0",8:"#ff07d8"})[o],Z=o=>({1:"Despega tu empresa",2:"Ferias",3:"Fortalece tu Mercado",4:"Mujer Produce",5:"Potencia tu Empresa",6:"Ruta Digital",7:"Otros UGSE",8:"Difusión UGO"})[o],J=o=>{if(!Array.isArray(o)||o.length===0)return"";const e=_(o[0]).locale("es").format("DD [de] MMMM"),n=o.length>1?_(o[o.length-1]).locale("es").format("DD [de] MMMM"):null;return n?`Desde: ${e} Hasta: ${n}`:`${e}`},V=async()=>{D.value=!0,await H(E.value),await G()},G=async o=>{o&&(f.value=o.id),L.value=!0;const e={},n=_().format("YYYY-MM-DD");d.value1&&(e.office=d.value1),p.value&&(e.city_id=p.value),f.value?e.dateSelected=f.value:e.dateSelected=o?o.id:n,x.value=f.value?_(f.value).format("dddd D [de] MMMM [de] YYYY"):_(n).format("dddd D [de] MMMM [de] YYYY");try{const v=await $({url:"pnte/events-day",method:"GET",params:e});v.data&&Array.isArray(v.data)?y.value=v.data:console.warn("⚠️ Respuesta inesperada de la API:",v)}catch(v){console.error("❌ Error al obtener eventos:",v)}finally{L.value=!1,D.value=!1}},H=async o=>{const e={};p.value&&(e.city_id=p.value),d.value1&&(e.office=d.value1),o&&(e.year_month=o);try{const n=await $({url:"pnte/dots",method:"GET",params:e});n&&Array.isArray(n)?T.value=[{key:"today",highlight:"",dates:[new Date]},...n]:console.warn("⚠️ Respuesta de API inesperada:",n)}catch(n){console.error("❌ Error al obtener eventos:",n)}};return le(async()=>{await G()}),(o,e)=>{const n=g("VCalendar"),v=g("a-checkbox-group"),B=g("a-select"),I=g("a-button"),K=g("a-empty"),Q=g("a-spin"),P=g("a-modal");return u(),c("section",ge,[e[19]||(e[19]=t("h1",{class:"title-pc"},"CALENDARIO 2025",-1)),t("div",null,[s(n,{ref:"calendar",modelValue:Y.value,"onUpdate:modelValue":e[0]||(e[0]=l=>Y.value=l),attributes:T.value,expanded:"",locale:"es",transparent:"",borderless:"","onUpdate:pages":q,onDayclick:G},null,8,["modelValue","attributes"]),t("div",Me,[t("div",null,[e[8]||(e[8]=t("h4",{style:{display:"block"}},"BUSCAR POR",-1)),t("div",be,[t("div",ke,[s(v,{value:d.value1,"onUpdate:value":e[1]||(e[1]=l=>d.value1=l),name:"checkboxgroup",options:A},null,8,["value"])]),s(B,{style:{width:"100%"},value:p.value,"onUpdate:value":e[2]||(e[2]=l=>p.value=l),options:m(b).cities,"show-search":"","filter-option":w,placeholder:"SELECCIONAR REGIÓN"},null,8,["value","options"]),s(I,{class:"btn-modal-filter",type:"primary",onClick:V,loading:D.value},{default:k(()=>e[7]||(e[7]=[O("BUSCAR")])),_:1},8,["loading"])])])])]),t("div",De,[t("div",Ce,[e[9]||(e[9]=t("h4",null,"EVENTOS",-1)),t("span",Ye,r(x.value),1)]),s(Q,{indicator:m(S),spinning:L.value},{default:k(()=>[y.value.length>0?(u(!0),c(ne,{key:0},re(y.value,(l,W)=>(u(),c("div",{key:W,class:"event"},[l.start?(u(),c("div",Ee,[t("div",null,r(l.start),1),e[11]||(e[11]=t("br",null,null,-1)),t("div",xe,r(l.end),1)])):(u(),c("div",Le,e[10]||(e[10]=[t("div",{style:{"text-align":"center","line-height":"1.2"}},"Todo el día",-1)]))),t("div",{class:"schedule-details",style:z({"border-color":R(l.dot)})},[t("small",{class:"schedule-tag",style:z({"background-color":R(l.dot)})},r(l.id_pnte),5),t("div",Ue,r(l.title),1),t("div",Ae,[O(r(l.descriptionparse)+" ",1),t("span",{onClick:We=>F(l),style:{color:"#2196f3",cursor:"pointer"}},"Ver más",8,we)])],4)]))),128)):(u(),ie(K,{key:1,class:"no-events"},{description:k(()=>e[12]||(e[12]=[t("span",{class:"no-events-span"},"No hay eventos para este día",-1)])),_:1}))]),_:1},8,["indicator","spinning"])]),s(P,{open:h.value,"onUpdate:open":e[3]||(e[3]=l=>h.value=l),title:"",footer:""},{default:k(()=>[t("div",Oe,[t("div",null,[t("h3",Se,r(a.value.titleComplete),1),t("small",{class:"modal-calendar-tag",style:z({"background-color":R(a.value.id_pnte)})},r(Z(a.value.id_pnte)),5)]),t("div",{style:{"margin-bottom":"1rem",color:"#6c6c6c"},class:"html-format",innerHTML:a.value.descripionAll},null,8,Te),a.value.organiza?(u(),c("div",Re,[s(m(pe)),t("span",Ge,r(a.value.organiza),1)])):M("",!0),a.value.region?(u(),c("div",ze,[s(m(fe)),t("span",Ne,r(a.value.region),1)])):M("",!0),a.value.numMypes?(u(),c("div",Fe,[t("span",null,[s(m(ve))]),t("span",Ve,r(a.value.numMypes),1)])):M("",!0),t("div",null,[t("div",null,[s(m(de)),t("span",He,r(J(a.value.dates)),1)]),a.value.start?(u(),c("div",Be,[s(m(ue)),t("span",Ie,r(a.value.start),1),e[13]||(e[13]=O(" - ")),t("span",null,r(a.value.end),1)])):M("",!0)]),a.value.nameUser?(u(),c("div",Pe,[s(m(ye)),t("span",$e,[O(r(a.value.nameUser)+" ",1),e[14]||(e[14]=t("small",null,"(Representante)",-1))])])):M("",!0),a.value.link?(u(),c("div",je,[s(m(me)),t("a",{style:{"margin-left":".5rem"},href:a.value.link,target:"_blank",rel:"noopener noreferrer"},"Link del evento",8,qe)])):M("",!0),a.value.resultado?(u(),c("div",Ze,[e[15]||(e[15]=t("h3",null,"Resultados",-1)),t("div",{style:{color:"#6c6c6c"},class:"html-format",innerHTML:a.value.resultado},null,8,Je)])):M("",!0)])]),_:1},8,["open"]),s(P,{open:C.value,"onUpdate:open":e[6]||(e[6]=l=>C.value=l),title:"",footer:"",width:"350px"},{default:k(()=>[t("div",Ke,[e[18]||(e[18]=t("h3",null,"FILTRAR POR:",-1)),s(v,{value:d.value1,"onUpdate:value":e[4]||(e[4]=l=>d.value1=l),name:"checkboxgroup",options:A},null,8,["value"]),t("div",Qe,[e[16]||(e[16]=t("label",{style:{margin:"10px 0 6px 0","font-size":"13px"}},"REGIÓN",-1)),s(B,{allowClear:!0,value:p.value,"onUpdate:value":e[5]||(e[5]=l=>p.value=l),options:m(b).cities,"show-search":"","filter-option":w},null,8,["value","options"])]),t("pre",null,r(d.value1),1),s(I,{class:"btn-modal-filter",type:"primary",onClick:V},{default:k(()=>e[17]||(e[17]=[t("b",{style:{"font-weight":"500"}},"BUSCAR",-1)])),_:1})])]),_:1},8,["open"])])}}};export{rt as default};
