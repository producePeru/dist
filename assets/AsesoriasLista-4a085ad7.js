import{_ as ge}from"./icoexcel-a1d0882d.js";import{K as m,g as we,r as u,v as fe,H as ke,k as Se,b as g,o as i,d as s,e as c,n as U,h as Y,c as x,w as f,s as n,i as o,t,F as l,G as be,m as Ce,y as Ae,q as Re,p as De,j as ze}from"./index-ad9bd617.js";import"./es-3b071145.js";import{u as Ne}from"./selectes-d4f77625.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const M=k=>(De("data-v-a758464e"),k=k(),ze(),k),Ue={class:"header-rep"},Ye={class:"filters-dig"},Me={key:0},Fe=M(()=>c("img",{width:"20",style:{margin:"-2px 4px 0 0"},src:ge},null,-1)),Le={class:"filters"},Pe={class:"rango"},Be=M(()=>c("label",null,"Por rango de fechas",-1)),Te={key:0,class:"asesor"},$e=M(()=>c("label",null,"Por asesores",-1)),Oe={class:"paginator-asesories"},te=20,He={__name:"AsesoriasLista",setup(k){m.locale("es");const F=JSON.parse(localStorage.getItem("role")),ie=we.get("token"),oe="https://apituempresa.soporte-pnte.com/api/",se="http://127.0.0.1:8000/api/",ne=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?se:oe,S=Ne(),L=u([]),A=u(!1),R=u(!1),D=u(0),_=u({page:0}),p=u("asesorias"),le=u(1200),P=u(window.innerHeight-100),b=u("historial/advisories/filters"),C=u([]),I=u(null);S.$patch({asesores:S.asesores}),S.fetchAsesores();const de=u([{label:"Últimos 7 días",value:[m().add(-7,"d"),m()]},{label:"Últimos 14 días",value:[m().add(-14,"d"),m()]},{label:"Último mes",value:[m().add(-30,"d"),m()]},{label:"Último 3 meses",value:[m().add(-90,"d"),m()]}]),z=()=>{P.value=window.innerHeight-320};fe(()=>{window.removeEventListener("resize",z)});const w=u([]),B=u([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:130},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"S. Tipo Documento",dataIndex:"sol_tipo_doc",width:160},{title:"S. Núm. Documento",dataIndex:"sol_num_doc",width:150},{title:"S. Email",dataIndex:"sol_email",width:200},{title:"S. Celular",dataIndex:"sol_phone",width:110,align:"center"},{title:"Asesorado por",dataIndex:"asesor",width:200},{title:"Supervisor",dataIndex:"misupervisor",width:200},{title:"Región",dataIndex:"mype_region",width:140},{title:"Provincia",dataIndex:"mype_provincia",width:160},{title:"Distrito",dataIndex:"mype_distrito",width:160},{title:"Componente",dataIndex:"componente",width:180},{title:"Tema",dataIndex:"tema_componente",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),re=u([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:130},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"S. Tipo Documento",dataIndex:"sol_tipo_doc",width:160},{title:"S. Núm. Documento",dataIndex:"sol_num_doc",width:150},{title:"S. Email",dataIndex:"sol_email",width:200},{title:"S. Celular",dataIndex:"sol_phone",width:110,align:"center"},{title:"Asesorado por",dataIndex:"asesor",width:200},{title:"Supervisor",dataIndex:"misupervisor",width:200},{title:"Región",dataIndex:"mype_region",width:140},{title:"Provincia",dataIndex:"mype_provincia",width:160},{title:"Distrito",dataIndex:"mype_distrito",width:160},{title:"Detalle del trámite",dataIndex:"detalle_tramite",width:180},{title:"Sector económico",dataIndex:"sector_economico",width:180},{title:"Actividad comercial",dataIndex:"atividad_comercial",width:180},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"}]),ue=u([{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:50},{title:"Fecha",dataIndex:"ase_fecha",fixed:"left",align:"center",width:130},{title:"Solicitante Apellidos",dataIndex:"sol_apellidos",width:180},{title:"Solicitante Nombres",dataIndex:"sol_nombres",width:180},{title:"S. Tipo Documento",dataIndex:"sol_tipo_doc",width:160},{title:"S. Núm. Documento",dataIndex:"sol_num_doc",width:150},{title:"S. Email",dataIndex:"sol_email",width:200},{title:"S. Celular",dataIndex:"sol_phone",width:110,align:"center"},{title:"Asesorado por",dataIndex:"asesor",width:200},{title:"Supervisor",dataIndex:"misupervisor",width:200},{title:"Región",dataIndex:"mype_region",width:140},{title:"Provincia",dataIndex:"mype_provincia",width:160},{title:"Distrito",dataIndex:"mype_distrito",width:160},{title:"Dirección",dataIndex:"mype_direccion",width:230},{title:"Nombre empresa",dataIndex:"mype_nombre",width:180},{title:"Régimen",dataIndex:"tipo_regimen",width:80,align:"center"},{title:"Número de notaría",dataIndex:"numero_envio_notaria",width:140},{title:"Notaría",dataIndex:"notaria",width:150},{title:"Modalidad",dataIndex:"modality",width:120,align:"center"},{title:"RUC",dataIndex:"ruc",width:120,align:"center"}]),ce=async()=>{y(p.value)},pe=r=>{_.value.page=r,y()},me=r=>m(r).format("DD-MM-YYYY HH:mm"),_e=r=>({asesorias:"Asesorías",ruc10:"Formalizaciones RUC 10",ruc20:"Formalizaciones RUC 20"})[r],ve=async()=>{R.value=!0;let r="",d="";p.value=="asesorias"&&(r="download/asesories",d="asesorias.xlsx"),p.value=="ruc10"&&(r="download/formalizations-ruc10",d="formalizacionesRUC10.xlsx"),p.value=="ruc20"&&(r="download/formalizations-ruc20",d="formalizacionesRUC20.xlsx");try{const{data:v}=await be.get(`${ne}${r}`,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${ie}`},responseType:"blob"}),N=new Blob([v]),E=window.URL.createObjectURL(N),h=document.createElement("a");h.href=E,h.download=d,document.body.appendChild(h),h.click(),document.body.removeChild(h)}catch{Ce.error("Error")}finally{R.value=!1}},y=async r=>{try{A.value=!0;const d={...C.value.length>=1&&{user_id:C.value.toString()},...I.value&&{dateStart:m(I.value[0]).format("YYYY-MM-DD")},...I.value&&{dateEnd:m(I.value[1]).format("YYYY-MM-DD")},..._.value.page!=0&&{page:_.value.page}};p.value=="asesorias"&&(w.value=B.value),r=="asesorias"&&(_.value.page=0,p.value=r,w.value=B.value,b.value="historial/advisories/filters"),r=="ruc10"&&(_.value.page=0,p.value=r,w.value=re.value,b.value="historial/formalizations-10/filters"),r=="ruc20"&&(_.value.page=0,p.value=r,w.value=ue.value,b.value="historial/formalizations-20/filters");const v=await Ae({url:b.value,method:"GET",params:d});L.value=v.data,D.value=v.total}catch(d){console.error("Error de red:",d)}finally{A.value=!1}},he=ke(()=>r=>((_.value.page==0?1:_.value.page)-1)*te+r+1);return Se(()=>{y(),window.addEventListener("resize",z),z()}),(r,d)=>{const v=g("a-button"),N=g("a-range-picker"),E=g("a-select"),h=g("a-tag"),xe=g("a-table"),Ie=g("a-pagination");return i(),s(l,null,[c("div",null,[c("div",Ue,[c("h3",{class:U({hdactive:p.value=="asesorias"}),onClick:d[0]||(d[0]=a=>y("asesorias"))},"ASESORÍAS",2),c("h3",{class:U({hdactive:p.value=="ruc10"}),onClick:d[1]||(d[1]=a=>y("ruc10"))},"FORMALIZACIONES RUC 10",2),c("h3",{class:U({hdactive:p.value=="ruc20"}),onClick:d[2]||(d[2]=a=>y("ruc20"))},"FORMALIZACIONES RUC 20",2)]),c("div",Ye,[c("div",null,[Y(F)[0].id==1?(i(),s("div",Me,[x(v,{onClick:ve,loading:R.value},{default:f(()=>[Fe,o(" DESCARGAR ")]),_:1},8,["loading"])])):n("",!0)]),c("div",Le,[c("div",Pe,[Be,x(N,{value:I.value,"onUpdate:value":d[3]||(d[3]=a=>I.value=a),presets:de.value},null,8,["value","presets"])]),Y(F)[0].id==1?(i(),s("div",Te,[$e,x(E,{value:C.value,"onUpdate:value":d[4]||(d[4]=a=>C.value=a),mode:"multiple",placeholder:"Selecciona asesores","max-tag-count":"responsive",options:Y(S).asesores},null,8,["value","options"])])):n("",!0),x(v,{type:"primary",class:"btn-produce",onClick:ce},{default:f(()=>[o("BUSCAR")]),_:1})])]),x(xe,{bordered:"",scroll:{x:le.value,y:P.value},class:"table-historial",columns:w.value,"data-source":L.value,pagination:!1,loading:A.value,size:"small"},{bodyCell:f(({column:a,record:e,index:ye})=>{var T,$,O,H,V,j,G,q,Z,J,K,X,Q,W,ee,ae;return[a.dataIndex=="idx"?(i(),s(l,{key:0},[o(t(he.value(ye)),1)],64)):n("",!0),a.dataIndex=="ase_fecha"?(i(),s(l,{key:1},[o(t(me(e.created_at)),1)],64)):n("",!0),a.dataIndex=="sol_apellidos"?(i(),s(l,{key:2},[o(t(e.people.lastname)+" "+t(e.people.middlename),1)],64)):n("",!0),a.dataIndex=="sol_nombres"?(i(),s(l,{key:3},[o(t(e.people.name),1)],64)):n("",!0),a.dataIndex=="sol_tipo_doc"?(i(),s(l,{key:4},[o(t(e.people.typedocument.name),1)],64)):n("",!0),a.dataIndex=="sol_num_doc"?(i(),s(l,{key:5},[o(t(e.people.documentnumber),1)],64)):n("",!0),a.dataIndex=="sol_email"?(i(),s(l,{key:6},[o(t(e.people.email),1)],64)):n("",!0),a.dataIndex=="sol_phone"?(i(),s(l,{key:7},[o(t(e.people.phone),1)],64)):n("",!0),a.dataIndex=="asesor"?(i(),s(l,{key:8},[o(t((T=e.user)==null?void 0:T.profile.name)+" "+t(($=e.user)==null?void 0:$.profile.lastname)+" "+t((O=e.user)==null?void 0:O.profile.middlename)+" ",1)],64)):n("",!0),a.dataIndex=="misupervisor"?(i(),s(l,{key:9},[o(t((H=e.supervisor)==null?void 0:H.supervisor_user.profile.name)+" "+t((V=e.supervisor)==null?void 0:V.supervisor_user.profile.lastname)+" "+t((j=e.supervisor)==null?void 0:j.supervisor_user.profile.middlename),1)],64)):n("",!0),a.dataIndex=="mype_region"?(i(),s(l,{key:10},[o(t(e.city.name),1)],64)):n("",!0),a.dataIndex=="mype_provincia"?(i(),s(l,{key:11},[o(t(e.province.name),1)],64)):n("",!0),a.dataIndex=="mype_distrito"?(i(),s(l,{key:12},[o(t(e.district.name),1)],64)):n("",!0),a.dataIndex=="componente"?(i(),s(l,{key:13},[o(t((G=e.component)==null?void 0:G.name),1)],64)):n("",!0),a.dataIndex=="tema_componente"?(i(),s(l,{key:14},[o(t((q=e.theme)==null?void 0:q.name),1)],64)):n("",!0),a.dataIndex=="detalle_tramite"?(i(),s(l,{key:15},[o(t((Z=e.detailprocedure)==null?void 0:Z.name),1)],64)):n("",!0),a.dataIndex=="sector_economico"?(i(),s(l,{key:16},[o(t((J=e.economicsector)==null?void 0:J.name),1)],64)):n("",!0),a.dataIndex=="atividad_comercial"?(i(),s(l,{key:17},[o(t((K=e.comercialactivity)==null?void 0:K.name),1)],64)):n("",!0),a.dataIndex=="mype_direccion"?(i(),s(l,{key:18},[o(t(e==null?void 0:e.address),1)],64)):n("",!0),a.dataIndex=="mype_nombre"?(i(),s(l,{key:19},[o(t((X=e.mype)==null?void 0:X.name),1)],64)):n("",!0),a.dataIndex=="tipo_regimen"?(i(),s(l,{key:20},[o(t((Q=e.regime)==null?void 0:Q.name),1)],64)):n("",!0),a.dataIndex=="numero_envio_notaria"?(i(),s(l,{key:21},[o(t(e.numbernotary),1)],64)):n("",!0),a.dataIndex=="notaria"?(i(),s(l,{key:22},[o(t((W=e.notary)==null?void 0:W.name),1)],64)):n("",!0),a.dataIndex=="codesunarp"?(i(),s(l,{key:23},[o(t(e.codesunarp),1)],64)):n("",!0),a.dataIndex==="modality"?(i(),Re(h,{key:24,color:e.modality.name=="Presencial"?"green":"orange"},{default:f(()=>[o(t(e.modality.name),1)]),_:2},1032,["color"])):n("",!0),a.dataIndex=="ruc"?(i(),s(l,{key:25},[o(t((ee=e.mype)!=null&&ee.ruc?`20${(ae=e.mype)==null?void 0:ae.ruc}`:""),1)],64)):n("",!0)]}),_:1},8,["scroll","columns","data-source","loading"])]),c("div",Oe,[c("span",null,[x(h,{color:"blue"},{default:f(()=>[c("b",null,t(D.value),1)]),_:1}),o(t(_e(p.value)),1)]),x(Ie,{size:"small",total:D.value,pageSize:te,onChange:pe,showSizeChanger:!1,defaultCurrent:2},null,8,["total"])])],64)}}},Je=Ee(He,[["__scopeId","data-v-a758464e"]]);export{Je as default};
