import{_ as B}from"./TableComponent-a33e3419.js";import{r as a,a as A,j as F,a6 as p,b as C,o,d as f,e as w,c as E,w as V,t as b,F as z,N as h,x as v,h as I,L as H,y as S}from"./index-319b6133.js";import{S as $}from"./SaveOutlined-7f21c93f.js";import"./icoexcel-1b303edf.js";import"./es-144fca61.js";import"./MoreOutlined-da8a55d6.js";const M={class:"cde-table"},G={key:0,class:"cde-address"},X={__name:"CdesPnte",setup(L){JSON.parse(localStorage.getItem("role"));const g=a([]),m=a(0),_=a(150),s=a(!1),i=a(!1),r=a(!1);a(!1),a(null);const d=A({asesor:null,name:null,page:1});a([]);const x=[{title:"#",dataIndex:"idx",align:"center",width:70},{title:"NOMBRE CDE",dataIndex:"name",width:220},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:120},{title:"DISTRITO",dataIndex:"district",width:120},{title:"DIRECCIÓN",dataIndex:"address",width:250},{title:"TIPO",dataIndex:"cdeType",align:"center",width:200}],N=()=>{console.log("handleNew...")},T=a([{label:"CDE",value:1},{label:"CDEAI INSTITUCIONES",value:2},{label:"CDEAN NOTARÍAS",value:3}]),D=async()=>{r.value=!0;try{}catch(e){console.error("Error de red:",e)}finally{r.value=!1}},O=async e=>{d.page=e,await u()},k=async e=>{e&&(d.page=1,await u())},u=async()=>{i.value=!0;try{const e={page:d.page},t=await h({url:"config/cdes",method:"GET",params:e});g.value=t.data.data,m.value=t.data.total,_.value=t.data.per_page}catch(e){console.error("Error de red:",e)}finally{i.value=!1}},R=async(e,t)=>{try{const c={value:e};await h({url:`config/chooseCde/${t.id}`,method:"PUT",data:c})}catch{console.log("Failed to delete")}},P=async e=>{try{s.value=e.id;const t={value:e.address};await h({url:`config/addressCde/${e.id}`,method:"PUT",data:t})}catch{console.log("Failed to delete")}finally{s.value=!1}};return F(async()=>{await u()}),p("search",d),p("loading",i),p("loadingFile",r),(e,t)=>{const c=C("a-textarea"),U=C("a-select");return o(),f(z,null,[w("div",M,[E(B,{title:"CDE PNTE",new:!1,textNuevo:"NUEVO EVENTO",placeholderSearch:"Buscar",columns:x,titleSearch:"NOMBRE CDE",pageSize:_.value,nameTotal:"Solicitantes",dataSource:g.value,total:m.value,onHandleNew:N,onHandleDownloadExcel:D,onHandleSearch:k,onHandlePaginator:O},{"data-cell":V(({column:y,record:l})=>[y.dataIndex=="address"?(o(),f("div",G,[E(c,{value:l.address,"onUpdate:value":n=>l.address=n,placeholder:"Dirección del CDE","auto-size":{minRows:2,maxRows:5}},null,8,["value","onUpdate:value"]),s.value==l.id?(o(),v(I(H),{key:0})):(o(),v(I($),{key:1,class:"cde-address-save",onClick:n=>P(l)},null,8,["onClick"]))])):S("",!0),y.dataIndex=="cdeType"?(o(),v(U,{key:1,style:{width:"100%"},value:l.cdetype_id,"onUpdate:value":n=>l.cdetype_id=n,options:T.value,onChange:n=>R(n,l)},null,8,["value","onUpdate:value","options","onChange"])):S("",!0)]),_:1},8,["pageSize","dataSource","total"])]),w("pre",null,b(s.value),1)],64)}}};export{X as default};
