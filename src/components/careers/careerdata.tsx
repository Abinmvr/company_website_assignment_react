import './career.css';
import { setJoin } from '../../redux/careerRedux/careerAction';
import {useDispatch,useSelector} from "react-redux/es/exports";
import { RootState,AppDispatch } from '../../redux/store';
function CareerData(){
    const dispatch:AppDispatch =useDispatch();
    const join = useSelector((state:RootState)=>state.CareerReducer.join)
    const addCareer=()=>{
        dispatch(setJoin({...join,isjoin:true}));
    }
    return(
        <div id="cd">
            <h4 id="crtit">THE BIG MOVE</h4>
            <p id='crpara'>Watching the world of next-tech unfold?<br/> It's time to be part of it</p>
            <button id="join" onClick={addCareer}>Join us</button>
        </div>
    );
}
export default CareerData;