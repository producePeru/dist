import{a as De,f as Ae,r as Oe,b as Fe,R as Ee}from"./ReservaNombre-817f8f67.js";import{c as l,A as $e,r as g,b as ne,l as oe,d,o as e,e as w,w as o,f as r,F as j,B as Q,i as B,s as _,v as i,j as J,m as H,h as M,N as Te,O as ze,T as Ne,U as qe,g as K,t as O,u as Pe,y as Ge,V as Le,W as Me,p as Ve,k as Be,Q as He}from"./index-d873182e.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{p as ye,m as ge,e as he,a as be}from"./selects-0fbcf7fc.js";import{u as Se}from"./someEvents-4a19bda6.js";var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const je=Je;function fe(D){for(var h=1;h<arguments.length;h++){var x=arguments[h]!=null?Object(arguments[h]):{},y=Object.keys(x);typeof Object.getOwnPropertySymbols=="function"&&(y=y.concat(Object.getOwnPropertySymbols(x).filter(function(F){return Object.getOwnPropertyDescriptor(x,F).enumerable}))),y.forEach(function(F){Ye(D,F,x[F])})}return D}function Ye(D,h,x){return h in D?Object.defineProperty(D,h,{value:x,enumerable:!0,configurable:!0,writable:!0}):D[h]=x,D}var ce=function(h,x){var y=fe({},h,x.attrs);return l($e,fe({},y,{icon:je}),null)};ce.displayName="RedoOutlined";ce.inheritAttrs=!1;const We=ce;const Ke={class:"wrapper-booking"},Qe={class:"grid-booking"},Ze={__name:"ActoConstitutivo",props:["info"],emits:["closeDraw"],setup(D,{emit:h}){JSON.parse(localStorage.getItem("user"));const x=JSON.parse(localStorage.getItem("info")),y=D,F=h,V=g([]),z=g(!1),p=ne({id_person:null,dni:null,step:2,code_sid_sunarp:null,social_reason:null,num_notary:null,id_notary:null,updated_by:x.id,created_by:x.id,created_dni:x.dni}),N=async()=>{p.id_person=y.info.id_person,p.dni=y.info.dni,p.code_sid_sunarp=y.info.code_sid_sunarp,z.value=!0;try{const n=await H({url:"/formalization20",method:"POST",data:p});n&&(M.success(n.message),p.social_reason=null,p.id_notary=null,p.num_notary=null,F("closeDraw",!0))}catch{M.error("Error al registrar")}finally{z.value=!1}},I=()=>{M.error("Debes de completar todos los espacios requeridos")},S=async()=>{try{const{data:n}=await H({url:"/notaries-select",method:"GET"});V.value=n}catch(n){console.log(n)}};return oe(async()=>{await S()}),(n,R)=>{const q=d("a-select"),s=d("a-form-item"),k=d("a-input-search"),A=d("a-input"),G=d("a-date-picker"),E=d("a-button"),c=d("a-form");return e(),w("div",Ke,[l(c,{layout:"vertical",model:p,name:"basic",autocomplete:"off",onFinish:N,onFinishFailed:I},{default:o(()=>[r("div",Qe,[(e(!0),w(j,null,Q(B(De),(t,U)=>(e(),w(j,{key:U},[t.type==="iSelect"?(e(),_(s,{key:0,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[t.name=="id_notary"?(e(),_(q,{key:0,value:p[t.name],"onUpdate:value":v=>p[t.name]=v,options:V.value,disabled:t.disabled},null,8,["value","onUpdate:value","options","disabled"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iSearch"?(e(),_(s,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[l(k,{maxlength:15,loading:n.searchLoading,value:p[t.name],"onUpdate:value":v=>p[t.name]=v,onSearch:n.handleSearchApi,onInput:n.validateNumber},null,8,["loading","value","onUpdate:value","onSearch","onInput"])]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iText"?(e(),_(s,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,type:t.email,max:t.max}]},{default:o(()=>[l(A,{value:p[t.name],"onUpdate:value":v=>p[t.name]=v,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iDate"?(e(),_(s,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:o(()=>[l(G,{locale:n.locale,value:n.birthdateDate,"onUpdate:value":R[0]||(R[0]=v=>n.birthdateDate=v),style:{width:"100%"},format:n.dateFormat,disabled:t.disabled},null,8,["locale","value","format","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),l(s,null,{default:o(()=>[l(E,{type:"primary","html-type":"submit",loading:z.value},{default:o(()=>[J("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Xe=Z(Ze,[["__scopeId","data-v-2c865cf4"]]);const ea={class:"wrapper-booking"},aa={class:"grid-booking"},ta={class:"emp-20"},na={__name:"MypeFinal",props:["info"],emits:["closeDraw"],setup(D,{emit:h}){JSON.parse(localStorage.getItem("user"));const x=JSON.parse(localStorage.getItem("info")),y=D,F=h,V=g(!1),z=g(!0),p=ne({id_person:null,dni:null,step:3,code_sid_sunarp:null,ruc:null,updated_by:x.id,created_by:x.id,created_dni:x.dni}),N=async()=>{p.id_person=y.info.id_person,p.dni=y.info.dni,p.code_sid_sunarp=y.info.code_sid_sunarp,p.ruc=`20${p.ruc}`,V.value=!0,z.value=!1;const S={ruc:p.ruc,social_reason:y.info.social_reason,category:y.info.category,person_type:2,economic_sector:y.info.economy_sector,department:y.info.department,province:y.info.province,district:y.info.district,address:y.info.address,email:null,phone:null,created_by:1,update_by:1,status:1},n={number:y.info.dni,id_post:4};try{const R=await H({url:"/formalization20",method:"POST",data:p});await H({url:"/formalization-company",method:"POST",data:S}),await H({url:"/person-post",method:"POST",data:n}),M.success(R.message),p.ruc=null,F("closeDraw",!0)}catch{M.error("Error al registrar")}finally{V.value=!1}},I=()=>{M.error("Debes de completar todos los espacios requeridos")};return(S,n)=>{const R=d("a-input"),q=d("a-form-item"),s=d("a-button"),k=d("a-form");return e(),w("div",ea,[l(k,{layout:"vertical",model:p,name:"basic",autocomplete:"off",onFinish:N,onFinishFailed:I},{default:o(()=>[r("div",aa,[(e(!0),w(j,null,Q(B(Ae),(A,G)=>(e(),w(j,{key:G},[A.type==="iText"?(e(),_(q,{key:0,name:A.name,label:A.label,rules:[{required:A.required,message:A.message,type:A.email,max:A.max,min:A.min}]},{default:o(()=>[l(R,{value:p[A.name],"onUpdate:value":E=>p[A.name]=E,disabled:A.disabled},{prefix:o(()=>[Te(r("span",ta,"20",512),[[ze,z.value]])]),_:2},1032,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),l(q,null,{default:o(()=>[l(s,{type:"primary","html-type":"submit",loading:V.value},{default:o(()=>[J("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},oa=Z(na,[["__scopeId","data-v-773feb14"]]);const la={class:"wrapper-booking"},sa={class:"grid-booking"},ra={__name:"FormalizacionRUC10",props:["info"],emits:["closeDraw"],setup(D,{emit:h}){const x=qe({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),y=Se(),F=D;JSON.parse(localStorage.getItem("user"));const V=JSON.parse(localStorage.getItem("info")),z=h,p=g(),N=g([]),I=g([]),S=g([]),n=g([]),R=g(!1),q=g(!1),s=ne({detail_procedure:null,modality:null,economy_sector:null,category:null,department:null,province:null,district:null,id_person:F.info.id,created_by:V.id,created_dni:V.dni}),k=(f,C)=>{const $=f.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return C.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes($)},A=async()=>{const f=s;R.value=!0;try{const C=await H({url:"/formalization10",method:"POST",data:f});if(C.status==400)return M.error(C.message),y.logout();C&&(M.success(C.message),s.detail_procedure=null,s.modality=null,s.economy_sector=null,s.category=null,s.department=null,s.province=null,s.district=null,z("closeDraw",!0))}catch{M.error("Error al registrar")}finally{R.value=!1}},G=async()=>{q.value=!0;try{await H({url:"/create-comercial-activities",method:"POST",data:{name:p.value}}),v(),p.value=""}catch{M.error("Error al registrar")}finally{q.value=!1}},E=()=>{M.warning("Debes de completar todos los espacios requeridos")},c=async()=>{try{const{data:f}=await K({url:"/departaments",method:"GET"});let C=f.map($=>({label:$.label,value:$.id}));N.value=[...N.value,...C]}catch(f){console.log(f)}},t=async f=>{s.province=null,s.district=null,I.value=[],S.value=[];try{const{data:C}=await K({url:`/province/${f}`,method:"GET"});let $=C.map(u=>({label:u.label,value:u.id}));I.value=[...I.value,...$]}catch(C){console.log(C)}},U=async f=>{s.district=null,S.value=[];try{const{data:C}=await K({url:`/district/${f}`,method:"GET"});let $=C.map(u=>({label:u.label,value:u.id}));S.value=[...S.value,...$]}catch(C){console.log(C)}},v=async()=>{try{const{data:f}=await H({url:"/comercial-activities",method:"GET"});n.value=f}catch(f){console.log(f)}};return oe(()=>{c(),v()}),(f,C)=>{const $=d("a-select"),u=d("a-form-item"),W=d("a-input"),L=d("a-divider"),X=d("a-button"),Y=d("a-space"),le=d("a-form");return e(),w("div",la,[l(le,{layout:"vertical",model:s,name:"basic",autocomplete:"off",onFinish:A,onFinishFailed:E},{default:o(()=>[r("div",sa,[(e(!0),w(j,null,Q(B(Oe),(a,m)=>(e(),w(j,{key:m},[a.type==="iSelect"?(e(),_(u,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:o(()=>[a.name=="detail_procedure"?(e(),_($,{key:0,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,options:B(ye)},null,8,["value","onUpdate:value","options"])):i("",!0),a.name=="modality"?(e(),_($,{key:1,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,options:B(ge)},null,8,["value","onUpdate:value","options"])):i("",!0),a.name=="economy_sector"?(e(),_($,{key:2,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,options:B(he)},null,8,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),a.type==="iText"?(e(),_(u,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email,max:a.max}]},{default:o(()=>[l(W,{value:s[a.name],"onUpdate:value":T=>s[a.name]=T,disabled:a.disabled},null,8,["value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):i("",!0),a.type==="iSelectWrite"?(e(),_(u,{key:2,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:o(()=>[a.name=="category"?(e(),_($,{key:0,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,"show-search":"",options:n.value,"filter-option":k},{dropdownRender:o(({menuNode:T})=>[l(B(x),{vnodes:T},null,8,["vnodes"]),l(L,{style:{margin:"4px 0"}}),l(Y,{style:{padding:"4px 8px"}},{default:o(()=>[l(W,{ref_for:!0,ref:"inputRef",value:p.value,"onUpdate:value":C[0]||(C[0]=se=>p.value=se),placeholder:"Nueva actividad"},null,8,["value"]),l(X,{type:"text",onClick:G,loading:q.value},{icon:o(()=>[l(B(Ne))]),default:o(()=>[J(" Agregar ")]),_:1},8,["loading"])]),_:1})]),_:2},1032,["value","onUpdate:value","options"])):i("",!0),a.name=="department"?(e(),_($,{key:1,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,"show-search":"",options:N.value,"filter-option":k,onChange:t},null,8,["value","onUpdate:value","options"])):i("",!0),a.name=="province"?(e(),_($,{key:2,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,"show-search":"",options:I.value,"filter-option":k,onChange:U},null,8,["value","onUpdate:value","options"])):i("",!0),a.name=="district"?(e(),_($,{key:3,value:s[a.name],"onUpdate:value":T=>s[a.name]=T,"show-search":"",options:S.value,"filter-option":k},null,8,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),l(u,null,{default:o(()=>[l(X,{type:"primary","html-type":"submit",loading:R.value},{default:o(()=>[J("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},ia=Z(ra,[["__scopeId","data-v-d6dca133"]]);const ua={class:"wrapper-booking"},ca={class:"grid-booking"},da={__name:"AsesoriaNuevo",props:["info"],emits:["closeDraw"],setup(D,{emit:h}){const x=Se(),y=D;JSON.parse(localStorage.getItem("user"));const F=JSON.parse(localStorage.getItem("info")),V=h,z=g([]),p=g([]),N=g([]),I=g([]),S=g(!1),n=ne({component:null,tema_compoment:null,modality:null,department:null,province:null,district:null,description:null,id_person:y.info.id,created_by:F.id,created_dni:F.dni}),R=(c,t)=>{const U=c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(U)},q=async()=>{const c=n;S.value=!0;try{const t=await H({url:"/create-consulting",method:"POST",data:c});if(t.status==400)return M.error(t.message),x.logout();t&&(M.success(t.message),n.component=null,n.tema_compoment=null,n.modality=null,n.department=null,n.province=null,n.district=null,n.description=null,V("closeDraw",!0))}catch{M.error("Error al registrar")}finally{S.value=!1}},s=()=>{M.warning("Debes de completar todos los espacios requeridos")},k=async()=>{try{const{data:c}=await K({url:"/departaments",method:"GET"});let t=c.map(U=>({label:U.label,value:U.id}));z.value=[...z.value,...t]}catch(c){console.log(c)}},A=async c=>{n.province=null,n.district=null,p.value=[],N.value=[];try{const{data:t}=await K({url:`/province/${c}`,method:"GET"});let U=t.map(v=>({label:v.label,value:v.id}));p.value=[...p.value,...U]}catch(t){console.log(t)}},G=async c=>{n.district=null,N.value=[];try{const{data:t}=await K({url:`/district/${c}`,method:"GET"});let U=t.map(v=>({label:v.label,value:v.id}));N.value=[...N.value,...U]}catch(t){console.log(t)}},E=async()=>{try{const{data:c}=await H({url:"/theme-component",method:"GET"});I.value=c}catch(c){console.log(c)}};return oe(async()=>{await k(),await E()}),(c,t)=>{const U=d("a-select"),v=d("a-form-item"),f=d("a-textarea"),C=d("a-button"),$=d("a-form");return e(),w("div",ua,[l($,{layout:"vertical",model:n,name:"basic",autocomplete:"off",onFinish:q,onFinishFailed:s},{default:o(()=>[r("div",ca,[(e(!0),w(j,null,Q(B(Fe),(u,W)=>(e(),w(j,{key:W},[u.type==="iSelect"?(e(),_(v,{key:0,class:"item-max",name:u.name,label:u.label,rules:[{required:u.required,message:u.message}]},{default:o(()=>[u.name=="component"?(e(),_(U,{key:0,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,options:B(be)},null,8,["value","onUpdate:value","options"])):i("",!0),u.name=="modality"?(e(),_(U,{key:1,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,options:B(ge)},null,8,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),u.type==="iTextarea"?(e(),_(v,{key:1,name:u.name,label:u.label,rules:[{required:u.required,message:u.message}]},{default:o(()=>[l(f,{value:n[u.name],"onUpdate:value":L=>n[u.name]=L,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):i("",!0),u.type==="iSelectWrite"?(e(),_(v,{key:2,class:"item-max",name:u.name,label:u.label,rules:[{required:u.required,message:u.message}]},{default:o(()=>[u.name=="tema_compoment"?(e(),_(U,{key:0,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,"show-search":"",options:I.value,"filter-option":R},null,8,["value","onUpdate:value","options"])):i("",!0),u.name=="department"?(e(),_(U,{key:1,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,"show-search":"",options:z.value,"filter-option":R,onChange:A},null,8,["value","onUpdate:value","options"])):i("",!0),u.name=="province"?(e(),_(U,{key:2,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,"show-search":"",options:p.value,"filter-option":R,onChange:G},null,8,["value","onUpdate:value","options"])):i("",!0),u.name=="district"?(e(),_(U,{key:3,value:n[u.name],"onUpdate:value":L=>n[u.name]=L,"show-search":"",options:N.value,"filter-option":R},null,8,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),l(v,null,{default:o(()=>[l(C,{type:"primary","html-type":"submit",loading:S.value},{default:o(()=>[J("GUARDAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},pa=Z(da,[["__scopeId","data-v-29a1d23e"]]);const ma={key:0},_a={key:1},va={key:2},fa={key:0},ya={key:1,class:"steps"},ga={style:{"text-align":"right"}},ha={key:0},ba={key:1},Sa={key:3},ka={__name:"AsesoriasHistorial",props:["info"],setup(D){const h=D,x=g("1"),y=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start",width:160},{title:"Fecha última actualización",dataIndex:"date_last",width:160},{title:"Proceso",dataIndex:"progress"},{title:"Sector económico",dataIndex:"sector"},{title:"Registrado por",dataIndex:"asesor_create"},{title:"Último asesor atendido",dataIndex:"asesor_update"}],F=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Detalle del trámite",dataIndex:"detalle"},{title:"Sector económico",dataIndex:"sector"},{title:"Modalidad",dataIndex:"modality",align:"center"},{title:"Registrado por",dataIndex:"asesor_create"}],V=[{title:"#",dataIndex:"idx"},{title:"Fecha registro",dataIndex:"date_start"},{title:"Componente",dataIndex:"component"},{title:"Tema",dataIndex:"tema_compoment"},{title:"Modalidad",dataIndex:"modality",align:"center"},{title:"Registrado por",dataIndex:"asesor_create"}],z=I=>he.find(S=>S.value===I).label,p=I=>ye.find(S=>S.value===I).label,N=I=>be.find(S=>S.value===I).label;return(I,S)=>{const n=d("a-empty"),R=d("a-table"),q=d("a-card"),s=d("a-tab-pane"),k=d("a-progress"),A=d("a-space"),G=d("a-tabs");return e(),_(G,{activeKey:x.value,"onUpdate:activeKey":S[0]||(S[0]=E=>x.value=E),type:"card",class:"box-hist"},{default:o(()=>[l(s,{key:"1",tab:"ASESORÍAS"},{default:o(()=>[l(q,null,{default:o(()=>{var E,c,t;return[((E=h.info[0])==null?void 0:E.adv.length)==0?(e(),_(n,{key:0})):i("",!0),((c=h.info[0])==null?void 0:c.adv.length)>=1?(e(),_(R,{key:1,columns:V,"data-source":(t=h.info[0])==null?void 0:t.adv,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:U,column:v,record:f})=>[v.dataIndex==="idx"?(e(),w("span",ma,O(U+1),1)):i("",!0),v.dataIndex==="component"?(e(),w("span",_a,O(N(f.component)),1)):i("",!0),v.dataIndex==="modality"?(e(),w("span",va,O(f.modality==1?"Virtual":"Presencial"),1)):i("",!0)]),_:1},8,["data-source"])):i("",!0)]}),_:1})]),_:1}),l(s,{key:"2",tab:"RUC 20"},{default:o(()=>[l(q,null,{default:o(()=>{var E,c,t;return[((E=h.info[0])==null?void 0:E.ruc20.length)==0?(e(),_(n,{key:0})):i("",!0),((c=h.info[0])==null?void 0:c.ruc20.length)>=1?(e(),_(R,{key:1,columns:y,"data-source":(t=h.info[0])==null?void 0:t.ruc20,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:U,column:v,record:f})=>[v.dataIndex==="idx"?(e(),w("span",fa,O(U+1),1)):i("",!0),v.dataIndex==="progress"?(e(),w("div",ya,[r("span",ga,O(f.step==1?"Reserva de nombre":f.step==2?"Proceso de notaría":"Formalizado"),1),l(A,{direction:"vertical",style:{width:"100%"}},{default:o(()=>[l(k,{percent:f.step*33.33,steps:3,title:"hi"},null,8,["percent"])]),_:2},1024)])):i("",!0),v.dataIndex==="sector"?(e(),w(j,{key:2},[r("div",null,O(z(f.sector)),1),r("div",null,O(f.category),1)],64)):i("",!0)]),_:1},8,["data-source"])):i("",!0)]}),_:1})]),_:1}),l(s,{key:"3",tab:"RUC 10"},{default:o(()=>[l(q,null,{default:o(()=>{var E,c,t;return[((E=h.info[0])==null?void 0:E.ruc10.length)==0?(e(),_(n,{key:0})):i("",!0),((c=h.info[0])==null?void 0:c.ruc10.length)>=1?(e(),_(R,{key:1,columns:F,"data-source":(t=h.info[0])==null?void 0:t.ruc10,bordered:"",pagination:!1,size:"small"},{bodyCell:o(({index:U,column:v,record:f})=>[v.dataIndex==="idx"?(e(),w("span",ha,O(U+1),1)):i("",!0),v.dataIndex==="detalle"?(e(),w("span",ba,O(p(f.detail_procedure)),1)):i("",!0),v.dataIndex==="sector"?(e(),w(j,{key:2},[r("div",null,O(z(f.economy_sector)),1),r("div",null,O(f.category),1)],64)):i("",!0),v.dataIndex==="modality"?(e(),w("span",Sa,O(f.modality==1?"Virtual":"Presencial"),1)):i("",!0)]),_:1},8,["data-source"])):i("",!0)]}),_:1})]),_:1})]),_:1},8,["activeKey"])}}},wa=Z(ka,[["__scopeId","data-v-dc6fa541"]]);const P=D=>(Ve("data-v-5b2e7ac6"),D=D(),Be(),D),xa={class:"asesorias"},Ua=P(()=>r("h3",null,"REGISTRO DE FORMALIZACIONES Y ASESRÍAS",-1)),Ia=P(()=>r("br",null,null,-1)),Ra={class:"wrapper-s"},Ca=P(()=>r("label",{class:"label"},"Seleccione el tipo de documento",-1)),Da=P(()=>r("label",{class:"label"},"Digite el número de documento",-1)),Aa={class:"column-2"},Oa={class:"info-update"},Fa=P(()=>r("h4",null,"RESULTADO DE LA BÚSQUEDA",-1)),Ea={class:"info-personal"},$a=P(()=>r("span",null,"Apellidos y nombres: ",-1)),Ta=P(()=>r("span",null,"Número de celular:",-1)),za=P(()=>r("span",null,"Correo electrónico:",-1)),Na=P(()=>r("span",null,"Asesorías:",-1)),qa=P(()=>r("span",null,"Formalizaciones RUC 20:",-1)),Pa={class:"alert-incomplete"},Ga={key:0,class:"alert"},La={class:"small"},Ma=P(()=>r("span",null,"Formalizaciones RUC 10:",-1)),Va=P(()=>r("h4",null,"¿DESEA REGISTRAR UN NUEVO SERVICIO?",-1)),Ba={class:"card-as-btn"},Ha=P(()=>r("h4",null,"HISTORIAL",-1)),Ja={class:"steps-content"},ja=["onClick"],Ya={key:0,class:"info-tag"},Wa=P(()=>r("b",null,"Paso",-1)),Ka={key:1,class:"info-tag"},Qa=P(()=>r("b",null,"Siguiente paso",-1)),Za={key:2,class:"info-tag"},Xa=P(()=>r("b",null,"Siguiente paso",-1)),et={class:"info"},at=P(()=>r("b",null,"Código SID SUNARP",-1)),tt=P(()=>r("b",null,"Última consulta",-1)),nt=P(()=>r("div",{style:{"text-align":"center"}},"NUEVO TRÁMITE",-1)),ot=[nt],lt={__name:"AsesoriasFormalizaciones",setup(D){const h=Pe(),x=Ge(),y=g(1),F=g(),V=g([{value:"asesoria",label:"ASESORÍA"},{value:"ruc20",label:"RUC 20"},{value:"ruc10",label:"RUC 10"}]),z=g(!1),p=g(!1),N=g(!1),I=g(!1),S=g(!1),n=g(!1),R=g(!1),q=g(!1),s=g(""),k=g([]),A=g(!1),G=g(0),E=g(!1),c=g([]),t=a=>He(a).format("DD/MM/YYYY HH:mm A"),U=()=>{f()},v=()=>{s.value=s.value.replace(/\D/g,"")},f=()=>{s.value="",k.value=[],c.value=[],h.push({name:"asesorias-formalizaciones"})},C=()=>{if(!F.value)return M.warning("Selecciona un tipo de servicio");F.value=="asesoria"&&(q.value=!0),F.value=="ruc10"&&(R.value=!0),F.value=="ruc20"&&W()},$=[{title:"Reserva de nombre"},{title:"Acto constitutivo"},{title:"Final"}],u=()=>{const a={rol:"solicitante",access:3,dni:s.value,type:"asesoria",typedoc:y.value==1?"dni":"ce"};h.push({name:"actualizar-persona",query:a})},W=async()=>{try{if(p.value={id:k.value.id,dni:k.value.number_document},E.value=!0,S.value)return I.value=!0;const{data:a}=await H({url:`/my-formalizations20/${k.value.number_document}`,method:"GET"});if(a.length>=1){S.value=a,I.value=!0;return}n.value=!0}catch(a){console.log(a)}finally{E.value=!1}},L=async a=>{z.value=!0;try{const{data:m}=await H({url:`find-formalization20/${a}`,method:"GET"});G.value=m.step,I.value=!1,n.value=!0,N.value=m}catch(m){console.log(m)}finally{z.value=!1}},X=async a=>{c.value=[];try{const m=await H({url:`/historial-formalization/${a.number_document}/${a.id}`,method:"GET"});c.value=[...c.value,m]}catch(m){console.log(m)}},Y=async()=>{if(S.value=!1,G.value=0,y.value==1&&s.value.length<8)return M.warning("El número a buscar es incorrecto");A.value=!0;try{const a=await H({url:`/applicant-new/${s.value}`,method:"GET"});if(a.status==205){const m={rol:"solicitante",access:3,dni:s.value};h.push({name:"registrar-persona",query:m})}else k.value=a,X(a)}catch(a){console.log("You have an error",a)}finally{A.value=!1}},le=async()=>{x.query.typedoc=="ce"?y.value=2:y.value=1;const a=await H({url:`/applicant-new/${x.query.dni}`,method:"GET"});s.value=a.number_document,k.value=a,await X(a)};return oe(()=>{x.query.dni&&le()}),(a,m)=>{const T=d("a-radio"),se=d("a-radio-group"),ke=d("a-input-search"),ae=d("a-card"),we=d("a-select"),xe=d("a-button"),Ue=d("a-step"),Ie=d("a-steps"),re=d("a-drawer"),ie=d("a-tag"),Re=d("a-spin"),Ce=d("a-modal");return e(),w(j,null,[r("div",xa,[Ua,Ia,l(ae,{class:"card-as"},{default:o(()=>[B(x).query.dni?(e(),_(B(We),{key:0,class:"ico-reload",onClick:U})):i("",!0),r("div",Ra,[r("div",null,[Ca,l(se,{value:y.value,"onUpdate:value":m[0]||(m[0]=b=>y.value=b),onChange:f},{default:o(()=>[l(T,{value:1},{default:o(()=>[J("DNI")]),_:1}),l(T,{value:2},{default:o(()=>[J("CE")]),_:1})]),_:1},8,["value"])]),r("div",null,[Da,l(ke,{"enter-button":"BUSCAR",value:s.value,"onUpdate:value":m[1]||(m[1]=b=>s.value=b),placeholder:"",loading:A.value,onSearch:Y,onInput:v,maxlength:y.value==1?8:20},null,8,["value","loading","maxlength"])])])]),_:1}),r("div",Aa,[k.value.length!=0?(e(),_(ae,{key:0,class:"card-as"},{default:o(()=>{var b,te,ue,de,pe,me,_e,ve;return[r("div",Oa,[Fa,l(B(Le),{class:"ico-edit",onClick:u})]),r("div",Ea,[$a,r("span",null,O(k.value.last_name)+" "+O(k.value.middle_name)+", "+O(k.value.name),1),Ta,r("span",null,[r("span",null,O(k.value.phone?k.value.phone:"-"),1)]),za,r("span",null,O(k.value.email?k.value.email:"-"),1),Na,r("b",null,O((b=c.value[0])!=null&&b.adv?(te=c.value[0])==null?void 0:te.adv.length:""),1),qa,r("div",Pa,[r("b",null,O((ue=c.value[0])!=null&&ue.ruc20?(de=c.value[0])==null?void 0:de.ruc20.length:""),1),((pe=c.value[0])==null?void 0:pe.ruc20.filter(ee=>ee.step===1||ee.step===2).length)>=1?(e(),w("span",Ga,[l(B(Me)),r("span",La,"Tienes "+O((me=c.value[0])==null?void 0:me.ruc20.filter(ee=>ee.step===1||ee.step===2).length)+" procesos pendientes",1)])):i("",!0)]),Ma,r("b",null,O((_e=c.value[0])!=null&&_e.ruc10?(ve=c.value[0])==null?void 0:ve.ruc10.length:""),1)])]}),_:1})):i("",!0),k.value.length!=0?(e(),_(ae,{key:1,class:"card-as"},{default:o(()=>[Va,r("div",Ba,[l(we,{style:{"min-width":"200px"},value:F.value,"onUpdate:value":m[2]||(m[2]=b=>F.value=b),options:V.value},null,8,["value","options"]),l(xe,{type:"primary",onClick:C},{default:o(()=>[J("REGISTRAR")]),_:1})])]),_:1})):i("",!0)]),k.value.length!=0?(e(),_(ae,{key:0,class:"card-as"},{default:o(()=>[Ha,l(wa,{info:c.value},null,8,["info"])]),_:1})):i("",!0)]),r("section",null,[l(re,{width:"510",title:"Formalización con RUC 20",open:n.value,"onUpdate:open":m[6]||(m[6]=b=>n.value=b),placement:"right"},{default:o(()=>[l(Ie,{current:G.value,size:"small",class:"steps"},{default:o(()=>[(e(),w(j,null,Q($,b=>l(Ue,{key:b.title,title:b.title},null,8,["title"])),64))]),_:1},8,["current"]),r("div",Ja,[G.value==0?(e(),_(Ee,{key:0,info:p.value,onCloseDraw:m[3]||(m[3]=b=>(n.value=!1,S.value=!1,Y()))},null,8,["info"])):i("",!0),G.value==1?(e(),_(Xe,{key:1,info:N.value,onCloseDraw:m[4]||(m[4]=b=>(n.value=!1,S.value=!1,Y()))},null,8,["info"])):i("",!0),G.value==2?(e(),_(oa,{key:2,info:N.value,onCloseDraw:m[5]||(m[5]=b=>(n.value=!1,S.value=!1,Y()))},null,8,["info"])):i("",!0)])]),_:1},8,["open"]),l(re,{title:"Formalización con RUC 10",open:R.value,"onUpdate:open":m[8]||(m[8]=b=>R.value=b),placement:"right"},{default:o(()=>[l(ia,{info:k.value,onCloseDraw:m[7]||(m[7]=b=>(R.value=!1,Y()))},null,8,["info"])]),_:1},8,["open"]),l(re,{title:"Nueva asesoría",open:q.value,"onUpdate:open":m[10]||(m[10]=b=>q.value=b),placement:"right"},{default:o(()=>[l(pa,{info:k.value,onCloseDraw:m[9]||(m[9]=b=>(q.value=!1,Y()))},null,8,["info"])]),_:1},8,["open"]),l(Ce,{open:I.value,"onUpdate:open":m[12]||(m[12]=b=>I.value=b),title:"Pendientes",closable:!0,cancelText:"Cerrar",footer:null,maskClosable:!1,width:"380px"},{default:o(()=>[l(Re,{spinning:z.value},{default:o(()=>[(e(!0),w(j,null,Q(S.value,(b,te)=>(e(),w("div",{key:te,class:"pendient",onClick:ue=>L(b.id)},[b.step==0?(e(),w("div",Ya,[Wa,J(),l(ie,{color:"error"},{default:o(()=>[J("Reserva de nombre")]),_:1})])):i("",!0),b.step==1?(e(),w("div",Ka,[Qa,J(),l(ie,{color:"warning"},{default:o(()=>[J("Acto constitutivo")]),_:1})])):i("",!0),b.step==2?(e(),w("div",Za,[Xa,J(),l(ie,{color:"success"},{default:o(()=>[J("Formalizar")]),_:1})])):i("",!0),r("div",et,[at,r("span",null,O(b.code_sid_sunarp),1),tt,r("span",null,O(t(b.updated_at)),1)])],8,ja))),128)),r("div",{class:"pendient pendient-btn",onClick:m[11]||(m[11]=b=>(n.value=!0,I.value=!1,G.value=0))},ot)]),_:1},8,["spinning"])]),_:1},8,["open"])])],64)}}},dt=Z(lt,[["__scopeId","data-v-5b2e7ac6"]]);export{dt as default};