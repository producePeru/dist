import{_ as z}from"./nuevaPersonaCompany-ed7b2d3e.js";import{u as Q,r as g,a as Y,k as A,b as c,o,d as i,q as w,s as k,c as u,w as y,F as E,B as R,e,t as r,i as v,v as I,g as j,p as D,j as N,y as H}from"./index-35a7835d.js";import{E as J}from"./EmpresaUsuario-a4dc784e.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./selects-56d2dd8e.js";const K=n=>(D("data-v-8a3b3bcd"),n=n(),N(),n),W={key:0},X={class:"box-mensagge"},Z={class:"box-title"},ee={key:1,class:"box rate"},te={class:"box-title"},se={class:"rate-wrapper"},oe={class:"box-title"},ae={class:"box-title"},ne={key:2,class:"box"},le=K(()=>e("span",{class:"box-mensagge"},"Sugerencias",-1)),re={class:"box-title"},ue={class:"box-btn"},ce={__name:"TestSalidaQuestions",props:["workshop","rucdni"],setup(n){const d=n,$=Q(),l=g(!1),s=g(null),f=g(!0),t=Y({ruc:null,dni:null,ts1:null,ts2:null,ts3:null,ts4:null,ts5:null,rate_1:null,rate_2:null,rate_3:null,comments:null}),T=()=>{window.scrollTo({top:200,behavior:"smooth"})},p=async()=>{const b={ts1:t.ts1,ts2:t.ts2,ts3:t.ts3,ts4:t.ts4,ts5:t.ts5,c1:t.rate_1,c2:t.rate_2,c3:t.rate_3,suggestions:t.comments,ruc_mype:d.rucdni.ruc,dni_mype:d.rucdni.number_document,workshop_id:d.workshop.id};l.value=!0;try{await I({url:`/sending-test-answers/${d.workshop.id_out}`,method:"POST",data:b});const a={status:"success",title:"¡Gracias por participar de este formulario!",subTitle:"Seguiremos desarrollando más talleres para tí"};$.push({name:"enviado",query:a})}catch(a){console.error("Error:",a.response.data.errors[0])}finally{l.value=!1}},F=()=>{j.error("Debes de completar todos los datos"),T()};return A(async()=>{try{const{data:b}=await I({url:`/testout-questions/${d.workshop.id}`,method:"GET"});s.value=b,f.value=!1}catch(b){console.error("Error de red:",b)}}),(b,a)=>{const P=c("a-spin"),V=c("a-radio"),C=c("a-radio-group"),G=c("a-form-item"),S=c("a-rate"),L=c("a-textarea"),M=c("a-button"),O=c("a-form");return o(),i(E,null,[f.value?(o(),w(P,{key:0})):k("",!0),u(O,{layout:"vertical",model:t,autocomplete:"off",onFinish:p,onFinishFailed:F},{default:y(()=>[s.value?(o(),i("div",W,[(o(),i(E,null,R(5,(m,h)=>e("div",{class:"box",key:h},[e("span",X,"Pregunta "+r(h+1),1),e("h3",Z,r(s.value["question"+(h+1)]),1),u(G,{name:`ts${h+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:y(()=>[u(C,{class:"group-radios",value:t[`ts${h+1}`],"onUpdate:value":q=>t[`ts${h+1}`]=q},{default:y(()=>[(o(),i(E,null,R(3,(q,x)=>u(V,{key:x,class:"item-radio",value:x+1},{default:y(()=>[v(r(s.value[`question${h+1}_opt${x+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):k("",!0),s.value?(o(),i("div",ee,[e("div",null,[e("h3",te,r(s.value.satistaction1),1),u(S,{class:"star-rate",value:t.rate_1,"onUpdate:value":a[0]||(a[0]=m=>t.rate_1=m)},null,8,["value"])]),e("div",se,[e("h3",oe,r(s.value.satistaction2),1),u(S,{class:"star-rate",value:t.rate_2,"onUpdate:value":a[1]||(a[1]=m=>t.rate_2=m)},null,8,["value"])]),e("div",null,[e("h3",ae,r(s.value.satistaction3),1),u(S,{class:"star-rate",value:t.rate_3,"onUpdate:value":a[2]||(a[2]=m=>t.rate_3=m)},null,8,["value"])])])):k("",!0),s.value?(o(),i("div",ne,[le,e("h3",re,r(s.value.comments),1),u(L,{value:t.comments,"onUpdate:value":a[3]||(a[3]=m=>t.comments=m),"allow-clear":""},null,8,["value"])])):k("",!0),e("div",ue,[u(M,{type:"primary","html-type":"submit",loading:l.value},{default:y(()=>[v("ENVIAR")]),_:1},8,["loading"])])]),_:1},8,["model"])],64)}}},ie=B(ce,[["__scopeId","data-v-8a3b3bcd"]]);const _=n=>(D("data-v-b5f78b83"),n=n(),N(),n),_e={class:"invitation"},de={key:1,class:"container"},pe=_(()=>e("div",{class:"header"},[e("img",{class:"logo-ruta",src:z,alt:""})],-1)),me=_(()=>e("div",{class:"lazing"},[e("h3",null,"TEST DE SALIDA")],-1)),ve={key:0,class:"invitacion-info text-html"},he=_(()=>e("p",null,[v(" ¡Capacítate con "),e("b",null,"#RUTADIGITAL"),v(" del Ministerio de Producción del Perú, a través de "),e("b",null,"#TuEmpresa"),v("! ")],-1)),ge=_(()=>e("br",null,null,-1)),be=_(()=>e("b",null,"Taller: ",-1)),fe=_(()=>e("b",null,"Exponente: ",-1)),ye=_(()=>e("b",null,"Fecha: ",-1)),ke=_(()=>e("div",null,[e("img",{class:"img-taller",src:"https://img.freepik.com/vector-gratis/proyecto-inicio-negocio-lanzar-idea-exitosa_107791-13390.jpg",alt:""})],-1)),we=_(()=>e("br",null,null,-1)),$e={__name:"TestSalida",setup(n){const d=g(!0),$=H(),l=g(null),s=g(!0),f=g(null),t=p=>{s.value=!0,f.value=p},T=async()=>{try{const p=await I({url:`/get-workshop-slug/${$.params.slug}`,method:"GET"});l.value=p.workshop,d.value=!1}catch(p){console.error("Error de red:",p)}};return A(()=>{T()}),(p,F)=>{const U=c("a-spin");return o(),i("section",_e,[d.value?(o(),w(U,{key:0})):(o(),i("div",de,[pe,me,l.value?(o(),i("div",ve,[e("div",null,[he,ge,e("p",null,[be,v(" "+r(l.value.title),1)]),e("p",null,[fe,v(" "+r(l.value.exponent_name),1)]),e("p",null,[ye,v(" "+r(l.value.workshop_date),1)])]),ke])):k("",!0),we,s.value?(o(),w(ie,{key:2,workshop:l.value,rucdni:f.value},null,8,["workshop","rucdni"])):(o(),w(J,{key:1,onRegisterMYPE:t}))]))])}}},Fe=B($e,[["__scopeId","data-v-b5f78b83"]]);export{Fe as default};
