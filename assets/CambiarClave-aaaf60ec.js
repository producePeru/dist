import{u as C,r as p,a as S,b as n,o as F,d as R,c as a,e as _,w as r,F as k,z as I,m,i as N,p as x,j as A}from"./index-a89c85d3.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const B=l=>(x("data-v-2d2c43ba"),l=l(),A(),l),q=B(()=>_("h3",null,"CAMBIAR CONTRASEÑA",-1)),O={class:"password"},T={__name:"CambiarClave",setup(l){const f=JSON.parse(localStorage.getItem("profile")),v=C(),u=p(),d=p(!1),s=S({current_password:null,password:"",password_confirmation:null,dni:f.documentnumber}),w={password:[{required:!0,validator:async(o,e)=>e===""?Promise.reject("Por favor ingrese la contraseña"):e.length>=8?(u.value.validateFields("password_confirmation"),Promise.resolve()):Promise.reject("La contraseña debe tener al menos 8 caracteres"),trigger:"change"}],password_confirmation:[{validator:async(o,e)=>e===""?Promise.reject("Por favor ingrese la nueva contraseña nuevamente"):e!==s.password?Promise.reject("No coinciden las contraseñas!"):Promise.resolve(),trigger:"change"}],current_password:[{required:!0,trigger:"change"}]},g=async()=>{d.value=!0;try{const o=await I({url:"user/password-reset",method:"POST",data:s});m.success(o.message),v.push({name:"mi-perfil"})}catch{m.error("La contraseña actual es incorrecta")}finally{d.value=!1}},b=o=>{console.log(o)};return(o,e)=>{const h=n("a-divider"),i=n("a-input-password"),c=n("a-form-item"),y=n("a-button"),P=n("a-form");return F(),R(k,null,[q,a(h),_("div",O,[a(P,{layout:"vertical",ref_key:"formRef",ref:u,name:"custom-validation",model:s,rules:w,onFinish:g,onFinishFailed:b},{default:r(()=>[a(c,{"has-feedback":"",label:"Contraseña actual",name:"current_password"},{default:r(()=>[a(i,{value:s.current_password,"onUpdate:value":e[0]||(e[0]=t=>s.current_password=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,{"has-feedback":"",label:"Nueva contraseña",name:"password"},{default:r(()=>[a(i,{value:s.password,"onUpdate:value":e[1]||(e[1]=t=>s.password=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,{"has-feedback":"",label:"Repetir la nueva contraseña",name:"password_confirmation"},{default:r(()=>[a(i,{value:s.password_confirmation,"onUpdate:value":e[2]||(e[2]=t=>s.password_confirmation=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,null,{default:r(()=>[a(y,{loading:d.value,class:"password-btn btn-produce",type:"primary","html-type":"submit"},{default:r(()=>[N("CAMBIAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},M=j(T,[["__scopeId","data-v-2d2c43ba"]]);export{M as default};