import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,} from 'react-router-dom';
import Admin from './Admin/Admin';
import Navigations from './loginsetup/loginNav';
import Sidebar from './Components/Openmain';
import Sessionroadmap from './Components/Class/Sessionroadmap';
import Login from './loginsetup/login';
import Class from "./Components/Class/class";
import Dashboard from "./Components/Dashboard/dashboard"
import Batch from './Admin/Batch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navigations/>
    <Admin/> */}
    
   <Navigations/>
    </BrowserRouter> 
 
  </React.StrictMode>,
  document.getElementById('root')
);



