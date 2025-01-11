import{_ as B}from"./nuevaPersonaCompany-ed7b2d3e.js";import{_ as G}from"./imgInvitacion-55e49cc2.js";import{r as m,u as M,a as Q,j as N,b as c,o as n,p as b,w as u,d as v,F as q,x as I,e,t as f,c as d,i as r,q as A,f as T,m as L,E as O}from"./index-ec966cf5.js";import{E as z}from"./EmpresaUsuario-4ca888af.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./quill-blot-formatter-e18a970d.js";import"./selects-c77e0024.js";const Y={key:0},H={class:"box-mensagge"},J={class:"box-title"},K={class:"box"},W={class:"box-btn"},X={__name:"TestEntradaQuestions",props:["workshop","rucdni"],setup($){const l=$,g=m(!1),a=m(null),k=M(),y=m(!0),o=Q({te1:null,te2:null,te3:null,te4:null,te5:null,social:null}),w=async()=>{const _={te1:o.te1,te2:o.te2,te3:o.te3,te4:o.te4,te5:o.te5,social:o.social,ruc_mype:l.rucdni.ruc,dni_mype:l.rucdni.number_document,workshop_id:l.workshop.id};g.value=!0;try{await T({url:`/sending-test-answers/${l.workshop.id_in}`,method:"POST",data:_}),await T({url:`/public/add-point/${l.workshop.id}/${o.social}`,method:"PUT"});const s={status:"success",title:"¡Gracias por participar de este formulario!",subTitle:"Seguiremos desarrollando más talleres para tí"};k.push({name:"enviado",query:s})}catch(s){console.error("Error:",s.response.data.errors[0])}finally{g.value=!1}},i=()=>{window.scrollTo({top:200,behavior:"smooth"})},t=()=>{L.error("Debes de completar todos los datos"),i()};return N(async()=>{try{const{data:_}=await T({url:`/testin-questions/${l.workshop.id}`,method:"GET"});a.value=_,y.value=!1}catch(_){console.error("Error de red:",_)}}),(_,s)=>{const D=c("a-spin"),E=c("a-radio"),R=c("a-radio-group"),P=c("a-form-item"),U=c("a-button"),V=c("a-form");return y.value?(n(),b(D,{key:0})):(n(),b(V,{key:1,layout:"vertical",model:o,autocomplete:"off",onFinish:w,onFinishFailed:t},{default:u(()=>[a.value?(n(),v("div",Y,[(n(),v(q,null,I(5,(S,p)=>e("div",{class:"box",key:p},[e("span",H,"Pregunta "+f(p+1),1),e("h3",J,f(a.value["question"+(p+1)]),1),d(P,{name:`te${p+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:u(()=>[d(R,{class:"group-radios",value:o[`te${p+1}`],"onUpdate:value":F=>o[`te${p+1}`]=F},{default:u(()=>[(n(),v(q,null,I(3,(F,h)=>d(E,{key:h,class:"item-radio",value:h+1},{default:u(()=>[r(f(a.value[`question${p+1}_opt${h+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):A("",!0),e("div",K,[s[4]||(s[4]=e("span",{class:"box-mensagge"},"Opcional",-1)),s[5]||(s[5]=e("h3",{class:"box-title"},"¿Cómo te enteraste del taller?",-1)),d(R,{class:"group-radios",value:o.social,"onUpdate:value":s[0]||(s[0]=S=>o.social=S)},{default:u(()=>[d(E,{class:"item-radio",value:"rrss"},{default:u(()=>s[1]||(s[1]=[r("Redes sociales")])),_:1}),d(E,{class:"item-radio",value:"sms"},{default:u(()=>s[2]||(s[2]=[r("SMS")])),_:1}),d(E,{class:"item-radio",value:"correo"},{default:u(()=>s[3]||(s[3]=[r("Correo")])),_:1})]),_:1},8,["value"])]),e("div",W,[d(U,{type:"primary","html-type":"submit",loading:g.value},{default:u(()=>s[6]||(s[6]=[r("ENVIAR")])),_:1},8,["loading"])])]),_:1},8,["model"]))}}},Z=C(X,[["__scopeId","data-v-c94cdc93"]]);const j={class:"invitation"},ee={key:1,class:"container"},te={key:0,class:"invitacion-info text-html"},se={__name:"TestEntrada",setup($){const l=m(!0),g=O(),a=m(null),k=m(!1),y=m(null),o=i=>{k.value=!0,y.value=i},w=async()=>{try{const i=await T({url:`/get-workshop-slug/${g.params.slug}`,method:"GET"});a.value=i.workshop,l.value=!1}catch(i){console.error("Error de red:",i)}};return N(()=>{w()}),(i,t)=>{const x=c("a-spin");return n(),v("section",j,[l.value?(n(),b(x,{key:0})):(n(),v("div",ee,[t[6]||(t[6]=e("div",{class:"header"},[e("img",{class:"logo-ruta",src:B,alt:""})],-1)),t[7]||(t[7]=e("div",{class:"lazing"},[e("h3",null,"TEST DE ENTRADA")],-1)),a.value?(n(),v("div",te,[e("div",null,[t[3]||(t[3]=e("p",null,[r(" ¡Capacítate con "),e("b",null,"#RUTADIGITAL"),r(" del Ministerio de Producción del Perú, a través de "),e("b",null,"#TuEmpresa"),r("! ")],-1)),t[4]||(t[4]=e("br",null,null,-1)),e("p",null,[t[0]||(t[0]=e("b",null,"Taller: ",-1)),r(" "+f(a.value.title),1)]),e("p",null,[t[1]||(t[1]=e("b",null,"Fecha: ",-1)),r(" "+f(a.value.workshop_date),1)]),e("p",null,[t[2]||(t[2]=e("b",null,"Exponente: ",-1)),r(" "+f(a.value.exponent_name),1)])]),t[5]||(t[5]=e("div",null,[e("img",{class:"img-wom",src:G,alt:""})],-1))])):A("",!0),t[8]||(t[8]=e("br",null,null,-1)),k.value?(n(),b(Z,{key:2,workshop:a.value,rucdni:y.value},null,8,["workshop","rucdni"])):(n(),b(z,{key:1,onRegisterMYPE:o}))]))])}}},de=C(se,[["__scopeId","data-v-85fa71b8"]]);export{de as default};
