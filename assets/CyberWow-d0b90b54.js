import{r as d,o as m,d as p,e as o,V as r,a2 as i,I as u}from"./index-a2d62d20.js";const g={__name:"CyberWow",setup(f){const a=d({name:"",description:"",image:null});function l(n){const e=n.target.files[0];a.value.image=e}async function s(){const n=new FormData;n.append("name",a.value.name),n.append("description",a.value.description),n.append("image",a.value.image);try{(await fetch("/api/upload",{method:"POST",body:n})).ok?console.log("Datos enviados correctamente"):console.error("Error al enviar los datos")}catch(e){console.error("Error al enviar los datos:",e)}}return(n,e)=>(m(),p("form",{onSubmit:u(s,["prevent"])},[o("div",null,[e[2]||(e[2]=o("label",{for:"name"},"Nombre:",-1)),r(o("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>a.value.name=t),required:""},null,512),[[i,a.value.name]])]),o("div",null,[e[3]||(e[3]=o("label",{for:"description"},"Descripción:",-1)),r(o("textarea",{id:"description","onUpdate:modelValue":e[1]||(e[1]=t=>a.value.description=t)},null,512),[[i,a.value.description]])]),o("div",null,[e[4]||(e[4]=o("label",{for:"image"},"Imagen:",-1)),o("input",{type:"file",id:"image",accept:"image/*",onChange:l},null,32)]),e[5]||(e[5]=o("button",{type:"submit"},"Enviar",-1))],32))}};export{g as default};
