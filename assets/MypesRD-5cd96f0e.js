import{_ as O}from"./icoexcel-a1d0882d.js";import{r as t,g as P,z as q,T as H,k as J,b as s,o as a,d as h,e as l,c as m,w as o,h as X,s as n,F as y,a0 as Y,I as $,D as j,i as r,q as _}from"./index-e793c6fa.js";const G=l("h3",null,"LISTA DE MYPE",-1),K={class:"w-search"},Q=l("img",{width:"20",style:{"margin-right":"6px"},src:O},null,-1),W={class:"paginator"},Z={key:0,class:"full-spin"},ne={__name:"MypesRD",setup(ee){const C="https://apituempresa.soporte-pnte.com/api/",b="http://127.0.0.1:8000/api/",D=window.location.hostname=="127.0.0.1"?b:C,i=t(!1),c=t(null),N=P.get("token"),v=t([]),g=t(!1),z=t(1200);t("");const w=t(0),I=t(window.innerHeight-100),f=()=>{I.value=window.innerHeight-300};q(()=>{window.removeEventListener("resize",f)});const A=H(Y,{style:{fontSize:"40px"},spin:!0}),k=t({page:1}),R=[{title:"RUC",dataIndex:"ruc",fixed:"left",width:120},{title:"Razón social",dataIndex:"socialReason",fixed:"left",width:250},{title:"Rubro",dataIndex:"category",width:200},{title:"Tipo",dataIndex:"type",align:"center",width:140},{title:"Departamento",dataIndex:"department",width:140},{title:"Distrito",dataIndex:"district",width:130},{title:"Nombres y Apellidos",dataIndex:"nameComplete",width:300},{title:"DNI",dataIndex:"dniNumber",align:"center",width:120},{title:"Sexo",dataIndex:"sex",align:"center",width:130},{title:"Teléfono",dataIndex:"phone",align:"center",width:130},{title:"Email",dataIndex:"email",width:300}],S=e=>{k.value.page=e,x()},U=()=>{let e=document.createElement("input");e.type="file",e.accept=".xls, .xlsx",e.onchange=d=>{c.value=d.target.files[0],B()},e.click()},B=()=>{if(!c.value){alert("Por favor selecciona un archivo Excel.");return}i.value=!0;const e=new FormData;e.append("file",c.value),$.post(`${D}/import-excel`,e,{headers:{Accept:"application/json","Content-Type":"multipart/form-data",Authorization:`Bearer ${N}`}}).then(()=>{T()}).catch(d=>{console.error("Error al subir el archivo",d)}).finally(()=>{c.value=null})},T=()=>setInterval(()=>v.value.length<1?x():i.value=!1,6e3),x=async()=>{try{g.value=!0;const e=await j({url:"/mype",method:"GET",params:k.value});v.value=e.data,w.value=e.meta.total}catch(e){console.error("Error de red:",e)}finally{g.value=!1}};return J(()=>{x(),window.addEventListener("resize",f),f()}),(e,d)=>{const L=s("a-button"),u=s("a-tag"),M=s("a-table"),F=s("a-pagination"),V=s("a-spin");return a(),h(y,null,[l("div",null,[G,l("div",K,[l("div",null,[m(L,{onClick:U,loading:i.value},{default:o(()=>[Q,r(" SUBIR EXCEL ")]),_:1},8,["loading"])])]),m(M,{bordered:"",class:"ant-table-striped",sticky:"",scroll:{x:z.value,y:I.value},columns:R,"data-source":v.value,pagination:!1,loading:g.value,size:"small"},{bodyCell:o(({column:E,record:p})=>[E.dataIndex=="type"?(a(),h(y,{key:0},[p.type=="NATURAL"?(a(),_(u,{key:0,color:"success"},{default:o(()=>[r("Natural")]),_:1})):n("",!0),p.type=="JURIDICA"?(a(),_(u,{key:1,color:"error"},{default:o(()=>[r("Jurídica")]),_:1})):n("",!0)],64)):n("",!0),E.dataIndex=="sex"?(a(),h(y,{key:1},[p.sex=="MASCULINO"?(a(),_(u,{key:0,color:"blue"},{default:o(()=>[r("Masculino")]),_:1})):n("",!0),p.sex=="FEMENINO"?(a(),_(u,{key:1,color:"pink"},{default:o(()=>[r("Femenino")]),_:1})):n("",!0)],64)):n("",!0)]),_:1},8,["scroll","data-source","loading"])]),l("div",W,[m(F,{size:"small",pageSize:50,total:w.value,onChange:S,showSizeChanger:!1},null,8,["total"])]),i.value?(a(),h("div",Z,[m(V,{indicator:X(A),spinning:i.value},null,8,["indicator","spinning"])])):n("",!0)],64)}}};export{ne as default};
