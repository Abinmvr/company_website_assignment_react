import './signup.css';
import axios from 'axios';
import { useState } from 'react';
import validator from 'validator';
import { Link,useHistory } from 'react-router-dom';
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
                axios.post("http://localhost:3001/signup",{
                    username:user,
                    email:email,
                    password:password
                }).then((response)=>{
                    const status = response.data.success;
                    console.log(status);
                    if(status===true){
                        const errtype = response.data.message;
                            history.push('/login');
                            // console.log(response);
                            setError(errtype)
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
                <Link to ='/login' id='logbtn'>Already a user ? Login</Link><br/>
                <div id='errdiv'>{error}</div>
            </div>
        </div>
    );
}
export default Signup;