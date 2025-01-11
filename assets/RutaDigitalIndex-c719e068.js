import{B as F,r as u,a as re,b as p,o as r,d as $,c as m,w as d,H as te,I as de,e as x,F as Q,x as me,p as b,h as q,q as h,D as Se,i as K,m as C,J as P,X as ne,f as ie,g as Ie,T as De,s as we,j as Ce,t as ue,$ as xe,G as Re,z as Oe}from"./index-ff7b135e.js";import{_ as Ne}from"./icoexcel-1b303edf.js";import{u as pe}from"./selectes-2e4334fd.js";import"./es-2011e178.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";import{M as Te}from"./MoreOutlined-675ec443.js";const ke={class:"agreement-wrapper"},Ue={class:"grid-item"},Ae="DD/MM/YYYY",Le={__name:"RutaDigitalEmpresario",emits:["stepNumber"],setup(ee,{emit:G}){F.locale("es");const l=pe(),U=G;l.$patch({typeDocuments:l.typeDocuments}),l.$patch({cities:l.countries}),l.$patch({cities:l.cities}),l.$patch({provinces:l.provinces}),l.$patch({districts:l.districts}),l.$patch({genders:l.genders}),l.fetchTypeDocuments(),l.fetchCountries(),l.fetchCities(),l.fetchGenders();const f=u({typedocument_id:{type:"iSelect",label:"TIPO DE DOCUMENTO",name:"typedocument_id",required:!0,message:"Seleccionar tipo de documento",disabled:!1},documentnumber:{type:"iSearch",label:"NÚMERO DOCUMENTO",name:"documentnumber",required:!0,message:"Escribe número de documento",disabled:!0},lastname:{type:"iText",label:"APELLIDO PATERNO",name:"lastname",required:!0,message:"Escribir apellido paterno",disabled:!0},middlename:{type:"iText",label:"APELLIDO MATERNO",name:"middlename",required:!0,message:"Escribir apellido materno",disabled:!0},name:{type:"iText",label:"NOMBRES",name:"name",required:!0,message:"Escribir nombre",disabled:!0},country_id:{type:"iSelect",label:"PAÍS ORIGEN",name:"country_id",required:!0,message:"Seleccionar país de origen",disabled:!1},city_id:{type:"iSelect",label:"REGIÓN RESIDENTE",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelect",label:"PROVINCIA RESIDENTE",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"DISTRITO RESIDENTE",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"DIRECCIÓN",name:"address",required:!0,message:"Escribir dirección",disabled:!0},birthday:{type:"iDate",label:"FECHA DE NACIMIENTO",name:"birthday",required:!0,message:"Seleccionar fecha",disabled:!0},phone:{type:"iText",label:"CELULAR",name:"phone",required:!0,message:"Número de celular",min:9,max:9,disabled:!0},email:{type:"iText",label:"CORREO ELECTRÓNICO",name:"email",required:!1,message:"Ingresar email",email:"email",disabled:!0},gender_id:{type:"iSelect",label:"GÉNERO",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},sick:{type:"iSelect",label:"¿TIENE DISCAPACIDAD?",name:"sick",required:!0,message:"¿Tiene discapacidad?",disabled:!0},hasSoon:{type:"iSelect",label:"¿TIENE HIJOS? (Opcional)",name:"hasSoon",required:!1,message:"¿Tiene hijos?",disabled:!0}}),S=u(null),I=u(null),D=u(!1),A=u(null),R=u(!1);u(!0);const n=[{value:"yes",label:"SI"},{value:"no",label:"NO"}],Y=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}],e=re({typedocument_id:null,documentnumber:null,lastname:null,middlename:null,name:null,country_id:null,city_id:null,province_id:null,district_id:null,address:null,birthday:null,phone:null,email:null,gender_id:null,sick:null,hasSoon:null}),B=g=>{g&&(f.value.documentnumber.disabled=!1,e.documentnumber=null)},k=g=>{const i=e[g]?e[g].trim():"";e[g]=i},L=(g,i)=>{if(!i)return Promise.reject("La fecha es requerida");const _=new Date,a=new Date(i);let s=_.getFullYear()-a.getFullYear();const c=_.getMonth()-a.getMonth();return(c<0||c===0&&_.getDate()<a.getDate())&&s--,s<18||s>99?Promise.reject("La edad debe estar entre 18 y 99 años"):Promise.resolve()},z=async g=>{try{const{data:i}=await ie({url:`select/provinces/${g}`,method:"GET"});S.value=i}catch(i){console.error("Error de red:",i)}},H=async g=>{try{const{data:i}=await ie({url:`select/districts/${g}`,method:"GET"});I.value=i}catch(i){console.error("Error de red:",i)}},O=(g,i)=>{const _=g.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(_)},V=()=>{f.value.lastname.disabled=!1,f.value.middlename.disabled=!1,f.value.name.disabled=!1,f.value.city_id.disabled=!1,f.value.province_id.disabled=!1,f.value.district_id.disabled=!1,f.value.address.disabled=!1,f.value.phone.disabled=!1,f.value.email.disabled=!1,f.value.birthday.disabled=!1,f.value.gender_id.disabled=!1,f.value.sick.disabled=!1,f.value.hasSoon.disabled=!1},j=async g=>{if(D.value=!0,!g)return C.warning("Debes de ingresar el número de documento"),D.value=!1;try{const i=await P({url:`ruta-digital/is-new/${e.typedocument_id}/${e.documentnumber}`,method:"GET"});if(i.status===200&&(e.lastname=i.data.lastname,e.middlename=i.data.middlename,e.name=i.data.name,e.country_id=i.data.country_id,e.city_id=i.data.city_id,z(i.data.city_id),e.province_id=i.data.province_id,H(i.data.province_id),e.district_id=i.data.district_id,e.address=i.data.address,i.data.birthday&&(e.birthday=F(i.data.birthday,"YYYY-MM-DD")),e.phone=i.data.phone,e.email=i.data.email,e.gender_id=i.data.gender_id,e.sick=i.data.sick,e.hasSoon=i.data.hasSoon,V()),i.status===300&&(w(),e.typedocument_id===1))if(e.documentnumber.length>=8)try{const _=await P({url:`user/only-dni/${e.documentnumber}`,method:"GET"});_.status===429?ne.open({message:"ALERTA",description:"Se superó el número de consultas, coméntale a tu supervisor para que actualice el token"}):_.status===200&&(e.lastname=_.data.apellidoPaterno,e.middlename=_.data.apellidoMaterno,e.name=_.data.nombres),V()}catch(_){console.error("Error fetching DNI data:",_),ne.open({message:"Error",description:"Hubo un problema al consultar el DNI. Por favor, intente nuevamente."})}else return C.error("COMPLETA EL NÚMERO DE DNI")}catch{console.log("There was an error")}finally{return D.value=!1}},X=()=>{e.documentnumber=e.documentnumber.replace(/\D/g,"")},y=()=>{e.phone=e.phone.replace(/\D/g,"")},o=g=>{e.province_id=null,e.district_id=null,z(g)},E=g=>{e.district_id=null,H(g)},w=()=>{e.lastname=null,e.middlename=null,e.name=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.phone=null,e.email=null,e.birthday=null,e.gender_id=null,e.sick=null,A.value=null,e.country_id=null,e.hasSoon=null},J=async()=>{if(R.value=!0,e.typedocument_id!==1&&e.country_id==155)return R.value=!1,C.error("Por favor cambiar el país, no está permitido para esta opción, Gracias");const g={typedocument_id:e.typedocument_id,documentnumber:e.documentnumber,lastname:e.lastname,middlename:e.middlename,name:e.name,country_id:e.country_id,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,birthday:F(e.birthday).format("YYYY-MM-DD"),phone:e.phone,email:e.email,gender_id:e.gender_id,sick:e.sick,hasSoon:e.hasSoon};try{const i=await P({url:"ruta-digital/businessman",method:"POST",data:g});if(i.status==200){e.typedocument_id=null,e.documentnumber=null;const _={id:i.id,dni:i.dni,step:1};U("stepNumber",_),w()}}catch{C.error("No se pudo registrar a este usuario")}finally{R.value=!1}},Z=()=>{C.error("COMPLETA LOS VALORES REQUERIDOS")};return(g,i)=>{const _=p("a-select"),a=p("a-form-item"),s=p("a-input-search"),c=p("a-input"),N=p("a-date-picker"),T=p("a-button"),se=p("a-form"),le=p("a-spin");return r(),$("div",ke,[m(le,{spinning:D.value},{default:d(()=>[m(se,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:J,onFinishFailed:Z,onKeydown:i[0]||(i[0]=te(de(()=>{},["prevent"]),["enter"]))},{default:d(()=>[x("div",Ue,[(r(!0),$(Q,null,me(f.value,(t,oe)=>(r(),$(Q,{key:oe},[t.type==="iSelect"?(r(),b(a,{key:0,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:d(()=>[t.name=="typedocument_id"?(r(),b(_,{key:0,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:q(l).typeDocuments,disabled:t.disabled,onChange:B},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),t.name=="country_id"?(r(),b(_,{key:1,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:q(l).countries,"show-search":"","filter-option":O},null,8,["value","onUpdate:value","options"])):h("",!0),t.name=="city_id"?(r(),b(_,{key:2,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:q(l).cities,"show-search":"","filter-option":O,onChange:o,disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),t.name=="province_id"?(r(),b(_,{key:3,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:S.value,"show-search":"","filter-option":O,onChange:E,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),t.name=="district_id"?(r(),b(_,{key:4,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:I.value,"show-search":"","filter-option":O,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),t.name=="gender_id"?(r(),b(_,{key:5,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:q(l).genders,disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),t.name=="sick"?(r(),b(_,{key:6,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:n,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"])):h("",!0),t.name=="hasSoon"?(r(),b(_,{key:7,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,options:Y,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"])):h("",!0)]),_:2},1032,["name","label","rules"])):h("",!0),t.type==="iSearch"?(r(),b(a,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:d(()=>[m(s,{loading:D.value,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,onKeyup:te(j,["enter"]),onSearch:j,onInput:X,maxlength:e.typedocument_id==1?8:20,disabled:t.disabled},null,8,["loading","value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):h("",!0),t.type==="iText"?(r(),b(a,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,type:t.email,max:t.max,min:t.min}]},{default:d(()=>[t.name=="phone"?(r(),b(c,{key:0,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,disabled:t.disabled,maxlength:t.max,onInput:y},null,8,["value","onUpdate:value","disabled","maxlength"])):(r(),b(c,{key:1,value:e[t.name],"onUpdate:value":v=>e[t.name]=v,disabled:t.disabled,maxlength:t.max,onBlur:v=>k(t.name)},null,8,["value","onUpdate:value","disabled","maxlength","onBlur"]))]),_:2},1032,["name","label","rules"])):h("",!0),t.type==="iDate"?(r(),b(a,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message},{validator:L,message:"La edad debe estar entre 18 y 99 años"}]},{default:d(()=>[m(N,{locale:q(Se),value:e[t.name],"onUpdate:value":v=>e[t.name]=v,style:{width:"100%"},format:Ae,placeholder:"día/mes/año",disabled:t.disabled},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):h("",!0)],64))),128))]),m(a,null,{default:d(()=>[m(T,{class:"btn-produce",type:"primary","html-type":"submit",loading:R.value},{default:d(()=>i[1]||(i[1]=[K("SIGUIENTE")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Me=ce(Le,[["__scopeId","data-v-236e5392"]]);const qe={class:"agreement-wrapper"},$e={class:"grid-item"},Pe={key:3},Ye={__name:"RutaDigitalEmpresa",props:["dataStepOne"],emits:["close"],setup(ee,{emit:G}){const l=pe(),U=G,f=ee;l.$patch({cities:l.cities}),l.$patch({provinces:l.provinces}),l.$patch({districts:l.districts}),l.$patch({economicSectors:l.economicSectors}),l.$patch({comercialActivities:l.comercialActivities}),l.fetchCities(),l.fetchEconomicSectors(),l.fetchComercialActivities();const S=u({ruc:{type:"iSearch",label:"NÚMERO RUC",name:"ruc",required:!0,message:"Escribe número de documento",disabled:!1,max:11},space:{type:"space"},comercialName:{type:"iText",label:"NOMBRE COMERCIAL",name:"comercialName",required:!0,message:"Escribir nombre comercial",disabled:!0},socialReason:{type:"iText",label:"RAZÓN SOCIAL",name:"socialReason",required:!0,message:"Escribir razón social",disabled:!0},city_id:{type:"iSelect",label:"REGIÓN",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelect",label:"PROVINCIA",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelect",label:"DISTRITO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"DIRECCIÓN",name:"address",required:!0,message:"Escribir dirección",disabled:!0},comercialactivity_id:{type:"iSelect",label:"ACTIVIDAD COMERCIAL",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!0},economicsector_id:{type:"iSelect",label:"SECTOR ECONÓMICO",name:"economicsector_id",required:!0,message:"Seleccionar sector económico",disabled:!0}}),I=u(null),D=u(null),A=u(!1);u(null);const R=u(!1);u(!0);const n=re({}),Y=y=>{const o=n[y]?n[y].trim():"";n[y]=o},e=async y=>{try{const{data:o}=await ie({url:`select/provinces/${y}`,method:"GET"});I.value=o}catch(o){console.error("Error de red:",o)}},B=async y=>{try{const{data:o}=await ie({url:`select/districts/${y}`,method:"GET"});D.value=o}catch(o){console.error("Error de red:",o)}},k=(y,o)=>{const E=y.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return o.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(E)},L=()=>{S.value.comercialName.disabled=!1,S.value.socialReason.disabled=!1,S.value.city_id.disabled=!1,S.value.province_id.disabled=!1,S.value.district_id.disabled=!1,S.value.address.disabled=!1,S.value.comercialactivity_id.disabled=!1,S.value.economicsector_id.disabled=!1},z=async y=>{if(y.length!==11)return C.warning("El RUC debe tener exactamente 11 caracteres.");if(!/^\d+$/.test(y))return C.warning("El RUC debe contener solo números.");if(!/^(10|15|20)/.test(y))return C.warning("El RUC debe comenzar con 10, 15 o 20.");A.value=!0;try{const o=await P({url:`mype/get-by-ruc/${n.ruc}`,method:"GET"});if(o.status===200&&(n.comercialName=o.data.comercialName,n.socialReason=o.data.socialReason,n.city_id=o.data.city_id,e(o.data.city_id),n.province_id=o.data.province_id,B(o.data.province_id),n.district_id=o.data.district_id,n.address=o.data.address,n.comercialactivity_id=o.data.comercialactivity_id,n.economicsector_id=o.data.economicsector_id,L()),o.status===404)if(V(),n.ruc.length>=11)try{const E=await P({url:`mype/search-api-ruc/${n.ruc}`,method:"GET"});E.status===429?ne.open({message:"ALERTA",description:"Se superó el número de consultas, coméntale a tu supervisor para que actualice el token"}):E.status===200&&(n.socialReason=E.data.socialReason,n.address=E.data.address),L()}catch(E){console.error("Error fetching DNI data:",E),ne.open({message:"Error",description:"Hubo un problema al consultar el RUC. Por favor, revise el número registrado."})}else return C.error("COMPLETA EL NÚMERO DEL RUC")}catch{console.log("There was an error")}finally{return A.value=!1}},H=y=>{n.province_id=null,n.district_id=null,e(y)},O=y=>{n.district_id=null,B(y)},V=()=>{n.comercialName=null,n.socialReason=null,n.city_id=null,n.province_id=null,n.district_id=null,n.address=null,n.comercialactivity_id=null,n.economicsector_id=null},j=async()=>{R.value=!0;const y={ruc:n.ruc,comercialName:n.comercialName,socialReason:n.socialReason,city_id:n.city_id,province_id:n.province_id,district_id:n.district_id,address:n.address,comercialactivity_id:n.comercialactivity_id,economicsector_id:n.economicsector_id};try{const o=await P({url:"ruta-digital/mype",method:"POST",data:y});if(o.status==200){const E={ruc:o.ruc,dni:f.dataStepOne.dni,person_id:f.dataStepOne.id,mype_id:o.id},w=await P({url:"ruta-digital/create",method:"POST",data:E});if(w.status==409)return C.error(w.message);w.status==200&&(V(),n.ruc=null,C.success(w.message),U("close"))}}catch{C.error("No se pudo registrar a este usuario")}finally{R.value=!1}},X=()=>{C.error("COMPLETA LOS VALORES REQUERIDOS")};return(y,o)=>{const E=p("a-select"),w=p("a-form-item"),J=p("a-input-search"),Z=p("a-input"),g=p("a-button"),i=p("a-form"),_=p("a-spin");return r(),$("div",qe,[m(_,{spinning:A.value},{default:d(()=>[m(i,{layout:"vertical",model:n,name:"basic",autocomplete:"off",onFinish:j,onFinishFailed:X,onKeydown:o[0]||(o[0]=te(de(()=>{},["prevent"]),["enter"]))},{default:d(()=>[x("div",$e,[(r(!0),$(Q,null,me(S.value,(a,s)=>(r(),$(Q,{key:s},[a.type==="iSelect"?(r(),b(w,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[a.name=="city_id"?(r(),b(E,{key:0,value:n[a.name],"onUpdate:value":c=>n[a.name]=c,options:q(l).cities,"show-search":"","filter-option":k,onChange:H,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="province_id"?(r(),b(E,{key:1,value:n[a.name],"onUpdate:value":c=>n[a.name]=c,options:I.value,"show-search":"","filter-option":k,onChange:O,disabled:!n.city_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="district_id"?(r(),b(E,{key:2,value:n[a.name],"onUpdate:value":c=>n[a.name]=c,options:D.value,"show-search":"","filter-option":k,disabled:!n.province_id},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="economicsector_id"?(r(),b(E,{key:3,value:n[a.name],"onUpdate:value":c=>n[a.name]=c,"show-search":"",options:q(l).economicSectors,"filter-option":k,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):h("",!0),a.name=="comercialactivity_id"?(r(),b(E,{key:4,value:n[a.name],"onUpdate:value":c=>n[a.name]=c,"show-search":"",options:q(l).comercialActivities,"filter-option":k,disabled:a.disabled},null,8,["value","onUpdate:value","options","disabled"])):h("",!0)]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iSearch"?(r(),b(w,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,max:a.max},{pattern:/^(10|15|20)\d{9,}$/,message:"El número debe comenzar con 10, 15 o 20, tener solo números, y al menos 11 caracteres"}]},{default:d(()=>[m(J,{value:n[a.name],"onUpdate:value":c=>n[a.name]=c,loading:A.value,maxlength:a.max,onSearch:z,onKeyup:te(z,["enter"])},null,8,["value","onUpdate:value","loading","maxlength"])]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="iText"?(r(),b(w,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max,min:a.min}]},{default:d(()=>[m(Z,{value:n[a.name],"onUpdate:value":c=>n[a.name]=c,disabled:a.disabled,maxlength:a.max,onBlur:c=>Y(a.name)},null,8,["value","onUpdate:value","disabled","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):h("",!0),a.type==="space"?(r(),$("div",Pe)):h("",!0)],64))),128))]),m(w,null,{default:d(()=>[m(g,{class:"btn-produce",type:"primary","html-type":"submit",loading:R.value},{default:d(()=>o[1]||(o[1]=[K("FINALIZAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},ze=ce(Ye,[["__scopeId","data-v-db713ee5"]]),Fe={__name:"RutaDigitalNuevo",emits:["closeDraw"],setup(ee,{emit:G}){const l=G,U=u(1),f=u(null),S=D=>{f.value=D,U.value=D.step+1},I=()=>{U.value=1,l("closeDraw")};return(D,A)=>(r(),$("section",null,[U.value==1?(r(),b(Me,{key:0,onStepNumber:S})):h("",!0),U.value==2?(r(),b(ze,{key:1,dataStepOne:f.value,onClose:I},null,8,["dataStepOne"])):h("",!0)]))}};const Ge=["onClick"],Be={class:"paginator"},Ve={__name:"RutaDigitalIndex",props:["idConvenio"],setup(ee){F.locale("es");const G=Ie.get("token"),l="https://apituempresa.soporte-pnte.com/api/",U="http://127.0.0.1:8000/api/",f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?U:l,S=u(null),I=u(null);u(null);const D=u(!1),A=u(null),R=u(0),n=u(50),Y=u({page:0}),e=u(1200),B=u([]),k=u(!1),L=u(!1);u(!1),u(!1),u(!1),u(null);const z=u(window.innerHeight-100),H=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"FECHA DE REGISTRO",dataIndex:"date",fixed:"left",align:"center",width:140},{title:"DNI ASESOR",dataIndex:"asesor_documentnumber",fixed:"left",align:"center",width:100},{title:"NOMBRE DEL ASESOR",dataIndex:"asesor_name",width:180},{title:"CDE/MAC",dataIndex:"asesor_cde",width:100,align:"center"},{title:"SUPERVISOR",dataIndex:"supervisador",width:180},{title:"NRO DOCUMENTO",dataIndex:"documentnumber",align:"center",width:130},{title:"TIPO DOCUMENTO",dataIndex:"typedocument",align:"center",width:130},{title:"NACIONALIDAD (NOMBRE DEL PAIS)",dataIndex:"country",align:"center",width:140},{title:"FECHA DE NACIMIENTO",dataIndex:"birthdate",align:"center",width:120},{title:"APELLIDOS",dataIndex:"lastname",width:150},{title:"NOMBRES",dataIndex:"name",width:150},{title:"SEXO (F/M)",dataIndex:"gender",align:"center",width:60},{title:"DISCAPACIDAD (SI/NO)",dataIndex:"sick",align:"center",width:120},{title:"CELULAR",dataIndex:"phone",align:"center",width:100},{title:"CORREO",dataIndex:"email",align:"center",width:150},{title:"NÚMERO DE RUC",dataIndex:"ruc",align:"center",width:120},{title:"REGION DE LA MYPE",dataIndex:"region",align:"center",width:120},{title:"PROVINCIA DE LA MYPE",dataIndex:"province",align:"center",width:150},{title:"DISTRITO DE LA MYPE",dataIndex:"district",align:"center",width:130},{title:"DIRECCIÓN",dataIndex:"address",width:240},{title:"SECTOR ECONOMICO",dataIndex:"comercialactivity",align:"center",width:180},{title:"ACTIVIDAD COMERCIAL",dataIndex:"economicsector",align:"center",width:140},{title:"REVISADO",dataIndex:"status",align:"center",fixed:"right",width:100}],O=re({search:""}),V=()=>{let a={search:O.search};i(a)},j=()=>{O.search||i()},X=a=>{A.value=a,L.value=!0},y=a=>{Y.value.page=a,i()},o=()=>{z.value=window.innerHeight-320},E=()=>{A.value=null,L.value=!0},w=()=>{L.value=!1,i()},J=async a=>{try{const s=await P({url:`agreement/delete/${a.id}`,method:"DELETE"});s.status==200&&(i(),C.success(s.message))}catch(s){console.error("Error de red:",s)}},Z=De(()=>a=>Y.value.page*n.value+a+1),g=async a=>{try{const s=await P({url:`ruta-digital/status/${a}`,method:"PUT"});s.status==200&&(i(),C.success(s.message))}catch(s){console.error("Error de red:",s)}},i=async a=>{try{k.value=!0;const s={};I.value&&(s.start=F(I.value[0]).format("YYYY-MM-DD"),s.end=F(I.value[1]).format("YYYY-MM-DD"));let c;c=Y.value.page==0?"":Y.value,c=a?{...c,...a,...s}:c;const N=await P({url:"ruta-digital/list",method:"GET",params:c}),T=N.data;B.value=T==null?void 0:T.data,R.value=T.total,n.value=T.per_page,S.value=N.role}catch(s){console.error("Error de red:",s)}finally{k.value=!1}},_=async()=>{D.value=!0;const a={};I.value&&(a.start=F(I.value[0]).format("YYYY-MM-DD"),a.end=F(I.value[1]).format("YYYY-MM-DD"));try{const s=await Oe({url:`${f}download/digital-routes`,method:"GET",responseType:"blob",headers:{Authorization:`Bearer ${G}`},params:a}),c=window.URL.createObjectURL(new Blob([s.data])),N=document.createElement("a"),T="ruta-digital.xlsx";N.href=c,N.setAttribute("download",T),document.body.appendChild(N),N.click(),window.URL.revokeObjectURL(c),document.body.removeChild(N)}catch(s){console.error("Error downloading file:",s)}finally{D.value=!1}};return we(()=>{window.removeEventListener("resize",o)}),Ce(()=>{window.addEventListener("resize",o),o(),i()}),(a,s)=>{const c=p("a-button"),N=p("a-range-picker"),T=p("a-col"),se=p("a-input"),le=p("a-input-group"),t=p("a-row"),oe=p("a-switch"),v=p("a-menu-item"),_e=p("a-popconfirm"),ve=p("a-menu"),be=p("a-dropdown"),he=p("a-table"),ge=p("a-tag"),ye=p("a-pagination"),fe=p("a-drawer");return r(),$(Q,null,[x("div",null,[s[11]||(s[11]=x("h3",{class:"title-produce"},"RUTA DIGITAL",-1)),m(t,{style:{margin:"1rem 0"}},{default:d(()=>[m(T,{xs:24,md:12,lg:18},{default:d(()=>[x("div",null,[m(c,{type:"primary",onClick:E,style:{"margin-right":".5rem"}},{default:d(()=>s[4]||(s[4]=[K("REGISTRAR")])),_:1}),m(N,{value:I.value,"onUpdate:value":s[0]||(s[0]=M=>I.value=M),style:{width:"220px","font-size":"13px","margin-left":"1rem"},onChange:i},null,8,["value"]),m(c,{class:"btn-excel",onClick:_,loading:D.value,type:"primary",style:{margin:"0 .3rem"}},{default:d(()=>s[5]||(s[5]=[x("img",{width:"20",style:{margin:"-2px 0 0 0"},src:Ne},null,-1)])),_:1},8,["loading"])])]),_:1}),m(T,{xs:24,md:12,lg:6},{default:d(()=>[m(le,{compact:""},{default:d(()=>[m(se,{value:O.search,"onUpdate:value":s[1]||(s[1]=M=>O.search=M),style:{width:"calc(100% - 80px)"},onInput:j,placeholder:"Buscar por RUC o DNI"},null,8,["value"]),m(c,{type:"primary",disabled:O.search==="",onClick:V},{default:d(()=>s[6]||(s[6]=[K("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),m(he,{bordered:"",scroll:{x:e.value,y:z.value},class:"table-agreements-ugse",columns:H,"data-source":B.value,pagination:!1,loading:k.value,size:"small"},{headerCell:d(({column:M})=>s[7]||(s[7]=[])),bodyCell:d(({column:M,record:W,index:Ee})=>[M.dataIndex=="idx"?(r(),$(Q,{key:0},[K(ue(Z.value(Ee)),1)],64)):h("",!0),M.dataIndex=="status"?(r(),b(oe,{key:1,checked:W.status,"onUpdate:checked":ae=>W.status=ae,checkedValue:1,unCheckedValue:0,onChange:ae=>g(W.id),disabled:S.value!=="supervisor"},{checkedChildren:d(()=>s[8]||(s[8]=[x("span",{style:{"font-size":"12px"}},"Si",-1)])),unCheckedChildren:d(()=>s[9]||(s[9]=[x("span",{style:{"font-size":"12px"}},"No",-1)])),_:2},1032,["checked","onUpdate:checked","onChange","disabled"])):h("",!0),M.dataIndex=="actions"?(r(),b(be,{key:2,trigger:["click"]},{overlay:d(()=>[m(ve,null,{default:d(()=>[m(v,null,{default:d(()=>[x("a",{onClick:ae=>X(W)},"Editar",8,Ge)]),_:2},1024),m(v,null,{default:d(()=>[m(_e,{title:"¿Seguro de eliminar?",onConfirm:ae=>J(W)},{icon:d(()=>[m(q(xe),{style:{color:"red"}})]),default:d(()=>[s[10]||(s[10]=x("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:d(()=>[x("a",{class:"ant-dropdown-link",onClick:s[2]||(s[2]=de(()=>{},["prevent"]))},[m(c,{shape:"circle",icon:Re(q(Te)),size:"small"},null,8,["icon"])])]),_:2},1024)):h("",!0)]),_:1},8,["scroll","data-source","loading"])]),x("div",Be,[x("span",null,[m(ge,{color:"blue"},{default:d(()=>[x("b",null,ue(R.value),1)]),_:1}),s[12]||(s[12]=K("Registros"))]),m(ye,{size:"small",total:R.value,pageSize:n.value,onChange:y,showSizeChanger:!1},null,8,["total","pageSize"])]),m(fe,{open:L.value,"onUpdate:open":s[3]||(s[3]=M=>L.value=M),"root-class-name":"root-class-name",title:"Ruta Digital",placement:"right",width:"650"},{default:d(()=>[m(Fe,{onCloseDraw:w})]),_:1},8,["open"])],64)}}},Ze=ce(Ve,[["__scopeId","data-v-288dc678"]]);export{Ze as default};
