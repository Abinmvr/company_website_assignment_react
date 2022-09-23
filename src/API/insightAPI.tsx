import {setInsight,setError,setLoad} from '../redux/insightRedux/insightAction'
import axios from 'axios'
import { AppDispatch } from '../redux/store'
function getInsight(){
    return(dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}insight`)
        .then(resp=>{
            dispatch(setLoad(false))
            dispatch(setInsight(resp.data))
        })
        .catch(error=>{
            dispatch(setLoad(false))
            dispatch(setError(error.message))
        })
    }
}
export default getInsight;