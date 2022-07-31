import React,{useContext,useState,useEffect} from 'react';
import Sessionroadmap from './Sessionroadmap';
import person from "../icons/person.jpg";
import "./class.css";
import { showDiscription } from './Sessionroadmap';
import Discription from './Discription';
import { MyContext } from './Sessionroadmap';
import { getclasshome } from '../apis/studentapi';
import {Routes,Route, useParams} from 'react-router-dom';

function Class() {

//  const value =useContext(MyContext)
 const[data,setdata]=useState({Ti:"aa",c:["Intro to web4","Browser wars"],task:"some href4",subType:2})
{console.log(data)}
let {email}=useParams()
// const {token}=localStorage.getItem("token")



// useEffect(() => {
 
// getclasshome(token,email)

// }, [token])

    


const showDiscription=()=>{return (<><div>{data.Ti}</div></>)
}

    return ( <div>
  
    <div className='header'>
        
        <div>Class</div>
          <div>name {"  "}<img src={person}/></div></div>

          <div className='selections'>
              <div className='button'> 
          click button to play recording
          <button  onClick={()=>{console.log("abc....")}}>play recording</button></div>
          <div className='sessionroadmap'> <Sessionroadmap setdata={setdata} /></div></div>
          {console.log("data.ti2")}
          <div>{data.Ti1}</div>
         
    </div> )
          
}

export default Class;