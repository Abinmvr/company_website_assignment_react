import {feedReducerProps} from "../../Typescript/typescript"
import { ADD_FEEDBACK_TYPE,GET_FEEDBACK_TYPE,LOAD_TYPE,ERROR_TYPE } from "./feedbackType";
interface GetAction{
    type:'GetFeed',
    payload:any
}
interface AddAction{
    type:'AddFeed',
    payload:any
}
interface LoadAction{
    type:'loading',
    payload:boolean
}
interface errorAction{
    type:'error',
    payload:string
}

const initialState:feedReducerProps={
    // feedvalue:{name:'',email:''},
    feedback:[],
    loading:true,
    error:null
}
type Action= GetAction | AddAction | LoadAction | errorAction
function feedReducer(state:feedReducerProps=initialState,action:Action):any{
    switch(action.type){
        case GET_FEEDBACK_TYPE :return{
            ...state,
            feedback:action.payload
        }
        case ADD_FEEDBACK_TYPE:return{
            ...state,
            feedback:action.payload
        }
        case LOAD_TYPE :return{
            ...state,
            loading:action.payload
        }
        case ERROR_TYPE:return{
            ...state,
            error:action.payload
        }
        default:return state
    }
}
export default feedReducer;
