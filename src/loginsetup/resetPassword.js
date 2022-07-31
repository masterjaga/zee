import axios from "axios";
import { useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
export default function Resetpassword() {

    const [Person, setPerson] = useState({password:"",reenterpassword:"",success:false})

    const navigate=useNavigate();

    const{email,authtoken}=useParams()

    const submit=async () =>{

        let error = []
        for(var k in Person){

          if(Person[k]==0 &&  k!="successfulPOST"){error.push(k)}}
            console.log(error)

            if (error.length!=0) 
            return alert("please fill all fields") 
        else{
        try {if (Person.password===Person.reenterpassword){
                  await (await axios.post(`http://localhost:3090/:${email}/${authtoken}`,(Person))).then(response=>setPerson({...Person,success:true})).
                  catch((error)=>alert(error))
        }
          else {alert("Password didn't match")
                  setPerson({password:"",reenterpassword:""})} 
                
        } catch (error) {
            console.log(error)}

        Person.success ? navigate("/login", { replace: true }):alert("Please login")
           
        
    
}}

    const handleChange=(e)=>{
        const {name,value}=e.target
         setPerson({...Person,  [name] :value}) 
         console.log(e.target.value)}
 

    return ( < div className="container">
     <form className="form"><h4>
            <div>
                 <label>Password{' '}:</label>
                <input value={Person.password}
                name="password"
                placeholder="password"
                onChange={handleChange} />
            </div>
            <div>
                 <label>RePassword{' '}:</label>
                <input style={{margin:"0px"}} value={Person.reenterpassword}
                name="reenterpassword"
                placeholder="re-enter-password"
                onChange={handleChange} />
            </div>
            <button onClick={submit} >Reset</button>
            </h4></form></div> );
}

