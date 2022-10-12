import { INSIGHT_TYPE,INSIGHT_ERROR_TYPE,INSIGHT_LOAD_TYPE } from "./insightType";

function setInsight(insight:string){
    return{
        type:INSIGHT_TYPE,
        payload:insight
    }
}
function setInsightLoad(loading:boolean){
    return{
        type:INSIGHT_LOAD_TYPE,
        payload:loading
    }
}
function setInsightError(error:string){
    return{
        type:INSIGHT_ERROR_TYPE,
        payload:error
    }
}
export {setInsight,setInsightError,setInsightLoad};