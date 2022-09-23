import { ABOUT_TYPE,LOAD_TYPE,ERROR_TYPE } from "./aboutType";
function setAbout(about:string){
    return{
        type: ABOUT_TYPE,
        payload:about
    }
}
function setLoad(loading:boolean){
    return{
        type: LOAD_TYPE,
        payload: loading
    }
}
function setError(error:string){
    return{
        type: ERROR_TYPE,
        payload: error
    }
}
export {setAbout,setError,setLoad};