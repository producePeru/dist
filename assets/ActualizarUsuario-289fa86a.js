import{B as G,E as Y,r as _,a as M,j as O,b as u,o as n,d as v,e as A,c as d,p as s,w as i,F as b,J as g,m as U,f as j,x as J,h as m,q as l,V as P,W,D as $,i as Z}from"./index-ec966cf5.js";import"./es-daf45493.js";import{f as H}from"./actualizarUsuario-3eaca126.js";import{a as K,g as Q,d as X,o as ee,b as ae}from"./selects-c77e0024.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import"./quill-blot-formatter-e18a970d.js";const oe={key:1,class:"user"},ne={class:"grid-item"},se="YYYY-MM-DD",re={__name:"ActualizarUsuario",setup(le){G.locale("es");const F=JSON.parse(localStorage.getItem("user")),h=Y(),k=_(!0),f=_(!1),q=_([]),D=_([]),w=_(null),a=M({birthdate:null,gender:null,lession:0,phone_number:null,document_type:1,document_number:null,last_name:null,middle_name:null,name:null,country_code:173,email:null,office_code:null,sede_code:1,updated_by:F.id}),N=async()=>{const t=a;f.value=!0;try{const r=await g({url:`user/${w.value}`,method:"PUT",data:t});U.success(r.message)}catch{U.error("No se pudo registrar este usuario")}finally{f.value=!1}},z=()=>{U.error("Debes de completar todos los espacios requeridos")},E=(t,r)=>{const y=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(y)},T=async()=>{try{const{data:t}=await j({url:"/countries",method:"GET"});q.value=t}catch(t){console.error("Error de red:",t)}},C=async()=>{try{const{data:t}=await g({url:"/sedes",method:"GET"});D.value=t,k.value=!1}catch(t){console.error("Error de red:",t)}},L=async()=>{try{const{data:t}=await g({url:`/user/${h.params.dni}`,method:"GET"});w.value=t.id,a.document_number=t.document_number,a.last_name=t.last_name,a.middle_name=t.middle_name,a.name=t.name,a.country_code=t.country_code,a.email=t.email,a.office_code=t.office_code,a.sede_code=t.sede_code,a.gender=t.gender}catch(t){console.error("Error de red:",t)}};return O(()=>{L(),T(),C()}),(t,r)=>{const y=u("a-divider"),S=u("a-spin"),c=u("a-select"),p=u("a-form-item"),x=u("a-input"),R=u("a-date-picker"),B=u("a-button"),I=u("a-form");return n(),v(b,null,[r[2]||(r[2]=A("h3",null,"ACTUALIZAR USUARIO",-1)),d(y),k.value?(n(),s(S,{key:0})):(n(),v("div",oe,[d(I,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:N,onFinishFailed:z},{default:i(()=>[A("div",ne,[(n(!0),v(b,null,J(m(H),(e,V)=>(n(),v(b,{key:V},[e.type==="iSelect"?(n(),s(p,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[e.name=="document_type"?(n(),s(c,{key:0,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:m(K),disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),e.name=="gender"?(n(),s(c,{key:1,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:m(Q)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="isDisabled"?(n(),s(c,{key:2,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:m(X)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="office_code"?(n(),s(c,{key:3,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:m(ee)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="sede_code"?(n(),s(c,{key:4,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:D.value},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="role"?(n(),s(c,{key:5,value:a[e.name],"onUpdate:value":o=>a[e.name]=o,options:m(ae)},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iText"?(n(),s(p,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:i(()=>[d(x,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,disabled:e.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iPassword"?P((n(),s(p,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(x,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])),[[W,!m(h).query.dni]]):l("",!0),e.type==="iSelectWrite"?(n(),s(p,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(c,{value:a[e.name],"onUpdate:value":o=>a[e.name]=o,"show-search":"",options:q.value,"filter-option":E},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iDate"?(n(),s(p,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[d(R,{locale:m($),value:a.birthdate,"onUpdate:value":r[0]||(r[0]=o=>a.birthdate=o),style:{width:"100%"},format:se},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),d(p,null,{default:i(()=>[d(B,{type:"primary","html-type":"submit",loading:f.value},{default:i(()=>r[1]||(r[1]=[Z("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]))],64)}}},_e=te(re,[["__scopeId","data-v-a717fef4"]]);export{_e as default};
