import{C as c}from"./index-f9efa549.js";const a=localStorage.getItem("eToken"),n=localStorage.getItem("eProfile"),l=localStorage.getItem("eRole"),p=localStorage.getItem("eEmail"),i=localStorage.getItem("views"),e=(s,t)=>{try{const o=c.AES.decrypt(s,t).toString(c.enc.Utf8);return o?JSON.parse(o):null}catch(r){return console.error(`Error decrypting data with key ${t}:`,r),null}};a&&e(a,"appToken");n&&e(n,"appProfile");l&&e(l,"appRole");p&&e(p,"appEmail");i&&e(i,"appvistas");
