import{_ as z}from"./tuempresa-7c20bfb9.js";import{R as G}from"./ModalRegistroMYPE-3e686bb1.js";import{i as V,u as B,r as v,a as k,j,b as u,o as C,d as P,e,c as n,g as c,t as _,w as r,m as f,k as m,n as A,p as Y,h as J}from"./index-96f21589.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const l=g=>(Y("data-v-98176537"),g=g(),J(),g),Q={class:"background"},W={class:"container"},X={class:"questionary"},Z={class:"box"},ee=l(()=>e("div",{class:"text-center"},[e("img",{src:z,alt:""}),e("div",{class:"head-title"},[e("h2",{class:"title"},"Confirmación de asistencia a talleres de Ruta Digital")])],-1)),oe={class:"box-info-workshop"},ae=l(()=>e("b",null,"Taller: ",-1)),te=l(()=>e("b",null,"Expositor: ",-1)),ne=l(()=>e("b",null,"Fecha del taller:",-1)),se={class:"box"},le={key:0,class:"personal-info"},re=l(()=>e("h4",{class:"c-primary"},"Mis Datos",-1)),ie=l(()=>e("span",{class:"name"},"Nombres y Apellidos: ",-1)),ce=l(()=>e("span",{class:"name"},"Correo electrónico: ",-1)),ue=l(()=>e("span",{class:"name"},"Número de contácto: ",-1)),de=l(()=>e("br",null,null,-1)),pe={class:"box"},_e=["innerHTML"],me=["innerHTML"],he=l(()=>e("h3",{class:"box-title"},"¿Estas interesado en participar en este taller de Ruta Digital?",-1)),ve={class:"box"},fe=l(()=>e("span",{class:"box-mensagge"},"Opcional",-1)),ge=l(()=>e("h3",{class:"box-title"},"¿Cómo te enteraste del taller?",-1)),be={class:"box-btn"},ye={__name:"InvitacionPage",setup(g){const M=V(),N=B(),D=v(null),b=v(!1),y=v(!1),w=v(!1),x=v([]),i=k({id:null,exponent:null,idIn:null,idOut:null,dateTestIn:null,dateTestOut:null,title:null,workShopDate:null}),a=k({name:null,email:null,phone:null,ruc:null,dni:null}),s=k({id_questionnaire:null,ruc:null,dni:null,attendance:null,social:null}),U=()=>{s.ruc=s.ruc.replace(/\D/g,"")},$=t=>{a.name=t.name_complete,a.email=t.email,a.phone=t.phone,a.ruc=t.ruc,a.dni=t.dni_number},E=async()=>{a.ruc=null,a.dni=null;let t=s.ruc;if(!t)return f.warning("Ingresa el número de RUC");y.value=!0;try{const{data:o}=await m({url:`/data-mype/${t}`,method:"GET"});o.ruc&&(a.ruc=o.ruc,a.name=o.name_complete,a.email=o.email,a.phone=o.phone,a.dni=o.dni_number)}catch(o){if(console.error("Error de red:",o.response.status),a.name=null,a.email=null,a.phone=null,a.dni=null,o.response.status==404)try{const{data:d}=await m({url:`/api-data-mype/${s.ruc}`,method:"GET"}),S={razonSocial:d.razonSocial,numeroDocumento:d.numeroDocumento};D.value=S,b.value=!0}catch(d){f.warning("El número de RUC no es válido"),console.error("Error de red:",d)}}finally{y.value=!1}},T=()=>{window.scrollTo({top:200,behavior:"smooth"})},F=async()=>{if(a.name==null&&a.dni==null&&a.ruc==null){E(),f.warning("Revisando sus datos"),T();return}const t={ruc_mype:a.ruc,dni_mype:a.dni,workshop_id:i.id,email:a.email,is_participant:s.attendance};w.value=!0;try{const o=await m({url:`/accept-invitation/${i.id}`,method:"POST",data:t});f.success(o.message),N.push({name:"enviado"}),await m({url:`/addPoint/${i.id}/${s.social}`,method:"PUT"})}catch(o){console.error("Error:",o.response.data.errors[0])}finally{w.value=!1}},H=()=>{f.error("Debes de completar todos los datos"),T()},L=async t=>{try{const{data:o}=await m({url:`/invitations/${t}`,method:"GET"});x.value=o,console.log(o)}catch(o){console.error("Error de red:",o)}};return j(async()=>{try{const t=await m({url:`/get-workshop-slug/${M.params.slug}`,method:"GET"});i.id=t.workshop.id,i.exponent=t.workshop.exponent_name,i.title=t.workshop.title,i.workShopDate=t.workshop.workshop_date,await L(t.workshop.id_invitation)}catch(t){console.error("Error de red:",t)}}),(t,o)=>{const d=u("a-divider"),S=u("a-input-search"),O=u("a-form-item"),I=u("a-button"),h=u("a-radio"),R=u("a-radio-group"),q=u("a-form");return C(),P("div",Q,[e("section",W,[e("div",X,[e("div",Z,[ee,n(d),e("div",oe,[e("span",null,[ae,c(_(i.title),1)]),e("span",null,[te,c(_(i.exponent),1)]),e("span",null,[ne,c(" "+_(i.workShopDate),1)])])]),n(q,{layout:"vertical",model:s,autocomplete:"off",onFinish:F,onFinishFailed:H},{default:r(()=>[e("div",se,[n(O,{class:"search-ruc f-15",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:r(()=>[n(S,{maxlength:15,loading:y.value,size:"large",value:s.ruc,"onUpdate:value":o[0]||(o[0]=p=>s.ruc=p),"enter-button":"",onSearch:E,onInput:U},null,8,["loading","value"])]),_:1}),a.name?(C(),P("div",le,[re,e("div",null,[ie,e("span",null,_(a.name),1)]),e("div",null,[ce,e("span",null,_(a.email),1)]),e("div",null,[ue,e("span",null,_(a.phone),1)]),de,n(I,null,{default:r(()=>[c("Editar datos")]),_:1})])):A("",!0)]),e("div",pe,[e("p",{class:"p-text",innerHTML:x.value.text1},null,8,_e),e("p",{class:"p-text",innerHTML:x.value.text2},null,8,me),he,n(R,{value:s.attendance,"onUpdate:value":o[1]||(o[1]=p=>s.attendance=p)},{default:r(()=>[n(h,{value:"si"},{default:r(()=>[c("SI")]),_:1}),n(h,{value:"no"},{default:r(()=>[c("NO")]),_:1})]),_:1},8,["value"])]),e("div",ve,[fe,ge,n(R,{class:"group-radios",value:s.social,"onUpdate:value":o[2]||(o[2]=p=>s.social=p)},{default:r(()=>[n(h,{class:"item-radio",value:"rrss"},{default:r(()=>[c("Redes sociales")]),_:1}),n(h,{class:"item-radio",value:"sms"},{default:r(()=>[c("SMS")]),_:1}),n(h,{class:"item-radio",value:"correo"},{default:r(()=>[c("Correo")]),_:1})]),_:1},8,["value"])]),e("div",be,[n(I,{type:"primary","html-type":"submit",size:"large",loading:w.value},{default:r(()=>[c("Enviar respuestas")]),_:1},8,["loading"])])]),_:1},8,["model"])])]),n(G,{open:b.value,onHandleCloseModal:o[3]||(o[3]=p=>b.value=!1),rucProp:D.value,onHandleSetData:$},null,8,["open","rucProp"])])}}},Ee=K(ye,[["__scopeId","data-v-98176537"]]);export{Ee as default};
