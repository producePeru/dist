import{_ as K}from"./tuempresa-7c20bfb9.js";import{R as Q}from"./ModalRegistroMYPE-690b9c49.js";import{i as W,r as v,u as X,a as $,s as Z,j,b as _,o as f,d as g,e,c as l,g as i,t as u,w as c,v as ee,m as y,k as m,n as N,F as P,q,p as oe,h as te}from"./index-21e7904b.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const r=w=>(oe("data-v-5c3fc0ad"),w=w(),te(),w),se={class:"background"},ne={class:"container"},le={class:"questionary"},re={class:"box"},ue=r(()=>e("div",{class:"text-center"},[e("img",{src:K,alt:""}),e("h1",{class:"title"},"Test de entrada")],-1)),ce={class:"box-info-workshop"},ie=r(()=>e("b",null,"Taller: ",-1)),de=r(()=>e("b",null,"Expositor: ",-1)),_e=r(()=>e("b",null,"Fecha del taller:",-1)),pe=r(()=>e("b",null,"Fecha de expiración del cuestionario:",-1)),me={class:"box"},he={key:0,class:"personal-info"},ve=r(()=>e("h4",{class:"c-primary"},"Mis Datos",-1)),fe=r(()=>e("span",{class:"name"},"Nombres y Apellidos: ",-1)),ge=r(()=>e("span",{class:"name"},"Correo electrónico: ",-1)),ye=r(()=>e("span",{class:"name"},"Número de contácto: ",-1)),we=r(()=>e("br",null,null,-1)),be={key:0},ke={class:"box-mensagge"},Te={class:"box-title"},Ee={class:"box"},Se=r(()=>e("span",{class:"box-mensagge"},"Opcional",-1)),xe=r(()=>e("h3",{class:"box-title"},"¿Cómo te enteraste del taller?",-1)),De={class:"box-btn"},$e={__name:"TestEntrada",setup(w){const O=W(),I=v(null),T=v(!1),E=v(!1),S=v(!1),b=v(null),Y=X(),n=$({id:null,exponent:null,idIn:null,idOut:null,dateTestIn:null,dateTestOut:null,title:null,workShopDate:null}),o=$({name:null,email:null,phone:null,ruc:null,dni:null}),s=$({te1:null,te2:null,te3:null,te4:null,te5:null,social:null}),z=Z(()=>ee(n.dateTestIn).format("DD-MM-YYYY")),G=()=>{s.ruc=s.ruc.replace(/\D/g,"")},V=t=>{o.name=t.name_complete,o.email=t.email,o.phone=t.phone,o.ruc=t.ruc,o.dni=t.dni_number},C=async()=>{o.ruc=null,o.dni=null;let t=s.ruc;if(!t)return y.warning("Ingresa el número de RUC");E.value=!0;try{const{data:a}=await m({url:`/data-mype/${t}`,method:"GET"});a.ruc&&(o.ruc=a.ruc,o.name=a.name_complete,o.email=a.email,o.phone=a.phone,o.dni=a.dni_number)}catch(a){if(console.error("Error de red:",a.response.status),o.name=null,o.email=null,o.phone=null,o.dni=null,a.response.status==404)try{const{data:p}=await m({url:`/api-data-mype/${s.ruc}`,method:"GET"}),x={razonSocial:p.razonSocial,numeroDocumento:p.numeroDocumento};I.value=x,T.value=!0}catch(p){y.warning("El número de RUC no es válido"),console.error("Error de red:",p)}}finally{E.value=!1}},B=async()=>{if(o.name==null&&o.dni==null&&o.ruc==null){C(),y.warning("Revisando sus respuestas"),R();return}const t={te1:s.te1,te2:s.te2,te3:s.te3,te4:s.te4,te5:s.te5,social:s.social,ruc_mype:o.ruc,dni_mype:o.dni,workshop_id:n.id};S.value=!0;try{const a=await m({url:`/sending-test-answers/${n.id}`,method:"POST",data:t});y.success(a.message),Y.push({name:"enviado"}),await m({url:`/addPoint/${n.id}/${s.social}`,method:"PUT"})}catch(a){console.error("Error:",a.response.data.errors[0])}finally{S.value=!1}},R=()=>{window.scrollTo({top:200,behavior:"smooth"})},L=()=>{y.error("Debes de completar todos los datos"),R()},A=async t=>{try{const{data:a}=await m({url:`/testin/${t}`,method:"GET"});b.value=a}catch(a){console.error("Error de red:",a)}};return j(async()=>{try{const t=await m({url:`/get-workshop-slug/${O.params.slug}`,method:"GET"});n.id=t.workshop.id,n.exponent=t.workshop.exponent_name,n.idIn=t.workshop.id_in,n.idOut=t.workshop.id_out,n.dateTestIn=t.workshop.test_in_date,n.dateTestOut=t.workshop.test_out_date,n.title=t.workshop.title,n.workShopDate=t.workshop.workshop_date,await A(t.workshop.id)}catch(t){console.error("Error de red:",t)}}),(t,a)=>{const p=_("a-divider"),x=_("a-input-search"),F=_("a-form-item"),k=_("a-radio"),U=_("a-radio-group"),H=_("a-button"),J=_("a-form");return f(),g("div",se,[e("section",ne,[e("div",le,[e("div",re,[ue,l(p),e("div",ce,[e("span",null,[ie,i(u(n.title),1)]),e("span",null,[de,i(u(n.exponent),1)]),e("span",null,[_e,i(" "+u(n.workShopDate),1)]),e("span",null,[pe,i(" "+u(z.value),1)])])]),l(J,{layout:"vertical",model:s,autocomplete:"off",onFinish:B,onFinishFailed:L},{default:c(()=>[e("div",me,[l(F,{class:"search-ruc f-15",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:c(()=>[l(x,{maxlength:15,loading:E.value,size:"large",value:s.ruc,"onUpdate:value":a[0]||(a[0]=h=>s.ruc=h),"enter-button":"",onSearch:C,onInput:G},null,8,["loading","value"])]),_:1}),o.name?(f(),g("div",he,[ve,e("div",null,[fe,e("span",null,u(o.name),1)]),e("div",null,[ge,e("span",null,u(o.email),1)]),e("div",null,[ye,e("span",null,u(o.phone),1)]),we])):N("",!0)]),b.value?(f(),g("div",be,[(f(),g(P,null,q(5,(h,d)=>e("div",{class:"box",key:d},[e("span",ke,"Pregunta "+u(d+1),1),e("h3",Te,u(b.value["question"+(d+1)]),1),l(F,{name:`te${d+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:c(()=>[l(U,{class:"group-radios",value:s[`te${d+1}`],"onUpdate:value":M=>s[`te${d+1}`]=M},{default:c(()=>[(f(),g(P,null,q(3,(M,D)=>l(k,{key:D,class:"item-radio",value:D+1},{default:c(()=>[i(u(b.value[`question${d+1}_opt${D+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):N("",!0),e("div",Ee,[Se,xe,l(U,{class:"group-radios",value:s.social,"onUpdate:value":a[1]||(a[1]=h=>s.social=h)},{default:c(()=>[l(k,{class:"item-radio",value:"rrss"},{default:c(()=>[i("Redes sociales")]),_:1}),l(k,{class:"item-radio",value:"sms"},{default:c(()=>[i("SMS")]),_:1}),l(k,{class:"item-radio",value:"correo"},{default:c(()=>[i("Correo")]),_:1})]),_:1},8,["value"])]),e("div",De,[l(H,{type:"primary","html-type":"submit",size:"large",loading:S.value},{default:c(()=>[i("Enviar respuestas")]),_:1},8,["loading"])])]),_:1},8,["model"])])]),l(Q,{open:T.value,onHandleCloseModal:a[2]||(a[2]=h=>T.value=!1),rucProp:I.value,onHandleSetData:V},null,8,["open","rucProp"])])}}},Me=ae($e,[["__scopeId","data-v-5c3fc0ad"]]);export{Me as default};
