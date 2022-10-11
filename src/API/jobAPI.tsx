import axios from 'axios';
import { AppDispatch } from '../redux/store'
import {setJob,setJobLoad,setJobError} from '../redux/jobRedux/jobAction'
function getJobs(history:any){
    return(dispatch:AppDispatch)=>{
        dispatch(setJobLoad(true))
        axios.get(`${process.env.REACT_APP_NODE_APP_URL}jobs`
        ).then((resp:any)=>{
            dispatch(setJobLoad(false))
            dispatch(setJob(resp.data.message))
        })
        .catch((error:any)=>{
            console.log(error);
            // sessionStorage.clear();
            // localStorage.clear();
            // history.push('/');
            dispatch(setJobLoad(false))
            dispatch(setJobError(error.response.data.error))
        })
    }
}
export default getJobs;