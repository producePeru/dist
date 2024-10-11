import{u as O,z as L,r as $,a as z,N as T,k as G,b as r,o as h,d as E,c as a,w as s,e as l,t as v,i as m,B as U,m as D,Y as x,F as I,y as R,s as H,v as J,p as K,j as Q}from"./index-af55d7e2.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const c=f=>(K("data-v-ee66d3d0"),f=f(),Q(),f),X={class:"test-container"},Z=c(()=>l("br",null,null,-1)),j={class:"test-head"},ee=c(()=>l("h1",null,"TEST DE SALIDA",-1)),te=c(()=>l("b",null,"Expositor:",-1)),ae=c(()=>l("b",null,"Fecha taller:",-1)),oe=c(()=>l("br",null,null,-1)),ne=c(()=>l("h3",null,"NIVEL DE SATISFACCIÓN",-1)),se=c(()=>l("br",null,null,-1)),S="DD/MM/YYYY",le={__name:"TestSalida",setup(f){const y=O(),b=L(),k=$(!1),e=z({workshop_id:+b.query.id,user_id:1,date_end:$(T("04/12/2023",S)),question1:null,question1_opt1:null,question1_opt2:null,question1_opt3:null,question1_resp:null,question2:null,question2_opt1:null,question2_opt2:null,question2_opt3:null,question2_resp:null,question3:null,question3_opt1:null,question3_opt2:null,question3_opt3:null,question3_resp:null,question4:null,question4_opt1:null,question4_opt2:null,question4_opt3:null,question4_resp:null,question5:null,question5_opt1:null,question5_opt2:null,question5_opt3:null,question5_resp:null,satistaction1:null,satistaction2:null,satistaction3:null,comments:null,is_comments:!1}),C=async()=>{k.value=!0;let t=null,o=null;y.currentRoute.value.name=="editar-test-salida"?(t=`/testout/${b.query.test}`,o="PUT"):(t=`/create-test-out/${b.query.id}`,o="POST");let n=e;try{const _=await U({url:t,method:o,data:n});D.success(_.message),y.push("/admin/ruta-digital/talleres")}catch(_){console.error("Error de red:",_),D.error("No se pudo crear este cuestionario")}finally{k.value=!1}};return G(async()=>{if(y.currentRoute.value.name=="editar-test-salida")try{const{data:t}=await U({url:`/testout/${b.query.test}`,method:"GET"});let o=x(t.date_end).format("DD/MM/YYYY");e.date_end=$(T(o,S));for(let n=1;n<=5;n++)e["question"+n]=t["question"+n],e["question"+n+"_opt1"]=t["question"+n+"_opt1"],e["question"+n+"_opt2"]=t["question"+n+"_opt2"],e["question"+n+"_opt3"]=t["question"+n+"_opt3"],e["question"+n+"_resp"]=t["question"+n+"_resp"];console.log("suusus",t.is_comments),e.satistaction1=t.satistaction1,e.satistaction2=t.satistaction2,e.satistaction3=t.satistaction3,e.comments=t.comments,e.is_comments=t.is_comments==1}catch(t){console.error("Error de red:",t)}}),(t,o)=>{const n=r("router-link"),_=r("a-breadcrumb-item"),N=r("a-breadcrumb"),Y=r("a-divider"),A=r("a-date-picker"),d=r("a-form-item"),p=r("a-input"),F=r("a-radio"),w=r("a-radio-group"),P=r("a-checkbox"),V=r("a-button"),B=r("a-form");return h(),E("div",X,[a(N,null,{default:s(()=>[a(_,null,{default:s(()=>[a(n,{to:"/admin/ruta-digital/talleres"},{default:s(()=>[m("Volver a Talleres de Ruta Digital")]),_:1})]),_:1}),a(_,null,{default:s(()=>[m(v(t.$route.name=="test-salida"?"Crear":"Editar")+" test de salida",1)]),_:1})]),_:1}),Z,l("div",j,[ee,l("h2",null,v(t.$route.query.taller),1),l("span",null,[te,m(" "+v(t.$route.query.exponent),1)]),l("span",null,[ae,m(" "+v(t.$route.query.date),1)])]),a(Y),a(B,{layout:"vertical",model:e,onFinish:C},{default:s(()=>[a(d,{label:"Fecha de expiración de la prueba",name:"date_end",rules:[{required:!0,message:"Seleccionar una fecha"}]},{default:s(()=>[a(A,{value:e.date_end,"onUpdate:value":o[0]||(o[0]=u=>e.date_end=u),format:S},null,8,["value"])]),_:1}),(h(),E(I,null,R(5,(u,i)=>l("div",{key:i},[a(d,{label:`Pregunta ${i+1}`,name:[`question${i+1}`],rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[a(p,{value:e[`question${i+1}`],"onUpdate:value":g=>e[`question${i+1}`]=g},null,8,["value","onUpdate:value"])]),_:2},1032,["label","name"]),a(d,null,{default:s(()=>[a(w,{class:"options",value:e[`question${i+1}_resp`],"onUpdate:value":g=>e[`question${i+1}_resp`]=g},{default:s(()=>[(h(),E(I,null,R(3,(g,q)=>l("div",{class:"option",key:q},[a(F,{value:q+1},null,8,["value"]),a(p,{placeholder:`Option ${q+1}`,value:e[`question${i+1}_opt${q+1}`],"onUpdate:value":M=>e[`question${i+1}_opt${q+1}`]=M},null,8,["placeholder","value","onUpdate:value"])])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)])),64)),oe,l("div",null,[ne,a(d,{label:"Pregunta 1",name:"satistaction1",rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[a(p,{value:e.satistaction1,"onUpdate:value":o[1]||(o[1]=u=>e.satistaction1=u)},null,8,["value"])]),_:1}),a(d,{label:"Pregunta 2",name:"satistaction2",rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[a(p,{value:e.satistaction2,"onUpdate:value":o[2]||(o[2]=u=>e.satistaction2=u)},null,8,["value"])]),_:1}),a(d,{label:"Pregunta 3",name:"satistaction3",rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[a(p,{value:e.satistaction3,"onUpdate:value":o[3]||(o[3]=u=>e.satistaction3=u)},null,8,["value"])]),_:1})]),l("div",null,[a(P,{checked:e.is_comments,"onUpdate:checked":o[4]||(o[4]=u=>e.is_comments=u)},{default:s(()=>[m("Comentarios")]),_:1},8,["checked"]),e.is_comments?(h(),H(d,{key:0,label:"Título comentario",name:"comments",rules:[{required:e.comments,message:"Escribir pregunta"}]},{default:s(()=>[a(p,{value:e.comments,"onUpdate:value":o[5]||(o[5]=u=>e.comments=u)},null,8,["value"])]),_:1},8,["rules"])):J("",!0)]),se,a(d,{class:"text-center"},{default:s(()=>[a(V,{type:"primary","html-type":"submit",loading:k.value},{default:s(()=>[m(v(t.$route.name=="test-salida"?"CREAR":"EDITAR")+" CUESTIONARIO ",1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},de=W(le,[["__scopeId","data-v-ee66d3d0"]]);export{de as default};
