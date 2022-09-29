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
function setFooterError(errors:string){
    return{
        type:FOOTER_TYPE.ERROR_TYPE,
        payload:errors
    };
}
export {setFooter,setFooterError,setFooterLoad};