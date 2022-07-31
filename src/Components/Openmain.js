import React, { useState } from 'react';
import "./Openmain.css";
import {useParams,useNavigate,Route,Routes,BrowserRouter as Router, Link,useMatch, Outlet } from 'react-router-dom';
import Sidebardata from './Sidebardata';
import Class from './Class/class';
import Query from './Queries/queries';
import Tasks from './Tasks/Tasks';
import Dashboard from "./Dashboard/dashboard";
import axios from 'axios';

function Sidebar(props) {


   const Navigate=useNavigate()
    const[show,setShow]=useState(false)
    //const[linked,setlinked]=useState(false)
    const[classN,setclassN]=useState("")
    let {email}=useParams()

  
    console.log(classN)

    return ( <>
    <div className='mains'> 
    <nav >
       <div className='fixed' onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      <ul>
            { Sidebardata.map((i)=>{ 
            
            return( 
            <li  onClick={(e)=>{setclassN(i.link)}} className={(classN == i.link)? "blue":"white"} >
                 <i.Icon/><br/>
                 {show ?  
                <div onClick={()=>{Navigate(i.link)}} >{i.for}</div>:""}
              
            </li>)
        
        })}
            </ul>
            </div>
  
        </nav>
        <Outlet/></div>
  
   </> 
)}

export default Sidebar;