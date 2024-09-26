import{u as ce}from"./selectes-59b4dc10.js";import{f as Ce,r as Ue,a as Se}from"./asesorias-0812f050.js";import{c as i,A as Ie,L as ue,r as f,a as ve,j as me,K as _e,b as y,o as r,d as L,w as n,e as x,F as X,v as fe,p as _,h,q as c,t as F,M as De,_ as he,i as P,$ as xe,y as ee,m as H,f as ze,V as ke,u as Ae,x as Re,a1 as Ne}from"./index-e0613bd6.js";import"./es-55c1a072.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import"./storage-0b3c62d9.js";import{S as Oe}from"./DrawerSolicitante.componente-a25313aa.js";var $e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const Fe=$e;function be(q){for(var k=1;k<arguments.length;k++){var R=arguments[k]!=null?Object(arguments[k]):{},S=Object.keys(R);typeof Object.getOwnPropertySymbols=="function"&&(S=S.concat(Object.getOwnPropertySymbols(R).filter(function(D){return Object.getOwnPropertyDescriptor(R,D).enumerable}))),S.forEach(function(D){Ee(q,D,R[D])})}return q}function Ee(q,k,R){return k in q?Object.defineProperty(q,k,{value:R,enumerable:!0,configurable:!0,writable:!0}):q[k]=R,q}var ye=function(k,R){var S=be({},k,R.attrs);return i(Ie,be({},S,{icon:Fe}),null)};ye.displayName="RedoOutlined";ye.inheritAttrs=!1;const qe=ye;const Te={class:"grid-ruc20"},Pe={class:"select-notaries"},Le={class:"name"},Me={class:"city"},Ye={class:"address"},Ve="DD/MM/YYYY",Ge={__name:"AllFormalizacion20",props:["info","idCde"],emits:["closeDraw"],setup(q,{emit:k}){ue.locale("es");const R=xe({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),S=k,D=q,u=f(null),A=JSON.parse(localStorage.getItem("profile")),O=JSON.parse(localStorage.getItem("role")),m=ce(),t=f(!1),M=f(!1),Y=f(!0),l=f([]),$=f(null),a=ve({});m.$patch({cities:m.cities}),m.$patch({modalities:m.modalities}),m.$patch({economicSectors:m.economicSectors}),m.$patch({comercialActivities:m.comercialActivities}),m.$patch({regimes:m.regimes}),m.$patch({typeCapital:m.typeCapital}),m.fetchEconomicSectors(),m.fetchComercialActivities(),m.fetchRegimes(),m.fetchModalities(),m.fetchTypeCapital(),m.fetchCities();const T=[{value:"SI",label:"SI"},{value:"NO",label:"NO"}],B=o=>o&&o>ue().endOf("day"),E=o=>{if(o=="ruc"){const g=a.ruc;(g<2e10||g>20999999999)&&(a.ruc=null)}},v=o=>{(o=="ruc"||o=="montocapital")&&(a[o]=a[o].replace(/\D/g,""))},U=(o,g)=>{const d=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=g.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),Q=g.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),I=g.province.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),K=g.district.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.includes(d)||Q.includes(d)||I.includes(d)||K.includes(d)},b=async()=>{try{M.value=!0;const o={name:$.value};(await ee({url:"create/comercial-activities",method:"POST",data:o})).status==200&&($.value=null,m.fetchComercialActivities())}catch(o){console.log(o)}finally{M.value=!1}},w=o=>{a.province_id=null,a.district_id=null,m.fetchProvinces(o)},z=o=>{a.district_id=null,m.fetchDistricts(o)},V=async()=>{try{const{data:o}=await ze({url:"public/notaries-filters",method:"GET"}),g=o.map(d=>({value:d.id,name:d.name,city:d.city.name,province:d.province.name,district:d.district.name,address:d.address}));l.value=g,Y.value=!1}catch(o){console.error("Error de red:",o)}},G=(o,g)=>{const d=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return g.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(d)};function J(o){u.value=Ce;const{documentnumber:g,city_id:d,province_id:s,district_id:Q,address:I}=D.info,K=O.some(ae=>ae.id===7);a.dni=g,a.city_id=d,w(d),a.province_id=s,z(s),a.district_id=Q,a.address=I,V(),K&&(u.value.notary_id.disabled=!0,u.value.modality_id.disabled=!0,a.modality_id=1,a.notary_id=A.notary_id)}const W=async()=>{if(t.value=!0,!D.info.id)return H.error("Error al registrar, actualiza la página");const o={codesunarp:a.codesunarp,numbernotary:a.numbernotary,address:a.address,economicsector_id:a.economicsector_id,comercialactivity_id:a.comercialactivity_id,regime_id:a.regime_id,city_id:a.city_id,province_id:a.province_id,district_id:a.district_id,modality_id:a.modality_id,notary_id:a.notary_id,user_id:A.user_id,people_id:D.info.id,nameMype:a.nameMype,dateReception:a.dateReception?ue(a.dateReception).format("YYYY-MM-DD"):null,dateTramite:a.dateTramite?ue(a.dateTramite).format("YYYY-MM-DD"):null,ruc:a.ruc,dni:a.dni,typecapital_id:a.typecapital_id,isbic:a.isbic,montocapital:a.montocapital,cde_id:D.idCde?D.idCde:null};try{const g=await ee({url:"formalization/create-ruc20",method:"POST",data:o});if(g.status===200){const d={razonSocial:null,ruc:a.ruc,createdFrom:"F20"};H.success(g.message),a.codesunarp=null,a.economicsector_id=null,a.comercialactivity_id=null,a.regime_id=null,a.city_id=null,a.province_id=null,a.district_id=null,a.address=null,a.modality_id=null,a.nameMype=null,a.dateReception=null,a.dateTramite=null,a.notary_id=null,a.ruc=null,a.numbernotary=null,a.isbic=null,a.montocapital=null,a.typecapital_id=null,S("closeDraw",!0)}}catch(g){console.log("Error: "+g)}finally{t.value=!1}};return me(()=>{D.info&&J(D.info)}),_e(()=>D.info,o=>{o&&J()}),(o,g)=>{const d=y("a-select"),s=y("a-form-item"),Q=y("a-date-picker"),I=y("a-divider"),K=y("a-input"),ae=y("a-button"),oe=y("a-space"),ne=y("a-input-number"),re=y("a-form"),j=y("a-spin");return r(),L("div",null,[i(j,{spinning:Y.value},{default:n(()=>[i(re,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:W},{default:n(()=>[x("div",Te,[(r(!0),L(X,null,fe(u.value,(e,Z)=>(r(),L(X,{key:Z},[e.type==="iSelect"?(r(),_(s,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[e.name=="regime_id"?(r(),_(d,{key:0,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,options:h(m).regimes,"show-search":"","filter-option":G},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="modality_id"?(r(),_(d,{key:1,disabled:e.disabled,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,options:h(m).modalities},null,8,["disabled","value","onUpdate:value","options"])):c("",!0),e.name=="typecapital_id"?(r(),_(d,{key:2,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,options:h(m).typeCapital},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="isbic"?(r(),_(d,{key:3,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,options:T},null,8,["value","onUpdate:value"])):c("",!0),e.name=="notary_id"?(r(),_(d,{key:4,disabled:e.disabled,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,options:l.value,"option-label-prop":"name","show-search":"","filter-option":U},{option:n(({value:p,name:ie,city:pe,province:le,district:N,address:te})=>[x("div",Pe,[x("span",Le,F(ie),1),x("span",Me,F(pe)+" - "+F(le)+" - "+F(N),1),x("span",Ye,F(te),1)])]),_:2},1032,["disabled","value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iDate"?(r(),_(s,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[i(Q,{locale:h(De),value:a[e.name],"onUpdate:value":p=>a[e.name]=p,style:{width:"100%"},format:Ve,placeholder:"día/mes/año","disabled-date":B,disabled:e.disabled,onChange:g[0]||(g[0]=p=>a.birthday=o.birthdateDate)},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iSelectWrite"?(r(),_(s,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[e.name=="comercialactivity_id"?(r(),_(d,{key:0,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,"show-search":"",options:h(m).comercialActivities,"filter-option":G},{dropdownRender:n(({menuNode:p})=>[i(h(R),{vnodes:p},null,8,["vnodes"]),i(I,{style:{margin:"4px 0"}}),i(oe,{style:{padding:"4px 8px"}},{default:n(()=>[i(K,{ref_for:!0,ref:"inputRef",value:$.value,"onUpdate:value":g[1]||(g[1]=ie=>$.value=ie),placeholder:"Nueva actividad"},null,8,["value"]),i(ae,{type:"text",onClick:b,loading:M.value},{icon:n(()=>[i(h(he))]),default:n(()=>[g[3]||(g[3]=P(" Agregar "))]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):c("",!0),e.name=="economicsector_id"?(r(),_(d,{key:1,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,"show-search":"",options:h(m).economicSectors,"filter-option":G},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="city_id"?(r(),_(d,{key:2,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,"show-search":"",options:h(m).cities,"filter-option":G,onChange:w},null,8,["value","onUpdate:value","options"])):c("",!0),e.name=="province_id"?(r(),_(d,{key:3,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,"show-search":"",options:h(m).provinces,"filter-option":G,onChange:z,disabled:!a.city_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),e.name=="district_id"?(r(),_(d,{key:4,value:a[e.name],"onUpdate:value":p=>a[e.name]=p,"show-search":"",options:h(m).districts,"filter-option":G,disabled:!a.province_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iText"?(r(),_(s,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email,max:e.max,min:e.min}]},{default:n(()=>[i(K,{onInput:p=>v(e.name),value:a[e.name],"onUpdate:value":p=>a[e.name]=p,disabled:e.disabled,maxlength:e.max,placeholder:e.placeholder},null,8,["onInput","value","onUpdate:value","disabled","maxlength","placeholder"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iNumber"?(r(),_(s,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[i(ne,{style:{width:"100%"},value:a[e.name],"onUpdate:value":p=>a[e.name]=p,maxlength:e.max,onChange:p=>E(e.name)},null,8,["value","onUpdate:value","maxlength","onChange"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iTextLol"?(r(),_(s,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[i(K,{onInput:p=>v(e.name),value:a.dni,"onUpdate:value":g[2]||(g[2]=p=>a.dni=p),disabled:!D.documentnumber,maxlength:e.max,placeholder:e.placeholder},null,8,["onInput","value","disabled","maxlength","placeholder"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iMoney"?(r(),_(s,{key:6,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:n(()=>[i(ne,{min:1,style:{width:"100%"},value:a[e.name],"onUpdate:value":p=>a[e.name]=p,formatter:p=>`S/ ${p}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:p=>p.replace(/S\/\s?|(,*)/g,"")},null,8,["value","onUpdate:value","formatter","parser"])]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),i(s,null,{default:n(()=>[i(ae,{class:"btn-produce",type:"primary","html-type":"submit",loading:t.value},{default:n(()=>g[4]||(g[4]=[P("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},je=se(Ge,[["__scopeId","data-v-94cb37bc"]]);const Be={class:"wrapper-booking"},Je={class:"grid-booking"},He={__name:"FormalizacionRUC10",props:["info","idCde"],emits:["closeDraw"],setup(q,{emit:k}){const R=JSON.parse(localStorage.getItem("role")),S=xe({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),D=JSON.parse(localStorage.getItem("profile")),u=q,A=k,O=f(!1),m=f(null);f(null),f(!1);const t=ce(),M=f(!1);t.$patch({cities:t.cities}),t.$patch({provinces:t.provinces}),t.$patch({districts:t.districts}),t.$patch({modalities:t.modalities}),t.$patch({detailProcedures:t.detailProcedures}),t.$patch({economicSectors:t.economicSectors}),t.$patch({comercialActivities:t.comercialActivities}),t.fetchDetailProcedures(),t.fetchModalities(),t.fetchEconomicSectors(),t.fetchComercialActivities(),t.fetchCities();const Y=f(!0),l=ve({detailprocedure_id:null,modality_id:null,economicsector_id:null,comercialactivity_id:null,city_id:null,province_id:null,district_id:null,address:null,user_id:D.user_id}),$=async()=>{try{M.value=!0;const b={name:m.value};(await ee({url:"create/comercial-activities",method:"POST",data:b})).status==200&&(m.value=null,t.fetchComercialActivities())}catch(b){console.log(b)}finally{M.value=!1}},a=b=>{l.province_id=null,l.district_id=null,t.fetchProvinces(b)},T=b=>{l.district_id=null,t.fetchDistricts(b)},B=(b,w)=>{const z=b.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return w.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(z)},E=async()=>{if(O.value=!0,!u.info.id)return H.error("Error al registrar, actualiza la página");const b={dni:l.dni,detailprocedure_id:l.detailprocedure_id,modality_id:l.modality_id,economicsector_id:l.economicsector_id,comercialactivity_id:l.comercialactivity_id,city_id:l.city_id,province_id:l.province_id,district_id:l.district_id,address:l.address,ruc:l.ruc,user_id:D.user_id,people_id:u.info.id,cde_id:u.idCde?u.idCde:null};try{const w=await ee({url:"formalization/create-ruc-10",method:"POST",data:b});if(w.status===200){const z={razonSocial:null,ruc:l.ruc,createdFrom:"F10"};H.success(w.message),l.detailprocedure_id=null,l.modality_id=null,l.economicsector_id=null,l.comercialactivity_id=null,l.city_id=null,l.province_id=null,l.district_id=null,l.address=null,l.ruc=null,A("closeDraw",!0)}}catch(w){console.log("Error: "+w)}finally{O.value=!1}},v=()=>{H.warning("Debes de completar todos los espacios requeridos")};function U(){const{documentnumber:b,city_id:w,province_id:z,district_id:V,address:G}=u.info,J=R.some(W=>W.id===7);l.dni=b,l.city_id=w,a(w),l.province_id=z,T(z),l.district_id=V,l.address=G,J&&(l.modality_id=1),l.district_id&&setTimeout(()=>{Y.value=!1},1500)}return me(()=>{u.info&&U(u.info)}),_e(()=>u.info,b=>{b&&U()}),(b,w)=>{const z=y("a-select"),V=y("a-form-item"),G=y("a-input"),J=y("a-divider"),W=y("a-button"),o=y("a-space"),g=y("a-form"),d=y("a-spin");return r(),L("div",Be,[i(d,{spinning:Y.value},{default:n(()=>[i(g,{layout:"vertical",model:l,name:"basic",autocomplete:"off",onFinish:E,onFinishFailed:v},{default:n(()=>[x("div",Je,[(r(!0),L(X,null,fe(h(Ue),(s,Q)=>(r(),L(X,{key:Q},[s.type==="iSelect"?(r(),_(V,{key:0,class:"item-max",name:s.name,label:s.label,rules:[{required:s.required,message:s.message}]},{default:n(()=>[s.name=="detailprocedure_id"?(r(),_(z,{key:0,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,options:h(t).detailProcedures},null,8,["value","onUpdate:value","options"])):c("",!0),s.name=="modality_id"?(r(),_(z,{key:1,disabled:s.disabled,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,options:h(t).modalities},null,8,["disabled","value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),s.type==="iText"?(r(),_(V,{key:1,name:s.name,label:s.label,rules:[{required:s.required,message:s.message,type:s.email,max:s.max}]},{default:n(()=>[i(G,{value:l[s.name],"onUpdate:value":I=>l[s.name]=I,disabled:s.name==="dni"&&!!l[s.name],maxlength:s.max,placeholder:s.placeholder},null,8,["value","onUpdate:value","disabled","maxlength","placeholder"])]),_:2},1032,["name","label","rules"])):c("",!0),s.type==="iSelectWrite"?(r(),_(V,{key:2,class:"item-max",name:s.name,label:s.label,rules:[{required:s.required,message:s.message}]},{default:n(()=>[s.name=="comercialactivity_id"?(r(),_(z,{key:0,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,"show-search":"",options:h(t).comercialActivities,"filter-option":B},{dropdownRender:n(({menuNode:I})=>[i(h(S),{vnodes:I},null,8,["vnodes"]),i(J,{style:{margin:"4px 0"}}),i(o,{style:{padding:"4px 8px"}},{default:n(()=>[i(G,{ref_for:!0,ref:"inputRef",value:m.value,"onUpdate:value":w[0]||(w[0]=K=>m.value=K),placeholder:"Nueva actividad"},null,8,["value"]),i(W,{type:"text",onClick:$,loading:M.value},{icon:n(()=>[i(h(he))]),default:n(()=>[w[1]||(w[1]=P(" Agregar "))]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):c("",!0),s.name=="economicsector_id"?(r(),_(z,{key:1,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,"show-search":"",options:h(t).economicSectors,"filter-option":B},null,8,["value","onUpdate:value","options"])):c("",!0),s.name=="city_id"?(r(),_(z,{key:2,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,"show-search":"",options:h(t).cities,"filter-option":B,onChange:a},null,8,["value","onUpdate:value","options"])):c("",!0),s.name=="province_id"?(r(),_(z,{key:3,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,"show-search":"",options:h(t).provinces,"filter-option":B,onChange:T,disabled:!l.city_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),s.name=="district_id"?(r(),_(z,{key:4,value:l[s.name],"onUpdate:value":I=>l[s.name]=I,"show-search":"",options:h(t).districts,"filter-option":B,disabled:!l.province_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),i(V,null,{default:n(()=>[i(W,{type:"primary",class:"btn-produce","html-type":"submit",loading:O.value},{default:n(()=>w[2]||(w[2]=[P("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Ke=se(He,[["__scopeId","data-v-cb65d5b7"]]);const We={class:"wrapper-booking"},Qe={class:"grid-booking"},Ze={__name:"AsesoriaNuevo",props:["info","idCde"],emits:["closeDraw"],setup(q,{emit:k}){const R=JSON.parse(localStorage.getItem("role")),S=q,D=k,u=ce(),A=JSON.parse(localStorage.getItem("profile")),O=f(!1);f(!1),f(null),f(null),u.$patch({components:u.components}),u.$patch({componentThemes:u.componentThemes}),u.$patch({modalities:u.modalities}),u.$patch({cities:u.cities}),u.$patch({economicSectors:u.economicSectors}),u.$patch({comercialActivities:u.comercialActivities}),u.fetchEconomicSectors(),u.fetchComercialActivities(),u.fetchComponents(),u.fetchModalities(),u.fetchCities();const m=f(!0),t=ve({cde_id:null,dni:null,economicsector_id:null,comercialactivity_id:null,component_id:null,theme_id:null,modality_id:null,ruc:null,city_id:null,province_id:null,district_id:null,observations:null,user_id:A.user_id}),M=v=>{v=="ruc"&&(t[v]=t[v].replace(/\D/g,""))},Y=v=>{t.theme_id=null,u.fetchComponentThemes(v)},l=v=>{t.province_id=null,t.district_id=null,u.fetchProvinces(v)},$=v=>{t.district_id=null,u.fetchDistricts(v)},a=(v,U)=>{const b=v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return U.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},T=async()=>{if(O.value=!0,!S.info.id)return H.error("Error al registrar actualiza la página");const v={dni:t.dni,economicsector_id:t.economicsector_id,comercialactivity_id:t.comercialactivity_id,observations:t.observations,user_id:A.user_id,people_id:S.info.id,component_id:t.component_id,theme_id:t.theme_id,modality_id:t.modality_id,city_id:t.city_id,province_id:t.province_id,district_id:t.district_id,ruc:t.ruc,cde_id:S.idCde?S.idCde:null};try{const U=await ee({url:"advisory/create",method:"POST",data:v});if(U.status===200){const b={razonSocial:null,ruc:t.ruc,createdFrom:"asesorias"};H.success(U.message),t.component_id=null,t.theme_id=null,t.modality_id=null,t.city_id=null,t.province_id=null,t.district_id=null,t.observations=null,t.ruc=null,t.economicsector_id=null,t.comercialactivity_id=null,D("closeDraw",!0)}}catch(U){console.log("Error: "+U)}finally{O.value=!1}},B=()=>{H.warning("Debes de completar todos los espacios requeridos")};function E(){const{documentnumber:v,city_id:U,province_id:b,district_id:w}=S.info,z=R.some(V=>V.id===7);t.dni=v,t.city_id=U,l(U),t.province_id=b,$(b),t.district_id=w,z&&(u.fetchComponentThemes(4),t.component_id=4,t.modality_id=1),t.district_id&&setTimeout(()=>{m.value=!1},1500)}return me(()=>{S.info&&E(S.info)}),_e(()=>S.info,v=>{v&&E()}),(v,U)=>{const b=y("a-select"),w=y("a-form-item"),z=y("a-textarea"),V=y("a-input"),G=y("a-button"),J=y("a-form"),W=y("a-spin");return r(),L("div",We,[i(W,{spinning:m.value},{default:n(()=>[i(J,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:T,onFinishFailed:B},{default:n(()=>[x("div",Qe,[(r(!0),L(X,null,fe(h(Se),(o,g)=>(r(),L(X,{key:g},[o.type==="iSelect"?(r(),_(w,{key:0,class:"item-max",name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:n(()=>[o.name=="modality_id"?(r(),_(b,{key:0,disabled:o.disabled,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,options:h(u).modalities},null,8,["disabled","value","onUpdate:value","options"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0),o.type==="iTextarea"?(r(),_(w,{key:1,name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:n(()=>[i(z,{value:t[o.name],"onUpdate:value":d=>t[o.name]=d,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):c("",!0),o.type==="iText"?(r(),_(w,{key:2,name:o.name,label:o.label,rules:[{required:o.required,message:o.message,type:o.email,max:o.max}]},{default:n(()=>[i(V,{value:t[o.name],"onUpdate:value":d=>t[o.name]=d,maxlength:o.max,onInput:d=>M(o.name),placeholder:o.placeholder,disabled:o.name==="dni"&&!!t[o.name]},null,8,["value","onUpdate:value","maxlength","onInput","placeholder","disabled"])]),_:2},1032,["name","label","rules"])):c("",!0),o.type==="iSelectWrite"?(r(),_(w,{key:3,class:"item-max",name:o.name,label:o.label,rules:[{required:o.required,message:o.message}]},{default:n(()=>[o.name=="city_id"?(r(),_(b,{key:0,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).cities,"filter-option":a,onChange:l},null,8,["value","onUpdate:value","options"])):c("",!0),o.name=="province_id"?(r(),_(b,{key:1,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).provinces,"filter-option":a,onChange:$,disabled:!t.city_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),o.name=="district_id"?(r(),_(b,{key:2,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).districts,"filter-option":a,disabled:!t.province_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0),o.name=="economicsector_id"?(r(),_(b,{key:3,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).economicSectors,"filter-option":a},null,8,["value","onUpdate:value","options"])):c("",!0),o.name=="comercialactivity_id"?(r(),_(b,{key:4,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).comercialActivities,"filter-option":a},null,8,["value","onUpdate:value","options"])):c("",!0),o.name=="component_id"?(r(),_(b,{key:5,disabled:o.disabled,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).components,"filter-option":a,onChange:Y},null,8,["disabled","value","onUpdate:value","options"])):c("",!0),o.name=="theme_id"?(r(),_(b,{key:6,value:t[o.name],"onUpdate:value":d=>t[o.name]=d,"show-search":"",options:h(u).componentThemes,"filter-option":a,disabled:!t.component_id},null,8,["value","onUpdate:value","options","disabled"])):c("",!0)]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),i(w,null,{default:n(()=>[i(G,{type:"primary",class:"btn-produce","html-type":"submit",loading:O.value},{default:n(()=>U[0]||(U[0]=[P("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},Xe=se(Ze,[["__scopeId","data-v-7d34e3f3"]]);const ea={key:0},aa={key:0},ta={key:0},oa={__name:"AsesoriasHistorial",props:["totaladvisories","totalformalization10","totalformalization20"],setup(q){const k=q,R=f("1"),S=[{title:"#",dataIndex:"idx",width:30,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:110,align:"center"},{title:"Asesor",dataIndex:"asesor",width:140},{title:"Componente",dataIndex:"component",width:20},{title:"Tema",dataIndex:"theme",width:100},{title:"Modalidad",dataIndex:"modality",align:"center",width:60},{title:"Ciudad",dataIndex:"city",width:40},{title:"Provincia",dataIndex:"province",width:40},{title:"Distrito",dataIndex:"district",width:40}],D=[{title:"#",dataIndex:"idx",width:30,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:110},{title:"Asesor",dataIndex:"asesor",width:140},{title:"Sector económico",dataIndex:"economicsector",width:100},{title:"Actividad comercial",dataIndex:"comercialactivity",width:100},{title:"Detalle del trámite",dataIndex:"detailprocedure",width:100},{title:"Modalidad",dataIndex:"modality",align:"center",width:100},{title:"RUC",dataIndex:"ruc",width:50},{title:"Ciudad",dataIndex:"city",width:40},{title:"Provincia",dataIndex:"province",width:40},{title:"Distrito",dataIndex:"district",width:40}],u=[{title:"#",dataIndex:"idx",width:30,align:"center"},{title:"Fecha registro",dataIndex:"date_start",width:110},{title:"Asesor",dataIndex:"asesor",width:140},{title:"Sector económico",dataIndex:"economicsector",width:100},{title:"Actividad comercial",dataIndex:"comercialactivity",width:100},{title:"Régimen",dataIndex:"regime",width:80,align:"center"},{title:"Número solicitud constancia",dataIndex:"numbernotary",width:100},{title:"Nombre empresa",dataIndex:"mypename",width:160},{title:"RUC",dataIndex:"ruc",width:80},{title:"Modalidad",dataIndex:"modality",align:"center",width:70},{title:"Ciudad",dataIndex:"city",width:30},{title:"Provincia",dataIndex:"province",width:20},{title:"Distrito",dataIndex:"district",width:20},{title:"Dirección",dataIndex:"address",width:200}],A=O=>ke(O).format("DD/MM/YYYY HH:mm A");return(O,m)=>{const t=y("a-table"),M=y("a-card"),Y=y("a-tab-pane"),l=y("a-tabs");return r(),_(l,{activeKey:R.value,"onUpdate:activeKey":m[0]||(m[0]=$=>R.value=$),type:"card",class:"box-hist"},{default:n(()=>[i(Y,{key:"1",tab:"ASESORÍAS"},{default:n(()=>[i(M,null,{default:n(()=>[i(t,{columns:S,"data-source":k.totaladvisories,bordered:"",pagination:!1,size:"small",scroll:{x:1200},"expand-column-width":100},{bodyCell:n(({index:$,column:a,record:T})=>[a.dataIndex==="idx"?(r(),L("span",ea,F($+1),1)):c("",!0),a.dataIndex==="date_start"?(r(),L(X,{key:1},[P(F(A(T.createDate)),1)],64)):c("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1}),i(Y,{key:"2",tab:"RUC 10"},{default:n(()=>[i(M,null,{default:n(()=>[i(t,{columns:D,"data-source":k.totalformalization10,bordered:"",pagination:!1,size:"small",scroll:{x:1800},"expand-column-width":100},{bodyCell:n(({index:$,column:a,record:T})=>[a.dataIndex==="idx"?(r(),L("span",aa,F($+1),1)):c("",!0),a.dataIndex==="date_start"?(r(),L(X,{key:1},[P(F(A(T.createDate)),1)],64)):c("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1}),i(Y,{key:"3",tab:"RUC 20"},{default:n(()=>[i(M,null,{default:n(()=>[i(t,{columns:u,"data-source":k.totalformalization20,bordered:"",pagination:!1,size:"small",scroll:{x:2200},"expand-column-width":100},{bodyCell:n(({index:$,column:a,record:T})=>[a.dataIndex==="idx"?(r(),L("span",ta,F($+1),1)):c("",!0),a.dataIndex==="date_start"?(r(),L(X,{key:1},[P(F(A(T.createDate)),1)],64)):c("",!0)]),_:1},8,["data-source"])]),_:1})]),_:1})]),_:1},8,["activeKey"])}}},na=se(oa,[["__scopeId","data-v-01e75dfe"]]);const ia={class:"asesorias"},la={class:"wrapper-s"},sa={key:0,class:"card-as",style:{padding:"1rem"}},ra={__name:"AsesoriasFormalizaciones",setup(q){const k=JSON.parse(localStorage.getItem("role")),R=()=>k.some(j=>j.id===7),S=ce(),D=Ae(),u=Re(),A=f(0),O=f(null),m=f(null),t=f([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]);S.$patch({cdes:S.cdes}),S.fetchCdes();const M=f(null),Y=f(!1),l=f(null);f(!1);const $=f(!1);f(!1);const a=f(!1),T=f(!1),B=f(!1),E=f(""),v=f([]),U=f(!1),b=f(0);f(!1);const w=f([]);f(null);const z=f([]),V=f([]),G=f([]),J=f(!1),W=j=>{m.value.cde_id=j,localStorage.setItem("profile",JSON.stringify(m.value))},o=(j,e)=>{const Z=j.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(Z)},g=()=>{ne(E.value),Y.value=!1},d=()=>{Q()},s=()=>{E.value=E.value.replace(/\D/g,"")},Q=()=>{J.value=!1,E.value="",v.value=[],w.value=[],D.push({name:"asesorias-formalizaciones"})},I=()=>{if(l.value=null,l.value=v.value,!O.value)return H.warning("Seleccionar un tipo de servicio");O.value=="asesoria"&&(B.value=!0),O.value=="ruc10"&&(T.value=!0),O.value=="ruc20"&&ae()},K=()=>{M.value=v.value,Y.value=!0},ae=()=>{b.value=0,a.value=!0,$.value=!1},oe=async()=>{U.value=!0;const j=await ee({url:`person/found/${A.value}/${E.value}`,method:"GET"});if(j.status==200)return v.value=j.data,re(v.value.id),U.value=!1},ne=async j=>{if(U.value=!0,!j)return H.warning("Ingresa un número de documento"),U.value=!1;if(A.value==0)return H.warning("Seleccionar el tipo de documento"),U.value=!1;if(A.value==1&&E.value.length<8){H.warning("El número de DNI está incompleto"),U.value=!1;return}const e=await ee({url:`person/found/${A.value}/${E.value}`,method:"GET"});if(e.status==200)return v.value=e.data,re(e.data.id),m.value=JSON.parse(localStorage.getItem("profile")),U.value=!1;if(e.status===404){const Z={type:A.value,access:"asesorias",number:E.value};D.push({name:"registrar-persona",query:Z})}},re=async j=>{try{const{data:e}=await ee({url:`historial/registers/${j}`,method:"GET"});z.value=e.advisories,V.value=e.formalization10,G.value=e.formalization20,J.value=!0}catch(e){console.error("Error de red:",e)}};return me(()=>{u.query.type&&(A.value=u.query.type,E.value=u.query.number)}),(j,e)=>{const Z=y("a-radio"),p=y("a-tooltip"),ie=y("a-radio-group"),pe=y("a-input-search"),le=y("a-card"),N=y("a-col"),te=y("a-row"),ge=y("a-select"),we=y("a-button"),de=y("a-drawer");return r(),L(X,null,[x("div",ia,[e[32]||(e[32]=x("h3",{class:"title-produce"},"REGISTRO DE FORMALIZACIONES Y ASESORÍAS",-1)),e[33]||(e[33]=x("br",null,null,-1)),i(le,{class:"card-as card-gray"},{default:n(()=>[h(u).query.dni?(r(),_(h(qe),{key:0,class:"ico-reload",onClick:d})):c("",!0),x("div",la,[x("div",null,[e[19]||(e[19]=x("label",{class:"label"},"Seleccione el tipo de documento",-1)),i(ie,{value:A.value,"onUpdate:value":e[0]||(e[0]=C=>A.value=C),onChange:Q,class:"radio-produce"},{default:n(()=>[i(p,{color:"cyan"},{title:n(()=>e[11]||(e[11]=[P("Documento Nacional de Identidad")])),default:n(()=>[i(Z,{value:"1"},{default:n(()=>e[12]||(e[12]=[P("DNI")])),_:1})]),_:1}),i(p,{color:"cyan"},{title:n(()=>e[13]||(e[13]=[P("Carnet de Extranjería")])),default:n(()=>[i(Z,{value:"2"},{default:n(()=>e[14]||(e[14]=[P("CE")])),_:1})]),_:1}),i(p,{color:"cyan"},{title:n(()=>e[15]||(e[15]=[P("Pasaporte")])),default:n(()=>[i(Z,{value:"3"},{default:n(()=>e[16]||(e[16]=[P("PAS")])),_:1})]),_:1}),i(p,{color:"cyan"},{title:n(()=>e[17]||(e[17]=[P("Permiso Temporal de Permanencia")])),default:n(()=>[i(Z,{value:"4"},{default:n(()=>e[18]||(e[18]=[P("PTP")])),_:1})]),_:1})]),_:1},8,["value"])]),x("div",null,[e[20]||(e[20]=x("label",{class:"label"},"Digite el número de documento",-1)),i(pe,{"enter-button":"BUSCAR",value:E.value,"onUpdate:value":e[1]||(e[1]=C=>E.value=C),placeholder:"",loading:U.value,onSearch:ne,onInput:s,class:"search-produce",maxlength:A.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),i(te,{gutter:[16,16]},{default:n(()=>[i(N,{xs:24,sm:24,lg:12},{default:n(()=>[v.value.length!=0?(r(),_(le,{key:0},{default:n(()=>[e[27]||(e[27]=x("h4",{class:"title-produce"},"RESULTADO DE LA BÚSQUEDA",-1)),i(h(Ne),{class:"box-icoedit",onClick:K}),i(te,{gutter:[0,2],class:"box-info"},{default:n(()=>[i(N,{xs:12,sm:8},{default:n(()=>e[21]||(e[21]=[x("b",{class:"box-title"},"Apellidos y nombres:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>[x("span",null,F(v.value.lastname)+" "+F(v.value.middlename)+", "+F(v.value.name),1)]),_:1}),i(N,{xs:12,sm:8},{default:n(()=>e[22]||(e[22]=[x("b",{class:"box-title"},"Número de celular:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>[x("span",null,F(v.value.phone?v.value.phone:"-"),1)]),_:1}),i(N,{xs:12,sm:8},{default:n(()=>e[23]||(e[23]=[x("b",{class:"box-title"},"Correo electrónico:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>[x("span",null,F(v.value.email?v.value.email:"-"),1)]),_:1}),i(N,{xs:12,sm:8},{default:n(()=>e[24]||(e[24]=[x("b",{class:"box-title"},"Asesorías:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>{var C;return[x("span",null,F((C=v.value)==null?void 0:C.idadvisory.length),1)]}),_:1}),i(N,{xs:12,sm:8},{default:n(()=>e[25]||(e[25]=[x("b",{class:"box-title"},"Formalizaciones RUC 20:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>{var C;return[x("span",null,F((C=v.value)==null?void 0:C.idformalization20.length),1)]}),_:1}),i(N,{xs:12,sm:8},{default:n(()=>e[26]||(e[26]=[x("b",{class:"box-title"},"Formalizaciones RUC 10:",-1)])),_:1}),i(N,{xs:12,sm:12},{default:n(()=>{var C;return[x("span",null,F((C=v.value)==null?void 0:C.idformalization10.length),1)]}),_:1})]),_:1})]),_:1})):c("",!0)]),_:1}),i(N,{xs:24,sm:24,lg:12},{default:n(()=>[v.value.length!=0?(r(),_(le,{key:0,style:{height:"100%"}},{default:n(()=>[i(te,{gutter:[16,24]},{default:n(()=>[R()?c("",!0):(r(),_(N,{key:0,xs:24,sm:18,md:12,lg:12},{default:n(()=>[e[28]||(e[28]=x("h4",{class:"title-produce"},"SELECCIONAR CDE",-1)),i(ge,{class:"w-100",value:m.value.cde_id,"onUpdate:value":e[2]||(e[2]=C=>m.value.cde_id=C),options:h(S).cdes,"show-search":"","filter-option":o,onChange:W},null,8,["value","options"])]),_:1})),i(N,{xs:24,sm:18,md:12,lg:17},{default:n(()=>[e[30]||(e[30]=x("h4",{class:"title-produce"},"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),i(te,{gutter:[10,0]},{default:n(()=>[i(N,{xs:17,sm:18},{default:n(()=>[i(ge,{class:"w-100",value:O.value,"onUpdate:value":e[3]||(e[3]=C=>O.value=C),options:t.value},null,8,["value","options"])]),_:1}),i(N,{xs:6},{default:n(()=>[i(we,{type:"primary",onClick:I},{default:n(()=>e[29]||(e[29]=[P("REGISTRAR")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):c("",!0)]),_:1})]),_:1}),J.value?(r(),L("div",sa,[e[31]||(e[31]=x("h4",{class:"title-produce"},"HISTORIAL",-1)),i(na,{totaladvisories:z.value,totalformalization10:V.value,totalformalization20:G.value},null,8,["totaladvisories","totalformalization10","totalformalization20"])])):c("",!0)]),x("section",null,[i(de,{title:"Regitsrar una Formalización con RUC 20",open:a.value,"onUpdate:open":e[5]||(e[5]=C=>a.value=C),placement:"right",width:"880px"},{default:n(()=>[i(je,{info:l.value,idCde:m.value.cde_id,onCloseDraw:e[4]||(e[4]=C=>(a.value=!1,oe()))},null,8,["info","idCde"]),e[34]||(e[34]=x("div",{class:"steps-content"},null,-1))]),_:1},8,["open"]),i(de,{width:"600px",title:"Regitsrar Formalización con RUC 10",open:T.value,"onUpdate:open":e[7]||(e[7]=C=>T.value=C),placement:"right"},{default:n(()=>[i(Ke,{info:v.value,idCde:m.value.cde_id,onCloseDraw:e[6]||(e[6]=C=>(T.value=!1,oe()))},null,8,["info","idCde"])]),_:1},8,["open"]),i(de,{width:"600px",title:"Registrar una asesoría",open:B.value,"onUpdate:open":e[9]||(e[9]=C=>B.value=C),placement:"right"},{default:n(()=>[i(Xe,{info:v.value,idCde:m.value.cde_id,onCloseDraw:e[8]||(e[8]=C=>(B.value=!1,oe()))},null,8,["info","idCde"])]),_:1},8,["open"]),i(de,{width:"600",open:Y.value,"onUpdate:open":e[10]||(e[10]=C=>Y.value=C),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:n(()=>[i(Oe,{onCloseDraw:g,updateValues:M.value},null,8,["updateValues"])]),_:1},8,["open"])])],64)}}},fa=se(ra,[["__scopeId","data-v-a3690692"]]);export{fa as default};