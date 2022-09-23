import { CAREER_TYPE,SUBMIT_TYPE } from "./careerType";
function setJoin(join:boolean){
    return { 
        type :CAREER_TYPE,
        payload : join
    };
}
function setSubmit(submit:boolean){
    return { 
        type : SUBMIT_TYPE,
        payload : submit
    };
}
export {setJoin, setSubmit};
