import axios from "axios";
import { AppDispatch } from "../redux/store";
import { setAchieve,setError,setLoad } from "../redux/achieveRedux/achieveAction";
export function getAchieve(){
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}achieve`)
        .then(resp=>{
            dispatch(setLoad(false))
            dispatch(setAchieve(resp.data))
           }) 
        .catch((error)=>{
            dispatch(setLoad(false))
            dispatch(setError(error.message))
        })
    }  
}