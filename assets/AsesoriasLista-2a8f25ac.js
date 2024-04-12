import{_ as te}from"./icoexcel-a1d0882d.js";import{L as O,g as ae,r as c,z as ie,J as ne,k as oe,b as y,o as a,d as o,e as _,n as k,c as b,w as S,F as d,I as de,m as le,D as se,i,t as n,s as l,q as re,p as ce,j as me}from"./index-e793c6fa.js";import"./es-9951cf97.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";const ue=g=>(ce("data-v-64683e05"),g=g(),me(),g),_e={class:"header-rep"},he={class:"filters-dig"},xe=ue(()=>_("img",{width:"20",style:{"margin-right":"6px"},src:te},null,-1)),Ie={class:"paginator"},P=20,ve={__name:"AsesoriasLista",setup(g){O.locale("es");const p=JSON.parse(localStorage.getItem("profile")),T="https://apituempresa.soporte-pnte.com/api/",Y="http://127.0.0.1:8000/api/",V=window.location.hostname=="127.0.0.1"?Y:T,j=ae.get("token"),C=c([]),w=c(!1),A=c(!1),R=c(0),u=c({page:0}),h=c("asesorias");c("");const q=c(1200),D=c(window.innerHeight-100),f=()=>{D.value=window.innerHeight-315};ie(()=>{window.removeEventListener("resize",f)});const x=c([]),N=c([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Solicitante Email",dataIndex:"sol_email",width:200},{title:"Solicitante Celular",dataIndex:"sol_phone",width:160},{title:"Región",dataIndex:"mype_region",width:140},{title:"Provincia",dataIndex:"mype_provincia",width:160},{title:"Distrito",dataIndex:"mype_distrito",width:160},{title:"Componente",dataIndex:"componente",width:180},{title:"Tema",dataIndex:"tema_componente",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),G=c([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Solicitante Celular",dataIndex:"sol_phone",width:160},{title:"Solicitante Email",dataIndex:"sol_email",width:200},{title:"Región",dataIndex:"mype_region",width:130},{title:"Provincia",dataIndex:"mype_provincia",width:180},{title:"Distrito",dataIndex:"mype_distrito",width:180},{title:"Detalle del trámite",dataIndex:"detalle_tramite",width:180},{title:"Sector económico",dataIndex:"sector_economico",width:180},{title:"Actividad comercial",dataIndex:"atividad_comercial",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),H=c([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Código SUNARP",dataIndex:"codesunarp",width:140,align:"center"},{title:"Solicitante Celular",dataIndex:"sol_phone",width:160},{title:"Sector económico",dataIndex:"sector_economico",width:130},{title:"Actividad comercial",dataIndex:"atividad_comercial",width:160},{title:"Región",dataIndex:"mype_region",width:130},{title:"Provincia",dataIndex:"mype_provincia",width:180},{title:"Distrito",dataIndex:"mype_distrito",width:180},{title:"Dirección",dataIndex:"mype_direccion",width:230},{title:"Nombre empresa",dataIndex:"mype_nombre",width:180},{title:"Régimen",dataIndex:"tipo_regimen",width:80,align:"center"},{title:"Número de notaría",dataIndex:"numero_envio_notaria",width:140},{title:"Notaría",dataIndex:"notaria",width:150},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"},{title:"RUC",dataIndex:"ruc",width:100,align:"center"}]),J=s=>{u.value.page=s,I()},Z=s=>O(s).format("DD-MM-YYYY"),X=async()=>{try{const{data:s}=await de.get(`${V}download/asesories`,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${j}`},responseType:"blob"}),r=new Blob([s]),v=window.URL.createObjectURL(r),m=document.createElement("a");m.href=v,m.download="asesorias.xlsx",document.body.appendChild(m),m.click(),document.body.removeChild(m)}catch{le.error("Error")}finally{A.value=!1}},I=async s=>{try{w.value=!0;let r=`historial/advisories/${p.user_id}/${p.documentnumber}`;x.value=N.value,s=="asesorias"&&(u.value.page=0,h.value=s,x.value=N.value,r=`historial/advisories/${p.user_id}/${p.documentnumber}`),s=="ruc10"&&(u.value.page=0,h.value=s,x.value=G.value,r=`historial/formalizations-10/${p.user_id}/${p.documentnumber}`),s=="ruc20"&&(u.value.page=0,h.value=s,x.value=H.value,r=`historial/formalizations-20/${p.user_id}/${p.documentnumber}`);let v=u.value.page==0?"":u.value;const m=await se({url:r,method:"GET",params:v});C.value=m.data,R.value=m.total}catch(r){console.error("Error de red:",r)}finally{w.value=!1}},K=ne(()=>s=>((u.value.page==0?1:u.value.page)-1)*P+s+1);return oe(()=>{I(),window.addEventListener("resize",f),f()}),(s,r)=>{const v=y("a-button"),m=y("a-tag"),Q=y("a-table"),W=y("a-pagination");return a(),o(d,null,[_("div",null,[_("div",_e,[_("h3",{class:k({hdactive:h.value=="asesorias"}),onClick:r[0]||(r[0]=t=>I("asesorias"))},"ASESORÍAS",2),_("h3",{class:k({hdactive:h.value=="ruc10"}),onClick:r[1]||(r[1]=t=>I("ruc10"))},"FORMALIZACIONES RUC 10",2),_("h3",{class:k({hdactive:h.value=="ruc20"}),onClick:r[2]||(r[2]=t=>I("ruc20"))},"FORMALIZACIONES RUC 20",2)]),_("div",he,[b(v,{onClick:X,loading:A.value},{default:S(()=>[xe,i(" DESCARGAR ")]),_:1},8,["loading"])]),b(Q,{bordered:"",scroll:{x:q.value,y:D.value},class:"ant-table-striped",columns:x.value,"data-source":C.value,pagination:!1,loading:w.value,size:"small"},{bodyCell:S(({column:t,record:e,index:ee})=>{var z,E,$,L,M,U,B,F;return[t.dataIndex=="idx"?(a(),o(d,{key:0},[i(n(K.value(ee)),1)],64)):l("",!0),t.dataIndex=="ase_fecha"?(a(),o(d,{key:1},[i(n(Z(e.created_at)),1)],64)):l("",!0),t.dataIndex=="sol_apellidos"?(a(),o(d,{key:2},[i(n(e.people.lastname)+" "+n(e.people.middlename),1)],64)):l("",!0),t.dataIndex=="sol_nombres"?(a(),o(d,{key:3},[i(n(e.people.name),1)],64)):l("",!0),t.dataIndex=="sol_email"?(a(),o(d,{key:4},[i(n(e.people.email),1)],64)):l("",!0),t.dataIndex=="sol_phone"?(a(),o(d,{key:5},[i(n(e.people.phone),1)],64)):l("",!0),t.dataIndex=="mype_region"?(a(),o(d,{key:6},[i(n(e.city.name),1)],64)):l("",!0),t.dataIndex=="mype_provincia"?(a(),o(d,{key:7},[i(n(e.province.name),1)],64)):l("",!0),t.dataIndex=="mype_distrito"?(a(),o(d,{key:8},[i(n(e.district.name),1)],64)):l("",!0),t.dataIndex=="componente"?(a(),o(d,{key:9},[i(n((z=e.component)==null?void 0:z.name),1)],64)):l("",!0),t.dataIndex=="tema_componente"?(a(),o(d,{key:10},[i(n((E=e.theme)==null?void 0:E.name),1)],64)):l("",!0),t.dataIndex=="detalle_tramite"?(a(),o(d,{key:11},[i(n(($=e.detailprocedure)==null?void 0:$.name),1)],64)):l("",!0),t.dataIndex=="sector_economico"?(a(),o(d,{key:12},[i(n((L=e.economicsector)==null?void 0:L.name),1)],64)):l("",!0),t.dataIndex=="atividad_comercial"?(a(),o(d,{key:13},[i(n((M=e==null?void 0:e.comercialactivity)==null?void 0:M.name),1)],64)):l("",!0),t.dataIndex=="mype_direccion"?(a(),o(d,{key:14},[i(n(e==null?void 0:e.address),1)],64)):l("",!0),t.dataIndex=="mype_nombre"?(a(),o(d,{key:15},[i(n((U=e.mype)==null?void 0:U.name),1)],64)):l("",!0),t.dataIndex=="tipo_regimen"?(a(),o(d,{key:16},[i(n((B=e.regime)==null?void 0:B.name),1)],64)):l("",!0),t.dataIndex=="numero_envio_notaria"?(a(),o(d,{key:17},[i(n(e.numbernotary),1)],64)):l("",!0),t.dataIndex=="notaria"?(a(),o(d,{key:18},[i(n((F=e.notary)==null?void 0:F.name),1)],64)):l("",!0),t.dataIndex=="codesunarp"?(a(),o(d,{key:19},[i(n(e.codesunarp),1)],64)):l("",!0),t.dataIndex==="modality"?(a(),re(m,{key:20,color:e.modality.name=="Presencial"?"green":"orange"},{default:S(()=>[i(n(e.modality.name),1)]),_:2},1032,["color"])):l("",!0)]}),_:1},8,["scroll","columns","data-source","loading"])]),_("div",Ie,[b(W,{size:"small",total:R.value,pageSize:P,onChange:J,showSizeChanger:!1,defaultCurrent:2},null,8,["total"])])],64)}}},ke=pe(ve,[["__scopeId","data-v-64683e05"]]);export{ke as default};