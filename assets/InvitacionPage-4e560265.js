import{f as de,_ as ie}from"./nuevaPersonaCompany-ed7b2d3e.js";import{_ as ue}from"./imgInvitacion-55e49cc2.js";import{r as h,z as M,u as ce,a as me,E as G,k as z,b,o as r,d as I,c as p,w as m,e as o,F as R,x as pe,q as _,s as v,h as A,i as g,f as y,m as E,p as L,j as V,t as _e}from"./index-6c614c87.js";import{t as ve,c as be}from"./selects-56d2dd8e.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const he="/assets/zoomlogo-bd8e1a39.png",ye="/assets/clock-87f7be37.png";const fe=i=>(L("data-v-c97933d4"),i=i(),V(),i),ge={class:"agreement-wrapper"},ke={class:"grid-item"},Ie=fe(()=>o("h4",null,"¿Cómo te enteraste del taller?",-1)),Se={__name:"InvitationForm",props:["idWorkshop"],setup(i){const S=i,l=h(de);M();const f=ce(),T=h(null),u=h(!1),x=h(!1),U=h([]),w=h([]),P=h([]),B=[{label:"DNI",value:"dni"},{label:"CE",value:"ce"},{label:"PAS",value:"pas"},{label:"PTP",value:"ptp"}],e=me({id_workshop:S.idWorkshop,ruc:null,social_reason:null,category:null,person_type:null,document_type:"dni",number_document:null,last_name:null,middle_name:null,name:null,department:null,province:null,district:null,phone:null,email:null,created_by:G,update_by:G,post:4}),C=()=>{e.ruc=null,e.social_reason=null,e.category=null,e.person_type=null,e.document_type=null,e.number_document=null,e.last_name=null,e.middle_name=null,e.name=null,e.department=null,e.province=null,e.district=null,e.phone=null,e.email=null},H=()=>{l.value.category.disabled=!1,l.value.person_type.disabled=!1,l.value.document_type.disabled=!1,l.value.number_document.disabled=!1},q=()=>{l.value.last_name.disabled=!1,l.value.middle_name.disabled=!1,l.value.name.disabled=!1,l.value.department.disabled=!1,l.value.province.disabled=!1,l.value.district.disabled=!1,l.value.phone.disabled=!1,l.value.email.disabled=!1},$=()=>{l.value.social_reason.disabled=!0,l.value.category.disabled=!0,l.value.person_type.disabled=!0,l.value.document_type.disabled=!0,l.value.number_document.disabled=!0,l.value.last_name.disabled=!0,l.value.middle_name.disabled=!0,l.value.name.disabled=!0,l.value.department.disabled=!0,l.value.province.disabled=!0,l.value.district.disabled=!0,l.value.phone.disabled=!0,l.value.email.disabled=!0},O=n=>{e[n]=e[n].replace(/\D/g,"")},j=async()=>{u.value=!0;try{const n=e.ruc,{data:t}=await y({url:`/public/company/${n}`,method:"GET"});t&&(e.social_reason=t.razonSocial,H()),t.social_reason&&(e.social_reason=t.social_reason,e.category=t.category,e.person_type=t.person_type)}catch(n){console.log(n),E.error("El número ingresado no es válido"),e.ruc=null}finally{u.value=!1}},Y=async()=>{if(!e.document_type)return E.warning("Debes escoger un tipo de documento");u.value=!0;try{const n=await y({url:`/public/person/${e.document_type}/${e.number_document}`,method:"GET"});if(n.status===404)return q();const t=n.data;e.name=t.nombres,e.last_name=t.apellidoPaterno,e.middle_name=t.apellidoMaterno,t.department&&(e.department=t.department,N(t.department)),t.province&&(e.province=t.province,F(t.province)),t.document_type&&(e.document_type=t.document_type),t.district&&(e.district=t.district),t.email&&(e.email=t.email),t.phone&&(e.phone=t.phone),q()}catch(n){console.log("You have an error",n)}finally{u.value=!1}},J=async n=>{if(n=="ruc")return j();if(n=="number_document")return Y()},K=n=>{C(),$(),e.document_type=n},Q=(n,t)=>{e.province=null,e.district=null,w.value=[],P.value=[],N(t.value)},X=(n,t)=>{e.district=null,P.value=[],F(t.value)},Z=async()=>{try{const{data:n}=await y({url:"/departaments",method:"GET"});let t=n.map(d=>({label:d.label,value:d.id}));U.value=[...U.value,...t],$()}catch(n){console.log(n)}},N=async n=>{try{const{data:t}=await y({url:`/province/${n}`,method:"GET"});let d=t.map(c=>({label:c.label,value:c.id}));w.value=[...w.value,...d]}catch(t){console.log(t)}},F=async n=>{try{const{data:t}=await y({url:`/district/${n}`,method:"GET"});let d=t.map(c=>({label:c.label,value:c.id}));P.value=[...P.value,...d]}catch(t){console.log(t)}},ee=async()=>{const n=e;x.value=!0;try{if(await y({url:"/public/accepted-invitation",method:"POST",data:n})){const d={status:"success",title:"¡Gracias por participar de este formulario!",subTitle:"Se te enviará un correo incluyendo el link del taller ♥"};await y({url:`/public/add-point/${S.idWorkshop}/${T.value}`,method:"PUT"}),f.push({name:"enviado",query:d}),$(),C()}}catch{E.error("Error al registrar")}finally{x.value=!1}},ae=()=>{E.error("Debes de completar todos los espacios requeridos")};return z(Z),(n,t)=>{const d=b("a-select"),c=b("a-form-item"),te=b("a-input-search"),ne=b("a-input"),D=b("a-radio"),le=b("a-radio-group"),oe=b("a-button"),se=b("a-form");return r(),I("div",ge,[p(se,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:ee,onFinishFailed:ae},{default:m(()=>[o("div",ke,[(r(!0),I(R,null,pe(l.value,(a,re)=>(r(),I(R,{key:re},[a.type==="iSelect"?(r(),_(c,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:m(()=>[a.name=="document_type"?(r(),_(d,{key:0,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:B,disabled:a.disabled,onChange:K},null,8,["value","onUpdate:value","disabled"])):v("",!0),a.name=="department"?(r(),_(d,{key:1,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:U.value,onChange:Q,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):v("",!0),a.name=="province"?(r(),_(d,{key:2,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:w.value,onChange:X,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):v("",!0),a.name=="district"?(r(),_(d,{key:3,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:P.value,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):v("",!0),a.name=="person_type"?(r(),_(d,{key:4,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:A(ve),disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):v("",!0),a.name=="category"?(r(),_(d,{key:5,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,options:A(be),disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):v("",!0)]),_:2},1032,["name","label","rules"])):v("",!0),a.type==="iSearch"?(r(),_(c,{key:1,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:m(()=>[p(te,{maxlength:15,loading:u.value,value:e[a.name],"onUpdate:value":s=>e[a.name]=s,disabled:a.disabled,onSearch:s=>J(a.name),onInput:s=>O(a.name)},null,8,["loading","value","onUpdate:value","disabled","onSearch","onInput"])]),_:2},1032,["name","label","rules"])):v("",!0),a.type==="iText"?(r(),_(c,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max}]},{default:m(()=>[p(ne,{value:e[a.name],"onUpdate:value":s=>e[a.name]=s,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):v("",!0)],64))),128)),o("div",null,[Ie,p(le,{class:"group-radios",value:T.value,"onUpdate:value":t[0]||(t[0]=a=>T.value=a)},{default:m(()=>[p(D,{class:"item-radio",value:"rrss"},{default:m(()=>[g("Redes sociales")]),_:1}),p(D,{class:"item-radio",value:"sms"},{default:m(()=>[g("SMS")]),_:1}),p(D,{class:"item-radio",value:"correo"},{default:m(()=>[g("Correo")]),_:1})]),_:1},8,["value"])]),p(c,{class:"btn-send"},{default:m(()=>[p(oe,{type:"primary","html-type":"submit",loading:x.value},{default:m(()=>[g("PARTICIPAR")]),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])}}},Te=W(Se,[["__scopeId","data-v-c97933d4"]]);const k=i=>(L("data-v-6db3956b"),i=i(),V(),i),Ue={class:"invitation"},Pe={key:1,class:"container"},xe=k(()=>o("div",{class:"header"},[o("img",{class:"logo-ruta",src:ie,alt:""})],-1)),we=k(()=>o("div",{class:"lazing"},[o("h3",null,"REGISTRO DE INVITACIÓN")],-1)),Ee={key:0,class:"invitacion-info text-html"},$e=k(()=>o("p",null,[g(" ¡Capacítate con "),o("b",null,"#RUTADIGITAL"),g(" del Ministerio de Producción del Perú, a través de "),o("b",null,"#TuEmpresa"),g("! ")],-1)),De=["innerHTML"],Ce=k(()=>o("img",{class:"img-wom",src:ue,alt:""},null,-1)),qe=k(()=>o("div",{class:"plataforma"},[o("h3",null,"Plataforma"),o("img",{class:"logo-zoom",src:he,alt:""})],-1)),Ne=k(()=>o("img",{class:"logo-clock",src:ye,alt:""},null,-1)),Fe={class:"horario"},Ge=k(()=>o("br",null,null,-1)),Re={__name:"InvitacionPage",setup(i){const S=h(!0),l=M(),f=h(null),T=async()=>{try{const{data:u}=await y({url:`/public/invitation/${l.params.slug}`,method:"GET"});f.value=u,S.value=!1}catch(u){console.error("Error de red:",u)}};return z(()=>{T()}),(u,x)=>{const U=b("a-spin");return r(),I("section",Ue,[S.value?(r(),_(U,{key:0})):(r(),I("div",Pe,[xe,we,f.value?(r(),I("div",Ee,[o("div",null,[$e,o("div",{innerHTML:f.value.content},null,8,De)]),o("div",null,[Ce,qe,o("div",null,[Ne,o("span",Fe,_e(f.value.date),1)])])])):v("",!0),Ge,p(Te,{idWorkshop:f.value.id},null,8,["idWorkshop"])]))])}}},We=W(Re,[["__scopeId","data-v-6db3956b"]]);export{We as default};
