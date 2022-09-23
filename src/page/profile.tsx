import './profile.css';
import { Link } from "react-router-dom";
import proimg from'../asset/images/20.png';
import { useEffect,useState } from "react";
import Navbar from "../components/navbar/navbar";
function Profile(){
                let[data,setData]=useState<any>([{'name':'','mail':'','qual':'','qyear':'','qmob':''}]);
                useEffect(()=>{
                        const arr=['name','mail','qual','qyear','qmob']
                        let x=localStorage.getItem('qname');
                        let y=localStorage.getItem('qmail');
                        let z=localStorage.getItem('qual');
                        let u=localStorage.getItem('qyear');
                        let v=localStorage.getItem('qmob');
                        for(let i=0;i<arr.length;i++){
                            console.log(localStorage.getItem(arr[i]));
                        }
                        if((x!=='')&&(y!=='')&&(z!=='')&&(u!=='')&&(v!=='')){
                        setData({'name':x,'mail':y,'qual':z,'qyear':u,'qmob':v});
                    }
                },[]);
                return(
                    <div>
                        <Navbar/>
                        <div className='pers'> 
                            <div id="propic"><img src={proimg} alt="pic" /></div> 
                            <h2>Personal Details</h2>
                            <p> Name : {data.name}</p>
                            <p >Email : {data.mail}</p>
                            <p >Qualification : {data.qual}</p>
                            <p >Year of Pass : {data.qyear}</p>
                            <p >Phone number : {data.qmob}</p>
                            <Link to='/careers'>Add details</Link>
                        </div>
                    </div>
                );
}
export default Profile;