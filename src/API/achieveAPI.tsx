import axios from "axios";
import { AppDispatch } from "../redux/store";
import { setAchieve,setError,setLoad } from "../redux/achieveRedux/achieveAction";
export function getAchieve(){
    return (dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
            axios.get(`${process.env.REACT_APP_NODE_APP_URL}achievements`
            ).then((resp)=>{
                dispatch(setLoad(false))
                dispatch(setAchieve(resp.data.message))
            }) 
            .catch((error)=>{
                dispatch(setLoad(false))
                dispatch(setError(error.response.data.error))
            })
    }  
}