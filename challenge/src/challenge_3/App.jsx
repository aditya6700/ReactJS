import React, { useState } from 'react';

const App = () => {
    let DigiTime = new Date().toLocaleTimeString();

    const [ CurTime, UpTime] = useState(DigiTime);
    const UpdateTime = () => {
        DigiTime = new Date().toLocaleTimeString();
        UpTime(DigiTime);
    };

    setInterval(UpdateTime,1000);
    
    return(
        <>
            <h1> {CurTime} </h1>
        </>
    );
};

export default App;