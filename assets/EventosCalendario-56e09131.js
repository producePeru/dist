import{g as v,e as Y,r as s,o as d,a5 as b,a as n,w as l,a6 as _,F as x,ab as de,u as O,c as S,aa as f,L as p,f as ue,x as me,l as ce,h as B,a8 as V,I as pe}from"./quill-blot-formatter-d287386b.js";import{V as L}from"./main-d837839b.js";import{e as q,m as $,d as T,j as _e,Q as fe}from"./index-c50fff99.js";import"./es-29bc297e.js";import{M as ge}from"./MoreOutlined-0446c62c.js";const ve={summary:{type:"iText",label:"TÍTULO",name:"summary",required:!0,message:"",disabled:!1},start:{type:"iSelect",label:"FECHA Y HORA DE INICIO",name:"start",required:!1,message:"",disabled:!1},end:{type:"iSelect",label:"FECHA Y HORA DE FIN",name:"end",required:!1,message:"",disabled:!1},allDay:{type:"iSwitch",label:"",name:"allDay",required:!0,message:"Adenda"},description:{type:"iTextArea",label:"DESCRIPCIÓN",name:"description",required:!1,message:"Escribe descripción del evento"}};const ye={class:"grid-events"},be={class:"event-all-day"},we={key:0,style:{"margin-bottom":".5rem"}},he={__name:"DrawEventosCalendario",props:["info"],emits:["closeDraw"],setup(P,{emit:A}){const E=A,h=v(!1),a=Y({start:new Date,end:null,allDay:1,time:[{hours:7,minutes:0,seconds:0},{hours:22,minutes:0,seconds:0}]}),N=async()=>{h.value=!0;const w=(o,g)=>{if(!o||!g)return null;const k=new Date(o);return k.setHours(g.hours,g.minutes,g.seconds||0),k.toISOString()},r=o=>o?new Date(o).toISOString().split("T")[0]:null,C={allDay:a.allDay,summary:a.summary,start:a.allDay===1?r(a.start):w(a.start,a.time[0]),end:a.allDay===1?r(a.end):w(a.end,a.time[1]),description:a.description};try{const o=await q({url:"google/create-event",method:"POST",data:C});o.status===200&&($.success(o.message),a.summary=null,a.start=new Date,a.end=null,a.allDay=1,a.time=[{hours:7,minutes:0,seconds:0},{hours:22,minutes:0,seconds:0}],a.description=null,E("closeDraw"))}catch(o){console.error("Failed to update record",o)}finally{h.value=!1}};return(w,r)=>{const C=s("a-input"),o=s("a-form-item"),g=s("a-switch"),k=s("a-textarea"),D=s("a-button"),H=s("a-form");return d(),b("div",null,[n(H,{class:"form-events",layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:N},{default:l(()=>[_("div",ye,[(d(!0),b(x,null,de(O(ve),(t,U)=>(d(),b(x,{key:U},[t.type==="iText"?(d(),S(o,{key:0,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,type:t.email}]},{default:l(()=>[n(C,{value:a[t.name],"onUpdate:value":c=>a[t.name]=c,maxlength:t.max,disabled:t.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):f("",!0),t.type==="iSelect"?(d(),S(o,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[n(O(L),{modelValue:a[t.name],"onUpdate:modelValue":c=>a[t.name]=c,"enable-time-picker":!1,format:"dd/MM/yyyy","min-date":t.name==="start"?new Date:a.start,locale:"es"},null,8,["modelValue","onUpdate:modelValue","min-date"])]),_:2},1032,["name","label","rules"])):f("",!0),t.type==="iSwitch"?(d(),S(o,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[_("div",be,[r[3]||(r[3]=_("label",{for:""},"TODO EL DÍA ",-1)),n(g,{checked:a[t.name],"onUpdate:checked":c=>a[t.name]=c,checkedValue:1,unCheckedValue:0,class:"ml-1-3"},{checkedChildren:l(()=>r[1]||(r[1]=[p("Si")])),unCheckedChildren:l(()=>r[2]||(r[2]=[p("No")])),_:2},1032,["checked","onUpdate:checked"])]),a.allDay===0?(d(),b("div",we,[r[4]||(r[4]=_("label",{for:"",style:{"margin-bottom":".3rem",display:"block"}},"HORARIO",-1)),n(O(L),{modelValue:a.time,"onUpdate:modelValue":r[0]||(r[0]=c=>a.time=c),"time-picker":"","disable-time-range-validation":"",range:"","minutes-grid-increment":"10",placeholder:"Selecciona la hora"},null,8,["modelValue"])])):f("",!0)]),_:2},1032,["name","label","rules"])):f("",!0),t.type==="iTextArea"?(d(),S(o,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[n(k,{value:a[t.name],"onUpdate:value":c=>a[t.name]=c,rows:3},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):f("",!0)],64))),128))]),n(o,null,{default:l(()=>[n(D,{type:"primary","html-type":"submit",loading:h.value,style:{"margin-top":"1rem"}},{default:l(()=>r[5]||(r[5]=[p("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}};const De={class:"paginator"},Oe={__name:"EventosCalendario",setup(P){T.locale("es");const A=JSON.parse(localStorage.getItem("role"))||[],E=v(!1),h=v(null),a=v(0),N=v(50),w=v({page:0}),r=v(1200),C=v([]),o=v(!1),g=v(window.innerHeight-100),k=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"NOMBRE EVENTO",fixed:"left",dataIndex:"summary",width:100},{title:"FECHA INICIO",dataIndex:"startDate",width:100,align:"center"},{title:"FECHA FIN",dataIndex:"endDate",width:120,align:"center"},{title:"HORARIO",dataIndex:"hours",width:120,align:"center"},{title:"DESCRIPCIÓN",dataIndex:"description",width:240},{title:"",dataIndex:"actions",width:30,align:"center",fixed:"right"}],D=Y({search:""}),H=i=>A.some(e=>i.includes(e.id)),t=()=>{I(),E.value=!1},U=()=>{h.value=null,E.value=!0},c=()=>{let i={search:D.search};I(i)},G=()=>{D.search||I()},z=i=>T(i).format("DD/MM/YYYY"),Q=(i,e)=>{const u=T(i).format("HH:mm"),R=T(e).format("HH:mm");return u==="00:00"&&R==="00:00"?"Todo el día":`${u} hasta ${R}`},j=i=>{w.value.page=i,I()},F=()=>{g.value=window.innerHeight-330},J=async i=>{try{const e=await q({url:`google/delete-event-pnte/${i.id}`,method:"DELETE"});e.status==200&&(I(),$.success(e.message))}catch(e){console.error("Error de red:",e)}},K=ue(()=>i=>w.value.page*N.value+i+1),I=async i=>{try{o.value=!0;let e;e=w.value.page==0?"":w.value,e=i?{...e,...i}:e;const u=await q({url:"google/events-pnte",method:"GET",params:e});C.value=u==null?void 0:u.data,a.value=u.total,N.value=u.per_page}catch(e){console.error("Error de red:",e)}finally{o.value=!1}};return me(()=>{window.removeEventListener("resize",F)}),ce(()=>{window.addEventListener("resize",F),F(),I()}),(i,e)=>{const u=s("a-button"),R=s("router-link"),M=s("a-col"),X=s("a-input"),W=s("a-input-group"),Z=s("a-row"),ee=s("a-popconfirm"),ae=s("a-menu-item"),te=s("a-menu"),ne=s("a-dropdown"),le=s("a-table"),oe=s("a-tag"),se=s("a-pagination"),re=s("a-drawer");return d(),b(x,null,[_("div",null,[e[7]||(e[7]=_("h3",{class:"title-produce"},"EVENTOS PNTE",-1)),n(Z,{style:{margin:"1rem 0"}},{default:l(()=>[n(M,{xs:24,md:12,lg:18},{default:l(()=>[H([5,10,11])?(d(),S(u,{key:0,type:"primary",onClick:U,class:"box-btn-add"},{default:l(()=>e[3]||(e[3]=[p(" NUEVO EVENTO ")])),_:1})):f("",!0),n(R,{to:"/eventos",style:{"margin-left":"1rem"}},{default:l(()=>[n(u,{type:"dashed",icon:B(O(_e))},{default:l(()=>e[4]||(e[4]=[p("LINK")])),_:1},8,["icon"])]),_:1})]),_:1}),n(M,{xs:24,md:12,lg:6},{default:l(()=>[n(W,{compact:""},{default:l(()=>[n(X,{value:D.search,"onUpdate:value":e[0]||(e[0]=y=>D.search=y),style:{width:"calc(100% - 80px)"},onInput:G},null,8,["value"]),n(u,{type:"primary",disabled:D.search==="",onClick:c},{default:l(()=>e[5]||(e[5]=[p("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),n(le,{bordered:"",scroll:{x:r.value,y:g.value},class:"table-events-google",columns:k,"data-source":C.value,pagination:!1,loading:o.value,size:"small"},{bodyCell:l(({column:y,record:m,index:ie})=>[y.dataIndex=="idx"?(d(),b(x,{key:0},[p(V(K.value(ie)),1)],64)):f("",!0),y.dataIndex=="startDate"?(d(),b(x,{key:1},[p(V(z(m==null?void 0:m.start)),1)],64)):f("",!0),y.dataIndex=="endDate"?(d(),b(x,{key:2},[p(V(z(m==null?void 0:m.end)),1)],64)):f("",!0),y.dataIndex=="hours"?(d(),b(x,{key:3},[p(V(Q(m==null?void 0:m.start,m==null?void 0:m.end)),1)],64)):f("",!0),y.dataIndex=="actions"?(d(),S(ne,{key:4,trigger:["click"]},{overlay:l(()=>[n(te,null,{default:l(()=>[n(ae,null,{default:l(()=>[n(ee,{placement:"rightBottom",title:"¿Quieres eliminar este evento ?",onConfirm:xe=>J(m)},{icon:l(()=>[n(O(fe),{style:{color:"red"}})]),default:l(()=>[e[6]||(e[6]=_("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:l(()=>[_("a",{class:"ant-dropdown-link",onClick:e[1]||(e[1]=pe(()=>{},["prevent"]))},[n(u,{shape:"circle",icon:B(O(ge)),size:"small"},null,8,["icon"])])]),_:2},1024)):f("",!0)]),_:1},8,["scroll","data-source","loading"])]),_("div",De,[_("span",null,[n(oe,{color:"blue"},{default:l(()=>[_("b",null,V(a.value),1)]),_:1}),e[8]||(e[8]=p("Eventos creados"))]),n(se,{size:"small",total:a.value,pageSize:N.value,onChange:j,showSizeChanger:!1},null,8,["total","pageSize"])]),n(re,{open:E.value,"onUpdate:open":e[2]||(e[2]=y=>E.value=y),title:h.value?"Editar Evento":"Nuevo eventosss",placement:"right",width:"550"},{default:l(()=>[n(he,{onCloseDraw:t,dataRow:h.value},null,8,["dataRow"])]),_:1},8,["open","title"])],64)}}};export{Oe as default};
