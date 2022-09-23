import './slider.css';
import { useState} from 'react';
import picture1 from '../../asset/images/n2.jpg';
import picture2 from '../../asset/images/n1.jpg';
import picture3 from '../../asset/images/n3.jpg';
import picture4 from '../../asset/images/n4.jpg';
function Slider(){
    let[displaySlide,setSlide]=useState(picture1);
    let[slidenumber,setSlideNumber]=useState(0);
    const changeImage=(slide:string)=>{
            const pictures=[picture1,picture2,picture3,picture4];
            if(slide==='-'){
                if(slidenumber===0){
                    setSlide(picture4);
                    setSlideNumber(3)
                }
                else{
                    setSlide(pictures[slidenumber-1])
                    setSlideNumber(slidenumber-1);
                }
            }
            else if(slide==='+'){
                if(slidenumber===3){
                    setSlide(picture1);
                    setSlideNumber(0);
                }
                else{
                    setSlide(pictures[slidenumber+1])
                    setSlideNumber(slidenumber+1);
                } 
            }
    }
    const chooseSlide=(image:any)=>{
        const choosepic=[picture1,picture2,picture3,picture4];
        setSlide(choosepic[image]);
    }
    return (
            <div id='slider'>
                <div id="imgslide">
                    <img  src={displaySlide} alt='slider'/>
                    <div id="btns">
                      <input id="pre" onClick={()=>changeImage('-')} type={"button"} value="<"/>
                      <input id="nex" onClick={()=>changeImage('+')} type={"button"} value=">"/>
                    </div>
                    <div id="ptbtns">
                             <input id="pt1"  className='points' onClick={()=>chooseSlide(0)} type={"button"} value=""/>
                             <input id="pt2"  className='points' onClick={()=>chooseSlide(1)} type={"button"} value=""/>
                             <input id="pt3"  className='points' onClick={()=>chooseSlide(2)} type={"button"} value=""/>
                             <input id="pt4"  className='points' onClick={()=>chooseSlide(3)} type={"button"} value=""/>
                      </div>
                </div>  
            </div>
        );
    }
export default Slider;