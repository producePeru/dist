import{_ as Pe}from"./calendar-e0a6119a.js";import{g as xe,r as P,a as se,b as _,o as s,p as g,w as c,e as u,d as O,F as H,x as oe,c as b,q as p,y as ne,h as w,i as L,t as Z,P as De,f as K,m as z,z as qe,B as le,D as Ie,u as ce,E as me,G as Re,j as Ce,k as Ae,L as Fe}from"./index-a2d62d20.js";import{F as Ne}from"./FormalizacionFooter-17a0f553.js";import{u as pe}from"./selectes-1d895f89.js";import{C as de}from"./CloudUploadOutlined-996cb49e.js";import"./es-77902b19.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./EnvironmentOutlined-2420b18b.js";const Oe={class:"fair-form"},Te={key:7,class:"ellipsis"},ke={key:0},we=["src"],Le={key:9},ue=1,Ue=3,Me={__name:"RegistroPaso1",emits:["nextStep"],setup(J,{emit:T}){const M=T,o=pe();o.$patch({cities:o.cities}),o.$patch({provinces:o.provinces}),o.$patch({districts:o.districts}),o.fetchCities();const F=xe.get("token"),l="https://apituempresa.soporte-pnte.com/api/",t="http://127.0.0.1:8000/api/",V=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?t:l,G=P(!1),A=P(!1),a=se({}),Y=[{label:"COMERCIO",value:"comercio"},{label:"SERVICIOS",value:"servicios"},{label:"INDUSTRIA",value:"industria"}],D=[{label:"SI",value:"si"},{label:"NO",value:"no"}],f=[{label:"ALIMENTOS Y BEBIDAS",value:1},{label:"ARTESANÍA",value:2},{label:"COSMÉTICA ORGÁNICA",value:3},{label:"CUERO CALZADO",value:4},{label:"DECORACIÓN",value:5},{label:"GASTRONOMÍA",value:6},{label:"JOYERÍA",value:7},{label:"MADERA",value:8},{label:"METALMECÁNICA",value:9},{label:"TEXTIL CONFECCIONES",value:10}],q=n=>{if(n==="economicSector")return Y;if(n==="isGremio"||n==="pointSale")return D},y=P({ruc:{type:"iSearch",label:"NÚMERO DE RUC",name:"ruc",required:!0,message:"Escribir RUC",disabled:!0,max:11},space1:{type:"space1"},space2:{type:"space2"},comercialName:{type:"iText",label:"NOMBRE COMERCIAL",name:"comercialName",required:!0,message:"Escribir el nombre comercial",disabled:!0,max:100},socialReason:{type:"iText",label:"RAZÓN SOCIAL",name:"socialReason",required:!0,message:"Escribir la razón social",disabled:!0,max:100},space3:{type:"space3"},city_id:{type:"iSelectWrite",label:"REGIÓN DE LA EMPRESA",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelectWrite",label:"PROVINCIA DE LA EMPRESA",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelectWrite",label:"DISTRITO DE LA EMPRESA",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"DIRECCIÓN DE LA EMPRESA",name:"address",required:!0,message:"Escribir la dirección",disabled:!0,max:100},businessSector:{type:"iSelectWrite",label:"RUBRO DEL NEGOCIO",name:"businessSector",required:!0,message:"Seleccionar rubro del negocio",disabled:!0,max:11},space8:{type:"space8"},percentageOwnPlan:{type:"iNumber",label:"Porcentaje de su producción en Planta propia",name:"percentageOwnPlan",required:!0,message:"Porcentaje de producción",disabled:!0,max:100},percentageMaquila:{type:"iNumber",label:"Porcentaje de su Producción en MAQUILA",name:"percentageMaquila",required:!0,message:"Porcentaje de producción",disabled:!0,max:100},capacityProdMounth:{type:"iNumber",label:"Capacidad de Producción Mensual",name:"capacityProdMounth",required:!0,message:"Capacidad de Producción Mensual",disabled:!0,max:2e6},isGremio:{type:"iSelect",label:"¿Pertenece a algún gremio empresarial?",name:"isGremio",required:!0,message:"Pertenece a un gremio empresarial",disabled:!0},nameGremio:{type:"iText",label:"NOMBRE GREMIO",name:"nameGremio",required:!1,message:"Escribir nombre del gremio",disabled:!1,display:"none"},space6:{type:"space6"},pointSale:{type:"iSelect",label:"¿Cuenta con puntos de venta?",name:"pointSale",required:!0,message:"Cuenta con puntos de venta",disabled:!0},numberPointSale:{type:"iNumber",label:"¿Cuántos puntos de venta?",name:"numberPointSale",required:!1,message:"¿Cuántos puntos de venta?",disabled:!1,max:1e3,display:"none"},space4:{type:"space4"},web:{type:"iLink",label:"LINK DE PÁGINA WEB",name:"web",required:!1,message:"Link de Página web",disabled:!0,isLink:!0},facebook:{type:"iLink",label:"LINK DE PÁGINA DE FACEBOOK",name:"facebook",required:!1,message:"Link de Página de Facebook",disabled:!0,isLink:!0},instagram:{type:"iLink",label:"LINK DE INSTAGRAM",name:"instagram",required:!1,message:"Link de Página de Instagram",disabled:!0,isLink:!0},description:{type:"iTextarea",label:"BREVE EXPLICACIÓN DEL NEGOCIO (aspectos resaltantes, productos, valor diferencial)",name:"description",required:!1,message:"Escribir la descripción",max:500,disabled:!0},files:{filePDF:{type:"iFile",label:"Adjuntar reporte tributario",name:"filePDF",required:!1,message:"Adjuntar Reporte",disabled:!0,span:"Reporte Tributario PDF"},logo:{type:"iFile",label:"LOGO DE LA EMPRESA (OPCIONAL)",name:"logo",required:!1,message:"Logo",disabled:!0,span:"Logo de la Empresa"}},space7:{type:"space7"},fileImgs:{type:"iFileImg",label:"CARGAR IMAGENES DE TUS PRODUCTOS (Max 3 productos)",name:"fileImgs",required:!1,message:"Adjuntar Reporte",disabled:!0}}),N=(n,d)=>new Promise((I,S)=>{d?/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[^\s]*)?(\?[^\s]*)?$/i.test(d)?I():S(new Error("Por favor, introduce una URL válida.")):I()}),B=async()=>{const n=a.ruc,d=/^\d{11}$/.test(n)&&/^(10|15|20)/.test(n),I=["comercialName","socialReason","city_id","address","businessSector","percentageOwnPlan","percentageMaquila","capacityProdMounth","isGremio","pointSale","web","facebook","instagram","description"],S=C=>{I.forEach(W=>{y.value[W].disabled=C})};if(!d)console.error("El RUC debe tener 11 caracteres, comenzar con 11, 15 o 20, y contener solo números."),S(!0);else{G.value=!0;try{const C=await K({url:`public/search-api-ruc/${a.ruc}`,method:"GET"});C.status==200&&(a.address=C.data.address,a.description=C.data.description,a.facebook=C.data.facebook,a.instagram=C.data.instagram,a.web=C.data.web,a.socialReason=C.data.socialReason,S(!1))}catch(C){console.error("Error de red:",C),C&&z.error("Este número de RUC no es válido")}finally{G.value=!1}}},$=n=>{const d=a[n]?a[n].trim():"";a[n]=d},j=n=>{n=="isGremio"&&(a.isGremio=="si"?(y.value.nameGremio.display="block",y.value.nameGremio.required=!0):(y.value.nameGremio.display="none",y.value.nameGremio.required=!1)),n=="pointSale"&&(a.pointSale=="si"?(y.value.numberPointSale.display="block",y.value.numberPointSale.required=!0):(y.value.numberPointSale.display="none",y.value.numberPointSale.required=!1))},m=(n,d)=>{const I=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return d.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(I)},r=n=>{a.province_id=null,a.district_id=null,o.fetchProvinces(n)},E=n=>{a.district_id=null,o.fetchDistricts(n)},h=()=>{window.scrollTo({top:document.documentElement.scrollHeight/4,behavior:"smooth"})},R=async()=>{const n={ruc:a.ruc,comercialName:a.comercialName,socialReason:a.socialReason,city_id:a.city_id,province_id:a.province_id,district_id:a.district_id,address:a.address,category_id:a.businessSector,percentageOwnPlan:a.percentageOwnPlan,percentageMaquila:a.percentageMaquila,capacityProdMounth:a.capacityProdMounth,isGremio:a.isGremio,nameGremio:a.isGremio=="si"?a.nameGremio:null,pointSale:a.pointSale,numberPointSale:a.pointSale=="si"?a.numberPointSale:null,web:a.web,facebook:a.facebook,instagram:a.instagram,description:a.description,filePDF:a.filePDF,logo:a.logo,img1:a.img1,img2:a.img2,img3:a.img3};A.value=!0;try{const d=await qe.post(`${V}public/first-or-new`,n,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${F}`}});if(d.data.status==200){const I={id_mype:d.data.id_mype,ruc:a.ruc,step:1};M("nextStep",I)}}catch{z.error("Error al subir")}finally{A.value=!1}},k=P([]),U=P([]),Q=({onSuccess:n})=>{setTimeout(()=>{n("ok")},0)},ee=(n,d)=>{if(d=="logo"&&U.value.length>=ue)return z.error("Solo puedes cargar un archivo, elimina el que está cargado"),!1;if(d=="filePDF"&&k.value.length>=ue)return z.error("Solo puedes cargar un archivo, elimina el que está cargado"),!1;const I=d==="filePDF"&&n.type==="application/pdf",S=d==="logo"&&(n.type==="image/png"||n.type==="image/jpeg"||n.type==="image/jpg");return!I&&!S?(z.error("Formato de archivo no permitido"),!1):(a[d]=n,d=="logo"&&U.value.push({uid:n.uid,name:n.name,status:"done"}),d=="filePDF"&&k.value.push({uid:n.uid,name:n.name,status:"done"}),!1)},ae=(n,d)=>{if(d=="filePDF"){const I=k.value.findIndex(S=>S.uid===n.uid);a[d]=null,k.value.splice(I,1)}if(d=="logo"){const I=U.value.findIndex(S=>S.uid===n.uid);a[d]=null,U.value.splice(I,1)}},i=P([]),X=P(!1),x=P(""),te=P(""),be=()=>{X.value=!1,te.value=""},ge=async n=>{if(console.log("Preview",n),n.url)x.value=n.url;else if(n.originFileObj){const d=new FileReader;d.onload=I=>{x.value=I.target.result},d.readAsDataURL(n.originFileObj)}else if(n.thumbUrl)x.value=n.thumbUrl;else{console.error("No se pudo obtener una imagen válida para la vista previa.");return}X.value=!0,te.value=n.name||n.url.substring(n.url.lastIndexOf("/")+1)},ve=n=>{const d=i.value.findIndex(I=>I.uid===n.uid);d===0?a.img1=null:d===1?a.img2=null:d===2&&(a.img3=null),i.value.splice(d,1)},fe=n=>i.value.length>=Ue?(z.error("Solo puedes cargar un máximo de 3 imágenes"),!1):(a.img1?a.img2?a.img3||(a.img3=n):a.img2=n:a.img1=n,i.value.push({uid:n.uid,name:n.name,status:"done"}),!1);return(n,d)=>{const I=_("a-input-search"),S=_("a-form-item"),C=_("a-input"),W=_("a-select"),ye=_("a-textarea"),_e=_("a-input-number"),ie=_("a-button"),re=_("a-upload"),he=_("a-modal"),Ee=_("a-form");return s(),g(Ee,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:R,onFinishFailed:h},{default:c(()=>[d[3]||(d[3]=u("h2",null,"DATOS DE LA EMPRESA",-1)),u("div",Oe,[(s(!0),O(H,null,oe(y.value,(e,Se)=>(s(),O(H,{key:Se},[e.type==="iSearch"?(s(),g(S,{key:0,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max},{pattern:/^(10|15|20)\d{9,}$/,message:"El número debe comenzar con 10, 15 o 20, tener solo números, y al menos 11 caracteres"}]},{default:c(()=>[b(I,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,placeholder:"Ingresar RUC","enter-button":"BUSCAR",loading:G.value,maxlength:e.max,onSearch:B},null,8,["value","onUpdate:value","loading","maxlength"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iText"?(s(),g(S,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}],style:ne({display:e.display})},{default:c(()=>[b(C,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,maxlength:e.max,onBlur:v=>$(e.name),disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","onBlur","disabled"])]),_:2},1032,["name","label","rules","style"])):p("",!0),e.type==="iLink"?(s(),g(S,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message},{validator:N,message:"Por favor, introduce una URL válida."}]},{default:c(()=>[b(C,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,onBlur:v=>$(e.name),disabled:e.disabled},null,8,["value","onUpdate:value","onBlur","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iSelect"?(s(),g(S,{key:3,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:c(()=>[b(W,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,options:q(e.name),disabled:e.disabled,onChange:v=>j(e.name)},null,8,["value","onUpdate:value","options","disabled","onChange"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iTextarea"?(s(),g(S,{key:4,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:c(()=>[b(ye,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,rows:4,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="iNumber"?(s(),g(S,{key:5,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}],style:ne({display:e.display})},{default:c(()=>[b(_e,{value:a[e.name],"onUpdate:value":v=>a[e.name]=v,min:1,max:e.max,style:{width:"180px"},disabled:e.disabled},null,8,["value","onUpdate:value","max","disabled"])]),_:2},1032,["name","label","rules","style"])):p("",!0),e.type==="iSelectWrite"?(s(),g(S,{key:6,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:c(()=>[e.name=="city_id"?(s(),g(W,{key:0,value:a[e.name],"onUpdate:value":v=>a[e.name]=v,options:w(o).cities,"show-search":"","filter-option":m,onChange:r,disabled:e.disabled},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),e.name=="province_id"?(s(),g(W,{key:1,value:a[e.name],"onUpdate:value":v=>a[e.name]=v,options:w(o).provinces,"show-search":"","filter-option":m,onChange:E,disabled:!a.city_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),e.name=="district_id"?(s(),g(W,{key:2,value:a[e.name],"onUpdate:value":v=>a[e.name]=v,options:w(o).districts,"show-search":"","filter-option":m,disabled:!a.province_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),e.name=="businessSector"?(s(),g(W,{key:3,value:a[e.name],"onUpdate:value":v=>a[e.name]=v,options:f,"show-search":"","filter-option":m,disabled:e.disabled},null,8,["value","onUpdate:value","disabled"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),e.filePDF?(s(),O("div",Te,[e.filePDF.name==="filePDF"?(s(),g(S,{key:0,name:e.filePDF.name,label:e.filePDF.label,rules:[{required:e.filePDF.required,message:e.filePDF.message}]},{default:c(()=>[b(re,{"before-upload":v=>ee(v,e.filePDF.name),"custom-request":Q,"file-list":k.value,accept:".pdf",multiple:!1,"on-remove":v=>ae(v,"filePDF"),"show-upload-list":""},{default:c(()=>[b(ie,null,{default:c(()=>[b(w(de)),L(" "+Z(e.filePDF.span),1)]),_:2},1024)]),_:2},1032,["before-upload","file-list","on-remove"])]),_:2},1032,["name","label","rules"])):p("",!0),e.logo.name==="logo"?(s(),g(S,{key:1,name:e.logo.name,label:e.logo.label,rules:[{required:e.logo.required,message:e.logo.message}]},{default:c(()=>[b(re,{"before-upload":v=>ee(v,e.logo.name),"custom-request":Q,"file-list":U.value,accept:".png,.jpeg,.jpg",multiple:!1,"on-remove":v=>ae(v,"logo"),"show-upload-list":""},{default:c(()=>[b(ie,null,{default:c(()=>[b(w(de)),L(" "+Z(e.logo.span),1)]),_:2},1024)]),_:2},1032,["before-upload","file-list","on-remove"])]),_:2},1032,["name","label","rules"])):p("",!0)])):p("",!0),e.type==="iFileImg"?(s(),g(S,{key:8,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:c(()=>[b(re,{"file-list":i.value,"onUpdate:fileList":d[0]||(d[0]=v=>i.value=v),"before-upload":fe,"list-type":"picture-card","on-remove":ve,onPreview:ge},{default:c(()=>[i.value.length<3?(s(),O("div",ke,[b(w(De)),d[1]||(d[1]=u("div",{style:{"margin-top":"8px","font-size":"13px"}},"Cargar Imagen",-1))])):p("",!0)]),_:1},8,["file-list"]),b(he,{open:X.value,title:te.value,footer:null,onCancel:be},{default:c(()=>[u("img",{alt:"example",style:{width:"100%"},src:x.value},null,8,we)]),_:1},8,["open","title"])]),_:2},1032,["name","label","rules"])):p("",!0),e.type==="space1"||e.type==="space2"||e.type==="space3"||e.type==="space4"||e.type==="space5"||e.type==="space6"||e.type==="space7"||e.type==="space8"?(s(),O("div",Le)):p("",!0)],64))),128))]),b(S,null,{default:c(()=>[b(ie,{type:"primary","html-type":"submit",loading:A.value,class:"fair-btn"},{default:c(()=>d[2]||(d[2]=[L("SIGUIENTE")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};const Ge={class:"fair-form"},$e={key:6},ze="DD/MM/YYYY",Be={__name:"RegistroPaso2",emits:["nextStep2"],setup(J,{emit:T}){le.locale("es");const M=T,o=pe();o.$patch({typeDocuments:o.typeDocuments}),o.$patch({cities:o.countries}),o.$patch({cities:o.cities}),o.$patch({provinces:o.provinces}),o.$patch({districts:o.districts}),o.$patch({genders:o.genders}),o.fetchTypeDocuments(),o.fetchCountries(),o.fetchCities(),o.fetchGenders();const F=P(!1),l=P(!1);P(null),P(null);const t=se({}),V=[{value:"yes",label:"SI"},{value:"no",label:"NO"}],G=m=>{if(m==="country_id")return o.countries;if(m==="gender_id")return o.genders;if(m==="sick")return V;if(m==="typedocument_id")return o.typeDocuments},A=P({typedocument_id:{type:"iSelect",label:"TIPO DE DOCUMENTO DE IDENTIDAD",name:"typedocument_id",required:!0,message:"Seleccionar tipo",disabled:!1},documentnumber:{type:"iSearch",label:"INGRESE NÚMERO DE IDENTIDAD",name:"documentnumber",required:!0,message:"Escribir tu número de documento",disabled:!0,max:11},space1:{type:"space1"},name:{type:"iText",label:"NOMBRES DEL REPRESENTANTE",name:"name",required:!0,message:"Escribir nombre",disabled:!0,max:50},lastname:{type:"iText",label:"APELLIDO PATERNO DEL REPRESENTANTE",name:"lastname",required:!0,message:"Escribir nombre",disabled:!0,max:50},middlename:{type:"iText",label:"APELLIDO MATERNO DEL REPRESENTANTE",name:"middlename",required:!0,message:"Escribir nombre",disabled:!0,max:50},country_id:{type:"iSelect",label:"PAÍS DE ORIGEN",name:"country_id",required:!0,message:"Seleccionar país",disabled:!0},city_id:{type:"iSelectWrite",label:"REGIÓN DE RESIDENCIA",name:"city_id",required:!0,message:"Seleccionar región",disabled:!0},province_id:{type:"iSelectWrite",label:"PROVINCIA DE RESIDENCIA",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!0},district_id:{type:"iSelectWrite",label:"DISTRITO DE RESIDENCIA",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!0},address:{type:"iText",label:"DIRECCIÓN",name:"address",required:!0,message:"Escribir dirección",disabled:!0,max:180},birthday:{type:"iDate",label:"Fecha de nacimiento",name:"birthday",required:!0,message:"Seleccionar fecha de nacimiento",disabled:!0},gender_id:{type:"iSelect",label:"GÉNERO",name:"gender_id",required:!0,message:"Seleccionar un tipo de género",disabled:!0},sick:{type:"iSelect",label:"¿TIENE ALGUNA DISCAPACIDAD?",name:"sick",required:!0,message:"¿Tiene discapacidad?",disabled:!0},email:{type:"iText",label:"CORREO ELECTRÓNICO",name:"email",required:!0,message:"Ingresar email",email:"email",disabled:!0,max:255},phone:{type:"iText",label:"NÚMERO DE CELULAR",name:"phone",required:!0,message:"Escribe tu num. de celular",disabled:!0,max:9}}),a=(m,r)=>{if(!r)return Promise.reject("La fecha es requerida");const E=new Date,h=new Date(r);let R=E.getFullYear()-h.getFullYear();const k=E.getMonth()-h.getMonth();return(k<0||k===0&&E.getDate()<h.getDate())&&R--,R<18||R>99?Promise.reject("La edad debe estar entre 18 y 99 años"):Promise.resolve()},Y=(m,r)=>{if(m.field==="phone"){const E=/^9\d{8}$/;if(r){if(!E.test(r))return Promise.reject("El número debe empezar con 9 y tener exactamente 9 dígitos")}else return Promise.reject("El número de teléfono es obligatorio")}if(m.field==="email"){const E=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(r){if(!E.test(r))return Promise.reject("Ingrese un correo electrónico válido")}else return Promise.reject("El correo electrónico es obligatorio")}return Promise.resolve()},D=m=>{const r=t[m]?t[m].trim():"";t[m]=r},f=m=>{m=="typedocument_id"&&(t.documentnumber=null,t.name=null,t.lastname=null,t.middlename=null,t.country_id=null,t.city_id=null,t.province_id=null,t.district_id=null,t.address=null,t.birthday=null,t.gender_id=null,t.sick=null,t.email=null,t.phone=null)},q=(m,r)=>{const E=t.typedocument_id;return/^\d+$/.test(r)?E===1&&r.length!==8?Promise.reject("Debe tener exactamente 8 caracteres."):E!==1&&r.length>12?Promise.reject("Debe tener exactamente 12 caracteres."):(E===1&&r.startsWith("0")&&r.length===8,Promise.resolve()):Promise.reject("Solo se permiten números.")},y=async()=>{const{typedocument_id:m,documentnumber:r}=t;if(!m||!r){z.error("El tipo de documento y el número de documento no pueden estar vacíos.");return}if(!/^\d+$/.test(r)){z.error("El número de documento solo debe contener caracteres numéricos.");return}if(m===1&&r.length!==8){z.error("El número de documento debe tener exactamente 8 caracteres para el tipo de documento DNI.");return}const E=["name","lastname","middlename","country_id","city_id","province_id","district_id","address","birthday","sick","email","phone","gender_id"],h=R=>{E.forEach(k=>{A.value[k].disabled=R})};try{if(F.value=!0,t.typedocument_id==1){const R=await K({url:`public/search-api-dni/${t.documentnumber}`,method:"GET"});R.status==200&&(t.name=R.data.name,t.lastname=R.data.lastname,t.middlename=R.data.middlename,t.gender_id=R.data.gender_id,t.sick=R.data.sick)}}catch(R){console.error("Error de red:",R)}finally{h(!1),F.value=!1}},N=(m,r)=>{const E=m.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(E)},B=m=>{t.province_id=null,t.district_id=null,o.fetchProvinces(m)},$=m=>{t.district_id=null,o.fetchDistricts(m)},j=async()=>{l.value=!0;const m={typedocument_id:t.typedocument_id,documentnumber:t.documentnumber,name:t.name,lastname:t.lastname,middlename:t.middlename,country_id:t.country_id,city_id:t.city_id,province_id:t.province_id,district_id:t.district_id,address:t.address,birthday:le(t.birthday).format("YYYY-MM-DD"),gender_id:t.gender_id,sick:t.sick,email:t.email,phone:t.phone};try{const r=await K({url:"public/create-up",method:"POST",data:m});if(console.log("response: ",r),r.status==200){const E={id_person:r.id_person,dni:t.documentnumber,email:t.email,step:2};M("nextStep2",E)}}catch(r){console.error("Error de red:",r)}finally{l.value=!1}};return(m,r)=>{const E=_("a-input-search"),h=_("a-form-item"),R=_("a-input"),k=_("a-date-picker"),U=_("a-select"),Q=_("a-textarea"),ee=_("a-button"),ae=_("a-form");return s(),g(ae,{layout:"vertical",model:t,name:"basic",autocomplete:"off",onFinish:j},{default:c(()=>[r[1]||(r[1]=u("h2",null,"REPRESENTANTE DE LA EMPRESA",-1)),u("div",Ge,[(s(!0),O(H,null,oe(A.value,(i,X)=>(s(),O(H,{key:X},[i.type==="iSearch"?(s(),g(h,{key:0,name:i.name,label:i.label,rules:[{required:i.required,message:i.message,validator:q}]},{default:c(()=>[b(E,{value:t[i.name],"onUpdate:value":x=>t[i.name]=x,placeholder:"","enter-button":"BUSCAR",loading:F.value,maxlength:t.typedocument_id===1?8:12,onSearch:y},null,8,["value","onUpdate:value","loading","maxlength"])]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="iText"?(s(),g(h,{key:1,name:i.name,label:i.label,rules:[{required:i.required,message:i.message,max:i.max},{validator:Y}]},{default:c(()=>[b(R,{value:t[i.name],"onUpdate:value":x=>t[i.name]=x,maxlength:i.max,onBlur:x=>D(i.name),disabled:i.disabled},null,8,["value","onUpdate:value","maxlength","onBlur","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="iDate"?(s(),g(h,{key:2,name:i.name,label:i.label,rules:[{required:i.required,message:i.message},{validator:a,message:"La edad debe estar entre 18 y 99 años"}]},{default:c(()=>[b(k,{locale:w(Ie),value:t[i.name],"onUpdate:value":x=>t[i.name]=x,style:{width:"100%"},format:ze,placeholder:"día/mes/año",disabled:i.disabled},null,8,["locale","value","onUpdate:value","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="iSelect"?(s(),g(h,{key:3,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:c(()=>[b(U,{value:t[i.name],"onUpdate:value":x=>t[i.name]=x,options:G(i.name),"show-search":"","filter-option":N,onChange:x=>f(i.name),disabled:i.disabled},null,8,["value","onUpdate:value","options","onChange","disabled"])]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="iTextarea"?(s(),g(h,{key:4,name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:c(()=>[b(Q,{value:t[i.name],"onUpdate:value":x=>t[i.name]=x,rows:4,maxlength:i.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="iSelectWrite"?(s(),g(h,{key:5,class:"item-max",name:i.name,label:i.label,rules:[{required:i.required,message:i.message}]},{default:c(()=>[i.name=="city_id"?(s(),g(U,{key:0,value:t[i.name],"onUpdate:value":x=>t[i.name]=x,options:w(o).cities,"show-search":"","filter-option":N,onChange:B,disabled:i.disabled},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),i.name=="province_id"?(s(),g(U,{key:1,value:t[i.name],"onUpdate:value":x=>t[i.name]=x,options:w(o).provinces,"show-search":"","filter-option":N,onChange:$,disabled:!t.city_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0),i.name=="district_id"?(s(),g(U,{key:2,value:t[i.name],"onUpdate:value":x=>t[i.name]=x,options:w(o).districts,"show-search":"","filter-option":N,disabled:!t.province_id},null,8,["value","onUpdate:value","options","disabled"])):p("",!0)]),_:2},1032,["name","label","rules"])):p("",!0),i.type==="space1"?(s(),O("div",$e)):p("",!0)],64))),128))]),b(h,null,{default:c(()=>[b(ee,{type:"primary","html-type":"submit",loading:l.value,class:"fair-btn"},{default:c(()=>r[0]||(r[0]=[L("SIGUIENTE")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};const je={class:"fair-form-3"},Ve={class:"acceptable-wrapper"},Ye={__name:"RegistroPaso3",props:["newFairData"],setup(J){const T=J,M=ce(),o=me(),F=P(!1),l=se({}),t=P({hasPos:{type:"iRadio",label:"Cuenta con el servicio de pagos electrónicos mediante POS (Tarjeta de crédito y/o Débito)",name:"hasPos",required:!0,message:"Escoger opción",disabled:!0,other:!1},hasYape:{type:"iRadio",label:"Su negocio cuenta con el servicio de pagos por medio de monederos electrónicos (Yape, PLIM, etc.)",name:"hasYape",required:!0,message:"Escoger opción",disabled:!0,other:!1},hasVistualStore:{type:"iRadio",label:"Su negocio realiza ventas a través de tiendas virtuales, ya sea por medio de página web (Mercado Libre, Amazon, Redes Sociales, Whatsapp, etc)",name:"hasVistualStore",required:!0,message:"Escoger opción",disabled:!0,other:!1},hasDelivery:{type:"iRadio",label:"Su negocio realiza entregas a domicilio (delivery)",name:"hasDelivery",required:!0,message:"Escoger opción",disabled:!0,other:!1},hasElectronicInvoice:{type:"iRadio",label:"Su negocio emite factura electrónica",name:"hasElectronicInvoice",required:!0,message:"Escoger opción",disabled:!0,other:!1},isFormalizedPnte:{type:"iRadio",label:"Se ha formalizado a través del Programa Nacional Tu Empresa",name:"isFormalizedPnte",required:!0,message:"Escoger opción",disabled:!0},isIndecopi:{type:"iRadio",label:"¿Su marca se encuentra registrada en INDECOPI?",name:"isIndecopi",required:!0,message:"Escoger opción",disabled:!0},hasParticipatedFair:{type:"iRadio",label:"Ha participado en alguna feria virtual/presencial y/o rueda de negocios en los últimos años? Especificar",name:"hasParticipatedFair",required:!0,message:"Escoger opción",disabled:!0,other:!0},nameFair:{type:"iText",label:"Ingrese evento donde participó",name:"nameFair",required:!1,message:"Escribir evento donde participó",disabled:!0,max:80,display:"none"},hasParticipatedProduce:{type:"iRadio",label:"Ha participado en algún servicio que ofrece PRODUCE (taller, capacitación, o asistencia técnica)",name:"hasParticipatedProduce",required:!0,message:"Escoger opción",disabled:!0,other:!0},nameService:{type:"iText",label:"Ingrese nombre del servicio que participó en PRODUCE (taller, capacitación, o asistencia técnica)",name:"nameService",required:!1,message:"Escribir nombre",disabled:!0,max:80,display:"none"},accept:{type:"iCheckbox",label:"",name:"accept",required:!0,message:"Acepta los términos y condiciones",disabled:!0}}),V=D=>{D.target.checked||delete l.accept},G=D=>{console.log("nameService",D),D=="hasParticipatedFair"&&(l.hasParticipatedFair=="otro"?(t.value.nameFair.display="block",t.value.nameFair.required=!0):(t.value.nameFair.display="none",t.value.nameFair.required=!1)),D=="hasParticipatedProduce"&&(l.hasParticipatedProduce=="otro"?(t.value.nameService.display="block",t.value.nameService.required=!0):(t.value.nameService.display="none",t.value.nameService.required=!1))},A=D=>{const f=l[D]?l[D].trim():"";l[D]=f},a=()=>{window.scrollTo({top:document.documentElement.scrollHeight/4,behavior:"smooth"})},Y=async()=>{try{F.value=!0;const D={hasPos:l.hasPos,hasDelivery:l.hasDelivery,hasElectronicInvoice:l.hasElectronicInvoice,hasYape:l.hasYape,hasVistualStore:l.hasVistualStore,isFormalizedPnte:l.isFormalizedPnte,hasParticipatedFair:l.hasParticipatedFair,nameFair:l.hasParticipatedFair=="otro"?l.nameFair:null,hasParticipatedProduce:l.hasParticipatedProduce,nameService:l.hasParticipatedProduce=="otro"?l.nameService:null,isIndecopi:l.isIndecopi},f={slug:o.params.slug,mype_id:T.newFairData.id_mype,ruc:T.newFairData.ruc,person_id:T.newFairData.id_person,dni:T.newFairData.dni,email:T.newFairData.email,hasParticipatedProduce:l.hasParticipatedProduce,nameService:l.hasParticipatedProduce=="otro"?l.nameService:null,hasParticipatedFair:l.hasParticipatedFair,nameFair:l.hasParticipatedFair=="otro"?l.nameFair:null};await K({url:`public/mype/${T.newFairData.ruc}`,method:"POST",data:D}),(await K({url:"public/postulate",method:"POST",data:f})).status==200&&M.push("/feria/registrado")}catch(D){console.error("Error de red:",D)}finally{F.value=!1}};return(D,f)=>{const q=_("a-radio"),y=_("a-radio-group"),N=_("a-form-item"),B=_("a-input"),$=_("a-checkbox"),j=_("a-button"),m=_("a-form");return s(),g(m,{layout:"vertical",model:l,name:"basic",autocomplete:"off",onFinish:Y,onFinishFailed:a},{default:c(()=>[f[7]||(f[7]=u("h2",null,"PREGUNTAS COMPLEMENTARIAS DE SU NEGOCIO",-1)),u("div",je,[(s(!0),O(H,null,oe(t.value,(r,E)=>(s(),O(H,{key:E},[r.type==="iRadio"?(s(),g(N,{key:0,name:r.name,label:r.label,rules:[{required:r.required,message:r.message,max:r.max}]},{default:c(()=>[b(y,{value:l[r.name],"onUpdate:value":h=>l[r.name]=h,name:r.name,onChange:h=>G(r.name)},{default:c(()=>[b(q,{value:"si"},{default:c(()=>f[0]||(f[0]=[L("SI")])),_:1}),b(q,{value:"no"},{default:c(()=>f[1]||(f[1]=[L("NO")])),_:1}),r.other?(s(),g(q,{key:0,value:"otro"},{default:c(()=>f[2]||(f[2]=[L("OTRO")])),_:1})):p("",!0)]),_:2},1032,["value","onUpdate:value","name","onChange"])]),_:2},1032,["name","label","rules"])):p("",!0),r.type==="iText"?(s(),g(N,{key:1,name:r.name,label:r.label,rules:[{required:r.required,message:r.message,max:r.max}],style:ne({display:r.display})},{default:c(()=>[b(B,{value:l[r.name],"onUpdate:value":h=>l[r.name]=h,maxlength:r.max,onBlur:h=>A(r.name)},null,8,["value","onUpdate:value","maxlength","onBlur"])]),_:2},1032,["name","label","rules","style"])):p("",!0),r.type==="iCheckbox"?(s(),g(N,{key:2,name:r.name,label:r.label,rules:[{required:r.required,message:r.message}],class:"acceptable"},{default:c(()=>[u("div",Ve,[f[4]||(f[4]=u("h2",{class:"acc-h2",style:{color:"var(--primary)"}},"Términos y Condiciones",-1)),f[5]||(f[5]=u("span",{class:"acc-span"},"Para recibir constancias por parte de ferias:",-1)),f[6]||(f[6]=u("ul",null,[u("li",null,"Cumplir con los lineamientos de participación en las ferias."),u("li",null,"Cumplir con el plan de acción, que entre otros, implica la participación en las capacitaciones en el marco de las ferias comerciales.")],-1)),b($,{checked:l[r.name],"onUpdate:checked":h=>l[r.name]=h,onChange:V},{default:c(()=>f[3]||(f[3]=[u("span",null,"Acepto los Términos y Condiciones",-1)])),_:2},1032,["checked","onUpdate:checked"])])]),_:2},1032,["name","label","rules"])):p("",!0)],64))),128))]),b(N,{style:{margin:"0"}},{default:c(()=>[b(j,{type:"primary","html-type":"submit",loading:F.value,class:"fair-btn"},{default:c(()=>[L(Z(F.value?"ENVIANDO DATOS":"POSTULAR"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};const We={class:"fair-wrapper"},He={key:0,class:"fair-caducated"},Ke={key:1},Xe={class:"fair",style:{"padding-top":"2rem"}},Ze={class:"container containerx",style:{"border-radius":"8px 8px 0 0"}},Je={style:{"padding-top":"3rem"}},Qe={class:"fair-title"},ea={class:"fair-header"},aa={class:"tag-html"},ta=["innerHTML"],ia={class:"form-x fair"},ra={class:"container containerx",style:{"margin-bottom":"2rem","border-radius":"0 0 8px 8px"}},na={class:"form-x-wrapper",style:{padding:"2rem 1.5rem"}},sa={style:{"margin-top":"2rem"}},ga={__name:"IndexPostularFeria",setup(J){const T=Re(Fe,{style:{fontSize:"24px"},spin:!0}),M=P(!0),o=P(null),F=P(!1),l=P(0);P(null);const t=P(!1),V=ce(),G=me(),A=P({id_mype:null,ruc:null,id_person:null,dni:null,email:null}),a=()=>{window.pageYOffset>10?t.value=!0:t.value=!1},Y=q=>{A.value.id_mype=q.id_mype,A.value.ruc=q.ruc,l.value=1,window.scrollTo({top:document.documentElement.scrollHeight/4,behavior:"smooth"})},D=q=>{A.value.id_person=q.id_person,A.value.dni=q.dni,A.value.email=q.email,l.value=2,window.scrollTo({top:document.documentElement.scrollHeight/4,behavior:"smooth"})},f=async()=>{try{const q=G.params.slug,y=await K({url:`public/data/${q}`,method:"GET"});y.status==200&&(o.value=y.data,M.value=!1),y.status==400&&V.push("/404"),y.status==500&&(F.value=!0,M.value=!1)}catch(q){console.error("Error de red:",q)}finally{}};return Ce(()=>{window.addEventListener("scroll",a),f()}),Ae(()=>{window.removeEventListener("scroll",a)}),(q,y)=>{const N=_("a-spin");return s(),O("div",We,[b(N,{spinning:M.value,indicator:w(T)},{default:c(()=>{var B,$,j;return[F.value?(s(),O("section",He,y[0]||(y[0]=[u("div",{class:"container"},[u("div",{class:"fair-caducated-info"},[u("img",{src:Pe,alt:""}),u("h4",null,"LA FERIA YA HA FINALIZADO"),u("p",null,[L("El formulario de inscripción ya no está disponible. "),u("br"),L(" Agradecemos su interés y lo invitamos a estar atento a nuestros próximos eventos.")])])],-1)]))):(s(),O("section",Ke,[u("section",Xe,[u("div",Ze,[u("div",Je,[u("div",Qe,[u("h1",null,Z((B=o.value)==null?void 0:B.title),1),u("h4",null,Z(($=o.value)==null?void 0:$.subTitle),1)]),u("div",ea,[y[1]||(y[1]=u("img",{class:"fair-header-img",src:"https://apituempresa.soporte-pnte.com/images/bannerferia.png",alt:"ferias-pnte"},null,-1)),u("div",aa,[u("div",{innerHTML:(j=o.value)==null?void 0:j.description,style:{"margin-top":"1.5rem"}},null,8,ta)])])])]),y[2]||(y[2]=u("div",{class:"fair-section"},[u("div",{class:"container",style:{"background-color":"#def1f8"}},[u("p",null,[u("b",null,"Importante:"),L(" La información proporcionada tiene carácter de Declaración Jurada, la misma que se formula en el marco de lo establecido en el artículo 49 del TUO de la Ley 27444 Ley del Procedimiento Administrativo General, manifestando someterme a la normatividad vigente respecto a la materia y a las responsabilidades administrativas, civiles y/o penales que se pudieran derivar en caso que alguno DE LOS DATOS CONSIGNADOS SEAN FALSOS, INEXACTOS, siendo pasible de cualquier fiscalización posterior que el Ministerio de la Producción considere pertinente. ")])])],-1))]),u("section",ia,[u("div",ra,[u("div",na,[u("section",null,[u("div",sa,[l.value==0?(s(),g(Me,{key:0,onNextStep:Y})):p("",!0),l.value==1?(s(),g(Be,{key:1,onNextStep2:D})):p("",!0),l.value==2?(s(),g(Ye,{key:2,newFairData:A.value},null,8,["newFairData"])):p("",!0)])])])])])]))]}),_:1},8,["spinning","indicator"]),b(Ne)])}}};export{ga as default};
