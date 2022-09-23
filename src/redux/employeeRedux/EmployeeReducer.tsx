import {EMPLOYEE_TYPE} from "./EmployeeType"
import {employeeReducerProps } from "../../Typescript/typescript";
interface Employeevalue{
   type:EMPLOYEE_TYPE.TYPE_EMPLOYEE,
   payload:string |any
}
interface Employeedetail{
   type:EMPLOYEE_TYPE.EMPLOYEE_DETAIL_TYPE,
   payload:string |any
}
interface Employeeload{
   type:EMPLOYEE_TYPE.LOAD_TYPE,
   payload:boolean
}
interface Employeeerror{
   type:EMPLOYEE_TYPE.ERROR_TYPE,
   payload:any
}

const initialState:employeeReducerProps={
               employee :[],
               detail :[],
               loading:true,
               error:null
}
type Action= Employeeerror | Employeeload | Employeevalue |Employeedetail
function EmployeeReducer(state:employeeReducerProps=initialState,action:Action):any{
   switch(action.type){
       case EMPLOYEE_TYPE.TYPE_EMPLOYEE: 
       return{
          ...state,
          employee:action.payload
       }
       case EMPLOYEE_TYPE.EMPLOYEE_DETAIL_TYPE: 
       return{
          ...state,
          detail:action.payload
       }
       case EMPLOYEE_TYPE.LOAD_TYPE: 
       return{
          ...state,
          loading:action.payload
       }
       case EMPLOYEE_TYPE.ERROR_TYPE: 
       return{
          ...state,
          error:action.payload
       }
       default:return state
   }
}
export default EmployeeReducer;