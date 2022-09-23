import { CAREER_TYPE,SUBMIT_TYPE} from "./careerType";
import {careerReducerProps } from "../../Typescript/typescript";
type CareerAction ={
    type:String,
    payload:any
}
const initialState:careerReducerProps={
        join:{isjoin : false},
        submit:{issubmit : false}
}
function CareerReducer(state:careerReducerProps=initialState, action:CareerAction):any{
    switch(action.type){
        case CAREER_TYPE:
            return {...state, join : action.payload};
        case SUBMIT_TYPE:
                return {...state, submit : action.payload};
        default :
            return state;
    }
}
export default CareerReducer;