import React from 'react';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import './login.css';
import Register from './register';
 
const Reg =(e)=>{
       
<Register/>
console.log(e)
}

function Login() {
 
    return (<> <form className='form'>

   {'  '} <label> Email :</label>
    <input type='text'
           value='email'
            onChange={(e)=>{console.log(e)}}/><br/><br/>

   {'  '} <label>Password :</label>
    <input type='text'
           value='password'
           onChange={(e)=>{console.log(e)}}/>
    
    
    </form> 
   <button onClick={(e)=>{Reg(e)}}>Register</button>
    </>);
}

export default Login;