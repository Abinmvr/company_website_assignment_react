import Home from "./home";
import Profile from "./profile";
import Store from "../redux/store";
import {Provider} from 'react-redux';
import { PrivateFile } from "./privateFile";
import Login from "../components/login/login";
import Signup from "../components/signup/signup";
import AboutUs from "../components/abouts/about";
import Career from "../components/careers/career";
import Feedback from "../components/feedback/feedback";
import Employee from "../components/Employees/employee";
import CareerForm from "../components/careers/careerform";
import EmployeeDetails from "../components/Employees/employeedetails";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
function MainPage(){
    return(
        <Provider store={Store}>
            <Router>
                <Switch>  
                    <Route path='/home'><PrivateFile><Home/></PrivateFile></Route>
                    <Route path='/about'><PrivateFile>< AboutUs/>
                        <Route  path='/about/feed'><Feedback/></Route>
                    </PrivateFile></Route>
                    <Route  path='/careers'><PrivateFile>< Career/>
                        <Route  path='/careers/form'><CareerForm/></Route>
                    </PrivateFile></Route>
                    <Route  path='/employee'>  <PrivateFile>< Employee/></PrivateFile></Route>
                    <Route  path='/employeedetail'>  <PrivateFile><EmployeeDetails/>  </PrivateFile></Route>
                    <Route  path='/profile'>  <PrivateFile>< Profile/>  </PrivateFile></Route>
                    <Route  path='/signup'><Signup/></Route>
                    <Route  path='/'><Login/></Route>
                    <Route path='*'><h4>404 error - Page not found</h4></Route>
                </Switch>
            </Router>
        </Provider>
    );        
}
export default MainPage;