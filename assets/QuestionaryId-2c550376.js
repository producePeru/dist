import{_ as $}from"./tuempresa-7c20bfb9.js";import{r as _,z as J,a as H,j as K,b as l,o as i,d,e as o,c as s,t as m,w as n,I as x,m as h,J as W,y as U,F as R,s as B,i as c}from"./index-8c375bbc.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y={class:"background"},Z={class:"container"},ee={class:"questionary"},ae={class:"box text-center"},se={class:"title"},oe={class:"box"},te={key:0},ne={class:"box"},re={class:"box-title"},le={class:"box"},ue={class:"box-title"},ie={key:0,class:"box"},de={key:1,class:"box"},me={class:"box-btn"},ce={__name:"QuestionaryId",setup(pe){const C=_(!1),I=_(!1),g=_(!1),D=J(),v=_([]),y=_(!1),a=H({id_questionnaire:null,type_questionary:null,ruc:"",name:"",email:"",phone:"",questions:[],ratings:[],media:null,comments:null}),T=async r=>{if(!r)return h.warning("Ingresa el número de RUC");g.value=!0,C.value=!0;try{const e=await x({url:`/mype-ruc/${r}`,method:"GET"});e.ruc?(a.ruc=e.ruc,a.name=e.nombres_apellidos,a.email=e.email,a.phone=e.telefono):(a.name="",a.email="",a.phone="")}catch(e){console.error("Error de red:",e)}finally{g.value=!1}},V=()=>{a.ruc=a.ruc.replace(/\D/g,"")},j=async()=>{try{I.value=!0;const r=await x({url:`/questionary/ruta_digital/${D.params.id}`,method:"GET"});v.value=r,a.id_questionnaire=r.cuestionario.id,a.type_questionary=r.cuestionario.type_questionary,r.cuestionario.questions.map(()=>{const e={resp:null};a.questions.push({...e})}),r.cuestionario.ratings.map(()=>{const e={score:null};a.ratings.push({...e})})}catch(r){console.error("Error de red:",r)}finally{I.value=!1}},z=async()=>{const r=a;y.value=!0;try{const e=await x({url:"/answersmype",method:"POST",data:r});h.success(e.message),W.push({name:"enviado"})}catch(e){console.error("Error de redxxxx:",e)}finally{y.value=!1}},L=()=>{h.error("Debes de completar todos los datos")};return K(j),(r,e)=>{var k;const M=l("a-divider"),P=l("a-input-search"),f=l("a-form-item"),b=l("a-input"),p=l("a-radio"),S=l("a-radio-group"),Q=l("a-rate"),A=l("a-textarea"),G=l("a-button"),O=l("a-form");return i(),d("div",Y,[o("section",Z,[o("div",ee,[o("div",ae,[e[6]||(e[6]=o("img",{src:$,alt:""},null,-1)),s(M),o("h1",se,m((k=v.value.cuestionario)==null?void 0:k.title),1)]),s(O,{layout:"vertical",model:a,autocomplete:"off",onFinish:z,onFinishFailed:L},{default:n(()=>{var w,E,F,N;return[o("div",oe,[s(f,{class:"search-ruc",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:n(()=>[s(P,{maxlength:15,loading:g.value,size:"large",value:a.ruc,"onUpdate:value":e[0]||(e[0]=t=>a.ruc=t),"enter-button":"",onSearch:T,onInput:V},null,8,["loading","value"])]),_:1}),C.value?(i(),d("div",te,[s(f,{label:"Nombres y Apellidos:",name:"name",rules:[{required:!0,message:"Ingresar nombres y apellidos"}]},{default:n(()=>[s(b,{value:a.name,"onUpdate:value":e[1]||(e[1]=t=>a.name=t)},null,8,["value"])]),_:1}),s(f,{label:"Correo:",name:"email",rules:[{required:!0,message:"Ingresar correo electrónico"}]},{default:n(()=>[s(b,{value:a.email,"onUpdate:value":e[2]||(e[2]=t=>a.email=t)},null,8,["value"])]),_:1}),s(f,{label:"Celular:",name:"phone",rules:[{required:!0,message:"Ingresar número de celular"}]},{default:n(()=>[s(b,{value:a.phone,"onUpdate:value":e[3]||(e[3]=t=>a.phone=t)},null,8,["value"])]),_:1})])):U("",!0)]),(i(!0),d(R,null,B((w=v.value.cuestionario)==null?void 0:w.questions,(t,u)=>(i(),d("div",{key:u},[o("div",ne,[o("span",null,"Pregunta "+m(u+1),1),o("h3",re,m(t.title),1),s(S,{class:"group-radios",value:a.questions[u].resp,"onUpdate:value":q=>a.questions[u].resp=q},{default:n(()=>[s(p,{class:"item-radio",value:1},{default:n(()=>[c(m(t.opt1),1)]),_:2},1024),s(p,{class:"item-radio",value:2},{default:n(()=>[c(m(t.opt2),1)]),_:2},1024),s(p,{class:"item-radio",value:3},{default:n(()=>[c(m(t.opt3),1)]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])])]))),128)),o("div",null,[(i(!0),d(R,null,B((E=v.value.cuestionario)==null?void 0:E.ratings,(t,u)=>(i(),d("div",{key:u},[o("div",le,[o("span",null,"Calificación "+m(u+1),1),o("h3",ue,m(t.title),1),s(Q,{class:"rating-star",value:a.ratings[u].score,"onUpdate:value":q=>a.ratings[u].score=q},null,8,["value","onUpdate:value"])])]))),128))]),(F=v.value.cuestionario)!=null&&F.social?(i(),d("div",ie,[e[11]||(e[11]=o("span",null,"Cuéntanos",-1)),e[12]||(e[12]=o("h3",{class:"box-title"},"¿A través de que medio recibió información sobre este taller?",-1)),s(S,{class:"group-radios",value:a.media,"onUpdate:value":e[4]||(e[4]=t=>a.media=t)},{default:n(()=>[s(p,{class:"item-radio",value:1},{default:n(()=>e[7]||(e[7]=[c("Redes sociales")])),_:1}),s(p,{class:"item-radio",value:2},{default:n(()=>e[8]||(e[8]=[c("SMS")])),_:1}),s(p,{class:"item-radio",value:3},{default:n(()=>e[9]||(e[9]=[c("Correo")])),_:1}),s(p,{class:"item-radio",value:4},{default:n(()=>e[10]||(e[10]=[c("Otros")])),_:1})]),_:1},8,["value"])])):U("",!0),(N=v.value.cuestionario)!=null&&N.comments?(i(),d("div",de,[e[13]||(e[13]=o("span",null,"Sugerencias",-1)),e[14]||(e[14]=o("h3",{class:"box-title"},"Para siguientes talleres, por favor indícanos los temas de tu interés",-1)),s(A,{value:a.comments,"onUpdate:value":e[5]||(e[5]=t=>a.comments=t),placeholder:"Basic usage",rows:4},null,8,["value"])])):U("",!0),e[16]||(e[16]=o("br",null,null,-1)),o("div",me,[s(G,{type:"primary","html-type":"submit",size:"large",loading:y.value},{default:n(()=>e[15]||(e[15]=[c("Enviar respuestas")])),_:1},8,["loading"])])]}),_:1},8,["model"])])])])}}},ge=X(ce,[["__scopeId","data-v-e7529b67"]]);export{ge as default};
