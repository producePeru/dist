import{a as ke,f as Se,r as xe,b as Ue,R as we}from"./ReservaNombre-e3331811.js";import{u as re}from"./selectes-1cf52435.js";import{c as a,A as Ce,r as b,a as oe,b as p,o as e,d as y,w as n,e as u,F as D,D as W,h as I,q as v,s as o,t as S,i as w,z as j,m as G,O as Ie,P as Re,U as de,V as Ae,u as De,y as Fe,k as $e,W as ze,p as Oe,j as Ne,R as qe}from"./index-ce034a82.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{S as Ee}from"./DrawerSolicitante.componente-31c4aa35.js";import"./es-38e6adb5.js";var Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const Pe=Te;function pe(A){for(var g=1;g<arguments.length;g++){var r=arguments[g]!=null?Object(arguments[g]):{},x=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(x=x.concat(Object.getOwnPropertySymbols(r).filter(function(C){return Object.getOwnPropertyDescriptor(r,C).enumerable}))),x.forEach(function(C){Le(A,C,r[C])})}return A}function Le(A,g,r){return g in A?Object.defineProperty(A,g,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[g]=r,A}var ue=function(g,r){var x=pe({},g,r.attrs);return a(Ce,pe({},x,{icon:Pe}),null)};ue.displayName="RedoOutlined";ue.inheritAttrs=!1;const Me=ue;const Ve={class:"wrapper-booking"},Ge={class:"grid-booking"},Be={__name:"ActoConstitutivo",props:["info","itemSelectedF20"],emits:["closeDraw"],setup(A,{emit:g}){const r=JSON.parse(localStorage.getItem("profile")),x=re(),C=A,B=g;x.$patch({notaries:x.notaries}),x.fetchNotaries();const q=b(!0),$=b(!1),s=oe({task:2,name:null,numbernotary:null,notary_id:null,user_id:r.user_id,userupdated_id:r.id}),z=()=>{var l;(l=x.notaries)!=null&&l.length&&(q.value=!1)},c=async()=>{$.value=!0,s.people_id=C.info.id;try{const l=await j({url:`formalization/ruc20-step2/${C.itemSelectedF20.codesunarp}`,method:"POST",data:s});l.status===200&&(G.success(l.message),s.name=null,s.numbernotary=null,s.notary_id=null,B("closeDraw",!0))}catch(l){console.log("Error: "+l)}finally{$.value=!1}},P=()=>{G.error("Debes de completar todos los espacios requeridos")};return(l,L)=>{const V=p("a-select"),_=p("a-form-item"),t=p("a-input"),f=p("a-button"),U=p("a-form"),R=p("a-spin");return e(),y("div",Ve,[a(R,{spinning:q.value},{default:n(()=>[a(U,{layout:"vertical",model:s,name:"basic",autocomplete:"off",onFinish:c,onFinishFailed:P},{default:n(()=>[u("div",Ge,[(e(!0),y(D,null,W(I(ke),(i,F)=>(e(),y(D,{key:F},[i.type==="iSelect"?(e(),v(_,{key:0,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:n(()=>[i.name=="notary_id"?(e(),v(V,{key:0,value:s[i.name],"onUpdate:value":N=>s[i.name]=N,options:I(x).notaries},null,8,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0),i.type==="iText"?(e(),v(_,{key:1,name:i.name,label:i.label,rules:[{required:i.required,message:i.message,type:i.email,max:i.max}]},{default:n(()=>[a(t,{value:s[i.name],"onUpdate:value":N=>s[i.name]=N},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),u("div",null,S(z()),1),a(_,null,{default:n(()=>[a(f,{class:"btn-produce",type:"primary","html-type":"submit",loading:$.value},{default:n(()=>[w("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},He=K(Be,[["__scopeId","data-v-cbf26e50"]]);const je={class:"wrapper-booking"},Ye={class:"grid-booking"},Je={class:"emp-20"},We={__name:"MypeFinal",props:["itemSelectedF20"],emits:["closeDraw"],setup(A,{emit:g}){const r=A,x=g,C=b(!1),B=b(!0),q=oe({task:3,ruc:null}),$=async()=>{C.value=!0,q.mype_id=r.itemSelectedF20.mype.id;try{const z=await j({url:`formalization/ruc20-step3/${r.itemSelectedF20.codesunarp}`,method:"POST",data:q});z.status===200&&(G.success(z.message),q.ruc=null,x("closeDraw",!0))}catch(z){console.log("Error: "+z)}finally{C.value=!1}},s=()=>{G.error("Debes de completar todos los espacios requeridos")};return(z,c)=>{const P=p("a-input"),l=p("a-form-item"),L=p("a-button"),V=p("a-form");return e(),y("div",je,[a(V,{layout:"vertical",model:q,name:"basic",autocomplete:"off",onFinish:$,onFinishFailed:s},{default:n(()=>[u("div",Ye,[(e(!0),y(D,null,W(I(Se),(_,t)=>(e(),y(D,{key:t},[_.type==="iText"?(e(),v(l,{key:0,name:_.name,label:_.label,rules:[{required:_.required,message:_.message,type:_.email,max:_.max,min:_.min}]},{default:n(()=>[a(P,{value:q[_.name],"onUpdate:value":f=>q[_.name]=f,disabled:_.disabled,maxlength:9},{prefix:n(()=>[Ie(u("span",Je,"20",512),[[Re,B.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),a(l,null,{default:n(()=>[a(L,{class:"btn-produce",type:"primary","html-type":"submit",loading:C.value},{default:n(()=>[w("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Ke=K(We,[["__scopeId","data-v-9faa4d7d"]]);const Qe={class:"wrapper-booking"},Ze={class:"grid-booking"},Xe={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(A,{emit:g}){const r=Ae({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),x=JSON.parse(localStorage.getItem("profile")),C=A,B=g,q=b(!1),$=b(null),s=b(null),z=b(!1),c=re(),P=b(!1);c.$patch({cities:c.cities}),c.$patch({provinces:c.provinces}),c.$patch({districts:c.districts}),c.$patch({modalities:c.modalities}),c.$patch({detailProcedures:c.detailProcedures}),c.$patch({economicSectors:c.economicSectors}),c.$patch({comercialActivities:c.comercialActivities}),c.fetchDetailProcedures(),c.fetchModalities(),c.fetchEconomicSectors(),c.fetchComercialActivities(),c.fetchCities();const l=oe({detailprocedure_id:null,modality_id:null,economicsector_id:null,comercialactivity_id:null,city_id:null,province_id:null,district_id:null,user_id:x.user_id}),L=async()=>{try{P.value=!0;const i={name:$.value};(await j({url:"create/comercial-activities",method:"POST",data:i})).status==200&&($.value=null,c.fetchComercialActivities())}catch(i){console.log(i)}finally{P.value=!1}},V=i=>{l.province_id=null,l.district_id=null,c.fetchProvinces(i)},_=i=>{l.district_id=null,c.fetchDistricts(i)},t=(i,F)=>{const N=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return F.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(N)},f=async()=>{try{z.value=!0;const i={name:s.value};(await j({url:"create/economic-sector",method:"POST",data:i})).status==200&&(s.value=null,c.fetchEconomicSectors())}catch(i){console.log(i)}finally{z.value=!1}},U=async()=>{q.value=!0,l.people_id=C.info.id;try{const i=await j({url:"formalization/create-ruc-10",method:"POST",data:l});i.status===200&&(G.success(i.message),l.detailprocedure_id=null,l.modality_id=null,l.economicsector_id=null,l.comercialactivity_id=null,l.city_id=null,l.province_id=null,l.district_id=null,B("closeDraw",!0))}catch(i){console.log("Error: "+i)}finally{q.value=!1}},R=()=>{G.warning("Debes de completar todos los espacios requeridos")};return(i,F)=>{const N=p("a-select"),H=p("a-divider"),m=p("a-input"),Y=p("a-button"),E=p("a-space"),J=p("a-form-item"),se=p("a-form");return e(),y("div",Qe,[a(se,{layout:"vertical",model:l,name:"basic",autocomplete:"off",onFinish:U,onFinishFailed:R},{default:n(()=>[u("div",Ze,[(e(!0),y(D,null,W(I(xe),(d,X)=>(e(),y(D,{key:X},[d.type==="iSelect"?(e(),v(J,{key:0,class:"item-max",name:d.name,label:d.label,rules:[{required:d.required,message:d.message}]},{default:n(()=>[d.name=="detailprocedure_id"?(e(),v(N,{key:0,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,options:I(c).detailProcedures},null,8,["value","onUpdate:value","options"])):o("",!0),d.name=="modality_id"?(e(),v(N,{key:1,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,options:I(c).modalities},null,8,["value","onUpdate:value","options"])):o("",!0),d.name=="economicsector_id"?(e(),v(N,{key:2,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,"show-search":"",options:I(c).economicSectors,"filter-option":t},{dropdownRender:n(({menuNode:O})=>[a(I(r),{vnodes:O},null,8,["vnodes"]),a(H,{style:{margin:"4px 0"}}),a(E,{style:{padding:"4px 8px"}},{default:n(()=>[a(m,{ref_for:!0,ref:"inputRef",value:s.value,"onUpdate:value":F[0]||(F[0]=Q=>s.value=Q),placeholder:"Nuevo registro"},null,8,["value"]),a(Y,{type:"text",onClick:f,loading:z.value},{icon:n(()=>[a(I(de))]),default:n(()=>[w(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0),d.type==="iText"?(e(),v(J,{key:1,name:d.name,label:d.label,rules:[{required:d.required,message:d.message,type:d.email,max:d.max}]},{default:n(()=>[a(m,{value:l[d.name],"onUpdate:value":O=>l[d.name]=O,disabled:d.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):o("",!0),d.type==="iSelectWrite"?(e(),v(J,{key:2,class:"item-max",name:d.name,label:d.label,rules:[{required:d.required,message:d.message}]},{default:n(()=>[d.name=="comercialactivity_id"?(e(),v(N,{key:0,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,"show-search":"",options:I(c).comercialActivities,"filter-option":t},{dropdownRender:n(({menuNode:O})=>[a(I(r),{vnodes:O},null,8,["vnodes"]),a(H,{style:{margin:"4px 0"}}),a(E,{style:{padding:"4px 8px"}},{default:n(()=>[a(m,{ref_for:!0,ref:"inputRef",value:$.value,"onUpdate:value":F[1]||(F[1]=Q=>$.value=Q),placeholder:"Nueva actividad"},null,8,["value"]),a(Y,{type:"text",onClick:L,loading:P.value},{icon:n(()=>[a(I(de))]),default:n(()=>[w(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):o("",!0),d.name=="city_id"?(e(),v(N,{key:1,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,"show-search":"",options:I(c).cities,"filter-option":t,onChange:V},null,8,["value","onUpdate:value","options"])):o("",!0),d.name=="province_id"?(e(),v(N,{key:2,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,"show-search":"",options:I(c).provinces,"filter-option":t,onChange:_},null,8,["value","onUpdate:value","options"])):o("",!0),d.name=="district_id"?(e(),v(N,{key:3,value:l[d.name],"onUpdate:value":O=>l[d.name]=O,"show-search":"",options:I(c).districts,"filter-option":t},null,8,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),a(J,null,{default:n(()=>[a(Y,{type:"primary",class:"btn-produce","html-type":"submit",loading:q.value},{default:n(()=>[w("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},et=K(Xe,[["__scopeId","data-v-67c2634c"]]);const tt={class:"wrapper-booking"},at={class:"grid-booking"},nt={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup(A,{emit:g}){const r=re(),x=JSON.parse(localStorage.getItem("profile")),C=b(!1),B=A,q=g;r.$patch({components:r.components}),r.$patch({componentThemes:r.componentThemes}),r.$patch({modalities:r.modalities}),r.$patch({cities:r.cities}),r.fetchComponents(),r.fetchComponentThemes(),r.fetchModalities(),r.fetchCities(),r.fetchGenders();const $=b(!0),s=oe({observations:null,user_id:x.user_id,people_id:B.info.id,component_id:null,theme_id:null,modality_id:null,city_id:null,province_id:null,district_id:null}),z=()=>{r.cities&&($.value=!1)},c=t=>{s.theme_id=null,r.fetchComponentThemes(t)},P=t=>{s.province_id=null,s.district_id=null,r.fetchProvinces(t)},l=t=>{s.district_id=null,r.fetchDistricts(t)},L=(t,f)=>{const U=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return f.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(U)},V=async()=>{C.value=!0;try{const t=await j({url:"advisory/create",method:"POST",data:s});t.status===200&&(G.success(t.message),s.component_id=null,s.theme_id=null,s.modality_id=null,s.city_id=null,s.province_id=null,s.district_id=null,s.observations=null,q("closeDraw",!0))}catch(t){console.log("Error: "+t)}finally{C.value=!1}},_=()=>{G.warning("Debes de completar todos los espacios requeridos")};return(t,f)=>{const U=p("a-select"),R=p("a-form-item"),i=p("a-textarea"),F=p("a-button"),N=p("a-form"),H=p("a-spin");return e(),y("div",tt,[a(H,{spinning:$.value},{default:n(()=>[a(N,{layout:"vertical",model:s,name:"basic",autocomplete:"off",onFinish:V,onFinishFailed:_},{default:n(()=>[u("div",at,[(e(!0),y(D,null,W(I(Ue),(m,Y)=>(e(),y(D,{key:Y},[m.type==="iSelect"?(e(),v(R,{key:0,class:"item-max",name:m.name,label:m.label,rules:[{required:m.required,message:m.message}]},{default:n(()=>[m.name=="component_id"?(e(),v(U,{key:0,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,options:I(r).components,onChange:c},null,8,["value","onUpdate:value","options"])):o("",!0),m.name=="modality_id"?(e(),v(U,{key:1,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,options:I(r).modalities},null,8,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0),m.type==="iTextarea"?(e(),v(R,{key:1,name:m.name,label:m.label,rules:[{required:m.required,message:m.message}]},{default:n(()=>[a(i,{value:s[m.name],"onUpdate:value":E=>s[m.name]=E,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):o("",!0),m.type==="iSelectWrite"?(e(),v(R,{key:2,class:"item-max",name:m.name,label:m.label,rules:[{required:m.required,message:m.message}]},{default:n(()=>[m.name=="theme_id"?(e(),v(U,{key:0,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,"show-search":"",options:I(r).componentThemes,"filter-option":L},null,8,["value","onUpdate:value","options"])):o("",!0),m.name=="city_id"?(e(),v(U,{key:1,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,"show-search":"",options:I(r).cities,"filter-option":L,onChange:P},null,8,["value","onUpdate:value","options"])):o("",!0),m.name=="province_id"?(e(),v(U,{key:2,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,"show-search":"",options:I(r).provinces,"filter-option":L,onChange:l},null,8,["value","onUpdate:value","options"])):o("",!0),m.name=="district_id"?(e(),v(U,{key:3,value:s[m.name],"onUpdate:value":E=>s[m.name]=E,"show-search":"",options:I(r).districts,"filter-option":L},null,8,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),u("div",null,S(z()),1),a(R,null,{default:n(()=>[a(F,{type:"primary",class:"btn-produce","html-type":"submit",loading:C.value},{default:n(()=>[w("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])}}},ot=K(nt,[["__scopeId","data-v-89fa55d3"]]);const st={key:0},lt={key:0},it={key:4,class:"steps"},rt={style:{"text-align":"right"}},ut={key:0},ct={__name:"AsesoriasHistorial",props:["info"],setup(A){const g=A,r=b("1"),x=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start",width:160},{title:"Fecha última actualización",dataIndex:"date_last",width:160},{title:"Proceso",dataIndex:"progress"},{title:"Sector económico",dataIndex:"sector"}],C=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Detalle del trámite",dataIndex:"component"},{title:"Sector económico",dataIndex:"sector"},{title:"Modalidad",dataIndex:"modality",align:"center"}],B=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Componente",dataIndex:"component"},{title:"Tema",dataIndex:"tema_compoment"},{title:"Modalidad",dataIndex:"modality",align:"center"}];return(q,$)=>{const s=p("a-empty"),z=p("a-table"),c=p("a-card"),P=p("a-tab-pane"),l=p("a-progress"),L=p("a-space"),V=p("a-tabs");return e(),v(V,{activeKey:r.value,"onUpdate:activeKey":$[0]||($[0]=_=>r.value=_),type:"card",class:"box-hist"},{default:n(()=>[a(P,{key:"1",tab:"ASESORÍAS"},{default:n(()=>[a(c,null,{default:n(()=>{var _,t,f;return[((_=g.info)==null?void 0:_.idadvisory.length)==0?(e(),v(s,{key:0})):o("",!0),((t=g.info)==null?void 0:t.idadvisory.length)>=1?(e(),v(z,{key:1,columns:B,"data-source":(f=g.info)==null?void 0:f.idadvisory,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:U,column:R,record:i})=>{var F,N,H;return[R.dataIndex==="idx"?(e(),y("span",st,S(U+1),1)):o("",!0),R.dataIndex==="date_start"?(e(),y(D,{key:1},[w(S(i.created_at),1)],64)):o("",!0),R.dataIndex==="component"?(e(),y(D,{key:2},[w(S((F=i.component)==null?void 0:F.name),1)],64)):o("",!0),R.dataIndex==="tema_compoment"?(e(),y(D,{key:3},[w(S((N=i.theme)==null?void 0:N.name),1)],64)):o("",!0),R.dataIndex==="modality"?(e(),y(D,{key:4},[w(S((H=i.modality)==null?void 0:H.name),1)],64)):o("",!0)]}),_:1},8,["data-source"])):o("",!0)]}),_:1})]),_:1}),a(P,{key:"2",tab:"RUC 20"},{default:n(()=>[a(c,null,{default:n(()=>[g.info.idformalization20.length==0?(e(),v(s,{key:0})):o("",!0),g.info.idformalization20.length>=1?(e(),v(z,{key:1,columns:x,"data-source":g.info.idformalization20,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:_,column:t,record:f})=>{var U,R,i,F;return[t.dataIndex==="idx"?(e(),y("span",lt,S(_+1),1)):o("",!0),t.dataIndex==="date_start"?(e(),y(D,{key:1},[w(S(f.created_at),1)],64)):o("",!0),t.dataIndex==="date_last"?(e(),y(D,{key:2},[w(S(f.updated_at),1)],64)):o("",!0),t.dataIndex==="sector"?(e(),y(D,{key:3},[w(S((U=f.economicsector)==null?void 0:U.name),1)],64)):o("",!0),t.dataIndex==="progress"?(e(),y("div",it,[u("span",rt,S(f.task==1?"Reserva de nombre":f.task==2?"Proceso de notaría":"Formalizado"),1),a(L,{direction:"vertical",style:{width:"100%"}},{default:n(()=>[a(l,{percent:f.task*33.33,steps:3,title:"hi"},null,8,["percent"])]),_:2},1024)])):o("",!0),t.dataIndex==="asesor_update"?(e(),y(D,{key:5},[w(S((R=f.user.profile)==null?void 0:R.name)+" "+S((i=f.userupdater)==null?void 0:i.profile.lastname)+" "+S((F=f.user)==null?void 0:F.profile.middlename),1)],64)):o("",!0)]}),_:1},8,["data-source"])):o("",!0)]),_:1})]),_:1}),a(P,{key:"3",tab:"RUC 10"},{default:n(()=>[a(c,null,{default:n(()=>[g.info.idformalization10.length==0?(e(),v(s,{key:0})):o("",!0),g.info.idformalization10.length>=1?(e(),v(z,{key:1,columns:C,"data-source":g.info.idformalization10,bordered:"",pagination:!1,size:"small"},{bodyCell:n(({index:_,column:t,record:f})=>{var U,R,i;return[t.dataIndex==="idx"?(e(),y("span",ut,S(_+1),1)):o("",!0),t.dataIndex==="date_start"?(e(),y(D,{key:1},[w(S(f.created_at),1)],64)):o("",!0),t.dataIndex==="component"?(e(),y(D,{key:2},[w(S((U=f.detailprocedure)==null?void 0:U.name),1)],64)):o("",!0),t.dataIndex==="sector"?(e(),y(D,{key:3},[w(S((R=f.economicsector)==null?void 0:R.name),1)],64)):o("",!0),t.dataIndex==="modality"?(e(),y(D,{key:4},[w(S((i=f.modality)==null?void 0:i.name),1)],64)):o("",!0)]}),_:1},8,["data-source"])):o("",!0)]),_:1})]),_:1})]),_:1},8,["activeKey"])}}},dt=K(ct,[["__scopeId","data-v-beaf5b43"]]);const T=A=>(Oe("data-v-64988591"),A=A(),Ne(),A),pt={class:"asesorias"},mt=T(()=>u("h3",null,"REGISTRO DE FORMALIZACIONES Y ASESRÍAS",-1)),_t=T(()=>u("br",null,null,-1)),vt={class:"wrapper-s"},ft=T(()=>u("label",{class:"label"},"Seleccione el tipo de documento",-1)),yt=T(()=>u("label",{class:"label"},"Digite el número de documento",-1)),ht={class:"column-2"},gt={class:"info-update"},bt=T(()=>u("h4",null,"RESULTADO DE LA BÚSQUEDA",-1)),kt={class:"info-personal"},St=T(()=>u("span",null,"Apellidos y nombres: ",-1)),xt=T(()=>u("span",null,"Número de celular:",-1)),Ut=T(()=>u("span",null,"Correo electrónico:",-1)),wt=T(()=>u("span",null,"Asesorías:",-1)),Ct=T(()=>u("span",null,"Formalizaciones RUC 20:",-1)),It={class:"alert-incomplete"},Rt=T(()=>u("span",null,"Formalizaciones RUC 10:",-1)),At=T(()=>u("h4",null,"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),Dt={class:"card-as-btn"},Ft=T(()=>u("h4",null,"HISTORIAL",-1)),$t={class:"steps-content"},zt=["onClick"],Ot={class:"pendient"},Nt={key:0,class:"info-tag"},qt=T(()=>u("b",null,"Paso",-1)),Et={key:1,class:"info-tag"},Tt=T(()=>u("b",null,"Siguiente paso",-1)),Pt={key:2,class:"info-tag"},Lt=T(()=>u("b",null,"Siguiente paso",-1)),Mt={class:"info"},Vt=T(()=>u("b",null,"Código SID SUNARP",-1)),Gt={class:"code-number"},Bt=T(()=>u("b",null,"Última consulta",-1)),Ht=T(()=>u("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),jt=[Ht],Yt={__name:"AsesoriasFormalizaciones",setup(A){const g=De(),r=Fe(),x=b(0),C=b(null),B=b([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]),q=b(null),$=b(!1),s=b(null),z=b(!1),c=b(!1),P=b(!1),l=b(!1),L=b(!1),V=b(!1),_=b(""),t=b([]),f=b(!1),U=b(0),R=b(!1),i=b([]),F=b(null),N=()=>{ce(_.value),$.value=!1},H=M=>qe(M).format("DD/MM/YYYY HH:mm A"),m=()=>{E()},Y=()=>{_.value=_.value.replace(/\D/g,"")},E=()=>{_.value="",t.value=[],i.value=[],g.push({name:"asesorias-formalizaciones"})},J=()=>{if(s.value=null,s.value=t.value,!C.value)return G.warning("Seleccionar un tipo de servicio");C.value=="asesoria"&&(V.value=!0),C.value=="ruc10"&&(L.value=!0),C.value=="ruc20"&&O()},se=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],d=()=>{q.value=t.value,$.value=!0},X=()=>{U.value=0,l.value=!0,c.value=!1},O=async()=>{try{R.value=!0;const M=await j({url:`formalization/list-ruc-20/${t.value.id}`,method:"GET"});if(M.length<1)return X();P.value=M,c.value=!0}catch(M){console.log(M)}finally{R.value=!1}},Q=async M=>{z.value=!0,U.value=M.task,F.value=M,setTimeout(()=>{z.value=!1,l.value=!0,c.value=!1},400)},Z=async()=>{f.value=!0;const M=await j({url:`person/found/${x.value}/${_.value}`,method:"GET"});if(M.status==200)return t.value=M.data,f.value=!1},ce=async M=>{if(f.value=!0,!M)return G.warning("Ingresa un número de documento"),f.value=!1;if(x.value==0)return G.warning("Seleccionar el tipo de documento"),f.value=!1;if(x.value==1&&_.value.length<8){G.warning("El número de DNI está incompleto"),f.value=!1;return}const k=await j({url:`person/found/${x.value}/${_.value}`,method:"GET"});if(k.status==200)return t.value=k.data,f.value=!1;if(k.status===404){const ee={type:x.value,access:"asesorias",number:_.value};g.push({name:"registrar-persona",query:ee})}};return $e(()=>{r.query.type&&(console.log("ooaoooaoaa",r.query.type),x.value=r.query.type,_.value=r.query.number)}),(M,k)=>{const ee=p("a-radio"),me=p("a-radio-group"),_e=p("a-input-search"),te=p("a-card"),ve=p("a-select"),fe=p("a-button"),ye=p("a-step"),he=p("a-steps"),ae=p("a-drawer"),le=p("a-tag"),ge=p("a-spin"),be=p("a-modal");return e(),y(D,null,[u("div",pt,[mt,_t,a(te,{class:"card-as"},{default:n(()=>[I(r).query.dni?(e(),v(I(Me),{key:0,class:"ico-reload",onClick:m})):o("",!0),u("div",vt,[u("div",null,[ft,a(me,{value:x.value,"onUpdate:value":k[0]||(k[0]=h=>x.value=h),onChange:E,class:"radio-produce"},{default:n(()=>[a(ee,{value:"1"},{default:n(()=>[w("DNI")]),_:1}),a(ee,{value:"2"},{default:n(()=>[w("CE")]),_:1})]),_:1},8,["value"])]),u("div",null,[yt,a(_e,{"enter-button":"BUSCAR",value:_.value,"onUpdate:value":k[1]||(k[1]=h=>_.value=h),placeholder:"",loading:f.value,onSearch:ce,onInput:Y,class:"search-produce",maxlength:x.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),u("div",ht,[t.value.length!=0?(e(),v(te,{key:0,class:"card-as"},{default:n(()=>{var h,ne,ie;return[u("div",gt,[bt,a(I(ze),{class:"ico-edit",onClick:d})]),u("div",kt,[St,u("span",null,S(t.value.lastname)+" "+S(t.value.middlename)+", "+S(t.value.name),1),xt,u("span",null,[u("span",null,S(t.value.phone?t.value.phone:"-"),1)]),Ut,u("span",null,S(t.value.email?t.value.email:"-"),1),wt,u("b",null,S((h=t.value)==null?void 0:h.idadvisory.length),1),Ct,u("div",It,[u("b",null,S((ne=t.value)==null?void 0:ne.idformalization20.length),1)]),Rt,u("b",null,S((ie=t.value)==null?void 0:ie.idformalization10.length),1)])]}),_:1})):o("",!0),t.value.length!=0?(e(),v(te,{key:1,class:"card-as"},{default:n(()=>[At,u("div",Dt,[a(ve,{style:{"min-width":"200px"},value:C.value,"onUpdate:value":k[2]||(k[2]=h=>C.value=h),options:B.value},null,8,["value","options"]),a(fe,{class:"btn-produce",type:"primary",onClick:J},{default:n(()=>[w("REGISTRAR")]),_:1})])]),_:1})):o("",!0)]),t.value.length!=0?(e(),v(te,{key:0,class:"card-as"},{default:n(()=>[Ft,a(dt,{info:t.value},null,8,["info"])]),_:1})):o("",!0)]),u("section",null,[a(ae,{width:"510",title:"Formalización con RUC 20",open:l.value,"onUpdate:open":k[6]||(k[6]=h=>l.value=h),placement:"right"},{default:n(()=>[a(he,{current:U.value,size:"small",class:"steps"},{default:n(()=>[(e(),y(D,null,W(se,h=>a(ye,{key:h.title,title:h.title},null,8,["title"])),64))]),_:1},8,["current"]),u("div",$t,[U.value==0?(e(),v(we,{key:0,info:s.value,onCloseDraw:k[3]||(k[3]=h=>(l.value=!1,Z()))},null,8,["info"])):o("",!0),U.value==1?(e(),v(He,{key:1,info:s.value,itemSelectedF20:F.value,onCloseDraw:k[4]||(k[4]=h=>(l.value=!1,Z()))},null,8,["info","itemSelectedF20"])):o("",!0),U.value==2?(e(),v(Ke,{key:2,itemSelectedF20:F.value,onCloseDraw:k[5]||(k[5]=h=>(l.value=!1,Z()))},null,8,["itemSelectedF20"])):o("",!0)])]),_:1},8,["open"]),a(ae,{title:"Formalización con RUC 10",open:L.value,"onUpdate:open":k[8]||(k[8]=h=>L.value=h),placement:"right"},{default:n(()=>[a(et,{info:t.value,onCloseDraw:k[7]||(k[7]=h=>(L.value=!1,Z()))},null,8,["info"])]),_:1},8,["open"]),a(ae,{title:"Nueva asesoría",open:V.value,"onUpdate:open":k[10]||(k[10]=h=>V.value=h),placement:"right"},{default:n(()=>[a(ot,{info:t.value,onCloseDraw:k[9]||(k[9]=h=>(V.value=!1,Z()))},null,8,["info"])]),_:1},8,["open"]),a(be,{open:c.value,"onUpdate:open":k[11]||(k[11]=h=>c.value=h),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:n(()=>[a(ge,{spinning:z.value},{default:n(()=>[(e(!0),y(D,null,W(P.value,(h,ne)=>(e(),y("div",{key:ne,onClick:ie=>Q(h)},[u("div",Ot,[h.task==0?(e(),y("div",Nt,[qt,w(),a(le,{color:"error"},{default:n(()=>[w("Reserva de nombre")]),_:1})])):o("",!0),h.task==1?(e(),y("div",Et,[Tt,w(),a(le,{color:"warning"},{default:n(()=>[w("Acto constitutivo")]),_:1})])):o("",!0),h.task==2?(e(),y("div",Pt,[Lt,w(),a(le,{color:"success"},{default:n(()=>[w("Formalizar")]),_:1})])):o("",!0),u("div",Mt,[Vt,u("span",null,[u("b",Gt,S(h.codesunarp),1)]),Bt,u("span",null,S(H(h.updated_at)),1)])])],8,zt))),128)),u("div",{class:"pendient pendient-btn btn-produce",onClick:X},jt)]),_:1},8,["spinning"])]),_:1},8,["open"]),a(ae,{open:$.value,"onUpdate:open":k[12]||(k[12]=h=>$.value=h),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:n(()=>[a(Ee,{onCloseDraw:N,updateValues:q.value},null,8,["updateValues"])]),_:1},8,["open"])])],64)}}},ea=K(Yt,[["__scopeId","data-v-64988591"]]);export{ea as default};
