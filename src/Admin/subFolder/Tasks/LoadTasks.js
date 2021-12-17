import React, { useState } from 'react';
import LectureAndTask from './lec&Tasks';

function LoadTasks() {


const LoadedTasks =()=>{ <ul style={{backgroundColor:'blue'}}> {LectureAndTask.map(async (a)=> {<li>a</li>})}</ul>}
    
    return ( <>{console.log(LectureAndTask)}

     
      </> );
    
}

export default LoadTasks;
