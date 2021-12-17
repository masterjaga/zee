import axios from 'axios';
import React,{useState,useEffect} from 'react';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';

function Batch() {

    const [toggle, settoggle] = useState(false)
    const [atoggle, setatoggle] = useState(false)
    const [student, setstudent] = useState({student:{data:[{_id: '', name: 'loading user'},]}})
    const Batches = []
    const [a, seta] = useState([{name:'para'},{name:'this'}])

    const batchDetails = a.map((q)=>{ return (<div key={q}>{q.name}</div>)}) ;
    const loadStudent =async()=> { let Student=await axios.get(`http://localhost:3005/student`)
                                         setstudent({student:Student})}
    const  showBatches = student.student.data.map(a => <li><button onClick={()=>{setatoggle(!atoggle); console.log(atoggle)}} >{a[1]}</button></li>)

    useEffect( ()=>{ loadStudent()},[])

    return ( <> 
    <div>{console.log(student)}</div>
    
    <button onClick={()=>{settoggle(!toggle); console.log(toggle)}}>Batches</button>
      <ul> {toggle? showBatches:''}</ul> 
     <div>{atoggle? batchDetails:''}</div> 
      </> );
}

export default Batch;