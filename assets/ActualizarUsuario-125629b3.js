import{N as V,z as Y,r as _,a as M,k as j,b as l,o as n,d as f,c as u,s,w as d,F as g,B as h,m as U,f as P,e as A,y as $,h as i,v as r,Q as J,R as Q,O as W,i as Z,p as H,j as K}from"./index-fe1fc57d.js";import"./es-7f9a484e.js";import{f as X}from"./actualizarUsuario-3eaca126.js";import{a as ee,g as ae,d as te,o as oe,b as ne}from"./selects-c77e0024.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";const re=v=>(H("data-v-a717fef4"),v=v(),K(),v),le=re(()=>A("h3",null,"ACTUALIZAR USUARIO",-1)),ue={key:1,class:"user"},de={class:"grid-item"},ie="YYYY-MM-DD",ce={__name:"ActualizarUsuario",setup(v){V.locale("es");const F=JSON.parse(localStorage.getItem("user")),k=Y(),q=_(!0),y=_(!1),w=_([]),D=_([]),S=_(null),a=M({birthdate:null,gender:null,lession:0,phone_number:null,document_type:1,document_number:null,last_name:null,middle_name:null,name:null,country_code:173,email:null,office_code:null,sede_code:1,updated_by:F.id}),x=async()=>{const t=a;y.value=!0;try{const c=await h({url:`user/${S.value}`,method:"PUT",data:t});U.success(c.message)}catch{U.error("No se pudo registrar este usuario")}finally{y.value=!1}},I=()=>{U.error("Debes de completar todos los espacios requeridos")},T=(t,c)=>{const b=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return c.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},C=async()=>{try{const{data:t}=await P({url:"/countries",method:"GET"});w.value=t}catch(t){console.error("Error de red:",t)}},E=async()=>{try{const{data:t}=await h({url:"/sedes",method:"GET"});D.value=t,q.value=!1}catch(t){console.error("Error de red:",t)}},R=async()=>{try{const{data:t}=await h({url:`/user/${k.params.dni}`,method:"GET"});S.value=t.id,a.document_number=t.document_number,a.last_name=t.last_name,a.middle_name=t.middle_name,a.name=t.name,a.country_code=t.country_code,a.email=t.email,a.office_code=t.office_code,a.sede_code=t.sede_code,a.gender=t.gender}catch(t){console.error("Error de red:",t)}};return j(()=>{R(),C(),E()}),(t,c)=>{const b=l("a-divider"),N=l("a-spin"),m=l("a-select"),p=l("a-form-item"),z=l("a-input"),L=l("a-date-picker"),B=l("a-button"),G=l("a-form");return n(),f(g,null,[le,u(b),q.value?(n(),s(N,{key:0})):(n(),f("div",ue,[u(G,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:x,onFinishFailed:I},{default:d(()=>[A("div",de,[(n(!0),f(g,null,$(i(X),(e,O)=>(n(),f(g,{key:O},[e.type==="iSelect"?(n(),s(p,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[e.name=="document_type"?(n(),s(m,{key:0,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:i(ee),disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),e.name=="gender"?(n(),s(m,{key:1,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:i(ae)},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="isDisabled"?(n(),s(m,{key:2,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:i(te)},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="office_code"?(n(),s(m,{key:3,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:i(oe)},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="sede_code"?(n(),s(m,{key:4,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:D.value},null,8,["value","onUpdate:value","options"])):r("",!0),e.name=="role"?(n(),s(m,{key:5,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:i(ne)},null,8,["value","onUpdate:value","options"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iText"?(n(),s(p,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:d(()=>[u(z,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,disabled:e.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iPassword"?J((n(),s(p,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[u(z,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])),[[Q,!i(k).query.dni]]):r("",!0),e.type==="iSelectWrite"?(n(),s(p,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[u(m,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:w.value,"filter-option":T},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):r("",!0),e.type==="iDate"?(n(),s(p,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:d(()=>[u(L,{locale:i(W),value:a.birthdate,"onUpdate:value":c[0]||(c[0]=o=>a.birthdate=o),style:{width:"100%"},format:ie},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),u(p,null,{default:d(()=>[u(B,{type:"primary","html-type":"submit",loading:y.value},{default:d(()=>[Z("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]))],64)}}},ye=se(ce,[["__scopeId","data-v-a717fef4"]]);export{ye as default};
