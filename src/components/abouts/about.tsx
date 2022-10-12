import './about.css';
import {useEffect} from "react";
import Footer from '../footer/footer';
import Navbar from "../navbar/navbar";
import {getAbout} from "../../API/aboutAPI";
import Feedback from '../feedback/feedback';
import image1 from '../../asset/images/9.jpg';
import { RootState,AppDispatch } from "../../redux/store";
import { displayAbout } from '../../Typescript/typescript';
import { useSelector,useDispatch } from "react-redux/es/exports";
function AboutUs(){
      const dispatch:AppDispatch=useDispatch()
      const aboutdata=useSelector((state:RootState)=>state.aboutReducer.about)
      const error=useSelector((state:RootState)=>state.aboutReducer.error)
      const loading=useSelector((state:RootState)=>state.aboutReducer.loading)
      useEffect(()=>dispatch<any>(getAbout()),[]) 
     return(
            <div> <Navbar/>
                  <div id='abt'><img src={image1} alt=" pic"/></div>
                  <div id="sec4">
                  {loading?<p className="load">Loading...</p>:null}
                  {error?<p className="err">Error: {error}</p>:null}
                  <h2>About Us</h2>
                  <p className="sec4p">A global leader in next-generation digital services and consulting</p>
                  <div className='div4'>
                              {aboutdata.map((data:displayAbout,event:number)=>(
                                    <div className="divbox" key={event}>
                                          <h4 className="countr">{data.counter}+</h4>
                                          <p className="sec4p">{data.text}</p>
                                    </div>
                              ))}
                  </div>
            </div>
            <Feedback/>
            <Footer/>    
        </div>
        );}
export default AboutUs;