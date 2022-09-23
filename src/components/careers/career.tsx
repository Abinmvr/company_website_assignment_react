import './career.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import CareerText from "./careertext";
import CareerData from "./careerdata"
import CareerForm from "./careerform";
import img1 from '../../asset/images/career1.webp';
import { useSelector} from "react-redux/es/exports";
import { RootState } from '../../redux/store';
function Career(){
    const join = useSelector((state:RootState)=>state.CareerReducer.join);
    return(
        <div>
            <Navbar/>
        <div id="career">
            <div id='cimg'><img src={img1} alt=""/></div>
            {/* <p>Everything starts with ambition.
            We turn bold ideas into groundbreaking business solutions for a tomorrow built on technology.</p> */}
            <div id="car">
            { join.isjoin === true? <CareerForm/>: <CareerData/>}
           <CareerText/>
            </div>
         </div>
         <Footer/>
    </div>
    );}
export default Career;