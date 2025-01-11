import{B as ee,G as y,E as ae,r as _,a as te,j as ne,b as p,o as i,d as h,c as m,w as u,h as I,F as C,L as re,f as v,e as d,i as O,H as se,I as oe,t as le,x as ie,p as f,q as b,D as ce,m as E,M as L}from"./index-a2d62d20.js";import{_ as de}from"./calendar-e0a6119a.js";import{u as me}from"./selectes-1d895f89.js";import{F as ue}from"./FormalizacionFooter-17a0f553.js";import"./es-77902b19.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./EnvironmentOutlined-2420b18b.js";const pe={class:"attendance"},be={class:"container"},ge={key:0,class:"fair-caducated"},fe={key:1,class:"attendance-section"},_e={class:"attendance-title"},he={class:"attendance-form"},ye={key:7},ve="DD/MM/YYYY",ke={__name:"IndexAsistencias",emits:["nextStep2"],setup(Ee,{emit:xe}){ee.locale("es");const P=y(re,{style:{fontSize:"24px"},spin:!0}),k=ae(),c=me();c.$patch({typeDocuments:c.typeDocuments}),c.$patch({economicSectors:c.economicSectors}),c.$patch({genders:c.genders}),c.fetchEconomicSectors(),c.fetchTypeDocuments(),c.fetchGenders();const q=_(!1),x=_(!0),N=_(null),S=_(!1),R=_(!1),D=_(!1),e=te({}),M=[{value:"si",label:"SI"},{value:"no",label:"NO"}],$=n=>{if(n==="country_id")return c.countries;if(n==="gender_id")return c.genders;if(n==="sick")return M;if(n==="typedocument_id")return c.typeDocuments},T=_({typedocument_id:{type:"iSelect",label:"TIPO DE DOCUMENTO DE IDENTIDAD",name:"typedocument_id",required:!0,message:"Seleccionar tipo",disabled:!1},documentnumber:{type:"iSearch",label:"INGRESE NÚMERO DE IDENTIDAD",name:"documentnumber",required:!0,message:"Escribir tu número de documento",disabled:!0,max:11},name:{type:"iText",label:"NOMBRES",name:"name",required:!0,message:"Escribir nombre",disabled:!0,max:50},lastname:{type:"iText",label:"APELLIDO PATERNO",name:"lastname",required:!0,message:"Escribir nombre",disabled:!0,max:50},middlename:{type:"iText",label:"APELLIDO MATERNO",name:"middlename",required:!0,message:"Escribir nombre",disabled:!0,max:50},gender_id:{type:"iSelect",label:"GÉNERO",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},sick:{type:"iSelect",label:"¿TIENE ALGUNA DISCAPACIDAD?",name:"sick",required:!0,message:"¿Tiene discapacidad?",disabled:!0},email:{type:"iText",label:"CORREO ELECTRÓNICO",name:"email",required:!0,message:"Ingresar email",email:"email",disabled:!0,max:255},phone:{type:"iText",label:"NÚMERO DE CELULAR",name:"phone",required:!0,message:"Escribe tu num. de celular",disabled:!0,max:9},ruc:{type:"iSearchRuc",label:"NÚMERO DE RUC",name:"ruc",required:!1,message:"Escribir RUC",disabled:!0,max:11},socialReason:{type:"iText",label:"NOMBRE COMERCIAL",name:"socialReason",required:!1,message:"Escribir la razón social",disabled:!1,max:100},economicsector_id:{type:"iSelectWrite",label:"SECTOR ECONÓMICO",name:"economicsector_id",required:!1,message:"Seleccionar sector económnico",disabled:!1},comercialactivity:{type:"iText",label:"ACTIVIDAD COMERCIAL",name:"comercialactivity",required:!1,message:"Seleccionar sector económnico",disabled:!1,max:100}}),F=(n,t)=>{if(!t)return Promise.reject("La fecha es requerida");const r=new Date,o=new Date(t);let s=r.getFullYear()-o.getFullYear();const g=r.getMonth()-o.getMonth();return(g<0||g===0&&r.getDate()<o.getDate())&&s--,s<18||s>99?Promise.reject("La edad debe estar entre 18 y 99 años"):Promise.resolve()},G=(n,t)=>{if(n.field==="phone"){const r=/^9\d{8}$/;if(t){if(!r.test(t))return Promise.reject("El número debe empezar con 9 y tener exactamente 9 dígitos")}else return Promise.reject("El número de teléfono es obligatorio")}if(n.field==="email"){const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(t){if(!r.test(t))return Promise.reject("Ingrese un correo electrónico válido")}else return Promise.reject("El correo electrónico es obligatorio")}return Promise.resolve()},B=n=>{const t=e[n]?e[n].trim():"";e[n]=t},j=n=>{n=="typedocument_id"&&(e.documentnumber=null,e.name=null,e.lastname=null,e.middlename=null,e.gender_id=null,e.sick=null,e.email=null,e.phone=null)},z=(n,t)=>{const r=e.typedocument_id;return/^\d+$/.test(t)?r===1&&t.length!==8?Promise.reject("Debe tener exactamente 8 caracteres."):r!==1&&t.length>12?Promise.reject("Debe tener exactamente 12 caracteres."):(r===1&&t.startsWith("0")&&t.length===8,Promise.resolve()):Promise.reject("Solo se permiten números.")},V=async()=>{const{typedocument_id:n,documentnumber:t}=e;if(!n||!t){E.error("El tipo de documento y el número de documento no pueden estar vacíos.");return}if(!/^\d+$/.test(t)){E.error("El número de documento solo debe contener caracteres numéricos.");return}if(n===1&&t.length!==8){E.error("El número de documento debe tener exactamente 8 caracteres para el tipo de documento DNI.");return}const r=["name","lastname","middlename","sick","email","phone","gender_id","ruc"],o=s=>{r.forEach(g=>{T.value[g].disabled=s})};try{if(S.value=!0,e.typedocument_id==1){const s=await v({url:`public/search-api-dni/${e.documentnumber}`,method:"GET"});s.status==200&&(e.name=s.data.name,e.lastname=s.data.lastname,e.middlename=s.data.middlename,e.gender_id=s.data.gender_id,e.sick=s.data.sick)}}catch(s){console.error("Error de red:",s)}finally{o(!1),S.value=!1}},Y=async()=>{const n=e.ruc,t=/^\d{11}$/.test(n)&&/^(10|15|20)/.test(n),r=["socialReason","economicsector_id"],o=s=>{r.forEach(g=>{T.value[g].disabled=s})};if(!t)console.error("El RUC debe tener 11 caracteres, comenzar con 11, 15 o 20, y contener solo números."),o(!0);else{R.value=!0;try{const s=await v({url:`public/search-api-ruc/${e.ruc}`,method:"GET"});s.status==200&&(e.socialReason=s.data.socialReason,o(!1))}catch(s){console.error("Error de red:",s),s&&E.error("Este número de RUC no es válido")}finally{R.value=!1}}},A=(n,t)=>{const r=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(r)},U=()=>{e.typedocument_id=null,e.documentnumber=null,e.name=null,e.lastname=null,e.middlename=null,e.gender_id=null,e.sick=null,e.email=null,e.phone=null,e.ruc=null,e.socialReason=null,e.economicsector_id=null,e.comercialactivity=null},W=async()=>{D.value=!0;const t={slug:k.params.slug,typedocument_id:e.typedocument_id,documentnumber:e.documentnumber,name:e.name,lastname:e.lastname,middlename:e.middlename,gender_id:e.gender_id,sick:e.sick,email:e.email,phone:e.phone,ruc:e.ruc,socialReason:e.socialReason,economicsector_id:e.economicsector_id,comercialactivity:e.comercialactivity};try{const r=await v({url:"public/attendance-present",method:"POST",data:t});r.status==200&&L.success({title:"REGISTRADO",content:y("div",{},[y("p",r.message)]),onOk(){U(),window.scrollTo({top:0,behavior:"smooth"})},class:"attendance-modal"}),r.status==400&&L.warning({title:"REGISTRO AVISO",content:y("div",{},[y("p",r.message)]),onOk(){U(),window.scrollTo({top:0,behavior:"smooth"})},class:"attendance-modal"})}catch(r){console.error("Error de red:",r)}finally{D.value=!1}},K=async()=>{try{const n=k.params.slug,t=await v({url:`public/data-attendance/${n}`,method:"GET"});t.status==200&&(N.value=t.data.title,x.value=!1),t.status==400&&router.push("/404"),t.status==500&&(q.value=!0,x.value=!1)}catch(n){console.error("Error de red:",n)}finally{}};return ne(()=>{K()}),(n,t)=>{const r=p("a-input-search"),o=p("a-form-item"),s=p("a-input"),g=p("a-date-picker"),w=p("a-select"),H=p("a-textarea"),J=p("a-button"),Q=p("a-form"),X=p("a-spin");return i(),h(C,null,[m(X,{spinning:x.value,indicator:I(P)},{default:u(()=>[d("div",pe,[d("div",be,[q.value?(i(),h("section",ge,t[1]||(t[1]=[d("div",{class:"container"},[d("div",{class:"fair-caducated-info"},[d("img",{src:de,alt:""}),d("h4",null,"EL REGISTRO NO ESTÁ DISPONIBLE"),d("p",null,[O("El formulario de inscripción ya no está disponible. "),d("br"),O(" Agradecemos su interés y lo invitamos a estar atento a nuestros próximos eventos.")])])],-1)]))):(i(),h("section",fe,[m(Q,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:W,onKeydown:t[0]||(t[0]=se(oe(()=>{},["prevent"]),["enter"]))},{default:u(()=>[d("div",_e,[t[2]||(t[2]=d("h2",null,"REGISTRO DE ASISTENCIA",-1)),d("h3",null,le(N.value),1)]),d("div",he,[(i(!0),h(C,null,ie(T.value,(a,Z)=>(i(),h(C,{key:Z},[a.type==="iSearch"?(i(),f(o,{key:0,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,validator:z}]},{default:u(()=>[m(r,{value:e[a.name],"onUpdate:value":l=>e[a.name]=l,placeholder:"","enter-button":"BUSCAR",loading:S.value,maxlength:e.typedocument_id===1?8:12,onSearch:V},null,8,["value","onUpdate:value","loading","maxlength"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iSearchRuc"?(i(),f(o,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,max:a.max},{pattern:/^(10|15|20)\d{9,}$/,message:"El número debe comenzar con 10, 15 o 20, tener solo números, y al menos 11 caracteres"}]},{default:u(()=>[m(r,{value:e[a.name],"onUpdate:value":l=>e[a.name]=l,placeholder:"Ingresar RUC","enter-button":"BUSCAR",loading:R.value,maxlength:a.max,onSearch:Y,disabled:a.disabled},null,8,["value","onUpdate:value","loading","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iText"?(i(),f(o,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,max:a.max},{validator:G}]},{default:u(()=>[m(s,{value:e[a.name],"onUpdate:value":l=>e[a.name]=l,maxlength:a.max,onBlur:l=>B(a.name),disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","onBlur","disabled"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iDate"?(i(),f(o,{key:3,name:a.name,label:a.label,rules:[{required:a.required,message:a.message},{validator:F,message:"La edad debe estar entre 18 y 99 años"}]},{default:u(()=>[m(g,{locale:I(ce),value:e[a.name],"onUpdate:value":l=>e[a.name]=l,style:{width:"100%"},format:ve,placeholder:"día/mes/año",disabled:a.disabled},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iSelect"?(i(),f(o,{key:4,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[m(w,{value:e[a.name],"onUpdate:value":l=>e[a.name]=l,options:$(a.name),"show-search":"","filter-option":A,onChange:l=>j(a.name),disabled:a.disabled},null,8,["value","onUpdate:value","options","onChange","disabled"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iTextarea"?(i(),f(o,{key:5,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[m(H,{value:e[a.name],"onUpdate:value":l=>e[a.name]=l,rows:4,maxlength:a.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="iSelectWrite"?(i(),f(o,{key:6,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:u(()=>[a.name=="economicsector_id"?(i(),f(w,{key:0,value:e[a.name],"onUpdate:value":l=>e[a.name]=l,"show-search":"",options:I(c).economicSectors,"filter-option":A,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):b("",!0)]),_:2},1032,["name","label","rules"])):b("",!0),a.type==="space1"?(i(),h("div",ye)):b("",!0)],64))),128))]),m(o,null,{default:u(()=>[m(J,{type:"primary","html-type":"submit",loading:D.value,class:"attendance-btn"},{default:u(()=>t[3]||(t[3]=[O("REGISTRARSE")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]))])])]),_:1},8,["spinning","indicator"]),m(ue)],64)}}};export{ke as default};
