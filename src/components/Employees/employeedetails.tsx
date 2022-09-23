import './employee.css';
import { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import { useLocation } from 'react-router-dom';
import { getEmpDetails } from '../../API/employeeAPI';
import { useSelector,useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../../redux/store';

function EmployeeDetails(){
    const dispatch:AppDispatch=useDispatch();
    const location =useLocation();
    let hist:any = location.state
    let employee_id:number
    hist.map((history_data:any,k:number)=>(employee_id=history_data.employid))
    const employee=useSelector((state:RootState)=>state.EmployeeReducer.detail);
    const error=useSelector((state:RootState)=>state.EmployeeReducer.error);
    const loading=useSelector((state:RootState)=>state.EmployeeReducer.loading);
    useEffect(()=>dispatch<any>(getEmpDetails(employee_id)),[])
    return(
        <div>
            <Navbar/>
            {loading?<p className="load">Loading...</p>:null}
            {error?<p className="err">Error: {error}</p>:null}
            <div className='detailbox' >
                            <div className='innerdata'>
                                <div className='topdiv'>
                                    <div className='title'>
                                        <h2>{employee.name}</h2>
                                        <h5>-{employee.position}</h5>
                                    </div>
                                    <div className='empimage'>
                                        <img src={employee.empimage} alt='employee'/>
                                    </div>
                                </div>
                                <p className='emppara'>Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia. 
             Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta. Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam!.Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia.Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta. Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! 
             Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia.Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta.Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! 
             Nam exercitationem rerum in par</p>
                           </div>
                    </div>
        </div>
)}
export default EmployeeDetails;