import{Y as n,m as i,a as s,M as l}from"./index-a16b7625.js";const p=n("pagestore",{state:()=>({count:5,userPhoto:null,userName:null}),getters:{getPhotoUser(e){if(e.userPhoto)return e.userPhoto;if(localStorage.getItem("photoUser"))return JSON.parse(localStorage.getItem("photoUser"))},getNameUser(e){return e.userName?e.userName:JSON.parse(localStorage.getItem("info"))}},actions:{async logout(){const e="https://programa.soporte-pnte.com/",o="http://127.0.0.1:5173/",r=window.location.hostname=="127.0.0.1"?o:e;try{await i({url:"/logout",method:"POST"})&&(s.remove("token"),localStorage.clear(),window.location.href=r)}catch(t){console.error("Error de red:",t)}},async setPhotoProfile(e){e&&(localStorage.setItem("photoUser",JSON.stringify(e)),this.userPhoto=e)},async setUserName(e){if(e){let o=JSON.parse(localStorage.getItem("info"));o.name=e,localStorage.setItem("info",JSON.stringify(o)),this.userName=e}},async imgProfile(){try{const e=window.location.hostname=="127.0.0.1"?"http://127.0.0.1:8000/api/v1":"https://apituempresa.soporte-pnte.com/api/v1",o=s.get("token"),r=JSON.parse(localStorage.getItem("info")),t=await l.get(`${e}/profile-photo/${r.id}/${r.dni}`,{responseType:"blob",headers:{Accept:"application/json",Authorization:`Bearer ${o}`}});if(console.log("QUEEE",t.data.type),t.data.type=="application/json")return console.log("none");{const a=window.URL.createObjectURL(new Blob([t.data]));this.userPhoto=a,localStorage.setItem("photoUser",JSON.stringify(a))}}catch(e){console.error("Error al descargar el archivo",e)}}}});export{p as u};
