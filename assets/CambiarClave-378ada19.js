import{r as s,v as S,a as w,l as N,b as n,o as R,d as U,c as e,e as p,w as o,F as x,h as A,m as i,j as F,p as I,k as q}from"./index-302d1fe3.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const B=u=>(I("data-v-8ef7928d"),u=u(),q(),u),D=B(()=>p("h3",null,"CAMBIAR CONTRASEÑA",-1)),T={class:"password"},V={__name:"CambiarClave",setup(u){const v=JSON.parse(localStorage.getItem("user")),t=s("");S();const d=s(!1);s([]),s([]);const f=s(null),_=w({document_type:1,document_number:null,last_name:null,middle_name:null,name:null,country_code:173,email:null,office_code:null,sede_code:1,birthdate:null,gender:null,lession:0,phone_number:null,updated_by:v.id}),b=async()=>{const m=_;d.value=!0;try{const a=await A({url:`user/${f.value}`,method:"PUT",data:m});i.success(a.message)}catch{i.error("No se pudo registrar este usuario")}finally{d.value=!1}},g=()=>{i.error("Debes de completar todos los espacios requeridos")};return N(()=>{}),(m,a)=>{const y=n("a-divider"),c=n("a-input-password"),r=n("a-form-item"),h=n("a-button"),C=n("a-form");return R(),U(x,null,[D,e(y),p("div",T,[e(C,{layout:"vertical",model:_,name:"basic",autocomplete:"off",onFinish:b,onFinishFailed:g},{default:o(()=>[e(r,{label:"Contraseña actual",rules:[{required:!0,message:""}]},{default:o(()=>[e(c,{value:t.value,"onUpdate:value":a[0]||(a[0]=l=>t.value=l),placeholder:""},null,8,["value"])]),_:1}),e(r,{label:"Nueva contraseña",rules:[{required:!0,message:""}]},{default:o(()=>[e(c,{value:t.value,"onUpdate:value":a[1]||(a[1]=l=>t.value=l),placeholder:""},null,8,["value"])]),_:1}),e(r,{label:"Repetir la nueva contraseña",rules:[{required:!0,message:""}]},{default:o(()=>[e(c,{value:t.value,"onUpdate:value":a[2]||(a[2]=l=>t.value=l),placeholder:""},null,8,["value"])]),_:1}),e(r,null,{default:o(()=>[e(h,{type:"primary","html-type":"submit",loading:d.value},{default:o(()=>[F("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},O=k(V,[["__scopeId","data-v-8ef7928d"]]);export{O as default};
