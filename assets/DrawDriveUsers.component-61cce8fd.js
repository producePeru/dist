import{r,a as I,J as N,k as B,b as c,o as O,q as R,w as i,e as l,c as d,i as T,y as g,m as k,p as V,j}from"./index-205a5d88.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const u=a=>(V("data-v-6a9c0127"),a=a(),j(),a),E=u(()=>l("b",null,"Seleccionar todos",-1)),F=u(()=>l("br",null,null,-1)),G=u(()=>l("br",null,null,-1)),J=u(()=>l("br",null,null,-1)),P={__name:"DrawDriveUsers.component",props:["idFile","selectedUsers"],emits:["handleCloseDrawer"],setup(a,{emit:f}){const m=a,b=f,w=JSON.parse(localStorage.getItem("profile")),p=r(!1),_=r(!0),o=r([]),h=r(!1),s=I({indeterminate:!1,checkAll:!1,checkedList:m.selectedUsers}),y=t=>{Object.assign(s,{checkedList:t.target.checked?o.value.map(e=>e.value):[],indeterminate:!1})},v=()=>{s.checkedList=[],_.value=!1,b("handleCloseDrawer")};N(()=>s.checkedList,t=>{t.length===0&&console.log("state.checkedList está vacío"),s.indeterminate=!!t.length&&t.length<o.value.length,s.checkAll=t.length===o.value.length});const D=async()=>{h.value=!0;const t={drive_id:m.idFile,user_ids:s.checkedList};try{const e=await g({url:"drive/visible-users",method:"PUT",data:t});e.status==200&&k.success(e.message),v()}catch{k.error("No tienes permisos")}finally{h.value=!1}},x=async()=>{p.value=!0;try{const t=await g({url:"drive/users",method:"GET"});o.value=t.filter(e=>e.value!==w.user_id)}catch(t){console.error("Error de red:",t)}finally{p.value=!1}};return B(()=>{x()}),(t,e)=>{const C=c("a-checkbox"),U=c("a-checkbox-group"),L=c("a-spin"),S=c("a-button"),A=c("a-drawer");return O(),R(A,{open:_.value,"onUpdate:open":e[2]||(e[2]=n=>_.value=n),title:"Seleccionar usuarios",placement:"right",onClose:v},{default:i(()=>[l("div",null,[d(C,{checked:s.checkAll,"onUpdate:checked":e[0]||(e[0]=n=>s.checkAll=n),indeterminate:s.indeterminate,onChange:y},{default:i(()=>[E]),_:1},8,["checked","indeterminate"])]),F,d(L,{spinning:p.value},{default:i(()=>[d(U,{value:s.checkedList,"onUpdate:value":e[1]||(e[1]=n=>s.checkedList=n),options:o.value,class:"vertical-options"},null,8,["value","options"])]),_:1},8,["spinning"]),G,J,d(S,{class:"btn-produce",type:"primary",loading:h.value,onClick:D},{default:i(()=>[T("GUARDAR")]),_:1},8,["loading"])]),_:1},8,["open"])}}},H=q(P,[["__scopeId","data-v-6a9c0127"]]);export{H as D};
