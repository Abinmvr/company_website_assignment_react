import axios from "axios";
import { AppDispatch } from "../redux/store";
import { setEmployee,setError,setLoad,setEmployeedetail } from "../redux/employeeRedux/EmployeeAction";
export function getEmployee(){
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}employee`)
        .then(resp=>{
            dispatch(setLoad(false))
            dispatch(setEmployee(resp.data))    
        }) 
        .catch(error=>{
            dispatch(setLoad(true))
            dispatch(setError(error))
        })      
    }  
}
export function getEmpDetails(empid:any){
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}employee/${empid}`)
        .then(resp=>{
            dispatch(setLoad(false))
            dispatch(setEmployeedetail(resp.data))
            console.log(resp.data);
        }) 
        .catch(error=>{
            dispatch(setLoad(false))
            dispatch(setError(error))
        })
           
    }  
}