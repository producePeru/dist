import{r as d,o as m,d as p,e,N as r,Y as i,J as c}from"./index-a89c85d3.js";const u=e("label",{for:"name"},"Nombre:",-1),f=e("label",{for:"description"},"Descripción:",-1),v=e("label",{for:"image"},"Imagen:",-1),g=e("button",{type:"submit"},"Enviar",-1),h={__name:"CyberWow",setup(_){const a=d({name:"",description:"",image:null});function s(n){const o=n.target.files[0];a.value.image=o}async function l(){const n=new FormData;n.append("name",a.value.name),n.append("description",a.value.description),n.append("image",a.value.image);try{(await fetch("/api/upload",{method:"POST",body:n})).ok?console.log("Datos enviados correctamente"):console.error("Error al enviar los datos")}catch(o){console.error("Error al enviar los datos:",o)}}return(n,o)=>(m(),p("form",{onSubmit:c(l,["prevent"])},[e("div",null,[u,r(e("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=t=>a.value.name=t),required:""},null,512),[[i,a.value.name]])]),e("div",null,[f,r(e("textarea",{id:"description","onUpdate:modelValue":o[1]||(o[1]=t=>a.value.description=t)},null,512),[[i,a.value.description]])]),e("div",null,[v,e("input",{type:"file",id:"image",accept:"image/*",onChange:s},null,32)]),g],32))}};export{h as default};