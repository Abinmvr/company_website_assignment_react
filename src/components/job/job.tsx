import './job.css';
import {useEffect} from "react";
import getJobs from "../../API/jobAPI";
import { useHistory } from 'react-router-dom';
import { RootState, AppDispatch } from "../../redux/store";
import { displayJobs } from "../../Typescript/typescript";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { setJobSubmit,setJobById } from '../../redux/jobRedux/jobAction';
function Jobs(){
     const dispatch: AppDispatch = useDispatch()
     const history:any =useHistory();
     const error=useSelector((state:RootState)=>state.jobReducer.error)
     const jobdata=useSelector((state:RootState)=>state.jobReducer.job)
     const loading=useSelector((state:RootState)=>state.jobReducer.loading)
     const submit = useSelector((state:RootState)=>state.jobReducer.submit);
     const by_id = useSelector((state:RootState)=>state.jobReducer.by_id);
  
    useEffect(()=>dispatch<any>(getJobs(history)),[])
    const applyJob=(data:any)=>{
            console.log('clicked button :',data.id);
            const job_id =data;
            dispatch(setJobById({...by_id,by_id:job_id}));
            dispatch(setJobSubmit({...submit,issubmit:true}));
    }
    return(
            <div>  
                <div id='job_area'>
                    {loading?<p className="jobload">Loading...</p>:null}
                    {error?<p className="joberror">Error: {error}</p>:null}
                    {jobdata.map((data:displayJobs,event:number)=>(
                            <div className='job_box' key={event}>
                                    <div  className='place_year'>
                                        <h4>India |{data.location}</h4>
                                        <h4>{data.experience_in_years}+ years</h4>
                                    </div>
                                    <h3>{data.position}</h3>
                                    <div className='job_details'>
                                        <p>{data.description}</p>
                                        <p>Apply through: {data.expire_date.substring(0,10)}</p>
                                    </div>
                                    <button  onClick={(e)=>applyJob(data)} className='job_button'>Apply now</button>
                            </div>
                    ))}
                </div>
            </div>
    );}
export default Jobs;
