import { JOB_TYPE,JOB_LOAD_TYPE,JOB_ERROR_TYPE,JOB_SUBMIT_TYPE,JOB_BY_ID_TYPE } from "./jobType";
function setJob(job:string){
    return{
        type:JOB_TYPE,
        payload:job
    }
}
function setJobById(by_id:string){
    return{
        type:JOB_BY_ID_TYPE,
        payload:by_id
    }
}
function setJobLoad(loading:boolean){
    return{
        type:JOB_LOAD_TYPE,
        payload:loading
    }
}
function setJobError(error:string){
    return{
        type:JOB_ERROR_TYPE,
        payload:error
    }
}
function setJobSubmit(submit:boolean){
    return { 
        type : JOB_SUBMIT_TYPE,
        payload : submit
    };
}


export{setJob,setJobLoad,setJobError,setJobSubmit,setJobById};