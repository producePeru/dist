const i=JSON.parse(localStorage.getItem("role")),a={dni:{type:"iTextLol",label:"Núm. documento Identidad",name:"dni",required:!0,message:"Escribir número de documento",disabled:!1,placeholder:"Número documento"},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar la modalidad",disabled:!!i.some(e=>e.id===7)},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia del negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito del negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Dirección del negocio",name:"address",required:!0,message:"Digitar la dirección del negocio",disabled:!1},regime_id:{type:"iSelect",label:"Tipo de régimen societario",name:"regime_id",required:!0,message:"Seleccionar el régimen societario",disabled:!1},nameMype:{type:"iText",label:"Nombre empresa",name:"nameMype",required:!0,message:"Escribir nombre de la empresa",disabled:!1},ruc:{type:"iNumber",label:"Número de RUC",name:"ruc",required:!1,message:"Escribir número de RUC",disabled:!1,max:11,min:11},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},notary_id:{type:"iSelect",label:"Notaría",name:"notary_id",required:!0,message:"Seleccionar una notaría",disabled:!!i.some(e=>e.id===7)},numbernotary:{type:"iText",label:"Número solicitud constancia",name:"numbernotary",required:!0,message:"Escribir número de solicitud de constancia",disabled:!1},dateReception:{type:"iDate",label:"Fecha de Recepcion todo OK",name:"dateReception",required:!1,message:"Escribir el código SID sunarp",disabled:!1},dateTramite:{type:"iDate",label:"Fec. trámite SID SUNARP-SUNAT",name:"dateTramite",required:!1,message:"Escribir el código SID sunarp",disabled:!1},isbic:{type:"iSelect",label:"¿Es una sociedad BIC?",name:"isbic",required:!1,message:"Buscar BIC",disabled:!1},typecapital_id:{type:"iSelect",label:"Tipo de aporte de capital",name:"typecapital_id",required:!1,message:"Seleccionar BIC",disabled:!1},montocapital:{type:"iMoney",label:"Monto de capital social",name:"montocapital",required:!1,message:"Escribir el Monto de capital social",disabled:!1}},d={dni:{type:"iText",label:"Número de documento de identidad",name:"dni",required:!0,message:"Escribir número de documento",disabled:!1,placeholder:"Número documento"},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},detailprocedure_id:{type:"iSelect",label:"Detalle del trámite",name:"detailprocedure_id",required:!0,message:"Seleccionar detalle del trámite",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad de atención",disabled:!!i.some(e=>e.id===7)},ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!0,message:"Escribir el número de RUC",disabled:!1,max:11},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar región",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia del Negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito del Negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},address:{type:"iText",label:"Direccion del Negocio",name:"address",required:!0,message:"Escribir la direccion del Negocio",disabled:!1}},r={dni:{type:"iText",label:"Número de documento",name:"dni",required:!0,message:"Escribir número de documento",disabled:!1,placeholder:"Número documento"},economicsector_id:{type:"iSelectWrite",label:"Sector económico",name:"economicsector_id",required:!0,message:"Seleccionar el sector económico",disabled:!1},comercialactivity_id:{type:"iSelectWrite",label:"Actividad comercial",name:"comercialactivity_id",required:!0,message:"Seleccionar la actividad comercial",disabled:!1},component_id:{type:"iSelectWrite",label:"Componente",name:"component_id",required:!0,message:"Seleccionar un componente",disabled:!!i.some(e=>e.id===7)},theme_id:{type:"iSelectWrite",label:"Tema del componente",name:"theme_id",required:!0,message:"Seleccionar un tema del componente",disabled:!1},modality_id:{type:"iSelect",label:"Modalidad de atención",name:"modality_id",required:!0,message:"Seleccionar modalidad",disabled:!!i.some(e=>e.id===7)},ruc:{type:"iText",label:"Número de RUC",name:"ruc",required:!1,message:"Escribir número de RUC",disabled:!1,placeholder:"Número de RUC (Opcional)",max:11,min:11},city_id:{type:"iSelectWrite",label:"Región del negocio",name:"city_id",required:!0,message:"Seleccionar departamento",disabled:!1},province_id:{type:"iSelectWrite",label:"Provincia del Negocio",name:"province_id",required:!0,message:"Seleccionar provincia",disabled:!1},district_id:{type:"iSelectWrite",label:"Distrito del Negocio",name:"district_id",required:!0,message:"Seleccionar distrito",disabled:!1},observations:{type:"iTextarea",label:"Nro de Reserva / Observaciones",name:"observations",required:!1,message:"Seleccionar tipo de documento",disabled:!1}};export{r as a,a as f,d as r};
