import{F as I,_ as P,a as L}from"./FormalizacionFooter-c2037f13.js";import{u as q,r as s,l as U,b as F,o as V,d as D,e,q as G,c as l,w as d,F as R,f as w,t as j,j as i,p as J,k as K,g as C,m as Q}from"./index-3dd95ec6.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const Z="/assets/gps-ico-4fa94334.png";const r=c=>(J("data-v-b120dcc9"),c=c(),K(),c),$=r(()=>e("div",{class:"container header-wrapper"},[e("img",{src:P,alt:"logo-produce"}),e("img",{src:L,alt:"logo-tu-empresa"})],-1)),A=[$],H={class:"form-map"},W={class:"container"},X={class:"background-map"},ee=r(()=>e("h2",{class:"title2 ff"},"Paso 2: Selección de puntos de atención",-1)),ae=r(()=>e("div",{class:"info-gps"},[e("span",null,[i("Este ícono "),e("img",{src:Z,alt:"formalizate ubicación"}),i(" represeta la ubicación geográfica de nuestros centros de desarrollo empresarial, pulse en el mapa a continuación para elegir el de su preferencia.")])],-1)),oe={class:"modal-info ff"},te=r(()=>e("span",null,"Quiero atenderme aquí",-1)),se=r(()=>e("div",{class:"modal-info ff msg-ok"},[e("p",{class:"ff"},[i("Un asesor se comunicará contigo dentro de las "),e("b",null,"24 horas")]),e("p",null,"(No considerar sábados, domingos ni feriados), gracias")],-1)),ne={__name:"FormalizacionMapa",setup(c){const y=q();let n;const b=s(null);let p;const u=s(!1),m=s(!1),x=s(null),_=s(!1),f=s([]),g=s(null),v=s(!1),S=s(null),E=o=>{g.value=o,m.value=!0},M=async()=>{let o=C.get("formalization-data");o||y.push({name:"formalizacion"}),o=JSON.parse(o),o.id_gps_cdes=g.value.title,u.value=!0;try{const a=await w({url:"/public/formalization",method:"POST",data:o});a.status==200&&(await w({url:`/public/formalization-email/${o.dni}`,method:"POST"}),v.value=!0,S.value=a.message)}catch{Q.error("Error al registrar")}finally{u.value=!1}},k=()=>{y.push({name:"formalizacion"}),C.remove("formalization-data")},O=()=>{window.pageYOffset>10?_.value=!0:_.value=!1},T=()=>{window.scrollTo({top:0,behavior:"smooth"})},B=async()=>{try{const{data:o}=await w({url:"/public/location-cdes",method:"GET"}),a=o.map(t=>({position:{lat:parseFloat(t.position.lat),lng:parseFloat(t.position.lng)},title:t.title}));f.value=[...f.value,a]}catch(o){console.log(o)}},N=()=>{k()};return U(async()=>{window.addEventListener("scroll",O),T(),await B(),navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{n=new window.google.maps.Map(b.value,{center:{lat:o.coords.latitude,lng:o.coords.longitude},zoom:11}),f.value[0].forEach(a=>{new window.google.maps.Marker({position:a.position,map:n,title:a.title}).addListener("click",()=>{E(a)})}),p=new window.google.maps.places.SearchBox(document.getElementById("searchInput")),p.addListener("places_changed",()=>{const a=p.getPlaces();if(a.length===0)return;const t=a[0];n.setCenter(t.geometry.location),n.setZoom(15),new window.google.maps.Marker({position:t.geometry.location,map:n,title:t.name})})},()=>{console.error("Error al obtener la ubicación del usuario.")}):console.error("La geolocalización no está disponible en este navegador.")}),(o,a)=>{const t=F("a-button"),z=F("a-modal");return V(),D(R,null,[e("header",{class:G(["header",{floatingNav:_.value}]),ref_key:"navBar",ref:x},A,2),e("section",H,[e("div",W,[e("div",X,[ee,ae,e("div",{ref_key:"mapContainer",ref:b,style:{height:"500px"}},null,512)])])]),l(z,{open:m.value,"onUpdate:open":a[0]||(a[0]=h=>m.value=h),title:"",width:"350px",footer:!1},{default:d(()=>[e("div",oe,[te,e("h3",null,j(g.value.title),1)]),l(t,{onClick:M,loading:u.value,class:"form-button",type:"primary","html-type":"submit"},{default:d(()=>[i("ESCOGER")]),_:1},8,["loading"])]),_:1},8,["open"]),l(z,{open:v.value,"onUpdate:open":a[1]||(a[1]=h=>v.value=h),title:"",width:"450px",footer:!1,onCancel:N},{default:d(()=>[se,l(t,{onClick:k,class:"form-button",type:"primary","html-type":"submit"},{default:d(()=>[i("OK")]),_:1})]),_:1},8,["open"]),l(I)],64)}}},ce=Y(ne,[["__scopeId","data-v-b120dcc9"]]);export{ce as default};