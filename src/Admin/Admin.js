
import React,{useState} from 'react';

import Batch from './Batch';
import "./Admin.css"

import { useNavigate,Route,Routes, Outlet} from "react-router-dom";
function Admin() {

   const navigate = useNavigate()
    const navigateToBatch = () => { navigate('Batch',{ replace: true })} ;
   const navigateToMentors = () =>{ navigate('Mentors', { replace: true })};
   const navigateToStudent = () => { navigate('Teachers', { replace: true })};
   const navigateToCourse = () =>{ navigate('Course', { replace: true })};

    return ( <><div><h2>MERN STACK ADMIN</h2></div>
  
  <div className='admincontainer'>
    <div className='Buttons' onClick={navigateToBatch}>ALL Students</div><br/>  
    <div className='Buttons'onClick={navigateToMentors}>Mentors</div><br/>
    <div className='Buttons' onClick={navigateToStudent}>Teachers</div><br/>
    <div className='Buttons' onClick={navigateToCourse}>course</div><br/>
  </div>
    
    
    <Outlet/>
    
    </> );
}

export default Admin;

