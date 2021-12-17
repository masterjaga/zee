import './Completion.css'
import React,{useState} from 'react';
function Completion() {

    const [length, setlength] = useState(70)


    return (<div className='completion'>
             <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <div>Completion</div>
                 <div>{length}/100%</div></div>
              <div className='Tline'>
                  <div style={{backgroundColor:'green',width:`${length}%`,height:'100%'}}>
                       </div></div></div>);
}

export default Completion;