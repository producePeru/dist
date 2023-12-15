import{c as n,A as L,r as S,u as x,a as I,b as i,o as P,d as k,e as s,w as r,m as f,f as g,g as z,p as V,h as j}from"./index-21e7904b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{U as B}from"./UserOutlined-f1692e7f.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const N=E;function v(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable}))),o.forEach(function(c){U(t,c,a[c])})}return t}function U(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=function(e,a){var o=v({},e,a.attrs);return n(L,v({},o,{icon:N}),null)};d.displayName="LockOutlined";d.inheritAttrs=!1;const A=d;const m=t=>(V("data-v-eb6a1626"),t=t(),j(),t),H={class:"container"},M=m(()=>s("img",{class:"hero",src:"https://soporte-pnte.com/tuempresa/assets/images/fondo.jpeg",alt:""},null,-1)),q={class:"wrapper-login"},C=m(()=>s("div",{class:"title"},[s("img",{class:"logo",src:"https://www.tuempresa.gob.pe/wp-content/uploads/2021/10/Produce-TuEmpresa.png",alt:""}),s("h1",null,"Iniciar Sesión"),s("span",null,"Ingrese su usuario y contraseña para ingresar a la plataforma.")],-1)),T=m(()=>s("br",null,null,-1)),$={__name:"LoginPage",setup(t){const e=S(!1),a=x(),o=I({usuario:"",clave:""}),c=async()=>{e.value=!0;try{a.push("/admin/inicio")}catch(_){f.error("Las credenciales son incorrectas"),console.error("Error de red:",_)}finally{e.value=!1}},h=()=>{f.error("Sin acceso")};return(_,l)=>{const b=i("a-input"),u=i("a-form-item"),O=i("a-input-password"),w=i("a-button"),y=i("a-form");return P(),k("div",H,[M,s("div",q,[C,n(y,{class:"form-wrapper",model:o,name:"basic",autocomplete:"off",onFinish:c,onFinishFailed:h},{default:r(()=>[n(u,{name:"usuario",rules:[{required:!0,message:"Ingresa tu cuenta de usuario"}]},{default:r(()=>[n(b,{value:o.usuario,"onUpdate:value":l[0]||(l[0]=p=>o.usuario=p),size:"large"},{prefix:r(()=>[n(g(B),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),n(u,{name:"clave",rules:[{required:!0,message:"La contraseña es incorrecta"}]},{default:r(()=>[n(O,{value:o.clave,"onUpdate:value":l[1]||(l[1]=p=>o.clave=p),size:"large"},{prefix:r(()=>[n(g(A),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),T,n(u,null,{default:r(()=>[n(w,{size:"large",block:"",type:"primary","html-type":"submit",class:"btn-login",loading:e.value},{default:r(()=>[z("Ingresar")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])}}},J=F($,[["__scopeId","data-v-eb6a1626"]]);export{J as default};
