import{c as p,A as N,g as L,r as D,a as $,b as f,o as u,d as _,e as g,w as d,F as v,H as z,m as h,x as M,q as x,h as O,i as U,s as b,t as T,p as J,j as W}from"./index-a89c85d3.js";import{u as G}from"./selectes-f79054a0.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";var X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const Y=X;function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable}))),l.forEach(function(m){Z(e,m,n[m])})}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(t,n){var l=I({},t,n.attrs);return p(N,I({},l,{icon:Y}),null)};w.displayName="UploadOutlined";w.inheritAttrs=!1;const K=w,ee={pdfDocument:{type:"iUpload",label:"",name:"pdfDocument",required:!1,message:""},file_id:{type:"iSelect",label:"Seleccionar una carpeta",name:"file_id",required:!0,message:"Debes seleccionar una carpeta"}};const V=e=>(J("data-v-7ec6b9b2"),e=e(),W(),e),te=V(()=>g("h3",null,"SUBIR ARCHIVOS",-1)),ae=V(()=>g("br",null,null,-1)),oe={class:"agreement-wrapper"},ne={class:"grid-item"},le={__name:"DriveSubirArchivo",setup(e){const t=JSON.parse(localStorage.getItem("profile")),n=L.get("token"),l=G(),m="https://apituempresa.soporte-pnte.com/api/",A="http://127.0.0.1:8000/api/",C=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?A:m;l.$patch({folders:l.folders}),l.fetchFolders();const y=D(!1),a=D([]),s=$({pdfDocument:null,file_id:null}),F=r=>{s.pdfDocument=null;const i=a.value.indexOf(r),c=a.value.slice();c.splice(i,1),a.value=c},k=r=>{const i=["pdf","xls","xlsx","doc","docx","ppt","pptx","png","jpg","jpeg","gif"],c=r.name.split(".").pop().toLowerCase();return i.includes(c)?(a.value=[...a.value,r],s.pdfDocument="file",!1):(h.error("Solo se permiten archivos PDF, Excel, Word, PowerPoint e imágenes."),!1)},q=async()=>{y.value=!0;const r={user_id:t.user_id,profile_id:t.id,files:a.value,file_id:s.file_id};try{const{data:i}=await z.post(`${C}drive/up-files`,r,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${n}`}});h.success(i.message),a.value=[],s.file_id=null}catch{h.error("Error al subir")}finally{y.value=!1}},B=()=>{a.value>=1?s.pdfDocument="file":h.error("Debes completar los campos requeridos")};return(r,i)=>{const c=f("a-button"),P=f("a-upload"),S=f("a-form-item"),j=f("a-select"),R=f("a-form");return u(),_(v,null,[te,ae,g("div",oe,[p(R,{layout:"vertical",model:s,name:"basic",autocomplete:"off",onFinish:q,onFinishFailed:B},{default:d(()=>[g("div",ne,[(u(!0),_(v,null,M(O(ee),(o,E)=>(u(),_(v,{key:E},[o.type==="iUpload"?(u(),x(S,{key:0,name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:d(()=>[p(P,{"file-list":a.value,"before-upload":k,onRemove:F},{default:d(()=>[p(c,null,{default:d(()=>[p(O(K)),U(" Seleccionar archivo ")]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):b("",!0),a.value.length>=1?(u(),_(v,{key:1},[o.type==="iSelect"?(u(),x(S,{key:0,class:"item-max",name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:d(()=>[p(j,{value:s[o.name],"onUpdate:value":H=>s[o.name]=H,options:O(l).folders,style:{width:"280px"}},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):b("",!0)],64)):b("",!0)],64))),128))]),a.value.length>=1?(u(),x(S,{key:0},{default:d(()=>[p(c,{class:"btn-produce",type:"primary","html-type":"submit",loading:y.value},{default:d(()=>[U("SUBIR "+T(a.value.length==1?"ARCHIVO":"ARCHIVOS"),1)]),_:1},8,["loading"])]),_:1})):b("",!0)]),_:1},8,["model"])])],64)}}},ce=Q(le,[["__scopeId","data-v-7ec6b9b2"]]);export{ce as default};