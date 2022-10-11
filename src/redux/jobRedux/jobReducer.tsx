import { JOB_TYPE,JOB_LOAD_TYPE,JOB_ERROR_TYPE,JOB_SUBMIT_TYPE,JOB_BY_ID_TYPE } from "./jobType";
import {jobReducerprops} from "../../Typescript/typescript";
type Action={
    type:String,
    payload:any
}
const initialState:jobReducerprops={
                job:[],
                by_id:[],
                loading:true,
                error:null,
                submit:{issubmit : false}
}
function jobReducer(state:jobReducerprops=initialState,action:Action):any{
    switch(action.type){
        case JOB_TYPE:
            return{
            ...state,
            job:action.payload
        }
        case JOB_BY_ID_TYPE:
                return {...state, by_id : action.payload};
        case JOB_SUBMIT_TYPE:
                return {...state, submit : action.payload};
        case JOB_LOAD_TYPE:
            return{
            ...state,
            loading:action.payload
        }
        case JOB_ERROR_TYPE:
            return{
            ...state,
            error:action.payload
        }
        default:return state
    }
}
export default jobReducer;