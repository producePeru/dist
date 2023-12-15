import{c as i,A as _e,z as me,r as f,a as K,l as ie,b as v,o as n,B as c,w as t,e as $,d as x,v as ve,F as h,s,h as q,K as fe,i as p,t as z,n as N,g as A,u as ye,M as Z,E as xe,G as ge}from"./index-722d26ff.js";import{_ as ke}from"./_plugin-vue_export-helper-c27b6911.js";import{M as he}from"./MoreOutlined-44337c9a.js";var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"video-camera",theme:"outlined"};const be=Ie;function oe(b){for(var y=1;y<arguments.length;y++){var u=arguments[y]!=null?Object(arguments[y]):{},C=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(C=C.concat(Object.getOwnPropertySymbols(u).filter(function(I){return Object.getOwnPropertyDescriptor(u,I).enumerable}))),C.forEach(function(I){Ce(b,I,u[I])})}return b}function Ce(b,y,u){return y in b?Object.defineProperty(b,y,{value:u,enumerable:!0,configurable:!0,writable:!0}):b[y]=u,b}var ee=function(y,u){var C=oe({},y,u.attrs);return i(_e,oe({},C,{icon:be}),null)};ee.displayName="VideoCameraOutlined";ee.inheritAttrs=!1;const we=ee,Ee={title:{type:"iText",label:"Título del taller",name:"title",required:!0,message:"Escribe el título para el taller"},exponentId:{type:"iSelect",label:"Seleccinar expositor",name:"exponentId",required:!0,message:"Seleccionar un expositor"},workshopDate:{type:"iDate",label:"Fecha del taller",name:"workshopDate",required:!1,message:"Seleccionar la fecha del taller"},typeIntervention:{type:"iSelect",label:"Seleccinar tipo de intervención",name:"typeIntervention",required:!0,message:"Seleccionar un tipo"},slug:{type:"iText",label:"Slug",name:"slug",required:!0,message:"Escribe el título para el taller"},link:{type:"iText",label:"Link del taller",name:"link",required:!1,message:"Escribe el título para el taller"}};const $e={class:"grid-item"},Te={class:"wrapper-form_btn"},Se={__name:"NuevoTaller",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(b,{emit:y}){const u=b,C=y;me(()=>{u.isIdUpdate?(a.title=u.isIdUpdate.title,a.exponentId=u.isIdUpdate.exponent_k,a.workshopDate=u.isIdUpdate.workshop_date,a.typeIntervention=u.isIdUpdate.type_intervention,a.slug=u.isIdUpdate.slug,a.link=u.isIdUpdate.link):(a.title=null,a.exponentId=null,a.workshopDate=null,a.typeIntervention=null,a.slug=null,a.link=null)});const I=f(!0),S=f(!1),a=K({title:null,exponentId:null,workshopDate:null,typeIntervention:null,slug:null,link:null,userId:1,testinId:null,testoutId:null,invitationId:null,status:1,registered:null,rrss:null,sms:null,correo:null}),U=f([]),P=[{label:"Marketing Digital",value:1},{label:"Comercio Electrónico",value:2},{label:"Gestión Empresarial",value:3},{label:"Analisis de datos",value:4},{label:"Medios de pago",value:5},{label:"Finanzas",value:6}],V=()=>{C("handleCloseModal",!0),I.value=!1},L=()=>{a.title=null,a.exponentId=null,a.workshopDate=null,a.typeIntervention=null,a.slug=null,a.link=null,a.userId=1,a.testinId=null,a.testoutId=null,a.invitationId=null,a.status=null,a.registered=null,a.rrss=null,a.sms=null,a.correo=null},D=g=>{const d=new Date;return d.setHours(0,0,0,0),g&&g<d},E=(g,d)=>{a.workshopDate=d},R=async()=>{const g=a;S.value=!0;let d,w;u.isIdUpdate?(d=`/workshops/${u.isIdUpdate.id}`,w="PUT"):(d="/workshops",w="POST");try{const T=await N({url:d,method:w,data:g});L(),C("refreshTable",!0),A.success(T.message),V()}catch{A.error("No se pudo registrar este taller")}finally{S.value=!1}};return ie(async()=>{try{(await N({url:"/exponents",method:"GET"})).data.forEach(d=>{const w={label:d.firstName+" "+d.lastName,value:d.id};U.value.push(w)})}catch(g){console.error("Error de red:",g)}}),(g,d)=>{const w=v("a-select"),T=v("a-form-item"),G=v("a-input"),H=v("a-date-picker"),B=v("a-button"),j=v("a-form"),Y=v("a-modal");return n(),c(Y,{open:I.value,"onUpdate:open":d[0]||(d[0]=r=>I.value=r),title:"Nuevo Taller",style:{top:"20px"},footer:"",onCancel:V,width:"700px"},{default:t(()=>[i(j,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:R},{default:t(()=>[$("div",$e,[(n(!0),x(h,null,ve(q(Ee),(r,W)=>(n(),x(h,{key:W},[r.type==="iSelect"?(n(),c(T,{key:0,class:"item-max",name:r.name,label:r.label,rules:[{required:r.required,message:r.message}]},{default:t(()=>[r.name=="typeIntervention"?(n(),c(w,{key:0,value:a[r.name],"onUpdate:value":O=>a[r.name]=O,options:P},null,8,["value","onUpdate:value"])):s("",!0),r.name=="exponentId"?(n(),c(w,{key:1,value:a[r.name],"onUpdate:value":O=>a[r.name]=O,options:U.value},null,8,["value","onUpdate:value","options"])):s("",!0)]),_:2},1032,["name","label","rules"])):s("",!0),r.type==="iText"?(n(),c(T,{key:1,name:r.name,label:r.label,rules:[{required:r.required,message:r.message,type:r.email}]},{default:t(()=>[i(G,{value:a[r.name],"onUpdate:value":O=>a[r.name]=O},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):s("",!0),r.type==="iDate"?(n(),c(T,{key:2,name:r.name,label:r.label,rules:[{required:r.required,message:r.message,type:r.email}]},{default:t(()=>[i(H,{class:"w-100","show-time":"",placeholder:a.workshopDate,onChange:E,"disabled-date":D,locale:q(fe.esES),format:"DD-MM-YYYY HH:mm A"},null,8,["placeholder","locale"])]),_:2},1032,["name","label","rules"])):s("",!0)],64))),128))]),$("div",Te,[i(B,{type:"primary","html-type":"submit",loading:S.value},{default:t(()=>[p(z(u.isIdUpdate?"Actualizar":"Registrar")+" taller",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open"])}}},Ue=ke(Se,[["__scopeId","data-v-37746e0a"]]);const De=$("h3",null,"TALLERES DE RUTA DIGITAL",-1),Oe={class:"filters"},Me=["href"],ze=["onClick"],qe={class:"paginator"},Ve={class:"wrapper-form_btn"},Pe={__name:"TalleresRD",setup(b){const y=f(null),u=ye(),C=f([]),I=f(!1),S=f(!1),a=f(1e3);f("60vh");const U=f(!1),P=f(0);f(null);const V=f(!1),L=f(!1),D=f("Crear"),E=f(null),R=f({page:1}),te=[{title:"Nombre taller",dataIndex:"title",fixed:"left",width:190},{title:"Expositor",dataIndex:"expositor",width:170},{title:"Fecha taller",dataIndex:"workshop_date",align:"center",width:160},{title:"Intervención",dataIndex:"type_intervention",align:"center",width:160},{title:"Invitación",dataIndex:"invitation_id",align:"center",width:80},{title:"T. Entrada",dataIndex:"test_in",align:"center",width:80},{title:"T. Salida",dataIndex:"test_out",align:"center",width:80},{title:"Estado",dataIndex:"status",align:"center",width:100},{title:"Inscriptos",dataIndex:"registered_count",align:"center",width:100},{title:"Link",dataIndex:"link_sala",align:"center",width:80},{title:"RRSS",dataIndex:"rrss",align:"center",width:70},{title:"SMS",dataIndex:"sms",align:"center",width:70},{title:"Correo",dataIndex:"correo",align:"center",width:70},{title:"Detalles",dataIndex:"details",align:"center",width:120},{title:"",dataIndex:"options",align:"center",width:50}],g=K({reason:""}),d=K({text1:"",text2:""}),w=e=>{R.value.page=e,F()},T=e=>{e&&F()},G=e=>{const o={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};u.push({name:"test-entrada",query:o})},H=e=>{const o={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`,test:e.testin_id};u.push({name:"editar-test-entrada",query:o})},B=e=>{const o={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};u.push({name:"test-salida",query:o})},j=e=>{const o={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`,test:e.testout_id};u.push({name:"editar-test-salida",query:o})},Y=e=>{const o={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};u.push({name:"taller-id",query:o})},r=async(e,o)=>{if(E.value=o,e==="create"&&(D.value="Crear"),e==="edit"){D.value="Editar";try{const{data:m}=await N({url:`/invitations/${E.value.invitation_id}`,method:"GET"});d.text1=m.text1,d.text2=m.text2,d.workshop_id=m.workshop_id}catch(m){console.error("Error de red:",m)}}L.value=!0},W=()=>{y.value=null,U.value=!0},O=async e=>{try{const o=await N({url:`/get-workshop-slug/${e.slug}`,method:"GET"});y.value=o.workshop,U.value=!0}catch(o){console.error("Error de red:",o),A.warning("Error de red")}},se=async()=>{let e,o;D.value=="Editar"?(e=`/invitations/${E.value.invitation_id}`,o="PUT"):(e=`/create-invitation/${E.value.id}`,o="POST"),S.value=!0;try{const m={text1:d.text1,text2:d.text2,workshop_id:E.value.id!=null?E.value.id:d.workshop_id},k=await N({url:e,method:o,data:m});A.success(k.message),F()}catch(m){console.error("Error de red:",m),A.error("La invitación fue creada")}finally{S.value=!1,L.value=!1,E.value=null}},re=()=>{V.value=!0},F=async()=>{try{I.value=!0;const e=await N({url:"/workshops",method:"GET",params:R.value});C.value=e.workshop.data,P.value=e.workshop.total}catch(e){console.error("Error de red:",e)}finally{I.value=!1}};return ie(F),(e,o)=>{const m=v("a-button"),k=v("a-tag"),X=v("router-link"),ae=v("a-menu-item"),de=v("a-menu"),ue=v("a-dropdown"),ce=v("a-table"),pe=v("a-pagination"),J=v("a-textarea"),Q=v("a-form-item"),ne=v("a-form"),le=v("a-modal");return n(),x(h,null,[$("div",null,[De,$("div",Oe,[i(m,{type:"primary",onClick:W},{default:t(()=>[p("NUEVO TALLER")]),_:1})]),i(ce,{bordered:"",class:"ant-table-striped",scroll:{x:a.value},columns:te,"data-source":C.value,pagination:!1,loading:I.value,size:"small"},{bodyCell:t(({column:_,record:l})=>[_.dataIndex=="expositor"?(n(),x(h,{key:0},[p(z(l.exponent.first_name)+" "+z(l.exponent.last_name)+" "+z(l.exponent.middle_name),1)],64)):s("",!0),_.dataIndex=="type_intervention"?(n(),x(h,{key:1},[l.type_intervention==1?(n(),c(k,{key:0,color:"red"},{default:t(()=>[p("Marketing Digital")]),_:1})):s("",!0),l.type_intervention==2?(n(),c(k,{key:1,color:"green"},{default:t(()=>[p("Comercio Electrónico")]),_:1})):s("",!0),l.type_intervention==3?(n(),c(k,{key:2,color:"blue"},{default:t(()=>[p("Gestión Empresarial")]),_:1})):s("",!0),l.type_intervention==4?(n(),c(k,{key:3,color:"purple"},{default:t(()=>[p("Analisis de datos")]),_:1})):s("",!0),l.type_intervention==5?(n(),c(k,{key:4,color:"pink"},{default:t(()=>[p("Medios de pago")]),_:1})):s("",!0),l.type_intervention==6?(n(),c(k,{key:5,color:"cyan"},{default:t(()=>[p("Finanzas")]),_:1})):s("",!0)],64)):s("",!0),_.dataIndex=="test_in"?(n(),x(h,{key:2},[l.testin_id?s("",!0):(n(),c(m,{key:0,size:"small",onClick:M=>G(l)},{default:t(()=>[p("Crear")]),_:2},1032,["onClick"])),l.testin_id?(n(),x(h,{key:1},[i(m,{type:"link"},{default:t(()=>[i(X,{to:`/test-entrada/${l.slug}`},{default:t(()=>[p("Link")]),_:2},1032,["to"])]),_:2},1024),i(q(Z),{onClick:M=>H(l)},null,8,["onClick"])],64)):s("",!0)],64)):s("",!0),_.dataIndex=="test_out"?(n(),x(h,{key:3},[l.testout_id?s("",!0):(n(),c(m,{key:0,size:"small",onClick:M=>B(l)},{default:t(()=>[p("Crear")]),_:2},1032,["onClick"])),l.testout_id?(n(),x(h,{key:1},[i(m,{type:"link"},{default:t(()=>[i(X,{to:`/test-salida/${l.slug}`},{default:t(()=>[p("Link")]),_:2},1032,["to"])]),_:2},1024),i(q(Z),{onClick:M=>j(l)},null,8,["onClick"])],64)):s("",!0)],64)):s("",!0),_.dataIndex=="invitation_id"?(n(),x(h,{key:4},[l.invitation_id?s("",!0):(n(),c(m,{key:0,size:"small",onClick:M=>r("create",l)},{default:t(()=>[p("Crear")]),_:2},1032,["onClick"])),l.invitation_id?(n(),x(h,{key:1},[i(m,{type:"link"},{default:t(()=>[i(X,{to:`/invitacion/${l.slug}`},{default:t(()=>[p("Link")]),_:2},1032,["to"])]),_:2},1024),i(q(Z),{onClick:M=>r("edit",l)},null,8,["onClick"])],64)):s("",!0)],64)):s("",!0),_.dataIndex=="status"?(n(),x(h,{key:5},[l.status==1?(n(),c(k,{key:0,bordered:!1,color:"success"},{default:t(()=>[p("En proceso")]),_:1})):s("",!0),l.status==0?(n(),c(k,{key:1,bordered:!1,color:"error"},{default:t(()=>[p("Finalizado")]),_:1})):s("",!0),l.status==2?(n(),c(k,{key:2,bordered:!1,color:"warning"},{default:t(()=>[p("Cancelado")]),_:1})):s("",!0)],64)):s("",!0),_.dataIndex=="link_sala"?(n(),x("a",{key:6,href:l.link,target:"_blank"},[l.link?(n(),c(q(we),{key:0,class:"pointer",style:{fontSize:"16px",color:"#08c"}})):s("",!0)],8,Me)):s("",!0),_.dataIndex=="status"?(n(),x(h,{key:7},[l.status=="en curso"?(n(),c(k,{key:0,bordered:!1,color:"success"},{default:t(()=>[p(z(l.status),1)]),_:2},1024)):s("",!0),l.status=="finalizado"?(n(),c(k,{key:1,bordered:!1,color:"volcano"},{default:t(()=>[p(z(l.status),1)]),_:2},1024)):s("",!0)],64)):s("",!0),_.dataIndex=="details"?(n(),c(m,{key:8,size:"small",onClick:M=>Y(l)},{default:t(()=>[p("Ver detalles")]),_:2},1032,["onClick"])):s("",!0),_.dataIndex=="options"?(n(),c(ue,{key:9,trigger:["click"]},{overlay:t(()=>[i(de,null,{default:t(()=>[i(ae,{key:"0"},{default:t(()=>[$("a",{onClick:M=>O(l)},"Editar",8,ze)]),_:2},1024),i(ae,{key:"1"})]),_:2},1024)]),default:t(()=>[$("a",{class:"ant-dropdown-link",onClick:o[0]||(o[0]=xe(()=>{},["prevent"]))},[i(m,{shape:"circle",icon:ge(q(he)),size:"small"},null,8,["icon"])])]),_:2},1024)):s("",!0)]),_:1},8,["scroll","data-source","loading"])]),$("div",qe,[i(pe,{size:"small",total:P.value,pageSize:20,onChange:w,showSizeChanger:!1},null,8,["total"])]),i(Ue,{open:U.value,onHandleCloseModal:o[1]||(o[1]=_=>U.value=!1),isIdUpdate:y.value,onRefreshTable:T},null,8,["open","isIdUpdate"]),i(le,{footer:"",open:L.value,"onUpdate:open":o[4]||(o[4]=_=>L.value=_),title:`${D.value} invitación`,width:"460px"},{default:t(()=>[i(ne,{model:d,layout:"vertical",onFinish:se},{default:t(()=>[i(Q,{label:"Texto 1"},{default:t(()=>[i(J,{value:d.text1,"onUpdate:value":o[2]||(o[2]=_=>d.text1=_)},null,8,["value"])]),_:1}),i(Q,{label:"Texto 2"},{default:t(()=>[i(J,{value:d.text2,"onUpdate:value":o[3]||(o[3]=_=>d.text2=_)},null,8,["value"])]),_:1}),$("div",Ve,[i(m,{type:"primary","html-type":"submit",loading:S.value},{default:t(()=>[p(z(`${D.value} invitación`),1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open","title"]),i(le,{open:V.value,"onUpdate:open":o[6]||(o[6]=_=>V.value=_),title:"Cancelar taller",onOk:re,width:"400px"},{default:t(()=>[i(ne,{model:g,layout:"vertical"},{default:t(()=>[i(Q,{label:"Especificar motivo de la cancelación del taller"},{default:t(()=>[i(J,{value:g.reason,"onUpdate:value":o[5]||(o[5]=_=>g.reason=_)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}};export{Pe as default};
