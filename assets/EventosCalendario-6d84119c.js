import{c as o,A as ne,z as E,r as y,a as Z,j as K,T as ee,b as d,o as l,d as x,w as a,e as p,F as U,v as N,h as O,p as D,q as S,x as j,i as z,B as oe,m as G,I as V,E as Q,L as le,P as se,n as re,aa as W,t as F}from"./index-08d187e2.js";import{i as ue,f as ie,V as ce,F as de,a as me,b as pe,c as ve}from"./isSameOrBefore-46a26dbf.js";import"./es-91d4c0fb.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};const fe=_e;function X(C){for(var g=1;g<arguments.length;g++){var h=arguments[g]!=null?Object(arguments[g]):{},v=Object.keys(h);typeof Object.getOwnPropertySymbols=="function"&&(v=v.concat(Object.getOwnPropertySymbols(h).filter(function(k){return Object.getOwnPropertyDescriptor(h,k).enumerable}))),v.forEach(function(k){ye(C,k,h[k])})}return C}function ye(C,g,h){return g in C?Object.defineProperty(C,g,{value:h,enumerable:!0,configurable:!0,writable:!0}):C[g]=h,C}var I=function(g,h){var v=X({},g,h.attrs);return o(ne,X({},v,{icon:fe}),null)};I.displayName="PlusCircleOutlined";I.inheritAttrs=!1;const ge=I;const be={class:"grid-events"},he={class:"video-conference"},ke={key:0,class:"form-label-1"},De={__name:"FormEventos",props:["info","pcategories"],emits:["closeDraw"],setup(C,{emit:g}){E.extend(ue),E.locale("es"),JSON.parse(localStorage.getItem("profile"));const h=g,v=C,k=y(!1),b=y(!1);y(null);const T=["red","orange","yellow","green","blue","indigo","purple","pink","gray","black"],Y=[{label:"Cada Mes",value:"month"},{label:"Cada Año",value:"year"}],w=y([]),t=Z({startDate:null,endDate:null}),q=()=>{t.nameEvent=null,t.description=null,t.linkVideo=null,t.category_id=null,t.repetir=null,t.color=null,t.allDay=null},M=(_,i)=>{const s=new Date().setHours(0,0,0,0);if(i==="startDate")return _<s;if(i==="endDate"){const m=t.startDate?new Date(t.startDate):null,f=new Date(_);return m&&m.toDateString()===f.toDateString()?f<=m:m&&f.getTime()<=m.getTime()}return!1},P=async()=>{k.value=!0;const _={nameEvent:t.nameEvent,start:E(t.startDate).format("YYYY-MM-DD HH:mm"),end:E(t.endDate).format("YYYY-MM-DD HH:mm"),description:t.description,linkVideo:t.linkVideo,category_id:t.category_id,repetir:t.repeat,color:t.color,allDay:t.color?1:0};try{if(E(_.end).isSameOrBefore(E(_.start)))return G.warning("La fecha y hora de fin no puede ser igual o menor");const i=await V({url:"event/create-event",method:"POST",data:_});i.status==200&&(G.success(i.message),q(),h("closeDraw"))}catch{console.log("Failed to update record")}finally{k.value=!1}};function $(_){_?(t.startDate=E(_.start),t.endDate=E(_.end),v.pcategories.map(i=>{const s={label:i.name,value:i.id};w.value.some(f=>f.value===i.id)||(w.value=[...w.value,s])})):q()}return K(()=>{v.info&&$(v.info)}),ee(()=>v.info,_=>{_&&$(_)}),(_,i)=>{const s=d("a-input"),m=d("a-form-item"),f=d("a-textarea"),B=d("a-select-option"),n=d("a-select"),r=d("a-checkbox"),H=d("a-date-picker"),A=d("a-button"),R=d("a-form");return l(),x("div",null,[o(R,{class:"form-events",layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:P},{default:a(()=>[p("div",be,[(l(!0),x(U,null,N(O(ie),(e,L)=>(l(),x(U,{key:L},[e.type==="iText"?(l(),D(m,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:a(()=>[o(s,{value:t[e.name],"onUpdate:value":u=>t[e.name]=u,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iTextarea"?(l(),D(m,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[o(f,{value:t[e.name],"onUpdate:value":u=>t[e.name]=u,rows:2,style:{resize:"none"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iLinkVideo"?(l(),D(m,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[p("div",he,[o(O(ce)),b.value?(l(),x("label",ke,"Establecer enlace de videoconferencia")):(l(),x("label",{key:1,class:"form-label-2",onClick:i[0]||(i[0]=u=>b.value=!0)},"Agrega video conferencia"))]),b.value?(l(),D(s,{key:0,value:t.username,"onUpdate:value":i[1]||(i[1]=u=>t.username=u)},null,8,["value"])):S("",!0)]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iColor"?(l(),D(m,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[o(n,{value:t[e.name],"onUpdate:value":u=>t[e.name]=u,style:{width:"100%"}},{default:a(()=>[(l(),x(U,null,N(T,u=>o(B,{key:u,value:u},{default:a(()=>[p("div",{style:j({backgroundColor:u}),class:"bg-color"},null,4)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iCheckbox"?(l(),D(m,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[o(r,{checked:t[e.name],"onUpdate:checked":u=>t[e.name]=u},{default:a(()=>i[2]||(i[2]=[z("Todo el día")])),_:2},1032,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iSelect"?(l(),D(m,{key:5,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[e.name=="category_id"?(l(),D(n,{key:0,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:w.value},null,8,["value","onUpdate:value","options"])):S("",!0),e.name=="repeat"?(l(),D(n,{key:1,value:t[e.name],"onUpdate:value":u=>t[e.name]=u,options:Y},null,8,["value","onUpdate:value"])):S("",!0)]),_:2},1032,["name","label","rules"])):S("",!0),e.type==="iDate"?(l(),D(m,{key:6,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:a(()=>[o(H,{locale:O(oe),value:t[e.name],"onUpdate:value":u=>t[e.name]=u,style:{width:"100%"},"disabled-date":u=>M(u,e.name),"show-time":{format:"HH:mm"},format:"DD-MM-YYYY HH:mm",placeholder:""},null,8,["locale","value","onUpdate:value","disabled-date"])]),_:2},1032,["name","label","rules"])):S("",!0)],64))),128))]),o(m,null,{default:a(()=>[o(A,{type:"primary","html-type":"submit",loading:k.value,style:{float:"inline-end"}},{default:a(()=>i[3]||(i[3]=[z("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},xe=te(De,[["__scopeId","data-v-70f47f0c"]]),Ce={name:{type:"iText",label:"Nombre de la categoría",name:"name",required:!0,message:"",disabled:!1},color:{type:"iSelect",label:"Seleccionar color",name:"color",required:!1,message:"",disabled:!1}};const we={class:"grid-events"},Se={__name:"FormCategorias",props:["info"],emits:["closeDraw"],setup(C,{emit:g}){const h=g,v=y(!1),k=["white","red","orange","yellow","green","blue","indigo","purple","pink","gray","black"],b=Z({}),T=()=>{b.name=null,b.color=null},Y=async()=>{v.value=!0;const w={name:b.name,color:b.color};try{const t=await V({url:"event/create-category",method:"POST",data:w});t.status==200&&(G.success(t.message),T(),h("closeDraw"))}catch{console.log("Failed to update record")}finally{v.value=!1}};return(w,t)=>{const q=d("a-input"),M=d("a-form-item"),P=d("a-select-option"),$=d("a-select"),_=d("a-button"),i=d("a-form");return l(),x("div",null,[o(i,{class:"form-events",layout:"vertical",model:b,name:"basic",autocomplete:"off",onFinish:Y},{default:a(()=>[p("div",we,[(l(!0),x(U,null,N(O(Ce),(s,m)=>(l(),x(U,{key:m},[s.type==="iText"?(l(),D(M,{key:0,name:s.name,label:s.label,rules:[{required:s.required,message:s.message,type:s.email}]},{default:a(()=>[o(q,{value:b[s.name],"onUpdate:value":f=>b[s.name]=f,maxlength:s.max,disabled:s.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):S("",!0),s.type==="iSelect"?(l(),D(M,{key:1,class:"item-max",name:s.name,label:s.label,rules:[{required:s.required,message:s.message}]},{default:a(()=>[o($,{value:b[s.name],"onUpdate:value":f=>b[s.name]=f,style:{width:"70px"}},{default:a(()=>[(l(),x(U,null,N(k,f=>o(P,{key:f,value:f},{default:a(()=>[p("div",{style:j({backgroundColor:f}),class:"bg-color"},null,4)]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):S("",!0)],64))),128))]),o(M,null,{default:a(()=>[o(_,{type:"primary","html-type":"submit",loading:v.value,style:{width:"100%","margin-top":"1rem"}},{default:a(()=>t[0]||(t[0]=[z("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const Ee={style:{margin:"2rem 0"}},Oe=["onClick"],Ye={class:"check-text"},Me={class:"event-tooltip"},Ue=["href"],Te={__name:"EventosCalendario",setup(C){const g=y(null),h=y(null),v=y([]),k=y(null),b=y(!0),T=y(null);y(!0),y();const Y=y(!1),w=y(!1);y([]);const t=y(0),q=Q(le,{style:{fontSize:"18px"}}),M=y({plugins:[me,pe,ve],headerToolbar:{left:"prev,next today",center:"title",right:""},buttonText:{today:"Hoy",month:"Mes",week:"Semana",day:"Día"},initialView:"dayGridMonth",initialEvents:v,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,select:_,eventClick:s,eventsSet:m,locale:"es",eventColor:"#ffcccb",eventBorderColor:"transparent",datesSet:$}),P=n=>{console.log("ksksksksk",n),n=="create-event"&&(Y.value=!1),w.value=!1,f()};function $(n){const r=n.view.currentStart,H=r.getMonth()+1,A=r.getFullYear();g.value=H,h.value=A,f()}function _(n){let r=n.end;n.allDay?r=E(n.end).subtract(1,"day").format("YYYY-MM-DD"):r=E(n.end).format("YYYY-MM-DDTHH:mm"),T.value={start:E(n.start).format("YYYY-MM-DDTHH:mm"),end:r,allDay:n.allDay},Y.value=!0}const i=async n=>{try{t.value=n.id;const r=await V({url:`event/status-categories/${n.id}`,method:"PUT"})}catch(r){console.error("Error de red:",r)}finally{t.value=0}};function s(n){}function m(n){}const f=async()=>{try{b.value=!0;const n=await V({url:`event/list?month=${g.value}&year=${h.value}`,method:"GET"});v.value=n}catch(n){console.error("Error de red:",n)}finally{b.value=!1}},B=async()=>{try{const{data:n}=await V({url:"event/list-categories",method:"GET"});k.value=n}catch(n){console.error("Error de red:",n)}};return K(()=>{B()}),ee(v,n=>{M.value.events=n}),(n,r)=>{const H=d("a-button"),A=d("a-flex"),R=d("a-spin"),e=d("a-col"),L=d("a-popover"),u=d("a-row"),J=d("a-modal");return l(),x("section",null,[o(u,{gutter:30},{default:a(()=>[o(e,{md:5,class:"side-left"},{default:a(()=>[p("div",null,[r[6]||(r[6]=p("h3",null,"CALENDARIO",-1)),o(H,{type:"primary",icon:Q(O(se)),style:{"margin-top":".5rem"}},{default:a(()=>r[4]||(r[4]=[z("CREAR")])),_:1},8,["icon"]),p("div",Ee,[o(A,{justify:"space-between"},{default:a(()=>[r[5]||(r[5]=p("h5",null,"CATEGORÍAS:",-1)),o(O(ge),{class:"icon-add-category",onClick:r[0]||(r[0]=c=>w.value=!0)})]),_:1}),(l(!0),x(U,null,N(k.value,(c,ae)=>(l(),x("div",{key:ae,class:re(["check-wrapper",c.status==1&&"item-check"]),onClick:qe=>i(c)},[o(R,{indicator:O(q),spinning:c.id==t.value,style:{"margin-left":"-3px","margin-top":"1px"}},{default:a(()=>[p("div",{class:"ckeck-box",style:j({background:c.status==1?c.color:"transparent"})},[c.status==0?(l(),D(O(W),{key:0,style:{color:"#fff"}})):(l(),D(O(W),{key:1,class:"check-icon",style:j({color:c.color==="yellow"||c.color==="white"?"#606060":"white"})},null,8,["style"]))],4)]),_:2},1032,["indicator","spinning"]),p("div",Ye,F(c.name),1)],10,Oe))),128))])])]),_:1}),o(e,{md:19},{default:a(()=>[o(R,{spinning:b.value},{default:a(()=>[o(O(de),{class:"demo-app-calendar",options:M.value},{eventContent:a(c=>[o(L,{trigger:"hover"},{content:a(()=>[p("div",Me,[p("span",null,F(c.event.title),1),p("span",null,F(c.event.backgroundColor),1),p("span",null,F(c.event.extendedProps.description),1),p("a",{href:c.event.extendedProps.linkVideo},"Link",8,Ue)])]),default:a(()=>[p("div",null,[p("b",null,F(c.timeText),1),p("i",null,F(c.event.title),1)])]),_:2},1024)]),_:1},8,["options"])]),_:1},8,["spinning"])]),_:1})]),_:1}),o(J,{open:Y.value,"onUpdate:open":r[2]||(r[2]=c=>Y.value=c),title:"Nuevo Evento",footer:"",width:"480px"},{default:a(()=>[o(xe,{info:T.value,pcategories:k.value,onCloseDraw:r[1]||(r[1]=c=>P("create-event"))},null,8,["info","pcategories"])]),_:1},8,["open"]),o(J,{open:w.value,"onUpdate:open":r[3]||(r[3]=c=>w.value=c),title:"Categoría",footer:"",width:"350px"},{default:a(()=>[o(Se,{onCloseDraw:P})]),_:1},8,["open"])])}}},Ae=te(Te,[["__scopeId","data-v-f567936d"]]);export{Ae as default};
