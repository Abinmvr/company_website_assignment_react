import { ACHIEVE_TYPE,LOAD_TYPE,ERROR_TYPE }from "./achieveType";
import { achieveReducerProps } from "../../Typescript/typescript";
interface AchieveAction{
   type:'ACHIEVE_TYPE',
   payload:any
}
interface LoadAction{
   type:'LOAD_TYPE',
   payload:boolean
}
interface ErrorAction{
   type:'ERROR_TYPE',
   payload:string
}
const initialState:achieveReducerProps={
               achieve:[],
               loading:true,
               error:null 
            }
type Action = LoadAction | AchieveAction | ErrorAction
function achieveReducer(state:achieveReducerProps=initialState,action:Action):any{
    switch(action.type){
        case ACHIEVE_TYPE: 
        return{
           ...state,
           achieve:action.payload
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
 export default achieveReducer;