import{_ as Y}from"./icoexcel-a1d0882d.js";import{a as J,r as o,L as K,E as Q,l as W,d as w,o as v,e as E,f as c,q as N,c as S,w as f,F as L,m as T,M as ee,h as ae,j as _,t as m,v as I,s as U,p as te,k as ie}from"./index-a16b7625.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";const le=y=>(te("data-v-81a6fac2"),y=y(),ie(),y),ne={class:"header-rep"},de={class:"filters-dig"},se=le(()=>c("img",{width:"20",style:{"margin-right":"6px"},src:Y},null,-1)),re={class:"paginator"},F=20,ce={__name:"AsesoriasLista",setup(y){const M="https://apituempresa.soporte-pnte.com/api/v1",O="http://127.0.0.1:8000/api/v1",V=window.location.hostname=="127.0.0.1"?O:M,P=J.get("token"),b=o([]),h=o(!1),A=o(!1),C=o(0),i=o({page:0}),t=o("asesorias"),s=o(""),G=o(1200),D=o(window.innerHeight-100),z=()=>{D.value=window.innerHeight-315};K(()=>{window.removeEventListener("resize",z)});const r=o([]),R=o([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Asesor",dataIndex:"reg_nombres",width:200},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Solicitante género",dataIndex:"sol_genero",width:140,align:"center"},{title:"Solicitante discapacidad",dataIndex:"sol_discapacidad",width:176,align:"center"},{title:"Solicitante telf.",dataIndex:"sol_telefono",width:120,align:"center"},{title:"Solicitante correo",dataIndex:"sol_correo",width:180},{title:"Supervisor",dataIndex:"misupervisor",width:200},{title:"Región",dataIndex:"mype_region",width:140},{title:"Provincia",dataIndex:"mype_provincia",width:160},{title:"Distrito",dataIndex:"mype_distrito",width:160},{title:"Componente",dataIndex:"componente",width:200},{title:"Tema",dataIndex:"tema_componente",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),$=o([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Asesor",dataIndex:"reg_nombres",width:200},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Solicitante género",dataIndex:"sol_genero",width:140,align:"center"},{title:"Solicitante discapacidad",dataIndex:"sol_discapacidad",width:176,align:"center"},{title:"Solicitante telf.",dataIndex:"sol_telefono",width:120,align:"center"},{title:"Solicitante correo",dataIndex:"sol_correo",width:180},{title:"Supervisor",dataIndex:"misupervisor",width:180},{title:"Región",dataIndex:"mype_region",width:130},{title:"Provincia",dataIndex:"mype_provincia",width:180},{title:"Distrito",dataIndex:"mype_distrito",width:180},{title:"Detalle del trámite",dataIndex:"detalle_tramite",width:180},{title:"Sector económico",dataIndex:"sector_economico",width:180},{title:"Actividad comercial",dataIndex:"atividad_comercial",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),B=o([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:100},{title:"Asesor",dataIndex:"reg_nombres",width:180},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"Solicitante género",dataIndex:"sol_genero",width:140,align:"center"},{title:"Solicitante discapacidad",dataIndex:"sol_discapacidad",width:176,align:"center"},{title:"Solicitante telf.",dataIndex:"sol_telefono",width:120,align:"center"},{title:"Solicitante correo",dataIndex:"sol_correo",width:180},{title:"Supervisor",dataIndex:"misupervisor",width:180},{title:"Tipo de formalización",dataIndex:"tipo_formalizacion",width:130},{title:"Sector económico",dataIndex:"sector_economico",width:130},{title:"Actividad comercial",dataIndex:"atividad_comercial",width:160},{title:"Región",dataIndex:"mype_region",width:130},{title:"Provincia",dataIndex:"mype_provincia",width:180},{title:"Distrito",dataIndex:"mype_distrito",width:180},{title:"Dirección",dataIndex:"mype_direccion",width:230},{title:"Nombre empresa",dataIndex:"mype_nombre",width:180},{title:"Régimen",dataIndex:"tipo_regimen",width:80,align:"center"},{title:"Número de notaría",dataIndex:"numero_envio_notaria",width:140},{title:"Notaría",dataIndex:"notaria",width:150},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"},{title:"RUC",dataIndex:"ruc",width:100,align:"center"}]),H=a=>{i.value.page=a,x()},j=async()=>{h.value=!0;let a=null;t.value=="ruc20"&&(i.value.page=0,t.value="ruc20",r.value=B.value,a=`/formalizations-20?search=${s.value}`,s.value==""&&(a="/formalizations-20")),t.value=="ruc10"&&(i.value.page=0,t.value="ruc10",r.value=$.value,a=`/formalizations-10?search=${s.value}`,s.value==""&&(a="/formalizations-10")),t.value=="asesorias"&&(i.value.page=0,t.value="asesorias",r.value=R.value,a=`/asesorias?search=${s.value}`,s.value==""&&(a="/asesorias"));let e=i.value.page==0?"":i.value;const l=await T({url:a,method:"GET",params:e});b.value=l.data,C.value=l.total,h.value=!1},q=async()=>{A.value=!0;const a={};let e="",l="";t.value=="asesorias"&&(e="download-asesorias",l="asesorias.xlsx"),t.value=="ruc10"&&(e="download-formalizations-10",l="formalizacionesRUC10.xlsx"),t.value=="ruc20"&&(e="download-formalizations-20",l="formalizacionesRUC20.xlsx");try{const{data:u}=await ee.post(`${V}/${e}`,a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${P}`},responseType:"blob"}),g=new Blob([u]),k=window.URL.createObjectURL(g),p=document.createElement("a");p.href=k,p.download=l,document.body.appendChild(p),p.click(),document.body.removeChild(p)}catch{ae.error("Error")}finally{A.value=!1}},x=async a=>{try{h.value=!0;let e="/asesorias";r.value=R.value,a=="asesorias"&&(i.value.page=0,t.value=a,r.value=R.value,e="/asesorias"),a=="ruc10"&&(i.value.page=0,t.value=a,r.value=$.value,e="/formalizations-10"),a=="ruc20"&&(i.value.page=0,t.value=a,r.value=B.value,e="/formalizations-20");let l=i.value.page==0?"":i.value;const u=await T({url:e,method:"GET",params:l});b.value=u.data,C.value=u.total}catch(e){console.error("Error de red:",e)}finally{h.value=!1}},Z=Q(()=>a=>((i.value.page==0?1:i.value.page)-1)*F+a+1);return W(()=>{x(),window.addEventListener("resize",z),z()}),(a,e)=>{const l=w("a-button"),u=w("a-input-search"),g=w("a-tag"),k=w("a-table"),p=w("a-pagination");return v(),E(L,null,[c("div",null,[c("div",ne,[c("h3",{class:N({hdactive:t.value=="asesorias"}),onClick:e[0]||(e[0]=n=>x("asesorias"))},"ASESORÍAS",2),c("h3",{class:N({hdactive:t.value=="ruc10"}),onClick:e[1]||(e[1]=n=>x("ruc10"))},"FORMALIZACIONES RUC 10",2),c("h3",{class:N({hdactive:t.value=="ruc20"}),onClick:e[2]||(e[2]=n=>x("ruc20"))},"FORMALIZACIONES RUC 20",2)]),c("div",de,[S(l,{onClick:q,loading:A.value},{default:f(()=>[se,_(" DESCARGAR ")]),_:1},8,["loading"]),S(u,{class:"asesorias-search",value:s.value,"onUpdate:value":e[3]||(e[3]=n=>s.value=n),placeholder:"","enter-button":"Buscar",onSearch:j},null,8,["value"])]),S(k,{bordered:"",scroll:{x:G.value,y:D.value},class:"ant-table-striped",columns:r.value,"data-source":b.value,pagination:!1,loading:h.value,size:"small"},{bodyCell:f(({column:n,record:d,index:X})=>[n.dataIndex=="idx"?(v(),E(L,{key:0},[_(m(Z.value(X)),1)],64)):I("",!0),n.dataIndex=="solName"?(v(),E(L,{key:1},[_(m(d.person.last_name)+" "+m(d.person.middle_name)+", "+m(d.person.name),1)],64)):I("",!0),n.dataIndex==="sol_discapacidad"?(v(),U(g,{key:2,color:d.sol_discapacidad=="NO"?"blue":"pink"},{default:f(()=>[_(m(d.sol_discapacidad),1)]),_:2},1032,["color"])):I("",!0),n.dataIndex==="sol_genero"?(v(),U(g,{key:3,class:"uppercase",color:d.sol_genero=="H"?"default":"error"},{default:f(()=>[_(m(d.sol_genero),1)]),_:2},1032,["color"])):I("",!0),n.dataIndex==="modality"?(v(),U(g,{key:4,color:d.modalidad=="VIRTUAL"?"orange":"green"},{default:f(()=>[_(m(d.modalidad),1)]),_:2},1032,["color"])):I("",!0)]),_:1},8,["scroll","columns","data-source","loading"])]),c("div",re,[S(p,{size:"small",total:C.value,pageSize:F,onChange:H,showSizeChanger:!1,defaultCurrent:2},null,8,["total"])])],64)}}},ve=oe(ce,[["__scopeId","data-v-81a6fac2"]]);export{ve as default};
