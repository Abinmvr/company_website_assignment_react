import { ABOUT_TYPE,LOAD_TYPE,ERROR_TYPE } from "./aboutType";
import {aboutReducerProps} from "../../Typescript/typescript"
type Action={
    type:any,
    payload:any
}

const initialState:aboutReducerProps ={
    about:[],
    loading:true,
    error:null
}
function aboutReducer(state:aboutReducerProps=initialState,action:Action):any{
    switch(action.type){
        case  ABOUT_TYPE:
            return{
            ...state,
            about:action.payload
        }
        case  LOAD_TYPE:
            return{
                ...state,
                loading:action.payload
            }
            case  ERROR_TYPE:
                return{
                    ...state,
                    error:action.payload
                }
        default: return state
    }
}
export default aboutReducer;