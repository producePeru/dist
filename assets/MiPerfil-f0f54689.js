import{f as B}from"./actualizarUsuario-3eaca126.js";import{u as R}from"./selectes-12c5adc1.js";import{l as D,r as y,a as j,j as G,b as d,o as s,d as x,e as g,c as u,w as c,K as w,i as M,F as Y,s as J,x as l,h as m,q as r,H,m as C}from"./index-77e60b6a.js";import"./es-a99a0060.js";import"./storage-bd9b3161.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"profile-header"},Q={class:"my-profile"},W={class:"grid-profile"},X="DD/MM/YYYY",ee={__name:"MiPerfil",props:["updateUser"],emits:["closeDraw"],setup(ae,{emit:te}){D.locale("es");const t=R(),v=JSON.parse(localStorage.getItem("profile")),q=JSON.parse(localStorage.getItem("email")),k=y(!1);t.$patch({genders:t.genders}),t.$patch({cdes:t.cdes}),t.$patch({Offices:t.Offices}),t.$patch({roles:t.roles}),t.$patch({cities:t.cities}),t.$patch({supervisores:t.supervisores}),t.fetchCities(),t.fetchGenders(),t.fetchCdes(),t.fetchOffices(),t.fetchRoles();const U=y(!1),_=y(B);y(null);const e=j({email:null,documentnumber:null,name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:v.id}),F=n=>{const i={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(n===2)t.fetchSupervisores(),_.value={..._.value,supervisor_id:i};else{const{supervisor_id:f,...h}=_.value;_.value=h}},S=(n,i)=>{const f=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(f)},N=n=>{e.province_id=null,e.district_id=null,t.fetchProvinces(n)},O=n=>{e.district_id=null,t.fetchDistricts(n)},$=async()=>{U.value=!0;const n={email:e.email,documentnumber:e.documentnumber,name:e.name,lastname:e.lastname,middlename:e.middlename,birthday:e.birthday?D(e.birthday).format("YYYY-MM-DD"):null,sick:e.sick,phone:e.phone,gender_id:e.gender_id,cde_id:e.cde_id,office_id:e.office_id,user_id:v.id};try{const i=await w({url:`user/update/${v.id}`,method:"PUT",data:n});C.success(i.message)}catch{C.error("No se pudo registrar este usuario")}finally{U.value=!1}},A=()=>{C.error("Debes de completar todos los espacios requeridos")},I=async()=>{try{k.value=!0;const{data:n}=await w({url:"user/my-profile",method:"GET"});n&&(e.email=q,e.documentnumber=v.documentnumber,e.name=n.name,e.lastname=n.lastname,e.middlename=n.middlename,e.birthday=n.birthday,e.sick=n.sick,e.phone=n.phone,e.gender_id=n.gender_id,e.cde_id=n.cde_id,e.office_id=n.office_id,e.birthday=n.birthday?D(n.birthday,"YYYY-MM-DD"):null)}catch(n){console.error("Error de red:",n)}finally{k.value=!1}};return G(()=>{I()}),(n,i)=>{const f=d("a-button"),h=d("router-link"),L=d("a-divider"),p=d("a-select"),b=d("a-form-item"),P=d("a-input"),T=d("a-date-picker"),z=d("a-form"),E=d("a-spin");return s(),x("div",null,[g("div",Z,[i[1]||(i[1]=g("h3",null,"MIS DATOS",-1)),u(h,{to:"cambiar-clave"},{default:c(()=>[u(f,null,{default:c(()=>i[0]||(i[0]=[M("Cambiar contraseña")])),_:1})]),_:1})]),u(L),g("section",Q,[u(E,{spinning:k.value},{default:c(()=>[u(z,{layout:"vertical",model:e,name:"basic",autocomplete:"off",onFinish:$,onFinishFailed:A},{default:c(()=>[g("div",W,[(s(!0),x(Y,null,J(_.value,(a,V)=>(s(),x(Y,{key:V},[a.type==="iSelect"?(s(),l(b,{key:0,class:"item-max",name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[a.name=="gender_id"?(s(),l(p,{key:0,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).genders},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="cde_id"?(s(),l(p,{key:1,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).cdes},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="office_id"?(s(),l(p,{key:2,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).Offices},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="role_id"?(s(),l(p,{key:3,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).roles,onChange:F},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="supervisor_id"?(s(),l(p,{key:4,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).supervisores},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="city_id"?(s(),l(p,{key:5,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).cities,"show-search":"","filter-option":S,onChange:N},null,8,["value","onUpdate:value","options"])):r("",!0),a.name=="province_id"?(s(),l(p,{key:6,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).provinces,"show-search":"","filter-option":S,onChange:O,disabled:!e.city_id},null,8,["value","onUpdate:value","options","disabled"])):r("",!0),a.name=="district_id"?(s(),l(p,{key:7,value:e[a.name],"onUpdate:value":o=>e[a.name]=o,options:m(t).districts,"show-search":"","filter-option":S,disabled:!e.province_id},null,8,["value","onUpdate:value","options","disabled"])):r("",!0)]),_:2},1032,["name","label","rules"])):r("",!0),a.type==="iText"?(s(),l(b,{key:1,name:a.name,label:a.label,rules:[{required:a.required,message:a.message,type:a.email}]},{default:c(()=>[u(P,{value:e[a.name],"onUpdate:value":o=>e[a.name]=o,maxlength:a.max,disabled:a.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):r("",!0),a.type==="iDate"?(s(),l(b,{key:2,name:a.name,label:a.label,rules:[{required:a.required,message:a.message}]},{default:c(()=>[u(T,{locale:m(H),value:e[a.name],"onUpdate:value":o=>e[a.name]=o,style:{width:"100%"},format:X,placeholder:"DÍA/MES/AÑO"},null,8,["locale","value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):r("",!0)],64))),128))]),u(b,null,{default:c(()=>[u(f,{class:"btn-produce",type:"primary","html-type":"submit",loading:U.value},{default:c(()=>i[2]||(i[2]=[M("ACTUALIZAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])])}}},de=K(ee,[["__scopeId","data-v-2eb3143b"]]);export{de as default};
