import './achieve.css';
import { Component } from 'react';
import { connect } from "react-redux";
import { RootState } from '../../redux/store';
import { getAchieve } from '../../API/homeApI';
import { getAchieveProps,dispalayAchieves } from '../../Typescript/typescript';
import {withRouter} from 'react-router';
class Achievements extends Component<getAchieveProps,{}>{
     
     componentDidMount()
     {    
         this.props.getAchieve();
     //     this.props.history;
         
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
                                   <h4>{data.title}</h4>
                                   <div className="imgdiv">
                                   <img src={`${process.env.REACT_APP_NODE_APP_URL}/${data.image}`} alt="img"/>
                                   </div>
                                   <p>{data.details}</p>
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
// withRouter(Achievements)
export default connect(mapStateToProps,mapDispatchToProps)(Achievements)