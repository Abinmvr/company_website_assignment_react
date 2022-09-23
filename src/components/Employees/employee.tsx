import './employee.css';
import { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import {useHistory} from 'react-router-dom';
import { getEmployee } from '../../API/employeeAPI';
import { useSelector,useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../../redux/store';
import { employeeProps} from '../../Typescript/typescript';
function Employee(){
    const history =useHistory();
    const dispatch:AppDispatch =useDispatch();
    const error=useSelector((state:RootState)=>state.EmployeeReducer.error);
    const employee=useSelector((state:RootState)=>state.EmployeeReducer.employee);
    const loading=useSelector((state:RootState)=>state.EmployeeReducer.loading);
    useEffect(()=>dispatch<any>(getEmployee()),[])
    const employeeFunction=(empid:number)=>{
                history.push({
                    pathname:'/employeedetail',
                    state:[{'employid':empid}]
                });
            }
    return(
        <div>
            <Navbar/>
            {loading?<p className="load">Loading...</p>:null}
            {error?<p className="err">Error: {error}</p>:null}
            <div id="emp">
                    <h1>Our Employees</h1>
                    <p id='emptext'>Everything starts with ambition.We turn bold ideas into groundbreaking business solutions for a tomorrow built on technology.Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia. 
             Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta. Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam!.Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia.Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta. Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! 
             Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia.Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta.Et ipsum ipsa in odit ullam non expedita ipsum qui saepe odit nam sapiente temporibus cum fugiat tempore beatae ipsam! 
             Nam exercitationem rerum in pariatur ipsa non distinctio minus sed temporibus repudiandae vel incidunt perspiciatis aut velit consequatur et temporibus officia.Aut animi dolores aut suscipit culpa est voluptatibus harum aut excepturi assumenda ut doloribus soluta.</p>
                    <table id="emptable">
                        <thead>
                            <tr>
                                <th className='col'>No.</th>
                                <th className='col'>Name</th>
                                <th className='col'>Position</th>
                                <th className='col'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                                {employee.map((emp:employeeProps,even:number)=>(
                                    <tr key={even}>
                                        <td className='col'>{emp.id}</td>
                                        <td className='col'>{emp.name}</td>
                                        <td className='col'>{emp.position}</td> 
                                        <td className='col'><button className='empbtn' onClick={event=>employeeFunction(emp.id)}>...</button></td>      
                                    </tr>
                                ))}
                        </tbody>
                    </table>
            </div>
          
        </div>
    )}
export default Employee;


               