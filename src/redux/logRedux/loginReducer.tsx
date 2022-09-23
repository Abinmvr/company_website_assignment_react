import {LOGIN_TYPE} from './loginType';
import {loginReducerprops} from "../../Typescript/typescript";
type Action={
    type:string
    payload:boolean|any
}

const initialState:loginReducerprops={
            auth:{isAuth : false, authUser : ''}
}
function loginReducer(state:loginReducerprops=initialState, action:Action):any{
    switch(action.type){
        case LOGIN_TYPE:
            return {...state, auth : action.payload};

        default :
            return state;
    }
}

export default loginReducer