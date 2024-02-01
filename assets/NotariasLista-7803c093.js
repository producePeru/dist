import{z as j,r as _,f as V,a as X,D as J,n as Q,b as m,o as s,B as g,w as d,c as u,e as h,d as x,v as K,F as w,s as v,i as H,j as k,t as E,m as N,h as R,Q as W,H as Y,L as Z}from"./index-da4b24a2.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{M as ae}from"./MoreOutlined-15ce32e8.js";const te={name:{type:"iText",label:"Nombre notaría",name:"name",required:!0,message:"Ingresa el nombre de la notaría"},department:{type:"iSelect",label:"Departamento",name:"department",required:!0,message:"Seleccionar un tipo"},province:{type:"iSelect",label:"Provincia",name:"province",required:!1,message:"Seleccionar un tipo"},district:{type:"iSelect",label:"Distrito",name:"district",required:!1,message:"Seleccionar un tipo"},address:{type:"iText",label:"Dirección",name:"address",required:!1,message:"Escribe la dirección"},normal_rate:{type:"iNumber",label:"Tarífa",name:"normal_rate",required:!0,message:"Escribe la tarifa"},social_rate:{type:"iNumber",label:"Tarifa social",name:"social_rate",required:!0,message:"Escribe un monto"}};const ne={class:"grid-item"},oe={class:"wrapper-form_btn"},re={__name:"ModalNotarias",props:["isIdUpdate"],emits:["handleCloseModal","refreshTable"],setup(S,{emit:q}){const o=S,D=q;j(()=>{o.isIdUpdate?(e.name=o.isIdUpdate.name,e.department=o.isIdUpdate.department,e.province=o.isIdUpdate.province,e.district=o.isIdUpdate.district,e.address=o.isIdUpdate.address,e.normal_rate=+o.isIdUpdate.normal_rate,e.social_rate=+o.isIdUpdate.social_rate,$(o.isIdUpdate.department),z(o.isIdUpdate.province)):i()});const b=_([]),U=_([]),f=_([]),M=async()=>{try{const{data:l}=await V({url:"/departaments",method:"GET"});let t=l.map(n=>({label:n.label,value:n.id}));b.value=[...b.value,...t]}catch(l){console.log(l)}},B=(l,t)=>{e.province=null,e.district=null,U.value=[],f.value=[],$(t.value)},$=async l=>{try{const{data:t}=await V({url:`/province/${l}`,method:"GET"});let n=t.map(c=>({label:c.label,value:c.id}));U.value=[...U.value,...n]}catch(t){console.log(t)}},L=(l,t)=>{e.district=null,f.value=[],z(t.value)},z=async l=>{try{const{data:t}=await V({url:`/district/${l}`,method:"GET"});let n=t.map(c=>({label:c.label,value:c.id}));f.value=[...f.value,...n]}catch(t){console.log(t)}},T=_(!0),C=_(!1),e=X({name:null,department:null,province:null,district:null,address:null,normal_rate:null,social_rate:null,created_by:J}),r=()=>{D("handleCloseModal",!0),T.value=!1},i=()=>{e.name=null,e.department=null,e.province=null,e.district=null,e.address=null,e.normal_rate=null,e.social_rate=null},A=async()=>{if(e.social_rate>e.normal_rate)return N.warning("La tarifa social no puede ser mayor a la Tarífa original");const l=e;C.value=!0;let t,n;o.isIdUpdate?(t=`/notary/${o.isIdUpdate.id}`,n="PUT"):(t="/notary",n="POST");try{const c=await R({url:t,method:n,data:l});i(),D("refreshTable",!0),N.success(c.message),r()}catch{N.error("No se pudo registrar")}finally{C.value=!1}};return Q(()=>{M()}),(l,t)=>{const n=m("a-select"),c=m("a-form-item"),O=m("a-input"),F=m("a-input-number"),I=m("a-button"),y=m("a-form"),P=m("a-modal");return s(),g(P,{open:T.value,"onUpdate:open":t[0]||(t[0]=a=>T.value=a),title:`${S.isIdUpdate?"Actualizar":"Registrar"} notaría`,style:{top:"40px"},footer:"",onCancel:r,width:"700px"},{default:d(()=>[u(y,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:A},{default:d(()=>[h("div",ne,[(s(!0),x(w,null,K(H(te),(a,G)=>(s(),x(w,{key:G},[a.type==="iSelect"?(s(),g(c,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[a.name=="documentType"?(s(),g(n,{key:0,value:e[a.name],"onUpdate:value":p=>e[a.name]=p,options:l.typeDocuments},null,8,["value","onUpdate:value","options"])):v("",!0),a.name=="department"?(s(),g(n,{key:1,value:e[a.name],"onUpdate:value":p=>e[a.name]=p,options:b.value,onChange:B},null,8,["value","onUpdate:value","options"])):v("",!0),a.name=="province"?(s(),g(n,{key:2,value:e[a.name],"onUpdate:value":p=>e[a.name]=p,options:U.value,onChange:L},null,8,["value","onUpdate:value","options"])):v("",!0),a.name=="district"?(s(),g(n,{key:3,value:e[a.name],"onUpdate:value":p=>e[a.name]=p,options:f.value},null,8,["value","onUpdate:value","options"])):v("",!0)]),_:2},1032,["name","label","rules"])):v("",!0),a.type==="iText"?(s(),g(c,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:d(()=>[u(O,{value:e[a.name],"onUpdate:value":p=>e[a.name]=p},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):v("",!0),a.type==="iNumber"?(s(),g(c,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:d(()=>[u(F,{value:e[a.name],"onUpdate:value":p=>e[a.name]=p},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):v("",!0)],64))),128))]),h("div",oe,[u(I,{type:"primary","html-type":"submit",loading:C.value},{default:d(()=>[k(E(S.isIdUpdate?"Actualizar":"Crear"),1)]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["open","title"])}}},le=ee(re,[["__scopeId","data-v-ca353b3c"]]);const se=h("h3",null,"NOTARÍAS",-1),ie={class:"filters"},de=["onClick"],ce=h("a",null,"Eliminar",-1),ue={class:"paginator"},ve={__name:"NotariasLista",setup(S){const q=_([]),o=_(!1),D=_(1e3),b=_(!1),U=_(0),f=_(null),M=_({page:1}),B=[{title:"Nombre",dataIndex:"name",fixed:"left",width:220},{title:"Departamento",dataIndex:"departamento",width:140},{title:"Provincia",dataIndex:"provincia",width:140},{title:"Distrito",dataIndex:"distrito",width:140},{title:"Dirección",dataIndex:"address",width:200},{title:"Tarífa Normal",dataIndex:"normal_rate",align:"center",width:120},{title:"Tarífa Social",dataIndex:"social_rate",align:"center",width:120},{title:"Ahorro",dataIndex:"ahorro",align:"center",width:120},{title:"",dataIndex:"actions",align:"center",width:50}],$=r=>{r&&e()},L=r=>{M.value.page=r,e()},z=async r=>{try{const i=await R({url:`/notary/${r.id}`,method:"GET"});f.value=i.data,b.value=!0}catch(i){console.error("Error de red:",i),N.warning("Error de red")}},T=()=>{f.value=null,b.value=!0},C=async r=>{try{const i=await R({url:`/notary-delete/${r.id}`,method:"PUT"});e(),N.success(i.message)}catch(i){console.error("Error de red:",i)}},e=async()=>{try{o.value=!0;const r=await R({url:"/notaries",method:"GET",params:M.value});q.value=r.data,U.value=r.total}catch(r){console.error("Error de red:",r)}finally{o.value=!1}};return Q(e),(r,i)=>{const A=m("a-button"),l=m("a-menu-item"),t=m("a-popconfirm"),n=m("a-menu"),c=m("a-dropdown"),O=m("a-table"),F=m("a-pagination");return s(),x(w,null,[h("div",null,[se,h("div",ie,[u(A,{type:"primary",onClick:T},{default:d(()=>[k("AGREGAR")]),_:1})]),u(O,{bordered:"",scroll:{x:D.value},class:"ant-table-striped",columns:B,"data-source":q.value,pagination:!1,loading:o.value,size:"small"},{bodyCell:d(({column:I,record:y})=>{var P,a,G;return[I.dataIndex=="departamento"?(s(),x(w,{key:0},[k(E((P=y.departament)==null?void 0:P.descripcion),1)],64)):v("",!0),I.dataIndex=="provincia"?(s(),x(w,{key:1},[k(E((a=y.province)==null?void 0:a.descripcion),1)],64)):v("",!0),I.dataIndex=="distrito"?(s(),x(w,{key:2},[k(E((G=y.district)==null?void 0:G.descripcion),1)],64)):v("",!0),I.dataIndex=="ahorro"?(s(),x(w,{key:3},[k(E(y.normal_rate-y.social_rate),1)],64)):v("",!0),I.dataIndex=="actions"?(s(),g(c,{key:4,trigger:["click"]},{overlay:d(()=>[u(n,null,{default:d(()=>[u(l,null,{default:d(()=>[h("a",{onClick:p=>z(y)},"Editar",8,de)]),_:2},1024),u(l,null,{default:d(()=>[u(t,{title:"¿Deseas eliminar?",onConfirm:p=>C(y)},{icon:d(()=>[u(H(W),{style:{color:"red"}})]),default:d(()=>[ce]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:d(()=>[h("a",{class:"ant-dropdown-link",onClick:i[0]||(i[0]=Y(()=>{},["prevent"]))},[u(A,{shape:"circle",icon:Z(H(ae)),size:"small"},null,8,["icon"])])]),_:2},1024)):v("",!0)]}),_:1},8,["scroll","data-source","loading"])]),h("div",ue,[u(F,{size:"small",total:U.value,pageSize:20,onChange:L,showSizeChanger:!1},null,8,["total"])]),u(le,{open:b.value,onRefreshTable:$,onHandleCloseModal:i[1]||(i[1]=I=>b.value=!1),isIdUpdate:f.value},null,8,["open","isIdUpdate"])],64)}}};export{ve as default};
