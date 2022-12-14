import './signup.css';
import axios from 'axios';
import { useState } from 'react';
import validator from 'validator';
import { Link,useHistory } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup(){
    const history =useHistory();
    const [user,setUser]=useState('');
    const[email,setEmail]=useState('');
    const [error,setError]=useState('');
    const [password,setPassword]=useState('');
    const signupFn=()=>{
        if((user!=='')&&(email!=='')&&(password!=='')){
            if(validator.isEmail(email)){
                console.log(user,email,password);
                axios.post(`${process.env.REACT_APP_NODE_APP_URL}signup`,{
                    username:user,
                    email:email,
                    password:password
                }).then((response)=>{
                    const status = response.data.success;
                    console.log(status);
                    if(status===true){
                            toast.success('Signup successfull !',{position:toast.POSITION.TOP_CENTER,autoClose:false});
                            history.push('/');
                    }
                    else{
                        const errtype = response.data.message;
                        setError(errtype); 
                    }  
                }); 
            }
            else{
                setError('Enter valid email');
            }     
        }
        else{
            setError('Enter your details');
        }
    }
    return(
        <div id="signup">
            <div id='signupf'>
                <label className='signuplabel'>Name:</label>
                <input className='signtext' type={"text"} value={user} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setUser(e.target.value)}/><br/><br/>
                <label className='signuplabel'>Email:</label>
                <input className='signtext' type={"text"} value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}/><br/><br/>
                <label className='signuplabel'>Password:</label>
                <input className='signtext' type={"password"} value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/><br/><br/>
                <div>
                    <button className="signupbtn" onClick={signupFn} >SignUp</button><br/><br/> 
                </div>
                <Link to ='/' id='logbtn'>Already a user ? Login</Link><br/>
                <div id='errdiv'>{error}</div>
            </div>
        </div>
    );
}
export default Signup;