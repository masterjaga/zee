import React,{useState,useEffect,useContext,createContext}from 'react';
import data,{batch} from './temprory';
import Discription from './Discription';
import "./sessionroadmap.css";
import PropTypes from 'prop-types';
import Class from './class';
export const MyContext =createContext();
let a=[{Ti:"", c:["Intro to web4","Browser wars"],task:"some href4",subType:2}]

export const showDiscription=(a)=>{
       if (a==null){a=[{Ti:"11", c:["Intro to web4","Browser wars"],task:"some href4",subType:2}]}
                       return Object.values(a)[0]
       
}


const Sessionroadmap =(params) =>{


let a=[{Ti:"", c:["Intro to web4","Browser wars"],task:"some href4",subType:2}]
const[user,setuser]=useState("ill")

const [Value,setValue]=useState({a})


let topicslen=batch.topics.length
let count=0
var array=[]

const activated=(count,a)=>{
         if (count <=topicslen){
            return(<> {console.log('counted',count)}
            <div className ="sessionroadmapdo"  onClick={()=>setuser(a)}><h3>{count}</h3>  </div><hr/> </>)
         }
         else {return(<>
            <div className ={`sessionroadmapin`}><h3>{count}</h3></div></>)}

}

 
    return ( <>

<div className='activated'>
      { data.map(p=>{
      
      return(<>   
      {p.course.map(a=>{
          {count+=1}
         
          return( <>{activated(count,a)}
                   
                  {(user==a) && params.setdata(a)}</> )
            
        })}</>)})}</div></>)
        

}


export default Sessionroadmap/*  =React.memo(Sessionroadmap) */;