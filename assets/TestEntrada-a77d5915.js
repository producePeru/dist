import{u as P,x as L,r as v,a as G,L as T,V as h,j as H,b as l,o as y,d as $,c as a,w as u,e as s,t as _,i as p,y as Y,m as k,F as R,v as F}from"./index-7992612a.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const J={class:"test-container"},K={class:"test-head"},g="DD/MM/YYYY",Q={__name:"TestEntrada",setup(W){const f=P(),c=L(),b=v(!1);v(null);const U=e=>{const t=new Date;return t.setHours(0,0,0,0),e&&e<t},n=G({workshop_id:+c.query.id,user_id:1,date_end:v(T(h().format("DD/MM/YYYY"),g)),question1:null,question1_opt1:null,question1_opt2:null,question1_opt3:null,question1_resp:null,question2:null,question2_opt1:null,question2_opt2:null,question2_opt3:null,question2_resp:null,question3:null,question3_opt1:null,question3_opt2:null,question3_opt3:null,question3_resp:null,question4:null,question4_opt1:null,question4_opt2:null,question4_opt3:null,question4_resp:null,question5:null,question5_opt1:null,question5_opt2:null,question5_opt3:null,question5_resp:null}),M=async()=>{b.value=!0;let e=null,t=null;f.currentRoute.value.name=="editar-test-entrada"?(e=`/testin/${c.query.test}`,t="PUT"):(e=`/create-test-in/${c.query.id}`,t="POST");let o=n;try{const i=await Y({url:e,method:t,data:o});k.success(i.message),f.push("/admin/ruta-digital/talleres")}catch(i){console.error("Error de red:",i),k.error("No se pudo crear este cuestionario")}finally{b.value=!1}},S=e=>{console.log(e)};return H(async()=>{if(f.currentRoute.value.name=="editar-test-entrada")try{const{data:e}=await Y({url:`/testin/${c.query.id}`,method:"GET"});let t=h(e.date_end).format("DD/MM/YYYY");n.date_end=v(T(t,g));for(let o=1;o<=5;o++)n["question"+o]=e["question"+o],n["question"+o+"_opt1"]=e["question"+o+"_opt1"],n["question"+o+"_opt2"]=e["question"+o+"_opt2"],n["question"+o+"_opt3"]=e["question"+o+"_opt3"],n["question"+o+"_resp"]=e["question"+o+"_resp"]}catch(e){console.error("Error de red:",e)}}),(e,t)=>{const o=l("router-link"),i=l("a-breadcrumb-item"),w=l("a-breadcrumb"),N=l("a-divider"),A=l("a-date-picker"),m=l("a-form-item"),E=l("a-input"),C=l("a-radio"),V=l("a-radio-group"),I=l("a-button"),O=l("a-form");return y(),$("div",J,[a(w,null,{default:u(()=>[a(i,null,{default:u(()=>[a(o,{to:"/admin/ruta-digital/talleres"},{default:u(()=>t[1]||(t[1]=[p("Volver a Talleres de Ruta Digital")])),_:1})]),_:1}),a(i,null,{default:u(()=>[p(_(e.$route.name=="test-entrada"?"Crear":"Editar")+" test de entrada",1)]),_:1})]),_:1}),t[6]||(t[6]=s("br",null,null,-1)),s("div",K,[t[4]||(t[4]=s("h1",null,"TEST DE ENTRADA",-1)),s("h2",null,_(e.$route.query.taller),1),s("span",null,[t[2]||(t[2]=s("b",null,"Expositor:",-1)),p(" "+_(e.$route.query.exponent),1)]),s("span",null,[t[3]||(t[3]=s("b",null,"Fecha taller:",-1)),p(" "+_(e.$route.query.date),1)])]),a(N),a(O,{layout:"vertical",model:n,onFinish:M,onFinishFailed:S},{default:u(()=>[a(m,{label:"Fecha de expiración de la prueba",name:"date_end",rules:[{required:!0,message:"Seleccionar una fecha"}]},{default:u(()=>[a(A,{value:n.date_end,"onUpdate:value":t[0]||(t[0]=D=>n.date_end=D),format:g,"disabled-date":U},null,8,["value"])]),_:1}),(y(),$(R,null,F(5,(D,r)=>s("div",{key:r},[a(m,{label:`Pregunta ${r+1}`,name:[`question${r+1}`],rules:[{required:!0,message:"Escribir pregunta"}]},{default:u(()=>[a(E,{value:n[`question${r+1}`],"onUpdate:value":q=>n[`question${r+1}`]=q},null,8,["value","onUpdate:value"])]),_:2},1032,["label","name"]),a(m,null,{default:u(()=>[a(V,{class:"options",value:n[`question${r+1}_resp`],"onUpdate:value":q=>n[`question${r+1}_resp`]=q},{default:u(()=>[(y(),$(R,null,F(3,(q,d)=>s("div",{class:"option",key:d},[a(C,{value:d+1},null,8,["value"]),a(E,{placeholder:`Option ${d+1}`,value:n[`question${r+1}_opt${d+1}`],"onUpdate:value":B=>n[`question${r+1}_opt${d+1}`]=B},null,8,["placeholder","value","onUpdate:value"])])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)])),64)),t[5]||(t[5]=s("br",null,null,-1)),a(m,{class:"text-center"},{default:u(()=>[a(I,{type:"primary","html-type":"submit",loading:b.value},{default:u(()=>[p(_(e.$route.name=="test-entrada"?"CREAR":"EDITAR")+" CUESTIONARIO ",1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},j=z(Q,[["__scopeId","data-v-528b020e"]]);export{j as default};
