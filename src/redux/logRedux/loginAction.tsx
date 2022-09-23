import {LOGIN_TYPE} from './loginType';

function setLogin(auth:boolean){
    return { 
        type : LOGIN_TYPE,
        payload : auth 
    };
}

export {setLogin};