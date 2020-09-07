import React, { useState } from 'react';


const App = () => {
    
    let Time = new Date().toLocaleTimeString();

    const [ curTime, setTime] = useState(Time);
    const UpTime = () => {
        Time = new Date().toLocaleTimeString();
        setTime(Time);
    }
    return(
        <>
            <h1> {curTime} </h1>
            <button onClick={UpTime}>Update Time </button>
        </>
    );
}

export default App; 