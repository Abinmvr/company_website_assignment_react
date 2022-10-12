import { ACHIEVE_TYPE,ACHIEVE_LOAD_TYPE,ACHIEVE_ERROR_TYPE }from "./achieveType";
function setAchieve(achieve:string){
    return{
        type:ACHIEVE_TYPE,
        payload:achieve
    };
}
function setAchieveLoad(loading:boolean){
    return{
        type:ACHIEVE_LOAD_TYPE,
        payload:loading
    };
}
function setAchieveError(error:string){
    return{
        type:ACHIEVE_ERROR_TYPE,
        payload:error
    };
}
export {setAchieve,setAchieveLoad,setAchieveError};