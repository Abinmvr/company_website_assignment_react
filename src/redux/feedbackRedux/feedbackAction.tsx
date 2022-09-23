import {ADD_FEEDBACK_TYPE,GET_FEEDBACK_TYPE,LOAD_TYPE,ERROR_TYPE } from "./feedbackType";
function getFeedAction(feedback:string){
    return{
        type:GET_FEEDBACK_TYPE,
        payload:feedback
    }
}
function addFeedAction(feedback:string){
    return{
        type:ADD_FEEDBACK_TYPE,
        payload:feedback
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
export {getFeedAction,addFeedAction,setError,setLoad};