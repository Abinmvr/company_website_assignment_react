import { ABOUT_TYPE,LOAD_TYPE,ERROR_TYPE } from "./aboutType";
function setAbout(about:string){
    return{
        type: ABOUT_TYPE,
        payload:about
    }
}
function setAboutLoad(loading:boolean){
    return{
        type: LOAD_TYPE,
        payload: loading
    }
}
function setAboutError(error:string){
    return{
        type: ERROR_TYPE,
        payload: error
    }
}
export {setAbout,setAboutError,setAboutLoad};