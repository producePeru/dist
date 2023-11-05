import{c as a,A as y,u as k,r as S,a as u,o as x,b as P,w as o,m as L,d as _,e as f,p as z,f as I,g as m}from"./index-68bf8e75.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{U as F}from"./UserOutlined-44c776f8.js";var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const j=U;function g(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.forEach(function(s){B(t,s,e[s])})}return t}function B(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=function(n,e){var r=g({},n,e.attrs);return a(y,g({},r,{icon:j}),null)};p.displayName="LockOutlined";p.inheritAttrs=!1;const N=p;const A=t=>(z("data-v-0b9d18ce"),t=t(),I(),t),H={class:"container"},M=A(()=>m("div",{class:"title"},[m("h1",null,"Iniciar Sesión test"),m("span",null,"Ingrese su usuario y contraseña para ingresar a la plataforma.")],-1)),q={__name:"LoginPage",setup(t){const n=k(),e=S({username:"",password:"",remember:!0}),r=d=>{console.log("Success:",d),n.push("/admin/ruta-digital/mailing")},s=()=>{L.error("Sin acceso")};return(d,c)=>{const v=u("a-input"),i=u("a-form-item"),b=u("a-input-password"),h=u("a-checkbox"),O=u("a-button"),w=u("a-form");return x(),P("div",H,[M,a(w,{class:"form-wrapper",model:e,name:"basic",autocomplete:"off",onFinish:r,onFinishFailed:s},{default:o(()=>[a(i,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:o(()=>[a(v,{value:e.username,"onUpdate:value":c[0]||(c[0]=l=>e.username=l),size:"large"},{prefix:o(()=>[a(_(F),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),a(i,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:o(()=>[a(b,{value:e.password,"onUpdate:value":c[1]||(c[1]=l=>e.password=l),size:"large"},{prefix:o(()=>[a(_(N),{class:"input-ico"})]),_:1},8,["value"])]),_:1}),a(i,null,{default:o(()=>[a(i,{name:"remember","no-style":""},{default:o(()=>[a(h,{checked:e.remember,"onUpdate:checked":c[2]||(c[2]=l=>e.remember=l)},{default:o(()=>[f("Recuerdame")]),_:1},8,["checked"])]),_:1})]),_:1}),a(i,null,{default:o(()=>[a(O,{size:"large",block:"",type:"primary","html-type":"submit"},{default:o(()=>[f("Submit")]),_:1})]),_:1})]),_:1},8,["model"])])}}},$=V(q,[["__scopeId","data-v-0b9d18ce"]]);export{$ as default};