import{r as x,a as Z,b as c,o as a,q as f,w as r,e as _,d as m,F as T,x as ee,h as g,s as i,c as s,t as w,i as C,B as $,m as B,y as te,k as ae,f as ne,R as ie,S as oe,J as se}from"./index-73efcc3b.js";import{u as V}from"./selectes-90989d09.js";import{Q as re}from"./quill.snow-8e1e44bc.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";import{L as ce}from"./LinkOutlined-89caf53b.js";import{M as de}from"./MoreOutlined-5632c92d.js";const ue={city_id:{type:"iSelect",label:"Departamento",name:"city_id",required:!0,message:"Seleccionar un tipo"},province_id:{type:"iSelect",label:"Provincia",name:"province_id",required:!1,message:"Seleccionar un tipo"},district_id:{type:"iSelect",label:"Distrito",name:"district_id",required:!1,message:"Seleccionar un tipo"},address:{type:"iText",label:"Dirección",name:"address",required:!1,message:"Escribe la dirección"},name:{type:"iText",label:"Nombre de la notaría",name:"name",required:!0,message:"Ingresa el nombre de la notaría"},istestimonio:{type:"checked",label:"Incluye testimonio",name:"istestimonio",required:!0,message:"Escribe un monto"},price:{type:"iQuillEditor",label:"Gastos notariales",name:"price",required:!0,message:"Escribe la tarifa"},conditions:{type:"iQuillEditor",label:"Condiciones",name:"conditions",required:!0,message:"Escribe la tarifa"},sociointerveniente:{type:"iQuillEditor",label:"Socio o interviniente",name:"sociointerveniente",required:!0,message:"Escribe la tarifa"},biometrico:{type:"iQuillEditor",label:"Biométrico",name:"biometrico",required:!0,message:"Escribir datos del biometrico"},infocontacto:{type:"iQuillEditor",label:"Datos del contacto",name:"infocontacto",required:!0,message:"Escribe la tarifa"}};const me={class:"grid-notary"},pe={class:"wrapper-form_btn"},_e={__name:"DrawerNotaria.componente",props:["updateNotary"],emits:["closeDraw"],setup(Q,{emit:D}){const L=JSON.parse(localStorage.getItem("profile")),y=V(),H=D,I=Q;y.$patch({cities:y.cities}),y.fetchCities();const k={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},v=x(!1),e=Z({city_id:null,province_id:null,district_id:null,address:null,name:null,istestimonio:!1,price:null,conditions:null,sociointerveniente:null,biometrico:null,infocontacto:null,user_id:L.id}),N=n=>{e.province_id=null,e.district_id=null,y.fetchProvinces(n)},A=n=>{e.district_id=null,y.fetchDistricts(n)},U=()=>{e.city_id=null,e.province_id=null,e.district_id=null,e.address=null,e.name=null,e.istestimonio=!1,e.price="</p>",e.conditions="</p>",e.sociointerveniente="</p>",e.biometrico="</p>",e.infocontacto="</p>"},S=n=>{n?(e.city_id=n.city.id,N(n.city.id),e.province_id=n.province.id,A(n.province.id),e.district_id=n.district.id,e.address=n.address,e.name=n.name,e.istestimonio=n.istestimonio!=0,e.price=n.price,e.conditions=n.conditions,e.sociointerveniente=n.sociointerveniente,e.biometrico=n.biometrico,e.infocontacto=n.infocontacto):U()},z=async()=>{let n=e;v.value=!0;try{let E=null,h=null;I.updateNotary?(E=`notary/update/${I.updateNotary.id}`,h="PATCH"):(E="notary/create",h="POST");const b=await $({url:E,method:h,data:n});U(),H("closeDraw",!0),B.success(b.message)}catch{B.error("No se pudo registrar este usuario")}finally{v.value=!1}};return(n,E)=>{const h=c("a-select"),b=c("a-form-item"),q=c("a-checkbox"),o=c("a-input"),d=c("a-input-number"),O=c("a-button"),R=c("a-form");return a(),f(R,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:z},{default:r(()=>[_("div",me,[(a(!0),m(T,null,ee(g(ue),(t,M)=>(a(),m(T,{key:M},[t.type==="iSelect"?(a(),f(b,{key:0,class:"item-max",name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:r(()=>[t.name=="city_id"?(a(),f(h,{key:0,value:e[t.name],"onUpdate:value":u=>e[t.name]=u,options:g(y).cities,onChange:N},null,8,["value","onUpdate:value","options"])):i("",!0),t.name=="province_id"?(a(),f(h,{key:1,value:e[t.name],"onUpdate:value":u=>e[t.name]=u,options:g(y).provinces,onChange:A},null,8,["value","onUpdate:value","options"])):i("",!0),t.name=="district_id"?(a(),f(h,{key:2,value:e[t.name],"onUpdate:value":u=>e[t.name]=u,options:g(y).districts},null,8,["value","onUpdate:value","options"])):i("",!0)]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="checked"?(a(),f(b,{key:1,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:r(()=>[s(q,{checked:e[t.name],"onUpdate:checked":u=>e[t.name]=u},null,8,["checked","onUpdate:checked"])]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iText"?(a(),f(b,{key:2,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:r(()=>[s(o,{value:e[t.name],"onUpdate:value":u=>e[t.name]=u},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iNumber"?(a(),f(b,{key:3,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:r(()=>[s(d,{value:e[t.name],"onUpdate:value":u=>e[t.name]=u},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):i("",!0),t.type==="iQuillEditor"?(a(),f(b,{key:4,name:t.name,label:t.label,rules:[{required:t.required,message:t.message}]},{default:r(()=>[s(g(re),{class:"quill-editor",content:e[t.name],"onUpdate:content":u=>e[t.name]=u,options:k,contentType:"html"},null,8,["content","onUpdate:content"])]),_:2},1032,["name","label","rules"])):i("",!0)],64))),128))]),_("div",null,w(S(I.updateNotary)),1),_("div",pe,[s(O,{class:"btn-produce",type:"primary","html-type":"submit",loading:v.value},{default:r(()=>[C("GUARDAR")]),_:1},8,["loading"])])]),_:1},8,["model"])}}},ye=le(_e,[["__scopeId","data-v-07455822"]]);const fe=_("h3",null,"NOTARÍAS",-1),ve={class:"filters-notary"},he={key:5,style:{"font-size":"18px","font-weight":"700"}},be={key:6,ref:"divRef",class:"gastos"},ge=["innerHTML"],xe={key:7},we=["innerHTML"],Ie=["innerHTML"],ke=["innerHTML"],Ne=["innerHTML"],Ee=["onClick"],Ce=_("a",null,"Eliminar",-1),Ae={__name:"NotariasLista",setup(Q){const D=V();D.$patch({cities:D.cities}),D.fetchCities();const L=x(window.innerHeight-100),y=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"REGIÓN",dataIndex:"departamento",fixed:"left",align:"center",width:120},{title:"PROVINCIA",fixed:"left",dataIndex:"province",align:"center",width:140},{title:"DISTRITO",fixed:"left",dataIndex:"distrite",width:140},{title:"DIRECCION",fixed:"left",dataIndex:"address",align:"center",width:140},{title:"NOTARIA",fixed:"left",dataIndex:"namenotary",align:"center",width:180},{title:"GASTOS NOTARIALES",dataIndex:"pricex",align:"center",width:280},{title:"CONDICIONES",dataIndex:"pricedescriptionx",align:"center",width:260},{title:"SOCIO O INTERVINIENTE ADICIONAL",dataIndex:"socio",align:"center",width:200},{title:"BIOMETRICO",dataIndex:"bio",align:"center",width:180},{title:"DATOS DE CONTACTO",dataIndex:"contact",align:"center",width:260},{title:"",dataIndex:"actions",align:"center",width:50,fixed:"right"}],H=x(1200),I=x([]),k=x(!1),v=x(!1),e=x(null),N=x(null),A=async()=>{try{k.value=!0;const o=await $({url:`notary/list/${N.value}`,method:"GET"});I.value=o.data}catch(o){console.error("Error de red:",o)}finally{k.value=!1}},U=(o,d)=>{const O=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return d.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(O)},S=()=>{L.value=window.innerHeight-260},z=o=>{console.log("open",o)},n=()=>{e.value=null,v.value=!0},E=()=>{q(),v.value=!1,N.value=null},h=async o=>{try{const d=await $({url:`notary/delete/${o.id}`,method:"DELETE"});d&&(q(),B.success(d.message))}catch(d){console.error("Error de red:",d)}},b=o=>{e.value=o,v.value=!0},q=async()=>{try{k.value=!0;const o=await ne({url:"notary/list",method:"GET"});I.value=o.data}catch(o){console.error("Error de red:",o)}finally{k.value=!1}};return te(()=>{window.removeEventListener("resize",S)}),ae(()=>{window.addEventListener("resize",S),S(),q()}),(o,d)=>{const O=c("a-button"),R=c("router-link"),t=c("a-select"),M=c("a-menu-item"),u=c("a-popconfirm"),J=c("a-menu"),X=c("a-dropdown"),Y=c("a-table"),j=c("a-drawer");return a(),m("div",null,[fe,_("div",ve,[_("div",null,[s(O,{style:{"margin-right":"1rem"},class:"btn-produce",type:"primary",onClick:n},{default:r(()=>[C("AGREGAR")]),_:1}),s(R,{to:"/notarias",target:"_blank"},{default:r(()=>[s(g(ce))]),_:1})]),_("div",null,[s(t,{placeholder:"Buscar por Provincia",style:{width:"200px"},value:N.value,"onUpdate:value":d[0]||(d[0]=l=>N.value=l),"show-search":"",options:g(D).cities,"filter-option":U,onChange:A},null,8,["value","options"])])]),s(Y,{bordered:"",scroll:{x:H.value,y:L.value},class:"ant-table-striped",columns:y,"data-source":I.value,pagination:!1,loading:k.value,size:"small"},{bodyCell:r(({column:l,record:p,index:K})=>{var G,P,F;return[l.dataIndex=="idx"?(a(),m(T,{key:0},[C(w(K+1),1)],64)):i("",!0),l.dataIndex=="lastName"?(a(),m(T,{key:1},[C(w(p.last_name)+" "+w(p.middle_name),1)],64)):i("",!0),l.dataIndex=="departamento"?(a(),m(T,{key:2},[C(w((G=p.city)==null?void 0:G.name),1)],64)):i("",!0),l.dataIndex=="province"?(a(),m(T,{key:3},[C(w((P=p.province)==null?void 0:P.name),1)],64)):i("",!0),l.dataIndex=="distrite"?(a(),m(T,{key:4},[C(w((F=p.district)==null?void 0:F.name),1)],64)):i("",!0),l.dataIndex=="namenotary"?(a(),m("h4",he,w(p.name),1)):i("",!0),l.dataIndex=="pricex"?(a(),m("div",be,[_("div",{innerHTML:p.price,class:"style-price"},null,8,ge)],512)):i("",!0),l.dataIndex=="pricedescriptionx"?(a(),m("div",xe,[_("div",{innerHTML:p.conditions,class:"style-conditions"},null,8,we)])):i("",!0),l.dataIndex=="socio"?(a(),m("div",{key:8,innerHTML:p.sociointerveniente,class:"style-contact"},null,8,Ie)):i("",!0),l.dataIndex=="bio"?(a(),m("div",{key:9,innerHTML:p.biometrico,class:"style-contact"},null,8,ke)):i("",!0),l.dataIndex=="contact"?(a(),m("div",{key:10,innerHTML:p.infocontacto,class:"style-contact"},null,8,Ne)):i("",!0),l.dataIndex=="actions"?(a(),f(X,{key:11,trigger:["click"]},{overlay:r(()=>[s(J,null,{default:r(()=>[s(M,null,{default:r(()=>[_("a",{onClick:W=>b(p)},"Editar",8,Ee)]),_:2},1024),s(M,null,{default:r(()=>[s(u,{title:"¿Seguro de eliminar?",onConfirm:W=>h(p)},{icon:r(()=>[s(g(ie),{style:{color:"red"}})]),default:r(()=>[Ce]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:r(()=>[_("a",{class:"ant-dropdown-link",onClick:d[1]||(d[1]=se(()=>{},["prevent"]))},[s(O,{shape:"circle",icon:oe(g(de)),size:"small"},null,8,["icon"])])]),_:2},1024)):i("",!0)]}),_:1},8,["scroll","data-source","loading"]),s(j,{open:v.value,"onUpdate:open":d[2]||(d[2]=l=>v.value=l),class:"draw-notary","root-class-name":"root-class-name",title:"Datos de la notaría",placement:"right",onAfterOpenChange:z},{default:r(()=>[s(ye,{onCloseDraw:E,updateNotary:e.value},null,8,["updateNotary"])]),_:1},8,["open"])])}}};export{Ae as default};
