import React,{useState} from 'react';
import './Tasks.css'

function Tasks() {

    const [toggle, setToggle] = useState(false)

     const onChange =()=>{  setToggle(!toggle)
        console.log(toggle)}

   
    return (<> <div className='cards'>
               <div>
                   <h4>Name</h4>
                     (B261WD)-react router
               </div>
               <div className='right'>
                   submitted on 1/1/2021 <br/>
                  <div> Yet to be Graded {' '} 
                    <button onClick={onChange}>Task</button></div>
                    
               </div>
                 </div>
                 {toggle ? <Tocard/>:''}
                 </> );



function Tocard() {
    return (<div className='cards'>
    <div>
     <h4>Name</h4>
       (B261WD)-react router
    </div>
    <div className='right'>
     submitted on 1/1/2021 <br/>
    <div> Yet to be Graded </div>
      
    </div>
    </div>)   ;
  
}

}

export default Tasks;  