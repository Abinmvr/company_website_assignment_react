import axios from "axios";
import { AppDispatch } from "../redux/store";
import { setAchieve,setError,setLoad } from "../redux/achieveRedux/achieveAction";

export function getAchieve(){
    const token:any =localStorage.getItem('token');
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
            axios.get(`${process.env.REACT_APP_NODE_APP_URL}achievements`,
            {headers:{authorization:token}}
            ).then((resp)=>{
                // localStorage.setItem('verifyToken','success');
                dispatch(setLoad(false))
                dispatch(setAchieve(resp.data.message))
            }) 
            .catch((error)=>{
                // localStorage.setItem('verifyToken','failed');
                dispatch(setLoad(false))
                dispatch(setError(error.response.data.error))
            })
    }  
}