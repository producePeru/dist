import{c as p,A as N,g as H,r as D,a as L,b as f,o as c,d as _,e as v,w as d,F as g,G as $,m as b,s as z,x,h as O,i as U,q as h,t as M}from"./index-61e3a352.js";import{u as T}from"./selectes-1c4d74af.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";var J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const W=J;function V(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable}))),l.forEach(function(m){Q(r,m,n[m])})}return r}function Q(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}var w=function(e,n){var l=V({},e,n.attrs);return p(N,V({},l,{icon:W}),null)};w.displayName="UploadOutlined";w.inheritAttrs=!1;const X=w,Y={pdfDocument:{type:"iUpload",label:"",name:"pdfDocument",required:!1,message:""},file_id:{type:"iSelect",label:"Seleccionar una carpeta",name:"file_id",required:!0,message:"Debes seleccionar una carpeta"}};const Z={class:"agreement-wrapper"},K={class:"grid-item"},ee={__name:"DriveSubirArchivo",setup(r){const e=JSON.parse(localStorage.getItem("profile")),n=H.get("token"),l=T(),m="https://apituempresa.soporte-pnte.com/api/",A="http://127.0.0.1:8000/api/",C=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?A:m;l.$patch({folders:l.folders}),l.fetchFolders();const y=D(!1),a=D([]),s=L({pdfDocument:null,file_id:null}),F=i=>{s.pdfDocument=null;const t=a.value.indexOf(i),u=a.value.slice();u.splice(t,1),a.value=u},k=i=>{const t=["pdf","xls","xlsx","doc","docx","ppt","pptx","png","jpg","jpeg","gif"],u=i.name.split(".").pop().toLowerCase();return t.includes(u)?(a.value=[...a.value,i],s.pdfDocument="file",!1):(b.error("Solo se permiten archivos PDF, Excel, Word, PowerPoint e imágenes."),!1)},q=async()=>{y.value=!0;const i={user_id:e.user_id,profile_id:e.id,files:a.value,file_id:s.file_id};try{const{data:t}=await $.post(`${C}drive/up-files`,i,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${n}`}});b.success(t.message),a.value=[],s.file_id=null}catch{b.error("Error al subir")}finally{y.value=!1}},B=()=>{a.value>=1?s.pdfDocument="file":b.error("Debes completar los campos requeridos")};return(i,t)=>{const u=f("a-button"),I=f("a-upload"),S=f("a-form-item"),P=f("a-select"),R=f("a-form");return c(),_(g,null,[t[1]||(t[1]=v("h3",null,"SUBIR ARCHIVOS",-1)),t[2]||(t[2]=v("br",null,null,-1)),v("div",Z,[p(R,{layout:"vertical",model:s,name:"basic",autocomplete:"off",onFinish:q,onFinishFailed:B},{default:d(()=>[v("div",K,[(c(!0),_(g,null,z(O(Y),(o,j)=>(c(),_(g,{key:j},[o.type==="iUpload"?(c(),x(S,{key:0,name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:d(()=>[p(I,{"file-list":a.value,"before-upload":k,onRemove:F},{default:d(()=>[p(u,null,{default:d(()=>[p(O(X)),t[0]||(t[0]=U(" Seleccionar archivo "))]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):h("",!0),a.value.length>=1?(c(),_(g,{key:1},[o.type==="iSelect"?(c(),x(S,{key:0,class:"item-max",name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:d(()=>[p(P,{value:s[o.name],"onUpdate:value":E=>s[o.name]=E,options:O(l).folders,style:{width:"280px"}},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):h("",!0)],64)):h("",!0)],64))),128))]),a.value.length>=1?(c(),x(S,{key:0},{default:d(()=>[p(u,{class:"btn-produce",type:"primary","html-type":"submit",loading:y.value},{default:d(()=>[U("SUBIR "+M(a.value.length==1?"ARCHIVO":"ARCHIVOS"),1)]),_:1},8,["loading"])]),_:1})):h("",!0)]),_:1},8,["model"])])],64)}}},ne=G(ee,[["__scopeId","data-v-e196962b"]]);export{ne as default};
