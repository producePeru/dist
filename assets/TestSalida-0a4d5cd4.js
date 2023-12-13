import{_ as W}from"./tuempresa-7c20bfb9.js";import{R as X}from"./ModalRegistroMYPE-3e686bb1.js";import{i as Z,u as j,r as b,a as U,s as ee,j as te,b as d,o as p,d as m,e,c as l,g as h,t as r,w as v,v as oe,m as g,k as w,n as k,F as q,q as M,p as se,h as ae}from"./index-96f21589.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";const c=y=>(se("data-v-3bf8ee0b"),y=y(),ae(),y),le={class:"background"},re={class:"container"},ue={class:"questionary"},ce={class:"box"},ie=c(()=>e("div",{class:"text-center"},[e("img",{src:W,alt:""}),e("h1",{class:"title"},"Test de salida")],-1)),de={class:"box-info-workshop"},_e=c(()=>e("b",null,"Taller: ",-1)),pe=c(()=>e("b",null,"Expositor: ",-1)),me=c(()=>e("b",null,"Fecha del taller:",-1)),he=c(()=>e("b",null,"Fecha de expiración del cuestionario:",-1)),ve={class:"box"},fe={key:0,class:"personal-info"},be=c(()=>e("h4",{class:"c-primary"},"Mis Datos",-1)),ge=c(()=>e("span",{class:"name"},"Nombres y Apellidos: ",-1)),we=c(()=>e("span",{class:"name"},"Correo electrónico: ",-1)),ye=c(()=>e("span",{class:"name"},"Número de contácto: ",-1)),ke=c(()=>e("br",null,null,-1)),xe={key:0},Se={class:"box-mensagge"},Te={class:"box-title"},De={key:1,class:"box rate"},Ee={class:"box-title"},Ie={class:"rate-wrapper"},Ue={class:"box-title"},$e={class:"box-title"},Re={key:2,class:"box"},Ce=c(()=>e("span",{class:"box-mensagge"},"Sugerencias",-1)),Fe={class:"box-title"},Ne={class:"box-btn"},qe={__name:"TestSalida",setup(y){const O=Z(),P=j(),x=b(!1),S=b(!1),T=b(!1),$=b(null),i=b(null),n=U({id:null,exponent:null,idIn:null,idOut:null,dateTestIn:null,dateTestOut:null,title:null,workShopDate:null}),o=U({name:null,email:null,phone:null,ruc:null,dni:null}),a=U({ruc:null,dni:null,ts1:null,ts2:null,ts3:null,ts4:null,ts5:null,rate_1:null,rate_2:null,rate_3:null,comments:null}),Y=ee(()=>oe(n.dateTestOut).format("DD-MM-YYYY")),z=()=>{a.ruc=a.ruc.replace(/\D/g,"")},G=s=>{o.name=s.name_complete,o.email=s.email,o.phone=s.phone,o.ruc=s.ruc,o.dni=s.dni_number},R=async()=>{let s=a.ruc;if(!s)return g.warning("Ingresa el número de RUC");S.value=!0;try{const{data:t}=await w({url:`/data-mype/${s}`,method:"GET"});t.ruc&&(o.ruc=t.ruc,o.name=t.name_complete,o.email=t.email,o.phone=t.phone,o.dni=t.dni_number)}catch(t){if(console.error("Error de red:",t.response.status),o.name=null,o.email=null,o.phone=null,o.dni=null,t.response.status==404)try{const{data:f}=await w({url:`/api-data-mype/${a.ruc}`,method:"GET"}),D={razonSocial:f.razonSocial,numeroDocumento:f.numeroDocumento};$.value=D,x.value=!0}catch(f){g.warning("El número de RUC no es válido"),console.error("Error de red:",f)}}finally{S.value=!1}},V=()=>{window.scrollTo({top:200,behavior:"smooth"})},B=async()=>{if(o.name==null&&o.dni==null&&o.ruc==null){R(),g.warning("Revisando sus respuestas"),V();return}const s={ts1:a.ts1,ts2:a.ts2,ts3:a.ts3,ts4:a.ts4,ts5:a.ts5,c1:a.rate_1,c2:o.rate_2,c3:o.rate_3,suggestions:a.comments,ruc_mype:o.ruc,dni_mype:o.dni,workshop_id:n.id};T.value=!0;try{const t=await w({url:`/sending-test-answers/${n.id}`,method:"POST",data:s});g.success(t.message),P.push({name:"enviado"})}catch(t){console.error("Error:",t.response.data.errors[0])}finally{T.value=!1}},L=()=>{g.error("Debes de completar todos los datos")},A=async s=>{try{const{data:t}=await w({url:`/testout/${s}`,method:"GET"});i.value=t}catch(t){console.error("Error de red:",t)}};return te(async()=>{try{const s=await w({url:`/get-workshop-slug/${O.params.slug}`,method:"GET"});n.id=s.workshop.id,n.exponent=s.workshop.exponent_name,n.idIn=s.workshop.id_in,n.idOut=s.workshop.id_out,n.dateTestIn=s.workshop.test_in_date,n.dateTestOut=s.workshop.test_out_date,n.title=s.workshop.title,n.workShopDate=s.workshop.workshop_date,await A(s.workshop.id_out)}catch(s){console.error("Error de red:",s)}}),(s,t)=>{const f=d("a-divider"),D=d("a-input-search"),C=d("a-form-item"),F=d("a-button"),H=d("a-radio"),J=d("a-radio-group"),E=d("a-rate"),K=d("a-textarea"),Q=d("a-form");return p(),m("div",le,[e("section",re,[e("div",ue,[e("div",ce,[ie,l(f),e("div",de,[e("span",null,[_e,h(r(n.title),1)]),e("span",null,[pe,h(r(n.exponent),1)]),e("span",null,[me,h(" "+r(n.workShopDate),1)]),e("span",null,[he,h(" "+r(Y.value),1)])])]),l(Q,{layout:"vertical",model:a,autocomplete:"off",onFinish:B,onFinishFailed:L},{default:v(()=>[e("div",ve,[l(C,{class:"search-ruc f-15",name:"ruc",label:"Número de RUC",rules:[{required:!0,message:"Es importante el número de RUC"}]},{default:v(()=>[l(D,{maxlength:15,loading:S.value,size:"large",value:a.ruc,"onUpdate:value":t[0]||(t[0]=u=>a.ruc=u),"enter-button":"",onSearch:R,onInput:z},null,8,["loading","value"])]),_:1}),o.name?(p(),m("div",fe,[be,e("div",null,[ge,e("span",null,r(o.name),1)]),e("div",null,[we,e("span",null,r(o.email),1)]),e("div",null,[ye,e("span",null,r(o.phone),1)]),ke,l(F,null,{default:v(()=>[h("Editar datos")]),_:1})])):k("",!0)]),i.value?(p(),m("div",xe,[(p(),m(q,null,M(5,(u,_)=>e("div",{class:"box",key:_},[e("span",Se,"Pregunta "+r(_+1),1),e("h3",Te,r(i.value["question"+(_+1)]),1),l(C,{name:`ts${_+1}`,rules:[{required:!0,message:"Escoge una respuesta"}]},{default:v(()=>[l(J,{class:"group-radios",value:a[`ts${_+1}`],"onUpdate:value":N=>a[`ts${_+1}`]=N},{default:v(()=>[(p(),m(q,null,M(3,(N,I)=>l(H,{key:I,class:"item-radio",value:I+1},{default:v(()=>[h(r(i.value[`question${_+1}_opt${I+1}`]),1)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])])),64))])):k("",!0),i.value?(p(),m("div",De,[e("div",null,[e("h3",Ee,r(i.value.satistaction1),1),l(E,{class:"star-rate",value:a.rate_1,"onUpdate:value":t[1]||(t[1]=u=>a.rate_1=u)},null,8,["value"])]),e("div",Ie,[e("h3",Ue,r(i.value.satistaction2),1),l(E,{class:"star-rate",value:a.rate_2,"onUpdate:value":t[2]||(t[2]=u=>a.rate_2=u)},null,8,["value"])]),e("div",null,[e("h3",$e,r(i.value.satistaction3),1),l(E,{class:"star-rate",value:a.rate_3,"onUpdate:value":t[3]||(t[3]=u=>a.rate_3=u)},null,8,["value"])])])):k("",!0),i.value?(p(),m("div",Re,[Ce,e("h3",Fe,r(i.value.comments),1),l(K,{value:a.comments,"onUpdate:value":t[4]||(t[4]=u=>a.comments=u),"allow-clear":""},null,8,["value"])])):k("",!0),e("div",Ne,[l(F,{type:"primary","html-type":"submit",size:"large",loading:T.value},{default:v(()=>[h("Enviar respuestas")]),_:1},8,["loading"])])]),_:1},8,["model"])])]),l(X,{open:x.value,onHandleCloseModal:t[5]||(t[5]=u=>x.value=!1),rucProp:$.value,onHandleSetData:G},null,8,["open","rucProp"])])}}},Ge=ne(qe,[["__scopeId","data-v-3bf8ee0b"]]);export{Ge as default};
