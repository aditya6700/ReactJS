import React, { useState } from 'react';

const App = () => {
    const blue = "rgb(70, 198, 202)";
    const [ bgcolor, newColor] = useState(blue);

    const bName = "Click Me";
    const [ fName , uName] = useState(bName)
    
    const sChange = () => {
         let newbg = 'rgb(101, 212, 58)';
         newColor(newbg);
         uName("color changed !! 🤕");
    };

    const normal = () => {
        newColor(blue);
        uName("back to normal 😠");
    }
    return(
        <>
            <div style={{backgroundColor:bgcolor}}>
                <button onMouseOver={sChange} onMouseOut = {normal}> {fName} </button>
            </div>

        </>
    );
};

export default App;