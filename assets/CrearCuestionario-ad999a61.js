import{c as t,A as $,r as C,a as T,b as p,o as m,d as f,w as u,e as l,F as k,v as P,q as A,y as F,m as L,z as I,i as _,t as R,h as U,a2 as x}from"./index-f9efa549.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";var Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"};const G=Q;function D(d){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?Object(arguments[o]):{},c=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),c.forEach(function(n){H(d,n,r[n])})}return d}function H(d,o,r){return o in d?Object.defineProperty(d,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):d[o]=r,d}var q=function(o,r){var c=D({},o,r.attrs);return t($,D({},c,{icon:G}),null)};q.displayName="StarOutlined";q.inheritAttrs=!1;const J=q;const W={class:"container-form"},X={class:"slug"},Y={class:"question-check"},Z={__name:"CrearCuestionario",setup(d){const o=C(!1),r=C({title:"",opt1:"",opt2:"",opt3:"",resp:null}),c=C({title:""}),n=T({type_questionary:"ruta_digital",title:"",slug:"",questions:[],ratings:[],comments:!1,social:!1}),N=()=>{n.questions.push({...r.value})},V=()=>{n.ratings.push({...c.value})},h=i=>{i>=0&&i<n.questions.length&&n.questions.splice(i,1)},j=i=>{i>=0&&i<n.ratings.length&&n.ratings.splice(i,1)},z=async()=>{o.value=!0;const i=idUserStorage,e={...n,id_registrador:i};try{const b=await F({url:"/questionnary/create",method:"POST",data:e});L.success(b.message),I.push({name:"cuestionarios"})}catch(b){console.error("Error de red:",b),L.error("Error, no se ha podido crear este formulario")}finally{o.value=!1}};return(i,e)=>{const b=p("router-link"),S=p("a-breadcrumb-item"),B=p("a-breadcrumb"),v=p("a-input"),E=p("a-input-number"),y=p("a-button"),O=p("a-divider"),w=p("a-checkbox");return m(),f("section",W,[t(B,{class:"breadcrumb-wrapper"},{default:u(()=>[t(S,null,{default:u(()=>[t(b,{to:"cuestionarios"},{default:u(()=>e[4]||(e[4]=[_("Ver lista cuestionario")])),_:1})]),_:1}),t(S,null,{default:u(()=>e[5]||(e[5]=[_("Crear cuestionario")])),_:1})]),_:1}),l("div",null,[l("div",null,[e[6]||(e[6]=l("h2",null,"Título del cuestionario",-1)),t(v,{value:n.title,"onUpdate:value":e[0]||(e[0]=a=>n.title=a)},null,8,["value"])]),l("div",X,[e[7]||(e[7]=l("div",{class:"slug-title"},"Slug del cuestionario",-1)),t(v,{value:n.slug,"onUpdate:value":e[1]||(e[1]=a=>n.slug=a)},null,8,["value"])])]),n.title&&n.slug?(m(),f(k,{key:0},[(m(!0),f(k,null,P(n.questions,(a,g)=>(m(),f("div",{class:"question",key:g},[l("div",null,[l("h3",null,"Pregunta "+R(g+1),1),t(v,{value:a.title,"onUpdate:value":s=>a.title=s},null,8,["value","onUpdate:value"])]),l("div",null,[e[8]||(e[8]=l("span",null,"Opción 1",-1)),t(v,{value:a.opt1,"onUpdate:value":s=>a.opt1=s},null,8,["value","onUpdate:value"])]),l("div",null,[e[9]||(e[9]=l("span",null,"Opción 2",-1)),t(v,{value:a.opt2,"onUpdate:value":s=>a.opt2=s},null,8,["value","onUpdate:value"])]),l("div",null,[e[10]||(e[10]=l("span",null,"Opción 3",-1)),t(v,{value:a.opt3,"onUpdate:value":s=>a.opt3=s},null,8,["value","onUpdate:value"])]),l("div",null,[e[11]||(e[11]=l("span",null,"Respuesta",-1)),t(E,{value:a.resp,"onUpdate:value":s=>a.resp=s,min:1,max:3,style:{width:"100px"}},null,8,["value","onUpdate:value"]),t(y,{type:"text",danger:"",class:"delete-item",onClick:s=>h(g)},{default:u(()=>[t(U(x))]),_:2},1032,["onClick"])])]))),128)),t(y,{class:"btn-question",onClick:N},{default:u(()=>e[12]||(e[12]=[_("Agregar pregunta")])),_:1}),t(O),(m(!0),f(k,null,P(n.ratings,(a,g)=>(m(),f("div",{class:"question",key:g},[l("div",null,[l("h4",null,"Pregunta Rating "+R(g+1),1),t(v,{class:"w-100",value:a.title,"onUpdate:value":s=>a.title=s},null,8,["value","onUpdate:value"]),t(y,{type:"text",danger:"",class:"delete-item",onClick:s=>j(g)},{default:u(()=>[t(U(x))]),_:2},1032,["onClick"])])]))),128)),n.questions.length>=1?(m(),f(k,{key:0},[t(y,{class:"btn-question",onClick:V},{default:u(()=>[t(U(J)),e[13]||(e[13]=_(" Agregar rating "))]),_:1}),t(O),l("div",Y,[t(w,{checked:n.comments,"onUpdate:checked":e[2]||(e[2]=a=>n.comments=a)},{default:u(()=>e[14]||(e[14]=[_("Comentarios")])),_:1},8,["checked"]),t(w,{checked:n.social,"onUpdate:checked":e[3]||(e[3]=a=>n.social=a)},{default:u(()=>e[15]||(e[15]=[_("Redes sociales")])),_:1},8,["checked"])]),t(O),t(y,{size:"large",type:"primary",loading:o.value,onClick:z},{default:u(()=>e[16]||(e[16]=[_("Crear cuestionario")])),_:1},8,["loading"])],64)):A("",!0)],64)):A("",!0)])}}},te=M(Z,[["__scopeId","data-v-ae0e0a82"]]);export{te as default};
