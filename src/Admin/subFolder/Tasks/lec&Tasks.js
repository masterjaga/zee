import React from 'react';
import courseFile from '../Course/Course';



function Leacture() {
  return ( <>

  {courseFile.map(value=>{value.keys.map(a=>{<div>a</div>})})}
  
  
  
  </>);
}

export default Leacture;