import{_ as J}from"./tuempresa-7c20bfb9.js";import{r as h,i as K,a as W,j as X,b as r,o as u,d as c,e as s,c as o,t as d,w as n,k as S,m as U,l as Y,n as I,F as D,q as T,g as _,p as Z,h as ee}from"./index-96f21589.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const v=f=>(Z("data-v-e7529b67"),f=f(),ee(),f),oe={class:"background"},se={class:"container"},te={class:"questionary"},ne={class:"box text-center"},le=v(()=>s("img",{src:J,alt:""},null,-1)),re={class:"title"},ie={class:"box"},ue={key:0},ce={class:"box"},de={class:"box-title"},_e={class:"box"},me={class:"box-title"},pe={key:0,class:"box"},ve=v(()=>s("span",null,"Cuéntanos",-1)),he=v(()=>s("h3",{class:"box-title"},"¿A través de que medio recibió información sobre este taller?",-1)),fe={key:1,class:"box"},ge=v(()=>s("span",null,"Sugerencias",-1)),ye=v(()=>s("h3",{class:"box-title"},"Para siguientes talleres, por favor indícanos los temas de tu interés",-1)),be=v(()=>s("br",null,null,-1)),qe={class:"box-btn"},xe={__name:"QuestionaryId",setup(f){const C=h(!1),k=h(!1),y=h(!1),V=K(),p=h([]),b=h(!1),e=W({id_questionnaire:null,type_questionary:null,ruc:"",name:"",email:"",phone:"",questions:[],ratings:[],media:null,comments:null}),j=async l=>{if(!l)return U.warning("Ingresa el número de RUC");y.value=!0,C.value=!0;try{const a=await S({url:`/mype-ruc/${l}`,method:"GET"});a.ruc?(e.ruc=a.ruc,e.name=a.nombres_apellidos,e.email=a.email,e.phone=a.telefono):(e.name="",e.email="",e.phone="")}catch(a){console.error("Error de red:",a)}finally{y.value=!1}},L=()=>{e.ruc=e.ruc.replace(/\D/g,"")},M=async()=>{try{k.value=!0;const l=await S({url:`/questionary/ruta_digital/${V.params.id}`,method:"GET"});p.value=l,e.id_questionnaire=l.cuestionario.id,e.type_questionary=l.cuestionario.type_questionary,l.cuestionario.questions.map(()=>{const a={resp:null};e.questions.push({...a})}),l.cuestionario.ratings.map(()=>{const a={score:null};e.ratings.push({...a})})}catch(l){console.error("Error de red:",l)}finally{k.value=!1}},P=async()=>{const l=e;b.value=!0;try{const a=await S({url:"/answersmype",method:"POST",data:l});U.success(a.message),Y.push({name:"enviado"})}catch(a){console.error("Error de redxxxx:",a)}finally{b.value=!1}},Q=()=>{U.error("Debes de completar todos los datos")};return X(M),(l,a)=>{var E;const z=r("a-divider"),A=r("a-input-search"),g=r("a-form-item"),q=r("a-input"),m=r("a-radio"),w=r("a-radio-group"),G=r("a-rate"),O=r("a-textarea"),$=r("a-button"),H=r("a-form");return u(),c("div",oe,[s("section",se,[s("div",te,[s("div",ne,[le,o(z),s("h1",re,d((E=p.value.cuestionario)==null?void 0:E.title),1)]),o(H,{layout:"vertical",model:e,autocomplete:"off",onFinish:P,onFinishFailed:Q},{default:n(()=>{var F,N,R,B;return[s("div",ie,[o(g,{class:"search-ruc",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:n(()=>[o(A,{maxlength:15,loading:y.value,size:"large",value:e.ruc,"onUpdate:value":a[0]||(a[0]=t=>e.ruc=t),"enter-button":"",onSearch:j,onInput:L},null,8,["loading","value"])]),_:1}),C.value?(u(),c("div",ue,[o(g,{label:"Nombres y Apellidos:",name:"name",rules:[{required:!0,message:"Ingresar nombres y apellidos"}]},{default:n(()=>[o(q,{value:e.name,"onUpdate:value":a[1]||(a[1]=t=>e.name=t)},null,8,["value"])]),_:1}),o(g,{label:"Correo:",name:"email",rules:[{required:!0,message:"Ingresar correo electrónico"}]},{default:n(()=>[o(q,{value:e.email,"onUpdate:value":a[2]||(a[2]=t=>e.email=t)},null,8,["value"])]),_:1}),o(g,{label:"Celular:",name:"phone",rules:[{required:!0,message:"Ingresar número de celular"}]},{default:n(()=>[o(q,{value:e.phone,"onUpdate:value":a[3]||(a[3]=t=>e.phone=t)},null,8,["value"])]),_:1})])):I("",!0)]),(u(!0),c(D,null,T((F=p.value.cuestionario)==null?void 0:F.questions,(t,i)=>(u(),c("div",{key:i},[s("div",ce,[s("span",null,"Pregunta "+d(i+1),1),s("h3",de,d(t.title),1),o(w,{class:"group-radios",value:e.questions[i].resp,"onUpdate:value":x=>e.questions[i].resp=x},{default:n(()=>[o(m,{class:"item-radio",value:1},{default:n(()=>[_(d(t.opt1),1)]),_:2},1024),o(m,{class:"item-radio",value:2},{default:n(()=>[_(d(t.opt2),1)]),_:2},1024),o(m,{class:"item-radio",value:3},{default:n(()=>[_(d(t.opt3),1)]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])])]))),128)),s("div",null,[(u(!0),c(D,null,T((N=p.value.cuestionario)==null?void 0:N.ratings,(t,i)=>(u(),c("div",{key:i},[s("div",_e,[s("span",null,"Calificación "+d(i+1),1),s("h3",me,d(t.title),1),o(G,{class:"rating-star",value:e.ratings[i].score,"onUpdate:value":x=>e.ratings[i].score=x},null,8,["value","onUpdate:value"])])]))),128))]),(R=p.value.cuestionario)!=null&&R.social?(u(),c("div",pe,[ve,he,o(w,{class:"group-radios",value:e.media,"onUpdate:value":a[4]||(a[4]=t=>e.media=t)},{default:n(()=>[o(m,{class:"item-radio",value:1},{default:n(()=>[_("Redes sociales")]),_:1}),o(m,{class:"item-radio",value:2},{default:n(()=>[_("SMS")]),_:1}),o(m,{class:"item-radio",value:3},{default:n(()=>[_("Correo")]),_:1}),o(m,{class:"item-radio",value:4},{default:n(()=>[_("Otros")]),_:1})]),_:1},8,["value"])])):I("",!0),(B=p.value.cuestionario)!=null&&B.comments?(u(),c("div",fe,[ge,ye,o(O,{value:e.comments,"onUpdate:value":a[5]||(a[5]=t=>e.comments=t),placeholder:"Basic usage",rows:4},null,8,["value"])])):I("",!0),be,s("div",qe,[o($,{type:"primary","html-type":"submit",size:"large",loading:b.value},{default:n(()=>[_("Enviar respuestas")]),_:1},8,["loading"])])]}),_:1},8,["model"])])])])}}},Ce=ae(xe,[["__scopeId","data-v-e7529b67"]]);export{Ce as default};
