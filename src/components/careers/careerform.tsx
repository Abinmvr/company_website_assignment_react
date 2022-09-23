import './career.css';
import { useState } from "react";
import validator from "validator";
import { RootState,AppDispatch } from '../../redux/store';
import {useDispatch,useSelector} from "react-redux/es/exports";
import { setSubmit } from "../../redux/careerRedux/careerAction";
function CareerForm(){
    let[error,setEr]=useState('');
    let[mobile,setMob]=useState('');
    let[year,setYear]=useState('');
    let[qualification,setQual]=useState(''); 
    let[qname,setName]=useState('');
    let[qmail,setMail]=useState('');
    const dispatch:AppDispatch =useDispatch();
    const submit = useSelector((state:RootState)=>state.CareerReducer.submit)
    const subForm=()=>{
        if((qname!=='')&&(qmail!=='')&&(qualification!=='')&&(mobile!=='')&&(year!=='')){
            if((validator.isEmail(qmail))&&((validator.isNumeric(mobile))&&(mobile.length===10))){
                dispatch(setSubmit({...submit,issubmit:true}));
                alert("Your data is submitted. Check profile for details..");
                localStorage.setItem('qmail',qmail);
                setMail('');
                localStorage.setItem('qname',qname);
                setName('');
                localStorage.setItem('qual',qualification);
                setQual('');
                localStorage.setItem('qyear',year);
                setYear('');
                localStorage.setItem('qmob',mobile);
                console.log(mobile.length);
                setMob('');
                setEr('');
            }
            else if(!(validator.isNumeric(mobile))||(mobile.length<10)||(mobile.length>10)){
                setEr('* Enter a valid mobile number');
            }
            else if(!(validator.isEmail(qmail))){
                setEr("* Enter a valid email");
            }
        }
        else{
            setEr('* fill above fields.');
        }   
     }
    return(
        <div id='cf'>
            <label className="lab">Name</label><br/>
                <input type={"text"} value={qname} onChange={e=>setName(e.target.value) }/><br/><br/>
            <label>Email</label><br/>
                <input type={"text"} value={qmail} onChange={e=>setMail(e.target.value)}/><br/><br/>
            <label>Qualification</label><br/>
                <input type={"text"} value={qualification} onChange={e=>setQual(e.target.value)}/><br/><br/>
            <label>Year of pass</label><br/>
                <input type={"text"} value={year} onChange={e=>setYear(e.target.value)}/><br/><br/>
            <label>Phone number</label><br/>
                <input type={"text"} value={mobile} onChange={e=>setMob(e.target.value)}/><br/><br/>
            <div id="erm">{error}</div>
            <button id="sub" onClick={subForm}>Submit</button>
        </div>   
    ); 
}
export default CareerForm;