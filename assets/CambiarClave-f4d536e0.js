import{u as S,r as m,b as k,d as t,o as F,e as R,c as a,f,w as r,F as I,m as N,i as _,k as x,p as A,l as B}from"./index-2d9453b9.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const q=l=>(A("data-v-141cd69d"),l=l(),B(),l),O=q(()=>f("h3",null,"CAMBIAR CONTRASEÑA",-1)),T={class:"password"},U={__name:"CambiarClave",setup(l){const i=JSON.parse(localStorage.getItem("user")),v=S(),u=m(),d=m(!1),s=k({current_password:null,password:"",password_confirmation:null}),w={password:[{required:!0,validator:async(o,e)=>e===""?Promise.reject("Por favor ingrese la contraseña"):e.length>=8?(u.value.validateFields("password_confirmation"),Promise.resolve()):Promise.reject("La contraseña debe tener al menos 8 caracteres"),trigger:"change"}],password_confirmation:[{validator:async(o,e)=>e===""?Promise.reject("Por favor ingrese la nueva contraseña nuevamente"):e!==s.password?Promise.reject("No coinciden las contraseñas!"):Promise.resolve(),trigger:"change"}],current_password:[{required:!0,trigger:"change"}]},g=async()=>{d.value=!0;try{const o=await N({url:`/change-password-user/${i.id}/${i.document_number}`,method:"POST",data:s});_.success(o.message),v.push({name:"mi-perfil"})}catch{_.error("La contraseña actual es incorrecta")}finally{d.value=!1}},b=o=>{console.log(o)};return(o,e)=>{const h=t("a-divider"),y=t("a-input-password"),c=t("a-form-item"),p=t("a-input"),P=t("a-button"),C=t("a-form");return F(),R(I,null,[O,a(h),f("div",T,[a(C,{layout:"vertical",ref_key:"formRef",ref:u,name:"custom-validation",model:s,rules:w,onFinish:g,onFinishFailed:b},{default:r(()=>[a(c,{"has-feedback":"",label:"Contraseña actual",name:"current_password"},{default:r(()=>[a(y,{value:s.current_password,"onUpdate:value":e[0]||(e[0]=n=>s.current_password=n),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,{"has-feedback":"",label:"Nueva contraseña",name:"password"},{default:r(()=>[a(p,{value:s.password,"onUpdate:value":e[1]||(e[1]=n=>s.password=n),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,{"has-feedback":"",label:"Repetir la nueva contraseña",name:"password_confirmation"},{default:r(()=>[a(p,{value:s.password_confirmation,"onUpdate:value":e[2]||(e[2]=n=>s.password_confirmation=n),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(c,null,{default:r(()=>[a(P,{loading:d.value,class:"password-btn",type:"primary","html-type":"submit"},{default:r(()=>[x("CAMBIAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},$=j(U,[["__scopeId","data-v-141cd69d"]]);export{$ as default};
