import { INSIGHT_TYPE,LOAD_TYPE,ERROR_TYPE} from "./insightType";
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
        case LOAD_TYPE:
            return{
            ...state,
            loading:action.payload
        }
        case ERROR_TYPE:
            return{
            ...state,
            error:action.payload
        }
        default:return state
    }
}
export default insightReducer;