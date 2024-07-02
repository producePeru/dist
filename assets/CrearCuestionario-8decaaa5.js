import{c as e,A as $,r as C,a as T,b as d,o as g,d as m,w as u,e as n,F as k,x as P,s as A,z as F,m as x,B as M,i as f,t as L,h as S,a0 as R,p as Q,j as G}from"./index-55da38d4.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";var J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"};const W=J;function j(o){for(var l=1;l<arguments.length;l++){var r=arguments[l]!=null?Object(arguments[l]):{},p=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),p.forEach(function(t){X(o,t,r[t])})}return o}function X(o,l,r){return l in o?Object.defineProperty(o,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[l]=r,o}var U=function(l,r){var p=j({},l,r.attrs);return e($,j({},p,{icon:W}),null)};U.displayName="StarOutlined";U.inheritAttrs=!1;const Y=U;const h=o=>(Q("data-v-ae0e0a82"),o=o(),G(),o),Z={class:"container-form"},K=h(()=>n("h2",null,"Título del cuestionario",-1)),ee={class:"slug"},te=h(()=>n("div",{class:"slug-title"},"Slug del cuestionario",-1)),ae=h(()=>n("span",null,"Opción 1",-1)),ne=h(()=>n("span",null,"Opción 2",-1)),le=h(()=>n("span",null,"Opción 3",-1)),oe=h(()=>n("span",null,"Respuesta",-1)),se={class:"question-check"},re={__name:"CrearCuestionario",setup(o){const l=C(!1),r=C({title:"",opt1:"",opt2:"",opt3:"",resp:null}),p=C({title:""}),t=T({type_questionary:"ruta_digital",title:"",slug:"",questions:[],ratings:[],comments:!1,social:!1}),B=()=>{t.questions.push({...r.value})},D=()=>{t.ratings.push({...p.value})},I=i=>{i>=0&&i<t.questions.length&&t.questions.splice(i,1)},N=i=>{i>=0&&i<t.ratings.length&&t.ratings.splice(i,1)},V=async()=>{l.value=!0;const i=idUserStorage,c={...t,id_registrador:i};try{const b=await F({url:"/questionnary/create",method:"POST",data:c});x.success(b.message),M.push({name:"cuestionarios"})}catch(b){console.error("Error de red:",b),x.error("Error, no se ha podido crear este formulario")}finally{l.value=!1}};return(i,c)=>{const b=d("router-link"),q=d("a-breadcrumb-item"),z=d("a-breadcrumb"),_=d("a-input"),E=d("a-input-number"),y=d("a-button"),O=d("a-divider"),w=d("a-checkbox");return g(),m("section",Z,[e(z,{class:"breadcrumb-wrapper"},{default:u(()=>[e(q,null,{default:u(()=>[e(b,{to:"cuestionarios"},{default:u(()=>[f("Ver lista cuestionario")]),_:1})]),_:1}),e(q,null,{default:u(()=>[f("Crear cuestionario")]),_:1})]),_:1}),n("div",null,[n("div",null,[K,e(_,{value:t.title,"onUpdate:value":c[0]||(c[0]=a=>t.title=a)},null,8,["value"])]),n("div",ee,[te,e(_,{value:t.slug,"onUpdate:value":c[1]||(c[1]=a=>t.slug=a)},null,8,["value"])])]),t.title&&t.slug?(g(),m(k,{key:0},[(g(!0),m(k,null,P(t.questions,(a,v)=>(g(),m("div",{class:"question",key:v},[n("div",null,[n("h3",null,"Pregunta "+L(v+1),1),e(_,{value:a.title,"onUpdate:value":s=>a.title=s},null,8,["value","onUpdate:value"])]),n("div",null,[ae,e(_,{value:a.opt1,"onUpdate:value":s=>a.opt1=s},null,8,["value","onUpdate:value"])]),n("div",null,[ne,e(_,{value:a.opt2,"onUpdate:value":s=>a.opt2=s},null,8,["value","onUpdate:value"])]),n("div",null,[le,e(_,{value:a.opt3,"onUpdate:value":s=>a.opt3=s},null,8,["value","onUpdate:value"])]),n("div",null,[oe,e(E,{value:a.resp,"onUpdate:value":s=>a.resp=s,min:1,max:3,style:{width:"100px"}},null,8,["value","onUpdate:value"]),e(y,{type:"text",danger:"",class:"delete-item",onClick:s=>I(v)},{default:u(()=>[e(S(R))]),_:2},1032,["onClick"])])]))),128)),e(y,{class:"btn-question",onClick:B},{default:u(()=>[f("Agregar pregunta")]),_:1}),e(O),(g(!0),m(k,null,P(t.ratings,(a,v)=>(g(),m("div",{class:"question",key:v},[n("div",null,[n("h4",null,"Pregunta Rating "+L(v+1),1),e(_,{class:"w-100",value:a.title,"onUpdate:value":s=>a.title=s},null,8,["value","onUpdate:value"]),e(y,{type:"text",danger:"",class:"delete-item",onClick:s=>N(v)},{default:u(()=>[e(S(R))]),_:2},1032,["onClick"])])]))),128)),t.questions.length>=1?(g(),m(k,{key:0},[e(y,{class:"btn-question",onClick:D},{default:u(()=>[e(S(Y)),f(" Agregar rating ")]),_:1}),e(O),n("div",se,[e(w,{checked:t.comments,"onUpdate:checked":c[2]||(c[2]=a=>t.comments=a)},{default:u(()=>[f("Comentarios")]),_:1},8,["checked"]),e(w,{checked:t.social,"onUpdate:checked":c[3]||(c[3]=a=>t.social=a)},{default:u(()=>[f("Redes sociales")]),_:1},8,["checked"])]),e(O),e(y,{size:"large",type:"primary",loading:l.value,onClick:V},{default:u(()=>[f("Crear cuestionario")]),_:1},8,["loading"])],64)):A("",!0)],64)):A("",!0)])}}},ce=H(re,[["__scopeId","data-v-ae0e0a82"]]);export{ce as default};
