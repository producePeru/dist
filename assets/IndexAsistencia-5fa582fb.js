import{B as S,r as _,E as ce,a as K,v as j,j as X,b as o,o as s,p as m,w as l,e as h,d as k,F as U,x as me,c as i,q as u,h as A,D as pe,i as x,t as V,J as Q,m as J,u as _e,g as ve,T as fe,s as ye,I as ge,G as De}from"./index-ec966cf5.js";import{u as ee}from"./selectes-f1fde8a6.js";import"./es-daf45493.js";import{C as be}from"./CloudOutlined-269a4467.js";import{M as he}from"./MoreOutlined-18637622.js";import"./quill-blot-formatter-e18a970d.js";const we={class:"form-fair"},Ie="DD/MM/YYYY",xe={__name:"NuevoAsistencia",props:["dataRow"],emits:["closeDraw"],setup(B,{emit:P}){S.locale("es");const v=ee();v.$patch({cities:v.cities}),v.$patch({provinces:v.provinces}),v.$patch({districts:v.districts}),v.fetchCities(),v.fetchAsesores();const g=_(!1),f=B,T=P;ce();const e=K({}),N={title:{type:"iText",label:"NOMBRE EVENTO",name:"title",required:!0,message:"Escribir el nombre de la Feria",disabled:!0,max:100},startDate:{type:"iDate",label:"FECHA INICIO",name:"startDate",required:!0,message:"Seleccionar fecha de Inicio",disabled:!1},endDate:{type:"iDate",label:"FECHA FIN",name:"endDate",required:!0,message:"Seleccionar fecha de Fin",disabled:!1},modality:{type:"iSelect",label:"MODALIDAD",name:"modality",required:!0,message:"Seleccionar una opción",disabled:!0},city_id:{type:"iSelectWrite",label:"REGIÓN",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelectWrite",label:"PROVINCIA",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"DISTRITO",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"DIRECCIÓN",name:"address",required:!0,message:"Escribir dirección",disabled:!0,max:100},people_id:{type:"iSelectWrite",label:"ASESOR - RESPONSABLE",name:"people_id",required:!0,message:"Seleccionar al asesor",disabled:!0},description:{type:"iTextarea",label:"DETALLE DEL EVENTO",name:"description",required:!1,message:"Escribir detalles",disabled:!0}},$=[{label:"PRESENCIAL",value:"p"},{label:"VIRTUAL",value:"v"}],L=a=>p=>{const y=new Date().setHours(0,0,0,0);if(a==="startDate")return p&&p.valueOf()<y;if(a==="endDate"){const c=e.startDate?new Date(e.startDate).setHours(0,0,0,0):null;return p&&(p.valueOf()<y||c&&p.valueOf()<c)}return p&&p.valueOf()<y};j(()=>e.startDate,a=>{e.endDate&&new Date(a)>new Date(e.endDate)&&(e.endDate=null)}),j(()=>e.endDate,a=>{e.startDate&&new Date(a)<new Date(e.startDate)&&(e.startDate=null)});const w=(a,p)=>{const y=a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return p.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(y)},Y=a=>{if(a=="modality")return $;if(a=="powerBy")return pertenece;if(a=="fairtype_id")return typeFair},F=a=>{e.province_id=null,e.district_id=null,v.fetchProvinces(a)},I=a=>{e.district_id=null,v.fetchDistricts(a)},O=()=>{e.title=null,e.startDate=null,e.endDate=null,e.modality=null,e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.people_id=null,e.description=null},H=async()=>{g.value=!0;const a={title:e.title,startDate:S(e.startDate).format("YYYY-MM-DD"),endDate:S(e.endDate).format("YYYY-MM-DD"),modality:e.modality,city_id:e.city_id,province_id:e.province_id,district_id:e.district_id,address:e.address,people_id:e.people_id,description:e.description};try{const p=f.dataRow?"PUT":"POST",y=f.dataRow?`attendance/update/${f.dataRow.id}`:"attendance/create",c=await Q({url:y,method:p,data:a});c.status==200&&(J.success(c.message),T("closeDraw"),O()),c.status==500&&(J.error(c.message),O())}catch{J.error("Se presentó un error, los valores son requeridos")}finally{g.value=!1}},G=a=>{const p=e[a]?e[a].trim():"";e[a]=p};function M(a){e.title=a.title,e.startDate=a.startDate?S(a.startDate,"DD/MM/YYYY"):null,e.endDate=a.endDate?S(a.endDate,"DD/MM/YYYY"):null,e.modality=a.modality,e.city_id=a.city_id,F(a.city_id),e.province_id=a.province_id,I(a.province_id),e.district_id=a.district_id,e.address=a.address,e.people_id=a.people_id,e.description=a.description}return X(()=>{f.dataRow&&M(f.dataRow)}),j(()=>f.dataRow,a=>{a?M(a):O()}),(a,p)=>{const y=o("a-input"),c=o("a-form-item"),E=o("a-select"),q=o("a-textarea"),W=o("a-input-number"),R=o("a-date-picker"),d=o("a-button"),n=o("a-form");return s(),m(n,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:H},{default:l(()=>[h("div",we,[(s(),k(U,null,me(N,(t,D)=>(s(),k(U,{key:D},[t.type==="iText"?(s(),m(c,{key:0,name:t.name,label:t.label,rules:[{required:t.required,message:t.message,max:t.max}]},{default:l(()=>[i(y,{value:e[t.name],"onUpdate:value":r=>e[t.name]=r,maxlength:t.max,onBlur:r=>G(t.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules"])):u("",!0),t.type==="iSelect"?(s(),m(c,{key:1,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[i(E,{value:e[t.name],"onUpdate:value":r=>e[t.name]=r,options:Y(t.name)},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name","label","rules"])):u("",!0),t.type==="iTextarea"?(s(),m(c,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[i(q,{value:e[t.name],"onUpdate:value":r=>e[t.name]=r,rows:3,maxlength:t.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):u("",!0),t.type==="iNumber"?(s(),m(c,{key:3,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[i(W,{value:e[t.name],"onUpdate:value":r=>e[t.name]=r,min:1,max:500,style:{width:"100%"}},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):u("",!0),t.type==="iDate"?(s(),m(c,{key:4,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[i(R,{locale:A(pe),value:e[t.name],"onUpdate:value":r=>e[t.name]=r,style:{width:"100%"},format:Ie,placeholder:"día/mes/año","disabled-date":L(t.name)},null,8,["locale","value","onUpdate:value","disabled-date"])]),_:2},1032,["name","label","rules"])):u("",!0),t.type==="iSelectWrite"?(s(),m(c,{key:5,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:l(()=>[t.name=="city_id"?(s(),m(E,{key:0,value:e[t.name],"onUpdate:value":r=>e[t.name]=r,options:A(v).cities,"show-search":"","filter-option":w,onChange:F},null,8,["value","onUpdate:value","options"])):u("",!0),t.name=="province_id"?(s(),m(E,{key:1,value:e[t.name],"onUpdate:value":r=>e[t.name]=r,options:A(v).provinces,"show-search":"","filter-option":w,onChange:I,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),t.name=="district_id"?(s(),m(E,{key:2,value:e[t.name],"onUpdate:value":r=>e[t.name]=r,options:A(v).districts,"show-search":"","filter-option":w,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):u("",!0),t.name=="people_id"?(s(),m(E,{key:3,value:e[t.name],"onUpdate:value":r=>e[t.name]=r,options:A(v).asesores,"show-search":"","filter-option":w},null,8,["value","onUpdate:value","options"])):u("",!0)]),_:2},1032,["name","label","rules"])):u("",!0)],64))),64))]),i(c,null,{default:l(()=>[i(d,{type:"primary","html-type":"submit",loading:g.value},{default:l(()=>[x(V(B.dataRow?"ACTUALIZAR":"GUARDAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};const Se={key:1},Ee=["onClick"],Re=["onClick"],Ce={class:"paginator"},qe={__name:"IndexAsistencia",props:["idConvenio"],setup(B){S.locale("es");const P=_e(),v=JSON.parse(localStorage.getItem("role"))||[];ee(),ve.get("token");const g=_(!1),f=_(null);_(!1),_(null);const T=_(0),e=_(50),N=_({page:0}),$=_(1200),L=_([]),w=_(!1);_(!1),_(!1),_(!1),_(!1),_(null);const Y=_(window.innerHeight-100),F=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:70},{title:"NOMBRE EVENTO",fixed:"left",dataIndex:"title",width:220},{title:"LINK",dataIndex:"slug",width:100,align:"center"},{title:"INSCRITOS",dataIndex:"attendance_list_count",width:120,align:"center"},{title:"FECHA DE INICIO",dataIndex:"startDate",align:"center",width:140},{title:"FECHA DE FIN",dataIndex:"endDate",align:"center",width:140},{title:"DÍAS RESTANTES",dataIndex:"dateDiff",align:"center",width:140},{title:"MODALIDAD",dataIndex:"modality",align:"center",width:140},{title:"REGIÓN",dataIndex:"city",width:120},{title:"PROVINCIA",dataIndex:"province",width:150},{title:"DISTRITO",dataIndex:"district",width:150},{title:"ASESOR",dataIndex:"asesor",width:180},{title:"CREADO POR",dataIndex:"profile",width:170},{title:"DESCRIPCIÓN",dataIndex:"description",width:450},{title:"",dataIndex:"actions",width:60,align:"center",fixed:"right"}],I=K({search:""}),O=d=>v.some(n=>d.includes(n.id)),H=()=>{R(),g.value=!1},G=d=>{f.value=d,g.value=!0},M=()=>{f.value=null,g.value=!0},a=d=>{const n=S().startOf("day"),D=S(d).startOf("day").diff(n,"days");return D<=-1?D:D===0?1:D},p=()=>{let d={search:I.search};R(d)},y=()=>{I.search||R()},c=d=>{P.push(`/admin/asistencia/inscritos/${d.slug}`)},E=d=>{N.value.page=d,R()},q=()=>{Y.value=window.innerHeight-320},W=fe(()=>d=>N.value.page*e.value+d+1),R=async d=>{try{w.value=!0;let n;n=N.value.page==0?"":N.value,n=d?{...n,...d}:n;const{data:t}=await Q({url:"attendance/list",method:"GET",params:n});L.value=t==null?void 0:t.data,T.value=t.total,e.value=t.per_page}catch(n){console.error("Error de red:",n)}finally{w.value=!1}};return ye(()=>{window.removeEventListener("resize",q)}),X(()=>{window.addEventListener("resize",q),q(),R()}),(d,n)=>{const t=o("a-button"),D=o("a-col"),r=o("a-input"),te=o("a-input-group"),ae=o("a-row"),ne=o("router-link"),z=o("a-tag"),Z=o("a-menu-item"),le=o("a-menu"),se=o("a-dropdown"),ie=o("a-table"),oe=o("a-pagination"),re=o("a-drawer");return s(),k(U,null,[h("div",null,[n[8]||(n[8]=h("h3",{class:"title-produce"},"LISTA EVENTOS UGO",-1)),i(ae,{style:{margin:"1rem 0"}},{default:l(()=>[i(D,{xs:24,md:12,lg:18},{default:l(()=>[O([1,2,5])?(s(),m(t,{key:0,type:"primary",onClick:M,style:{"margin-right":".5rem"}},{default:l(()=>n[3]||(n[3]=[x("NUEVO EVENTO")])),_:1})):u("",!0)]),_:1}),i(D,{xs:24,md:12,lg:6},{default:l(()=>[i(te,{compact:""},{default:l(()=>[i(r,{value:I.search,"onUpdate:value":n[0]||(n[0]=b=>I.search=b),style:{width:"calc(100% - 80px)"},onInput:y},null,8,["value"]),i(t,{type:"primary",disabled:I.search==="",onClick:p},{default:l(()=>n[4]||(n[4]=[x("BUSCAR")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),i(ie,{bordered:"",scroll:{x:$.value,y:Y.value},class:"table-fairs",columns:F,"data-source":L.value,pagination:!1,loading:w.value,size:"small"},{bodyCell:l(({column:b,record:C,index:de})=>[b.dataIndex=="idx"?(s(),k(U,{key:0},[x(V(W.value(de)),1)],64)):u("",!0),b.dataIndex=="slug"?(s(),m(ne,{key:1,to:`/asistencias/${C.slug}`,target:"_blank"},{default:l(()=>[i(A(be),{class:"fair-link"})]),_:2},1032,["to"])):u("",!0),b.dataIndex=="modality"?(s(),k(U,{key:2},[C.modality=="p"?(s(),m(z,{key:0,color:"blue"},{default:l(()=>n[5]||(n[5]=[x("PRESENCIAL")])),_:1})):u("",!0),C.modality=="v"?(s(),m(z,{key:1,color:"orange"},{default:l(()=>n[6]||(n[6]=[x("VIRTUAL")])),_:1})):u("",!0)],64)):u("",!0),b.dataIndex=="dateDiff"?(s(),k(U,{key:3},[a(C.endDate2)<0?(s(),m(z,{key:0,color:"red"},{default:l(()=>n[7]||(n[7]=[x(" FINALIZADO ")])),_:1})):(s(),k("span",Se,V(a(C.endDate2)),1))],64)):u("",!0),b.dataIndex=="actions"?(s(),m(se,{key:4,trigger:["click"]},{overlay:l(()=>[i(le,null,{default:l(()=>[O([1,5])?(s(),m(Z,{key:0},{default:l(()=>[h("a",{onClick:ue=>G(C)},"Editar",8,Ee)]),_:2},1024)):u("",!0),i(Z,null,{default:l(()=>[h("a",{onClick:ue=>c(C)},"Inscritos",8,Re)]),_:2},1024)]),_:2},1024)]),default:l(()=>[h("a",{class:"ant-dropdown-link",onClick:n[1]||(n[1]=ge(()=>{},["prevent"]))},[i(t,{shape:"circle",icon:De(A(he)),size:"small"},null,8,["icon"])])]),_:2},1024)):u("",!0)]),_:1},8,["scroll","data-source","loading"])]),h("div",Ce,[h("span",null,[i(z,{color:"blue"},{default:l(()=>[h("b",null,V(T.value),1)]),_:1}),n[9]||(n[9]=x("Eventos creados"))]),i(oe,{size:"small",total:T.value,pageSize:e.value,onChange:E,showSizeChanger:!1},null,8,["total","pageSize"])]),i(re,{open:g.value,"onUpdate:open":n[2]||(n[2]=b=>g.value=b),title:f.value?"Editar Registro":"Nuevo Registro",placement:"right",width:"550"},{default:l(()=>[i(xe,{onCloseDraw:H,dataRow:f.value},null,8,["dataRow"])]),_:1},8,["open","title"])],64)}}};export{qe as default};
