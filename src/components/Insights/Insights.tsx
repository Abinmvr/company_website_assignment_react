import './Insights.css';
import {useEffect} from "react";
import getInsight from "../../API/insightAPI";
import { useHistory } from 'react-router-dom';
import { RootState, AppDispatch } from "../../redux/store";
import { displayInsights } from "../../Typescript/typescript";
import { useSelector,useDispatch } from "react-redux/es/exports";
function Insights(){
     const dispatch: AppDispatch = useDispatch()
     const history:any =useHistory();
     const error=useSelector((state:RootState)=>state.insightReducer.error)
     const insightdata=useSelector((state:RootState)=>state.insightReducer.insight)
     const loading=useSelector((state:RootState)=>state.insightReducer.loading)
  
     useEffect(()=>dispatch<any>(getInsight(history)),[])
     return(
          <div id="sec3">
               <h2>Insights</h2>
               {loading?<p className="load">Loading...</p>:null}
               {error?<p className="err">Error: {error}</p>:null}
               <div className='thirddiv'>
                         {insightdata.map((data:displayInsights,event:number)=>(
                              <div className="thirdbox" key={event}>
                                   <h4>{data.title}</h4>
                                   <div className="imdiv">
                                        <img src={data.image} alt="img"/>
                                   </div>
                                   <p>{data.details}</p>
                              </div>
                         ))}
               </div>
         </div>
    );}
export default Insights;