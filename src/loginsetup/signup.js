import { useState } from "react";
import React  from 'react';
import axios from "axios";
import "./login.css";
import { useNavigate,Route,Routes,BrowserRouter as Router,Link, useParams} from "react-router-dom";


export default function Signup() {
    const [Person, setPerson] = useState({ name:"",
                                          email:"",
                                       password:"",
                                repeat_password:""})
    
    const navigate=useNavigate()

    let {field}=useParams()

    const handleChange=(e)=>{
       const {name,value}=e.target
        setPerson({...Person,  [name] :value}) 
        
        }

        const submit= async (e)=>{        
            try {
                e.preventDefault()
                var error = []
                for(var k in Person)
                {if(Person[k]==0)
                    {error.push(k)}}
                      console.log(error)
                 if (error.length>0 )
                  {alert("please fill all fields")
                  return setPerson({ name:"", email:"", password:"", repeat_password:""} )}  

                 if (Person.password!=Person.repeat_password) 
                    {alert("Password didn't match")
                     return setPerson({...Person,password:"", repeat_password:""}) }

                 if (field=="student")
                   {console.log(true);
                    setPerson({...Person,mentorcode:"no",batchno:"no"});
                    console.log(Person)
                  } 

                     console.log(Person)

                await axios.post(`http://localhost:3080/login/signup/${field}`,(Person)).
                 then(response=>console.log(response)).then(()=>{navigate(`/login/${field}`, { replace: true });} ).catch((error)=>{console.log(error)})

                }catch (error) {
                console.log(error)
               
            }
            
        
    }

    return ( <>
    <div className="container">
        <form ><h4>
            <div>
                 <label>Name{' '}:</label>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input value={Person.name}
                name="name"
                placeholder="Name"
                onChange={handleChange} /><br/>
            </div>
            <div>
                 <label>Email{' '}:</label>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input value={Person.email}
                name="email"
                placeholder="Email"
                onChange={handleChange} /><br/>
            </div>
            <div>
                 <label>Password{' '}:</label>
                <input value={Person.password}
                name="password"
                placeholder="password"
                onChange={handleChange} />
            </div>
            <div className="inputs">
                 <label>Repassword:</label>
                <input value={Person.repeat_password}
                name="repeat_password"
                placeholder="reenterpassword"
                onChange={handleChange} />
            </div>
            <button onClick={submit} >Sign up</button><br/>
            
            
            </h4> </form>
    </div></> );
}