import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Jobs from "./job";
import ApplyForm from "./applyForm";
import { useSelector} from "react-redux/es/exports";
import { RootState } from '../../redux/store';
const JobDetails=()=>{
    const submit = useSelector((state:RootState)=>state.jobReducer.submit);
    return(
        <div>
            <Navbar/>
            <div id="job_main">
            { submit.issubmit === true? <ApplyForm/>:<Jobs/>}
            </div>
            <Footer/>
        </div>
    );
}
export default JobDetails;