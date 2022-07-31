import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Addbatch } from '../Components/apis/batchapi';

function Batch() { 

    const [toggle, settoggle] = useState(false)
   /* const [atoggle, setatoggle] = useState(false)
    const [student, setstudent] = useState({student:{data:[{_id: '', name: 'loading user'},]}})
    const Batches = []
    const [a, seta] = useState([{name:'para'},{name:'this'}])

    const batchDetails = a.map((q)=>{ return (<div key={q}>{q.name}</div>)}) ;
    const loadStudent =async()=> { let Student=await axios.get(`http://localhost:3080/admin/batches`)
                                         setstudent({student:Student})}

                                         
    const  showBatches = student.student.data.map(a => <li><button onClick={()=>{setatoggle(!atoggle); console.log(atoggle)}}>{a[1]}</button></li>)

    useEffect(()=>{ loadStudent()},[]) */

   
    const token=localStorage.getItem("token")
   

    return ( <> 
    {/* <div>{console.log(student)}</div>
     <button onClick={()=>{settoggle(!toggle); console.log(toggle)}}>Batches</button>
      <ul> {toggle? showBatches:''}</ul> 
     <div>{atoggle? batchDetails:''}</div> */}

     <div onClick={()=>{settoggle(!toggle)}}>Create new Batch</div>
    {/* // <div onClick={viewbatch}> View Batch</div> */}

    {toggle && <Createbatch/>}

      </>  );
}

export default Batch;

export const Createbatch=()=>{
    const[newBatch,setnewBatch]=useState({Batchno:"",Students:[],Course:[]})
    const token=localStorage.getItem("token")


    return(  <div>
          <label>Batchno:</label>
          <input type="text" placeholder='enter batch no' value={newBatch.Batchno}
           onChange={(e)=>{setnewBatch({...newBatch,Batchno:e.target.value})}}   />
          <button onClick={()=>{Addbatch(newBatch,token)}}>Submit</button>
      </div>)
  }

export const Viewbatch=()=>{


}