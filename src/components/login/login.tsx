import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import {setLogin} from '../../redux/logRedux/loginAction';
import { RootState,AppDispatch } from '../../redux/store';
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function Login(){
        const history=useHistory();
        const[user,setUser]=useState('');
        const[password,setPassword]=useState('');
        const[loginstatus,setLoginstatus]=useState('');
        const dispatch:AppDispatch =useDispatch();
        const auth=useSelector((state:RootState)=>state.loginReducer.auth);
        const logInfunction=()=>{
                if((user!=='')&&(password!=='')){
                    axios.post(`${process.env.REACT_APP_NODE_APP_URL}login`,{
                    username:user,
                    password:password
                    }).then((response)=>{
                        const status = response.data.success;
                        if(status===true){    
                            dispatch(setLogin({...auth,isAuth:true}));
                            const token =response.data.token;
                            console.log(token);
                            // toast.success('Login successfull !',{position:toast.POSITION.TOP_CENTER,autoClose:false});
                            localStorage.setItem('token',token);
                            sessionStorage.setItem('username','user');
                            history.push('/home');   
                        }
                        else{
                            const errtype = response.data.message;
                            setLoginstatus(errtype);
                        }
                });
                }
                else{
                    setLoginstatus('*Please enter your details');
                }
        }
        return(
            <div id="logbox">
                <div id='loginform'>
                    <input className='inpbox' type={"text"} placeholder='' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setUser(e.target.value)}/><br/><br/>
                    <input className='inpbox' type={"password"} placeholder= ''onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} /><br/><br/>
                    <div>
                        <button className="loginbtn" onClick={logInfunction} >login</button><br/><br/>
                        <Link to ='/signup' id='signbtn'>Signup</Link>  
                    </div>
                    <div id='errdiv'>{loginstatus}</div>
                </div>
            </div>
        );
}
export default Login;