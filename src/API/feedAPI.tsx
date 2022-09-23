import axios from 'axios';
import {getFeedAction,setError,setLoad} from '../redux/feedbackRedux/feedbackAction';
import { AppDispatch } from '../redux/store';
function editFeed(postData:any){
    return(dispatch:AppDispatch)=>{
        fetch(`${process.env.REACT_APP_LOCAL_URL}feed`, {
                    method: 'POST',
                    headers: {
                         'Accept':'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(()=>{dispatch<any>(displayFeed())})
    }}
function displayFeed(){
  return(dispatch:AppDispatch)=>{
    dispatch(setLoad(true))
    axios.get(`${process.env.REACT_APP_LOCAL_URL}feed`)
    .then(resp=>{
      dispatch(setLoad(false))
      dispatch(getFeedAction(resp.data))
    })
    .catch(error=>{
      dispatch(setLoad(false))
      dispatch(setError(error.message))
    })
  }
}
export  {displayFeed,editFeed};