import{r as o,E as c,j as i,b as p,o as d,d as _,c as m,e as l,t as N,F as v,J as I}from"./index-ec966cf5.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./quill-blot-formatter-e18a970d.js";const j="eyJpdiI6IlJ3bHkySWFmU2d3V3dtbVh4YzhsYnc9PSIsInZhbHVlIjoiTGtUNHdIajd6WGFRendSaWtxTDV6Zz09IiwibWFjIjoiNjllN2NkODNmNGE2YmVjMTUyZjViNjAxY2I1NmQ0MTNjNDgwMTgyMzdlNzYwYjg1YjI0NmM0NWUxZTQ0YTE1NyIsInRhZyI6IiJ9",y={__name:"VistasUsuarios",setup(V){const t=o([]),s=o([]),n=o(!1);return o(!1),c(),i(async()=>{try{n.value=!0;const{data:e}=await I({url:`/views/${j}`,method:"GET"});t.value=e}catch(e){console.error("Error de red:",e)}finally{n.value=!1}}),(e,a)=>{const r=p("a-checkbox-group");return d(),_(v,null,[m(r,{value:s.value,"onUpdate:value":a[0]||(a[0]=u=>s.value=u),name:"checkboxgroup",options:t.value},null,8,["value","options"]),a[1]||(a[1]=l("button",null,"ASIGNAR",-1)),l("pre",null,N(s.value),1)],64)}}},k=f(y,[["__scopeId","data-v-4476f302"]]);export{k as default};
