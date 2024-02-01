import{c as o,A as w,r as x,u as z,a as E,b as p,o as U,d as N,e as u,w as l,f as V,m as f,g as h,C as O,h as A,i as b,j as $,p as C,k as B}from"./index-da4b24a2.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const M=F;function S(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),n.forEach(function(s){T(t,s,a[s])})}return t}function T(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=function(e,a){var n=S({},e,a.attrs);return o(w,S({},n,{icon:M}),null)};g.displayName="LockOutlined";g.inheritAttrs=!1;const q=g;var H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const J=H;function y(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),n.forEach(function(s){R(t,s,a[s])})}return t}function R(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _=function(e,a){var n=y({},e,a.attrs);return o(w,y({},n,{icon:J}),null)};_.displayName="UserOutlined";_.inheritAttrs=!1;const G=_;const v=t=>(C("data-v-3919976a"),t=t(),B(),t),Q={class:"container"},W=v(()=>u("img",{class:"hero",src:"https://soporte-pnte.com/tuempresa/assets/images/fondo.jpeg",alt:""},null,-1)),X={class:"wrapper-login"},Y=v(()=>u("div",{class:"title"},[u("img",{class:"logo",src:"https://www.tuempresa.gob.pe/wp-content/uploads/2021/10/Produce-TuEmpresa.png",alt:""}),u("h1",null,"Iniciar Sesión"),u("span",null,"Ingrese su usuario y contraseña para ingresar a la plataforma.")],-1)),Z=v(()=>u("br",null,null,-1)),K={__name:"LoginPage",setup(t){const e=x(!1),a=z(),n=E({email:"",password:""}),s=async()=>{e.value=!0;try{const c=await V({url:"/login",method:"POST",data:n});if(c.status===404)return f.warning(c.message);const r=c.data;h.set("token",r.access_token),h.set("user",r.id);const i={idUser:r.id,access_token:r.access_token,dni:r.dni,email:r.email,name:r.name,rol:O.AES.encrypt(r.role,"rol").toString()};localStorage.setItem("user",JSON.stringify(i)),r.access_token&&await P(r.dni)}catch{f.error("Las credenciales son incorrectas")}finally{e.value=!1}},P=async d=>{const{data:c}=await A({url:`/permission/${d}`,method:"GET"}),r=O.AES.encrypt(JSON.stringify(c),"appvistas").toString();try{localStorage.setItem("views",r)}catch(i){console.error("Error al guardar en localStorage:",i);return}a.push("/admin/inicio")},k=()=>{f.error("Sin acceso")};return(d,c)=>{const r=p("a-input"),i=p("a-form-item"),I=p("a-input-password"),L=p("a-button"),j=p("a-form");return U(),N("div",Q,[W,u("div",X,[Y,o(j,{class:"form-wrapper",model:n,name:"basic",autocomplete:"off",onFinish:s,onFinishFailed:k},{default:l(()=>[o(i,{name:"email",rules:[{required:!0,message:"Ingresa tu cuenta de email"}]},{default:l(()=>[o(r,{value:n.email,"onUpdate:value":c[0]||(c[0]=m=>n.email=m),size:"large"},{prefix:l(()=>[o(b(G),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),o(i,{name:"password",rules:[{required:!0,message:"La contraseña es incorrecta"}]},{default:l(()=>[o(I,{value:n.password,"onUpdate:value":c[1]||(c[1]=m=>n.password=m),size:"large"},{prefix:l(()=>[o(b(q),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),Z,o(i,null,{default:l(()=>[o(L,{size:"large",block:"",type:"primary","html-type":"submit",class:"btn-login",loading:e.value},{default:l(()=>[$("Ingresar")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])}}},ae=D(K,[["__scopeId","data-v-3919976a"]]);export{ae as default};
