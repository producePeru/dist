import{r as w,a as ae,l as te,b as g,o as a,d as h,c as i,w as s,e as m,F as G,z as Q,i as V,B as _,s as l,Q as ue,j as B,R as ce,h as E,m as O,f as Z,M as ge,N as be,S as he,g as Se,t as $,p as me,k as pe,u as xe,x as we,q as ne,P as ke}from"./index-0c4a2b29.js";import{e as le,r as Ue,m as se,p as _e,a as ve}from"./selects-377c3659.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const qe={code_sid_sunarp:{type:"iText",label:"Código SID sunarp",name:"code_sid_sunarp",required:!0,message:"Escribir apellido",disabled:!1},economy_sector:{type:"iSelect",label:"Sector económico",name:"economy_sector",required:!0,message:"Seleccionar tipo de documento",disabled:!1},category:{type:"iSelectWrite",label:"Actividad comercial",name:"category",required:!0,message:"Seleccionar tipo de documento",disabled:!1},department:{type:"iSelectWrite",label:"Departamento",name:"department",required:!0,message:"Seleccionar departamento",disabled:!1},province:{type:"iSelectWrite",label:"Provincia",name:"province",required:!0,message:"Seleccionar provincia",disabled:!1},district:{type:"iSelectWrite",label:"Distrito",name:"district",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!1,message:"Escribir apellido",disabled:!1}},Ie={social_reason:{type:"iText",label:"Nombre empresa",name:"social_reason",required:!0,message:"Escribir apellido",disabled:!1},type_regimen:{type:"iSelect",label:"Tipo de régimen societario",name:"type_regimen",required:!0,message:"Seleccionar tipo de documento",disabled:!1},num_notary:{type:"iText",label:"Número de solicitud de envio a Notaría",name:"num_notary",required:!1,message:"Seleccionar departamento",disabled:!1},id_notary:{type:"iSelect",label:"Notaría",name:"id_notary",required:!1,message:"Seleccionar notaría",disabled:!1},modality:{type:"iSelect",label:"Modalidad de atención",name:"modality",required:!1,message:"Seleccionar modalidad",disabled:!1}},Ce={ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir número de RUC",disabled:!1,max:9,min:9}},De={detail_procedure:{type:"iSelect",label:"Detalle del trámite",name:"detail_procedure",required:!0,message:"Escribir número de RUC",disabled:!1},modality:{type:"iSelect",label:"Modalidad de atención",name:"modality",required:!0,message:"Seleccionar modalidad",disabled:!1},economy_sector:{type:"iSelect",label:"Sector económico",name:"economy_sector",required:!0,message:"Seleccionar el sector económico",disabled:!1},category:{type:"iSelectWrite",label:"Actividad comercial",name:"category",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},department:{type:"iSelectWrite",label:"Departamento",name:"department",required:!0,message:"Seleccionar departamento",disabled:!1},province:{type:"iSelectWrite",label:"Provincia",name:"province",required:!0,message:"Seleccionar provincia",disabled:!1},district:{type:"iSelectWrite",label:"Distrito",name:"district",required:!0,message:"Seleccionar distrito",disabled:!1}},Fe={component:{type:"iSelect",label:"Componente",name:"component",required:!0,message:"Seleccionar un componente",disabled:!1},tema_compoment:{type:"iSelectWrite",label:"Tema del componente",name:"tema_compoment",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality:{type:"iSelect",label:"Modalidad de atención",name:"modality",required:!0,message:"Seleccionar modalidad",disabled:!1},department:{type:"iSelectWrite",label:"Departamento",name:"department",required:!0,message:"Seleccionar departamento",disabled:!1},province:{type:"iSelectWrite",label:"Provincia",name:"province",required:!0,message:"Seleccionar provincia",disabled:!1},district:{type:"iSelectWrite",label:"Distrito",name:"district",required:!0,message:"Seleccionar distrito",disabled:!1},description:{type:"iTextarea",label:"Observaciones",name:"description",required:!1,message:"Seleccionar tipo de documento",disabled:!1}};const Re={class:"wrapper-booking"},Te={class:"grid-booking"},$e={__name:"ReservaNombre",props:["info"],emits:["closeDraw"],setup(R,{emit:N}){const H=ce({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),U=JSON.parse(localStorage.getItem("user")),L=R,z=N,F=w([]),n=w([]),x=w([]),I=w([]),C=w(!1),o=w(),v=w(!1),p=ae({id_person:null,dni:null,step:1,code_sid_sunarp:null,economy_sector:null,department:null,province:null,district:null,address:null,created_by:U.id}),d=async()=>{v.value=!0;try{await E({url:"/create-comercial-activities",method:"POST",data:{name:o.value}}),S(),o.value=""}catch{O.error("Error al registrar")}finally{v.value=!1}},P=async()=>{p.id_person=L.info.id,p.dni=L.info.dni,C.value=!0;const u={number:L.info.dni,id_post:3};try{const y=await E({url:"/formalization20",method:"POST",data:p});await E({url:"/person-post",method:"POST",data:u}),y&&(O.success("Registro exitoso"),p.code_sid_sunarp=null,p.economy_sector=null,p.department=null,p.province=null,p.district=null,p.address=null,z("closeDraw",!0))}catch{O.error("Error al registrar")}finally{C.value=!1}},k=()=>{O.error("Debes de completar todos los espacios requeridos")},M=(u,y)=>{const b=u.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return y.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(b)},J=async()=>{try{const{data:u}=await Z({url:"/departaments",method:"GET"});let y=u.map(b=>({label:b.label,value:b.id}));F.value=[...F.value,...y]}catch(u){console.log(u)}},q=async u=>{p.province=null,p.district=null,n.value=[],x.value=[];try{const{data:y}=await Z({url:`/province/${u}`,method:"GET"});let b=y.map(r=>({label:r.label,value:r.id}));n.value=[...n.value,...b]}catch(y){console.log(y)}},t=async u=>{p.district=null,x.value=[];try{const{data:y}=await Z({url:`/district/${u}`,method:"GET"});let b=y.map(r=>({label:r.label,value:r.id}));x.value=[...x.value,...b]}catch(y){console.log(y)}},S=async()=>{try{const{data:u}=await E({url:"/comercial-activities",method:"GET"});I.value=u}catch(u){console.log(u)}};return te(()=>{J(),S()}),(u,y)=>{const b=g("a-select"),r=g("a-form-item"),e=g("a-divider"),j=g("a-input"),T=g("a-button"),X=g("a-space"),ee=g("a-form");return a(),h("div",Re,[i(ee,{layout:"vertical",model:p,name:"basic",autocomplete:"off",onFinish:P,onFinishFailed:k},{default:s(()=>[m("div",Te,[(a(!0),h(G,null,Q(V(qe),(f,c)=>(a(),h(G,{key:c},[f.type==="iSelect"?(a(),_(r,{key:0,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:s(()=>[f.name=="economy_sector"?(a(),_(b,{key:0,value:p[f.name],"onUpdate:value":W=>p[f.name]=W,options:V(le)},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iSelectWrite"?(a(),_(r,{key:1,class:"item-max",name:f.name,label:f.label,rules:[{required:f.required,message:f.message}]},{default:s(()=>[f.name=="category"?(a(),_(b,{key:0,value:p[f.name],"onUpdate:value":W=>p[f.name]=W,"show-search":"",options:I.value,"filter-option":M},{dropdownRender:s(({menuNode:W})=>[i(V(H),{vnodes:W},null,8,["vnodes"]),i(e,{style:{margin:"4px 0"}}),i(X,{style:{padding:"4px 8px"}},{default:s(()=>[i(j,{ref_for:!0,ref:"inputRef",value:o.value,"onUpdate:value":y[0]||(y[0]=A=>o.value=A),placeholder:"Nueva actividad"},null,8,["value"]),i(T,{type:"text",onClick:d,loading:v.value},{icon:s(()=>[i(V(ue))]),default:s(()=>[B(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),f.name=="department"?(a(),_(b,{key:1,value:p[f.name],"onUpdate:value":W=>p[f.name]=W,"show-search":"",options:F.value,"filter-option":M,onChange:q},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="province"?(a(),_(b,{key:2,value:p[f.name],"onUpdate:value":W=>p[f.name]=W,"show-search":"",options:n.value,"filter-option":M,onChange:t},null,8,["value","onUpdate:value","options"])):l("",!0),f.name=="district"?(a(),_(b,{key:3,value:p[f.name],"onUpdate:value":W=>p[f.name]=W,"show-search":"",options:x.value,"filter-option":M},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),f.type==="iText"?(a(),_(r,{key:2,name:f.name,label:f.label,rules:[{required:f.required,message:f.message,type:f.email,max:f.max}]},{default:s(()=>[i(j,{value:p[f.name],"onUpdate:value":W=>p[f.name]=W,disabled:f.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),i(r,null,{default:s(()=>[i(T,{type:"primary","html-type":"submit",loading:C.value},{default:s(()=>[B("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Ae=K($e,[["__scopeId","data-v-3d6d232d"]]);const Ne={class:"wrapper-booking"},ze={class:"grid-booking"},Ee={__name:"ActoConstitutivo",props:["info"],emits:["closeDraw"],setup(R,{emit:N}){const H=JSON.parse(localStorage.getItem("user")),U=R,L=N,z=w([]),F=w(!1),n=ae({id_person:null,dni:null,step:2,code_sid_sunarp:null,social_reason:null,type_regimen:null,num_notary:null,id_notary:null,modality:null,updated_by:H.id}),x=async()=>{n.id_person=U.info.id_person,n.dni=U.info.dni,n.code_sid_sunarp=U.info.code_sid_sunarp,F.value=!0;try{const o=await E({url:"/formalization20",method:"POST",data:n});o&&(O.success(o.message),n.social_reason=null,n.type_regimen=null,n.id_notary=null,n.num_notary=null,n.modality=null,L("closeDraw",!0))}catch{O.error("Error al registrar")}finally{F.value=!1}},I=()=>{O.error("Debes de completar todos los espacios requeridos")},C=async()=>{try{const{data:o}=await E({url:"/notaries-select",method:"GET"});z.value=o}catch(o){console.log(o)}};return te(async()=>{await C()}),(o,v)=>{const p=g("a-select"),d=g("a-form-item"),P=g("a-input-search"),k=g("a-input"),M=g("a-date-picker"),J=g("a-button"),q=g("a-form");return a(),h("div",Ne,[i(q,{layout:"vertical",model:n,name:"basic",autocomplete:"off",onFinish:x,onFinishFailed:I},{default:s(()=>[m("div",ze,[(a(!0),h(G,null,Q(V(Ie),(t,S)=>(a(),h(G,{key:S},[t.type==="iSelect"?(a(),_(d,{key:0,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:s(()=>[t.name=="type_regimen"?(a(),_(p,{key:0,value:n[t.name],"onUpdate:value":u=>n[t.name]=u,options:V(Ue),disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),t.name=="id_notary"?(a(),_(p,{key:1,value:n[t.name],"onUpdate:value":u=>n[t.name]=u,options:z.value,disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):l("",!0),t.name=="modality"?(a(),_(p,{key:2,value:n[t.name],"onUpdate:value":u=>n[t.name]=u,options:V(se),disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),t.type==="iSearch"?(a(),_(d,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:s(()=>[i(P,{maxlength:15,loading:o.searchLoading,value:n[t.name],"onUpdate:value":u=>n[t.name]=u,onSearch:o.handleSearchApi,onInput:o.validateNumber},null,8,["loading","value","onUpdate:value","onSearch","onInput"])]),_:2},1032,["name","label","rules"])):l("",!0),t.type==="iText"?(a(),_(d,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,type:t.email,max:t.max}]},{default:s(()=>[i(k,{value:n[t.name],"onUpdate:value":u=>n[t.name]=u,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),t.type==="iDate"?(a(),_(d,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:s(()=>[i(M,{locale:o.locale,value:o.birthdateDate,"onUpdate:value":v[0]||(v[0]=u=>o.birthdateDate=u),style:{width:"100%"},format:o.dateFormat,disabled:t.disabled},null,8,["locale","value","format","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),i(d,null,{default:s(()=>[i(J,{type:"primary","html-type":"submit",loading:F.value},{default:s(()=>[B("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Oe=K(Ee,[["__scopeId","data-v-e1e3c0e4"]]);const Pe={class:"wrapper-booking"},Ge={class:"grid-booking"},Le={class:"emp-20"},Me={__name:"MypeFinal",props:["info"],emits:["closeDraw"],setup(R,{emit:N}){const H=JSON.parse(localStorage.getItem("user")),U=R,L=N,z=w(!1),F=w(!0),n=ae({id_person:null,dni:null,step:3,code_sid_sunarp:null,ruc:null,updated_by:H.id}),x=async()=>{n.id_person=U.info.id_person,n.dni=U.info.dni,n.code_sid_sunarp=U.info.code_sid_sunarp,n.ruc=`20${n.ruc}`,z.value=!0,F.value=!1;const C={ruc:n.ruc,social_reason:U.info.social_reason,category:U.info.category,person_type:2,economic_sector:U.info.economy_sector,department:U.info.department,province:U.info.province,district:U.info.district,address:U.info.address,email:null,phone:null,created_by:1,update_by:1,status:1},o={number:U.info.dni,id_post:4};try{const v=await E({url:"/formalization20",method:"POST",data:n});await E({url:"/formalization-company",method:"POST",data:C}),await E({url:"/person-post",method:"POST",data:o}),O.success(v.message),n.ruc=null,L("closeDraw",!0)}catch{O.error("Error al registrar")}finally{z.value=!1}},I=()=>{O.error("Debes de completar todos los espacios requeridos")};return(C,o)=>{const v=g("a-input"),p=g("a-form-item"),d=g("a-button"),P=g("a-form");return a(),h("div",Pe,[i(P,{layout:"vertical",model:n,name:"basic",autocomplete:"off",onFinish:x,onFinishFailed:I},{default:s(()=>[m("div",Ge,[(a(!0),h(G,null,Q(V(Ce),(k,M)=>(a(),h(G,{key:M},[k.type==="iText"?(a(),_(p,{key:0,name:k.name,label:k.label,rules:[{required:k.required,message:k.message,type:k.email,max:k.max,min:k.min}]},{default:s(()=>[i(v,{value:n[k.name],"onUpdate:value":J=>n[k.name]=J,disabled:k.disabled},{prefix:s(()=>[ge(m("span",Le,"20",512),[[be,F.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),i(p,null,{default:s(()=>[i(d,{type:"primary","html-type":"submit",loading:z.value},{default:s(()=>[B("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},We=K(Me,[["__scopeId","data-v-e48e936f"]]),ye=he("pagestore",{state:()=>({count:0}),actions:{increment(){this.count++},async logout(){const R="https://programa.soporte-pnte.com/",N="http://127.0.0.1:5173/",H=window.location.hostname=="127.0.0.1"?N:R;try{await E({url:"/logout",method:"POST"})&&(Se.remove("token"),localStorage.clear(),window.location.href=H)}catch(U){console.error("Error de red:",U)}}}});const Ve={class:"wrapper-booking"},He={class:"grid-booking"},Be={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(R,{emit:N}){const H=ce({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),U=ye(),L=R,z=JSON.parse(localStorage.getItem("user")),F=N,n=w(),x=w([]),I=w([]),C=w([]),o=w([]),v=w(!1),p=w(!1),d=ae({detail_procedure:null,modality:null,economy_sector:null,category:null,department:null,province:null,district:null,id_person:L.info.id,created_by:z.id,created_dni:z.document_number}),P=(y,b)=>{const r=y.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return b.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(r)},k=async()=>{const y=d;v.value=!0;try{const b=await E({url:"/formalization10",method:"POST",data:y});if(b.status==400)return O.error(b.message),U.logout();b&&(O.success(b.message),d.detail_procedure=null,d.modality=null,d.economy_sector=null,d.category=null,d.department=null,d.province=null,d.district=null,F("closeDraw",!0))}catch{O.error("Error al registrar")}finally{v.value=!1}},M=async()=>{p.value=!0;try{await E({url:"/create-comercial-activities",method:"POST",data:{name:n.value}}),u(),n.value=""}catch{O.error("Error al registrar")}finally{p.value=!1}},J=()=>{O.warning("Debes de completar todos los espacios requeridos")},q=async()=>{try{const{data:y}=await Z({url:"/departaments",method:"GET"});let b=y.map(r=>({label:r.label,value:r.id}));x.value=[...x.value,...b]}catch(y){console.log(y)}},t=async y=>{d.province=null,d.district=null,I.value=[],C.value=[];try{const{data:b}=await Z({url:`/province/${y}`,method:"GET"});let r=b.map(e=>({label:e.label,value:e.id}));I.value=[...I.value,...r]}catch(b){console.log(b)}},S=async y=>{d.district=null,C.value=[];try{const{data:b}=await Z({url:`/district/${y}`,method:"GET"});let r=b.map(e=>({label:e.label,value:e.id}));C.value=[...C.value,...r]}catch(b){console.log(b)}},u=async()=>{try{const{data:y}=await E({url:"/comercial-activities",method:"GET"});o.value=y}catch(y){console.log(y)}};return te(()=>{q(),u()}),(y,b)=>{const r=g("a-select"),e=g("a-form-item"),j=g("a-input"),T=g("a-divider"),X=g("a-button"),ee=g("a-space"),f=g("a-form");return a(),h("div",Ve,[i(f,{layout:"vertical",model:d,name:"basic",autocomplete:"off",onFinish:k,onFinishFailed:J},{default:s(()=>[m("div",He,[(a(!0),h(G,null,Q(V(De),(c,W)=>(a(),h(G,{key:W},[c.type==="iSelect"?(a(),_(e,{key:0,class:"item-max",name:c.name,label:c.label,rules:[{required:c.required,message:c.message}]},{default:s(()=>[c.name=="detail_procedure"?(a(),_(r,{key:0,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,options:V(_e)},null,8,["value","onUpdate:value","options"])):l("",!0),c.name=="modality"?(a(),_(r,{key:1,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,options:V(se)},null,8,["value","onUpdate:value","options"])):l("",!0),c.name=="economy_sector"?(a(),_(r,{key:2,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,options:V(le)},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),c.type==="iText"?(a(),_(e,{key:1,name:c.name,label:c.label,rules:[{required:c.required,message:c.message,type:c.email,max:c.max}]},{default:s(()=>[i(j,{value:d[c.name],"onUpdate:value":A=>d[c.name]=A,disabled:c.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):l("",!0),c.type==="iSelectWrite"?(a(),_(e,{key:2,class:"item-max",name:c.name,label:c.label,rules:[{required:c.required,message:c.message}]},{default:s(()=>[c.name=="category"?(a(),_(r,{key:0,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,"show-search":"",options:o.value,"filter-option":P},{dropdownRender:s(({menuNode:A})=>[i(V(H),{vnodes:A},null,8,["vnodes"]),i(T,{style:{margin:"4px 0"}}),i(ee,{style:{padding:"4px 8px"}},{default:s(()=>[i(j,{ref_for:!0,ref:"inputRef",value:n.value,"onUpdate:value":b[0]||(b[0]=oe=>n.value=oe),placeholder:"Nueva actividad"},null,8,["value"]),i(X,{type:"text",onClick:M,loading:p.value},{icon:s(()=>[i(V(ue))]),default:s(()=>[B(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):l("",!0),c.name=="department"?(a(),_(r,{key:1,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,"show-search":"",options:x.value,"filter-option":P,onChange:t},null,8,["value","onUpdate:value","options"])):l("",!0),c.name=="province"?(a(),_(r,{key:2,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,"show-search":"",options:I.value,"filter-option":P,onChange:S},null,8,["value","onUpdate:value","options"])):l("",!0),c.name=="district"?(a(),_(r,{key:3,value:d[c.name],"onUpdate:value":A=>d[c.name]=A,"show-search":"",options:C.value,"filter-option":P},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),i(e,null,{default:s(()=>[i(X,{type:"primary","html-type":"submit",loading:v.value},{default:s(()=>[B("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Je=K(Be,[["__scopeId","data-v-bd39cf0b"]]);const Ye={class:"wrapper-booking"},je={class:"grid-booking"},Ze={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup(R,{emit:N}){const H=ye(),U=R,L=JSON.parse(localStorage.getItem("user")),z=N,F=w([]),n=w([]),x=w([]),I=w([]),C=w(!1),o=ae({component:null,tema_compoment:null,modality:null,department:null,province:null,district:null,description:null,id_person:U.info.id,created_by:L.id,created_dni:L.document_number}),v=(q,t)=>{const S=q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(S)},p=async()=>{const q=o;C.value=!0;try{const t=await E({url:"/create-consulting",method:"POST",data:q});if(t.status==400)return O.error(t.message),H.logout();t&&(O.success(t.message),o.component=null,o.tema_compoment=null,o.modality=null,o.department=null,o.province=null,o.district=null,o.description=null,z("closeDraw",!0))}catch{O.error("Error al registrar")}finally{C.value=!1}},d=()=>{O.warning("Debes de completar todos los espacios requeridos")},P=async()=>{try{const{data:q}=await Z({url:"/departaments",method:"GET"});let t=q.map(S=>({label:S.label,value:S.id}));F.value=[...F.value,...t]}catch(q){console.log(q)}},k=async q=>{o.province=null,o.district=null,n.value=[],x.value=[];try{const{data:t}=await Z({url:`/province/${q}`,method:"GET"});let S=t.map(u=>({label:u.label,value:u.id}));n.value=[...n.value,...S]}catch(t){console.log(t)}},M=async q=>{o.district=null,x.value=[];try{const{data:t}=await Z({url:`/district/${q}`,method:"GET"});let S=t.map(u=>({label:u.label,value:u.id}));x.value=[...x.value,...S]}catch(t){console.log(t)}},J=async()=>{try{const{data:q}=await E({url:"/theme-component",method:"GET"});I.value=q}catch(q){console.log(q)}};return te(async()=>{await P(),await J()}),(q,t)=>{const S=g("a-select"),u=g("a-form-item"),y=g("a-textarea"),b=g("a-button"),r=g("a-form");return a(),h("div",Ye,[i(r,{layout:"vertical",model:o,name:"basic",autocomplete:"off",onFinish:p,onFinishFailed:d},{default:s(()=>[m("div",je,[(a(!0),h(G,null,Q(V(Fe),(e,j)=>(a(),h(G,{key:j},[e.type==="iSelect"?(a(),_(u,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[e.name=="component"?(a(),_(S,{key:0,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,options:V(ve)},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="modality"?(a(),_(S,{key:1,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,options:V(se)},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iTextarea"?(a(),_(u,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[i(y,{value:o[e.name],"onUpdate:value":T=>o[e.name]=T,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):l("",!0),e.type==="iSelectWrite"?(a(),_(u,{key:2,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:s(()=>[e.name=="tema_compoment"?(a(),_(S,{key:0,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,"show-search":"",options:I.value,"filter-option":v},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="department"?(a(),_(S,{key:1,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,"show-search":"",options:F.value,"filter-option":v,onChange:k},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="province"?(a(),_(S,{key:2,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,"show-search":"",options:n.value,"filter-option":v,onChange:M},null,8,["value","onUpdate:value","options"])):l("",!0),e.name=="district"?(a(),_(S,{key:3,value:o[e.name],"onUpdate:value":T=>o[e.name]=T,"show-search":"",options:x.value,"filter-option":v},null,8,["value","onUpdate:value","options"])):l("",!0)]),_:2},1032,["name","label","rules"])):l("",!0)],64))),128))]),i(u,null,{default:s(()=>[i(b,{type:"primary","html-type":"submit",loading:C.value},{default:s(()=>[B("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Qe=K(Ze,[["__scopeId","data-v-65b67094"]]);const re=R=>(me("data-v-5269d91c"),R=R(),pe(),R),Ke={key:0},Xe={key:1,class:"steps"},ea={style:{"text-align":"right"}},aa=re(()=>m("span",{class:"as-title"},"Formalizacion RUC 20",-1)),ta={key:0},oa={key:1},na={key:3},la=re(()=>m("span",{class:"as-title"},"Formalizacion RUC 10",-1)),sa={key:0},ra={key:1},ia={key:2},da=re(()=>m("span",{class:"as-title"},"Asesorías",-1)),ua={__name:"AsesoriasHistorial",props:["info"],setup(R){const N=R,H=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Fecha última actualización",dataIndex:"date_last"},{title:"Proceso",dataIndex:"progress"},{title:"Sector económico",dataIndex:"sector"},{title:"Registrado por",dataIndex:"asesor_create"},{title:"Último asesor atendido",dataIndex:"asesor_update"}],U=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Detalle del trámite",dataIndex:"detalle"},{title:"Sector económico",dataIndex:"sector"},{title:"Modalidad",dataIndex:"modality",align:"center"},{title:"Registrado por",dataIndex:"asesor_create"}],L=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Componente",dataIndex:"component"},{title:"Tema",dataIndex:"tema_compoment"},{title:"Modalidad",dataIndex:"modality",align:"center"},{title:"Registrado por",dataIndex:"asesor_create"}],z=x=>le.find(I=>I.value===x).label,F=x=>_e.find(I=>I.value===x).label,n=x=>ve.find(I=>I.value===x).label;return(x,I)=>{var p,d,P,k,M,J;const C=g("a-progress"),o=g("a-space"),v=g("a-table");return a(),h(G,null,[((p=N.info[0])==null?void 0:p.ruc20.length)>=1?(a(),_(v,{key:0,columns:H,"data-source":(d=N.info[0])==null?void 0:d.ruc20,bordered:"",pagination:!1,size:"small"},{bodyCell:s(({index:q,column:t,record:S})=>[t.dataIndex==="idx"?(a(),h("span",Ke,$(q+1),1)):l("",!0),t.dataIndex==="progress"?(a(),h("div",Xe,[m("span",ea,$(S.step==1?"Reserva de nombre":S.step==2?"Proceso de notaría":"Formalizado"),1),i(o,{direction:"vertical",style:{width:"100%"}},{default:s(()=>[i(C,{percent:S.step*33.33,steps:3,title:"hi"},null,8,["percent"])]),_:2},1024)])):l("",!0),t.dataIndex==="sector"?(a(),h(G,{key:2},[m("div",null,$(z(S.sector)),1),m("div",null,$(S.category),1)],64)):l("",!0)]),title:s(()=>[aa]),_:1},8,["data-source"])):l("",!0),((P=N.info[0])==null?void 0:P.ruc10.length)>=1?(a(),_(v,{key:1,class:"space",columns:U,"data-source":(k=N.info[0])==null?void 0:k.ruc10,bordered:"",pagination:!1,size:"small"},{bodyCell:s(({index:q,column:t,record:S})=>[t.dataIndex==="idx"?(a(),h("span",ta,$(q+1),1)):l("",!0),t.dataIndex==="detalle"?(a(),h("span",oa,$(F(S.detail_procedure)),1)):l("",!0),t.dataIndex==="sector"?(a(),h(G,{key:2},[m("div",null,$(z(S.economy_sector)),1),m("div",null,$(S.category),1)],64)):l("",!0),t.dataIndex==="modality"?(a(),h("span",na,$(S.modality==1?"Virtual":"Presencial"),1)):l("",!0)]),title:s(()=>[la]),_:1},8,["data-source"])):l("",!0),((M=N.info[0])==null?void 0:M.adv.length)>=1?(a(),_(v,{key:2,columns:L,"data-source":(J=N.info[0])==null?void 0:J.adv,bordered:"",pagination:!1,size:"small"},{bodyCell:s(({index:q,column:t,record:S})=>[t.dataIndex==="idx"?(a(),h("span",sa,$(q+1),1)):l("",!0),t.dataIndex==="component"?(a(),h("span",ra,$(n(S.component)),1)):l("",!0),t.dataIndex==="modality"?(a(),h("span",ia,$(S.modality==1?"Virtual":"Presencial"),1)):l("",!0)]),title:s(()=>[da]),_:1},8,["data-source"])):l("",!0)],64)}}},ca=K(ua,[["__scopeId","data-v-5269d91c"]]);const Y=R=>(me("data-v-0964e8cf"),R=R(),pe(),R),ma={class:"asesorias"},pa={style:{"max-width":"450px"}},_a={key:0},va={key:1},ya={key:2},fa={key:3},ga={class:"search",style:{"max-width":"300px"}},ba=Y(()=>m("label",null,"Ingresar número de documento",-1)),ha={class:"buttons"},Sa={class:"info-personal"},xa=Y(()=>m("span",null,"Apellidos y nombres: ",-1)),wa=Y(()=>m("span",null,"Número de celular:",-1)),ka=Y(()=>m("span",null,"Correo electrónico:",-1)),Ua=Y(()=>m("span",null,"Asesorías:",-1)),qa=Y(()=>m("span",null,"Formalizaciones RUC 20:",-1)),Ia=Y(()=>m("span",null,"Formalizaciones RUC 10:",-1)),Ca={class:"steps-content"},Da=["onClick"],Fa={key:0,class:"info-tag"},Ra=Y(()=>m("b",null,"Paso",-1)),Ta={key:1,class:"info-tag"},$a=Y(()=>m("b",null,"Siguiente paso",-1)),Aa={key:2,class:"info-tag"},Na=Y(()=>m("b",null,"Siguiente paso",-1)),za={class:"info"},Ea=Y(()=>m("b",null,"Código SID SUNARP",-1)),Oa=Y(()=>m("b",null,"Última consulta",-1)),Pa=Y(()=>m("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),Ga=[Pa],La={__name:"AsesoriasFormalizaciones",setup(R){const N=xe(),H=we(),U=w(!1),L=w(!1),z=w(!1),F=w(!1),n=w(!1),x=w(!1),I=w(!1),C=w(!1),o=w(""),v=w([]),p=w(!1),d=w(0),P=w(!1),k=w([]),M=r=>ke(r).format("DD/MM/YYYY HH:mm A"),J=()=>{o.value=o.value.replace(/\D/g,"")},q=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],t=async()=>{try{if(L.value={id:v.value.id,dni:v.value.number_document},P.value=!0,n.value)return F.value=!0;const{data:r}=await E({url:`/my-formalizations20/${v.value.number_document}`,method:"GET"});if(r.length>=1){n.value=r,F.value=!0;return}x.value=!0}catch(r){console.log(r)}finally{P.value=!1}},S=async r=>{U.value=!0;try{const{data:e}=await E({url:`find-formalization20/${r}`,method:"GET"});d.value=e.step,F.value=!1,x.value=!0,z.value=e}catch(e){console.log(e)}finally{U.value=!1}},u=async r=>{k.value=[];try{const e=await E({url:`/historial-formalization/${r.number_document}/${r.id}`,method:"GET"});k.value=[...k.value,e]}catch(e){console.log(e)}},y=async()=>{if(n.value=!1,d.value=0,o.value.length<8)return O.warning("El número a buscar es incorrecto");p.value=!0;try{const r=await E({url:`/applicant-new/${o.value}`,method:"GET"});if(r.status==205){const e={rol:"solicitante",access:3,dni:o.value};N.push({name:"registrar-persona",query:e})}else v.value=r,u(r)}catch(r){console.log("You have an error",r)}finally{p.value=!1}},b=async()=>{const r=await E({url:`/applicant-new/${H.query.dni}`,method:"GET"});o.value=r.number_document,v.value=r,await u(r)};return te(()=>{H.query.dni&&b()}),(r,e)=>{var oe,ie,de;const j=g("a-input-search"),T=g("a-button"),X=g("a-step"),ee=g("a-steps"),f=g("a-drawer"),c=g("a-tag"),W=g("a-spin"),A=g("a-modal");return a(),h(G,null,[m("div",ma,[m("div",pa,[m("div",null,[x.value?(a(),h("h3",_a,"FORMALIZACIÓN CON RUC 20")):I.value?(a(),h("h3",va,"FORMALIZACIÓN CON RUC 10")):C.value?(a(),h("h3",ya,"ASESORÍA")):(a(),h("h3",fa,"REGISTRO"))]),m("div",ga,[ba,i(j,{value:o.value,"onUpdate:value":e[0]||(e[0]=D=>o.value=D),placeholder:"",loading:p.value,onSearch:y,onInput:J,maxlength:8},null,8,["value","loading"])]),v.value.length!=0?(a(),h(G,{key:0},[m("div",ha,[i(T,{onClick:t,loading:P.value,class:ne(x.value&&"actived")},{default:s(()=>[B("Crear empresa")]),_:1},8,["loading","class"]),i(T,{onClick:e[1]||(e[1]=D=>I.value=!0),class:ne([I.value&&"actived","mx-1"])},{default:s(()=>[B("RUC persona natural")]),_:1},8,["class"]),i(T,{onClick:e[2]||(e[2]=D=>C.value=!0),class:ne(C.value&&"actived")},{default:s(()=>[B("Asesoría")]),_:1},8,["class"])]),m("div",Sa,[xa,m("span",null,$(v.value.last_name)+" "+$(v.value.middle_name)+", "+$(v.value.name),1),wa,m("span",null,[m("span",null,$(v.value.phone?v.value.phone:"-"),1)]),ka,m("span",null,$(v.value.email?v.value.email:"-"),1),k.value.length>=1?(a(),h(G,{key:0},[Ua,m("b",null,$((oe=k.value[0])==null?void 0:oe.adv.length),1),qa,m("b",null,$((ie=k.value[0])==null?void 0:ie.ruc20.length),1),Ia,m("b",null,$((de=k.value[0])==null?void 0:de.ruc10.length),1)],64)):l("",!0)])],64)):l("",!0)]),v.value.length!=0?(a(),_(ca,{key:0,info:k.value},null,8,["info"])):l("",!0)]),m("section",null,[i(f,{width:"510",title:"Formalización con RUC 20",open:x.value,"onUpdate:open":e[6]||(e[6]=D=>x.value=D),placement:"right"},{default:s(()=>[i(ee,{current:d.value,size:"small",class:"steps"},{default:s(()=>[(a(),h(G,null,Q(q,D=>i(X,{key:D.title,title:D.title},null,8,["title"])),64))]),_:1},8,["current"]),m("div",Ca,[d.value==0?(a(),_(Ae,{key:0,info:L.value,onCloseDraw:e[3]||(e[3]=D=>(x.value=!1,n.value=!1))},null,8,["info"])):l("",!0),d.value==1?(a(),_(Oe,{key:1,info:z.value,onCloseDraw:e[4]||(e[4]=D=>(x.value=!1,n.value=!1))},null,8,["info"])):l("",!0),d.value==2?(a(),_(We,{key:2,info:z.value,onCloseDraw:e[5]||(e[5]=D=>(x.value=!1,n.value=!1))},null,8,["info"])):l("",!0)])]),_:1},8,["open"]),i(f,{title:"Formalización con RUC 10",open:I.value,"onUpdate:open":e[8]||(e[8]=D=>I.value=D),placement:"right"},{default:s(()=>[i(Je,{info:v.value,onCloseDraw:e[7]||(e[7]=D=>(I.value=!1,y()))},null,8,["info"])]),_:1},8,["open"]),i(f,{title:"Nueva asesoría",open:C.value,"onUpdate:open":e[10]||(e[10]=D=>C.value=D),placement:"right"},{default:s(()=>[i(Qe,{info:v.value,onCloseDraw:e[9]||(e[9]=D=>(C.value=!1,y()))},null,8,["info"])]),_:1},8,["open"]),i(A,{open:F.value,"onUpdate:open":e[12]||(e[12]=D=>F.value=D),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:s(()=>[i(W,{spinning:U.value},{default:s(()=>[(a(!0),h(G,null,Q(n.value,(D,fe)=>(a(),h("div",{key:fe,class:"pendient",onClick:Ma=>S(D.id)},[D.step==0?(a(),h("div",Fa,[Ra,B(),i(c,{color:"error"},{default:s(()=>[B("Reserva de nombre")]),_:1})])):l("",!0),D.step==1?(a(),h("div",Ta,[$a,B(),i(c,{color:"warning"},{default:s(()=>[B("Acto constitutivo")]),_:1})])):l("",!0),D.step==2?(a(),h("div",Aa,[Na,B(),i(c,{color:"success"},{default:s(()=>[B("Formalizar")]),_:1})])):l("",!0),m("div",za,[Ea,m("span",null,$(D.code_sid_sunarp),1),Oa,m("span",null,$(M(D.updated_at)),1)])],8,Da))),128)),m("div",{class:"pendient pendient-btn",onClick:e[11]||(e[11]=D=>(x.value=!0,F.value=!1,d.value=0))},Ga)]),_:1},8,["spinning"])]),_:1},8,["open"])])],64)}}},Ba=K(La,[["__scopeId","data-v-0964e8cf"]]);export{Ba as default};
