import{g as L,r as x,a as j,b as c,o as n,d as p,e as v,c as i,w as r,F as m,G as H,m as f,B as P,q as g,h as y,i as w,s as _,t as $,p as T,j as z}from"./index-9211c6e9.js";import{u as G}from"./selectes-61c27267.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{U as W}from"./UploadOutlined-ec6106ee.js";const K={pdfDocument:{type:"iUpload",label:"",name:"pdfDocument",required:!1,message:""},file_id:{type:"iSelect",label:"Seleccionar una carpeta",name:"file_id",required:!0,message:"Debes seleccionar una carpeta"}};const D=u=>(T("data-v-7ec6b9b2"),u=u(),z(),u),M=D(()=>v("h3",null,"SUBIR ARCHIVOS",-1)),Q=D(()=>v("br",null,null,-1)),X={class:"agreement-wrapper"},Y={class:"grid-item"},Z={__name:"DriveSubirArchivo",setup(u){const S=JSON.parse(localStorage.getItem("profile")),k=L.get("token"),d=G(),I="https://apituempresa.soporte-pnte.com/api/",U="http://127.0.0.1:8000/api/",C=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?U:I;d.$patch({folders:d.folders}),d.fetchFolders();const h=x(!1),e=x([]),t=j({pdfDocument:null,file_id:null}),F=o=>{t.pdfDocument=null;const s=e.value.indexOf(o),l=e.value.slice();l.splice(s,1),e.value=l},q=o=>{const s=["pdf","xls","xlsx","doc","docx","ppt","pptx","png","jpg","jpeg","gif"],l=o.name.split(".").pop().toLowerCase();return s.includes(l)?(e.value=[...e.value,o],t.pdfDocument="file",!1):(f.error("Solo se permiten archivos PDF, Excel, Word, PowerPoint e imágenes."),!1)},B=async()=>{h.value=!0;const o={user_id:S.user_id,profile_id:S.id,files:e.value,file_id:t.file_id};try{const{data:s}=await H.post(`${C}drive/up-files`,o,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${k}`}});f.success(s.message),e.value=[],t.file_id=null}catch{f.error("Error al subir")}finally{h.value=!1}},A=()=>{e.value>=1?t.pdfDocument="file":f.error("Debes completar los campos requeridos")};return(o,s)=>{const l=c("a-button"),R=c("a-upload"),b=c("a-form-item"),V=c("a-select"),O=c("a-form");return n(),p(m,null,[M,Q,v("div",X,[i(O,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:B,onFinishFailed:A},{default:r(()=>[v("div",Y,[(n(!0),p(m,null,P(y(K),(a,E)=>(n(),p(m,{key:E},[a.type==="iUpload"?(n(),g(b,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[i(R,{"file-list":e.value,"before-upload":q,onRemove:F},{default:r(()=>[i(l,null,{default:r(()=>[i(y(W)),w(" Seleccionar archivo ")]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):_("",!0),e.value.length>=1?(n(),p(m,{key:1},[a.type==="iSelect"?(n(),g(b,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:r(()=>[i(V,{value:t[a.name],"onUpdate:value":N=>t[a.name]=N,options:y(d).folders,style:{width:"280px"}},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):_("",!0)],64)):_("",!0)],64))),128))]),e.value.length>=1?(n(),g(b,{key:0},{default:r(()=>[i(l,{class:"btn-produce",type:"primary","html-type":"submit",loading:h.value},{default:r(()=>[w("SUBIR "+$(e.value.length==1?"ARCHIVO":"ARCHIVOS"),1)]),_:1},8,["loading"])]),_:1})):_("",!0)]),_:1},8,["model"])])],64)}}},se=J(Z,[["__scopeId","data-v-7ec6b9b2"]]);export{se as default};
