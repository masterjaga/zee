import React from 'react';
import Completion from './Completion/completion';
import Barchart from './graphs/baChart';
function Dashboard() {

    return ( <>
    <div><div>Dashboard</div>
    <div class="header">
        <div>name</div>
        <div>icon</div>
    </div>
    </div>
    <div><div><Completion/></div>
    <div>
        <button>Go to Classes</button>
    </div>
    <div>
        <div><Barchart/></div>
    <div>Webkata</div>
    </div>Tasks</div>
    
    
    </> );
}

export default Dashboard;