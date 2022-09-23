import axios from "axios";
import {setFooter,setError,setLoad} from "../redux/footerRedux/footerAction";
import { AppDispatch } from "../redux/store";
export function getFooter(){
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}footer`)
        .then(resp=>{
            dispatch(setLoad(false))
           dispatch(setFooter(resp.data))
           }) 
           .catch(error=>{
            dispatch(setLoad(true))
            dispatch(setError(error))
           })
           
    }  
}