import{_ as H}from"./tuempresa-7c20bfb9.js";import{R as L}from"./ModalRegistroMYPE-188f2460.js";import{l as V,u as j,r as h,a as S,n as A,b as u,o as y,d as D,e,c as s,j as c,t as p,z as Y,w as i,m as v,h as J,f,s as K,p as Q,k as W}from"./index-b4c6ca84.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const l=g=>(Q("data-v-3818988c"),g=g(),W(),g),Z={class:"background"},ee={class:"container"},oe={class:"questionary"},te={class:"box"},ae=l(()=>e("div",{class:"text-center"},[e("img",{src:H,alt:""}),e("div",{class:"head-title"},[e("h2",{class:"title"},"Confirmación de asistencia a talleres de Ruta Digital")])],-1)),ne={key:0,class:"box-info-workshop"},se=l(()=>e("b",null,"Taller: ",-1)),le=l(()=>e("b",null,"Expositor: ",-1)),re=l(()=>e("b",null,"Fecha del taller:",-1)),ie={class:"box"},ce={key:0,class:"personal-info"},ue=l(()=>e("h4",{class:"c-primary"},"Mis Datos",-1)),de=l(()=>e("span",{class:"name"},"Nombres y Apellidos: ",-1)),_e=l(()=>e("span",{class:"name"},"Correo electrónico: ",-1)),pe=l(()=>e("span",{class:"name"},"Número de contácto: ",-1)),me=l(()=>e("br",null,null,-1)),he={class:"box"},ve=["innerHTML"],fe=l(()=>e("br",null,null,-1)),ge=l(()=>e("h3",{class:"box-title"},"¿Estas interesado en participar en este taller de Ruta Digital?",-1)),ye={class:"box"},be=l(()=>e("span",{class:"box-mensagge"},"Opcional",-1)),we=l(()=>e("h3",{class:"box-title"},"¿Cómo te enteraste del taller?",-1)),ke={class:"box-btn"},xe={__name:"InvitacionPage",setup(g){const C=V(),N=j(),E=h(null),b=h(!1),w=h(!1),k=h(!1),T=h([]),r=S({id:null,exponent:null,idIn:null,idOut:null,dateTestIn:null,dateTestOut:null,title:null,workShopDate:null}),o=S({name:null,email:null,phone:null,ruc:null,dni:null}),n=S({id_questionnaire:null,ruc:null,dni:null,attendance:null,social:null}),M=()=>{n.ruc=n.ruc.replace(/\D/g,"")},U=a=>{o.name=a.name_complete,o.email=a.email,o.phone=a.phone,o.ruc=a.ruc,o.dni=a.dni_number},I=async()=>{o.ruc=null,o.dni=null;let a=n.ruc;if(!a)return v.warning("Ingresa el número de RUC");w.value=!0;try{const{data:t}=await f({url:`/data-mype/${a}`,method:"GET"});t.ruc&&(o.ruc=t.ruc,o.name=t.name_complete,o.email=t.email,o.phone=t.phone,o.dni=t.dni_number)}catch(t){if(console.error("Error de red:",t.response.status),o.name=null,o.email=null,o.phone=null,o.dni=null,t.response.status==404)try{const{data:d}=await f({url:`/api-data-mype/${n.ruc}`,method:"GET"}),x={razonSocial:d.razonSocial,numeroDocumento:d.numeroDocumento};E.value=x,b.value=!0}catch(d){v.warning("El número de RUC no es válido"),console.error("Error de red:",d)}}finally{w.value=!1}},P=()=>{window.scrollTo({top:200,behavior:"smooth"})},$=async()=>{if(o.name==null&&o.dni==null&&o.ruc==null){I(),v.warning("Revisando sus datos"),P();return}const a={ruc_mype:o.ruc,dni_mype:o.dni,workshop_id:r.id,email:o.email,is_participant:n.attendance};k.value=!0;try{const t=await J({url:`/accept-invitation/${r.id}`,method:"POST",data:a});v.success(t.message),N.push({name:"enviado"}),await f({url:`/add-point/${r.id}/${n.social}`,method:"PUT"})}catch(t){console.error("Error:",t.response.data.errors[0])}finally{k.value=!1}},F=()=>{v.error("Debes de completar todos los datos"),P()},q=async a=>{try{const{data:t}=await f({url:`/invitations/${a}`,method:"GET"});T.value=t}catch(t){console.error("Error de red:",t)}};return A(async()=>{try{const a=await f({url:`/get-workshop-slug/${C.params.slug}`,method:"GET"});r.id=a.workshop.id,r.exponent=a.workshop.exponent_name,r.title=a.workshop.title,r.workShopDate=a.workshop.workshop_date,await q(a.workshop.id_invitation)}catch(a){console.error("Error de red:",a)}}),(a,t)=>{const d=u("a-divider"),x=u("a-skeleton"),z=u("a-input-search"),O=u("a-form-item"),m=u("a-radio"),R=u("a-radio-group"),B=u("a-button"),G=u("a-form");return y(),D("div",Z,[e("section",ee,[e("div",oe,[e("div",te,[ae,s(d),r.title?(y(),D("div",ne,[e("span",null,[se,c(p(r.title),1)]),e("span",null,[le,c(p(r.exponent),1)]),e("span",null,[re,c(" "+p(r.workShopDate),1)])])):(y(),Y(x,{key:1,active:""}))]),s(G,{layout:"vertical",model:n,autocomplete:"off",onFinish:$,onFinishFailed:F},{default:i(()=>[e("div",ie,[s(O,{class:"search-ruc f-15",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:i(()=>[s(z,{maxlength:15,loading:w.value,size:"large",value:n.ruc,"onUpdate:value":t[0]||(t[0]=_=>n.ruc=_),"enter-button":"",onSearch:I,onInput:M},null,8,["loading","value"])]),_:1}),o.name?(y(),D("div",ce,[ue,e("div",null,[de,e("span",null,p(o.name),1)]),e("div",null,[_e,e("span",null,p(o.email),1)]),e("div",null,[pe,e("span",null,p(o.phone),1)]),me])):K("",!0)]),e("div",he,[e("div",{class:"html-invitation",innerHTML:T.value.content},null,8,ve),fe,ge,s(R,{value:n.attendance,"onUpdate:value":t[1]||(t[1]=_=>n.attendance=_)},{default:i(()=>[s(m,{value:"si"},{default:i(()=>[c("SI")]),_:1}),s(m,{value:"no"},{default:i(()=>[c("NO")]),_:1})]),_:1},8,["value"])]),e("div",ye,[be,we,s(R,{class:"group-radios",value:n.social,"onUpdate:value":t[2]||(t[2]=_=>n.social=_)},{default:i(()=>[s(m,{class:"item-radio",value:"rrss"},{default:i(()=>[c("Redes sociales")]),_:1}),s(m,{class:"item-radio",value:"sms"},{default:i(()=>[c("SMS")]),_:1}),s(m,{class:"item-radio",value:"correo"},{default:i(()=>[c("Correo")]),_:1})]),_:1},8,["value"])]),e("div",ke,[s(B,{type:"primary","html-type":"submit",size:"large",loading:k.value},{default:i(()=>[c("Enviar respuestas")]),_:1},8,["loading"])])]),_:1},8,["model"])])]),s(L,{title:"Participar con mi empresa",open:b.value,rucProp:E.value,onHandleCloseModal:t[3]||(t[3]=_=>b.value=!1),onHandleSetData:U},null,8,["open","rucProp"])])}}},Pe=X(xe,[["__scopeId","data-v-3818988c"]]);export{Pe as default};