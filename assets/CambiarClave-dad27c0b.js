import{u as C,r as c,a as h,b as n,o as F,d as R,e as m,c as a,w as o,F as k,G as N,m as p,i as x}from"./index-6e4bbc85.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const S={class:"password"},B={__name:"CambiarClave",setup(j){const _=JSON.parse(localStorage.getItem("profile")),f=C(),u=c(),i=c(!1),s=h({current_password:null,password:"",password_confirmation:null,dni:_.documentnumber}),v={password:[{required:!0,validator:async(r,e)=>e===""?Promise.reject("Por favor ingrese la contraseña"):e.length>=8?(u.value.validateFields("password_confirmation"),Promise.resolve()):Promise.reject("La contraseña debe tener al menos 8 caracteres"),trigger:"change"}],password_confirmation:[{validator:async(r,e)=>e===""?Promise.reject("Por favor ingrese la nueva contraseña nuevamente"):e!==s.password?Promise.reject("No coinciden las contraseñas!"):Promise.resolve(),trigger:"change"}],current_password:[{required:!0,trigger:"change"}]},w=async()=>{i.value=!0;try{const r=await N({url:"user/password-reset",method:"POST",data:s});p.success(r.message),f.push({name:"mi-perfil"})}catch{p.error("La contraseña actual es incorrecta")}finally{i.value=!1}},g=r=>{console.log(r)};return(r,e)=>{const b=n("a-divider"),d=n("a-input-password"),l=n("a-form-item"),y=n("a-button"),P=n("a-form");return F(),R(k,null,[e[4]||(e[4]=m("h3",null,"CAMBIAR CONTRASEÑA",-1)),a(b),m("div",S,[a(P,{layout:"vertical",ref_key:"formRef",ref:u,name:"custom-validation",model:s,rules:v,onFinish:w,onFinishFailed:g},{default:o(()=>[a(l,{"has-feedback":"",label:"Contraseña actual",name:"current_password"},{default:o(()=>[a(d,{value:s.current_password,"onUpdate:value":e[0]||(e[0]=t=>s.current_password=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(l,{"has-feedback":"",label:"Nueva contraseña",name:"password"},{default:o(()=>[a(d,{value:s.password,"onUpdate:value":e[1]||(e[1]=t=>s.password=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(l,{"has-feedback":"",label:"Repetir la nueva contraseña",name:"password_confirmation"},{default:o(()=>[a(d,{value:s.password_confirmation,"onUpdate:value":e[2]||(e[2]=t=>s.password_confirmation=t),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),a(l,null,{default:o(()=>[a(y,{loading:i.value,class:"password-btn btn-produce",type:"primary","html-type":"submit"},{default:o(()=>e[3]||(e[3]=[x("CAMBIAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])],64)}}},U=A(B,[["__scopeId","data-v-2d2c43ba"]]);export{U as default};
