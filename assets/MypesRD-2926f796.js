import{r as t,E as z,j as F,b as i,o as a,d as _,e as s,c as m,w as o,f as L,n,F as v,L as B,G as V,m as O,k as P,g as c,y as h}from"./index-21e7904b.js";const j="/assets/icoexcel-cd314d3c.png";const G=s("h3",null,"LISTA DE MYPE",-1),J={class:"w-search"},X=s("img",{width:"20",style:{"margin-right":"6px"},src:j},null,-1),Y={class:"paginator"},q={key:0,class:"full-spin"},K={__name:"MypesRD",setup($){const E="http://127.0.0.1:8000/api/v1",r=t(!1),d=t(null),f=t([]),x=t(!1),k=t(1200);t("");const y=t(0),b=t(null),C=z(B,{style:{fontSize:"40px"},spin:!0}),I=t({page:1}),N=[{title:"RUC",dataIndex:"ruc",fixed:"left",width:120},{title:"Razón social",dataIndex:"socialReason",width:250},{title:"Rubro",dataIndex:"category",width:200},{title:"Tipo",dataIndex:"type",align:"center",width:140},{title:"Departamento",dataIndex:"department",width:140},{title:"Distrito",dataIndex:"district",width:130},{title:"Nombres y Apellidos",dataIndex:"nameComplete",width:300},{title:"DNI",dataIndex:"dniNumber",align:"center",width:120},{title:"Sexo",dataIndex:"sex",align:"center",width:130},{title:"Teléfono",dataIndex:"phone",align:"center",width:130},{title:"Email",dataIndex:"email",width:300}],D=e=>{I.value.page=e,g()},R=()=>{let e=document.createElement("input");e.type="file",e.accept=".xls, .xlsx",e.onchange=l=>{d.value=l.target.files[0],S()},e.click()},S=()=>{if(!d.value){alert("Por favor selecciona un archivo Excel.");return}r.value=!0;const e=new FormData;e.append("file",d.value),V.post(`${E}/import-excel`,e,{headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}).then(l=>{O.success(l.data.message),g()}).catch(l=>{console.error("Error al subir el archivo",l)}).finally(()=>{r.value=!1,d.value=null})},g=async()=>{try{x.value=!0;const e=await P({url:"/mype",method:"GET",params:I.value});f.value=e.data,y.value=e.meta.total}catch(e){console.error("Error de red:",e)}finally{x.value=!1}};return F(g),(e,l)=>{const U=i("a-button"),u=i("a-tag"),A=i("a-table"),M=i("a-pagination"),T=i("a-spin");return a(),_(v,null,[s("div",null,[G,s("div",J,[s("div",null,[m(U,{onClick:R},{default:o(()=>[X,c(" SUBIR EXCEL ")]),_:1})])]),m(A,{bordered:"",class:"ant-table-striped",scroll:{x:k.value,y:b.value},columns:N,"data-source":f.value,pagination:!1,loading:x.value,size:"small"},{bodyCell:o(({column:w,record:p})=>[w.dataIndex=="type"?(a(),_(v,{key:0},[p.type=="NATURAL"?(a(),h(u,{key:0,color:"success"},{default:o(()=>[c("Natural")]),_:1})):n("",!0),p.type=="JURIDICA"?(a(),h(u,{key:1,color:"error"},{default:o(()=>[c("Jurídica")]),_:1})):n("",!0)],64)):n("",!0),w.dataIndex=="sex"?(a(),_(v,{key:1},[p.sex=="MASCULINO"?(a(),h(u,{key:0,color:"blue"},{default:o(()=>[c("Masculino")]),_:1})):n("",!0),p.sex=="FEMENINO"?(a(),h(u,{key:1,color:"pink"},{default:o(()=>[c("Femenino")]),_:1})):n("",!0)],64)):n("",!0)]),_:1},8,["scroll","data-source","loading"])]),s("div",Y,[m(M,{size:"small",pageSize:50,total:y.value,onChange:D,showSizeChanger:!1},null,8,["total"])]),r.value?(a(),_("div",q,[m(T,{indicator:L(C),spinning:r.value},null,8,["indicator","spinning"])])):n("",!0)],64)}}};export{K as default};
