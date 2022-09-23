import './feed.css';
import validator from 'validator';
import { useState,useEffect } from "react";
import useimg from '../../asset/images/21.png';
import { feedprops } from '../../Typescript/typescript';
import { displayFeed,editFeed } from "../../API/feedAPI";
import { RootState,AppDispatch } from '../../redux/store';
import { useDispatch,useSelector } from "react-redux/es/exports";
function Feedback(){
        let[invaliddata,setError]=useState('');
        let[message,setFeed]=useState('');
        let[email,setEmail]=useState('');
        const dispatch:AppDispatch=useDispatch();
        const error =useSelector((state:RootState)=>state.feedReducer.error);
        const feedback =useSelector((state:RootState)=>state.feedReducer.feedback);
        const loading =useSelector((state:RootState)=>state.feedReducer.loading);
        const submitFeed=()=>{
            if((message!=='')&&(email!=='')){
                if(validator.isEmail(email)){
                        const check=email.indexOf('@');
                        const slicename=email.slice(0,check);
                        let postData:{[key: string]: string}={}
                        postData['feedback']=message
                        postData['email']=slicename
                        dispatch<any>(editFeed(postData));
                        setFeed('');
                        setEmail('');
                        setError('');   
                }   
                else{
                        setError('Enter valid email');
                    }
            }
            else if(message===''){
                setError('* Please add a feedback !');
            }
            else if(email===''){
                setError('* please enter your email !');
            }
        }
useEffect(()=>dispatch<any>(displayFeed()),[]);
    return(
        <div> 
            <div id="feed">
                {loading?<p className="load">Loading...</p>:null}
                {error?<p className="err">Error: {error}</p>:null}
                <div id="in">
                    <div id="tbox">
                        <h3>Feedback</h3>
                        <textarea id="inpt" value={message}
                            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setFeed(e.target.value)}>
                        </textarea><br/>
                        <div id='er'>{invaliddata}</div>
                        <input type={'text'} id="inpe" value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} placeholder='Email'/><br/><br/>
                        <button id="tbut" onClick={()=>submitFeed()} >Submit</button>
                    </div>
                    <div id="dispfeed">
                        {feedback.map((feeddata:feedprops,event:number)=>(
                                <div className="review" key={event}>
                                    <div  className='comment'>
                                        <div className="userimg"><img src={useimg} alt="img"/></div>
                                        <p className="up">{feeddata.feedback}</p>
                                    </div>
                                    <p className="user">-{feeddata.email}</p>
                                </div>
                        ))}
                    </div>   
                </div> 
            </div>
      </div>
    );
}
export default Feedback;
    
 