import React from 'react';
import './login.css';
import Login from './login';
function Register() {
    return (<> <form className='form'>
   
   {'  '} <label> Name:</label>
    <input type='text'
           value='name'/><br/><br/>
           
   {'  '} <label> Email:</label>
    <input type='text'
           value='email'/><br/><br/>

   {'  '} <label>Password:</label>
    <input type='text'
           value='password'/>
    
    
    </form> 
    {'already have Account'}
    {/* <button onClick={<Login/>}>Click here to login</button> */}
    </>);
}

export default Register;