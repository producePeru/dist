import{r as p,a as se,I as ie,s as de,j as re,b as r,o as l,d as c,e as m,c as o,w as a,i as u,F as _,y as U,t as s,q as i,p as x,h as B,U as ue,J as ce,P as pe,Z as me,m as _e}from"./index-7992612a.js";import{S as fe}from"./DrawerSolicitante.componente-5bcd0d66.js";import{u as ge}from"./selectes-6874d696.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";import{M as Ie}from"./MoreOutlined-7ec6a947.js";import"./es-6ddf0d13.js";const xe={key:7,class:"lowercase"},ye={key:10,class:"uppercase"},we=["onClick"],he={class:"paginator-asesories"},V=50,Se={__name:"SolicitantesLista",setup(ke){JSON.parse(localStorage.getItem("profile")),ge();const C=p(window.innerHeight-100),F=[{title:"#",fixed:"left",dataIndex:"idx",align:"center",width:70},{title:"TIPO DOCUMENTO",fixed:"left",dataIndex:"tdocument",align:"center",width:140},{title:"NUM. DOC",dataIndex:"documentnumber",fixed:"left",width:120},{title:"NOMBRES",dataIndex:"name",width:170},{title:"APELLIDOS",dataIndex:"apellidos",width:170},{title:"REGIÓN",dataIndex:"city",align:"center",width:150},{title:"PROVINCIA",dataIndex:"province",align:"center",width:150},{title:"DISTRITO",dataIndex:"district",align:"center",width:150},{title:"CELULAR",dataIndex:"phone",align:"center",width:100},{title:"EMAIL",dataIndex:"email",width:240},{title:"GÉNERO",dataIndex:"gender",align:"center",width:90},{title:"DISCAPACIDAD",dataIndex:"sickx",align:"center",width:120},{title:"HIJOS",dataIndex:"hasSoon",align:"center",width:120},{title:"REGISTRADO POR",dataIndex:"registerby",width:200},{title:"",dataIndex:"actions",width:50,align:"center",fixed:"right"}],f=se({names:""}),h=p(0),g=p({page:0}),G=p(1200),b=p([]),S=p(!1),y=p(!1),E=p(null);p(null);const H=()=>{f.names||console.log("Res")},J=d=>({DNI:"blue",CE:"yellow",PAS:"red",PTP:"purple"})[d],$=()=>{v(f.names)},q=d=>{g.value.page=d,v()},k=()=>{C.value=window.innerHeight-280},j=()=>{v(),y.value=!1},Q=async d=>{try{const e=await U({url:`person/delete/${d.id}`,method:"DELETE"});e.status==500?me.warning({title:"Aviso",content:e.message}):(v(),_e.success(e.message))}catch(e){console.error("Error de red:",e)}},X=d=>{E.value=d,y.value=!0},Y=ie(()=>d=>((g.value.page==0?1:g.value.page)-1)*V+d+1),v=async d=>{try{S.value=!0;let e;d?e={...f.names&&{search:d},page:1}:e={...g.value.page!=0&&{page:g.value.page}};const w=await U({url:"person/list",method:"GET",params:e});b.value=w.data,h.value=w.total}catch(e){console.error("Error de red:",e)}finally{S.value=!1}};return de(()=>{window.removeEventListener("resize",k)}),re(()=>{window.addEventListener("resize",k),k(),v()}),(d,e)=>{const w=r("a-input"),O=r("a-form-item"),D=r("a-button"),Z=r("a-form"),I=r("a-tag"),N=r("a-menu-item"),K=r("a-popconfirm"),W=r("a-menu"),ee=r("a-dropdown"),te=r("a-table"),ae=r("a-pagination"),ne=r("a-drawer");return l(),c(_,null,[m("div",null,[e[7]||(e[7]=m("h3",{class:"title-produce"},"SOLICITANTES",-1)),o(Z,{layout:"inline",model:f,onFinish:$,class:"form-filter"},{default:a(()=>[o(O,null,{default:a(()=>[o(w,{value:f.names,"onUpdate:value":e[0]||(e[0]=n=>f.names=n),placeholder:"BUSCAR por Nombres o Apellidos",style:{width:"240px"},onInput:H},null,8,["value"])]),_:1}),o(O,null,{default:a(()=>[o(D,{type:"primary","html-type":"submit",disabled:f.names===""},{default:a(()=>e[3]||(e[3]=[u(" BUSCAR ")])),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"]),o(te,{bordered:"",scroll:{x:G.value,y:C.value},class:"solicitantes-table",columns:F,"data-source":b.value,pagination:!1,loading:S.value,size:"small"},{bodyCell:a(({column:n,record:t,index:oe})=>{var A,R,L,T,P,z,M;return[n.dataIndex=="idx"?(l(),c(_,{key:0},[u(s(Y.value(oe)),1)],64)):i("",!0),n.dataIndex=="tdocument"?(l(),x(I,{key:1,color:J(t.typedocument.avr)},{default:a(()=>[u(s(t.typedocument.avr),1)]),_:2},1032,["color"])):i("",!0),n.dataIndex=="apellidos"?(l(),c(_,{key:2},[u(s(t.lastname)+" "+s(t.middlename),1)],64)):i("",!0),n.dataIndex=="city"?(l(),c(_,{key:3},[u(s((A=t.city)==null?void 0:A.name),1)],64)):i("",!0),n.dataIndex=="province"?(l(),c(_,{key:4},[u(s((R=t.province)==null?void 0:R.name),1)],64)):i("",!0),n.dataIndex=="district"?(l(),c(_,{key:5},[u(s((L=t.district)==null?void 0:L.name),1)],64)):i("",!0),n.dataIndex=="gender"?(l(),c(_,{key:6},[u(s((T=t.gender)==null?void 0:T.name),1)],64)):i("",!0),n.dataIndex=="email"?(l(),c("span",xe,s(t.email),1)):i("",!0),n.dataIndex=="sickx"?(l(),x(I,{key:8,color:t.sick=="no"?"blue":"pink"},{default:a(()=>[u(s(t.sick=="no"?"NO":"SI"),1)]),_:2},1032,["color"])):i("",!0),n.dataIndex=="hasSoon"?(l(),c(_,{key:9},[t.hasSoon=="no"?(l(),x(I,{key:0,color:"pink"},{default:a(()=>e[4]||(e[4]=[u("NO")])),_:1})):i("",!0),t.hasSoon=="si"?(l(),x(I,{key:1,color:"green"},{default:a(()=>e[5]||(e[5]=[u("SI")])),_:1})):i("",!0)],64)):i("",!0),n.dataIndex=="registerby"?(l(),c("span",ye,s((P=t.user[0])==null?void 0:P.profile.name)+" "+s((z=t.user[0])==null?void 0:z.profile.lastname)+" "+s((M=t.user[0])==null?void 0:M.profile.middlename),1)):i("",!0),n.dataIndex=="actions"?(l(),x(ee,{key:11,trigger:["click"]},{overlay:a(()=>[o(W,null,{default:a(()=>[o(N,null,{default:a(()=>[m("a",{onClick:le=>X(t)},"Editar",8,we)]),_:2},1024),o(N,null,{default:a(()=>[o(K,{title:"¿Seguro de eliminar?",onConfirm:le=>Q(t)},{icon:a(()=>[o(B(ue),{style:{color:"red"}})]),default:a(()=>[e[6]||(e[6]=m("a",null,"Eliminar",-1))]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[m("a",{class:"ant-dropdown-link",onClick:e[1]||(e[1]=ce(()=>{},["prevent"]))},[o(D,{shape:"circle",icon:pe(B(Ie)),size:"small"},null,8,["icon"])])]),_:2},1024)):i("",!0)]}),_:1},8,["scroll","data-source","loading"])]),m("div",he,[m("span",null,[o(I,{color:"blue"},{default:a(()=>[m("b",null,s(h.value),1)]),_:1}),e[8]||(e[8]=u("Solicitantes"))]),o(ae,{size:"small",total:h.value,pageSize:V,onChange:q,showSizeChanger:!1},null,8,["total"])]),o(ne,{width:"600",open:y.value,"onUpdate:open":e[2]||(e[2]=n=>y.value=n),class:"draw-notary","root-class-name":"root-class-name",title:"Datos del solicitante",placement:"right"},{default:a(()=>[o(fe,{onCloseDraw:j,updateValues:E.value},null,8,["updateValues"])]),_:1},8,["open"])],64)}}},Ae=ve(Se,[["__scopeId","data-v-cb5d6a55"]]);export{Ae as default};
