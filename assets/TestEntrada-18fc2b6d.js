import{_ as L}from"./nuevaPersonaCompany-ed7b2d3e.js";import{_ as O}from"./imgInvitacion-55e49cc2.js";import{r as p,u as z,a as Y,k as A,b as _,o,q as b,w as l,d as h,F as q,v as N,e,t as f,c as u,i as a,s as C,f as T,m as H,p as D,j as P,y as J}from"./index-fc29f185.js";import{E as K}from"./EmpresaUsuario-6f2c83c1.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./selects-56d2dd8e.js";const V=n=>(D("data-v-c94cdc93"),n=n(),P(),n),W={key:0},X={class:"box-mensagge"},Z={class:"box-title"},j={class:"box"},ee=V(()=>e("span",{class:"box-mensagge"},"Opcional",-1)),te=V(()=>e("h3",{class:"box-title"},"¿Cómo te enteraste del taller?",-1)),se={class:"box-btn"},oe={__name:"TestEntradaQuestions",props:["workshop","rucdni"],setup(n){const r=n,g=p(!1),s=p(null),k=z(),y=p(!0),t=Y({te1:null,te2:null,te3:null,te4:null,te5:null,social:null}),E=async()=>{const m={te1:t.te1,te2:t.te2,te3:t.te3,te4:t.te4,te5:t.te5,social:t.social,ruc_mype:r.rucdni.ruc,dni_mype:r.rucdni.number_document,workshop_id:r.workshop.id};g.value=!0;try{await T({url:`/sending-test-answers/${r.workshop.id_in}`,method:"POST",data:m}),await T({url:`/public/add-point/${r.workshop.id}/${t.social}`,method:"PUT"});const v={status:"success",title:"¡Gracias por participar de este formulario!",subTitle:"Seguiremos desarrollando más talleres para tí"};k.push({name:"enviado",query:v})}catch(v){console.error("Error:",v.response.data.errors[0])}finally{g.value=!1}},i=()=>{window.scrollTo({top:200,behavior:"smooth"})},S=()=>{H.error("Debes de completar todos los datos"),i()};return A(async()=>{try{const{data:m}=await T({url:`/testin-questions/${r.workshop.id}`,method:"GET"});s.value=m,y.value=!1}catch(m){console.error("Error de red:",m)}}),(m,v)=>{const B=_("a-spin"),w=_("a-radio"),I=_("a-radio-group"),G=_("a-form-item"),M=_("a-button"),Q=_("a-form");return y.value?(o(),b(B,{key:0})):(o(),b(Q,{key:1,layout:"vertical",model:t,autocomplete:"off",onFinish:E,onFinishFailed:S},{default:l(()=>[s.value?(o(),h("div",W,[(o(),h(q,null,N(5,(R,d)=>e("div",{class:"box",key:d},[e("span",X,"Pregunta "+f(d+1),1),e("h3",Z,f(s.value["question"+(d+1)]),1),u(G,{name:`te${d+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:l(()=>[u(I,{class:"group-radios",value:t[`te${d+1}`],"onUpdate:value":F=>t[`te${d+1}`]=F},{default:l(()=>[(o(),h(q,null,N(3,(F,$)=>u(w,{key:$,class:"item-radio",value:$+1},{default:l(()=>[a(f(s.value[`question${d+1}_opt${$+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):C("",!0),e("div",j,[ee,te,u(I,{class:"group-radios",value:t.social,"onUpdate:value":v[0]||(v[0]=R=>t.social=R)},{default:l(()=>[u(w,{class:"item-radio",value:"rrss"},{default:l(()=>[a("Redes sociales")]),_:1}),u(w,{class:"item-radio",value:"sms"},{default:l(()=>[a("SMS")]),_:1}),u(w,{class:"item-radio",value:"correo"},{default:l(()=>[a("Correo")]),_:1})]),_:1},8,["value"])]),e("div",se,[u(M,{type:"primary","html-type":"submit",loading:g.value},{default:l(()=>[a("ENVIAR")]),_:1},8,["loading"])])]),_:1},8,["model"]))}}},ae=U(oe,[["__scopeId","data-v-c94cdc93"]]);const c=n=>(D("data-v-85fa71b8"),n=n(),P(),n),ne={class:"invitation"},re={key:1,class:"container"},le=c(()=>e("div",{class:"header"},[e("img",{class:"logo-ruta",src:L,alt:""})],-1)),ce=c(()=>e("div",{class:"lazing"},[e("h3",null,"TEST DE ENTRADA")],-1)),ie={key:0,class:"invitacion-info text-html"},ue=c(()=>e("p",null,[a(" ¡Capacítate con "),e("b",null,"#RUTADIGITAL"),a(" del Ministerio de Producción del Perú, a través de "),e("b",null,"#TuEmpresa"),a("! ")],-1)),de=c(()=>e("br",null,null,-1)),_e=c(()=>e("b",null,"Taller: ",-1)),pe=c(()=>e("b",null,"Fecha: ",-1)),me=c(()=>e("b",null,"Exponente: ",-1)),ve=c(()=>e("div",null,[e("img",{class:"img-wom",src:O,alt:""})],-1)),he=c(()=>e("br",null,null,-1)),fe={__name:"TestEntrada",setup(n){const r=p(!0),g=J(),s=p(null),k=p(!1),y=p(null),t=i=>{k.value=!0,y.value=i},E=async()=>{try{const i=await T({url:`/get-workshop-slug/${g.params.slug}`,method:"GET"});s.value=i.workshop,r.value=!1}catch(i){console.error("Error de red:",i)}};return A(()=>{E()}),(i,S)=>{const x=_("a-spin");return o(),h("section",ne,[r.value?(o(),b(x,{key:0})):(o(),h("div",re,[le,ce,s.value?(o(),h("div",ie,[e("div",null,[ue,de,e("p",null,[_e,a(" "+f(s.value.title),1)]),e("p",null,[pe,a(" "+f(s.value.workshop_date),1)]),e("p",null,[me,a(" "+f(s.value.exponent_name),1)])]),ve])):C("",!0),he,k.value?(o(),b(ae,{key:2,workshop:s.value,rucdni:y.value},null,8,["workshop","rucdni"])):(o(),b(K,{key:1,onRegisterMYPE:t}))]))])}}},Ee=U(fe,[["__scopeId","data-v-85fa71b8"]]);export{Ee as default};
