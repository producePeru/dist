import{_ as L}from"./nuevaPersonaCompany-ed7b2d3e.js";import{u as M,r as g,a as O,j as R,b as i,o as l,d,p as h,q as k,c as u,w as y,F as E,v as D,e as t,t as r,i as m,f as $,m as z,D as Q}from"./index-6e4bbc85.js";import{E as Y}from"./EmpresaUsuario-317528bf.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./selects-c77e0024.js";const j={key:0},H={class:"box-mensagge"},J={class:"box-title"},K={key:1,class:"box rate"},W={class:"box-title"},X={class:"rate-wrapper"},Z={class:"box-title"},tt={class:"box-title"},et={key:2,class:"box"},st={class:"box-title"},ot={class:"box-btn"},at={__name:"TestSalidaQuestions",props:["workshop","rucdni"],setup(F){const c=F,T=M(),n=g(!1),a=g(null),f=g(!0),e=O({ruc:null,dni:null,ts1:null,ts2:null,ts3:null,ts4:null,ts5:null,rate_1:null,rate_2:null,rate_3:null,comments:null}),w=()=>{window.scrollTo({top:200,behavior:"smooth"})},_=async()=>{const b={ts1:e.ts1,ts2:e.ts2,ts3:e.ts3,ts4:e.ts4,ts5:e.ts5,c1:e.rate_1,c2:e.rate_2,c3:e.rate_3,suggestions:e.comments,ruc_mype:c.rucdni.ruc,dni_mype:c.rucdni.number_document,workshop_id:c.workshop.id};n.value=!0;try{await $({url:`/sending-test-answers/${c.workshop.id_out}`,method:"POST",data:b});const o={status:"success",title:"¡Gracias por participar de este formulario!",subTitle:"Seguiremos desarrollando más talleres para tí"};T.push({name:"enviado",query:o})}catch(o){console.error("Error:",o.response.data.errors[0])}finally{n.value=!1}},s=()=>{z.error("Debes de completar todos los datos"),w()};return R(async()=>{try{const{data:b}=await $({url:`/testout-questions/${c.workshop.id}`,method:"GET"});a.value=b,f.value=!1}catch(b){console.error("Error de red:",b)}}),(b,o)=>{const I=i("a-spin"),N=i("a-radio"),P=i("a-radio-group"),V=i("a-form-item"),x=i("a-rate"),B=i("a-textarea"),C=i("a-button"),G=i("a-form");return l(),d(E,null,[f.value?(l(),h(I,{key:0})):k("",!0),u(G,{layout:"vertical",model:e,autocomplete:"off",onFinish:_,onFinishFailed:s},{default:y(()=>[a.value?(l(),d("div",j,[(l(),d(E,null,D(5,(p,v)=>t("div",{class:"box",key:v},[t("span",H,"Pregunta "+r(v+1),1),t("h3",J,r(a.value["question"+(v+1)]),1),u(V,{name:`ts${v+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:y(()=>[u(P,{class:"group-radios",value:e[`ts${v+1}`],"onUpdate:value":q=>e[`ts${v+1}`]=q},{default:y(()=>[(l(),d(E,null,D(3,(q,S)=>u(N,{key:S,class:"item-radio",value:S+1},{default:y(()=>[m(r(a.value[`question${v+1}_opt${S+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):k("",!0),a.value?(l(),d("div",K,[t("div",null,[t("h3",W,r(a.value.satistaction1),1),u(x,{class:"star-rate",value:e.rate_1,"onUpdate:value":o[0]||(o[0]=p=>e.rate_1=p)},null,8,["value"])]),t("div",X,[t("h3",Z,r(a.value.satistaction2),1),u(x,{class:"star-rate",value:e.rate_2,"onUpdate:value":o[1]||(o[1]=p=>e.rate_2=p)},null,8,["value"])]),t("div",null,[t("h3",tt,r(a.value.satistaction3),1),u(x,{class:"star-rate",value:e.rate_3,"onUpdate:value":o[2]||(o[2]=p=>e.rate_3=p)},null,8,["value"])])])):k("",!0),a.value?(l(),d("div",et,[o[4]||(o[4]=t("span",{class:"box-mensagge"},"Sugerencias",-1)),t("h3",st,r(a.value.comments),1),u(B,{value:e.comments,"onUpdate:value":o[3]||(o[3]=p=>e.comments=p),"allow-clear":""},null,8,["value"])])):k("",!0),t("div",ot,[u(C,{type:"primary","html-type":"submit",loading:n.value},{default:y(()=>o[5]||(o[5]=[m("ENVIAR")])),_:1},8,["loading"])])]),_:1},8,["model"])],64)}}},lt=A(at,[["__scopeId","data-v-8a3b3bcd"]]);const nt={class:"invitation"},rt={key:1,class:"container"},ut={key:0,class:"invitacion-info text-html"},it={__name:"TestSalida",setup(F){const c=g(!0),T=Q(),n=g(null),a=g(!0),f=g(null),e=_=>{a.value=!0,f.value=_},w=async()=>{try{const _=await $({url:`/get-workshop-slug/${T.params.slug}`,method:"GET"});n.value=_.workshop,c.value=!1}catch(_){console.error("Error de red:",_)}};return R(()=>{w()}),(_,s)=>{const U=i("a-spin");return l(),d("section",nt,[c.value?(l(),h(U,{key:0})):(l(),d("div",rt,[s[6]||(s[6]=t("div",{class:"header"},[t("img",{class:"logo-ruta",src:L,alt:""})],-1)),s[7]||(s[7]=t("div",{class:"lazing"},[t("h3",null,"TEST DE SALIDA")],-1)),n.value?(l(),d("div",ut,[t("div",null,[s[3]||(s[3]=t("p",null,[m(" ¡Capacítate con "),t("b",null,"#RUTADIGITAL"),m(" del Ministerio de Producción del Perú, a través de "),t("b",null,"#TuEmpresa"),m("! ")],-1)),s[4]||(s[4]=t("br",null,null,-1)),t("p",null,[s[0]||(s[0]=t("b",null,"Taller: ",-1)),m(" "+r(n.value.title),1)]),t("p",null,[s[1]||(s[1]=t("b",null,"Exponente: ",-1)),m(" "+r(n.value.exponent_name),1)]),t("p",null,[s[2]||(s[2]=t("b",null,"Fecha: ",-1)),m(" "+r(n.value.workshop_date),1)])]),s[5]||(s[5]=t("div",null,[t("img",{class:"img-taller",src:"https://img.freepik.com/vector-gratis/proyecto-inicio-negocio-lanzar-idea-exitosa_107791-13390.jpg",alt:""})],-1))])):k("",!0),s[8]||(s[8]=t("br",null,null,-1)),a.value?(l(),h(lt,{key:2,workshop:n.value,rucdni:f.value},null,8,["workshop","rucdni"])):(l(),h(Y,{key:1,onRegisterMYPE:e}))]))])}}},vt=A(it,[["__scopeId","data-v-b5f78b83"]]);export{vt as default};
