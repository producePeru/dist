import{c as d,A as he,K as ke,a5 as xe,r as v,a as K,k as oe,b as f,o as a,q as u,w as l,e as C,d as g,B as Ie,F as b,s as o,h as E,L as be,i as _,t as M,y as G,m as H,u as we,v as Ce,Z,I as $e,J as Ee,f as Te}from"./index-9211c6e9.js";import"./es-09ce39ec.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";import{Q as Se}from"./quill.snow-77c4f732.js";import{M as De}from"./MoreOutlined-fbf64bbf.js";var Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"video-camera",theme:"outlined"};const ze=Oe;function le($){for(var h=1;h<arguments.length;h++){var c=arguments[h]!=null?Object(arguments[h]):{},w=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(w=w.concat(Object.getOwnPropertySymbols(c).filter(function(x){return Object.getOwnPropertyDescriptor(c,x).enumerable}))),w.forEach(function(x){Me($,x,c[x])})}return $}function Me($,h,c){return h in $?Object.defineProperty($,h,{value:c,enumerable:!0,configurable:!0,writable:!0}):$[h]=c,$}var j=function(h,c){var w=le({},h,c.attrs);return d(he,le({},w,{icon:ze}),null)};j.displayName="VideoCameraOutlined";j.inheritAttrs=!1;const qe=j,Ve={title:{type:"iText",label:"Título del taller",name:"title",required:!0,message:"Escribe el título para el taller"},exponentId:{type:"iSelect",label:"Seleccinar expositor",name:"exponentId",required:!0,message:"Seleccionar un expositor"},workshopDate:{type:"iDate",label:"Fecha del taller",name:"workshopDate",required:!1,message:"Seleccionar la fecha del taller"},typeIntervention:{type:"iSelect",label:"Seleccinar tipo de intervención",name:"typeIntervention",required:!0,message:"Seleccionar un tipo"},slug:{type:"iText",label:"Slug",name:"slug",required:!0,message:"Escribe el título para el taller"},link:{type:"iText",label:"Link del taller",name:"link",required:!1,message:"Escribe el título para el taller"}};const Le={class:"grid-item"},Ae={class:"wrapper-form_btn"},Ne={__name:"NuevoTaller",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup($,{emit:h}){ke.locale("es");const c=$,w=h;xe(()=>{c.isIdUpdate?(t.title=c.isIdUpdate.title,t.exponentId=c.isIdUpdate.exponent_k,t.workshopDate=c.isIdUpdate.workshop_date,t.typeIntervention=c.isIdUpdate.type_intervention,t.slug=c.isIdUpdate.slug,t.link=c.isIdUpdate.link):(t.title=null,t.exponentId=null,t.workshopDate=null,t.typeIntervention=null,t.slug=null,t.link=null)});const x=v(!0),U=v(!1),t=K({title:null,exponentId:null,workshopDate:null,typeIntervention:null,slug:null,link:null,userId:1,testinId:null,testoutId:null,invitationId:null,status:1,registered:null,rrss:null,sms:null,correo:null}),A=v([]),N=[{label:"Marketing Digital",value:1},{label:"Comercio Electrónico",value:2},{label:"Gestión Empresarial",value:3},{label:"Analisis de datos",value:4},{label:"Medios de pago",value:5},{label:"Finanzas",value:6}],q=()=>{w("handleCloseModal",!0),x.value=!1},Q=()=>{t.title=null,t.exponentId=null,t.workshopDate=null,t.typeIntervention=null,t.slug=null,t.link=null,t.userId=1,t.testinId=null,t.testoutId=null,t.invitationId=null,t.status=null,t.registered=null,t.rrss=null,t.sms=null,t.correo=null},V=r=>{const y=new Date;return y.setHours(0,0,0,0),r&&r<y},B=(r,y)=>{t.workshopDate=y},S=r=>{if(typeof r=="string")return r.toLowerCase().replace(/\s+/g,"-");if(Array.isArray(r))return r.map(S);if(typeof r=="object"){const y={};for(const k in r)r.hasOwnProperty(k)&&(y[k]=S(r[k]));return y}else return r},L=async()=>{const r=S(t.slug),y=t;y.slug=r,U.value=!0;let k,T;c.isIdUpdate?(k=`/workshops/${c.isIdUpdate.id}`,T="PUT"):(k="/workshops",T="POST");try{const D=await G({url:k,method:T,data:y});Q(),w("refreshTable",!0),H.success(D.message),q()}catch{H.error("No se pudo registrar este taller")}finally{U.value=!1}};return oe(async()=>{try{const{data:r}=await G({url:"/enableds-exponents",method:"GET"});A.value=r}catch(r){console.error("Error de red:",r)}}),(r,y)=>{const k=f("a-select"),T=f("a-form-item"),D=f("a-input"),J=f("a-date-picker"),F=f("a-button"),R=f("a-form"),W=f("a-modal");return a(),u(W,{open:x.value,"onUpdate:open":y[0]||(y[0]=s=>x.value=s),title:"Nuevo Taller",style:{top:"20px"},footer:"",onCancel:q,width:"700px"},{default:l(()=>[d(R,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:L},{default:l(()=>[C("div",Le,[(a(!0),g(b,null,Ie(E(Ve),(s,X)=>(a(),g(b,{key:X},[s.type==="iSelect"?(a(),u(T,{key:0,class:"item-max",name:s.name,label:s.label,rules:[{required:s.required,message:s.message}]},{default:l(()=>[s.name=="typeIntervention"?(a(),u(k,{key:0,value:t[s.name],"onUpdate:value":O=>t[s.name]=O,options:N},null,8,["value","onUpdate:value"])):o("",!0),s.name=="exponentId"?(a(),u(k,{key:1,value:t[s.name],"onUpdate:value":O=>t[s.name]=O,options:A.value},null,8,["value","onUpdate:value","options"])):o("",!0)]),_:2},1032,["name","label","rules"])):o("",!0),s.type==="iText"?(a(),u(T,{key:1,name:s.name,label:s.label,rules:[{required:s.required,message:s.message,type:s.email}]},{default:l(()=>[d(D,{value:t[s.name],"onUpdate:value":O=>t[s.name]=O},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):o("",!0),s.type==="iDate"?(a(),u(T,{key:2,name:s.name,label:s.label,rules:[{required:s.required,message:s.message,type:s.email}]},{default:l(()=>[d(J,{locale:E(be),class:"w-100","show-time":"",placeholder:t.workshopDate,onChange:B,"disabled-date":V,format:"DD-MM-YYYY HH:mm A"},null,8,["locale","placeholder"])]),_:2},1032,["name","label","rules"])):o("",!0)],64))),128))]),C("div",Ae,[d(F,{type:"primary","html-type":"submit",loading:U.value},{default:l(()=>[_(M(c.isIdUpdate?"Actualizar":"Registrar")+" taller",1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open"])}}},Pe=Ue(Ne,[["__scopeId","data-v-6226f246"]]);const Fe=C("h3",null,"TALLERES DE RUTA DIGITAL",-1),Re={class:"filters"},Ge=["href"],He=["href"],Be=["href"],Ye=["href"],Qe={key:9},Je=["onClick"],We={class:"paginator"},Xe={class:"wrapper-form_btn"},at={__name:"TalleresRD",setup($){const h="https://programa.soporte-pnte.com/",c="http://127.0.0.1:5173/",w=window.location.hostname=="127.0.0.1"?c:h,x=v(""),U=v(null),t=we(),A=v([]),N=v(!1),q=v(!1),Q=v(1e3),V=v(!1),B=v(0);v(null);const S=v(!1),L=v(!1),P=v("Crear"),r=v(null),y=v(window.innerHeight-100),k=()=>{y.value=window.innerHeight-300};Ce(()=>{window.removeEventListener("resize",k)});const T={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},D=v({page:1}),J=[{title:"Nombre taller",dataIndex:"title",fixed:"left",width:190},{title:"Expositor",dataIndex:"expositor",width:170},{title:"Fecha taller",dataIndex:"workshop_date",align:"center",width:160},{title:"Intervención",dataIndex:"type_intervention",align:"center",width:160},{title:"Invitación",dataIndex:"invitation_id",align:"center",width:80},{title:"T. Entrada",dataIndex:"test_in",align:"center",width:80},{title:"T. Salida",dataIndex:"test_out",align:"center",width:80},{title:"Estado",dataIndex:"status",align:"center",width:100},{title:"Inscriptos",dataIndex:"registered_c",align:"center",width:100},{title:"Link",dataIndex:"link_sala",align:"center",width:80},{title:"RRSS",dataIndex:"rrss",align:"center",width:70},{title:"SMS",dataIndex:"sms",align:"center",width:70},{title:"Correo",dataIndex:"correo",align:"center",width:70},{title:"Detalles",dataIndex:"details",align:"center",width:120},{title:"",dataIndex:"options",align:"center",width:50}],F=K({reason:""}),R=K({text1:"",text2:""}),W=e=>{D.value.page=e,Y()},s=e=>{e&&Y()},X=e=>{const i={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};t.push({name:"test-entrada",query:i})},O=e=>{const i={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`,test:e.testin_id};t.push({name:"editar-test-entrada",query:i})},ie=e=>{const i={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};t.push({name:"test-salida",query:i})},se=e=>{const i={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`,test:e.testout_id};t.push({name:"editar-test-salida",query:i})},re=e=>{const i={id:e.id,date:e.workshop_date,taller:e.title,exponent:`${e.exponent.first_name} ${e.exponent.last_name} ${e.exponent.middle_name}`};t.push({name:"taller-descripcion",query:i})},ee=async(e,i)=>{if(r.value=i,e==="create"&&(P.value="Crear"),e==="edit"){P.value="Editar";try{const{data:m}=await G({url:`/invitations/${r.value.invitation_id}`,method:"GET"});x.value=m.content,R.workshop_id=m.workshop_id}catch(m){console.error("Error de red:",m)}}L.value=!0},de=()=>{U.value=null,V.value=!0},ue=async e=>{try{const i=await Te({url:`/get-workshop-slug/${e.slug}`,method:"GET"});U.value=i.workshop,V.value=!0}catch(i){console.error("Error de red:",i),H.warning("Error de red")}},ce=async()=>{let e,i;P.value=="Editar"?(e=`/invitations/${r.value.invitation_id}`,i="PUT"):(e=`/create-invitation/${r.value.id}`,i="POST"),q.value=!0;try{const m={content:x.value,workshop_id:r.value.id!=null?r.value.id:R.workshop_id},I=await G({url:e,method:i,data:m});H.success(I.message),Y()}catch(m){console.error("Error de red:",m),H.error("La invitación fue creada")}finally{q.value=!1,L.value=!1,r.value=null}},pe=()=>{S.value=!0},Y=async()=>{try{N.value=!0;const e=await G({url:"/workshops",method:"GET",params:D.value});A.value=e.workshop.data,B.value=e.workshop.total}catch(e){console.error("Error de red:",e)}finally{N.value=!1}};return oe(()=>{Y(),window.addEventListener("resize",k),k()}),(e,i)=>{const m=f("a-button"),I=f("a-tag"),te=f("a-menu-item"),me=f("a-menu"),_e=f("a-dropdown"),ve=f("a-table"),fe=f("a-pagination"),ae=f("a-form"),ne=f("a-modal"),ye=f("a-textarea"),ge=f("a-form-item");return a(),g(b,null,[C("div",null,[Fe,C("div",Re,[d(m,{type:"primary",onClick:de},{default:l(()=>[_("NUEVO")]),_:1})]),d(ve,{bordered:"",class:"ant-table-striped",scroll:{x:Q.value,y:y.value},columns:J,"data-source":A.value,pagination:!1,loading:N.value,size:"small"},{bodyCell:l(({column:p,record:n})=>[p.dataIndex=="expositor"?(a(),g(b,{key:0},[_(M(n.exponent.first_name)+" "+M(n.exponent.last_name)+" "+M(n.exponent.middle_name),1)],64)):o("",!0),p.dataIndex=="type_intervention"?(a(),g(b,{key:1},[n.type_intervention==1?(a(),u(I,{key:0,color:"red"},{default:l(()=>[_("Marketing Digital")]),_:1})):o("",!0),n.type_intervention==2?(a(),u(I,{key:1,color:"green"},{default:l(()=>[_("Comercio Electrónico")]),_:1})):o("",!0),n.type_intervention==3?(a(),u(I,{key:2,color:"blue"},{default:l(()=>[_("Gestión Empresarial")]),_:1})):o("",!0),n.type_intervention==4?(a(),u(I,{key:3,color:"purple"},{default:l(()=>[_("Analisis de datos")]),_:1})):o("",!0),n.type_intervention==5?(a(),u(I,{key:4,color:"pink"},{default:l(()=>[_("Medios de pago")]),_:1})):o("",!0),n.type_intervention==6?(a(),u(I,{key:5,color:"cyan"},{default:l(()=>[_("Finanzas")]),_:1})):o("",!0)],64)):o("",!0),p.dataIndex=="test_in"?(a(),g(b,{key:2},[n.testin_id?o("",!0):(a(),u(m,{key:0,size:"small",onClick:z=>X(n)},{default:l(()=>[_("Crear")]),_:2},1032,["onClick"])),n.testin_id?(a(),g(b,{key:1},[d(m,{type:"link"},{default:l(()=>[C("a",{href:`${E(w)}test-entrada/${n.slug}`,target:"_blank"},"Link",8,Ge)]),_:2},1024),d(E(Z),{onClick:z=>O(n)},null,8,["onClick"])],64)):o("",!0)],64)):o("",!0),p.dataIndex=="test_out"?(a(),g(b,{key:3},[n.testout_id?o("",!0):(a(),u(m,{key:0,size:"small",onClick:z=>ie(n)},{default:l(()=>[_("Crear")]),_:2},1032,["onClick"])),n.testout_id?(a(),g(b,{key:1},[d(m,{type:"link"},{default:l(()=>[C("a",{href:`${E(w)}test-salida/${n.slug}`,target:"_blank"},"Link",8,He)]),_:2},1024),d(E(Z),{onClick:z=>se(n)},null,8,["onClick"])],64)):o("",!0)],64)):o("",!0),p.dataIndex=="invitation_id"?(a(),g(b,{key:4},[n.invitation_id?o("",!0):(a(),u(m,{key:0,size:"small",onClick:z=>ee("create",n)},{default:l(()=>[_("Crear")]),_:2},1032,["onClick"])),n.invitation_id?(a(),g(b,{key:1},[d(m,{type:"link"},{default:l(()=>[C("a",{href:`${E(w)}invitacion/${n.slug}`,target:"_blank"},"Link",8,Be)]),_:2},1024),d(E(Z),{onClick:z=>ee("edit",n)},null,8,["onClick"])],64)):o("",!0)],64)):o("",!0),p.dataIndex=="status"?(a(),g(b,{key:5},[n.status==1?(a(),u(I,{key:0,bordered:!1,color:"success"},{default:l(()=>[_("En proceso")]),_:1})):o("",!0),n.status==0?(a(),u(I,{key:1,bordered:!1,color:"error"},{default:l(()=>[_("Finalizado")]),_:1})):o("",!0),n.status==2?(a(),u(I,{key:2,bordered:!1,color:"warning"},{default:l(()=>[_("Cancelado")]),_:1})):o("",!0)],64)):o("",!0),p.dataIndex=="link_sala"?(a(),g("a",{key:6,href:n.link,target:"_blank"},[n.link?(a(),u(E(qe),{key:0,class:"pointer",style:{fontSize:"16px",color:"#08c"}})):o("",!0)],8,Ye)):o("",!0),p.dataIndex=="status"?(a(),g(b,{key:7},[n.status=="en curso"?(a(),u(I,{key:0,bordered:!1,color:"success"},{default:l(()=>[_(M(n.status),1)]),_:2},1024)):o("",!0),n.status=="finalizado"?(a(),u(I,{key:1,bordered:!1,color:"volcano"},{default:l(()=>[_(M(n.status),1)]),_:2},1024)):o("",!0)],64)):o("",!0),p.dataIndex=="details"?(a(),u(m,{key:8,size:"small",onClick:z=>re(n)},{default:l(()=>[_("Ver detalles")]),_:2},1032,["onClick"])):o("",!0),p.dataIndex=="registered_c"?(a(),g("b",Qe,M(n.registered_count),1)):o("",!0),p.dataIndex=="options"?(a(),u(_e,{key:10,trigger:["click"]},{overlay:l(()=>[d(me,null,{default:l(()=>[d(te,{key:"0"},{default:l(()=>[C("a",{onClick:z=>ue(n)},"Editar",8,Je)]),_:2},1024),d(te,{key:"1"})]),_:2},1024)]),default:l(()=>[C("a",{class:"ant-dropdown-link",onClick:i[0]||(i[0]=$e(()=>{},["prevent"]))},[d(m,{shape:"circle",icon:Ee(E(De)),size:"small"},null,8,["icon"])])]),_:2},1024)):o("",!0)]),_:1},8,["scroll","data-source","loading"])]),C("div",We,[d(fe,{size:"small",total:B.value,pageSize:20,onChange:W,showSizeChanger:!1},null,8,["total"])]),d(Pe,{open:V.value,onHandleCloseModal:i[1]||(i[1]=p=>V.value=!1),isIdUpdate:U.value,onRefreshTable:s},null,8,["open","isIdUpdate"]),d(ne,{footer:"",open:L.value,"onUpdate:open":i[3]||(i[3]=p=>L.value=p),title:`${P.value} invitación`,width:"460px"},{default:l(()=>[d(ae,{model:R,layout:"vertical",onFinish:ce},{default:l(()=>[d(E(Se),{class:"quill-editor",content:x.value,"onUpdate:content":i[2]||(i[2]=p=>x.value=p),options:T,contentType:"html"},null,8,["content"]),C("div",Xe,[d(m,{type:"primary","html-type":"submit",loading:q.value},{default:l(()=>[_("Guardar")]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open","title"]),d(ne,{open:S.value,"onUpdate:open":i[5]||(i[5]=p=>S.value=p),title:"Cancelar taller",onOk:pe,width:"400px"},{default:l(()=>[d(ae,{model:F,layout:"vertical"},{default:l(()=>[d(ge,{label:"Especificar motivo de la cancelación del taller"},{default:l(()=>[d(ye,{value:F.reason,"onUpdate:value":i[4]||(i[4]=p=>F.reason=p)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}};export{at as default};
