import { useState } from "react";
import React  from 'react';
import axios from "axios";
import './login.css';
import { useNavigate,Route,Routes,BrowserRouter as Router,Link, useParams,Outlet} from "react-router-dom";
import Sidebar from "../Components/Openmain";
import { getclasshome } from "../Components/apis/studentapi";
import Class from "../Components/Class/class";


const token=""
export default function Login(props) {
    const [Person, setPerson] = useState({email:"", password:""})
    let navigate = useNavigate();
  let {field}=useParams()

  console.log(field)

    const handleChange=(e)=>{
       const {name,value}=e.target
        setPerson({...Person,  [name] :value}) 
        }

    localStorage.clear()

    const submit=async(e) =>{

        try {
           e.preventDefault()

        let error = []
        for(var k in Person){

          if(Person[k]==0 ){error.push(k)}}
            console.log(error)

            if (error.length!=0) 
            return alert("please fill all fields")  
            else
            {await axios.post(`http://localhost:3080/login/${field}`,(Person)).
            then((response)=>{localStorage.setItem('token', response.data);
              toSucessFullogin(field,Person.email)}).
            catch((error)=>(alert(error),setPerson({email:"", password:""})))
            
        }} catch (error) {console.log(error)}}

        
    const toSucessFullogin=(field,email)=>{


        return(  (field=="student") ?  (navigate(`/student/${email}/sidebar`)):
                 (field=="Admin")? (navigate(`/Admin/${email}`)):"") }
                 
    const toSignup=()=>{navigate(`/signup/${field}`, { replace: true });}     
           
    const  forgotPassword =async () =>{
        console.log(Person.email)
        try{ if (+ Person.email.length>0)
            {console.log("Sending Link")
            await axios.post(`http://localhost:3080/forget/${Person.email}`).then(response=>alert ("Please Check the link in mailbox to reset password")).catch
            (error=>(console.log(error)));
            setPerson({email:"",password:""}) }
          else alert("please enter your email")}
    catch (error){console.log(error)}
       }

    return ( <>
   {(field == "student" || "teacher" || "mentor" || "admin")?
    (<div className="container"> 
      
        <form className={field} ><h4>{field} Login
            <div className="name">

                 <label>Email{' '}:</label>{' '}
                <input value={Person.email}
                name="email"
                placeholder="Email"
                onChange={handleChange} /><br/>
            </div>
            <div className="name">
                 <label>Password{' '}:</label>
                <input value={Person.password}
                name="password"
                placeholder="password"
                onChange={handleChange} />
            </div></h4>
            <u onClick={forgotPassword}>Forgot Password</u>
            <div className="buttoni"><button onClick={submit} >Login</button><br/></div>
            <button onClick={toSignup} >Sign up</button><br/> 
             </form>
            
    </div>):"soorry page not found"}
    <Outlet/>
    
   
    </> );
}

