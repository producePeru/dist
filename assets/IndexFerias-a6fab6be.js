import{E as A,u as ie,g as re,r as o,a as de,U as ue,x as ce,j as pe,b as l,o as s,d as I,e as c,c as n,w as t,i as f,F as x,N as T,v as p,q as r,t as N,h as F,a0 as me,K as fe,I as _e,m as ge}from"./index-06bacd17.js";import{_ as ve}from"./NuevaFeria-b17f63e7.js";import{u as Ie}from"./selectes-d4bea006.js";import"./es-29a55ec9.js";import{C as ye}from"./CloudOutlined-89826ab0.js";import{M as we}from"./MoreOutlined-2ba6d8d6.js";import"./quill.snow-0097ead0.js";const he={key:1},xe=["onClick"],Ee=["onClick"],Ce={class:"paginator"},Oe={__name:"IndexFerias",props:["idConvenio"],setup(ke){A.locale("es");const L=ie(),$=JSON.parse(localStorage.getItem("role"))||[];Ie(),re.get("token");const g=o(!1),y=o(null);o(!1),o(null);const E=o(0),C=o(50),w=o({page:0}),B=o(1200),b=o([]),k=o(!1);o(!1),o(!1),o(!1),o(!1),o(null);const O=o(window.innerHeight-100),U=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"FERIA",fixed:"left",dataIndex:"title",width:200},{title:"LINK",dataIndex:"slug",width:100,align:"center"},{title:"META MYPES",dataIndex:"metaMypes",width:120,align:"center"},{title:"INSCRITOS",dataIndex:"countMypes",width:120,align:"center"},{title:"FECHA DE INICIO",dataIndex:"startDate",align:"center",width:140},{title:"FECHA DE FIN",dataIndex:"endDate",align:"center",width:140},{title:"DÍAS RESTANTES",dataIndex:"dateDiff",align:"center",width:140},{title:"MODALIDAD",dataIndex:"modality",align:"center",width:140},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:150},{title:"DISTRITO",dataIndex:"district",width:150},{title:"CREADO POR",dataIndex:"profile",width:170},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],v=de({search:""}),D=a=>$.some(e=>a.includes(e.id)),V=()=>{_(),g.value=!1},P=a=>{y.value=a,g.value=!0},H=()=>{y.value=null,g.value=!0},z=a=>{const e=A().startOf("day"),m=A(a).startOf("day").diff(e,"days");return m<=-1?m:m===0?1:m},j=()=>{let a={search:v.search};_(a)},q=()=>{v.search||_()},G=a=>{console.log("Inscriptos"),L.push(`/admin/ferias/inscritos/${a.slug}`)},K=a=>{w.value.page=a,_()},S=()=>{O.value=window.innerHeight-320},Q=async a=>{try{const e=await T({url:`agreement/delete/${a.id}`,method:"DELETE"});e.status==200&&(_(),ge.success(e.message))}catch(e){console.error("Error de red:",e)}},Y=ue(()=>a=>w.value.page*C.value+a+1),_=async a=>{try{k.value=!0;let e;e=w.value.page==0?"":w.value,e=a?{...e,...a}:e;const{data:i}=await T({url:"fair/list",method:"GET",params:e});b.value=i==null?void 0:i.data,E.value=i.total,C.value=i.per_page}catch(e){console.error("Error de red:",e)}finally{k.value=!1}};return ce(()=>{window.removeEventListener("resize",S)}),pe(()=>{window.addEventListener("resize",S),S(),_()}),(a,e)=>{const i=l("a-button"),m=l("a-col"),J=l("a-input"),X=l("a-input-group"),Z=l("a-row"),W=l("router-link"),h=l("a-tag"),R=l("a-menu-item"),ee=l("a-popconfirm"),te=l("a-menu"),ae=l("a-dropdown"),ne=l("a-table"),oe=l("a-pagination"),le=l("a-drawer");return s(),I(x,null,[c("div",null,[e[9]||(e[9]=c("h3",{class:"title-produce"},"FERIAS EMPRESARIALES",-1)),n(Z,{style:{margin:"1rem 0"}},{default:t(()=>[n(m,{xs:24,md:12,lg:18},{default:t(()=>[D([5,10,11])?(s(),p(i,{key:0,type:"primary",onClick:H,style:{"margin-right":".5rem"}},{default:t(()=>e[3]||(e[3]=[f("NUEVA FERIA")])),_:1})):r("",!0)]),_:1}),n(m,{xs:24,md:12,lg:6},{default:t(()=>[n(X,{compact:""},{default:t(()=>[n(J,{value:v.search,"onUpdate:value":e[0]||(e[0]=d=>v.search=d),style:{width:"calc(100% - 80px)"},onInput:q},null,8,["value"]),n(i,{type:"primary",disabled:v.search==="",onClick:j},{default:t(()=>e[4]||(e[4]=[f("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),n(ne,{bordered:"",scroll:{x:B.value,y:O.value},class:"table-fairs",columns:U,"data-source":b.value,pagination:!1,loading:k.value,size:"small"},{bodyCell:t(({column:d,record:u,index:se})=>[d.dataIndex=="idx"?(s(),I(x,{key:0},[f(N(Y.value(se)),1)],64)):r("",!0),d.dataIndex=="slug"?(s(),p(W,{key:1,to:`/feria/${u.slug}`,target:"_blank"},{default:t(()=>[n(F(ye),{class:"fair-link"})]),_:2},1032,["to"])):r("",!0),d.dataIndex=="modality"?(s(),I(x,{key:2},[u.modality=="p"?(s(),p(h,{key:0,color:"blue"},{default:t(()=>e[5]||(e[5]=[f("PRESENCIAL")])),_:1})):r("",!0),u.modality=="v"?(s(),p(h,{key:1,color:"orange"},{default:t(()=>e[6]||(e[6]=[f("VIRTUAL")])),_:1})):r("",!0)],64)):r("",!0),d.dataIndex=="dateDiff"?(s(),I(x,{key:3},[z(u.endDate2)<0?(s(),p(h,{key:0,color:"red"},{default:t(()=>e[7]||(e[7]=[f(" FINALIZADO ")])),_:1})):(s(),I("span",he,N(z(u.endDate2)),1))],64)):r("",!0),d.dataIndex=="actions"?(s(),p(ae,{key:4,trigger:["click"]},{overlay:t(()=>[n(te,null,{default:t(()=>[D([5,10,11])?(s(),p(R,{key:0},{default:t(()=>[c("a",{onClick:M=>P(u)},"Editar",8,xe)]),_:2},1024)):r("",!0),n(R,null,{default:t(()=>[c("a",{onClick:M=>G(u)},"Inscritos",8,Ee)]),_:2},1024),D([5,10,11])?(s(),p(R,{key:1},{default:t(()=>[n(ee,{placement:"rightBottom",title:`¿Quieres eliminar ${u.title} ?`,onConfirm:M=>Q(u)},{icon:t(()=>[n(F(me),{style:{color:"red"}})]),default:t(()=>[e[8]||(e[8]=c("a",null,"Eliminar",-1))]),_:2},1032,["title","onConfirm"])]),_:2},1024)):r("",!0)]),_:2},1024)]),default:t(()=>[c("a",{class:"ant-dropdown-link",onClick:e[1]||(e[1]=fe(()=>{},["prevent"]))},[n(i,{shape:"circle",icon:_e(F(we)),size:"small"},null,8,["icon"])])]),_:2},1024)):r("",!0)]),_:1},8,["scroll","data-source","loading"])]),c("div",Ce,[c("span",null,[n(h,{color:"blue"},{default:t(()=>[c("b",null,N(E.value),1)]),_:1}),e[10]||(e[10]=f("Ferias Empresariales"))]),n(oe,{size:"small",total:E.value,pageSize:C.value,onChange:K,showSizeChanger:!1},null,8,["total","pageSize"])]),n(le,{open:g.value,"onUpdate:open":e[2]||(e[2]=d=>g.value=d),title:y.value?"Editar Feria":"Nueva Feria",placement:"right",width:"650"},{default:t(()=>[n(ve,{onCloseDraw:V,dataRow:y.value},null,8,["dataRow"])]),_:1},8,["open","title"])],64)}}};export{Oe as default};
