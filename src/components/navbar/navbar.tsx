import './navbar.css'
import { NavLink,useHistory } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { RootState,AppDispatch } from '../../redux/store';
import { setLogin } from '../../redux/logRedux/loginAction';
import { setJoin,setSubmit } from '../../redux/careerRedux/careerAction';
function Navbar(){
        const dispatch:AppDispatch = useDispatch();
        const history =useHistory();
        const auth=useSelector((state:RootState)=>state.loginReducer.auth);
        const join=useSelector((state:RootState)=>state.CareerReducer.join);
        const submit=useSelector((state:RootState)=>state.CareerReducer.submit);
        const logOutfn=()=>{
                dispatch(setLogin({...auth,isAuth:false}));
                dispatch(setJoin({...join,isjoin:false}));
                dispatch(setSubmit({...submit,issubmit:false}));
                history.push('/');
                localStorage.clear();
                sessionStorage.clear();
        }
        return (
                <nav> 
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/employee'>Employee</NavLink>
                        <NavLink to='/careers'>Careers</NavLink>
                        <NavLink to='/about'>About us</NavLink>
                        {/* <NavLink to='/signup'>Sign up</NavLink> */}
                        { submit.issubmit === true ?<NavLink to='/profile'>Profile</NavLink>:''}
                        { (sessionStorage.getItem('username')==='user'||auth.isAuth === true) ?
                               <button id="logbtn" onClick={logOutfn}>Logout</button>: <NavLink to='/login'>Login</NavLink>
                        }  
                </nav> 
        );}
export default Navbar;