import './achieve.css';
import { Component } from 'react';
import { connect } from "react-redux";
import { RootState } from '../../redux/store';
import { getAchieve } from '../../API/achieveAPI';
import { getAchieveProps,dispalayAchieves } from '../../Typescript/typescript';
class Achievements extends Component<getAchieveProps,{}>{
     componentDidMount()
     {    
         this.props.getAchieve();
     }
     render(){
          return(
               <div id="sec2">
                    <h2>Achievements</h2>
                    {this.props.loading?<p className="load">Loading...</p>:null}
                    {this.props.error?<p className="err">Error: {this.props.error}</p>:null}
                    <div className='secdiv'>
                         {this.props.achievedata.map((data:dispalayAchieves,event:any)=>(
                              <div className="secbox" key={event}>
                                   <h4>{data.headings}</h4>
                                   <div className="imgdiv">
                                        <img src={data.image} alt="img"/>
                                   </div>
                                   <p>{data.text}</p>
                              </div>
                         ))}
                    </div> 
               </div>
          );}
}
const mapStateToProps=(state:RootState)=>{
          return{
               error: state.achieveReducer.error,
               achievedata : state.achieveReducer.achieve,
               loading : state.achieveReducer.loading,
          }
}
const mapDispatchToProps=(dispatch:any)=>{
     return{
          getAchieve : ()=>dispatch(getAchieve())
     }
}    
export default connect(mapStateToProps,mapDispatchToProps)(Achievements)