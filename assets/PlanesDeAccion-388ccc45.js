import{_ as J}from"./icoexcel-1b303edf.js";import{o as i,d as g,L as K,r as a,a as Q,I as W,k as ee,b as o,c as l,w as s,e as r,i as p,z as ae,h as te,M as ne,q as D,s as m,F as P,t as M}from"./index-eaf064bf.js";import"./es-46f191be.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";const oe={};function se(b,c){return i(),g("div",null,"---")}const ie=le(oe,[["render",se]]);const de=r("h3",{class:"title-produce"},"PLANES DE ACCIÓN",-1),re=r("img",{width:"20",style:{margin:"-2px 4px 0 0"},src:J},null,-1),ce={class:"paginator"},ge={__name:"PlanesDeAccion",setup(b){K.locale("es");const c=a(null),k=a(!1),h=a(),E=a(50),N=a([]),I=a(!1),w=a(0),_=a({page:1}),z=a("user/list-asesories"),T=a(1200),O=a(window.innerHeight-100),x=a(!1);a(null);const R=a([{value:"si",label:"Si"},{value:"no",label:"No"}]),L=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"CENTRO TU EMPRESA",dataIndex:"tuempresa",width:120},{title:"ASESOR",dataIndex:"lastname",width:180},{title:"REGION DEL EMPRENDEDOR O MYPE",dataIndex:"lastname",width:170},{title:"PROVINCIA DEL EMPRENDEDOR O MYPE",dataIndex:"lastname",width:170},{title:"DISTRITO DEL EMPRENDEDOR O MYPE",dataIndex:"lastname",width:170},{title:"NOMBRE DEL EMPRENDEDOR O MYPE",dataIndex:"lastname",width:170},{title:"RUC",dataIndex:"lastname",width:100,align:"center"},{title:"Genero",dataIndex:"lastname",width:80,align:"center"},{title:"Tiene alguna Discapacidad ? (SI / NO)",dataIndex:"lastname",width:120,align:"center"},{title:"COMPONENTE 1",dataIndex:"lastname",width:180},{title:"COMPONENTE 2",dataIndex:"lastname",width:180},{title:"COMPONENTE 3",dataIndex:"lastname",width:180},{title:"NÚMERO DE SESIONES REALIZADAS",dataIndex:"lastname",width:180},{title:"DÍA INICIO",dataIndex:"lastname",width:120,align:"center"},{title:"DÍA FIN",dataIndex:"lastname",width:120,align:"center"},{title:"TOTAL DE DÍAS",dataIndex:"lastname",width:120},{title:"ACTA DE COMPROMISO",dataIndex:"acta_compromiso",width:180,align:"center"},{title:"CULMINÓ EL PLAN DE ACCIÓN Y ENVIÓ CORREO",dataIndex:"envio_correo",width:180,align:"center"}],S=()=>{O.value=window.innerHeight-315},u=Q({search:""}),U=()=>{v({search:u.search})},B=()=>{u.search||v()},V=t=>{_.value.page=t,v()},v=async t=>{try{I.value=!0;const e=_.value.page===1?"":_.value,f=t?{...e,...t}:e,d=await ae({url:z.value,method:"GET",params:f});N.value=d.data,w.value=d.total,E.value=d.per_page}catch(e){console.error("Error de red:",e)}finally{I.value=!1}},Y=W(()=>t=>(_.value.page-1)*E.value+t+1);return ee(()=>{v(),window.addEventListener("resize",S),S()}),(t,e)=>{const f=o("a-date-picker"),d=o("a-button"),A=o("a-col"),G=o("a-input"),F=o("a-input-group"),$=o("a-row"),y=o("a-select"),q=o("a-table"),H=o("a-tag"),j=o("a-pagination"),X=o("a-drawer");return i(),g("div",null,[de,l($,{style:{margin:"1rem 0"}},{default:s(()=>[l(A,{xs:24,md:12,lg:18},{default:s(()=>[r("span",{onClick:e[0]||(e[0]=n=>x.value=!0)},"Agregar"),l(f,{locale:te(ne),value:h.value,"onUpdate:value":e[1]||(e[1]=n=>h.value=n),picker:"month",placeholder:"Seleccionar mes"},null,8,["locale","value"]),h.value?(i(),D(d,{key:0,class:"btn-excel",loading:k.value,type:"primary",style:{"margin-left":".6rem"}},{default:s(()=>[re,p(" DESCARGAR ")]),_:1},8,["loading"])):m("",!0)]),_:1}),l(A,{xs:24,md:12,lg:6},{default:s(()=>[l(F,{compact:""},{default:s(()=>[l(G,{value:u.search,"onUpdate:value":e[2]||(e[2]=n=>u.search=n),style:{width:"calc(100% - 80px)"},onInput:B},null,8,["value"]),l(d,{type:"primary",disabled:u.search==="",onClick:U},{default:s(()=>[p("BUSCAR")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),l(q,{bordered:"",scroll:{x:T.value,y:O.value},class:"table-users",columns:L,"data-source":N.value,pagination:!1,loading:I.value,size:"small"},{bodyCell:s(({column:n,record:ue,index:Z})=>[n.dataIndex==="idx"?(i(),g(P,{key:0},[p(M(Y.value(Z)),1)],64)):m("",!0),n.dataIndex==="tuempresa"?(i(),g(P,{key:1},[p(" cde Miraflores ")],64)):m("",!0),n.dataIndex==="acta_compromiso"?(i(),D(y,{key:2,size:t.small,value:c.value,"onUpdate:value":e[3]||(e[3]=C=>c.value=C),placeholder:"Seleccionar",style:{width:"70%"},options:R.value,onChange:t.handleChange},null,8,["size","value","options","onChange"])):m("",!0),n.dataIndex==="envio_correo"?(i(),D(y,{key:3,size:t.small,value:c.value,"onUpdate:value":e[4]||(e[4]=C=>c.value=C),placeholder:"Seleccionar",style:{width:"70%"},options:R.value,onChange:t.handleChange},null,8,["size","value","options","onChange"])):m("",!0)]),_:1},8,["scroll","data-source","loading"]),r("div",ce,[r("span",null,[l(H,{color:"blue"},{default:s(()=>[r("b",null,M(w.value),1)]),_:1}),p("Registros")]),l(j,{size:"small",total:w.value,pageSize:E.value,onChange:V,showSizeChanger:!1},null,8,["total","pageSize"])]),l(X,{open:x.value,"onUpdate:open":e[6]||(e[6]=n=>x.value=n),title:"Agregar un nuevo Plan de Acción",placement:"right",width:"650"},{default:s(()=>[l(ie,{onCloseDraw:e[5]||(e[5]=n=>t.handleCloseDrawopen(1))})]),_:1},8,["open"])])}}};export{ge as default};
