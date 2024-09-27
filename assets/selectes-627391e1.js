import{I as o,f as r}from"./index-a63373d2.js";const c=o("counter",{state:()=>({count:0,countries:null,cities:null,provinces:null,districts:null,Offices:null,cdes:null,genders:null,modalities:null,typeDocuments:null,components:null,componentThemes:null,roles:null,detailProcedures:null,economicSectors:null,comercialActivities:null,regimes:null,notaries:null,supervisores:null,folders:null,asesores:null,agreementStatus:null,operationalStatus:null,typeCapital:null}),actions:{increment(){this.count++},async fetchCountries(){try{const{data:e}=await r({url:"select/countries",method:"GET"});this.countries=e}catch(e){console.error("Error de red:",e)}},async fetchCities(){try{const{data:e}=await r({url:"select/cities",method:"GET"});this.cities=e}catch(e){console.error("Error de red:",e)}},async fetchProvinces(e){try{const{data:t}=await r({url:`select/provinces/${e}`,method:"GET"});this.provinces=t}catch(t){console.error("Error de red:",t)}},async fetchDistricts(e){try{const{data:t}=await r({url:`select/districts/${e}`,method:"GET"});this.districts=t}catch(t){console.error("Error de red:",t)}},async fetchOffices(){try{const{data:e}=await r({url:"select/offices",method:"GET"});this.Offices=e}catch(e){console.error("Error de red:",e)}},async fetchCdes(){try{const{data:e}=await r({url:"select/cdes",method:"GET"});this.cdes=e}catch(e){console.error("Error de red:",e)}},async fetchGenders(){try{const{data:e}=await r({url:"select/genders",method:"GET"});this.genders=e}catch(e){console.error("Error de red:",e)}},async fetchModalities(){try{const{data:e}=await r({url:"select/modalities",method:"GET"});this.modalities=e}catch(e){console.error("Error de red:",e)}},async fetchTypeDocuments(){try{const{data:e}=await r({url:"select/type-documents",method:"GET"});this.typeDocuments=e}catch(e){console.error("Error de red:",e)}},async fetchComponents(){try{const{data:e}=await r({url:"select/components",method:"GET"});this.components=e}catch(e){console.error("Error de red:",e)}},async fetchComponentThemes(e){try{const{data:t}=await r({url:`select/component-theme/${e}`,method:"GET"});this.componentThemes=t}catch(t){console.error("Error de red:",t)}},async fetchRoles(){try{const{data:e}=await r({url:"select/roles",method:"GET"});this.roles=e}catch(e){console.error("Error de red:",e)}},async fetchDetailProcedures(){try{const{data:e}=await r({url:"select/detail-procedures",method:"GET"});this.detailProcedures=e}catch(e){console.error("Error de red:",e)}},async fetchEconomicSectors(){try{const{data:e}=await r({url:"select/economic-sectors",method:"GET"});this.economicSectors=e}catch(e){console.error("Error de red:",e)}},async fetchComercialActivities(){try{const{data:e}=await r({url:"select/comercial-activities",method:"GET"});this.comercialActivities=e}catch(e){console.error("Error de red:",e)}},async fetchRegimes(){try{const{data:e}=await r({url:"select/regimes",method:"GET"});this.regimes=e}catch(e){console.error("Error de red:",e)}},async fetchNotaries(){try{const{data:e}=await r({url:"select/notaries",method:"GET"});this.notaries=e}catch(e){console.error("Error de red:",e)}},async fetchSupervisores(){try{const{data:e}=await r({url:"select/supervisores",method:"GET"});this.supervisores=e}catch(e){console.error("Error de red:",e)}},async fetchFolders(){try{const{data:e}=await r({url:"select/folders",method:"GET"});this.folders=e}catch(e){console.error("Error de red:",e)}},async fetchAsesores(){try{const{data:e}=await r({url:"select/asesores",method:"GET"});this.asesores=e}catch(e){console.error("Error de red:",e)}},async fetchAgreementStatus(){try{const{data:e}=await r({url:"select/agreement-status",method:"GET"});this.agreementStatus=e}catch(e){console.error("Error de red:",e)}},async fetchOperationalStatus(){try{const{data:e}=await r({url:"select/operational-status",method:"GET"});this.operationalStatus=e}catch(e){console.error("Error de red:",e)}},async fetchTypeCapital(){try{const{data:e}=await r({url:"select/type-capital",method:"GET"});this.typeCapital=e}catch(e){console.error("Error de red:",e)}}}});export{c as u};
