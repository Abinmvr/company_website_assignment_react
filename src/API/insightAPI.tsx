import {setInsight,setError,setLoad} from '../redux/insightRedux/insightAction'
import axios from 'axios'
import { AppDispatch } from '../redux/store'
function getInsight(){
    return(dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        // axios.get(`${process.env.REACT_APP_LOCAL_URL}insight`)
        axios.get(`${process.env.REACT_APP_NODE_APP_URL}insights`).then((resp)=>{
            dispatch(setLoad(false))
            console.log(resp.data.message)
            dispatch(setInsight(resp.data.message))
        })
        .catch(error=>{
            dispatch(setLoad(false))
            dispatch(setError(error.message))
        })
    }
}
export default getInsight;