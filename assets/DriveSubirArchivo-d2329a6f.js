import{g as E,r as g,a as N,b as u,o as l,d as _,e as d,c as r,w as s,F as f,H as q,m as p,x as H,q as b,h as x,i as S,s as y,t as L,p as j,j as P}from"./index-6c614c87.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{U as $}from"./UploadOutlined-2ab6dbca.js";const z={pdfDocument:{type:"iUpload",label:"",name:"pdfDocument",required:!1,message:""}};const w=i=>(j("data-v-6560364b"),i=i(),P(),i),J=w(()=>d("h3",null,"SUBIR ARCHIVOS",-1)),W=w(()=>d("br",null,null,-1)),G={class:"agreement-wrapper"},K={class:"grid-item"},M={__name:"DriveSubirArchivo",setup(i){const v=JSON.parse(localStorage.getItem("profile")),D=E.get("token"),I="https://apituempresa.soporte-pnte.com/api/",k="http://127.0.0.1:8000/api/",C=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?k:I,m=g(!1),e=g([]),c=N({pdfDocument:null}),F=o=>{c.pdfDocument=null;const t=e.value.indexOf(o),a=e.value.slice();a.splice(t,1),e.value=a},U=o=>{const t=["pdf","xls","xlsx","doc","docx","ppt","pptx","png","jpg","jpeg","gif"],a=o.name.split(".").pop().toLowerCase();return t.includes(a)?(e.value=[...e.value,o],c.pdfDocument="file",!1):(p.error("Solo se permiten archivos PDF, Excel, Word, PowerPoint e imágenes."),!1)},A=async()=>{m.value=!0;const o={user_id:v.user_id,profile_id:v.id,files:e.value};try{const{data:t}=await q.post(`${C}drive/up-files`,o,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${D}`}});p.success(t.message),e.value=[]}catch{p.error("Error al subir")}finally{m.value=!1}},B=()=>{e.value>=1?c.pdfDocument="file":p.error("Debes al menos subir un archivo")};return(o,t)=>{const a=u("a-button"),R=u("a-upload"),h=u("a-form-item"),V=u("a-form");return l(),_(f,null,[J,W,d("div",G,[r(V,{layout:"vertical",model:c,name:"basic",autocomplete:"off",onFinish:A,onFinishFailed:B},{default:s(()=>[d("div",K,[(l(!0),_(f,null,H(x(z),(n,O)=>(l(),_(f,{key:O},[n.type==="iUpload"?(l(),b(h,{key:0,name:n.name,label:n.label,rules:[{required:n.required,message:n.message}]},{default:s(()=>[r(R,{"file-list":e.value,"before-upload":U,onRemove:F},{default:s(()=>[r(a,null,{default:s(()=>[r(x($)),S(" Seleccionar archivo ")]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):y("",!0)],64))),128))]),e.value.length>=1?(l(),b(h,{key:0},{default:s(()=>[r(a,{class:"btn-produce",type:"primary","html-type":"submit",loading:m.value},{default:s(()=>[S("SUBIR "+L(e.value.length==1?"ARCHIVO":"ARCHIVOS"),1)]),_:1},8,["loading"])]),_:1})):y("",!0)]),_:1},8,["model"])])],64)}}},Z=T(M,[["__scopeId","data-v-6560364b"]]);export{Z as default};
