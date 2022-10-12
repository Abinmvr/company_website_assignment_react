import './job.css';
import axios from 'axios';
import validator from 'validator';
import { RootState, AppDispatch } from "../../redux/store";
import { setJobSubmit } from '../../redux/jobRedux/jobAction';
import { useSelector,useDispatch } from "react-redux/es/exports";
import { useState } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ApplyForm=()=>{
    const[name,setName]=useState('');
    const[experience,setExperience]=useState('');
    const[email,setEmail]=useState('');
    const[resume,setResume]=useState('');
    const[error,setError]=useState('');
    const dispatch:AppDispatch = useDispatch();
    const submit = useSelector((state:RootState)=>state.jobReducer.submit);
    const job_data = useSelector((state:RootState)=>state.jobReducer.by_id);
    const job_id = job_data.by_id.id
    const submitFunction=()=>{
       
        // const config={headers:{
        //     'content-type':'multipart/form-data'
        // }}
        if((name!=='')&&(email!=='')&&(job_id!=='')&&(experience!=='')&&(resume!=='')){
            const formData = new FormData();
            if(validator.isEmail(email)){
                formData.append('name',name);
                formData.append('email',email);
                formData.append('experience',experience);
                formData.append('resumes',resume);
                formData.append('id',job_id);
                axios.post(`${process.env.REACT_APP_NODE_APP_URL}applyjob`,formData,
                {headers:{
                    'content-type':'multipart/form-data'
                }}
                ).then((resp:any)=>{
                    const status = resp.data.success;
                    if(status===true){
                            toast.success('Applied successfully !',{position:toast.POSITION.TOP_CENTER,autoClose:false});
                            setError('');setEmail('');setExperience('');setResume('');setName('');
                    }else{
                        const errtype = resp.data.message;
                        setError(errtype); 
                    } 
                })
                .catch((error:any)=>{
                    console.log('err',error);
                })
            }else{
                setError('Check email');
            }
        }else{
            setError('Fields cannot be empty !');
        }
    }
    const backFunction=()=>{
        dispatch(setJobSubmit({...submit,issubmit:false}));
    }
    const handleResume = (event:any) =>{
        console.log(event.target.files[0]);
        
        setResume(event.target.files[0]);}
    return(
        <div id='form_container'>
        <form encType='multipart/form-data'>
        <div className="job_form">
        <h3>{job_data.by_id.position}</h3>
        <label className="job_labels ">Name</label><br/>
            <input className='job_fields' type={"text"} value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
       <label className="">Email</label><br/>
            <input className='job_fields' type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <label className="">Experience in year</label><br/>
            <input className='job_fields' type={"text"} value={experience} onChange={(e)=>setExperience(e.target.value)}/><br/><br/>
        <label className="">Resume</label><br/>
            <input className='job_fields' type={"file"}  onChange={handleResume} /><br/><br/>
        <button onClick={submitFunction} className='apply_button'>Submit</button>
        <button onClick={backFunction} className='back_button'>Back</button><br/><br/>
        <div className='error_div'>{error}</div>
        </div>
        </form>
        </div>
       
    );

}
export default ApplyForm;
