import{l as W,aa as x,r as X,b as i,o as u,v as d,w as l,e as _,d as U,F as q,q as Z,c as r,h as n,x as c,L as ee,H as ae,t as g,i as ne}from"./index-76bfbfaa.js";import"./es-6ee62255.js";import{Q as te}from"./quill.snow-7efcbf62.js";/* empty css             */const oe={class:"component-table"},le={style:{"text-align":"center"}},se={class:"select-notaries"},re={class:"name"},me={class:"city"},ue={class:"address"},ie="DD/MM/YYYY",be={__name:"FormComponent",props:["fields","options","resetSelect","btnSaveName"],emits:["handleInputEvent","handleChangeSelect","handleFocusSelect","handleBlurSelect","handleChangeClock","onSubmit"],setup(f,{emit:w}){W.locale("es");const C=f,b=w,t=x("formState"),N=x("loadingState"),D=(o,m)=>{const p=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return m.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(p)},z={theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]},contentType:"html"},B=X([{dates:new Date}]),L=o=>{b("handleInputEvent",o)},k=(o,m)=>{b("handleChangeSelect",o,m)},F=o=>{b("handleFocusSelect",o)},S=o=>{b("handleBlurSelect",o)},V=o=>{b("handleChangeClock",o)},$=o=>{const m=t[o]?t[o].trim().toUpperCase():"";t[o]=m},E=(o,m)=>{const p=o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=m.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),h=m.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),y=m.province.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),v=m.district.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return s.includes(p)||h.includes(p)||y.includes(p)||v.includes(p)},I=()=>{const o=document.getElementsByClassName("ant-drawer-body")[0];o&&(o.scrollTop=0)},T=()=>{b("onSubmit")};return(o,m)=>{const p=i("a-input"),s=i("a-form-item"),h=i("a-select"),y=i("a-config-provider"),v=i("a-input-number"),H=i("a-date-picker"),M=i("VDatePicker"),P=i("a-textarea"),Y=i("a-time-range-picker"),O=i("a-button"),Q=i("a-form");return u(),d(Q,{layout:"vertical",model:n(t),autocomplete:"off",onFinish:T,onFinishFailed:I},{default:l(()=>[_("div",oe,[(u(!0),U(q,null,Z(C.fields,(e,j)=>(u(),U(q,{key:j},[e.type==="iText"?(u(),d(s,{key:0,name:e.name,label:e.label,rules:e.rules?e.rules:[{required:e.required,message:e.message,max:e.max,min:e.min}]},{default:l(()=>[r(p,{onInput:a=>L(e.name),value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,disabled:e.disabled,maxlength:e.max,placeholder:e.placeholder,onBlur:a=>$(e.name)},null,8,["onInput","value","onUpdate:value","disabled","maxlength","placeholder","onBlur"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iSelect"?(u(),d(s,{key:1,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(y,null,{renderEmpty:l(()=>[_("div",le,[r(n(ee)),m[0]||(m[0]=_("p",null,"Cargando...",-1))])]),default:l(()=>[r(h,{value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,"show-search":"",options:f.options[e.name],disabled:e.disabled,"filter-option":D,onFocus:a=>F(e.name),onBlur:a=>S(e.name),onChange:a=>k(e.name,n(t)[e.name])},null,8,["value","onUpdate:value","options","disabled","onFocus","onBlur","onChange"])]),_:2},1024)]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iNumber"?(u(),d(s,{key:2,name:e.name,label:e.label,rules:e.rules},{default:l(()=>[r(v,{style:{width:"100%"},value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,maxlength:e.maxlength},null,8,["value","onUpdate:value","maxlength"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iDate"?(u(),d(s,{key:3,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(H,{locale:n(ae),value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,style:{width:"100%"},format:ie,placeholder:"día/mes/año",disabled:e.disabled,onChange:a=>V(e.name),"disabled-date":e.disabledDate},null,8,["locale","value","onUpdate:value","disabled","onChange","disabled-date"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iSelectNotary"?(u(),d(s,{key:4,class:"item-max",name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(h,{value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,options:f.options[e.name],"option-label-prop":"name","show-search":"","filter-option":E,onFocus:a=>F(e.name),onBlur:a=>S(e.name),onChange:a=>k(e.name,n(t)[e.name])},{option:l(({value:a,name:A,city:G,province:J,district:K,address:R})=>[_("div",se,[_("span",re,g(A),1),_("span",me,g(G)+" - "+g(J)+" - "+g(K),1),_("span",ue,g(R),1)])]),_:2},1032,["value","onUpdate:value","options","onFocus","onBlur","onChange"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iMoney"?(u(),d(s,{key:5,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(v,{min:1,style:{width:"100%"},value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,formatter:a=>`S/ ${a}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:a=>a.replace(/S\/\s?|(,*)/g,"")},null,8,["value","onUpdate:value","formatter","parser"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iQuillEditor"?(u(),d(s,{key:6,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(n(te),{class:"quill-height-200",content:n(t)[e.name],"onUpdate:content":a=>n(t)[e.name]=a,options:z,contentType:"html"},null,8,["content","onUpdate:content"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iDatePicker"?(u(),d(s,{key:7,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(M,{modelValue:n(t)[e.name],"onUpdate:modelValue":a=>n(t)[e.name]=a,modelModifiers:{range:!0},mode:"date",attributes:B.value},null,8,["modelValue","onUpdate:modelValue","attributes"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iTextArea"?(u(),d(s,{key:8,name:e.name,label:e.label,rules:[{required:e.required,message:e.message,max:e.max}]},{default:l(()=>[r(P,{value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,rows:e.rows},null,8,["value","onUpdate:value","rows"])]),_:2},1032,["name","label","rules"])):c("",!0),e.type==="iHour"?(u(),d(s,{key:9,name:e.name,label:e.label,rules:[{required:e.required,message:e.message}]},{default:l(()=>[r(Y,{minuteStep:30,value:n(t)[e.name],"onUpdate:value":a=>n(t)[e.name]=a,format:"HH:mm"},null,8,["value","onUpdate:value"])]),_:2},1032,["name","label","rules"])):c("",!0)],64))),128))]),r(s,null,{default:l(()=>[r(O,{class:"btn-produce",type:"primary","html-type":"submit",loading:n(N)},{default:l(()=>[ne(g(C.btnSaveName),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}};export{be as _};
