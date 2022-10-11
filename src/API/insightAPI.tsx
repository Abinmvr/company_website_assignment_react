import axios from 'axios';
import { AppDispatch } from '../redux/store'
import {setInsight,setError,setLoad} from '../redux/insightRedux/insightAction'
function getInsight(history:any){
    return(dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_NODE_APP_URL}insights`
        ).then((resp:any)=>{
            dispatch(setLoad(false))
            dispatch(setInsight(resp.data.message))
        })
        .catch((error:any)=>{
            sessionStorage.clear();
            localStorage.clear();
            history.push('/');
            dispatch(setLoad(false))
            dispatch(setError(error.response.data.error))
        })
    }
}
export default getInsight;