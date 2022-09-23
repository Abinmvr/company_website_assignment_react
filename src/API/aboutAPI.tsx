import axios from 'axios';
import { AppDispatch } from '../redux/store';
import {setAbout,setError,setLoad} from '../redux/aboutRedux/aboutAction';
function getAbout(){
    return(dispatch:AppDispatch)=>{
        dispatch(setLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}about`)
        .then(resp=>{
            dispatch(setLoad(false))
            dispatch(setAbout(resp.data))
        })
        .catch((error)=>{
            dispatch(setLoad(false));
            dispatch(setError(error.message));
        });
      }
}
export default getAbout;
