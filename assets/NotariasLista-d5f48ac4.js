import{c,A as V,r as v,a as F,b as u,o as d,q as b,w as p,e as a,d as k,F as z,x as Q,h as I,s as g,t as E,i as O,z as j,m as H,v as J,k as Y,f as W}from"./index-a89c85d3.js";import{u as $}from"./selectes-f79054a0.js";import{Q as X}from"./quill.snow-01d70998.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";var K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"};const ee=K;function P(_){for(var l=1;l<arguments.length;l++){var i=arguments[l]!=null?Object(arguments[l]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(h){return Object.getOwnPropertyDescriptor(i,h).enumerable}))),r.forEach(function(h){te(_,h,i[h])})}return _}function te(_,l,i){return l in _?Object.defineProperty(_,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):_[l]=i,_}var B=function(l,i){var r=P({},l,i.attrs);return c(V,P({},r,{icon:ee}),null)};B.displayName="ShareAltOutlined";B.inheritAttrs=!1;const ne=B,ae={city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar un tipo"},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!1,message:"Seleccionar un tipo"},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!1,message:"Seleccionar un tipo"},address:{type:"iText",label:"Dirección",name:"address",required:!1,message:"Escribe la dirección"},name:{type:"iText",label:"Nombre de la notaría",name:"name",required:!0,message:"Ingresa el nombre de la notaría"},istestimonio:{type:"checked",label:"Incluye testimonio",name:"istestimonio",required:!0,message:"Escribe un monto"},price:{type:"iQuillEditor",label:"Gastos notariales",name:"price",required:!0,message:"Escribe la tarifa"},conditions:{type:"iQuillEditor",label:"Condiciones",name:"conditions",required:!0,message:"Escribe la tarifa"},sociointerveniente:{type:"iQuillEditor",label:"Socio o interviniente",name:"sociointerveniente",required:!0,message:"Escribe la tarifa"},biometrico:{type:"iQuillEditor",label:"Biométrico",name:"biometrico",required:!0,message:"Escribir datos del biometrico"},infocontacto:{type:"iQuillEditor",label:"Datos del contacto",name:"infocontacto",required:!0,message:"Escribe la tarifa"}};const oe={class:"grid-notary"},ie={class:"wrapper-form_btn"},re={__name:"DrawerNotaria.componente",props:["updateNotary"],emits:["closeDraw"],setup(_,{emit:l}){const i=JSON.parse(localStorage.getItem("profile")),r=$(),h=l,w=_;r.$patch({cities:r.cities}),r.fetchCities();const S={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},T=v(!1),t=F({city_id:null,province_id:null,district_id:null,address:null,name:null,istestimonio:!1,price:null,conditions:null,sociointerveniente:null,biometrico:null,infocontacto:null,user_id:i.id}),y=o=>{t.province_id=null,t.district_id=null,r.fetchProvinces(o)},x=o=>{t.district_id=null,r.fetchDistricts(o)},D=()=>{t.city_id=null,t.province_id=null,t.district_id=null,t.address=null,t.name=null,t.istestimonio=!1,t.price="</p>",t.conditions="</p>",t.sociointerveniente="</p>",t.biometrico="</p>",t.infocontacto="</p>"},A=o=>{o?(t.city_id=o.city.id,y(o.city.id),t.province_id=o.province.id,x(o.province.id),t.district_id=o.district.id,t.address=o.address,t.name=o.name,t.istestimonio=o.istestimonio!=0,t.price=o.price,t.conditions=o.conditions,t.sociointerveniente=o.sociointerveniente,t.biometrico=o.biometrico,t.infocontacto=o.infocontacto):D()},q=async()=>{let o=t;T.value=!0;try{let N=null,f=null;w.updateNotary?(N=`notary/update/${w.updateNotary.id}`,f="PATCH"):(N="notary/create",f="POST");const s=await j({url:N,method:f,data:o});D(),h("closeDraw",!0),H.success(s.message)}catch{H.error("No se pudo registrar este usuario")}finally{T.value=!1}};return(o,N)=>{const f=u("a-select"),s=u("a-form-item"),m=u("a-checkbox"),C=u("a-input"),L=u("a-input-number"),U=u("a-button"),R=u("a-form");return d(),b(R,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:q},{default:p(()=>[a("div",oe,[(d(!0),k(z,null,Q(I(ae),(e,M)=>(d(),k(z,{key:M},[e.type==="iSelect"?(d(),b(s,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[e.name=="city_id"?(d(),b(f,{key:0,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:I(r).cities,onChange:y},null,8,["value","onUpdate:value","options"])):g("",!0),e.name=="province_id"?(d(),b(f,{key:1,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:I(r).provinces,onChange:x},null,8,["value","onUpdate:value","options"])):g("",!0),e.name=="district_id"?(d(),b(f,{key:2,value:t[e.name],"onUpdate:value":n=>t[e.name]=n,options:I(r).districts},null,8,["value","onUpdate:value","options"])):g("",!0)]),_:2},1032,["name","label","rules"])):g("",!0),e.type==="checked"?(d(),b(s,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[c(m,{checked:t[e.name],"onUpdate:checked":n=>t[e.name]=n},null,8,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):g("",!0),e.type==="iText"?(d(),b(s,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[c(C,{value:t[e.name],"onUpdate:value":n=>t[e.name]=n},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):g("",!0),e.type==="iNumber"?(d(),b(s,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[c(L,{value:t[e.name],"onUpdate:value":n=>t[e.name]=n},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):g("",!0),e.type==="iQuillEditor"?(d(),b(s,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[c(I(X),{class:"quill-editor",content:t[e.name],"onUpdate:content":n=>t[e.name]=n,options:S,contentType:"html"},null,8,["content","onUpdate:content"])]),_:2},1032,["name","label","rules"])):g("",!0)],64))),128))]),a("div",null,E(A(w.updateNotary)),1),a("div",ie,[c(U,{class:"btn-produce",type:"primary","html-type":"submit",loading:T.value},{default:p(()=>[O("GUARDAR")]),_:1},8,["loading"])])]),_:1},8,["model"])}}},se=Z(re,[["__scopeId","data-v-07455822"]]);const le={class:"all-notary"},ce=a("h3",{class:"title-produce"},"NOTARÍAS",-1),de={class:"filters-notary"},ue={class:"filters-center-produce"},me={class:"filters-produce"},pe=a("label",null,"Buscar por Nombre de Notaría",-1),_e=a("label",null,"Buscar Notarías por REGIÓN",-1),fe={class:"notaries-box-adrres"},ve={class:"notaries-box-name"},he=["innerHTML"],be=a("h4",{class:"notaries-box-h4"},"GASTOS NOTARIALES",-1),ge=["innerHTML"],ye=a("h4",{class:"notaries-box-h4"},"CONDICIONES",-1),xe=["innerHTML"],Ne=a("h4",{class:"notaries-box-h4"},"SOCIO O INTERVINIENTE ADICIONAL",-1),Oe=["innerHTML"],Ie=a("h4",{class:"notaries-box-h4",style:{display:"block"}},"BIOMETRICO: ",-1),we=["innerHTML"],Ae={__name:"NotariasLista",setup(_){const l=JSON.parse(localStorage.getItem("role")),i=$();i.$patch({cities:i.cities}),i.fetchCities();const r=v(window.innerHeight-100);[...l[0].id===3||l[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],v(1200);const h=v([]),w=v(!1),S=v(!1),T=v(null),t=v(null),y=v(null),x=v(null),D=(s,m)=>{const C=s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return m.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(C)},A=()=>{r.value=window.innerHeight-270},q=s=>{console.log("open",s)},o=()=>{T.value=null,S.value=!0},N=()=>{f(),S.value=!1,t.value=null},f=async()=>{try{w.value=!0;const s={...y.value&&{name:y.value},...x.value&&{city_id:x.value}},m=await W({url:"public/notaries-filters",method:"GET",params:s});h.value=m.data}catch(s){console.error("Error de red:",s)}finally{w.value=!1}};return J(()=>{window.removeEventListener("resize",A)}),Y(()=>{window.addEventListener("resize",A),A(),f()}),(s,m)=>{const C=u("a-button"),L=u("router-link"),U=u("a-input"),R=u("a-select"),e=u("a-tag"),M=u("a-drawer");return d(),k("div",le,[ce,a("div",de,[a("div",ue,[c(C,{style:{"margin-right":"1rem"},type:"primary",onClick:o},{default:p(()=>[O("Agregar Notaría")]),_:1}),c(L,{to:"/notarias",target:"_blank"},{default:p(()=>[c(I(ne)),O(" Link para compartir ")]),_:1})]),a("div",me,[a("div",null,[pe,c(U,{value:y.value,"onUpdate:value":m[0]||(m[0]=n=>y.value=n)},null,8,["value"])]),a("div",null,[_e,c(R,{placeholder:"Buscar por Provincia",value:x.value,"onUpdate:value":m[1]||(m[1]=n=>x.value=n),"show-search":"",options:I(i).cities,"filter-option":D},null,8,["value","options"])]),c(C,{onClick:f},{default:p(()=>[O("BUSCAR")]),_:1})])]),(d(!0),k(z,null,Q(h.value,(n,G)=>(d(),k("div",{class:"notaries-wrapper notaries-box",key:G},[a("div",null,[c(e,{color:"blue",style:{"margin-bottom":"6px"}},{default:p(()=>[O(E(n.city.name),1)]),_:2},1024),a("div",fe,[a("span",null,E(n.province.name),1),O(" - "),a("span",null,E(n.district.name),1),O(" - "),a("span",null,E(n.address),1)]),a("h3",ve,E(n.name),1),a("div",{class:"notaries-box-html-2",innerHTML:n.infocontacto},null,8,he)]),a("div",null,[be,a("div",{class:"notaries-box-html",innerHTML:n.price},null,8,ge)]),a("div",null,[ye,a("div",{class:"notaries-box-html",innerHTML:n.conditions},null,8,xe)]),a("div",null,[Ne,a("div",{class:"notaries-box-html",innerHTML:n.sociointerveniente},null,8,Oe),a("div",null,[Ie,a("span",{class:"notaries-box-html",innerHTML:n.biometrico},null,8,we)])])]))),128)),c(M,{open:S.value,"onUpdate:open":m[2]||(m[2]=n=>S.value=n),class:"draw-notary","root-class-name":"root-class-name",title:"Datos de la notaría",width:"600",placement:"right",onAfterOpenChange:q},{default:p(()=>[c(se,{onCloseDraw:N,updateNotary:T.value},null,8,["updateNotary"])]),_:1},8,["open"])])}}};export{Ae as default};