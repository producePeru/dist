import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{o as t,d as a,v as N,r as _,b as v,c as e,w as n,t as c,s as r,K as k,i as R,h as S,L,e as u,F as D}from"./index-6c614c87.js";import"./es-71c462d0.js";const O={},T=N('<div class="code-box-title" data-v-0a170e86> Oficina </div><div class="code-box-description" data-v-0a170e86> UNIDAD DE GESTIÓN DE SERVICIOS EMPRESARIALES </div><div class="code-box-title" data-v-0a170e86> Nombre Institución </div><div class="code-box-description" data-v-0a170e86> INDECOPI </div><div class="code-box-title" data-v-0a170e86> Componente </div><div class="code-box-description" data-v-0a170e86> DESARROLLO PRODUCTIVO </div><div class="code-box-title" data-v-0a170e86> Responsable del PNTE </div><div class="code-box-description" data-v-0a170e86> HANIA PEREZ DE CUÉLLAR LUBIENSKA </div><div class="code-box-title" data-v-0a170e86> Representante de la empresa aliada </div><div class="code-box-description" data-v-0a170e86> HANIA PEREZ DE CUÉLLAR LUBIENSKA </div><div class="code-box-title" data-v-0a170e86> Correo </div><div class="code-box-description" data-v-0a170e86> esteesuncorreo@ggmail.com </div><div class="code-box-title" data-v-0a170e86> Proponente </div><div class="code-box-description" data-v-0a170e86> HANIA PEREZ DE CUÉLLAR LUBIENSKA </div><div class="code-box-title" data-v-0a170e86> Nombre del Convenio </div><div class="code-box-description" data-v-0a170e86> HANIA PEREZ DE CUÉLLAR LUBIENSKA </div><div class="code-box-title" data-v-0a170e86> Número Telefónico de contácto </div><div class="code-box-description" data-v-0a170e86> 69969459494 </div><div class="code-box-title" data-v-0a170e86> Observaciones </div><div class="code-box-description" data-v-0a170e86> Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia </div>',20),P=[T];function U(f,i){return t(),a("div",null,P)}const w=C(O,[["render",U],["__scopeId","data-v-0a170e86"]]),K={key:0},V={__name:"ConvenioTab2",setup(f){const i=[{title:"#",dataIndex:"options",fixed:"left",width:0},{title:"Descripción del compromiso",dataIndex:"pdf",fixed:"left",width:200},{title:"Aliado / PNTE",dataIndex:"socialReason",fixed:"left",width:80},{title:"Avance",dataIndex:"category",align:"center",width:80},{title:"Porcentaje",dataIndex:"type",align:"center",width:80},{title:"Detalles",dataIndex:"department",align:"center",width:80}],s=_([]);return(l,d)=>{const p=v("a-table");return t(),a("section",null,[e(p,{bordered:"",columns:i,"data-source":s.value,pagination:!1},{bodyCell:n(({column:x,record:I})=>[x.dataIndex==="idx"?(t(),a("span",K,c(I.key),1)):r("",!0)]),_:1},8,["data-source"])])}}};const B=u("br",null,null,-1),M={key:0},F={key:1},$=u("span",{class:"btn-uppdf"},"Subir archivo PDF",-1),H=[$],Z={key:2},j={key:3},G={key:4},q={key:5},W=u("p",null,"Selecciona la fecha de inicio del informe",-1),X=u("br",null,null,-1),z=u("br",null,null,-1),J={__name:"ConvenioTab3",setup(f){k.locale("es");const i=_(1e3),s=_(!1),l=_(),d=_([]),p=[{title:"Fecha de informe",dataIndex:"date",fixed:"left",align:"center"},{title:"Archivo del Primer Trimestre",dataIndex:"first",align:"center"},{title:"Archivo del Segundo Trimestre",dataIndex:"second",align:"center"},{title:"Archivo del Tercer Trimestre",dataIndex:"third",align:"center"},{title:"Archivo del Cuarto Trimestre",dataIndex:"fourth",align:"center"},{title:"Archivo de cierre",dataIndex:"closure",align:"center"}],x=()=>{s.value=!0},I=()=>{s.value=!1;const h={date:l.value,first:null,second:null,third:null,fourth:null,closure:null};d.value=[...d.value,h]};return(h,m)=>{const E=v("a-button"),A=v("a-table"),g=v("a-date-picker"),y=v("a-modal");return t(),a(D,null,[e(E,{class:"editable-add-btn",style:{"margin-bottom":"8px"},onClick:x},{default:n(()=>[R("Agregar")]),_:1}),B,e(A,{bordered:"",pagination:!1,scroll:{x:i.value},"data-source":d.value,columns:p},{bodyCell:n(({column:o,record:b})=>[o.dataIndex=="date"?(t(),a("div",M,c(b.date),1)):r("",!0),o.dataIndex=="first"?(t(),a("div",F,H)):r("",!0),o.dataIndex=="second"?(t(),a("div",Z,c(b.date),1)):r("",!0),o.dataIndex=="third"?(t(),a("div",j,c(b.date),1)):r("",!0),o.dataIndex=="fourth"?(t(),a("div",G,c(b.date),1)):r("",!0),o.dataIndex=="closure"?(t(),a("div",q,c(b.date),1)):r("",!0)]),_:1},8,["scroll","data-source"]),e(y,{open:s.value,"onUpdate:open":m[1]||(m[1]=o=>s.value=o),title:"Agregar un informe",onOk:I,width:"400px","ok-text":"Crear"},{default:n(()=>[W,e(g,{locale:S(L),value:l.value,"onUpdate:value":m[0]||(m[0]=o=>l.value=o),class:"w-100"},null,8,["locale","value"]),X,z]),_:1},8,["open"]),u("pre",null,c(d.value),1)],64)}}},te={__name:"ListaConvenioDetalle",setup(f){const i=_("1");return(s,l)=>{const d=v("a-tab-pane"),p=v("a-tabs");return t(),a("section",null,[e(p,{activeKey:i.value,"onUpdate:activeKey":l[0]||(l[0]=x=>i.value=x)},{default:n(()=>[e(d,{key:"1",tab:"SEGUIMIENTO DEL CONVENIO"},{default:n(()=>[e(w)]),_:1}),e(d,{key:"2",tab:"COMPROMISOS","force-render":""},{default:n(()=>[e(V)]),_:1}),e(d,{key:"3",tab:"INFORMES"},{default:n(()=>[e(J)]),_:1})]),_:1},8,["activeKey"])])}}};export{te as default};
