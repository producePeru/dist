import{c as d,A as V,r as v,a as F,b as m,o as u,p as y,w as p,e as i,d as k,F as B,x as Q,h as I,q as h,t as E,i as O,J as j,m as z,s as J,j as Y,f as W}from"./index-ff7b135e.js";import{u as $}from"./selectes-2e4334fd.js";import{Q as X}from"./vue-quill.esm-bundler-767e8455.js";/* empty css                   */import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";var K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"};const ee=K;function P(_){for(var c=1;c<arguments.length;c++){var r=arguments[c]!=null?Object(arguments[c]):{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(b){return Object.getOwnPropertyDescriptor(r,b).enumerable}))),s.forEach(function(b){te(_,b,r[b])})}return _}function te(_,c,r){return c in _?Object.defineProperty(_,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):_[c]=r,_}var H=function(c,r){var s=P({},c,r.attrs);return d(V,P({},s,{icon:ee}),null)};H.displayName="ShareAltOutlined";H.inheritAttrs=!1;const ne=H,ae={city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar un tipo"},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!1,message:"Seleccionar un tipo"},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!1,message:"Seleccionar un tipo"},address:{type:"iText",label:"Dirección",name:"address",required:!1,message:"Escribe la dirección"},name:{type:"iText",label:"Nombre de la notaría",name:"name",required:!0,message:"Ingresa el nombre de la notaría"},istestimonio:{type:"checked",label:"Incluye testimonio",name:"istestimonio",required:!0,message:"Escribe un monto"},price:{type:"iQuillEditor",label:"Gastos notariales",name:"price",required:!0,message:"Escribe la tarifa"},conditions:{type:"iQuillEditor",label:"Condiciones",name:"conditions",required:!0,message:"Escribe la tarifa"},sociointerveniente:{type:"iQuillEditor",label:"Socio o interviniente",name:"sociointerveniente",required:!0,message:"Escribe la tarifa"},biometrico:{type:"iQuillEditor",label:"Biométrico",name:"biometrico",required:!0,message:"Escribir datos del biometrico"},infocontacto:{type:"iQuillEditor",label:"Datos del contacto",name:"infocontacto",required:!0,message:"Escribe la tarifa"}};const ie={class:"grid-notary"},oe={class:"wrapper-form_btn"},re={__name:"DrawerNotaria.componente",props:["updateNotary"],emits:["closeDraw"],setup(_,{emit:c}){const r=JSON.parse(localStorage.getItem("profile")),s=$(),b=c,w=_;s.$patch({cities:s.cities}),s.fetchCities();const S={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},T=v(!1),t=F({city_id:null,province_id:null,district_id:null,address:null,name:null,istestimonio:!1,price:null,conditions:null,sociointerveniente:null,biometrico:null,infocontacto:null,user_id:r.id}),x=o=>{t.province_id=null,t.district_id=null,s.fetchProvinces(o)},N=o=>{t.district_id=null,s.fetchDistricts(o)},D=()=>{t.city_id=null,t.province_id=null,t.district_id=null,t.address=null,t.name=null,t.istestimonio=!1,t.price="</p>",t.conditions="</p>",t.sociointerveniente="</p>",t.biometrico="</p>",t.infocontacto="</p>"},A=o=>{o?(t.city_id=o.city.id,x(o.city.id),t.province_id=o.province.id,N(o.province.id),t.district_id=o.district.id,t.address=o.address,t.name=o.name,t.istestimonio=o.istestimonio!=0,t.price=o.price,t.conditions=o.conditions,t.sociointerveniente=o.sociointerveniente,t.biometrico=o.biometrico,t.infocontacto=o.infocontacto):D()},q=async()=>{let o=t;T.value=!0;try{let g=null,f=null;w.updateNotary?(g=`notary/update/${w.updateNotary.id}`,f="PATCH"):(g="notary/create",f="POST");const l=await j({url:g,method:f,data:o});D(),b("closeDraw",!0),z.success(l.message)}catch{z.error("No se pudo registrar este usuario")}finally{T.value=!1}};return(o,g)=>{const f=m("a-select"),l=m("a-form-item"),n=m("a-checkbox"),C=m("a-input"),L=m("a-input-number"),U=m("a-button"),R=m("a-form");return u(),y(R,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:q},{default:p(()=>[i("div",ie,[(u(!0),k(B,null,Q(I(ae),(e,M)=>(u(),k(B,{key:M},[e.type==="iSelect"?(u(),y(l,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[e.name=="city_id"?(u(),y(f,{key:0,value:t[e.name],"onUpdate:value":a=>t[e.name]=a,options:I(s).cities,onChange:x},null,8,["value","onUpdate:value","options"])):h("",!0),e.name=="province_id"?(u(),y(f,{key:1,value:t[e.name],"onUpdate:value":a=>t[e.name]=a,options:I(s).provinces,onChange:N},null,8,["value","onUpdate:value","options"])):h("",!0),e.name=="district_id"?(u(),y(f,{key:2,value:t[e.name],"onUpdate:value":a=>t[e.name]=a,options:I(s).districts},null,8,["value","onUpdate:value","options"])):h("",!0)]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="checked"?(u(),y(l,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[d(n,{checked:t[e.name],"onUpdate:checked":a=>t[e.name]=a},null,8,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iText"?(u(),y(l,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[d(C,{value:t[e.name],"onUpdate:value":a=>t[e.name]=a},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iNumber"?(u(),y(l,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[d(L,{value:t[e.name],"onUpdate:value":a=>t[e.name]=a},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):h("",!0),e.type==="iQuillEditor"?(u(),y(l,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:p(()=>[d(I(X),{class:"quill-editor",content:t[e.name],"onUpdate:content":a=>t[e.name]=a,options:S,contentType:"html"},null,8,["content","onUpdate:content"])]),_:2},1032,["name","label","rules"])):h("",!0)],64))),128))]),i("div",null,E(A(w.updateNotary)),1),i("div",oe,[d(U,{class:"btn-produce",type:"primary","html-type":"submit",loading:T.value},{default:p(()=>g[0]||(g[0]=[O("GUARDAR")])),_:1},8,["loading"])])]),_:1},8,["model"])}}},se=Z(re,[["__scopeId","data-v-07455822"]]);const le={class:"all-notary"},ce={class:"filters-notary"},de={class:"filters-center-produce"},ue={class:"filters-produce"},me={class:"notaries-box-adrres"},pe={class:"notaries-box-name"},_e=["innerHTML"],fe=["innerHTML"],ve=["innerHTML"],be=["innerHTML"],ge=["innerHTML"],Ie={__name:"NotariasLista",setup(_){const c=JSON.parse(localStorage.getItem("role")),r=$();r.$patch({cities:r.cities}),r.fetchCities();const s=v(window.innerHeight-100);[...c[0].id===3||c[0].id===1?[{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}]:[]],v(1200);const b=v([]),w=v(!1),S=v(!1),T=v(null),t=v(null),x=v(null),N=v(null),D=(l,n)=>{const C=l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(C)},A=()=>{s.value=window.innerHeight-270},q=l=>{console.log("open",l)},o=()=>{T.value=null,S.value=!0},g=()=>{f(),S.value=!1,t.value=null},f=async()=>{try{w.value=!0;const l={...x.value&&{name:x.value},...N.value&&{city_id:N.value}},n=await W({url:"public/notaries-filters",method:"GET",params:l});b.value=n.data}catch(l){console.error("Error de red:",l)}finally{w.value=!1}};return J(()=>{window.removeEventListener("resize",A)}),Y(()=>{window.addEventListener("resize",A),A(),f()}),(l,n)=>{const C=m("a-button"),L=m("router-link"),U=m("a-input"),R=m("a-select"),e=m("a-tag"),M=m("a-drawer");return u(),k("div",le,[n[14]||(n[14]=i("h3",{class:"title-produce"},"NOTARÍAS",-1)),i("div",ce,[i("div",de,[d(C,{style:{"margin-right":"1rem"},type:"primary",onClick:o},{default:p(()=>n[3]||(n[3]=[O("Agregar Notaría")])),_:1}),d(L,{to:"/notarias",target:"_blank"},{default:p(()=>[d(I(ne)),n[4]||(n[4]=O(" Link para compartir "))]),_:1})]),i("div",ue,[i("div",null,[n[5]||(n[5]=i("label",null,"Buscar por Nombre de Notaría",-1)),d(U,{value:x.value,"onUpdate:value":n[0]||(n[0]=a=>x.value=a)},null,8,["value"])]),i("div",null,[n[6]||(n[6]=i("label",null,"Buscar Notarías por REGIÓN",-1)),d(R,{placeholder:"Buscar por Provincia",value:N.value,"onUpdate:value":n[1]||(n[1]=a=>N.value=a),"show-search":"",options:I(r).cities,"filter-option":D},null,8,["value","options"])]),d(C,{onClick:f},{default:p(()=>n[7]||(n[7]=[O("BUSCAR")])),_:1})])]),(u(!0),k(B,null,Q(b.value,(a,G)=>(u(),k("div",{class:"notaries-wrapper notaries-box",key:G},[i("div",null,[d(e,{color:"blue",style:{"margin-bottom":"6px"}},{default:p(()=>[O(E(a.city.name),1)]),_:2},1024),i("div",me,[i("span",null,E(a.province.name),1),n[8]||(n[8]=O(" - ")),i("span",null,E(a.district.name),1),n[9]||(n[9]=O(" - ")),i("span",null,E(a.address),1)]),i("h3",pe,E(a.name),1),i("div",{class:"notaries-box-html-2",innerHTML:a.infocontacto},null,8,_e)]),i("div",null,[n[10]||(n[10]=i("h4",{class:"notaries-box-h4"},"GASTOS NOTARIALES",-1)),i("div",{class:"notaries-box-html",innerHTML:a.price},null,8,fe)]),i("div",null,[n[11]||(n[11]=i("h4",{class:"notaries-box-h4"},"CONDICIONES",-1)),i("div",{class:"notaries-box-html",innerHTML:a.conditions},null,8,ve)]),i("div",null,[n[13]||(n[13]=i("h4",{class:"notaries-box-h4"},"SOCIO O INTERVINIENTE ADICIONAL",-1)),i("div",{class:"notaries-box-html",innerHTML:a.sociointerveniente},null,8,be),i("div",null,[n[12]||(n[12]=i("h4",{class:"notaries-box-h4",style:{display:"block"}},"BIOMETRICO: ",-1)),i("span",{class:"notaries-box-html",innerHTML:a.biometrico},null,8,ge)])])]))),128)),d(M,{open:S.value,"onUpdate:open":n[2]||(n[2]=a=>S.value=a),class:"draw-notary","root-class-name":"root-class-name",title:"Datos de la notaría",width:"600",placement:"right",onAfterOpenChange:q},{default:p(()=>[d(se,{onCloseDraw:g,updateNotary:T.value},null,8,["updateNotary"])]),_:1},8,["open"])])}}};export{Ie as default};
