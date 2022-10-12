import axios from 'axios';
import { AppDispatch } from '../redux/store';
import {setAbout,setAboutError,setAboutLoad} from '../redux/aboutRedux/aboutAction';
import {getFeedAction,setError,setLoad} from '../redux/feedbackRedux/feedbackAction';
export function getAbout(){
    return(dispatch:AppDispatch)=>{
        dispatch(setAboutLoad(true))
        axios.get(`${process.env.REACT_APP_LOCAL_URL}about`)
        .then(resp=>{
            dispatch(setAboutLoad(false))
            dispatch(setAbout(resp.data))
        })
        .catch((error)=>{
            dispatch(setAboutLoad(false));
            dispatch(setAboutError(error.message));
        });
      }
}


export function editFeed(postData:any){
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

export function displayFeed(){
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
