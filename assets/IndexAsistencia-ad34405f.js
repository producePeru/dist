import{E as b,r as p,H as ve,a as se,y as ae,j as ie,b as r,o as s,v as u,w as l,e as D,d as k,F as T,z as fe,c as o,q as d,h as E,G as ye,i as x,t as W,N as ne,m as j,u as ge,g as De,U as be,x as he,a0 as we,K as Ie,I as xe}from"./index-82784c73.js";import{u as oe}from"./selectes-0fed4265.js";import"./es-291f921f.js";import{C as Ee}from"./CloudOutlined-83e86625.js";import{M as Se}from"./MoreOutlined-2fa1ab6a.js";const Ce={class:"form-fair"},Re="DD/MM/YYYY",ke={__name:"NuevoAsistencia",props:["dataRow"],emits:["closeDraw"],setup(K,{emit:U}){b.locale("es");const _=oe();_.$patch({cities:_.cities}),_.$patch({provinces:_.provinces}),_.$patch({districts:_.districts}),_.fetchCities(),_.fetchAsesores();const Y=p(!1),v=K,A=U;ve();const t=se({}),q={title:{type:"iText",label:"NOMBRE EVENTO",name:"title",required:!0,message:"Escribir el nombre de la Feria",disabled:!0,max:100},startDate:{type:"iDate",label:"FECHA INICIO",name:"startDate",required:!0,message:"Seleccionar fecha de Inicio",disabled:!1},endDate:{type:"iDate",label:"FECHA FIN",name:"endDate",required:!0,message:"Seleccionar fecha de Fin",disabled:!1},modality:{type:"iSelect",label:"MODALIDAD",name:"modality",required:!0,message:"Seleccionar una opción",disabled:!0},city_id:{type:"iSelectWrite",label:"REGIÓN",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelectWrite",label:"PROVINCIA",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"DISTRITO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"DIRECCIÓN",name:"address",required:!0,message:"Escribir dirección",disabled:!0,max:100},people_id:{type:"iSelectWrite",label:"ASESOR - RESPONSABLE",name:"people_id",required:!0,message:"Seleccionar al asesor",disabled:!0},description:{type:"iTextarea",label:"DETALLE DEL EVENTO",name:"description",required:!1,message:"Escribir detalles",disabled:!0}},L=[{label:"PRESENCIAL",value:"p"},{label:"VIRTUAL",value:"v"}],Q=a=>c=>{const y=new Date().setHours(0,0,0,0);if(a==="startDate")return c&&c.valueOf()<y;if(a==="endDate"){const m=t.startDate?new Date(t.startDate).setHours(0,0,0,0):null;return c&&(c.valueOf()<y||m&&c.valueOf()<m)}return c&&c.valueOf()<y};ae(()=>t.startDate,a=>{t.endDate&&new Date(a)>new Date(t.endDate)&&(t.endDate=null)}),ae(()=>t.endDate,a=>{t.startDate&&new Date(a)<new Date(t.startDate)&&(t.startDate=null)});const S=(a,c)=>{const y=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return c.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(y)},F=a=>{if(a=="modality")return L;if(a=="powerBy")return pertenece;if(a=="fairtype_id")return typeFair},M=a=>{t.province_id=null,t.district_id=null,_.fetchProvinces(a)},V=a=>{t.district_id=null,_.fetchDistricts(a)},h=()=>{t.title=null,t.startDate=null,t.endDate=null,t.modality=null,t.city_id=null,t.province_id=null,t.district_id=null,t.address=null,t.people_id=null,t.description=null},z=async()=>{Y.value=!0;const a={title:t.title,startDate:b(t.startDate).format("YYYY-MM-DD"),endDate:b(t.endDate).format("YYYY-MM-DD"),modality:t.modality,city_id:t.city_id,province_id:t.province_id,district_id:t.district_id,address:t.address,people_id:t.people_id,description:t.description};try{const c=v.dataRow?"PUT":"POST",y=v.dataRow?`attendance/update/${v.dataRow.id}`:"attendance/create",m=await ne({url:y,method:c,data:a});m.status==200&&(j.success(m.message),A("closeDraw"),h()),m.status==500&&(j.error(m.message),h())}catch{j.error("Se presentó un error, los valores son requeridos")}finally{Y.value=!1}},Z=a=>{const c=t[a]?t[a].trim():"";t[a]=c};function B(a){t.title=a.title,t.startDate=a.startDate?b(a.startDate,"DD/MM/YYYY"):null,t.endDate=a.endDate?b(a.endDate,"DD/MM/YYYY"):null,t.modality=a.modality,t.city_id=a.city_id,M(a.city_id),t.province_id=a.province_id,V(a.province_id),t.district_id=a.district_id,t.address=a.address,t.people_id=a.people_id,t.description=a.description}return ie(()=>{v.dataRow&&B(v.dataRow)}),ae(()=>v.dataRow,a=>{a?B(a):h()}),(a,c)=>{const y=r("a-input"),m=r("a-form-item"),C=r("a-select"),J=r("a-textarea"),P=r("a-input-number"),X=r("a-date-picker"),ee=r("a-button"),w=r("a-form");return s(),u(w,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:z},{default:l(()=>[D("div",Ce,[(s(),k(T,null,fe(q,(e,n)=>(s(),k(T,{key:n},[e.type==="iText"?(s(),u(m,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:l(()=>[o(y,{value:t[e.name],"onUpdate:value":i=>t[e.name]=i,maxlength:e.max,onBlur:i=>Z(e.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iSelect"?(s(),u(m,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[o(C,{value:t[e.name],"onUpdate:value":i=>t[e.name]=i,options:F(e.name)},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iTextarea"?(s(),u(m,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[o(J,{value:t[e.name],"onUpdate:value":i=>t[e.name]=i,rows:3,maxlength:e.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iNumber"?(s(),u(m,{key:3,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[o(P,{value:t[e.name],"onUpdate:value":i=>t[e.name]=i,min:1,max:500,style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iDate"?(s(),u(m,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[o(X,{locale:E(ye),value:t[e.name],"onUpdate:value":i=>t[e.name]=i,style:{width:"100%"},format:Re,placeholder:"día/mes/año","disabled-date":Q(e.name)},null,8,["locale","value","onUpdate:value","disabled-date"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iSelectWrite"?(s(),u(m,{key:5,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[e.name=="city_id"?(s(),u(C,{key:0,value:t[e.name],"onUpdate:value":i=>t[e.name]=i,options:E(_).cities,"show-search":"","filter-option":S,onChange:M},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="province_id"?(s(),u(C,{key:1,value:t[e.name],"onUpdate:value":i=>t[e.name]=i,options:E(_).provinces,"show-search":"","filter-option":S,onChange:V,disabled:!t.city_id},null,8,["value","onUpdate:value","options","disabled"])):d("",!0),e.name=="district_id"?(s(),u(C,{key:2,value:t[e.name],"onUpdate:value":i=>t[e.name]=i,options:E(_).districts,"show-search":"","filter-option":S,disabled:!t.province_id},null,8,["value","onUpdate:value","options","disabled"])):d("",!0),e.name=="people_id"?(s(),u(C,{key:3,value:t[e.name],"onUpdate:value":i=>t[e.name]=i,options:E(_).asesores,"show-search":"","filter-option":S},null,8,["value","onUpdate:value","options"])):d("",!0)]),_:2},1032,["name","label","rules"])):d("",!0)],64))),64))]),o(m,null,{default:l(()=>[o(ee,{type:"primary","html-type":"submit",loading:Y.value},{default:l(()=>[x(W(K.dataRow?"ACTUALIZAR":"GUARDAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};const Ae={key:1},Ne=["onClick"],Oe=["onClick"],Te={class:"paginator"},Me={__name:"IndexAsistencia",props:["idConvenio"],setup(K){b.locale("es");const U=p(b("2025","YYYY")),_=ge(),Y=JSON.parse(localStorage.getItem("role"))||[];oe(),De.get("token");const v=p(!1),A=p(null);p(!1),p(null);const t=p(0),q=p(50),L=p({page:0}),Q=p(1200),S=p([]),F=p(!1);p(!1),p(!1),p(!1),p(!1),p(null);const M=p(window.innerHeight-100),V=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"NOMBRE EVENTO",fixed:"left",dataIndex:"title",width:220},{title:"LINK",dataIndex:"slug",width:100,align:"center"},{title:"INSCRITOS",dataIndex:"attendance_list_count",width:120,align:"center"},{title:"FECHA DE INICIO",dataIndex:"startDate",align:"center",width:140},{title:"FECHA DE FIN",dataIndex:"endDate",align:"center",width:140},{title:"DÍAS RESTANTES",dataIndex:"dateDiff",align:"center",width:140},{title:"MODALIDAD",dataIndex:"modality",align:"center",width:140},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:150},{title:"DISTRITO",dataIndex:"district",width:150},{title:"ASESOR",dataIndex:"asesor",width:180},{title:"CREADO POR",dataIndex:"profile",width:170},{title:"DESCRIPCIÓN",dataIndex:"description",width:450},{title:"FECHA CREACIÓN",dataIndex:"created_at",width:140,align:"center"},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],h=se({search:""}),z=e=>Y.some(n=>e.includes(n.id)),Z=()=>{w(),v.value=!1},B=e=>{A.value=e,v.value=!0},a=()=>{A.value=null,v.value=!0},c=e=>{const n=b().startOf("day"),f=b(e).startOf("day").diff(n,"days");return f<=-1?f:f===0?1:f},y=()=>{let e={search:h.search};w(e)},m=()=>{h.search||w()},C=e=>{_.push(`/admin/asistencia/inscritos/${e.slug}`)},J=e=>{L.value.page=e,w()},P=()=>{M.value=window.innerHeight-320},X=async e=>{try{const n=await ne({url:`attendance/delete/${e.id}`,method:"DELETE"});n.status==200&&(w(),j.success(n.message))}catch(n){console.error("Error de red:",n)}},ee=be(()=>e=>L.value.page*q.value+e+1),w=async e=>{try{F.value=!0;const i=((R,$,N)=>{var H;let O=((H=R==null?void 0:R.value)==null?void 0:H.page)===0?{}:{...R.value};return $&&(O={...O,...$}),N!=null&&N.value&&(O.year=b(N.value).format("YYYY")),O})(L,e,U),{data:f}=await ne({url:"attendance/list",method:"GET",params:i});S.value=f==null?void 0:f.data,t.value=f.total,q.value=f.per_page}catch(n){console.error("Error de red:",n)}finally{F.value=!1}};return he(()=>{window.removeEventListener("resize",P)}),ie(()=>{window.addEventListener("resize",P),P(),w()}),(e,n)=>{const i=r("a-button"),f=r("a-date-picker"),R=r("a-col"),$=r("a-input"),N=r("a-input-group"),O=r("a-row"),H=r("router-link"),G=r("a-tag"),te=r("a-menu-item"),re=r("a-popconfirm"),de=r("a-menu"),ue=r("a-dropdown"),ce=r("a-table"),me=r("a-pagination"),pe=r("a-drawer");return s(),k(T,null,[D("div",null,[n[10]||(n[10]=D("h3",{class:"title-produce"},"LISTA EVENTOS UGO",-1)),o(O,{style:{margin:"1rem 0"}},{default:l(()=>[o(R,{xs:24,md:12,lg:18},{default:l(()=>[z([1,2,5])?(s(),u(i,{key:0,type:"primary",onClick:a,style:{"margin-right":".5rem"}},{default:l(()=>n[4]||(n[4]=[x("NUEVO EVENTO")])),_:1})):d("",!0),o(f,{value:U.value,"onUpdate:value":n[0]||(n[0]=g=>U.value=g),picker:"year",placeholder:"Seleccionar año",onChange:w,style:{width:"80px"}},null,8,["value"])]),_:1}),o(R,{xs:24,md:12,lg:6},{default:l(()=>[o(N,{compact:""},{default:l(()=>[o($,{value:h.search,"onUpdate:value":n[1]||(n[1]=g=>h.search=g),style:{width:"calc(100% - 80px)"},onInput:m,placeholder:"Buscar por Nombre Evento"},null,8,["value"]),o(i,{type:"primary",disabled:h.search==="",onClick:y},{default:l(()=>n[5]||(n[5]=[x("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),o(ce,{bordered:"",scroll:{x:Q.value,y:M.value},class:"table-fairs",columns:V,"data-source":S.value,pagination:!1,loading:F.value,size:"small"},{bodyCell:l(({column:g,record:I,index:_e})=>[g.dataIndex=="idx"?(s(),k(T,{key:0},[x(W(ee.value(_e)),1)],64)):d("",!0),g.dataIndex=="slug"?(s(),u(H,{key:1,to:`/asistencias/${I.slug}`,target:"_blank"},{default:l(()=>[o(E(Ee),{class:"fair-link"})]),_:2},1032,["to"])):d("",!0),g.dataIndex=="modality"?(s(),k(T,{key:2},[I.modality=="p"?(s(),u(G,{key:0,color:"blue"},{default:l(()=>n[6]||(n[6]=[x("PRESENCIAL")])),_:1})):d("",!0),I.modality=="v"?(s(),u(G,{key:1,color:"orange"},{default:l(()=>n[7]||(n[7]=[x("VIRTUAL")])),_:1})):d("",!0)],64)):d("",!0),g.dataIndex=="dateDiff"?(s(),k(T,{key:3},[c(I.endDate2)<0?(s(),u(G,{key:0,color:"red"},{default:l(()=>n[8]||(n[8]=[x(" FINALIZADO ")])),_:1})):(s(),k("span",Ae,W(c(I.endDate2)),1))],64)):d("",!0),g.dataIndex=="actions"?(s(),u(ue,{key:4,trigger:["click"]},{overlay:l(()=>[o(de,null,{default:l(()=>[o(te,null,{default:l(()=>[D("a",{onClick:le=>C(I)},"Inscritos",8,Ne)]),_:2},1024),z([1,5])?(s(),u(te,{key:0},{default:l(()=>[D("a",{onClick:le=>B(I)},"Editar",8,Oe)]),_:2},1024)):d("",!0),z([1,5])?(s(),u(te,{key:1},{default:l(()=>[o(re,{placement:"rightBottom",title:`¿Quieres eliminar ${I.title} ?`,onConfirm:le=>X(I)},{icon:l(()=>[o(E(we),{style:{color:"red"}})]),default:l(()=>[n[9]||(n[9]=D("a",null,"Eliminar",-1))]),_:2},1032,["title","onConfirm"])]),_:2},1024)):d("",!0)]),_:2},1024)]),default:l(()=>[D("a",{class:"ant-dropdown-link",onClick:n[2]||(n[2]=Ie(()=>{},["prevent"]))},[o(i,{shape:"circle",icon:xe(E(Se)),size:"small"},null,8,["icon"])])]),_:2},1024)):d("",!0)]),_:1},8,["scroll","data-source","loading"])]),D("div",Te,[D("span",null,[o(G,{color:"blue"},{default:l(()=>[D("b",null,W(t.value),1)]),_:1}),n[11]||(n[11]=x("Eventos creados"))]),o(me,{size:"small",total:t.value,pageSize:q.value,onChange:J,showSizeChanger:!1},null,8,["total","pageSize"])]),o(pe,{open:v.value,"onUpdate:open":n[3]||(n[3]=g=>v.value=g),title:A.value?"EDITAR REGISTRO":"NUEVO REGISTRO",placement:"right",width:"550"},{default:l(()=>[o(ke,{onCloseDraw:Z,dataRow:A.value},null,8,["dataRow"])]),_:1},8,["open","title"])],64)}}};export{Me as default};
