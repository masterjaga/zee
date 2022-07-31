import React from 'react';
import Login from './login';
import Signup from './signup';
import Resetpassword from './resetPassword';
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';
import Class from '../Components/Class/class';
import Sidebar from '../Components/Openmain';
 import Dashboard from '../Components/Dashboard/dashboard';
import Admin from '../Admin/Admin';
import Batch from '../Admin/Batch';
import Mentor from '../Admin/mentor';
import Teacher from '../Admin/subFolder/teacher';
import Course from '../Admin/subFolder/courses';
import Query from '../Components/Queries/queries';

export default function Navigations(){

 
  let {id}=useParams()

  return(
    <Routes>
{/* comman login Routes */}
      <Route path='login/:field' element={<Login />}></Route>
      <Route path="/signup/:field" element={<Signup />}/>
      <Route path="/resetpassword/:filed/:email/:authtoken" element={<Resetpassword />}/>
      
  {/* Student Routes */}
        <Route path='student/:email/sidebar' element={<Sidebar />}>
          <Route path='class' element={<Class/>}/>
          <Route path='queries' element={<Query/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/>
      </Route>

  {/*Admin Routes   */ }
  <Route path='Admin/:email' element={<Admin />}>
   {/*   <Route path='course' element={<Course />}/> */}
          <Route path="Batch" element={<Batch/>} />
          <Route path="Mentors" element={<Mentor/>} />
          <Route path="Teachers" element={<Teacher/>} />
          <Route path="Course" element={<Course/>} />
  </Route>
      
     
    </Routes>)
  
}



  
    
