import {FOOTER_TYPE } from "./footerType";
function setFooter(footer:string){
    return{
        type:FOOTER_TYPE.TYPE_FOOTER,
        payload:footer
    };
}
function setFooterLoad(loading:boolean){
    return{
        type:FOOTER_TYPE.LOAD_TYPE,
        payload:loading
    };
}
function setFooterError(error:string){
    return{
        type:FOOTER_TYPE.ERROR_TYPE,
        payload:error
    };
}
export {setFooter,setFooterError,setFooterLoad};