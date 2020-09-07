import React, { useState } from 'react';


//  // this won't work
  // let count = 0
    // const IncNum = () => {
    //     // count++;  // count dosen't increments here
    //     console.log("working",count++);   // count incremtns works here

    // };
const App = () => {
    // const state = useState();
    // console.log(state); // check the output for this  it returns an array with two items

    const [ count, setCount ] = useState(0);
    const IncNum = () =>{
        setCount(count + 1); 
    }

    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}>click me</button>
        </>
    ); 

}

export default App;