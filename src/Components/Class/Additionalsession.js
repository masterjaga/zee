import React,{useContext,useState} from 'react';
import Sessionroadmap from './Sessionroadmap';
import person from "../icons/person.jpg";
import "./class.css";
import { showDiscription } from './Sessionroadmap';
import Discription from './Discription';
import { MyContext } from './Sessionroadmap';

function Class() {

//  const value =useContext(MyContext)
 const[data,setdata]=useState({Ti:"aa",c:["Intro to web4","Browser wars"],task:"some href4",subType:2})
//  {console.log(valued)}
    


const showDiscription=()=>{
                             return (<><div>{data.Ti}</div></>)
}
console.log(data)
    return ( <>
  
    <div className='header'>
        {data.Ti}
        <div>Class</div>
          <div>name {"  "}<img src={person}/></div></div>

          <div className='selections'>
              <div className='button'> 
          click button to play recording
          <button  onClick={()=>{console.log("abc....")}}>play recording</button></div>
          <div className='sessionroadmap'> <Sessionroadmap setdata={setdata}/></div></div>
          <div>
             {showDiscription()}
             
  
          </div>

   
   
    </> );
}

export default Class;
