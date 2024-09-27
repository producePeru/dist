import{L as Z,r as t,a as ee,b as n,o as r,p as C,w as s,c as o,e as c,d as m,F as I,v as ae,h as M,q as f,i as N,y as A,m as y,u as te,s as ne,I as oe,j as se,t as L,a4 as re,V as le}from"./index-19dbe2bd.js";import{u as ue}from"./selectes-c649ed57.js";import"./es-7f7a9e94.js";const ie={token:{type:"iText",label:"Token",name:"token",required:!0,message:"Escribir el token",disabled:!0},name:{type:"iText",label:"Nombre",name:"name",required:!0,message:"Escribir nombre",disabled:!0}},de={class:"grid-convenios"},ce={__name:"NuevoToken",emits:["closeDraw"],setup(V,{emit:D}){Z.locale("es");const p=D,d=t(!1),k=t(!1),u=ee({}),w=()=>{u.token=null,u.name=null},h=async()=>{d.value=!0;const E={token:u.token,name:u.name};try{const i=await A({url:"token/create",method:"POST",data:E});i.status==200&&(y.success(i.message),p("closeDraw",!0),w())}catch(i){y.error("Se originó un error: "+i.message)}finally{d.value=!1}},_=()=>{y.error("Debes de completar todos los espacios requeridos")};return(E,i)=>{const S=n("a-input"),v=n("a-form-item"),O=n("a-button"),x=n("a-form"),R=n("a-spin");return r(),C(R,{spinning:k.value},{default:s(()=>[o(x,{layout:"vertical",model:u,name:"basic",autocomplete:"off",onFinish:h,onFinishFailed:_},{default:s(()=>[c("div",de,[(r(!0),m(I,null,ae(M(ie),(l,q)=>(r(),m(I,{key:q},[l.type==="iText"?(r(),C(v,{key:0,name:l.name,label:l.label,rules:[{required:l.required,message:l.message,max:l.max}]},{default:s(()=>[o(S,{value:u[l.name],"onUpdate:value":B=>u[l.name]=B,maxlength:l.max},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):f("",!0)],64))),128))]),o(v,null,{default:s(()=>[o(O,{type:"primary","html-type":"submit",loading:d.value},{default:s(()=>i[0]||(i[0]=[N("GUARDAR")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])}}};const me={key:1},pe={key:1},_e={class:"paginator"},ye={__name:"MisTokens",setup(V){const D=ue();D.$patch({cdes:D.cdes});const p=t(!1),d=t(1);t(0);const k=t(50),u=t([]),w=t(!1),h=t(0);te();const _=t({page:0}),E=t("token/list"),i=t(1200),S=t(window.innerHeight-100),v=t(!1),O=[{title:"#",dataIndex:"idx",fixed:"left",align:"center",width:20},{title:"NOMBRE",dataIndex:"name",width:60},{title:"TOKEN",dataIndex:"token",width:120},{title:"TOTAL",dataIndex:"count",width:30,align:"center"},{title:"CREADO",dataIndex:"date",width:50},{title:"ACTIVADO",dataIndex:"status",width:30,align:"center"},{title:"TEST",dataIndex:"test",width:30,align:"center"}],x=()=>{S.value=window.innerHeight-300};ne(()=>{window.removeEventListener("resize",x)});const R=a=>le(a).format("DD/MM/YYYY HH:mm A"),l=async a=>{await A({url:`token/update-status/${a.id}`,method:"PUT"})},q=async()=>{v.value=!0;try{const a=await A({url:"user/only-dni/45424747",method:"GET"});if(a.status==429)return y.warning(a.message);if(a.status==401)return y.error(a.message);y.success("Puedes usar este token")}catch(a){console.error("Error de red:",a)}finally{v.value=!1}},B=()=>{p.value=!0},P=()=>{F(),p.value=!1},Y=a=>{_.value.page=a,F()},F=async a=>{try{w.value=!0;let e;e=_.value.page==0?"":_.value,e=a?{...e,...a}:e;const b=await A({url:E.value,method:"GET",params:e}),T=b.data;u.value=T.data,h.value=T.total,k.value=T.per_page,d.value=b.id_active}catch(e){console.error("Error de red:",e)}finally{w.value=!1}},$=oe(()=>a=>_.value.page*k.value+a+1);return se(()=>{F(),window.addEventListener("resize",x),x()}),(a,e)=>{const b=n("a-button"),T=n("a-col"),H=n("a-row"),G=n("a-radio"),j=n("a-radio-group"),K=n("a-table"),X=n("a-tag"),J=n("a-pagination"),Q=n("a-drawer");return r(),m(I,null,[c("div",null,[e[4]||(e[4]=c("h3",{class:"title-produce"},"TOKENS",-1)),o(H,{style:{margin:"1rem 0"}},{default:s(()=>[o(T,{xs:24,md:12,lg:18},{default:s(()=>[o(b,{type:"primary",onClick:B,style:{"margin-right":".5rem"}},{default:s(()=>e[2]||(e[2]=[N("Nuevo Token")])),_:1}),e[3]||(e[3]=c("a",{href:"https://apis.net.pe/app/account/signup",target:"_blank"},"Crear cuenta",-1))]),_:1})]),_:1}),o(K,{bordered:"",scroll:{x:i.value,y:S.value},class:"table-users",columns:O,"data-source":u.value,pagination:!1,loading:w.value,size:"small"},{bodyCell:s(({column:g,record:z,index:W})=>[g.dataIndex=="idx"?(r(),m(I,{key:0},[N(L($.value(W)),1)],64)):f("",!0),g.dataIndex=="date"?(r(),m("div",me,L(R(z.created_at)),1)):f("",!0),g.dataIndex=="status"?(r(),C(j,{key:2,value:d.value,"onUpdate:value":e[0]||(e[0]=U=>d.value=U),onChange:U=>l(z)},{default:s(()=>[o(G,{value:z.id},null,8,["value"])]),_:2},1032,["value","onChange"])):f("",!0),g.dataIndex=="test"?(r(),m(I,{key:3},[d.value==z.id?(r(),C(b,{key:0,primary:"",type:"text",onClick:q,style:{"font-size":"13px"}},{default:s(()=>[v.value?(r(),C(M(re),{key:0})):(r(),m("span",pe,"PROBAR"))]),_:1})):f("",!0)],64)):f("",!0)]),_:1},8,["scroll","data-source","loading"])]),c("div",_e,[c("span",null,[o(X,{color:"blue"},{default:s(()=>[c("b",null,L(h.value),1)]),_:1}),e[5]||(e[5]=N("Itens"))]),o(J,{size:"small",total:h.value,pageSize:k.value,onChange:Y,showSizeChanger:!1},null,8,["total","pageSize"])]),o(Q,{open:p.value,"onUpdate:open":e[1]||(e[1]=g=>p.value=g),class:"draw-notary","root-class-name":"root-class-name",title:"Tokens",placement:"right",width:"500"},{default:s(()=>[o(ce,{onCloseDraw:P})]),_:1},8,["open"])],64)}}};export{ye as default};
