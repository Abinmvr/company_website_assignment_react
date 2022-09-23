import { ACHIEVE_TYPE,LOAD_TYPE,ERROR_TYPE }from "./achieveType";
function setAchieve(achieve:string){
    return{
        type:ACHIEVE_TYPE,
        payload:achieve
    };
}
function setLoad(loading:boolean){
    return{
        type:LOAD_TYPE,
        payload:loading
    };
}
function setError(error:string){
    return{
        type:ERROR_TYPE,
        payload:error
    };
}
export {setAchieve,setLoad,setError};