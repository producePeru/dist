import{u as re}from"./selectes-9c0bf513.js";import{c as r,A as de,K as z,r as f,a as ce,b as g,o as n,q as S,w as y,e as V,d as p,F as D,B as X,h as w,s as c,L as ae,i as x,y as Z,m as j,_ as ue,$ as pe,t as E,a0 as ne,H as me,v as ve,k as _e}from"./index-080fa3f6.js";import"./es-0bfb18f2.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]},name:"file-add",theme:"outlined"};const he=ge;function ie(u){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?Object(arguments[o]):{},l=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(_){return Object.getOwnPropertyDescriptor(a,_).enumerable}))),l.forEach(function(_){ye(u,_,a[_])})}return u}function ye(u,o,a){return o in u?Object.defineProperty(u,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[o]=a,u}var Q=function(o,a){var l=ie({},o,a.attrs);return r(de,ie({},l,{icon:he}),null)};Q.displayName="FileAddOutlined";Q.inheritAttrs=!1;const De=Q;var be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const Ie=be;function oe(u){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?Object(arguments[o]):{},l=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(_){return Object.getOwnPropertyDescriptor(a,_).enumerable}))),l.forEach(function(_){Oe(u,_,a[_])})}return u}function Oe(u,o,a){return o in u?Object.defineProperty(u,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[o]=a,u}var W=function(o,a){var l=oe({},o,a.attrs);return r(de,oe({},l,{icon:Ie}),null)};W.displayName="SaveOutlined";W.inheritAttrs=!1;const xe=W,Ee={city_id:{type:"iSelect",label:"Región",name:"city_id",required:!0,message:"Seleccionar una región",disabled:!0},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},denomination:{type:"iText",label:"Denominación",name:"denomination",required:!0,message:"Escribir la denominación",disabled:!0},alliedEntity:{type:"iText",label:"Entidad Aliada",name:"alliedEntity",required:!0,message:"Escribir la entidad aliada",disabled:!0},homeOperations:{type:"iDate",label:"Inicio de Operaciones",name:"homeOperations",required:!0,message:"Escribir el incio de las operaciones",disabled:!0},address:{type:"iText",label:"Dirección",name:"address",required:!0,message:"Escribir la dirección",disabled:!0},reference:{type:"iText",label:"Referencia",name:"reference",required:!0,message:"Escribir la referencia",disabled:!0},resolution:{type:"iText",label:"Resolución de Autorización de CDE",name:"resolution",required:!0,message:"Escribir la referencia",disabled:!0},startDate:{type:"iDate",label:"Inicio Convenio Vigente",name:"startDate",required:!0,message:"Seleccionar fecha de convenio vigente",disabled:!0},endDate:{type:"iDate",label:"Fin del convenio",name:"endDate",required:!0,message:"Seleccionar fecha fin de convenio",disabled:!0},operationalstatus_id:{type:"iSelect",label:"Estado de operatividad",name:"operationalstatus_id",required:!0,message:"Seleccionar estado de operatividad",disabled:!0},agreementstatus_id:{type:"iSelect",label:"Estado de convenio",name:"agreementstatus_id",required:!0,message:"Seleccionar estado de convenio",disabled:!0},initials:{type:"iCheckbox",label:"Entidades",name:"initials",required:!0,message:"Escribir la referencia",disabled:!0}};const Se={class:"grid-convenios"},se="DD/MM/YYYY",we={__name:"DrawConvenio",setup(u){z.locale("es");const o=JSON.parse(localStorage.getItem("profile")),a=re();a.$patch({cities:a.cities}),a.$patch({provinces:a.provinces}),a.$patch({districts:a.districts}),a.$patch({agreementStatus:a.agreementStatus}),a.$patch({operationalStatus:a.operationalStatus}),a.fetchCities(),a.fetchAgreementStatus(),a.fetchOperationalStatus();const l=f(!1),_=f(!1),N=["UGO  - TU EMPRESA","TU EMPRESA - DVMYPE","DVMYPE-SG","SG-OGPPM","OGPPM-TU EMPRESA","TU EMPRESA-ALIADO"],e=ce({}),A=m=>{const O=z(e.startDate).add(1,"day").startOf("day");return z(m).startOf("day").isBefore(O,"day")},R=m=>{e.province_id=null,e.district_id=null,a.fetchProvinces(m)},L=m=>{e.district_id=null,a.fetchDistricts(m)},C=(m,O)=>{const M=m.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return O.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(M)},F=()=>{e.denomination=null,e.alliedEntity=null,e.homeOperations=null,e.address=null,e.reference=null,e.resolution=null,e.initials=null,e.startDate=null,e.endDate=null,e.city_id=null,e.province_id=null,e.district_id=null,e.operationalstatus_id=null,e.agreementstatus_id=null,e.createdBy=o.user_id},h=async()=>{l.value=!0;const m={denomination:e.denomination,alliedEntity:e.alliedEntity,homeOperations:z(e.homeOperations).format("YYYY-MM-DD"),address:e.address,reference:e.reference,resolution:e.resolution,initials:e.initials,startDate:z(e.startDate).format("YYYY-MM-DD"),endDate:z(e.endDate).format("YYYY-MM-DD"),city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,operationalstatus_id:e.operationalstatus_id,agreementstatus_id:e.agreementstatus_id,createdBy:o.user_id};try{const O=await Z({url:"agreement/create",method:"POST",data:m});O.status==200&&(j.success(O.message),F())}catch(O){j.error("Se originó un error: "+O.message)}finally{l.value=!1}},I=()=>{j.error("Debes de completar todos los espacios requeridos")};return(m,O)=>{const M=g("a-input"),k=g("a-form-item"),b=g("a-select"),T=g("a-date-picker"),Y=g("a-checkbox-group"),J=g("a-button"),B=g("a-form"),d=g("a-spin");return n(),S(d,{spinning:_.value},{default:y(()=>[r(B,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:h,onFinishFailed:I},{default:y(()=>[V("div",Se,[(n(!0),p(D,null,X(w(Ee),(t,U)=>(n(),p(D,{key:U},[t.type==="iText"?(n(),S(k,{key:0,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,max:t.max}]},{default:y(()=>[r(M,{value:e[t.name],"onUpdate:value":s=>e[t.name]=s,maxlength:t.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):c("",!0),t.type==="iSelect"?(n(),S(k,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:y(()=>[t.name=="city_id"?(n(),S(b,{key:0,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,options:w(a).cities,"show-search":"","filter-option":C,onChange:R},null,8,["value","onUpdate:value","options"])):c("",!0),t.name=="province_id"?(n(),S(b,{key:1,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,options:w(a).provinces,"show-search":"","filter-option":C,onChange:L,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),t.name=="district_id"?(n(),S(b,{key:2,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,options:w(a).districts,"show-search":"","filter-option":C,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),t.name=="operationalstatus_id"?(n(),S(b,{key:3,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,options:w(a).operationalStatus,"show-search":"","filter-option":C},null,8,["value","onUpdate:value","options"])):c("",!0),t.name=="agreementstatus_id"?(n(),S(b,{key:4,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,options:w(a).agreementStatus,"show-search":"","filter-option":C},null,8,["value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),t.type==="iDate"?(n(),S(k,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:y(()=>[t.name=="endDate"?(n(),S(T,{key:0,"disabled-date":A,locale:w(ae),disabled:!e.startDate,value:e[t.name],"onUpdate:value":s=>e[t.name]=s,style:{width:"100%"},format:se,placeholder:"día/mes/año"},null,8,["locale","disabled","value","onUpdate:value"])):(n(),S(T,{key:1,locale:w(ae),value:e[t.name],"onUpdate:value":s=>e[t.name]=s,style:{width:"100%"},format:se,placeholder:"día/mes/año"},null,8,["locale","value","onUpdate:value"]))]),_:2},1032,["name","label","rules"])):c("",!0),t.type==="iCheckbox"?(n(),S(k,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:y(()=>[r(Y,{value:e[t.name],"onUpdate:value":s=>e[t.name]=s,name:"checkboxgroup",options:N},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),r(k,null,{default:y(()=>[r(J,{type:"primary","html-type":"submit",loading:l.value},{default:y(()=>[x("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}},Ae=fe(we,[["__scopeId","data-v-67ad8a82"]]);const Ce={class:"accion-icons"},ke={key:0},Ne={key:1},Me={__name:"DrawAcciones",props:["idConvenio"],emits:["closeDraw"],setup(u,{emit:o}){const a=u,l=f([{id:1,description:"Lorem"},{id:2,description:"Lorem  alias autem velit. A obcaecati incidunt vitae. Vero veniam reiciendis quis eveniet."},{id:3,description:"Lorem  alias autem velit. A obcaecati incidunt vitae. Vero veniam reiciendis quis eveniet."}]),_=f(null),N=f(""),e=f(!1);f(null);const A=ce({description:null});function R(h){_.value=h.id,N.value=h.description,ne(()=>{F()})}function L(h){const I=l.value.findIndex(m=>m.id===h.id);I!==-1&&(l.value[I].description=N.value),_.value=null}const C=async()=>{try{const h={description:A.description,agreements_id:a.idConvenio},I=await Z({url:"agreement/create-acction",method:"POST",data:h});I.status==200&&j.success(I.message)}catch(h){console.error("Error de red:",h)}},F=()=>{ne(()=>{const h=document.getElementById("auto-resize");h.style.height="auto",h.style.height=h.scrollHeight+"px"})};return(h,I)=>{const m=g("a-textarea"),O=g("a-form-item"),M=g("a-button"),k=g("a-form");return n(),p(D,null,[V("div",null,[(n(!0),p(D,null,X(l.value,(b,T)=>(n(),p("div",{class:"acciones",key:T},[V("div",Ce,[r(w(ue),{class:"pointer ico-acc",onClick:Y=>R(b)},null,8,["onClick"]),_.value===b.id?(n(),S(w(xe),{key:0,class:"pointer ico-save",onClick:Y=>L(b)},null,8,["onClick"])):c("",!0),r(w(pe),{class:"pointer ico-acc"})]),_.value===b.id?(n(),p("div",ke,[r(m,{value:N.value,"onUpdate:value":I[0]||(I[0]=Y=>N.value=Y),onInput:F,id:"auto-resize"},null,8,["value"])])):(n(),p("p",Ne,E(b.description),1))]))),128)),r(k,{layout:"vertical",model:A,name:"basic",autocomplete:"off",onFinish:C},{default:y(()=>[r(O,{name:"description",label:"Descripción",rules:[{required:!0,message:"Escribir la descripción"}]},{default:y(()=>[r(m,{value:A.description,"onUpdate:value":I[1]||(I[1]=b=>A.description=b),maxlength:250,rows:4},null,8,["value"])]),_:1}),r(O,null,{default:y(()=>[r(M,{type:"primary","html-type":"submit",loading:e.value},{default:y(()=>[x("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),V("pre",null,"::: "+E(u.idConvenio),1)],64)}}};const Ue=V("h3",{class:"title-produce"},"ESTADO DE CONVENIOS",-1),Pe={class:"filters"},Ve={key:10,style:{"line-height":"1.2",margin:"0"}},Te={key:12,class:"accion-total"},qe=V("span",{class:"accion-numb"},"5",-1),ze={class:"paginator"},le=20,Le={__name:"ConvenioEstado",setup(u){z.locale("es"),JSON.parse(localStorage.getItem("profile")),re();const o=f(null),a=f(0),l=f({page:0}),_=f(1200),N=f([]),e=f(!1),A=f(!1),R=f(!1),L=f(null);f(null);const C=f(window.innerHeight-100),F=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"REGIÓN",fixed:"left",dataIndex:"region",width:120},{title:"PROVINCIA",fixed:"left",dataIndex:"provincia",width:140},{title:"DISTRITO",fixed:"left",dataIndex:"district",width:140},{title:"DENOMINACIÓN",dataIndex:"denomination",fixed:"left",width:150},{title:"ENTIDAD ALIADA",dataIndex:"alliedEntity",width:170},{title:"INICIO DE OPERACIONES",dataIndex:"inicioperaciones",align:"center",width:120},{title:"DIRECCIÓN",dataIndex:"address",width:180},{title:"REFERENCIA",dataIndex:"reference",width:220},{title:"ASESORES EMPRESARIALES ASIGNADOS",dataIndex:"districtxx",align:"center",width:125},{title:"RESOLUCIÓN DE AUTORIZACIÓN PARA CONDICIÓN DE CDE",dataIndex:"resolution",align:"center",width:150},{title:"ESTADO DE OPERATIVIDAD",dataIndex:"operatividad",align:"center",width:120},{title:"ESTADO DEL CONVENIO",dataIndex:"convenio",align:"center",width:120},{title:"ENTIDADES",dataIndex:"entidades",align:"center",width:170},{title:"INICIO CONVENIO VIGENTE",dataIndex:"startDate",align:"center",width:120},{title:"NUM. AÑOS DEL CONVENIO",dataIndex:"numbyears",align:"center",width:110},{title:"FIN DEL CONVENIO",dataIndex:"endDate",align:"center",width:120},{title:"ACCIONES",dataIndex:"acciones",align:"center",width:100},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],h=d=>({0:"red",1:"orange",2:"green",3:"purple",4:"blue",5:"pink"})[d],I=d=>{o.value=d.id,R.value=!0},m=d=>z(d).format("DD/MM/YYYY"),O=(d,t)=>{const U=new Date(t),s=new Date(d);let q=s.getFullYear()-U.getFullYear(),P=s.getMonth()-U.getMonth(),$=s.getDate()-U.getDate();if(P<0&&(q--,P+=12),$<0){const G=new Date(s.getFullYear(),s.getMonth(),0).getDate();$+=G,P--}const H=q>0?`${q} año${q>1?"s":""}`:"",v=P>0?`${P} mes${P>1?"es":""}`:"",i=$>0?`${$} día${$>1?"s":""}`:"";return[H,v,i].filter(Boolean).join(" con ")},M=(d,t)=>{const U=new Date(t),q=new Date().getTime()-U.getTime();return Math.floor(q/(1e3*3600*24))},k=d=>d<=0||d<20?"red":d<40?"#f9e717":"#11d811",b=d=>{l.value.page=d,B()},T=()=>{C.value=window.innerHeight-350},Y=()=>{L.value=null,A.value=!0},J=me(()=>d=>((l.value.page==0?1:l.value.page)-1)*le+d+1),B=async()=>{try{e.value=!0;let d=l.value.page==0?"":l.value;const{data:t}=await Z({url:"agreement/list",method:"GET",params:d});N.value=t.data,a.value=t.total}catch(d){console.error("Error de red:",d)}finally{e.value=!1}};return ve(()=>{window.removeEventListener("resize",T)}),_e(()=>{window.addEventListener("resize",T),T(),B()}),(d,t)=>{const U=g("a-button"),s=g("a-progress"),q=g("a-tag"),P=g("a-table"),$=g("a-pagination"),H=g("a-drawer");return n(),p(D,null,[V("div",null,[Ue,V("div",Pe,[r(U,{type:"primary",onClick:Y},{default:y(()=>[x("NUEVO")]),_:1})]),r(P,{bordered:"",scroll:{x:_.value,y:C.value},class:"table-agreements",columns:F,"data-source":N.value,pagination:!1,loading:e.value,size:"small"},{bodyCell:y(({column:v,record:i,index:K})=>{var G;return[v.dataIndex=="idx"?(n(),p(D,{key:0},[x(E(J.value(K)),1)],64)):c("",!0),v.dataIndex=="region"?(n(),p(D,{key:1},[x(E(i.region.name),1)],64)):c("",!0),v.dataIndex=="provincia"?(n(),p(D,{key:2},[x(E(i.provincia.name),1)],64)):c("",!0),v.dataIndex=="district"?(n(),p(D,{key:3},[x(E((G=i.distrito)==null?void 0:G.name),1)],64)):c("",!0),v.dataIndex=="denomination"?(n(),p(D,{key:4},[x(E(i.denomination)+" ",1),r(s,{style:{margin:"0"},percent:M(i.endDate,i.startDate),size:4,showInfo:!1,strokeColor:k(M(i.endDate,i.startDate))},null,8,["percent","strokeColor"])],64)):c("",!0),v.dataIndex=="inicioperaciones"?(n(),p(D,{key:5},[x(E(m(i==null?void 0:i.homeOperations)),1)],64)):c("",!0),v.dataIndex=="operatividad"?(n(),p(D,{key:6},[x(E(i==null?void 0:i.estado_operatividad.name),1)],64)):c("",!0),v.dataIndex=="convenio"?(n(),p(D,{key:7},[x(E(i==null?void 0:i.estado_convenio.name),1)],64)):c("",!0),v.dataIndex=="entidades"?(n(!0),p(D,{key:8},X(i.initials,(ee,te)=>(n(),p("div",{key:te},[r(q,{color:h(te),style:{margin:".2rem 0"}},{default:y(()=>[x(E(ee),1)]),_:2},1032,["color"])]))),128)):c("",!0),v.dataIndex=="startDate"?(n(),p(D,{key:9},[x(E(m(i==null?void 0:i.startDate)),1)],64)):c("",!0),v.dataIndex=="numbyears"?(n(),p("p",Ve,E(O(i.endDate,i.startDate)),1)):c("",!0),v.dataIndex=="endDate"?(n(),p(D,{key:11},[x(E(m(i==null?void 0:i.endDate)),1)],64)):c("",!0),v.dataIndex=="acciones"?(n(),p("div",Te,[qe,r(w(De),{class:"ico-acciones",onClick:ee=>I(i)},null,8,["onClick"])])):c("",!0)]}),_:1},8,["scroll","data-source","loading"])]),V("div",ze,[r($,{size:"small",total:a.value,pageSize:le,onChange:b,showSizeChanger:!1},null,8,["total"])]),r(H,{open:A.value,"onUpdate:open":t[0]||(t[0]=v=>A.value=v),class:"draw-notary","root-class-name":"root-class-name",title:"Convenios",placement:"right"},{default:y(()=>[r(Ae)]),_:1},8,["open"]),r(H,{open:R.value,"onUpdate:open":t[1]||(t[1]=v=>R.value=v),title:"Acciones",placement:"right"},{default:y(()=>[r(Me,{idConvenio:o.value},null,8,["idConvenio"])]),_:1},8,["open"])],64)}}};export{Le as default};
