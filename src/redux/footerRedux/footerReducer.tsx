import { FOOTER_TYPE} from "./footerType";
import {footerReducerprops} from "../../Typescript/typescript";
interface Footervalue{
   type:FOOTER_TYPE.TYPE_FOOTER,
   payload:string |any
}
interface Footerload{
   type:FOOTER_TYPE.LOAD_TYPE,
   payload:boolean
}
interface Footererror{
   type:FOOTER_TYPE.ERROR_TYPE,
   payload:any
}

const initialState:footerReducerprops={
                  footer :[],
                  loading:true,
                  error:null 
}
type Action= Footererror | Footerload | Footervalue
function footerReducer(state:footerReducerprops=initialState,action:Action):any{
   switch(action.type){
       case FOOTER_TYPE.TYPE_FOOTER: 
       return{
          ...state,
          footer:action.payload
       }
       case FOOTER_TYPE.LOAD_TYPE: 
       return{
          ...state,
          loading:action.payload
       }
       case  FOOTER_TYPE.ERROR_TYPE: 
       return{
          ...state,
          error:action.payload
       }
       default:return state
   }
}
export default footerReducer;