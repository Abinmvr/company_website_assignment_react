import { INSIGHT_TYPE,INSIGHT_LOAD_TYPE,INSIGHT_ERROR_TYPE} from "./insightType";
import {insightReducerprops} from "../../Typescript/typescript";
type Action={
    type:String,
    payload:any
}
const initialState:insightReducerprops={
                insight:[],
                loading:true,
                error:null
}
function insightReducer(state:insightReducerprops=initialState,action:Action):any{
    switch(action.type){
        case INSIGHT_TYPE:
            return{
            ...state,
            insight:action.payload
        }
        case INSIGHT_LOAD_TYPE:
            return{
            ...state,
            loading:action.payload
        }
        case INSIGHT_ERROR_TYPE:
            return{
            ...state,
            error:action.payload
        }
        default:return state
    }
}
export default insightReducer;