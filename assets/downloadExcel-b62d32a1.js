import{g as s,D as i}from"./index-3fe9a700.js";const l=s.get("token"),d="https://apituempresa.soporte-pnte.com/api/",p="http://127.0.0.1:8000/api/",h=window.location.hostname=="localhost"||window.location.hostname=="127.0.0.1"?p:d;async function w(t,a,n){try{const e=await i({url:`${h}${t}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},method:"POST",responseType:"blob",data:n}),r=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=r;const c=`${a}.xlsx`;o.setAttribute("download",c),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(e){console.error("Error al descargar el archivo:",e)}}export{w as d};
