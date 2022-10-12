import axios from 'axios';
import { AppDispatch } from '../redux/store'
import {setInsight,setInsightError,setInsightLoad} from '../redux/insightRedux/insightAction'
import { setAchieve,setAchieveError,setAchieveLoad } from "../redux/achieveRedux/achieveAction";
export function getInsight(history:any){
    return(dispatch:AppDispatch)=>{
        dispatch(setInsightLoad(true))
        axios.get(`${process.env.REACT_APP_NODE_APP_URL}insights`
        ).then((resp:any)=>{
            dispatch(setInsightLoad(false))
            dispatch(setInsight(resp.data.message))
        })
        .catch((error:any)=>{
            sessionStorage.clear();
            localStorage.clear();
            history.push('/');
            dispatch(setInsightLoad(false))
            dispatch(setInsightError(error.response.data.error))
        })
    }
}

export function getAchieve(){
    return (dispatch:AppDispatch)=>{
        dispatch(setAchieveLoad(true))
            axios.get(`${process.env.REACT_APP_NODE_APP_URL}achievements`
            ).then((resp)=>{
                dispatch(setAchieveLoad(false))
                dispatch(setAchieve(resp.data.message))
            }) 
            .catch((error)=>{
                dispatch(setAchieveLoad(false))
                dispatch(setAchieveError(error.response.data.error))
            })
    }  
}