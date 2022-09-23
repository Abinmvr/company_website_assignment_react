import { INSIGHT_TYPE,ERROR_TYPE,LOAD_TYPE } from "./insightType";

function setInsight(insight:string){
    return{
        type:INSIGHT_TYPE,
        payload:insight
    }
}
function setLoad(loading:boolean){
    return{
        type:LOAD_TYPE,
        payload:loading
    }
}
function setError(error:string){
    return{
        type:ERROR_TYPE,
        payload:error
    }
}
export {setInsight,setError,setLoad};