import axios from "axios";
import {setFooter,setFooterError,setFooterLoad} from "../redux/footerRedux/footerAction";
import { AppDispatch } from "../redux/store";
export function getFooter(){
    return (dispatch:AppDispatch)=>{
        dispatch(setFooterLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}footer`)
        .then(resp=>{
            dispatch(setFooterLoad(false))
           dispatch(setFooter(resp.data))
           }) 
           .catch(err=>{
            dispatch(setFooterLoad(false))
            dispatch(setFooterError(err.message))
           })
           
    }  
}