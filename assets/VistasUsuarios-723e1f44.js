import{r as o,z as p,k as i,b as d,o as _,d as I,c as m,e as r,t as v,F as N,B as f,p as h,j}from"./index-6c614c87.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const V=e=>(h("data-v-4476f302"),e=e(),j(),e),g=V(()=>r("button",null,"ASIGNAR",-1)),x="eyJpdiI6IlJ3bHkySWFmU2d3V3dtbVh4YzhsYnc9PSIsInZhbHVlIjoiTGtUNHdIajd6WGFRendSaWtxTDV6Zz09IiwibWFjIjoiNjllN2NkODNmNGE2YmVjMTUyZjViNjAxY2I1NmQ0MTNjNDgwMTgyMzdlNzYwYjg1YjI0NmM0NWUxZTQ0YTE1NyIsInRhZyI6IiJ9",b={__name:"VistasUsuarios",setup(e){const t=o([]),s=o([]),n=o(!1);return o(!1),p(),i(async()=>{try{n.value=!0;const{data:a}=await f({url:`/views/${x}`,method:"GET"});t.value=a}catch(a){console.error("Error de red:",a)}finally{n.value=!1}}),(a,l)=>{const c=d("a-checkbox-group");return _(),I(N,null,[m(c,{value:s.value,"onUpdate:value":l[0]||(l[0]=u=>s.value=u),name:"checkboxgroup",options:t.value},null,8,["value","options"]),g,r("pre",null,v(s.value),1)],64)}}},U=y(b,[["__scopeId","data-v-4476f302"]]);export{U as default};
