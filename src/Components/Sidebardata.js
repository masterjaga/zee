import Class from "./Class/class";
import Dashboard from "./Dashboard/dashboard";
import Tasks from "./Tasks/Tasks";
import Query from "./Queries/queries";
import { BsPersonSquare } from 'react-icons/bs';
import {CgLoadbarDoc} from 'react-icons/cg';

 const Sidebardata=[
          
       { Icon:BsPersonSquare,
       link :"class",
        for:"class"},
       {  Icon:BsPersonSquare,
       link :"queries",
       for:"Queries"},
       {  Icon:CgLoadbarDoc,
       link :"Tasks",
       for:"Tasks"
      }, {  Icon:CgLoadbarDoc,
      link :"dashboard",
      for:"Dashboard"
     },
      

]

export default Sidebardata;