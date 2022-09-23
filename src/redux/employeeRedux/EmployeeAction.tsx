import { EMPLOYEE_TYPE } from "./EmployeeType";
function setEmployee(employee:any){
    return{
        type:EMPLOYEE_TYPE.TYPE_EMPLOYEE,
        payload:employee
    };
}
function setEmployeedetail(detail:any){
    return{
        type:EMPLOYEE_TYPE.EMPLOYEE_DETAIL_TYPE,
        payload:detail
    };
}
function setLoad(loading:boolean){
    return{
        type:EMPLOYEE_TYPE.LOAD_TYPE,
        payload:loading
    };
}
function setError(error:string){
    return{
        type:EMPLOYEE_TYPE.ERROR_TYPE,
        payload:error
    };
}
export {setEmployee,setError,setLoad,setEmployeedetail};