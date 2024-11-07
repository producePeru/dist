import{r,a as N,Q as S,j as B,b as o,o as G,p as O,w as c,e as l,c as i,i as R,G as _,m as g}from"./index-6e4bbc85.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const V={__name:"DrawDriveUsers.component",props:["idFile","selectedUsers"],emits:["handleCloseDrawer"],setup(f,{emit:h}){const m=f,k=h,b=JSON.parse(localStorage.getItem("profile")),d=r(!1),u=r(!0),n=r([]),p=r(!1),s=N({indeterminate:!1,checkAll:!1,checkedList:m.selectedUsers}),w=t=>{Object.assign(s,{checkedList:t.target.checked?n.value.map(e=>e.value):[],indeterminate:!1})},v=()=>{s.checkedList=[],u.value=!1,k("handleCloseDrawer")};S(()=>s.checkedList,t=>{t.length===0&&console.log("state.checkedList está vacío"),s.indeterminate=!!t.length&&t.length<n.value.length,s.checkAll=t.length===n.value.length});const y=async()=>{p.value=!0;const t={drive_id:m.idFile,user_ids:s.checkedList};try{const e=await _({url:"drive/visible-users",method:"PUT",data:t});e.status==200&&g.success(e.message),v()}catch{g.error("No tienes permisos")}finally{p.value=!1}},D=async()=>{d.value=!0;try{const t=await _({url:"drive/users",method:"GET"});n.value=t.filter(e=>e.value!==b.user_id)}catch(t){console.error("Error de red:",t)}finally{d.value=!1}};return B(()=>{D()}),(t,e)=>{const x=o("a-checkbox"),C=o("a-checkbox-group"),U=o("a-spin"),L=o("a-button"),A=o("a-drawer");return G(),O(A,{open:u.value,"onUpdate:open":e[2]||(e[2]=a=>u.value=a),title:"Seleccionar usuarios",placement:"right",onClose:v},{default:c(()=>[l("div",null,[i(x,{checked:s.checkAll,"onUpdate:checked":e[0]||(e[0]=a=>s.checkAll=a),indeterminate:s.indeterminate,onChange:w},{default:c(()=>e[3]||(e[3]=[l("b",null,"Seleccionar todos",-1)])),_:1},8,["checked","indeterminate"])]),e[5]||(e[5]=l("br",null,null,-1)),i(U,{spinning:d.value},{default:c(()=>[i(C,{value:s.checkedList,"onUpdate:value":e[1]||(e[1]=a=>s.checkedList=a),options:n.value,class:"vertical-options"},null,8,["value","options"])]),_:1},8,["spinning"]),e[6]||(e[6]=l("br",null,null,-1)),e[7]||(e[7]=l("br",null,null,-1)),i(L,{class:"btn-produce",type:"primary",loading:p.value,onClick:y},{default:c(()=>e[4]||(e[4]=[R("GUARDAR")])),_:1},8,["loading"])]),_:1},8,["open"])}}},F=T(V,[["__scopeId","data-v-6a9c0127"]]);export{F as D};