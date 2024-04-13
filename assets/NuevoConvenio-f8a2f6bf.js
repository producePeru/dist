import{g as B,G as z,E as U,H as L,m as y,K as Y,u as M,r as S,a as j,b as d,o as l,d as q,e as r,c as s,w as t,F as D,B as G,x as $,q as m,h,s as p,L as H,i as g,p as K,j as W}from"./index-6c614c87.js";import"./es-71c462d0.js";import{a as J,b as Q}from"./selects-56d2dd8e.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{U as Z}from"./UploadOutlined-2ab6dbca.js";const ee={office:{type:"iSelect",label:"Oficina",name:"office",required:!0,message:"Seleccionar Oficina"},nameInstitution:{type:"iText",label:"Nombre Institución",name:"nameInstitution",required:!0,message:"Escribe cuenta de usuario"},component:{type:"iSelect",label:"Componente",name:"component",required:!0,message:"Seleccionar Componente"},responsible:{type:"iText",label:"Responsable del PNTE",name:"responsible",required:!0,message:"Escribe nombre del responsabable"},representative:{type:"iText",label:"Representante",name:"representative",required:!0,message:"Escribe nombre del representante"},representativeEmail:{type:"iText",label:"Correo Electrónico",name:"representativeEmail",required:!0,message:"Escribe el correo electrónico",email:"email"},addendum:{type:"iSwitch",label:"¿Es adenda?",name:"addendum",required:!0,message:"Adenda"},proponent:{type:"iText",label:"Proponente",name:"proponent",required:!0,message:"Nombre del proponente"},nameAgreement:{type:"iText",label:"Nombre del convenio",name:"nameAgreement",required:!0,message:"Nombre del convenio"},focalPoint:{type:"iText",label:"Punto Focal",name:"focalPoint",required:!0,message:"Nombre del punto focal"},phoneContact:{type:"iText",label:"Número Telefónico del contacto",name:"phoneContact",required:!0,message:"Número de contacto y 9 max",max:9},pdfDocument:{type:"iUpload",label:"Archivo de convenio / Adenda (PDF)",name:"pdfDocument",required:!0,message:"Archivo de convenio / Adenda (PDF)"},dateIssue:{type:"iDate",label:"Fecha de Emisión",name:"dateIssue",required:!0,message:"Seleccionar fecha"},effectiveDate:{type:"iDate",label:"Fecha de Inicio de Vigencia",name:"effectiveDate",required:!0,message:"Seleccionar fecha"},dueDate:{type:"iDate",label:"Fecha de vencimiento",name:"dueDate",required:!0,message:"Seleccionar fecha"}},ae=B.get("token"),ne="https://apituempresa.soporte-pnte.com/api/",te="http://127.0.0.1:8000/api/",oe=window.location.hostname=="127.0.0.1"?te:ne,le=z("fileUpload",{state:()=>({uploaded:!1}),actions:{async handleUpload(v){const c=new FormData;c.append("pdf",v),c.append("created",U);try{const{data:i}=await L.post(`${oe}/agreements/upload-pdf`,c,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${ae}`}});y.success(i.message)}catch{y.error("Error al subir el archivo PDF, excede el tamaño del archivo permitido")}}}});const f=v=>(K("data-v-8b2eb48d"),v=v(),W(),v),se=f(()=>r("h3",null,"NUEVO CONVENIO",-1)),re=f(()=>r("br",null,null,-1)),ie={class:"agreement-wrapper"},ue={class:"grid-item"},ce=f(()=>r("div",{class:"span1"},null,-1)),de=f(()=>r("div",{class:"span2"},null,-1)),me=f(()=>r("div",{class:"span3"},null,-1)),pe=f(()=>r("div",{class:"span4"},null,-1)),fe=f(()=>r("div",{class:"span5"},null,-1)),_e=f(()=>r("br",null,null,-1)),ve="YYYY-MM-DD",be={__name:"NuevoConvenio",setup(v){Y.locale("es"),M();const c=S(!1),i=S(null),a=j({office:null,nameInstitution:null,component:null,responsible:null,representative:null,representativeEmail:null,addendum:0,proponent:null,nameAgreement:null,focalPoint:null,phoneContact:null,pdfDocument:null,dateIssue:null,effectiveDate:null,dueDate:null,created_by:U}),k=()=>{a.office=null,a.nameInstitution=null,a.component=null,a.responsible=null,a.representative=null,a.representativeEmail=null,a.addendum=0,a.proponent=null,a.nameAgreement=null,a.focalPoint=null,a.phoneContact=null,a.pdfDocument=null,a.dateIssue=null,a.effectiveDate=null,a.dueDate=null},C=()=>{let n=a.component;const u={1:"Responsable 1",2:"Responsable 2",3:"Responsable 3",4:"Responsable 4"};a.responsible=u[n]},F=n=>{a.pdfDocument=null;const u=i.value.indexOf(n),b=i.value.slice();b.splice(u,1),i.value=b},N=n=>n.size>10485760?y.error("El tamaño máximo del archivo PDF es 10MB"):(i.value=[n],a.pdfDocument=n.name,!1),E=async()=>{const n=le(),u=i.value[0];n.handleUpload(u)},w=async()=>{const n=a;c.value=!0;try{await G({url:"/agreements/new-agreement",method:"POST",data:n})&&(E(),k(),c.value=!1)}catch{y.error("Se presentó un error en el servidor"),c.value=!1}},I=()=>{y.error("Debes de completar todos los espacios requeridos")};return(n,u)=>{const b=d("a-select"),_=d("a-form-item"),T=d("a-input"),P=d("a-date-picker"),A=d("a-switch"),x=d("a-button"),R=d("a-upload"),O=d("a-form");return l(),q(D,null,[se,re,r("div",ie,[s(O,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:w,onFinishFailed:I},{default:t(()=>[r("div",ue,[(l(!0),q(D,null,$(h(ee),(e,V)=>(l(),q(D,{key:V},[e.type==="iSelect"?(l(),m(_,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:t(()=>[e.name=="office"?(l(),m(b,{key:0,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:h(J)},null,8,["value","onUpdate:value","options"])):p("",!0),e.name=="component"?(l(),m(b,{key:1,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:h(Q),onChange:C},null,8,["value","onUpdate:value","options"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iText"?(l(),m(_,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email,max:e.max}]},{default:t(()=>[s(T,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iSelectWrite"?(l(),m(_,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:t(()=>[s(b,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:n.countries,"filter-option":n.filterOption},null,8,["value","onUpdate:value","options","filter-option"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iDate"?(l(),m(_,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:t(()=>[s(P,{locale:h(H),value:a[e.name],"onUpdate:value":o=>a[e.name]=o,style:{width:"100%"},format:ve},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iSwitch"?(l(),m(_,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:t(()=>[s(A,{checked:a[e.name],"onUpdate:checked":o=>a[e.name]=o,checkedValue:1,unCheckedValue:0,class:"ml-1-3"},{checkedChildren:t(()=>[g("Si")]),unCheckedChildren:t(()=>[g("No")]),_:2},1032,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iUpload"?(l(),m(_,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:t(()=>[s(R,{"file-list":i.value,"before-upload":N,onRemove:F,"max-count":1,accept:".pdf"},{default:t(()=>[s(x,null,{default:t(()=>[s(h(Z)),g(" Subir archivo PDF ")]),_:1})]),_:1},8,["file-list"])]),_:2},1032,["name","label","rules"])):p("",!0)],64))),128)),ce,de,me,pe,fe]),_e,s(_,null,{default:t(()=>[s(x,{type:"primary","html-type":"submit",loading:c.value},{default:t(()=>[g("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},xe=X(be,[["__scopeId","data-v-8b2eb48d"]]);export{xe as default};
