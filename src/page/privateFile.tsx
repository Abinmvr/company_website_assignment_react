import { RootState } from "../redux/store";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
export const PrivateFile=({children,...rest}:any)=>{
        const auth=useSelector((state:RootState)=>state.loginReducer.auth);
        return(
            <Route {...rest} render= {()=>{
                    return (sessionStorage.getItem('username')==='user'|| auth.isAuth === true) ? 
                        <div>{children}</div> :
                        <Redirect to="/"/>
            }}/>
        )
}