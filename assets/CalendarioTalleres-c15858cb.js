import{K as S,r as u,k as B,b as p,o as s,d as r,e as a,c as v,w as m,h as I,F as f,B as N,x as R,t as d,s as $,L as V,i,q,p as A,j as F,f as j}from"./index-73efcc3b.js";import"./es-cbbc4e5d.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const n=c=>(A("data-v-304e5a3e"),c=c(),F(),c),K=n(()=>a("h3",null,"CALENDARIO DE TALLERES",-1)),M=n(()=>a("br",null,null,-1)),P={style:{width:"100%",border:"1px solid #d9d9d9",borderRadius:"4px",padding:"1rem"}},U={class:"events"},O={key:0,class:"notes-month"},W=n(()=>a("span",null,"Backlog number",-1)),z={key:0,class:"details-modal"},H=n(()=>a("b",null,"Tema",-1)),J=n(()=>a("b",null,"Fecha y hora del taller: ",-1)),Q=n(()=>a("b",null,"Exponente: ",-1)),X=n(()=>a("b",null,"LInk:",-1)),Y=["href"],Z={__name:"CalendarioTalleres",setup(c){S.locale("es");const h=u(!1),k=u(),y=u({}),o=u(),x=e=>{const t=`${e.year()}-${e.month()+1}-${e.date()}`;return y.value[t]||[]},g=e=>({8:"20 talleres",9:"10 talleres"})[e.month()],C=(e,t)=>{console.log(e,t)},D=e=>{b(e.slug),h.value=!0},b=async e=>{o.value=null;try{const t=await j({url:`/get-workshop-slug/${e}`,method:"GET"});o.value=t.workshop}catch(t){console.error("Error de red:",t)}};return B(async()=>{try{const e=await N({url:"/workshop/bydate",method:"GET"});y.value=e}catch(e){console.error("Error de red:",e)}}),(e,t)=>{const w=p("a-badge"),E=p("a-calendar"),T=p("a-skeleton"),L=p("a-modal");return s(),r(f,null,[K,M,a("div",P,[v(E,{locale:I(V),value:k.value,"onUpdate:value":t[0]||(t[0]=l=>k.value=l),onPanelChange:C},{dateCellRender:m(({current:l})=>[a("ul",U,[(s(!0),r(f,null,R(x(l),_=>(s(),r("li",{key:_.content},[v(w,{class:"hover-workshop",status:_.type,text:_.content,onClick:ae=>D(_)},null,8,["status","text","onClick"])]))),128))])]),monthCellRender:m(({current:l})=>[g(l)?(s(),r("div",O,[a("section",null,d(g(l)),1),W])):$("",!0)]),_:1},8,["locale","value"])]),v(L,{open:h.value,"onUpdate:open":t[1]||(t[1]=l=>h.value=l),title:"Detalles del taller",width:"400px",footer:null},{default:m(()=>[o.value?(s(),r("div",z,[H,i(),a("span",null,d(o.value.title),1),J,i(),a("span",null,d(o.value.workshop_date),1),Q,i(),a("span",null,d(o.value.exponent_name),1),X,i(),a("a",{href:o.value.link,target:"_blank"},d(o.value.link),9,Y)])):(s(),q(T,{key:1}))]),_:1},8,["open"])],64)}}},ne=G(Z,[["__scopeId","data-v-304e5a3e"]]);export{ne as default};
