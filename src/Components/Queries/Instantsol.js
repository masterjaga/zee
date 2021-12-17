import React,{useReducer} from 'react';
function Instantsol() {

  



    const clicked=()=>{console.log('form is called')}
    return (<div> <h1>Question</h1>
                  <div>bvfvbkvbkdvbkdvbdbv</div>
                  <input type='text'/>
                  <button>submit</button>
                  <div>if satisfied then place confirm</div>
                  <div><button onClick={clicked()}>Cancel</button>
                           <button>Confirm</button></div>
                  
                  </div>
              );
}

export default Instantsol;