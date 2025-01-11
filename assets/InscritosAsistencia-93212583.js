import{_ as Q}from"./icoexcel-1b303edf.js";import{B as W,E as Z,u as ee,g as te,r as n,a as ae,T as ne,s as oe,j as le,b as o,o as A,d as D,e as i,c as a,w as l,i as g,F as k,J as se,h as re,a3 as ie,t as x,q as de,z as ce}from"./index-a2d62d20.js";import"./es-77902b19.js";const ue={class:"title-produce"},pe={style:{color:"var(--secondary)"}},me={class:"paginator"},he={__name:"InscritosAsistencia",props:["idConvenio"],setup(ge){W.locale("es");const I=Z();ee();const N=JSON.parse(localStorage.getItem("role"))||[],T=te.get("token"),U="https://apituempresa.soporte-pnte.com/api/",L="http://127.0.0.1:8000/api/",z=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?L:U;N.some(t=>t.id===10||t.id===11||t.id===5);const b=n(""),E=n(!1);n(null);const _=n(!1);n(null);const v=n(0),w=n(50),p=n({page:0}),B=n(1200),y=n([]),f=n(!1);n(!1);const C=n(window.innerHeight-100),M=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"REGISTRADO",dataIndex:"created_at",fixed:"left",width:120,align:"center"},{title:"APELLIDOS",dataIndex:"lastname",fixed:"left",width:160},{title:"NOMBRES ",dataIndex:"name",width:160,fixed:"left"},{title:"TIPO DOCUMENTO",dataIndex:"typedocument",width:100,align:"center"},{title:"NÚMERO DE DOCUMENTO",dataIndex:"documentnumber",align:"center",width:140},{title:"CELULAR",dataIndex:"phone",width:150,align:"center"},{title:"CORREO",dataIndex:"email",align:"center",width:140},{title:"GÉNERO",dataIndex:"gender",align:"center",width:100},{title:"DISCAPACIDAD",dataIndex:"sick",align:"center",width:120},{title:"RUC",dataIndex:"ruc",align:"center",width:120},{title:"SECTOR ECONÓMICO",dataIndex:"economicsector",align:"center",width:140},{title:"ACTIVIDAD COMERCIAL",dataIndex:"comercialActivity",align:"center",width:200}],c=ae({search:""}),R=()=>{let t={search:c.search};m(t)},F=()=>{c.search||m()},G=t=>{p.value.page=t,m()},h=()=>{C.value=window.innerHeight-320},P=ne(()=>t=>p.value.page*w.value+t+1),m=async t=>{try{f.value=!0;let e;e=p.value.page==0?"":p.value,e=t?{...e,...t}:e;const d=I.params.slug,s=await se({url:`attendance/applicants/${d}`,method:"GET",params:e});b.value=s.nameEvent;const r=s.data;y.value=r==null?void 0:r.data,v.value=r.total,w.value=r.per_page}catch(e){console.error("Error de red:",e)}finally{f.value=!1}},V=async()=>{_.value=!0;try{const t=I.params.slug,e=await ce({url:`${z}download/attendance/${t}`,method:"GET",responseType:"blob",headers:{Authorization:`Bearer ${T}`}}),d=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a"),r=`${t}.xlsx`;s.href=d,s.setAttribute("download",r),document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(d),document.body.removeChild(s)}catch(t){console.error("Error downloading file:",t)}finally{_.value=!1}};return oe(()=>{window.removeEventListener("resize",h)}),le(()=>{window.addEventListener("resize",h),h(),m()}),(t,e)=>{const d=o("router-link"),s=o("a-breadcrumb-item"),r=o("a-breadcrumb"),O=o("a-button"),S=o("a-col"),$=o("a-input"),j=o("a-input-group"),q=o("a-row"),H=o("a-table"),J=o("a-tag"),X=o("a-pagination"),Y=o("a-drawer");return A(),D(k,null,[i("div",null,[a(r,null,{default:l(()=>[a(s,null,{default:l(()=>[a(d,{to:"/admin/asistencia/lista"},{default:l(()=>[a(re(ie)),e[2]||(e[2]=i("span",{class:"fs-13"},"Atrás",-1))]),_:1})]),_:1}),a(s,null,{default:l(()=>[i("h3",ue,[e[3]||(e[3]=g("REGISTRO DE ASISTENCIA - ")),i("span",pe,x(b.value),1)])]),_:1})]),_:1}),a(q,{style:{margin:"1rem 0"}},{default:l(()=>[a(S,{xs:24,md:12,lg:18},{default:l(()=>[e[5]||(e[5]=i("span",null,null,-1)),a(O,{class:"btn-excel",onClick:V,loading:_.value,type:"primary"},{default:l(()=>e[4]||(e[4]=[i("img",{width:"20",style:{margin:"-2px 0 0 0"},src:Q},null,-1)])),_:1},8,["loading"])]),_:1}),a(S,{xs:24,md:12,lg:6},{default:l(()=>[a(j,{compact:""},{default:l(()=>[a($,{onPressEnter:R,value:c.search,"onUpdate:value":e[0]||(e[0]=u=>c.search=u),style:{width:"calc(100% - 80px)"},onInput:F},null,8,["value"]),a(O,{type:"primary",disabled:c.search==="",onClick:R},{default:l(()=>e[6]||(e[6]=[g("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),a(H,{bordered:"",scroll:{x:B.value,y:C.value},class:"table-agreements-ugse",columns:M,"data-source":y.value,pagination:!1,loading:f.value,size:"small"},{bodyCell:l(({column:u,record:_e,index:K})=>[u.dataIndex=="idx"?(A(),D(k,{key:0},[g(x(P.value(K)),1)],64)):de("",!0)]),_:1},8,["scroll","data-source","loading"])]),i("div",me,[i("span",null,[a(J,{color:"blue"},{default:l(()=>[i("b",null,x(v.value),1)]),_:1}),e[7]||(e[7]=g("Inscritos"))]),a(X,{size:"small",total:v.value,pageSize:w.value,onChange:G,showSizeChanger:!1},null,8,["total","pageSize"])]),a(Y,{open:E.value,"onUpdate:open":e[1]||(e[1]=u=>E.value=u),title:"Nueva Feria",placement:"right",width:"650"},null,8,["open"])],64)}}};export{he as default};
