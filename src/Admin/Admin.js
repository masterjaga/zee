
import React,{useState} from 'react';

import Batch from './batch';

import { useNavigate} from "react-router-dom";
function Admin() {

   const navigate = useNavigate()
    const navigateToBatch = () => { navigate('./batch', { replace: true })} ;
   /*  const navigateToMentors = () => window.location.href='/Mentors';
    const navigateToStudent = () => window.location.href='/Teachers';
    const navigateToCourse = () => window.location.href='/course';
 */
    return ( <><div><h2>MERN STACK ADMIN</h2></div>
    
          <span path="/Batch" element={<Batch/>} />
         {/*  <Route path="/Mentors" element={<Mentors/>} />
          <Route path="/Teachers" element={<Teachers/>} />
          <Route path="/Course" element={<Course/>} /> */}
     <button onClick={navigateToBatch}>ALL Students</button>
    
    
    
   {/*  <button onClick={navigateToMentors}>Mentors</button>
    <button onClick={navigateToStudent}>Teachers</button>
    <button onClick={navigateToCourse}>course</button> */}
    
    </> );
}

export default Admin;

