<<<<<<<< HEAD:assets/TestEntrada-04ca2f6a.js
import{u as H,x as K,r as h,a as L,K as k,P as Y,k as z,b as l,o as $,d as g,c as n,w as s,e as u,t as _,i as c,y as R,m as F,F as S,B as U,p as J,j as Q}from"./index-7f702c82.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const p=m=>(J("data-v-528b020e"),m=m(),Q(),m),X={class:"test-container"},Z=p(()=>u("br",null,null,-1)),x={class:"test-head"},j=p(()=>u("h1",null,"TEST DE ENTRADA",-1)),ee=p(()=>u("b",null,"Expositor:",-1)),te=p(()=>u("b",null,"Fecha taller:",-1)),oe=p(()=>u("br",null,null,-1)),E="DD/MM/YYYY",ne={__name:"TestEntrada",setup(m){const b=H(),q=K(),y=h(!1);h(null);const w=e=>{const a=new Date;return a.setHours(0,0,0,0),e&&e<a},t=L({workshop_id:+q.query.id,user_id:1,date_end:h(k(Y().format("DD/MM/YYYY"),E)),question1:null,question1_opt1:null,question1_opt2:null,question1_opt3:null,question1_resp:null,question2:null,question2_opt1:null,question2_opt2:null,question2_opt3:null,question2_resp:null,question3:null,question3_opt1:null,question3_opt2:null,question3_opt3:null,question3_resp:null,question4:null,question4_opt1:null,question4_opt2:null,question4_opt3:null,question4_resp:null,question5:null,question5_opt1:null,question5_opt2:null,question5_opt3:null,question5_resp:null}),I=async()=>{y.value=!0;let e=null,a=null;b.currentRoute.value.name=="editar-test-entrada"?(e=`/testin/${q.query.test}`,a="PUT"):(e=`/create-test-in/${q.query.id}`,a="POST");let o=t;try{const i=await R({url:e,method:a,data:o});F.success(i.message),b.push("/admin/ruta-digital/talleres")}catch(i){console.error("Error de red:",i),F.error("No se pudo crear este cuestionario")}finally{y.value=!1}},M=e=>{console.log(e)};return z(async()=>{if(b.currentRoute.value.name=="editar-test-entrada")try{const{data:e}=await R({url:`/testin/${q.query.id}`,method:"GET"});let a=Y(e.date_end).format("DD/MM/YYYY");t.date_end=h(k(a,E));for(let o=1;o<=5;o++)t["question"+o]=e["question"+o],t["question"+o+"_opt1"]=e["question"+o+"_opt1"],t["question"+o+"_opt2"]=e["question"+o+"_opt2"],t["question"+o+"_opt3"]=e["question"+o+"_opt3"],t["question"+o+"_resp"]=e["question"+o+"_resp"]}catch(e){console.error("Error de red:",e)}}),(e,a)=>{const o=l("router-link"),i=l("a-breadcrumb-item"),N=l("a-breadcrumb"),A=l("a-divider"),C=l("a-date-picker"),v=l("a-form-item"),D=l("a-input"),B=l("a-radio"),O=l("a-radio-group"),P=l("a-button"),V=l("a-form");return $(),g("div",X,[n(N,null,{default:s(()=>[n(i,null,{default:s(()=>[n(o,{to:"/admin/ruta-digital/talleres"},{default:s(()=>[c("Volver a Talleres de Ruta Digital")]),_:1})]),_:1}),n(i,null,{default:s(()=>[c(_(e.$route.name=="test-entrada"?"Crear":"Editar")+" test de entrada",1)]),_:1})]),_:1}),Z,u("div",x,[j,u("h2",null,_(e.$route.query.taller),1),u("span",null,[ee,c(" "+_(e.$route.query.exponent),1)]),u("span",null,[te,c(" "+_(e.$route.query.date),1)])]),n(A),n(V,{layout:"vertical",model:t,onFinish:I,onFinishFailed:M},{default:s(()=>[n(v,{label:"Fecha de expiración de la prueba",name:"date_end",rules:[{required:!0,message:"Seleccionar una fecha"}]},{default:s(()=>[n(C,{value:t.date_end,"onUpdate:value":a[0]||(a[0]=T=>t.date_end=T),format:E,"disabled-date":w},null,8,["value"])]),_:1}),($(),g(S,null,U(5,(T,r)=>u("div",{key:r},[n(v,{label:`Pregunta ${r+1}`,name:[`question${r+1}`],rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[n(D,{value:t[`question${r+1}`],"onUpdate:value":f=>t[`question${r+1}`]=f},null,8,["value","onUpdate:value"])]),_:2},1032,["label","name"]),n(v,null,{default:s(()=>[n(O,{class:"options",value:t[`question${r+1}_resp`],"onUpdate:value":f=>t[`question${r+1}_resp`]=f},{default:s(()=>[($(),g(S,null,U(3,(f,d)=>u("div",{class:"option",key:d},[n(B,{value:d+1},null,8,["value"]),n(D,{placeholder:`Option ${d+1}`,value:t[`question${r+1}_opt${d+1}`],"onUpdate:value":G=>t[`question${r+1}_opt${d+1}`]=G},null,8,["placeholder","value","onUpdate:value"])])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)])),64)),oe,n(v,{class:"text-center"},{default:s(()=>[n(P,{type:"primary","html-type":"submit",loading:y.value},{default:s(()=>[c(_(e.$route.name=="test-entrada"?"CREAR":"EDITAR")+" CUESTIONARIO ",1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},ue=W(ne,[["__scopeId","data-v-528b020e"]]);export{ue as default};
========
import{u as H,x as K,r as h,a as L,K as k,P as Y,k as z,b as l,o as $,d as g,c as n,w as s,e as u,t as _,i as c,y as R,m as F,F as S,B as U,p as J,j as Q}from"./index-37e9f6da.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const p=m=>(J("data-v-528b020e"),m=m(),Q(),m),X={class:"test-container"},Z=p(()=>u("br",null,null,-1)),x={class:"test-head"},j=p(()=>u("h1",null,"TEST DE ENTRADA",-1)),ee=p(()=>u("b",null,"Expositor:",-1)),te=p(()=>u("b",null,"Fecha taller:",-1)),oe=p(()=>u("br",null,null,-1)),E="DD/MM/YYYY",ne={__name:"TestEntrada",setup(m){const b=H(),q=K(),y=h(!1);h(null);const w=e=>{const a=new Date;return a.setHours(0,0,0,0),e&&e<a},t=L({workshop_id:+q.query.id,user_id:1,date_end:h(k(Y().format("DD/MM/YYYY"),E)),question1:null,question1_opt1:null,question1_opt2:null,question1_opt3:null,question1_resp:null,question2:null,question2_opt1:null,question2_opt2:null,question2_opt3:null,question2_resp:null,question3:null,question3_opt1:null,question3_opt2:null,question3_opt3:null,question3_resp:null,question4:null,question4_opt1:null,question4_opt2:null,question4_opt3:null,question4_resp:null,question5:null,question5_opt1:null,question5_opt2:null,question5_opt3:null,question5_resp:null}),I=async()=>{y.value=!0;let e=null,a=null;b.currentRoute.value.name=="editar-test-entrada"?(e=`/testin/${q.query.test}`,a="PUT"):(e=`/create-test-in/${q.query.id}`,a="POST");let o=t;try{const i=await R({url:e,method:a,data:o});F.success(i.message),b.push("/admin/ruta-digital/talleres")}catch(i){console.error("Error de red:",i),F.error("No se pudo crear este cuestionario")}finally{y.value=!1}},M=e=>{console.log(e)};return z(async()=>{if(b.currentRoute.value.name=="editar-test-entrada")try{const{data:e}=await R({url:`/testin/${q.query.id}`,method:"GET"});let a=Y(e.date_end).format("DD/MM/YYYY");t.date_end=h(k(a,E));for(let o=1;o<=5;o++)t["question"+o]=e["question"+o],t["question"+o+"_opt1"]=e["question"+o+"_opt1"],t["question"+o+"_opt2"]=e["question"+o+"_opt2"],t["question"+o+"_opt3"]=e["question"+o+"_opt3"],t["question"+o+"_resp"]=e["question"+o+"_resp"]}catch(e){console.error("Error de red:",e)}}),(e,a)=>{const o=l("router-link"),i=l("a-breadcrumb-item"),N=l("a-breadcrumb"),A=l("a-divider"),C=l("a-date-picker"),v=l("a-form-item"),D=l("a-input"),B=l("a-radio"),O=l("a-radio-group"),P=l("a-button"),V=l("a-form");return $(),g("div",X,[n(N,null,{default:s(()=>[n(i,null,{default:s(()=>[n(o,{to:"/admin/ruta-digital/talleres"},{default:s(()=>[c("Volver a Talleres de Ruta Digital")]),_:1})]),_:1}),n(i,null,{default:s(()=>[c(_(e.$route.name=="test-entrada"?"Crear":"Editar")+" test de entrada",1)]),_:1})]),_:1}),Z,u("div",x,[j,u("h2",null,_(e.$route.query.taller),1),u("span",null,[ee,c(" "+_(e.$route.query.exponent),1)]),u("span",null,[te,c(" "+_(e.$route.query.date),1)])]),n(A),n(V,{layout:"vertical",model:t,onFinish:I,onFinishFailed:M},{default:s(()=>[n(v,{label:"Fecha de expiración de la prueba",name:"date_end",rules:[{required:!0,message:"Seleccionar una fecha"}]},{default:s(()=>[n(C,{value:t.date_end,"onUpdate:value":a[0]||(a[0]=T=>t.date_end=T),format:E,"disabled-date":w},null,8,["value"])]),_:1}),($(),g(S,null,U(5,(T,r)=>u("div",{key:r},[n(v,{label:`Pregunta ${r+1}`,name:[`question${r+1}`],rules:[{required:!0,message:"Escribir pregunta"}]},{default:s(()=>[n(D,{value:t[`question${r+1}`],"onUpdate:value":f=>t[`question${r+1}`]=f},null,8,["value","onUpdate:value"])]),_:2},1032,["label","name"]),n(v,null,{default:s(()=>[n(O,{class:"options",value:t[`question${r+1}_resp`],"onUpdate:value":f=>t[`question${r+1}_resp`]=f},{default:s(()=>[($(),g(S,null,U(3,(f,d)=>u("div",{class:"option",key:d},[n(B,{value:d+1},null,8,["value"]),n(D,{placeholder:`Option ${d+1}`,value:t[`question${r+1}_opt${d+1}`],"onUpdate:value":G=>t[`question${r+1}_opt${d+1}`]=G},null,8,["placeholder","value","onUpdate:value"])])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)])),64)),oe,n(v,{class:"text-center"},{default:s(()=>[n(P,{type:"primary","html-type":"submit",loading:y.value},{default:s(()=>[c(_(e.$route.name=="test-entrada"?"CREAR":"EDITAR")+" CUESTIONARIO ",1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},ue=W(ne,[["__scopeId","data-v-528b020e"]]);export{ue as default};
>>>>>>>> 6e77e012ecbf1c9c28f9e0e6e9b066d93881e51e:assets/TestEntrada-400d5ad0.js
