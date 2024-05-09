import{f as R}from"./actualizarUsuario-dcb6b189.js";import{u as j}from"./selectes-1745afb4.js";import{K as D,r as y,a as G,k as J,b as l,o as n,d as q,e as b,c as r,w as i,y as w,i as C,F as I,B as K,q as u,h as m,s as d,L as Z,p as z,j as H,m as M}from"./index-3d226002.js";import"./es-31469968.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const W=v=>(z("data-v-3975e478"),v=v(),H(),v),X={class:"profile-header"},ee=W(()=>b("h3",null,"MIS DATOS",-1)),ae={class:"my-profile"},te={class:"grid-profile"},Y="YYYY-MM-DD",oe={__name:"MiPerfil",props:["updateUser"],emits:["closeDraw"],setup(v,{emit:se}){D.locale("es");const o=j(),g=JSON.parse(localStorage.getItem("profile")),F=JSON.parse(localStorage.getItem("email")),k=y(!1);o.$patch({genders:o.genders}),o.$patch({cdes:o.cdes}),o.$patch({Offices:o.Offices}),o.$patch({roles:o.roles}),o.$patch({supervisores:o.supervisores}),o.fetchGenders(),o.fetchCdes(),o.fetchOffices(),o.fetchRoles();const S=y(!1),p=y(R),_=y(null),a=G({email:null,documentnumber:null,name:null,lastname:null,middlename:null,birthday:null,sick:null,phone:null,gender_id:null,cde_id:null,office_id:null,user_id:g.id}),N=t=>{const c={type:"iSelect",label:"Supervisador",name:"supervisor_id",required:!0,message:"Seleccionar tipo de documento",disabled:!0};if(t===2)o.fetchSupervisores(),p.value={...p.value,supervisor_id:c};else{const{supervisor_id:U,...x}=p.value;p.value=x}},O=async()=>{S.value=!0,a.birthday=_.value?D(_.value).format("YYYY-MM-DD"):null;let t=a;delete t.email,delete t.documentnumber;try{const c=await w({url:`user/update/${g.id}`,method:"PUT",data:t});M.success(c.message)}catch{M.error("No se pudo registrar este usuario")}finally{S.value=!1}},T=()=>{M.error("Debes de completar todos los espacios requeridos")},$=async()=>{try{k.value=!0;const{data:t}=await w({url:"user/my-profile",method:"GET"});t&&(a.email=F,a.documentnumber=g.documentnumber,a.name=t.name,a.lastname=t.lastname,a.middlename=t.middlename,a.birthday=t.birthday,a.sick=t.sick,a.phone=t.phone,a.gender_id=t.gender_id,a.cde_id=t.cde_id,a.office_id=t.office_id,t.birthday&&(_.value=D(t.birthday,Y)))}catch(t){console.error("Error de red:",t)}finally{k.value=!1}};return J(()=>{$()}),(t,c)=>{const U=l("a-button"),x=l("router-link"),B=l("a-divider"),f=l("a-select"),h=l("a-form-item"),V=l("a-input"),A=l("a-date-picker"),E=l("a-form"),P=l("a-spin");return n(),q("div",null,[b("div",X,[ee,r(x,{to:"cambiar-clave"},{default:i(()=>[r(U,null,{default:i(()=>[C("Cambiar contraseña")]),_:1})]),_:1})]),r(B),b("section",ae,[r(P,{spinning:k.value},{default:i(()=>[r(E,{layout:"vertical",model:a,name:"basic",autocomplete:"off",onFinish:O,onFinishFailed:T},{default:i(()=>[b("div",te,[(n(!0),q(I,null,K(p.value,(e,L)=>(n(),q(I,{key:L},[e.type==="iSelect"?(n(),u(h,{key:0,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[e.name=="gender_id"?(n(),u(f,{key:0,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:m(o).genders},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="cde_id"?(n(),u(f,{key:1,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:m(o).cdes},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="office_id"?(n(),u(f,{key:2,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:m(o).Offices},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="role_id"?(n(),u(f,{key:3,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:m(o).roles,onChange:N},null,8,["value","onUpdate:value","options"])):d("",!0),e.name=="supervisor_id"?(n(),u(f,{key:4,value:a[e.name],"onUpdate:value":s=>a[e.name]=s,options:m(o).supervisores},null,8,["value","onUpdate:value","options"])):d("",!0)]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iText"?(n(),u(h,{key:1,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,type:e.email}]},{default:i(()=>[r(V,{value:a[e.name],"onUpdate:value":s=>a[e.name]=s,maxlength:e.max,disabled:e.disabled},null,8,["value","onUpdate:value","maxlength","disabled"])]),_:2},1032,["name","label","rules"])):d("",!0),e.type==="iDate"?(n(),u(h,{key:2,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:i(()=>[r(A,{locale:m(Z),value:_.value,"onUpdate:value":c[0]||(c[0]=s=>_.value=s),style:{width:"100%"},format:Y},null,8,["locale","value"])]),_:2},1032,["name","label","rules"])):d("",!0)],64))),128))]),r(h,null,{default:i(()=>[r(U,{class:"btn-produce",type:"primary","html-type":"submit",loading:S.value},{default:i(()=>[C("ACTUALIZAR")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])])])}}},de=Q(oe,[["__scopeId","data-v-3975e478"]]);export{de as default};
