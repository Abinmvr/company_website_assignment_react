import './footer.css';
import { useEffect } from 'react';
import { getFooter } from '../../API/footerAPI';
import { useSelector,useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../../redux/store';
import { displayFooter } from '../../Typescript/typescript';
function Footer(){
        const dispatch:AppDispatch =useDispatch();
        const footer=useSelector((state:RootState)=>state.footerReducer.footer);
        const error=useSelector((state:RootState)=>state.footerReducer.error);
        const loading=useSelector((state:RootState)=>state.footerReducer.loading);
        useEffect(()=>dispatch<any>(getFooter()),[])
        return(
            <div id ="foo">
                    {loading?<p className="load">Loading...</p>:null}
                    {error?<p className="err">Error: {error}</p>:null}
                    {footer.map((data:displayFooter,even:number)=>(
                        <div key={even}>
                                <h4>{data.head}</h4>
                                <ul className="fc">
                                    <li>{data.text1}</li>
                                    <li>{data.text2}</li>
                                    <li>{data.text3}</li>
                                    <li>{data.text4}</li>
                                    <li>{data.text5}</li>
                                </ul>
                        </div>
                    ))}
                    <div>
                        <h4>connect with us</h4>
                        <ul id="soc" className="fc">
                            <li>f</li>
                            <li>in</li>
                        </ul>
                    </div>
            </div>
        );
}
export default Footer;